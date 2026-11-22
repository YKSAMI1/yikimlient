import"./theme-orgVc9TE.js";const C0="modulepreload",P0=function(i){return"/"+i},ph={},tt=function(e,t,n){let a=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),o=s?.nonce||s?.getAttribute("nonce");a=Promise.allSettled(t.map(l=>{if(l=P0(l),l in ph)return;ph[l]=!0;const c=l.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":C0,c||(f.as="script"),f.crossOrigin="",f.href=l,o&&f.setAttribute("nonce",o),document.head.appendChild(f),c)return new Promise((u,h)=>{f.addEventListener("load",u),f.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(s){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s}return a.then(s=>{for(const o of s||[])o.status==="rejected"&&r(o.reason);return e().catch(r)})},D0="https://discord.gg/3zTCpMzeNq";let Wa={},Wd=0,to=null,Gc=null;function mr(){to!==null&&(clearInterval(to),to=null)}let mh=null,Vc="";function I0(){if(mh!==null)return;const i=()=>{z0()};mh=setInterval(i,5e3),window.addEventListener("focus",i),document.addEventListener("visibilitychange",()=>{document.hidden||i()}),i()}async function z0(){if(!document.hidden)try{await Ha(!0);const i=await Dm();if(!i)return;const e=`${i.cizimSerbest}|${i.rolYol}|${i.dogrulandi}`;if(e===Vc)return;const t=Vc==="";if(Vc=e,i.dogrulandi&&Gc!==null&&Gc!==i.rolYol&&(i.rolYol?X("Yol Silindiri izni açıldı ✓ pelerinini ve elıtranı çizebilirsin — Kozmetikler sayfasına geç.","ok"):X("Yol Silindiri izni kapandı — tasarımın kaydedildi ama şu an varsayılan YIKIM pelerini/elitrası görünüyor. Etiketi geri alınca aynı tasarım döner.","err")),Gc=i.rolYol,t)return;window.dispatchEvent(new CustomEvent("yikim:yetki",{detail:i}))}catch{}}async function Ha(i=!1){if(!(!i&&Date.now()-Wd<15e3))try{const e=await ne("cmd_guvenlik_ozet");Wa={};for(const t of e.hesaplar||[])Wa[t.id]=t;Wd=Date.now()}catch{}}function Cm(i){return Wa[i]?.dogrulandi??!1}function Pm(i){return Wa[i]?.rol_yol??!1}function U0(i){return Wa[i]?.kozmetik_serbest??!1}async function Dm(){let i=null;try{i=await ne("cmd_guvenlik_durum")}catch{return null}const e=i?.hesap?.anahtar??"",t=te.accounts?.find(r=>N0(r)===e)?.id,n=t?{cizimSerbest:!!i?.cizim_serbest,dogrulandi:!!i?.dogrulandi,rolYol:!!i?.yetki?.rol_yol}:null;if(!t)return n;const a=Wa[t];return Wa[t]={id:t,anahtar:e,ad:String(i?.hesap?.ad??a?.ad??""),dogrulandi:!!i?.dogrulandi,rol_yol:!!i?.yetki?.rol_yol,carpi:!!i?.carpi,kozmetik_serbest:!!i?.kozmetik_serbest,cizim_serbest:!!i?.cizim_serbest},Wd=Date.now(),n}function N0(i){const e=i.kind==="microsoft"?"ms":"offline",t=i.uuid||"";return t?`${e}:${t}`:`${e}:${(i.name||i.id).toLowerCase()}`}function vs(i){const e=Wa[i];return!e||e.dogrulandi?"":'<span class="gv-carpi" title="Hesap doğrulanmadı — kozmetik değiştirmek için Ayarlar → Güvenlik">✕</span>'}async function Kd(i){const e=new TextEncoder,t=await crypto.subtle.importKey("raw",e.encode(i),"PBKDF2",!1,["deriveBits"]),n=await crypto.subtle.deriveBits({name:"PBKDF2",salt:e.encode("yikimlient-parola-v1"),iterations:21e4,hash:"SHA-256"},t,256);return Array.from(new Uint8Array(n)).map(a=>a.toString(16).padStart(2,"0")).join("")}function gh(i){return i.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function zr(i,e,t){return`<div class="gv-durum ${i}">
    <span class="gv-nokta"></span>
    <div><b>${gh(e)}</b><small>${gh(t)}</small></div>
  </div>`}const no=(i,e)=>`
  <label class="gv-etiket" for="${i}">${e}</label>
  <input class="input gv-girdi" id="${i}" type="password" autocomplete="new-password" minlength="8" placeholder="en az 8 karakter" />`;async function gr(i){mr(),i.innerHTML=`<div class="card set-card gv-kart"><h3>🛡️ Hesap Doğrulama</h3>
    <p class="set-sub">Durum okunuyor…</p></div>`,await Ha(!0);let e=null;try{e=await ne("cmd_guvenlik_durum")}catch{e=null}if(!e){i.innerHTML=`<div class="card set-card gv-kart">
      <h3>🛡️ Hesap Doğrulama</h3>
      ${zr("hata","Güvenlik servisi bu sürümde yok","Launcher'ı güncelle. Oyun ve mevcut kozmetikler çalışmaya devam eder.")}
    </div>`;return}const t=Sn();e.yetki;const n=!!e.hesap,a=e.carpi?vs(t?.id||""):"";let r="";e.api_acik?n?e.baglandi&&e.dogrulandi?r=zr("ok",`Doğrulandı${e.discord_ad?` · ${e.discord_ad}`:""}`,e.yetki?.rol_yol?"Kendi pelerin/elitranı çizebilir, fotoğraf (HD) ve maske yükleyebilirsin (Yol Silindiri).":'Kozmetik ve skin değiştirme açık. Kendi tasarımını çizmek için Discord sunucusundaki YIKIM etiketi ("Yol Silindiri" rolü) gerekir — etiketi bırakırsan çizme izni kendiliğinden kapanır.'):e.baglandi?r=zr("uyari","Discord bağlı — bu cihazda giriş yapmadın","Şifreni gir; kozmetiklerin ve çizme iznin bu cihaza açılsın."):r=zr("uyari","Hesap doğrulanmadı","Oynayabilirsin; kozmetik değiştirmek için Discord'da doğrula."):r=zr("uyari","Önce hesap ekle","Ayarlar → Hesaplar bölümünden bir hesap ekle."):r=zr("hata","Sunucuya ulaşılamıyor","Bağlantı, şifre oluşturma ve sıfırlama şu an kapalı. Oyun ve mevcut kozmetikler çalışmaya devam eder.");let s="";e.api_acik&&n&&!e.baglandi&&(s+=`
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
          ${no("gv-giris-sifre","Şifre")}
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
          ${no("gv-p1","Yeni şifre")}
          ${no("gv-p2","Yeni şifre (tekrar)")}
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
  </div>`;const o=()=>i.querySelector("#gv-kod"),l=()=>i.querySelector("#gv-kod-alt");i.querySelector("#gv-kod-al")?.addEventListener("click",async()=>{try{const f=await ne("cmd_guvenlik_baglama_kod");o()&&(o().textContent=f.kod||"?"),l()&&(l().textContent=`Discord'da bota yaz: /bagla ${f.kod||""} · ${Math.ceil((f.kalan_sn||600)/60)} dk`);const u=i.querySelector("#gv-kopyala");u&&(u.hidden=!f.kod,u.onclick=async()=>{const h=f.kod||"";if(h)try{await navigator.clipboard.writeText(h);const v=u.textContent;u.textContent="Kopyalandı ✓",setTimeout(()=>{u.textContent=v},1600)}catch{const v=window.getSelection(),m=document.createRange();m.selectNodeContents(i.querySelector("#gv-kod")),v?.removeAllRanges(),v?.addRange(m),X("Pano kapalı — kodu elle seçip kopyala","err")}}),to||(to=setInterval(()=>{if(!i.isConnected||!document.body.contains(i)){mr();return}c(!0)},3e3))}catch(f){X(`Kod alınamadı: ${String(f).replace(/^Error:\s*/,"")}`,"err")}});const c=async(f=!1)=>{try{if((await ne("cmd_guvenlik_baglama_durum")).baglandi)return mr(),X("Discord bağlandı ✓"),await gr(i),!0;f||X("Henüz bağlanmadı — Discord'da kodu yazdın mı?","err")}catch(u){f||X(`Kontrol edilemedi: ${String(u).replace(/^Error:\s*/,"")}`,"err")}return!1};i.querySelector("#gv-kontrol")?.addEventListener("click",()=>void c(!1)),i.querySelector("#gv-discord")?.addEventListener("click",()=>Im());const d=async()=>{const f=i.querySelector("#gv-giris-sifre")?.value||"";if(f.length<8)return X("Şifreni gir (en az 8 karakter)","err");const u=i.querySelector("#gv-giris");u&&(u.disabled=!0);try{const h=await Kd(f);(await ne("cmd_guvenlik_giris",{parolaHash:h}))?.dogrulandi&&(await Ha(!0),X("Giriş yapıldı ✓ kozmetikler açıldı"),await gr(i))}catch(h){const v=String(h).replace(/^Error:\s*/,"");if(v.includes("parola_yok")){const m=i.querySelector("#gv-olustur-blok");m&&(m.hidden=!1),X("Bu hesabın şifresi yok — aşağıdan oluşturabilirsin.","err")}else X(v.includes("baglanti_yok")?"Önce Discord'da /bagla ile bağla":`Giriş olmadı: ${v}`,"err");u&&(u.disabled=!1)}};i.querySelector("#gv-giris")?.addEventListener("click",()=>void d()),i.querySelector("#gv-giris-sifre")?.addEventListener("keydown",f=>{f.key==="Enter"&&d()}),i.querySelector("#gv-olustur-ac")?.addEventListener("click",()=>{const f=i.querySelector("#gv-olustur-blok");f&&(f.hidden=!1)}),i.querySelector("#gv-parola-kur")?.addEventListener("click",async()=>{const f=i.querySelector("#gv-p1")?.value||"",u=i.querySelector("#gv-p2")?.value||"";if(f.length<8)return X("Şifre en az 8 karakter olmalı","err");if(f!==u)return X("Şifreler eşleşmiyor","err");const h=i.querySelector("#gv-parola-kur");h&&(h.disabled=!0);try{const v=await Kd(f);await ne("cmd_guvenlik_parola_kur",{parolaHash:v}),await ne("cmd_guvenlik_giris",{parolaHash:v}),X("Şifre oluşturuldu ✓ kozmetikler açıldı"),await Ha(!0),await gr(i)}catch(v){const m=String(v).replace(/^Error:\s*/,"");if(m.includes("parola_var")){const p=i.querySelector("#gv-olustur-blok");p&&(p.hidden=!0),X("Bu hesabın şifresi zaten var — yukarıdan giriş yap.","err")}else X(`Olmadı: ${m}`,"err");h&&(h.disabled=!1)}}),i.querySelector("#gv-unuttum")?.addEventListener("click",()=>O0(i)),i.querySelector("#gv-yenile")?.addEventListener("click",()=>void gr(i))}function O0(i){const e=en(`
    <h2>Şifremi unuttum</h2>
    <div class="sub">Sunucudaki <b>bot komut kanalında</b> <code>/sifirla</code> yaz; bot sana tek seferlik kod gönderir.</div>
    <div style="display:flex; flex-direction:column; gap:12px; margin-top:14px">
      <div>
        <label class="gv-etiket" for="gv-sif-kod">Kod</label>
        <input class="input gv-girdi" id="gv-sif-kod" placeholder="8 karakter" maxlength="12" style="text-transform:uppercase" />
      </div>
      ${no("gv-sif-p1","Yeni şifre")}
      ${no("gv-sif-p2","Yeni şifre (tekrar)")}
      <div class="gv-alt-satir">
        <button class="btn ghost" id="gv-sif-iptal">Vazgeç</button>
        <button class="btn primary" id="gv-sif-tamam">Şifreyi değiştir</button>
      </div>
      <p class="gv-mini">5 hatalı denemede bu cihazda hesap 24 saat kilitlenir.</p>
    </div>
  `);e.root.querySelector("#gv-sif-iptal")?.addEventListener("click",()=>e.close()),e.root.querySelector("#gv-sif-tamam")?.addEventListener("click",async()=>{const t=(e.root.querySelector("#gv-sif-kod")?.value||"").trim().toUpperCase(),n=e.root.querySelector("#gv-sif-p1")?.value||"",a=e.root.querySelector("#gv-sif-p2")?.value||"";if(!t)return X("Kodu gir","err");if(n.length<8)return X("Şifre en az 8 karakter olmalı","err");if(n!==a)return X("Şifreler eşleşmiyor","err");try{const r=await Kd(n);await ne("cmd_guvenlik_sifirla",{kod:t,parolaHash:r}),await ne("cmd_guvenlik_giris",{parolaHash:r}),X("Şifre değiştirildi ✓"),e.close(),await Ha(!0),await gr(i)}catch(r){X(`Olmadı: ${String(r).replace(/^Error:\s*/,"")}`,"err")}})}function Im(){Xi(D0).catch(()=>X("Discord açılamadı","err"))}function ta(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function zm(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ti={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ho={duration:.5,overwrite:!1,delay:0},sf,dn,Tt,fi=1e8,xt=1/fi,Xd=Math.PI*2,F0=Xd/4,B0=0,Um=Math.sqrt,$0=Math.cos,H0=Math.sin,on=function(e){return typeof e=="string"},Nt=function(e){return typeof e=="function"},ca=function(e){return typeof e=="number"},of=function(e){return typeof e>"u"},Vi=function(e){return typeof e=="object"},Pn=function(e){return e!==!1},lf=function(){return typeof window<"u"},Xo=function(e){return Nt(e)||on(e)},Nm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},xn=Array.isArray,G0=/random\([^)]+\)/g,V0=/,\s*/g,vh=/(?:-?\.?\d|\.)+/gi,Om=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ns=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,qc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Fm=/[+-]=-?[.\d]+/,q0=/[^,'"\[\]\s]+/gi,W0=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Lt,Ii,Yd,cf,ni={},ql={},Bm,$m=function(e){return(ql=_s(e,ni))&&Fn},df=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},po=function(e,t){return!t&&console.warn(e)},Hm=function(e,t){return e&&(ni[e]=t)&&ql&&(ql[e]=t)||ni},mo=function(){return 0},K0={suppressEvents:!0,isStart:!0,kill:!1},Al={suppressEvents:!0,kill:!1},X0={suppressEvents:!0},uf={},Ga=[],Zd={},Gm,qn={},Wc={},_h=30,Rl=[],ff="",hf=function(e){var t=e[0],n,a;if(Vi(t)||Nt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(a=Rl.length;a--&&!Rl[a].targetTest(t););n=Rl[a]}for(a=e.length;a--;)e[a]&&(e[a]._gsap||(e[a]._gsap=new ug(e[a],n)))||e.splice(a,1);return e},xr=function(e){return e._gsap||hf(hi(e))[0]._gsap},Vm=function(e,t,n){return(n=e[t])&&Nt(n)?e[t]():of(n)&&e.getAttribute&&e.getAttribute(t)||n},Dn=function(e,t){return(e=e.split(",")).forEach(t)||e},Bt=function(e){return Math.round(e*1e5)/1e5||0},Rt=function(e){return Math.round(e*1e7)/1e7||0},ls=function(e,t){var n=t.charAt(0),a=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+a:n==="-"?e-a:n==="*"?e*a:e/a},Y0=function(e,t){for(var n=t.length,a=0;e.indexOf(t[a])<0&&++a<n;);return a<n},Wl=function(){var e=Ga.length,t=Ga.slice(0),n,a;for(Zd={},Ga.length=0,n=0;n<e;n++)a=t[n],a&&a._lazy&&(a.render(a._lazy[0],a._lazy[1],!0)._lazy=0)},pf=function(e){return!!(e._initted||e._startAt||e.add)},qm=function(e,t,n,a){Ga.length&&!dn&&Wl(),e.render(t,n,!!(dn&&t<0&&pf(e))),Ga.length&&!dn&&Wl()},Wm=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(q0).length<2?t:on(e)?e.trim():e},Km=function(e){return e},ii=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Z0=function(e){return function(t,n){for(var a in n)a in t||a==="duration"&&e||a==="ease"||(t[a]=n[a])}},_s=function(e,t){for(var n in t)e[n]=t[n];return e},yh=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Vi(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},Kl=function(e,t){var n={},a;for(a in e)a in t||(n[a]=e[a]);return n},io=function(e){var t=e.parent||Lt,n=e.keyframes?Z0(xn(e.keyframes)):ii;if(Pn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},J0=function(e,t){for(var n=e.length,a=n===t.length;a&&n--&&e[n]===t[n];);return n<0},Xm=function(e,t,n,a,r){var s=e[a],o;if(r)for(o=t[r];s&&s[r]>o;)s=s._prev;return s?(t._next=s._next,s._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[a]=t,t._prev=s,t.parent=t._dp=e,t},bc=function(e,t,n,a){n===void 0&&(n="_first"),a===void 0&&(a="_last");var r=t._prev,s=t._next;r?r._next=s:e[n]===t&&(e[n]=s),s?s._prev=r:e[a]===t&&(e[a]=r),t._next=t._prev=t.parent=null},Ka=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},kr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},j0=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Jd=function(e,t,n,a){return e._startAt&&(dn?e._startAt.revert(Al):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,a))},Q0=function i(e){return!e||e._ts&&i(e.parent)},bh=function(e){return e._repeat?ys(e._tTime,e=e.duration()+e._rDelay)*e:0},ys=function(e,t){var n=Math.floor(e=Rt(e/t));return e&&n===e?n-1:n},Xl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},xc=function(e){return e._end=Rt(e._start+(e._tDur/Math.abs(e._ts||e._rts||xt)||0))},kc=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Rt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),xc(e),n._dirty||kr(n,e)),e},Ym=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Xl(e.rawTime(),t),(!t._dur||Do(0,t.totalDuration(),n)-t._tTime>xt)&&t.render(n,!0)),kr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-xt}},Ni=function(e,t,n,a){return t.parent&&Ka(t),t._start=Rt((ca(n)?n:n||e!==Lt?ci(e,n,t):e._time)+t._delay),t._end=Rt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Xm(e,t,"_first","_last",e._sort?"_start":0),jd(t)||(e._recent=t),a||Ym(e,t),e._ts<0&&kc(e,e._tTime),e},Zm=function(e,t){return(ni.ScrollTrigger||df("scrollTrigger",t))&&ni.ScrollTrigger.create(t,e)},Jm=function(e,t,n,a,r){if(gf(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!dn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Gm!==Yn.frame)return Ga.push(e),e._lazy=[r,a],1},e_=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},jd=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},t_=function(e,t,n,a){var r=e.ratio,s=t<0||!t&&(!e._start&&e_(e)&&!(!e._initted&&jd(e))||(e._ts<0||e._dp._ts<0)&&!jd(e))?0:1,o=e._rDelay,l=0,c,d,f;if(o&&e._repeat&&(l=Do(0,e._tDur,t),d=ys(l,o),e._yoyo&&d&1&&(s=1-s),d!==ys(e._tTime,o)&&(r=1-s,e.vars.repeatRefresh&&e._initted&&e.invalidate())),s!==r||dn||a||e._zTime===xt||!t&&e._zTime){if(!e._initted&&Jm(e,t,a,n,l))return;for(f=e._zTime,e._zTime=t||(n?xt:0),n||(n=t&&!f),e.ratio=s,e._from&&(s=1-s),e._time=0,e._tTime=l,c=e._pt;c;)c.r(s,c.d),c=c._next;t<0&&Jd(e,t,n,!0),e._onUpdate&&!n&&jn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&jn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===s&&(s&&Ka(e,1),!n&&!dn&&(jn(e,s?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},n_=function(e,t,n){var a;if(n>t)for(a=e._first;a&&a._start<=n;){if(a.data==="isPause"&&a._start>t)return a;a=a._next}else for(a=e._last;a&&a._start>=n;){if(a.data==="isPause"&&a._start<t)return a;a=a._prev}},bs=function(e,t,n,a){var r=e._repeat,s=Rt(t)||0,o=e._tTime/e._tDur;return o&&!a&&(e._time*=s/e._dur),e._dur=s,e._tDur=r?r<0?1e10:Rt(s*(r+1)+e._rDelay*r):s,o>0&&!a&&kc(e,e._tTime=e._tDur*o),e.parent&&xc(e),n||kr(e.parent,e),e},xh=function(e){return e instanceof Cn?kr(e):bs(e,e._dur)},i_={_start:0,endTime:mo,totalDuration:mo},ci=function i(e,t,n){var a=e.labels,r=e._recent||i_,s=e.duration()>=fi?r.endTime(!1):e._dur,o,l,c;return on(t)&&(isNaN(t)||t in a)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?r:n).totalDuration()/100:1)):o<0?(t in a||(a[t]=s),a[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(xn(n)?n[0]:n).totalDuration()),o>1?i(e,t.substr(0,o-1),n)+l:s+l)):t==null?s:+t},ao=function(e,t,n){var a=ca(t[1]),r=(a?2:1)+(e<2?0:1),s=t[r],o,l;if(a&&(s.duration=t[1]),s.parent=n,e){for(o=s,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Pn(l.vars.inherit)&&l.parent;s.immediateRender=Pn(o.immediateRender),e<2?s.runBackwards=1:s.startAt=t[r-1]}return new Gt(t[0],s,t[r+1])},er=function(e,t){return e||e===0?t(e):t},Do=function(e,t,n){return n<e?e:n>t?t:n},bn=function(e,t){return!on(e)||!(t=W0.exec(e))?"":t[1]},a_=function(e,t,n){return er(n,function(a){return Do(e,t,a)})},Qd=[].slice,jm=function(e,t){return e&&Vi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Vi(e[0]))&&!e.nodeType&&e!==Ii},r_=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(a){var r;return on(a)&&!t||jm(a,1)?(r=n).push.apply(r,hi(a)):n.push(a)})||n},hi=function(e,t,n){return Tt&&!t&&Tt.selector?Tt.selector(e):on(e)&&!n&&(Yd||!xs())?Qd.call((t||cf).querySelectorAll(e),0):xn(e)?r_(e,n):jm(e)?Qd.call(e,0):e?[e]:[]},eu=function(e){return e=hi(e)[0]||po("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return hi(t,n.querySelectorAll?n:n===e?po("Invalid scope")||cf.createElement("div"):e)}},Qm=function(e){return e.sort(function(){return .5-Math.random()})},eg=function(e){if(Nt(e))return e;var t=Vi(e)?e:{each:e},n=Sr(t.ease),a=t.from||0,r=parseFloat(t.base)||0,s={},o=a>0&&a<1,l=isNaN(a)||o,c=t.axis,d=a,f=a;return on(a)?d=f={center:.5,edges:.5,end:1}[a]||0:!o&&l&&(d=a[0],f=a[1]),function(u,h,v){var m=(v||t).length,p=s[m],g,_,T,b,k,S,A,x,w;if(!p){if(w=t.grid==="auto"?0:(t.grid||[1,fi])[1],!w){for(A=-fi;A<(A=v[w++].getBoundingClientRect().left)&&w<m;);w<m&&w--}for(p=s[m]=[],g=l?Math.min(w,m)*d-.5:a%w,_=w===fi?0:l?m*f/w-.5:a/w|0,A=0,x=fi,S=0;S<m;S++)T=S%w-g,b=_-(S/w|0),p[S]=k=c?Math.abs(c==="y"?b:T):Um(T*T+b*b),k>A&&(A=k),k<x&&(x=k);a==="random"&&Qm(p),p.max=A-x,p.min=x,p.v=m=(parseFloat(t.amount)||parseFloat(t.each)*(w>m?m-1:c?c==="y"?m/w:w:Math.max(w,m/w))||0)*(a==="edges"?-1:1),p.b=m<0?r-m:r,p.u=bn(t.amount||t.each)||0,n=n&&m<0?__(n):n}return m=(p[u]-p.min)/p.max||0,Rt(p.b+(n?n(m):m)*p.v)+p.u}},tu=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var a=Rt(Math.round(parseFloat(n)/e)*e*t);return(a-a%1)/t+(ca(n)?0:bn(n))}},tg=function(e,t){var n=xn(e),a,r;return!n&&Vi(e)&&(a=n=e.radius||fi,e.values?(e=hi(e.values),(r=!ca(e[0]))&&(a*=a)):e=tu(e.increment)),er(t,n?Nt(e)?function(s){return r=e(s),Math.abs(r-s)<=a?r:s}:function(s){for(var o=parseFloat(r?s.x:s),l=parseFloat(r?s.y:0),c=fi,d=0,f=e.length,u,h;f--;)r?(u=e[f].x-o,h=e[f].y-l,u=u*u+h*h):u=Math.abs(e[f]-o),u<c&&(c=u,d=f);return d=!a||c<=a?e[d]:s,r||d===s||ca(s)?d:d+bn(s)}:tu(e))},ng=function(e,t,n,a){return er(xn(e)?!t:n===!0?!!(n=0):!a,function(){return xn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(a=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*a)/a})},s_=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(a){return t.reduce(function(r,s){return s(r)},a)}},o_=function(e,t){return function(n){return e(parseFloat(n))+(t||bn(n))}},l_=function(e,t,n){return ag(e,t,0,1,n)},ig=function(e,t,n){return er(n,function(a){return e[~~t(a)]})},c_=function i(e,t,n){var a=t-e;return xn(e)?ig(e,i(0,e.length),t):er(n,function(r){return(a+(r-e)%a)%a+e})},d_=function i(e,t,n){var a=t-e,r=a*2;return xn(e)?ig(e,i(0,e.length-1),t):er(n,function(s){return s=(r+(s-e)%r)%r||0,e+(s>a?r-s:s)})},go=function(e){return e.replace(G0,function(t){var n=t.indexOf("[")+1,a=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(V0);return ng(n?a:+a[0],n?0:+a[1],+a[2]||1e-5)})},ag=function(e,t,n,a,r){var s=t-e,o=a-n;return er(r,function(l){return n+((l-e)/s*o||0)})},u_=function i(e,t,n,a){var r=isNaN(e+t)?0:function(h){return(1-h)*e+h*t};if(!r){var s=on(e),o={},l,c,d,f,u;if(n===!0&&(a=1)&&(n=null),s)e={p:e},t={p:t};else if(xn(e)&&!xn(t)){for(d=[],f=e.length,u=f-2,c=1;c<f;c++)d.push(i(e[c-1],e[c]));f--,r=function(v){v*=f;var m=Math.min(u,~~v);return d[m](v-m)},n=t}else a||(e=_s(xn(e)?[]:{},e));if(!d){for(l in t)mf.call(o,e,l,"get",t[l]);r=function(v){return yf(v,o)||(s?e.p:e)}}}return er(n,r)},kh=function(e,t,n){var a=e.labels,r=fi,s,o,l;for(s in a)o=a[s]-t,o<0==!!n&&o&&r>(o=Math.abs(o))&&(l=s,r=o);return l},jn=function(e,t,n){var a=e.vars,r=a[t],s=Tt,o=e._ctx,l,c,d;if(r)return l=a[t+"Params"],c=a.callbackScope||e,n&&Ga.length&&Wl(),o&&(Tt=o),d=l?r.apply(c,l):r.call(c),Tt=s,d},qs=function(e){return Ka(e),e.scrollTrigger&&e.scrollTrigger.kill(!!dn),e.progress()<1&&jn(e,"onInterrupt"),e},is,rg=[],sg=function(e){if(e)if(e=!e.name&&e.default||e,lf()||e.headless){var t=e.name,n=Nt(e),a=t&&!n&&e.init?function(){this._props=[]}:e,r={init:mo,render:yf,add:mf,kill:A_,modifier:T_,rawVars:0},s={targetTest:0,get:0,getSetter:_f,aliases:{},register:0};if(xs(),e!==a){if(qn[t])return;ii(a,ii(Kl(e,r),s)),_s(a.prototype,_s(r,Kl(e,s))),qn[a.prop=t]=a,e.targetTest&&(Rl.push(a),uf[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Hm(t,a),e.register&&e.register(Fn,a,In)}else rg.push(e)},bt=255,Ws={aqua:[0,bt,bt],lime:[0,bt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,bt],navy:[0,0,128],white:[bt,bt,bt],olive:[128,128,0],yellow:[bt,bt,0],orange:[bt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[bt,0,0],pink:[bt,192,203],cyan:[0,bt,bt],transparent:[bt,bt,bt,0]},Kc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*bt+.5|0},og=function(e,t,n){var a=e?ca(e)?[e>>16,e>>8&bt,e&bt]:0:Ws.black,r,s,o,l,c,d,f,u,h,v;if(!a){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ws[e])a=Ws[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),s=e.charAt(2),o=e.charAt(3),e="#"+r+r+s+s+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return a=parseInt(e.substr(1,6),16),[a>>16,a>>8&bt,a&bt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),a=[e>>16,e>>8&bt,e&bt]}else if(e.substr(0,3)==="hsl"){if(a=v=e.match(vh),!t)l=+a[0]%360/360,c=+a[1]/100,d=+a[2]/100,s=d<=.5?d*(c+1):d+c-d*c,r=d*2-s,a.length>3&&(a[3]*=1),a[0]=Kc(l+1/3,r,s),a[1]=Kc(l,r,s),a[2]=Kc(l-1/3,r,s);else if(~e.indexOf("="))return a=e.match(Om),n&&a.length<4&&(a[3]=1),a}else a=e.match(vh)||Ws.transparent;a=a.map(Number)}return t&&!v&&(r=a[0]/bt,s=a[1]/bt,o=a[2]/bt,f=Math.max(r,s,o),u=Math.min(r,s,o),d=(f+u)/2,f===u?l=c=0:(h=f-u,c=d>.5?h/(2-f-u):h/(f+u),l=f===r?(s-o)/h+(s<o?6:0):f===s?(o-r)/h+2:(r-s)/h+4,l*=60),a[0]=~~(l+.5),a[1]=~~(c*100+.5),a[2]=~~(d*100+.5)),n&&a.length<4&&(a[3]=1),a},lg=function(e){var t=[],n=[],a=-1;return e.split(Va).forEach(function(r){var s=r.match(ns)||[];t.push.apply(t,s),n.push(a+=s.length+1)}),t.c=n,t},Sh=function(e,t,n){var a="",r=(e+a).match(Va),s=t?"hsla(":"rgba(",o=0,l,c,d,f;if(!r)return e;if(r=r.map(function(u){return(u=og(u,t,1))&&s+(t?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(d=lg(e),l=n.c,l.join(a)!==d.c.join(a)))for(c=e.replace(Va,"1").split(ns),f=c.length-1;o<f;o++)a+=c[o]+(~l.indexOf(o)?r.shift()||s+"0,0,0,0)":(d.length?d:r.length?r:n).shift());if(!c)for(c=e.split(Va),f=c.length-1;o<f;o++)a+=c[o]+r[o];return a+c[f]},Va=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ws)i+="|"+e+"\\b";return new RegExp(i+")","gi")}(),f_=/hsl[a]?\(/,cg=function(e){var t=e.join(" "),n;if(Va.lastIndex=0,Va.test(t))return n=f_.test(t),e[1]=Sh(e[1],n),e[0]=Sh(e[0],n,lg(e[1])),!0},vo,Yn=function(){var i=Date.now,e=500,t=33,n=i(),a=n,r=1e3/240,s=r,o=[],l,c,d,f,u,h,v=function m(p){var g=i()-a,_=p===!0,T,b,k,S;if((g>e||g<0)&&(n+=g-t),a+=g,k=a-n,T=k-s,(T>0||_)&&(S=++f.frame,u=k-f.time*1e3,f.time=k=k/1e3,s+=T+(T>=r?4:r-T),b=1),_||(l=c(m)),b)for(h=0;h<o.length;h++)o[h](k,u,S,p)};return f={time:0,frame:0,tick:function(){v(!0)},deltaRatio:function(p){return u/(1e3/(p||60))},wake:function(){Bm&&(!Yd&&lf()&&(Ii=Yd=window,cf=Ii.document||{},ni.gsap=Fn,(Ii.gsapVersions||(Ii.gsapVersions=[])).push(Fn.version),$m(ql||Ii.GreenSockGlobals||!Ii.gsap&&Ii||{}),rg.forEach(sg)),d=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=d||function(p){return setTimeout(p,s-f.time*1e3+1|0)},vo=1,v(2))},sleep:function(){(d?cancelAnimationFrame:clearTimeout)(l),vo=0,c=mo},lagSmoothing:function(p,g){e=p||1/0,t=Math.min(g||33,e)},fps:function(p){r=1e3/(p||240),s=f.time*1e3+r},add:function(p,g,_){var T=g?function(b,k,S,A){p(b,k,S,A),f.remove(T)}:p;return f.remove(p),o[_?"unshift":"push"](T),xs(),T},remove:function(p,g){~(g=o.indexOf(p))&&o.splice(g,1)&&h>=g&&h--},_listeners:o},f}(),xs=function(){return!vo&&Yn.wake()},at={},h_=/^[\d.\-M][\d.\-,\s]/,p_=/["']/g,m_=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),a=n[0],r=1,s=n.length,o,l,c;r<s;r++)l=n[r],o=r!==s-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[a]=isNaN(c)?c.replace(p_,"").trim():+c,a=l.substr(o+1).trim();return t},g_=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),a=e.indexOf("(",t);return e.substring(t,~a&&a<n?e.indexOf(")",n+1):n)},v_=function(e){var t=(e+"").split("("),n=at[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[m_(t[1])]:g_(e).split(",").map(Wm)):at._CE&&h_.test(e)?at._CE("",e):n},__=function(e){return function(t){return 1-e(1-t)}},Sr=function(e,t){return e&&(Nt(e)?e:at[e]||v_(e))||t},Lr=function(e,t,n,a){n===void 0&&(n=function(l){return 1-t(1-l)}),a===void 0&&(a=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:a},s;return Dn(e,function(o){at[o]=ni[o]=r,at[s=o.toLowerCase()]=n;for(var l in r)at[s+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=at[o+"."+l]=r[l]}),r},dg=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Xc=function i(e,t,n){var a=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),s=r/Xd*(Math.asin(1/a)||0),o=function(d){return d===1?1:a*Math.pow(2,-10*d)*H0((d-s)*r)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:dg(o);return r=Xd/r,l.config=function(c,d){return i(e,c,d)},l},Yc=function i(e,t){t===void 0&&(t=1.70158);var n=function(s){return s?--s*s*((t+1)*s+t)+1:0},a=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:dg(n);return a.config=function(r){return i(e,r)},a};Dn("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;Lr(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});at.Linear.easeNone=at.none=at.Linear.easeIn;Lr("Elastic",Xc("in"),Xc("out"),Xc());(function(i,e){var t=1/e,n=2*t,a=2.5*t,r=function(o){return o<t?i*o*o:o<n?i*Math.pow(o-1.5/e,2)+.75:o<a?i*(o-=2.25/e)*o+.9375:i*Math.pow(o-2.625/e,2)+.984375};Lr("Bounce",function(s){return 1-r(1-s)},r)})(7.5625,2.75);Lr("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});Lr("Circ",function(i){return-(Um(1-i*i)-1)});Lr("Sine",function(i){return i===1?1:-$0(i*F0)+1});Lr("Back",Yc("in"),Yc("out"),Yc());at.SteppedEase=at.steps=ni.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,a=e+(t?0:1),r=t?1:0,s=1-xt;return function(o){return((a*Do(0,s,o)|0)+r)*n}}};ho.ease=at["quad.out"];Dn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return ff+=i+","+i+"Params,"});var ug=function(e,t){this.id=B0++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Vm,this.set=t?t.getSetter:_f},_o=function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,bs(this,+t.duration,1,1),this.data=t.data,Tt&&(this._ctx=Tt,Tt.data.push(this)),vo||Yn.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,bs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,a){if(xs(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(kc(this,n),!r._dp||r.parent||Ym(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ni(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!a||this._initted&&Math.abs(this._zTime)===xt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),qm(this,n,a)),this},e.time=function(n,a){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+bh(this))%(this._dur+this._rDelay)||(n?this._dur:0),a):this._time},e.totalProgress=function(n,a){return arguments.length?this.totalTime(this.totalDuration()*n,a):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,a){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+bh(this),a):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,a){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,a):this._repeat?ys(this._tTime,r)+1:1},e.timeScale=function(n,a){if(!arguments.length)return this._rts===-xt?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Xl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-xt?0:this._rts,this.totalTime(Do(-Math.abs(this._delay),this.totalDuration(),r),a!==!1),xc(this),j0(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(xs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==xt&&(this._tTime-=xt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Rt(n);var a=this.parent||this._dp;return a&&(a._sort||!this.parent)&&Ni(a,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Pn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var a=this.parent||this._dp;return a?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Xl(a.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=X0);var a=dn;return dn=n,pf(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),dn=a,this},e.globalTime=function(n){for(var a=this,r=arguments.length?n:a.rawTime();a;)r=a._start+r/(Math.abs(a._ts)||1),a=a._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,xh(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var a=this._time;return this._rDelay=n,xh(this),a?this.time(a):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,a){return this.totalTime(ci(this,n),Pn(a))},e.restart=function(n,a){return this.play().totalTime(n?-this._delay:0,Pn(a)),this._dur||(this._zTime=-xt),this},e.play=function(n,a){return n!=null&&this.seek(n,a),this.reversed(!1).paused(!1)},e.reverse=function(n,a){return n!=null&&this.seek(n||this.totalDuration(),a),this.reversed(!0).paused(!1)},e.pause=function(n,a){return n!=null&&this.seek(n,a),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-xt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-xt,this},e.isActive=function(){var n=this.parent||this._dp,a=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=a&&r<this.endTime(!0)-xt)},e.eventCallback=function(n,a,r){var s=this.vars;return arguments.length>1?(a?(s[n]=a,r&&(s[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=a)):delete s[n],this):s[n]},e.then=function(n){var a=this,r=a._prom;return new Promise(function(s){var o=Nt(n)?n:Km,l=function(){var d=a.then;a.then=null,r&&r(),Nt(o)&&(o=o(a))&&(o.then||o===a)&&(a.then=d),s(o),a.then=d};a._initted&&a.totalProgress()===1&&a._ts>=0||!a._tTime&&a._ts<0?l():a._prom=l})},e.kill=function(){qs(this)},i}();ii(_o.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-xt,_prom:0,_ps:!1,_rts:1});var Cn=function(i){zm(e,i);function e(n,a){var r;return n===void 0&&(n={}),r=i.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Pn(n.sortChildren),Lt&&Ni(n.parent||Lt,ta(r),a),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Zm(ta(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(a,r,s){return ao(0,arguments,this),this},t.from=function(a,r,s){return ao(1,arguments,this),this},t.fromTo=function(a,r,s,o){return ao(2,arguments,this),this},t.set=function(a,r,s){return r.duration=0,r.parent=this,io(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Gt(a,r,ci(this,s),1),this},t.call=function(a,r,s){return Ni(this,Gt.delayedCall(0,a,r),s)},t.staggerTo=function(a,r,s,o,l,c,d){return s.duration=r,s.stagger=s.stagger||o,s.onComplete=c,s.onCompleteParams=d,s.parent=this,new Gt(a,s,ci(this,l)),this},t.staggerFrom=function(a,r,s,o,l,c,d){return s.runBackwards=1,io(s).immediateRender=Pn(s.immediateRender),this.staggerTo(a,r,s,o,l,c,d)},t.staggerFromTo=function(a,r,s,o,l,c,d,f){return o.startAt=s,io(o).immediateRender=Pn(o.immediateRender),this.staggerTo(a,r,o,l,c,d,f)},t.render=function(a,r,s){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,d=a<=0?0:Rt(a),f=this._zTime<0!=a<0&&(this._initted||!c),u,h,v,m,p,g,_,T,b,k,S,A;if(this!==Lt&&d>l&&a>=0&&(d=l),d!==this._tTime||s||f){if(o!==this._time&&c&&(d+=this._time-o,a+=this._time-o),u=d,b=this._start,T=this._ts,g=!T,f&&(c||(o=this._zTime),(a||!r)&&(this._zTime=a)),this._repeat){if(S=this._yoyo,p=c+this._rDelay,this._repeat<-1&&a<0)return this.totalTime(p*100+a,r,s);if(u=Rt(d%p),d===l?(m=this._repeat,u=c):(k=Rt(d/p),m=~~k,m&&m===k&&(u=c,m--),u>c&&(u=c)),k=ys(this._tTime,p),!o&&this._tTime&&k!==m&&this._tTime-k*p-this._dur<=0&&(k=m),S&&m&1&&(u=c-u,A=1),m!==k&&!this._lock){var x=S&&k&1,w=x===(S&&m&1);if(m<k&&(x=!x),o=x?0:d%c?c:d,this._lock=1,this.render(o||(A?0:Rt(m*p)),r,!c)._lock=0,this._tTime=d,!r&&this.parent&&jn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,k=m),o&&o!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,w&&(this._lock=2,o=x?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!g)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(_=n_(this,Rt(o),Rt(u)),_&&(d-=u-(u=_._start))),this._tTime=d,this._time=u,this._act=!!T,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=a,o=0),!o&&d&&c&&!r&&!k&&(jn(this,"onStart"),this._tTime!==d))return this;if(u>=o&&a>=0)for(h=this._first;h;){if(v=h._next,(h._act||u>=h._start)&&h._ts&&_!==h){if(h.parent!==this)return this.render(a,r,s);if(h.render(h._ts>0?(u-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(u-h._start)*h._ts,r,s),u!==this._time||!this._ts&&!g){_=0,v&&(d+=this._zTime=-xt);break}}h=v}else{h=this._last;for(var R=a<0?a:u;h;){if(v=h._prev,(h._act||R<=h._end)&&h._ts&&_!==h){if(h.parent!==this)return this.render(a,r,s);if(h.render(h._ts>0?(R-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(R-h._start)*h._ts,r,s||dn&&pf(h)),u!==this._time||!this._ts&&!g){_=0,v&&(d+=this._zTime=R?-xt:xt);break}}h=v}}if(_&&!r&&(this.pause(),_.render(u>=o?0:-xt)._zTime=u>=o?1:-1,this._ts))return this._start=b,xc(this),this.render(a,r,s);this._onUpdate&&!r&&jn(this,"onUpdate",!0),(d===l&&this._tTime>=this.totalDuration()||!d&&o)&&(b===this._start||Math.abs(T)!==Math.abs(this._ts))&&(this._lock||((a||!c)&&(d===l&&this._ts>0||!d&&this._ts<0)&&Ka(this,1),!r&&!(a<0&&!o)&&(d||o||!l)&&(jn(this,d===l&&a>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(a,r){var s=this;if(ca(r)||(r=ci(this,r,a)),!(a instanceof _o)){if(xn(a))return a.forEach(function(o){return s.add(o,r)}),this;if(on(a))return this.addLabel(a,r);if(Nt(a))a=Gt.delayedCall(0,a);else return this}return this!==a?Ni(this,a,r):this},t.getChildren=function(a,r,s,o){a===void 0&&(a=!0),r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=-fi);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Gt?r&&l.push(c):(s&&l.push(c),a&&l.push.apply(l,c.getChildren(!0,r,s)))),c=c._next;return l},t.getById=function(a){for(var r=this.getChildren(1,1,1),s=r.length;s--;)if(r[s].vars.id===a)return r[s]},t.remove=function(a){return on(a)?this.removeLabel(a):Nt(a)?this.killTweensOf(a):(a.parent===this&&bc(this,a),a===this._recent&&(this._recent=this._last),kr(this))},t.totalTime=function(a,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Rt(Yn.time-(this._ts>0?a/this._ts:(this.totalDuration()-a)/-this._ts))),i.prototype.totalTime.call(this,a,r),this._forcing=0,this):this._tTime},t.addLabel=function(a,r){return this.labels[a]=ci(this,r),this},t.removeLabel=function(a){return delete this.labels[a],this},t.addPause=function(a,r,s){var o=Gt.delayedCall(0,r||mo,s);return o.data="isPause",this._hasPause=1,Ni(this,o,ci(this,a))},t.removePause=function(a){var r=this._first;for(a=ci(this,a);r;)r._start===a&&r.data==="isPause"&&Ka(r),r=r._next},t.killTweensOf=function(a,r,s){for(var o=this.getTweensOf(a,s),l=o.length;l--;)Da!==o[l]&&o[l].kill(a,r);return this},t.getTweensOf=function(a,r){for(var s=[],o=hi(a),l=this._first,c=ca(r),d;l;)l instanceof Gt?Y0(l._targets,o)&&(c?(!Da||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&s.push(l):(d=l.getTweensOf(o,r)).length&&s.push.apply(s,d),l=l._next;return s},t.tweenTo=function(a,r){r=r||{};var s=this,o=ci(s,a),l=r,c=l.startAt,d=l.onStart,f=l.onStartParams,u=l.immediateRender,h,v=Gt.to(s,ii({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:s._time))/s.timeScale())||xt,onStart:function(){if(s.pause(),!h){var p=r.duration||Math.abs((o-(c&&"time"in c?c.time:s._time))/s.timeScale());v._dur!==p&&bs(v,p,0,1).render(v._time,!0,!0),h=1}d&&d.apply(v,f||[])}},r));return u?v.render(0):v},t.tweenFromTo=function(a,r,s){return this.tweenTo(r,ii({startAt:{time:ci(this,a)}},s))},t.recent=function(){return this._recent},t.nextLabel=function(a){return a===void 0&&(a=this._time),kh(this,ci(this,a))},t.previousLabel=function(a){return a===void 0&&(a=this._time),kh(this,ci(this,a),1)},t.currentLabel=function(a){return arguments.length?this.seek(a,!0):this.previousLabel(this._time+xt)},t.shiftChildren=function(a,r,s){s===void 0&&(s=0);var o=this._first,l=this.labels,c;for(a=Rt(a);o;)o._start>=s&&(o._start+=a,o._end+=a),o=o._next;if(r)for(c in l)l[c]>=s&&(l[c]+=a);return kr(this)},t.invalidate=function(a){var r=this._first;for(this._lock=0;r;)r.invalidate(a),r=r._next;return i.prototype.invalidate.call(this,a)},t.clear=function(a){a===void 0&&(a=!0);for(var r=this._first,s;r;)s=r._next,this.remove(r),r=s;return this._dp&&(this._time=this._tTime=this._pTime=0),a&&(this.labels={}),kr(this)},t.totalDuration=function(a){var r=0,s=this,o=s._last,l=fi,c,d,f;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-a:a));if(s._dirty){for(f=s.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),d=o._start,d>l&&s._sort&&o._ts&&!s._lock?(s._lock=1,Ni(s,o,d-o._delay,1)._lock=0):l=d,d<0&&o._ts&&(r-=d,(!f&&!s._dp||f&&f.smoothChildTiming)&&(s._start+=Rt(d/s._ts),s._time-=d,s._tTime-=d),s.shiftChildren(-d,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;bs(s,s===Lt&&s._time>r?s._time:r,1,1),s._dirty=0}return s._tDur},e.updateRoot=function(a){if(Lt._ts&&(qm(Lt,Xl(a,Lt)),Gm=Yn.frame),Yn.frame>=_h){_h+=ti.autoSleep||120;var r=Lt._first;if((!r||!r._ts)&&ti.autoSleep&&Yn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Yn.sleep()}}},e}(_o);ii(Cn.prototype,{_lock:0,_hasPause:0,_forcing:0});var y_=function(e,t,n,a,r,s,o){var l=new In(this._pt,e,t,0,1,vg,null,r),c=0,d=0,f,u,h,v,m,p,g,_;for(l.b=n,l.e=a,n+="",a+="",(g=~a.indexOf("random("))&&(a=go(a)),s&&(_=[n,a],s(_,e,t),n=_[0],a=_[1]),u=n.match(qc)||[];f=qc.exec(a);)v=f[0],m=a.substring(c,f.index),h?h=(h+1)%5:m.substr(-5)==="rgba("&&(h=1),v!==u[d++]&&(p=parseFloat(u[d-1])||0,l._pt={_next:l._pt,p:m||d===1?m:",",s:p,c:v.charAt(1)==="="?ls(p,v)-p:parseFloat(v)-p,m:h&&h<4?Math.round:0},c=qc.lastIndex);return l.c=c<a.length?a.substring(c,a.length):"",l.fp=o,(Fm.test(a)||g)&&(l.e=0),this._pt=l,l},mf=function(e,t,n,a,r,s,o,l,c,d){Nt(a)&&(a=a(r||0,e,s));var f=e[t],u=n!=="get"?n:Nt(f)?c?e[t.indexOf("set")||!Nt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,h=Nt(f)?c?M_:mg:vf,v;if(on(a)&&(~a.indexOf("random(")&&(a=go(a)),a.charAt(1)==="="&&(v=ls(u,a)+(bn(u)||0),(v||v===0)&&(a=v))),!d||u!==a||nu)return!isNaN(u*a)&&a!==""?(v=new In(this._pt,e,t,+u||0,a-(u||0),typeof f=="boolean"?w_:gg,0,h),c&&(v.fp=c),o&&v.modifier(o,this,e),this._pt=v):(!f&&!(t in e)&&df(t,a),y_.call(this,e,t,u,a,h,l||ti.stringFilter,c))},b_=function(e,t,n,a,r){if(Nt(e)&&(e=ro(e,r,t,n,a)),!Vi(e)||e.style&&e.nodeType||xn(e)||Nm(e))return on(e)?ro(e,r,t,n,a):e;var s={},o;for(o in e)s[o]=ro(e[o],r,t,n,a);return s},fg=function(e,t,n,a,r,s){var o,l,c,d;if(qn[e]&&(o=new qn[e]).init(r,o.rawVars?t[e]:b_(t[e],a,r,s,n),n,a,s)!==!1&&(n._pt=l=new In(n._pt,r,e,0,1,o.render,o,0,o.priority),n!==is))for(c=n._ptLookup[n._targets.indexOf(r)],d=o._props.length;d--;)c[o._props[d]]=l;return o},Da,nu,gf=function i(e,t,n){var a=e.vars,r=a.ease,s=a.startAt,o=a.immediateRender,l=a.lazy,c=a.onUpdate,d=a.runBackwards,f=a.yoyoEase,u=a.keyframes,h=a.autoRevert,v=e._dur,m=e._startAt,p=e._targets,g=e.parent,_=g&&g.data==="nested"?g.vars.targets:p,T=e._overwrite==="auto"&&!sf,b=e.timeline,k=a.easeReverse||f,S,A,x,w,R,L,U,B,C,H,D,P,Z;if(b&&(!u||!r)&&(r="none"),e._ease=Sr(r,ho.ease),e._rEase=k&&(Sr(k)||e._ease),e._from=!b&&!!a.runBackwards,e._from&&(e.ratio=1),!b||u&&!a.stagger){if(B=p[0]?xr(p[0]).harness:0,P=B&&a[B.prop],S=Kl(a,uf),m&&(m._zTime<0&&m.progress(1),t<0&&d&&o&&!h?m.render(-1,!0):m.revert(d&&v?Al:K0),m._lazy=0),s){if(Ka(e._startAt=Gt.set(p,ii({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!m&&Pn(l),startAt:null,delay:0,onUpdate:c&&function(){return jn(e,"onUpdate")},stagger:0},s))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(dn||!o&&!h)&&e._startAt.revert(Al),o&&v&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(d&&v&&!m){if(t&&(o=!1),x=ii({overwrite:!1,data:"isFromStart",lazy:o&&!m&&Pn(l),immediateRender:o,stagger:0,parent:g},S),P&&(x[B.prop]=P),Ka(e._startAt=Gt.set(p,x)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(dn?e._startAt.revert(Al):e._startAt.render(-1,!0)),e._zTime=t,!o)i(e._startAt,xt,xt);else if(!t)return}for(e._pt=e._ptCache=0,l=v&&Pn(l)||l&&!v,A=0;A<p.length;A++){if(R=p[A],U=R._gsap||hf(p)[A]._gsap,e._ptLookup[A]=H={},Zd[U.id]&&Ga.length&&Wl(),D=_===p?A:_.indexOf(R),B&&(C=new B).init(R,P||S,e,D,_)!==!1&&(e._pt=w=new In(e._pt,R,C.name,0,1,C.render,C,0,C.priority),C._props.forEach(function(V){H[V]=w}),C.priority&&(L=1)),!B||P)for(x in S)qn[x]&&(C=fg(x,S,e,D,R,_))?C.priority&&(L=1):H[x]=w=mf.call(e,R,x,"get",S[x],D,_,0,a.stringFilter);e._op&&e._op[A]&&e.kill(R,e._op[A]),T&&e._pt&&(Da=e,Lt.killTweensOf(R,H,e.globalTime(t)),Z=!e.parent,Da=0),e._pt&&l&&(Zd[U.id]=1)}L&&_g(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!Z,u&&t<=0&&b.render(fi,!0,!0)},x_=function(e,t,n,a,r,s,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],d,f,u,h;if(!c)for(c=e._ptCache[t]=[],u=e._ptLookup,h=e._targets.length;h--;){if(d=u[h][t],d&&d.d&&d.d._pt)for(d=d.d._pt;d&&d.p!==t&&d.fp!==t;)d=d._next;if(!d)return nu=1,e.vars[t]="+=0",gf(e,o),nu=0,l?po(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(d)}for(h=c.length;h--;)f=c[h],d=f._pt||f,d.s=(a||a===0)&&!r?a:d.s+(a||0)+s*d.c,d.c=n-d.s,f.e&&(f.e=Bt(n)+bn(f.e)),f.b&&(f.b=d.s+bn(f.b))},k_=function(e,t){var n=e[0]?xr(e[0]).harness:0,a=n&&n.aliases,r,s,o,l;if(!a)return t;r=_s({},t);for(s in a)if(s in r)for(l=a[s].split(","),o=l.length;o--;)r[l[o]]=r[s];return r},S_=function(e,t,n,a){var r=t.ease||a||"power1.inOut",s,o;if(xn(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:r})});else for(s in t)o=n[s]||(n[s]=[]),s==="ease"||o.push({t:parseFloat(e),v:t[s],e:r})},ro=function(e,t,n,a,r){return Nt(e)?e.call(t,n,a,r):on(e)&&~e.indexOf("random(")?go(e):e},hg=ff+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",pg={};Dn(hg+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return pg[i]=1});var Gt=function(i){zm(e,i);function e(n,a,r,s){var o;typeof a=="number"&&(r.duration=a,a=r,r=null),o=i.call(this,s?a:io(a))||this;var l=o.vars,c=l.duration,d=l.delay,f=l.immediateRender,u=l.stagger,h=l.overwrite,v=l.keyframes,m=l.defaults,p=l.scrollTrigger,g=a.parent||Lt,_=(xn(n)||Nm(n)?ca(n[0]):"length"in a)?[n]:hi(n),T,b,k,S,A,x,w,R;if(o._targets=_.length?hf(_):po("GSAP target "+n+" not found. https://gsap.com",!ti.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=h,v||u||Xo(c)||Xo(d)){a=o.vars;var L=a.easeReverse||a.yoyoEase;if(T=o.timeline=new Cn({data:"nested",defaults:m||{},targets:g&&g.data==="nested"?g.vars.targets:_}),T.kill(),T.parent=T._dp=ta(o),T._start=0,u||Xo(c)||Xo(d)){if(S=_.length,w=u&&eg(u),Vi(u))for(A in u)~hg.indexOf(A)&&(R||(R={}),R[A]=u[A]);for(b=0;b<S;b++)k=Kl(a,pg),k.stagger=0,L&&(k.easeReverse=L),R&&_s(k,R),x=_[b],k.duration=+ro(c,ta(o),b,x,_),k.delay=(+ro(d,ta(o),b,x,_)||0)-o._delay,!u&&S===1&&k.delay&&(o._delay=d=k.delay,o._start+=d,k.delay=0),T.to(x,k,w?w(b,x,_):0),T._ease=at.none;T.duration()?c=d=0:o.timeline=0}else if(v){io(ii(T.vars.defaults,{ease:"none"})),T._ease=Sr(v.ease||a.ease||"none");var U=0,B,C,H;if(xn(v))v.forEach(function(D){return T.to(_,D,">")}),T.duration();else{k={};for(A in v)A==="ease"||A==="easeEach"||S_(A,v[A],k,v.easeEach);for(A in k)for(B=k[A].sort(function(D,P){return D.t-P.t}),U=0,b=0;b<B.length;b++)C=B[b],H={ease:C.e,duration:(C.t-(b?B[b-1].t:0))/100*c},H[A]=C.v,T.to(_,H,U),U+=H.duration;T.duration()<c&&T.to({},{duration:c-T.duration()})}}c||o.duration(c=T.duration())}else o.timeline=0;return h===!0&&!sf&&(Da=ta(o),Lt.killTweensOf(_),Da=0),Ni(g,ta(o),r),a.reversed&&o.reverse(),a.paused&&o.paused(!0),(f||!c&&!v&&o._start===Rt(g._time)&&Pn(f)&&Q0(ta(o))&&g.data!=="nested")&&(o._tTime=-xt,o.render(Math.max(0,-d)||0)),p&&Zm(ta(o),p),o}var t=e.prototype;return t.render=function(a,r,s){var o=this._time,l=this._tDur,c=this._dur,d=a<0,f=a>l-xt&&!d?l:a<xt?0:a,u,h,v,m,p,g,_,T;if(!c)t_(this,a,r,s);else if(f!==this._tTime||!a||s||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==d||this._lazy){if(u=f,T=this.timeline,this._repeat){if(m=c+this._rDelay,this._repeat<-1&&d)return this.totalTime(m*100+a,r,s);if(u=Rt(f%m),f===l?(v=this._repeat,u=c):(p=Rt(f/m),v=~~p,v&&v===p?(u=c,v--):u>c&&(u=c)),g=this._yoyo&&v&1,g&&(u=c-u),p=ys(this._tTime,m),u===o&&!s&&this._initted&&v===p)return this._tTime=f,this;v!==p&&this.vars.repeatRefresh&&!g&&!this._lock&&u!==m&&this._initted&&(this._lock=s=1,this.render(Rt(m*v),!0).invalidate()._lock=0)}if(!this._initted){if(Jm(this,d?a:u,s,r,f))return this._tTime=0,this;if(o!==this._time&&!(s&&this.vars.repeatRefresh&&v!==p))return this;if(c!==this._dur)return this.render(a,r,s)}if(this._rEase){var b=u<o;if(b!==this._inv){var k=b?o:c-o;this._inv=b,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=k?(b?-1:1)/k:0,this._invScale=b?-this.ratio:1-this.ratio,this._invEase=b?this._rEase:this._ease}this.ratio=_=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=_=this._ease(u/c);if(this._from&&(this.ratio=_=1-_),this._tTime=f,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&f&&!r&&!p&&(jn(this,"onStart"),this._tTime!==f))return this;for(h=this._pt;h;)h.r(_,h.d),h=h._next;T&&T.render(a<0?a:T._dur*T._ease(u/this._dur),r,s)||this._startAt&&(this._zTime=a),this._onUpdate&&!r&&(d&&Jd(this,a,r,s),jn(this,"onUpdate")),this._repeat&&v!==p&&this.vars.onRepeat&&!r&&this.parent&&jn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(d&&!this._onUpdate&&Jd(this,a,!0,!0),(a||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Ka(this,1),!r&&!(d&&!o)&&(f||o||g)&&(jn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(a){return(!a||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(a),i.prototype.invalidate.call(this,a)},t.resetTo=function(a,r,s,o,l){vo||Yn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),d;return this._initted||gf(this,c),d=this._ease(c/this._dur),x_(this,a,r,s,o,d,c,l)?this.resetTo(a,r,s,o,1):(kc(this,0),this.parent||Xm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(a,r){if(r===void 0&&(r="all"),!a&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?qs(this):this.scrollTrigger&&this.scrollTrigger.kill(!!dn),this;if(this.timeline){var s=this.timeline.totalDuration();return this.timeline.killTweensOf(a,r,Da&&Da.vars.overwrite!==!0)._first||qs(this),this.parent&&s!==this.timeline.totalDuration()&&bs(this,this._dur*this.timeline._tDur/s,0,1),this}var o=this._targets,l=a?hi(a):o,c=this._ptLookup,d=this._pt,f,u,h,v,m,p,g;if((!r||r==="all")&&J0(o,l))return r==="all"&&(this._pt=0),qs(this);for(f=this._op=this._op||[],r!=="all"&&(on(r)&&(m={},Dn(r,function(_){return m[_]=1}),r=m),r=k_(o,r)),g=o.length;g--;)if(~l.indexOf(o[g])){u=c[g],r==="all"?(f[g]=r,v=u,h={}):(h=f[g]=f[g]||{},v=r);for(m in v)p=u&&u[m],p&&((!("kill"in p.d)||p.d.kill(m)===!0)&&bc(this,p,"_pt"),delete u[m]),h!=="all"&&(h[m]=1)}return this._initted&&!this._pt&&d&&qs(this),this},e.to=function(a,r){return new e(a,r,arguments[2])},e.from=function(a,r){return ao(1,arguments)},e.delayedCall=function(a,r,s,o){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:a,onComplete:r,onReverseComplete:r,onCompleteParams:s,onReverseCompleteParams:s,callbackScope:o})},e.fromTo=function(a,r,s){return ao(2,arguments)},e.set=function(a,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(a,r)},e.killTweensOf=function(a,r,s){return Lt.killTweensOf(a,r,s)},e}(_o);ii(Gt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Dn("staggerTo,staggerFrom,staggerFromTo",function(i){Gt[i]=function(){var e=new Cn,t=Qd.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var vf=function(e,t,n){return e[t]=n},mg=function(e,t,n){return e[t](n)},M_=function(e,t,n,a){return e[t](a.fp,n)},E_=function(e,t,n){return e.setAttribute(t,n)},_f=function(e,t){return Nt(e[t])?mg:of(e[t])&&e.setAttribute?E_:vf},gg=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},w_=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},vg=function(e,t){var n=t._pt,a="";if(!e&&t.b)a=t.b;else if(e===1&&t.e)a=t.e;else{for(;n;)a=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+a,n=n._next;a+=t.c}t.set(t.t,t.p,a,t)},yf=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},T_=function(e,t,n,a){for(var r=this._pt,s;r;)s=r._next,r.p===a&&r.modifier(e,t,n),r=s},A_=function(e){for(var t=this._pt,n,a;t;)a=t._next,t.p===e&&!t.op||t.op===e?bc(this,t,"_pt"):t.dep||(n=1),t=a;return!n},R_=function(e,t,n,a){a.mSet(e,t,a.m.call(a.tween,n,a.mt),a)},_g=function(e){for(var t=e._pt,n,a,r,s;t;){for(n=t._next,a=r;a&&a.pr>t.pr;)a=a._next;(t._prev=a?a._prev:s)?t._prev._next=t:r=t,(t._next=a)?a._prev=t:s=t,t=n}e._pt=r},In=function(){function i(t,n,a,r,s,o,l,c,d){this.t=n,this.s=r,this.c=s,this.p=a,this.r=o||gg,this.d=l||this,this.set=c||vf,this.pr=d||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,a,r){this.mSet=this.mSet||this.set,this.set=R_,this.m=n,this.mt=r,this.tween=a},i}();Dn(ff+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(i){return uf[i]=1});ni.TweenMax=ni.TweenLite=Gt;ni.TimelineLite=ni.TimelineMax=Cn;Lt=new Cn({sortChildren:!1,defaults:ho,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ti.stringFilter=cg;var Mr=[],Ll={},L_=[],Mh=0,C_=0,Zc=function(e){return(Ll[e]||L_).map(function(t){return t()})},iu=function(){var e=Date.now(),t=[];e-Mh>2&&(Zc("matchMediaInit"),Mr.forEach(function(n){var a=n.queries,r=n.conditions,s,o,l,c;for(o in a)s=Ii.matchMedia(a[o]).matches,s&&(l=1),s!==r[o]&&(r[o]=s,c=1);c&&(n.revert(),l&&t.push(n))}),Zc("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(a){return n.add(null,a)})}),Mh=e,Zc("matchMedia"))},yg=function(){function i(t,n){this.selector=n&&eu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=C_++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,a,r){Nt(n)&&(r=a,a=n,n=Nt);var s=this,o=function(){var c=Tt,d=s.selector,f;return c&&c!==s&&c.data.push(s),r&&(s.selector=eu(r)),Tt=s,f=a.apply(s,arguments),Nt(f)&&s._r.push(f),Tt=c,s.selector=d,s.isReverted=!1,f};return s.last=o,n===Nt?o(s,function(l){return s.add(null,l)}):n?s[n]=o:o},e.ignore=function(n){var a=Tt;Tt=null,n(this),Tt=a},e.getTweens=function(){var n=[];return this.data.forEach(function(a){return a instanceof i?n.push.apply(n,a.getTweens()):a instanceof Gt&&!(a.parent&&a.parent.data==="nested")&&n.push(a)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,a){var r=this;if(n?function(){for(var o=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(d){return o.splice(o.indexOf(d),1)}));for(o.map(function(d){return{g:d._dur||d._delay||d._sat&&!d._sat.vars.immediateRender?d.globalTime(0):-1/0,t:d}}).sort(function(d,f){return f.g-d.g||-1/0}).forEach(function(d){return d.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof Cn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Gt)&&c.revert&&c.revert(n);r._r.forEach(function(d){return d(n,r)}),r.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),a)for(var s=Mr.length;s--;)Mr[s].id===this.id&&Mr.splice(s,1)},e.revert=function(n){this.kill(n||{})},i}(),P_=function(){function i(t){this.contexts=[],this.scope=t,Tt&&Tt.data.push(this)}var e=i.prototype;return e.add=function(n,a,r){Vi(n)||(n={matches:n});var s=new yg(0,r||this.scope),o=s.conditions={},l,c,d;Tt&&!s.selector&&(s.selector=Tt.selector),this.contexts.push(s),a=s.add("onMatch",a),s.queries=n;for(c in n)c==="all"?d=1:(l=Ii.matchMedia(n[c]),l&&(Mr.indexOf(s)<0&&Mr.push(s),(o[c]=l.matches)&&(d=1),l.addListener?l.addListener(iu):l.addEventListener("change",iu)));return d&&a(s,function(f){return s.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(a){return a.kill(n,!0)})},i}(),Yl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(a){return sg(a)})},timeline:function(e){return new Cn(e)},getTweensOf:function(e,t){return Lt.getTweensOf(e,t)},getProperty:function(e,t,n,a){on(e)&&(e=hi(e)[0]);var r=xr(e||{}).get,s=n?Km:Wm;return n==="native"&&(n=""),e&&(t?s((qn[t]&&qn[t].get||r)(e,t,n,a)):function(o,l,c){return s((qn[o]&&qn[o].get||r)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=hi(e),e.length>1){var a=e.map(function(d){return Fn.quickSetter(d,t,n)}),r=a.length;return function(d){for(var f=r;f--;)a[f](d)}}e=e[0]||{};var s=qn[t],o=xr(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=s?function(d){var f=new s;is._pt=0,f.init(e,n?d+n:d,is,0,[e]),f.render(1,f),is._pt&&yf(1,is)}:o.set(e,l);return s?c:function(d){return c(e,l,n?d+n:d,o,1)}},quickTo:function(e,t,n){var a,r=Fn.to(e,ii((a={},a[t]="+=0.1",a.paused=!0,a.stagger=0,a),n||{})),s=function(l,c,d){return r.resetTo(t,l,c,d)};return s.tween=r,s},isTweening:function(e){return Lt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Sr(e.ease,ho.ease)),yh(ho,e||{})},config:function(e){return yh(ti,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,a=e.plugins,r=e.defaults,s=e.extendTimeline;(a||"").split(",").forEach(function(o){return o&&!qn[o]&&!ni[o]&&po(t+" effect requires "+o+" plugin.")}),Wc[t]=function(o,l,c){return n(hi(o),ii(l||{},r),c)},s&&(Cn.prototype[t]=function(o,l,c){return this.add(Wc[t](o,Vi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){at[e]=Sr(t)},parseEase:function(e,t){return arguments.length?Sr(e,t):at},getById:function(e){return Lt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Cn(e),a,r;for(n.smoothChildTiming=Pn(e.smoothChildTiming),Lt.remove(n),n._dp=0,n._time=n._tTime=Lt._time,a=Lt._first;a;)r=a._next,(t||!(!a._dur&&a instanceof Gt&&a.vars.onComplete===a._targets[0]))&&Ni(n,a,a._start-a._delay),a=r;return Ni(Lt,n,0),n},context:function(e,t){return e?new yg(e,t):Tt},matchMedia:function(e){return new P_(e)},matchMediaRefresh:function(){return Mr.forEach(function(e){var t=e.conditions,n,a;for(a in t)t[a]&&(t[a]=!1,n=1);n&&e.revert()})||iu()},addEventListener:function(e,t){var n=Ll[e]||(Ll[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Ll[e],a=n&&n.indexOf(t);a>=0&&n.splice(a,1)},utils:{wrap:c_,wrapYoyo:d_,distribute:eg,random:ng,snap:tg,normalize:l_,getUnit:bn,clamp:a_,splitColor:og,toArray:hi,selector:eu,mapRange:ag,pipe:s_,unitize:o_,interpolate:u_,shuffle:Qm},install:$m,effects:Wc,ticker:Yn,updateRoot:Cn.updateRoot,plugins:qn,globalTimeline:Lt,core:{PropTween:In,globals:Hm,Tween:Gt,Timeline:Cn,Animation:_o,getCache:xr,_removeLinkedListItem:bc,reverting:function(){return dn},context:function(e){return e&&Tt&&(Tt.data.push(e),e._ctx=Tt),Tt},suppressOverwrites:function(e){return sf=e}}};Dn("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return Yl[i]=Gt[i]});Yn.add(Cn.updateRoot);is=Yl.to({},{duration:0});var D_=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},I_=function(e,t){var n=e._targets,a,r,s;for(a in t)for(r=n.length;r--;)s=e._ptLookup[r][a],s&&(s=s.d)&&(s._pt&&(s=D_(s,a)),s&&s.modifier&&s.modifier(t[a],e,n[r],a))},Jc=function(e,t){return{name:e,headless:1,rawVars:1,init:function(a,r,s){s._onInit=function(o){var l,c;if(on(r)&&(l={},Dn(r,function(d){return l[d]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}I_(o,r)}}}},Fn=Yl.registerPlugin({name:"attr",init:function(e,t,n,a,r){var s,o,l;this.tween=n;for(s in t)l=e.getAttribute(s)||"",o=this.add(e,"setAttribute",(l||0)+"",t[s],a,r,0,0,s),o.op=s,o.b=l,this._props.push(s)},render:function(e,t){for(var n=t._pt;n;)dn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Jc("roundProps",tu),Jc("modifiers"),Jc("snap",tg))||Yl;Gt.version=Cn.version=Fn.version="3.15.0";Bm=1;lf()&&xs();at.Power0;at.Power1;at.Power2;at.Power3;at.Power4;at.Linear;at.Quad;at.Cubic;at.Quart;at.Quint;at.Strong;at.Elastic;at.Back;at.SteppedEase;at.Bounce;at.Sine;at.Expo;at.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Eh,Ia,cs,bf,vr,wh,xf,z_=function(){return typeof window<"u"},da={},ur=180/Math.PI,ds=Math.PI/180,Ur=Math.atan2,Th=1e8,kf=/([A-Z])/g,U_=/(left|right|width|margin|padding|x)/i,N_=/[\s,\(]\S/,Oi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},au=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},O_=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},F_=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},B_=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},$_=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},bg=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},xg=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},H_=function(e,t,n){return e.style[t]=n},G_=function(e,t,n){return e.style.setProperty(t,n)},V_=function(e,t,n){return e._gsap[t]=n},q_=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},W_=function(e,t,n,a,r){var s=e._gsap;s.scaleX=s.scaleY=n,s.renderTransform(r,s)},K_=function(e,t,n,a,r){var s=e._gsap;s[t]=n,s.renderTransform(r,s)},Pt="transform",zn=Pt+"Origin",X_=function i(e,t){var n=this,a=this.target,r=a.style,s=a._gsap;if(e in da&&r){if(this.tfm=this.tfm||{},e!=="transform")e=Oi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=ia(a,o)}):this.tfm[e]=s.x?s[e]:ia(a,e),e===zn&&(this.tfm.zOrigin=s.zOrigin);else return Oi.transform.split(",").forEach(function(o){return i.call(n,o,t)});if(this.props.indexOf(Pt)>=0)return;s.svg&&(this.svgo=a.getAttribute("data-svg-origin"),this.props.push(zn,t,"")),e=Pt}(r||t)&&this.props.push(e,t,r[e])},kg=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Y_=function(){var e=this.props,t=this.target,n=t.style,a=t._gsap,r,s;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(kf,"-$1").toLowerCase());if(this.tfm){for(s in this.tfm)a[s]=this.tfm[s];a.svg&&(a.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=xf(),(!r||!r.isStart)&&!n[Pt]&&(kg(n),a.zOrigin&&n[zn]&&(n[zn]+=" "+a.zOrigin+"px",a.zOrigin=0,a.renderTransform()),a.uncache=1)}},Sg=function(e,t){var n={target:e,props:[],revert:Y_,save:X_};return e._gsap||Fn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(a){return n.save(a)}),n},Mg,ru=function(e,t){var n=Ia.createElementNS?Ia.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ia.createElement(e);return n&&n.style?n:Ia.createElement(e)},Qn=function i(e,t,n){var a=getComputedStyle(e);return a[t]||a.getPropertyValue(t.replace(kf,"-$1").toLowerCase())||a.getPropertyValue(t)||!n&&i(e,ks(t)||t,1)||""},Ah="O,Moz,ms,Ms,Webkit".split(","),ks=function(e,t,n){var a=t||vr,r=a.style,s=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);s--&&!(Ah[s]+e in r););return s<0?null:(s===3?"ms":s>=0?Ah[s]:"")+e},su=function(){z_()&&window.document&&(Eh=window,Ia=Eh.document,cs=Ia.documentElement,vr=ru("div")||{style:{}},ru("div"),Pt=ks(Pt),zn=Pt+"Origin",vr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Mg=!!ks("perspective"),xf=Fn.core.reverting,bf=1)},Rh=function(e){var t=e.ownerSVGElement,n=ru("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),a=e.cloneNode(!0),r;a.style.display="block",n.appendChild(a),cs.appendChild(n);try{r=a.getBBox()}catch{}return n.removeChild(a),cs.removeChild(n),r},Lh=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Eg=function(e){var t,n;try{t=e.getBBox()}catch{t=Rh(e),n=1}return t&&(t.width||t.height)||n||(t=Rh(e)),t&&!t.width&&!t.x&&!t.y?{x:+Lh(e,["x","cx","x1"])||0,y:+Lh(e,["y","cy","y1"])||0,width:0,height:0}:t},wg=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Eg(e))},Xa=function(e,t){if(t){var n=e.style,a;t in da&&t!==zn&&(t=Pt),n.removeProperty?(a=t.substr(0,2),(a==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(a==="--"?t:t.replace(kf,"-$1").toLowerCase())):n.removeAttribute(t)}},za=function(e,t,n,a,r,s){var o=new In(e._pt,t,n,0,1,s?xg:bg);return e._pt=o,o.b=a,o.e=r,e._props.push(n),o},Ch={deg:1,rad:1,turn:1},Z_={grid:1,flex:1},Ya=function i(e,t,n,a){var r=parseFloat(n)||0,s=(n+"").trim().substr((r+"").length)||"px",o=vr.style,l=U_.test(t),c=e.tagName.toLowerCase()==="svg",d=(c?"client":"offset")+(l?"Width":"Height"),f=100,u=a==="px",h=a==="%",v,m,p,g;if(a===s||!r||Ch[a]||Ch[s])return r;if(s!=="px"&&!u&&(r=i(e,t,n,"px")),g=e.getCTM&&wg(e),(h||s==="%")&&(da[t]||~t.indexOf("adius")))return v=g?e.getBBox()[l?"width":"height"]:e[d],Bt(h?r/v*f:r/100*v);if(o[l?"width":"height"]=f+(u?s:a),m=a!=="rem"&&~t.indexOf("adius")||a==="em"&&e.appendChild&&!c?e:e.parentNode,g&&(m=(e.ownerSVGElement||{}).parentNode),(!m||m===Ia||!m.appendChild)&&(m=Ia.body),p=m._gsap,p&&h&&p.width&&l&&p.time===Yn.time&&!p.uncache)return Bt(r/p.width*f);if(h&&(t==="height"||t==="width")){var _=e.style[t];e.style[t]=f+a,v=e[d],_?e.style[t]=_:Xa(e,t)}else(h||s==="%")&&!Z_[Qn(m,"display")]&&(o.position=Qn(e,"position")),m===e&&(o.position="static"),m.appendChild(vr),v=vr[d],m.removeChild(vr),o.position="absolute";return l&&h&&(p=xr(m),p.time=Yn.time,p.width=m[d]),Bt(u?v*r/f:v&&r?f/v*r:0)},ia=function(e,t,n,a){var r;return bf||su(),t in Oi&&t!=="transform"&&(t=Oi[t],~t.indexOf(",")&&(t=t.split(",")[0])),da[t]&&t!=="transform"?(r=bo(e,a),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:Jl(Qn(e,zn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||a||~(r+"").indexOf("calc("))&&(r=Zl[t]&&Zl[t](e,t,n)||Qn(e,t)||Vm(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Ya(e,t,r,n)+n:r},J_=function(e,t,n,a){if(!n||n==="none"){var r=ks(t,e,1),s=r&&Qn(e,r,1);s&&s!==n?(t=r,n=s):t==="borderColor"&&(n=Qn(e,"borderTopColor"))}var o=new In(this._pt,e.style,t,0,1,vg),l=0,c=0,d,f,u,h,v,m,p,g,_,T,b,k;if(o.b=n,o.e=a,n+="",a+="",a.substring(0,6)==="var(--"&&(a=Qn(e,a.substring(4,a.indexOf(")")))),a==="auto"&&(m=e.style[t],e.style[t]=a,a=Qn(e,t)||a,m?e.style[t]=m:Xa(e,t)),d=[n,a],cg(d),n=d[0],a=d[1],u=n.match(ns)||[],k=a.match(ns)||[],k.length){for(;f=ns.exec(a);)p=f[0],_=a.substring(l,f.index),v?v=(v+1)%5:(_.substr(-5)==="rgba("||_.substr(-5)==="hsla(")&&(v=1),p!==(m=u[c++]||"")&&(h=parseFloat(m)||0,b=m.substr((h+"").length),p.charAt(1)==="="&&(p=ls(h,p)+b),g=parseFloat(p),T=p.substr((g+"").length),l=ns.lastIndex-T.length,T||(T=T||ti.units[t]||b,l===a.length&&(a+=T,o.e+=T)),b!==T&&(h=Ya(e,t,m,T)||0),o._pt={_next:o._pt,p:_||c===1?_:",",s:h,c:g-h,m:v&&v<4||t==="zIndex"?Math.round:0});o.c=l<a.length?a.substring(l,a.length):""}else o.r=t==="display"&&a==="none"?xg:bg;return Fm.test(a)&&(o.e=0),this._pt=o,o},Ph={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},j_=function(e){var t=e.split(" "),n=t[0],a=t[1]||"50%";return(n==="top"||n==="bottom"||a==="left"||a==="right")&&(e=n,n=a,a=e),t[0]=Ph[n]||n,t[1]=Ph[a]||a,t.join(" ")},Q_=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,a=n.style,r=t.u,s=n._gsap,o,l,c;if(r==="all"||r===!0)a.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],da[o]&&(l=1,o=o==="transformOrigin"?zn:Pt),Xa(n,o);l&&(Xa(n,Pt),s&&(s.svg&&n.removeAttribute("transform"),a.scale=a.rotate=a.translate="none",bo(n,1),s.uncache=1,kg(a)))}},Zl={clearProps:function(e,t,n,a,r){if(r.data!=="isFromStart"){var s=e._pt=new In(e._pt,t,n,0,0,Q_);return s.u=a,s.pr=-10,s.tween=r,e._props.push(n),1}}},yo=[1,0,0,1,0,0],Tg={},Ag=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Dh=function(e){var t=Qn(e,Pt);return Ag(t)?yo:t.substr(7).match(Om).map(Bt)},Sf=function(e,t){var n=e._gsap||xr(e),a=e.style,r=Dh(e),s,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?yo:r):(r===yo&&!e.offsetParent&&e!==cs&&!n.svg&&(l=a.display,a.display="block",s=e.parentNode,(!s||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,cs.appendChild(e)),r=Dh(e),l?a.display=l:Xa(e,"display"),c&&(o?s.insertBefore(e,o):s?s.appendChild(e):cs.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},ou=function(e,t,n,a,r,s){var o=e._gsap,l=r||Sf(e,!0),c=o.xOrigin||0,d=o.yOrigin||0,f=o.xOffset||0,u=o.yOffset||0,h=l[0],v=l[1],m=l[2],p=l[3],g=l[4],_=l[5],T=t.split(" "),b=parseFloat(T[0])||0,k=parseFloat(T[1])||0,S,A,x,w;n?l!==yo&&(A=h*p-v*m)&&(x=b*(p/A)+k*(-m/A)+(m*_-p*g)/A,w=b*(-v/A)+k*(h/A)-(h*_-v*g)/A,b=x,k=w):(S=Eg(e),b=S.x+(~T[0].indexOf("%")?b/100*S.width:b),k=S.y+(~(T[1]||T[0]).indexOf("%")?k/100*S.height:k)),a||a!==!1&&o.smooth?(g=b-c,_=k-d,o.xOffset=f+(g*h+_*m)-g,o.yOffset=u+(g*v+_*p)-_):o.xOffset=o.yOffset=0,o.xOrigin=b,o.yOrigin=k,o.smooth=!!a,o.origin=t,o.originIsAbsolute=!!n,e.style[zn]="0px 0px",s&&(za(s,o,"xOrigin",c,b),za(s,o,"yOrigin",d,k),za(s,o,"xOffset",f,o.xOffset),za(s,o,"yOffset",u,o.yOffset)),e.setAttribute("data-svg-origin",b+" "+k)},bo=function(e,t){var n=e._gsap||new ug(e);if("x"in n&&!t&&!n.uncache)return n;var a=e.style,r=n.scaleX<0,s="px",o="deg",l=getComputedStyle(e),c=Qn(e,zn)||"0",d,f,u,h,v,m,p,g,_,T,b,k,S,A,x,w,R,L,U,B,C,H,D,P,Z,V,ee,ae,fe,Me,Ne,Ie;return d=f=u=m=p=g=_=T=b=0,h=v=1,n.svg=!!(e.getCTM&&wg(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(a[Pt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Pt]!=="none"?l[Pt]:"")),a.scale=a.rotate=a.translate="none"),A=Sf(e,n.svg),n.svg&&(n.uncache?(Z=e.getBBox(),c=n.xOrigin-Z.x+"px "+(n.yOrigin-Z.y)+"px",P=""):P=!t&&e.getAttribute("data-svg-origin"),ou(e,P||c,!!P||n.originIsAbsolute,n.smooth!==!1,A)),k=n.xOrigin||0,S=n.yOrigin||0,A!==yo&&(L=A[0],U=A[1],B=A[2],C=A[3],d=H=A[4],f=D=A[5],A.length===6?(h=Math.sqrt(L*L+U*U),v=Math.sqrt(C*C+B*B),m=L||U?Ur(U,L)*ur:0,_=B||C?Ur(B,C)*ur+m:0,_&&(v*=Math.abs(Math.cos(_*ds))),n.svg&&(d-=k-(k*L+S*B),f-=S-(k*U+S*C))):(Ie=A[6],Me=A[7],ee=A[8],ae=A[9],fe=A[10],Ne=A[11],d=A[12],f=A[13],u=A[14],x=Ur(Ie,fe),p=x*ur,x&&(w=Math.cos(-x),R=Math.sin(-x),P=H*w+ee*R,Z=D*w+ae*R,V=Ie*w+fe*R,ee=H*-R+ee*w,ae=D*-R+ae*w,fe=Ie*-R+fe*w,Ne=Me*-R+Ne*w,H=P,D=Z,Ie=V),x=Ur(-B,fe),g=x*ur,x&&(w=Math.cos(-x),R=Math.sin(-x),P=L*w-ee*R,Z=U*w-ae*R,V=B*w-fe*R,Ne=C*R+Ne*w,L=P,U=Z,B=V),x=Ur(U,L),m=x*ur,x&&(w=Math.cos(x),R=Math.sin(x),P=L*w+U*R,Z=H*w+D*R,U=U*w-L*R,D=D*w-H*R,L=P,H=Z),p&&Math.abs(p)+Math.abs(m)>359.9&&(p=m=0,g=180-g),h=Bt(Math.sqrt(L*L+U*U+B*B)),v=Bt(Math.sqrt(D*D+Ie*Ie)),x=Ur(H,D),_=Math.abs(x)>2e-4?x*ur:0,b=Ne?1/(Ne<0?-Ne:Ne):0),n.svg&&(P=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Ag(Qn(e,Pt)),P&&e.setAttribute("transform",P))),Math.abs(_)>90&&Math.abs(_)<270&&(r?(h*=-1,_+=m<=0?180:-180,m+=m<=0?180:-180):(v*=-1,_+=_<=0?180:-180)),t=t||n.uncache,n.x=d-((n.xPercent=d&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-d)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+s,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+s,n.z=u+s,n.scaleX=Bt(h),n.scaleY=Bt(v),n.rotation=Bt(m)+o,n.rotationX=Bt(p)+o,n.rotationY=Bt(g)+o,n.skewX=_+o,n.skewY=T+o,n.transformPerspective=b+s,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(a[zn]=Jl(c)),n.xOffset=n.yOffset=0,n.force3D=ti.force3D,n.renderTransform=n.svg?ty:Mg?Rg:ey,n.uncache=0,n},Jl=function(e){return(e=e.split(" "))[0]+" "+e[1]},jc=function(e,t,n){var a=bn(t);return Bt(parseFloat(t)+parseFloat(Ya(e,"x",n+"px",a)))+a},ey=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Rg(e,t)},nr="0deg",zs="0px",ir=") ",Rg=function(e,t){var n=t||this,a=n.xPercent,r=n.yPercent,s=n.x,o=n.y,l=n.z,c=n.rotation,d=n.rotationY,f=n.rotationX,u=n.skewX,h=n.skewY,v=n.scaleX,m=n.scaleY,p=n.transformPerspective,g=n.force3D,_=n.target,T=n.zOrigin,b="",k=g==="auto"&&e&&e!==1||g===!0;if(T&&(f!==nr||d!==nr)){var S=parseFloat(d)*ds,A=Math.sin(S),x=Math.cos(S),w;S=parseFloat(f)*ds,w=Math.cos(S),s=jc(_,s,A*w*-T),o=jc(_,o,-Math.sin(S)*-T),l=jc(_,l,x*w*-T+T)}p!==zs&&(b+="perspective("+p+ir),(a||r)&&(b+="translate("+a+"%, "+r+"%) "),(k||s!==zs||o!==zs||l!==zs)&&(b+=l!==zs||k?"translate3d("+s+", "+o+", "+l+") ":"translate("+s+", "+o+ir),c!==nr&&(b+="rotate("+c+ir),d!==nr&&(b+="rotateY("+d+ir),f!==nr&&(b+="rotateX("+f+ir),(u!==nr||h!==nr)&&(b+="skew("+u+", "+h+ir),(v!==1||m!==1)&&(b+="scale("+v+", "+m+ir),_.style[Pt]=b||"translate(0, 0)"},ty=function(e,t){var n=t||this,a=n.xPercent,r=n.yPercent,s=n.x,o=n.y,l=n.rotation,c=n.skewX,d=n.skewY,f=n.scaleX,u=n.scaleY,h=n.target,v=n.xOrigin,m=n.yOrigin,p=n.xOffset,g=n.yOffset,_=n.forceCSS,T=parseFloat(s),b=parseFloat(o),k,S,A,x,w;l=parseFloat(l),c=parseFloat(c),d=parseFloat(d),d&&(d=parseFloat(d),c+=d,l+=d),l||c?(l*=ds,c*=ds,k=Math.cos(l)*f,S=Math.sin(l)*f,A=Math.sin(l-c)*-u,x=Math.cos(l-c)*u,c&&(d*=ds,w=Math.tan(c-d),w=Math.sqrt(1+w*w),A*=w,x*=w,d&&(w=Math.tan(d),w=Math.sqrt(1+w*w),k*=w,S*=w)),k=Bt(k),S=Bt(S),A=Bt(A),x=Bt(x)):(k=f,x=u,S=A=0),(T&&!~(s+"").indexOf("px")||b&&!~(o+"").indexOf("px"))&&(T=Ya(h,"x",s,"px"),b=Ya(h,"y",o,"px")),(v||m||p||g)&&(T=Bt(T+v-(v*k+m*A)+p),b=Bt(b+m-(v*S+m*x)+g)),(a||r)&&(w=h.getBBox(),T=Bt(T+a/100*w.width),b=Bt(b+r/100*w.height)),w="matrix("+k+","+S+","+A+","+x+","+T+","+b+")",h.setAttribute("transform",w),_&&(h.style[Pt]=w)},ny=function(e,t,n,a,r){var s=360,o=on(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?ur:1),c=l-a,d=a+c+"deg",f,u;return o&&(f=r.split("_")[1],f==="short"&&(c%=s,c!==c%(s/2)&&(c+=c<0?s:-s)),f==="cw"&&c<0?c=(c+s*Th)%s-~~(c/s)*s:f==="ccw"&&c>0&&(c=(c-s*Th)%s-~~(c/s)*s)),e._pt=u=new In(e._pt,t,n,a,c,O_),u.e=d,u.u="deg",e._props.push(n),u},Ih=function(e,t){for(var n in t)e[n]=t[n];return e},iy=function(e,t,n){var a=Ih({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",s=n.style,o,l,c,d,f,u,h,v;a.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),s[Pt]=t,o=bo(n,1),Xa(n,Pt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Pt],s[Pt]=t,o=bo(n,1),s[Pt]=c);for(l in da)c=a[l],d=o[l],c!==d&&r.indexOf(l)<0&&(h=bn(c),v=bn(d),f=h!==v?Ya(n,l,c,v):parseFloat(c),u=parseFloat(d),e._pt=new In(e._pt,o,l,f,u-f,au),e._pt.u=v||0,e._props.push(l));Ih(o,a)};Dn("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",a="Bottom",r="Left",s=(e<3?[t,n,a,r]:[t+r,t+n,a+n,a+r]).map(function(o){return e<2?i+o:"border"+o+i});Zl[e>1?"border"+i:i]=function(o,l,c,d,f){var u,h;if(arguments.length<4)return u=s.map(function(v){return ia(o,v,c)}),h=u.join(" "),h.split(u[0]).length===5?u[0]:h;u=(d+"").split(" "),h={},s.forEach(function(v,m){return h[v]=u[m]=u[m]||u[(m-1)/2|0]}),o.init(l,h,f)}});var Lg={name:"css",register:su,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,a,r){var s=this._props,o=e.style,l=n.vars.startAt,c,d,f,u,h,v,m,p,g,_,T,b,k,S,A,x,w;bf||su(),this.styles=this.styles||Sg(e),x=this.styles.props,this.tween=n;for(m in t)if(m!=="autoRound"&&(d=t[m],!(qn[m]&&fg(m,t,n,a,e,r)))){if(h=typeof d,v=Zl[m],h==="function"&&(d=d.call(n,a,e,r),h=typeof d),h==="string"&&~d.indexOf("random(")&&(d=go(d)),v)v(this,e,m,d,n)&&(A=1);else if(m.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(m)+"").trim(),d+="",Va.lastIndex=0,Va.test(c)||(p=bn(c),g=bn(d),g?p!==g&&(c=Ya(e,m,c,g)+g):p&&(d+=p)),this.add(o,"setProperty",c,d,a,r,0,0,m),s.push(m),x.push(m,0,o[m]);else if(h!=="undefined"){if(l&&m in l?(c=typeof l[m]=="function"?l[m].call(n,a,e,r):l[m],on(c)&&~c.indexOf("random(")&&(c=go(c)),bn(c+"")||c==="auto"||(c+=ti.units[m]||bn(ia(e,m))||""),(c+"").charAt(1)==="="&&(c=ia(e,m))):c=ia(e,m),u=parseFloat(c),_=h==="string"&&d.charAt(1)==="="&&d.substr(0,2),_&&(d=d.substr(2)),f=parseFloat(d),m in Oi&&(m==="autoAlpha"&&(u===1&&ia(e,"visibility")==="hidden"&&f&&(u=0),x.push("visibility",0,o.visibility),za(this,o,"visibility",u?"inherit":"hidden",f?"inherit":"hidden",!f)),m!=="scale"&&m!=="transform"&&(m=Oi[m],~m.indexOf(",")&&(m=m.split(",")[0]))),T=m in da,T){if(this.styles.save(m),w=d,h==="string"&&d.substring(0,6)==="var(--"){if(d=Qn(e,d.substring(4,d.indexOf(")"))),d.substring(0,5)==="calc("){var R=e.style.perspective;e.style.perspective=d,d=Qn(e,"perspective"),R?e.style.perspective=R:Xa(e,"perspective")}f=parseFloat(d)}if(b||(k=e._gsap,k.renderTransform&&!t.parseTransform||bo(e,t.parseTransform),S=t.smoothOrigin!==!1&&k.smooth,b=this._pt=new In(this._pt,o,Pt,0,1,k.renderTransform,k,0,-1),b.dep=1),m==="scale")this._pt=new In(this._pt,k,"scaleY",k.scaleY,(_?ls(k.scaleY,_+f):f)-k.scaleY||0,au),this._pt.u=0,s.push("scaleY",m),m+="X";else if(m==="transformOrigin"){x.push(zn,0,o[zn]),d=j_(d),k.svg?ou(e,d,0,S,0,this):(g=parseFloat(d.split(" ")[2])||0,g!==k.zOrigin&&za(this,k,"zOrigin",k.zOrigin,g),za(this,o,m,Jl(c),Jl(d)));continue}else if(m==="svgOrigin"){ou(e,d,1,S,0,this);continue}else if(m in Tg){ny(this,k,m,u,_?ls(u,_+d):d);continue}else if(m==="smoothOrigin"){za(this,k,"smooth",k.smooth,d);continue}else if(m==="force3D"){k[m]=d;continue}else if(m==="transform"){iy(this,d,e);continue}}else m in o||(m=ks(m)||m);if(T||(f||f===0)&&(u||u===0)&&!N_.test(d)&&m in o)p=(c+"").substr((u+"").length),f||(f=0),g=bn(d)||(m in ti.units?ti.units[m]:p),p!==g&&(u=Ya(e,m,c,g)),this._pt=new In(this._pt,T?k:o,m,u,(_?ls(u,_+f):f)-u,!T&&(g==="px"||m==="zIndex")&&t.autoRound!==!1?$_:au),this._pt.u=g||0,T&&w!==d?(this._pt.b=c,this._pt.e=w,this._pt.r=B_):p!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=F_);else if(m in o)J_.call(this,e,m,c,_?_+d:d);else if(m in e)this.add(e,m,c||e[m],_?_+d:d,a,r);else if(m!=="parseTransform"){df(m,d);continue}T||(m in o?x.push(m,0,o[m]):typeof e[m]=="function"?x.push(m,2,e[m]()):x.push(m,1,c||e[m])),s.push(m)}}A&&_g(this)},render:function(e,t){if(t.tween._time||!xf())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:ia,aliases:Oi,getSetter:function(e,t,n){var a=Oi[t];return a&&a.indexOf(",")<0&&(t=a),t in da&&t!==zn&&(e._gsap.x||ia(e,"x"))?n&&wh===n?t==="scale"?q_:V_:(wh=n||{})&&(t==="scale"?W_:K_):e.style&&!of(e.style[t])?H_:~t.indexOf("-")?G_:_f(e,t)},core:{_removeProperty:Xa,_getMatrix:Sf}};Fn.utils.checkPrefix=ks;Fn.core.getStyleSaver=Sg;(function(i,e,t,n){var a=Dn(i+","+e+","+t,function(r){da[r]=1});Dn(e,function(r){ti.units[r]="deg",Tg[r]=1}),Oi[a[13]]=i+","+e,Dn(n,function(r){var s=r.split(":");Oi[s[1]]=a[s[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Dn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){ti.units[i]="px"});Fn.registerPlugin(Lg);var ua=Fn.registerPlugin(Lg)||Fn;ua.core.Tween;ua.matchMedia();function Io(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}const zh=new WeakMap;function ay(i,e){const t=zh.get(i)??{current:i.textContent??"",tween:null};if(t.current===e)return;if(t.current=e,zh.set(i,t),Io()){i.textContent=e;return}t.tween?.kill();const n=i.textContent??"";i.innerHTML="";const a=document.createElement("span");a.style.cssText="display:inline-block; position:relative; overflow:hidden; vertical-align:bottom;";const r=document.createElement("span");r.textContent=n,r.style.cssText="display:block;";const s=document.createElement("span");s.textContent=e,s.style.cssText="display:block; position:absolute; left:0; top:100%;",a.append(r,s),i.appendChild(a),t.tween=ua.to([r,s],{yPercent:-100,duration:.32,ease:"power2.out",onComplete:()=>{i.textContent=e,t.tween=null}})}function Cg(i){if(Io())return;const e=Array.from(i.children).slice(0,8);e.length&&ua.fromTo(e,{autoAlpha:0,y:10},{autoAlpha:1,y:0,duration:.34,ease:"power2.out",stagger:.045,overwrite:!0,clearProps:"transform"})}function Mf(i){Io()||!i.length||ua.fromTo(i,{autoAlpha:0,x:-8},{autoAlpha:1,x:0,duration:.28,ease:"power2.out",stagger:.03,overwrite:!0,clearProps:"transform"})}function Sc(i){Io()||ua.fromTo(i,{scale:1},{scale:.97,duration:.07,yoyo:!0,repeat:1,ease:"power1.inOut",overwrite:!0,clearProps:"scale"})}function ry(i,e){if(Io()){e();return}ua.to(i,{autoAlpha:0,duration:.12,ease:"power1.in",onComplete:()=>{ua.set(i,{clearProps:"all"}),e()}})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ef="186",sy=0,Uh=1,oy=2,Cl=1,ly=2,Ks=3,wr=0,Un=1,Mi=2,sa=0,so=1,Nh=2,Oh=3,Fh=4,cy=5,es=100,dy=101,uy=102,fy=103,hy=104,py=200,my=201,gy=202,vy=203,Pg=204,Dg=205,_y=206,yy=207,by=208,xy=209,ky=210,Sy=211,My=212,Ey=213,wy=214,lu=0,cu=1,du=2,xo=3,uu=4,fu=5,hu=6,pu=7,wf=0,Ty=1,Ay=2,Gi=0,Ig=1,zg=2,Ug=3,Ng=4,Og=5,Fg=6,Bg=7,$g=300,Tr=301,Ss=302,Qc=303,ed=304,Mc=306,mu=1e3,aa=1001,gu=1002,Zt=1003,Ry=1004,Yo=1005,cn=1006,td=1007,Ua=1008,Zn=1009,Hg=1010,Gg=1011,ko=1012,Tf=1013,qi=1014,Fi=1015,Wi=1016,Af=1017,Rf=1018,So=1020,Vg=35902,qg=35899,Wg=1021,Kg=1022,wi=1023,fa=1026,_r=1027,Xg=1028,Lf=1029,Ar=1030,Cf=1031,Pf=1033,Pl=33776,Dl=33777,Il=33778,zl=33779,vu=35840,_u=35841,yu=35842,bu=35843,xu=36196,ku=37492,Su=37496,Mu=37488,Eu=37489,jl=37490,wu=37491,Tu=37808,Au=37809,Ru=37810,Lu=37811,Cu=37812,Pu=37813,Du=37814,Iu=37815,zu=37816,Uu=37817,Nu=37818,Ou=37819,Fu=37820,Bu=37821,$u=36492,Hu=36494,Gu=36495,Vu=36283,qu=36284,Ql=36285,Wu=36286,Ly=3200,Ku=0,Cy=1,Ca="",Wn="srgb",ec="srgb-linear",tc="linear",mt="srgb",nd=7680,Py=519,Dy=512,Iy=513,zy=514,Df=515,Uy=516,Ny=517,If=518,Oy=519,Fy=35044,Bh="300 es",Bi=2e3,Mo=2001;function By(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Eo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function $y(){const i=Eo("canvas");return i.style.display="block",i}const $h={};function Hh(...i){const e="THREE."+i.shift();console.log(e,...i)}function Yg(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function He(...i){i=Yg(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function ct(...i){i=Yg(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function us(...i){const e=i.join(" ");e in $h||($h[e]=!0,He(...i))}function Hy(i,e,t){return new Promise(function(n,a){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:a();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Gy={[lu]:cu,[du]:hu,[uu]:pu,[xo]:fu,[cu]:lu,[hu]:du,[pu]:uu,[fu]:xo};class Cr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const a=n[e];if(a!==void 0){const r=a.indexOf(t);r!==-1&&a.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const a=n.slice(0);for(let r=0,s=a.length;r<s;r++)a[r].call(this,e);e.target=null}}}const gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ul=Math.PI/180,Xu=180/Math.PI;function zo(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gn[i&255]+gn[i>>8&255]+gn[i>>16&255]+gn[i>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[t&63|128]+gn[t>>8&255]+"-"+gn[t>>16&255]+gn[t>>24&255]+gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]).toLowerCase()}function it(i,e,t){return Math.max(e,Math.min(t,i))}function Vy(i,e){return(i%e+e)%e}function id(i,e,t){return(1-t)*i+t*e}function qy(i){return i*Ul}function Us(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function An(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Wy={degToRad:qy};class rt{static{rt.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6],this.y=a[1]*t+a[4]*n+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),a=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*n-s*a+e.x,this.y=r*a+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ws{constructor(e=0,t=0,n=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=a}static slerpFlat(e,t,n,a,r,s,o){let l=n[a+0],c=n[a+1],d=n[a+2],f=n[a+3],u=r[s+0],h=r[s+1],v=r[s+2],m=r[s+3];if(f!==m||l!==u||c!==h||d!==v){let p=l*u+c*h+d*v+f*m;p<0&&(u=-u,h=-h,v=-v,m=-m,p=-p);let g=1-o;if(p<.9995){const _=Math.acos(p),T=Math.sin(_);g=Math.sin(g*_)/T,o=Math.sin(o*_)/T,l=l*g+u*o,c=c*g+h*o,d=d*g+v*o,f=f*g+m*o}else{l=l*g+u*o,c=c*g+h*o,d=d*g+v*o,f=f*g+m*o;const _=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=_,c*=_,d*=_,f*=_}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,a,r,s){const o=n[a],l=n[a+1],c=n[a+2],d=n[a+3],f=r[s],u=r[s+1],h=r[s+2],v=r[s+3];return e[t]=o*v+d*f+l*h-c*u,e[t+1]=l*v+d*u+c*f-o*h,e[t+2]=c*v+d*h+o*u-l*f,e[t+3]=d*v-o*f-l*u-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,a){return this._x=e,this._y=t,this._z=n,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,a=e._y,r=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(a/2),f=o(r/2),u=l(n/2),h=l(a/2),v=l(r/2);switch(s){case"XYZ":this._x=u*d*f+c*h*v,this._y=c*h*f-u*d*v,this._z=c*d*v+u*h*f,this._w=c*d*f-u*h*v;break;case"YXZ":this._x=u*d*f+c*h*v,this._y=c*h*f-u*d*v,this._z=c*d*v-u*h*f,this._w=c*d*f+u*h*v;break;case"ZXY":this._x=u*d*f-c*h*v,this._y=c*h*f+u*d*v,this._z=c*d*v+u*h*f,this._w=c*d*f-u*h*v;break;case"ZYX":this._x=u*d*f-c*h*v,this._y=c*h*f+u*d*v,this._z=c*d*v-u*h*f,this._w=c*d*f+u*h*v;break;case"YZX":this._x=u*d*f+c*h*v,this._y=c*h*f+u*d*v,this._z=c*d*v-u*h*f,this._w=c*d*f-u*h*v;break;case"XZY":this._x=u*d*f-c*h*v,this._y=c*h*f-u*d*v,this._z=c*d*v+u*h*f,this._w=c*d*f+u*h*v;break;default:He("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,a=Math.sin(n);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],a=t[4],r=t[8],s=t[1],o=t[5],l=t[9],c=t[2],d=t[6],f=t[10],u=n+o+f;if(u>0){const h=.5/Math.sqrt(u+1);this._w=.25/h,this._x=(d-l)*h,this._y=(r-c)*h,this._z=(s-a)*h}else if(n>o&&n>f){const h=2*Math.sqrt(1+n-o-f);this._w=(d-l)/h,this._x=.25*h,this._y=(a+s)/h,this._z=(r+c)/h}else if(o>f){const h=2*Math.sqrt(1+o-n-f);this._w=(r-c)/h,this._x=(a+s)/h,this._y=.25*h,this._z=(l+d)/h}else{const h=2*Math.sqrt(1+f-n-o);this._w=(s-a)/h,this._x=(r+c)/h,this._y=(l+d)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const a=Math.min(1,t/n);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,a=e._y,r=e._z,s=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+s*o+a*c-r*l,this._y=a*d+s*l+r*o-n*c,this._z=r*d+s*c+n*l-a*o,this._w=s*d-n*o-a*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,a=e._y,r=e._z,s=e._w,o=this.dot(e);o<0&&(n=-n,a=-a,r=-r,s=-s,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+n*t,this._y=this._y*l+a*t,this._z=this._z*l+r*t,this._w=this._w*l+s*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+a*t,this._z=this._z*l+r*t,this._w=this._w*l+s*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),a=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(a*Math.sin(e),a*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{static{Y.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Gh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,a=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*a,this.y=r[1]*t+r[4]*n+r[7]*a,this.z=r[2]*t+r[5]*n+r[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,a=this.z,r=e.elements,s=1/(r[3]*t+r[7]*n+r[11]*a+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*a+r[12])*s,this.y=(r[1]*t+r[5]*n+r[9]*a+r[13])*s,this.z=(r[2]*t+r[6]*n+r[10]*a+r[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,a=this.z,r=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*a-o*n),d=2*(o*t-r*a),f=2*(r*n-s*t);return this.x=t+l*c+s*f-o*d,this.y=n+l*d+o*c-r*f,this.z=a+l*f+r*d-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,a=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*a,this.y=r[1]*t+r[5]*n+r[9]*a,this.z=r[2]*t+r[6]*n+r[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,a=e.y,r=e.z,s=t.x,o=t.y,l=t.z;return this.x=a*l-r*o,this.y=r*s-n*l,this.z=n*o-a*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ad.copy(this).projectOnVector(e),this.sub(ad)}reflect(e){return this.sub(ad.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,a=this.z-e.z;return t*t+n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const a=Math.sin(t)*e;return this.x=a*Math.sin(n),this.y=Math.cos(t)*e,this.z=a*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ad=new Y,Gh=new ws;class We{static{We.prototype.isMatrix3=!0}constructor(e,t,n,a,r,s,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,a,r,s,o,l,c)}set(e,t,n,a,r,s,o,l,c){const d=this.elements;return d[0]=e,d[1]=a,d[2]=o,d[3]=t,d[4]=r,d[5]=l,d[6]=n,d[7]=s,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,a=t.elements,r=this.elements,s=n[0],o=n[3],l=n[6],c=n[1],d=n[4],f=n[7],u=n[2],h=n[5],v=n[8],m=a[0],p=a[3],g=a[6],_=a[1],T=a[4],b=a[7],k=a[2],S=a[5],A=a[8];return r[0]=s*m+o*_+l*k,r[3]=s*p+o*T+l*S,r[6]=s*g+o*b+l*A,r[1]=c*m+d*_+f*k,r[4]=c*p+d*T+f*S,r[7]=c*g+d*b+f*A,r[2]=u*m+h*_+v*k,r[5]=u*p+h*T+v*S,r[8]=u*g+h*b+v*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],a=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*s*d-t*o*c-n*r*d+n*o*l+a*r*c-a*s*l}invert(){const e=this.elements,t=e[0],n=e[1],a=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=d*s-o*c,u=o*l-d*r,h=c*r-s*l,v=t*f+n*u+a*h;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/v;return e[0]=f*m,e[1]=(a*c-d*n)*m,e[2]=(o*n-a*s)*m,e[3]=u*m,e[4]=(d*t-a*l)*m,e[5]=(a*r-o*t)*m,e[6]=h*m,e[7]=(n*l-c*t)*m,e[8]=(s*t-n*r)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,a,r,s,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*s+c*o)+s+e,-a*c,a*l,-a*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return us("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(rd.makeScale(e,t)),this}rotate(e){return us("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(rd.makeRotation(-e)),this}translate(e,t){return us("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(rd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let a=0;a<9;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const rd=new We,Vh=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qh=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ky(){const i={enabled:!0,workingColorSpace:ec,spaces:{},convert:function(a,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===mt&&(a.r=oa(a.r),a.g=oa(a.g),a.b=oa(a.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[r].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===mt&&(a.r=fs(a.r),a.g=fs(a.g),a.b=fs(a.b))),a},workingToColorSpace:function(a,r){return this.convert(a,this.workingColorSpace,r)},colorSpaceToWorking:function(a,r){return this.convert(a,r,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Ca?tc:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,r=this.workingColorSpace){return a.fromArray(this.spaces[r].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,r,s){return a.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,r){return us("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(a,r)},toWorkingColorSpace:function(a,r){return us("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(a,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ec]:{primaries:e,whitePoint:n,transfer:tc,toXYZ:Vh,fromXYZ:qh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Wn},outputColorSpaceConfig:{drawingBufferColorSpace:Wn}},[Wn]:{primaries:e,whitePoint:n,transfer:mt,toXYZ:Vh,fromXYZ:qh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Wn}}}),i}const nt=Ky();function oa(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function fs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Nr;class Xy{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Nr===void 0&&(Nr=Eo("canvas")),Nr.width=e.width,Nr.height=e.height;const a=Nr.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),n=Nr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Eo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const a=n.getImageData(0,0,e.width,e.height),r=a.data;for(let s=0;s<r.length;s++)r[s]=oa(r[s]/255)*255;return n.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(oa(t[n]/255)*255):t[n]=oa(t[n]);return{data:t,width:e.width,height:e.height}}else return He("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Yy=0;class zf{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Yy++}),this.uuid=zo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},a=this.data;if(a!==null){let r;if(Array.isArray(a)){r=[];for(let s=0,o=a.length;s<o;s++)a[s].isDataTexture?r.push(sd(a[s].image)):r.push(sd(a[s]))}else r=sd(a);n.url=r}return t||(e.images[this.uuid]=n),n}}function sd(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Xy.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(He("Texture: Unable to serialize Texture."),{})}let Zy=0;const od=new Y;class un extends Cr{constructor(e=un.DEFAULT_IMAGE,t=un.DEFAULT_MAPPING,n=aa,a=aa,r=cn,s=Ua,o=wi,l=Zn,c=un.DEFAULT_ANISOTROPY,d=Ca){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zy++}),this.uuid=zo(),this.name="",this.source=new zf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=a,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(od).x}get height(){return this.source.getSize(od).y}get depth(){return this.source.getSize(od).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){He(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){He(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&n&&a.isVector2&&n.isVector2||a&&n&&a.isVector3&&n.isVector3||a&&n&&a.isMatrix3&&n.isMatrix3?a.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$g)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mu:e.x=e.x-Math.floor(e.x);break;case aa:e.x=e.x<0?0:1;break;case gu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case mu:e.y=e.y-Math.floor(e.y);break;case aa:e.y=e.y<0?0:1;break;case gu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=$g;un.DEFAULT_ANISOTROPY=1;class Dt{static{Dt.prototype.isVector4=!0}constructor(e=0,t=0,n=0,a=1){this.x=e,this.y=t,this.z=n,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,a){return this.x=e,this.y=t,this.z=n,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,a=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*a+s[12]*r,this.y=s[1]*t+s[5]*n+s[9]*a+s[13]*r,this.z=s[2]*t+s[6]*n+s[10]*a+s[14]*r,this.w=s[3]*t+s[7]*n+s[11]*a+s[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,a,r;const l=e.elements,c=l[0],d=l[4],f=l[8],u=l[1],h=l[5],v=l[9],m=l[2],p=l[6],g=l[10];if(Math.abs(d-u)<.01&&Math.abs(f-m)<.01&&Math.abs(v-p)<.01){if(Math.abs(d+u)<.1&&Math.abs(f+m)<.1&&Math.abs(v+p)<.1&&Math.abs(c+h+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,b=(h+1)/2,k=(g+1)/2,S=(d+u)/4,A=(f+m)/4,x=(v+p)/4;return T>b&&T>k?T<.01?(n=0,a=.707106781,r=.707106781):(n=Math.sqrt(T),a=S/n,r=A/n):b>k?b<.01?(n=.707106781,a=0,r=.707106781):(a=Math.sqrt(b),n=S/a,r=x/a):k<.01?(n=.707106781,a=.707106781,r=0):(r=Math.sqrt(k),n=A/r,a=x/r),this.set(n,a,r,t),this}let _=Math.sqrt((p-v)*(p-v)+(f-m)*(f-m)+(u-d)*(u-d));return Math.abs(_)<.001&&(_=1),this.x=(p-v)/_,this.y=(f-m)/_,this.z=(u-d)/_,this.w=Math.acos((c+h+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this.w=it(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this.w=it(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Jy extends Cr{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Dt(0,0,e,t),this.scissorTest=!1,this.viewport=new Dt(0,0,e,t),this.textures=[];const a={width:e,height:t,depth:n.depth},r=new un(a),s=n.count;for(let o=0;o<s;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:cn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let a=0,r=this.textures.length;a<r;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=n,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new zf(a)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ti extends Jy{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Zg extends un{constructor(e=null,t=1,n=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=aa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class jy extends un{constructor(e=null,t=1,n=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=aa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class wt{static{wt.prototype.isMatrix4=!0}constructor(e,t,n,a,r,s,o,l,c,d,f,u,h,v,m,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,a,r,s,o,l,c,d,f,u,h,v,m,p)}set(e,t,n,a,r,s,o,l,c,d,f,u,h,v,m,p){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=a,g[1]=r,g[5]=s,g[9]=o,g[13]=l,g[2]=c,g[6]=d,g[10]=f,g[14]=u,g[3]=h,g[7]=v,g[11]=m,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,a=1/Or.setFromMatrixColumn(e,0).length(),r=1/Or.setFromMatrixColumn(e,1).length(),s=1/Or.setFromMatrixColumn(e,2).length();return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,a=e.y,r=e.z,s=Math.cos(n),o=Math.sin(n),l=Math.cos(a),c=Math.sin(a),d=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const u=s*d,h=s*f,v=o*d,m=o*f;t[0]=l*d,t[4]=-l*f,t[8]=c,t[1]=h+v*c,t[5]=u-m*c,t[9]=-o*l,t[2]=m-u*c,t[6]=v+h*c,t[10]=s*l}else if(e.order==="YXZ"){const u=l*d,h=l*f,v=c*d,m=c*f;t[0]=u+m*o,t[4]=v*o-h,t[8]=s*c,t[1]=s*f,t[5]=s*d,t[9]=-o,t[2]=h*o-v,t[6]=m+u*o,t[10]=s*l}else if(e.order==="ZXY"){const u=l*d,h=l*f,v=c*d,m=c*f;t[0]=u-m*o,t[4]=-s*f,t[8]=v+h*o,t[1]=h+v*o,t[5]=s*d,t[9]=m-u*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const u=s*d,h=s*f,v=o*d,m=o*f;t[0]=l*d,t[4]=v*c-h,t[8]=u*c+m,t[1]=l*f,t[5]=m*c+u,t[9]=h*c-v,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const u=s*l,h=s*c,v=o*l,m=o*c;t[0]=l*d,t[4]=m-u*f,t[8]=v*f+h,t[1]=f,t[5]=s*d,t[9]=-o*d,t[2]=-c*d,t[6]=h*f+v,t[10]=u-m*f}else if(e.order==="XZY"){const u=s*l,h=s*c,v=o*l,m=o*c;t[0]=l*d,t[4]=-f,t[8]=c*d,t[1]=u*f+m,t[5]=s*d,t[9]=h*f-v,t[2]=v*f-h,t[6]=o*d,t[10]=m*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Qy,e,eb)}lookAt(e,t,n){const a=this.elements;return $n.subVectors(e,t),$n.lengthSq()===0&&($n.z=1),$n.normalize(),ba.crossVectors(n,$n),ba.lengthSq()===0&&(Math.abs(n.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),ba.crossVectors(n,$n)),ba.normalize(),Zo.crossVectors($n,ba),a[0]=ba.x,a[4]=Zo.x,a[8]=$n.x,a[1]=ba.y,a[5]=Zo.y,a[9]=$n.y,a[2]=ba.z,a[6]=Zo.z,a[10]=$n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,a=t.elements,r=this.elements,s=n[0],o=n[4],l=n[8],c=n[12],d=n[1],f=n[5],u=n[9],h=n[13],v=n[2],m=n[6],p=n[10],g=n[14],_=n[3],T=n[7],b=n[11],k=n[15],S=a[0],A=a[4],x=a[8],w=a[12],R=a[1],L=a[5],U=a[9],B=a[13],C=a[2],H=a[6],D=a[10],P=a[14],Z=a[3],V=a[7],ee=a[11],ae=a[15];return r[0]=s*S+o*R+l*C+c*Z,r[4]=s*A+o*L+l*H+c*V,r[8]=s*x+o*U+l*D+c*ee,r[12]=s*w+o*B+l*P+c*ae,r[1]=d*S+f*R+u*C+h*Z,r[5]=d*A+f*L+u*H+h*V,r[9]=d*x+f*U+u*D+h*ee,r[13]=d*w+f*B+u*P+h*ae,r[2]=v*S+m*R+p*C+g*Z,r[6]=v*A+m*L+p*H+g*V,r[10]=v*x+m*U+p*D+g*ee,r[14]=v*w+m*B+p*P+g*ae,r[3]=_*S+T*R+b*C+k*Z,r[7]=_*A+T*L+b*H+k*V,r[11]=_*x+T*U+b*D+k*ee,r[15]=_*w+T*B+b*P+k*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],a=e[8],r=e[12],s=e[1],o=e[5],l=e[9],c=e[13],d=e[2],f=e[6],u=e[10],h=e[14],v=e[3],m=e[7],p=e[11],g=e[15],_=l*h-c*u,T=o*h-c*f,b=o*u-l*f,k=s*h-c*d,S=s*u-l*d,A=s*f-o*d;return t*(m*_-p*T+g*b)-n*(v*_-p*k+g*S)+a*(v*T-m*k+g*A)-r*(v*b-m*S+p*A)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],a=e[8],r=e[1],s=e[5],o=e[9],l=e[2],c=e[6],d=e[10];return t*(s*d-o*c)-n*(r*d-o*l)+a*(r*c-s*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],a=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=e[9],u=e[10],h=e[11],v=e[12],m=e[13],p=e[14],g=e[15],_=t*o-n*s,T=t*l-a*s,b=t*c-r*s,k=n*l-a*o,S=n*c-r*o,A=a*c-r*l,x=d*m-f*v,w=d*p-u*v,R=d*g-h*v,L=f*p-u*m,U=f*g-h*m,B=u*g-h*p,C=_*B-T*U+b*L+k*R-S*w+A*x;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/C;return e[0]=(o*B-l*U+c*L)*H,e[1]=(a*U-n*B-r*L)*H,e[2]=(m*A-p*S+g*k)*H,e[3]=(u*S-f*A-h*k)*H,e[4]=(l*R-s*B-c*w)*H,e[5]=(t*B-a*R+r*w)*H,e[6]=(p*b-v*A-g*T)*H,e[7]=(d*A-u*b+h*T)*H,e[8]=(s*U-o*R+c*x)*H,e[9]=(n*R-t*U-r*x)*H,e[10]=(v*S-m*b+g*_)*H,e[11]=(f*b-d*S-h*_)*H,e[12]=(o*w-s*L-l*x)*H,e[13]=(t*L-n*w+a*x)*H,e[14]=(m*T-v*k-p*_)*H,e[15]=(d*k-f*T+u*_)*H,this}scale(e){const t=this.elements,n=e.x,a=e.y,r=e.z;return t[0]*=n,t[4]*=a,t[8]*=r,t[1]*=n,t[5]*=a,t[9]*=r,t[2]*=n,t[6]*=a,t[10]*=r,t[3]*=n,t[7]*=a,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,a))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),a=Math.sin(t),r=1-n,s=e.x,o=e.y,l=e.z,c=r*s,d=r*o;return this.set(c*s+n,c*o-a*l,c*l+a*o,0,c*o+a*l,d*o+n,d*l-a*s,0,c*l-a*o,d*l+a*s,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,a,r,s){return this.set(1,n,r,0,e,1,s,0,t,a,1,0,0,0,0,1),this}compose(e,t,n){const a=this.elements,r=t._x,s=t._y,o=t._z,l=t._w,c=r+r,d=s+s,f=o+o,u=r*c,h=r*d,v=r*f,m=s*d,p=s*f,g=o*f,_=l*c,T=l*d,b=l*f,k=n.x,S=n.y,A=n.z;return a[0]=(1-(m+g))*k,a[1]=(h+b)*k,a[2]=(v-T)*k,a[3]=0,a[4]=(h-b)*S,a[5]=(1-(u+g))*S,a[6]=(p+_)*S,a[7]=0,a[8]=(v+T)*A,a[9]=(p-_)*A,a[10]=(1-(u+m))*A,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,n){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let s=Or.set(a[0],a[1],a[2]).length();const o=Or.set(a[4],a[5],a[6]).length(),l=Or.set(a[8],a[9],a[10]).length();r<0&&(s=-s),yi.copy(this);const c=1/s,d=1/o,f=1/l;return yi.elements[0]*=c,yi.elements[1]*=c,yi.elements[2]*=c,yi.elements[4]*=d,yi.elements[5]*=d,yi.elements[6]*=d,yi.elements[8]*=f,yi.elements[9]*=f,yi.elements[10]*=f,t.setFromRotationMatrix(yi),n.x=s,n.y=o,n.z=l,this}makePerspective(e,t,n,a,r,s,o=Bi,l=!1){const c=this.elements,d=2*r/(t-e),f=2*r/(n-a),u=(t+e)/(t-e),h=(n+a)/(n-a);let v,m;if(l)v=r/(s-r),m=s*r/(s-r);else if(o===Bi)v=-(s+r)/(s-r),m=-2*s*r/(s-r);else if(o===Mo)v=-s/(s-r),m=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,a,r,s,o=Bi,l=!1){const c=this.elements,d=2/(t-e),f=2/(n-a),u=-(t+e)/(t-e),h=-(n+a)/(n-a);let v,m;if(l)v=1/(s-r),m=s/(s-r);else if(o===Bi)v=-2/(s-r),m=-(s+r)/(s-r);else if(o===Mo)v=-1/(s-r),m=-r/(s-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=v,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let a=0;a<16;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Or=new Y,yi=new wt,Qy=new Y(0,0,0),eb=new Y(1,1,1),ba=new Y,Zo=new Y,$n=new Y,Wh=new wt,Kh=new ws;class Za{constructor(e=0,t=0,n=0,a=Za.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,a=this._order){return this._x=e,this._y=t,this._z=n,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const a=e.elements,r=a[0],s=a[4],o=a[8],l=a[1],c=a[5],d=a[9],f=a[2],u=a[6],h=a[10];switch(t){case"XYZ":this._y=Math.asin(it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,h),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-it(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(it(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-it(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(it(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-it(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,h),this._y=0);break;default:He("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Wh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Kh.setFromEuler(this),this.setFromQuaternion(Kh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Za.DEFAULT_ORDER="XYZ";class Uf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let tb=0;const Xh=new Y,Fr=new ws,Yi=new wt,Jo=new Y,Ns=new Y,nb=new Y,ib=new ws,Yh=new Y(1,0,0),Zh=new Y(0,1,0),Jh=new Y(0,0,1),jh={type:"added"},ab={type:"removed"},Br={type:"childadded",child:null},ld={type:"childremoved",child:null};class fn extends Cr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tb++}),this.uuid=zo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fn.DEFAULT_UP.clone();const e=new Y,t=new Za,n=new ws,a=new Y(1,1,1);function r(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new wt},normalMatrix:{value:new We}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Uf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fr.setFromAxisAngle(e,t),this.quaternion.multiply(Fr),this}rotateOnWorldAxis(e,t){return Fr.setFromAxisAngle(e,t),this.quaternion.premultiply(Fr),this}rotateX(e){return this.rotateOnAxis(Yh,e)}rotateY(e){return this.rotateOnAxis(Zh,e)}rotateZ(e){return this.rotateOnAxis(Jh,e)}translateOnAxis(e,t){return Xh.copy(e).applyQuaternion(this.quaternion),this.position.add(Xh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Yh,e)}translateY(e){return this.translateOnAxis(Zh,e)}translateZ(e){return this.translateOnAxis(Jh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Jo.copy(e):Jo.set(e,t,n);const a=this.parent;this.updateWorldMatrix(!0,!1),Ns.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yi.lookAt(Ns,Jo,this.up):Yi.lookAt(Jo,Ns,this.up),this.quaternion.setFromRotationMatrix(Yi),a&&(Yi.extractRotation(a.matrixWorld),Fr.setFromRotationMatrix(Yi),this.quaternion.premultiply(Fr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jh),Br.child=e,this.dispatchEvent(Br),Br.child=null):ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ab),ld.child=e,this.dispatchEvent(ld),ld.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jh),Br.child=e,this.dispatchEvent(Br),Br.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,a=this.children.length;n<a;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,e,nb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,ib,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,a=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*a,r[13]+=n-r[1]*t-r[5]*n-r[9]*a,r[14]+=a-r[2]*t-r[6]*n-r[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));a.material=o}else a.material=r(e.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];a.animations.push(r(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),d=s(e.images),f=s(e.shapes),u=s(e.skeletons),h=s(e.animations),v=s(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),h.length>0&&(n.animations=h),v.length>0&&(n.nodes=v)}return n.object=a,n;function s(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const a=e.children[n];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}fn.DEFAULT_UP=new Y(0,1,0);fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class an extends fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rb={type:"move"};class cd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new an,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new an,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new an,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let a=null,r=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const m of e.hand.values()){const p=t.getJointPose(m,n),g=this._getHandJoint(c,m);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=d.position.distanceTo(f.position),h=.02,v=.005;c.inputState.pinching&&u>h+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=h-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(a=t.getPose(e.targetRaySpace,n),a===null&&r!==null&&(a=r),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(rb)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new an;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Jg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xa={h:0,s:0,l:0},jo={h:0,s:0,l:0};function dd(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ot{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,a=nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,nt.colorSpaceToWorking(this,a),this}setHSL(e,t,n,a=nt.workingColorSpace){if(e=Vy(e,1),t=it(t,0,1),n=it(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,s=2*n-r;this.r=dd(s,r,e+1/3),this.g=dd(s,r,e),this.b=dd(s,r,e-1/3)}return nt.colorSpaceToWorking(this,a),this}setStyle(e,t=Wn){function n(r){r!==void 0&&parseFloat(r)<1&&He("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const s=a[1],o=a[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:He("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=a[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(r,16),t);He("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wn){const n=Jg[e.toLowerCase()];return n!==void 0?this.setHex(n,t):He("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=oa(e.r),this.g=oa(e.g),this.b=oa(e.b),this}copyLinearToSRGB(e){return this.r=fs(e.r),this.g=fs(e.g),this.b=fs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wn){return nt.workingToColorSpace(vn.copy(this),e),Math.round(it(vn.r*255,0,255))*65536+Math.round(it(vn.g*255,0,255))*256+Math.round(it(vn.b*255,0,255))}getHexString(e=Wn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.workingToColorSpace(vn.copy(this),t);const n=vn.r,a=vn.g,r=vn.b,s=Math.max(n,a,r),o=Math.min(n,a,r);let l,c;const d=(o+s)/2;if(o===s)l=0,c=0;else{const f=s-o;switch(c=d<=.5?f/(s+o):f/(2-s-o),s){case n:l=(a-r)/f+(a<r?6:0);break;case a:l=(r-n)/f+2;break;case r:l=(n-a)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=nt.workingColorSpace){return nt.workingToColorSpace(vn.copy(this),t),e.r=vn.r,e.g=vn.g,e.b=vn.b,e}getStyle(e=Wn){nt.workingToColorSpace(vn.copy(this),e);const t=vn.r,n=vn.g,a=vn.b;return e!==Wn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(a*255)})`}offsetHSL(e,t,n){return this.getHSL(xa),this.setHSL(xa.h+e,xa.s+t,xa.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(xa),e.getHSL(jo);const n=id(xa.h,jo.h,t),a=id(xa.s,jo.s,t),r=id(xa.l,jo.l,t);return this.setHSL(n,a,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,a=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*a,this.g=r[1]*t+r[4]*n+r[7]*a,this.b=r[2]*t+r[5]*n+r[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vn=new ot;ot.NAMES=Jg;class sb extends fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Za,this.environmentIntensity=1,this.environmentRotation=new Za,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const bi=new Y,Zi=new Y,ud=new Y,Ji=new Y,$r=new Y,Hr=new Y,Qh=new Y,fd=new Y,hd=new Y,pd=new Y,md=new Dt,gd=new Dt,vd=new Dt;class Ei{constructor(e=new Y,t=new Y,n=new Y){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,a){a.subVectors(n,t),bi.subVectors(e,t),a.cross(bi);const r=a.lengthSq();return r>0?a.multiplyScalar(1/Math.sqrt(r)):a.set(0,0,0)}static getBarycoord(e,t,n,a,r){bi.subVectors(a,t),Zi.subVectors(n,t),ud.subVectors(e,t);const s=bi.dot(bi),o=bi.dot(Zi),l=bi.dot(ud),c=Zi.dot(Zi),d=Zi.dot(ud),f=s*c-o*o;if(f===0)return r.set(0,0,0),null;const u=1/f,h=(c*l-o*d)*u,v=(s*d-o*l)*u;return r.set(1-h-v,v,h)}static containsPoint(e,t,n,a){return this.getBarycoord(e,t,n,a,Ji)===null?!1:Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getInterpolation(e,t,n,a,r,s,o,l){return this.getBarycoord(e,t,n,a,Ji)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ji.x),l.addScaledVector(s,Ji.y),l.addScaledVector(o,Ji.z),l)}static getInterpolatedAttribute(e,t,n,a,r,s){return md.setScalar(0),gd.setScalar(0),vd.setScalar(0),md.fromBufferAttribute(e,t),gd.fromBufferAttribute(e,n),vd.fromBufferAttribute(e,a),s.setScalar(0),s.addScaledVector(md,r.x),s.addScaledVector(gd,r.y),s.addScaledVector(vd,r.z),s}static isFrontFacing(e,t,n,a){return bi.subVectors(n,t),Zi.subVectors(e,t),bi.cross(Zi).dot(a)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,a){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,n,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bi.subVectors(this.c,this.b),Zi.subVectors(this.a,this.b),bi.cross(Zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ei.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,a,r){return Ei.getInterpolation(e,this.a,this.b,this.c,t,n,a,r)}containsPoint(e){return Ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,a=this.b,r=this.c;let s,o;$r.subVectors(a,n),Hr.subVectors(r,n),fd.subVectors(e,n);const l=$r.dot(fd),c=Hr.dot(fd);if(l<=0&&c<=0)return t.copy(n);hd.subVectors(e,a);const d=$r.dot(hd),f=Hr.dot(hd);if(d>=0&&f<=d)return t.copy(a);const u=l*f-d*c;if(u<=0&&l>=0&&d<=0)return s=l/(l-d),t.copy(n).addScaledVector($r,s);pd.subVectors(e,r);const h=$r.dot(pd),v=Hr.dot(pd);if(v>=0&&h<=v)return t.copy(r);const m=h*c-l*v;if(m<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(n).addScaledVector(Hr,o);const p=d*v-h*f;if(p<=0&&f-d>=0&&h-v>=0)return Qh.subVectors(r,a),o=(f-d)/(f-d+(h-v)),t.copy(a).addScaledVector(Qh,o);const g=1/(p+m+u);return s=m*g,o=u*g,t.copy(n).addScaledVector($r,s).addScaledVector(Hr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Uo{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(xi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(xi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=xi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,xi):xi.fromBufferAttribute(r,s),xi.applyMatrix4(e.matrixWorld),this.expandByPoint(xi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qo.copy(n.boundingBox)),Qo.applyMatrix4(e.matrixWorld),this.union(Qo)}const a=e.children;for(let r=0,s=a.length;r<s;r++)this.expandByObject(a[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xi),xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Os),el.subVectors(this.max,Os),Gr.subVectors(e.a,Os),Vr.subVectors(e.b,Os),qr.subVectors(e.c,Os),ka.subVectors(Vr,Gr),Sa.subVectors(qr,Vr),ar.subVectors(Gr,qr);let t=[0,-ka.z,ka.y,0,-Sa.z,Sa.y,0,-ar.z,ar.y,ka.z,0,-ka.x,Sa.z,0,-Sa.x,ar.z,0,-ar.x,-ka.y,ka.x,0,-Sa.y,Sa.x,0,-ar.y,ar.x,0];return!_d(t,Gr,Vr,qr,el)||(t=[1,0,0,0,1,0,0,0,1],!_d(t,Gr,Vr,qr,el))?!1:(tl.crossVectors(ka,Sa),t=[tl.x,tl.y,tl.z],_d(t,Gr,Vr,qr,el))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ji),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ji=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],xi=new Y,Qo=new Uo,Gr=new Y,Vr=new Y,qr=new Y,ka=new Y,Sa=new Y,ar=new Y,Os=new Y,el=new Y,tl=new Y,rr=new Y;function _d(i,e,t,n,a){for(let r=0,s=i.length-3;r<=s;r+=3){rr.fromArray(i,r);const o=a.x*Math.abs(rr.x)+a.y*Math.abs(rr.y)+a.z*Math.abs(rr.z),l=e.dot(rr),c=t.dot(rr),d=n.dot(rr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const Ht=new Y,nl=new rt;let ob=0;class la extends Cr{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ob++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Fy,this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let a=0,r=this.itemSize;a<r;a++)this.array[e+a]=t.array[n+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)nl.fromBufferAttribute(this,t),nl.applyMatrix3(e),this.setXY(t,nl.x,nl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix3(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Us(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=An(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Us(t,this.array)),t}setX(e,t){return this.normalized&&(t=An(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Us(t,this.array)),t}setY(e,t){return this.normalized&&(t=An(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Us(t,this.array)),t}setZ(e,t){return this.normalized&&(t=An(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Us(t,this.array)),t}setW(e,t){return this.normalized&&(t=An(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=An(t,this.array),n=An(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,a){return e*=this.itemSize,this.normalized&&(t=An(t,this.array),n=An(n,this.array),a=An(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this}setXYZW(e,t,n,a,r){return e*=this.itemSize,this.normalized&&(t=An(t,this.array),n=An(n,this.array),a=An(a,this.array),r=An(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class jg extends la{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Qg extends la{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class gi extends la{constructor(e,t,n){super(new Float32Array(e),t,n)}}const lb=new Uo,Fs=new Y,yd=new Y;class Ec{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):lb.setFromPoints(e).getCenter(n);let a=0;for(let r=0,s=e.length;r<s;r++)a=Math.max(a,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fs.subVectors(e,this.center);const t=Fs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),a=(n-this.radius)*.5;this.center.addScaledVector(Fs,a/n),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fs.copy(e.center).add(yd)),this.expandByPoint(Fs.copy(e.center).sub(yd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let cb=0;const si=new wt,bd=new fn,Wr=new Y,Hn=new Uo,Bs=new Uo,tn=new Y;class Ai extends Cr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cb++}),this.uuid=zo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(By(e)?Qg:jg)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new We().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return si.makeRotationFromQuaternion(e),this.applyMatrix4(si),this}rotateX(e){return si.makeRotationX(e),this.applyMatrix4(si),this}rotateY(e){return si.makeRotationY(e),this.applyMatrix4(si),this}rotateZ(e){return si.makeRotationZ(e),this.applyMatrix4(si),this}translate(e,t,n){return si.makeTranslation(e,t,n),this.applyMatrix4(si),this}scale(e,t,n){return si.makeScale(e,t,n),this.applyMatrix4(si),this}lookAt(e){return bd.lookAt(e),bd.updateMatrix(),this.applyMatrix4(bd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wr).negate(),this.translate(Wr.x,Wr.y,Wr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let a=0,r=e.length;a<r;a++){const s=e[a];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new gi(n,3))}else{const n=Math.min(e.length,t.count);for(let a=0;a<n;a++){const r=e[a];t.setXYZ(a,r.x,r.y,r.z||0)}e.length>t.count&&He("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Uo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,a=t.length;n<a;n++){const r=t[n];Hn.setFromBufferAttribute(r),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,Hn.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,Hn.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(Hn.min),this.boundingBox.expandByPoint(Hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ec);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const n=this.boundingSphere.center;if(Hn.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){const o=t[r];Bs.setFromBufferAttribute(o),this.morphTargetsRelative?(tn.addVectors(Hn.min,Bs.min),Hn.expandByPoint(tn),tn.addVectors(Hn.max,Bs.max),Hn.expandByPoint(tn)):(Hn.expandByPoint(Bs.min),Hn.expandByPoint(Bs.max))}Hn.getCenter(n);let a=0;for(let r=0,s=e.count;r<s;r++)tn.fromBufferAttribute(e,r),a=Math.max(a,n.distanceToSquared(tn));if(t)for(let r=0,s=t.length;r<s;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)tn.fromBufferAttribute(o,c),l&&(Wr.fromBufferAttribute(e,c),tn.add(Wr)),a=Math.max(a,n.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,a=t.normal,r=t.uv;let s=this.getAttribute("tangent");(s===void 0||s.count!==n.count)&&(s=new la(new Float32Array(4*n.count),4),this.setAttribute("tangent",s));const o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new Y,l[x]=new Y;const c=new Y,d=new Y,f=new Y,u=new rt,h=new rt,v=new rt,m=new Y,p=new Y;function g(x,w,R){c.fromBufferAttribute(n,x),d.fromBufferAttribute(n,w),f.fromBufferAttribute(n,R),u.fromBufferAttribute(r,x),h.fromBufferAttribute(r,w),v.fromBufferAttribute(r,R),d.sub(c),f.sub(c),h.sub(u),v.sub(u);const L=1/(h.x*v.y-v.x*h.y);isFinite(L)&&(m.copy(d).multiplyScalar(v.y).addScaledVector(f,-h.y).multiplyScalar(L),p.copy(f).multiplyScalar(h.x).addScaledVector(d,-v.x).multiplyScalar(L),o[x].add(m),o[w].add(m),o[R].add(m),l[x].add(p),l[w].add(p),l[R].add(p))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let x=0,w=_.length;x<w;++x){const R=_[x],L=R.start,U=R.count;for(let B=L,C=L+U;B<C;B+=3)g(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const T=new Y,b=new Y,k=new Y,S=new Y;function A(x){k.fromBufferAttribute(a,x),S.copy(k);const w=o[x];T.copy(w),T.sub(k.multiplyScalar(k.dot(w))).normalize(),b.crossVectors(S,w);const L=b.dot(l[x])<0?-1:1;s.setXYZW(x,T.x,T.y,T.z,L)}for(let x=0,w=_.length;x<w;++x){const R=_[x],L=R.start,U=R.count;for(let B=L,C=L+U;B<C;B+=3)A(e.getX(B+0)),A(e.getX(B+1)),A(e.getX(B+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new la(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,h=n.count;u<h;u++)n.setXYZ(u,0,0,0);const a=new Y,r=new Y,s=new Y,o=new Y,l=new Y,c=new Y,d=new Y,f=new Y;if(e)for(let u=0,h=e.count;u<h;u+=3){const v=e.getX(u+0),m=e.getX(u+1),p=e.getX(u+2);a.fromBufferAttribute(t,v),r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,p),d.subVectors(s,r),f.subVectors(a,r),d.cross(f),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,p),o.add(d),l.add(d),c.add(d),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,h=t.count;u<h;u+=3)a.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),s.fromBufferAttribute(t,u+2),d.subVectors(s,r),f.subVectors(a,r),d.cross(f),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)tn.fromBufferAttribute(e,t),tn.normalize(),e.setXYZ(t,tn.x,tn.y,tn.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,f=o.normalized,u=new c.constructor(l.length*d);let h=0,v=0;for(let m=0,p=l.length;m<p;m++){o.isInterleavedBufferAttribute?h=l[m]*o.data.stride+o.offset:h=l[m]*d;for(let g=0;g<d;g++)u[v++]=c[h++]}return new la(u,d,f)}if(this.index===null)return He("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ai,n=this.index.array,a=this.attributes;for(const o in a){const l=a[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let d=0,f=c.length;d<f;d++){const u=c[d],h=e(u,n);l.push(h)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const a={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,u=c.length;f<u;f++){const h=c[f];d.push(h.toJSON(e.data))}d.length>0&&(a[l]=d,r=!0)}r&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const a=e.attributes;for(const c in a){const d=a[c];this.setAttribute(c,d.clone(t))}const r=e.morphAttributes;for(const c in r){const d=[],f=r[c];for(let u=0,h=f.length;u<h;u++)d.push(f[u].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,d=s.length;c<d;c++){const f=s[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xd=new Y,db=new Y,ub=new We;class Aa{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,a){return this.normal.set(e,t,n),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const a=xd.subVectors(n,t).cross(db.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const a=e.delta(xd),r=this.normal.dot(a);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(s<0||s>1)?null:t.copy(e.start).addScaledVector(a,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ub.getNormalMatrix(e),a=this.coplanarPoint(xd).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-a.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let fb=0;class Ts extends Cr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fb++}),this.uuid=zo(),this.name="",this.type="Material",this.blending=so,this.side=wr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pg,this.blendDst=Dg,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=xo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Py,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=nd,this.stencilZFail=nd,this.stencilZPass=nd,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){He(`Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){He(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(n):a&&a.isVector2&&n&&n.isVector2||a&&a.isEuler&&n&&n.isEuler||a&&a.isVector3&&n&&n.isVector3?a.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function a(r){const s=[];for(const o in r){const l=r[o];delete l.metadata,s.push(l)}return s}if(t){const r=a(e.textures),s=a(e.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ot().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Aa().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new rt().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new rt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const a=t.length;n=new Array(a);for(let r=0;r!==a;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Qi=new Y,kd=new Y,il=new Y,al=new Y;class Nf{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Qi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Qi.copy(this.origin).addScaledVector(this.direction,t),Qi.distanceToSquared(e))}distanceSqToSegment(e,t,n,a){kd.copy(e).add(t).multiplyScalar(.5),il.copy(t).sub(e).normalize(),al.copy(this.origin).sub(kd);const r=e.distanceTo(t)*.5,s=-this.direction.dot(il),o=al.dot(this.direction),l=-al.dot(il),c=al.lengthSq(),d=Math.abs(1-s*s);let f,u,h,v;if(d>0)if(f=s*l-o,u=s*o-l,v=r*d,f>=0)if(u>=-v)if(u<=v){const m=1/d;f*=m,u*=m,h=f*(f+s*u+2*o)+u*(s*f+u+2*l)+c}else u=r,f=Math.max(0,-(s*u+o)),h=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(s*u+o)),h=-f*f+u*(u+2*l)+c;else u<=-v?(f=Math.max(0,-(-s*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),h=-f*f+u*(u+2*l)+c):u<=v?(f=0,u=Math.min(Math.max(-r,-l),r),h=u*(u+2*l)+c):(f=Math.max(0,-(s*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),h=-f*f+u*(u+2*l)+c);else u=s>0?-r:r,f=Math.max(0,-(s*u+o)),h=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),a&&a.copy(kd).addScaledVector(il,u),h}intersectSphere(e,t){if(e.radius<0)return null;Qi.subVectors(e.center,this.origin);const n=Qi.dot(this.direction),a=Qi.dot(Qi)-n*n,r=e.radius*e.radius;if(a>r)return null;const s=Math.sqrt(r-a),o=n-s,l=n+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,a,r,s,o,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,a=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,a=(e.min.x-u.x)*c),d>=0?(r=(e.min.y-u.y)*d,s=(e.max.y-u.y)*d):(r=(e.max.y-u.y)*d,s=(e.min.y-u.y)*d),n>s||r>a||((r>n||isNaN(n))&&(n=r),(s<a||isNaN(a))&&(a=s),f>=0?(o=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),n>l||o>a)||((o>n||n!==n)&&(n=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(n>=0?n:a,t)}intersectsBox(e){return this.intersectBox(e,Qi)!==null}intersectTriangle(e,t,n,a,r){const s=this.origin,o=this.direction,l=o.x,c=o.y,d=o.z,f=e.x-s.x,u=e.y-s.y,h=e.z-s.z,v=t.x-s.x,m=t.y-s.y,p=t.z-s.z,g=n.x-s.x,_=n.y-s.y,T=n.z-s.z,b=Math.abs(l),k=Math.abs(c),S=Math.abs(d);let A,x,w,R,L,U,B,C,H,D,P,Z;if(b>=k&&b>=S?(w=l,U=f,H=v,Z=g,l>=0?(A=c,x=d,R=u,L=h,B=m,C=p,D=_,P=T):(A=d,x=c,R=h,L=u,B=p,C=m,D=T,P=_)):k>=S?(w=c,U=u,H=m,Z=_,c>=0?(A=d,x=l,R=h,L=f,B=p,C=v,D=T,P=g):(A=l,x=d,R=f,L=h,B=v,C=p,D=g,P=T)):(w=d,U=h,H=p,Z=T,d>=0?(A=l,x=c,R=f,L=u,B=v,C=m,D=g,P=_):(A=c,x=l,R=u,L=f,B=m,C=v,D=_,P=g)),w===0)return null;const V=A/w,ee=x/w,ae=1/w,fe=R-V*U,Me=L-ee*U,Ne=B-V*H,Ie=C-ee*H,$e=D-V*Z,j=P-ee*Z,se=$e*Ie-j*Ne,he=fe*j-Me*$e,Ue=Ne*Me-Ie*fe;if(a){if(se<0||he<0||Ue<0)return null}else if((se<0||he<0||Ue<0)&&(se>0||he>0||Ue>0))return null;const ke=se+he+Ue;if(ke===0)return null;const Fe=ae*(se*U+he*H+Ue*Z);return(ke>0?Fe<0:Fe>0)?null:this.at(Fe/ke,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ev extends Ts{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Za,this.combine=wf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ep=new wt,sr=new Nf,rl=new Ec,tp=new Y,sl=new Y,ol=new Y,ll=new Y,Sd=new Y,cl=new Y,np=new Y,dl=new Y;class ai extends fn{constructor(e=new Ai,t=new ev){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,a=n.attributes.position,r=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(a,e);const o=this.morphTargetInfluences;if(r&&o){cl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=o[l],f=r[l];d!==0&&(Sd.fromBufferAttribute(f,e),s?cl.addScaledVector(Sd,d):cl.addScaledVector(Sd.sub(t),d))}t.add(cl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,a=this.material,r=this.matrixWorld;a!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),rl.copy(n.boundingSphere),rl.applyMatrix4(r),sr.copy(e.ray).recast(e.near),!(rl.containsPoint(sr.origin)===!1&&(sr.intersectSphere(rl,tp)===null||sr.origin.distanceToSquared(tp)>(e.far-e.near)**2))&&(ep.copy(r).invert(),sr.copy(e.ray).applyMatrix4(ep),!(n.boundingBox!==null&&sr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,sr)))}_computeIntersections(e,t,n){let a;const r=this.geometry,s=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,f=r.attributes.normal,u=r.groups,h=r.drawRange;if(o!==null)if(Array.isArray(s))for(let v=0,m=u.length;v<m;v++){const p=u[v],g=s[p.materialIndex],_=Math.max(p.start,h.start),T=Math.min(o.count,Math.min(p.start+p.count,h.start+h.count));for(let b=_,k=T;b<k;b+=3){const S=o.getX(b),A=o.getX(b+1),x=o.getX(b+2);a=ul(this,g,e,n,c,d,f,S,A,x),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const v=Math.max(0,h.start),m=Math.min(o.count,h.start+h.count);for(let p=v,g=m;p<g;p+=3){const _=o.getX(p),T=o.getX(p+1),b=o.getX(p+2);a=ul(this,s,e,n,c,d,f,_,T,b),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(s))for(let v=0,m=u.length;v<m;v++){const p=u[v],g=s[p.materialIndex],_=Math.max(p.start,h.start),T=Math.min(l.count,Math.min(p.start+p.count,h.start+h.count));for(let b=_,k=T;b<k;b+=3){const S=b,A=b+1,x=b+2;a=ul(this,g,e,n,c,d,f,S,A,x),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const v=Math.max(0,h.start),m=Math.min(l.count,h.start+h.count);for(let p=v,g=m;p<g;p+=3){const _=p,T=p+1,b=p+2;a=ul(this,s,e,n,c,d,f,_,T,b),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}}}function hb(i,e,t,n,a,r,s,o){let l;if(e.side===Un?l=n.intersectTriangle(s,r,a,!0,o):l=n.intersectTriangle(a,r,s,e.side===wr,o),l===null)return null;dl.copy(o),dl.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(dl);return c<t.near||c>t.far?null:{distance:c,point:dl.clone(),object:i}}function ul(i,e,t,n,a,r,s,o,l,c){i.getVertexPosition(o,sl),i.getVertexPosition(l,ol),i.getVertexPosition(c,ll);const d=hb(i,e,t,n,sl,ol,ll,np);if(d){const f=new Y;Ei.getBarycoord(np,sl,ol,ll,f),a&&(d.uv=Ei.getInterpolatedAttribute(a,o,l,c,f,new rt)),r&&(d.uv1=Ei.getInterpolatedAttribute(r,o,l,c,f,new rt)),s&&(d.normal=Ei.getInterpolatedAttribute(s,o,l,c,f,new Y),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new Y,materialIndex:0};Ei.getNormal(sl,ol,ll,u.normal),d.face=u,d.barycoord=f}return d}class pb extends un{constructor(e=null,t=1,n=1,a,r,s,o,l,c=Zt,d=Zt,f,u){super(null,s,o,l,c,d,a,r,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const or=new Ec,mb=new rt(.5,.5),fl=new Y;class Of{constructor(e=new Aa,t=new Aa,n=new Aa,a=new Aa,r=new Aa,s=new Aa){this.planes=[e,t,n,a,r,s]}set(e,t,n,a,r,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(a),o[4].copy(r),o[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Bi,n=!1){const a=this.planes,r=e.elements,s=r[0],o=r[1],l=r[2],c=r[3],d=r[4],f=r[5],u=r[6],h=r[7],v=r[8],m=r[9],p=r[10],g=r[11],_=r[12],T=r[13],b=r[14],k=r[15];if(a[0].setComponents(c-s,h-d,g-v,k-_).normalize(),a[1].setComponents(c+s,h+d,g+v,k+_).normalize(),a[2].setComponents(c+o,h+f,g+m,k+T).normalize(),a[3].setComponents(c-o,h-f,g-m,k-T).normalize(),n)a[4].setComponents(l,u,p,b).normalize(),a[5].setComponents(c-l,h-u,g-p,k-b).normalize();else if(a[4].setComponents(c-l,h-u,g-p,k-b).normalize(),t===Bi)a[5].setComponents(c+l,h+u,g+p,k+b).normalize();else if(t===Mo)a[5].setComponents(l,u,p,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),or.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(or)}intersectsSprite(e){or.center.set(0,0,0);const t=mb.distanceTo(e.center);return or.radius=.7071067811865476+t,or.applyMatrix4(e.matrixWorld),this.intersectsSphere(or)}intersectsSphere(e){const t=this.planes,n=e.center,a=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const a=t[n];if(fl.x=a.normal.x>0?e.max.x:e.min.x,fl.y=a.normal.y>0?e.max.y:e.min.y,fl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(fl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class tv extends Ts{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const nc=new Y,ic=new Y,ip=new wt,$s=new Nf,hl=new Ec,Md=new Y,ap=new Y;class gb extends fn{constructor(e=new Ai,t=new tv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let a=1,r=t.count;a<r;a++)nc.fromBufferAttribute(t,a-1),ic.fromBufferAttribute(t,a),n[a]=n[a-1],n[a]+=nc.distanceTo(ic);e.setAttribute("lineDistance",new gi(n,1))}else He("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,a=this.matrixWorld,r=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),hl.copy(n.boundingSphere),hl.applyMatrix4(a),hl.radius+=r,e.ray.intersectsSphere(hl)===!1)return;ip.copy(a).invert(),$s.copy(e.ray).applyMatrix4(ip);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=n.index,u=n.attributes.position;if(d!==null){const h=Math.max(0,s.start),v=Math.min(d.count,s.start+s.count);for(let m=h,p=v-1;m<p;m+=c){const g=d.getX(m),_=d.getX(m+1),T=pl(this,e,$s,l,g,_,m);T&&t.push(T)}if(this.isLineLoop){const m=d.getX(v-1),p=d.getX(h),g=pl(this,e,$s,l,m,p,v-1);g&&t.push(g)}}else{const h=Math.max(0,s.start),v=Math.min(u.count,s.start+s.count);for(let m=h,p=v-1;m<p;m+=c){const g=pl(this,e,$s,l,m,m+1,m);g&&t.push(g)}if(this.isLineLoop){const m=pl(this,e,$s,l,v-1,h,v-1);m&&t.push(m)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function pl(i,e,t,n,a,r,s){const o=i.geometry.attributes.position;if(nc.fromBufferAttribute(o,a),ic.fromBufferAttribute(o,r),t.distanceSqToSegment(nc,ic,Md,ap)>n)return;Md.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Md);if(!(c<e.near||c>e.far))return{distance:c,point:ap.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const rp=new Y,sp=new Y;class vb extends gb{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let a=0,r=t.count;a<r;a+=2)rp.fromBufferAttribute(t,a),sp.fromBufferAttribute(t,a+1),n[a]=a===0?0:n[a-1],n[a+1]=n[a]+rp.distanceTo(sp);e.setAttribute("lineDistance",new gi(n,1))}else He("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class nv extends un{constructor(e=[],t=Tr,n,a,r,s,o,l,c,d){super(e,t,n,a,r,s,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class iv extends un{constructor(e,t,n,a,r,s,o,l,c){super(e,t,n,a,r,s,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class wo extends un{constructor(e,t,n=qi,a,r,s,o=Zt,l=Zt,c,d=fa,f=1){if(d!==fa&&d!==_r)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:f};super(u,a,r,s,o,l,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new zf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class _b extends wo{constructor(e,t=qi,n=Tr,a,r,s=Zt,o=Zt,l,c=fa){const d={width:e,height:e,depth:1},f=[d,d,d,d,d,d];super(e,e,t,n,a,r,s,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class av extends un{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ha extends Ai{constructor(e=1,t=1,n=1,a=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:a,heightSegments:r,depthSegments:s};const o=this;a=Math.floor(a),r=Math.floor(r),s=Math.floor(s);const l=[],c=[],d=[],f=[];let u=0,h=0;v("z","y","x",-1,-1,n,t,e,s,r,0),v("z","y","x",1,-1,n,t,-e,s,r,1),v("x","z","y",1,1,e,n,t,a,s,2),v("x","z","y",1,-1,e,n,-t,a,s,3),v("x","y","z",1,-1,e,t,n,a,r,4),v("x","y","z",-1,-1,e,t,-n,a,r,5),this.setIndex(l),this.setAttribute("position",new gi(c,3)),this.setAttribute("normal",new gi(d,3)),this.setAttribute("uv",new gi(f,2));function v(m,p,g,_,T,b,k,S,A,x,w){const R=b/A,L=k/x,U=b/2,B=k/2,C=S/2,H=A+1,D=x+1;let P=0,Z=0;const V=new Y;for(let ee=0;ee<D;ee++){const ae=ee*L-B;for(let fe=0;fe<H;fe++){const Me=fe*R-U;V[m]=Me*_,V[p]=ae*T,V[g]=C,c.push(V.x,V.y,V.z),V[m]=0,V[p]=0,V[g]=S>0?1:-1,d.push(V.x,V.y,V.z),f.push(fe/A),f.push(1-ee/x),P+=1}}for(let ee=0;ee<x;ee++)for(let ae=0;ae<A;ae++){const fe=u+ae+H*ee,Me=u+ae+H*(ee+1),Ne=u+(ae+1)+H*(ee+1),Ie=u+(ae+1)+H*ee;l.push(fe,Me,Ie),l.push(Me,Ne,Ie),Z+=6}o.addGroup(h,Z,w),h+=Z,u+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ha(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class wc extends Ai{constructor(e=1,t=1,n=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:a};const r=e/2,s=t/2,o=Math.floor(n),l=Math.floor(a),c=o+1,d=l+1,f=e/o,u=t/l,h=[],v=[],m=[],p=[];for(let g=0;g<d;g++){const _=g*u-s;for(let T=0;T<c;T++){const b=T*f-r;v.push(b,-_,0),m.push(0,0,1),p.push(T/o),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let _=0;_<o;_++){const T=_+c*g,b=_+c*(g+1),k=_+1+c*(g+1),S=_+1+c*g;h.push(T,b,S),h.push(b,k,S)}this.setIndex(h),this.setAttribute("position",new gi(v,3)),this.setAttribute("normal",new gi(m,3)),this.setAttribute("uv",new gi(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wc(e.width,e.height,e.widthSegments,e.heightSegments)}}function Ms(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const a=i[t][n];if(op(a))a.isRenderTargetTexture?(He("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=a.clone();else if(Array.isArray(a))if(op(a[0])){const r=[];for(let s=0,o=a.length;s<o;s++)r[s]=a[s].clone();e[t][n]=r}else e[t][n]=a.slice();else e[t][n]=a}}return e}function wn(i){const e={};for(let t=0;t<i.length;t++){const n=Ms(i[t]);for(const a in n)e[a]=n[a]}return e}function op(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function yb(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function rv(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const bb={clone:Ms,merge:wn};var xb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ki extends Ts{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xb,this.fragmentShader=kb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ms(e.uniforms),this.uniformsGroups=yb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const s=this.uniforms[a].value;s&&s.isTexture?t.uniforms[a]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[a]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[a]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[a]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[a]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[a]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[a]={type:"m4",value:s.toArray()}:t.uniforms[a]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const a in this.extensions)this.extensions[a]===!0&&(n[a]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const a=e.uniforms[n];switch(this.uniforms[n]={},a.type){case"t":this.uniforms[n].value=t[a.value]||null;break;case"c":this.uniforms[n].value=new ot().setHex(a.value);break;case"v2":this.uniforms[n].value=new rt().fromArray(a.value);break;case"v3":this.uniforms[n].value=new Y().fromArray(a.value);break;case"v4":this.uniforms[n].value=new Dt().fromArray(a.value);break;case"m3":this.uniforms[n].value=new We().fromArray(a.value);break;case"m4":this.uniforms[n].value=new wt().fromArray(a.value);break;default:this.uniforms[n].value=a.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Sb extends Ki{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ac extends Ts{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ku,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Za,this.combine=wf,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Mb extends Ts{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ly,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Eb extends Ts{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ed={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(lp(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!lp(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function lp(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class wb{constructor(e,t,n){const a=this;let r=!1,s=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(d){o++,r===!1&&a.onStart!==void 0&&a.onStart(d,s,o),r=!0},this.itemEnd=function(d){s++,a.onProgress!==void 0&&a.onProgress(d,s,o),s===o&&(r=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(d){a.onError!==void 0&&a.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,f){return c.push(d,f),this},this.removeHandler=function(d){const f=c.indexOf(d);return f!==-1&&c.splice(f,2),this},this.getHandler=function(d){for(let f=0,u=c.length;f<u;f+=2){const h=c[f],v=c[f+1];if(h.global&&(h.lastIndex=0),h.test(d))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Tb=new wb;class sv{constructor(e){this.manager=e!==void 0?e:Tb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(a,r){n.load(e,a,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}sv.DEFAULT_MATERIAL_NAME="__DEFAULT";const Kr=new WeakMap;class Ab extends sv{constructor(e){super(e)}load(e,t,n,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=Ed.get(`image:${e}`);if(s!==void 0){if(s.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0);else{let f=Kr.get(s);f===void 0&&(f=[],Kr.set(s,f)),f.push({onLoad:t,onError:a})}return s}const o=Eo("img");function l(){d(),t&&t(this);const f=Kr.get(this)||[];for(let u=0;u<f.length;u++){const h=f[u];h.onLoad&&h.onLoad(this)}Kr.delete(this),r.manager.itemEnd(e)}function c(f){d(),a&&a(f),Ed.remove(`image:${e}`);const u=Kr.get(this)||[];for(let h=0;h<u.length;h++){const v=u[h];v.onError&&v.onError(f)}Kr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function d(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ed.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class ov extends fn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const wd=new wt,cp=new Y,dp=new Y;class Rb{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.mapType=Zn,this.map=null,this.mapPass=null,this.matrix=new wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Of,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;cp.setFromMatrixPosition(e.matrixWorld),t.position.copy(cp),dp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(dp),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,a){wd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(wd,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,s=a?a.z/r.x:1,o=a?a.w/r.y:1,l=a?a.x/r.x:0,c=a?a.y/r.y:0;e.coordinateSystem===Mo||e.reversedDepth?t.set(.5*s,0,0,.5*s+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*s,0,0,.5*s+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(wd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ml=new Y,gl=new ws,Ci=new Y;class lv extends fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=Bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ml,gl,Ci),Ci.x===1&&Ci.y===1&&Ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ml,gl,Ci.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ml,gl,Ci),Ci.x===1&&Ci.y===1&&Ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ml,gl,Ci.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ma=new Y,up=new rt,fp=new rt;class ui extends lv{constructor(e=50,t=1,n=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Xu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ul*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xu*2*Math.atan(Math.tan(Ul*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ma.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ma.x,Ma.y).multiplyScalar(-e/Ma.z),Ma.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ma.x,Ma.y).multiplyScalar(-e/Ma.z)}getViewSize(e,t){return this.getViewBounds(e,up,fp),t.subVectors(fp,up)}setViewOffset(e,t,n,a,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ul*.5*this.fov)/this.zoom,n=2*t,a=this.aspect*n,r=-.5*a;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;r+=s.offsetX*a/l,t-=s.offsetY*n/c,a*=s.width/l,n*=s.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+a,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Ff extends lv{constructor(e=-1,t=1,n=1,a=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=a,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,a,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let r=n-e,s=n+e,o=a+t,l=a-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Lb extends Rb{constructor(){super(new Ff(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hp extends ov{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(fn.DEFAULT_UP),this.updateMatrix(),this.target=new fn,this.shadow=new Lb}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Cb extends ov{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Xr=-90,Yr=1;class Pb extends fn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new ui(Xr,Yr,e,t);a.layers=this.layers,this.add(a);const r=new ui(Xr,Yr,e,t);r.layers=this.layers,this.add(r);const s=new ui(Xr,Yr,e,t);s.layers=this.layers,this.add(s);const o=new ui(Xr,Yr,e,t);o.layers=this.layers,this.add(o);const l=new ui(Xr,Yr,e,t);l.layers=this.layers,this.add(l);const c=new ui(Xr,Yr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,a,r,s,o,l]=t;for(const c of t)this.remove(c);if(e===Bi)n.up.set(0,1,0),n.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Mo)n.up.set(0,-1,0),n.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,l,c,d]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,a),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,a),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,2,a),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,a),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,a),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,a),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(f,u,h),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Db extends ui{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const pp=new wt;class Ib{constructor(e,t,n=0,a=1/0){this.ray=new Nf(e,t),this.near=n,this.far=a,this.camera=null,this.layers=new Uf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ct("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return pp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(pp),this}intersectObject(e,t=!0,n=[]){return Yu(e,this,n,t),n.sort(mp),n}intersectObjects(e,t=!0,n=[]){for(let a=0,r=e.length;a<r;a++)Yu(e[a],this,n,t);return n.sort(mp),n}}function mp(i,e){return i.distance-e.distance}function Yu(i,e,t,n){let a=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(a=!1),a===!0&&n===!0){const r=i.children;for(let s=0,o=r.length;s<o;s++)Yu(r[s],e,t,!0)}}class zb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,He("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class cv{static{cv.prototype.isMatrix2=!0}constructor(e,t,n,a){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,a)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,a){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=a,this}}function gp(i,e,t,n){const a=Ub(n);switch(t){case Wg:return i*e;case Xg:return i*e/a.components*a.byteLength;case Lf:return i*e/a.components*a.byteLength;case Ar:return i*e*2/a.components*a.byteLength;case Cf:return i*e*2/a.components*a.byteLength;case Kg:return i*e*3/a.components*a.byteLength;case wi:return i*e*4/a.components*a.byteLength;case Pf:return i*e*4/a.components*a.byteLength;case Pl:case Dl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Il:case zl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case _u:case bu:return Math.max(i,16)*Math.max(e,8)/4;case vu:case yu:return Math.max(i,8)*Math.max(e,8)/2;case xu:case ku:case Mu:case Eu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Su:case jl:case wu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Tu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Au:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ru:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Lu:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Cu:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Pu:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Du:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Iu:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case zu:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Uu:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Nu:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ou:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Fu:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Bu:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case $u:case Hu:case Gu:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Vu:case qu:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ql:case Wu:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ub(i){switch(i){case Zn:case Hg:return{byteLength:1,components:1};case ko:case Gg:case Wi:return{byteLength:2,components:1};case Af:case Rf:return{byteLength:2,components:4};case qi:case Tf:case Fi:return{byteLength:4,components:1};case Vg:case qg:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ef}}));typeof window<"u"&&(window.__THREE__?He("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ef);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function dv(){let i=null,e=!1,t=null,n=null;function a(r,s){n=i.requestAnimationFrame(a),t(r,s)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(a),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Nb(i){const e=new WeakMap;function t(o,l){const c=o.array,d=o.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,d),o.onUploadCallback();let h;if(c instanceof Float32Array)h=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=i.HALF_FLOAT:h=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=i.SHORT;else if(c instanceof Uint32Array)h=i.UNSIGNED_INT;else if(c instanceof Int32Array)h=i.INT;else if(c instanceof Int8Array)h=i.BYTE;else if(c instanceof Uint8Array)h=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const d=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,d);else{f.sort((h,v)=>h.start-v.start);let u=0;for(let h=1;h<f.length;h++){const v=f[u],m=f[h];m.start<=v.start+v.count+1?v.count=Math.max(v.count,m.start+m.count-v.start):(++u,f[u]=m)}f.length=u+1;for(let h=0,v=f.length;h<v;h++){const m=f[h];i.bufferSubData(c,m.start*d.BYTES_PER_ELEMENT,d,m.start,m.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:a,remove:r,update:s}}var Ob=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fb=`#ifdef USE_ALPHAHASH
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
#endif`,Bb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$b=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vb=`#ifdef USE_AOMAP
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
#endif`,qb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wb=`#ifdef USE_BATCHING
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
#endif`,Kb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Jb=`#ifdef USE_IRIDESCENCE
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
#endif`,jb=`#ifdef USE_BUMPMAP
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
#endif`,Qb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ex=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ix=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ax=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,rx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,sx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ox=`#define PI 3.141592653589793
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
} // validated`,lx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,cx=`vec3 transformedNormal = objectNormal;
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
#endif`,dx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ux=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,px="gl_FragColor = linearToOutputTexel( gl_FragColor );",mx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gx=`#ifdef USE_ENVMAP
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
#endif`,vx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,_x=`#ifdef USE_ENVMAP
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
#endif`,yx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bx=`#ifdef USE_ENVMAP
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
#endif`,xx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ex=`#ifdef USE_GRADIENTMAP
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
}`,wx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Tx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ax=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Lx=`#ifdef USE_ENVMAP
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
#endif`,Cx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Px=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Dx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ix=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zx=`PhysicalMaterial material;
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
#endif`,Ux=`uniform sampler2D dfgLUT;
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
}`,Nx=`
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
#endif`,Ox=`#if defined( RE_IndirectDiffuse )
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
#endif`,Fx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bx=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,$x=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Xx=`#if defined( USE_POINTS_UV )
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
#endif`,Yx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ek=`#ifdef USE_MORPHTARGETS
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
#endif`,tk=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nk=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ik=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ak=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rk=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sk=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ok=`#ifdef USE_NORMALMAP
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
#endif`,lk=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ck=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dk=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,uk=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fk=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hk=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,pk=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mk=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gk=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vk=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_k=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yk=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bk=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xk=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kk=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Sk=`float getShadowMask() {
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
}`,Mk=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ek=`#ifdef USE_SKINNING
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
#endif`,wk=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tk=`#ifdef USE_SKINNING
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
#endif`,Ak=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rk=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lk=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ck=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pk=`#ifdef USE_TRANSMISSION
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
#endif`,Dk=`#ifdef USE_TRANSMISSION
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
#endif`,Ik=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zk=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Uk=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nk=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ok=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fk=`uniform sampler2D t2D;
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
}`,Bk=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$k=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Hk=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gk=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vk=`#include <common>
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
}`,qk=`#if DEPTH_PACKING == 3200
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
}`,Wk=`#define DISTANCE
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
}`,Kk=`#define DISTANCE
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
}`,Xk=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yk=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zk=`uniform float scale;
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
}`,Jk=`uniform vec3 diffuse;
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
}`,jk=`#include <common>
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
}`,Qk=`uniform vec3 diffuse;
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
}`,eS=`#define LAMBERT
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
}`,tS=`#define LAMBERT
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
}`,nS=`#define MATCAP
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
}`,iS=`#define MATCAP
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
}`,aS=`#define NORMAL
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
}`,rS=`#define NORMAL
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
}`,sS=`#define PHONG
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
}`,oS=`#define PHONG
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
}`,lS=`#define STANDARD
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
}`,cS=`#define STANDARD
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
}`,dS=`#define TOON
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
}`,uS=`#define TOON
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
}`,fS=`uniform float size;
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
}`,hS=`uniform vec3 diffuse;
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
}`,pS=`#include <common>
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
}`,mS=`uniform vec3 color;
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
}`,gS=`uniform float rotation;
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
}`,vS=`uniform vec3 diffuse;
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
}`,Je={alphahash_fragment:Ob,alphahash_pars_fragment:Fb,alphamap_fragment:Bb,alphamap_pars_fragment:$b,alphatest_fragment:Hb,alphatest_pars_fragment:Gb,aomap_fragment:Vb,aomap_pars_fragment:qb,batching_pars_vertex:Wb,batching_vertex:Kb,begin_vertex:Xb,beginnormal_vertex:Yb,bsdfs:Zb,iridescence_fragment:Jb,bumpmap_pars_fragment:jb,clipping_planes_fragment:Qb,clipping_planes_pars_fragment:ex,clipping_planes_pars_vertex:tx,clipping_planes_vertex:nx,color_fragment:ix,color_pars_fragment:ax,color_pars_vertex:rx,color_vertex:sx,common:ox,cube_uv_reflection_fragment:lx,defaultnormal_vertex:cx,displacementmap_pars_vertex:dx,displacementmap_vertex:ux,emissivemap_fragment:fx,emissivemap_pars_fragment:hx,colorspace_fragment:px,colorspace_pars_fragment:mx,envmap_fragment:gx,envmap_common_pars_fragment:vx,envmap_pars_fragment:_x,envmap_pars_vertex:yx,envmap_physical_pars_fragment:Lx,envmap_vertex:bx,fog_vertex:xx,fog_pars_vertex:kx,fog_fragment:Sx,fog_pars_fragment:Mx,gradientmap_pars_fragment:Ex,lightmap_pars_fragment:wx,lights_lambert_fragment:Tx,lights_lambert_pars_fragment:Ax,lights_pars_begin:Rx,lights_toon_fragment:Cx,lights_toon_pars_fragment:Px,lights_phong_fragment:Dx,lights_phong_pars_fragment:Ix,lights_physical_fragment:zx,lights_physical_pars_fragment:Ux,lights_fragment_begin:Nx,lights_fragment_maps:Ox,lights_fragment_end:Fx,lightprobes_pars_fragment:Bx,logdepthbuf_fragment:$x,logdepthbuf_pars_fragment:Hx,logdepthbuf_pars_vertex:Gx,logdepthbuf_vertex:Vx,map_fragment:qx,map_pars_fragment:Wx,map_particle_fragment:Kx,map_particle_pars_fragment:Xx,metalnessmap_fragment:Yx,metalnessmap_pars_fragment:Zx,morphinstance_vertex:Jx,morphcolor_vertex:jx,morphnormal_vertex:Qx,morphtarget_pars_vertex:ek,morphtarget_vertex:tk,normal_fragment_begin:nk,normal_fragment_maps:ik,normal_pars_fragment:ak,normal_pars_vertex:rk,normal_vertex:sk,normalmap_pars_fragment:ok,clearcoat_normal_fragment_begin:lk,clearcoat_normal_fragment_maps:ck,clearcoat_pars_fragment:dk,iridescence_pars_fragment:uk,opaque_fragment:fk,packing:hk,premultiplied_alpha_fragment:pk,project_vertex:mk,dithering_fragment:gk,dithering_pars_fragment:vk,roughnessmap_fragment:_k,roughnessmap_pars_fragment:yk,shadowmap_pars_fragment:bk,shadowmap_pars_vertex:xk,shadowmap_vertex:kk,shadowmask_pars_fragment:Sk,skinbase_vertex:Mk,skinning_pars_vertex:Ek,skinning_vertex:wk,skinnormal_vertex:Tk,specularmap_fragment:Ak,specularmap_pars_fragment:Rk,tonemapping_fragment:Lk,tonemapping_pars_fragment:Ck,transmission_fragment:Pk,transmission_pars_fragment:Dk,uv_pars_fragment:Ik,uv_pars_vertex:zk,uv_vertex:Uk,worldpos_vertex:Nk,background_vert:Ok,background_frag:Fk,backgroundCube_vert:Bk,backgroundCube_frag:$k,cube_vert:Hk,cube_frag:Gk,depth_vert:Vk,depth_frag:qk,distance_vert:Wk,distance_frag:Kk,equirect_vert:Xk,equirect_frag:Yk,linedashed_vert:Zk,linedashed_frag:Jk,meshbasic_vert:jk,meshbasic_frag:Qk,meshlambert_vert:eS,meshlambert_frag:tS,meshmatcap_vert:nS,meshmatcap_frag:iS,meshnormal_vert:aS,meshnormal_frag:rS,meshphong_vert:sS,meshphong_frag:oS,meshphysical_vert:lS,meshphysical_frag:cS,meshtoon_vert:dS,meshtoon_frag:uS,points_vert:fS,points_frag:hS,shadow_vert:pS,shadow_frag:mS,sprite_vert:gS,sprite_frag:vS},ye={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Y},probesMax:{value:new Y},probesResolution:{value:new Y}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},zi={basic:{uniforms:wn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:wn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new ot(0)},envMapIntensity:{value:1}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:wn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:wn([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:wn([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new ot(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:wn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:wn([ye.points,ye.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:wn([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:wn([ye.common,ye.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:wn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:wn([ye.sprite,ye.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distance:{uniforms:wn([ye.common,ye.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distance_vert,fragmentShader:Je.distance_frag},shadow:{uniforms:wn([ye.lights,ye.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};zi.physical={uniforms:wn([zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const vl={r:0,b:0,g:0},_S=new wt,uv=new We;uv.set(-1,0,0,0,1,0,0,0,1);function yS(i,e,t,n,a,r){const s=new ot(0);let o=a===!0?0:1,l,c,d=null,f=0,u=null;function h(_){let T=_.isScene===!0?_.background:null;if(T&&T.isTexture){const b=_.backgroundBlurriness>0;T=e.get(T,b)}return T}function v(_){let T=!1;const b=h(_);b===null?p(s,o):b&&b.isColor&&(p(b,1),T=!0);const k=i.xr.getEnvironmentBlendMode();k==="additive"?t.buffers.color.setClear(0,0,0,1,r):k==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(_,T){const b=h(T);b&&(b.isCubeTexture||b.mapping===Mc)?(c===void 0&&(c=new ai(new ha(1,1,1),new Ki({name:"BackgroundCubeMaterial",uniforms:Ms(zi.backgroundCube.uniforms),vertexShader:zi.backgroundCube.vertexShader,fragmentShader:zi.backgroundCube.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(k,S,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(_S.makeRotationFromEuler(T.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(uv),c.material.toneMapped=nt.getTransfer(b.colorSpace)!==mt,(d!==b||f!==b.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,d=b,f=b.version,u=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new ai(new wc(2,2),new Ki({name:"BackgroundMaterial",uniforms:Ms(zi.background.uniforms),vertexShader:zi.background.vertexShader,fragmentShader:zi.background.fragmentShader,side:wr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=nt.getTransfer(b.colorSpace)!==mt,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(d!==b||f!==b.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,d=b,f=b.version,u=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function p(_,T){_.getRGB(vl,rv(i)),t.buffers.color.setClear(vl.r,vl.g,vl.b,T,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(_,T=1){s.set(_),o=T,p(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,p(s,o)},render:v,addToRenderList:m,dispose:g}}function bS(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},a=u(null);let r=a,s=!1;function o(L,U,B,C,H){let D=!1;const P=f(L,C,B,U);r!==P&&(r=P,c(r.object)),D=h(L,C,B,H),D&&v(L,C,B,H),H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),(D||s)&&(s=!1,b(L,U,B,C),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return i.createVertexArray()}function c(L){return i.bindVertexArray(L)}function d(L){return i.deleteVertexArray(L)}function f(L,U,B,C){const H=C.wireframe===!0;let D=n[U.id];D===void 0&&(D={},n[U.id]=D);const P=L.isInstancedMesh===!0?L.id:0;let Z=D[P];Z===void 0&&(Z={},D[P]=Z);let V=Z[B.id];V===void 0&&(V={},Z[B.id]=V);let ee=V[H];return ee===void 0&&(ee=u(l()),V[H]=ee),ee}function u(L){const U=[],B=[],C=[];for(let H=0;H<t;H++)U[H]=0,B[H]=0,C[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:B,attributeDivisors:C,object:L,attributes:{},index:null}}function h(L,U,B,C){const H=r.attributes,D=U.attributes;let P=0;const Z=B.getAttributes();for(const V in Z)if(Z[V].location>=0){const ae=H[V];let fe=D[V];if(fe===void 0&&(V==="instanceMatrix"&&L.instanceMatrix&&(fe=L.instanceMatrix),V==="instanceColor"&&L.instanceColor&&(fe=L.instanceColor)),ae===void 0||ae.attribute!==fe||fe&&ae.data!==fe.data)return!0;P++}return r.attributesNum!==P||r.index!==C}function v(L,U,B,C){const H={},D=U.attributes;let P=0;const Z=B.getAttributes();for(const V in Z)if(Z[V].location>=0){let ae=D[V];ae===void 0&&(V==="instanceMatrix"&&L.instanceMatrix&&(ae=L.instanceMatrix),V==="instanceColor"&&L.instanceColor&&(ae=L.instanceColor));const fe={};fe.attribute=ae,ae&&ae.data&&(fe.data=ae.data),H[V]=fe,P++}r.attributes=H,r.attributesNum=P,r.index=C}function m(){const L=r.newAttributes;for(let U=0,B=L.length;U<B;U++)L[U]=0}function p(L){g(L,0)}function g(L,U){const B=r.newAttributes,C=r.enabledAttributes,H=r.attributeDivisors;B[L]=1,C[L]===0&&(i.enableVertexAttribArray(L),C[L]=1),H[L]!==U&&(i.vertexAttribDivisor(L,U),H[L]=U)}function _(){const L=r.newAttributes,U=r.enabledAttributes;for(let B=0,C=U.length;B<C;B++)U[B]!==L[B]&&(i.disableVertexAttribArray(B),U[B]=0)}function T(L,U,B,C,H,D,P){P===!0?i.vertexAttribIPointer(L,U,B,H,D):i.vertexAttribPointer(L,U,B,C,H,D)}function b(L,U,B,C){m();const H=C.attributes,D=B.getAttributes(),P=U.defaultAttributeValues;for(const Z in D){const V=D[Z];if(V.location>=0){let ee=H[Z];if(ee===void 0&&(Z==="instanceMatrix"&&L.instanceMatrix&&(ee=L.instanceMatrix),Z==="instanceColor"&&L.instanceColor&&(ee=L.instanceColor)),ee!==void 0){const ae=ee.normalized,fe=ee.itemSize,Me=e.get(ee);if(Me===void 0)continue;const Ne=Me.buffer,Ie=Me.type,$e=Me.bytesPerElement,j=Ie===i.INT||Ie===i.UNSIGNED_INT||ee.gpuType===Tf;if(ee.isInterleavedBufferAttribute){const se=ee.data,he=se.stride,Ue=ee.offset;if(se.isInstancedInterleavedBuffer){for(let ke=0;ke<V.locationSize;ke++)g(V.location+ke,se.meshPerAttribute);L.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ke=0;ke<V.locationSize;ke++)p(V.location+ke);i.bindBuffer(i.ARRAY_BUFFER,Ne);for(let ke=0;ke<V.locationSize;ke++)T(V.location+ke,fe/V.locationSize,Ie,ae,he*$e,(Ue+fe/V.locationSize*ke)*$e,j)}else{if(ee.isInstancedBufferAttribute){for(let se=0;se<V.locationSize;se++)g(V.location+se,ee.meshPerAttribute);L.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let se=0;se<V.locationSize;se++)p(V.location+se);i.bindBuffer(i.ARRAY_BUFFER,Ne);for(let se=0;se<V.locationSize;se++)T(V.location+se,fe/V.locationSize,Ie,ae,fe*$e,fe/V.locationSize*se*$e,j)}}else if(P!==void 0){const ae=P[Z];if(ae!==void 0)switch(ae.length){case 2:i.vertexAttrib2fv(V.location,ae);break;case 3:i.vertexAttrib3fv(V.location,ae);break;case 4:i.vertexAttrib4fv(V.location,ae);break;default:i.vertexAttrib1fv(V.location,ae)}}}}_()}function k(){w();for(const L in n){const U=n[L];for(const B in U){const C=U[B];for(const H in C){const D=C[H];for(const P in D)d(D[P].object),delete D[P];delete C[H]}}delete n[L]}}function S(L){if(n[L.id]===void 0)return;const U=n[L.id];for(const B in U){const C=U[B];for(const H in C){const D=C[H];for(const P in D)d(D[P].object),delete D[P];delete C[H]}}delete n[L.id]}function A(L){for(const U in n){const B=n[U];for(const C in B){const H=B[C];if(H[L.id]===void 0)continue;const D=H[L.id];for(const P in D)d(D[P].object),delete D[P];delete H[L.id]}}}function x(L){for(const U in n){const B=n[U],C=L.isInstancedMesh===!0?L.id:0,H=B[C];if(H!==void 0){for(const D in H){const P=H[D];for(const Z in P)d(P[Z].object),delete P[Z];delete H[D]}delete B[C],Object.keys(B).length===0&&delete n[U]}}}function w(){R(),s=!0,r!==a&&(r=a,c(r.object))}function R(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:w,resetDefaultState:R,dispose:k,releaseStatesOfGeometry:S,releaseStatesOfObject:x,releaseStatesOfProgram:A,initAttributes:m,enableAttribute:p,disableUnusedAttributes:_}}function xS(i,e,t){let n;function a(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function s(l,c,d){d!==0&&(i.drawArraysInstanced(n,l,c,d),t.update(c,n,d))}function o(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,d);let u=0;for(let h=0;h<d;h++)u+=c[h];t.update(u,n,1)}this.setMode=a,this.render=r,this.renderInstances=s,this.renderMultiDraw=o}function kS(i,e,t,n){let a;function r(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");a=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(A){return!(A!==wi&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const x=A===Wi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Zn&&A!==Fi&&!x&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(He("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const f=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&He("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),k=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:h,maxVertexTextures:v,maxTextureSize:m,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:_,maxVaryings:T,maxFragmentUniforms:b,maxSamples:k,samples:S}}function SS(i){const e=this;let t=null,n=0,a=!1,r=!1;const s=new Aa,o=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const h=f.length!==0||u||n!==0||a;return a=u,n=f.length,h},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=d(f,u,0)},this.setState=function(f,u,h){const v=f.clippingPlanes,m=f.clipIntersection,p=f.clipShadows,g=i.get(f);if(!a||v===null||v.length===0||r&&!p)r?d(null):c();else{const _=r?0:n,T=_*4;let b=g.clippingState||null;l.value=b,b=d(v,u,T,h);for(let k=0;k!==T;++k)b[k]=t[k];g.clippingState=b,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(f,u,h,v){const m=f!==null?f.length:0;let p=null;if(m!==0){if(p=l.value,v!==!0||p===null){const g=h+m*4,_=u.matrixWorldInverse;o.getNormalMatrix(_),(p===null||p.length<g)&&(p=new Float32Array(g));for(let T=0,b=h;T!==m;++T,b+=4)s.copy(f[T]).applyMatrix4(_,o),s.normal.toArray(p,b),p[b+3]=s.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,p}}const as=4,MS=6,ES=20,wS=256,Hs=new Ff,vp=new ot;let Td=null,Ad=0,Rd=0,Ld=!1;const TS=new Y,lr=new Y;class _p{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,a=100,r={}){const{size:s=256,position:o=TS}=r;Td=this._renderer.getRenderTarget(),Ad=this._renderer.getActiveCubeFace(),Rd=this._renderer.getActiveMipmapLevel(),Ld=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,a,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Td,Ad,Rd),this._renderer.xr.enabled=Ld,e.scissorTest=!1,Zr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Tr||e.mapping===Ss?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Td=this._renderer.getRenderTarget(),Ad=this._renderer.getActiveCubeFace(),Rd=this._renderer.getActiveMipmapLevel(),Ld=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:Wi,format:wi,colorSpace:ec,depthBuffer:!1},a=yp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yp(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=AS(r)),this._blurMaterial=LS(r,e,t),this._ggxMaterial=RS(r,e,t)}return a}_compileMaterial(e){const t=new ai(new Ai,e);this._renderer.compile(t,Hs)}_sceneToCubeUV(e,t,n,a,r){const l=new ui(90,1,t,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,h=f.toneMapping;f.getClearColor(vp),f.toneMapping=Gi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(a),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ai(new ha,new ev({name:"PMREM.Background",side:Un,depthWrite:!1,depthTest:!1})));const m=this._backgroundBox,p=m.material;let g=!1;const _=e.background;_?_.isColor&&(p.color.copy(_),e.background=null,g=!0):(p.color.copy(vp),g=!0);for(let T=0;T<6;T++){const b=T%3;b===0?(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[T],r.y,r.z)):b===1?(l.up.set(0,0,c[T]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[T],r.z)):(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[T]));const k=this._cubeSize;Zr(a,b*k,T>2?k:0,k,k),f.setRenderTarget(a),g&&f.render(m,l),f.render(e,l)}f.toneMapping=h,f.autoClear=u,e.background=_}_textureToCubeUV(e,t){const n=this._renderer,a=e.mapping===Tr||e.mapping===Ss;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=xp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bp());const r=a?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Zr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,Hs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const a=this._lodMeshes.length;for(let r=1;r<a;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const a=this._renderer,r=this._pingPongRenderTarget,s=this._ggxMaterial,o=this._lodMeshes[n];o.material=s;const l=s.uniforms,c=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-d*d),u=c*1.25,h=f*u,{_lodMax:v}=this,m=this._sizeLods[n],p=3*m*(n>v-as?n-v+as:0),g=4*(this._cubeSize-m);l.envMap.value=e.texture,l.roughness.value=h,l.mipInt.value=v-t,Zr(r,p,g,3*m,2*m),a.setRenderTarget(r),a.render(o,Hs),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=v-n,Zr(e,p,g,3*m,2*m),a.setRenderTarget(e),a.render(o,Hs)}_blur(e,t,n,a){const r=this._pingPongRenderTarget,s=Math.min(a,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,s),this._blurPass(r,e,n,n,s)}_blurPass(e,t,n,a,r){const s=this._renderer,o=this._blurMaterial,l=this._lodMeshes[a];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;const d=this._sizeLods[a],f=3*d*(a>this._lodMax-as?a-this._lodMax+as:0),u=4*(this._cubeSize-d);Zr(t,f,u,3*d,2*d),s.setRenderTarget(t),s.render(l,Hs)}}function AS(i){const e=[],t=[];let n=i;const a=i-as+1+MS;for(let r=0;r<a;r++){const s=Math.pow(2,n);e.push(s);const o=1/(s-2),l=-o,c=1+o,d=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,u=6,h=3,v=new Float32Array(h*u*f),m=new Float32Array(h*u*f);for(let g=0;g<f;g++){const _=g%3*2/3-1,T=g>2?0:-1,b=[_,T,0,_+2/3,T,0,_+2/3,T+1,0,_,T,0,_+2/3,T+1,0,_,T+1,0];v.set(b,h*u*g);for(let k=0;k<u;k++){const S=d[k*2]*2-1,A=d[k*2+1]*2-1;g===0?lr.set(1,A,S):g===1?lr.set(-S,1,-A):g===2?lr.set(-S,A,1):g===3?lr.set(-1,A,-S):g===4?lr.set(-S,-1,A):lr.set(S,A,-1),lr.toArray(m,(g*u+k)*h)}}const p=new Ai;p.setAttribute("position",new la(v,h)),p.setAttribute("outputDirection",new la(m,h)),t.push(new ai(p,null)),n>as&&n--}return{lodMeshes:t,sizeLods:e}}function yp(i,e,t){const n=new Ti(i,e,t);return n.texture.mapping=Mc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Zr(i,e,t,n,a){i.viewport.set(e,t,n,a),i.scissor.set(e,t,n,a)}function RS(i,e,t){return new Ki({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:wS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Tc(),fragmentShader:`

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
		`,blending:sa,depthTest:!1,depthWrite:!1})}function LS(i,e,t){return new Ki({name:"SphericalGaussianBlur",defines:{SAMPLES:ES,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Tc(),fragmentShader:`

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
		`,blending:sa,depthTest:!1,depthWrite:!1})}function bp(){return new Ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tc(),fragmentShader:`

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
		`,blending:sa,depthTest:!1,depthWrite:!1})}function xp(){return new Ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:sa,depthTest:!1,depthWrite:!1})}function Tc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class fv extends Ti{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},a=[n,n,n,n,n,n];this.texture=new nv(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new ha(5,5,5),r=new Ki({name:"CubemapFromEquirect",uniforms:Ms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Un,blending:sa});r.uniforms.tEquirect.value=t;const s=new ai(a,r),o=t.minFilter;return t.minFilter===Ua&&(t.minFilter=cn),new Pb(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,n=!0,a=!0){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,a);e.setRenderTarget(r)}}function CS(i){let e=new WeakMap,t=new WeakMap,n=null;function a(u,h=!1){return u==null?null:h?s(u):r(u)}function r(u){if(u&&u.isTexture){const h=u.mapping;if(h===Qc||h===ed)if(e.has(u)){const v=e.get(u).texture;return o(v,u.mapping)}else{const v=u.image;if(v&&v.height>0){const m=new fv(v.height);return m.fromEquirectangularTexture(i,u),e.set(u,m),u.addEventListener("dispose",c),o(m.texture,u.mapping)}else return null}}return u}function s(u){if(u&&u.isTexture){const h=u.mapping,v=h===Qc||h===ed,m=h===Tr||h===Ss;if(v||m){let p=t.get(u);const g=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new _p(i)),p=v?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),p.texture;if(p!==void 0)return p.texture;{const _=u.image;return v&&_&&_.height>0||m&&_&&l(_)?(n===null&&(n=new _p(i)),p=v?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),u.addEventListener("dispose",d),p.texture):null}}}return u}function o(u,h){return h===Qc?u.mapping=Tr:h===ed&&(u.mapping=Ss),u}function l(u){let h=0;const v=6;for(let m=0;m<v;m++)u[m]!==void 0&&h++;return h===v}function c(u){const h=u.target;h.removeEventListener("dispose",c);const v=e.get(h);v!==void 0&&(e.delete(h),v.dispose())}function d(u){const h=u.target;h.removeEventListener("dispose",d);const v=t.get(h);v!==void 0&&(t.delete(h),v.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:f}}function PS(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const a=i.getExtension(n);return e[n]=a,a}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const a=t(n);return a===null&&us("WebGLRenderer: "+n+" extension not supported."),a}}}function DS(i,e,t,n){const a={},r=new WeakMap;function s(f){const u=f.target;u.index!==null&&e.remove(u.index);for(const v in u.attributes)e.remove(u.attributes[v]);u.removeEventListener("dispose",s),delete a[u.id];const h=r.get(u);h&&(e.remove(h),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(f,u){return a[u.id]===!0||(u.addEventListener("dispose",s),a[u.id]=!0,t.memory.geometries++),u}function l(f){const u=f.attributes;for(const h in u)e.update(u[h],i.ARRAY_BUFFER)}function c(f){const u=[],h=f.index,v=f.attributes.position;let m=0;if(v===void 0)return;if(h!==null){const _=h.array;m=h.version;for(let T=0,b=_.length;T<b;T+=3){const k=_[T+0],S=_[T+1],A=_[T+2];u.push(k,S,S,A,A,k)}}else{const _=v.array;m=v.version;for(let T=0,b=_.length/3-1;T<b;T+=3){const k=T+0,S=T+1,A=T+2;u.push(k,S,S,A,A,k)}}const p=new(v.count>=65535?Qg:jg)(u,1);p.version=m;const g=r.get(f);g&&e.remove(g),r.set(f,p)}function d(f){const u=r.get(f);if(u){const h=f.index;h!==null&&u.version<h.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:d}}function IS(i,e,t){let n;function a(f){n=f}let r,s;function o(f){r=f.type,s=f.bytesPerElement}function l(f,u){i.drawElements(n,u,r,f*s),t.update(u,n,1)}function c(f,u,h){h!==0&&(i.drawElementsInstanced(n,u,r,f*s,h),t.update(u,n,h))}function d(f,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,h);let m=0;for(let p=0;p<h;p++)m+=u[p];t.update(m,n,1)}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function zS(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,s,o){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:ct("WebGLInfo: Unknown draw mode:",s);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:n}}function US(i,e,t){const n=new WeakMap,a=new Dt;function r(s,o,l){const c=s.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=d!==void 0?d.length:0;let u=n.get(o);if(u===void 0||u.count!==f){let w=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();const h=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let T=0;h===!0&&(T=1),v===!0&&(T=2),m===!0&&(T=3);let b=o.attributes.position.count*T,k=1;b>e.maxTextureSize&&(k=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const S=new Float32Array(b*k*4*f),A=new Zg(S,b,k,f);A.type=Fi,A.needsUpdate=!0;const x=T*4;for(let R=0;R<f;R++){const L=p[R],U=g[R],B=_[R],C=b*k*4*R;for(let H=0;H<L.count;H++){const D=H*x;h===!0&&(a.fromBufferAttribute(L,H),S[C+D+0]=a.x,S[C+D+1]=a.y,S[C+D+2]=a.z,S[C+D+3]=0),v===!0&&(a.fromBufferAttribute(U,H),S[C+D+4]=a.x,S[C+D+5]=a.y,S[C+D+6]=a.z,S[C+D+7]=0),m===!0&&(a.fromBufferAttribute(B,H),S[C+D+8]=a.x,S[C+D+9]=a.y,S[C+D+10]=a.z,S[C+D+11]=B.itemSize===4?a.w:1)}}u={count:f,texture:A,size:new rt(b,k)},n.set(o,u),o.addEventListener("dispose",w)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let h=0;for(let m=0;m<c.length;m++)h+=c[m];const v=o.morphTargetsRelative?1:1-h;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function NS(i,e,t,n,a){let r=new WeakMap;function s(c){const d=a.render.frame,f=c.geometry,u=e.get(c,f);if(r.get(u)!==d&&(e.update(u),r.set(u,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==d&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,d))),c.isSkinnedMesh){const h=c.skeleton;r.get(h)!==d&&(h.update(),r.set(h,d))}return u}function o(){r=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:s,dispose:o}}const OS={[Ig]:"LINEAR_TONE_MAPPING",[zg]:"REINHARD_TONE_MAPPING",[Ug]:"CINEON_TONE_MAPPING",[Ng]:"ACES_FILMIC_TONE_MAPPING",[Fg]:"AGX_TONE_MAPPING",[Bg]:"NEUTRAL_TONE_MAPPING",[Og]:"CUSTOM_TONE_MAPPING"};function FS(i,e,t,n,a,r){const s=new Ti(e,t,{type:i,depthBuffer:a,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new Ai;c.setAttribute("position",new gi([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new gi([0,2,0,0,2,0],2));const d=new Sb({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new ai(c,d),u=new Ff(-1,1,1,-1,0,1);let h=null,v=null,m=!1,p,g=null,_=[],T=!1;this.setSize=function(b,k){s.setSize(b,k),o!==null&&o.setSize(b,k),l!==null&&l.setSize(b,k);for(let S=0;S<_.length;S++){const A=_[S];A.setSize&&A.setSize(b,k)}},this.setEffects=function(b){_=b,T=_.length>0&&_[0].isRenderPass===!0;const k=s.width,S=s.height;_.length>0&&o===null&&(o=new Ti(k,S,{type:Wi,depthBuffer:!1,stencilBuffer:!1}),l=new Ti(k,S,{type:Wi,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<_.length;A++){const x=_[A];x.setSize&&x.setSize(k,S)}},this.begin=function(b,k){if(m||b.toneMapping===Gi&&_.length===0)return!1;if(g=k,k!==null){const S=k.width,A=k.height;(s.width!==S||s.height!==A)&&this.setSize(S,A)}return T===!1&&b.setRenderTarget(s),p=b.toneMapping,b.toneMapping=Gi,!0},this.hasRenderPass=function(){return T},this.end=function(b,k){b.toneMapping=p,m=!0;let S=s,A=o;for(let x=0;x<_.length;x++){const w=_[x];w.enabled!==!1&&(w.render(b,A,S,k),w.needsSwap!==!1&&(S=A,A=A===o?l:o))}if(h!==b.outputColorSpace||v!==b.toneMapping){h=b.outputColorSpace,v=b.toneMapping,d.defines={},nt.getTransfer(h)===mt&&(d.defines.SRGB_TRANSFER="");const x=OS[v];x&&(d.defines[x]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=S.texture,b.setRenderTarget(g),b.render(f,u),g=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){s.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),d.dispose()}}const hv=new un,Zu=new wo(1,1),pv=new Zg,mv=new jy,gv=new nv,kp=[],Sp=[],Mp=new Float32Array(16),Ep=new Float32Array(9),wp=new Float32Array(4);function As(i,e,t){const n=i[0];if(n<=0||n>0)return i;const a=e*t;let r=kp[a];if(r===void 0&&(r=new Float32Array(a),kp[a]=r),e!==0){n.toArray(r,0);for(let s=1,o=0;s!==e;++s)o+=t,i[s].toArray(r,o)}return r}function jt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Qt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ac(i,e){let t=Sp[e];t===void 0&&(t=new Int32Array(e),Sp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function BS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function $S(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;i.uniform2fv(this.addr,e),Qt(t,e)}}function HS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jt(t,e))return;i.uniform3fv(this.addr,e),Qt(t,e)}}function GS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;i.uniform4fv(this.addr,e),Qt(t,e)}}function VS(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Qt(t,e)}else{if(jt(t,n))return;wp.set(n),i.uniformMatrix2fv(this.addr,!1,wp),Qt(t,n)}}function qS(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Qt(t,e)}else{if(jt(t,n))return;Ep.set(n),i.uniformMatrix3fv(this.addr,!1,Ep),Qt(t,n)}}function WS(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Qt(t,e)}else{if(jt(t,n))return;Mp.set(n),i.uniformMatrix4fv(this.addr,!1,Mp),Qt(t,n)}}function KS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function XS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;i.uniform2iv(this.addr,e),Qt(t,e)}}function YS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;i.uniform3iv(this.addr,e),Qt(t,e)}}function ZS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;i.uniform4iv(this.addr,e),Qt(t,e)}}function JS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function jS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;i.uniform2uiv(this.addr,e),Qt(t,e)}}function QS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;i.uniform3uiv(this.addr,e),Qt(t,e)}}function e1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;i.uniform4uiv(this.addr,e),Qt(t,e)}}function t1(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a);let r;this.type===i.SAMPLER_2D_SHADOW?(Zu.compareFunction=t.isReversedDepthBuffer()?If:Df,r=Zu):r=hv,t.setTexture2D(e||r,a)}function n1(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTexture3D(e||mv,a)}function i1(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTextureCube(e||gv,a)}function a1(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTexture2DArray(e||pv,a)}function r1(i){switch(i){case 5126:return BS;case 35664:return $S;case 35665:return HS;case 35666:return GS;case 35674:return VS;case 35675:return qS;case 35676:return WS;case 5124:case 35670:return KS;case 35667:case 35671:return XS;case 35668:case 35672:return YS;case 35669:case 35673:return ZS;case 5125:return JS;case 36294:return jS;case 36295:return QS;case 36296:return e1;case 35678:case 36198:case 36298:case 36306:case 35682:return t1;case 35679:case 36299:case 36307:return n1;case 35680:case 36300:case 36308:case 36293:return i1;case 36289:case 36303:case 36311:case 36292:return a1}}function s1(i,e){i.uniform1fv(this.addr,e)}function o1(i,e){const t=As(e,this.size,2);i.uniform2fv(this.addr,t)}function l1(i,e){const t=As(e,this.size,3);i.uniform3fv(this.addr,t)}function c1(i,e){const t=As(e,this.size,4);i.uniform4fv(this.addr,t)}function d1(i,e){const t=As(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function u1(i,e){const t=As(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function f1(i,e){const t=As(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function h1(i,e){i.uniform1iv(this.addr,e)}function p1(i,e){i.uniform2iv(this.addr,e)}function m1(i,e){i.uniform3iv(this.addr,e)}function g1(i,e){i.uniform4iv(this.addr,e)}function v1(i,e){i.uniform1uiv(this.addr,e)}function _1(i,e){i.uniform2uiv(this.addr,e)}function y1(i,e){i.uniform3uiv(this.addr,e)}function b1(i,e){i.uniform4uiv(this.addr,e)}function x1(i,e,t){const n=this.cache,a=e.length,r=Ac(t,a);jt(n,r)||(i.uniform1iv(this.addr,r),Qt(n,r));let s;this.type===i.SAMPLER_2D_SHADOW?s=Zu:s=hv;for(let o=0;o!==a;++o)t.setTexture2D(e[o]||s,r[o])}function k1(i,e,t){const n=this.cache,a=e.length,r=Ac(t,a);jt(n,r)||(i.uniform1iv(this.addr,r),Qt(n,r));for(let s=0;s!==a;++s)t.setTexture3D(e[s]||mv,r[s])}function S1(i,e,t){const n=this.cache,a=e.length,r=Ac(t,a);jt(n,r)||(i.uniform1iv(this.addr,r),Qt(n,r));for(let s=0;s!==a;++s)t.setTextureCube(e[s]||gv,r[s])}function M1(i,e,t){const n=this.cache,a=e.length,r=Ac(t,a);jt(n,r)||(i.uniform1iv(this.addr,r),Qt(n,r));for(let s=0;s!==a;++s)t.setTexture2DArray(e[s]||pv,r[s])}function E1(i){switch(i){case 5126:return s1;case 35664:return o1;case 35665:return l1;case 35666:return c1;case 35674:return d1;case 35675:return u1;case 35676:return f1;case 5124:case 35670:return h1;case 35667:case 35671:return p1;case 35668:case 35672:return m1;case 35669:case 35673:return g1;case 5125:return v1;case 36294:return _1;case 36295:return y1;case 36296:return b1;case 35678:case 36198:case 36298:case 36306:case 35682:return x1;case 35679:case 36299:case 36307:return k1;case 35680:case 36300:case 36308:case 36293:return S1;case 36289:case 36303:case 36311:case 36292:return M1}}class w1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=r1(t.type)}}class T1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=E1(t.type)}}class A1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const a=this.seq;for(let r=0,s=a.length;r!==s;++r){const o=a[r];o.setValue(e,t[o.id],n)}}}const Cd=/(\w+)(\])?(\[|\.)?/g;function Tp(i,e){i.seq.push(e),i.map[e.id]=e}function R1(i,e,t){const n=i.name,a=n.length;for(Cd.lastIndex=0;;){const r=Cd.exec(n),s=Cd.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===a){Tp(t,c===void 0?new w1(o,i,e):new T1(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new A1(o),Tp(t,f)),t=f}}}class Nl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=e.getActiveUniform(t,s),l=e.getUniformLocation(t,o.name);R1(o,l,this)}const a=[],r=[];for(const s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(s):r.push(s);a.length>0&&(this.seq=a.concat(r))}setValue(e,t,n,a){const r=this.map[t];r!==void 0&&r.setValue(e,n,a)}setOptional(e,t,n){const a=t[n];a!==void 0&&this.setValue(e,n,a)}static upload(e,t,n,a){for(let r=0,s=t.length;r!==s;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,a)}}static seqWithValue(e,t){const n=[];for(let a=0,r=e.length;a!==r;++a){const s=e[a];s.id in t&&n.push(s)}return n}}function Ap(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const L1=37297;let C1=0;function P1(i,e){const t=i.split(`
`),n=[],a=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let s=a;s<r;s++){const o=s+1;n.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return n.join(`
`)}const Rp=new We;function D1(i){nt._getMatrix(Rp,nt.workingColorSpace,i);const e=`mat3( ${Rp.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(i)){case tc:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return He("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Lp(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+P1(i.getShaderSource(e),o)}else return r}function I1(i,e){const t=D1(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const z1={[Ig]:"Linear",[zg]:"Reinhard",[Ug]:"Cineon",[Ng]:"ACESFilmic",[Fg]:"AgX",[Bg]:"Neutral",[Og]:"Custom"};function U1(i,e){const t=z1[e];return t===void 0?(He("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const _l=new Y;function N1(){nt.getLuminanceCoefficients(_l);const i=_l.x.toFixed(4),e=_l.y.toFixed(4),t=_l.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function O1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xs).join(`
`)}function F1(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function B1(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let a=0;a<n;a++){const r=i.getActiveAttrib(e,a),s=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[s]={type:r.type,location:i.getAttribLocation(e,s),locationSize:o}}return t}function Xs(i){return i!==""}function Cp(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Pp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ju(i){return i.replace($1,G1)}const H1=new Map;function G1(i,e){let t=Je[e];if(t===void 0){const n=H1.get(e);if(n!==void 0)t=Je[n],He('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ju(t)}const V1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dp(i){return i.replace(V1,q1)}function q1(i,e,t,n){let a="";for(let r=parseInt(e);r<parseInt(t);r++)a+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function Ip(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const W1={[Cl]:"SHADOWMAP_TYPE_PCF",[Ks]:"SHADOWMAP_TYPE_VSM"};function K1(i){return W1[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const X1={[Tr]:"ENVMAP_TYPE_CUBE",[Ss]:"ENVMAP_TYPE_CUBE",[Mc]:"ENVMAP_TYPE_CUBE_UV"};function Y1(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":X1[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const Z1={[Ss]:"ENVMAP_MODE_REFRACTION"};function J1(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Z1[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const j1={[wf]:"ENVMAP_BLENDING_MULTIPLY",[Ty]:"ENVMAP_BLENDING_MIX",[Ay]:"ENVMAP_BLENDING_ADD"};function Q1(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":j1[i.combine]||"ENVMAP_BLENDING_NONE"}function eM(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function tM(i,e,t,n){const a=i.getContext(),r=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=K1(t),c=Y1(t),d=J1(t),f=Q1(t),u=eM(t),h=O1(t),v=F1(r),m=a.createProgram();let p,g,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Xs).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Xs).join(`
`),g.length>0&&(g+=`
`)):(p=[Ip(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xs).join(`
`),g=[Ip(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gi?"#define TONE_MAPPING":"",t.toneMapping!==Gi?Je.tonemapping_pars_fragment:"",t.toneMapping!==Gi?U1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,I1("linearToOutputTexel",t.outputColorSpace),N1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xs).join(`
`)),s=Ju(s),s=Cp(s,t),s=Pp(s,t),o=Ju(o),o=Cp(o,t),o=Pp(o,t),s=Dp(s),o=Dp(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",t.glslVersion===Bh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const T=_+p+s,b=_+g+o,k=Ap(a,a.VERTEX_SHADER,T),S=Ap(a,a.FRAGMENT_SHADER,b);a.attachShader(m,k),a.attachShader(m,S),t.index0AttributeName!==void 0?a.bindAttribLocation(m,0,t.index0AttributeName):t.hasPositionAttribute===!0&&a.bindAttribLocation(m,0,"position"),a.linkProgram(m);function A(L){if(i.debug.checkShaderErrors){const U=a.getProgramInfoLog(m)||"",B=a.getShaderInfoLog(k)||"",C=a.getShaderInfoLog(S)||"",H=U.trim(),D=B.trim(),P=C.trim();let Z=!0,V=!0;if(a.getProgramParameter(m,a.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(a,m,k,S);else{const ee=Lp(a,k,"vertex"),ae=Lp(a,S,"fragment");ct("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(m,a.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+H+`
`+ee+`
`+ae)}else H!==""?He("WebGLProgram: Program Info Log:",H):(D===""||P==="")&&(V=!1);V&&(L.diagnostics={runnable:Z,programLog:H,vertexShader:{log:D,prefix:p},fragmentShader:{log:P,prefix:g}})}a.deleteShader(k),a.deleteShader(S),x=new Nl(a,m),w=B1(a,m)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=a.getProgramParameter(m,L1)),R},this.destroy=function(){n.releaseStatesOfProgram(this),a.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=C1++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=k,this.fragmentShader=S,this}let nM=0;class iM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const a=this._getShaderCacheForMaterial(e);return a.has(t)===!1&&(a.add(t),t.usedTimes++),a.has(n)===!1&&(a.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new aM(e),t.set(e,n)),n}}class aM{constructor(e){this.id=nM++,this.code=e,this.usedTimes=0}}function rM(i){return i===Ar||i===jl||i===Ql}function sM(i,e,t,n,a,r){const s=new Uf,o=new iM,l=new Set,c=[],d=new Map,f=n.logarithmicDepthBuffer;let u=n.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,w,R,L,U,B){const C=L.fog,H=U.geometry,D=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?L.environment:null,P=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,Z=e.get(x.envMap||D,P),V=Z&&Z.mapping===Mc?Z.image.height:null,ee=h[x.type];x.precision!==null&&(u=n.getMaxPrecision(x.precision),u!==x.precision&&He("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));const ae=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,fe=ae!==void 0?ae.length:0;let Me=0;H.morphAttributes.position!==void 0&&(Me=1),H.morphAttributes.normal!==void 0&&(Me=2),H.morphAttributes.color!==void 0&&(Me=3);let Ne,Ie,$e,j;if(ee){const kt=zi[ee];Ne=kt.vertexShader,Ie=kt.fragmentShader}else{Ne=x.vertexShader,Ie=x.fragmentShader;const kt=o.getVertexShaderStage(x),ft=o.getFragmentShaderStage(x);o.update(x,kt,ft),$e=kt.id,j=ft.id}const se=i.getRenderTarget(),he=i.state.buffers.depth.getReversed(),Ue=U.isInstancedMesh===!0,ke=U.isBatchedMesh===!0,Fe=!!x.map,_t=!!x.matcap,Be=!!Z,Ye=!!x.aoMap,st=!!x.lightMap,Ge=!!x.bumpMap&&x.wireframe===!1,pt=!!x.normalMap,zt=!!x.displacementMap,Wt=!!x.emissiveMap,dt=!!x.metalnessMap,Ut=!!x.roughnessMap,O=x.anisotropy>0,Kt=x.clearcoat>0,$=x.dispersion>0,E=x.retroreflectivity>0,y=x.iridescence>0,F=x.sheen>0,q=x.transmission>0,Q=O&&!!x.anisotropyMap,ce=Kt&&!!x.clearcoatMap,ue=Kt&&!!x.clearcoatNormalMap,ie=Kt&&!!x.clearcoatRoughnessMap,re=y&&!!x.iridescenceMap,pe=y&&!!x.iridescenceThicknessMap,Pe=F&&!!x.sheenColorMap,_e=F&&!!x.sheenRoughnessMap,me=!!x.specularMap,De=!!x.specularColorMap,Oe=!!x.specularIntensityMap,Xe=q&&!!x.transmissionMap,N=q&&!!x.thicknessMap,ge=!!x.gradientMap,oe=!!x.alphaMap,ve=x.alphaTest>0,Se=!!x.alphaHash,le=!!x.extensions;let ze=Gi;x.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(ze=i.toneMapping);const Le={shaderID:ee,shaderType:x.type,shaderName:x.name,vertexShader:Ne,fragmentShader:Ie,defines:x.defines,customVertexShaderID:$e,customFragmentShaderID:j,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:ke,batchingColor:ke&&U._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&U.instanceColor!==null,instancingMorph:Ue&&U.morphTexture!==null,outputColorSpace:se===null?i.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:nt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Fe,matcap:_t,envMap:Be,envMapMode:Be&&Z.mapping,envMapCubeUVHeight:V,aoMap:Ye,lightMap:st,bumpMap:Ge,normalMap:pt,displacementMap:zt,emissiveMap:Wt,normalMapObjectSpace:pt&&x.normalMapType===Cy,normalMapTangentSpace:pt&&x.normalMapType===Ku,packedNormalMap:pt&&x.normalMapType===Ku&&rM(x.normalMap.format),metalnessMap:dt,roughnessMap:Ut,anisotropy:O,anisotropyMap:Q,clearcoat:Kt,clearcoatMap:ce,clearcoatNormalMap:ue,clearcoatRoughnessMap:ie,dispersion:$,retroreflection:E,iridescence:y,iridescenceMap:re,iridescenceThicknessMap:pe,sheen:F,sheenColorMap:Pe,sheenRoughnessMap:_e,specularMap:me,specularColorMap:De,specularIntensityMap:Oe,transmission:q,transmissionMap:Xe,thicknessMap:N,gradientMap:ge,opaque:x.transparent===!1&&x.blending===so&&x.alphaToCoverage===!1,alphaMap:oe,alphaTest:ve,alphaHash:Se,combine:x.combine,mapUv:Fe&&v(x.map.channel),aoMapUv:Ye&&v(x.aoMap.channel),lightMapUv:st&&v(x.lightMap.channel),bumpMapUv:Ge&&v(x.bumpMap.channel),normalMapUv:pt&&v(x.normalMap.channel),displacementMapUv:zt&&v(x.displacementMap.channel),emissiveMapUv:Wt&&v(x.emissiveMap.channel),metalnessMapUv:dt&&v(x.metalnessMap.channel),roughnessMapUv:Ut&&v(x.roughnessMap.channel),anisotropyMapUv:Q&&v(x.anisotropyMap.channel),clearcoatMapUv:ce&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:ue&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:re&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:_e&&v(x.sheenRoughnessMap.channel),specularMapUv:me&&v(x.specularMap.channel),specularColorMapUv:De&&v(x.specularColorMap.channel),specularIntensityMapUv:Oe&&v(x.specularIntensityMap.channel),transmissionMapUv:Xe&&v(x.transmissionMap.channel),thicknessMapUv:N&&v(x.thicknessMap.channel),alphaMapUv:oe&&v(x.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(pt||O),vertexNormals:!!H.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!H.attributes.uv&&(Fe||oe),fog:!!C,useFog:x.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||H.attributes.normal===void 0&&pt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:he,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:Me,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:ze,decodeVideoTexture:Fe&&x.map.isVideoTexture===!0&&nt.getTransfer(x.map.colorSpace)===mt,decodeVideoTextureEmissive:Wt&&x.emissiveMap.isVideoTexture===!0&&nt.getTransfer(x.emissiveMap.colorSpace)===mt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Mi,flipSided:x.side===Un,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:le&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(le&&x.extensions.multiDraw===!0||ke)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Le.vertexUv1s=l.has(1),Le.vertexUv2s=l.has(2),Le.vertexUv3s=l.has(3),l.clear(),Le}function p(x){const w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(const R in x.defines)w.push(R),w.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(g(w,x),_(w,x),w.push(i.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function g(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numSunLights),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numSunLightShadows),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function _(x,w){s.disableAll(),w.instancing&&s.enable(0),w.instancingColor&&s.enable(1),w.instancingMorph&&s.enable(2),w.matcap&&s.enable(3),w.envMap&&s.enable(4),w.normalMapObjectSpace&&s.enable(5),w.normalMapTangentSpace&&s.enable(6),w.clearcoat&&s.enable(7),w.iridescence&&s.enable(8),w.alphaTest&&s.enable(9),w.vertexColors&&s.enable(10),w.vertexAlphas&&s.enable(11),w.vertexUv1s&&s.enable(12),w.vertexUv2s&&s.enable(13),w.vertexUv3s&&s.enable(14),w.vertexTangents&&s.enable(15),w.anisotropy&&s.enable(16),w.alphaHash&&s.enable(17),w.batching&&s.enable(18),w.dispersion&&s.enable(19),w.retroreflection&&s.enable(24),w.batchingColor&&s.enable(20),w.gradientMap&&s.enable(21),w.packedNormalMap&&s.enable(22),w.vertexNormals&&s.enable(23),x.push(s.mask),s.disableAll(),w.fog&&s.enable(0),w.useFog&&s.enable(1),w.flatShading&&s.enable(2),w.logarithmicDepthBuffer&&s.enable(3),w.reversedDepthBuffer&&s.enable(4),w.skinning&&s.enable(5),w.morphTargets&&s.enable(6),w.morphNormals&&s.enable(7),w.morphColors&&s.enable(8),w.premultipliedAlpha&&s.enable(9),w.shadowMapEnabled&&s.enable(10),w.doubleSided&&s.enable(11),w.flipSided&&s.enable(12),w.useDepthPacking&&s.enable(13),w.dithering&&s.enable(14),w.transmission&&s.enable(15),w.sheen&&s.enable(16),w.opaque&&s.enable(17),w.pointsUvs&&s.enable(18),w.decodeVideoTexture&&s.enable(19),w.decodeVideoTextureEmissive&&s.enable(20),w.alphaToCoverage&&s.enable(21),w.numLightProbeGrids>0&&s.enable(22),w.hasPositionAttribute&&s.enable(23),x.push(s.mask)}function T(x){const w=h[x.type];let R;if(w){const L=zi[w];R=bb.clone(L.uniforms)}else R=x.uniforms;return R}function b(x,w){let R=d.get(w);return R!==void 0?++R.usedTimes:(R=new tM(i,w,x,a),c.push(R),d.set(w,R)),R}function k(x){if(--x.usedTimes===0){const w=c.indexOf(x);c[w]=c[c.length-1],c.pop(),d.delete(x.cacheKey),x.destroy()}}function S(x){o.remove(x)}function A(){o.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:T,acquireProgram:b,releaseProgram:k,releaseShaderCache:S,programs:c,dispose:A}}function oM(){let i=new WeakMap;function e(s){return i.has(s)}function t(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function n(s){i.delete(s)}function a(s,o,l){i.get(s)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:a,dispose:r}}function lM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function zp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Up(){const i=[];let e=0;const t=[],n=[],a=[];function r(){e=0,t.length=0,n.length=0,a.length=0}function s(u){let h=0;return u.isInstancedMesh&&(h+=2),u.isSkinnedMesh&&(h+=1),h}function o(u,h,v,m,p,g){let _=i[e];return _===void 0?(_={id:u.id,object:u,geometry:h,material:v,materialVariant:s(u),groupOrder:m,renderOrder:u.renderOrder,z:p,group:g},i[e]=_):(_.id=u.id,_.object=u,_.geometry=h,_.material=v,_.materialVariant=s(u),_.groupOrder=m,_.renderOrder=u.renderOrder,_.z=p,_.group=g),e++,_}function l(u,h,v,m,p,g,_){_.reversedDepth===!0&&(p=-p);const T=o(u,h,v,m,p,g);v.transmission>0?n.push(T):v.transparent===!0?a.push(T):t.push(T)}function c(u,h,v,m,p,g){const _=o(u,h,v,m,p,g);v.transmission>0?n.unshift(_):v.transparent===!0?a.unshift(_):t.unshift(_)}function d(u,h){t.length>1&&t.sort(u||lM),n.length>1&&n.sort(h||zp),a.length>1&&a.sort(h||zp)}function f(){for(let u=e,h=i.length;u<h;u++){const v=i[u];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:a,init:r,push:l,unshift:c,finish:f,sort:d}}function cM(){let i=new WeakMap;function e(n,a){const r=i.get(n);let s;return r===void 0?(s=new Up,i.set(n,[s])):a>=r.length?(s=new Up,r.push(s)):s=r[a],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function dM(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new Y,color:new ot};break;case"SpotLight":t={position:new Y,direction:new Y,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":t={color:new ot,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return i[e.id]=t,t}}}function uM(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let fM=0;function hM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function pM(i){const e=new dM,t=uM(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new Y);const a=new Y,r=new wt,s=new wt;function o(c){let d=0,f=0,u=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let h=0,v=0,m=0,p=0,g=0,_=0,T=0,b=0,k=0,S=0,A=0,x=0,w=0,R=0;c.sort(hM);for(let U=0,B=c.length;U<B;U++){const C=c[U],H=C.color,D=C.intensity,P=C.distance;let Z=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Ar?Z=C.shadow.map.texture:Z=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)d+=H.r*D,f+=H.g*D,u+=H.b*D;else if(C.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(C.sh.coefficients[V],D);R++}else if(C.isSunLight){const V=e.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const ee=C.shadow,ae=t.get(C);ae.shadowIntensity=ee.intensity,ae.shadowBias=ee.bias,ae.shadowNormalBias=ee.normalBias,ae.shadowRadius=ee.radius,ae.shadowMapSize.copy(ee.mapSize).multiply(ee.getFrameExtents()),n.sunShadow[v]=ae,n.sunShadowMap[v]=Z;const fe=ee.getViewportCount();for(let Me=0;Me<fe;Me++)n.sunShadowMatrix[m+Me]=ee.getMatrix(Me),n.sunShadowCascade[m+Me]=ee._cascadeData[Me];m+=fe,v++}n.sun[h]=V,h++}else if(C.isDirectionalLight){const V=e.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const ee=C.shadow,ae=t.get(C);ae.shadowIntensity=ee.intensity,ae.shadowBias=ee.bias,ae.shadowNormalBias=ee.normalBias,ae.shadowRadius=ee.radius,ae.shadowMapSize=ee.mapSize,n.directionalShadow[p]=ae,n.directionalShadowMap[p]=Z,n.directionalShadowMatrix[p]=C.shadow.matrix,k++}n.directional[p]=V,p++}else if(C.isSpotLight){const V=e.get(C);V.position.setFromMatrixPosition(C.matrixWorld),V.color.copy(H).multiplyScalar(D),V.distance=P,V.coneCos=Math.cos(C.angle),V.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),V.decay=C.decay,n.spot[_]=V;const ee=C.shadow;if(C.map&&(n.spotLightMap[x]=C.map,x++,ee.updateMatrices(C),C.castShadow&&w++),n.spotLightMatrix[_]=ee.matrix,C.castShadow){const ae=t.get(C);ae.shadowIntensity=ee.intensity,ae.shadowBias=ee.bias,ae.shadowNormalBias=ee.normalBias,ae.shadowRadius=ee.radius,ae.shadowMapSize=ee.mapSize,n.spotShadow[_]=ae,n.spotShadowMap[_]=Z,A++}_++}else if(C.isRectAreaLight){const V=e.get(C);V.color.copy(H).multiplyScalar(D),V.halfWidth.set(C.width*.5,0,0),V.halfHeight.set(0,C.height*.5,0),n.rectArea[T]=V,T++}else if(C.isPointLight){const V=e.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),V.distance=C.distance,V.decay=C.decay,C.castShadow){const ee=C.shadow,ae=t.get(C);ae.shadowIntensity=ee.intensity,ae.shadowBias=ee.bias,ae.shadowNormalBias=ee.normalBias,ae.shadowRadius=ee.radius,ae.shadowMapSize=ee.mapSize,ae.shadowCameraNear=ee.camera.near,ae.shadowCameraFar=ee.camera.far,n.pointShadow[g]=ae,n.pointShadowMap[g]=Z,n.pointShadowMatrix[g]=C.shadow.matrix,S++}n.point[g]=V,g++}else if(C.isHemisphereLight){const V=e.get(C);V.skyColor.copy(C.color).multiplyScalar(D),V.groundColor.copy(C.groundColor).multiplyScalar(D),n.hemi[b]=V,b++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ye.LTC_FLOAT_1,n.rectAreaLTC2=ye.LTC_FLOAT_2):(n.rectAreaLTC1=ye.LTC_HALF_1,n.rectAreaLTC2=ye.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=f,n.ambient[2]=u;const L=n.hash;(L.sunLength!==h||L.directionalLength!==p||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==T||L.hemiLength!==b||L.numSunShadows!==v||L.numDirectionalShadows!==k||L.numPointShadows!==S||L.numSpotShadows!==A||L.numSpotMaps!==x||L.numLightProbes!==R)&&(n.sun.length=h,n.directional.length=p,n.spot.length=_,n.rectArea.length=T,n.point.length=g,n.hemi.length=b,n.sunShadow.length=v,n.sunShadowMap.length=v,n.sunShadowMatrix.length=m,n.sunShadowCascade.length=m,n.directionalShadow.length=k,n.directionalShadowMap.length=k,n.directionalShadowMatrix.length=k,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+x-w,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,L.sunLength=h,L.directionalLength=p,L.pointLength=g,L.spotLength=_,L.rectAreaLength=T,L.hemiLength=b,L.numSunShadows=v,L.numDirectionalShadows=k,L.numPointShadows=S,L.numSpotShadows=A,L.numSpotMaps=x,L.numLightProbes=R,n.version=fM++)}function l(c,d){let f=0,u=0,h=0,v=0,m=0,p=0;const g=d.matrixWorldInverse;for(let _=0,T=c.length;_<T;_++){const b=c[_];if(b.isSunLight){const k=n.sun[f];k.direction.setFromMatrixPosition(b.matrixWorld),k.direction.transformDirection(g),f++}else if(b.isDirectionalLight){const k=n.directional[u];k.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),k.direction.sub(a),k.direction.transformDirection(g),u++}else if(b.isSpotLight){const k=n.spot[v];k.position.setFromMatrixPosition(b.matrixWorld),k.position.applyMatrix4(g),k.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),k.direction.sub(a),k.direction.transformDirection(g),v++}else if(b.isRectAreaLight){const k=n.rectArea[m];k.position.setFromMatrixPosition(b.matrixWorld),k.position.applyMatrix4(g),s.identity(),r.copy(b.matrixWorld),r.premultiply(g),s.extractRotation(r),k.halfWidth.set(b.width*.5,0,0),k.halfHeight.set(0,b.height*.5,0),k.halfWidth.applyMatrix4(s),k.halfHeight.applyMatrix4(s),m++}else if(b.isPointLight){const k=n.point[h];k.position.setFromMatrixPosition(b.matrixWorld),k.position.applyMatrix4(g),h++}else if(b.isHemisphereLight){const k=n.hemi[p];k.direction.setFromMatrixPosition(b.matrixWorld),k.direction.transformDirection(g),p++}}}return{setup:o,setupView:l,state:n}}function Np(i){const e=new pM(i),t=[],n=[],a=[];function r(u){f.camera=u,t.length=0,n.length=0,a.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function l(u){a.push(u)}function c(){e.setup(t)}function d(u){e.setupView(t,u)}const f={lightsArray:t,shadowsArray:n,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:d,pushLight:s,pushShadow:o,pushLightProbeGrid:l}}function mM(i){let e=new WeakMap;function t(a,r=0){const s=e.get(a);let o;return s===void 0?(o=new Np(i),e.set(a,[o])):r>=s.length?(o=new Np(i),s.push(o)):o=s[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const gM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vM=`uniform sampler2D shadow_pass;
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
}`,_M=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],yM=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],Op=new wt,Gs=new Y,Pd=new Y;function bM(i,e,t){let n=new Of;const a=new rt,r=new rt,s=new Dt,o=new Mb,l=new Eb,c={},d=t.maxTextureSize,f={[wr]:Un,[Un]:wr,[Mi]:Mi},u=new Ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:gM,fragmentShader:vM}),h=u.clone();h.defines.HORIZONTAL_PASS=1;const v=new Ai;v.setAttribute("position",new la(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new ai(v,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cl;let g=this.type;this.render=function(S,A,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;this.type===ly&&(He("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Cl);const w=i.getRenderTarget(),R=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),U=i.state;U.setBlending(sa),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const B=g!==this.type;B&&A.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(H=>H.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,H=S.length;C<H;C++){const D=S[C],P=D.shadow;if(P===void 0){He("WebGLShadowMap:",D,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;a.copy(P.mapSize);const Z=P.getFrameExtents();a.multiply(Z),r.copy(P.mapSize),(a.x>d||a.y>d)&&(a.x>d&&(r.x=Math.floor(d/Z.x),a.x=r.x*Z.x,P.mapSize.x=r.x),a.y>d&&(r.y=Math.floor(d/Z.y),a.y=r.y*Z.y,P.mapSize.y=r.y));const V=i.state.buffers.depth.getReversed();if(P.camera._reversedDepth=V,P.map===null||B===!0){if(P.map!==null&&(P.map.depthTexture!==null&&(P.map.depthTexture.dispose(),P.map.depthTexture=null),P.map.dispose()),this.type===Ks){if(D.isPointLight){He("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}P.map=new Ti(a.x,a.y,{format:Ar,type:Wi,minFilter:cn,magFilter:cn,generateMipmaps:!1}),P.map.texture.name=D.name+".shadowMap",P.map.depthTexture=new wo(a.x,a.y,Fi),P.map.depthTexture.name=D.name+".shadowMapDepth",P.map.depthTexture.format=fa,P.map.depthTexture.compareFunction=null,P.map.depthTexture.minFilter=Zt,P.map.depthTexture.magFilter=Zt}else D.isPointLight?(P.map=new fv(a.x),P.map.depthTexture=new _b(a.x,qi)):(P.map=new Ti(a.x,a.y),P.map.depthTexture=new wo(a.x,a.y,qi)),P.map.depthTexture.name=D.name+".shadowMap",P.map.depthTexture.format=fa,this.type===Cl?(P.map.depthTexture.compareFunction=V?If:Df,P.map.depthTexture.minFilter=cn,P.map.depthTexture.magFilter=cn):(P.map.depthTexture.compareFunction=null,P.map.depthTexture.minFilter=Zt,P.map.depthTexture.magFilter=Zt);P.camera.updateProjectionMatrix()}P.map.isWebGLCubeRenderTarget!==!0&&(P.map.width!==a.x||P.map.height!==a.y)&&P.map.setSize(a.x,a.y);const ee=P.map.isWebGLCubeRenderTarget?6:P.getViewportCount();D.isPointLight!==!0&&P.updateMatrices(D,x);for(let ae=0;ae<ee;ae++){const fe=P.getCamera(ae);if(D.isPointLight){const Me=P.camera,Ne=P.matrix,Ie=D.distance||Me.far;Ie!==Me.far&&(Me.far=Ie,Me.updateProjectionMatrix()),Gs.setFromMatrixPosition(D.matrixWorld),Me.position.copy(Gs),Pd.copy(Me.position),Pd.add(_M[ae]),Me.up.copy(yM[ae]),Me.lookAt(Pd),Me.updateMatrixWorld(),Ne.makeTranslation(-Gs.x,-Gs.y,-Gs.z),Op.multiplyMatrices(Me.projectionMatrix,Me.matrixWorldInverse),P._frustum.setFromProjectionMatrix(Op,Me.coordinateSystem,Me.reversedDepth)}if(P.map.isWebGLCubeRenderTarget)i.setRenderTarget(P.map,ae),i.clear();else{ae===0&&(i.setRenderTarget(P.map),i.clear());const Me=P.getViewport(ae);s.set(r.x*Me.x,r.y*Me.y,r.x*Me.z,r.y*Me.w),U.viewport(s)}n=P.getFrustum(ae),b(A,x,fe,D,this.type)}P.isPointLightShadow!==!0&&this.type===Ks&&_(P,x),P.needsUpdate=!1}g=this.type,p.needsUpdate=!1,i.setRenderTarget(w,R,L)};function _(S,A){const x=e.update(m);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,h.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,h.needsUpdate=!0),S.mapPass===null?S.mapPass=new Ti(a.x,a.y,{format:Ar,type:Wi}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),u.uniforms.shadow_pass.value=S.map.depthTexture,u.uniforms.resolution.value.set(S.map.width,S.map.height),u.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(A,null,x,u,m,null),h.uniforms.shadow_pass.value=S.mapPass.texture,h.uniforms.resolution.value.set(S.map.width,S.map.height),h.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(A,null,x,h,m,null)}function T(S,A,x,w){let R=null;const L=x.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(L!==void 0)R=L;else if(R=x.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const U=R.uuid,B=A.uuid;let C=c[U];C===void 0&&(C={},c[U]=C);let H=C[B];H===void 0&&(H=R.clone(),C[B]=H,A.addEventListener("dispose",k)),R=H}if(R.visible=A.visible,R.wireframe=A.wireframe,w===Ks?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:f[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const U=i.properties.get(R);U.light=x}return R}function b(S,A,x,w,R){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&R===Ks)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,S.matrixWorld);const B=e.update(S),C=S.material;if(Array.isArray(C)){const H=B.groups;for(let D=0,P=H.length;D<P;D++){const Z=H[D],V=C[Z.materialIndex];if(V&&V.visible){const ee=T(S,V,w,R);S.onBeforeShadow(i,S,A,x,B,ee,Z),i.renderBufferDirect(x,null,B,ee,S,Z),S.onAfterShadow(i,S,A,x,B,ee,Z)}}}else if(C.visible){const H=T(S,C,w,R);S.onBeforeShadow(i,S,A,x,B,H,null),i.renderBufferDirect(x,null,B,H,S,null),S.onAfterShadow(i,S,A,x,B,H,null)}}const U=S.children;for(let B=0,C=U.length;B<C;B++)b(U[B],A,x,w,R)}function k(S){S.target.removeEventListener("dispose",k);for(const x in c){const w=c[x],R=S.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}function xM(i,e){function t(){let N=!1;const ge=new Dt;let oe=null;const ve=new Dt(0,0,0,0);return{setMask:function(Se){oe!==Se&&!N&&(i.colorMask(Se,Se,Se,Se),oe=Se)},setLocked:function(Se){N=Se},setClear:function(Se,le,ze,Le,kt){kt===!0&&(Se*=Le,le*=Le,ze*=Le),ge.set(Se,le,ze,Le),ve.equals(ge)===!1&&(i.clearColor(Se,le,ze,Le),ve.copy(ge))},reset:function(){N=!1,oe=null,ve.set(-1,0,0,0)}}}function n(){let N=!1,ge=!1,oe=null,ve=null,Se=null;return{setReversed:function(le){if(ge!==le){const ze=e.get("EXT_clip_control");le?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT),ge=le;const Le=Se;Se=null,this.setClear(Le)}},getReversed:function(){return ge},setTest:function(le){le?se(i.DEPTH_TEST):he(i.DEPTH_TEST)},setMask:function(le){oe!==le&&!N&&(i.depthMask(le),oe=le)},setFunc:function(le){if(ge&&(le=Gy[le]),ve!==le){switch(le){case lu:i.depthFunc(i.NEVER);break;case cu:i.depthFunc(i.ALWAYS);break;case du:i.depthFunc(i.LESS);break;case xo:i.depthFunc(i.LEQUAL);break;case uu:i.depthFunc(i.EQUAL);break;case fu:i.depthFunc(i.GEQUAL);break;case hu:i.depthFunc(i.GREATER);break;case pu:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ve=le}},setLocked:function(le){N=le},setClear:function(le){Se!==le&&(Se=le,ge&&(le=1-le),i.clearDepth(le))},reset:function(){N=!1,oe=null,ve=null,Se=null,ge=!1}}}function a(){let N=!1,ge=null,oe=null,ve=null,Se=null,le=null,ze=null,Le=null,kt=null;return{setTest:function(ft){N||(ft?se(i.STENCIL_TEST):he(i.STENCIL_TEST))},setMask:function(ft){ge!==ft&&!N&&(i.stencilMask(ft),ge=ft)},setFunc:function(ft,_i,Ri){(oe!==ft||ve!==_i||Se!==Ri)&&(i.stencilFunc(ft,_i,Ri),oe=ft,ve=_i,Se=Ri)},setOp:function(ft,_i,Ri){(le!==ft||ze!==_i||Le!==Ri)&&(i.stencilOp(ft,_i,Ri),le=ft,ze=_i,Le=Ri)},setLocked:function(ft){N=ft},setClear:function(ft){kt!==ft&&(i.clearStencil(ft),kt=ft)},reset:function(){N=!1,ge=null,oe=null,ve=null,Se=null,le=null,ze=null,Le=null,kt=null}}}const r=new t,s=new n,o=new a,l=new WeakMap,c=new WeakMap;let d={},f={},u={},h=new WeakMap,v=[],m=null,p=!1,g=null,_=null,T=null,b=null,k=null,S=null,A=null,x=new ot(0,0,0),w=0,R=!1,L=null,U=null,B=null,C=null,H=null;const D=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,Z=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(V)[1]),P=Z>=1):V.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),P=Z>=2);let ee=null,ae={};const fe=i.getParameter(i.SCISSOR_BOX),Me=i.getParameter(i.VIEWPORT),Ne=new Dt().fromArray(fe),Ie=new Dt().fromArray(Me);function $e(N,ge,oe,ve){const Se=new Uint8Array(4),le=i.createTexture();i.bindTexture(N,le),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ze=0;ze<oe;ze++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(ge,0,i.RGBA,1,1,ve,0,i.RGBA,i.UNSIGNED_BYTE,Se):i.texImage2D(ge+ze,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Se);return le}const j={};j[i.TEXTURE_2D]=$e(i.TEXTURE_2D,i.TEXTURE_2D,1),j[i.TEXTURE_CUBE_MAP]=$e(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[i.TEXTURE_2D_ARRAY]=$e(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),j[i.TEXTURE_3D]=$e(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),se(i.DEPTH_TEST),s.setFunc(xo),Ge(!1),pt(Uh),se(i.CULL_FACE),Ye(sa);function se(N){d[N]!==!0&&(i.enable(N),d[N]=!0)}function he(N){d[N]!==!1&&(i.disable(N),d[N]=!1)}function Ue(N,ge){return u[N]!==ge?(i.bindFramebuffer(N,ge),u[N]=ge,N===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ge),N===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ge),!0):!1}function ke(N,ge){let oe=v,ve=!1;if(N){oe=h.get(ge),oe===void 0&&(oe=[],h.set(ge,oe));const Se=N.textures;if(oe.length!==Se.length||oe[0]!==i.COLOR_ATTACHMENT0){for(let le=0,ze=Se.length;le<ze;le++)oe[le]=i.COLOR_ATTACHMENT0+le;oe.length=Se.length,ve=!0}}else oe[0]!==i.BACK&&(oe[0]=i.BACK,ve=!0);ve&&i.drawBuffers(oe)}function Fe(N){return m!==N?(i.useProgram(N),m=N,!0):!1}const _t={[es]:i.FUNC_ADD,[dy]:i.FUNC_SUBTRACT,[uy]:i.FUNC_REVERSE_SUBTRACT};_t[fy]=i.MIN,_t[hy]=i.MAX;const Be={[py]:i.ZERO,[my]:i.ONE,[gy]:i.SRC_COLOR,[Pg]:i.SRC_ALPHA,[ky]:i.SRC_ALPHA_SATURATE,[by]:i.DST_COLOR,[_y]:i.DST_ALPHA,[vy]:i.ONE_MINUS_SRC_COLOR,[Dg]:i.ONE_MINUS_SRC_ALPHA,[xy]:i.ONE_MINUS_DST_COLOR,[yy]:i.ONE_MINUS_DST_ALPHA,[Sy]:i.CONSTANT_COLOR,[My]:i.ONE_MINUS_CONSTANT_COLOR,[Ey]:i.CONSTANT_ALPHA,[wy]:i.ONE_MINUS_CONSTANT_ALPHA};function Ye(N,ge,oe,ve,Se,le,ze,Le,kt,ft){if(N===sa){p===!0&&(he(i.BLEND),p=!1);return}if(p===!1&&(se(i.BLEND),p=!0),N!==cy){if(N!==g||ft!==R){if((_!==es||k!==es)&&(i.blendEquation(i.FUNC_ADD),_=es,k=es),ft)switch(N){case so:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Nh:i.blendFunc(i.ONE,i.ONE);break;case Oh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Fh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ct("WebGLState: Invalid blending: ",N);break}else switch(N){case so:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Nh:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Oh:ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fh:ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ct("WebGLState: Invalid blending: ",N);break}T=null,b=null,S=null,A=null,x.set(0,0,0),w=0,g=N,R=ft}return}Se=Se||ge,le=le||oe,ze=ze||ve,(ge!==_||Se!==k)&&(i.blendEquationSeparate(_t[ge],_t[Se]),_=ge,k=Se),(oe!==T||ve!==b||le!==S||ze!==A)&&(i.blendFuncSeparate(Be[oe],Be[ve],Be[le],Be[ze]),T=oe,b=ve,S=le,A=ze),(Le.equals(x)===!1||kt!==w)&&(i.blendColor(Le.r,Le.g,Le.b,kt),x.copy(Le),w=kt),g=N,R=!1}function st(N,ge){N.side===Mi?he(i.CULL_FACE):se(i.CULL_FACE);let oe=N.side===Un;ge&&(oe=!oe),Ge(oe),N.blending===so&&N.transparent===!1?Ye(sa):Ye(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),s.setFunc(N.depthFunc),s.setTest(N.depthTest),s.setMask(N.depthWrite),r.setMask(N.colorWrite);const ve=N.stencilWrite;o.setTest(ve),ve&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Wt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?se(i.SAMPLE_ALPHA_TO_COVERAGE):he(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(N){L!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),L=N)}function pt(N){N!==sy?(se(i.CULL_FACE),N!==U&&(N===Uh?i.cullFace(i.BACK):N===oy?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):he(i.CULL_FACE),U=N}function zt(N){N!==B&&(P&&i.lineWidth(N),B=N)}function Wt(N,ge,oe){N?(se(i.POLYGON_OFFSET_FILL),(C!==ge||H!==oe)&&(C=ge,H=oe,s.getReversed()&&(ge=-ge),i.polygonOffset(ge,oe))):he(i.POLYGON_OFFSET_FILL)}function dt(N){N?se(i.SCISSOR_TEST):he(i.SCISSOR_TEST)}function Ut(N){N===void 0&&(N=i.TEXTURE0+D-1),ee!==N&&(i.activeTexture(N),ee=N)}function O(N,ge,oe){oe===void 0&&(ee===null?oe=i.TEXTURE0+D-1:oe=ee);let ve=ae[oe];ve===void 0&&(ve={type:void 0,texture:void 0},ae[oe]=ve),(ve.type!==N||ve.texture!==ge)&&(ee!==oe&&(i.activeTexture(oe),ee=oe),i.bindTexture(N,ge||j[N]),ve.type=N,ve.texture=ge)}function Kt(){const N=ae[ee];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function $(){try{i.compressedTexImage2D(...arguments)}catch(N){ct("WebGLState:",N)}}function E(){try{i.compressedTexImage3D(...arguments)}catch(N){ct("WebGLState:",N)}}function y(){try{i.texSubImage2D(...arguments)}catch(N){ct("WebGLState:",N)}}function F(){try{i.texSubImage3D(...arguments)}catch(N){ct("WebGLState:",N)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(N){ct("WebGLState:",N)}}function Q(){try{i.compressedTexSubImage3D(...arguments)}catch(N){ct("WebGLState:",N)}}function ce(){try{i.texStorage2D(...arguments)}catch(N){ct("WebGLState:",N)}}function ue(){try{i.texStorage3D(...arguments)}catch(N){ct("WebGLState:",N)}}function ie(){try{i.texImage2D(...arguments)}catch(N){ct("WebGLState:",N)}}function re(){try{i.texImage3D(...arguments)}catch(N){ct("WebGLState:",N)}}function pe(N){return f[N]!==void 0?f[N]:i.getParameter(N)}function Pe(N,ge){f[N]!==ge&&(i.pixelStorei(N,ge),f[N]=ge)}function _e(N){Ne.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),Ne.copy(N))}function me(N){Ie.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),Ie.copy(N))}function De(N,ge){let oe=c.get(ge);oe===void 0&&(oe=new WeakMap,c.set(ge,oe));let ve=oe.get(N);ve===void 0&&(ve=i.getUniformBlockIndex(ge,N.name),oe.set(N,ve))}function Oe(N,ge){const ve=c.get(ge).get(N);l.get(ge)!==ve&&(i.uniformBlockBinding(ge,ve,N.__bindingPointIndex),l.set(ge,ve))}function Xe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},f={},ee=null,ae={},u={},h=new WeakMap,v=[],m=null,p=!1,g=null,_=null,T=null,b=null,k=null,S=null,A=null,x=new ot(0,0,0),w=0,R=!1,L=null,U=null,B=null,C=null,H=null,Ne.set(0,0,i.canvas.width,i.canvas.height),Ie.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:se,disable:he,bindFramebuffer:Ue,drawBuffers:ke,useProgram:Fe,setBlending:Ye,setMaterial:st,setFlipSided:Ge,setCullFace:pt,setLineWidth:zt,setPolygonOffset:Wt,setScissorTest:dt,activeTexture:Ut,bindTexture:O,unbindTexture:Kt,compressedTexImage2D:$,compressedTexImage3D:E,texImage2D:ie,texImage3D:re,pixelStorei:Pe,getParameter:pe,updateUBOMapping:De,uniformBlockBinding:Oe,texStorage2D:ce,texStorage3D:ue,texSubImage2D:y,texSubImage3D:F,compressedTexSubImage2D:q,compressedTexSubImage3D:Q,scissor:_e,viewport:me,reset:Xe}}function kM(i,e,t,n,a,r,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new rt,d=new WeakMap,f=new Set;let u;const h=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(E,y){return v?new OffscreenCanvas(E,y):Eo("canvas")}function p(E,y,F){let q=1;const Q=$(E);if((Q.width>F||Q.height>F)&&(q=F/Math.max(Q.width,Q.height)),q<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const ce=Math.floor(q*Q.width),ue=Math.floor(q*Q.height);u===void 0&&(u=m(ce,ue));const ie=y?m(ce,ue):u;return ie.width=ce,ie.height=ue,ie.getContext("2d").drawImage(E,0,0,ce,ue),He("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+ce+"x"+ue+")."),ie}else return"data"in E&&He("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),E;return E}function g(E){return E.generateMipmaps}function _(E){i.generateMipmap(E)}function T(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(E,y,F,q,Q,ce=!1){if(E!==null){if(i[E]!==void 0)return i[E];He("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ue;q&&(ue=e.get("EXT_texture_norm16"),ue||He("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ie=y;if(y===i.RED&&(F===i.FLOAT&&(ie=i.R32F),F===i.HALF_FLOAT&&(ie=i.R16F),F===i.UNSIGNED_BYTE&&(ie=i.R8),F===i.UNSIGNED_SHORT&&ue&&(ie=ue.R16_EXT),F===i.SHORT&&ue&&(ie=ue.R16_SNORM_EXT)),y===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(ie=i.R8UI),F===i.UNSIGNED_SHORT&&(ie=i.R16UI),F===i.UNSIGNED_INT&&(ie=i.R32UI),F===i.BYTE&&(ie=i.R8I),F===i.SHORT&&(ie=i.R16I),F===i.INT&&(ie=i.R32I)),y===i.RG&&(F===i.FLOAT&&(ie=i.RG32F),F===i.HALF_FLOAT&&(ie=i.RG16F),F===i.UNSIGNED_BYTE&&(ie=i.RG8),F===i.UNSIGNED_SHORT&&ue&&(ie=ue.RG16_EXT),F===i.SHORT&&ue&&(ie=ue.RG16_SNORM_EXT)),y===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(ie=i.RG8UI),F===i.UNSIGNED_SHORT&&(ie=i.RG16UI),F===i.UNSIGNED_INT&&(ie=i.RG32UI),F===i.BYTE&&(ie=i.RG8I),F===i.SHORT&&(ie=i.RG16I),F===i.INT&&(ie=i.RG32I)),y===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(ie=i.RGB8UI),F===i.UNSIGNED_SHORT&&(ie=i.RGB16UI),F===i.UNSIGNED_INT&&(ie=i.RGB32UI),F===i.BYTE&&(ie=i.RGB8I),F===i.SHORT&&(ie=i.RGB16I),F===i.INT&&(ie=i.RGB32I)),y===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(ie=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(ie=i.RGBA16UI),F===i.UNSIGNED_INT&&(ie=i.RGBA32UI),F===i.BYTE&&(ie=i.RGBA8I),F===i.SHORT&&(ie=i.RGBA16I),F===i.INT&&(ie=i.RGBA32I)),y===i.RGB&&(F===i.UNSIGNED_SHORT&&ue&&(ie=ue.RGB16_EXT),F===i.SHORT&&ue&&(ie=ue.RGB16_SNORM_EXT),F===i.UNSIGNED_INT_5_9_9_9_REV&&(ie=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(ie=i.R11F_G11F_B10F)),y===i.RGBA){const re=ce?tc:nt.getTransfer(Q);F===i.FLOAT&&(ie=i.RGBA32F),F===i.HALF_FLOAT&&(ie=i.RGBA16F),F===i.UNSIGNED_BYTE&&(ie=re===mt?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT&&ue&&(ie=ue.RGBA16_EXT),F===i.SHORT&&ue&&(ie=ue.RGBA16_SNORM_EXT),F===i.UNSIGNED_SHORT_4_4_4_4&&(ie=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(ie=i.RGB5_A1)}return(ie===i.R16F||ie===i.R32F||ie===i.RG16F||ie===i.RG32F||ie===i.RGBA16F||ie===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function k(E,y){let F;return E?y===null||y===qi||y===So?F=i.DEPTH24_STENCIL8:y===Fi?F=i.DEPTH32F_STENCIL8:y===ko&&(F=i.DEPTH24_STENCIL8,He("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===qi||y===So?F=i.DEPTH_COMPONENT24:y===Fi?F=i.DEPTH_COMPONENT32F:y===ko&&(F=i.DEPTH_COMPONENT16),F}function S(E,y){return g(E)===!0||E.isFramebufferTexture&&E.minFilter!==Zt&&E.minFilter!==cn?Math.log2(Math.max(y.width,y.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?y.mipmaps.length:1}function A(E){const y=E.target;y.removeEventListener("dispose",A),w(y),y.isVideoTexture&&d.delete(y),y.isHTMLTexture&&f.delete(y)}function x(E){const y=E.target;y.removeEventListener("dispose",x),L(y)}function w(E){const y=n.get(E);if(y.__webglInit===void 0)return;const F=E.source,q=h.get(F);if(q){const Q=q[y.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&R(E),Object.keys(q).length===0&&h.delete(F)}n.remove(E)}function R(E){const y=n.get(E);i.deleteTexture(y.__webglTexture);const F=E.source,q=h.get(F);delete q[y.__cacheKey],s.memory.textures--}function L(E){const y=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(y.__webglFramebuffer[q]))for(let Q=0;Q<y.__webglFramebuffer[q].length;Q++)i.deleteFramebuffer(y.__webglFramebuffer[q][Q]);else i.deleteFramebuffer(y.__webglFramebuffer[q]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[q])}else{if(Array.isArray(y.__webglFramebuffer))for(let q=0;q<y.__webglFramebuffer.length;q++)i.deleteFramebuffer(y.__webglFramebuffer[q]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let q=0;q<y.__webglColorRenderbuffer.length;q++)y.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[q]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const F=E.textures;for(let q=0,Q=F.length;q<Q;q++){const ce=n.get(F[q]);ce.__webglTexture&&(i.deleteTexture(ce.__webglTexture),s.memory.textures--),n.remove(F[q])}n.remove(E)}let U=0;function B(){U=0}function C(){return U}function H(E){U=E}function D(){const E=U;return E>=a.maxTextures&&He("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+a.maxTextures),U+=1,E}function P(E){const y=[];return y.push(E.wrapS),y.push(E.wrapT),y.push(E.wrapR||0),y.push(E.magFilter),y.push(E.minFilter),y.push(E.anisotropy),y.push(E.internalFormat),y.push(E.format),y.push(E.type),y.push(E.generateMipmaps),y.push(E.premultiplyAlpha),y.push(E.flipY),y.push(E.unpackAlignment),y.push(E.colorSpace),y.join()}function Z(E,y){const F=n.get(E);if(E.isVideoTexture&&O(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&F.__version!==E.version){const q=E.image;if(q===null)He("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)He("WebGLRenderer: Texture marked for update but image is incomplete");else{he(F,E,y);return}}else E.isExternalTexture&&(F.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+y)}function V(E,y){const F=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){he(F,E,y);return}else E.isExternalTexture&&(F.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+y)}function ee(E,y){const F=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){he(F,E,y);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+y)}function ae(E,y){const F=n.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&F.__version!==E.version){Ue(F,E,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+y)}const fe={[mu]:i.REPEAT,[aa]:i.CLAMP_TO_EDGE,[gu]:i.MIRRORED_REPEAT},Me={[Zt]:i.NEAREST,[Ry]:i.NEAREST_MIPMAP_NEAREST,[Yo]:i.NEAREST_MIPMAP_LINEAR,[cn]:i.LINEAR,[td]:i.LINEAR_MIPMAP_NEAREST,[Ua]:i.LINEAR_MIPMAP_LINEAR},Ne={[Dy]:i.NEVER,[Oy]:i.ALWAYS,[Iy]:i.LESS,[Df]:i.LEQUAL,[zy]:i.EQUAL,[If]:i.GEQUAL,[Uy]:i.GREATER,[Ny]:i.NOTEQUAL};function Ie(E,y){if(y.type===Fi&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===cn||y.magFilter===td||y.magFilter===Yo||y.magFilter===Ua||y.minFilter===cn||y.minFilter===td||y.minFilter===Yo||y.minFilter===Ua)&&He("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,fe[y.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,fe[y.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,fe[y.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,Me[y.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,Me[y.minFilter]),y.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,Ne[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Zt||y.minFilter!==Yo&&y.minFilter!==Ua||y.type===Fi&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,a.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function $e(E,y){let F=!1;E.__webglInit===void 0&&(E.__webglInit=!0,y.addEventListener("dispose",A));const q=y.source;let Q=h.get(q);Q===void 0&&(Q={},h.set(q,Q));const ce=P(y);if(ce!==E.__cacheKey){Q[ce]===void 0&&(Q[ce]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,F=!0),Q[ce].usedTimes++;const ue=Q[E.__cacheKey];ue!==void 0&&(Q[E.__cacheKey].usedTimes--,ue.usedTimes===0&&R(y)),E.__cacheKey=ce,E.__webglTexture=Q[ce].texture}return F}function j(E,y,F){return Math.floor(Math.floor(E/F)/y)}function se(E,y,F,q){const ce=E.updateRanges;if(ce.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,F,q,y.data);else{ce.sort((Pe,_e)=>Pe.start-_e.start);let ue=0;for(let Pe=1;Pe<ce.length;Pe++){const _e=ce[ue],me=ce[Pe],De=_e.start+_e.count,Oe=j(me.start,y.width,4),Xe=j(_e.start,y.width,4);me.start<=De+1&&Oe===Xe&&j(me.start+me.count-1,y.width,4)===Oe?_e.count=Math.max(_e.count,me.start+me.count-_e.start):(++ue,ce[ue]=me)}ce.length=ue+1;const ie=t.getParameter(i.UNPACK_ROW_LENGTH),re=t.getParameter(i.UNPACK_SKIP_PIXELS),pe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let Pe=0,_e=ce.length;Pe<_e;Pe++){const me=ce[Pe],De=Math.floor(me.start/4),Oe=Math.ceil(me.count/4),Xe=De%y.width,N=Math.floor(De/y.width),ge=Oe,oe=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Xe),t.pixelStorei(i.UNPACK_SKIP_ROWS,N),t.texSubImage2D(i.TEXTURE_2D,0,Xe,N,ge,oe,F,q,y.data)}E.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ie),t.pixelStorei(i.UNPACK_SKIP_PIXELS,re),t.pixelStorei(i.UNPACK_SKIP_ROWS,pe)}}function he(E,y,F){let q=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(q=i.TEXTURE_3D);const Q=$e(E,y),ce=y.source;t.bindTexture(q,E.__webglTexture,i.TEXTURE0+F);const ue=n.get(ce);if(ce.version!==ue.__version||Q===!0){if(t.activeTexture(i.TEXTURE0+F),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const oe=nt.getPrimaries(nt.workingColorSpace),ve=y.colorSpace===Ca?null:nt.getPrimaries(y.colorSpace),Se=y.colorSpace===Ca||oe===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se)}t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment);let re=p(y.image,!1,a.maxTextureSize);re=Kt(y,re);const pe=r.convert(y.format,y.colorSpace),Pe=r.convert(y.type);let _e=b(y.internalFormat,pe,Pe,y.normalized,y.colorSpace,y.isVideoTexture);Ie(q,y);let me;const De=y.mipmaps,Oe=y.isVideoTexture!==!0,Xe=ue.__version===void 0||Q===!0,N=ce.dataReady,ge=S(y,re);if(y.isDepthTexture)_e=k(y.format===_r,y.type),Xe&&(Oe?t.texStorage2D(i.TEXTURE_2D,1,_e,re.width,re.height):t.texImage2D(i.TEXTURE_2D,0,_e,re.width,re.height,0,pe,Pe,null));else if(y.isDataTexture)if(De.length>0){Oe&&Xe&&t.texStorage2D(i.TEXTURE_2D,ge,_e,De[0].width,De[0].height);for(let oe=0,ve=De.length;oe<ve;oe++)me=De[oe],Oe?N&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,me.width,me.height,pe,Pe,me.data):t.texImage2D(i.TEXTURE_2D,oe,_e,me.width,me.height,0,pe,Pe,me.data);y.generateMipmaps=!1}else Oe?(Xe&&t.texStorage2D(i.TEXTURE_2D,ge,_e,re.width,re.height),N&&se(y,re,pe,Pe)):t.texImage2D(i.TEXTURE_2D,0,_e,re.width,re.height,0,pe,Pe,re.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Oe&&Xe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ge,_e,De[0].width,De[0].height,re.depth);for(let oe=0,ve=De.length;oe<ve;oe++)if(me=De[oe],y.format!==wi)if(pe!==null)if(Oe){if(N)if(y.layerUpdates.size>0){const Se=gp(me.width,me.height,y.format,y.type);for(const le of y.layerUpdates){const ze=me.data.subarray(le*Se/me.data.BYTES_PER_ELEMENT,(le+1)*Se/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,le,me.width,me.height,1,pe,ze)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,me.width,me.height,re.depth,pe,me.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,oe,_e,me.width,me.height,re.depth,0,me.data,0,0);else He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?N&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,me.width,me.height,re.depth,pe,Pe,me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,oe,_e,me.width,me.height,re.depth,0,pe,Pe,me.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Oe&&Xe&&t.texStorage2D(i.TEXTURE_2D,ge,_e,De[0].width,De[0].height);for(let oe=0,ve=De.length;oe<ve;oe++)me=De[oe],y.format!==wi?pe!==null?Oe?N&&t.compressedTexSubImage2D(i.TEXTURE_2D,oe,0,0,me.width,me.height,pe,me.data):t.compressedTexImage2D(i.TEXTURE_2D,oe,_e,me.width,me.height,0,me.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?N&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,me.width,me.height,pe,Pe,me.data):t.texImage2D(i.TEXTURE_2D,oe,_e,me.width,me.height,0,pe,Pe,me.data)}else if(y.isDataArrayTexture)if(Oe){if(Xe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ge,_e,re.width,re.height,re.depth),N)if(y.layerUpdates.size>0){const oe=gp(re.width,re.height,y.format,y.type);for(const ve of y.layerUpdates){const Se=re.data.subarray(ve*oe/re.data.BYTES_PER_ELEMENT,(ve+1)*oe/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ve,re.width,re.height,1,pe,Pe,Se)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,pe,Pe,re.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,_e,re.width,re.height,re.depth,0,pe,Pe,re.data);else if(y.isData3DTexture)Oe?(Xe&&t.texStorage3D(i.TEXTURE_3D,ge,_e,re.width,re.height,re.depth),N&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,pe,Pe,re.data)):t.texImage3D(i.TEXTURE_3D,0,_e,re.width,re.height,re.depth,0,pe,Pe,re.data);else if(y.isFramebufferTexture){if(Xe)if(Oe)t.texStorage2D(i.TEXTURE_2D,ge,_e,re.width,re.height);else{let oe=re.width,ve=re.height;for(let Se=0;Se<ge;Se++)t.texImage2D(i.TEXTURE_2D,Se,_e,oe,ve,0,pe,Pe,null),oe>>=1,ve>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in i){const oe=i.canvas;if(oe.hasAttribute("layoutsubtree")||oe.setAttribute("layoutsubtree","true"),re.parentNode!==oe){oe.appendChild(re),f.add(y),oe.onpaint=ve=>{const Se=ve.changedElements;for(const le of f)Se.includes(le.image)&&(le.needsUpdate=!0)},oe.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,re);else{const Se=i.RGBA,le=i.RGBA,ze=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Se,le,ze,re)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(De.length>0){if(Oe&&Xe){const oe=$(De[0]);t.texStorage2D(i.TEXTURE_2D,ge,_e,oe.width,oe.height)}for(let oe=0,ve=De.length;oe<ve;oe++)me=De[oe],Oe?N&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,pe,Pe,me):t.texImage2D(i.TEXTURE_2D,oe,_e,pe,Pe,me);y.generateMipmaps=!1}else if(Oe){if(Xe){const oe=$(re);t.texStorage2D(i.TEXTURE_2D,ge,_e,oe.width,oe.height)}N&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,pe,Pe,re)}else t.texImage2D(i.TEXTURE_2D,0,_e,pe,Pe,re);g(y)&&_(q),ue.__version=ce.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function Ue(E,y,F){if(y.image.length!==6)return;const q=$e(E,y),Q=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+F);const ce=n.get(Q);if(Q.version!==ce.__version||q===!0){t.activeTexture(i.TEXTURE0+F);const ue=nt.getPrimaries(nt.workingColorSpace),ie=y.colorSpace===Ca?null:nt.getPrimaries(y.colorSpace),re=y.colorSpace===Ca||ue===ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);const pe=y.isCompressedTexture||y.image[0].isCompressedTexture,Pe=y.image[0]&&y.image[0].isDataTexture,_e=[];for(let le=0;le<6;le++)!pe&&!Pe?_e[le]=p(y.image[le],!0,a.maxCubemapSize):_e[le]=Pe?y.image[le].image:y.image[le],_e[le]=Kt(y,_e[le]);const me=_e[0],De=r.convert(y.format,y.colorSpace),Oe=r.convert(y.type),Xe=b(y.internalFormat,De,Oe,y.normalized,y.colorSpace),N=y.isVideoTexture!==!0,ge=ce.__version===void 0||q===!0,oe=Q.dataReady;let ve=S(y,me);Ie(i.TEXTURE_CUBE_MAP,y);let Se;if(pe){N&&ge&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,Xe,me.width,me.height);for(let le=0;le<6;le++){Se=_e[le].mipmaps;for(let ze=0;ze<Se.length;ze++){const Le=Se[ze];y.format!==wi?De!==null?N?oe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,ze,0,0,Le.width,Le.height,De,Le.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,ze,Xe,Le.width,Le.height,0,Le.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,ze,0,0,Le.width,Le.height,De,Oe,Le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,ze,Xe,Le.width,Le.height,0,De,Oe,Le.data)}}}else{if(Se=y.mipmaps,N&&ge){Se.length>0&&ve++;const le=$(_e[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,Xe,le.width,le.height)}for(let le=0;le<6;le++)if(Pe){N?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,_e[le].width,_e[le].height,De,Oe,_e[le].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Xe,_e[le].width,_e[le].height,0,De,Oe,_e[le].data);for(let ze=0;ze<Se.length;ze++){const kt=Se[ze].image[le].image;N?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,ze+1,0,0,kt.width,kt.height,De,Oe,kt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,ze+1,Xe,kt.width,kt.height,0,De,Oe,kt.data)}}else{N?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,De,Oe,_e[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Xe,De,Oe,_e[le]);for(let ze=0;ze<Se.length;ze++){const Le=Se[ze];N?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,ze+1,0,0,De,Oe,Le.image[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,ze+1,Xe,De,Oe,Le.image[le])}}}g(y)&&_(i.TEXTURE_CUBE_MAP),ce.__version=Q.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function ke(E,y,F,q,Q,ce){const ue=r.convert(F.format,F.colorSpace),ie=r.convert(F.type),re=b(F.internalFormat,ue,ie,F.normalized,F.colorSpace),pe=n.get(y),Pe=n.get(F);if(Pe.__renderTarget=y,!pe.__hasExternalTextures){const _e=Math.max(1,y.width>>ce),me=Math.max(1,y.height>>ce);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,ce,re,_e,me,y.depth,0,ue,ie,null):t.texImage2D(Q,ce,re,_e,me,0,ue,ie,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),Ut(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,Q,Pe.__webglTexture,0,dt(y)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,Q,Pe.__webglTexture,ce),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Fe(E,y,F){if(i.bindRenderbuffer(i.RENDERBUFFER,E),y.depthBuffer){const q=y.depthTexture,Q=q&&q.isDepthTexture?q.type:null,ce=k(y.stencilBuffer,Q),ue=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ut(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt(y),ce,y.width,y.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,dt(y),ce,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,ce,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ue,i.RENDERBUFFER,E)}else{const q=y.textures;for(let Q=0;Q<q.length;Q++){const ce=q[Q],ue=r.convert(ce.format,ce.colorSpace),ie=r.convert(ce.type),re=b(ce.internalFormat,ue,ie,ce.normalized,ce.colorSpace);Ut(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt(y),re,y.width,y.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,dt(y),re,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,re,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function _t(E,y,F){const q=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Q=n.get(y.depthTexture);if(Q.__renderTarget=y,(!Q.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),q){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,y.depthTexture.addEventListener("dispose",A)),Q.__webglTexture===void 0){Q.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),Ie(i.TEXTURE_CUBE_MAP,y.depthTexture);const pe=r.convert(y.depthTexture.format),Pe=r.convert(y.depthTexture.type);let _e;y.depthTexture.format===fa?_e=i.DEPTH_COMPONENT24:y.depthTexture.format===_r&&(_e=i.DEPTH24_STENCIL8);for(let me=0;me<6;me++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,_e,y.width,y.height,0,pe,Pe,null)}}else Z(y.depthTexture,0);const ce=Q.__webglTexture,ue=dt(y),ie=q?i.TEXTURE_CUBE_MAP_POSITIVE_X+F:i.TEXTURE_2D,re=y.depthTexture.format===_r?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===fa)Ut(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,ie,ce,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,re,ie,ce,0);else if(y.depthTexture.format===_r)Ut(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,ie,ce,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,re,ie,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Be(E){const y=n.get(E),F=E.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==E.depthTexture){const q=E.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),q){const Q=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,q.removeEventListener("dispose",Q)};q.addEventListener("dispose",Q),y.__depthDisposeCallback=Q}y.__boundDepthTexture=q}if(E.depthTexture&&!y.__autoAllocateDepthBuffer)if(F)for(let q=0;q<6;q++)_t(y.__webglFramebuffer[q],E,q);else{const q=E.texture.mipmaps;q&&q.length>0?_t(y.__webglFramebuffer[0],E,0):_t(y.__webglFramebuffer,E,0)}else if(F){y.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[q]),y.__webglDepthbuffer[q]===void 0)y.__webglDepthbuffer[q]=i.createRenderbuffer(),Fe(y.__webglDepthbuffer[q],E,!1);else{const Q=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=y.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,ce)}}else{const q=E.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),Fe(y.__webglDepthbuffer,E,!1);else{const Q=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,ce)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ye(E,y,F){const q=n.get(E);y!==void 0&&ke(q.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Be(E)}function st(E){const y=E.texture,F=n.get(E),q=n.get(y);E.addEventListener("dispose",x);const Q=E.textures,ce=E.isWebGLCubeRenderTarget===!0,ue=Q.length>1;if(ue||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=y.version,s.memory.textures++),ce){F.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer[ie]=[];for(let re=0;re<y.mipmaps.length;re++)F.__webglFramebuffer[ie][re]=i.createFramebuffer()}else F.__webglFramebuffer[ie]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer=[];for(let ie=0;ie<y.mipmaps.length;ie++)F.__webglFramebuffer[ie]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(ue)for(let ie=0,re=Q.length;ie<re;ie++){const pe=n.get(Q[ie]);pe.__webglTexture===void 0&&(pe.__webglTexture=i.createTexture(),s.memory.textures++)}if(E.samples>0&&Ut(E)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ie=0;ie<Q.length;ie++){const re=Q[ie];F.__webglColorRenderbuffer[ie]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[ie]);const pe=r.convert(re.format,re.colorSpace),Pe=r.convert(re.type),_e=b(re.internalFormat,pe,Pe,re.normalized,re.colorSpace,E.isXRRenderTarget===!0),me=dt(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,me,_e,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.RENDERBUFFER,F.__webglColorRenderbuffer[ie])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Fe(F.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ce){t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Ie(i.TEXTURE_CUBE_MAP,y);for(let ie=0;ie<6;ie++)if(y.mipmaps&&y.mipmaps.length>0)for(let re=0;re<y.mipmaps.length;re++)ke(F.__webglFramebuffer[ie][re],E,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,re);else ke(F.__webglFramebuffer[ie],E,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);g(y)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){for(let ie=0,re=Q.length;ie<re;ie++){const pe=Q[ie],Pe=n.get(pe);let _e=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(_e=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(_e,Pe.__webglTexture),Ie(_e,pe),ke(F.__webglFramebuffer,E,pe,i.COLOR_ATTACHMENT0+ie,_e,0),g(pe)&&_(_e)}t.unbindTexture()}else{let ie=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ie=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ie,q.__webglTexture),Ie(ie,y),y.mipmaps&&y.mipmaps.length>0)for(let re=0;re<y.mipmaps.length;re++)ke(F.__webglFramebuffer[re],E,y,i.COLOR_ATTACHMENT0,ie,re);else ke(F.__webglFramebuffer,E,y,i.COLOR_ATTACHMENT0,ie,0);g(y)&&_(ie),t.unbindTexture()}E.depthBuffer&&Be(E)}function Ge(E){const y=E.textures;for(let F=0,q=y.length;F<q;F++){const Q=y[F];if(g(Q)){const ce=T(E),ue=n.get(Q).__webglTexture;t.bindTexture(ce,ue),_(ce),t.unbindTexture()}}}const pt=[],zt=[];function Wt(E){if(E.samples>0){if(Ut(E)===!1){const y=E.textures,F=E.width,q=E.height;let Q=i.COLOR_BUFFER_BIT;const ce=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=n.get(E),ie=y.length>1;if(ie)for(let pe=0;pe<y.length;pe++)t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer);const re=E.texture.mipmaps;re&&re.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let pe=0;pe<y.length;pe++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),ie){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ue.__webglColorRenderbuffer[pe]);const Pe=n.get(y[pe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Pe,0)}i.blitFramebuffer(0,0,F,q,0,0,F,q,Q,i.NEAREST),l===!0&&(pt.length=0,zt.length=0,pt.push(i.COLOR_ATTACHMENT0+pe),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&(pt.push(ce),zt.push(ce),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,zt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,pt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ie)for(let pe=0;pe<y.length;pe++){t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,ue.__webglColorRenderbuffer[pe]);const Pe=n.get(y[pe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,Pe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&l){const y=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function dt(E){return Math.min(a.maxSamples,E.samples)}function Ut(E){const y=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function O(E){const y=s.render.frame;d.get(E)!==y&&(d.set(E,y),E.update())}function Kt(E,y){const F=E.colorSpace,q=E.format,Q=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||F!==ec&&F!==Ca&&(nt.getTransfer(F)===mt?(q!==wi||Q!==Zn)&&He("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ct("WebGLTextures: Unsupported texture color space:",F)),y}function $(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=B,this.getTextureUnits=C,this.setTextureUnits=H,this.setTexture2D=Z,this.setTexture2DArray=V,this.setTexture3D=ee,this.setTextureCube=ae,this.rebindTextures=Ye,this.setupRenderTarget=st,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=Wt,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=ke,this.useMultisampledRTT=Ut,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function SM(i,e){function t(n,a=Ca){let r;const s=nt.getTransfer(a);if(n===Zn)return i.UNSIGNED_BYTE;if(n===Af)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Rf)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Vg)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===qg)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Hg)return i.BYTE;if(n===Gg)return i.SHORT;if(n===ko)return i.UNSIGNED_SHORT;if(n===Tf)return i.INT;if(n===qi)return i.UNSIGNED_INT;if(n===Fi)return i.FLOAT;if(n===Wi)return i.HALF_FLOAT;if(n===Wg)return i.ALPHA;if(n===Kg)return i.RGB;if(n===wi)return i.RGBA;if(n===fa)return i.DEPTH_COMPONENT;if(n===_r)return i.DEPTH_STENCIL;if(n===Xg)return i.RED;if(n===Lf)return i.RED_INTEGER;if(n===Ar)return i.RG;if(n===Cf)return i.RG_INTEGER;if(n===Pf)return i.RGBA_INTEGER;if(n===Pl||n===Dl||n===Il||n===zl)if(s===mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Pl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Dl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Il)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===zl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Pl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Dl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Il)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===zl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===vu||n===_u||n===yu||n===bu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===vu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===_u)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===yu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===bu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xu||n===ku||n===Su||n===Mu||n===Eu||n===jl||n===wu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===xu||n===ku)return s===mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Su)return s===mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Mu)return r.COMPRESSED_R11_EAC;if(n===Eu)return r.COMPRESSED_SIGNED_R11_EAC;if(n===jl)return r.COMPRESSED_RG11_EAC;if(n===wu)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Tu||n===Au||n===Ru||n===Lu||n===Cu||n===Pu||n===Du||n===Iu||n===zu||n===Uu||n===Nu||n===Ou||n===Fu||n===Bu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Tu)return s===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Au)return s===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ru)return s===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Lu)return s===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Cu)return s===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Pu)return s===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Du)return s===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Iu)return s===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===zu)return s===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Uu)return s===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Nu)return s===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ou)return s===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Fu)return s===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Bu)return s===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===$u||n===Hu||n===Gu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===$u)return s===mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Hu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Gu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Vu||n===qu||n===Ql||n===Wu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Vu)return r.COMPRESSED_RED_RGTC1_EXT;if(n===qu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ql)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Wu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===So?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const MM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,EM=`
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

}`;class wM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new av(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ki({vertexShader:MM,fragmentShader:EM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ai(new wc(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class TM extends Cr{constructor(e,t){super();const n=this;let a=null,r=1,s=null,o="local-floor",l=1,c=null,d=null,f=null,u=null,h=null,v=null;const m=typeof XRWebGLBinding<"u",p=new wM,g={},_=t.getContextAttributes();let T=null,b=null;const k=[],S=[],A=new rt;let x=null,w=null;const R=new ui;R.viewport=new Dt;const L=new ui;L.viewport=new Dt;const U=[R,L],B=new Db;let C=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let se=k[j];return se===void 0&&(se=new cd,k[j]=se),se.getTargetRaySpace()},this.getControllerGrip=function(j){let se=k[j];return se===void 0&&(se=new cd,k[j]=se),se.getGripSpace()},this.getHand=function(j){let se=k[j];return se===void 0&&(se=new cd,k[j]=se),se.getHandSpace()};function D(j){const se=S.indexOf(j.inputSource);if(se===-1)return;const he=k[se];he!==void 0&&(he.update(j.inputSource,j.frame,c||s),he.dispatchEvent({type:j.type,data:j.inputSource}))}function P(){a.removeEventListener("select",D),a.removeEventListener("selectstart",D),a.removeEventListener("selectend",D),a.removeEventListener("squeeze",D),a.removeEventListener("squeezestart",D),a.removeEventListener("squeezeend",D),a.removeEventListener("end",P),a.removeEventListener("inputsourceschange",Z);for(let j=0;j<k.length;j++){const se=S[j];se!==null&&(S[j]=null,k[j].disconnect(se))}C=null,H=null,p.reset();for(const j in g)delete g[j];if(e.setRenderTarget(T),h=null,u=null,f=null,a=null,b=null,$e.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(A.width,A.height,!1),w!==null){const j=w.camera;j.fov=w.fov,j.zoom=w.zoom,j.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&He("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&He("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return u!==null?u:h},this.getBinding=function(){return f===null&&m&&(f=new XRWebGLBinding(a,t)),f},this.getFrame=function(){return v},this.getSession=function(){return a},this.setSession=async function(j){if(a=j,a!==null){if(T=e.getRenderTarget(),a.addEventListener("select",D),a.addEventListener("selectstart",D),a.addEventListener("selectend",D),a.addEventListener("squeeze",D),a.addEventListener("squeezestart",D),a.addEventListener("squeezeend",D),a.addEventListener("end",P),a.addEventListener("inputsourceschange",Z),_.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(A),m&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,Ue=null,ke=null;_.depth&&(ke=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=_.stencil?_r:fa,Ue=_.stencil?So:qi);const Fe={colorFormat:t.RGBA8,depthFormat:ke,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Fe),a.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),b=new Ti(u.textureWidth,u.textureHeight,{format:wi,type:Zn,depthTexture:new wo(u.textureWidth,u.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const he={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(a,t,he),a.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),b=new Ti(h.framebufferWidth,h.framebufferHeight,{format:wi,type:Zn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await a.requestReferenceSpace(o),$e.setContext(a),$e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function Z(j){for(let se=0;se<j.removed.length;se++){const he=j.removed[se],Ue=S.indexOf(he);Ue>=0&&(S[Ue]=null,k[Ue].disconnect(he))}for(let se=0;se<j.added.length;se++){const he=j.added[se];let Ue=S.indexOf(he);if(Ue===-1){for(let Fe=0;Fe<k.length;Fe++)if(Fe>=S.length){S.push(he),Ue=Fe;break}else if(S[Fe]===null){S[Fe]=he,Ue=Fe;break}if(Ue===-1)break}const ke=k[Ue];ke&&ke.connect(he)}}const V=new Y,ee=new Y;function ae(j,se,he){V.setFromMatrixPosition(se.matrixWorld),ee.setFromMatrixPosition(he.matrixWorld);const Ue=V.distanceTo(ee),ke=se.projectionMatrix.elements,Fe=he.projectionMatrix.elements,_t=ke[14]/(ke[10]-1),Be=ke[14]/(ke[10]+1),Ye=(ke[9]+1)/ke[5],st=(ke[9]-1)/ke[5],Ge=(ke[8]-1)/ke[0],pt=(Fe[8]+1)/Fe[0],zt=_t*Ge,Wt=_t*pt,dt=Ue/(-Ge+pt),Ut=dt*-Ge;if(se.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Ut),j.translateZ(dt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),ke[10]===-1)j.projectionMatrix.copy(se.projectionMatrix),j.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const O=_t+dt,Kt=Be+dt,$=zt-Ut,E=Wt+(Ue-Ut),y=Ye*Be/Kt*O,F=st*Be/Kt*O;j.projectionMatrix.makePerspective($,E,y,F,O,Kt),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function fe(j,se){se===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(se.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(a===null)return;let se=j.near,he=j.far;p.texture!==null&&(p.depthNear>0&&(se=p.depthNear),p.depthFar>0&&(he=p.depthFar)),B.near=L.near=R.near=se,B.far=L.far=R.far=he,(C!==B.near||H!==B.far)&&(a.updateRenderState({depthNear:B.near,depthFar:B.far}),C=B.near,H=B.far),B.layers.mask=j.layers.mask|6,R.layers.mask=B.layers.mask&-5,L.layers.mask=B.layers.mask&-3;const Ue=j.parent,ke=B.cameras;fe(B,Ue);for(let Fe=0;Fe<ke.length;Fe++)fe(ke[Fe],Ue);ke.length===2?ae(B,R,L):B.projectionMatrix.copy(R.projectionMatrix),w===null&&j.isPerspectiveCamera&&(w={camera:j,fov:j.fov,zoom:j.zoom}),Me(j,B,Ue)};function Me(j,se,he){he===null?j.matrix.copy(se.matrixWorld):(j.matrix.copy(he.matrixWorld),j.matrix.invert(),j.matrix.multiply(se.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(se.projectionMatrix),j.projectionMatrixInverse.copy(se.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Xu*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(u===null&&h===null))return l},this.setFoveation=function(j){l=j,u!==null&&(u.fixedFoveation=j),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=j)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(B)},this.getCameraTexture=function(j){return g[j]};let Ne=null;function Ie(j,se){if(d=se.getViewerPose(c||s),v=se,d!==null){const he=d.views;h!==null&&(e.setRenderTargetFramebuffer(b,h.framebuffer),e.setRenderTarget(b));let Ue=!1;he.length!==B.cameras.length&&(B.cameras.length=0,Ue=!0);for(let Be=0;Be<he.length;Be++){const Ye=he[Be];let st=null;if(h!==null)st=h.getViewport(Ye);else{const pt=f.getViewSubImage(u,Ye);st=pt.viewport,Be===0&&(e.setRenderTargetTextures(b,pt.colorTexture,pt.depthStencilTexture),e.setRenderTarget(b))}let Ge=U[Be];Ge===void 0&&(Ge=new ui,Ge.layers.enable(Be),Ge.viewport=new Dt,U[Be]=Ge),Ge.matrix.fromArray(Ye.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(Ye.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(st.x,st.y,st.width,st.height),Be===0&&(B.matrix.copy(Ge.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Ue===!0&&B.cameras.push(Ge)}const ke=a.enabledFeatures;if(ke&&ke.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&m){f=n.getBinding();const Be=f.getDepthInformation(he[0]);Be&&Be.isValid&&Be.texture&&p.init(Be,a.renderState)}if(ke&&ke.includes("camera-access")&&m){e.state.unbindTexture(),f=n.getBinding();for(let Be=0;Be<he.length;Be++){const Ye=he[Be].camera;if(Ye){let st=g[Ye];st||(st=new av,g[Ye]=st);const Ge=f.getCameraImage(Ye);st.sourceTexture=Ge}}}}for(let he=0;he<k.length;he++){const Ue=S[he],ke=k[he];Ue!==null&&ke!==void 0&&ke.update(Ue,se,c||s)}Ne&&Ne(j,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),v=null}const $e=new dv;$e.setAnimationLoop(Ie),this.setAnimationLoop=function(j){Ne=j},this.dispose=function(){}}}const AM=new wt,vv=new We;vv.set(-1,0,0,0,1,0,0,0,1);function RM(i,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,rv(i)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function a(p,g,_,T,b){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),f(p,g)):g.isMeshPhongMaterial?(r(p,g),d(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),u(p,g),g.isMeshPhysicalMaterial&&h(p,g,b)):g.isMeshMatcapMaterial?(r(p,g),v(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),m(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(s(p,g),g.isLineDashedMaterial&&o(p,g)):g.isPointsMaterial?l(p,g,_,T):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===Un&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===Un&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const _=e.get(g),T=_.envMap,b=_.envMapRotation;T&&(p.envMap.value=T,p.envMapRotation.value.setFromMatrix4(AM.makeRotationFromEuler(b)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(vv),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function s(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function o(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,_,T){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*_,p.scale.value=T*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function d(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function f(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function u(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function h(p,g,_){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Un&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,g){g.matcap&&(p.matcap.value=g.matcap)}function m(p,g){const _=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:a}}function LM(i,e,t,n){let a={},r={},s=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,k){const S=k.program;n.uniformBlockBinding(b,S)}function c(b,k){let S=a[b.id];S===void 0&&(p(b),S=d(b),a[b.id]=S,b.addEventListener("dispose",_));const A=k.program;n.updateUBOMapping(b,A);const x=e.render.frame;r[b.id]!==x&&(u(b),r[b.id]=x)}function d(b){const k=f();b.__bindingPointIndex=k;const S=i.createBuffer(),A=b.__size,x=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,A,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,k,S),S}function f(){for(let b=0;b<o;b++)if(s.indexOf(b)===-1)return s.push(b),b;return ct("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(b){const k=a[b.id],S=b.uniforms,A=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,k);for(let x=0,w=S.length;x<w;x++){const R=S[x];if(Array.isArray(R))for(let L=0,U=R.length;L<U;L++)h(R[L],x,L,A);else h(R,x,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(b,k,S,A){if(m(b,k,S,A)===!0){const x=b.__offset,w=b.value;if(Array.isArray(w)){let R=0;for(let L=0;L<w.length;L++){const U=w[L],B=g(U);v(U,b.__data,R),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(R+=B.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(w,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,b.__data)}}function v(b,k,S){typeof b=="number"||typeof b=="boolean"?k[0]=b:b.isMatrix3?(k[0]=b.elements[0],k[1]=b.elements[1],k[2]=b.elements[2],k[3]=0,k[4]=b.elements[3],k[5]=b.elements[4],k[6]=b.elements[5],k[7]=0,k[8]=b.elements[6],k[9]=b.elements[7],k[10]=b.elements[8],k[11]=0):ArrayBuffer.isView(b)?k.set(new b.constructor(b.buffer,b.byteOffset,k.length)):b.toArray(k,S)}function m(b,k,S,A){const x=b.value,w=k+"_"+S;if(A[w]===void 0)return typeof x=="number"||typeof x=="boolean"?A[w]=x:ArrayBuffer.isView(x)?A[w]=x.slice():A[w]=x.clone(),!0;{const R=A[w];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return A[w]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function p(b){const k=b.uniforms;let S=0;const A=16;for(let w=0,R=k.length;w<R;w++){const L=Array.isArray(k[w])?k[w]:[k[w]];for(let U=0,B=L.length;U<B;U++){const C=L[U],H=Array.isArray(C.value)?C.value:[C.value];for(let D=0,P=H.length;D<P;D++){const Z=H[D],V=g(Z),ee=S%A,ae=ee%V.boundary,fe=ee+ae;S+=ae,fe!==0&&A-fe<V.storage&&(S+=A-fe),C.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=S,S+=V.storage}}}const x=S%A;return x>0&&(S+=A-x),b.__size=S,b.__cache={},this}function g(b){const k={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(k.boundary=4,k.storage=4):b.isVector2?(k.boundary=8,k.storage=8):b.isVector3||b.isColor?(k.boundary=16,k.storage=12):b.isVector4?(k.boundary=16,k.storage=16):b.isMatrix3?(k.boundary=48,k.storage=48):b.isMatrix4?(k.boundary=64,k.storage=64):b.isTexture?He("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(k.boundary=16,k.storage=b.byteLength):He("WebGLRenderer: Unsupported uniform value type.",b),k}function _(b){const k=b.target;k.removeEventListener("dispose",_);const S=s.indexOf(k.__bindingPointIndex);s.splice(S,1),i.deleteBuffer(a[k.id]),delete a[k.id],delete r[k.id]}function T(){for(const b in a)i.deleteBuffer(a[b]);s=[],a={},r={}}return{bind:l,update:c,dispose:T}}const CM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Pi=null;function PM(){return Pi===null&&(Pi=new pb(CM,16,16,Ar,Wi),Pi.name="DFG_LUT",Pi.minFilter=cn,Pi.magFilter=cn,Pi.wrapS=aa,Pi.wrapT=aa,Pi.generateMipmaps=!1,Pi.needsUpdate=!0),Pi}class DM{constructor(e={}){const{canvas:t=$y(),context:n=null,depth:a=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:h=Zn}=e;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=s;const m=h,p=new Set([Pf,Cf,Lf]),g=new Set([Zn,qi,ko,So,Af,Rf]),_=new Uint32Array(4),T=new Int32Array(4),b=new Y;let k=null,S=null;const A=[],x=[];let w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let L=!1,U=null,B=null,C=null,H=null;this._outputColorSpace=Wn;let D=0,P=0,Z=null,V=-1,ee=null;const ae=new Dt,fe=new Dt;let Me=null;const Ne=new ot(0);let Ie=0,$e=t.width,j=t.height,se=1,he=null,Ue=null;const ke=new Dt(0,0,$e,j),Fe=new Dt(0,0,$e,j);let _t=!1;const Be=new Of;let Ye=!1,st=!1;const Ge=new wt,pt=new Y,zt=new Dt,Wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let dt=!1;function Ut(){return Z===null?se:1}let O=n;function Kt(M,z){return t.getContext(M,z)}let $,E,y,F,q,Q,ce,ue,ie,re,pe,Pe,_e,me,De,Oe,Xe,N,ge,oe,ve,Se,le;try{const M={alpha:!0,depth:a,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ef}`),t.addEventListener("webglcontextlost",kt,!1),t.addEventListener("webglcontextrestored",ft,!1),t.addEventListener("webglcontextcreationerror",_i,!1),O===null){const z="webgl2";if(O=Kt(z,M),O===null)throw Kt(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ze()}catch(M){throw t.removeEventListener("webglcontextlost",kt,!1),t.removeEventListener("webglcontextrestored",ft,!1),t.removeEventListener("webglcontextcreationerror",_i,!1),ct("WebGLRenderer: "+M.message),M}function ze(){$=new PS(O),$.init(),ve=new SM(O,$),E=new kS(O,$,e,ve),y=new xM(O,$),E.reversedDepthBuffer&&u&&y.buffers.depth.setReversed(!0),B=O.createFramebuffer(),C=O.createFramebuffer(),H=O.createFramebuffer(),F=new zS(O),q=new oM,Q=new kM(O,$,y,q,E,ve,F),ce=new CS(R),ue=new Nb(O),Se=new bS(O,ue),ie=new DS(O,ue,F,Se),re=new NS(O,ie,ue,Se,F),N=new US(O,E,Q),De=new SS(q),pe=new sM(R,ce,$,E,Se,De),Pe=new RM(R,q),_e=new cM,me=new mM($),Xe=new yS(R,ce,y,re,v,l),Oe=new bM(R,re,E),le=new LM(O,F,E,y),ge=new xS(O,$,F),oe=new IS(O,$,F),F.programs=pe.programs,R.capabilities=E,R.extensions=$,R.properties=q,R.renderLists=_e,R.shadowMap=Oe,R.state=y,R.info=F}m!==Zn&&(w=new FS(m,t.width,t.height,o,a,r));const Le=new TM(R,O);this.xr=Le,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const M=$.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=$.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(M){M!==void 0&&(se=M,this.setSize($e,j,!1))},this.getSize=function(M){return M.set($e,j)},this.setSize=function(M,z,J=!0){if(Le.isPresenting){He("WebGLRenderer: Can't change size while VR device is presenting.");return}$e=M,j=z,t.width=Math.floor(M*se),t.height=Math.floor(z*se),J===!0&&(t.style.width=M+"px",t.style.height=z+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,M,z)},this.getDrawingBufferSize=function(M){return M.set($e*se,j*se).floor()},this.setDrawingBufferSize=function(M,z,J){$e=M,j=z,se=J,t.width=Math.floor(M*J),t.height=Math.floor(z*J),this.setViewport(0,0,M,z)},this.setEffects=function(M){if(m===Zn){ct("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let z=0;z<M.length;z++)if(M[z].isOutputPass===!0){He("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(ae)},this.getViewport=function(M){return M.copy(ke)},this.setViewport=function(M,z,J,W){M.isVector4?ke.set(M.x,M.y,M.z,M.w):ke.set(M,z,J,W),y.viewport(ae.copy(ke).multiplyScalar(se).round())},this.getScissor=function(M){return M.copy(Fe)},this.setScissor=function(M,z,J,W){M.isVector4?Fe.set(M.x,M.y,M.z,M.w):Fe.set(M,z,J,W),y.scissor(fe.copy(Fe).multiplyScalar(se).round())},this.getScissorTest=function(){return _t},this.setScissorTest=function(M){y.setScissorTest(_t=M)},this.setOpaqueSort=function(M){he=M},this.setTransparentSort=function(M){Ue=M},this.getClearColor=function(M){return M.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor(...arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha(...arguments)},this.clear=function(M=!0,z=!0,J=!0){let W=0;if(M){let K=!1;if(Z!==null){const xe=Z.texture.format;K=p.has(xe)}if(K){const xe=Z.texture.type,Te=g.has(xe),be=Xe.getClearColor(),Ae=Xe.getClearAlpha(),Ce=be.r,Ze=be.g,et=be.b;Te?(_[0]=Ce,_[1]=Ze,_[2]=et,_[3]=Ae,O.clearBufferuiv(O.COLOR,0,_)):(T[0]=Ce,T[1]=Ze,T[2]=et,T[3]=Ae,O.clearBufferiv(O.COLOR,0,T))}else W|=O.COLOR_BUFFER_BIT}z&&(W|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(W|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&O.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),U=M},this.dispose=function(){t.removeEventListener("webglcontextlost",kt,!1),t.removeEventListener("webglcontextrestored",ft,!1),t.removeEventListener("webglcontextcreationerror",_i,!1),Xe.dispose(),_e.dispose(),me.dispose(),q.dispose(),ce.dispose(),re.dispose(),Se.dispose(),le.dispose(),pe.dispose(),Le.dispose(),Le.removeEventListener("sessionstart",rh),Le.removeEventListener("sessionend",sh),tr.stop()};function kt(M){M.preventDefault(),Hh("WebGLRenderer: Context Lost."),L=!0}function ft(){Hh("WebGLRenderer: Context Restored."),L=!1;const M=F.autoReset,z=Oe.enabled,J=Oe.autoUpdate,W=Oe.needsUpdate,K=Oe.type;ze(),F.autoReset=M,Oe.enabled=z,Oe.autoUpdate=J,Oe.needsUpdate=W,Oe.type=K}function _i(M){ct("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Ri(M){const z=M.target;z.removeEventListener("dispose",Ri),M0(z)}function M0(M){E0(M),q.remove(M)}function E0(M){const z=q.get(M).programs;z!==void 0&&(z.forEach(function(J){pe.releaseProgram(J)}),M.isShaderMaterial&&pe.releaseShaderCache(M))}this.renderBufferDirect=function(M,z,J,W,K,xe){z===null&&(z=Wt);const Te=K.isMesh&&K.matrixWorld.determinantAffine()<0,be=A0(M,z,J,W,K);y.setMaterial(W,Te);let Ae=J.index,Ce=1;if(W.wireframe===!0){if(Ae=ie.getWireframeAttribute(J),Ae===void 0)return;Ce=2}const Ze=J.drawRange,et=J.attributes.position;let Re=Ze.start*Ce,ht=(Ze.start+Ze.count)*Ce;xe!==null&&(Re=Math.max(Re,xe.start*Ce),ht=Math.min(ht,(xe.start+xe.count)*Ce)),Ae!==null?(Re=Math.max(Re,0),ht=Math.min(ht,Ae.count)):et!=null&&(Re=Math.max(Re,0),ht=Math.min(ht,et.count));const $t=ht-Re;if($t<0||$t===1/0)return;Se.setup(K,W,be,J,Ae);let Et,yt=ge;if(Ae!==null&&(Et=ue.get(Ae),yt=oe,yt.setIndex(Et)),K.isMesh)W.wireframe===!0?(y.setLineWidth(W.wireframeLinewidth*Ut()),yt.setMode(O.LINES)):yt.setMode(O.TRIANGLES);else if(K.isLine){let mn=W.linewidth;mn===void 0&&(mn=1),y.setLineWidth(mn*Ut()),K.isLineSegments?yt.setMode(O.LINES):K.isLineLoop?yt.setMode(O.LINE_LOOP):yt.setMode(O.LINE_STRIP)}else K.isPoints?yt.setMode(O.POINTS):K.isSprite&&yt.setMode(O.TRIANGLES);if(K.isBatchedMesh)if($.get("WEBGL_multi_draw"))yt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const mn=K._multiDrawStarts,we=K._multiDrawCounts,Mn=K._multiDrawCount,lt=Ae?ue.get(Ae).bytesPerElement:1,ri=q.get(W).currentProgram.getUniforms();for(let Li=0;Li<Mn;Li++)ri.setValue(O,"_gl_DrawID",Li),yt.render(mn[Li]/lt,we[Li])}else if(K.isInstancedMesh)yt.renderInstances(Re,$t,K.count);else if(J.isInstancedBufferGeometry){const mn=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,we=Math.min(J.instanceCount,mn);yt.renderInstances(Re,$t,we)}else yt.render(Re,$t)};function ah(M,z,J,W){U!==null&&M.isNodeMaterial&&U.setObject(W,M),Ye===!0&&De.setState(M,J,!1),M.transparent===!0&&M.side===Mi&&M.forceSinglePass===!1?(M.side=Un,M.needsUpdate=!0,Ko(M,z,W),M.side=wr,M.needsUpdate=!0,Ko(M,z,W),M.side=Mi):Ko(M,z,W)}this.compile=function(M,z,J=null){J===null&&(J=M),U!==null&&U.renderStart(M,z,J),S=me.get(J),S.init(z),x.push(S),J.traverseVisible(function(K){K.isLight&&K.layers.test(z.layers)&&(S.pushLight(K),K.castShadow&&S.pushShadow(K))}),M!==J&&M.traverseVisible(function(K){K.isLight&&K.layers.test(z.layers)&&(S.pushLight(K),K.castShadow&&S.pushShadow(K))}),S.setupLights(),U!==null&&U.updateLights(S.state.lightsArray),st=this.localClippingEnabled,Ye=De.init(this.clippingPlanes,st),Ye===!0&&De.setGlobalState(this.clippingPlanes,z),U!==null&&Oe.render(S.state.shadowsArray,J,z);const W=new Set;return M.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const xe=K.material;if(xe)if(Array.isArray(xe))for(let Te=0;Te<xe.length;Te++){const be=xe[Te];ah(be,J,z,K),W.add(be)}else ah(xe,J,z,K),W.add(xe)}),S=x.pop(),U!==null&&U.renderEnd(),W},this.compileAsync=function(M,z,J=null){const W=this.compile(M,z,J);return new Promise(K=>{function xe(){if(W.forEach(function(Te){const Ae=q.get(Te).currentProgram;(Ae===void 0||Ae.isReady())&&W.delete(Te)}),W.size===0){K(M);return}setTimeout(xe,10)}$.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let $c=null;function w0(M){$c&&$c(M)}function rh(){tr.stop()}function sh(){tr.start()}const tr=new dv;tr.setAnimationLoop(w0),typeof self<"u"&&tr.setContext(self),this.setAnimationLoop=function(M){$c=M,Le.setAnimationLoop(M),M===null?tr.stop():tr.start()},Le.addEventListener("sessionstart",rh),Le.addEventListener("sessionend",sh),this.render=function(M,z){if(z!==void 0&&z.isCamera!==!0){ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;U!==null&&U.renderStart(M,z);const J=Le.enabled===!0&&Le.isPresenting===!0,W=w!==null&&(Z===null||J)&&w.begin(R,Z);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Le.enabled===!0&&Le.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Le.cameraAutoUpdate===!0&&Le.updateCamera(z),z=Le.getCamera()),M.isScene===!0&&M.onBeforeRender(R,M,z,Z),S=me.get(M,x.length),S.init(z),S.state.textureUnits=Q.getTextureUnits(),x.push(S),Ge.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Be.setFromProjectionMatrix(Ge,Bi,z.reversedDepth),st=this.localClippingEnabled,Ye=De.init(this.clippingPlanes,st),k=_e.get(M,A.length),k.init(),A.push(k),Le.enabled===!0&&Le.isPresenting===!0){const Te=R.xr.getDepthSensingMesh();Te!==null&&Hc(Te,z,-1/0,R.sortObjects)}Hc(M,z,0,R.sortObjects),k.finish(),U!==null&&U.updateLights(S.state.lightsArray),R.sortObjects===!0&&k.sort(he,Ue),dt=Le.enabled===!1||Le.isPresenting===!1||Le.hasDepthSensing()===!1,dt&&Xe.addToRenderList(k,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ye===!0&&De.beginShadows();const K=S.state.shadowsArray;if(Oe.render(K,M,z),Ye===!0&&De.endShadows(),(W&&w.hasRenderPass())===!1){const Te=k.opaque,be=k.transmissive;if(S.setupLights(),z.isArrayCamera){const Ae=z.cameras;if(be.length>0)for(let Ce=0,Ze=Ae.length;Ce<Ze;Ce++){const et=Ae[Ce];lh(Te,be,M,et)}dt&&Xe.render(M);for(let Ce=0,Ze=Ae.length;Ce<Ze;Ce++){const et=Ae[Ce];oh(k,M,et,et.viewport)}}else be.length>0&&lh(Te,be,M,z),dt&&Xe.render(M),oh(k,M,z)}Z!==null&&P===0&&(Q.updateMultisampleRenderTarget(Z),Q.updateRenderTargetMipmap(Z)),W&&w.end(R),M.isScene===!0&&M.onAfterRender(R,M,z),Se.resetDefaultState(),V=-1,ee=null,x.pop(),x.length>0?(S=x[x.length-1],Q.setTextureUnits(S.state.textureUnits),Ye===!0&&De.setGlobalState(R.clippingPlanes,S.state.camera)):S=null,A.pop(),A.length>0?k=A[A.length-1]:k=null,U!==null&&U.renderEnd()};function Hc(M,z,J,W){if(M.visible===!1)return;if(M.layers.test(z.layers)){if(M.isGroup)J=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(z);else if(M.isLightProbeGrid)S.pushLightProbeGrid(M);else if(M.isLight)S.pushLight(M),M.castShadow&&S.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(Be)){W&&zt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ge);const Te=re.update(M),be=M.material;be.visible&&k.push(M,Te,be,J,zt.z,null,z)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(Be))){const Te=re.update(M),be=M.material;if(W&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),zt.copy(M.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),zt.copy(Te.boundingSphere.center)),zt.applyMatrix4(M.matrixWorld).applyMatrix4(Ge)),Array.isArray(be)){const Ae=Te.groups;for(let Ce=0,Ze=Ae.length;Ce<Ze;Ce++){const et=Ae[Ce],Re=be[et.materialIndex];Re&&Re.visible&&k.push(M,Te,Re,J,zt.z,et,z)}}else be.visible&&k.push(M,Te,be,J,zt.z,null,z)}}const xe=M.children;for(let Te=0,be=xe.length;Te<be;Te++)Hc(xe[Te],z,J,W)}function oh(M,z,J,W){const{opaque:K,transmissive:xe,transparent:Te}=M;S.setupLightsView(J),Ye===!0&&De.setGlobalState(R.clippingPlanes,J),W&&y.viewport(ae.copy(W)),K.length>0&&Wo(K,z,J),xe.length>0&&Wo(xe,z,J),Te.length>0&&Wo(Te,z,J),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function lh(M,z,J,W){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[W.id]===void 0){const Re=$.has("EXT_color_buffer_half_float")||$.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[W.id]=new Ti(1,1,{generateMipmaps:!0,type:Re?Wi:Zn,minFilter:Ua,samples:Math.max(4,E.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:nt.workingColorSpace})}const xe=S.state.transmissionRenderTarget[W.id],Te=W.viewport||ae;xe.setSize(Te.z*R.transmissionResolutionScale,Te.w*R.transmissionResolutionScale);const be=R.getRenderTarget(),Ae=R.getActiveCubeFace(),Ce=R.getActiveMipmapLevel();R.setRenderTarget(xe),R.getClearColor(Ne),Ie=R.getClearAlpha(),Ie<1&&R.setClearColor(16777215,.5),R.clear(),dt&&Xe.render(J);const Ze=R.toneMapping;R.toneMapping=Gi;const et=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),S.setupLightsView(W),Ye===!0&&De.setGlobalState(R.clippingPlanes,W),Wo(M,J,W),Q.updateMultisampleRenderTarget(xe),Q.updateRenderTargetMipmap(xe),$.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let ht=0,$t=z.length;ht<$t;ht++){const Et=z[ht],{object:yt,geometry:mn,material:we,group:Mn}=Et;if(we.side===Mi&&yt.layers.test(W.layers)){const lt=we.side;we.side=Un,we.needsUpdate=!0,ch(yt,J,W,mn,we,Mn),we.side=lt,we.needsUpdate=!0,Re=!0}}Re===!0&&(Q.updateMultisampleRenderTarget(xe),Q.updateRenderTargetMipmap(xe))}R.setRenderTarget(be,Ae,Ce),R.setClearColor(Ne,Ie),et!==void 0&&(W.viewport=et),R.toneMapping=Ze}function Wo(M,z,J){const W=z.isScene===!0?z.overrideMaterial:null;for(let K=0,xe=M.length;K<xe;K++){const Te=M[K],{object:be,geometry:Ae,group:Ce}=Te;let Ze=Te.material;Ze.allowOverride===!0&&W!==null&&(Ze=W),be.layers.test(J.layers)&&ch(be,z,J,Ae,Ze,Ce)}}function ch(M,z,J,W,K,xe){U!==null&&K.isNodeMaterial&&U.setObject(M,K),M.onBeforeRender(R,z,J,W,K,xe),M.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),K.onBeforeRender(R,z,J,W,M,xe),K.transparent===!0&&K.side===Mi&&K.forceSinglePass===!1?(K.side=Un,K.needsUpdate=!0,R.renderBufferDirect(J,z,W,K,M,xe),K.side=wr,K.needsUpdate=!0,R.renderBufferDirect(J,z,W,K,M,xe),K.side=Mi):R.renderBufferDirect(J,z,W,K,M,xe),M.onAfterRender(R,z,J,W,K,xe)}function Ko(M,z,J){z.isScene!==!0&&(z=Wt);const W=q.get(M),K=S.state.lights,xe=S.state.shadowsArray,Te=K.state.version,be=pe.getParameters(M,K.state,xe,z,J,S.state.lightProbeGridArray),Ae=pe.getProgramCacheKey(be);let Ce=W.programs;W.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?z.environment:null,W.fog=z.fog;const Ze=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;W.envMap=ce.get(M.envMap||W.environment,Ze),W.envMapRotation=W.environment!==null&&M.envMap===null?z.environmentRotation:M.envMapRotation,Ce===void 0&&(M.addEventListener("dispose",Ri),Ce=new Map,W.programs=Ce);let et=Ce.get(Ae);if(et!==void 0){if(W.currentProgram===et&&W.lightsStateVersion===Te)return uh(M,be),et}else be.uniforms=pe.getUniforms(M),U!==null&&M.isNodeMaterial&&U.build(M,J,be),M.onBeforeCompile(be,R),et=pe.acquireProgram(be,Ae),Ce.set(Ae,et),W.uniforms=be.uniforms;const Re=W.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Re.clippingPlanes=De.uniform),uh(M,be),W.needsLights=L0(M),W.lightsStateVersion=Te,W.needsLights&&(Re.ambientLightColor.value=K.state.ambient,Re.lightProbe.value=K.state.probe,Re.sunLights.value=K.state.sun,Re.sunLightShadows.value=K.state.sunShadow,Re.directionalLights.value=K.state.directional,Re.directionalLightShadows.value=K.state.directionalShadow,Re.spotLights.value=K.state.spot,Re.spotLightShadows.value=K.state.spotShadow,Re.rectAreaLights.value=K.state.rectArea,Re.ltc_1.value=K.state.rectAreaLTC1,Re.ltc_2.value=K.state.rectAreaLTC2,Re.pointLights.value=K.state.point,Re.pointLightShadows.value=K.state.pointShadow,Re.hemisphereLights.value=K.state.hemi,Re.sunShadowMatrix.value=K.state.sunShadowMatrix,Re.sunShadowCascade.value=K.state.sunShadowCascade,Re.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Re.spotLightMatrix.value=K.state.spotLightMatrix,Re.spotLightMap.value=K.state.spotLightMap,Re.pointShadowMatrix.value=K.state.pointShadowMatrix),W.lightProbeGrid=S.state.lightProbeGridArray.length>0,W.currentProgram=et,W.uniformsList=null,et}function dh(M){if(M.uniformsList===null){const z=M.currentProgram.getUniforms();M.uniformsList=Nl.seqWithValue(z.seq,M.uniforms)}return M.uniformsList}function uh(M,z){const J=q.get(M);J.outputColorSpace=z.outputColorSpace,J.batching=z.batching,J.batchingColor=z.batchingColor,J.instancing=z.instancing,J.instancingColor=z.instancingColor,J.instancingMorph=z.instancingMorph,J.skinning=z.skinning,J.morphTargets=z.morphTargets,J.morphNormals=z.morphNormals,J.morphColors=z.morphColors,J.morphTargetsCount=z.morphTargetsCount,J.numClippingPlanes=z.numClippingPlanes,J.numIntersection=z.numClipIntersection,J.vertexAlphas=z.vertexAlphas,J.vertexTangents=z.vertexTangents,J.toneMapping=z.toneMapping}function T0(M,z){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;b.setFromMatrixPosition(z.matrixWorld);for(let J=0,W=M.length;J<W;J++){const K=M[J];if(K.texture!==null&&K.boundingBox.containsPoint(b))return K}return null}function A0(M,z,J,W,K){z.isScene!==!0&&(z=Wt),Q.resetTextureUnits();const xe=z.fog,Te=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?z.environment:null,be=Z===null?R.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:nt.workingColorSpace,Ae=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Ce=ce.get(W.envMap||Te,Ae),Ze=W.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,et=!!J.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Re=!!J.morphAttributes.position,ht=!!J.morphAttributes.normal,$t=!!J.morphAttributes.color;let Et=Gi;W.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Et=R.toneMapping);const yt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,mn=yt!==void 0?yt.length:0,we=q.get(W),Mn=S.state.lights;if(Ye===!0&&(st===!0||M!==ee)){const St=M===ee&&W.id===V;De.setState(W,M,St)}let lt=!1;W.version===we.__version?(we.needsLights&&we.lightsStateVersion!==Mn.state.version||we.outputColorSpace!==be||K.isBatchedMesh&&we.batching===!1||!K.isBatchedMesh&&we.batching===!0||K.isBatchedMesh&&we.batchingColor===!0&&K._colorsTexture===null||K.isBatchedMesh&&we.batchingColor===!1&&K._colorsTexture!==null||K.isInstancedMesh&&we.instancing===!1||!K.isInstancedMesh&&we.instancing===!0||K.isSkinnedMesh&&we.skinning===!1||!K.isSkinnedMesh&&we.skinning===!0||K.isInstancedMesh&&we.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&we.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&we.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&we.instancingMorph===!1&&K.morphTexture!==null||we.envMap!==Ce||W.fog===!0&&we.fog!==xe||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==De.numPlanes||we.numIntersection!==De.numIntersection)||we.vertexAlphas!==Ze||we.vertexTangents!==et||we.morphTargets!==Re||we.morphNormals!==ht||we.morphColors!==$t||we.toneMapping!==Et||we.morphTargetsCount!==mn||!!we.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(lt=!0):(lt=!0,we.__version=W.version);let ri=we.currentProgram;lt===!0&&(ri=Ko(W,z,K),U&&W.isNodeMaterial&&U.onUpdateProgram(W,ri,we));let Li=!1,va=!1,Dr=!1;const gt=ri.getUniforms(),Ot=we.uniforms;if(y.useProgram(ri.program)&&(Li=!0,va=!0,Dr=!0),W.id!==V&&(V=W.id,va=!0),we.needsLights){const St=T0(S.state.lightProbeGridArray,K);we.lightProbeGrid!==St&&(we.lightProbeGrid=St,va=!0)}if(Li||ee!==M){y.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),gt.setValue(O,"projectionMatrix",M.projectionMatrix),gt.setValue(O,"viewMatrix",M.matrixWorldInverse);const ya=gt.map.cameraPosition;ya!==void 0&&ya.setValue(O,pt.setFromMatrixPosition(M.matrixWorld)),E.logarithmicDepthBuffer&&gt.setValue(O,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&gt.setValue(O,"isOrthographic",M.isOrthographicCamera===!0),ee!==M&&(ee=M,va=!0,Dr=!0)}if(we.needsLights&&(Mn.state.sunShadowMap.length>0&&gt.setValue(O,"sunShadowMap",Mn.state.sunShadowMap,Q),Mn.state.directionalShadowMap.length>0&&gt.setValue(O,"directionalShadowMap",Mn.state.directionalShadowMap,Q),Mn.state.spotShadowMap.length>0&&gt.setValue(O,"spotShadowMap",Mn.state.spotShadowMap,Q),Mn.state.pointShadowMap.length>0&&gt.setValue(O,"pointShadowMap",Mn.state.pointShadowMap,Q)),K.isSkinnedMesh){gt.setOptional(O,K,"bindMatrix"),gt.setOptional(O,K,"bindMatrixInverse");const St=K.skeleton;St&&(St.boneTexture===null&&St.computeBoneTexture(),gt.setValue(O,"boneTexture",St.boneTexture,Q))}K.isBatchedMesh&&(gt.setOptional(O,K,"batchingTexture"),gt.setValue(O,"batchingTexture",K._matricesTexture,Q),gt.setOptional(O,K,"batchingIdTexture"),gt.setValue(O,"batchingIdTexture",K._indirectTexture,Q),gt.setOptional(O,K,"batchingColorTexture"),K._colorsTexture!==null&&gt.setValue(O,"batchingColorTexture",K._colorsTexture,Q));const _a=J.morphAttributes;if((_a.position!==void 0||_a.normal!==void 0||_a.color!==void 0)&&N.update(K,J,ri),(va||we.receiveShadow!==K.receiveShadow)&&(we.receiveShadow=K.receiveShadow,gt.setValue(O,"receiveShadow",K.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&z.environment!==null&&(Ot.envMapIntensity.value=z.environmentIntensity),Ot.dfgLUT!==void 0&&(Ot.dfgLUT.value=PM()),va){if(gt.setValue(O,"toneMappingExposure",R.toneMappingExposure),we.needsLights&&R0(Ot,Dr),xe&&W.fog===!0&&Pe.refreshFogUniforms(Ot,xe),Pe.refreshMaterialUniforms(Ot,W,se,j,S.state.transmissionRenderTarget[M.id]),we.needsLights&&we.lightProbeGrid){const St=we.lightProbeGrid;Ot.probesSH.value=St.texture,Ot.probesMin.value.copy(St.boundingBox.min),Ot.probesMax.value.copy(St.boundingBox.max),Ot.probesResolution.value.copy(St.resolution)}Nl.upload(O,dh(we),Ot,Q)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Nl.upload(O,dh(we),Ot,Q),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&gt.setValue(O,"center",K.center),gt.setValue(O,"modelViewMatrix",K.modelViewMatrix),gt.setValue(O,"normalMatrix",K.normalMatrix),gt.setValue(O,"modelMatrix",K.matrixWorld),W.uniformsGroups!==void 0){const St=W.uniformsGroups;for(let ya=0,Ir=St.length;ya<Ir;ya++){const hh=St[ya];le.update(hh,ri),le.bind(hh,ri)}}return ri}function R0(M,z){M.ambientLightColor.needsUpdate=z,M.lightProbe.needsUpdate=z,M.sunLights.needsUpdate=z,M.sunLightShadows.needsUpdate=z,M.directionalLights.needsUpdate=z,M.directionalLightShadows.needsUpdate=z,M.pointLights.needsUpdate=z,M.pointLightShadows.needsUpdate=z,M.spotLights.needsUpdate=z,M.spotLightShadows.needsUpdate=z,M.rectAreaLights.needsUpdate=z,M.hemisphereLights.needsUpdate=z}function L0(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(M,z,J){const W=q.get(M);W.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),q.get(M.texture).__webglTexture=z,q.get(M.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:J,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,z){const J=q.get(M);J.__webglFramebuffer=z,J.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(M,z=0,J=0){Z=M,D=z,P=J;let W=null,K=!1,xe=!1;if(M){const be=q.get(M);if(be.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(O.FRAMEBUFFER,be.__webglFramebuffer),ae.copy(M.viewport),fe.copy(M.scissor),Me=M.scissorTest,y.viewport(ae),y.scissor(fe),y.setScissorTest(Me),V=-1;return}else if(be.__webglFramebuffer===void 0)Q.setupRenderTarget(M);else if(be.__hasExternalTextures)Q.rebindTextures(M,q.get(M.texture).__webglTexture,q.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Ze=M.depthTexture;if(be.__boundDepthTexture!==Ze){if(Ze!==null&&q.has(Ze)&&(M.width!==Ze.image.width||M.height!==Ze.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(M)}}const Ae=M.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(xe=!0);const Ce=q.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ce[z])?W=Ce[z][J]:W=Ce[z],K=!0):M.samples>0&&Q.useMultisampledRTT(M)===!1?W=q.get(M).__webglMultisampledFramebuffer:Array.isArray(Ce)?W=Ce[J]:W=Ce,ae.copy(M.viewport),fe.copy(M.scissor),Me=M.scissorTest}else ae.copy(ke).multiplyScalar(se).floor(),fe.copy(Fe).multiplyScalar(se).floor(),Me=_t;if(J!==0&&(W=B),y.bindFramebuffer(O.FRAMEBUFFER,W)&&y.drawBuffers(M,W),y.viewport(ae),y.scissor(fe),y.setScissorTest(Me),K){const be=q.get(M.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+z,be.__webglTexture,J)}else if(xe){const be=z;for(let Ae=0;Ae<M.textures.length;Ae++){const Ce=q.get(M.textures[Ae]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Ae,Ce.__webglTexture,J,be)}}else if(M!==null&&J!==0){const be=q.get(M.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,be.__webglTexture,J)}V=-1};function fh(M){const z=q.get(M);return(z.__readFormat!==M.format||z.__readType!==M.type)&&(z.__readFormat=M.format,z.__readType=M.type,z.__formatReadable=E.textureFormatReadable(M.format),z.__typeReadable=E.textureTypeReadable(M.type)),z}this.readRenderTargetPixels=function(M,z,J,W,K,xe,Te,be=0){if(!(M&&M.isWebGLRenderTarget)){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=q.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Te!==void 0&&(Ae=Ae[Te]),Ae){y.bindFramebuffer(O.FRAMEBUFFER,Ae);try{const Ce=M.textures[be],Ze=Ce.format,et=Ce.type;M.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+be);const Re=fh(Ce);if(Re.__formatReadable===!1){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Re.__typeReadable===!1){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=M.width-W&&J>=0&&J<=M.height-K&&O.readPixels(z,J,W,K,ve.convert(Ze),ve.convert(et),xe)}finally{const Ce=Z!==null?q.get(Z).__webglFramebuffer:null;y.bindFramebuffer(O.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(M,z,J,W,K,xe,Te,be=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=q.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Te!==void 0&&(Ae=Ae[Te]),Ae)if(z>=0&&z<=M.width-W&&J>=0&&J<=M.height-K){y.bindFramebuffer(O.FRAMEBUFFER,Ae);const Ce=M.textures[be],Ze=Ce.format,et=Ce.type;M.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+be);const Re=fh(Ce);if(Re.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Re.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ht=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,ht),O.bufferData(O.PIXEL_PACK_BUFFER,xe.byteLength,O.STREAM_READ),O.readPixels(z,J,W,K,ve.convert(Ze),ve.convert(et),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);const $t=Z!==null?q.get(Z).__webglFramebuffer:null;y.bindFramebuffer(O.FRAMEBUFFER,$t);const Et=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Hy(O,Et,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,ht),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,xe),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(ht),O.deleteSync(Et),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,z=null,J=0){const W=Math.pow(2,-J),K=Math.floor(M.image.width*W),xe=Math.floor(M.image.height*W),Te=z!==null?z.x:0,be=z!==null?z.y:0;Q.setTexture2D(M,0),O.copyTexSubImage2D(O.TEXTURE_2D,J,0,0,Te,be,K,xe),y.unbindTexture()},this.copyTextureToTexture=function(M,z,J=null,W=null,K=0,xe=0){let Te,be,Ae,Ce,Ze,et,Re,ht,$t;const Et=M.isCompressedTexture?M.mipmaps[xe]:M.image;if(J!==null)Te=J.max.x-J.min.x,be=J.max.y-J.min.y,Ae=J.isBox3?J.max.z-J.min.z:1,Ce=J.min.x,Ze=J.min.y,et=J.isBox3?J.min.z:0;else{const Ot=Math.pow(2,-K);Te=Math.floor(Et.width*Ot),be=Math.floor(Et.height*Ot),M.isDataArrayTexture?Ae=Et.depth:M.isData3DTexture?Ae=Math.floor(Et.depth*Ot):Ae=1,Ce=0,Ze=0,et=0}W!==null?(Re=W.x,ht=W.y,$t=W.z):(Re=0,ht=0,$t=0);const yt=ve.convert(z.format),mn=ve.convert(z.type);let we;z.isData3DTexture?(Q.setTexture3D(z,0),we=O.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(Q.setTexture2DArray(z,0),we=O.TEXTURE_2D_ARRAY):(Q.setTexture2D(z,0),we=O.TEXTURE_2D),y.activeTexture(O.TEXTURE0),y.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,z.flipY),y.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),y.pixelStorei(O.UNPACK_ALIGNMENT,z.unpackAlignment);const Mn=y.getParameter(O.UNPACK_ROW_LENGTH),lt=y.getParameter(O.UNPACK_IMAGE_HEIGHT),ri=y.getParameter(O.UNPACK_SKIP_PIXELS),Li=y.getParameter(O.UNPACK_SKIP_ROWS),va=y.getParameter(O.UNPACK_SKIP_IMAGES);y.pixelStorei(O.UNPACK_ROW_LENGTH,Et.width),y.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Et.height),y.pixelStorei(O.UNPACK_SKIP_PIXELS,Ce),y.pixelStorei(O.UNPACK_SKIP_ROWS,Ze),y.pixelStorei(O.UNPACK_SKIP_IMAGES,et);const Dr=M.isDataArrayTexture||M.isData3DTexture,gt=z.isDataArrayTexture||z.isData3DTexture;if(M.isDepthTexture){const Ot=q.get(M),_a=q.get(z),St=q.get(Ot.__renderTarget),ya=q.get(_a.__renderTarget);y.bindFramebuffer(O.READ_FRAMEBUFFER,St.__webglFramebuffer),y.bindFramebuffer(O.DRAW_FRAMEBUFFER,ya.__webglFramebuffer);for(let Ir=0;Ir<Ae;Ir++)Dr&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,q.get(M).__webglTexture,K,et+Ir),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,q.get(z).__webglTexture,xe,$t+Ir)),O.blitFramebuffer(Ce,Ze,Te,be,Re,ht,Te,be,O.DEPTH_BUFFER_BIT,O.NEAREST);y.bindFramebuffer(O.READ_FRAMEBUFFER,null),y.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(K!==0||M.isRenderTargetTexture||q.has(M)){const Ot=q.get(M),_a=q.get(z);y.bindFramebuffer(O.READ_FRAMEBUFFER,C),y.bindFramebuffer(O.DRAW_FRAMEBUFFER,H);for(let St=0;St<Ae;St++)Dr?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ot.__webglTexture,K,et+St):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ot.__webglTexture,K),gt?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,_a.__webglTexture,xe,$t+St):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,_a.__webglTexture,xe),K!==0?O.blitFramebuffer(Ce,Ze,Te,be,Re,ht,Te,be,O.COLOR_BUFFER_BIT,O.NEAREST):gt?O.copyTexSubImage3D(we,xe,Re,ht,$t+St,Ce,Ze,Te,be):O.copyTexSubImage2D(we,xe,Re,ht,Ce,Ze,Te,be);y.bindFramebuffer(O.READ_FRAMEBUFFER,null),y.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else gt?M.isDataTexture||M.isData3DTexture?O.texSubImage3D(we,xe,Re,ht,$t,Te,be,Ae,yt,mn,Et.data):z.isCompressedArrayTexture?O.compressedTexSubImage3D(we,xe,Re,ht,$t,Te,be,Ae,yt,Et.data):O.texSubImage3D(we,xe,Re,ht,$t,Te,be,Ae,yt,mn,Et):M.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,xe,Re,ht,Te,be,yt,mn,Et.data):M.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,xe,Re,ht,Et.width,Et.height,yt,Et.data):O.texSubImage2D(O.TEXTURE_2D,xe,Re,ht,Te,be,yt,mn,Et);y.pixelStorei(O.UNPACK_ROW_LENGTH,Mn),y.pixelStorei(O.UNPACK_IMAGE_HEIGHT,lt),y.pixelStorei(O.UNPACK_SKIP_PIXELS,ri),y.pixelStorei(O.UNPACK_SKIP_ROWS,Li),y.pixelStorei(O.UNPACK_SKIP_IMAGES,va),xe===0&&z.generateMipmaps&&O.generateMipmap(we),y.unbindTexture()},this.initRenderTarget=function(M){q.get(M).__webglFramebuffer===void 0&&Q.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Q.setTextureCube(M,0):M.isData3DTexture?Q.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Q.setTexture2DArray(M,0):Q.setTexture2D(M,0),y.unbindTexture()},this.resetState=function(){D=0,P=0,Z=null,y.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}}const IM=["head","body","torso","leftArm","rightArm","leftLeg","rightLeg"],ju=["pitch","yaw","roll","bend","x","y","z"];function Ol(i){return typeof i=="number"&&Number.isFinite(i)?i:null}function _v(i){if(typeof i=="string")return i.trim();if(i&&typeof i=="object"){const e=i.translate;if(typeof e=="string")return e.trim()}return""}function zM(i){const e=i.emote||{},t=Number(e.returnTick)>0?Number(e.returnTick):60,n=Number(e.endTick)>0?Number(e.endTick):t,a={adi:_v(i.name)||"İsimsiz",yazar:String(i.author||""),aciklama:String(i.description||""),baslangicTick:Number(e.beginTick)>0?Number(e.beginTick):0,bitisTick:n,stopTick:Number(e.stopTick)>0?Number(e.stopTick):n,donusTick:t,dongu:e.isLoop===!0||e.isLoop==="true",kemikler:new Map};e.palUzay===!0&&(a.palUzay=!0),e.palDef===!0&&(a.palDef=!0);const r=Ol(e.loopBas);r!==null&&r>=0&&(a.loopBas=r);const s=Array.isArray(e.moves)?e.moves:[];let o={};for(const l of s){if(typeof l?.tick!="number")continue;const c=l.tick;for(const d of IM){const f=l[d];if(!f||typeof f!="object")continue;let u=a.kemikler.get(d);u||(u={},a.kemikler.set(d,u));for(const v of ju){const m=Ol(f[v]);m!==null&&(u[v]||(u[v]=[]),u[v].push({t:c,v:m,easing:String(l.easing||"LINEAR").toUpperCase()}))}const h=Ol(f.turn);h!==null&&h!==0&&(o[d]=(o[d]||0)+h*360,u.turn||(u.turn=[]),u.turn.push({t:c,v:o[d],easing:"LINEAR"}))}}return a.palUzay===!0&&a.palDef!==!0&&OM(a),a}const UM={leftArm:[5,-2,0],rightArm:[-5,-2,0],leftLeg:[1.9,-12,.1],rightLeg:[-1.9,-12,.1]};function NM(i){if(i.length===0)return 0;const e=[...i].sort((n,a)=>n-a),t=Math.floor(e.length/2);return e.length%2?e[t]:(e[t-1]+e[t])/2}function OM(i){for(const[e,t]of Object.entries(UM)){const n=i.kemikler.get(e);if(!n)continue;let a=0,r=0;for(const s of["x","y"]){const o=n[s];if(!o||o.length===0)continue;a++;const l=t[s==="x"?0:1];Math.abs(NM(o.map(c=>c.v))-l)<=2&&r++}a===0||r!==a||["x","y","z"].forEach((s,o)=>{const l=n[s];if(l)for(const c of l)c.v-=t[o]})}i.palDef=!0}function FM(i){const e=i.animations||{},t=Object.values(e)[0];if(!t||typeof t!="object")throw new Error("PAL animasyonu boş");const n=Number(t.animation_length)>0?Number(t.animation_length)*20:60,a={adi:_v(t.player_animation_library?.name??i.name)||"İsimsiz",yazar:String(t.player_animation_library?.author||i.author||""),aciklama:String(t.player_animation_library?.description||i.description||""),baslangicTick:0,bitisTick:n,stopTick:n,donusTick:n,dongu:!0,kemikler:new Map,palDelta:!0},r=t.bones||{};for(const s of Object.keys(r)){const o=r[s];if(!o||typeof o!="object")continue;const l={},c=(d,f,u)=>{if(!d)return;const h=[],v=(m,p)=>{const g=Ol(p);g!==null&&h.push({t:m,v:g,easing:"LINEAR"})};if(Array.isArray(d))for(const m of d){const p=typeof m?.time=="number"?m.time*20:0;v(p,Array.isArray(m?.vector)?m.vector[f]:void 0)}else Array.isArray(d.vector)?v(0,d.vector[f]):typeof d=="number"&&v(0,d);h.length&&(l[u]=h)};c(o.rotation,0,"pitch"),c(o.rotation,1,"yaw"),c(o.rotation,2,"roll"),c(o.position,0,"x"),c(o.position,1,"y"),c(o.position,2,"z"),Object.keys(l).length&&a.kemikler.set(s,l)}return a}function Fp(i){const e=JSON.parse(i);if(e?.emote&&typeof e.emote=="object")return zM(e);if(e?.animations)return FM(e);throw new Error("bilinmeyen emote formatı")}function BM(i){switch(i){case"EASEINSINE":case"INSINE":case"EASEIN":return e=>1-Math.cos(e*Math.PI/2);case"EASEOUTSINE":case"OUTSINE":return e=>Math.sin(e*Math.PI/2);case"EASEINOUTSINE":case"INOUTSINE":case"SINE":return e=>-(Math.cos(Math.PI*e)-1)/2;case"EASEINOUTQUAD":case"INOUTQUAD":return e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2;case"EASEINOUTCUBIC":return e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2;case"STEP":return e=>e>=1?1:0;default:return e=>e}}function Bp(i,e){if(!i||!i.length)return null;if(i.length===1)return i[0].v;let t=0;for(;t<i.length&&i[t].t<=e;)t++;if(t<=0)return i[0].v;if(t>=i.length)return i[i.length-1].v;const n=i[t-1],a=i[t],r=a.t-n.t,s=r<=0?1:(e-n.t)/r;return n.v+(a.v-n.v)*BM(a.easing)(s)}function yv(){return[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]]}const $p={head:[0,0,0],body:[0,0,0],armL:[0,0,0],armR:[0,0,0],legL:[0,0,0],legR:[0,0,0],bend:[0,0,0,0,0],konum:yv(),kokDon:[0,0,0],kokKonum:[0,0,0]},bv={head:0,body:1,torso:1,leftArm:2,rightArm:3,leftLeg:4,rightLeg:5},$M=bv,HM={leftArm:0,rightArm:1,leftLeg:2,rightLeg:3,torso:4,body:4};function Hp(i,e){let t=e;if(i.dongu&&i.loopBas!==void 0&&i.bitisTick>i.loopBas){if(e>i.bitisTick){const h=i.bitisTick-i.loopBas;t=i.loopBas+(e-i.loopBas)%h}}else i.dongu&&i.donusTick>0&&(t=(e-i.baslangicTick)%i.donusTick+i.baslangicTick);const n=Math.max(t,i.baslangicTick),a=i.palUzay===!0,r={head:[0,0,0],body:[0,0,0],armL:[0,0,0],armR:[0,0,0],legL:[0,0,0],legR:[0,0,0],bend:[0,0,0,0,0],bendTasi:a,konum:yv(),kokDon:[0,0,0],kokKonum:[0,0,0]},s=["head","body","armL","armR","legL","legR"],o=()=>[void 0,void 0,void 0],l=Array.from({length:6},o),c=o(),d=(h,v,m)=>{h[v==="x"?0:v==="y"?1:2]=m};for(const[h,v]of i.kemikler){if(a&&h==="body"){for(const g of ju){const _=Bp(v[g],n);_!==null&&(g==="pitch"?r.kokDon[0]=_:g==="yaw"?r.kokDon[1]=_:g==="roll"?r.kokDon[2]=-_:g==="bend"?r.bend[4]=_:(g==="x"||g==="y"||g==="z")&&d(c,g,_))}continue}const m=bv[h],p=m!==void 0?r[s[m]]:null;for(const g of ju){const _=Bp(v[g],n);if(_!==null){if(p){if(g==="pitch")p[0]=_;else if(g==="yaw")p[1]=_;else if(g==="roll")p[2]=a?-_:_;else if(g==="x"||g==="y"||g==="z"){const T=$M[h];T!==void 0&&d(l[T],g,_)}}if(g==="bend"){const T=HM[h];T!==void 0&&(r.bend[T]+=_)}}}}const f=[[0,24,0],[0,24,0],[5,22,0],[-5,22,0],[1.9,12,0],[-1.9,12,0]];if(a){for(let h=0;h<6;h++){const v=l[h];r.konum[h]=[v[0]??0,v[1]??0,-(v[2]??0)]}return r.kokKonum=[c[0]??0,c[1]??0,-(c[2]??0)],r}const u=[1,0,1,1,0,0];for(let h=0;h<6;h++){const v=l[h],m=r.konum[h];for(let p=0;p<3;p++){if(v[p]===void 0){m[p]=0;continue}let g=v[p];p===1&&u[h]&&(g+=24),m[p]=g-f[h][p]}}return r}const Ee=1/24,$i=64,Hi=32,GM=.2617994,Gp=.2617994,VM=9;function Kn(i,e,t,n,a,r,s=!1){const o=i.attributes.uv,l=e*4,c=s?r:n,d=s?n:r;o.setXY(l+0,t/64,1-c/64),o.setXY(l+1,a/64,1-c/64),o.setXY(l+2,t/64,1-d/64),o.setXY(l+3,a/64,1-d/64)}function To(i){i.magFilter=Zt,i.minFilter=Zt,i.colorSpace=Wn}function xv(i,e=!1){return i?new ac({map:i,transparent:e,alphaTest:e?.01:0}):new ac({color:5924466})}function Vp(i,e,t=!1){const n=new ha(i.w*Ee,i.h*Ee,i.d*Ee),{u:a,v:r,w:s,h:o,d:l}=i;return e&&(Kn(n,0,a+l+s,r+l,a+l+s+l,r+l+o),Kn(n,1,a,r+l,a+l,r+l+o),Kn(n,2,a+l,r,a+l+s,r+l),Kn(n,3,a+l+s,r,a+l+s+s,r+l,!0),Kn(n,4,a+l,r+l,a+l+s,r+l+o),Kn(n,5,a+l+s+l,r+l,a+l+s+l+s,r+l+o),To(e)),new ai(n,xv(e,t))}function qp(i,e,t,n,a,r){const s=i.attributes.uv,o=(l,c,d,f,u,h=!1)=>{const v=l*4,m=h?u:d,p=h?d:u;s.setXY(v+0,c/$i,1-m/Hi),s.setXY(v+1,f/$i,1-m/Hi),s.setXY(v+2,c/$i,1-p/Hi),s.setXY(v+3,f/$i,1-p/Hi)};o(0,e+r+n,t+r,e+r+n+r,t+r+a),o(1,e,t+r,e+r,t+r+a),o(2,e+r,t,e+r+n,t+r),o(3,e+r+n,t,e+r+n+n,t+r,!0),o(4,e+r,t+r,e+r+n,t+r+a),o(5,e+r+n+r,t+r,e+r+n+r+n,t+r+a),s.needsUpdate=!0}function Wp(i){const e=Math.max($i,Math.round(i.width)),t=Math.max(Hi,Math.round(i.height)),n=document.createElement("canvas");n.width=e,n.height=t;const a=n.getContext("2d");return a&&(a.imageSmoothingEnabled=e!==$i||t!==Hi,a.imageSmoothingQuality="high",a.drawImage(i,0,0,e,t)),n}function yl(i,e=!1){const t=new iv(i);return To(t),e&&(t.magFilter=cn,t.minFilter=Ua,t.generateMipmaps=!0),t.needsUpdate=!0,t}function Dd(i,e,t,n){const a=e*Ee/2,r=t*Ee/2,s=n*Ee/2,o=.0015,l=new tv({color:16777215,transparent:!0,opacity:.42,depthWrite:!1}),c=d=>{const f=new Ai;f.setAttribute("position",new gi(d,3));const u=new vb(f,l);u.renderOrder=4,i.add(u)};for(const d of[-s-o,s+o]){const f=[];for(let u=0;u<=e;u++){const h=-a+u*Ee;f.push(h,-r,d,h,r,d)}for(let u=0;u<=t;u++){const h=-r+u*Ee;f.push(-a,h,d,a,h,d)}c(f)}for(const d of[-a-o,a+o]){const f=[];for(let u=0;u<=n;u++){const h=-s+u*Ee;f.push(d,-r,h,d,r,h)}for(let u=0;u<=t;u++){const h=-r+u*Ee;f.push(d,h,-s,d,h,s)}c(f)}for(const d of[-r-o,r+o]){const f=[];for(let u=0;u<=e;u++){const h=-a+u*Ee;f.push(h,d,-s,h,d,s)}for(let u=0;u<=n;u++){const h=-s+u*Ee;f.push(-a,d,h,a,d,h)}c(f)}}function Ea(i,e,t,n=!1){const a=i.h/2,{u:r,v:s,w:o,d:l}=i,c=new ha(i.w*Ee,a*Ee,i.d*Ee);if(t){const d=s+l+(e?a:0),f=d+a;Kn(c,0,r+l+o,d,r+l+o+l,f),Kn(c,1,r,d,r+l,f),Kn(c,2,r+l,s,r+l+o,s+l),e?Kn(c,3,r+l+o,s,r+l+o+o,s+l,!0):Kn(c,3,r+l,s,r+l+o,s+l),Kn(c,4,r+l,d,r+l+o,f),Kn(c,5,r+l+o+l,d,r+l+o+l+o,f),To(t)}return new ai(c,xv(t,n))}function qM(i){if(!i||!i.isConnected)return!1;const e=i.getBoundingClientRect();if(e.width<2||e.height<2)return!1;const t=getComputedStyle(i);return t.visibility!=="hidden"&&t.display!=="none"}class WM{renderer=null;scene=new sb;camera=new ui(38,1,.1,100);kok=null;kalca=null;kemikler=null;bukulenler=null;saat=new zb;rafId=0;canvas=null;boyutla=null;zaman=0;kameraAci=0;kameraAciHedef=0;kameraYariCap=2.75;kameraYariCapHedef=2.75;kameraY=.34;surukleX=null;isaretciBas=null;isaretciTasi=null;isaretciBirak=null;tekerlek=null;fareEngel=null;baglamEngel=null;durum="idle";sonOynananAd="";durumBitis=0;emoteListe=[];hiz=1;aktif=null;tEmote=0;pelerinGrup=null;pelerinSarkac=null;pelerinDoku=null;pelerinJeton=0;kanatJeton=0;_bekleyenPelerin=null;canliDoku=null;sonCizimAt=0;gorunurMu=!0;sonGorunurKontrol=0;sonEtkilesim=0;canliMod=!1;_pelerinTuval=null;kanatGrup=null;kanatDoku=null;kanatAyrikAcik=!1;_bekleyenKanat=null;tabanMeshler=[];ustMeshler=[];oyuncuMeshler=[];oyuncuGorunur=!0;etkilesimKapali=!1;kameraEgim=0;kameraEgimHedef=0;surukleY=null;kaplamaGorunur=!0;kozmetikGorunur=!0;izgaraAcik=!1;modelIzgaraAcik=!1;sahneTemizle(){this.kok&&((this.kok.parent??this.scene).remove(this.kok),this.kok.traverse(e=>{const t=e;t.geometry&&t.geometry.dispose()})),this.scene.clear(),this.kok=null,this.pelerinGrup=null,this.pelerinSarkac=null,this.kanatGrup=null,this.tabanMeshler=[],this.ustMeshler=[],this.oyuncuMeshler=[],this.aktif=null}kur(e){this.renderer&&this.kapati(),this.sahneTemizle(),this.izgaraAcik=!1,this.modelIzgaraAcik=!1,this.canvas=e;try{this.renderer=new DM({canvas:e,alpha:!0,antialias:!0,preserveDrawingBuffer:!0})}catch{return}this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.scene.add(new Cb(16777215,.9));const t=new hp(16777215,1.7);t.position.set(2,4,5),this.scene.add(t);const n=new hp(16755533,.55);if(n.position.set(-3,2,-4),this.scene.add(n),this.camera.position.set(0,.34,2.75),this.camera.lookAt(0,.02,0),this.kameraYariCap=2.75,this.kameraYariCapHedef=2.75,this.yorungeKur(e),this.boyutla=()=>{if(!this.renderer)return;const a=e.clientWidth||e.parentElement?.clientWidth||320,r=e.clientHeight||300;this.renderer.setSize(a,r,!1),this.camera.aspect=a/Math.max(1,r),this.camera.updateProjectionMatrix()},this.boyutla(),window.addEventListener("resize",this.boyutla),this.baslatDongu(),this._bekleyenSkin){const a=this._bekleyenSkin;this._bekleyenSkin=null,this.skin(a)}}yorungeKur(e){this.yorungeKapat(),e.style.cursor="grab",e.style.touchAction="pan-y",this.isaretciBas=n=>{if(n.pointerType==="mouse"){const a=n.button===0;if(a&&this.etkilesimKapali||!a&&n.button!==1&&n.button!==2)return}this.surukleX=n.clientX,this.surukleY=n.clientY,e.style.cursor="grabbing";try{e.setPointerCapture(n.pointerId)}catch{}},this.isaretciTasi=n=>{if(this.surukleX===null)return;const a=n.clientX-this.surukleX,r=n.clientY-(this.surukleY??n.clientY);this.surukleX=n.clientX,this.surukleY=n.clientY,this.kameraAciHedef-=a*.008,this.kameraEgimHedef=Math.max(-.55,Math.min(.95,this.kameraEgimHedef+r*.006))},this.isaretciBirak=n=>{if(this.surukleX!==null){this.surukleX=null,this.surukleY=null,e.style.cursor="grab";try{e.releasePointerCapture(n.pointerId)}catch{}}},e.addEventListener("pointerdown",this.isaretciBas),e.addEventListener("pointermove",this.isaretciTasi),e.addEventListener("pointerup",this.isaretciBirak),e.addEventListener("pointercancel",this.isaretciBirak);const t=()=>{this.sonEtkilesim=performance.now()};e.addEventListener("pointerdown",t),e.addEventListener("pointermove",t),e.addEventListener("wheel",t,{passive:!0}),this.fareEngel=n=>{n.button===1&&n.preventDefault()},this.baglamEngel=n=>n.preventDefault(),e.addEventListener("mousedown",this.fareEngel),e.addEventListener("auxclick",this.fareEngel),e.addEventListener("contextmenu",this.baglamEngel),this.fareEngel=n=>{n.button===1&&n.preventDefault()},this.tekerlek=n=>{n.preventDefault(),this.zoomAyarla(this.kameraYariCapHedef*(n.deltaY>0?1.12:.89))},e.addEventListener("wheel",this.tekerlek,{passive:!1})}yorungeKapat(){const e=this.canvas;e&&(this.isaretciBas&&e.removeEventListener("pointerdown",this.isaretciBas),this.isaretciTasi&&e.removeEventListener("pointermove",this.isaretciTasi),this.isaretciBirak&&(e.removeEventListener("pointerup",this.isaretciBirak),e.removeEventListener("pointercancel",this.isaretciBirak))),this.isaretciBas=null,this.isaretciTasi=null,this.isaretciBirak=null,this.surukleX=null,e&&this.tekerlek&&e.removeEventListener("wheel",this.tekerlek),this.tekerlek=null,e&&this.fareEngel&&(e.removeEventListener("mousedown",this.fareEngel),e.removeEventListener("auxclick",this.fareEngel)),this.fareEngel=null,e&&this.baglamEngel&&e.removeEventListener("contextmenu",this.baglamEngel),this.baglamEngel=null}boyutGuncelle(){this.boyutla?.()}zoomAyarla(e){this.kameraYariCapHedef=Math.max(1.05,Math.min(5.5,e))}zoomAl(){return this.kameraYariCapHedef}kameraGuncelle(e){const t=Math.min(1,e*14);this.kameraAci+=(this.kameraAciHedef-this.kameraAci)*t,this.kameraEgim+=(this.kameraEgimHedef-this.kameraEgim)*t,this.kameraYariCap+=(this.kameraYariCapHedef-this.kameraYariCap)*Math.min(1,e*10);const n=this.kameraYariCap,a=Math.cos(this.kameraEgim)*n;this.camera.position.set(Math.sin(this.kameraAci)*a,this.kameraY+Math.sin(this.kameraEgim)*n,Math.cos(this.kameraAci)*a),this.camera.lookAt(0,.02,0)}bakisaAyarla(e,t=0){this.kameraAciHedef=e,this.kameraEgimHedef=Math.max(-.55,Math.min(.95,t))}parcaGoster(e,t){const n=this.kemikler;n&&(e==="kafa"?n.head.visible=t:e==="govde"?n.body.visible=t:e==="kollar"?(n.armL.visible=t,n.armR.visible=t):(n.legL.visible=t,n.legR.visible=t))}kaplamaGoster(e){this.kaplamaGorunur=e;for(const t of this.ustMeshler)t.visible=e&&this.oyuncuGorunur}kozmetikGoster(e){this.kozmetikGorunur=e,this.pelerinGrup&&(this.pelerinGrup.visible=e),this.kanatGrup&&(this.kanatGrup.visible=e)}_bekleyenSkin=null;async dokuResmi(e){try{const t=await fetch(e);if(t.ok){const n=await t.blob();return await new Promise((a,r)=>{const s=URL.createObjectURL(n),o=new Image;o.onload=()=>{URL.revokeObjectURL(s),a(o)},o.onerror=()=>{URL.revokeObjectURL(s),r(new Error("görsel açılamadı"))},o.src=s})}}catch{}return await new Ab().loadAsync(e)}async skin(e){this.canliMod=!1;let t=null;if(e?.url)try{const n=await this.dokuResmi(e.url),a=document.createElement("canvas");a.width=64,a.height=64;const r=a.getContext("2d");r&&(r.imageSmoothingEnabled=!1,n.height===32?r.drawImage(n,0,0):r.drawImage(n,0,0,64,64),t=new un(a),To(t),t.needsUpdate=!0)}catch{t=null}this.canliMod||(this._bekleyenSkin=e,this.modelKur(t,e?.slim||!1))}async pelerin(e){if(this._bekleyenPelerin=e,this.pelerinTemizle(),this._pelerinTuval=null,!e?.url)return;const t=++this.pelerinJeton;try{const n=await this.dokuResmi(e.url);if(t!==this.pelerinJeton)return;const a=Wp(n);this.pelerinDoku=yl(a,a.width>$i||a.height>Hi),this.pelerinMeshKur()}catch{}}pelerinTuval(e){if(this._bekleyenPelerin=null,this._pelerinTuval=e,!e){this.pelerinTemizle();return}if(this.pelerinDoku&&this.pelerinDoku.image===e){this.pelerinDoku.needsUpdate=!0;return}this.pelerinTemizle(),this.pelerinDoku=yl(e),this.pelerinMeshKur()}async kanat(e){if(this._bekleyenKanat=null,this.kanatTemizle(),!e?.url)return;const t=++this.kanatJeton;try{const n=await this.dokuResmi(e.url);if(t!==this.kanatJeton)return;const a=Wp(n);this.kanatDoku=yl(a,a.width>$i||a.height>Hi),this.kanatMeshKur()}catch{}}kanatTuval(e){if(this._bekleyenKanat=e,!e){this.kanatTemizle();return}if(this.kanatDoku&&this.kanatDoku.image===e){this.kanatDoku.needsUpdate=!0;return}this.kanatTemizle(),this.kanatDoku=yl(e),this.kanatMeshKur()}kanatMeshSil(){this.kanatGrup?.parent&&this.kanatGrup.parent.remove(this.kanatGrup),this.kanatGrup?.traverse(e=>{const t=e;t.geometry?.dispose(),t.material?.dispose()}),this.kanatGrup=null}kanatTemizle(){this.kanatMeshSil(),this.kanatDoku?.dispose(),this.kanatDoku=null}kanatMeshKur(){const e=this.bukulenler?.belUst;if(!e||!this.kanatDoku)return;this.kanatGrup&&this.kanatMeshSil();const t=new ac({map:this.kanatDoku,transparent:!0,alphaTest:.01,side:Mi}),n=new an;n.position.set(0,6*Ee,-2*Ee);for(const a of[1,-1]){const r=new an;r.position.set(a*5*Ee,0,0),r.rotation.order="ZYX";const s=new ha(10*Ee,20*Ee,2*Ee);qp(s,22,0,10,20,2);const o=new ai(s,t);o.position.set(-a*5*Ee,-10*Ee,-Ee),a<0&&(o.scale.x=-1),Dd(o,10,20,2),r.add(o),r.rotation.x=GM,r.rotation.y=0,r.rotation.z=a*Gp,r.userData.yon=a,n.add(r)}n.visible=this.kozmetikGorunur,e.add(n),this.kanatGrup=n,this.kanatAyrikUygula(),this.izgaraYenile()}kanatAyrik(e){this.kanatAyrikAcik!==e&&(this.kanatAyrikAcik=e,this.kanatAyrikUygula())}kanatAyrikUygula(){if(this.kanatGrup)for(const e of this.kanatGrup.children){const t=e.userData.yon||1;e.position.x=t*(5+(this.kanatAyrikAcik?VM:0))*Ee}}izgaraGoster(e,t=!1){this.izgaraAcik=e,this.modelIzgaraAcik=e&&t,this.modelIzgaraAcik&&this.modelIzgaralari(),this.izgaraYenile()}izgaraYenile(){for(const e of[this.pelerinGrup,this.kanatGrup])e?.traverse(t=>{t.isLineSegments&&(t.visible=this.izgaraAcik)});for(const e of[...this.tabanMeshler,...this.ustMeshler])for(const t of e.children)t.isLineSegments&&(t.visible=this.modelIzgaraAcik)}modelIzgaralari(){for(const e of[...this.tabanMeshler,...this.ustMeshler]){if(e.children.some(s=>s.isLineSegments))continue;const t=e.geometry.parameters;if(!t)continue;const n=Math.max(1,Math.round(t.width/Ee)),a=Math.max(1,Math.round(t.height/Ee)),r=Math.max(1,Math.round(t.depth/Ee));Dd(e,n,a,r)}}pelerinMeshSil(){this.pelerinGrup?.parent&&this.pelerinGrup.parent.remove(this.pelerinGrup),this.pelerinGrup?.traverse(e=>{const t=e;t.geometry?.dispose(),t.material?.dispose()}),this.pelerinGrup=null,this.pelerinSarkac=null}pelerinTemizle(){this.pelerinMeshSil(),this.pelerinDoku?.dispose(),this.pelerinDoku=null}pelerinMeshKur(){const e=this.bukulenler?.belUst;if(!e||!this.pelerinDoku)return;this.pelerinGrup&&this.pelerinMeshSil();const t=new ha(10*Ee,16*Ee,1*Ee);qp(t,0,0,10,16,1);const n=new ac({map:this.pelerinDoku,transparent:!0,alphaTest:.01,side:Mi}),a=new ai(t,n);a.rotation.y=Math.PI,a.position.set(0,-8*Ee,0),Dd(a,10,16,1);const r=new an;r.position.set(0,6*Ee,-2.5*Ee),r.rotation.x=.06,r.visible=this.kozmetikGorunur,r.add(a),e.add(r),this.pelerinGrup=r,this.pelerinSarkac=r,this.izgaraYenile()}tuvalDoku(e,t){const n=new iv(e);To(n),n.needsUpdate=!0,this.canliMod=!0,this._bekleyenSkin=null,this.canliDoku=n,this.modelKur(n,t)}dokuTazele(){this.canliDoku&&(this.canliDoku.needsUpdate=!0),this.pelerinDoku&&(this.pelerinDoku.needsUpdate=!0),this.kanatDoku&&(this.kanatDoku.needsUpdate=!0)}oyuncuGoster(e){this.oyuncuGorunur=e;for(const t of this.oyuncuMeshler){const n=this.ustMeshler.includes(t);t.visible=e&&(!n||this.kaplamaGorunur)}}atlasNoktasi(e,t="taban"){if(t==="oto")return this.isin(e,[...this.tabanMeshler,...this.ustMeshler],64,64);const n=t==="ust"?this.ustMeshler:this.tabanMeshler;return this.isin(e,n,64,64)}kozmetikNoktasi(e,t){return t==="pelerin"?this.pelerinGrup?this.isin(e,[this.pelerinGrup],$i,Hi):null:this.kanatGrup?this.isin(e,[this.kanatGrup],$i,Hi):null}isin(e,t,n,a){const r=this.canvas;if(!r||!this.renderer||t.length===0)return null;const s=r.getBoundingClientRect();if(s.width<1||s.height<1)return null;const o=new rt((e.clientX-s.left)/s.width*2-1,-((e.clientY-s.top)/s.height)*2+1),l=new Ib;l.setFromCamera(o,this.camera);const c=l.intersectObjects(t,!0).find(u=>!!u.uv);if(!c?.uv)return null;const d=Math.min(n-1,Math.max(0,Math.floor(c.uv.x*n))),f=Math.min(a-1,Math.max(0,Math.floor((1-c.uv.y)*a)));return{x:d,y:f}}modelKur(e,t){this.kok&&((this.kok.parent??this.scene).remove(this.kok),this.kok.traverse(A=>{const x=A;x.geometry&&x.geometry.dispose()})),this.pelerinGrup=null,this.pelerinSarkac=null,this.tabanMeshler=[],this.ustMeshler=[],this.oyuncuMeshler=[],this.kok=new an,this.kok.position.y=-.66,this.kalca=new an,this.kalca.position.set(0,12*Ee,0),this.kalca.rotation.order="ZYX",this.kok.add(this.kalca),this.kemikler={head:new an,body:new an,armL:new an,armR:new an,legL:new an,legR:new an};const[n,a,r,s,o,l]=[this.kemikler.head,this.kemikler.body,this.kemikler.armL,this.kemikler.armR,this.kemikler.legL,this.kemikler.legR];for(const A of[n,a,r,s,o,l])A.rotation.order="ZYX";const c=Vp({u:0,v:0,w:8,h:8,d:8},e);c.position.set(0,4*Ee,0),n.add(c);const d=Vp({u:32,v:0,w:8,h:8,d:8},e,!0);d.scale.setScalar(1.125),d.position.set(0,4*Ee,0),n.add(d),this.tabanMeshler.push(c),this.ustMeshler.push(d),this.oyuncuMeshler.push(c,d),a.position.set(0,12*Ee,0),a.userData.pivotPx=[0,12,0];const f=(A,x,w,R,L)=>{const U=Ea(x,!1,e);U.position.set(R,w+x.h/4*Ee,0),A.add(U);const B=new an;B.position.set(0,w,0);const C=Ea(x,!0,e);if(C.position.set(R,-(x.h/4)*Ee,0),B.add(C),A.add(B),this.tabanMeshler.push(U,C),this.oyuncuMeshler.push(U,C),L){const H=Z=>{Z.scale.set((L.w+.5)/L.w,(L.h+.25)/L.h,(L.d+.5)/L.d)},D=Ea(L,!1,e,!0);D.position.set(R,w+L.h/4*Ee,0),H(D),A.add(D);const P=Ea(L,!0,e,!0);P.position.set(R,-(L.h/4)*Ee,0),H(P),B.add(P),this.ustMeshler.push(D,P),this.oyuncuMeshler.push(D,P)}return B},u=new an;u.position.set(0,-6*Ee,0),u.rotation.order="ZYX";const h=Ea({u:16,v:16,w:8,h:12,d:4},!1,e);h.position.set(0,3*Ee,0),u.add(h),a.add(u);const v=Ea({u:16,v:16,w:8,h:12,d:4},!0,e);v.position.set(0,-9*Ee,0),a.add(v);const m=Ea({u:16,v:32,w:8,h:12,d:4},!1,e,!0);m.position.set(0,3*Ee,0),m.scale.set(1.0625,1.0208,1.125),u.add(m);const p=Ea({u:16,v:32,w:8,h:12,d:4},!0,e,!0);p.position.set(0,-9*Ee,0),p.scale.set(1.0625,1.0208,1.125),a.add(p),this.tabanMeshler.push(h,v),this.ustMeshler.push(m,p),this.oyuncuMeshler.push(h,v,m,p);const g=new an;g.position.set(0,6*Ee,0),g.rotation.order="ZYX";const _=t?3:4;n.position.set(0,6*Ee,0),n.userData.pivotPx=[0,6,0],r.position.set(5*Ee,4*Ee,0),r.userData.pivotPx=[5,4,0];const T=f(r,{u:32,v:48,w:_,h:12,d:4},-4*Ee,Ee,{u:48,v:48,w:_,h:12,d:4});s.position.set(-5*Ee,4*Ee,0),s.userData.pivotPx=[-5,4,0];const b=f(s,{u:40,v:16,w:_,h:12,d:4},-4*Ee,-Ee,{u:40,v:32,w:_,h:12,d:4});o.position.set(1.9*Ee,0,0),o.userData.pivotPx=[1.9,0,0];const k=f(o,{u:16,v:48,w:4,h:12,d:4},-6*Ee,0,{u:0,v:48,w:4,h:12,d:4});l.position.set(-1.9*Ee,0,0),l.userData.pivotPx=[-1.9,0,0];const S=f(l,{u:0,v:16,w:4,h:12,d:4},-6*Ee,0,{u:0,v:32,w:4,h:12,d:4});if(this.bukulenler={body:u,belUst:g,armL:T,armR:b,legL:k,legR:S},g.add(n,r,s),this.kalca.add(a,g,o,l),this.scene.add(this.kok),this.oyuncuGorunur){if(!this.kaplamaGorunur)for(const A of this.ustMeshler)A.visible=!1}else for(const A of this.oyuncuMeshler)A.visible=!1;this.modelIzgaraAcik&&this.modelIzgaralari(),this._pelerinTuval&&this.pelerinDoku?this.pelerinMeshKur():this._bekleyenPelerin&&(this.pelerinDoku?this.pelerinMeshKur():this.pelerin(this._bekleyenPelerin)),this._bekleyenKanat&&(this.kanatDoku?this.kanatMeshKur():this.kanatTuval(this._bekleyenKanat))}emoteleriKur(e,t=1,n=0){this.emoteListe=e,this.hiz=t>0?t:1,this.durum="idle",this.durumBitis=this.zaman+(.6+n)/(this.hiz>0?this.hiz:1)}emoteOynat(e){!e||!this.kemikler||(this.aktif=e,this.sonEtkilesim=performance.now(),this.sonOynananAd=e.adi,this.durum="emote",this.tEmote=e.baslangicTick,this.durumBitis=this.zaman+(e.dongu?3.2:0))}baslatDongu(){const e=()=>{if(this.canvas&&!this.canvas.isConnected){this.kapati(),Na===this&&(Na=null);return}if(this.rafId=requestAnimationFrame(e),document.hidden)return;const t=performance.now();if(t-this.sonGorunurKontrol>500&&(this.sonGorunurKontrol=t,this.gorunurMu=qM(this.canvas)),!this.gorunurMu)return;const n=performance.now(),a=document.hasFocus()?n-this.sonEtkilesim<2500?1e3/38:1e3/14:1e3/4;if(n-this.sonCizimAt<a)return;this.sonCizimAt=n;const r=Math.min(.05,this.saat.getDelta());this.zaman+=r,this.adimla(r),this.kameraGuncelle(r),this.renderer&&this.renderer.render(this.scene,this.camera)};e()}adimla(e){if(!this.kemikler)return;let t;this.durum==="idle"?(t=this.idlePozu(this.zaman),this.emoteListe.length&&this.zaman>=this.durumBitis&&(this.aktif=this.emoteListe[Math.floor(Math.random()*this.emoteListe.length)],this.sonOynananAd=this.aktif.adi,this.durum="emote",this.tEmote=this.aktif.baslangicTick,this.aktif.dongu&&(this.durumBitis=this.zaman+10+Math.random()*6),t=Hp(this.aktif,this.tEmote))):this.durum==="emote"&&this.aktif?(this.tEmote+=e*20,(this.aktif.dongu?this.zaman>=this.durumBitis:this.tEmote>=this.aktif.stopTick)?(this.durum="soft",this.durumBitis=this.zaman+.55,t=$p):t=Hp(this.aktif,this.tEmote)):(t=$p,this.zaman>=this.durumBitis&&(this.durum="idle",this.durumBitis=this.zaman+(.9+Math.random()*1.8)/this.hiz));const n=this.durum==="soft"?Math.min(1,e*7):1;this.uygula(t,n),this.pelerinSalin(),this.kanatSalin()}kanatSalin(){const e=this.kanatGrup;if(!e)return;const t=Math.sin(this.zaman*2.1);e.rotation.x=t*.045,e.position.y=6*Ee+t*.3*Ee;for(const n of e.children){const a=n.userData.yon??1;n.rotation.z=a*(Gp+Math.max(0,t)*.035)}}pelerinSalin(){const e=this.pelerinSarkac;if(!e)return;const t=.06,n=this.durum==="emote"?.075:.03,a=t+Math.sin(this.zaman*1.3)*n;e.rotation.x+=(a-e.rotation.x)*.12,e.rotation.z=Math.sin(this.zaman*.9)*.02}idlePozu(e){const t=Math.sin(e*1.7),n=Math.sin(e*1.13);return{head:[n*2.4,t*4.5,t*1.5],body:[n*.5,0,0],armL:[t*3.6,0,2.6+n*1.4],armR:[-t*3.6,0,-2.6-n*1.4],legL:[-t*1.2,0,0],legR:[t*1.2,0,0],bend:[0,0,0,0,0],konum:[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],kokDon:[0,0,0],kokKonum:[0,0,0]}}uygula(e,t){const n=this.kemikler;if(!n)return;const a=Wy.degToRad,r=(o,l,c)=>{const d=a(l[0]),f=-a(l[1]),u=a(l[2]);o.rotation.x+=(d-o.rotation.x)*t,o.rotation.y+=(f-o.rotation.y)*t,o.rotation.z+=(u-o.rotation.z)*t;const h=o.userData.pivotPx||[0,0,0],v=e.konum[c],m=(h[0]+v[0])*Ee,p=(h[1]+v[1])*Ee,g=(h[2]+v[2])*Ee;o.position.x+=(m-o.position.x)*t,o.position.y+=(p-o.position.y)*t,o.position.z+=(g-o.position.z)*t};r(n.head,e.head,0),r(n.body,e.body,1),r(n.armL,e.armL,2),r(n.armR,e.armR,3),r(n.legL,e.legL,4),r(n.legR,e.legR,5);const s=this.bukulenler;if(s){const o=(l,c)=>{const d=a(c);l.rotation.x+=(d-l.rotation.x)*t};o(s.armL,e.bend[0]),o(s.armR,e.bend[1]),o(s.legL,e.bend[2]),o(s.legR,e.bend[3]),o(s.body,e.bend[4]),o(s.belUst,e.bendTasi===!0?e.bend[4]:0)}if(this.kalca){const o=e.kokDon;this.kalca.rotation.x+=(a(o[0])-this.kalca.rotation.x)*t,this.kalca.rotation.y+=(-a(o[1])-this.kalca.rotation.y)*t,this.kalca.rotation.z+=(a(o[2])-this.kalca.rotation.z)*t;const l=e.kokKonum,c=l[0]*Ee,d=(12+l[1])*Ee,f=l[2]*Ee;this.kalca.position.x+=(c-this.kalca.position.x)*t,this.kalca.position.y+=(d-this.kalca.position.y)*t,this.kalca.position.z+=(f-this.kalca.position.z)*t}this.kok&&(this.kok.position.y+=(-.66-this.kok.position.y)*t)}kapati(){this.sahneTemizle(),cancelAnimationFrame(this.rafId),this.rafId=0,this.boyutla&&window.removeEventListener("resize",this.boyutla),this.boyutla=null,this.yorungeKapat(),this.pelerinTemizle(),this.kanatTemizle(),this._bekleyenPelerin=null,this._bekleyenKanat=null,this._pelerinTuval=null,this.canliDoku?.dispose(),this.canliDoku=null,this.renderer?.dispose(),this.renderer=null,this.kemikler=null,this.bukulenler=null,this.kok=null,this.kalca=null,this.aktif=null,this.canvas=null,this.durum="idle"}}let Na=null;function Bn(){return Na||(Na=new WM),window.__sahne=Na,Na}function Rc(){Na?.kapati(),Na=null,window.__sahne=null}const de=128,Ft=96;function nn(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function I(i,e,t,n=1,a=1,r="#fff"){i.fillStyle=r,i.fillRect(Math.round(e),Math.round(t),Math.round(n),Math.round(a))}function ln(i,e,t=Ft){const n=Math.ceil(t/e.length);e.forEach((a,r)=>I(i,0,r*n,de,n+1,a));for(let a=1;a<e.length;a++){const r=a*n,s=nn(a*977);for(let o=0;o<de;o+=2)s()>.45&&(I(i,o,r-1,1,1,e[a-1]),s()>.6&&I(i,o+1,r-1,1,1,e[a]))}}function cr(i,e,t,n,a,r){I(i,e+3,t+3,n,3,a),I(i,e,t+5,n+6,3,a),I(i,e+2,t+8,n-2,2,r),I(i,e+6,t+2,n-8,2,a),I(i,e+4,t+10,n-6,1,r)}function oi(i,e,t,n,a){const r=nn(a);for(let s=0;s<6;s++){const o=Math.floor(r()*de),l=18+Math.floor(r()*26);for(let c=0;c<l;c++){const d=Math.max(1,Math.round(c/l*(16+s%3*6)));I(i,o-d,e-c,d*2,1,t)}I(i,o-1,e-l+1,2,2,n)}}function Di(i,e,t,n,a=30){const r=nn(n);for(let s=0;s<e;s++){const o=Math.floor(r()*de),l=a+Math.floor(r()*(Ft-a));I(i,o,l,1,1,t[Math.floor(r()*t.length)])}}const rc=[{id:"kiraz",ad:"Kiraz Korusu",etiket:"Pembe taç, düşen yapraklar",ciz(i){ln(i,["#f6d8e4","#f1c6d8","#e8b0ca","#cf8fb4"],70),I(i,0,62,de,8,"#b98aa6"),I(i,0,68,de,8,"#8f6377"),oi(i,64,"#a97a95","#d9aec6",41);const e=(n,a,r)=>{const s=nn(r),o=78;I(i,n,o-a,3,a,"#5d3b46"),I(i,n+1,o-a,1,a,"#7a5260");const l=12+Math.floor(s()*5);for(let c=0;c<3;c++){const d=n+1+Math.round((s()-.5)*14),f=o-a-Math.round(s()*14)-c*4;for(let u=-l;u<=l;u++){const h=Math.round(Math.sqrt(Math.max(0,l*l-u*u))*1.15);h<=0||I(i,d-h,f+u,h*2,1,u<0?"#f7b8d2":"#e795b6")}for(let u=0;u<10;u++){const h=Math.round((s()-.5)*l*1.6),v=Math.round((s()-.5)*l*1.6);I(i,d+h,f+v,1,1,s()>.5?"#ffd3e4":"#d47fa1")}}};e(18,26,7),e(96,30,19),e(58,22,31),I(i,0,78,de,Ft-78,"#7fa86a"),I(i,0,78,de,2,"#9dc484"),I(i,0,90,de,6,"#5d7f4f");const t=nn(53);for(let n=0;n<70;n++)I(i,t()*de,12+t()*62,1,1,t()>.5?"#ffd3e4":"#f2a7c4")}},{id:"nether",ad:"Nether Kalesi",etiket:"Obsidyen kule, lav parıltısı",ciz(i){ln(i,["#2a0d13","#4a1119","#6d1a1e","#8f2a20"],56),I(i,0,52,de,6,"#ff6a1a"),I(i,0,52,de,2,"#ffa347"),I(i,0,56,de,2,"#c93d0c"),I(i,0,40,de,14,"#2b1218"),I(i,12,26,16,30,"#1c0a10"),I(i,12,22,16,5,"#2f121a"),I(i,96,18,20,42,"#1c0a10"),I(i,96,14,20,5,"#2f121a"),I(i,44,34,34,26,"#22101a"),I(i,44,30,34,4,"#331522");const e=nn(17);for(let t=0;t<16;t++){const n=46+Math.floor(e()*30),a=36+Math.floor(e()*20);I(i,n,a,2,3,"#ff9b3d")}I(i,18,32,2,3,"#ffb04d"),I(i,102,26,2,3,"#ffb04d"),I(i,0,70,de,26,"#120810");for(let t=0;t<de;t+=16)I(i,t,70,15,8,"#1b0d17"),I(i,t+1,71,13,2,"#241322");I(i,0,84,de,4,"#ff5a14"),I(i,0,84,de,1,"#ffb44d"),I(i,0,88,de,8,"#120810"),Di(i,40,["#ff8a2a","#ffc061","#ff5a14"],91,24)}},{id:"end",ad:"End Şehri",etiket:"Mor boşluk, koros kuleler",ciz(i){ln(i,["#150c22","#1d1030","#26143d","#2f1a49"],62),Di(i,55,["#e7d6ff","#b795f0","#8e6bd0"],13,4),I(i,0,58,de,10,"#241436"),I(i,0,58,de,2,"#3a2152");const e=(n,a,r)=>{I(i,n,a,9,r,"#3d2a56"),I(i,n+1,a,2,r,"#55406f"),I(i,n+7,a,2,r,"#2a1c3d"),I(i,n-2,a-3,13,3,"#63498a"),I(i,n-1,a-6,11,3,"#4a3568"),I(i,n+2,a-9,5,3,"#63498a")};e(16,30,30),e(74,22,38),e(104,36,24);const t=(n,a)=>{I(i,n,a,2,6,"#efe4ff"),I(i,n-2,a+1,6,3,"rgba(200,170,255,0.35)"),I(i,n,a+6,2,2,"#b795f0")};t(20,24),t(78,16),t(108,30),I(i,30,46,14,4,"#2c1a41"),I(i,34,50,6,3,"#1e1130"),I(i,96,50,10,3,"#2c1a41"),I(i,0,68,de,Ft-68,"#1b1029"),I(i,0,68,de,3,"#34204a");for(let n=4;n<de;n+=14)I(i,n,76,9,2,"#2a1a3d");Di(i,22,["#c9b3f5","#8e6bd0"],71,70)}},{id:"bastion",ad:"Bastion",etiket:"Karataş surlar, altın damar",ciz(i){ln(i,["#2b0b0b","#451014","#5d1717","#74201b"],50),I(i,0,46,de,8,"#8a2a1c");const e=(t,n,a,r)=>{I(i,t,n,a,r,"#221a1f"),I(i,t,n,a,2,"#33272e");for(let s=4;s<r;s+=8)I(i,t+2,n+s,a-4,1,"#1a1318")};e(0,24,30,46),e(98,18,30,52),e(34,34,60,36);for(let t=36;t<92;t+=12)I(i,t,38,6,6,"#120d10");I(i,4,28,8,8,"#120d10"),I(i,104,24,8,8,"#120d10"),I(i,8,50,4,4,"#ffcf4d"),I(i,14,54,2,2,"#e0a81f"),I(i,106,44,5,5,"#ffcf4d"),I(i,60,52,4,4,"#ffcf4d"),I(i,66,56,2,2,"#e0a81f"),I(i,0,70,de,26,"#150f12"),I(i,0,74,de,6,"#ff6418"),I(i,0,74,de,1,"#ffb44d"),I(i,0,80,de,16,"#150f12"),Di(i,26,["#ffb44d","#ff7a20"],33,60)}},{id:"mantar",ad:"Mantar Adası",etiket:"Dev şapkalar, turkuaz gök",ciz(i){ln(i,["#0d2b33","#123a44","#17505a","#1d6b70"],74),cr(i,22,18,22,"#2d6f74","#1d5259"),cr(i,76,12,30,"#2d6f74","#1d5259"),I(i,0,66,de,10,"#2f6b52"),I(i,0,66,de,2,"#4b8b68");const e=(n,a,r)=>{const s=nn(r),o=4+Math.floor(s()*2);I(i,n,74-a,o,a,"#e6d7bd"),I(i,n,74-a,1,a,"#f3e9d6"),I(i,n+o-1,74-a,1,a,"#c9b797");const l=74-a-10;for(let c=0;c<10;c++){const d=Math.round(14-c*1.1);I(i,n+o/2-d,l+c,d*2,1,c<4?"#e14a3a":"#c33a2e")}for(let c=0;c<9;c++)I(i,n+o/2-12+s()*24,l+2+s()*7,2,1,"#fff3e2")};e(22,30,3),e(72,40,9),e(104,24,15),I(i,0,74,de,Ft-74,"#3f7c5c"),I(i,0,74,de,2,"#5b9d77"),I(i,0,86,de,10,"#2c5a44");const t=nn(61);for(let n=0;n<48;n++)I(i,t()*de,10+t()*60,1,1,t()>.5?"#a9f0d8":"#7fd6be")}},{id:"buz",ad:"Buz Diyarı",etiket:"Aurora, buzdağı",ciz(i){ln(i,["#071226","#0c1d3a","#122b52","#19396b"],60);for(let n=0;n<4;n++){const a=12+n*7;for(let r=0;r<de;r++){const s=Math.round(Math.sin(r/de*Math.PI*2+n)*3);I(i,r,a+s,1,2,n%2?"rgba(94,255,206,0.30)":"rgba(122,182,255,0.28)")}}Di(i,40,["#ffffff","#cfe6ff","#9fc4ff"],29,2),oi(i,60,"#2a4a74","#7fa8d6",77);const e=(n,a,r,s)=>{for(let o=0;o<s;o++){const l=Math.round(r*(1-o/s)*.9);I(i,n-l/2+o*.4,a+o,l,1,o<s*.4?"#d6ecff":"#a6cbe8")}I(i,n,a+2,2,s-4,"#ffffff")};e(22,46,26,26),e(96,52,30,20),e(60,58,18,14),I(i,0,72,de,Ft-72,"#0f2a4a"),I(i,0,72,de,2,"#2b5f8c");for(let n=0;n<24;n++){const a=nn(n*13);I(i,a()*de,76+a()*18,6+a()*10,1,"#1f4b72")}const t=nn(83);for(let n=0;n<26;n++)I(i,t()*de,28+t()*44,1,1,"#ffffff")}},{id:"col",ad:"Çöl Tapınağı",etiket:"Kum piramit, sıcak pus",ciz(i){ln(i,["#f7dfa8","#f3cf86","#e8b969","#d9a052"],62),I(i,96,12,12,12,"#fff3cf"),I(i,94,10,16,16,"rgba(255,235,180,0.25)");for(let t=0;t<4;t++){const n=54+t*6;I(i,0,n,de,6,t<2?"#d8ab68":"#c1924f"),I(i,0,n,de,1,"#e8c584")}const e=22;for(let t=0;t<34;t++){const n=Math.round(8+t*1.7);I(i,46-n/2,e+t,n,1,t%7===0?"#c79a55":"#dcb271"),I(i,46-n/2,e+t,2,1,"#f0d29a")}I(i,42,40,8,16,"#6b4d28"),I(i,43,42,6,14,"#3d2b14"),I(i,18,52,3,22,"#7b5a34");for(let t=0;t<5;t++){const n=t<2?-1:1;for(let a=0;a<8;a++)I(i,19+n*a,52-a+Math.abs(a-3),2,1,t%2?"#5f8f4a":"#7aa85c")}I(i,0,78,de,Ft-78,"#e0b877"),I(i,0,78,de,2,"#f2d49b");for(let t=6;t<de;t+=18)I(i,t,86,5,2,"#c69a5c")}},{id:"okyanus",ad:"Okyanus Anıtı",etiket:"PriZmarin, ışık huzmeleri",ciz(i){ln(i,["#0a2a3a","#0c3446","#0e3f52","#104a5e"],40);for(let n=0;n<6;n++){const a=8+n*21;for(let r=0;r<66;r++){const s=2+r*.18;I(i,a+r*.12,r,s,1,"rgba(150,240,255,0.06)")}}const e=(n,a,r,s)=>{I(i,n,a,r,s,"#2f7d76"),I(i,n,a,r,2,"#48a89a"),I(i,n,a+s-2,r,2,"#1f5b57")};e(28,30,72,34),e(40,22,48,10),e(52,14,24,10),I(i,60,18,8,4,"#a8f0e2"),I(i,62,16,4,2,"#e0fff8"),I(i,34,40,4,4,"#d9b34a"),I(i,90,46,4,4,"#d9b34a");for(let n=32;n<96;n+=12)I(i,n,52,6,2,"#1d4a48");I(i,0,64,de,Ft-64,"#0b2c33"),I(i,0,64,de,3,"#164a4a");const t=nn(47);for(let n=0;n<16;n++){const a=t()*de,r=6+t()*12;I(i,a,78-r,2,r,t()>.5?"#1f6b55":"#2b8a63")}Di(i,30,["#8fe8dd","#c8fff6"],11,8)}},{id:"gunbatimi",ad:"Kızıl Gün Batımı",etiket:"Turuncu gökyüzü, kuğular",ciz(i){ln(i,["#3b1d3f","#6b2b45","#a8453f","#d96b36","#f0a03c"],64);const e=84,t=58;for(let a=-7;a<=7;a++){const r=Math.round(Math.sqrt(Math.max(0,49-a*a))*2);I(i,e-r/2,t+a,r,1,Math.abs(a)<3?"#fff3c4":"#ffd27a")}I(i,0,74,de,1,"#ffcf8a"),oi(i,66,"#8c3a4d","#d98a63",7),oi(i,72,"#5f2a44","#a45c60",13),oi(i,78,"#3b1c33","#7a3b50",29),I(i,0,75,de,Ft-75,"#2a1730");for(let a=75;a<92;a+=2)I(i,0,a,de,1,a%4===0?"#4a2440":"#351a33");for(let a=0;a<9;a++){const r=10-a;I(i,e-r/2+(a%2?1:-1),76+a*2,Math.max(2,r),1,"rgba(255,196,110,0.5)")}for(let a=0;a<5;a++)I(i,20+a*26,80+(a%2?2:0),8,1,"rgba(255,220,180,0.18)");const n=(a,r)=>{I(i,a,r,1,1,"#3a2130"),I(i,a-3,r-2,3,1,"#3a2130"),I(i,a+1,r-2,3,1,"#3a2130")};n(30,26),n(36,22),n(58,30),n(21,33),Di(i,22,["#ffe6b0","#ffd07a"],9,6)}},{id:"sehir",ad:"Neon Şehir Gece",etiket:"Cam kuleler, kırmızı-mavi neon",ciz(i){ln(i,["#05070f","#080d1a","#0b1526","#0e1d33"],54),Di(i,34,["#cfe0ff","#8fa8d8"],3,6);const e=nn(71);for(let n=0;n<9;n++){const a=8+Math.floor(e()*14),r=16+Math.floor(e()*22);I(i,n*15+(n%2?2:0),60-r,a,r+4,"#0a1120")}const t=(n,a,r)=>{I(i,n,60-r,a,r+4,"#111a2c"),I(i,n,60-r,a,1,"#243350");for(let s=60-r+3;s<62;s+=4)for(let o=n+2;o<n+a-2;o+=4)e()>.45&&I(i,o,s,2,2,e()>.6?"#ffd479":"#9fd0ff")};t(4,16,34),t(24,12,22),t(40,18,44),t(62,10,28),t(76,20,38),t(100,14,26),I(i,45,40,8,2,"#ff4d6d"),I(i,45,45,4,2,"#ff4d6d"),I(i,82,34,6,2,"#4dd8ff"),I(i,48,12,1,6,"#243350"),I(i,47,11,3,2,"#ff5a5a"),I(i,0,64,de,Ft-64,"#070b14");for(let n=0;n<24;n++){const a=Math.floor(e()*de);I(i,a,66+n%5*5,3,1,e()>.5?"rgba(255,90,120,0.22)":"rgba(90,180,255,0.18)")}}},{id:"aurora",ad:"Aurora Gölü",etiket:"Kuzey ışıkları, su yansıması",ciz(i){ln(i,["#030617","#061029","#0a1a38","#0d2044"],58),Di(i,40,["#e8f0ff","#a8bce0"],3,6);const e=[{x:8,w:10,renk:"90,255,190"},{x:34,w:8,renk:"90,200,255"},{x:62,w:12,renk:"190,140,255"},{x:94,w:9,renk:"90,255,190"}];for(const n of e)for(let a=0;a<34;a++){const r=Math.max(2,Math.round(n.w*(1-a/34))),s=(.4*(1-a/34)).toFixed(2);I(i,n.x-r/2+a*.05,6+a,r,1,`rgba(${n.renk},${s})`)}oi(i,60,"#0d1c33","#1b3555",19),oi(i,66,"#091426","#132741",37),I(i,0,70,de,Ft-70,"#050a18");for(let n=70;n<96;n+=2)I(i,0,n,de,1,n%4===0?"#0b1a30":"#070f1f");for(let n=0;n<26;n++){const a=n*13%de,r=72+n%4*5;I(i,a,r,2,1,n%3===0?"rgba(90,255,190,0.16)":"rgba(90,200,255,0.12)")}const t=nn(23);for(let n=0;n<30;n++)I(i,Math.floor(t()*de),Math.floor(t()*66),1,1,"rgba(255,255,255,0.45)")}},{id:"cicek",ad:"Çiçek Vadisi",etiket:"Güneşli çayır, kelebekler",ciz(i){ln(i,["#bfe9ff","#a8dcff","#cdeeff","#e8f6d8"],50),cr(i,16,12,22,"#ffffff","#d6ecff"),cr(i,70,20,26,"#ffffff","#d6ecff"),cr(i,44,8,16,"#ffffff","#e2f2ff");for(let n=0;n<5;n++)I(i,10+n*26,30+n,1,20,"rgba(255,240,180,0.14)");oi(i,54,"#8fbf6a","#c6e39a",11),oi(i,60,"#6da356","#a5cf84",27),I(i,0,64,de,10,"#7fb35c"),I(i,0,74,de,10,"#6da356"),I(i,0,84,de,Ft-84,"#5c8f4c");const e=nn(61);for(let n=0;n<34;n++){const a=Math.floor(e()*de),r=66+Math.floor(e()*30),s=3+Math.floor(e()*3);I(i,a,r-s,1,s,"#4a7a3c");const o=["#ffd85e","#ff8fa3","#ffffff","#c79bff","#ff9a4d"][Math.floor(e()*5)];I(i,a-1,r-s-1,3,2,o),I(i,a,r-s-1,1,1,"#fff3b0")}const t=(n,a)=>{I(i,n,a,2,1,"#ffffff"),I(i,n-2,a,2,1,"#ffe6a3"),I(i,n+2,a+1,2,1,"#ffe6a3")};t(26,40),t(72,46),t(94,34)}},{id:"kanyon",ad:"Kanyon Kıyısı",etiket:"Katmanlı kayalar, nehir, sıcak hava",ciz(i){ln(i,["#f2c078","#e8a862","#d98a4e","#c4713c"],60),oi(i,62,"#a45b3c","#e0a878",5);const e=[{y:62,h:10,renk:"#8f3f2c",isik:"#b5623f"},{y:72,h:10,renk:"#7a3426",isik:"#9c4a31"},{y:82,h:10,renk:"#652a1f",isik:"#833c2a"},{y:92,h:4,renk:"#4d1f18",isik:"#6b2c22"}];for(const a of e)I(i,0,a.y,de,a.h,a.renk),I(i,0,a.y,de,1,a.isik);for(let a=0;a<7;a++){const r=6+a*18,s=8+a*7%12;for(let o=0;o<s;o++)I(i,r+o,62+s-o-1,6,1,o%3===0?"#b5623f":"#8f3f2c")}I(i,0,88,de,6,"#1f5f7a");for(let a=0;a<de;a+=7)I(i,a,88,4,1,"#8fd4e8"),I(i,a+3,92,3,1,"rgba(255,255,255,0.35)");const t=nn(29);for(let a=0;a<26;a++)I(i,Math.floor(t()*de),82+Math.floor(t()*6),2,1,"#5c3a2a");const n=(a,r)=>{I(i,a,r,3,1,"#3a2118"),I(i,a+4,r,3,1,"#3a2118")};n(26,22),n(38,17),n(52,24),n(64,19)}},{id:"zirve",ad:"Karlı Zirve",etiket:"Kar tepeler, çamlar, kar yağışı",ciz(i){ln(i,["#0f2436","#17364a","#1f4a63","#2b6480"],56),cr(i,12,10,24,"#4a7a94","#2b6480"),cr(i,66,18,28,"#4a7a94","#2b6480"),oi(i,64,"#3d6b86","#8fd0e8",3),oi(i,70,"#2a4a60","#6fb2cc",17);for(let n=0;n<de;n++){const a=(Math.sin(n*.11)+1)*6+58;I(i,n,Math.round(a),1,3,"rgba(255,255,255,0.7)")}const e=(n,a)=>{I(i,n,84-a,2,a,"#2b1c14");for(let s=0;s<4;s++){const o=84-a+s*4,l=5+s*3;I(i,n-l/2+1,o,l,3,s%2?"#14432f":"#1b5b3c")}};e(14,22),e(30,28),e(44,18),e(96,24),e(108,20),I(i,0,84,de,Ft-84,"#cfe4f0"),I(i,0,84,de,2,"#ffffff");for(let n=0;n<de;n+=9)I(i,n,90,5,1,"rgba(255,255,255,0.6)");const t=nn(11);for(let n=0;n<40;n++)I(i,Math.floor(t()*de),Math.floor(t()*70),1,1,"rgba(255,255,255,0.75)")}},{id:"zifiri",ad:"Zifiri Orman",etiket:"Dev mantarlar, ateş böcekleri",ciz(i){ln(i,["#05070c","#080d15","#0b1220","#101a2c"],52);const e=nn(33);for(let n=0;n<7;n++){const a=n*20,r=30+Math.floor(e()*20);I(i,a,52-r,5,r+4,"#070b12")}const t=(n,a,r)=>{I(i,n,80-a,6,a,"#d9d3c4"),I(i,n+2,80-a,2,a,"#f2ede0");const o=80-a;for(let l=0;l<7;l++){const c=Math.round(r/2*Math.sqrt(Math.max(0,1-l/7*(l/7))));I(i,n+3-c,o-l,c*2,1,l<3?"#c4453f":"#a53833")}I(i,n+1,o-6,2,2,"#f2ede0"),I(i,n+5,o-5,2,2,"#f2ede0")};t(16,26,20),t(58,34,26),t(100,22,18);for(let n=0;n<8;n++){const a=4+Math.floor(e()*120);I(i,a,84,2,3,"#d9d3c4"),I(i,a-1,82,4,2,"#c4453f")}I(i,0,88,de,Ft-88,"#050810"),I(i,0,88,de,1,"#16202e");for(let n=0;n<22;n++){const a=Math.floor(e()*de),r=40+Math.floor(e()*44);I(i,a,r,1,1,"#ffe27a"),I(i,a,r+1,1,1,"rgba(255,226,122,0.35)")}}},{id:"liman",ad:"Liman Feneri",etiket:"Deniz, kayıklar, fener ışığı",ciz(i){ln(i,["#1b2a44","#24395a","#2f4a72","#3d5d8a"],54);const e=nn(7);Di(i,26,["#e8f0ff","#a8bce0"],3,6),I(i,104,14,8,8,"#f2ead0"),I(i,106,16,4,4,"rgba(0,0,0,0.12)"),I(i,8,58,26,6,"#0e1728"),I(i,14,54,4,4,"#0e1728");const t=40;for(let a=0;a<24;a++){const r=14-a;I(i,t-r/2,78-a,Math.max(3,r),1,a%4===3?"#c9453f":"#e8e2d4")}I(i,t-5,78,10,3,"#8a8478");for(let a=0;a<4;a++){const r=54+a;I(i,t+6,r,22+a*8,1,`rgba(255,226,150,${.28-a*.06})`)}I(i,0,80,de,2,"#4a3524");const n=a=>{I(i,a,84,14,2,"#6b4a30"),I(i,a+2,80,2,4,"#4a3524"),I(i,a+10,79,1,6,"#d8cdb4")};n(10),n(70),n(96),I(i,0,86,de,Ft-86,"#101d33");for(let a=86;a<96;a+=2)I(i,0,a,de,1,a%4===0?"#1a2c4a":"#152238");for(let a=0;a<18;a++){const r=Math.floor(e()*de);I(i,r,88+a%5,3,1,"rgba(150,190,255,0.18)")}}},{id:"rastgele",ad:"Rastgele",etiket:"Her açılışta farklı sahne",ciz(i){ln(i,["#12151c","#1b1f27","#242935","#2d333f"],60),I(i,58,30,12,4,"#f4ece2"),I(i,66,34,4,4,"#f4ece2"),I(i,66,44,4,4,"#f4ece2"),I(i,66,56,4,4,"#f4ece2");for(let e=0;e<de;e+=8)I(i,e,74,6,2,e%16===0?"#ff5a1f":"#ffb627");I(i,0,78,de,Ft-78,"#0b0705")}},{id:"ozel",ad:"Özel fotoğraf",etiket:"Kendi seçtiğin resim",ciz(i){i.clearRect(0,0,de,Ft)}}],KM=rc;function kv(i){return rc.find(e=>e.id===i)||rc[0]}const Fl=rc.filter(i=>i.id!=="ozel"&&i.id!=="rastgele");function Sv(i){const e=Fl;if(!e.length)return"kiraz";let t=e[Math.floor(Math.random()*e.length)].id;if(e.length>1&&t===i){const n=e.filter(a=>a.id!==i);t=n[Math.floor(Math.random()*n.length)].id}return t}function Bf(i,e){const t=i.getContext("2d");t&&((i.width!==de||i.height!==Ft)&&(i.width=de,i.height=Ft),t.imageSmoothingEnabled=!1,e!=="ozel"?(t.fillStyle="#0b0705",t.fillRect(0,0,de,Ft)):t.clearRect(0,0,de,Ft),kv(e).ciz(t))}const XM=`{
    "name": {
        "translate": "emotecraft.emote.waving.name"
    },
    "author": {
        "player": {
            "id": [2143116393, -1362800877, -2082782478, 1380574660]
        },
        "extra": [
            " §7KosmX"
        ],
        "color": "#ffffff"
    },
    "description": {
        "translate": "emotecraft.emote.waving.description"
    },
    "uuid": "33b912f8-0aa0-45e6-a2d4-9b5677e6f35c",
    "emote": {
        "beginTick": 0,
        "endTick": 50,
        "stopTick": 54,
        "degrees": true,
        "previewTick": 10,
        "moves": [
            {
                "tick": 0,
                "easing": "OutBack",
                "rightArm": {
                    "yaw": 0,
                    "roll": 0
                },
                "leftArm": {
                    "roll": 0
                }
            },
            {
                "tick": 8,
                "easing": "OutBack",
                "rightArm": {
                    "yaw": -90,
                    "roll": -90
                }
            },
            {
                "tick": 10,
                "easing": "InOutSine",
                "rightArm": {
                    "roll": -185
                }
            },
            {
                "tick": 15,
                "easing": "InOutSine",
                "rightArm": {
                    "roll": -95
                }
            },
            {
                "tick": 20,
                "easing": "InOutSine",
                "rightArm": {
                    "roll": -185
                }
            },
            {
                "tick": 25,
                "easing": "InOutSine",
                "rightArm": {
                    "roll": -95
                }
            },
            {
                "tick": 30,
                "easing": "InOutSine",
                "rightArm": {
                    "roll": -185
                }
            },
            {
                "tick": 35,
                "easing": "InOutSine",
                "rightArm": {
                    "roll": -95
                }
            },
            {
                "tick": 40,
                "easing": "InOutSine",
                "rightArm": {
                    "roll": -185
                }
            },
            {
                "tick": 46,
                "easing": "InOutSine",
                "rightArm": {
                    "roll": -95
                }
            },
            {
                "tick": 49,
                "easing": "OutBack",
                "rightArm": {
                    "yaw": -90
                }
            },
            {
                "tick": 50,
                "easing": "OutBack",
                "rightArm": {
                    "yaw": 0,
                    "roll": 0
                },
                "leftArm": {
                    "roll": 0
                }
            }
        ]
    }
}`;function $f(){const i=String(te.config?.sahne_arka||"nether");return te.config?.sahne_arka_elle===!0?i:i==="ozel"&&te.config?.sahne_arka_ozel?"ozel":Sv(i)}let Ct=null;const Kp=()=>document.documentElement.getAttribute("data-world")==="sahne",YM=()=>document.documentElement.getAttribute("data-world")==="modern",Mv=i=>{if(!i)return"hiç";const e=Math.round((Date.now()-i)/6e4);if(e<1)return"şimdi";if(e<60)return`${e} dk önce`;const t=Math.round(e/60);return t<24?`${t} saat önce`:`${Math.round(t/24)} gün önce`};function ZM(i){const e=te.instances[0];(!Ct||!te.instances.find(c=>c.id===Ct))&&(Ct=e?.id||null);const t=te.instances.find(c=>c.id===Ct),n=Sn(),a=c=>!!c&&(c.includes("/")||c.includes("\\")),r=[...te.instances].sort((c,d)=>(d.last_played||0)-(c.last_played||0)),s=r[0]||null,o=r.slice(0,5);i.innerHTML=`
    <div class="imp-root">
      <div class="imp-main">
        <div class="imp-brand">
          <div class="imp-brand-orta">
            <span class="imp-chip imp-sari">YIKIM</span>
            <span class="imp-chip imp-gri">LIENT</span>
          </div>
          <span class="imp-counter">${te.instances.length} kurulum</span>
        </div>

        <div class="imp-banner${t?.cover?" kapakli":""}"${t?.cover?` style="background-image:url('${ut(t.cover)}')"`:""}>
          <div class="vitrin"><canvas id="sahne-arka" class="sahne-arka"></canvas><canvas id="sahne-katman"></canvas></div>
          <button class="imp-ad-chip" id="i-ad" title="Hesap yönetimi">
            ${n?.name?`<img src="${Ho(n)}" alt="" draggable="false" ${Go(n)}><b>${vs(n.id)}${n.name}</b><small>hesabı yönet</small>`:"<b>hesap yok</b><small>giriş yap</small>"}
          </button>
          ${t?`<button class="imp-buyut" id="i-menu" title="${t.name}">${G("gear")}</button>`:""}
        </div>

        <div class="imp-profil-baslik">
          <span>${G("grid")} SON OYNANAN PROFİLLER</span>
          <span class="imp-pill">
            <span class="pill sel">${t?.mod_loader?Oa(t.mod_loader):"Java"}</span>
            <span class="pill">${t?.mc_version||"—"}</span>
          </span>
        </div>
        <div class="imp-profiller" id="i-profil-satirlar"></div>

        <div class="imp-alt">
          <button class="imp-tam imp-sari-tam" id="i-yonet">${G("grid")} TÜM PROFİLLERİ YÖNET</button>
          <button class="imp-tam imp-gri-tam" id="i-mod">${G("plus")} MOD EKLE</button>
        </div>
      </div>

      <div class="imp-yan">
        <div class="imp-news-head">
          <b>● SON HABERLER</b>
          <button class="imp-link" id="i-haber-tumu">Tümü →</button>
        </div>
        <div class="imp-news" id="i-news"><div class="imp-news-kart yukleniyor"></div></div>

        <div class="imp-hizli">
          <div class="imp-hizli-bas">${G("play")} HIZLI GİRİŞ</div>
          ${s?`
          <button class="imp-hizli-satir${Ke.activeId===s.id?" durdur":""}" id="i-hizli-oyla" ${Ke.activeId&&Ke.activeId!==s.id?'disabled data-kilitli="1"':""}>
            <b>${s.last_server?s.last_server:s.name}${Ke.activeId===s.id?" — AÇIK":""}</b>
            <small>${s.last_server?`${s.name} · ${Oa(s.mod_loader)} · ${s.mc_version}`:`${Oa(s.mod_loader)} · ${s.mc_version}`}</small>
          </button>
          <button class="imp-hizli-satir pas" id="i-hizli-liste">Tümünü gör →</button>`:`
          <button class="imp-hizli-satir pas" id="i-hizli-liste">İlk kurulumu oluştur</button>`}
        </div>
      </div>
    </div>
  `;const l=i.querySelector("#i-profil-satirlar");for(const c of o){const d=vi(`
      <div class="imp-satir${Ke.activeId===c.id?" oyunda":""}${c.id===Ct?" secili":""}" role="button" tabindex="0" data-id="${c.id}">
        <span class="imp-satir-ikon">${a(c.icon)?`<img src="${ut(c.icon)}" draggable="false" />`:`<span class="emoji">${c.icon||"🔥"}</span>`}</span>
        <span class="imp-satir-yazi">
          <b class="imp-satir-ad">${c.name}</b>
          <small>${Oa(c.mod_loader)} · ${c.mc_version} — ${Mv(c.last_played)}</small>
        </span>
        <button class="imp-oyla${Ke.activeId===c.id?" durdur":""}" ${Ke.activeId&&Ke.activeId!==c.id?'disabled data-kilitli="1"':""}
          title="${Ke.activeId===c.id?"Oyunu kapat":`${c.name} — OYNA`}">${G(Ke.activeId===c.id?"stop":"play")} ${Ke.activeId===c.id?"DURDUR":"OYNA"}</button>
        <button class="imp-diyis" title="Düzenle">${G("gear")}</button>
      </div>
    `);d.addEventListener("click",f=>{const u=c.id;if(f.target.closest(".imp-diyis")){qe("instances",u);return}if(f.target.closest(".imp-oyla")){Ke.activeId===c.id&&Bl();return}Ct=u,qe("instances",u)}),d.querySelector(".imp-oyla")?.addEventListener("click",f=>f.stopPropagation()),l.appendChild(d)}l.querySelectorAll(".imp-satir").forEach(c=>{const d=c.dataset.id||"";c.querySelector(".imp-oyla")?.addEventListener("click",async f=>{if(f.stopPropagation(),Ke.activeId===d)return Bl();if(!te.accounts.length)return pn();const{launchInstance:u}=await tt(async()=>{const{launchInstance:h}=await Promise.resolve().then(()=>vt);return{launchInstance:h}},void 0);u(d)})}),i.querySelector("#i-yonet")?.addEventListener("click",()=>qe("instances")),i.querySelector("#i-mod")?.addEventListener("click",()=>qe("explore")),i.querySelector("#i-menu")?.addEventListener("click",()=>{Ct&&qe("instances",Ct)}),i.querySelector("#i-ad")?.addEventListener("click",()=>pn()),i.querySelector("#i-haber-tumu")?.addEventListener("click",()=>qe("news")),i.querySelector("#i-hizli-liste")?.addEventListener("click",()=>qe("instances")),i.querySelector("#i-hizli-oyla")?.addEventListener("click",async()=>{if(!s)return;if(Ke.activeId===s.id)return Bl();if(!te.accounts.length)return pn();const{launchInstance:c}=await tt(async()=>{const{launchInstance:d}=await Promise.resolve().then(()=>vt);return{launchInstance:d}},void 0);c(s.id,s.last_server||null)}),Hf(i,n)}async function Bl(){try{await ne("cmd_kill_game")}catch{}const{refreshState:i}=await tt(async()=>{const{refreshState:e}=await Promise.resolve().then(()=>vt);return{refreshState:e}},void 0);await i(!0)}async function JM(i){const e=i.querySelector("#i-news");if(e)try{const t=await ne("cmd_list_yikim_news");t.sort((n,a)=>(a.pinned?1:0)-(n.pinned?1:0)||a.date.localeCompare(n.date)),e.innerHTML="";for(const n of t.slice(0,2)){const a=vi(`
        <div class="imp-news-kart" role="button" tabindex="0">
          <div class="imp-news-img"${n.image?` style="background-image:url('${n.image}')"`:""}></div>
          <div class="imp-news-govde">
            <span class="imp-news-chip${n.pinned?" sar":""}">${n.pinned?"DUYURU":"YIKIM"}</span>
            <b>${n.title}</b>
            <small>${n.date}</small>
          </div>
        </div>
      `);a.addEventListener("click",()=>qe("news")),e.appendChild(a)}}catch{}}function jM(i){const e=te.instances[0];(!Ct||!te.instances.find(f=>f.id===Ct))&&(Ct=e?.id||null);const t=te.instances.find(f=>f.id===Ct)||null,n=Sn(),a=f=>!!f&&(f.includes("/")||f.includes("\\")),r=[...te.instances].sort((f,u)=>(u.last_played||0)-(f.last_played||0)),s=kv($f()),o=te.sys?.total_ram_mb||16384,l=t?Math.min(100,Math.round(t.ram_mb/o*100)):0,c=!!t&&Ke.activeId===t.id,d=t?a(t.icon)?`<img src="${ut(t.icon)}" alt="" draggable="false" />`:`<span class="emoji">${t.icon||"🔥"}</span>`:"";i.innerHTML=`
    <div class="md-root">
      <div class="md-stage" aria-hidden="true">
        <canvas id="sahne-arka" class="sahne-arka"></canvas>
        <div class="md-scrim"></div>
        <canvas id="sahne-katman"></canvas>
      </div>

      <div class="md-main">
        <div class="md-stage-head">
          <span class="md-kicker">YIKIM Lient · Modern</span>
          <h1>${n?`${vs(n.id)}${n.name}`:"Hoş geldin"}</h1>
          <p>${s.ad} — ${s.etiket}</p>
          <button class="md-scene" id="md-scene" title="Sahneyi değiştir">
            ${G("image")} <span>Sahneyi değiştir</span>
          </button>
        </div>

        <aside class="md-card" aria-label="Kurulum kartı">
          <div class="md-tabs" role="tablist">
            <button class="md-tab on" data-mdtab="kurulum" role="tab" aria-selected="true">Kurulumlar</button>
            <button class="md-tab" data-mdtab="son" role="tab" aria-selected="false">Son Oynanan</button>
          </div>

          <div class="md-pane on" data-mdpane="kurulum">
            ${t?`
              <div class="md-inst">
                <span class="md-inst-icon">${d}</span>
                <span class="md-inst-text">
                  <b>${t.name}</b>
                  <small>${Oa(t.mod_loader)} · ${t.mc_version}</small>
                </span>
                ${c?'<span class="md-live">AÇIK</span>':""}
              </div>
              <div class="md-meters">
                <div class="md-mrow"><span>Bellek</span><b>${(t.ram_mb/1024).toFixed(1)} GB / ${(o/1024).toFixed(0)} GB</b></div>
                <div class="md-bar"><span style="width:${l}%"></span></div>
                <div class="md-mrow"><span>Mod seti</span><b>${t.standard_mods?"Optimize":"Sade"}</b></div>
                <div class="md-mrow"><span>Son oyun</span><b>${t.last_played?new Date(t.last_played).toLocaleDateString("tr-TR"):"—"}</b></div>
              </div>
              ${c?`<button class="md-play md-stop" id="h-stop">${G("stop")} DURDUR</button>`:`<button class="md-play" id="h-play" ${Ke.activeId?"disabled":""}>${G("play")} ${Ke.activeId?"OYUN AÇIK":"OYNA"}</button>`}
              <div class="md-links">
                <button class="md-link" id="h-manage">${G("gear")} Yönet</button>
                <button class="md-link" id="h-new">${G("plus")} Yeni</button>
                <button class="md-link" id="h-all">${G("grid")} Tümü</button>
              </div>
            `:`
              <p class="md-empty-p">Henüz kurulum yok. İlk kurulumunu oluştur — sürümü seç,
                gerisini YIKIM halleder.</p>
              <button class="md-play" id="h-new">${G("plus")} KURULUM OLUŞTUR</button>
            `}
          </div>

          <div class="md-pane" data-mdpane="son">
            ${r.length?r.slice(0,5).map(f=>{const u=a(f.icon)?`<img src="${ut(f.icon)}" alt="" draggable="false" />`:`<span class="emoji">${f.icon||"🔥"}</span>`;return`
              <button class="md-recent" data-id="${f.id}">
                <span class="md-recent-icon">${u}</span>
                <span class="md-recent-text">
                  <b>${f.name}</b>
                  <small>${Oa(f.mod_loader)} · ${f.mc_version}</small>
                </span>
                <span class="md-recent-time">${Mv(f.last_played)}</span>
                <span class="md-recent-play" role="button" title="Oyna">${G("play")}</span>
              </button>`}).join(""):'<p class="md-empty-p">Henüz oynanmış kurulum yok.</p>'}
          </div>
        </aside>
      </div>

      <footer class="md-status">
        <button class="md-acc" id="md-acc" title="Hesabı yönet">
          ${n?`<img src="${Ho(n)}" alt="" draggable="false" ${Go(n)} />`:`<span class="md-acc-ph">${G("user")}</span>`}
          <span>${n?`${vs(n.id)}${n.name}`:"Giriş yap"}</span>
        </button>
        <span class="md-dot" data-durum="${Ke.activeId?"oyun":"hazir"}"></span>
        <span class="md-hint">${Ke.activeId?"Oyun açık — pencereyi kapatmak launcher'ı küçültür.":"Sağ Shift: oyun içi menü · Sağ Ctrl: HUD"}</span>
        <span class="md-grow"></span>
        <span class="md-meta">${te.instances.length} kurulum</span>
        <span class="md-meta">RAM <b>${t?`${(t.ram_mb/1024).toFixed(1)} GB`:"—"}</b></span>
        <span class="md-meta" id="md-ver">v?</span>
      </footer>
    </div>
  `;try{const f=window.__TAURI__?.app;f?.getVersion&&f.getVersion().then(u=>{const h=i.querySelector("#md-ver");h&&(h.textContent=`v${u}`)}).catch(()=>{})}catch{}QM(i),Hf(i,n)}function QM(i){i.querySelector("#h-play")?.addEventListener("click",async()=>{if(!Ct){qe("instances");return}if(!te.accounts.length){pn();return}const e=i.querySelector(".md-play");e&&Sc(e);const{launchInstance:t}=await tt(async()=>{const{launchInstance:n}=await Promise.resolve().then(()=>vt);return{launchInstance:n}},void 0);t(Ct)}),i.querySelector("#h-stop")?.addEventListener("click",()=>void Bl()),i.querySelector("#h-manage")?.addEventListener("click",()=>{qe("instances",Ct||void 0)}),i.querySelector("#h-new")?.addEventListener("click",()=>qe("instances")),i.querySelector("#h-all")?.addEventListener("click",()=>qe("instances")),i.querySelector("#md-acc")?.addEventListener("click",()=>{te.accounts.length?qe("settings"):pn()}),i.querySelectorAll(".md-tab").forEach(e=>e.addEventListener("click",()=>{i.querySelectorAll(".md-tab").forEach(t=>{const n=t===e;t.classList.toggle("on",n),t.setAttribute("aria-selected",String(n))}),i.querySelectorAll(".md-pane").forEach(t=>{t.classList.toggle("on",t.dataset.mdpane===e.dataset.mdtab)})})),i.querySelectorAll(".md-recent").forEach(e=>e.addEventListener("click",async t=>{const n=e.dataset.id||"";if(t.target.closest(".md-recent-play")){if(!te.accounts.length){pn();return}const{launchInstance:a}=await tt(async()=>{const{launchInstance:r}=await Promise.resolve().then(()=>vt);return{launchInstance:r}},void 0);a(n);return}qe("instances",n)})),i.querySelector("#md-scene")?.addEventListener("click",async()=>{const e=$f(),t=Fl.findIndex(s=>s.id===e),n=Fl[(t+1)%Fl.length];te.config.sahne_arka=n.id,te.config.sahne_arka_elle=!0;const a=i.querySelector("#sahne-arka");a&&Bf(a,n.id);const r=i.querySelector(".md-stage-head p");r&&(r.textContent=`${n.ad} — ${n.etiket}`);try{await ne("cmd_save_settings",{config:te.config})}catch{}X(`Sahne: ${n.ad}`)})}function eE(i){if(Rc(),Kp()){ZM(i),JM(i);return}if(YM()){jM(i);return}const e=te.instances[0];(!Ct||!te.instances.find(f=>f.id===Ct))&&(Ct=e?.id||null);const t=te.instances.find(f=>f.id===Ct),n=Sn(),a=f=>!!f&&(f.includes("/")||f.includes("\\")),r=t?a(t.icon)?`<img class="hero-inst-icon" src="${ut(t.icon)}" draggable="false" />`:`<span class="hero-inst-icon emoji">${t.icon||"🔥"}</span>`:"",s=!!t?.cover&&!Kp(),o=s?` style="background-image:url('${ut(t.cover)}')"`:"",l=t?Ke.activeId===t.id?"warn":"ok":"off",c=te.instances.filter(f=>f.id!==t?.id);i.innerHTML=`
    <div class="page-wrap">
    <!-- HERO HAT: seçili kurulum tek satırda — lamba, ad, ölçümler, OYNA şalteri -->
    <section class="home-hero${s?" has-cover":""}${t?" secili-var":""}"${o}>
      <div class="vitrin" aria-label="Karakter vitrini">
        <canvas id="sahne-arka" class="sahne-arka"></canvas>
        <canvas id="sahne-katman"></canvas>
        <div class="vitrin-isim">${n?`${n.name} — SAHNE`:"SAHNE"}</div>
      </div>
      <div class="hero-content">
        ${t?`
          <div class="hero-badge">${fo(l)} ${r} ${t.mc_version} · ${Oa(t.mod_loader)}</div>
          <h1>${t.name}</h1>
          <div class="hero-meters">
            <div class="meter">
              <div class="meter-cap">BELLEK</div>
              <div class="meter-val">${(t.ram_mb/1024).toFixed(0)} <small>GB / ${(te.sys?.total_ram_mb||16384)/1024} GB</small></div>
              <div class="meter-bar"><span style="width:${Math.min(100,Math.round(t.ram_mb/(te.sys?.total_ram_mb||16384)*100))}%"></span></div>
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
            <button class="btn ghost" id="h-manage">${G("gear")} Yönet</button>
            <button class="btn ghost" id="h-new">${G("plus")} Kurulum Oluştur</button>
          </div>
        `:`
          <div class="hero-badge"><img src="/logo.png" draggable="false" /> YIKIMLient</div>
          <h1>Panoya hoş geldin</h1>
          <p style="color:var(--text-dim); max-width:460px; line-height:1.6; margin-bottom:16px">
            Panoda henüz devre yok. İlk kurulumunu oluştur — sürümü seç, gerisini pano halleder.
          </p>
          <div class="hero-actions">
            <button class="btn primary lg" id="h-new">${G("plus")} İlk Kurulumu Oluştur</button>
          </div>
        `}
      </div>
      ${t?`
      <div class="play-ring-wrap">
        <button class="play-ring ${Ke.activeId?"disabled":""}" id="h-play"
          title="${Ke.activeId?"Oyun zaten açık":`${t.name} — OYNA`}"
          ${Ke.activeId?"disabled":""}>
          <span class="pr-icon">${Ke.activeId?G("clock"):G("play")}</span>
          <span class="pr-label">${Ke.activeId?"AÇIK":"OYNA"}</span>
          <span class="pr-sub">${Ke.activeId?"çalışıyor":t.name}</span>
        </button>
        ${Ke.activeId===t.id?`
        <button class="stop-ring" id="h-stop" title="Oyunu kapat">
          ${G("stop")}
          <span class="sr-label">DURDUR</span>
        </button>`:""}
      </div>`:""}
    </section>

    <!-- HAT DEFTERİ: diğer kurulumlar cetvelle bölünmüş satırlar -->
    ${c.length?`
    <section class="home-section" aria-label="Diğer kurulumlar">
      <div class="ledger">
        <div class="ledger-head">
          <span class="ledger-title">DİĞER HATLAR</span>
          <button class="btn ghost sm" id="h-all">${G("grid")} Tümü</button>
        </div>
        <div id="ledger-rows"></div>
      </div>
    </section>`:""}

    <!-- HESAP HATASI: hesap yoksa pano uyarır -->
    ${n?"":`
    <section class="home-section">
      <div class="ledger">
        <div class="ledger-row" id="h-account-row" role="button" tabindex="0">
          ${fo("err")}
          <span class="lr-name">Hesap bağlı değil</span>
          <span class="lr-grow"></span>
          <span class="lr-meta">Oynamak için hesap gerekli <span class="sep">→</span></span>
        </div>
      </div>
    </section>`}

    <!-- Duyurular (yalnızca geliştiricinin imzalı feed'i) -->
    <section class="home-section" ${te.config?.show_news===!1?"hidden":""}>
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
          <div class="cs-val">${G("globe")}</div>
          <div class="cs-label">GitHub'da Aç</div>
        </div>
      </div>
    </section>
    </div>
  `;const d=i.querySelector("#ledger-rows");if(d){for(const f of c){a(f.icon);const u=vi(`
        <button class="ledger-row" data-id="${f.id}">
          ${fo(Ke.activeId===f.id?"warn":"ok")}
          <span class="lr-name">${f.name}</span>
          <span class="lr-grow"></span>
          <span class="lr-meta">
            ${Oa(f.mod_loader)} ${f.mc_version}
            <span class="sep">·</span>
            Son: ${f.last_played?new Date(f.last_played).toLocaleDateString("tr-TR"):"hiç"}
          </span>
          <span class="lr-play" title="Oyna">${G("play")}</span>
        </button>
      `);u.querySelector(".lr-play").innerHTML=G("play"),u.addEventListener("click",async h=>{if(h.target.closest(".lr-play")){if(!te.accounts.length)return pn();Sc(u);const{launchInstance:v}=await tt(async()=>{const{launchInstance:m}=await Promise.resolve().then(()=>vt);return{launchInstance:m}},void 0);v(f.id);return}qe("instances",f.id)}),d.appendChild(u)}Mf(Array.from(d.children))}nE(i),iE(),tE(i),Hf(i,n)}async function Ev(){if(document.getElementById("sahne-katman"))try{const i=await ne("cmd_kozmetik_oku"),e=Bn();i?.pelerin_dosya&&i.pelerin_aktif!==!1?await e.pelerin({url:ut(String(i.pelerin_dosya))}):await e.pelerin(null)}catch{}}window.addEventListener("yikim:yetki",()=>{Ev()});async function Hf(i,e){const t=i.querySelector("#sahne-katman");if(!t)return;const n=document.documentElement.getAttribute("data-world"),a=i.querySelector("#sahne-arka");if(a&&(n==="sahne"||n==="modern")){const l=$f();if(l==="ozel"&&te.config?.sahne_arka_ozel){const c=ut(String(te.config.sahne_arka_ozel)),d=new Image;d.onload=()=>{a.style.backgroundImage=`url("${c}")`,a.style.backgroundSize="cover",a.style.backgroundPosition="center"},d.src=c}else a.style.backgroundImage="",a.style.backgroundSize="",a.style.backgroundPosition="",Bf(a,l),a.style.imageRendering="";a.classList.add("on")}const r=Bn();r.etkilesimKapali=!1,r.kur(t),t.classList.add("on");try{const l=await ne("cmd_get_account_skin",{id:e?.id||""});l?.dosya?await r.skin({url:ut(String(l.dosya)),slim:!!l.slim}):await r.skin(null)}catch{await r.skin(null)}if(await Ev(),te.config?.menu_animasyon===!1){r.emoteleriKur([]);return}if(te.config?.menu_animasyon_sadece_bizim!==!1){const l=te.instances.find(c=>c.id===Ct);if(l&&l.source_pack){r.emoteleriKur([]);return}}const o={sakin:.6,normal:1,canli:1.8}[String(te.config?.menu_animasyon_hiz||"normal")]||1;try{const l=await ne("cmd_list_emotes"),c=[];for(const d of l)try{c.push(Fp(d.icerik))}catch{}if(r.emoteleriKur(c,o,n==="modern"?3.2:0),n==="modern"){let d=c.find(f=>/wave|sall|el ?salla/i.test(`${f.adi} ${f.aciklama}`))||null;if(!d)try{d=Fp(XM)}catch{d=null}d&&window.setTimeout(()=>{t.isConnected&&r.emoteOynat(d)},380)}}catch{r.emoteleriKur([])}}async function tE(i){try{const e=await ne("cmd_get_community_stats"),t=i.querySelector("#cs-downloads"),n=i.querySelector("#cs-stars");t&&(t.textContent=(e.downloads||0).toLocaleString("tr-TR")),n&&(n.textContent=(e.stars||0).toLocaleString("tr-TR"))}catch{const e=i.querySelector("#cs-downloads"),t=i.querySelector("#cs-stars");e&&(e.textContent="—"),t&&(t.textContent="—")}i.querySelector("#cs-github-link")?.addEventListener("click",()=>{tt(()=>Promise.resolve().then(()=>vt),void 0).then(e=>e.openExternal("https://github.com/YKSAMI1/yikimlient").catch(()=>{}))})}function Oa(i){return{vanilla:"Vanilla",fabric:"Fabric",forge:"Forge"}[i]||i}function nE(i){i.querySelector("#h-play")?.addEventListener("click",async()=>{if(!Ct){qe("instances");return}if(!te.accounts.length){pn();return}Sc(i.querySelector(".play-ring"));const{launchInstance:e}=await tt(async()=>{const{launchInstance:t}=await Promise.resolve().then(()=>vt);return{launchInstance:t}},void 0);e(Ct)}),i.querySelector("#h-stop")?.addEventListener("click",async()=>{try{await ne("cmd_kill_game")}catch{}const{refreshState:e}=await tt(async()=>{const{refreshState:t}=await Promise.resolve().then(()=>vt);return{refreshState:t}},void 0);await e(!0)}),i.querySelector("#h-manage")?.addEventListener("click",()=>{qe("instances",Ct||void 0)}),i.querySelector("#h-new")?.addEventListener("click",()=>qe("instances")),i.querySelector("#h-all")?.addEventListener("click",()=>qe("instances")),i.querySelector("#news-all")?.addEventListener("click",()=>qe("news")),i.querySelector("#h-account-row")?.addEventListener("click",()=>pn())}async function iE(){const i=ki("#home-news");if(i)try{const e=await ne("cmd_list_yikim_news");if(i.innerHTML="",!e.length){i.innerHTML='<div class="card"><p>Duyuru yok — yenilikler burada belirecek.</p></div>';return}e.sort((t,n)=>(n.pinned?1:0)-(t.pinned?1:0)||n.date.localeCompare(t.date));for(const t of e.slice(0,4)){const n=vi(`
        <div class="news-card card hover">
          ${t.image?`<div class="news-img" style="background-image:url('${t.image}')"></div>`:`<div class="news-img noimg">${G("news")}</div>`}
          <div class="news-body">
            <div class="chip orange">${t.pinned?"DUYURU":"YIKIM"} · ${t.date}</div>
            <h3>${t.title}</h3>
          </div>
        </div>
      `);n.addEventListener("click",()=>qe("news")),i.appendChild(n)}}catch{i.innerHTML='<div class="card"><p>Duyurular şimdilik yüklenemedi — çevrimdışı olabilirsin.</p></div>'}}const hs=[];let Xp=!1;function aE(){document.addEventListener("pointerdown",i=>{const e=i.target;if(!(!e||!(e instanceof Element)))for(const t of hs)t.acikMi()&&(t.icindeMi(e)||t.tetikleyici&&e.closest(t.tetikleyici)||t.kapat())},!0),document.addEventListener("keydown",i=>{if(i.key==="Escape")for(let e=hs.length-1;e>=0;e--){const t=hs[e];if(t.acikMi()){i.preventDefault(),i.stopPropagation(),t.kapat();return}}})}function wv(i){return hs.push(i),Xp||(aE(),Xp=!0),()=>{const e=hs.indexOf(i);e>=0&&hs.splice(e,1)}}const Tv="yikim-bildirimler",rE=60;function Lc(){try{const i=localStorage.getItem(Tv);if(!i)return[];const e=JSON.parse(i);return Array.isArray(e)?e:[]}catch{return[]}}function Gf(i){try{localStorage.setItem(Tv,JSON.stringify(i.slice(0,rE)))}catch{}}function Ja(i,e,t){const n=Lc(),a=Date.now();n.length&&n[0].baslik===e&&n[0].mesaj===t&&a-n[0].at<3e3||(n.unshift({id:`b${a.toString(36)}${Math.random().toString(36).slice(2,6)}`,tur:i,baslik:e,mesaj:t,at:a,okundu:!1}),Gf(n),document.querySelector("#bildirim-panel.bildirim-acik")&&Rs(),Pc(!0))}function Av(){const i=Lc();i.some(e=>!e.okundu)&&(i.forEach(e=>{e.okundu=!0}),Gf(i),Pc(!1))}function Rv(){Gf([]),Rs(),Pc(!1)}function Lv(){let i=document.querySelector("#bildirim-panel");return i||(i=document.createElement("div"),i.id="bildirim-panel",i.className="bildirim-panel",document.body.appendChild(i),wv({acikMi:()=>i.classList.contains("bildirim-acik"),kapat:()=>Cc(),icindeMi:e=>i.contains(e),tetikleyici:"#tb-pack"})),i}function Vf(){const i=Lv();Rs(),Av(),i.classList.toggle("bildirim-acik")}function Cc(){document.querySelector("#bildirim-panel")?.classList.remove("bildirim-acik")}const sE={kurulum:"📦",sistem:"⚙️",mod:"🧩",genel:"🔔"};function oE(i){const e=new Date(i.at).toLocaleTimeString("tr-TR",{hour:"2-digit",minute:"2-digit"});return`
    <div class="bild-satir" data-tur="${i.tur}">
      <span class="bild-ikon">${sE[i.tur]}</span>
      <div class="bild-govde">
        <div class="bild-baslik">${i.baslik}</div>
        <div class="bild-mesaj">${i.mesaj}</div>
      </div>
      <span class="bild-saat">${e}</span>
    </div>`}function Rs(){const i=Lv(),e=Lc();i.innerHTML=`
    <div class="bild-kafa">
      <span class="bild-kafa-ad">Bildirimler</span>
      <div class="bild-kafa-islem">
        <button class="bild-temizle" title="Tümünü temizle">Temizle</button>
        <button class="bild-kapat" title="Kapat">✕</button>
      </div>
    </div>
    <div class="bild-liste">
      ${e.length?e.map(oE).join(""):""}
    </div>
    ${e.length?"":`
      <div class="bild-bos">
        <div class="bild-bos-ikon">🔔</div>
        <div>Şu an bir şey olmuyor.</div>
        <div class="bild-bos-alt">Mod paketi kurulumu, güncellemeler ve diğer haberler burada gözükür.</div>
      </div>`}
  `,i.querySelector(".bild-temizle")?.addEventListener("click",t=>{t.stopPropagation(),Rv()}),i.querySelector(".bild-kapat")?.addEventListener("click",t=>{t.stopPropagation(),Cc()})}function Pc(i){const e=document.querySelector("#tb-pack");e&&(e.classList.toggle("bild-var",i),e.title=i?"Yeni bildirgin var — kutuyu aç":"Bildirimler — kurulum durumu ve diğer haberler")}function Cv(){const i=Lc().filter(e=>!e.okundu).length;Pc(i>0)}window.__BILDIRIM__={ekle:Ja,acKapa:Vf,baslat:Rs,kapat:Cc};const lE=Object.freeze(Object.defineProperty({__proto__:null,bildirimAcKapa:Vf,bildirimEkle:Ja,bildirimKapat:Cc,bildirimKutuBaslat:Rs,bildirimOkundu:Av,bildirimTemizle:Rv,bildirimZilIlkDurum:Cv},Symbol.toStringTag,{value:"Module"})),Pv=[{adim:1,ad:"Paket indiriliyor",aciklama:"sunucudan paket dosyası alınıyor"},{adim:2,ad:"Paket açılıyor",aciklama:"sürüm / yükleyici bilgisi okunuyor"},{adim:3,ad:"Yapılandırma dosyaları",aciklama:"paketin kendi ayarları yazılıyor"},{adim:4,ad:"Modlar indiriliyor",aciklama:"her mod ayrı indirilip mods/ bırakılıyor"},{adim:5,ad:"Yükleyici kuruluyor",aciklama:"Fabric/Forge/NeoForge profili hazırlanıyor"},{adim:6,ad:"Oyun dosyaları",aciklama:"sürüm kurulumu: kütüphaneler + assetler + java"},{adim:7,ad:"YIKIM modu",aciklama:"launcher çekirdeği kuruluma bağlanıyor"},{adim:8,ad:"Hazır",aciklama:"kurulum oynanabilir"}],Xt=new Map;let Yp=null,sc=null;const cE=4;uE();function dE(i,e,t){const n=e>0?`${i}/${e}`:"";return t&&n?`${n} · ${t}`:t||n}function No(i,e=""){let t=Xt.get(e);if(t){t.kapandi=!1,t.bitti=!1;for(const a of t.satirlar.values())a.classList.remove("pk-bitti","pk-aktif","pk-hata","pk-atlandi"),a.classList.add("pk-bekliyor");t.root.classList.remove("pk-gizli","pk-acik","pk-bitti"),t.root.style.order="0"}else for(t=hE(e),Xt.set(e,t),t.root.classList.remove("pk-gizli"),t.root.style.order="0";Xt.size>cE;){const a=[...Xt.entries()].find(([,r])=>r!==t&&r.bitti);if(!a)break;a[1].kapandi=!0,a[1].root.classList.add("pk-gizli"),Xt.delete(a[0])}const n=t.root.querySelector(".pk-baslik");n.textContent=i,t.root.querySelector(".pk-ozet").textContent="Kurulum başlıyor…",t.root.style.removeProperty("color"),t.bar.style.transform="scaleX(0.01)",t.yuzde.textContent="%0",Yp||kn("pack-step",a=>{const r=a?.payload;if(!r)return;const s=typeof r.kimlik=="string"?r.kimlik:"",o=s?[Xt.get(s)]:[...Xt.values()];for(const l of o)l&&zv(l,r.adim,r.durum,r.done||0,r.total||0,r.ayrinti||"",r.percent||0)}).then(a=>{Yp=a}),qf("kurulum"),Ja("kurulum",i,"Kurulum başladı — adım adım sağ altta gösterilecek")}function Dv(i=""){const e=Xt.get(i);e&&e.root.classList.toggle("pk-acik")}function uE(){wv({acikMi:()=>[...Xt.values()].some(i=>i.root.classList.contains("pk-acik")),kapat:()=>{for(const i of Xt.values())i.root.classList.remove("pk-acik")},icindeMi:i=>[...Xt.values()].some(e=>e.root.contains(i)),tetikleyici:"#tb-pack"})}function Ls(i=""){const e=Xt.get(i);if(!e)return;for(const[a,r]of e.satirlar)r.classList.contains("pk-bekliyor")&&a<8&&(r.classList.remove("pk-bekliyor"),r.classList.add("pk-atlandi"));const t=e.satirlar.get(8);t&&(t.classList.remove("pk-bekliyor","pk-aktif"),t.classList.add("pk-bitti")),e.bar.style.transform="scaleX(1)",e.yuzde.textContent="%100";const n=e.root.querySelector(".pk-ozet");n.textContent="Kurulum tamam — Kurulumlar'dan oynayabilirsin",e.bitti=!0,e.root.classList.add("pk-bitti"),e.kapatZamani=Date.now()+6e3,qf("bitti"),Ja("kurulum","Kurulum tamamlandı","Paket oynanmaya hazır — Kurulumlar sayfasından başlatabilirsin"),sc===null&&Uv()}function fE(i){for(const[e,t]of Xt)i&&!e.includes(i)||t.bitti||(t.bitti=!0,t.kapatZamani=Date.now()+4e3,t.root.classList.add("pk-bitti"),sc===null&&Uv())}function Cs(i,e=""){const t=Xt.get(e);if(!t)return;const n=t.root.querySelector(".pk-ozet");n.textContent=`Kurulum durdu: ${i}`,n.style.color="var(--danger)";const a=[...t.satirlar.values()].find(r=>r.classList.contains("pk-aktif"));a&&(a.classList.remove("pk-aktif"),a.classList.add("pk-hata")),t.root.classList.add("pk-acik"),qf("kurulum"),Ja("sistem","Kurulum durdu",i.length>120?`${i.slice(0,120)}…`:i)}function Iv(i,e,t,n,a,r=""){const s=Xt.get(r);s&&zv(s,i,e,t,n,a,0)}function qf(i){const e=document.querySelector("#tb-pack");e&&(e.classList.toggle("bild-var",i!=="yok"),e.title=i==="bitti"?"Kurulum tamamlandı — durumu göster":i==="kurulum"?"Mod paketi kuruluyor — durumu göster":"Bildirimler — kurulum durumu ve diğer haberler")}function zv(i,e,t,n,a,r,s){if(!i.satirlar.has(e))return;const o=i.satirlar.get(e);o.classList.remove("pk-bekliyor","pk-aktif","pk-bitti","pk-hata","pk-atlandi"),o.classList.add(`pk-${t}`);const l=i.detaylar.get(e);l.textContent=dE(n,a,r);const c=s||(e-1)/8*100;i.bar.style.transform=`scaleX(${Math.min(1,Math.max(.01,c/100))})`,i.yuzde.textContent=`%${Math.min(100,Math.round(c))}`;const d=i.root.querySelector(".pk-ozet");d.style.removeProperty("color"),d.textContent=r?`${Zp(e)} · ${r}`:Zp(e),e===8&&(t==="bitti"||t==="hata")&&(t==="bitti"?Ls(i.kimlik):Cs(d.textContent,i.kimlik))}function Zp(i){return Pv.find(e=>e.adim===i)?.ad||`Adım ${i}`}function hE(i){const e=document.createElement("div");e.className="pk-kart pk-gizli",e.dataset.kimlik=i,e.setAttribute("role","status"),e.setAttribute("aria-live","polite"),e.innerHTML=`
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
    <div class="pk-adimlar"><div class="pk-adimlar-ic"></div></div>
    <div class="pk-ozet">Kurulum başlıyor…</div>
  `;const t=new Map,n=new Map,a=e.querySelector(".pk-adimlar-ic");for(const s of Pv){const o=document.createElement("div");o.className="pk-adim pk-bekliyor",o.dataset.adim=String(s.adim),o.innerHTML=`
      <span class="pk-isaret"></span>
      <span class="pk-ad">${s.ad}</span>
      <span class="pk-detay">${s.aciklama}</span>
    `,a.appendChild(o),t.set(s.adim,o),n.set(s.adim,o.querySelector(".pk-detay"))}const r={root:e,kimlik:i,satirlar:t,detaylar:n,bar:e.querySelector(".pk-bar > div"),yuzde:e.querySelector(".pk-yuzde"),ozet:e.querySelector(".pk-ozet"),kapandi:!1,kapatZamani:0,bitti:!1};return e.querySelector(".pk-kafa").addEventListener("click",()=>Dv(i)),e.querySelector(".pk-kapat")?.addEventListener("click",s=>{s.stopPropagation(),r.kapandi=!0,r.root.classList.add("pk-gizli"),X("Kurulum arkada sürüyor","ok")}),document.body.appendChild(e),r}function Uv(){const i=setInterval(()=>{const e=[...Xt.values()].filter(t=>!t.kapandi);if(e.length===0){clearInterval(i),sc=null;return}for(const t of e)t.bitti&&Date.now()>t.kapatZamani&&(t.kapandi=!0,t.root.classList.add("pk-gizli"),Xt.delete(t.kimlik))},1200);sc=i}function Nv(){for(const[,i]of Xt)i.kapandi=!0,i.root.classList.add("pk-gizli");Xt.clear()}window.__PACK_KART_TEST__=Iv;window.__PACK_KART_KAPAT__=Nv;const Ov=Object.freeze(Object.defineProperty({__proto__:null,packKartBaslat:No,packKartBitti:fE,packKartDegistir:Dv,packKartHata:Cs,packKartTamam:Ls,packKartTest:Iv,packKartlariKapat:Nv},Symbol.toStringTag,{value:"Module"})),pE=60;function Fv(i){return!Number.isFinite(i)||i<pE?0:i>=200?8192:i>=120?7168:5120}function Wf(i,e,t){const n=Fv(i);if(!n)return 0;const a=Math.max(1024,Math.floor((t>0?t:16384)/2)),r=Math.max(1024,Math.floor(a/512)*512),s=Math.min(n,r);return e>=s?0:s}async function Kf(i){try{const{invoke:e,state:t}=await tt(async()=>{const{invoke:o,state:l}=await Promise.resolve().then(()=>vt);return{invoke:o,state:l}},void 0),n=await e("cmd_list_mods",{instanceId:i.id});if(!Array.isArray(n))return;const a=Number(i.ram_mb)||4096,r=Wf(n.length,a,t.sys?.total_ram_mb||0);if(!r)return;const{bildirimEkle:s}=await tt(async()=>{const{bildirimEkle:o}=await Promise.resolve().then(()=>lE);return{bildirimEkle:o}},void 0);s("kurulum","Bellek düşük kalabilir",`${i.name||"Paket"}: ${n.length} mod • önerilen ${r} MB, şu an ${a} MB. Kurulumlar → bu kurulum → Java & Args sekmesinden bellek sürgüsünü artırabilirsin. (Otomatik değiştirilmedi.)`)}catch{}}function oc(i,e,t,n){const a=Wf(i,e,t);return a?`
    <div class="ram-uyari">
      <b>Bu pakette ${i} mod var.</b>
      Önerilen bellek <b>${a} MB</b>, şu an <b>${e} MB</b>.
      ${n==="ayar"?"Bellek sürgüsünü yukarı çekmek takılmayı azaltır; sistem RAM'inin en fazla yarısını ayır.":"Kurulumlar → bu kurulum → Java & Args sekmesindeki bellek sürgüsünden artırabilirsin."}
    </div>`:""}const mE=Object.freeze(Object.defineProperty({__proto__:null,hamOneriRamMb:Fv,onerilenRamMb:Wf,paketSonrasiRamUyarisi:Kf,ramUyarisiHtml:oc},Symbol.toStringTag,{value:"Module"})),Jp={fabric:'<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" clip-rule="evenodd" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path fill="none" stroke="currentColor" stroke-width="23" d="m820 761-85.6-87.6c-4.6-4.7-10.4-9.6-25.9 1-19.9 13.6-8.4 21.9-5.2 25.4 8.2 9 84.1 89 97.2 104 2.5 2.8-20.3-22.5-6.5-39.7 5.4-7 18-12 26-3 6.5 7.3 10.7 18-3.4 29.7-24.7 20.4-102 82.4-127 103-12.5 10.3-28.5 2.3-35.8-6-7.5-8.9-30.6-34.6-51.3-58.2-5.5-6.3-4.1-19.6 2.3-25 35-30.3 91.9-73.8 111.9-90.8" transform="matrix(.08671 0 0 .0867 -49.8 -56)"/></svg>',vanilla:'<svg viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z" clip-rule="evenodd"/></svg>',forge:'<svg xml:space="preserve" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5" clip-rule="evenodd" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path fill="none" stroke="currentColor" stroke-width="2" d="M2 7.5h8v-2h12v2s-7 3.4-7 6 3.1 3.1 3.1 3.1l.9 3.9H5l1-4.1s3.8.1 4-2.9c.2-2.7-6.5-.7-8-6Z"></path></svg>',neoforge:'<svg enable-background="new 0 0 24 24" version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m12 19.2v2m0-2v2"/><path d="m8.4 1.3c0.5 1.5 0.7 3 0.1 4.6-0.2 0.5-0.9 1.5-1.6 1.5m8.7-6.1c-0.5 1.5-0.7 3-0.1 4.6 0.2 0.6 0.9 1.5 1.6 1.5"/><path d="m3.6 15.8h-1.7m18.5 0h1.7"/><path d="m3.2 12.1h-1.7m19.3 0h1.8"/><path d="m8.1 12.7v1.6m7.8-1.6v1.6"/><path d="m10.8 18h1.2m0 1.2-1.2-1.2m2.4 0h-1.2m0 1.2 1.2-1.2"/><path d="m4 9.7c-0.5 1.2-0.8 2.4-0.8 3.7 0 3.1 2.9 6.3 5.3 8.2 0.9 0.7 2.2 1.1 3.4 1.1m0.1-17.8c-1.1 0-2.1 0.2-3.2 0.7m11.2 4.1c0.5 1.2 0.8 2.4 0.8 3.7 0 3.1-2.9 6.3-5.3 8.2-0.9 0.7-2.2 1.1-3.4 1.1m-0.1-17.8c1.1 0 2.1 0.2 3.2 0.7"/><path d="m4 9.7c-0.2-1.8-0.3-3.7 0.5-5.5s2.2-2.6 3.9-3m11.6 8.5c0.2-1.9 0.3-3.7-0.5-5.5s-2.2-2.6-3.9-3"/><path d="m12 21.2-2.4 0.4m2.4-0.4 2.4 0.4"/></g></svg>',quilt:'<svg xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" clip-rule="evenodd" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><defs><path id="qlt" fill="none" stroke="currentColor" stroke-width="65.6" d="M442.5 233.9c0-6.4-5.2-11.6-11.6-11.6h-197c-6.4 0-11.6 5.2-11.6 11.6v197c0 6.4 5.2 11.6 11.6 11.6h197c6.4 0 11.6-5.2 11.6-11.7v-197Z"></path></defs><path fill="none" d="M0 0h24v24H0z"></path><use xlink:href="#qlt" stroke-width="65.6" transform="matrix(.03053 0 0 .03046 -3.2 -3.2)"></use><use xlink:href="#qlt" stroke-width="65.6" transform="matrix(.03053 0 0 .03046 -3.2 7)"></use><use xlink:href="#qlt" stroke-width="65.6" transform="matrix(.03053 0 0 .03046 6.9 -3.2)"></use><path fill="none" stroke="currentColor" stroke-width="70.4" d="M442.5 234.8c0-7-5.6-12.5-12.5-12.5H234.7c-6.8 0-12.4 5.6-12.4 12.5V430c0 6.9 5.6 12.5 12.4 12.5H430c6.9 0 12.5-5.6 12.5-12.5V234.8Z" transform="rotate(45 3.5 24) scale(.02843 .02835)"></path></svg>'};function bl(i){return Jp[i]||Jp.vanilla}let Jn=null;function gE(i){const e=ut(i),t=i.toLowerCase();return t.endsWith(".mp4")||t.endsWith(".webm")?`<div class="inst-cover video-cover"><video src="${e}" autoplay loop muted playsinline disablepictureinpicture preload="metadata"></video></div>`:t.endsWith(".gif")?`<div class="inst-cover gif-cover"><img src="${e}" draggable="false" alt="" /></div>`:`<div class="inst-cover" style="background-image:url('${e}')"></div>`}function vE(i){const e=i.querySelectorAll(".video-cover video");if(!e.length)return;const t=new IntersectionObserver(n=>{for(const a of n){const r=a.target;a.isIntersecting?r.play().catch(()=>{}):r.pause()}},{threshold:.05});e.forEach(n=>t.observe(n))}function jp(i,e){return Promise.race([i.catch(()=>null),new Promise(t=>setTimeout(()=>t(null),e))])}function _E(i){let e;if(Vn.param&&Vn.param.includes("|")){const[t,n]=Vn.param.split("|");Vn.param=t,e=n}if(Vn.param&&te.instances.find(t=>t.id===Vn.param)){Jn=Vn.param,Vn.param=void 0,Ao(i,Jn,e);return}if(Jn&&te.instances.find(t=>t.id===Jn)){Ao(i,Jn,e);return}lc(i)}function lc(i){i.innerHTML=`
    <div class="page-wrap">
    <div class="page-header anim-fade-up row-between">
      <div>
        <h1>Paketler</h1>
        <p>Kurulumlarını yönet, yeni profiller oluştur.</p>
      </div>
      <div style="display:flex; gap:8px">
        <button class="btn ghost" id="btn-import" title=".yikimpack / .mrpack / .zip paket dosyası içe aktar">${G("box")} Paket İçe Aktar</button>
        <button class="btn ghost" id="btn-export" title="Bu kurulumu .yikimpack olarak paylaş">${G("share")} Paketi Paylaş</button>
        <button class="btn primary" id="btn-new">${G("plus")} Yeni Kurulum</button>
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
  `;const e=i.querySelector("#inst-grid");if(!te.instances.length)e.innerHTML=`
      <div class="empty-state">
        ${G("play")}
        <h3 style="margin-top:14px">İlk kurulumunu oluştur</h3>
        <p style="margin:8px 0 16px">Sürüm ve modloader'ı seç — Java dahil gerisini biz hallederiz.</p>
        <button class="btn primary lg" id="empty-new">Kurulum Oluştur</button>
      </div>`,e.querySelector("#empty-new")?.addEventListener("click",()=>tm());else{for(const t of te.instances){const a=t.icon&&(t.icon.includes("/")||t.icon.includes("\\"))?`<img src="${ut(t.icon)}" draggable="false" onerror="window.__iconFallback && window.__iconFallback(this,'mod-fallback','play')" />`:t.icon||"🔥",r=Ke.activeId===t.id,s=vi(`
        <div class="inst-card card hover ${t.cover?"has-cover":""}" data-id="${t.id}" title="${t.name} — yönet">
          ${t.cover?gE(t.cover):""}
          <div class="inst-top">
            <div class="inst-icon">${a}</div>
            <div class="inst-info">
              <h3>${t.name}</h3>
              <div class="inst-meta">
                <span class="chip gray">${$v(t.mod_loader)} ${t.mc_version}</span>
                ${r?'<span class="chip green">oynuyor</span>':""}
              </div>
            </div>
            ${fo(r?"warn":"ok","card-lamp")}
          </div>
          <div class="inst-stats tnum">
            <span title="Bellek">${t.ram_mb} MB</span>
            <span title="Son oynanış">Son: ${t.last_played?new Date(t.last_played).toLocaleDateString("tr-TR"):"hiç"}</span>
            <span title="Toplam süre">${gs(t.playtime_ms)}</span>
          </div>
          <div class="inst-actions">
            <button class="btn primary card-play" ${Ke.activeId?"disabled":""}>
              ${Ke.activeId?`${G("clock")} Açık`:`${G("play")} Oyna`}
            </button>
            ${r?`<button class="btn danger card-stop" title="Oyunu kapat">${G("stop")} Durdur</button>`:""}
            <button class="btn ghost card-manage">Yönet</button>
          </div>
        </div>
      `);s.addEventListener("click",async o=>{if(o.target.closest(".card-play")){if(!te.accounts.length)return pn();const{launchInstance:l}=await tt(async()=>{const{launchInstance:c}=await Promise.resolve().then(()=>vt);return{launchInstance:c}},void 0);l(t.id);return}if(o.target.closest(".card-stop")){try{await ne("cmd_kill_game")}catch{}const{refreshState:l}=await tt(async()=>{const{refreshState:c}=await Promise.resolve().then(()=>vt);return{refreshState:c}},void 0);await l(!0);return}Jn=t.id,Ao(i,t.id)}),e.appendChild(s)}Mf(Array.from(e.querySelectorAll(".inst-card"))),vE(e)}i.querySelector("#btn-new")?.addEventListener("click",()=>tm()),i.querySelector("#btn-import")?.addEventListener("click",()=>yE().catch(()=>{})),i.querySelector("#btn-export")?.addEventListener("click",()=>bE()),xE()}async function yE(){const i=await ne("cmd_pick_pack_file");if(i){No("Yerel paket kurulumu");try{const e=await ne("cmd_import_pack_file",{path:i}),{refreshState:t}=await tt(async()=>{const{refreshState:n}=await Promise.resolve().then(()=>vt);return{refreshState:n}},void 0);await t(),Ls(),X(`${e.name||"Paket"} kuruldu!`,"ok"),qe("instances"),Kf(e)}catch(e){Cs(String(e)),X(`Paket içe aktarılamadı: ${e}`,"err")}}}async function bE(){const{openModal:i,toast:e}=await tt(async()=>{const{openModal:r,toast:s}=await Promise.resolve().then(()=>vt);return{openModal:r,toast:s}},void 0),{root:t,close:n}=i(`
    <h2>Paketi Paylaş</h2>
    <div class="sub">Hangi kurulumu paylaşmak istiyorsun?</div>
    <div class="share-picker">
      ${te.instances.map(r=>`
        <button class="share-pick ${r.id===(Jn||te.instances[0]?.id)?"sel":""}" data-id="${r.id}">
          <span class="sp-ik">${r.mod_loader==="fabric"?"🧵":r.mod_loader==="neoforge"?"⚙️":"📦"}</span>
          <span class="sp-ad">${r.name}</span>
          <span class="sp-meta">${r.mod_loader} ${r.mc_version}</span>
        </button>`).join("")}
    </div>
    <div style="display:flex; gap:8px; margin-top:16px">
      <button class="btn primary" id="sh-devam">Devam</button>
      <button class="btn ghost" id="sh-no">İptal</button>
    </div>
  `);t.querySelector("#sh-no")?.addEventListener("click",n);let a=Jn||te.instances[0]?.id||"";t.querySelectorAll(".share-pick").forEach(r=>{r.addEventListener("click",()=>{t.querySelectorAll(".share-pick").forEach(s=>s.classList.remove("sel")),r.classList.add("sel"),a=r.dataset.id})}),t.querySelector("#sh-devam")?.addEventListener("click",()=>{const r=te.instances.find(s=>s.id===a);if(!r){e("Bir kurulum seç","err");return}n(),Bv(r.id,r.name)})}async function Bv(i,e){const t=te.instances.find(l=>l.id===i);if(!t)return;const{openModal:n,toast:a}=await tt(async()=>{const{openModal:l,toast:c}=await Promise.resolve().then(()=>vt);return{openModal:l,toast:c}},void 0),{root:r,close:s}=n(`
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
  `);let o=!0;r.querySelectorAll(".share-mod").forEach(l=>{l.addEventListener("click",()=>{r.querySelectorAll(".share-mod").forEach(c=>c.classList.remove("sel")),l.classList.add("sel"),o=l.dataset.ultra==="1"})}),r.querySelector("#sh-no")?.addEventListener("click",s),r.querySelector("#sh-go")?.addEventListener("click",async()=>{const l={config:r.querySelector("#sh-config").checked,saves:r.querySelector("#sh-saves").checked,resourcepacks:r.querySelector("#sh-rp").checked,shaderpacks:r.querySelector("#sh-sp").checked,options:r.querySelector("#sh-opts").checked,ultraHafif:o};s(),No(`${e||t.name} paketleniyor`,`aktar:${i}`);try{const c=await ne("cmd_export_yikimpack",{instanceId:i,secenek:l});Ls(`aktar:${i}`),Ja("kurulum","Paylaşım paketi hazır",`${e||t.name}.yikimpack — ${c}`),a(`Paket hazır: ${c}`,"ok")}catch(c){Cs(String(c),`aktar:${i}`),Ja("sistem","Paket oluşturulamadı",String(c))}})}async function xE(){const i=document.querySelector("#popular-strip");if(i)try{const e=await ne("cmd_repos_popular",{kind:"modpack",loader:""});i.innerHTML="";for(const t of e){const n=vi(`
        <div class="card hover popular-card">
          ${t.icon_url?`<img class="pc-icon" src="${t.icon_url}" loading="lazy" draggable="false" onerror="window.__iconFallback && window.__iconFallback(this,'pc-icon ph','box')" />`:`<div class="pc-icon ph">${G("box")}</div>`}
          <div class="pc-body">
            <div class="pc-title">${t.title}</div>
            <div class="pc-meta">${G("dl")} ${kE(t.downloads)}</div>
          </div>
        </div>
      `);n.addEventListener("click",()=>qe("explore","kind:modpack")),i.appendChild(n)}}catch{i.innerHTML='<p class="pc-fail">Popüler paketler yüklenemedi.</p>'}}function kE(i){return i>=1e6?`${(i/1e6).toFixed(1)}M`:i>=1e3?`${(i/1e3).toFixed(0)}K`:String(i)}function $v(i){return{vanilla:"Vanilla",fabric:"Fabric",forge:"Forge"}[i]||i}function Ao(i,e,t){const n=te.instances.find(c=>c.id===e);if(!n){Jn=null,lc(i);return}const r=n.icon&&(n.icon.includes("/")||n.icon.includes("\\"))?`<img src="${ut(n.icon)}" draggable="false" onerror="window.__iconFallback && window.__iconFallback(this,'mod-fallback','play')" />`:n.icon||"🔥";i.innerHTML=`
    <div class="detail-header anim-fade-up">
      <button class="btn ghost back-btn" title="Geri">${G("back")}</button>
      <div class="inst-icon xl">${r}</div>
      <div>
        <h1>${n.name}</h1>
        <div class="inst-meta">
          <span class="chip gray">${$v(n.mod_loader)} ${n.mc_version}</span>
          <span class="chip gray">${n.ram_mb} MB RAM</span>
          <span class="chip gray">${gs(n.playtime_ms)} oynanış</span>
        </div>
      </div>
      <div style="flex:1"></div>
      <button class="btn primary lg" id="detail-play" ${Ke.activeId?"disabled":""}>${Ke.activeId?`${G("clock")} Oyun Açık`:`${G("play")} Oyna`}</button>
      ${Ke.activeId===n.id?`<button class="btn danger lg" id="detail-stop" title="Oyunu kapat">${G("stop")} Durdur</button>`:""}
    </div>
    <div class="tabs anim-fade-up">
      <button class="tab active" data-tab="mods">${G("puzzle")} Modlar</button>
      <button class="tab" data-tab="content">${G("box")} Doku & Dünya</button>
      <button class="tab" data-tab="java">${G("mug")} Java</button>
      <button class="tab" data-tab="log">${G("term")} Log</button>
      <button class="tab" data-tab="analytics">${G("chart")} Analiz</button>
      <button class="tab" data-tab="settings">${G("gear")} Ayarlar</button>
    </div>
    <div class="tab-content" id="tab-content"></div>
  `,i.querySelector(".back-btn")?.addEventListener("click",()=>{Jn=null,lc(i)}),i.querySelector("#detail-play")?.addEventListener("click",async()=>{if(!te.accounts.length)return pn();const{launchInstance:c}=await tt(async()=>{const{launchInstance:d}=await Promise.resolve().then(()=>vt);return{launchInstance:d}},void 0);c(n.id),i.querySelector('.tab[data-tab="log"]')?.click()}),i.querySelector("#detail-stop")?.addEventListener("click",async()=>{try{await ne("cmd_kill_game")}catch{}const{refreshState:c}=await tt(async()=>{const{refreshState:d}=await Promise.resolve().then(()=>vt);return{refreshState:d}},void 0);await c(!0)});const s=["mods","content","java","log","analytics","settings"];i.querySelectorAll(".tab").forEach(c=>{c.addEventListener("click",()=>{i.querySelectorAll(".tab").forEach(u=>u.classList.remove("active")),c.classList.add("active");const d=c.dataset.tab,f=i.querySelector("#tab-content");({mods:Xf,content:SE,java:Hv,log:EE,analytics:wE,settings:TE})[d](f,n)})});const o=t&&s.includes(t)?t:"log";([...i.querySelectorAll(".tab")].find(c=>c.dataset.tab===o)??i.querySelectorAll(".tab")[0]).click()}let ea="resourcepacks";const Qp=[{id:"resourcepacks",label:"Texturepackler",hint:"Kaynak paketleri (.zip)"},{id:"shaderpacks",label:"Shaderlar",hint:"Iris/OptiFine shader'ları (.zip)"},{id:"saves",label:"Dünyalar",hint:"Tek oyunculu dünyalar (klasör)"}];async function SE(i,e){const t=()=>Qp.find(a=>a.id===ea);i.innerHTML='<div class="spinner" style="margin:40px auto"></div>';const n=async()=>{let a=[];try{a=await ne("cmd_list_content_files",{instanceId:e.id,kind:ea})}catch{}const r=t();i.innerHTML=`
      <div class="mods-toolbar" style="flex-wrap:wrap">
        <div class="kind-toggle" id="content-kinds">
          ${Qp.map(o=>`<button class="kt ${o.id===ea?"sel":""}" data-k="${o.id}">${o.label}</button>`).join("")}
        </div>
        <span style="flex:1"></span>
        <button class="btn ghost sm" id="content-open">${G("folder")} Klasörü Aç</button>
        <button class="btn ghost sm" id="content-search" title="Modrinth'te ara ve indir">${G("search")} Keşfet'te Ara</button>
        <button class="btn primary sm" id="content-add">${G("plus")} ${r.id==="saves"?"Dünya Ekle":"Paket Ekle"}</button>
      </div>
      <div class="mod-list" id="content-list"></div>
    `,i.querySelectorAll("#content-kinds .kt").forEach(o=>{o.addEventListener("click",()=>{ea=o.dataset.k,n()})}),i.querySelector("#content-open")?.addEventListener("click",()=>ne("cmd_open_content_folder",{instanceId:e.id,kind:ea}).catch(()=>{})),i.querySelector("#content-search")?.addEventListener("click",()=>{const o=ea==="resourcepacks"?"resourcepack":ea==="shaderpacks"?"shader":"world";Vn.param=`kind:${o}`,qe("explore")}),i.querySelector("#content-add")?.addEventListener("click",async()=>{try{await ne("cmd_add_content_file",{instanceId:e.id,kind:ea}),await n()}catch(o){X(`Eklenemedi: ${o}`,"err")}});const s=i.querySelector("#content-list");if(!a.length){s.innerHTML=`<div class="card" style="text-align:center; padding:34px">
        <p>${r.hint}<br /><span style="color:var(--text-faint); font-size:12px">Henüz içerik yok — yukarıdan ekleyebilir ya da dosyayı bu sayfaya sürükleyip bırakabilirsin.</span></p></div>`;return}s.innerHTML="";for(const o of a){const l=o.icon?`<img alt="" draggable="false" class="row-face" width="40" height="40" src="${ut(o.icon)}" />`:`<div style="font-size:22px">${o.is_dir?"🌍":"📦"}</div>`,c=vi(`
        <div class="card mod-row" style="display:flex; align-items:center; gap:12px; padding:12px 14px">
          ${l}
          <div style="flex:1; min-width:0">
            <div style="font-weight:600; font-size:13px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap">${o.name}</div>
            <div style="color:var(--text-faint); font-size:11.5px">${o.is_dir?"dünya":Vo(o.size)}</div>
          </div>
          <button class="btn ghost sm" data-del="${o.name}" title="Sil">${G("trash")}</button>
        </div>
      `);c.querySelector("[data-del]")?.addEventListener("click",async d=>{const f=d.currentTarget.dataset.del;if(confirm(`"${f}" silinsin mi?`))try{await ne("cmd_delete_content_file",{instanceId:e.id,kind:ea,name:f}),await n()}catch(u){X(`Silinemedi: ${u}`,"err")}}),s.appendChild(c)}};await n()}async function Xf(i,e){i.innerHTML='<div class="spinner" style="margin:40px auto"></div>';let t=[];try{t=await ne("cmd_list_mods",{instanceId:e.id})}catch{}let n={},a={};i.innerHTML=`
    <div class="mods-toolbar">
      <input class="input search-in" id="mod-search" placeholder="Mod ara…" />
      <button class="btn primary" id="mod-add">${G("plus")} Mod Ekle</button>
      <button class="btn upd-all" id="mod-upd-all" hidden>${G("refresh")} Tümünü Güncelle</button>
    </div>
    <div class="mod-list" id="mod-list"></div>
  `;const r=o=>{const l=t.filter(d=>d.filename.toLowerCase().includes(o.toLowerCase())),c=i.querySelector("#mod-list");c.innerHTML="",l.length||(c.innerHTML=`<div class="card" style="text-align:center; padding:34px">
        <p>${o?"Eşleşen mod yok.":"Bu kurulumda henüz mod yok."}</p></div>`);for(const d of l){const f=n[d.filename],u=f?`<img class="mod-logo" src="${f}" loading="lazy" draggable="false" onerror="window.__iconFallback && window.__iconFallback(this,'mod-logo ph','puzzle')" />`:`<span class="mod-logo ph">${G("puzzle")}</span>`,h=vi(`
        <div class="mod-row card">
          <span class="dot ${d.enabled?"on":"off"}"></span>
          ${u}
          <div class="mod-name">
            <div class="mn">${d.filename.replace(".jar","")}</div>
            <div class="ms">${Vo(d.size)}</div>
          </div>
          <div style="flex:1"></div>
          ${a[d.filename]?`<button class="btn primary sm upd-mod" data-fn="${d.filename}" data-url="${a[d.filename].url}" data-ad="${a[d.filename].yeni_ad}" title="Yeni sürüm: ${a[d.filename].surum}">Güncelle</button>`:""}
          <div class="switch ${d.enabled?"on":""}" data-fn="${d.filename}" data-en="${d.enabled}"></div>
          <button class="btn danger sm del-mod" data-fn="${d.filename}">Sil</button>
        </div>
      `);h.querySelector(".switch")?.addEventListener("click",async v=>{const m=v.currentTarget,p=m.dataset.fn,g=m.dataset.en!=="true";await ne("cmd_toggle_mod",{instanceId:e.id,filename:p,enabled:g}),d.enabled=g,r(i.querySelector("#mod-search").value)}),h.querySelector(".upd-mod")?.addEventListener("click",async v=>{const m=v.currentTarget;m.disabled=!0,m.textContent="Güncelleniyor…";try{await ne("cmd_update_mod",{instanceId:e.id,filename:m.dataset.fn,url:m.dataset.url,yeniAd:m.dataset.ad}),X("Mod güncellendi"),await Xf(i,e)}catch(p){m.disabled=!1,m.textContent="Güncelle",X(`Güncellenemedi: ${p}`,"err")}}),h.querySelector(".del-mod")?.addEventListener("click",async()=>{await ne("cmd_delete_mod",{instanceId:e.id,filename:d.filename}),t=t.filter(v=>v.filename!==d.filename),r(i.querySelector("#mod-search").value),X("Mod silindi")}),c.appendChild(h)}};if(i.querySelector("#mod-search")?.addEventListener("input",o=>{r(o.target.value)}),i.querySelector("#mod-add")?.addEventListener("click",()=>{qe("explore",e.id)}),r(""),!t.length)return;const s=()=>i.querySelector("#mod-search")?.value??"";(async()=>{const o=await jp(ne("cmd_resolve_mod_icons",{filenames:t.map(c=>c.filename)}),8e3);o&&Object.keys(o).length&&(n=o,r(s()));const l=await jp(ne("cmd_check_mod_updates",{instanceId:e.id}),15e3);l&&(a=Object.fromEntries(l.map(c=>[c.filename,c])),r(s()),ME(a,e))})()}function ME(i,e){const t=()=>Object.keys(i).length,n=document.querySelector("#mod-upd-all");if(!n)return;const a=r=>`${G("refresh")} Tümünü Güncelle (${r})`;n.hidden=t()===0,!n.hidden&&(n.innerHTML=a(t()),n.onclick=async()=>{if(n.disabled)return;n.disabled=!0;const r=n.innerHTML;document.querySelectorAll(".upd-mod, #mod-add").forEach(o=>o.disabled=!0);let s=null;try{s=await kn("mod-updates-progress",o=>{const l=o?.payload??{};l.total&&(n.innerHTML=l.done>=l.total?`${G("refresh")} Bitiyor…`:`${G("refresh")} ${l.done+1}/${l.total} güncelleniyor…`)})??null}catch{}try{const o=await ne("cmd_update_all_mods",{instanceId:e.id});o?.bos?X("Güncellenecek mod yok"):o?.hata>0?X(`${o.basarili} mod güncellendi, ${o.hata} mod başarısız`,"err"):X(`${o?.basarili??"?"} mod güncellendi ✓`);const l=document.querySelector("#inst-content");l&&await Xf(l,e)}catch(o){X(`Güncellenemedi: ${o}`,"err")}finally{try{s?.()}catch{}n.disabled=!1,n.innerHTML=r,document.querySelectorAll(".upd-mod, #mod-add").forEach(o=>o.disabled=!1)}})}async function Hv(i,e){i.innerHTML='<div class="spinner" style="margin:40px auto"></div>';const t=await ne("cmd_list_java_arg_presets");let n=0;try{const u=await ne("cmd_list_mods",{instanceId:e.id});Array.isArray(u)&&(n=u.length)}catch{}const a=e.java_preset_id==="ozel",r=u=>u.replace(/&/g,"&amp;").replace(/</g,"&lt;"),s=e.custom_vm_args??(t.find(u=>u.id==="balanced")?.args??[]).join("\\n");i.innerHTML=`
    <div class="java-grid">
      <div class="card">
        <h3>${G("cpu")} Bellek</h3>
        <div class="ram-row">
          <input type="range" min="1024" max="16384" step="512" value="${e.ram_mb}" id="ram-range" style="flex:1" />
          <span class="chip" id="ram-val">${e.ram_mb} MB</span>
        </div>
        <p style="margin-top:8px; font-size:12px; color:var(--text-dim)">Sistem RAM'inin en fazla yarısını ayır. 4 GB çoğu modlu paket için yeterli.</p>
        <div id="ram-uyari-kutu">${oc(n,e.ram_mb,te.sys?.total_ram_mb||0,"ayar")}</div>
      </div>
      <div class="card">
        <h3>${G("args")} Java Argüman Presetleri</h3>
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
              ${u.args.length?`<details><summary>JVM bayraklarını göster</summary><pre>${u.args.join(`
`).replace(/\{ram_mb\}/g,String(e.ram_mb))}</pre></details>`:'<div style="font-size:11.5px; color:var(--text-faint); margin-top:6px">JVM bayrağı yok — istisnasız her şey oyunun kendi varsayılanında.</div>'}
            </div>`).join("")}
            ${e.java_preset_id==="hicbir"?`<div class="warn-box" style="margin-top:10px">"Hiçbiri" seçili: launcher <b>-Xmx / -Xms</b> bile eklemez. RAM sürgüsü ve chunk mesafesi bu ölçüde kullanılmaz; Java güvenli varsayılanıyla (fiziksel RAM'in bir bölümü) açılır. Mod paketi kendi başlatma argümanlarını zorunlu kılıyorsa bu doğru seçimdir.</div>`:""}
            ${e.java_preset_id==="ozel"?'<div class="warn-box" style="margin-top:10px">"Özel" seçili: RAM, chunk mesafesi ve JVM argümanlarını aşağıdan sen yazarsın. Launcher hiçbir bayrak eklemez — yazdıkların bozuksa oyun açılmaz, buradan düzeltebilirsin.</div>':""}
        </div>
      </div>
      <div class="card" id="ozel-card" ${a?"":'style="opacity:0.55"'}>
        <h3>${G("args")} Özel${a?' <span class="chip" style="margin-left:8px">aktif — launcher karışmaz</span>':' <span class="chip gray" style="margin-left:8px">"Özel" preset seçince aktif</span>'}</h3>
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
  `;const o=i.querySelector("#ram-range"),l=i.querySelector("#ram-uyari-kutu"),c=te.sys?.total_ram_mb||0;o.addEventListener("input",()=>{const u=parseInt(o.value);i.querySelector("#ram-val").textContent=`${u} MB`,l&&(l.innerHTML=oc(n,u,c,"ayar"))}),o.addEventListener("change",async()=>{await ne("cmd_set_instance_ram",{id:e.id,ramMb:parseInt(o.value)}),e.ram_mb=parseInt(o.value),X("RAM güncellendi")}),i.querySelectorAll(".preset-row").forEach(u=>{const h=u.querySelector("details");h?.addEventListener("click",v=>v.stopPropagation()),h?.querySelector("summary")?.addEventListener("click",v=>v.stopPropagation()),u.addEventListener("click",async v=>{if(v.target.closest("details"))return;const m=u.dataset.id;await ne("cmd_set_instance_java_preset",{id:e.id,presetId:m}),e.java_preset_id=m;const p=new Set(Array.from(i.querySelectorAll(".preset-row details[open]")).map(g=>g.closest(".preset-row").dataset.id));Hv(i,e),i.querySelectorAll(".preset-row").forEach(g=>{p.has(g.dataset.id)&&(g.querySelector("details").open=!0)}),X("Preset seçildi")})}),i.querySelector("#ozel-kaydet")?.addEventListener("click",async()=>{const u=i.querySelector("#ozel-vd"),h=i.querySelector("#ozel-args"),v=u.value.trim(),m=v===""?null:Math.max(2,Math.min(32,parseInt(v)||12)),p=h.value.trim();await ne("cmd_set_instance_custom",{id:e.id,viewDistance:m,customVmArgs:p||null}),e.view_distance=m,e.custom_vm_args=p||null,X("Özel ayarlar kaydedildi — bir sonraki açılışta geçerli")}),i.querySelector("#ozel-sifirla")?.addEventListener("click",()=>{const u=i.querySelector("#ozel-args");u.value=(t.find(h=>h.id==="balanced")?.args??[]).join(`
`)})}async function EE(i,e){i.innerHTML=`
    <div class="card log-card">
      <div class="log-head">
        <h3>${G("term")} Log — ${e.name}</h3>
        <span class="chip gray" id="log-count">0 satır</span>
      </div>
      <div class="log-toolbar">
        <select class="input" id="log-file"><option value="live">Canlı Akış (oyun açıkken)</option></select>
        <input class="input" id="log-search" placeholder="Loglarda ara…" />
      </div>
      <div class="live-log" id="live-log"><div class="log-hint">Yükleniyor…</div></div>
    </div>
  `;const t=i.querySelector("#live-log"),n=i.querySelector("#log-count"),a=i.querySelector("#log-file"),r=i.querySelector("#log-search");let s="live",o=0;const l=[];let c=[];const d=(_,T)=>{n.textContent=T!==void 0&&T!==_?`${T}/${_} satır`:`${_} satır`},f=_=>{const T=document.createElement("div");return T.textContent=_,_.includes("ERROR")||_.includes("Exception")?T.classList.add("err"):_.includes("WARN")&&T.classList.add("warn"),T},u=()=>{const _=r.value.trim().toLowerCase(),T=_?c.filter(b=>b.toLowerCase().includes(_)):c;if(t.innerHTML="",!T.length)t.innerHTML=`<div class="log-hint">${_?"Eşleşen satır yok.":"Log boş görünüyor."}</div>`;else{const b=document.createDocumentFragment();for(const k of T)b.appendChild(f(k));t.appendChild(b)}d(c.length,T.length)},h=()=>{if(s="live",c=[],t.innerHTML="",!l.length)t.innerHTML='<div class="log-hint">Oyun başlatıldığında loglar buraya canlı akar…</div>';else{const _=document.createDocumentFragment();for(const T of l)_.appendChild(f(T));t.appendChild(_),t.scrollTop=t.scrollHeight}d(o)},v=async _=>{s=_,t.innerHTML='<div class="log-hint">Yükleniyor…</div>';try{c=(await ne("cmd_read_log",{instanceId:e.id,fileId:_})).split(`
`),u(),t.scrollTop=0}catch(T){t.innerHTML=`<div class="log-hint">Log yüklenemedi: ${String(T)}</div>`}};let m=[];try{m=await ne("cmd_list_logs",{instanceId:e.id});const _=new Map;for(const T of m)_.has(T.date)||_.set(T.date,[]),_.get(T.date).push(T);for(const[T,b]of _){const k=document.createElement("optgroup");k.label=T;for(const S of b){const A=document.createElement("option");A.value=S.id;const x=S.label.startsWith("Oturum ")?"#"+(S.label.split("-").pop()||S.label):S.label;A.textContent=`${S.time!=="-"?S.time+" — ":""}${x} (${Vo(S.size)})`,k.appendChild(A)}a.appendChild(k)}}catch{}Ke.activeId!==e.id&&m.length?(a.value=m[0].id,v(m[0].id)):h(),a.addEventListener("change",()=>{a.value==="live"?h():v(a.value)}),r.addEventListener("input",()=>{s!=="live"&&u()});const p=await kn("game-log",_=>{s!=="live"&&(a.value="live",h()),t.querySelector(".log-hint")&&(t.innerHTML=""),l.push(_.payload),o++,l.length>500&&l.shift(),t.appendChild(f(_.payload)),d(o),t.scrollTop=t.scrollHeight,t.children.length>500&&t.firstElementChild?.remove()}),g=new MutationObserver(()=>{document.body.contains(t)||(p(),g.disconnect())});g.observe(document.body,{childList:!0,subtree:!0})}async function wE(i,e){i.innerHTML='<div class="spinner" style="margin:40px auto"></div>';const n=(await ne("cmd_get_stats")).snapshot,a=n.per_instance_ms[e.id]||0,r=n.sessions?Math.round(a/n.total_playtime_ms*n.sessions):0;i.innerHTML=`
    <div class="stats-cards stagger">
      <div class="card stat-big"><div class="sv">${gs(a)}</div><div class="sl">Bu Kurulumda</div></div>
      <div class="card stat-big"><div class="sv">~${r}</div><div class="sl">Tahmini Oturum</div></div>
      <div class="card stat-big"><div class="sv">${e.last_played?new Date(e.last_played).toLocaleDateString("tr-TR"):"—"}</div><div class="sl">Son Giriş</div></div>
      <div class="card stat-big"><div class="sv">${e.created_at?new Date(e.created_at).toLocaleDateString("tr-TR"):"—"}</div><div class="sl">Kurulum Tarihi</div></div>
    </div>
    <div class="card" style="margin-top:18px">
      <h3>${G("globe")} Sunucu Geçmişi <span style="font-weight:400; color:var(--text-faint); font-size:11.5px">tüm kurulumlar</span></h3>
      ${n.servers.length?n.servers.slice(0,10).map((s,o)=>`
        <div class="server-row">
          <span class="rank">#${o+1}</span>
          <span class="host">${s.host}</span>
          <span class="chip gray">${s.visits} giriş</span>
          <span class="dur">${gs(s.total_ms)}</span>
        </div>`).join(""):'<p style="color:var(--text-dim)">Henüz sunucu geçmişi yok.</p>'}
    </div>
    <div class="card" style="margin-top:18px">
      <h3>${G("chart")} Günlük Dağılım <span style="font-weight:400; color:var(--text-faint); font-size:11.5px">son 14 gün</span></h3>
      <div class="barchart small">
        ${em(n.daily_ms).map(s=>`
          <div class="bar-col tooltip-host">
            <div class="bar" style="height:${Math.max(s.ms/Math.max(...em(n.daily_ms).map(o=>o.ms),1)*100,s.ms?5:2)}%"></div>
            <div class="bar-lbl">${s.label}</div>
            <div class="tooltip">${s.full} — ${gs(s.ms)}</div>
          </div>`).join("")}
      </div>
    </div>
  `}function em(i){const e=[],t=new Date;for(let n=13;n>=0;n--){const a=new Date(t.getFullYear(),t.getMonth(),t.getDate()-n),r=`${a.getFullYear()}-${String(a.getMonth()+1).padStart(2,"0")}-${String(a.getDate()).padStart(2,"0")}`;e.push({label:a.getDate()%3===0?String(a.getDate()):"",ms:i[r]||0,full:r})}return e}async function TE(i,e){const t=r=>r.includes("/")||r.includes("\\"),n=e.icon&&t(e.icon)?`<img src="${ut(e.icon)}" draggable="false" onerror="window.__iconFallback && window.__iconFallback(this,'mod-fallback','play')" />`:e.icon||"🔥";i.innerHTML=`
    <div class="card">
      <h3>${G("gear")} Kurulum Ayarları</h3>
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
            <button class="btn ghost sm" id="pick-icon">${G("image")} Dosyadan Seç</button>
            <input class="input" id="set-icon" style="width:150px" value="${e.icon&&!t(e.icon)?e.icon:""}" maxlength="4" placeholder="emoji" />
          </div>
        </div>
        <div class="row-between">
          <div class="set-icon-cell">
            <span>Kapak fotoğrafı</span>
            <span class="set-icon-hint">kurulum kartının arka planı</span>
          </div>
          <div style="display:flex; gap:8px; align-items:center">
            ${e.cover?`<img class="cover-thumb" src="${ut(e.cover)}" onerror="this.style.visibility='hidden'" />`:'<span class="cover-thumb empty">—</span>'}
            <button class="btn ghost sm" id="pick-cover">${e.cover?G("image")+" Değiştir":G("image")+" Fotoğraf Seç"}</button>
            ${e.cover?'<button class="btn danger sm" id="clear-cover">Kaldır</button>':""}
          </div>
        </div>
        <div class="row-between">
          <button class="btn ghost" id="open-folder">${G("folder")} Klasörü Aç</button>
          <button class="btn ghost" id="open-mods">${G("puzzle")} mods Klasörü</button>
        </div>
        <div class="row-between">
          <button class="btn ghost" id="dup-inst">${G("copy")} Kopyala</button>
          <button class="btn danger" id="del-inst">${G("trash")} Kurulumu Sil</button>
        </div>
        <div class="row-between">
          <button class="btn primary" id="share-inst">${G("box")} Paketi Paylaş (.yikimpack)</button>
        </div>
        <p class="set-sub">Bu kurulumu başkalarının çift tıklayıp YIKIMLient ile açabileceği tek dosya haline getirir.</p>
      </div>
    </div>
  `;const a=async()=>{const r=i.querySelector("#set-name").value.trim()||e.name,s=i.querySelector("#set-icon").value.trim();await ne("cmd_rename_instance",{id:e.id,name:r}),s&&await ne("cmd_set_instance_icon",{id:e.id,icon:s}),await tt(()=>Promise.resolve().then(()=>vt),void 0).then(o=>o.refreshState())};i.querySelector("#set-name")?.addEventListener("change",a),i.querySelector("#set-icon")?.addEventListener("change",a),i.querySelector("#set-icon")?.addEventListener("input",()=>{const r=i.querySelector("#set-icon").value.trim();r&&(i.querySelector("#icon-preview").textContent=r)}),i.querySelector("#pick-icon")?.addEventListener("click",async()=>{try{await ne("cmd_pick_instance_icon",{instanceId:e.id}),await tt(()=>Promise.resolve().then(()=>vt),void 0).then(r=>r.refreshState(!0)),X("İkon güncellendi")}catch{}}),i.querySelector("#pick-cover")?.addEventListener("click",async()=>{try{await ne("cmd_pick_instance_cover",{instanceId:e.id}),await tt(()=>Promise.resolve().then(()=>vt),void 0).then(r=>r.refreshState(!0)),X("Kapak fotoğrafı eklendi")}catch{}}),i.querySelector("#clear-cover")?.addEventListener("click",async()=>{await ne("cmd_set_instance_cover",{id:e.id,cover:null}),await tt(()=>Promise.resolve().then(()=>vt),void 0).then(r=>r.refreshState(!0)),X("Kapak kaldırıldı")}),i.querySelector("#open-folder")?.addEventListener("click",()=>ne("cmd_open_instance_folder",{instanceId:e.id})),i.querySelector("#open-mods")?.addEventListener("click",()=>ne("cmd_open_mods_folder",{instanceId:e.id})),i.querySelector("#dup-inst")?.addEventListener("click",async()=>{await ne("cmd_duplicate_instance",{id:e.id}),await tt(()=>Promise.resolve().then(()=>vt),void 0).then(r=>r.refreshState()),X("Kurulum kopyalandı"),Ao(i.parentElement,Jn)}),i.querySelector("#del-inst")?.addEventListener("click",async()=>{confirm(`"${e.name}" kurulumu ve TÜM dosyaları silinecek. Emin misin?`)&&(await ne("cmd_delete_instance",{id:e.id}),await tt(()=>Promise.resolve().then(()=>vt),void 0).then(r=>r.refreshState()),Jn=null,lc(i.parentElement),X("Kurulum silindi"))}),i.querySelector("#share-inst")?.addEventListener("click",()=>{Bv(e.id,e.name)})}async function tm(){const e=(await ne("cmd_list_versions")).all,t=await ne("cmd_list_java_arg_presets"),n=await ne("cmd_list_standard_mods"),{root:a,close:r}=(await tt(async()=>{const{openModal:m}=await Promise.resolve().then(()=>vt);return{openModal:m}},void 0)).openModal(`
    <h2>Yeni Kurulum</h2>
    <div class="sub">Sürümü ve modloader'ı seç — YIKIM çekirdeği, Java'yı, kütüphaneleri, asset'leri biz indiriyoruz.</div>

    <label class="wiz-label">Kurulum adı</label>
    <input class="input" id="w-name" placeholder="Örn: PVP Paketim" />

    <label class="wiz-label">Minecraft sürümü</label>
    <select class="input" id="w-version">
      ${e.slice(0,100).map(m=>`<option value="${m}">${m}</option>`).join("")}
    </select>

    <label class="wiz-label">Mod Loader</label>
    <div class="loader-cards">
      <button class="loader-card sel" data-l="fabric">
        <div class="lc-icon">${bl("fabric")}</div><b>Fabric</b><span>Hafif, hızlı, modern — YIKIM çekirdeği dahil</span>
      </button>
      <button class="loader-card" data-l="vanilla">
        <div class="lc-icon">${bl("vanilla")}</div><b>Vanilla</b><span>Modsuz sade oyun</span>
      </button>
      <button class="loader-card" data-l="forge">
        <div class="lc-icon">${bl("forge")}</div><b>Forge</b><span>Mod paketleri &amp; klasik modlar — ilk oyun açılışında kurulur</span>
            </button>
      <button class="loader-card" data-l="neoforge">
        <div class="lc-icon">${bl("neoforge")}</div><b>NeoForge</b><span>Modern Forge yerine geçen yükleyici — sürümünü aşağıdan seçersin</span>
      </button>
    </div>

    <!-- Loader'in KENDİ sürümü: yalnız Forge/NeoForge'da görünür. Fabric her
         zaman en güncel kararlı loader'ı kullanır (kutucuk orada gereksiz). -->
    <div class="wiz-loader-surum" id="w-loader-surum-wrap" hidden>
      <label class="wiz-label">Loader sürümü</label>
      <select class="input" id="w-loader-ver" disabled>
        <option value="">Yükleniyor…</option>
      </select>
      <div class="wiz-hint" id="w-loader-hint">Forge/NeoForge build'leri Minecraft sürümüne göre değişir.</div>
    </div>

    <label class="wiz-label">Bellek</label>
    <div class="ram-row">
      <input type="range" min="1024" max="16384" step="512" value="4096" id="w-ram" style="flex:1" />
      <span class="chip" id="w-ram-val">4096 MB</span>
    </div>

    <label class="wiz-label">Java Argüman Preseti</label>
    <select class="input" id="w-preset">
      ${t.map(m=>`<option value="${m.id}">${m.name} — ${m.description}</option>`).join("")}
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
      ${["performans","pvp","gorunum","yardarci"].map(m=>`
        <div class="std-cat">
          <div class="std-cat-label">${m==="performans"?"Performans":m==="pvp"?"PVP":m==="yardarci"?"Yardımcı":"Görünüm"}</div>
          <div class="std-chips">
            ${n.filter(p=>p.category===m).map(p=>`<span class="chip ${p.enabled_by_default?"":"gray"}" title="${p.description}">${p.name}</span>`).join("")}
          </div>
        </div>`).join("")}
    </details>

    <div style="display:flex; gap:10px; margin-top:20px">
      <button class="btn ghost" id="w-cancel" style="flex:1">Vazgeç</button>
      <button class="btn primary lg" id="w-create" style="flex:2">Kurulumu Oluştur</button>
    </div>
  `);let s="fabric",o=!0;const l=a.querySelector("#w-loader-surum-wrap"),c=a.querySelector("#w-loader-ver"),d=a.querySelector("#w-loader-hint"),f=m=>m==="forge"||m==="neoforge";let u=0;async function h(){if(!l||!c)return;if(!f(s)){l.hidden=!0;return}l.hidden=!1;const m=a.querySelector("#w-version").value,p=++u;c.disabled=!0,c.innerHTML='<option value="">Yükleniyor…</option>',d&&(d.textContent="Sürüm listesi alınıyor…");try{const g=await ne("cmd_list_loader_versions",{loader:s,mcVersion:m});if(p!==u)return;const _=Array.isArray(g?.versions)?g.versions:[],T=String(g?.latest||"");c.innerHTML=`<option value="">${T?`En güncel (${T})`:"En güncel (önerilen)"}</option>`+_.slice(0,50).map(b=>`<option value="${b}">${b}${T&&b===T?" · önerilen":""}</option>`).join(""),c.disabled=!1,d&&(d.textContent=_.length?`${s==="forge"?"Forge":"NeoForge"} ${m} için ${_.length} build var — boş bırakırsan en günceli kurulur.`:`Bu Minecraft sürümü için ${s==="forge"?"Forge":"NeoForge"} build bulunamadı — en güncel denenir.`)}catch{if(p!==u)return;c.innerHTML='<option value="">En güncel (önerilen)</option>',c.disabled=!1,d&&(d.textContent="Liste alınamadı — en güncel sürüm kurulacak.")}}a.querySelectorAll(".loader-card").forEach(m=>{m.addEventListener("click",()=>{m.classList.contains("disabled")||(a.querySelectorAll(".loader-card").forEach(p=>p.classList.remove("sel")),m.classList.add("sel"),s=m.dataset.l,h())})}),a.querySelector("#w-version")?.addEventListener("change",()=>{h()});const v=a.querySelector("#w-ram");v.addEventListener("input",()=>{a.querySelector("#w-ram-val").textContent=`${v.value} MB`}),a.querySelector("#w-std-switch")?.addEventListener("click",m=>{o=!o,m.currentTarget.classList.toggle("on",o)}),a.querySelector("#w-cancel")?.addEventListener("click",r),a.querySelector("#w-create")?.addEventListener("click",async()=>{const m=a.querySelector("#w-create");m.disabled=!0,m.innerHTML='<span class="spinner"></span> Oluşturuluyor…';const p=a.querySelector("#w-name").value.trim()||"Yeni Kurulum",g=a.querySelector("#w-version").value,_=a.querySelector("#w-preset").value;try{const T=await ne("cmd_create_instance",{instance:{name:p,mc_version:g,mod_loader:s,ram_mb:parseInt(v.value),java_preset_id:_,standard_mods:o&&s==="fabric",loader_version:f(s)&&c?c.value:""}});await tt(()=>Promise.resolve().then(()=>vt),void 0).then(k=>k.refreshState()),r(),X(`"${p}" oluşturuldu`);const b=T.instance.id;if(Jn=b,te.instances.length){const k=document.querySelector("#content");Ao(k,b)}}catch(T){X(String(T),"err"),m.disabled=!1,m.textContent="Kurulumu Oluştur"}})}function Ys(i){return i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function nm(i){const e=i.trim();return/^https?:\/\//i.test(e)?e:/^\/\//.test(e)?`https:${e}`:""}function Jr(i){let e=Ys(i);const t=[];return e=e.replace(/`([^`]+)`/g,(n,a)=>(t.push(a),`\0K${t.length-1}\0`)),e=e.replace(/!\[([^\]]*)\]\(([^)\s]+)(?:\s+&quot;[^&]*&quot;)?\)/g,(n,a,r)=>{const s=nm(r.replace(/&amp;/g,"&"));return s?`<img src="${Ys(s)}" alt="${a}" loading="lazy" referrerpolicy="no-referrer">`:n}),e=e.replace(/\[([^\]]+)\]\(([^)\s]+)(?:\s+&quot;[^&]*&quot;)?\)/g,(n,a,r)=>{const s=nm(r.replace(/&amp;/g,"&"));return s?`<a href="${Ys(s)}" data-ext="1">${a}</a>`:n}),e=e.replace(/(^|[\s(])(https?:\/\/[^\s<>"]+)/g,(n,a,r)=>`${a}<a href="${Ys(r)}" data-ext="1">${r}</a>`),e=e.replace(/\*\*\*([^*]+)\*\*\*/g,"<b><i>$1</i></b>"),e=e.replace(/\*\*([^*]+)\*\*/g,"<b>$1</b>"),e=e.replace(/(^|[\s(])\*([^*\s][^*]*)\*/g,"$1<i>$2</i>"),e=e.replace(/(^|[\s(])_([^_\s][^_]*)_/g,"$1<i>$2</i>"),e=e.replace(/~~([^~]+)~~/g,"<del>$1</del>"),e=e.replace(/\u0000K(\d+)\u0000/g,(n,a)=>`<code>${t[+a]}</code>`),e}function AE(i){let e=i;return e=e.replace(/<img[^>]*src=["']([^"']+)["'][^>]*>/gi,(t,n)=>`

![resim](${n})

`),e=e.replace(/<a[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi,(t,n,a)=>`[${a.replace(/<[^>]+>/g,"")}](${n})`),e=e.replace(/<br\s*\/?>/gi,`
`),e=e.replace(/<\/(p|div|h[1-6]|li|tr)>/gi,`

`),e=e.replace(/<li[^>]*>/gi,"- "),e=e.replace(/<h([1-4])[^>]*>/gi,(t,n)=>`

${"#".repeat(+n)} `),e=e.replace(/<\/?(details|summary|center|table|tbody|thead|tr|td|th|span|font|u|b|i|strong|em|sup|sub|kbd|p|div|ul|ol|blockquote|figure|figcaption)[^>]*>/gi,`
`),e=e.replace(/<[^>]+>/g,""),e=e.replace(/&nbsp;/g," ").replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">"),e}function RE(i){if(!i)return"";let e=i.replace(/\r\n?/g,`
`);e=AE(e);const t=[];e=e.replace(/```[a-zA-Z0-9+-]*\n([\s\S]*?)```/g,(c,d)=>(t.push(d.replace(/\n$/,"")),`\0B${t.length-1}\0`));const n=e.split(`
`),a=[];let r=null,s=[];const o=()=>{s.length&&(a.push(`<p>${Jr(s.join(" "))}</p>`),s=[])},l=()=>{r&&(a.push(`</${r}>`),r=null)};for(const c of n){const f=c.trimEnd().trim();if(!f){o(),l();continue}const u=f.match(/^\u0000B(\d+)\u0000$/);if(u){o(),l(),a.push(`<pre><code>${Ys(t[+u[1]])}</code></pre>`);continue}const h=f.match(/^(#{1,6})\s+(.*)$/);if(h){o(),l();const p=Math.min(6,h[1].length);a.push(`<h${p}>${Jr(h[2])}</h${p}>`);continue}if(/^([-*_])\1{2,}$/.test(f)){o(),l(),a.push("<hr>");continue}if(f.startsWith(">")){o(),l(),a.push(`<blockquote>${Jr(f.replace(/^>\s?/,""))}</blockquote>`);continue}const v=f.match(/^\d+[.)]\s+(.*)$/);if(v){o(),r!=="ol"&&(l(),a.push("<ol>"),r="ol"),a.push(`<li>${Jr(v[1])}</li>`);continue}const m=f.match(/^[-*+]\s+(.*)$/);if(m){o(),r!=="ul"&&(l(),a.push("<ul>"),r="ul"),a.push(`<li>${Jr(m[1])}</li>`);continue}if(f.includes("|")&&/^\|.*\|$/.test(f)){if(o(),l(),/^[|\-\s:]+$/.test(f))continue;a.push(`<p class="md-tr">${Jr(f.replace(/^\||\|$/g,"").split("|").join(" · "))}</p>`);continue}l(),s.push(f)}return o(),l(),a.join(`
`)}const Yf={mod:"Mod",modpack:"Mod Paketi",resourcepack:"Doku Paketi",shader:"Shader",world:"Dünya",datapack:"Datapack"};let pa="mod",Ra="",Id="",Es="";const Gv=24;let cc=null,$l=0,oo=!1,La=!1,xl=null,Zs=0,im=!1,dc=null,Nn=null;function LE(i){Nn=i;let e=Vn.param;if(e?.startsWith("kind:")){const t=e.slice(5);Object.keys(Yf).includes(t)&&(pa=t),e=void 0}if(Vn.param=void 0,dc){Wv(dc);return}Vv(!!e)}function Vv(i=!1){const e=Nn;e.innerHTML=`
    <div class="page-wrap xp-wrap">
      <div class="xp-head anim-fade-up">
        <div>
          <h1>Keşfet</h1>
          <p>Modrinth ve CurseForge — bir içeriğe tıkla, sayfası açılsın, sürümünü seç ve kur.</p>
        </div>
        <div class="xp-head-badges">
          <span class="chip green">● Modrinth</span>
          <span class="chip ${te.curseforge?"green":"gray"}" title="CurseForge (resmî API veya anahtarsız genel ayna)">● CurseForge</span>
        </div>
      </div>

      <div class="xp-search-row anim-fade-up">
        <div class="xp-search">
          ${G("search")}
          <input id="exp-q" placeholder="Ara: sodium, pvp, shaders…" autocomplete="off" spellcheck="false" />
          <button class="btn primary" id="exp-go">Ara</button>
        </div>
      </div>

      <div class="xp-tabs anim-fade-up" role="tablist">
        ${Object.entries(Yf).map(([r,s])=>`<button class="xp-tab ${pa===r?"sel":""}" data-k="${r}">${s}</button>`).join("")}
      </div>

      <div class="xp-filters anim-fade-up">
        <label class="xp-field"><span>Oyun sürümü</span>
          <select class="input" id="exp-ver">
            <option value="">hepsi</option>
            ${te.featured_versions.map(r=>`<option>${r}</option>`).join("")}
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
  `,e.querySelectorAll(".xp-tab").forEach(r=>r.addEventListener("click",()=>{pa=r.dataset.k,e.querySelectorAll(".xp-tab").forEach(s=>s.classList.remove("sel")),r.classList.add("sel"),Ra?jr(Ra):js()}));const t=e.querySelector("#exp-q");let n;t.addEventListener("input",()=>{clearTimeout(n),n=setTimeout(()=>jr(t.value.trim()),400)}),t.addEventListener("keydown",r=>{r.key==="Enter"&&jr(t.value.trim())}),e.querySelector("#exp-go")?.addEventListener("click",()=>jr(t.value.trim())),e.querySelector("#exp-ver")?.addEventListener("change",()=>{Ra?jr(Ra):js()}),e.querySelector("#exp-loader")?.addEventListener("change",()=>{Ra?jr(Ra):js()}),e.addEventListener("click",r=>{const s=r.target.closest("a[data-ext]");s&&(r.preventDefault(),Xi(s.href))}),xl?.disconnect(),xl=null,im||(document.addEventListener("scroll",am,!0),window.addEventListener("resize",am),im=!0);const a=e.querySelector("#exp-son");a&&"IntersectionObserver"in window&&(xl=new IntersectionObserver(r=>{r.some(s=>s.isIntersecting)&&Dc()},{root:null,rootMargin:"600px 0px",threshold:0}),xl.observe(a)),js()}function CE(){return Nn?.querySelector("#exp-baslik")}function Js(i){const e=Nn?.querySelector("#exp-son");e&&(e.innerHTML=i===null?'<div class="spinner"></div>':`<span>${i}</span>`,e.classList.toggle("bos",i!==null))}function qv(i,e){Zs++,cc=i,$l=0,oo=!1,La=!1;const t=Nn?.querySelector("#exp-results");t&&(t.innerHTML="");const n=CE();n&&(n.textContent=e),Js(null),Dc()}function am(){if(!cc||La||oo)return;const i=Nn?.querySelector("#exp-son");if(!i)return;i.getBoundingClientRect().top<window.innerHeight+500&&Dc()}async function Dc(){if(oo||La||!cc)return;const i=Zs;oo=!0;const e=Nn?.querySelector("#exp-results");Js(null);try{const t=await cc($l,Gv);if(i!==Zs)return;if(!t.length){La=!0,Js($l===0?"Sonuç yok.":"Hepsi bu kadar.");return}const n=new Set(Array.from(e?.querySelectorAll(".xp-card")||[]).map(r=>r.dataset.id||""));let a=0;for(const r of t)n.has(`${r.source}:${r.id}`)||(e?.appendChild(DE(r)),a++);$l+=t.length,a===0&&(La=!0),Js(La?"Hepsi bu kadar.":null),setTimeout(()=>{const r=Nn?.querySelector("#exp-son");if(!r||a===0)return;const s=r.getBoundingClientRect();!La&&s.top<window.innerHeight+600&&Dc()},60)}catch(t){if(i!==Zs)return;La=!0,Js(`Yüklenemedi: ${String(t)}`)}finally{i===Zs&&(oo=!1)}}async function PE(i,e){const t=[[`project_type:${pa}`]];Es&&t.push([`categories:${Es}`]);const n=`https://api.modrinth.com/v2/search?query=&index=downloads&facets=${encodeURIComponent(JSON.stringify(t))}&offset=${i}&limit=${e}`,a=await fetch(n,{headers:{Accept:"application/json"}});if(!a.ok)throw new Error(`Modrinth ${a.status}`);return((await a.json()).hits||[]).map(s=>({source:"modrinth",id:String(s.project_id||""),slug:String(s.slug||""),title:String(s.title||""),description:String(s.description||""),author:String(s.author||"Modrinth"),icon_url:String(s.icon_url||""),downloads:Number(s.downloads||0),kind:pa,categories:Array.isArray(s.display_categories)?s.display_categories:[]}))}function js(){Ra="";const i=Nn?.querySelector("#exp-loader")?.value||"";Es=["resourcepack","shader","world","datapack"].includes(pa)?"":i,qv(async(e,t)=>{try{return await PE(e,t)}catch{const n=Math.floor(e/Gv);return(await ne("cmd_repos_popular",{kind:pa,loader:Es,page:n})).slice(0,t)}},"En çok indirilenler")}async function jr(i){if(!Nn?.querySelector("#exp-results"))return;if(!i){js();return}Ra=i;const t=Nn.querySelector("#exp-ver"),n=Nn.querySelector("#exp-loader");Id=t?.value||"";const a=n?.value||"";Es=["resourcepack","shader","world","datapack"].includes(pa)?"":a,qv(async(s,o)=>(await ne("cmd_repos_search",{query:i,kind:pa,versions:Id?[Id]:[],loader:Es,offset:s,limit:o})).results,`Arama: ${i}`)}function DE(i){const e=vi(`
    <button class="xp-card" data-id="${i.source}:${i.id}">
      <span class="xp-card-icon">${i.icon_url?`<img src="${i.icon_url}" loading="lazy" draggable="false" onerror="window.__iconFallback && window.__iconFallback(this,'xp-card-icon ph','puzzle')" />`:G(i.kind==="modpack"?"box":"puzzle")}</span>
      <span class="xp-card-body">
        <span class="xp-card-t">${i.title}</span>
        <span class="xp-card-a">${i.author||(i.source==="modrinth"?"Modrinth":"CurseForge")}</span>
        <span class="xp-card-d">${i.description}</span>
        <span class="xp-card-foot">
          <span class="xp-card-stat">${G("dl")} ${Hl(i.downloads)}</span>
          ${(i.categories||[]).slice(0,3).map(t=>`<span class="xp-tag">${t}</span>`).join("")}
        </span>
      </span>
    </button>
  `);return e.addEventListener("click",()=>IE(i)),e}function Hl(i){return i>=1e9?`${(i/1e9).toFixed(1)}B`:i>=1e6?`${(i/1e6).toFixed(1)}M`:i>=1e3?`${(i/1e3).toFixed(0)}K`:String(i)}function IE(i){dc=i,Wv(i),Nn?.scrollTo({top:0})}async function Wv(i){const e=Nn,t=["resourcepack","shader","world","datapack"].includes(i.kind),n=i.kind==="modpack";if(e.innerHTML=`
    <div class="page-wrap xp-wrap xp-detail">
      <button class="xp-back" id="xp-back">${G("back")} Keşfet'e dön</button>

      <div class="xp-hero anim-fade-up">
        <div class="xp-hero-icon">
          ${i.icon_url?`<img src="${i.icon_url}" draggable="false" onerror="window.__iconFallback && window.__iconFallback(this,'xp-hero-icon ph','puzzle')" />`:G(i.kind==="modpack"?"box":"puzzle")}
        </div>
        <div class="xp-hero-main">
          <div class="xp-hero-kicker">${Yf[i.kind]||i.kind} · ${i.source==="modrinth"?"Modrinth":"CurseForge"}</div>
          <h1 class="xp-hero-title">${i.title}</h1>
          <p class="xp-hero-sub">${i.description}</p>
          <div class="xp-hero-chips" id="xp-hero-chips">
            <span class="xp-tag">${G("dl")} ${Hl(i.downloads)}</span>
            ${i.author?`<span class="xp-tag">${i.author}</span>`:""}
            ${(i.categories||[]).slice(0,5).map(v=>`<span class="xp-tag">${v}</span>`).join("")}
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
            `:te.instances.length?`
              <label class="xp-field"><span>Hedef kurulum</span>
                <select class="input" id="xp-inst">
                  ${te.instances.map(v=>`<option value="${v.id}">${v.name} · ${v.mod_loader} ${v.mc_version}</option>`).join("")}
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
  `,e.querySelector("#xp-back")?.addEventListener("click",()=>{dc=null,Vv()}),e.querySelector("#xp-new-inst")?.addEventListener("click",()=>qe("instances")),(async()=>{let v=null;try{v=await ne("cmd_repos_project",{source:i.source,projectId:i.id,kind:i.kind})}catch{}if(v){const m=e.querySelector("#xp-hero-chips");m&&(m.innerHTML=`
          <span class="xp-tag">${G("dl")} ${Hl(v.downloads||i.downloads)}</span>
          ${v.followers?`<span class="xp-tag">♥ ${Hl(v.followers)}</span>`:""}
          ${v.author?`<span class="xp-tag">${v.author}</span>`:""}
          ${v.license?`<span class="xp-tag">${v.license}</span>`:""}
          ${v.updated?`<span class="xp-tag">${v.updated.slice(0,10)}</span>`:""}
          ${(v.categories||[]).slice(0,5).map(g=>`<span class="xp-tag">${g}</span>`).join("")}
        `);const p=e.querySelector("#xp-body");if(v.body&&v.body.trim()?(p.innerHTML=RE(v.body),p.querySelectorAll("a[data-ext]").forEach(g=>g.addEventListener("click",_=>{_.preventDefault(),Xi(g.href)}))):p.innerHTML='<p class="xp-note">Bu proje için açıklama verisi yok.</p>',v.gallery?.length){const g=e.querySelector("#xp-gallery");e.querySelector("#xp-gallery-panel").hidden=!1,g.innerHTML=v.gallery.map(_=>`<button class="xp-shot" data-u="${_.url}"><img src="${_.url}" loading="lazy" referrerpolicy="no-referrer" alt="${_.title||""}" /></button>`).join(""),g.querySelectorAll(".xp-shot").forEach(_=>_.addEventListener("click",()=>NE(_.dataset.u)))}if(v.links?.length){const g=e.querySelector("#xp-links-panel");g.hidden=!1,e.querySelector("#xp-links").innerHTML=v.links.map(_=>`<button class="xp-link" data-u="${_.url}">${_.label} ${G("globe")}</button>`).join(""),e.querySelectorAll(".xp-link").forEach(_=>_.addEventListener("click",()=>Xi(_.dataset.u)))}}else e.querySelector("#xp-body").innerHTML='<p class="xp-note">Açıklama yüklenemedi — sürüm listesi kullanılabilir.</p>'})(),!n&&!te.instances.length)return;const a=e.querySelector("#xp-inst"),r=e.querySelector("#xp-mc"),s=e.querySelector("#xp-loader"),o=e.querySelector("#xp-vers");let l=[],c=8;const d=()=>n?null:te.instances.find(v=>v.id===a?.value)||te.instances[0],f=()=>{const v=d(),m=v?.mc_version||"",p=v?.mod_loader||"fabric";r&&([...r.options].some(g=>g.value===m)||r.appendChild(new Option(m,m)),r.value=m),s&&([...s.options].some(g=>g.value===p)||s.appendChild(new Option(p,p)),s.value=p),u()};a?.addEventListener("change",f),r?.addEventListener("change",()=>{c=8,u()}),s?.addEventListener("change",()=>{c=8,u()});function u(){const v=d(),m=n?"":r?.value||v?.mc_version||"",p=n||t?"":s?.value||v?.mod_loader||"",g=l.filter(S=>zE(S,m,p,t)),_=l.filter(S=>!g.includes(S)),T=[...g].sort((S,A)=>(A.date||"").localeCompare(S.date||"")),b=T.slice(0,c);if(!l.length){o.innerHTML='<p class="xp-note">Sürüm listesi boş.</p>';return}const k=T.length?[]:[...l].sort((S,A)=>(A.date||"").localeCompare(S.date||"")).slice(0,4);o.innerHTML=`
      ${T.length?b.map(S=>h(S,!0)).join(""):`
        <p class="xp-note">${m}${p?` · ${p}`:""} için uyumlu sürüm yok — en yeni sürümler aşağıda (uyumsuz).</p>
        ${k.map(S=>h(S,!1)).join("")}`}
      ${T.length>b.length?`<button class="btn ghost sm xp-more" id="xp-more">Daha eski sürümler (${T.length-b.length})</button>`:""}
      ${(()=>{const S=_.filter(A=>!k.includes(A));return S.length?`
        <details class="xp-others">
          <summary>Uyumsuz sürümler (${S.length})</summary>
          ${S.slice(0,25).map(A=>h(A,!1)).join("")}
        </details>`:""})()}
      ${v?`<p class="xp-note xp-note-sm">Hedef: <b>${v.name}</b> · ${v.mod_loader} ${v.mc_version}</p>`:""}
    `,o.querySelector("#xp-more")?.addEventListener("click",()=>{c+=12,u()}),o.querySelectorAll(".xp-ver-kur").forEach(S=>{S.addEventListener("click",()=>{const A=l.find(x=>x.id===S.dataset.id);A&&UE(i,A,a?.value||"",S)})})}function h(v,m){const p=v.files[0]?.size||0;return`
      <div class="xp-ver ${m?"":"dim"}">
        <div class="xp-ver-head">
          <b>${v.version_number||v.name}</b>
          ${m?'<span class="xp-ver-ok">uyumlu</span>':""}
        </div>
        ${v.name&&v.name!==v.version_number?`<div class="xp-ver-name">${v.name}</div>`:""}
        <div class="xp-ver-meta">
          <span>${(v.game_versions||[]).slice(0,3).join(", ")}${v.game_versions.length>3?"…":""}</span>
          ${!t&&v.loaders?.length?`<span>${v.loaders.slice(0,2).join(" · ")}</span>`:""}
          <span>${v.date?v.date.slice(0,10):""}</span>
          ${p?`<span>${Vo(p)}</span>`:""}
        </div>
        <button class="btn ${m?"primary":"ghost"} sm xp-ver-kur" data-id="${v.id}">
          ${i.kind==="modpack"?"Kur":t?"İndir":"Kur"}
        </button>
      </div>
    `}try{l=await ne("cmd_repos_get_versions",{source:i.source,projectId:i.id,kind:i.kind,loader:"",gameVersion:""})}catch(v){o.innerHTML=`<p class="xp-note">Sürümler alınamadı: ${String(v)}</p>`;return}if(r){const v=new Set;for(const p of l)for(const g of p.game_versions||[])v.add(g);const m=[...v].sort((p,g)=>g.localeCompare(p,void 0,{numeric:!0}));r.innerHTML=m.map(p=>`<option value="${p}">${p}</option>`).join("")||'<option value="">—</option>'}if(s){const v=new Set;for(const p of l)for(const g of p.loaders||[])v.add(g);const m=["fabric","quilt","forge","neoforge","rift"].filter(p=>v.has(p));s.innerHTML=(m.length?m:[...v]).map(p=>`<option value="${p}">${p}</option>`).join("")||'<option value="">—</option>'}n?u():f()}function zE(i,e,t,n){if(!(!e||(i.game_versions||[]).includes(e)))return!1;if(n||!t)return!0;const r=(i.loaders||[]).map(o=>o.toLowerCase());if(!r.length)return!0;const s=t.toLowerCase();return!!(r.includes(s)||s==="quilt"&&r.includes("fabric")||s==="neoforge"&&r.includes("forge"))}async function UE(i,e,t,n){if(i.kind==="modpack"){await OE(i,e);return}if(!t){X("Önce bir kurulum oluştur","err"),qe("instances");return}const a=n.innerHTML;n.disabled=!0,n.innerHTML='<span class="spinner"></span>';try{["resourcepack","shader","world","datapack"].includes(i.kind)?await ne("cmd_repos_install_content",{instanceId:t,source:i.source,projectId:i.id,versionId:e.id,kind:i.kind}):await ne("cmd_repos_install",{instanceId:t,source:i.source,projectId:i.id,versionId:e.id}),X({resourcepack:"Doku paketleri klasörüne indirildi",shader:"Shader klasörüne indirildi",world:"Dünyalar klasörüne indirildi",datapack:"Datapacks klasörüne indirildi"}[i.kind]||`Kuruldu: ${i.title}`),n.innerHTML=`${G("check")} Kuruldu`,n.classList.remove("primary"),n.classList.add("ghost"),setTimeout(()=>{n.innerHTML=a,n.classList.add("primary"),n.classList.remove("ghost"),n.disabled=!1},2200)}catch(r){X(String(r),"err"),n.disabled=!1,n.innerHTML=a}}function NE(i){if(!/^https?:\/\//i.test(i))return;const{root:e,close:t}=en(`
    <div class="xp-light">
      <img src="${i}" alt="" referrerpolicy="no-referrer" />
    </div>
    <div style="display:flex; justify-content:flex-end; margin-top:10px">
      <button class="btn ghost" id="lb-close">Kapat</button>
    </div>
  `);e.querySelector("#lb-close")?.addEventListener("click",t)}async function OE(i,e){No(i.title);try{const t=await ne("cmd_install_pack_files",{source:i.source,projectId:i.id,versionId:e.id,packName:i.title,icon:null,iconUrl:i.icon_url||null});await tt(()=>Promise.resolve().then(()=>vt),void 0).then(a=>a.refreshState()),Ls();let n=0;try{const a=await ne("cmd_list_mods",{instanceId:t.id});Array.isArray(a)&&(n=a.length)}catch{}await FE(t,n),qe("instances")}catch(t){Cs(String(t))}}async function FE(i,e=0){const t=await ne("cmd_list_java_arg_presets"),{root:n,close:a}=en(`
    <h2>Özel Java argümanı eklensin mi?</h2>
    <div class="sub">Bu paket için FPS odaklı hazır ayarlardan birini seç. Sonra her zaman değiştirebilirsin.</div>
    ${oc(e,i.ram_mb,te.sys?.total_ram_mb||0,"kurulum")}
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
  `);n.querySelectorAll(".preset-row").forEach(r=>{r.addEventListener("click",async()=>{const s=r.dataset.id;s!=="__skip"&&(await ne("cmd_set_instance_java_preset",{id:i.id,presetId:s}),X(`Preset: ${t.find(o=>o.id===s)?.name}`)),a()})})}function BE(i){i.classList.add("news-page"),i.innerHTML=`
    <div class="page-wrap">
    <div class="page-header anim-fade-up">
      <h1>Duyurular</h1>
      <p>YIKIM resmî duyuruları — yalnızca geliştiriciden, imza doğrulamalı.</p>
    </div>
    <div id="yikim-news"><div class="spinner" style="margin:40px auto"></div></div>
    </div>
  `,$E(i)}async function $E(i){const e=i.querySelector("#yikim-news");try{const t=await ne("cmd_list_yikim_news");if(!t.length){e.innerHTML=`
        <div class="card anim-fade-up" style="text-align:center;padding:40px 24px">
          <div style="margin-bottom:10px">${G("news")}</div>
          <h3>Şimdilik duyuru yok</h3>
          <p>Yeni duyurular burada belirecek — yalnızca geliştirici yayınlar.</p>
        </div>`;return}t.sort((n,a)=>(a.pinned?1:0)-(n.pinned?1:0)||a.date.localeCompare(n.date)),e.innerHTML=t.map(n=>`
      <div class="card yikim-announce ${n.pinned?"pinned":""} anim-fade-up" data-link="${n.link||""}">
        ${n.image?`<div class="yikim-img" style="background-image:url('${n.image}')"></div>`:""}
        <div class="yikim-body">
          <div class="row-between">
            <div class="chip orange">${n.pinned?`${G("sparkle")} DUYURU`:"YIKIM"} · ${n.date}</div>
            ${n.pinned?'<span class="chip">Sabit</span>':""}
          </div>
          <h3>${n.title}</h3>
          <p class="yikim-preview">${n.text}</p>
          <details class="yikim-more">
            <summary>Devamını oku</summary>
            <div class="yikim-fulltext">${n.body.split(`

`).map(a=>`<p>${a}</p>`).join("")}</div>
          </details>
          ${n.link?`<button class="btn ghost sm yikim-link">${G("globe")} ${n.link_label||"Bağlantıyı aç"}</button>`:""}
        </div>
      </div>`).join(""),e.querySelectorAll(".yikim-announce").forEach(n=>{const a=n.dataset.link;n.querySelector(".yikim-link")?.addEventListener("click",r=>{r.stopPropagation(),a?.startsWith("https://")&&Xi(a).catch(()=>{})})})}catch{e.innerHTML=""}}const zd=[{id:"modern",name:"Modern",desc:"Üst sekme şeridi, tam sahne, sağ kart, alt durum çubuğu",bg:"#0c0a09",panel:"#17120f",line:"#2c241e",text:"#f4ece2",dim:"#8a7b6c",accent:"#ff5a1f"},{id:"sahne",name:"Sahne",desc:"Imperial uslübü — ortada karakter, piksel yazı, sarı blok butonlar",bg:"#0d0e12",panel:"#17181f",line:"#2a2c3a",text:"#f2edde",dim:"#71695c",accent:"#ffd83d"},{id:"sokum",name:"Söküm Sahası",desc:"Sıcak işlik zemini, kızıl turuncu, keskin köşe",bg:"#14100c",panel:"#201a14",line:"#382c1f",text:"#f2e9dd",dim:"#7d7264",accent:"#ff5a24"},{id:"afis",name:"Afiş Provası",desc:"Baskı kâğıdı, sert mürekkep çizgi, ofset gölge",bg:"#f3ecdd",panel:"#faf6ea",line:"#16130c",text:"#16130c",dim:"#8a7f6b",accent:"#ff4d00"},{id:"sira",name:"Sıra Düzeni",desc:"Navigasyon ÜSTTE — yatay hap şerit, makine yeşili",bg:"#0e1112",panel:"#171b1c",line:"#2a3134",text:"#edf2e6",dim:"#6c7568",accent:"#a3e635"},{id:"rihtim",name:"Rıhtım",desc:"Yüzen cam dock altta ortada — gece lacivert, deniz feneri teal",bg:"#0a0f18",panel:"#111a29",line:"#22304a",text:"#e6effa",dim:"#5e6d85",accent:"#2fd6c3"}],HE={pano:"sahne",standart:"sahne",oda:"sahne",kumas:"afis",perde:"sahne",buz:"rihtim",skala:"sira"};function GE(i){if(i.id==="modern")return`
      <span class="wc-preview wc-modern" style="background:${i.bg}; border-bottom:1px solid ${i.line}">
        <span class="wc-md-nav">
          <i></i><i class="on" style="background:${i.accent}"></i><i></i><i></i><i></i>
        </span>
        <span class="wc-md-stage" style="background:
          radial-gradient(60px 34px at 34% 74%, rgba(255,106,26,0.42), transparent 72%),
          linear-gradient(180deg, #2a0d13 0%, #4a1119 46%, ${i.bg} 100%)"></span>
        <span class="wc-md-char"></span>
        <span class="wc-md-card" style="background:${i.panel}; border-color:${i.line}">
          <i class="bar" style="background:${i.line}"></i>
          <i class="bar kisa" style="background:${i.line}"></i>
          <i class="btn" style="background:${i.accent}"></i>
        </span>
        <span class="wc-md-foot" style="background:${i.panel}; border-top:1px solid ${i.line}"></span>
      </span>`;const e=(t,n,a,r=1)=>`
    <div class="wc-row" style="top:${t}px; left:14px; width:${n}%; background:${i.dim}; opacity:${r}"></div>
    <div class="wc-lamp" style="top:${t-1}px; left:6px; background:${a}"></div>`;return`
    <span class="wc-preview" style="background:${i.bg}; border-bottom:1px solid ${i.line}">
      <span class="wc-bar" style="top:0; background:${i.panel}; border-bottom:1px solid ${i.line}"></span>
      <span class="wc-row" style="top:5px; left:8px; width:26px; height:3px; background:${i.accent}"></span>
      ${e(30,55,i.accent)}
      ${e(46,40,"#3ecf8e")}
      ${e(62,47,"#3ecf8e")}
    </span>`}function Qs(i){let e=te.config;const n={dark:"sahne",neon:"sahne",light:"afis",orange:"sahne",anons:"sahne",...HE}[e.theme]??e.theme,a=(e.tema_ozel||{})[n]||{},r=zd.find(m=>m.id===n)||zd[0],s=(a.accent||"").trim(),o=a.radius||"";try{const m=window.__TAURI__?.app;m?.getVersion&&m.getVersion().then(p=>{const g=i.querySelector("#app-version");g&&(g.textContent=`v${p} "Kıvılcım"`)}).catch(()=>{const p=i.querySelector("#app-version");p&&(p.textContent="v? — geliştirici sürümü")})}catch{}i.innerHTML=`
    <div class="page-wrap">
    <div class="page-header anim-fade-up">
      <h1>Ayarlar</h1>
      <p>Launcher'ı kendine göre şekillendir.</p>
    </div>

    <div class="card set-card anim-fade-up">
      <h3>${G("user")} Hesaplar</h3>
      <p class="set-sub">Birden çok hesap ekle, aralarında tek tıkla geçiş yap.</p>
      <div class="acc-list" id="acc-list">
        ${te.accounts.map(m=>{const p=Sn()?.id===m.id;return`
          <div class="acc-row ${p?"active":""}" data-id="${m.id}">
            <img class="acc-head" src="${Ho(m)}" ${Go(m)} draggable="false" />
            <div class="acc-info">
              <b>${vs(m.id)}${m.name}</b>
              <span>${m.kind==="microsoft"?"Microsoft · premium":"Offline"}</span>
            </div>
            ${p?'<span class="chip">aktif</span>':'<button class="btn ghost sm acc-use">Seç</button>'}
            <button class="btn danger sm acc-del" title="Kaldır">${G("trash")}</button>
          </div>`}).join("")||'<p class="set-sub">Henüz hesap eklenmemiş.</p>'}
      </div>
      <div style="display:flex; gap:10px; margin-top:12px">
        <button class="btn primary" id="acc-add-ms">${G("globe")} Microsoft ile Giriş</button>
        <button class="btn ghost" id="acc-add-off">${G("user")} Çevrimdışı Ekle</button>
      </div>
    </div>

    <div id="guvenlik-karti" class="anim-fade-up"></div>

    <div class="card set-card anim-fade-up">
      <h3>${G("image")} Görsel Dünya</h3>
      <p class="set-sub">Arayüzün dünyasını seç — hepsi aynı düzen, farklı karakter. Anında uygulanır.</p>
      <div class="world-grid">
        ${zd.map(m=>`
          <button class="world-card ${n===m.id?"sel":""}" data-t="${m.id}">
            ${GE(m)}
            <span class="wc-body">
              <b>${m.name}</b>
              <span>${m.desc}</span>
            </span>
            ${n===m.id?'<span class="sel-tag">SEÇİLİ</span>':""}
            ${m.id==="modern"?'<span class="yeni-tag">YENİ</span>':""}
          </button>`).join("")}
      </div>
      <div class="row-between" style="margin-top:14px">
        <div>
          <div style="font-size:12.5px; font-weight:600">Skin Merkezi</div>
          <div style="font-size:11.5px; color:var(--text-dim)">Skinlerini düzenle, giy; Mojang pelerinlerini tak.</div>
        </div>
        <button class="btn ghost sm" id="skins-alani">${G("shirt")} Aç</button>
      </div>
      <div class="tema-ozel" id="tema-ozel">
        <div class="tema-ozel-bas">
          ${G("picker")}
          <div>
            <b>Bu dünyayı özelleştir — ${r.name}</b>
            <small>Sadece bu tema için geçerli. Renk ve köşe değişir, düzen aynı kalır.</small>
          </div>
          <button class="btn ghost sm" id="tema-sifirla" title="Bu dünyanın tüm özelleştirmelerini sil">${G("undo")} Sıfırla</button>
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
          <button class="btn sm to-ornek" id="tema-ornek" type="button">Örnek buton</button>
        </div>
      </div>

      <div class="sahne-art-secim" id="sahne-art-secim">
        <div class="sas-bas">
          <b>Sahne arka planı</b>
          <span>Karakterin arkasındaki piksel manzara. Bir sahneye basıp seçersen sabit kalır; "Rastgele"da her menü açılışında başka bir sahne gelir.</span>
        </div>
        <div class="sas-izgara" id="sas-izgara"></div>
      </div>
    </div>

    <div class="card set-card anim-fade-up">
      <h3>${G("sparkles")} Ambiens &amp; İmleç</h3>
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
      <h3>${G("sparkle")} Ana Menü Animasyonları</h3>
      <p class="set-sub">Karakter vitrininde rastgele oynayan hareketler. Paketle gelenler herkeste hazır; kendin de ekleyebilirsin — eklediklerin yalnız sende görünür.</p>
      ${wa("menu-anim","Animasyonlar oynasın",e.menu_animasyon!==!1)}
      ${wa("menu-anim-bizim","Yalnızca kendi kurulumlarımda",e.menu_animasyon_sadece_bizim!==!1)}
      <p style="font-size:11px; color:var(--text-faint); margin-top:-4px">Dışarıdan eklediğin mod paketlerinde (kendi menüleri var) emoteler varsayılan olarak kapalıdır.</p>
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
        <button class="btn ghost" id="anim-ekle">${G("plus")} Dışarıdan ekle</button>
        <button class="btn ghost" id="anim-yenile">${G("undo")} Listeyi yenile</button>
      </div>
    </div>

    <div class="card set-card anim-fade-up">
      <h3>${G("mug")} Java</h3>
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
      <h3>${G("gear")} Genel</h3>
      ${wa("keep-open","Oyun açılınca launcher açık kalsın",e.keep_launcher_open)}
      ${wa("hide-on-launch","Oyun sırasında launcher'ı gizle (RAM tasarrufu)",e.hide_on_launch)}
      ${wa("show-news","Ana sayfada haberleri göster",e.show_news)}
      ${wa("stats-enabled","İstatistik toplansın (tamamen yerel)",e.stats_enabled)}
      ${wa("use-java25","Microsoft OpenJDK 25 kullan (mod paketleri için optimize)",e.use_java25!==!1)}
      ${wa("discord-rpc","Discord'da 'YIKIMLient ile oynuyor' göster (internet kullanmaz)",e.discord_rpc!==!1)}
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
      <h3>${G("info")} Hakkında</h3>
      <div class="about-row"><span>YIKIMLient</span><b id="app-version">yükleniyor…</b></div>
      <div class="about-row"><span>Tür</span><b>Ultra-hafif Minecraft launcher</b></div>
      <div class="about-row"><span>Motor</span><b>Tauri 2 + Rust (Electron'suz)</b></div>
      <div style="display:flex; gap:10px; margin-top:14px; flex-wrap:wrap">
        <button class="btn ghost" id="check-upd">Güncellemeleri Kontrol Et</button>
        <button class="btn ghost" id="upd-page">${G("dl")} İndirme Sayfası</button>
        <button class="btn ghost" id="open-dir">${G("folder")} Veri Klasörü</button>
      </div>
      <p style="margin-top:12px; font-size:11.5px; color:var(--text-faint)">
        YIKIMLient, Mojang veya Microsoft ile bağlantılı değildir. Minecraft, Mojang Synergies AB'nin tescilli markasıdır.
      </p>
    </div>
    </div>
  `,i.querySelector("#acc-add-ms")?.addEventListener("click",()=>pn()),i.querySelector("#acc-add-off")?.addEventListener("click",()=>pn());const l=i.querySelector("#guvenlik-karti");l&&gr(l),i.querySelectorAll(".acc-row").forEach(m=>{const p=m.dataset.id;m.querySelector(".acc-use")?.addEventListener("click",async g=>{g.stopPropagation(),await ne("cmd_select_account",{accountId:p}),await Jt(),Qs(i),X("Hesap değiştirildi")}),m.querySelector(".acc-del")?.addEventListener("click",async g=>{g.stopPropagation(),confirm("Bu hesap kaldırılsın mı?")&&(await ne("cmd_remove_account",{accountId:p}),await Jt(),Qs(i),X("Hesap kaldırıldı"))})}),i.querySelectorAll(".world-card").forEach(m=>m.addEventListener("click",async()=>{te.config.theme=m.dataset.t,Si(),await _n(),Qs(i)})),i.querySelector("#skins-alani")?.addEventListener("click",()=>qe("skins"));const c=()=>te.config.tema_ozel||={},d=async(m,p)=>{const g=c()[n]||={};g[m]=p,!g.accent&&!g.radius&&delete c()[n],Si(),await _n()};i.querySelectorAll(".tema-renk").forEach(m=>m.addEventListener("click",async()=>{const p=m.dataset.renk||"";i.querySelectorAll(".tema-renk").forEach(g=>g.classList.toggle("aktif",g===m)),await d("accent",p),X(p?"Vurgu rengi güncellendi":"Dünya rengine dönüldü")}));const f=i.querySelector("#tema-accent-pick");f?.addEventListener("input",()=>{te.config.tema_ozel||={},(te.config.tema_ozel[n]||={}).accent=f.value,Si()}),f?.addEventListener("change",async()=>{await _n(),X("Vurgu rengi kaydedildi")}),i.querySelectorAll("#tema-radius .seg-btn").forEach(m=>m.addEventListener("click",async()=>{i.querySelectorAll("#tema-radius .seg-btn").forEach(p=>p.classList.toggle("aktif",p===m)),await d("radius",m.dataset.r||"")})),i.querySelector("#tema-sifirla")?.addEventListener("click",async()=>{delete c()[n],Si(),await _n(),Qs(i),X("Bu dünyanın özelleştirmesi sıfırlandı")});const u=i.querySelector("#sas-izgara");if(u){const m=e.sahne_arka_elle===!1?"rastgele":String(e.sahne_arka||"kiraz");u.innerHTML=KM.map(g=>`
      <button class="sas-kart${g.id===m?" sel":""}" data-art="${g.id}">
        <span class="sas-tuval"><canvas data-ciz="${g.id}"></canvas></span>
        <b>${g.ad}</b>
        <small>${g.etiket}</small>
      </button>`).join("");const p=()=>{const g=u.querySelector('.sas-kart[data-art="ozel"] canvas');if(!g)return;const _=g.getContext("2d");if(!_)return;g.width=128,g.height=96,_.fillStyle="#1a1210",_.fillRect(0,0,128,96);const T=te.config.sahne_arka_ozel||e.sahne_arka_ozel;if(!T){_.fillStyle="#6b5a50",_.fillRect(0,38,128,2),_.fillRect(63,30,2,20);return}const b=new Image;b.onload=()=>{const k=Math.max(128/b.width,96/b.height),S=b.width*k,A=b.height*k;_.drawImage(b,(128-S)/2,(96-A)/2,S,A)},b.src=ut(String(T))};u.querySelectorAll("canvas[data-ciz]").forEach(g=>{g.dataset.ciz!=="ozel"&&Bf(g,g.dataset.ciz||"kiraz")}),p(),u.querySelectorAll(".sas-kart").forEach(g=>g.addEventListener("click",async _=>{const T=g.dataset.art;if(T==="ozel"){_.preventDefault();let b=null;try{b=await ne("cmd_pick_scene_image")}catch{return}const k=String(b.sahne_arka_kaynak||"");if(!k){X("Fotoğraf okunamadı","err");return}const{kirpPenceresiAc:S}=await tt(async()=>{const{kirpPenceresiAc:R}=await import("./fotograf-kirp-4JD0xhi9.js");return{kirpPenceresiAc:R}},[]),A=await S(ut(k),R=>X(R));if(!A){await Jt();return}let x=null;try{x=await ne("cmd_crop_scene_image",{x:A.x,y:A.y,w:A.w,h:A.h})}catch{X("Kırpma kaydedilemedi","err");return}const w=x&&x.sahne_arka_ozel||null;te.config.sahne_arka="ozel",te.config.sahne_arka_elle=!0,te.config.sahne_arka_ozel=w,e={...e,sahne_arka:"ozel",sahne_arka_elle:!0,sahne_arka_ozel:w},p(),u.querySelectorAll(".sas-kart").forEach(R=>R.classList.toggle("sel",R===g)),await _n(),X("Sahne fotoğrafı hazır");return}if(T==="rastgele"){te.config.sahne_arka_elle=!1;const b=Sv(String(e.sahne_arka||""));te.config.sahne_arka=b,e={...e,sahne_arka_elle:!1,sahne_arka:b},u.querySelectorAll(".sas-kart").forEach(k=>k.classList.toggle("sel",k===g)),await _n(),X("Sahne rastgele seçilecek");return}te.config.sahne_arka=T,te.config.sahne_arka_elle=!0,e={...e,sahne_arka:T,sahne_arka_elle:!0},u.querySelectorAll(".sas-kart").forEach(b=>b.classList.toggle("sel",b===g)),await _n(),X("Sahne arka planı değişti")}))}i.querySelector("#fx-particles")?.addEventListener("change",async m=>{te.config.fx_particles=m.target.value,Si(),await _n()}),i.querySelector("#cursor-style")?.addEventListener("change",async m=>{te.config.cursor_style=m.target.value,Si(),await _n()}),i.querySelector("#pick-java")?.addEventListener("click",async()=>{const m=await ne("cmd_pick_java");m&&(te.config.java_dir=m,await _n(),i.querySelector("#java-path").textContent=m,X("Java konumu kaydedildi"))}),i.querySelector("#clear-java")?.addEventListener("click",async()=>{te.config.java_dir=null,await _n(),i.querySelector("#java-path").textContent="otomatik"}),Ta(i,"keep-open","keep_launcher_open"),Ta(i,"hide-on-launch","hide_on_launch"),Ta(i,"show-news","show_news"),Ta(i,"stats-enabled","stats_enabled"),Ta(i,"use-java25","use_java25"),Ta(i,"discord-rpc","discord_rpc"),Ta(i,"menu-anim","menu_animasyon"),Ta(i,"menu-anim-bizim","menu_animasyon_sadece_bizim"),i.querySelector("#menu-anim-hiz")?.addEventListener("change",async m=>{te.config.menu_animasyon_hiz=m.target.value,await _n()});const h=()=>Kv(i);i.querySelector("#anim-yenile")?.addEventListener("click",h),i.querySelector("#anim-ekle")?.addEventListener("click",async()=>{try{const m=await ne("cmd_pick_emote");m?.length&&(X(`${m.length} animasyon eklendi`),h())}catch(m){X(`Animasyon eklenemedi: ${m}`,"err")}}),h();const v=i.querySelector("#dlc-range");v.addEventListener("input",()=>i.querySelector("#dlc-val").textContent=v.value),v.addEventListener("change",async()=>{te.config.download_concurrency=parseInt(v.value),await _n()}),i.querySelector("#check-upd")?.addEventListener("click",async()=>{X("Güncelleme kontrol ediliyor…");try{const p=await(await tt(()=>import("./index-DSkUPpwd.js"),[])).check();if(p?.available){let g={};try{g=await ne("cmd_guncelleme_bilgi")}catch{}if(g.os==="linux"&&(g.bundle==="deb"||g.bundle==="rpm")){const k=g.bundle==="rpm",S=p?.rawJson??{},A=S?.platforms?.[k?"linux-x86_64-rpm":"linux-x86_64-deb"]??S?.platforms?.["linux-x86_64-deb"]??S?.platforms?.["linux-x86_64"],x=String(A?.url||`https://github.com/YKSAMI1/yikimlient/releases/tag/v${p.version}`),{root:w,close:R}=en(`
            <h2>Güncelleme Var</h2>
            <div class="sub">YIKIMLient <b>v${p.version}</b> hazır.</div>
            <p class="gv-mini" style="margin:10px 0; color:var(--text-dim); line-height:1.6">
              Kurulumun <b>${k?".rpm":".deb"}</b> paketiyle yapıldı. Paket yöneticisi yönetici
              izni istediği için launcher kendini sessizce güncelleyemiyor. Yeni paketi indirip
              dosyayı çift tıkla — ayarların ve hesapların korunur.
            </p>
            <div style="display:flex; gap:10px; justify-content:flex-end; margin-top:6px">
              <button class="btn ghost" id="upd-later">Sonra</button>
              <button class="btn primary" id="upd-indir">Paketi indir (${k?".rpm":".deb"})</button>
            </div>
          `);w.querySelector("#upd-later")?.addEventListener("click",()=>R()),w.querySelector("#upd-indir")?.addEventListener("click",async()=>{try{await Xi(x),R()}catch(L){X(`Bağlantı açılamadı: ${L}`,"err")}});return}const{root:T,close:b}=en(`
          <h2>Güncelleme Var</h2>
          <div class="sub">YIKIMLient <b>v${p.version}</b> hazır. Değişiklik notları:</div>
          <div style="margin:12px 0; max-height:160px; overflow-y:auto; user-select:text; color:var(--text-dim); font-size:12.5px; line-height:1.55">
            ${(p.body||"Değişiklik notu yok.").split(`
`).map(k=>`<div>${k}</div>`).join("")}
          </div>
          <div style="display:flex; gap:10px; justify-content:flex-end; margin-top:6px">
            <button class="btn ghost" id="upd-later">Sonra</button>
            <button class="btn primary" id="upd-go">İndir ve Kur</button>
          </div>
        `);T.querySelector("#upd-later")?.addEventListener("click",()=>b()),T.querySelector("#upd-go")?.addEventListener("click",async()=>{const k=T.querySelector("#upd-go");k.disabled=!0,k.textContent="İndiriliyor…";try{await p.downloadAndInstall(),X("Güncelleme kuruldu — launcher yeniden başlıyor"),setTimeout(()=>{try{window.__TAURI__.process.exit(0)}catch{location.reload()}},900)}catch(S){k.disabled=!1,k.textContent="İndir ve Kur",X(`Güncelleme başarısız: ${S}`,"err")}})}else X("YIKIMLient güncel ✓")}catch(m){await KE(m)}}),i.querySelector("#upd-page")?.addEventListener("click",()=>{Xi(uc).catch(()=>X(`Tarayıcı açılamadı — adresi elle aç: ${uc}`,"err"))}),i.querySelector("#open-dir")?.addEventListener("click",async()=>{const m=await ne("cmd_get_app_dir");b0(m).catch(()=>{})}),qE(i,e)}function VE(i){const e=Sn();if(!e||e.kind!=="microsoft")return!1;const t=e.name.toLowerCase(),n=a=>(Array.isArray(a)?a:[]).some(r=>String(r).toLowerCase()===t);return n(i?.atolye_admin)||n(i?.atolye_izinli)}const Ud=["#ffffff","#c9ced8","#5b6472","#12151c","#ff5a24","#ffd83d","#a3e635","#2fd6c3","#5b9dff","#c084fc","#ff4d8d","#8b3a1e"];function qE(i,e){const t=i.querySelector("#rozet-alani");if(t){if(VE(e)){rm(i,e);return}t.innerHTML="",ne("cmd_rozet_yetki").then(n=>{n?.izinli&&rm(i,e)}).catch(()=>{})}}function rm(i,e){const t=i.querySelector("#rozet-alani");if(!t)return;const n=Sn(),a=!!n&&(e?.atolye_admin||[]).some(R=>String(R).toLowerCase()===n.name.toLowerCase());let r=new Array(64).fill("");const s=R=>/^#[0-9a-fA-F]{6}$/.test(String(R||""));let o=s(e.rozet_renk)?String(e.rozet_renk):"#ffd83d",l=(Array.isArray(e.rozet_renkler)?e.rozet_renkler:[]).filter(s).slice(0,24),c=!1;const d=[];let f=[...e.atolye_izinli||[]];t.innerHTML=`
    <div class="card set-card anim-fade-up">
      <h3>${G("brush")} Rozet — İsim Logosu <span class="chip">yalnız sahip</span></h3>
      <p class="set-sub">
        Bu logoyu yalnız sen çizebilirsin. Çizim <b>tüm kurulumlarına</b> yazılır ve oyun içinde
        adının başına basılır — hangi sunucu olursa olsun, TAB ve F5 dahil. İzin verdiğin
        oyuncular da kendi logolarını çizebilir.
      </p>

      <div class="rozet-duzen">
        <div class="rozet-sol">
          <div class="rozet-izgara" id="rozet-izgara"></div>
          <div class="rozet-palet">
            <button class="rozet-renk${c?"":" aktif"}" data-c="" title="Boya">
              ${G("brush")}
            </button>
            <div class="rozet-renkler" id="rozet-renkler"></div>
            <label class="rozet-renk ozel-renk" title="İstediğin rengi seç (sınırsız)">
              <input type="color" id="rozet-renk-sec" value="${o}" />
              <span class="ozel-arti">+</span>
            </label>
            <button class="rozet-renk${c?" aktif":""}" id="rozet-silgi" title="Silgi">
              ${G("trash")}
            </button>
          </div>
          <div class="rozet-hex-satir">
            <span class="rozet-hex-onizleme" id="rozet-hex-onizleme" style="--c:${o}"></span>
            <input class="input rozet-hex" id="rozet-hex" maxlength="7" placeholder="#rrggbb" value="${o}" />
            <button class="btn ghost sm" id="rozet-renk-kaydet">Rengi kaydet</button>
          </div>
          <div class="rozet-araclar">
            <button class="btn ghost sm" id="rozet-geri">${G("undo")} Geri</button>
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
              <b class="ro-isim">${Sn()?.name||"oyuncu"}</b>
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
          <button class="btn ghost sm" id="rozet-ekle">${G("plus")} Ekle</button>
        </div>
        <div class="rozet-cipler" id="rozet-cipler"></div>
      </div>`:""}
    </div>`;const u=t.querySelector("#rozet-izgara"),h=t.querySelector("#rozet-onizleme"),v=t.querySelector("#rozet-cipler"),m=()=>{u.innerHTML=r.map((R,L)=>`<button class="rozet-hucre${R?" dolu":""}" data-i="${L}" style="--c:${R||"transparent"}"></button>`).join(""),h.innerHTML=r.map(R=>`<i style="--c:${R||"transparent"}"></i>`).join("")},p=R=>{const L=c?"":o;r[R]!==L&&(r[R]=L,m())};u.addEventListener("click",R=>{const L=R.target.closest(".rozet-hucre");L&&(d.push([...r]),d.length>40&&d.shift(),p(Number(L.dataset.i)))});const g=t.querySelector("#rozet-renkler"),_=t.querySelector("#rozet-hex"),T=t.querySelector("#rozet-hex-onizleme"),b=t.querySelector("#rozet-renk-sec"),k=()=>{const R=[...Ud,...l];g.innerHTML=R.map((L,U)=>`<button class="rozet-renk${L.toLowerCase()===o.toLowerCase()?" secili":""}" data-c="${L}" style="--c:${L}" title="${L}" data-ozel="${U>=Ud.length?1:0}"></button>`).join(""),g.querySelectorAll(".rozet-renk").forEach(L=>L.addEventListener("click",()=>{const U=L.dataset.c||"";c=!1,U&&S(U)}))},S=(R,L=!0)=>{o=R.toLowerCase(),c=!1,t.querySelector("#rozet-silgi")?.classList.remove("aktif"),_.value=o,T.style.setProperty("--c",o),b.value=o,k(),L&&(te.config.rozet_renk=o,_n())},A=R=>{if(!s(R))return X("Geçersiz renk — #rrggbb biçiminde yaz","err"),!1;const L=R.toLowerCase();return[...Ud,...l].some(U=>U.toLowerCase()===L)||(l=[...l,L].slice(-24),te.config.rozet_renkler=[...l]),S(L),!0};b?.addEventListener("input",()=>{S(b.value,!1)}),b?.addEventListener("change",()=>A(b.value)),t.querySelector("#rozet-renk-kaydet")?.addEventListener("click",()=>{const R=_.value.trim(),L=R.startsWith("#")?R:`#${R}`;A(L)&&X(`Renk paletine eklendi: ${L.toLowerCase()}`)}),_?.addEventListener("keydown",R=>{R.key==="Enter"&&t.querySelector("#rozet-renk-kaydet")?.dispatchEvent(new Event("click"))}),_?.addEventListener("input",()=>{const R=_.value.trim(),L=R.startsWith("#")?R:`#${R}`;T.style.setProperty("--c",s(L)?L:"transparent")}),t.querySelector("#rozet-silgi")?.addEventListener("click",()=>{c=!0,t.querySelectorAll(".rozet-renk").forEach(R=>R.classList.remove("aktif","secili")),t.querySelector("#rozet-silgi")?.classList.add("aktif")}),t.querySelector("#rozet-geri")?.addEventListener("click",()=>{const R=d.pop();R&&(r=R,m())}),t.querySelector("#rozet-temizle")?.addEventListener("click",()=>{d.push([...r]),r=new Array(64).fill(""),m()}),t.querySelector("#rozet-stok")?.addEventListener("click",()=>{d.push([...r]),r=WE(),m()}),t.querySelector("#rozet-kaydet")?.addEventListener("click",async()=>{const R=t.querySelector("#rozet-kaydet");R.disabled=!0,R.textContent="Kaydediliyor…";try{const L=await ne("cmd_rozet_ciz",{pikseller:r});X(L?.yuklendi?`Rozet kaydedildi — ${L.kurulum} yere yazıldı ve diğer oyunculara yayınlandı`:`Rozet kaydedildi — ${L.kurulum} yere yazıldı (sunucuya ulaşılamadı: ${L?.hata||"ağ"})`)}catch(L){X(`Rozet kaydedilemedi: ${L}`,"err")}finally{R.disabled=!1,R.textContent="Kaydet ve yayınla"}}),t.querySelector("#rozet-sil")?.addEventListener("click",async()=>{confirm("Rozet kaldırılsın mı? İsimlerin başında standart Y logosu görünür.")&&(await ne("cmd_rozet_sil"),r=new Array(64).fill(""),m(),X("Rozet kaldırıldı"))});const x=()=>{v&&(v.innerHTML=f.length?f.map((R,L)=>`<span class="rozet-cip">${R}<button data-i="${L}" title="Kaldır">×</button></span>`).join(""):'<span class="set-sub" style="margin:0; font-size:11.5px">Henüz kimse eklenmedi.</span>',v.querySelectorAll("button").forEach(R=>R.addEventListener("click",()=>{f.splice(Number(R.dataset.i),1),w()})))},w=async()=>{te.config.atolye_izinli=[...f],await _n(),x();try{(await ne("cmd_rozet_izinler",{isimler:f}))?.yuklendi||X("Liste sunucuya gönderilemedi (yerel kaydedildi)","err")}catch{}};t.querySelector("#rozet-ekle")?.addEventListener("click",()=>{const R=t.querySelector("#rozet-isim"),L=R.value.trim();if(L){if(f.some(U=>U.toLowerCase()===L.toLowerCase())){X("Bu isim zaten listede");return}f.push(L),R.value="",w(),X(`${L} eklendi`)}}),t.querySelector("#rozet-isim")?.addEventListener("keydown",R=>{R.key==="Enter"&&t.querySelector("#rozet-ekle")?.click()}),m(),k(),x(),ne("cmd_rozet_oku").then(R=>{const L=R?.pikseller;Array.isArray(L)&&L.length===64&&(r=L,m())}).catch(()=>{})}function WE(){const i="#ffffff",e="#ff5a24";return[[i,"","","","",e,"",""],[i,"","","",e,e,"",""],["",i,"","","",e,"",""],["",i,"","",e,"","",""],["","",i,"",e,"","",""],["","",i,"",e,"","",""],["","",i,"","","","",""],["","",i,"","","","",""]].flat()}const uc="https://github.com/YKSAMI1/yikimlient/releases/latest";function sm(i){return String(i??"").trim().replace(/^v/i,"")}async function KE(i){let e="",t="";try{const r=await ne("cmd_check_updates"),s=sm(r?.current),o=sm(r?.latest);o&&o!==s&&(e=o)}catch{}try{const r=await ne("cmd_upd_teshis"),s=Array.isArray(r?.platformlar)&&r.platformlar.length?r.platformlar.join(", "):"yok",o=[`HTTP ${r?.durum||"?"}`,`manifest ${r?.surum||"?"}`,`platform: ${s}`];r?.hata&&o.push(String(r.hata)),t=o.join(" · ")}catch{}const{root:n,close:a}=en(`
    <h2>Güncelleme kontrolü başarısız</h2>
    <div class="sub">Otomatik güncelleyici bu sefer çalışmadı. Launcher'ı elle de güncelleyebilirsin — kurulum dosyası GitHub'daki sürüm sayfasında.</div>
    ${e?`<div style="margin-top:10px; font-size:13px; color:var(--text)">GitHub'da yeni sürüm duruyor: <b>v${e}</b></div>`:""}
    <div style="margin-top:10px; font-size:11.5px; line-height:1.5; color:var(--text-faint); user-select:text">${t?`Teşhis: ${t}`:`Hata: ${String(i??"bilinmiyor")}`}</div>
    <div style="display:flex; gap:10px; justify-content:flex-end; margin-top:14px">
      <button class="btn ghost" id="upd-kapat">Kapat</button>
      <button class="btn primary" id="upd-sayfa">${G("dl")} İndirme Sayfası</button>
    </div>
  `);n.querySelector("#upd-kapat")?.addEventListener("click",()=>a()),n.querySelector("#upd-sayfa")?.addEventListener("click",()=>{Xi(uc).catch(()=>X(`Tarayıcı açılamadı — adresi elle aç: ${uc}`,"err"))})}async function Kv(i){const e=i.querySelector("#anim-liste");if(e)try{const t=await ne("cmd_list_emotes");if(!t.length){e.innerHTML='<p class="set-sub" style="margin:10px 0 0">Henüz animasyon yok.</p>';return}e.innerHTML="";for(const n of t){const a=document.createElement("div");a.className="anim-satir",a.innerHTML=`
        <span class="anim-ad">${n.baslik||n.adi}</span>
        ${n.yerlesik?'<span class="chip gray">paket</span>':'<span class="chip">kendi</span>'}
        ${n.yerlesik?"":`<button class="btn danger sm anim-sil" title="Kaldır">${G("trash")}</button>`}`,a.querySelector(".anim-sil")?.addEventListener("click",async()=>{confirm(`"${n.baslik}" kaldırılsın mı?`)&&(await ne("cmd_delete_emote",{adi:n.adi}),X("Animasyon kaldırıldı"),Kv(i))}),e.appendChild(a)}}catch(t){e.innerHTML=`<p class="set-sub" style="margin:10px 0 0">Liste yüklenemedi: ${String(t)}</p>`}}function wa(i,e,t){return`
    <div class="row-between" style="margin-top:8px">
      <span>${e}</span>
      <div class="switch ${t?"on":""}" data-tid="${i}"></div>
    </div>`}function Ta(i,e,t){i.querySelector(`[data-tid="${e}"]`)?.addEventListener("click",async n=>{const a=n.currentTarget;a.classList.toggle("on"),te.config[t]=a.classList.contains("on"),await _n()})}async function _n(){await ne("cmd_save_settings",{config:te.config}),await Jt(),Si()}const Rn=64,dr=64,XE=40;class fc{w=Rn;h=dr;veri;gecmis=[];gelecek=[];constructor(e){this.veri=e?new Uint8ClampedArray(e):new Uint8ClampedArray(Rn*dr*4)}static bos(){return new fc}static rgba(e,t=0){return[e[t],e[t+1],e[t+2],e[t+3]]}kopya(){return new fc(this.veri)}piksel(e,t){if(e<0||t<0||e>=Rn||t>=dr)return[0,0,0,0];const n=(t*Rn+e)*4;return[this.veri[n],this.veri[n+1],this.veri[n+2],this.veri[n+3]]}boya(e,t,n,a=1){const r=Math.max(1,Math.min(8,Math.floor(a))),s=e-Math.floor((r-1)/2),o=t-Math.floor((r-1)/2);for(let l=0;l<r;l++)for(let c=0;c<r;c++){const d=s+c,f=o+l;if(d<0||f<0||d>=Rn||f>=dr)continue;const u=(f*Rn+d)*4;this.veri[u]=n[0],this.veri[u+1]=n[1],this.veri[u+2]=n[2],this.veri[u+3]=n[3]}}cizgi(e,t,n,a,r,s=1){let o=Math.round(e),l=Math.round(t);const c=Math.round(n),d=Math.round(a),f=Math.abs(c-o),u=-Math.abs(d-l),h=o<c?1:-1,v=l<d?1:-1;let m=f+u;for(;this.boya(o,l,r,s),!(o===c&&l===d);){const p=2*m;p>=u&&(m+=u,o+=h),p<=f&&(m+=f,l+=v)}}kova(e,t,n){if(e<0||t<0||e>=Rn||t>=dr)return;const a=this.piksel(e,t);if(om(a,n))return;const r=[t*Rn+e],s=new Uint8Array(Rn*dr);for(;r.length;){const o=r.pop();if(s[o])continue;s[o]=1;const l=o%Rn,c=Math.floor(o/Rn);om(this.piksel(l,c),a)&&(this.boya(l,c,n),l>0&&r.push(o-1),l<Rn-1&&r.push(o+1),c>0&&r.push(o-Rn),c<dr-1&&r.push(o+Rn))}}damla(e,t){return this.piksel(e,t)}katmanBasla(){this.gecmis.push(new Uint8ClampedArray(this.veri)),this.gecmis.length>XE&&this.gecmis.shift(),this.gelecek.length=0}geriAl(){const e=this.gecmis.pop();return e?(this.gelecek.push(new Uint8ClampedArray(this.veri)),this.veri=e,!0):!1}ileriAl(){const e=this.gelecek.pop();return e?(this.gecmis.push(new Uint8ClampedArray(this.veri)),this.veri=e,!0):!1}geriVar(){return this.gecmis.length>0}ileriVar(){return this.gelecek.length>0}}function om(i,e){return i[0]===e[0]&&i[1]===e[1]&&i[2]===e[2]&&i[3]===e[3]}function YE(i){const e=new Uint8ClampedArray(16384);for(let t=0;t<32;t++){const n=t*64*4;e.set(i.subarray(n,n+64*4),n)}return e}function li(i,e,t,n,a){return[{x:i+a,y:e,w:t,h:a},{x:i+a+t,y:e,w:t,h:a},{x:i,y:e+a,w:a,h:n},{x:i+a,y:e+a,w:t,h:n},{x:i+a+t,y:e+a,w:a,h:n},{x:i+a+t+a,y:e+a,w:t,h:n}]}const lm=[{id:"kafa",ad:"Kafa",x:8,y:8,w:8,h:8,katman:"taban",dilimler:li(0,0,8,8,8)},{id:"govde",ad:"Gövde",x:20,y:20,w:8,h:12,katman:"taban",dilimler:li(16,16,8,12,4)},{id:"sag-kol",ad:"Sağ Kol",x:44,y:20,w:4,h:12,katman:"taban",dilimler:li(40,16,4,12,4)},{id:"sol-kol",ad:"Sol Kol",x:36,y:52,w:4,h:12,katman:"taban",dilimler:li(32,48,4,12,4)},{id:"sag-bacak",ad:"Sağ Bacak",x:4,y:20,w:4,h:12,katman:"taban",dilimler:li(0,16,4,12,4)},{id:"sol-bacak",ad:"Sol Bacak",x:20,y:52,w:4,h:12,katman:"taban",dilimler:li(16,48,4,12,4)},{id:"sapka",ad:"Şapka",x:40,y:8,w:8,h:8,katman:"ust",dilimler:li(32,0,8,8,8)},{id:"ceket",ad:"Ceket",x:20,y:36,w:8,h:12,katman:"ust",dilimler:li(16,32,8,12,4)},{id:"sag-kolluk",ad:"Sağ Kolluk",x:44,y:36,w:4,h:12,katman:"ust",dilimler:li(40,32,4,12,4)},{id:"sol-kolluk",ad:"Sol Kolluk",x:52,y:52,w:4,h:12,katman:"ust",dilimler:li(48,48,4,12,4)},{id:"sag-pantolon",ad:"Sağ Pantolon",x:4,y:36,w:4,h:12,katman:"ust",dilimler:li(0,32,4,12,4)},{id:"sol-pantolon",ad:"Sol Pantolon",x:4,y:52,w:4,h:12,katman:"ust",dilimler:li(0,48,4,12,4)}],Nd={x:1,y:1,w:10,h:16},ZE={x:12,y:1,w:10,h:16},Xv=20,JE=36,jE=2,QE=4,ew=1;function tw(i){const e=i?3:4,t=ew+4,n=i?t-3:t-4,a=t+8;return[{ad:"sag-bacak",x:t,y:20,on:{x:4,y:20,w:4,h:12},yan:{x:8,y:20,w:4,h:12},yanGorunur:!1,ust:{x:4,y:36,w:4,h:12},ustYan:{x:8,y:36,w:4,h:12}},{ad:"sol-bacak",x:t+4,y:20,on:{x:20,y:52,w:4,h:12},yan:{x:24,y:52,w:4,h:12},yanGorunur:!0,ust:{x:4,y:52,w:4,h:12},ustYan:{x:8,y:52,w:4,h:12}},{ad:"govde",x:t,y:8,on:{x:20,y:20,w:8,h:12},yan:{x:28,y:20,w:4,h:12},yanGorunur:!1,ust:{x:20,y:36,w:8,h:12},ustYan:{x:28,y:36,w:4,h:12}},{ad:"sag-kol",x:n,y:8,on:{x:44,y:20,w:e,h:12},yan:{x:44+e,y:20,w:e,h:12},yanGorunur:!1,ust:{x:44,y:36,w:e,h:12},ustYan:{x:44+e,y:36,w:e,h:12}},{ad:"sol-kol",x:a,y:8,on:{x:36,y:52,w:e,h:12},yan:{x:36+e,y:52,w:e,h:12},yanGorunur:!0,ust:{x:52,y:52,w:e,h:12},ustYan:{x:52+e,y:52,w:e,h:12}},{ad:"kafa",x:t,y:0,on:{x:8,y:8,w:8,h:8},yan:{x:16,y:8,w:8,h:8},yanGorunur:!0,ust:{x:40,y:8,w:8,h:8},ustYan:{x:48,y:8,w:8,h:8}}]}function nw(i){const e=i.getContext("2d",{willReadFrequently:!0});return e?(n=>{let a=0;try{const r=e.getImageData(n.x,n.y,n.w,n.h).data;for(let s=3;s<r.length;s+=4)r[s]>8&&a++}catch{return 0}return a})(Nd)>0?Nd:ZE:Nd}const Ve=64,Mt=32,On=Ve*Mt,Yv={pelerin:{u:0,v:0,w:10,h:16,d:1},kanat:{u:22,v:0,w:10,h:20,d:2}},Ic=[{id:"p-dis",ad:"Dış (görünen)",x:1,y:1,w:10,h:16},{id:"p-ic",ad:"İç (astar)",x:12,y:1,w:10,h:16},{id:"p-sol",ad:"Sol yan",x:11,y:1,w:1,h:16},{id:"p-sag",ad:"Sağ yan",x:0,y:1,w:1,h:16},{id:"p-ust",ad:"Üst",x:1,y:0,w:10,h:1},{id:"p-alt",ad:"Alt",x:11,y:0,w:10,h:1}],zc=[{id:"e-dis",ad:"Dış (görünen)",x:36,y:2,w:10,h:20},{id:"e-ic",ad:"İç",x:24,y:2,w:10,h:20},{id:"e-sol",ad:"Sol yan",x:34,y:2,w:2,h:20},{id:"e-sag",ad:"Sağ yan",x:22,y:2,w:2,h:20},{id:"e-ust",ad:"Üst",x:24,y:0,w:10,h:2},{id:"e-alt",ad:"Alt",x:34,y:0,w:10,h:2}];function ja(i){return(i==="pelerin"?Ic:zc)[0]}function Zv(i){return(i==="pelerin"?Ic:zc)[1]}function Pr(){return Array.from({length:On},()=>"")}function pi(i){return!i.some(e=>e!=="")}function cm(){const i=document.createElement("canvas");return i.width=Ve,i.height=Mt,i}function hc(i,e,t){const n=i.getContext("2d");if(n){n.imageSmoothingEnabled=!1,n.clearRect(0,0,Ve,Mt),t&&t(n);for(let a=0;a<Mt;a++)for(let r=0;r<Ve;r++){const s=e[a*Ve+r];s&&(n.fillStyle=s,n.fillRect(r,a,1,1))}}}function Qu(i){const e=i.getImageData(0,0,Ve,Mt).data,t=new Array(On);for(let n=0;n<On;n++){const a=e[n*4+3];t[n]=a<24?"":`#${Od(e[n*4])}${Od(e[n*4+1])}${Od(e[n*4+2])}`}return t}const Od=i=>i.toString(16).padStart(2,"0"),iw=["#46515d","#7f8f9f","#424c58","#4f5c6a","#4a5663","#5f6f80","#586675","#67788a","#77889a","#6d7f92"],aw="31,0,0;32,0,0;33,0,0;34,0,1;35,0,1;36,0,1;37,0,1;38,0,1;39,0,1;32,1,0;33,1,0;34,2,0;35,2,0;36,2,2;37,2,0;38,2,0;39,2,0;40,2,0;41,2,2;34,3,0;35,3,0;36,3,2;37,3,2;38,3,0;39,3,0;40,3,0;41,3,0;42,3,0;35,4,0;36,4,2;37,4,2;38,4,0;39,4,0;40,4,0;41,4,0;42,4,0;43,4,2;35,5,0;36,5,2;37,5,2;38,5,0;39,5,0;40,5,0;41,5,0;42,5,0;43,5,0;35,6,0;36,6,2;37,6,0;38,6,2;39,6,0;40,6,0;41,6,0;42,6,3;43,6,3;35,7,0;36,7,2;37,7,0;38,7,0;39,7,2;40,7,4;41,7,3;42,7,3;43,7,3;44,7,5;35,8,4;36,8,2;37,8,0;38,8,0;39,8,4;40,8,4;41,8,4;42,8,3;43,8,6;44,8,5;35,9,4;36,9,4;37,9,4;38,9,3;39,9,3;40,9,3;41,9,3;42,9,4;43,9,6;44,9,6;35,10,3;36,10,4;37,10,3;38,10,4;39,10,3;40,10,3;41,10,6;42,10,5;43,10,5;44,10,7;22,11,8;36,11,3;37,11,6;38,11,6;39,11,6;40,11,5;41,11,5;42,11,5;43,11,5;44,11,7;45,11,1;22,12,8;36,12,6;37,12,5;38,12,5;39,12,5;40,12,6;41,12,5;42,12,5;43,12,7;44,12,9;45,12,1;22,13,1;36,13,6;37,13,5;38,13,5;39,13,5;40,13,5;41,13,6;42,13,7;43,13,7;44,13,9;45,13,1;22,14,8;36,14,5;37,14,5;38,14,7;39,14,9;40,14,9;41,14,9;42,14,9;43,14,9;44,14,7;45,14,8;22,15,1;36,15,7;37,15,9;38,15,7;39,15,7;40,15,9;41,15,9;42,15,9;43,15,9;44,15,9;45,15,1;22,16,1;37,16,7;38,16,9;39,16,9;40,16,7;41,16,7;42,16,7;43,16,9;44,16,1;45,16,1;22,17,8;37,17,7;38,17,7;39,17,9;40,17,9;41,17,9;42,17,9;43,17,8;44,17,8;45,17,8;22,18,1;37,18,8;38,18,1;39,18,8;40,18,1;41,18,1;42,18,1;43,18,1;44,18,1;45,18,1;22,19,1;38,19,1;39,19,1;40,19,8;41,19,8;42,19,8;43,19,1;44,19,1;45,19,1;22,20,7;38,20,8;39,20,1;40,20,1;41,20,1;42,20,1;43,20,8;44,20,8;45,20,8;22,21,7;39,21,8;40,21,8;41,21,1;42,21,1;43,21,1;44,21,1;45,21,1";function Zf(){const i=Pr();for(const e of aw.split(";")){const[t,n,a]=e.split(",");i[Number(n)*Ve+Number(t)]=iw[Number(a)]}return i}const Jf=QE,Jv=Xv*Jf,jv=JE*Jf,rw=.3,Fd=2;let sw=null;function dm(i,e,t,n,a,r,s){r<=0||s<=0||i.drawImage(e,t.x,t.y,t.w,t.h,n,a,r,s)}function um(i,e,t,n,a,r,s){if(r<=0||s<=0)return;const o=sw??=document.createElement("canvas"),l=Math.round(r),c=Math.round(s);o.width=l,o.height=c;const d=o.getContext("2d");d&&(d.imageSmoothingEnabled=!1,d.drawImage(e,t.x,t.y,t.w,t.h,0,0,l,c),d.globalCompositeOperation="source-atop",d.fillStyle=`rgba(0, 0, 0, ${rw})`,d.fillRect(0,0,l,c),d.globalCompositeOperation="source-over",i.drawImage(o,n,a))}function ow(i,e,t,n=Jf){const a=n;i.imageSmoothingEnabled=!1,i.clearRect(0,0,i.canvas.width,i.canvas.height);const r=tw(t),s=jE*a;i.save(),i.fillStyle="rgba(0, 0, 0, 0.34)",i.beginPath(),i.ellipse(Xv/2*a,(31.3+Fd)*a,6.2*a,1*a,0,0,Math.PI*2),i.fill(),i.restore();for(const o of r){if(!o.yanGorunur)continue;const l=(o.x+o.on.w)*a,c=(o.y+Fd)*a;um(i,e,o.yan,l,c,s,o.on.h*a),o.ust&&o.ustYan&&um(i,e,o.ustYan,l,c,s,o.on.h*a)}for(const o of r){const l=o.x*a,c=(o.y+Fd)*a;dm(i,e,o.on,l,c,o.on.w*a,o.on.h*a),o.ust&&dm(i,e,o.ust,l,c,o.ust.w*a,o.ust.h*a)}}const lw=["#000000","#ffffff","#7f7f7f","#c0c0c0","#ff5555","#ff9f43","#ffe066","#4cd964","#34c3ff","#4b6bff","#a55eea","#ff6bcb","#7a4a2b","#c98b5e","#2b6b3a","#123a5e"],En=64;function cw(i,e,t,n){const a=e.pafta;let r=e.slim,s=e.ad,o="kalem",l=1,c=[255,90,40,255],d=null,f=!1,u=8,h=!1,v=-1,m=-1;const p=document.createElement("div");p.className="sk-edit",p.innerHTML=`
    <header class="sk-edit-ust">
      <button class="btn ghost" id="ske-geri">${G("back")} Kapat</button>
      <div class="sk-edit-baslik">
        <b>Skin Düzenle</b>
        <span id="ske-ad-etiket">${Bd(s)}</span>
      </div>
      <div class="sk-edit-ust-sag">
        <div class="sk-edit-seg" role="group" aria-label="Model tipi">
          <button class="seg-btn aktif" data-slim="0">Wide</button>
          <button class="seg-btn" data-slim="1">Slim</button>
        </div>
        <button class="btn" id="ske-disa">${G("dl")} Dışa Aktar</button>
        <button class="btn primary" id="ske-kaydet">Kaydet</button>
      </div>
    </header>
    <div class="sk-edit-govde">
      <section class="sk-edit-sol">
        <div class="sk-tuval-sar" id="ske-sar">
          <canvas id="ske-tuval" width="${En*u}" height="${En*u}"></canvas>
          <canvas id="ske-izgara" width="${En*u}" height="${En*u}"></canvas>
          <canvas id="ske-3d-tuval" hidden></canvas>
        </div>
        <div class="sk-edit-zum">
          ${[4,8,16].map($=>`<button class="seg-btn ${$===u?"aktif":""}" data-zum="${$}">${$}×</button>`).join("")}
          <span class="sk-edit-ipucu">Ctrl+Z geri · Ctrl+Shift+Z ileri · Ctrl+S kaydet</span>
        </div>
      </section>
      <aside class="sk-edit-sag">
        <div class="sk-blok">
          <div class="sk-blok-baslik">${G("box")} 3D çizim</div>
          <div class="sk-edit-3dbar">
            <button class="seg-btn" id="ske-3d" title="Doğrudan modelin üstüne çiz">${G("box")} 3D Çiz</button>
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
          <div class="sk-blok-baslik">${G("brush")} Araçlar</div>
          <div class="sk-arac-cubugu">
            <button class="sk-arac aktif" data-arac="kalem" title="Kalem">${G("brush")}</button>
            <button class="sk-arac" data-arac="silgi" title="Silgi">${G("eraser")}</button>
            <button class="sk-arac" data-arac="kova" title="Kova — bitişik aynı renk alanını doldur">${G("bucket")}</button>
            <button class="sk-arac" data-arac="damla" title="Damlalık — tuvalden renk al">${G("picker")}</button>
            <span class="sk-arac-ayrac"></span>
            <button class="sk-arac" id="ske-geri-al" title="Geri Al">${G("undo")}</button>
            <button class="sk-arac" id="ske-ileri-al" title="İleri Al">${G("redo")}</button>
            <div class="sk-kalinlik">
              ${[1,2,4].map($=>`<button class="seg-btn ${$===1?"aktif":""}" data-kalinlik="${$}" title="${$} piksel kalınlık">${$}</button>`).join("")}
            </div>
          </div>
        </div>

        <div class="sk-blok">
          <div class="sk-blok-baslik">${G("sparkle")} Renk</div>
          <div class="sk-renk-satir">
            <input type="color" id="ske-renk" value="#ff5a28" aria-label="Renk" />
            <input class="input" id="ske-renk-hex" value="#ff5a28" maxlength="7" spellcheck="false" aria-label="Renk kodu (hex)" />
          </div>
          <span class="sk-etiket">Son kullandıkların</span>
          <div class="kz-son-renkler" id="ske-son"></div>
          <span class="sk-etiket">Hazır palet</span>
          <div class="sk-palet" id="ske-palet">
            ${lw.map($=>`<button class="sk-palet-renk" data-renk="${$}" style="--c:${$}" title="${$}"></button>`).join("")}
          </div>
        </div>

        <div class="sk-blok">
          <div class="sk-bolgeler">
            <div class="sk-bolgeler-ust">
              <b>Bölgeler</b>
              <label class="sk-onay"><input type="checkbox" id="ske-sadece" /> sadece bu parça</label>
            </div>
            <div class="sk-bolge-liste" id="ske-bolgeler">
              ${["taban","ust"].map($=>`
                <div class="sk-bolge-grup">
                  <span>${$==="taban"?"Taban katman":"Üst katman"}</span>
                  ${lm.filter(E=>E.katman===$).map(E=>`<button class="sk-bolge" data-bolge="${E.id}">${E.ad}</button>`).join("")}
                </div>`).join("")}
            </div>
          </div>
        </div>

        <div class="sk-blok">
          <div class="sk-blok-baslik">${G("check")} Kaydet</div>
          <div class="sk-edit-kayit">
            <label class="sk-edit-etiket">Skin adı</label>
            <input class="input" id="ske-ad" value="${Bd(s)}" maxlength="48" />
            <div class="sk-edit-kayit-btn">
              <button class="btn" id="ske-kitaplik">${G("folder")} Sadece Kitaplığa Kaydet</button>
              <button class="btn primary" id="ske-giy">${G("check")} Kaydet ve Giy</button>
            </div>
            <div class="sk-edit-uyari" id="ske-uyari"></div>
          </div>
        </div>
      </aside>
    </div>
  `,document.body.appendChild(p);const g=p.querySelector("#ske-tuval"),_=p.querySelector("#ske-izgara"),T=g.getContext("2d"),b=_.getContext("2d"),k=p.querySelector("#ske-onizleme"),S=document.createElement("canvas");S.width=En,S.height=En;const A=S.getContext("2d"),x=Bn();x.kur(k),x.tuvalDoku(S,r),(async()=>{try{const $=await ne("cmd_kozmetik_oku");$.pelerin_dosya&&$.pelerin_aktif!==!1&&await x.pelerin({url:ut($.pelerin_dosya)})}catch{}})();function w(){const $=new ImageData(new Uint8ClampedArray(a.veri),En,En);A.putImageData($,0,0),T.imageSmoothingEnabled=!1,T.clearRect(0,0,g.width,g.height),T.drawImage(S,0,0,g.width,g.height),R(),x.dokuTazele()}function R(){b.clearRect(0,0,_.width,_.height);const $=_.width/En;if(u>=8){b.strokeStyle="rgba(255,255,255,0.09)",b.lineWidth=1;for(let E=1;E<En;E++)b.beginPath(),b.moveTo(E*$,0),b.lineTo(E*$,_.height),b.stroke(),b.beginPath(),b.moveTo(0,E*$),b.lineTo(_.width,E*$),b.stroke()}if(d){b.strokeStyle="rgba(255,150,60,0.35)",b.lineWidth=1,b.setLineDash([]);for(const E of d.dilimler)E.x===d.x&&E.y===d.y||b.strokeRect(E.x*$+.5,E.y*$+.5,E.w*$-1,E.h*$-1);if(b.strokeStyle="rgba(255,150,60,0.95)",b.lineWidth=2,b.setLineDash([6,4]),b.strokeRect(d.x*$+1,d.y*$+1,d.w*$-2,d.h*$-2),b.setLineDash([]),f){b.fillStyle="rgba(0,0,0,0.55)",b.beginPath(),b.rect(0,0,_.width,_.height);for(const E of d.dilimler)b.rect(E.x*$,E.y*$,E.w*$,E.h*$);b.fill("evenodd")}}}function L($){const E=g.getBoundingClientRect(),y=Math.floor(($.clientX-E.left)/E.width*En),F=Math.floor(($.clientY-E.top)/E.height*En);return[Math.max(0,Math.min(En-1,y)),Math.max(0,Math.min(En-1,F))]}function U(){return o==="silgi"?[0,0,0,0]:c}g.addEventListener("pointerdown",$=>{if($.button!==0)return;const[E,y]=L($);if(h=!0,v=E,m=y,g.setPointerCapture($.pointerId),o==="damla"){c=a.damla(E,y),Z(c,!0);return}a.katmanBasla(),o==="kova"?a.kova(E,y,U()):a.boya(E,y,U(),l),w()}),g.addEventListener("pointermove",$=>{if(!h)return;const[E,y]=L($);E===v&&y===m||((o==="kalem"||o==="silgi")&&(a.cizgi(v,m,E,y,U(),l),w()),v=E,m=y)});const B=()=>{h=!1,v=-1,m=-1};g.addEventListener("pointerup",B),g.addEventListener("pointercancel",B);const C="yikim:renk:son";function H(){try{const $=JSON.parse(localStorage.getItem(C)||"[]");return Array.isArray($)?$.filter(E=>typeof E=="string"&&/^#[0-9a-fA-F]{6}$/.test(E)).slice(0,12):[]}catch{return[]}}function D($){const E=p.querySelector("#ske-son");E&&(E.innerHTML=H().map(y=>`<button class="kz-renk${y.toLowerCase()===$?.toLowerCase()?" aktif":""}" data-renk="${y}" style="background:${y}" title="${y}" aria-label="${y}"></button>`).join("")||'<span class="sk-ipucu-kucuk">Henüz renk yok — paletten seç.</span>')}function P($){const E=$.toLowerCase(),y=[E,...H().filter(F=>F.toLowerCase()!==E)].slice(0,12);try{localStorage.setItem(C,JSON.stringify(y))}catch{}D(E)}function Z($,E=!1){c=$;const y=fm($);p.querySelector("#ske-renk").value=y,p.querySelector("#ske-renk-hex").value=y,p.querySelectorAll(".sk-palet-renk").forEach(F=>{F.classList.toggle("aktif",F.dataset.renk?.toLowerCase()===y.toLowerCase())}),D(y),E&&P(y)}p.querySelector("#ske-renk").addEventListener("input",$=>{Z(kl($.target.value))}),p.querySelector("#ske-renk").addEventListener("change",()=>{P(fm(c))}),p.querySelector("#ske-renk-hex").addEventListener("change",$=>{const E=$.target.value.trim();/^#[0-9a-fA-F]{6}$/.test(E)&&Z(kl(E),!0)}),p.querySelector("#ske-palet")?.addEventListener("click",$=>{const E=$.target.closest(".sk-palet-renk");E?.dataset.renk&&Z(kl(E.dataset.renk),!0)}),p.querySelector("#ske-son")?.addEventListener("click",$=>{const E=$.target.closest(".kz-renk");E?.dataset.renk&&Z(kl(E.dataset.renk),!0)}),p.querySelectorAll(".sk-arac[data-arac]").forEach($=>{$.addEventListener("click",()=>{o=$.dataset.arac,p.querySelectorAll(".sk-arac[data-arac]").forEach(E=>E.classList.remove("aktif")),$.classList.add("aktif")})}),p.querySelectorAll("[data-kalinlik]").forEach($=>{$.addEventListener("click",()=>{l=Number($.dataset.kalinlik),p.querySelectorAll("[data-kalinlik]").forEach(E=>E.classList.remove("aktif")),$.classList.add("aktif")})}),p.querySelectorAll("[data-zum]").forEach($=>{$.addEventListener("click",()=>{u=Number($.dataset.zum),g.width=g.height=_.width=_.height=En*u,p.querySelectorAll("[data-zum]").forEach(E=>E.classList.remove("aktif")),$.classList.add("aktif"),w()})}),p.querySelectorAll("[data-slim]").forEach($=>{$.addEventListener("click",()=>{r=$.dataset.slim==="1",p.querySelectorAll("[data-slim]").forEach(E=>E.classList.remove("aktif")),$.classList.add("aktif"),x.tuvalDoku(S,r),Ge(r?"Slim modelde kollar 1 px daha ince — kol bölgesi kayabilir.":"")})});let V=!1,ee="ust",ae=!1,fe=!1;const Me=p.querySelector("#ske-3d"),Ne=p.querySelector("#ske-izgara3d"),Ie=p.querySelector("#ske-parca"),$e=p.querySelector("#ske-3d-tuval"),j=p.querySelector(".sk-edit-onizleme"),se=p.querySelector(".sk-edit-zum"),he={kafa:!0,govde:!0,kollar:!0,bacaklar:!0,kaplama:!0,kozmetik:!0},Ue=()=>{x.parcaGoster("kafa",he.kafa),x.parcaGoster("govde",he.govde),x.parcaGoster("kollar",he.kollar),x.parcaGoster("bacaklar",he.bacaklar),x.kaplamaGoster(he.kaplama),x.kozmetikGoster(he.kozmetik),ee=he.kaplama?"ust":"taban";const $=p.querySelector("#ske-3d-ipucu");$&&($.textContent=he.kaplama?"Overlay açık — boyama overlay katmanına gider.":"Overlay kapalı — boyama skin (taban) yüzeyine gider.")},ke=$=>{V=$,ae=!1,x.etkilesimKapali=$,fe=$,Ne?.classList.toggle("aktif",fe),g.hidden=$,_.hidden=$,$e.hidden=!$,j&&(j.hidden=$),Ie&&(Ie.hidden=!$),se&&(se.style.display=$?"none":""),Me?.classList.toggle("aktif",$),Me&&(Me.innerHTML=`${G("box")} ${$?"2D'ye dön":"3D Çiz"}`),requestAnimationFrame(()=>{$?(x.kur($e),x.bakisaAyarla(.35,.04),x.tuvalDoku(S,r),Ue(),x.izgaraGoster(fe,!0),Ge("3D çizim: sol tık boya · orta/sağ tık döndür · tekerlek yakınlaş · Skin/Overlay katmanı ve parçalar üstteki düğmelerden aç/kapat.")):(x.kur(k),x.tuvalDoku(S,r),Ue(),x.izgaraGoster(!1,!0),Ge(""))})};Me?.addEventListener("click",()=>ke(!V)),Ne?.addEventListener("click",()=>{fe=!fe,Ne.classList.toggle("aktif",fe),x.izgaraGoster(fe,!0),Ge(fe?"Izgara açık — piksel sınırları karakterin üstünde görünür.":"Izgara kapalı.")}),p.querySelectorAll("[data-zum3d]").forEach($=>{$.addEventListener("click",()=>{const E=Number($.dataset.zum3d);E===0?x.zoomAyarla(2.75):x.zoomAyarla(x.zoomAl()*(E<0?1.18:.85))})}),p.querySelectorAll("[data-parca]").forEach($=>{$.addEventListener("click",()=>{const E=$.dataset.parca;he[E]=!he[E],$.classList.toggle("aktif",he[E]),Ue()})});const Fe=($,E)=>{const y=x.atlasNoktasi($,ee);y&&(E&&a.katmanBasla(),a.boya(y.x,y.y,U(),l),w())};$e.addEventListener("contextmenu",$=>{V&&$.preventDefault()}),$e.addEventListener("pointerdown",$=>{if(V&&!($.pointerType==="mouse"&&$.button!==0)){ae=!0;try{$e.setPointerCapture($.pointerId)}catch{}Fe($,!0)}}),$e.addEventListener("pointermove",$=>{V&&ae&&Fe($,!1)});const _t=()=>{ae=!1};$e.addEventListener("pointerup",_t),$e.addEventListener("pointercancel",_t),p.querySelector("#ske-bolgeler")?.addEventListener("click",$=>{const E=$.target.closest("[data-bolge]");E?.dataset.bolge&&(d=lm.find(y=>y.id===E.dataset.bolge)??null,p.querySelectorAll("[data-bolge]").forEach(y=>y.classList.remove("aktif")),E.classList.add("aktif"),R())}),p.querySelector("#ske-sadece").addEventListener("change",$=>{f=$.target.checked,R()});const Be=()=>{a.geriAl()&&w()},Ye=()=>{a.ileriAl()&&w()};p.querySelector("#ske-geri-al")?.addEventListener("click",Be),p.querySelector("#ske-ileri-al")?.addEventListener("click",Ye);const st=$=>{!document.body.contains(p)||!($.ctrlKey||$.metaKey)||($.key.toLowerCase()==="z"?($.preventDefault(),$.shiftKey?Ye():Be()):$.key.toLowerCase()==="s"&&($.preventDefault(),zt(!0)))};window.addEventListener("keydown",st);function Ge($){const E=p.querySelector("#ske-uyari");E.textContent=$}function pt(){return new Promise($=>{S.toBlob(async E=>{if(!E)return $([]);const y=new Uint8Array(await E.arrayBuffer());$(Array.from(y))},"image/png")})}async function zt($){if(s=p.querySelector("#ske-ad").value.trim()||s,s||(s="Skin"),$&&!await dw("Skini giy",`<b>${Bd(s)}</b> Mojang hesabına yazılacak ve sunucularda görünecek. Onaylıyor musun?`,"Giy"))return;const y=await pt();if(!y.length){Ge("PNG üretilemedi.");return}const F=p.querySelector($?"#ske-giy":"#ske-kitaplik");F.disabled=!0,Ge($?"Mojang hesabına yazılıyor…":"Kitaplığa kaydediliyor…");try{await t({veri:y,slim:r,ad:s},$),Ge(""),Kt()}catch(q){Ge(String(q)),F.disabled=!1}}p.querySelector("#ske-kitaplik")?.addEventListener("click",()=>void zt(!1)),p.querySelector("#ske-giy")?.addEventListener("click",()=>void zt(!0)),p.querySelector("#ske-disa")?.addEventListener("click",async()=>{const $=await pt(),E=p.querySelector("#ske-ad");try{const{invoke:y}=await tt(async()=>{const{invoke:q}=await Promise.resolve().then(()=>vt);return{invoke:q}},void 0),F=await y("cmd_skin_disa_aktar",{ad:E.value.trim()||"skin",veri:$});X(`Dışa aktarıldı: ${F}`)}catch(y){X(String(y),"err")}});const Wt=document.createElement("button");Wt.className="btn ghost sk-dosya-btn",Wt.innerHTML=`${G("image")} Dosya`;const dt=document.createElement("input");dt.type="file",dt.accept="image/png",dt.style.display="none",Wt.addEventListener("click",()=>dt.click()),dt.addEventListener("change",async()=>{const $=dt.files?.[0];$&&await O($),dt.value=""}),p.querySelector("#ske-geri").after(Wt),p.appendChild(dt);function Ut(){return new Promise($=>{const{root:E,close:y}=en(`
        <h2>Skin türü</h2>
        <div class="sub" style="margin-bottom:14px">Bu skin hangi model için çizildi?</div>
        <div class="skin-model-secim">
          <button class="skin-model-btn" id="se-wide">
            ${G("user")}<b>Wide</b><span>Klasik model — 4px kol</span>
          </button>
          <button class="skin-model-btn" id="se-slim">
            ${G("user")}<b>Slim</b><span>İnce model — 3px kol (Alex)</span>
          </button>
        </div>
        <div style="display:flex; justify-content:flex-end; margin-top:12px">
          <button class="btn ghost" id="se-iptal">Vazgeç</button>
        </div>`);let F=!1;const q=Q=>{F||(F=!0,y(),$(Q))};E.querySelector("#se-wide")?.addEventListener("click",()=>q(!1)),E.querySelector("#se-slim")?.addEventListener("click",()=>q(!0)),E.querySelector("#se-iptal")?.addEventListener("click",()=>q(null))})}async function O($){try{const E=URL.createObjectURL($),y=await new Promise((ue,ie)=>{const re=new Image;re.onload=()=>ue(re),re.onerror=()=>ie(new Error("görsel okunamadı")),re.src=E}),F=document.createElement("canvas");F.width=y.width,F.height=y.height;const q=F.getContext("2d");q.drawImage(y,0,0),URL.revokeObjectURL(E);const Q=q.getImageData(0,0,y.width,y.height);if(!(y.width===64&&(y.height===64||y.height===32))){X(`Skin 64×64 veya 64×32 olmalı (bu dosya ${y.width}×${y.height})`,"err");return}const ce=await Ut();if(ce===null)return;r=ce,p.querySelectorAll("[data-slim]").forEach(ue=>{ue.classList.toggle("aktif",ue.dataset.slim===(r?"1":"0"))}),a.katmanBasla(),y.height===64?a.veri.set(Q.data):a.veri.set(YE(Q.data)),w(),x.tuvalDoku(S,r)}catch(E){X(String(E),"err")}}const Kt=()=>{window.removeEventListener("keydown",st),p.remove();try{x.kapati()}catch{}n()};p.querySelector("#ske-geri")?.addEventListener("click",Kt),p.querySelector("#ske-kaydet")?.addEventListener("click",()=>{const $=p.querySelector(".sk-edit-kayit");$.scrollIntoView({behavior:"smooth",block:"center"}),$.querySelector("#ske-ad").focus()}),Z(c),w()}function fm(i){const e=t=>t.toString(16).padStart(2,"0");return`#${e(i[0])}${e(i[1])}${e(i[2])}`}function kl(i){const e=i.replace("#","");return[parseInt(e.slice(0,2),16)||0,parseInt(e.slice(2,4),16)||0,parseInt(e.slice(4,6),16)||0,255]}function Bd(i){return i.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function dw(i,e,t){return new Promise(n=>{const{root:a,close:r}=en(`
      <h2>${i}</h2>
      <div class="sub" style="margin-bottom:16px">${e}</div>
      <div style="display:flex; gap:10px; justify-content:flex-end">
        <button class="btn" id="ed-vazgec">Vazgeç</button>
        <button class="btn primary" id="ed-tamam">${t}</button>
      </div>`);let s=!1;const o=c=>{s||(s=!0,r(),n(c))};a.querySelector("#ed-vazgec")?.addEventListener("click",()=>o(!1)),a.querySelector("#ed-tamam")?.addEventListener("click",()=>o(!0));const l=a.parentElement;l?.addEventListener("click",c=>{c.target===l&&o(!1)})})}let je=null,sn=null,Fa=null,hn=!1,Ro=null,hm=null,pm=!1,rn=null;const At=i=>i.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function Uc(i){Rc(),je=null,sn=null,Fa=null,Ro=null,rn=null;const e=Sn();if(!e){uw(i);return}const t=e.kind!=="microsoft";i.innerHTML=hw(e.name,t),pw(i,e.id),hm=i,pm||(pm=!0,document.addEventListener("visibilitychange",()=>{if(document.visibilityState!=="visible")return;const n=hm;if(!n||!n.isConnected)return;const a=Sn();a&&a.kind==="microsoft"&&Lo(n,a.id,!1)})),Lo(i,e.id,!0)}function uw(i,e){i.innerHTML=`
    <div class="page-wrap skin-kapi-sar">
      <div class="skin-kapi">
        <div class="skin-kapi-ikon">${G("lock")}</div>
        <h1>Orijinal hesap ile girmen lazım</h1>
        <p>Skin değiştirmek ve pelerin takmak için Microsoft hesabı gerekir.</p>
        <div class="skin-kapi-aksiyon">
          ${`<button class="btn primary lg" id="sk-ms">${G("globe")} Microsoft ile Giriş</button>`}
          <button class="btn" id="sk-hesap">Hesapları Yönet</button>
        </div>
      </div>
    </div>`,i.querySelector("#sk-ciz")?.addEventListener("click",()=>{const t=Sn();t&&fw(t.id)}),i.querySelector("#sk-ms")?.addEventListener("click",()=>{pn(()=>Uc(i))}),i.querySelector("#sk-hesap")?.addEventListener("click",()=>qe("settings"))}function fw(i){X("Yerel skin: çizim kaydedince bu bilgisayarda görünür","ok");const e=document.querySelector("#content");e&&Uc(e)}function hw(i,e){return`
    <div class="page-wrap skin-sayfa">
      <div class="page-header skin-baslik">
        <div>
          <h1>Skin Merkezi</h1>
          <p class="sub">${e?"Skinini çiz, yükle ve giy — YIKIMLient kullanan herkes görür.":"Skinlerini seç, giy; pelerinini tak. Giyilen skin sunucularda görünür."}</p>
        </div>
        <div class="skin-ust-aksiyon">
          ${e?`<span class="skin-premium" style="color:var(--warn)">${G("user")} Yerel skin</span>`:`<span class="skin-premium">${G("check")} Orijinal hesap</span>`}
          <button class="btn primary" id="sk-duzenle">${G("brush")} Skin Düzenle</button>
        </div>
      </div>
      ${e?`
      <p class="skin-cracked-uyari">
        <span class="skin-cracked-ikon">${G("info")}</span>
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
              <button class="btn" id="sk-yedek" style="display:none">${G("undo")} Yedeği Geri Yükle</button>
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
              ${G("plus")}
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
    </div>`}function pw(i,e){i.querySelector("#sk-duzenle")?.addEventListener("click",()=>void Ew(i,e)),i.querySelector("#sk-kozmetik")?.addEventListener("click",()=>qe("kozmetik")),i.querySelector("#sk-giy")?.addEventListener("click",()=>void $d(i,e)),i.querySelector("#sk-yedek")?.addEventListener("click",()=>void xw(i,e));const t=i.querySelector("#sk-ekle"),n=i.querySelector("#sk-dosya");t.addEventListener("click",()=>n.click()),t.addEventListener("keydown",s=>{(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),n.click())}),n.addEventListener("change",()=>{const s=n.files?.[0];s&&gm(i,e,s),n.value=""}),t.addEventListener("dragover",s=>{s.preventDefault(),t.classList.add("uzerinde")}),t.addEventListener("dragleave",()=>t.classList.remove("uzerinde")),t.addEventListener("drop",s=>{s.preventDefault(),t.classList.remove("uzerinde");const o=s.dataTransfer?.files?.[0];o&&gm(i,e,o)});const a=(s,o)=>{const l=i.querySelector(s);l?.addEventListener("click",c=>{const d=c.target.closest(".skin-kart");!d||c.target.closest(".skin-sil")||mm(i,d)}),l?.addEventListener("dblclick",c=>{const d=c.target.closest(".skin-kart");!d||c.target.closest(".skin-sil")||(mm(i,d),o())})};a("#sk-kitaplik",()=>void $d(i,e)),a("#sk-varsayilan",()=>void $d(i,e)),i.querySelector("#sk-kitaplik")?.addEventListener("click",s=>{const o=s.target.closest(".skin-sil");if(!o)return;s.stopPropagation();const l=o.closest(".skin-kart");l?.dataset.id&&Sw(i,e,l.dataset.id,l.dataset.ad||"Skin")}),i.querySelector("#sk-pelerin")?.addEventListener("click",s=>{const o=s.target.closest(".skin-pelerin");if(!o)return;const l=o.dataset.id||null;kw(i,e,l)});const r=(s,o)=>{i.querySelector(s)?.addEventListener("click",l=>{const c=l.target,d=c.closest(".skin-pelerin");if(d){if(c.closest(".koz-sil")){l.stopPropagation(),bw(i,o,d.dataset.id||"",d.dataset.ad||"Kayıt");return}yw(i,o,d.dataset.id||null)}})};r("#sk-koz-pelerin","pelerin"),r("#sk-koz-kanat","kanat"),i.querySelector("#sk-serit")?.addEventListener("click",s=>{s.target.closest("#sk-yenile")&&Lo(i,e,!1)})}async function Lo(i,e,t){try{je=await ne("cmd_skin_hub",{id:e}),sn=sn??mw(),ma(i),t?Qv(i):jf(i),Oo(),_w(i).then(()=>Ps(!1)),je.cevrimdisi?X("Çevrimdışısın — son bilinen skin gösteriliyor"):je.hata&&X(je.hata,"err")}catch(n){X(String(n),"err");const a=i.querySelector("#sk-kitaplik");a&&(a.innerHTML='<div class="skin-bos">Yüklenemedi. <button class="btn" id="sk-yenile">Yeniden dene</button></div>')}}function mw(){if(!je)return null;if(je.secili){const t=je.kitaplik.find(n=>n.id===je.secili);if(t)return ef(t)}if(je.aktif)return{tur:"kayit",id:`aktif:${je.aktif.dosya}`,dosya:je.aktif.dosya,slim:je.aktif.slim,ad:"Aktif skin"};const i=je.kitaplik[0];if(i)return ef(i);const e=je.varsayilanlar[0];return e?{tur:"varsayilan",id:`varsayilan:${e.ad}`,dosya:e.dosya,slim:e.slim,ad:e.ad}:null}function ef(i){return{tur:"kayit",id:i.id,dosya:i.dosya,slim:i.slim,ad:i.ad}}function ma(i){if(!je)return;const e=i.querySelector("#sk-serit");e&&(e.innerHTML=je.cevrimdisi?`<div class="skin-serit-cevrimdisi">${G("info")} Çevrimdışısın — son bilinen skin ve pelerinler gösteriliyor.
          <button class="btn ghost" id="sk-yenile">Yeniden dene</button></div>`:"");const t=i.querySelector("#sk-kitaplik");if(t){je.kitaplik.length?(t.innerHTML=je.kitaplik.map(u=>vw(u)).join(""),t.querySelectorAll(".skin-yuz").forEach(u=>{const h=u.dataset.dosya;h&&vm(u,h,u.dataset.slim==="1")})):t.innerHTML='<div class="skin-bos">Henüz kayıtlı skin yok.<br />Sağ üstten <b>Skin Düzenle</b> ile çiz ya da PNG ekle.</div>';const f=i.querySelector("#sk-adet");f&&(f.textContent=je.kitaplik.length?`${je.kitaplik.length}`:"")}const n=i.querySelector("#sk-varsayilan");n&&(n.innerHTML=(je.varsayilanlar||[]).map(f=>`
      <div class="skin-kart" data-tur="varsayilan" data-id="varsayilan:${At(f.ad)}" data-dosya="${At(f.dosya)}"
           data-slim="${f.slim?1:0}" data-ad="${At(f.ad)}">
        <div class="skin-yuz-sar">
          <canvas class="skin-yuz" width="${Jv}" height="${jv}"
                  data-dosya="${At(f.dosya)}" data-slim="${f.slim?1:0}"></canvas>
          <span class="skin-model">${f.slim?"Slim":"Wide"}</span>
        </div>
        <div class="skin-kart-ad">${At(f.ad)}</div>
      </div>`).join(""),n.querySelectorAll(".skin-yuz").forEach(f=>{const u=f.dataset.dosya;u&&vm(f,u,f.dataset.slim==="1")})),gw(i),e0(i);const a=Sn(),r=!!a&&Cm(a.id)&&!Pm(a.id),s=i.querySelector("#sk-koz-pelerin")?.previousElementSibling;let o=i.querySelector("#sk-koz-rol-not");r?(o||(o=document.createElement("p"),o.id="sk-koz-rol-not",o.className="skin-bos",o.textContent='Başka bir pelerin/elitra giymek için Discord sunucusundaki YIKIM etiketi ("Yol Silindiri") gerekir — şimdilik yalnız aç/kapa yapabilirsin.',s?.after(o)),i.querySelectorAll(".skin-pelerin[data-id]:not(.cikar)").forEach(f=>{f.disabled=!0,f.title="Yol Silindiri rolü gerekir"})):o?.remove();const l=i.querySelector("#sk-aktif-ad");if(l){const f=sn;l.textContent=je.cevrimdisi?"çevrimdışı önizleme":f?`${f.ad} · ${f.slim?"Slim":"Wide"}`:"skin seç"}const c=i.querySelector("#sk-giy");c&&(c.disabled=!sn||hn,c.textContent=hn?"Bekle…":"Bu Skini Giy");const d=i.querySelector("#sk-yedek");d&&(d.style.display=je.yedek_var?"":"none"),i.querySelectorAll(".skin-kart").forEach(f=>{const u=sn&&f.dataset.id===sn.id;f.classList.toggle("secili",!!u);const h=f.querySelector(".skin-rozet.secim");if(u&&!h){const v=document.createElement("span");v.className="skin-rozet secim",v.textContent=Fa&&f.dataset.id===Fa?"GİYİLİ":"SEÇİLİ",f.appendChild(v)}else!u&&h?h.remove():u&&h&&(h.textContent=Fa&&f.dataset.id===Fa?"GİYİLİ":"SEÇİLİ")})}function gw(i){if(!je)return;const e=i.querySelector("#sk-pelerin");if(!e)return;if(!je.pelerinler.length){e.innerHTML='<div class="skin-bos">Hesabında pelerin yok — Mojang pelerinleri etkinliklerden kazanılır.</div>';return}const t=je.pelerinler.find(n=>n.aktif);e.innerHTML=je.pelerinler.map(n=>`<button class="skin-pelerin ${n.aktif?"aktif":""}" data-id="${At(n.id)}" title="${At(n.ad)}">
           <canvas class="skin-pelerin-tuval" width="40" height="64" data-dosya="${At(n.dosya||"")}"></canvas>
           <span class="skin-pelerin-ad">${At(n.ad)}</span>
           ${n.aktif?'<span class="skin-rozet aktif">TAKILI</span>':""}
         </button>`).join("")+(t?`<button class="skin-pelerin cikar" data-id="" title="Pelerini çıkar">
           <span class="skin-pelerin-yok">✕</span><span class="skin-pelerin-ad">Pelerini çıkar</span>
         </button>`:""),e.querySelectorAll(".skin-pelerin-tuval").forEach(n=>{const a=n.dataset.dosya;a&&i0(n,a)})}function vw(i){return`
    <div class="skin-kart" data-tur="kayit" data-id="${At(i.id)}" data-dosya="${At(i.dosya)}"
         data-slim="${i.slim?1:0}" data-ad="${At(i.ad)}">
      <div class="skin-yuz-sar">
        <canvas class="skin-yuz" width="${Jv}" height="${jv}"
                data-dosya="${At(i.dosya)}" data-slim="${i.slim?1:0}"></canvas>
        <span class="skin-model">${i.slim?"Slim":"Wide"}</span>
      </div>
      <div class="skin-kart-ad">${At(i.ad)}</div>
      <button class="skin-sil" title="Sil">${G("trash")}</button>
    </div>`}function mm(i,e){sn={tur:e.dataset.tur||"kayit",id:e.dataset.id||"",dosya:e.dataset.dosya||"",slim:e.dataset.slim==="1",ad:e.dataset.ad||"Skin"},jf(),ma(i)}function Qv(i){const e=i.querySelector("#skin-canvas");if(!e)return;Bn().kur(e),jf()}function jf(i){const e=Bn();sn&&e.skin({url:ut(sn.dosya),slim:sn.slim})}function Oo(){if(!je)return;const e=je.pelerinler.find(t=>t.aktif&&t.dosya)?.dosya||null;if(e!==Ro){if(Ro=e,!e){Bn().pelerin(null);return}Bn().pelerin({url:ut(e)})}}async function _w(i){try{rn=await ne("cmd_kozm_katalog")}catch{rn={kayitlar:[],aktif:{pelerin:null,kanat:null}}}e0(i)}function e0(i){if(!rn)return;const e=(a,r)=>{const s=i.querySelector(a);if(!s)return;const o=rn.kayitlar.filter(c=>c.tur===r),l=rn.aktif[r];if(!o.length){const c=r==="pelerin"?"Pelerin":"Elitra";s.innerHTML=`<div class="skin-bos">${c} kaydı yok — <b>Kozmetik</b> sayfasında fotoğraftan oluştur, burada birikir.</div>`;return}s.innerHTML=o.map(c=>`
        <button class="skin-pelerin ${c.id===l?"aktif":""}" data-id="${At(c.id)}" data-ad="${At(c.ad)}" title="${At(c.ad)}${c.hd?" · HD":""}">
          <canvas class="skin-pelerin-tuval" width="40" height="64" data-dosya="${At(c.dosya)}"></canvas>
          <span class="skin-pelerin-ad">${At(c.ad)}</span>
          <span class="skin-sil koz-sil" title="Kaydı sil">${G("trash")}</span>
          ${c.id===l?'<span class="skin-rozet aktif">TAKILI</span>':""}
        </button>`).join("")+(l?`<button class="skin-pelerin cikar" data-id="" title="YIKIM kozmetiğini kapat">
             <span class="skin-pelerin-yok">✕</span><span class="skin-pelerin-ad">Kapat</span>
           </button>`:""),s.querySelectorAll(".skin-pelerin-tuval").forEach(c=>{const d=c.dataset.dosya;d&&i0(c,d,r)})};e("#sk-koz-pelerin","pelerin"),e("#sk-koz-kanat","kanat");const t=i.querySelector("#sk-koz-adet");if(t){const a=rn.kayitlar.filter(r=>r.tur==="pelerin").length;t.textContent=a?`${a} kayıt`:""}const n=i.querySelector("#sk-koz-kanat-adet");if(n){const a=rn.kayitlar.filter(r=>r.tur==="kanat").length;n.textContent=a?`${a} kayıt`:""}}async function Ps(i){const e=Bn(),t=rn?.kayitlar.find(a=>a.id===rn?.aktif.pelerin&&a.dosya)||null,n=rn?.kayitlar.find(a=>a.id===rn?.aktif.kanat&&a.dosya)||null;try{n?(await e.pelerin(null),await e.kanat({url:ut(n.dosya)})):(await e.kanat(null),t?await e.pelerin({url:ut(t.dosya)}):(Ro=null,Oo())),i&&(t||n)&&e.bakisaAyarla(2.5,.1)}catch{}}async function yw(i,e,t){if(!(hn||!rn)){hn=!0;try{const n=await ne("cmd_kozm_sec",{tur:e,id:t});rn.aktif=n.aktif;const a=rn.kayitlar.find(r=>r.id===t);t?(X(`${a?.ad||"Kozmetik"} takıldı — oyunda görünecek.`),n.hata&&X(`Diğer oyunculara yüklenemedi: ${n.hata}`,"err")):X("YIKIM kozmetiği kapatıldı — vanilla görünüm."),await Ps(!0)}catch(n){X(String(n),"err")}finally{hn=!1,ma(i)}}}async function bw(i,e,t,n){if(!(hn||!t||!await Nc("Kaydı sil",`<b>${At(n)}</b> katalogdan silinsin mi? Bu işlem geri alınamaz.`,"Sil"))){hn=!0;try{const r=await ne("cmd_kozm_sil",{tur:e,id:t});rn&&(rn.kayitlar=r.kayitlar,rn.aktif=r.aktif),X("Kayıt silindi."),await Ps(!1)}catch(r){X(String(r),"err")}finally{hn=!1,ma(i)}}}async function $d(i,e){if(!sn||hn)return;const t=sn;if(await Nc("Skini giy",`<b>${At(t.ad)}</b> Mojang hesabına yazılacak ve sunucularda görünecek. Onaylıyor musun?`,"Giy")){hn=!0,ma(i);try{let a;if(t.tur==="kayit"&&je?.kitaplik.some(r=>r.id===t.id))a=await ne("cmd_skin_giy_kitaplik",{id:e,kayitId:t.id});else{const r=await t0(t.dosya);a=await ne("cmd_skin_giy",{id:e,veri:r,slim:t.slim,ad:null})}je=a,Fa=t.tur==="kayit"?t.id:null,X("Skin giyildi — sunucularda görünecek.")}catch(a){X(String(a),"err")}finally{hn=!1,ma(i)}}}async function xw(i,e){if(!(hn||!await Nc("Yedeği geri yükle","Son giymeden önceki skin Mojang hesabına geri yazılacak. Onaylıyor musun?","Geri Yükle"))){hn=!0;try{je=await ne("cmd_skin_yedek_geri_yukle",{id:e}),Fa=null,X("Yedek skin geri yüklendi.")}catch(n){X(String(n),"err")}finally{hn=!1,ma(i),Oo(),Ps(!1)}}}async function kw(i,e,t){if(!(hn||!je)&&!(t===null&&!je.pelerinler.some(n=>n.aktif))){hn=!0;try{je=await ne("cmd_skin_pelerin",{id:e,capeId:t}),X(t?"Pelerin takıldı.":"Pelerin çıkarıldı."),Oo(),Ps(!1)}catch(n){X(String(n),"err")}finally{hn=!1,ma(i)}}}async function Sw(i,e,t,n){if(await Nc("Skini sil",`<b>${At(n)}</b> kitaplıktan silinsin mi? (Hesabındaki skin değişmez.)`,"Sil"))try{await ne("cmd_skin_sil",{kayitId:t}),sn?.id===t&&(sn=null),X("Skin silindi."),await Lo(i,e,!1)}catch(r){X(String(r),"err")}}async function gm(i,e,t){try{const n=Array.from(new Uint8Array(await t.arrayBuffer())),a=t.name.replace(/\.png$/i,"").slice(0,48)||"Skin",r=await Mw(a);if(r===null)return;await ne("cmd_skin_kaydet",{ad:a,veri:n,slim:r}),X(`Skin kitaplığa eklendi · ${r?"Slim":"Wide"}`),await Lo(i,e,!1)}catch(n){X(String(n),"err")}}function Mw(i){return new Promise(e=>{const{root:t,close:n}=en(`
      <h2>Skin türü</h2>
      <div class="sub" style="margin-bottom:14px"><b>${At(i)}</b> hangi model için çizildi?</div>
      <div class="skin-model-secim">
        <button class="skin-model-btn" id="sm-wide">
          ${G("user")}
          <b>Wide</b>
          <span>Klasik model — 4px kol</span>
        </button>
        <button class="skin-model-btn" id="sm-slim">
          ${G("user")}
          <b>Slim</b>
          <span>İnce model — 3px kol (Alex)</span>
        </button>
      </div>
      <div style="display:flex; justify-content:flex-end; margin-top:12px">
        <button class="btn ghost" id="sm-iptal">Vazgeç</button>
      </div>`);let a=!1;const r=l=>{l.key==="Escape"&&s(null)},s=l=>{a||(a=!0,window.removeEventListener("keydown",r),n(),e(l))};t.querySelector("#sm-wide")?.addEventListener("click",()=>s(!1)),t.querySelector("#sm-slim")?.addEventListener("click",()=>s(!0)),t.querySelector("#sm-iptal")?.addEventListener("click",()=>s(null));const o=t.parentElement;o?.addEventListener("click",l=>{l.target===o&&s(null)}),window.addEventListener("keydown",r)})}async function Ew(i,e){const t=sn?.dosya||je?.aktif?.dosya||je?.varsayilanlar[0]?.dosya;if(!t){X("Önce bir skin seç.","err");return}let n;try{n=await ww(await t0(t))}catch(o){X(String(o),"err");return}const a=new Date,r=`Skinim ${String(a.getDate()).padStart(2,"0")}.${String(a.getMonth()+1).padStart(2,"0")}`;let s=!1;cw(i,{pafta:n,slim:sn?.slim??!1,ad:r},async(o,l)=>{const c=await ne("cmd_skin_kaydet",{ad:o.ad,veri:o.veri,slim:o.slim});l?(je=await ne("cmd_skin_giy_kitaplik",{id:e,kayitId:c.id}),Fa=c.id,X("Skin giyildi — sunucularda görünecek.")):(je=await ne("cmd_skin_hub",{id:e}),X("Kitaplığa kaydedildi.")),sn=ef(c),s=!0},()=>{if(!s){Uc(i);return}ma(i),Rc(),Ro=null,Qv(i),Oo(),Ps(!1)})}async function ww(i){const e=new Blob([new Uint8Array(i)],{type:"image/png"}),t=URL.createObjectURL(e);try{const n=await new Promise((l,c)=>{const d=new Image;d.onload=()=>l(d),d.onerror=()=>c(new Error("Skin dosyası okunamadı.")),d.src=t}),a=document.createElement("canvas");a.width=64,a.height=64;const r=a.getContext("2d");r.imageSmoothingEnabled=!1;const s=n0(n),o=n.naturalHeight===32;return r.drawImage(s,0,0,64,o?32:64),new fc(new Uint8ClampedArray(r.getImageData(0,0,64,64).data))}finally{URL.revokeObjectURL(t)}}async function t0(i){const e=await fetch(ut(i));if(!e.ok)throw new Error("Skin dosyası okunamadı.");return Array.from(new Uint8Array(await e.arrayBuffer()))}function n0(i){const e=i.naturalWidth||i.width,t=i.naturalHeight||i.height;if(e===64)return i;const n=document.createElement("canvas");n.width=64,n.height=Math.max(1,Math.round(t/e*64));const a=n.getContext("2d");return a?(a.imageSmoothingEnabled=!1,a.drawImage(i,0,0,n.width,n.height),n):i}function vm(i,e,t){const n=new Image;n.onload=()=>{const a=i.getContext("2d");a&&ow(a,n0(n),t)},n.src=ut(e)}function i0(i,e,t="pelerin"){const n=new Image;n.onload=()=>{const a=i.getContext("2d");if(!a)return;const r=n.naturalWidth||Ve,s=n.naturalHeight||Mt,o=r>Ve||s>Mt;let l=ja(t);if(t==="pelerin"){const v=document.createElement("canvas");v.width=Ve,v.height=Mt;const m=v.getContext("2d",{willReadFrequently:!0});m&&(m.imageSmoothingEnabled=!1,m.drawImage(n,0,0,Ve,Mt),l=nw(v))}i.width=o?160:40,i.height=o?256:64,i.style.imageRendering=o?"auto":"pixelated",a.imageSmoothingEnabled=o,a.imageSmoothingQuality="high",a.clearRect(0,0,i.width,i.height);const c=Math.min(i.width/l.w,i.height/l.h),d=l.w*c,f=l.h*c,u=r/Ve,h=s/Mt;a.drawImage(n,l.x*u,l.y*h,l.w*u,l.h*h,(i.width-d)/2,(i.height-f)/2,d,f)},n.src=ut(e)}function Nc(i,e,t){return new Promise(n=>{const{root:a,close:r}=en(`
      <h2>${i}</h2>
      <div class="sub" style="margin-bottom:16px">${e}</div>
      <div style="display:flex; gap:10px; justify-content:flex-end">
        <button class="btn" id="on-vazgec">Vazgeç</button>
        <button class="btn primary" id="on-tamam">${t}</button>
      </div>`);let s=!1;const o=c=>{s||(s=!0,r(),n(c))};a.querySelector("#on-vazgec")?.addEventListener("click",()=>o(!1)),a.querySelector("#on-tamam")?.addEventListener("click",()=>o(!0));const l=a.parentElement;l?.addEventListener("click",c=>{c.target===l&&o(!1)})})}const Fo=["pelerin","kanat"],Tw=["#0b0b10","#1d1d24","#3a3a46","#6b6b7a","#a8a8b6","#e8e8ef","#ff8a3d","#ff5a1f","#ffd166","#f6f6f6","#ff4d6d","#b8132f","#7b2ff7","#3d5afe","#22d3ee","#0ea5a3","#22c55e","#166534","#8b5e34","#d9a066","#f5c6a5","#e11d48","#111827","#4b5563"],_m=8;let Oc=Pr(),Bo=Pr(),Ds=!1,Is=!1,Yt="pelerin",Ba="#ff8a3d",Ln=!1,qa=!1,di=!1,$a=!1,hr=!0,mi="kalem";const Aw=[4,8,12,16];let lo=8;const a0="yikim:renk:son",pc=40,yn={pelerin:[],kanat:[]},Qa={pelerin:[],kanat:[]};let rs=Rw();function Rw(){try{const i=localStorage.getItem(a0),e=i?JSON.parse(i):null;return Array.isArray(e)?e.filter(t=>typeof t=="string").slice(0,12):[]}catch{return[]}}function Lw(i){const e=i.toLowerCase();if(rs[0]?.toLowerCase()!==e){rs=[i,...rs.filter(t=>t.toLowerCase()!==e)].slice(0,12);try{localStorage.setItem(a0,JSON.stringify(rs))}catch{}}}function r0(i){const e=`#${i.trim().replace(/^#+/,"")}`;return/^#[0-9a-fA-F]{6}$/.test(e)?e.toLowerCase():null}let ps=!0,Co=null,Po=null;const yr=new Map,Qf=Zf(),Cw=i=>i.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),It=i=>i==="pelerin"?Oc:Bo,mc=i=>i==="pelerin"?Ic:zc;function Pw(i){Rc(),eo=i,Oc=Pr(),Bo=Zf(),Ds=!1,Is=!1,Yt="pelerin",Ba="#ff8a3d",mi="kalem",yn.pelerin.length=0,yn.kanat.length=0,Qa.pelerin.length=0,Qa.kanat.length=0,Ln=!1,qa=!1,$a=!1,ps=!0,qt.pelerin=!1,qt.kanat=!1,Vt.pelerin=null,Vt.kanat=null,ga.pelerin=!1,ga.kanat=!1,Co=null,Po=null,yr.clear(),i.innerHTML=Dw(),o0(i),l0(i),c0(i)}function s0(){const i=Sn();return!i||!Cm(i.id)||!U0(i.id)?"dogrulanmamis":Pm(i.id)?"tam":"rol_yok"}function o0(i,e){const t=e??s0(),n=t!=="tam";i.querySelector("#kz-sayfa")?.classList.toggle("kz-kisitli",n);const r=i.querySelector("#kz-sekme-ipucu");if(r&&(n?r.textContent="Bu sayfada yalnız önizleme ve aç/kapa var":r.textContent="Atlasta ya da 3D modelin üstünde çiz"),i.querySelector("#kz-kisitli")?.remove(),t==="tam")return;const s=i.querySelector(".page-header");if(!s)return;const o=document.createElement("div");o.id="kz-kisitli",o.className="kz-kilit"+(t==="rol_yok"?" kz-kilit-rol":""),t==="dogrulanmamis"?o.innerHTML=`<span class="gv-carpi">✕</span>
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
      <button class="btn ghost sm" id="kz-kisitli-eski">Discord'a katıl ↗</button>`,s.after(o),i.querySelector("#kz-kisitli-eski")?.addEventListener("click",()=>{t==="dogrulanmamis"?qe("settings"):Im()})}async function l0(i){await Ha(!0);const e=await Dm(),t=e?e.dogrulandi?e.cizimSerbest?"tam":"rol_yok":"dogrulanmamis":s0();o0(i,t)}window.addEventListener("yikim:yetki",()=>{const i=document.getElementById("kz-sayfa");i&&(l0(i),c0(i))});function Dw(){return`
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
          ${G("shirt")} <span>Pelerin</span>
          <em class="kz-sekme-durum" id="kz-pelerin-sekme-durum"></em>
        </button>
        <button class="kz-sekme" data-secim="kanat" role="tab">
          ${G("sparkle")} <span>Elitra</span>
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
            <span>${G("user")} Karakterde görünüm</span>
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
                <button class="seg-btn aktif" id="kz-3d-kalem" title="Modelin üstüne boya">${G("brush")} Kalem</button>
                <button class="seg-btn" id="kz-3d-silgi" title="Modelin üstünde sil">${G("eraser")} Silgi</button>
                <button class="seg-btn" id="kz-3d-dondur" title="Sol tıkla karakteri döndür (boyama kapalı)">${G("undo")} Döndür</button>
              </span>
              <span class="kz-etiket">Görünüm</span>
              <span class="seg-grup">
                <button class="seg-btn aktif" id="kz-3d-matris" title="Piksel matrisini (ızgara) aç/kapat">${G("grid")} Matris</button>
                <button class="seg-btn" id="kz-3d-oyuncu" title="Karakter gövdesini göster/gizle">${G("user")} Oyuncuyu gizle</button>
              </span>
              <button class="btn ghost sm kz-2d-don" id="kz-3d-2d" title="2D atlas tuvaline dön">${G("image")} 2D'ye geç</button>
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
          ${ym("pelerin","Pelerin","shirt","Pelerin","Ön, arka, yanlar, üst ve alt — altı yüz de ayrı çizilir.")}
          ${ym("kanat","Elitra","sparkle","Elitra","Sol/sağ kanat oyunda aynadır: aynı atlası aynalı gösterir.")}
        </div>
      </div>

      <p class="kz-dipnot">Kozmetikler oyun açıkken de uygulanır: kaydettikten sonra en geç birkaç saniye
        içinde oyunda görünür. Boş bıraktığın pelerin/elitra oyunda görünmez — elitra boşken normal
        Minecraft elitrası kullanılır.</p>
    </div>`}function ym(i,e,t,n,a){const r=Aw.map(s=>`<button class="seg-btn ${s===lo?"aktif":""}" data-kzyum="${s}" title="${s}× yakınlaştır">${s}×</button>`).join("");return`
    <section class="kz-kart" id="kz-${i}-kart" data-tur="${i}">
      <div class="kz-kart-ust">
        <h3>${G(t)} ${e}</h3>
        <span class="kz-rozet" id="kz-${i}-durum"></span>
      </div>

      <div class="kz-calisma">
        <div class="kz-tuval-kolon">
          <div class="kz-tuval-kaydir">
            <div class="kz-tuval-sar" id="kz-${i}-sar">
              <canvas class="kz-tuval" id="kz-${i}-tuval" width="${Ve}" height="${Mt}"
                aria-label="${n} atlası — 64×32 piksel"></canvas>
              <canvas class="kz-rehber" id="kz-${i}-rehber"
                width="${Ve*_m}" height="${Mt*_m}"></canvas>
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
            <button class="kz-arac-btn aktif" data-kzarac="kalem" title="Kalem">${G("brush")}</button>
            <button class="kz-arac-btn" data-kzarac="silgi" title="Silgi (çizerek siler)">${G("eraser")}</button>
            <button class="kz-arac-btn" data-kzarac="kova" title="Kova — bitişik aynı renk alanını doldur">${G("bucket")}</button>
            <button class="kz-arac-btn" data-kzarac="damla" title="Damlalık — tuvallin rengini al">${G("picker")}</button>
            <span class="kz-arac-ayrac"></span>
            <button class="kz-arac-btn" id="kz-${i}-geri" title="Geri al">${G("undo")}</button>
            <button class="kz-arac-btn" id="kz-${i}-ileri" title="İleri al">${G("redo")}</button>
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
          title="Doğrudan 3D modelin her yüzüne boya">${G("box")} 3D Çiz</button>
        <label class="btn" for="kz-${i}-dosya" title="Düz fotoğraf ya da hazır 64×32 pafta">${G("image")} Fotoğraf / Pafta</label>
        <input type="file" id="kz-${i}-dosya" accept="image/*" style="display:none" />
        <span class="kz-alt-bos"></span>
        <button class="btn" id="kz-${i}-temizle" title="Atlasın tamamını temizle">${G("trash")} Temizle</button>
        <button class="btn danger" id="kz-${i}-kaldir" title="Kayıtlı kozmetiği kaldır">Kaldır</button>
        <button class="btn primary" id="kz-${i}-kaydet">${G("check")} Kaydet</button>
      </div>
    </section>`}async function c0(i){let e;try{e=await ne("cmd_kozmetik_oku")}catch(u){X(String(u),"err"),e={pelerin:null,kanat:null}}const t=u=>{try{const h=localStorage.getItem(`yikim:kozmetik:${u}:yedek`),v=h?JSON.parse(h):null;return Array.isArray(v)&&v.length===On?v.slice():null}catch{return null}},n=(u,h)=>u?u.length===On?u.slice():u.length===Yw[h]?Jw(u,h):null:null,a=n(e.pelerin,"pelerin"),r=n(e.kanat,"kanat"),s=n(e.pelerin_varsayilan,"pelerin"),o=n(e.kanat_varsayilan,"kanat");Oc=!!a&&!pi(a)?a:t("pelerin")??s??a??Pr(),Bo=!!r&&!pi(r)?r:t("kanat")??o??r??Zf(),Ds=!!a&&!pi(a),Is=!!r&&!pi(r),Co=cm(),Po=cm(),d0(),Iw(i);for(const u of Fo)$w(i,u);$o(i),m0(i),qw(i);const d=i.querySelector("#kz-pelerin-aktif"),f=i.querySelector("#kz-kanat-aktif");d&&(d.checked=e.pelerin_aktif??km("pelerin")??!!e.pelerin_dosya),f&&(f.checked=e.kanat_aktif??km("kanat")??!!e.kanat_dosya),tT(i,e)}function Iw(i){const e=i.querySelector("#kz-sahne");if(!e)return;const t=Bn();t.kur(e),(async()=>{try{const n=Sn();let a=null;if(n){const r=await ne("cmd_skin_hub",{id:n.id});a=r?.aktif?.dosya?r.aktif:r?.varsayilanlar?.[0]??null}await t.skin(a?.dosya?{url:ut(a.dosya),slim:!!a.slim}:null)}catch{try{await t.skin(null)}catch{}}})()}function zw(i){i.fillStyle="rgba(150,152,170,0.16)";for(const e of Ic)i.fillRect(e.x,e.y,e.w,e.h)}function Uw(i){if(!pi(Bo)){i.fillStyle="rgba(150,152,170,0.10)";for(const e of zc)i.fillRect(e.x,e.y,e.w,e.h);return}i.save(),i.globalAlpha=.6;for(let e=0;e<On;e++){const t=Qf[e];t&&(i.fillStyle=t,i.fillRect(e%Ve,Math.floor(e/Ve),1,1))}i.restore()}function d0(){Co&&hc(Co,Oc,zw),Po&&hc(Po,Bo,Uw),Bn().dokuTazele()}function $o(i){const e=Bn();Yt==="pelerin"?(e.kanatTuval(null),qt.pelerin&&Vt.pelerin?(e.pelerinTuval(null),e.pelerin({url:ut(Vt.pelerin)})):e.pelerinTuval(Co)):(e.pelerinTuval(null),qt.kanat&&Vt.kanat?(e.kanatTuval(null),e.kanat({url:ut(Vt.kanat)})):e.kanatTuval(Po)),i.querySelectorAll("[data-secim]").forEach(t=>{t.classList.toggle("aktif",t.dataset.secim===Yt),t.setAttribute("aria-selected",t.dataset.secim===Yt?"true":"false")});for(const t of Fo){const n=i.querySelector(`#kz-${t}-kart`);n&&(n.hidden=Yt!==t,n.classList.toggle("secili",Yt===t))}i.querySelectorAll("[data-ciz3d]").forEach(t=>{const n=t.dataset.ciz3d===Yt;t.classList.toggle("aktif",Ln&&n),t.innerHTML=Ln&&n?`${G("image")} 2D'ye geç`:`${G("box")} 3D Çiz`})}function ei(i,e){pi(It(e))||(ga[e]=!1);const t=i.querySelector(`#kz-${e}-tuval`);t&&hc(t,It(e)),co(i,e),eh(i,e),d0()}function eh(i,e){const t=qt[e]||!pi(It(e)),n=e==="pelerin"?Ds:Is,a=i.querySelector(`#kz-${e}-durum`);a&&(a.textContent=n&&t?"KAYITLI":"");const r=i.querySelector(`#kz-${e}-sekme-durum`);r&&(r.textContent=n&&t?"kayıtlı":"")}function Nw(i,e,t){const n=i.getContext("2d");if(!n)return;n.clearRect(0,0,i.width,i.height);const a=i.width/Ve;n.font="600 10px ui-sans-serif, system-ui, sans-serif",n.textAlign="center",n.textBaseline="middle";for(const r of e){const s=t?.id===r.id;if(n.strokeStyle=s?"rgba(255,150,60,0.95)":"rgba(255,255,255,0.26)",n.lineWidth=s?2:1,n.setLineDash(s?[]:[4,3]),n.strokeRect(r.x*a+.5,r.y*a+.5,r.w*a-1,r.h*a-1),n.setLineDash([]),r.h*a<20)continue;const o=r.w*a<46,l=(r.x+r.w/2)*a,c=Math.min(i.height-10,Math.max(10,(r.y+r.h/2)*a));n.save(),n.translate(l,c),o&&n.rotate(-Math.PI/2);const d=n.measureText(r.ad);n.fillStyle="rgba(8,9,13,0.74)",n.fillRect(-d.width/2-4,-7,d.width+8,14),n.fillStyle=s?"#ffb066":"rgba(255,255,255,0.8)",n.fillText(r.ad,0,0),n.restore()}}function co(i,e){const t=i.querySelector(`#kz-${e}-rehber`);t&&Nw(t,mc(e),yr.get(e)??null)}function bm(i,e){const t=e.getBoundingClientRect();if(t.width<1||t.height<1)return null;const n=Math.floor((i.clientX-t.left)/t.width*Ve),a=Math.floor((i.clientY-t.top)/t.height*Mt);return n<0||a<0||n>=Ve||a>=Mt?null:{x:n,y:a}}function Ow(i,e,t){for(const n of mc(i))if(e>=n.x&&e<n.x+n.w&&t>=n.y&&t<n.y+n.h)return n;return null}function Fw(i,e,t,n,a,r){let s=e,o=t;const l=Math.abs(n-e),c=Math.abs(a-t),d=e<n?1:-1,f=t<a?1:-1;let u=l-c;for(;s>=0&&s<Ve&&o>=0&&o<Mt&&(i[o*Ve+s]=r),!(s===n&&o===a);){const h=2*u;h>-c&&(u-=c,s+=d),h<l&&(u+=l,o+=f)}}function Bw(i,e){const t=i.querySelector(`#kz-${e}-palet`);if(!t)return;xm(t,i);const n=i.querySelector("#kz-3d-palet");n&&!n.childElementCount&&xm(n,i)}function xm(i,e){i.innerHTML=Tw.map(t=>`<button class="kz-renk" data-renk="${t}" style="background:${t}" title="${t}" aria-label="${t}"></button>`).join(""),i.querySelectorAll(".kz-renk").forEach(t=>{t.addEventListener("click",()=>br(e,t.dataset.renk??"#ffffff"))})}function br(i,e,t=!0){const n=r0(e)??Ba;Ba=n,t&&(mi="kalem",Lw(n));const a=o=>(o??"").toLowerCase()===n.toLowerCase();for(const o of Fo){const l=i.querySelector(`#kz-${o}-renk`);l&&(l.value=n);const c=i.querySelector(`#kz-${o}-hex`);c&&(c.value=n.toUpperCase());const d=i.querySelector(`#kz-${o}-renk-kod`);d&&(d.textContent=n.toUpperCase()),i.querySelectorAll(`#kz-${o}-palet .kz-renk`).forEach(f=>{f.classList.toggle("aktif",a(f.dataset.renk))}),i.querySelectorAll(`#kz-${o}-son .kz-renk`).forEach(f=>{f.classList.toggle("aktif",a(f.dataset.renk))})}const r=i.querySelector("#kz-3d-renk");r&&(r.value=n);const s=i.querySelector("#kz-3d-renk-kod");s&&(s.textContent=n.toUpperCase()),i.querySelectorAll("#kz-3d-palet .kz-renk").forEach(o=>{o.classList.toggle("aktif",a(o.dataset.renk))}),t&&Ln&&(qa=!1),th(i),p0(i)}function $w(i,e){const t=i.querySelector(`#kz-${e}-tuval`);if(!t)return;Bw(i,e),hc(t,It(e)),co(i,e),eh(i,e),Vw(i,e),p0(i),h0(i),th(i),e==="pelerin"&&br(i,Ba,!1);let n=!1,a=-1,r=-1;const s=()=>{yn[e].push(It(e).slice()),yn[e].length>pc&&yn[e].shift(),Qa[e].length=0},o=(u,h,v)=>{const m=It(e);if(mi==="damla"){const g=m[h*Ve+u];g&&br(i,g,!0);return}if(mi==="kova"){if(!v)return;s(),Gw(m,u,h,Ba),ei(i,e);return}const p=mi==="silgi"?"":Ba;a>=0&&r>=0?Fw(m,a,r,u,h,p):m[h*Ve+u]=p,a=u,r=h,ei(i,e)};t.addEventListener("contextmenu",u=>u.preventDefault()),t.addEventListener("pointerdown",u=>{Yt!==e&&(Yt=e,$o(i)),n=!0,a=-1,r=-1;try{t.setPointerCapture(u.pointerId)}catch{}const h=bm(u,t);h&&(mi!=="damla"&&s(),o(h.x,h.y,!0))}),t.addEventListener("pointermove",u=>{const h=bm(u,t),v=h?Ow(e,h.x,h.y):null;(yr.get(e)??null)?.id!==(v?.id??null)&&(yr.set(e,v),co(i,e)),!(!h||!n)&&o(h.x,h.y,!1)});const l=()=>{n=!1,a=-1,r=-1};t.addEventListener("pointerup",l),t.addEventListener("pointercancel",l),t.addEventListener("pointerleave",()=>{n||yr.get(e)&&(yr.set(e,null),co(i,e))}),i.querySelectorAll(`#kz-${e}-araclar [data-kzarac]`).forEach(u=>{u.addEventListener("click",()=>Hw(i,u.dataset.kzarac??"kalem"))}),i.querySelector(`#kz-${e}-geri`)?.addEventListener("click",()=>u0(i,e)),i.querySelector(`#kz-${e}-ileri`)?.addEventListener("click",()=>f0(i,e)),i.querySelector(`#kz-${e}-renk`)?.addEventListener("input",u=>{br(i,u.target.value)});const c=i.querySelector(`#kz-${e}-hex`),d=()=>{if(!c)return;const u=r0(c.value);u?br(i,u):c.value=Ba.toUpperCase()};c?.addEventListener("change",d),c?.addEventListener("blur",d),c?.addEventListener("keydown",u=>{u.key==="Enter"&&(u.preventDefault(),d())}),i.querySelector(`#kz-${e}-temizle`)?.addEventListener("click",()=>{s();const u=It(e);for(let h=0;h<u.length;h++)u[h]="";ga[e]=!0,ei(i,e),X(`${e==="pelerin"?"Pelerin":"Elitra"} tuvali temizlendi — kaydetmezsen oyun değişmez.`)}),i.querySelector(`#kz-${e}-3d`)?.addEventListener("click",()=>{if(Ln&&Yt===e){tf(i,!1),requestAnimationFrame(()=>{i.querySelector(`#kz-${e}-kart`)?.scrollIntoView({behavior:"smooth",block:"center"})});return}tf(i,!0,e),i.querySelector("#kz-oniz3d")?.scrollIntoView({behavior:"smooth",block:"center"})}),i.querySelector(`#kz-${e}-kaydet`)?.addEventListener("click",()=>void gc(i,e)),i.querySelector(`#kz-${e}-kaldir`)?.addEventListener("click",()=>{qt[e]&&(qt[e]=!1,Vt[e]=null,ra(i,e)),s();const u=It(e);for(let h=0;h<u.length;h++)u[h]="";ga[e]=!0,ei(i,e),gc(i,e)});const f=i.querySelector(`#kz-${e}-dosya`);f?.addEventListener("change",()=>{const u=f.files?.[0];u&&rT(i,e,u),f.value=""})}function Hw(i,e){mi=e,th(i),e==="damla"?X("Damlalık: tuvallin bir pikseline tıkla, rengi alır."):e==="kova"&&X("Kova: bitişik aynı renk alanını seçili renkle doldurur.")}function th(i){i.querySelectorAll("[data-kzarac]").forEach(e=>{e.classList.toggle("aktif",e.dataset.kzarac===mi)}),i.querySelector("#kz-3d-kalem")?.classList.toggle("aktif",Ln&&mi!=="silgi"),i.querySelector("#kz-3d-silgi")?.classList.toggle("aktif",Ln&&mi==="silgi")}function Gw(i,e,t,n){const a=i[t*Ve+e]??"";if(a===n)return;const r=[t*Ve+e];for(;r.length;){const s=r.pop();if((i[s]??"")!==a)continue;i[s]=n;const o=s%Ve,l=Math.floor(s/Ve);o>0&&r.push(s-1),o<Ve-1&&r.push(s+1),l>0&&r.push(s-Ve),l<Mt-1&&r.push(s+Ve)}}function u0(i,e){const t=yn[e].pop();if(!t){X("Geri alınacak adım yok.");return}Qa[e].push(It(e).slice()),It(e).splice(0,It(e).length,...t),ei(i,e)}function f0(i,e){const t=Qa[e].pop();if(!t){X("İleri alınacak adım yok.");return}yn[e].push(It(e).slice()),It(e).splice(0,It(e).length,...t),ei(i,e)}function h0(i){for(const e of Fo){const t=i.querySelector(`#kz-${e}-tuval`),n=i.querySelector(`#kz-${e}-rehber`),a=`${Ve*lo}px`,r=`${Mt*lo}px`;t&&(t.style.width=a,t.style.height=r),n&&(n.style.width=a,n.style.height=r)}i.querySelectorAll("[data-kzyum]").forEach(e=>{e.classList.toggle("aktif",Number(e.dataset.kzyum)===lo)})}function p0(i){for(const e of Fo){const t=i.querySelector(`#kz-${e}-son`);t&&(t.innerHTML=rs.length?rs.map(n=>`<button class="kz-renk" data-renk="${n}" style="background:${n}" title="${n}" aria-label="${n}"></button>`).join(""):'<span class="kz-bos-not">Henüz renk kullanmadın — bir renk seç, burada birikir.</span>',t.querySelectorAll(".kz-renk").forEach(n=>{n.addEventListener("click",()=>br(i,n.dataset.renk??"#ffffff"))}))}}function Vw(i,e){const t=i.querySelector(`#kz-${e}-bolgeler`);t&&(t.innerHTML=mc(e).map(n=>`<button class="kz-bolge-rozet" data-bolge="${n.id}" title="Atlasta ${n.ad} yüzü">${n.ad}</button>`).join(""),t.querySelectorAll("[data-bolge]").forEach(n=>{const a=mc(e).find(s=>s.id===n.dataset.bolge)??null,r=s=>{yr.set(e,s?a:null),co(i,e)};n.addEventListener("pointerenter",()=>r(!0)),n.addEventListener("pointerleave",()=>r(!1))}))}function tf(i,e,t){e&&t&&(Yt=t),Ln=e,qa=!1,e||($a=!1),e||(di=!1);const n=Bn();n.etkilesimKapali=e&&!di,n.izgaraGoster(e&&hr),n.kanatAyrik(e),n.oyuncuGoster(!$a),i.querySelector("#kz-3d-matris")?.classList.toggle("aktif",e&&hr),i.querySelector("#kz-sayfa")?.classList.toggle("cizim3d",e),i.querySelector("#kz-oniz3d")?.classList.toggle("cizim",e);const a=i.querySelector("#kz-cizim-arac");a&&(a.hidden=!e);const r=i.querySelector("#kz-3d-oyuncu");r&&(r.innerHTML=`${G("user")} ${$a?"Oyuncuyu göster":"Oyuncuyu gizle"}`),i.querySelector("#kz-3d-kalem")?.classList.toggle("aktif",e&&!qa),i.querySelector("#kz-3d-silgi")?.classList.toggle("aktif",e&&qa),i.querySelector("#kz-3d-dondur")?.classList.toggle("aktif",e&&di);const s=i.querySelector("#kz-sahne-alt");s&&(s.textContent=e?di?"Döndür modu: sol tık sürükle döndürür · Tekerlek: yakınlaş":"Sol tık: boya · Orta/sağ tık: döndür · Tekerlek: yakınlaş":"Sürükle: döndür · Tekerlek: yakınlaş"),$o(i),requestAnimationFrame(()=>n.boyutGuncelle())}function qw(i){const e=async(l,c,d)=>{const f=It(c),u=`yikim:kozmetik:${c}:yedek`;if(!d&&!pi(f))try{localStorage.setItem(u,JSON.stringify(f))}catch{}try{await ne("cmd_kozmetik_aktif",{[c]:d});return}catch{}if(!d){if(qt[c])throw new Error("Bu launcher sürümü HD fotoğrafı kapatmayı desteklemiyor — launcher'ı güncelle.");await nf(c,Pr());return}let h=[];try{const v=localStorage.getItem(u),m=v?JSON.parse(v):null;Array.isArray(m)&&m.length===On&&(h=m)}catch{h=[]}!h.length&&!pi(f)&&(h=f.slice()),h.length&&(await nf(c,h),f.splice(0,f.length,...h),ei(l,c))},t=i.querySelector("#kz-sahne");if(!t)return;const n=Bn();let a=!1;const r=l=>{const c=n.kozmetikNoktasi(l,Yt);if(!c||c.x<0||c.y<0||c.x>=Ve||c.y>=Mt)return;const d=It(Yt),f=qa?"":Ba,u=c.y*Ve+c.x;d[u]!==f&&(d[u]=f,ei(i,Yt))};t.addEventListener("contextmenu",l=>{Ln&&l.preventDefault()}),t.addEventListener("pointerdown",l=>{if(!(!Ln||di)&&!(l.pointerType==="mouse"&&l.button!==0)){a=!0;try{t.setPointerCapture(l.pointerId)}catch{}r(l)}}),t.addEventListener("pointermove",l=>{Ln&&a&&r(l)});const s=()=>{a=!1};t.addEventListener("pointerup",s),t.addEventListener("pointercancel",s),i.querySelectorAll("[data-secim]").forEach(l=>{l.addEventListener("click",()=>{Yt=l.dataset.secim??"pelerin",$o(i)})}),i.querySelectorAll("[data-kzyum]").forEach(l=>{l.addEventListener("click",()=>{const c=Number(l.dataset.kzyum);c&&(lo=c,h0(i))})}),i.querySelector("#kz-3d-matris")?.addEventListener("click",()=>{hr=!hr,i.querySelector("#kz-3d-matris")?.classList.toggle("aktif",hr),n.izgaraGoster(hr),X(hr?"Matris açık — piksel sınırları görünür.":"Matris kapalı.")}),i.querySelector("#kz-3d-renk")?.addEventListener("input",l=>{br(i,l.target.value)});const o=[["#kz-pelerin-aktif","pelerin"],["#kz-kanat-aktif","kanat"]];for(const[l,c]of o)i.querySelector(l)?.addEventListener("change",d=>{const f=d.target,u=f.checked;Sm(c,u),(async()=>{try{await e(i,c,u),X(c==="pelerin"?u?"Özel pelerin açık — oyunda kendi pelerin görünür.":"Özel pelerin kapalı — oyunda Minecraft pelerini görünür.":u?"Özel elitra açık — oyunda kendi elitran görünür.":"Özel elitra kapalı — oyunda Minecraft elitrası görünür.")}catch(h){f.checked=!u,Sm(c,!u),X(String(h),"err")}})()});i.querySelector("#kz-yon")?.addEventListener("click",()=>{ps=!ps,m0(i)}),i.querySelector("#kz-zum-arti")?.addEventListener("click",()=>n.zoomAyarla(n.zoomAl()*.85)),i.querySelector("#kz-zum-eksi")?.addEventListener("click",()=>n.zoomAyarla(n.zoomAl()*1.18)),i.querySelector("#kz-zum-sigdir")?.addEventListener("click",()=>n.zoomAyarla(2.75)),i.querySelector("#kz-3d-kalem")?.addEventListener("click",()=>{qa=!1,di=!1,mi="kalem",n.etkilesimKapali=Ln,i.querySelector("#kz-3d-kalem")?.classList.add("aktif"),i.querySelector("#kz-3d-silgi")?.classList.remove("aktif"),i.querySelector("#kz-3d-dondur")?.classList.remove("aktif")}),i.querySelector("#kz-3d-silgi")?.addEventListener("click",()=>{qa=!0,di=!1,mi="silgi",n.etkilesimKapali=Ln,i.querySelector("#kz-3d-silgi")?.classList.add("aktif"),i.querySelector("#kz-3d-kalem")?.classList.remove("aktif"),i.querySelector("#kz-3d-dondur")?.classList.remove("aktif")}),i.querySelector("#kz-3d-dondur")?.addEventListener("click",()=>{di=!di,n.etkilesimKapali=Ln&&!di,i.querySelector("#kz-3d-dondur")?.classList.toggle("aktif",di);const c=i.querySelector("#kz-sahne-alt");c&&(c.textContent=di?"Döndür modu: sol tık sürükle döndürür · Tekerlek: yakınlaş":"Sol tık: boya · Orta/sağ tık: döndür · Tekerlek: yakınlaş")}),i.querySelector("#kz-3d-oyuncu")?.addEventListener("click",()=>{const l=i.querySelector("#kz-3d-oyuncu");$a=!$a,n.oyuncuGoster(!$a),l&&(l.innerHTML=`${G("user")} ${$a?"Oyuncuyu göster":"Oyuncuyu gizle"}`)}),i.querySelector("#kz-3d-2d")?.addEventListener("click",()=>{const l=Yt;tf(i,!1),requestAnimationFrame(()=>{i.querySelector(`#kz-${l}-kart`)?.scrollIntoView({behavior:"smooth",block:"center"})})})}function m0(i){Bn().bakisaAyarla(ps?2.5:0,ps?.12:.02);const e=i.querySelector("#kz-yon");e&&(e.textContent=ps?"Önden gör":"Arkadan gör")}const Ww=(i,e,t)=>i[t*Ve+e]??"",ss=(i,e,t,n)=>{e<0||e>=Ve||t<0||t>=Mt||(i[t*Ve+e]=n)};function Kw(i,e,t){for(let n=0;n<e.h;n++)for(let a=0;a<e.w;a++)ss(i,t.x+(e.w-1-a),t.y+n,Ww(i,e.x+a,e.y+n))}function Xw(i,e){const t=ja(e),n=Yv[e],{u:a,v:r,d:s}=n,o=(f,u)=>i[u*Ve+f]??"",l=e==="pelerin"?a:a+s+n.w,c=e==="pelerin"?a+s+n.w:a;for(let f=0;f<t.h;f++){const u=o(t.x,t.y+f),h=o(t.x+t.w-1,t.y+f);for(let v=0;v<s;v++)ss(i,l+v,r+s+f,u),ss(i,c+v,r+s+f,h)}const d=e!=="pelerin";for(let f=0;f<t.w;f++){const u=d?t.w-1-f:f,h=o(t.x+u,t.y),v=o(t.x+u,t.y+t.h-1);for(let m=0;m<s;m++)ss(i,a+s+f,r+m,h),ss(i,a+s+n.w+f,r+m,v)}}const Yw={pelerin:160,kanat:200};function Zw(i,e=It(i)){const t=ja(i),n=[];for(let a=0;a<t.h;a++)for(let r=0;r<t.w;r++)n.push(e[(t.y+a)*Ve+t.x+r]??"");return n}function Jw(i,e){const t=Pr(),n=ja(e);for(let a=0;a<n.h;a++)for(let r=0;r<n.w;r++)ss(t,n.x+r,n.y+a,i[a*n.w+r]??"");return Kw(t,n,Zv(e)),Xw(t,e),t}async function nf(i,e){try{return await ne("cmd_kozmetik_kaydet",{[i]:e})}catch(t){if(!/piksel bekleniyordu/i.test(String(t)))throw t;return await ne("cmd_kozmetik_kaydet",{[i]:Zw(i,e)})}}function km(i){try{const e=localStorage.getItem(`yikim:kozmetik:${i}:aktif`);return e===null?null:e==="1"}catch{return null}}function Sm(i,e){try{localStorage.setItem(`yikim:kozmetik:${i}:aktif`,e?"1":"0")}catch{}}const qt={pelerin:!1,kanat:!1},Vt={pelerin:null,kanat:null},ga={pelerin:!1,kanat:!1};function jw(i){return new Promise(e=>{const t=URL.createObjectURL(i),n=new Image;n.onload=()=>{URL.revokeObjectURL(t),e(n)},n.onerror=()=>{URL.revokeObjectURL(t),X("Görsel okunamadı","err"),e(null)},n.src=t})}function Qw(i,e,t,n,a,r,s,o){const l=document.createElement("canvas");l.width=Math.max(1,Math.round(r)),l.height=Math.max(1,Math.round(s));const c=l.getContext("2d",{willReadFrequently:!0});if(!c)throw new Error("tuval yok");if(c.imageSmoothingEnabled=o,c.imageSmoothingQuality="high",!o)return c.drawImage(i,e,t,n,a,0,0,l.width,l.height),l;let d=i,f=e,u=t,h=n,v=a,m=Math.round(n),p=Math.round(a);for(;m>l.width*2&&p>l.height*2;){m=Math.max(l.width,Math.round(m/2)),p=Math.max(l.height,Math.round(p/2));const g=document.createElement("canvas");g.width=m,g.height=p;const _=g.getContext("2d");if(!_)break;_.imageSmoothingEnabled=!0,_.imageSmoothingQuality="high",_.drawImage(d,f,u,h,v,0,0,m,p),d=g,f=0,u=0,h=m,v=p}return c.drawImage(d,f,u,h,v,0,0,l.width,l.height),l}function g0(i,e,t,n,a,r=!1,s=0){const o=ja(t),l=Zv(t),c=Yv[t],d=a?Math.max(1,Math.min(16,Math.round(e.w/o.w))):1,f=document.createElement("canvas");f.width=Ve*d,f.height=Mt*d;const u=f.getContext("2d",{willReadFrequently:!0});if(!u)throw new Error("tuval yok");const h=o.x*d,v=o.y*d,m=o.w*d,p=o.h*d;u.imageSmoothingEnabled=!1;const g=Qw(i,e.x,e.y,e.w,e.h,m,p,a);let _=g;if(r||s!==0){const b=document.createElement("canvas");b.width=m,b.height=p;const k=b.getContext("2d");k&&(k.imageSmoothingEnabled=!a,k.translate(m/2,p/2),k.rotate(s*Math.PI/180),k.scale(r?-1:1,1),k.drawImage(g,-m/2,-p/2),_=b)}if(t==="pelerin"&&(u.fillStyle="#000000",u.fillRect(h,v,m,p)),u.drawImage(_,h,v),n)return f;u.save(),u.translate(l.x*d+m,l.y*d),u.scale(-1,1),u.drawImage(f,h,v,m,p,0,0,m,p),u.restore();const T=d;return u.drawImage(f,h,v,T,p,(c.u+c.d+c.w)*d,(c.v+c.d)*d,c.d*d,p),u.drawImage(f,h+m-T,v,T,p,c.u*d,(c.v+c.d)*d,c.d*d,p),u.drawImage(f,h,v,m,T,(c.u+c.d)*d,c.v*d,m,c.d*d),u.drawImage(f,h,v+p-T,m,T,(c.u+c.d+c.w)*d,c.v*d,m,c.d*d),f}function eT(i){return new Promise((e,t)=>{i.toBlob(n=>{if(!n){t(new Error("PNG üretilemedi"));return}const a=new FileReader;a.onload=()=>e(String(a.result).split(",")[1]??""),a.onerror=()=>t(new Error("PNG okunamadı")),a.readAsDataURL(n)},"image/png")})}function ra(i,e){const t=qt[e],n=i.querySelector(`#kz-${e}-kart`);if(!n)return;n.classList.toggle("foto",t);const a=n.querySelector(".kz-calisma");a&&(a.hidden=t);const r=i.querySelector(`#kz-${e}-foto`);r&&(r.hidden=!t);const s=i.querySelector(`#kz-${e}-foto-img`),o=Vt[e];if(s&&o){const c=new Image;c.onload=()=>{const d=Math.max(1,Math.round(c.naturalWidth/Ve)),f=ja(e);s.width=f.w*12,s.height=f.h*12;const u=s.getContext("2d");u&&(u.clearRect(0,0,s.width,s.height),u.imageSmoothingEnabled=!0,u.imageSmoothingQuality="high",u.drawImage(c,f.x*d,f.y*d,f.w*d,f.h*d,0,0,s.width,s.height))},c.src=ut(o)}else s&&s.getContext("2d")?.clearRect(0,0,s.width,s.height);for(const c of["#kz-"+e+"-3d","#kz-"+e+"-temizle","#kz-"+e+"-kaydet"]){const d=i.querySelector(c);d&&(d.hidden=t)}const l=i.querySelector(`#kz-${e}-durum`);l&&(l.textContent=t?"fotoğraf (HD)":""),Yt===e&&$o(i)}function tT(i,e){const t=(n,a,r)=>{if(Array.isArray(r)&&r.length===On){qt[n]=!1,Vt[n]=null,ra(i,n);return}if(!a){qt[n]=!1,Vt[n]=null,ra(i,n);return}qt[n]=!0,Vt[n]=String(a),ra(i,n);const s=String(a),o=new Image;o.onload=()=>{if(Vt[n]!==s)return;const l=o.naturalWidth>Ve||o.naturalHeight>Mt;qt[n]=l,Vt[n]=l?s:null,ra(i,n)},o.onerror=()=>{Vt[n]===s&&(qt[n]=!0)},o.src=ut(s)};t("pelerin",e.pelerin_dosya,e.pelerin),t("kanat",e.kanat_dosya,e.kanat)}async function nT(i,e,t,n,a,r,s=!1,o=0){ga[e]=!1;const l=g0(t,n,e,a,r,s,o),c=await eT(l);let d;try{d=await ne("cmd_kozmetik_fotograf",{tur:e,png:c,duz:a})}catch(h){const v=document.createElement("canvas");v.width=Ve,v.height=Mt;const m=v.getContext("2d",{willReadFrequently:!0});if(!m)throw h;m.imageSmoothingEnabled=!0,m.imageSmoothingQuality="high",m.drawImage(l,0,0,Ve,Mt);const p=Qu(m),g=It(e);yn[e].push(g.slice()),yn[e].length>pc&&yn[e].shift(),Qa[e].length=0;for(let _=0;_<On;_++)g[_]=p[_];ei(i,e),await gc(i,e),X("Launcher eski sürümde — fotoğraf 64×32 olarak kaydedildi. HD için launcher'ı güncelle.","err");return}const f=It(e);for(let h=0;h<f.length;h++)f[h]="";localStorage.removeItem(`yikim:kozmetik:${e}:yedek`),qt[e]=!0,Vt[e]=e==="pelerin"?"pelerin.png":"elytra.png";try{const h=await ne("cmd_kozmetik_oku"),v=e==="pelerin"?h.pelerin_dosya:h.kanat_dosya;v&&(Vt[e]=String(v))}catch{}if(e==="pelerin"?Ds=!0:Is=!0,!r){const h=l.getContext("2d",{willReadFrequently:!0});if(h){const v=Qu(h),m=It(e);yn[e].push(m.slice()),yn[e].length>pc&&yn[e].shift(),Qa[e].length=0;for(let p=0;p<On;p++)m[p]=v[p];if(e==="kanat")for(let p=0;p<On;p++)Qf[p]||(m[p]="")}qt[e]=!1,Vt[e]=null,ei(i,e),ra(i,e),await gc(i,e);return}ei(i,e),ra(i,e);const u=d.yuklendi?"":" (sunucuya yüklenemedi; yalnız sende görünür)";X(`Fotoğraf ${d.genislik}×${d.yukseklik} HD doku olarak kaydedildi${u}`)}function iT(i,e,t){i.querySelector("#kz-kirp")?.remove();const n=ja(e),a=n.w/n.h,r=e==="pelerin"?"Pelerin":"Elitra";let s=!1,o=!0,l=!1,c=0;const d=document.createElement("div");d.className="kz-kirp",d.id="kz-kirp",d.innerHTML=`
    <div class="kz-kirp-kart" role="dialog" aria-modal="true" aria-label="Fotoğrafı yerleştir">
      <div class="kz-kirp-bas">
        <div class="kz-kirp-basla">
          <b>${r} fotoğrafı</b>
          <span>Çerçeveyi sürükle · köşeden boyutlandır · tekerlekle yakınlaştır · üstteki tutamaçla döndür</span>
        </div>
        <button class="btn ghost sm" id="kz-kirp-kapat" title="Kapat (Esc)">${G("close")}</button>
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
        <button class="btn primary" id="kz-kirp-uygula">${G("check")} Uygula</button>
      </div>
    </div>`,i.appendChild(d);const f=d.querySelector("#kz-kirp-c"),u=d.querySelector("#kz-kirp-on"),h=d.querySelector("#kz-kirp-bilgi"),v=d.querySelector("#kz-kirp-boyut"),m=d.querySelector("#kz-kirp-mod-not"),p=Math.min(620/t.width,420/t.height,1);f.width=Math.max(60,Math.round(t.width*p)),f.height=Math.max(60,Math.round(t.height*p));const g=f.width/t.width,_=f.getContext("2d");if(!_)throw new Error("tuval yok");let b=(()=>{let D=t.height,P=D*a;return P>t.width&&(P=t.width,D=P/a),{x:(t.width-P)/2,y:(t.height-D)/2,w:P,h:D}})();const k=D=>{const P=Math.max(4,t.width/60);let Z=Math.min(Math.max(D.w,P),t.width),V=Z/a;return V>t.height&&(V=t.height,Z=V*a),{x:Math.min(Math.max(D.x,0),Math.max(0,t.width-Z)),y:Math.min(Math.max(D.y,0),Math.max(0,t.height-V)),w:Z,h:V}};b=k(b);const S=()=>{const D=b.x*g,P=b.y*g,Z=b.w*g,V=P-26;return{x:D+Z/2,y:V<14?P+24:V}},A=()=>{_.clearRect(0,0,f.width,f.height),_.imageSmoothingEnabled=!0,_.imageSmoothingQuality="high",_.drawImage(t,0,0,f.width,f.height);const D=b.x*g,P=b.y*g,Z=b.w*g,V=b.h*g;_.fillStyle="rgba(6,8,12,0.66)",_.fillRect(0,0,f.width,P),_.fillRect(0,P+V,f.width,Math.max(0,f.height-P-V)),_.fillRect(0,P,D,V),_.fillRect(D+Z,P,Math.max(0,f.width-D-Z),V),_.strokeStyle="rgba(255,255,255,0.30)",_.lineWidth=1;for(let Be=1;Be<3;Be++)_.beginPath(),_.moveTo(D+Z*Be/3,P),_.lineTo(D+Z*Be/3,P+V),_.stroke(),_.beginPath(),_.moveTo(D,P+V*Be/3),_.lineTo(D+Z,P+V*Be/3),_.stroke();_.strokeStyle="#ff8a3d",_.lineWidth=2,_.strokeRect(D+1,P+1,Math.max(1,Z-2),Math.max(1,V-2)),_.fillStyle="#ff8a3d",_.fillRect(D+Z-8,P+V-8,8,8);const ee=S(),ae=ee.x,fe=ee.y;_.strokeStyle="#ff8a3d",_.lineWidth=2,_.beginPath(),_.moveTo(ae,P),_.lineTo(ae,fe+9),_.stroke(),_.beginPath(),_.arc(ae,fe,9,0,Math.PI*2),_.fillStyle="#12161e",_.fill(),_.stroke(),_.fillStyle="#ff8a3d",_.font="bold 11px sans-serif",_.textAlign="center",_.textBaseline="middle",_.fillText("↻",ae,fe+1);const Me=g0(t,b,e,s,o,l,c),Ne=Me.width/Ve,Ie=ja(e),$e=Ie.w*Ne,j=Ie.h*Ne,se=document.createElement("canvas");se.width=$e,se.height=j;const he=se.getContext("2d",{willReadFrequently:!0}),Ue=o?$e:Ie.w*11,ke=o?j:Ie.h*11;u.width=Ue,u.height=ke;const Fe=u.getContext("2d");if(he&&Fe){if(he.imageSmoothingEnabled=!1,he.drawImage(Me,Ie.x*Ne,Ie.y*Ne,$e,j,0,0,$e,j),e==="kanat"){const Be=he.getImageData(0,0,$e,j);for(let Ye=0;Ye<j;Ye++)for(let st=0;st<$e;st++){const Ge=Ie.x+Math.floor(st/Ne),pt=Ie.y+Math.floor(Ye/Ne);Qf[pt*Ve+Ge]||(Be.data[(Ye*$e+st)*4+3]=0)}he.putImageData(Be,0,0)}Fe.clearRect(0,0,Ue,ke),Fe.imageSmoothingEnabled=!1,e==="pelerin"&&(Fe.save(),Fe.translate(Ue,0),Fe.scale(-1,1)),Fe.drawImage(se,0,0,Ue,ke),e==="pelerin"&&Fe.restore()}u.style.imageRendering=o?"auto":"pixelated";const _t=Ne;v&&(v.textContent=`Doku: ${Ve*_t}×${Mt*_t} (kumaş ${n.w*_t}×${n.h*_t})`),h&&(h.textContent=`${Math.round(b.w)}×${Math.round(b.h)} px seçim`)},x=D=>{const P=f.getBoundingClientRect();return{x:(D.clientX-P.left)/Math.max(1,P.width)*f.width/g,y:(D.clientY-P.top)/Math.max(1,P.height)*f.height/g}};let w=null;f.addEventListener("pointerdown",D=>{const P=x(D),Z=14/g,V=S(),ee=V.x,ae=V.y,fe=(D.clientX-f.getBoundingClientRect().left)/Math.max(1,f.getBoundingClientRect().width)*f.width,Me=(D.clientY-f.getBoundingClientRect().top)/Math.max(1,f.getBoundingClientRect().height)*f.height,Ne={x:b.x+b.w/2,y:b.y+b.h/2},Ie=Math.atan2(P.y-Ne.y,P.x-Ne.x)*180/Math.PI;Math.hypot(fe-ee,Me-ae)<=14?w={tip:"don",px:P.x,py:P.y,sec:{...b},aci:Ie,don:c}:w={tip:Math.hypot(P.x-(b.x+b.w),P.y-(b.y+b.h))<Z?"boyut":"tasi",px:P.x,py:P.y,sec:{...b}},f.setPointerCapture(D.pointerId),D.preventDefault()}),f.addEventListener("pointermove",D=>{if(!w)return;const P=x(D),Z=P.x-w.px,V=P.y-w.py;if(w.tip==="don"){const ee={x:b.x+b.w/2,y:b.y+b.h/2},ae=Math.atan2(P.y-ee.y,P.x-ee.x)*180/Math.PI;let fe=(w.don??0)+(ae-(w.aci??ae));fe=(fe%360+360)%360,D.shiftKey&&(fe=Math.round(fe/15)*15),c=fe,U()}else if(w.tip==="tasi")b=k({x:w.sec.x+Z,y:w.sec.y+V,w:w.sec.w,h:w.sec.h});else{const ee=Math.max(w.sec.w+Math.max(Z,V*a),4);b=k({x:w.sec.x,y:w.sec.y,w:ee})}A()});const R=()=>{w=null};f.addEventListener("pointerup",R),f.addEventListener("pointercancel",R),f.addEventListener("wheel",D=>{D.preventDefault();const P=D.deltaY<0?1.12:1/1.12,Z=b.x+b.w/2,V=b.y+b.h/2,ee=b.w*P;b=k({x:Z-ee/2,y:V-ee/a/2,w:ee}),A()},{passive:!1});const L=()=>{m&&(m.textContent=s?"Sadece seçtiğin dikdörtgen yazılır. İç astar, yanlar ve alt şerit BOŞ kalır.":"Desen kumaşın tamamına oturur: iç astar aynası ve yan/üst/alt şeritler otomatik tamamlanır.")};L(),d.querySelectorAll("[data-mod]").forEach(D=>{D.addEventListener("click",()=>{s=D.dataset.mod==="duz",d.querySelectorAll("[data-mod]").forEach(P=>P.classList.toggle("aktif",P===D)),L()})});const U=()=>{const D=d.querySelector("#kz-kirp-ayar-not"),P=d.querySelector("#kz-kirp-don"),Z=Math.round(c);P&&(P.textContent=`${Z}°`,P.classList.toggle("aktif",Z!==0)),D&&(Z===0&&!l?D.textContent="Çerçevenin üstündeki yuvarlak tutamacı fareyle çevirerek istediğin açıya getir. Fotoğrafın dışında kalan yerler pelerinde SİYAH, elitrada SAYDAM kalır.":D.textContent=`${Z?Z+"° döndürüldü":""}${Z&&l?" · ":""}${l?"aynalandı":""} — boş kalan yerler pelerinde SİYAH, elitrada SAYDAM.`)};d.querySelector("#kz-kirp-ayna")?.addEventListener("click",D=>{l=!l,D.currentTarget.classList.toggle("aktif",l),U(),A()}),d.querySelector("#kz-kirp-don")?.addEventListener("click",D=>{c=0,D.currentTarget.classList.remove("aktif"),D.currentTarget.textContent="0°",U(),A()}),U(),d.querySelector("#kz-kirp-piksel")?.addEventListener("change",D=>{o=D.target.checked,A()});const B=()=>{document.removeEventListener("keydown",C),d.remove()},C=D=>{D.key==="Escape"&&(D.preventDefault(),B())};document.addEventListener("keydown",C);const H=d.querySelector("#kz-kirp-uygula");H?.addEventListener("click",()=>{H.disabled||(H.disabled=!0,H.textContent="Kaydediliyor…",nT(i,e,t,{...b},s,o,l,c).then(()=>B()).catch(D=>{H.disabled=!1,H.innerHTML=`${G("check")} Uygula`,X(String(D),"err")}))}),d.querySelector("#kz-kirp-kapat")?.addEventListener("click",B),d.querySelector("#kz-kirp-iptal")?.addEventListener("click",B),d.addEventListener("pointerdown",D=>{D.target===d&&B()}),A()}function aT(i,e,t){const n=document.createElement("canvas");n.width=Ve,n.height=Mt;const a=n.getContext("2d",{willReadFrequently:!0});if(!a)throw new Error("tuval yok");a.imageSmoothingEnabled=!1,a.drawImage(t,0,0,Ve,Mt);const r=Qu(a);if(pi(r))throw new Error("pafta boş görünüyor");const s=It(e);yn[e].push(s.slice()),yn[e].length>pc&&yn[e].shift(),Qa[e].length=0;for(let o=0;o<On;o++)s[o]=r[o];qt[e]=!1,Vt[e]=null,ga[e]=!1,ei(i,e),ra(i,e),X("Pafta okundu — 64×32 atlas yüklendi.")}async function rT(i,e,t){try{const n=await jw(t);if(!n)return;const a=n.width/Math.max(1,n.height);if(Math.abs(a-2)<.02&&n.height>=32&&n.height<=128){aT(i,e,n);return}iT(i,e,n)}catch(n){X(String(n),"err")}}async function sT(i,e){let t;try{t=await ne("cmd_kozmetik_oku")}catch{return!1}const n=e==="pelerin"?t.pelerin_dosya:t.kanat_dosya;if(!n)return!1;const a=e==="pelerin"?t.pelerin:t.kanat;if(Array.isArray(a)&&a.length===On&&!pi(a)){const r=It(e);for(let s=0;s<On;s++)r[s]=a[s]??"";qt[e]=!1,Vt[e]=null}else qt[e]=!0,Vt[e]=String(n);return e==="pelerin"?Ds=!0:Is=!0,ei(i,e),ra(i,e),!0}async function gc(i,e){const t=It(e),n=!pi(t),a=e==="pelerin"?"Pelerin":"Elitra";if(qt[e]){X(`${a} HD fotoğraf olarak kayıtlı. Değiştirmek için yeni fotoğraf yükle.`);return}if(!n&&!ga[e]){const d=await sT(i,e);X(d?`${a} diskte kayıtlı — silmek için "Kaldır"ı kullan.`:`Kaydedilecek bir ${a.toLocaleLowerCase("tr")} tasarımı yok.`);return}const r=i.querySelector(`#kz-${e}-kaydet`),s=r?r.innerHTML:"",o=`${Date.now()}-${Math.random()}`,l=(d,f)=>{r&&(r.dataset.jeton=o,r.classList.remove("tamam","hata","bekliyor"),r.classList.add(f),r.textContent=d,r.disabled=!0)},c=d=>{r&&window.setTimeout(()=>{r.dataset.jeton===o&&(r.innerHTML=s,r.disabled=!1,r.classList.remove("tamam","hata","bekliyor"))},d)};l("Kaydediliyor…","bekliyor");try{const d=await nf(e,t.slice());ga[e]=!1;try{n?localStorage.setItem(`yikim:kozmetik:${e}:yedek`,JSON.stringify(t)):localStorage.removeItem(`yikim:kozmetik:${e}:yedek`)}catch{}if(e==="pelerin"?Ds=n:Is=n,eh(i,e),l("Kaydedildi ✓","tamam"),c(1800),!n){X(`${a} kaldırıldı — oyunda ${e==="kanat"?"normal elitra":"görünmeyecek"}.`);return}d.yuklendi?X(`${a} kaydedildi — oyunda ve diğer oyuncularda görünecek.`):X(`${a} kaydedildi (yerel). Sunucu: ${Cw(d.hata||"ulaşılamadı")}`)}catch(d){l("Kaydedilemedi","hata"),c(2200),X(String(d),"err")}}let eo=null;function oT(i){if(!eo||!eo.isConnected)return;const e=i.target;if(e&&(e.tagName==="INPUT"||e.tagName==="TEXTAREA"||e.isContentEditable)||!(i.ctrlKey||i.metaKey)||i.altKey)return;const t=i.key.toLowerCase();t==="z"&&!i.shiftKey?(i.preventDefault(),u0(eo,Yt)):(t==="z"&&i.shiftKey||t==="y")&&(i.preventDefault(),f0(eo,Yt))}window.addEventListener("keydown",oT);function lT(){na.home=eE,na.instances=_E,na.explore=LE,na.news=BE,na.settings=Qs,na.skins=Uc,na.kozmetik=Pw}let pr=null;const ms=i=>i.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function cT(){pr||(pr=document.createElement("div"),pr.className="drop-veil",pr.innerHTML=`
    <div class="drop-box">
      <div class="drop-glyph">⇣</div>
      <b>Bırak ve yükle</b>
      <span>Mod (.jar) · Mod paketi (.mrpack / CurseForge .zip) · Dünya · Doku &amp; Shader (.zip) · Emote (.emotecraft)</span>
    </div>`,document.body.appendChild(pr))}function Mm(){pr?.remove(),pr=null}async function dT(i){const e=i.split(/[\\/]/).pop()||i;let t="";try{t=await ne("cmd_route_dropped",{path:i})}catch(n){X(`Dosya tanınamadı: ${n}`,"err");return}try{if(t==="modpack"){const n=en(`
        <h3 style="margin-bottom:6px">Mod paketi kurulacak</h3>
        <p><b>${ms(e)}</b> yeni bir kurulum olarak kurulsun mu?<br />
        <span style="font-size:11px; color:var(--text-faint)">İçindeki sürüm listesi otomatik indirilir.</span></p>
        <div style="display:flex; gap:8px; margin-top:14px; justify-content:flex-end">
          <button class="btn ghost sm" id="dp-no">İptal</button>
          <button class="btn primary sm" id="dp-go">Paketi Kur</button>
        </div>`);let a=!1;if(n.root.querySelector("#dp-no")?.addEventListener("click",()=>n.close()),n.root.querySelector("#dp-go")?.addEventListener("click",()=>{a=!0,n.close()}),await new Promise(s=>{const o=setInterval(()=>{document.body.contains(n.root)||(clearInterval(o),s())},150)}),!a){X("Kurulum iptal edildi");return}X("Paket indiriliyor — süreç panelinden takip edebilirsin"),No("Sürüklenen paket kurulumu");let r="Paket";try{const s=await ne("cmd_import_pack_file",{path:i,name:null});r=s.name||"Paket",await Jt(),Ls(),qe("instances"),Kf(s)}catch(s){Cs(String(s))}X(`${r} kuruldu ✓`)}else if(t==="jar"){const n=await af(`Mod eklenecek kurulum: <b>${ms(e)}</b>`);if(!n)return;await ne("cmd_add_content_path",{instanceId:n.id,kind:"mods",path:i});const a=n.mod_loader&&n.mod_loader!=="fabric"?" — DİKKAT: bu kurulum Fabric olmadığı için çalışmayabilir":"";X(`Mod eklendi: ${e}${a}`,a?"err":"ok")}else if(t==="world"){const n=await af(`Dünya yüklenecek kurulum: <b>${ms(e)}</b>`);if(!n)return;await ne("cmd_add_content_path",{instanceId:n.id,kind:"saves",path:i}),X(`Dünya yüklendi: ${e}`)}else if(t==="emote"){const n=await ne("cmd_import_emote_dosyasi",{path:i});X(`Emote vitrine eklendi: ${n.adi}`)}else t==="zip"?await uT(i,e):X(`${e} tanınmadı — .jar, .mrpack, dünya zip'i, doku/shader zip'i veya dünya klasörü bırak`,"err")}catch(n){X(`Kurulamadı: ${n}`,"err")}}async function uT(i,e){const t=en(`
    <h3 style="margin-bottom:6px">Bu zip nedir?</h3>
    <p><b>${ms(e)}</b> ne tür bir içerik?</p>
    <div style="display:flex; flex-direction:column; gap:8px; margin-top:14px">
      <button class="btn ghost" data-k="resourcepacks">Doku Paketi</button>
      <button class="btn ghost" data-k="shaderpacks">Shader</button>
      <button class="btn ghost" data-k="saves_zip">Dünya (zip açılır → dünyalar)</button>
      <button class="btn ghost" id="dp-cancel">İptal</button>
    </div>`);let n="";if(t.root.querySelectorAll("[data-k]").forEach(r=>r.addEventListener("click",()=>{n=r.dataset.k||"",t.close()})),t.root.querySelector("#dp-cancel")?.addEventListener("click",()=>t.close()),await new Promise(r=>{const s=setInterval(()=>{document.body.contains(t.root)||(clearInterval(s),r())},150)}),!n)return;const a=await af(n==="saves_zip"?"Dünya yüklenecek kurulum":"İçerik eklenecek kurulum");a&&(await ne("cmd_add_content_path",{instanceId:a.id,kind:n,path:i}),X(`Eklendi: ${e}`))}function af(i){return new Promise(e=>{const t=te.instances||[];if(!t.length){X("Önce Paketler sekmesinde bir kurulum oluştur","err"),e(null);return}if(t.length===1){e(t[0]);return}const n=en(`
      <h3 style="margin-bottom:6px">${i}</h3>
      <p style="font-size:11px; color:var(--text-faint)">Kurulum seç</p>
      <div class="inst-pick">
        ${t.map(r=>`
          <button class="btn ghost" data-id="${r.id}">
            <span style="font-size:18px">${r.icon||"📦"}</span>
            <span style="flex:1; text-align:left; overflow:hidden; text-overflow:ellipsis; white-space:nowrap">${ms(String(r.name))}</span>
            <span style="font-size:11px; color:var(--text-faint)">${ms(String(r.mc_version||""))}</span>
          </button>`).join("")}
      </div>`);n.root.querySelectorAll("[data-id]").forEach(r=>{r.addEventListener("click",()=>{const s=t.find(o=>o.id===r.dataset.id)||null;n.close(),e(s)})});const a=setInterval(()=>{document.body.contains(n.root)||(clearInterval(a),e(null))},150)})}function fT(){try{const i=window.__TAURI__?.window?.getCurrentWindow?.();if(!i?.onDragDropEvent)return;i.onDragDropEvent(async e=>{const t=e?.payload??e??{},n=t.type;if(n==="enter"||n==="over")cT();else if(n==="drop"){Mm();const a=t.paths||[];for(const r of a)await dT(r)}else Mm()})}catch{}}const Gl=[{page:"home",sel:null,title:"YIKIMLient'e hoş geldin",text:"60 saniyede öğrenelim — İleri'ye tıkladıkça her sekme animasyonla gösterilecek."},{page:"home",sel:'.rail-item[data-page="home"]',title:"Ana Sayfa",text:"Kurulumunu seç, Oyna'ya bas — saniyeler içinde oyundasın. Sınırsız FPS ve Agresif ayarlar otomatik hazırdır."},{page:"instances",sel:'.rail-item[data-page="instances"]',title:"Paketler",text:"Kurulumlarını yönettiğin yer: modlar, dünyalar, doku & shader'lar. Bonus: dosyayı bu ekrana sürükleyip bırak — mod, paket, dünya, hepsi otomatik kurulur."},{page:"explore",sel:'.rail-item[data-page="explore"]',title:"Keşfet",text:"Modrinth & CurseForge içinde arama: mod, mod paketi, doku, shader, dünya — tek tıkla seçili kuruluma iner."},{page:"news",sel:'.rail-item[data-page="news"]',title:"Haberler",text:"YIKIMLient duyuruları ve Minecraft haberleri burada."},{page:"settings",sel:'.rail-item[data-page="settings"]',title:"Ayarlar",text:"Görsel dünyalar (5 tema!), Discord Rich Presence, Java profilleri (Agresif FPS dahil), RAM — hepsi burada."},{page:"kozmetik",sel:'.rail-item[data-page="kozmetik"]',title:'Kozmetikler — "Yol Silindiri" kuralı',text:`Hesabını Discord'da doğruladıktan sonra kendi pelerinini ve elıtranı burada çizebilirsin. Çizme izni, sunucudaki YIKIM etiketi/"Yol Silindiri" rolüne bağlıdır: rolü bırakırsan izin anında kapanır, tasarımın bilgisayarında kalır ve görünümün varsayılan YIKIM pelerinine döner; etiketi yeniden alınca aynı tasarım geri gelir.`},{page:"home",sel:null,title:"Hazırsın!",text:"İyi oyunlar — YIKIM hep HIZ. Bu rehber artık gösterilmeyecek."}];let Hd=null;function hT(i,e){const t=window.innerWidth,n=window.innerHeight,a=e.offsetWidth,r=e.offsetHeight,s=l=>Math.max(12,Math.min(l,t-a-12)),o=l=>Math.max(14,Math.min(l,n-r-14));if(i){const l=i.right+16,c=i.left-16-a;let d;l+a<=t-12?d=l:c>=12?d=c:d=(t-a)/2;let f=i.top+i.height/2-r/2;f<14&&(f=i.bottom+16),e.style.left=`${s(d)}px`,e.style.top=`${o(f)}px`,e.style.transform="none"}else e.style.left=`${Math.max(12,(t-a)/2)}px`,e.style.top=`${o((n-r)/2)}px`,e.style.transform="none"}function Em(i,e){const t=Gl[e],n=i.querySelector(".spot"),a=i.querySelector(".tc");qe(t.page);const r=a.querySelector(".tc-step");r.innerHTML=Gl.map((l,c)=>`<i class="${c<=e?"done":""}"></i>`).join(""),a.querySelector("h3").textContent=t.title,a.querySelector("p").textContent=t.text;const s=a.querySelector(".tc-next");s.textContent=e===Gl.length-1?"Tamam ✓":"İleri →";let o=null;if(t.sel){const l=document.querySelector(t.sel);l&&(o=l.getBoundingClientRect())}o?(n.style.opacity="1",n.style.left=`${o.left-6}px`,n.style.top=`${o.top-6}px`,n.style.width=`${o.width+6*2}px`,n.style.height=`${o.height+6*2}px`):n.style.opacity="0",hT(o,a),ua.fromTo(a,{y:14,autoAlpha:0},{y:0,autoAlpha:1,duration:.38,ease:"power3.out",clearProps:"transform"})}function pT(){if(Hd||te.config?.guided_tour_done)return;const i=document.createElement("div");i.className="yikim-tour",i.innerHTML=`
    <div class="spot"></div>
    <div class="tc">
      <span class="tc-step"></span>
      <h3></h3>
      <p></p>
      <div class="tc-actions">
        <button class="btn ghost sm tc-skip">Atla</button>
        <button class="btn primary sm tc-next">İleri →</button>
      </div>
    </div>`,document.body.appendChild(i),Hd=i;let e=0;const t=async()=>{i.remove(),Hd=null,document.removeEventListener("keydown",a),qe("home");try{te.config={...te.config,guided_tour_done:!0},await ne("cmd_save_settings",{config:te.config}),await Jt()}catch{}},n=()=>{if(e+=1,e>=Gl.length){t();return}Em(i,e)},a=r=>{r.key==="Enter"||r.key==="ArrowRight"?(r.preventDefault(),n()):r.key==="Escape"&&(r.preventDefault(),t())};document.addEventListener("keydown",a),i.querySelector(".tc-skip")?.addEventListener("click",()=>void t()),i.querySelector(".tc-next")?.addEventListener("click",n),Em(i,e)}let os=null,Vl=null;function fr(){Vl!==null&&(clearInterval(Vl),Vl=null)}function wm(i){return i.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}async function rf(){try{te.config={...te.config,onboarding_done:!0},await ne("cmd_save_settings",{config:te.config}),await Jt()}catch{}}function Gd(i){fr(),os?.remove(),os=null,rf(),qe("home")}function mT(){if(os)return!0;if(te.config?.onboarding_done)return!1;if(!(te.accounts.length===0&&te.instances.length===0))return rf(),!1;const e=document.createElement("div");e.className="yikim-ob",e.innerHTML='<div class="ob-card"></div>',document.body.appendChild(e),os=e;const t=e.querySelector(".ob-card"),n=u=>`<div class="ob-dots">${[0,1,2,3,4].map(h=>`<i class="${h<=u?"done":""}"></i>`).join("")}</div>`,a=u=>`
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
    `,t.querySelector("#ob-skip")?.addEventListener("click",()=>Gd()),t.querySelector("#ob-next")?.addEventListener("click",s)}function s(){fr(),t.innerHTML=`
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
    `,t.querySelector("#ob-back")?.addEventListener("click",()=>{fr(),r()}),t.querySelector("#ob-skip")?.addEventListener("click",()=>Gd());const u=t.querySelector("#ob-acc-ok"),h=t.querySelector("#ob-next"),v=t.querySelector("#ob-ms-durum"),m=t.querySelector("#ob-off-uyari"),p=t.querySelector("#ob-ms"),g=t.querySelector("#ob-off-go"),_=t.querySelector("#ob-off-ad"),T=k=>{u.style.display="flex",u.textContent=`✓ Hesap hazır: ${k}`,h.disabled=!1,fr()};te.accounts.length?T(te.accounts[0]?.name??""):h.disabled=!0,p.addEventListener("click",async()=>{if(!p.disabled){p.disabled=!0,v.style.display="block",v.innerHTML='<span class="spinner"></span> Microsoft oturum penceresi açılıyor…';try{const k=await ne("cmd_ms_login_begin");await Jt(),v.textContent="",v.style.display="none",T(k?.name??te.accounts[0]?.name??"")}catch(k){v.textContent=String(k),p.disabled=!1}}});const b=async()=>{if(g.disabled)return;const k=_.value.trim();if(k.length<3){m.textContent="İsim en az 3 karakter olmalı.",_.focus();return}m.textContent="",g.disabled=!0,g.textContent="…";try{await ne("cmd_add_offline_account",{name:k}),await Jt(),T(k),g.textContent="✓"}catch(S){m.textContent=String(S),g.disabled=!1,g.textContent="Giriş"}};g.addEventListener("click",()=>void b()),_.addEventListener("keydown",k=>{k.key==="Enter"&&(k.preventDefault(),b())}),Vl=setInterval(()=>{te.accounts.length&&T(te.accounts[0]?.name??"")},600),h.addEventListener("click",()=>{fr(),o()})}function o(){fr(),mr(),t.innerHTML=`
      ${n(2)}
      <div class="ob-step-label">3 / 5 — Doğrulama</div>
      <h2 style="font-size:16px">Hesabını doğrula</h2>
      <p class="ob-sub" style="margin-bottom:10px">
        Discord ile bağla, şifre oluştur. Doğrulanmayan hesap da oynar;
        yalnız kozmetik/skin değiştiremez (adının başında ✕ görünür).
      </p>
      <div id="ob-gv"></div>
      ${a({back:!0,next:"İleri →",nextId:"ob-next",skip:"Şimdi değil",skipId:"ob-skip"})}
    `;const u=t.querySelector("#ob-gv");u&&gr(u),t.querySelector("#ob-back")?.addEventListener("click",()=>{mr(),s()}),t.querySelector("#ob-skip")?.addEventListener("click",()=>{mr(),l()}),t.querySelector("#ob-next")?.addEventListener("click",()=>{mr(),l()})}async function l(){let u=[];try{u=(await ne("cmd_list_versions")).all?.slice(0,80)??[]}catch{}t.innerHTML=`
      ${n(3)}
      <div class="ob-step-label">4 / 5 — İlk paket</div>
      <h2 style="font-size:16px">İlk oyun dünyasını oluştur</h2>
      <p class="ob-sub" style="margin-bottom:8px">Fabric + YIKIM çekirdeği otomatik; standart FPS modları dahil.</p>
      <label class="ob-lab">Paket adı</label>
      <input class="input" id="ob-name" value="Yeni Kurulum" maxlength="40" />
      <label class="ob-lab">Minecraft sürümü</label>
      <select class="input" id="ob-version">
        ${u.map(v=>`<option value="${wm(v)}">${wm(v)}</option>`).join("")||'<option value="1.21.11">1.21.11</option>'}
      </select>
      <div class="ob-ok" id="ob-inst-ok" style="display:none"></div>
      ${a({back:!0,next:"Kurulum Oluştur",nextId:"ob-create"})}
      <button class="btn ghost sm" id="ob-explore" style="width:100%; margin-top:10px">
        Ya da hazır mod paketi indir (Keşfet)
      </button>
    `,t.querySelector("#ob-back")?.addEventListener("click",o);let h=null;t.querySelector("#ob-create")?.addEventListener("click",async v=>{const m=v.currentTarget;m.disabled=!0,m.innerHTML='<span class="spinner"></span> Oluşturuluyor…';const p=t.querySelector("#ob-name").value.trim()||"Yeni Kurulum",g=t.querySelector("#ob-version").value;try{h=await ne("cmd_create_instance",{instance:{name:p,mc_version:g,mod_loader:"fabric",ram_mb:te.config?.default_ram_mb||4096,java_preset_id:te.config?.default_java_preset||"balanced",standard_mods:!0}});const _=t.querySelector("#ob-inst-ok");_.style.display="flex",_.textContent=`✓ Kurulum hazır: ${h.name}`,m.textContent="✓ Oluşturuldu",await Jt(),setTimeout(()=>c(),700)}catch(_){f(`Kurulum oluşturulamadı: ${_}`),m.disabled=!1,m.textContent="Kurulum Oluştur"}}),t.querySelector("#ob-explore")?.addEventListener("click",()=>{d()})}function c(){t.innerHTML=`
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
    `,t.querySelector("#ob-done")?.addEventListener("click",()=>Gd())}return r(),!0;function d(){fr(),os?.remove(),os=null,rf(),qe("explore","kind:modpack")}function f(u){tt(()=>Promise.resolve().then(()=>vt),void 0).then(h=>h.toast(u,"err"))}}const Rr=Math.PI*2;function vc(){return getComputedStyle(document.documentElement).getPropertyValue("--accent").trim()||"#ff7a18"}function gT(i,e){const t=i.match(/^#?([0-9a-f]{6})$/i);if(!t)return i;const n=parseInt(t[1],16);return`rgba(${Math.round((n>>16&255)*e)},${Math.round((n>>8&255)*e)},${Math.round((n&255)*e)},1)`}function Fc(i,e){i.fillStyle=e.hue,i.beginPath(),i.arc(e.x,e.y,e.r,0,Rr),i.fill()}function Tm(i,e){const t=e?gT(vc(),.88):vc(),n=a=>({x:Math.random()*a[0],y:a[1]+10,vx:(Math.random()-.5)*12,vy:-(28+Math.random()*44)*(e?.75:1),r:e?2.6:1.2+Math.random()*1.6,a:.95,life:0,max:6+Math.random()*5,hue:t,seed:Math.random()*Rr});return{base:e?24:30,spawn:n,step:(a,r,s)=>{a.x+=(a.vx+Math.sin(a.seed+a.life*2.1)*9)*r*(1+i*r),a.y+=a.vy*r,a.a=Math.max(0,1-a.life/a.max*1.05),(a.y<-12||a.a<=0)&&Object.assign(a,n(s))},draw:Fc}}function Vd(i){const e=t=>({x:Math.random()*t[0],y:Math.random()*t[1],vx:(Math.random()-.5)*7,vy:(Math.random()-.5)*7,r:.9+Math.random()*1.5,a:.3,life:0,max:9+Math.random()*8,hue:i,seed:Math.random()*Rr});return{base:26,spawn:e,step:(t,n,a)=>{t.x+=t.vx*n,t.y+=t.vy*n,t.x<-8&&(t.x=a[0]+8),t.x>a[0]+8&&(t.x=-8),t.y<-8&&(t.y=a[1]+8),t.y>a[1]+8&&(t.y=-8),t.a=.16+.4*Math.sin(t.life/t.max*Math.PI),t.life>t.max&&Object.assign(t,e(a))},draw:Fc}}function vT(){const i=e=>({x:Math.random()*e[0],y:-8,vx:(Math.random()-.5)*8,vy:13+Math.random()*24,r:1+Math.random()*2.6,a:.8,life:0,max:20,hue:"#ffffff",seed:Math.random()*Rr});return{base:36,spawn:i,step:(e,t,n)=>{e.x+=(e.vx+Math.sin(e.seed+e.life*1.2)*11)*t,e.y+=e.vy*t,e.y>n[1]+10&&Object.assign(e,i(n))},draw:Fc}}function _T(){const i=vc(),e=t=>({x:Math.random()*t[0],y:t[1]+10,vx:(Math.random()-.5)*9,vy:-(18+Math.random()*26),r:1.4+Math.random()*2.6,a:.5,life:0,max:14,hue:i,seed:Math.random()*Rr});return{base:16,spawn:e,step:(t,n,a)=>{t.x+=(t.vx+Math.sin(t.seed+t.life*2.2)*7)*n,t.y+=t.vy*n,t.vy-=2.5*n,t.y<-14&&Object.assign(t,e(a))},draw:(t,n)=>{t.strokeStyle=n.hue,t.lineWidth=1,t.beginPath(),t.arc(n.x,n.y,n.r*1.7,0,Rr),t.stroke()}}}function yT(){const i=vc(),e=t=>({x:Math.random()*t[0],y:Math.random()*-t[1],vx:0,vy:170+Math.random()*260,r:1,a:.4+Math.random()*.4,life:0,max:30,hue:i,seed:0});return{base:20,spawn:e,step:(t,n,a)=>{t.y+=t.vy*n,t.y>a[1]+40&&Object.assign(t,e(a))},draw:(t,n)=>{t.strokeStyle=n.hue,t.lineWidth=n.a*1.3,t.beginPath(),t.moveTo(n.x,n.y),t.lineTo(n.x,n.y-14-n.a*16),t.stroke()}}}function Sl(i){return{base:24,spawn:t=>({x:Math.random()*t[0],y:Math.random()*t[1],vx:0,vy:0,r:.8+Math.random()*1.3,a:0,life:Math.random()*4,max:2.6+Math.random()*3.4,hue:i,seed:Math.random()*Rr}),step:(t,n,a)=>{t.a=Math.max(0,Math.sin(t.life/t.max*Math.PI))*.9,t.life>t.max&&(t.life=0)},draw:Fc}}function bT(i){switch(i){case"pano":return Tm(.5,!1);case"sahne":return Sl("rgba(255,171,77,0.75)");case"sokum":return Tm(.9,!0);case"afis":return Vd("rgba(63,50,38,0.5)");case"standart":return Sl("rgba(147,168,255,0.5)");case"sira":return Sl("rgba(163,230,53,0.85)");case"rihtim":return _T();case"oda":return Vd("rgba(224,48,30,0.6)");case"kumas":return Vd("rgba(138,122,92,0.5)");case"perde":return Sl("rgba(212,175,55,0.8)");case"buz":return vT();case"skala":return yT();default:return null}}let Xn=null,Ui=null,Pa=null,ts=[],Tn=0,uo=0,v0=1,_0=33,Bc=!1;function nh(){return Math.min(window.devicePixelRatio||1,1.5)}function qd(){Tn&&cancelAnimationFrame(Tn),Tn=0,Pa=null,ts=[],Xn&&(Xn.remove(),Xn=null,Ui=null)}function _c(i){if(Tn=0,!Ui||!Xn||!Pa||Bc||document.hidden)return;if(i-uo<_0){Tn=requestAnimationFrame(_c);return}const e=Math.min((i-uo)/1e3,.06);uo=i,Tn=requestAnimationFrame(_c);const t=nh();Ui.setTransform(t,0,0,t,0,0),Ui.clearRect(0,0,window.innerWidth,window.innerHeight);const n=[window.innerWidth,window.innerHeight],a=Math.max(1,Math.round(Pa.base*v0));for(;ts.length<a;){const r=Pa.spawn(n);r.life=Math.random()*r.max,ts.push(r)}for(;ts.length>a;)ts.pop();for(const r of ts)r.life+=e,Pa.step(r,e,n),Ui.globalAlpha=r.a,Pa.draw(Ui,r);Ui.globalAlpha=1}function y0(){Pa&&Ui&&!Tn&&!document.hidden&&!Bc&&(uo=performance.now(),Tn=requestAnimationFrame(_c))}document.addEventListener("visibilitychange",()=>{document.hidden?(Tn&&cancelAnimationFrame(Tn),Tn=0):y0()});window.addEventListener("blur",()=>{Bc=!0,Tn&&cancelAnimationFrame(Tn),Tn=0});window.addEventListener("focus",()=>{Bc=!1,y0()});window.addEventListener("resize",()=>{if(!Xn||!Ui)return;const i=nh();Xn.width=Math.round(innerWidth*i),Xn.height=Math.round(innerHeight*i)});function xT(){const i=String(te.config?.fx_particles??"mid"),e=document.documentElement.getAttribute("data-world")||"pano",t=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(i==="none"||t){qd();return}const n=bT(e);if(!n){qd();return}v0={low:.45,mid:.9,high:1.6}[i]??1,_0=1e3/({low:25,mid:30,high:40}[i]??30),qd(),Pa=n;const s=nh();Xn=document.createElement("canvas"),Xn.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:3",Xn.width=Math.round(innerWidth*s),Xn.height=Math.round(innerHeight*s),document.body.appendChild(Xn),Ui=Xn.getContext("2d"),uo=performance.now(),Tn=requestAnimationFrame(_c)}function kT(){return getComputedStyle(document.documentElement).getPropertyValue("--accent").trim()||"#ff7a18"}function ST(i){return`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M4 2 L18 13.5 L11.2 14.2 L15.6 21.2 L12.8 22.8 L8.6 15.8 L4 19.4 Z" fill="${i}" stroke="#ffffff" stroke-opacity="0.72" stroke-width="1.6" stroke-linejoin="round"/></svg>`}function MT(i){return`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><circle cx="12" cy="12" r="7.2" fill="none" stroke="${i}" stroke-width="2"/><circle cx="12" cy="12" r="1.7" fill="${i}"/><path d="M12 1.6 V5.2 M12 18.8 V22.4 M1.6 12 H5.2 M18.8 12 H22.4" stroke="${i}" stroke-width="2"/></svg>`}function ET(i){return`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><circle cx="8" cy="8" r="3.2" fill="${i}" stroke="#ffffff" stroke-opacity="0.8" stroke-width="1.2"/></svg>`}const wT={yikim:{build:ST,spot:"3 2"},hedef:{build:MT,spot:"12 12"},nokta:{build:ET,spot:"8 8"}};function TT(){const i=String(te.config?.cursor_style||"standart"),e=document.documentElement,t=wT[i];if(!t){e.removeAttribute("data-custom-cursor"),e.style.removeProperty("--yikim-cursor");return}const n=t.build(kT());e.style.setProperty("--yikim-cursor",`url("data:image/svg+xml,${encodeURIComponent(n)}") ${t.spot}, auto`),e.setAttribute("data-custom-cursor","1")}const Qe=`xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
  stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"`,AT=`<svg ${Qe}><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M10 21v-6h4v6"/></svg>`,RT=`<svg ${Qe}><rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/></svg>`,LT=`<svg ${Qe}><circle cx="12" cy="12" r="9"/><path d="m15.2 8.8-1.9 4.5-4.5 1.9 1.9-4.5z"/></svg>`,CT=`<svg ${Qe}><path d="M4 6.5A1.5 1.5 0 0 1 5.5 5h13A1.5 1.5 0 0 1 20 6.5v11a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5z"/><path d="M8 9h5v5H8z"/><path d="M16 9h1M16 12h1M16 15h1M8 16.5h5"/></svg>`,PT=`<svg ${Qe}><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>`,DT=`<svg ${Qe}><path d="M12 5v14M5 12h14"/></svg>`,IT=`<svg ${Qe}><circle cx="11" cy="11" r="7"/><path d="m20.5 20.5-4.2-4.2"/></svg>`,zT='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8.5 5.9v12.2a.8.8 0 0 0 1.22.68l9.87-6.1a.8.8 0 0 0 0-1.36L9.72 5.22A.8.8 0 0 0 8.5 5.9Z"/></svg>',UT=`<svg ${Qe}><rect x="3.5" y="4.5" width="17" height="15" rx="2"/><circle cx="9" cy="10" r="1.6"/><path d="m3.5 16 4.4-4.4a1.4 1.4 0 0 1 2 0l4.6 4.4"/><path d="m13.6 15 2.3-2.3a1.4 1.4 0 0 1 2 0l2.6 2.5"/></svg>`,NT=`<svg ${Qe}><path d="M3.5 7.5v10a1.5 1.5 0 0 0 1.5 1.5h13.6a1.5 1.5 0 0 0 1.4-1l1.6-4.5a1 1 0 0 0-.94-1.35H7.2a2 2 0 0 0-1.9 1.37L3.5 17.5"/><path d="M3.5 7.5v-2A1.5 1.5 0 0 1 5 4h4l1.6 2H19a1.5 1.5 0 0 1 1.5 1.5v2"/></svg>`,OT=`<svg ${Qe}><path d="M4 7h16M9.5 4h5M6.5 7l.8 12a1.5 1.5 0 0 0 1.5 1.4h6.4a1.5 1.5 0 0 0 1.5-1.4l.8-12"/><path d="M10 11v6M14 11v6"/></svg>`,FT=`<svg ${Qe}><path d="m7 20.5-3.8-3.8a2 2 0 0 1 0-2.8l9.4-9.4a2 2 0 0 1 2.8 0l4.8 4.8a2 2 0 0 1 0 2.8l-8.4 8.4z"/><path d="M21.5 20.5H8.5"/><path d="m5.5 11.5 8.5 8.5"/></svg>`,BT=`<svg ${Qe}><rect x="9" y="9" width="11.5" height="11.5" rx="2"/><path d="M5.5 15H4.5A1.5 1.5 0 0 1 3 13.5v-9A1.5 1.5 0 0 1 4.5 3h9A1.5 1.5 0 0 1 15 4.5v1"/></svg>`,$T=`<svg ${Qe}><path d="M19 12H5M11 18l-6-6 6-6"/></svg>`,HT=`<svg ${Qe}><path d="m4.5 12.5 5 5 10-11"/></svg>`,GT=`<svg ${Qe}><circle cx="12" cy="8" r="4"/><path d="M4.5 20.5c.8-3.7 3.9-6 7.5-6s6.7 2.3 7.5 6"/></svg>`,VT=`<svg ${Qe}><path d="M10 4.5A1.5 1.5 0 0 1 11.5 3h1A1.5 1.5 0 0 1 14 4.5V6h4.5A1.5 1.5 0 0 1 20 7.5V11h-1.5a1.5 1.5 0 0 0 0 3H20v3.5a1.5 1.5 0 0 1-1.5 1.5H14v-1.5a1.5 1.5 0 0 0-3 0V20H6.5A1.5 1.5 0 0 1 5 18.5V15H3.5a1.5 1.5 0 0 1 0-3H5V7.5A1.5 1.5 0 0 1 6.5 6H10z"/></svg>`,qT=`<svg ${Qe}><path d="m12 3 8.5 4.5v9L12 21l-8.5-4.5v-9z"/><path d="M3.5 7.5 12 12l8.5-4.5M12 12v9"/></svg>`,WT=`<svg ${Qe}><rect x="6" y="6" width="12" height="12" rx="1.5"/><rect x="9.5" y="9.5" width="5" height="5" rx="1"/><path d="M9 2.5V6M15 2.5V6M9 18v3.5M15 18v3.5M2.5 9H6M2.5 15H6M18 9h3.5M18 15h3.5"/></svg>`,KT=`<svg ${Qe}><path d="M15 12h-5M15 8h-5M19 17V5a2 2 0 0 0-2-2H4"/><path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"/></svg>`,XT=`<svg ${Qe}><rect x="3" y="4.5" width="18" height="15" rx="2"/><path d="m7 9.5 3 3-3 3M12.5 15.5H17"/></svg>`,YT=`<svg ${Qe}><path d="M5 20V10M12 20V4M19 20v-7"/></svg>`,ZT=`<svg ${Qe}><path d="M12 4v11M7.5 11.5 12 16l4.5-4.5"/><path d="M4 20h16"/></svg>`,JT=`<svg ${Qe}><path d="M10 2v2M14 2v2M6 2v2"/><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"/></svg>`,jT=`<svg ${Qe}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>`,QT=`<svg ${Qe}><path d="M10 4.5 11.5 9l4.5 1.5L11.5 12 10 16.5 8.5 12 4 10.5 8.5 9z"/><path d="m18 15.5.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z"/></svg>`,e2=`<svg ${Qe}><path d="M13.5 3H6.5A1.5 1.5 0 0 0 5 4.5v15A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5V8.5z"/><path d="M13.5 3v5.5H19"/></svg>`,t2=`<svg ${Qe}><circle cx="12" cy="12" r="9"/><path d="M12 16v-4.5"/><circle cx="12" cy="8" r="1"/></svg>`,n2=`<svg ${Qe}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.2 2"/></svg>`,i2=`<svg ${Qe}><rect x="6.5" y="6.5" width="11" height="11" rx="1.5"/></svg>`,a2=`<svg ${Qe}><path d="M8.5 3 5 4.8 3 10l3.2 1.4.8-1.7V21h10V9.7l.8 1.7L21 10l-2-5.2L15.5 3a3.5 3.5 0 0 1-7 0z"/></svg>`,r2=`<svg ${Qe}><path d="m14.5 4.5 5 5L9 20H4v-5z"/><path d="m12.5 6.5 5 5"/></svg>`,s2=`<svg ${Qe}><path d="M4.5 11.5 11 5l7 7-6.5 6.5z"/><path d="M7 9 5 7"/><path d="M19 14.5s2 2.2 2 3.5a2 2 0 1 1-4 0c0-1.3 2-3.5 2-3.5z"/></svg>`,o2=`<svg ${Qe}><path d="m14 6 4 4"/><path d="M11.5 8.5 4 16v4h4l7.5-7.5"/><path d="m17 3 4 4-2.5 2.5-4-4z"/></svg>`,l2=`<svg ${Qe}><path d="M9 14 4 9l5-5"/><path d="M4 9h9a6 6 0 0 1 0 12h-3"/></svg>`,c2=`<svg ${Qe}><path d="m15 14 5-5-5-5"/><path d="M20 9h-9a6 6 0 0 0 0 12h3"/></svg>`,d2=`<svg ${Qe}><rect x="4.5" y="10.5" width="15" height="10" rx="2"/><path d="M8 10.5V7a4 4 0 0 1 8 0v3.5"/></svg>`,u2=`<svg ${Qe}><circle cx="6" cy="12" r="2.5"/><circle cx="17" cy="6" r="2.5"/><circle cx="17" cy="18" r="2.5"/><path d="M8.2 10.8 14.8 7.2M8.2 13.2l6.6 3.6"/></svg>`,f2=`<svg ${Qe}><path d="M21 12a9 9 0 1 1-2.6-6.4"/><path d="M21 3v6h-6"/></svg>`,yc={home:AT,grid:RT,compass:LT,news:CT,gear:PT,plus:DT,search:IT,play:zT,image:UT,folder:NT,trash:OT,eraser:FT,copy:BT,back:$T,check:HT,user:GT,puzzle:VT,box:qT,cpu:WT,args:KT,term:XT,chart:YT,dl:ZT,mug:JT,globe:jT,sparkle:QT,file:e2,info:t2,clock:n2,stop:i2,shirt:a2,brush:r2,bucket:s2,picker:o2,undo:l2,redo:c2,lock:d2,share:u2,don:f2};function G(i,e=""){const t=yc[i]||yc.info;return e?`<span class="ic ${e}">${t}</span>`:`<span class="ic">${t}</span>`}const Ml='xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1"',El=i=>`<g transform="translate(7 7) scale(0.66667)">${i}</g>`,Qr={min:`<svg ${Ml}>${El('<path d="M0 5.125h10"/>')}</svg>`,max:`<svg ${Ml}>${El('<rect x="0.5" y="0.5" width="9" height="9"/>')}</svg>`,restore:`<svg ${Ml}>${El('<rect x="0.5" y="2.5" width="7" height="7"/><path d="M2.5 2.5V0.5h7v7h-2"/>')}</svg>`,close:`<svg ${Ml}>${El('<path d="m0.43 0.43 9.14 9.14M9.57 0.43 0.43 9.57"/>')}</svg>`,bell:'<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2.5a5 5 0 0 0-5 5v3.2L4 13.2h12l-1-2.5V7.5a5 5 0 0 0-5-5Z"/><path d="M7.6 15.4a2.6 2.6 0 0 0 1.4 1.4 2.6 2.6 0 0 0 3.2-1.4"/></svg>'},Er=window.__TAURI__,h2=Er.core,p2=Er.event,ne=(i,e={})=>h2.invoke(i,e),ut=i=>window.__TAURI_INTERNALS__.convertFileSrc(i),kn=(i,e)=>p2.listen(i,e);window.__iconFallback=(i,e,t)=>{const n=document.createElement("span");n.className=e,n.innerHTML=yc[t]||yc.info,i.replaceWith(n)};const Xi=i=>ne("plugin:opener|open_url",{url:i}),b0=i=>ne("plugin:opener|open_path",{path:i}),te={config:null,accounts:[],instances:[],featured_versions:[],curseforge:!1,sys:null};async function Jt(i=!1){const e=await ne("cmd_get_state");te.config=e.config,te.accounts=e.accounts,te.instances=e.instances,te.featured_versions=e.featured_versions,te.curseforge=e.curseforge,te.sys=e.sys,Si(),await Ha(!0),qo(),i&&qe(ih)}const Am=qo;function Si(){if(!te.config)return;const i=te.config.theme,e=document.documentElement,n=i==="custom"?"pano":({dark:"standart",neon:"pano",light:"pano",orange:"sahne",anons:"pano"}[i]??i)||"sahne",a=(te.config.tema_ozel||{})[n]||{},r=n==="sahne"?te.config.custom_accent:"",s=String(a.accent||r||"").trim();e.setAttribute("data-world",n),s&&/^#[0-9a-fA-F]{3,8}$/.test(s)?(e.setAttribute("data-world-custom","1"),e.style.setProperty("--custom-accent",s)):(e.removeAttribute("data-world-custom"),e.style.removeProperty("--custom-accent"));const o=String(a.radius||"");o==="keskin"||o==="yumusak"||o==="hap"?e.setAttribute("data-radius",o):e.removeAttribute("data-radius"),xT(),TT()}const m2=Si;function Sn(){return te.accounts.find(i=>i.id===te.config?.last_selected_account)||te.accounts[0]||null}function Ho(i){return`https://mc-heads.net/avatar/${encodeURIComponent(i.name)}/64`}function x0(i){const e=encodeURIComponent(i.name);return i.kind==="microsoft"?`https://visage.surgeplay.com/head/64/${e}`:`https://crafatar.com/avatars/${i.uuid}?overlay&size=64`}function Go(i){const e=x0(i),t=i.kind==="microsoft"?`https://crafatar.com/avatars/${i.uuid}?overlay&size=64`:"";return`onerror="if(!this.dataset.fb){this.dataset.fb=1;this.src='${e}'}${t?`else if(this.dataset.fb==1){this.dataset.fb=2;this.src='${t}'}`:""}else{this.style.visibility='hidden'}"`}function g2(){const i=document.getElementById("pill-ram");if(!i||!te.sys)return;const t=te.instances[0]?.ram_mb||te.config?.default_ram_mb||4096,n=te.sys.total_ram_mb||16384,a=Math.min(100,Math.round(t/n*100)),r=i.querySelector("#ram-pill-val"),s=`${(t/1024).toFixed(1)} GB`;r?ay(r,s):i.innerHTML=`RAM <b id="ram-pill-val">${s}</b>&nbsp;/ ${(n/1024).toFixed(0)} GB
    <span class="ram-bar"><span style="transform:scaleX(${a/100})"></span></span>`;const o=i.querySelector(".ram-bar > span");o&&(o.style.transform=`scaleX(${a/100})`)}const ki=i=>document.querySelector(i);function vi(i){const e=document.createElement("template");return e.innerHTML=i.trim(),e.content.firstElementChild}function Vo(i){if(!i)return"0 B";const e=["B","KB","MB","GB"],t=Math.min(Math.floor(Math.log(i)/Math.log(1024)),3);return`${(i/1024**t).toFixed(t?1:0)} ${e[t]}`}function gs(i){const e=Math.floor(i/6e4);if(e<60)return`${e} dk`;const t=Math.floor(e/60),n=e%60;return t<24?n?`${t} sa ${n} dk`:`${t} sa`:`${Math.floor(t/24)} gün ${t%24} sa`}function v2(i){return i>0?`${(i/1048576).toFixed(1)} MB/s`:""}function fo(i="ok",e=""){return`<span class="lamp ${i} ${e}" aria-hidden="true"></span>`}const Ke={activeId:null};function X(i,e="ok"){const t=vi(`<div class="toast ${e}" role="status">${i}</div>`);document.body.appendChild(t),setTimeout(()=>t.classList.add("show"),10),setTimeout(()=>{t.classList.remove("show"),setTimeout(()=>t.remove(),300)},3200)}const Vs=[];function en(i){const e=vi(`<div class="modal-backdrop"><div class="modal" role="dialog" aria-modal="true">${i}</div></div>`);document.body.appendChild(e),Vs.push(e);let t=!1;const n=()=>{if(t)return;t=!0,window.removeEventListener("keydown",a);const r=Vs.indexOf(e);r>=0&&Vs.splice(r,1),e.remove()},a=r=>{r.key==="Escape"&&Vs[Vs.length-1]===e&&(r.preventDefault(),r.stopPropagation(),n())};return window.addEventListener("keydown",a),e.addEventListener("click",r=>{r.target===e&&n()}),requestAnimationFrame(()=>{e.querySelector("input, button, select, textarea, [tabindex]")?.focus()}),{root:e.firstElementChild,close:n}}const na={},Vn={};let Rm="home",ih="home";function qe(i,e){const t=ki("#content");t&&(ih=i,Rm=i,Vn.param=e,document.querySelectorAll(".rail-item").forEach(n=>{n.classList.toggle("active",n.dataset.page===Rm)}),ry(t,()=>{t.innerHTML="";const n=na[i];n&&n(t),Cg(t)}))}const _2={home:"Oyna",instances:"Paketler",kozmetik:"Kozmetik",explore:"Modlar",news:"Haberler",settings:"Ayarlar"},y2=[{page:"home",icon:"home",label:"Ana Sayfa"},{page:"instances",icon:"grid",label:"Mod Paketleri"},{page:"explore",icon:"compass",label:"Keşfet"},{page:"news",icon:"news",label:"Haberler"},{page:"skins",icon:"shirt",label:"Skin Merkezi"},{page:"kozmetik",icon:"sparkle",label:"Kozmetikler"},{page:"settings",icon:"gear",label:"Ayarlar"}];function k0(){const i=ki("#app");if(!i)return;i.innerHTML=`
    <div class="titlebar">
      <div class="brand">
        <img class="logo-img" src="/logo.png" draggable="false" />
        <span><span class="brand-word">YIKIM</span><span class="brand-suffix">Lient</span></span>
      </div>
      <div class="tb-center"></div>
      <div class="tb-actions">
        <button class="tb-btn tb-pack" id="tb-pack" title="Kurulum durumu (mod paketi)" aria-label="Kurulum durumu">${Qr.bell}<span class="tb-pack-dot" id="tb-pack-dot"></span></button>
        <button class="tb-btn" id="tb-min" title="Küçült" aria-label="Küçült">${Qr.min}</button>
        <button class="tb-btn" id="tb-max" title="Ekranı Kapla" aria-label="Ekranı Kapla">${Qr.max}</button>
        <button class="tb-btn close" id="tb-close" title="Kapat" aria-label="Kapat">${Qr.close}</button>
      </div>
    </div>
    <div class="body-row">
      <nav class="rail">
        <div class="rail-logo"><img src="/logo.png" draggable="false" /></div>
        ${y2.map(a=>`
          <button class="rail-item" data-page="${a.page}" data-md="${_2[a.page]||a.label}">
            ${G(a.icon,"ri-icon")}
            <span class="ri-label">${a.label}</span>
          </button>`).join("")}
        <div class="rail-flex"></div>
        <button class="rail-account" id="rail-account" title="Hesap"></button>
      </nav>
      <main id="content" class="content"></main>
    </div>
  `;const t=Er.window.getCurrentWindow();ki("#tb-min")?.addEventListener("click",()=>t.minimize()),ki("#tb-max")?.addEventListener("click",()=>t.toggleMaximize());const n=()=>{if(Ke.activeId){t.minimize(),X("Launcher küçültüldü — oyun kapanınca hazır; görev çubuğundan geri açabilirsin");return}t.close()};ki("#tb-close")?.addEventListener("click",n),ki("#tb-pack")?.addEventListener("click",()=>{Vf()});try{t.onCloseRequested(a=>{Ke.activeId&&(a?.preventDefault?.(),t.minimize(),X("Launcher küçültüldü — oyun kapanınca hazır; görev çubuğundan geri açabilirsin"))})}catch{}try{const a=ki("#tb-max"),r=o=>{a&&(a.innerHTML=o?Qr.restore:Qr.max,a.title=o?"Geri Yükle":"Ekranı Kapla",a.setAttribute("aria-label",a.title))},s=()=>{t.isMaximized().then(r).catch(()=>{})};typeof t.onResized=="function"?t.onResized(s):Er.event?.listen&&Er.event.listen("tauri://resize",s),s()}catch{}document.querySelectorAll(".rail-item").forEach(a=>{a.addEventListener("click",()=>qe(a.dataset.page))}),qo(),ki("#rail-account")?.addEventListener("click",()=>{te.accounts.length?qe("settings"):pn()}),Mf(Array.from(document.querySelectorAll(".rail-item")))}function qo(){const i=ki("#rail-account");if(!i)return;const e=Sn();if(!e){i.innerHTML=`<span class="ra-head ph">${G("user")}</span><span class="ra-name">Giriş yap</span>`;return}i.innerHTML=`
    <img class="ra-head" src="${Ho(e)}" draggable="false" ${Go(e)} />
    <span class="ra-name">${vs(e.id)}${e.name}</span>
    <span class="pa-dot on"></span>`}let wl=null;function pn(i){if(wl){wl.root.querySelector("#off-name")?.focus();return}const e=en(`
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
      <button class="btn primary lg" id="ms-go">${G("globe")} Microsoft ile Giriş</button>
      <div id="ms-status" style="font-size:12.5px; color:var(--text-dim); display:none; text-align:center;"></div>
      <div style="font-size:11px; color:var(--text-faint); text-align:center">Resmî Microsoft oturum penceresi açılır; şifren launcher'a iletilmez.</div>
    </div>
  `),t=e.root;let n=!0;const a=()=>{n&&(n=!1,wl=null,e.close())};wl={root:t,close:a},t.querySelector("#off-go")?.addEventListener("click",async()=>{const r=t.querySelector("#off-name").value.trim();if(r.length<3)return X("İsim en az 3 karakter olmalı","err");try{await ne("cmd_add_offline_account",{name:r}),await Jt(!0),Am(),X(`Hoş geldin, ${r}!`),a(),i?.()}catch(s){X(String(s),"err")}}),t.querySelector("#ms-go")?.addEventListener("click",async()=>{const r=t.querySelector("#ms-status"),s=t.querySelector("#ms-go");s.disabled=!0,r.style.display="block",r.innerHTML='<span class="spinner"></span> Microsoft oturum penceresi açılıyor…';try{const o=await ne("cmd_ms_login_begin");await Jt(!0),Am(),X(`Hoş geldin, ${o.name}!`),a(),i?.()}catch(o){r.textContent=String(o),s.disabled=!1}})}let Tl=0;async function b2(i,e){if(!te.accounts.length){pn();return}if(Ke.activeId){X("Oyun zaten açık — önce mevcut oyunu kapat","err");return}const t=++Tl;Ke.activeId=i;const{root:n,close:a}=en(`
    <h2>Oyun Başlatılıyor</h2>
    <div class="sub" id="lp-stage">Hazırlanıyor…</div>
    <div class="progressbar"><div id="lp-bar" style="transform:scaleX(0.02)"></div></div>
    <div class="progressbar-label" id="lp-detail" style="margin-top:10px"></div>
    <div id="lp-logs" style="margin-top:14px; max-height:180px; overflow-y:auto; font-family:var(--font-mono); font-size:11px; color:var(--text-faint); display:none; user-select:text;"></div>
  `),r=n.querySelector("#lp-bar"),s=n.querySelector("#lp-stage"),o=n.querySelector("#lp-detail"),l=n.querySelector("#lp-logs"),c=await kn("launch-progress",v=>{if(t!==Tl)return;const m=v.payload;r.style.transform=`scaleX(${Math.min(1,Math.max(0,m.percent/100))})`,s.textContent=x2(m.stage),o.textContent=m.detail||""}),d=await kn("game-log",v=>{if(t!==Tl)return;l.style.display="block";const m=document.createElement("div");m.textContent=v.payload,l.appendChild(m),l.scrollTop=l.scrollHeight,l.children.length>200&&l.firstElementChild?.remove()}),f=await kn("game-exit",v=>{if(t!==Tl)return;Ke.activeId=null;const m=v.payload?.exit_code??v.payload?.code??-1;m===0?(s.textContent="Oyun kapatıldı",setTimeout(a,1200)):(s.textContent=`Oyun hata ile kapandı (kod ${m})`,o.textContent="Canlı logdan detayları görebilirsin.")}),u=()=>{c(),d(),f()},h=new MutationObserver(()=>{document.body.contains(n)||(u(),h.disconnect())});h.observe(document.body,{childList:!0});try{await ne("cmd_launch_instance",{instanceId:i,server:e??null}),s.textContent="Oyun çalışıyor",o.textContent="İyi oyunlar!",r.style.transform="scaleX(1)",setTimeout(()=>{u(),a()},1500),await Jt(!0)}catch(v){Ke.activeId=null,s.textContent="Başlatılamadı",o.textContent=String(v),o.style.color="var(--danger)"}}function x2(i){return{manifest:"Sürüm bilgisi",download:"Dosyalar indiriliyor",java:"Java hazırlanıyor",mods:"Modlar hazırlanıyor",modpack:"Mod paketi kuruluyor",starting:"Başlatılıyor"}[i]||i}kn("curtain-status",i=>{i.payload?.phase==="started"&&(window.__yikimRestart=!0),i.payload?.phase==="closed"&&(window.__yikimRestart=!1)});kn("game-started",i=>{Ke.activeId=i.payload,Jt(!0)});kn("game-exit",async()=>{window.__yikimRestart||(Ke.activeId=null,Jt(!0))});kn("mod-install-progress",i=>{const e=i.payload;e.phase==="done"&&X(`Kuruldu: ${e.filename}`),e.phase==="error"&&X(`Hata: ${e.filename}`,"err")});let Gn=null,Lm;kn("standard-mods-progress",i=>{const e=i.payload;if(!e.total)return;(!Gn||!document.body.contains(Gn))&&(Gn=document.createElement("div"),Gn.className="sm-panel",Gn.innerHTML=`
      <div class="sm-head">
        <span class="sm-title">Standart modlar kuruluyor</span>
        <span class="sm-count tnum" id="sm-count"></span>
      </div>
      <div class="progressbar sm-bar"><div id="sm-fill"></div></div>
      <div class="sm-list" id="sm-list"></div>
    `,document.body.appendChild(Gn)),clearTimeout(Lm);const t=Gn.querySelector("#sm-count"),n=Gn.querySelector("#sm-fill"),a=Gn.querySelector("#sm-list");if(t.textContent=`${e.done}/${e.total}`,n.style.transform=`scaleX(${Math.min(1,e.done/e.total)})`,e.current){const r=document.createElement("div");for(r.className="sm-row done",r.textContent=`✓ ${e.current}`,a.appendChild(r);a.children.length>8;)a.firstElementChild?.remove();a.scrollTop=a.scrollHeight}e.done>=e.total&&(Gn.querySelector(".sm-title").textContent="Standart modlar hazır",Lm=setTimeout(()=>{Gn?.remove(),Gn=null},4e3))});kn("mod-install-progress",i=>{i.payload.phase});kn("yikim:yetki",()=>{Ha(!0).finally(()=>{qo(),window.dispatchEvent(new CustomEvent("yikim:yetki"))})});function k2(){try{if(window.__MOCK_AYAR__||localStorage.getItem("yikim-modern-secim")||!te.instances.length||te.config?.onboarding_done===!1)return}catch{return}localStorage.setItem("yikim-modern-secim","1");const{root:i,close:e}=en(`
    <h2>Yeni görünüm: Modern</h2>
    <p class="sub">Tam sahne düzeni. İstediğin an
      Ayarlar → Görsel Dünya'dan geri dönebilirsin.</p>
    <div class="md-secim">
      <button class="md-secim-kart" id="md-evet">
        <span class="md-secim-onizle modern">
          <i class="m-nav"></i><i class="m-stage"></i><i class="m-card"></i><i class="m-foot"></i>
        </span>
        <b>Modern</b>
        <small>Üst sekmeler, tam sahne, sağ kart, alt durum çubuğu</small>
      </button>
      <button class="md-secim-kart" id="md-hayir">
        <span class="md-secim-onizle klasik">
          <i class="k-rail"></i><i class="k-line"></i><i class="k-line short"></i><i class="k-card"></i>
        </span>
        <b>Klasik kalsın</b>
        <small>Şu anki düzen — hiçbir şey değişmez</small>
      </button>
    </div>
    <p class="md-secim-not">Seçimini daha sonra Görsel Dünya kartlarından değiştirebilirsin.</p>
  `),t=async n=>{e(),n?te.config.theme="modern":te.config?.theme==="modern"&&(te.config.theme="sahne");try{await ne("cmd_save_settings",{config:te.config}),await Jt()}catch{}Si(),qe("home"),X(n?"Modern görünüm açık — Ayarlar'dan geri dönebilirsin":"Klasik görünümde kaldın")};i.querySelector("#md-evet")?.addEventListener("click",()=>void t(!0)),i.querySelector("#md-hayir")?.addEventListener("click",()=>void t(!1))}async function S0(){try{await Jt(),lT(),k0(),qe("home"),k2(),I0(),fT(),mT()||pT(),T2(),Rs(),Cv(),M2(),E2()}catch(i){R2(i)}}const S2=Jt;async function M2(){const{packKartBaslat:i,packKartHata:e,packKartTamam:t}=await tt(async()=>{const{packKartBaslat:n,packKartHata:a,packKartTamam:r}=await Promise.resolve().then(()=>Ov);return{packKartBaslat:n,packKartHata:a,packKartTamam:r}},void 0);await kn("yikimpack-ac",async n=>{const a=n?.payload;if(!a)return;const r=`dosya:${a}`;i("Paket açıldı — kurulum başlıyor",r),qe("instances");try{const s=await ne("cmd_import_pack_file",{path:a,name:null});await S2(),t(r),X(`${s.name||"Paket"} kuruldu ✓`,"ok"),(await tt(async()=>{const{paketSonrasiRamUyarisi:o}=await Promise.resolve().then(()=>mE);return{paketSonrasiRamUyarisi:o}},void 0)).paketSonrasiRamUyarisi(s)}catch(s){const o=String(s);if(o.includes("paket_zaten_kuruluyor")){X("Bu paket şu anda zaten kuruluyor","err");return}e(o,r)}})}async function E2(){const{packKartBitti:i}=await tt(async()=>{const{packKartBitti:e}=await Promise.resolve().then(()=>Ov);return{packKartBitti:e}},void 0);await kn("pack-hazir",async e=>{const t=e?.payload?.instance_id,n=e?.payload?.ad||"paket";w2(),Ja("kurulum",`${n} hazır`,"Kurulum tamamlandı — log sayfası açıldı"),i(t),t&&qe("instances",`${t}|log`),X(`${n} kuruldu — log sayfası açıldı`,"ok")})}function w2(){try{const i=window.AudioContext||window.webkitAudioContext;if(!i)return;const e=new i,t=(a,r)=>{const s=e.createOscillator(),o=e.createGain();s.type="sine",s.frequency.value=r,o.gain.setValueAtTime(1e-4,a),o.gain.exponentialRampToValueAtTime(.14,a+.02),o.gain.exponentialRampToValueAtTime(1e-4,a+.32),s.connect(o).connect(e.destination),s.start(a),s.stop(a+.34)},n=e.currentTime;t(n,660),t(n+.16,990),setTimeout(()=>e.close(),900)}catch{}}async function T2(){try{const e=await(await tt(()=>import("./index-DSkUPpwd.js"),[])).check();if(!e?.available)return;let t={};try{t=await ne("cmd_guncelleme_bilgi")}catch{}if(t.os==="linux"&&(t.bundle==="deb"||t.bundle==="rpm")){A2();return}const a=String(e?.version??"");X(`Yeni sürüm bulundu${a?` (v${a})`:""} — arka planda indiriliyor…`);let r=0;await e.download(s=>{s.event==="Started"?r=0:s.event==="Progress"&&(r=Math.min(99,r+1)),r%25===0&&X(`Güncelleme indiriliyor… %${r}`)}),X("Güncelleme kuruluyor — launcher yeniden başlıyor…"),await e.install(),setTimeout(()=>{try{Er.process.exit(0)}catch{window.location.reload()}},900)}catch{}}async function A2(){try{const e=await(await tt(()=>import("./index-DSkUPpwd.js"),[])).check();if(!e?.available)return;const t=e?.rawJson??{},n=String(t?.minimum??"").trim(),a=(v,m)=>{const p=T=>T.replace(/^v/i,"").split(".").map(b=>parseInt(b,10)||0),g=p(v),_=p(m);for(let T=0;T<Math.max(g.length,_.length);T++){const b=(g[T]??0)-(_[T]??0);if(b!==0)return b}return 0},r=String(e?.currentVersion??""),s=!!n&&a(r,n)<0;let o={};try{o=await ne("cmd_guncelleme_bilgi")}catch{}const l=o.os==="linux"&&(o.bundle==="deb"||o.bundle==="rpm"),c=s&&!l;if(l){const v=o.bundle==="rpm",m=v?"linux-x86_64-rpm":"linux-x86_64-deb",p=t?.platforms?.[m]??t?.platforms?.["linux-x86_64-deb"]??t?.platforms?.["linux-x86_64"],g=String(p?.url||`https://github.com/YKSAMI1/yikimlient/releases/tag/v${e.version}`),{root:_,close:T}=en(`
        <h2>Güncelleme Var</h2>
        <div class="sub">YIKIMLient <b>v${e.version}</b> hazır. Değişiklik notları:</div>
        <div style="margin:12px 0; max-height:160px; overflow-y:auto; user-select:text; color:var(--text-dim); font-size:12.5px; line-height:1.55">
          ${(e.body||"Değişiklik notu yok.").split(`
`).map(b=>`<div>${b}</div>`).join("")}
        </div>
        <p class="gv-mini" style="margin:0 0 10px; color:var(--text-dim); line-height:1.6">
          Bu kurulum <b>${v?".rpm":".deb"}</b> paketiyle yapıldı. Paket yöneticisi
          yönetici izni istediği için launcher kendini sessizce güncelleyemiyor.
          Yeni paketi indirip dosyayı çift tıkla (ya da
          <code>sudo ${v?"rpm -U":"dpkg -i"} dosya.${v?"rpm":"deb"}</code>) —
          ayarların ve hesapların korunur.
        </p>
        <div style="display:flex; gap:10px; justify-content:flex-end; margin-top:6px">
          <button class="btn ghost" id="upd-later">Sonra</button>
          <button class="btn primary" id="upd-indir">Paketi indir (${v?".rpm":".deb"})</button>
        </div>
      `);_.querySelector("#upd-later")?.addEventListener("click",()=>T()),_.querySelector("#upd-indir")?.addEventListener("click",async()=>{try{await Xi(g),T()}catch(b){X(`Bağlantı açılamadı: ${b}`,"err")}});return}const d=c?"Zorunlu Güncelleme":"Güncelleme Var",f=c?`Eski sürümdesin (v${r}). Bu güncelleme zorunlu — launcher'ı kullanmaya devam etmek için v${e.version} olmalısın.`:`YIKIMLient <b>v${e.version}</b> hazır. Değişiklik notları:`,{root:u,close:h}=en(`
      <h2>${d}</h2>
      <div class="sub">${f}</div>
      <div style="margin:12px 0; max-height:180px; overflow-y:auto; user-select:text; color:var(--text-dim); font-size:12.5px; line-height:1.55">
        ${(e.body||"Değişiklik notu yok.").split(`
`).map(v=>`<div>${v}</div>`).join("")}
      </div>
      <div style="display:flex; gap:10px; justify-content:flex-end; margin-top:6px">
        ${c?"":'<button class="btn ghost" id="upd-later">Sonra</button>'}
        <button class="btn ${c?"danger":"primary"}" id="upd-go">${c?"Şimdi güncelle (zorunlu)":"İndir ve Kur"}</button>
      </div>
      ${c?'<p class="gv-mini" style="margin:8px 0 0; color:var(--text-faint)">Güncelleme indirilip kurulana kadar launcher kullanılamaz.</p>':""}
    `);c&&u.addEventListener("click",v=>v.stopPropagation()),u.querySelector("#upd-later")?.addEventListener("click",()=>h()),u.querySelector("#upd-go")?.addEventListener("click",async()=>{const v=u.querySelector("#upd-go");v.disabled=!0,v.textContent="İndiriliyor…";try{let m=0,p=0;await e.download(g=>{switch(g.event){case"Started":p=g.data.contentLength??0;break;case"Progress":m+=g.data.chunkLength;break;case"Finished":v.textContent="Kuruluyor…";break}p>0&&(v.textContent=`İndiriliyor… %${Math.round(m/p*100)}`)}),await e.install(),X("Güncelleme kuruldu — launcher yeniden başlıyor"),setTimeout(()=>{try{Er.process.exit(0)}catch{window.location.reload()}},900)}catch(m){v.disabled=!1,v.textContent="İndir ve Kur",X(`Güncelleme başarısız: ${m}`,"err")}})}catch{}}function R2(i){const e=document.getElementById("app"),t=i instanceof Error?i.stack||i.message:String(i);console.error("boot hatası:",i),e&&(e.innerHTML=`
      <div style="height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:12px; padding:40px; text-align:center">
        <div style="font-size:13px; color:var(--text-dim)">Açılışta bir şeyler ters gitti:</div>
        <pre style="user-select:text; font-family:var(--font-mono); font-size:11.5px; color:var(--danger); white-space:pre-wrap; word-break:break-word; max-width:640px; background:var(--bg2); border:1px solid var(--hairline-strong); border-radius:var(--radius); padding:14px 18px; margin:0">${t}</pre>
      </div>`)}function L2(){if(!window.__TAURI__)return;const i=async()=>{try{const e=await fetch(`surum.txt?t=${Date.now()}`,{cache:"no-store"});return e.ok&&(await e.text()).trim()||null}catch{return null}};(async()=>{const e=await i();if(!e)return;const t=async()=>{if(document.querySelector(".modal-backdrop"))return;const n=await i();n&&n!==e&&window.location.reload()};for(const n of[4e3,12e3,3e4,6e4])setTimeout(()=>void t(),n)})()}S0();L2();const vt=Object.freeze(Object.defineProperty({__proto__:null,$:ki,applyTheme:m2,applyWorld:Si,boot:S0,currentAccount:Sn,get currentPage(){return ih},el:vi,enterStage:Cg,fileSrc:ut,fmtBytes:Vo,fmtDuration:gs,fmtSpeed:v2,headAttrs:Go,headFallbackUrl:x0,headUrl:Ho,icon:G,invoke:ne,lamp:fo,launch:Ke,launchInstance:b2,listen:kn,nav:Vn,navigate:qe,openExternal:Xi,openLoginModal:pn,openModal:en,openPath:b0,pages:na,refreshState:Jt,renderAccountPill:qo,setupShell:k0,state:te,switchPress:Sc,toast:X,updateRamPill:g2},Symbol.toStringTag,{value:"Module"}));
