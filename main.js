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
const L={th:{addImg:"ใส่รูป",tTopup:"เติมเงิน",tContact:"ติดต่อ",tHistory:"ประวัติการสั่งซื้อ",tHistory2:"ประวัติการเติมเงิน",tShop:"ซื้อสินค้า",lang:"ภาษา",theme:"ธีม",menu:"เมนู",home:"หน้าหลัก",list:"รายการสินค้า",about:"เกี่ยวกับเรา",review:"รีวิวร้าน",help:"ช่วยเหลือ",contact:"ติดต่อเรา",auth:"เข้าสู่ระบบ / สมัครสมาชิก",login:"เข้าสู่ระบบ",users:"ผู้ใช้งาน",unitU:"คน",stock:"สต็อก",unitS:"ชิ้น",recent:"รายการสั่งซื้อล่าสุด",recentS:"รายการสินค้าที่เพิ่งถูกสั่งซื้อ",week:"ขายดีประจำสัปดาห์",weekS:"สินค้าขายดีที่ลูกค้าเลือกมากที่สุด",all:"ดูทั้งหมด",cat:"หมวดหมู่",catS:"รวมสินค้าแนะนำและไอเทมยอดนิยม คัดสรรมาเพื่อคุณโดยเรา",feat:"สินค้าแนะนำ",featS:"รวมสินค้าแนะนำและไอเทมยอดนิยม คัดสรรมาเพื่อคุณโดยเรา",buy:"ซื้อ",left:"คงเหลือ",sold:"ขายแล้ว",pcs:"ชิ้น",ago:"นาทีที่แล้ว",cats:"หมวดหมู่",items:"สินค้า",detail:"ดูรายละเอียด",day:"วัน",login_m:"กรุณาเข้าสู่ระบบก่อน (ระบบสมาชิกยังไม่เชื่อมต่อ)",needlogin_m:"กรุณาเข้าสู่ระบบจากเมนูก่อนนะครับ",soon_m:"ฟังก์ชันนี้ยังไม่เชื่อมต่อข้อมูลจริง",out:"หมด",out_m:"สินค้านี้หมดแล้ว",noProd:"ยังไม่มีสินค้า",loadErr:"โหลดสินค้าไม่สำเร็จ ลองใหม่อีกครั้ง"},
lo:{addImg:"ໃສ່ຮູບ",tTopup:"ເຕີມເງິນ",tContact:"ຕິດຕໍ່",tHistory:"ປະຫວັດການສັ່ງຊື້",tHistory2:"ປະຫວັດການເຕີມເງິນ",tShop:"ຊື້ສິນຄ້າ",lang:"ພາສາ",theme:"ຮູບແບບ",menu:"ເມນູ",home:"ໜ້າຫຼັກ",list:"ລາຍການສິນຄ້າ",about:"ກ່ຽວກັບພວກເຮົາ",review:"ຣີວິວຮ້ານ",help:"ຊ່ວຍເຫຼືອ",contact:"ຕິດຕໍ່ພວກເຮົາ",auth:"ເຂົ້າສູ່ລະບົບ / ສະໝັກສະມາຊິກ",login:"ເຂົ້າສູ່ລະບົບ",users:"ຜູ້ໃຊ້ງານ",unitU:"ຄົນ",stock:"ສະຕັອກ",unitS:"ຊິ້ນ",recent:"ລາຍການສັ່ງຊື້ຫຼ້າສຸດ",recentS:"ລາຍການສິນຄ້າທີ່ຫາກໍຖືກສັ່ງຊື້",week:"ຂາຍດີປະຈຳອາທິດ",weekS:"ສິນຄ້າຂາຍດີທີ່ລູກຄ້າເລືອກຫຼາຍທີ່ສຸດ",all:"ເບິ່ງທັງໝົດ",cat:"ໝວດໝູ່",catS:"ລວມສິນຄ້າແນະນຳ ແລະ ໄອເທັມຍອດນິຍົມ ຄັດສັນມາເພື່ອທ່ານໂດຍພວກເຮົາ",feat:"ສິນຄ້າແນະນຳ",featS:"ລວມສິນຄ້າແນະນຳ ແລະ ໄອເທັມຍອດນິຍົມ ຄັດສັນມາເພື່ອທ່ານໂດຍພວກເຮົາ",buy:"ຊື້",left:"ຍັງເຫຼືອ",sold:"ຂາຍແລ້ວ",pcs:"ຊິ້ນ",ago:"ນາທີກ່ອນ",cats:"ໝວດໝູ່",items:"ສິນຄ້າ",detail:"ເບິ່ງລາຍລະອຽດ",day:"ມື້",login_m:"ກະລຸນາເຂົ້າສູ່ລະບົບກ່ອນ (ລະບົບສະມາຊິກຍັງບໍ່ເຊື່ອມຕໍ່)",needlogin_m:"ກະລຸນາເຂົ້າສູ່ລະບົບຈາກເມນູກ່ອນ",soon_m:"ຟັງຊັນນີ້ຍັງບໍ່ເຊື່ອມຕໍ່ຂໍ້ມູນຈິງ",out:"ໝົດ",out_m:"ສິນຄ້ານີ້ໝົດແລ້ວ",noProd:"ຍັງບໍ່ມີສິນຄ້າ",loadErr:"ໂຫຼດສິນຄ້າບໍ່ສຳເລັດ ລອງໃໝ່ອີກຄັ້ງ"}};
Object.assign(L.th,{"aLogin": "เข้าสู่ระบบ", "aReg": "สมัครสมาชิก", "aUser": "ชื่อผู้ใช้", "aPass": "รหัสผ่าน", "aPass2": "ยืนยันรหัสผ่าน", "aHi": "ยินดีต้อนรับกลับ", "aHiR": "สร้างบัญชีใหม่", "aNo": "ยังไม่มีบัญชี?", "aHave": "มีบัญชีแล้ว?", "aE1": "กรุณากรอกข้อมูลให้ครบ", "aE2": "รหัสผ่านไม่ตรงกัน", "aE3": "รหัสผ่านอย่างน้อย 6 ตัวอักษร", "aOk": "ยังไม่ได้เชื่อมต่อระบบสมาชิกจริง"});Object.assign(L.lo,{"aLogin": "ເຂົ້າສູ່ລະບົບ", "aReg": "ສະໝັກສະມາຊິກ", "aUser": "ຊື່ຜູ້ໃຊ້", "aPass": "ລະຫັດຜ່ານ", "aPass2": "ຢືນຢັນລະຫັດຜ່ານ", "aHi": "ຍິນດີຕ້ອນຮັບກັບຄືນ", "aHiR": "ສ້າງບັນຊີໃໝ່", "aNo": "ຍັງບໍ່ມີບັນຊີ?", "aHave": "ມີບັນຊີແລ້ວ?", "aE1": "ກະລຸນາຕື່ມຂໍ້ມູນໃຫ້ຄົບ", "aE2": "ລະຫັດຜ່ານບໍ່ກົງກັນ", "aE3": "ລະຫັດຜ່ານຢ່າງໜ້ອຍ 6 ຕົວ", "aOk": "ຍັງບໍ່ໄດ້ເຊື່ອມຕໍ່ລະບົບສະມາຊິກຈິງ"});
Object.assign(L.th,{"aShow": "แสดง", "aHide": "ซ่อน"});
Object.assign(L.th,{"aRem":"จำบัญชีไว้ (ไม่ต้องลงชื่อใหม่)","aE4":"ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง","aE5":"ชื่อผู้ใช้นี้ถูกใช้แล้ว","aE6":"ชื่อผู้ใช้ใช้ได้เฉพาะ a-z 0-9 _ . ยาว 3–20 ตัว","aE7":"เชื่อมต่อไม่ได้ ลองใหม่อีกครั้ง","aWel":"ยินดีต้อนรับ","aOut":"ออกจากระบบ","aAcc":"บัญชีของฉัน","aBye":"ออกจากระบบแล้ว","aAdm":"ห้องควบคุมแอดมิน"});
Object.assign(L.lo,{"aRem":"ຈື່ບັນຊີໄວ້ (ບໍ່ຕ້ອງເຂົ້າສູ່ລະບົບໃໝ່)","aE4":"ຊື່ຜູ້ໃຊ້ ຫຼື ລະຫັດຜ່ານບໍ່ຖືກຕ້ອງ","aE5":"ຊື່ຜູ້ໃຊ້ນີ້ຖືກໃຊ້ແລ້ວ","aE6":"ຊື່ຜູ້ໃຊ້ໃຊ້ໄດ້ສະເພາະ a-z 0-9 _ . ຍາວ 3–20 ຕົວ","aE7":"ເຊື່ອມຕໍ່ບໍ່ໄດ້ ລອງໃໝ່ອີກຄັ້ງ","aWel":"ຍິນດີຕ້ອນຮັບ","aOut":"ອອກຈາກລະບົບ","aAcc":"ບັນຊີຂອງຂ້ອຍ","aBye":"ອອກຈາກລະບົບແລ້ວ","aAdm":"ຫ້ອງຄວບຄຸມແອດມິນ"});Object.assign(L.lo,{"aShow": "ສະແດງ", "aHide": "ເຊື່ອງ"});
Object.assign(L.th,{cur:"กีบ"});Object.assign(L.lo,{cur:"ກີບ"});
Object.assign(L.th,{agoNow:"เมื่อสักครู่",agoH:"ชั่วโมงที่แล้ว",agoD:"วันที่แล้ว"});Object.assign(L.lo,{agoNow:"ເມື່ອກີ້ນີ້",agoH:"ຊົ່ວໂມງກ່ອນ",agoD:"ມື້ກ່ອນ"});

// ข้อความการ์ดยืนยันการสั่งซื้อ
Object.assign(L.th,{cfT:"ยืนยันการสั่งซื้อ",cfS:"ตรวจสอบรายการก่อนยืนยัน",cfTot:"ยอดรวม",cfNo:"ยกเลิก",cfOk:"ยืนยันสั่งซื้อ",cfDet:"รายละเอียดสินค้า",cfDone:"สั่งซื้อสำเร็จ",cfThx:"ขอบคุณที่อุดหนุนนะครับ",cfClose:"ปิด",cfErr_m:"สั่งซื้อไม่สำเร็จ ลองใหม่อีกครั้ง"});
Object.assign(L.lo,{cfT:"ຢືນຢັນການສັ່ງຊື້",cfS:"ກວດສອບລາຍການກ່ອນຢືນຢັນ",cfTot:"ຍອດລວມ",cfNo:"ຍົກເລີກ",cfOk:"ຢືນຢັນສັ່ງຊື້",cfDet:"ລາຍລະອຽດສິນຄ້າ",cfDone:"ສັ່ງຊື້ສຳເລັດ",cfThx:"ຂອບໃຈທີ່ອຸດໜູນ",cfClose:"ປິດ",cfErr_m:"ສັ່ງຊື້ບໍ່ສຳເລັດ ລອງໃໝ່ອີກຄັ້ງ"});

// ข้อมูลสินค้า / รายการสั่งซื้อ / หมวดหมู่ / รูป
// ข้อมูลจริงมาจาก Supabase (rpc shop_catalog) — เพิ่ม/ลบสินค้าที่ห้องแอดมิน ไม่ต้องแก้ไฟล์นี้
// O = รายการสั่งซื้อล่าสุด, C = หมวดหมู่ (ยังไม่มีระบบจริง จึงเว้นว่างไว้และซ่อนส่วนนั้น)
const O=[],C=[];let W=[],F=[];
const CAT={state:'load',list:[],sig:''};
const SBU='https://dmnppzrjkskrkusbdzce.supabase.co',SBK='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRtbnBwenJqa3Nrcmt1c2JkemNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI2MDQ2MjYsImV4cCI6MjEwODE4MDYyNn0.ClK3xGDdESVo9YPO4PHvdQZY0JwO1AOWS1QiwmX0k5Y';
const escH=x=>String(x).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const okImg=u=>typeof u==='string'&&/^(data:image\/|https?:\/\/)/i.test(u)&&!/["'<>\s]/.test(u)?u:'';
// แปลงสินค้าจากฐานข้อมูล -> แถวที่ card() ใช้: [ชื่อ, ราคา, รูป, สต็อก, HOT, ขายแล้ว, รายละเอียด, ตัวเลือก]
const toRow=p=>{const opts=(p.opts||[]).map(o=>({id:o.id,n:String(o.label),pr:(+o.price||0)*1000,left:+o.stock||0,sold:+o.sold||0})),
 stock=opts.reduce((a,o)=>a+o.left,0),sold=opts.reduce((a,o)=>a+o.sold,0),min=opts.length?Math.min(...opts.map(o=>o.pr)):0;
 return[String(p.name),(()=>{const f=v=>Math.round(v).toLocaleString('en-US').replace(/,/g,'.'),mx=opts.length?Math.max(...opts.map(o=>o.pr)):0;return(mx>min?f(min)+'-'+f(mx):f(min))})(),okImg(p.img),stock,0,sold,String(p.desc||''),opts,String(p.status||'').toLowerCase(),+p.new_at||Date.parse(p.created_at||'')||0,+p.id||0]};
const applyCat=()=>{const R=CAT.list.map(toRow);F=R;
 const TOP=R.filter(r=>r[5]>0).sort((a,b)=>b[5]-a[5]).slice(0,8);TOP.forEach(r=>{r[4]=1});   // สินค้าขายดี = ติดป้าย HOT ทุกที่ (สไลด์ขายดี, สินค้าแนะนำ, ป๊อปอัปซื้อสินค้า)
  W=TOP.map(r=>r.slice());
 window.refreshStats&&window.refreshStats()};
async function loadCatalog(){
 try{const go=n=>fetch(SBU+'/rest/v1/rpc/'+n,{method:'POST',headers:{apikey:SBK,Authorization:'Bearer '+SBK,'Content-Type':'application/json'},body:'{}'});let r=await go('shop_catalog_ex');if(!r.ok)r=await go('shop_catalog');
  if(!r.ok)throw 0;const j=await r.json();if(!Array.isArray(j))throw 0;
  const sig=JSON.stringify(j);if(CAT.state==='ok'&&sig===CAT.sig)return;
  CAT.list=j;CAT.sig=sig;CAT.state='ok'}catch(e){if(CAT.state==='ok')return;CAT.state='err'}
 applyCat();render()}

// ===== ซื้อสดๆ: รายการสั่งซื้อล่าสุดจาก Supabase (rpc recent_orders) =====
let ORAW=[],ORSIG='';
const fmtK=v=>Math.round(v).toLocaleString('en-US').replace(/,/g,'.');
const agoTxt=ms=>{const m=Math.max(0,Math.floor((Date.now()-ms)/60000));return m<1?t('agoNow'):m<60?m+' '+t('ago'):m<1440?Math.floor(m/60)+' '+t('agoH'):Math.floor(m/1440)+' '+t('agoD')};
const buildOrders=()=>{const by={};CAT.list.forEach(p=>{by[p.id]=p});O.length=0;
 ORAW.forEach(r=>{const p=by[r.pid];if(!p)return;O.push([String(p.name),(+r.price||0)*1000,okImg(p.img),+r.at||0,+r.pid,+r.qty||1,String(r.label||'')])})};
function paintOrders(){buildOrders();
 const clock='<svg class="ic c-blue ico-clock" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path class="hand" d="M12 12V7"/><path d="M12 12l3.500 2"/></svg>';
 const html=O.map(o=>`<div class="ord" role="button" tabindex="0" data-pid="${o[4]}" title="${escH(o[6])}">${slot(o[2],"th")}<div><b>${escH(o[0])}${o[5]>1?' ×'+o[5]:''}</b><span>${fmtK(o[1])}</span><em>${clock}<small class="ag" data-at="${o[3]}">${agoTxt(o[3])}</small></em></div></div>`).join('');
 const r=$('#orders');if(!r)return;
 const sec=r.closest('.sec');if(sec)sec.style.display=O.length?'':'none';
 r.innerHTML='<div class="mq">'+html+'</div>';const q0=r.firstChild;
 const fit=n=>{const q=r.firstChild;if(!q||q!==q0||!O.length)return;const w=q.scrollWidth;if(!w){if(n<10)setTimeout(()=>fit(n+1),300);return}const k=Math.max(1,Math.ceil(r.clientWidth/w));q.innerHTML=html.repeat(k*2);q.style.setProperty('--d',Math.max(18,w*k/38)+'s')};requestAnimationFrame(()=>fit(0))}
async function loadOrders(){try{
 const r=await fetch(SBU+'/rest/v1/rpc/recent_orders',{method:'POST',headers:{apikey:SBK,Authorization:'Bearer '+SBK,'Content-Type':'application/json'},body:'{}'});
 if(!r.ok)throw 0;const d=await r.json();if(!Array.isArray(d))throw 0;
 const sig=JSON.stringify(d);if(sig===ORSIG)return;ORSIG=sig;ORAW=d;paintOrders()}catch(e){clearTimeout(loadOrders.t);if(!document.hidden)loadOrders.t=setTimeout(loadOrders,5000)}}
document.addEventListener('click',e=>{const c=e.target.closest&&e.target.closest('#orders .ord[data-pid]');if(!c)return;
 const pid=+c.dataset.pid,P=window._PR||[],i=P.findIndex(p=>p&&p[10]===pid);if(i<0)return;
 const b=document.querySelector('.buy[data-pi="'+i+'"]');if(b)b.click()});
document.addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&e.target.matches&&e.target.matches('#orders .ord[data-pid]')){e.preventDefault();e.target.click()}});
setInterval(()=>{document.querySelectorAll('#orders .ag[data-at]').forEach(el=>{el.textContent=agoTxt(+el.dataset.at)})},20000);
const IMG={banner:"",logo:"",avatar:""}; // ใส่ลิงก์รูป เช่น banner:"https://.../banner.jpg" | ຮູບສິນຄ້າ/ລາຍການ/ໝວດໝູ່ ໃສ່ໃນຊ່ອງທີ 3 ຂອງແຕ່ລະແຖວໃນ O, W, F ແລະ ຊ່ອງທີ 2 ຂອງ C

// วาดการ์ดสินค้า รายการสั่งซื้อ และหมวดหมู่
const PR=[];window._PR=PR;
function render(){PR.length=0;
paintOrders();
const card=(p,i)=>!p?`<div class="pc ph"><div class="im"></div><i style="width:70%"></i><i style="width:40%"></i></div>`:`<div class="pc">${p[4]?'<span class="hot">HOT</span>':''}${slot(p[2],"im",escH(p[0]))}<h3>${escH(p[0].replace('@day',t('day')))}</h3><div class="pr"><svg class="ic c-gold " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12V4h8l10 10-8 8z"/><circle cx="8" cy="9" r="1.500" fill="currentColor"/></svg>${p[1].replace('@cur',t('cur'))}</div>${p[3]!=null?`<div class="stk ${(+p[3])>=30?'hi':(+p[3])>=10?'mid':'low'}"><span class="sic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8l-9-5-9 5v8l9 5 9-5zM3 8l9 5 9-5M12 13v8"/></svg></span>${p[3]}</div>`:''}<button class="buy${p[3]<=0?' out':''}" data-msg="${p[3]<=0?'out':'login'}" data-pi="${PR.push(p)-1}">${p[3]<=0?t('out'):t('buy')+' '+cart}</button>${p[3]!=null?`<div class="st">${box}${t('sold')} ${p[5]!==undefined?p[5]:p[3]}</div>`:''}</div>`;
{const _wr=$('#weekRail');if(_wr){const _w=W.map(card).join('');_wr.innerHTML='<div class="wt">'+_w+'</div>';_wr.dataset.n=W.length;window._wkSrc=_w;requestAnimationFrame(()=>window._wkSetup&&window._wkSetup())}}$('#featGrid').innerHTML=CAT.state==='load'?Array.from({length:4},()=>card(null)).join(''):F.length?F.map(card).join(''):'<div class="emp">'+t(CAT.state==='err'?'loadErr':'noProd')+'</div>';
{const hide=(id,on)=>{const e=document.getElementById(id);const sec=e&&e.closest('.sec');if(sec)sec.style.display=on?'':'none'};hide('weekRail',W.length);hide('orders',O.length);hide('catList',C.length)}
$('#catList').innerHTML=C.map(c=>`<div class="cat${c[4]?' hv':''}" data-msg="soon"><div class="bn">${slot(c[1],"",c[0])}<button><svg class="ic  " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>${t('detail')}</button></div><h3>${c[0]}</h3>${c[2]!==undefined?`<div class="mt"><span><s><svg class="ic c-vio " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6a2 2 0 012-2h4l2 3h8a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>0 ${t('cats')}</s><svg class="ic c-gold " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8l-9-5-9 5v8l9 5 9-5zM3 8l9 5 9-5M12 13v8"/></svg>${c[2]} ${t('items')}</span><u><svg class="ic c-gold " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M14.800 9.500c-.5-1.100-1.500-1.600-2.800-1.600-1.500 0-2.700.8-2.700 2 0 2.900 5.500 1.400 5.500 4.300 0 1.200-1.200 2-2.800 2-1.200 0-2.300-.6-2.800-1.700M12 6v1.900M12 16.100V18"/></svg>${c[3]}</u></div>`:''}</div>`).join('');
$$('[data-i]').forEach(e=>e.textContent=t(e.dataset.i));$$('[data-ph]').forEach(e=>e.placeholder=t(e.dataset.ph));fill($('#bannerSlot'),IMG.banner);fill($('#logoSlot'),IMG.logo);}
render();loadCatalog();loadOrders();setInterval(()=>{if(!document.hidden)loadCatalog()},45000);setInterval(()=>{if(!document.hidden)loadOrders()},15000);document.addEventListener('visibilitychange',()=>{if(!document.hidden){loadCatalog();loadOrders()}});

// เมนูข้าง, ปุ่ม, ภาษา, ธีม, เลื่อนขึ้น, อนิเมชั่นตอนเลื่อน
const tip=m=>{const e=$('#toast');e.innerHTML='<svg class="ic c-gold " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.500v.5"/></svg><span></span>';e.lastChild.textContent=t(m+'_m');e.classList.add('on');clearTimeout(tip.h);tip.h=setTimeout(()=>e.classList.remove('on'),2400)};
const dr=o=>{$('#dr').classList.toggle('on',o);$('#ov').classList.toggle('on',o)};
// guest tried an action that needs an account: close everything, go back to the top, tell them to sign in from the menu themselves
window.needLogin=()=>{dr(0);window.scrollTo({top:0});tip('needlogin')};
$('#mb').onclick=()=>dr(1);$('#cl').onclick=()=>dr(0);$('#ov').onclick=()=>dr(0);
$('#sb').onclick=e=>{e.stopPropagation();$('#pop').classList.toggle('on')};
document.addEventListener('click',e=>{if(!e.target.closest('#pop'))$('#pop').classList.remove('on');
const m=e.target.closest('[data-msg]');if(m){e.preventDefault();if(m.dataset.msg=='admin'){dr(0);location.href='admin.html'}else if(m.dataset.msg=='logout'){dr(0);window.doLogout&&window.doLogout()}else if(m.dataset.msg=='login'){if(window._user){dr(0);if(m.dataset.pi!=null&&window.openBuy)window.openBuy(m);else tip('soon')}else if(m.closest('#dr'))window.openAuth('login',m);else window.needLogin()}else{dr(0);tip(m.dataset.msg)}}
const g=e.target.closest('[data-go]');if(g){dr(0);const x=g.dataset.go;(x=='top'?window.scrollTo({top:0}):document.getElementById(x).scrollIntoView())}});
$('#lg').onclick=e=>{const b=e.target.closest('button');if(!b)return;lang=b.dataset.l;document.documentElement.lang=lang;$$('#lg button').forEach(x=>x.classList.toggle('on',x==b));render();window._authUI&&window._authUI()};
$('#th').onclick=e=>{const b=e.target.closest('button');if(!b)return;document.documentElement.dataset.theme=b.dataset.t;{const tc=document.querySelector('meta[name="theme-color"]');tc&&tc.setAttribute('content',b.dataset.t=='dark'?'#000000':'#fbf3dc')}$$('#th button').forEach(x=>x.classList.toggle('on',x==b))};
const up=$('#up');up.onclick=()=>scrollTo({top:0});addEventListener('scroll',()=>up.classList.toggle('on',scrollY>300),{passive:true});
(()=>{$$('.dr a').forEach((a,i)=>a.style.setProperty('--k',i));
if(matchMedia('(prefers-reduced-motion:reduce)').matches)return;
document.documentElement.classList.add('js');
$$('.sec').forEach(e=>e.classList.add('rv'));
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.06});
$$('.rv').forEach(e=>io.observe(e));
$$('.cnt:not([data-live])').forEach(e=>{const n=+e.dataset.n,s0=performance.now();const f=now=>{const p=Math.min(1,(now-s0)/1400);e.textContent=Math.round(n*(1-Math.pow(1-p,3))).toLocaleString('en-US');if(p<1)requestAnimationFrame(f)};requestAnimationFrame(f)});
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
window._sb=sb; // ใช้ร่วมกับป้ายยอดเงิน (อ่านอย่างเดียว)
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
   - แพ็กเกจ/ราคา/สต็อก/รายละเอียด มาจากสินค้าจริง (ตั้งค่าที่ห้องแอดมิน)
   - ตัวเลือกที่สต็อกหมดจะกดเลือกไม่ได้
   - ต่อระบบสั่งซื้อจริงที่ window.placeOrder (ดูท้ายบล็อก)
   ===================================================================== */
(()=>{
const ov=$('#cfo'),cf=$('#cf');if(!ov||!cf)return;
const wrap=$('#cfW'),mv=$('#cfM'),cd=$('#cfC'),gl=$('#cfGl'),inn=$('#cfIn'),bg=$('#cfBg'),th=$('#cfTh'),dk=$('#dk'),
 minus=$('#cfMinus'),plus=$('#cfPlus'),qEl=$('#cfQ'),tn=$('#cfTn'),okb=$('#cfOk');
const kids=[...inn.querySelectorAll('.cf-st')];

// ---- แพ็กเกจ/ราคา/สต็อก/รายละเอียด มาจากสินค้าจริงในฐานข้อมูล (ตั้งที่ห้องแอดมิน) ----
// สีการ์ดแพ็กเกจ (โทนแดงเดียวกับกระเบื้องหน้าแรกและปุ่มซื้อ)
const PAL=['var(--g0)','var(--g1)','var(--g2)','var(--g3)','var(--g4)'];

const BXI='<svg class="cf-bx" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8l-9-5-9 5v8l9 5 9-5zM3 8l9 5 9-5M12 13v8"/></svg>';
const CK='<span class="dk-k"><svg viewBox="0 0 20 20"><circle cx="10" cy="10" r="10"/><path d="M5.8 10.4l2.9 2.9 5.5-5.9" pathLength="24"/></svg></span>';
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const nf=n=>(+n).toLocaleString('en-US',{maximumFractionDigits:2});
const pf=n=>Math.round(+n||0).toLocaleString('en-US').replace(/,/g,'.'); // ราคาในระบบเก็บเป็นหลักพัน (20) แต่หน้าร้านโชว์เต็ม 20.000
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
const setTot=(to,now)=>{cancelAnimationFrame(raf);if(now){shown=to;tn.textContent=pf(to);return}
 const from=shown,s0=performance.now();
 const f=t0=>{const p=Math.min(1,(t0-s0)/420);shown=from+(to-from)*(1-Math.pow(1-p,3));tn.textContent=pf(Math.round(shown));if(p<1)raf=requestAnimationFrame(f);else{shown=to;tn.textContent=pf(to)}};
 raf=requestAnimationFrame(f)};
const upd=(bump,anim)=>{qEl.textContent=qty;if(bump){qEl.classList.remove('bump');void qEl.offsetWidth;qEl.classList.add('bump')}minus.disabled=qty<=1;plus.disabled=qty>=max;setTot(unit*qty,!anim)};
let srcKey='';
const keyOf=p=>p?String(p[0])+'|'+((p[7]&&p[7][0]&&p[7][0].id)||''):'';
// หน้าร้านวาดการ์ดใหม่ได้ระหว่างที่การ์ดสั่งซื้อเปิดอยู่ (รีเฟรชข้อมูล) → ปุ่มเดิมหลุดจากหน้าจอ ต้องหาปุ่มของสินค้าเดิมใหม่ ไม่งั้นอนิเมชั่นปิดจะวิ่งไปกลางจอ
const findSrc=()=>{if(src&&src.isConnected)return src;const P=window._PR||[],hit=[...document.querySelectorAll('.buy[data-pi]')].filter(b=>keyOf(P[+b.dataset.pi])===srcKey);
 if(!hit.length)return null;const vis=hit.find(b=>{const r=b.getBoundingClientRect();return r.width&&r.bottom>0&&r.top<innerHeight});src=vis||hit[0];src.classList.add('cf-src');return src};
const fin=()=>{stop();wipe();cf.classList.remove('on','dn');document.body.classList.remove('cf-open');const s=src;src=null;st=0;document.querySelectorAll('.cf-src').forEach(b=>b.classList.remove('cf-src'));if(s&&s.isConnected){try{s.focus({preventScroll:true})}catch(e){}}};

// ---- ข้อมูลแพ็กเกจของสินค้า ----
const pkgsOf=p=>(p[7]||[]).map(o=>({id:o.id,n:o.n,pr:o.pr,left:o.left,sold:o.sold}));
const buildList=()=>{
 dk.innerHTML=pk.map((x,i)=>{const tot=x.left+x.sold,pct=tot?Math.round(x.sold/tot*100):0;
  return '<div class="dk-c'+(x.left<=0?' off':'')+'" role="radio" aria-checked="false" aria-disabled="'+(x.left<=0)+'" tabindex="'+(x.left<=0?'-1':'0')+'" data-k="'+i+'" style="--g:'+PAL[i%PAL.length]+'">'
   +'<div class="dk-r"><span class="dk-n">'+CK+esc(dayName(x.n))+'</span><span class="dk-p">'+pf(x.pr)+'</span></div>'
   +'<div class="dk-r dk-m"><span>'+esc(t('left'))+' <b>'+nf(x.left)+'</b></span><span>'+esc(t('sold'))+' <b>'+nf(x.sold)+'</b></span></div>'
   +'<div class="dk-bar"><i style="width:'+pct+'%"></i></div></div>'}).join('');
 dk.classList.remove('has');curEl=null;
};
// เลือกแพ็กเกจ → อัปเดตราคา/จำนวนสูงสุด/ยอดรวม
const apply=(i,anim)=>{
 sel=pk[i];unit=sel.pr;max=Math.max(1,sel.left);const q0=qty;if(qty>max)qty=max;
 $('#cfUn').textContent=pf(unit);upd(q0!==qty,anim);
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
dk.addEventListener('pointerdown',e=>{const c=e.target.closest('.dk-c');if(!c||c.classList.contains('off'))return;c.classList.add('pr');lx=e.clientX;ly=e.clientY});
['pointerup','pointercancel','pointerleave'].forEach(n=>dk.addEventListener(n,rel));
dk.addEventListener('click',e=>{const c=e.target.closest('.dk-c');if(!c||c.classList.contains('off'))return;
 if(e.detail){pick(c,lx,ly)}else{const r=c.getBoundingClientRect();pick(c,r.left+r.width/2,r.top+r.height/2)}});
dk.addEventListener('keydown',e=>{const c=e.target.closest('.dk-c');if(!c||c.classList.contains('off')||(e.key!='Enter'&&e.key!=' '))return;
 e.preventDefault();const r=c.getBoundingClientRect();pick(c,r.left+r.width/2,r.top+r.height/2)});

// ---- เปิด / ปิด ----
window.openBuy=function(btn){
 if(st)return;const p=window._PR&&window._PR[+btn.dataset.pi];if(!p||!(p[7]||[]).some(o=>o.left>0))return;
 prod=p;qty=1;pk=pkgsOf(p);buildList();
 $('#cfNm').textContent=String(p[0]).replace('@day',t('day'));
 $('#cfCur').textContent='';
 const txt=p[6]||'';$('#cfDt').textContent=txt;$('#cfDs').hidden=!txt;cd.scrollTop=0;
 th.innerHTML=p[2]?'<img src="'+esc(p[2])+'" alt="">':'<svg class="cf-pt" width="100%" height="100%" aria-hidden="true"><use href="#tbg" width="100%" height="100%"/></svg>'+BXI;
 bg.innerHTML=btn.innerHTML;okb.classList.remove('ld');cf.classList.remove('dn');shown=0;
 pick(dk.querySelector('.dk-c:not(.off)')||dk.firstChild,0,0,true);          // เลือกใบแรกให้ก่อน (ไม่มีอนิเมชั่น)
 st=1;src=btn;srcKey=keyOf(p);document.body.classList.add('cf-open');
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
 const el=findSrc(),r0=el&&el.isConnected?el.getBoundingClientRect():null,
  seen=r0&&r0.width&&r0.height&&r0.bottom>0&&r0.top<innerHeight&&r0.right>0&&r0.left<innerWidth;
 ov.classList.remove('on');
 // ไม่เจอปุ่มของสินค้านี้บนจอ → ไม่บินไปที่อื่น แค่จางหายไปอยู่กับที่
 if(reduce()||!seen){const a=A(mv,reduce()?[{opacity:0}]:[{opacity:1,transform:'scale(1)'},{opacity:0,transform:'scale(.95)'}],{duration:reduce()?140:260,easing:EC});a.onfinish=fin;return}
 const B=r0,C=wrap.getBoundingClientRect(),g=geo(B,C);
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
 let ok=true,res=null,why='cfErr';
 try{
  const o={product:prod[0],package:sel.n,qty:qty,unit:unit,total:unit*qty,optionId:sel.id};
  if(typeof window.placeOrder==='function')res=await window.placeOrder(o);else await new Promise(r=>setTimeout(r,700));
 }catch(e){ok=false;const s=String(e&&e.message||e);why=/insufficient/.test(s)?'cfBal':/out_of_stock/.test(s)?'cfStk':/closed/.test(s)?'cfClose2':'cfErr'}
 if(st==1){if(ok){cd.scrollTop=0;window.showCodes&&window.showCodes(res);cf.classList.add('dn')}else tip(why)}
 okb.classList.remove('ld');
};
})();

/* ---- สั่งซื้อจริง: rpc buy_product (หักเงิน + ตัดโค้ดออกจากสต็อก + ขายแล้ว+1 ในครั้งเดียว) ---- */
Object.assign(L.th,{cfBal_m:'ยอดเงินไม่พอ กรุณาเติมเงินก่อน',cfStk_m:'สินค้าเหลือไม่พอ ลองลดจำนวน',cfClose2_m:'สินค้านี้ปิดอยู่ชั่วคราว',cfCodes:'โค้ดของคุณ',cfCopy:'คัดลอก',cfCopied:'คัดลอกแล้ว'});
Object.assign(L.lo,{cfBal_m:'ຍອດເງິນບໍ່ພໍ ກະລຸນາເຕີມເງິນກ່ອນ',cfStk_m:'ສິນຄ້າເຫຼືອບໍ່ພໍ ລອງຫຼຸດຈຳນວນ',cfClose2_m:'ສິນຄ້ານີ້ປິດຊົ່ວຄາວ',cfCodes:'ໂຄ້ດຂອງທ່ານ',cfCopy:'ສຳເນົາ',cfCopied:'ສຳເນົາແລ້ວ'});
window.placeOrder=async o=>{
 const s=window._sb;if(!window._user||!s)throw new Error('login_required');
 const {data,error}=await s.rpc('buy_product',{p_option:o.optionId,p_qty:o.qty});
 if(error)throw error;
 loadCatalog();loadOrders();window.refreshBalance&&window.refreshBalance();   // สต็อก/ขายแล้ว/ยอดเงิน อัปเดตทันที
 return data;
};
Object.assign(L.th,{cfHelp:'ติดต่อแอดมิน · แจ้งปัญหา',cfHelpS:'มีปัญหากับโค้ดหรือการสั่งซื้อ ทักมาได้เลย',cfNoCh:'แอดมินยังไม่ได้เพิ่มช่องทางติดต่อ'});
Object.assign(L.lo,{cfHelp:'ຕິດຕໍ່ແອດມິນ · ແຈ້ງບັນຫາ',cfHelpS:'ມີບັນຫາກັບໂຄ້ດ ຫຼື ການສັ່ງຊື້ ທັກມາໄດ້ເລີຍ',cfNoCh:'ແອດມິນຍັງບໍ່ໄດ້ເພີ່ມຊ່ອງທາງຕິດຕໍ່'});
/* ---- ช่องทางติดต่อแอดมิน: ดึงจาก site_settings.links (ห้องแอดมิน > ตั้งค่า > ช่องทางติดต่อลูกค้า) ---- */
const CF_ICO={
 fb:['#1877f2','<path d="M14 8h2V5h-2.5C11.3 5 10 6.4 10 8.5V10H8v3h2v6h3v-6h2.2l.5-3H13V8.7c0-.5.2-.7 1-.7z" fill="currentColor" stroke="none"/>'],
 line:['#06c755','<path d="M12 4.5c-4.4 0-8 2.7-8 6.1 0 2.1 1.4 4 3.5 5.1-.1.6-.4 1.7-.5 2 0 .1.1.2.2.2.4 0 3.1-1.9 3.6-2.3.4.1.8.1 1.2.1 4.4 0 8-2.7 8-6.1s-3.6-5.1-8-5.1z" fill="currentColor" stroke="none"/>'],
 wa:['#25d366','<path d="M12 3.5a8.5 8.5 0 0 0-7.4 12.7L3.5 20.5l4.4-1.1A8.5 8.5 0 1 0 12 3.5z"/><path d="M9 8.5c0 3.2 2.3 5.5 5.5 6.5l1.2-1.4-1.9-1-.8.7c-.9-.4-1.6-1.1-2-2l.7-.8-1-1.9z" fill="currentColor" stroke="none"/>'],
 dc:['#5865f2','<path d="M7 7.5c1.6-.8 3.3-1.2 5-1.2s3.4.4 5 1.2c1.4 2.2 2.1 4.5 2.2 7-1.1.9-2.3 1.4-3.6 1.8l-.8-1.4M7 7.5c-1.4 2.2-2.1 4.5-2.2 7 1.1.9 2.3 1.4 3.6 1.8l.8-1.4"/><circle cx="9.7" cy="12" r="1" fill="currentColor"/><circle cx="14.3" cy="12" r="1" fill="currentColor"/>'],
 tg:['#229ed9','<path d="M20.5 4.5L3.5 11l5 1.8 1.8 5.2 2.6-3.2 4.2 3.1z"/><path d="M8.5 12.8l8-5"/>'],
 ig:['#e1306c','<rect x="4.5" y="4.5" width="15" height="15" rx="4.5"/><circle cx="12" cy="12" r="3.3"/><circle cx="16.6" cy="7.4" r=".8" fill="currentColor" stroke="none"/>'],
 tt:['#111','<path d="M14 4v10.2a3.2 3.2 0 1 1-3.2-3.2M14 4c.3 2.2 1.8 3.6 4 3.8"/>'],
 yt:['#ff0000','<rect x="3.5" y="6.5" width="17" height="11" rx="3.5"/><path d="M10.5 9.5v5l4.2-2.5z" fill="currentColor" stroke="none"/>'],
 ln:['#e0001f','<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3A4 4 0 0 0 11 18.7l1-1"/>']
};
const cfKind=(n,u)=>{let h='';try{h=new URL(u).hostname}catch(e){}
 const s=(n+' '+h).toLowerCase();
 return /facebook|fb\.|messenger|m\.me/.test(s)?'fb':/(^|[^a-z])line([^a-z]|$)|line\.me|lin\.ee|ไลน์|ໄລນ໌/.test(s)?'line':/whatsapp|wa\.me/.test(s)?'wa':/discord/.test(s)?'dc':/telegram|t\.me/.test(s)?'tg':/instagram/.test(s)?'ig':/tiktok/.test(s)?'tt':/youtube|youtu\.be/.test(s)?'yt':'ln'};
const cfIco=k=>'<span class="ci" style="background:'+CF_ICO[k][0]+'"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="color:#fff">'+CF_ICO[k][1]+'</svg></span>';
let cfLinksP=null;
const cfLinks=()=>{const s=window._sb;if(!s)return Promise.resolve([]);
 return Promise.race([s.rpc('get_site_settings').then(({data})=>(data&&Array.isArray(data.links)?data.links:[])),new Promise(r=>setTimeout(()=>r(null),7000))]).catch(()=>null)};
const cfHelpBox=box=>{
 const w=document.createElement('div');w.className='cf-ct';
 w.innerHTML='<div class="cf-bar"><div class="cf-bi"><div class="cf-chs"><span class="cf-ld"></span></div></div></div>'
  +'<button type="button" class="cf-help" aria-expanded="false"><span class="hi"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="3" y="13" width="4" height="6" rx="1.5"/><rect x="17" y="13" width="4" height="6" rx="1.5"/><path d="M19 19c0 1.5-1.5 2-4 2h-2"/></svg></span>'
  +'<span class="ht"><b>'+t('cfHelp')+'</b><small>'+t('cfHelpS')+'</small></span>'
  +'<svg class="hc" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 15l6-6 6 6"/></svg></button>';
 box.appendChild(w);
 const btn=w.querySelector('.cf-help'),chs=w.querySelector('.cf-chs');
 const paint=ls=>{const U=/^https?:\/\/\S+$/i;
  const ok=(ls||[]).filter(x=>x&&typeof x.u==='string'&&U.test(x.u.trim()));
  chs.innerHTML=ok.length?ok.map((x,i)=>{const u=x.u.trim(),n=String(x.l||'').trim()||(()=>{try{return new URL(u).hostname}catch(e){return 'Link'}})();
   return '<a class="cf-chip" style="--i:'+i+'" href="'+escH(u)+'" target="_blank" rel="noopener noreferrer">'+cfIco(cfKind(n,u))+'<span>'+escH(n)+'</span></a>'}).join(''):'<span class="cf-none">'+t('cfNoCh')+'</span>'};
 cfLinks().then(paint);
 btn.onclick=()=>{const o=!w.classList.contains('open');w.classList.toggle('open',o);btn.setAttribute('aria-expanded',o)};
};
/* ---- เมนู "ติดต่อเรา": ข้อความ 3 อันเลื่อนไปทางซ้าย แล้วการ์ดช่องทางติดต่อ (ลิงก์จากห้องแอดมิน) เลื่อนเข้ามาแทน ---- */
Object.assign(L.th,{cxSub:'ช่องทางติดต่อแอดมิน',cxBack:'ย้อนกลับ'});
Object.assign(L.lo,{cxSub:'ຊ່ອງທາງຕິດຕໍ່ແອດມິນ',cxBack:'ຍ້ອນກັບ'});
(()=>{
 const D=document.getElementById('dr'),trg=D&&D.querySelector('a[data-cx]');if(!trg)return;
 const ab=D.querySelector('h4 [data-i="about"]'),h4=ab&&ab.closest('h4');
 const grp=[];for(let n=h4&&h4.nextElementSibling;n&&n.tagName==='A';n=n.nextElementSibling){n.classList.add('cx-grp');grp.push(n)}
 if(!grp.length)return;
 const P=document.createElement('div');P.className='cx';P.hidden=true;
 P.innerHTML='<div class="cx-h"><button type="button" class="cx-back" aria-label="'+t('cxBack')+'"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg></button>'
  +'<span class="cx-t"><b data-i="contact">'+t('contact')+'</b><small data-i="cxSub">'+t('cxSub')+'</small></span></div><div class="cx-l"></div>';
 grp[grp.length-1].after(P);
 const LST=P.querySelector('.cx-l'),SK='<i class="cx-sk"></i>'.repeat(3);
 const ARW='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" style="color:var(--tx)"><path d="M7 17L17 7M9 7h8v8"/></svg>';
 const paint=ls=>{const U=/^https?:\/\/\S+$/i;
  const ok=(ls||[]).filter(x=>x&&typeof x.u==='string'&&U.test(x.u.trim()));
  LST.scrollTop=0;
  LST.innerHTML=ok.length?ok.map((x,i)=>{const u=x.u.trim();let hn='';try{hn=new URL(u).hostname.replace(/^www\./,'')}catch(e){}
   const n=String(x.l||'').trim()||hn||'Link',k=cfKind(n,u);
   return '<a class="cx-card" style="--i:'+i+';--c:'+CF_ICO[k][0]+'" href="'+escH(u)+'" target="_blank" rel="noopener noreferrer">'+cfIco(k)
    +'<span class="cx-n"><b>'+escH(n)+'</b><small>'+escH(hn)+'</small></span><span class="cx-go">'+ARW+'</span></a>'}).join(''):'<div class="cx-none">'+t('cfNoCh')+'</div>'};
 let tk=0,busy=0;
 const open=e=>{e&&e.preventDefault();if(busy||P.classList.contains('on'))return;busy=1;const my=++tk;
  grp.forEach(a=>a.classList.add('cx-gone'));
  let got=0,res=null;const lp=cfLinks();lp.then(v=>{got=1;res=v;if(my===tk&&P.classList.contains('on'))paint(v)});
  setTimeout(()=>{if(my!==tk){return}P.hidden=false;if(got)paint(res);else LST.innerHTML=SK;void P.offsetWidth;P.classList.add('on');busy=0},280)};
 const back=()=>{if(busy||!P.classList.contains('on'))return;busy=1;++tk;P.classList.add('leave');
  setTimeout(()=>{P.hidden=true;P.classList.remove('on','leave');grp.forEach(a=>a.classList.remove('cx-gone'));busy=0},320)};
 trg.addEventListener('click',open);
 P.querySelector('.cx-back').addEventListener('click',back);
 // ปิดเมนู -> รีเซ็ตกลับเป็นสภาพเดิมแบบไม่มีแอนิเมชัน (เปิดครั้งหน้าจะเห็นข้อความ 3 อันตามปกติ)
 new MutationObserver(()=>{if(D.classList.contains('on'))return;
  setTimeout(()=>{if(D.classList.contains('on')||(P.hidden&&!grp[0].classList.contains('cx-gone')))return;
   ++tk;busy=0;D.classList.add('nt');P.hidden=true;P.classList.remove('on','leave');grp.forEach(a=>a.classList.remove('cx-gone'));void D.offsetWidth;D.classList.remove('nt')},480)
 }).observe(D,{attributes:true,attributeFilter:['class']});
})();
window.showCodes=d=>{
 const box=document.querySelector('.cf-done');if(!box)return;
 const fin=box.querySelector('.cf-fin');
 box.querySelectorAll('.cf-codes,.cf-row,.cf-ct').forEach(n=>{if(fin&&n.contains(fin))box.appendChild(fin);n.remove()});
 const cs=d&&Array.isArray(d.codes)?d.codes:[];
 if(cs.length){
  const w=document.createElement('div');w.className='cf-codes';
  w.innerHTML='<small>'+t('cfCodes')+'</small><pre>'+escH(cs.join('\n'))+'</pre>';
  box.insertBefore(w,fin);
  const row=document.createElement('div');row.className='cf-row';
  box.insertBefore(row,fin);row.appendChild(fin);   // ปิด = ซ้าย, สำเนา = ขวา
  const b=document.createElement('button');b.type='button';b.className='cf-cp';
  b.innerHTML='<svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="11" height="11" rx="2.5"/><path d="M5 15V6a2 2 0 0 1 2-2h8"/></svg><span>'+t('cfCopy')+'</span>';
  row.appendChild(b);
  b.onclick=async()=>{const sp=b.querySelector('span');
   try{await navigator.clipboard.writeText(cs.join('\n'));sp.textContent=t('cfCopied');setTimeout(()=>{sp.textContent=t('cfCopy')},1800)}
   catch(x){const r=document.createRange();r.selectNodeContents(w.querySelector('pre'));const g=getSelection();g.removeAllRanges();g.addRange(r)}};
 }
 cfHelpBox(box);
};


/* ===== Tile -> card morph (CONTACT and TOPUP tiles) =====
   Top-up payment hooks (optional, set these from your own code when the QR provider is connected):
     window.createTopupQR(amount) -> Promise<{qr:string, ref:string}>   (qr = text to draw as the QR code)
     window.submitSlip({ref,amount,file}) -> Promise   (upload the slip image `file` + save a pending top-up for the admin to verify)
     window.watchTopup(ref, cb) -> unsubscribe fn      (call cb({status:'pending'|'approved'|'rejected', reason}) whenever the admin decides; e.g. Supabase realtime)
   Without the hooks the top-up card runs as a demo (sample QR, slip is not sent anywhere). */
(function(){
const TP={
 lo:{title:"ເຕີມເງິນ",pick:"ເລືອກຈຳນວນເງິນ",own:"ຫຼືພິມຈຳນວນທີ່ຕ້ອງການ",method:"ຊ່ອງທາງຊຳລະ",qrOnly:"ຊຳລະດ້ວຍ QR",qrSub:"ສະແກນຈ່າຍຜ່ານແອັບທະນາຄານ",make:"ສ້າງ QR",scan:"ສະແກນເພື່ອຊຳລະ",exp:"QR ໝົດອາຍຸໃນ",dead:"QR ໝົດອາຍຸ",check:"ກວດສອບການຊຳລະ",demo:"ໂຫມດຕົວຢ່າງ: ກົດກວດສອບເພື່ອຈຳລອງວ່າຊຳລະແລ້ວ",done:"ເຕີມເງິນສຳເລັດ",added:"ເພີ່ມເຂົ້າບັນຊີແລ້ວ",close:"ປິດ",min:"ຂັ້ນຕ່ຳ",max:"ສູງສຸດ",ok:"ຈຳນວນນີ້ໃຊ້ໄດ້",again:"ສ້າງ QR ໃໝ່",wait:"ຍັງບໍ່ພົບການຊຳລະ ລອງໃໝ່ອີກຄັ້ງ"},
 th:{title:"เติมเงิน",pick:"เลือกจำนวนเงิน",own:"หรือพิมพ์จำนวนที่ต้องการ",method:"ช่องทางชำระเงิน",qrOnly:"ชำระด้วย QR",qrSub:"สแกนจ่ายผ่านแอปธนาคาร",make:"สร้าง QR",scan:"สแกนเพื่อชำระ",exp:"QR หมดอายุใน",dead:"QR หมดอายุ",check:"ตรวจสอบการชำระเงิน",demo:"โหมดตัวอย่าง: กดตรวจสอบเพื่อจำลองว่าชำระแล้ว",done:"เติมเงินสำเร็จ",added:"เพิ่มเข้าบัญชีแล้ว",close:"ปิด",min:"ขั้นต่ำ",max:"สูงสุด",ok:"จำนวนนี้ใช้ได้",again:"สร้าง QR ใหม่",wait:"ยังไม่พบการชำระเงิน ลองใหม่อีกครั้ง"}};
Object.assign(TP.lo,{slip:"ສົ່ງສະລິບ",slipOk:"ຢືນຢັນສົ່ງສະລິບ",chg:"ປ່ຽນຮູບ",sending:"ກຳລັງສົ່ງ…",fail:"ສົ່ງບໍ່ສຳເລັດ ລອງໃໝ່ອີກຄັ້ງ",done:"ສົ່ງສະລິບແລ້ວ",added:"ລໍຖ້າກວດສອບ ເງິນຈະເຂົ້າບັນຊີຫຼັງຢືນຢັນ",demo:"ໂຫມດຕົວຢ່າງ: ສະລິບຈະຍັງບໍ່ຖືກສົ່ງໄປລະບົບຈິງ"});
Object.assign(TP.lo,{wTitle:"ລໍຖ້າແອດມິນຢືນຢັນ",wSub:"ປິດໜ້ານີ້ໄດ້ເລີຍ ລະບົບຈະອັບເດດໃຫ້ເມື່ອກວດສອບແລ້ວ",tl1:"ສົ່ງສະລິບແລ້ວ",tl2:"ແອດມິນກຳລັງກວດສອບ",tl3:"ເງິນເຂົ້າບັນຊີ",refl:"ເລກອ້າງອີງ",typ:"ປົກກະຕິໃຊ້ເວລາບໍ່ເທົ່າໃດນາທີ",ok4:"ເຕີມເງິນສຳເລັດ",ok4s:"ເງິນເຂົ້າບັນຊີແລ້ວ",no5:"ສະລິບບໍ່ຜ່ານ",whyDef:"ກະລຸນາກວດຍອດເງິນ ແລ້ວສົ່ງສະລິບໃໝ່",retry:"ສົ່ງສະລິບໃໝ່",simOk:"ຈຳລອງ: ອະນຸມັດ",simNo:"ຈຳລອງ: ປະຕິເສດ",bPend:"ລໍຖ້າກວດສອບ",bOk:"ສຳເລັດ",bNo:"ບໍ່ຜ່ານ"});
Object.assign(TP.th,{wTitle:"รอแอดมินยืนยัน",wSub:"ปิดหน้านี้ได้เลย ระบบจะอัปเดตให้เมื่อตรวจสอบแล้ว",tl1:"ส่งสลิปแล้ว",tl2:"แอดมินกำลังตรวจสอบ",tl3:"เงินเข้าบัญชี",refl:"เลขอ้างอิง",typ:"ปกติใช้เวลาไม่กี่นาที",ok4:"เติมเงินสำเร็จ",ok4s:"เงินเข้าบัญชีแล้ว",no5:"สลิปไม่ผ่าน",whyDef:"กรุณาตรวจยอดเงินแล้วส่งสลิปใหม่",retry:"ส่งสลิปใหม่",simOk:"จำลอง: อนุมัติ",simNo:"จำลอง: ปฏิเสธ",bPend:"รอตรวจสอบ",bOk:"สำเร็จ",bNo:"ไม่ผ่าน"});
Object.assign(TP.th,{slip:"ส่งสลิป",slipOk:"ยืนยันส่งสลิป",chg:"เปลี่ยนรูป",sending:"กำลังส่ง…",fail:"ส่งไม่สำเร็จ ลองใหม่อีกครั้ง",done:"ส่งสลิปแล้ว",added:"รอตรวจสอบ เงินจะเข้าบัญชีหลังยืนยัน",demo:"โหมดตัวอย่าง: สลิปยังไม่ถูกส่งไปที่ระบบจริง"});
Object.assign(TP.th,{pillTap:"แตะเพื่อดูสถานะ",testLbl:"ทดสอบ · จำลองแอดมิน"});
Object.assign(TP.lo,{pillTap:"ແຕະເພື່ອເບິ່ງສະຖານະ",testLbl:"ທົດສອບ · ຈຳລອງແອດມິນ"});
const tp=k=>(TP[lang]||TP.lo)[k];
const PRESETS=[10000,20000,50000,100000,200000,500000],MIN=10000,MAX=5000000,SECS=600;
const fmt=n=>n.toLocaleString('en-US');
const RM=matchMedia('(prefers-reduced-motion:reduce)').matches,D=x=>RM?1:x;
const EASE='cubic-bezier(.22,1,.36,1)',EASE_IO='cubic-bezier(.65,0,.35,1)';
const XI='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>';
let ov,card,body,tile,ghost,busy=false,openF=false,prevFocus,cleanup=null;
let pend=null,liveShow=null; // pend = {ref,amount,thumb,status:'pending'|'approved'|'rejected',reason,unsub}
const hd=title=>'<div class="cm-hd cm-it"><h2>'+title+'</h2></div>';
const mk=()=>{
 ov=document.createElement('div');ov.className='cm-ov';ov.addEventListener('touchmove',e=>e.preventDefault(),{passive:false});
 card=document.createElement('div');card.className='cm-card';card.setAttribute('role','dialog');card.setAttribute('aria-modal','true');
 card.innerHTML='<svg class="bg" aria-hidden="true"><use href="#tbg"/></svg><div class="cm-body"></div>';
 body=card.querySelector('.cm-body');
 document.body.append(ov,card);card.style.display='none';
 ov.onclick=close;
 card.addEventListener('click',e=>{if(e.target.closest('.cm-x'))close()});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&openF)close()});
};
/* ---- contact ---- */
/* ---- ประวัติเติมเงิน (การ์ดที่เปิดจากปุ่ม CONTACT): อ่านจาก rpc my_topup_history() ของตัวเองเท่านั้น ---- */
const HS={
 th:{total:'ยอดที่เติมรวม',cnt:'เติมสำเร็จ',times:'ครั้ง',last:'เติมล่าสุด',big:'สูงสุดต่อครั้ง',pend:'รอตรวจสอบ',rej:'ไม่ผ่าน',ok:'สำเร็จ',adm:'แอดมินเติมให้',ref:'อ้างอิง',none:'ยังไม่มีรายการเติมเงิน',err:'โหลดประวัติไม่สำเร็จ ลองใหม่อีกครั้ง',login:'เข้าสู่ระบบเพื่อดูประวัติ',list:'รายการทั้งหมด',retry:'ลองใหม่',nolast:'-'},
 lo:{total:'ຍອດເຕີມລວມ',cnt:'ເຕີມສຳເລັດ',times:'ຄັ້ງ',last:'ເຕີມຄັ້ງລ່າສຸດ',big:'ສູງສຸດຕໍ່ຄັ້ງ',pend:'ລໍຖ້າກວດສອບ',rej:'ບໍ່ຜ່ານ',ok:'ສຳເລັດ',adm:'ແອດມິນເຕີມໃຫ້',ref:'ອ້າງອີງ',none:'ຍັງບໍ່ມີລາຍການເຕີມເງິນ',err:'ໂຫຼດປະຫວັດບໍ່ສຳເລັດ ລອງໃໝ່ອີກຄັ້ງ',login:'ເຂົ້າສູ່ລະບົບເພື່ອເບິ່ງປະຫວັດ',list:'ລາຍການທັງໝົດ',retry:'ລອງໃໝ່',nolast:'-'}
};
const hs=k=>(HS[lang]||HS.lo)[k];
const p2=n=>String(n).padStart(2,'0');
const hDate=ms=>{const d=new Date(+ms);return p2(d.getDate())+'/'+p2(d.getMonth()+1)+'/'+d.getFullYear()};
const hTime=ms=>{const d=new Date(+ms);return p2(d.getHours())+':'+p2(d.getMinutes())};
const hEsc=x=>String(x==null?'':x).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function buildContact(){
 return hd(t('tHistory2'))+'<div class="hs-box cm-it" id="hsBox"><div class="hs-msg">…</div></div>';
}
function initHist(){
 const box=document.getElementById('hsBox');if(!box)return;
 const msg=(m,retry)=>{box.innerHTML='<div class="hs-msg">'+hEsc(m)+(retry?'<br><button type="button" class="hs-rt">'+hs('retry')+'</button>':'')+'</div>';
  const b=box.querySelector('.hs-rt');if(b)b.onclick=load};
 const paint=d=>{const sm=(d&&d.sum)||{},ls=(d&&d.list)||[];
  const cell=(l,v,c)=>'<div class="hs-c'+(c?' '+c:'')+'"><small>'+l+'</small><b>'+v+'</b></div>';
  let h='<div class="hs-sum">'
   +'<div class="hs-c w"><small><i class="hs-dot o"></i>'+hs('total')+'</small><b>'+fmt(+sm.total||0)+' ₭</b></div>'
   +cell(hs('cnt'),(+sm.ok||0)+' '+hs('times'))
   +cell(hs('last'),sm.last?hDate(sm.last):hs('nolast'))
   +'</div>';
  if((+sm.pending||0)>0||(+sm.rejected||0)>0)h+='<div class="hs-fl">'+((+sm.pending||0)>0?'<span class="hs-bd p">'+hs('pend')+' '+sm.pending+'</span>':'')+((+sm.rejected||0)>0?'<span class="hs-bd n">'+hs('rej')+' '+sm.rejected+'</span>':'')+'</div>';
  if(!ls.length){box.innerHTML=h+'<div class="hs-msg">'+hs('none')+'</div>';return}
  h+='<div class="hs-lbl">'+hs('list')+'</div><div class="hs-list">'+ls.map(x=>{
   const st=x.status==='approved'?'o':x.status==='rejected'?'n':'p',nm=st==='o'?hs('ok'):st==='n'?hs('rej'):hs('pend');
   const sub=x.src==='adm'?hs('adm')+(x.note?' · '+hEsc(x.note):''):hs('ref')+' '+hEsc(x.note);
   return '<div class="hs-r"><i class="hs-dot '+st+'"></i><div class="hs-m"><b class="'+st+'">'+(st==='o'?'+':'')+fmt(+x.amount||0)+' ₭</b>'
    +'<div class="hs-d">'+hDate(x.at)+' · '+hTime(x.at)+'</div><div class="hs-s">'+sub+(x.reason?'<br>'+hEsc(x.reason):'')+'</div></div>'
    +'<span class="hs-bd '+st+'">'+nm+'</span></div>'}).join('')+'</div>';
  box.innerHTML=h};
 const load=async()=>{
  if(!window._user||!window._sb){msg(hs('login'));return}
  try{const {data,error}=await window._sb.rpc('my_topup_history');if(error)throw error;paint(data)}catch(e){msg(hs('err'),true)}};
 return load();
}
/* ---- ประวัติสั่งซื้อ (การ์ดที่เปิดจากปุ่ม HISTORY): อ่านจาก rpc my_orders() ของตัวเองเท่านั้น (สร้างด้วย orders.sql) ---- */
const OS={
 th:{total:'ยอดซื้อรวม',cnt:'สั่งซื้อแล้ว',times:'ครั้ง',last:'ซื้อล่าสุด',list:'รายการทั้งหมด',none:'ยังไม่มีรายการสั่งซื้อ',err:'โหลดประวัติไม่สำเร็จ ลองใหม่อีกครั้ง',login:'เข้าสู่ระบบเพื่อดูประวัติ',retry:'ลองใหม่',item:'สินค้า'},
 lo:{total:'ຍອດຊື້ລວມ',cnt:'ສັ່ງຊື້ແລ້ວ',times:'ຄັ້ງ',last:'ຊື້ຄັ້ງລ່າສຸດ',list:'ລາຍການທັງໝົດ',none:'ຍັງບໍ່ມີລາຍການສັ່ງຊື້',err:'ໂຫຼດປະຫວັດບໍ່ສຳເລັດ ລອງໃໝ່ອີກຄັ້ງ',login:'ເຂົ້າສູ່ລະບົບເພື່ອເບິ່ງປະຫວັດ',retry:'ລອງໃໝ່',item:'ສິນຄ້າ'}
};
const os=k=>(OS[lang]||OS.lo)[k];
function buildOrders(){
 return hd(t('tHistory'))+'<div class="hs-box cm-it" id="osBox"><div class="hs-msg">…</div></div>';
}
function initOrders(){
 const box=document.getElementById('osBox');if(!box)return;
 const msg=(m,retry)=>{box.innerHTML='<div class="hs-msg">'+hEsc(m)+(retry?'<br><button type="button" class="hs-rt">'+os('retry')+'</button>':'')+'</div>';
  const b=box.querySelector('.hs-rt');if(b)b.onclick=load};
 const paint=d=>{const sm=(d&&d.sum)||{},ls=(d&&d.list)||[];
  const cell=(l,v)=>'<div class="hs-c"><small>'+l+'</small><b>'+v+'</b></div>';
  let h='<div class="hs-sum"><div class="hs-c w"><small><i class="hs-dot o"></i>'+os('total')+'</small><b>'+fmt(+sm.total||0)+' ₭</b></div>'
   +cell(os('cnt'),(+sm.count||0)+' '+os('times'))+cell(os('last'),sm.last?hDate(sm.last):'-')+'</div>';
  if(!ls.length){box.innerHTML=h+'<div class="hs-msg">'+os('none')+'</div>';return}
  h+='<div class="hs-lbl">'+os('list')+'</div><div class="hs-list">'+ls.map(x=>
   '<div class="hs-r"><i class="hs-dot o"></i><div class="hs-m"><b>'+hEsc(x.name||os('item'))+'</b><div class="hs-d">'+hDate(x.at)+' · '+hTime(x.at)+'</div></div>'
   +'<span class="hs-am">-'+fmt(+x.amount||0)+' ₭</span></div>').join('')+'</div>';
  box.innerHTML=h};
 const load=async()=>{
  if(!window._user||!window._sb){msg(os('login'));return}
  try{const {data,error}=await window._sb.rpc('my_orders');
   if(error){if(error.code==='PGRST202'||/my_orders/.test(error.message||'')){paint(null);return}throw error}
   paint(data)}catch(e){msg(os('err'),true)}};
 return load();
}
/* ---- pending top-up: badge on the home tile + status updates ---- */
const setBadge=()=>{const t=document.querySelector('[data-cm="topup"]');if(!t)return;let b=t.querySelector('.tp-badge');
 if(!pend){b&&b.remove();return}
 if(!b){b=document.createElement('span');b.className='tp-badge';t.appendChild(b)}
 b.dataset.st=pend.status;b.textContent=tp(pend.status==='pending'?'bPend':pend.status==='approved'?'bOk':'bNo')};
const detach=()=>{if(pend){pend.unsub&&pend.unsub();pend.thumb&&URL.revokeObjectURL(pend.thumb);pend=null}setBadge();pill()};
const clearPend=()=>{store2(null);detach()};
const onStatus=(st,fromStore)=>{if(!pend)return;const was=pend.status;pend.status=st.status;pend.reason=st.reason||'';
 if(!fromStore)save();setBadge();pill();liveShow&&liveShow();if(was==='pending'&&st.status!=='pending')alertDone()};
/* ---- top-up ---- */
function buildTopup(){
 return hd(tp('title'))+'<div class="tp-sheet cm-it" data-s="1">'
 +'<div class="tp-s tp-s1"><div class="tp-lbl">'+tp('pick')+'</div><div class="tp-chips">'+PRESETS.map(v=>'<button class="tp-chip" data-v="'+v+'" aria-pressed="false">'+fmt(v)+'</button>').join('')+'</div>'
 +'<div class="tp-lbl">'+tp('own')+'</div><label class="tp-amt"><input inputmode="numeric" autocomplete="off" placeholder="0"><span>₭</span></label><div class="tp-hint" aria-live="polite"></div>'
 +'<div class="tp-lbl">'+tp('method')+'</div><div class="tp-pay"><span class="qi"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3h-3zM20 14v1M14 20h1M18 20h3v-2"/></svg></span><span><b>'+tp('qrOnly')+'</b><small>'+tp('qrSub')+'</small></span><svg class="ck" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5 9-10"/></svg></div>'
 +'<button class="tp-cta tp-go" disabled></button></div>'
 +'<div class="tp-s tp-s2"><button class="tp-bk" aria-label="back">‹</button><div class="tp-qrbox"><div class="tp-qrf"><div class="q"></div><div class="dd">'+tp('dead')+'</div></div><div class="tp-big"></div><div class="tp-tm">'+tp('exp')+' <b class="tm">10:00</b></div></div><div class="tp-slip" hidden><img alt=""><span class="sn"></span><button class="tp-chg" type="button">'+tp('chg')+'</button></div><input class="tp-file" type="file" accept="image/*" hidden><button class="tp-cta tp-chk">'+tp('slip')+'</button><div class="tp-demo"></div></div>'
 +'<div class="tp-s tp-s3"><div class="tp-wait"><div class="tp-orb"><i></i><i></i><svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg></div><h3>'+tp('wTitle')+'</h3><div class="tp-big w-amt"></div><p>'+tp('wSub')+'</p></div>'
 +'<ol class="tp-tl"><li class="done"><i></i><span>'+tp('tl1')+'</span></li><li class="act"><i></i><span>'+tp('tl2')+'<small>'+tp('typ')+'</small></span></li><li><i></i><span>'+tp('tl3')+'</span></li></ol>'
 +'<div class="tp-slip tp-ref"><img alt=""><span class="sn"><small>'+tp('refl')+'</small><b class="w-ref"></b></span></div>'
 +'<button class="tp-cta tp-close">'+tp('close')+'</button><div class="tp-sim"></div></div>'
 +'<div class="tp-s tp-s4"><div class="tp-ok"><div class="c"><svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5 9-10"/></svg></div><h3>'+tp('ok4')+'</h3><div class="tp-big r-amt"></div><p>'+tp('ok4s')+'</p></div><button class="tp-cta tp-close">'+tp('close')+'</button></div>'
 +'<div class="tp-s tp-s5"><div class="tp-ok bad"><div class="c"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg></div><h3>'+tp('no5')+'</h3><p class="r-why"></p></div><button class="tp-cta tp-retry">'+tp('retry')+'</button><button class="tp-cta ghost tp-close">'+tp('close')+'</button></div>'
 +'</div>';
}
function initTopup(){
 const q=s=>body.querySelector(s),sh=q('.tp-sheet'),inp=q('.tp-amt input'),go=q('.tp-go'),hint=q('.tp-hint'),chk=q('.tp-chk');
 let amount=0,ref='',timer=0,left=0,slipF=null,slipURL='';
 const ok=n=>n>=MIN&&n<=MAX;
 const setGo=()=>{go.textContent=amount?tp('make')+' · '+fmt(amount)+' ₭':tp('make')};
 const setHint=()=>{hint.classList.remove('err');
  if(!inp.value){hint.textContent=tp('min')+' '+fmt(MIN)+' ₭ · '+tp('max')+' '+fmt(MAX)+' ₭';return}
  if(amount<MIN){hint.textContent=tp('min')+' '+fmt(MIN)+' ₭';hint.classList.add('err')}
  else if(amount>MAX){hint.textContent=tp('max')+' '+fmt(MAX)+' ₭';hint.classList.add('err')}
  else hint.textContent=tp('ok')};
 const setAmount=(n,chip)=>{amount=n;if(chip)inp.value=n?fmt(n):'';
  body.querySelectorAll('.tp-chip').forEach(c=>c.setAttribute('aria-pressed',+c.dataset.v===n));
  go.disabled=!ok(n);setGo();setHint()};
 let stepping=false;
 const reflow=fn=>{ // run fn (which changes the content) and animate the card to its new height
  const h0=card.offsetHeight,t0=card.getBoundingClientRect().top;
  fn();
  const h1=card.offsetHeight,t1=Math.max(12,Math.min(t0,innerHeight-h1-12));
  card.style.top=t1+'px';
  if(h0!==h1||t0!==t1)card.animate([{height:h0+'px',top:t0+'px'},{height:h1+'px',top:t1+'px'}],{duration:D(380),easing:EASE});
 };
 const step=async s=>{ // old content blurs out, card resizes, new content blurs in
  if(stepping)return;stepping=true;
  const out=sh.animate([{opacity:1,filter:'blur(0px)',transform:'none'},{opacity:0,filter:'blur(10px)',transform:'scale(.97)'}],{duration:D(170),easing:'ease-in',fill:'forwards'});
  try{await out.finished}catch(e){}
  reflow(()=>{sh.dataset.s=s});
  out.cancel();
  sh.animate([{opacity:0,filter:'blur(12px)',transform:'scale(.97)'},{opacity:1,filter:'blur(0px)',transform:'none'}],{duration:D(420),easing:EASE,fill:'backwards'});
  stepping=false;
 };
 const tick=()=>{const m=String(Math.floor(left/60)).padStart(2,'0'),s=String(left%60).padStart(2,'0');q('.tm').textContent=m+':'+s;
  if(left<=0){clearInterval(timer);q('.tp-qrf').classList.add('dead');chk.textContent=tp('again');chk.classList.add('ghost');chk.dataset.again=1}left--};
 const drawGen=txt=>{const b=q('.q');b.innerHTML='';try{new QRCode(b,{text:txt,width:200,height:200,colorDark:'#1d1013',colorLight:'#ffffff',correctLevel:QRCode.CorrectLevel.M})}catch(e){b.textContent=ref}};
 // QR รับโอนเงินที่แอดมินอัปโหลดไว้ในห้องแอดมิน > ตั้งค่า (site_settings.qr) — ถ้าไม่มีให้ใช้ QR ตัวอย่างเดิม
 const getQRImg=()=>new Promise(res=>{const s=window._sb;if(!s){res('');return}const tm=setTimeout(()=>res(''),2500);
  s.rpc('get_site_settings').then(({data})=>{clearTimeout(tm);const u=data&&typeof data.qr==='string'?data.qr:'';res(/^https:\/\/\S+$/i.test(u)?u:'')}).catch(()=>{clearTimeout(tm);res('')})});
 const draw=(txt,img)=>{if(!img){drawGen(txt);return}
  const b=q('.q');b.innerHTML='';const im=new Image();im.alt='QR';im.onerror=()=>drawGen(txt);im.src=img;b.appendChild(im)};
 const makeQR=async()=>{
  step(2);q('.tp-qrf').classList.remove('dead');chk.dataset.again='';chk.classList.remove('ghost');chk.textContent=tp('slip');chk.disabled=false;slipF=null;q('.tp-slip').hidden=true;
  q('.tp-big').textContent=fmt(amount)+' ₭';q('.tp-demo').textContent=window.submitSlip?'':tp('demo');
  ref='TP'+Date.now().toString(36).toUpperCase();let txt='EXAMPLE-TOPUP|'+ref+'|'+amount;
  if(window.createTopupQR){try{const r=await window.createTopupQR(amount);txt=r.qr;ref=r.ref}catch(e){}}
  let qimg='';if(!window.createTopupQR)qimg=await getQRImg();draw(txt,qimg);clearInterval(timer);left=SECS;tick();timer=setInterval(tick,1000);
 };
 cleanup=()=>{clearInterval(timer);liveShow=null;if(pend&&pend.status!=='pending')clearPend();else if(slipURL&&!(pend&&pend.thumb===slipURL))URL.revokeObjectURL(slipURL)};
 q('.tp-chips').addEventListener('click',e=>{const c=e.target.closest('.tp-chip');if(c)setAmount(+c.dataset.v,true)});
 inp.addEventListener('input',()=>{const d=inp.value.replace(/\D/g,'').slice(0,8),n=d?+d:0;inp.value=d?fmt(n):'';setAmount(n,false)});
 inp.addEventListener('focus',()=>{ // keep the card above the on-screen keyboard
  const t0=card.getBoundingClientRect().top,t1=12;if(t0>t1){card.style.top=t1+'px';card.animate([{top:t0+'px'},{top:t1+'px'}],{duration:D(280),easing:EASE})}});
 go.onclick=()=>ok(amount)&&makeQR();
 q('.tp-bk').onclick=()=>{clearInterval(timer);step(1)};
 const file=q('.tp-file');
 file.onchange=()=>{const f=file.files&&file.files[0];if(!f)return;
  slipF=f;slipURL&&URL.revokeObjectURL(slipURL);slipURL=URL.createObjectURL(f);
  reflow(()=>{const s=q('.tp-slip');s.hidden=false;s.querySelector('img').src=slipURL;s.querySelector('.sn').textContent=f.name;chk.textContent=tp('slipOk')});
  file.value='';};
 q('.tp-chg').onclick=()=>file.click();
 chk.onclick=async()=>{
  if(chk.dataset.again){makeQR();return}
  if(!slipF){file.click();return}   // first tap: choose the slip image
  chk.disabled=true;chk.classList.add('busy');chk.textContent=tp('sending');
  try{if(window.submitSlip)await window.submitSlip({ref,amount,file:slipF});else await new Promise(r=>setTimeout(r,900))}
  catch(e){chk.disabled=false;chk.classList.remove('busy');chk.textContent=tp('slipOk');q('.tp-demo').textContent=tp('fail');return}
  clearInterval(timer);
  pend={ref,amount,thumb:slipURL,status:'pending',reason:'',t:Date.now()};
  try{window.Notification&&Notification.permission==='default'&&Notification.requestPermission()}catch(e){}
  save();mini(slipURL).then(m=>{if(pend&&pend.ref===ref){pend.mini=m;save()}});
  if(window.watchTopup)pend.unsub=window.watchTopup(ref,onStatus);
  setBadge();fill();step(3);
 };
 body.querySelectorAll('.tp-close').forEach(b=>b.onclick=()=>close());
 q('.tp-retry').onclick=()=>{const n=pend?pend.amount:amount;clearPend();amount=n;slipURL='';makeQR()};
 const fill=()=>{if(!pend)return;
  q('.w-amt').textContent=fmt(pend.amount)+' ₭';q('.w-ref').textContent=pend.ref;{const im=q('.tp-ref img');if(pend.thumb)im.src=pend.thumb;else im.removeAttribute('src')}
  q('.r-amt').textContent='+'+fmt(pend.amount)+' ₭';q('.r-why').textContent=pend.reason||tp('whyDef')};
 const sNow=()=>!pend||pend.status==='pending'?3:pend.status==='approved'?4:5;
 liveShow=()=>{fill();step(sNow())};
 const sim=q('.tp-sim');
 if(!window.watchTopup){ // demo only: lets you preview what the admin decision looks like
  sim.innerHTML='<button type="button" data-d="approved">'+tp('simOk')+'</button><button type="button" data-d="rejected">'+tp('simNo')+'</button>';
  sim.onclick=e=>{const d=e.target.dataset.d;if(d)onStatus({status:d,reason:d==='rejected'?'':''})}}
 setAmount(0,true);
 if(pend){amount=pend.amount;fill();sh.dataset.s=sNow()} // reopened while a top-up is waiting / decided
}

/* ===== Pending top-up that survives closing the card / reloading, with a status pill + notification =====
   - saved in localStorage per member (key dk_topup_<userId>) -> still there after closing the card or the page
   - floating pill shows "waiting / approved / rejected"; tap it to reopen the top-up card
   - when the admin decides: pill pings, phone vibrates, browser notification + tab title (if the tab is in background)
   - works across tabs (storage event), so you can test with 2 tabs
   - no window.watchTopup (no backend yet) => a dashed TEST panel appears under the pill to play the admin
   - with a real backend: window.watchTopup(ref, cb) should call cb right away with the CURRENT status, then on every change */
const PK=()=>window._user?'dk_topup_'+window._user.id:null;
const store2=v=>{const k=PK();if(!k)return;try{v?localStorage.setItem(k,JSON.stringify(v)):localStorage.removeItem(k)}catch(e){}};
const save=()=>{if(pend)store2({ref:pend.ref,amount:pend.amount,status:pend.status,reason:pend.reason||'',thumb:pend.mini||'',t:pend.t||Date.now()})};
const mini=url=>new Promise(r=>{const i=new Image();i.onload=()=>{try{const s=Math.min(1,160/Math.max(i.width,i.height)),c=document.createElement('canvas');c.width=Math.max(1,i.width*s|0);c.height=Math.max(1,i.height*s|0);c.getContext('2d').drawImage(i,0,0,c.width,c.height);r(c.toDataURL('image/jpeg',.6))}catch(e){r('')}};i.onerror=()=>r('');i.src=url});
let pl=null,sm=null,title0='',popT=0,shownSt='',px=0,py=0;
const BS=54,POSK='dk_topup_pos';
const place=(x,y,keep)=>{const w=innerWidth,h=innerHeight;px=Math.max(8,Math.min(x,w-BS-8));py=Math.max(8,Math.min(y,h-BS-8));
 pl.style.left=px+'px';pl.style.top=py+'px';pl.classList.toggle('l',px+BS/2>w/2);
 if(keep)try{localStorage.setItem(POSK,JSON.stringify({x:px/w,y:py/h}))}catch(e){}};
const popLabel=()=>{pl.classList.remove('open');void pl.offsetWidth;pl.classList.add('open');clearTimeout(popT);popT=setTimeout(()=>pl.classList.remove('open'),6000)};
const reopen=()=>{const el=document.querySelector('[data-cm="topup"]');if(!el||busy||openF)return;el.scrollIntoView({block:'center',behavior:'instant'});setTimeout(()=>open(el,'topup'),30)};
const ensurePill=()=>{if(pl)return;
 pl=document.createElement('div');pl.id='tpPill';pl.hidden=true;
 pl.innerHTML='<button class="tpp-b" type="button" aria-label="top-up status"><i class="tpp-ic"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"><path class="ok" d="M5 12.5l4.5 4.5L19 7" pathLength="24"/><path class="no" d="M7 7l10 10M17 7L7 17" pathLength="24"/></svg></i></button><span class="tpp-amt"></span>';
 document.body.appendChild(pl);
 sm=document.createElement('div');sm.id='tpSim';sm.hidden=true;
 sm.innerHTML='<small></small><button type="button" data-d="approved"></button><button type="button" data-d="rejected"></button>';
 document.body.appendChild(sm);
 sm.onclick=e=>{const d=e.target.dataset&&e.target.dataset.d;if(d)onStatus({status:d,reason:''})};
 let pos=null;try{pos=JSON.parse(localStorage.getItem(POSK)||'null')}catch(e){}
 if(pos&&isFinite(pos.x)&&isFinite(pos.y))place(pos.x*innerWidth,pos.y*innerHeight);else place(innerWidth-BS-12,innerHeight-170);
 const b=pl.querySelector('.tpp-b');let d=null;
 b.addEventListener('pointerdown',e=>{d={id:e.pointerId,sx:e.clientX,sy:e.clientY,ox:px,oy:py,m:false};try{b.setPointerCapture(e.pointerId)}catch(x){}});
 b.addEventListener('pointermove',e=>{if(!d||e.pointerId!==d.id)return;const dx=e.clientX-d.sx,dy=e.clientY-d.sy;
  if(!d.m&&Math.hypot(dx,dy)<6)return;d.m=true;pl.classList.add('drag');place(d.ox+dx,d.oy+dy)});
 const end=e=>{if(!d||e.pointerId!==d.id)return;const m=d.m;d=null;pl.classList.remove('drag');
  if(m)place(px,py,true);else if(e.type==='pointerup')reopen()};
 b.addEventListener('pointerup',end);b.addEventListener('pointercancel',end);
 b.addEventListener('click',e=>{if(e.detail===0)reopen()}); // keyboard
 addEventListener('resize',()=>place(px,py))};
const pill=()=>{if(!pend&&!pl)return;ensurePill();const on=!!pend&&!busy&&!openF;pl.hidden=!on;
 if(!pend){shownSt='';sm.hidden=true;return}
 const p=pend.status;pl.dataset.st=p;
 pl.querySelector('.tpp-amt').textContent=p==='approved'?'+'+fmt(pend.amount)+' ₭':p==='rejected'?tp('no5'):'';
 sm.hidden=!(on&&p==='pending'&&!window.watchTopup);
 sm.querySelector('small').textContent=tp('testLbl');const bs=sm.querySelectorAll('button');bs[0].textContent=tp('simOk');bs[1].textContent=tp('simNo');
 if(!on)return;
 if(shownSt!==p){shownSt=p;if(p==='pending')pl.classList.remove('open');else popLabel()}};
const alertDone=()=>{
 try{navigator.vibrate&&navigator.vibrate([120,60,120])}catch(e){}
 const ok=pend.status==='approved',ti=tp(ok?'ok4':'no5'),bd=ok?'+'+fmt(pend.amount)+' ₭':(pend.reason||tp('whyDef'));
 if(document.hidden){
  try{window.Notification&&Notification.permission==='granted'&&new Notification(ti,{body:bd})}catch(e){}
  if(!title0)title0=document.title;document.title=(ok?'✅ ':'❌ ')+ti}};
document.addEventListener('visibilitychange',()=>{if(!document.hidden&&title0){document.title=title0;title0=''}});
let uid=null;
const load=()=>{const k=PK();if(!k)return;let s=null;try{s=JSON.parse(localStorage.getItem(k)||'null')}catch(e){}
 if(!s||!s.ref)return;
 pend={ref:s.ref,amount:+s.amount||0,thumb:s.thumb||'',mini:s.thumb||'',status:s.status||'pending',reason:s.reason||'',t:s.t};
 if(window.watchTopup&&pend.status==='pending')pend.unsub=window.watchTopup(pend.ref,onStatus);
 setBadge();pill()};
const sync=()=>{const id=window._user?window._user.id:null;if(id===uid)return;uid=id;detach();if(id)load()};
addEventListener('storage',e=>{if(!e.key||e.key!==PK())return;
 if(!e.newValue){detach();return}
 let s;try{s=JSON.parse(e.newValue)}catch(x){return}if(!s||!s.ref)return;
 if(!pend||pend.ref!==s.ref){detach();load();return}
 if(s.status!==pend.status)onStatus({status:s.status,reason:s.reason},true)});
{const o=window._authUI;window._authUI=function(){const r=o&&o.apply(this,arguments);sync();setBadge();pill();return r};sync()}

/* ---- ซื้อสินค้า (การ์ดที่เปิดจากปุ่ม SHOPS): แท็บเลื่อนได้ + ไอคอนค้นหาที่ขยายเป็นช่องพิมพ์ ---- */
const SP={
 th:{ttl:'ซื้อสินค้า',ph:'พิมพ์ชื่อสินค้า...',all:'ทั้งหมด',best:'ขายดี',many:'ของเยอะ',nw:'เติมใหม่ๆ',low:'กำลังหมด',cheap:'ราคาถูก',pricey:'ราคาแพง',mt:'ปิดปรับปรุง',up:'ปิดอัพเดต',
  n:'รายการ',none:'ไม่พบสินค้า',noneT:'ยังไม่มีสินค้าในหมวดนี้',mtB:'ปิดปรับปรุง',upB:'ปิดอัพเดต',srch:'ค้นหา',clr:'ล้าง'},
 lo:{ttl:'ຊື້ສິນຄ້າ',ph:'ພິມຊື່ສິນຄ້າ...',all:'ທັງໝົດ',best:'ຂາຍດີ',many:'ຂອງຫຼາຍ',nw:'ເຕີມໃໝ່ໆ',low:'ກຳລັງຈະໝົດ',cheap:'ລາຄາຖືກ',pricey:'ລາຄາແພງ',mt:'ປິດປັບປຸງ',up:'ປິດອັບເດດ',
  n:'ລາຍການ',none:'ບໍ່ພົບສິນຄ້າ',noneT:'ຍັງບໍ່ມີສິນຄ້າໃນໝວດນີ້',mtB:'ປິດປັບປຸງ',upB:'ປິດອັບເດດ',srch:'ຄົ້ນຫາ',clr:'ລ້າງ'}};
const sp=k=>(SP[lang]||SP.lo)[k];
const SPT=['all','best','many','nw','low','cheap','pricey','mt','up'];
const spMin=r=>{const o=r[7]||[];return o.length?Math.min(...o.map(x=>x.pr)):0};
const spClosed=r=>/maint|repair|ปรับปรุง|ปรับปุง/.test(r[8]||'')?'mt':/updat|upgrade|อัพเดต|อัปเดต/.test(r[8]||'')?'up':'';
function spFilter(k){
 const rows=(F||[]).map((r,i)=>({r,i})),open=x=>!spClosed(x.r);
 switch(k){
  case 'best':return rows.filter(x=>open(x)&&x.r[5]>0).sort((a,b)=>b.r[5]-a.r[5]);
  case 'many':return rows.filter(x=>open(x)&&x.r[3]>=30).sort((a,b)=>b.r[3]-a.r[3]);
  case 'nw':return rows.filter(open).sort((a,b)=>(b.r[9]-a.r[9])||(b.i-a.i));
  case 'low':return rows.filter(x=>open(x)&&x.r[3]>0&&x.r[3]<10).sort((a,b)=>a.r[3]-b.r[3]);
  case 'cheap':return rows.filter(open).sort((a,b)=>spMin(a.r)-spMin(b.r));
  case 'pricey':return rows.filter(open).sort((a,b)=>spMin(b.r)-spMin(a.r));
  case 'mt':return rows.filter(x=>spClosed(x.r)==='mt');
  case 'up':return rows.filter(x=>spClosed(x.r)==='up');
  default:return rows}}
function buildShop(){
 const ic='<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>';
 const x='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>';
 return '<div class="cm-hd cm-it"><h2>'+sp('ttl')+'</h2><button class="cm-x" type="button" aria-label="close">'+x+'</button></div>'
 +'<div class="hs-box sp-box">'
 +'<div class="sp-bar cm-it" id="spBar"><div class="sp-s"><button type="button" class="sp-si" id="spSi" aria-label="'+sp('srch')+'">'+ic+'</button><input id="spIn" type="search" enterkeyhint="search" autocomplete="off" placeholder="'+sp('ph')+'"><button type="button" class="sp-sx" id="spSx" aria-label="'+sp('clr')+'">'+x+'</button></div>'
 +'<div class="sp-tabs" id="spTabs"><div class="sp-tr" id="spTr"><i class="sp-ind" id="spInd"></i>'+SPT.map((k,i)=>'<button type="button" class="sp-t'+(i?'':' on')+'" data-k="'+k+'">'+sp(k)+'</button>').join('')+'</div></div></div>'
 +'<div class="sp-cnt cm-it" id="spCnt"></div><div class="sp-list cm-it" id="spList"></div></div>'}
function initShop(){
 const bar=document.getElementById('spBar'),inp=document.getElementById('spIn'),tabs=document.getElementById('spTabs'),tr=document.getElementById('spTr'),ind=document.getElementById('spInd'),list=document.getElementById('spList'),cnt=document.getElementById('spCnt');
 if(!bar||!list)return;
 let cur='all',q='';
 const moveInd=()=>{const b=tr.querySelector('.sp-t.on');if(!b)return;ind.style.width=b.offsetWidth+'px';ind.style.transform='translateX('+b.offsetLeft+'px)'};
 const tick=()=>{if(!list.isConnected)return clearInterval(w);if(CAT.state!=='load'){clearInterval(w);paint()}};
 const norm=s=>String(s||'').toLowerCase().normalize('NFC').trim();
 const row=(x,i)=>{const r=x.r,c=spClosed(r),out=r[3]<=0,dis=c||out,s=+r[3]||0,nm=String(r[0]).replace('@day',t('day'));
  const k=s>=30?'hi':s>=10?'mid':'low',pr=spMin(r);
  const img=r[2]?'<img src="'+escH(r[2])+'" alt="" loading="lazy">':'<svg aria-hidden="true"><use href="#tbg" width="100%" height="100%"/></svg>';
  return '<div class="sp-r" style="--i:'+Math.min(i,10)+'"><div class="sp-im">'+img+'</div><div class="sp-m"><b>'+escH(nm)+'</b><div class="sp-p">'+Math.round(pr).toLocaleString('en-US').replace(/,/g,'.')+'</div>'
  +'<div class="sp-kk">'+(c?'<span class="sp-k cl">'+sp(c==='mt'?'mtB':'upB')+'</span>':'<span class="sp-k '+k+'">'+t('stock')+' '+fmt(s)+'</span>')+(r[5]>0?'<span class="sp-k so">'+t('sold')+' '+fmt(r[5])+'</span>':'')+'</div></div>'
  +'<button type="button" class="sp-buy" data-i="'+x.i+'"'+(dis?' disabled':'')+'>'+(out&&!c?t('out'):c?'—':t('buy')+' '+cart)+'</button></div>'};
 function paint(){
  list.scrollTop=0;
  if(CAT.state==='load'){cnt.textContent='';list.innerHTML='<div class="hs-msg">…</div>';return}
  if(CAT.state==='err'&&!F.length){cnt.textContent='';list.innerHTML='<div class="hs-msg">'+escH(t('loadErr'))+'</div>';return}
  let a=spFilter(cur);const n=norm(q);
  if(n)a=a.filter(x=>norm(String(x.r[0]).replace('@day',t('day'))).includes(n));
  cnt.textContent=a.length+' '+sp('n');
  list.innerHTML=a.length?a.map(row).join(''):'<div class="hs-msg">'+sp(n?'none':'noneT')+'</div>'}
 const pick=b=>{if(!b||b.classList.contains('on'))return;tr.querySelectorAll('.sp-t.on').forEach(e=>e.classList.remove('on'));b.classList.add('on');cur=b.dataset.k;moveInd();
  tabs.scrollTo({left:b.offsetLeft-(tabs.clientWidth-b.offsetWidth)/2,behavior:'smooth'});paint()};
 tr.addEventListener('click',e=>pick(e.target.closest('.sp-t')));
 // เลื่อนแท็บด้วยเมาส์ (บนมือถือเลื่อนด้วยนิ้วได้อยู่แล้ว)
 let dx=0,sx=0,drag=false,moved=false;
 tabs.addEventListener('pointerdown',e=>{if(e.pointerType!=='mouse')return;drag=true;moved=false;sx=e.clientX;dx=tabs.scrollLeft});
 const pm=e=>{if(!drag)return;const d=e.clientX-sx;if(Math.abs(d)>4)moved=true;tabs.scrollLeft=dx-d},pu=()=>{drag=false};
 addEventListener('pointermove',pm);addEventListener('pointerup',pu);
 tabs.addEventListener('click',e=>{if(moved){e.stopPropagation();e.preventDefault();moved=false}},true);
 // ไอคอนค้นหา -> ช่องพิมพ์เลื่อนออกมา
 const openS=()=>{bar.classList.add('sr');setTimeout(()=>inp.focus({preventScroll:true}),260)};
 const closeS=()=>{bar.classList.remove('sr');inp.blur()};
 document.getElementById('spSi').addEventListener('click',()=>bar.classList.contains('sr')?(inp.value?inp.focus():closeS()):openS());
 document.getElementById('spSx').addEventListener('click',()=>{inp.value='';q='';paint();closeS()});
 inp.addEventListener('input',()=>{q=inp.value;paint()});
 inp.addEventListener('blur',()=>{if(!inp.value)setTimeout(closeS,120)});
 inp.addEventListener('keydown',e=>{if(e.key==='Escape'){e.stopPropagation();inp.value='';q='';paint();closeS()}else if(e.key==='Enter')inp.blur()});
 // ปุ่มซื้อ: ปิดการ์ดนี้ก่อน แล้วเปิดการ์ดยืนยันการสั่งซื้อเดิมของเว็บ (login เช็คที่เดิม)
 list.addEventListener('click',e=>{const b=e.target.closest('.sp-buy');if(!b||b.disabled)return;
  const r=F[+b.dataset.i];if(!r)return;e.stopPropagation();close();
  let n=0;const w2=setInterval(()=>{if(++n>60)return clearInterval(w2);if(card.style.display!=='none'||busy)return;clearInterval(w2);
   const pi=PR.indexOf(r),btn=pi>=0&&document.querySelector('#featGrid .buy[data-pi="'+pi+'"]');if(!btn)return;
   btn.scrollIntoView({block:'center',behavior:'instant'});
   if(window._user&&window.openBuy)window.openBuy(btn);else window.needLogin&&window.needLogin()},60)});
 paint();requestAnimationFrame(moveInd);if(document.fonts&&document.fonts.ready)document.fonts.ready.then(moveInd);
 const w=CAT.state==='load'?setInterval(tick,400):0;
 cleanup=()=>{clearInterval(w);drag=false;removeEventListener('pointermove',pm);removeEventListener('pointerup',pu)};
}
const KINDS={contact:{build:buildContact,init:initHist},orders:{build:buildOrders,init:initOrders},topup:{build:buildTopup,init:initTopup},shop:{build:buildShop,init:initShop}};
const clip=(r,c,rad)=>'inset('+(r.top-c.top)+'px '+(c.right-r.right)+'px '+(c.bottom-r.bottom)+'px '+(r.left-c.left)+'px round '+rad+'px)';
const FULL='inset(0px 0px 0px 0px round 26px)';
/* ---- ล็อกหน้าเว็บด้านหลังตอนเปิดการ์ด (ใช้ได้บน iOS: ตรึง body แล้วคืนตำแหน่งเลื่อนตอนปิด) ---- */
let lockY=0,locked=false,lockPrev='';
const lockScroll=()=>{if(locked)return;locked=true;lockY=window.pageYOffset||0;const b=document.body;lockPrev=b.style.cssText;
 b.style.cssText+=';position:fixed;top:'+(-lockY)+'px;left:0;right:0;width:100%;overflow:hidden'};
const unlockScroll=()=>{if(!locked)return;locked=false;document.body.style.cssText=lockPrev;window.scrollTo({top:lockY,left:0,behavior:'instant'})};
async function open(el,kind){
 if(busy||openF)return;busy=true;tile=el;pill();
 if(!ov)mk();
 const K=KINDS[kind];body.innerHTML=K.build();
 const pr=K.init?K.init():null;
 if(pr&&pr.then)await Promise.race([pr.catch(()=>{}),new Promise(r=>setTimeout(r,1200))]); // wait for the list so the card is measured at its real height (no jump/gap while it opens)
 const r=el.getBoundingClientRect();
 ov.classList.add('on');card.style.display='';
 // card sits on top of the tile: same top, centred on the tile, kept inside the viewport
 const vw=innerWidth,vh=innerHeight,cw=card.offsetWidth,ch=card.offsetHeight;
 const hdEl=document.querySelector('header.hd'),topY=Math.max(70,hdEl?Math.round(hdEl.getBoundingClientRect().bottom)+16:96); // card opens just under the top bar (above the banner), not at the tile's height
 const L=Math.max(12,Math.min(r.left+r.width/2-cw/2,vw-cw-12)),T=Math.max(12,Math.min(topY,vh-ch-12));
 card.style.left=L+'px';card.style.top=T+'px';
 const c=card.getBoundingClientRect(),from=clip(r,c,20);
 ghost=document.createElement('div');ghost.className='tl cm-ghost';
 ghost.style.cssText='left:'+r.left+'px;top:'+r.top+'px;width:'+r.width+'px;height:'+r.height+'px;--k:'+(el.style.getPropertyValue('--k')||10.5);
 el.querySelectorAll('.tx,.ico').forEach(n=>ghost.appendChild(n.cloneNode(true)));
 document.body.appendChild(ghost);
 lockScroll();prevFocus=document.activeElement;
 const items=[...body.querySelectorAll('.cm-it')];
 items.forEach(i=>i.style.opacity=0);
 const swap=card.animate([{opacity:0,filter:'blur(12px)'},{opacity:1,filter:'blur(0px)'}],{duration:D(420),easing:'ease-out',fill:'backwards'});
 const A=[swap,
  ov.animate([{opacity:0},{opacity:1}],{duration:D(500),easing:'ease-out',fill:'both'}),
  card.animate([{clipPath:from},{clipPath:FULL}],{duration:D(950),easing:EASE,fill:'both'}),
  ghost.animate([{opacity:1,filter:'blur(0px)',transform:'scale(1)'},{opacity:0,filter:'blur(8px)',transform:'scale(.94)'}],{duration:D(380),easing:'ease-out',fill:'both'})
 ];
 swap.finished.then(()=>{el.style.visibility='hidden'}).catch(()=>{});
 items.forEach((i,k)=>A.push(i.animate([{opacity:0,transform:'translateY(14px) scale(.88)'},{opacity:1,transform:'none'}],{duration:D(600),delay:RM?0:420+k*90,easing:'cubic-bezier(.2,1.15,.4,1)',fill:'both'})));
 Promise.all(A.map(a=>a.finished)).then(()=>{
  items.forEach(i=>{i.getAnimations().forEach(a=>a.cancel());i.style.opacity=''});
  ghost.remove();ghost=null;busy=false;openF=true;
  const x=card.querySelector('.cm-x');x&&x.focus({preventScroll:true});
 }).catch(()=>{busy=false;openF=true});
}
function close(){
 if(busy||!openF)return;busy=true;openF=false;
 if(cleanup){cleanup();cleanup=null}
 const r=tile.getBoundingClientRect(),c=card.getBoundingClientRect(),to=clip(r,c,20);
 const items=[...body.querySelectorAll('.cm-it')];
 tile.style.visibility=''; // real tile returns underneath while the card blurs out on top
 // ghost copy of the tile's text+icon, exactly on the tile: it fades in as the card shrinks onto the tile, so the end of the shrink lines up with the real tile
 const cg=document.createElement('div');cg.className='tl cm-ghost';
 cg.style.cssText='left:'+r.left+'px;top:'+r.top+'px;width:'+r.width+'px;height:'+r.height+'px;--k:'+(tile.style.getPropertyValue('--k')||10.5);
 tile.querySelectorAll('.tx,.ico').forEach(n=>cg.appendChild(n.cloneNode(true)));
 document.body.appendChild(cg);
 const A=[
  cg.animate([{opacity:0,filter:'blur(8px)',transform:'scale(.94)'},{opacity:1,filter:'blur(0px)',transform:'scale(1)'}],{duration:D(380),delay:D(480),easing:'ease-out',fill:'both'}),
  ...items.map(i=>i.animate([{opacity:1,transform:'none'},{opacity:0,transform:'scale(.92)'}],{duration:D(220),easing:'ease-in',fill:'both'})),
  card.animate([{clipPath:FULL},{clipPath:to}],{duration:D(850),delay:D(120),easing:EASE_IO,fill:'both'}),
  card.animate([{opacity:1,filter:'blur(0px)'},{opacity:0,filter:'blur(12px)'}],{duration:D(380),delay:D(600),easing:'ease-in-out',fill:'both'}),
  tile.animate([{opacity:0,filter:'blur(10px)'},{opacity:1,filter:'blur(0px)'}],{duration:D(450),delay:D(560),easing:'ease-out',fill:'backwards'}),
  ov.animate([{opacity:1},{opacity:0}],{duration:D(650),delay:D(260),easing:'ease-in-out',fill:'both'})
 ];
 Promise.all(A.map(a=>a.finished)).catch(()=>{}).then(()=>{
  A.forEach(a=>a.cancel());cg.remove();card.style.display='none';ov.classList.remove('on');body.innerHTML='';
  unlockScroll();busy=false;pill();prevFocus&&prevFocus.focus&&prevFocus.focus({preventScroll:true});
 });
}
document.addEventListener('click',e=>{
 const el=e.target.closest('[data-cm]');if(!el)return;
 e.preventDefault();const k=el.dataset.cm;
 if((k==='topup'||k==='contact'||k==='orders')&&!window._user){window.needLogin&&window.needLogin();return} // top-up needs a signed-in member
 open(el,k);
});
})();

/* ---- ป้ายยอดเงินข้างปุ่มเมนู: อ่านจาก rpc my_balance() (ของตัวเองเท่านั้น) ---- */
(()=>{
 const el=document.getElementById('bal'),n=document.getElementById('balN');
 if(!el||!n)return;
 let last=null,tm=null,seq=0;
 const fmtB=v=>v>=1e7?(Math.round(v/1e5)/10).toLocaleString('en-US')+'M':v.toLocaleString('en-US');
 const show=v=>{const ch=last!==null&&v!==last;last=v;n.textContent=fmtB(v);el.title=v.toLocaleString('en-US')+' ₭';el.hidden=false;
  if(ch){el.classList.remove('up');void el.offsetWidth;el.classList.add('up')}};
 const hide=()=>{last=null;el.hidden=true};
 const refresh=async()=>{
  const u=window._user,s=window._sb||null,my=++seq;
  if(!u||!s){hide();return}
  try{const {data,error}=await s.rpc('my_balance');
   if(my!==seq||!window._user)return;
   if(error||data===null||data===undefined){hide();return}
   show(Number(data)||0)}catch(e){if(my===seq)hide()}};
 window.refreshBalance=refresh;
 const o=window._authUI;
 window._authUI=function(){const r=o&&o.apply(this,arguments);
  const id=window._user?window._user.id:null;
  if(id!==window._balUid){window._balUid=id;clearInterval(tm);tm=null;if(id){refresh();tm=setInterval(()=>{if(!document.hidden)refresh()},30000)}else hide()}
  return r};
 document.addEventListener('visibilitychange',()=>{if(!document.hidden&&window._user)refresh()});
 addEventListener('focus',()=>{window._user&&refresh()});
 if(window._user)window._authUI();
})();

/* ---- ป๊อปอัปโปรโมชันตอนเข้าเว็บ: รูป + ปุ่ม "ปิดทิ้ง" + สวิตช์ "หยุด 1 ชม." ----
   ข้อมูลมาจากห้องแอดมิน > ตั้งค่า (site_settings: promo = รูป, promoOn = สวิตช์เปิด/ปิด) ผ่าน rpc get_site_settings */
(()=>{
 Object.assign(L.th,{pmClose:'ปิดทิ้ง',pmSnz:'หยุด 1 ชม.',pmDone:'จะไม่แสดงอีก 1 ชั่วโมง',pmAlt:'โปรโมชัน'});
 Object.assign(L.lo,{pmClose:'ປິດຖິ້ມ',pmSnz:'ຢຸດ 1 ຊມ.',pmDone:'ຈະບໍ່ສະແດງອີກ 1 ຊົ່ວໂມງ',pmAlt:'ໂປຣໂມຊັນ'});
 const KEY='dk_promo_snooze',HOUR=36e5;
 const getS=()=>{try{return +localStorage.getItem(KEY)||0}catch(e){return 0}};
 const setS=v=>{try{localStorage.setItem(KEY,String(v))}catch(e){}};
 const sbx=window._sb;if(!sbx||getS()>Date.now())return;
 const RM=window.matchMedia&&matchMedia('(prefers-reduced-motion:reduce)').matches;
 let el=null,prevOv='',tmr=0;
 const toast=x=>{const e=document.getElementById('toast');if(!e)return;e.innerHTML='<span></span>';e.lastChild.textContent=x;e.classList.add('on');clearTimeout(window._at);window._at=setTimeout(()=>e.classList.remove('on'),2600)};
 const onKey=e=>{if(!el)return;const a=el.querySelector('.pmo-x'),b=el.querySelector('.pmo-s');
  if(e.key==='Escape'){e.preventDefault();hide()}
  else if(e.key==='Tab'){if(e.shiftKey&&document.activeElement===a){e.preventDefault();b.focus()}else if(!e.shiftKey&&document.activeElement===b){e.preventDefault();a.focus()}}};
 const hide=cb=>{if(!el)return;clearTimeout(tmr);const n=el;el.classList.add('out');document.removeEventListener('keydown',onKey);
  setTimeout(()=>{n.remove();if(el===n)el=null;document.body.style.overflow=prevOv;cb&&cb()},RM?0:230)};
 const show=u=>{if(el||getS()>Date.now())return;
  el=document.createElement('div');el.className='pmo';el.setAttribute('role','dialog');el.setAttribute('aria-modal','true');
  el.innerHTML='<div class="pmo-c"><img class="pmo-img" alt=""><div class="pmo-bt"><button type="button" class="pmo-x" data-i="pmClose"></button><button type="button" class="pmo-s" role="switch" aria-checked="false"><span data-i="pmSnz"></span><span class="pmo-sw"><i></i></span></button></div></div>';
  const im=el.querySelector('img');im.alt=t('pmAlt');im.src=u;
  el.querySelectorAll('[data-i]').forEach(n=>n.textContent=t(n.dataset.i));
  el.addEventListener('click',e=>{if(e.target===el)hide()});
  el.querySelector('.pmo-x').onclick=()=>hide();
  const sw=el.querySelector('.pmo-s');
  sw.onclick=()=>{if(sw.getAttribute('aria-checked')==='true')return;sw.setAttribute('aria-checked','true');setS(Date.now()+HOUR);
   tmr=setTimeout(()=>hide(()=>toast(t('pmDone'))),RM?150:700)};
  document.body.appendChild(el);prevOv=document.body.style.overflow;document.body.style.overflow='hidden';
  document.addEventListener('keydown',onKey);
  requestAnimationFrame(()=>{el&&el.classList.add('on');sw.focus({preventScroll:true})})};
 sbx.rpc('get_site_settings').then(({data,error})=>{
  if(error||!data||data.promoOn===false)return;
  const u=data.promo;if(typeof u!=='string'||!/^https:\/\/\S+$/i.test(u))return;
  const pre=new Image();pre.onload=()=>setTimeout(()=>show(u),500);pre.src=u}).catch(()=>{});
})();

/* ---- ใช้ค่าจากห้องแอดมิน > ตั้งค่าร้าน (site_settings ผ่าน rpc get_site_settings): ชื่อร้าน, โลโก้, รูปหน้าร้าน, หมวดหมู่ ---- */
(()=>{
 const sbx=window._sb;if(!sbx)return;
 let FL=[];const apply=d=>{if(!d||typeof d!=='object')return;
  const nm=typeof d.name==='string'?d.name.trim().slice(0,40):'';
  if(nm){document.title=nm;
   const a=document.querySelector('#dr .t>div');if(a&&a.lastChild&&a.lastChild.nodeType===3)a.lastChild.nodeValue=nm;
   const b=document.querySelector('.hd2 b');if(b)b.textContent=nm}
  IMG.logo=okImg(d.logo);IMG.banner=okImg(d.front);
  C.length=0;
  (Array.isArray(d.cats)?d.cats:[]).forEach((c,i)=>{const n=c&&typeof c.name==='string'?c.name.trim():'';if(n&&FL[i]!==false)C.push([n,okImg(c.img)])});
  render()};
 const load=()=>Promise.all([sbx.rpc('get_site_settings'),sbx.rpc('shop_cat_flags_get').then(r=>r,()=>({data:null}))]).then(([s,f])=>{if(f&&Array.isArray(f.data))FL=f.data;if(s&&!s.error)apply(s.data)}).catch(()=>{});
 load();
 document.addEventListener('visibilitychange',()=>{if(!document.hidden)load()});
})();

/* ---- เติมเงินจริง: อัปโหลดสลิป -> รออนุมัติในห้องแอดมิน -> เงินเข้ายอดอัตโนมัติ (ตาราง topup_requests) ---- */
(()=>{
 const sbx=window._sb;if(!sbx)return;
 const shrink=f=>new Promise((res,rej)=>{const u=URL.createObjectURL(f),im=new Image();
  im.onload=()=>{const k=Math.min(1,1600/Math.max(im.width,im.height)),c=document.createElement('canvas');
   c.width=Math.round(im.width*k);c.height=Math.round(im.height*k);c.getContext('2d').drawImage(im,0,0,c.width,c.height);
   URL.revokeObjectURL(u);c.toBlob(b=>b?res(b):rej(new Error('blob')),'image/jpeg',.82)};
  im.onerror=()=>{URL.revokeObjectURL(u);rej(new Error('img'))};im.src=u});
 window.submitSlip=async({ref,amount,file})=>{
  const uid=window._user&&window._user.id;if(!uid)throw new Error('login');
  const blob=await shrink(file),path=uid+'/'+ref+'.jpg';
  const up=await sbx.storage.from('slips').upload(path,blob,{contentType:'image/jpeg',upsert:false});
  if(up.error&&!/exists|duplicate/i.test(up.error.message||''))throw up.error;
  const r=await sbx.rpc('submit_topup',{p_ref:ref,p_amount:Math.round(+amount),p_path:path});
  if(r.error)throw r.error};
 window.watchTopup=(ref,cb)=>{let stop=false,tm=0;
  const poll=async()=>{if(stop)return;
   try{const {data,error}=await sbx.rpc('my_topup',{p_ref:ref});
    if(!error&&data&&data.status){cb({status:data.status,reason:data.reason||''});if(data.status!=='pending')return}}catch(e){}
   if(!stop)tm=setTimeout(poll,4000)};
  poll();return()=>{stop=true;clearTimeout(tm)}};
})();

/* ---- สถิติหน้าแรก: ผู้ใช้งาน + สต็อก ดึงจากฐานข้อมูลจริง (rpc shop_stats) ---- */
(()=>{
 const sbx=window._sb,cn=[...document.querySelectorAll('.stat .cnt[data-live]')];if(!sbx||cn.length<2)return;
 const run=(e,to)=>{const from=+String(e.textContent).replace(/,/g,'')||0;cancelAnimationFrame(e._r);
  if(from===to||matchMedia('(prefers-reduced-motion:reduce)').matches){e.textContent=to.toLocaleString('en-US');return}
  const s0=performance.now(),D=900,f=t=>{const p=Math.min(1,(t-s0)/D);e.textContent=Math.round(from+(to-from)*(1-Math.pow(1-p,3))).toLocaleString('en-US');if(p<1)e._r=requestAnimationFrame(f)};e._r=requestAnimationFrame(f)};
 let busy=false;
 const load=()=>{if(busy)return;busy=true;sbx.rpc('shop_stats').then(({data,error})=>{busy=false;if(error||!data)return;run(cn[0],Math.max(0,+data.users||0));run(cn[1],Math.max(0,+data.stock||0))}).catch(()=>{busy=false})};
 window.refreshStats=load;load();
 setInterval(()=>{if(!document.hidden)load()},30000);
 document.addEventListener('visibilitychange',()=>{if(!document.hidden)load()});
})();
