-- ===== ລະບົບບັນຊີລູກຄ້າ (ຍອດເງິນ + ປະຫວັດ) — ເຂົ້າເຖິງໄດ້ສະເພາະຜ່ານ rpc admin_* ທີ່ກວດ is_admin() =====
create table if not exists public.profiles(
  user_id uuid primary key references auth.users(id) on delete cascade,
  public_id int not null unique check (public_id between 1000 and 9999),
  balance bigint not null default 0,
  g0 bigint not null default 0,
  checked boolean not null default false,
  created_at timestamptz not null default now()
);
create table if not exists public.balance_log(
  id bigint generated always as identity primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  kind text not null check (kind in ('adjust','topup','purchase','check')),
  amount bigint not null,
  note text not null default '' check (char_length(note) <= 100),
  by_admin uuid,
  created_at timestamptz not null default now()
);
create index if not exists balance_log_user_idx on public.balance_log(user_id, created_at desc);
alter table public.profiles enable row level security;
alter table public.balance_log enable row level security;
revoke all on public.profiles from anon, authenticated;
revoke all on public.balance_log from anon, authenticated;

create or replace function public.admin_accounts() returns jsonb
language plpgsql volatile security definer set search_path = public as $$
declare r record; tries int;
begin
  if not public.is_admin() then raise exception 'forbidden' using errcode = '42501'; end if;
  for r in select u.id from auth.users u
           where not exists (select 1 from public.profiles p where p.user_id = u.id)
             and not exists (select 1 from public.admins a where a.user_id = u.id) loop
    tries := 0;
    loop
      begin
        insert into public.profiles(user_id, public_id) values (r.id, 1000 + floor(random()*9000)::int);
        exit;
      exception when unique_violation then
        tries := tries + 1;
        if tries > 200 then raise exception 'no free id'; end if;
      end;
    end loop;
  end loop;
  return coalesce((select jsonb_agg(x order by (x->>'bal')::bigint desc) from (
    select jsonb_build_object(
      'uid', p.user_id, 'id', p.public_id::text,
      'u', coalesce(nullif(u.raw_user_meta_data->>'username',''), split_part(u.email,'@',1)),
      'bal', p.balance, 'g0', p.g0, 'chk', p.checked,
      'top', coalesce(l.top,0), 'cnt', coalesce(l.cnt,0), 'spent', coalesce(l.spent,0), 'adj', coalesce(l.adj,0),
      'last', l.last_top,
      'join', (extract(epoch from u.created_at)*1000)::bigint,
      'log', coalesce((select jsonb_agg(jsonb_build_object('t',(extract(epoch from g.created_at)*1000)::bigint,'a',g.amount,'note',g.note) order by g.created_at desc, g.id desc)
                       from (select * from public.balance_log g2 where g2.user_id = p.user_id and g2.kind in ('adjust','check') order by g2.created_at desc, g2.id desc limit 20) g), '[]'::jsonb)
    ) as x
    from public.profiles p
    join auth.users u on u.id = p.user_id
    left join lateral (
      select sum(amount) filter (where kind='topup') as top,
             count(*) filter (where kind='topup') as cnt,
             -sum(amount) filter (where kind='purchase') as spent,
             sum(amount) filter (where kind='adjust') as adj,
             (extract(epoch from max(created_at) filter (where kind='topup'))*1000)::bigint as last_top
      from public.balance_log b where b.user_id = p.user_id) l on true
    where not exists (select 1 from public.admins a where a.user_id = p.user_id)
  ) s), '[]'::jsonb);
end $$;

create or replace function public.admin_adjust_balance(uid uuid, amt bigint, note text) returns bigint
language plpgsql volatile security definer set search_path = public as $$
declare nb bigint;
begin
  if not public.is_admin() then raise exception 'forbidden' using errcode = '42501'; end if;
  if amt is null or amt = 0 or abs(amt) > 10000000000 then raise exception 'bad amount'; end if;
  if exists (select 1 from public.admins where user_id = uid) then raise exception 'admin account'; end if;
  select balance into nb from public.profiles where user_id = uid for update;
  if not found then raise exception 'not found'; end if;
  if nb + amt < 0 then raise exception 'insufficient'; end if;
  update public.profiles set balance = nb + amt where user_id = uid;
  insert into public.balance_log(user_id, kind, amount, note, by_admin)
    values (uid, 'adjust', amt, left(coalesce(note,''), 100), auth.uid());
  return nb + amt;
end $$;

create or replace function public.admin_mark_checked(uid uuid) returns void
language plpgsql volatile security definer set search_path = public as $$
declare nb bigint; led numeric;
begin
  if not public.is_admin() then raise exception 'forbidden' using errcode = '42501'; end if;
  select balance into nb from public.profiles where user_id = uid for update;
  if not found then raise exception 'not found'; end if;
  select coalesce(sum(amount) filter (where kind in ('topup','adjust','purchase')), 0) into led
    from public.balance_log where user_id = uid;
  update public.profiles set g0 = nb - led, checked = true where user_id = uid;
  insert into public.balance_log(user_id, kind, amount, note, by_admin)
    values (uid, 'check', 0, 'ແອດມິນກວດແລ້ວ — ປົກກະຕິ', auth.uid());
end $$;

revoke all on function public.admin_accounts() from public, anon;
revoke all on function public.admin_adjust_balance(uuid, bigint, text) from public, anon;
revoke all on function public.admin_mark_checked(uuid) from public, anon;
grant execute on function public.admin_accounts() to authenticated;
grant execute on function public.admin_adjust_balance(uuid, bigint, text) to authenticated;
grant execute on function public.admin_mark_checked(uuid) to authenticated;
