import"./theme-QTap-Mp3.js";const S_="modulepreload",k_=function(i){return"/"+i},oh={},ct=function(e,t,n){let a=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),o=s?.nonce||s?.getAttribute("nonce");a=Promise.allSettled(t.map(c=>{if(c=k_(c),c in oh)return;oh[c]=!0;const l=c.endsWith(".css"),d=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const f=document.createElement("link");if(f.rel=l?"stylesheet":S_,l||(f.as="script"),f.crossOrigin="",f.href=c,o&&f.setAttribute("nonce",o),document.head.appendChild(f),l)return new Promise((u,h)=>{f.addEventListener("load",u),f.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(s){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s}return a.then(s=>{for(const o of s||[])o.status==="rejected"&&r(o.reason);return e().catch(r)})},M_="https://discord.gg/3zTCpMzeNq";let Ha={},Fd=0,Zs=null,Ic=null;function ur(){Zs!==null&&(clearInterval(Zs),Zs=null)}let lh=null,zc="";function E_(){if(lh!==null)return;const i=()=>{w_()};lh=setInterval(i,5e3),window.addEventListener("focus",i),document.addEventListener("visibilitychange",()=>{document.hidden||i()}),i()}async function w_(){if(!document.hidden)try{await Na(!0);const i=await wm();if(!i)return;const e=`${i.cizimSerbest}|${i.rolYol}|${i.dogrulandi}`;if(e===zc)return;const t=zc==="";if(zc=e,i.dogrulandi&&Ic!==null&&Ic!==i.rolYol&&(i.rolYol?X("Yol Silindiri izni açıldı ✓ pelerinini ve elıtranı çizebilirsin — Kozmetikler sayfasına geç.","ok"):X("Yol Silindiri izni kapandı — tasarımın kaydedildi ama şu an varsayılan YIKIM pelerini/elitrası görünüyor. Etiketi geri alınca aynı tasarım döner.","err")),Ic=i.rolYol,t)return;window.dispatchEvent(new CustomEvent("yikim:yetki",{detail:i}))}catch{}}async function Na(i=!1){if(!(!i&&Date.now()-Fd<15e3))try{const e=await te("cmd_guvenlik_ozet");Ha={};for(const t of e.hesaplar||[])Ha[t.id]=t;Fd=Date.now()}catch{}}function Mm(i){return Ha[i]?.dogrulandi??!1}function Em(i){return Ha[i]?.rol_yol??!1}function T_(i){return Ha[i]?.kozmetik_serbest??!1}async function wm(){let i=null;try{i=await te("cmd_guvenlik_durum")}catch{return null}const e=i?.hesap?.anahtar??"",t=le.accounts?.find(r=>A_(r)===e)?.id,n=t?{cizimSerbest:!!i?.cizim_serbest,dogrulandi:!!i?.dogrulandi,rolYol:!!i?.yetki?.rol_yol}:null;if(!t)return n;const a=Ha[t];return Ha[t]={id:t,anahtar:e,ad:String(i?.hesap?.ad??a?.ad??""),dogrulandi:!!i?.dogrulandi,rol_yol:!!i?.yetki?.rol_yol,carpi:!!i?.carpi,kozmetik_serbest:!!i?.kozmetik_serbest,cizim_serbest:!!i?.cizim_serbest},Fd=Date.now(),n}function A_(i){const e=i.kind==="microsoft"?"ms":"offline",t=i.uuid||"";return t?`${e}:${t}`:`${e}:${(i.name||i.id).toLowerCase()}`}function dc(i){const e=Ha[i];return!e||e.dogrulandi?"":'<span class="gv-carpi" title="Hesap doğrulanmadı — kozmetik değiştirmek için Ayarlar → Güvenlik">✕</span>'}async function Bd(i){const e=new TextEncoder,t=await crypto.subtle.importKey("raw",e.encode(i),"PBKDF2",!1,["deriveBits"]),n=await crypto.subtle.deriveBits({name:"PBKDF2",salt:e.encode("yikimlient-parola-v1"),iterations:21e4,hash:"SHA-256"},t,256);return Array.from(new Uint8Array(n)).map(a=>a.toString(16).padStart(2,"0")).join("")}function ch(i){return i.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function Cr(i,e,t){return`<div class="gv-durum ${i}">
    <span class="gv-nokta"></span>
    <div><b>${ch(e)}</b><small>${ch(t)}</small></div>
  </div>`}const Js=(i,e)=>`
  <label class="gv-etiket" for="${i}">${e}</label>
  <input class="input gv-girdi" id="${i}" type="password" autocomplete="new-password" minlength="8" placeholder="en az 8 karakter" />`;async function fr(i){ur(),i.innerHTML=`<div class="card set-card gv-kart"><h3>🛡️ Hesap Doğrulama</h3>
    <p class="set-sub">Durum okunuyor…</p></div>`,await Na(!0);let e=null;try{e=await te("cmd_guvenlik_durum")}catch{e=null}if(!e){i.innerHTML=`<div class="card set-card gv-kart">
      <h3>🛡️ Hesap Doğrulama</h3>
      ${Cr("hata","Güvenlik servisi bu sürümde yok","Launcher'ı güncelle. Oyun ve mevcut kozmetikler çalışmaya devam eder.")}
    </div>`;return}const t=bn();e.yetki;const n=!!e.hesap,a=e.carpi?dc(t?.id||""):"";let r="";e.api_acik?n?e.baglandi&&e.dogrulandi?r=Cr("ok",`Doğrulandı${e.discord_ad?` · ${e.discord_ad}`:""}`,e.yetki?.rol_yol?"Kendi pelerin/elitranı çizebilir, fotoğraf (HD) ve maske yükleyebilirsin (Yol Silindiri).":'Kozmetik ve skin değiştirme açık. Kendi tasarımını çizmek için Discord sunucusundaki YIKIM etiketi ("Yol Silindiri" rolü) gerekir — etiketi bırakırsan çizme izni kendiliğinden kapanır.'):e.baglandi?r=Cr("uyari","Discord bağlı — bu cihazda giriş yapmadın","Şifreni gir; kozmetiklerin ve çizme iznin bu cihaza açılsın."):r=Cr("uyari","Hesap doğrulanmadı","Oynayabilirsin; kozmetik değiştirmek için Discord'da doğrula."):r=Cr("uyari","Önce hesap ekle","Ayarlar → Hesaplar bölümünden bir hesap ekle."):r=Cr("hata","Sunucuya ulaşılamıyor","Bağlantı, şifre oluşturma ve sıfırlama şu an kapalı. Oyun ve mevcut kozmetikler çalışmaya devam eder.");let s="";e.api_acik&&n&&!e.baglandi&&(s+=`
      <div class="gv-adim">
        <div class="gv-adim-bas"><span class="gv-no">1</span><b>Discord sunucusuna katıl</b></div>
        <p class="gv-mini">
          Doğrulama Discord üzerinden yapılır. Sunucuya katıl, <b>bot komut kanalına</b> git ve
          aşağıdaki kodu oraya yaz. Bot nerede diye arama — komut kanalı sunucunun en üstünde.
        </p>
        <div class="gv-alt-satir" style="margin:10px 0 4px">
          <button class="btn ghost sm" id="gv-discord">Discord sunucusuna katıl ↗</button>
          <span class="gv-mini" style="margin:0">discord.gg/3zTCpMzeNq</span>
        </div>
      </div>
      <div class="gv-adim">
        <div class="gv-adim-bas"><span class="gv-no">2</span><b>Hesabını bağla</b></div>
        <p class="gv-mini">Kodu al, sonra bot komut kanalında yaz: <code>/bagla KOD</code></p>
        <div class="gv-kod-satir">
          <div class="gv-kod" id="gv-kod">···</div>
          <button class="btn primary sm" id="gv-kod-al">Kod al</button>
          <button class="btn ghost sm" id="gv-kopyala" hidden title="Kodu kopyala">Kopyala</button>
          <button class="btn ghost sm" id="gv-kontrol">Kontrol et</button>
        </div>
        <p class="gv-mini" id="gv-kod-alt">Kod 10 dakika geçerlidir.</p>
      </div>`),e.api_acik&&n&&e.baglandi&&!e.dogrulandi&&(s+=`
      <div class="gv-adim">
        <div class="gv-adim-bas"><span class="gv-no">3</span><b>Giriş yap</b></div>
        <p class="gv-mini">Hesabının şifresini gir — kozmetiklerin ve çizme iznin bu cihaza açılır. Şifre her cihazda aynıdır.</p>
        <div class="gv-izgara">
          ${Js("gv-giris-sifre","Şifre")}
        </div>
        <div class="gv-alt-satir">
          <button class="btn primary" id="gv-giris">Giriş yap</button>
          <button class="btn ghost sm" id="gv-olustur-ac">Hesabımın şifresi yok</button>
        </div>
      </div>

      <div class="gv-adim" id="gv-olustur-blok" hidden>
        <div class="gv-adim-bas"><span class="gv-no">4</span><b>Şifre oluştur</b></div>
        <p class="gv-mini">Bu şifre hesabını korur; her cihazda aynı şifreyle doğrulanırsın.</p>
        <div class="gv-izgara">
          ${Js("gv-p1","Yeni şifre")}
          ${Js("gv-p2","Yeni şifre (tekrar)")}
        </div>
        <div class="gv-alt-satir">
          <button class="btn primary" id="gv-parola-kur">Şifreyi oluştur</button>
        </div>
        <p class="gv-mini">Şimdi oluşturmazsan oyun açılır; kozmetikler kilitli kalır.</p>
      </div>`),e.api_acik&&n&&e.dogrulandi&&(s+=`
      <div class="gv-alt-satir" style="margin-top:4px">
        <button class="btn ghost sm" id="gv-unuttum">Şifremi unuttum</button>
      </div>`),e.api_acik||(s+='<div class="gv-alt-satir"><button class="btn ghost sm" id="gv-yenile">Yeniden dene</button></div>'),i.innerHTML=`<div class="card set-card gv-kart">
    <h3>🛡️ Hesap Doğrulama</h3>
    <p class="set-sub">Hesabını Discord ile doğrula; kozmetiklerin hesaba bağlansın, cihaz değiştirince kaybolmasın.</p>
    ${a?`<div class="gv-uyari-satir">${a}<span>Bu hesap doğrulanmadı — adının başında ✕ görünür.</span></div>`:""}
    ${r}
    ${s}
    <div class="gv-alt-bilgi">
      <span>${e.bot_acik?"Bot: çevrimiçi":"Bot: kapalı (oyun çalışır)"}</span>
      <span>${e.cihaz_hazir?"Cihaz imzası: hazır":"Cihaz imzası: yok"}</span>
    </div>
  </div>`;const o=()=>i.querySelector("#gv-kod"),c=()=>i.querySelector("#gv-kod-alt");i.querySelector("#gv-kod-al")?.addEventListener("click",async()=>{try{const f=await te("cmd_guvenlik_baglama_kod");o()&&(o().textContent=f.kod||"?"),c()&&(c().textContent=`Discord'da bota yaz: /bagla ${f.kod||""} · ${Math.ceil((f.kalan_sn||600)/60)} dk`);const u=i.querySelector("#gv-kopyala");u&&(u.hidden=!f.kod,u.onclick=async()=>{const h=f.kod||"";if(h)try{await navigator.clipboard.writeText(h);const g=u.textContent;u.textContent="Kopyalandı ✓",setTimeout(()=>{u.textContent=g},1600)}catch{const g=window.getSelection(),m=document.createRange();m.selectNodeContents(i.querySelector("#gv-kod")),g?.removeAllRanges(),g?.addRange(m),X("Pano kapalı — kodu elle seçip kopyala","err")}}),Zs||(Zs=setInterval(()=>{if(!i.isConnected||!document.body.contains(i)){ur();return}l(!0)},3e3))}catch(f){X(`Kod alınamadı: ${String(f).replace(/^Error:\s*/,"")}`,"err")}});const l=async(f=!1)=>{try{if((await te("cmd_guvenlik_baglama_durum")).baglandi)return ur(),X("Discord bağlandı ✓"),await fr(i),!0;f||X("Henüz bağlanmadı — Discord'da kodu yazdın mı?","err")}catch(u){f||X(`Kontrol edilemedi: ${String(u).replace(/^Error:\s*/,"")}`,"err")}return!1};i.querySelector("#gv-kontrol")?.addEventListener("click",()=>void l(!1)),i.querySelector("#gv-discord")?.addEventListener("click",()=>Tm());const d=async()=>{const f=i.querySelector("#gv-giris-sifre")?.value||"";if(f.length<8)return X("Şifreni gir (en az 8 karakter)","err");const u=i.querySelector("#gv-giris");u&&(u.disabled=!0);try{const h=await Bd(f);(await te("cmd_guvenlik_giris",{parolaHash:h}))?.dogrulandi&&(await Na(!0),X("Giriş yapıldı ✓ kozmetikler açıldı"),await fr(i))}catch(h){const g=String(h).replace(/^Error:\s*/,"");if(g.includes("parola_yok")){const m=i.querySelector("#gv-olustur-blok");m&&(m.hidden=!1),X("Bu hesabın şifresi yok — aşağıdan oluşturabilirsin.","err")}else X(g.includes("baglanti_yok")?"Önce Discord'da /bagla ile bağla":`Giriş olmadı: ${g}`,"err");u&&(u.disabled=!1)}};i.querySelector("#gv-giris")?.addEventListener("click",()=>void d()),i.querySelector("#gv-giris-sifre")?.addEventListener("keydown",f=>{f.key==="Enter"&&d()}),i.querySelector("#gv-olustur-ac")?.addEventListener("click",()=>{const f=i.querySelector("#gv-olustur-blok");f&&(f.hidden=!1)}),i.querySelector("#gv-parola-kur")?.addEventListener("click",async()=>{const f=i.querySelector("#gv-p1")?.value||"",u=i.querySelector("#gv-p2")?.value||"";if(f.length<8)return X("Şifre en az 8 karakter olmalı","err");if(f!==u)return X("Şifreler eşleşmiyor","err");const h=i.querySelector("#gv-parola-kur");h&&(h.disabled=!0);try{const g=await Bd(f);await te("cmd_guvenlik_parola_kur",{parolaHash:g}),await te("cmd_guvenlik_giris",{parolaHash:g}),X("Şifre oluşturuldu ✓ kozmetikler açıldı"),await Na(!0),await fr(i)}catch(g){const m=String(g).replace(/^Error:\s*/,"");if(m.includes("parola_var")){const p=i.querySelector("#gv-olustur-blok");p&&(p.hidden=!0),X("Bu hesabın şifresi zaten var — yukarıdan giriş yap.","err")}else X(`Olmadı: ${m}`,"err");h&&(h.disabled=!1)}}),i.querySelector("#gv-unuttum")?.addEventListener("click",()=>R_(i)),i.querySelector("#gv-yenile")?.addEventListener("click",()=>void fr(i))}function R_(i){const e=tn(`
    <h2>Şifremi unuttum</h2>
    <div class="sub">Sunucudaki <b>bot komut kanalında</b> <code>/sifirla</code> yaz; bot sana tek seferlik kod gönderir.</div>
    <div style="display:flex; flex-direction:column; gap:12px; margin-top:14px">
      <div>
        <label class="gv-etiket" for="gv-sif-kod">Kod</label>
        <input class="input gv-girdi" id="gv-sif-kod" placeholder="8 karakter" maxlength="12" style="text-transform:uppercase" />
      </div>
      ${Js("gv-sif-p1","Yeni şifre")}
      ${Js("gv-sif-p2","Yeni şifre (tekrar)")}
      <div class="gv-alt-satir">
        <button class="btn ghost" id="gv-sif-iptal">Vazgeç</button>
        <button class="btn primary" id="gv-sif-tamam">Şifreyi değiştir</button>
      </div>
      <p class="gv-mini">5 hatalı denemede bu cihazda hesap 24 saat kilitlenir.</p>
    </div>
  `);e.root.querySelector("#gv-sif-iptal")?.addEventListener("click",()=>e.close()),e.root.querySelector("#gv-sif-tamam")?.addEventListener("click",async()=>{const t=(e.root.querySelector("#gv-sif-kod")?.value||"").trim().toUpperCase(),n=e.root.querySelector("#gv-sif-p1")?.value||"",a=e.root.querySelector("#gv-sif-p2")?.value||"";if(!t)return X("Kodu gir","err");if(n.length<8)return X("Şifre en az 8 karakter olmalı","err");if(n!==a)return X("Şifreler eşleşmiyor","err");try{const r=await Bd(n);await te("cmd_guvenlik_sifirla",{kod:t,parolaHash:r}),await te("cmd_guvenlik_giris",{parolaHash:r}),X("Şifre değiştirildi ✓"),e.close(),await Na(!0),await fr(i)}catch(r){X(`Olmadı: ${String(r).replace(/^Error:\s*/,"")}`,"err")}})}function Tm(){qi(M_).catch(()=>X("Discord açılamadı","err"))}function ji(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function Am(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var jn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},lo={duration:.5,overwrite:!1,delay:0},Qu,an,Tt,li=1e8,yt=1/li,Hd=Math.PI*2,L_=Hd/4,C_=0,Rm=Math.sqrt,P_=Math.cos,D_=Math.sin,en=function(e){return typeof e=="string"},Ut=function(e){return typeof e=="function"},sa=function(e){return typeof e=="number"},ef=function(e){return typeof e>"u"},Hi=function(e){return typeof e=="object"},An=function(e){return e!==!1},tf=function(){return typeof window<"u"},$o=function(e){return Ut(e)||en(e)},Lm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},mn=Array.isArray,I_=/random\([^)]+\)/g,z_=/,\s*/g,dh=/(?:-?\.?\d|\.)+/gi,Cm=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Qr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Uc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Pm=/[+-]=-?[.\d]+/,U_=/[^,'"\[\]\s]+/gi,N_=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Lt,Li,$d,nf,Qn={},Ul={},Dm,Im=function(e){return(Ul=hs(e,Qn))&&Un},af=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},co=function(e,t){return!t&&console.warn(e)},zm=function(e,t){return e&&(Qn[e]=t)&&Ul&&(Ul[e]=t)||Qn},uo=function(){return 0},O_={suppressEvents:!0,isStart:!0,kill:!1},bl={suppressEvents:!0,kill:!1},F_={suppressEvents:!0},rf={},Oa=[],Gd={},Um,$n={},Nc={},uh=30,Sl=[],sf="",of=function(e){var t=e[0],n,a;if(Hi(t)||Ut(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(a=Sl.length;a--&&!Sl[a].targetTest(t););n=Sl[a]}for(a=e.length;a--;)e[a]&&(e[a]._gsap||(e[a]._gsap=new ag(e[a],n)))||e.splice(a,1);return e},vr=function(e){return e._gsap||of(ci(e))[0]._gsap},Nm=function(e,t,n){return(n=e[t])&&Ut(n)?e[t]():ef(n)&&e.getAttribute&&e.getAttribute(t)||n},Rn=function(e,t){return(e=e.split(",")).forEach(t)||e},Ot=function(e){return Math.round(e*1e5)/1e5||0},Rt=function(e){return Math.round(e*1e7)/1e7||0},rs=function(e,t){var n=t.charAt(0),a=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+a:n==="-"?e-a:n==="*"?e*a:e/a},B_=function(e,t){for(var n=t.length,a=0;e.indexOf(t[a])<0&&++a<n;);return a<n},Nl=function(){var e=Oa.length,t=Oa.slice(0),n,a;for(Gd={},Oa.length=0,n=0;n<e;n++)a=t[n],a&&a._lazy&&(a.render(a._lazy[0],a._lazy[1],!0)._lazy=0)},lf=function(e){return!!(e._initted||e._startAt||e.add)},Om=function(e,t,n,a){Oa.length&&!an&&Nl(),e.render(t,n,!!(an&&t<0&&lf(e))),Oa.length&&!an&&Nl()},Fm=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(U_).length<2?t:en(e)?e.trim():e},Bm=function(e){return e},ei=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},H_=function(e){return function(t,n){for(var a in n)a in t||a==="duration"&&e||a==="ease"||(t[a]=n[a])}},hs=function(e,t){for(var n in t)e[n]=t[n];return e},fh=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Hi(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},Ol=function(e,t){var n={},a;for(a in e)a in t||(n[a]=e[a]);return n},js=function(e){var t=e.parent||Lt,n=e.keyframes?H_(mn(e.keyframes)):ei;if(An(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},$_=function(e,t){for(var n=e.length,a=n===t.length;a&&n--&&e[n]===t[n];);return n<0},Hm=function(e,t,n,a,r){var s=e[a],o;if(r)for(o=t[r];s&&s[r]>o;)s=s._prev;return s?(t._next=s._next,s._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[a]=t,t._prev=s,t.parent=t._dp=e,t},uc=function(e,t,n,a){n===void 0&&(n="_first"),a===void 0&&(a="_last");var r=t._prev,s=t._next;r?r._next=s:e[n]===t&&(e[n]=s),s?s._prev=r:e[a]===t&&(e[a]=r),t._next=t._prev=t.parent=null},$a=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},_r=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},G_=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Vd=function(e,t,n,a){return e._startAt&&(an?e._startAt.revert(bl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,a))},V_=function i(e){return!e||e._ts&&i(e.parent)},hh=function(e){return e._repeat?ps(e._tTime,e=e.duration()+e._rDelay)*e:0},ps=function(e,t){var n=Math.floor(e=Rt(e/t));return e&&n===e?n-1:n},Fl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},fc=function(e){return e._end=Rt(e._start+(e._tDur/Math.abs(e._ts||e._rts||yt)||0))},hc=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Rt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),fc(e),n._dirty||_r(n,e)),e},$m=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Fl(e.rawTime(),t),(!t._dur||Ro(0,t.totalDuration(),n)-t._tTime>yt)&&t.render(n,!0)),_r(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-yt}},Ii=function(e,t,n,a){return t.parent&&$a(t),t._start=Rt((sa(n)?n:n||e!==Lt?ri(e,n,t):e._time)+t._delay),t._end=Rt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Hm(e,t,"_first","_last",e._sort?"_start":0),qd(t)||(e._recent=t),a||$m(e,t),e._ts<0&&hc(e,e._tTime),e},Gm=function(e,t){return(Qn.ScrollTrigger||af("scrollTrigger",t))&&Qn.ScrollTrigger.create(t,e)},Vm=function(e,t,n,a,r){if(df(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!an&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Um!==Wn.frame)return Oa.push(e),e._lazy=[r,a],1},q_=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},qd=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},W_=function(e,t,n,a){var r=e.ratio,s=t<0||!t&&(!e._start&&q_(e)&&!(!e._initted&&qd(e))||(e._ts<0||e._dp._ts<0)&&!qd(e))?0:1,o=e._rDelay,c=0,l,d,f;if(o&&e._repeat&&(c=Ro(0,e._tDur,t),d=ps(c,o),e._yoyo&&d&1&&(s=1-s),d!==ps(e._tTime,o)&&(r=1-s,e.vars.repeatRefresh&&e._initted&&e.invalidate())),s!==r||an||a||e._zTime===yt||!t&&e._zTime){if(!e._initted&&Vm(e,t,a,n,c))return;for(f=e._zTime,e._zTime=t||(n?yt:0),n||(n=t&&!f),e.ratio=s,e._from&&(s=1-s),e._time=0,e._tTime=c,l=e._pt;l;)l.r(s,l.d),l=l._next;t<0&&Vd(e,t,n,!0),e._onUpdate&&!n&&Yn(e,"onUpdate"),c&&e._repeat&&!n&&e.parent&&Yn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===s&&(s&&$a(e,1),!n&&!an&&(Yn(e,s?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},K_=function(e,t,n){var a;if(n>t)for(a=e._first;a&&a._start<=n;){if(a.data==="isPause"&&a._start>t)return a;a=a._next}else for(a=e._last;a&&a._start>=n;){if(a.data==="isPause"&&a._start<t)return a;a=a._prev}},ms=function(e,t,n,a){var r=e._repeat,s=Rt(t)||0,o=e._tTime/e._tDur;return o&&!a&&(e._time*=s/e._dur),e._dur=s,e._tDur=r?r<0?1e10:Rt(s*(r+1)+e._rDelay*r):s,o>0&&!a&&hc(e,e._tTime=e._tDur*o),e.parent&&fc(e),n||_r(e.parent,e),e},ph=function(e){return e instanceof Tn?_r(e):ms(e,e._dur)},X_={_start:0,endTime:uo,totalDuration:uo},ri=function i(e,t,n){var a=e.labels,r=e._recent||X_,s=e.duration()>=li?r.endTime(!1):e._dur,o,c,l;return en(t)&&(isNaN(t)||t in a)?(c=t.charAt(0),l=t.substr(-1)==="%",o=t.indexOf("="),c==="<"||c===">"?(o>=0&&(t=t.replace(/=/,"")),(c==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(l?(o<0?r:n).totalDuration()/100:1)):o<0?(t in a||(a[t]=s),a[t]):(c=parseFloat(t.charAt(o-1)+t.substr(o+1)),l&&n&&(c=c/100*(mn(n)?n[0]:n).totalDuration()),o>1?i(e,t.substr(0,o-1),n)+c:s+c)):t==null?s:+t},Qs=function(e,t,n){var a=sa(t[1]),r=(a?2:1)+(e<2?0:1),s=t[r],o,c;if(a&&(s.duration=t[1]),s.parent=n,e){for(o=s,c=n;c&&!("immediateRender"in o);)o=c.vars.defaults||{},c=An(c.vars.inherit)&&c.parent;s.immediateRender=An(o.immediateRender),e<2?s.runBackwards=1:s.startAt=t[r-1]}return new Ht(t[0],s,t[r+1])},Ya=function(e,t){return e||e===0?t(e):t},Ro=function(e,t,n){return n<e?e:n>t?t:n},pn=function(e,t){return!en(e)||!(t=N_.exec(e))?"":t[1]},Y_=function(e,t,n){return Ya(n,function(a){return Ro(e,t,a)})},Wd=[].slice,qm=function(e,t){return e&&Hi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Hi(e[0]))&&!e.nodeType&&e!==Li},Z_=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(a){var r;return en(a)&&!t||qm(a,1)?(r=n).push.apply(r,ci(a)):n.push(a)})||n},ci=function(e,t,n){return Tt&&!t&&Tt.selector?Tt.selector(e):en(e)&&!n&&($d||!gs())?Wd.call((t||nf).querySelectorAll(e),0):mn(e)?Z_(e,n):qm(e)?Wd.call(e,0):e?[e]:[]},Kd=function(e){return e=ci(e)[0]||co("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return ci(t,n.querySelectorAll?n:n===e?co("Invalid scope")||nf.createElement("div"):e)}},Wm=function(e){return e.sort(function(){return .5-Math.random()})},Km=function(e){if(Ut(e))return e;var t=Hi(e)?e:{each:e},n=yr(t.ease),a=t.from||0,r=parseFloat(t.base)||0,s={},o=a>0&&a<1,c=isNaN(a)||o,l=t.axis,d=a,f=a;return en(a)?d=f={center:.5,edges:.5,end:1}[a]||0:!o&&c&&(d=a[0],f=a[1]),function(u,h,g){var m=(g||t).length,p=s[m],v,y,T,b,S,k,A,x,w;if(!p){if(w=t.grid==="auto"?0:(t.grid||[1,li])[1],!w){for(A=-li;A<(A=g[w++].getBoundingClientRect().left)&&w<m;);w<m&&w--}for(p=s[m]=[],v=c?Math.min(w,m)*d-.5:a%w,y=w===li?0:c?m*f/w-.5:a/w|0,A=0,x=li,k=0;k<m;k++)T=k%w-v,b=y-(k/w|0),p[k]=S=l?Math.abs(l==="y"?b:T):Rm(T*T+b*b),S>A&&(A=S),S<x&&(x=S);a==="random"&&Wm(p),p.max=A-x,p.min=x,p.v=m=(parseFloat(t.amount)||parseFloat(t.each)*(w>m?m-1:l?l==="y"?m/w:w:Math.max(w,m/w))||0)*(a==="edges"?-1:1),p.b=m<0?r-m:r,p.u=pn(t.amount||t.each)||0,n=n&&m<0?c0(n):n}return m=(p[u]-p.min)/p.max||0,Rt(p.b+(n?n(m):m)*p.v)+p.u}},Xd=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var a=Rt(Math.round(parseFloat(n)/e)*e*t);return(a-a%1)/t+(sa(n)?0:pn(n))}},Xm=function(e,t){var n=mn(e),a,r;return!n&&Hi(e)&&(a=n=e.radius||li,e.values?(e=ci(e.values),(r=!sa(e[0]))&&(a*=a)):e=Xd(e.increment)),Ya(t,n?Ut(e)?function(s){return r=e(s),Math.abs(r-s)<=a?r:s}:function(s){for(var o=parseFloat(r?s.x:s),c=parseFloat(r?s.y:0),l=li,d=0,f=e.length,u,h;f--;)r?(u=e[f].x-o,h=e[f].y-c,u=u*u+h*h):u=Math.abs(e[f]-o),u<l&&(l=u,d=f);return d=!a||l<=a?e[d]:s,r||d===s||sa(s)?d:d+pn(s)}:Xd(e))},Ym=function(e,t,n,a){return Ya(mn(e)?!t:n===!0?!!(n=0):!a,function(){return mn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(a=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*a)/a})},J_=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(a){return t.reduce(function(r,s){return s(r)},a)}},j_=function(e,t){return function(n){return e(parseFloat(n))+(t||pn(n))}},Q_=function(e,t,n){return Jm(e,t,0,1,n)},Zm=function(e,t,n){return Ya(n,function(a){return e[~~t(a)]})},e0=function i(e,t,n){var a=t-e;return mn(e)?Zm(e,i(0,e.length),t):Ya(n,function(r){return(a+(r-e)%a)%a+e})},t0=function i(e,t,n){var a=t-e,r=a*2;return mn(e)?Zm(e,i(0,e.length-1),t):Ya(n,function(s){return s=(r+(s-e)%r)%r||0,e+(s>a?r-s:s)})},fo=function(e){return e.replace(I_,function(t){var n=t.indexOf("[")+1,a=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(z_);return Ym(n?a:+a[0],n?0:+a[1],+a[2]||1e-5)})},Jm=function(e,t,n,a,r){var s=t-e,o=a-n;return Ya(r,function(c){return n+((c-e)/s*o||0)})},n0=function i(e,t,n,a){var r=isNaN(e+t)?0:function(h){return(1-h)*e+h*t};if(!r){var s=en(e),o={},c,l,d,f,u;if(n===!0&&(a=1)&&(n=null),s)e={p:e},t={p:t};else if(mn(e)&&!mn(t)){for(d=[],f=e.length,u=f-2,l=1;l<f;l++)d.push(i(e[l-1],e[l]));f--,r=function(g){g*=f;var m=Math.min(u,~~g);return d[m](g-m)},n=t}else a||(e=hs(mn(e)?[]:{},e));if(!d){for(c in t)cf.call(o,e,c,"get",t[c]);r=function(g){return hf(g,o)||(s?e.p:e)}}}return Ya(n,r)},mh=function(e,t,n){var a=e.labels,r=li,s,o,c;for(s in a)o=a[s]-t,o<0==!!n&&o&&r>(o=Math.abs(o))&&(c=s,r=o);return c},Yn=function(e,t,n){var a=e.vars,r=a[t],s=Tt,o=e._ctx,c,l,d;if(r)return c=a[t+"Params"],l=a.callbackScope||e,n&&Oa.length&&Nl(),o&&(Tt=o),d=c?r.apply(l,c):r.call(l),Tt=s,d},Bs=function(e){return $a(e),e.scrollTrigger&&e.scrollTrigger.kill(!!an),e.progress()<1&&Yn(e,"onInterrupt"),e},es,jm=[],Qm=function(e){if(e)if(e=!e.name&&e.default||e,tf()||e.headless){var t=e.name,n=Ut(e),a=t&&!n&&e.init?function(){this._props=[]}:e,r={init:uo,render:hf,add:cf,kill:y0,modifier:_0,rawVars:0},s={targetTest:0,get:0,getSetter:ff,aliases:{},register:0};if(gs(),e!==a){if($n[t])return;ei(a,ei(Ol(e,r),s)),hs(a.prototype,hs(r,Ol(e,s))),$n[a.prop=t]=a,e.targetTest&&(Sl.push(a),rf[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}zm(t,a),e.register&&e.register(Un,a,Ln)}else jm.push(e)},_t=255,Hs={aqua:[0,_t,_t],lime:[0,_t,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,_t],navy:[0,0,128],white:[_t,_t,_t],olive:[128,128,0],yellow:[_t,_t,0],orange:[_t,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[_t,0,0],pink:[_t,192,203],cyan:[0,_t,_t],transparent:[_t,_t,_t,0]},Oc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*_t+.5|0},eg=function(e,t,n){var a=e?sa(e)?[e>>16,e>>8&_t,e&_t]:0:Hs.black,r,s,o,c,l,d,f,u,h,g;if(!a){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Hs[e])a=Hs[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),s=e.charAt(2),o=e.charAt(3),e="#"+r+r+s+s+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return a=parseInt(e.substr(1,6),16),[a>>16,a>>8&_t,a&_t,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),a=[e>>16,e>>8&_t,e&_t]}else if(e.substr(0,3)==="hsl"){if(a=g=e.match(dh),!t)c=+a[0]%360/360,l=+a[1]/100,d=+a[2]/100,s=d<=.5?d*(l+1):d+l-d*l,r=d*2-s,a.length>3&&(a[3]*=1),a[0]=Oc(c+1/3,r,s),a[1]=Oc(c,r,s),a[2]=Oc(c-1/3,r,s);else if(~e.indexOf("="))return a=e.match(Cm),n&&a.length<4&&(a[3]=1),a}else a=e.match(dh)||Hs.transparent;a=a.map(Number)}return t&&!g&&(r=a[0]/_t,s=a[1]/_t,o=a[2]/_t,f=Math.max(r,s,o),u=Math.min(r,s,o),d=(f+u)/2,f===u?c=l=0:(h=f-u,l=d>.5?h/(2-f-u):h/(f+u),c=f===r?(s-o)/h+(s<o?6:0):f===s?(o-r)/h+2:(r-s)/h+4,c*=60),a[0]=~~(c+.5),a[1]=~~(l*100+.5),a[2]=~~(d*100+.5)),n&&a.length<4&&(a[3]=1),a},tg=function(e){var t=[],n=[],a=-1;return e.split(Fa).forEach(function(r){var s=r.match(Qr)||[];t.push.apply(t,s),n.push(a+=s.length+1)}),t.c=n,t},gh=function(e,t,n){var a="",r=(e+a).match(Fa),s=t?"hsla(":"rgba(",o=0,c,l,d,f;if(!r)return e;if(r=r.map(function(u){return(u=eg(u,t,1))&&s+(t?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(d=tg(e),c=n.c,c.join(a)!==d.c.join(a)))for(l=e.replace(Fa,"1").split(Qr),f=l.length-1;o<f;o++)a+=l[o]+(~c.indexOf(o)?r.shift()||s+"0,0,0,0)":(d.length?d:r.length?r:n).shift());if(!l)for(l=e.split(Fa),f=l.length-1;o<f;o++)a+=l[o]+r[o];return a+l[f]},Fa=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Hs)i+="|"+e+"\\b";return new RegExp(i+")","gi")}(),i0=/hsl[a]?\(/,ng=function(e){var t=e.join(" "),n;if(Fa.lastIndex=0,Fa.test(t))return n=i0.test(t),e[1]=gh(e[1],n),e[0]=gh(e[0],n,tg(e[1])),!0},ho,Wn=function(){var i=Date.now,e=500,t=33,n=i(),a=n,r=1e3/240,s=r,o=[],c,l,d,f,u,h,g=function m(p){var v=i()-a,y=p===!0,T,b,S,k;if((v>e||v<0)&&(n+=v-t),a+=v,S=a-n,T=S-s,(T>0||y)&&(k=++f.frame,u=S-f.time*1e3,f.time=S=S/1e3,s+=T+(T>=r?4:r-T),b=1),y||(c=l(m)),b)for(h=0;h<o.length;h++)o[h](S,u,k,p)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return u/(1e3/(p||60))},wake:function(){Dm&&(!$d&&tf()&&(Li=$d=window,nf=Li.document||{},Qn.gsap=Un,(Li.gsapVersions||(Li.gsapVersions=[])).push(Un.version),Im(Ul||Li.GreenSockGlobals||!Li.gsap&&Li||{}),jm.forEach(Qm)),d=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&f.sleep(),l=d||function(p){return setTimeout(p,s-f.time*1e3+1|0)},ho=1,g(2))},sleep:function(){(d?cancelAnimationFrame:clearTimeout)(c),ho=0,l=uo},lagSmoothing:function(p,v){e=p||1/0,t=Math.min(v||33,e)},fps:function(p){r=1e3/(p||240),s=f.time*1e3+r},add:function(p,v,y){var T=v?function(b,S,k,A){p(b,S,k,A),f.remove(T)}:p;return f.remove(p),o[y?"unshift":"push"](T),gs(),T},remove:function(p,v){~(v=o.indexOf(p))&&o.splice(v,1)&&h>=v&&h--},_listeners:o},f}(),gs=function(){return!ho&&Wn.wake()},it={},a0=/^[\d.\-M][\d.\-,\s]/,r0=/["']/g,s0=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),a=n[0],r=1,s=n.length,o,c,l;r<s;r++)c=n[r],o=r!==s-1?c.lastIndexOf(","):c.length,l=c.substr(0,o),t[a]=isNaN(l)?l.replace(r0,"").trim():+l,a=c.substr(o+1).trim();return t},o0=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),a=e.indexOf("(",t);return e.substring(t,~a&&a<n?e.indexOf(")",n+1):n)},l0=function(e){var t=(e+"").split("("),n=it[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[s0(t[1])]:o0(e).split(",").map(Fm)):it._CE&&a0.test(e)?it._CE("",e):n},c0=function(e){return function(t){return 1-e(1-t)}},yr=function(e,t){return e&&(Ut(e)?e:it[e]||l0(e))||t},wr=function(e,t,n,a){n===void 0&&(n=function(c){return 1-t(1-c)}),a===void 0&&(a=function(c){return c<.5?t(c*2)/2:1-t((1-c)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:a},s;return Rn(e,function(o){it[o]=Qn[o]=r,it[s=o.toLowerCase()]=n;for(var c in r)it[s+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=it[o+"."+c]=r[c]}),r},ig=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Fc=function i(e,t,n){var a=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),s=r/Hd*(Math.asin(1/a)||0),o=function(d){return d===1?1:a*Math.pow(2,-10*d)*D_((d-s)*r)+1},c=e==="out"?o:e==="in"?function(l){return 1-o(1-l)}:ig(o);return r=Hd/r,c.config=function(l,d){return i(e,l,d)},c},Bc=function i(e,t){t===void 0&&(t=1.70158);var n=function(s){return s?--s*s*((t+1)*s+t)+1:0},a=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:ig(n);return a.config=function(r){return i(e,r)},a};Rn("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;wr(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});it.Linear.easeNone=it.none=it.Linear.easeIn;wr("Elastic",Fc("in"),Fc("out"),Fc());(function(i,e){var t=1/e,n=2*t,a=2.5*t,r=function(o){return o<t?i*o*o:o<n?i*Math.pow(o-1.5/e,2)+.75:o<a?i*(o-=2.25/e)*o+.9375:i*Math.pow(o-2.625/e,2)+.984375};wr("Bounce",function(s){return 1-r(1-s)},r)})(7.5625,2.75);wr("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});wr("Circ",function(i){return-(Rm(1-i*i)-1)});wr("Sine",function(i){return i===1?1:-P_(i*L_)+1});wr("Back",Bc("in"),Bc("out"),Bc());it.SteppedEase=it.steps=Qn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,a=e+(t?0:1),r=t?1:0,s=1-yt;return function(o){return((a*Ro(0,s,o)|0)+r)*n}}};lo.ease=it["quad.out"];Rn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return sf+=i+","+i+"Params,"});var ag=function(e,t){this.id=C_++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Nm,this.set=t?t.getSetter:ff},po=function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ms(this,+t.duration,1,1),this.data=t.data,Tt&&(this._ctx=Tt,Tt.data.push(this)),ho||Wn.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,ms(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,a){if(gs(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(hc(this,n),!r._dp||r.parent||$m(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ii(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!a||this._initted&&Math.abs(this._zTime)===yt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Om(this,n,a)),this},e.time=function(n,a){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+hh(this))%(this._dur+this._rDelay)||(n?this._dur:0),a):this._time},e.totalProgress=function(n,a){return arguments.length?this.totalTime(this.totalDuration()*n,a):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,a){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+hh(this),a):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,a){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,a):this._repeat?ps(this._tTime,r)+1:1},e.timeScale=function(n,a){if(!arguments.length)return this._rts===-yt?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Fl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-yt?0:this._rts,this.totalTime(Ro(-Math.abs(this._delay),this.totalDuration(),r),a!==!1),fc(this),G_(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(gs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==yt&&(this._tTime-=yt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Rt(n);var a=this.parent||this._dp;return a&&(a._sort||!this.parent)&&Ii(a,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(An(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var a=this.parent||this._dp;return a?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Fl(a.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=F_);var a=an;return an=n,lf(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),an=a,this},e.globalTime=function(n){for(var a=this,r=arguments.length?n:a.rawTime();a;)r=a._start+r/(Math.abs(a._ts)||1),a=a._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,ph(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var a=this._time;return this._rDelay=n,ph(this),a?this.time(a):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,a){return this.totalTime(ri(this,n),An(a))},e.restart=function(n,a){return this.play().totalTime(n?-this._delay:0,An(a)),this._dur||(this._zTime=-yt),this},e.play=function(n,a){return n!=null&&this.seek(n,a),this.reversed(!1).paused(!1)},e.reverse=function(n,a){return n!=null&&this.seek(n||this.totalDuration(),a),this.reversed(!0).paused(!1)},e.pause=function(n,a){return n!=null&&this.seek(n,a),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-yt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-yt,this},e.isActive=function(){var n=this.parent||this._dp,a=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=a&&r<this.endTime(!0)-yt)},e.eventCallback=function(n,a,r){var s=this.vars;return arguments.length>1?(a?(s[n]=a,r&&(s[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=a)):delete s[n],this):s[n]},e.then=function(n){var a=this,r=a._prom;return new Promise(function(s){var o=Ut(n)?n:Bm,c=function(){var d=a.then;a.then=null,r&&r(),Ut(o)&&(o=o(a))&&(o.then||o===a)&&(a.then=d),s(o),a.then=d};a._initted&&a.totalProgress()===1&&a._ts>=0||!a._tTime&&a._ts<0?c():a._prom=c})},e.kill=function(){Bs(this)},i}();ei(po.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-yt,_prom:0,_ps:!1,_rts:1});var Tn=function(i){Am(e,i);function e(n,a){var r;return n===void 0&&(n={}),r=i.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=An(n.sortChildren),Lt&&Ii(n.parent||Lt,ji(r),a),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Gm(ji(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(a,r,s){return Qs(0,arguments,this),this},t.from=function(a,r,s){return Qs(1,arguments,this),this},t.fromTo=function(a,r,s,o){return Qs(2,arguments,this),this},t.set=function(a,r,s){return r.duration=0,r.parent=this,js(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Ht(a,r,ri(this,s),1),this},t.call=function(a,r,s){return Ii(this,Ht.delayedCall(0,a,r),s)},t.staggerTo=function(a,r,s,o,c,l,d){return s.duration=r,s.stagger=s.stagger||o,s.onComplete=l,s.onCompleteParams=d,s.parent=this,new Ht(a,s,ri(this,c)),this},t.staggerFrom=function(a,r,s,o,c,l,d){return s.runBackwards=1,js(s).immediateRender=An(s.immediateRender),this.staggerTo(a,r,s,o,c,l,d)},t.staggerFromTo=function(a,r,s,o,c,l,d,f){return o.startAt=s,js(o).immediateRender=An(o.immediateRender),this.staggerTo(a,r,o,c,l,d,f)},t.render=function(a,r,s){var o=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,d=a<=0?0:Rt(a),f=this._zTime<0!=a<0&&(this._initted||!l),u,h,g,m,p,v,y,T,b,S,k,A;if(this!==Lt&&d>c&&a>=0&&(d=c),d!==this._tTime||s||f){if(o!==this._time&&l&&(d+=this._time-o,a+=this._time-o),u=d,b=this._start,T=this._ts,v=!T,f&&(l||(o=this._zTime),(a||!r)&&(this._zTime=a)),this._repeat){if(k=this._yoyo,p=l+this._rDelay,this._repeat<-1&&a<0)return this.totalTime(p*100+a,r,s);if(u=Rt(d%p),d===c?(m=this._repeat,u=l):(S=Rt(d/p),m=~~S,m&&m===S&&(u=l,m--),u>l&&(u=l)),S=ps(this._tTime,p),!o&&this._tTime&&S!==m&&this._tTime-S*p-this._dur<=0&&(S=m),k&&m&1&&(u=l-u,A=1),m!==S&&!this._lock){var x=k&&S&1,w=x===(k&&m&1);if(m<S&&(x=!x),o=x?0:d%l?l:d,this._lock=1,this.render(o||(A?0:Rt(m*p)),r,!l)._lock=0,this._tTime=d,!r&&this.parent&&Yn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,S=m),o&&o!==this._time||v!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,w&&(this._lock=2,o=x?l:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!v)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=K_(this,Rt(o),Rt(u)),y&&(d-=u-(u=y._start))),this._tTime=d,this._time=u,this._act=!!T,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=a,o=0),!o&&d&&l&&!r&&!S&&(Yn(this,"onStart"),this._tTime!==d))return this;if(u>=o&&a>=0)for(h=this._first;h;){if(g=h._next,(h._act||u>=h._start)&&h._ts&&y!==h){if(h.parent!==this)return this.render(a,r,s);if(h.render(h._ts>0?(u-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(u-h._start)*h._ts,r,s),u!==this._time||!this._ts&&!v){y=0,g&&(d+=this._zTime=-yt);break}}h=g}else{h=this._last;for(var R=a<0?a:u;h;){if(g=h._prev,(h._act||R<=h._end)&&h._ts&&y!==h){if(h.parent!==this)return this.render(a,r,s);if(h.render(h._ts>0?(R-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(R-h._start)*h._ts,r,s||an&&lf(h)),u!==this._time||!this._ts&&!v){y=0,g&&(d+=this._zTime=R?-yt:yt);break}}h=g}}if(y&&!r&&(this.pause(),y.render(u>=o?0:-yt)._zTime=u>=o?1:-1,this._ts))return this._start=b,fc(this),this.render(a,r,s);this._onUpdate&&!r&&Yn(this,"onUpdate",!0),(d===c&&this._tTime>=this.totalDuration()||!d&&o)&&(b===this._start||Math.abs(T)!==Math.abs(this._ts))&&(this._lock||((a||!l)&&(d===c&&this._ts>0||!d&&this._ts<0)&&$a(this,1),!r&&!(a<0&&!o)&&(d||o||!c)&&(Yn(this,d===c&&a>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(d<c&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(a,r){var s=this;if(sa(r)||(r=ri(this,r,a)),!(a instanceof po)){if(mn(a))return a.forEach(function(o){return s.add(o,r)}),this;if(en(a))return this.addLabel(a,r);if(Ut(a))a=Ht.delayedCall(0,a);else return this}return this!==a?Ii(this,a,r):this},t.getChildren=function(a,r,s,o){a===void 0&&(a=!0),r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=-li);for(var c=[],l=this._first;l;)l._start>=o&&(l instanceof Ht?r&&c.push(l):(s&&c.push(l),a&&c.push.apply(c,l.getChildren(!0,r,s)))),l=l._next;return c},t.getById=function(a){for(var r=this.getChildren(1,1,1),s=r.length;s--;)if(r[s].vars.id===a)return r[s]},t.remove=function(a){return en(a)?this.removeLabel(a):Ut(a)?this.killTweensOf(a):(a.parent===this&&uc(this,a),a===this._recent&&(this._recent=this._last),_r(this))},t.totalTime=function(a,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Rt(Wn.time-(this._ts>0?a/this._ts:(this.totalDuration()-a)/-this._ts))),i.prototype.totalTime.call(this,a,r),this._forcing=0,this):this._tTime},t.addLabel=function(a,r){return this.labels[a]=ri(this,r),this},t.removeLabel=function(a){return delete this.labels[a],this},t.addPause=function(a,r,s){var o=Ht.delayedCall(0,r||uo,s);return o.data="isPause",this._hasPause=1,Ii(this,o,ri(this,a))},t.removePause=function(a){var r=this._first;for(a=ri(this,a);r;)r._start===a&&r.data==="isPause"&&$a(r),r=r._next},t.killTweensOf=function(a,r,s){for(var o=this.getTweensOf(a,s),c=o.length;c--;)Ra!==o[c]&&o[c].kill(a,r);return this},t.getTweensOf=function(a,r){for(var s=[],o=ci(a),c=this._first,l=sa(r),d;c;)c instanceof Ht?B_(c._targets,o)&&(l?(!Ra||c._initted&&c._ts)&&c.globalTime(0)<=r&&c.globalTime(c.totalDuration())>r:!r||c.isActive())&&s.push(c):(d=c.getTweensOf(o,r)).length&&s.push.apply(s,d),c=c._next;return s},t.tweenTo=function(a,r){r=r||{};var s=this,o=ri(s,a),c=r,l=c.startAt,d=c.onStart,f=c.onStartParams,u=c.immediateRender,h,g=Ht.to(s,ei({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(l&&"time"in l?l.time:s._time))/s.timeScale())||yt,onStart:function(){if(s.pause(),!h){var p=r.duration||Math.abs((o-(l&&"time"in l?l.time:s._time))/s.timeScale());g._dur!==p&&ms(g,p,0,1).render(g._time,!0,!0),h=1}d&&d.apply(g,f||[])}},r));return u?g.render(0):g},t.tweenFromTo=function(a,r,s){return this.tweenTo(r,ei({startAt:{time:ri(this,a)}},s))},t.recent=function(){return this._recent},t.nextLabel=function(a){return a===void 0&&(a=this._time),mh(this,ri(this,a))},t.previousLabel=function(a){return a===void 0&&(a=this._time),mh(this,ri(this,a),1)},t.currentLabel=function(a){return arguments.length?this.seek(a,!0):this.previousLabel(this._time+yt)},t.shiftChildren=function(a,r,s){s===void 0&&(s=0);var o=this._first,c=this.labels,l;for(a=Rt(a);o;)o._start>=s&&(o._start+=a,o._end+=a),o=o._next;if(r)for(l in c)c[l]>=s&&(c[l]+=a);return _r(this)},t.invalidate=function(a){var r=this._first;for(this._lock=0;r;)r.invalidate(a),r=r._next;return i.prototype.invalidate.call(this,a)},t.clear=function(a){a===void 0&&(a=!0);for(var r=this._first,s;r;)s=r._next,this.remove(r),r=s;return this._dp&&(this._time=this._tTime=this._pTime=0),a&&(this.labels={}),_r(this)},t.totalDuration=function(a){var r=0,s=this,o=s._last,c=li,l,d,f;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-a:a));if(s._dirty){for(f=s.parent;o;)l=o._prev,o._dirty&&o.totalDuration(),d=o._start,d>c&&s._sort&&o._ts&&!s._lock?(s._lock=1,Ii(s,o,d-o._delay,1)._lock=0):c=d,d<0&&o._ts&&(r-=d,(!f&&!s._dp||f&&f.smoothChildTiming)&&(s._start+=Rt(d/s._ts),s._time-=d,s._tTime-=d),s.shiftChildren(-d,!1,-1/0),c=0),o._end>r&&o._ts&&(r=o._end),o=l;ms(s,s===Lt&&s._time>r?s._time:r,1,1),s._dirty=0}return s._tDur},e.updateRoot=function(a){if(Lt._ts&&(Om(Lt,Fl(a,Lt)),Um=Wn.frame),Wn.frame>=uh){uh+=jn.autoSleep||120;var r=Lt._first;if((!r||!r._ts)&&jn.autoSleep&&Wn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Wn.sleep()}}},e}(po);ei(Tn.prototype,{_lock:0,_hasPause:0,_forcing:0});var d0=function(e,t,n,a,r,s,o){var c=new Ln(this._pt,e,t,0,1,dg,null,r),l=0,d=0,f,u,h,g,m,p,v,y;for(c.b=n,c.e=a,n+="",a+="",(v=~a.indexOf("random("))&&(a=fo(a)),s&&(y=[n,a],s(y,e,t),n=y[0],a=y[1]),u=n.match(Uc)||[];f=Uc.exec(a);)g=f[0],m=a.substring(l,f.index),h?h=(h+1)%5:m.substr(-5)==="rgba("&&(h=1),g!==u[d++]&&(p=parseFloat(u[d-1])||0,c._pt={_next:c._pt,p:m||d===1?m:",",s:p,c:g.charAt(1)==="="?rs(p,g)-p:parseFloat(g)-p,m:h&&h<4?Math.round:0},l=Uc.lastIndex);return c.c=l<a.length?a.substring(l,a.length):"",c.fp=o,(Pm.test(a)||v)&&(c.e=0),this._pt=c,c},cf=function(e,t,n,a,r,s,o,c,l,d){Ut(a)&&(a=a(r||0,e,s));var f=e[t],u=n!=="get"?n:Ut(f)?l?e[t.indexOf("set")||!Ut(e["get"+t.substr(3)])?t:"get"+t.substr(3)](l):e[t]():f,h=Ut(f)?l?m0:lg:uf,g;if(en(a)&&(~a.indexOf("random(")&&(a=fo(a)),a.charAt(1)==="="&&(g=rs(u,a)+(pn(u)||0),(g||g===0)&&(a=g))),!d||u!==a||Yd)return!isNaN(u*a)&&a!==""?(g=new Ln(this._pt,e,t,+u||0,a-(u||0),typeof f=="boolean"?v0:cg,0,h),l&&(g.fp=l),o&&g.modifier(o,this,e),this._pt=g):(!f&&!(t in e)&&af(t,a),d0.call(this,e,t,u,a,h,c||jn.stringFilter,l))},u0=function(e,t,n,a,r){if(Ut(e)&&(e=eo(e,r,t,n,a)),!Hi(e)||e.style&&e.nodeType||mn(e)||Lm(e))return en(e)?eo(e,r,t,n,a):e;var s={},o;for(o in e)s[o]=eo(e[o],r,t,n,a);return s},rg=function(e,t,n,a,r,s){var o,c,l,d;if($n[e]&&(o=new $n[e]).init(r,o.rawVars?t[e]:u0(t[e],a,r,s,n),n,a,s)!==!1&&(n._pt=c=new Ln(n._pt,r,e,0,1,o.render,o,0,o.priority),n!==es))for(l=n._ptLookup[n._targets.indexOf(r)],d=o._props.length;d--;)l[o._props[d]]=c;return o},Ra,Yd,df=function i(e,t,n){var a=e.vars,r=a.ease,s=a.startAt,o=a.immediateRender,c=a.lazy,l=a.onUpdate,d=a.runBackwards,f=a.yoyoEase,u=a.keyframes,h=a.autoRevert,g=e._dur,m=e._startAt,p=e._targets,v=e.parent,y=v&&v.data==="nested"?v.vars.targets:p,T=e._overwrite==="auto"&&!Qu,b=e.timeline,S=a.easeReverse||f,k,A,x,w,R,L,z,F,C,H,D,P,Y;if(b&&(!u||!r)&&(r="none"),e._ease=yr(r,lo.ease),e._rEase=S&&(yr(S)||e._ease),e._from=!b&&!!a.runBackwards,e._from&&(e.ratio=1),!b||u&&!a.stagger){if(F=p[0]?vr(p[0]).harness:0,P=F&&a[F.prop],k=Ol(a,rf),m&&(m._zTime<0&&m.progress(1),t<0&&d&&o&&!h?m.render(-1,!0):m.revert(d&&g?bl:O_),m._lazy=0),s){if($a(e._startAt=Ht.set(p,ei({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:!m&&An(c),startAt:null,delay:0,onUpdate:l&&function(){return Yn(e,"onUpdate")},stagger:0},s))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(an||!o&&!h)&&e._startAt.revert(bl),o&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(d&&g&&!m){if(t&&(o=!1),x=ei({overwrite:!1,data:"isFromStart",lazy:o&&!m&&An(c),immediateRender:o,stagger:0,parent:v},k),P&&(x[F.prop]=P),$a(e._startAt=Ht.set(p,x)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(an?e._startAt.revert(bl):e._startAt.render(-1,!0)),e._zTime=t,!o)i(e._startAt,yt,yt);else if(!t)return}for(e._pt=e._ptCache=0,c=g&&An(c)||c&&!g,A=0;A<p.length;A++){if(R=p[A],z=R._gsap||of(p)[A]._gsap,e._ptLookup[A]=H={},Gd[z.id]&&Oa.length&&Nl(),D=y===p?A:y.indexOf(R),F&&(C=new F).init(R,P||k,e,D,y)!==!1&&(e._pt=w=new Ln(e._pt,R,C.name,0,1,C.render,C,0,C.priority),C._props.forEach(function($){H[$]=w}),C.priority&&(L=1)),!F||P)for(x in k)$n[x]&&(C=rg(x,k,e,D,R,y))?C.priority&&(L=1):H[x]=w=cf.call(e,R,x,"get",k[x],D,y,0,a.stringFilter);e._op&&e._op[A]&&e.kill(R,e._op[A]),T&&e._pt&&(Ra=e,Lt.killTweensOf(R,H,e.globalTime(t)),Y=!e.parent,Ra=0),e._pt&&c&&(Gd[z.id]=1)}L&&ug(e),e._onInit&&e._onInit(e)}e._onUpdate=l,e._initted=(!e._op||e._pt)&&!Y,u&&t<=0&&b.render(li,!0,!0)},f0=function(e,t,n,a,r,s,o,c){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],d,f,u,h;if(!l)for(l=e._ptCache[t]=[],u=e._ptLookup,h=e._targets.length;h--;){if(d=u[h][t],d&&d.d&&d.d._pt)for(d=d.d._pt;d&&d.p!==t&&d.fp!==t;)d=d._next;if(!d)return Yd=1,e.vars[t]="+=0",df(e,o),Yd=0,c?co(t+" not eligible for reset. Try splitting into individual properties"):1;l.push(d)}for(h=l.length;h--;)f=l[h],d=f._pt||f,d.s=(a||a===0)&&!r?a:d.s+(a||0)+s*d.c,d.c=n-d.s,f.e&&(f.e=Ot(n)+pn(f.e)),f.b&&(f.b=d.s+pn(f.b))},h0=function(e,t){var n=e[0]?vr(e[0]).harness:0,a=n&&n.aliases,r,s,o,c;if(!a)return t;r=hs({},t);for(s in a)if(s in r)for(c=a[s].split(","),o=c.length;o--;)r[c[o]]=r[s];return r},p0=function(e,t,n,a){var r=t.ease||a||"power1.inOut",s,o;if(mn(t))o=n[e]||(n[e]=[]),t.forEach(function(c,l){return o.push({t:l/(t.length-1)*100,v:c,e:r})});else for(s in t)o=n[s]||(n[s]=[]),s==="ease"||o.push({t:parseFloat(e),v:t[s],e:r})},eo=function(e,t,n,a,r){return Ut(e)?e.call(t,n,a,r):en(e)&&~e.indexOf("random(")?fo(e):e},sg=sf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",og={};Rn(sg+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return og[i]=1});var Ht=function(i){Am(e,i);function e(n,a,r,s){var o;typeof a=="number"&&(r.duration=a,a=r,r=null),o=i.call(this,s?a:js(a))||this;var c=o.vars,l=c.duration,d=c.delay,f=c.immediateRender,u=c.stagger,h=c.overwrite,g=c.keyframes,m=c.defaults,p=c.scrollTrigger,v=a.parent||Lt,y=(mn(n)||Lm(n)?sa(n[0]):"length"in a)?[n]:ci(n),T,b,S,k,A,x,w,R;if(o._targets=y.length?of(y):co("GSAP target "+n+" not found. https://gsap.com",!jn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=h,g||u||$o(l)||$o(d)){a=o.vars;var L=a.easeReverse||a.yoyoEase;if(T=o.timeline=new Tn({data:"nested",defaults:m||{},targets:v&&v.data==="nested"?v.vars.targets:y}),T.kill(),T.parent=T._dp=ji(o),T._start=0,u||$o(l)||$o(d)){if(k=y.length,w=u&&Km(u),Hi(u))for(A in u)~sg.indexOf(A)&&(R||(R={}),R[A]=u[A]);for(b=0;b<k;b++)S=Ol(a,og),S.stagger=0,L&&(S.easeReverse=L),R&&hs(S,R),x=y[b],S.duration=+eo(l,ji(o),b,x,y),S.delay=(+eo(d,ji(o),b,x,y)||0)-o._delay,!u&&k===1&&S.delay&&(o._delay=d=S.delay,o._start+=d,S.delay=0),T.to(x,S,w?w(b,x,y):0),T._ease=it.none;T.duration()?l=d=0:o.timeline=0}else if(g){js(ei(T.vars.defaults,{ease:"none"})),T._ease=yr(g.ease||a.ease||"none");var z=0,F,C,H;if(mn(g))g.forEach(function(D){return T.to(y,D,">")}),T.duration();else{S={};for(A in g)A==="ease"||A==="easeEach"||p0(A,g[A],S,g.easeEach);for(A in S)for(F=S[A].sort(function(D,P){return D.t-P.t}),z=0,b=0;b<F.length;b++)C=F[b],H={ease:C.e,duration:(C.t-(b?F[b-1].t:0))/100*l},H[A]=C.v,T.to(y,H,z),z+=H.duration;T.duration()<l&&T.to({},{duration:l-T.duration()})}}l||o.duration(l=T.duration())}else o.timeline=0;return h===!0&&!Qu&&(Ra=ji(o),Lt.killTweensOf(y),Ra=0),Ii(v,ji(o),r),a.reversed&&o.reverse(),a.paused&&o.paused(!0),(f||!l&&!g&&o._start===Rt(v._time)&&An(f)&&V_(ji(o))&&v.data!=="nested")&&(o._tTime=-yt,o.render(Math.max(0,-d)||0)),p&&Gm(ji(o),p),o}var t=e.prototype;return t.render=function(a,r,s){var o=this._time,c=this._tDur,l=this._dur,d=a<0,f=a>c-yt&&!d?c:a<yt?0:a,u,h,g,m,p,v,y,T;if(!l)W_(this,a,r,s);else if(f!==this._tTime||!a||s||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==d||this._lazy){if(u=f,T=this.timeline,this._repeat){if(m=l+this._rDelay,this._repeat<-1&&d)return this.totalTime(m*100+a,r,s);if(u=Rt(f%m),f===c?(g=this._repeat,u=l):(p=Rt(f/m),g=~~p,g&&g===p?(u=l,g--):u>l&&(u=l)),v=this._yoyo&&g&1,v&&(u=l-u),p=ps(this._tTime,m),u===o&&!s&&this._initted&&g===p)return this._tTime=f,this;g!==p&&this.vars.repeatRefresh&&!v&&!this._lock&&u!==m&&this._initted&&(this._lock=s=1,this.render(Rt(m*g),!0).invalidate()._lock=0)}if(!this._initted){if(Vm(this,d?a:u,s,r,f))return this._tTime=0,this;if(o!==this._time&&!(s&&this.vars.repeatRefresh&&g!==p))return this;if(l!==this._dur)return this.render(a,r,s)}if(this._rEase){var b=u<o;if(b!==this._inv){var S=b?o:l-o;this._inv=b,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=S?(b?-1:1)/S:0,this._invScale=b?-this.ratio:1-this.ratio,this._invEase=b?this._rEase:this._ease}this.ratio=y=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=y=this._ease(u/l);if(this._from&&(this.ratio=y=1-y),this._tTime=f,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&f&&!r&&!p&&(Yn(this,"onStart"),this._tTime!==f))return this;for(h=this._pt;h;)h.r(y,h.d),h=h._next;T&&T.render(a<0?a:T._dur*T._ease(u/this._dur),r,s)||this._startAt&&(this._zTime=a),this._onUpdate&&!r&&(d&&Vd(this,a,r,s),Yn(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!r&&this.parent&&Yn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(d&&!this._onUpdate&&Vd(this,a,!0,!0),(a||!l)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&$a(this,1),!r&&!(d&&!o)&&(f||o||v)&&(Yn(this,f===c?"onComplete":"onReverseComplete",!0),this._prom&&!(f<c&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(a){return(!a||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(a),i.prototype.invalidate.call(this,a)},t.resetTo=function(a,r,s,o,c){ho||Wn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),d;return this._initted||df(this,l),d=this._ease(l/this._dur),f0(this,a,r,s,o,d,l,c)?this.resetTo(a,r,s,o,1):(hc(this,0),this.parent||Hm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(a,r){if(r===void 0&&(r="all"),!a&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Bs(this):this.scrollTrigger&&this.scrollTrigger.kill(!!an),this;if(this.timeline){var s=this.timeline.totalDuration();return this.timeline.killTweensOf(a,r,Ra&&Ra.vars.overwrite!==!0)._first||Bs(this),this.parent&&s!==this.timeline.totalDuration()&&ms(this,this._dur*this.timeline._tDur/s,0,1),this}var o=this._targets,c=a?ci(a):o,l=this._ptLookup,d=this._pt,f,u,h,g,m,p,v;if((!r||r==="all")&&$_(o,c))return r==="all"&&(this._pt=0),Bs(this);for(f=this._op=this._op||[],r!=="all"&&(en(r)&&(m={},Rn(r,function(y){return m[y]=1}),r=m),r=h0(o,r)),v=o.length;v--;)if(~c.indexOf(o[v])){u=l[v],r==="all"?(f[v]=r,g=u,h={}):(h=f[v]=f[v]||{},g=r);for(m in g)p=u&&u[m],p&&((!("kill"in p.d)||p.d.kill(m)===!0)&&uc(this,p,"_pt"),delete u[m]),h!=="all"&&(h[m]=1)}return this._initted&&!this._pt&&d&&Bs(this),this},e.to=function(a,r){return new e(a,r,arguments[2])},e.from=function(a,r){return Qs(1,arguments)},e.delayedCall=function(a,r,s,o){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:a,onComplete:r,onReverseComplete:r,onCompleteParams:s,onReverseCompleteParams:s,callbackScope:o})},e.fromTo=function(a,r,s){return Qs(2,arguments)},e.set=function(a,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(a,r)},e.killTweensOf=function(a,r,s){return Lt.killTweensOf(a,r,s)},e}(po);ei(Ht.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Rn("staggerTo,staggerFrom,staggerFromTo",function(i){Ht[i]=function(){var e=new Tn,t=Wd.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var uf=function(e,t,n){return e[t]=n},lg=function(e,t,n){return e[t](n)},m0=function(e,t,n,a){return e[t](a.fp,n)},g0=function(e,t,n){return e.setAttribute(t,n)},ff=function(e,t){return Ut(e[t])?lg:ef(e[t])&&e.setAttribute?g0:uf},cg=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},v0=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},dg=function(e,t){var n=t._pt,a="";if(!e&&t.b)a=t.b;else if(e===1&&t.e)a=t.e;else{for(;n;)a=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+a,n=n._next;a+=t.c}t.set(t.t,t.p,a,t)},hf=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},_0=function(e,t,n,a){for(var r=this._pt,s;r;)s=r._next,r.p===a&&r.modifier(e,t,n),r=s},y0=function(e){for(var t=this._pt,n,a;t;)a=t._next,t.p===e&&!t.op||t.op===e?uc(this,t,"_pt"):t.dep||(n=1),t=a;return!n},x0=function(e,t,n,a){a.mSet(e,t,a.m.call(a.tween,n,a.mt),a)},ug=function(e){for(var t=e._pt,n,a,r,s;t;){for(n=t._next,a=r;a&&a.pr>t.pr;)a=a._next;(t._prev=a?a._prev:s)?t._prev._next=t:r=t,(t._next=a)?a._prev=t:s=t,t=n}e._pt=r},Ln=function(){function i(t,n,a,r,s,o,c,l,d){this.t=n,this.s=r,this.c=s,this.p=a,this.r=o||cg,this.d=c||this,this.set=l||uf,this.pr=d||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,a,r){this.mSet=this.mSet||this.set,this.set=x0,this.m=n,this.mt=r,this.tween=a},i}();Rn(sf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(i){return rf[i]=1});Qn.TweenMax=Qn.TweenLite=Ht;Qn.TimelineLite=Qn.TimelineMax=Tn;Lt=new Tn({sortChildren:!1,defaults:lo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});jn.stringFilter=ng;var xr=[],kl={},b0=[],vh=0,S0=0,Hc=function(e){return(kl[e]||b0).map(function(t){return t()})},Zd=function(){var e=Date.now(),t=[];e-vh>2&&(Hc("matchMediaInit"),xr.forEach(function(n){var a=n.queries,r=n.conditions,s,o,c,l;for(o in a)s=Li.matchMedia(a[o]).matches,s&&(c=1),s!==r[o]&&(r[o]=s,l=1);l&&(n.revert(),c&&t.push(n))}),Hc("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(a){return n.add(null,a)})}),vh=e,Hc("matchMedia"))},fg=function(){function i(t,n){this.selector=n&&Kd(n),this.data=[],this._r=[],this.isReverted=!1,this.id=S0++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,a,r){Ut(n)&&(r=a,a=n,n=Ut);var s=this,o=function(){var l=Tt,d=s.selector,f;return l&&l!==s&&l.data.push(s),r&&(s.selector=Kd(r)),Tt=s,f=a.apply(s,arguments),Ut(f)&&s._r.push(f),Tt=l,s.selector=d,s.isReverted=!1,f};return s.last=o,n===Ut?o(s,function(c){return s.add(null,c)}):n?s[n]=o:o},e.ignore=function(n){var a=Tt;Tt=null,n(this),Tt=a},e.getTweens=function(){var n=[];return this.data.forEach(function(a){return a instanceof i?n.push.apply(n,a.getTweens()):a instanceof Ht&&!(a.parent&&a.parent.data==="nested")&&n.push(a)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,a){var r=this;if(n?function(){for(var o=r.getTweens(),c=r.data.length,l;c--;)l=r.data[c],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(d){return o.splice(o.indexOf(d),1)}));for(o.map(function(d){return{g:d._dur||d._delay||d._sat&&!d._sat.vars.immediateRender?d.globalTime(0):-1/0,t:d}}).sort(function(d,f){return f.g-d.g||-1/0}).forEach(function(d){return d.t.revert(n)}),c=r.data.length;c--;)l=r.data[c],l instanceof Tn?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof Ht)&&l.revert&&l.revert(n);r._r.forEach(function(d){return d(n,r)}),r.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),a)for(var s=xr.length;s--;)xr[s].id===this.id&&xr.splice(s,1)},e.revert=function(n){this.kill(n||{})},i}(),k0=function(){function i(t){this.contexts=[],this.scope=t,Tt&&Tt.data.push(this)}var e=i.prototype;return e.add=function(n,a,r){Hi(n)||(n={matches:n});var s=new fg(0,r||this.scope),o=s.conditions={},c,l,d;Tt&&!s.selector&&(s.selector=Tt.selector),this.contexts.push(s),a=s.add("onMatch",a),s.queries=n;for(l in n)l==="all"?d=1:(c=Li.matchMedia(n[l]),c&&(xr.indexOf(s)<0&&xr.push(s),(o[l]=c.matches)&&(d=1),c.addListener?c.addListener(Zd):c.addEventListener("change",Zd)));return d&&a(s,function(f){return s.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(a){return a.kill(n,!0)})},i}(),Bl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(a){return Qm(a)})},timeline:function(e){return new Tn(e)},getTweensOf:function(e,t){return Lt.getTweensOf(e,t)},getProperty:function(e,t,n,a){en(e)&&(e=ci(e)[0]);var r=vr(e||{}).get,s=n?Bm:Fm;return n==="native"&&(n=""),e&&(t?s(($n[t]&&$n[t].get||r)(e,t,n,a)):function(o,c,l){return s(($n[o]&&$n[o].get||r)(e,o,c,l))})},quickSetter:function(e,t,n){if(e=ci(e),e.length>1){var a=e.map(function(d){return Un.quickSetter(d,t,n)}),r=a.length;return function(d){for(var f=r;f--;)a[f](d)}}e=e[0]||{};var s=$n[t],o=vr(e),c=o.harness&&(o.harness.aliases||{})[t]||t,l=s?function(d){var f=new s;es._pt=0,f.init(e,n?d+n:d,es,0,[e]),f.render(1,f),es._pt&&hf(1,es)}:o.set(e,c);return s?l:function(d){return l(e,c,n?d+n:d,o,1)}},quickTo:function(e,t,n){var a,r=Un.to(e,ei((a={},a[t]="+=0.1",a.paused=!0,a.stagger=0,a),n||{})),s=function(c,l,d){return r.resetTo(t,c,l,d)};return s.tween=r,s},isTweening:function(e){return Lt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=yr(e.ease,lo.ease)),fh(lo,e||{})},config:function(e){return fh(jn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,a=e.plugins,r=e.defaults,s=e.extendTimeline;(a||"").split(",").forEach(function(o){return o&&!$n[o]&&!Qn[o]&&co(t+" effect requires "+o+" plugin.")}),Nc[t]=function(o,c,l){return n(ci(o),ei(c||{},r),l)},s&&(Tn.prototype[t]=function(o,c,l){return this.add(Nc[t](o,Hi(c)?c:(l=c)&&{},this),l)})},registerEase:function(e,t){it[e]=yr(t)},parseEase:function(e,t){return arguments.length?yr(e,t):it},getById:function(e){return Lt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Tn(e),a,r;for(n.smoothChildTiming=An(e.smoothChildTiming),Lt.remove(n),n._dp=0,n._time=n._tTime=Lt._time,a=Lt._first;a;)r=a._next,(t||!(!a._dur&&a instanceof Ht&&a.vars.onComplete===a._targets[0]))&&Ii(n,a,a._start-a._delay),a=r;return Ii(Lt,n,0),n},context:function(e,t){return e?new fg(e,t):Tt},matchMedia:function(e){return new k0(e)},matchMediaRefresh:function(){return xr.forEach(function(e){var t=e.conditions,n,a;for(a in t)t[a]&&(t[a]=!1,n=1);n&&e.revert()})||Zd()},addEventListener:function(e,t){var n=kl[e]||(kl[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=kl[e],a=n&&n.indexOf(t);a>=0&&n.splice(a,1)},utils:{wrap:e0,wrapYoyo:t0,distribute:Km,random:Ym,snap:Xm,normalize:Q_,getUnit:pn,clamp:Y_,splitColor:eg,toArray:ci,selector:Kd,mapRange:Jm,pipe:J_,unitize:j_,interpolate:n0,shuffle:Wm},install:Im,effects:Nc,ticker:Wn,updateRoot:Tn.updateRoot,plugins:$n,globalTimeline:Lt,core:{PropTween:Ln,globals:zm,Tween:Ht,Timeline:Tn,Animation:po,getCache:vr,_removeLinkedListItem:uc,reverting:function(){return an},context:function(e){return e&&Tt&&(Tt.data.push(e),e._ctx=Tt),Tt},suppressOverwrites:function(e){return Qu=e}}};Rn("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return Bl[i]=Ht[i]});Wn.add(Tn.updateRoot);es=Bl.to({},{duration:0});var M0=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},E0=function(e,t){var n=e._targets,a,r,s;for(a in t)for(r=n.length;r--;)s=e._ptLookup[r][a],s&&(s=s.d)&&(s._pt&&(s=M0(s,a)),s&&s.modifier&&s.modifier(t[a],e,n[r],a))},$c=function(e,t){return{name:e,headless:1,rawVars:1,init:function(a,r,s){s._onInit=function(o){var c,l;if(en(r)&&(c={},Rn(r,function(d){return c[d]=1}),r=c),t){c={};for(l in r)c[l]=t(r[l]);r=c}E0(o,r)}}}},Un=Bl.registerPlugin({name:"attr",init:function(e,t,n,a,r){var s,o,c;this.tween=n;for(s in t)c=e.getAttribute(s)||"",o=this.add(e,"setAttribute",(c||0)+"",t[s],a,r,0,0,s),o.op=s,o.b=c,this._props.push(s)},render:function(e,t){for(var n=t._pt;n;)an?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},$c("roundProps",Xd),$c("modifiers"),$c("snap",Xm))||Bl;Ht.version=Tn.version=Un.version="3.15.0";Dm=1;tf()&&gs();it.Power0;it.Power1;it.Power2;it.Power3;it.Power4;it.Linear;it.Quad;it.Cubic;it.Quart;it.Quint;it.Strong;it.Elastic;it.Back;it.SteppedEase;it.Bounce;it.Sine;it.Expo;it.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var _h,La,ss,pf,hr,yh,mf,w0=function(){return typeof window<"u"},oa={},or=180/Math.PI,os=Math.PI/180,Pr=Math.atan2,xh=1e8,gf=/([A-Z])/g,T0=/(left|right|width|margin|padding|x)/i,A0=/[\s,\(]\S/,zi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Jd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},R0=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},L0=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},C0=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},P0=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},hg=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},pg=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},D0=function(e,t,n){return e.style[t]=n},I0=function(e,t,n){return e.style.setProperty(t,n)},z0=function(e,t,n){return e._gsap[t]=n},U0=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},N0=function(e,t,n,a,r){var s=e._gsap;s.scaleX=s.scaleY=n,s.renderTransform(r,s)},O0=function(e,t,n,a,r){var s=e._gsap;s[t]=n,s.renderTransform(r,s)},Ct="transform",Cn=Ct+"Origin",F0=function i(e,t){var n=this,a=this.target,r=a.style,s=a._gsap;if(e in oa&&r){if(this.tfm=this.tfm||{},e!=="transform")e=zi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=ea(a,o)}):this.tfm[e]=s.x?s[e]:ea(a,e),e===Cn&&(this.tfm.zOrigin=s.zOrigin);else return zi.transform.split(",").forEach(function(o){return i.call(n,o,t)});if(this.props.indexOf(Ct)>=0)return;s.svg&&(this.svgo=a.getAttribute("data-svg-origin"),this.props.push(Cn,t,"")),e=Ct}(r||t)&&this.props.push(e,t,r[e])},mg=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},B0=function(){var e=this.props,t=this.target,n=t.style,a=t._gsap,r,s;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(gf,"-$1").toLowerCase());if(this.tfm){for(s in this.tfm)a[s]=this.tfm[s];a.svg&&(a.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=mf(),(!r||!r.isStart)&&!n[Ct]&&(mg(n),a.zOrigin&&n[Cn]&&(n[Cn]+=" "+a.zOrigin+"px",a.zOrigin=0,a.renderTransform()),a.uncache=1)}},gg=function(e,t){var n={target:e,props:[],revert:B0,save:F0};return e._gsap||Un.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(a){return n.save(a)}),n},vg,jd=function(e,t){var n=La.createElementNS?La.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):La.createElement(e);return n&&n.style?n:La.createElement(e)},Zn=function i(e,t,n){var a=getComputedStyle(e);return a[t]||a.getPropertyValue(t.replace(gf,"-$1").toLowerCase())||a.getPropertyValue(t)||!n&&i(e,vs(t)||t,1)||""},bh="O,Moz,ms,Ms,Webkit".split(","),vs=function(e,t,n){var a=t||hr,r=a.style,s=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);s--&&!(bh[s]+e in r););return s<0?null:(s===3?"ms":s>=0?bh[s]:"")+e},Qd=function(){w0()&&window.document&&(_h=window,La=_h.document,ss=La.documentElement,hr=jd("div")||{style:{}},jd("div"),Ct=vs(Ct),Cn=Ct+"Origin",hr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",vg=!!vs("perspective"),mf=Un.core.reverting,pf=1)},Sh=function(e){var t=e.ownerSVGElement,n=jd("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),a=e.cloneNode(!0),r;a.style.display="block",n.appendChild(a),ss.appendChild(n);try{r=a.getBBox()}catch{}return n.removeChild(a),ss.removeChild(n),r},kh=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},_g=function(e){var t,n;try{t=e.getBBox()}catch{t=Sh(e),n=1}return t&&(t.width||t.height)||n||(t=Sh(e)),t&&!t.width&&!t.x&&!t.y?{x:+kh(e,["x","cx","x1"])||0,y:+kh(e,["y","cy","y1"])||0,width:0,height:0}:t},yg=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&_g(e))},Ga=function(e,t){if(t){var n=e.style,a;t in oa&&t!==Cn&&(t=Ct),n.removeProperty?(a=t.substr(0,2),(a==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(a==="--"?t:t.replace(gf,"-$1").toLowerCase())):n.removeAttribute(t)}},Ca=function(e,t,n,a,r,s){var o=new Ln(e._pt,t,n,0,1,s?pg:hg);return e._pt=o,o.b=a,o.e=r,e._props.push(n),o},Mh={deg:1,rad:1,turn:1},H0={grid:1,flex:1},Va=function i(e,t,n,a){var r=parseFloat(n)||0,s=(n+"").trim().substr((r+"").length)||"px",o=hr.style,c=T0.test(t),l=e.tagName.toLowerCase()==="svg",d=(l?"client":"offset")+(c?"Width":"Height"),f=100,u=a==="px",h=a==="%",g,m,p,v;if(a===s||!r||Mh[a]||Mh[s])return r;if(s!=="px"&&!u&&(r=i(e,t,n,"px")),v=e.getCTM&&yg(e),(h||s==="%")&&(oa[t]||~t.indexOf("adius")))return g=v?e.getBBox()[c?"width":"height"]:e[d],Ot(h?r/g*f:r/100*g);if(o[c?"width":"height"]=f+(u?s:a),m=a!=="rem"&&~t.indexOf("adius")||a==="em"&&e.appendChild&&!l?e:e.parentNode,v&&(m=(e.ownerSVGElement||{}).parentNode),(!m||m===La||!m.appendChild)&&(m=La.body),p=m._gsap,p&&h&&p.width&&c&&p.time===Wn.time&&!p.uncache)return Ot(r/p.width*f);if(h&&(t==="height"||t==="width")){var y=e.style[t];e.style[t]=f+a,g=e[d],y?e.style[t]=y:Ga(e,t)}else(h||s==="%")&&!H0[Zn(m,"display")]&&(o.position=Zn(e,"position")),m===e&&(o.position="static"),m.appendChild(hr),g=hr[d],m.removeChild(hr),o.position="absolute";return c&&h&&(p=vr(m),p.time=Wn.time,p.width=m[d]),Ot(u?g*r/f:g&&r?f/g*r:0)},ea=function(e,t,n,a){var r;return pf||Qd(),t in zi&&t!=="transform"&&(t=zi[t],~t.indexOf(",")&&(t=t.split(",")[0])),oa[t]&&t!=="transform"?(r=go(e,a),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:$l(Zn(e,Cn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||a||~(r+"").indexOf("calc("))&&(r=Hl[t]&&Hl[t](e,t,n)||Zn(e,t)||Nm(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Va(e,t,r,n)+n:r},$0=function(e,t,n,a){if(!n||n==="none"){var r=vs(t,e,1),s=r&&Zn(e,r,1);s&&s!==n?(t=r,n=s):t==="borderColor"&&(n=Zn(e,"borderTopColor"))}var o=new Ln(this._pt,e.style,t,0,1,dg),c=0,l=0,d,f,u,h,g,m,p,v,y,T,b,S;if(o.b=n,o.e=a,n+="",a+="",a.substring(0,6)==="var(--"&&(a=Zn(e,a.substring(4,a.indexOf(")")))),a==="auto"&&(m=e.style[t],e.style[t]=a,a=Zn(e,t)||a,m?e.style[t]=m:Ga(e,t)),d=[n,a],ng(d),n=d[0],a=d[1],u=n.match(Qr)||[],S=a.match(Qr)||[],S.length){for(;f=Qr.exec(a);)p=f[0],y=a.substring(c,f.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),p!==(m=u[l++]||"")&&(h=parseFloat(m)||0,b=m.substr((h+"").length),p.charAt(1)==="="&&(p=rs(h,p)+b),v=parseFloat(p),T=p.substr((v+"").length),c=Qr.lastIndex-T.length,T||(T=T||jn.units[t]||b,c===a.length&&(a+=T,o.e+=T)),b!==T&&(h=Va(e,t,m,T)||0),o._pt={_next:o._pt,p:y||l===1?y:",",s:h,c:v-h,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=c<a.length?a.substring(c,a.length):""}else o.r=t==="display"&&a==="none"?pg:hg;return Pm.test(a)&&(o.e=0),this._pt=o,o},Eh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},G0=function(e){var t=e.split(" "),n=t[0],a=t[1]||"50%";return(n==="top"||n==="bottom"||a==="left"||a==="right")&&(e=n,n=a,a=e),t[0]=Eh[n]||n,t[1]=Eh[a]||a,t.join(" ")},V0=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,a=n.style,r=t.u,s=n._gsap,o,c,l;if(r==="all"||r===!0)a.cssText="",c=1;else for(r=r.split(","),l=r.length;--l>-1;)o=r[l],oa[o]&&(c=1,o=o==="transformOrigin"?Cn:Ct),Ga(n,o);c&&(Ga(n,Ct),s&&(s.svg&&n.removeAttribute("transform"),a.scale=a.rotate=a.translate="none",go(n,1),s.uncache=1,mg(a)))}},Hl={clearProps:function(e,t,n,a,r){if(r.data!=="isFromStart"){var s=e._pt=new Ln(e._pt,t,n,0,0,V0);return s.u=a,s.pr=-10,s.tween=r,e._props.push(n),1}}},mo=[1,0,0,1,0,0],xg={},bg=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},wh=function(e){var t=Zn(e,Ct);return bg(t)?mo:t.substr(7).match(Cm).map(Ot)},vf=function(e,t){var n=e._gsap||vr(e),a=e.style,r=wh(e),s,o,c,l;return n.svg&&e.getAttribute("transform")?(c=e.transform.baseVal.consolidate().matrix,r=[c.a,c.b,c.c,c.d,c.e,c.f],r.join(",")==="1,0,0,1,0,0"?mo:r):(r===mo&&!e.offsetParent&&e!==ss&&!n.svg&&(c=a.display,a.display="block",s=e.parentNode,(!s||!e.offsetParent&&!e.getBoundingClientRect().width)&&(l=1,o=e.nextElementSibling,ss.appendChild(e)),r=wh(e),c?a.display=c:Ga(e,"display"),l&&(o?s.insertBefore(e,o):s?s.appendChild(e):ss.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},eu=function(e,t,n,a,r,s){var o=e._gsap,c=r||vf(e,!0),l=o.xOrigin||0,d=o.yOrigin||0,f=o.xOffset||0,u=o.yOffset||0,h=c[0],g=c[1],m=c[2],p=c[3],v=c[4],y=c[5],T=t.split(" "),b=parseFloat(T[0])||0,S=parseFloat(T[1])||0,k,A,x,w;n?c!==mo&&(A=h*p-g*m)&&(x=b*(p/A)+S*(-m/A)+(m*y-p*v)/A,w=b*(-g/A)+S*(h/A)-(h*y-g*v)/A,b=x,S=w):(k=_g(e),b=k.x+(~T[0].indexOf("%")?b/100*k.width:b),S=k.y+(~(T[1]||T[0]).indexOf("%")?S/100*k.height:S)),a||a!==!1&&o.smooth?(v=b-l,y=S-d,o.xOffset=f+(v*h+y*m)-v,o.yOffset=u+(v*g+y*p)-y):o.xOffset=o.yOffset=0,o.xOrigin=b,o.yOrigin=S,o.smooth=!!a,o.origin=t,o.originIsAbsolute=!!n,e.style[Cn]="0px 0px",s&&(Ca(s,o,"xOrigin",l,b),Ca(s,o,"yOrigin",d,S),Ca(s,o,"xOffset",f,o.xOffset),Ca(s,o,"yOffset",u,o.yOffset)),e.setAttribute("data-svg-origin",b+" "+S)},go=function(e,t){var n=e._gsap||new ag(e);if("x"in n&&!t&&!n.uncache)return n;var a=e.style,r=n.scaleX<0,s="px",o="deg",c=getComputedStyle(e),l=Zn(e,Cn)||"0",d,f,u,h,g,m,p,v,y,T,b,S,k,A,x,w,R,L,z,F,C,H,D,P,Y,$,Q,ne,ue,ke,Ne,De;return d=f=u=m=p=v=y=T=b=0,h=g=1,n.svg=!!(e.getCTM&&yg(e)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(a[Ct]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[Ct]!=="none"?c[Ct]:"")),a.scale=a.rotate=a.translate="none"),A=vf(e,n.svg),n.svg&&(n.uncache?(Y=e.getBBox(),l=n.xOrigin-Y.x+"px "+(n.yOrigin-Y.y)+"px",P=""):P=!t&&e.getAttribute("data-svg-origin"),eu(e,P||l,!!P||n.originIsAbsolute,n.smooth!==!1,A)),S=n.xOrigin||0,k=n.yOrigin||0,A!==mo&&(L=A[0],z=A[1],F=A[2],C=A[3],d=H=A[4],f=D=A[5],A.length===6?(h=Math.sqrt(L*L+z*z),g=Math.sqrt(C*C+F*F),m=L||z?Pr(z,L)*or:0,y=F||C?Pr(F,C)*or+m:0,y&&(g*=Math.abs(Math.cos(y*os))),n.svg&&(d-=S-(S*L+k*F),f-=k-(S*z+k*C))):(De=A[6],ke=A[7],Q=A[8],ne=A[9],ue=A[10],Ne=A[11],d=A[12],f=A[13],u=A[14],x=Pr(De,ue),p=x*or,x&&(w=Math.cos(-x),R=Math.sin(-x),P=H*w+Q*R,Y=D*w+ne*R,$=De*w+ue*R,Q=H*-R+Q*w,ne=D*-R+ne*w,ue=De*-R+ue*w,Ne=ke*-R+Ne*w,H=P,D=Y,De=$),x=Pr(-F,ue),v=x*or,x&&(w=Math.cos(-x),R=Math.sin(-x),P=L*w-Q*R,Y=z*w-ne*R,$=F*w-ue*R,Ne=C*R+Ne*w,L=P,z=Y,F=$),x=Pr(z,L),m=x*or,x&&(w=Math.cos(x),R=Math.sin(x),P=L*w+z*R,Y=H*w+D*R,z=z*w-L*R,D=D*w-H*R,L=P,H=Y),p&&Math.abs(p)+Math.abs(m)>359.9&&(p=m=0,v=180-v),h=Ot(Math.sqrt(L*L+z*z+F*F)),g=Ot(Math.sqrt(D*D+De*De)),x=Pr(H,D),y=Math.abs(x)>2e-4?x*or:0,b=Ne?1/(Ne<0?-Ne:Ne):0),n.svg&&(P=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!bg(Zn(e,Ct)),P&&e.setAttribute("transform",P))),Math.abs(y)>90&&Math.abs(y)<270&&(r?(h*=-1,y+=m<=0?180:-180,m+=m<=0?180:-180):(g*=-1,y+=y<=0?180:-180)),t=t||n.uncache,n.x=d-((n.xPercent=d&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-d)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+s,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+s,n.z=u+s,n.scaleX=Ot(h),n.scaleY=Ot(g),n.rotation=Ot(m)+o,n.rotationX=Ot(p)+o,n.rotationY=Ot(v)+o,n.skewX=y+o,n.skewY=T+o,n.transformPerspective=b+s,(n.zOrigin=parseFloat(l.split(" ")[2])||!t&&n.zOrigin||0)&&(a[Cn]=$l(l)),n.xOffset=n.yOffset=0,n.force3D=jn.force3D,n.renderTransform=n.svg?W0:vg?Sg:q0,n.uncache=0,n},$l=function(e){return(e=e.split(" "))[0]+" "+e[1]},Gc=function(e,t,n){var a=pn(t);return Ot(parseFloat(t)+parseFloat(Va(e,"x",n+"px",a)))+a},q0=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Sg(e,t)},Ja="0deg",Ls="0px",ja=") ",Sg=function(e,t){var n=t||this,a=n.xPercent,r=n.yPercent,s=n.x,o=n.y,c=n.z,l=n.rotation,d=n.rotationY,f=n.rotationX,u=n.skewX,h=n.skewY,g=n.scaleX,m=n.scaleY,p=n.transformPerspective,v=n.force3D,y=n.target,T=n.zOrigin,b="",S=v==="auto"&&e&&e!==1||v===!0;if(T&&(f!==Ja||d!==Ja)){var k=parseFloat(d)*os,A=Math.sin(k),x=Math.cos(k),w;k=parseFloat(f)*os,w=Math.cos(k),s=Gc(y,s,A*w*-T),o=Gc(y,o,-Math.sin(k)*-T),c=Gc(y,c,x*w*-T+T)}p!==Ls&&(b+="perspective("+p+ja),(a||r)&&(b+="translate("+a+"%, "+r+"%) "),(S||s!==Ls||o!==Ls||c!==Ls)&&(b+=c!==Ls||S?"translate3d("+s+", "+o+", "+c+") ":"translate("+s+", "+o+ja),l!==Ja&&(b+="rotate("+l+ja),d!==Ja&&(b+="rotateY("+d+ja),f!==Ja&&(b+="rotateX("+f+ja),(u!==Ja||h!==Ja)&&(b+="skew("+u+", "+h+ja),(g!==1||m!==1)&&(b+="scale("+g+", "+m+ja),y.style[Ct]=b||"translate(0, 0)"},W0=function(e,t){var n=t||this,a=n.xPercent,r=n.yPercent,s=n.x,o=n.y,c=n.rotation,l=n.skewX,d=n.skewY,f=n.scaleX,u=n.scaleY,h=n.target,g=n.xOrigin,m=n.yOrigin,p=n.xOffset,v=n.yOffset,y=n.forceCSS,T=parseFloat(s),b=parseFloat(o),S,k,A,x,w;c=parseFloat(c),l=parseFloat(l),d=parseFloat(d),d&&(d=parseFloat(d),l+=d,c+=d),c||l?(c*=os,l*=os,S=Math.cos(c)*f,k=Math.sin(c)*f,A=Math.sin(c-l)*-u,x=Math.cos(c-l)*u,l&&(d*=os,w=Math.tan(l-d),w=Math.sqrt(1+w*w),A*=w,x*=w,d&&(w=Math.tan(d),w=Math.sqrt(1+w*w),S*=w,k*=w)),S=Ot(S),k=Ot(k),A=Ot(A),x=Ot(x)):(S=f,x=u,k=A=0),(T&&!~(s+"").indexOf("px")||b&&!~(o+"").indexOf("px"))&&(T=Va(h,"x",s,"px"),b=Va(h,"y",o,"px")),(g||m||p||v)&&(T=Ot(T+g-(g*S+m*A)+p),b=Ot(b+m-(g*k+m*x)+v)),(a||r)&&(w=h.getBBox(),T=Ot(T+a/100*w.width),b=Ot(b+r/100*w.height)),w="matrix("+S+","+k+","+A+","+x+","+T+","+b+")",h.setAttribute("transform",w),y&&(h.style[Ct]=w)},K0=function(e,t,n,a,r){var s=360,o=en(r),c=parseFloat(r)*(o&&~r.indexOf("rad")?or:1),l=c-a,d=a+l+"deg",f,u;return o&&(f=r.split("_")[1],f==="short"&&(l%=s,l!==l%(s/2)&&(l+=l<0?s:-s)),f==="cw"&&l<0?l=(l+s*xh)%s-~~(l/s)*s:f==="ccw"&&l>0&&(l=(l-s*xh)%s-~~(l/s)*s)),e._pt=u=new Ln(e._pt,t,n,a,l,R0),u.e=d,u.u="deg",e._props.push(n),u},Th=function(e,t){for(var n in t)e[n]=t[n];return e},X0=function(e,t,n){var a=Th({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",s=n.style,o,c,l,d,f,u,h,g;a.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),s[Ct]=t,o=go(n,1),Ga(n,Ct),n.setAttribute("transform",l)):(l=getComputedStyle(n)[Ct],s[Ct]=t,o=go(n,1),s[Ct]=l);for(c in oa)l=a[c],d=o[c],l!==d&&r.indexOf(c)<0&&(h=pn(l),g=pn(d),f=h!==g?Va(n,c,l,g):parseFloat(l),u=parseFloat(d),e._pt=new Ln(e._pt,o,c,f,u-f,Jd),e._pt.u=g||0,e._props.push(c));Th(o,a)};Rn("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",a="Bottom",r="Left",s=(e<3?[t,n,a,r]:[t+r,t+n,a+n,a+r]).map(function(o){return e<2?i+o:"border"+o+i});Hl[e>1?"border"+i:i]=function(o,c,l,d,f){var u,h;if(arguments.length<4)return u=s.map(function(g){return ea(o,g,l)}),h=u.join(" "),h.split(u[0]).length===5?u[0]:h;u=(d+"").split(" "),h={},s.forEach(function(g,m){return h[g]=u[m]=u[m]||u[(m-1)/2|0]}),o.init(c,h,f)}});var kg={name:"css",register:Qd,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,a,r){var s=this._props,o=e.style,c=n.vars.startAt,l,d,f,u,h,g,m,p,v,y,T,b,S,k,A,x,w;pf||Qd(),this.styles=this.styles||gg(e),x=this.styles.props,this.tween=n;for(m in t)if(m!=="autoRound"&&(d=t[m],!($n[m]&&rg(m,t,n,a,e,r)))){if(h=typeof d,g=Hl[m],h==="function"&&(d=d.call(n,a,e,r),h=typeof d),h==="string"&&~d.indexOf("random(")&&(d=fo(d)),g)g(this,e,m,d,n)&&(A=1);else if(m.substr(0,2)==="--")l=(getComputedStyle(e).getPropertyValue(m)+"").trim(),d+="",Fa.lastIndex=0,Fa.test(l)||(p=pn(l),v=pn(d),v?p!==v&&(l=Va(e,m,l,v)+v):p&&(d+=p)),this.add(o,"setProperty",l,d,a,r,0,0,m),s.push(m),x.push(m,0,o[m]);else if(h!=="undefined"){if(c&&m in c?(l=typeof c[m]=="function"?c[m].call(n,a,e,r):c[m],en(l)&&~l.indexOf("random(")&&(l=fo(l)),pn(l+"")||l==="auto"||(l+=jn.units[m]||pn(ea(e,m))||""),(l+"").charAt(1)==="="&&(l=ea(e,m))):l=ea(e,m),u=parseFloat(l),y=h==="string"&&d.charAt(1)==="="&&d.substr(0,2),y&&(d=d.substr(2)),f=parseFloat(d),m in zi&&(m==="autoAlpha"&&(u===1&&ea(e,"visibility")==="hidden"&&f&&(u=0),x.push("visibility",0,o.visibility),Ca(this,o,"visibility",u?"inherit":"hidden",f?"inherit":"hidden",!f)),m!=="scale"&&m!=="transform"&&(m=zi[m],~m.indexOf(",")&&(m=m.split(",")[0]))),T=m in oa,T){if(this.styles.save(m),w=d,h==="string"&&d.substring(0,6)==="var(--"){if(d=Zn(e,d.substring(4,d.indexOf(")"))),d.substring(0,5)==="calc("){var R=e.style.perspective;e.style.perspective=d,d=Zn(e,"perspective"),R?e.style.perspective=R:Ga(e,"perspective")}f=parseFloat(d)}if(b||(S=e._gsap,S.renderTransform&&!t.parseTransform||go(e,t.parseTransform),k=t.smoothOrigin!==!1&&S.smooth,b=this._pt=new Ln(this._pt,o,Ct,0,1,S.renderTransform,S,0,-1),b.dep=1),m==="scale")this._pt=new Ln(this._pt,S,"scaleY",S.scaleY,(y?rs(S.scaleY,y+f):f)-S.scaleY||0,Jd),this._pt.u=0,s.push("scaleY",m),m+="X";else if(m==="transformOrigin"){x.push(Cn,0,o[Cn]),d=G0(d),S.svg?eu(e,d,0,k,0,this):(v=parseFloat(d.split(" ")[2])||0,v!==S.zOrigin&&Ca(this,S,"zOrigin",S.zOrigin,v),Ca(this,o,m,$l(l),$l(d)));continue}else if(m==="svgOrigin"){eu(e,d,1,k,0,this);continue}else if(m in xg){K0(this,S,m,u,y?rs(u,y+d):d);continue}else if(m==="smoothOrigin"){Ca(this,S,"smooth",S.smooth,d);continue}else if(m==="force3D"){S[m]=d;continue}else if(m==="transform"){X0(this,d,e);continue}}else m in o||(m=vs(m)||m);if(T||(f||f===0)&&(u||u===0)&&!A0.test(d)&&m in o)p=(l+"").substr((u+"").length),f||(f=0),v=pn(d)||(m in jn.units?jn.units[m]:p),p!==v&&(u=Va(e,m,l,v)),this._pt=new Ln(this._pt,T?S:o,m,u,(y?rs(u,y+f):f)-u,!T&&(v==="px"||m==="zIndex")&&t.autoRound!==!1?P0:Jd),this._pt.u=v||0,T&&w!==d?(this._pt.b=l,this._pt.e=w,this._pt.r=C0):p!==v&&v!=="%"&&(this._pt.b=l,this._pt.r=L0);else if(m in o)$0.call(this,e,m,l,y?y+d:d);else if(m in e)this.add(e,m,l||e[m],y?y+d:d,a,r);else if(m!=="parseTransform"){af(m,d);continue}T||(m in o?x.push(m,0,o[m]):typeof e[m]=="function"?x.push(m,2,e[m]()):x.push(m,1,l||e[m])),s.push(m)}}A&&ug(this)},render:function(e,t){if(t.tween._time||!mf())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:ea,aliases:zi,getSetter:function(e,t,n){var a=zi[t];return a&&a.indexOf(",")<0&&(t=a),t in oa&&t!==Cn&&(e._gsap.x||ea(e,"x"))?n&&yh===n?t==="scale"?U0:z0:(yh=n||{})&&(t==="scale"?N0:O0):e.style&&!ef(e.style[t])?D0:~t.indexOf("-")?I0:ff(e,t)},core:{_removeProperty:Ga,_getMatrix:vf}};Un.utils.checkPrefix=vs;Un.core.getStyleSaver=gg;(function(i,e,t,n){var a=Rn(i+","+e+","+t,function(r){oa[r]=1});Rn(e,function(r){jn.units[r]="deg",xg[r]=1}),zi[a[13]]=i+","+e,Rn(n,function(r){var s=r.split(":");zi[s[1]]=a[s[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Rn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){jn.units[i]="px"});Un.registerPlugin(kg);var la=Un.registerPlugin(kg)||Un;la.core.Tween;la.matchMedia();function Lo(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}const Ah=new WeakMap;function Y0(i,e){const t=Ah.get(i)??{current:i.textContent??"",tween:null};if(t.current===e)return;if(t.current=e,Ah.set(i,t),Lo()){i.textContent=e;return}t.tween?.kill();const n=i.textContent??"";i.innerHTML="";const a=document.createElement("span");a.style.cssText="display:inline-block; position:relative; overflow:hidden; vertical-align:bottom;";const r=document.createElement("span");r.textContent=n,r.style.cssText="display:block;";const s=document.createElement("span");s.textContent=e,s.style.cssText="display:block; position:absolute; left:0; top:100%;",a.append(r,s),i.appendChild(a),t.tween=la.to([r,s],{yPercent:-100,duration:.32,ease:"power2.out",onComplete:()=>{i.textContent=e,t.tween=null}})}function Mg(i){if(Lo())return;const e=Array.from(i.children).slice(0,8);e.length&&la.fromTo(e,{autoAlpha:0,y:10},{autoAlpha:1,y:0,duration:.34,ease:"power2.out",stagger:.045,overwrite:!0,clearProps:"transform"})}function _f(i){Lo()||!i.length||la.fromTo(i,{autoAlpha:0,x:-8},{autoAlpha:1,x:0,duration:.28,ease:"power2.out",stagger:.03,overwrite:!0,clearProps:"transform"})}function yf(i){Lo()||la.fromTo(i,{scale:1},{scale:.97,duration:.07,yoyo:!0,repeat:1,ease:"power1.inOut",overwrite:!0,clearProps:"scale"})}function Z0(i,e){if(Lo()){e();return}la.to(i,{autoAlpha:0,duration:.12,ease:"power1.in",onComplete:()=>{la.set(i,{clearProps:"all"}),e()}})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xf="186",J0=0,Rh=1,j0=2,Ml=1,Q0=2,$s=3,Sr=0,Pn=1,bi=2,ia=0,to=1,Lh=2,Ch=3,Ph=4,ey=5,Jr=100,ty=101,ny=102,iy=103,ay=104,ry=200,sy=201,oy=202,ly=203,Eg=204,wg=205,cy=206,dy=207,uy=208,fy=209,hy=210,py=211,my=212,gy=213,vy=214,tu=0,nu=1,iu=2,vo=3,au=4,ru=5,su=6,ou=7,bf=0,_y=1,yy=2,Bi=0,Tg=1,Ag=2,Rg=3,Lg=4,Cg=5,Pg=6,Dg=7,Ig=300,kr=301,_s=302,Vc=303,qc=304,pc=306,lu=1e3,ta=1001,cu=1002,Kt=1003,xy=1004,Go=1005,nn=1006,Wc=1007,Pa=1008,Kn=1009,zg=1010,Ug=1011,_o=1012,Sf=1013,$i=1014,Ui=1015,Gi=1016,kf=1017,Mf=1018,yo=1020,Ng=35902,Og=35899,Fg=1021,Bg=1022,ki=1023,ca=1026,pr=1027,Hg=1028,Ef=1029,Mr=1030,wf=1031,Tf=1033,El=33776,wl=33777,Tl=33778,Al=33779,du=35840,uu=35841,fu=35842,hu=35843,pu=36196,mu=37492,gu=37496,vu=37488,_u=37489,Gl=37490,yu=37491,xu=37808,bu=37809,Su=37810,ku=37811,Mu=37812,Eu=37813,wu=37814,Tu=37815,Au=37816,Ru=37817,Lu=37818,Cu=37819,Pu=37820,Du=37821,Iu=36492,zu=36494,Uu=36495,Nu=36283,Ou=36284,Vl=36285,Fu=36286,by=3200,Bu=0,Sy=1,Ta="",Gn="srgb",ql="srgb-linear",Wl="linear",pt="srgb",Kc=7680,ky=519,My=512,Ey=513,wy=514,Af=515,Ty=516,Ay=517,Rf=518,Ry=519,Ly=35044,Dh="300 es",Ni=2e3,xo=2001;function Cy(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function bo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Py(){const i=bo("canvas");return i.style.display="block",i}const Ih={};function zh(...i){const e="THREE."+i.shift();console.log(e,...i)}function $g(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function $e(...i){i=$g(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function lt(...i){i=$g(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function ls(...i){const e=i.join(" ");e in Ih||(Ih[e]=!0,$e(...i))}function Dy(i,e,t){return new Promise(function(n,a){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:a();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Iy={[tu]:nu,[iu]:su,[au]:ou,[vo]:ru,[nu]:tu,[su]:iu,[ou]:au,[ru]:vo};class Tr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const a=n[e];if(a!==void 0){const r=a.indexOf(t);r!==-1&&a.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const a=n.slice(0);for(let r=0,s=a.length;r<s;r++)a[r].call(this,e);e.target=null}}}const dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Rl=Math.PI/180,Hu=180/Math.PI;function Co(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(dn[i&255]+dn[i>>8&255]+dn[i>>16&255]+dn[i>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[t&63|128]+dn[t>>8&255]+"-"+dn[t>>16&255]+dn[t>>24&255]+dn[n&255]+dn[n>>8&255]+dn[n>>16&255]+dn[n>>24&255]).toLowerCase()}function nt(i,e,t){return Math.max(e,Math.min(t,i))}function zy(i,e){return(i%e+e)%e}function Xc(i,e,t){return(1-t)*i+t*e}function Uy(i){return i*Rl}function Cs(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Sn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Ny={degToRad:Uy};class at{static{at.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6],this.y=a[1]*t+a[4]*n+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),a=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*n-s*a+e.x,this.y=r*a+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class bs{constructor(e=0,t=0,n=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=a}static slerpFlat(e,t,n,a,r,s,o){let c=n[a+0],l=n[a+1],d=n[a+2],f=n[a+3],u=r[s+0],h=r[s+1],g=r[s+2],m=r[s+3];if(f!==m||c!==u||l!==h||d!==g){let p=c*u+l*h+d*g+f*m;p<0&&(u=-u,h=-h,g=-g,m=-m,p=-p);let v=1-o;if(p<.9995){const y=Math.acos(p),T=Math.sin(y);v=Math.sin(v*y)/T,o=Math.sin(o*y)/T,c=c*v+u*o,l=l*v+h*o,d=d*v+g*o,f=f*v+m*o}else{c=c*v+u*o,l=l*v+h*o,d=d*v+g*o,f=f*v+m*o;const y=1/Math.sqrt(c*c+l*l+d*d+f*f);c*=y,l*=y,d*=y,f*=y}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,a,r,s){const o=n[a],c=n[a+1],l=n[a+2],d=n[a+3],f=r[s],u=r[s+1],h=r[s+2],g=r[s+3];return e[t]=o*g+d*f+c*h-l*u,e[t+1]=c*g+d*u+l*f-o*h,e[t+2]=l*g+d*h+o*u-c*f,e[t+3]=d*g-o*f-c*u-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,a){return this._x=e,this._y=t,this._z=n,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,a=e._y,r=e._z,s=e._order,o=Math.cos,c=Math.sin,l=o(n/2),d=o(a/2),f=o(r/2),u=c(n/2),h=c(a/2),g=c(r/2);switch(s){case"XYZ":this._x=u*d*f+l*h*g,this._y=l*h*f-u*d*g,this._z=l*d*g+u*h*f,this._w=l*d*f-u*h*g;break;case"YXZ":this._x=u*d*f+l*h*g,this._y=l*h*f-u*d*g,this._z=l*d*g-u*h*f,this._w=l*d*f+u*h*g;break;case"ZXY":this._x=u*d*f-l*h*g,this._y=l*h*f+u*d*g,this._z=l*d*g+u*h*f,this._w=l*d*f-u*h*g;break;case"ZYX":this._x=u*d*f-l*h*g,this._y=l*h*f+u*d*g,this._z=l*d*g-u*h*f,this._w=l*d*f+u*h*g;break;case"YZX":this._x=u*d*f+l*h*g,this._y=l*h*f+u*d*g,this._z=l*d*g-u*h*f,this._w=l*d*f-u*h*g;break;case"XZY":this._x=u*d*f-l*h*g,this._y=l*h*f-u*d*g,this._z=l*d*g+u*h*f,this._w=l*d*f+u*h*g;break;default:$e("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,a=Math.sin(n);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],a=t[4],r=t[8],s=t[1],o=t[5],c=t[9],l=t[2],d=t[6],f=t[10],u=n+o+f;if(u>0){const h=.5/Math.sqrt(u+1);this._w=.25/h,this._x=(d-c)*h,this._y=(r-l)*h,this._z=(s-a)*h}else if(n>o&&n>f){const h=2*Math.sqrt(1+n-o-f);this._w=(d-c)/h,this._x=.25*h,this._y=(a+s)/h,this._z=(r+l)/h}else if(o>f){const h=2*Math.sqrt(1+o-n-f);this._w=(r-l)/h,this._x=(a+s)/h,this._y=.25*h,this._z=(c+d)/h}else{const h=2*Math.sqrt(1+f-n-o);this._w=(s-a)/h,this._x=(r+l)/h,this._y=(c+d)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const a=Math.min(1,t/n);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,a=e._y,r=e._z,s=e._w,o=t._x,c=t._y,l=t._z,d=t._w;return this._x=n*d+s*o+a*l-r*c,this._y=a*d+s*c+r*o-n*l,this._z=r*d+s*l+n*c-a*o,this._w=s*d-n*o-a*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,a=e._y,r=e._z,s=e._w,o=this.dot(e);o<0&&(n=-n,a=-a,r=-r,s=-s,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),d=Math.sin(l);c=Math.sin(c*l)/d,t=Math.sin(t*l)/d,this._x=this._x*c+n*t,this._y=this._y*c+a*t,this._z=this._z*c+r*t,this._w=this._w*c+s*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+a*t,this._z=this._z*c+r*t,this._w=this._w*c+s*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),a=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(a*Math.sin(e),a*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{static{K.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Uh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Uh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,a=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*a,this.y=r[1]*t+r[4]*n+r[7]*a,this.z=r[2]*t+r[5]*n+r[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,a=this.z,r=e.elements,s=1/(r[3]*t+r[7]*n+r[11]*a+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*a+r[12])*s,this.y=(r[1]*t+r[5]*n+r[9]*a+r[13])*s,this.z=(r[2]*t+r[6]*n+r[10]*a+r[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,a=this.z,r=e.x,s=e.y,o=e.z,c=e.w,l=2*(s*a-o*n),d=2*(o*t-r*a),f=2*(r*n-s*t);return this.x=t+c*l+s*f-o*d,this.y=n+c*d+o*l-r*f,this.z=a+c*f+r*d-s*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,a=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*a,this.y=r[1]*t+r[5]*n+r[9]*a,this.z=r[2]*t+r[6]*n+r[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,a=e.y,r=e.z,s=t.x,o=t.y,c=t.z;return this.x=a*c-r*o,this.y=r*s-n*c,this.z=n*o-a*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Yc.copy(this).projectOnVector(e),this.sub(Yc)}reflect(e){return this.sub(Yc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,a=this.z-e.z;return t*t+n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const a=Math.sin(t)*e;return this.x=a*Math.sin(n),this.y=Math.cos(t)*e,this.z=a*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yc=new K,Uh=new bs;class qe{static{qe.prototype.isMatrix3=!0}constructor(e,t,n,a,r,s,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,a,r,s,o,c,l)}set(e,t,n,a,r,s,o,c,l){const d=this.elements;return d[0]=e,d[1]=a,d[2]=o,d[3]=t,d[4]=r,d[5]=c,d[6]=n,d[7]=s,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,a=t.elements,r=this.elements,s=n[0],o=n[3],c=n[6],l=n[1],d=n[4],f=n[7],u=n[2],h=n[5],g=n[8],m=a[0],p=a[3],v=a[6],y=a[1],T=a[4],b=a[7],S=a[2],k=a[5],A=a[8];return r[0]=s*m+o*y+c*S,r[3]=s*p+o*T+c*k,r[6]=s*v+o*b+c*A,r[1]=l*m+d*y+f*S,r[4]=l*p+d*T+f*k,r[7]=l*v+d*b+f*A,r[2]=u*m+h*y+g*S,r[5]=u*p+h*T+g*k,r[8]=u*v+h*b+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],a=e[2],r=e[3],s=e[4],o=e[5],c=e[6],l=e[7],d=e[8];return t*s*d-t*o*l-n*r*d+n*o*c+a*r*l-a*s*c}invert(){const e=this.elements,t=e[0],n=e[1],a=e[2],r=e[3],s=e[4],o=e[5],c=e[6],l=e[7],d=e[8],f=d*s-o*l,u=o*c-d*r,h=l*r-s*c,g=t*f+n*u+a*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=f*m,e[1]=(a*l-d*n)*m,e[2]=(o*n-a*s)*m,e[3]=u*m,e[4]=(d*t-a*c)*m,e[5]=(a*r-o*t)*m,e[6]=h*m,e[7]=(n*c-l*t)*m,e[8]=(s*t-n*r)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,a,r,s,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*s+l*o)+s+e,-a*l,a*c,-a*(-l*s+c*o)+o+t,0,0,1),this}scale(e,t){return ls("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Zc.makeScale(e,t)),this}rotate(e){return ls("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Zc.makeRotation(-e)),this}translate(e,t){return ls("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Zc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let a=0;a<9;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Zc=new qe,Nh=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Oh=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Oy(){const i={enabled:!0,workingColorSpace:ql,spaces:{},convert:function(a,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===pt&&(a.r=aa(a.r),a.g=aa(a.g),a.b=aa(a.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[r].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===pt&&(a.r=cs(a.r),a.g=cs(a.g),a.b=cs(a.b))),a},workingToColorSpace:function(a,r){return this.convert(a,this.workingColorSpace,r)},colorSpaceToWorking:function(a,r){return this.convert(a,r,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Ta?Wl:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,r=this.workingColorSpace){return a.fromArray(this.spaces[r].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,r,s){return a.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,r){return ls("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(a,r)},toWorkingColorSpace:function(a,r){return ls("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(a,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ql]:{primaries:e,whitePoint:n,transfer:Wl,toXYZ:Nh,fromXYZ:Oh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Gn},outputColorSpaceConfig:{drawingBufferColorSpace:Gn}},[Gn]:{primaries:e,whitePoint:n,transfer:pt,toXYZ:Nh,fromXYZ:Oh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Gn}}}),i}const tt=Oy();function aa(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function cs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Dr;class Fy{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Dr===void 0&&(Dr=bo("canvas")),Dr.width=e.width,Dr.height=e.height;const a=Dr.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),n=Dr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=bo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const a=n.getImageData(0,0,e.width,e.height),r=a.data;for(let s=0;s<r.length;s++)r[s]=aa(r[s]/255)*255;return n.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(aa(t[n]/255)*255):t[n]=aa(t[n]);return{data:t,width:e.width,height:e.height}}else return $e("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let By=0;class Lf{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:By++}),this.uuid=Co(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},a=this.data;if(a!==null){let r;if(Array.isArray(a)){r=[];for(let s=0,o=a.length;s<o;s++)a[s].isDataTexture?r.push(Jc(a[s].image)):r.push(Jc(a[s]))}else r=Jc(a);n.url=r}return t||(e.images[this.uuid]=n),n}}function Jc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Fy.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:($e("Texture: Unable to serialize Texture."),{})}let Hy=0;const jc=new K;class rn extends Tr{constructor(e=rn.DEFAULT_IMAGE,t=rn.DEFAULT_MAPPING,n=ta,a=ta,r=nn,s=Pa,o=ki,c=Kn,l=rn.DEFAULT_ANISOTROPY,d=Ta){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hy++}),this.uuid=Co(),this.name="",this.source=new Lf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=a,this.magFilter=r,this.minFilter=s,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(jc).x}get height(){return this.source.getSize(jc).y}get depth(){return this.source.getSize(jc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){$e(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){$e(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&n&&a.isVector2&&n.isVector2||a&&n&&a.isVector3&&n.isVector3||a&&n&&a.isMatrix3&&n.isMatrix3?a.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ig)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case lu:e.x=e.x-Math.floor(e.x);break;case ta:e.x=e.x<0?0:1;break;case cu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case lu:e.y=e.y-Math.floor(e.y);break;case ta:e.y=e.y<0?0:1;break;case cu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=Ig;rn.DEFAULT_ANISOTROPY=1;class Pt{static{Pt.prototype.isVector4=!0}constructor(e=0,t=0,n=0,a=1){this.x=e,this.y=t,this.z=n,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,a){return this.x=e,this.y=t,this.z=n,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,a=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*a+s[12]*r,this.y=s[1]*t+s[5]*n+s[9]*a+s[13]*r,this.z=s[2]*t+s[6]*n+s[10]*a+s[14]*r,this.w=s[3]*t+s[7]*n+s[11]*a+s[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,a,r;const c=e.elements,l=c[0],d=c[4],f=c[8],u=c[1],h=c[5],g=c[9],m=c[2],p=c[6],v=c[10];if(Math.abs(d-u)<.01&&Math.abs(f-m)<.01&&Math.abs(g-p)<.01){if(Math.abs(d+u)<.1&&Math.abs(f+m)<.1&&Math.abs(g+p)<.1&&Math.abs(l+h+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(l+1)/2,b=(h+1)/2,S=(v+1)/2,k=(d+u)/4,A=(f+m)/4,x=(g+p)/4;return T>b&&T>S?T<.01?(n=0,a=.707106781,r=.707106781):(n=Math.sqrt(T),a=k/n,r=A/n):b>S?b<.01?(n=.707106781,a=0,r=.707106781):(a=Math.sqrt(b),n=k/a,r=x/a):S<.01?(n=.707106781,a=.707106781,r=0):(r=Math.sqrt(S),n=A/r,a=x/r),this.set(n,a,r,t),this}let y=Math.sqrt((p-g)*(p-g)+(f-m)*(f-m)+(u-d)*(u-d));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(f-m)/y,this.z=(u-d)/y,this.w=Math.acos((l+h+v-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this.w=nt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this.w=nt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $y extends Tr{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t),this.textures=[];const a={width:e,height:t,depth:n.depth},r=new rn(a),s=n.count;for(let o=0;o<s;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:nn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let a=0,r=this.textures.length;a<r;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=n,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new Lf(a)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mi extends $y{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Gg extends rn{constructor(e=null,t=1,n=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=ta,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Gy extends rn{constructor(e=null,t=1,n=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=ta,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class wt{static{wt.prototype.isMatrix4=!0}constructor(e,t,n,a,r,s,o,c,l,d,f,u,h,g,m,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,a,r,s,o,c,l,d,f,u,h,g,m,p)}set(e,t,n,a,r,s,o,c,l,d,f,u,h,g,m,p){const v=this.elements;return v[0]=e,v[4]=t,v[8]=n,v[12]=a,v[1]=r,v[5]=s,v[9]=o,v[13]=c,v[2]=l,v[6]=d,v[10]=f,v[14]=u,v[3]=h,v[7]=g,v[11]=m,v[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,a=1/Ir.setFromMatrixColumn(e,0).length(),r=1/Ir.setFromMatrixColumn(e,1).length(),s=1/Ir.setFromMatrixColumn(e,2).length();return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,a=e.y,r=e.z,s=Math.cos(n),o=Math.sin(n),c=Math.cos(a),l=Math.sin(a),d=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const u=s*d,h=s*f,g=o*d,m=o*f;t[0]=c*d,t[4]=-c*f,t[8]=l,t[1]=h+g*l,t[5]=u-m*l,t[9]=-o*c,t[2]=m-u*l,t[6]=g+h*l,t[10]=s*c}else if(e.order==="YXZ"){const u=c*d,h=c*f,g=l*d,m=l*f;t[0]=u+m*o,t[4]=g*o-h,t[8]=s*l,t[1]=s*f,t[5]=s*d,t[9]=-o,t[2]=h*o-g,t[6]=m+u*o,t[10]=s*c}else if(e.order==="ZXY"){const u=c*d,h=c*f,g=l*d,m=l*f;t[0]=u-m*o,t[4]=-s*f,t[8]=g+h*o,t[1]=h+g*o,t[5]=s*d,t[9]=m-u*o,t[2]=-s*l,t[6]=o,t[10]=s*c}else if(e.order==="ZYX"){const u=s*d,h=s*f,g=o*d,m=o*f;t[0]=c*d,t[4]=g*l-h,t[8]=u*l+m,t[1]=c*f,t[5]=m*l+u,t[9]=h*l-g,t[2]=-l,t[6]=o*c,t[10]=s*c}else if(e.order==="YZX"){const u=s*c,h=s*l,g=o*c,m=o*l;t[0]=c*d,t[4]=m-u*f,t[8]=g*f+h,t[1]=f,t[5]=s*d,t[9]=-o*d,t[2]=-l*d,t[6]=h*f+g,t[10]=u-m*f}else if(e.order==="XZY"){const u=s*c,h=s*l,g=o*c,m=o*l;t[0]=c*d,t[4]=-f,t[8]=l*d,t[1]=u*f+m,t[5]=s*d,t[9]=h*f-g,t[2]=g*f-h,t[6]=o*d,t[10]=m*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Vy,e,qy)}lookAt(e,t,n){const a=this.elements;return On.subVectors(e,t),On.lengthSq()===0&&(On.z=1),On.normalize(),va.crossVectors(n,On),va.lengthSq()===0&&(Math.abs(n.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),va.crossVectors(n,On)),va.normalize(),Vo.crossVectors(On,va),a[0]=va.x,a[4]=Vo.x,a[8]=On.x,a[1]=va.y,a[5]=Vo.y,a[9]=On.y,a[2]=va.z,a[6]=Vo.z,a[10]=On.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,a=t.elements,r=this.elements,s=n[0],o=n[4],c=n[8],l=n[12],d=n[1],f=n[5],u=n[9],h=n[13],g=n[2],m=n[6],p=n[10],v=n[14],y=n[3],T=n[7],b=n[11],S=n[15],k=a[0],A=a[4],x=a[8],w=a[12],R=a[1],L=a[5],z=a[9],F=a[13],C=a[2],H=a[6],D=a[10],P=a[14],Y=a[3],$=a[7],Q=a[11],ne=a[15];return r[0]=s*k+o*R+c*C+l*Y,r[4]=s*A+o*L+c*H+l*$,r[8]=s*x+o*z+c*D+l*Q,r[12]=s*w+o*F+c*P+l*ne,r[1]=d*k+f*R+u*C+h*Y,r[5]=d*A+f*L+u*H+h*$,r[9]=d*x+f*z+u*D+h*Q,r[13]=d*w+f*F+u*P+h*ne,r[2]=g*k+m*R+p*C+v*Y,r[6]=g*A+m*L+p*H+v*$,r[10]=g*x+m*z+p*D+v*Q,r[14]=g*w+m*F+p*P+v*ne,r[3]=y*k+T*R+b*C+S*Y,r[7]=y*A+T*L+b*H+S*$,r[11]=y*x+T*z+b*D+S*Q,r[15]=y*w+T*F+b*P+S*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],a=e[8],r=e[12],s=e[1],o=e[5],c=e[9],l=e[13],d=e[2],f=e[6],u=e[10],h=e[14],g=e[3],m=e[7],p=e[11],v=e[15],y=c*h-l*u,T=o*h-l*f,b=o*u-c*f,S=s*h-l*d,k=s*u-c*d,A=s*f-o*d;return t*(m*y-p*T+v*b)-n*(g*y-p*S+v*k)+a*(g*T-m*S+v*A)-r*(g*b-m*k+p*A)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],a=e[8],r=e[1],s=e[5],o=e[9],c=e[2],l=e[6],d=e[10];return t*(s*d-o*l)-n*(r*d-o*c)+a*(r*l-s*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],a=e[2],r=e[3],s=e[4],o=e[5],c=e[6],l=e[7],d=e[8],f=e[9],u=e[10],h=e[11],g=e[12],m=e[13],p=e[14],v=e[15],y=t*o-n*s,T=t*c-a*s,b=t*l-r*s,S=n*c-a*o,k=n*l-r*o,A=a*l-r*c,x=d*m-f*g,w=d*p-u*g,R=d*v-h*g,L=f*p-u*m,z=f*v-h*m,F=u*v-h*p,C=y*F-T*z+b*L+S*R-k*w+A*x;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/C;return e[0]=(o*F-c*z+l*L)*H,e[1]=(a*z-n*F-r*L)*H,e[2]=(m*A-p*k+v*S)*H,e[3]=(u*k-f*A-h*S)*H,e[4]=(c*R-s*F-l*w)*H,e[5]=(t*F-a*R+r*w)*H,e[6]=(p*b-g*A-v*T)*H,e[7]=(d*A-u*b+h*T)*H,e[8]=(s*z-o*R+l*x)*H,e[9]=(n*R-t*z-r*x)*H,e[10]=(g*k-m*b+v*y)*H,e[11]=(f*b-d*k-h*y)*H,e[12]=(o*w-s*L-c*x)*H,e[13]=(t*L-n*w+a*x)*H,e[14]=(m*T-g*S-p*y)*H,e[15]=(d*S-f*T+u*y)*H,this}scale(e){const t=this.elements,n=e.x,a=e.y,r=e.z;return t[0]*=n,t[4]*=a,t[8]*=r,t[1]*=n,t[5]*=a,t[9]*=r,t[2]*=n,t[6]*=a,t[10]*=r,t[3]*=n,t[7]*=a,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,a))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),a=Math.sin(t),r=1-n,s=e.x,o=e.y,c=e.z,l=r*s,d=r*o;return this.set(l*s+n,l*o-a*c,l*c+a*o,0,l*o+a*c,d*o+n,d*c-a*s,0,l*c-a*o,d*c+a*s,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,a,r,s){return this.set(1,n,r,0,e,1,s,0,t,a,1,0,0,0,0,1),this}compose(e,t,n){const a=this.elements,r=t._x,s=t._y,o=t._z,c=t._w,l=r+r,d=s+s,f=o+o,u=r*l,h=r*d,g=r*f,m=s*d,p=s*f,v=o*f,y=c*l,T=c*d,b=c*f,S=n.x,k=n.y,A=n.z;return a[0]=(1-(m+v))*S,a[1]=(h+b)*S,a[2]=(g-T)*S,a[3]=0,a[4]=(h-b)*k,a[5]=(1-(u+v))*k,a[6]=(p+y)*k,a[7]=0,a[8]=(g+T)*A,a[9]=(p-y)*A,a[10]=(1-(u+m))*A,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,n){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let s=Ir.set(a[0],a[1],a[2]).length();const o=Ir.set(a[4],a[5],a[6]).length(),c=Ir.set(a[8],a[9],a[10]).length();r<0&&(s=-s),mi.copy(this);const l=1/s,d=1/o,f=1/c;return mi.elements[0]*=l,mi.elements[1]*=l,mi.elements[2]*=l,mi.elements[4]*=d,mi.elements[5]*=d,mi.elements[6]*=d,mi.elements[8]*=f,mi.elements[9]*=f,mi.elements[10]*=f,t.setFromRotationMatrix(mi),n.x=s,n.y=o,n.z=c,this}makePerspective(e,t,n,a,r,s,o=Ni,c=!1){const l=this.elements,d=2*r/(t-e),f=2*r/(n-a),u=(t+e)/(t-e),h=(n+a)/(n-a);let g,m;if(c)g=r/(s-r),m=s*r/(s-r);else if(o===Ni)g=-(s+r)/(s-r),m=-2*s*r/(s-r);else if(o===xo)g=-s/(s-r),m=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,a,r,s,o=Ni,c=!1){const l=this.elements,d=2/(t-e),f=2/(n-a),u=-(t+e)/(t-e),h=-(n+a)/(n-a);let g,m;if(c)g=1/(s-r),m=s/(s-r);else if(o===Ni)g=-2/(s-r),m=-(s+r)/(s-r);else if(o===xo)g=-1/(s-r),m=-r/(s-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=f,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=g,l[14]=m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let a=0;a<16;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ir=new K,mi=new wt,Vy=new K(0,0,0),qy=new K(1,1,1),va=new K,Vo=new K,On=new K,Fh=new wt,Bh=new bs;class qa{constructor(e=0,t=0,n=0,a=qa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,a=this._order){return this._x=e,this._y=t,this._z=n,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const a=e.elements,r=a[0],s=a[4],o=a[8],c=a[1],l=a[5],d=a[9],f=a[2],u=a[6],h=a[10];switch(t){case"XYZ":this._y=Math.asin(nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,h),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(nt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-nt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,h),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin(nt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-nt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,h),this._y=0);break;default:$e("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Fh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bh.setFromEuler(this),this.setFromQuaternion(Bh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qa.DEFAULT_ORDER="XYZ";class Cf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Wy=0;const Hh=new K,zr=new bs,Wi=new wt,qo=new K,Ps=new K,Ky=new K,Xy=new bs,$h=new K(1,0,0),Gh=new K(0,1,0),Vh=new K(0,0,1),qh={type:"added"},Yy={type:"removed"},Ur={type:"childadded",child:null},Qc={type:"childremoved",child:null};class sn extends Tr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wy++}),this.uuid=Co(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=sn.DEFAULT_UP.clone();const e=new K,t=new qa,n=new bs,a=new K(1,1,1);function r(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new wt},normalMatrix:{value:new qe}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zr.setFromAxisAngle(e,t),this.quaternion.multiply(zr),this}rotateOnWorldAxis(e,t){return zr.setFromAxisAngle(e,t),this.quaternion.premultiply(zr),this}rotateX(e){return this.rotateOnAxis($h,e)}rotateY(e){return this.rotateOnAxis(Gh,e)}rotateZ(e){return this.rotateOnAxis(Vh,e)}translateOnAxis(e,t){return Hh.copy(e).applyQuaternion(this.quaternion),this.position.add(Hh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($h,e)}translateY(e){return this.translateOnAxis(Gh,e)}translateZ(e){return this.translateOnAxis(Vh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?qo.copy(e):qo.set(e,t,n);const a=this.parent;this.updateWorldMatrix(!0,!1),Ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wi.lookAt(Ps,qo,this.up):Wi.lookAt(qo,Ps,this.up),this.quaternion.setFromRotationMatrix(Wi),a&&(Wi.extractRotation(a.matrixWorld),zr.setFromRotationMatrix(Wi),this.quaternion.premultiply(zr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(lt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qh),Ur.child=e,this.dispatchEvent(Ur),Ur.child=null):lt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Yy),Qc.child=e,this.dispatchEvent(Qc),Qc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qh),Ur.child=e,this.dispatchEvent(Ur),Ur.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,a=this.children.length;n<a;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,e,Ky),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,Xy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,a=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*a,r[13]+=n-r[1]*t-r[5]*n-r[9]*a,r[14]+=a-r[2]*t-r[6]*n-r[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const f=c[l];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));a.material=o}else a.material=r(e.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];a.animations.push(r(e.animations,c))}}if(t){const o=s(e.geometries),c=s(e.materials),l=s(e.textures),d=s(e.images),f=s(e.shapes),u=s(e.skeletons),h=s(e.animations),g=s(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),h.length>0&&(n.animations=h),g.length>0&&(n.nodes=g)}return n.object=a,n;function s(o){const c=[];for(const l in o){const d=o[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const a=e.children[n];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}sn.DEFAULT_UP=new K(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Jt extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Zy={type:"move"};class ed{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let a=null,r=null,s=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(const m of e.hand.values()){const p=t.getJointPose(m,n),v=this._getHandJoint(l,m);p!==null&&(v.matrix.fromArray(p.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=p.radius),v.visible=p!==null}const d=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=d.position.distanceTo(f.position),h=.02,g=.005;l.inputState.pinching&&u>h+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=h-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(a=t.getPose(e.targetRaySpace,n),a===null&&r!==null&&(a=r),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Zy)))}return o!==null&&(o.visible=a!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Jt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Vg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_a={h:0,s:0,l:0},Wo={h:0,s:0,l:0};function td(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class st{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,a=tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,tt.colorSpaceToWorking(this,a),this}setHSL(e,t,n,a=tt.workingColorSpace){if(e=zy(e,1),t=nt(t,0,1),n=nt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,s=2*n-r;this.r=td(s,r,e+1/3),this.g=td(s,r,e),this.b=td(s,r,e-1/3)}return tt.colorSpaceToWorking(this,a),this}setStyle(e,t=Gn){function n(r){r!==void 0&&parseFloat(r)<1&&$e("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const s=a[1],o=a[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:$e("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=a[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(r,16),t);$e("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gn){const n=Vg[e.toLowerCase()];return n!==void 0?this.setHex(n,t):$e("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=aa(e.r),this.g=aa(e.g),this.b=aa(e.b),this}copyLinearToSRGB(e){return this.r=cs(e.r),this.g=cs(e.g),this.b=cs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gn){return tt.workingToColorSpace(un.copy(this),e),Math.round(nt(un.r*255,0,255))*65536+Math.round(nt(un.g*255,0,255))*256+Math.round(nt(un.b*255,0,255))}getHexString(e=Gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.workingToColorSpace(un.copy(this),t);const n=un.r,a=un.g,r=un.b,s=Math.max(n,a,r),o=Math.min(n,a,r);let c,l;const d=(o+s)/2;if(o===s)c=0,l=0;else{const f=s-o;switch(l=d<=.5?f/(s+o):f/(2-s-o),s){case n:c=(a-r)/f+(a<r?6:0);break;case a:c=(r-n)/f+2;break;case r:c=(n-a)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=tt.workingColorSpace){return tt.workingToColorSpace(un.copy(this),t),e.r=un.r,e.g=un.g,e.b=un.b,e}getStyle(e=Gn){tt.workingToColorSpace(un.copy(this),e);const t=un.r,n=un.g,a=un.b;return e!==Gn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(a*255)})`}offsetHSL(e,t,n){return this.getHSL(_a),this.setHSL(_a.h+e,_a.s+t,_a.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(_a),e.getHSL(Wo);const n=Xc(_a.h,Wo.h,t),a=Xc(_a.s,Wo.s,t),r=Xc(_a.l,Wo.l,t);return this.setHSL(n,a,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,a=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*a,this.g=r[1]*t+r[4]*n+r[7]*a,this.b=r[2]*t+r[5]*n+r[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const un=new st;st.NAMES=Vg;class Jy extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qa,this.environmentIntensity=1,this.environmentRotation=new qa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const gi=new K,Ki=new K,nd=new K,Xi=new K,Nr=new K,Or=new K,Wh=new K,id=new K,ad=new K,rd=new K,sd=new Pt,od=new Pt,ld=new Pt;class Si{constructor(e=new K,t=new K,n=new K){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,a){a.subVectors(n,t),gi.subVectors(e,t),a.cross(gi);const r=a.lengthSq();return r>0?a.multiplyScalar(1/Math.sqrt(r)):a.set(0,0,0)}static getBarycoord(e,t,n,a,r){gi.subVectors(a,t),Ki.subVectors(n,t),nd.subVectors(e,t);const s=gi.dot(gi),o=gi.dot(Ki),c=gi.dot(nd),l=Ki.dot(Ki),d=Ki.dot(nd),f=s*l-o*o;if(f===0)return r.set(0,0,0),null;const u=1/f,h=(l*c-o*d)*u,g=(s*d-o*c)*u;return r.set(1-h-g,g,h)}static containsPoint(e,t,n,a){return this.getBarycoord(e,t,n,a,Xi)===null?!1:Xi.x>=0&&Xi.y>=0&&Xi.x+Xi.y<=1}static getInterpolation(e,t,n,a,r,s,o,c){return this.getBarycoord(e,t,n,a,Xi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Xi.x),c.addScaledVector(s,Xi.y),c.addScaledVector(o,Xi.z),c)}static getInterpolatedAttribute(e,t,n,a,r,s){return sd.setScalar(0),od.setScalar(0),ld.setScalar(0),sd.fromBufferAttribute(e,t),od.fromBufferAttribute(e,n),ld.fromBufferAttribute(e,a),s.setScalar(0),s.addScaledVector(sd,r.x),s.addScaledVector(od,r.y),s.addScaledVector(ld,r.z),s}static isFrontFacing(e,t,n,a){return gi.subVectors(n,t),Ki.subVectors(e,t),gi.cross(Ki).dot(a)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,a){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,n,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gi.subVectors(this.c,this.b),Ki.subVectors(this.a,this.b),gi.cross(Ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Si.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,a,r){return Si.getInterpolation(e,this.a,this.b,this.c,t,n,a,r)}containsPoint(e){return Si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,a=this.b,r=this.c;let s,o;Nr.subVectors(a,n),Or.subVectors(r,n),id.subVectors(e,n);const c=Nr.dot(id),l=Or.dot(id);if(c<=0&&l<=0)return t.copy(n);ad.subVectors(e,a);const d=Nr.dot(ad),f=Or.dot(ad);if(d>=0&&f<=d)return t.copy(a);const u=c*f-d*l;if(u<=0&&c>=0&&d<=0)return s=c/(c-d),t.copy(n).addScaledVector(Nr,s);rd.subVectors(e,r);const h=Nr.dot(rd),g=Or.dot(rd);if(g>=0&&h<=g)return t.copy(r);const m=h*l-c*g;if(m<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Or,o);const p=d*g-h*f;if(p<=0&&f-d>=0&&h-g>=0)return Wh.subVectors(r,a),o=(f-d)/(f-d+(h-g)),t.copy(a).addScaledVector(Wh,o);const v=1/(p+m+u);return s=m*v,o=u*v,t.copy(n).addScaledVector(Nr,s).addScaledVector(Or,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Po{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(vi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(vi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=vi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,vi):vi.fromBufferAttribute(r,s),vi.applyMatrix4(e.matrixWorld),this.expandByPoint(vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ko.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ko.copy(n.boundingBox)),Ko.applyMatrix4(e.matrixWorld),this.union(Ko)}const a=e.children;for(let r=0,s=a.length;r<s;r++)this.expandByObject(a[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ds),Xo.subVectors(this.max,Ds),Fr.subVectors(e.a,Ds),Br.subVectors(e.b,Ds),Hr.subVectors(e.c,Ds),ya.subVectors(Br,Fr),xa.subVectors(Hr,Br),Qa.subVectors(Fr,Hr);let t=[0,-ya.z,ya.y,0,-xa.z,xa.y,0,-Qa.z,Qa.y,ya.z,0,-ya.x,xa.z,0,-xa.x,Qa.z,0,-Qa.x,-ya.y,ya.x,0,-xa.y,xa.x,0,-Qa.y,Qa.x,0];return!cd(t,Fr,Br,Hr,Xo)||(t=[1,0,0,0,1,0,0,0,1],!cd(t,Fr,Br,Hr,Xo))?!1:(Yo.crossVectors(ya,xa),t=[Yo.x,Yo.y,Yo.z],cd(t,Fr,Br,Hr,Xo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Yi=[new K,new K,new K,new K,new K,new K,new K,new K],vi=new K,Ko=new Po,Fr=new K,Br=new K,Hr=new K,ya=new K,xa=new K,Qa=new K,Ds=new K,Xo=new K,Yo=new K,er=new K;function cd(i,e,t,n,a){for(let r=0,s=i.length-3;r<=s;r+=3){er.fromArray(i,r);const o=a.x*Math.abs(er.x)+a.y*Math.abs(er.y)+a.z*Math.abs(er.z),c=e.dot(er),l=t.dot(er),d=n.dot(er);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>o)return!1}return!0}const Bt=new K,Zo=new at;let jy=0;class ra extends Tr{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jy++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ly,this.updateRanges=[],this.gpuType=Ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let a=0,r=this.itemSize;a<r;a++)this.array[e+a]=t.array[n+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Zo.fromBufferAttribute(this,t),Zo.applyMatrix3(e),this.setXY(t,Zo.x,Zo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Cs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Cs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Cs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Cs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Cs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Sn(t,this.array),n=Sn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,a){return e*=this.itemSize,this.normalized&&(t=Sn(t,this.array),n=Sn(n,this.array),a=Sn(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this}setXYZW(e,t,n,a,r){return e*=this.itemSize,this.normalized&&(t=Sn(t,this.array),n=Sn(n,this.array),a=Sn(a,this.array),r=Sn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class qg extends ra{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Wg extends ra{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class fi extends ra{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Qy=new Po,Is=new K,dd=new K;class mc{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Qy.setFromPoints(e).getCenter(n);let a=0;for(let r=0,s=e.length;r<s;r++)a=Math.max(a,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Is.subVectors(e,this.center);const t=Is.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),a=(n-this.radius)*.5;this.center.addScaledVector(Is,a/n),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(dd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Is.copy(e.center).add(dd)),this.expandByPoint(Is.copy(e.center).sub(dd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let ex=0;const ii=new wt,ud=new sn,$r=new K,Fn=new Po,zs=new Po,Zt=new K;class Ei extends Tr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ex++}),this.uuid=Co(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Cy(e)?Wg:qg)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ii.makeRotationFromQuaternion(e),this.applyMatrix4(ii),this}rotateX(e){return ii.makeRotationX(e),this.applyMatrix4(ii),this}rotateY(e){return ii.makeRotationY(e),this.applyMatrix4(ii),this}rotateZ(e){return ii.makeRotationZ(e),this.applyMatrix4(ii),this}translate(e,t,n){return ii.makeTranslation(e,t,n),this.applyMatrix4(ii),this}scale(e,t,n){return ii.makeScale(e,t,n),this.applyMatrix4(ii),this}lookAt(e){return ud.lookAt(e),ud.updateMatrix(),this.applyMatrix4(ud.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($r).negate(),this.translate($r.x,$r.y,$r.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let a=0,r=e.length;a<r;a++){const s=e[a];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new fi(n,3))}else{const n=Math.min(e.length,t.count);for(let a=0;a<n;a++){const r=e[a];t.setXYZ(a,r.x,r.y,r.z||0)}e.length>t.count&&$e("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Po);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,a=t.length;n<a;n++){const r=t[n];Fn.setFromBufferAttribute(r),this.morphTargetsRelative?(Zt.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(Zt)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const n=this.boundingSphere.center;if(Fn.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){const o=t[r];zs.setFromBufferAttribute(o),this.morphTargetsRelative?(Zt.addVectors(Fn.min,zs.min),Fn.expandByPoint(Zt),Zt.addVectors(Fn.max,zs.max),Fn.expandByPoint(Zt)):(Fn.expandByPoint(zs.min),Fn.expandByPoint(zs.max))}Fn.getCenter(n);let a=0;for(let r=0,s=e.count;r<s;r++)Zt.fromBufferAttribute(e,r),a=Math.max(a,n.distanceToSquared(Zt));if(t)for(let r=0,s=t.length;r<s;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,d=o.count;l<d;l++)Zt.fromBufferAttribute(o,l),c&&($r.fromBufferAttribute(e,l),Zt.add($r)),a=Math.max(a,n.distanceToSquared(Zt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,a=t.normal,r=t.uv;let s=this.getAttribute("tangent");(s===void 0||s.count!==n.count)&&(s=new ra(new Float32Array(4*n.count),4),this.setAttribute("tangent",s));const o=[],c=[];for(let x=0;x<n.count;x++)o[x]=new K,c[x]=new K;const l=new K,d=new K,f=new K,u=new at,h=new at,g=new at,m=new K,p=new K;function v(x,w,R){l.fromBufferAttribute(n,x),d.fromBufferAttribute(n,w),f.fromBufferAttribute(n,R),u.fromBufferAttribute(r,x),h.fromBufferAttribute(r,w),g.fromBufferAttribute(r,R),d.sub(l),f.sub(l),h.sub(u),g.sub(u);const L=1/(h.x*g.y-g.x*h.y);isFinite(L)&&(m.copy(d).multiplyScalar(g.y).addScaledVector(f,-h.y).multiplyScalar(L),p.copy(f).multiplyScalar(h.x).addScaledVector(d,-g.x).multiplyScalar(L),o[x].add(m),o[w].add(m),o[R].add(m),c[x].add(p),c[w].add(p),c[R].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let x=0,w=y.length;x<w;++x){const R=y[x],L=R.start,z=R.count;for(let F=L,C=L+z;F<C;F+=3)v(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const T=new K,b=new K,S=new K,k=new K;function A(x){S.fromBufferAttribute(a,x),k.copy(S);const w=o[x];T.copy(w),T.sub(S.multiplyScalar(S.dot(w))).normalize(),b.crossVectors(k,w);const L=b.dot(c[x])<0?-1:1;s.setXYZW(x,T.x,T.y,T.z,L)}for(let x=0,w=y.length;x<w;++x){const R=y[x],L=R.start,z=R.count;for(let F=L,C=L+z;F<C;F+=3)A(e.getX(F+0)),A(e.getX(F+1)),A(e.getX(F+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new ra(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,h=n.count;u<h;u++)n.setXYZ(u,0,0,0);const a=new K,r=new K,s=new K,o=new K,c=new K,l=new K,d=new K,f=new K;if(e)for(let u=0,h=e.count;u<h;u+=3){const g=e.getX(u+0),m=e.getX(u+1),p=e.getX(u+2);a.fromBufferAttribute(t,g),r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,p),d.subVectors(s,r),f.subVectors(a,r),d.cross(f),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),l.fromBufferAttribute(n,p),o.add(d),c.add(d),l.add(d),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(m,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let u=0,h=t.count;u<h;u+=3)a.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),s.fromBufferAttribute(t,u+2),d.subVectors(s,r),f.subVectors(a,r),d.cross(f),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Zt.fromBufferAttribute(e,t),Zt.normalize(),e.setXYZ(t,Zt.x,Zt.y,Zt.z)}toNonIndexed(){function e(o,c){const l=o.array,d=o.itemSize,f=o.normalized,u=new l.constructor(c.length*d);let h=0,g=0;for(let m=0,p=c.length;m<p;m++){o.isInterleavedBufferAttribute?h=c[m]*o.data.stride+o.offset:h=c[m]*d;for(let v=0;v<d;v++)u[g++]=l[h++]}return new ra(u,d,f)}if(this.index===null)return $e("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ei,n=this.index.array,a=this.attributes;for(const o in a){const c=a[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let d=0,f=l.length;d<f;d++){const u=l[d],h=e(u,n);c.push(h)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,c=s.length;o<c;o++){const l=s[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const a={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let f=0,u=l.length;f<u;f++){const h=l[f];d.push(h.toJSON(e.data))}d.length>0&&(a[c]=d,r=!0)}r&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const a=e.attributes;for(const l in a){const d=a[l];this.setAttribute(l,d.clone(t))}const r=e.morphAttributes;for(const l in r){const d=[],f=r[l];for(let u=0,h=f.length;u<h;u++)d.push(f[u].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let l=0,d=s.length;l<d;l++){const f=s[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fd=new K,tx=new K,nx=new qe;class Ma{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,a){return this.normal.set(e,t,n),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const a=fd.subVectors(n,t).cross(tx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const a=e.delta(fd),r=this.normal.dot(a);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(s<0||s>1)?null:t.copy(e.start).addScaledVector(a,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||nx.getNormalMatrix(e),a=this.coplanarPoint(fd).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-a.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let ix=0;class Ss extends Tr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ix++}),this.uuid=Co(),this.name="",this.type="Material",this.blending=to,this.side=Sr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Eg,this.blendDst=wg,this.blendEquation=Jr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=vo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ky,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Kc,this.stencilZFail=Kc,this.stencilZPass=Kc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){$e(`Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){$e(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(n):a&&a.isVector2&&n&&n.isVector2||a&&a.isEuler&&n&&n.isEuler||a&&a.isVector3&&n&&n.isVector3?a.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function a(r){const s=[];for(const o in r){const c=r[o];delete c.metadata,s.push(c)}return s}if(t){const r=a(e.textures),s=a(e.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new st().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Ma().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new at().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new at().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const a=t.length;n=new Array(a);for(let r=0;r!==a;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Zi=new K,hd=new K,Jo=new K,jo=new K;class Pf{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zi.copy(this.origin).addScaledVector(this.direction,t),Zi.distanceToSquared(e))}distanceSqToSegment(e,t,n,a){hd.copy(e).add(t).multiplyScalar(.5),Jo.copy(t).sub(e).normalize(),jo.copy(this.origin).sub(hd);const r=e.distanceTo(t)*.5,s=-this.direction.dot(Jo),o=jo.dot(this.direction),c=-jo.dot(Jo),l=jo.lengthSq(),d=Math.abs(1-s*s);let f,u,h,g;if(d>0)if(f=s*c-o,u=s*o-c,g=r*d,f>=0)if(u>=-g)if(u<=g){const m=1/d;f*=m,u*=m,h=f*(f+s*u+2*o)+u*(s*f+u+2*c)+l}else u=r,f=Math.max(0,-(s*u+o)),h=-f*f+u*(u+2*c)+l;else u=-r,f=Math.max(0,-(s*u+o)),h=-f*f+u*(u+2*c)+l;else u<=-g?(f=Math.max(0,-(-s*r+o)),u=f>0?-r:Math.min(Math.max(-r,-c),r),h=-f*f+u*(u+2*c)+l):u<=g?(f=0,u=Math.min(Math.max(-r,-c),r),h=u*(u+2*c)+l):(f=Math.max(0,-(s*r+o)),u=f>0?r:Math.min(Math.max(-r,-c),r),h=-f*f+u*(u+2*c)+l);else u=s>0?-r:r,f=Math.max(0,-(s*u+o)),h=-f*f+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),a&&a.copy(hd).addScaledVector(Jo,u),h}intersectSphere(e,t){if(e.radius<0)return null;Zi.subVectors(e.center,this.origin);const n=Zi.dot(this.direction),a=Zi.dot(Zi)-n*n,r=e.radius*e.radius;if(a>r)return null;const s=Math.sqrt(r-a),o=n-s,c=n+s;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,a,r,s,o,c;const l=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,a=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,a=(e.min.x-u.x)*l),d>=0?(r=(e.min.y-u.y)*d,s=(e.max.y-u.y)*d):(r=(e.max.y-u.y)*d,s=(e.min.y-u.y)*d),n>s||r>a||((r>n||isNaN(n))&&(n=r),(s<a||isNaN(a))&&(a=s),f>=0?(o=(e.min.z-u.z)*f,c=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,c=(e.min.z-u.z)*f),n>c||o>a)||((o>n||n!==n)&&(n=o),(c<a||a!==a)&&(a=c),a<0)?null:this.at(n>=0?n:a,t)}intersectsBox(e){return this.intersectBox(e,Zi)!==null}intersectTriangle(e,t,n,a,r){const s=this.origin,o=this.direction,c=o.x,l=o.y,d=o.z,f=e.x-s.x,u=e.y-s.y,h=e.z-s.z,g=t.x-s.x,m=t.y-s.y,p=t.z-s.z,v=n.x-s.x,y=n.y-s.y,T=n.z-s.z,b=Math.abs(c),S=Math.abs(l),k=Math.abs(d);let A,x,w,R,L,z,F,C,H,D,P,Y;if(b>=S&&b>=k?(w=c,z=f,H=g,Y=v,c>=0?(A=l,x=d,R=u,L=h,F=m,C=p,D=y,P=T):(A=d,x=l,R=h,L=u,F=p,C=m,D=T,P=y)):S>=k?(w=l,z=u,H=m,Y=y,l>=0?(A=d,x=c,R=h,L=f,F=p,C=g,D=T,P=v):(A=c,x=d,R=f,L=h,F=g,C=p,D=v,P=T)):(w=d,z=h,H=p,Y=T,d>=0?(A=c,x=l,R=f,L=u,F=g,C=m,D=v,P=y):(A=l,x=c,R=u,L=f,F=m,C=g,D=y,P=v)),w===0)return null;const $=A/w,Q=x/w,ne=1/w,ue=R-$*z,ke=L-Q*z,Ne=F-$*H,De=C-Q*H,He=D-$*Y,J=P-Q*Y,ae=He*De-J*Ne,fe=ue*J-ke*He,ze=Ne*ke-De*ue;if(a){if(ae<0||fe<0||ze<0)return null}else if((ae<0||fe<0||ze<0)&&(ae>0||fe>0||ze>0))return null;const be=ae+fe+ze;if(be===0)return null;const Fe=ne*(ae*z+fe*H+ze*Y);return(be>0?Fe<0:Fe>0)?null:this.at(Fe/be,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Kg extends Ss{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qa,this.combine=bf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Kh=new wt,tr=new Pf,Qo=new mc,Xh=new K,el=new K,tl=new K,nl=new K,pd=new K,il=new K,Yh=new K,al=new K;class ti extends sn{constructor(e=new Ei,t=new Kg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,a=n.attributes.position,r=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(a,e);const o=this.morphTargetInfluences;if(r&&o){il.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const d=o[c],f=r[c];d!==0&&(pd.fromBufferAttribute(f,e),s?il.addScaledVector(pd,d):il.addScaledVector(pd.sub(t),d))}t.add(il)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,a=this.material,r=this.matrixWorld;a!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qo.copy(n.boundingSphere),Qo.applyMatrix4(r),tr.copy(e.ray).recast(e.near),!(Qo.containsPoint(tr.origin)===!1&&(tr.intersectSphere(Qo,Xh)===null||tr.origin.distanceToSquared(Xh)>(e.far-e.near)**2))&&(Kh.copy(r).invert(),tr.copy(e.ray).applyMatrix4(Kh),!(n.boundingBox!==null&&tr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,tr)))}_computeIntersections(e,t,n){let a;const r=this.geometry,s=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,d=r.attributes.uv1,f=r.attributes.normal,u=r.groups,h=r.drawRange;if(o!==null)if(Array.isArray(s))for(let g=0,m=u.length;g<m;g++){const p=u[g],v=s[p.materialIndex],y=Math.max(p.start,h.start),T=Math.min(o.count,Math.min(p.start+p.count,h.start+h.count));for(let b=y,S=T;b<S;b+=3){const k=o.getX(b),A=o.getX(b+1),x=o.getX(b+2);a=rl(this,v,e,n,l,d,f,k,A,x),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const g=Math.max(0,h.start),m=Math.min(o.count,h.start+h.count);for(let p=g,v=m;p<v;p+=3){const y=o.getX(p),T=o.getX(p+1),b=o.getX(p+2);a=rl(this,s,e,n,l,d,f,y,T,b),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}else if(c!==void 0)if(Array.isArray(s))for(let g=0,m=u.length;g<m;g++){const p=u[g],v=s[p.materialIndex],y=Math.max(p.start,h.start),T=Math.min(c.count,Math.min(p.start+p.count,h.start+h.count));for(let b=y,S=T;b<S;b+=3){const k=b,A=b+1,x=b+2;a=rl(this,v,e,n,l,d,f,k,A,x),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const g=Math.max(0,h.start),m=Math.min(c.count,h.start+h.count);for(let p=g,v=m;p<v;p+=3){const y=p,T=p+1,b=p+2;a=rl(this,s,e,n,l,d,f,y,T,b),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}}}function ax(i,e,t,n,a,r,s,o){let c;if(e.side===Pn?c=n.intersectTriangle(s,r,a,!0,o):c=n.intersectTriangle(a,r,s,e.side===Sr,o),c===null)return null;al.copy(o),al.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(al);return l<t.near||l>t.far?null:{distance:l,point:al.clone(),object:i}}function rl(i,e,t,n,a,r,s,o,c,l){i.getVertexPosition(o,el),i.getVertexPosition(c,tl),i.getVertexPosition(l,nl);const d=ax(i,e,t,n,el,tl,nl,Yh);if(d){const f=new K;Si.getBarycoord(Yh,el,tl,nl,f),a&&(d.uv=Si.getInterpolatedAttribute(a,o,c,l,f,new at)),r&&(d.uv1=Si.getInterpolatedAttribute(r,o,c,l,f,new at)),s&&(d.normal=Si.getInterpolatedAttribute(s,o,c,l,f,new K),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new K,materialIndex:0};Si.getNormal(el,tl,nl,u.normal),d.face=u,d.barycoord=f}return d}class rx extends rn{constructor(e=null,t=1,n=1,a,r,s,o,c,l=Kt,d=Kt,f,u){super(null,s,o,c,l,d,a,r,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const nr=new mc,sx=new at(.5,.5),sl=new K;class Df{constructor(e=new Ma,t=new Ma,n=new Ma,a=new Ma,r=new Ma,s=new Ma){this.planes=[e,t,n,a,r,s]}set(e,t,n,a,r,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(a),o[4].copy(r),o[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ni,n=!1){const a=this.planes,r=e.elements,s=r[0],o=r[1],c=r[2],l=r[3],d=r[4],f=r[5],u=r[6],h=r[7],g=r[8],m=r[9],p=r[10],v=r[11],y=r[12],T=r[13],b=r[14],S=r[15];if(a[0].setComponents(l-s,h-d,v-g,S-y).normalize(),a[1].setComponents(l+s,h+d,v+g,S+y).normalize(),a[2].setComponents(l+o,h+f,v+m,S+T).normalize(),a[3].setComponents(l-o,h-f,v-m,S-T).normalize(),n)a[4].setComponents(c,u,p,b).normalize(),a[5].setComponents(l-c,h-u,v-p,S-b).normalize();else if(a[4].setComponents(l-c,h-u,v-p,S-b).normalize(),t===Ni)a[5].setComponents(l+c,h+u,v+p,S+b).normalize();else if(t===xo)a[5].setComponents(c,u,p,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),nr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),nr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(nr)}intersectsSprite(e){nr.center.set(0,0,0);const t=sx.distanceTo(e.center);return nr.radius=.7071067811865476+t,nr.applyMatrix4(e.matrixWorld),this.intersectsSphere(nr)}intersectsSphere(e){const t=this.planes,n=e.center,a=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const a=t[n];if(sl.x=a.normal.x>0?e.max.x:e.min.x,sl.y=a.normal.y>0?e.max.y:e.min.y,sl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(sl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Xg extends Ss{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new st(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Kl=new K,Xl=new K,Zh=new wt,Us=new Pf,ol=new mc,md=new K,Jh=new K;class ox extends sn{constructor(e=new Ei,t=new Xg){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let a=1,r=t.count;a<r;a++)Kl.fromBufferAttribute(t,a-1),Xl.fromBufferAttribute(t,a),n[a]=n[a-1],n[a]+=Kl.distanceTo(Xl);e.setAttribute("lineDistance",new fi(n,1))}else $e("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,a=this.matrixWorld,r=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ol.copy(n.boundingSphere),ol.applyMatrix4(a),ol.radius+=r,e.ray.intersectsSphere(ol)===!1)return;Zh.copy(a).invert(),Us.copy(e.ray).applyMatrix4(Zh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,d=n.index,u=n.attributes.position;if(d!==null){const h=Math.max(0,s.start),g=Math.min(d.count,s.start+s.count);for(let m=h,p=g-1;m<p;m+=l){const v=d.getX(m),y=d.getX(m+1),T=ll(this,e,Us,c,v,y,m);T&&t.push(T)}if(this.isLineLoop){const m=d.getX(g-1),p=d.getX(h),v=ll(this,e,Us,c,m,p,g-1);v&&t.push(v)}}else{const h=Math.max(0,s.start),g=Math.min(u.count,s.start+s.count);for(let m=h,p=g-1;m<p;m+=l){const v=ll(this,e,Us,c,m,m+1,m);v&&t.push(v)}if(this.isLineLoop){const m=ll(this,e,Us,c,g-1,h,g-1);m&&t.push(m)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ll(i,e,t,n,a,r,s){const o=i.geometry.attributes.position;if(Kl.fromBufferAttribute(o,a),Xl.fromBufferAttribute(o,r),t.distanceSqToSegment(Kl,Xl,md,Jh)>n)return;md.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(md);if(!(l<e.near||l>e.far))return{distance:l,point:Jh.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const jh=new K,Qh=new K;class lx extends ox{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let a=0,r=t.count;a<r;a+=2)jh.fromBufferAttribute(t,a),Qh.fromBufferAttribute(t,a+1),n[a]=a===0?0:n[a-1],n[a+1]=n[a]+jh.distanceTo(Qh);e.setAttribute("lineDistance",new fi(n,1))}else $e("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Yg extends rn{constructor(e=[],t=kr,n,a,r,s,o,c,l,d){super(e,t,n,a,r,s,o,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Zg extends rn{constructor(e,t,n,a,r,s,o,c,l){super(e,t,n,a,r,s,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class So extends rn{constructor(e,t,n=$i,a,r,s,o=Kt,c=Kt,l,d=ca,f=1){if(d!==ca&&d!==pr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:f};super(u,a,r,s,o,c,d,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Lf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class cx extends So{constructor(e,t=$i,n=kr,a,r,s=Kt,o=Kt,c,l=ca){const d={width:e,height:e,depth:1},f=[d,d,d,d,d,d];super(e,e,t,n,a,r,s,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Jg extends rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class da extends Ei{constructor(e=1,t=1,n=1,a=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:a,heightSegments:r,depthSegments:s};const o=this;a=Math.floor(a),r=Math.floor(r),s=Math.floor(s);const c=[],l=[],d=[],f=[];let u=0,h=0;g("z","y","x",-1,-1,n,t,e,s,r,0),g("z","y","x",1,-1,n,t,-e,s,r,1),g("x","z","y",1,1,e,n,t,a,s,2),g("x","z","y",1,-1,e,n,-t,a,s,3),g("x","y","z",1,-1,e,t,n,a,r,4),g("x","y","z",-1,-1,e,t,-n,a,r,5),this.setIndex(c),this.setAttribute("position",new fi(l,3)),this.setAttribute("normal",new fi(d,3)),this.setAttribute("uv",new fi(f,2));function g(m,p,v,y,T,b,S,k,A,x,w){const R=b/A,L=S/x,z=b/2,F=S/2,C=k/2,H=A+1,D=x+1;let P=0,Y=0;const $=new K;for(let Q=0;Q<D;Q++){const ne=Q*L-F;for(let ue=0;ue<H;ue++){const ke=ue*R-z;$[m]=ke*y,$[p]=ne*T,$[v]=C,l.push($.x,$.y,$.z),$[m]=0,$[p]=0,$[v]=k>0?1:-1,d.push($.x,$.y,$.z),f.push(ue/A),f.push(1-Q/x),P+=1}}for(let Q=0;Q<x;Q++)for(let ne=0;ne<A;ne++){const ue=u+ne+H*Q,ke=u+ne+H*(Q+1),Ne=u+(ne+1)+H*(Q+1),De=u+(ne+1)+H*Q;c.push(ue,ke,De),c.push(ke,Ne,De),Y+=6}o.addGroup(h,Y,w),h+=Y,u+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new da(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class gc extends Ei{constructor(e=1,t=1,n=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:a};const r=e/2,s=t/2,o=Math.floor(n),c=Math.floor(a),l=o+1,d=c+1,f=e/o,u=t/c,h=[],g=[],m=[],p=[];for(let v=0;v<d;v++){const y=v*u-s;for(let T=0;T<l;T++){const b=T*f-r;g.push(b,-y,0),m.push(0,0,1),p.push(T/o),p.push(1-v/c)}}for(let v=0;v<c;v++)for(let y=0;y<o;y++){const T=y+l*v,b=y+l*(v+1),S=y+1+l*(v+1),k=y+1+l*v;h.push(T,b,k),h.push(b,S,k)}this.setIndex(h),this.setAttribute("position",new fi(g,3)),this.setAttribute("normal",new fi(m,3)),this.setAttribute("uv",new fi(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gc(e.width,e.height,e.widthSegments,e.heightSegments)}}function ys(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const a=i[t][n];if(ep(a))a.isRenderTargetTexture?($e("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=a.clone();else if(Array.isArray(a))if(ep(a[0])){const r=[];for(let s=0,o=a.length;s<o;s++)r[s]=a[s].clone();e[t][n]=r}else e[t][n]=a.slice();else e[t][n]=a}}return e}function yn(i){const e={};for(let t=0;t<i.length;t++){const n=ys(i[t]);for(const a in n)e[a]=n[a]}return e}function ep(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function dx(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function jg(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const ux={clone:ys,merge:yn};var fx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vi extends Ss{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fx,this.fragmentShader=hx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ys(e.uniforms),this.uniformsGroups=dx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const s=this.uniforms[a].value;s&&s.isTexture?t.uniforms[a]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[a]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[a]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[a]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[a]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[a]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[a]={type:"m4",value:s.toArray()}:t.uniforms[a]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const a in this.extensions)this.extensions[a]===!0&&(n[a]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const a=e.uniforms[n];switch(this.uniforms[n]={},a.type){case"t":this.uniforms[n].value=t[a.value]||null;break;case"c":this.uniforms[n].value=new st().setHex(a.value);break;case"v2":this.uniforms[n].value=new at().fromArray(a.value);break;case"v3":this.uniforms[n].value=new K().fromArray(a.value);break;case"v4":this.uniforms[n].value=new Pt().fromArray(a.value);break;case"m3":this.uniforms[n].value=new qe().fromArray(a.value);break;case"m4":this.uniforms[n].value=new wt().fromArray(a.value);break;default:this.uniforms[n].value=a.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class px extends Vi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Yl extends Ss{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new st(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bu,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qa,this.combine=bf,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class mx extends Ss{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=by,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class gx extends Ss{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const gd={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(tp(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!tp(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function tp(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class vx{constructor(e,t,n){const a=this;let r=!1,s=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(d){o++,r===!1&&a.onStart!==void 0&&a.onStart(d,s,o),r=!0},this.itemEnd=function(d){s++,a.onProgress!==void 0&&a.onProgress(d,s,o),s===o&&(r=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(d){a.onError!==void 0&&a.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,f){return l.push(d,f),this},this.removeHandler=function(d){const f=l.indexOf(d);return f!==-1&&l.splice(f,2),this},this.getHandler=function(d){for(let f=0,u=l.length;f<u;f+=2){const h=l[f],g=l[f+1];if(h.global&&(h.lastIndex=0),h.test(d))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const _x=new vx;class Qg{constructor(e){this.manager=e!==void 0?e:_x,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(a,r){n.load(e,a,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Qg.DEFAULT_MATERIAL_NAME="__DEFAULT";const Gr=new WeakMap;class yx extends Qg{constructor(e){super(e)}load(e,t,n,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=gd.get(`image:${e}`);if(s!==void 0){if(s.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0);else{let f=Gr.get(s);f===void 0&&(f=[],Gr.set(s,f)),f.push({onLoad:t,onError:a})}return s}const o=bo("img");function c(){d(),t&&t(this);const f=Gr.get(this)||[];for(let u=0;u<f.length;u++){const h=f[u];h.onLoad&&h.onLoad(this)}Gr.delete(this),r.manager.itemEnd(e)}function l(f){d(),a&&a(f),gd.remove(`image:${e}`);const u=Gr.get(this)||[];for(let h=0;h<u.length;h++){const g=u[h];g.onError&&g.onError(f)}Gr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function d(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),gd.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class ev extends sn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new st(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const vd=new wt,np=new K,ip=new K;class xx{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.mapType=Kn,this.map=null,this.mapPass=null,this.matrix=new wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Df,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;np.setFromMatrixPosition(e.matrixWorld),t.position.copy(np),ip.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ip),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,a){vd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(vd,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,s=a?a.z/r.x:1,o=a?a.w/r.y:1,c=a?a.x/r.x:0,l=a?a.y/r.y:0;e.coordinateSystem===xo||e.reversedDepth?t.set(.5*s,0,0,.5*s+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*s,0,0,.5*s+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(vd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const cl=new K,dl=new bs,Ai=new K;class tv extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=Ni,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(cl,dl,Ai),Ai.x===1&&Ai.y===1&&Ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(cl,dl,Ai.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(cl,dl,Ai),Ai.x===1&&Ai.y===1&&Ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(cl,dl,Ai.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ba=new K,ap=new at,rp=new at;class oi extends tv{constructor(e=50,t=1,n=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Hu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Rl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hu*2*Math.atan(Math.tan(Rl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ba.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ba.x,ba.y).multiplyScalar(-e/ba.z),ba.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ba.x,ba.y).multiplyScalar(-e/ba.z)}getViewSize(e,t){return this.getViewBounds(e,ap,rp),t.subVectors(rp,ap)}setViewOffset(e,t,n,a,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Rl*.5*this.fov)/this.zoom,n=2*t,a=this.aspect*n,r=-.5*a;const s=this.view;if(this.view!==null&&this.view.enabled){const c=s.fullWidth,l=s.fullHeight;r+=s.offsetX*a/c,t-=s.offsetY*n/l,a*=s.width/c,n*=s.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+a,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class If extends tv{constructor(e=-1,t=1,n=1,a=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=a,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,a,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let r=n-e,s=n+e,o=a+t,c=a-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,s=r+l*this.view.width,o-=d*this.view.offsetY,c=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class bx extends xx{constructor(){super(new If(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class sp extends ev{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.target=new sn,this.shadow=new bx}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Sx extends ev{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Vr=-90,qr=1;class kx extends sn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new oi(Vr,qr,e,t);a.layers=this.layers,this.add(a);const r=new oi(Vr,qr,e,t);r.layers=this.layers,this.add(r);const s=new oi(Vr,qr,e,t);s.layers=this.layers,this.add(s);const o=new oi(Vr,qr,e,t);o.layers=this.layers,this.add(o);const c=new oi(Vr,qr,e,t);c.layers=this.layers,this.add(c);const l=new oi(Vr,qr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,a,r,s,o,c]=t;for(const l of t)this.remove(l);if(e===Ni)n.up.set(0,1,0),n.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===xo)n.up.set(0,-1,0),n.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,c,l,d]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,a),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,a),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,2,a),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,a),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,a),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,a),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(f,u,h),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Mx extends oi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const op=new wt;class Ex{constructor(e,t,n=0,a=1/0){this.ray=new Pf(e,t),this.near=n,this.far=a,this.camera=null,this.layers=new Cf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):lt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return op.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(op),this}intersectObject(e,t=!0,n=[]){return $u(e,this,n,t),n.sort(lp),n}intersectObjects(e,t=!0,n=[]){for(let a=0,r=e.length;a<r;a++)$u(e[a],this,n,t);return n.sort(lp),n}}function lp(i,e){return i.distance-e.distance}function $u(i,e,t,n){let a=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(a=!1),a===!0&&n===!0){const r=i.children;for(let s=0,o=r.length;s<o;s++)$u(r[s],e,t,!0)}}class wx{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,$e("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class nv{static{nv.prototype.isMatrix2=!0}constructor(e,t,n,a){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,a)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,a){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=a,this}}function cp(i,e,t,n){const a=Tx(n);switch(t){case Fg:return i*e;case Hg:return i*e/a.components*a.byteLength;case Ef:return i*e/a.components*a.byteLength;case Mr:return i*e*2/a.components*a.byteLength;case wf:return i*e*2/a.components*a.byteLength;case Bg:return i*e*3/a.components*a.byteLength;case ki:return i*e*4/a.components*a.byteLength;case Tf:return i*e*4/a.components*a.byteLength;case El:case wl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Tl:case Al:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case uu:case hu:return Math.max(i,16)*Math.max(e,8)/4;case du:case fu:return Math.max(i,8)*Math.max(e,8)/2;case pu:case mu:case vu:case _u:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case gu:case Gl:case yu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case xu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case bu:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Su:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ku:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Mu:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Eu:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case wu:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Tu:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Au:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ru:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Lu:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Cu:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Pu:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Du:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Iu:case zu:case Uu:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Nu:case Ou:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Vl:case Fu:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Tx(i){switch(i){case Kn:case zg:return{byteLength:1,components:1};case _o:case Ug:case Gi:return{byteLength:2,components:1};case kf:case Mf:return{byteLength:2,components:4};case $i:case Sf:case Ui:return{byteLength:4,components:1};case Ng:case Og:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xf}}));typeof window<"u"&&(window.__THREE__?$e("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function iv(){let i=null,e=!1,t=null,n=null;function a(r,s){n=i.requestAnimationFrame(a),t(r,s)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(a),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Ax(i){const e=new WeakMap;function t(o,c){const l=o.array,d=o.usage,f=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,d),o.onUploadCallback();let h;if(l instanceof Float32Array)h=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)h=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?h=i.HALF_FLOAT:h=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=i.SHORT;else if(l instanceof Uint32Array)h=i.UNSIGNED_INT;else if(l instanceof Int32Array)h=i.INT;else if(l instanceof Int8Array)h=i.BYTE;else if(l instanceof Uint8Array)h=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){const d=c.array,f=c.updateRanges;if(i.bindBuffer(l,o),f.length===0)i.bufferSubData(l,0,d);else{f.sort((h,g)=>h.start-g.start);let u=0;for(let h=1;h<f.length;h++){const g=f[u],m=f[h];m.start<=g.start+g.count+1?g.count=Math.max(g.count,m.start+m.count-g.start):(++u,f[u]=m)}f.length=u+1;for(let h=0,g=f.length;h<g;h++){const m=f[h];i.bufferSubData(l,m.start*d.BYTES_PER_ELEMENT,d,m.start,m.count)}c.clearUpdateRanges()}c.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function s(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:a,remove:r,update:s}}var Rx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Cx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Px=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ix=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ux=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Ox=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,$x=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Gx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Vx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,qx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Yx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Zx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Jx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,jx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Qx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,eb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,tb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ib=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ab=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rb="gl_FragColor = linearToOutputTexel( gl_FragColor );",sb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ob=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,lb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,cb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,db=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ub=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,vb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_b=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,bb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Sb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Eb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Tb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ab=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Rb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Lb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cb=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Pb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Db=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ib=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ub=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Nb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ob=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Fb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$b=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Wb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Xb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Yb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,jb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Qb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,eS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,iS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,aS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,rS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,oS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,fS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,hS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,pS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,mS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,vS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_S=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,yS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,SS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,kS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,MS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ES=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,TS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,AS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const RS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,LS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,PS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,US=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,NS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,OS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,FS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,BS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$S=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,GS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,VS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,XS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ZS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,JS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ek=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tk=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nk=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ik=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ak=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rk=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sk=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ok=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lk=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ye={alphahash_fragment:Rx,alphahash_pars_fragment:Lx,alphamap_fragment:Cx,alphamap_pars_fragment:Px,alphatest_fragment:Dx,alphatest_pars_fragment:Ix,aomap_fragment:zx,aomap_pars_fragment:Ux,batching_pars_vertex:Nx,batching_vertex:Ox,begin_vertex:Fx,beginnormal_vertex:Bx,bsdfs:Hx,iridescence_fragment:$x,bumpmap_pars_fragment:Gx,clipping_planes_fragment:Vx,clipping_planes_pars_fragment:qx,clipping_planes_pars_vertex:Wx,clipping_planes_vertex:Kx,color_fragment:Xx,color_pars_fragment:Yx,color_pars_vertex:Zx,color_vertex:Jx,common:jx,cube_uv_reflection_fragment:Qx,defaultnormal_vertex:eb,displacementmap_pars_vertex:tb,displacementmap_vertex:nb,emissivemap_fragment:ib,emissivemap_pars_fragment:ab,colorspace_fragment:rb,colorspace_pars_fragment:sb,envmap_fragment:ob,envmap_common_pars_fragment:lb,envmap_pars_fragment:cb,envmap_pars_vertex:db,envmap_physical_pars_fragment:bb,envmap_vertex:ub,fog_vertex:fb,fog_pars_vertex:hb,fog_fragment:pb,fog_pars_fragment:mb,gradientmap_pars_fragment:gb,lightmap_pars_fragment:vb,lights_lambert_fragment:_b,lights_lambert_pars_fragment:yb,lights_pars_begin:xb,lights_toon_fragment:Sb,lights_toon_pars_fragment:kb,lights_phong_fragment:Mb,lights_phong_pars_fragment:Eb,lights_physical_fragment:wb,lights_physical_pars_fragment:Tb,lights_fragment_begin:Ab,lights_fragment_maps:Rb,lights_fragment_end:Lb,lightprobes_pars_fragment:Cb,logdepthbuf_fragment:Pb,logdepthbuf_pars_fragment:Db,logdepthbuf_pars_vertex:Ib,logdepthbuf_vertex:zb,map_fragment:Ub,map_pars_fragment:Nb,map_particle_fragment:Ob,map_particle_pars_fragment:Fb,metalnessmap_fragment:Bb,metalnessmap_pars_fragment:Hb,morphinstance_vertex:$b,morphcolor_vertex:Gb,morphnormal_vertex:Vb,morphtarget_pars_vertex:qb,morphtarget_vertex:Wb,normal_fragment_begin:Kb,normal_fragment_maps:Xb,normal_pars_fragment:Yb,normal_pars_vertex:Zb,normal_vertex:Jb,normalmap_pars_fragment:jb,clearcoat_normal_fragment_begin:Qb,clearcoat_normal_fragment_maps:eS,clearcoat_pars_fragment:tS,iridescence_pars_fragment:nS,opaque_fragment:iS,packing:aS,premultiplied_alpha_fragment:rS,project_vertex:sS,dithering_fragment:oS,dithering_pars_fragment:lS,roughnessmap_fragment:cS,roughnessmap_pars_fragment:dS,shadowmap_pars_fragment:uS,shadowmap_pars_vertex:fS,shadowmap_vertex:hS,shadowmask_pars_fragment:pS,skinbase_vertex:mS,skinning_pars_vertex:gS,skinning_vertex:vS,skinnormal_vertex:_S,specularmap_fragment:yS,specularmap_pars_fragment:xS,tonemapping_fragment:bS,tonemapping_pars_fragment:SS,transmission_fragment:kS,transmission_pars_fragment:MS,uv_pars_fragment:ES,uv_pars_vertex:wS,uv_vertex:TS,worldpos_vertex:AS,background_vert:RS,background_frag:LS,backgroundCube_vert:CS,backgroundCube_frag:PS,cube_vert:DS,cube_frag:IS,depth_vert:zS,depth_frag:US,distance_vert:NS,distance_frag:OS,equirect_vert:FS,equirect_frag:BS,linedashed_vert:HS,linedashed_frag:$S,meshbasic_vert:GS,meshbasic_frag:VS,meshlambert_vert:qS,meshlambert_frag:WS,meshmatcap_vert:KS,meshmatcap_frag:XS,meshnormal_vert:YS,meshnormal_frag:ZS,meshphong_vert:JS,meshphong_frag:jS,meshphysical_vert:QS,meshphysical_frag:ek,meshtoon_vert:tk,meshtoon_frag:nk,points_vert:ik,points_frag:ak,shadow_vert:rk,shadow_frag:sk,sprite_vert:ok,sprite_frag:lk},_e={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new K},probesMax:{value:new K},probesResolution:{value:new K}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},Ci={basic:{uniforms:yn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:yn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new st(0)},envMapIntensity:{value:1}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:yn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:yn([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:yn([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new st(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:yn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:yn([_e.points,_e.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:yn([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:yn([_e.common,_e.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:yn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:yn([_e.sprite,_e.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distance:{uniforms:yn([_e.common,_e.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distance_vert,fragmentShader:Ye.distance_frag},shadow:{uniforms:yn([_e.lights,_e.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};Ci.physical={uniforms:yn([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const ul={r:0,b:0,g:0},ck=new wt,av=new qe;av.set(-1,0,0,0,1,0,0,0,1);function dk(i,e,t,n,a,r){const s=new st(0);let o=a===!0?0:1,c,l,d=null,f=0,u=null;function h(y){let T=y.isScene===!0?y.background:null;if(T&&T.isTexture){const b=y.backgroundBlurriness>0;T=e.get(T,b)}return T}function g(y){let T=!1;const b=h(y);b===null?p(s,o):b&&b.isColor&&(p(b,1),T=!0);const S=i.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,T){const b=h(T);b&&(b.isCubeTexture||b.mapping===pc)?(l===void 0&&(l=new ti(new da(1,1,1),new Vi({name:"BackgroundCubeMaterial",uniforms:ys(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,k,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=b,l.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(ck.makeRotationFromEuler(T.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(av),l.material.toneMapped=tt.getTransfer(b.colorSpace)!==pt,(d!==b||f!==b.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,d=b,f=b.version,u=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new ti(new gc(2,2),new Vi({name:"BackgroundMaterial",uniforms:ys(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:Sr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=tt.getTransfer(b.colorSpace)!==pt,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(d!==b||f!==b.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,d=b,f=b.version,u=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,T){y.getRGB(ul,jg(i)),t.buffers.color.setClear(ul.r,ul.g,ul.b,T,r)}function v(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return s},setClearColor:function(y,T=1){s.set(y),o=T,p(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,p(s,o)},render:g,addToRenderList:m,dispose:v}}function uk(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},a=u(null);let r=a,s=!1;function o(L,z,F,C,H){let D=!1;const P=f(L,C,F,z);r!==P&&(r=P,l(r.object)),D=h(L,C,F,H),D&&g(L,C,F,H),H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),(D||s)&&(s=!1,b(L,z,F,C),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function c(){return i.createVertexArray()}function l(L){return i.bindVertexArray(L)}function d(L){return i.deleteVertexArray(L)}function f(L,z,F,C){const H=C.wireframe===!0;let D=n[z.id];D===void 0&&(D={},n[z.id]=D);const P=L.isInstancedMesh===!0?L.id:0;let Y=D[P];Y===void 0&&(Y={},D[P]=Y);let $=Y[F.id];$===void 0&&($={},Y[F.id]=$);let Q=$[H];return Q===void 0&&(Q=u(c()),$[H]=Q),Q}function u(L){const z=[],F=[],C=[];for(let H=0;H<t;H++)z[H]=0,F[H]=0,C[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:F,attributeDivisors:C,object:L,attributes:{},index:null}}function h(L,z,F,C){const H=r.attributes,D=z.attributes;let P=0;const Y=F.getAttributes();for(const $ in Y)if(Y[$].location>=0){const ne=H[$];let ue=D[$];if(ue===void 0&&($==="instanceMatrix"&&L.instanceMatrix&&(ue=L.instanceMatrix),$==="instanceColor"&&L.instanceColor&&(ue=L.instanceColor)),ne===void 0||ne.attribute!==ue||ue&&ne.data!==ue.data)return!0;P++}return r.attributesNum!==P||r.index!==C}function g(L,z,F,C){const H={},D=z.attributes;let P=0;const Y=F.getAttributes();for(const $ in Y)if(Y[$].location>=0){let ne=D[$];ne===void 0&&($==="instanceMatrix"&&L.instanceMatrix&&(ne=L.instanceMatrix),$==="instanceColor"&&L.instanceColor&&(ne=L.instanceColor));const ue={};ue.attribute=ne,ne&&ne.data&&(ue.data=ne.data),H[$]=ue,P++}r.attributes=H,r.attributesNum=P,r.index=C}function m(){const L=r.newAttributes;for(let z=0,F=L.length;z<F;z++)L[z]=0}function p(L){v(L,0)}function v(L,z){const F=r.newAttributes,C=r.enabledAttributes,H=r.attributeDivisors;F[L]=1,C[L]===0&&(i.enableVertexAttribArray(L),C[L]=1),H[L]!==z&&(i.vertexAttribDivisor(L,z),H[L]=z)}function y(){const L=r.newAttributes,z=r.enabledAttributes;for(let F=0,C=z.length;F<C;F++)z[F]!==L[F]&&(i.disableVertexAttribArray(F),z[F]=0)}function T(L,z,F,C,H,D,P){P===!0?i.vertexAttribIPointer(L,z,F,H,D):i.vertexAttribPointer(L,z,F,C,H,D)}function b(L,z,F,C){m();const H=C.attributes,D=F.getAttributes(),P=z.defaultAttributeValues;for(const Y in D){const $=D[Y];if($.location>=0){let Q=H[Y];if(Q===void 0&&(Y==="instanceMatrix"&&L.instanceMatrix&&(Q=L.instanceMatrix),Y==="instanceColor"&&L.instanceColor&&(Q=L.instanceColor)),Q!==void 0){const ne=Q.normalized,ue=Q.itemSize,ke=e.get(Q);if(ke===void 0)continue;const Ne=ke.buffer,De=ke.type,He=ke.bytesPerElement,J=De===i.INT||De===i.UNSIGNED_INT||Q.gpuType===Sf;if(Q.isInterleavedBufferAttribute){const ae=Q.data,fe=ae.stride,ze=Q.offset;if(ae.isInstancedInterleavedBuffer){for(let be=0;be<$.locationSize;be++)v($.location+be,ae.meshPerAttribute);L.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let be=0;be<$.locationSize;be++)p($.location+be);i.bindBuffer(i.ARRAY_BUFFER,Ne);for(let be=0;be<$.locationSize;be++)T($.location+be,ue/$.locationSize,De,ne,fe*He,(ze+ue/$.locationSize*be)*He,J)}else{if(Q.isInstancedBufferAttribute){for(let ae=0;ae<$.locationSize;ae++)v($.location+ae,Q.meshPerAttribute);L.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ae=0;ae<$.locationSize;ae++)p($.location+ae);i.bindBuffer(i.ARRAY_BUFFER,Ne);for(let ae=0;ae<$.locationSize;ae++)T($.location+ae,ue/$.locationSize,De,ne,ue*He,ue/$.locationSize*ae*He,J)}}else if(P!==void 0){const ne=P[Y];if(ne!==void 0)switch(ne.length){case 2:i.vertexAttrib2fv($.location,ne);break;case 3:i.vertexAttrib3fv($.location,ne);break;case 4:i.vertexAttrib4fv($.location,ne);break;default:i.vertexAttrib1fv($.location,ne)}}}}y()}function S(){w();for(const L in n){const z=n[L];for(const F in z){const C=z[F];for(const H in C){const D=C[H];for(const P in D)d(D[P].object),delete D[P];delete C[H]}}delete n[L]}}function k(L){if(n[L.id]===void 0)return;const z=n[L.id];for(const F in z){const C=z[F];for(const H in C){const D=C[H];for(const P in D)d(D[P].object),delete D[P];delete C[H]}}delete n[L.id]}function A(L){for(const z in n){const F=n[z];for(const C in F){const H=F[C];if(H[L.id]===void 0)continue;const D=H[L.id];for(const P in D)d(D[P].object),delete D[P];delete H[L.id]}}}function x(L){for(const z in n){const F=n[z],C=L.isInstancedMesh===!0?L.id:0,H=F[C];if(H!==void 0){for(const D in H){const P=H[D];for(const Y in P)d(P[Y].object),delete P[Y];delete H[D]}delete F[C],Object.keys(F).length===0&&delete n[z]}}}function w(){R(),s=!0,r!==a&&(r=a,l(r.object))}function R(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:w,resetDefaultState:R,dispose:S,releaseStatesOfGeometry:k,releaseStatesOfObject:x,releaseStatesOfProgram:A,initAttributes:m,enableAttribute:p,disableUnusedAttributes:y}}function fk(i,e,t){let n;function a(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function s(c,l,d){d!==0&&(i.drawArraysInstanced(n,c,l,d),t.update(l,n,d))}function o(c,l,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,d);let u=0;for(let h=0;h<d;h++)u+=l[h];t.update(u,n,1)}this.setMode=a,this.render=r,this.renderInstances=s,this.renderMultiDraw=o}function hk(i,e,t,n){let a;function r(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");a=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(A){return!(A!==ki&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const x=A===Gi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Kn&&A!==Ui&&!x&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const d=c(l);d!==l&&($e("WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const f=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&$e("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),k=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:s,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:h,maxVertexTextures:g,maxTextureSize:m,maxCubemapSize:p,maxAttributes:v,maxVertexUniforms:y,maxVaryings:T,maxFragmentUniforms:b,maxSamples:S,samples:k}}function pk(i){const e=this;let t=null,n=0,a=!1,r=!1;const s=new Ma,o=new qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const h=f.length!==0||u||n!==0||a;return a=u,n=f.length,h},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=d(f,u,0)},this.setState=function(f,u,h){const g=f.clippingPlanes,m=f.clipIntersection,p=f.clipShadows,v=i.get(f);if(!a||g===null||g.length===0||r&&!p)r?d(null):l();else{const y=r?0:n,T=y*4;let b=v.clippingState||null;c.value=b,b=d(g,u,T,h);for(let S=0;S!==T;++S)b[S]=t[S];v.clippingState=b,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(f,u,h,g){const m=f!==null?f.length:0;let p=null;if(m!==0){if(p=c.value,g!==!0||p===null){const v=h+m*4,y=u.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<v)&&(p=new Float32Array(v));for(let T=0,b=h;T!==m;++T,b+=4)s.copy(f[T]).applyMatrix4(y,o),s.normal.toArray(p,b),p[b+3]=s.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,p}}const ts=4,mk=6,gk=20,vk=256,Ns=new If,dp=new st;let _d=null,yd=0,xd=0,bd=!1;const _k=new K,ir=new K;class up{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,a=100,r={}){const{size:s=256,position:o=_k}=r;_d=this._renderer.getRenderTarget(),yd=this._renderer.getActiveCubeFace(),xd=this._renderer.getActiveMipmapLevel(),bd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,a,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(_d,yd,xd),this._renderer.xr.enabled=bd,e.scissorTest=!1,Wr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===kr||e.mapping===_s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_d=this._renderer.getRenderTarget(),yd=this._renderer.getActiveCubeFace(),xd=this._renderer.getActiveMipmapLevel(),bd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:Gi,format:ki,colorSpace:ql,depthBuffer:!1},a=fp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fp(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=yk(r)),this._blurMaterial=bk(r,e,t),this._ggxMaterial=xk(r,e,t)}return a}_compileMaterial(e){const t=new ti(new Ei,e);this._renderer.compile(t,Ns)}_sceneToCubeUV(e,t,n,a,r){const c=new oi(90,1,t,n),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,h=f.toneMapping;f.getClearColor(dp),f.toneMapping=Bi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(a),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ti(new da,new Kg({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1})));const m=this._backgroundBox,p=m.material;let v=!1;const y=e.background;y?y.isColor&&(p.color.copy(y),e.background=null,v=!0):(p.color.copy(dp),v=!0);for(let T=0;T<6;T++){const b=T%3;b===0?(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+d[T],r.y,r.z)):b===1?(c.up.set(0,0,l[T]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+d[T],r.z)):(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+d[T]));const S=this._cubeSize;Wr(a,b*S,T>2?S:0,S,S),f.setRenderTarget(a),v&&f.render(m,c),f.render(e,c)}f.toneMapping=h,f.autoClear=u,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,a=e.mapping===kr||e.mapping===_s;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=pp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hp());const r=a?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=r;const o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;Wr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(s,Ns)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const a=this._lodMeshes.length;for(let r=1;r<a;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const a=this._renderer,r=this._pingPongRenderTarget,s=this._ggxMaterial,o=this._lodMeshes[n];o.material=s;const c=s.uniforms,l=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),f=Math.sqrt(l*l-d*d),u=l*1.25,h=f*u,{_lodMax:g}=this,m=this._sizeLods[n],p=3*m*(n>g-ts?n-g+ts:0),v=4*(this._cubeSize-m);c.envMap.value=e.texture,c.roughness.value=h,c.mipInt.value=g-t,Wr(r,p,v,3*m,2*m),a.setRenderTarget(r),a.render(o,Ns),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,Wr(e,p,v,3*m,2*m),a.setRenderTarget(e),a.render(o,Ns)}_blur(e,t,n,a){const r=this._pingPongRenderTarget,s=Math.min(a,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,s),this._blurPass(r,e,n,n,s)}_blurPass(e,t,n,a,r){const s=this._renderer,o=this._blurMaterial,c=this._lodMeshes[a];c.material=o;const l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;const d=this._sizeLods[a],f=3*d*(a>this._lodMax-ts?a-this._lodMax+ts:0),u=4*(this._cubeSize-d);Wr(t,f,u,3*d,2*d),s.setRenderTarget(t),s.render(c,Ns)}}function yk(i){const e=[],t=[];let n=i;const a=i-ts+1+mk;for(let r=0;r<a;r++){const s=Math.pow(2,n);e.push(s);const o=1/(s-2),c=-o,l=1+o,d=[c,c,l,c,l,l,c,c,l,l,c,l],f=6,u=6,h=3,g=new Float32Array(h*u*f),m=new Float32Array(h*u*f);for(let v=0;v<f;v++){const y=v%3*2/3-1,T=v>2?0:-1,b=[y,T,0,y+2/3,T,0,y+2/3,T+1,0,y,T,0,y+2/3,T+1,0,y,T+1,0];g.set(b,h*u*v);for(let S=0;S<u;S++){const k=d[S*2]*2-1,A=d[S*2+1]*2-1;v===0?ir.set(1,A,k):v===1?ir.set(-k,1,-A):v===2?ir.set(-k,A,1):v===3?ir.set(-1,A,-k):v===4?ir.set(-k,-1,A):ir.set(k,A,-1),ir.toArray(m,(v*u+S)*h)}}const p=new Ei;p.setAttribute("position",new ra(g,h)),p.setAttribute("outputDirection",new ra(m,h)),t.push(new ti(p,null)),n>ts&&n--}return{lodMeshes:t,sizeLods:e}}function fp(i,e,t){const n=new Mi(i,e,t);return n.texture.mapping=pc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Wr(i,e,t,n,a){i.viewport.set(e,t,n,a),i.scissor.set(e,t,n,a)}function xk(i,e,t){return new Vi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:vk,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:vc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ia,depthTest:!1,depthWrite:!1})}function bk(i,e,t){return new Vi({name:"SphericalGaussianBlur",defines:{SAMPLES:gk,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:vc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:ia,depthTest:!1,depthWrite:!1})}function hp(){return new Vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ia,depthTest:!1,depthWrite:!1})}function pp(){return new Vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ia,depthTest:!1,depthWrite:!1})}function vc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class rv extends Mi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},a=[n,n,n,n,n,n];this.texture=new Yg(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new da(5,5,5),r=new Vi({name:"CubemapFromEquirect",uniforms:ys(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pn,blending:ia});r.uniforms.tEquirect.value=t;const s=new ti(a,r),o=t.minFilter;return t.minFilter===Pa&&(t.minFilter=nn),new kx(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,n=!0,a=!0){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,a);e.setRenderTarget(r)}}function Sk(i){let e=new WeakMap,t=new WeakMap,n=null;function a(u,h=!1){return u==null?null:h?s(u):r(u)}function r(u){if(u&&u.isTexture){const h=u.mapping;if(h===Vc||h===qc)if(e.has(u)){const g=e.get(u).texture;return o(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const m=new rv(g.height);return m.fromEquirectangularTexture(i,u),e.set(u,m),u.addEventListener("dispose",l),o(m.texture,u.mapping)}else return null}}return u}function s(u){if(u&&u.isTexture){const h=u.mapping,g=h===Vc||h===qc,m=h===kr||h===_s;if(g||m){let p=t.get(u);const v=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==v)return n===null&&(n=new up(i)),p=g?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),p.texture;if(p!==void 0)return p.texture;{const y=u.image;return g&&y&&y.height>0||m&&y&&c(y)?(n===null&&(n=new up(i)),p=g?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),u.addEventListener("dispose",d),p.texture):null}}}return u}function o(u,h){return h===Vc?u.mapping=kr:h===qc&&(u.mapping=_s),u}function c(u){let h=0;const g=6;for(let m=0;m<g;m++)u[m]!==void 0&&h++;return h===g}function l(u){const h=u.target;h.removeEventListener("dispose",l);const g=e.get(h);g!==void 0&&(e.delete(h),g.dispose())}function d(u){const h=u.target;h.removeEventListener("dispose",d);const g=t.get(h);g!==void 0&&(t.delete(h),g.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:f}}function kk(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const a=i.getExtension(n);return e[n]=a,a}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const a=t(n);return a===null&&ls("WebGLRenderer: "+n+" extension not supported."),a}}}function Mk(i,e,t,n){const a={},r=new WeakMap;function s(f){const u=f.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",s),delete a[u.id];const h=r.get(u);h&&(e.remove(h),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(f,u){return a[u.id]===!0||(u.addEventListener("dispose",s),a[u.id]=!0,t.memory.geometries++),u}function c(f){const u=f.attributes;for(const h in u)e.update(u[h],i.ARRAY_BUFFER)}function l(f){const u=[],h=f.index,g=f.attributes.position;let m=0;if(g===void 0)return;if(h!==null){const y=h.array;m=h.version;for(let T=0,b=y.length;T<b;T+=3){const S=y[T+0],k=y[T+1],A=y[T+2];u.push(S,k,k,A,A,S)}}else{const y=g.array;m=g.version;for(let T=0,b=y.length/3-1;T<b;T+=3){const S=T+0,k=T+1,A=T+2;u.push(S,k,k,A,A,S)}}const p=new(g.count>=65535?Wg:qg)(u,1);p.version=m;const v=r.get(f);v&&e.remove(v),r.set(f,p)}function d(f){const u=r.get(f);if(u){const h=f.index;h!==null&&u.version<h.version&&l(f)}else l(f);return r.get(f)}return{get:o,update:c,getWireframeAttribute:d}}function Ek(i,e,t){let n;function a(f){n=f}let r,s;function o(f){r=f.type,s=f.bytesPerElement}function c(f,u){i.drawElements(n,u,r,f*s),t.update(u,n,1)}function l(f,u,h){h!==0&&(i.drawElementsInstanced(n,u,r,f*s,h),t.update(u,n,h))}function d(f,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,h);let m=0;for(let p=0;p<h;p++)m+=u[p];t.update(m,n,1)}this.setMode=a,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=d}function wk(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,s,o){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:lt("WebGLInfo: Unknown draw mode:",s);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:n}}function Tk(i,e,t){const n=new WeakMap,a=new Pt;function r(s,o,c){const l=s.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=d!==void 0?d.length:0;let u=n.get(o);if(u===void 0||u.count!==f){let w=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();const h=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let T=0;h===!0&&(T=1),g===!0&&(T=2),m===!0&&(T=3);let b=o.attributes.position.count*T,S=1;b>e.maxTextureSize&&(S=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const k=new Float32Array(b*S*4*f),A=new Gg(k,b,S,f);A.type=Ui,A.needsUpdate=!0;const x=T*4;for(let R=0;R<f;R++){const L=p[R],z=v[R],F=y[R],C=b*S*4*R;for(let H=0;H<L.count;H++){const D=H*x;h===!0&&(a.fromBufferAttribute(L,H),k[C+D+0]=a.x,k[C+D+1]=a.y,k[C+D+2]=a.z,k[C+D+3]=0),g===!0&&(a.fromBufferAttribute(z,H),k[C+D+4]=a.x,k[C+D+5]=a.y,k[C+D+6]=a.z,k[C+D+7]=0),m===!0&&(a.fromBufferAttribute(F,H),k[C+D+8]=a.x,k[C+D+9]=a.y,k[C+D+10]=a.z,k[C+D+11]=F.itemSize===4?a.w:1)}}u={count:f,texture:A,size:new at(b,S)},n.set(o,u),o.addEventListener("dispose",w)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let h=0;for(let m=0;m<l.length;m++)h+=l[m];const g=o.morphTargetsRelative?1:1-h;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Ak(i,e,t,n,a){let r=new WeakMap;function s(l){const d=a.render.frame,f=l.geometry,u=e.get(l,f);if(r.get(u)!==d&&(e.update(u),r.set(u,d)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==d&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,d))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==d&&(h.update(),r.set(h,d))}return u}function o(){r=new WeakMap}function c(l){const d=l.target;d.removeEventListener("dispose",c),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:s,dispose:o}}const Rk={[Tg]:"LINEAR_TONE_MAPPING",[Ag]:"REINHARD_TONE_MAPPING",[Rg]:"CINEON_TONE_MAPPING",[Lg]:"ACES_FILMIC_TONE_MAPPING",[Pg]:"AGX_TONE_MAPPING",[Dg]:"NEUTRAL_TONE_MAPPING",[Cg]:"CUSTOM_TONE_MAPPING"};function Lk(i,e,t,n,a,r){const s=new Mi(e,t,{type:i,depthBuffer:a,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null;const l=new Ei;l.setAttribute("position",new fi([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new fi([0,2,0,0,2,0],2));const d=new px({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new ti(l,d),u=new If(-1,1,1,-1,0,1);let h=null,g=null,m=!1,p,v=null,y=[],T=!1;this.setSize=function(b,S){s.setSize(b,S),o!==null&&o.setSize(b,S),c!==null&&c.setSize(b,S);for(let k=0;k<y.length;k++){const A=y[k];A.setSize&&A.setSize(b,S)}},this.setEffects=function(b){y=b,T=y.length>0&&y[0].isRenderPass===!0;const S=s.width,k=s.height;y.length>0&&o===null&&(o=new Mi(S,k,{type:Gi,depthBuffer:!1,stencilBuffer:!1}),c=new Mi(S,k,{type:Gi,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<y.length;A++){const x=y[A];x.setSize&&x.setSize(S,k)}},this.begin=function(b,S){if(m||b.toneMapping===Bi&&y.length===0)return!1;if(v=S,S!==null){const k=S.width,A=S.height;(s.width!==k||s.height!==A)&&this.setSize(k,A)}return T===!1&&b.setRenderTarget(s),p=b.toneMapping,b.toneMapping=Bi,!0},this.hasRenderPass=function(){return T},this.end=function(b,S){b.toneMapping=p,m=!0;let k=s,A=o;for(let x=0;x<y.length;x++){const w=y[x];w.enabled!==!1&&(w.render(b,A,k,S),w.needsSwap!==!1&&(k=A,A=A===o?c:o))}if(h!==b.outputColorSpace||g!==b.toneMapping){h=b.outputColorSpace,g=b.toneMapping,d.defines={},tt.getTransfer(h)===pt&&(d.defines.SRGB_TRANSFER="");const x=Rk[g];x&&(d.defines[x]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=k.texture,b.setRenderTarget(v),b.render(f,u),v=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){s.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),d.dispose()}}const sv=new rn,Gu=new So(1,1),ov=new Gg,lv=new Gy,cv=new Yg,mp=[],gp=[],vp=new Float32Array(16),_p=new Float32Array(9),yp=new Float32Array(4);function ks(i,e,t){const n=i[0];if(n<=0||n>0)return i;const a=e*t;let r=mp[a];if(r===void 0&&(r=new Float32Array(a),mp[a]=r),e!==0){n.toArray(r,0);for(let s=1,o=0;s!==e;++s)o+=t,i[s].toArray(r,o)}return r}function Xt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Yt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function _c(i,e){let t=gp[e];t===void 0&&(t=new Int32Array(e),gp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ck(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Pk(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2fv(this.addr,e),Yt(t,e)}}function Dk(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xt(t,e))return;i.uniform3fv(this.addr,e),Yt(t,e)}}function Ik(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4fv(this.addr,e),Yt(t,e)}}function zk(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Yt(t,e)}else{if(Xt(t,n))return;yp.set(n),i.uniformMatrix2fv(this.addr,!1,yp),Yt(t,n)}}function Uk(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Yt(t,e)}else{if(Xt(t,n))return;_p.set(n),i.uniformMatrix3fv(this.addr,!1,_p),Yt(t,n)}}function Nk(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Yt(t,e)}else{if(Xt(t,n))return;vp.set(n),i.uniformMatrix4fv(this.addr,!1,vp),Yt(t,n)}}function Ok(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Fk(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2iv(this.addr,e),Yt(t,e)}}function Bk(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;i.uniform3iv(this.addr,e),Yt(t,e)}}function Hk(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4iv(this.addr,e),Yt(t,e)}}function $k(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Gk(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2uiv(this.addr,e),Yt(t,e)}}function Vk(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;i.uniform3uiv(this.addr,e),Yt(t,e)}}function qk(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4uiv(this.addr,e),Yt(t,e)}}function Wk(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a);let r;this.type===i.SAMPLER_2D_SHADOW?(Gu.compareFunction=t.isReversedDepthBuffer()?Rf:Af,r=Gu):r=sv,t.setTexture2D(e||r,a)}function Kk(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTexture3D(e||lv,a)}function Xk(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTextureCube(e||cv,a)}function Yk(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTexture2DArray(e||ov,a)}function Zk(i){switch(i){case 5126:return Ck;case 35664:return Pk;case 35665:return Dk;case 35666:return Ik;case 35674:return zk;case 35675:return Uk;case 35676:return Nk;case 5124:case 35670:return Ok;case 35667:case 35671:return Fk;case 35668:case 35672:return Bk;case 35669:case 35673:return Hk;case 5125:return $k;case 36294:return Gk;case 36295:return Vk;case 36296:return qk;case 35678:case 36198:case 36298:case 36306:case 35682:return Wk;case 35679:case 36299:case 36307:return Kk;case 35680:case 36300:case 36308:case 36293:return Xk;case 36289:case 36303:case 36311:case 36292:return Yk}}function Jk(i,e){i.uniform1fv(this.addr,e)}function jk(i,e){const t=ks(e,this.size,2);i.uniform2fv(this.addr,t)}function Qk(i,e){const t=ks(e,this.size,3);i.uniform3fv(this.addr,t)}function e1(i,e){const t=ks(e,this.size,4);i.uniform4fv(this.addr,t)}function t1(i,e){const t=ks(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function n1(i,e){const t=ks(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function i1(i,e){const t=ks(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function a1(i,e){i.uniform1iv(this.addr,e)}function r1(i,e){i.uniform2iv(this.addr,e)}function s1(i,e){i.uniform3iv(this.addr,e)}function o1(i,e){i.uniform4iv(this.addr,e)}function l1(i,e){i.uniform1uiv(this.addr,e)}function c1(i,e){i.uniform2uiv(this.addr,e)}function d1(i,e){i.uniform3uiv(this.addr,e)}function u1(i,e){i.uniform4uiv(this.addr,e)}function f1(i,e,t){const n=this.cache,a=e.length,r=_c(t,a);Xt(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));let s;this.type===i.SAMPLER_2D_SHADOW?s=Gu:s=sv;for(let o=0;o!==a;++o)t.setTexture2D(e[o]||s,r[o])}function h1(i,e,t){const n=this.cache,a=e.length,r=_c(t,a);Xt(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));for(let s=0;s!==a;++s)t.setTexture3D(e[s]||lv,r[s])}function p1(i,e,t){const n=this.cache,a=e.length,r=_c(t,a);Xt(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));for(let s=0;s!==a;++s)t.setTextureCube(e[s]||cv,r[s])}function m1(i,e,t){const n=this.cache,a=e.length,r=_c(t,a);Xt(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));for(let s=0;s!==a;++s)t.setTexture2DArray(e[s]||ov,r[s])}function g1(i){switch(i){case 5126:return Jk;case 35664:return jk;case 35665:return Qk;case 35666:return e1;case 35674:return t1;case 35675:return n1;case 35676:return i1;case 5124:case 35670:return a1;case 35667:case 35671:return r1;case 35668:case 35672:return s1;case 35669:case 35673:return o1;case 5125:return l1;case 36294:return c1;case 36295:return d1;case 36296:return u1;case 35678:case 36198:case 36298:case 36306:case 35682:return f1;case 35679:case 36299:case 36307:return h1;case 35680:case 36300:case 36308:case 36293:return p1;case 36289:case 36303:case 36311:case 36292:return m1}}class v1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Zk(t.type)}}class _1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=g1(t.type)}}class y1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const a=this.seq;for(let r=0,s=a.length;r!==s;++r){const o=a[r];o.setValue(e,t[o.id],n)}}}const Sd=/(\w+)(\])?(\[|\.)?/g;function xp(i,e){i.seq.push(e),i.map[e.id]=e}function x1(i,e,t){const n=i.name,a=n.length;for(Sd.lastIndex=0;;){const r=Sd.exec(n),s=Sd.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&s+2===a){xp(t,l===void 0?new v1(o,i,e):new _1(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new y1(o),xp(t,f)),t=f}}}class Ll{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=e.getActiveUniform(t,s),c=e.getUniformLocation(t,o.name);x1(o,c,this)}const a=[],r=[];for(const s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(s):r.push(s);a.length>0&&(this.seq=a.concat(r))}setValue(e,t,n,a){const r=this.map[t];r!==void 0&&r.setValue(e,n,a)}setOptional(e,t,n){const a=t[n];a!==void 0&&this.setValue(e,n,a)}static upload(e,t,n,a){for(let r=0,s=t.length;r!==s;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,a)}}static seqWithValue(e,t){const n=[];for(let a=0,r=e.length;a!==r;++a){const s=e[a];s.id in t&&n.push(s)}return n}}function bp(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const b1=37297;let S1=0;function k1(i,e){const t=i.split(`
`),n=[],a=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let s=a;s<r;s++){const o=s+1;n.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return n.join(`
`)}const Sp=new qe;function M1(i){tt._getMatrix(Sp,tt.workingColorSpace,i);const e=`mat3( ${Sp.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(i)){case Wl:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return $e("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function kp(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+k1(i.getShaderSource(e),o)}else return r}function E1(i,e){const t=M1(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const w1={[Tg]:"Linear",[Ag]:"Reinhard",[Rg]:"Cineon",[Lg]:"ACESFilmic",[Pg]:"AgX",[Dg]:"Neutral",[Cg]:"Custom"};function T1(i,e){const t=w1[e];return t===void 0?($e("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const fl=new K;function A1(){tt.getLuminanceCoefficients(fl);const i=fl.x.toFixed(4),e=fl.y.toFixed(4),t=fl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function R1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gs).join(`
`)}function L1(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function C1(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let a=0;a<n;a++){const r=i.getActiveAttrib(e,a),s=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[s]={type:r.type,location:i.getAttribLocation(e,s),locationSize:o}}return t}function Gs(i){return i!==""}function Mp(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ep(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const P1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vu(i){return i.replace(P1,I1)}const D1=new Map;function I1(i,e){let t=Ye[e];if(t===void 0){const n=D1.get(e);if(n!==void 0)t=Ye[n],$e('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Vu(t)}const z1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wp(i){return i.replace(z1,U1)}function U1(i,e,t,n){let a="";for(let r=parseInt(e);r<parseInt(t);r++)a+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function Tp(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const N1={[Ml]:"SHADOWMAP_TYPE_PCF",[$s]:"SHADOWMAP_TYPE_VSM"};function O1(i){return N1[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const F1={[kr]:"ENVMAP_TYPE_CUBE",[_s]:"ENVMAP_TYPE_CUBE",[pc]:"ENVMAP_TYPE_CUBE_UV"};function B1(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":F1[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const H1={[_s]:"ENVMAP_MODE_REFRACTION"};function $1(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":H1[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const G1={[bf]:"ENVMAP_BLENDING_MULTIPLY",[_y]:"ENVMAP_BLENDING_MIX",[yy]:"ENVMAP_BLENDING_ADD"};function V1(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":G1[i.combine]||"ENVMAP_BLENDING_NONE"}function q1(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function W1(i,e,t,n){const a=i.getContext(),r=t.defines;let s=t.vertexShader,o=t.fragmentShader;const c=O1(t),l=B1(t),d=$1(t),f=V1(t),u=q1(t),h=R1(t),g=L1(r),m=a.createProgram();let p,v,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Gs).join(`
`),p.length>0&&(p+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Gs).join(`
`),v.length>0&&(v+=`
`)):(p=[Tp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gs).join(`
`),v=[Tp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bi?"#define TONE_MAPPING":"",t.toneMapping!==Bi?Ye.tonemapping_pars_fragment:"",t.toneMapping!==Bi?T1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,E1("linearToOutputTexel",t.outputColorSpace),A1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Gs).join(`
`)),s=Vu(s),s=Mp(s,t),s=Ep(s,t),o=Vu(o),o=Mp(o,t),o=Ep(o,t),s=wp(s),o=wp(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,v=["#define varying in",t.glslVersion===Dh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Dh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const T=y+p+s,b=y+v+o,S=bp(a,a.VERTEX_SHADER,T),k=bp(a,a.FRAGMENT_SHADER,b);a.attachShader(m,S),a.attachShader(m,k),t.index0AttributeName!==void 0?a.bindAttribLocation(m,0,t.index0AttributeName):t.hasPositionAttribute===!0&&a.bindAttribLocation(m,0,"position"),a.linkProgram(m);function A(L){if(i.debug.checkShaderErrors){const z=a.getProgramInfoLog(m)||"",F=a.getShaderInfoLog(S)||"",C=a.getShaderInfoLog(k)||"",H=z.trim(),D=F.trim(),P=C.trim();let Y=!0,$=!0;if(a.getProgramParameter(m,a.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(a,m,S,k);else{const Q=kp(a,S,"vertex"),ne=kp(a,k,"fragment");lt("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(m,a.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+H+`
`+Q+`
`+ne)}else H!==""?$e("WebGLProgram: Program Info Log:",H):(D===""||P==="")&&($=!1);$&&(L.diagnostics={runnable:Y,programLog:H,vertexShader:{log:D,prefix:p},fragmentShader:{log:P,prefix:v}})}a.deleteShader(S),a.deleteShader(k),x=new Ll(a,m),w=C1(a,m)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=a.getProgramParameter(m,b1)),R},this.destroy=function(){n.releaseStatesOfProgram(this),a.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=S1++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=S,this.fragmentShader=k,this}let K1=0;class X1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const a=this._getShaderCacheForMaterial(e);return a.has(t)===!1&&(a.add(t),t.usedTimes++),a.has(n)===!1&&(a.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Y1(e),t.set(e,n)),n}}class Y1{constructor(e){this.id=K1++,this.code=e,this.usedTimes=0}}function Z1(i){return i===Mr||i===Gl||i===Vl}function J1(i,e,t,n,a,r){const s=new Cf,o=new X1,c=new Set,l=[],d=new Map,f=n.logarithmicDepthBuffer;let u=n.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,w,R,L,z,F){const C=L.fog,H=z.geometry,D=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?L.environment:null,P=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,Y=e.get(x.envMap||D,P),$=Y&&Y.mapping===pc?Y.image.height:null,Q=h[x.type];x.precision!==null&&(u=n.getMaxPrecision(x.precision),u!==x.precision&&$e("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));const ne=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ue=ne!==void 0?ne.length:0;let ke=0;H.morphAttributes.position!==void 0&&(ke=1),H.morphAttributes.normal!==void 0&&(ke=2),H.morphAttributes.color!==void 0&&(ke=3);let Ne,De,He,J;if(Q){const xt=Ci[Q];Ne=xt.vertexShader,De=xt.fragmentShader}else{Ne=x.vertexShader,De=x.fragmentShader;const xt=o.getVertexShaderStage(x),ut=o.getFragmentShaderStage(x);o.update(x,xt,ut),He=xt.id,J=ut.id}const ae=i.getRenderTarget(),fe=i.state.buffers.depth.getReversed(),ze=z.isInstancedMesh===!0,be=z.isBatchedMesh===!0,Fe=!!x.map,gt=!!x.matcap,Be=!!Y,Ke=!!x.aoMap,rt=!!x.lightMap,Ge=!!x.bumpMap&&x.wireframe===!1,ht=!!x.normalMap,It=!!x.displacementMap,Vt=!!x.emissiveMap,dt=!!x.metalnessMap,zt=!!x.roughnessMap,N=x.anisotropy>0,qt=x.clearcoat>0,B=x.dispersion>0,E=x.retroreflectivity>0,_=x.iridescence>0,O=x.sheen>0,G=x.transmission>0,j=N&&!!x.anisotropyMap,ce=qt&&!!x.clearcoatMap,de=qt&&!!x.clearcoatNormalMap,ee=qt&&!!x.clearcoatRoughnessMap,ie=_&&!!x.iridescenceMap,he=_&&!!x.iridescenceThicknessMap,Ce=O&&!!x.sheenColorMap,ve=O&&!!x.sheenRoughnessMap,pe=!!x.specularMap,Pe=!!x.specularColorMap,Oe=!!x.specularIntensityMap,We=G&&!!x.transmissionMap,U=G&&!!x.thicknessMap,me=!!x.gradientMap,re=!!x.alphaMap,ge=x.alphaTest>0,Se=!!x.alphaHash,oe=!!x.extensions;let Ie=Bi;x.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(Ie=i.toneMapping);const Re={shaderID:Q,shaderType:x.type,shaderName:x.name,vertexShader:Ne,fragmentShader:De,defines:x.defines,customVertexShaderID:He,customFragmentShaderID:J,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:be,batchingColor:be&&z._colorsTexture!==null,instancing:ze,instancingColor:ze&&z.instanceColor!==null,instancingMorph:ze&&z.morphTexture!==null,outputColorSpace:ae===null?i.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:tt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Fe,matcap:gt,envMap:Be,envMapMode:Be&&Y.mapping,envMapCubeUVHeight:$,aoMap:Ke,lightMap:rt,bumpMap:Ge,normalMap:ht,displacementMap:It,emissiveMap:Vt,normalMapObjectSpace:ht&&x.normalMapType===Sy,normalMapTangentSpace:ht&&x.normalMapType===Bu,packedNormalMap:ht&&x.normalMapType===Bu&&Z1(x.normalMap.format),metalnessMap:dt,roughnessMap:zt,anisotropy:N,anisotropyMap:j,clearcoat:qt,clearcoatMap:ce,clearcoatNormalMap:de,clearcoatRoughnessMap:ee,dispersion:B,retroreflection:E,iridescence:_,iridescenceMap:ie,iridescenceThicknessMap:he,sheen:O,sheenColorMap:Ce,sheenRoughnessMap:ve,specularMap:pe,specularColorMap:Pe,specularIntensityMap:Oe,transmission:G,transmissionMap:We,thicknessMap:U,gradientMap:me,opaque:x.transparent===!1&&x.blending===to&&x.alphaToCoverage===!1,alphaMap:re,alphaTest:ge,alphaHash:Se,combine:x.combine,mapUv:Fe&&g(x.map.channel),aoMapUv:Ke&&g(x.aoMap.channel),lightMapUv:rt&&g(x.lightMap.channel),bumpMapUv:Ge&&g(x.bumpMap.channel),normalMapUv:ht&&g(x.normalMap.channel),displacementMapUv:It&&g(x.displacementMap.channel),emissiveMapUv:Vt&&g(x.emissiveMap.channel),metalnessMapUv:dt&&g(x.metalnessMap.channel),roughnessMapUv:zt&&g(x.roughnessMap.channel),anisotropyMapUv:j&&g(x.anisotropyMap.channel),clearcoatMapUv:ce&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:de&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:he&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:ve&&g(x.sheenRoughnessMap.channel),specularMapUv:pe&&g(x.specularMap.channel),specularColorMapUv:Pe&&g(x.specularColorMap.channel),specularIntensityMapUv:Oe&&g(x.specularIntensityMap.channel),transmissionMapUv:We&&g(x.transmissionMap.channel),thicknessMapUv:U&&g(x.thicknessMap.channel),alphaMapUv:re&&g(x.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(ht||N),vertexNormals:!!H.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!H.attributes.uv&&(Fe||re),fog:!!C,useFog:x.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||H.attributes.normal===void 0&&ht===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:fe,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:ke,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:F.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ie,decodeVideoTexture:Fe&&x.map.isVideoTexture===!0&&tt.getTransfer(x.map.colorSpace)===pt,decodeVideoTextureEmissive:Vt&&x.emissiveMap.isVideoTexture===!0&&tt.getTransfer(x.emissiveMap.colorSpace)===pt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===bi,flipSided:x.side===Pn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:oe&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(oe&&x.extensions.multiDraw===!0||be)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Re.vertexUv1s=c.has(1),Re.vertexUv2s=c.has(2),Re.vertexUv3s=c.has(3),c.clear(),Re}function p(x){const w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(const R in x.defines)w.push(R),w.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(v(w,x),y(w,x),w.push(i.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function v(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numSunLights),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numSunLightShadows),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function y(x,w){s.disableAll(),w.instancing&&s.enable(0),w.instancingColor&&s.enable(1),w.instancingMorph&&s.enable(2),w.matcap&&s.enable(3),w.envMap&&s.enable(4),w.normalMapObjectSpace&&s.enable(5),w.normalMapTangentSpace&&s.enable(6),w.clearcoat&&s.enable(7),w.iridescence&&s.enable(8),w.alphaTest&&s.enable(9),w.vertexColors&&s.enable(10),w.vertexAlphas&&s.enable(11),w.vertexUv1s&&s.enable(12),w.vertexUv2s&&s.enable(13),w.vertexUv3s&&s.enable(14),w.vertexTangents&&s.enable(15),w.anisotropy&&s.enable(16),w.alphaHash&&s.enable(17),w.batching&&s.enable(18),w.dispersion&&s.enable(19),w.retroreflection&&s.enable(24),w.batchingColor&&s.enable(20),w.gradientMap&&s.enable(21),w.packedNormalMap&&s.enable(22),w.vertexNormals&&s.enable(23),x.push(s.mask),s.disableAll(),w.fog&&s.enable(0),w.useFog&&s.enable(1),w.flatShading&&s.enable(2),w.logarithmicDepthBuffer&&s.enable(3),w.reversedDepthBuffer&&s.enable(4),w.skinning&&s.enable(5),w.morphTargets&&s.enable(6),w.morphNormals&&s.enable(7),w.morphColors&&s.enable(8),w.premultipliedAlpha&&s.enable(9),w.shadowMapEnabled&&s.enable(10),w.doubleSided&&s.enable(11),w.flipSided&&s.enable(12),w.useDepthPacking&&s.enable(13),w.dithering&&s.enable(14),w.transmission&&s.enable(15),w.sheen&&s.enable(16),w.opaque&&s.enable(17),w.pointsUvs&&s.enable(18),w.decodeVideoTexture&&s.enable(19),w.decodeVideoTextureEmissive&&s.enable(20),w.alphaToCoverage&&s.enable(21),w.numLightProbeGrids>0&&s.enable(22),w.hasPositionAttribute&&s.enable(23),x.push(s.mask)}function T(x){const w=h[x.type];let R;if(w){const L=Ci[w];R=ux.clone(L.uniforms)}else R=x.uniforms;return R}function b(x,w){let R=d.get(w);return R!==void 0?++R.usedTimes:(R=new W1(i,w,x,a),l.push(R),d.set(w,R)),R}function S(x){if(--x.usedTimes===0){const w=l.indexOf(x);l[w]=l[l.length-1],l.pop(),d.delete(x.cacheKey),x.destroy()}}function k(x){o.remove(x)}function A(){o.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:T,acquireProgram:b,releaseProgram:S,releaseShaderCache:k,programs:l,dispose:A}}function j1(){let i=new WeakMap;function e(s){return i.has(s)}function t(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function n(s){i.delete(s)}function a(s,o,c){i.get(s)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:a,dispose:r}}function Q1(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Ap(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Rp(){const i=[];let e=0;const t=[],n=[],a=[];function r(){e=0,t.length=0,n.length=0,a.length=0}function s(u){let h=0;return u.isInstancedMesh&&(h+=2),u.isSkinnedMesh&&(h+=1),h}function o(u,h,g,m,p,v){let y=i[e];return y===void 0?(y={id:u.id,object:u,geometry:h,material:g,materialVariant:s(u),groupOrder:m,renderOrder:u.renderOrder,z:p,group:v},i[e]=y):(y.id=u.id,y.object=u,y.geometry=h,y.material=g,y.materialVariant=s(u),y.groupOrder=m,y.renderOrder=u.renderOrder,y.z=p,y.group=v),e++,y}function c(u,h,g,m,p,v,y){y.reversedDepth===!0&&(p=-p);const T=o(u,h,g,m,p,v);g.transmission>0?n.push(T):g.transparent===!0?a.push(T):t.push(T)}function l(u,h,g,m,p,v){const y=o(u,h,g,m,p,v);g.transmission>0?n.unshift(y):g.transparent===!0?a.unshift(y):t.unshift(y)}function d(u,h){t.length>1&&t.sort(u||Q1),n.length>1&&n.sort(h||Ap),a.length>1&&a.sort(h||Ap)}function f(){for(let u=e,h=i.length;u<h;u++){const g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:a,init:r,push:c,unshift:l,finish:f,sort:d}}function eM(){let i=new WeakMap;function e(n,a){const r=i.get(n);let s;return r===void 0?(s=new Rp,i.set(n,[s])):a>=r.length?(s=new Rp,r.push(s)):s=r[a],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function tM(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new K,color:new st};break;case"SpotLight":t={position:new K,direction:new K,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new K,color:new st,distance:0,decay:0};break;case"HemisphereLight":t={direction:new K,skyColor:new st,groundColor:new st};break;case"RectAreaLight":t={color:new st,position:new K,halfWidth:new K,halfHeight:new K};break}return i[e.id]=t,t}}}function nM(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let iM=0;function aM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function rM(i){const e=new tM,t=nM(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new K);const a=new K,r=new wt,s=new wt;function o(l){let d=0,f=0,u=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let h=0,g=0,m=0,p=0,v=0,y=0,T=0,b=0,S=0,k=0,A=0,x=0,w=0,R=0;l.sort(aM);for(let z=0,F=l.length;z<F;z++){const C=l[z],H=C.color,D=C.intensity,P=C.distance;let Y=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Mr?Y=C.shadow.map.texture:Y=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)d+=H.r*D,f+=H.g*D,u+=H.b*D;else if(C.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(C.sh.coefficients[$],D);R++}else if(C.isSunLight){const $=e.get(C);if($.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const Q=C.shadow,ne=t.get(C);ne.shadowIntensity=Q.intensity,ne.shadowBias=Q.bias,ne.shadowNormalBias=Q.normalBias,ne.shadowRadius=Q.radius,ne.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[g]=ne,n.sunShadowMap[g]=Y;const ue=Q.getViewportCount();for(let ke=0;ke<ue;ke++)n.sunShadowMatrix[m+ke]=Q.getMatrix(ke),n.sunShadowCascade[m+ke]=Q._cascadeData[ke];m+=ue,g++}n.sun[h]=$,h++}else if(C.isDirectionalLight){const $=e.get(C);if($.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const Q=C.shadow,ne=t.get(C);ne.shadowIntensity=Q.intensity,ne.shadowBias=Q.bias,ne.shadowNormalBias=Q.normalBias,ne.shadowRadius=Q.radius,ne.shadowMapSize=Q.mapSize,n.directionalShadow[p]=ne,n.directionalShadowMap[p]=Y,n.directionalShadowMatrix[p]=C.shadow.matrix,S++}n.directional[p]=$,p++}else if(C.isSpotLight){const $=e.get(C);$.position.setFromMatrixPosition(C.matrixWorld),$.color.copy(H).multiplyScalar(D),$.distance=P,$.coneCos=Math.cos(C.angle),$.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),$.decay=C.decay,n.spot[y]=$;const Q=C.shadow;if(C.map&&(n.spotLightMap[x]=C.map,x++,Q.updateMatrices(C),C.castShadow&&w++),n.spotLightMatrix[y]=Q.matrix,C.castShadow){const ne=t.get(C);ne.shadowIntensity=Q.intensity,ne.shadowBias=Q.bias,ne.shadowNormalBias=Q.normalBias,ne.shadowRadius=Q.radius,ne.shadowMapSize=Q.mapSize,n.spotShadow[y]=ne,n.spotShadowMap[y]=Y,A++}y++}else if(C.isRectAreaLight){const $=e.get(C);$.color.copy(H).multiplyScalar(D),$.halfWidth.set(C.width*.5,0,0),$.halfHeight.set(0,C.height*.5,0),n.rectArea[T]=$,T++}else if(C.isPointLight){const $=e.get(C);if($.color.copy(C.color).multiplyScalar(C.intensity),$.distance=C.distance,$.decay=C.decay,C.castShadow){const Q=C.shadow,ne=t.get(C);ne.shadowIntensity=Q.intensity,ne.shadowBias=Q.bias,ne.shadowNormalBias=Q.normalBias,ne.shadowRadius=Q.radius,ne.shadowMapSize=Q.mapSize,ne.shadowCameraNear=Q.camera.near,ne.shadowCameraFar=Q.camera.far,n.pointShadow[v]=ne,n.pointShadowMap[v]=Y,n.pointShadowMatrix[v]=C.shadow.matrix,k++}n.point[v]=$,v++}else if(C.isHemisphereLight){const $=e.get(C);$.skyColor.copy(C.color).multiplyScalar(D),$.groundColor.copy(C.groundColor).multiplyScalar(D),n.hemi[b]=$,b++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_e.LTC_FLOAT_1,n.rectAreaLTC2=_e.LTC_FLOAT_2):(n.rectAreaLTC1=_e.LTC_HALF_1,n.rectAreaLTC2=_e.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=f,n.ambient[2]=u;const L=n.hash;(L.sunLength!==h||L.directionalLength!==p||L.pointLength!==v||L.spotLength!==y||L.rectAreaLength!==T||L.hemiLength!==b||L.numSunShadows!==g||L.numDirectionalShadows!==S||L.numPointShadows!==k||L.numSpotShadows!==A||L.numSpotMaps!==x||L.numLightProbes!==R)&&(n.sun.length=h,n.directional.length=p,n.spot.length=y,n.rectArea.length=T,n.point.length=v,n.hemi.length=b,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=m,n.sunShadowCascade.length=m,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=k,n.pointShadowMap.length=k,n.pointShadowMatrix.length=k,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+x-w,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,L.sunLength=h,L.directionalLength=p,L.pointLength=v,L.spotLength=y,L.rectAreaLength=T,L.hemiLength=b,L.numSunShadows=g,L.numDirectionalShadows=S,L.numPointShadows=k,L.numSpotShadows=A,L.numSpotMaps=x,L.numLightProbes=R,n.version=iM++)}function c(l,d){let f=0,u=0,h=0,g=0,m=0,p=0;const v=d.matrixWorldInverse;for(let y=0,T=l.length;y<T;y++){const b=l[y];if(b.isSunLight){const S=n.sun[f];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(v),f++}else if(b.isDirectionalLight){const S=n.directional[u];S.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(a),S.direction.transformDirection(v),u++}else if(b.isSpotLight){const S=n.spot[g];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(v),S.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(a),S.direction.transformDirection(v),g++}else if(b.isRectAreaLight){const S=n.rectArea[m];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(v),s.identity(),r.copy(b.matrixWorld),r.premultiply(v),s.extractRotation(r),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(s),S.halfHeight.applyMatrix4(s),m++}else if(b.isPointLight){const S=n.point[h];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(v),h++}else if(b.isHemisphereLight){const S=n.hemi[p];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(v),p++}}}return{setup:o,setupView:c,state:n}}function Lp(i){const e=new rM(i),t=[],n=[],a=[];function r(u){f.camera=u,t.length=0,n.length=0,a.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function c(u){a.push(u)}function l(){e.setup(t)}function d(u){e.setupView(t,u)}const f={lightsArray:t,shadowsArray:n,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:l,setupLightsView:d,pushLight:s,pushShadow:o,pushLightProbeGrid:c}}function sM(i){let e=new WeakMap;function t(a,r=0){const s=e.get(a);let o;return s===void 0?(o=new Lp(i),e.set(a,[o])):r>=s.length?(o=new Lp(i),s.push(o)):o=s[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const oM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,cM=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],dM=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],Cp=new wt,Os=new K,kd=new K;function uM(i,e,t){let n=new Df;const a=new at,r=new at,s=new Pt,o=new mx,c=new gx,l={},d=t.maxTextureSize,f={[Sr]:Pn,[Pn]:Sr,[bi]:bi},u=new Vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:oM,fragmentShader:lM}),h=u.clone();h.defines.HORIZONTAL_PASS=1;const g=new Ei;g.setAttribute("position",new ra(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new ti(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ml;let v=this.type;this.render=function(k,A,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||k.length===0)return;this.type===Q0&&($e("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ml);const w=i.getRenderTarget(),R=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),z=i.state;z.setBlending(ia),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const F=v!==this.type;F&&A.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(H=>H.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,H=k.length;C<H;C++){const D=k[C],P=D.shadow;if(P===void 0){$e("WebGLShadowMap:",D,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;a.copy(P.mapSize);const Y=P.getFrameExtents();a.multiply(Y),r.copy(P.mapSize),(a.x>d||a.y>d)&&(a.x>d&&(r.x=Math.floor(d/Y.x),a.x=r.x*Y.x,P.mapSize.x=r.x),a.y>d&&(r.y=Math.floor(d/Y.y),a.y=r.y*Y.y,P.mapSize.y=r.y));const $=i.state.buffers.depth.getReversed();if(P.camera._reversedDepth=$,P.map===null||F===!0){if(P.map!==null&&(P.map.depthTexture!==null&&(P.map.depthTexture.dispose(),P.map.depthTexture=null),P.map.dispose()),this.type===$s){if(D.isPointLight){$e("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}P.map=new Mi(a.x,a.y,{format:Mr,type:Gi,minFilter:nn,magFilter:nn,generateMipmaps:!1}),P.map.texture.name=D.name+".shadowMap",P.map.depthTexture=new So(a.x,a.y,Ui),P.map.depthTexture.name=D.name+".shadowMapDepth",P.map.depthTexture.format=ca,P.map.depthTexture.compareFunction=null,P.map.depthTexture.minFilter=Kt,P.map.depthTexture.magFilter=Kt}else D.isPointLight?(P.map=new rv(a.x),P.map.depthTexture=new cx(a.x,$i)):(P.map=new Mi(a.x,a.y),P.map.depthTexture=new So(a.x,a.y,$i)),P.map.depthTexture.name=D.name+".shadowMap",P.map.depthTexture.format=ca,this.type===Ml?(P.map.depthTexture.compareFunction=$?Rf:Af,P.map.depthTexture.minFilter=nn,P.map.depthTexture.magFilter=nn):(P.map.depthTexture.compareFunction=null,P.map.depthTexture.minFilter=Kt,P.map.depthTexture.magFilter=Kt);P.camera.updateProjectionMatrix()}P.map.isWebGLCubeRenderTarget!==!0&&(P.map.width!==a.x||P.map.height!==a.y)&&P.map.setSize(a.x,a.y);const Q=P.map.isWebGLCubeRenderTarget?6:P.getViewportCount();D.isPointLight!==!0&&P.updateMatrices(D,x);for(let ne=0;ne<Q;ne++){const ue=P.getCamera(ne);if(D.isPointLight){const ke=P.camera,Ne=P.matrix,De=D.distance||ke.far;De!==ke.far&&(ke.far=De,ke.updateProjectionMatrix()),Os.setFromMatrixPosition(D.matrixWorld),ke.position.copy(Os),kd.copy(ke.position),kd.add(cM[ne]),ke.up.copy(dM[ne]),ke.lookAt(kd),ke.updateMatrixWorld(),Ne.makeTranslation(-Os.x,-Os.y,-Os.z),Cp.multiplyMatrices(ke.projectionMatrix,ke.matrixWorldInverse),P._frustum.setFromProjectionMatrix(Cp,ke.coordinateSystem,ke.reversedDepth)}if(P.map.isWebGLCubeRenderTarget)i.setRenderTarget(P.map,ne),i.clear();else{ne===0&&(i.setRenderTarget(P.map),i.clear());const ke=P.getViewport(ne);s.set(r.x*ke.x,r.y*ke.y,r.x*ke.z,r.y*ke.w),z.viewport(s)}n=P.getFrustum(ne),b(A,x,ue,D,this.type)}P.isPointLightShadow!==!0&&this.type===$s&&y(P,x),P.needsUpdate=!1}v=this.type,p.needsUpdate=!1,i.setRenderTarget(w,R,L)};function y(k,A){const x=e.update(m);u.defines.VSM_SAMPLES!==k.blurSamples&&(u.defines.VSM_SAMPLES=k.blurSamples,h.defines.VSM_SAMPLES=k.blurSamples,u.needsUpdate=!0,h.needsUpdate=!0),k.mapPass===null?k.mapPass=new Mi(a.x,a.y,{format:Mr,type:Gi}):(k.mapPass.width!==k.map.width||k.mapPass.height!==k.map.height)&&k.mapPass.setSize(k.map.width,k.map.height),u.uniforms.shadow_pass.value=k.map.depthTexture,u.uniforms.resolution.value.set(k.map.width,k.map.height),u.uniforms.radius.value=k.radius,i.setRenderTarget(k.mapPass),i.clear(),i.renderBufferDirect(A,null,x,u,m,null),h.uniforms.shadow_pass.value=k.mapPass.texture,h.uniforms.resolution.value.set(k.map.width,k.map.height),h.uniforms.radius.value=k.radius,i.setRenderTarget(k.map),i.clear(),i.renderBufferDirect(A,null,x,h,m,null)}function T(k,A,x,w){let R=null;const L=x.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(L!==void 0)R=L;else if(R=x.isPointLight===!0?c:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const z=R.uuid,F=A.uuid;let C=l[z];C===void 0&&(C={},l[z]=C);let H=C[F];H===void 0&&(H=R.clone(),C[F]=H,A.addEventListener("dispose",S)),R=H}if(R.visible=A.visible,R.wireframe=A.wireframe,w===$s?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:f[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const z=i.properties.get(R);z.light=x}return R}function b(k,A,x,w,R){if(k.visible===!1)return;if(k.layers.test(A.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&R===$s)&&(!k.frustumCulled||k.intersectsFrustum(n))){k.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,k.matrixWorld);const F=e.update(k),C=k.material;if(Array.isArray(C)){const H=F.groups;for(let D=0,P=H.length;D<P;D++){const Y=H[D],$=C[Y.materialIndex];if($&&$.visible){const Q=T(k,$,w,R);k.onBeforeShadow(i,k,A,x,F,Q,Y),i.renderBufferDirect(x,null,F,Q,k,Y),k.onAfterShadow(i,k,A,x,F,Q,Y)}}}else if(C.visible){const H=T(k,C,w,R);k.onBeforeShadow(i,k,A,x,F,H,null),i.renderBufferDirect(x,null,F,H,k,null),k.onAfterShadow(i,k,A,x,F,H,null)}}const z=k.children;for(let F=0,C=z.length;F<C;F++)b(z[F],A,x,w,R)}function S(k){k.target.removeEventListener("dispose",S);for(const x in l){const w=l[x],R=k.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}function fM(i,e){function t(){let U=!1;const me=new Pt;let re=null;const ge=new Pt(0,0,0,0);return{setMask:function(Se){re!==Se&&!U&&(i.colorMask(Se,Se,Se,Se),re=Se)},setLocked:function(Se){U=Se},setClear:function(Se,oe,Ie,Re,xt){xt===!0&&(Se*=Re,oe*=Re,Ie*=Re),me.set(Se,oe,Ie,Re),ge.equals(me)===!1&&(i.clearColor(Se,oe,Ie,Re),ge.copy(me))},reset:function(){U=!1,re=null,ge.set(-1,0,0,0)}}}function n(){let U=!1,me=!1,re=null,ge=null,Se=null;return{setReversed:function(oe){if(me!==oe){const Ie=e.get("EXT_clip_control");oe?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),me=oe;const Re=Se;Se=null,this.setClear(Re)}},getReversed:function(){return me},setTest:function(oe){oe?ae(i.DEPTH_TEST):fe(i.DEPTH_TEST)},setMask:function(oe){re!==oe&&!U&&(i.depthMask(oe),re=oe)},setFunc:function(oe){if(me&&(oe=Iy[oe]),ge!==oe){switch(oe){case tu:i.depthFunc(i.NEVER);break;case nu:i.depthFunc(i.ALWAYS);break;case iu:i.depthFunc(i.LESS);break;case vo:i.depthFunc(i.LEQUAL);break;case au:i.depthFunc(i.EQUAL);break;case ru:i.depthFunc(i.GEQUAL);break;case su:i.depthFunc(i.GREATER);break;case ou:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ge=oe}},setLocked:function(oe){U=oe},setClear:function(oe){Se!==oe&&(Se=oe,me&&(oe=1-oe),i.clearDepth(oe))},reset:function(){U=!1,re=null,ge=null,Se=null,me=!1}}}function a(){let U=!1,me=null,re=null,ge=null,Se=null,oe=null,Ie=null,Re=null,xt=null;return{setTest:function(ut){U||(ut?ae(i.STENCIL_TEST):fe(i.STENCIL_TEST))},setMask:function(ut){me!==ut&&!U&&(i.stencilMask(ut),me=ut)},setFunc:function(ut,pi,wi){(re!==ut||ge!==pi||Se!==wi)&&(i.stencilFunc(ut,pi,wi),re=ut,ge=pi,Se=wi)},setOp:function(ut,pi,wi){(oe!==ut||Ie!==pi||Re!==wi)&&(i.stencilOp(ut,pi,wi),oe=ut,Ie=pi,Re=wi)},setLocked:function(ut){U=ut},setClear:function(ut){xt!==ut&&(i.clearStencil(ut),xt=ut)},reset:function(){U=!1,me=null,re=null,ge=null,Se=null,oe=null,Ie=null,Re=null,xt=null}}}const r=new t,s=new n,o=new a,c=new WeakMap,l=new WeakMap;let d={},f={},u={},h=new WeakMap,g=[],m=null,p=!1,v=null,y=null,T=null,b=null,S=null,k=null,A=null,x=new st(0,0,0),w=0,R=!1,L=null,z=null,F=null,C=null,H=null;const D=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,Y=0;const $=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec($)[1]),P=Y>=1):$.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),P=Y>=2);let Q=null,ne={};const ue=i.getParameter(i.SCISSOR_BOX),ke=i.getParameter(i.VIEWPORT),Ne=new Pt().fromArray(ue),De=new Pt().fromArray(ke);function He(U,me,re,ge){const Se=new Uint8Array(4),oe=i.createTexture();i.bindTexture(U,oe),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ie=0;Ie<re;Ie++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(me,0,i.RGBA,1,1,ge,0,i.RGBA,i.UNSIGNED_BYTE,Se):i.texImage2D(me+Ie,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Se);return oe}const J={};J[i.TEXTURE_2D]=He(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=He(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=He(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=He(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ae(i.DEPTH_TEST),s.setFunc(vo),Ge(!1),ht(Rh),ae(i.CULL_FACE),Ke(ia);function ae(U){d[U]!==!0&&(i.enable(U),d[U]=!0)}function fe(U){d[U]!==!1&&(i.disable(U),d[U]=!1)}function ze(U,me){return u[U]!==me?(i.bindFramebuffer(U,me),u[U]=me,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=me),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=me),!0):!1}function be(U,me){let re=g,ge=!1;if(U){re=h.get(me),re===void 0&&(re=[],h.set(me,re));const Se=U.textures;if(re.length!==Se.length||re[0]!==i.COLOR_ATTACHMENT0){for(let oe=0,Ie=Se.length;oe<Ie;oe++)re[oe]=i.COLOR_ATTACHMENT0+oe;re.length=Se.length,ge=!0}}else re[0]!==i.BACK&&(re[0]=i.BACK,ge=!0);ge&&i.drawBuffers(re)}function Fe(U){return m!==U?(i.useProgram(U),m=U,!0):!1}const gt={[Jr]:i.FUNC_ADD,[ty]:i.FUNC_SUBTRACT,[ny]:i.FUNC_REVERSE_SUBTRACT};gt[iy]=i.MIN,gt[ay]=i.MAX;const Be={[ry]:i.ZERO,[sy]:i.ONE,[oy]:i.SRC_COLOR,[Eg]:i.SRC_ALPHA,[hy]:i.SRC_ALPHA_SATURATE,[uy]:i.DST_COLOR,[cy]:i.DST_ALPHA,[ly]:i.ONE_MINUS_SRC_COLOR,[wg]:i.ONE_MINUS_SRC_ALPHA,[fy]:i.ONE_MINUS_DST_COLOR,[dy]:i.ONE_MINUS_DST_ALPHA,[py]:i.CONSTANT_COLOR,[my]:i.ONE_MINUS_CONSTANT_COLOR,[gy]:i.CONSTANT_ALPHA,[vy]:i.ONE_MINUS_CONSTANT_ALPHA};function Ke(U,me,re,ge,Se,oe,Ie,Re,xt,ut){if(U===ia){p===!0&&(fe(i.BLEND),p=!1);return}if(p===!1&&(ae(i.BLEND),p=!0),U!==ey){if(U!==v||ut!==R){if((y!==Jr||S!==Jr)&&(i.blendEquation(i.FUNC_ADD),y=Jr,S=Jr),ut)switch(U){case to:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Lh:i.blendFunc(i.ONE,i.ONE);break;case Ch:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ph:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:lt("WebGLState: Invalid blending: ",U);break}else switch(U){case to:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Lh:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ch:lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ph:lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:lt("WebGLState: Invalid blending: ",U);break}T=null,b=null,k=null,A=null,x.set(0,0,0),w=0,v=U,R=ut}return}Se=Se||me,oe=oe||re,Ie=Ie||ge,(me!==y||Se!==S)&&(i.blendEquationSeparate(gt[me],gt[Se]),y=me,S=Se),(re!==T||ge!==b||oe!==k||Ie!==A)&&(i.blendFuncSeparate(Be[re],Be[ge],Be[oe],Be[Ie]),T=re,b=ge,k=oe,A=Ie),(Re.equals(x)===!1||xt!==w)&&(i.blendColor(Re.r,Re.g,Re.b,xt),x.copy(Re),w=xt),v=U,R=!1}function rt(U,me){U.side===bi?fe(i.CULL_FACE):ae(i.CULL_FACE);let re=U.side===Pn;me&&(re=!re),Ge(re),U.blending===to&&U.transparent===!1?Ke(ia):Ke(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),s.setFunc(U.depthFunc),s.setTest(U.depthTest),s.setMask(U.depthWrite),r.setMask(U.colorWrite);const ge=U.stencilWrite;o.setTest(ge),ge&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Vt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ae(i.SAMPLE_ALPHA_TO_COVERAGE):fe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(U){L!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),L=U)}function ht(U){U!==J0?(ae(i.CULL_FACE),U!==z&&(U===Rh?i.cullFace(i.BACK):U===j0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):fe(i.CULL_FACE),z=U}function It(U){U!==F&&(P&&i.lineWidth(U),F=U)}function Vt(U,me,re){U?(ae(i.POLYGON_OFFSET_FILL),(C!==me||H!==re)&&(C=me,H=re,s.getReversed()&&(me=-me),i.polygonOffset(me,re))):fe(i.POLYGON_OFFSET_FILL)}function dt(U){U?ae(i.SCISSOR_TEST):fe(i.SCISSOR_TEST)}function zt(U){U===void 0&&(U=i.TEXTURE0+D-1),Q!==U&&(i.activeTexture(U),Q=U)}function N(U,me,re){re===void 0&&(Q===null?re=i.TEXTURE0+D-1:re=Q);let ge=ne[re];ge===void 0&&(ge={type:void 0,texture:void 0},ne[re]=ge),(ge.type!==U||ge.texture!==me)&&(Q!==re&&(i.activeTexture(re),Q=re),i.bindTexture(U,me||J[U]),ge.type=U,ge.texture=me)}function qt(){const U=ne[Q];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function B(){try{i.compressedTexImage2D(...arguments)}catch(U){lt("WebGLState:",U)}}function E(){try{i.compressedTexImage3D(...arguments)}catch(U){lt("WebGLState:",U)}}function _(){try{i.texSubImage2D(...arguments)}catch(U){lt("WebGLState:",U)}}function O(){try{i.texSubImage3D(...arguments)}catch(U){lt("WebGLState:",U)}}function G(){try{i.compressedTexSubImage2D(...arguments)}catch(U){lt("WebGLState:",U)}}function j(){try{i.compressedTexSubImage3D(...arguments)}catch(U){lt("WebGLState:",U)}}function ce(){try{i.texStorage2D(...arguments)}catch(U){lt("WebGLState:",U)}}function de(){try{i.texStorage3D(...arguments)}catch(U){lt("WebGLState:",U)}}function ee(){try{i.texImage2D(...arguments)}catch(U){lt("WebGLState:",U)}}function ie(){try{i.texImage3D(...arguments)}catch(U){lt("WebGLState:",U)}}function he(U){return f[U]!==void 0?f[U]:i.getParameter(U)}function Ce(U,me){f[U]!==me&&(i.pixelStorei(U,me),f[U]=me)}function ve(U){Ne.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),Ne.copy(U))}function pe(U){De.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),De.copy(U))}function Pe(U,me){let re=l.get(me);re===void 0&&(re=new WeakMap,l.set(me,re));let ge=re.get(U);ge===void 0&&(ge=i.getUniformBlockIndex(me,U.name),re.set(U,ge))}function Oe(U,me){const ge=l.get(me).get(U);c.get(me)!==ge&&(i.uniformBlockBinding(me,ge,U.__bindingPointIndex),c.set(me,ge))}function We(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},f={},Q=null,ne={},u={},h=new WeakMap,g=[],m=null,p=!1,v=null,y=null,T=null,b=null,S=null,k=null,A=null,x=new st(0,0,0),w=0,R=!1,L=null,z=null,F=null,C=null,H=null,Ne.set(0,0,i.canvas.width,i.canvas.height),De.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ae,disable:fe,bindFramebuffer:ze,drawBuffers:be,useProgram:Fe,setBlending:Ke,setMaterial:rt,setFlipSided:Ge,setCullFace:ht,setLineWidth:It,setPolygonOffset:Vt,setScissorTest:dt,activeTexture:zt,bindTexture:N,unbindTexture:qt,compressedTexImage2D:B,compressedTexImage3D:E,texImage2D:ee,texImage3D:ie,pixelStorei:Ce,getParameter:he,updateUBOMapping:Pe,uniformBlockBinding:Oe,texStorage2D:ce,texStorage3D:de,texSubImage2D:_,texSubImage3D:O,compressedTexSubImage2D:G,compressedTexSubImage3D:j,scissor:ve,viewport:pe,reset:We}}function hM(i,e,t,n,a,r,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new at,d=new WeakMap,f=new Set;let u;const h=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(E,_){return g?new OffscreenCanvas(E,_):bo("canvas")}function p(E,_,O){let G=1;const j=B(E);if((j.width>O||j.height>O)&&(G=O/Math.max(j.width,j.height)),G<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const ce=Math.floor(G*j.width),de=Math.floor(G*j.height);u===void 0&&(u=m(ce,de));const ee=_?m(ce,de):u;return ee.width=ce,ee.height=de,ee.getContext("2d").drawImage(E,0,0,ce,de),$e("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+ce+"x"+de+")."),ee}else return"data"in E&&$e("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),E;return E}function v(E){return E.generateMipmaps}function y(E){i.generateMipmap(E)}function T(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(E,_,O,G,j,ce=!1){if(E!==null){if(i[E]!==void 0)return i[E];$e("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let de;G&&(de=e.get("EXT_texture_norm16"),de||$e("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=_;if(_===i.RED&&(O===i.FLOAT&&(ee=i.R32F),O===i.HALF_FLOAT&&(ee=i.R16F),O===i.UNSIGNED_BYTE&&(ee=i.R8),O===i.UNSIGNED_SHORT&&de&&(ee=de.R16_EXT),O===i.SHORT&&de&&(ee=de.R16_SNORM_EXT)),_===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(ee=i.R8UI),O===i.UNSIGNED_SHORT&&(ee=i.R16UI),O===i.UNSIGNED_INT&&(ee=i.R32UI),O===i.BYTE&&(ee=i.R8I),O===i.SHORT&&(ee=i.R16I),O===i.INT&&(ee=i.R32I)),_===i.RG&&(O===i.FLOAT&&(ee=i.RG32F),O===i.HALF_FLOAT&&(ee=i.RG16F),O===i.UNSIGNED_BYTE&&(ee=i.RG8),O===i.UNSIGNED_SHORT&&de&&(ee=de.RG16_EXT),O===i.SHORT&&de&&(ee=de.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(ee=i.RG8UI),O===i.UNSIGNED_SHORT&&(ee=i.RG16UI),O===i.UNSIGNED_INT&&(ee=i.RG32UI),O===i.BYTE&&(ee=i.RG8I),O===i.SHORT&&(ee=i.RG16I),O===i.INT&&(ee=i.RG32I)),_===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(ee=i.RGB8UI),O===i.UNSIGNED_SHORT&&(ee=i.RGB16UI),O===i.UNSIGNED_INT&&(ee=i.RGB32UI),O===i.BYTE&&(ee=i.RGB8I),O===i.SHORT&&(ee=i.RGB16I),O===i.INT&&(ee=i.RGB32I)),_===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(ee=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(ee=i.RGBA16UI),O===i.UNSIGNED_INT&&(ee=i.RGBA32UI),O===i.BYTE&&(ee=i.RGBA8I),O===i.SHORT&&(ee=i.RGBA16I),O===i.INT&&(ee=i.RGBA32I)),_===i.RGB&&(O===i.UNSIGNED_SHORT&&de&&(ee=de.RGB16_EXT),O===i.SHORT&&de&&(ee=de.RGB16_SNORM_EXT),O===i.UNSIGNED_INT_5_9_9_9_REV&&(ee=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(ee=i.R11F_G11F_B10F)),_===i.RGBA){const ie=ce?Wl:tt.getTransfer(j);O===i.FLOAT&&(ee=i.RGBA32F),O===i.HALF_FLOAT&&(ee=i.RGBA16F),O===i.UNSIGNED_BYTE&&(ee=ie===pt?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT&&de&&(ee=de.RGBA16_EXT),O===i.SHORT&&de&&(ee=de.RGBA16_SNORM_EXT),O===i.UNSIGNED_SHORT_4_4_4_4&&(ee=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(ee=i.RGB5_A1)}return(ee===i.R16F||ee===i.R32F||ee===i.RG16F||ee===i.RG32F||ee===i.RGBA16F||ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function S(E,_){let O;return E?_===null||_===$i||_===yo?O=i.DEPTH24_STENCIL8:_===Ui?O=i.DEPTH32F_STENCIL8:_===_o&&(O=i.DEPTH24_STENCIL8,$e("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===$i||_===yo?O=i.DEPTH_COMPONENT24:_===Ui?O=i.DEPTH_COMPONENT32F:_===_o&&(O=i.DEPTH_COMPONENT16),O}function k(E,_){return v(E)===!0||E.isFramebufferTexture&&E.minFilter!==Kt&&E.minFilter!==nn?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function A(E){const _=E.target;_.removeEventListener("dispose",A),w(_),_.isVideoTexture&&d.delete(_),_.isHTMLTexture&&f.delete(_)}function x(E){const _=E.target;_.removeEventListener("dispose",x),L(_)}function w(E){const _=n.get(E);if(_.__webglInit===void 0)return;const O=E.source,G=h.get(O);if(G){const j=G[_.__cacheKey];j.usedTimes--,j.usedTimes===0&&R(E),Object.keys(G).length===0&&h.delete(O)}n.remove(E)}function R(E){const _=n.get(E);i.deleteTexture(_.__webglTexture);const O=E.source,G=h.get(O);delete G[_.__cacheKey],s.memory.textures--}function L(E){const _=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(_.__webglFramebuffer[G]))for(let j=0;j<_.__webglFramebuffer[G].length;j++)i.deleteFramebuffer(_.__webglFramebuffer[G][j]);else i.deleteFramebuffer(_.__webglFramebuffer[G]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[G])}else{if(Array.isArray(_.__webglFramebuffer))for(let G=0;G<_.__webglFramebuffer.length;G++)i.deleteFramebuffer(_.__webglFramebuffer[G]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let G=0;G<_.__webglColorRenderbuffer.length;G++)_.__webglColorRenderbuffer[G]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[G]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const O=E.textures;for(let G=0,j=O.length;G<j;G++){const ce=n.get(O[G]);ce.__webglTexture&&(i.deleteTexture(ce.__webglTexture),s.memory.textures--),n.remove(O[G])}n.remove(E)}let z=0;function F(){z=0}function C(){return z}function H(E){z=E}function D(){const E=z;return E>=a.maxTextures&&$e("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+a.maxTextures),z+=1,E}function P(E){const _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function Y(E,_){const O=n.get(E);if(E.isVideoTexture&&N(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&O.__version!==E.version){const G=E.image;if(G===null)$e("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)$e("WebGLRenderer: Texture marked for update but image is incomplete");else{fe(O,E,_);return}}else E.isExternalTexture&&(O.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+_)}function $(E,_){const O=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){fe(O,E,_);return}else E.isExternalTexture&&(O.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+_)}function Q(E,_){const O=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){fe(O,E,_);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+_)}function ne(E,_){const O=n.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&O.__version!==E.version){ze(O,E,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+_)}const ue={[lu]:i.REPEAT,[ta]:i.CLAMP_TO_EDGE,[cu]:i.MIRRORED_REPEAT},ke={[Kt]:i.NEAREST,[xy]:i.NEAREST_MIPMAP_NEAREST,[Go]:i.NEAREST_MIPMAP_LINEAR,[nn]:i.LINEAR,[Wc]:i.LINEAR_MIPMAP_NEAREST,[Pa]:i.LINEAR_MIPMAP_LINEAR},Ne={[My]:i.NEVER,[Ry]:i.ALWAYS,[Ey]:i.LESS,[Af]:i.LEQUAL,[wy]:i.EQUAL,[Rf]:i.GEQUAL,[Ty]:i.GREATER,[Ay]:i.NOTEQUAL};function De(E,_){if(_.type===Ui&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===nn||_.magFilter===Wc||_.magFilter===Go||_.magFilter===Pa||_.minFilter===nn||_.minFilter===Wc||_.minFilter===Go||_.minFilter===Pa)&&$e("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,ue[_.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,ue[_.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,ue[_.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,ke[_.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,ke[_.minFilter]),_.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,Ne[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Kt||_.minFilter!==Go&&_.minFilter!==Pa||_.type===Ui&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,a.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function He(E,_){let O=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",A));const G=_.source;let j=h.get(G);j===void 0&&(j={},h.set(G,j));const ce=P(_);if(ce!==E.__cacheKey){j[ce]===void 0&&(j[ce]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,O=!0),j[ce].usedTimes++;const de=j[E.__cacheKey];de!==void 0&&(j[E.__cacheKey].usedTimes--,de.usedTimes===0&&R(_)),E.__cacheKey=ce,E.__webglTexture=j[ce].texture}return O}function J(E,_,O){return Math.floor(Math.floor(E/O)/_)}function ae(E,_,O,G){const ce=E.updateRanges;if(ce.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,O,G,_.data);else{ce.sort((Ce,ve)=>Ce.start-ve.start);let de=0;for(let Ce=1;Ce<ce.length;Ce++){const ve=ce[de],pe=ce[Ce],Pe=ve.start+ve.count,Oe=J(pe.start,_.width,4),We=J(ve.start,_.width,4);pe.start<=Pe+1&&Oe===We&&J(pe.start+pe.count-1,_.width,4)===Oe?ve.count=Math.max(ve.count,pe.start+pe.count-ve.start):(++de,ce[de]=pe)}ce.length=de+1;const ee=t.getParameter(i.UNPACK_ROW_LENGTH),ie=t.getParameter(i.UNPACK_SKIP_PIXELS),he=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let Ce=0,ve=ce.length;Ce<ve;Ce++){const pe=ce[Ce],Pe=Math.floor(pe.start/4),Oe=Math.ceil(pe.count/4),We=Pe%_.width,U=Math.floor(Pe/_.width),me=Oe,re=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,We),t.pixelStorei(i.UNPACK_SKIP_ROWS,U),t.texSubImage2D(i.TEXTURE_2D,0,We,U,me,re,O,G,_.data)}E.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ee),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ie),t.pixelStorei(i.UNPACK_SKIP_ROWS,he)}}function fe(E,_,O){let G=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(G=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(G=i.TEXTURE_3D);const j=He(E,_),ce=_.source;t.bindTexture(G,E.__webglTexture,i.TEXTURE0+O);const de=n.get(ce);if(ce.version!==de.__version||j===!0){if(t.activeTexture(i.TEXTURE0+O),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const re=tt.getPrimaries(tt.workingColorSpace),ge=_.colorSpace===Ta?null:tt.getPrimaries(_.colorSpace),Se=_.colorSpace===Ta||re===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se)}t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let ie=p(_.image,!1,a.maxTextureSize);ie=qt(_,ie);const he=r.convert(_.format,_.colorSpace),Ce=r.convert(_.type);let ve=b(_.internalFormat,he,Ce,_.normalized,_.colorSpace,_.isVideoTexture);De(G,_);let pe;const Pe=_.mipmaps,Oe=_.isVideoTexture!==!0,We=de.__version===void 0||j===!0,U=ce.dataReady,me=k(_,ie);if(_.isDepthTexture)ve=S(_.format===pr,_.type),We&&(Oe?t.texStorage2D(i.TEXTURE_2D,1,ve,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,ve,ie.width,ie.height,0,he,Ce,null));else if(_.isDataTexture)if(Pe.length>0){Oe&&We&&t.texStorage2D(i.TEXTURE_2D,me,ve,Pe[0].width,Pe[0].height);for(let re=0,ge=Pe.length;re<ge;re++)pe=Pe[re],Oe?U&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,pe.width,pe.height,he,Ce,pe.data):t.texImage2D(i.TEXTURE_2D,re,ve,pe.width,pe.height,0,he,Ce,pe.data);_.generateMipmaps=!1}else Oe?(We&&t.texStorage2D(i.TEXTURE_2D,me,ve,ie.width,ie.height),U&&ae(_,ie,he,Ce)):t.texImage2D(i.TEXTURE_2D,0,ve,ie.width,ie.height,0,he,Ce,ie.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Oe&&We&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,ve,Pe[0].width,Pe[0].height,ie.depth);for(let re=0,ge=Pe.length;re<ge;re++)if(pe=Pe[re],_.format!==ki)if(he!==null)if(Oe){if(U)if(_.layerUpdates.size>0){const Se=cp(pe.width,pe.height,_.format,_.type);for(const oe of _.layerUpdates){const Ie=pe.data.subarray(oe*Se/pe.data.BYTES_PER_ELEMENT,(oe+1)*Se/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,oe,pe.width,pe.height,1,he,Ie)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,pe.width,pe.height,ie.depth,he,pe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,re,ve,pe.width,pe.height,ie.depth,0,pe.data,0,0);else $e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?U&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,pe.width,pe.height,ie.depth,he,Ce,pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,re,ve,pe.width,pe.height,ie.depth,0,he,Ce,pe.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Oe&&We&&t.texStorage2D(i.TEXTURE_2D,me,ve,Pe[0].width,Pe[0].height);for(let re=0,ge=Pe.length;re<ge;re++)pe=Pe[re],_.format!==ki?he!==null?Oe?U&&t.compressedTexSubImage2D(i.TEXTURE_2D,re,0,0,pe.width,pe.height,he,pe.data):t.compressedTexImage2D(i.TEXTURE_2D,re,ve,pe.width,pe.height,0,pe.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?U&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,pe.width,pe.height,he,Ce,pe.data):t.texImage2D(i.TEXTURE_2D,re,ve,pe.width,pe.height,0,he,Ce,pe.data)}else if(_.isDataArrayTexture)if(Oe){if(We&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,ve,ie.width,ie.height,ie.depth),U)if(_.layerUpdates.size>0){const re=cp(ie.width,ie.height,_.format,_.type);for(const ge of _.layerUpdates){const Se=ie.data.subarray(ge*re/ie.data.BYTES_PER_ELEMENT,(ge+1)*re/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ge,ie.width,ie.height,1,he,Ce,Se)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,he,Ce,ie.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ve,ie.width,ie.height,ie.depth,0,he,Ce,ie.data);else if(_.isData3DTexture)Oe?(We&&t.texStorage3D(i.TEXTURE_3D,me,ve,ie.width,ie.height,ie.depth),U&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,he,Ce,ie.data)):t.texImage3D(i.TEXTURE_3D,0,ve,ie.width,ie.height,ie.depth,0,he,Ce,ie.data);else if(_.isFramebufferTexture){if(We)if(Oe)t.texStorage2D(i.TEXTURE_2D,me,ve,ie.width,ie.height);else{let re=ie.width,ge=ie.height;for(let Se=0;Se<me;Se++)t.texImage2D(i.TEXTURE_2D,Se,ve,re,ge,0,he,Ce,null),re>>=1,ge>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){const re=i.canvas;if(re.hasAttribute("layoutsubtree")||re.setAttribute("layoutsubtree","true"),ie.parentNode!==re){re.appendChild(ie),f.add(_),re.onpaint=ge=>{const Se=ge.changedElements;for(const oe of f)Se.includes(oe.image)&&(oe.needsUpdate=!0)},re.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ie);else{const Se=i.RGBA,oe=i.RGBA,Ie=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Se,oe,Ie,ie)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Pe.length>0){if(Oe&&We){const re=B(Pe[0]);t.texStorage2D(i.TEXTURE_2D,me,ve,re.width,re.height)}for(let re=0,ge=Pe.length;re<ge;re++)pe=Pe[re],Oe?U&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,he,Ce,pe):t.texImage2D(i.TEXTURE_2D,re,ve,he,Ce,pe);_.generateMipmaps=!1}else if(Oe){if(We){const re=B(ie);t.texStorage2D(i.TEXTURE_2D,me,ve,re.width,re.height)}U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,he,Ce,ie)}else t.texImage2D(i.TEXTURE_2D,0,ve,he,Ce,ie);v(_)&&y(G),de.__version=ce.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function ze(E,_,O){if(_.image.length!==6)return;const G=He(E,_),j=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+O);const ce=n.get(j);if(j.version!==ce.__version||G===!0){t.activeTexture(i.TEXTURE0+O);const de=tt.getPrimaries(tt.workingColorSpace),ee=_.colorSpace===Ta?null:tt.getPrimaries(_.colorSpace),ie=_.colorSpace===Ta||de===ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);const he=_.isCompressedTexture||_.image[0].isCompressedTexture,Ce=_.image[0]&&_.image[0].isDataTexture,ve=[];for(let oe=0;oe<6;oe++)!he&&!Ce?ve[oe]=p(_.image[oe],!0,a.maxCubemapSize):ve[oe]=Ce?_.image[oe].image:_.image[oe],ve[oe]=qt(_,ve[oe]);const pe=ve[0],Pe=r.convert(_.format,_.colorSpace),Oe=r.convert(_.type),We=b(_.internalFormat,Pe,Oe,_.normalized,_.colorSpace),U=_.isVideoTexture!==!0,me=ce.__version===void 0||G===!0,re=j.dataReady;let ge=k(_,pe);De(i.TEXTURE_CUBE_MAP,_);let Se;if(he){U&&me&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,We,pe.width,pe.height);for(let oe=0;oe<6;oe++){Se=ve[oe].mipmaps;for(let Ie=0;Ie<Se.length;Ie++){const Re=Se[Ie];_.format!==ki?Pe!==null?U?re&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ie,0,0,Re.width,Re.height,Pe,Re.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ie,We,Re.width,Re.height,0,Re.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ie,0,0,Re.width,Re.height,Pe,Oe,Re.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ie,We,Re.width,Re.height,0,Pe,Oe,Re.data)}}}else{if(Se=_.mipmaps,U&&me){Se.length>0&&ge++;const oe=B(ve[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,We,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(Ce){U?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,ve[oe].width,ve[oe].height,Pe,Oe,ve[oe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,We,ve[oe].width,ve[oe].height,0,Pe,Oe,ve[oe].data);for(let Ie=0;Ie<Se.length;Ie++){const xt=Se[Ie].image[oe].image;U?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ie+1,0,0,xt.width,xt.height,Pe,Oe,xt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ie+1,We,xt.width,xt.height,0,Pe,Oe,xt.data)}}else{U?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Pe,Oe,ve[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,We,Pe,Oe,ve[oe]);for(let Ie=0;Ie<Se.length;Ie++){const Re=Se[Ie];U?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ie+1,0,0,Pe,Oe,Re.image[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ie+1,We,Pe,Oe,Re.image[oe])}}}v(_)&&y(i.TEXTURE_CUBE_MAP),ce.__version=j.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function be(E,_,O,G,j,ce){const de=r.convert(O.format,O.colorSpace),ee=r.convert(O.type),ie=b(O.internalFormat,de,ee,O.normalized,O.colorSpace),he=n.get(_),Ce=n.get(O);if(Ce.__renderTarget=_,!he.__hasExternalTextures){const ve=Math.max(1,_.width>>ce),pe=Math.max(1,_.height>>ce);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?t.texImage3D(j,ce,ie,ve,pe,_.depth,0,de,ee,null):t.texImage2D(j,ce,ie,ve,pe,0,de,ee,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),zt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,G,j,Ce.__webglTexture,0,dt(_)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,G,j,Ce.__webglTexture,ce),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Fe(E,_,O){if(i.bindRenderbuffer(i.RENDERBUFFER,E),_.depthBuffer){const G=_.depthTexture,j=G&&G.isDepthTexture?G.type:null,ce=S(_.stencilBuffer,j),de=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;zt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt(_),ce,_.width,_.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,dt(_),ce,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ce,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,de,i.RENDERBUFFER,E)}else{const G=_.textures;for(let j=0;j<G.length;j++){const ce=G[j],de=r.convert(ce.format,ce.colorSpace),ee=r.convert(ce.type),ie=b(ce.internalFormat,de,ee,ce.normalized,ce.colorSpace);zt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt(_),ie,_.width,_.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,dt(_),ie,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ie,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function gt(E,_,O){const G=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const j=n.get(_.depthTexture);if(j.__renderTarget=_,(!j.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),G){if(j.__webglInit===void 0&&(j.__webglInit=!0,_.depthTexture.addEventListener("dispose",A)),j.__webglTexture===void 0){j.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),De(i.TEXTURE_CUBE_MAP,_.depthTexture);const he=r.convert(_.depthTexture.format),Ce=r.convert(_.depthTexture.type);let ve;_.depthTexture.format===ca?ve=i.DEPTH_COMPONENT24:_.depthTexture.format===pr&&(ve=i.DEPTH24_STENCIL8);for(let pe=0;pe<6;pe++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ve,_.width,_.height,0,he,Ce,null)}}else Y(_.depthTexture,0);const ce=j.__webglTexture,de=dt(_),ee=G?i.TEXTURE_CUBE_MAP_POSITIVE_X+O:i.TEXTURE_2D,ie=_.depthTexture.format===pr?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===ca)zt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,ee,ce,0,de):i.framebufferTexture2D(i.FRAMEBUFFER,ie,ee,ce,0);else if(_.depthTexture.format===pr)zt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,ee,ce,0,de):i.framebufferTexture2D(i.FRAMEBUFFER,ie,ee,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Be(E){const _=n.get(E),O=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){const G=E.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),G){const j=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,G.removeEventListener("dispose",j)};G.addEventListener("dispose",j),_.__depthDisposeCallback=j}_.__boundDepthTexture=G}if(E.depthTexture&&!_.__autoAllocateDepthBuffer)if(O)for(let G=0;G<6;G++)gt(_.__webglFramebuffer[G],E,G);else{const G=E.texture.mipmaps;G&&G.length>0?gt(_.__webglFramebuffer[0],E,0):gt(_.__webglFramebuffer,E,0)}else if(O){_.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[G]),_.__webglDepthbuffer[G]===void 0)_.__webglDepthbuffer[G]=i.createRenderbuffer(),Fe(_.__webglDepthbuffer[G],E,!1);else{const j=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=_.__webglDepthbuffer[G];i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,ce)}}else{const G=E.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Fe(_.__webglDepthbuffer,E,!1);else{const j=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,ce)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ke(E,_,O){const G=n.get(E);_!==void 0&&be(G.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Be(E)}function rt(E){const _=E.texture,O=n.get(E),G=n.get(_);E.addEventListener("dispose",x);const j=E.textures,ce=E.isWebGLCubeRenderTarget===!0,de=j.length>1;if(de||(G.__webglTexture===void 0&&(G.__webglTexture=i.createTexture()),G.__version=_.version,s.memory.textures++),ce){O.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[ee]=[];for(let ie=0;ie<_.mipmaps.length;ie++)O.__webglFramebuffer[ee][ie]=i.createFramebuffer()}else O.__webglFramebuffer[ee]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let ee=0;ee<_.mipmaps.length;ee++)O.__webglFramebuffer[ee]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(de)for(let ee=0,ie=j.length;ee<ie;ee++){const he=n.get(j[ee]);he.__webglTexture===void 0&&(he.__webglTexture=i.createTexture(),s.memory.textures++)}if(E.samples>0&&zt(E)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ee=0;ee<j.length;ee++){const ie=j[ee];O.__webglColorRenderbuffer[ee]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[ee]);const he=r.convert(ie.format,ie.colorSpace),Ce=r.convert(ie.type),ve=b(ie.internalFormat,he,Ce,ie.normalized,ie.colorSpace,E.isXRRenderTarget===!0),pe=dt(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,pe,ve,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ee,i.RENDERBUFFER,O.__webglColorRenderbuffer[ee])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),Fe(O.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ce){t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture),De(i.TEXTURE_CUBE_MAP,_);for(let ee=0;ee<6;ee++)if(_.mipmaps&&_.mipmaps.length>0)for(let ie=0;ie<_.mipmaps.length;ie++)be(O.__webglFramebuffer[ee][ie],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ie);else be(O.__webglFramebuffer[ee],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);v(_)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){for(let ee=0,ie=j.length;ee<ie;ee++){const he=j[ee],Ce=n.get(he);let ve=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ve=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ve,Ce.__webglTexture),De(ve,he),be(O.__webglFramebuffer,E,he,i.COLOR_ATTACHMENT0+ee,ve,0),v(he)&&y(ve)}t.unbindTexture()}else{let ee=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ee=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ee,G.__webglTexture),De(ee,_),_.mipmaps&&_.mipmaps.length>0)for(let ie=0;ie<_.mipmaps.length;ie++)be(O.__webglFramebuffer[ie],E,_,i.COLOR_ATTACHMENT0,ee,ie);else be(O.__webglFramebuffer,E,_,i.COLOR_ATTACHMENT0,ee,0);v(_)&&y(ee),t.unbindTexture()}E.depthBuffer&&Be(E)}function Ge(E){const _=E.textures;for(let O=0,G=_.length;O<G;O++){const j=_[O];if(v(j)){const ce=T(E),de=n.get(j).__webglTexture;t.bindTexture(ce,de),y(ce),t.unbindTexture()}}}const ht=[],It=[];function Vt(E){if(E.samples>0){if(zt(E)===!1){const _=E.textures,O=E.width,G=E.height;let j=i.COLOR_BUFFER_BIT;const ce=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=n.get(E),ee=_.length>1;if(ee)for(let he=0;he<_.length;he++)t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer);const ie=E.texture.mipmaps;ie&&ie.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let he=0;he<_.length;he++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),ee){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,de.__webglColorRenderbuffer[he]);const Ce=n.get(_[he]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ce,0)}i.blitFramebuffer(0,0,O,G,0,0,O,G,j,i.NEAREST),c===!0&&(ht.length=0,It.length=0,ht.push(i.COLOR_ATTACHMENT0+he),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&(ht.push(ce),It.push(ce),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,It)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ht))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ee)for(let he=0;he<_.length;he++){t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,de.__webglColorRenderbuffer[he]);const Ce=n.get(_[he]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,Ce,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&c){const _=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function dt(E){return Math.min(a.maxSamples,E.samples)}function zt(E){const _=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function N(E){const _=s.render.frame;d.get(E)!==_&&(d.set(E,_),E.update())}function qt(E,_){const O=E.colorSpace,G=E.format,j=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||O!==ql&&O!==Ta&&(tt.getTransfer(O)===pt?(G!==ki||j!==Kn)&&$e("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):lt("WebGLTextures: Unsupported texture color space:",O)),_}function B(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=D,this.resetTextureUnits=F,this.getTextureUnits=C,this.setTextureUnits=H,this.setTexture2D=Y,this.setTexture2DArray=$,this.setTexture3D=Q,this.setTextureCube=ne,this.rebindTextures=Ke,this.setupRenderTarget=rt,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=Vt,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=be,this.useMultisampledRTT=zt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function pM(i,e){function t(n,a=Ta){let r;const s=tt.getTransfer(a);if(n===Kn)return i.UNSIGNED_BYTE;if(n===kf)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Mf)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ng)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Og)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===zg)return i.BYTE;if(n===Ug)return i.SHORT;if(n===_o)return i.UNSIGNED_SHORT;if(n===Sf)return i.INT;if(n===$i)return i.UNSIGNED_INT;if(n===Ui)return i.FLOAT;if(n===Gi)return i.HALF_FLOAT;if(n===Fg)return i.ALPHA;if(n===Bg)return i.RGB;if(n===ki)return i.RGBA;if(n===ca)return i.DEPTH_COMPONENT;if(n===pr)return i.DEPTH_STENCIL;if(n===Hg)return i.RED;if(n===Ef)return i.RED_INTEGER;if(n===Mr)return i.RG;if(n===wf)return i.RG_INTEGER;if(n===Tf)return i.RGBA_INTEGER;if(n===El||n===wl||n===Tl||n===Al)if(s===pt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===El)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===wl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Tl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Al)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===El)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===wl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Tl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Al)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===du||n===uu||n===fu||n===hu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===du)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===uu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===fu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===hu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===pu||n===mu||n===gu||n===vu||n===_u||n===Gl||n===yu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===pu||n===mu)return s===pt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===gu)return s===pt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===vu)return r.COMPRESSED_R11_EAC;if(n===_u)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Gl)return r.COMPRESSED_RG11_EAC;if(n===yu)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===xu||n===bu||n===Su||n===ku||n===Mu||n===Eu||n===wu||n===Tu||n===Au||n===Ru||n===Lu||n===Cu||n===Pu||n===Du)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===xu)return s===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===bu)return s===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Su)return s===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ku)return s===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Mu)return s===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Eu)return s===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===wu)return s===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Tu)return s===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Au)return s===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ru)return s===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Lu)return s===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Cu)return s===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Pu)return s===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Du)return s===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Iu||n===zu||n===Uu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Iu)return s===pt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===zu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Uu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Nu||n===Ou||n===Vl||n===Fu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Nu)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ou)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Vl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Fu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===yo?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const mM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class vM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Jg(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Vi({vertexShader:mM,fragmentShader:gM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ti(new gc(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _M extends Tr{constructor(e,t){super();const n=this;let a=null,r=1,s=null,o="local-floor",c=1,l=null,d=null,f=null,u=null,h=null,g=null;const m=typeof XRWebGLBinding<"u",p=new vM,v={},y=t.getContextAttributes();let T=null,b=null;const S=[],k=[],A=new at;let x=null,w=null;const R=new oi;R.viewport=new Pt;const L=new oi;L.viewport=new Pt;const z=[R,L],F=new Mx;let C=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ae=S[J];return ae===void 0&&(ae=new ed,S[J]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(J){let ae=S[J];return ae===void 0&&(ae=new ed,S[J]=ae),ae.getGripSpace()},this.getHand=function(J){let ae=S[J];return ae===void 0&&(ae=new ed,S[J]=ae),ae.getHandSpace()};function D(J){const ae=k.indexOf(J.inputSource);if(ae===-1)return;const fe=S[ae];fe!==void 0&&(fe.update(J.inputSource,J.frame,l||s),fe.dispatchEvent({type:J.type,data:J.inputSource}))}function P(){a.removeEventListener("select",D),a.removeEventListener("selectstart",D),a.removeEventListener("selectend",D),a.removeEventListener("squeeze",D),a.removeEventListener("squeezestart",D),a.removeEventListener("squeezeend",D),a.removeEventListener("end",P),a.removeEventListener("inputsourceschange",Y);for(let J=0;J<S.length;J++){const ae=k[J];ae!==null&&(k[J]=null,S[J].disconnect(ae))}C=null,H=null,p.reset();for(const J in v)delete v[J];if(e.setRenderTarget(T),h=null,u=null,f=null,a=null,b=null,He.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(A.width,A.height,!1),w!==null){const J=w.camera;J.fov=w.fov,J.zoom=w.zoom,J.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&$e("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&$e("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return u!==null?u:h},this.getBinding=function(){return f===null&&m&&(f=new XRWebGLBinding(a,t)),f},this.getFrame=function(){return g},this.getSession=function(){return a},this.setSession=async function(J){if(a=J,a!==null){if(T=e.getRenderTarget(),a.addEventListener("select",D),a.addEventListener("selectstart",D),a.addEventListener("selectend",D),a.addEventListener("squeeze",D),a.addEventListener("squeezestart",D),a.addEventListener("squeezeend",D),a.addEventListener("end",P),a.addEventListener("inputsourceschange",Y),y.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(A),m&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,ze=null,be=null;y.depth&&(be=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=y.stencil?pr:ca,ze=y.stencil?yo:$i);const Fe={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Fe),a.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),b=new Mi(u.textureWidth,u.textureHeight,{format:ki,type:Kn,depthTexture:new So(u.textureWidth,u.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const fe={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(a,t,fe),a.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),b=new Mi(h.framebufferWidth,h.framebufferHeight,{format:ki,type:Kn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,s=await a.requestReferenceSpace(o),He.setContext(a),He.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function Y(J){for(let ae=0;ae<J.removed.length;ae++){const fe=J.removed[ae],ze=k.indexOf(fe);ze>=0&&(k[ze]=null,S[ze].disconnect(fe))}for(let ae=0;ae<J.added.length;ae++){const fe=J.added[ae];let ze=k.indexOf(fe);if(ze===-1){for(let Fe=0;Fe<S.length;Fe++)if(Fe>=k.length){k.push(fe),ze=Fe;break}else if(k[Fe]===null){k[Fe]=fe,ze=Fe;break}if(ze===-1)break}const be=S[ze];be&&be.connect(fe)}}const $=new K,Q=new K;function ne(J,ae,fe){$.setFromMatrixPosition(ae.matrixWorld),Q.setFromMatrixPosition(fe.matrixWorld);const ze=$.distanceTo(Q),be=ae.projectionMatrix.elements,Fe=fe.projectionMatrix.elements,gt=be[14]/(be[10]-1),Be=be[14]/(be[10]+1),Ke=(be[9]+1)/be[5],rt=(be[9]-1)/be[5],Ge=(be[8]-1)/be[0],ht=(Fe[8]+1)/Fe[0],It=gt*Ge,Vt=gt*ht,dt=ze/(-Ge+ht),zt=dt*-Ge;if(ae.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(zt),J.translateZ(dt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),be[10]===-1)J.projectionMatrix.copy(ae.projectionMatrix),J.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const N=gt+dt,qt=Be+dt,B=It-zt,E=Vt+(ze-zt),_=Ke*Be/qt*N,O=rt*Be/qt*N;J.projectionMatrix.makePerspective(B,E,_,O,N,qt),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ue(J,ae){ae===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ae.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(a===null)return;let ae=J.near,fe=J.far;p.texture!==null&&(p.depthNear>0&&(ae=p.depthNear),p.depthFar>0&&(fe=p.depthFar)),F.near=L.near=R.near=ae,F.far=L.far=R.far=fe,(C!==F.near||H!==F.far)&&(a.updateRenderState({depthNear:F.near,depthFar:F.far}),C=F.near,H=F.far),F.layers.mask=J.layers.mask|6,R.layers.mask=F.layers.mask&-5,L.layers.mask=F.layers.mask&-3;const ze=J.parent,be=F.cameras;ue(F,ze);for(let Fe=0;Fe<be.length;Fe++)ue(be[Fe],ze);be.length===2?ne(F,R,L):F.projectionMatrix.copy(R.projectionMatrix),w===null&&J.isPerspectiveCamera&&(w={camera:J,fov:J.fov,zoom:J.zoom}),ke(J,F,ze)};function ke(J,ae,fe){fe===null?J.matrix.copy(ae.matrixWorld):(J.matrix.copy(fe.matrixWorld),J.matrix.invert(),J.matrix.multiply(ae.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ae.projectionMatrix),J.projectionMatrixInverse.copy(ae.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Hu*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(u===null&&h===null))return c},this.setFoveation=function(J){c=J,u!==null&&(u.fixedFoveation=J),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=J)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(F)},this.getCameraTexture=function(J){return v[J]};let Ne=null;function De(J,ae){if(d=ae.getViewerPose(l||s),g=ae,d!==null){const fe=d.views;h!==null&&(e.setRenderTargetFramebuffer(b,h.framebuffer),e.setRenderTarget(b));let ze=!1;fe.length!==F.cameras.length&&(F.cameras.length=0,ze=!0);for(let Be=0;Be<fe.length;Be++){const Ke=fe[Be];let rt=null;if(h!==null)rt=h.getViewport(Ke);else{const ht=f.getViewSubImage(u,Ke);rt=ht.viewport,Be===0&&(e.setRenderTargetTextures(b,ht.colorTexture,ht.depthStencilTexture),e.setRenderTarget(b))}let Ge=z[Be];Ge===void 0&&(Ge=new oi,Ge.layers.enable(Be),Ge.viewport=new Pt,z[Be]=Ge),Ge.matrix.fromArray(Ke.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(Ke.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(rt.x,rt.y,rt.width,rt.height),Be===0&&(F.matrix.copy(Ge.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),ze===!0&&F.cameras.push(Ge)}const be=a.enabledFeatures;if(be&&be.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&m){f=n.getBinding();const Be=f.getDepthInformation(fe[0]);Be&&Be.isValid&&Be.texture&&p.init(Be,a.renderState)}if(be&&be.includes("camera-access")&&m){e.state.unbindTexture(),f=n.getBinding();for(let Be=0;Be<fe.length;Be++){const Ke=fe[Be].camera;if(Ke){let rt=v[Ke];rt||(rt=new Jg,v[Ke]=rt);const Ge=f.getCameraImage(Ke);rt.sourceTexture=Ge}}}}for(let fe=0;fe<S.length;fe++){const ze=k[fe],be=S[fe];ze!==null&&be!==void 0&&be.update(ze,ae,l||s)}Ne&&Ne(J,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),g=null}const He=new iv;He.setAnimationLoop(De),this.setAnimationLoop=function(J){Ne=J},this.dispose=function(){}}}const yM=new wt,dv=new qe;dv.set(-1,0,0,0,1,0,0,0,1);function xM(i,e){function t(p,v){p.matrixAutoUpdate===!0&&p.updateMatrix(),v.value.copy(p.matrix)}function n(p,v){v.color.getRGB(p.fogColor.value,jg(i)),v.isFog?(p.fogNear.value=v.near,p.fogFar.value=v.far):v.isFogExp2&&(p.fogDensity.value=v.density)}function a(p,v,y,T,b){v.isNodeMaterial?v.uniformsNeedUpdate=!1:v.isMeshBasicMaterial?r(p,v):v.isMeshLambertMaterial?(r(p,v),v.envMap&&(p.envMapIntensity.value=v.envMapIntensity)):v.isMeshToonMaterial?(r(p,v),f(p,v)):v.isMeshPhongMaterial?(r(p,v),d(p,v),v.envMap&&(p.envMapIntensity.value=v.envMapIntensity)):v.isMeshStandardMaterial?(r(p,v),u(p,v),v.isMeshPhysicalMaterial&&h(p,v,b)):v.isMeshMatcapMaterial?(r(p,v),g(p,v)):v.isMeshDepthMaterial?r(p,v):v.isMeshDistanceMaterial?(r(p,v),m(p,v)):v.isMeshNormalMaterial?r(p,v):v.isLineBasicMaterial?(s(p,v),v.isLineDashedMaterial&&o(p,v)):v.isPointsMaterial?c(p,v,y,T):v.isSpriteMaterial?l(p,v):v.isShadowMaterial?(p.color.value.copy(v.color),p.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function r(p,v){p.opacity.value=v.opacity,v.color&&p.diffuse.value.copy(v.color),v.emissive&&p.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(p.map.value=v.map,t(v.map,p.mapTransform)),v.alphaMap&&(p.alphaMap.value=v.alphaMap,t(v.alphaMap,p.alphaMapTransform)),v.bumpMap&&(p.bumpMap.value=v.bumpMap,t(v.bumpMap,p.bumpMapTransform),p.bumpScale.value=v.bumpScale,v.side===Pn&&(p.bumpScale.value*=-1)),v.normalMap&&(p.normalMap.value=v.normalMap,t(v.normalMap,p.normalMapTransform),p.normalScale.value.copy(v.normalScale),v.side===Pn&&p.normalScale.value.negate()),v.displacementMap&&(p.displacementMap.value=v.displacementMap,t(v.displacementMap,p.displacementMapTransform),p.displacementScale.value=v.displacementScale,p.displacementBias.value=v.displacementBias),v.emissiveMap&&(p.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,p.emissiveMapTransform)),v.specularMap&&(p.specularMap.value=v.specularMap,t(v.specularMap,p.specularMapTransform)),v.alphaTest>0&&(p.alphaTest.value=v.alphaTest);const y=e.get(v),T=y.envMap,b=y.envMapRotation;T&&(p.envMap.value=T,p.envMapRotation.value.setFromMatrix4(yM.makeRotationFromEuler(b)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(dv),p.reflectivity.value=v.reflectivity,p.ior.value=v.ior,p.refractionRatio.value=v.refractionRatio),v.lightMap&&(p.lightMap.value=v.lightMap,p.lightMapIntensity.value=v.lightMapIntensity,t(v.lightMap,p.lightMapTransform)),v.aoMap&&(p.aoMap.value=v.aoMap,p.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,p.aoMapTransform))}function s(p,v){p.diffuse.value.copy(v.color),p.opacity.value=v.opacity,v.map&&(p.map.value=v.map,t(v.map,p.mapTransform))}function o(p,v){p.dashSize.value=v.dashSize,p.totalSize.value=v.dashSize+v.gapSize,p.scale.value=v.scale}function c(p,v,y,T){p.diffuse.value.copy(v.color),p.opacity.value=v.opacity,p.size.value=v.size*y,p.scale.value=T*.5,v.map&&(p.map.value=v.map,t(v.map,p.uvTransform)),v.alphaMap&&(p.alphaMap.value=v.alphaMap,t(v.alphaMap,p.alphaMapTransform)),v.alphaTest>0&&(p.alphaTest.value=v.alphaTest)}function l(p,v){p.diffuse.value.copy(v.color),p.opacity.value=v.opacity,p.rotation.value=v.rotation,v.map&&(p.map.value=v.map,t(v.map,p.mapTransform)),v.alphaMap&&(p.alphaMap.value=v.alphaMap,t(v.alphaMap,p.alphaMapTransform)),v.alphaTest>0&&(p.alphaTest.value=v.alphaTest)}function d(p,v){p.specular.value.copy(v.specular),p.shininess.value=Math.max(v.shininess,1e-4)}function f(p,v){v.gradientMap&&(p.gradientMap.value=v.gradientMap)}function u(p,v){p.metalness.value=v.metalness,v.metalnessMap&&(p.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,p.metalnessMapTransform)),p.roughness.value=v.roughness,v.roughnessMap&&(p.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,p.roughnessMapTransform)),v.envMap&&(p.envMapIntensity.value=v.envMapIntensity)}function h(p,v,y){p.ior.value=v.ior,v.sheen>0&&(p.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),p.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(p.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,p.sheenColorMapTransform)),v.sheenRoughnessMap&&(p.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,p.sheenRoughnessMapTransform))),v.clearcoat>0&&(p.clearcoat.value=v.clearcoat,p.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(p.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,p.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(p.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Pn&&p.clearcoatNormalScale.value.negate())),v.dispersion>0&&(p.dispersion.value=v.dispersion),v.retroreflectivity>0&&(p.retroreflectivity.value=v.retroreflectivity),v.iridescence>0&&(p.iridescence.value=v.iridescence,p.iridescenceIOR.value=v.iridescenceIOR,p.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(p.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,p.iridescenceMapTransform)),v.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),v.transmission>0&&(p.transmission.value=v.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),v.transmissionMap&&(p.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,p.transmissionMapTransform)),p.thickness.value=v.thickness,v.thicknessMap&&(p.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=v.attenuationDistance,p.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(p.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(p.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=v.specularIntensity,p.specularColor.value.copy(v.specularColor),v.specularColorMap&&(p.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,p.specularColorMapTransform)),v.specularIntensityMap&&(p.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,v){v.matcap&&(p.matcap.value=v.matcap)}function m(p,v){const y=e.get(v).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:a}}function bM(i,e,t,n){let a={},r={},s=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,S){const k=S.program;n.uniformBlockBinding(b,k)}function l(b,S){let k=a[b.id];k===void 0&&(p(b),k=d(b),a[b.id]=k,b.addEventListener("dispose",y));const A=S.program;n.updateUBOMapping(b,A);const x=e.render.frame;r[b.id]!==x&&(u(b),r[b.id]=x)}function d(b){const S=f();b.__bindingPointIndex=S;const k=i.createBuffer(),A=b.__size,x=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,k),i.bufferData(i.UNIFORM_BUFFER,A,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,k),k}function f(){for(let b=0;b<o;b++)if(s.indexOf(b)===-1)return s.push(b),b;return lt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(b){const S=a[b.id],k=b.uniforms,A=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let x=0,w=k.length;x<w;x++){const R=k[x];if(Array.isArray(R))for(let L=0,z=R.length;L<z;L++)h(R[L],x,L,A);else h(R,x,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(b,S,k,A){if(m(b,S,k,A)===!0){const x=b.__offset,w=b.value;if(Array.isArray(w)){let R=0;for(let L=0;L<w.length;L++){const z=w[L],F=v(z);g(z,b.__data,R),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(R+=F.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(w,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,b.__data)}}function g(b,S,k){typeof b=="number"||typeof b=="boolean"?S[0]=b:b.isMatrix3?(S[0]=b.elements[0],S[1]=b.elements[1],S[2]=b.elements[2],S[3]=0,S[4]=b.elements[3],S[5]=b.elements[4],S[6]=b.elements[5],S[7]=0,S[8]=b.elements[6],S[9]=b.elements[7],S[10]=b.elements[8],S[11]=0):ArrayBuffer.isView(b)?S.set(new b.constructor(b.buffer,b.byteOffset,S.length)):b.toArray(S,k)}function m(b,S,k,A){const x=b.value,w=S+"_"+k;if(A[w]===void 0)return typeof x=="number"||typeof x=="boolean"?A[w]=x:ArrayBuffer.isView(x)?A[w]=x.slice():A[w]=x.clone(),!0;{const R=A[w];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return A[w]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function p(b){const S=b.uniforms;let k=0;const A=16;for(let w=0,R=S.length;w<R;w++){const L=Array.isArray(S[w])?S[w]:[S[w]];for(let z=0,F=L.length;z<F;z++){const C=L[z],H=Array.isArray(C.value)?C.value:[C.value];for(let D=0,P=H.length;D<P;D++){const Y=H[D],$=v(Y),Q=k%A,ne=Q%$.boundary,ue=Q+ne;k+=ne,ue!==0&&A-ue<$.storage&&(k+=A-ue),C.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=k,k+=$.storage}}}const x=k%A;return x>0&&(k+=A-x),b.__size=k,b.__cache={},this}function v(b){const S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?$e("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(S.boundary=16,S.storage=b.byteLength):$e("WebGLRenderer: Unsupported uniform value type.",b),S}function y(b){const S=b.target;S.removeEventListener("dispose",y);const k=s.indexOf(S.__bindingPointIndex);s.splice(k,1),i.deleteBuffer(a[S.id]),delete a[S.id],delete r[S.id]}function T(){for(const b in a)i.deleteBuffer(a[b]);s=[],a={},r={}}return{bind:c,update:l,dispose:T}}const SM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ri=null;function kM(){return Ri===null&&(Ri=new rx(SM,16,16,Mr,Gi),Ri.name="DFG_LUT",Ri.minFilter=nn,Ri.magFilter=nn,Ri.wrapS=ta,Ri.wrapT=ta,Ri.generateMipmaps=!1,Ri.needsUpdate=!0),Ri}class MM{constructor(e={}){const{canvas:t=Py(),context:n=null,depth:a=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:h=Kn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=s;const m=h,p=new Set([Tf,wf,Ef]),v=new Set([Kn,$i,_o,yo,kf,Mf]),y=new Uint32Array(4),T=new Int32Array(4),b=new K;let S=null,k=null;const A=[],x=[];let w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let L=!1,z=null,F=null,C=null,H=null;this._outputColorSpace=Gn;let D=0,P=0,Y=null,$=-1,Q=null;const ne=new Pt,ue=new Pt;let ke=null;const Ne=new st(0);let De=0,He=t.width,J=t.height,ae=1,fe=null,ze=null;const be=new Pt(0,0,He,J),Fe=new Pt(0,0,He,J);let gt=!1;const Be=new Df;let Ke=!1,rt=!1;const Ge=new wt,ht=new K,It=new Pt,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let dt=!1;function zt(){return Y===null?ae:1}let N=n;function qt(M,I){return t.getContext(M,I)}let B,E,_,O,G,j,ce,de,ee,ie,he,Ce,ve,pe,Pe,Oe,We,U,me,re,ge,Se,oe;try{const M={alpha:!0,depth:a,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${xf}`),t.addEventListener("webglcontextlost",xt,!1),t.addEventListener("webglcontextrestored",ut,!1),t.addEventListener("webglcontextcreationerror",pi,!1),N===null){const I="webgl2";if(N=qt(I,M),N===null)throw qt(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ie()}catch(M){throw t.removeEventListener("webglcontextlost",xt,!1),t.removeEventListener("webglcontextrestored",ut,!1),t.removeEventListener("webglcontextcreationerror",pi,!1),lt("WebGLRenderer: "+M.message),M}function Ie(){B=new kk(N),B.init(),ge=new pM(N,B),E=new hk(N,B,e,ge),_=new fM(N,B),E.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),F=N.createFramebuffer(),C=N.createFramebuffer(),H=N.createFramebuffer(),O=new wk(N),G=new j1,j=new hM(N,B,_,G,E,ge,O),ce=new Sk(R),de=new Ax(N),Se=new uk(N,de),ee=new Mk(N,de,O,Se),ie=new Ak(N,ee,de,Se,O),U=new Tk(N,E,j),Pe=new pk(G),he=new J1(R,ce,B,E,Se,Pe),Ce=new xM(R,G),ve=new eM,pe=new sM(B),We=new dk(R,ce,_,ie,g,c),Oe=new uM(R,ie,E),oe=new bM(N,O,E,_),me=new fk(N,B,O),re=new Ek(N,B,O),O.programs=he.programs,R.capabilities=E,R.extensions=B,R.properties=G,R.renderLists=ve,R.shadowMap=Oe,R.state=_,R.info=O}m!==Kn&&(w=new Lk(m,t.width,t.height,o,a,r));const Re=new _M(R,N);this.xr=Re,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const M=B.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=B.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(M){M!==void 0&&(ae=M,this.setSize(He,J,!1))},this.getSize=function(M){return M.set(He,J)},this.setSize=function(M,I,Z=!0){if(Re.isPresenting){$e("WebGLRenderer: Can't change size while VR device is presenting.");return}He=M,J=I,t.width=Math.floor(M*ae),t.height=Math.floor(I*ae),Z===!0&&(t.style.width=M+"px",t.style.height=I+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,M,I)},this.getDrawingBufferSize=function(M){return M.set(He*ae,J*ae).floor()},this.setDrawingBufferSize=function(M,I,Z){He=M,J=I,ae=Z,t.width=Math.floor(M*Z),t.height=Math.floor(I*Z),this.setViewport(0,0,M,I)},this.setEffects=function(M){if(m===Kn){lt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let I=0;I<M.length;I++)if(M[I].isOutputPass===!0){$e("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(ne)},this.getViewport=function(M){return M.copy(be)},this.setViewport=function(M,I,Z,q){M.isVector4?be.set(M.x,M.y,M.z,M.w):be.set(M,I,Z,q),_.viewport(ne.copy(be).multiplyScalar(ae).round())},this.getScissor=function(M){return M.copy(Fe)},this.setScissor=function(M,I,Z,q){M.isVector4?Fe.set(M.x,M.y,M.z,M.w):Fe.set(M,I,Z,q),_.scissor(ue.copy(Fe).multiplyScalar(ae).round())},this.getScissorTest=function(){return gt},this.setScissorTest=function(M){_.setScissorTest(gt=M)},this.setOpaqueSort=function(M){fe=M},this.setTransparentSort=function(M){ze=M},this.getClearColor=function(M){return M.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor(...arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha(...arguments)},this.clear=function(M=!0,I=!0,Z=!0){let q=0;if(M){let W=!1;if(Y!==null){const xe=Y.texture.format;W=p.has(xe)}if(W){const xe=Y.texture.type,we=v.has(xe),ye=We.getClearColor(),Te=We.getClearAlpha(),Le=ye.r,Xe=ye.g,Qe=ye.b;we?(y[0]=Le,y[1]=Xe,y[2]=Qe,y[3]=Te,N.clearBufferuiv(N.COLOR,0,y)):(T[0]=Le,T[1]=Xe,T[2]=Qe,T[3]=Te,N.clearBufferiv(N.COLOR,0,T))}else q|=N.COLOR_BUFFER_BIT}I&&(q|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(q|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&N.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),z=M},this.dispose=function(){t.removeEventListener("webglcontextlost",xt,!1),t.removeEventListener("webglcontextrestored",ut,!1),t.removeEventListener("webglcontextcreationerror",pi,!1),We.dispose(),ve.dispose(),pe.dispose(),G.dispose(),ce.dispose(),ie.dispose(),Se.dispose(),oe.dispose(),he.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",jf),Re.removeEventListener("sessionend",Qf),Za.stop()};function xt(M){M.preventDefault(),zh("WebGLRenderer: Context Lost."),L=!0}function ut(){zh("WebGLRenderer: Context Restored."),L=!1;const M=O.autoReset,I=Oe.enabled,Z=Oe.autoUpdate,q=Oe.needsUpdate,W=Oe.type;Ie(),O.autoReset=M,Oe.enabled=I,Oe.autoUpdate=Z,Oe.needsUpdate=q,Oe.type=W}function pi(M){lt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function wi(M){const I=M.target;I.removeEventListener("dispose",wi),m_(I)}function m_(M){g_(M),G.remove(M)}function g_(M){const I=G.get(M).programs;I!==void 0&&(I.forEach(function(Z){he.releaseProgram(Z)}),M.isShaderMaterial&&he.releaseShaderCache(M))}this.renderBufferDirect=function(M,I,Z,q,W,xe){I===null&&(I=Vt);const we=W.isMesh&&W.matrixWorld.determinantAffine()<0,ye=y_(M,I,Z,q,W);_.setMaterial(q,we);let Te=Z.index,Le=1;if(q.wireframe===!0){if(Te=ee.getWireframeAttribute(Z),Te===void 0)return;Le=2}const Xe=Z.drawRange,Qe=Z.attributes.position;let Ae=Xe.start*Le,ft=(Xe.start+Xe.count)*Le;xe!==null&&(Ae=Math.max(Ae,xe.start*Le),ft=Math.min(ft,(xe.start+xe.count)*Le)),Te!==null?(Ae=Math.max(Ae,0),ft=Math.min(ft,Te.count)):Qe!=null&&(Ae=Math.max(Ae,0),ft=Math.min(ft,Qe.count));const Ft=ft-Ae;if(Ft<0||Ft===1/0)return;Se.setup(W,q,ye,Z,Te);let Et,vt=me;if(Te!==null&&(Et=de.get(Te),vt=re,vt.setIndex(Et)),W.isMesh)q.wireframe===!0?(_.setLineWidth(q.wireframeLinewidth*zt()),vt.setMode(N.LINES)):vt.setMode(N.TRIANGLES);else if(W.isLine){let cn=q.linewidth;cn===void 0&&(cn=1),_.setLineWidth(cn*zt()),W.isLineSegments?vt.setMode(N.LINES):W.isLineLoop?vt.setMode(N.LINE_LOOP):vt.setMode(N.LINE_STRIP)}else W.isPoints?vt.setMode(N.POINTS):W.isSprite&&vt.setMode(N.TRIANGLES);if(W.isBatchedMesh)if(B.get("WEBGL_multi_draw"))vt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const cn=W._multiDrawStarts,Ee=W._multiDrawCounts,vn=W._multiDrawCount,ot=Te?de.get(Te).bytesPerElement:1,ni=G.get(q).currentProgram.getUniforms();for(let Ti=0;Ti<vn;Ti++)ni.setValue(N,"_gl_DrawID",Ti),vt.render(cn[Ti]/ot,Ee[Ti])}else if(W.isInstancedMesh)vt.renderInstances(Ae,Ft,W.count);else if(Z.isInstancedBufferGeometry){const cn=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Ee=Math.min(Z.instanceCount,cn);vt.renderInstances(Ae,Ft,Ee)}else vt.render(Ae,Ft)};function Jf(M,I,Z,q){z!==null&&M.isNodeMaterial&&z.setObject(q,M),Ke===!0&&Pe.setState(M,Z,!1),M.transparent===!0&&M.side===bi&&M.forceSinglePass===!1?(M.side=Pn,M.needsUpdate=!0,Ho(M,I,q),M.side=Sr,M.needsUpdate=!0,Ho(M,I,q),M.side=bi):Ho(M,I,q)}this.compile=function(M,I,Z=null){Z===null&&(Z=M),z!==null&&z.renderStart(M,I,Z),k=pe.get(Z),k.init(I),x.push(k),Z.traverseVisible(function(W){W.isLight&&W.layers.test(I.layers)&&(k.pushLight(W),W.castShadow&&k.pushShadow(W))}),M!==Z&&M.traverseVisible(function(W){W.isLight&&W.layers.test(I.layers)&&(k.pushLight(W),W.castShadow&&k.pushShadow(W))}),k.setupLights(),z!==null&&z.updateLights(k.state.lightsArray),rt=this.localClippingEnabled,Ke=Pe.init(this.clippingPlanes,rt),Ke===!0&&Pe.setGlobalState(this.clippingPlanes,I),z!==null&&Oe.render(k.state.shadowsArray,Z,I);const q=new Set;return M.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const xe=W.material;if(xe)if(Array.isArray(xe))for(let we=0;we<xe.length;we++){const ye=xe[we];Jf(ye,Z,I,W),q.add(ye)}else Jf(xe,Z,I,W),q.add(xe)}),k=x.pop(),z!==null&&z.renderEnd(),q},this.compileAsync=function(M,I,Z=null){const q=this.compile(M,I,Z);return new Promise(W=>{function xe(){if(q.forEach(function(we){const Te=G.get(we).currentProgram;(Te===void 0||Te.isReady())&&q.delete(we)}),q.size===0){W(M);return}setTimeout(xe,10)}B.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let Pc=null;function v_(M){Pc&&Pc(M)}function jf(){Za.stop()}function Qf(){Za.start()}const Za=new iv;Za.setAnimationLoop(v_),typeof self<"u"&&Za.setContext(self),this.setAnimationLoop=function(M){Pc=M,Re.setAnimationLoop(M),M===null?Za.stop():Za.start()},Re.addEventListener("sessionstart",jf),Re.addEventListener("sessionend",Qf),this.render=function(M,I){if(I!==void 0&&I.isCamera!==!0){lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;z!==null&&z.renderStart(M,I);const Z=Re.enabled===!0&&Re.isPresenting===!0,q=w!==null&&(Y===null||Z)&&w.begin(R,Y);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(I),I=Re.getCamera()),M.isScene===!0&&M.onBeforeRender(R,M,I,Y),k=pe.get(M,x.length),k.init(I),k.state.textureUnits=j.getTextureUnits(),x.push(k),Ge.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Be.setFromProjectionMatrix(Ge,Ni,I.reversedDepth),rt=this.localClippingEnabled,Ke=Pe.init(this.clippingPlanes,rt),S=ve.get(M,A.length),S.init(),A.push(S),Re.enabled===!0&&Re.isPresenting===!0){const we=R.xr.getDepthSensingMesh();we!==null&&Dc(we,I,-1/0,R.sortObjects)}Dc(M,I,0,R.sortObjects),S.finish(),z!==null&&z.updateLights(k.state.lightsArray),R.sortObjects===!0&&S.sort(fe,ze),dt=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,dt&&We.addToRenderList(S,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ke===!0&&Pe.beginShadows();const W=k.state.shadowsArray;if(Oe.render(W,M,I),Ke===!0&&Pe.endShadows(),(q&&w.hasRenderPass())===!1){const we=S.opaque,ye=S.transmissive;if(k.setupLights(),I.isArrayCamera){const Te=I.cameras;if(ye.length>0)for(let Le=0,Xe=Te.length;Le<Xe;Le++){const Qe=Te[Le];th(we,ye,M,Qe)}dt&&We.render(M);for(let Le=0,Xe=Te.length;Le<Xe;Le++){const Qe=Te[Le];eh(S,M,Qe,Qe.viewport)}}else ye.length>0&&th(we,ye,M,I),dt&&We.render(M),eh(S,M,I)}Y!==null&&P===0&&(j.updateMultisampleRenderTarget(Y),j.updateRenderTargetMipmap(Y)),q&&w.end(R),M.isScene===!0&&M.onAfterRender(R,M,I),Se.resetDefaultState(),$=-1,Q=null,x.pop(),x.length>0?(k=x[x.length-1],j.setTextureUnits(k.state.textureUnits),Ke===!0&&Pe.setGlobalState(R.clippingPlanes,k.state.camera)):k=null,A.pop(),A.length>0?S=A[A.length-1]:S=null,z!==null&&z.renderEnd()};function Dc(M,I,Z,q){if(M.visible===!1)return;if(M.layers.test(I.layers)){if(M.isGroup)Z=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(I);else if(M.isLightProbeGrid)k.pushLightProbeGrid(M);else if(M.isLight)k.pushLight(M),M.castShadow&&k.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(Be)){q&&It.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ge);const we=ie.update(M),ye=M.material;ye.visible&&S.push(M,we,ye,Z,It.z,null,I)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(Be))){const we=ie.update(M),ye=M.material;if(q&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),It.copy(M.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),It.copy(we.boundingSphere.center)),It.applyMatrix4(M.matrixWorld).applyMatrix4(Ge)),Array.isArray(ye)){const Te=we.groups;for(let Le=0,Xe=Te.length;Le<Xe;Le++){const Qe=Te[Le],Ae=ye[Qe.materialIndex];Ae&&Ae.visible&&S.push(M,we,Ae,Z,It.z,Qe,I)}}else ye.visible&&S.push(M,we,ye,Z,It.z,null,I)}}const xe=M.children;for(let we=0,ye=xe.length;we<ye;we++)Dc(xe[we],I,Z,q)}function eh(M,I,Z,q){const{opaque:W,transmissive:xe,transparent:we}=M;k.setupLightsView(Z),Ke===!0&&Pe.setGlobalState(R.clippingPlanes,Z),q&&_.viewport(ne.copy(q)),W.length>0&&Bo(W,I,Z),xe.length>0&&Bo(xe,I,Z),we.length>0&&Bo(we,I,Z),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function th(M,I,Z,q){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(k.state.transmissionRenderTarget[q.id]===void 0){const Ae=B.has("EXT_color_buffer_half_float")||B.has("EXT_color_buffer_float");k.state.transmissionRenderTarget[q.id]=new Mi(1,1,{generateMipmaps:!0,type:Ae?Gi:Kn,minFilter:Pa,samples:Math.max(4,E.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:tt.workingColorSpace})}const xe=k.state.transmissionRenderTarget[q.id],we=q.viewport||ne;xe.setSize(we.z*R.transmissionResolutionScale,we.w*R.transmissionResolutionScale);const ye=R.getRenderTarget(),Te=R.getActiveCubeFace(),Le=R.getActiveMipmapLevel();R.setRenderTarget(xe),R.getClearColor(Ne),De=R.getClearAlpha(),De<1&&R.setClearColor(16777215,.5),R.clear(),dt&&We.render(Z);const Xe=R.toneMapping;R.toneMapping=Bi;const Qe=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),k.setupLightsView(q),Ke===!0&&Pe.setGlobalState(R.clippingPlanes,q),Bo(M,Z,q),j.updateMultisampleRenderTarget(xe),j.updateRenderTargetMipmap(xe),B.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let ft=0,Ft=I.length;ft<Ft;ft++){const Et=I[ft],{object:vt,geometry:cn,material:Ee,group:vn}=Et;if(Ee.side===bi&&vt.layers.test(q.layers)){const ot=Ee.side;Ee.side=Pn,Ee.needsUpdate=!0,nh(vt,Z,q,cn,Ee,vn),Ee.side=ot,Ee.needsUpdate=!0,Ae=!0}}Ae===!0&&(j.updateMultisampleRenderTarget(xe),j.updateRenderTargetMipmap(xe))}R.setRenderTarget(ye,Te,Le),R.setClearColor(Ne,De),Qe!==void 0&&(q.viewport=Qe),R.toneMapping=Xe}function Bo(M,I,Z){const q=I.isScene===!0?I.overrideMaterial:null;for(let W=0,xe=M.length;W<xe;W++){const we=M[W],{object:ye,geometry:Te,group:Le}=we;let Xe=we.material;Xe.allowOverride===!0&&q!==null&&(Xe=q),ye.layers.test(Z.layers)&&nh(ye,I,Z,Te,Xe,Le)}}function nh(M,I,Z,q,W,xe){z!==null&&W.isNodeMaterial&&z.setObject(M,W),M.onBeforeRender(R,I,Z,q,W,xe),M.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),W.onBeforeRender(R,I,Z,q,M,xe),W.transparent===!0&&W.side===bi&&W.forceSinglePass===!1?(W.side=Pn,W.needsUpdate=!0,R.renderBufferDirect(Z,I,q,W,M,xe),W.side=Sr,W.needsUpdate=!0,R.renderBufferDirect(Z,I,q,W,M,xe),W.side=bi):R.renderBufferDirect(Z,I,q,W,M,xe),M.onAfterRender(R,I,Z,q,W,xe)}function Ho(M,I,Z){I.isScene!==!0&&(I=Vt);const q=G.get(M),W=k.state.lights,xe=k.state.shadowsArray,we=W.state.version,ye=he.getParameters(M,W.state,xe,I,Z,k.state.lightProbeGridArray),Te=he.getProgramCacheKey(ye);let Le=q.programs;q.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?I.environment:null,q.fog=I.fog;const Xe=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;q.envMap=ce.get(M.envMap||q.environment,Xe),q.envMapRotation=q.environment!==null&&M.envMap===null?I.environmentRotation:M.envMapRotation,Le===void 0&&(M.addEventListener("dispose",wi),Le=new Map,q.programs=Le);let Qe=Le.get(Te);if(Qe!==void 0){if(q.currentProgram===Qe&&q.lightsStateVersion===we)return ah(M,ye),Qe}else ye.uniforms=he.getUniforms(M),z!==null&&M.isNodeMaterial&&z.build(M,Z,ye),M.onBeforeCompile(ye,R),Qe=he.acquireProgram(ye,Te),Le.set(Te,Qe),q.uniforms=ye.uniforms;const Ae=q.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ae.clippingPlanes=Pe.uniform),ah(M,ye),q.needsLights=b_(M),q.lightsStateVersion=we,q.needsLights&&(Ae.ambientLightColor.value=W.state.ambient,Ae.lightProbe.value=W.state.probe,Ae.sunLights.value=W.state.sun,Ae.sunLightShadows.value=W.state.sunShadow,Ae.directionalLights.value=W.state.directional,Ae.directionalLightShadows.value=W.state.directionalShadow,Ae.spotLights.value=W.state.spot,Ae.spotLightShadows.value=W.state.spotShadow,Ae.rectAreaLights.value=W.state.rectArea,Ae.ltc_1.value=W.state.rectAreaLTC1,Ae.ltc_2.value=W.state.rectAreaLTC2,Ae.pointLights.value=W.state.point,Ae.pointLightShadows.value=W.state.pointShadow,Ae.hemisphereLights.value=W.state.hemi,Ae.sunShadowMatrix.value=W.state.sunShadowMatrix,Ae.sunShadowCascade.value=W.state.sunShadowCascade,Ae.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ae.spotLightMatrix.value=W.state.spotLightMatrix,Ae.spotLightMap.value=W.state.spotLightMap,Ae.pointShadowMatrix.value=W.state.pointShadowMatrix),q.lightProbeGrid=k.state.lightProbeGridArray.length>0,q.currentProgram=Qe,q.uniformsList=null,Qe}function ih(M){if(M.uniformsList===null){const I=M.currentProgram.getUniforms();M.uniformsList=Ll.seqWithValue(I.seq,M.uniforms)}return M.uniformsList}function ah(M,I){const Z=G.get(M);Z.outputColorSpace=I.outputColorSpace,Z.batching=I.batching,Z.batchingColor=I.batchingColor,Z.instancing=I.instancing,Z.instancingColor=I.instancingColor,Z.instancingMorph=I.instancingMorph,Z.skinning=I.skinning,Z.morphTargets=I.morphTargets,Z.morphNormals=I.morphNormals,Z.morphColors=I.morphColors,Z.morphTargetsCount=I.morphTargetsCount,Z.numClippingPlanes=I.numClippingPlanes,Z.numIntersection=I.numClipIntersection,Z.vertexAlphas=I.vertexAlphas,Z.vertexTangents=I.vertexTangents,Z.toneMapping=I.toneMapping}function __(M,I){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;b.setFromMatrixPosition(I.matrixWorld);for(let Z=0,q=M.length;Z<q;Z++){const W=M[Z];if(W.texture!==null&&W.boundingBox.containsPoint(b))return W}return null}function y_(M,I,Z,q,W){I.isScene!==!0&&(I=Vt),j.resetTextureUnits();const xe=I.fog,we=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?I.environment:null,ye=Y===null?R.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:tt.workingColorSpace,Te=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Le=ce.get(q.envMap||we,Te),Xe=q.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Qe=!!Z.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ae=!!Z.morphAttributes.position,ft=!!Z.morphAttributes.normal,Ft=!!Z.morphAttributes.color;let Et=Bi;q.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Et=R.toneMapping);const vt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,cn=vt!==void 0?vt.length:0,Ee=G.get(q),vn=k.state.lights;if(Ke===!0&&(rt===!0||M!==Q)){const bt=M===Q&&q.id===$;Pe.setState(q,M,bt)}let ot=!1;q.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==vn.state.version||Ee.outputColorSpace!==ye||W.isBatchedMesh&&Ee.batching===!1||!W.isBatchedMesh&&Ee.batching===!0||W.isBatchedMesh&&Ee.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Ee.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Ee.instancing===!1||!W.isInstancedMesh&&Ee.instancing===!0||W.isSkinnedMesh&&Ee.skinning===!1||!W.isSkinnedMesh&&Ee.skinning===!0||W.isInstancedMesh&&Ee.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ee.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ee.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ee.instancingMorph===!1&&W.morphTexture!==null||Ee.envMap!==Le||q.fog===!0&&Ee.fog!==xe||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==Pe.numPlanes||Ee.numIntersection!==Pe.numIntersection)||Ee.vertexAlphas!==Xe||Ee.vertexTangents!==Qe||Ee.morphTargets!==Ae||Ee.morphNormals!==ft||Ee.morphColors!==Ft||Ee.toneMapping!==Et||Ee.morphTargetsCount!==cn||!!Ee.lightProbeGrid!=k.state.lightProbeGridArray.length>0)&&(ot=!0):(ot=!0,Ee.__version=q.version);let ni=Ee.currentProgram;ot===!0&&(ni=Ho(q,I,W),z&&q.isNodeMaterial&&z.onUpdateProgram(q,ni,Ee));let Ti=!1,pa=!1,Rr=!1;const mt=ni.getUniforms(),Nt=Ee.uniforms;if(_.useProgram(ni.program)&&(Ti=!0,pa=!0,Rr=!0),q.id!==$&&($=q.id,pa=!0),Ee.needsLights){const bt=__(k.state.lightProbeGridArray,W);Ee.lightProbeGrid!==bt&&(Ee.lightProbeGrid=bt,pa=!0)}if(Ti||Q!==M){_.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),mt.setValue(N,"projectionMatrix",M.projectionMatrix),mt.setValue(N,"viewMatrix",M.matrixWorldInverse);const ga=mt.map.cameraPosition;ga!==void 0&&ga.setValue(N,ht.setFromMatrixPosition(M.matrixWorld)),E.logarithmicDepthBuffer&&mt.setValue(N,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&mt.setValue(N,"isOrthographic",M.isOrthographicCamera===!0),Q!==M&&(Q=M,pa=!0,Rr=!0)}if(Ee.needsLights&&(vn.state.sunShadowMap.length>0&&mt.setValue(N,"sunShadowMap",vn.state.sunShadowMap,j),vn.state.directionalShadowMap.length>0&&mt.setValue(N,"directionalShadowMap",vn.state.directionalShadowMap,j),vn.state.spotShadowMap.length>0&&mt.setValue(N,"spotShadowMap",vn.state.spotShadowMap,j),vn.state.pointShadowMap.length>0&&mt.setValue(N,"pointShadowMap",vn.state.pointShadowMap,j)),W.isSkinnedMesh){mt.setOptional(N,W,"bindMatrix"),mt.setOptional(N,W,"bindMatrixInverse");const bt=W.skeleton;bt&&(bt.boneTexture===null&&bt.computeBoneTexture(),mt.setValue(N,"boneTexture",bt.boneTexture,j))}W.isBatchedMesh&&(mt.setOptional(N,W,"batchingTexture"),mt.setValue(N,"batchingTexture",W._matricesTexture,j),mt.setOptional(N,W,"batchingIdTexture"),mt.setValue(N,"batchingIdTexture",W._indirectTexture,j),mt.setOptional(N,W,"batchingColorTexture"),W._colorsTexture!==null&&mt.setValue(N,"batchingColorTexture",W._colorsTexture,j));const ma=Z.morphAttributes;if((ma.position!==void 0||ma.normal!==void 0||ma.color!==void 0)&&U.update(W,Z,ni),(pa||Ee.receiveShadow!==W.receiveShadow)&&(Ee.receiveShadow=W.receiveShadow,mt.setValue(N,"receiveShadow",W.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&I.environment!==null&&(Nt.envMapIntensity.value=I.environmentIntensity),Nt.dfgLUT!==void 0&&(Nt.dfgLUT.value=kM()),pa){if(mt.setValue(N,"toneMappingExposure",R.toneMappingExposure),Ee.needsLights&&x_(Nt,Rr),xe&&q.fog===!0&&Ce.refreshFogUniforms(Nt,xe),Ce.refreshMaterialUniforms(Nt,q,ae,J,k.state.transmissionRenderTarget[M.id]),Ee.needsLights&&Ee.lightProbeGrid){const bt=Ee.lightProbeGrid;Nt.probesSH.value=bt.texture,Nt.probesMin.value.copy(bt.boundingBox.min),Nt.probesMax.value.copy(bt.boundingBox.max),Nt.probesResolution.value.copy(bt.resolution)}Ll.upload(N,ih(Ee),Nt,j)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Ll.upload(N,ih(Ee),Nt,j),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&mt.setValue(N,"center",W.center),mt.setValue(N,"modelViewMatrix",W.modelViewMatrix),mt.setValue(N,"normalMatrix",W.normalMatrix),mt.setValue(N,"modelMatrix",W.matrixWorld),q.uniformsGroups!==void 0){const bt=q.uniformsGroups;for(let ga=0,Lr=bt.length;ga<Lr;ga++){const sh=bt[ga];oe.update(sh,ni),oe.bind(sh,ni)}}return ni}function x_(M,I){M.ambientLightColor.needsUpdate=I,M.lightProbe.needsUpdate=I,M.sunLights.needsUpdate=I,M.sunLightShadows.needsUpdate=I,M.directionalLights.needsUpdate=I,M.directionalLightShadows.needsUpdate=I,M.pointLights.needsUpdate=I,M.pointLightShadows.needsUpdate=I,M.spotLights.needsUpdate=I,M.spotLightShadows.needsUpdate=I,M.rectAreaLights.needsUpdate=I,M.hemisphereLights.needsUpdate=I}function b_(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(M,I,Z){const q=G.get(M);q.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),G.get(M.texture).__webglTexture=I,G.get(M.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:Z,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,I){const Z=G.get(M);Z.__webglFramebuffer=I,Z.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(M,I=0,Z=0){Y=M,D=I,P=Z;let q=null,W=!1,xe=!1;if(M){const ye=G.get(M);if(ye.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(N.FRAMEBUFFER,ye.__webglFramebuffer),ne.copy(M.viewport),ue.copy(M.scissor),ke=M.scissorTest,_.viewport(ne),_.scissor(ue),_.setScissorTest(ke),$=-1;return}else if(ye.__webglFramebuffer===void 0)j.setupRenderTarget(M);else if(ye.__hasExternalTextures)j.rebindTextures(M,G.get(M.texture).__webglTexture,G.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Xe=M.depthTexture;if(ye.__boundDepthTexture!==Xe){if(Xe!==null&&G.has(Xe)&&(M.width!==Xe.image.width||M.height!==Xe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(M)}}const Te=M.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(xe=!0);const Le=G.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Le[I])?q=Le[I][Z]:q=Le[I],W=!0):M.samples>0&&j.useMultisampledRTT(M)===!1?q=G.get(M).__webglMultisampledFramebuffer:Array.isArray(Le)?q=Le[Z]:q=Le,ne.copy(M.viewport),ue.copy(M.scissor),ke=M.scissorTest}else ne.copy(be).multiplyScalar(ae).floor(),ue.copy(Fe).multiplyScalar(ae).floor(),ke=gt;if(Z!==0&&(q=F),_.bindFramebuffer(N.FRAMEBUFFER,q)&&_.drawBuffers(M,q),_.viewport(ne),_.scissor(ue),_.setScissorTest(ke),W){const ye=G.get(M.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+I,ye.__webglTexture,Z)}else if(xe){const ye=I;for(let Te=0;Te<M.textures.length;Te++){const Le=G.get(M.textures[Te]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Te,Le.__webglTexture,Z,ye)}}else if(M!==null&&Z!==0){const ye=G.get(M.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ye.__webglTexture,Z)}$=-1};function rh(M){const I=G.get(M);return(I.__readFormat!==M.format||I.__readType!==M.type)&&(I.__readFormat=M.format,I.__readType=M.type,I.__formatReadable=E.textureFormatReadable(M.format),I.__typeReadable=E.textureTypeReadable(M.type)),I}this.readRenderTargetPixels=function(M,I,Z,q,W,xe,we,ye=0){if(!(M&&M.isWebGLRenderTarget)){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=G.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&we!==void 0&&(Te=Te[we]),Te){_.bindFramebuffer(N.FRAMEBUFFER,Te);try{const Le=M.textures[ye],Xe=Le.format,Qe=Le.type;M.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ye);const Ae=rh(Le);if(Ae.__formatReadable===!1){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ae.__typeReadable===!1){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=M.width-q&&Z>=0&&Z<=M.height-W&&N.readPixels(I,Z,q,W,ge.convert(Xe),ge.convert(Qe),xe)}finally{const Le=Y!==null?G.get(Y).__webglFramebuffer:null;_.bindFramebuffer(N.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(M,I,Z,q,W,xe,we,ye=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=G.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&we!==void 0&&(Te=Te[we]),Te)if(I>=0&&I<=M.width-q&&Z>=0&&Z<=M.height-W){_.bindFramebuffer(N.FRAMEBUFFER,Te);const Le=M.textures[ye],Xe=Le.format,Qe=Le.type;M.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ye);const Ae=rh(Le);if(Ae.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ae.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ft=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,ft),N.bufferData(N.PIXEL_PACK_BUFFER,xe.byteLength,N.STREAM_READ),N.readPixels(I,Z,q,W,ge.convert(Xe),ge.convert(Qe),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);const Ft=Y!==null?G.get(Y).__webglFramebuffer:null;_.bindFramebuffer(N.FRAMEBUFFER,Ft);const Et=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Dy(N,Et,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,ft),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,xe),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(ft),N.deleteSync(Et),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,I=null,Z=0){const q=Math.pow(2,-Z),W=Math.floor(M.image.width*q),xe=Math.floor(M.image.height*q),we=I!==null?I.x:0,ye=I!==null?I.y:0;j.setTexture2D(M,0),N.copyTexSubImage2D(N.TEXTURE_2D,Z,0,0,we,ye,W,xe),_.unbindTexture()},this.copyTextureToTexture=function(M,I,Z=null,q=null,W=0,xe=0){let we,ye,Te,Le,Xe,Qe,Ae,ft,Ft;const Et=M.isCompressedTexture?M.mipmaps[xe]:M.image;if(Z!==null)we=Z.max.x-Z.min.x,ye=Z.max.y-Z.min.y,Te=Z.isBox3?Z.max.z-Z.min.z:1,Le=Z.min.x,Xe=Z.min.y,Qe=Z.isBox3?Z.min.z:0;else{const Nt=Math.pow(2,-W);we=Math.floor(Et.width*Nt),ye=Math.floor(Et.height*Nt),M.isDataArrayTexture?Te=Et.depth:M.isData3DTexture?Te=Math.floor(Et.depth*Nt):Te=1,Le=0,Xe=0,Qe=0}q!==null?(Ae=q.x,ft=q.y,Ft=q.z):(Ae=0,ft=0,Ft=0);const vt=ge.convert(I.format),cn=ge.convert(I.type);let Ee;I.isData3DTexture?(j.setTexture3D(I,0),Ee=N.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(j.setTexture2DArray(I,0),Ee=N.TEXTURE_2D_ARRAY):(j.setTexture2D(I,0),Ee=N.TEXTURE_2D),_.activeTexture(N.TEXTURE0),_.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,I.flipY),_.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),_.pixelStorei(N.UNPACK_ALIGNMENT,I.unpackAlignment);const vn=_.getParameter(N.UNPACK_ROW_LENGTH),ot=_.getParameter(N.UNPACK_IMAGE_HEIGHT),ni=_.getParameter(N.UNPACK_SKIP_PIXELS),Ti=_.getParameter(N.UNPACK_SKIP_ROWS),pa=_.getParameter(N.UNPACK_SKIP_IMAGES);_.pixelStorei(N.UNPACK_ROW_LENGTH,Et.width),_.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Et.height),_.pixelStorei(N.UNPACK_SKIP_PIXELS,Le),_.pixelStorei(N.UNPACK_SKIP_ROWS,Xe),_.pixelStorei(N.UNPACK_SKIP_IMAGES,Qe);const Rr=M.isDataArrayTexture||M.isData3DTexture,mt=I.isDataArrayTexture||I.isData3DTexture;if(M.isDepthTexture){const Nt=G.get(M),ma=G.get(I),bt=G.get(Nt.__renderTarget),ga=G.get(ma.__renderTarget);_.bindFramebuffer(N.READ_FRAMEBUFFER,bt.__webglFramebuffer),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,ga.__webglFramebuffer);for(let Lr=0;Lr<Te;Lr++)Rr&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,G.get(M).__webglTexture,W,Qe+Lr),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,G.get(I).__webglTexture,xe,Ft+Lr)),N.blitFramebuffer(Le,Xe,we,ye,Ae,ft,we,ye,N.DEPTH_BUFFER_BIT,N.NEAREST);_.bindFramebuffer(N.READ_FRAMEBUFFER,null),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(W!==0||M.isRenderTargetTexture||G.has(M)){const Nt=G.get(M),ma=G.get(I);_.bindFramebuffer(N.READ_FRAMEBUFFER,C),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,H);for(let bt=0;bt<Te;bt++)Rr?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Nt.__webglTexture,W,Qe+bt):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Nt.__webglTexture,W),mt?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ma.__webglTexture,xe,Ft+bt):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ma.__webglTexture,xe),W!==0?N.blitFramebuffer(Le,Xe,we,ye,Ae,ft,we,ye,N.COLOR_BUFFER_BIT,N.NEAREST):mt?N.copyTexSubImage3D(Ee,xe,Ae,ft,Ft+bt,Le,Xe,we,ye):N.copyTexSubImage2D(Ee,xe,Ae,ft,Le,Xe,we,ye);_.bindFramebuffer(N.READ_FRAMEBUFFER,null),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else mt?M.isDataTexture||M.isData3DTexture?N.texSubImage3D(Ee,xe,Ae,ft,Ft,we,ye,Te,vt,cn,Et.data):I.isCompressedArrayTexture?N.compressedTexSubImage3D(Ee,xe,Ae,ft,Ft,we,ye,Te,vt,Et.data):N.texSubImage3D(Ee,xe,Ae,ft,Ft,we,ye,Te,vt,cn,Et):M.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,xe,Ae,ft,we,ye,vt,cn,Et.data):M.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,xe,Ae,ft,Et.width,Et.height,vt,Et.data):N.texSubImage2D(N.TEXTURE_2D,xe,Ae,ft,we,ye,vt,cn,Et);_.pixelStorei(N.UNPACK_ROW_LENGTH,vn),_.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ot),_.pixelStorei(N.UNPACK_SKIP_PIXELS,ni),_.pixelStorei(N.UNPACK_SKIP_ROWS,Ti),_.pixelStorei(N.UNPACK_SKIP_IMAGES,pa),xe===0&&I.generateMipmaps&&N.generateMipmap(Ee),_.unbindTexture()},this.initRenderTarget=function(M){G.get(M).__webglFramebuffer===void 0&&j.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?j.setTextureCube(M,0):M.isData3DTexture?j.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?j.setTexture2DArray(M,0):j.setTexture2D(M,0),_.unbindTexture()},this.resetState=function(){D=0,P=0,Y=null,_.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}}const EM=["head","body","torso","leftArm","rightArm","leftLeg","rightLeg"],qu=["pitch","yaw","roll","bend","x","y","z"];function Cl(i){return typeof i=="number"&&Number.isFinite(i)?i:null}function uv(i){if(typeof i=="string")return i.trim();if(i&&typeof i=="object"){const e=i.translate;if(typeof e=="string")return e.trim()}return""}function wM(i){const e=i.emote||{},t=Number(e.returnTick)>0?Number(e.returnTick):60,n=Number(e.endTick)>0?Number(e.endTick):t,a={adi:uv(i.name)||"İsimsiz",yazar:String(i.author||""),aciklama:String(i.description||""),baslangicTick:Number(e.beginTick)>0?Number(e.beginTick):0,bitisTick:n,stopTick:Number(e.stopTick)>0?Number(e.stopTick):n,donusTick:t,dongu:e.isLoop===!0||e.isLoop==="true",kemikler:new Map};e.palUzay===!0&&(a.palUzay=!0),e.palDef===!0&&(a.palDef=!0);const r=Cl(e.loopBas);r!==null&&r>=0&&(a.loopBas=r);const s=Array.isArray(e.moves)?e.moves:[];let o={};for(const c of s){if(typeof c?.tick!="number")continue;const l=c.tick;for(const d of EM){const f=c[d];if(!f||typeof f!="object")continue;let u=a.kemikler.get(d);u||(u={},a.kemikler.set(d,u));for(const g of qu){const m=Cl(f[g]);m!==null&&(u[g]||(u[g]=[]),u[g].push({t:l,v:m,easing:String(c.easing||"LINEAR").toUpperCase()}))}const h=Cl(f.turn);h!==null&&h!==0&&(o[d]=(o[d]||0)+h*360,u.turn||(u.turn=[]),u.turn.push({t:l,v:o[d],easing:"LINEAR"}))}}return a.palUzay===!0&&a.palDef!==!0&&RM(a),a}const TM={leftArm:[5,-2,0],rightArm:[-5,-2,0],leftLeg:[1.9,-12,.1],rightLeg:[-1.9,-12,.1]};function AM(i){if(i.length===0)return 0;const e=[...i].sort((n,a)=>n-a),t=Math.floor(e.length/2);return e.length%2?e[t]:(e[t-1]+e[t])/2}function RM(i){for(const[e,t]of Object.entries(TM)){const n=i.kemikler.get(e);if(!n)continue;let a=0,r=0;for(const s of["x","y"]){const o=n[s];if(!o||o.length===0)continue;a++;const c=t[s==="x"?0:1];Math.abs(AM(o.map(l=>l.v))-c)<=2&&r++}a===0||r!==a||["x","y","z"].forEach((s,o)=>{const c=n[s];if(c)for(const l of c)l.v-=t[o]})}i.palDef=!0}function LM(i){const e=i.animations||{},t=Object.values(e)[0];if(!t||typeof t!="object")throw new Error("PAL animasyonu boş");const n=Number(t.animation_length)>0?Number(t.animation_length)*20:60,a={adi:uv(t.player_animation_library?.name??i.name)||"İsimsiz",yazar:String(t.player_animation_library?.author||i.author||""),aciklama:String(t.player_animation_library?.description||i.description||""),baslangicTick:0,bitisTick:n,stopTick:n,donusTick:n,dongu:!0,kemikler:new Map,palDelta:!0},r=t.bones||{};for(const s of Object.keys(r)){const o=r[s];if(!o||typeof o!="object")continue;const c={},l=(d,f,u)=>{if(!d)return;const h=[],g=(m,p)=>{const v=Cl(p);v!==null&&h.push({t:m,v,easing:"LINEAR"})};if(Array.isArray(d))for(const m of d){const p=typeof m?.time=="number"?m.time*20:0;g(p,Array.isArray(m?.vector)?m.vector[f]:void 0)}else Array.isArray(d.vector)?g(0,d.vector[f]):typeof d=="number"&&g(0,d);h.length&&(c[u]=h)};l(o.rotation,0,"pitch"),l(o.rotation,1,"yaw"),l(o.rotation,2,"roll"),l(o.position,0,"x"),l(o.position,1,"y"),l(o.position,2,"z"),Object.keys(c).length&&a.kemikler.set(s,c)}return a}function CM(i){const e=JSON.parse(i);if(e?.emote&&typeof e.emote=="object")return wM(e);if(e?.animations)return LM(e);throw new Error("bilinmeyen emote formatı")}function PM(i){switch(i){case"EASEINSINE":case"INSINE":case"EASEIN":return e=>1-Math.cos(e*Math.PI/2);case"EASEOUTSINE":case"OUTSINE":return e=>Math.sin(e*Math.PI/2);case"EASEINOUTSINE":case"INOUTSINE":case"SINE":return e=>-(Math.cos(Math.PI*e)-1)/2;case"EASEINOUTQUAD":case"INOUTQUAD":return e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2;case"EASEINOUTCUBIC":return e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2;case"STEP":return e=>e>=1?1:0;default:return e=>e}}function Pp(i,e){if(!i||!i.length)return null;if(i.length===1)return i[0].v;let t=0;for(;t<i.length&&i[t].t<=e;)t++;if(t<=0)return i[0].v;if(t>=i.length)return i[i.length-1].v;const n=i[t-1],a=i[t],r=a.t-n.t,s=r<=0?1:(e-n.t)/r;return n.v+(a.v-n.v)*PM(a.easing)(s)}function fv(){return[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]]}const Dp={head:[0,0,0],body:[0,0,0],armL:[0,0,0],armR:[0,0,0],legL:[0,0,0],legR:[0,0,0],bend:[0,0,0,0,0],konum:fv(),kokDon:[0,0,0],kokKonum:[0,0,0]},hv={head:0,body:1,torso:1,leftArm:2,rightArm:3,leftLeg:4,rightLeg:5},DM=hv,IM={leftArm:0,rightArm:1,leftLeg:2,rightLeg:3,torso:4,body:4};function Ip(i,e){let t=e;if(i.dongu&&i.loopBas!==void 0&&i.bitisTick>i.loopBas){if(e>i.bitisTick){const h=i.bitisTick-i.loopBas;t=i.loopBas+(e-i.loopBas)%h}}else i.dongu&&i.donusTick>0&&(t=(e-i.baslangicTick)%i.donusTick+i.baslangicTick);const n=Math.max(t,i.baslangicTick),a=i.palUzay===!0,r={head:[0,0,0],body:[0,0,0],armL:[0,0,0],armR:[0,0,0],legL:[0,0,0],legR:[0,0,0],bend:[0,0,0,0,0],bendTasi:a,konum:fv(),kokDon:[0,0,0],kokKonum:[0,0,0]},s=["head","body","armL","armR","legL","legR"],o=()=>[void 0,void 0,void 0],c=Array.from({length:6},o),l=o(),d=(h,g,m)=>{h[g==="x"?0:g==="y"?1:2]=m};for(const[h,g]of i.kemikler){if(a&&h==="body"){for(const v of qu){const y=Pp(g[v],n);y!==null&&(v==="pitch"?r.kokDon[0]=y:v==="yaw"?r.kokDon[1]=y:v==="roll"?r.kokDon[2]=-y:v==="bend"?r.bend[4]=y:(v==="x"||v==="y"||v==="z")&&d(l,v,y))}continue}const m=hv[h],p=m!==void 0?r[s[m]]:null;for(const v of qu){const y=Pp(g[v],n);if(y!==null){if(p){if(v==="pitch")p[0]=y;else if(v==="yaw")p[1]=y;else if(v==="roll")p[2]=a?-y:y;else if(v==="x"||v==="y"||v==="z"){const T=DM[h];T!==void 0&&d(c[T],v,y)}}if(v==="bend"){const T=IM[h];T!==void 0&&(r.bend[T]+=y)}}}}const f=[[0,24,0],[0,24,0],[5,22,0],[-5,22,0],[1.9,12,0],[-1.9,12,0]];if(a){for(let h=0;h<6;h++){const g=c[h];r.konum[h]=[g[0]??0,g[1]??0,-(g[2]??0)]}return r.kokKonum=[l[0]??0,l[1]??0,-(l[2]??0)],r}const u=[1,0,1,1,0,0];for(let h=0;h<6;h++){const g=c[h],m=r.konum[h];for(let p=0;p<3;p++){if(g[p]===void 0){m[p]=0;continue}let v=g[p];p===1&&u[h]&&(v+=24),m[p]=v-f[h][p]}}return r}const Me=1/24,Oi=64,Fi=32,zM=.2617994,zp=.2617994,UM=9;function Vn(i,e,t,n,a,r,s=!1){const o=i.attributes.uv,c=e*4,l=s?r:n,d=s?n:r;o.setXY(c+0,t/64,1-l/64),o.setXY(c+1,a/64,1-l/64),o.setXY(c+2,t/64,1-d/64),o.setXY(c+3,a/64,1-d/64)}function ko(i){i.magFilter=Kt,i.minFilter=Kt,i.colorSpace=Gn}function pv(i,e=!1){return i?new Yl({map:i,transparent:e,alphaTest:e?.01:0}):new Yl({color:5924466})}function Up(i,e,t=!1){const n=new da(i.w*Me,i.h*Me,i.d*Me),{u:a,v:r,w:s,h:o,d:c}=i;return e&&(Vn(n,0,a+c+s,r+c,a+c+s+c,r+c+o),Vn(n,1,a,r+c,a+c,r+c+o),Vn(n,2,a+c,r,a+c+s,r+c),Vn(n,3,a+c+s,r,a+c+s+s,r+c,!0),Vn(n,4,a+c,r+c,a+c+s,r+c+o),Vn(n,5,a+c+s+c,r+c,a+c+s+c+s,r+c+o),ko(e)),new ti(n,pv(e,t))}function Np(i,e,t,n,a,r){const s=i.attributes.uv,o=(c,l,d,f,u,h=!1)=>{const g=c*4,m=h?u:d,p=h?d:u;s.setXY(g+0,l/Oi,1-m/Fi),s.setXY(g+1,f/Oi,1-m/Fi),s.setXY(g+2,l/Oi,1-p/Fi),s.setXY(g+3,f/Oi,1-p/Fi)};o(0,e+r+n,t+r,e+r+n+r,t+r+a),o(1,e,t+r,e+r,t+r+a),o(2,e+r,t,e+r+n,t+r),o(3,e+r+n,t,e+r+n+n,t+r,!0),o(4,e+r,t+r,e+r+n,t+r+a),o(5,e+r+n+r,t+r,e+r+n+r+n,t+r+a),s.needsUpdate=!0}function Op(i){const e=Math.max(Oi,Math.round(i.width)),t=Math.max(Fi,Math.round(i.height)),n=document.createElement("canvas");n.width=e,n.height=t;const a=n.getContext("2d");return a&&(a.imageSmoothingEnabled=e!==Oi||t!==Fi,a.imageSmoothingQuality="high",a.drawImage(i,0,0,e,t)),n}function hl(i,e=!1){const t=new Zg(i);return ko(t),e&&(t.magFilter=nn,t.minFilter=Pa,t.generateMipmaps=!0),t.needsUpdate=!0,t}function Md(i,e,t,n){const a=e*Me/2,r=t*Me/2,s=n*Me/2,o=.0015,c=new Xg({color:16777215,transparent:!0,opacity:.42,depthWrite:!1}),l=d=>{const f=new Ei;f.setAttribute("position",new fi(d,3));const u=new lx(f,c);u.renderOrder=4,i.add(u)};for(const d of[-s-o,s+o]){const f=[];for(let u=0;u<=e;u++){const h=-a+u*Me;f.push(h,-r,d,h,r,d)}for(let u=0;u<=t;u++){const h=-r+u*Me;f.push(-a,h,d,a,h,d)}l(f)}for(const d of[-a-o,a+o]){const f=[];for(let u=0;u<=n;u++){const h=-s+u*Me;f.push(d,-r,h,d,r,h)}for(let u=0;u<=t;u++){const h=-r+u*Me;f.push(d,h,-s,d,h,s)}l(f)}for(const d of[-r-o,r+o]){const f=[];for(let u=0;u<=e;u++){const h=-a+u*Me;f.push(h,d,-s,h,d,s)}for(let u=0;u<=n;u++){const h=-s+u*Me;f.push(-a,d,h,a,d,h)}l(f)}}function Sa(i,e,t,n=!1){const a=i.h/2,{u:r,v:s,w:o,d:c}=i,l=new da(i.w*Me,a*Me,i.d*Me);if(t){const d=s+c+(e?a:0),f=d+a;Vn(l,0,r+c+o,d,r+c+o+c,f),Vn(l,1,r,d,r+c,f),Vn(l,2,r+c,s,r+c+o,s+c),e?Vn(l,3,r+c+o,s,r+c+o+o,s+c,!0):Vn(l,3,r+c,s,r+c+o,s+c),Vn(l,4,r+c,d,r+c+o,f),Vn(l,5,r+c+o+c,d,r+c+o+c+o,f),ko(t)}return new ti(l,pv(t,n))}class NM{renderer=null;scene=new Jy;camera=new oi(38,1,.1,100);kok=null;kalca=null;kemikler=null;bukulenler=null;saat=new wx;rafId=0;canvas=null;boyutla=null;zaman=0;kameraAci=0;kameraAciHedef=0;kameraYariCap=2.75;kameraYariCapHedef=2.75;kameraY=.34;surukleX=null;isaretciBas=null;isaretciTasi=null;isaretciBirak=null;tekerlek=null;fareEngel=null;baglamEngel=null;durum="idle";sonOynananAd="";durumBitis=0;emoteListe=[];hiz=1;aktif=null;tEmote=0;pelerinGrup=null;pelerinSarkac=null;pelerinDoku=null;pelerinJeton=0;kanatJeton=0;_bekleyenPelerin=null;canliDoku=null;sonCizimAt=0;canliMod=!1;_pelerinTuval=null;kanatGrup=null;kanatDoku=null;kanatAyrikAcik=!1;_bekleyenKanat=null;tabanMeshler=[];ustMeshler=[];oyuncuMeshler=[];oyuncuGorunur=!0;etkilesimKapali=!1;kameraEgim=0;kameraEgimHedef=0;surukleY=null;kaplamaGorunur=!0;kozmetikGorunur=!0;izgaraAcik=!1;modelIzgaraAcik=!1;sahneTemizle(){this.kok&&((this.kok.parent??this.scene).remove(this.kok),this.kok.traverse(e=>{const t=e;t.geometry&&t.geometry.dispose()})),this.scene.clear(),this.kok=null,this.pelerinGrup=null,this.pelerinSarkac=null,this.kanatGrup=null,this.tabanMeshler=[],this.ustMeshler=[],this.oyuncuMeshler=[],this.aktif=null}kur(e){this.renderer&&this.kapati(),this.sahneTemizle(),this.izgaraAcik=!1,this.modelIzgaraAcik=!1,this.canvas=e;try{this.renderer=new MM({canvas:e,alpha:!0,antialias:!0,preserveDrawingBuffer:!0})}catch{return}this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.scene.add(new Sx(16777215,.9));const t=new sp(16777215,1.7);t.position.set(2,4,5),this.scene.add(t);const n=new sp(16755533,.55);if(n.position.set(-3,2,-4),this.scene.add(n),this.camera.position.set(0,.34,2.75),this.camera.lookAt(0,.02,0),this.kameraYariCap=2.75,this.kameraYariCapHedef=2.75,this.yorungeKur(e),this.boyutla=()=>{if(!this.renderer)return;const a=e.clientWidth||e.parentElement?.clientWidth||320,r=e.clientHeight||300;this.renderer.setSize(a,r,!1),this.camera.aspect=a/Math.max(1,r),this.camera.updateProjectionMatrix()},this.boyutla(),window.addEventListener("resize",this.boyutla),this.baslatDongu(),this._bekleyenSkin){const a=this._bekleyenSkin;this._bekleyenSkin=null,this.skin(a)}}yorungeKur(e){this.yorungeKapat(),e.style.cursor="grab",e.style.touchAction="pan-y",this.isaretciBas=t=>{if(t.pointerType==="mouse"){const n=t.button===0;if(n&&this.etkilesimKapali||!n&&t.button!==1&&t.button!==2)return}this.surukleX=t.clientX,this.surukleY=t.clientY,e.style.cursor="grabbing";try{e.setPointerCapture(t.pointerId)}catch{}},this.isaretciTasi=t=>{if(this.surukleX===null)return;const n=t.clientX-this.surukleX,a=t.clientY-(this.surukleY??t.clientY);this.surukleX=t.clientX,this.surukleY=t.clientY,this.kameraAciHedef-=n*.008,this.kameraEgimHedef=Math.max(-.55,Math.min(.95,this.kameraEgimHedef+a*.006))},this.isaretciBirak=t=>{if(this.surukleX!==null){this.surukleX=null,this.surukleY=null,e.style.cursor="grab";try{e.releasePointerCapture(t.pointerId)}catch{}}},e.addEventListener("pointerdown",this.isaretciBas),e.addEventListener("pointermove",this.isaretciTasi),e.addEventListener("pointerup",this.isaretciBirak),e.addEventListener("pointercancel",this.isaretciBirak),this.fareEngel=t=>{t.button===1&&t.preventDefault()},this.baglamEngel=t=>t.preventDefault(),e.addEventListener("mousedown",this.fareEngel),e.addEventListener("auxclick",this.fareEngel),e.addEventListener("contextmenu",this.baglamEngel),this.fareEngel=t=>{t.button===1&&t.preventDefault()},this.tekerlek=t=>{t.preventDefault(),this.zoomAyarla(this.kameraYariCapHedef*(t.deltaY>0?1.12:.89))},e.addEventListener("wheel",this.tekerlek,{passive:!1})}yorungeKapat(){const e=this.canvas;e&&(this.isaretciBas&&e.removeEventListener("pointerdown",this.isaretciBas),this.isaretciTasi&&e.removeEventListener("pointermove",this.isaretciTasi),this.isaretciBirak&&(e.removeEventListener("pointerup",this.isaretciBirak),e.removeEventListener("pointercancel",this.isaretciBirak))),this.isaretciBas=null,this.isaretciTasi=null,this.isaretciBirak=null,this.surukleX=null,e&&this.tekerlek&&e.removeEventListener("wheel",this.tekerlek),this.tekerlek=null,e&&this.fareEngel&&(e.removeEventListener("mousedown",this.fareEngel),e.removeEventListener("auxclick",this.fareEngel)),this.fareEngel=null,e&&this.baglamEngel&&e.removeEventListener("contextmenu",this.baglamEngel),this.baglamEngel=null}boyutGuncelle(){this.boyutla?.()}zoomAyarla(e){this.kameraYariCapHedef=Math.max(1.05,Math.min(5.5,e))}zoomAl(){return this.kameraYariCapHedef}kameraGuncelle(e){const t=Math.min(1,e*14);this.kameraAci+=(this.kameraAciHedef-this.kameraAci)*t,this.kameraEgim+=(this.kameraEgimHedef-this.kameraEgim)*t,this.kameraYariCap+=(this.kameraYariCapHedef-this.kameraYariCap)*Math.min(1,e*10);const n=this.kameraYariCap,a=Math.cos(this.kameraEgim)*n;this.camera.position.set(Math.sin(this.kameraAci)*a,this.kameraY+Math.sin(this.kameraEgim)*n,Math.cos(this.kameraAci)*a),this.camera.lookAt(0,.02,0)}bakisaAyarla(e,t=0){this.kameraAciHedef=e,this.kameraEgimHedef=Math.max(-.55,Math.min(.95,t))}parcaGoster(e,t){const n=this.kemikler;n&&(e==="kafa"?n.head.visible=t:e==="govde"?n.body.visible=t:e==="kollar"?(n.armL.visible=t,n.armR.visible=t):(n.legL.visible=t,n.legR.visible=t))}kaplamaGoster(e){this.kaplamaGorunur=e;for(const t of this.ustMeshler)t.visible=e&&this.oyuncuGorunur}kozmetikGoster(e){this.kozmetikGorunur=e,this.pelerinGrup&&(this.pelerinGrup.visible=e),this.kanatGrup&&(this.kanatGrup.visible=e)}_bekleyenSkin=null;async dokuResmi(e){try{const t=await fetch(e);if(t.ok){const n=await t.blob();return await new Promise((a,r)=>{const s=URL.createObjectURL(n),o=new Image;o.onload=()=>{URL.revokeObjectURL(s),a(o)},o.onerror=()=>{URL.revokeObjectURL(s),r(new Error("görsel açılamadı"))},o.src=s})}}catch{}return await new yx().loadAsync(e)}async skin(e){this.canliMod=!1;let t=null;if(e?.url)try{const n=await this.dokuResmi(e.url),a=document.createElement("canvas");a.width=64,a.height=64;const r=a.getContext("2d");r&&(r.imageSmoothingEnabled=!1,n.height===32?r.drawImage(n,0,0):r.drawImage(n,0,0,64,64),t=new rn(a),ko(t),t.needsUpdate=!0)}catch{t=null}this.canliMod||(this._bekleyenSkin=e,this.modelKur(t,e?.slim||!1))}async pelerin(e){if(this._bekleyenPelerin=e,this.pelerinTemizle(),this._pelerinTuval=null,!e?.url)return;const t=++this.pelerinJeton;try{const n=await this.dokuResmi(e.url);if(t!==this.pelerinJeton)return;const a=Op(n);this.pelerinDoku=hl(a,a.width>Oi||a.height>Fi),this.pelerinMeshKur()}catch{}}pelerinTuval(e){if(this._bekleyenPelerin=null,this._pelerinTuval=e,!e){this.pelerinTemizle();return}if(this.pelerinDoku&&this.pelerinDoku.image===e){this.pelerinDoku.needsUpdate=!0;return}this.pelerinTemizle(),this.pelerinDoku=hl(e),this.pelerinMeshKur()}async kanat(e){if(this._bekleyenKanat=null,this.kanatTemizle(),!e?.url)return;const t=++this.kanatJeton;try{const n=await this.dokuResmi(e.url);if(t!==this.kanatJeton)return;const a=Op(n);this.kanatDoku=hl(a,a.width>Oi||a.height>Fi),this.kanatMeshKur()}catch{}}kanatTuval(e){if(this._bekleyenKanat=e,!e){this.kanatTemizle();return}if(this.kanatDoku&&this.kanatDoku.image===e){this.kanatDoku.needsUpdate=!0;return}this.kanatTemizle(),this.kanatDoku=hl(e),this.kanatMeshKur()}kanatMeshSil(){this.kanatGrup?.parent&&this.kanatGrup.parent.remove(this.kanatGrup),this.kanatGrup?.traverse(e=>{const t=e;t.geometry?.dispose(),t.material?.dispose()}),this.kanatGrup=null}kanatTemizle(){this.kanatMeshSil(),this.kanatDoku?.dispose(),this.kanatDoku=null}kanatMeshKur(){const e=this.bukulenler?.belUst;if(!e||!this.kanatDoku)return;this.kanatGrup&&this.kanatMeshSil();const t=new Yl({map:this.kanatDoku,transparent:!0,alphaTest:.01,side:bi}),n=new Jt;n.position.set(0,6*Me,-2*Me);for(const a of[1,-1]){const r=new Jt;r.position.set(a*5*Me,0,0),r.rotation.order="ZYX";const s=new da(10*Me,20*Me,2*Me);Np(s,22,0,10,20,2);const o=new ti(s,t);o.position.set(-a*5*Me,-10*Me,-Me),a<0&&(o.scale.x=-1),Md(o,10,20,2),r.add(o),r.rotation.x=zM,r.rotation.y=0,r.rotation.z=a*zp,r.userData.yon=a,n.add(r)}n.visible=this.kozmetikGorunur,e.add(n),this.kanatGrup=n,this.kanatAyrikUygula(),this.izgaraYenile()}kanatAyrik(e){this.kanatAyrikAcik!==e&&(this.kanatAyrikAcik=e,this.kanatAyrikUygula())}kanatAyrikUygula(){if(this.kanatGrup)for(const e of this.kanatGrup.children){const t=e.userData.yon||1;e.position.x=t*(5+(this.kanatAyrikAcik?UM:0))*Me}}izgaraGoster(e,t=!1){this.izgaraAcik=e,this.modelIzgaraAcik=e&&t,this.modelIzgaraAcik&&this.modelIzgaralari(),this.izgaraYenile()}izgaraYenile(){for(const e of[this.pelerinGrup,this.kanatGrup])e?.traverse(t=>{t.isLineSegments&&(t.visible=this.izgaraAcik)});for(const e of[...this.tabanMeshler,...this.ustMeshler])for(const t of e.children)t.isLineSegments&&(t.visible=this.modelIzgaraAcik)}modelIzgaralari(){for(const e of[...this.tabanMeshler,...this.ustMeshler]){if(e.children.some(s=>s.isLineSegments))continue;const t=e.geometry.parameters;if(!t)continue;const n=Math.max(1,Math.round(t.width/Me)),a=Math.max(1,Math.round(t.height/Me)),r=Math.max(1,Math.round(t.depth/Me));Md(e,n,a,r)}}pelerinMeshSil(){this.pelerinGrup?.parent&&this.pelerinGrup.parent.remove(this.pelerinGrup),this.pelerinGrup?.traverse(e=>{const t=e;t.geometry?.dispose(),t.material?.dispose()}),this.pelerinGrup=null,this.pelerinSarkac=null}pelerinTemizle(){this.pelerinMeshSil(),this.pelerinDoku?.dispose(),this.pelerinDoku=null}pelerinMeshKur(){const e=this.bukulenler?.belUst;if(!e||!this.pelerinDoku)return;this.pelerinGrup&&this.pelerinMeshSil();const t=new da(10*Me,16*Me,1*Me);Np(t,0,0,10,16,1);const n=new Yl({map:this.pelerinDoku,transparent:!0,alphaTest:.01,side:bi}),a=new ti(t,n);a.rotation.y=Math.PI,a.position.set(0,-8*Me,0),Md(a,10,16,1);const r=new Jt;r.position.set(0,6*Me,-2.5*Me),r.rotation.x=.06,r.visible=this.kozmetikGorunur,r.add(a),e.add(r),this.pelerinGrup=r,this.pelerinSarkac=r,this.izgaraYenile()}tuvalDoku(e,t){const n=new Zg(e);ko(n),n.needsUpdate=!0,this.canliMod=!0,this._bekleyenSkin=null,this.canliDoku=n,this.modelKur(n,t)}dokuTazele(){this.canliDoku&&(this.canliDoku.needsUpdate=!0),this.pelerinDoku&&(this.pelerinDoku.needsUpdate=!0),this.kanatDoku&&(this.kanatDoku.needsUpdate=!0)}oyuncuGoster(e){this.oyuncuGorunur=e;for(const t of this.oyuncuMeshler){const n=this.ustMeshler.includes(t);t.visible=e&&(!n||this.kaplamaGorunur)}}atlasNoktasi(e,t="taban"){if(t==="oto")return this.isin(e,[...this.tabanMeshler,...this.ustMeshler],64,64);const n=t==="ust"?this.ustMeshler:this.tabanMeshler;return this.isin(e,n,64,64)}kozmetikNoktasi(e,t){return t==="pelerin"?this.pelerinGrup?this.isin(e,[this.pelerinGrup],Oi,Fi):null:this.kanatGrup?this.isin(e,[this.kanatGrup],Oi,Fi):null}isin(e,t,n,a){const r=this.canvas;if(!r||!this.renderer||t.length===0)return null;const s=r.getBoundingClientRect();if(s.width<1||s.height<1)return null;const o=new at((e.clientX-s.left)/s.width*2-1,-((e.clientY-s.top)/s.height)*2+1),c=new Ex;c.setFromCamera(o,this.camera);const l=c.intersectObjects(t,!0).find(u=>!!u.uv);if(!l?.uv)return null;const d=Math.min(n-1,Math.max(0,Math.floor(l.uv.x*n))),f=Math.min(a-1,Math.max(0,Math.floor((1-l.uv.y)*a)));return{x:d,y:f}}modelKur(e,t){this.kok&&((this.kok.parent??this.scene).remove(this.kok),this.kok.traverse(A=>{const x=A;x.geometry&&x.geometry.dispose()})),this.pelerinGrup=null,this.pelerinSarkac=null,this.tabanMeshler=[],this.ustMeshler=[],this.oyuncuMeshler=[],this.kok=new Jt,this.kok.position.y=-.66,this.kalca=new Jt,this.kalca.position.set(0,12*Me,0),this.kalca.rotation.order="ZYX",this.kok.add(this.kalca),this.kemikler={head:new Jt,body:new Jt,armL:new Jt,armR:new Jt,legL:new Jt,legR:new Jt};const[n,a,r,s,o,c]=[this.kemikler.head,this.kemikler.body,this.kemikler.armL,this.kemikler.armR,this.kemikler.legL,this.kemikler.legR];for(const A of[n,a,r,s,o,c])A.rotation.order="ZYX";const l=Up({u:0,v:0,w:8,h:8,d:8},e);l.position.set(0,4*Me,0),n.add(l);const d=Up({u:32,v:0,w:8,h:8,d:8},e,!0);d.scale.setScalar(1.125),d.position.set(0,4*Me,0),n.add(d),this.tabanMeshler.push(l),this.ustMeshler.push(d),this.oyuncuMeshler.push(l,d),a.position.set(0,12*Me,0),a.userData.pivotPx=[0,12,0];const f=(A,x,w,R,L)=>{const z=Sa(x,!1,e);z.position.set(R,w+x.h/4*Me,0),A.add(z);const F=new Jt;F.position.set(0,w,0);const C=Sa(x,!0,e);if(C.position.set(R,-(x.h/4)*Me,0),F.add(C),A.add(F),this.tabanMeshler.push(z,C),this.oyuncuMeshler.push(z,C),L){const H=Y=>{Y.scale.set((L.w+.5)/L.w,(L.h+.25)/L.h,(L.d+.5)/L.d)},D=Sa(L,!1,e,!0);D.position.set(R,w+L.h/4*Me,0),H(D),A.add(D);const P=Sa(L,!0,e,!0);P.position.set(R,-(L.h/4)*Me,0),H(P),F.add(P),this.ustMeshler.push(D,P),this.oyuncuMeshler.push(D,P)}return F},u=new Jt;u.position.set(0,-6*Me,0),u.rotation.order="ZYX";const h=Sa({u:16,v:16,w:8,h:12,d:4},!1,e);h.position.set(0,3*Me,0),u.add(h),a.add(u);const g=Sa({u:16,v:16,w:8,h:12,d:4},!0,e);g.position.set(0,-9*Me,0),a.add(g);const m=Sa({u:16,v:32,w:8,h:12,d:4},!1,e,!0);m.position.set(0,3*Me,0),m.scale.set(1.0625,1.0208,1.125),u.add(m);const p=Sa({u:16,v:32,w:8,h:12,d:4},!0,e,!0);p.position.set(0,-9*Me,0),p.scale.set(1.0625,1.0208,1.125),a.add(p),this.tabanMeshler.push(h,g),this.ustMeshler.push(m,p),this.oyuncuMeshler.push(h,g,m,p);const v=new Jt;v.position.set(0,6*Me,0),v.rotation.order="ZYX";const y=t?3:4;n.position.set(0,6*Me,0),n.userData.pivotPx=[0,6,0],r.position.set(5*Me,4*Me,0),r.userData.pivotPx=[5,4,0];const T=f(r,{u:32,v:48,w:y,h:12,d:4},-4*Me,Me,{u:48,v:48,w:y,h:12,d:4});s.position.set(-5*Me,4*Me,0),s.userData.pivotPx=[-5,4,0];const b=f(s,{u:40,v:16,w:y,h:12,d:4},-4*Me,-Me,{u:40,v:32,w:y,h:12,d:4});o.position.set(1.9*Me,0,0),o.userData.pivotPx=[1.9,0,0];const S=f(o,{u:16,v:48,w:4,h:12,d:4},-6*Me,0,{u:0,v:48,w:4,h:12,d:4});c.position.set(-1.9*Me,0,0),c.userData.pivotPx=[-1.9,0,0];const k=f(c,{u:0,v:16,w:4,h:12,d:4},-6*Me,0,{u:0,v:32,w:4,h:12,d:4});if(this.bukulenler={body:u,belUst:v,armL:T,armR:b,legL:S,legR:k},v.add(n,r,s),this.kalca.add(a,v,o,c),this.scene.add(this.kok),this.oyuncuGorunur){if(!this.kaplamaGorunur)for(const A of this.ustMeshler)A.visible=!1}else for(const A of this.oyuncuMeshler)A.visible=!1;this.modelIzgaraAcik&&this.modelIzgaralari(),this._pelerinTuval&&this.pelerinDoku?this.pelerinMeshKur():this._bekleyenPelerin&&(this.pelerinDoku?this.pelerinMeshKur():this.pelerin(this._bekleyenPelerin)),this._bekleyenKanat&&(this.kanatDoku?this.kanatMeshKur():this.kanatTuval(this._bekleyenKanat))}emoteleriKur(e,t=1){this.emoteListe=e,this.hiz=t>0?t:1,this.durum="idle",this.durumBitis=this.zaman+.6}baslatDongu(){const e=()=>{if(this.canvas&&!this.canvas.isConnected){this.kapati(),Da===this&&(Da=null);return}if(this.rafId=requestAnimationFrame(e),document.hidden)return;const t=performance.now(),n=document.hasFocus()?1e3/45:1e3/4;if(t-this.sonCizimAt<n)return;this.sonCizimAt=t;const a=Math.min(.05,this.saat.getDelta());this.zaman+=a,this.adimla(a),this.kameraGuncelle(a),this.renderer&&this.renderer.render(this.scene,this.camera)};e()}adimla(e){if(!this.kemikler)return;let t;this.durum==="idle"?(t=this.idlePozu(this.zaman),this.emoteListe.length&&this.zaman>=this.durumBitis&&(this.aktif=this.emoteListe[Math.floor(Math.random()*this.emoteListe.length)],this.sonOynananAd=this.aktif.adi,this.durum="emote",this.tEmote=this.aktif.baslangicTick,this.aktif.dongu&&(this.durumBitis=this.zaman+10+Math.random()*6),t=Ip(this.aktif,this.tEmote))):this.durum==="emote"&&this.aktif?(this.tEmote+=e*20,(this.aktif.dongu?this.zaman>=this.durumBitis:this.tEmote>=this.aktif.stopTick)?(this.durum="soft",this.durumBitis=this.zaman+.55,t=Dp):t=Ip(this.aktif,this.tEmote)):(t=Dp,this.zaman>=this.durumBitis&&(this.durum="idle",this.durumBitis=this.zaman+(.9+Math.random()*1.8)/this.hiz));const n=this.durum==="soft"?Math.min(1,e*7):1;this.uygula(t,n),this.pelerinSalin(),this.kanatSalin()}kanatSalin(){const e=this.kanatGrup;if(!e)return;const t=Math.sin(this.zaman*2.1);e.rotation.x=t*.045,e.position.y=6*Me+t*.3*Me;for(const n of e.children){const a=n.userData.yon??1;n.rotation.z=a*(zp+Math.max(0,t)*.035)}}pelerinSalin(){const e=this.pelerinSarkac;if(!e)return;const t=.06,n=this.durum==="emote"?.075:.03,a=t+Math.sin(this.zaman*1.3)*n;e.rotation.x+=(a-e.rotation.x)*.12,e.rotation.z=Math.sin(this.zaman*.9)*.02}idlePozu(e){const t=Math.sin(e*1.7),n=Math.sin(e*1.13);return{head:[n*2.4,t*4.5,t*1.5],body:[n*.5,0,0],armL:[t*3.6,0,2.6+n*1.4],armR:[-t*3.6,0,-2.6-n*1.4],legL:[-t*1.2,0,0],legR:[t*1.2,0,0],bend:[0,0,0,0,0],konum:[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],kokDon:[0,0,0],kokKonum:[0,0,0]}}uygula(e,t){const n=this.kemikler;if(!n)return;const a=Ny.degToRad,r=(o,c,l)=>{const d=a(c[0]),f=-a(c[1]),u=a(c[2]);o.rotation.x+=(d-o.rotation.x)*t,o.rotation.y+=(f-o.rotation.y)*t,o.rotation.z+=(u-o.rotation.z)*t;const h=o.userData.pivotPx||[0,0,0],g=e.konum[l],m=(h[0]+g[0])*Me,p=(h[1]+g[1])*Me,v=(h[2]+g[2])*Me;o.position.x+=(m-o.position.x)*t,o.position.y+=(p-o.position.y)*t,o.position.z+=(v-o.position.z)*t};r(n.head,e.head,0),r(n.body,e.body,1),r(n.armL,e.armL,2),r(n.armR,e.armR,3),r(n.legL,e.legL,4),r(n.legR,e.legR,5);const s=this.bukulenler;if(s){const o=(c,l)=>{const d=a(l);c.rotation.x+=(d-c.rotation.x)*t};o(s.armL,e.bend[0]),o(s.armR,e.bend[1]),o(s.legL,e.bend[2]),o(s.legR,e.bend[3]),o(s.body,e.bend[4]),o(s.belUst,e.bendTasi===!0?e.bend[4]:0)}if(this.kalca){const o=e.kokDon;this.kalca.rotation.x+=(a(o[0])-this.kalca.rotation.x)*t,this.kalca.rotation.y+=(-a(o[1])-this.kalca.rotation.y)*t,this.kalca.rotation.z+=(a(o[2])-this.kalca.rotation.z)*t;const c=e.kokKonum,l=c[0]*Me,d=(12+c[1])*Me,f=c[2]*Me;this.kalca.position.x+=(l-this.kalca.position.x)*t,this.kalca.position.y+=(d-this.kalca.position.y)*t,this.kalca.position.z+=(f-this.kalca.position.z)*t}this.kok&&(this.kok.position.y+=(-.66-this.kok.position.y)*t)}kapati(){this.sahneTemizle(),cancelAnimationFrame(this.rafId),this.rafId=0,this.boyutla&&window.removeEventListener("resize",this.boyutla),this.boyutla=null,this.yorungeKapat(),this.pelerinTemizle(),this.kanatTemizle(),this._bekleyenPelerin=null,this._bekleyenKanat=null,this._pelerinTuval=null,this.canliDoku?.dispose(),this.canliDoku=null,this.renderer?.dispose(),this.renderer=null,this.kemikler=null,this.bukulenler=null,this.kok=null,this.kalca=null,this.aktif=null,this.canvas=null,this.durum="idle"}}let Da=null;function Nn(){return Da||(Da=new NM),window.__sahne=Da,Da}function yc(){Da?.kapati(),Da=null,window.__sahne=null}const Ue=128,xi=96;function _i(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function se(i,e,t,n=1,a=1,r="#fff"){i.fillStyle=r,i.fillRect(Math.round(e),Math.round(t),Math.round(n),Math.round(a))}function ka(i,e,t=xi){const n=Math.ceil(t/e.length);e.forEach((a,r)=>se(i,0,r*n,Ue,n+1,a));for(let a=1;a<e.length;a++){const r=a*n,s=_i(a*977);for(let o=0;o<Ue;o+=2)s()>.45&&(se(i,o,r-1,1,1,e[a-1]),s()>.6&&se(i,o+1,r-1,1,1,e[a]))}}function Fp(i,e,t,n,a,r){se(i,e+3,t+3,n,3,a),se(i,e,t+5,n+6,3,a),se(i,e+2,t+8,n-2,2,r),se(i,e+6,t+2,n-8,2,a),se(i,e+4,t+10,n-6,1,r)}function Bp(i,e,t,n,a){const r=_i(a);for(let s=0;s<6;s++){const o=Math.floor(r()*Ue),c=18+Math.floor(r()*26);for(let l=0;l<c;l++){const d=Math.max(1,Math.round(l/c*(16+s%3*6)));se(i,o-d,e-l,d*2,1,t)}se(i,o-1,e-c+1,2,2,n)}}function Kr(i,e,t,n,a=30){const r=_i(n);for(let s=0;s<e;s++){const o=Math.floor(r()*Ue),c=a+Math.floor(r()*(xi-a));se(i,o,c,1,1,t[Math.floor(r()*t.length)])}}const Wu=[{id:"kiraz",ad:"Kiraz Korusu",etiket:"Pembe taç, düşen yapraklar",ciz(i){ka(i,["#f6d8e4","#f1c6d8","#e8b0ca","#cf8fb4"],70),se(i,0,62,Ue,8,"#b98aa6"),se(i,0,68,Ue,8,"#8f6377"),Bp(i,64,"#a97a95","#d9aec6",41);const e=(n,a,r)=>{const s=_i(r),o=78;se(i,n,o-a,3,a,"#5d3b46"),se(i,n+1,o-a,1,a,"#7a5260");const c=12+Math.floor(s()*5);for(let l=0;l<3;l++){const d=n+1+Math.round((s()-.5)*14),f=o-a-Math.round(s()*14)-l*4;for(let u=-c;u<=c;u++){const h=Math.round(Math.sqrt(Math.max(0,c*c-u*u))*1.15);h<=0||se(i,d-h,f+u,h*2,1,u<0?"#f7b8d2":"#e795b6")}for(let u=0;u<10;u++){const h=Math.round((s()-.5)*c*1.6),g=Math.round((s()-.5)*c*1.6);se(i,d+h,f+g,1,1,s()>.5?"#ffd3e4":"#d47fa1")}}};e(18,26,7),e(96,30,19),e(58,22,31),se(i,0,78,Ue,xi-78,"#7fa86a"),se(i,0,78,Ue,2,"#9dc484"),se(i,0,90,Ue,6,"#5d7f4f");const t=_i(53);for(let n=0;n<70;n++)se(i,t()*Ue,12+t()*62,1,1,t()>.5?"#ffd3e4":"#f2a7c4")}},{id:"nether",ad:"Nether Kalesi",etiket:"Obsidyen kule, lav parıltısı",ciz(i){ka(i,["#2a0d13","#4a1119","#6d1a1e","#8f2a20"],56),se(i,0,52,Ue,6,"#ff6a1a"),se(i,0,52,Ue,2,"#ffa347"),se(i,0,56,Ue,2,"#c93d0c"),se(i,0,40,Ue,14,"#2b1218"),se(i,12,26,16,30,"#1c0a10"),se(i,12,22,16,5,"#2f121a"),se(i,96,18,20,42,"#1c0a10"),se(i,96,14,20,5,"#2f121a"),se(i,44,34,34,26,"#22101a"),se(i,44,30,34,4,"#331522");const e=_i(17);for(let t=0;t<16;t++){const n=46+Math.floor(e()*30),a=36+Math.floor(e()*20);se(i,n,a,2,3,"#ff9b3d")}se(i,18,32,2,3,"#ffb04d"),se(i,102,26,2,3,"#ffb04d"),se(i,0,70,Ue,26,"#120810");for(let t=0;t<Ue;t+=16)se(i,t,70,15,8,"#1b0d17"),se(i,t+1,71,13,2,"#241322");se(i,0,84,Ue,4,"#ff5a14"),se(i,0,84,Ue,1,"#ffb44d"),se(i,0,88,Ue,8,"#120810"),Kr(i,40,["#ff8a2a","#ffc061","#ff5a14"],91,24)}},{id:"end",ad:"End Şehri",etiket:"Mor boşluk, koros kuleler",ciz(i){ka(i,["#150c22","#1d1030","#26143d","#2f1a49"],62),Kr(i,55,["#e7d6ff","#b795f0","#8e6bd0"],13,4),se(i,0,58,Ue,10,"#241436"),se(i,0,58,Ue,2,"#3a2152");const e=(n,a,r)=>{se(i,n,a,9,r,"#3d2a56"),se(i,n+1,a,2,r,"#55406f"),se(i,n+7,a,2,r,"#2a1c3d"),se(i,n-2,a-3,13,3,"#63498a"),se(i,n-1,a-6,11,3,"#4a3568"),se(i,n+2,a-9,5,3,"#63498a")};e(16,30,30),e(74,22,38),e(104,36,24);const t=(n,a)=>{se(i,n,a,2,6,"#efe4ff"),se(i,n-2,a+1,6,3,"rgba(200,170,255,0.35)"),se(i,n,a+6,2,2,"#b795f0")};t(20,24),t(78,16),t(108,30),se(i,30,46,14,4,"#2c1a41"),se(i,34,50,6,3,"#1e1130"),se(i,96,50,10,3,"#2c1a41"),se(i,0,68,Ue,xi-68,"#1b1029"),se(i,0,68,Ue,3,"#34204a");for(let n=4;n<Ue;n+=14)se(i,n,76,9,2,"#2a1a3d");Kr(i,22,["#c9b3f5","#8e6bd0"],71,70)}},{id:"bastion",ad:"Bastion",etiket:"Karataş surlar, altın damar",ciz(i){ka(i,["#2b0b0b","#451014","#5d1717","#74201b"],50),se(i,0,46,Ue,8,"#8a2a1c");const e=(t,n,a,r)=>{se(i,t,n,a,r,"#221a1f"),se(i,t,n,a,2,"#33272e");for(let s=4;s<r;s+=8)se(i,t+2,n+s,a-4,1,"#1a1318")};e(0,24,30,46),e(98,18,30,52),e(34,34,60,36);for(let t=36;t<92;t+=12)se(i,t,38,6,6,"#120d10");se(i,4,28,8,8,"#120d10"),se(i,104,24,8,8,"#120d10"),se(i,8,50,4,4,"#ffcf4d"),se(i,14,54,2,2,"#e0a81f"),se(i,106,44,5,5,"#ffcf4d"),se(i,60,52,4,4,"#ffcf4d"),se(i,66,56,2,2,"#e0a81f"),se(i,0,70,Ue,26,"#150f12"),se(i,0,74,Ue,6,"#ff6418"),se(i,0,74,Ue,1,"#ffb44d"),se(i,0,80,Ue,16,"#150f12"),Kr(i,26,["#ffb44d","#ff7a20"],33,60)}},{id:"mantar",ad:"Mantar Adası",etiket:"Dev şapkalar, turkuaz gök",ciz(i){ka(i,["#0d2b33","#123a44","#17505a","#1d6b70"],74),Fp(i,22,18,22,"#2d6f74","#1d5259"),Fp(i,76,12,30,"#2d6f74","#1d5259"),se(i,0,66,Ue,10,"#2f6b52"),se(i,0,66,Ue,2,"#4b8b68");const e=(n,a,r)=>{const s=_i(r),o=4+Math.floor(s()*2);se(i,n,74-a,o,a,"#e6d7bd"),se(i,n,74-a,1,a,"#f3e9d6"),se(i,n+o-1,74-a,1,a,"#c9b797");const c=74-a-10;for(let l=0;l<10;l++){const d=Math.round(14-l*1.1);se(i,n+o/2-d,c+l,d*2,1,l<4?"#e14a3a":"#c33a2e")}for(let l=0;l<9;l++)se(i,n+o/2-12+s()*24,c+2+s()*7,2,1,"#fff3e2")};e(22,30,3),e(72,40,9),e(104,24,15),se(i,0,74,Ue,xi-74,"#3f7c5c"),se(i,0,74,Ue,2,"#5b9d77"),se(i,0,86,Ue,10,"#2c5a44");const t=_i(61);for(let n=0;n<48;n++)se(i,t()*Ue,10+t()*60,1,1,t()>.5?"#a9f0d8":"#7fd6be")}},{id:"buz",ad:"Buz Diyarı",etiket:"Aurora, buzdağı",ciz(i){ka(i,["#071226","#0c1d3a","#122b52","#19396b"],60);for(let n=0;n<4;n++){const a=12+n*7;for(let r=0;r<Ue;r++){const s=Math.round(Math.sin(r/Ue*Math.PI*2+n)*3);se(i,r,a+s,1,2,n%2?"rgba(94,255,206,0.30)":"rgba(122,182,255,0.28)")}}Kr(i,40,["#ffffff","#cfe6ff","#9fc4ff"],29,2),Bp(i,60,"#2a4a74","#7fa8d6",77);const e=(n,a,r,s)=>{for(let o=0;o<s;o++){const c=Math.round(r*(1-o/s)*.9);se(i,n-c/2+o*.4,a+o,c,1,o<s*.4?"#d6ecff":"#a6cbe8")}se(i,n,a+2,2,s-4,"#ffffff")};e(22,46,26,26),e(96,52,30,20),e(60,58,18,14),se(i,0,72,Ue,xi-72,"#0f2a4a"),se(i,0,72,Ue,2,"#2b5f8c");for(let n=0;n<24;n++){const a=_i(n*13);se(i,a()*Ue,76+a()*18,6+a()*10,1,"#1f4b72")}const t=_i(83);for(let n=0;n<26;n++)se(i,t()*Ue,28+t()*44,1,1,"#ffffff")}},{id:"col",ad:"Çöl Tapınağı",etiket:"Kum piramit, sıcak pus",ciz(i){ka(i,["#f7dfa8","#f3cf86","#e8b969","#d9a052"],62),se(i,96,12,12,12,"#fff3cf"),se(i,94,10,16,16,"rgba(255,235,180,0.25)");for(let t=0;t<4;t++){const n=54+t*6;se(i,0,n,Ue,6,t<2?"#d8ab68":"#c1924f"),se(i,0,n,Ue,1,"#e8c584")}const e=22;for(let t=0;t<34;t++){const n=Math.round(8+t*1.7);se(i,46-n/2,e+t,n,1,t%7===0?"#c79a55":"#dcb271"),se(i,46-n/2,e+t,2,1,"#f0d29a")}se(i,42,40,8,16,"#6b4d28"),se(i,43,42,6,14,"#3d2b14"),se(i,18,52,3,22,"#7b5a34");for(let t=0;t<5;t++){const n=t<2?-1:1;for(let a=0;a<8;a++)se(i,19+n*a,52-a+Math.abs(a-3),2,1,t%2?"#5f8f4a":"#7aa85c")}se(i,0,78,Ue,xi-78,"#e0b877"),se(i,0,78,Ue,2,"#f2d49b");for(let t=6;t<Ue;t+=18)se(i,t,86,5,2,"#c69a5c")}},{id:"okyanus",ad:"Okyanus Anıtı",etiket:"PriZmarin, ışık huzmeleri",ciz(i){ka(i,["#0a2a3a","#0c3446","#0e3f52","#104a5e"],40);for(let n=0;n<6;n++){const a=8+n*21;for(let r=0;r<66;r++){const s=2+r*.18;se(i,a+r*.12,r,s,1,"rgba(150,240,255,0.06)")}}const e=(n,a,r,s)=>{se(i,n,a,r,s,"#2f7d76"),se(i,n,a,r,2,"#48a89a"),se(i,n,a+s-2,r,2,"#1f5b57")};e(28,30,72,34),e(40,22,48,10),e(52,14,24,10),se(i,60,18,8,4,"#a8f0e2"),se(i,62,16,4,2,"#e0fff8"),se(i,34,40,4,4,"#d9b34a"),se(i,90,46,4,4,"#d9b34a");for(let n=32;n<96;n+=12)se(i,n,52,6,2,"#1d4a48");se(i,0,64,Ue,xi-64,"#0b2c33"),se(i,0,64,Ue,3,"#164a4a");const t=_i(47);for(let n=0;n<16;n++){const a=t()*Ue,r=6+t()*12;se(i,a,78-r,2,r,t()>.5?"#1f6b55":"#2b8a63")}Kr(i,30,["#8fe8dd","#c8fff6"],11,8)}}],OM=Wu;function FM(i){return Wu.find(e=>e.id===i)||Wu[0]}function mv(i,e){const t=i.getContext("2d");t&&((i.width!==Ue||i.height!==xi)&&(i.width=Ue,i.height=xi),t.imageSmoothingEnabled=!1,t.clearRect(0,0,Ue,xi),FM(e).ciz(t))}let En=null;const Hp=()=>document.documentElement.getAttribute("data-world")==="sahne",BM=i=>{if(!i)return"hiç";const e=Math.round((Date.now()-i)/6e4);if(e<1)return"şimdi";if(e<60)return`${e} dk önce`;const t=Math.round(e/60);return t<24?`${t} saat önce`:`${Math.round(t/24)} gün önce`};function HM(i){const e=le.instances[0];(!En||!le.instances.find(l=>l.id===En))&&(En=e?.id||null);const t=le.instances.find(l=>l.id===En),n=bn(),a=l=>!!l&&(l.includes("/")||l.includes("\\")),r=[...le.instances].sort((l,d)=>(d.last_played||0)-(l.last_played||0)),s=r[0]||null,o=r.slice(0,5);i.innerHTML=`
    <div class="imp-root">
      <div class="imp-main">
        <div class="imp-brand">
          <div class="imp-brand-orta">
            <span class="imp-chip imp-sari">YIKIM</span>
            <span class="imp-chip imp-gri">LIENT</span>
          </div>
          <span class="imp-counter">${le.instances.length} kurulum</span>
        </div>

        <div class="imp-banner${t?.cover?" kapakli":""}"${t?.cover?` style="background-image:url('${Mt(t.cover)}')"`:""}>
          <div class="vitrin"><canvas id="sahne-arka" class="sahne-arka"></canvas><canvas id="sahne-katman"></canvas></div>
          <button class="imp-ad-chip" id="i-ad" title="Hesap yönetimi">
            ${n?.name?`<img src="${Lc(n)}" alt="" draggable="false" ${Cc(n)}><b>${dc(n.id)}${n.name}</b><small>hesabı yönet</small>`:"<b>hesap yok</b><small>giriş yap</small>"}
          </button>
          ${t?`<button class="imp-buyut" id="i-menu" title="${t.name}">${V("gear")}</button>`:""}
        </div>

        <div class="imp-profil-baslik">
          <span>${V("grid")} SON OYNANAN PROFİLLER</span>
          <span class="imp-pill">
            <span class="pill sel">${t?.mod_loader?no(t.mod_loader):"Java"}</span>
            <span class="pill">${t?.mc_version||"—"}</span>
          </span>
        </div>
        <div class="imp-profiller" id="i-profil-satirlar"></div>

        <div class="imp-alt">
          <button class="imp-tam imp-sari-tam" id="i-yonet">${V("grid")} TÜM PROFİLLERİ YÖNET</button>
          <button class="imp-tam imp-gri-tam" id="i-mod">${V("plus")} MOD EKLE</button>
        </div>
      </div>

      <div class="imp-yan">
        <div class="imp-news-head">
          <b>● SON HABERLER</b>
          <button class="imp-link" id="i-haber-tumu">Tümü →</button>
        </div>
        <div class="imp-news" id="i-news"><div class="imp-news-kart yukleniyor"></div></div>

        <div class="imp-hizli">
          <div class="imp-hizli-bas">${V("play")} HIZLI GİRİŞ</div>
          ${s?`
          <button class="imp-hizli-satir${Je.activeId===s.id?" durdur":""}" id="i-hizli-oyla" ${Je.activeId&&Je.activeId!==s.id?'disabled data-kilitli="1"':""}>
            <b>${s.name}${Je.activeId===s.id?" — AÇIK":""}</b>
            <small>${no(s.mod_loader)} · ${s.mc_version}</small>
          </button>
          <button class="imp-hizli-satir pas" id="i-hizli-liste">Tümünü gör →</button>`:`
          <button class="imp-hizli-satir pas" id="i-hizli-liste">İlk kurulumu oluştur</button>`}
        </div>
      </div>
    </div>
  `;const c=i.querySelector("#i-profil-satirlar");for(const l of o){const d=hi(`
      <div class="imp-satir${Je.activeId===l.id?" oyunda":""}" role="button" tabindex="0" data-id="${l.id}">
        <span class="imp-satir-ikon">${a(l.icon)?`<img src="${Mt(l.icon)}" draggable="false" />`:`<span class="emoji">${l.icon||"🔥"}</span>`}</span>
        <span class="imp-satir-yazi">
          <b class="imp-satir-ad">${l.name}</b>
          <small>${no(l.mod_loader)} · ${l.mc_version} — ${BM(l.last_played)}</small>
        </span>
        <button class="imp-oyla${Je.activeId===l.id?" durdur":""}" ${Je.activeId&&Je.activeId!==l.id?'disabled data-kilitli="1"':""}
          title="${Je.activeId===l.id?"Oyunu kapat":`${l.name} — OYNA`}">${V(Je.activeId===l.id?"stop":"play")} ${Je.activeId===l.id?"DURDUR":"OYNA"}</button>
        <button class="imp-diyis" title="Düzenle">${V("gear")}</button>
      </div>
    `);d.addEventListener("click",f=>{const u=l.id;if(f.target.closest(".imp-diyis")){je("instances",u);return}if(f.target.closest(".imp-oyla")){Je.activeId===l.id&&Ed();return}En=u,je("instances",u)}),d.querySelector(".imp-oyla")?.addEventListener("click",f=>f.stopPropagation()),c.appendChild(d)}c.querySelectorAll(".imp-satir").forEach(l=>{const d=l.dataset.id||"";l.querySelector(".imp-oyla")?.addEventListener("click",async f=>{if(f.stopPropagation(),Je.activeId===d)return Ed();if(!le.accounts.length)return zn();const{launchInstance:u}=await ct(async()=>{const{launchInstance:h}=await Promise.resolve().then(()=>St);return{launchInstance:h}},void 0);u(d)})}),i.querySelector("#i-yonet")?.addEventListener("click",()=>je("instances")),i.querySelector("#i-mod")?.addEventListener("click",()=>je("explore")),i.querySelector("#i-menu")?.addEventListener("click",()=>{En&&je("instances",En)}),i.querySelector("#i-ad")?.addEventListener("click",()=>zn()),i.querySelector("#i-haber-tumu")?.addEventListener("click",()=>je("news")),i.querySelector("#i-hizli-liste")?.addEventListener("click",()=>je("instances")),i.querySelector("#i-hizli-oyla")?.addEventListener("click",async()=>{if(!s)return;if(Je.activeId===s.id)return Ed();if(!le.accounts.length)return zn();const{launchInstance:l}=await ct(async()=>{const{launchInstance:d}=await Promise.resolve().then(()=>St);return{launchInstance:d}},void 0);l(s.id)}),vv(i,n)}async function Ed(){try{await te("cmd_kill_game")}catch{}const{refreshState:i}=await ct(async()=>{const{refreshState:e}=await Promise.resolve().then(()=>St);return{refreshState:e}},void 0);await i(!0)}async function $M(i){const e=i.querySelector("#i-news");if(e)try{const t=await te("cmd_list_yikim_news");t.sort((n,a)=>(a.pinned?1:0)-(n.pinned?1:0)||a.date.localeCompare(n.date)),e.innerHTML="";for(const n of t.slice(0,2)){const a=hi(`
        <div class="imp-news-kart" role="button" tabindex="0">
          <div class="imp-news-img"${n.image?` style="background-image:url('${n.image}')"`:""}></div>
          <div class="imp-news-govde">
            <span class="imp-news-chip${n.pinned?" sar":""}">${n.pinned?"DUYURU":"YIKIM"}</span>
            <b>${n.title}</b>
            <small>${n.date}</small>
          </div>
        </div>
      `);a.addEventListener("click",()=>je("news")),e.appendChild(a)}}catch{}}function GM(i){if(yc(),Hp()){HM(i),$M(i);return}const e=le.instances[0];(!En||!le.instances.find(f=>f.id===En))&&(En=e?.id||null);const t=le.instances.find(f=>f.id===En),n=bn(),a=f=>!!f&&(f.includes("/")||f.includes("\\")),r=t?a(t.icon)?`<img class="hero-inst-icon" src="${Mt(t.icon)}" draggable="false" />`:`<span class="hero-inst-icon emoji">${t.icon||"🔥"}</span>`:"",s=!!t?.cover&&!Hp(),o=s?` style="background-image:url('${Mt(t.cover)}')"`:"",c=t?Je.activeId===t.id?"warn":"ok":"off",l=le.instances.filter(f=>f.id!==t?.id);i.innerHTML=`
    <div class="page-wrap">
    <!-- HERO HAT: seçili kurulum tek satırda — lamba, ad, ölçümler, OYNA şalteri -->
    <section class="home-hero${s?" has-cover":""}"${o}>
      <div class="vitrin" aria-label="Karakter vitrini">
        <canvas id="sahne-arka" class="sahne-arka"></canvas>
        <canvas id="sahne-katman"></canvas>
        <div class="vitrin-isim">${n?`${n.name} — SAHNE`:"SAHNE"}</div>
      </div>
      <div class="hero-content">
        ${t?`
          <div class="hero-badge">${oo(c)} ${r} ${t.mc_version} · ${no(t.mod_loader)}</div>
          <h1>${t.name}</h1>
          <div class="hero-meters">
            <div class="meter">
              <div class="meter-cap">BELLEK</div>
              <div class="meter-val">${(t.ram_mb/1024).toFixed(0)} <small>GB / ${(le.sys?.total_ram_mb||16384)/1024} GB</small></div>
              <div class="meter-bar"><span style="width:${Math.min(100,Math.round(t.ram_mb/(le.sys?.total_ram_mb||16384)*100))}%"></span></div>
            </div>
            <div class="meter">
              <div class="meter-cap">MODLAR</div>
              <div class="meter-val">${t.standard_mods?"Optimize set":"Sade"}<small>${t.source_pack?" · paket":""}</small></div>
            </div>
            <div class="meter">
              <div class="meter-cap">SON OYUN</div>
              <div class="meter-val">${t.last_played?new Date(t.last_played).toLocaleDateString("tr-TR"):"—"}</div>
              <div class="meter-bar"><span style="width:0%"></span></div>
            </div>
          </div>
          <div class="hero-actions">
            <button class="btn ghost" id="h-manage">${V("gear")} Yönet</button>
            <button class="btn ghost" id="h-new">${V("plus")} Kurulum Oluştur</button>
          </div>
        `:`
          <div class="hero-badge"><img src="/logo.png" draggable="false" /> YIKIMLient</div>
          <h1>Panoya hoş geldin</h1>
          <p style="color:var(--text-dim); max-width:460px; line-height:1.6; margin-bottom:16px">
            Panoda henüz devre yok. İlk kurulumunu oluştur — sürümü seç, gerisini pano halleder.
          </p>
          <div class="hero-actions">
            <button class="btn primary lg" id="h-new">${V("plus")} İlk Kurulumu Oluştur</button>
          </div>
        `}
      </div>
      ${t?`
      <div class="play-ring-wrap">
        <button class="play-ring ${Je.activeId?"disabled":""}" id="h-play"
          title="${Je.activeId?"Oyun zaten açık":`${t.name} — OYNA`}"
          ${Je.activeId?"disabled":""}>
          <span class="pr-icon">${Je.activeId?V("clock"):V("play")}</span>
          <span class="pr-label">${Je.activeId?"AÇIK":"OYNA"}</span>
          <span class="pr-sub">${Je.activeId?"çalışıyor":t.name}</span>
        </button>
        ${Je.activeId===t.id?`
        <button class="stop-ring" id="h-stop" title="Oyunu kapat">
          ${V("stop")}
          <span class="sr-label">DURDUR</span>
        </button>`:""}
      </div>`:""}
    </section>

    <!-- HAT DEFTERİ: diğer kurulumlar cetvelle bölünmüş satırlar -->
    ${l.length?`
    <section class="home-section" aria-label="Diğer kurulumlar">
      <div class="ledger">
        <div class="ledger-head">
          <span class="ledger-title">DİĞER HATLAR</span>
          <button class="btn ghost sm" id="h-all">${V("grid")} Tümü</button>
        </div>
        <div id="ledger-rows"></div>
      </div>
    </section>`:""}

    <!-- HESAP HATASI: hesap yoksa pano uyarır -->
    ${n?"":`
    <section class="home-section">
      <div class="ledger">
        <div class="ledger-row" id="h-account-row" role="button" tabindex="0">
          ${oo("err")}
          <span class="lr-name">Hesap bağlı değil</span>
          <span class="lr-grow"></span>
          <span class="lr-meta">Oynamak için hesap gerekli <span class="sep">→</span></span>
        </div>
      </div>
    </section>`}

    <!-- Duyurular (yalnızca geliştiricinin imzalı feed'i) -->
    <section class="home-section" ${le.config?.show_news===!1?"hidden":""}>
      <div class="section-head">
        <h2 class="dim-cap">YIKIM DUYURULARI</h2>
        <button class="btn ghost sm" id="news-all">Tümü</button>
      </div>
      <div class="news-strip" id="home-news"><div class="spinner" style="margin:30px auto"></div></div>
    </section>

    <!-- Topluluk -->
    <section class="home-section">
      <div class="section-head">
        <h2 class="dim-cap">TOPLULUK</h2>
      </div>
      <div class="community-stats" id="community-stats">
        <div class="card hover community-card">
          <div class="cs-val" id="cs-downloads">…</div>
          <div class="cs-label">İndirilme</div>
        </div>
        <div class="card hover community-card">
          <div class="cs-val" id="cs-stars">…</div>
          <div class="cs-label">GitHub Yıldız</div>
        </div>
        <div class="card hover community-card" id="cs-github-link" style="cursor:pointer">
          <div class="cs-val">${V("globe")}</div>
          <div class="cs-label">GitHub'da Aç</div>
        </div>
      </div>
    </section>
    </div>
  `;const d=i.querySelector("#ledger-rows");if(d){for(const f of l){a(f.icon);const u=hi(`
        <button class="ledger-row" data-id="${f.id}">
          ${oo(Je.activeId===f.id?"warn":"ok")}
          <span class="lr-name">${f.name}</span>
          <span class="lr-grow"></span>
          <span class="lr-meta">
            ${no(f.mod_loader)} ${f.mc_version}
            <span class="sep">·</span>
            Son: ${f.last_played?new Date(f.last_played).toLocaleDateString("tr-TR"):"hiç"}
          </span>
          <span class="lr-play" title="Oyna">${V("play")}</span>
        </button>
      `);u.querySelector(".lr-play").innerHTML=V("play"),u.addEventListener("click",async h=>{if(h.target.closest(".lr-play")){if(!le.accounts.length)return zn();yf(u);const{launchInstance:g}=await ct(async()=>{const{launchInstance:m}=await Promise.resolve().then(()=>St);return{launchInstance:m}},void 0);g(f.id);return}je("instances",f.id)}),d.appendChild(u)}_f(Array.from(d.children))}qM(i),WM(),VM(i),vv(i,n)}async function gv(){if(document.getElementById("sahne-katman"))try{const i=await te("cmd_kozmetik_oku"),e=Nn();i?.pelerin_dosya&&i.pelerin_aktif!==!1?await e.pelerin({url:Mt(String(i.pelerin_dosya))}):await e.pelerin(null)}catch{}}window.addEventListener("yikim:yetki",()=>{gv()});async function vv(i,e){const t=i.querySelector("#sahne-katman");if(!t)return;const n=i.querySelector("#sahne-arka");n&&document.documentElement.getAttribute("data-world")==="sahne"&&(mv(n,String(le.config?.sahne_arka||"kiraz")),n.classList.add("on"));const a=Nn();a.kur(t),t.classList.add("on");try{const o=await te("cmd_get_account_skin",{id:e?.id||""});o?.dosya?await a.skin({url:Mt(String(o.dosya)),slim:!!o.slim}):await a.skin(null)}catch{await a.skin(null)}if(await gv(),le.config?.menu_animasyon===!1){a.emoteleriKur([]);return}const s={sakin:.6,normal:1,canli:1.8}[String(le.config?.menu_animasyon_hiz||"normal")]||1;try{const o=await te("cmd_list_emotes"),c=[];for(const l of o)try{c.push(CM(l.icerik))}catch{}a.emoteleriKur(c,s)}catch{a.emoteleriKur([])}}async function VM(i){try{const e=await te("cmd_get_community_stats"),t=i.querySelector("#cs-downloads"),n=i.querySelector("#cs-stars");t&&(t.textContent=(e.downloads||0).toLocaleString("tr-TR")),n&&(n.textContent=(e.stars||0).toLocaleString("tr-TR"))}catch{const e=i.querySelector("#cs-downloads"),t=i.querySelector("#cs-stars");e&&(e.textContent="—"),t&&(t.textContent="—")}i.querySelector("#cs-github-link")?.addEventListener("click",()=>{ct(()=>Promise.resolve().then(()=>St),void 0).then(e=>e.openExternal("https://github.com/YKSAMI1/yikimlient").catch(()=>{}))})}function no(i){return{vanilla:"Vanilla",fabric:"Fabric",forge:"Forge"}[i]||i}function qM(i){i.querySelector("#h-play")?.addEventListener("click",async()=>{if(!En){je("instances");return}if(!le.accounts.length){zn();return}yf(i.querySelector(".play-ring"));const{launchInstance:e}=await ct(async()=>{const{launchInstance:t}=await Promise.resolve().then(()=>St);return{launchInstance:t}},void 0);e(En)}),i.querySelector("#h-stop")?.addEventListener("click",async()=>{try{await te("cmd_kill_game")}catch{}const{refreshState:e}=await ct(async()=>{const{refreshState:t}=await Promise.resolve().then(()=>St);return{refreshState:t}},void 0);await e(!0)}),i.querySelector("#h-manage")?.addEventListener("click",()=>{je("instances",En||void 0)}),i.querySelector("#h-new")?.addEventListener("click",()=>je("instances")),i.querySelector("#h-all")?.addEventListener("click",()=>je("instances")),i.querySelector("#news-all")?.addEventListener("click",()=>je("news")),i.querySelector("#h-account-row")?.addEventListener("click",()=>zn())}async function WM(){const i=yi("#home-news");if(i)try{const e=await te("cmd_list_yikim_news");if(i.innerHTML="",!e.length){i.innerHTML='<div class="card"><p>Duyuru yok — yenilikler burada belirecek.</p></div>';return}e.sort((t,n)=>(n.pinned?1:0)-(t.pinned?1:0)||n.date.localeCompare(t.date));for(const t of e.slice(0,4)){const n=hi(`
        <div class="news-card card hover">
          ${t.image?`<div class="news-img" style="background-image:url('${t.image}')"></div>`:`<div class="news-img noimg">${V("news")}</div>`}
          <div class="news-body">
            <div class="chip orange">${t.pinned?"DUYURU":"YIKIM"} · ${t.date}</div>
            <h3>${t.title}</h3>
          </div>
        </div>
      `);n.addEventListener("click",()=>je("news")),i.appendChild(n)}}catch{i.innerHTML='<div class="card"><p>Duyurular şimdilik yüklenemedi — çevrimdışı olabilirsin.</p></div>'}}const _v="yikim-bildirimler",KM=60;function xc(){try{const i=localStorage.getItem(_v);if(!i)return[];const e=JSON.parse(i);return Array.isArray(e)?e:[]}catch{return[]}}function zf(i){try{localStorage.setItem(_v,JSON.stringify(i.slice(0,KM)))}catch{}}function Wa(i,e,t){const n=xc(),a=Date.now();n.length&&n[0].baslik===e&&n[0].mesaj===t&&a-n[0].at<3e3||(n.unshift({id:`b${a.toString(36)}${Math.random().toString(36).slice(2,6)}`,tur:i,baslik:e,mesaj:t,at:a,okundu:!1}),zf(n),document.querySelector("#bildirim-panel.bildirim-acik")&&Ms(),bc(!0))}function yv(){const i=xc();i.some(e=>!e.okundu)&&(i.forEach(e=>{e.okundu=!0}),zf(i),bc(!1))}function xv(){zf([]),Ms(),bc(!1)}function bv(){let i=document.querySelector("#bildirim-panel");return i||(i=document.createElement("div"),i.id="bildirim-panel",i.className="bildirim-panel",document.body.appendChild(i)),i}function Uf(){const i=bv();Ms(),yv(),i.classList.toggle("bildirim-acik")}function Nf(){document.querySelector("#bildirim-panel")?.classList.remove("bildirim-acik")}const XM={kurulum:"📦",sistem:"⚙️",mod:"🧩",genel:"🔔"};function YM(i){const e=new Date(i.at).toLocaleTimeString("tr-TR",{hour:"2-digit",minute:"2-digit"});return`
    <div class="bild-satir" data-tur="${i.tur}">
      <span class="bild-ikon">${XM[i.tur]}</span>
      <div class="bild-govde">
        <div class="bild-baslik">${i.baslik}</div>
        <div class="bild-mesaj">${i.mesaj}</div>
      </div>
      <span class="bild-saat">${e}</span>
    </div>`}function Ms(){const i=bv(),e=xc();i.innerHTML=`
    <div class="bild-kafa">
      <span class="bild-kafa-ad">Bildirimler</span>
      <div class="bild-kafa-islem">
        <button class="bild-temizle" title="Tümünü temizle">Temizle</button>
        <button class="bild-kapat" title="Kapat">✕</button>
      </div>
    </div>
    <div class="bild-liste">
      ${e.length?e.map(YM).join(""):""}
    </div>
    ${e.length?"":`
      <div class="bild-bos">
        <div class="bild-bos-ikon">🔔</div>
        <div>Şu an bir şey olmuyor.</div>
        <div class="bild-bos-alt">Mod paketi kurulumu, güncellemeler ve diğer haberler burada gözükür.</div>
      </div>`}
  `,i.querySelector(".bild-temizle")?.addEventListener("click",t=>{t.stopPropagation(),xv()}),i.querySelector(".bild-kapat")?.addEventListener("click",t=>{t.stopPropagation(),Nf()})}function bc(i){const e=document.querySelector("#tb-pack");e&&(e.classList.toggle("bild-var",i),e.title=i?"Yeni bildirgin var — kutuyu aç":"Bildirimler — kurulum durumu ve diğer haberler")}function Sv(){const i=xc().filter(e=>!e.okundu).length;bc(i>0)}window.__BILDIRIM__={ekle:Wa,acKapa:Uf,baslat:Ms,kapat:Nf};const ZM=Object.freeze(Object.defineProperty({__proto__:null,bildirimAcKapa:Uf,bildirimEkle:Wa,bildirimKapat:Nf,bildirimKutuBaslat:Ms,bildirimOkundu:yv,bildirimTemizle:xv,bildirimZilIlkDurum:Sv},Symbol.toStringTag,{value:"Module"})),kv=[{adim:1,ad:"Paket indiriliyor",aciklama:"sunucudan paket dosyası alınıyor"},{adim:2,ad:"Paket açılıyor",aciklama:"sürüm / yükleyici bilgisi okunuyor"},{adim:3,ad:"Yapılandırma dosyaları",aciklama:"paketin kendi ayarları yazılıyor"},{adim:4,ad:"Modlar indiriliyor",aciklama:"her mod ayrı indirilip mods/ bırakılıyor"},{adim:5,ad:"Yükleyici kuruluyor",aciklama:"Fabric/Forge/NeoForge profili hazırlanıyor"},{adim:6,ad:"Oyun dosyaları",aciklama:"sürüm kurulumu: kütüphaneler + assetler + java"},{adim:7,ad:"YIKIM modu",aciklama:"launcher çekirdeği kuruluma bağlanıyor"},{adim:8,ad:"Hazır",aciklama:"kurulum oynanabilir"}],fn=new Map;let $p=null,Zl=null;const JM=4;function jM(i,e,t){const n=e>0?`${i}/${e}`:"";return t&&n?`${n} · ${t}`:t||n}function Do(i,e=""){let t=fn.get(e);if(t){t.kapandi=!1,t.bitti=!1;for(const a of t.satirlar.values())a.classList.remove("pk-bitti","pk-aktif","pk-hata","pk-atlandi"),a.classList.add("pk-bekliyor");t.root.classList.remove("pk-gizli","pk-acik","pk-bitti"),t.root.style.order="0"}else for(t=eE(e),fn.set(e,t),t.root.classList.remove("pk-gizli"),t.root.style.order="0";fn.size>JM;){const a=[...fn.entries()].find(([,r])=>r!==t&&r.bitti);if(!a)break;a[1].kapandi=!0,a[1].root.classList.add("pk-gizli"),fn.delete(a[0])}const n=t.root.querySelector(".pk-baslik");n.textContent=i,t.root.querySelector(".pk-ozet").textContent="Kurulum başlıyor…",t.root.style.removeProperty("color"),t.bar.style.transform="scaleX(0.01)",t.yuzde.textContent="%0",$p||gn("pack-step",a=>{const r=a?.payload;if(!r)return;const s=typeof r.kimlik=="string"?r.kimlik:"",o=s?[fn.get(s)]:[...fn.values()];for(const c of o)c&&wv(c,r.adim,r.durum,r.done||0,r.total||0,r.ayrinti||"",r.percent||0)}).then(a=>{$p=a}),Of("kurulum"),Wa("kurulum",i,"Kurulum başladı — adım adım sağ altta gösterilecek")}function Mv(i=""){const e=fn.get(i);e&&e.root.classList.toggle("pk-acik")}function Es(i=""){const e=fn.get(i);if(!e)return;for(const[a,r]of e.satirlar)r.classList.contains("pk-bekliyor")&&a<8&&(r.classList.remove("pk-bekliyor"),r.classList.add("pk-atlandi"));const t=e.satirlar.get(8);t&&(t.classList.remove("pk-bekliyor","pk-aktif"),t.classList.add("pk-bitti")),e.bar.style.transform="scaleX(1)",e.yuzde.textContent="%100";const n=e.root.querySelector(".pk-ozet");n.textContent="Kurulum tamam — Kurulumlar'dan oynayabilirsin",e.bitti=!0,e.root.classList.add("pk-bitti"),e.kapatZamani=Date.now()+6e3,Of("bitti"),Wa("kurulum","Kurulum tamamlandı","Paket oynanmaya hazır — Kurulumlar sayfasından başlatabilirsin"),Zl===null&&Tv()}function QM(i){for(const[e,t]of fn)i&&!e.includes(i)||t.bitti||(t.bitti=!0,t.kapatZamani=Date.now()+4e3,t.root.classList.add("pk-bitti"),Zl===null&&Tv())}function ws(i,e=""){const t=fn.get(e);if(!t)return;const n=t.root.querySelector(".pk-ozet");n.textContent=`Kurulum durdu: ${i}`,n.style.color="var(--danger)";const a=[...t.satirlar.values()].find(r=>r.classList.contains("pk-aktif"));a&&(a.classList.remove("pk-aktif"),a.classList.add("pk-hata")),t.root.classList.add("pk-acik"),Of("kurulum"),Wa("sistem","Kurulum durdu",i.length>120?`${i.slice(0,120)}…`:i)}function Ev(i,e,t,n,a,r=""){const s=fn.get(r);s&&wv(s,i,e,t,n,a,0)}function Of(i){const e=document.querySelector("#tb-pack");e&&(e.classList.toggle("bild-var",i!=="yok"),e.title=i==="bitti"?"Kurulum tamamlandı — durumu göster":i==="kurulum"?"Mod paketi kuruluyor — durumu göster":"Bildirimler — kurulum durumu ve diğer haberler")}function wv(i,e,t,n,a,r,s){if(!i.satirlar.has(e))return;const o=i.satirlar.get(e);o.classList.remove("pk-bekliyor","pk-aktif","pk-bitti","pk-hata","pk-atlandi"),o.classList.add(`pk-${t}`);const c=i.detaylar.get(e);c.textContent=jM(n,a,r);const l=s||(e-1)/8*100;i.bar.style.transform=`scaleX(${Math.min(1,Math.max(.01,l/100))})`,i.yuzde.textContent=`%${Math.min(100,Math.round(l))}`;const d=i.root.querySelector(".pk-ozet");d.style.removeProperty("color"),d.textContent=r?`${Gp(e)} · ${r}`:Gp(e),e===8&&(t==="bitti"||t==="hata")&&(t==="bitti"?Es(i.kimlik):ws(d.textContent,i.kimlik))}function Gp(i){return kv.find(e=>e.adim===i)?.ad||`Adım ${i}`}function eE(i){const e=document.createElement("div");e.className="pk-kart pk-gizli",e.dataset.kimlik=i,e.setAttribute("role","status"),e.setAttribute("aria-live","polite"),e.innerHTML=`
    <div class="pk-kafa">
      <div class="pk-kafa-sol">
        <div class="pk-baslik">Paket kurulumu</div>
        <div class="pk-yuzde-satir">
          <div class="progressbar pk-bar"><div></div></div>
          <span class="pk-yuzde">%0</span>
        </div>
      </div>
      <button class="pk-kapat" title="Kapat (kurulum arkada sürer)">✕</button>
    </div>
    <div class="pk-adimlar"></div>
    <div class="pk-ozet">Kurulum başlıyor…</div>
  `;const t=new Map,n=new Map,a=e.querySelector(".pk-adimlar");for(const s of kv){const o=document.createElement("div");o.className="pk-adim pk-bekliyor",o.dataset.adim=String(s.adim),o.innerHTML=`
      <span class="pk-isaret"></span>
      <span class="pk-ad">${s.ad}</span>
      <span class="pk-detay">${s.aciklama}</span>
    `,a.appendChild(o),t.set(s.adim,o),n.set(s.adim,o.querySelector(".pk-detay"))}const r={root:e,kimlik:i,satirlar:t,detaylar:n,bar:e.querySelector(".pk-bar > div"),yuzde:e.querySelector(".pk-yuzde"),ozet:e.querySelector(".pk-ozet"),kapandi:!1,kapatZamani:0,bitti:!1};return e.querySelector(".pk-kafa").addEventListener("click",()=>Mv(i)),e.querySelector(".pk-kapat")?.addEventListener("click",s=>{s.stopPropagation(),r.kapandi=!0,r.root.classList.add("pk-gizli"),X("Kurulum arkada sürüyor","ok")}),document.body.appendChild(e),r}function Tv(){const i=setInterval(()=>{const e=[...fn.values()].filter(t=>!t.kapandi);if(e.length===0){clearInterval(i),Zl=null;return}for(const t of e)t.bitti&&Date.now()>t.kapatZamani&&(t.kapandi=!0,t.root.classList.add("pk-gizli"),fn.delete(t.kimlik))},1200);Zl=i}function Av(){for(const[,i]of fn)i.kapandi=!0,i.root.classList.add("pk-gizli");fn.clear()}window.__PACK_KART_TEST__=Ev;window.__PACK_KART_KAPAT__=Av;const Rv=Object.freeze(Object.defineProperty({__proto__:null,packKartBaslat:Do,packKartBitti:QM,packKartDegistir:Mv,packKartHata:ws,packKartTamam:Es,packKartTest:Ev,packKartlariKapat:Av},Symbol.toStringTag,{value:"Module"})),tE=60;function Lv(i){return!Number.isFinite(i)||i<tE?0:i>=200?8192:i>=120?7168:5120}function Ff(i,e,t){const n=Lv(i);if(!n)return 0;const a=Math.max(1024,Math.floor((t>0?t:16384)/2)),r=Math.max(1024,Math.floor(a/512)*512),s=Math.min(n,r);return e>=s?0:s}async function Bf(i){try{const{invoke:e,state:t}=await ct(async()=>{const{invoke:o,state:c}=await Promise.resolve().then(()=>St);return{invoke:o,state:c}},void 0),n=await e("cmd_list_mods",{instanceId:i.id});if(!Array.isArray(n))return;const a=Number(i.ram_mb)||4096,r=Ff(n.length,a,t.sys?.total_ram_mb||0);if(!r)return;const{bildirimEkle:s}=await ct(async()=>{const{bildirimEkle:o}=await Promise.resolve().then(()=>ZM);return{bildirimEkle:o}},void 0);s("kurulum","Bellek düşük kalabilir",`${i.name||"Paket"}: ${n.length} mod • önerilen ${r} MB, şu an ${a} MB. Kurulumlar → bu kurulum → Java & Args sekmesinden bellek sürgüsünü artırabilirsin. (Otomatik değiştirilmedi.)`)}catch{}}function Jl(i,e,t,n){const a=Ff(i,e,t);return a?`
    <div class="ram-uyari">
      <b>Bu pakette ${i} mod var.</b>
      Önerilen bellek <b>${a} MB</b>, şu an <b>${e} MB</b>.
      ${n==="ayar"?"Bellek sürgüsünü yukarı çekmek takılmayı azaltır; sistem RAM'inin en fazla yarısını ayır.":"Kurulumlar → bu kurulum → Java & Args sekmesindeki bellek sürgüsünden artırabilirsin."}
    </div>`:""}const nE=Object.freeze(Object.defineProperty({__proto__:null,hamOneriRamMb:Lv,onerilenRamMb:Ff,paketSonrasiRamUyarisi:Bf,ramUyarisiHtml:Jl},Symbol.toStringTag,{value:"Module"})),Vp={fabric:'<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" clip-rule="evenodd" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path fill="none" stroke="currentColor" stroke-width="23" d="m820 761-85.6-87.6c-4.6-4.7-10.4-9.6-25.9 1-19.9 13.6-8.4 21.9-5.2 25.4 8.2 9 84.1 89 97.2 104 2.5 2.8-20.3-22.5-6.5-39.7 5.4-7 18-12 26-3 6.5 7.3 10.7 18-3.4 29.7-24.7 20.4-102 82.4-127 103-12.5 10.3-28.5 2.3-35.8-6-7.5-8.9-30.6-34.6-51.3-58.2-5.5-6.3-4.1-19.6 2.3-25 35-30.3 91.9-73.8 111.9-90.8" transform="matrix(.08671 0 0 .0867 -49.8 -56)"/></svg>',vanilla:'<svg viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z" clip-rule="evenodd"/></svg>',forge:'<svg xml:space="preserve" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5" clip-rule="evenodd" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path fill="none" stroke="currentColor" stroke-width="2" d="M2 7.5h8v-2h12v2s-7 3.4-7 6 3.1 3.1 3.1 3.1l.9 3.9H5l1-4.1s3.8.1 4-2.9c.2-2.7-6.5-.7-8-6Z"></path></svg>',neoforge:'<svg enable-background="new 0 0 24 24" version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m12 19.2v2m0-2v2"/><path d="m8.4 1.3c0.5 1.5 0.7 3 0.1 4.6-0.2 0.5-0.9 1.5-1.6 1.5m8.7-6.1c-0.5 1.5-0.7 3-0.1 4.6 0.2 0.6 0.9 1.5 1.6 1.5"/><path d="m3.6 15.8h-1.7m18.5 0h1.7"/><path d="m3.2 12.1h-1.7m19.3 0h1.8"/><path d="m8.1 12.7v1.6m7.8-1.6v1.6"/><path d="m10.8 18h1.2m0 1.2-1.2-1.2m2.4 0h-1.2m0 1.2 1.2-1.2"/><path d="m4 9.7c-0.5 1.2-0.8 2.4-0.8 3.7 0 3.1 2.9 6.3 5.3 8.2 0.9 0.7 2.2 1.1 3.4 1.1m0.1-17.8c-1.1 0-2.1 0.2-3.2 0.7m11.2 4.1c0.5 1.2 0.8 2.4 0.8 3.7 0 3.1-2.9 6.3-5.3 8.2-0.9 0.7-2.2 1.1-3.4 1.1m-0.1-17.8c1.1 0 2.1 0.2 3.2 0.7"/><path d="m4 9.7c-0.2-1.8-0.3-3.7 0.5-5.5s2.2-2.6 3.9-3m11.6 8.5c0.2-1.9 0.3-3.7-0.5-5.5s-2.2-2.6-3.9-3"/><path d="m12 21.2-2.4 0.4m2.4-0.4 2.4 0.4"/></g></svg>',quilt:'<svg xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" clip-rule="evenodd" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><defs><path id="qlt" fill="none" stroke="currentColor" stroke-width="65.6" d="M442.5 233.9c0-6.4-5.2-11.6-11.6-11.6h-197c-6.4 0-11.6 5.2-11.6 11.6v197c0 6.4 5.2 11.6 11.6 11.6h197c6.4 0 11.6-5.2 11.6-11.7v-197Z"></path></defs><path fill="none" d="M0 0h24v24H0z"></path><use xlink:href="#qlt" stroke-width="65.6" transform="matrix(.03053 0 0 .03046 -3.2 -3.2)"></use><use xlink:href="#qlt" stroke-width="65.6" transform="matrix(.03053 0 0 .03046 -3.2 7)"></use><use xlink:href="#qlt" stroke-width="65.6" transform="matrix(.03053 0 0 .03046 6.9 -3.2)"></use><path fill="none" stroke="currentColor" stroke-width="70.4" d="M442.5 234.8c0-7-5.6-12.5-12.5-12.5H234.7c-6.8 0-12.4 5.6-12.4 12.5V430c0 6.9 5.6 12.5 12.4 12.5H430c6.9 0 12.5-5.6 12.5-12.5V234.8Z" transform="rotate(45 3.5 24) scale(.02843 .02835)"></path></svg>'};function wd(i){return Vp[i]||Vp.vanilla}let Xn=null;function iE(i){const e=Mt(i),t=i.toLowerCase();return t.endsWith(".mp4")||t.endsWith(".webm")?`<div class="inst-cover video-cover"><video src="${e}" autoplay loop muted playsinline disablepictureinpicture preload="metadata"></video></div>`:t.endsWith(".gif")?`<div class="inst-cover gif-cover"><img src="${e}" draggable="false" alt="" /></div>`:`<div class="inst-cover" style="background-image:url('${e}')"></div>`}function aE(i){const e=i.querySelectorAll(".video-cover video");if(!e.length)return;const t=new IntersectionObserver(n=>{for(const a of n){const r=a.target;a.isIntersecting?r.play().catch(()=>{}):r.pause()}},{threshold:.05});e.forEach(n=>t.observe(n))}function qp(i,e){return Promise.race([i.catch(()=>null),new Promise(t=>setTimeout(()=>t(null),e))])}function rE(i){let e;if(Hn.param&&Hn.param.includes("|")){const[t,n]=Hn.param.split("|");Hn.param=t,e=n}if(Hn.param&&le.instances.find(t=>t.id===Hn.param)){Xn=Hn.param,Hn.param=void 0,Mo(i,Xn,e);return}if(Xn&&le.instances.find(t=>t.id===Xn)){Mo(i,Xn,e);return}jl(i)}function jl(i){i.innerHTML=`
    <div class="page-wrap">
    <div class="page-header anim-fade-up row-between">
      <div>
        <h1>Paketler</h1>
        <p>Kurulumlarını yönet, yeni profiller oluştur.</p>
      </div>
      <div style="display:flex; gap:8px">
        <button class="btn ghost" id="btn-import" title=".yikimpack / .mrpack / .zip paket dosyası içe aktar">${V("box")} Paket İçe Aktar</button>
        <button class="btn ghost" id="btn-export" title="Bu kurulumu .yikimpack olarak paylaş">${V("share")} Paketi Paylaş</button>
        <button class="btn primary" id="btn-new">${V("plus")} Yeni Kurulum</button>
      </div>
    </div>
    <div class="inst-grid" id="inst-grid"></div>
    <div class="exp-popular" id="inst-popular">
      <div class="section-head">
        <h2 class="dim-cap">EN ÇOK İNDİRİLEN PAKETLER</h2>
      </div>
      <div class="popular-strip" id="popular-strip"><div class="spinner" style="margin:26px auto"></div></div>
    </div>
    </div>
  `;const e=i.querySelector("#inst-grid");if(!le.instances.length)e.innerHTML=`
      <div class="empty-state">
        ${V("play")}
        <h3 style="margin-top:14px">İlk kurulumunu oluştur</h3>
        <p style="margin:8px 0 16px">Sürüm ve modloader'ı seç — Java dahil gerisini biz hallederiz.</p>
        <button class="btn primary lg" id="empty-new">Kurulum Oluştur</button>
      </div>`,e.querySelector("#empty-new")?.addEventListener("click",()=>Xp());else{for(const t of le.instances){const a=t.icon&&(t.icon.includes("/")||t.icon.includes("\\"))?`<img src="${Mt(t.icon)}" draggable="false" onerror="window.__iconFallback && window.__iconFallback(this,'mod-fallback','play')" />`:t.icon||"🔥",r=Je.activeId===t.id,s=hi(`
        <div class="inst-card card hover ${t.cover?"has-cover":""}" data-id="${t.id}" title="${t.name} — yönet">
          ${t.cover?iE(t.cover):""}
          <div class="inst-top">
            <div class="inst-icon">${a}</div>
            <div class="inst-info">
              <h3>${t.name}</h3>
              <div class="inst-meta">
                <span class="chip gray">${Pv(t.mod_loader)} ${t.mc_version}</span>
                ${r?'<span class="chip green">oynuyor</span>':""}
              </div>
            </div>
            ${oo(r?"warn":"ok","card-lamp")}
          </div>
          <div class="inst-stats tnum">
            <span title="Bellek">${t.ram_mb} MB</span>
            <span title="Son oynanış">Son: ${t.last_played?new Date(t.last_played).toLocaleDateString("tr-TR"):"hiç"}</span>
            <span title="Toplam süre">${fs(t.playtime_ms)}</span>
          </div>
          <div class="inst-actions">
            <button class="btn primary card-play" ${Je.activeId?"disabled":""}>
              ${Je.activeId?`${V("clock")} Açık`:`${V("play")} Oyna`}
            </button>
            ${r?`<button class="btn danger card-stop" title="Oyunu kapat">${V("stop")} Durdur</button>`:""}
            <button class="btn ghost card-manage">Yönet</button>
          </div>
        </div>
      `);s.addEventListener("click",async o=>{if(o.target.closest(".card-play")){if(!le.accounts.length)return zn();const{launchInstance:c}=await ct(async()=>{const{launchInstance:l}=await Promise.resolve().then(()=>St);return{launchInstance:l}},void 0);c(t.id);return}if(o.target.closest(".card-stop")){try{await te("cmd_kill_game")}catch{}const{refreshState:c}=await ct(async()=>{const{refreshState:l}=await Promise.resolve().then(()=>St);return{refreshState:l}},void 0);await c(!0);return}Xn=t.id,Mo(i,t.id)}),e.appendChild(s)}_f(Array.from(e.querySelectorAll(".inst-card"))),aE(e)}i.querySelector("#btn-new")?.addEventListener("click",()=>Xp()),i.querySelector("#btn-import")?.addEventListener("click",()=>sE().catch(()=>{})),i.querySelector("#btn-export")?.addEventListener("click",()=>oE()),lE()}async function sE(){const i=await te("cmd_pick_pack_file");if(i){Do("Yerel paket kurulumu");try{const e=await te("cmd_import_pack_file",{path:i}),{refreshState:t}=await ct(async()=>{const{refreshState:n}=await Promise.resolve().then(()=>St);return{refreshState:n}},void 0);await t(),Es(),X(`${e.name||"Paket"} kuruldu!`,"ok"),je("instances"),Bf(e)}catch(e){ws(String(e)),X(`Paket içe aktarılamadı: ${e}`,"err")}}}async function oE(){const{openModal:i,toast:e}=await ct(async()=>{const{openModal:r,toast:s}=await Promise.resolve().then(()=>St);return{openModal:r,toast:s}},void 0),{root:t,close:n}=i(`
    <h2>Paketi Paylaş</h2>
    <div class="sub">Hangi kurulumu paylaşmak istiyorsun?</div>
    <div class="share-picker">
      ${le.instances.map(r=>`
        <button class="share-pick ${r.id===(Xn||le.instances[0]?.id)?"sel":""}" data-id="${r.id}">
          <span class="sp-ik">${r.mod_loader==="fabric"?"🧵":r.mod_loader==="neoforge"?"⚙️":"📦"}</span>
          <span class="sp-ad">${r.name}</span>
          <span class="sp-meta">${r.mod_loader} ${r.mc_version}</span>
        </button>`).join("")}
    </div>
    <div style="display:flex; gap:8px; margin-top:16px">
      <button class="btn primary" id="sh-devam">Devam</button>
      <button class="btn ghost" id="sh-no">İptal</button>
    </div>
  `);t.querySelector("#sh-no")?.addEventListener("click",n);let a=Xn||le.instances[0]?.id||"";t.querySelectorAll(".share-pick").forEach(r=>{r.addEventListener("click",()=>{t.querySelectorAll(".share-pick").forEach(s=>s.classList.remove("sel")),r.classList.add("sel"),a=r.dataset.id})}),t.querySelector("#sh-devam")?.addEventListener("click",()=>{const r=le.instances.find(s=>s.id===a);if(!r){e("Bir kurulum seç","err");return}n(),Cv(r.id,r.name)})}async function Cv(i,e){const t=le.instances.find(c=>c.id===i);if(!t)return;const{openModal:n,toast:a}=await ct(async()=>{const{openModal:c,toast:l}=await Promise.resolve().then(()=>St);return{openModal:c,toast:l}},void 0),{root:r,close:s}=n(`
    <h2>Paketi Paylaş</h2>
    <div class="sub"><b>${e||t.name}</b> — .yikimpack dosyası oluştur. Bu dosyaya çift tıklayan
    herkes YIKIMLient ile kurulumu yapabilir.</div>
    <div class="share-modlar">
      <button class="share-mod sel" data-ultra="1">
        <b>Küçük paket</b>
        <em>Modlar gömülmez, Modrinth bağlantısı yazılır — birkaç MB. (Modrinth'e erişim şart.)</em>
      </button>
      <button class="share-mod" data-ultra="0">
        <b>Tam paket</b>
        <em>Tüm mod dosyaları gömülür — büyük olur ama bağlantı önemli değil.</em>
      </button>
    </div>
    <div class="share-kutular">
      <label class="share-kutu kapali"><input type="checkbox" checked disabled /><span>Modlar<em>her zaman</em></span></label>
      <label class="share-kutu"><input type="checkbox" id="sh-config" checked /><span>Yapılandırma dosyaları<em>config/</em></span></label>
      <label class="share-kutu"><input type="checkbox" id="sh-saves" /><span>Dünyalar<em>saves/</em></span></label>
      <label class="share-kutu"><input type="checkbox" id="sh-rp" /><span>Doku paketleri<em>resourcepacks/</em></span></label>
      <label class="share-kutu"><input type="checkbox" id="sh-sp" /><span>Shader paketleri<em>shaderpacks/</em></span></label>
      <label class="share-kutu"><input type="checkbox" id="sh-opts" /><span>Oyun ayarları<em>options.txt, sunucu listesi</em></span></label>
    </div>
    <p class="share-not">Masaüstüne kaydedilir. "Küçük paket"te sadece ayarlar/dünyalar dosya olarak gider.</p>
    <div style="display:flex; gap:8px; margin-top:16px">
      <button class="btn primary" id="sh-go">Oluştur</button>
      <button class="btn ghost" id="sh-no">İptal</button>
    </div>
  `);let o=!0;r.querySelectorAll(".share-mod").forEach(c=>{c.addEventListener("click",()=>{r.querySelectorAll(".share-mod").forEach(l=>l.classList.remove("sel")),c.classList.add("sel"),o=c.dataset.ultra==="1"})}),r.querySelector("#sh-no")?.addEventListener("click",s),r.querySelector("#sh-go")?.addEventListener("click",async()=>{const c={config:r.querySelector("#sh-config").checked,saves:r.querySelector("#sh-saves").checked,resourcepacks:r.querySelector("#sh-rp").checked,shaderpacks:r.querySelector("#sh-sp").checked,options:r.querySelector("#sh-opts").checked,ultraHafif:o};s(),Do(`${e||t.name} paketleniyor`,`aktar:${i}`);try{const l=await te("cmd_export_yikimpack",{instanceId:i,secenek:c});Es(`aktar:${i}`),Wa("kurulum","Paylaşım paketi hazır",`${e||t.name}.yikimpack — ${l}`),a(`Paket hazır: ${l}`,"ok")}catch(l){ws(String(l),`aktar:${i}`),Wa("sistem","Paket oluşturulamadı",String(l))}})}async function lE(){const i=document.querySelector("#popular-strip");if(i)try{const e=await te("cmd_repos_popular",{kind:"modpack",loader:""});i.innerHTML="";for(const t of e){const n=hi(`
        <div class="card hover popular-card">
          ${t.icon_url?`<img class="pc-icon" src="${t.icon_url}" loading="lazy" draggable="false" onerror="window.__iconFallback && window.__iconFallback(this,'pc-icon ph','box')" />`:`<div class="pc-icon ph">${V("box")}</div>`}
          <div class="pc-body">
            <div class="pc-title">${t.title}</div>
            <div class="pc-meta">${V("dl")} ${cE(t.downloads)}</div>
          </div>
        </div>
      `);n.addEventListener("click",()=>je("explore","kind:modpack")),i.appendChild(n)}}catch{i.innerHTML='<p class="pc-fail">Popüler paketler yüklenemedi.</p>'}}function cE(i){return i>=1e6?`${(i/1e6).toFixed(1)}M`:i>=1e3?`${(i/1e3).toFixed(0)}K`:String(i)}function Pv(i){return{vanilla:"Vanilla",fabric:"Fabric",forge:"Forge"}[i]||i}function Mo(i,e,t){const n=le.instances.find(l=>l.id===e);if(!n){Xn=null,jl(i);return}const r=n.icon&&(n.icon.includes("/")||n.icon.includes("\\"))?`<img src="${Mt(n.icon)}" draggable="false" onerror="window.__iconFallback && window.__iconFallback(this,'mod-fallback','play')" />`:n.icon||"🔥";i.innerHTML=`
    <div class="detail-header anim-fade-up">
      <button class="btn ghost back-btn" title="Geri">${V("back")}</button>
      <div class="inst-icon xl">${r}</div>
      <div>
        <h1>${n.name}</h1>
        <div class="inst-meta">
          <span class="chip gray">${Pv(n.mod_loader)} ${n.mc_version}</span>
          <span class="chip gray">${n.ram_mb} MB RAM</span>
          <span class="chip gray">${fs(n.playtime_ms)} oynanış</span>
        </div>
      </div>
      <div style="flex:1"></div>
      <button class="btn primary lg" id="detail-play" ${Je.activeId?"disabled":""}>${Je.activeId?`${V("clock")} Oyun Açık`:`${V("play")} Oyna`}</button>
      ${Je.activeId===n.id?`<button class="btn danger lg" id="detail-stop" title="Oyunu kapat">${V("stop")} Durdur</button>`:""}
    </div>
    <div class="tabs anim-fade-up">
      <button class="tab active" data-tab="mods">${V("puzzle")} Modlar</button>
      <button class="tab" data-tab="content">${V("box")} Doku & Dünya</button>
      <button class="tab" data-tab="java">${V("mug")} Java</button>
      <button class="tab" data-tab="log">${V("term")} Log</button>
      <button class="tab" data-tab="analytics">${V("chart")} Analiz</button>
      <button class="tab" data-tab="settings">${V("gear")} Ayarlar</button>
    </div>
    <div class="tab-content" id="tab-content"></div>
  `,i.querySelector(".back-btn")?.addEventListener("click",()=>{Xn=null,jl(i)}),i.querySelector("#detail-play")?.addEventListener("click",async()=>{if(!le.accounts.length)return zn();const{launchInstance:l}=await ct(async()=>{const{launchInstance:d}=await Promise.resolve().then(()=>St);return{launchInstance:d}},void 0);l(n.id)}),i.querySelector("#detail-stop")?.addEventListener("click",async()=>{try{await te("cmd_kill_game")}catch{}const{refreshState:l}=await ct(async()=>{const{refreshState:d}=await Promise.resolve().then(()=>St);return{refreshState:d}},void 0);await l(!0)});const s=["mods","content","java","log","analytics","settings"];i.querySelectorAll(".tab").forEach(l=>{l.addEventListener("click",()=>{i.querySelectorAll(".tab").forEach(u=>u.classList.remove("active")),l.classList.add("active");const d=l.dataset.tab,f=i.querySelector("#tab-content");({mods:Hf,content:dE,java:Dv,log:fE,analytics:hE,settings:pE})[d](f,n)})});const o=t&&s.includes(t)?t:"mods";([...i.querySelectorAll(".tab")].find(l=>l.dataset.tab===o)??i.querySelectorAll(".tab")[0]).click()}let Ji="resourcepacks";const Wp=[{id:"resourcepacks",label:"Texturepackler",hint:"Kaynak paketleri (.zip)"},{id:"shaderpacks",label:"Shaderlar",hint:"Iris/OptiFine shader'ları (.zip)"},{id:"saves",label:"Dünyalar",hint:"Tek oyunculu dünyalar (klasör)"}];async function dE(i,e){const t=()=>Wp.find(a=>a.id===Ji);i.innerHTML='<div class="spinner" style="margin:40px auto"></div>';const n=async()=>{let a=[];try{a=await te("cmd_list_content_files",{instanceId:e.id,kind:Ji})}catch{}const r=t();i.innerHTML=`
      <div class="mods-toolbar" style="flex-wrap:wrap">
        <div class="kind-toggle" id="content-kinds">
          ${Wp.map(o=>`<button class="kt ${o.id===Ji?"sel":""}" data-k="${o.id}">${o.label}</button>`).join("")}
        </div>
        <span style="flex:1"></span>
        <button class="btn ghost sm" id="content-open">${V("folder")} Klasörü Aç</button>
        <button class="btn ghost sm" id="content-search" title="Modrinth'te ara ve indir">${V("search")} Keşfet'te Ara</button>
        <button class="btn primary sm" id="content-add">${V("plus")} ${r.id==="saves"?"Dünya Ekle":"Paket Ekle"}</button>
      </div>
      <div class="mod-list" id="content-list"></div>
    `,i.querySelectorAll("#content-kinds .kt").forEach(o=>{o.addEventListener("click",()=>{Ji=o.dataset.k,n()})}),i.querySelector("#content-open")?.addEventListener("click",()=>te("cmd_open_content_folder",{instanceId:e.id,kind:Ji}).catch(()=>{})),i.querySelector("#content-search")?.addEventListener("click",()=>{const o=Ji==="resourcepacks"?"resourcepack":Ji==="shaderpacks"?"shader":"world";Hn.param=`kind:${o}`,je("explore")}),i.querySelector("#content-add")?.addEventListener("click",async()=>{try{await te("cmd_add_content_file",{instanceId:e.id,kind:Ji}),await n()}catch(o){X(`Eklenemedi: ${o}`,"err")}});const s=i.querySelector("#content-list");if(!a.length){s.innerHTML=`<div class="card" style="text-align:center; padding:34px">
        <p>${r.hint}<br /><span style="color:var(--text-faint); font-size:12px">Henüz içerik yok — yukarıdan ekleyebilir ya da dosyayı bu sayfaya sürükleyip bırakabilirsin.</span></p></div>`;return}s.innerHTML="";for(const o of a){const c=o.icon?`<img alt="" draggable="false" class="row-face" width="40" height="40" src="${Mt(o.icon)}" />`:`<div style="font-size:22px">${o.is_dir?"🌍":"📦"}</div>`,l=hi(`
        <div class="card mod-row" style="display:flex; align-items:center; gap:12px; padding:12px 14px">
          ${c}
          <div style="flex:1; min-width:0">
            <div style="font-weight:600; font-size:13px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap">${o.name}</div>
            <div style="color:var(--text-faint); font-size:11.5px">${o.is_dir?"dünya":Oo(o.size)}</div>
          </div>
          <button class="btn ghost sm" data-del="${o.name}" title="Sil">${V("trash")}</button>
        </div>
      `);l.querySelector("[data-del]")?.addEventListener("click",async d=>{const f=d.currentTarget.dataset.del;if(confirm(`"${f}" silinsin mi?`))try{await te("cmd_delete_content_file",{instanceId:e.id,kind:Ji,name:f}),await n()}catch(u){X(`Silinemedi: ${u}`,"err")}}),s.appendChild(l)}};await n()}async function Hf(i,e){i.innerHTML='<div class="spinner" style="margin:40px auto"></div>';let t=[];try{t=await te("cmd_list_mods",{instanceId:e.id})}catch{}let n={},a={};i.innerHTML=`
    <div class="mods-toolbar">
      <input class="input search-in" id="mod-search" placeholder="Mod ara…" />
      <button class="btn primary" id="mod-add">${V("plus")} Mod Ekle</button>
      <button class="btn upd-all" id="mod-upd-all" hidden>${V("refresh")} Tümünü Güncelle</button>
    </div>
    <div class="mod-list" id="mod-list"></div>
  `;const r=o=>{const c=t.filter(d=>d.filename.toLowerCase().includes(o.toLowerCase())),l=i.querySelector("#mod-list");l.innerHTML="",c.length||(l.innerHTML=`<div class="card" style="text-align:center; padding:34px">
        <p>${o?"Eşleşen mod yok.":"Bu kurulumda henüz mod yok."}</p></div>`);for(const d of c){const f=n[d.filename],u=f?`<img class="mod-logo" src="${f}" loading="lazy" draggable="false" onerror="window.__iconFallback && window.__iconFallback(this,'mod-logo ph','puzzle')" />`:`<span class="mod-logo ph">${V("puzzle")}</span>`,h=hi(`
        <div class="mod-row card">
          <span class="dot ${d.enabled?"on":"off"}"></span>
          ${u}
          <div class="mod-name">
            <div class="mn">${d.filename.replace(".jar","")}</div>
            <div class="ms">${Oo(d.size)}</div>
          </div>
          <div style="flex:1"></div>
          ${a[d.filename]?`<button class="btn primary sm upd-mod" data-fn="${d.filename}" data-url="${a[d.filename].url}" data-ad="${a[d.filename].yeni_ad}" title="Yeni sürüm: ${a[d.filename].surum}">Güncelle</button>`:""}
          <div class="switch ${d.enabled?"on":""}" data-fn="${d.filename}" data-en="${d.enabled}"></div>
          <button class="btn danger sm del-mod" data-fn="${d.filename}">Sil</button>
        </div>
      `);h.querySelector(".switch")?.addEventListener("click",async g=>{const m=g.currentTarget,p=m.dataset.fn,v=m.dataset.en!=="true";await te("cmd_toggle_mod",{instanceId:e.id,filename:p,enabled:v}),d.enabled=v,r(i.querySelector("#mod-search").value)}),h.querySelector(".upd-mod")?.addEventListener("click",async g=>{const m=g.currentTarget;m.disabled=!0,m.textContent="Güncelleniyor…";try{await te("cmd_update_mod",{instanceId:e.id,filename:m.dataset.fn,url:m.dataset.url,yeniAd:m.dataset.ad}),X("Mod güncellendi"),await Hf(i,e)}catch(p){m.disabled=!1,m.textContent="Güncelle",X(`Güncellenemedi: ${p}`,"err")}}),h.querySelector(".del-mod")?.addEventListener("click",async()=>{await te("cmd_delete_mod",{instanceId:e.id,filename:d.filename}),t=t.filter(g=>g.filename!==d.filename),r(i.querySelector("#mod-search").value),X("Mod silindi")}),l.appendChild(h)}};if(i.querySelector("#mod-search")?.addEventListener("input",o=>{r(o.target.value)}),i.querySelector("#mod-add")?.addEventListener("click",()=>{je("explore",e.id)}),r(""),!t.length)return;const s=()=>i.querySelector("#mod-search")?.value??"";(async()=>{const o=await qp(te("cmd_resolve_mod_icons",{filenames:t.map(l=>l.filename)}),8e3);o&&Object.keys(o).length&&(n=o,r(s()));const c=await qp(te("cmd_check_mod_updates",{instanceId:e.id}),15e3);c&&(a=Object.fromEntries(c.map(l=>[l.filename,l])),r(s()),uE(a,e))})()}function uE(i,e){const t=()=>Object.keys(i).length,n=document.querySelector("#mod-upd-all");if(!n)return;const a=r=>`${V("refresh")} Tümünü Güncelle (${r})`;n.hidden=t()===0,!n.hidden&&(n.innerHTML=a(t()),n.onclick=async()=>{if(n.disabled)return;n.disabled=!0;const r=n.innerHTML;document.querySelectorAll(".upd-mod, #mod-add").forEach(o=>o.disabled=!0);let s=null;try{s=await gn("mod-updates-progress",o=>{const c=o?.payload??{};c.total&&(n.innerHTML=c.done>=c.total?`${V("refresh")} Bitiyor…`:`${V("refresh")} ${c.done+1}/${c.total} güncelleniyor…`)})??null}catch{}try{const o=await te("cmd_update_all_mods",{instanceId:e.id});o?.bos?X("Güncellenecek mod yok"):o?.hata>0?X(`${o.basarili} mod güncellendi, ${o.hata} mod başarısız`,"err"):X(`${o?.basarili??"?"} mod güncellendi ✓`);const c=document.querySelector("#inst-content");c&&await Hf(c,e)}catch(o){X(`Güncellenemedi: ${o}`,"err")}finally{try{s?.()}catch{}n.disabled=!1,n.innerHTML=r,document.querySelectorAll(".upd-mod, #mod-add").forEach(o=>o.disabled=!1)}})}async function Dv(i,e){i.innerHTML='<div class="spinner" style="margin:40px auto"></div>';const t=await te("cmd_list_java_arg_presets");let n=0;try{const u=await te("cmd_list_mods",{instanceId:e.id});Array.isArray(u)&&(n=u.length)}catch{}const a=e.java_preset_id==="ozel",r=u=>u.replace(/&/g,"&amp;").replace(/</g,"&lt;"),s=e.custom_vm_args??(t.find(u=>u.id==="balanced")?.args??[]).join("\\n");i.innerHTML=`
    <div class="java-grid">
      <div class="card">
        <h3>${V("cpu")} Bellek</h3>
        <div class="ram-row">
          <input type="range" min="1024" max="16384" step="512" value="${e.ram_mb}" id="ram-range" style="flex:1" />
          <span class="chip" id="ram-val">${e.ram_mb} MB</span>
        </div>
        <p style="margin-top:8px; font-size:12px; color:var(--text-dim)">Sistem RAM'inin en fazla yarısını ayır. 4 GB çoğu modlu paket için yeterli.</p>
        <div id="ram-uyari-kutu">${Jl(n,e.ram_mb,le.sys?.total_ram_mb||0,"ayar")}</div>
      </div>
      <div class="card">
        <h3>${V("args")} Java Argüman Presetleri</h3>
        <p style="margin-bottom:12px">FPS'e doğrudan etki eden JVM ayarları. Açıklamalarını okuyarak seç.</p>
        <div class="preset-list">
          ${t.map(u=>`
            <div class="preset-row card hover ${e.java_preset_id===u.id?"sel":""}" data-id="${u.id}">
              <div class="preset-head">
                <b>${u.name}</b>
                ${e.java_preset_id===u.id?'<span class="chip">aktif</span>':""}
                <span class="chip gray">${u.recommended_ram_mb} MB öneri</span>
              </div>
              <p>${u.description}</p>
              <details><summary>JVM bayraklarını göster</summary><pre>${u.args.join(`
`).replace(/\{ram_mb\}/g,String(e.ram_mb))}</pre></details>
            </div>`).join("")}
        </div>
      </div>
      <div class="card" id="ozel-card" ${a?"":'style="opacity:0.55"'}>
        <h3>${V("args")} Özel${a?' <span class="chip" style="margin-left:8px">aktif — launcher karışmaz</span>':' <span class="chip gray" style="margin-left:8px">"Özel" preset seçince aktif</span>'}</h3>
        <div class="ozel-grid">
          <label class="ozel-alan">
            <span style="font-size:12px; color:var(--text-dim); display:block; margin-bottom:6px">Chunk mesafesi (renderDistance)</span>
            <input class="input" type="number" min="2" max="32" value="${e.view_distance??12}" id="ozel-vd" ${a?"":"disabled"} />
          </label>
          <div class="ozel-alan">
            <span style="font-size:12px; color:var(--text-dim); display:block; margin-bottom:6px">JVM argümanları — boşluk veya her satıra bir bayrak; {ram_mb} = RAM sürgüsü</span>
            <textarea class="input" id="ozel-args" rows="7" spellcheck="false" style="width:100%; resize:vertical; font-family:var(--font-mono); font-size:11.5px" ${a?"":"disabled"}>${r(s)}</textarea>
          </div>
        </div>
        <div style="display:flex; gap:10px; justify-content:flex-end; margin-top:10px">
          <button class="btn ghost sm" id="ozel-sifirla" ${a?"":"disabled"}>Varsayılana dön</button>
          <button class="btn primary sm" id="ozel-kaydet" ${a?"":"disabled"}>Özel Ayarları Kaydet</button>
        </div>
      </div>
    </div>
  `;const o=i.querySelector("#ram-range"),c=i.querySelector("#ram-uyari-kutu"),l=le.sys?.total_ram_mb||0;o.addEventListener("input",()=>{const u=parseInt(o.value);i.querySelector("#ram-val").textContent=`${u} MB`,c&&(c.innerHTML=Jl(n,u,l,"ayar"))}),o.addEventListener("change",async()=>{await te("cmd_set_instance_ram",{id:e.id,ramMb:parseInt(o.value)}),e.ram_mb=parseInt(o.value),X("RAM güncellendi")}),i.querySelectorAll(".preset-row").forEach(u=>{const h=u.querySelector("details");h?.addEventListener("click",g=>g.stopPropagation()),h?.querySelector("summary")?.addEventListener("click",g=>g.stopPropagation()),u.addEventListener("click",async g=>{if(g.target.closest("details"))return;const m=u.dataset.id;await te("cmd_set_instance_java_preset",{id:e.id,presetId:m}),e.java_preset_id=m;const p=new Set(Array.from(i.querySelectorAll(".preset-row details[open]")).map(v=>v.closest(".preset-row").dataset.id));Dv(i,e),i.querySelectorAll(".preset-row").forEach(v=>{p.has(v.dataset.id)&&(v.querySelector("details").open=!0)}),X("Preset seçildi")})}),i.querySelector("#ozel-kaydet")?.addEventListener("click",async()=>{const u=i.querySelector("#ozel-vd"),h=i.querySelector("#ozel-args"),g=u.value.trim(),m=g===""?null:Math.max(2,Math.min(32,parseInt(g)||12)),p=h.value.trim();await te("cmd_set_instance_custom",{id:e.id,viewDistance:m,customVmArgs:p||null}),e.view_distance=m,e.custom_vm_args=p||null,X("Özel ayarlar kaydedildi — bir sonraki açılışta geçerli")}),i.querySelector("#ozel-sifirla")?.addEventListener("click",()=>{const u=i.querySelector("#ozel-args");u.value=(t.find(h=>h.id==="balanced")?.args??[]).join(`
`)})}async function fE(i,e){i.innerHTML=`
    <div class="card log-card">
      <div class="log-head">
        <h3>${V("term")} Log — ${e.name}</h3>
        <span class="chip gray" id="log-count">0 satır</span>
      </div>
      <div class="log-toolbar">
        <select class="input" id="log-file"><option value="live">Canlı Akış (oyun açıkken)</option></select>
        <input class="input" id="log-search" placeholder="Loglarda ara…" />
      </div>
      <div class="live-log" id="live-log"><div class="log-hint">Yükleniyor…</div></div>
    </div>
  `;const t=i.querySelector("#live-log"),n=i.querySelector("#log-count"),a=i.querySelector("#log-file"),r=i.querySelector("#log-search");let s="live",o=0;const c=[];let l=[];const d=(y,T)=>{n.textContent=T!==void 0&&T!==y?`${T}/${y} satır`:`${y} satır`},f=y=>{const T=document.createElement("div");return T.textContent=y,y.includes("ERROR")||y.includes("Exception")?T.classList.add("err"):y.includes("WARN")&&T.classList.add("warn"),T},u=()=>{const y=r.value.trim().toLowerCase(),T=y?l.filter(b=>b.toLowerCase().includes(y)):l;if(t.innerHTML="",!T.length)t.innerHTML=`<div class="log-hint">${y?"Eşleşen satır yok.":"Log boş görünüyor."}</div>`;else{const b=document.createDocumentFragment();for(const S of T)b.appendChild(f(S));t.appendChild(b)}d(l.length,T.length)},h=()=>{if(s="live",l=[],t.innerHTML="",!c.length)t.innerHTML='<div class="log-hint">Oyun başlatıldığında loglar buraya canlı akar…</div>';else{const y=document.createDocumentFragment();for(const T of c)y.appendChild(f(T));t.appendChild(y),t.scrollTop=t.scrollHeight}d(o)},g=async y=>{s=y,t.innerHTML='<div class="log-hint">Yükleniyor…</div>';try{l=(await te("cmd_read_log",{instanceId:e.id,fileId:y})).split(`
`),u(),t.scrollTop=0}catch(T){t.innerHTML=`<div class="log-hint">Log yüklenemedi: ${String(T)}</div>`}};let m=[];try{m=await te("cmd_list_logs",{instanceId:e.id});const y=new Map;for(const T of m)y.has(T.date)||y.set(T.date,[]),y.get(T.date).push(T);for(const[T,b]of y){const S=document.createElement("optgroup");S.label=T;for(const k of b){const A=document.createElement("option");A.value=k.id;const x=k.label.startsWith("Oturum ")?"#"+(k.label.split("-").pop()||k.label):k.label;A.textContent=`${k.time!=="-"?k.time+" — ":""}${x} (${Oo(k.size)})`,S.appendChild(A)}a.appendChild(S)}}catch{}Je.activeId!==e.id&&m.length?(a.value=m[0].id,g(m[0].id)):h(),a.addEventListener("change",()=>{a.value==="live"?h():g(a.value)}),r.addEventListener("input",()=>{s!=="live"&&u()});const p=await gn("game-log",y=>{s!=="live"&&(a.value="live",h()),t.querySelector(".log-hint")&&(t.innerHTML=""),c.push(y.payload),o++,c.length>500&&c.shift(),t.appendChild(f(y.payload)),d(o),t.scrollTop=t.scrollHeight,t.children.length>500&&t.firstElementChild?.remove()}),v=new MutationObserver(()=>{document.body.contains(t)||(p(),v.disconnect())});v.observe(document.body,{childList:!0,subtree:!0})}async function hE(i,e){i.innerHTML='<div class="spinner" style="margin:40px auto"></div>';const n=(await te("cmd_get_stats")).snapshot,a=n.per_instance_ms[e.id]||0,r=n.sessions?Math.round(a/n.total_playtime_ms*n.sessions):0;i.innerHTML=`
    <div class="stats-cards stagger">
      <div class="card stat-big"><div class="sv">${fs(a)}</div><div class="sl">Bu Kurulumda</div></div>
      <div class="card stat-big"><div class="sv">~${r}</div><div class="sl">Tahmini Oturum</div></div>
      <div class="card stat-big"><div class="sv">${e.last_played?new Date(e.last_played).toLocaleDateString("tr-TR"):"—"}</div><div class="sl">Son Giriş</div></div>
      <div class="card stat-big"><div class="sv">${e.created_at?new Date(e.created_at).toLocaleDateString("tr-TR"):"—"}</div><div class="sl">Kurulum Tarihi</div></div>
    </div>
    <div class="card" style="margin-top:18px">
      <h3>${V("globe")} Sunucu Geçmişi <span style="font-weight:400; color:var(--text-faint); font-size:11.5px">tüm kurulumlar</span></h3>
      ${n.servers.length?n.servers.slice(0,10).map((s,o)=>`
        <div class="server-row">
          <span class="rank">#${o+1}</span>
          <span class="host">${s.host}</span>
          <span class="chip gray">${s.visits} giriş</span>
          <span class="dur">${fs(s.total_ms)}</span>
        </div>`).join(""):'<p style="color:var(--text-dim)">Henüz sunucu geçmişi yok.</p>'}
    </div>
    <div class="card" style="margin-top:18px">
      <h3>${V("chart")} Günlük Dağılım <span style="font-weight:400; color:var(--text-faint); font-size:11.5px">son 14 gün</span></h3>
      <div class="barchart small">
        ${Kp(n.daily_ms).map(s=>`
          <div class="bar-col tooltip-host">
            <div class="bar" style="height:${Math.max(s.ms/Math.max(...Kp(n.daily_ms).map(o=>o.ms),1)*100,s.ms?5:2)}%"></div>
            <div class="bar-lbl">${s.label}</div>
            <div class="tooltip">${s.full} — ${fs(s.ms)}</div>
          </div>`).join("")}
      </div>
    </div>
  `}function Kp(i){const e=[],t=new Date;for(let n=13;n>=0;n--){const a=new Date(t.getFullYear(),t.getMonth(),t.getDate()-n),r=`${a.getFullYear()}-${String(a.getMonth()+1).padStart(2,"0")}-${String(a.getDate()).padStart(2,"0")}`;e.push({label:a.getDate()%3===0?String(a.getDate()):"",ms:i[r]||0,full:r})}return e}async function pE(i,e){const t=r=>r.includes("/")||r.includes("\\"),n=e.icon&&t(e.icon)?`<img src="${Mt(e.icon)}" draggable="false" onerror="window.__iconFallback && window.__iconFallback(this,'mod-fallback','play')" />`:e.icon||"🔥";i.innerHTML=`
    <div class="card">
      <h3>${V("gear")} Kurulum Ayarları</h3>
      <div style="display:flex; flex-direction:column; gap:14px; margin-top:12px">
        <div class="row-between">
          <span>Kurulum adı</span>
          <input class="input" id="set-name" style="width:240px" value="${e.name}" />
        </div>
        <div class="row-between">
          <div class="set-icon-cell">
            <span>İkon</span>
            <span class="set-icon-hint">dosya seç veya emoji yaz</span>
          </div>
          <div style="display:flex; gap:8px; align-items:center">
            <div class="inst-icon inst-icon-preview" id="icon-preview">${n}</div>
            <button class="btn ghost sm" id="pick-icon">${V("image")} Dosyadan Seç</button>
            <input class="input" id="set-icon" style="width:150px" value="${e.icon&&!t(e.icon)?e.icon:""}" maxlength="4" placeholder="emoji" />
          </div>
        </div>
        <div class="row-between">
          <div class="set-icon-cell">
            <span>Kapak fotoğrafı</span>
            <span class="set-icon-hint">kurulum kartının arka planı</span>
          </div>
          <div style="display:flex; gap:8px; align-items:center">
            ${e.cover?`<img class="cover-thumb" src="${Mt(e.cover)}" onerror="this.style.visibility='hidden'" />`:'<span class="cover-thumb empty">—</span>'}
            <button class="btn ghost sm" id="pick-cover">${e.cover?V("image")+" Değiştir":V("image")+" Fotoğraf Seç"}</button>
            ${e.cover?'<button class="btn danger sm" id="clear-cover">Kaldır</button>':""}
          </div>
        </div>
        <div class="row-between">
          <button class="btn ghost" id="open-folder">${V("folder")} Klasörü Aç</button>
          <button class="btn ghost" id="open-mods">${V("puzzle")} mods Klasörü</button>
        </div>
        <div class="row-between">
          <button class="btn ghost" id="dup-inst">${V("copy")} Kopyala</button>
          <button class="btn danger" id="del-inst">${V("trash")} Kurulumu Sil</button>
        </div>
        <div class="row-between">
          <button class="btn primary" id="share-inst">${V("box")} Paketi Paylaş (.yikimpack)</button>
        </div>
        <p class="set-sub">Bu kurulumu başkalarının çift tıklayıp YIKIMLient ile açabileceği tek dosya haline getirir.</p>
      </div>
    </div>
  `;const a=async()=>{const r=i.querySelector("#set-name").value.trim()||e.name,s=i.querySelector("#set-icon").value.trim();await te("cmd_rename_instance",{id:e.id,name:r}),s&&await te("cmd_set_instance_icon",{id:e.id,icon:s}),await ct(()=>Promise.resolve().then(()=>St),void 0).then(o=>o.refreshState())};i.querySelector("#set-name")?.addEventListener("change",a),i.querySelector("#set-icon")?.addEventListener("change",a),i.querySelector("#set-icon")?.addEventListener("input",()=>{const r=i.querySelector("#set-icon").value.trim();r&&(i.querySelector("#icon-preview").textContent=r)}),i.querySelector("#pick-icon")?.addEventListener("click",async()=>{try{await te("cmd_pick_instance_icon",{instanceId:e.id}),await ct(()=>Promise.resolve().then(()=>St),void 0).then(r=>r.refreshState(!0)),X("İkon güncellendi")}catch{}}),i.querySelector("#pick-cover")?.addEventListener("click",async()=>{try{await te("cmd_pick_instance_cover",{instanceId:e.id}),await ct(()=>Promise.resolve().then(()=>St),void 0).then(r=>r.refreshState(!0)),X("Kapak fotoğrafı eklendi")}catch{}}),i.querySelector("#clear-cover")?.addEventListener("click",async()=>{await te("cmd_set_instance_cover",{id:e.id,cover:null}),await ct(()=>Promise.resolve().then(()=>St),void 0).then(r=>r.refreshState(!0)),X("Kapak kaldırıldı")}),i.querySelector("#open-folder")?.addEventListener("click",()=>te("cmd_open_instance_folder",{instanceId:e.id})),i.querySelector("#open-mods")?.addEventListener("click",()=>te("cmd_open_mods_folder",{instanceId:e.id})),i.querySelector("#dup-inst")?.addEventListener("click",async()=>{await te("cmd_duplicate_instance",{id:e.id}),await ct(()=>Promise.resolve().then(()=>St),void 0).then(r=>r.refreshState()),X("Kurulum kopyalandı"),Mo(i.parentElement,Xn)}),i.querySelector("#del-inst")?.addEventListener("click",async()=>{confirm(`"${e.name}" kurulumu ve TÜM dosyaları silinecek. Emin misin?`)&&(await te("cmd_delete_instance",{id:e.id}),await ct(()=>Promise.resolve().then(()=>St),void 0).then(r=>r.refreshState()),Xn=null,jl(i.parentElement),X("Kurulum silindi"))}),i.querySelector("#share-inst")?.addEventListener("click",()=>{Cv(e.id,e.name)})}async function Xp(){const e=(await te("cmd_list_versions")).all,t=await te("cmd_list_java_arg_presets"),n=await te("cmd_list_standard_mods"),{root:a,close:r}=(await ct(async()=>{const{openModal:l}=await Promise.resolve().then(()=>St);return{openModal:l}},void 0)).openModal(`
    <h2>Yeni Kurulum</h2>
    <div class="sub">Sürümü ve modloader'ı seç — YIKIM çekirdeği, Java'yı, kütüphaneleri, asset'leri biz indiriyoruz.</div>

    <label class="wiz-label">Kurulum adı</label>
    <input class="input" id="w-name" placeholder="Örn: PVP Paketim" />

    <label class="wiz-label">Minecraft sürümü</label>
    <select class="input" id="w-version">
      ${e.slice(0,100).map(l=>`<option value="${l}">${l}</option>`).join("")}
    </select>

    <label class="wiz-label">Mod Loader</label>
    <div class="loader-cards">
      <button class="loader-card sel" data-l="fabric">
        <div class="lc-icon">${wd("fabric")}</div><b>Fabric</b><span>Hafif, hızlı, modern — YIKIM çekirdeği dahil</span>
      </button>
      <button class="loader-card" data-l="vanilla">
        <div class="lc-icon">${wd("vanilla")}</div><b>Vanilla</b><span>Modsuz sade oyun</span>
      </button>
      <button class="loader-card" data-l="forge">
        <div class="lc-icon">${wd("forge")}</div><b>Forge</b><span>Mod paketleri &amp; klasik modlar — ilk oyun açılışında kurulur</span>
      </button>
    </div>

    <label class="wiz-label">Bellek</label>
    <div class="ram-row">
      <input type="range" min="1024" max="16384" step="512" value="4096" id="w-ram" style="flex:1" />
      <span class="chip" id="w-ram-val">4096 MB</span>
    </div>

    <label class="wiz-label">Java Argüman Preseti</label>
    <select class="input" id="w-preset">
      ${t.map(l=>`<option value="${l.id}">${l.name} — ${l.description}</option>`).join("")}
    </select>

    <div class="std-mods-row">
      <div class="std-mods-text">
        <b>Standart modlar kurulsun</b>
        <div class="std-mods-desc">Performans, PVP ve görünüm modları otomatik kurulur. Sonra paket içinden tek tek açıp kapatabilirsin.</div>
      </div>
      <label class="switch on" id="w-std-switch"></label>
    </div>
    <details class="std-mods-details">
      <summary>Hangi modlar kurulacak? (${n.length} mod)</summary>
      ${["performans","pvp","gorunum","yardarci"].map(l=>`
        <div class="std-cat">
          <div class="std-cat-label">${l==="performans"?"Performans":l==="pvp"?"PVP":l==="yardarci"?"Yardımcı":"Görünüm"}</div>
          <div class="std-chips">
            ${n.filter(d=>d.category===l).map(d=>`<span class="chip ${d.enabled_by_default?"":"gray"}" title="${d.description}">${d.name}</span>`).join("")}
          </div>
        </div>`).join("")}
    </details>

    <div style="display:flex; gap:10px; margin-top:20px">
      <button class="btn ghost" id="w-cancel" style="flex:1">Vazgeç</button>
      <button class="btn primary lg" id="w-create" style="flex:2">Kurulumu Oluştur</button>
    </div>
  `);let s="fabric",o=!0;a.querySelectorAll(".loader-card").forEach(l=>{l.addEventListener("click",()=>{l.classList.contains("disabled")||(a.querySelectorAll(".loader-card").forEach(d=>d.classList.remove("sel")),l.classList.add("sel"),s=l.dataset.l)})});const c=a.querySelector("#w-ram");c.addEventListener("input",()=>{a.querySelector("#w-ram-val").textContent=`${c.value} MB`}),a.querySelector("#w-std-switch")?.addEventListener("click",l=>{o=!o,l.currentTarget.classList.toggle("on",o)}),a.querySelector("#w-cancel")?.addEventListener("click",r),a.querySelector("#w-create")?.addEventListener("click",async()=>{const l=a.querySelector("#w-create");l.disabled=!0,l.innerHTML='<span class="spinner"></span> Oluşturuluyor…';const d=a.querySelector("#w-name").value.trim()||"Yeni Kurulum",f=a.querySelector("#w-version").value,u=a.querySelector("#w-preset").value;try{const h=await te("cmd_create_instance",{instance:{name:d,mc_version:f,mod_loader:s,ram_mb:parseInt(c.value),java_preset_id:u,standard_mods:o&&s==="fabric"}});await ct(()=>Promise.resolve().then(()=>St),void 0).then(m=>m.refreshState()),r(),X(`"${d}" oluşturuldu`);const g=h.instance.id;if(Xn=g,le.instances.length){const m=document.querySelector("#content");Mo(m,g)}}catch(h){X(String(h),"err"),l.disabled=!1,l.textContent="Kurulumu Oluştur"}})}function Vs(i){return i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Yp(i){const e=i.trim();return/^https?:\/\//i.test(e)?e:/^\/\//.test(e)?`https:${e}`:""}function Xr(i){let e=Vs(i);const t=[];return e=e.replace(/`([^`]+)`/g,(n,a)=>(t.push(a),`\0K${t.length-1}\0`)),e=e.replace(/!\[([^\]]*)\]\(([^)\s]+)(?:\s+&quot;[^&]*&quot;)?\)/g,(n,a,r)=>{const s=Yp(r.replace(/&amp;/g,"&"));return s?`<img src="${Vs(s)}" alt="${a}" loading="lazy" referrerpolicy="no-referrer">`:n}),e=e.replace(/\[([^\]]+)\]\(([^)\s]+)(?:\s+&quot;[^&]*&quot;)?\)/g,(n,a,r)=>{const s=Yp(r.replace(/&amp;/g,"&"));return s?`<a href="${Vs(s)}" data-ext="1">${a}</a>`:n}),e=e.replace(/(^|[\s(])(https?:\/\/[^\s<>"]+)/g,(n,a,r)=>`${a}<a href="${Vs(r)}" data-ext="1">${r}</a>`),e=e.replace(/\*\*\*([^*]+)\*\*\*/g,"<b><i>$1</i></b>"),e=e.replace(/\*\*([^*]+)\*\*/g,"<b>$1</b>"),e=e.replace(/(^|[\s(])\*([^*\s][^*]*)\*/g,"$1<i>$2</i>"),e=e.replace(/(^|[\s(])_([^_\s][^_]*)_/g,"$1<i>$2</i>"),e=e.replace(/~~([^~]+)~~/g,"<del>$1</del>"),e=e.replace(/\u0000K(\d+)\u0000/g,(n,a)=>`<code>${t[+a]}</code>`),e}function mE(i){let e=i;return e=e.replace(/<img[^>]*src=["']([^"']+)["'][^>]*>/gi,(t,n)=>`

![resim](${n})

`),e=e.replace(/<a[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi,(t,n,a)=>`[${a.replace(/<[^>]+>/g,"")}](${n})`),e=e.replace(/<br\s*\/?>/gi,`
`),e=e.replace(/<\/(p|div|h[1-6]|li|tr)>/gi,`

`),e=e.replace(/<li[^>]*>/gi,"- "),e=e.replace(/<h([1-4])[^>]*>/gi,(t,n)=>`

${"#".repeat(+n)} `),e=e.replace(/<\/?(details|summary|center|table|tbody|thead|tr|td|th|span|font|u|b|i|strong|em|sup|sub|kbd|p|div|ul|ol|blockquote|figure|figcaption)[^>]*>/gi,`
`),e=e.replace(/<[^>]+>/g,""),e=e.replace(/&nbsp;/g," ").replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">"),e}function gE(i){if(!i)return"";let e=i.replace(/\r\n?/g,`
`);e=mE(e);const t=[];e=e.replace(/```[a-zA-Z0-9+-]*\n([\s\S]*?)```/g,(l,d)=>(t.push(d.replace(/\n$/,"")),`\0B${t.length-1}\0`));const n=e.split(`
`),a=[];let r=null,s=[];const o=()=>{s.length&&(a.push(`<p>${Xr(s.join(" "))}</p>`),s=[])},c=()=>{r&&(a.push(`</${r}>`),r=null)};for(const l of n){const f=l.trimEnd().trim();if(!f){o(),c();continue}const u=f.match(/^\u0000B(\d+)\u0000$/);if(u){o(),c(),a.push(`<pre><code>${Vs(t[+u[1]])}</code></pre>`);continue}const h=f.match(/^(#{1,6})\s+(.*)$/);if(h){o(),c();const p=Math.min(6,h[1].length);a.push(`<h${p}>${Xr(h[2])}</h${p}>`);continue}if(/^([-*_])\1{2,}$/.test(f)){o(),c(),a.push("<hr>");continue}if(f.startsWith(">")){o(),c(),a.push(`<blockquote>${Xr(f.replace(/^>\s?/,""))}</blockquote>`);continue}const g=f.match(/^\d+[.)]\s+(.*)$/);if(g){o(),r!=="ol"&&(c(),a.push("<ol>"),r="ol"),a.push(`<li>${Xr(g[1])}</li>`);continue}const m=f.match(/^[-*+]\s+(.*)$/);if(m){o(),r!=="ul"&&(c(),a.push("<ul>"),r="ul"),a.push(`<li>${Xr(m[1])}</li>`);continue}if(f.includes("|")&&/^\|.*\|$/.test(f)){if(o(),c(),/^[|\-\s:]+$/.test(f))continue;a.push(`<p class="md-tr">${Xr(f.replace(/^\||\|$/g,"").split("|").join(" · "))}</p>`);continue}c(),s.push(f)}return o(),c(),a.join(`
`)}const $f={mod:"Mod",modpack:"Mod Paketi",resourcepack:"Doku Paketi",shader:"Shader",world:"Dünya",datapack:"Datapack"};let ua="mod",Ea="",Td="",xs="";const Iv=24;let Ql=null,Pl=0,io=!1,wa=!1,pl=null,qs=0,Zp=!1,ec=null,Dn=null;function vE(i){Dn=i;let e=Hn.param;if(e?.startsWith("kind:")){const t=e.slice(5);Object.keys($f).includes(t)&&(ua=t),e=void 0}if(Hn.param=void 0,ec){Nv(ec);return}zv(!!e)}function zv(i=!1){const e=Dn;e.innerHTML=`
    <div class="page-wrap xp-wrap">
      <div class="xp-head anim-fade-up">
        <div>
          <h1>Keşfet</h1>
          <p>Modrinth ve CurseForge — bir içeriğe tıkla, sayfası açılsın, sürümünü seç ve kur.</p>
        </div>
        <div class="xp-head-badges">
          <span class="chip green">● Modrinth</span>
          <span class="chip ${le.curseforge?"green":"gray"}" title="CurseForge (resmî API veya anahtarsız genel ayna)">● CurseForge</span>
        </div>
      </div>

      <div class="xp-search-row anim-fade-up">
        <div class="xp-search">
          ${V("search")}
          <input id="exp-q" placeholder="Ara: sodium, pvp, shaders…" autocomplete="off" spellcheck="false" />
          <button class="btn primary" id="exp-go">Ara</button>
        </div>
      </div>

      <div class="xp-tabs anim-fade-up" role="tablist">
        ${Object.entries($f).map(([r,s])=>`<button class="xp-tab ${ua===r?"sel":""}" data-k="${r}">${s}</button>`).join("")}
      </div>

      <div class="xp-filters anim-fade-up">
        <label class="xp-field"><span>Oyun sürümü</span>
          <select class="input" id="exp-ver">
            <option value="">hepsi</option>
            ${le.featured_versions.map(r=>`<option>${r}</option>`).join("")}
          </select>
        </label>
        <label class="xp-field"><span>Yükleyici</span>
          <select class="input" id="exp-loader">
            <option value="">hepsi</option>
            <option value="fabric">fabric</option>
            <option value="quilt">quilt</option>
            <option value="forge">forge</option>
            <option value="neoforge">neoforge</option>
          </select>
        </label>
        <span class="xp-hint" id="exp-hint">Sonuçlar iki kaynaktan birleştirilir.</span>
      </div>

      <div class="xp-section-head xp-flow-head anim-fade-up"><h2 id="exp-baslik">En çok indirilenler</h2></div>

      <div class="xp-grid" id="exp-results"></div>
      <div class="xp-son" id="exp-son"><div class="spinner"></div></div>
    </div>
  `,e.querySelectorAll(".xp-tab").forEach(r=>r.addEventListener("click",()=>{ua=r.dataset.k,e.querySelectorAll(".xp-tab").forEach(s=>s.classList.remove("sel")),r.classList.add("sel"),Ea?Yr(Ea):Ks()}));const t=e.querySelector("#exp-q");let n;t.addEventListener("input",()=>{clearTimeout(n),n=setTimeout(()=>Yr(t.value.trim()),400)}),t.addEventListener("keydown",r=>{r.key==="Enter"&&Yr(t.value.trim())}),e.querySelector("#exp-go")?.addEventListener("click",()=>Yr(t.value.trim())),e.querySelector("#exp-ver")?.addEventListener("change",()=>{Ea?Yr(Ea):Ks()}),e.querySelector("#exp-loader")?.addEventListener("change",()=>{Ea?Yr(Ea):Ks()}),e.addEventListener("click",r=>{const s=r.target.closest("a[data-ext]");s&&(r.preventDefault(),qi(s.href))}),pl?.disconnect(),pl=null,Zp||(document.addEventListener("scroll",Jp,!0),window.addEventListener("resize",Jp),Zp=!0);const a=e.querySelector("#exp-son");a&&"IntersectionObserver"in window&&(pl=new IntersectionObserver(r=>{r.some(s=>s.isIntersecting)&&Sc()},{root:null,rootMargin:"600px 0px",threshold:0}),pl.observe(a)),Ks()}function _E(){return Dn?.querySelector("#exp-baslik")}function Ws(i){const e=Dn?.querySelector("#exp-son");e&&(e.innerHTML=i===null?'<div class="spinner"></div>':`<span>${i}</span>`,e.classList.toggle("bos",i!==null))}function Uv(i,e){qs++,Ql=i,Pl=0,io=!1,wa=!1;const t=Dn?.querySelector("#exp-results");t&&(t.innerHTML="");const n=_E();n&&(n.textContent=e),Ws(null),Sc()}function Jp(){if(!Ql||wa||io)return;const i=Dn?.querySelector("#exp-son");if(!i)return;i.getBoundingClientRect().top<window.innerHeight+500&&Sc()}async function Sc(){if(io||wa||!Ql)return;const i=qs;io=!0;const e=Dn?.querySelector("#exp-results");Ws(null);try{const t=await Ql(Pl,Iv);if(i!==qs)return;if(!t.length){wa=!0,Ws(Pl===0?"Sonuç yok.":"Hepsi bu kadar.");return}const n=new Set(Array.from(e?.querySelectorAll(".xp-card")||[]).map(r=>r.dataset.id||""));let a=0;for(const r of t)n.has(`${r.source}:${r.id}`)||(e?.appendChild(xE(r)),a++);Pl+=t.length,a===0&&(wa=!0),Ws(wa?"Hepsi bu kadar.":null),setTimeout(()=>{const r=Dn?.querySelector("#exp-son");if(!r||a===0)return;const s=r.getBoundingClientRect();!wa&&s.top<window.innerHeight+600&&Sc()},60)}catch(t){if(i!==qs)return;wa=!0,Ws(`Yüklenemedi: ${String(t)}`)}finally{i===qs&&(io=!1)}}async function yE(i,e){const t=[[`project_type:${ua}`]];xs&&t.push([`categories:${xs}`]);const n=`https://api.modrinth.com/v2/search?query=&index=downloads&facets=${encodeURIComponent(JSON.stringify(t))}&offset=${i}&limit=${e}`,a=await fetch(n,{headers:{Accept:"application/json"}});if(!a.ok)throw new Error(`Modrinth ${a.status}`);return((await a.json()).hits||[]).map(s=>({source:"modrinth",id:String(s.project_id||""),slug:String(s.slug||""),title:String(s.title||""),description:String(s.description||""),author:String(s.author||"Modrinth"),icon_url:String(s.icon_url||""),downloads:Number(s.downloads||0),kind:ua,categories:Array.isArray(s.display_categories)?s.display_categories:[]}))}function Ks(){Ea="";const i=Dn?.querySelector("#exp-loader")?.value||"";xs=["resourcepack","shader","world","datapack"].includes(ua)?"":i,Uv(async(e,t)=>{try{return await yE(e,t)}catch{const n=Math.floor(e/Iv);return(await te("cmd_repos_popular",{kind:ua,loader:xs,page:n})).slice(0,t)}},"En çok indirilenler")}async function Yr(i){if(!Dn?.querySelector("#exp-results"))return;if(!i){Ks();return}Ea=i;const t=Dn.querySelector("#exp-ver"),n=Dn.querySelector("#exp-loader");Td=t?.value||"";const a=n?.value||"";xs=["resourcepack","shader","world","datapack"].includes(ua)?"":a,Uv(async(s,o)=>(await te("cmd_repos_search",{query:i,kind:ua,versions:Td?[Td]:[],loader:xs,offset:s,limit:o})).results,`Arama: ${i}`)}function xE(i){const e=hi(`
    <button class="xp-card" data-id="${i.source}:${i.id}">
      <span class="xp-card-icon">${i.icon_url?`<img src="${i.icon_url}" loading="lazy" draggable="false" onerror="window.__iconFallback && window.__iconFallback(this,'xp-card-icon ph','puzzle')" />`:V(i.kind==="modpack"?"box":"puzzle")}</span>
      <span class="xp-card-body">
        <span class="xp-card-t">${i.title}</span>
        <span class="xp-card-a">${i.author||(i.source==="modrinth"?"Modrinth":"CurseForge")}</span>
        <span class="xp-card-d">${i.description}</span>
        <span class="xp-card-foot">
          <span class="xp-card-stat">${V("dl")} ${Dl(i.downloads)}</span>
          ${(i.categories||[]).slice(0,3).map(t=>`<span class="xp-tag">${t}</span>`).join("")}
        </span>
      </span>
    </button>
  `);return e.addEventListener("click",()=>bE(i)),e}function Dl(i){return i>=1e9?`${(i/1e9).toFixed(1)}B`:i>=1e6?`${(i/1e6).toFixed(1)}M`:i>=1e3?`${(i/1e3).toFixed(0)}K`:String(i)}function bE(i){ec=i,Nv(i),Dn?.scrollTo({top:0})}async function Nv(i){const e=Dn,t=["resourcepack","shader","world","datapack"].includes(i.kind),n=i.kind==="modpack";if(e.innerHTML=`
    <div class="page-wrap xp-wrap xp-detail">
      <button class="xp-back" id="xp-back">${V("back")} Keşfet'e dön</button>

      <div class="xp-hero anim-fade-up">
        <div class="xp-hero-icon">
          ${i.icon_url?`<img src="${i.icon_url}" draggable="false" onerror="window.__iconFallback && window.__iconFallback(this,'xp-hero-icon ph','puzzle')" />`:V(i.kind==="modpack"?"box":"puzzle")}
        </div>
        <div class="xp-hero-main">
          <div class="xp-hero-kicker">${$f[i.kind]||i.kind} · ${i.source==="modrinth"?"Modrinth":"CurseForge"}</div>
          <h1 class="xp-hero-title">${i.title}</h1>
          <p class="xp-hero-sub">${i.description}</p>
          <div class="xp-hero-chips" id="xp-hero-chips">
            <span class="xp-tag">${V("dl")} ${Dl(i.downloads)}</span>
            ${i.author?`<span class="xp-tag">${i.author}</span>`:""}
            ${(i.categories||[]).slice(0,5).map(g=>`<span class="xp-tag">${g}</span>`).join("")}
          </div>
        </div>
      </div>

      <div class="xp-cols">
        <div class="xp-main">
          <div class="xp-panel" id="xp-gallery-panel" hidden>
            <div class="xp-panel-h">Galeri</div>
            <div class="xp-gallery" id="xp-gallery"></div>
          </div>
          <div class="xp-panel">
            <div class="xp-panel-h">Açıklama</div>
            <div class="xp-prose" id="xp-body"><div class="spinner" style="margin:26px auto"></div></div>
          </div>
        </div>

        <aside class="xp-side">
          <div class="xp-panel xp-install">
            <div class="xp-panel-h">Kur</div>
            ${n?`
              <p class="xp-note">Bu paket için <b>yeni bir kurulum</b> oluşturulacak. Paket kendi Minecraft sürümünü ve yükleyicisini getirir; hedef kurulum seçilmez.</p>
              <div class="xp-ver-list" id="xp-vers"><div class="spinner" style="margin:22px auto"></div></div>
            `:le.instances.length?`
              <label class="xp-field"><span>Hedef kurulum</span>
                <select class="input" id="xp-inst">
                  ${le.instances.map(g=>`<option value="${g.id}">${g.name} · ${g.mod_loader} ${g.mc_version}</option>`).join("")}
                </select>
              </label>
              <div class="xp-two">
                <label class="xp-field"><span>Oyun sürümü</span><select class="input" id="xp-mc"></select></label>
                <label class="xp-field"><span>Yükleyici</span><select class="input" id="xp-loader" ${t?"disabled":""}></select></label>
              </div>
              <div class="xp-ver-list" id="xp-vers"><div class="spinner" style="margin:22px auto"></div></div>
            `:`
              <p class="xp-note">Mod kurmak için bir kurulum gerekiyor.</p>
              <button class="btn primary" id="xp-new-inst">Kurulum oluştur</button>
            `}
          </div>
          <div class="xp-panel" id="xp-links-panel" hidden>
            <div class="xp-panel-h">Bağlantılar</div>
            <div class="xp-links" id="xp-links"></div>
          </div>
        </aside>
      </div>
    </div>
  `,e.querySelector("#xp-back")?.addEventListener("click",()=>{ec=null,zv()}),e.querySelector("#xp-new-inst")?.addEventListener("click",()=>je("instances")),(async()=>{let g=null;try{g=await te("cmd_repos_project",{source:i.source,projectId:i.id,kind:i.kind})}catch{}if(g){const m=e.querySelector("#xp-hero-chips");m&&(m.innerHTML=`
          <span class="xp-tag">${V("dl")} ${Dl(g.downloads||i.downloads)}</span>
          ${g.followers?`<span class="xp-tag">♥ ${Dl(g.followers)}</span>`:""}
          ${g.author?`<span class="xp-tag">${g.author}</span>`:""}
          ${g.license?`<span class="xp-tag">${g.license}</span>`:""}
          ${g.updated?`<span class="xp-tag">${g.updated.slice(0,10)}</span>`:""}
          ${(g.categories||[]).slice(0,5).map(v=>`<span class="xp-tag">${v}</span>`).join("")}
        `);const p=e.querySelector("#xp-body");if(g.body&&g.body.trim()?(p.innerHTML=gE(g.body),p.querySelectorAll("a[data-ext]").forEach(v=>v.addEventListener("click",y=>{y.preventDefault(),qi(v.href)}))):p.innerHTML='<p class="xp-note">Bu proje için açıklama verisi yok.</p>',g.gallery?.length){const v=e.querySelector("#xp-gallery");e.querySelector("#xp-gallery-panel").hidden=!1,v.innerHTML=g.gallery.map(y=>`<button class="xp-shot" data-u="${y.url}"><img src="${y.url}" loading="lazy" referrerpolicy="no-referrer" alt="${y.title||""}" /></button>`).join(""),v.querySelectorAll(".xp-shot").forEach(y=>y.addEventListener("click",()=>ME(y.dataset.u)))}if(g.links?.length){const v=e.querySelector("#xp-links-panel");v.hidden=!1,e.querySelector("#xp-links").innerHTML=g.links.map(y=>`<button class="xp-link" data-u="${y.url}">${y.label} ${V("globe")}</button>`).join(""),e.querySelectorAll(".xp-link").forEach(y=>y.addEventListener("click",()=>qi(y.dataset.u)))}}else e.querySelector("#xp-body").innerHTML='<p class="xp-note">Açıklama yüklenemedi — sürüm listesi kullanılabilir.</p>'})(),!n&&!le.instances.length)return;const a=e.querySelector("#xp-inst"),r=e.querySelector("#xp-mc"),s=e.querySelector("#xp-loader"),o=e.querySelector("#xp-vers");let c=[],l=8;const d=()=>n?null:le.instances.find(g=>g.id===a?.value)||le.instances[0],f=()=>{const g=d(),m=g?.mc_version||"",p=g?.mod_loader||"fabric";r&&([...r.options].some(v=>v.value===m)||r.appendChild(new Option(m,m)),r.value=m),s&&([...s.options].some(v=>v.value===p)||s.appendChild(new Option(p,p)),s.value=p),u()};a?.addEventListener("change",f),r?.addEventListener("change",()=>{l=8,u()}),s?.addEventListener("change",()=>{l=8,u()});function u(){const g=d(),m=n?"":r?.value||g?.mc_version||"",p=n||t?"":s?.value||g?.mod_loader||"",v=c.filter(k=>SE(k,m,p,t)),y=c.filter(k=>!v.includes(k)),T=[...v].sort((k,A)=>(A.date||"").localeCompare(k.date||"")),b=T.slice(0,l);if(!c.length){o.innerHTML='<p class="xp-note">Sürüm listesi boş.</p>';return}const S=T.length?[]:[...c].sort((k,A)=>(A.date||"").localeCompare(k.date||"")).slice(0,4);o.innerHTML=`
      ${T.length?b.map(k=>h(k,!0)).join(""):`
        <p class="xp-note">${m}${p?` · ${p}`:""} için uyumlu sürüm yok — en yeni sürümler aşağıda (uyumsuz).</p>
        ${S.map(k=>h(k,!1)).join("")}`}
      ${T.length>b.length?`<button class="btn ghost sm xp-more" id="xp-more">Daha eski sürümler (${T.length-b.length})</button>`:""}
      ${(()=>{const k=y.filter(A=>!S.includes(A));return k.length?`
        <details class="xp-others">
          <summary>Uyumsuz sürümler (${k.length})</summary>
          ${k.slice(0,25).map(A=>h(A,!1)).join("")}
        </details>`:""})()}
      ${g?`<p class="xp-note xp-note-sm">Hedef: <b>${g.name}</b> · ${g.mod_loader} ${g.mc_version}</p>`:""}
    `,o.querySelector("#xp-more")?.addEventListener("click",()=>{l+=12,u()}),o.querySelectorAll(".xp-ver-kur").forEach(k=>{k.addEventListener("click",()=>{const A=c.find(x=>x.id===k.dataset.id);A&&kE(i,A,a?.value||"",k)})})}function h(g,m){const p=g.files[0]?.size||0;return`
      <div class="xp-ver ${m?"":"dim"}">
        <div class="xp-ver-head">
          <b>${g.version_number||g.name}</b>
          ${m?'<span class="xp-ver-ok">uyumlu</span>':""}
        </div>
        ${g.name&&g.name!==g.version_number?`<div class="xp-ver-name">${g.name}</div>`:""}
        <div class="xp-ver-meta">
          <span>${(g.game_versions||[]).slice(0,3).join(", ")}${g.game_versions.length>3?"…":""}</span>
          ${!t&&g.loaders?.length?`<span>${g.loaders.slice(0,2).join(" · ")}</span>`:""}
          <span>${g.date?g.date.slice(0,10):""}</span>
          ${p?`<span>${Oo(p)}</span>`:""}
        </div>
        <button class="btn ${m?"primary":"ghost"} sm xp-ver-kur" data-id="${g.id}">
          ${i.kind==="modpack"?"Kur":t?"İndir":"Kur"}
        </button>
      </div>
    `}try{c=await te("cmd_repos_get_versions",{source:i.source,projectId:i.id,kind:i.kind,loader:"",gameVersion:""})}catch(g){o.innerHTML=`<p class="xp-note">Sürümler alınamadı: ${String(g)}</p>`;return}if(r){const g=new Set;for(const p of c)for(const v of p.game_versions||[])g.add(v);const m=[...g].sort((p,v)=>v.localeCompare(p,void 0,{numeric:!0}));r.innerHTML=m.map(p=>`<option value="${p}">${p}</option>`).join("")||'<option value="">—</option>'}if(s){const g=new Set;for(const p of c)for(const v of p.loaders||[])g.add(v);const m=["fabric","quilt","forge","neoforge","rift"].filter(p=>g.has(p));s.innerHTML=(m.length?m:[...g]).map(p=>`<option value="${p}">${p}</option>`).join("")||'<option value="">—</option>'}n?u():f()}function SE(i,e,t,n){if(!(!e||(i.game_versions||[]).includes(e)))return!1;if(n||!t)return!0;const r=(i.loaders||[]).map(o=>o.toLowerCase());if(!r.length)return!0;const s=t.toLowerCase();return!!(r.includes(s)||s==="quilt"&&r.includes("fabric")||s==="neoforge"&&r.includes("forge"))}async function kE(i,e,t,n){if(i.kind==="modpack"){await EE(i,e);return}if(!t){X("Önce bir kurulum oluştur","err"),je("instances");return}const a=n.innerHTML;n.disabled=!0,n.innerHTML='<span class="spinner"></span>';try{["resourcepack","shader","world","datapack"].includes(i.kind)?await te("cmd_repos_install_content",{instanceId:t,source:i.source,projectId:i.id,versionId:e.id,kind:i.kind}):await te("cmd_repos_install",{instanceId:t,source:i.source,projectId:i.id,versionId:e.id}),X({resourcepack:"Doku paketleri klasörüne indirildi",shader:"Shader klasörüne indirildi",world:"Dünyalar klasörüne indirildi",datapack:"Datapacks klasörüne indirildi"}[i.kind]||`Kuruldu: ${i.title}`),n.innerHTML=`${V("check")} Kuruldu`,n.classList.remove("primary"),n.classList.add("ghost"),setTimeout(()=>{n.innerHTML=a,n.classList.add("primary"),n.classList.remove("ghost"),n.disabled=!1},2200)}catch(r){X(String(r),"err"),n.disabled=!1,n.innerHTML=a}}function ME(i){if(!/^https?:\/\//i.test(i))return;const{root:e,close:t}=tn(`
    <div class="xp-light">
      <img src="${i}" alt="" referrerpolicy="no-referrer" />
    </div>
    <div style="display:flex; justify-content:flex-end; margin-top:10px">
      <button class="btn ghost" id="lb-close">Kapat</button>
    </div>
  `);e.querySelector("#lb-close")?.addEventListener("click",t)}async function EE(i,e){Do(i.title);try{const t=await te("cmd_install_pack_files",{source:i.source,projectId:i.id,versionId:e.id,packName:i.title,icon:null,iconUrl:i.icon_url||null});await ct(()=>Promise.resolve().then(()=>St),void 0).then(a=>a.refreshState()),Es();let n=0;try{const a=await te("cmd_list_mods",{instanceId:t.id});Array.isArray(a)&&(n=a.length)}catch{}await wE(t,n),je("instances")}catch(t){ws(String(t))}}async function wE(i,e=0){const t=await te("cmd_list_java_arg_presets"),{root:n,close:a}=tn(`
    <h2>Özel Java argümanı eklensin mi?</h2>
    <div class="sub">Bu paket için FPS odaklı hazır ayarlardan birini seç. Sonra her zaman değiştirebilirsin.</div>
    ${Jl(e,i.ram_mb,le.sys?.total_ram_mb||0,"kurulum")}
    <div class="preset-list">
      ${t.map(r=>`
        <div class="preset-row card hover" data-id="${r.id}">
          <div class="preset-head"><b>${r.name}</b><span class="chip gray">${r.recommended_ram_mb} MB öneri</span></div>
          <p>${r.description}</p>
        </div>`).join("")}
      <div class="preset-row card hover" data-id="__skip">
        <div class="preset-head"><b>Atla — varsayılan dengeli kalsın</b></div>
      </div>
    </div>
  `);n.querySelectorAll(".preset-row").forEach(r=>{r.addEventListener("click",async()=>{const s=r.dataset.id;s!=="__skip"&&(await te("cmd_set_instance_java_preset",{id:i.id,presetId:s}),X(`Preset: ${t.find(o=>o.id===s)?.name}`)),a()})})}function TE(i){i.classList.add("news-page"),i.innerHTML=`
    <div class="page-wrap">
    <div class="page-header anim-fade-up">
      <h1>Duyurular</h1>
      <p>YIKIM resmî duyuruları — yalnızca geliştiriciden, imza doğrulamalı.</p>
    </div>
    <div id="yikim-news"><div class="spinner" style="margin:40px auto"></div></div>
    </div>
  `,AE(i)}async function AE(i){const e=i.querySelector("#yikim-news");try{const t=await te("cmd_list_yikim_news");if(!t.length){e.innerHTML=`
        <div class="card anim-fade-up" style="text-align:center;padding:40px 24px">
          <div style="margin-bottom:10px">${V("news")}</div>
          <h3>Şimdilik duyuru yok</h3>
          <p>Yeni duyurular burada belirecek — yalnızca geliştirici yayınlar.</p>
        </div>`;return}t.sort((n,a)=>(a.pinned?1:0)-(n.pinned?1:0)||a.date.localeCompare(n.date)),e.innerHTML=t.map(n=>`
      <div class="card yikim-announce ${n.pinned?"pinned":""} anim-fade-up" data-link="${n.link||""}">
        ${n.image?`<div class="yikim-img" style="background-image:url('${n.image}')"></div>`:""}
        <div class="yikim-body">
          <div class="row-between">
            <div class="chip orange">${n.pinned?`${V("sparkle")} DUYURU`:"YIKIM"} · ${n.date}</div>
            ${n.pinned?'<span class="chip">Sabit</span>':""}
          </div>
          <h3>${n.title}</h3>
          <p class="yikim-preview">${n.text}</p>
          <details class="yikim-more">
            <summary>Devamını oku</summary>
            <div class="yikim-fulltext">${n.body.split(`

`).map(a=>`<p>${a}</p>`).join("")}</div>
          </details>
          ${n.link?`<button class="btn ghost sm yikim-link">${V("globe")} ${n.link_label||"Bağlantıyı aç"}</button>`:""}
        </div>
      </div>`).join(""),e.querySelectorAll(".yikim-announce").forEach(n=>{const a=n.dataset.link;n.querySelector(".yikim-link")?.addEventListener("click",r=>{r.stopPropagation(),a?.startsWith("https://")&&qi(a).catch(()=>{})})})}catch{e.innerHTML=""}}const Ad=[{id:"sahne",name:"Sahne",desc:"Imperial uslübü — ortada karakter, piksel yazı, sarı blok butonlar",bg:"#0d0e12",panel:"#17181f",line:"#2a2c3a",text:"#f2edde",dim:"#71695c",accent:"#ffd83d"},{id:"sokum",name:"Söküm Sahası",desc:"Sıcak işlik zemini, kızıl turuncu, keskin köşe",bg:"#14100c",panel:"#201a14",line:"#382c1f",text:"#f2e9dd",dim:"#7d7264",accent:"#ff5a24"},{id:"afis",name:"Afiş Provası",desc:"Baskı kâğıdı, sert mürekkep çizgi, ofset gölge",bg:"#f3ecdd",panel:"#faf6ea",line:"#16130c",text:"#16130c",dim:"#8a7f6b",accent:"#ff4d00"},{id:"sira",name:"Sıra Düzeni",desc:"Navigasyon ÜSTTE — yatay hap şerit, makine yeşili",bg:"#0e1112",panel:"#171b1c",line:"#2a3134",text:"#edf2e6",dim:"#6c7568",accent:"#a3e635"},{id:"rihtim",name:"Rıhtım",desc:"Yüzen cam dock altta ortada — gece lacivert, deniz feneri teal",bg:"#0a0f18",panel:"#111a29",line:"#22304a",text:"#e6effa",dim:"#5e6d85",accent:"#2fd6c3"}],RE={pano:"sahne",standart:"sahne",oda:"sahne",kumas:"afis",perde:"sahne",buz:"rihtim",skala:"sira"};function LE(i){const e=(t,n,a,r=1)=>`
    <div class="wc-row" style="top:${t}px; left:14px; width:${n}%; background:${i.dim}; opacity:${r}"></div>
    <div class="wc-lamp" style="top:${t-1}px; left:6px; background:${a}"></div>`;return`
    <span class="wc-preview" style="background:${i.bg}; border-bottom:1px solid ${i.line}">
      <span class="wc-bar" style="top:0; background:${i.panel}; border-bottom:1px solid ${i.line}"></span>
      <span class="wc-row" style="top:5px; left:8px; width:26px; height:3px; background:${i.accent}"></span>
      ${e(30,55,i.accent)}
      ${e(46,40,"#3ecf8e")}
      ${e(62,47,"#3ecf8e")}
    </span>`}function Xs(i){let e=le.config;const n={dark:"sahne",neon:"sahne",light:"afis",orange:"sahne",anons:"sahne",...RE}[e.theme]??e.theme,a=(e.tema_ozel||{})[n]||{},r=Ad.find(m=>m.id===n)||Ad[0],s=(a.accent||"").trim(),o=a.radius||"";try{const m=window.__TAURI__?.app;m?.getVersion&&m.getVersion().then(p=>{const v=i.querySelector("#app-version");v&&(v.textContent=`v${p} "Kıvılcım"`)}).catch(()=>{const p=i.querySelector("#app-version");p&&(p.textContent="v? — geliştirici sürümü")})}catch{}i.innerHTML=`
    <div class="page-wrap">
    <div class="page-header anim-fade-up">
      <h1>Ayarlar</h1>
      <p>Launcher'ı kendine göre şekillendir.</p>
    </div>

    <div class="card set-card anim-fade-up">
      <h3>${V("user")} Hesaplar</h3>
      <p class="set-sub">Birden çok hesap ekle, aralarında tek tıkla geçiş yap.</p>
      <div class="acc-list" id="acc-list">
        ${le.accounts.map(m=>{const p=bn()?.id===m.id;return`
          <div class="acc-row ${p?"active":""}" data-id="${m.id}">
            <img class="acc-head" src="${Lc(m)}" ${Cc(m)} draggable="false" />
            <div class="acc-info">
              <b>${dc(m.id)}${m.name}</b>
              <span>${m.kind==="microsoft"?"Microsoft · premium":"Offline"}</span>
            </div>
            ${p?'<span class="chip">aktif</span>':'<button class="btn ghost sm acc-use">Seç</button>'}
            <button class="btn danger sm acc-del" title="Kaldır">${V("trash")}</button>
          </div>`}).join("")||'<p class="set-sub">Henüz hesap eklenmemiş.</p>'}
      </div>
      <div style="display:flex; gap:10px; margin-top:12px">
        <button class="btn primary" id="acc-add-ms">${V("globe")} Microsoft ile Giriş</button>
        <button class="btn ghost" id="acc-add-off">${V("user")} Çevrimdışı Ekle</button>
      </div>
    </div>

    <div id="guvenlik-karti" class="anim-fade-up"></div>

    <div class="card set-card anim-fade-up">
      <h3>${V("image")} Görsel Dünya</h3>
      <p class="set-sub">Arayüzün dünyasını seç — hepsi aynı düzen, farklı karakter. Anında uygulanır.</p>
      <div class="world-grid">
        ${Ad.map(m=>`
          <button class="world-card ${n===m.id?"sel":""}" data-t="${m.id}">
            ${LE(m)}
            <span class="wc-body">
              <b>${m.name}</b>
              <span>${m.desc}</span>
            </span>
            ${n===m.id?'<span class="sel-tag">SEÇİLİ</span>':""}
          </button>`).join("")}
      </div>
      <div class="row-between" style="margin-top:14px">
        <div>
          <div style="font-size:12.5px; font-weight:600">Skin Merkezi</div>
          <div style="font-size:11.5px; color:var(--text-dim)">Skinlerini düzenle, giy; Mojang pelerinlerini tak.</div>
        </div>
        <button class="btn ghost sm" id="skins-alani">${V("shirt")} Aç</button>
      </div>
      <div class="tema-ozel" id="tema-ozel">
        <div class="tema-ozel-bas">
          ${V("picker")}
          <div>
            <b>Bu dünyayı özelleştir — ${r.name}</b>
            <small>Sadece bu tema için geçerli. Renk ve köşe değişir, düzen aynı kalır.</small>
          </div>
          <button class="btn ghost sm" id="tema-sifirla" title="Bu dünyanın tüm özelleştirmelerini sil">${V("undo")} Sıfırla</button>
        </div>
        <div class="tema-ozel-satir">
          <span class="to-etiket">Vurgu rengi</span>
          <div class="to-kontrol">
            <button class="tema-renk${s?"":" aktif"}" data-renk="" style="--sw:${r.accent}" title="Dünya rengi"></button>
            ${["#ff5a24","#ffd83d","#a3e635","#2fd6c3","#5b9dff","#c084fc","#ff4d8d","#f5f5f5"].map(m=>`<button class="tema-renk${s.toLowerCase()===m?" aktif":""}" data-renk="${m}" style="--sw:${m}"></button>`).join("")}
            <label class="tema-renk-ozel" title="Özel renk">
              <input type="color" id="tema-accent-pick" value="${s||r.accent}" />
            </label>
          </div>
        </div>
        <div class="tema-ozel-satir">
          <span class="to-etiket">Köşe</span>
          <div class="sk-edit-seg" id="tema-radius">
            ${[["","Dünya"],["keskin","Keskin"],["yumusak","Yumuşak"],["hap","Hap"]].map(([m,p])=>`<button class="seg-btn${o===m?" aktif":""}" data-r="${m}">${p}</button>`).join("")}
          </div>
          <span class="to-ornek" id="tema-ornek">Örnek buton</span>
        </div>
      </div>

      <div class="sahne-art-secim" id="sahne-art-secim">
        <div class="sas-bas">
          <b>Sahne arka planı</b>
          <span>Karakterin arkasındaki piksel manzara — yalnız Sahne dünyasında görünür.</span>
        </div>
        <div class="sas-izgara" id="sas-izgara"></div>
      </div>
    </div>

    <div class="card set-card anim-fade-up">
      <h3>${V("sparkles")} Ambiens &amp; İmleç</h3>
      <p class="set-sub">Dünyanızı hareketlendir: her temanın kendi ambiens parçacık efekti vardır; imleç simgesi de seçilebilir.</p>
      <div class="row-between">
        <div>
          <b style="font-size:13px">Ambiens parçacıklar</b>
          <div style="font-size:11.5px; color:var(--text-dim)">Zımtırak, kar, fosfor yağmuru... — dünya efektinin yoğunluğu. Performans kaygısı varsa Sessiz'i seç.</div>
        </div>
        <select class="input" id="fx-particles" style="width:130px">
          <option value="none" ${e.fx_particles==="none"?"selected":""}>Kapalı</option>
          <option value="low" ${e.fx_particles==="low"?"selected":""}>Sessiz</option>
          <option value="mid" ${!e.fx_particles||e.fx_particles==="mid"?"selected":""}>Normal</option>
          <option value="high" ${e.fx_particles==="high"?"selected":""}>Yoğun</option>
        </select>
      </div>
      <div class="row-between" style="margin-top:12px">
        <div>
          <b style="font-size:13px">Fare imleci</b>
          <div style="font-size:11.5px; color:var(--text-dim)">Launcher içindeki fare simgesi — temasının rengiyle boyunca güncellenir.</div>
        </div>
        <select class="input" id="cursor-style" style="width:130px">
          <option value="standart" ${!e.cursor_style||e.cursor_style==="standart"?"selected":""}>Sistem</option>
          <option value="yikim" ${e.cursor_style==="yikim"?"selected":""}>YIKIM Oku</option>
          <option value="hedef" ${e.cursor_style==="hedef"?"selected":""}>Hedef</option>
          <option value="nokta" ${e.cursor_style==="nokta"?"selected":""}>Nokta</option>
        </select>
      </div>
    </div>

    <div class="card set-card anim-fade-up">
      <h3>${V("sparkle")} Ana Menü Animasyonları</h3>
      <p class="set-sub">Karakter vitrininde rastgele oynayan hareketler. Paketle gelenler herkeste hazır; kendin de ekleyebilirsin — eklediklerin yalnız sende görünür.</p>
      ${ar("menu-anim","Animasyonlar oynasın",e.menu_animasyon!==!1)}
      <div class="row-between" style="margin-top:8px">
        <span>Tempo</span>
        <select class="input" id="menu-anim-hiz" style="width:150px">
          <option value="sakin" ${e.menu_animasyon_hiz==="sakin"?"selected":""}>Sakin</option>
          <option value="normal" ${!e.menu_animasyon_hiz||e.menu_animasyon_hiz==="normal"?"selected":""}>Normal</option>
          <option value="canli" ${e.menu_animasyon_hiz==="canli"?"selected":""}>Canlı</option>
        </select>
      </div>
      <div class="anim-liste" id="anim-liste"><div class="spinner" style="margin:14px auto"></div></div>
      <div style="display:flex; gap:10px; margin-top:12px; flex-wrap:wrap">
        <button class="btn ghost" id="anim-ekle">${V("plus")} Dışarıdan ekle</button>
        <button class="btn ghost" id="anim-yenile">${V("undo")} Listeyi yenile</button>
      </div>
    </div>

    <div class="card set-card anim-fade-up">
      <h3>${V("mug")} Java</h3>
      <div class="row-between">
        <div>
          <b style="font-size:13px">Özel Java konumu</b>
          <div style="font-size:11.5px; color:var(--text-dim)">Boşsa YIKIMLient Mojang'in resmî runtime'ını otomatik indirir (önerilen).</div>
        </div>
        <div style="display:flex; gap:8px">
          <button class="btn ghost" id="pick-java">Klasör Seç</button>
          <button class="btn ghost" id="clear-java">Sıfırla</button>
        </div>
      </div>
      <div class="chip gray" id="java-path" style="margin-top:10px; max-width:100%; overflow:hidden; text-overflow:ellipsis">${e.java_dir||"otomatik"}</div>
    </div>

    <div class="card set-card anim-fade-up">
      <h3>${V("gear")} Genel</h3>
      ${ar("keep-open","Oyun açılınca launcher açık kalsın",e.keep_launcher_open)}
      ${ar("hide-on-launch","Oyun sırasında launcher'ı gizle (RAM tasarrufu)",e.hide_on_launch)}
      ${ar("show-news","Ana sayfada haberleri göster",e.show_news)}
      ${ar("stats-enabled","İstatistik toplansın (tamamen yerel)",e.stats_enabled)}
      ${ar("use-java25","Microsoft OpenJDK 25 kullan (mod paketleri için optimize)",e.use_java25!==!1)}
      ${ar("discord-rpc","Discord'da 'YIKIMLient ile oynuyor' göster (internet kullanmaz)",e.discord_rpc!==!1)}
      <div class="row-between" style="margin-top:8px">
        <span>İndirme hızı (paralel bağlantı)</span>
        <div class="ram-row" style="width:260px">
          <input type="range" min="8" max="64" step="8" value="${e.download_concurrency||32}" id="dlc-range" style="flex:1" />
          <span class="chip" id="dlc-val">${e.download_concurrency||32}</span>
        </div>
      </div>
    </div>

    <div id="rozet-alani"></div>

    <div class="card set-card anim-fade-up">
      <h3>${V("info")} Hakkında</h3>
      <div class="about-row"><span>YIKIMLient</span><b id="app-version">yükleniyor…</b></div>
      <div class="about-row"><span>Tür</span><b>Ultra-hafif Minecraft launcher</b></div>
      <div class="about-row"><span>Motor</span><b>Tauri 2 + Rust (Electron'suz)</b></div>
      <div style="display:flex; gap:10px; margin-top:14px; flex-wrap:wrap">
        <button class="btn ghost" id="check-upd">Güncellemeleri Kontrol Et</button>
        <button class="btn ghost" id="upd-page">${V("dl")} İndirme Sayfası</button>
        <button class="btn ghost" id="open-dir">${V("folder")} Veri Klasörü</button>
      </div>
      <p style="margin-top:12px; font-size:11.5px; color:var(--text-faint)">
        YIKIMLient, Mojang veya Microsoft ile bağlantılı değildir. Minecraft, Mojang Synergies AB'nin tescilli markasıdır.
      </p>
    </div>
    </div>
  `,i.querySelector("#acc-add-ms")?.addEventListener("click",()=>zn()),i.querySelector("#acc-add-off")?.addEventListener("click",()=>zn());const c=i.querySelector("#guvenlik-karti");c&&fr(c),i.querySelectorAll(".acc-row").forEach(m=>{const p=m.dataset.id;m.querySelector(".acc-use")?.addEventListener("click",async v=>{v.stopPropagation(),await te("cmd_select_account",{accountId:p}),await ln(),Xs(i),X("Hesap değiştirildi")}),m.querySelector(".acc-del")?.addEventListener("click",async v=>{v.stopPropagation(),confirm("Bu hesap kaldırılsın mı?")&&(await te("cmd_remove_account",{accountId:p}),await ln(),Xs(i),X("Hesap kaldırıldı"))})}),i.querySelectorAll(".world-card").forEach(m=>m.addEventListener("click",async()=>{le.config.theme=m.dataset.t,Di(),await Mn(),Xs(i)})),i.querySelector("#skins-alani")?.addEventListener("click",()=>je("skins"));const l=()=>le.config.tema_ozel||={},d=async(m,p)=>{const v=l()[n]||={};v[m]=p,!v.accent&&!v.radius&&delete l()[n],Di(),await Mn()};i.querySelectorAll(".tema-renk").forEach(m=>m.addEventListener("click",async()=>{const p=m.dataset.renk||"";i.querySelectorAll(".tema-renk").forEach(v=>v.classList.toggle("aktif",v===m)),await d("accent",p),X(p?"Vurgu rengi güncellendi":"Dünya rengine dönüldü")}));const f=i.querySelector("#tema-accent-pick");f?.addEventListener("input",()=>{le.config.tema_ozel||={},(le.config.tema_ozel[n]||={}).accent=f.value,Di()}),f?.addEventListener("change",async()=>{await Mn(),X("Vurgu rengi kaydedildi")}),i.querySelectorAll("#tema-radius .seg-btn").forEach(m=>m.addEventListener("click",async()=>{i.querySelectorAll("#tema-radius .seg-btn").forEach(p=>p.classList.toggle("aktif",p===m)),await d("radius",m.dataset.r||"")})),i.querySelector("#tema-sifirla")?.addEventListener("click",async()=>{delete l()[n],Di(),await Mn(),Xs(i),X("Bu dünyanın özelleştirmesi sıfırlandı")});const u=i.querySelector("#sas-izgara");if(u){const m=String(e.sahne_arka||"kiraz");u.innerHTML=OM.map(p=>`
      <button class="sas-kart${p.id===m?" sel":""}" data-art="${p.id}">
        <span class="sas-tuval"><canvas data-ciz="${p.id}"></canvas></span>
        <b>${p.ad}</b>
        <small>${p.etiket}</small>
      </button>`).join(""),u.querySelectorAll("canvas[data-ciz]").forEach(p=>{mv(p,p.dataset.ciz||"kiraz")}),u.querySelectorAll(".sas-kart").forEach(p=>p.addEventListener("click",async()=>{le.config.sahne_arka=p.dataset.art,u.querySelectorAll(".sas-kart").forEach(v=>v.classList.toggle("sel",v===p)),await Mn(),X("Sahne arka planı değişti")}))}i.querySelector("#fx-particles")?.addEventListener("change",async m=>{le.config.fx_particles=m.target.value,Di(),await Mn()}),i.querySelector("#cursor-style")?.addEventListener("change",async m=>{le.config.cursor_style=m.target.value,Di(),await Mn()}),i.querySelector("#pick-java")?.addEventListener("click",async()=>{const m=await te("cmd_pick_java");m&&(le.config.java_dir=m,await Mn(),i.querySelector("#java-path").textContent=m,X("Java konumu kaydedildi"))}),i.querySelector("#clear-java")?.addEventListener("click",async()=>{le.config.java_dir=null,await Mn(),i.querySelector("#java-path").textContent="otomatik"}),rr(i,"keep-open","keep_launcher_open"),rr(i,"hide-on-launch","hide_on_launch"),rr(i,"show-news","show_news"),rr(i,"stats-enabled","stats_enabled"),rr(i,"use-java25","use_java25"),rr(i,"discord-rpc","discord_rpc"),rr(i,"menu-anim","menu_animasyon"),i.querySelector("#menu-anim-hiz")?.addEventListener("change",async m=>{le.config.menu_animasyon_hiz=m.target.value,await Mn()});const h=()=>Ov(i);i.querySelector("#anim-yenile")?.addEventListener("click",h),i.querySelector("#anim-ekle")?.addEventListener("click",async()=>{try{const m=await te("cmd_pick_emote");m?.length&&(X(`${m.length} animasyon eklendi`),h())}catch(m){X(`Animasyon eklenemedi: ${m}`,"err")}}),h();const g=i.querySelector("#dlc-range");g.addEventListener("input",()=>i.querySelector("#dlc-val").textContent=g.value),g.addEventListener("change",async()=>{le.config.download_concurrency=parseInt(g.value),await Mn()}),i.querySelector("#check-upd")?.addEventListener("click",async()=>{X("Güncelleme kontrol ediliyor…");try{const p=await(await ct(()=>import("./index-DSkUPpwd.js"),[])).check();if(p?.available){let v={};try{v=await te("cmd_guncelleme_bilgi")}catch{}if(v.os==="linux"&&(v.bundle==="deb"||v.bundle==="rpm")){const S=v.bundle==="rpm",k=p?.rawJson??{},A=k?.platforms?.[S?"linux-x86_64-rpm":"linux-x86_64-deb"]??k?.platforms?.["linux-x86_64-deb"]??k?.platforms?.["linux-x86_64"],x=String(A?.url||`https://github.com/YKSAMI1/yikimlient/releases/tag/v${p.version}`),{root:w,close:R}=tn(`
            <h2>Güncelleme Var</h2>
            <div class="sub">YIKIMLient <b>v${p.version}</b> hazır.</div>
            <p class="gv-mini" style="margin:10px 0; color:var(--text-dim); line-height:1.6">
              Kurulumun <b>${S?".rpm":".deb"}</b> paketiyle yapıldı. Paket yöneticisi yönetici
              izni istediği için launcher kendini sessizce güncelleyemiyor. Yeni paketi indirip
              dosyayı çift tıkla — ayarların ve hesapların korunur.
            </p>
            <div style="display:flex; gap:10px; justify-content:flex-end; margin-top:6px">
              <button class="btn ghost" id="upd-later">Sonra</button>
              <button class="btn primary" id="upd-indir">Paketi indir (${S?".rpm":".deb"})</button>
            </div>
          `);w.querySelector("#upd-later")?.addEventListener("click",()=>R()),w.querySelector("#upd-indir")?.addEventListener("click",async()=>{try{await qi(x),R()}catch(L){X(`Bağlantı açılamadı: ${L}`,"err")}});return}const{root:T,close:b}=tn(`
          <h2>Güncelleme Var</h2>
          <div class="sub">YIKIMLient <b>v${p.version}</b> hazır. Değişiklik notları:</div>
          <div style="margin:12px 0; max-height:160px; overflow-y:auto; user-select:text; color:var(--text-dim); font-size:12.5px; line-height:1.55">
            ${(p.body||"Değişiklik notu yok.").split(`
`).map(S=>`<div>${S}</div>`).join("")}
          </div>
          <div style="display:flex; gap:10px; justify-content:flex-end; margin-top:6px">
            <button class="btn ghost" id="upd-later">Sonra</button>
            <button class="btn primary" id="upd-go">İndir ve Kur</button>
          </div>
        `);T.querySelector("#upd-later")?.addEventListener("click",()=>b()),T.querySelector("#upd-go")?.addEventListener("click",async()=>{const S=T.querySelector("#upd-go");S.disabled=!0,S.textContent="İndiriliyor…";try{await p.downloadAndInstall(),X("Güncelleme kuruldu — launcher yeniden başlıyor"),setTimeout(()=>{try{window.__TAURI__.process.exit(0)}catch{location.reload()}},900)}catch(k){S.disabled=!1,S.textContent="İndir ve Kur",X(`Güncelleme başarısız: ${k}`,"err")}})}else X("YIKIMLient güncel ✓")}catch(m){await IE(m)}}),i.querySelector("#upd-page")?.addEventListener("click",()=>{qi(tc).catch(()=>X(`Tarayıcı açılamadı — adresi elle aç: ${tc}`,"err"))}),i.querySelector("#open-dir")?.addEventListener("click",async()=>{const m=await te("cmd_get_app_dir");u_(m).catch(()=>{})}),PE(i,e)}function CE(i){const e=bn();if(!e||e.kind!=="microsoft")return!1;const t=e.name.toLowerCase(),n=a=>(Array.isArray(a)?a:[]).some(r=>String(r).toLowerCase()===t);return n(i?.atolye_admin)||n(i?.atolye_izinli)}const Rd=["#ffffff","#c9ced8","#5b6472","#12151c","#ff5a24","#ffd83d","#a3e635","#2fd6c3","#5b9dff","#c084fc","#ff4d8d","#8b3a1e"];function PE(i,e){const t=i.querySelector("#rozet-alani");if(t){if(CE(e)){jp(i,e);return}t.innerHTML="",te("cmd_rozet_yetki").then(n=>{n?.izinli&&jp(i,e)}).catch(()=>{})}}function jp(i,e){const t=i.querySelector("#rozet-alani");if(!t)return;const n=bn(),a=!!n&&(e?.atolye_admin||[]).some(R=>String(R).toLowerCase()===n.name.toLowerCase());let r=new Array(64).fill("");const s=R=>/^#[0-9a-fA-F]{6}$/.test(String(R||""));let o=s(e.rozet_renk)?String(e.rozet_renk):"#ffd83d",c=(Array.isArray(e.rozet_renkler)?e.rozet_renkler:[]).filter(s).slice(0,24),l=!1;const d=[];let f=[...e.atolye_izinli||[]];t.innerHTML=`
    <div class="card set-card anim-fade-up">
      <h3>${V("brush")} Rozet — İsim Logosu <span class="chip">yalnız sahip</span></h3>
      <p class="set-sub">
        Bu logoyu yalnız sen çizebilirsin. Çizim <b>tüm kurulumlarına</b> yazılır ve oyun içinde
        adının başına basılır — hangi sunucu olursa olsun, TAB ve F5 dahil. İzin verdiğin
        oyuncular da kendi logolarını çizebilir.
      </p>

      <div class="rozet-duzen">
        <div class="rozet-sol">
          <div class="rozet-izgara" id="rozet-izgara"></div>
          <div class="rozet-palet">
            <button class="rozet-renk${l?"":" aktif"}" data-c="" title="Boya">
              ${V("brush")}
            </button>
            <div class="rozet-renkler" id="rozet-renkler"></div>
            <label class="rozet-renk ozel-renk" title="İstediğin rengi seç (sınırsız)">
              <input type="color" id="rozet-renk-sec" value="${o}" />
              <span class="ozel-arti">+</span>
            </label>
            <button class="rozet-renk${l?" aktif":""}" id="rozet-silgi" title="Silgi">
              ${V("trash")}
            </button>
          </div>
          <div class="rozet-hex-satir">
            <span class="rozet-hex-onizleme" id="rozet-hex-onizleme" style="--c:${o}"></span>
            <input class="input rozet-hex" id="rozet-hex" maxlength="7" placeholder="#rrggbb" value="${o}" />
            <button class="btn ghost sm" id="rozet-renk-kaydet">Rengi kaydet</button>
          </div>
          <div class="rozet-araclar">
            <button class="btn ghost sm" id="rozet-geri">${V("undo")} Geri</button>
            <button class="btn ghost sm" id="rozet-temizle">Temizle</button>
            <button class="btn ghost sm" id="rozet-stok">Standart Y</button>
          </div>
        </div>
        <div class="rozet-sag">
          <div class="rozet-onizleme">
            <span class="ro-ambiyans"></span>
            <span class="ro-etiket">Önizleme</span>
            <span class="ro-satir">
              <span class="ro-rozet" id="rozet-onizleme"></span>
              <b class="ro-isim">${bn()?.name||"oyuncu"}</b>
            </span>
          </div>
          <div style="display:flex; gap:8px; flex-wrap:wrap">
            <button class="btn primary sm" id="rozet-kaydet">Kaydet ve yayınla</button>
            <button class="btn danger sm" id="rozet-sil">Rozeti kaldır</button>
          </div>
          <div class="set-sub" style="margin:0; font-size:11px">
            Kaydedince dosya tüm kurulumlara yazılır ve oyun içinde en geç 30 saniyede görünür.
          </div>
        </div>
      </div>

      ${a?`<div class="rozet-izinler">
        <div class="rozet-izin-bas">
          <b>Kendi rozetini çizebilecekler</b>
          <span class="set-sub" style="margin:0; font-size:11px">Orijinal (Microsoft) hesap adlarını yaz. Liste sunucuya gönderilir; o oyuncu launcher'ını açtığında atölyeyi görür.</span>
        </div>
        <div class="rozet-izin-ekle">
          <input class="input" id="rozet-isim" placeholder="Oyuncu adı" maxlength="32" />
          <button class="btn ghost sm" id="rozet-ekle">${V("plus")} Ekle</button>
        </div>
        <div class="rozet-cipler" id="rozet-cipler"></div>
      </div>`:""}
    </div>`;const u=t.querySelector("#rozet-izgara"),h=t.querySelector("#rozet-onizleme"),g=t.querySelector("#rozet-cipler"),m=()=>{u.innerHTML=r.map((R,L)=>`<button class="rozet-hucre${R?" dolu":""}" data-i="${L}" style="--c:${R||"transparent"}"></button>`).join(""),h.innerHTML=r.map(R=>`<i style="--c:${R||"transparent"}"></i>`).join("")},p=R=>{const L=l?"":o;r[R]!==L&&(r[R]=L,m())};u.addEventListener("click",R=>{const L=R.target.closest(".rozet-hucre");L&&(d.push([...r]),d.length>40&&d.shift(),p(Number(L.dataset.i)))});const v=t.querySelector("#rozet-renkler"),y=t.querySelector("#rozet-hex"),T=t.querySelector("#rozet-hex-onizleme"),b=t.querySelector("#rozet-renk-sec"),S=()=>{const R=[...Rd,...c];v.innerHTML=R.map((L,z)=>`<button class="rozet-renk${L.toLowerCase()===o.toLowerCase()?" secili":""}" data-c="${L}" style="--c:${L}" title="${L}" data-ozel="${z>=Rd.length?1:0}"></button>`).join(""),v.querySelectorAll(".rozet-renk").forEach(L=>L.addEventListener("click",()=>{const z=L.dataset.c||"";l=!1,z&&k(z)}))},k=(R,L=!0)=>{o=R.toLowerCase(),l=!1,t.querySelector("#rozet-silgi")?.classList.remove("aktif"),y.value=o,T.style.setProperty("--c",o),b.value=o,S(),L&&(le.config.rozet_renk=o,Mn())},A=R=>{if(!s(R))return X("Geçersiz renk — #rrggbb biçiminde yaz","err"),!1;const L=R.toLowerCase();return[...Rd,...c].some(z=>z.toLowerCase()===L)||(c=[...c,L].slice(-24),le.config.rozet_renkler=[...c]),k(L),!0};b?.addEventListener("input",()=>{k(b.value,!1)}),b?.addEventListener("change",()=>A(b.value)),t.querySelector("#rozet-renk-kaydet")?.addEventListener("click",()=>{const R=y.value.trim(),L=R.startsWith("#")?R:`#${R}`;A(L)&&X(`Renk paletine eklendi: ${L.toLowerCase()}`)}),y?.addEventListener("keydown",R=>{R.key==="Enter"&&t.querySelector("#rozet-renk-kaydet")?.dispatchEvent(new Event("click"))}),y?.addEventListener("input",()=>{const R=y.value.trim(),L=R.startsWith("#")?R:`#${R}`;T.style.setProperty("--c",s(L)?L:"transparent")}),t.querySelector("#rozet-silgi")?.addEventListener("click",()=>{l=!0,t.querySelectorAll(".rozet-renk").forEach(R=>R.classList.remove("aktif","secili")),t.querySelector("#rozet-silgi")?.classList.add("aktif")}),t.querySelector("#rozet-geri")?.addEventListener("click",()=>{const R=d.pop();R&&(r=R,m())}),t.querySelector("#rozet-temizle")?.addEventListener("click",()=>{d.push([...r]),r=new Array(64).fill(""),m()}),t.querySelector("#rozet-stok")?.addEventListener("click",()=>{d.push([...r]),r=DE(),m()}),t.querySelector("#rozet-kaydet")?.addEventListener("click",async()=>{const R=t.querySelector("#rozet-kaydet");R.disabled=!0,R.textContent="Kaydediliyor…";try{const L=await te("cmd_rozet_ciz",{pikseller:r});X(L?.yuklendi?`Rozet kaydedildi — ${L.kurulum} yere yazıldı ve diğer oyunculara yayınlandı`:`Rozet kaydedildi — ${L.kurulum} yere yazıldı (sunucuya ulaşılamadı: ${L?.hata||"ağ"})`)}catch(L){X(`Rozet kaydedilemedi: ${L}`,"err")}finally{R.disabled=!1,R.textContent="Kaydet ve yayınla"}}),t.querySelector("#rozet-sil")?.addEventListener("click",async()=>{confirm("Rozet kaldırılsın mı? İsimlerin başında standart Y logosu görünür.")&&(await te("cmd_rozet_sil"),r=new Array(64).fill(""),m(),X("Rozet kaldırıldı"))});const x=()=>{g&&(g.innerHTML=f.length?f.map((R,L)=>`<span class="rozet-cip">${R}<button data-i="${L}" title="Kaldır">×</button></span>`).join(""):'<span class="set-sub" style="margin:0; font-size:11.5px">Henüz kimse eklenmedi.</span>',g.querySelectorAll("button").forEach(R=>R.addEventListener("click",()=>{f.splice(Number(R.dataset.i),1),w()})))},w=async()=>{le.config.atolye_izinli=[...f],await Mn(),x();try{(await te("cmd_rozet_izinler",{isimler:f}))?.yuklendi||X("Liste sunucuya gönderilemedi (yerel kaydedildi)","err")}catch{}};t.querySelector("#rozet-ekle")?.addEventListener("click",()=>{const R=t.querySelector("#rozet-isim"),L=R.value.trim();if(L){if(f.some(z=>z.toLowerCase()===L.toLowerCase())){X("Bu isim zaten listede");return}f.push(L),R.value="",w(),X(`${L} eklendi`)}}),t.querySelector("#rozet-isim")?.addEventListener("keydown",R=>{R.key==="Enter"&&t.querySelector("#rozet-ekle")?.click()}),m(),S(),x(),te("cmd_rozet_oku").then(R=>{const L=R?.pikseller;Array.isArray(L)&&L.length===64&&(r=L,m())}).catch(()=>{})}function DE(){const i="#ffffff",e="#ff5a24";return[[i,"","","","",e,"",""],[i,"","","",e,e,"",""],["",i,"","","",e,"",""],["",i,"","",e,"","",""],["","",i,"",e,"","",""],["","",i,"",e,"","",""],["","",i,"","","","",""],["","",i,"","","","",""]].flat()}const tc="https://github.com/YKSAMI1/yikimlient/releases/latest";function Qp(i){return String(i??"").trim().replace(/^v/i,"")}async function IE(i){let e="",t="";try{const r=await te("cmd_check_updates"),s=Qp(r?.current),o=Qp(r?.latest);o&&o!==s&&(e=o)}catch{}try{const r=await te("cmd_upd_teshis"),s=Array.isArray(r?.platformlar)&&r.platformlar.length?r.platformlar.join(", "):"yok",o=[`HTTP ${r?.durum||"?"}`,`manifest ${r?.surum||"?"}`,`platform: ${s}`];r?.hata&&o.push(String(r.hata)),t=o.join(" · ")}catch{}const{root:n,close:a}=tn(`
    <h2>Güncelleme kontrolü başarısız</h2>
    <div class="sub">Otomatik güncelleyici bu sefer çalışmadı. Launcher'ı elle de güncelleyebilirsin — kurulum dosyası GitHub'daki sürüm sayfasında.</div>
    ${e?`<div style="margin-top:10px; font-size:13px; color:var(--text)">GitHub'da yeni sürüm duruyor: <b>v${e}</b></div>`:""}
    <div style="margin-top:10px; font-size:11.5px; line-height:1.5; color:var(--text-faint); user-select:text">${t?`Teşhis: ${t}`:`Hata: ${String(i??"bilinmiyor")}`}</div>
    <div style="display:flex; gap:10px; justify-content:flex-end; margin-top:14px">
      <button class="btn ghost" id="upd-kapat">Kapat</button>
      <button class="btn primary" id="upd-sayfa">${V("dl")} İndirme Sayfası</button>
    </div>
  `);n.querySelector("#upd-kapat")?.addEventListener("click",()=>a()),n.querySelector("#upd-sayfa")?.addEventListener("click",()=>{qi(tc).catch(()=>X(`Tarayıcı açılamadı — adresi elle aç: ${tc}`,"err"))})}async function Ov(i){const e=i.querySelector("#anim-liste");if(e)try{const t=await te("cmd_list_emotes");if(!t.length){e.innerHTML='<p class="set-sub" style="margin:10px 0 0">Henüz animasyon yok.</p>';return}e.innerHTML="";for(const n of t){const a=document.createElement("div");a.className="anim-satir",a.innerHTML=`
        <span class="anim-ad">${n.baslik||n.adi}</span>
        ${n.yerlesik?'<span class="chip gray">paket</span>':'<span class="chip">kendi</span>'}
        ${n.yerlesik?"":`<button class="btn danger sm anim-sil" title="Kaldır">${V("trash")}</button>`}`,a.querySelector(".anim-sil")?.addEventListener("click",async()=>{confirm(`"${n.baslik}" kaldırılsın mı?`)&&(await te("cmd_delete_emote",{adi:n.adi}),X("Animasyon kaldırıldı"),Ov(i))}),e.appendChild(a)}}catch(t){e.innerHTML=`<p class="set-sub" style="margin:10px 0 0">Liste yüklenemedi: ${String(t)}</p>`}}function ar(i,e,t){return`
    <div class="row-between" style="margin-top:8px">
      <span>${e}</span>
      <div class="switch ${t?"on":""}" data-tid="${i}"></div>
    </div>`}function rr(i,e,t){i.querySelector(`[data-tid="${e}"]`)?.addEventListener("click",async n=>{const a=n.currentTarget;a.classList.toggle("on"),le.config[t]=a.classList.contains("on"),await Mn()})}async function Mn(){await te("cmd_save_settings",{config:le.config}),await ln(),Di()}const kn=64,sr=64,zE=40;class nc{w=kn;h=sr;veri;gecmis=[];gelecek=[];constructor(e){this.veri=e?new Uint8ClampedArray(e):new Uint8ClampedArray(kn*sr*4)}static bos(){return new nc}static rgba(e,t=0){return[e[t],e[t+1],e[t+2],e[t+3]]}kopya(){return new nc(this.veri)}piksel(e,t){if(e<0||t<0||e>=kn||t>=sr)return[0,0,0,0];const n=(t*kn+e)*4;return[this.veri[n],this.veri[n+1],this.veri[n+2],this.veri[n+3]]}boya(e,t,n,a=1){const r=Math.max(1,Math.min(8,Math.floor(a))),s=e-Math.floor((r-1)/2),o=t-Math.floor((r-1)/2);for(let c=0;c<r;c++)for(let l=0;l<r;l++){const d=s+l,f=o+c;if(d<0||f<0||d>=kn||f>=sr)continue;const u=(f*kn+d)*4;this.veri[u]=n[0],this.veri[u+1]=n[1],this.veri[u+2]=n[2],this.veri[u+3]=n[3]}}cizgi(e,t,n,a,r,s=1){let o=Math.round(e),c=Math.round(t);const l=Math.round(n),d=Math.round(a),f=Math.abs(l-o),u=-Math.abs(d-c),h=o<l?1:-1,g=c<d?1:-1;let m=f+u;for(;this.boya(o,c,r,s),!(o===l&&c===d);){const p=2*m;p>=u&&(m+=u,o+=h),p<=f&&(m+=f,c+=g)}}kova(e,t,n){if(e<0||t<0||e>=kn||t>=sr)return;const a=this.piksel(e,t);if(em(a,n))return;const r=[t*kn+e],s=new Uint8Array(kn*sr);for(;r.length;){const o=r.pop();if(s[o])continue;s[o]=1;const c=o%kn,l=Math.floor(o/kn);em(this.piksel(c,l),a)&&(this.boya(c,l,n),c>0&&r.push(o-1),c<kn-1&&r.push(o+1),l>0&&r.push(o-kn),l<sr-1&&r.push(o+kn))}}damla(e,t){return this.piksel(e,t)}katmanBasla(){this.gecmis.push(new Uint8ClampedArray(this.veri)),this.gecmis.length>zE&&this.gecmis.shift(),this.gelecek.length=0}geriAl(){const e=this.gecmis.pop();return e?(this.gelecek.push(new Uint8ClampedArray(this.veri)),this.veri=e,!0):!1}ileriAl(){const e=this.gelecek.pop();return e?(this.gecmis.push(new Uint8ClampedArray(this.veri)),this.veri=e,!0):!1}geriVar(){return this.gecmis.length>0}ileriVar(){return this.gelecek.length>0}}function em(i,e){return i[0]===e[0]&&i[1]===e[1]&&i[2]===e[2]&&i[3]===e[3]}function UE(i){const e=new Uint8ClampedArray(16384);for(let t=0;t<32;t++){const n=t*64*4;e.set(i.subarray(n,n+64*4),n)}return e}function ai(i,e,t,n,a){return[{x:i+a,y:e,w:t,h:a},{x:i+a+t,y:e,w:t,h:a},{x:i,y:e+a,w:a,h:n},{x:i+a,y:e+a,w:t,h:n},{x:i+a+t,y:e+a,w:a,h:n},{x:i+a+t+a,y:e+a,w:t,h:n}]}const tm=[{id:"kafa",ad:"Kafa",x:8,y:8,w:8,h:8,katman:"taban",dilimler:ai(0,0,8,8,8)},{id:"govde",ad:"Gövde",x:20,y:20,w:8,h:12,katman:"taban",dilimler:ai(16,16,8,12,4)},{id:"sag-kol",ad:"Sağ Kol",x:44,y:20,w:4,h:12,katman:"taban",dilimler:ai(40,16,4,12,4)},{id:"sol-kol",ad:"Sol Kol",x:36,y:52,w:4,h:12,katman:"taban",dilimler:ai(32,48,4,12,4)},{id:"sag-bacak",ad:"Sağ Bacak",x:4,y:20,w:4,h:12,katman:"taban",dilimler:ai(0,16,4,12,4)},{id:"sol-bacak",ad:"Sol Bacak",x:20,y:52,w:4,h:12,katman:"taban",dilimler:ai(16,48,4,12,4)},{id:"sapka",ad:"Şapka",x:40,y:8,w:8,h:8,katman:"ust",dilimler:ai(32,0,8,8,8)},{id:"ceket",ad:"Ceket",x:20,y:36,w:8,h:12,katman:"ust",dilimler:ai(16,32,8,12,4)},{id:"sag-kolluk",ad:"Sağ Kolluk",x:44,y:36,w:4,h:12,katman:"ust",dilimler:ai(40,32,4,12,4)},{id:"sol-kolluk",ad:"Sol Kolluk",x:52,y:52,w:4,h:12,katman:"ust",dilimler:ai(48,48,4,12,4)},{id:"sag-pantolon",ad:"Sağ Pantolon",x:4,y:36,w:4,h:12,katman:"ust",dilimler:ai(0,32,4,12,4)},{id:"sol-pantolon",ad:"Sol Pantolon",x:4,y:52,w:4,h:12,katman:"ust",dilimler:ai(0,48,4,12,4)}],Ld={x:1,y:1,w:10,h:16},NE={x:12,y:1,w:10,h:16},Fv=20,OE=36,FE=2,BE=4,HE=1;function $E(i){const e=i?3:4,t=HE+4,n=i?t-3:t-4,a=t+8;return[{ad:"sag-bacak",x:t,y:20,on:{x:4,y:20,w:4,h:12},yan:{x:8,y:20,w:4,h:12},yanGorunur:!1,ust:{x:4,y:36,w:4,h:12},ustYan:{x:8,y:36,w:4,h:12}},{ad:"sol-bacak",x:t+4,y:20,on:{x:20,y:52,w:4,h:12},yan:{x:24,y:52,w:4,h:12},yanGorunur:!0,ust:{x:4,y:52,w:4,h:12},ustYan:{x:8,y:52,w:4,h:12}},{ad:"govde",x:t,y:8,on:{x:20,y:20,w:8,h:12},yan:{x:28,y:20,w:4,h:12},yanGorunur:!1,ust:{x:20,y:36,w:8,h:12},ustYan:{x:28,y:36,w:4,h:12}},{ad:"sag-kol",x:n,y:8,on:{x:44,y:20,w:e,h:12},yan:{x:44+e,y:20,w:e,h:12},yanGorunur:!1,ust:{x:44,y:36,w:e,h:12},ustYan:{x:44+e,y:36,w:e,h:12}},{ad:"sol-kol",x:a,y:8,on:{x:36,y:52,w:e,h:12},yan:{x:36+e,y:52,w:e,h:12},yanGorunur:!0,ust:{x:52,y:52,w:e,h:12},ustYan:{x:52+e,y:52,w:e,h:12}},{ad:"kafa",x:t,y:0,on:{x:8,y:8,w:8,h:8},yan:{x:16,y:8,w:8,h:8},yanGorunur:!0,ust:{x:40,y:8,w:8,h:8},ustYan:{x:48,y:8,w:8,h:8}}]}function GE(i){const e=i.getContext("2d",{willReadFrequently:!0});return e?(n=>{let a=0;try{const r=e.getImageData(n.x,n.y,n.w,n.h).data;for(let s=3;s<r.length;s+=4)r[s]>8&&a++}catch{return 0}return a})(Ld)>0?Ld:NE:Ld}const Ve=64,kt=32,In=Ve*kt,Bv={pelerin:{u:0,v:0,w:10,h:16,d:1},kanat:{u:22,v:0,w:10,h:20,d:2}},kc=[{id:"p-dis",ad:"Dış (görünen)",x:1,y:1,w:10,h:16},{id:"p-ic",ad:"İç (astar)",x:12,y:1,w:10,h:16},{id:"p-sol",ad:"Sol yan",x:11,y:1,w:1,h:16},{id:"p-sag",ad:"Sağ yan",x:0,y:1,w:1,h:16},{id:"p-ust",ad:"Üst",x:1,y:0,w:10,h:1},{id:"p-alt",ad:"Alt",x:11,y:0,w:10,h:1}],Mc=[{id:"e-dis",ad:"Dış (görünen)",x:36,y:2,w:10,h:20},{id:"e-ic",ad:"İç",x:24,y:2,w:10,h:20},{id:"e-sol",ad:"Sol yan",x:34,y:2,w:2,h:20},{id:"e-sag",ad:"Sağ yan",x:22,y:2,w:2,h:20},{id:"e-ust",ad:"Üst",x:24,y:0,w:10,h:2},{id:"e-alt",ad:"Alt",x:34,y:0,w:10,h:2}];function Ka(i){return(i==="pelerin"?kc:Mc)[0]}function Hv(i){return(i==="pelerin"?kc:Mc)[1]}function Ar(){return Array.from({length:In},()=>"")}function di(i){return!i.some(e=>e!=="")}function nm(){const i=document.createElement("canvas");return i.width=Ve,i.height=kt,i}function ic(i,e,t){const n=i.getContext("2d");if(n){n.imageSmoothingEnabled=!1,n.clearRect(0,0,Ve,kt),t&&t(n);for(let a=0;a<kt;a++)for(let r=0;r<Ve;r++){const s=e[a*Ve+r];s&&(n.fillStyle=s,n.fillRect(r,a,1,1))}}}function Ku(i){const e=i.getImageData(0,0,Ve,kt).data,t=new Array(In);for(let n=0;n<In;n++){const a=e[n*4+3];t[n]=a<24?"":`#${Cd(e[n*4])}${Cd(e[n*4+1])}${Cd(e[n*4+2])}`}return t}const Cd=i=>i.toString(16).padStart(2,"0"),VE=["#46515d","#7f8f9f","#424c58","#4f5c6a","#4a5663","#5f6f80","#586675","#67788a","#77889a","#6d7f92"],qE="31,0,0;32,0,0;33,0,0;34,0,1;35,0,1;36,0,1;37,0,1;38,0,1;39,0,1;32,1,0;33,1,0;34,2,0;35,2,0;36,2,2;37,2,0;38,2,0;39,2,0;40,2,0;41,2,2;34,3,0;35,3,0;36,3,2;37,3,2;38,3,0;39,3,0;40,3,0;41,3,0;42,3,0;35,4,0;36,4,2;37,4,2;38,4,0;39,4,0;40,4,0;41,4,0;42,4,0;43,4,2;35,5,0;36,5,2;37,5,2;38,5,0;39,5,0;40,5,0;41,5,0;42,5,0;43,5,0;35,6,0;36,6,2;37,6,0;38,6,2;39,6,0;40,6,0;41,6,0;42,6,3;43,6,3;35,7,0;36,7,2;37,7,0;38,7,0;39,7,2;40,7,4;41,7,3;42,7,3;43,7,3;44,7,5;35,8,4;36,8,2;37,8,0;38,8,0;39,8,4;40,8,4;41,8,4;42,8,3;43,8,6;44,8,5;35,9,4;36,9,4;37,9,4;38,9,3;39,9,3;40,9,3;41,9,3;42,9,4;43,9,6;44,9,6;35,10,3;36,10,4;37,10,3;38,10,4;39,10,3;40,10,3;41,10,6;42,10,5;43,10,5;44,10,7;22,11,8;36,11,3;37,11,6;38,11,6;39,11,6;40,11,5;41,11,5;42,11,5;43,11,5;44,11,7;45,11,1;22,12,8;36,12,6;37,12,5;38,12,5;39,12,5;40,12,6;41,12,5;42,12,5;43,12,7;44,12,9;45,12,1;22,13,1;36,13,6;37,13,5;38,13,5;39,13,5;40,13,5;41,13,6;42,13,7;43,13,7;44,13,9;45,13,1;22,14,8;36,14,5;37,14,5;38,14,7;39,14,9;40,14,9;41,14,9;42,14,9;43,14,9;44,14,7;45,14,8;22,15,1;36,15,7;37,15,9;38,15,7;39,15,7;40,15,9;41,15,9;42,15,9;43,15,9;44,15,9;45,15,1;22,16,1;37,16,7;38,16,9;39,16,9;40,16,7;41,16,7;42,16,7;43,16,9;44,16,1;45,16,1;22,17,8;37,17,7;38,17,7;39,17,9;40,17,9;41,17,9;42,17,9;43,17,8;44,17,8;45,17,8;22,18,1;37,18,8;38,18,1;39,18,8;40,18,1;41,18,1;42,18,1;43,18,1;44,18,1;45,18,1;22,19,1;38,19,1;39,19,1;40,19,8;41,19,8;42,19,8;43,19,1;44,19,1;45,19,1;22,20,7;38,20,8;39,20,1;40,20,1;41,20,1;42,20,1;43,20,8;44,20,8;45,20,8;22,21,7;39,21,8;40,21,8;41,21,1;42,21,1;43,21,1;44,21,1;45,21,1";function Gf(){const i=Ar();for(const e of qE.split(";")){const[t,n,a]=e.split(",");i[Number(n)*Ve+Number(t)]=VE[Number(a)]}return i}const Vf=BE,$v=Fv*Vf,Gv=OE*Vf,WE=.3,Pd=2;let KE=null;function im(i,e,t,n,a,r,s){r<=0||s<=0||i.drawImage(e,t.x,t.y,t.w,t.h,n,a,r,s)}function am(i,e,t,n,a,r,s){if(r<=0||s<=0)return;const o=KE??=document.createElement("canvas"),c=Math.round(r),l=Math.round(s);o.width=c,o.height=l;const d=o.getContext("2d");d&&(d.imageSmoothingEnabled=!1,d.drawImage(e,t.x,t.y,t.w,t.h,0,0,c,l),d.globalCompositeOperation="source-atop",d.fillStyle=`rgba(0, 0, 0, ${WE})`,d.fillRect(0,0,c,l),d.globalCompositeOperation="source-over",i.drawImage(o,n,a))}function XE(i,e,t,n=Vf){const a=n;i.imageSmoothingEnabled=!1,i.clearRect(0,0,i.canvas.width,i.canvas.height);const r=$E(t),s=FE*a;i.save(),i.fillStyle="rgba(0, 0, 0, 0.34)",i.beginPath(),i.ellipse(Fv/2*a,(31.3+Pd)*a,6.2*a,1*a,0,0,Math.PI*2),i.fill(),i.restore();for(const o of r){if(!o.yanGorunur)continue;const c=(o.x+o.on.w)*a,l=(o.y+Pd)*a;am(i,e,o.yan,c,l,s,o.on.h*a),o.ust&&o.ustYan&&am(i,e,o.ustYan,c,l,s,o.on.h*a)}for(const o of r){const c=o.x*a,l=(o.y+Pd)*a;im(i,e,o.on,c,l,o.on.w*a,o.on.h*a),o.ust&&im(i,e,o.ust,c,l,o.ust.w*a,o.ust.h*a)}}const YE=["#000000","#ffffff","#7f7f7f","#c0c0c0","#ff5555","#ff9f43","#ffe066","#4cd964","#34c3ff","#4b6bff","#a55eea","#ff6bcb","#7a4a2b","#c98b5e","#2b6b3a","#123a5e"],_n=64;function ZE(i,e,t,n){const a=e.pafta;let r=e.slim,s=e.ad,o="kalem",c=1,l=[255,90,40,255],d=null,f=!1,u=8,h=!1,g=-1,m=-1;const p=document.createElement("div");p.className="sk-edit",p.innerHTML=`
    <header class="sk-edit-ust">
      <button class="btn ghost" id="ske-geri">${V("back")} Kapat</button>
      <div class="sk-edit-baslik">
        <b>Skin Düzenle</b>
        <span id="ske-ad-etiket">${Dd(s)}</span>
      </div>
      <div class="sk-edit-ust-sag">
        <div class="sk-edit-seg" role="group" aria-label="Model tipi">
          <button class="seg-btn aktif" data-slim="0">Wide</button>
          <button class="seg-btn" data-slim="1">Slim</button>
        </div>
        <button class="btn" id="ske-disa">${V("dl")} Dışa Aktar</button>
        <button class="btn primary" id="ske-kaydet">Kaydet</button>
      </div>
    </header>
    <div class="sk-edit-govde">
      <section class="sk-edit-sol">
        <div class="sk-tuval-sar" id="ske-sar">
          <canvas id="ske-tuval" width="${_n*u}" height="${_n*u}"></canvas>
          <canvas id="ske-izgara" width="${_n*u}" height="${_n*u}"></canvas>
          <canvas id="ske-3d-tuval" hidden></canvas>
        </div>
        <div class="sk-edit-zum">
          ${[4,8,16].map(B=>`<button class="seg-btn ${B===u?"aktif":""}" data-zum="${B}">${B}×</button>`).join("")}
          <span class="sk-edit-ipucu">Ctrl+Z geri · Ctrl+Shift+Z ileri · Ctrl+S kaydet</span>
        </div>
      </section>
      <aside class="sk-edit-sag">
        <div class="sk-blok">
          <div class="sk-blok-baslik">${V("box")} 3D çizim</div>
          <div class="sk-edit-3dbar">
            <button class="seg-btn" id="ske-3d" title="Doğrudan modelin üstüne çiz">${V("box")} 3D Çiz</button>
            <button class="seg-btn" id="ske-izgara3d" title="Piksel matrisini (ızgara) karakterin üstünde göster">Matris</button>
            <span class="sk-zum3d" id="ske-zum3d" role="group" aria-label="Karakter yakınlaştırma">
              <button class="seg-btn" data-zum3d="-1" title="Uzaklaş">−</button>
              <button class="seg-btn" data-zum3d="1" title="Yakınlaş">+</button>
              <button class="seg-btn" data-zum3d="0" title="Varsayılan mesafe">Sığdır</button>
            </span>
          </div>
          <p class="sk-etiket sk-3d-ipucu" id="ske-3d-ipucu">Overlay açık — boyama overlay katmanına gider.</p>
          <div class="sk-3d-parca" id="ske-parca" hidden>
            <button class="seg-btn aktif" data-parca="kafa">Kafa</button>
            <button class="seg-btn aktif" data-parca="govde">Gövde</button>
            <button class="seg-btn aktif" data-parca="kollar">Kollar</button>
            <button class="seg-btn aktif" data-parca="bacaklar">Bacaklar</button>
            <button class="seg-btn aktif" data-parca="kaplama" title="Overlay katmanını göster/gizle — açıkken 3D boyama overlay'e, kapalıyken skin yüzeyine gider">Overlay</button>
            <button class="seg-btn aktif" data-parca="kozmetik" title="Pelerin ve elitra kanadı">Pelerin</button>
          </div>
          <div class="sk-edit-onizleme">
            <canvas id="ske-onizleme"></canvas>
          </div>
        </div>

        <div class="sk-blok">
          <div class="sk-blok-baslik">${V("brush")} Araçlar</div>
          <div class="sk-arac-cubugu">
            <button class="sk-arac aktif" data-arac="kalem" title="Kalem">${V("brush")}</button>
            <button class="sk-arac" data-arac="silgi" title="Silgi">${V("eraser")}</button>
            <button class="sk-arac" data-arac="kova" title="Kova — bitişik aynı renk alanını doldur">${V("bucket")}</button>
            <button class="sk-arac" data-arac="damla" title="Damlalık — tuvalden renk al">${V("picker")}</button>
            <span class="sk-arac-ayrac"></span>
            <button class="sk-arac" id="ske-geri-al" title="Geri Al">${V("undo")}</button>
            <button class="sk-arac" id="ske-ileri-al" title="İleri Al">${V("redo")}</button>
            <div class="sk-kalinlik">
              ${[1,2,4].map(B=>`<button class="seg-btn ${B===1?"aktif":""}" data-kalinlik="${B}" title="${B} piksel kalınlık">${B}</button>`).join("")}
            </div>
          </div>
        </div>

        <div class="sk-blok">
          <div class="sk-blok-baslik">${V("sparkle")} Renk</div>
          <div class="sk-renk-satir">
            <input type="color" id="ske-renk" value="#ff5a28" aria-label="Renk" />
            <input class="input" id="ske-renk-hex" value="#ff5a28" maxlength="7" spellcheck="false" aria-label="Renk kodu (hex)" />
          </div>
          <span class="sk-etiket">Son kullandıkların</span>
          <div class="kz-son-renkler" id="ske-son"></div>
          <span class="sk-etiket">Hazır palet</span>
          <div class="sk-palet" id="ske-palet">
            ${YE.map(B=>`<button class="sk-palet-renk" data-renk="${B}" style="--c:${B}" title="${B}"></button>`).join("")}
          </div>
        </div>

        <div class="sk-blok">
          <div class="sk-bolgeler">
            <div class="sk-bolgeler-ust">
              <b>Bölgeler</b>
              <label class="sk-onay"><input type="checkbox" id="ske-sadece" /> sadece bu parça</label>
            </div>
            <div class="sk-bolge-liste" id="ske-bolgeler">
              ${["taban","ust"].map(B=>`
                <div class="sk-bolge-grup">
                  <span>${B==="taban"?"Taban katman":"Üst katman"}</span>
                  ${tm.filter(E=>E.katman===B).map(E=>`<button class="sk-bolge" data-bolge="${E.id}">${E.ad}</button>`).join("")}
                </div>`).join("")}
            </div>
          </div>
        </div>

        <div class="sk-blok">
          <div class="sk-blok-baslik">${V("check")} Kaydet</div>
          <div class="sk-edit-kayit">
            <label class="sk-edit-etiket">Skin adı</label>
            <input class="input" id="ske-ad" value="${Dd(s)}" maxlength="48" />
            <div class="sk-edit-kayit-btn">
              <button class="btn" id="ske-kitaplik">${V("folder")} Sadece Kitaplığa Kaydet</button>
              <button class="btn primary" id="ske-giy">${V("check")} Kaydet ve Giy</button>
            </div>
            <div class="sk-edit-uyari" id="ske-uyari"></div>
          </div>
        </div>
      </aside>
    </div>
  `,document.body.appendChild(p);const v=p.querySelector("#ske-tuval"),y=p.querySelector("#ske-izgara"),T=v.getContext("2d"),b=y.getContext("2d"),S=p.querySelector("#ske-onizleme"),k=document.createElement("canvas");k.width=_n,k.height=_n;const A=k.getContext("2d"),x=Nn();x.kur(S),x.tuvalDoku(k,r),(async()=>{try{const B=await te("cmd_kozmetik_oku");B.pelerin_dosya&&B.pelerin_aktif!==!1&&await x.pelerin({url:Mt(B.pelerin_dosya)})}catch{}})();function w(){const B=new ImageData(new Uint8ClampedArray(a.veri),_n,_n);A.putImageData(B,0,0),T.imageSmoothingEnabled=!1,T.clearRect(0,0,v.width,v.height),T.drawImage(k,0,0,v.width,v.height),R(),x.dokuTazele()}function R(){b.clearRect(0,0,y.width,y.height);const B=y.width/_n;if(u>=8){b.strokeStyle="rgba(255,255,255,0.09)",b.lineWidth=1;for(let E=1;E<_n;E++)b.beginPath(),b.moveTo(E*B,0),b.lineTo(E*B,y.height),b.stroke(),b.beginPath(),b.moveTo(0,E*B),b.lineTo(y.width,E*B),b.stroke()}if(d){b.strokeStyle="rgba(255,150,60,0.35)",b.lineWidth=1,b.setLineDash([]);for(const E of d.dilimler)E.x===d.x&&E.y===d.y||b.strokeRect(E.x*B+.5,E.y*B+.5,E.w*B-1,E.h*B-1);if(b.strokeStyle="rgba(255,150,60,0.95)",b.lineWidth=2,b.setLineDash([6,4]),b.strokeRect(d.x*B+1,d.y*B+1,d.w*B-2,d.h*B-2),b.setLineDash([]),f){b.fillStyle="rgba(0,0,0,0.55)",b.beginPath(),b.rect(0,0,y.width,y.height);for(const E of d.dilimler)b.rect(E.x*B,E.y*B,E.w*B,E.h*B);b.fill("evenodd")}}}function L(B){const E=v.getBoundingClientRect(),_=Math.floor((B.clientX-E.left)/E.width*_n),O=Math.floor((B.clientY-E.top)/E.height*_n);return[Math.max(0,Math.min(_n-1,_)),Math.max(0,Math.min(_n-1,O))]}function z(){return o==="silgi"?[0,0,0,0]:l}v.addEventListener("pointerdown",B=>{if(B.button!==0)return;const[E,_]=L(B);if(h=!0,g=E,m=_,v.setPointerCapture(B.pointerId),o==="damla"){l=a.damla(E,_),Y(l,!0);return}a.katmanBasla(),o==="kova"?a.kova(E,_,z()):a.boya(E,_,z(),c),w()}),v.addEventListener("pointermove",B=>{if(!h)return;const[E,_]=L(B);E===g&&_===m||((o==="kalem"||o==="silgi")&&(a.cizgi(g,m,E,_,z(),c),w()),g=E,m=_)});const F=()=>{h=!1,g=-1,m=-1};v.addEventListener("pointerup",F),v.addEventListener("pointercancel",F);const C="yikim:renk:son";function H(){try{const B=JSON.parse(localStorage.getItem(C)||"[]");return Array.isArray(B)?B.filter(E=>typeof E=="string"&&/^#[0-9a-fA-F]{6}$/.test(E)).slice(0,12):[]}catch{return[]}}function D(B){const E=p.querySelector("#ske-son");E&&(E.innerHTML=H().map(_=>`<button class="kz-renk${_.toLowerCase()===B?.toLowerCase()?" aktif":""}" data-renk="${_}" style="background:${_}" title="${_}" aria-label="${_}"></button>`).join("")||'<span class="sk-ipucu-kucuk">Henüz renk yok — paletten seç.</span>')}function P(B){const E=B.toLowerCase(),_=[E,...H().filter(O=>O.toLowerCase()!==E)].slice(0,12);try{localStorage.setItem(C,JSON.stringify(_))}catch{}D(E)}function Y(B,E=!1){l=B;const _=rm(B);p.querySelector("#ske-renk").value=_,p.querySelector("#ske-renk-hex").value=_,p.querySelectorAll(".sk-palet-renk").forEach(O=>{O.classList.toggle("aktif",O.dataset.renk?.toLowerCase()===_.toLowerCase())}),D(_),E&&P(_)}p.querySelector("#ske-renk").addEventListener("input",B=>{Y(ml(B.target.value))}),p.querySelector("#ske-renk").addEventListener("change",()=>{P(rm(l))}),p.querySelector("#ske-renk-hex").addEventListener("change",B=>{const E=B.target.value.trim();/^#[0-9a-fA-F]{6}$/.test(E)&&Y(ml(E),!0)}),p.querySelector("#ske-palet")?.addEventListener("click",B=>{const E=B.target.closest(".sk-palet-renk");E?.dataset.renk&&Y(ml(E.dataset.renk),!0)}),p.querySelector("#ske-son")?.addEventListener("click",B=>{const E=B.target.closest(".kz-renk");E?.dataset.renk&&Y(ml(E.dataset.renk),!0)}),p.querySelectorAll(".sk-arac[data-arac]").forEach(B=>{B.addEventListener("click",()=>{o=B.dataset.arac,p.querySelectorAll(".sk-arac[data-arac]").forEach(E=>E.classList.remove("aktif")),B.classList.add("aktif")})}),p.querySelectorAll("[data-kalinlik]").forEach(B=>{B.addEventListener("click",()=>{c=Number(B.dataset.kalinlik),p.querySelectorAll("[data-kalinlik]").forEach(E=>E.classList.remove("aktif")),B.classList.add("aktif")})}),p.querySelectorAll("[data-zum]").forEach(B=>{B.addEventListener("click",()=>{u=Number(B.dataset.zum),v.width=v.height=y.width=y.height=_n*u,p.querySelectorAll("[data-zum]").forEach(E=>E.classList.remove("aktif")),B.classList.add("aktif"),w()})}),p.querySelectorAll("[data-slim]").forEach(B=>{B.addEventListener("click",()=>{r=B.dataset.slim==="1",p.querySelectorAll("[data-slim]").forEach(E=>E.classList.remove("aktif")),B.classList.add("aktif"),x.tuvalDoku(k,r),Ge(r?"Slim modelde kollar 1 px daha ince — kol bölgesi kayabilir.":"")})});let $=!1,Q="ust",ne=!1,ue=!1;const ke=p.querySelector("#ske-3d"),Ne=p.querySelector("#ske-izgara3d"),De=p.querySelector("#ske-parca"),He=p.querySelector("#ske-3d-tuval"),J=p.querySelector(".sk-edit-onizleme"),ae=p.querySelector(".sk-edit-zum"),fe={kafa:!0,govde:!0,kollar:!0,bacaklar:!0,kaplama:!0,kozmetik:!0},ze=()=>{x.parcaGoster("kafa",fe.kafa),x.parcaGoster("govde",fe.govde),x.parcaGoster("kollar",fe.kollar),x.parcaGoster("bacaklar",fe.bacaklar),x.kaplamaGoster(fe.kaplama),x.kozmetikGoster(fe.kozmetik),Q=fe.kaplama?"ust":"taban";const B=p.querySelector("#ske-3d-ipucu");B&&(B.textContent=fe.kaplama?"Overlay açık — boyama overlay katmanına gider.":"Overlay kapalı — boyama skin (taban) yüzeyine gider.")},be=B=>{$=B,ne=!1,x.etkilesimKapali=B,ue=B,Ne?.classList.toggle("aktif",ue),v.hidden=B,y.hidden=B,He.hidden=!B,J&&(J.hidden=B),De&&(De.hidden=!B),ae&&(ae.style.display=B?"none":""),ke?.classList.toggle("aktif",B),ke&&(ke.innerHTML=`${V("box")} ${B?"2D'ye dön":"3D Çiz"}`),requestAnimationFrame(()=>{B?(x.kur(He),x.bakisaAyarla(.35,.04),x.tuvalDoku(k,r),ze(),x.izgaraGoster(ue,!0),Ge("3D çizim: sol tık boya · orta/sağ tık döndür · tekerlek yakınlaş · Skin/Overlay katmanı ve parçalar üstteki düğmelerden aç/kapat.")):(x.kur(S),x.tuvalDoku(k,r),ze(),x.izgaraGoster(!1,!0),Ge(""))})};ke?.addEventListener("click",()=>be(!$)),Ne?.addEventListener("click",()=>{ue=!ue,Ne.classList.toggle("aktif",ue),x.izgaraGoster(ue,!0),Ge(ue?"Izgara açık — piksel sınırları karakterin üstünde görünür.":"Izgara kapalı.")}),p.querySelectorAll("[data-zum3d]").forEach(B=>{B.addEventListener("click",()=>{const E=Number(B.dataset.zum3d);E===0?x.zoomAyarla(2.75):x.zoomAyarla(x.zoomAl()*(E<0?1.18:.85))})}),p.querySelectorAll("[data-parca]").forEach(B=>{B.addEventListener("click",()=>{const E=B.dataset.parca;fe[E]=!fe[E],B.classList.toggle("aktif",fe[E]),ze()})});const Fe=(B,E)=>{const _=x.atlasNoktasi(B,Q);_&&(E&&a.katmanBasla(),a.boya(_.x,_.y,z(),c),w())};He.addEventListener("contextmenu",B=>{$&&B.preventDefault()}),He.addEventListener("pointerdown",B=>{if($&&!(B.pointerType==="mouse"&&B.button!==0)){ne=!0;try{He.setPointerCapture(B.pointerId)}catch{}Fe(B,!0)}}),He.addEventListener("pointermove",B=>{$&&ne&&Fe(B,!1)});const gt=()=>{ne=!1};He.addEventListener("pointerup",gt),He.addEventListener("pointercancel",gt),p.querySelector("#ske-bolgeler")?.addEventListener("click",B=>{const E=B.target.closest("[data-bolge]");E?.dataset.bolge&&(d=tm.find(_=>_.id===E.dataset.bolge)??null,p.querySelectorAll("[data-bolge]").forEach(_=>_.classList.remove("aktif")),E.classList.add("aktif"),R())}),p.querySelector("#ske-sadece").addEventListener("change",B=>{f=B.target.checked,R()});const Be=()=>{a.geriAl()&&w()},Ke=()=>{a.ileriAl()&&w()};p.querySelector("#ske-geri-al")?.addEventListener("click",Be),p.querySelector("#ske-ileri-al")?.addEventListener("click",Ke);const rt=B=>{!document.body.contains(p)||!(B.ctrlKey||B.metaKey)||(B.key.toLowerCase()==="z"?(B.preventDefault(),B.shiftKey?Ke():Be()):B.key.toLowerCase()==="s"&&(B.preventDefault(),It(!0)))};window.addEventListener("keydown",rt);function Ge(B){const E=p.querySelector("#ske-uyari");E.textContent=B}function ht(){return new Promise(B=>{k.toBlob(async E=>{if(!E)return B([]);const _=new Uint8Array(await E.arrayBuffer());B(Array.from(_))},"image/png")})}async function It(B){if(s=p.querySelector("#ske-ad").value.trim()||s,s||(s="Skin"),B&&!await JE("Skini giy",`<b>${Dd(s)}</b> Mojang hesabına yazılacak ve sunucularda görünecek. Onaylıyor musun?`,"Giy"))return;const _=await ht();if(!_.length){Ge("PNG üretilemedi.");return}const O=p.querySelector(B?"#ske-giy":"#ske-kitaplik");O.disabled=!0,Ge(B?"Mojang hesabına yazılıyor…":"Kitaplığa kaydediliyor…");try{await t({veri:_,slim:r,ad:s},B),Ge(""),qt()}catch(G){Ge(String(G)),O.disabled=!1}}p.querySelector("#ske-kitaplik")?.addEventListener("click",()=>void It(!1)),p.querySelector("#ske-giy")?.addEventListener("click",()=>void It(!0)),p.querySelector("#ske-disa")?.addEventListener("click",async()=>{const B=await ht(),E=p.querySelector("#ske-ad");try{const{invoke:_}=await ct(async()=>{const{invoke:G}=await Promise.resolve().then(()=>St);return{invoke:G}},void 0),O=await _("cmd_skin_disa_aktar",{ad:E.value.trim()||"skin",veri:B});X(`Dışa aktarıldı: ${O}`)}catch(_){X(String(_),"err")}});const Vt=document.createElement("button");Vt.className="btn ghost sk-dosya-btn",Vt.innerHTML=`${V("image")} Dosya`;const dt=document.createElement("input");dt.type="file",dt.accept="image/png",dt.style.display="none",Vt.addEventListener("click",()=>dt.click()),dt.addEventListener("change",async()=>{const B=dt.files?.[0];B&&await N(B),dt.value=""}),p.querySelector("#ske-geri").after(Vt),p.appendChild(dt);function zt(){return new Promise(B=>{const{root:E,close:_}=tn(`
        <h2>Skin türü</h2>
        <div class="sub" style="margin-bottom:14px">Bu skin hangi model için çizildi?</div>
        <div class="skin-model-secim">
          <button class="skin-model-btn" id="se-wide">
            ${V("user")}<b>Wide</b><span>Klasik model — 4px kol</span>
          </button>
          <button class="skin-model-btn" id="se-slim">
            ${V("user")}<b>Slim</b><span>İnce model — 3px kol (Alex)</span>
          </button>
        </div>
        <div style="display:flex; justify-content:flex-end; margin-top:12px">
          <button class="btn ghost" id="se-iptal">Vazgeç</button>
        </div>`);let O=!1;const G=j=>{O||(O=!0,_(),B(j))};E.querySelector("#se-wide")?.addEventListener("click",()=>G(!1)),E.querySelector("#se-slim")?.addEventListener("click",()=>G(!0)),E.querySelector("#se-iptal")?.addEventListener("click",()=>G(null))})}async function N(B){try{const E=URL.createObjectURL(B),_=await new Promise((de,ee)=>{const ie=new Image;ie.onload=()=>de(ie),ie.onerror=()=>ee(new Error("görsel okunamadı")),ie.src=E}),O=document.createElement("canvas");O.width=_.width,O.height=_.height;const G=O.getContext("2d");G.drawImage(_,0,0),URL.revokeObjectURL(E);const j=G.getImageData(0,0,_.width,_.height);if(!(_.width===64&&(_.height===64||_.height===32))){X(`Skin 64×64 veya 64×32 olmalı (bu dosya ${_.width}×${_.height})`,"err");return}const ce=await zt();if(ce===null)return;r=ce,p.querySelectorAll("[data-slim]").forEach(de=>{de.classList.toggle("aktif",de.dataset.slim===(r?"1":"0"))}),a.katmanBasla(),_.height===64?a.veri.set(j.data):a.veri.set(UE(j.data)),w(),x.tuvalDoku(k,r)}catch(E){X(String(E),"err")}}const qt=()=>{window.removeEventListener("keydown",rt),p.remove();try{x.kapati()}catch{}n()};p.querySelector("#ske-geri")?.addEventListener("click",qt),p.querySelector("#ske-kaydet")?.addEventListener("click",()=>{const B=p.querySelector(".sk-edit-kayit");B.scrollIntoView({behavior:"smooth",block:"center"}),B.querySelector("#ske-ad").focus()}),Y(l),w()}function rm(i){const e=t=>t.toString(16).padStart(2,"0");return`#${e(i[0])}${e(i[1])}${e(i[2])}`}function ml(i){const e=i.replace("#","");return[parseInt(e.slice(0,2),16)||0,parseInt(e.slice(2,4),16)||0,parseInt(e.slice(4,6),16)||0,255]}function Dd(i){return i.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function JE(i,e,t){return new Promise(n=>{const{root:a,close:r}=tn(`
      <h2>${i}</h2>
      <div class="sub" style="margin-bottom:16px">${e}</div>
      <div style="display:flex; gap:10px; justify-content:flex-end">
        <button class="btn" id="ed-vazgec">Vazgeç</button>
        <button class="btn primary" id="ed-tamam">${t}</button>
      </div>`);let s=!1;const o=l=>{s||(s=!0,r(),n(l))};a.querySelector("#ed-vazgec")?.addEventListener("click",()=>o(!1)),a.querySelector("#ed-tamam")?.addEventListener("click",()=>o(!0));const c=a.parentElement;c?.addEventListener("click",l=>{l.target===c&&o(!1)})})}let Ze=null,Qt=null,Ia=null,on=!1,Eo=null,sm=null,om=!1,jt=null;const At=i=>i.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function Ec(i){yc(),Ze=null,Qt=null,Ia=null,Eo=null,jt=null;const e=bn();if(!e){jE(i);return}const t=e.kind!=="microsoft";i.innerHTML=ew(e.name,t),tw(i,e.id),sm=i,om||(om=!0,document.addEventListener("visibilitychange",()=>{if(document.visibilityState!=="visible")return;const n=sm;if(!n||!n.isConnected)return;const a=bn();a&&a.kind==="microsoft"&&wo(n,a.id,!1)})),wo(i,e.id,!0)}function jE(i,e){i.innerHTML=`
    <div class="page-wrap skin-kapi-sar">
      <div class="skin-kapi">
        <div class="skin-kapi-ikon">${V("lock")}</div>
        <h1>Orijinal hesap ile girmen lazım</h1>
        <p>Skin değiştirmek ve pelerin takmak için Microsoft hesabı gerekir.</p>
        <div class="skin-kapi-aksiyon">
          ${`<button class="btn primary lg" id="sk-ms">${V("globe")} Microsoft ile Giriş</button>`}
          <button class="btn" id="sk-hesap">Hesapları Yönet</button>
        </div>
      </div>
    </div>`,i.querySelector("#sk-ciz")?.addEventListener("click",()=>{const t=bn();t&&QE(t.id)}),i.querySelector("#sk-ms")?.addEventListener("click",()=>{zn(()=>Ec(i))}),i.querySelector("#sk-hesap")?.addEventListener("click",()=>je("settings"))}function QE(i){X("Yerel skin: çizim kaydedince bu bilgisayarda görünür","ok");const e=document.querySelector("#content");e&&Ec(e)}function ew(i,e){return`
    <div class="page-wrap skin-sayfa">
      <div class="page-header skin-baslik">
        <div>
          <h1>Skin Merkezi</h1>
          <p class="sub">${e?"Skinini çiz, yükle ve giy — YIKIMLient kullanan herkes görür.":"Skinlerini seç, giy; pelerinini tak. Giyilen skin sunucularda görünür."}</p>
        </div>
        <div class="skin-ust-aksiyon">
          ${e?`<span class="skin-premium" style="color:var(--warn)">${V("user")} Yerel skin</span>`:`<span class="skin-premium">${V("check")} Orijinal hesap</span>`}
          <button class="btn primary" id="sk-duzenle">${V("brush")} Skin Düzenle</button>
        </div>
      </div>
      ${e?`
      <p class="skin-cracked-uyari">
        <span class="skin-cracked-ikon">${V("info")}</span>
        <span><b>Çatlak (offline) hesap:</b> skinini buradan çizip yükleyebilirsin ve artık
        <b>YIKIMLient kullanan herkeste</b> görünür (pelerin/elıtra paylaşımı gibi). Microsoft
        hesabın olmadığı için skini Mojang'a yüklenmez — oyunu <i>orijinal hesap</i> olarak
        giren oyuncular (YIKIMLient dışı) klasik skini görür.</span>
      </p>`:""}
      <div id="sk-serit"></div>
      <div class="skin-govde">
        <section class="skin-sahne">
          <canvas id="skin-canvas"></canvas>
          <div class="skin-sahne-alt">
            <div class="skin-kimlik">
              <b>${At(i)}</b>
              <span id="sk-aktif-ad">yükleniyor…</span>
            </div>
            <div class="skin-eylemler">
              <button class="btn primary" id="sk-giy" disabled>Bu Skini Giy</button>
              <button class="btn" id="sk-yedek" style="display:none">${V("undo")} Yedeği Geri Yükle</button>
            </div>
          </div>
        </section>
        <aside class="skin-yan">
          <div class="skin-bolum">
            <div class="skin-bolum-ust"><h3>Kayıtlı Skinler</h3><span id="sk-adet" class="skin-adet"></span></div>
            <div id="sk-kitaplik" class="skin-izgara"></div>
          </div>
          <div class="skin-bolum">
            <div class="skin-ekle dropzone" id="sk-ekle" tabindex="0" role="button">
              ${V("plus")}
              <b>Skin Ekle</b>
              <span>PNG sürükle ya da tıkla</span>
            </div>
            <input type="file" id="sk-dosya" accept="image/png" style="display:none" />
          </div>
          <div class="skin-bolum">
            <div class="skin-bolum-ust"><h3>Varsayılan</h3></div>
            <div id="sk-varsayilan" class="skin-izgara"></div>
          </div>
          <div class="skin-bolum">
            <div class="skin-bolum-ust"><h3>Pelerinlerin</h3></div>
            <div id="sk-pelerin" class="skin-pelerin-serit"></div>
          </div>
          <div class="skin-bolum">
            <div class="skin-bolum-ust"><h3>YIKIM Pelerinlerim</h3><span id="sk-koz-adet" class="skin-adet"></span></div>
            <div id="sk-koz-pelerin" class="skin-pelerin-serit"></div>
          </div>
          <div class="skin-bolum">
            <div class="skin-bolum-ust"><h3>YIKIM Elitralarım</h3><span id="sk-koz-kanat-adet" class="skin-adet"></span></div>
            <div id="sk-koz-kanat" class="skin-pelerin-serit"></div>
          </div>
        </aside>
      </div>
    </div>`}function tw(i,e){i.querySelector("#sk-duzenle")?.addEventListener("click",()=>void fw(i,e)),i.querySelector("#sk-kozmetik")?.addEventListener("click",()=>je("kozmetik")),i.querySelector("#sk-giy")?.addEventListener("click",()=>void Id(i,e)),i.querySelector("#sk-yedek")?.addEventListener("click",()=>void lw(i,e));const t=i.querySelector("#sk-ekle"),n=i.querySelector("#sk-dosya");t.addEventListener("click",()=>n.click()),t.addEventListener("keydown",s=>{(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),n.click())}),n.addEventListener("change",()=>{const s=n.files?.[0];s&&cm(i,e,s),n.value=""}),t.addEventListener("dragover",s=>{s.preventDefault(),t.classList.add("uzerinde")}),t.addEventListener("dragleave",()=>t.classList.remove("uzerinde")),t.addEventListener("drop",s=>{s.preventDefault(),t.classList.remove("uzerinde");const o=s.dataTransfer?.files?.[0];o&&cm(i,e,o)});const a=(s,o)=>{const c=i.querySelector(s);c?.addEventListener("click",l=>{const d=l.target.closest(".skin-kart");!d||l.target.closest(".skin-sil")||lm(i,d)}),c?.addEventListener("dblclick",l=>{const d=l.target.closest(".skin-kart");!d||l.target.closest(".skin-sil")||(lm(i,d),o())})};a("#sk-kitaplik",()=>void Id(i,e)),a("#sk-varsayilan",()=>void Id(i,e)),i.querySelector("#sk-kitaplik")?.addEventListener("click",s=>{const o=s.target.closest(".skin-sil");if(!o)return;s.stopPropagation();const c=o.closest(".skin-kart");c?.dataset.id&&dw(i,e,c.dataset.id,c.dataset.ad||"Skin")}),i.querySelector("#sk-pelerin")?.addEventListener("click",s=>{const o=s.target.closest(".skin-pelerin");if(!o)return;const c=o.dataset.id||null;cw(i,e,c)});const r=(s,o)=>{i.querySelector(s)?.addEventListener("click",c=>{const l=c.target,d=l.closest(".skin-pelerin");if(d){if(l.closest(".koz-sil")){c.stopPropagation(),ow(i,o,d.dataset.id||"",d.dataset.ad||"Kayıt");return}sw(i,o,d.dataset.id||null)}})};r("#sk-koz-pelerin","pelerin"),r("#sk-koz-kanat","kanat"),i.querySelector("#sk-serit")?.addEventListener("click",s=>{s.target.closest("#sk-yenile")&&wo(i,e,!1)})}async function wo(i,e,t){try{Ze=await te("cmd_skin_hub",{id:e}),Qt=Qt??nw(),fa(i),t?Vv(i):qf(i),Io(),rw(i).then(()=>Ts(!1)),Ze.cevrimdisi?X("Çevrimdışısın — son bilinen skin gösteriliyor"):Ze.hata&&X(Ze.hata,"err")}catch(n){X(String(n),"err");const a=i.querySelector("#sk-kitaplik");a&&(a.innerHTML='<div class="skin-bos">Yüklenemedi. <button class="btn" id="sk-yenile">Yeniden dene</button></div>')}}function nw(){if(!Ze)return null;if(Ze.secili){const t=Ze.kitaplik.find(n=>n.id===Ze.secili);if(t)return Xu(t)}if(Ze.aktif)return{tur:"kayit",id:`aktif:${Ze.aktif.dosya}`,dosya:Ze.aktif.dosya,slim:Ze.aktif.slim,ad:"Aktif skin"};const i=Ze.kitaplik[0];if(i)return Xu(i);const e=Ze.varsayilanlar[0];return e?{tur:"varsayilan",id:`varsayilan:${e.ad}`,dosya:e.dosya,slim:e.slim,ad:e.ad}:null}function Xu(i){return{tur:"kayit",id:i.id,dosya:i.dosya,slim:i.slim,ad:i.ad}}function fa(i){if(!Ze)return;const e=i.querySelector("#sk-serit");e&&(e.innerHTML=Ze.cevrimdisi?`<div class="skin-serit-cevrimdisi">${V("info")} Çevrimdışısın — son bilinen skin ve pelerinler gösteriliyor.
          <button class="btn ghost" id="sk-yenile">Yeniden dene</button></div>`:"");const t=i.querySelector("#sk-kitaplik");if(t){Ze.kitaplik.length?(t.innerHTML=Ze.kitaplik.map(u=>aw(u)).join(""),t.querySelectorAll(".skin-yuz").forEach(u=>{const h=u.dataset.dosya;h&&dm(u,h,u.dataset.slim==="1")})):t.innerHTML='<div class="skin-bos">Henüz kayıtlı skin yok.<br />Sağ üstten <b>Skin Düzenle</b> ile çiz ya da PNG ekle.</div>';const f=i.querySelector("#sk-adet");f&&(f.textContent=Ze.kitaplik.length?`${Ze.kitaplik.length}`:"")}const n=i.querySelector("#sk-varsayilan");n&&(n.innerHTML=(Ze.varsayilanlar||[]).map(f=>`
      <div class="skin-kart" data-tur="varsayilan" data-id="varsayilan:${At(f.ad)}" data-dosya="${At(f.dosya)}"
           data-slim="${f.slim?1:0}" data-ad="${At(f.ad)}">
        <div class="skin-yuz-sar">
          <canvas class="skin-yuz" width="${$v}" height="${Gv}"
                  data-dosya="${At(f.dosya)}" data-slim="${f.slim?1:0}"></canvas>
          <span class="skin-model">${f.slim?"Slim":"Wide"}</span>
        </div>
        <div class="skin-kart-ad">${At(f.ad)}</div>
      </div>`).join(""),n.querySelectorAll(".skin-yuz").forEach(f=>{const u=f.dataset.dosya;u&&dm(f,u,f.dataset.slim==="1")})),iw(i),qv(i);const a=bn(),r=!!a&&Mm(a.id)&&!Em(a.id),s=i.querySelector("#sk-koz-pelerin")?.previousElementSibling;let o=i.querySelector("#sk-koz-rol-not");r?(o||(o=document.createElement("p"),o.id="sk-koz-rol-not",o.className="skin-bos",o.textContent='Başka bir pelerin/elitra giymek için Discord sunucusundaki YIKIM etiketi ("Yol Silindiri") gerekir — şimdilik yalnız aç/kapa yapabilirsin.',s?.after(o)),i.querySelectorAll(".skin-pelerin[data-id]:not(.cikar)").forEach(f=>{f.disabled=!0,f.title="Yol Silindiri rolü gerekir"})):o?.remove();const c=i.querySelector("#sk-aktif-ad");if(c){const f=Qt;c.textContent=Ze.cevrimdisi?"çevrimdışı önizleme":f?`${f.ad} · ${f.slim?"Slim":"Wide"}`:"skin seç"}const l=i.querySelector("#sk-giy");l&&(l.disabled=!Qt||on,l.textContent=on?"Bekle…":"Bu Skini Giy");const d=i.querySelector("#sk-yedek");d&&(d.style.display=Ze.yedek_var?"":"none"),i.querySelectorAll(".skin-kart").forEach(f=>{const u=Qt&&f.dataset.id===Qt.id;f.classList.toggle("secili",!!u);const h=f.querySelector(".skin-rozet.secim");if(u&&!h){const g=document.createElement("span");g.className="skin-rozet secim",g.textContent=Ia&&f.dataset.id===Ia?"GİYİLİ":"SEÇİLİ",f.appendChild(g)}else!u&&h?h.remove():u&&h&&(h.textContent=Ia&&f.dataset.id===Ia?"GİYİLİ":"SEÇİLİ")})}function iw(i){if(!Ze)return;const e=i.querySelector("#sk-pelerin");if(!e)return;if(!Ze.pelerinler.length){e.innerHTML='<div class="skin-bos">Hesabında pelerin yok — Mojang pelerinleri etkinliklerden kazanılır.</div>';return}const t=Ze.pelerinler.find(n=>n.aktif);e.innerHTML=Ze.pelerinler.map(n=>`<button class="skin-pelerin ${n.aktif?"aktif":""}" data-id="${At(n.id)}" title="${At(n.ad)}">
           <canvas class="skin-pelerin-tuval" width="40" height="64" data-dosya="${At(n.dosya||"")}"></canvas>
           <span class="skin-pelerin-ad">${At(n.ad)}</span>
           ${n.aktif?'<span class="skin-rozet aktif">TAKILI</span>':""}
         </button>`).join("")+(t?`<button class="skin-pelerin cikar" data-id="" title="Pelerini çıkar">
           <span class="skin-pelerin-yok">✕</span><span class="skin-pelerin-ad">Pelerini çıkar</span>
         </button>`:""),e.querySelectorAll(".skin-pelerin-tuval").forEach(n=>{const a=n.dataset.dosya;a&&Xv(n,a)})}function aw(i){return`
    <div class="skin-kart" data-tur="kayit" data-id="${At(i.id)}" data-dosya="${At(i.dosya)}"
         data-slim="${i.slim?1:0}" data-ad="${At(i.ad)}">
      <div class="skin-yuz-sar">
        <canvas class="skin-yuz" width="${$v}" height="${Gv}"
                data-dosya="${At(i.dosya)}" data-slim="${i.slim?1:0}"></canvas>
        <span class="skin-model">${i.slim?"Slim":"Wide"}</span>
      </div>
      <div class="skin-kart-ad">${At(i.ad)}</div>
      <button class="skin-sil" title="Sil">${V("trash")}</button>
    </div>`}function lm(i,e){Qt={tur:e.dataset.tur||"kayit",id:e.dataset.id||"",dosya:e.dataset.dosya||"",slim:e.dataset.slim==="1",ad:e.dataset.ad||"Skin"},qf(),fa(i)}function Vv(i){const e=i.querySelector("#skin-canvas");if(!e)return;Nn().kur(e),qf()}function qf(i){const e=Nn();Qt&&e.skin({url:Mt(Qt.dosya),slim:Qt.slim})}function Io(){if(!Ze)return;const e=Ze.pelerinler.find(t=>t.aktif&&t.dosya)?.dosya||null;if(e!==Eo){if(Eo=e,!e){Nn().pelerin(null);return}Nn().pelerin({url:Mt(e)})}}async function rw(i){try{jt=await te("cmd_kozm_katalog")}catch{jt={kayitlar:[],aktif:{pelerin:null,kanat:null}}}qv(i)}function qv(i){if(!jt)return;const e=(a,r)=>{const s=i.querySelector(a);if(!s)return;const o=jt.kayitlar.filter(l=>l.tur===r),c=jt.aktif[r];if(!o.length){const l=r==="pelerin"?"Pelerin":"Elitra";s.innerHTML=`<div class="skin-bos">${l} kaydı yok — <b>Kozmetik</b> sayfasında fotoğraftan oluştur, burada birikir.</div>`;return}s.innerHTML=o.map(l=>`
        <button class="skin-pelerin ${l.id===c?"aktif":""}" data-id="${At(l.id)}" data-ad="${At(l.ad)}" title="${At(l.ad)}${l.hd?" · HD":""}">
          <canvas class="skin-pelerin-tuval" width="40" height="64" data-dosya="${At(l.dosya)}"></canvas>
          <span class="skin-pelerin-ad">${At(l.ad)}</span>
          <span class="skin-sil koz-sil" title="Kaydı sil">${V("trash")}</span>
          ${l.id===c?'<span class="skin-rozet aktif">TAKILI</span>':""}
        </button>`).join("")+(c?`<button class="skin-pelerin cikar" data-id="" title="YIKIM kozmetiğini kapat">
             <span class="skin-pelerin-yok">✕</span><span class="skin-pelerin-ad">Kapat</span>
           </button>`:""),s.querySelectorAll(".skin-pelerin-tuval").forEach(l=>{const d=l.dataset.dosya;d&&Xv(l,d,r)})};e("#sk-koz-pelerin","pelerin"),e("#sk-koz-kanat","kanat");const t=i.querySelector("#sk-koz-adet");if(t){const a=jt.kayitlar.filter(r=>r.tur==="pelerin").length;t.textContent=a?`${a} kayıt`:""}const n=i.querySelector("#sk-koz-kanat-adet");if(n){const a=jt.kayitlar.filter(r=>r.tur==="kanat").length;n.textContent=a?`${a} kayıt`:""}}async function Ts(i){const e=Nn(),t=jt?.kayitlar.find(a=>a.id===jt?.aktif.pelerin&&a.dosya)||null,n=jt?.kayitlar.find(a=>a.id===jt?.aktif.kanat&&a.dosya)||null;try{n?(await e.pelerin(null),await e.kanat({url:Mt(n.dosya)})):(await e.kanat(null),t?await e.pelerin({url:Mt(t.dosya)}):(Eo=null,Io())),i&&(t||n)&&e.bakisaAyarla(2.5,.1)}catch{}}async function sw(i,e,t){if(!(on||!jt)){on=!0;try{const n=await te("cmd_kozm_sec",{tur:e,id:t});jt.aktif=n.aktif;const a=jt.kayitlar.find(r=>r.id===t);t?(X(`${a?.ad||"Kozmetik"} takıldı — oyunda görünecek.`),n.hata&&X(`Diğer oyunculara yüklenemedi: ${n.hata}`,"err")):X("YIKIM kozmetiği kapatıldı — vanilla görünüm."),await Ts(!0)}catch(n){X(String(n),"err")}finally{on=!1,fa(i)}}}async function ow(i,e,t,n){if(!(on||!t||!await wc("Kaydı sil",`<b>${At(n)}</b> katalogdan silinsin mi? Bu işlem geri alınamaz.`,"Sil"))){on=!0;try{const r=await te("cmd_kozm_sil",{tur:e,id:t});jt&&(jt.kayitlar=r.kayitlar,jt.aktif=r.aktif),X("Kayıt silindi."),await Ts(!1)}catch(r){X(String(r),"err")}finally{on=!1,fa(i)}}}async function Id(i,e){if(!Qt||on)return;const t=Qt;if(await wc("Skini giy",`<b>${At(t.ad)}</b> Mojang hesabına yazılacak ve sunucularda görünecek. Onaylıyor musun?`,"Giy")){on=!0,fa(i);try{let a;if(t.tur==="kayit"&&Ze?.kitaplik.some(r=>r.id===t.id))a=await te("cmd_skin_giy_kitaplik",{id:e,kayitId:t.id});else{const r=await Wv(t.dosya);a=await te("cmd_skin_giy",{id:e,veri:r,slim:t.slim,ad:null})}Ze=a,Ia=t.tur==="kayit"?t.id:null,X("Skin giyildi — sunucularda görünecek.")}catch(a){X(String(a),"err")}finally{on=!1,fa(i)}}}async function lw(i,e){if(!(on||!await wc("Yedeği geri yükle","Son giymeden önceki skin Mojang hesabına geri yazılacak. Onaylıyor musun?","Geri Yükle"))){on=!0;try{Ze=await te("cmd_skin_yedek_geri_yukle",{id:e}),Ia=null,X("Yedek skin geri yüklendi.")}catch(n){X(String(n),"err")}finally{on=!1,fa(i),Io(),Ts(!1)}}}async function cw(i,e,t){if(!(on||!Ze)&&!(t===null&&!Ze.pelerinler.some(n=>n.aktif))){on=!0;try{Ze=await te("cmd_skin_pelerin",{id:e,capeId:t}),X(t?"Pelerin takıldı.":"Pelerin çıkarıldı."),Io(),Ts(!1)}catch(n){X(String(n),"err")}finally{on=!1,fa(i)}}}async function dw(i,e,t,n){if(await wc("Skini sil",`<b>${At(n)}</b> kitaplıktan silinsin mi? (Hesabındaki skin değişmez.)`,"Sil"))try{await te("cmd_skin_sil",{kayitId:t}),Qt?.id===t&&(Qt=null),X("Skin silindi."),await wo(i,e,!1)}catch(r){X(String(r),"err")}}async function cm(i,e,t){try{const n=Array.from(new Uint8Array(await t.arrayBuffer())),a=t.name.replace(/\.png$/i,"").slice(0,48)||"Skin",r=await uw(a);if(r===null)return;await te("cmd_skin_kaydet",{ad:a,veri:n,slim:r}),X(`Skin kitaplığa eklendi · ${r?"Slim":"Wide"}`),await wo(i,e,!1)}catch(n){X(String(n),"err")}}function uw(i){return new Promise(e=>{const{root:t,close:n}=tn(`
      <h2>Skin türü</h2>
      <div class="sub" style="margin-bottom:14px"><b>${At(i)}</b> hangi model için çizildi?</div>
      <div class="skin-model-secim">
        <button class="skin-model-btn" id="sm-wide">
          ${V("user")}
          <b>Wide</b>
          <span>Klasik model — 4px kol</span>
        </button>
        <button class="skin-model-btn" id="sm-slim">
          ${V("user")}
          <b>Slim</b>
          <span>İnce model — 3px kol (Alex)</span>
        </button>
      </div>
      <div style="display:flex; justify-content:flex-end; margin-top:12px">
        <button class="btn ghost" id="sm-iptal">Vazgeç</button>
      </div>`);let a=!1;const r=c=>{c.key==="Escape"&&s(null)},s=c=>{a||(a=!0,window.removeEventListener("keydown",r),n(),e(c))};t.querySelector("#sm-wide")?.addEventListener("click",()=>s(!1)),t.querySelector("#sm-slim")?.addEventListener("click",()=>s(!0)),t.querySelector("#sm-iptal")?.addEventListener("click",()=>s(null));const o=t.parentElement;o?.addEventListener("click",c=>{c.target===o&&s(null)}),window.addEventListener("keydown",r)})}async function fw(i,e){const t=Qt?.dosya||Ze?.aktif?.dosya||Ze?.varsayilanlar[0]?.dosya;if(!t){X("Önce bir skin seç.","err");return}let n;try{n=await hw(await Wv(t))}catch(o){X(String(o),"err");return}const a=new Date,r=`Skinim ${String(a.getDate()).padStart(2,"0")}.${String(a.getMonth()+1).padStart(2,"0")}`;let s=!1;ZE(i,{pafta:n,slim:Qt?.slim??!1,ad:r},async(o,c)=>{const l=await te("cmd_skin_kaydet",{ad:o.ad,veri:o.veri,slim:o.slim});c?(Ze=await te("cmd_skin_giy_kitaplik",{id:e,kayitId:l.id}),Ia=l.id,X("Skin giyildi — sunucularda görünecek.")):(Ze=await te("cmd_skin_hub",{id:e}),X("Kitaplığa kaydedildi.")),Qt=Xu(l),s=!0},()=>{if(!s){Ec(i);return}fa(i),yc(),Eo=null,Vv(i),Io(),Ts(!1)})}async function hw(i){const e=new Blob([new Uint8Array(i)],{type:"image/png"}),t=URL.createObjectURL(e);try{const n=await new Promise((c,l)=>{const d=new Image;d.onload=()=>c(d),d.onerror=()=>l(new Error("Skin dosyası okunamadı.")),d.src=t}),a=document.createElement("canvas");a.width=64,a.height=64;const r=a.getContext("2d");r.imageSmoothingEnabled=!1;const s=Kv(n),o=n.naturalHeight===32;return r.drawImage(s,0,0,64,o?32:64),new nc(new Uint8ClampedArray(r.getImageData(0,0,64,64).data))}finally{URL.revokeObjectURL(t)}}async function Wv(i){const e=await fetch(Mt(i));if(!e.ok)throw new Error("Skin dosyası okunamadı.");return Array.from(new Uint8Array(await e.arrayBuffer()))}function Kv(i){const e=i.naturalWidth||i.width,t=i.naturalHeight||i.height;if(e===64)return i;const n=document.createElement("canvas");n.width=64,n.height=Math.max(1,Math.round(t/e*64));const a=n.getContext("2d");return a?(a.imageSmoothingEnabled=!1,a.drawImage(i,0,0,n.width,n.height),n):i}function dm(i,e,t){const n=new Image;n.onload=()=>{const a=i.getContext("2d");a&&XE(a,Kv(n),t)},n.src=Mt(e)}function Xv(i,e,t="pelerin"){const n=new Image;n.onload=()=>{const a=i.getContext("2d");if(!a)return;const r=n.naturalWidth||Ve,s=n.naturalHeight||kt,o=r>Ve||s>kt;let c=Ka(t);if(t==="pelerin"){const g=document.createElement("canvas");g.width=Ve,g.height=kt;const m=g.getContext("2d",{willReadFrequently:!0});m&&(m.imageSmoothingEnabled=!1,m.drawImage(n,0,0,Ve,kt),c=GE(g))}i.width=o?160:40,i.height=o?256:64,i.style.imageRendering=o?"auto":"pixelated",a.imageSmoothingEnabled=o,a.imageSmoothingQuality="high",a.clearRect(0,0,i.width,i.height);const l=Math.min(i.width/c.w,i.height/c.h),d=c.w*l,f=c.h*l,u=r/Ve,h=s/kt;a.drawImage(n,c.x*u,c.y*h,c.w*u,c.h*h,(i.width-d)/2,(i.height-f)/2,d,f)},n.src=Mt(e)}function wc(i,e,t){return new Promise(n=>{const{root:a,close:r}=tn(`
      <h2>${i}</h2>
      <div class="sub" style="margin-bottom:16px">${e}</div>
      <div style="display:flex; gap:10px; justify-content:flex-end">
        <button class="btn" id="on-vazgec">Vazgeç</button>
        <button class="btn primary" id="on-tamam">${t}</button>
      </div>`);let s=!1;const o=l=>{s||(s=!0,r(),n(l))};a.querySelector("#on-vazgec")?.addEventListener("click",()=>o(!1)),a.querySelector("#on-tamam")?.addEventListener("click",()=>o(!0));const c=a.parentElement;c?.addEventListener("click",l=>{l.target===c&&o(!1)})})}const zo=["pelerin","kanat"],pw=["#0b0b10","#1d1d24","#3a3a46","#6b6b7a","#a8a8b6","#e8e8ef","#ff8a3d","#ff5a1f","#ffd166","#f6f6f6","#ff4d6d","#b8132f","#7b2ff7","#3d5afe","#22d3ee","#0ea5a3","#22c55e","#166534","#8b5e34","#d9a066","#f5c6a5","#e11d48","#111827","#4b5563"],um=8;let Tc=Ar(),Uo=Ar(),As=!1,Rs=!1,Wt="pelerin",za="#ff8a3d",wn=!1,Ba=!1,si=!1,Ua=!1,cr=!0,ui="kalem";const mw=[4,8,12,16];let ao=8;const Yv="yikim:renk:son",ac=40,hn={pelerin:[],kanat:[]},Xa={pelerin:[],kanat:[]};let ns=gw();function gw(){try{const i=localStorage.getItem(Yv),e=i?JSON.parse(i):null;return Array.isArray(e)?e.filter(t=>typeof t=="string").slice(0,12):[]}catch{return[]}}function vw(i){const e=i.toLowerCase();if(ns[0]?.toLowerCase()!==e){ns=[i,...ns.filter(t=>t.toLowerCase()!==e)].slice(0,12);try{localStorage.setItem(Yv,JSON.stringify(ns))}catch{}}}function Zv(i){const e=`#${i.trim().replace(/^#+/,"")}`;return/^#[0-9a-fA-F]{6}$/.test(e)?e.toLowerCase():null}let ds=!0,To=null,Ao=null;const mr=new Map,Wf=Gf(),_w=i=>i.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Dt=i=>i==="pelerin"?Tc:Uo,rc=i=>i==="pelerin"?kc:Mc;function yw(i){yc(),Ys=i,Tc=Ar(),Uo=Gf(),As=!1,Rs=!1,Wt="pelerin",za="#ff8a3d",ui="kalem",hn.pelerin.length=0,hn.kanat.length=0,Xa.pelerin.length=0,Xa.kanat.length=0,wn=!1,Ba=!1,Ua=!1,ds=!0,Gt.pelerin=!1,Gt.kanat=!1,$t.pelerin=null,$t.kanat=null,ha.pelerin=!1,ha.kanat=!1,To=null,Ao=null,mr.clear(),i.innerHTML=xw(),jv(i),Qv(i),e_(i)}function Jv(){const i=bn();return!i||!Mm(i.id)||!T_(i.id)?"dogrulanmamis":Em(i.id)?"tam":"rol_yok"}function jv(i,e){const t=e??Jv(),n=t!=="tam";i.querySelector("#kz-sayfa")?.classList.toggle("kz-kisitli",n);const r=i.querySelector("#kz-sekme-ipucu");if(r&&(n?r.textContent="Bu sayfada yalnız önizleme ve aç/kapa var":r.textContent="Atlasta ya da 3D modelin üstünde çiz"),i.querySelector("#kz-kisitli")?.remove(),t==="tam")return;const s=i.querySelector(".page-header");if(!s)return;const o=document.createElement("div");o.id="kz-kisitli",o.className="kz-kilit"+(t==="rol_yok"?" kz-kilit-rol":""),t==="dogrulanmamis"?o.innerHTML=`<span class="gv-carpi">✕</span>
      <div><b>Kozmetikler kilitli</b>
      <small>Pelerinini/elitranı çizebilmen ve fotoğraf yükleyebilmen için hesabını doğrula.
         Bu sayfada yalnız önizleme, pelerin/elitra seçimi ve aç/kapa anahtarları var.</small></div>
      <button class="btn primary sm" id="kz-kisitli-eski">Doğrula</button>`:o.innerHTML=`<span aria-hidden="true">🔒</span>
      <div><b>Kendi tasarımını çizmek için "Yol Silindiri" rolü gerekir</b>
      <small>Discord sunucusundaki YIKIM etiketini/rolünü al; rolü taşıdığın sürece kendi pelerin ve
         elitranı çizebilir, fotoğraf (HD) ve maske yükleyebilirsin.
         <br><b>Rolü bırak</b> → çizim iznin anında kapanır ve görünümün varsayılan YIKIM pelerini/elitrasına
         döner. Tasarımın silinmez, senin bilgisayarında durur (başkası da göremez).
         <br><b>Rolü geri al</b> → aynı tasarım otomatik geri döner; bir şey yapman gerekmez.</small></div>
      <button class="btn ghost sm" id="kz-kisitli-eski">Discord'a katıl ↗</button>`,s.after(o),i.querySelector("#kz-kisitli-eski")?.addEventListener("click",()=>{t==="dogrulanmamis"?je("settings"):Tm()})}async function Qv(i){await Na(!0);const e=await wm(),t=e?e.dogrulandi?e.cizimSerbest?"tam":"rol_yok":"dogrulanmamis":Jv();jv(i,t)}window.addEventListener("yikim:yetki",()=>{const i=document.getElementById("kz-sayfa");i&&(Qv(i),e_(i))});function xw(){return`
    <div class="page-wrap kozmetik-sayfa" id="kz-sayfa">
      <div class="page-header">
        <div>
          <h1>Kozmetikler</h1>
          <p class="sub">Pelerinini ve elitranı doğrudan Minecraft'ın 64×32 dokusu üzerinde çiz — tamamen ücretsiz.
             YIKIMLient kullanan herkeste görünür (cracked ve premium fark etmez).</p>
        </div>
      </div>

      <div class="kz-sekmeler" role="tablist" aria-label="Düzenlenecek kozmetik">
        <button class="kz-sekme aktif" data-secim="pelerin" role="tab">
          ${V("shirt")} <span>Pelerin</span>
          <em class="kz-sekme-durum" id="kz-pelerin-sekme-durum"></em>
        </button>
        <button class="kz-sekme" data-secim="kanat" role="tab">
          ${V("sparkle")} <span>Elitra</span>
          <em class="kz-sekme-durum" id="kz-kanat-sekme-durum"></em>
        </button>
        <div class="kz-sekme-sag" id="kz-sekme-ipucu">Atlasta ya da 3D modelin üstünde çiz</div>
      </div>

      <p class="kz-rol-ipucu" id="kz-rol-ipucu">Çizme izni Discord'daki <b>"Yol Silindiri"</b> etiketine/rolüne
         bağlıdır: etiketi bırakırsan izin anında kapanır, tasarımın bilgisayarında kalır ve görünümün
         varsayılan YIKIM pelerinine döner. Etiketi yeniden alınca aynı tasarım otomatik geri gelir.</p>

      <div class="kz-yerlesim">
        <aside class="kz-oniz3d" id="kz-oniz3d">
          <div class="kz-oniz3d-ust">
            <span>${V("user")} Karakterde görünüm</span>
            <button class="btn ghost sm" id="kz-yon" title="Ön / arka bakış">Önden gör</button>
          </div>
          <canvas id="kz-sahne"></canvas>
          <div class="kz-zum" id="kz-zum">
            <button class="seg-btn" id="kz-zum-eksi" title="Uzaklaş">−</button>
            <button class="seg-btn" id="kz-zum-arti" title="Yakınlaş">+</button>
            <button class="seg-btn" id="kz-zum-sigdir" title="Varsayılan mesafe">Sığdır</button>
            <span class="kz-zum-ipucu">Tekerlek: yakınlaş · Sürükle: döndür</span>
          </div>
          <div class="kz-aktif-satir" id="kz-aktif-satir">
            <span class="kz-aktif-baslik">Oyunda</span>
            <label class="kz-anahtar" title="Kapalıyken oyunda normal Minecraft pelerin görünür">
              <input type="checkbox" id="kz-pelerin-aktif" checked />
              <span>Özel pelerin</span>
            </label>
            <label class="kz-anahtar" title="Kapalıyken oyunda normal Minecraft elitrası görünür">
              <input type="checkbox" id="kz-kanat-aktif" checked />
              <span>Özel elitra</span>
            </label>
          </div>
          <div class="kz-cizim-arac" id="kz-cizim-arac" hidden>
            <div class="kz-cizim-satir">
              <span class="kz-etiket">Araç</span>
              <span class="seg-grup">
                <button class="seg-btn aktif" id="kz-3d-kalem" title="Modelin üstüne boya">${V("brush")} Kalem</button>
                <button class="seg-btn" id="kz-3d-silgi" title="Modelin üstünde sil">${V("eraser")} Silgi</button>
                <button class="seg-btn" id="kz-3d-dondur" title="Sol tıkla karakteri döndür (boyama kapalı)">${V("undo")} Döndür</button>
              </span>
              <span class="kz-etiket">Görünüm</span>
              <span class="seg-grup">
                <button class="seg-btn aktif" id="kz-3d-matris" title="Piksel matrisini (ızgara) aç/kapat">${V("grid")} Matris</button>
                <button class="seg-btn" id="kz-3d-oyuncu" title="Karakter gövdesini göster/gizle">${V("user")} Oyuncuyu gizle</button>
              </span>
              <button class="btn ghost sm kz-2d-don" id="kz-3d-2d" title="2D atlas tuvaline dön">${V("image")} 2D'ye geç</button>
            </div>
            <div class="kz-cizim-satir">
              <span class="kz-etiket">Fırça rengi</span>
              <span class="kz-3d-renk">
                <input type="color" id="kz-3d-renk" value="#ff8a3d" title="Fırça rengi" />
                <code class="kz-renk-kod" id="kz-3d-renk-kod">#FF8A3D</code>
                <span class="kz-3d-palet" id="kz-3d-palet"></span>
              </span>
            </div>
            <p class="kz-ipucu kz-cizim-ipucu">Kalem: sol tık boyar · Silgi: siler · Döndür: sol tık çevirir ·
              Ctrl+Z geri · Ctrl+Shift+Z ileri</p>
          </div>
          <p class="kz-ipucu kz-oniz3d-alt" id="kz-sahne-alt">Sürükle: döndür · Tekerlek: yakınlaş</p>
        </aside>

        <div class="kz-kartlar" id="kz-kartlar">
          ${fm("pelerin","Pelerin","shirt","Pelerin","Ön, arka, yanlar, üst ve alt — altı yüz de ayrı çizilir.")}
          ${fm("kanat","Elitra","sparkle","Elitra","Sol/sağ kanat oyunda aynadır: aynı atlası aynalı gösterir.")}
        </div>
      </div>

      <p class="kz-dipnot">Kozmetikler oyun açıkken de uygulanır: kaydettikten sonra en geç birkaç saniye
        içinde oyunda görünür. Boş bıraktığın pelerin/elitra oyunda görünmez — elitra boşken normal
        Minecraft elitrası kullanılır.</p>
    </div>`}function fm(i,e,t,n,a){const r=mw.map(s=>`<button class="seg-btn ${s===ao?"aktif":""}" data-kzyum="${s}" title="${s}× yakınlaştır">${s}×</button>`).join("");return`
    <section class="kz-kart" id="kz-${i}-kart" data-tur="${i}">
      <div class="kz-kart-ust">
        <h3>${V(t)} ${e}</h3>
        <span class="kz-rozet" id="kz-${i}-durum"></span>
      </div>

      <div class="kz-calisma">
        <div class="kz-tuval-kolon">
          <div class="kz-tuval-kaydir">
            <div class="kz-tuval-sar" id="kz-${i}-sar">
              <canvas class="kz-tuval" id="kz-${i}-tuval" width="${Ve}" height="${kt}"
                aria-label="${n} atlası — 64×32 piksel"></canvas>
              <canvas class="kz-rehber" id="kz-${i}-rehber"
                width="${Ve*um}" height="${kt*um}"></canvas>
            </div>
          </div>
          <div class="kz-tuval-alt">
            <span class="kz-etiket">Yakınlaştır</span>
            <span class="seg-grup">${r}</span>
            <span class="kz-ipucu kz-kart-ipucu">${a}</span>
          </div>
          <div class="kz-bolgeler" id="kz-${i}-bolgeler"></div>
        </div>

        <div class="kz-arac-panel">
          <div class="kz-arac-grup" id="kz-${i}-araclar" role="group" aria-label="Araçlar">
            <button class="kz-arac-btn aktif" data-kzarac="kalem" title="Kalem">${V("brush")}</button>
            <button class="kz-arac-btn" data-kzarac="silgi" title="Silgi (çizerek siler)">${V("eraser")}</button>
            <button class="kz-arac-btn" data-kzarac="kova" title="Kova — bitişik aynı renk alanını doldur">${V("bucket")}</button>
            <button class="kz-arac-btn" data-kzarac="damla" title="Damlalık — tuvallin rengini al">${V("picker")}</button>
            <span class="kz-arac-ayrac"></span>
            <button class="kz-arac-btn" id="kz-${i}-geri" title="Geri al">${V("undo")}</button>
            <button class="kz-arac-btn" id="kz-${i}-ileri" title="İleri al">${V("redo")}</button>
          </div>

          <div class="kz-blok">
            <div class="kz-blok-ust">
              <span class="kz-etiket">Renk</span>
              <code class="kz-renk-kod" id="kz-${i}-renk-kod">#FF8A3D</code>
            </div>
            <div class="kz-renk-sec">
              <input type="color" id="kz-${i}-renk" value="#ff8a3d" title="Renk seç" />
              <input class="input kz-hex" id="kz-${i}-hex" value="#FF8A3D" maxlength="7"
                spellcheck="false" aria-label="Renk kodu (hex)" />
            </div>
          </div>

          <div class="kz-blok">
            <span class="kz-etiket">Son kullandıkların</span>
            <div class="kz-son-renkler" id="kz-${i}-son"></div>
          </div>

          <div class="kz-blok">
            <span class="kz-etiket">Hazır palet</span>
            <div class="kz-araclar" id="kz-${i}-palet"></div>
          </div>
        </div>
      </div>

      <div class="kz-foto" id="kz-${i}-foto" hidden>
        <canvas class="kz-foto-img" id="kz-${i}-foto-img" aria-label="Yüklenen fotoğraf"></canvas>
        <div class="kz-foto-metin">
          <b>Fotoğraf modu</b>
          <p>Bu kozmetik yüklediğin fotoğraftan oluşturuldu ve <b>fotoğrafın kendi kalitesinde</b> görünür.
             Fotoğrafın üzerine çizim yapılamaz — yeni bir fotoğraf yüklediğinde eskisinin yerine geçer.</p>
          <p class="kz-foto-ipucu">Farklı bir bölümü kullanmak istersen tekrar <b>Fotoğraf / Pafta</b> ile yükle.</p>
        </div>
      </div>

      <div class="kz-alt">
        <button class="btn" id="kz-${i}-3d" data-ciz3d="${i}"
          title="Doğrudan 3D modelin her yüzüne boya">${V("box")} 3D Çiz</button>
        <label class="btn" for="kz-${i}-dosya" title="Düz fotoğraf ya da hazır 64×32 pafta">${V("image")} Fotoğraf / Pafta</label>
        <input type="file" id="kz-${i}-dosya" accept="image/*" style="display:none" />
        <span class="kz-alt-bos"></span>
        <button class="btn" id="kz-${i}-temizle" title="Atlasın tamamını temizle">${V("trash")} Temizle</button>
        <button class="btn danger" id="kz-${i}-kaldir" title="Kayıtlı kozmetiği kaldır">Kaldır</button>
        <button class="btn primary" id="kz-${i}-kaydet">${V("check")} Kaydet</button>
      </div>
    </section>`}async function e_(i){let e;try{e=await te("cmd_kozmetik_oku")}catch(u){X(String(u),"err"),e={pelerin:null,kanat:null}}const t=u=>{try{const h=localStorage.getItem(`yikim:kozmetik:${u}:yedek`),g=h?JSON.parse(h):null;return Array.isArray(g)&&g.length===In?g.slice():null}catch{return null}},n=(u,h)=>u?u.length===In?u.slice():u.length===Uw[h]?Ow(u,h):null:null,a=n(e.pelerin,"pelerin"),r=n(e.kanat,"kanat"),s=n(e.pelerin_varsayilan,"pelerin"),o=n(e.kanat_varsayilan,"kanat");Tc=!!a&&!di(a)?a:t("pelerin")??s??a??Ar(),Uo=!!r&&!di(r)?r:t("kanat")??o??r??Gf(),As=!!a&&!di(a),Rs=!!r&&!di(r),To=nm(),Ao=nm(),t_(),bw(i);for(const u of zo)Aw(i,u);No(i),s_(i),Pw(i);const d=i.querySelector("#kz-pelerin-aktif"),f=i.querySelector("#kz-kanat-aktif");d&&(d.checked=e.pelerin_aktif??mm("pelerin")??!!e.pelerin_dosya),f&&(f.checked=e.kanat_aktif??mm("kanat")??!!e.kanat_dosya),$w(i,e)}function bw(i){const e=i.querySelector("#kz-sahne");if(!e)return;const t=Nn();t.kur(e),(async()=>{try{const n=bn();let a=null;if(n){const r=await te("cmd_skin_hub",{id:n.id});a=r?.aktif?.dosya?r.aktif:r?.varsayilanlar?.[0]??null}await t.skin(a?.dosya?{url:Mt(a.dosya),slim:!!a.slim}:null)}catch{try{await t.skin(null)}catch{}}})()}function Sw(i){i.fillStyle="rgba(150,152,170,0.16)";for(const e of kc)i.fillRect(e.x,e.y,e.w,e.h)}function kw(i){if(!di(Uo)){i.fillStyle="rgba(150,152,170,0.10)";for(const e of Mc)i.fillRect(e.x,e.y,e.w,e.h);return}i.save(),i.globalAlpha=.6;for(let e=0;e<In;e++){const t=Wf[e];t&&(i.fillStyle=t,i.fillRect(e%Ve,Math.floor(e/Ve),1,1))}i.restore()}function t_(){To&&ic(To,Tc,Sw),Ao&&ic(Ao,Uo,kw),Nn().dokuTazele()}function No(i){const e=Nn();Wt==="pelerin"?(e.kanatTuval(null),Gt.pelerin&&$t.pelerin?(e.pelerinTuval(null),e.pelerin({url:Mt($t.pelerin)})):e.pelerinTuval(To)):(e.pelerinTuval(null),Gt.kanat&&$t.kanat?(e.kanatTuval(null),e.kanat({url:Mt($t.kanat)})):e.kanatTuval(Ao)),i.querySelectorAll("[data-secim]").forEach(t=>{t.classList.toggle("aktif",t.dataset.secim===Wt),t.setAttribute("aria-selected",t.dataset.secim===Wt?"true":"false")});for(const t of zo){const n=i.querySelector(`#kz-${t}-kart`);n&&(n.hidden=Wt!==t,n.classList.toggle("secili",Wt===t))}i.querySelectorAll("[data-ciz3d]").forEach(t=>{const n=t.dataset.ciz3d===Wt;t.classList.toggle("aktif",wn&&n),t.innerHTML=wn&&n?`${V("image")} 2D'ye geç`:`${V("box")} 3D Çiz`})}function Jn(i,e){di(Dt(e))||(ha[e]=!1);const t=i.querySelector(`#kz-${e}-tuval`);t&&ic(t,Dt(e)),ro(i,e),Kf(i,e),t_()}function Kf(i,e){const t=Gt[e]||!di(Dt(e)),n=e==="pelerin"?As:Rs,a=i.querySelector(`#kz-${e}-durum`);a&&(a.textContent=n&&t?"KAYITLI":"");const r=i.querySelector(`#kz-${e}-sekme-durum`);r&&(r.textContent=n&&t?"kayıtlı":"")}function Mw(i,e,t){const n=i.getContext("2d");if(!n)return;n.clearRect(0,0,i.width,i.height);const a=i.width/Ve;n.font="600 10px ui-sans-serif, system-ui, sans-serif",n.textAlign="center",n.textBaseline="middle";for(const r of e){const s=t?.id===r.id;if(n.strokeStyle=s?"rgba(255,150,60,0.95)":"rgba(255,255,255,0.26)",n.lineWidth=s?2:1,n.setLineDash(s?[]:[4,3]),n.strokeRect(r.x*a+.5,r.y*a+.5,r.w*a-1,r.h*a-1),n.setLineDash([]),r.h*a<20)continue;const o=r.w*a<46,c=(r.x+r.w/2)*a,l=Math.min(i.height-10,Math.max(10,(r.y+r.h/2)*a));n.save(),n.translate(c,l),o&&n.rotate(-Math.PI/2);const d=n.measureText(r.ad);n.fillStyle="rgba(8,9,13,0.74)",n.fillRect(-d.width/2-4,-7,d.width+8,14),n.fillStyle=s?"#ffb066":"rgba(255,255,255,0.8)",n.fillText(r.ad,0,0),n.restore()}}function ro(i,e){const t=i.querySelector(`#kz-${e}-rehber`);t&&Mw(t,rc(e),mr.get(e)??null)}function hm(i,e){const t=e.getBoundingClientRect();if(t.width<1||t.height<1)return null;const n=Math.floor((i.clientX-t.left)/t.width*Ve),a=Math.floor((i.clientY-t.top)/t.height*kt);return n<0||a<0||n>=Ve||a>=kt?null:{x:n,y:a}}function Ew(i,e,t){for(const n of rc(i))if(e>=n.x&&e<n.x+n.w&&t>=n.y&&t<n.y+n.h)return n;return null}function ww(i,e,t,n,a,r){let s=e,o=t;const c=Math.abs(n-e),l=Math.abs(a-t),d=e<n?1:-1,f=t<a?1:-1;let u=c-l;for(;s>=0&&s<Ve&&o>=0&&o<kt&&(i[o*Ve+s]=r),!(s===n&&o===a);){const h=2*u;h>-l&&(u-=l,s+=d),h<c&&(u+=c,o+=f)}}function Tw(i,e){const t=i.querySelector(`#kz-${e}-palet`);if(!t)return;pm(t,i);const n=i.querySelector("#kz-3d-palet");n&&!n.childElementCount&&pm(n,i)}function pm(i,e){i.innerHTML=pw.map(t=>`<button class="kz-renk" data-renk="${t}" style="background:${t}" title="${t}" aria-label="${t}"></button>`).join(""),i.querySelectorAll(".kz-renk").forEach(t=>{t.addEventListener("click",()=>gr(e,t.dataset.renk??"#ffffff"))})}function gr(i,e,t=!0){const n=Zv(e)??za;za=n,t&&(ui="kalem",vw(n));const a=o=>(o??"").toLowerCase()===n.toLowerCase();for(const o of zo){const c=i.querySelector(`#kz-${o}-renk`);c&&(c.value=n);const l=i.querySelector(`#kz-${o}-hex`);l&&(l.value=n.toUpperCase());const d=i.querySelector(`#kz-${o}-renk-kod`);d&&(d.textContent=n.toUpperCase()),i.querySelectorAll(`#kz-${o}-palet .kz-renk`).forEach(f=>{f.classList.toggle("aktif",a(f.dataset.renk))}),i.querySelectorAll(`#kz-${o}-son .kz-renk`).forEach(f=>{f.classList.toggle("aktif",a(f.dataset.renk))})}const r=i.querySelector("#kz-3d-renk");r&&(r.value=n);const s=i.querySelector("#kz-3d-renk-kod");s&&(s.textContent=n.toUpperCase()),i.querySelectorAll("#kz-3d-palet .kz-renk").forEach(o=>{o.classList.toggle("aktif",a(o.dataset.renk))}),t&&wn&&(Ba=!1),Xf(i),r_(i)}function Aw(i,e){const t=i.querySelector(`#kz-${e}-tuval`);if(!t)return;Tw(i,e),ic(t,Dt(e)),ro(i,e),Kf(i,e),Cw(i,e),r_(i),a_(i),Xf(i),e==="pelerin"&&gr(i,za,!1);let n=!1,a=-1,r=-1;const s=()=>{hn[e].push(Dt(e).slice()),hn[e].length>ac&&hn[e].shift(),Xa[e].length=0},o=(u,h,g)=>{const m=Dt(e);if(ui==="damla"){const v=m[h*Ve+u];v&&gr(i,v,!0);return}if(ui==="kova"){if(!g)return;s(),Lw(m,u,h,za),Jn(i,e);return}const p=ui==="silgi"?"":za;a>=0&&r>=0?ww(m,a,r,u,h,p):m[h*Ve+u]=p,a=u,r=h,Jn(i,e)};t.addEventListener("contextmenu",u=>u.preventDefault()),t.addEventListener("pointerdown",u=>{Wt!==e&&(Wt=e,No(i)),n=!0,a=-1,r=-1;try{t.setPointerCapture(u.pointerId)}catch{}const h=hm(u,t);h&&(ui!=="damla"&&s(),o(h.x,h.y,!0))}),t.addEventListener("pointermove",u=>{const h=hm(u,t),g=h?Ew(e,h.x,h.y):null;(mr.get(e)??null)?.id!==(g?.id??null)&&(mr.set(e,g),ro(i,e)),!(!h||!n)&&o(h.x,h.y,!1)});const c=()=>{n=!1,a=-1,r=-1};t.addEventListener("pointerup",c),t.addEventListener("pointercancel",c),t.addEventListener("pointerleave",()=>{n||mr.get(e)&&(mr.set(e,null),ro(i,e))}),i.querySelectorAll(`#kz-${e}-araclar [data-kzarac]`).forEach(u=>{u.addEventListener("click",()=>Rw(i,u.dataset.kzarac??"kalem"))}),i.querySelector(`#kz-${e}-geri`)?.addEventListener("click",()=>n_(i,e)),i.querySelector(`#kz-${e}-ileri`)?.addEventListener("click",()=>i_(i,e)),i.querySelector(`#kz-${e}-renk`)?.addEventListener("input",u=>{gr(i,u.target.value)});const l=i.querySelector(`#kz-${e}-hex`),d=()=>{if(!l)return;const u=Zv(l.value);u?gr(i,u):l.value=za.toUpperCase()};l?.addEventListener("change",d),l?.addEventListener("blur",d),l?.addEventListener("keydown",u=>{u.key==="Enter"&&(u.preventDefault(),d())}),i.querySelector(`#kz-${e}-temizle`)?.addEventListener("click",()=>{s();const u=Dt(e);for(let h=0;h<u.length;h++)u[h]="";ha[e]=!0,Jn(i,e),X(`${e==="pelerin"?"Pelerin":"Elitra"} tuvali temizlendi — kaydetmezsen oyun değişmez.`)}),i.querySelector(`#kz-${e}-3d`)?.addEventListener("click",()=>{if(wn&&Wt===e){Yu(i,!1),requestAnimationFrame(()=>{i.querySelector(`#kz-${e}-kart`)?.scrollIntoView({behavior:"smooth",block:"center"})});return}Yu(i,!0,e),i.querySelector("#kz-oniz3d")?.scrollIntoView({behavior:"smooth",block:"center"})}),i.querySelector(`#kz-${e}-kaydet`)?.addEventListener("click",()=>void sc(i,e)),i.querySelector(`#kz-${e}-kaldir`)?.addEventListener("click",()=>{Gt[e]&&(Gt[e]=!1,$t[e]=null,na(i,e)),s();const u=Dt(e);for(let h=0;h<u.length;h++)u[h]="";ha[e]=!0,Jn(i,e),sc(i,e)});const f=i.querySelector(`#kz-${e}-dosya`);f?.addEventListener("change",()=>{const u=f.files?.[0];u&&Ww(i,e,u),f.value=""})}function Rw(i,e){ui=e,Xf(i),e==="damla"?X("Damlalık: tuvallin bir pikseline tıkla, rengi alır."):e==="kova"&&X("Kova: bitişik aynı renk alanını seçili renkle doldurur.")}function Xf(i){i.querySelectorAll("[data-kzarac]").forEach(e=>{e.classList.toggle("aktif",e.dataset.kzarac===ui)}),i.querySelector("#kz-3d-kalem")?.classList.toggle("aktif",wn&&ui!=="silgi"),i.querySelector("#kz-3d-silgi")?.classList.toggle("aktif",wn&&ui==="silgi")}function Lw(i,e,t,n){const a=i[t*Ve+e]??"";if(a===n)return;const r=[t*Ve+e];for(;r.length;){const s=r.pop();if((i[s]??"")!==a)continue;i[s]=n;const o=s%Ve,c=Math.floor(s/Ve);o>0&&r.push(s-1),o<Ve-1&&r.push(s+1),c>0&&r.push(s-Ve),c<kt-1&&r.push(s+Ve)}}function n_(i,e){const t=hn[e].pop();if(!t){X("Geri alınacak adım yok.");return}Xa[e].push(Dt(e).slice()),Dt(e).splice(0,Dt(e).length,...t),Jn(i,e)}function i_(i,e){const t=Xa[e].pop();if(!t){X("İleri alınacak adım yok.");return}hn[e].push(Dt(e).slice()),Dt(e).splice(0,Dt(e).length,...t),Jn(i,e)}function a_(i){for(const e of zo){const t=i.querySelector(`#kz-${e}-tuval`),n=i.querySelector(`#kz-${e}-rehber`),a=`${Ve*ao}px`,r=`${kt*ao}px`;t&&(t.style.width=a,t.style.height=r),n&&(n.style.width=a,n.style.height=r)}i.querySelectorAll("[data-kzyum]").forEach(e=>{e.classList.toggle("aktif",Number(e.dataset.kzyum)===ao)})}function r_(i){for(const e of zo){const t=i.querySelector(`#kz-${e}-son`);t&&(t.innerHTML=ns.length?ns.map(n=>`<button class="kz-renk" data-renk="${n}" style="background:${n}" title="${n}" aria-label="${n}"></button>`).join(""):'<span class="kz-bos-not">Henüz renk kullanmadın — bir renk seç, burada birikir.</span>',t.querySelectorAll(".kz-renk").forEach(n=>{n.addEventListener("click",()=>gr(i,n.dataset.renk??"#ffffff"))}))}}function Cw(i,e){const t=i.querySelector(`#kz-${e}-bolgeler`);t&&(t.innerHTML=rc(e).map(n=>`<button class="kz-bolge-rozet" data-bolge="${n.id}" title="Atlasta ${n.ad} yüzü">${n.ad}</button>`).join(""),t.querySelectorAll("[data-bolge]").forEach(n=>{const a=rc(e).find(s=>s.id===n.dataset.bolge)??null,r=s=>{mr.set(e,s?a:null),ro(i,e)};n.addEventListener("pointerenter",()=>r(!0)),n.addEventListener("pointerleave",()=>r(!1))}))}function Yu(i,e,t){e&&t&&(Wt=t),wn=e,Ba=!1,e||(Ua=!1),e||(si=!1);const n=Nn();n.etkilesimKapali=e&&!si,n.izgaraGoster(e&&cr),n.kanatAyrik(e),n.oyuncuGoster(!Ua),i.querySelector("#kz-3d-matris")?.classList.toggle("aktif",e&&cr),i.querySelector("#kz-sayfa")?.classList.toggle("cizim3d",e),i.querySelector("#kz-oniz3d")?.classList.toggle("cizim",e);const a=i.querySelector("#kz-cizim-arac");a&&(a.hidden=!e);const r=i.querySelector("#kz-3d-oyuncu");r&&(r.innerHTML=`${V("user")} ${Ua?"Oyuncuyu göster":"Oyuncuyu gizle"}`),i.querySelector("#kz-3d-kalem")?.classList.toggle("aktif",e&&!Ba),i.querySelector("#kz-3d-silgi")?.classList.toggle("aktif",e&&Ba),i.querySelector("#kz-3d-dondur")?.classList.toggle("aktif",e&&si);const s=i.querySelector("#kz-sahne-alt");s&&(s.textContent=e?si?"Döndür modu: sol tık sürükle döndürür · Tekerlek: yakınlaş":"Sol tık: boya · Orta/sağ tık: döndür · Tekerlek: yakınlaş":"Sürükle: döndür · Tekerlek: yakınlaş"),No(i),requestAnimationFrame(()=>n.boyutGuncelle())}function Pw(i){const e=async(c,l,d)=>{const f=Dt(l),u=`yikim:kozmetik:${l}:yedek`;if(!d&&!di(f))try{localStorage.setItem(u,JSON.stringify(f))}catch{}try{await te("cmd_kozmetik_aktif",{[l]:d});return}catch{}if(!d){if(Gt[l])throw new Error("Bu launcher sürümü HD fotoğrafı kapatmayı desteklemiyor — launcher'ı güncelle.");await Zu(l,Ar());return}let h=[];try{const g=localStorage.getItem(u),m=g?JSON.parse(g):null;Array.isArray(m)&&m.length===In&&(h=m)}catch{h=[]}!h.length&&!di(f)&&(h=f.slice()),h.length&&(await Zu(l,h),f.splice(0,f.length,...h),Jn(c,l))},t=i.querySelector("#kz-sahne");if(!t)return;const n=Nn();let a=!1;const r=c=>{const l=n.kozmetikNoktasi(c,Wt);if(!l||l.x<0||l.y<0||l.x>=Ve||l.y>=kt)return;const d=Dt(Wt),f=Ba?"":za,u=l.y*Ve+l.x;d[u]!==f&&(d[u]=f,Jn(i,Wt))};t.addEventListener("contextmenu",c=>{wn&&c.preventDefault()}),t.addEventListener("pointerdown",c=>{if(!(!wn||si)&&!(c.pointerType==="mouse"&&c.button!==0)){a=!0;try{t.setPointerCapture(c.pointerId)}catch{}r(c)}}),t.addEventListener("pointermove",c=>{wn&&a&&r(c)});const s=()=>{a=!1};t.addEventListener("pointerup",s),t.addEventListener("pointercancel",s),i.querySelectorAll("[data-secim]").forEach(c=>{c.addEventListener("click",()=>{Wt=c.dataset.secim??"pelerin",No(i)})}),i.querySelectorAll("[data-kzyum]").forEach(c=>{c.addEventListener("click",()=>{const l=Number(c.dataset.kzyum);l&&(ao=l,a_(i))})}),i.querySelector("#kz-3d-matris")?.addEventListener("click",()=>{cr=!cr,i.querySelector("#kz-3d-matris")?.classList.toggle("aktif",cr),n.izgaraGoster(cr),X(cr?"Matris açık — piksel sınırları görünür.":"Matris kapalı.")}),i.querySelector("#kz-3d-renk")?.addEventListener("input",c=>{gr(i,c.target.value)});const o=[["#kz-pelerin-aktif","pelerin"],["#kz-kanat-aktif","kanat"]];for(const[c,l]of o)i.querySelector(c)?.addEventListener("change",d=>{const f=d.target,u=f.checked;gm(l,u),(async()=>{try{await e(i,l,u),X(l==="pelerin"?u?"Özel pelerin açık — oyunda kendi pelerin görünür.":"Özel pelerin kapalı — oyunda Minecraft pelerini görünür.":u?"Özel elitra açık — oyunda kendi elitran görünür.":"Özel elitra kapalı — oyunda Minecraft elitrası görünür.")}catch(h){f.checked=!u,gm(l,!u),X(String(h),"err")}})()});i.querySelector("#kz-yon")?.addEventListener("click",()=>{ds=!ds,s_(i)}),i.querySelector("#kz-zum-arti")?.addEventListener("click",()=>n.zoomAyarla(n.zoomAl()*.85)),i.querySelector("#kz-zum-eksi")?.addEventListener("click",()=>n.zoomAyarla(n.zoomAl()*1.18)),i.querySelector("#kz-zum-sigdir")?.addEventListener("click",()=>n.zoomAyarla(2.75)),i.querySelector("#kz-3d-kalem")?.addEventListener("click",()=>{Ba=!1,si=!1,ui="kalem",n.etkilesimKapali=wn,i.querySelector("#kz-3d-kalem")?.classList.add("aktif"),i.querySelector("#kz-3d-silgi")?.classList.remove("aktif"),i.querySelector("#kz-3d-dondur")?.classList.remove("aktif")}),i.querySelector("#kz-3d-silgi")?.addEventListener("click",()=>{Ba=!0,si=!1,ui="silgi",n.etkilesimKapali=wn,i.querySelector("#kz-3d-silgi")?.classList.add("aktif"),i.querySelector("#kz-3d-kalem")?.classList.remove("aktif"),i.querySelector("#kz-3d-dondur")?.classList.remove("aktif")}),i.querySelector("#kz-3d-dondur")?.addEventListener("click",()=>{si=!si,n.etkilesimKapali=wn&&!si,i.querySelector("#kz-3d-dondur")?.classList.toggle("aktif",si);const l=i.querySelector("#kz-sahne-alt");l&&(l.textContent=si?"Döndür modu: sol tık sürükle döndürür · Tekerlek: yakınlaş":"Sol tık: boya · Orta/sağ tık: döndür · Tekerlek: yakınlaş")}),i.querySelector("#kz-3d-oyuncu")?.addEventListener("click",()=>{const c=i.querySelector("#kz-3d-oyuncu");Ua=!Ua,n.oyuncuGoster(!Ua),c&&(c.innerHTML=`${V("user")} ${Ua?"Oyuncuyu göster":"Oyuncuyu gizle"}`)}),i.querySelector("#kz-3d-2d")?.addEventListener("click",()=>{const c=Wt;Yu(i,!1),requestAnimationFrame(()=>{i.querySelector(`#kz-${c}-kart`)?.scrollIntoView({behavior:"smooth",block:"center"})})})}function s_(i){Nn().bakisaAyarla(ds?2.5:0,ds?.12:.02);const e=i.querySelector("#kz-yon");e&&(e.textContent=ds?"Önden gör":"Arkadan gör")}const Dw=(i,e,t)=>i[t*Ve+e]??"",is=(i,e,t,n)=>{e<0||e>=Ve||t<0||t>=kt||(i[t*Ve+e]=n)};function Iw(i,e,t){for(let n=0;n<e.h;n++)for(let a=0;a<e.w;a++)is(i,t.x+(e.w-1-a),t.y+n,Dw(i,e.x+a,e.y+n))}function zw(i,e){const t=Ka(e),n=Bv[e],{u:a,v:r,d:s}=n,o=(f,u)=>i[u*Ve+f]??"",c=e==="pelerin"?a:a+s+n.w,l=e==="pelerin"?a+s+n.w:a;for(let f=0;f<t.h;f++){const u=o(t.x,t.y+f),h=o(t.x+t.w-1,t.y+f);for(let g=0;g<s;g++)is(i,c+g,r+s+f,u),is(i,l+g,r+s+f,h)}const d=e!=="pelerin";for(let f=0;f<t.w;f++){const u=d?t.w-1-f:f,h=o(t.x+u,t.y),g=o(t.x+u,t.y+t.h-1);for(let m=0;m<s;m++)is(i,a+s+f,r+m,h),is(i,a+s+n.w+f,r+m,g)}}const Uw={pelerin:160,kanat:200};function Nw(i,e=Dt(i)){const t=Ka(i),n=[];for(let a=0;a<t.h;a++)for(let r=0;r<t.w;r++)n.push(e[(t.y+a)*Ve+t.x+r]??"");return n}function Ow(i,e){const t=Ar(),n=Ka(e);for(let a=0;a<n.h;a++)for(let r=0;r<n.w;r++)is(t,n.x+r,n.y+a,i[a*n.w+r]??"");return Iw(t,n,Hv(e)),zw(t,e),t}async function Zu(i,e){try{return await te("cmd_kozmetik_kaydet",{[i]:e})}catch(t){if(!/piksel bekleniyordu/i.test(String(t)))throw t;return await te("cmd_kozmetik_kaydet",{[i]:Nw(i,e)})}}function mm(i){try{const e=localStorage.getItem(`yikim:kozmetik:${i}:aktif`);return e===null?null:e==="1"}catch{return null}}function gm(i,e){try{localStorage.setItem(`yikim:kozmetik:${i}:aktif`,e?"1":"0")}catch{}}const Gt={pelerin:!1,kanat:!1},$t={pelerin:null,kanat:null},ha={pelerin:!1,kanat:!1};function Fw(i){return new Promise(e=>{const t=URL.createObjectURL(i),n=new Image;n.onload=()=>{URL.revokeObjectURL(t),e(n)},n.onerror=()=>{URL.revokeObjectURL(t),X("Görsel okunamadı","err"),e(null)},n.src=t})}function Bw(i,e,t,n,a,r,s,o){const c=document.createElement("canvas");c.width=Math.max(1,Math.round(r)),c.height=Math.max(1,Math.round(s));const l=c.getContext("2d",{willReadFrequently:!0});if(!l)throw new Error("tuval yok");if(l.imageSmoothingEnabled=o,l.imageSmoothingQuality="high",!o)return l.drawImage(i,e,t,n,a,0,0,c.width,c.height),c;let d=i,f=e,u=t,h=n,g=a,m=Math.round(n),p=Math.round(a);for(;m>c.width*2&&p>c.height*2;){m=Math.max(c.width,Math.round(m/2)),p=Math.max(c.height,Math.round(p/2));const v=document.createElement("canvas");v.width=m,v.height=p;const y=v.getContext("2d");if(!y)break;y.imageSmoothingEnabled=!0,y.imageSmoothingQuality="high",y.drawImage(d,f,u,h,g,0,0,m,p),d=v,f=0,u=0,h=m,g=p}return l.drawImage(d,f,u,h,g,0,0,c.width,c.height),c}function o_(i,e,t,n,a,r=!1,s=0){const o=Ka(t),c=Hv(t),l=Bv[t],d=a?Math.max(1,Math.min(16,Math.round(e.w/o.w))):1,f=document.createElement("canvas");f.width=Ve*d,f.height=kt*d;const u=f.getContext("2d",{willReadFrequently:!0});if(!u)throw new Error("tuval yok");const h=o.x*d,g=o.y*d,m=o.w*d,p=o.h*d;u.imageSmoothingEnabled=!1;const v=Bw(i,e.x,e.y,e.w,e.h,m,p,a);let y=v;if(r||s!==0){const b=document.createElement("canvas");b.width=m,b.height=p;const S=b.getContext("2d");S&&(S.imageSmoothingEnabled=!a,S.translate(m/2,p/2),S.rotate(s*Math.PI/180),S.scale(r?-1:1,1),S.drawImage(v,-m/2,-p/2),y=b)}if(t==="pelerin"&&(u.fillStyle="#000000",u.fillRect(h,g,m,p)),u.drawImage(y,h,g),n)return f;u.save(),u.translate(c.x*d+m,c.y*d),u.scale(-1,1),u.drawImage(f,h,g,m,p,0,0,m,p),u.restore();const T=d;return u.drawImage(f,h,g,T,p,(l.u+l.d+l.w)*d,(l.v+l.d)*d,l.d*d,p),u.drawImage(f,h+m-T,g,T,p,l.u*d,(l.v+l.d)*d,l.d*d,p),u.drawImage(f,h,g,m,T,(l.u+l.d)*d,l.v*d,m,l.d*d),u.drawImage(f,h,g+p-T,m,T,(l.u+l.d+l.w)*d,l.v*d,m,l.d*d),f}function Hw(i){return new Promise((e,t)=>{i.toBlob(n=>{if(!n){t(new Error("PNG üretilemedi"));return}const a=new FileReader;a.onload=()=>e(String(a.result).split(",")[1]??""),a.onerror=()=>t(new Error("PNG okunamadı")),a.readAsDataURL(n)},"image/png")})}function na(i,e){const t=Gt[e],n=i.querySelector(`#kz-${e}-kart`);if(!n)return;n.classList.toggle("foto",t);const a=n.querySelector(".kz-calisma");a&&(a.hidden=t);const r=i.querySelector(`#kz-${e}-foto`);r&&(r.hidden=!t);const s=i.querySelector(`#kz-${e}-foto-img`),o=$t[e];if(s&&o){const l=new Image;l.onload=()=>{const d=Math.max(1,Math.round(l.naturalWidth/Ve)),f=Ka(e);s.width=f.w*12,s.height=f.h*12;const u=s.getContext("2d");u&&(u.clearRect(0,0,s.width,s.height),u.imageSmoothingEnabled=!0,u.imageSmoothingQuality="high",u.drawImage(l,f.x*d,f.y*d,f.w*d,f.h*d,0,0,s.width,s.height))},l.src=Mt(o)}else s&&s.getContext("2d")?.clearRect(0,0,s.width,s.height);for(const l of["#kz-"+e+"-3d","#kz-"+e+"-temizle","#kz-"+e+"-kaydet"]){const d=i.querySelector(l);d&&(d.hidden=t)}const c=i.querySelector(`#kz-${e}-durum`);c&&(c.textContent=t?"fotoğraf (HD)":""),Wt===e&&No(i)}function $w(i,e){const t=(n,a,r)=>{if(Array.isArray(r)&&r.length===In){Gt[n]=!1,$t[n]=null,na(i,n);return}if(!a){Gt[n]=!1,$t[n]=null,na(i,n);return}Gt[n]=!0,$t[n]=String(a),na(i,n);const s=String(a),o=new Image;o.onload=()=>{if($t[n]!==s)return;const c=o.naturalWidth>Ve||o.naturalHeight>kt;Gt[n]=c,$t[n]=c?s:null,na(i,n)},o.onerror=()=>{$t[n]===s&&(Gt[n]=!0)},o.src=Mt(s)};t("pelerin",e.pelerin_dosya,e.pelerin),t("kanat",e.kanat_dosya,e.kanat)}async function Gw(i,e,t,n,a,r,s=!1,o=0){ha[e]=!1;const c=o_(t,n,e,a,r,s,o),l=await Hw(c);let d;try{d=await te("cmd_kozmetik_fotograf",{tur:e,png:l,duz:a})}catch(h){const g=document.createElement("canvas");g.width=Ve,g.height=kt;const m=g.getContext("2d",{willReadFrequently:!0});if(!m)throw h;m.imageSmoothingEnabled=!0,m.imageSmoothingQuality="high",m.drawImage(c,0,0,Ve,kt);const p=Ku(m),v=Dt(e);hn[e].push(v.slice()),hn[e].length>ac&&hn[e].shift(),Xa[e].length=0;for(let y=0;y<In;y++)v[y]=p[y];Jn(i,e),await sc(i,e),X("Launcher eski sürümde — fotoğraf 64×32 olarak kaydedildi. HD için launcher'ı güncelle.","err");return}const f=Dt(e);for(let h=0;h<f.length;h++)f[h]="";localStorage.removeItem(`yikim:kozmetik:${e}:yedek`),Gt[e]=!0,$t[e]=e==="pelerin"?"pelerin.png":"elytra.png";try{const h=await te("cmd_kozmetik_oku"),g=e==="pelerin"?h.pelerin_dosya:h.kanat_dosya;g&&($t[e]=String(g))}catch{}if(e==="pelerin"?As=!0:Rs=!0,!r){const h=c.getContext("2d",{willReadFrequently:!0});if(h){const g=Ku(h),m=Dt(e);hn[e].push(m.slice()),hn[e].length>ac&&hn[e].shift(),Xa[e].length=0;for(let p=0;p<In;p++)m[p]=g[p];if(e==="kanat")for(let p=0;p<In;p++)Wf[p]||(m[p]="")}Gt[e]=!1,$t[e]=null,Jn(i,e),na(i,e),await sc(i,e);return}Jn(i,e),na(i,e);const u=d.yuklendi?"":" (sunucuya yüklenemedi; yalnız sende görünür)";X(`Fotoğraf ${d.genislik}×${d.yukseklik} HD doku olarak kaydedildi${u}`)}function Vw(i,e,t){i.querySelector("#kz-kirp")?.remove();const n=Ka(e),a=n.w/n.h,r=e==="pelerin"?"Pelerin":"Elitra";let s=!1,o=!0,c=!1,l=0;const d=document.createElement("div");d.className="kz-kirp",d.id="kz-kirp",d.innerHTML=`
    <div class="kz-kirp-kart" role="dialog" aria-modal="true" aria-label="Fotoğrafı yerleştir">
      <div class="kz-kirp-bas">
        <div class="kz-kirp-basla">
          <b>${r} fotoğrafı</b>
          <span>Çerçeveyi sürükle · köşeden boyutlandır · tekerlekle yakınlaştır · üstteki tutamaçla döndür</span>
        </div>
        <button class="btn ghost sm" id="kz-kirp-kapat" title="Kapat (Esc)">${V("close")}</button>
      </div>
      <div class="kz-kirp-govde">
        <canvas id="kz-kirp-c"></canvas>
        <div class="kz-kirp-yan">
          <span class="kz-etiket">Oyunda görünecek</span>
          <canvas id="kz-kirp-on" width="${n.w}" height="${n.h}"></canvas>
          <p class="kz-kirp-not" id="kz-kirp-boyut">—</p>
          <span class="kz-etiket">Şekil</span>
          <div class="kz-kirp-mod" id="kz-kirp-mod">
            <button class="seg-btn aktif" data-mod="normal">${r} şekli</button>
            <button class="seg-btn" data-mod="duz">Düz dikdörtgen</button>
          </div>
          <p class="kz-kirp-not" id="kz-kirp-mod-not"></p>
          <span class="kz-etiket">Ayarlama</span>
          <div class="kz-kirp-mod" id="kz-kirp-ayar">
            <button class="seg-btn" id="kz-kirp-ayna" title="Fotoğrafı yatay olarak ters çevir">Ayna</button>
            <button class="seg-btn" id="kz-kirp-don" title="Döndürmeyi sıfırla">0°</button>
          </div>
          <p class="kz-kirp-not" id="kz-kirp-ayar-not">Çerçevenin üstündeki yuvarlak tutamacı fareyle çevirerek istediğin açıya getir. Fotoğrafın dışında kalan yerler pelerinde SİYAH, elitrada SAYDAM kalır.</p>
          <span class="kz-etiket">Kalite</span>
          <label class="kz-kirp-piksel"><input type="checkbox" id="kz-kirp-piksel" checked /> HD görünüm</label>
          <p class="kz-kirp-not">İşaretliyken fotoğraf HD dokusu olarak kaydedilir. Kapatırsan 64×32 piksel dokusuna iner ve üzerine yeniden çizebilirsin.</p>
        </div>
      </div>
      <div class="kz-kirp-alt">
        <span class="kz-kirp-bilgi" id="kz-kirp-bilgi"></span>
        <button class="btn" id="kz-kirp-iptal">İptal</button>
        <button class="btn primary" id="kz-kirp-uygula">${V("check")} Uygula</button>
      </div>
    </div>`,i.appendChild(d);const f=d.querySelector("#kz-kirp-c"),u=d.querySelector("#kz-kirp-on"),h=d.querySelector("#kz-kirp-bilgi"),g=d.querySelector("#kz-kirp-boyut"),m=d.querySelector("#kz-kirp-mod-not"),p=Math.min(620/t.width,420/t.height,1);f.width=Math.max(60,Math.round(t.width*p)),f.height=Math.max(60,Math.round(t.height*p));const v=f.width/t.width,y=f.getContext("2d");if(!y)throw new Error("tuval yok");let b=(()=>{let D=t.height,P=D*a;return P>t.width&&(P=t.width,D=P/a),{x:(t.width-P)/2,y:(t.height-D)/2,w:P,h:D}})();const S=D=>{const P=Math.max(4,t.width/60);let Y=Math.min(Math.max(D.w,P),t.width),$=Y/a;return $>t.height&&($=t.height,Y=$*a),{x:Math.min(Math.max(D.x,0),Math.max(0,t.width-Y)),y:Math.min(Math.max(D.y,0),Math.max(0,t.height-$)),w:Y,h:$}};b=S(b);const k=()=>{const D=b.x*v,P=b.y*v,Y=b.w*v,$=P-26;return{x:D+Y/2,y:$<14?P+24:$}},A=()=>{y.clearRect(0,0,f.width,f.height),y.imageSmoothingEnabled=!0,y.imageSmoothingQuality="high",y.drawImage(t,0,0,f.width,f.height);const D=b.x*v,P=b.y*v,Y=b.w*v,$=b.h*v;y.fillStyle="rgba(6,8,12,0.66)",y.fillRect(0,0,f.width,P),y.fillRect(0,P+$,f.width,Math.max(0,f.height-P-$)),y.fillRect(0,P,D,$),y.fillRect(D+Y,P,Math.max(0,f.width-D-Y),$),y.strokeStyle="rgba(255,255,255,0.30)",y.lineWidth=1;for(let Be=1;Be<3;Be++)y.beginPath(),y.moveTo(D+Y*Be/3,P),y.lineTo(D+Y*Be/3,P+$),y.stroke(),y.beginPath(),y.moveTo(D,P+$*Be/3),y.lineTo(D+Y,P+$*Be/3),y.stroke();y.strokeStyle="#ff8a3d",y.lineWidth=2,y.strokeRect(D+1,P+1,Math.max(1,Y-2),Math.max(1,$-2)),y.fillStyle="#ff8a3d",y.fillRect(D+Y-8,P+$-8,8,8);const Q=k(),ne=Q.x,ue=Q.y;y.strokeStyle="#ff8a3d",y.lineWidth=2,y.beginPath(),y.moveTo(ne,P),y.lineTo(ne,ue+9),y.stroke(),y.beginPath(),y.arc(ne,ue,9,0,Math.PI*2),y.fillStyle="#12161e",y.fill(),y.stroke(),y.fillStyle="#ff8a3d",y.font="bold 11px sans-serif",y.textAlign="center",y.textBaseline="middle",y.fillText("↻",ne,ue+1);const ke=o_(t,b,e,s,o,c,l),Ne=ke.width/Ve,De=Ka(e),He=De.w*Ne,J=De.h*Ne,ae=document.createElement("canvas");ae.width=He,ae.height=J;const fe=ae.getContext("2d",{willReadFrequently:!0}),ze=o?He:De.w*11,be=o?J:De.h*11;u.width=ze,u.height=be;const Fe=u.getContext("2d");if(fe&&Fe){if(fe.imageSmoothingEnabled=!1,fe.drawImage(ke,De.x*Ne,De.y*Ne,He,J,0,0,He,J),e==="kanat"){const Be=fe.getImageData(0,0,He,J);for(let Ke=0;Ke<J;Ke++)for(let rt=0;rt<He;rt++){const Ge=De.x+Math.floor(rt/Ne),ht=De.y+Math.floor(Ke/Ne);Wf[ht*Ve+Ge]||(Be.data[(Ke*He+rt)*4+3]=0)}fe.putImageData(Be,0,0)}Fe.clearRect(0,0,ze,be),Fe.imageSmoothingEnabled=!1,e==="pelerin"&&(Fe.save(),Fe.translate(ze,0),Fe.scale(-1,1)),Fe.drawImage(ae,0,0,ze,be),e==="pelerin"&&Fe.restore()}u.style.imageRendering=o?"auto":"pixelated";const gt=Ne;g&&(g.textContent=`Doku: ${Ve*gt}×${kt*gt} (kumaş ${n.w*gt}×${n.h*gt})`),h&&(h.textContent=`${Math.round(b.w)}×${Math.round(b.h)} px seçim`)},x=D=>{const P=f.getBoundingClientRect();return{x:(D.clientX-P.left)/Math.max(1,P.width)*f.width/v,y:(D.clientY-P.top)/Math.max(1,P.height)*f.height/v}};let w=null;f.addEventListener("pointerdown",D=>{const P=x(D),Y=14/v,$=k(),Q=$.x,ne=$.y,ue=(D.clientX-f.getBoundingClientRect().left)/Math.max(1,f.getBoundingClientRect().width)*f.width,ke=(D.clientY-f.getBoundingClientRect().top)/Math.max(1,f.getBoundingClientRect().height)*f.height,Ne={x:b.x+b.w/2,y:b.y+b.h/2},De=Math.atan2(P.y-Ne.y,P.x-Ne.x)*180/Math.PI;Math.hypot(ue-Q,ke-ne)<=14?w={tip:"don",px:P.x,py:P.y,sec:{...b},aci:De,don:l}:w={tip:Math.hypot(P.x-(b.x+b.w),P.y-(b.y+b.h))<Y?"boyut":"tasi",px:P.x,py:P.y,sec:{...b}},f.setPointerCapture(D.pointerId),D.preventDefault()}),f.addEventListener("pointermove",D=>{if(!w)return;const P=x(D),Y=P.x-w.px,$=P.y-w.py;if(w.tip==="don"){const Q={x:b.x+b.w/2,y:b.y+b.h/2},ne=Math.atan2(P.y-Q.y,P.x-Q.x)*180/Math.PI;let ue=(w.don??0)+(ne-(w.aci??ne));ue=(ue%360+360)%360,D.shiftKey&&(ue=Math.round(ue/15)*15),l=ue,z()}else if(w.tip==="tasi")b=S({x:w.sec.x+Y,y:w.sec.y+$,w:w.sec.w,h:w.sec.h});else{const Q=Math.max(w.sec.w+Math.max(Y,$*a),4);b=S({x:w.sec.x,y:w.sec.y,w:Q})}A()});const R=()=>{w=null};f.addEventListener("pointerup",R),f.addEventListener("pointercancel",R),f.addEventListener("wheel",D=>{D.preventDefault();const P=D.deltaY<0?1.12:1/1.12,Y=b.x+b.w/2,$=b.y+b.h/2,Q=b.w*P;b=S({x:Y-Q/2,y:$-Q/a/2,w:Q}),A()},{passive:!1});const L=()=>{m&&(m.textContent=s?"Sadece seçtiğin dikdörtgen yazılır. İç astar, yanlar ve alt şerit BOŞ kalır.":"Desen kumaşın tamamına oturur: iç astar aynası ve yan/üst/alt şeritler otomatik tamamlanır.")};L(),d.querySelectorAll("[data-mod]").forEach(D=>{D.addEventListener("click",()=>{s=D.dataset.mod==="duz",d.querySelectorAll("[data-mod]").forEach(P=>P.classList.toggle("aktif",P===D)),L()})});const z=()=>{const D=d.querySelector("#kz-kirp-ayar-not"),P=d.querySelector("#kz-kirp-don"),Y=Math.round(l);P&&(P.textContent=`${Y}°`,P.classList.toggle("aktif",Y!==0)),D&&(Y===0&&!c?D.textContent="Çerçevenin üstündeki yuvarlak tutamacı fareyle çevirerek istediğin açıya getir. Fotoğrafın dışında kalan yerler pelerinde SİYAH, elitrada SAYDAM kalır.":D.textContent=`${Y?Y+"° döndürüldü":""}${Y&&c?" · ":""}${c?"aynalandı":""} — boş kalan yerler pelerinde SİYAH, elitrada SAYDAM.`)};d.querySelector("#kz-kirp-ayna")?.addEventListener("click",D=>{c=!c,D.currentTarget.classList.toggle("aktif",c),z(),A()}),d.querySelector("#kz-kirp-don")?.addEventListener("click",D=>{l=0,D.currentTarget.classList.remove("aktif"),D.currentTarget.textContent="0°",z(),A()}),z(),d.querySelector("#kz-kirp-piksel")?.addEventListener("change",D=>{o=D.target.checked,A()});const F=()=>{document.removeEventListener("keydown",C),d.remove()},C=D=>{D.key==="Escape"&&(D.preventDefault(),F())};document.addEventListener("keydown",C);const H=d.querySelector("#kz-kirp-uygula");H?.addEventListener("click",()=>{H.disabled||(H.disabled=!0,H.textContent="Kaydediliyor…",Gw(i,e,t,{...b},s,o,c,l).then(()=>F()).catch(D=>{H.disabled=!1,H.innerHTML=`${V("check")} Uygula`,X(String(D),"err")}))}),d.querySelector("#kz-kirp-kapat")?.addEventListener("click",F),d.querySelector("#kz-kirp-iptal")?.addEventListener("click",F),d.addEventListener("pointerdown",D=>{D.target===d&&F()}),A()}function qw(i,e,t){const n=document.createElement("canvas");n.width=Ve,n.height=kt;const a=n.getContext("2d",{willReadFrequently:!0});if(!a)throw new Error("tuval yok");a.imageSmoothingEnabled=!1,a.drawImage(t,0,0,Ve,kt);const r=Ku(a);if(di(r))throw new Error("pafta boş görünüyor");const s=Dt(e);hn[e].push(s.slice()),hn[e].length>ac&&hn[e].shift(),Xa[e].length=0;for(let o=0;o<In;o++)s[o]=r[o];Gt[e]=!1,$t[e]=null,ha[e]=!1,Jn(i,e),na(i,e),X("Pafta okundu — 64×32 atlas yüklendi.")}async function Ww(i,e,t){try{const n=await Fw(t);if(!n)return;const a=n.width/Math.max(1,n.height);if(Math.abs(a-2)<.02&&n.height>=32&&n.height<=128){qw(i,e,n);return}Vw(i,e,n)}catch(n){X(String(n),"err")}}async function Kw(i,e){let t;try{t=await te("cmd_kozmetik_oku")}catch{return!1}const n=e==="pelerin"?t.pelerin_dosya:t.kanat_dosya;if(!n)return!1;const a=e==="pelerin"?t.pelerin:t.kanat;if(Array.isArray(a)&&a.length===In&&!di(a)){const r=Dt(e);for(let s=0;s<In;s++)r[s]=a[s]??"";Gt[e]=!1,$t[e]=null}else Gt[e]=!0,$t[e]=String(n);return e==="pelerin"?As=!0:Rs=!0,Jn(i,e),na(i,e),!0}async function sc(i,e){const t=Dt(e),n=!di(t),a=e==="pelerin"?"Pelerin":"Elitra";if(Gt[e]){X(`${a} HD fotoğraf olarak kayıtlı. Değiştirmek için yeni fotoğraf yükle.`);return}if(!n&&!ha[e]){const d=await Kw(i,e);X(d?`${a} diskte kayıtlı — silmek için "Kaldır"ı kullan.`:`Kaydedilecek bir ${a.toLocaleLowerCase("tr")} tasarımı yok.`);return}const r=i.querySelector(`#kz-${e}-kaydet`),s=r?r.innerHTML:"",o=`${Date.now()}-${Math.random()}`,c=(d,f)=>{r&&(r.dataset.jeton=o,r.classList.remove("tamam","hata","bekliyor"),r.classList.add(f),r.textContent=d,r.disabled=!0)},l=d=>{r&&window.setTimeout(()=>{r.dataset.jeton===o&&(r.innerHTML=s,r.disabled=!1,r.classList.remove("tamam","hata","bekliyor"))},d)};c("Kaydediliyor…","bekliyor");try{const d=await Zu(e,t.slice());ha[e]=!1;try{n?localStorage.setItem(`yikim:kozmetik:${e}:yedek`,JSON.stringify(t)):localStorage.removeItem(`yikim:kozmetik:${e}:yedek`)}catch{}if(e==="pelerin"?As=n:Rs=n,Kf(i,e),c("Kaydedildi ✓","tamam"),l(1800),!n){X(`${a} kaldırıldı — oyunda ${e==="kanat"?"normal elitra":"görünmeyecek"}.`);return}d.yuklendi?X(`${a} kaydedildi — oyunda ve diğer oyuncularda görünecek.`):X(`${a} kaydedildi (yerel). Sunucu: ${_w(d.hata||"ulaşılamadı")}`)}catch(d){c("Kaydedilemedi","hata"),l(2200),X(String(d),"err")}}let Ys=null;function Xw(i){if(!Ys||!Ys.isConnected)return;const e=i.target;if(e&&(e.tagName==="INPUT"||e.tagName==="TEXTAREA"||e.isContentEditable)||!(i.ctrlKey||i.metaKey)||i.altKey)return;const t=i.key.toLowerCase();t==="z"&&!i.shiftKey?(i.preventDefault(),n_(Ys,Wt)):(t==="z"&&i.shiftKey||t==="y")&&(i.preventDefault(),i_(Ys,Wt))}window.addEventListener("keydown",Xw);function Yw(){Qi.home=GM,Qi.instances=rE,Qi.explore=vE,Qi.news=TE,Qi.settings=Xs,Qi.skins=Ec,Qi.kozmetik=yw}let dr=null;const us=i=>i.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function Zw(){dr||(dr=document.createElement("div"),dr.className="drop-veil",dr.innerHTML=`
    <div class="drop-box">
      <div class="drop-glyph">⇣</div>
      <b>Bırak ve yükle</b>
      <span>Mod (.jar) · Mod paketi (.mrpack / CurseForge .zip) · Dünya · Doku &amp; Shader (.zip) · Emote (.emotecraft)</span>
    </div>`,document.body.appendChild(dr))}function vm(){dr?.remove(),dr=null}async function Jw(i){const e=i.split(/[\\/]/).pop()||i;let t="";try{t=await te("cmd_route_dropped",{path:i})}catch(n){X(`Dosya tanınamadı: ${n}`,"err");return}try{if(t==="modpack"){const n=tn(`
        <h3 style="margin-bottom:6px">Mod paketi kurulacak</h3>
        <p><b>${us(e)}</b> yeni bir kurulum olarak kurulsun mu?<br />
        <span style="font-size:11px; color:var(--text-faint)">İçindeki sürüm listesi otomatik indirilir.</span></p>
        <div style="display:flex; gap:8px; margin-top:14px; justify-content:flex-end">
          <button class="btn ghost sm" id="dp-no">İptal</button>
          <button class="btn primary sm" id="dp-go">Paketi Kur</button>
        </div>`);let a=!1;if(n.root.querySelector("#dp-no")?.addEventListener("click",()=>n.close()),n.root.querySelector("#dp-go")?.addEventListener("click",()=>{a=!0,n.close()}),await new Promise(s=>{const o=setInterval(()=>{document.body.contains(n.root)||(clearInterval(o),s())},150)}),!a){X("Kurulum iptal edildi");return}X("Paket indiriliyor — süreç panelinden takip edebilirsin"),Do("Sürüklenen paket kurulumu");let r="Paket";try{const s=await te("cmd_import_pack_file",{path:i,name:null});r=s.name||"Paket",await ln(),Es(),je("instances"),Bf(s)}catch(s){ws(String(s))}X(`${r} kuruldu ✓`)}else if(t==="jar"){const n=await Ju(`Mod eklenecek kurulum: <b>${us(e)}</b>`);if(!n)return;await te("cmd_add_content_path",{instanceId:n.id,kind:"mods",path:i});const a=n.mod_loader&&n.mod_loader!=="fabric"?" — DİKKAT: bu kurulum Fabric olmadığı için çalışmayabilir":"";X(`Mod eklendi: ${e}${a}`,a?"err":"ok")}else if(t==="world"){const n=await Ju(`Dünya yüklenecek kurulum: <b>${us(e)}</b>`);if(!n)return;await te("cmd_add_content_path",{instanceId:n.id,kind:"saves",path:i}),X(`Dünya yüklendi: ${e}`)}else if(t==="emote"){const n=await te("cmd_import_emote_dosyasi",{path:i});X(`Emote vitrine eklendi: ${n.adi}`)}else t==="zip"?await jw(i,e):X(`${e} tanınmadı — .jar, .mrpack, dünya zip'i, doku/shader zip'i veya dünya klasörü bırak`,"err")}catch(n){X(`Kurulamadı: ${n}`,"err")}}async function jw(i,e){const t=tn(`
    <h3 style="margin-bottom:6px">Bu zip nedir?</h3>
    <p><b>${us(e)}</b> ne tür bir içerik?</p>
    <div style="display:flex; flex-direction:column; gap:8px; margin-top:14px">
      <button class="btn ghost" data-k="resourcepacks">Doku Paketi</button>
      <button class="btn ghost" data-k="shaderpacks">Shader</button>
      <button class="btn ghost" data-k="saves_zip">Dünya (zip açılır → dünyalar)</button>
      <button class="btn ghost" id="dp-cancel">İptal</button>
    </div>`);let n="";if(t.root.querySelectorAll("[data-k]").forEach(r=>r.addEventListener("click",()=>{n=r.dataset.k||"",t.close()})),t.root.querySelector("#dp-cancel")?.addEventListener("click",()=>t.close()),await new Promise(r=>{const s=setInterval(()=>{document.body.contains(t.root)||(clearInterval(s),r())},150)}),!n)return;const a=await Ju(n==="saves_zip"?"Dünya yüklenecek kurulum":"İçerik eklenecek kurulum");a&&(await te("cmd_add_content_path",{instanceId:a.id,kind:n,path:i}),X(`Eklendi: ${e}`))}function Ju(i){return new Promise(e=>{const t=le.instances||[];if(!t.length){X("Önce Paketler sekmesinde bir kurulum oluştur","err"),e(null);return}if(t.length===1){e(t[0]);return}const n=tn(`
      <h3 style="margin-bottom:6px">${i}</h3>
      <p style="font-size:11px; color:var(--text-faint)">Kurulum seç</p>
      <div class="inst-pick">
        ${t.map(r=>`
          <button class="btn ghost" data-id="${r.id}">
            <span style="font-size:18px">${r.icon||"📦"}</span>
            <span style="flex:1; text-align:left; overflow:hidden; text-overflow:ellipsis; white-space:nowrap">${us(String(r.name))}</span>
            <span style="font-size:11px; color:var(--text-faint)">${us(String(r.mc_version||""))}</span>
          </button>`).join("")}
      </div>`);n.root.querySelectorAll("[data-id]").forEach(r=>{r.addEventListener("click",()=>{const s=t.find(o=>o.id===r.dataset.id)||null;n.close(),e(s)})});const a=setInterval(()=>{document.body.contains(n.root)||(clearInterval(a),e(null))},150)})}function Qw(){try{const i=window.__TAURI__?.window?.getCurrentWindow?.();if(!i?.onDragDropEvent)return;i.onDragDropEvent(async e=>{const t=e?.payload??e??{},n=t.type;if(n==="enter"||n==="over")Zw();else if(n==="drop"){vm();const a=t.paths||[];for(const r of a)await Jw(r)}else vm()})}catch{}}const Il=[{page:"home",sel:null,title:"YIKIMLient'e hoş geldin",text:"60 saniyede öğrenelim — İleri'ye tıkladıkça her sekme animasyonla gösterilecek."},{page:"home",sel:'.rail-item[data-page="home"]',title:"Ana Sayfa",text:"Kurulumunu seç, Oyna'ya bas — saniyeler içinde oyundasın. Sınırsız FPS ve Agresif ayarlar otomatik hazırdır."},{page:"instances",sel:'.rail-item[data-page="instances"]',title:"Paketler",text:"Kurulumlarını yönettiğin yer: modlar, dünyalar, doku & shader'lar. Bonus: dosyayı bu ekrana sürükleyip bırak — mod, paket, dünya, hepsi otomatik kurulur."},{page:"explore",sel:'.rail-item[data-page="explore"]',title:"Keşfet",text:"Modrinth & CurseForge içinde arama: mod, mod paketi, doku, shader, dünya — tek tıkla seçili kuruluma iner."},{page:"news",sel:'.rail-item[data-page="news"]',title:"Haberler",text:"YIKIMLient duyuruları ve Minecraft haberleri burada."},{page:"settings",sel:'.rail-item[data-page="settings"]',title:"Ayarlar",text:"Görsel dünyalar (5 tema!), Discord Rich Presence, Java profilleri (Agresif FPS dahil), RAM — hepsi burada."},{page:"kozmetik",sel:'.rail-item[data-page="kozmetik"]',title:'Kozmetikler — "Yol Silindiri" kuralı',text:`Hesabını Discord'da doğruladıktan sonra kendi pelerinini ve elıtranı burada çizebilirsin. Çizme izni, sunucudaki YIKIM etiketi/"Yol Silindiri" rolüne bağlıdır: rolü bırakırsan izin anında kapanır, tasarımın bilgisayarında kalır ve görünümün varsayılan YIKIM pelerinine döner; etiketi yeniden alınca aynı tasarım geri gelir.`},{page:"home",sel:null,title:"Hazırsın!",text:"İyi oyunlar — YIKIM hep HIZ. Bu rehber artık gösterilmeyecek."}];let zd=null;function eT(i,e){const t=window.innerWidth,n=window.innerHeight,a=e.offsetWidth,r=e.offsetHeight,s=c=>Math.max(12,Math.min(c,t-a-12)),o=c=>Math.max(14,Math.min(c,n-r-14));if(i){const c=i.right+16,l=i.left-16-a;let d;c+a<=t-12?d=c:l>=12?d=l:d=(t-a)/2;let f=i.top+i.height/2-r/2;f<14&&(f=i.bottom+16),e.style.left=`${s(d)}px`,e.style.top=`${o(f)}px`,e.style.transform="none"}else e.style.left=`${Math.max(12,(t-a)/2)}px`,e.style.top=`${o((n-r)/2)}px`,e.style.transform="none"}function _m(i,e){const t=Il[e],n=i.querySelector(".spot"),a=i.querySelector(".tc");je(t.page);const r=a.querySelector(".tc-step");r.innerHTML=Il.map((c,l)=>`<i class="${l<=e?"done":""}"></i>`).join(""),a.querySelector("h3").textContent=t.title,a.querySelector("p").textContent=t.text;const s=a.querySelector(".tc-next");s.textContent=e===Il.length-1?"Tamam ✓":"İleri →";let o=null;if(t.sel){const c=document.querySelector(t.sel);c&&(o=c.getBoundingClientRect())}o?(n.style.opacity="1",n.style.left=`${o.left-6}px`,n.style.top=`${o.top-6}px`,n.style.width=`${o.width+6*2}px`,n.style.height=`${o.height+6*2}px`):n.style.opacity="0",eT(o,a),la.fromTo(a,{y:14,autoAlpha:0},{y:0,autoAlpha:1,duration:.38,ease:"power3.out",clearProps:"transform"})}function tT(){if(zd||le.config?.guided_tour_done)return;const i=document.createElement("div");i.className="yikim-tour",i.innerHTML=`
    <div class="spot"></div>
    <div class="tc">
      <span class="tc-step"></span>
      <h3></h3>
      <p></p>
      <div class="tc-actions">
        <button class="btn ghost sm tc-skip">Atla</button>
        <button class="btn primary sm tc-next">İleri →</button>
      </div>
    </div>`,document.body.appendChild(i),zd=i;let e=0;const t=async()=>{i.remove(),zd=null,document.removeEventListener("keydown",a),je("home");try{le.config={...le.config,guided_tour_done:!0},await te("cmd_save_settings",{config:le.config}),await ln()}catch{}},n=()=>{if(e+=1,e>=Il.length){t();return}_m(i,e)},a=r=>{r.key==="Enter"||r.key==="ArrowRight"?(r.preventDefault(),n()):r.key==="Escape"&&(r.preventDefault(),t())};document.addEventListener("keydown",a),i.querySelector(".tc-skip")?.addEventListener("click",()=>void t()),i.querySelector(".tc-next")?.addEventListener("click",n),_m(i,e)}let as=null,zl=null;function lr(){zl!==null&&(clearInterval(zl),zl=null)}function ym(i){return i.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}async function ju(){try{le.config={...le.config,onboarding_done:!0},await te("cmd_save_settings",{config:le.config}),await ln()}catch{}}function Ud(i){lr(),as?.remove(),as=null,ju(),je("home")}function nT(){if(as)return!0;if(le.config?.onboarding_done)return!1;if(!(le.accounts.length===0&&le.instances.length===0))return ju(),!1;const e=document.createElement("div");e.className="yikim-ob",e.innerHTML='<div class="ob-card"></div>',document.body.appendChild(e),as=e;const t=e.querySelector(".ob-card"),n=u=>`<div class="ob-dots">${[0,1,2,3,4].map(h=>`<i class="${h<=u?"done":""}"></i>`).join("")}</div>`,a=u=>`
    <div class="ob-actions">
      ${u.back?'<button class="btn ghost sm" id="ob-back">← Geri</button>':""}
      <span class="spacer"></span>
      ${u.skip?`<button class="btn ghost sm" id="${u.skipId}">${u.skip}</button>`:""}
      ${u.next?`<button class="btn primary sm" id="${u.nextId}">${u.next}</button>`:""}
    </div>`;function r(){t.innerHTML=`
      <img class="ob-logo" alt="" draggable="false" src="/logo.png" />
      <h2>YIKIMLient'e hoş geldin</h2>
      <p class="ob-sub">Ultra-hızlı Minecraft launcher — 60 saniyede oyundasın.<br />Üç kısa soru, hepsi bu.</p>
      ${n(0)}
      <div class="ob-step-label">1 / 5 — Hoş geldin</div>
      <p style="text-align:center; color:var(--text-dim); font-size:12.5px; line-height:1.6">
        Bu sihirbaz hesabını bağlar ve ilk oyun paketini kurar.<br />Her istediğin zaman Ayarlar'dan değiştirebilirsin.
      </p>
      ${a({next:"Başla →",nextId:"ob-next",skip:"Geç beni",skipId:"ob-skip"})}
    `,t.querySelector("#ob-skip")?.addEventListener("click",()=>Ud()),t.querySelector("#ob-next")?.addEventListener("click",s)}function s(){lr(),t.innerHTML=`
      ${n(1)}
      <div class="ob-step-label">2 / 5 — Hesap</div>
      <h2 style="font-size:16px">Hesabını bağla</h2>
      <p class="ob-sub" style="margin-bottom:12px">Microsoft hesabıyla premium giriş ya da doğrudan çevrimdışı oyna.</p>
      <button class="btn primary lg" id="ob-ms" style="width:100%">Microsoft ile Giriş</button>
      <div id="ob-ms-durum" class="ob-durum" style="display:none"></div>
      <div class="or-divider"><span>veya çevrimdışı</span></div>
      <div class="ob-offline">
        <input class="input" id="ob-off-ad" placeholder="OyuncuAdı" maxlength="16" autocomplete="off" spellcheck="false" />
        <button class="btn" id="ob-off-go">Giriş</button>
      </div>
      <div class="ob-opt" id="ob-off-uyari"></div>
      <div class="ob-ok" id="ob-acc-ok" style="display:none"></div>
      ${a({back:!0,next:"İleri →",nextId:"ob-next",skip:"Sonra",skipId:"ob-skip"})}
    `,t.querySelector("#ob-back")?.addEventListener("click",()=>{lr(),r()}),t.querySelector("#ob-skip")?.addEventListener("click",()=>Ud());const u=t.querySelector("#ob-acc-ok"),h=t.querySelector("#ob-next"),g=t.querySelector("#ob-ms-durum"),m=t.querySelector("#ob-off-uyari"),p=t.querySelector("#ob-ms"),v=t.querySelector("#ob-off-go"),y=t.querySelector("#ob-off-ad"),T=S=>{u.style.display="flex",u.textContent=`✓ Hesap hazır: ${S}`,h.disabled=!1,lr()};le.accounts.length?T(le.accounts[0]?.name??""):h.disabled=!0,p.addEventListener("click",async()=>{if(!p.disabled){p.disabled=!0,g.style.display="block",g.innerHTML='<span class="spinner"></span> Microsoft oturum penceresi açılıyor…';try{const S=await te("cmd_ms_login_begin");await ln(),g.textContent="",g.style.display="none",T(S?.name??le.accounts[0]?.name??"")}catch(S){g.textContent=String(S),p.disabled=!1}}});const b=async()=>{if(v.disabled)return;const S=y.value.trim();if(S.length<3){m.textContent="İsim en az 3 karakter olmalı.",y.focus();return}m.textContent="",v.disabled=!0,v.textContent="…";try{await te("cmd_add_offline_account",{name:S}),await ln(),T(S),v.textContent="✓"}catch(k){m.textContent=String(k),v.disabled=!1,v.textContent="Giriş"}};v.addEventListener("click",()=>void b()),y.addEventListener("keydown",S=>{S.key==="Enter"&&(S.preventDefault(),b())}),zl=setInterval(()=>{le.accounts.length&&T(le.accounts[0]?.name??"")},600),h.addEventListener("click",()=>{lr(),o()})}function o(){lr(),ur(),t.innerHTML=`
      ${n(2)}
      <div class="ob-step-label">3 / 5 — Doğrulama</div>
      <h2 style="font-size:16px">Hesabını doğrula</h2>
      <p class="ob-sub" style="margin-bottom:10px">
        Discord ile bağla, şifre oluştur. Doğrulanmayan hesap da oynar;
        yalnız kozmetik/skin değiştiremez (adının başında ✕ görünür).
      </p>
      <div id="ob-gv"></div>
      ${a({back:!0,next:"İleri →",nextId:"ob-next",skip:"Şimdi değil",skipId:"ob-skip"})}
    `;const u=t.querySelector("#ob-gv");u&&fr(u),t.querySelector("#ob-back")?.addEventListener("click",()=>{ur(),s()}),t.querySelector("#ob-skip")?.addEventListener("click",()=>{ur(),c()}),t.querySelector("#ob-next")?.addEventListener("click",()=>{ur(),c()})}async function c(){let u=[];try{u=(await te("cmd_list_versions")).all?.slice(0,80)??[]}catch{}t.innerHTML=`
      ${n(3)}
      <div class="ob-step-label">4 / 5 — İlk paket</div>
      <h2 style="font-size:16px">İlk oyun dünyasını oluştur</h2>
      <p class="ob-sub" style="margin-bottom:8px">Fabric + YIKIM çekirdeği otomatik; standart FPS modları dahil.</p>
      <label class="ob-lab">Paket adı</label>
      <input class="input" id="ob-name" value="Yeni Kurulum" maxlength="40" />
      <label class="ob-lab">Minecraft sürümü</label>
      <select class="input" id="ob-version">
        ${u.map(g=>`<option value="${ym(g)}">${ym(g)}</option>`).join("")||'<option value="1.21.11">1.21.11</option>'}
      </select>
      <div class="ob-ok" id="ob-inst-ok" style="display:none"></div>
      ${a({back:!0,next:"Kurulum Oluştur",nextId:"ob-create"})}
      <button class="btn ghost sm" id="ob-explore" style="width:100%; margin-top:10px">
        Ya da hazır mod paketi indir (Keşfet)
      </button>
    `,t.querySelector("#ob-back")?.addEventListener("click",o);let h=null;t.querySelector("#ob-create")?.addEventListener("click",async g=>{const m=g.currentTarget;m.disabled=!0,m.innerHTML='<span class="spinner"></span> Oluşturuluyor…';const p=t.querySelector("#ob-name").value.trim()||"Yeni Kurulum",v=t.querySelector("#ob-version").value;try{h=await te("cmd_create_instance",{instance:{name:p,mc_version:v,mod_loader:"fabric",ram_mb:le.config?.default_ram_mb||4096,java_preset_id:le.config?.default_java_preset||"balanced",standard_mods:!0}});const y=t.querySelector("#ob-inst-ok");y.style.display="flex",y.textContent=`✓ Kurulum hazır: ${h.name}`,m.textContent="✓ Oluşturuldu",await ln(),setTimeout(()=>l(),700)}catch(y){f(`Kurulum oluşturulamadı: ${y}`),m.disabled=!1,m.textContent="Kurulum Oluştur"}}),t.querySelector("#ob-explore")?.addEventListener("click",()=>{d()})}function l(){t.innerHTML=`
      <img class="ob-logo" alt="" draggable="false" src="/logo.png" />
      <h2>Her şey hazır! 🎉</h2>
      <p class="ob-sub">Hesabın bağlandı, ilk paketin kuruldu.</p>
      ${n(4)}
      <div class="ob-step-label">5 / 5 — Hazır</div>
      <p style="text-align:center; color:var(--text-dim); font-size:12.5px; line-height:1.7">
        Ana Sayfa'dan <b>Oyna</b>'ya bas — saniyeler içinde oyundasın.<br />
        Modları Paketler → modlar sekmesinden yönet; dosyayı<br />ekrana sürükleyip bırak, otomatik kurulur.
      </p>
      ${a({next:"Oyna'ya Git →",nextId:"ob-done"})}
    `,t.querySelector("#ob-done")?.addEventListener("click",()=>Ud())}return r(),!0;function d(){lr(),as?.remove(),as=null,ju(),je("explore","kind:modpack")}function f(u){ct(()=>Promise.resolve().then(()=>St),void 0).then(h=>h.toast(u,"err"))}}const Er=Math.PI*2;function oc(){return getComputedStyle(document.documentElement).getPropertyValue("--accent").trim()||"#ff7a18"}function iT(i,e){const t=i.match(/^#?([0-9a-f]{6})$/i);if(!t)return i;const n=parseInt(t[1],16);return`rgba(${Math.round((n>>16&255)*e)},${Math.round((n>>8&255)*e)},${Math.round((n&255)*e)},1)`}function Ac(i,e){i.fillStyle=e.hue,i.beginPath(),i.arc(e.x,e.y,e.r,0,Er),i.fill()}function xm(i,e){const t=e?iT(oc(),.88):oc(),n=a=>({x:Math.random()*a[0],y:a[1]+10,vx:(Math.random()-.5)*12,vy:-(28+Math.random()*44)*(e?.75:1),r:e?2.6:1.2+Math.random()*1.6,a:.95,life:0,max:6+Math.random()*5,hue:t,seed:Math.random()*Er});return{base:e?24:30,spawn:n,step:(a,r,s)=>{a.x+=(a.vx+Math.sin(a.seed+a.life*2.1)*9)*r*(1+i*r),a.y+=a.vy*r,a.a=Math.max(0,1-a.life/a.max*1.05),(a.y<-12||a.a<=0)&&Object.assign(a,n(s))},draw:Ac}}function Nd(i){const e=t=>({x:Math.random()*t[0],y:Math.random()*t[1],vx:(Math.random()-.5)*7,vy:(Math.random()-.5)*7,r:.9+Math.random()*1.5,a:.3,life:0,max:9+Math.random()*8,hue:i,seed:Math.random()*Er});return{base:26,spawn:e,step:(t,n,a)=>{t.x+=t.vx*n,t.y+=t.vy*n,t.x<-8&&(t.x=a[0]+8),t.x>a[0]+8&&(t.x=-8),t.y<-8&&(t.y=a[1]+8),t.y>a[1]+8&&(t.y=-8),t.a=.16+.4*Math.sin(t.life/t.max*Math.PI),t.life>t.max&&Object.assign(t,e(a))},draw:Ac}}function aT(){const i=e=>({x:Math.random()*e[0],y:-8,vx:(Math.random()-.5)*8,vy:13+Math.random()*24,r:1+Math.random()*2.6,a:.8,life:0,max:20,hue:"#ffffff",seed:Math.random()*Er});return{base:36,spawn:i,step:(e,t,n)=>{e.x+=(e.vx+Math.sin(e.seed+e.life*1.2)*11)*t,e.y+=e.vy*t,e.y>n[1]+10&&Object.assign(e,i(n))},draw:Ac}}function rT(){const i=oc(),e=t=>({x:Math.random()*t[0],y:t[1]+10,vx:(Math.random()-.5)*9,vy:-(18+Math.random()*26),r:1.4+Math.random()*2.6,a:.5,life:0,max:14,hue:i,seed:Math.random()*Er});return{base:16,spawn:e,step:(t,n,a)=>{t.x+=(t.vx+Math.sin(t.seed+t.life*2.2)*7)*n,t.y+=t.vy*n,t.vy-=2.5*n,t.y<-14&&Object.assign(t,e(a))},draw:(t,n)=>{t.strokeStyle=n.hue,t.lineWidth=1,t.beginPath(),t.arc(n.x,n.y,n.r*1.7,0,Er),t.stroke()}}}function sT(){const i=oc(),e=t=>({x:Math.random()*t[0],y:Math.random()*-t[1],vx:0,vy:170+Math.random()*260,r:1,a:.4+Math.random()*.4,life:0,max:30,hue:i,seed:0});return{base:20,spawn:e,step:(t,n,a)=>{t.y+=t.vy*n,t.y>a[1]+40&&Object.assign(t,e(a))},draw:(t,n)=>{t.strokeStyle=n.hue,t.lineWidth=n.a*1.3,t.beginPath(),t.moveTo(n.x,n.y),t.lineTo(n.x,n.y-14-n.a*16),t.stroke()}}}function gl(i){return{base:24,spawn:t=>({x:Math.random()*t[0],y:Math.random()*t[1],vx:0,vy:0,r:.8+Math.random()*1.3,a:0,life:Math.random()*4,max:2.6+Math.random()*3.4,hue:i,seed:Math.random()*Er}),step:(t,n,a)=>{t.a=Math.max(0,Math.sin(t.life/t.max*Math.PI))*.9,t.life>t.max&&(t.life=0)},draw:Ac}}function oT(i){switch(i){case"pano":return xm(.5,!1);case"sahne":return gl("rgba(255,171,77,0.75)");case"sokum":return xm(.9,!0);case"afis":return Nd("rgba(63,50,38,0.5)");case"standart":return gl("rgba(147,168,255,0.5)");case"sira":return gl("rgba(163,230,53,0.85)");case"rihtim":return rT();case"oda":return Nd("rgba(224,48,30,0.6)");case"kumas":return Nd("rgba(138,122,92,0.5)");case"perde":return gl("rgba(212,175,55,0.8)");case"buz":return aT();case"skala":return sT();default:return null}}let qn=null,Pi=null,Aa=null,jr=[],xn=0,so=0,l_=1,c_=33,Rc=!1;function Yf(){return Math.min(window.devicePixelRatio||1,1.5)}function Od(){xn&&cancelAnimationFrame(xn),xn=0,Aa=null,jr=[],qn&&(qn.remove(),qn=null,Pi=null)}function lc(i){if(xn=0,!Pi||!qn||!Aa||Rc||document.hidden)return;if(i-so<c_){xn=requestAnimationFrame(lc);return}const e=Math.min((i-so)/1e3,.06);so=i,xn=requestAnimationFrame(lc);const t=Yf();Pi.setTransform(t,0,0,t,0,0),Pi.clearRect(0,0,window.innerWidth,window.innerHeight);const n=[window.innerWidth,window.innerHeight],a=Math.max(1,Math.round(Aa.base*l_));for(;jr.length<a;){const r=Aa.spawn(n);r.life=Math.random()*r.max,jr.push(r)}for(;jr.length>a;)jr.pop();for(const r of jr)r.life+=e,Aa.step(r,e,n),Pi.globalAlpha=r.a,Aa.draw(Pi,r);Pi.globalAlpha=1}function d_(){Aa&&Pi&&!xn&&!document.hidden&&!Rc&&(so=performance.now(),xn=requestAnimationFrame(lc))}document.addEventListener("visibilitychange",()=>{document.hidden?(xn&&cancelAnimationFrame(xn),xn=0):d_()});window.addEventListener("blur",()=>{Rc=!0,xn&&cancelAnimationFrame(xn),xn=0});window.addEventListener("focus",()=>{Rc=!1,d_()});window.addEventListener("resize",()=>{if(!qn||!Pi)return;const i=Yf();qn.width=Math.round(innerWidth*i),qn.height=Math.round(innerHeight*i)});function lT(){const i=String(le.config?.fx_particles??"mid"),e=document.documentElement.getAttribute("data-world")||"pano",t=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(i==="none"||t){Od();return}const n=oT(e);if(!n){Od();return}l_={low:.45,mid:.9,high:1.6}[i]??1,c_=1e3/({low:25,mid:30,high:40}[i]??30),Od(),Aa=n;const s=Yf();qn=document.createElement("canvas"),qn.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:3",qn.width=Math.round(innerWidth*s),qn.height=Math.round(innerHeight*s),document.body.appendChild(qn),Pi=qn.getContext("2d"),so=performance.now(),xn=requestAnimationFrame(lc)}function cT(){return getComputedStyle(document.documentElement).getPropertyValue("--accent").trim()||"#ff7a18"}function dT(i){return`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M4 2 L18 13.5 L11.2 14.2 L15.6 21.2 L12.8 22.8 L8.6 15.8 L4 19.4 Z" fill="${i}" stroke="#ffffff" stroke-opacity="0.72" stroke-width="1.6" stroke-linejoin="round"/></svg>`}function uT(i){return`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><circle cx="12" cy="12" r="7.2" fill="none" stroke="${i}" stroke-width="2"/><circle cx="12" cy="12" r="1.7" fill="${i}"/><path d="M12 1.6 V5.2 M12 18.8 V22.4 M1.6 12 H5.2 M18.8 12 H22.4" stroke="${i}" stroke-width="2"/></svg>`}function fT(i){return`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><circle cx="8" cy="8" r="3.2" fill="${i}" stroke="#ffffff" stroke-opacity="0.8" stroke-width="1.2"/></svg>`}const hT={yikim:{build:dT,spot:"3 2"},hedef:{build:uT,spot:"12 12"},nokta:{build:fT,spot:"8 8"}};function pT(){const i=String(le.config?.cursor_style||"standart"),e=document.documentElement,t=hT[i];if(!t){e.removeAttribute("data-custom-cursor"),e.style.removeProperty("--yikim-cursor");return}const n=t.build(cT());e.style.setProperty("--yikim-cursor",`url("data:image/svg+xml,${encodeURIComponent(n)}") ${t.spot}, auto`),e.setAttribute("data-custom-cursor","1")}const et=`xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
  stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"`,mT=`<svg ${et}><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M10 21v-6h4v6"/></svg>`,gT=`<svg ${et}><rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/></svg>`,vT=`<svg ${et}><circle cx="12" cy="12" r="9"/><path d="m15.2 8.8-1.9 4.5-4.5 1.9 1.9-4.5z"/></svg>`,_T=`<svg ${et}><path d="M4 6.5A1.5 1.5 0 0 1 5.5 5h13A1.5 1.5 0 0 1 20 6.5v11a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5z"/><path d="M8 9h5v5H8z"/><path d="M16 9h1M16 12h1M16 15h1M8 16.5h5"/></svg>`,yT=`<svg ${et}><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>`,xT=`<svg ${et}><path d="M12 5v14M5 12h14"/></svg>`,bT=`<svg ${et}><circle cx="11" cy="11" r="7"/><path d="m20.5 20.5-4.2-4.2"/></svg>`,ST='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8.5 5.9v12.2a.8.8 0 0 0 1.22.68l9.87-6.1a.8.8 0 0 0 0-1.36L9.72 5.22A.8.8 0 0 0 8.5 5.9Z"/></svg>',kT=`<svg ${et}><rect x="3.5" y="4.5" width="17" height="15" rx="2"/><circle cx="9" cy="10" r="1.6"/><path d="m3.5 16 4.4-4.4a1.4 1.4 0 0 1 2 0l4.6 4.4"/><path d="m13.6 15 2.3-2.3a1.4 1.4 0 0 1 2 0l2.6 2.5"/></svg>`,MT=`<svg ${et}><path d="M3.5 7.5v10a1.5 1.5 0 0 0 1.5 1.5h13.6a1.5 1.5 0 0 0 1.4-1l1.6-4.5a1 1 0 0 0-.94-1.35H7.2a2 2 0 0 0-1.9 1.37L3.5 17.5"/><path d="M3.5 7.5v-2A1.5 1.5 0 0 1 5 4h4l1.6 2H19a1.5 1.5 0 0 1 1.5 1.5v2"/></svg>`,ET=`<svg ${et}><path d="M4 7h16M9.5 4h5M6.5 7l.8 12a1.5 1.5 0 0 0 1.5 1.4h6.4a1.5 1.5 0 0 0 1.5-1.4l.8-12"/><path d="M10 11v6M14 11v6"/></svg>`,wT=`<svg ${et}><path d="m7 20.5-3.8-3.8a2 2 0 0 1 0-2.8l9.4-9.4a2 2 0 0 1 2.8 0l4.8 4.8a2 2 0 0 1 0 2.8l-8.4 8.4z"/><path d="M21.5 20.5H8.5"/><path d="m5.5 11.5 8.5 8.5"/></svg>`,TT=`<svg ${et}><rect x="9" y="9" width="11.5" height="11.5" rx="2"/><path d="M5.5 15H4.5A1.5 1.5 0 0 1 3 13.5v-9A1.5 1.5 0 0 1 4.5 3h9A1.5 1.5 0 0 1 15 4.5v1"/></svg>`,AT=`<svg ${et}><path d="M19 12H5M11 18l-6-6 6-6"/></svg>`,RT=`<svg ${et}><path d="m4.5 12.5 5 5 10-11"/></svg>`,LT=`<svg ${et}><circle cx="12" cy="8" r="4"/><path d="M4.5 20.5c.8-3.7 3.9-6 7.5-6s6.7 2.3 7.5 6"/></svg>`,CT=`<svg ${et}><path d="M10 4.5A1.5 1.5 0 0 1 11.5 3h1A1.5 1.5 0 0 1 14 4.5V6h4.5A1.5 1.5 0 0 1 20 7.5V11h-1.5a1.5 1.5 0 0 0 0 3H20v3.5a1.5 1.5 0 0 1-1.5 1.5H14v-1.5a1.5 1.5 0 0 0-3 0V20H6.5A1.5 1.5 0 0 1 5 18.5V15H3.5a1.5 1.5 0 0 1 0-3H5V7.5A1.5 1.5 0 0 1 6.5 6H10z"/></svg>`,PT=`<svg ${et}><path d="m12 3 8.5 4.5v9L12 21l-8.5-4.5v-9z"/><path d="M3.5 7.5 12 12l8.5-4.5M12 12v9"/></svg>`,DT=`<svg ${et}><rect x="6" y="6" width="12" height="12" rx="1.5"/><rect x="9.5" y="9.5" width="5" height="5" rx="1"/><path d="M9 2.5V6M15 2.5V6M9 18v3.5M15 18v3.5M2.5 9H6M2.5 15H6M18 9h3.5M18 15h3.5"/></svg>`,IT=`<svg ${et}><path d="M15 12h-5M15 8h-5M19 17V5a2 2 0 0 0-2-2H4"/><path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"/></svg>`,zT=`<svg ${et}><rect x="3" y="4.5" width="18" height="15" rx="2"/><path d="m7 9.5 3 3-3 3M12.5 15.5H17"/></svg>`,UT=`<svg ${et}><path d="M5 20V10M12 20V4M19 20v-7"/></svg>`,NT=`<svg ${et}><path d="M12 4v11M7.5 11.5 12 16l4.5-4.5"/><path d="M4 20h16"/></svg>`,OT=`<svg ${et}><path d="M10 2v2M14 2v2M6 2v2"/><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"/></svg>`,FT=`<svg ${et}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>`,BT=`<svg ${et}><path d="M10 4.5 11.5 9l4.5 1.5L11.5 12 10 16.5 8.5 12 4 10.5 8.5 9z"/><path d="m18 15.5.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z"/></svg>`,HT=`<svg ${et}><path d="M13.5 3H6.5A1.5 1.5 0 0 0 5 4.5v15A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5V8.5z"/><path d="M13.5 3v5.5H19"/></svg>`,$T=`<svg ${et}><circle cx="12" cy="12" r="9"/><path d="M12 16v-4.5"/><circle cx="12" cy="8" r="1"/></svg>`,GT=`<svg ${et}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.2 2"/></svg>`,VT=`<svg ${et}><rect x="6.5" y="6.5" width="11" height="11" rx="1.5"/></svg>`,qT=`<svg ${et}><path d="M8.5 3 5 4.8 3 10l3.2 1.4.8-1.7V21h10V9.7l.8 1.7L21 10l-2-5.2L15.5 3a3.5 3.5 0 0 1-7 0z"/></svg>`,WT=`<svg ${et}><path d="m14.5 4.5 5 5L9 20H4v-5z"/><path d="m12.5 6.5 5 5"/></svg>`,KT=`<svg ${et}><path d="M4.5 11.5 11 5l7 7-6.5 6.5z"/><path d="M7 9 5 7"/><path d="M19 14.5s2 2.2 2 3.5a2 2 0 1 1-4 0c0-1.3 2-3.5 2-3.5z"/></svg>`,XT=`<svg ${et}><path d="m14 6 4 4"/><path d="M11.5 8.5 4 16v4h4l7.5-7.5"/><path d="m17 3 4 4-2.5 2.5-4-4z"/></svg>`,YT=`<svg ${et}><path d="M9 14 4 9l5-5"/><path d="M4 9h9a6 6 0 0 1 0 12h-3"/></svg>`,ZT=`<svg ${et}><path d="m15 14 5-5-5-5"/><path d="M20 9h-9a6 6 0 0 0 0 12h3"/></svg>`,JT=`<svg ${et}><rect x="4.5" y="10.5" width="15" height="10" rx="2"/><path d="M8 10.5V7a4 4 0 0 1 8 0v3.5"/></svg>`,jT=`<svg ${et}><circle cx="6" cy="12" r="2.5"/><circle cx="17" cy="6" r="2.5"/><circle cx="17" cy="18" r="2.5"/><path d="M8.2 10.8 14.8 7.2M8.2 13.2l6.6 3.6"/></svg>`,cc={home:mT,grid:gT,compass:vT,news:_T,gear:yT,plus:xT,search:bT,play:ST,image:kT,folder:MT,trash:ET,eraser:wT,copy:TT,back:AT,check:RT,user:LT,puzzle:CT,box:PT,cpu:DT,args:IT,term:zT,chart:UT,dl:NT,mug:OT,globe:FT,sparkle:BT,file:HT,info:$T,clock:GT,stop:VT,shirt:qT,brush:WT,bucket:KT,picker:XT,undo:YT,redo:ZT,lock:JT,share:jT};function V(i,e=""){const t=cc[i]||cc.info;return e?`<span class="ic ${e}">${t}</span>`:`<span class="ic">${t}</span>`}const vl='xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1"',_l=i=>`<g transform="translate(7 7) scale(0.66667)">${i}</g>`,Zr={min:`<svg ${vl}>${_l('<path d="M0 5.125h10"/>')}</svg>`,max:`<svg ${vl}>${_l('<rect x="0.5" y="0.5" width="9" height="9"/>')}</svg>`,restore:`<svg ${vl}>${_l('<rect x="0.5" y="2.5" width="7" height="7"/><path d="M2.5 2.5V0.5h7v7h-2"/>')}</svg>`,close:`<svg ${vl}>${_l('<path d="m0.43 0.43 9.14 9.14M9.57 0.43 0.43 9.57"/>')}</svg>`,bell:'<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2.5a5 5 0 0 0-5 5v3.2L4 13.2h12l-1-2.5V7.5a5 5 0 0 0-5-5Z"/><path d="M7.6 15.4a2.6 2.6 0 0 0 1.4 1.4 2.6 2.6 0 0 0 3.2-1.4"/></svg>'},br=window.__TAURI__,QT=br.core,eA=br.event,te=(i,e={})=>QT.invoke(i,e),Mt=i=>window.__TAURI_INTERNALS__.convertFileSrc(i),gn=(i,e)=>eA.listen(i,e);window.__iconFallback=(i,e,t)=>{const n=document.createElement("span");n.className=e,n.innerHTML=cc[t]||cc.info,i.replaceWith(n)};const qi=i=>te("plugin:opener|open_url",{url:i}),u_=i=>te("plugin:opener|open_path",{path:i}),le={config:null,accounts:[],instances:[],featured_versions:[],curseforge:!1,sys:null};async function ln(i=!1){const e=await te("cmd_get_state");le.config=e.config,le.accounts=e.accounts,le.instances=e.instances,le.featured_versions=e.featured_versions,le.curseforge=e.curseforge,le.sys=e.sys,Di(),await Na(!0),Fo(),i&&je(Zf)}const bm=Fo;function Di(){if(!le.config)return;const i=le.config.theme,e=document.documentElement,n=i==="custom"?"pano":({dark:"standart",neon:"pano",light:"pano",orange:"sahne",anons:"pano"}[i]??i)||"sahne",a=(le.config.tema_ozel||{})[n]||{},r=n==="sahne"?le.config.custom_accent:"",s=String(a.accent||r||"").trim();e.setAttribute("data-world",n),s&&/^#[0-9a-fA-F]{3,8}$/.test(s)?(e.setAttribute("data-world-custom","1"),e.style.setProperty("--custom-accent",s)):(e.removeAttribute("data-world-custom"),e.style.removeProperty("--custom-accent"));const o=String(a.radius||"");o==="keskin"||o==="yumusak"||o==="hap"?e.setAttribute("data-radius",o):e.removeAttribute("data-radius"),lT(),pT()}const tA=Di;function bn(){return le.accounts.find(i=>i.id===le.config?.last_selected_account)||le.accounts[0]||null}function Lc(i){return`https://mc-heads.net/avatar/${encodeURIComponent(i.name)}/64`}function f_(i){const e=encodeURIComponent(i.name);return i.kind==="microsoft"?`https://visage.surgeplay.com/head/64/${e}`:`https://crafatar.com/avatars/${i.uuid}?overlay&size=64`}function Cc(i){const e=f_(i),t=i.kind==="microsoft"?`https://crafatar.com/avatars/${i.uuid}?overlay&size=64`:"";return`onerror="if(!this.dataset.fb){this.dataset.fb=1;this.src='${e}'}${t?`else if(this.dataset.fb==1){this.dataset.fb=2;this.src='${t}'}`:""}else{this.style.visibility='hidden'}"`}function nA(){const i=document.getElementById("pill-ram");if(!i||!le.sys)return;const t=le.instances[0]?.ram_mb||le.config?.default_ram_mb||4096,n=le.sys.total_ram_mb||16384,a=Math.min(100,Math.round(t/n*100)),r=i.querySelector("#ram-pill-val"),s=`${(t/1024).toFixed(1)} GB`;r?Y0(r,s):i.innerHTML=`RAM <b id="ram-pill-val">${s}</b>&nbsp;/ ${(n/1024).toFixed(0)} GB
    <span class="ram-bar"><span style="transform:scaleX(${a/100})"></span></span>`;const o=i.querySelector(".ram-bar > span");o&&(o.style.transform=`scaleX(${a/100})`)}const yi=i=>document.querySelector(i);function hi(i){const e=document.createElement("template");return e.innerHTML=i.trim(),e.content.firstElementChild}function Oo(i){if(!i)return"0 B";const e=["B","KB","MB","GB"],t=Math.min(Math.floor(Math.log(i)/Math.log(1024)),3);return`${(i/1024**t).toFixed(t?1:0)} ${e[t]}`}function fs(i){const e=Math.floor(i/6e4);if(e<60)return`${e} dk`;const t=Math.floor(e/60),n=e%60;return t<24?n?`${t} sa ${n} dk`:`${t} sa`:`${Math.floor(t/24)} gün ${t%24} sa`}function iA(i){return i>0?`${(i/1048576).toFixed(1)} MB/s`:""}function oo(i="ok",e=""){return`<span class="lamp ${i} ${e}" aria-hidden="true"></span>`}const Je={activeId:null};function X(i,e="ok"){const t=hi(`<div class="toast ${e}" role="status">${i}</div>`);document.body.appendChild(t),setTimeout(()=>t.classList.add("show"),10),setTimeout(()=>{t.classList.remove("show"),setTimeout(()=>t.remove(),300)},3200)}const Fs=[];function tn(i){const e=hi(`<div class="modal-backdrop"><div class="modal" role="dialog" aria-modal="true">${i}</div></div>`);document.body.appendChild(e),Fs.push(e);let t=!1;const n=()=>{if(t)return;t=!0,window.removeEventListener("keydown",a);const r=Fs.indexOf(e);r>=0&&Fs.splice(r,1),e.remove()},a=r=>{r.key==="Escape"&&Fs[Fs.length-1]===e&&(r.preventDefault(),r.stopPropagation(),n())};return window.addEventListener("keydown",a),e.addEventListener("click",r=>{r.target===e&&n()}),requestAnimationFrame(()=>{e.querySelector("input, button, select, textarea, [tabindex]")?.focus()}),{root:e.firstElementChild,close:n}}const Qi={},Hn={};let Sm="home",Zf="home";function je(i,e){const t=yi("#content");t&&(Zf=i,Sm=i,Hn.param=e,document.querySelectorAll(".rail-item").forEach(n=>{n.classList.toggle("active",n.dataset.page===Sm)}),Z0(t,()=>{t.innerHTML="";const n=Qi[i];n&&n(t),Mg(t)}))}const aA=[{page:"home",icon:"home",label:"Ana Sayfa"},{page:"instances",icon:"grid",label:"Mod Paketleri"},{page:"explore",icon:"compass",label:"Keşfet"},{page:"news",icon:"news",label:"Haberler"},{page:"skins",icon:"shirt",label:"Skin Merkezi"},{page:"kozmetik",icon:"sparkle",label:"Kozmetikler"},{page:"settings",icon:"gear",label:"Ayarlar"}];function h_(){const i=yi("#app");if(!i)return;i.innerHTML=`
    <div class="titlebar">
      <div class="brand">
        <img class="logo-img" src="/logo.png" draggable="false" />
        <span><span class="brand-word">YIKIM</span><span class="brand-suffix">Lient</span></span>
      </div>
      <div class="tb-center"></div>
      <div class="tb-actions">
        <button class="tb-btn tb-pack" id="tb-pack" title="Kurulum durumu (mod paketi)" aria-label="Kurulum durumu">${Zr.bell}<span class="tb-pack-dot" id="tb-pack-dot"></span></button>
        <button class="tb-btn" id="tb-min" title="Küçült" aria-label="Küçült">${Zr.min}</button>
        <button class="tb-btn" id="tb-max" title="Ekranı Kapla" aria-label="Ekranı Kapla">${Zr.max}</button>
        <button class="tb-btn close" id="tb-close" title="Kapat" aria-label="Kapat">${Zr.close}</button>
      </div>
    </div>
    <div class="body-row">
      <nav class="rail">
        <div class="rail-logo"><img src="/logo.png" draggable="false" /></div>
        ${aA.map(a=>`
          <button class="rail-item" data-page="${a.page}">
            ${V(a.icon,"ri-icon")}
            <span class="ri-label">${a.label}</span>
          </button>`).join("")}
        <div class="rail-flex"></div>
        <button class="rail-account" id="rail-account" title="Hesap"></button>
      </nav>
      <main id="content" class="content"></main>
    </div>
  `;const t=br.window.getCurrentWindow();yi("#tb-min")?.addEventListener("click",()=>t.minimize()),yi("#tb-max")?.addEventListener("click",()=>t.toggleMaximize());const n=()=>{if(Je.activeId){t.minimize(),X("Launcher küçültüldü — oyun kapanınca hazır; görev çubuğundan geri açabilirsin");return}t.close()};yi("#tb-close")?.addEventListener("click",n),yi("#tb-pack")?.addEventListener("click",()=>{Uf()});try{t.onCloseRequested(a=>{Je.activeId&&(a?.preventDefault?.(),t.minimize(),X("Launcher küçültüldü — oyun kapanınca hazır; görev çubuğundan geri açabilirsin"))})}catch{}try{const a=yi("#tb-max"),r=o=>{a&&(a.innerHTML=o?Zr.restore:Zr.max,a.title=o?"Geri Yükle":"Ekranı Kapla",a.setAttribute("aria-label",a.title))},s=()=>{t.isMaximized().then(r).catch(()=>{})};typeof t.onResized=="function"?t.onResized(s):br.event?.listen&&br.event.listen("tauri://resize",s),s()}catch{}document.querySelectorAll(".rail-item").forEach(a=>{a.addEventListener("click",()=>je(a.dataset.page))}),Fo(),yi("#rail-account")?.addEventListener("click",()=>{le.accounts.length?je("settings"):zn()}),_f(Array.from(document.querySelectorAll(".rail-item")))}function Fo(){const i=yi("#rail-account");if(!i)return;const e=bn();if(!e){i.innerHTML=`<span class="ra-head ph">${V("user")}</span><span class="ra-name">Giriş yap</span>`;return}i.innerHTML=`
    <img class="ra-head" src="${Lc(e)}" draggable="false" ${Cc(e)} />
    <span class="ra-name">${dc(e.id)}${e.name}</span>
    <span class="pa-dot on"></span>`}let yl=null;function zn(i){if(yl){yl.root.querySelector("#off-name")?.focus();return}const e=tn(`
    <h2>Hesap Girişi</h2>
    <div class="sub">Microsoft hesabınla gir ya da çevrimdışı oyna.</div>
    <div style="display:flex; flex-direction:column; gap:14px;">
      <div>
        <label style="font-size:12px; color:var(--text-dim)">Offline Kullanıcı Adı</label>
        <div style="display:flex; gap:8px; margin-top:6px;">
          <input class="input" id="off-name" placeholder="OyuncuAdı" maxlength="16" />
          <button class="btn" id="off-go">Giriş</button>
        </div>
      </div>
      <div class="or-divider"><span>veya</span></div>
      <button class="btn primary lg" id="ms-go">${V("globe")} Microsoft ile Giriş</button>
      <div id="ms-status" style="font-size:12.5px; color:var(--text-dim); display:none; text-align:center;"></div>
      <div style="font-size:11px; color:var(--text-faint); text-align:center">Resmî Microsoft oturum penceresi açılır; şifren launcher'a iletilmez.</div>
    </div>
  `),t=e.root;let n=!0;const a=()=>{n&&(n=!1,yl=null,e.close())};yl={root:t,close:a},t.querySelector("#off-go")?.addEventListener("click",async()=>{const r=t.querySelector("#off-name").value.trim();if(r.length<3)return X("İsim en az 3 karakter olmalı","err");try{await te("cmd_add_offline_account",{name:r}),await ln(!0),bm(),X(`Hoş geldin, ${r}!`),a(),i?.()}catch(s){X(String(s),"err")}}),t.querySelector("#ms-go")?.addEventListener("click",async()=>{const r=t.querySelector("#ms-status"),s=t.querySelector("#ms-go");s.disabled=!0,r.style.display="block",r.innerHTML='<span class="spinner"></span> Microsoft oturum penceresi açılıyor…';try{const o=await te("cmd_ms_login_begin");await ln(!0),bm(),X(`Hoş geldin, ${o.name}!`),a(),i?.()}catch(o){r.textContent=String(o),s.disabled=!1}})}let xl=0;async function rA(i){if(!le.accounts.length){zn();return}if(Je.activeId){X("Oyun zaten açık — önce mevcut oyunu kapat","err");return}const e=++xl;Je.activeId=i;const{root:t,close:n}=tn(`
    <h2>Oyun Başlatılıyor</h2>
    <div class="sub" id="lp-stage">Hazırlanıyor…</div>
    <div class="progressbar"><div id="lp-bar" style="transform:scaleX(0.02)"></div></div>
    <div class="progressbar-label" id="lp-detail" style="margin-top:10px"></div>
    <div id="lp-logs" style="margin-top:14px; max-height:180px; overflow-y:auto; font-family:var(--font-mono); font-size:11px; color:var(--text-faint); display:none; user-select:text;"></div>
  `),a=t.querySelector("#lp-bar"),r=t.querySelector("#lp-stage"),s=t.querySelector("#lp-detail"),o=t.querySelector("#lp-logs"),c=await gn("launch-progress",h=>{if(e!==xl)return;const g=h.payload;a.style.transform=`scaleX(${Math.min(1,Math.max(0,g.percent/100))})`,r.textContent=sA(g.stage),s.textContent=g.detail||""}),l=await gn("game-log",h=>{if(e!==xl)return;o.style.display="block";const g=document.createElement("div");g.textContent=h.payload,o.appendChild(g),o.scrollTop=o.scrollHeight,o.children.length>200&&o.firstElementChild?.remove()}),d=await gn("game-exit",h=>{if(e!==xl)return;Je.activeId=null;const g=h.payload?.exit_code??h.payload?.code??-1;g===0?(r.textContent="Oyun kapatıldı",setTimeout(n,1200)):(r.textContent=`Oyun hata ile kapandı (kod ${g})`,s.textContent="Canlı logdan detayları görebilirsin.")}),f=()=>{c(),l(),d()},u=new MutationObserver(()=>{document.body.contains(t)||(f(),u.disconnect())});u.observe(document.body,{childList:!0});try{await te("cmd_launch_instance",{instanceId:i}),r.textContent="Oyun çalışıyor",s.textContent="İyi oyunlar!",a.style.transform="scaleX(1)",setTimeout(()=>{f(),n()},1500),await ln(!0)}catch(h){Je.activeId=null,r.textContent="Başlatılamadı",s.textContent=String(h),s.style.color="var(--danger)"}}function sA(i){return{manifest:"Sürüm bilgisi",download:"Dosyalar indiriliyor",java:"Java hazırlanıyor",mods:"Modlar hazırlanıyor",modpack:"Mod paketi kuruluyor",starting:"Başlatılıyor"}[i]||i}gn("curtain-status",i=>{i.payload?.phase==="started"&&(window.__yikimRestart=!0),i.payload?.phase==="closed"&&(window.__yikimRestart=!1)});gn("game-started",i=>{Je.activeId=i.payload,ln(!0)});gn("game-exit",async()=>{window.__yikimRestart||(Je.activeId=null,ln(!0))});gn("mod-install-progress",i=>{const e=i.payload;e.phase==="done"&&X(`Kuruldu: ${e.filename}`),e.phase==="error"&&X(`Hata: ${e.filename}`,"err")});let Bn=null,km;gn("standard-mods-progress",i=>{const e=i.payload;if(!e.total)return;(!Bn||!document.body.contains(Bn))&&(Bn=document.createElement("div"),Bn.className="sm-panel",Bn.innerHTML=`
      <div class="sm-head">
        <span class="sm-title">Standart modlar kuruluyor</span>
        <span class="sm-count tnum" id="sm-count"></span>
      </div>
      <div class="progressbar sm-bar"><div id="sm-fill"></div></div>
      <div class="sm-list" id="sm-list"></div>
    `,document.body.appendChild(Bn)),clearTimeout(km);const t=Bn.querySelector("#sm-count"),n=Bn.querySelector("#sm-fill"),a=Bn.querySelector("#sm-list");if(t.textContent=`${e.done}/${e.total}`,n.style.transform=`scaleX(${Math.min(1,e.done/e.total)})`,e.current){const r=document.createElement("div");for(r.className="sm-row done",r.textContent=`✓ ${e.current}`,a.appendChild(r);a.children.length>8;)a.firstElementChild?.remove();a.scrollTop=a.scrollHeight}e.done>=e.total&&(Bn.querySelector(".sm-title").textContent="Standart modlar hazır",km=setTimeout(()=>{Bn?.remove(),Bn=null},4e3))});gn("mod-install-progress",i=>{i.payload.phase});gn("yikim:yetki",()=>{Na(!0).finally(()=>{Fo(),window.dispatchEvent(new CustomEvent("yikim:yetki"))})});async function p_(){try{await ln(),Yw(),h_(),je("home"),E_(),Qw(),nT()||tT(),uA(),Ms(),Sv(),lA(),cA()}catch(i){hA(i)}}const oA=ln;async function lA(){const{packKartBaslat:i,packKartHata:e,packKartTamam:t}=await ct(async()=>{const{packKartBaslat:n,packKartHata:a,packKartTamam:r}=await Promise.resolve().then(()=>Rv);return{packKartBaslat:n,packKartHata:a,packKartTamam:r}},void 0);await gn("yikimpack-ac",async n=>{const a=n?.payload;if(!a)return;const r=`dosya:${a}`;i("Paket açıldı — kurulum başlıyor",r),je("instances");try{const s=await te("cmd_import_pack_file",{path:a,name:null});await oA(),t(r),X(`${s.name||"Paket"} kuruldu ✓`,"ok"),(await ct(async()=>{const{paketSonrasiRamUyarisi:o}=await Promise.resolve().then(()=>nE);return{paketSonrasiRamUyarisi:o}},void 0)).paketSonrasiRamUyarisi(s)}catch(s){const o=String(s);if(o.includes("paket_zaten_kuruluyor")){X("Bu paket şu anda zaten kuruluyor","err");return}e(o,r)}})}async function cA(){const{packKartBitti:i}=await ct(async()=>{const{packKartBitti:e}=await Promise.resolve().then(()=>Rv);return{packKartBitti:e}},void 0);await gn("pack-hazir",async e=>{const t=e?.payload?.instance_id,n=e?.payload?.ad||"paket";dA(),Wa("kurulum",`${n} hazır`,"Kurulum tamamlandı — log sayfası açıldı"),i(t),t&&je("instances",`${t}|log`),X(`${n} kuruldu — log sayfası açıldı`,"ok")})}function dA(){try{const i=window.AudioContext||window.webkitAudioContext;if(!i)return;const e=new i,t=(a,r)=>{const s=e.createOscillator(),o=e.createGain();s.type="sine",s.frequency.value=r,o.gain.setValueAtTime(1e-4,a),o.gain.exponentialRampToValueAtTime(.14,a+.02),o.gain.exponentialRampToValueAtTime(1e-4,a+.32),s.connect(o).connect(e.destination),s.start(a),s.stop(a+.34)},n=e.currentTime;t(n,660),t(n+.16,990),setTimeout(()=>e.close(),900)}catch{}}async function uA(){try{const e=await(await ct(()=>import("./index-DSkUPpwd.js"),[])).check();if(!e?.available)return;let t={};try{t=await te("cmd_guncelleme_bilgi")}catch{}if(t.os==="linux"&&(t.bundle==="deb"||t.bundle==="rpm")){fA();return}const a=String(e?.version??"");X(`Yeni sürüm bulundu${a?` (v${a})`:""} — arka planda indiriliyor…`);let r=0;await e.download(s=>{s.event==="Started"?r=0:s.event==="Progress"&&(r=Math.min(99,r+1)),r%25===0&&X(`Güncelleme indiriliyor… %${r}`)}),X("Güncelleme kuruluyor — launcher yeniden başlıyor…"),await e.install(),setTimeout(()=>{try{br.process.exit(0)}catch{window.location.reload()}},900)}catch{}}async function fA(){try{const e=await(await ct(()=>import("./index-DSkUPpwd.js"),[])).check();if(!e?.available)return;const t=e?.rawJson??{},n=String(t?.minimum??"").trim(),a=(g,m)=>{const p=T=>T.replace(/^v/i,"").split(".").map(b=>parseInt(b,10)||0),v=p(g),y=p(m);for(let T=0;T<Math.max(v.length,y.length);T++){const b=(v[T]??0)-(y[T]??0);if(b!==0)return b}return 0},r=String(e?.currentVersion??""),s=!!n&&a(r,n)<0;let o={};try{o=await te("cmd_guncelleme_bilgi")}catch{}const c=o.os==="linux"&&(o.bundle==="deb"||o.bundle==="rpm"),l=s&&!c;if(c){const g=o.bundle==="rpm",m=g?"linux-x86_64-rpm":"linux-x86_64-deb",p=t?.platforms?.[m]??t?.platforms?.["linux-x86_64-deb"]??t?.platforms?.["linux-x86_64"],v=String(p?.url||`https://github.com/YKSAMI1/yikimlient/releases/tag/v${e.version}`),{root:y,close:T}=tn(`
        <h2>Güncelleme Var</h2>
        <div class="sub">YIKIMLient <b>v${e.version}</b> hazır. Değişiklik notları:</div>
        <div style="margin:12px 0; max-height:160px; overflow-y:auto; user-select:text; color:var(--text-dim); font-size:12.5px; line-height:1.55">
          ${(e.body||"Değişiklik notu yok.").split(`
`).map(b=>`<div>${b}</div>`).join("")}
        </div>
        <p class="gv-mini" style="margin:0 0 10px; color:var(--text-dim); line-height:1.6">
          Bu kurulum <b>${g?".rpm":".deb"}</b> paketiyle yapıldı. Paket yöneticisi
          yönetici izni istediği için launcher kendini sessizce güncelleyemiyor.
          Yeni paketi indirip dosyayı çift tıkla (ya da
          <code>sudo ${g?"rpm -U":"dpkg -i"} dosya.${g?"rpm":"deb"}</code>) —
          ayarların ve hesapların korunur.
        </p>
        <div style="display:flex; gap:10px; justify-content:flex-end; margin-top:6px">
          <button class="btn ghost" id="upd-later">Sonra</button>
          <button class="btn primary" id="upd-indir">Paketi indir (${g?".rpm":".deb"})</button>
        </div>
      `);y.querySelector("#upd-later")?.addEventListener("click",()=>T()),y.querySelector("#upd-indir")?.addEventListener("click",async()=>{try{await qi(v),T()}catch(b){X(`Bağlantı açılamadı: ${b}`,"err")}});return}const d=l?"Zorunlu Güncelleme":"Güncelleme Var",f=l?`Eski sürümdesin (v${r}). Bu güncelleme zorunlu — launcher'ı kullanmaya devam etmek için v${e.version} olmalısın.`:`YIKIMLient <b>v${e.version}</b> hazır. Değişiklik notları:`,{root:u,close:h}=tn(`
      <h2>${d}</h2>
      <div class="sub">${f}</div>
      <div style="margin:12px 0; max-height:180px; overflow-y:auto; user-select:text; color:var(--text-dim); font-size:12.5px; line-height:1.55">
        ${(e.body||"Değişiklik notu yok.").split(`
`).map(g=>`<div>${g}</div>`).join("")}
      </div>
      <div style="display:flex; gap:10px; justify-content:flex-end; margin-top:6px">
        ${l?"":'<button class="btn ghost" id="upd-later">Sonra</button>'}
        <button class="btn ${l?"danger":"primary"}" id="upd-go">${l?"Şimdi güncelle (zorunlu)":"İndir ve Kur"}</button>
      </div>
      ${l?'<p class="gv-mini" style="margin:8px 0 0; color:var(--text-faint)">Güncelleme indirilip kurulana kadar launcher kullanılamaz.</p>':""}
    `);l&&u.addEventListener("click",g=>g.stopPropagation()),u.querySelector("#upd-later")?.addEventListener("click",()=>h()),u.querySelector("#upd-go")?.addEventListener("click",async()=>{const g=u.querySelector("#upd-go");g.disabled=!0,g.textContent="İndiriliyor…";try{let m=0,p=0;await e.download(v=>{switch(v.event){case"Started":p=v.data.contentLength??0;break;case"Progress":m+=v.data.chunkLength;break;case"Finished":g.textContent="Kuruluyor…";break}p>0&&(g.textContent=`İndiriliyor… %${Math.round(m/p*100)}`)}),await e.install(),X("Güncelleme kuruldu — launcher yeniden başlıyor"),setTimeout(()=>{try{br.process.exit(0)}catch{window.location.reload()}},900)}catch(m){g.disabled=!1,g.textContent="İndir ve Kur",X(`Güncelleme başarısız: ${m}`,"err")}})}catch{}}function hA(i){const e=document.getElementById("app"),t=i instanceof Error?i.stack||i.message:String(i);console.error("boot hatası:",i),e&&(e.innerHTML=`
      <div style="height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:12px; padding:40px; text-align:center">
        <div style="font-size:13px; color:var(--text-dim)">Açılışta bir şeyler ters gitti:</div>
        <pre style="user-select:text; font-family:var(--font-mono); font-size:11.5px; color:var(--danger); white-space:pre-wrap; word-break:break-word; max-width:640px; background:var(--bg2); border:1px solid var(--hairline-strong); border-radius:10px; padding:14px 18px; margin:0">${t}</pre>
      </div>`)}function pA(){if(!window.__TAURI__)return;const i=async()=>{try{const e=await fetch(`surum.txt?t=${Date.now()}`,{cache:"no-store"});return e.ok&&(await e.text()).trim()||null}catch{return null}};(async()=>{const e=await i();if(!e)return;const t=async()=>{if(document.querySelector(".modal-backdrop"))return;const n=await i();n&&n!==e&&window.location.reload()};for(const n of[4e3,12e3,3e4,6e4])setTimeout(()=>void t(),n)})()}p_();pA();const St=Object.freeze(Object.defineProperty({__proto__:null,$:yi,applyTheme:tA,applyWorld:Di,boot:p_,currentAccount:bn,get currentPage(){return Zf},el:hi,enterStage:Mg,fileSrc:Mt,fmtBytes:Oo,fmtDuration:fs,fmtSpeed:iA,headAttrs:Cc,headFallbackUrl:f_,headUrl:Lc,icon:V,invoke:te,lamp:oo,launch:Je,launchInstance:rA,listen:gn,nav:Hn,navigate:je,openExternal:qi,openLoginModal:zn,openModal:tn,openPath:u_,pages:Qi,refreshState:ln,renderAccountPill:Fo,setupShell:h_,state:le,switchPress:yf,toast:X,updateRamPill:nA},Symbol.toStringTag,{value:"Module"}));
