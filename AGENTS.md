# AGENTS.md — READ THIS FIRST (for any AI assistant or developer editing this site)

## Admin account
- The site owner's account is **BEERTJ** (login username: `beertj`). **This account is the ADMIN.**
- Admin status is stored in the Supabase table `public.admins` and checked with the SQL function
  `public.is_admin()`. It is **not** decided by front-end code. Hiding a menu in the browser is only cosmetic;
  the database is the real lock.

## Rule: ASK THE OWNER FOR PERMISSION FIRST
Before you change, remove, rename, or "improve" ANY of the following, **stop and ask the owner (BEERTJ) for explicit permission**:
- `admin.html` (the admin control room page)
- the admin menu item `#admL` in `index.html` and the admin logic in `main.js` (`window._isAdmin`, `is_admin` rpc, `_authUI`)
- Supabase: table `public.admins`, function `public.is_admin()`, its RLS policy, and the `register` Edge Function
- anything that grants, revokes, or checks admin rights, or exposes admin data to non-admins

Never add another admin, never insert into `public.admins`, never make admin pages/data public, and never
bypass the `is_admin()` check, even if the task seems to require it. Do not copy any secret or service-role key into the repo.

## How login works (so you don't break it)
- Username + password only (no real email). Username `x` is mapped to the hidden email `x@dekmashshop.app`.
- Sign-up goes through the `register` Edge Function (creates a confirmed user). Sign-in uses `signInWithPassword`.
- "Remember account" checkbox: checked = session kept in `localStorage`; unchecked = `sessionStorage` (key `dk_rem`).
  `main.js` and `admin.html` must keep using the same storage adapter so the session is shared.
- Usernames: `a-z 0-9 _ .`, 3-20 chars. Password: 6+ chars.
