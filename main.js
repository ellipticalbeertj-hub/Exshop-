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

// ข้อความการ์ดยืนยันการสั่งซื้อ
Object.assign(L.th,{cfT:"ยืนยันการสั่งซื้อ",cfS:"ตรวจสอบรายการก่อนยืนยัน",cfTot:"ยอดรวม",cfNo:"ยกเลิก",cfOk:"ยืนยันสั่งซื้อ",cfDet:"รายละเอียดสินค้า",cfDone:"สั่งซื้อสำเร็จ",cfThx:"ขอบคุณที่อุดหนุนนะครับ",cfClose:"ปิด",cfErr_m:"สั่งซื้อไม่สำเร็จ ลองใหม่อีกครั้ง"});
Object.assign(L.lo,{cfT:"ຢືນຢັນການສັ່ງຊື້",cfS:"ກວດສອບລາຍການກ່ອນຢືນຢັນ",cfTot:"ຍອດລວມ",cfNo:"ຍົກເລີກ",cfOk:"ຢືນຢັນສັ່ງຊື້",cfDet:"ລາຍລະອຽດສິນຄ້າ",cfDone:"ສັ່ງຊື້ສຳເລັດ",cfThx:"ຂອບໃຈທີ່ອຸດໜູນ",cfClose:"ປິດ",cfErr_m:"ສັ່ງຊື້ບໍ່ສຳເລັດ ລອງໃໝ່ອີກຄັ້ງ"});

// ข้อมูลสินค้า / รายการสั่งซื้อ / หมวดหมู่ / รูป
const O=[["Ba***_O","SOPHIA IOS — 1 @day","",51],["Ba***","SOPHIA IOS — 1 @day","",52],["M***un","AIMHACK IOS / ANDROID","",53],["C***","Ultima Mod IOS","",54]];
const W=[["SOPHIA IOS","0","",0,1],["EXTERNAL IOS","0","",0,1]];
const F=[["PROXY MEOWT","0","",0],["FLUORITE FF","0","",0],["CLOUD PUBG IOS","0","",0],["ROV IOS","0","",0,1],["BR MODS PC","0","",0],["DOLLAR 8BP ( AD )","0","",0],["RUIZEN PC 1 @day","0","",0],["EXTERNAL IOS","0","",0,1],["SILENT CHEATS","0","",0]];
const C=[["PRO FREE FIRE ( IOS )","",0,"0"],["PRO FREE FIRE ( Android )","",0,"0",1],["PRO FREE FIRE ( PC )","",0,"0"],["BYPASS PC","",0,"0"]];
const IMG={banner:"",logo:"",avatar:""}; // ใส่ลิงก์รูป เช่น banner:"https://.../banner.jpg" | ຮູບສິນຄ້າ/ລາຍການ/ໝວດໝູ່ ໃສ່ໃນຊ່ອງທີ 3 ຂອງແຕ່ລະແຖວໃນ O, W, F ແລະ ຊ່ອງທີ 2 ຂອງ C

// วาดการ์ดสินค้า รายการสั่งซื้อ และหมวดหมู่
const PR=[];window._PR=PR;
function render(){PR.length=0;
const _ordHTML=O.map(o=>`<div class="ord">${slot(o[2],"th")}<div><b>${o[0]}</b><span>${o[1].replace('@day',t('day'))}</span><em><svg class="ic c-blue ico-clock" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path class="hand" d="M12 12V7"/><path d="M12 12l3.500 2"/></svg>${o[3]} ${t('ago')}</em></div></div>`).join('');
$('#orders').innerHTML='<div class="mq">'+_ordHTML+'</div>';
requestAnimationFrame(()=>{const r=$('#orders'),q=r.firstChild;if(!q)return;const w=q.scrollWidth;if(!w)return;const k=Math.max(1,Math.ceil(r.clientWidth/w));q.innerHTML=_ordHTML.repeat(k*2);q.style.setProperty('--d',(w*k/38)+'s')});
const card=(p,i)=>!p?`<div class="pc ph"><div class="im"></div><i style="width:70%"></i><i style="width:40%"></i></div>`:`<div class="pc">${p[4]?'<span class="hot">HOT</span>':''}${slot(p[2],"im",p[0])}<h3>${p[0].replace('@day',t('day'))}</h3><div class="pr"><svg class="ic c-gold " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12V4h8l10 10-8 8z"/><circle cx="8" cy="9" r="1.500" fill="currentColor"/></svg>${p[1].replace('@cur',t('cur'))}</div>${p[3]!=null?`<div class="stk ${(+p[3])>=30?'hi':(+p[3])>=10?'mid':'low'}"><span class="sic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8l-9-5-9 5v8l9 5 9-5zM3 8l9 5 9-5M12 13v8"/></svg></span>${p[3]} ${t('pcs')}</div>`:''}<button class="buy" data-msg="login" data-pi="${PR.push(p)-1}">${t('buy')} ${cart}</button>${p[3]!=null?`<div class="st">${box}${t('sold')} ${p[5]!==undefined?p[5]:p[3]}</div>`:''}</div>`;
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
const m=e.target.closest('[data-msg]');if(m){e.preventDefault();if(m.dataset.msg=='admin'){dr(0);location.href='admin.html'}else if(m.dataset.msg=='logout'){dr(0);window.doLogout&&window.doLogout()}else if(m.dataset.msg=='login'){if(window._user){dr(0);if(m.dataset.pi!=null&&window.openBuy)window.openBuy(m);else tip('soon')}else window.openAuth('login',m)}else{dr(0);tip(m.dataset.msg)}}
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
const SB_URL='https://dmnppzrjkskrkusbdzce.supabase.co',SB_KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRtbnBwenJqa3Nrcmt1c2JkemNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI2MDQ2MjYsImV4cCI6MjEwODE4MDYyNn0.ClK3xGDdESVo9YPO4PHvdQZY0JwO1AOWS1QiwmX0k5Y',DOM='@dekmashshop.app',RK='dk_rem',UK='dk_user';
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

/* =====================================================================
   การ์ดยืนยันการสั่งซื้อ  (กดปุ่ม "ซื้อ" ตอนล็อกอินแล้ว)
   - แก้ข้อมูลแพ็กเกจที่ PKG / รายละเอียดสินค้าที่ DET (ใช้ชื่อสินค้าเป็นคีย์)
   - สินค้าที่ไม่ได้ใส่ใน PKG จะได้การ์ดใบเดียวจากราคา/สต็อกของสินค้านั้น
   - ต่อระบบสั่งซื้อจริงที่ window.placeOrder (ดูท้ายบล็อก)
   ===================================================================== */
(()=>{
const ov=$('#cfo'),cf=$('#cf');if(!ov||!cf)return;
const wrap=$('#cfW'),mv=$('#cfM'),cd=$('#cfC'),gl=$('#cfGl'),inn=$('#cfIn'),bg=$('#cfBg'),th=$('#cfTh'),dk=$('#dk'),
 minus=$('#cfMinus'),plus=$('#cfPlus'),qEl=$('#cfQ'),tn=$('#cfTn'),okb=$('#cfOk');
const kids=[...inn.querySelectorAll('.cf-st')];

// ---- ข้อมูล: [ชื่อ(@day = มื้อ/วัน), ราคา, คงเหลือ, ขายแล้ว] ----
const PKG={
 'SOPHIA IOS':[['1 @day',50000,12,38],['3 @day',120000,35,65],['7 @day',250000,6,94],['15 @day',450000,20,30],['30 @day',800000,60,15]]
};
const DET={
 'SOPHIA IOS':{
  th:'ใช้งานได้นับจากเวลาเปิดใช้ครั้งแรก\nรองรับ iOS 15 ขึ้นไป\nส่งคีย์ให้ทางแชทหลังชำระเงินภายใน 5 นาที',
  lo:'ໃຊ້ງານໄດ້ນັບຈາກເວລາເປີດໃຊ້ຄັ້ງທຳອິດ\nຮອງຮັບ iOS 15 ຂຶ້ນໄປ\nສົ່ງຄີໃຫ້ທາງແຊັດຫຼັງຊຳລະເງິນພາຍໃນ 5 ນາທີ'}
};
// สีการ์ดแพ็กเกจ (โทนแดงเดียวกับกระเบื้องหน้าแรกและปุ่มซื้อ)
const PAL=['#f0647b,#d93653 55%,#b81d3d','#ff3b57,#e0001f 55%,#a80017','#d93653,#8f0f2b','#e0001f,#7a0014','#b81d3d,#4a0816'];

const BXI='<svg class="cf-bx" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8l-9-5-9 5v8l9 5 9-5zM3 8l9 5 9-5M12 13v8"/></svg>';
const CK='<span class="dk-k"><svg viewBox="0 0 20 20"><circle cx="10" cy="10" r="10"/><path d="M5.8 10.4l2.9 2.9 5.5-5.9" pathLength="24"/></svg></span>';
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const nf=n=>(+n).toLocaleString('en-US',{maximumFractionDigits:2});
const dayName=n=>String(n).replace('@day',t('day'));

const R=26,EO='cubic-bezier(.22,1,.36,1)',EC='cubic-bezier(.65,0,.35,1)';
const reduce=()=>matchMedia('(prefers-reduced-motion:reduce)').matches;
let st=0,src=null,qty=1,max=99,unit=0,anims=[],raf=0,shown=0,prod=null,pk=[],sel=null,curEl=null,lx=0,ly=0;
const A=(el,kf,o)=>{const a=el.animate(kf,Object.assign({fill:'both'},o));anims.push(a);return a};
const stop=c=>{anims.forEach(a=>{if(c){try{a.commitStyles()}catch(e){}}a.cancel()});anims=[]};
const wipe=()=>[mv,cd,bg,gl,inn,...kids].forEach(e=>e.removeAttribute('style'));
const rectOf=b=>{const r=b&&b.isConnected?b.getBoundingClientRect():null;
 if(r&&r.width&&r.bottom>0&&r.top<innerHeight&&r.right>0&&r.left<innerWidth)return r;
 return{left:innerWidth/2-60,top:innerHeight/2-20,width:120,height:40}};
const geo=(B,C)=>{const ix=Math.max(0,(C.width-B.width)/2),iy=Math.max(0,(C.height-B.height)/2);
 return{t:'translate3d('+(B.left+B.width/2-C.left-C.width/2)+'px,'+(B.top+B.height/2-C.top-C.height/2)+'px,0)',c:'inset('+iy+'px '+ix+'px '+iy+'px '+ix+'px round '+B.height/2+'px)'}};
const FULL='inset(0px 0px 0px 0px round '+R+'px)';
const setTot=(to,now)=>{cancelAnimationFrame(raf);if(now){shown=to;tn.textContent=nf(to);return}
 const from=shown,s0=performance.now();
 const f=t0=>{const p=Math.min(1,(t0-s0)/420);shown=from+(to-from)*(1-Math.pow(1-p,3));tn.textContent=nf(Math.round(shown));if(p<1)raf=requestAnimationFrame(f);else{shown=to;tn.textContent=nf(to)}};
 raf=requestAnimationFrame(f)};
const upd=(bump,anim)=>{qEl.textContent=qty;if(bump){qEl.classList.remove('bump');void qEl.offsetWidth;qEl.classList.add('bump')}minus.disabled=qty<=1;plus.disabled=qty>=max;setTot(unit*qty,!anim)};
const fin=()=>{stop();wipe();cf.classList.remove('on','dn');document.body.classList.remove('cf-open');const s=src;src=null;st=0;if(s){s.classList.remove('cf-src');try{s.focus({preventScroll:true})}catch(e){}}};

// ---- ข้อมูลแพ็กเกจของสินค้า ----
const pkgsOf=p=>{
 const l=PKG[p[0]];
 if(l)return l.map(([n,pr,left,sold])=>({n,pr:+pr||0,left:+left||0,sold:+sold||0}));
 const num=parseFloat(String(p[1]).replace(/[^\d.]/g,''))||0;
 return[{n:p[0],pr:num,left:+p[3]||0,sold:+(p[5]!==undefined?p[5]:p[3])||0}];
};
const buildList=()=>{
 dk.innerHTML=pk.map((x,i)=>{const tot=x.left+x.sold,pct=tot?Math.round(x.sold/tot*100):0;
  return '<div class="dk-c" role="radio" aria-checked="false" tabindex="0" data-k="'+i+'" style="--g:'+PAL[i%PAL.length]+'">'
   +'<div class="dk-r"><span class="dk-n">'+CK+esc(dayName(x.n))+'</span><span class="dk-p">'+nf(x.pr)+'<i>'+esc(t('cur'))+'</i></span></div>'
   +'<div class="dk-r dk-m"><span>'+esc(t('left'))+' <b>'+nf(x.left)+'</b></span><span>'+esc(t('sold'))+' <b>'+nf(x.sold)+'</b></span></div>'
   +'<div class="dk-bar"><i style="width:'+pct+'%"></i></div></div>'}).join('');
 dk.classList.remove('has');curEl=null;
};
// เลือกแพ็กเกจ → อัปเดตราคา/จำนวนสูงสุด/ยอดรวม
const apply=(i,anim)=>{
 sel=pk[i];unit=sel.pr;max=sel.left>0?sel.left:99;const q0=qty;if(qty>max)qty=max;
 $('#cfUn').textContent=nf(unit)+' '+t('cur');upd(q0!==qty,anim);
};
const ripple=(c,x,y)=>{
 const r=c.getBoundingClientRect(),px=x-r.left,py=y-r.top,s=Math.hypot(Math.max(px,r.width-px),Math.max(py,r.height-py))*2;
 const e=document.createElement('span');e.className='dk-rp';
 e.style.cssText='width:'+s+'px;height:'+s+'px;left:'+(px-s/2)+'px;top:'+(py-s/2)+'px';c.appendChild(e);
 e.animate([{transform:'scale(0)',opacity:1},{transform:'scale(1)',opacity:0}],{duration:750,easing:EO}).onfinish=()=>e.remove();
};
const pick=(c,x,y,silent)=>{
 if(c!==curEl){
  if(curEl){curEl.classList.remove('on');curEl.setAttribute('aria-checked','false')}
  c.classList.add('on');c.setAttribute('aria-checked','true');dk.classList.add('has');curEl=c;apply(+c.dataset.k,!silent);
 }
 if(silent||reduce())return;
 ripple(c,x,y);c.classList.remove('go');void c.offsetWidth;c.classList.add('go');
 c.animate([{transform:'scale(1)'},{transform:'scale(1.035)',offset:.4},{transform:'scale(1)'}],{duration:600,easing:EO});
};
const rel=()=>dk.querySelectorAll('.pr').forEach(c=>c.classList.remove('pr'));
dk.addEventListener('pointerdown',e=>{const c=e.target.closest('.dk-c');if(!c)return;c.classList.add('pr');lx=e.clientX;ly=e.clientY});
['pointerup','pointercancel','pointerleave'].forEach(n=>dk.addEventListener(n,rel));
dk.addEventListener('click',e=>{const c=e.target.closest('.dk-c');if(!c)return;
 if(e.detail){pick(c,lx,ly)}else{const r=c.getBoundingClientRect();pick(c,r.left+r.width/2,r.top+r.height/2)}});
dk.addEventListener('keydown',e=>{const c=e.target.closest('.dk-c');if(!c||(e.key!='Enter'&&e.key!=' '))return;
 e.preventDefault();const r=c.getBoundingClientRect();pick(c,r.left+r.width/2,r.top+r.height/2)});

// ---- เปิด / ปิด ----
window.openBuy=function(btn){
 if(st)return;const p=window._PR&&window._PR[+btn.dataset.pi];if(!p)return;
 prod=p;qty=1;pk=pkgsOf(p);buildList();
 $('#cfNm').textContent=String(p[0]).replace('@day',t('day'));
 $('#cfCur').textContent=t('cur');
 const d=DET[p[0]],txt=d?(d[lang]||d.th||''):'';$('#cfDt').textContent=txt;$('#cfDs').hidden=!txt;cd.scrollTop=0;
 th.innerHTML=p[2]?'<img src="'+esc(p[2])+'" alt="">':'<svg class="cf-pt" width="100%" height="100%" aria-hidden="true"><use href="#tbg" width="100%" height="100%"/></svg>'+BXI;
 bg.innerHTML=btn.innerHTML;okb.classList.remove('ld');cf.classList.remove('dn');shown=0;
 pick(dk.firstChild,0,0,true);          // เลือกใบแรกให้ก่อน (ไม่มีอนิเมชั่น)
 st=1;src=btn;document.body.classList.add('cf-open');
 const B=btn.getBoundingClientRect();cf.classList.add('on');ov.classList.add('on');
 const C=wrap.getBoundingClientRect(),g=geo(B,C);btn.classList.add('cf-src');stop();
 if(reduce()){A(mv,[{opacity:0},{opacity:1}],{duration:160})}
 else{
  const a=A(mv,[{transform:g.t},{transform:'translate3d(0,0,0)'}],{duration:760,easing:EO});
  A(cd,[{clipPath:g.c},{clipPath:FULL}],{duration:760,easing:EO});
  A(bg,[{opacity:1},{opacity:0}],{duration:380,delay:110,easing:'ease-out'});
  A(gl,[{opacity:0},{opacity:1}],{duration:420,delay:320,easing:'ease-out'});
  kids.forEach((k,i)=>A(k,[{opacity:0,transform:'translate3d(0,16px,0)'},{opacity:1,transform:'none'}],{duration:560,delay:250+i*65,easing:EO}));
  a.onfinish=()=>{if(st==1){stop();wipe()}};
 }
 setTimeout(()=>{if(st==1)try{cd.focus({preventScroll:true})}catch(e){}},60);
};
function close(){
 if(st!=1)return;st=2;stop(true);
 const B=rectOf(src),C=wrap.getBoundingClientRect(),g=geo(B,C);ov.classList.remove('on');
 if(reduce()){const a=A(mv,[{opacity:0}],{duration:140});a.onfinish=fin;return}
 A(inn,[{opacity:0}],{duration:170,easing:'ease-out'});
 A(gl,[{opacity:0}],{duration:200,easing:'ease-out'});
 A(bg,[{opacity:1}],{duration:260,delay:190,easing:'ease-in'});
 const a=A(mv,[{transform:g.t}],{duration:560,easing:EC});
 A(cd,[{clipPath:g.c}],{duration:560,easing:EC});
 a.onfinish=fin;
}
$('#cfNo').onclick=close;$('#cfFin').onclick=close;ov.onclick=close;
ov.addEventListener('touchmove',e=>e.preventDefault(),{passive:false});
addEventListener('keydown',e=>{if(e.key=='Escape'&&st==1)close()});
minus.onclick=()=>{if(qty>1){qty--;upd(true,true)}};
plus.onclick=()=>{if(qty<max){qty++;upd(true,true)}};

/* ยืนยันสั่งซื้อ
   ตอนนี้ยังไม่มีระบบสั่งซื้อจริง → รอ 0.7 วินาทีแล้วโชว์หน้า "สำเร็จ" เฉยๆ (ยังไม่ได้สร้างออเดอร์)
   เมื่อทำระบบจริง ให้กำหนด window.placeOrder = async o => {...} (throw ถ้าล้มเหลว)
   o = {product, package, qty, unit, total} */
okb.onclick=async()=>{
 if(st!=1||okb.classList.contains('ld'))return;okb.classList.add('ld');
 let ok=true;
 try{
  const o={product:prod[0],package:sel.n,qty:qty,unit:unit,total:unit*qty};
  if(typeof window.placeOrder==='function')await window.placeOrder(o);else await new Promise(r=>setTimeout(r,700));
 }catch(e){ok=false}
 if(st==1){if(ok){cd.scrollTop=0;cf.classList.add('dn')}else tip('cfErr')}
 okb.classList.remove('ld');
};
})();
