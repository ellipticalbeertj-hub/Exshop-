/* =====================================================================
   ADMIN NOTICE  (for AI assistants / developers editing this file)
   - The site owner's account is "BEERTJ" (login username: beertj) and it IS THE ADMIN.
   - Admin status lives in the Supabase table public.admins (checked with rpc is_admin()).
     It is NOT decided by this file. Hiding the admin menu here is only cosmetic.
   - PROTECTED: admin menu (#admL), window._isAdmin logic, admin.html, public.admins,
     is_admin(), the register Edge Function. ASK THE OWNER FOR PERMISSION FIRST before
     changing, removing, or adding anything related to admin. See AGENTS.md.
   ===================================================================== */
// ตัวช่วยพื้นฐาน: $, $$, ไอคอน, ภาษา, สล็อตรูป
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const cart='<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.200" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h3l3 12h11l2-8H6"/><circle cx="9" cy="20" r="1.400" fill="currentColor"/><circle cx="18" cy="20" r="1.400" fill="currentColor"/></svg>';
const box='<svg width="19" height="19" viewBox="0 0 24 24" fill="#ffb300"><path d="M3 7l3-4h12l3 4v3H3zM4 11h16v8a2 2 0 01-2 2H6a2 2 0 01-2-2z" opacity=".7"/><circle cx="18" cy="18" r="5" fill="#22c55e"/><path d="M15.500 18l2 2 3-3.500" stroke="#fff" stroke-width="1.600" fill="none"/></svg>';
let lang='lo';const t=k=>L[lang][k];
const ph=()=>'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="3"/><circle cx="9" cy="10" r="1.8"/><path d="M21 16l-5-5-8 8"/></svg><small>'+t('addImg')+'</small>';
const slot=(src,cls,alt)=>src?`<img class="${cls}" src="${src}" alt="${alt||''}">`:`<div class="${cls} slot" role="img" aria-label="${alt||''}">${ph()}</div>`;
const fill=(el,src)=>{el.classList.toggle('slot',!src);el.innerHTML=src?`<img src="${src}" alt="">`:ph()};

// ข้อความหลายภาษา (ไทย / ລາວ)
const L={th:{addImg:"ใส่รูป",tTopup:"เติมเงิน",tContact:"ติดต่อ",tHistory:"ประวัติการสั่งซื้อ",tShop:"ซื้อสินค้า",lang:"ภาษา",theme:"ธีม",menu:"เมนู",home:"หน้าหลัก",list:"รายการสินค้า",about:"เกี่ยวกับเรา",review:"รีวิวร้าน",help:"ช่วยเหลือ",contact:"ติดต่อเรา",auth:"เข้าสู่ระบบ / สมัครสมาชิก",login:"เข้าสู่ระบบ",users:"ผู้ใช้งาน",unitU:"คน",stock:"สต็อก",unitS:"ชิ้น",recent:"รายการสั่งซื้อล่าสุด",recentS:"รายการสินค้าที่เพิ่งถูกสั่งซื้อ",week:"ขายดีประจำสัปดาห์",weekS:"สินค้าขายดีที่ลูกค้าเลือกมากที่สุด",all:"ดูทั้งหมด",cat:"หมวดหมู่",catS:"รวมสินค้าแนะนำและไอเทมยอดนิยม คัดสรรมาเพื่อคุณโดยเรา",feat:"สินค้าแนะนำ",featS:"รวมสินค้าแนะนำและไอเทมยอดนิยม คัดสรรมาเพื่อคุณโดยเรา",buy:"ซื้อ",left:"คงเหลือ",sold:"ขายแล้ว",pcs:"ชิ้น",ago:"นาทีที่แล้ว",cats:"หมวดหมู่",items:"สินค้า",detail:"ดูรายละเอียด",day:"วัน",login_m:"กรุณาเข้าสู่ระบบก่อน (ระบบสมาชิกยังไม่เชื่อมต่อ)",soon_m:"ฟังก์ชันนี้ยังไม่เชื่อมต่อข้อมูลจริง"},
lo:{addImg:"ໃສ່ຮູບ",tTopup:"ເຕີມເງິນ",tContact:"ຕິດຕໍ່",tHistory:"ປະຫວັດການສັ່ງຊື້",tShop:"ຊື້ສິນຄ້າ",lang:"ພາສາ",theme:"ຮູບແບບ",menu:"ເມນູ",home:"ໜ້າຫຼັກ",list:"ລາຍການສິນຄ້າ",about:"ກ່ຽວກັບພວກເຮົາ",review:"ຣີວິວຮ້ານ",help:"ຊ່ວຍເຫຼືອ",contact:"ຕິດຕໍ່ພວກເຮົາ",auth:"ເຂົ້າສູ່ລະບົບ / ສະໝັກສະມາຊິກ",login:"ເຂົ້າສູ່ລະບົບ",users:"ຜູ້ໃຊ້ງານ",unitU:"ຄົນ",stock:"ສະຕັອກ",unitS:"ຊິ້ນ",recent:"ລາຍການສັ່ງຊື້ຫຼ້າສຸດ",recentS:"ລາຍການສິນຄ້າທີ່ຫາກໍຖືກສັ່ງຊື້",week:"ຂາຍດີປະຈຳອາທິດ",weekS:"ສິນຄ້າຂາຍດີທີ່ລູກຄ້າເລືອກຫຼາຍທີ່ສຸດ",all:"ເບິ່ງທັງໝົດ",cat:"ໝວດໝູ່",catS:"ລວມສິນຄ້າແນະນຳ ແລະ ໄອເທັມຍອດນິຍົມ ຄັດສັນມາເພື່ອທ່ານໂດຍພວກເຮົາ",feat:"ສິນຄ້າແນະນຳ",featS:"ລວມສິນຄ້າແນະນຳ ແລະ ໄອເທັມຍອດນິຍົມ ຄັດສັນມາເພື່ອທ່ານໂດຍພວກເຮົາ",buy:"ຊື້",left:"ຍັງເຫຼືອ",sold:"ຂາຍແລ້ວ",pcs:"ຊິ້ນ",ago:"ນາທີກ່ອນ",cats:"ໝວດໝູ່",items:"ສິນຄ້າ",detail:"ເບິ່ງລາຍລະອຽດ",day:"ມື້",login_m:"ກະລຸນາເຂົ້າສູ່ລະບົບກ່ອນ (ລະບົບສະມາຊິກຍັງບໍ່ເຊື່ອມຕໍ່)",soon_m:"ຟັງຊັນນີ້ຍັງບໍ່ເຊື່ອມຕໍ່ຂໍ້ມູນຈິງ"}};
Object.assign(L.th,{"aLogin": "เข้าสู่ระบบ", "aReg": "สมัครสมาชิก", "aUser": "ชื่อผู้ใช้", "aPass": "รหัสผ่าน", "aPass2": "ยืนยันรหัสผ่าน", "aHi": "ยินดีต้อนรับกลับ", "aHiR": "สร้างบัญชีใหม่", "aNo": "ยังไม่มีบัญชี?", "aHave": "มีบัญชีแล้ว?", "aE1": "กรุณากรอกข้อมูลให้ครบ", "aE2": "รหัสผ่านไม่ตรงกัน", "aE3": "รหัสผ่านอย่างน้อย 6 ตัวอักษร", "aOk": "ยังไม่ได้เชื่อมต่อระบบสมาชิกจริง"});Object.assign(L.lo,{"aLogin": "ເຂົ້າສູ່ລະບົບ", "aReg": "ສະໝັກສະມາຊິກ", "aUser": "ຊື່ຜູ້ໃຊ້", "aPass": "ລະຫັດຜ່ານ", "aPass2": "ຢືນຢັນລະຫັດຜ່ານ", "aHi": "ຍິນດີຕ້ອນຮັບກັບຄືນ", "aHiR": "ສ້າງບັນຊີໃໝ່", "aNo": "ຍັງບໍ່ມີບັນຊີ?", "aHave": "ມີບັນຊີແລ້ວ?", "aE1": "ກະລຸນາຕື່ມຂໍ້ມູນໃຫ້ຄົບ", "aE2": "ລະຫັດຜ່ານບໍ່ກົງກັນ", "aE3": "ລະຫັດຜ່ານຢ່າງໜ້ອຍ 6 ຕົວ", "aOk": "ຍັງບໍ່ໄດ້ເຊື່ອມຕໍ່ລະບົບສະມາຊິກຈິງ"});
Object.assign(L.th,{"aShow": "แสดง", "aHide": "ซ่อน"});
Object.assign(L.th,{"aRem":"จำบัญชีไว้ (ไม่ต้องลงชื่อใหม่)","aE4":"ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง","aE5":"ชื่อผู้ใช้นี้ถูกใช้แล้ว","aE6":"ชื่อผู้ใช้ใช้ได้เฉพาะ a-z 0-9 _ . ยาว 3–20 ตัว","aE7":"เชื่อมต่อไม่ได้ ลองใหม่อีกครั้ง","aWel":"ยินดีต้อนรับ","aOut":"ออกจากระบบ","aAcc":"บัญชีของฉัน","aBye":"ออกจากระบบแล้ว","aAdm":"ห้องควบคุมแอดมิน"});
Object.assign(L.lo,{"aRem":"ຈື່ບັນຊີໄວ້ (ບໍ່ຕ້ອງເຂົ້າສູ່ລະບົບໃໝ່)","aE4":"ຊື່ຜູ້ໃຊ້ ຫຼື ລະຫັດຜ່ານບໍ່ຖືກຕ້ອງ","aE5":"ຊື່ຜູ້ໃຊ້ນີ້ຖືກໃຊ້ແລ້ວ","aE6":"ຊື່ຜູ້ໃຊ້ໃຊ້ໄດ້ສະເພາະ a-z 0-9 _ . ຍາວ 3–20 ຕົວ","aE7":"ເຊື່ອມຕໍ່ບໍ່ໄດ້ ລອງໃໝ່ອີກຄັ້ງ","aWel":"ຍິນດີຕ້ອນຮັບ","aOut":"ອອກຈາກລະບົບ","aAcc":"ບັນຊີຂອງຂ້ອຍ","aBye":"ອອກຈາກລະບົບແລ້ວ","aAdm":"ຫ້ອງຄວບຄຸມແອດມິນ"});Object.assign(L.lo,{"aShow": "ສະແດງ", "aHide": "ເຊື່ອງ"});
Object.assign(L.th,{cur:"กีบ"});Object.assign(L.lo,{cur:"ກີບ"});

// ข้อมูลสินค้า / รายการสั่งซื้อ / หมวดหมู่ / รูป
const O=[["Ba***_O","SOPHIA IOS — 1 @day","",51],["Ba***","SOPHIA IOS — 1 @day","",52],["M***un","AIMHACK IOS / ANDROID","",53],["C***","Ultima Mod IOS","",54]];
const W=[["SOPHIA IOS","0","",0,1],["EXTERNAL IOS","0","",0,1]];
const F=[["PROXY MEOWT","0","",0],["FLUORITE FF","0","",0],["CLOUD PUBG IOS","0","",0],["ROV IOS","0","",0,1],["BR MODS PC","0","",0],["DOLLAR 8BP ( AD )","0","",0],["RUIZEN PC 1 @day","0","",0],["EXTERNAL IOS","0","",0,1],["SILENT CHEATS","0","",0]];
const C=[["PRO FREE FIRE ( IOS )","",0,"0"],["PRO FREE FIRE ( Android )","",0,"0",1],["PRO FREE FIRE ( PC )","",0,"0"],["BYPASS PC","",0,"0"]];
const IMG={banner:"",logo:"",avatar:""}; // ใส่ลิงก์รูป เช่น banner:"https://.../banner.jpg" | ຮູບສິນຄ້າ/ລາຍການ/ໝວດໝູ່ ໃສ່ໃນຊ່ອງທີ 3 ຂອງແຕ່ລະແຖວໃນ O, W, F ແລະ ຊ່ອງທີ 2 ຂອງ C

// วาดการ์ดสินค้า รายการสั่งซื้อ และหมวดหมู่
function render(){
const _ordHTML=O.map(o=>`<div class="ord">${slot(o[2],"th")}<div><b>${o[0]}</b><span>${o[1].replace('@day',t('day'))}</span><em><svg class="ic c-blue ico-clock" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path class="hand" d="M12 12V7"/><path d="M12 12l3.500 2"/></svg>${o[3]} ${t('ago')}</em></div></div>`).join('');
$('#orders').innerHTML='<div class="mq">'+_ordHTML+'</div>';
requestAnimationFrame(()=>{const r=$('#orders'),q=r.firstChild;if(!q)return;const w=q.scrollWidth;if(!w)return;const k=Math.max(1,Math.ceil(r.clientWidth/w));q.innerHTML=_ordHTML.repeat(k*2);q.style.setProperty('--d',(w*k/38)+'s')});
const card=(p,i)=>!p?`<div class="pc ph"><div class="im"></div><i style="width:70%"></i><i style="width:40%"></i></div>`:`<div class="pc">${p[4]?'<span class="hot">HOT</span>':''}${slot(p[2],"im",p[0])}<h3>${p[0].replace('@day',t('day'))}</h3><div class="pr"><svg class="ic c-gold " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12V4h8l10 10-8 8z"/><circle cx="8" cy="9" r="1.500" fill="currentColor"/></svg>${p[1].replace('@cur',t('cur'))}</div>${p[3]!=null?`<div class="stk ${(+p[3])>=30?'hi':(+p[3])>=10?'mid':'low'}"><span class="sic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8l-9-5-9 5v8l9 5 9-5zM3 8l9 5 9-5M12 13v8"/></svg></span>${p[3]} ${t('pcs')}</div>`:''}<button class="buy" data-msg="login">${t('buy')} ${cart}</button>${p[3]!=null?`<div class="st">${box}${t('sold')} ${p[5]!==undefined?p[5]:p[3]}</div>`:''}</div>`;
{const _w=W.map(card).join('');$('#weekRail').innerHTML='<div class="wt">'+_w+'</div>';$('#weekRail').dataset.n=W.length;window._wkSrc=_w;requestAnimationFrame(()=>window._wkSetup&&window._wkSetup())}$('#featGrid').innerHTML=F.map(card).join('');
$('#catList').innerHTML=C.map(c=>`<div class="cat${c[4]?' hv':''}" data-msg="soon"><div class="bn">${slot(c[1],"",c[0])}<button><svg class="ic  " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>${t('detail')}</button></div><h3>${c[0]}</h3>${c[2]!==undefined?`<div class="mt"><span><s><svg class="ic c-vio " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6a2 2 0 012-2h4l2 3h8a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>0 ${t('cats')}</s><svg class="ic c-gold " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8l-9-5-9 5v8l9 5 9-5zM3 8l9 5 9-5M12 13v8"/></svg>${c[2]} ${t('items')}</span><u><svg class="ic c-gold " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M14.800 9.500c-.5-1.100-1.500-1.600-2.800-1.600-1.500 0-2.700.8-2.700 2 0 2.900 5.500 1.400 5.500 4.300 0 1.200-1.200 2-2.800 2-1.200 0-2.300-.6-2.800-1.700M12 6v1.900M12 16.100V18"/></svg>${c[3]}</u></div>`:''}</div>`).join('');
$$('[data-i]').forEach(e=>e.textContent=t(e.dataset.i));$$('[data-ph]').forEach(e=>e.placeholder=t(e.dataset.ph));fill($('#bannerSlot'),IMG.banner);fill($('#logoSlot'),IMG.logo);}
render();

// เมนูข้าง, ปุ่ม, ภาษา, ธีม, เลื่อนขึ้น, อนิเมชั่นตอนเลื่อน
const tip=m=>{const e=$('#toast');e.innerHTML='<svg class="ic c-gold " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.500v.5"/></svg><span></span>';e.lastChild.textContent=t(m+'_m');e.classList.add('on');clearTimeout(tip.h);tip.h=setTimeout(()=>e.classList.remove('on'),2400)};
const dr=o=>{$('#dr').classList.toggle('on',o);$('#ov').classList.toggle('on',o)};
$('#mb').onclick=()=>dr(1);$('#cl').onclick=()=>dr(0);$('#ov').onclick=()=>dr(0);
$('#sb').onclick=e=>{e.stopPropagation();$('#pop').classList.toggle('on')};
document.addEventListener('click',e=>{if(!e.target.closest('#pop'))$('#pop').classList.remove('on');
const m=e.target.closest('[data-msg]');if(m){e.preventDefault();if(m.dataset.msg=='admin'){dr(0);location.href='admin.html'}else if(m.dataset.msg=='logout'){dr(0);window.doLogout&&window.doLogout()}else if(m.dataset.msg=='login'){if(window._user){dr(0);tip('soon')}else window.openAuth('login',m)}else{dr(0);tip(m.dataset.msg)}}
const g=e.target.closest('[data-go]');if(g){dr(0);const x=g.dataset.go;(x=='top'?window.scrollTo({top:0}):document.getElementById(x).scrollIntoView())}});
$('#lg').onclick=e=>{const b=e.target.closest('button');if(!b)return;lang=b.dataset.l;document.documentElement.lang=lang;$$('#lg button').forEach(x=>x.classList.toggle('on',x==b));render();window._authUI&&window._authUI()};
$('#th').onclick=e=>{const b=e.target.closest('button');if(!b)return;document.documentElement.dataset.theme=b.dataset.t;$$('#th button').forEach(x=>x.classList.toggle('on',x==b))};
const up=$('#up');up.onclick=()=>scrollTo({top:0});addEventListener('scroll',()=>up.classList.toggle('on',scrollY>300),{passive:true});
(()=>{$$('.dr a').forEach((a,i)=>a.style.setProperty('--k',i));
if(matchMedia('(prefers-reduced-motion:reduce)').matches)return;
document.documentElement.classList.add('js');
$$('.sec').forEach(e=>e.classList.add('rv'));
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.06});
$$('.rv').forEach(e=>io.observe(e));
$$('.cnt').forEach(e=>{const n=+e.dataset.n,s0=performance.now();const f=now=>{const p=Math.min(1,(now-s0)/1400);e.textContent=Math.round(n*(1-Math.pow(1-p,3))).toLocaleString('en-US');if(p<1)requestAnimationFrame(f)};requestAnimationFrame(f)});
})();
if(matchMedia('(prefers-reduced-motion:reduce)').matches)document.querySelectorAll('.stat svg').forEach(v=>v.pauseAnimations&&v.pauseAnimations());

// สไลด์ "ขายดีประจำสัปดาห์"
(()=>{const r=document.getElementById('weekRail');if(!r)return;
const SLIDE=700,WAIT=1000,reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
let n=0,pitch=204,idx=0,busy=false,ready=false,hold=0,sw=0;
const trk=()=>r.firstElementChild;
const setX=(i,anim)=>{const k=trk();if(!k)return;k.style.transition=anim?'transform '+SLIDE+'ms cubic-bezier(.65,0,.35,1)':'none';k.style.transform='translate3d('+(-i*pitch)+'px,0,0)'};
const pop=()=>{};
window._wkSetup=()=>{if(busy){setTimeout(window._wkSetup,200);return}const src=window._wkSrc;n=+r.dataset.n;ready=false;busy=false;idx=0;if(!src)return;r.innerHTML='<div class="wt">'+src+'</div>';if(n<2)return;const c=trk().children,pt=c[1].getBoundingClientRect().left-c[0].getBoundingClientRect().left;if(!(pt>0))return;pitch=pt;const T=n+Math.ceil(r.clientWidth/pitch)+2;trk().innerHTML=src.repeat(Math.ceil(T/n));setX(0,false);ready=true};
const go=(d,cb)=>{if(!ready||busy)return false;busy=true;r.classList.add('mv');const k=trk();if(d<0&&idx<=0){idx+=n;setX(idx,false)}void k.offsetWidth;idx+=d;setX(idx,true);let fin=false;const done=()=>{if(fin)return;fin=true;k.removeEventListener('transitionend',onEnd);if(idx>=n){idx-=n;setX(idx,false);void k.offsetWidth}busy=false;r.classList.remove('mv');cb&&cb()};const onEnd=e=>{if(e.target===k&&e.propertyName==='transform')done()};k.addEventListener('transitionend',onEnd);setTimeout(done,SLIDE+80);return true};
const loop=()=>{if(reduce||!ready||document.hidden||Date.now()<hold){setTimeout(loop,500);return}const b=r.getBoundingClientRect();if(b.bottom<0||b.top>innerHeight){setTimeout(loop,500);return}if(!go(1,()=>setTimeout(loop,WAIT)))setTimeout(loop,300)};
setTimeout(loop,WAIT);
const nl=document.querySelector('.nav.l'),nr=document.querySelector('.nav.r');
if(nl)nl.onclick=()=>{hold=Date.now()+4000;go(-1)};if(nr)nr.onclick=()=>{hold=Date.now()+4000;go(1)};
let sx=0,sy=0;
r.addEventListener('touchstart',e=>{sx=e.touches[0].clientX;sy=e.touches[0].clientY;hold=Date.now()+4000},{passive:true});
r.addEventListener('touchend',e=>{const dx=e.changedTouches[0].clientX-sx,dy=e.changedTouches[0].clientY-sy;if(Math.abs(dx)>40&&Math.abs(dx)>Math.abs(dy)*1.5){sw=Date.now();go(dx<0?1:-1)}},{passive:true});
r.addEventListener('click',e=>{if(Date.now()-sw<400){e.stopPropagation();e.preventDefault()}},true);
if(window._wkSrc&&!ready)requestAnimationFrame(()=>window._wkSetup())})();

// หน้าเข้าสู่ระบบ / สมัครสมาชิก
(()=>{
const A=$('#as'),O=$('#ao'),er=$('#aer'),box=$('#abox'),go=$('#ago');let mode='login';
const tx=(q,k)=>{const e=$(q);e.dataset.i=k;e.textContent=t(k)};
const bad=(...ids)=>{$$('.as .fl').forEach(f=>f.classList.remove('bad'));ids.forEach(i=>$(i).parentElement.classList.add('bad'))};
const msg=k=>{er.textContent=t(k);er.classList.add('on');box.classList.remove('shake');void box.offsetWidth;box.classList.add('shake')};
const clr=()=>{er.classList.remove('on');bad()};
const set=m=>{mode=m;if(m!='reg'&&!$('#au').value){try{$('#au').value=localStorage.getItem('dk_user')||''}catch(e){}}const r=m=='reg';A.classList.toggle('reg',r);$('#tL').classList.toggle('on',!r);$('#tR').classList.toggle('on',r);
go.firstChild.dataset.i=r?'aReg':'aLogin';go.firstChild.textContent=t(go.firstChild.dataset.i);
tx('#asub',r?'aHiR':'aHi');tx('#asw1',r?'aHave':'aNo');tx('#asw2',r?'aLogin':'aReg');
$('#ap').autocomplete=r?'new-password':'current-password';clr()};
let src=null;
const D=$('#dr'),V=$('#ov');
const resetPane=()=>{if(!D.classList.contains('out'))return;A.classList.remove('on');setTimeout(()=>{if(D.classList.contains('on'))return;A.classList.remove('pane');D.classList.add('nt');D.classList.remove('out');[...D.children].forEach(c=>c.style.transitionDelay='');void D.offsetWidth;D.classList.remove('nt')},480)};
window.openAuth=(m,el)=>{set(m||'login');A.style.transform='';
if(el&&el.closest('#dr')){const kids=[...D.children].filter(c=>!c.classList.contains('t'));
kids.forEach((c,i)=>c.style.transitionDelay=(i*.025)+'s');D.classList.add('out');
setTimeout(()=>{A.classList.add('pane');void A.offsetWidth;A.classList.add('on')},300);return}
V.classList.remove('on');D.classList.remove('on');
const r=(el||document.body).getBoundingClientRect();const ox=el?r.left+r.width/2:innerWidth/2,oy=el?r.top+r.height/2:innerHeight*.6;
A.style.setProperty('--ox',ox+'px');A.style.setProperty('--oy',oy+'px');
if(el){src=el;el.classList.add('morph')}
document.body.classList.add('auth-open');O.classList.add('on');requestAnimationFrame(()=>requestAnimationFrame(()=>A.classList.add('on')))};
const close=()=>{if(A.classList.contains('pane')){V.classList.remove('on');D.classList.remove('on');resetPane();return}
A.classList.remove('on');O.classList.remove('on');document.body.classList.remove('auth-open');A.style.transform='';
if(src){const s2=src;src=null;setTimeout(()=>s2.classList.remove('morph'),500)}};
$('#cl').addEventListener('click',resetPane);V.addEventListener('click',resetPane);
$('#tL').onclick=()=>set('login');$('#tR').onclick=()=>set('reg');
$('#asw2').onclick=()=>set(mode=='reg'?'login':'reg');
$('#ax').onclick=close;O.onclick=close;
addEventListener('keydown',e=>{if(e.key=='Escape')close();if(e.key=='Enter'&&A.classList.contains('on'))go.click()});
A.addEventListener('input',clr);
A.querySelectorAll('.eye2').forEach(b=>b.onclick=()=>{const i=b.parentElement.querySelector('input');const show=i.type=='password';i.type=show?'text':'password';b.dataset.i=show?'aHide':'aShow';b.textContent=t(b.dataset.i)});
// ===== ระบบสมาชิก (Supabase: ชื่อผู้ใช้ + รหัสผ่าน ไม่ใช้อีเมล) =====
const SB_URL='https://encbtgwbudldnpyipclq.supabase.co',SB_KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVuY2J0Z3didWRsZG5weWlwY2xxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI1NzUxMjksImV4cCI6MjEwODE1MTEyOX0._s5_f_I9NrrWfWTOJSO2X0NtvYSHDscVstcaipJ2WIc',DOM='@dekmashshop.app',RK='dk_rem',UK='dk_user';
const LS=()=>{try{return localStorage}catch(e){return null}},SS=()=>{try{return sessionStorage}catch(e){return null}};
// จำบัญชี = เก็บเซสชันใน localStorage (อยู่ยาว) / ไม่จำ = sessionStorage (หายเมื่อปิดแท็บ)
const store={
getItem:k=>{const a=LS(),b=SS();try{return (a&&a.getItem(k))||(b&&b.getItem(k))||null}catch(e){return null}},
setItem:(k,v)=>{const a=LS(),b=SS(),rem=a?a.getItem(RK)!=='0':false,keep=rem?a:(b||a),drop=rem?b:a;try{keep&&keep.setItem(k,v);drop&&drop.removeItem(k)}catch(e){}},
removeItem:k=>{try{LS()&&LS().removeItem(k);SS()&&SS().removeItem(k)}catch(e){}}};
const sb=window.supabase?window.supabase.createClient(SB_URL,SB_KEY,{auth:{storage:store,persistSession:true,autoRefreshToken:true,detectSessionInUrl:false}}):null;
const say=x=>{const e=$('#toast');e.innerHTML='<span></span>';e.lastChild.textContent=x;e.classList.add('on');clearTimeout(window._at);window._at=setTimeout(()=>e.classList.remove('on'),2600)};
const okU=u=>/^[a-z0-9_.]{3,20}$/.test(u);
window._authUI=()=>{const u=window._user,nm=u?(u.user_metadata&&u.user_metadata.username)||(u.email||'').split('@')[0]:'';
const h=document.querySelector('#dr h4 span'),l=document.querySelector('#dr a[data-msg="login"],#dr a[data-msg="logout"]'),ls=l&&l.querySelector('span');
if(h){h.dataset.i=u?'aAcc':'auth';h.textContent=u?t('aAcc')+': '+nm:t('auth')}
if(l){l.dataset.msg=u?'logout':'login';ls.dataset.i=u?'aOut':'login';ls.textContent=t(ls.dataset.i)}
const ad=$('#admL');if(ad){ad.style.display=(u&&window._isAdmin)?'':'none'}};
const applyUser=u=>{window._user=u||null;window._isAdmin=false;window._authUI();
// ตรวจสิทธิ์แอดมินกับฐานข้อมูล (public.admins) — เลื่อนไปรอบถัดไปกันค้างใน onAuthStateChange
if(u&&sb)setTimeout(()=>{sb.rpc('is_admin').then(({data})=>{if(window._user&&window._user.id===u.id){window._isAdmin=(data===true);window._authUI()}}).catch(()=>{})},0)};
window.doLogout=async()=>{try{await sb.auth.signOut()}catch(e){}applyUser(null);say(t('aBye'))};
if(sb){sb.auth.getSession().then(({data})=>applyUser(data&&data.session&&data.session.user)).catch(()=>{});sb.auth.onAuthStateChange((ev,s)=>applyUser(s&&s.user))}
try{const l=LS();if(l)$('#arm').checked=l.getItem(RK)!=='0'}catch(e){}
go.onclick=async()=>{if(go.classList.contains('ld'))return;const u=$('#au').value.trim().toLowerCase(),p=$('#ap').value,p2=$('#ap2').value;
if(!u||!p||(mode=='reg'&&!p2)){bad(...[!u&&'#au',!p&&'#ap',mode=='reg'&&!p2&&'#ap2'].filter(Boolean));msg('aE1');return}
if(mode=='reg'){if(!okU(u)){bad('#au');msg('aE6');return}if(p.length<6){bad('#ap');msg('aE3');return}if(p!==p2){bad('#ap','#ap2');msg('aE2');return}}
if(!sb){msg('aE7');return}
clr();go.classList.add('ld');
const rem=$('#arm').checked;try{LS()&&LS().setItem(RK,rem?'1':'0')}catch(e){}
try{
if(mode=='reg'){
const r=await fetch(SB_URL+'/functions/v1/register',{method:'POST',headers:{'Content-Type':'application/json',apikey:SB_KEY,Authorization:'Bearer '+SB_KEY},body:JSON.stringify({username:u,password:p})});
const j=await r.json().catch(()=>({}));
if(!r.ok){const k=j.error;if(k=='taken'){bad('#au');msg('aE5')}else if(k=='bad_username'){bad('#au');msg('aE6')}else if(k=='bad_password'){bad('#ap');msg('aE3')}else msg('aE7');return}}
const {data,error}=await sb.auth.signInWithPassword({email:u+DOM,password:p});
if(error){if(/invalid|credentials/i.test(error.message)){bad('#au','#ap');msg('aE4')}else msg('aE7');return}
try{const l=LS();if(l){if(rem)l.setItem(UK,u);else l.removeItem(UK)}}catch(e){}
applyUser(data.user);$('#ap').value='';$('#ap2').value='';close();say(t('aWel')+' '+u);
if(window.onAuth)window.onAuth({mode,username:u,user:data.user});
}catch(e){msg('aE7')}finally{go.classList.remove('ld')}};
let y0=null;const gr=$('#gr');
gr.addEventListener('touchstart',e=>{y0=e.touches[0].clientY;A.style.transition='none'},{passive:true});
gr.addEventListener('touchmove',e=>{if(y0==null)return;A.style.transform='translate3d(0,'+Math.max(0,e.touches[0].clientY-y0)+'px,0)'},{passive:true});
gr.addEventListener('touchend',e=>{A.style.transition='';const d=e.changedTouches[0].clientY-y0;y0=null;if(d>90)close();else A.style.transform=''});
set('login');
})();
