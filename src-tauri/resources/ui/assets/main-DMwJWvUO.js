import"./theme-QTap-Mp3.js";const w0="modulepreload",T0=function(i){return"/"+i},fh={},it=function(e,t,n){let a=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),o=r?.nonce||r?.getAttribute("nonce");a=Promise.allSettled(t.map(l=>{if(l=T0(l),l in fh)return;fh[l]=!0;const c=l.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":w0,c||(f.as="script"),f.crossOrigin="",f.href=l,o&&f.setAttribute("nonce",o),document.head.appendChild(f),c)return new Promise((u,h)=>{f.addEventListener("load",u),f.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(r){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r}return a.then(r=>{for(const o of r||[])o.status==="rejected"&&s(o.reason);return e().catch(s)})},A0="https://discord.gg/3zTCpMzeNq";let Wa={},Vd=0,eo=null,Bc=null;function ps(){eo!==null&&(clearInterval(eo),eo=null)}let hh=null,$c="";function R0(){if(hh!==null)return;const i=()=>{L0()};hh=setInterval(i,5e3),window.addEventListener("focus",i),document.addEventListener("visibilitychange",()=>{document.hidden||i()}),i()}async function L0(){if(!document.hidden)try{await Ha(!0);const i=await Lm();if(!i)return;const e=`${i.cizimSerbest}|${i.rolYol}|${i.dogrulandi}`;if(e===$c)return;const t=$c==="";if($c=e,i.dogrulandi&&Bc!==null&&Bc!==i.rolYol&&(i.rolYol?K("Yol Silindiri izni açıldı ✓ pelerinini ve elıtranı çizebilirsin — Kozmetikler sayfasına geç.","ok"):K("Yol Silindiri izni kapandı — tasarımın kaydedildi ama şu an varsayılan YIKIM pelerini/elitrası görünüyor. Etiketi geri alınca aynı tasarım döner.","err")),Bc=i.rolYol,t)return;window.dispatchEvent(new CustomEvent("yikim:yetki",{detail:i}))}catch{}}async function Ha(i=!1){if(!(!i&&Date.now()-Vd<15e3))try{const e=await te("cmd_guvenlik_ozet");Wa={};for(const t of e.hesaplar||[])Wa[t.id]=t;Vd=Date.now()}catch{}}function Am(i){return Wa[i]?.dogrulandi??!1}function Rm(i){return Wa[i]?.rol_yol??!1}function C0(i){return Wa[i]?.kozmetik_serbest??!1}async function Lm(){let i=null;try{i=await te("cmd_guvenlik_durum")}catch{return null}const e=i?.hesap?.anahtar??"",t=ie.accounts?.find(s=>P0(s)===e)?.id,n=t?{cizimSerbest:!!i?.cizim_serbest,dogrulandi:!!i?.dogrulandi,rolYol:!!i?.yetki?.rol_yol}:null;if(!t)return n;const a=Wa[t];return Wa[t]={id:t,anahtar:e,ad:String(i?.hesap?.ad??a?.ad??""),dogrulandi:!!i?.dogrulandi,rol_yol:!!i?.yetki?.rol_yol,carpi:!!i?.carpi,kozmetik_serbest:!!i?.kozmetik_serbest,cizim_serbest:!!i?.cizim_serbest},Vd=Date.now(),n}function P0(i){const e=i.kind==="microsoft"?"ms":"offline",t=i.uuid||"";return t?`${e}:${t}`:`${e}:${(i.name||i.id).toLowerCase()}`}function mr(i){const e=Wa[i];return!e||e.dogrulandi?"":'<span class="gv-carpi" title="Hesap doğrulanmadı — kozmetik değiştirmek için Ayarlar → Güvenlik">✕</span>'}async function qd(i){const e=new TextEncoder,t=await crypto.subtle.importKey("raw",e.encode(i),"PBKDF2",!1,["deriveBits"]),n=await crypto.subtle.deriveBits({name:"PBKDF2",salt:e.encode("yikimlient-parola-v1"),iterations:21e4,hash:"SHA-256"},t,256);return Array.from(new Uint8Array(n)).map(a=>a.toString(16).padStart(2,"0")).join("")}function ph(i){return i.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function Is(i,e,t){return`<div class="gv-durum ${i}">
    <span class="gv-nokta"></span>
    <div><b>${ph(e)}</b><small>${ph(t)}</small></div>
  </div>`}const to=(i,e)=>`
  <label class="gv-etiket" for="${i}">${e}</label>
  <input class="input gv-girdi" id="${i}" type="password" autocomplete="new-password" minlength="8" placeholder="en az 8 karakter" />`;async function ms(i){ps(),i.innerHTML=`<div class="card set-card gv-kart"><h3>🛡️ Hesap Doğrulama</h3>
    <p class="set-sub">Durum okunuyor…</p></div>`,await Ha(!0);let e=null;try{e=await te("cmd_guvenlik_durum")}catch{e=null}if(!e){i.innerHTML=`<div class="card set-card gv-kart">
      <h3>🛡️ Hesap Doğrulama</h3>
      ${Is("hata","Güvenlik servisi bu sürümde yok","Launcher'ı güncelle. Oyun ve mevcut kozmetikler çalışmaya devam eder.")}
    </div>`;return}const t=bn();e.yetki;const n=!!e.hesap,a=e.carpi?mr(t?.id||""):"";let s="";e.api_acik?n?e.baglandi&&e.dogrulandi?s=Is("ok",`Doğrulandı${e.discord_ad?` · ${e.discord_ad}`:""}`,e.yetki?.rol_yol?"Kendi pelerin/elitranı çizebilir, fotoğraf (HD) ve maske yükleyebilirsin (Yol Silindiri).":'Kozmetik ve skin değiştirme açık. Kendi tasarımını çizmek için Discord sunucusundaki YIKIM etiketi ("Yol Silindiri" rolü) gerekir — etiketi bırakırsan çizme izni kendiliğinden kapanır.'):e.baglandi?s=Is("uyari","Discord bağlı — bu cihazda giriş yapmadın","Şifreni gir; kozmetiklerin ve çizme iznin bu cihaza açılsın."):s=Is("uyari","Hesap doğrulanmadı","Oynayabilirsin; kozmetik değiştirmek için Discord'da doğrula."):s=Is("uyari","Önce hesap ekle","Ayarlar → Hesaplar bölümünden bir hesap ekle."):s=Is("hata","Sunucuya ulaşılamıyor","Bağlantı, şifre oluşturma ve sıfırlama şu an kapalı. Oyun ve mevcut kozmetikler çalışmaya devam eder.");let r="";e.api_acik&&n&&!e.baglandi&&(r+=`
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
      </div>`),e.api_acik&&n&&e.baglandi&&!e.dogrulandi&&(r+=`
      <div class="gv-adim">
        <div class="gv-adim-bas"><span class="gv-no">3</span><b>Giriş yap</b></div>
        <p class="gv-mini">Hesabının şifresini gir — kozmetiklerin ve çizme iznin bu cihaza açılır. Şifre her cihazda aynıdır.</p>
        <div class="gv-izgara">
          ${to("gv-giris-sifre","Şifre")}
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
          ${to("gv-p1","Yeni şifre")}
          ${to("gv-p2","Yeni şifre (tekrar)")}
        </div>
        <div class="gv-alt-satir">
          <button class="btn primary" id="gv-parola-kur">Şifreyi oluştur</button>
        </div>
        <p class="gv-mini">Şimdi oluşturmazsan oyun açılır; kozmetikler kilitli kalır.</p>
      </div>`),e.api_acik&&n&&e.dogrulandi&&(r+=`
      <div class="gv-alt-satir" style="margin-top:4px">
        <button class="btn ghost sm" id="gv-unuttum">Şifremi unuttum</button>
      </div>`),e.api_acik||(r+='<div class="gv-alt-satir"><button class="btn ghost sm" id="gv-yenile">Yeniden dene</button></div>'),i.innerHTML=`<div class="card set-card gv-kart">
    <h3>🛡️ Hesap Doğrulama</h3>
    <p class="set-sub">Hesabını Discord ile doğrula; kozmetiklerin hesaba bağlansın, cihaz değiştirince kaybolmasın.</p>
    ${a?`<div class="gv-uyari-satir">${a}<span>Bu hesap doğrulanmadı — adının başında ✕ görünür.</span></div>`:""}
    ${s}
    ${r}
    <div class="gv-alt-bilgi">
      <span>${e.bot_acik?"Bot: çevrimiçi":"Bot: kapalı (oyun çalışır)"}</span>
      <span>${e.cihaz_hazir?"Cihaz imzası: hazır":"Cihaz imzası: yok"}</span>
    </div>
  </div>`;const o=()=>i.querySelector("#gv-kod"),l=()=>i.querySelector("#gv-kod-alt");i.querySelector("#gv-kod-al")?.addEventListener("click",async()=>{try{const f=await te("cmd_guvenlik_baglama_kod");o()&&(o().textContent=f.kod||"?"),l()&&(l().textContent=`Discord'da bota yaz: /bagla ${f.kod||""} · ${Math.ceil((f.kalan_sn||600)/60)} dk`);const u=i.querySelector("#gv-kopyala");u&&(u.hidden=!f.kod,u.onclick=async()=>{const h=f.kod||"";if(h)try{await navigator.clipboard.writeText(h);const v=u.textContent;u.textContent="Kopyalandı ✓",setTimeout(()=>{u.textContent=v},1600)}catch{const v=window.getSelection(),m=document.createRange();m.selectNodeContents(i.querySelector("#gv-kod")),v?.removeAllRanges(),v?.addRange(m),K("Pano kapalı — kodu elle seçip kopyala","err")}}),eo||(eo=setInterval(()=>{if(!i.isConnected||!document.body.contains(i)){ps();return}c(!0)},3e3))}catch(f){K(`Kod alınamadı: ${String(f).replace(/^Error:\s*/,"")}`,"err")}});const c=async(f=!1)=>{try{if((await te("cmd_guvenlik_baglama_durum")).baglandi)return ps(),K("Discord bağlandı ✓"),await ms(i),!0;f||K("Henüz bağlanmadı — Discord'da kodu yazdın mı?","err")}catch(u){f||K(`Kontrol edilemedi: ${String(u).replace(/^Error:\s*/,"")}`,"err")}return!1};i.querySelector("#gv-kontrol")?.addEventListener("click",()=>void c(!1)),i.querySelector("#gv-discord")?.addEventListener("click",()=>Cm());const d=async()=>{const f=i.querySelector("#gv-giris-sifre")?.value||"";if(f.length<8)return K("Şifreni gir (en az 8 karakter)","err");const u=i.querySelector("#gv-giris");u&&(u.disabled=!0);try{const h=await qd(f);(await te("cmd_guvenlik_giris",{parolaHash:h}))?.dogrulandi&&(await Ha(!0),K("Giriş yapıldı ✓ kozmetikler açıldı"),await ms(i))}catch(h){const v=String(h).replace(/^Error:\s*/,"");if(v.includes("parola_yok")){const m=i.querySelector("#gv-olustur-blok");m&&(m.hidden=!1),K("Bu hesabın şifresi yok — aşağıdan oluşturabilirsin.","err")}else K(v.includes("baglanti_yok")?"Önce Discord'da /bagla ile bağla":`Giriş olmadı: ${v}`,"err");u&&(u.disabled=!1)}};i.querySelector("#gv-giris")?.addEventListener("click",()=>void d()),i.querySelector("#gv-giris-sifre")?.addEventListener("keydown",f=>{f.key==="Enter"&&d()}),i.querySelector("#gv-olustur-ac")?.addEventListener("click",()=>{const f=i.querySelector("#gv-olustur-blok");f&&(f.hidden=!1)}),i.querySelector("#gv-parola-kur")?.addEventListener("click",async()=>{const f=i.querySelector("#gv-p1")?.value||"",u=i.querySelector("#gv-p2")?.value||"";if(f.length<8)return K("Şifre en az 8 karakter olmalı","err");if(f!==u)return K("Şifreler eşleşmiyor","err");const h=i.querySelector("#gv-parola-kur");h&&(h.disabled=!0);try{const v=await qd(f);await te("cmd_guvenlik_parola_kur",{parolaHash:v}),await te("cmd_guvenlik_giris",{parolaHash:v}),K("Şifre oluşturuldu ✓ kozmetikler açıldı"),await Ha(!0),await ms(i)}catch(v){const m=String(v).replace(/^Error:\s*/,"");if(m.includes("parola_var")){const p=i.querySelector("#gv-olustur-blok");p&&(p.hidden=!0),K("Bu hesabın şifresi zaten var — yukarıdan giriş yap.","err")}else K(`Olmadı: ${m}`,"err");h&&(h.disabled=!1)}}),i.querySelector("#gv-unuttum")?.addEventListener("click",()=>D0(i)),i.querySelector("#gv-yenile")?.addEventListener("click",()=>void ms(i))}function D0(i){const e=Jt(`
    <h2>Şifremi unuttum</h2>
    <div class="sub">Sunucudaki <b>bot komut kanalında</b> <code>/sifirla</code> yaz; bot sana tek seferlik kod gönderir.</div>
    <div style="display:flex; flex-direction:column; gap:12px; margin-top:14px">
      <div>
        <label class="gv-etiket" for="gv-sif-kod">Kod</label>
        <input class="input gv-girdi" id="gv-sif-kod" placeholder="8 karakter" maxlength="12" style="text-transform:uppercase" />
      </div>
      ${to("gv-sif-p1","Yeni şifre")}
      ${to("gv-sif-p2","Yeni şifre (tekrar)")}
      <div class="gv-alt-satir">
        <button class="btn ghost" id="gv-sif-iptal">Vazgeç</button>
        <button class="btn primary" id="gv-sif-tamam">Şifreyi değiştir</button>
      </div>
      <p class="gv-mini">5 hatalı denemede bu cihazda hesap 24 saat kilitlenir.</p>
    </div>
  `);e.root.querySelector("#gv-sif-iptal")?.addEventListener("click",()=>e.close()),e.root.querySelector("#gv-sif-tamam")?.addEventListener("click",async()=>{const t=(e.root.querySelector("#gv-sif-kod")?.value||"").trim().toUpperCase(),n=e.root.querySelector("#gv-sif-p1")?.value||"",a=e.root.querySelector("#gv-sif-p2")?.value||"";if(!t)return K("Kodu gir","err");if(n.length<8)return K("Şifre en az 8 karakter olmalı","err");if(n!==a)return K("Şifreler eşleşmiyor","err");try{const s=await qd(n);await te("cmd_guvenlik_sifirla",{kod:t,parolaHash:s}),await te("cmd_guvenlik_giris",{parolaHash:s}),K("Şifre değiştirildi ✓"),e.close(),await Ha(!0),await ms(i)}catch(s){K(`Olmadı: ${String(s).replace(/^Error:\s*/,"")}`,"err")}})}function Cm(){Wi(A0).catch(()=>K("Discord açılamadı","err"))}function ta(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function Pm(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ei={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},fo={duration:.5,overwrite:!1,delay:0},sf,rn,Tt,ui=1e8,xt=1/ui,Wd=Math.PI*2,I0=Wd/4,z0=0,Dm=Math.sqrt,U0=Math.cos,N0=Math.sin,an=function(e){return typeof e=="string"},Nt=function(e){return typeof e=="function"},ca=function(e){return typeof e=="number"},rf=function(e){return typeof e>"u"},Hi=function(e){return typeof e=="object"},Cn=function(e){return e!==!1},of=function(){return typeof window<"u"},Ko=function(e){return Nt(e)||an(e)},Im=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},_n=Array.isArray,O0=/random\([^)]+\)/g,F0=/,\s*/g,mh=/(?:-?\.?\d|\.)+/gi,zm=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,tr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Hc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Um=/[+-]=-?[.\d]+/,B0=/[^,'"\[\]\s]+/gi,$0=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Lt,Pi,Kd,lf,ti={},Gl={},Nm,Om=function(e){return(Gl=gr(e,ti))&&On},cf=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ho=function(e,t){return!t&&console.warn(e)},Fm=function(e,t){return e&&(ti[e]=t)&&Gl&&(Gl[e]=t)||ti},po=function(){return 0},H0={suppressEvents:!0,isStart:!0,kill:!1},wl={suppressEvents:!0,kill:!1},G0={suppressEvents:!0},df={},Ga=[],Xd={},Bm,Vn={},Gc={},gh=30,Tl=[],uf="",ff=function(e){var t=e[0],n,a;if(Hi(t)||Nt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(a=Tl.length;a--&&!Tl[a].targetTest(t););n=Tl[a]}for(a=e.length;a--;)e[a]&&(e[a]._gsap||(e[a]._gsap=new lg(e[a],n)))||e.splice(a,1);return e},bs=function(e){return e._gsap||ff(fi(e))[0]._gsap},$m=function(e,t,n){return(n=e[t])&&Nt(n)?e[t]():rf(n)&&e.getAttribute&&e.getAttribute(t)||n},Pn=function(e,t){return(e=e.split(",")).forEach(t)||e},Ft=function(e){return Math.round(e*1e5)/1e5||0},Rt=function(e){return Math.round(e*1e7)/1e7||0},or=function(e,t){var n=t.charAt(0),a=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+a:n==="-"?e-a:n==="*"?e*a:e/a},V0=function(e,t){for(var n=t.length,a=0;e.indexOf(t[a])<0&&++a<n;);return a<n},Vl=function(){var e=Ga.length,t=Ga.slice(0),n,a;for(Xd={},Ga.length=0,n=0;n<e;n++)a=t[n],a&&a._lazy&&(a.render(a._lazy[0],a._lazy[1],!0)._lazy=0)},hf=function(e){return!!(e._initted||e._startAt||e.add)},Hm=function(e,t,n,a){Ga.length&&!rn&&Vl(),e.render(t,n,!!(rn&&t<0&&hf(e))),Ga.length&&!rn&&Vl()},Gm=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(B0).length<2?t:an(e)?e.trim():e},Vm=function(e){return e},ni=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},q0=function(e){return function(t,n){for(var a in n)a in t||a==="duration"&&e||a==="ease"||(t[a]=n[a])}},gr=function(e,t){for(var n in t)e[n]=t[n];return e},vh=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Hi(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},ql=function(e,t){var n={},a;for(a in e)a in t||(n[a]=e[a]);return n},no=function(e){var t=e.parent||Lt,n=e.keyframes?q0(_n(e.keyframes)):ni;if(Cn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},W0=function(e,t){for(var n=e.length,a=n===t.length;a&&n--&&e[n]===t[n];);return n<0},qm=function(e,t,n,a,s){var r=e[a],o;if(s)for(o=t[s];r&&r[s]>o;)r=r._prev;return r?(t._next=r._next,r._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[a]=t,t._prev=r,t.parent=t._dp=e,t},_c=function(e,t,n,a){n===void 0&&(n="_first"),a===void 0&&(a="_last");var s=t._prev,r=t._next;s?s._next=r:e[n]===t&&(e[n]=r),r?r._prev=s:e[a]===t&&(e[a]=s),t._next=t._prev=t.parent=null},Ka=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},xs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},K0=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Yd=function(e,t,n,a){return e._startAt&&(rn?e._startAt.revert(wl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,a))},X0=function i(e){return!e||e._ts&&i(e.parent)},_h=function(e){return e._repeat?vr(e._tTime,e=e.duration()+e._rDelay)*e:0},vr=function(e,t){var n=Math.floor(e=Rt(e/t));return e&&n===e?n-1:n},Wl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},yc=function(e){return e._end=Rt(e._start+(e._tDur/Math.abs(e._ts||e._rts||xt)||0))},bc=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Rt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),yc(e),n._dirty||xs(n,e)),e},Wm=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Wl(e.rawTime(),t),(!t._dur||Po(0,t.totalDuration(),n)-t._tTime>xt)&&t.render(n,!0)),xs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-xt}},zi=function(e,t,n,a){return t.parent&&Ka(t),t._start=Rt((ca(n)?n:n||e!==Lt?li(e,n,t):e._time)+t._delay),t._end=Rt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),qm(e,t,"_first","_last",e._sort?"_start":0),Zd(t)||(e._recent=t),a||Wm(e,t),e._ts<0&&bc(e,e._tTime),e},Km=function(e,t){return(ti.ScrollTrigger||cf("scrollTrigger",t))&&ti.ScrollTrigger.create(t,e)},Xm=function(e,t,n,a,s){if(mf(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!rn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Bm!==Xn.frame)return Ga.push(e),e._lazy=[s,a],1},Y0=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},Zd=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Z0=function(e,t,n,a){var s=e.ratio,r=t<0||!t&&(!e._start&&Y0(e)&&!(!e._initted&&Zd(e))||(e._ts<0||e._dp._ts<0)&&!Zd(e))?0:1,o=e._rDelay,l=0,c,d,f;if(o&&e._repeat&&(l=Po(0,e._tDur,t),d=vr(l,o),e._yoyo&&d&1&&(r=1-r),d!==vr(e._tTime,o)&&(s=1-r,e.vars.repeatRefresh&&e._initted&&e.invalidate())),r!==s||rn||a||e._zTime===xt||!t&&e._zTime){if(!e._initted&&Xm(e,t,a,n,l))return;for(f=e._zTime,e._zTime=t||(n?xt:0),n||(n=t&&!f),e.ratio=r,e._from&&(r=1-r),e._time=0,e._tTime=l,c=e._pt;c;)c.r(r,c.d),c=c._next;t<0&&Yd(e,t,n,!0),e._onUpdate&&!n&&Jn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Jn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===r&&(r&&Ka(e,1),!n&&!rn&&(Jn(e,r?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},J0=function(e,t,n){var a;if(n>t)for(a=e._first;a&&a._start<=n;){if(a.data==="isPause"&&a._start>t)return a;a=a._next}else for(a=e._last;a&&a._start>=n;){if(a.data==="isPause"&&a._start<t)return a;a=a._prev}},_r=function(e,t,n,a){var s=e._repeat,r=Rt(t)||0,o=e._tTime/e._tDur;return o&&!a&&(e._time*=r/e._dur),e._dur=r,e._tDur=s?s<0?1e10:Rt(r*(s+1)+e._rDelay*s):r,o>0&&!a&&bc(e,e._tTime=e._tDur*o),e.parent&&yc(e),n||xs(e.parent,e),e},yh=function(e){return e instanceof Ln?xs(e):_r(e,e._dur)},j0={_start:0,endTime:po,totalDuration:po},li=function i(e,t,n){var a=e.labels,s=e._recent||j0,r=e.duration()>=ui?s.endTime(!1):e._dur,o,l,c;return an(t)&&(isNaN(t)||t in a)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in a||(a[t]=r),a[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(_n(n)?n[0]:n).totalDuration()),o>1?i(e,t.substr(0,o-1),n)+l:r+l)):t==null?r:+t},io=function(e,t,n){var a=ca(t[1]),s=(a?2:1)+(e<2?0:1),r=t[s],o,l;if(a&&(r.duration=t[1]),r.parent=n,e){for(o=r,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Cn(l.vars.inherit)&&l.parent;r.immediateRender=Cn(o.immediateRender),e<2?r.runBackwards=1:r.startAt=t[s-1]}return new Ht(t[0],r,t[s+1])},es=function(e,t){return e||e===0?t(e):t},Po=function(e,t,n){return n<e?e:n>t?t:n},vn=function(e,t){return!an(e)||!(t=$0.exec(e))?"":t[1]},Q0=function(e,t,n){return es(n,function(a){return Po(e,t,a)})},Jd=[].slice,Ym=function(e,t){return e&&Hi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Hi(e[0]))&&!e.nodeType&&e!==Pi},e_=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(a){var s;return an(a)&&!t||Ym(a,1)?(s=n).push.apply(s,fi(a)):n.push(a)})||n},fi=function(e,t,n){return Tt&&!t&&Tt.selector?Tt.selector(e):an(e)&&!n&&(Kd||!yr())?Jd.call((t||lf).querySelectorAll(e),0):_n(e)?e_(e,n):Ym(e)?Jd.call(e,0):e?[e]:[]},jd=function(e){return e=fi(e)[0]||ho("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return fi(t,n.querySelectorAll?n:n===e?ho("Invalid scope")||lf.createElement("div"):e)}},Zm=function(e){return e.sort(function(){return .5-Math.random()})},Jm=function(e){if(Nt(e))return e;var t=Hi(e)?e:{each:e},n=Ss(t.ease),a=t.from||0,s=parseFloat(t.base)||0,r={},o=a>0&&a<1,l=isNaN(a)||o,c=t.axis,d=a,f=a;return an(a)?d=f={center:.5,edges:.5,end:1}[a]||0:!o&&l&&(d=a[0],f=a[1]),function(u,h,v){var m=(v||t).length,p=r[m],g,y,T,b,S,k,A,x,w;if(!p){if(w=t.grid==="auto"?0:(t.grid||[1,ui])[1],!w){for(A=-ui;A<(A=v[w++].getBoundingClientRect().left)&&w<m;);w<m&&w--}for(p=r[m]=[],g=l?Math.min(w,m)*d-.5:a%w,y=w===ui?0:l?m*f/w-.5:a/w|0,A=0,x=ui,k=0;k<m;k++)T=k%w-g,b=y-(k/w|0),p[k]=S=c?Math.abs(c==="y"?b:T):Dm(T*T+b*b),S>A&&(A=S),S<x&&(x=S);a==="random"&&Zm(p),p.max=A-x,p.min=x,p.v=m=(parseFloat(t.amount)||parseFloat(t.each)*(w>m?m-1:c?c==="y"?m/w:w:Math.max(w,m/w))||0)*(a==="edges"?-1:1),p.b=m<0?s-m:s,p.u=vn(t.amount||t.each)||0,n=n&&m<0?h_(n):n}return m=(p[u]-p.min)/p.max||0,Rt(p.b+(n?n(m):m)*p.v)+p.u}},Qd=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var a=Rt(Math.round(parseFloat(n)/e)*e*t);return(a-a%1)/t+(ca(n)?0:vn(n))}},jm=function(e,t){var n=_n(e),a,s;return!n&&Hi(e)&&(a=n=e.radius||ui,e.values?(e=fi(e.values),(s=!ca(e[0]))&&(a*=a)):e=Qd(e.increment)),es(t,n?Nt(e)?function(r){return s=e(r),Math.abs(s-r)<=a?s:r}:function(r){for(var o=parseFloat(s?r.x:r),l=parseFloat(s?r.y:0),c=ui,d=0,f=e.length,u,h;f--;)s?(u=e[f].x-o,h=e[f].y-l,u=u*u+h*h):u=Math.abs(e[f]-o),u<c&&(c=u,d=f);return d=!a||c<=a?e[d]:r,s||d===r||ca(r)?d:d+vn(r)}:Qd(e))},Qm=function(e,t,n,a){return es(_n(e)?!t:n===!0?!!(n=0):!a,function(){return _n(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(a=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*a)/a})},t_=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(a){return t.reduce(function(s,r){return r(s)},a)}},n_=function(e,t){return function(n){return e(parseFloat(n))+(t||vn(n))}},i_=function(e,t,n){return tg(e,t,0,1,n)},eg=function(e,t,n){return es(n,function(a){return e[~~t(a)]})},a_=function i(e,t,n){var a=t-e;return _n(e)?eg(e,i(0,e.length),t):es(n,function(s){return(a+(s-e)%a)%a+e})},s_=function i(e,t,n){var a=t-e,s=a*2;return _n(e)?eg(e,i(0,e.length-1),t):es(n,function(r){return r=(s+(r-e)%s)%s||0,e+(r>a?s-r:r)})},mo=function(e){return e.replace(O0,function(t){var n=t.indexOf("[")+1,a=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(F0);return Qm(n?a:+a[0],n?0:+a[1],+a[2]||1e-5)})},tg=function(e,t,n,a,s){var r=t-e,o=a-n;return es(s,function(l){return n+((l-e)/r*o||0)})},r_=function i(e,t,n,a){var s=isNaN(e+t)?0:function(h){return(1-h)*e+h*t};if(!s){var r=an(e),o={},l,c,d,f,u;if(n===!0&&(a=1)&&(n=null),r)e={p:e},t={p:t};else if(_n(e)&&!_n(t)){for(d=[],f=e.length,u=f-2,c=1;c<f;c++)d.push(i(e[c-1],e[c]));f--,s=function(v){v*=f;var m=Math.min(u,~~v);return d[m](v-m)},n=t}else a||(e=gr(_n(e)?[]:{},e));if(!d){for(l in t)pf.call(o,e,l,"get",t[l]);s=function(v){return _f(v,o)||(r?e.p:e)}}}return es(n,s)},bh=function(e,t,n){var a=e.labels,s=ui,r,o,l;for(r in a)o=a[r]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=r,s=o);return l},Jn=function(e,t,n){var a=e.vars,s=a[t],r=Tt,o=e._ctx,l,c,d;if(s)return l=a[t+"Params"],c=a.callbackScope||e,n&&Ga.length&&Vl(),o&&(Tt=o),d=l?s.apply(c,l):s.call(c),Tt=r,d},Vr=function(e){return Ka(e),e.scrollTrigger&&e.scrollTrigger.kill(!!rn),e.progress()<1&&Jn(e,"onInterrupt"),e},nr,ng=[],ig=function(e){if(e)if(e=!e.name&&e.default||e,of()||e.headless){var t=e.name,n=Nt(e),a=t&&!n&&e.init?function(){this._props=[]}:e,s={init:po,render:_f,add:pf,kill:k_,modifier:S_,rawVars:0},r={targetTest:0,get:0,getSetter:vf,aliases:{},register:0};if(yr(),e!==a){if(Vn[t])return;ni(a,ni(ql(e,s),r)),gr(a.prototype,gr(s,ql(e,r))),Vn[a.prop=t]=a,e.targetTest&&(Tl.push(a),df[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Fm(t,a),e.register&&e.register(On,a,Dn)}else ng.push(e)},bt=255,qr={aqua:[0,bt,bt],lime:[0,bt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,bt],navy:[0,0,128],white:[bt,bt,bt],olive:[128,128,0],yellow:[bt,bt,0],orange:[bt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[bt,0,0],pink:[bt,192,203],cyan:[0,bt,bt],transparent:[bt,bt,bt,0]},Vc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*bt+.5|0},ag=function(e,t,n){var a=e?ca(e)?[e>>16,e>>8&bt,e&bt]:0:qr.black,s,r,o,l,c,d,f,u,h,v;if(!a){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),qr[e])a=qr[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),r=e.charAt(2),o=e.charAt(3),e="#"+s+s+r+r+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return a=parseInt(e.substr(1,6),16),[a>>16,a>>8&bt,a&bt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),a=[e>>16,e>>8&bt,e&bt]}else if(e.substr(0,3)==="hsl"){if(a=v=e.match(mh),!t)l=+a[0]%360/360,c=+a[1]/100,d=+a[2]/100,r=d<=.5?d*(c+1):d+c-d*c,s=d*2-r,a.length>3&&(a[3]*=1),a[0]=Vc(l+1/3,s,r),a[1]=Vc(l,s,r),a[2]=Vc(l-1/3,s,r);else if(~e.indexOf("="))return a=e.match(zm),n&&a.length<4&&(a[3]=1),a}else a=e.match(mh)||qr.transparent;a=a.map(Number)}return t&&!v&&(s=a[0]/bt,r=a[1]/bt,o=a[2]/bt,f=Math.max(s,r,o),u=Math.min(s,r,o),d=(f+u)/2,f===u?l=c=0:(h=f-u,c=d>.5?h/(2-f-u):h/(f+u),l=f===s?(r-o)/h+(r<o?6:0):f===r?(o-s)/h+2:(s-r)/h+4,l*=60),a[0]=~~(l+.5),a[1]=~~(c*100+.5),a[2]=~~(d*100+.5)),n&&a.length<4&&(a[3]=1),a},sg=function(e){var t=[],n=[],a=-1;return e.split(Va).forEach(function(s){var r=s.match(tr)||[];t.push.apply(t,r),n.push(a+=r.length+1)}),t.c=n,t},xh=function(e,t,n){var a="",s=(e+a).match(Va),r=t?"hsla(":"rgba(",o=0,l,c,d,f;if(!s)return e;if(s=s.map(function(u){return(u=ag(u,t,1))&&r+(t?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(d=sg(e),l=n.c,l.join(a)!==d.c.join(a)))for(c=e.replace(Va,"1").split(tr),f=c.length-1;o<f;o++)a+=c[o]+(~l.indexOf(o)?s.shift()||r+"0,0,0,0)":(d.length?d:s.length?s:n).shift());if(!c)for(c=e.split(Va),f=c.length-1;o<f;o++)a+=c[o]+s[o];return a+c[f]},Va=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in qr)i+="|"+e+"\\b";return new RegExp(i+")","gi")}(),o_=/hsl[a]?\(/,rg=function(e){var t=e.join(" "),n;if(Va.lastIndex=0,Va.test(t))return n=o_.test(t),e[1]=xh(e[1],n),e[0]=xh(e[0],n,sg(e[1])),!0},go,Xn=function(){var i=Date.now,e=500,t=33,n=i(),a=n,s=1e3/240,r=s,o=[],l,c,d,f,u,h,v=function m(p){var g=i()-a,y=p===!0,T,b,S,k;if((g>e||g<0)&&(n+=g-t),a+=g,S=a-n,T=S-r,(T>0||y)&&(k=++f.frame,u=S-f.time*1e3,f.time=S=S/1e3,r+=T+(T>=s?4:s-T),b=1),y||(l=c(m)),b)for(h=0;h<o.length;h++)o[h](S,u,k,p)};return f={time:0,frame:0,tick:function(){v(!0)},deltaRatio:function(p){return u/(1e3/(p||60))},wake:function(){Nm&&(!Kd&&of()&&(Pi=Kd=window,lf=Pi.document||{},ti.gsap=On,(Pi.gsapVersions||(Pi.gsapVersions=[])).push(On.version),Om(Gl||Pi.GreenSockGlobals||!Pi.gsap&&Pi||{}),ng.forEach(ig)),d=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=d||function(p){return setTimeout(p,r-f.time*1e3+1|0)},go=1,v(2))},sleep:function(){(d?cancelAnimationFrame:clearTimeout)(l),go=0,c=po},lagSmoothing:function(p,g){e=p||1/0,t=Math.min(g||33,e)},fps:function(p){s=1e3/(p||240),r=f.time*1e3+s},add:function(p,g,y){var T=g?function(b,S,k,A){p(b,S,k,A),f.remove(T)}:p;return f.remove(p),o[y?"unshift":"push"](T),yr(),T},remove:function(p,g){~(g=o.indexOf(p))&&o.splice(g,1)&&h>=g&&h--},_listeners:o},f}(),yr=function(){return!go&&Xn.wake()},at={},l_=/^[\d.\-M][\d.\-,\s]/,c_=/["']/g,d_=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),a=n[0],s=1,r=n.length,o,l,c;s<r;s++)l=n[s],o=s!==r-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[a]=isNaN(c)?c.replace(c_,"").trim():+c,a=l.substr(o+1).trim();return t},u_=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),a=e.indexOf("(",t);return e.substring(t,~a&&a<n?e.indexOf(")",n+1):n)},f_=function(e){var t=(e+"").split("("),n=at[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[d_(t[1])]:u_(e).split(",").map(Gm)):at._CE&&l_.test(e)?at._CE("",e):n},h_=function(e){return function(t){return 1-e(1-t)}},Ss=function(e,t){return e&&(Nt(e)?e:at[e]||f_(e))||t},Rs=function(e,t,n,a){n===void 0&&(n=function(l){return 1-t(1-l)}),a===void 0&&(a=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:a},r;return Pn(e,function(o){at[o]=ti[o]=s,at[r=o.toLowerCase()]=n;for(var l in s)at[r+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=at[o+"."+l]=s[l]}),s},og=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},qc=function i(e,t,n){var a=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),r=s/Wd*(Math.asin(1/a)||0),o=function(d){return d===1?1:a*Math.pow(2,-10*d)*N0((d-r)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:og(o);return s=Wd/s,l.config=function(c,d){return i(e,c,d)},l},Wc=function i(e,t){t===void 0&&(t=1.70158);var n=function(r){return r?--r*r*((t+1)*r+t)+1:0},a=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:og(n);return a.config=function(s){return i(e,s)},a};Pn("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;Rs(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});at.Linear.easeNone=at.none=at.Linear.easeIn;Rs("Elastic",qc("in"),qc("out"),qc());(function(i,e){var t=1/e,n=2*t,a=2.5*t,s=function(o){return o<t?i*o*o:o<n?i*Math.pow(o-1.5/e,2)+.75:o<a?i*(o-=2.25/e)*o+.9375:i*Math.pow(o-2.625/e,2)+.984375};Rs("Bounce",function(r){return 1-s(1-r)},s)})(7.5625,2.75);Rs("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});Rs("Circ",function(i){return-(Dm(1-i*i)-1)});Rs("Sine",function(i){return i===1?1:-U0(i*I0)+1});Rs("Back",Wc("in"),Wc("out"),Wc());at.SteppedEase=at.steps=ti.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,a=e+(t?0:1),s=t?1:0,r=1-xt;return function(o){return((a*Po(0,r,o)|0)+s)*n}}};fo.ease=at["quad.out"];Pn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return uf+=i+","+i+"Params,"});var lg=function(e,t){this.id=z0++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:$m,this.set=t?t.getSetter:vf},vo=function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,_r(this,+t.duration,1,1),this.data=t.data,Tt&&(this._ctx=Tt,Tt.data.push(this)),go||Xn.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,_r(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,a){if(yr(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(bc(this,n),!s._dp||s.parent||Wm(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&zi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!a||this._initted&&Math.abs(this._zTime)===xt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Hm(this,n,a)),this},e.time=function(n,a){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+_h(this))%(this._dur+this._rDelay)||(n?this._dur:0),a):this._time},e.totalProgress=function(n,a){return arguments.length?this.totalTime(this.totalDuration()*n,a):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,a){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+_h(this),a):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,a){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,a):this._repeat?vr(this._tTime,s)+1:1},e.timeScale=function(n,a){if(!arguments.length)return this._rts===-xt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Wl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-xt?0:this._rts,this.totalTime(Po(-Math.abs(this._delay),this.totalDuration(),s),a!==!1),yc(this),K0(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(yr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==xt&&(this._tTime-=xt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Rt(n);var a=this.parent||this._dp;return a&&(a._sort||!this.parent)&&zi(a,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Cn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var a=this.parent||this._dp;return a?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Wl(a.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=G0);var a=rn;return rn=n,hf(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),rn=a,this},e.globalTime=function(n){for(var a=this,s=arguments.length?n:a.rawTime();a;)s=a._start+s/(Math.abs(a._ts)||1),a=a._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,yh(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var a=this._time;return this._rDelay=n,yh(this),a?this.time(a):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,a){return this.totalTime(li(this,n),Cn(a))},e.restart=function(n,a){return this.play().totalTime(n?-this._delay:0,Cn(a)),this._dur||(this._zTime=-xt),this},e.play=function(n,a){return n!=null&&this.seek(n,a),this.reversed(!1).paused(!1)},e.reverse=function(n,a){return n!=null&&this.seek(n||this.totalDuration(),a),this.reversed(!0).paused(!1)},e.pause=function(n,a){return n!=null&&this.seek(n,a),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-xt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-xt,this},e.isActive=function(){var n=this.parent||this._dp,a=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=a&&s<this.endTime(!0)-xt)},e.eventCallback=function(n,a,s){var r=this.vars;return arguments.length>1?(a?(r[n]=a,s&&(r[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=a)):delete r[n],this):r[n]},e.then=function(n){var a=this,s=a._prom;return new Promise(function(r){var o=Nt(n)?n:Vm,l=function(){var d=a.then;a.then=null,s&&s(),Nt(o)&&(o=o(a))&&(o.then||o===a)&&(a.then=d),r(o),a.then=d};a._initted&&a.totalProgress()===1&&a._ts>=0||!a._tTime&&a._ts<0?l():a._prom=l})},e.kill=function(){Vr(this)},i}();ni(vo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-xt,_prom:0,_ps:!1,_rts:1});var Ln=function(i){Pm(e,i);function e(n,a){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Cn(n.sortChildren),Lt&&zi(n.parent||Lt,ta(s),a),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Km(ta(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(a,s,r){return io(0,arguments,this),this},t.from=function(a,s,r){return io(1,arguments,this),this},t.fromTo=function(a,s,r,o){return io(2,arguments,this),this},t.set=function(a,s,r){return s.duration=0,s.parent=this,no(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ht(a,s,li(this,r),1),this},t.call=function(a,s,r){return zi(this,Ht.delayedCall(0,a,s),r)},t.staggerTo=function(a,s,r,o,l,c,d){return r.duration=s,r.stagger=r.stagger||o,r.onComplete=c,r.onCompleteParams=d,r.parent=this,new Ht(a,r,li(this,l)),this},t.staggerFrom=function(a,s,r,o,l,c,d){return r.runBackwards=1,no(r).immediateRender=Cn(r.immediateRender),this.staggerTo(a,s,r,o,l,c,d)},t.staggerFromTo=function(a,s,r,o,l,c,d,f){return o.startAt=r,no(o).immediateRender=Cn(o.immediateRender),this.staggerTo(a,s,o,l,c,d,f)},t.render=function(a,s,r){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,d=a<=0?0:Rt(a),f=this._zTime<0!=a<0&&(this._initted||!c),u,h,v,m,p,g,y,T,b,S,k,A;if(this!==Lt&&d>l&&a>=0&&(d=l),d!==this._tTime||r||f){if(o!==this._time&&c&&(d+=this._time-o,a+=this._time-o),u=d,b=this._start,T=this._ts,g=!T,f&&(c||(o=this._zTime),(a||!s)&&(this._zTime=a)),this._repeat){if(k=this._yoyo,p=c+this._rDelay,this._repeat<-1&&a<0)return this.totalTime(p*100+a,s,r);if(u=Rt(d%p),d===l?(m=this._repeat,u=c):(S=Rt(d/p),m=~~S,m&&m===S&&(u=c,m--),u>c&&(u=c)),S=vr(this._tTime,p),!o&&this._tTime&&S!==m&&this._tTime-S*p-this._dur<=0&&(S=m),k&&m&1&&(u=c-u,A=1),m!==S&&!this._lock){var x=k&&S&1,w=x===(k&&m&1);if(m<S&&(x=!x),o=x?0:d%c?c:d,this._lock=1,this.render(o||(A?0:Rt(m*p)),s,!c)._lock=0,this._tTime=d,!s&&this.parent&&Jn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,S=m),o&&o!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,w&&(this._lock=2,o=x?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!g)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=J0(this,Rt(o),Rt(u)),y&&(d-=u-(u=y._start))),this._tTime=d,this._time=u,this._act=!!T,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=a,o=0),!o&&d&&c&&!s&&!S&&(Jn(this,"onStart"),this._tTime!==d))return this;if(u>=o&&a>=0)for(h=this._first;h;){if(v=h._next,(h._act||u>=h._start)&&h._ts&&y!==h){if(h.parent!==this)return this.render(a,s,r);if(h.render(h._ts>0?(u-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(u-h._start)*h._ts,s,r),u!==this._time||!this._ts&&!g){y=0,v&&(d+=this._zTime=-xt);break}}h=v}else{h=this._last;for(var R=a<0?a:u;h;){if(v=h._prev,(h._act||R<=h._end)&&h._ts&&y!==h){if(h.parent!==this)return this.render(a,s,r);if(h.render(h._ts>0?(R-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(R-h._start)*h._ts,s,r||rn&&hf(h)),u!==this._time||!this._ts&&!g){y=0,v&&(d+=this._zTime=R?-xt:xt);break}}h=v}}if(y&&!s&&(this.pause(),y.render(u>=o?0:-xt)._zTime=u>=o?1:-1,this._ts))return this._start=b,yc(this),this.render(a,s,r);this._onUpdate&&!s&&Jn(this,"onUpdate",!0),(d===l&&this._tTime>=this.totalDuration()||!d&&o)&&(b===this._start||Math.abs(T)!==Math.abs(this._ts))&&(this._lock||((a||!c)&&(d===l&&this._ts>0||!d&&this._ts<0)&&Ka(this,1),!s&&!(a<0&&!o)&&(d||o||!l)&&(Jn(this,d===l&&a>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(a,s){var r=this;if(ca(s)||(s=li(this,s,a)),!(a instanceof vo)){if(_n(a))return a.forEach(function(o){return r.add(o,s)}),this;if(an(a))return this.addLabel(a,s);if(Nt(a))a=Ht.delayedCall(0,a);else return this}return this!==a?zi(this,a,s):this},t.getChildren=function(a,s,r,o){a===void 0&&(a=!0),s===void 0&&(s=!0),r===void 0&&(r=!0),o===void 0&&(o=-ui);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Ht?s&&l.push(c):(r&&l.push(c),a&&l.push.apply(l,c.getChildren(!0,s,r)))),c=c._next;return l},t.getById=function(a){for(var s=this.getChildren(1,1,1),r=s.length;r--;)if(s[r].vars.id===a)return s[r]},t.remove=function(a){return an(a)?this.removeLabel(a):Nt(a)?this.killTweensOf(a):(a.parent===this&&_c(this,a),a===this._recent&&(this._recent=this._last),xs(this))},t.totalTime=function(a,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Rt(Xn.time-(this._ts>0?a/this._ts:(this.totalDuration()-a)/-this._ts))),i.prototype.totalTime.call(this,a,s),this._forcing=0,this):this._tTime},t.addLabel=function(a,s){return this.labels[a]=li(this,s),this},t.removeLabel=function(a){return delete this.labels[a],this},t.addPause=function(a,s,r){var o=Ht.delayedCall(0,s||po,r);return o.data="isPause",this._hasPause=1,zi(this,o,li(this,a))},t.removePause=function(a){var s=this._first;for(a=li(this,a);s;)s._start===a&&s.data==="isPause"&&Ka(s),s=s._next},t.killTweensOf=function(a,s,r){for(var o=this.getTweensOf(a,r),l=o.length;l--;)Da!==o[l]&&o[l].kill(a,s);return this},t.getTweensOf=function(a,s){for(var r=[],o=fi(a),l=this._first,c=ca(s),d;l;)l instanceof Ht?V0(l._targets,o)&&(c?(!Da||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&r.push(l):(d=l.getTweensOf(o,s)).length&&r.push.apply(r,d),l=l._next;return r},t.tweenTo=function(a,s){s=s||{};var r=this,o=li(r,a),l=s,c=l.startAt,d=l.onStart,f=l.onStartParams,u=l.immediateRender,h,v=Ht.to(r,ni({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:r._time))/r.timeScale())||xt,onStart:function(){if(r.pause(),!h){var p=s.duration||Math.abs((o-(c&&"time"in c?c.time:r._time))/r.timeScale());v._dur!==p&&_r(v,p,0,1).render(v._time,!0,!0),h=1}d&&d.apply(v,f||[])}},s));return u?v.render(0):v},t.tweenFromTo=function(a,s,r){return this.tweenTo(s,ni({startAt:{time:li(this,a)}},r))},t.recent=function(){return this._recent},t.nextLabel=function(a){return a===void 0&&(a=this._time),bh(this,li(this,a))},t.previousLabel=function(a){return a===void 0&&(a=this._time),bh(this,li(this,a),1)},t.currentLabel=function(a){return arguments.length?this.seek(a,!0):this.previousLabel(this._time+xt)},t.shiftChildren=function(a,s,r){r===void 0&&(r=0);var o=this._first,l=this.labels,c;for(a=Rt(a);o;)o._start>=r&&(o._start+=a,o._end+=a),o=o._next;if(s)for(c in l)l[c]>=r&&(l[c]+=a);return xs(this)},t.invalidate=function(a){var s=this._first;for(this._lock=0;s;)s.invalidate(a),s=s._next;return i.prototype.invalidate.call(this,a)},t.clear=function(a){a===void 0&&(a=!0);for(var s=this._first,r;s;)r=s._next,this.remove(s),s=r;return this._dp&&(this._time=this._tTime=this._pTime=0),a&&(this.labels={}),xs(this)},t.totalDuration=function(a){var s=0,r=this,o=r._last,l=ui,c,d,f;if(arguments.length)return r.timeScale((r._repeat<0?r.duration():r.totalDuration())/(r.reversed()?-a:a));if(r._dirty){for(f=r.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),d=o._start,d>l&&r._sort&&o._ts&&!r._lock?(r._lock=1,zi(r,o,d-o._delay,1)._lock=0):l=d,d<0&&o._ts&&(s-=d,(!f&&!r._dp||f&&f.smoothChildTiming)&&(r._start+=Rt(d/r._ts),r._time-=d,r._tTime-=d),r.shiftChildren(-d,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;_r(r,r===Lt&&r._time>s?r._time:s,1,1),r._dirty=0}return r._tDur},e.updateRoot=function(a){if(Lt._ts&&(Hm(Lt,Wl(a,Lt)),Bm=Xn.frame),Xn.frame>=gh){gh+=ei.autoSleep||120;var s=Lt._first;if((!s||!s._ts)&&ei.autoSleep&&Xn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Xn.sleep()}}},e}(vo);ni(Ln.prototype,{_lock:0,_hasPause:0,_forcing:0});var p_=function(e,t,n,a,s,r,o){var l=new Dn(this._pt,e,t,0,1,pg,null,s),c=0,d=0,f,u,h,v,m,p,g,y;for(l.b=n,l.e=a,n+="",a+="",(g=~a.indexOf("random("))&&(a=mo(a)),r&&(y=[n,a],r(y,e,t),n=y[0],a=y[1]),u=n.match(Hc)||[];f=Hc.exec(a);)v=f[0],m=a.substring(c,f.index),h?h=(h+1)%5:m.substr(-5)==="rgba("&&(h=1),v!==u[d++]&&(p=parseFloat(u[d-1])||0,l._pt={_next:l._pt,p:m||d===1?m:",",s:p,c:v.charAt(1)==="="?or(p,v)-p:parseFloat(v)-p,m:h&&h<4?Math.round:0},c=Hc.lastIndex);return l.c=c<a.length?a.substring(c,a.length):"",l.fp=o,(Um.test(a)||g)&&(l.e=0),this._pt=l,l},pf=function(e,t,n,a,s,r,o,l,c,d){Nt(a)&&(a=a(s||0,e,r));var f=e[t],u=n!=="get"?n:Nt(f)?c?e[t.indexOf("set")||!Nt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,h=Nt(f)?c?y_:fg:gf,v;if(an(a)&&(~a.indexOf("random(")&&(a=mo(a)),a.charAt(1)==="="&&(v=or(u,a)+(vn(u)||0),(v||v===0)&&(a=v))),!d||u!==a||eu)return!isNaN(u*a)&&a!==""?(v=new Dn(this._pt,e,t,+u||0,a-(u||0),typeof f=="boolean"?x_:hg,0,h),c&&(v.fp=c),o&&v.modifier(o,this,e),this._pt=v):(!f&&!(t in e)&&cf(t,a),p_.call(this,e,t,u,a,h,l||ei.stringFilter,c))},m_=function(e,t,n,a,s){if(Nt(e)&&(e=ao(e,s,t,n,a)),!Hi(e)||e.style&&e.nodeType||_n(e)||Im(e))return an(e)?ao(e,s,t,n,a):e;var r={},o;for(o in e)r[o]=ao(e[o],s,t,n,a);return r},cg=function(e,t,n,a,s,r){var o,l,c,d;if(Vn[e]&&(o=new Vn[e]).init(s,o.rawVars?t[e]:m_(t[e],a,s,r,n),n,a,r)!==!1&&(n._pt=l=new Dn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==nr))for(c=n._ptLookup[n._targets.indexOf(s)],d=o._props.length;d--;)c[o._props[d]]=l;return o},Da,eu,mf=function i(e,t,n){var a=e.vars,s=a.ease,r=a.startAt,o=a.immediateRender,l=a.lazy,c=a.onUpdate,d=a.runBackwards,f=a.yoyoEase,u=a.keyframes,h=a.autoRevert,v=e._dur,m=e._startAt,p=e._targets,g=e.parent,y=g&&g.data==="nested"?g.vars.targets:p,T=e._overwrite==="auto"&&!sf,b=e.timeline,S=a.easeReverse||f,k,A,x,w,R,L,z,F,C,$,D,P,Z;if(b&&(!u||!s)&&(s="none"),e._ease=Ss(s,fo.ease),e._rEase=S&&(Ss(S)||e._ease),e._from=!b&&!!a.runBackwards,e._from&&(e.ratio=1),!b||u&&!a.stagger){if(F=p[0]?bs(p[0]).harness:0,P=F&&a[F.prop],k=ql(a,df),m&&(m._zTime<0&&m.progress(1),t<0&&d&&o&&!h?m.render(-1,!0):m.revert(d&&v?wl:H0),m._lazy=0),r){if(Ka(e._startAt=Ht.set(p,ni({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!m&&Cn(l),startAt:null,delay:0,onUpdate:c&&function(){return Jn(e,"onUpdate")},stagger:0},r))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(rn||!o&&!h)&&e._startAt.revert(wl),o&&v&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(d&&v&&!m){if(t&&(o=!1),x=ni({overwrite:!1,data:"isFromStart",lazy:o&&!m&&Cn(l),immediateRender:o,stagger:0,parent:g},k),P&&(x[F.prop]=P),Ka(e._startAt=Ht.set(p,x)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(rn?e._startAt.revert(wl):e._startAt.render(-1,!0)),e._zTime=t,!o)i(e._startAt,xt,xt);else if(!t)return}for(e._pt=e._ptCache=0,l=v&&Cn(l)||l&&!v,A=0;A<p.length;A++){if(R=p[A],z=R._gsap||ff(p)[A]._gsap,e._ptLookup[A]=$={},Xd[z.id]&&Ga.length&&Vl(),D=y===p?A:y.indexOf(R),F&&(C=new F).init(R,P||k,e,D,y)!==!1&&(e._pt=w=new Dn(e._pt,R,C.name,0,1,C.render,C,0,C.priority),C._props.forEach(function(G){$[G]=w}),C.priority&&(L=1)),!F||P)for(x in k)Vn[x]&&(C=cg(x,k,e,D,R,y))?C.priority&&(L=1):$[x]=w=pf.call(e,R,x,"get",k[x],D,y,0,a.stringFilter);e._op&&e._op[A]&&e.kill(R,e._op[A]),T&&e._pt&&(Da=e,Lt.killTweensOf(R,$,e.globalTime(t)),Z=!e.parent,Da=0),e._pt&&l&&(Xd[z.id]=1)}L&&mg(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!Z,u&&t<=0&&b.render(ui,!0,!0)},g_=function(e,t,n,a,s,r,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],d,f,u,h;if(!c)for(c=e._ptCache[t]=[],u=e._ptLookup,h=e._targets.length;h--;){if(d=u[h][t],d&&d.d&&d.d._pt)for(d=d.d._pt;d&&d.p!==t&&d.fp!==t;)d=d._next;if(!d)return eu=1,e.vars[t]="+=0",mf(e,o),eu=0,l?ho(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(d)}for(h=c.length;h--;)f=c[h],d=f._pt||f,d.s=(a||a===0)&&!s?a:d.s+(a||0)+r*d.c,d.c=n-d.s,f.e&&(f.e=Ft(n)+vn(f.e)),f.b&&(f.b=d.s+vn(f.b))},v_=function(e,t){var n=e[0]?bs(e[0]).harness:0,a=n&&n.aliases,s,r,o,l;if(!a)return t;s=gr({},t);for(r in a)if(r in s)for(l=a[r].split(","),o=l.length;o--;)s[l[o]]=s[r];return s},__=function(e,t,n,a){var s=t.ease||a||"power1.inOut",r,o;if(_n(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(r in t)o=n[r]||(n[r]=[]),r==="ease"||o.push({t:parseFloat(e),v:t[r],e:s})},ao=function(e,t,n,a,s){return Nt(e)?e.call(t,n,a,s):an(e)&&~e.indexOf("random(")?mo(e):e},dg=uf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",ug={};Pn(dg+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return ug[i]=1});var Ht=function(i){Pm(e,i);function e(n,a,s,r){var o;typeof a=="number"&&(s.duration=a,a=s,s=null),o=i.call(this,r?a:no(a))||this;var l=o.vars,c=l.duration,d=l.delay,f=l.immediateRender,u=l.stagger,h=l.overwrite,v=l.keyframes,m=l.defaults,p=l.scrollTrigger,g=a.parent||Lt,y=(_n(n)||Im(n)?ca(n[0]):"length"in a)?[n]:fi(n),T,b,S,k,A,x,w,R;if(o._targets=y.length?ff(y):ho("GSAP target "+n+" not found. https://gsap.com",!ei.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=h,v||u||Ko(c)||Ko(d)){a=o.vars;var L=a.easeReverse||a.yoyoEase;if(T=o.timeline=new Ln({data:"nested",defaults:m||{},targets:g&&g.data==="nested"?g.vars.targets:y}),T.kill(),T.parent=T._dp=ta(o),T._start=0,u||Ko(c)||Ko(d)){if(k=y.length,w=u&&Jm(u),Hi(u))for(A in u)~dg.indexOf(A)&&(R||(R={}),R[A]=u[A]);for(b=0;b<k;b++)S=ql(a,ug),S.stagger=0,L&&(S.easeReverse=L),R&&gr(S,R),x=y[b],S.duration=+ao(c,ta(o),b,x,y),S.delay=(+ao(d,ta(o),b,x,y)||0)-o._delay,!u&&k===1&&S.delay&&(o._delay=d=S.delay,o._start+=d,S.delay=0),T.to(x,S,w?w(b,x,y):0),T._ease=at.none;T.duration()?c=d=0:o.timeline=0}else if(v){no(ni(T.vars.defaults,{ease:"none"})),T._ease=Ss(v.ease||a.ease||"none");var z=0,F,C,$;if(_n(v))v.forEach(function(D){return T.to(y,D,">")}),T.duration();else{S={};for(A in v)A==="ease"||A==="easeEach"||__(A,v[A],S,v.easeEach);for(A in S)for(F=S[A].sort(function(D,P){return D.t-P.t}),z=0,b=0;b<F.length;b++)C=F[b],$={ease:C.e,duration:(C.t-(b?F[b-1].t:0))/100*c},$[A]=C.v,T.to(y,$,z),z+=$.duration;T.duration()<c&&T.to({},{duration:c-T.duration()})}}c||o.duration(c=T.duration())}else o.timeline=0;return h===!0&&!sf&&(Da=ta(o),Lt.killTweensOf(y),Da=0),zi(g,ta(o),s),a.reversed&&o.reverse(),a.paused&&o.paused(!0),(f||!c&&!v&&o._start===Rt(g._time)&&Cn(f)&&X0(ta(o))&&g.data!=="nested")&&(o._tTime=-xt,o.render(Math.max(0,-d)||0)),p&&Km(ta(o),p),o}var t=e.prototype;return t.render=function(a,s,r){var o=this._time,l=this._tDur,c=this._dur,d=a<0,f=a>l-xt&&!d?l:a<xt?0:a,u,h,v,m,p,g,y,T;if(!c)Z0(this,a,s,r);else if(f!==this._tTime||!a||r||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==d||this._lazy){if(u=f,T=this.timeline,this._repeat){if(m=c+this._rDelay,this._repeat<-1&&d)return this.totalTime(m*100+a,s,r);if(u=Rt(f%m),f===l?(v=this._repeat,u=c):(p=Rt(f/m),v=~~p,v&&v===p?(u=c,v--):u>c&&(u=c)),g=this._yoyo&&v&1,g&&(u=c-u),p=vr(this._tTime,m),u===o&&!r&&this._initted&&v===p)return this._tTime=f,this;v!==p&&this.vars.repeatRefresh&&!g&&!this._lock&&u!==m&&this._initted&&(this._lock=r=1,this.render(Rt(m*v),!0).invalidate()._lock=0)}if(!this._initted){if(Xm(this,d?a:u,r,s,f))return this._tTime=0,this;if(o!==this._time&&!(r&&this.vars.repeatRefresh&&v!==p))return this;if(c!==this._dur)return this.render(a,s,r)}if(this._rEase){var b=u<o;if(b!==this._inv){var S=b?o:c-o;this._inv=b,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=S?(b?-1:1)/S:0,this._invScale=b?-this.ratio:1-this.ratio,this._invEase=b?this._rEase:this._ease}this.ratio=y=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=y=this._ease(u/c);if(this._from&&(this.ratio=y=1-y),this._tTime=f,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&f&&!s&&!p&&(Jn(this,"onStart"),this._tTime!==f))return this;for(h=this._pt;h;)h.r(y,h.d),h=h._next;T&&T.render(a<0?a:T._dur*T._ease(u/this._dur),s,r)||this._startAt&&(this._zTime=a),this._onUpdate&&!s&&(d&&Yd(this,a,s,r),Jn(this,"onUpdate")),this._repeat&&v!==p&&this.vars.onRepeat&&!s&&this.parent&&Jn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(d&&!this._onUpdate&&Yd(this,a,!0,!0),(a||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Ka(this,1),!s&&!(d&&!o)&&(f||o||g)&&(Jn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(a){return(!a||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(a),i.prototype.invalidate.call(this,a)},t.resetTo=function(a,s,r,o,l){go||Xn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),d;return this._initted||mf(this,c),d=this._ease(c/this._dur),g_(this,a,s,r,o,d,c,l)?this.resetTo(a,s,r,o,1):(bc(this,0),this.parent||qm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(a,s){if(s===void 0&&(s="all"),!a&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Vr(this):this.scrollTrigger&&this.scrollTrigger.kill(!!rn),this;if(this.timeline){var r=this.timeline.totalDuration();return this.timeline.killTweensOf(a,s,Da&&Da.vars.overwrite!==!0)._first||Vr(this),this.parent&&r!==this.timeline.totalDuration()&&_r(this,this._dur*this.timeline._tDur/r,0,1),this}var o=this._targets,l=a?fi(a):o,c=this._ptLookup,d=this._pt,f,u,h,v,m,p,g;if((!s||s==="all")&&W0(o,l))return s==="all"&&(this._pt=0),Vr(this);for(f=this._op=this._op||[],s!=="all"&&(an(s)&&(m={},Pn(s,function(y){return m[y]=1}),s=m),s=v_(o,s)),g=o.length;g--;)if(~l.indexOf(o[g])){u=c[g],s==="all"?(f[g]=s,v=u,h={}):(h=f[g]=f[g]||{},v=s);for(m in v)p=u&&u[m],p&&((!("kill"in p.d)||p.d.kill(m)===!0)&&_c(this,p,"_pt"),delete u[m]),h!=="all"&&(h[m]=1)}return this._initted&&!this._pt&&d&&Vr(this),this},e.to=function(a,s){return new e(a,s,arguments[2])},e.from=function(a,s){return io(1,arguments)},e.delayedCall=function(a,s,r,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:a,onComplete:s,onReverseComplete:s,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:o})},e.fromTo=function(a,s,r){return io(2,arguments)},e.set=function(a,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(a,s)},e.killTweensOf=function(a,s,r){return Lt.killTweensOf(a,s,r)},e}(vo);ni(Ht.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Pn("staggerTo,staggerFrom,staggerFromTo",function(i){Ht[i]=function(){var e=new Ln,t=Jd.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var gf=function(e,t,n){return e[t]=n},fg=function(e,t,n){return e[t](n)},y_=function(e,t,n,a){return e[t](a.fp,n)},b_=function(e,t,n){return e.setAttribute(t,n)},vf=function(e,t){return Nt(e[t])?fg:rf(e[t])&&e.setAttribute?b_:gf},hg=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},x_=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},pg=function(e,t){var n=t._pt,a="";if(!e&&t.b)a=t.b;else if(e===1&&t.e)a=t.e;else{for(;n;)a=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+a,n=n._next;a+=t.c}t.set(t.t,t.p,a,t)},_f=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},S_=function(e,t,n,a){for(var s=this._pt,r;s;)r=s._next,s.p===a&&s.modifier(e,t,n),s=r},k_=function(e){for(var t=this._pt,n,a;t;)a=t._next,t.p===e&&!t.op||t.op===e?_c(this,t,"_pt"):t.dep||(n=1),t=a;return!n},M_=function(e,t,n,a){a.mSet(e,t,a.m.call(a.tween,n,a.mt),a)},mg=function(e){for(var t=e._pt,n,a,s,r;t;){for(n=t._next,a=s;a&&a.pr>t.pr;)a=a._next;(t._prev=a?a._prev:r)?t._prev._next=t:s=t,(t._next=a)?a._prev=t:r=t,t=n}e._pt=s},Dn=function(){function i(t,n,a,s,r,o,l,c,d){this.t=n,this.s=s,this.c=r,this.p=a,this.r=o||hg,this.d=l||this,this.set=c||gf,this.pr=d||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,a,s){this.mSet=this.mSet||this.set,this.set=M_,this.m=n,this.mt=s,this.tween=a},i}();Pn(uf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(i){return df[i]=1});ti.TweenMax=ti.TweenLite=Ht;ti.TimelineLite=ti.TimelineMax=Ln;Lt=new Ln({sortChildren:!1,defaults:fo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ei.stringFilter=rg;var ks=[],Al={},E_=[],Sh=0,w_=0,Kc=function(e){return(Al[e]||E_).map(function(t){return t()})},tu=function(){var e=Date.now(),t=[];e-Sh>2&&(Kc("matchMediaInit"),ks.forEach(function(n){var a=n.queries,s=n.conditions,r,o,l,c;for(o in a)r=Pi.matchMedia(a[o]).matches,r&&(l=1),r!==s[o]&&(s[o]=r,c=1);c&&(n.revert(),l&&t.push(n))}),Kc("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(a){return n.add(null,a)})}),Sh=e,Kc("matchMedia"))},gg=function(){function i(t,n){this.selector=n&&jd(n),this.data=[],this._r=[],this.isReverted=!1,this.id=w_++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,a,s){Nt(n)&&(s=a,a=n,n=Nt);var r=this,o=function(){var c=Tt,d=r.selector,f;return c&&c!==r&&c.data.push(r),s&&(r.selector=jd(s)),Tt=r,f=a.apply(r,arguments),Nt(f)&&r._r.push(f),Tt=c,r.selector=d,r.isReverted=!1,f};return r.last=o,n===Nt?o(r,function(l){return r.add(null,l)}):n?r[n]=o:o},e.ignore=function(n){var a=Tt;Tt=null,n(this),Tt=a},e.getTweens=function(){var n=[];return this.data.forEach(function(a){return a instanceof i?n.push.apply(n,a.getTweens()):a instanceof Ht&&!(a.parent&&a.parent.data==="nested")&&n.push(a)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,a){var s=this;if(n?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(d){return o.splice(o.indexOf(d),1)}));for(o.map(function(d){return{g:d._dur||d._delay||d._sat&&!d._sat.vars.immediateRender?d.globalTime(0):-1/0,t:d}}).sort(function(d,f){return f.g-d.g||-1/0}).forEach(function(d){return d.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Ln?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ht)&&c.revert&&c.revert(n);s._r.forEach(function(d){return d(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),a)for(var r=ks.length;r--;)ks[r].id===this.id&&ks.splice(r,1)},e.revert=function(n){this.kill(n||{})},i}(),T_=function(){function i(t){this.contexts=[],this.scope=t,Tt&&Tt.data.push(this)}var e=i.prototype;return e.add=function(n,a,s){Hi(n)||(n={matches:n});var r=new gg(0,s||this.scope),o=r.conditions={},l,c,d;Tt&&!r.selector&&(r.selector=Tt.selector),this.contexts.push(r),a=r.add("onMatch",a),r.queries=n;for(c in n)c==="all"?d=1:(l=Pi.matchMedia(n[c]),l&&(ks.indexOf(r)<0&&ks.push(r),(o[c]=l.matches)&&(d=1),l.addListener?l.addListener(tu):l.addEventListener("change",tu)));return d&&a(r,function(f){return r.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(a){return a.kill(n,!0)})},i}(),Kl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(a){return ig(a)})},timeline:function(e){return new Ln(e)},getTweensOf:function(e,t){return Lt.getTweensOf(e,t)},getProperty:function(e,t,n,a){an(e)&&(e=fi(e)[0]);var s=bs(e||{}).get,r=n?Vm:Gm;return n==="native"&&(n=""),e&&(t?r((Vn[t]&&Vn[t].get||s)(e,t,n,a)):function(o,l,c){return r((Vn[o]&&Vn[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=fi(e),e.length>1){var a=e.map(function(d){return On.quickSetter(d,t,n)}),s=a.length;return function(d){for(var f=s;f--;)a[f](d)}}e=e[0]||{};var r=Vn[t],o=bs(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=r?function(d){var f=new r;nr._pt=0,f.init(e,n?d+n:d,nr,0,[e]),f.render(1,f),nr._pt&&_f(1,nr)}:o.set(e,l);return r?c:function(d){return c(e,l,n?d+n:d,o,1)}},quickTo:function(e,t,n){var a,s=On.to(e,ni((a={},a[t]="+=0.1",a.paused=!0,a.stagger=0,a),n||{})),r=function(l,c,d){return s.resetTo(t,l,c,d)};return r.tween=s,r},isTweening:function(e){return Lt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ss(e.ease,fo.ease)),vh(fo,e||{})},config:function(e){return vh(ei,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,a=e.plugins,s=e.defaults,r=e.extendTimeline;(a||"").split(",").forEach(function(o){return o&&!Vn[o]&&!ti[o]&&ho(t+" effect requires "+o+" plugin.")}),Gc[t]=function(o,l,c){return n(fi(o),ni(l||{},s),c)},r&&(Ln.prototype[t]=function(o,l,c){return this.add(Gc[t](o,Hi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){at[e]=Ss(t)},parseEase:function(e,t){return arguments.length?Ss(e,t):at},getById:function(e){return Lt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Ln(e),a,s;for(n.smoothChildTiming=Cn(e.smoothChildTiming),Lt.remove(n),n._dp=0,n._time=n._tTime=Lt._time,a=Lt._first;a;)s=a._next,(t||!(!a._dur&&a instanceof Ht&&a.vars.onComplete===a._targets[0]))&&zi(n,a,a._start-a._delay),a=s;return zi(Lt,n,0),n},context:function(e,t){return e?new gg(e,t):Tt},matchMedia:function(e){return new T_(e)},matchMediaRefresh:function(){return ks.forEach(function(e){var t=e.conditions,n,a;for(a in t)t[a]&&(t[a]=!1,n=1);n&&e.revert()})||tu()},addEventListener:function(e,t){var n=Al[e]||(Al[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Al[e],a=n&&n.indexOf(t);a>=0&&n.splice(a,1)},utils:{wrap:a_,wrapYoyo:s_,distribute:Jm,random:Qm,snap:jm,normalize:i_,getUnit:vn,clamp:Q0,splitColor:ag,toArray:fi,selector:jd,mapRange:tg,pipe:t_,unitize:n_,interpolate:r_,shuffle:Zm},install:Om,effects:Gc,ticker:Xn,updateRoot:Ln.updateRoot,plugins:Vn,globalTimeline:Lt,core:{PropTween:Dn,globals:Fm,Tween:Ht,Timeline:Ln,Animation:vo,getCache:bs,_removeLinkedListItem:_c,reverting:function(){return rn},context:function(e){return e&&Tt&&(Tt.data.push(e),e._ctx=Tt),Tt},suppressOverwrites:function(e){return sf=e}}};Pn("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return Kl[i]=Ht[i]});Xn.add(Ln.updateRoot);nr=Kl.to({},{duration:0});var A_=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},R_=function(e,t){var n=e._targets,a,s,r;for(a in t)for(s=n.length;s--;)r=e._ptLookup[s][a],r&&(r=r.d)&&(r._pt&&(r=A_(r,a)),r&&r.modifier&&r.modifier(t[a],e,n[s],a))},Xc=function(e,t){return{name:e,headless:1,rawVars:1,init:function(a,s,r){r._onInit=function(o){var l,c;if(an(s)&&(l={},Pn(s,function(d){return l[d]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}R_(o,s)}}}},On=Kl.registerPlugin({name:"attr",init:function(e,t,n,a,s){var r,o,l;this.tween=n;for(r in t)l=e.getAttribute(r)||"",o=this.add(e,"setAttribute",(l||0)+"",t[r],a,s,0,0,r),o.op=r,o.b=l,this._props.push(r)},render:function(e,t){for(var n=t._pt;n;)rn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Xc("roundProps",Qd),Xc("modifiers"),Xc("snap",jm))||Kl;Ht.version=Ln.version=On.version="3.15.0";Nm=1;of()&&yr();at.Power0;at.Power1;at.Power2;at.Power3;at.Power4;at.Linear;at.Quad;at.Cubic;at.Quart;at.Quint;at.Strong;at.Elastic;at.Back;at.SteppedEase;at.Bounce;at.Sine;at.Expo;at.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var kh,Ia,lr,yf,gs,Mh,bf,L_=function(){return typeof window<"u"},da={},ds=180/Math.PI,cr=Math.PI/180,zs=Math.atan2,Eh=1e8,xf=/([A-Z])/g,C_=/(left|right|width|margin|padding|x)/i,P_=/[\s,\(]\S/,Ui={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},nu=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},D_=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},I_=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},z_=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},U_=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},vg=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},_g=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},N_=function(e,t,n){return e.style[t]=n},O_=function(e,t,n){return e.style.setProperty(t,n)},F_=function(e,t,n){return e._gsap[t]=n},B_=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},$_=function(e,t,n,a,s){var r=e._gsap;r.scaleX=r.scaleY=n,r.renderTransform(s,r)},H_=function(e,t,n,a,s){var r=e._gsap;r[t]=n,r.renderTransform(s,r)},Pt="transform",In=Pt+"Origin",G_=function i(e,t){var n=this,a=this.target,s=a.style,r=a._gsap;if(e in da&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Ui[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=ia(a,o)}):this.tfm[e]=r.x?r[e]:ia(a,e),e===In&&(this.tfm.zOrigin=r.zOrigin);else return Ui.transform.split(",").forEach(function(o){return i.call(n,o,t)});if(this.props.indexOf(Pt)>=0)return;r.svg&&(this.svgo=a.getAttribute("data-svg-origin"),this.props.push(In,t,"")),e=Pt}(s||t)&&this.props.push(e,t,s[e])},yg=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},V_=function(){var e=this.props,t=this.target,n=t.style,a=t._gsap,s,r;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(xf,"-$1").toLowerCase());if(this.tfm){for(r in this.tfm)a[r]=this.tfm[r];a.svg&&(a.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=bf(),(!s||!s.isStart)&&!n[Pt]&&(yg(n),a.zOrigin&&n[In]&&(n[In]+=" "+a.zOrigin+"px",a.zOrigin=0,a.renderTransform()),a.uncache=1)}},bg=function(e,t){var n={target:e,props:[],revert:V_,save:G_};return e._gsap||On.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(a){return n.save(a)}),n},xg,iu=function(e,t){var n=Ia.createElementNS?Ia.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ia.createElement(e);return n&&n.style?n:Ia.createElement(e)},jn=function i(e,t,n){var a=getComputedStyle(e);return a[t]||a.getPropertyValue(t.replace(xf,"-$1").toLowerCase())||a.getPropertyValue(t)||!n&&i(e,br(t)||t,1)||""},wh="O,Moz,ms,Ms,Webkit".split(","),br=function(e,t,n){var a=t||gs,s=a.style,r=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);r--&&!(wh[r]+e in s););return r<0?null:(r===3?"ms":r>=0?wh[r]:"")+e},au=function(){L_()&&window.document&&(kh=window,Ia=kh.document,lr=Ia.documentElement,gs=iu("div")||{style:{}},iu("div"),Pt=br(Pt),In=Pt+"Origin",gs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",xg=!!br("perspective"),bf=On.core.reverting,yf=1)},Th=function(e){var t=e.ownerSVGElement,n=iu("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),a=e.cloneNode(!0),s;a.style.display="block",n.appendChild(a),lr.appendChild(n);try{s=a.getBBox()}catch{}return n.removeChild(a),lr.removeChild(n),s},Ah=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Sg=function(e){var t,n;try{t=e.getBBox()}catch{t=Th(e),n=1}return t&&(t.width||t.height)||n||(t=Th(e)),t&&!t.width&&!t.x&&!t.y?{x:+Ah(e,["x","cx","x1"])||0,y:+Ah(e,["y","cy","y1"])||0,width:0,height:0}:t},kg=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Sg(e))},Xa=function(e,t){if(t){var n=e.style,a;t in da&&t!==In&&(t=Pt),n.removeProperty?(a=t.substr(0,2),(a==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(a==="--"?t:t.replace(xf,"-$1").toLowerCase())):n.removeAttribute(t)}},za=function(e,t,n,a,s,r){var o=new Dn(e._pt,t,n,0,1,r?_g:vg);return e._pt=o,o.b=a,o.e=s,e._props.push(n),o},Rh={deg:1,rad:1,turn:1},q_={grid:1,flex:1},Ya=function i(e,t,n,a){var s=parseFloat(n)||0,r=(n+"").trim().substr((s+"").length)||"px",o=gs.style,l=C_.test(t),c=e.tagName.toLowerCase()==="svg",d=(c?"client":"offset")+(l?"Width":"Height"),f=100,u=a==="px",h=a==="%",v,m,p,g;if(a===r||!s||Rh[a]||Rh[r])return s;if(r!=="px"&&!u&&(s=i(e,t,n,"px")),g=e.getCTM&&kg(e),(h||r==="%")&&(da[t]||~t.indexOf("adius")))return v=g?e.getBBox()[l?"width":"height"]:e[d],Ft(h?s/v*f:s/100*v);if(o[l?"width":"height"]=f+(u?r:a),m=a!=="rem"&&~t.indexOf("adius")||a==="em"&&e.appendChild&&!c?e:e.parentNode,g&&(m=(e.ownerSVGElement||{}).parentNode),(!m||m===Ia||!m.appendChild)&&(m=Ia.body),p=m._gsap,p&&h&&p.width&&l&&p.time===Xn.time&&!p.uncache)return Ft(s/p.width*f);if(h&&(t==="height"||t==="width")){var y=e.style[t];e.style[t]=f+a,v=e[d],y?e.style[t]=y:Xa(e,t)}else(h||r==="%")&&!q_[jn(m,"display")]&&(o.position=jn(e,"position")),m===e&&(o.position="static"),m.appendChild(gs),v=gs[d],m.removeChild(gs),o.position="absolute";return l&&h&&(p=bs(m),p.time=Xn.time,p.width=m[d]),Ft(u?v*s/f:v&&s?f/v*s:0)},ia=function(e,t,n,a){var s;return yf||au(),t in Ui&&t!=="transform"&&(t=Ui[t],~t.indexOf(",")&&(t=t.split(",")[0])),da[t]&&t!=="transform"?(s=yo(e,a),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Yl(jn(e,In))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||a||~(s+"").indexOf("calc("))&&(s=Xl[t]&&Xl[t](e,t,n)||jn(e,t)||$m(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Ya(e,t,s,n)+n:s},W_=function(e,t,n,a){if(!n||n==="none"){var s=br(t,e,1),r=s&&jn(e,s,1);r&&r!==n?(t=s,n=r):t==="borderColor"&&(n=jn(e,"borderTopColor"))}var o=new Dn(this._pt,e.style,t,0,1,pg),l=0,c=0,d,f,u,h,v,m,p,g,y,T,b,S;if(o.b=n,o.e=a,n+="",a+="",a.substring(0,6)==="var(--"&&(a=jn(e,a.substring(4,a.indexOf(")")))),a==="auto"&&(m=e.style[t],e.style[t]=a,a=jn(e,t)||a,m?e.style[t]=m:Xa(e,t)),d=[n,a],rg(d),n=d[0],a=d[1],u=n.match(tr)||[],S=a.match(tr)||[],S.length){for(;f=tr.exec(a);)p=f[0],y=a.substring(l,f.index),v?v=(v+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(v=1),p!==(m=u[c++]||"")&&(h=parseFloat(m)||0,b=m.substr((h+"").length),p.charAt(1)==="="&&(p=or(h,p)+b),g=parseFloat(p),T=p.substr((g+"").length),l=tr.lastIndex-T.length,T||(T=T||ei.units[t]||b,l===a.length&&(a+=T,o.e+=T)),b!==T&&(h=Ya(e,t,m,T)||0),o._pt={_next:o._pt,p:y||c===1?y:",",s:h,c:g-h,m:v&&v<4||t==="zIndex"?Math.round:0});o.c=l<a.length?a.substring(l,a.length):""}else o.r=t==="display"&&a==="none"?_g:vg;return Um.test(a)&&(o.e=0),this._pt=o,o},Lh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},K_=function(e){var t=e.split(" "),n=t[0],a=t[1]||"50%";return(n==="top"||n==="bottom"||a==="left"||a==="right")&&(e=n,n=a,a=e),t[0]=Lh[n]||n,t[1]=Lh[a]||a,t.join(" ")},X_=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,a=n.style,s=t.u,r=n._gsap,o,l,c;if(s==="all"||s===!0)a.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],da[o]&&(l=1,o=o==="transformOrigin"?In:Pt),Xa(n,o);l&&(Xa(n,Pt),r&&(r.svg&&n.removeAttribute("transform"),a.scale=a.rotate=a.translate="none",yo(n,1),r.uncache=1,yg(a)))}},Xl={clearProps:function(e,t,n,a,s){if(s.data!=="isFromStart"){var r=e._pt=new Dn(e._pt,t,n,0,0,X_);return r.u=a,r.pr=-10,r.tween=s,e._props.push(n),1}}},_o=[1,0,0,1,0,0],Mg={},Eg=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Ch=function(e){var t=jn(e,Pt);return Eg(t)?_o:t.substr(7).match(zm).map(Ft)},Sf=function(e,t){var n=e._gsap||bs(e),a=e.style,s=Ch(e),r,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?_o:s):(s===_o&&!e.offsetParent&&e!==lr&&!n.svg&&(l=a.display,a.display="block",r=e.parentNode,(!r||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,lr.appendChild(e)),s=Ch(e),l?a.display=l:Xa(e,"display"),c&&(o?r.insertBefore(e,o):r?r.appendChild(e):lr.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},su=function(e,t,n,a,s,r){var o=e._gsap,l=s||Sf(e,!0),c=o.xOrigin||0,d=o.yOrigin||0,f=o.xOffset||0,u=o.yOffset||0,h=l[0],v=l[1],m=l[2],p=l[3],g=l[4],y=l[5],T=t.split(" "),b=parseFloat(T[0])||0,S=parseFloat(T[1])||0,k,A,x,w;n?l!==_o&&(A=h*p-v*m)&&(x=b*(p/A)+S*(-m/A)+(m*y-p*g)/A,w=b*(-v/A)+S*(h/A)-(h*y-v*g)/A,b=x,S=w):(k=Sg(e),b=k.x+(~T[0].indexOf("%")?b/100*k.width:b),S=k.y+(~(T[1]||T[0]).indexOf("%")?S/100*k.height:S)),a||a!==!1&&o.smooth?(g=b-c,y=S-d,o.xOffset=f+(g*h+y*m)-g,o.yOffset=u+(g*v+y*p)-y):o.xOffset=o.yOffset=0,o.xOrigin=b,o.yOrigin=S,o.smooth=!!a,o.origin=t,o.originIsAbsolute=!!n,e.style[In]="0px 0px",r&&(za(r,o,"xOrigin",c,b),za(r,o,"yOrigin",d,S),za(r,o,"xOffset",f,o.xOffset),za(r,o,"yOffset",u,o.yOffset)),e.setAttribute("data-svg-origin",b+" "+S)},yo=function(e,t){var n=e._gsap||new lg(e);if("x"in n&&!t&&!n.uncache)return n;var a=e.style,s=n.scaleX<0,r="px",o="deg",l=getComputedStyle(e),c=jn(e,In)||"0",d,f,u,h,v,m,p,g,y,T,b,S,k,A,x,w,R,L,z,F,C,$,D,P,Z,G,ee,ae,ue,ke,Ne,Ie;return d=f=u=m=p=g=y=T=b=0,h=v=1,n.svg=!!(e.getCTM&&kg(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(a[Pt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Pt]!=="none"?l[Pt]:"")),a.scale=a.rotate=a.translate="none"),A=Sf(e,n.svg),n.svg&&(n.uncache?(Z=e.getBBox(),c=n.xOrigin-Z.x+"px "+(n.yOrigin-Z.y)+"px",P=""):P=!t&&e.getAttribute("data-svg-origin"),su(e,P||c,!!P||n.originIsAbsolute,n.smooth!==!1,A)),S=n.xOrigin||0,k=n.yOrigin||0,A!==_o&&(L=A[0],z=A[1],F=A[2],C=A[3],d=$=A[4],f=D=A[5],A.length===6?(h=Math.sqrt(L*L+z*z),v=Math.sqrt(C*C+F*F),m=L||z?zs(z,L)*ds:0,y=F||C?zs(F,C)*ds+m:0,y&&(v*=Math.abs(Math.cos(y*cr))),n.svg&&(d-=S-(S*L+k*F),f-=k-(S*z+k*C))):(Ie=A[6],ke=A[7],ee=A[8],ae=A[9],ue=A[10],Ne=A[11],d=A[12],f=A[13],u=A[14],x=zs(Ie,ue),p=x*ds,x&&(w=Math.cos(-x),R=Math.sin(-x),P=$*w+ee*R,Z=D*w+ae*R,G=Ie*w+ue*R,ee=$*-R+ee*w,ae=D*-R+ae*w,ue=Ie*-R+ue*w,Ne=ke*-R+Ne*w,$=P,D=Z,Ie=G),x=zs(-F,ue),g=x*ds,x&&(w=Math.cos(-x),R=Math.sin(-x),P=L*w-ee*R,Z=z*w-ae*R,G=F*w-ue*R,Ne=C*R+Ne*w,L=P,z=Z,F=G),x=zs(z,L),m=x*ds,x&&(w=Math.cos(x),R=Math.sin(x),P=L*w+z*R,Z=$*w+D*R,z=z*w-L*R,D=D*w-$*R,L=P,$=Z),p&&Math.abs(p)+Math.abs(m)>359.9&&(p=m=0,g=180-g),h=Ft(Math.sqrt(L*L+z*z+F*F)),v=Ft(Math.sqrt(D*D+Ie*Ie)),x=zs($,D),y=Math.abs(x)>2e-4?x*ds:0,b=Ne?1/(Ne<0?-Ne:Ne):0),n.svg&&(P=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Eg(jn(e,Pt)),P&&e.setAttribute("transform",P))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(h*=-1,y+=m<=0?180:-180,m+=m<=0?180:-180):(v*=-1,y+=y<=0?180:-180)),t=t||n.uncache,n.x=d-((n.xPercent=d&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-d)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+r,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+r,n.z=u+r,n.scaleX=Ft(h),n.scaleY=Ft(v),n.rotation=Ft(m)+o,n.rotationX=Ft(p)+o,n.rotationY=Ft(g)+o,n.skewX=y+o,n.skewY=T+o,n.transformPerspective=b+r,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(a[In]=Yl(c)),n.xOffset=n.yOffset=0,n.force3D=ei.force3D,n.renderTransform=n.svg?Z_:xg?wg:Y_,n.uncache=0,n},Yl=function(e){return(e=e.split(" "))[0]+" "+e[1]},Yc=function(e,t,n){var a=vn(t);return Ft(parseFloat(t)+parseFloat(Ya(e,"x",n+"px",a)))+a},Y_=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,wg(e,t)},ns="0deg",Dr="0px",is=") ",wg=function(e,t){var n=t||this,a=n.xPercent,s=n.yPercent,r=n.x,o=n.y,l=n.z,c=n.rotation,d=n.rotationY,f=n.rotationX,u=n.skewX,h=n.skewY,v=n.scaleX,m=n.scaleY,p=n.transformPerspective,g=n.force3D,y=n.target,T=n.zOrigin,b="",S=g==="auto"&&e&&e!==1||g===!0;if(T&&(f!==ns||d!==ns)){var k=parseFloat(d)*cr,A=Math.sin(k),x=Math.cos(k),w;k=parseFloat(f)*cr,w=Math.cos(k),r=Yc(y,r,A*w*-T),o=Yc(y,o,-Math.sin(k)*-T),l=Yc(y,l,x*w*-T+T)}p!==Dr&&(b+="perspective("+p+is),(a||s)&&(b+="translate("+a+"%, "+s+"%) "),(S||r!==Dr||o!==Dr||l!==Dr)&&(b+=l!==Dr||S?"translate3d("+r+", "+o+", "+l+") ":"translate("+r+", "+o+is),c!==ns&&(b+="rotate("+c+is),d!==ns&&(b+="rotateY("+d+is),f!==ns&&(b+="rotateX("+f+is),(u!==ns||h!==ns)&&(b+="skew("+u+", "+h+is),(v!==1||m!==1)&&(b+="scale("+v+", "+m+is),y.style[Pt]=b||"translate(0, 0)"},Z_=function(e,t){var n=t||this,a=n.xPercent,s=n.yPercent,r=n.x,o=n.y,l=n.rotation,c=n.skewX,d=n.skewY,f=n.scaleX,u=n.scaleY,h=n.target,v=n.xOrigin,m=n.yOrigin,p=n.xOffset,g=n.yOffset,y=n.forceCSS,T=parseFloat(r),b=parseFloat(o),S,k,A,x,w;l=parseFloat(l),c=parseFloat(c),d=parseFloat(d),d&&(d=parseFloat(d),c+=d,l+=d),l||c?(l*=cr,c*=cr,S=Math.cos(l)*f,k=Math.sin(l)*f,A=Math.sin(l-c)*-u,x=Math.cos(l-c)*u,c&&(d*=cr,w=Math.tan(c-d),w=Math.sqrt(1+w*w),A*=w,x*=w,d&&(w=Math.tan(d),w=Math.sqrt(1+w*w),S*=w,k*=w)),S=Ft(S),k=Ft(k),A=Ft(A),x=Ft(x)):(S=f,x=u,k=A=0),(T&&!~(r+"").indexOf("px")||b&&!~(o+"").indexOf("px"))&&(T=Ya(h,"x",r,"px"),b=Ya(h,"y",o,"px")),(v||m||p||g)&&(T=Ft(T+v-(v*S+m*A)+p),b=Ft(b+m-(v*k+m*x)+g)),(a||s)&&(w=h.getBBox(),T=Ft(T+a/100*w.width),b=Ft(b+s/100*w.height)),w="matrix("+S+","+k+","+A+","+x+","+T+","+b+")",h.setAttribute("transform",w),y&&(h.style[Pt]=w)},J_=function(e,t,n,a,s){var r=360,o=an(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?ds:1),c=l-a,d=a+c+"deg",f,u;return o&&(f=s.split("_")[1],f==="short"&&(c%=r,c!==c%(r/2)&&(c+=c<0?r:-r)),f==="cw"&&c<0?c=(c+r*Eh)%r-~~(c/r)*r:f==="ccw"&&c>0&&(c=(c-r*Eh)%r-~~(c/r)*r)),e._pt=u=new Dn(e._pt,t,n,a,c,D_),u.e=d,u.u="deg",e._props.push(n),u},Ph=function(e,t){for(var n in t)e[n]=t[n];return e},j_=function(e,t,n){var a=Ph({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",r=n.style,o,l,c,d,f,u,h,v;a.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),r[Pt]=t,o=yo(n,1),Xa(n,Pt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Pt],r[Pt]=t,o=yo(n,1),r[Pt]=c);for(l in da)c=a[l],d=o[l],c!==d&&s.indexOf(l)<0&&(h=vn(c),v=vn(d),f=h!==v?Ya(n,l,c,v):parseFloat(c),u=parseFloat(d),e._pt=new Dn(e._pt,o,l,f,u-f,nu),e._pt.u=v||0,e._props.push(l));Ph(o,a)};Pn("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",a="Bottom",s="Left",r=(e<3?[t,n,a,s]:[t+s,t+n,a+n,a+s]).map(function(o){return e<2?i+o:"border"+o+i});Xl[e>1?"border"+i:i]=function(o,l,c,d,f){var u,h;if(arguments.length<4)return u=r.map(function(v){return ia(o,v,c)}),h=u.join(" "),h.split(u[0]).length===5?u[0]:h;u=(d+"").split(" "),h={},r.forEach(function(v,m){return h[v]=u[m]=u[m]||u[(m-1)/2|0]}),o.init(l,h,f)}});var Tg={name:"css",register:au,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,a,s){var r=this._props,o=e.style,l=n.vars.startAt,c,d,f,u,h,v,m,p,g,y,T,b,S,k,A,x,w;yf||au(),this.styles=this.styles||bg(e),x=this.styles.props,this.tween=n;for(m in t)if(m!=="autoRound"&&(d=t[m],!(Vn[m]&&cg(m,t,n,a,e,s)))){if(h=typeof d,v=Xl[m],h==="function"&&(d=d.call(n,a,e,s),h=typeof d),h==="string"&&~d.indexOf("random(")&&(d=mo(d)),v)v(this,e,m,d,n)&&(A=1);else if(m.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(m)+"").trim(),d+="",Va.lastIndex=0,Va.test(c)||(p=vn(c),g=vn(d),g?p!==g&&(c=Ya(e,m,c,g)+g):p&&(d+=p)),this.add(o,"setProperty",c,d,a,s,0,0,m),r.push(m),x.push(m,0,o[m]);else if(h!=="undefined"){if(l&&m in l?(c=typeof l[m]=="function"?l[m].call(n,a,e,s):l[m],an(c)&&~c.indexOf("random(")&&(c=mo(c)),vn(c+"")||c==="auto"||(c+=ei.units[m]||vn(ia(e,m))||""),(c+"").charAt(1)==="="&&(c=ia(e,m))):c=ia(e,m),u=parseFloat(c),y=h==="string"&&d.charAt(1)==="="&&d.substr(0,2),y&&(d=d.substr(2)),f=parseFloat(d),m in Ui&&(m==="autoAlpha"&&(u===1&&ia(e,"visibility")==="hidden"&&f&&(u=0),x.push("visibility",0,o.visibility),za(this,o,"visibility",u?"inherit":"hidden",f?"inherit":"hidden",!f)),m!=="scale"&&m!=="transform"&&(m=Ui[m],~m.indexOf(",")&&(m=m.split(",")[0]))),T=m in da,T){if(this.styles.save(m),w=d,h==="string"&&d.substring(0,6)==="var(--"){if(d=jn(e,d.substring(4,d.indexOf(")"))),d.substring(0,5)==="calc("){var R=e.style.perspective;e.style.perspective=d,d=jn(e,"perspective"),R?e.style.perspective=R:Xa(e,"perspective")}f=parseFloat(d)}if(b||(S=e._gsap,S.renderTransform&&!t.parseTransform||yo(e,t.parseTransform),k=t.smoothOrigin!==!1&&S.smooth,b=this._pt=new Dn(this._pt,o,Pt,0,1,S.renderTransform,S,0,-1),b.dep=1),m==="scale")this._pt=new Dn(this._pt,S,"scaleY",S.scaleY,(y?or(S.scaleY,y+f):f)-S.scaleY||0,nu),this._pt.u=0,r.push("scaleY",m),m+="X";else if(m==="transformOrigin"){x.push(In,0,o[In]),d=K_(d),S.svg?su(e,d,0,k,0,this):(g=parseFloat(d.split(" ")[2])||0,g!==S.zOrigin&&za(this,S,"zOrigin",S.zOrigin,g),za(this,o,m,Yl(c),Yl(d)));continue}else if(m==="svgOrigin"){su(e,d,1,k,0,this);continue}else if(m in Mg){J_(this,S,m,u,y?or(u,y+d):d);continue}else if(m==="smoothOrigin"){za(this,S,"smooth",S.smooth,d);continue}else if(m==="force3D"){S[m]=d;continue}else if(m==="transform"){j_(this,d,e);continue}}else m in o||(m=br(m)||m);if(T||(f||f===0)&&(u||u===0)&&!P_.test(d)&&m in o)p=(c+"").substr((u+"").length),f||(f=0),g=vn(d)||(m in ei.units?ei.units[m]:p),p!==g&&(u=Ya(e,m,c,g)),this._pt=new Dn(this._pt,T?S:o,m,u,(y?or(u,y+f):f)-u,!T&&(g==="px"||m==="zIndex")&&t.autoRound!==!1?U_:nu),this._pt.u=g||0,T&&w!==d?(this._pt.b=c,this._pt.e=w,this._pt.r=z_):p!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=I_);else if(m in o)W_.call(this,e,m,c,y?y+d:d);else if(m in e)this.add(e,m,c||e[m],y?y+d:d,a,s);else if(m!=="parseTransform"){cf(m,d);continue}T||(m in o?x.push(m,0,o[m]):typeof e[m]=="function"?x.push(m,2,e[m]()):x.push(m,1,c||e[m])),r.push(m)}}A&&mg(this)},render:function(e,t){if(t.tween._time||!bf())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:ia,aliases:Ui,getSetter:function(e,t,n){var a=Ui[t];return a&&a.indexOf(",")<0&&(t=a),t in da&&t!==In&&(e._gsap.x||ia(e,"x"))?n&&Mh===n?t==="scale"?B_:F_:(Mh=n||{})&&(t==="scale"?$_:H_):e.style&&!rf(e.style[t])?N_:~t.indexOf("-")?O_:vf(e,t)},core:{_removeProperty:Xa,_getMatrix:Sf}};On.utils.checkPrefix=br;On.core.getStyleSaver=bg;(function(i,e,t,n){var a=Pn(i+","+e+","+t,function(s){da[s]=1});Pn(e,function(s){ei.units[s]="deg",Mg[s]=1}),Ui[a[13]]=i+","+e,Pn(n,function(s){var r=s.split(":");Ui[r[1]]=a[r[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Pn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){ei.units[i]="px"});On.registerPlugin(Tg);var ua=On.registerPlugin(Tg)||On;ua.core.Tween;ua.matchMedia();function Do(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}const Dh=new WeakMap;function Q_(i,e){const t=Dh.get(i)??{current:i.textContent??"",tween:null};if(t.current===e)return;if(t.current=e,Dh.set(i,t),Do()){i.textContent=e;return}t.tween?.kill();const n=i.textContent??"";i.innerHTML="";const a=document.createElement("span");a.style.cssText="display:inline-block; position:relative; overflow:hidden; vertical-align:bottom;";const s=document.createElement("span");s.textContent=n,s.style.cssText="display:block;";const r=document.createElement("span");r.textContent=e,r.style.cssText="display:block; position:absolute; left:0; top:100%;",a.append(s,r),i.appendChild(a),t.tween=ua.to([s,r],{yPercent:-100,duration:.32,ease:"power2.out",onComplete:()=>{i.textContent=e,t.tween=null}})}function Ag(i){if(Do())return;const e=Array.from(i.children).slice(0,8);e.length&&ua.fromTo(e,{autoAlpha:0,y:10},{autoAlpha:1,y:0,duration:.34,ease:"power2.out",stagger:.045,overwrite:!0,clearProps:"transform"})}function kf(i){Do()||!i.length||ua.fromTo(i,{autoAlpha:0,x:-8},{autoAlpha:1,x:0,duration:.28,ease:"power2.out",stagger:.03,overwrite:!0,clearProps:"transform"})}function xc(i){Do()||ua.fromTo(i,{scale:1},{scale:.97,duration:.07,yoyo:!0,repeat:1,ease:"power1.inOut",overwrite:!0,clearProps:"scale"})}function ey(i,e){if(Do()){e();return}ua.to(i,{autoAlpha:0,duration:.12,ease:"power1.in",onComplete:()=>{ua.set(i,{clearProps:"all"}),e()}})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Mf="186",ty=0,Ih=1,ny=2,Rl=1,iy=2,Wr=3,Es=0,zn=1,ki=2,ra=0,so=1,zh=2,Uh=3,Nh=4,ay=5,Qs=100,sy=101,ry=102,oy=103,ly=104,cy=200,dy=201,uy=202,fy=203,Rg=204,Lg=205,hy=206,py=207,my=208,gy=209,vy=210,_y=211,yy=212,by=213,xy=214,ru=0,ou=1,lu=2,bo=3,cu=4,du=5,uu=6,fu=7,Ef=0,Sy=1,ky=2,$i=0,Cg=1,Pg=2,Dg=3,Ig=4,zg=5,Ug=6,Ng=7,Og=300,ws=301,xr=302,Zc=303,Jc=304,Sc=306,hu=1e3,aa=1001,pu=1002,Xt=1003,My=1004,Xo=1005,sn=1006,jc=1007,Ua=1008,Yn=1009,Fg=1010,Bg=1011,xo=1012,wf=1013,Gi=1014,Ni=1015,Vi=1016,Tf=1017,Af=1018,So=1020,$g=35902,Hg=35899,Gg=1021,Vg=1022,Ei=1023,fa=1026,vs=1027,qg=1028,Rf=1029,Ts=1030,Lf=1031,Cf=1033,Ll=33776,Cl=33777,Pl=33778,Dl=33779,mu=35840,gu=35841,vu=35842,_u=35843,yu=36196,bu=37492,xu=37496,Su=37488,ku=37489,Zl=37490,Mu=37491,Eu=37808,wu=37809,Tu=37810,Au=37811,Ru=37812,Lu=37813,Cu=37814,Pu=37815,Du=37816,Iu=37817,zu=37818,Uu=37819,Nu=37820,Ou=37821,Fu=36492,Bu=36494,$u=36495,Hu=36283,Gu=36284,Jl=36285,Vu=36286,Ey=3200,qu=0,wy=1,Ca="",qn="srgb",jl="srgb-linear",Ql="linear",mt="srgb",Qc=7680,Ty=519,Ay=512,Ry=513,Ly=514,Pf=515,Cy=516,Py=517,Df=518,Dy=519,Iy=35044,Oh="300 es",Oi=2e3,ko=2001;function zy(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Mo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Uy(){const i=Mo("canvas");return i.style.display="block",i}const Fh={};function Bh(...i){const e="THREE."+i.shift();console.log(e,...i)}function Wg(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function He(...i){i=Wg(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function ct(...i){i=Wg(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function dr(...i){const e=i.join(" ");e in Fh||(Fh[e]=!0,He(...i))}function Ny(i,e,t){return new Promise(function(n,a){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:a();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Oy={[ru]:ou,[lu]:uu,[cu]:fu,[bo]:du,[ou]:ru,[uu]:lu,[fu]:cu,[du]:bo};class Ls{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const a=n[e];if(a!==void 0){const s=a.indexOf(t);s!==-1&&a.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const a=n.slice(0);for(let s=0,r=a.length;s<r;s++)a[s].call(this,e);e.target=null}}}const fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Il=Math.PI/180,Wu=180/Math.PI;function Io(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[t&63|128]+fn[t>>8&255]+"-"+fn[t>>16&255]+fn[t>>24&255]+fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]).toLowerCase()}function nt(i,e,t){return Math.max(e,Math.min(t,i))}function Fy(i,e){return(i%e+e)%e}function ed(i,e,t){return(1-t)*i+t*e}function By(i){return i*Il}function Ir(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function wn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const $y={degToRad:By};class st{static{st.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6],this.y=a[1]*t+a[4]*n+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),a=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*n-r*a+e.x,this.y=s*a+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Mr{constructor(e=0,t=0,n=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=a}static slerpFlat(e,t,n,a,s,r,o){let l=n[a+0],c=n[a+1],d=n[a+2],f=n[a+3],u=s[r+0],h=s[r+1],v=s[r+2],m=s[r+3];if(f!==m||l!==u||c!==h||d!==v){let p=l*u+c*h+d*v+f*m;p<0&&(u=-u,h=-h,v=-v,m=-m,p=-p);let g=1-o;if(p<.9995){const y=Math.acos(p),T=Math.sin(y);g=Math.sin(g*y)/T,o=Math.sin(o*y)/T,l=l*g+u*o,c=c*g+h*o,d=d*g+v*o,f=f*g+m*o}else{l=l*g+u*o,c=c*g+h*o,d=d*g+v*o,f=f*g+m*o;const y=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=y,c*=y,d*=y,f*=y}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,a,s,r){const o=n[a],l=n[a+1],c=n[a+2],d=n[a+3],f=s[r],u=s[r+1],h=s[r+2],v=s[r+3];return e[t]=o*v+d*f+l*h-c*u,e[t+1]=l*v+d*u+c*f-o*h,e[t+2]=c*v+d*h+o*u-l*f,e[t+3]=d*v-o*f-l*u-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,a){return this._x=e,this._y=t,this._z=n,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,a=e._y,s=e._z,r=e._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(a/2),f=o(s/2),u=l(n/2),h=l(a/2),v=l(s/2);switch(r){case"XYZ":this._x=u*d*f+c*h*v,this._y=c*h*f-u*d*v,this._z=c*d*v+u*h*f,this._w=c*d*f-u*h*v;break;case"YXZ":this._x=u*d*f+c*h*v,this._y=c*h*f-u*d*v,this._z=c*d*v-u*h*f,this._w=c*d*f+u*h*v;break;case"ZXY":this._x=u*d*f-c*h*v,this._y=c*h*f+u*d*v,this._z=c*d*v+u*h*f,this._w=c*d*f-u*h*v;break;case"ZYX":this._x=u*d*f-c*h*v,this._y=c*h*f+u*d*v,this._z=c*d*v-u*h*f,this._w=c*d*f+u*h*v;break;case"YZX":this._x=u*d*f+c*h*v,this._y=c*h*f+u*d*v,this._z=c*d*v-u*h*f,this._w=c*d*f-u*h*v;break;case"XZY":this._x=u*d*f-c*h*v,this._y=c*h*f-u*d*v,this._z=c*d*v+u*h*f,this._w=c*d*f+u*h*v;break;default:He("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,a=Math.sin(n);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],a=t[4],s=t[8],r=t[1],o=t[5],l=t[9],c=t[2],d=t[6],f=t[10],u=n+o+f;if(u>0){const h=.5/Math.sqrt(u+1);this._w=.25/h,this._x=(d-l)*h,this._y=(s-c)*h,this._z=(r-a)*h}else if(n>o&&n>f){const h=2*Math.sqrt(1+n-o-f);this._w=(d-l)/h,this._x=.25*h,this._y=(a+r)/h,this._z=(s+c)/h}else if(o>f){const h=2*Math.sqrt(1+o-n-f);this._w=(s-c)/h,this._x=(a+r)/h,this._y=.25*h,this._z=(l+d)/h}else{const h=2*Math.sqrt(1+f-n-o);this._w=(r-a)/h,this._x=(s+c)/h,this._y=(l+d)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const a=Math.min(1,t/n);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,a=e._y,s=e._z,r=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+r*o+a*c-s*l,this._y=a*d+r*l+s*o-n*c,this._z=s*d+r*c+n*l-a*o,this._w=r*d-n*o-a*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,a=e._y,s=e._z,r=e._w,o=this.dot(e);o<0&&(n=-n,a=-a,s=-s,r=-r,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+n*t,this._y=this._y*l+a*t,this._z=this._z*l+s*t,this._w=this._w*l+r*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+a*t,this._z=this._z*l+s*t,this._w=this._w*l+r*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),a=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(a*Math.sin(e),a*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{static{X.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($h.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($h.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*a,this.y=s[1]*t+s[4]*n+s[7]*a,this.z=s[2]*t+s[5]*n+s[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,a=this.z,s=e.elements,r=1/(s[3]*t+s[7]*n+s[11]*a+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*a+s[12])*r,this.y=(s[1]*t+s[5]*n+s[9]*a+s[13])*r,this.z=(s[2]*t+s[6]*n+s[10]*a+s[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,a=this.z,s=e.x,r=e.y,o=e.z,l=e.w,c=2*(r*a-o*n),d=2*(o*t-s*a),f=2*(s*n-r*t);return this.x=t+l*c+r*f-o*d,this.y=n+l*d+o*c-s*f,this.z=a+l*f+s*d-r*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*a,this.y=s[1]*t+s[5]*n+s[9]*a,this.z=s[2]*t+s[6]*n+s[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,a=e.y,s=e.z,r=t.x,o=t.y,l=t.z;return this.x=a*l-s*o,this.y=s*r-n*l,this.z=n*o-a*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return td.copy(this).projectOnVector(e),this.sub(td)}reflect(e){return this.sub(td.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,a=this.z-e.z;return t*t+n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const a=Math.sin(t)*e;return this.x=a*Math.sin(n),this.y=Math.cos(t)*e,this.z=a*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const td=new X,$h=new Mr;class We{static{We.prototype.isMatrix3=!0}constructor(e,t,n,a,s,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,a,s,r,o,l,c)}set(e,t,n,a,s,r,o,l,c){const d=this.elements;return d[0]=e,d[1]=a,d[2]=o,d[3]=t,d[4]=s,d[5]=l,d[6]=n,d[7]=r,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,a=t.elements,s=this.elements,r=n[0],o=n[3],l=n[6],c=n[1],d=n[4],f=n[7],u=n[2],h=n[5],v=n[8],m=a[0],p=a[3],g=a[6],y=a[1],T=a[4],b=a[7],S=a[2],k=a[5],A=a[8];return s[0]=r*m+o*y+l*S,s[3]=r*p+o*T+l*k,s[6]=r*g+o*b+l*A,s[1]=c*m+d*y+f*S,s[4]=c*p+d*T+f*k,s[7]=c*g+d*b+f*A,s[2]=u*m+h*y+v*S,s[5]=u*p+h*T+v*k,s[8]=u*g+h*b+v*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],a=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*r*d-t*o*c-n*s*d+n*o*l+a*s*c-a*r*l}invert(){const e=this.elements,t=e[0],n=e[1],a=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=d*r-o*c,u=o*l-d*s,h=c*s-r*l,v=t*f+n*u+a*h;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/v;return e[0]=f*m,e[1]=(a*c-d*n)*m,e[2]=(o*n-a*r)*m,e[3]=u*m,e[4]=(d*t-a*l)*m,e[5]=(a*s-o*t)*m,e[6]=h*m,e[7]=(n*l-c*t)*m,e[8]=(r*t-n*s)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,a,s,r,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*r+c*o)+r+e,-a*c,a*l,-a*(-c*r+l*o)+o+t,0,0,1),this}scale(e,t){return dr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(nd.makeScale(e,t)),this}rotate(e){return dr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(nd.makeRotation(-e)),this}translate(e,t){return dr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(nd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let a=0;a<9;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const nd=new We,Hh=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gh=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Hy(){const i={enabled:!0,workingColorSpace:jl,spaces:{},convert:function(a,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===mt&&(a.r=oa(a.r),a.g=oa(a.g),a.b=oa(a.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(a.applyMatrix3(this.spaces[s].toXYZ),a.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===mt&&(a.r=ur(a.r),a.g=ur(a.g),a.b=ur(a.b))),a},workingToColorSpace:function(a,s){return this.convert(a,this.workingColorSpace,s)},colorSpaceToWorking:function(a,s){return this.convert(a,s,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Ca?Ql:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,s=this.workingColorSpace){return a.fromArray(this.spaces[s].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,s,r){return a.copy(this.spaces[s].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,s){return dr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(a,s)},toWorkingColorSpace:function(a,s){return dr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(a,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[jl]:{primaries:e,whitePoint:n,transfer:Ql,toXYZ:Hh,fromXYZ:Gh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:qn},outputColorSpaceConfig:{drawingBufferColorSpace:qn}},[qn]:{primaries:e,whitePoint:n,transfer:mt,toXYZ:Hh,fromXYZ:Gh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:qn}}}),i}const tt=Hy();function oa(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ur(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Us;class Gy{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Us===void 0&&(Us=Mo("canvas")),Us.width=e.width,Us.height=e.height;const a=Us.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),n=Us}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Mo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const a=n.getImageData(0,0,e.width,e.height),s=a.data;for(let r=0;r<s.length;r++)s[r]=oa(s[r]/255)*255;return n.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(oa(t[n]/255)*255):t[n]=oa(t[n]);return{data:t,width:e.width,height:e.height}}else return He("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Vy=0;class If{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Vy++}),this.uuid=Io(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let r=0,o=a.length;r<o;r++)a[r].isDataTexture?s.push(id(a[r].image)):s.push(id(a[r]))}else s=id(a);n.url=s}return t||(e.images[this.uuid]=n),n}}function id(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Gy.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(He("Texture: Unable to serialize Texture."),{})}let qy=0;const ad=new X;class on extends Ls{constructor(e=on.DEFAULT_IMAGE,t=on.DEFAULT_MAPPING,n=aa,a=aa,s=sn,r=Ua,o=Ei,l=Yn,c=on.DEFAULT_ANISOTROPY,d=Ca){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qy++}),this.uuid=Io(),this.name="",this.source=new If(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=a,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ad).x}get height(){return this.source.getSize(ad).y}get depth(){return this.source.getSize(ad).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){He(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){He(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&n&&a.isVector2&&n.isVector2||a&&n&&a.isVector3&&n.isVector3||a&&n&&a.isMatrix3&&n.isMatrix3?a.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Og)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hu:e.x=e.x-Math.floor(e.x);break;case aa:e.x=e.x<0?0:1;break;case pu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hu:e.y=e.y-Math.floor(e.y);break;case aa:e.y=e.y<0?0:1;break;case pu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=Og;on.DEFAULT_ANISOTROPY=1;class Dt{static{Dt.prototype.isVector4=!0}constructor(e=0,t=0,n=0,a=1){this.x=e,this.y=t,this.z=n,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,a){return this.x=e,this.y=t,this.z=n,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,a=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*a+r[12]*s,this.y=r[1]*t+r[5]*n+r[9]*a+r[13]*s,this.z=r[2]*t+r[6]*n+r[10]*a+r[14]*s,this.w=r[3]*t+r[7]*n+r[11]*a+r[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,a,s;const l=e.elements,c=l[0],d=l[4],f=l[8],u=l[1],h=l[5],v=l[9],m=l[2],p=l[6],g=l[10];if(Math.abs(d-u)<.01&&Math.abs(f-m)<.01&&Math.abs(v-p)<.01){if(Math.abs(d+u)<.1&&Math.abs(f+m)<.1&&Math.abs(v+p)<.1&&Math.abs(c+h+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,b=(h+1)/2,S=(g+1)/2,k=(d+u)/4,A=(f+m)/4,x=(v+p)/4;return T>b&&T>S?T<.01?(n=0,a=.707106781,s=.707106781):(n=Math.sqrt(T),a=k/n,s=A/n):b>S?b<.01?(n=.707106781,a=0,s=.707106781):(a=Math.sqrt(b),n=k/a,s=x/a):S<.01?(n=.707106781,a=.707106781,s=0):(s=Math.sqrt(S),n=A/s,a=x/s),this.set(n,a,s,t),this}let y=Math.sqrt((p-v)*(p-v)+(f-m)*(f-m)+(u-d)*(u-d));return Math.abs(y)<.001&&(y=1),this.x=(p-v)/y,this.y=(f-m)/y,this.z=(u-d)/y,this.w=Math.acos((c+h+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this.w=nt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this.w=nt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Wy extends Ls{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Dt(0,0,e,t),this.scissorTest=!1,this.viewport=new Dt(0,0,e,t),this.textures=[];const a={width:e,height:t,depth:n.depth},s=new on(a),r=n.count;for(let o=0;o<r;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let a=0,s=this.textures.length;a<s;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=n,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new If(a)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wi extends Wy{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Kg extends on{constructor(e=null,t=1,n=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=aa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ky extends on{constructor(e=null,t=1,n=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=aa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class wt{static{wt.prototype.isMatrix4=!0}constructor(e,t,n,a,s,r,o,l,c,d,f,u,h,v,m,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,a,s,r,o,l,c,d,f,u,h,v,m,p)}set(e,t,n,a,s,r,o,l,c,d,f,u,h,v,m,p){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=a,g[1]=s,g[5]=r,g[9]=o,g[13]=l,g[2]=c,g[6]=d,g[10]=f,g[14]=u,g[3]=h,g[7]=v,g[11]=m,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,a=1/Ns.setFromMatrixColumn(e,0).length(),s=1/Ns.setFromMatrixColumn(e,1).length(),r=1/Ns.setFromMatrixColumn(e,2).length();return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,a=e.y,s=e.z,r=Math.cos(n),o=Math.sin(n),l=Math.cos(a),c=Math.sin(a),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const u=r*d,h=r*f,v=o*d,m=o*f;t[0]=l*d,t[4]=-l*f,t[8]=c,t[1]=h+v*c,t[5]=u-m*c,t[9]=-o*l,t[2]=m-u*c,t[6]=v+h*c,t[10]=r*l}else if(e.order==="YXZ"){const u=l*d,h=l*f,v=c*d,m=c*f;t[0]=u+m*o,t[4]=v*o-h,t[8]=r*c,t[1]=r*f,t[5]=r*d,t[9]=-o,t[2]=h*o-v,t[6]=m+u*o,t[10]=r*l}else if(e.order==="ZXY"){const u=l*d,h=l*f,v=c*d,m=c*f;t[0]=u-m*o,t[4]=-r*f,t[8]=v+h*o,t[1]=h+v*o,t[5]=r*d,t[9]=m-u*o,t[2]=-r*c,t[6]=o,t[10]=r*l}else if(e.order==="ZYX"){const u=r*d,h=r*f,v=o*d,m=o*f;t[0]=l*d,t[4]=v*c-h,t[8]=u*c+m,t[1]=l*f,t[5]=m*c+u,t[9]=h*c-v,t[2]=-c,t[6]=o*l,t[10]=r*l}else if(e.order==="YZX"){const u=r*l,h=r*c,v=o*l,m=o*c;t[0]=l*d,t[4]=m-u*f,t[8]=v*f+h,t[1]=f,t[5]=r*d,t[9]=-o*d,t[2]=-c*d,t[6]=h*f+v,t[10]=u-m*f}else if(e.order==="XZY"){const u=r*l,h=r*c,v=o*l,m=o*c;t[0]=l*d,t[4]=-f,t[8]=c*d,t[1]=u*f+m,t[5]=r*d,t[9]=h*f-v,t[2]=v*f-h,t[6]=o*d,t[10]=m*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xy,e,Yy)}lookAt(e,t,n){const a=this.elements;return Bn.subVectors(e,t),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),ba.crossVectors(n,Bn),ba.lengthSq()===0&&(Math.abs(n.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),ba.crossVectors(n,Bn)),ba.normalize(),Yo.crossVectors(Bn,ba),a[0]=ba.x,a[4]=Yo.x,a[8]=Bn.x,a[1]=ba.y,a[5]=Yo.y,a[9]=Bn.y,a[2]=ba.z,a[6]=Yo.z,a[10]=Bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,a=t.elements,s=this.elements,r=n[0],o=n[4],l=n[8],c=n[12],d=n[1],f=n[5],u=n[9],h=n[13],v=n[2],m=n[6],p=n[10],g=n[14],y=n[3],T=n[7],b=n[11],S=n[15],k=a[0],A=a[4],x=a[8],w=a[12],R=a[1],L=a[5],z=a[9],F=a[13],C=a[2],$=a[6],D=a[10],P=a[14],Z=a[3],G=a[7],ee=a[11],ae=a[15];return s[0]=r*k+o*R+l*C+c*Z,s[4]=r*A+o*L+l*$+c*G,s[8]=r*x+o*z+l*D+c*ee,s[12]=r*w+o*F+l*P+c*ae,s[1]=d*k+f*R+u*C+h*Z,s[5]=d*A+f*L+u*$+h*G,s[9]=d*x+f*z+u*D+h*ee,s[13]=d*w+f*F+u*P+h*ae,s[2]=v*k+m*R+p*C+g*Z,s[6]=v*A+m*L+p*$+g*G,s[10]=v*x+m*z+p*D+g*ee,s[14]=v*w+m*F+p*P+g*ae,s[3]=y*k+T*R+b*C+S*Z,s[7]=y*A+T*L+b*$+S*G,s[11]=y*x+T*z+b*D+S*ee,s[15]=y*w+T*F+b*P+S*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],a=e[8],s=e[12],r=e[1],o=e[5],l=e[9],c=e[13],d=e[2],f=e[6],u=e[10],h=e[14],v=e[3],m=e[7],p=e[11],g=e[15],y=l*h-c*u,T=o*h-c*f,b=o*u-l*f,S=r*h-c*d,k=r*u-l*d,A=r*f-o*d;return t*(m*y-p*T+g*b)-n*(v*y-p*S+g*k)+a*(v*T-m*S+g*A)-s*(v*b-m*k+p*A)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],a=e[8],s=e[1],r=e[5],o=e[9],l=e[2],c=e[6],d=e[10];return t*(r*d-o*c)-n*(s*d-o*l)+a*(s*c-r*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],a=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=e[9],u=e[10],h=e[11],v=e[12],m=e[13],p=e[14],g=e[15],y=t*o-n*r,T=t*l-a*r,b=t*c-s*r,S=n*l-a*o,k=n*c-s*o,A=a*c-s*l,x=d*m-f*v,w=d*p-u*v,R=d*g-h*v,L=f*p-u*m,z=f*g-h*m,F=u*g-h*p,C=y*F-T*z+b*L+S*R-k*w+A*x;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const $=1/C;return e[0]=(o*F-l*z+c*L)*$,e[1]=(a*z-n*F-s*L)*$,e[2]=(m*A-p*k+g*S)*$,e[3]=(u*k-f*A-h*S)*$,e[4]=(l*R-r*F-c*w)*$,e[5]=(t*F-a*R+s*w)*$,e[6]=(p*b-v*A-g*T)*$,e[7]=(d*A-u*b+h*T)*$,e[8]=(r*z-o*R+c*x)*$,e[9]=(n*R-t*z-s*x)*$,e[10]=(v*k-m*b+g*y)*$,e[11]=(f*b-d*k-h*y)*$,e[12]=(o*w-r*L-l*x)*$,e[13]=(t*L-n*w+a*x)*$,e[14]=(m*T-v*S-p*y)*$,e[15]=(d*S-f*T+u*y)*$,this}scale(e){const t=this.elements,n=e.x,a=e.y,s=e.z;return t[0]*=n,t[4]*=a,t[8]*=s,t[1]*=n,t[5]*=a,t[9]*=s,t[2]*=n,t[6]*=a,t[10]*=s,t[3]*=n,t[7]*=a,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,a))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),a=Math.sin(t),s=1-n,r=e.x,o=e.y,l=e.z,c=s*r,d=s*o;return this.set(c*r+n,c*o-a*l,c*l+a*o,0,c*o+a*l,d*o+n,d*l-a*r,0,c*l-a*o,d*l+a*r,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,a,s,r){return this.set(1,n,s,0,e,1,r,0,t,a,1,0,0,0,0,1),this}compose(e,t,n){const a=this.elements,s=t._x,r=t._y,o=t._z,l=t._w,c=s+s,d=r+r,f=o+o,u=s*c,h=s*d,v=s*f,m=r*d,p=r*f,g=o*f,y=l*c,T=l*d,b=l*f,S=n.x,k=n.y,A=n.z;return a[0]=(1-(m+g))*S,a[1]=(h+b)*S,a[2]=(v-T)*S,a[3]=0,a[4]=(h-b)*k,a[5]=(1-(u+g))*k,a[6]=(p+y)*k,a[7]=0,a[8]=(v+T)*A,a[9]=(p-y)*A,a[10]=(1-(u+m))*A,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,n){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let r=Ns.set(a[0],a[1],a[2]).length();const o=Ns.set(a[4],a[5],a[6]).length(),l=Ns.set(a[8],a[9],a[10]).length();s<0&&(r=-r),_i.copy(this);const c=1/r,d=1/o,f=1/l;return _i.elements[0]*=c,_i.elements[1]*=c,_i.elements[2]*=c,_i.elements[4]*=d,_i.elements[5]*=d,_i.elements[6]*=d,_i.elements[8]*=f,_i.elements[9]*=f,_i.elements[10]*=f,t.setFromRotationMatrix(_i),n.x=r,n.y=o,n.z=l,this}makePerspective(e,t,n,a,s,r,o=Oi,l=!1){const c=this.elements,d=2*s/(t-e),f=2*s/(n-a),u=(t+e)/(t-e),h=(n+a)/(n-a);let v,m;if(l)v=s/(r-s),m=r*s/(r-s);else if(o===Oi)v=-(r+s)/(r-s),m=-2*r*s/(r-s);else if(o===ko)v=-r/(r-s),m=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,a,s,r,o=Oi,l=!1){const c=this.elements,d=2/(t-e),f=2/(n-a),u=-(t+e)/(t-e),h=-(n+a)/(n-a);let v,m;if(l)v=1/(r-s),m=r/(r-s);else if(o===Oi)v=-2/(r-s),m=-(r+s)/(r-s);else if(o===ko)v=-1/(r-s),m=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=v,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let a=0;a<16;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ns=new X,_i=new wt,Xy=new X(0,0,0),Yy=new X(1,1,1),ba=new X,Yo=new X,Bn=new X,Vh=new wt,qh=new Mr;class Za{constructor(e=0,t=0,n=0,a=Za.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,a=this._order){return this._x=e,this._y=t,this._z=n,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const a=e.elements,s=a[0],r=a[4],o=a[8],l=a[1],c=a[5],d=a[9],f=a[2],u=a[6],h=a[10];switch(t){case"XYZ":this._y=Math.asin(nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,h),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(nt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-nt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-nt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,h),this._y=0);break;default:He("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Vh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qh.setFromEuler(this),this.setFromQuaternion(qh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Za.DEFAULT_ORDER="XYZ";class zf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Zy=0;const Wh=new X,Os=new Mr,Ki=new wt,Zo=new X,zr=new X,Jy=new X,jy=new Mr,Kh=new X(1,0,0),Xh=new X(0,1,0),Yh=new X(0,0,1),Zh={type:"added"},Qy={type:"removed"},Fs={type:"childadded",child:null},sd={type:"childremoved",child:null};class ln extends Ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zy++}),this.uuid=Io(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ln.DEFAULT_UP.clone();const e=new X,t=new Za,n=new Mr,a=new X(1,1,1);function s(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new wt},normalMatrix:{value:new We}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Os.setFromAxisAngle(e,t),this.quaternion.multiply(Os),this}rotateOnWorldAxis(e,t){return Os.setFromAxisAngle(e,t),this.quaternion.premultiply(Os),this}rotateX(e){return this.rotateOnAxis(Kh,e)}rotateY(e){return this.rotateOnAxis(Xh,e)}rotateZ(e){return this.rotateOnAxis(Yh,e)}translateOnAxis(e,t){return Wh.copy(e).applyQuaternion(this.quaternion),this.position.add(Wh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Kh,e)}translateY(e){return this.translateOnAxis(Xh,e)}translateZ(e){return this.translateOnAxis(Yh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ki.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Zo.copy(e):Zo.set(e,t,n);const a=this.parent;this.updateWorldMatrix(!0,!1),zr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ki.lookAt(zr,Zo,this.up):Ki.lookAt(Zo,zr,this.up),this.quaternion.setFromRotationMatrix(Ki),a&&(Ki.extractRotation(a.matrixWorld),Os.setFromRotationMatrix(Ki),this.quaternion.premultiply(Os.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zh),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null):ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Qy),sd.child=e,this.dispatchEvent(sd),sd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zh),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,a=this.children.length;n<a;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,e,Jy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,jy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,a=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*a,s[13]+=n-s[1]*t-s[5]*n-s[9]*a,s[14]+=a-s[2]*t-s[6]*n-s[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));a.material=o}else a.material=s(e.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];a.animations.push(s(e.animations,l))}}if(t){const o=r(e.geometries),l=r(e.materials),c=r(e.textures),d=r(e.images),f=r(e.shapes),u=r(e.skeletons),h=r(e.animations),v=r(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),h.length>0&&(n.animations=h),v.length>0&&(n.nodes=v)}return n.object=a,n;function r(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const a=e.children[n];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}ln.DEFAULT_UP=new X(0,1,0);ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Qt extends ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const eb={type:"move"};class rd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let a=null,s=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const m of e.hand.values()){const p=t.getJointPose(m,n),g=this._getHandJoint(c,m);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=d.position.distanceTo(f.position),h=.02,v=.005;c.inputState.pinching&&u>h+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=h-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(a=t.getPose(e.targetRaySpace,n),a===null&&s!==null&&(a=s),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(eb)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Qt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Xg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xa={h:0,s:0,l:0},Jo={h:0,s:0,l:0};function od(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ot{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,a=tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,tt.colorSpaceToWorking(this,a),this}setHSL(e,t,n,a=tt.workingColorSpace){if(e=Fy(e,1),t=nt(t,0,1),n=nt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,r=2*n-s;this.r=od(r,s,e+1/3),this.g=od(r,s,e),this.b=od(r,s,e-1/3)}return tt.colorSpaceToWorking(this,a),this}setStyle(e,t=qn){function n(s){s!==void 0&&parseFloat(s)<1&&He("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const r=a[1],o=a[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:He("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=a[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(s,16),t);He("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qn){const n=Xg[e.toLowerCase()];return n!==void 0?this.setHex(n,t):He("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=oa(e.r),this.g=oa(e.g),this.b=oa(e.b),this}copyLinearToSRGB(e){return this.r=ur(e.r),this.g=ur(e.g),this.b=ur(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qn){return tt.workingToColorSpace(hn.copy(this),e),Math.round(nt(hn.r*255,0,255))*65536+Math.round(nt(hn.g*255,0,255))*256+Math.round(nt(hn.b*255,0,255))}getHexString(e=qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.workingToColorSpace(hn.copy(this),t);const n=hn.r,a=hn.g,s=hn.b,r=Math.max(n,a,s),o=Math.min(n,a,s);let l,c;const d=(o+r)/2;if(o===r)l=0,c=0;else{const f=r-o;switch(c=d<=.5?f/(r+o):f/(2-r-o),r){case n:l=(a-s)/f+(a<s?6:0);break;case a:l=(s-n)/f+2;break;case s:l=(n-a)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=tt.workingColorSpace){return tt.workingToColorSpace(hn.copy(this),t),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=qn){tt.workingToColorSpace(hn.copy(this),e);const t=hn.r,n=hn.g,a=hn.b;return e!==qn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(a*255)})`}offsetHSL(e,t,n){return this.getHSL(xa),this.setHSL(xa.h+e,xa.s+t,xa.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(xa),e.getHSL(Jo);const n=ed(xa.h,Jo.h,t),a=ed(xa.s,Jo.s,t),s=ed(xa.l,Jo.l,t);return this.setHSL(n,a,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,a=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*a,this.g=s[1]*t+s[4]*n+s[7]*a,this.b=s[2]*t+s[5]*n+s[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const hn=new ot;ot.NAMES=Xg;class tb extends ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Za,this.environmentIntensity=1,this.environmentRotation=new Za,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const yi=new X,Xi=new X,ld=new X,Yi=new X,Bs=new X,$s=new X,Jh=new X,cd=new X,dd=new X,ud=new X,fd=new Dt,hd=new Dt,pd=new Dt;class Mi{constructor(e=new X,t=new X,n=new X){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,a){a.subVectors(n,t),yi.subVectors(e,t),a.cross(yi);const s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(e,t,n,a,s){yi.subVectors(a,t),Xi.subVectors(n,t),ld.subVectors(e,t);const r=yi.dot(yi),o=yi.dot(Xi),l=yi.dot(ld),c=Xi.dot(Xi),d=Xi.dot(ld),f=r*c-o*o;if(f===0)return s.set(0,0,0),null;const u=1/f,h=(c*l-o*d)*u,v=(r*d-o*l)*u;return s.set(1-h-v,v,h)}static containsPoint(e,t,n,a){return this.getBarycoord(e,t,n,a,Yi)===null?!1:Yi.x>=0&&Yi.y>=0&&Yi.x+Yi.y<=1}static getInterpolation(e,t,n,a,s,r,o,l){return this.getBarycoord(e,t,n,a,Yi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Yi.x),l.addScaledVector(r,Yi.y),l.addScaledVector(o,Yi.z),l)}static getInterpolatedAttribute(e,t,n,a,s,r){return fd.setScalar(0),hd.setScalar(0),pd.setScalar(0),fd.fromBufferAttribute(e,t),hd.fromBufferAttribute(e,n),pd.fromBufferAttribute(e,a),r.setScalar(0),r.addScaledVector(fd,s.x),r.addScaledVector(hd,s.y),r.addScaledVector(pd,s.z),r}static isFrontFacing(e,t,n,a){return yi.subVectors(n,t),Xi.subVectors(e,t),yi.cross(Xi).dot(a)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,a){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,n,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yi.subVectors(this.c,this.b),Xi.subVectors(this.a,this.b),yi.cross(Xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Mi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,a,s){return Mi.getInterpolation(e,this.a,this.b,this.c,t,n,a,s)}containsPoint(e){return Mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,a=this.b,s=this.c;let r,o;Bs.subVectors(a,n),$s.subVectors(s,n),cd.subVectors(e,n);const l=Bs.dot(cd),c=$s.dot(cd);if(l<=0&&c<=0)return t.copy(n);dd.subVectors(e,a);const d=Bs.dot(dd),f=$s.dot(dd);if(d>=0&&f<=d)return t.copy(a);const u=l*f-d*c;if(u<=0&&l>=0&&d<=0)return r=l/(l-d),t.copy(n).addScaledVector(Bs,r);ud.subVectors(e,s);const h=Bs.dot(ud),v=$s.dot(ud);if(v>=0&&h<=v)return t.copy(s);const m=h*c-l*v;if(m<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(n).addScaledVector($s,o);const p=d*v-h*f;if(p<=0&&f-d>=0&&h-v>=0)return Jh.subVectors(s,a),o=(f-d)/(f-d+(h-v)),t.copy(a).addScaledVector(Jh,o);const g=1/(p+m+u);return r=m*g,o=u*g,t.copy(n).addScaledVector(Bs,r).addScaledVector($s,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class zo{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(bi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(bi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=bi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,bi):bi.fromBufferAttribute(s,r),bi.applyMatrix4(e.matrixWorld),this.expandByPoint(bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),jo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),jo.copy(n.boundingBox)),jo.applyMatrix4(e.matrixWorld),this.union(jo)}const a=e.children;for(let s=0,r=a.length;s<r;s++)this.expandByObject(a[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bi),bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ur),Qo.subVectors(this.max,Ur),Hs.subVectors(e.a,Ur),Gs.subVectors(e.b,Ur),Vs.subVectors(e.c,Ur),Sa.subVectors(Gs,Hs),ka.subVectors(Vs,Gs),as.subVectors(Hs,Vs);let t=[0,-Sa.z,Sa.y,0,-ka.z,ka.y,0,-as.z,as.y,Sa.z,0,-Sa.x,ka.z,0,-ka.x,as.z,0,-as.x,-Sa.y,Sa.x,0,-ka.y,ka.x,0,-as.y,as.x,0];return!md(t,Hs,Gs,Vs,Qo)||(t=[1,0,0,0,1,0,0,0,1],!md(t,Hs,Gs,Vs,Qo))?!1:(el.crossVectors(Sa,ka),t=[el.x,el.y,el.z],md(t,Hs,Gs,Vs,Qo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Zi=[new X,new X,new X,new X,new X,new X,new X,new X],bi=new X,jo=new zo,Hs=new X,Gs=new X,Vs=new X,Sa=new X,ka=new X,as=new X,Ur=new X,Qo=new X,el=new X,ss=new X;function md(i,e,t,n,a){for(let s=0,r=i.length-3;s<=r;s+=3){ss.fromArray(i,s);const o=a.x*Math.abs(ss.x)+a.y*Math.abs(ss.y)+a.z*Math.abs(ss.z),l=e.dot(ss),c=t.dot(ss),d=n.dot(ss);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const $t=new X,tl=new st;let nb=0;class la extends Ls{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:nb++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Iy,this.updateRanges=[],this.gpuType=Ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[e+a]=t.array[n+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)tl.fromBufferAttribute(this,t),tl.applyMatrix3(e),this.setXY(t,tl.x,tl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ir(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=wn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ir(t,this.array)),t}setX(e,t){return this.normalized&&(t=wn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ir(t,this.array)),t}setY(e,t){return this.normalized&&(t=wn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ir(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ir(t,this.array)),t}setW(e,t){return this.normalized&&(t=wn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=wn(t,this.array),n=wn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,a){return e*=this.itemSize,this.normalized&&(t=wn(t,this.array),n=wn(n,this.array),a=wn(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this}setXYZW(e,t,n,a,s){return e*=this.itemSize,this.normalized&&(t=wn(t,this.array),n=wn(n,this.array),a=wn(a,this.array),s=wn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Yg extends la{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Zg extends la{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class mi extends la{constructor(e,t,n){super(new Float32Array(e),t,n)}}const ib=new zo,Nr=new X,gd=new X;class kc{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ib.setFromPoints(e).getCenter(n);let a=0;for(let s=0,r=e.length;s<r;s++)a=Math.max(a,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Nr.subVectors(e,this.center);const t=Nr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),a=(n-this.radius)*.5;this.center.addScaledVector(Nr,a/n),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Nr.copy(e.center).add(gd)),this.expandByPoint(Nr.copy(e.center).sub(gd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let ab=0;const si=new wt,vd=new ln,qs=new X,$n=new zo,Or=new zo,jt=new X;class Ti extends Ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ab++}),this.uuid=Io(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zy(e)?Zg:Yg)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new We().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return si.makeRotationFromQuaternion(e),this.applyMatrix4(si),this}rotateX(e){return si.makeRotationX(e),this.applyMatrix4(si),this}rotateY(e){return si.makeRotationY(e),this.applyMatrix4(si),this}rotateZ(e){return si.makeRotationZ(e),this.applyMatrix4(si),this}translate(e,t,n){return si.makeTranslation(e,t,n),this.applyMatrix4(si),this}scale(e,t,n){return si.makeScale(e,t,n),this.applyMatrix4(si),this}lookAt(e){return vd.lookAt(e),vd.updateMatrix(),this.applyMatrix4(vd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qs).negate(),this.translate(qs.x,qs.y,qs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let a=0,s=e.length;a<s;a++){const r=e[a];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new mi(n,3))}else{const n=Math.min(e.length,t.count);for(let a=0;a<n;a++){const s=e[a];t.setXYZ(a,s.x,s.y,s.z||0)}e.length>t.count&&He("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,a=t.length;n<a;n++){const s=t[n];$n.setFromBufferAttribute(s),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const n=this.boundingSphere.center;if($n.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){const o=t[s];Or.setFromBufferAttribute(o),this.morphTargetsRelative?(jt.addVectors($n.min,Or.min),$n.expandByPoint(jt),jt.addVectors($n.max,Or.max),$n.expandByPoint(jt)):($n.expandByPoint(Or.min),$n.expandByPoint(Or.max))}$n.getCenter(n);let a=0;for(let s=0,r=e.count;s<r;s++)jt.fromBufferAttribute(e,s),a=Math.max(a,n.distanceToSquared(jt));if(t)for(let s=0,r=t.length;s<r;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)jt.fromBufferAttribute(o,c),l&&(qs.fromBufferAttribute(e,c),jt.add(qs)),a=Math.max(a,n.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,a=t.normal,s=t.uv;let r=this.getAttribute("tangent");(r===void 0||r.count!==n.count)&&(r=new la(new Float32Array(4*n.count),4),this.setAttribute("tangent",r));const o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new X,l[x]=new X;const c=new X,d=new X,f=new X,u=new st,h=new st,v=new st,m=new X,p=new X;function g(x,w,R){c.fromBufferAttribute(n,x),d.fromBufferAttribute(n,w),f.fromBufferAttribute(n,R),u.fromBufferAttribute(s,x),h.fromBufferAttribute(s,w),v.fromBufferAttribute(s,R),d.sub(c),f.sub(c),h.sub(u),v.sub(u);const L=1/(h.x*v.y-v.x*h.y);isFinite(L)&&(m.copy(d).multiplyScalar(v.y).addScaledVector(f,-h.y).multiplyScalar(L),p.copy(f).multiplyScalar(h.x).addScaledVector(d,-v.x).multiplyScalar(L),o[x].add(m),o[w].add(m),o[R].add(m),l[x].add(p),l[w].add(p),l[R].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let x=0,w=y.length;x<w;++x){const R=y[x],L=R.start,z=R.count;for(let F=L,C=L+z;F<C;F+=3)g(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const T=new X,b=new X,S=new X,k=new X;function A(x){S.fromBufferAttribute(a,x),k.copy(S);const w=o[x];T.copy(w),T.sub(S.multiplyScalar(S.dot(w))).normalize(),b.crossVectors(k,w);const L=b.dot(l[x])<0?-1:1;r.setXYZW(x,T.x,T.y,T.z,L)}for(let x=0,w=y.length;x<w;++x){const R=y[x],L=R.start,z=R.count;for(let F=L,C=L+z;F<C;F+=3)A(e.getX(F+0)),A(e.getX(F+1)),A(e.getX(F+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new la(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,h=n.count;u<h;u++)n.setXYZ(u,0,0,0);const a=new X,s=new X,r=new X,o=new X,l=new X,c=new X,d=new X,f=new X;if(e)for(let u=0,h=e.count;u<h;u+=3){const v=e.getX(u+0),m=e.getX(u+1),p=e.getX(u+2);a.fromBufferAttribute(t,v),s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,p),d.subVectors(r,s),f.subVectors(a,s),d.cross(f),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,p),o.add(d),l.add(d),c.add(d),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,h=t.count;u<h;u+=3)a.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),r.fromBufferAttribute(t,u+2),d.subVectors(r,s),f.subVectors(a,s),d.cross(f),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)jt.fromBufferAttribute(e,t),jt.normalize(),e.setXYZ(t,jt.x,jt.y,jt.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,f=o.normalized,u=new c.constructor(l.length*d);let h=0,v=0;for(let m=0,p=l.length;m<p;m++){o.isInterleavedBufferAttribute?h=l[m]*o.data.stride+o.offset:h=l[m]*d;for(let g=0;g<d;g++)u[v++]=c[h++]}return new la(u,d,f)}if(this.index===null)return He("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ti,n=this.index.array,a=this.attributes;for(const o in a){const l=a[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,f=c.length;d<f;d++){const u=c[d],h=e(u,n);l.push(h)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const a={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,u=c.length;f<u;f++){const h=c[f];d.push(h.toJSON(e.data))}d.length>0&&(a[l]=d,s=!0)}s&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const a=e.attributes;for(const c in a){const d=a[c];this.setAttribute(c,d.clone(t))}const s=e.morphAttributes;for(const c in s){const d=[],f=s[c];for(let u=0,h=f.length;u<h;u++)d.push(f[u].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,d=r.length;c<d;c++){const f=r[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _d=new X,sb=new X,rb=new We;class Aa{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,a){return this.normal.set(e,t,n),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const a=_d.subVectors(n,t).cross(sb.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const a=e.delta(_d),s=this.normal.dot(a);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(r<0||r>1)?null:t.copy(e.start).addScaledVector(a,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||rb.getNormalMatrix(e),a=this.coplanarPoint(_d).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-a.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let ob=0;class Er extends Ls{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ob++}),this.uuid=Io(),this.name="",this.type="Material",this.blending=so,this.side=Es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rg,this.blendDst=Lg,this.blendEquation=Qs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=bo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ty,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qc,this.stencilZFail=Qc,this.stencilZPass=Qc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){He(`Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){He(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(n):a&&a.isVector2&&n&&n.isVector2||a&&a.isEuler&&n&&n.isEuler||a&&a.isVector3&&n&&n.isVector3?a.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function a(s){const r=[];for(const o in s){const l=s[o];delete l.metadata,r.push(l)}return r}if(t){const s=a(e.textures),r=a(e.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ot().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Aa().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new st().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new st().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const a=t.length;n=new Array(a);for(let s=0;s!==a;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ji=new X,yd=new X,nl=new X,il=new X;class Uf{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ji)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ji.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ji.copy(this.origin).addScaledVector(this.direction,t),Ji.distanceToSquared(e))}distanceSqToSegment(e,t,n,a){yd.copy(e).add(t).multiplyScalar(.5),nl.copy(t).sub(e).normalize(),il.copy(this.origin).sub(yd);const s=e.distanceTo(t)*.5,r=-this.direction.dot(nl),o=il.dot(this.direction),l=-il.dot(nl),c=il.lengthSq(),d=Math.abs(1-r*r);let f,u,h,v;if(d>0)if(f=r*l-o,u=r*o-l,v=s*d,f>=0)if(u>=-v)if(u<=v){const m=1/d;f*=m,u*=m,h=f*(f+r*u+2*o)+u*(r*f+u+2*l)+c}else u=s,f=Math.max(0,-(r*u+o)),h=-f*f+u*(u+2*l)+c;else u=-s,f=Math.max(0,-(r*u+o)),h=-f*f+u*(u+2*l)+c;else u<=-v?(f=Math.max(0,-(-r*s+o)),u=f>0?-s:Math.min(Math.max(-s,-l),s),h=-f*f+u*(u+2*l)+c):u<=v?(f=0,u=Math.min(Math.max(-s,-l),s),h=u*(u+2*l)+c):(f=Math.max(0,-(r*s+o)),u=f>0?s:Math.min(Math.max(-s,-l),s),h=-f*f+u*(u+2*l)+c);else u=r>0?-s:s,f=Math.max(0,-(r*u+o)),h=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),a&&a.copy(yd).addScaledVector(nl,u),h}intersectSphere(e,t){if(e.radius<0)return null;Ji.subVectors(e.center,this.origin);const n=Ji.dot(this.direction),a=Ji.dot(Ji)-n*n,s=e.radius*e.radius;if(a>s)return null;const r=Math.sqrt(s-a),o=n-r,l=n+r;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,a,s,r,o,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,a=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,a=(e.min.x-u.x)*c),d>=0?(s=(e.min.y-u.y)*d,r=(e.max.y-u.y)*d):(s=(e.max.y-u.y)*d,r=(e.min.y-u.y)*d),n>r||s>a||((s>n||isNaN(n))&&(n=s),(r<a||isNaN(a))&&(a=r),f>=0?(o=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),n>l||o>a)||((o>n||n!==n)&&(n=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(n>=0?n:a,t)}intersectsBox(e){return this.intersectBox(e,Ji)!==null}intersectTriangle(e,t,n,a,s){const r=this.origin,o=this.direction,l=o.x,c=o.y,d=o.z,f=e.x-r.x,u=e.y-r.y,h=e.z-r.z,v=t.x-r.x,m=t.y-r.y,p=t.z-r.z,g=n.x-r.x,y=n.y-r.y,T=n.z-r.z,b=Math.abs(l),S=Math.abs(c),k=Math.abs(d);let A,x,w,R,L,z,F,C,$,D,P,Z;if(b>=S&&b>=k?(w=l,z=f,$=v,Z=g,l>=0?(A=c,x=d,R=u,L=h,F=m,C=p,D=y,P=T):(A=d,x=c,R=h,L=u,F=p,C=m,D=T,P=y)):S>=k?(w=c,z=u,$=m,Z=y,c>=0?(A=d,x=l,R=h,L=f,F=p,C=v,D=T,P=g):(A=l,x=d,R=f,L=h,F=v,C=p,D=g,P=T)):(w=d,z=h,$=p,Z=T,d>=0?(A=l,x=c,R=f,L=u,F=v,C=m,D=g,P=y):(A=c,x=l,R=u,L=f,F=m,C=v,D=y,P=g)),w===0)return null;const G=A/w,ee=x/w,ae=1/w,ue=R-G*z,ke=L-ee*z,Ne=F-G*$,Ie=C-ee*$,$e=D-G*Z,j=P-ee*Z,re=$e*Ie-j*Ne,fe=ue*j-ke*$e,Ue=Ne*ke-Ie*ue;if(a){if(re<0||fe<0||Ue<0)return null}else if((re<0||fe<0||Ue<0)&&(re>0||fe>0||Ue>0))return null;const xe=re+fe+Ue;if(xe===0)return null;const Fe=ae*(re*z+fe*$+Ue*Z);return(xe>0?Fe<0:Fe>0)?null:this.at(Fe/xe,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jg extends Er{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Za,this.combine=Ef,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const jh=new wt,rs=new Uf,al=new kc,Qh=new X,sl=new X,rl=new X,ol=new X,bd=new X,ll=new X,ep=new X,cl=new X;class ii extends ln{constructor(e=new Ti,t=new Jg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,a=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(a,e);const o=this.morphTargetInfluences;if(s&&o){ll.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],f=s[l];d!==0&&(bd.fromBufferAttribute(f,e),r?ll.addScaledVector(bd,d):ll.addScaledVector(bd.sub(t),d))}t.add(ll)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),al.copy(n.boundingSphere),al.applyMatrix4(s),rs.copy(e.ray).recast(e.near),!(al.containsPoint(rs.origin)===!1&&(rs.intersectSphere(al,Qh)===null||rs.origin.distanceToSquared(Qh)>(e.far-e.near)**2))&&(jh.copy(s).invert(),rs.copy(e.ray).applyMatrix4(jh),!(n.boundingBox!==null&&rs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,rs)))}_computeIntersections(e,t,n){let a;const s=this.geometry,r=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,u=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(r))for(let v=0,m=u.length;v<m;v++){const p=u[v],g=r[p.materialIndex],y=Math.max(p.start,h.start),T=Math.min(o.count,Math.min(p.start+p.count,h.start+h.count));for(let b=y,S=T;b<S;b+=3){const k=o.getX(b),A=o.getX(b+1),x=o.getX(b+2);a=dl(this,g,e,n,c,d,f,k,A,x),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const v=Math.max(0,h.start),m=Math.min(o.count,h.start+h.count);for(let p=v,g=m;p<g;p+=3){const y=o.getX(p),T=o.getX(p+1),b=o.getX(p+2);a=dl(this,r,e,n,c,d,f,y,T,b),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let v=0,m=u.length;v<m;v++){const p=u[v],g=r[p.materialIndex],y=Math.max(p.start,h.start),T=Math.min(l.count,Math.min(p.start+p.count,h.start+h.count));for(let b=y,S=T;b<S;b+=3){const k=b,A=b+1,x=b+2;a=dl(this,g,e,n,c,d,f,k,A,x),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const v=Math.max(0,h.start),m=Math.min(l.count,h.start+h.count);for(let p=v,g=m;p<g;p+=3){const y=p,T=p+1,b=p+2;a=dl(this,r,e,n,c,d,f,y,T,b),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}}}function lb(i,e,t,n,a,s,r,o){let l;if(e.side===zn?l=n.intersectTriangle(r,s,a,!0,o):l=n.intersectTriangle(a,s,r,e.side===Es,o),l===null)return null;cl.copy(o),cl.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(cl);return c<t.near||c>t.far?null:{distance:c,point:cl.clone(),object:i}}function dl(i,e,t,n,a,s,r,o,l,c){i.getVertexPosition(o,sl),i.getVertexPosition(l,rl),i.getVertexPosition(c,ol);const d=lb(i,e,t,n,sl,rl,ol,ep);if(d){const f=new X;Mi.getBarycoord(ep,sl,rl,ol,f),a&&(d.uv=Mi.getInterpolatedAttribute(a,o,l,c,f,new st)),s&&(d.uv1=Mi.getInterpolatedAttribute(s,o,l,c,f,new st)),r&&(d.normal=Mi.getInterpolatedAttribute(r,o,l,c,f,new X),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new X,materialIndex:0};Mi.getNormal(sl,rl,ol,u.normal),d.face=u,d.barycoord=f}return d}class cb extends on{constructor(e=null,t=1,n=1,a,s,r,o,l,c=Xt,d=Xt,f,u){super(null,r,o,l,c,d,a,s,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const os=new kc,db=new st(.5,.5),ul=new X;class Nf{constructor(e=new Aa,t=new Aa,n=new Aa,a=new Aa,s=new Aa,r=new Aa){this.planes=[e,t,n,a,s,r]}set(e,t,n,a,s,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(a),o[4].copy(s),o[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Oi,n=!1){const a=this.planes,s=e.elements,r=s[0],o=s[1],l=s[2],c=s[3],d=s[4],f=s[5],u=s[6],h=s[7],v=s[8],m=s[9],p=s[10],g=s[11],y=s[12],T=s[13],b=s[14],S=s[15];if(a[0].setComponents(c-r,h-d,g-v,S-y).normalize(),a[1].setComponents(c+r,h+d,g+v,S+y).normalize(),a[2].setComponents(c+o,h+f,g+m,S+T).normalize(),a[3].setComponents(c-o,h-f,g-m,S-T).normalize(),n)a[4].setComponents(l,u,p,b).normalize(),a[5].setComponents(c-l,h-u,g-p,S-b).normalize();else if(a[4].setComponents(c-l,h-u,g-p,S-b).normalize(),t===Oi)a[5].setComponents(c+l,h+u,g+p,S+b).normalize();else if(t===ko)a[5].setComponents(l,u,p,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),os.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),os.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(os)}intersectsSprite(e){os.center.set(0,0,0);const t=db.distanceTo(e.center);return os.radius=.7071067811865476+t,os.applyMatrix4(e.matrixWorld),this.intersectsSphere(os)}intersectsSphere(e){const t=this.planes,n=e.center,a=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const a=t[n];if(ul.x=a.normal.x>0?e.max.x:e.min.x,ul.y=a.normal.y>0?e.max.y:e.min.y,ul.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(ul)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class jg extends Er{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ec=new X,tc=new X,tp=new wt,Fr=new Uf,fl=new kc,xd=new X,np=new X;class ub extends ln{constructor(e=new Ti,t=new jg){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let a=1,s=t.count;a<s;a++)ec.fromBufferAttribute(t,a-1),tc.fromBufferAttribute(t,a),n[a]=n[a-1],n[a]+=ec.distanceTo(tc);e.setAttribute("lineDistance",new mi(n,1))}else He("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,a=this.matrixWorld,s=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fl.copy(n.boundingSphere),fl.applyMatrix4(a),fl.radius+=s,e.ray.intersectsSphere(fl)===!1)return;tp.copy(a).invert(),Fr.copy(e.ray).applyMatrix4(tp);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=n.index,u=n.attributes.position;if(d!==null){const h=Math.max(0,r.start),v=Math.min(d.count,r.start+r.count);for(let m=h,p=v-1;m<p;m+=c){const g=d.getX(m),y=d.getX(m+1),T=hl(this,e,Fr,l,g,y,m);T&&t.push(T)}if(this.isLineLoop){const m=d.getX(v-1),p=d.getX(h),g=hl(this,e,Fr,l,m,p,v-1);g&&t.push(g)}}else{const h=Math.max(0,r.start),v=Math.min(u.count,r.start+r.count);for(let m=h,p=v-1;m<p;m+=c){const g=hl(this,e,Fr,l,m,m+1,m);g&&t.push(g)}if(this.isLineLoop){const m=hl(this,e,Fr,l,v-1,h,v-1);m&&t.push(m)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function hl(i,e,t,n,a,s,r){const o=i.geometry.attributes.position;if(ec.fromBufferAttribute(o,a),tc.fromBufferAttribute(o,s),t.distanceSqToSegment(ec,tc,xd,np)>n)return;xd.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(xd);if(!(c<e.near||c>e.far))return{distance:c,point:np.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}const ip=new X,ap=new X;class fb extends ub{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let a=0,s=t.count;a<s;a+=2)ip.fromBufferAttribute(t,a),ap.fromBufferAttribute(t,a+1),n[a]=a===0?0:n[a-1],n[a+1]=n[a]+ip.distanceTo(ap);e.setAttribute("lineDistance",new mi(n,1))}else He("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Qg extends on{constructor(e=[],t=ws,n,a,s,r,o,l,c,d){super(e,t,n,a,s,r,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ev extends on{constructor(e,t,n,a,s,r,o,l,c){super(e,t,n,a,s,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Eo extends on{constructor(e,t,n=Gi,a,s,r,o=Xt,l=Xt,c,d=fa,f=1){if(d!==fa&&d!==vs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:f};super(u,a,s,r,o,l,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new If(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class hb extends Eo{constructor(e,t=Gi,n=ws,a,s,r=Xt,o=Xt,l,c=fa){const d={width:e,height:e,depth:1},f=[d,d,d,d,d,d];super(e,e,t,n,a,s,r,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class tv extends on{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ha extends Ti{constructor(e=1,t=1,n=1,a=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:a,heightSegments:s,depthSegments:r};const o=this;a=Math.floor(a),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],d=[],f=[];let u=0,h=0;v("z","y","x",-1,-1,n,t,e,r,s,0),v("z","y","x",1,-1,n,t,-e,r,s,1),v("x","z","y",1,1,e,n,t,a,r,2),v("x","z","y",1,-1,e,n,-t,a,r,3),v("x","y","z",1,-1,e,t,n,a,s,4),v("x","y","z",-1,-1,e,t,-n,a,s,5),this.setIndex(l),this.setAttribute("position",new mi(c,3)),this.setAttribute("normal",new mi(d,3)),this.setAttribute("uv",new mi(f,2));function v(m,p,g,y,T,b,S,k,A,x,w){const R=b/A,L=S/x,z=b/2,F=S/2,C=k/2,$=A+1,D=x+1;let P=0,Z=0;const G=new X;for(let ee=0;ee<D;ee++){const ae=ee*L-F;for(let ue=0;ue<$;ue++){const ke=ue*R-z;G[m]=ke*y,G[p]=ae*T,G[g]=C,c.push(G.x,G.y,G.z),G[m]=0,G[p]=0,G[g]=k>0?1:-1,d.push(G.x,G.y,G.z),f.push(ue/A),f.push(1-ee/x),P+=1}}for(let ee=0;ee<x;ee++)for(let ae=0;ae<A;ae++){const ue=u+ae+$*ee,ke=u+ae+$*(ee+1),Ne=u+(ae+1)+$*(ee+1),Ie=u+(ae+1)+$*ee;l.push(ue,ke,Ie),l.push(ke,Ne,Ie),Z+=6}o.addGroup(h,Z,w),h+=Z,u+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ha(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Mc extends Ti{constructor(e=1,t=1,n=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:a};const s=e/2,r=t/2,o=Math.floor(n),l=Math.floor(a),c=o+1,d=l+1,f=e/o,u=t/l,h=[],v=[],m=[],p=[];for(let g=0;g<d;g++){const y=g*u-r;for(let T=0;T<c;T++){const b=T*f-s;v.push(b,-y,0),m.push(0,0,1),p.push(T/o),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<o;y++){const T=y+c*g,b=y+c*(g+1),S=y+1+c*(g+1),k=y+1+c*g;h.push(T,b,k),h.push(b,S,k)}this.setIndex(h),this.setAttribute("position",new mi(v,3)),this.setAttribute("normal",new mi(m,3)),this.setAttribute("uv",new mi(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mc(e.width,e.height,e.widthSegments,e.heightSegments)}}function Sr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const a=i[t][n];if(sp(a))a.isRenderTargetTexture?(He("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=a.clone();else if(Array.isArray(a))if(sp(a[0])){const s=[];for(let r=0,o=a.length;r<o;r++)s[r]=a[r].clone();e[t][n]=s}else e[t][n]=a.slice();else e[t][n]=a}}return e}function kn(i){const e={};for(let t=0;t<i.length;t++){const n=Sr(i[t]);for(const a in n)e[a]=n[a]}return e}function sp(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function pb(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function nv(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const mb={clone:Sr,merge:kn};var gb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qi extends Er{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gb,this.fragmentShader=vb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Sr(e.uniforms),this.uniformsGroups=pb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const r=this.uniforms[a].value;r&&r.isTexture?t.uniforms[a]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[a]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[a]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[a]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[a]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[a]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[a]={type:"m4",value:r.toArray()}:t.uniforms[a]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const a in this.extensions)this.extensions[a]===!0&&(n[a]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const a=e.uniforms[n];switch(this.uniforms[n]={},a.type){case"t":this.uniforms[n].value=t[a.value]||null;break;case"c":this.uniforms[n].value=new ot().setHex(a.value);break;case"v2":this.uniforms[n].value=new st().fromArray(a.value);break;case"v3":this.uniforms[n].value=new X().fromArray(a.value);break;case"v4":this.uniforms[n].value=new Dt().fromArray(a.value);break;case"m3":this.uniforms[n].value=new We().fromArray(a.value);break;case"m4":this.uniforms[n].value=new wt().fromArray(a.value);break;default:this.uniforms[n].value=a.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class _b extends qi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class nc extends Er{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qu,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Za,this.combine=Ef,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class yb extends Er{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ey,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class bb extends Er{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Sd={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(rp(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!rp(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function rp(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class xb{constructor(e,t,n){const a=this;let s=!1,r=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(d){o++,s===!1&&a.onStart!==void 0&&a.onStart(d,r,o),s=!0},this.itemEnd=function(d){r++,a.onProgress!==void 0&&a.onProgress(d,r,o),r===o&&(s=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(d){a.onError!==void 0&&a.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,f){return c.push(d,f),this},this.removeHandler=function(d){const f=c.indexOf(d);return f!==-1&&c.splice(f,2),this},this.getHandler=function(d){for(let f=0,u=c.length;f<u;f+=2){const h=c[f],v=c[f+1];if(h.global&&(h.lastIndex=0),h.test(d))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Sb=new xb;class iv{constructor(e){this.manager=e!==void 0?e:Sb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(a,s){n.load(e,a,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}iv.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ws=new WeakMap;class kb extends iv{constructor(e){super(e)}load(e,t,n,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=Sd.get(`image:${e}`);if(r!==void 0){if(r.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0);else{let f=Ws.get(r);f===void 0&&(f=[],Ws.set(r,f)),f.push({onLoad:t,onError:a})}return r}const o=Mo("img");function l(){d(),t&&t(this);const f=Ws.get(this)||[];for(let u=0;u<f.length;u++){const h=f[u];h.onLoad&&h.onLoad(this)}Ws.delete(this),s.manager.itemEnd(e)}function c(f){d(),a&&a(f),Sd.remove(`image:${e}`);const u=Ws.get(this)||[];for(let h=0;h<u.length;h++){const v=u[h];v.onError&&v.onError(f)}Ws.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function d(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Sd.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class av extends ln{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const kd=new wt,op=new X,lp=new X;class Mb{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.mapType=Yn,this.map=null,this.mapPass=null,this.matrix=new wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Nf,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;op.setFromMatrixPosition(e.matrixWorld),t.position.copy(op),lp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(lp),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,a){kd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(kd,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,r=a?a.z/s.x:1,o=a?a.w/s.y:1,l=a?a.x/s.x:0,c=a?a.y/s.y:0;e.coordinateSystem===ko||e.reversedDepth?t.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(kd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const pl=new X,ml=new Mr,Li=new X;class sv extends ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=Oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(pl,ml,Li),Li.x===1&&Li.y===1&&Li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pl,ml,Li.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(pl,ml,Li),Li.x===1&&Li.y===1&&Li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pl,ml,Li.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ma=new X,cp=new st,dp=new st;class di extends sv{constructor(e=50,t=1,n=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Wu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Il*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wu*2*Math.atan(Math.tan(Il*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ma.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ma.x,Ma.y).multiplyScalar(-e/Ma.z),Ma.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ma.x,Ma.y).multiplyScalar(-e/Ma.z)}getViewSize(e,t){return this.getViewBounds(e,cp,dp),t.subVectors(dp,cp)}setViewOffset(e,t,n,a,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Il*.5*this.fov)/this.zoom,n=2*t,a=this.aspect*n,s=-.5*a;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*a/l,t-=r.offsetY*n/c,a*=r.width/l,n*=r.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Of extends sv{constructor(e=-1,t=1,n=1,a=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=a,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,a,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let s=n-e,r=n+e,o=a+t,l=a-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Eb extends Mb{constructor(){super(new Of(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class up extends av{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.target=new ln,this.shadow=new Eb}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class wb extends av{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ks=-90,Xs=1;class Tb extends ln{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new di(Ks,Xs,e,t);a.layers=this.layers,this.add(a);const s=new di(Ks,Xs,e,t);s.layers=this.layers,this.add(s);const r=new di(Ks,Xs,e,t);r.layers=this.layers,this.add(r);const o=new di(Ks,Xs,e,t);o.layers=this.layers,this.add(o);const l=new di(Ks,Xs,e,t);l.layers=this.layers,this.add(l);const c=new di(Ks,Xs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,a,s,r,o,l]=t;for(const c of t)this.remove(c);if(e===Oi)n.up.set(0,1,0),n.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ko)n.up.set(0,-1,0),n.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,r,o,l,c,d]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,a),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,a),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,2,a),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,a),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,a),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,a),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(f,u,h),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Ab extends di{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const fp=new wt;class Rb{constructor(e,t,n=0,a=1/0){this.ray=new Uf(e,t),this.near=n,this.far=a,this.camera=null,this.layers=new zf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ct("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return fp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(fp),this}intersectObject(e,t=!0,n=[]){return Ku(e,this,n,t),n.sort(hp),n}intersectObjects(e,t=!0,n=[]){for(let a=0,s=e.length;a<s;a++)Ku(e[a],this,n,t);return n.sort(hp),n}}function hp(i,e){return i.distance-e.distance}function Ku(i,e,t,n){let a=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(a=!1),a===!0&&n===!0){const s=i.children;for(let r=0,o=s.length;r<o;r++)Ku(s[r],e,t,!0)}}class Lb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,He("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class rv{static{rv.prototype.isMatrix2=!0}constructor(e,t,n,a){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,a)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,a){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=a,this}}function pp(i,e,t,n){const a=Cb(n);switch(t){case Gg:return i*e;case qg:return i*e/a.components*a.byteLength;case Rf:return i*e/a.components*a.byteLength;case Ts:return i*e*2/a.components*a.byteLength;case Lf:return i*e*2/a.components*a.byteLength;case Vg:return i*e*3/a.components*a.byteLength;case Ei:return i*e*4/a.components*a.byteLength;case Cf:return i*e*4/a.components*a.byteLength;case Ll:case Cl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Pl:case Dl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case gu:case _u:return Math.max(i,16)*Math.max(e,8)/4;case mu:case vu:return Math.max(i,8)*Math.max(e,8)/2;case yu:case bu:case Su:case ku:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case xu:case Zl:case Mu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Eu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case wu:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Tu:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Au:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ru:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Lu:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Cu:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Pu:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Du:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Iu:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case zu:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Uu:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Nu:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ou:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Fu:case Bu:case $u:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Hu:case Gu:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Jl:case Vu:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Cb(i){switch(i){case Yn:case Fg:return{byteLength:1,components:1};case xo:case Bg:case Vi:return{byteLength:2,components:1};case Tf:case Af:return{byteLength:2,components:4};case Gi:case wf:case Ni:return{byteLength:4,components:1};case $g:case Hg:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mf}}));typeof window<"u"&&(window.__THREE__?He("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ov(){let i=null,e=!1,t=null,n=null;function a(s,r){n=i.requestAnimationFrame(a),t(s,r)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(a),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Pb(i){const e=new WeakMap;function t(o,l){const c=o.array,d=o.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,d),o.onUploadCallback();let h;if(c instanceof Float32Array)h=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=i.HALF_FLOAT:h=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=i.SHORT;else if(c instanceof Uint32Array)h=i.UNSIGNED_INT;else if(c instanceof Int32Array)h=i.INT;else if(c instanceof Int8Array)h=i.BYTE;else if(c instanceof Uint8Array)h=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const d=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,d);else{f.sort((h,v)=>h.start-v.start);let u=0;for(let h=1;h<f.length;h++){const v=f[u],m=f[h];m.start<=v.start+v.count+1?v.count=Math.max(v.count,m.start+m.count-v.start):(++u,f[u]=m)}f.length=u+1;for(let h=0,v=f.length;h<v;h++){const m=f[h];i.bufferSubData(c,m.start*d.BYTES_PER_ELEMENT,d,m.start,m.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:a,remove:s,update:r}}var Db=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ib=`#ifdef USE_ALPHAHASH
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
#endif`,zb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ub=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ob=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fb=`#ifdef USE_AOMAP
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
#endif`,Bb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$b=`#ifdef USE_BATCHING
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
#endif`,Hb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Gb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Wb=`#ifdef USE_IRIDESCENCE
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
#endif`,Kb=`#ifdef USE_BUMPMAP
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
#endif`,Xb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Yb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Qb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ex=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,tx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,nx=`#define PI 3.141592653589793
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
} // validated`,ix=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ax=`vec3 transformedNormal = objectNormal;
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
#endif`,sx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ox=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cx="gl_FragColor = linearToOutputTexel( gl_FragColor );",dx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ux=`#ifdef USE_ENVMAP
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
#endif`,fx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,hx=`#ifdef USE_ENVMAP
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
#endif`,px=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mx=`#ifdef USE_ENVMAP
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
#endif`,gx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_x=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bx=`#ifdef USE_GRADIENTMAP
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
}`,xx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Ex=`#ifdef USE_ENVMAP
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
#endif`,wx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Tx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ax=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lx=`PhysicalMaterial material;
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
#endif`,Cx=`uniform sampler2D dfgLUT;
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
}`,Px=`
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
#endif`,Dx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ix=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zx=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Ux=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Nx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ox=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$x=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Gx=`#if defined( USE_POINTS_UV )
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
#endif`,Vx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Kx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yx=`#ifdef USE_MORPHTARGETS
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
#endif`,Zx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Qx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,nS=`#ifdef USE_NORMALMAP
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
#endif`,iS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,aS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,oS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,cS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_S=`float getShadowMask() {
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
}`,yS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bS=`#ifdef USE_SKINNING
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
#endif`,xS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,SS=`#ifdef USE_SKINNING
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
#endif`,kS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,MS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ES=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,TS=`#ifdef USE_TRANSMISSION
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
#endif`,AS=`#ifdef USE_TRANSMISSION
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
#endif`,RS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,LS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,CS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,PS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const DS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,IS=`uniform sampler2D t2D;
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
}`,zS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,US=`#ifdef ENVMAP_TYPE_CUBE
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
}`,NS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FS=`#include <common>
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
}`,BS=`#if DEPTH_PACKING == 3200
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
}`,$S=`#define DISTANCE
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
}`,HS=`#define DISTANCE
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
}`,GS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,VS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qS=`uniform float scale;
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
}`,WS=`uniform vec3 diffuse;
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
}`,KS=`#include <common>
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
}`,XS=`uniform vec3 diffuse;
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
}`,YS=`#define LAMBERT
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
}`,ZS=`#define LAMBERT
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
}`,JS=`#define MATCAP
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
}`,jS=`#define MATCAP
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
}`,QS=`#define NORMAL
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
}`,ek=`#define NORMAL
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
}`,tk=`#define PHONG
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
}`,nk=`#define PHONG
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
}`,ik=`#define STANDARD
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
}`,ak=`#define STANDARD
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
}`,sk=`#define TOON
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
}`,rk=`#define TOON
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
}`,ok=`uniform float size;
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
}`,lk=`uniform vec3 diffuse;
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
}`,ck=`#include <common>
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
}`,dk=`uniform vec3 color;
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
}`,uk=`uniform float rotation;
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
}`,fk=`uniform vec3 diffuse;
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
}`,Je={alphahash_fragment:Db,alphahash_pars_fragment:Ib,alphamap_fragment:zb,alphamap_pars_fragment:Ub,alphatest_fragment:Nb,alphatest_pars_fragment:Ob,aomap_fragment:Fb,aomap_pars_fragment:Bb,batching_pars_vertex:$b,batching_vertex:Hb,begin_vertex:Gb,beginnormal_vertex:Vb,bsdfs:qb,iridescence_fragment:Wb,bumpmap_pars_fragment:Kb,clipping_planes_fragment:Xb,clipping_planes_pars_fragment:Yb,clipping_planes_pars_vertex:Zb,clipping_planes_vertex:Jb,color_fragment:jb,color_pars_fragment:Qb,color_pars_vertex:ex,color_vertex:tx,common:nx,cube_uv_reflection_fragment:ix,defaultnormal_vertex:ax,displacementmap_pars_vertex:sx,displacementmap_vertex:rx,emissivemap_fragment:ox,emissivemap_pars_fragment:lx,colorspace_fragment:cx,colorspace_pars_fragment:dx,envmap_fragment:ux,envmap_common_pars_fragment:fx,envmap_pars_fragment:hx,envmap_pars_vertex:px,envmap_physical_pars_fragment:Ex,envmap_vertex:mx,fog_vertex:gx,fog_pars_vertex:vx,fog_fragment:_x,fog_pars_fragment:yx,gradientmap_pars_fragment:bx,lightmap_pars_fragment:xx,lights_lambert_fragment:Sx,lights_lambert_pars_fragment:kx,lights_pars_begin:Mx,lights_toon_fragment:wx,lights_toon_pars_fragment:Tx,lights_phong_fragment:Ax,lights_phong_pars_fragment:Rx,lights_physical_fragment:Lx,lights_physical_pars_fragment:Cx,lights_fragment_begin:Px,lights_fragment_maps:Dx,lights_fragment_end:Ix,lightprobes_pars_fragment:zx,logdepthbuf_fragment:Ux,logdepthbuf_pars_fragment:Nx,logdepthbuf_pars_vertex:Ox,logdepthbuf_vertex:Fx,map_fragment:Bx,map_pars_fragment:$x,map_particle_fragment:Hx,map_particle_pars_fragment:Gx,metalnessmap_fragment:Vx,metalnessmap_pars_fragment:qx,morphinstance_vertex:Wx,morphcolor_vertex:Kx,morphnormal_vertex:Xx,morphtarget_pars_vertex:Yx,morphtarget_vertex:Zx,normal_fragment_begin:Jx,normal_fragment_maps:jx,normal_pars_fragment:Qx,normal_pars_vertex:eS,normal_vertex:tS,normalmap_pars_fragment:nS,clearcoat_normal_fragment_begin:iS,clearcoat_normal_fragment_maps:aS,clearcoat_pars_fragment:sS,iridescence_pars_fragment:rS,opaque_fragment:oS,packing:lS,premultiplied_alpha_fragment:cS,project_vertex:dS,dithering_fragment:uS,dithering_pars_fragment:fS,roughnessmap_fragment:hS,roughnessmap_pars_fragment:pS,shadowmap_pars_fragment:mS,shadowmap_pars_vertex:gS,shadowmap_vertex:vS,shadowmask_pars_fragment:_S,skinbase_vertex:yS,skinning_pars_vertex:bS,skinning_vertex:xS,skinnormal_vertex:SS,specularmap_fragment:kS,specularmap_pars_fragment:MS,tonemapping_fragment:ES,tonemapping_pars_fragment:wS,transmission_fragment:TS,transmission_pars_fragment:AS,uv_pars_fragment:RS,uv_pars_vertex:LS,uv_vertex:CS,worldpos_vertex:PS,background_vert:DS,background_frag:IS,backgroundCube_vert:zS,backgroundCube_frag:US,cube_vert:NS,cube_frag:OS,depth_vert:FS,depth_frag:BS,distance_vert:$S,distance_frag:HS,equirect_vert:GS,equirect_frag:VS,linedashed_vert:qS,linedashed_frag:WS,meshbasic_vert:KS,meshbasic_frag:XS,meshlambert_vert:YS,meshlambert_frag:ZS,meshmatcap_vert:JS,meshmatcap_frag:jS,meshnormal_vert:QS,meshnormal_frag:ek,meshphong_vert:tk,meshphong_frag:nk,meshphysical_vert:ik,meshphysical_frag:ak,meshtoon_vert:sk,meshtoon_frag:rk,points_vert:ok,points_frag:lk,shadow_vert:ck,shadow_frag:dk,sprite_vert:uk,sprite_frag:fk},_e={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new X},probesMax:{value:new X},probesResolution:{value:new X}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Di={basic:{uniforms:kn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:kn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new ot(0)},envMapIntensity:{value:1}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:kn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:kn([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:kn([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new ot(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:kn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:kn([_e.points,_e.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:kn([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:kn([_e.common,_e.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:kn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:kn([_e.sprite,_e.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distance:{uniforms:kn([_e.common,_e.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distance_vert,fragmentShader:Je.distance_frag},shadow:{uniforms:kn([_e.lights,_e.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};Di.physical={uniforms:kn([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const gl={r:0,b:0,g:0},hk=new wt,lv=new We;lv.set(-1,0,0,0,1,0,0,0,1);function pk(i,e,t,n,a,s){const r=new ot(0);let o=a===!0?0:1,l,c,d=null,f=0,u=null;function h(y){let T=y.isScene===!0?y.background:null;if(T&&T.isTexture){const b=y.backgroundBlurriness>0;T=e.get(T,b)}return T}function v(y){let T=!1;const b=h(y);b===null?p(r,o):b&&b.isColor&&(p(b,1),T=!0);const S=i.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,s):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,T){const b=h(T);b&&(b.isCubeTexture||b.mapping===Sc)?(c===void 0&&(c=new ii(new ha(1,1,1),new qi({name:"BackgroundCubeMaterial",uniforms:Sr(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,k,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(hk.makeRotationFromEuler(T.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(lv),c.material.toneMapped=tt.getTransfer(b.colorSpace)!==mt,(d!==b||f!==b.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,d=b,f=b.version,u=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new ii(new Mc(2,2),new qi({name:"BackgroundMaterial",uniforms:Sr(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:Es,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=tt.getTransfer(b.colorSpace)!==mt,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(d!==b||f!==b.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,d=b,f=b.version,u=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,T){y.getRGB(gl,nv(i)),t.buffers.color.setClear(gl.r,gl.g,gl.b,T,s)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(y,T=1){r.set(y),o=T,p(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,p(r,o)},render:v,addToRenderList:m,dispose:g}}function mk(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},a=u(null);let s=a,r=!1;function o(L,z,F,C,$){let D=!1;const P=f(L,C,F,z);s!==P&&(s=P,c(s.object)),D=h(L,C,F,$),D&&v(L,C,F,$),$!==null&&e.update($,i.ELEMENT_ARRAY_BUFFER),(D||r)&&(r=!1,b(L,z,F,C),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return i.createVertexArray()}function c(L){return i.bindVertexArray(L)}function d(L){return i.deleteVertexArray(L)}function f(L,z,F,C){const $=C.wireframe===!0;let D=n[z.id];D===void 0&&(D={},n[z.id]=D);const P=L.isInstancedMesh===!0?L.id:0;let Z=D[P];Z===void 0&&(Z={},D[P]=Z);let G=Z[F.id];G===void 0&&(G={},Z[F.id]=G);let ee=G[$];return ee===void 0&&(ee=u(l()),G[$]=ee),ee}function u(L){const z=[],F=[],C=[];for(let $=0;$<t;$++)z[$]=0,F[$]=0,C[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:F,attributeDivisors:C,object:L,attributes:{},index:null}}function h(L,z,F,C){const $=s.attributes,D=z.attributes;let P=0;const Z=F.getAttributes();for(const G in Z)if(Z[G].location>=0){const ae=$[G];let ue=D[G];if(ue===void 0&&(G==="instanceMatrix"&&L.instanceMatrix&&(ue=L.instanceMatrix),G==="instanceColor"&&L.instanceColor&&(ue=L.instanceColor)),ae===void 0||ae.attribute!==ue||ue&&ae.data!==ue.data)return!0;P++}return s.attributesNum!==P||s.index!==C}function v(L,z,F,C){const $={},D=z.attributes;let P=0;const Z=F.getAttributes();for(const G in Z)if(Z[G].location>=0){let ae=D[G];ae===void 0&&(G==="instanceMatrix"&&L.instanceMatrix&&(ae=L.instanceMatrix),G==="instanceColor"&&L.instanceColor&&(ae=L.instanceColor));const ue={};ue.attribute=ae,ae&&ae.data&&(ue.data=ae.data),$[G]=ue,P++}s.attributes=$,s.attributesNum=P,s.index=C}function m(){const L=s.newAttributes;for(let z=0,F=L.length;z<F;z++)L[z]=0}function p(L){g(L,0)}function g(L,z){const F=s.newAttributes,C=s.enabledAttributes,$=s.attributeDivisors;F[L]=1,C[L]===0&&(i.enableVertexAttribArray(L),C[L]=1),$[L]!==z&&(i.vertexAttribDivisor(L,z),$[L]=z)}function y(){const L=s.newAttributes,z=s.enabledAttributes;for(let F=0,C=z.length;F<C;F++)z[F]!==L[F]&&(i.disableVertexAttribArray(F),z[F]=0)}function T(L,z,F,C,$,D,P){P===!0?i.vertexAttribIPointer(L,z,F,$,D):i.vertexAttribPointer(L,z,F,C,$,D)}function b(L,z,F,C){m();const $=C.attributes,D=F.getAttributes(),P=z.defaultAttributeValues;for(const Z in D){const G=D[Z];if(G.location>=0){let ee=$[Z];if(ee===void 0&&(Z==="instanceMatrix"&&L.instanceMatrix&&(ee=L.instanceMatrix),Z==="instanceColor"&&L.instanceColor&&(ee=L.instanceColor)),ee!==void 0){const ae=ee.normalized,ue=ee.itemSize,ke=e.get(ee);if(ke===void 0)continue;const Ne=ke.buffer,Ie=ke.type,$e=ke.bytesPerElement,j=Ie===i.INT||Ie===i.UNSIGNED_INT||ee.gpuType===wf;if(ee.isInterleavedBufferAttribute){const re=ee.data,fe=re.stride,Ue=ee.offset;if(re.isInstancedInterleavedBuffer){for(let xe=0;xe<G.locationSize;xe++)g(G.location+xe,re.meshPerAttribute);L.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let xe=0;xe<G.locationSize;xe++)p(G.location+xe);i.bindBuffer(i.ARRAY_BUFFER,Ne);for(let xe=0;xe<G.locationSize;xe++)T(G.location+xe,ue/G.locationSize,Ie,ae,fe*$e,(Ue+ue/G.locationSize*xe)*$e,j)}else{if(ee.isInstancedBufferAttribute){for(let re=0;re<G.locationSize;re++)g(G.location+re,ee.meshPerAttribute);L.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let re=0;re<G.locationSize;re++)p(G.location+re);i.bindBuffer(i.ARRAY_BUFFER,Ne);for(let re=0;re<G.locationSize;re++)T(G.location+re,ue/G.locationSize,Ie,ae,ue*$e,ue/G.locationSize*re*$e,j)}}else if(P!==void 0){const ae=P[Z];if(ae!==void 0)switch(ae.length){case 2:i.vertexAttrib2fv(G.location,ae);break;case 3:i.vertexAttrib3fv(G.location,ae);break;case 4:i.vertexAttrib4fv(G.location,ae);break;default:i.vertexAttrib1fv(G.location,ae)}}}}y()}function S(){w();for(const L in n){const z=n[L];for(const F in z){const C=z[F];for(const $ in C){const D=C[$];for(const P in D)d(D[P].object),delete D[P];delete C[$]}}delete n[L]}}function k(L){if(n[L.id]===void 0)return;const z=n[L.id];for(const F in z){const C=z[F];for(const $ in C){const D=C[$];for(const P in D)d(D[P].object),delete D[P];delete C[$]}}delete n[L.id]}function A(L){for(const z in n){const F=n[z];for(const C in F){const $=F[C];if($[L.id]===void 0)continue;const D=$[L.id];for(const P in D)d(D[P].object),delete D[P];delete $[L.id]}}}function x(L){for(const z in n){const F=n[z],C=L.isInstancedMesh===!0?L.id:0,$=F[C];if($!==void 0){for(const D in $){const P=$[D];for(const Z in P)d(P[Z].object),delete P[Z];delete $[D]}delete F[C],Object.keys(F).length===0&&delete n[z]}}}function w(){R(),r=!0,s!==a&&(s=a,c(s.object))}function R(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:w,resetDefaultState:R,dispose:S,releaseStatesOfGeometry:k,releaseStatesOfObject:x,releaseStatesOfProgram:A,initAttributes:m,enableAttribute:p,disableUnusedAttributes:y}}function gk(i,e,t){let n;function a(l){n=l}function s(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function r(l,c,d){d!==0&&(i.drawArraysInstanced(n,l,c,d),t.update(c,n,d))}function o(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,d);let u=0;for(let h=0;h<d;h++)u+=c[h];t.update(u,n,1)}this.setMode=a,this.render=s,this.renderInstances=r,this.renderMultiDraw=o}function vk(i,e,t,n){let a;function s(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");a=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function r(A){return!(A!==Ei&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const x=A===Vi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Yn&&A!==Ni&&!x&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(He("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const f=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&He("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),k=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:h,maxVertexTextures:v,maxTextureSize:m,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:y,maxVaryings:T,maxFragmentUniforms:b,maxSamples:S,samples:k}}function _k(i){const e=this;let t=null,n=0,a=!1,s=!1;const r=new Aa,o=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const h=f.length!==0||u||n!==0||a;return a=u,n=f.length,h},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){t=d(f,u,0)},this.setState=function(f,u,h){const v=f.clippingPlanes,m=f.clipIntersection,p=f.clipShadows,g=i.get(f);if(!a||v===null||v.length===0||s&&!p)s?d(null):c();else{const y=s?0:n,T=y*4;let b=g.clippingState||null;l.value=b,b=d(v,u,T,h);for(let S=0;S!==T;++S)b[S]=t[S];g.clippingState=b,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(f,u,h,v){const m=f!==null?f.length:0;let p=null;if(m!==0){if(p=l.value,v!==!0||p===null){const g=h+m*4,y=u.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<g)&&(p=new Float32Array(g));for(let T=0,b=h;T!==m;++T,b+=4)r.copy(f[T]).applyMatrix4(y,o),r.normal.toArray(p,b),p[b+3]=r.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,p}}const ir=4,yk=6,bk=20,xk=256,Br=new Of,mp=new ot;let Md=null,Ed=0,wd=0,Td=!1;const Sk=new X,ls=new X;class gp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,a=100,s={}){const{size:r=256,position:o=Sk}=s;Md=this._renderer.getRenderTarget(),Ed=this._renderer.getActiveCubeFace(),wd=this._renderer.getActiveMipmapLevel(),Td=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,a,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_p(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Md,Ed,wd),this._renderer.xr.enabled=Td,e.scissorTest=!1,Ys(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ws||e.mapping===xr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Md=this._renderer.getRenderTarget(),Ed=this._renderer.getActiveCubeFace(),wd=this._renderer.getActiveMipmapLevel(),Td=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:Vi,format:Ei,colorSpace:jl,depthBuffer:!1},a=vp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vp(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=kk(s)),this._blurMaterial=Ek(s,e,t),this._ggxMaterial=Mk(s,e,t)}return a}_compileMaterial(e){const t=new ii(new Ti,e);this._renderer.compile(t,Br)}_sceneToCubeUV(e,t,n,a,s){const l=new di(90,1,t,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,h=f.toneMapping;f.getClearColor(mp),f.toneMapping=$i,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(a),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ii(new ha,new Jg({name:"PMREM.Background",side:zn,depthWrite:!1,depthTest:!1})));const m=this._backgroundBox,p=m.material;let g=!1;const y=e.background;y?y.isColor&&(p.color.copy(y),e.background=null,g=!0):(p.color.copy(mp),g=!0);for(let T=0;T<6;T++){const b=T%3;b===0?(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[T],s.y,s.z)):b===1?(l.up.set(0,0,c[T]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[T],s.z)):(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[T]));const S=this._cubeSize;Ys(a,b*S,T>2?S:0,S,S),f.setRenderTarget(a),g&&f.render(m,l),f.render(e,l)}f.toneMapping=h,f.autoClear=u,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,a=e.mapping===ws||e.mapping===xr;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=yp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_p());const s=a?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Ys(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(r,Br)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const a=this._lodMeshes.length;for(let s=1;s<a;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const a=this._renderer,s=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[n];o.material=r;const l=r.uniforms,c=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-d*d),u=c*1.25,h=f*u,{_lodMax:v}=this,m=this._sizeLods[n],p=3*m*(n>v-ir?n-v+ir:0),g=4*(this._cubeSize-m);l.envMap.value=e.texture,l.roughness.value=h,l.mipInt.value=v-t,Ys(s,p,g,3*m,2*m),a.setRenderTarget(s),a.render(o,Br),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-n,Ys(e,p,g,3*m,2*m),a.setRenderTarget(e),a.render(o,Br)}_blur(e,t,n,a){const s=this._pingPongRenderTarget,r=Math.min(a,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,n,r),this._blurPass(s,e,n,n,r)}_blurPass(e,t,n,a,s){const r=this._renderer,o=this._blurMaterial,l=this._lodMeshes[a];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;const d=this._sizeLods[a],f=3*d*(a>this._lodMax-ir?a-this._lodMax+ir:0),u=4*(this._cubeSize-d);Ys(t,f,u,3*d,2*d),r.setRenderTarget(t),r.render(l,Br)}}function kk(i){const e=[],t=[];let n=i;const a=i-ir+1+yk;for(let s=0;s<a;s++){const r=Math.pow(2,n);e.push(r);const o=1/(r-2),l=-o,c=1+o,d=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,u=6,h=3,v=new Float32Array(h*u*f),m=new Float32Array(h*u*f);for(let g=0;g<f;g++){const y=g%3*2/3-1,T=g>2?0:-1,b=[y,T,0,y+2/3,T,0,y+2/3,T+1,0,y,T,0,y+2/3,T+1,0,y,T+1,0];v.set(b,h*u*g);for(let S=0;S<u;S++){const k=d[S*2]*2-1,A=d[S*2+1]*2-1;g===0?ls.set(1,A,k):g===1?ls.set(-k,1,-A):g===2?ls.set(-k,A,1):g===3?ls.set(-1,A,-k):g===4?ls.set(-k,-1,A):ls.set(k,A,-1),ls.toArray(m,(g*u+S)*h)}}const p=new Ti;p.setAttribute("position",new la(v,h)),p.setAttribute("outputDirection",new la(m,h)),t.push(new ii(p,null)),n>ir&&n--}return{lodMeshes:t,sizeLods:e}}function vp(i,e,t){const n=new wi(i,e,t);return n.texture.mapping=Sc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ys(i,e,t,n,a){i.viewport.set(e,t,n,a),i.scissor.set(e,t,n,a)}function Mk(i,e,t){return new qi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:xk,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ec(),fragmentShader:`

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
		`,blending:ra,depthTest:!1,depthWrite:!1})}function Ek(i,e,t){return new qi({name:"SphericalGaussianBlur",defines:{SAMPLES:bk,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ec(),fragmentShader:`

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
		`,blending:ra,depthTest:!1,depthWrite:!1})}function _p(){return new qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ec(),fragmentShader:`

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
		`,blending:ra,depthTest:!1,depthWrite:!1})}function yp(){return new qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ra,depthTest:!1,depthWrite:!1})}function Ec(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class cv extends wi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},a=[n,n,n,n,n,n];this.texture=new Qg(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new ha(5,5,5),s=new qi({name:"CubemapFromEquirect",uniforms:Sr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zn,blending:ra});s.uniforms.tEquirect.value=t;const r=new ii(a,s),o=t.minFilter;return t.minFilter===Ua&&(t.minFilter=sn),new Tb(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t=!0,n=!0,a=!0){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,a);e.setRenderTarget(s)}}function wk(i){let e=new WeakMap,t=new WeakMap,n=null;function a(u,h=!1){return u==null?null:h?r(u):s(u)}function s(u){if(u&&u.isTexture){const h=u.mapping;if(h===Zc||h===Jc)if(e.has(u)){const v=e.get(u).texture;return o(v,u.mapping)}else{const v=u.image;if(v&&v.height>0){const m=new cv(v.height);return m.fromEquirectangularTexture(i,u),e.set(u,m),u.addEventListener("dispose",c),o(m.texture,u.mapping)}else return null}}return u}function r(u){if(u&&u.isTexture){const h=u.mapping,v=h===Zc||h===Jc,m=h===ws||h===xr;if(v||m){let p=t.get(u);const g=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new gp(i)),p=v?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),p.texture;if(p!==void 0)return p.texture;{const y=u.image;return v&&y&&y.height>0||m&&y&&l(y)?(n===null&&(n=new gp(i)),p=v?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),u.addEventListener("dispose",d),p.texture):null}}}return u}function o(u,h){return h===Zc?u.mapping=ws:h===Jc&&(u.mapping=xr),u}function l(u){let h=0;const v=6;for(let m=0;m<v;m++)u[m]!==void 0&&h++;return h===v}function c(u){const h=u.target;h.removeEventListener("dispose",c);const v=e.get(h);v!==void 0&&(e.delete(h),v.dispose())}function d(u){const h=u.target;h.removeEventListener("dispose",d);const v=t.get(h);v!==void 0&&(t.delete(h),v.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:f}}function Tk(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const a=i.getExtension(n);return e[n]=a,a}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const a=t(n);return a===null&&dr("WebGLRenderer: "+n+" extension not supported."),a}}}function Ak(i,e,t,n){const a={},s=new WeakMap;function r(f){const u=f.target;u.index!==null&&e.remove(u.index);for(const v in u.attributes)e.remove(u.attributes[v]);u.removeEventListener("dispose",r),delete a[u.id];const h=s.get(u);h&&(e.remove(h),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(f,u){return a[u.id]===!0||(u.addEventListener("dispose",r),a[u.id]=!0,t.memory.geometries++),u}function l(f){const u=f.attributes;for(const h in u)e.update(u[h],i.ARRAY_BUFFER)}function c(f){const u=[],h=f.index,v=f.attributes.position;let m=0;if(v===void 0)return;if(h!==null){const y=h.array;m=h.version;for(let T=0,b=y.length;T<b;T+=3){const S=y[T+0],k=y[T+1],A=y[T+2];u.push(S,k,k,A,A,S)}}else{const y=v.array;m=v.version;for(let T=0,b=y.length/3-1;T<b;T+=3){const S=T+0,k=T+1,A=T+2;u.push(S,k,k,A,A,S)}}const p=new(v.count>=65535?Zg:Yg)(u,1);p.version=m;const g=s.get(f);g&&e.remove(g),s.set(f,p)}function d(f){const u=s.get(f);if(u){const h=f.index;h!==null&&u.version<h.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:d}}function Rk(i,e,t){let n;function a(f){n=f}let s,r;function o(f){s=f.type,r=f.bytesPerElement}function l(f,u){i.drawElements(n,u,s,f*r),t.update(u,n,1)}function c(f,u,h){h!==0&&(i.drawElementsInstanced(n,u,s,f*r,h),t.update(u,n,h))}function d(f,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,f,0,h);let m=0;for(let p=0;p<h;p++)m+=u[p];t.update(m,n,1)}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function Lk(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,o){switch(t.calls++,r){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:ct("WebGLInfo: Unknown draw mode:",r);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:n}}function Ck(i,e,t){const n=new WeakMap,a=new Dt;function s(r,o,l){const c=r.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=d!==void 0?d.length:0;let u=n.get(o);if(u===void 0||u.count!==f){let w=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();const h=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let T=0;h===!0&&(T=1),v===!0&&(T=2),m===!0&&(T=3);let b=o.attributes.position.count*T,S=1;b>e.maxTextureSize&&(S=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const k=new Float32Array(b*S*4*f),A=new Kg(k,b,S,f);A.type=Ni,A.needsUpdate=!0;const x=T*4;for(let R=0;R<f;R++){const L=p[R],z=g[R],F=y[R],C=b*S*4*R;for(let $=0;$<L.count;$++){const D=$*x;h===!0&&(a.fromBufferAttribute(L,$),k[C+D+0]=a.x,k[C+D+1]=a.y,k[C+D+2]=a.z,k[C+D+3]=0),v===!0&&(a.fromBufferAttribute(z,$),k[C+D+4]=a.x,k[C+D+5]=a.y,k[C+D+6]=a.z,k[C+D+7]=0),m===!0&&(a.fromBufferAttribute(F,$),k[C+D+8]=a.x,k[C+D+9]=a.y,k[C+D+10]=a.z,k[C+D+11]=F.itemSize===4?a.w:1)}}u={count:f,texture:A,size:new st(b,S)},n.set(o,u),o.addEventListener("dispose",w)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",r.morphTexture,t);else{let h=0;for(let m=0;m<c.length;m++)h+=c[m];const v=o.morphTargetsRelative?1:1-h;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:s}}function Pk(i,e,t,n,a){let s=new WeakMap;function r(c){const d=a.render.frame,f=c.geometry,u=e.get(c,f);if(s.get(u)!==d&&(e.update(u),s.set(u,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==d&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,d))),c.isSkinnedMesh){const h=c.skeleton;s.get(h)!==d&&(h.update(),s.set(h,d))}return u}function o(){s=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:r,dispose:o}}const Dk={[Cg]:"LINEAR_TONE_MAPPING",[Pg]:"REINHARD_TONE_MAPPING",[Dg]:"CINEON_TONE_MAPPING",[Ig]:"ACES_FILMIC_TONE_MAPPING",[Ug]:"AGX_TONE_MAPPING",[Ng]:"NEUTRAL_TONE_MAPPING",[zg]:"CUSTOM_TONE_MAPPING"};function Ik(i,e,t,n,a,s){const r=new wi(e,t,{type:i,depthBuffer:a,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new Ti;c.setAttribute("position",new mi([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new mi([0,2,0,0,2,0],2));const d=new _b({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new ii(c,d),u=new Of(-1,1,1,-1,0,1);let h=null,v=null,m=!1,p,g=null,y=[],T=!1;this.setSize=function(b,S){r.setSize(b,S),o!==null&&o.setSize(b,S),l!==null&&l.setSize(b,S);for(let k=0;k<y.length;k++){const A=y[k];A.setSize&&A.setSize(b,S)}},this.setEffects=function(b){y=b,T=y.length>0&&y[0].isRenderPass===!0;const S=r.width,k=r.height;y.length>0&&o===null&&(o=new wi(S,k,{type:Vi,depthBuffer:!1,stencilBuffer:!1}),l=new wi(S,k,{type:Vi,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<y.length;A++){const x=y[A];x.setSize&&x.setSize(S,k)}},this.begin=function(b,S){if(m||b.toneMapping===$i&&y.length===0)return!1;if(g=S,S!==null){const k=S.width,A=S.height;(r.width!==k||r.height!==A)&&this.setSize(k,A)}return T===!1&&b.setRenderTarget(r),p=b.toneMapping,b.toneMapping=$i,!0},this.hasRenderPass=function(){return T},this.end=function(b,S){b.toneMapping=p,m=!0;let k=r,A=o;for(let x=0;x<y.length;x++){const w=y[x];w.enabled!==!1&&(w.render(b,A,k,S),w.needsSwap!==!1&&(k=A,A=A===o?l:o))}if(h!==b.outputColorSpace||v!==b.toneMapping){h=b.outputColorSpace,v=b.toneMapping,d.defines={},tt.getTransfer(h)===mt&&(d.defines.SRGB_TRANSFER="");const x=Dk[v];x&&(d.defines[x]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=k.texture,b.setRenderTarget(g),b.render(f,u),g=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),d.dispose()}}const dv=new on,Xu=new Eo(1,1),uv=new Kg,fv=new Ky,hv=new Qg,bp=[],xp=[],Sp=new Float32Array(16),kp=new Float32Array(9),Mp=new Float32Array(4);function wr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const a=e*t;let s=bp[a];if(s===void 0&&(s=new Float32Array(a),bp[a]=s),e!==0){n.toArray(s,0);for(let r=1,o=0;r!==e;++r)o+=t,i[r].toArray(s,o)}return s}function Yt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Zt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function wc(i,e){let t=xp[e];t===void 0&&(t=new Int32Array(e),xp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function zk(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Uk(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2fv(this.addr,e),Zt(t,e)}}function Nk(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Yt(t,e))return;i.uniform3fv(this.addr,e),Zt(t,e)}}function Ok(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4fv(this.addr,e),Zt(t,e)}}function Fk(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Zt(t,e)}else{if(Yt(t,n))return;Mp.set(n),i.uniformMatrix2fv(this.addr,!1,Mp),Zt(t,n)}}function Bk(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Zt(t,e)}else{if(Yt(t,n))return;kp.set(n),i.uniformMatrix3fv(this.addr,!1,kp),Zt(t,n)}}function $k(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Zt(t,e)}else{if(Yt(t,n))return;Sp.set(n),i.uniformMatrix4fv(this.addr,!1,Sp),Zt(t,n)}}function Hk(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Gk(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2iv(this.addr,e),Zt(t,e)}}function Vk(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;i.uniform3iv(this.addr,e),Zt(t,e)}}function qk(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4iv(this.addr,e),Zt(t,e)}}function Wk(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Kk(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2uiv(this.addr,e),Zt(t,e)}}function Xk(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;i.uniform3uiv(this.addr,e),Zt(t,e)}}function Yk(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4uiv(this.addr,e),Zt(t,e)}}function Zk(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a);let s;this.type===i.SAMPLER_2D_SHADOW?(Xu.compareFunction=t.isReversedDepthBuffer()?Df:Pf,s=Xu):s=dv,t.setTexture2D(e||s,a)}function Jk(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTexture3D(e||fv,a)}function jk(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTextureCube(e||hv,a)}function Qk(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTexture2DArray(e||uv,a)}function e1(i){switch(i){case 5126:return zk;case 35664:return Uk;case 35665:return Nk;case 35666:return Ok;case 35674:return Fk;case 35675:return Bk;case 35676:return $k;case 5124:case 35670:return Hk;case 35667:case 35671:return Gk;case 35668:case 35672:return Vk;case 35669:case 35673:return qk;case 5125:return Wk;case 36294:return Kk;case 36295:return Xk;case 36296:return Yk;case 35678:case 36198:case 36298:case 36306:case 35682:return Zk;case 35679:case 36299:case 36307:return Jk;case 35680:case 36300:case 36308:case 36293:return jk;case 36289:case 36303:case 36311:case 36292:return Qk}}function t1(i,e){i.uniform1fv(this.addr,e)}function n1(i,e){const t=wr(e,this.size,2);i.uniform2fv(this.addr,t)}function i1(i,e){const t=wr(e,this.size,3);i.uniform3fv(this.addr,t)}function a1(i,e){const t=wr(e,this.size,4);i.uniform4fv(this.addr,t)}function s1(i,e){const t=wr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function r1(i,e){const t=wr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function o1(i,e){const t=wr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function l1(i,e){i.uniform1iv(this.addr,e)}function c1(i,e){i.uniform2iv(this.addr,e)}function d1(i,e){i.uniform3iv(this.addr,e)}function u1(i,e){i.uniform4iv(this.addr,e)}function f1(i,e){i.uniform1uiv(this.addr,e)}function h1(i,e){i.uniform2uiv(this.addr,e)}function p1(i,e){i.uniform3uiv(this.addr,e)}function m1(i,e){i.uniform4uiv(this.addr,e)}function g1(i,e,t){const n=this.cache,a=e.length,s=wc(t,a);Yt(n,s)||(i.uniform1iv(this.addr,s),Zt(n,s));let r;this.type===i.SAMPLER_2D_SHADOW?r=Xu:r=dv;for(let o=0;o!==a;++o)t.setTexture2D(e[o]||r,s[o])}function v1(i,e,t){const n=this.cache,a=e.length,s=wc(t,a);Yt(n,s)||(i.uniform1iv(this.addr,s),Zt(n,s));for(let r=0;r!==a;++r)t.setTexture3D(e[r]||fv,s[r])}function _1(i,e,t){const n=this.cache,a=e.length,s=wc(t,a);Yt(n,s)||(i.uniform1iv(this.addr,s),Zt(n,s));for(let r=0;r!==a;++r)t.setTextureCube(e[r]||hv,s[r])}function y1(i,e,t){const n=this.cache,a=e.length,s=wc(t,a);Yt(n,s)||(i.uniform1iv(this.addr,s),Zt(n,s));for(let r=0;r!==a;++r)t.setTexture2DArray(e[r]||uv,s[r])}function b1(i){switch(i){case 5126:return t1;case 35664:return n1;case 35665:return i1;case 35666:return a1;case 35674:return s1;case 35675:return r1;case 35676:return o1;case 5124:case 35670:return l1;case 35667:case 35671:return c1;case 35668:case 35672:return d1;case 35669:case 35673:return u1;case 5125:return f1;case 36294:return h1;case 36295:return p1;case 36296:return m1;case 35678:case 36198:case 36298:case 36306:case 35682:return g1;case 35679:case 36299:case 36307:return v1;case 35680:case 36300:case 36308:case 36293:return _1;case 36289:case 36303:case 36311:case 36292:return y1}}class x1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=e1(t.type)}}class S1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=b1(t.type)}}class k1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const a=this.seq;for(let s=0,r=a.length;s!==r;++s){const o=a[s];o.setValue(e,t[o.id],n)}}}const Ad=/(\w+)(\])?(\[|\.)?/g;function Ep(i,e){i.seq.push(e),i.map[e.id]=e}function M1(i,e,t){const n=i.name,a=n.length;for(Ad.lastIndex=0;;){const s=Ad.exec(n),r=Ad.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===a){Ep(t,c===void 0?new x1(o,i,e):new S1(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new k1(o),Ep(t,f)),t=f}}}class zl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const o=e.getActiveUniform(t,r),l=e.getUniformLocation(t,o.name);M1(o,l,this)}const a=[],s=[];for(const r of this.seq)r.type===e.SAMPLER_2D_SHADOW||r.type===e.SAMPLER_CUBE_SHADOW||r.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(r):s.push(r);a.length>0&&(this.seq=a.concat(s))}setValue(e,t,n,a){const s=this.map[t];s!==void 0&&s.setValue(e,n,a)}setOptional(e,t,n){const a=t[n];a!==void 0&&this.setValue(e,n,a)}static upload(e,t,n,a){for(let s=0,r=t.length;s!==r;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,a)}}static seqWithValue(e,t){const n=[];for(let a=0,s=e.length;a!==s;++a){const r=e[a];r.id in t&&n.push(r)}return n}}function wp(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const E1=37297;let w1=0;function T1(i,e){const t=i.split(`
`),n=[],a=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=a;r<s;r++){const o=r+1;n.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return n.join(`
`)}const Tp=new We;function A1(i){tt._getMatrix(Tp,tt.workingColorSpace,i);const e=`mat3( ${Tp.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(i)){case Ql:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return He("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ap(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+T1(i.getShaderSource(e),o)}else return s}function R1(i,e){const t=A1(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const L1={[Cg]:"Linear",[Pg]:"Reinhard",[Dg]:"Cineon",[Ig]:"ACESFilmic",[Ug]:"AgX",[Ng]:"Neutral",[zg]:"Custom"};function C1(i,e){const t=L1[e];return t===void 0?(He("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const vl=new X;function P1(){tt.getLuminanceCoefficients(vl);const i=vl.x.toFixed(4),e=vl.y.toFixed(4),t=vl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function D1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Kr).join(`
`)}function I1(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function z1(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let a=0;a<n;a++){const s=i.getActiveAttrib(e,a),r=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[r]={type:s.type,location:i.getAttribLocation(e,r),locationSize:o}}return t}function Kr(i){return i!==""}function Rp(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const U1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yu(i){return i.replace(U1,O1)}const N1=new Map;function O1(i,e){let t=Je[e];if(t===void 0){const n=N1.get(e);if(n!==void 0)t=Je[n],He('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Yu(t)}const F1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cp(i){return i.replace(F1,B1)}function B1(i,e,t,n){let a="";for(let s=parseInt(e);s<parseInt(t);s++)a+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function Pp(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const $1={[Rl]:"SHADOWMAP_TYPE_PCF",[Wr]:"SHADOWMAP_TYPE_VSM"};function H1(i){return $1[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const G1={[ws]:"ENVMAP_TYPE_CUBE",[xr]:"ENVMAP_TYPE_CUBE",[Sc]:"ENVMAP_TYPE_CUBE_UV"};function V1(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":G1[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const q1={[xr]:"ENVMAP_MODE_REFRACTION"};function W1(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":q1[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const K1={[Ef]:"ENVMAP_BLENDING_MULTIPLY",[Sy]:"ENVMAP_BLENDING_MIX",[ky]:"ENVMAP_BLENDING_ADD"};function X1(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":K1[i.combine]||"ENVMAP_BLENDING_NONE"}function Y1(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Z1(i,e,t,n){const a=i.getContext(),s=t.defines;let r=t.vertexShader,o=t.fragmentShader;const l=H1(t),c=V1(t),d=W1(t),f=X1(t),u=Y1(t),h=D1(t),v=I1(s),m=a.createProgram();let p,g,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Kr).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Kr).join(`
`),g.length>0&&(g+=`
`)):(p=[Pp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Kr).join(`
`),g=[Pp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$i?"#define TONE_MAPPING":"",t.toneMapping!==$i?Je.tonemapping_pars_fragment:"",t.toneMapping!==$i?C1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,R1("linearToOutputTexel",t.outputColorSpace),P1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Kr).join(`
`)),r=Yu(r),r=Rp(r,t),r=Lp(r,t),o=Yu(o),o=Rp(o,t),o=Lp(o,t),r=Cp(r),o=Cp(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",t.glslVersion===Oh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Oh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const T=y+p+r,b=y+g+o,S=wp(a,a.VERTEX_SHADER,T),k=wp(a,a.FRAGMENT_SHADER,b);a.attachShader(m,S),a.attachShader(m,k),t.index0AttributeName!==void 0?a.bindAttribLocation(m,0,t.index0AttributeName):t.hasPositionAttribute===!0&&a.bindAttribLocation(m,0,"position"),a.linkProgram(m);function A(L){if(i.debug.checkShaderErrors){const z=a.getProgramInfoLog(m)||"",F=a.getShaderInfoLog(S)||"",C=a.getShaderInfoLog(k)||"",$=z.trim(),D=F.trim(),P=C.trim();let Z=!0,G=!0;if(a.getProgramParameter(m,a.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(a,m,S,k);else{const ee=Ap(a,S,"vertex"),ae=Ap(a,k,"fragment");ct("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(m,a.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+$+`
`+ee+`
`+ae)}else $!==""?He("WebGLProgram: Program Info Log:",$):(D===""||P==="")&&(G=!1);G&&(L.diagnostics={runnable:Z,programLog:$,vertexShader:{log:D,prefix:p},fragmentShader:{log:P,prefix:g}})}a.deleteShader(S),a.deleteShader(k),x=new zl(a,m),w=z1(a,m)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=a.getProgramParameter(m,E1)),R},this.destroy=function(){n.releaseStatesOfProgram(this),a.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=w1++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=S,this.fragmentShader=k,this}let J1=0;class j1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const a=this._getShaderCacheForMaterial(e);return a.has(t)===!1&&(a.add(t),t.usedTimes++),a.has(n)===!1&&(a.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Q1(e),t.set(e,n)),n}}class Q1{constructor(e){this.id=J1++,this.code=e,this.usedTimes=0}}function eM(i){return i===Ts||i===Zl||i===Jl}function tM(i,e,t,n,a,s){const r=new zf,o=new j1,l=new Set,c=[],d=new Map,f=n.logarithmicDepthBuffer;let u=n.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,w,R,L,z,F){const C=L.fog,$=z.geometry,D=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?L.environment:null,P=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,Z=e.get(x.envMap||D,P),G=Z&&Z.mapping===Sc?Z.image.height:null,ee=h[x.type];x.precision!==null&&(u=n.getMaxPrecision(x.precision),u!==x.precision&&He("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));const ae=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ue=ae!==void 0?ae.length:0;let ke=0;$.morphAttributes.position!==void 0&&(ke=1),$.morphAttributes.normal!==void 0&&(ke=2),$.morphAttributes.color!==void 0&&(ke=3);let Ne,Ie,$e,j;if(ee){const St=Di[ee];Ne=St.vertexShader,Ie=St.fragmentShader}else{Ne=x.vertexShader,Ie=x.fragmentShader;const St=o.getVertexShaderStage(x),ut=o.getFragmentShaderStage(x);o.update(x,St,ut),$e=St.id,j=ut.id}const re=i.getRenderTarget(),fe=i.state.buffers.depth.getReversed(),Ue=z.isInstancedMesh===!0,xe=z.isBatchedMesh===!0,Fe=!!x.map,_t=!!x.matcap,Be=!!Z,Ye=!!x.aoMap,rt=!!x.lightMap,Ge=!!x.bumpMap&&x.wireframe===!1,pt=!!x.normalMap,zt=!!x.displacementMap,qt=!!x.emissiveMap,dt=!!x.metalnessMap,Ut=!!x.roughnessMap,N=x.anisotropy>0,Wt=x.clearcoat>0,B=x.dispersion>0,E=x.retroreflectivity>0,_=x.iridescence>0,O=x.sheen>0,V=x.transmission>0,Q=N&&!!x.anisotropyMap,ce=Wt&&!!x.clearcoatMap,de=Wt&&!!x.clearcoatNormalMap,ne=Wt&&!!x.clearcoatRoughnessMap,se=_&&!!x.iridescenceMap,he=_&&!!x.iridescenceThicknessMap,Pe=O&&!!x.sheenColorMap,ve=O&&!!x.sheenRoughnessMap,pe=!!x.specularMap,De=!!x.specularColorMap,Oe=!!x.specularIntensityMap,Xe=V&&!!x.transmissionMap,U=V&&!!x.thicknessMap,me=!!x.gradientMap,oe=!!x.alphaMap,ge=x.alphaTest>0,Se=!!x.alphaHash,le=!!x.extensions;let ze=$i;x.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(ze=i.toneMapping);const Le={shaderID:ee,shaderType:x.type,shaderName:x.name,vertexShader:Ne,fragmentShader:Ie,defines:x.defines,customVertexShaderID:$e,customFragmentShaderID:j,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:xe,batchingColor:xe&&z._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&z.instanceColor!==null,instancingMorph:Ue&&z.morphTexture!==null,outputColorSpace:re===null?i.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:tt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Fe,matcap:_t,envMap:Be,envMapMode:Be&&Z.mapping,envMapCubeUVHeight:G,aoMap:Ye,lightMap:rt,bumpMap:Ge,normalMap:pt,displacementMap:zt,emissiveMap:qt,normalMapObjectSpace:pt&&x.normalMapType===wy,normalMapTangentSpace:pt&&x.normalMapType===qu,packedNormalMap:pt&&x.normalMapType===qu&&eM(x.normalMap.format),metalnessMap:dt,roughnessMap:Ut,anisotropy:N,anisotropyMap:Q,clearcoat:Wt,clearcoatMap:ce,clearcoatNormalMap:de,clearcoatRoughnessMap:ne,dispersion:B,retroreflection:E,iridescence:_,iridescenceMap:se,iridescenceThicknessMap:he,sheen:O,sheenColorMap:Pe,sheenRoughnessMap:ve,specularMap:pe,specularColorMap:De,specularIntensityMap:Oe,transmission:V,transmissionMap:Xe,thicknessMap:U,gradientMap:me,opaque:x.transparent===!1&&x.blending===so&&x.alphaToCoverage===!1,alphaMap:oe,alphaTest:ge,alphaHash:Se,combine:x.combine,mapUv:Fe&&v(x.map.channel),aoMapUv:Ye&&v(x.aoMap.channel),lightMapUv:rt&&v(x.lightMap.channel),bumpMapUv:Ge&&v(x.bumpMap.channel),normalMapUv:pt&&v(x.normalMap.channel),displacementMapUv:zt&&v(x.displacementMap.channel),emissiveMapUv:qt&&v(x.emissiveMap.channel),metalnessMapUv:dt&&v(x.metalnessMap.channel),roughnessMapUv:Ut&&v(x.roughnessMap.channel),anisotropyMapUv:Q&&v(x.anisotropyMap.channel),clearcoatMapUv:ce&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:de&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:he&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:ve&&v(x.sheenRoughnessMap.channel),specularMapUv:pe&&v(x.specularMap.channel),specularColorMapUv:De&&v(x.specularColorMap.channel),specularIntensityMapUv:Oe&&v(x.specularIntensityMap.channel),transmissionMapUv:Xe&&v(x.transmissionMap.channel),thicknessMapUv:U&&v(x.thicknessMap.channel),alphaMapUv:oe&&v(x.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(pt||N),vertexNormals:!!$.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!$.attributes.uv&&(Fe||oe),fog:!!C,useFog:x.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||$.attributes.normal===void 0&&pt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:fe,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:$.attributes.position!==void 0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:ke,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:F.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:ze,decodeVideoTexture:Fe&&x.map.isVideoTexture===!0&&tt.getTransfer(x.map.colorSpace)===mt,decodeVideoTextureEmissive:qt&&x.emissiveMap.isVideoTexture===!0&&tt.getTransfer(x.emissiveMap.colorSpace)===mt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ki,flipSided:x.side===zn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:le&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(le&&x.extensions.multiDraw===!0||xe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Le.vertexUv1s=l.has(1),Le.vertexUv2s=l.has(2),Le.vertexUv3s=l.has(3),l.clear(),Le}function p(x){const w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(const R in x.defines)w.push(R),w.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(g(w,x),y(w,x),w.push(i.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function g(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numSunLights),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numSunLightShadows),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function y(x,w){r.disableAll(),w.instancing&&r.enable(0),w.instancingColor&&r.enable(1),w.instancingMorph&&r.enable(2),w.matcap&&r.enable(3),w.envMap&&r.enable(4),w.normalMapObjectSpace&&r.enable(5),w.normalMapTangentSpace&&r.enable(6),w.clearcoat&&r.enable(7),w.iridescence&&r.enable(8),w.alphaTest&&r.enable(9),w.vertexColors&&r.enable(10),w.vertexAlphas&&r.enable(11),w.vertexUv1s&&r.enable(12),w.vertexUv2s&&r.enable(13),w.vertexUv3s&&r.enable(14),w.vertexTangents&&r.enable(15),w.anisotropy&&r.enable(16),w.alphaHash&&r.enable(17),w.batching&&r.enable(18),w.dispersion&&r.enable(19),w.retroreflection&&r.enable(24),w.batchingColor&&r.enable(20),w.gradientMap&&r.enable(21),w.packedNormalMap&&r.enable(22),w.vertexNormals&&r.enable(23),x.push(r.mask),r.disableAll(),w.fog&&r.enable(0),w.useFog&&r.enable(1),w.flatShading&&r.enable(2),w.logarithmicDepthBuffer&&r.enable(3),w.reversedDepthBuffer&&r.enable(4),w.skinning&&r.enable(5),w.morphTargets&&r.enable(6),w.morphNormals&&r.enable(7),w.morphColors&&r.enable(8),w.premultipliedAlpha&&r.enable(9),w.shadowMapEnabled&&r.enable(10),w.doubleSided&&r.enable(11),w.flipSided&&r.enable(12),w.useDepthPacking&&r.enable(13),w.dithering&&r.enable(14),w.transmission&&r.enable(15),w.sheen&&r.enable(16),w.opaque&&r.enable(17),w.pointsUvs&&r.enable(18),w.decodeVideoTexture&&r.enable(19),w.decodeVideoTextureEmissive&&r.enable(20),w.alphaToCoverage&&r.enable(21),w.numLightProbeGrids>0&&r.enable(22),w.hasPositionAttribute&&r.enable(23),x.push(r.mask)}function T(x){const w=h[x.type];let R;if(w){const L=Di[w];R=mb.clone(L.uniforms)}else R=x.uniforms;return R}function b(x,w){let R=d.get(w);return R!==void 0?++R.usedTimes:(R=new Z1(i,w,x,a),c.push(R),d.set(w,R)),R}function S(x){if(--x.usedTimes===0){const w=c.indexOf(x);c[w]=c[c.length-1],c.pop(),d.delete(x.cacheKey),x.destroy()}}function k(x){o.remove(x)}function A(){o.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:T,acquireProgram:b,releaseProgram:S,releaseShaderCache:k,programs:c,dispose:A}}function nM(){let i=new WeakMap;function e(r){return i.has(r)}function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function n(r){i.delete(r)}function a(r,o,l){i.get(r)[o]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:a,dispose:s}}function iM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Dp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ip(){const i=[];let e=0;const t=[],n=[],a=[];function s(){e=0,t.length=0,n.length=0,a.length=0}function r(u){let h=0;return u.isInstancedMesh&&(h+=2),u.isSkinnedMesh&&(h+=1),h}function o(u,h,v,m,p,g){let y=i[e];return y===void 0?(y={id:u.id,object:u,geometry:h,material:v,materialVariant:r(u),groupOrder:m,renderOrder:u.renderOrder,z:p,group:g},i[e]=y):(y.id=u.id,y.object=u,y.geometry=h,y.material=v,y.materialVariant=r(u),y.groupOrder=m,y.renderOrder=u.renderOrder,y.z=p,y.group=g),e++,y}function l(u,h,v,m,p,g,y){y.reversedDepth===!0&&(p=-p);const T=o(u,h,v,m,p,g);v.transmission>0?n.push(T):v.transparent===!0?a.push(T):t.push(T)}function c(u,h,v,m,p,g){const y=o(u,h,v,m,p,g);v.transmission>0?n.unshift(y):v.transparent===!0?a.unshift(y):t.unshift(y)}function d(u,h){t.length>1&&t.sort(u||iM),n.length>1&&n.sort(h||Dp),a.length>1&&a.sort(h||Dp)}function f(){for(let u=e,h=i.length;u<h;u++){const v=i[u];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:a,init:s,push:l,unshift:c,finish:f,sort:d}}function aM(){let i=new WeakMap;function e(n,a){const s=i.get(n);let r;return s===void 0?(r=new Ip,i.set(n,[r])):a>=s.length?(r=new Ip,s.push(r)):r=s[a],r}function t(){i=new WeakMap}return{get:e,dispose:t}}function sM(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new X,color:new ot};break;case"SpotLight":t={position:new X,direction:new X,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":t={color:new ot,position:new X,halfWidth:new X,halfHeight:new X};break}return i[e.id]=t,t}}}function rM(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let oM=0;function lM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function cM(i){const e=new sM,t=rM(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new X);const a=new X,s=new wt,r=new wt;function o(c){let d=0,f=0,u=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let h=0,v=0,m=0,p=0,g=0,y=0,T=0,b=0,S=0,k=0,A=0,x=0,w=0,R=0;c.sort(lM);for(let z=0,F=c.length;z<F;z++){const C=c[z],$=C.color,D=C.intensity,P=C.distance;let Z=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Ts?Z=C.shadow.map.texture:Z=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)d+=$.r*D,f+=$.g*D,u+=$.b*D;else if(C.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(C.sh.coefficients[G],D);R++}else if(C.isSunLight){const G=e.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const ee=C.shadow,ae=t.get(C);ae.shadowIntensity=ee.intensity,ae.shadowBias=ee.bias,ae.shadowNormalBias=ee.normalBias,ae.shadowRadius=ee.radius,ae.shadowMapSize.copy(ee.mapSize).multiply(ee.getFrameExtents()),n.sunShadow[v]=ae,n.sunShadowMap[v]=Z;const ue=ee.getViewportCount();for(let ke=0;ke<ue;ke++)n.sunShadowMatrix[m+ke]=ee.getMatrix(ke),n.sunShadowCascade[m+ke]=ee._cascadeData[ke];m+=ue,v++}n.sun[h]=G,h++}else if(C.isDirectionalLight){const G=e.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const ee=C.shadow,ae=t.get(C);ae.shadowIntensity=ee.intensity,ae.shadowBias=ee.bias,ae.shadowNormalBias=ee.normalBias,ae.shadowRadius=ee.radius,ae.shadowMapSize=ee.mapSize,n.directionalShadow[p]=ae,n.directionalShadowMap[p]=Z,n.directionalShadowMatrix[p]=C.shadow.matrix,S++}n.directional[p]=G,p++}else if(C.isSpotLight){const G=e.get(C);G.position.setFromMatrixPosition(C.matrixWorld),G.color.copy($).multiplyScalar(D),G.distance=P,G.coneCos=Math.cos(C.angle),G.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),G.decay=C.decay,n.spot[y]=G;const ee=C.shadow;if(C.map&&(n.spotLightMap[x]=C.map,x++,ee.updateMatrices(C),C.castShadow&&w++),n.spotLightMatrix[y]=ee.matrix,C.castShadow){const ae=t.get(C);ae.shadowIntensity=ee.intensity,ae.shadowBias=ee.bias,ae.shadowNormalBias=ee.normalBias,ae.shadowRadius=ee.radius,ae.shadowMapSize=ee.mapSize,n.spotShadow[y]=ae,n.spotShadowMap[y]=Z,A++}y++}else if(C.isRectAreaLight){const G=e.get(C);G.color.copy($).multiplyScalar(D),G.halfWidth.set(C.width*.5,0,0),G.halfHeight.set(0,C.height*.5,0),n.rectArea[T]=G,T++}else if(C.isPointLight){const G=e.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),G.distance=C.distance,G.decay=C.decay,C.castShadow){const ee=C.shadow,ae=t.get(C);ae.shadowIntensity=ee.intensity,ae.shadowBias=ee.bias,ae.shadowNormalBias=ee.normalBias,ae.shadowRadius=ee.radius,ae.shadowMapSize=ee.mapSize,ae.shadowCameraNear=ee.camera.near,ae.shadowCameraFar=ee.camera.far,n.pointShadow[g]=ae,n.pointShadowMap[g]=Z,n.pointShadowMatrix[g]=C.shadow.matrix,k++}n.point[g]=G,g++}else if(C.isHemisphereLight){const G=e.get(C);G.skyColor.copy(C.color).multiplyScalar(D),G.groundColor.copy(C.groundColor).multiplyScalar(D),n.hemi[b]=G,b++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_e.LTC_FLOAT_1,n.rectAreaLTC2=_e.LTC_FLOAT_2):(n.rectAreaLTC1=_e.LTC_HALF_1,n.rectAreaLTC2=_e.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=f,n.ambient[2]=u;const L=n.hash;(L.sunLength!==h||L.directionalLength!==p||L.pointLength!==g||L.spotLength!==y||L.rectAreaLength!==T||L.hemiLength!==b||L.numSunShadows!==v||L.numDirectionalShadows!==S||L.numPointShadows!==k||L.numSpotShadows!==A||L.numSpotMaps!==x||L.numLightProbes!==R)&&(n.sun.length=h,n.directional.length=p,n.spot.length=y,n.rectArea.length=T,n.point.length=g,n.hemi.length=b,n.sunShadow.length=v,n.sunShadowMap.length=v,n.sunShadowMatrix.length=m,n.sunShadowCascade.length=m,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=k,n.pointShadowMap.length=k,n.pointShadowMatrix.length=k,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+x-w,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,L.sunLength=h,L.directionalLength=p,L.pointLength=g,L.spotLength=y,L.rectAreaLength=T,L.hemiLength=b,L.numSunShadows=v,L.numDirectionalShadows=S,L.numPointShadows=k,L.numSpotShadows=A,L.numSpotMaps=x,L.numLightProbes=R,n.version=oM++)}function l(c,d){let f=0,u=0,h=0,v=0,m=0,p=0;const g=d.matrixWorldInverse;for(let y=0,T=c.length;y<T;y++){const b=c[y];if(b.isSunLight){const S=n.sun[f];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(g),f++}else if(b.isDirectionalLight){const S=n.directional[u];S.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(a),S.direction.transformDirection(g),u++}else if(b.isSpotLight){const S=n.spot[v];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(a),S.direction.transformDirection(g),v++}else if(b.isRectAreaLight){const S=n.rectArea[m];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(g),r.identity(),s.copy(b.matrixWorld),s.premultiply(g),r.extractRotation(s),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(r),S.halfHeight.applyMatrix4(r),m++}else if(b.isPointLight){const S=n.point[h];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(g),h++}else if(b.isHemisphereLight){const S=n.hemi[p];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(g),p++}}}return{setup:o,setupView:l,state:n}}function zp(i){const e=new cM(i),t=[],n=[],a=[];function s(u){f.camera=u,t.length=0,n.length=0,a.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function l(u){a.push(u)}function c(){e.setup(t)}function d(u){e.setupView(t,u)}const f={lightsArray:t,shadowsArray:n,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:c,setupLightsView:d,pushLight:r,pushShadow:o,pushLightProbeGrid:l}}function dM(i){let e=new WeakMap;function t(a,s=0){const r=e.get(a);let o;return r===void 0?(o=new zp(i),e.set(a,[o])):s>=r.length?(o=new zp(i),r.push(o)):o=r[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const uM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fM=`uniform sampler2D shadow_pass;
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
}`,hM=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],pM=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],Up=new wt,$r=new X,Rd=new X;function mM(i,e,t){let n=new Nf;const a=new st,s=new st,r=new Dt,o=new yb,l=new bb,c={},d=t.maxTextureSize,f={[Es]:zn,[zn]:Es,[ki]:ki},u=new qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:uM,fragmentShader:fM}),h=u.clone();h.defines.HORIZONTAL_PASS=1;const v=new Ti;v.setAttribute("position",new la(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new ii(v,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rl;let g=this.type;this.render=function(k,A,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||k.length===0)return;this.type===iy&&(He("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Rl);const w=i.getRenderTarget(),R=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),z=i.state;z.setBlending(ra),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const F=g!==this.type;F&&A.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach($=>$.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,$=k.length;C<$;C++){const D=k[C],P=D.shadow;if(P===void 0){He("WebGLShadowMap:",D,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;a.copy(P.mapSize);const Z=P.getFrameExtents();a.multiply(Z),s.copy(P.mapSize),(a.x>d||a.y>d)&&(a.x>d&&(s.x=Math.floor(d/Z.x),a.x=s.x*Z.x,P.mapSize.x=s.x),a.y>d&&(s.y=Math.floor(d/Z.y),a.y=s.y*Z.y,P.mapSize.y=s.y));const G=i.state.buffers.depth.getReversed();if(P.camera._reversedDepth=G,P.map===null||F===!0){if(P.map!==null&&(P.map.depthTexture!==null&&(P.map.depthTexture.dispose(),P.map.depthTexture=null),P.map.dispose()),this.type===Wr){if(D.isPointLight){He("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}P.map=new wi(a.x,a.y,{format:Ts,type:Vi,minFilter:sn,magFilter:sn,generateMipmaps:!1}),P.map.texture.name=D.name+".shadowMap",P.map.depthTexture=new Eo(a.x,a.y,Ni),P.map.depthTexture.name=D.name+".shadowMapDepth",P.map.depthTexture.format=fa,P.map.depthTexture.compareFunction=null,P.map.depthTexture.minFilter=Xt,P.map.depthTexture.magFilter=Xt}else D.isPointLight?(P.map=new cv(a.x),P.map.depthTexture=new hb(a.x,Gi)):(P.map=new wi(a.x,a.y),P.map.depthTexture=new Eo(a.x,a.y,Gi)),P.map.depthTexture.name=D.name+".shadowMap",P.map.depthTexture.format=fa,this.type===Rl?(P.map.depthTexture.compareFunction=G?Df:Pf,P.map.depthTexture.minFilter=sn,P.map.depthTexture.magFilter=sn):(P.map.depthTexture.compareFunction=null,P.map.depthTexture.minFilter=Xt,P.map.depthTexture.magFilter=Xt);P.camera.updateProjectionMatrix()}P.map.isWebGLCubeRenderTarget!==!0&&(P.map.width!==a.x||P.map.height!==a.y)&&P.map.setSize(a.x,a.y);const ee=P.map.isWebGLCubeRenderTarget?6:P.getViewportCount();D.isPointLight!==!0&&P.updateMatrices(D,x);for(let ae=0;ae<ee;ae++){const ue=P.getCamera(ae);if(D.isPointLight){const ke=P.camera,Ne=P.matrix,Ie=D.distance||ke.far;Ie!==ke.far&&(ke.far=Ie,ke.updateProjectionMatrix()),$r.setFromMatrixPosition(D.matrixWorld),ke.position.copy($r),Rd.copy(ke.position),Rd.add(hM[ae]),ke.up.copy(pM[ae]),ke.lookAt(Rd),ke.updateMatrixWorld(),Ne.makeTranslation(-$r.x,-$r.y,-$r.z),Up.multiplyMatrices(ke.projectionMatrix,ke.matrixWorldInverse),P._frustum.setFromProjectionMatrix(Up,ke.coordinateSystem,ke.reversedDepth)}if(P.map.isWebGLCubeRenderTarget)i.setRenderTarget(P.map,ae),i.clear();else{ae===0&&(i.setRenderTarget(P.map),i.clear());const ke=P.getViewport(ae);r.set(s.x*ke.x,s.y*ke.y,s.x*ke.z,s.y*ke.w),z.viewport(r)}n=P.getFrustum(ae),b(A,x,ue,D,this.type)}P.isPointLightShadow!==!0&&this.type===Wr&&y(P,x),P.needsUpdate=!1}g=this.type,p.needsUpdate=!1,i.setRenderTarget(w,R,L)};function y(k,A){const x=e.update(m);u.defines.VSM_SAMPLES!==k.blurSamples&&(u.defines.VSM_SAMPLES=k.blurSamples,h.defines.VSM_SAMPLES=k.blurSamples,u.needsUpdate=!0,h.needsUpdate=!0),k.mapPass===null?k.mapPass=new wi(a.x,a.y,{format:Ts,type:Vi}):(k.mapPass.width!==k.map.width||k.mapPass.height!==k.map.height)&&k.mapPass.setSize(k.map.width,k.map.height),u.uniforms.shadow_pass.value=k.map.depthTexture,u.uniforms.resolution.value.set(k.map.width,k.map.height),u.uniforms.radius.value=k.radius,i.setRenderTarget(k.mapPass),i.clear(),i.renderBufferDirect(A,null,x,u,m,null),h.uniforms.shadow_pass.value=k.mapPass.texture,h.uniforms.resolution.value.set(k.map.width,k.map.height),h.uniforms.radius.value=k.radius,i.setRenderTarget(k.map),i.clear(),i.renderBufferDirect(A,null,x,h,m,null)}function T(k,A,x,w){let R=null;const L=x.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(L!==void 0)R=L;else if(R=x.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const z=R.uuid,F=A.uuid;let C=c[z];C===void 0&&(C={},c[z]=C);let $=C[F];$===void 0&&($=R.clone(),C[F]=$,A.addEventListener("dispose",S)),R=$}if(R.visible=A.visible,R.wireframe=A.wireframe,w===Wr?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:f[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const z=i.properties.get(R);z.light=x}return R}function b(k,A,x,w,R){if(k.visible===!1)return;if(k.layers.test(A.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&R===Wr)&&(!k.frustumCulled||k.intersectsFrustum(n))){k.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,k.matrixWorld);const F=e.update(k),C=k.material;if(Array.isArray(C)){const $=F.groups;for(let D=0,P=$.length;D<P;D++){const Z=$[D],G=C[Z.materialIndex];if(G&&G.visible){const ee=T(k,G,w,R);k.onBeforeShadow(i,k,A,x,F,ee,Z),i.renderBufferDirect(x,null,F,ee,k,Z),k.onAfterShadow(i,k,A,x,F,ee,Z)}}}else if(C.visible){const $=T(k,C,w,R);k.onBeforeShadow(i,k,A,x,F,$,null),i.renderBufferDirect(x,null,F,$,k,null),k.onAfterShadow(i,k,A,x,F,$,null)}}const z=k.children;for(let F=0,C=z.length;F<C;F++)b(z[F],A,x,w,R)}function S(k){k.target.removeEventListener("dispose",S);for(const x in c){const w=c[x],R=k.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}function gM(i,e){function t(){let U=!1;const me=new Dt;let oe=null;const ge=new Dt(0,0,0,0);return{setMask:function(Se){oe!==Se&&!U&&(i.colorMask(Se,Se,Se,Se),oe=Se)},setLocked:function(Se){U=Se},setClear:function(Se,le,ze,Le,St){St===!0&&(Se*=Le,le*=Le,ze*=Le),me.set(Se,le,ze,Le),ge.equals(me)===!1&&(i.clearColor(Se,le,ze,Le),ge.copy(me))},reset:function(){U=!1,oe=null,ge.set(-1,0,0,0)}}}function n(){let U=!1,me=!1,oe=null,ge=null,Se=null;return{setReversed:function(le){if(me!==le){const ze=e.get("EXT_clip_control");le?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT),me=le;const Le=Se;Se=null,this.setClear(Le)}},getReversed:function(){return me},setTest:function(le){le?re(i.DEPTH_TEST):fe(i.DEPTH_TEST)},setMask:function(le){oe!==le&&!U&&(i.depthMask(le),oe=le)},setFunc:function(le){if(me&&(le=Oy[le]),ge!==le){switch(le){case ru:i.depthFunc(i.NEVER);break;case ou:i.depthFunc(i.ALWAYS);break;case lu:i.depthFunc(i.LESS);break;case bo:i.depthFunc(i.LEQUAL);break;case cu:i.depthFunc(i.EQUAL);break;case du:i.depthFunc(i.GEQUAL);break;case uu:i.depthFunc(i.GREATER);break;case fu:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ge=le}},setLocked:function(le){U=le},setClear:function(le){Se!==le&&(Se=le,me&&(le=1-le),i.clearDepth(le))},reset:function(){U=!1,oe=null,ge=null,Se=null,me=!1}}}function a(){let U=!1,me=null,oe=null,ge=null,Se=null,le=null,ze=null,Le=null,St=null;return{setTest:function(ut){U||(ut?re(i.STENCIL_TEST):fe(i.STENCIL_TEST))},setMask:function(ut){me!==ut&&!U&&(i.stencilMask(ut),me=ut)},setFunc:function(ut,vi,Ai){(oe!==ut||ge!==vi||Se!==Ai)&&(i.stencilFunc(ut,vi,Ai),oe=ut,ge=vi,Se=Ai)},setOp:function(ut,vi,Ai){(le!==ut||ze!==vi||Le!==Ai)&&(i.stencilOp(ut,vi,Ai),le=ut,ze=vi,Le=Ai)},setLocked:function(ut){U=ut},setClear:function(ut){St!==ut&&(i.clearStencil(ut),St=ut)},reset:function(){U=!1,me=null,oe=null,ge=null,Se=null,le=null,ze=null,Le=null,St=null}}}const s=new t,r=new n,o=new a,l=new WeakMap,c=new WeakMap;let d={},f={},u={},h=new WeakMap,v=[],m=null,p=!1,g=null,y=null,T=null,b=null,S=null,k=null,A=null,x=new ot(0,0,0),w=0,R=!1,L=null,z=null,F=null,C=null,$=null;const D=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,Z=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(G)[1]),P=Z>=1):G.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),P=Z>=2);let ee=null,ae={};const ue=i.getParameter(i.SCISSOR_BOX),ke=i.getParameter(i.VIEWPORT),Ne=new Dt().fromArray(ue),Ie=new Dt().fromArray(ke);function $e(U,me,oe,ge){const Se=new Uint8Array(4),le=i.createTexture();i.bindTexture(U,le),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ze=0;ze<oe;ze++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(me,0,i.RGBA,1,1,ge,0,i.RGBA,i.UNSIGNED_BYTE,Se):i.texImage2D(me+ze,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Se);return le}const j={};j[i.TEXTURE_2D]=$e(i.TEXTURE_2D,i.TEXTURE_2D,1),j[i.TEXTURE_CUBE_MAP]=$e(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[i.TEXTURE_2D_ARRAY]=$e(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),j[i.TEXTURE_3D]=$e(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),re(i.DEPTH_TEST),r.setFunc(bo),Ge(!1),pt(Ih),re(i.CULL_FACE),Ye(ra);function re(U){d[U]!==!0&&(i.enable(U),d[U]=!0)}function fe(U){d[U]!==!1&&(i.disable(U),d[U]=!1)}function Ue(U,me){return u[U]!==me?(i.bindFramebuffer(U,me),u[U]=me,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=me),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=me),!0):!1}function xe(U,me){let oe=v,ge=!1;if(U){oe=h.get(me),oe===void 0&&(oe=[],h.set(me,oe));const Se=U.textures;if(oe.length!==Se.length||oe[0]!==i.COLOR_ATTACHMENT0){for(let le=0,ze=Se.length;le<ze;le++)oe[le]=i.COLOR_ATTACHMENT0+le;oe.length=Se.length,ge=!0}}else oe[0]!==i.BACK&&(oe[0]=i.BACK,ge=!0);ge&&i.drawBuffers(oe)}function Fe(U){return m!==U?(i.useProgram(U),m=U,!0):!1}const _t={[Qs]:i.FUNC_ADD,[sy]:i.FUNC_SUBTRACT,[ry]:i.FUNC_REVERSE_SUBTRACT};_t[oy]=i.MIN,_t[ly]=i.MAX;const Be={[cy]:i.ZERO,[dy]:i.ONE,[uy]:i.SRC_COLOR,[Rg]:i.SRC_ALPHA,[vy]:i.SRC_ALPHA_SATURATE,[my]:i.DST_COLOR,[hy]:i.DST_ALPHA,[fy]:i.ONE_MINUS_SRC_COLOR,[Lg]:i.ONE_MINUS_SRC_ALPHA,[gy]:i.ONE_MINUS_DST_COLOR,[py]:i.ONE_MINUS_DST_ALPHA,[_y]:i.CONSTANT_COLOR,[yy]:i.ONE_MINUS_CONSTANT_COLOR,[by]:i.CONSTANT_ALPHA,[xy]:i.ONE_MINUS_CONSTANT_ALPHA};function Ye(U,me,oe,ge,Se,le,ze,Le,St,ut){if(U===ra){p===!0&&(fe(i.BLEND),p=!1);return}if(p===!1&&(re(i.BLEND),p=!0),U!==ay){if(U!==g||ut!==R){if((y!==Qs||S!==Qs)&&(i.blendEquation(i.FUNC_ADD),y=Qs,S=Qs),ut)switch(U){case so:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zh:i.blendFunc(i.ONE,i.ONE);break;case Uh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Nh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ct("WebGLState: Invalid blending: ",U);break}else switch(U){case so:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zh:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Uh:ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Nh:ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ct("WebGLState: Invalid blending: ",U);break}T=null,b=null,k=null,A=null,x.set(0,0,0),w=0,g=U,R=ut}return}Se=Se||me,le=le||oe,ze=ze||ge,(me!==y||Se!==S)&&(i.blendEquationSeparate(_t[me],_t[Se]),y=me,S=Se),(oe!==T||ge!==b||le!==k||ze!==A)&&(i.blendFuncSeparate(Be[oe],Be[ge],Be[le],Be[ze]),T=oe,b=ge,k=le,A=ze),(Le.equals(x)===!1||St!==w)&&(i.blendColor(Le.r,Le.g,Le.b,St),x.copy(Le),w=St),g=U,R=!1}function rt(U,me){U.side===ki?fe(i.CULL_FACE):re(i.CULL_FACE);let oe=U.side===zn;me&&(oe=!oe),Ge(oe),U.blending===so&&U.transparent===!1?Ye(ra):Ye(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),r.setFunc(U.depthFunc),r.setTest(U.depthTest),r.setMask(U.depthWrite),s.setMask(U.colorWrite);const ge=U.stencilWrite;o.setTest(ge),ge&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),qt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?re(i.SAMPLE_ALPHA_TO_COVERAGE):fe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(U){L!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),L=U)}function pt(U){U!==ty?(re(i.CULL_FACE),U!==z&&(U===Ih?i.cullFace(i.BACK):U===ny?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):fe(i.CULL_FACE),z=U}function zt(U){U!==F&&(P&&i.lineWidth(U),F=U)}function qt(U,me,oe){U?(re(i.POLYGON_OFFSET_FILL),(C!==me||$!==oe)&&(C=me,$=oe,r.getReversed()&&(me=-me),i.polygonOffset(me,oe))):fe(i.POLYGON_OFFSET_FILL)}function dt(U){U?re(i.SCISSOR_TEST):fe(i.SCISSOR_TEST)}function Ut(U){U===void 0&&(U=i.TEXTURE0+D-1),ee!==U&&(i.activeTexture(U),ee=U)}function N(U,me,oe){oe===void 0&&(ee===null?oe=i.TEXTURE0+D-1:oe=ee);let ge=ae[oe];ge===void 0&&(ge={type:void 0,texture:void 0},ae[oe]=ge),(ge.type!==U||ge.texture!==me)&&(ee!==oe&&(i.activeTexture(oe),ee=oe),i.bindTexture(U,me||j[U]),ge.type=U,ge.texture=me)}function Wt(){const U=ae[ee];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function B(){try{i.compressedTexImage2D(...arguments)}catch(U){ct("WebGLState:",U)}}function E(){try{i.compressedTexImage3D(...arguments)}catch(U){ct("WebGLState:",U)}}function _(){try{i.texSubImage2D(...arguments)}catch(U){ct("WebGLState:",U)}}function O(){try{i.texSubImage3D(...arguments)}catch(U){ct("WebGLState:",U)}}function V(){try{i.compressedTexSubImage2D(...arguments)}catch(U){ct("WebGLState:",U)}}function Q(){try{i.compressedTexSubImage3D(...arguments)}catch(U){ct("WebGLState:",U)}}function ce(){try{i.texStorage2D(...arguments)}catch(U){ct("WebGLState:",U)}}function de(){try{i.texStorage3D(...arguments)}catch(U){ct("WebGLState:",U)}}function ne(){try{i.texImage2D(...arguments)}catch(U){ct("WebGLState:",U)}}function se(){try{i.texImage3D(...arguments)}catch(U){ct("WebGLState:",U)}}function he(U){return f[U]!==void 0?f[U]:i.getParameter(U)}function Pe(U,me){f[U]!==me&&(i.pixelStorei(U,me),f[U]=me)}function ve(U){Ne.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),Ne.copy(U))}function pe(U){Ie.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),Ie.copy(U))}function De(U,me){let oe=c.get(me);oe===void 0&&(oe=new WeakMap,c.set(me,oe));let ge=oe.get(U);ge===void 0&&(ge=i.getUniformBlockIndex(me,U.name),oe.set(U,ge))}function Oe(U,me){const ge=c.get(me).get(U);l.get(me)!==ge&&(i.uniformBlockBinding(me,ge,U.__bindingPointIndex),l.set(me,ge))}function Xe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},f={},ee=null,ae={},u={},h=new WeakMap,v=[],m=null,p=!1,g=null,y=null,T=null,b=null,S=null,k=null,A=null,x=new ot(0,0,0),w=0,R=!1,L=null,z=null,F=null,C=null,$=null,Ne.set(0,0,i.canvas.width,i.canvas.height),Ie.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:re,disable:fe,bindFramebuffer:Ue,drawBuffers:xe,useProgram:Fe,setBlending:Ye,setMaterial:rt,setFlipSided:Ge,setCullFace:pt,setLineWidth:zt,setPolygonOffset:qt,setScissorTest:dt,activeTexture:Ut,bindTexture:N,unbindTexture:Wt,compressedTexImage2D:B,compressedTexImage3D:E,texImage2D:ne,texImage3D:se,pixelStorei:Pe,getParameter:he,updateUBOMapping:De,uniformBlockBinding:Oe,texStorage2D:ce,texStorage3D:de,texSubImage2D:_,texSubImage3D:O,compressedTexSubImage2D:V,compressedTexSubImage3D:Q,scissor:ve,viewport:pe,reset:Xe}}function vM(i,e,t,n,a,s,r){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new st,d=new WeakMap,f=new Set;let u;const h=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(E,_){return v?new OffscreenCanvas(E,_):Mo("canvas")}function p(E,_,O){let V=1;const Q=B(E);if((Q.width>O||Q.height>O)&&(V=O/Math.max(Q.width,Q.height)),V<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const ce=Math.floor(V*Q.width),de=Math.floor(V*Q.height);u===void 0&&(u=m(ce,de));const ne=_?m(ce,de):u;return ne.width=ce,ne.height=de,ne.getContext("2d").drawImage(E,0,0,ce,de),He("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+ce+"x"+de+")."),ne}else return"data"in E&&He("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),E;return E}function g(E){return E.generateMipmaps}function y(E){i.generateMipmap(E)}function T(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(E,_,O,V,Q,ce=!1){if(E!==null){if(i[E]!==void 0)return i[E];He("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let de;V&&(de=e.get("EXT_texture_norm16"),de||He("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ne=_;if(_===i.RED&&(O===i.FLOAT&&(ne=i.R32F),O===i.HALF_FLOAT&&(ne=i.R16F),O===i.UNSIGNED_BYTE&&(ne=i.R8),O===i.UNSIGNED_SHORT&&de&&(ne=de.R16_EXT),O===i.SHORT&&de&&(ne=de.R16_SNORM_EXT)),_===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(ne=i.R8UI),O===i.UNSIGNED_SHORT&&(ne=i.R16UI),O===i.UNSIGNED_INT&&(ne=i.R32UI),O===i.BYTE&&(ne=i.R8I),O===i.SHORT&&(ne=i.R16I),O===i.INT&&(ne=i.R32I)),_===i.RG&&(O===i.FLOAT&&(ne=i.RG32F),O===i.HALF_FLOAT&&(ne=i.RG16F),O===i.UNSIGNED_BYTE&&(ne=i.RG8),O===i.UNSIGNED_SHORT&&de&&(ne=de.RG16_EXT),O===i.SHORT&&de&&(ne=de.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(ne=i.RG8UI),O===i.UNSIGNED_SHORT&&(ne=i.RG16UI),O===i.UNSIGNED_INT&&(ne=i.RG32UI),O===i.BYTE&&(ne=i.RG8I),O===i.SHORT&&(ne=i.RG16I),O===i.INT&&(ne=i.RG32I)),_===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(ne=i.RGB8UI),O===i.UNSIGNED_SHORT&&(ne=i.RGB16UI),O===i.UNSIGNED_INT&&(ne=i.RGB32UI),O===i.BYTE&&(ne=i.RGB8I),O===i.SHORT&&(ne=i.RGB16I),O===i.INT&&(ne=i.RGB32I)),_===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(ne=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(ne=i.RGBA16UI),O===i.UNSIGNED_INT&&(ne=i.RGBA32UI),O===i.BYTE&&(ne=i.RGBA8I),O===i.SHORT&&(ne=i.RGBA16I),O===i.INT&&(ne=i.RGBA32I)),_===i.RGB&&(O===i.UNSIGNED_SHORT&&de&&(ne=de.RGB16_EXT),O===i.SHORT&&de&&(ne=de.RGB16_SNORM_EXT),O===i.UNSIGNED_INT_5_9_9_9_REV&&(ne=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(ne=i.R11F_G11F_B10F)),_===i.RGBA){const se=ce?Ql:tt.getTransfer(Q);O===i.FLOAT&&(ne=i.RGBA32F),O===i.HALF_FLOAT&&(ne=i.RGBA16F),O===i.UNSIGNED_BYTE&&(ne=se===mt?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT&&de&&(ne=de.RGBA16_EXT),O===i.SHORT&&de&&(ne=de.RGBA16_SNORM_EXT),O===i.UNSIGNED_SHORT_4_4_4_4&&(ne=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(ne=i.RGB5_A1)}return(ne===i.R16F||ne===i.R32F||ne===i.RG16F||ne===i.RG32F||ne===i.RGBA16F||ne===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function S(E,_){let O;return E?_===null||_===Gi||_===So?O=i.DEPTH24_STENCIL8:_===Ni?O=i.DEPTH32F_STENCIL8:_===xo&&(O=i.DEPTH24_STENCIL8,He("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Gi||_===So?O=i.DEPTH_COMPONENT24:_===Ni?O=i.DEPTH_COMPONENT32F:_===xo&&(O=i.DEPTH_COMPONENT16),O}function k(E,_){return g(E)===!0||E.isFramebufferTexture&&E.minFilter!==Xt&&E.minFilter!==sn?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function A(E){const _=E.target;_.removeEventListener("dispose",A),w(_),_.isVideoTexture&&d.delete(_),_.isHTMLTexture&&f.delete(_)}function x(E){const _=E.target;_.removeEventListener("dispose",x),L(_)}function w(E){const _=n.get(E);if(_.__webglInit===void 0)return;const O=E.source,V=h.get(O);if(V){const Q=V[_.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&R(E),Object.keys(V).length===0&&h.delete(O)}n.remove(E)}function R(E){const _=n.get(E);i.deleteTexture(_.__webglTexture);const O=E.source,V=h.get(O);delete V[_.__cacheKey],r.memory.textures--}function L(E){const _=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(_.__webglFramebuffer[V]))for(let Q=0;Q<_.__webglFramebuffer[V].length;Q++)i.deleteFramebuffer(_.__webglFramebuffer[V][Q]);else i.deleteFramebuffer(_.__webglFramebuffer[V]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[V])}else{if(Array.isArray(_.__webglFramebuffer))for(let V=0;V<_.__webglFramebuffer.length;V++)i.deleteFramebuffer(_.__webglFramebuffer[V]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let V=0;V<_.__webglColorRenderbuffer.length;V++)_.__webglColorRenderbuffer[V]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[V]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const O=E.textures;for(let V=0,Q=O.length;V<Q;V++){const ce=n.get(O[V]);ce.__webglTexture&&(i.deleteTexture(ce.__webglTexture),r.memory.textures--),n.remove(O[V])}n.remove(E)}let z=0;function F(){z=0}function C(){return z}function $(E){z=E}function D(){const E=z;return E>=a.maxTextures&&He("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+a.maxTextures),z+=1,E}function P(E){const _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function Z(E,_){const O=n.get(E);if(E.isVideoTexture&&N(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&O.__version!==E.version){const V=E.image;if(V===null)He("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)He("WebGLRenderer: Texture marked for update but image is incomplete");else{fe(O,E,_);return}}else E.isExternalTexture&&(O.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+_)}function G(E,_){const O=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){fe(O,E,_);return}else E.isExternalTexture&&(O.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+_)}function ee(E,_){const O=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){fe(O,E,_);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+_)}function ae(E,_){const O=n.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&O.__version!==E.version){Ue(O,E,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+_)}const ue={[hu]:i.REPEAT,[aa]:i.CLAMP_TO_EDGE,[pu]:i.MIRRORED_REPEAT},ke={[Xt]:i.NEAREST,[My]:i.NEAREST_MIPMAP_NEAREST,[Xo]:i.NEAREST_MIPMAP_LINEAR,[sn]:i.LINEAR,[jc]:i.LINEAR_MIPMAP_NEAREST,[Ua]:i.LINEAR_MIPMAP_LINEAR},Ne={[Ay]:i.NEVER,[Dy]:i.ALWAYS,[Ry]:i.LESS,[Pf]:i.LEQUAL,[Ly]:i.EQUAL,[Df]:i.GEQUAL,[Cy]:i.GREATER,[Py]:i.NOTEQUAL};function Ie(E,_){if(_.type===Ni&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===sn||_.magFilter===jc||_.magFilter===Xo||_.magFilter===Ua||_.minFilter===sn||_.minFilter===jc||_.minFilter===Xo||_.minFilter===Ua)&&He("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,ue[_.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,ue[_.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,ue[_.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,ke[_.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,ke[_.minFilter]),_.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,Ne[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Xt||_.minFilter!==Xo&&_.minFilter!==Ua||_.type===Ni&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,a.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function $e(E,_){let O=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",A));const V=_.source;let Q=h.get(V);Q===void 0&&(Q={},h.set(V,Q));const ce=P(_);if(ce!==E.__cacheKey){Q[ce]===void 0&&(Q[ce]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,O=!0),Q[ce].usedTimes++;const de=Q[E.__cacheKey];de!==void 0&&(Q[E.__cacheKey].usedTimes--,de.usedTimes===0&&R(_)),E.__cacheKey=ce,E.__webglTexture=Q[ce].texture}return O}function j(E,_,O){return Math.floor(Math.floor(E/O)/_)}function re(E,_,O,V){const ce=E.updateRanges;if(ce.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,O,V,_.data);else{ce.sort((Pe,ve)=>Pe.start-ve.start);let de=0;for(let Pe=1;Pe<ce.length;Pe++){const ve=ce[de],pe=ce[Pe],De=ve.start+ve.count,Oe=j(pe.start,_.width,4),Xe=j(ve.start,_.width,4);pe.start<=De+1&&Oe===Xe&&j(pe.start+pe.count-1,_.width,4)===Oe?ve.count=Math.max(ve.count,pe.start+pe.count-ve.start):(++de,ce[de]=pe)}ce.length=de+1;const ne=t.getParameter(i.UNPACK_ROW_LENGTH),se=t.getParameter(i.UNPACK_SKIP_PIXELS),he=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let Pe=0,ve=ce.length;Pe<ve;Pe++){const pe=ce[Pe],De=Math.floor(pe.start/4),Oe=Math.ceil(pe.count/4),Xe=De%_.width,U=Math.floor(De/_.width),me=Oe,oe=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Xe),t.pixelStorei(i.UNPACK_SKIP_ROWS,U),t.texSubImage2D(i.TEXTURE_2D,0,Xe,U,me,oe,O,V,_.data)}E.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ne),t.pixelStorei(i.UNPACK_SKIP_PIXELS,se),t.pixelStorei(i.UNPACK_SKIP_ROWS,he)}}function fe(E,_,O){let V=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(V=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(V=i.TEXTURE_3D);const Q=$e(E,_),ce=_.source;t.bindTexture(V,E.__webglTexture,i.TEXTURE0+O);const de=n.get(ce);if(ce.version!==de.__version||Q===!0){if(t.activeTexture(i.TEXTURE0+O),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const oe=tt.getPrimaries(tt.workingColorSpace),ge=_.colorSpace===Ca?null:tt.getPrimaries(_.colorSpace),Se=_.colorSpace===Ca||oe===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se)}t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let se=p(_.image,!1,a.maxTextureSize);se=Wt(_,se);const he=s.convert(_.format,_.colorSpace),Pe=s.convert(_.type);let ve=b(_.internalFormat,he,Pe,_.normalized,_.colorSpace,_.isVideoTexture);Ie(V,_);let pe;const De=_.mipmaps,Oe=_.isVideoTexture!==!0,Xe=de.__version===void 0||Q===!0,U=ce.dataReady,me=k(_,se);if(_.isDepthTexture)ve=S(_.format===vs,_.type),Xe&&(Oe?t.texStorage2D(i.TEXTURE_2D,1,ve,se.width,se.height):t.texImage2D(i.TEXTURE_2D,0,ve,se.width,se.height,0,he,Pe,null));else if(_.isDataTexture)if(De.length>0){Oe&&Xe&&t.texStorage2D(i.TEXTURE_2D,me,ve,De[0].width,De[0].height);for(let oe=0,ge=De.length;oe<ge;oe++)pe=De[oe],Oe?U&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,pe.width,pe.height,he,Pe,pe.data):t.texImage2D(i.TEXTURE_2D,oe,ve,pe.width,pe.height,0,he,Pe,pe.data);_.generateMipmaps=!1}else Oe?(Xe&&t.texStorage2D(i.TEXTURE_2D,me,ve,se.width,se.height),U&&re(_,se,he,Pe)):t.texImage2D(i.TEXTURE_2D,0,ve,se.width,se.height,0,he,Pe,se.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Oe&&Xe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,ve,De[0].width,De[0].height,se.depth);for(let oe=0,ge=De.length;oe<ge;oe++)if(pe=De[oe],_.format!==Ei)if(he!==null)if(Oe){if(U)if(_.layerUpdates.size>0){const Se=pp(pe.width,pe.height,_.format,_.type);for(const le of _.layerUpdates){const ze=pe.data.subarray(le*Se/pe.data.BYTES_PER_ELEMENT,(le+1)*Se/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,le,pe.width,pe.height,1,he,ze)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,pe.width,pe.height,se.depth,he,pe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,oe,ve,pe.width,pe.height,se.depth,0,pe.data,0,0);else He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?U&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,pe.width,pe.height,se.depth,he,Pe,pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,oe,ve,pe.width,pe.height,se.depth,0,he,Pe,pe.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Oe&&Xe&&t.texStorage2D(i.TEXTURE_2D,me,ve,De[0].width,De[0].height);for(let oe=0,ge=De.length;oe<ge;oe++)pe=De[oe],_.format!==Ei?he!==null?Oe?U&&t.compressedTexSubImage2D(i.TEXTURE_2D,oe,0,0,pe.width,pe.height,he,pe.data):t.compressedTexImage2D(i.TEXTURE_2D,oe,ve,pe.width,pe.height,0,pe.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?U&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,pe.width,pe.height,he,Pe,pe.data):t.texImage2D(i.TEXTURE_2D,oe,ve,pe.width,pe.height,0,he,Pe,pe.data)}else if(_.isDataArrayTexture)if(Oe){if(Xe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,ve,se.width,se.height,se.depth),U)if(_.layerUpdates.size>0){const oe=pp(se.width,se.height,_.format,_.type);for(const ge of _.layerUpdates){const Se=se.data.subarray(ge*oe/se.data.BYTES_PER_ELEMENT,(ge+1)*oe/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ge,se.width,se.height,1,he,Pe,Se)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,he,Pe,se.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ve,se.width,se.height,se.depth,0,he,Pe,se.data);else if(_.isData3DTexture)Oe?(Xe&&t.texStorage3D(i.TEXTURE_3D,me,ve,se.width,se.height,se.depth),U&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,he,Pe,se.data)):t.texImage3D(i.TEXTURE_3D,0,ve,se.width,se.height,se.depth,0,he,Pe,se.data);else if(_.isFramebufferTexture){if(Xe)if(Oe)t.texStorage2D(i.TEXTURE_2D,me,ve,se.width,se.height);else{let oe=se.width,ge=se.height;for(let Se=0;Se<me;Se++)t.texImage2D(i.TEXTURE_2D,Se,ve,oe,ge,0,he,Pe,null),oe>>=1,ge>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){const oe=i.canvas;if(oe.hasAttribute("layoutsubtree")||oe.setAttribute("layoutsubtree","true"),se.parentNode!==oe){oe.appendChild(se),f.add(_),oe.onpaint=ge=>{const Se=ge.changedElements;for(const le of f)Se.includes(le.image)&&(le.needsUpdate=!0)},oe.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,se);else{const Se=i.RGBA,le=i.RGBA,ze=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Se,le,ze,se)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(De.length>0){if(Oe&&Xe){const oe=B(De[0]);t.texStorage2D(i.TEXTURE_2D,me,ve,oe.width,oe.height)}for(let oe=0,ge=De.length;oe<ge;oe++)pe=De[oe],Oe?U&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,he,Pe,pe):t.texImage2D(i.TEXTURE_2D,oe,ve,he,Pe,pe);_.generateMipmaps=!1}else if(Oe){if(Xe){const oe=B(se);t.texStorage2D(i.TEXTURE_2D,me,ve,oe.width,oe.height)}U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,he,Pe,se)}else t.texImage2D(i.TEXTURE_2D,0,ve,he,Pe,se);g(_)&&y(V),de.__version=ce.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function Ue(E,_,O){if(_.image.length!==6)return;const V=$e(E,_),Q=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+O);const ce=n.get(Q);if(Q.version!==ce.__version||V===!0){t.activeTexture(i.TEXTURE0+O);const de=tt.getPrimaries(tt.workingColorSpace),ne=_.colorSpace===Ca?null:tt.getPrimaries(_.colorSpace),se=_.colorSpace===Ca||de===ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);const he=_.isCompressedTexture||_.image[0].isCompressedTexture,Pe=_.image[0]&&_.image[0].isDataTexture,ve=[];for(let le=0;le<6;le++)!he&&!Pe?ve[le]=p(_.image[le],!0,a.maxCubemapSize):ve[le]=Pe?_.image[le].image:_.image[le],ve[le]=Wt(_,ve[le]);const pe=ve[0],De=s.convert(_.format,_.colorSpace),Oe=s.convert(_.type),Xe=b(_.internalFormat,De,Oe,_.normalized,_.colorSpace),U=_.isVideoTexture!==!0,me=ce.__version===void 0||V===!0,oe=Q.dataReady;let ge=k(_,pe);Ie(i.TEXTURE_CUBE_MAP,_);let Se;if(he){U&&me&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,Xe,pe.width,pe.height);for(let le=0;le<6;le++){Se=ve[le].mipmaps;for(let ze=0;ze<Se.length;ze++){const Le=Se[ze];_.format!==Ei?De!==null?U?oe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,ze,0,0,Le.width,Le.height,De,Le.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,ze,Xe,Le.width,Le.height,0,Le.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,ze,0,0,Le.width,Le.height,De,Oe,Le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,ze,Xe,Le.width,Le.height,0,De,Oe,Le.data)}}}else{if(Se=_.mipmaps,U&&me){Se.length>0&&ge++;const le=B(ve[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,Xe,le.width,le.height)}for(let le=0;le<6;le++)if(Pe){U?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,ve[le].width,ve[le].height,De,Oe,ve[le].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Xe,ve[le].width,ve[le].height,0,De,Oe,ve[le].data);for(let ze=0;ze<Se.length;ze++){const St=Se[ze].image[le].image;U?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,ze+1,0,0,St.width,St.height,De,Oe,St.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,ze+1,Xe,St.width,St.height,0,De,Oe,St.data)}}else{U?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,De,Oe,ve[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Xe,De,Oe,ve[le]);for(let ze=0;ze<Se.length;ze++){const Le=Se[ze];U?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,ze+1,0,0,De,Oe,Le.image[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,ze+1,Xe,De,Oe,Le.image[le])}}}g(_)&&y(i.TEXTURE_CUBE_MAP),ce.__version=Q.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function xe(E,_,O,V,Q,ce){const de=s.convert(O.format,O.colorSpace),ne=s.convert(O.type),se=b(O.internalFormat,de,ne,O.normalized,O.colorSpace),he=n.get(_),Pe=n.get(O);if(Pe.__renderTarget=_,!he.__hasExternalTextures){const ve=Math.max(1,_.width>>ce),pe=Math.max(1,_.height>>ce);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,ce,se,ve,pe,_.depth,0,de,ne,null):t.texImage2D(Q,ce,se,ve,pe,0,de,ne,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),Ut(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,V,Q,Pe.__webglTexture,0,dt(_)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,V,Q,Pe.__webglTexture,ce),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Fe(E,_,O){if(i.bindRenderbuffer(i.RENDERBUFFER,E),_.depthBuffer){const V=_.depthTexture,Q=V&&V.isDepthTexture?V.type:null,ce=S(_.stencilBuffer,Q),de=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ut(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt(_),ce,_.width,_.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,dt(_),ce,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ce,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,de,i.RENDERBUFFER,E)}else{const V=_.textures;for(let Q=0;Q<V.length;Q++){const ce=V[Q],de=s.convert(ce.format,ce.colorSpace),ne=s.convert(ce.type),se=b(ce.internalFormat,de,ne,ce.normalized,ce.colorSpace);Ut(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt(_),se,_.width,_.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,dt(_),se,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,se,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function _t(E,_,O){const V=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Q=n.get(_.depthTexture);if(Q.__renderTarget=_,(!Q.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),V){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,_.depthTexture.addEventListener("dispose",A)),Q.__webglTexture===void 0){Q.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),Ie(i.TEXTURE_CUBE_MAP,_.depthTexture);const he=s.convert(_.depthTexture.format),Pe=s.convert(_.depthTexture.type);let ve;_.depthTexture.format===fa?ve=i.DEPTH_COMPONENT24:_.depthTexture.format===vs&&(ve=i.DEPTH24_STENCIL8);for(let pe=0;pe<6;pe++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ve,_.width,_.height,0,he,Pe,null)}}else Z(_.depthTexture,0);const ce=Q.__webglTexture,de=dt(_),ne=V?i.TEXTURE_CUBE_MAP_POSITIVE_X+O:i.TEXTURE_2D,se=_.depthTexture.format===vs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===fa)Ut(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,se,ne,ce,0,de):i.framebufferTexture2D(i.FRAMEBUFFER,se,ne,ce,0);else if(_.depthTexture.format===vs)Ut(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,se,ne,ce,0,de):i.framebufferTexture2D(i.FRAMEBUFFER,se,ne,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Be(E){const _=n.get(E),O=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){const V=E.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),V){const Q=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,V.removeEventListener("dispose",Q)};V.addEventListener("dispose",Q),_.__depthDisposeCallback=Q}_.__boundDepthTexture=V}if(E.depthTexture&&!_.__autoAllocateDepthBuffer)if(O)for(let V=0;V<6;V++)_t(_.__webglFramebuffer[V],E,V);else{const V=E.texture.mipmaps;V&&V.length>0?_t(_.__webglFramebuffer[0],E,0):_t(_.__webglFramebuffer,E,0)}else if(O){_.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[V]),_.__webglDepthbuffer[V]===void 0)_.__webglDepthbuffer[V]=i.createRenderbuffer(),Fe(_.__webglDepthbuffer[V],E,!1);else{const Q=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=_.__webglDepthbuffer[V];i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,ce)}}else{const V=E.texture.mipmaps;if(V&&V.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Fe(_.__webglDepthbuffer,E,!1);else{const Q=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,ce)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ye(E,_,O){const V=n.get(E);_!==void 0&&xe(V.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Be(E)}function rt(E){const _=E.texture,O=n.get(E),V=n.get(_);E.addEventListener("dispose",x);const Q=E.textures,ce=E.isWebGLCubeRenderTarget===!0,de=Q.length>1;if(de||(V.__webglTexture===void 0&&(V.__webglTexture=i.createTexture()),V.__version=_.version,r.memory.textures++),ce){O.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[ne]=[];for(let se=0;se<_.mipmaps.length;se++)O.__webglFramebuffer[ne][se]=i.createFramebuffer()}else O.__webglFramebuffer[ne]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let ne=0;ne<_.mipmaps.length;ne++)O.__webglFramebuffer[ne]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(de)for(let ne=0,se=Q.length;ne<se;ne++){const he=n.get(Q[ne]);he.__webglTexture===void 0&&(he.__webglTexture=i.createTexture(),r.memory.textures++)}if(E.samples>0&&Ut(E)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ne=0;ne<Q.length;ne++){const se=Q[ne];O.__webglColorRenderbuffer[ne]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[ne]);const he=s.convert(se.format,se.colorSpace),Pe=s.convert(se.type),ve=b(se.internalFormat,he,Pe,se.normalized,se.colorSpace,E.isXRRenderTarget===!0),pe=dt(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,pe,ve,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ne,i.RENDERBUFFER,O.__webglColorRenderbuffer[ne])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),Fe(O.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ce){t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture),Ie(i.TEXTURE_CUBE_MAP,_);for(let ne=0;ne<6;ne++)if(_.mipmaps&&_.mipmaps.length>0)for(let se=0;se<_.mipmaps.length;se++)xe(O.__webglFramebuffer[ne][se],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,se);else xe(O.__webglFramebuffer[ne],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);g(_)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){for(let ne=0,se=Q.length;ne<se;ne++){const he=Q[ne],Pe=n.get(he);let ve=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ve=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ve,Pe.__webglTexture),Ie(ve,he),xe(O.__webglFramebuffer,E,he,i.COLOR_ATTACHMENT0+ne,ve,0),g(he)&&y(ve)}t.unbindTexture()}else{let ne=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ne=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ne,V.__webglTexture),Ie(ne,_),_.mipmaps&&_.mipmaps.length>0)for(let se=0;se<_.mipmaps.length;se++)xe(O.__webglFramebuffer[se],E,_,i.COLOR_ATTACHMENT0,ne,se);else xe(O.__webglFramebuffer,E,_,i.COLOR_ATTACHMENT0,ne,0);g(_)&&y(ne),t.unbindTexture()}E.depthBuffer&&Be(E)}function Ge(E){const _=E.textures;for(let O=0,V=_.length;O<V;O++){const Q=_[O];if(g(Q)){const ce=T(E),de=n.get(Q).__webglTexture;t.bindTexture(ce,de),y(ce),t.unbindTexture()}}}const pt=[],zt=[];function qt(E){if(E.samples>0){if(Ut(E)===!1){const _=E.textures,O=E.width,V=E.height;let Q=i.COLOR_BUFFER_BIT;const ce=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=n.get(E),ne=_.length>1;if(ne)for(let he=0;he<_.length;he++)t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer);const se=E.texture.mipmaps;se&&se.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let he=0;he<_.length;he++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),ne){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,de.__webglColorRenderbuffer[he]);const Pe=n.get(_[he]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Pe,0)}i.blitFramebuffer(0,0,O,V,0,0,O,V,Q,i.NEAREST),l===!0&&(pt.length=0,zt.length=0,pt.push(i.COLOR_ATTACHMENT0+he),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&(pt.push(ce),zt.push(ce),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,zt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,pt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ne)for(let he=0;he<_.length;he++){t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,de.__webglColorRenderbuffer[he]);const Pe=n.get(_[he]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,Pe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&l){const _=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function dt(E){return Math.min(a.maxSamples,E.samples)}function Ut(E){const _=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function N(E){const _=r.render.frame;d.get(E)!==_&&(d.set(E,_),E.update())}function Wt(E,_){const O=E.colorSpace,V=E.format,Q=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||O!==jl&&O!==Ca&&(tt.getTransfer(O)===mt?(V!==Ei||Q!==Yn)&&He("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ct("WebGLTextures: Unsupported texture color space:",O)),_}function B(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=F,this.getTextureUnits=C,this.setTextureUnits=$,this.setTexture2D=Z,this.setTexture2DArray=G,this.setTexture3D=ee,this.setTextureCube=ae,this.rebindTextures=Ye,this.setupRenderTarget=rt,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=qt,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Ut,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function _M(i,e){function t(n,a=Ca){let s;const r=tt.getTransfer(a);if(n===Yn)return i.UNSIGNED_BYTE;if(n===Tf)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Af)return i.UNSIGNED_SHORT_5_5_5_1;if(n===$g)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Hg)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Fg)return i.BYTE;if(n===Bg)return i.SHORT;if(n===xo)return i.UNSIGNED_SHORT;if(n===wf)return i.INT;if(n===Gi)return i.UNSIGNED_INT;if(n===Ni)return i.FLOAT;if(n===Vi)return i.HALF_FLOAT;if(n===Gg)return i.ALPHA;if(n===Vg)return i.RGB;if(n===Ei)return i.RGBA;if(n===fa)return i.DEPTH_COMPONENT;if(n===vs)return i.DEPTH_STENCIL;if(n===qg)return i.RED;if(n===Rf)return i.RED_INTEGER;if(n===Ts)return i.RG;if(n===Lf)return i.RG_INTEGER;if(n===Cf)return i.RGBA_INTEGER;if(n===Ll||n===Cl||n===Pl||n===Dl)if(r===mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ll)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Cl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Pl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Dl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ll)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Cl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Pl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Dl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===mu||n===gu||n===vu||n===_u)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===mu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===gu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===vu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===_u)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===yu||n===bu||n===xu||n===Su||n===ku||n===Zl||n===Mu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===yu||n===bu)return r===mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===xu)return r===mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Su)return s.COMPRESSED_R11_EAC;if(n===ku)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Zl)return s.COMPRESSED_RG11_EAC;if(n===Mu)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Eu||n===wu||n===Tu||n===Au||n===Ru||n===Lu||n===Cu||n===Pu||n===Du||n===Iu||n===zu||n===Uu||n===Nu||n===Ou)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Eu)return r===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===wu)return r===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Tu)return r===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Au)return r===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ru)return r===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Lu)return r===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Cu)return r===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Pu)return r===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Du)return r===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Iu)return r===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===zu)return r===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Uu)return r===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Nu)return r===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ou)return r===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Fu||n===Bu||n===$u)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Fu)return r===mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Bu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===$u)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Hu||n===Gu||n===Jl||n===Vu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Hu)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Gu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Jl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Vu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===So?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const yM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bM=`
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

}`;class xM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new tv(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new qi({vertexShader:yM,fragmentShader:bM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ii(new Mc(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class SM extends Ls{constructor(e,t){super();const n=this;let a=null,s=1,r=null,o="local-floor",l=1,c=null,d=null,f=null,u=null,h=null,v=null;const m=typeof XRWebGLBinding<"u",p=new xM,g={},y=t.getContextAttributes();let T=null,b=null;const S=[],k=[],A=new st;let x=null,w=null;const R=new di;R.viewport=new Dt;const L=new di;L.viewport=new Dt;const z=[R,L],F=new Ab;let C=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let re=S[j];return re===void 0&&(re=new rd,S[j]=re),re.getTargetRaySpace()},this.getControllerGrip=function(j){let re=S[j];return re===void 0&&(re=new rd,S[j]=re),re.getGripSpace()},this.getHand=function(j){let re=S[j];return re===void 0&&(re=new rd,S[j]=re),re.getHandSpace()};function D(j){const re=k.indexOf(j.inputSource);if(re===-1)return;const fe=S[re];fe!==void 0&&(fe.update(j.inputSource,j.frame,c||r),fe.dispatchEvent({type:j.type,data:j.inputSource}))}function P(){a.removeEventListener("select",D),a.removeEventListener("selectstart",D),a.removeEventListener("selectend",D),a.removeEventListener("squeeze",D),a.removeEventListener("squeezestart",D),a.removeEventListener("squeezeend",D),a.removeEventListener("end",P),a.removeEventListener("inputsourceschange",Z);for(let j=0;j<S.length;j++){const re=k[j];re!==null&&(k[j]=null,S[j].disconnect(re))}C=null,$=null,p.reset();for(const j in g)delete g[j];if(e.setRenderTarget(T),h=null,u=null,f=null,a=null,b=null,$e.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(A.width,A.height,!1),w!==null){const j=w.camera;j.fov=w.fov,j.zoom=w.zoom,j.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&He("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&He("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return u!==null?u:h},this.getBinding=function(){return f===null&&m&&(f=new XRWebGLBinding(a,t)),f},this.getFrame=function(){return v},this.getSession=function(){return a},this.setSession=async function(j){if(a=j,a!==null){if(T=e.getRenderTarget(),a.addEventListener("select",D),a.addEventListener("selectstart",D),a.addEventListener("selectend",D),a.addEventListener("squeeze",D),a.addEventListener("squeezestart",D),a.addEventListener("squeezeend",D),a.addEventListener("end",P),a.addEventListener("inputsourceschange",Z),y.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(A),m&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,Ue=null,xe=null;y.depth&&(xe=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=y.stencil?vs:fa,Ue=y.stencil?So:Gi);const Fe={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:s};f=this.getBinding(),u=f.createProjectionLayer(Fe),a.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),b=new wi(u.textureWidth,u.textureHeight,{format:Ei,type:Yn,depthTexture:new Eo(u.textureWidth,u.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const fe={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(a,t,fe),a.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),b=new wi(h.framebufferWidth,h.framebufferHeight,{format:Ei,type:Yn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await a.requestReferenceSpace(o),$e.setContext(a),$e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function Z(j){for(let re=0;re<j.removed.length;re++){const fe=j.removed[re],Ue=k.indexOf(fe);Ue>=0&&(k[Ue]=null,S[Ue].disconnect(fe))}for(let re=0;re<j.added.length;re++){const fe=j.added[re];let Ue=k.indexOf(fe);if(Ue===-1){for(let Fe=0;Fe<S.length;Fe++)if(Fe>=k.length){k.push(fe),Ue=Fe;break}else if(k[Fe]===null){k[Fe]=fe,Ue=Fe;break}if(Ue===-1)break}const xe=S[Ue];xe&&xe.connect(fe)}}const G=new X,ee=new X;function ae(j,re,fe){G.setFromMatrixPosition(re.matrixWorld),ee.setFromMatrixPosition(fe.matrixWorld);const Ue=G.distanceTo(ee),xe=re.projectionMatrix.elements,Fe=fe.projectionMatrix.elements,_t=xe[14]/(xe[10]-1),Be=xe[14]/(xe[10]+1),Ye=(xe[9]+1)/xe[5],rt=(xe[9]-1)/xe[5],Ge=(xe[8]-1)/xe[0],pt=(Fe[8]+1)/Fe[0],zt=_t*Ge,qt=_t*pt,dt=Ue/(-Ge+pt),Ut=dt*-Ge;if(re.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Ut),j.translateZ(dt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),xe[10]===-1)j.projectionMatrix.copy(re.projectionMatrix),j.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const N=_t+dt,Wt=Be+dt,B=zt-Ut,E=qt+(Ue-Ut),_=Ye*Be/Wt*N,O=rt*Be/Wt*N;j.projectionMatrix.makePerspective(B,E,_,O,N,Wt),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ue(j,re){re===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(re.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(a===null)return;let re=j.near,fe=j.far;p.texture!==null&&(p.depthNear>0&&(re=p.depthNear),p.depthFar>0&&(fe=p.depthFar)),F.near=L.near=R.near=re,F.far=L.far=R.far=fe,(C!==F.near||$!==F.far)&&(a.updateRenderState({depthNear:F.near,depthFar:F.far}),C=F.near,$=F.far),F.layers.mask=j.layers.mask|6,R.layers.mask=F.layers.mask&-5,L.layers.mask=F.layers.mask&-3;const Ue=j.parent,xe=F.cameras;ue(F,Ue);for(let Fe=0;Fe<xe.length;Fe++)ue(xe[Fe],Ue);xe.length===2?ae(F,R,L):F.projectionMatrix.copy(R.projectionMatrix),w===null&&j.isPerspectiveCamera&&(w={camera:j,fov:j.fov,zoom:j.zoom}),ke(j,F,Ue)};function ke(j,re,fe){fe===null?j.matrix.copy(re.matrixWorld):(j.matrix.copy(fe.matrixWorld),j.matrix.invert(),j.matrix.multiply(re.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(re.projectionMatrix),j.projectionMatrixInverse.copy(re.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Wu*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(u===null&&h===null))return l},this.setFoveation=function(j){l=j,u!==null&&(u.fixedFoveation=j),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=j)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(F)},this.getCameraTexture=function(j){return g[j]};let Ne=null;function Ie(j,re){if(d=re.getViewerPose(c||r),v=re,d!==null){const fe=d.views;h!==null&&(e.setRenderTargetFramebuffer(b,h.framebuffer),e.setRenderTarget(b));let Ue=!1;fe.length!==F.cameras.length&&(F.cameras.length=0,Ue=!0);for(let Be=0;Be<fe.length;Be++){const Ye=fe[Be];let rt=null;if(h!==null)rt=h.getViewport(Ye);else{const pt=f.getViewSubImage(u,Ye);rt=pt.viewport,Be===0&&(e.setRenderTargetTextures(b,pt.colorTexture,pt.depthStencilTexture),e.setRenderTarget(b))}let Ge=z[Be];Ge===void 0&&(Ge=new di,Ge.layers.enable(Be),Ge.viewport=new Dt,z[Be]=Ge),Ge.matrix.fromArray(Ye.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(Ye.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(rt.x,rt.y,rt.width,rt.height),Be===0&&(F.matrix.copy(Ge.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ue===!0&&F.cameras.push(Ge)}const xe=a.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&m){f=n.getBinding();const Be=f.getDepthInformation(fe[0]);Be&&Be.isValid&&Be.texture&&p.init(Be,a.renderState)}if(xe&&xe.includes("camera-access")&&m){e.state.unbindTexture(),f=n.getBinding();for(let Be=0;Be<fe.length;Be++){const Ye=fe[Be].camera;if(Ye){let rt=g[Ye];rt||(rt=new tv,g[Ye]=rt);const Ge=f.getCameraImage(Ye);rt.sourceTexture=Ge}}}}for(let fe=0;fe<S.length;fe++){const Ue=k[fe],xe=S[fe];Ue!==null&&xe!==void 0&&xe.update(Ue,re,c||r)}Ne&&Ne(j,re),re.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:re}),v=null}const $e=new ov;$e.setAnimationLoop(Ie),this.setAnimationLoop=function(j){Ne=j},this.dispose=function(){}}}const kM=new wt,pv=new We;pv.set(-1,0,0,0,1,0,0,0,1);function MM(i,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,nv(i)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function a(p,g,y,T,b){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?s(p,g):g.isMeshLambertMaterial?(s(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(p,g),f(p,g)):g.isMeshPhongMaterial?(s(p,g),d(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(p,g),u(p,g),g.isMeshPhysicalMaterial&&h(p,g,b)):g.isMeshMatcapMaterial?(s(p,g),v(p,g)):g.isMeshDepthMaterial?s(p,g):g.isMeshDistanceMaterial?(s(p,g),m(p,g)):g.isMeshNormalMaterial?s(p,g):g.isLineBasicMaterial?(r(p,g),g.isLineDashedMaterial&&o(p,g)):g.isPointsMaterial?l(p,g,y,T):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===zn&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===zn&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const y=e.get(g),T=y.envMap,b=y.envMapRotation;T&&(p.envMap.value=T,p.envMapRotation.value.setFromMatrix4(kM.makeRotationFromEuler(b)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(pv),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function r(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function o(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,y,T){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*y,p.scale.value=T*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function d(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function f(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function u(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function h(p,g,y){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===zn&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,g){g.matcap&&(p.matcap.value=g.matcap)}function m(p,g){const y=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:a}}function EM(i,e,t,n){let a={},s={},r=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,S){const k=S.program;n.uniformBlockBinding(b,k)}function c(b,S){let k=a[b.id];k===void 0&&(p(b),k=d(b),a[b.id]=k,b.addEventListener("dispose",y));const A=S.program;n.updateUBOMapping(b,A);const x=e.render.frame;s[b.id]!==x&&(u(b),s[b.id]=x)}function d(b){const S=f();b.__bindingPointIndex=S;const k=i.createBuffer(),A=b.__size,x=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,k),i.bufferData(i.UNIFORM_BUFFER,A,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,k),k}function f(){for(let b=0;b<o;b++)if(r.indexOf(b)===-1)return r.push(b),b;return ct("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(b){const S=a[b.id],k=b.uniforms,A=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let x=0,w=k.length;x<w;x++){const R=k[x];if(Array.isArray(R))for(let L=0,z=R.length;L<z;L++)h(R[L],x,L,A);else h(R,x,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(b,S,k,A){if(m(b,S,k,A)===!0){const x=b.__offset,w=b.value;if(Array.isArray(w)){let R=0;for(let L=0;L<w.length;L++){const z=w[L],F=g(z);v(z,b.__data,R),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(R+=F.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(w,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,b.__data)}}function v(b,S,k){typeof b=="number"||typeof b=="boolean"?S[0]=b:b.isMatrix3?(S[0]=b.elements[0],S[1]=b.elements[1],S[2]=b.elements[2],S[3]=0,S[4]=b.elements[3],S[5]=b.elements[4],S[6]=b.elements[5],S[7]=0,S[8]=b.elements[6],S[9]=b.elements[7],S[10]=b.elements[8],S[11]=0):ArrayBuffer.isView(b)?S.set(new b.constructor(b.buffer,b.byteOffset,S.length)):b.toArray(S,k)}function m(b,S,k,A){const x=b.value,w=S+"_"+k;if(A[w]===void 0)return typeof x=="number"||typeof x=="boolean"?A[w]=x:ArrayBuffer.isView(x)?A[w]=x.slice():A[w]=x.clone(),!0;{const R=A[w];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return A[w]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function p(b){const S=b.uniforms;let k=0;const A=16;for(let w=0,R=S.length;w<R;w++){const L=Array.isArray(S[w])?S[w]:[S[w]];for(let z=0,F=L.length;z<F;z++){const C=L[z],$=Array.isArray(C.value)?C.value:[C.value];for(let D=0,P=$.length;D<P;D++){const Z=$[D],G=g(Z),ee=k%A,ae=ee%G.boundary,ue=ee+ae;k+=ae,ue!==0&&A-ue<G.storage&&(k+=A-ue),C.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=k,k+=G.storage}}}const x=k%A;return x>0&&(k+=A-x),b.__size=k,b.__cache={},this}function g(b){const S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?He("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(S.boundary=16,S.storage=b.byteLength):He("WebGLRenderer: Unsupported uniform value type.",b),S}function y(b){const S=b.target;S.removeEventListener("dispose",y);const k=r.indexOf(S.__bindingPointIndex);r.splice(k,1),i.deleteBuffer(a[S.id]),delete a[S.id],delete s[S.id]}function T(){for(const b in a)i.deleteBuffer(a[b]);r=[],a={},s={}}return{bind:l,update:c,dispose:T}}const wM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ci=null;function TM(){return Ci===null&&(Ci=new cb(wM,16,16,Ts,Vi),Ci.name="DFG_LUT",Ci.minFilter=sn,Ci.magFilter=sn,Ci.wrapS=aa,Ci.wrapT=aa,Ci.generateMipmaps=!1,Ci.needsUpdate=!0),Ci}class AM{constructor(e={}){const{canvas:t=Uy(),context:n=null,depth:a=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:h=Yn}=e;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=r;const m=h,p=new Set([Cf,Lf,Rf]),g=new Set([Yn,Gi,xo,So,Tf,Af]),y=new Uint32Array(4),T=new Int32Array(4),b=new X;let S=null,k=null;const A=[],x=[];let w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let L=!1,z=null,F=null,C=null,$=null;this._outputColorSpace=qn;let D=0,P=0,Z=null,G=-1,ee=null;const ae=new Dt,ue=new Dt;let ke=null;const Ne=new ot(0);let Ie=0,$e=t.width,j=t.height,re=1,fe=null,Ue=null;const xe=new Dt(0,0,$e,j),Fe=new Dt(0,0,$e,j);let _t=!1;const Be=new Nf;let Ye=!1,rt=!1;const Ge=new wt,pt=new X,zt=new Dt,qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let dt=!1;function Ut(){return Z===null?re:1}let N=n;function Wt(M,I){return t.getContext(M,I)}let B,E,_,O,V,Q,ce,de,ne,se,he,Pe,ve,pe,De,Oe,Xe,U,me,oe,ge,Se,le;try{const M={alpha:!0,depth:a,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Mf}`),t.addEventListener("webglcontextlost",St,!1),t.addEventListener("webglcontextrestored",ut,!1),t.addEventListener("webglcontextcreationerror",vi,!1),N===null){const I="webgl2";if(N=Wt(I,M),N===null)throw Wt(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ze()}catch(M){throw t.removeEventListener("webglcontextlost",St,!1),t.removeEventListener("webglcontextrestored",ut,!1),t.removeEventListener("webglcontextcreationerror",vi,!1),ct("WebGLRenderer: "+M.message),M}function ze(){B=new Tk(N),B.init(),ge=new _M(N,B),E=new vk(N,B,e,ge),_=new gM(N,B),E.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),F=N.createFramebuffer(),C=N.createFramebuffer(),$=N.createFramebuffer(),O=new Lk(N),V=new nM,Q=new vM(N,B,_,V,E,ge,O),ce=new wk(R),de=new Pb(N),Se=new mk(N,de),ne=new Ak(N,de,O,Se),se=new Pk(N,ne,de,Se,O),U=new Ck(N,E,Q),De=new _k(V),he=new tM(R,ce,B,E,Se,De),Pe=new MM(R,V),ve=new aM,pe=new dM(B),Xe=new pk(R,ce,_,se,v,l),Oe=new mM(R,se,E),le=new EM(N,O,E,_),me=new gk(N,B,O),oe=new Rk(N,B,O),O.programs=he.programs,R.capabilities=E,R.extensions=B,R.properties=V,R.renderLists=ve,R.shadowMap=Oe,R.state=_,R.info=O}m!==Yn&&(w=new Ik(m,t.width,t.height,o,a,s));const Le=new SM(R,N);this.xr=Le,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const M=B.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=B.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(M){M!==void 0&&(re=M,this.setSize($e,j,!1))},this.getSize=function(M){return M.set($e,j)},this.setSize=function(M,I,J=!0){if(Le.isPresenting){He("WebGLRenderer: Can't change size while VR device is presenting.");return}$e=M,j=I,t.width=Math.floor(M*re),t.height=Math.floor(I*re),J===!0&&(t.style.width=M+"px",t.style.height=I+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,M,I)},this.getDrawingBufferSize=function(M){return M.set($e*re,j*re).floor()},this.setDrawingBufferSize=function(M,I,J){$e=M,j=I,re=J,t.width=Math.floor(M*J),t.height=Math.floor(I*J),this.setViewport(0,0,M,I)},this.setEffects=function(M){if(m===Yn){ct("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let I=0;I<M.length;I++)if(M[I].isOutputPass===!0){He("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(ae)},this.getViewport=function(M){return M.copy(xe)},this.setViewport=function(M,I,J,q){M.isVector4?xe.set(M.x,M.y,M.z,M.w):xe.set(M,I,J,q),_.viewport(ae.copy(xe).multiplyScalar(re).round())},this.getScissor=function(M){return M.copy(Fe)},this.setScissor=function(M,I,J,q){M.isVector4?Fe.set(M.x,M.y,M.z,M.w):Fe.set(M,I,J,q),_.scissor(ue.copy(Fe).multiplyScalar(re).round())},this.getScissorTest=function(){return _t},this.setScissorTest=function(M){_.setScissorTest(_t=M)},this.setOpaqueSort=function(M){fe=M},this.setTransparentSort=function(M){Ue=M},this.getClearColor=function(M){return M.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor(...arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha(...arguments)},this.clear=function(M=!0,I=!0,J=!0){let q=0;if(M){let W=!1;if(Z!==null){const be=Z.texture.format;W=p.has(be)}if(W){const be=Z.texture.type,we=g.has(be),ye=Xe.getClearColor(),Ae=Xe.getClearAlpha(),Ce=ye.r,Ze=ye.g,Qe=ye.b;we?(y[0]=Ce,y[1]=Ze,y[2]=Qe,y[3]=Ae,N.clearBufferuiv(N.COLOR,0,y)):(T[0]=Ce,T[1]=Ze,T[2]=Qe,T[3]=Ae,N.clearBufferiv(N.COLOR,0,T))}else q|=N.COLOR_BUFFER_BIT}I&&(q|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(q|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&N.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),z=M},this.dispose=function(){t.removeEventListener("webglcontextlost",St,!1),t.removeEventListener("webglcontextrestored",ut,!1),t.removeEventListener("webglcontextcreationerror",vi,!1),Xe.dispose(),ve.dispose(),pe.dispose(),V.dispose(),ce.dispose(),se.dispose(),Se.dispose(),le.dispose(),he.dispose(),Le.dispose(),Le.removeEventListener("sessionstart",ih),Le.removeEventListener("sessionend",ah),ts.stop()};function St(M){M.preventDefault(),Bh("WebGLRenderer: Context Lost."),L=!0}function ut(){Bh("WebGLRenderer: Context Restored."),L=!1;const M=O.autoReset,I=Oe.enabled,J=Oe.autoUpdate,q=Oe.needsUpdate,W=Oe.type;ze(),O.autoReset=M,Oe.enabled=I,Oe.autoUpdate=J,Oe.needsUpdate=q,Oe.type=W}function vi(M){ct("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Ai(M){const I=M.target;I.removeEventListener("dispose",Ai),y0(I)}function y0(M){b0(M),V.remove(M)}function b0(M){const I=V.get(M).programs;I!==void 0&&(I.forEach(function(J){he.releaseProgram(J)}),M.isShaderMaterial&&he.releaseShaderCache(M))}this.renderBufferDirect=function(M,I,J,q,W,be){I===null&&(I=qt);const we=W.isMesh&&W.matrixWorld.determinantAffine()<0,ye=k0(M,I,J,q,W);_.setMaterial(q,we);let Ae=J.index,Ce=1;if(q.wireframe===!0){if(Ae=ne.getWireframeAttribute(J),Ae===void 0)return;Ce=2}const Ze=J.drawRange,Qe=J.attributes.position;let Re=Ze.start*Ce,ft=(Ze.start+Ze.count)*Ce;be!==null&&(Re=Math.max(Re,be.start*Ce),ft=Math.min(ft,(be.start+be.count)*Ce)),Ae!==null?(Re=Math.max(Re,0),ft=Math.min(ft,Ae.count)):Qe!=null&&(Re=Math.max(Re,0),ft=Math.min(ft,Qe.count));const Bt=ft-Re;if(Bt<0||Bt===1/0)return;Se.setup(W,q,ye,J,Ae);let Et,yt=me;if(Ae!==null&&(Et=de.get(Ae),yt=oe,yt.setIndex(Et)),W.isMesh)q.wireframe===!0?(_.setLineWidth(q.wireframeLinewidth*Ut()),yt.setMode(N.LINES)):yt.setMode(N.TRIANGLES);else if(W.isLine){let un=q.linewidth;un===void 0&&(un=1),_.setLineWidth(un*Ut()),W.isLineSegments?yt.setMode(N.LINES):W.isLineLoop?yt.setMode(N.LINE_LOOP):yt.setMode(N.LINE_STRIP)}else W.isPoints?yt.setMode(N.POINTS):W.isSprite&&yt.setMode(N.TRIANGLES);if(W.isBatchedMesh)if(B.get("WEBGL_multi_draw"))yt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const un=W._multiDrawStarts,Ee=W._multiDrawCounts,xn=W._multiDrawCount,lt=Ae?de.get(Ae).bytesPerElement:1,ai=V.get(q).currentProgram.getUniforms();for(let Ri=0;Ri<xn;Ri++)ai.setValue(N,"_gl_DrawID",Ri),yt.render(un[Ri]/lt,Ee[Ri])}else if(W.isInstancedMesh)yt.renderInstances(Re,Bt,W.count);else if(J.isInstancedBufferGeometry){const un=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Ee=Math.min(J.instanceCount,un);yt.renderInstances(Re,Bt,Ee)}else yt.render(Re,Bt)};function nh(M,I,J,q){z!==null&&M.isNodeMaterial&&z.setObject(q,M),Ye===!0&&De.setState(M,J,!1),M.transparent===!0&&M.side===ki&&M.forceSinglePass===!1?(M.side=zn,M.needsUpdate=!0,Wo(M,I,q),M.side=Es,M.needsUpdate=!0,Wo(M,I,q),M.side=ki):Wo(M,I,q)}this.compile=function(M,I,J=null){J===null&&(J=M),z!==null&&z.renderStart(M,I,J),k=pe.get(J),k.init(I),x.push(k),J.traverseVisible(function(W){W.isLight&&W.layers.test(I.layers)&&(k.pushLight(W),W.castShadow&&k.pushShadow(W))}),M!==J&&M.traverseVisible(function(W){W.isLight&&W.layers.test(I.layers)&&(k.pushLight(W),W.castShadow&&k.pushShadow(W))}),k.setupLights(),z!==null&&z.updateLights(k.state.lightsArray),rt=this.localClippingEnabled,Ye=De.init(this.clippingPlanes,rt),Ye===!0&&De.setGlobalState(this.clippingPlanes,I),z!==null&&Oe.render(k.state.shadowsArray,J,I);const q=new Set;return M.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const be=W.material;if(be)if(Array.isArray(be))for(let we=0;we<be.length;we++){const ye=be[we];nh(ye,J,I,W),q.add(ye)}else nh(be,J,I,W),q.add(be)}),k=x.pop(),z!==null&&z.renderEnd(),q},this.compileAsync=function(M,I,J=null){const q=this.compile(M,I,J);return new Promise(W=>{function be(){if(q.forEach(function(we){const Ae=V.get(we).currentProgram;(Ae===void 0||Ae.isReady())&&q.delete(we)}),q.size===0){W(M);return}setTimeout(be,10)}B.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let Oc=null;function x0(M){Oc&&Oc(M)}function ih(){ts.stop()}function ah(){ts.start()}const ts=new ov;ts.setAnimationLoop(x0),typeof self<"u"&&ts.setContext(self),this.setAnimationLoop=function(M){Oc=M,Le.setAnimationLoop(M),M===null?ts.stop():ts.start()},Le.addEventListener("sessionstart",ih),Le.addEventListener("sessionend",ah),this.render=function(M,I){if(I!==void 0&&I.isCamera!==!0){ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;z!==null&&z.renderStart(M,I);const J=Le.enabled===!0&&Le.isPresenting===!0,q=w!==null&&(Z===null||J)&&w.begin(R,Z);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Le.enabled===!0&&Le.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Le.cameraAutoUpdate===!0&&Le.updateCamera(I),I=Le.getCamera()),M.isScene===!0&&M.onBeforeRender(R,M,I,Z),k=pe.get(M,x.length),k.init(I),k.state.textureUnits=Q.getTextureUnits(),x.push(k),Ge.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Be.setFromProjectionMatrix(Ge,Oi,I.reversedDepth),rt=this.localClippingEnabled,Ye=De.init(this.clippingPlanes,rt),S=ve.get(M,A.length),S.init(),A.push(S),Le.enabled===!0&&Le.isPresenting===!0){const we=R.xr.getDepthSensingMesh();we!==null&&Fc(we,I,-1/0,R.sortObjects)}Fc(M,I,0,R.sortObjects),S.finish(),z!==null&&z.updateLights(k.state.lightsArray),R.sortObjects===!0&&S.sort(fe,Ue),dt=Le.enabled===!1||Le.isPresenting===!1||Le.hasDepthSensing()===!1,dt&&Xe.addToRenderList(S,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ye===!0&&De.beginShadows();const W=k.state.shadowsArray;if(Oe.render(W,M,I),Ye===!0&&De.endShadows(),(q&&w.hasRenderPass())===!1){const we=S.opaque,ye=S.transmissive;if(k.setupLights(),I.isArrayCamera){const Ae=I.cameras;if(ye.length>0)for(let Ce=0,Ze=Ae.length;Ce<Ze;Ce++){const Qe=Ae[Ce];rh(we,ye,M,Qe)}dt&&Xe.render(M);for(let Ce=0,Ze=Ae.length;Ce<Ze;Ce++){const Qe=Ae[Ce];sh(S,M,Qe,Qe.viewport)}}else ye.length>0&&rh(we,ye,M,I),dt&&Xe.render(M),sh(S,M,I)}Z!==null&&P===0&&(Q.updateMultisampleRenderTarget(Z),Q.updateRenderTargetMipmap(Z)),q&&w.end(R),M.isScene===!0&&M.onAfterRender(R,M,I),Se.resetDefaultState(),G=-1,ee=null,x.pop(),x.length>0?(k=x[x.length-1],Q.setTextureUnits(k.state.textureUnits),Ye===!0&&De.setGlobalState(R.clippingPlanes,k.state.camera)):k=null,A.pop(),A.length>0?S=A[A.length-1]:S=null,z!==null&&z.renderEnd()};function Fc(M,I,J,q){if(M.visible===!1)return;if(M.layers.test(I.layers)){if(M.isGroup)J=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(I);else if(M.isLightProbeGrid)k.pushLightProbeGrid(M);else if(M.isLight)k.pushLight(M),M.castShadow&&k.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(Be)){q&&zt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ge);const we=se.update(M),ye=M.material;ye.visible&&S.push(M,we,ye,J,zt.z,null,I)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(Be))){const we=se.update(M),ye=M.material;if(q&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),zt.copy(M.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),zt.copy(we.boundingSphere.center)),zt.applyMatrix4(M.matrixWorld).applyMatrix4(Ge)),Array.isArray(ye)){const Ae=we.groups;for(let Ce=0,Ze=Ae.length;Ce<Ze;Ce++){const Qe=Ae[Ce],Re=ye[Qe.materialIndex];Re&&Re.visible&&S.push(M,we,Re,J,zt.z,Qe,I)}}else ye.visible&&S.push(M,we,ye,J,zt.z,null,I)}}const be=M.children;for(let we=0,ye=be.length;we<ye;we++)Fc(be[we],I,J,q)}function sh(M,I,J,q){const{opaque:W,transmissive:be,transparent:we}=M;k.setupLightsView(J),Ye===!0&&De.setGlobalState(R.clippingPlanes,J),q&&_.viewport(ae.copy(q)),W.length>0&&qo(W,I,J),be.length>0&&qo(be,I,J),we.length>0&&qo(we,I,J),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function rh(M,I,J,q){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(k.state.transmissionRenderTarget[q.id]===void 0){const Re=B.has("EXT_color_buffer_half_float")||B.has("EXT_color_buffer_float");k.state.transmissionRenderTarget[q.id]=new wi(1,1,{generateMipmaps:!0,type:Re?Vi:Yn,minFilter:Ua,samples:Math.max(4,E.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:tt.workingColorSpace})}const be=k.state.transmissionRenderTarget[q.id],we=q.viewport||ae;be.setSize(we.z*R.transmissionResolutionScale,we.w*R.transmissionResolutionScale);const ye=R.getRenderTarget(),Ae=R.getActiveCubeFace(),Ce=R.getActiveMipmapLevel();R.setRenderTarget(be),R.getClearColor(Ne),Ie=R.getClearAlpha(),Ie<1&&R.setClearColor(16777215,.5),R.clear(),dt&&Xe.render(J);const Ze=R.toneMapping;R.toneMapping=$i;const Qe=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),k.setupLightsView(q),Ye===!0&&De.setGlobalState(R.clippingPlanes,q),qo(M,J,q),Q.updateMultisampleRenderTarget(be),Q.updateRenderTargetMipmap(be),B.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let ft=0,Bt=I.length;ft<Bt;ft++){const Et=I[ft],{object:yt,geometry:un,material:Ee,group:xn}=Et;if(Ee.side===ki&&yt.layers.test(q.layers)){const lt=Ee.side;Ee.side=zn,Ee.needsUpdate=!0,oh(yt,J,q,un,Ee,xn),Ee.side=lt,Ee.needsUpdate=!0,Re=!0}}Re===!0&&(Q.updateMultisampleRenderTarget(be),Q.updateRenderTargetMipmap(be))}R.setRenderTarget(ye,Ae,Ce),R.setClearColor(Ne,Ie),Qe!==void 0&&(q.viewport=Qe),R.toneMapping=Ze}function qo(M,I,J){const q=I.isScene===!0?I.overrideMaterial:null;for(let W=0,be=M.length;W<be;W++){const we=M[W],{object:ye,geometry:Ae,group:Ce}=we;let Ze=we.material;Ze.allowOverride===!0&&q!==null&&(Ze=q),ye.layers.test(J.layers)&&oh(ye,I,J,Ae,Ze,Ce)}}function oh(M,I,J,q,W,be){z!==null&&W.isNodeMaterial&&z.setObject(M,W),M.onBeforeRender(R,I,J,q,W,be),M.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),W.onBeforeRender(R,I,J,q,M,be),W.transparent===!0&&W.side===ki&&W.forceSinglePass===!1?(W.side=zn,W.needsUpdate=!0,R.renderBufferDirect(J,I,q,W,M,be),W.side=Es,W.needsUpdate=!0,R.renderBufferDirect(J,I,q,W,M,be),W.side=ki):R.renderBufferDirect(J,I,q,W,M,be),M.onAfterRender(R,I,J,q,W,be)}function Wo(M,I,J){I.isScene!==!0&&(I=qt);const q=V.get(M),W=k.state.lights,be=k.state.shadowsArray,we=W.state.version,ye=he.getParameters(M,W.state,be,I,J,k.state.lightProbeGridArray),Ae=he.getProgramCacheKey(ye);let Ce=q.programs;q.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?I.environment:null,q.fog=I.fog;const Ze=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;q.envMap=ce.get(M.envMap||q.environment,Ze),q.envMapRotation=q.environment!==null&&M.envMap===null?I.environmentRotation:M.envMapRotation,Ce===void 0&&(M.addEventListener("dispose",Ai),Ce=new Map,q.programs=Ce);let Qe=Ce.get(Ae);if(Qe!==void 0){if(q.currentProgram===Qe&&q.lightsStateVersion===we)return ch(M,ye),Qe}else ye.uniforms=he.getUniforms(M),z!==null&&M.isNodeMaterial&&z.build(M,J,ye),M.onBeforeCompile(ye,R),Qe=he.acquireProgram(ye,Ae),Ce.set(Ae,Qe),q.uniforms=ye.uniforms;const Re=q.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Re.clippingPlanes=De.uniform),ch(M,ye),q.needsLights=E0(M),q.lightsStateVersion=we,q.needsLights&&(Re.ambientLightColor.value=W.state.ambient,Re.lightProbe.value=W.state.probe,Re.sunLights.value=W.state.sun,Re.sunLightShadows.value=W.state.sunShadow,Re.directionalLights.value=W.state.directional,Re.directionalLightShadows.value=W.state.directionalShadow,Re.spotLights.value=W.state.spot,Re.spotLightShadows.value=W.state.spotShadow,Re.rectAreaLights.value=W.state.rectArea,Re.ltc_1.value=W.state.rectAreaLTC1,Re.ltc_2.value=W.state.rectAreaLTC2,Re.pointLights.value=W.state.point,Re.pointLightShadows.value=W.state.pointShadow,Re.hemisphereLights.value=W.state.hemi,Re.sunShadowMatrix.value=W.state.sunShadowMatrix,Re.sunShadowCascade.value=W.state.sunShadowCascade,Re.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Re.spotLightMatrix.value=W.state.spotLightMatrix,Re.spotLightMap.value=W.state.spotLightMap,Re.pointShadowMatrix.value=W.state.pointShadowMatrix),q.lightProbeGrid=k.state.lightProbeGridArray.length>0,q.currentProgram=Qe,q.uniformsList=null,Qe}function lh(M){if(M.uniformsList===null){const I=M.currentProgram.getUniforms();M.uniformsList=zl.seqWithValue(I.seq,M.uniforms)}return M.uniformsList}function ch(M,I){const J=V.get(M);J.outputColorSpace=I.outputColorSpace,J.batching=I.batching,J.batchingColor=I.batchingColor,J.instancing=I.instancing,J.instancingColor=I.instancingColor,J.instancingMorph=I.instancingMorph,J.skinning=I.skinning,J.morphTargets=I.morphTargets,J.morphNormals=I.morphNormals,J.morphColors=I.morphColors,J.morphTargetsCount=I.morphTargetsCount,J.numClippingPlanes=I.numClippingPlanes,J.numIntersection=I.numClipIntersection,J.vertexAlphas=I.vertexAlphas,J.vertexTangents=I.vertexTangents,J.toneMapping=I.toneMapping}function S0(M,I){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;b.setFromMatrixPosition(I.matrixWorld);for(let J=0,q=M.length;J<q;J++){const W=M[J];if(W.texture!==null&&W.boundingBox.containsPoint(b))return W}return null}function k0(M,I,J,q,W){I.isScene!==!0&&(I=qt),Q.resetTextureUnits();const be=I.fog,we=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?I.environment:null,ye=Z===null?R.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:tt.workingColorSpace,Ae=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Ce=ce.get(q.envMap||we,Ae),Ze=q.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Qe=!!J.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Re=!!J.morphAttributes.position,ft=!!J.morphAttributes.normal,Bt=!!J.morphAttributes.color;let Et=$i;q.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Et=R.toneMapping);const yt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,un=yt!==void 0?yt.length:0,Ee=V.get(q),xn=k.state.lights;if(Ye===!0&&(rt===!0||M!==ee)){const kt=M===ee&&q.id===G;De.setState(q,M,kt)}let lt=!1;q.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==xn.state.version||Ee.outputColorSpace!==ye||W.isBatchedMesh&&Ee.batching===!1||!W.isBatchedMesh&&Ee.batching===!0||W.isBatchedMesh&&Ee.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Ee.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Ee.instancing===!1||!W.isInstancedMesh&&Ee.instancing===!0||W.isSkinnedMesh&&Ee.skinning===!1||!W.isSkinnedMesh&&Ee.skinning===!0||W.isInstancedMesh&&Ee.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ee.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ee.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ee.instancingMorph===!1&&W.morphTexture!==null||Ee.envMap!==Ce||q.fog===!0&&Ee.fog!==be||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==De.numPlanes||Ee.numIntersection!==De.numIntersection)||Ee.vertexAlphas!==Ze||Ee.vertexTangents!==Qe||Ee.morphTargets!==Re||Ee.morphNormals!==ft||Ee.morphColors!==Bt||Ee.toneMapping!==Et||Ee.morphTargetsCount!==un||!!Ee.lightProbeGrid!=k.state.lightProbeGridArray.length>0)&&(lt=!0):(lt=!0,Ee.__version=q.version);let ai=Ee.currentProgram;lt===!0&&(ai=Wo(q,I,W),z&&q.isNodeMaterial&&z.onUpdateProgram(q,ai,Ee));let Ri=!1,va=!1,Ps=!1;const gt=ai.getUniforms(),Ot=Ee.uniforms;if(_.useProgram(ai.program)&&(Ri=!0,va=!0,Ps=!0),q.id!==G&&(G=q.id,va=!0),Ee.needsLights){const kt=S0(k.state.lightProbeGridArray,W);Ee.lightProbeGrid!==kt&&(Ee.lightProbeGrid=kt,va=!0)}if(Ri||ee!==M){_.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),gt.setValue(N,"projectionMatrix",M.projectionMatrix),gt.setValue(N,"viewMatrix",M.matrixWorldInverse);const ya=gt.map.cameraPosition;ya!==void 0&&ya.setValue(N,pt.setFromMatrixPosition(M.matrixWorld)),E.logarithmicDepthBuffer&&gt.setValue(N,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&gt.setValue(N,"isOrthographic",M.isOrthographicCamera===!0),ee!==M&&(ee=M,va=!0,Ps=!0)}if(Ee.needsLights&&(xn.state.sunShadowMap.length>0&&gt.setValue(N,"sunShadowMap",xn.state.sunShadowMap,Q),xn.state.directionalShadowMap.length>0&&gt.setValue(N,"directionalShadowMap",xn.state.directionalShadowMap,Q),xn.state.spotShadowMap.length>0&&gt.setValue(N,"spotShadowMap",xn.state.spotShadowMap,Q),xn.state.pointShadowMap.length>0&&gt.setValue(N,"pointShadowMap",xn.state.pointShadowMap,Q)),W.isSkinnedMesh){gt.setOptional(N,W,"bindMatrix"),gt.setOptional(N,W,"bindMatrixInverse");const kt=W.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),gt.setValue(N,"boneTexture",kt.boneTexture,Q))}W.isBatchedMesh&&(gt.setOptional(N,W,"batchingTexture"),gt.setValue(N,"batchingTexture",W._matricesTexture,Q),gt.setOptional(N,W,"batchingIdTexture"),gt.setValue(N,"batchingIdTexture",W._indirectTexture,Q),gt.setOptional(N,W,"batchingColorTexture"),W._colorsTexture!==null&&gt.setValue(N,"batchingColorTexture",W._colorsTexture,Q));const _a=J.morphAttributes;if((_a.position!==void 0||_a.normal!==void 0||_a.color!==void 0)&&U.update(W,J,ai),(va||Ee.receiveShadow!==W.receiveShadow)&&(Ee.receiveShadow=W.receiveShadow,gt.setValue(N,"receiveShadow",W.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&I.environment!==null&&(Ot.envMapIntensity.value=I.environmentIntensity),Ot.dfgLUT!==void 0&&(Ot.dfgLUT.value=TM()),va){if(gt.setValue(N,"toneMappingExposure",R.toneMappingExposure),Ee.needsLights&&M0(Ot,Ps),be&&q.fog===!0&&Pe.refreshFogUniforms(Ot,be),Pe.refreshMaterialUniforms(Ot,q,re,j,k.state.transmissionRenderTarget[M.id]),Ee.needsLights&&Ee.lightProbeGrid){const kt=Ee.lightProbeGrid;Ot.probesSH.value=kt.texture,Ot.probesMin.value.copy(kt.boundingBox.min),Ot.probesMax.value.copy(kt.boundingBox.max),Ot.probesResolution.value.copy(kt.resolution)}zl.upload(N,lh(Ee),Ot,Q)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(zl.upload(N,lh(Ee),Ot,Q),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&gt.setValue(N,"center",W.center),gt.setValue(N,"modelViewMatrix",W.modelViewMatrix),gt.setValue(N,"normalMatrix",W.normalMatrix),gt.setValue(N,"modelMatrix",W.matrixWorld),q.uniformsGroups!==void 0){const kt=q.uniformsGroups;for(let ya=0,Ds=kt.length;ya<Ds;ya++){const uh=kt[ya];le.update(uh,ai),le.bind(uh,ai)}}return ai}function M0(M,I){M.ambientLightColor.needsUpdate=I,M.lightProbe.needsUpdate=I,M.sunLights.needsUpdate=I,M.sunLightShadows.needsUpdate=I,M.directionalLights.needsUpdate=I,M.directionalLightShadows.needsUpdate=I,M.pointLights.needsUpdate=I,M.pointLightShadows.needsUpdate=I,M.spotLights.needsUpdate=I,M.spotLightShadows.needsUpdate=I,M.rectAreaLights.needsUpdate=I,M.hemisphereLights.needsUpdate=I}function E0(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(M,I,J){const q=V.get(M);q.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),V.get(M.texture).__webglTexture=I,V.get(M.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:J,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,I){const J=V.get(M);J.__webglFramebuffer=I,J.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(M,I=0,J=0){Z=M,D=I,P=J;let q=null,W=!1,be=!1;if(M){const ye=V.get(M);if(ye.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(N.FRAMEBUFFER,ye.__webglFramebuffer),ae.copy(M.viewport),ue.copy(M.scissor),ke=M.scissorTest,_.viewport(ae),_.scissor(ue),_.setScissorTest(ke),G=-1;return}else if(ye.__webglFramebuffer===void 0)Q.setupRenderTarget(M);else if(ye.__hasExternalTextures)Q.rebindTextures(M,V.get(M.texture).__webglTexture,V.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Ze=M.depthTexture;if(ye.__boundDepthTexture!==Ze){if(Ze!==null&&V.has(Ze)&&(M.width!==Ze.image.width||M.height!==Ze.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(M)}}const Ae=M.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(be=!0);const Ce=V.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ce[I])?q=Ce[I][J]:q=Ce[I],W=!0):M.samples>0&&Q.useMultisampledRTT(M)===!1?q=V.get(M).__webglMultisampledFramebuffer:Array.isArray(Ce)?q=Ce[J]:q=Ce,ae.copy(M.viewport),ue.copy(M.scissor),ke=M.scissorTest}else ae.copy(xe).multiplyScalar(re).floor(),ue.copy(Fe).multiplyScalar(re).floor(),ke=_t;if(J!==0&&(q=F),_.bindFramebuffer(N.FRAMEBUFFER,q)&&_.drawBuffers(M,q),_.viewport(ae),_.scissor(ue),_.setScissorTest(ke),W){const ye=V.get(M.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+I,ye.__webglTexture,J)}else if(be){const ye=I;for(let Ae=0;Ae<M.textures.length;Ae++){const Ce=V.get(M.textures[Ae]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Ae,Ce.__webglTexture,J,ye)}}else if(M!==null&&J!==0){const ye=V.get(M.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ye.__webglTexture,J)}G=-1};function dh(M){const I=V.get(M);return(I.__readFormat!==M.format||I.__readType!==M.type)&&(I.__readFormat=M.format,I.__readType=M.type,I.__formatReadable=E.textureFormatReadable(M.format),I.__typeReadable=E.textureTypeReadable(M.type)),I}this.readRenderTargetPixels=function(M,I,J,q,W,be,we,ye=0){if(!(M&&M.isWebGLRenderTarget)){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=V.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&we!==void 0&&(Ae=Ae[we]),Ae){_.bindFramebuffer(N.FRAMEBUFFER,Ae);try{const Ce=M.textures[ye],Ze=Ce.format,Qe=Ce.type;M.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ye);const Re=dh(Ce);if(Re.__formatReadable===!1){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Re.__typeReadable===!1){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=M.width-q&&J>=0&&J<=M.height-W&&N.readPixels(I,J,q,W,ge.convert(Ze),ge.convert(Qe),be)}finally{const Ce=Z!==null?V.get(Z).__webglFramebuffer:null;_.bindFramebuffer(N.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(M,I,J,q,W,be,we,ye=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=V.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&we!==void 0&&(Ae=Ae[we]),Ae)if(I>=0&&I<=M.width-q&&J>=0&&J<=M.height-W){_.bindFramebuffer(N.FRAMEBUFFER,Ae);const Ce=M.textures[ye],Ze=Ce.format,Qe=Ce.type;M.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ye);const Re=dh(Ce);if(Re.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Re.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ft=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,ft),N.bufferData(N.PIXEL_PACK_BUFFER,be.byteLength,N.STREAM_READ),N.readPixels(I,J,q,W,ge.convert(Ze),ge.convert(Qe),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);const Bt=Z!==null?V.get(Z).__webglFramebuffer:null;_.bindFramebuffer(N.FRAMEBUFFER,Bt);const Et=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Ny(N,Et,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,ft),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,be),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(ft),N.deleteSync(Et),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,I=null,J=0){const q=Math.pow(2,-J),W=Math.floor(M.image.width*q),be=Math.floor(M.image.height*q),we=I!==null?I.x:0,ye=I!==null?I.y:0;Q.setTexture2D(M,0),N.copyTexSubImage2D(N.TEXTURE_2D,J,0,0,we,ye,W,be),_.unbindTexture()},this.copyTextureToTexture=function(M,I,J=null,q=null,W=0,be=0){let we,ye,Ae,Ce,Ze,Qe,Re,ft,Bt;const Et=M.isCompressedTexture?M.mipmaps[be]:M.image;if(J!==null)we=J.max.x-J.min.x,ye=J.max.y-J.min.y,Ae=J.isBox3?J.max.z-J.min.z:1,Ce=J.min.x,Ze=J.min.y,Qe=J.isBox3?J.min.z:0;else{const Ot=Math.pow(2,-W);we=Math.floor(Et.width*Ot),ye=Math.floor(Et.height*Ot),M.isDataArrayTexture?Ae=Et.depth:M.isData3DTexture?Ae=Math.floor(Et.depth*Ot):Ae=1,Ce=0,Ze=0,Qe=0}q!==null?(Re=q.x,ft=q.y,Bt=q.z):(Re=0,ft=0,Bt=0);const yt=ge.convert(I.format),un=ge.convert(I.type);let Ee;I.isData3DTexture?(Q.setTexture3D(I,0),Ee=N.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(Q.setTexture2DArray(I,0),Ee=N.TEXTURE_2D_ARRAY):(Q.setTexture2D(I,0),Ee=N.TEXTURE_2D),_.activeTexture(N.TEXTURE0),_.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,I.flipY),_.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),_.pixelStorei(N.UNPACK_ALIGNMENT,I.unpackAlignment);const xn=_.getParameter(N.UNPACK_ROW_LENGTH),lt=_.getParameter(N.UNPACK_IMAGE_HEIGHT),ai=_.getParameter(N.UNPACK_SKIP_PIXELS),Ri=_.getParameter(N.UNPACK_SKIP_ROWS),va=_.getParameter(N.UNPACK_SKIP_IMAGES);_.pixelStorei(N.UNPACK_ROW_LENGTH,Et.width),_.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Et.height),_.pixelStorei(N.UNPACK_SKIP_PIXELS,Ce),_.pixelStorei(N.UNPACK_SKIP_ROWS,Ze),_.pixelStorei(N.UNPACK_SKIP_IMAGES,Qe);const Ps=M.isDataArrayTexture||M.isData3DTexture,gt=I.isDataArrayTexture||I.isData3DTexture;if(M.isDepthTexture){const Ot=V.get(M),_a=V.get(I),kt=V.get(Ot.__renderTarget),ya=V.get(_a.__renderTarget);_.bindFramebuffer(N.READ_FRAMEBUFFER,kt.__webglFramebuffer),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,ya.__webglFramebuffer);for(let Ds=0;Ds<Ae;Ds++)Ps&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,V.get(M).__webglTexture,W,Qe+Ds),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,V.get(I).__webglTexture,be,Bt+Ds)),N.blitFramebuffer(Ce,Ze,we,ye,Re,ft,we,ye,N.DEPTH_BUFFER_BIT,N.NEAREST);_.bindFramebuffer(N.READ_FRAMEBUFFER,null),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(W!==0||M.isRenderTargetTexture||V.has(M)){const Ot=V.get(M),_a=V.get(I);_.bindFramebuffer(N.READ_FRAMEBUFFER,C),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,$);for(let kt=0;kt<Ae;kt++)Ps?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ot.__webglTexture,W,Qe+kt):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ot.__webglTexture,W),gt?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,_a.__webglTexture,be,Bt+kt):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,_a.__webglTexture,be),W!==0?N.blitFramebuffer(Ce,Ze,we,ye,Re,ft,we,ye,N.COLOR_BUFFER_BIT,N.NEAREST):gt?N.copyTexSubImage3D(Ee,be,Re,ft,Bt+kt,Ce,Ze,we,ye):N.copyTexSubImage2D(Ee,be,Re,ft,Ce,Ze,we,ye);_.bindFramebuffer(N.READ_FRAMEBUFFER,null),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else gt?M.isDataTexture||M.isData3DTexture?N.texSubImage3D(Ee,be,Re,ft,Bt,we,ye,Ae,yt,un,Et.data):I.isCompressedArrayTexture?N.compressedTexSubImage3D(Ee,be,Re,ft,Bt,we,ye,Ae,yt,Et.data):N.texSubImage3D(Ee,be,Re,ft,Bt,we,ye,Ae,yt,un,Et):M.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,be,Re,ft,we,ye,yt,un,Et.data):M.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,be,Re,ft,Et.width,Et.height,yt,Et.data):N.texSubImage2D(N.TEXTURE_2D,be,Re,ft,we,ye,yt,un,Et);_.pixelStorei(N.UNPACK_ROW_LENGTH,xn),_.pixelStorei(N.UNPACK_IMAGE_HEIGHT,lt),_.pixelStorei(N.UNPACK_SKIP_PIXELS,ai),_.pixelStorei(N.UNPACK_SKIP_ROWS,Ri),_.pixelStorei(N.UNPACK_SKIP_IMAGES,va),be===0&&I.generateMipmaps&&N.generateMipmap(Ee),_.unbindTexture()},this.initRenderTarget=function(M){V.get(M).__webglFramebuffer===void 0&&Q.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Q.setTextureCube(M,0):M.isData3DTexture?Q.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Q.setTexture2DArray(M,0):Q.setTexture2D(M,0),_.unbindTexture()},this.resetState=function(){D=0,P=0,Z=null,_.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}}const RM=["head","body","torso","leftArm","rightArm","leftLeg","rightLeg"],Zu=["pitch","yaw","roll","bend","x","y","z"];function Ul(i){return typeof i=="number"&&Number.isFinite(i)?i:null}function mv(i){if(typeof i=="string")return i.trim();if(i&&typeof i=="object"){const e=i.translate;if(typeof e=="string")return e.trim()}return""}function LM(i){const e=i.emote||{},t=Number(e.returnTick)>0?Number(e.returnTick):60,n=Number(e.endTick)>0?Number(e.endTick):t,a={adi:mv(i.name)||"İsimsiz",yazar:String(i.author||""),aciklama:String(i.description||""),baslangicTick:Number(e.beginTick)>0?Number(e.beginTick):0,bitisTick:n,stopTick:Number(e.stopTick)>0?Number(e.stopTick):n,donusTick:t,dongu:e.isLoop===!0||e.isLoop==="true",kemikler:new Map};e.palUzay===!0&&(a.palUzay=!0),e.palDef===!0&&(a.palDef=!0);const s=Ul(e.loopBas);s!==null&&s>=0&&(a.loopBas=s);const r=Array.isArray(e.moves)?e.moves:[];let o={};for(const l of r){if(typeof l?.tick!="number")continue;const c=l.tick;for(const d of RM){const f=l[d];if(!f||typeof f!="object")continue;let u=a.kemikler.get(d);u||(u={},a.kemikler.set(d,u));for(const v of Zu){const m=Ul(f[v]);m!==null&&(u[v]||(u[v]=[]),u[v].push({t:c,v:m,easing:String(l.easing||"LINEAR").toUpperCase()}))}const h=Ul(f.turn);h!==null&&h!==0&&(o[d]=(o[d]||0)+h*360,u.turn||(u.turn=[]),u.turn.push({t:c,v:o[d],easing:"LINEAR"}))}}return a.palUzay===!0&&a.palDef!==!0&&DM(a),a}const CM={leftArm:[5,-2,0],rightArm:[-5,-2,0],leftLeg:[1.9,-12,.1],rightLeg:[-1.9,-12,.1]};function PM(i){if(i.length===0)return 0;const e=[...i].sort((n,a)=>n-a),t=Math.floor(e.length/2);return e.length%2?e[t]:(e[t-1]+e[t])/2}function DM(i){for(const[e,t]of Object.entries(CM)){const n=i.kemikler.get(e);if(!n)continue;let a=0,s=0;for(const r of["x","y"]){const o=n[r];if(!o||o.length===0)continue;a++;const l=t[r==="x"?0:1];Math.abs(PM(o.map(c=>c.v))-l)<=2&&s++}a===0||s!==a||["x","y","z"].forEach((r,o)=>{const l=n[r];if(l)for(const c of l)c.v-=t[o]})}i.palDef=!0}function IM(i){const e=i.animations||{},t=Object.values(e)[0];if(!t||typeof t!="object")throw new Error("PAL animasyonu boş");const n=Number(t.animation_length)>0?Number(t.animation_length)*20:60,a={adi:mv(t.player_animation_library?.name??i.name)||"İsimsiz",yazar:String(t.player_animation_library?.author||i.author||""),aciklama:String(t.player_animation_library?.description||i.description||""),baslangicTick:0,bitisTick:n,stopTick:n,donusTick:n,dongu:!0,kemikler:new Map,palDelta:!0},s=t.bones||{};for(const r of Object.keys(s)){const o=s[r];if(!o||typeof o!="object")continue;const l={},c=(d,f,u)=>{if(!d)return;const h=[],v=(m,p)=>{const g=Ul(p);g!==null&&h.push({t:m,v:g,easing:"LINEAR"})};if(Array.isArray(d))for(const m of d){const p=typeof m?.time=="number"?m.time*20:0;v(p,Array.isArray(m?.vector)?m.vector[f]:void 0)}else Array.isArray(d.vector)?v(0,d.vector[f]):typeof d=="number"&&v(0,d);h.length&&(l[u]=h)};c(o.rotation,0,"pitch"),c(o.rotation,1,"yaw"),c(o.rotation,2,"roll"),c(o.position,0,"x"),c(o.position,1,"y"),c(o.position,2,"z"),Object.keys(l).length&&a.kemikler.set(r,l)}return a}function Np(i){const e=JSON.parse(i);if(e?.emote&&typeof e.emote=="object")return LM(e);if(e?.animations)return IM(e);throw new Error("bilinmeyen emote formatı")}function zM(i){switch(i){case"EASEINSINE":case"INSINE":case"EASEIN":return e=>1-Math.cos(e*Math.PI/2);case"EASEOUTSINE":case"OUTSINE":return e=>Math.sin(e*Math.PI/2);case"EASEINOUTSINE":case"INOUTSINE":case"SINE":return e=>-(Math.cos(Math.PI*e)-1)/2;case"EASEINOUTQUAD":case"INOUTQUAD":return e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2;case"EASEINOUTCUBIC":return e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2;case"STEP":return e=>e>=1?1:0;default:return e=>e}}function Op(i,e){if(!i||!i.length)return null;if(i.length===1)return i[0].v;let t=0;for(;t<i.length&&i[t].t<=e;)t++;if(t<=0)return i[0].v;if(t>=i.length)return i[i.length-1].v;const n=i[t-1],a=i[t],s=a.t-n.t,r=s<=0?1:(e-n.t)/s;return n.v+(a.v-n.v)*zM(a.easing)(r)}function gv(){return[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]]}const Fp={head:[0,0,0],body:[0,0,0],armL:[0,0,0],armR:[0,0,0],legL:[0,0,0],legR:[0,0,0],bend:[0,0,0,0,0],konum:gv(),kokDon:[0,0,0],kokKonum:[0,0,0]},vv={head:0,body:1,torso:1,leftArm:2,rightArm:3,leftLeg:4,rightLeg:5},UM=vv,NM={leftArm:0,rightArm:1,leftLeg:2,rightLeg:3,torso:4,body:4};function Bp(i,e){let t=e;if(i.dongu&&i.loopBas!==void 0&&i.bitisTick>i.loopBas){if(e>i.bitisTick){const h=i.bitisTick-i.loopBas;t=i.loopBas+(e-i.loopBas)%h}}else i.dongu&&i.donusTick>0&&(t=(e-i.baslangicTick)%i.donusTick+i.baslangicTick);const n=Math.max(t,i.baslangicTick),a=i.palUzay===!0,s={head:[0,0,0],body:[0,0,0],armL:[0,0,0],armR:[0,0,0],legL:[0,0,0],legR:[0,0,0],bend:[0,0,0,0,0],bendTasi:a,konum:gv(),kokDon:[0,0,0],kokKonum:[0,0,0]},r=["head","body","armL","armR","legL","legR"],o=()=>[void 0,void 0,void 0],l=Array.from({length:6},o),c=o(),d=(h,v,m)=>{h[v==="x"?0:v==="y"?1:2]=m};for(const[h,v]of i.kemikler){if(a&&h==="body"){for(const g of Zu){const y=Op(v[g],n);y!==null&&(g==="pitch"?s.kokDon[0]=y:g==="yaw"?s.kokDon[1]=y:g==="roll"?s.kokDon[2]=-y:g==="bend"?s.bend[4]=y:(g==="x"||g==="y"||g==="z")&&d(c,g,y))}continue}const m=vv[h],p=m!==void 0?s[r[m]]:null;for(const g of Zu){const y=Op(v[g],n);if(y!==null){if(p){if(g==="pitch")p[0]=y;else if(g==="yaw")p[1]=y;else if(g==="roll")p[2]=a?-y:y;else if(g==="x"||g==="y"||g==="z"){const T=UM[h];T!==void 0&&d(l[T],g,y)}}if(g==="bend"){const T=NM[h];T!==void 0&&(s.bend[T]+=y)}}}}const f=[[0,24,0],[0,24,0],[5,22,0],[-5,22,0],[1.9,12,0],[-1.9,12,0]];if(a){for(let h=0;h<6;h++){const v=l[h];s.konum[h]=[v[0]??0,v[1]??0,-(v[2]??0)]}return s.kokKonum=[c[0]??0,c[1]??0,-(c[2]??0)],s}const u=[1,0,1,1,0,0];for(let h=0;h<6;h++){const v=l[h],m=s.konum[h];for(let p=0;p<3;p++){if(v[p]===void 0){m[p]=0;continue}let g=v[p];p===1&&u[h]&&(g+=24),m[p]=g-f[h][p]}}return s}const Me=1/24,Fi=64,Bi=32,OM=.2617994,$p=.2617994,FM=9;function Wn(i,e,t,n,a,s,r=!1){const o=i.attributes.uv,l=e*4,c=r?s:n,d=r?n:s;o.setXY(l+0,t/64,1-c/64),o.setXY(l+1,a/64,1-c/64),o.setXY(l+2,t/64,1-d/64),o.setXY(l+3,a/64,1-d/64)}function wo(i){i.magFilter=Xt,i.minFilter=Xt,i.colorSpace=qn}function _v(i,e=!1){return i?new nc({map:i,transparent:e,alphaTest:e?.01:0}):new nc({color:5924466})}function Hp(i,e,t=!1){const n=new ha(i.w*Me,i.h*Me,i.d*Me),{u:a,v:s,w:r,h:o,d:l}=i;return e&&(Wn(n,0,a+l+r,s+l,a+l+r+l,s+l+o),Wn(n,1,a,s+l,a+l,s+l+o),Wn(n,2,a+l,s,a+l+r,s+l),Wn(n,3,a+l+r,s,a+l+r+r,s+l,!0),Wn(n,4,a+l,s+l,a+l+r,s+l+o),Wn(n,5,a+l+r+l,s+l,a+l+r+l+r,s+l+o),wo(e)),new ii(n,_v(e,t))}function Gp(i,e,t,n,a,s){const r=i.attributes.uv,o=(l,c,d,f,u,h=!1)=>{const v=l*4,m=h?u:d,p=h?d:u;r.setXY(v+0,c/Fi,1-m/Bi),r.setXY(v+1,f/Fi,1-m/Bi),r.setXY(v+2,c/Fi,1-p/Bi),r.setXY(v+3,f/Fi,1-p/Bi)};o(0,e+s+n,t+s,e+s+n+s,t+s+a),o(1,e,t+s,e+s,t+s+a),o(2,e+s,t,e+s+n,t+s),o(3,e+s+n,t,e+s+n+n,t+s,!0),o(4,e+s,t+s,e+s+n,t+s+a),o(5,e+s+n+s,t+s,e+s+n+s+n,t+s+a),r.needsUpdate=!0}function Vp(i){const e=Math.max(Fi,Math.round(i.width)),t=Math.max(Bi,Math.round(i.height)),n=document.createElement("canvas");n.width=e,n.height=t;const a=n.getContext("2d");return a&&(a.imageSmoothingEnabled=e!==Fi||t!==Bi,a.imageSmoothingQuality="high",a.drawImage(i,0,0,e,t)),n}function _l(i,e=!1){const t=new ev(i);return wo(t),e&&(t.magFilter=sn,t.minFilter=Ua,t.generateMipmaps=!0),t.needsUpdate=!0,t}function Ld(i,e,t,n){const a=e*Me/2,s=t*Me/2,r=n*Me/2,o=.0015,l=new jg({color:16777215,transparent:!0,opacity:.42,depthWrite:!1}),c=d=>{const f=new Ti;f.setAttribute("position",new mi(d,3));const u=new fb(f,l);u.renderOrder=4,i.add(u)};for(const d of[-r-o,r+o]){const f=[];for(let u=0;u<=e;u++){const h=-a+u*Me;f.push(h,-s,d,h,s,d)}for(let u=0;u<=t;u++){const h=-s+u*Me;f.push(-a,h,d,a,h,d)}c(f)}for(const d of[-a-o,a+o]){const f=[];for(let u=0;u<=n;u++){const h=-r+u*Me;f.push(d,-s,h,d,s,h)}for(let u=0;u<=t;u++){const h=-s+u*Me;f.push(d,h,-r,d,h,r)}c(f)}for(const d of[-s-o,s+o]){const f=[];for(let u=0;u<=e;u++){const h=-a+u*Me;f.push(h,d,-r,h,d,r)}for(let u=0;u<=n;u++){const h=-r+u*Me;f.push(-a,d,h,a,d,h)}c(f)}}function Ea(i,e,t,n=!1){const a=i.h/2,{u:s,v:r,w:o,d:l}=i,c=new ha(i.w*Me,a*Me,i.d*Me);if(t){const d=r+l+(e?a:0),f=d+a;Wn(c,0,s+l+o,d,s+l+o+l,f),Wn(c,1,s,d,s+l,f),Wn(c,2,s+l,r,s+l+o,r+l),e?Wn(c,3,s+l+o,r,s+l+o+o,r+l,!0):Wn(c,3,s+l,r,s+l+o,r+l),Wn(c,4,s+l,d,s+l+o,f),Wn(c,5,s+l+o+l,d,s+l+o+l+o,f),wo(t)}return new ii(c,_v(t,n))}class BM{renderer=null;scene=new tb;camera=new di(38,1,.1,100);kok=null;kalca=null;kemikler=null;bukulenler=null;saat=new Lb;rafId=0;canvas=null;boyutla=null;zaman=0;kameraAci=0;kameraAciHedef=0;kameraYariCap=2.75;kameraYariCapHedef=2.75;kameraY=.34;surukleX=null;isaretciBas=null;isaretciTasi=null;isaretciBirak=null;tekerlek=null;fareEngel=null;baglamEngel=null;durum="idle";sonOynananAd="";durumBitis=0;emoteListe=[];hiz=1;aktif=null;tEmote=0;pelerinGrup=null;pelerinSarkac=null;pelerinDoku=null;pelerinJeton=0;kanatJeton=0;_bekleyenPelerin=null;canliDoku=null;sonCizimAt=0;canliMod=!1;_pelerinTuval=null;kanatGrup=null;kanatDoku=null;kanatAyrikAcik=!1;_bekleyenKanat=null;tabanMeshler=[];ustMeshler=[];oyuncuMeshler=[];oyuncuGorunur=!0;etkilesimKapali=!1;kameraEgim=0;kameraEgimHedef=0;surukleY=null;kaplamaGorunur=!0;kozmetikGorunur=!0;izgaraAcik=!1;modelIzgaraAcik=!1;sahneTemizle(){this.kok&&((this.kok.parent??this.scene).remove(this.kok),this.kok.traverse(e=>{const t=e;t.geometry&&t.geometry.dispose()})),this.scene.clear(),this.kok=null,this.pelerinGrup=null,this.pelerinSarkac=null,this.kanatGrup=null,this.tabanMeshler=[],this.ustMeshler=[],this.oyuncuMeshler=[],this.aktif=null}kur(e){this.renderer&&this.kapati(),this.sahneTemizle(),this.izgaraAcik=!1,this.modelIzgaraAcik=!1,this.canvas=e;try{this.renderer=new AM({canvas:e,alpha:!0,antialias:!0,preserveDrawingBuffer:!0})}catch{return}this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.scene.add(new wb(16777215,.9));const t=new up(16777215,1.7);t.position.set(2,4,5),this.scene.add(t);const n=new up(16755533,.55);if(n.position.set(-3,2,-4),this.scene.add(n),this.camera.position.set(0,.34,2.75),this.camera.lookAt(0,.02,0),this.kameraYariCap=2.75,this.kameraYariCapHedef=2.75,this.yorungeKur(e),this.boyutla=()=>{if(!this.renderer)return;const a=e.clientWidth||e.parentElement?.clientWidth||320,s=e.clientHeight||300;this.renderer.setSize(a,s,!1),this.camera.aspect=a/Math.max(1,s),this.camera.updateProjectionMatrix()},this.boyutla(),window.addEventListener("resize",this.boyutla),this.baslatDongu(),this._bekleyenSkin){const a=this._bekleyenSkin;this._bekleyenSkin=null,this.skin(a)}}yorungeKur(e){this.yorungeKapat(),e.style.cursor="grab",e.style.touchAction="pan-y",this.isaretciBas=t=>{if(t.pointerType==="mouse"){const n=t.button===0;if(n&&this.etkilesimKapali||!n&&t.button!==1&&t.button!==2)return}this.surukleX=t.clientX,this.surukleY=t.clientY,e.style.cursor="grabbing";try{e.setPointerCapture(t.pointerId)}catch{}},this.isaretciTasi=t=>{if(this.surukleX===null)return;const n=t.clientX-this.surukleX,a=t.clientY-(this.surukleY??t.clientY);this.surukleX=t.clientX,this.surukleY=t.clientY,this.kameraAciHedef-=n*.008,this.kameraEgimHedef=Math.max(-.55,Math.min(.95,this.kameraEgimHedef+a*.006))},this.isaretciBirak=t=>{if(this.surukleX!==null){this.surukleX=null,this.surukleY=null,e.style.cursor="grab";try{e.releasePointerCapture(t.pointerId)}catch{}}},e.addEventListener("pointerdown",this.isaretciBas),e.addEventListener("pointermove",this.isaretciTasi),e.addEventListener("pointerup",this.isaretciBirak),e.addEventListener("pointercancel",this.isaretciBirak),this.fareEngel=t=>{t.button===1&&t.preventDefault()},this.baglamEngel=t=>t.preventDefault(),e.addEventListener("mousedown",this.fareEngel),e.addEventListener("auxclick",this.fareEngel),e.addEventListener("contextmenu",this.baglamEngel),this.fareEngel=t=>{t.button===1&&t.preventDefault()},this.tekerlek=t=>{t.preventDefault(),this.zoomAyarla(this.kameraYariCapHedef*(t.deltaY>0?1.12:.89))},e.addEventListener("wheel",this.tekerlek,{passive:!1})}yorungeKapat(){const e=this.canvas;e&&(this.isaretciBas&&e.removeEventListener("pointerdown",this.isaretciBas),this.isaretciTasi&&e.removeEventListener("pointermove",this.isaretciTasi),this.isaretciBirak&&(e.removeEventListener("pointerup",this.isaretciBirak),e.removeEventListener("pointercancel",this.isaretciBirak))),this.isaretciBas=null,this.isaretciTasi=null,this.isaretciBirak=null,this.surukleX=null,e&&this.tekerlek&&e.removeEventListener("wheel",this.tekerlek),this.tekerlek=null,e&&this.fareEngel&&(e.removeEventListener("mousedown",this.fareEngel),e.removeEventListener("auxclick",this.fareEngel)),this.fareEngel=null,e&&this.baglamEngel&&e.removeEventListener("contextmenu",this.baglamEngel),this.baglamEngel=null}boyutGuncelle(){this.boyutla?.()}zoomAyarla(e){this.kameraYariCapHedef=Math.max(1.05,Math.min(5.5,e))}zoomAl(){return this.kameraYariCapHedef}kameraGuncelle(e){const t=Math.min(1,e*14);this.kameraAci+=(this.kameraAciHedef-this.kameraAci)*t,this.kameraEgim+=(this.kameraEgimHedef-this.kameraEgim)*t,this.kameraYariCap+=(this.kameraYariCapHedef-this.kameraYariCap)*Math.min(1,e*10);const n=this.kameraYariCap,a=Math.cos(this.kameraEgim)*n;this.camera.position.set(Math.sin(this.kameraAci)*a,this.kameraY+Math.sin(this.kameraEgim)*n,Math.cos(this.kameraAci)*a),this.camera.lookAt(0,.02,0)}bakisaAyarla(e,t=0){this.kameraAciHedef=e,this.kameraEgimHedef=Math.max(-.55,Math.min(.95,t))}parcaGoster(e,t){const n=this.kemikler;n&&(e==="kafa"?n.head.visible=t:e==="govde"?n.body.visible=t:e==="kollar"?(n.armL.visible=t,n.armR.visible=t):(n.legL.visible=t,n.legR.visible=t))}kaplamaGoster(e){this.kaplamaGorunur=e;for(const t of this.ustMeshler)t.visible=e&&this.oyuncuGorunur}kozmetikGoster(e){this.kozmetikGorunur=e,this.pelerinGrup&&(this.pelerinGrup.visible=e),this.kanatGrup&&(this.kanatGrup.visible=e)}_bekleyenSkin=null;async dokuResmi(e){try{const t=await fetch(e);if(t.ok){const n=await t.blob();return await new Promise((a,s)=>{const r=URL.createObjectURL(n),o=new Image;o.onload=()=>{URL.revokeObjectURL(r),a(o)},o.onerror=()=>{URL.revokeObjectURL(r),s(new Error("görsel açılamadı"))},o.src=r})}}catch{}return await new kb().loadAsync(e)}async skin(e){this.canliMod=!1;let t=null;if(e?.url)try{const n=await this.dokuResmi(e.url),a=document.createElement("canvas");a.width=64,a.height=64;const s=a.getContext("2d");s&&(s.imageSmoothingEnabled=!1,n.height===32?s.drawImage(n,0,0):s.drawImage(n,0,0,64,64),t=new on(a),wo(t),t.needsUpdate=!0)}catch{t=null}this.canliMod||(this._bekleyenSkin=e,this.modelKur(t,e?.slim||!1))}async pelerin(e){if(this._bekleyenPelerin=e,this.pelerinTemizle(),this._pelerinTuval=null,!e?.url)return;const t=++this.pelerinJeton;try{const n=await this.dokuResmi(e.url);if(t!==this.pelerinJeton)return;const a=Vp(n);this.pelerinDoku=_l(a,a.width>Fi||a.height>Bi),this.pelerinMeshKur()}catch{}}pelerinTuval(e){if(this._bekleyenPelerin=null,this._pelerinTuval=e,!e){this.pelerinTemizle();return}if(this.pelerinDoku&&this.pelerinDoku.image===e){this.pelerinDoku.needsUpdate=!0;return}this.pelerinTemizle(),this.pelerinDoku=_l(e),this.pelerinMeshKur()}async kanat(e){if(this._bekleyenKanat=null,this.kanatTemizle(),!e?.url)return;const t=++this.kanatJeton;try{const n=await this.dokuResmi(e.url);if(t!==this.kanatJeton)return;const a=Vp(n);this.kanatDoku=_l(a,a.width>Fi||a.height>Bi),this.kanatMeshKur()}catch{}}kanatTuval(e){if(this._bekleyenKanat=e,!e){this.kanatTemizle();return}if(this.kanatDoku&&this.kanatDoku.image===e){this.kanatDoku.needsUpdate=!0;return}this.kanatTemizle(),this.kanatDoku=_l(e),this.kanatMeshKur()}kanatMeshSil(){this.kanatGrup?.parent&&this.kanatGrup.parent.remove(this.kanatGrup),this.kanatGrup?.traverse(e=>{const t=e;t.geometry?.dispose(),t.material?.dispose()}),this.kanatGrup=null}kanatTemizle(){this.kanatMeshSil(),this.kanatDoku?.dispose(),this.kanatDoku=null}kanatMeshKur(){const e=this.bukulenler?.belUst;if(!e||!this.kanatDoku)return;this.kanatGrup&&this.kanatMeshSil();const t=new nc({map:this.kanatDoku,transparent:!0,alphaTest:.01,side:ki}),n=new Qt;n.position.set(0,6*Me,-2*Me);for(const a of[1,-1]){const s=new Qt;s.position.set(a*5*Me,0,0),s.rotation.order="ZYX";const r=new ha(10*Me,20*Me,2*Me);Gp(r,22,0,10,20,2);const o=new ii(r,t);o.position.set(-a*5*Me,-10*Me,-Me),a<0&&(o.scale.x=-1),Ld(o,10,20,2),s.add(o),s.rotation.x=OM,s.rotation.y=0,s.rotation.z=a*$p,s.userData.yon=a,n.add(s)}n.visible=this.kozmetikGorunur,e.add(n),this.kanatGrup=n,this.kanatAyrikUygula(),this.izgaraYenile()}kanatAyrik(e){this.kanatAyrikAcik!==e&&(this.kanatAyrikAcik=e,this.kanatAyrikUygula())}kanatAyrikUygula(){if(this.kanatGrup)for(const e of this.kanatGrup.children){const t=e.userData.yon||1;e.position.x=t*(5+(this.kanatAyrikAcik?FM:0))*Me}}izgaraGoster(e,t=!1){this.izgaraAcik=e,this.modelIzgaraAcik=e&&t,this.modelIzgaraAcik&&this.modelIzgaralari(),this.izgaraYenile()}izgaraYenile(){for(const e of[this.pelerinGrup,this.kanatGrup])e?.traverse(t=>{t.isLineSegments&&(t.visible=this.izgaraAcik)});for(const e of[...this.tabanMeshler,...this.ustMeshler])for(const t of e.children)t.isLineSegments&&(t.visible=this.modelIzgaraAcik)}modelIzgaralari(){for(const e of[...this.tabanMeshler,...this.ustMeshler]){if(e.children.some(r=>r.isLineSegments))continue;const t=e.geometry.parameters;if(!t)continue;const n=Math.max(1,Math.round(t.width/Me)),a=Math.max(1,Math.round(t.height/Me)),s=Math.max(1,Math.round(t.depth/Me));Ld(e,n,a,s)}}pelerinMeshSil(){this.pelerinGrup?.parent&&this.pelerinGrup.parent.remove(this.pelerinGrup),this.pelerinGrup?.traverse(e=>{const t=e;t.geometry?.dispose(),t.material?.dispose()}),this.pelerinGrup=null,this.pelerinSarkac=null}pelerinTemizle(){this.pelerinMeshSil(),this.pelerinDoku?.dispose(),this.pelerinDoku=null}pelerinMeshKur(){const e=this.bukulenler?.belUst;if(!e||!this.pelerinDoku)return;this.pelerinGrup&&this.pelerinMeshSil();const t=new ha(10*Me,16*Me,1*Me);Gp(t,0,0,10,16,1);const n=new nc({map:this.pelerinDoku,transparent:!0,alphaTest:.01,side:ki}),a=new ii(t,n);a.rotation.y=Math.PI,a.position.set(0,-8*Me,0),Ld(a,10,16,1);const s=new Qt;s.position.set(0,6*Me,-2.5*Me),s.rotation.x=.06,s.visible=this.kozmetikGorunur,s.add(a),e.add(s),this.pelerinGrup=s,this.pelerinSarkac=s,this.izgaraYenile()}tuvalDoku(e,t){const n=new ev(e);wo(n),n.needsUpdate=!0,this.canliMod=!0,this._bekleyenSkin=null,this.canliDoku=n,this.modelKur(n,t)}dokuTazele(){this.canliDoku&&(this.canliDoku.needsUpdate=!0),this.pelerinDoku&&(this.pelerinDoku.needsUpdate=!0),this.kanatDoku&&(this.kanatDoku.needsUpdate=!0)}oyuncuGoster(e){this.oyuncuGorunur=e;for(const t of this.oyuncuMeshler){const n=this.ustMeshler.includes(t);t.visible=e&&(!n||this.kaplamaGorunur)}}atlasNoktasi(e,t="taban"){if(t==="oto")return this.isin(e,[...this.tabanMeshler,...this.ustMeshler],64,64);const n=t==="ust"?this.ustMeshler:this.tabanMeshler;return this.isin(e,n,64,64)}kozmetikNoktasi(e,t){return t==="pelerin"?this.pelerinGrup?this.isin(e,[this.pelerinGrup],Fi,Bi):null:this.kanatGrup?this.isin(e,[this.kanatGrup],Fi,Bi):null}isin(e,t,n,a){const s=this.canvas;if(!s||!this.renderer||t.length===0)return null;const r=s.getBoundingClientRect();if(r.width<1||r.height<1)return null;const o=new st((e.clientX-r.left)/r.width*2-1,-((e.clientY-r.top)/r.height)*2+1),l=new Rb;l.setFromCamera(o,this.camera);const c=l.intersectObjects(t,!0).find(u=>!!u.uv);if(!c?.uv)return null;const d=Math.min(n-1,Math.max(0,Math.floor(c.uv.x*n))),f=Math.min(a-1,Math.max(0,Math.floor((1-c.uv.y)*a)));return{x:d,y:f}}modelKur(e,t){this.kok&&((this.kok.parent??this.scene).remove(this.kok),this.kok.traverse(A=>{const x=A;x.geometry&&x.geometry.dispose()})),this.pelerinGrup=null,this.pelerinSarkac=null,this.tabanMeshler=[],this.ustMeshler=[],this.oyuncuMeshler=[],this.kok=new Qt,this.kok.position.y=-.66,this.kalca=new Qt,this.kalca.position.set(0,12*Me,0),this.kalca.rotation.order="ZYX",this.kok.add(this.kalca),this.kemikler={head:new Qt,body:new Qt,armL:new Qt,armR:new Qt,legL:new Qt,legR:new Qt};const[n,a,s,r,o,l]=[this.kemikler.head,this.kemikler.body,this.kemikler.armL,this.kemikler.armR,this.kemikler.legL,this.kemikler.legR];for(const A of[n,a,s,r,o,l])A.rotation.order="ZYX";const c=Hp({u:0,v:0,w:8,h:8,d:8},e);c.position.set(0,4*Me,0),n.add(c);const d=Hp({u:32,v:0,w:8,h:8,d:8},e,!0);d.scale.setScalar(1.125),d.position.set(0,4*Me,0),n.add(d),this.tabanMeshler.push(c),this.ustMeshler.push(d),this.oyuncuMeshler.push(c,d),a.position.set(0,12*Me,0),a.userData.pivotPx=[0,12,0];const f=(A,x,w,R,L)=>{const z=Ea(x,!1,e);z.position.set(R,w+x.h/4*Me,0),A.add(z);const F=new Qt;F.position.set(0,w,0);const C=Ea(x,!0,e);if(C.position.set(R,-(x.h/4)*Me,0),F.add(C),A.add(F),this.tabanMeshler.push(z,C),this.oyuncuMeshler.push(z,C),L){const $=Z=>{Z.scale.set((L.w+.5)/L.w,(L.h+.25)/L.h,(L.d+.5)/L.d)},D=Ea(L,!1,e,!0);D.position.set(R,w+L.h/4*Me,0),$(D),A.add(D);const P=Ea(L,!0,e,!0);P.position.set(R,-(L.h/4)*Me,0),$(P),F.add(P),this.ustMeshler.push(D,P),this.oyuncuMeshler.push(D,P)}return F},u=new Qt;u.position.set(0,-6*Me,0),u.rotation.order="ZYX";const h=Ea({u:16,v:16,w:8,h:12,d:4},!1,e);h.position.set(0,3*Me,0),u.add(h),a.add(u);const v=Ea({u:16,v:16,w:8,h:12,d:4},!0,e);v.position.set(0,-9*Me,0),a.add(v);const m=Ea({u:16,v:32,w:8,h:12,d:4},!1,e,!0);m.position.set(0,3*Me,0),m.scale.set(1.0625,1.0208,1.125),u.add(m);const p=Ea({u:16,v:32,w:8,h:12,d:4},!0,e,!0);p.position.set(0,-9*Me,0),p.scale.set(1.0625,1.0208,1.125),a.add(p),this.tabanMeshler.push(h,v),this.ustMeshler.push(m,p),this.oyuncuMeshler.push(h,v,m,p);const g=new Qt;g.position.set(0,6*Me,0),g.rotation.order="ZYX";const y=t?3:4;n.position.set(0,6*Me,0),n.userData.pivotPx=[0,6,0],s.position.set(5*Me,4*Me,0),s.userData.pivotPx=[5,4,0];const T=f(s,{u:32,v:48,w:y,h:12,d:4},-4*Me,Me,{u:48,v:48,w:y,h:12,d:4});r.position.set(-5*Me,4*Me,0),r.userData.pivotPx=[-5,4,0];const b=f(r,{u:40,v:16,w:y,h:12,d:4},-4*Me,-Me,{u:40,v:32,w:y,h:12,d:4});o.position.set(1.9*Me,0,0),o.userData.pivotPx=[1.9,0,0];const S=f(o,{u:16,v:48,w:4,h:12,d:4},-6*Me,0,{u:0,v:48,w:4,h:12,d:4});l.position.set(-1.9*Me,0,0),l.userData.pivotPx=[-1.9,0,0];const k=f(l,{u:0,v:16,w:4,h:12,d:4},-6*Me,0,{u:0,v:32,w:4,h:12,d:4});if(this.bukulenler={body:u,belUst:g,armL:T,armR:b,legL:S,legR:k},g.add(n,s,r),this.kalca.add(a,g,o,l),this.scene.add(this.kok),this.oyuncuGorunur){if(!this.kaplamaGorunur)for(const A of this.ustMeshler)A.visible=!1}else for(const A of this.oyuncuMeshler)A.visible=!1;this.modelIzgaraAcik&&this.modelIzgaralari(),this._pelerinTuval&&this.pelerinDoku?this.pelerinMeshKur():this._bekleyenPelerin&&(this.pelerinDoku?this.pelerinMeshKur():this.pelerin(this._bekleyenPelerin)),this._bekleyenKanat&&(this.kanatDoku?this.kanatMeshKur():this.kanatTuval(this._bekleyenKanat))}emoteleriKur(e,t=1,n=0){this.emoteListe=e,this.hiz=t>0?t:1,this.durum="idle",this.durumBitis=this.zaman+(.6+n)/(this.hiz>0?this.hiz:1)}emoteOynat(e){!e||!this.kemikler||(this.aktif=e,this.sonOynananAd=e.adi,this.durum="emote",this.tEmote=e.baslangicTick,this.durumBitis=this.zaman+(e.dongu?3.2:0))}baslatDongu(){const e=()=>{if(this.canvas&&!this.canvas.isConnected){this.kapati(),Na===this&&(Na=null);return}if(this.rafId=requestAnimationFrame(e),document.hidden)return;const t=performance.now(),n=document.hasFocus()?1e3/45:1e3/4;if(t-this.sonCizimAt<n)return;this.sonCizimAt=t;const a=Math.min(.05,this.saat.getDelta());this.zaman+=a,this.adimla(a),this.kameraGuncelle(a),this.renderer&&this.renderer.render(this.scene,this.camera)};e()}adimla(e){if(!this.kemikler)return;let t;this.durum==="idle"?(t=this.idlePozu(this.zaman),this.emoteListe.length&&this.zaman>=this.durumBitis&&(this.aktif=this.emoteListe[Math.floor(Math.random()*this.emoteListe.length)],this.sonOynananAd=this.aktif.adi,this.durum="emote",this.tEmote=this.aktif.baslangicTick,this.aktif.dongu&&(this.durumBitis=this.zaman+10+Math.random()*6),t=Bp(this.aktif,this.tEmote))):this.durum==="emote"&&this.aktif?(this.tEmote+=e*20,(this.aktif.dongu?this.zaman>=this.durumBitis:this.tEmote>=this.aktif.stopTick)?(this.durum="soft",this.durumBitis=this.zaman+.55,t=Fp):t=Bp(this.aktif,this.tEmote)):(t=Fp,this.zaman>=this.durumBitis&&(this.durum="idle",this.durumBitis=this.zaman+(.9+Math.random()*1.8)/this.hiz));const n=this.durum==="soft"?Math.min(1,e*7):1;this.uygula(t,n),this.pelerinSalin(),this.kanatSalin()}kanatSalin(){const e=this.kanatGrup;if(!e)return;const t=Math.sin(this.zaman*2.1);e.rotation.x=t*.045,e.position.y=6*Me+t*.3*Me;for(const n of e.children){const a=n.userData.yon??1;n.rotation.z=a*($p+Math.max(0,t)*.035)}}pelerinSalin(){const e=this.pelerinSarkac;if(!e)return;const t=.06,n=this.durum==="emote"?.075:.03,a=t+Math.sin(this.zaman*1.3)*n;e.rotation.x+=(a-e.rotation.x)*.12,e.rotation.z=Math.sin(this.zaman*.9)*.02}idlePozu(e){const t=Math.sin(e*1.7),n=Math.sin(e*1.13);return{head:[n*2.4,t*4.5,t*1.5],body:[n*.5,0,0],armL:[t*3.6,0,2.6+n*1.4],armR:[-t*3.6,0,-2.6-n*1.4],legL:[-t*1.2,0,0],legR:[t*1.2,0,0],bend:[0,0,0,0,0],konum:[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],kokDon:[0,0,0],kokKonum:[0,0,0]}}uygula(e,t){const n=this.kemikler;if(!n)return;const a=$y.degToRad,s=(o,l,c)=>{const d=a(l[0]),f=-a(l[1]),u=a(l[2]);o.rotation.x+=(d-o.rotation.x)*t,o.rotation.y+=(f-o.rotation.y)*t,o.rotation.z+=(u-o.rotation.z)*t;const h=o.userData.pivotPx||[0,0,0],v=e.konum[c],m=(h[0]+v[0])*Me,p=(h[1]+v[1])*Me,g=(h[2]+v[2])*Me;o.position.x+=(m-o.position.x)*t,o.position.y+=(p-o.position.y)*t,o.position.z+=(g-o.position.z)*t};s(n.head,e.head,0),s(n.body,e.body,1),s(n.armL,e.armL,2),s(n.armR,e.armR,3),s(n.legL,e.legL,4),s(n.legR,e.legR,5);const r=this.bukulenler;if(r){const o=(l,c)=>{const d=a(c);l.rotation.x+=(d-l.rotation.x)*t};o(r.armL,e.bend[0]),o(r.armR,e.bend[1]),o(r.legL,e.bend[2]),o(r.legR,e.bend[3]),o(r.body,e.bend[4]),o(r.belUst,e.bendTasi===!0?e.bend[4]:0)}if(this.kalca){const o=e.kokDon;this.kalca.rotation.x+=(a(o[0])-this.kalca.rotation.x)*t,this.kalca.rotation.y+=(-a(o[1])-this.kalca.rotation.y)*t,this.kalca.rotation.z+=(a(o[2])-this.kalca.rotation.z)*t;const l=e.kokKonum,c=l[0]*Me,d=(12+l[1])*Me,f=l[2]*Me;this.kalca.position.x+=(c-this.kalca.position.x)*t,this.kalca.position.y+=(d-this.kalca.position.y)*t,this.kalca.position.z+=(f-this.kalca.position.z)*t}this.kok&&(this.kok.position.y+=(-.66-this.kok.position.y)*t)}kapati(){this.sahneTemizle(),cancelAnimationFrame(this.rafId),this.rafId=0,this.boyutla&&window.removeEventListener("resize",this.boyutla),this.boyutla=null,this.yorungeKapat(),this.pelerinTemizle(),this.kanatTemizle(),this._bekleyenPelerin=null,this._bekleyenKanat=null,this._pelerinTuval=null,this.canliDoku?.dispose(),this.canliDoku=null,this.renderer?.dispose(),this.renderer=null,this.kemikler=null,this.bukulenler=null,this.kok=null,this.kalca=null,this.aktif=null,this.canvas=null,this.durum="idle"}}let Na=null;function Fn(){return Na||(Na=new BM),window.__sahne=Na,Na}function Tc(){Na?.kapati(),Na=null,window.__sahne=null}const Te=128,pn=96;function An(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function Y(i,e,t,n=1,a=1,s="#fff"){i.fillStyle=s,i.fillRect(Math.round(e),Math.round(t),Math.round(n),Math.round(a))}function ri(i,e,t=pn){const n=Math.ceil(t/e.length);e.forEach((a,s)=>Y(i,0,s*n,Te,n+1,a));for(let a=1;a<e.length;a++){const s=a*n,r=An(a*977);for(let o=0;o<Te;o+=2)r()>.45&&(Y(i,o,s-1,1,1,e[a-1]),r()>.6&&Y(i,o+1,s-1,1,1,e[a]))}}function Hr(i,e,t,n,a,s){Y(i,e+3,t+3,n,3,a),Y(i,e,t+5,n+6,3,a),Y(i,e+2,t+8,n-2,2,s),Y(i,e+6,t+2,n-8,2,a),Y(i,e+4,t+10,n-6,1,s)}function ji(i,e,t,n,a){const s=An(a);for(let r=0;r<6;r++){const o=Math.floor(s()*Te),l=18+Math.floor(s()*26);for(let c=0;c<l;c++){const d=Math.max(1,Math.round(c/l*(16+r%3*6)));Y(i,o-d,e-c,d*2,1,t)}Y(i,o-1,e-l+1,2,2,n)}}function Qi(i,e,t,n,a=30){const s=An(n);for(let r=0;r<e;r++){const o=Math.floor(s()*Te),l=a+Math.floor(s()*(pn-a));Y(i,o,l,1,1,t[Math.floor(s()*t.length)])}}const Ju=[{id:"kiraz",ad:"Kiraz Korusu",etiket:"Pembe taç, düşen yapraklar",ciz(i){ri(i,["#f6d8e4","#f1c6d8","#e8b0ca","#cf8fb4"],70),Y(i,0,62,Te,8,"#b98aa6"),Y(i,0,68,Te,8,"#8f6377"),ji(i,64,"#a97a95","#d9aec6",41);const e=(n,a,s)=>{const r=An(s),o=78;Y(i,n,o-a,3,a,"#5d3b46"),Y(i,n+1,o-a,1,a,"#7a5260");const l=12+Math.floor(r()*5);for(let c=0;c<3;c++){const d=n+1+Math.round((r()-.5)*14),f=o-a-Math.round(r()*14)-c*4;for(let u=-l;u<=l;u++){const h=Math.round(Math.sqrt(Math.max(0,l*l-u*u))*1.15);h<=0||Y(i,d-h,f+u,h*2,1,u<0?"#f7b8d2":"#e795b6")}for(let u=0;u<10;u++){const h=Math.round((r()-.5)*l*1.6),v=Math.round((r()-.5)*l*1.6);Y(i,d+h,f+v,1,1,r()>.5?"#ffd3e4":"#d47fa1")}}};e(18,26,7),e(96,30,19),e(58,22,31),Y(i,0,78,Te,pn-78,"#7fa86a"),Y(i,0,78,Te,2,"#9dc484"),Y(i,0,90,Te,6,"#5d7f4f");const t=An(53);for(let n=0;n<70;n++)Y(i,t()*Te,12+t()*62,1,1,t()>.5?"#ffd3e4":"#f2a7c4")}},{id:"nether",ad:"Nether Kalesi",etiket:"Obsidyen kule, lav parıltısı",ciz(i){ri(i,["#2a0d13","#4a1119","#6d1a1e","#8f2a20"],56),Y(i,0,52,Te,6,"#ff6a1a"),Y(i,0,52,Te,2,"#ffa347"),Y(i,0,56,Te,2,"#c93d0c"),Y(i,0,40,Te,14,"#2b1218"),Y(i,12,26,16,30,"#1c0a10"),Y(i,12,22,16,5,"#2f121a"),Y(i,96,18,20,42,"#1c0a10"),Y(i,96,14,20,5,"#2f121a"),Y(i,44,34,34,26,"#22101a"),Y(i,44,30,34,4,"#331522");const e=An(17);for(let t=0;t<16;t++){const n=46+Math.floor(e()*30),a=36+Math.floor(e()*20);Y(i,n,a,2,3,"#ff9b3d")}Y(i,18,32,2,3,"#ffb04d"),Y(i,102,26,2,3,"#ffb04d"),Y(i,0,70,Te,26,"#120810");for(let t=0;t<Te;t+=16)Y(i,t,70,15,8,"#1b0d17"),Y(i,t+1,71,13,2,"#241322");Y(i,0,84,Te,4,"#ff5a14"),Y(i,0,84,Te,1,"#ffb44d"),Y(i,0,88,Te,8,"#120810"),Qi(i,40,["#ff8a2a","#ffc061","#ff5a14"],91,24)}},{id:"end",ad:"End Şehri",etiket:"Mor boşluk, koros kuleler",ciz(i){ri(i,["#150c22","#1d1030","#26143d","#2f1a49"],62),Qi(i,55,["#e7d6ff","#b795f0","#8e6bd0"],13,4),Y(i,0,58,Te,10,"#241436"),Y(i,0,58,Te,2,"#3a2152");const e=(n,a,s)=>{Y(i,n,a,9,s,"#3d2a56"),Y(i,n+1,a,2,s,"#55406f"),Y(i,n+7,a,2,s,"#2a1c3d"),Y(i,n-2,a-3,13,3,"#63498a"),Y(i,n-1,a-6,11,3,"#4a3568"),Y(i,n+2,a-9,5,3,"#63498a")};e(16,30,30),e(74,22,38),e(104,36,24);const t=(n,a)=>{Y(i,n,a,2,6,"#efe4ff"),Y(i,n-2,a+1,6,3,"rgba(200,170,255,0.35)"),Y(i,n,a+6,2,2,"#b795f0")};t(20,24),t(78,16),t(108,30),Y(i,30,46,14,4,"#2c1a41"),Y(i,34,50,6,3,"#1e1130"),Y(i,96,50,10,3,"#2c1a41"),Y(i,0,68,Te,pn-68,"#1b1029"),Y(i,0,68,Te,3,"#34204a");for(let n=4;n<Te;n+=14)Y(i,n,76,9,2,"#2a1a3d");Qi(i,22,["#c9b3f5","#8e6bd0"],71,70)}},{id:"bastion",ad:"Bastion",etiket:"Karataş surlar, altın damar",ciz(i){ri(i,["#2b0b0b","#451014","#5d1717","#74201b"],50),Y(i,0,46,Te,8,"#8a2a1c");const e=(t,n,a,s)=>{Y(i,t,n,a,s,"#221a1f"),Y(i,t,n,a,2,"#33272e");for(let r=4;r<s;r+=8)Y(i,t+2,n+r,a-4,1,"#1a1318")};e(0,24,30,46),e(98,18,30,52),e(34,34,60,36);for(let t=36;t<92;t+=12)Y(i,t,38,6,6,"#120d10");Y(i,4,28,8,8,"#120d10"),Y(i,104,24,8,8,"#120d10"),Y(i,8,50,4,4,"#ffcf4d"),Y(i,14,54,2,2,"#e0a81f"),Y(i,106,44,5,5,"#ffcf4d"),Y(i,60,52,4,4,"#ffcf4d"),Y(i,66,56,2,2,"#e0a81f"),Y(i,0,70,Te,26,"#150f12"),Y(i,0,74,Te,6,"#ff6418"),Y(i,0,74,Te,1,"#ffb44d"),Y(i,0,80,Te,16,"#150f12"),Qi(i,26,["#ffb44d","#ff7a20"],33,60)}},{id:"mantar",ad:"Mantar Adası",etiket:"Dev şapkalar, turkuaz gök",ciz(i){ri(i,["#0d2b33","#123a44","#17505a","#1d6b70"],74),Hr(i,22,18,22,"#2d6f74","#1d5259"),Hr(i,76,12,30,"#2d6f74","#1d5259"),Y(i,0,66,Te,10,"#2f6b52"),Y(i,0,66,Te,2,"#4b8b68");const e=(n,a,s)=>{const r=An(s),o=4+Math.floor(r()*2);Y(i,n,74-a,o,a,"#e6d7bd"),Y(i,n,74-a,1,a,"#f3e9d6"),Y(i,n+o-1,74-a,1,a,"#c9b797");const l=74-a-10;for(let c=0;c<10;c++){const d=Math.round(14-c*1.1);Y(i,n+o/2-d,l+c,d*2,1,c<4?"#e14a3a":"#c33a2e")}for(let c=0;c<9;c++)Y(i,n+o/2-12+r()*24,l+2+r()*7,2,1,"#fff3e2")};e(22,30,3),e(72,40,9),e(104,24,15),Y(i,0,74,Te,pn-74,"#3f7c5c"),Y(i,0,74,Te,2,"#5b9d77"),Y(i,0,86,Te,10,"#2c5a44");const t=An(61);for(let n=0;n<48;n++)Y(i,t()*Te,10+t()*60,1,1,t()>.5?"#a9f0d8":"#7fd6be")}},{id:"buz",ad:"Buz Diyarı",etiket:"Aurora, buzdağı",ciz(i){ri(i,["#071226","#0c1d3a","#122b52","#19396b"],60);for(let n=0;n<4;n++){const a=12+n*7;for(let s=0;s<Te;s++){const r=Math.round(Math.sin(s/Te*Math.PI*2+n)*3);Y(i,s,a+r,1,2,n%2?"rgba(94,255,206,0.30)":"rgba(122,182,255,0.28)")}}Qi(i,40,["#ffffff","#cfe6ff","#9fc4ff"],29,2),ji(i,60,"#2a4a74","#7fa8d6",77);const e=(n,a,s,r)=>{for(let o=0;o<r;o++){const l=Math.round(s*(1-o/r)*.9);Y(i,n-l/2+o*.4,a+o,l,1,o<r*.4?"#d6ecff":"#a6cbe8")}Y(i,n,a+2,2,r-4,"#ffffff")};e(22,46,26,26),e(96,52,30,20),e(60,58,18,14),Y(i,0,72,Te,pn-72,"#0f2a4a"),Y(i,0,72,Te,2,"#2b5f8c");for(let n=0;n<24;n++){const a=An(n*13);Y(i,a()*Te,76+a()*18,6+a()*10,1,"#1f4b72")}const t=An(83);for(let n=0;n<26;n++)Y(i,t()*Te,28+t()*44,1,1,"#ffffff")}},{id:"col",ad:"Çöl Tapınağı",etiket:"Kum piramit, sıcak pus",ciz(i){ri(i,["#f7dfa8","#f3cf86","#e8b969","#d9a052"],62),Y(i,96,12,12,12,"#fff3cf"),Y(i,94,10,16,16,"rgba(255,235,180,0.25)");for(let t=0;t<4;t++){const n=54+t*6;Y(i,0,n,Te,6,t<2?"#d8ab68":"#c1924f"),Y(i,0,n,Te,1,"#e8c584")}const e=22;for(let t=0;t<34;t++){const n=Math.round(8+t*1.7);Y(i,46-n/2,e+t,n,1,t%7===0?"#c79a55":"#dcb271"),Y(i,46-n/2,e+t,2,1,"#f0d29a")}Y(i,42,40,8,16,"#6b4d28"),Y(i,43,42,6,14,"#3d2b14"),Y(i,18,52,3,22,"#7b5a34");for(let t=0;t<5;t++){const n=t<2?-1:1;for(let a=0;a<8;a++)Y(i,19+n*a,52-a+Math.abs(a-3),2,1,t%2?"#5f8f4a":"#7aa85c")}Y(i,0,78,Te,pn-78,"#e0b877"),Y(i,0,78,Te,2,"#f2d49b");for(let t=6;t<Te;t+=18)Y(i,t,86,5,2,"#c69a5c")}},{id:"okyanus",ad:"Okyanus Anıtı",etiket:"PriZmarin, ışık huzmeleri",ciz(i){ri(i,["#0a2a3a","#0c3446","#0e3f52","#104a5e"],40);for(let n=0;n<6;n++){const a=8+n*21;for(let s=0;s<66;s++){const r=2+s*.18;Y(i,a+s*.12,s,r,1,"rgba(150,240,255,0.06)")}}const e=(n,a,s,r)=>{Y(i,n,a,s,r,"#2f7d76"),Y(i,n,a,s,2,"#48a89a"),Y(i,n,a+r-2,s,2,"#1f5b57")};e(28,30,72,34),e(40,22,48,10),e(52,14,24,10),Y(i,60,18,8,4,"#a8f0e2"),Y(i,62,16,4,2,"#e0fff8"),Y(i,34,40,4,4,"#d9b34a"),Y(i,90,46,4,4,"#d9b34a");for(let n=32;n<96;n+=12)Y(i,n,52,6,2,"#1d4a48");Y(i,0,64,Te,pn-64,"#0b2c33"),Y(i,0,64,Te,3,"#164a4a");const t=An(47);for(let n=0;n<16;n++){const a=t()*Te,s=6+t()*12;Y(i,a,78-s,2,s,t()>.5?"#1f6b55":"#2b8a63")}Qi(i,30,["#8fe8dd","#c8fff6"],11,8)}},{id:"gunbatimi",ad:"Kızıl Gün Batımı",etiket:"Turuncu gökyüzü, kuğular",ciz(i){ri(i,["#3b1d3f","#6b2b45","#a8453f","#d96b36","#f0a03c"],64);const e=84,t=58;for(let a=6;a>=0;a--)Y(i,e-7+(6-a)*.4,t-a,14-(6-a)*.8,1,a%2?"#ffd27a":"#fff3c4");for(let a=5;a>=0;a--)Y(i,e-5,t-a+1,10,1,"#ffe6a3");ji(i,66,"#8c3a4d","#d98a63",7),ji(i,72,"#5f2a44","#a45c60",13),ji(i,78,"#3b1c33","#7a3b50",29),Y(i,0,74,Te,pn-74,"#2a1730");for(let a=74;a<92;a+=2)Y(i,0,a,Te,1,a%4===0?"#4a2440":"#351a33");for(let a=0;a<9;a++){const s=10-a;Y(i,e-s/2+(a%2?1:-1),76+a*2,Math.max(2,s),1,"rgba(255,196,110,0.5)")}for(let a=0;a<5;a++)Y(i,20+a*26,80+(a%2?2:0),8,1,"rgba(255,220,180,0.18)");const n=(a,s)=>{Y(i,a,s,1,1,"#3a2130"),Y(i,a-3,s-2,3,1,"#3a2130"),Y(i,a+1,s-2,3,1,"#3a2130")};n(30,26),n(36,22),n(58,30),n(21,33),Qi(i,22,["#ffe6b0","#ffd07a"],9,6)}},{id:"sehir",ad:"Neon Şehir Gece",etiket:"Cam kuleler, kırmızı-mavi neon",ciz(i){ri(i,["#05070f","#080d1a","#0b1526","#0e1d33"],54),Qi(i,34,["#cfe0ff","#8fa8d8"],3,6);const e=An(71);for(let n=0;n<9;n++){const a=8+Math.floor(e()*14),s=16+Math.floor(e()*22);Y(i,n*15+(n%2?2:0),60-s,a,s+4,"#0a1120")}const t=(n,a,s)=>{Y(i,n,60-s,a,s+4,"#111a2c"),Y(i,n,60-s,a,1,"#243350");for(let r=60-s+3;r<62;r+=4)for(let o=n+2;o<n+a-2;o+=4)e()>.45&&Y(i,o,r,2,2,e()>.6?"#ffd479":"#9fd0ff")};t(4,16,34),t(24,12,22),t(40,18,44),t(62,10,28),t(76,20,38),t(100,14,26),Y(i,45,40,8,2,"#ff4d6d"),Y(i,45,45,4,2,"#ff4d6d"),Y(i,82,34,6,2,"#4dd8ff"),Y(i,48,12,1,6,"#243350"),Y(i,47,11,3,2,"#ff5a5a"),Y(i,0,64,Te,pn-64,"#070b14");for(let n=0;n<24;n++){const a=Math.floor(e()*Te);Y(i,a,66+n%5*5,3,1,e()>.5?"rgba(255,90,120,0.22)":"rgba(90,180,255,0.18)")}}},{id:"aurora",ad:"Aurora Gölü",etiket:"Kuzey ışıkları, su yansıması",ciz(i){ri(i,["#030617","#061029","#0a1a38","#0d2044"],58),Qi(i,40,["#e8f0ff","#a8bce0"],3,6);for(let t=0;t<3;t++){const n=t===0?"rgba(90,255,190,":t===1?"rgba(90,200,255,":"rgba(190,140,255,";for(let a=0;a<Te;a++){const s=8+t*7+Math.round(Math.sin(a*.12+t)*5)+Math.round(Math.sin(a*.05)*3),r=3+Math.round(Math.abs(Math.sin(a*.09+t*2))*2);for(let o=0;o<r;o++)Y(i,a,s+o,1,1,n+(.34-o*.09).toFixed(2)+")")}}ji(i,60,"#0d1c33","#1b3555",19),ji(i,66,"#091426","#132741",37),Y(i,0,70,Te,pn-70,"#050a18");for(let t=70;t<96;t+=2)Y(i,0,t,Te,1,t%4===0?"#0b1a30":"#070f1f");for(let t=0;t<26;t++){const n=t*13%Te,a=72+t%4*5;Y(i,n,a,2,1,t%3===0?"rgba(90,255,190,0.16)":"rgba(90,200,255,0.12)")}const e=An(23);for(let t=0;t<30;t++)Y(i,Math.floor(e()*Te),Math.floor(e()*66),1,1,"rgba(255,255,255,0.45)")}},{id:"cicek",ad:"Çiçek Vadisi",etiket:"Güneşli çayır, kelebekler",ciz(i){ri(i,["#bfe9ff","#a8dcff","#cdeeff","#e8f6d8"],50),Hr(i,16,12,22,"#ffffff","#d6ecff"),Hr(i,70,20,26,"#ffffff","#d6ecff"),Hr(i,44,8,16,"#ffffff","#e2f2ff");for(let n=0;n<5;n++)Y(i,10+n*26,30+n,1,20,"rgba(255,240,180,0.14)");ji(i,54,"#8fbf6a","#c6e39a",11),ji(i,60,"#6da356","#a5cf84",27),Y(i,0,64,Te,10,"#7fb35c"),Y(i,0,74,Te,10,"#6da356"),Y(i,0,84,Te,pn-84,"#5c8f4c");const e=An(61);for(let n=0;n<34;n++){const a=Math.floor(e()*Te),s=66+Math.floor(e()*30),r=3+Math.floor(e()*3);Y(i,a,s-r,1,r,"#4a7a3c");const o=["#ffd85e","#ff8fa3","#ffffff","#c79bff","#ff9a4d"][Math.floor(e()*5)];Y(i,a-1,s-r-1,3,2,o),Y(i,a,s-r-1,1,1,"#fff3b0")}const t=(n,a)=>{Y(i,n,a,2,1,"#ffffff"),Y(i,n-2,a,2,1,"#ffe6a3"),Y(i,n+2,a+1,2,1,"#ffe6a3")};t(26,40),t(72,46),t(94,34)}},{id:"ozel",ad:"Özel fotoğraf",etiket:"Kendi seçtiğin resim",ciz(i){i.clearRect(0,0,Te,pn)}}],Nl=Ju;function yv(i){return Ju.find(e=>e.id===i)||Ju[0]}function ic(i,e){const t=i.getContext("2d");t&&((i.width!==Te||i.height!==pn)&&(i.width=Te,i.height=pn),t.imageSmoothingEnabled=!1,t.clearRect(0,0,Te,pn),yv(e).ciz(t))}const $M=`{
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
                "easing": "outQuad",
                "rightArm": {
                    "yaw": 88
                },
                "head": {
                    "roll": 5
                },
                "leftArm": {
                    "roll": -6
                }
            },
            {
                "tick": 6,
                "easing": "OutBack",
                "rightArm": {
                    "roll": 168
                }
            },
            {
                "tick": 13,
                "easing": "OutBack",
                "rightArm": {
                    "roll": 112
                }
            },
            {
                "tick": 20,
                "easing": "OutBack",
                "rightArm": {
                    "roll": 168
                }
            },
            {
                "tick": 27,
                "easing": "OutBack",
                "rightArm": {
                    "roll": 112
                }
            },
            {
                "tick": 34,
                "easing": "OutBack",
                "rightArm": {
                    "roll": 168
                }
            },
            {
                "tick": 41,
                "easing": "OutBack",
                "rightArm": {
                    "roll": 112
                }
            },
            {
                "tick": 47,
                "easing": "OutBack",
                "rightArm": {
                    "roll": 168
                }
            },
            {
                "tick": 50,
                "easing": "outQuad",
                "rightArm": {
                    "yaw": 0,
                    "roll": 0
                },
                "head": {
                    "roll": 0
                },
                "leftArm": {
                    "roll": 0
                }
            }
        ]
    }
}`;let Ct=null;const qp=()=>document.documentElement.getAttribute("data-world")==="sahne",HM=()=>document.documentElement.getAttribute("data-world")==="modern",bv=i=>{if(!i)return"hiç";const e=Math.round((Date.now()-i)/6e4);if(e<1)return"şimdi";if(e<60)return`${e} dk önce`;const t=Math.round(e/60);return t<24?`${t} saat önce`:`${Math.round(t/24)} gün önce`};function GM(i){const e=ie.instances[0];(!Ct||!ie.instances.find(c=>c.id===Ct))&&(Ct=e?.id||null);const t=ie.instances.find(c=>c.id===Ct),n=bn(),a=c=>!!c&&(c.includes("/")||c.includes("\\")),s=[...ie.instances].sort((c,d)=>(d.last_played||0)-(c.last_played||0)),r=s[0]||null,o=s.slice(0,5);i.innerHTML=`
    <div class="imp-root">
      <div class="imp-main">
        <div class="imp-brand">
          <div class="imp-brand-orta">
            <span class="imp-chip imp-sari">YIKIM</span>
            <span class="imp-chip imp-gri">LIENT</span>
          </div>
          <span class="imp-counter">${ie.instances.length} kurulum</span>
        </div>

        <div class="imp-banner${t?.cover?" kapakli":""}"${t?.cover?` style="background-image:url('${ht(t.cover)}')"`:""}>
          <div class="vitrin"><canvas id="sahne-arka" class="sahne-arka"></canvas><canvas id="sahne-katman"></canvas></div>
          <button class="imp-ad-chip" id="i-ad" title="Hesap yönetimi">
            ${n?.name?`<img src="${$o(n)}" alt="" draggable="false" ${Ho(n)}><b>${mr(n.id)}${n.name}</b><small>hesabı yönet</small>`:"<b>hesap yok</b><small>giriş yap</small>"}
          </button>
          ${t?`<button class="imp-buyut" id="i-menu" title="${t.name}">${H("gear")}</button>`:""}
        </div>

        <div class="imp-profil-baslik">
          <span>${H("grid")} SON OYNANAN PROFİLLER</span>
          <span class="imp-pill">
            <span class="pill sel">${t?.mod_loader?Oa(t.mod_loader):"Java"}</span>
            <span class="pill">${t?.mc_version||"—"}</span>
          </span>
        </div>
        <div class="imp-profiller" id="i-profil-satirlar"></div>

        <div class="imp-alt">
          <button class="imp-tam imp-sari-tam" id="i-yonet">${H("grid")} TÜM PROFİLLERİ YÖNET</button>
          <button class="imp-tam imp-gri-tam" id="i-mod">${H("plus")} MOD EKLE</button>
        </div>
      </div>

      <div class="imp-yan">
        <div class="imp-news-head">
          <b>● SON HABERLER</b>
          <button class="imp-link" id="i-haber-tumu">Tümü →</button>
        </div>
        <div class="imp-news" id="i-news"><div class="imp-news-kart yukleniyor"></div></div>

        <div class="imp-hizli">
          <div class="imp-hizli-bas">${H("play")} HIZLI GİRİŞ</div>
          ${r?`
          <button class="imp-hizli-satir${Ke.activeId===r.id?" durdur":""}" id="i-hizli-oyla" ${Ke.activeId&&Ke.activeId!==r.id?'disabled data-kilitli="1"':""}>
            <b>${r.last_server?r.last_server:r.name}${Ke.activeId===r.id?" — AÇIK":""}</b>
            <small>${r.last_server?`${r.name} · ${Oa(r.mod_loader)} · ${r.mc_version}`:`${Oa(r.mod_loader)} · ${r.mc_version}`}</small>
          </button>
          <button class="imp-hizli-satir pas" id="i-hizli-liste">Tümünü gör →</button>`:`
          <button class="imp-hizli-satir pas" id="i-hizli-liste">İlk kurulumu oluştur</button>`}
        </div>
      </div>
    </div>
  `;const l=i.querySelector("#i-profil-satirlar");for(const c of o){const d=gi(`
      <div class="imp-satir${Ke.activeId===c.id?" oyunda":""}${c.id===Ct?" secili":""}" role="button" tabindex="0" data-id="${c.id}">
        <span class="imp-satir-ikon">${a(c.icon)?`<img src="${ht(c.icon)}" draggable="false" />`:`<span class="emoji">${c.icon||"🔥"}</span>`}</span>
        <span class="imp-satir-yazi">
          <b class="imp-satir-ad">${c.name}</b>
          <small>${Oa(c.mod_loader)} · ${c.mc_version} — ${bv(c.last_played)}</small>
        </span>
        <button class="imp-oyla${Ke.activeId===c.id?" durdur":""}" ${Ke.activeId&&Ke.activeId!==c.id?'disabled data-kilitli="1"':""}
          title="${Ke.activeId===c.id?"Oyunu kapat":`${c.name} — OYNA`}">${H(Ke.activeId===c.id?"stop":"play")} ${Ke.activeId===c.id?"DURDUR":"OYNA"}</button>
        <button class="imp-diyis" title="Düzenle">${H("gear")}</button>
      </div>
    `);d.addEventListener("click",f=>{const u=c.id;if(f.target.closest(".imp-diyis")){qe("instances",u);return}if(f.target.closest(".imp-oyla")){Ke.activeId===c.id&&Ol();return}Ct=u,qe("instances",u)}),d.querySelector(".imp-oyla")?.addEventListener("click",f=>f.stopPropagation()),l.appendChild(d)}l.querySelectorAll(".imp-satir").forEach(c=>{const d=c.dataset.id||"";c.querySelector(".imp-oyla")?.addEventListener("click",async f=>{if(f.stopPropagation(),Ke.activeId===d)return Ol();if(!ie.accounts.length)return dn();const{launchInstance:u}=await it(async()=>{const{launchInstance:h}=await Promise.resolve().then(()=>vt);return{launchInstance:h}},void 0);u(d)})}),i.querySelector("#i-yonet")?.addEventListener("click",()=>qe("instances")),i.querySelector("#i-mod")?.addEventListener("click",()=>qe("explore")),i.querySelector("#i-menu")?.addEventListener("click",()=>{Ct&&qe("instances",Ct)}),i.querySelector("#i-ad")?.addEventListener("click",()=>dn()),i.querySelector("#i-haber-tumu")?.addEventListener("click",()=>qe("news")),i.querySelector("#i-hizli-liste")?.addEventListener("click",()=>qe("instances")),i.querySelector("#i-hizli-oyla")?.addEventListener("click",async()=>{if(!r)return;if(Ke.activeId===r.id)return Ol();if(!ie.accounts.length)return dn();const{launchInstance:c}=await it(async()=>{const{launchInstance:d}=await Promise.resolve().then(()=>vt);return{launchInstance:d}},void 0);c(r.id,r.last_server||null)}),Ff(i,n)}async function Ol(){try{await te("cmd_kill_game")}catch{}const{refreshState:i}=await it(async()=>{const{refreshState:e}=await Promise.resolve().then(()=>vt);return{refreshState:e}},void 0);await i(!0)}async function VM(i){const e=i.querySelector("#i-news");if(e)try{const t=await te("cmd_list_yikim_news");t.sort((n,a)=>(a.pinned?1:0)-(n.pinned?1:0)||a.date.localeCompare(n.date)),e.innerHTML="";for(const n of t.slice(0,2)){const a=gi(`
        <div class="imp-news-kart" role="button" tabindex="0">
          <div class="imp-news-img"${n.image?` style="background-image:url('${n.image}')"`:""}></div>
          <div class="imp-news-govde">
            <span class="imp-news-chip${n.pinned?" sar":""}">${n.pinned?"DUYURU":"YIKIM"}</span>
            <b>${n.title}</b>
            <small>${n.date}</small>
          </div>
        </div>
      `);a.addEventListener("click",()=>qe("news")),e.appendChild(a)}}catch{}}function qM(i){const e=ie.instances[0];(!Ct||!ie.instances.find(f=>f.id===Ct))&&(Ct=e?.id||null);const t=ie.instances.find(f=>f.id===Ct)||null,n=bn(),a=f=>!!f&&(f.includes("/")||f.includes("\\")),s=[...ie.instances].sort((f,u)=>(u.last_played||0)-(f.last_played||0)),r=yv(String(ie.config?.sahne_arka||"nether")),o=ie.sys?.total_ram_mb||16384,l=t?Math.min(100,Math.round(t.ram_mb/o*100)):0,c=!!t&&Ke.activeId===t.id,d=t?a(t.icon)?`<img src="${ht(t.icon)}" alt="" draggable="false" />`:`<span class="emoji">${t.icon||"🔥"}</span>`:"";i.innerHTML=`
    <div class="md-root">
      <div class="md-stage" aria-hidden="true">
        <canvas id="sahne-arka" class="sahne-arka"></canvas>
        <div class="md-scrim"></div>
        <canvas id="sahne-katman"></canvas>
      </div>

      <div class="md-main">
        <div class="md-stage-head">
          <span class="md-kicker">YIKIM Lient · Modern</span>
          <h1>${n?`${mr(n.id)}${n.name}`:"Hoş geldin"}</h1>
          <p>${r.ad} — ${r.etiket}</p>
          <button class="md-scene" id="md-scene" title="Sahneyi değiştir">
            ${H("image")} <span>Sahneyi değiştir</span>
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
              ${c?`<button class="md-play md-stop" id="h-stop">${H("stop")} DURDUR</button>`:`<button class="md-play" id="h-play" ${Ke.activeId?"disabled":""}>${H("play")} ${Ke.activeId?"OYUN AÇIK":"OYNA"}</button>`}
              <div class="md-links">
                <button class="md-link" id="h-manage">${H("gear")} Yönet</button>
                <button class="md-link" id="h-new">${H("plus")} Yeni</button>
                <button class="md-link" id="h-all">${H("grid")} Tümü</button>
              </div>
            `:`
              <p class="md-empty-p">Henüz kurulum yok. İlk kurulumunu oluştur — sürümü seç,
                gerisini YIKIM halleder.</p>
              <button class="md-play" id="h-new">${H("plus")} KURULUM OLUŞTUR</button>
            `}
          </div>

          <div class="md-pane" data-mdpane="son">
            ${s.length?s.slice(0,5).map(f=>{const u=a(f.icon)?`<img src="${ht(f.icon)}" alt="" draggable="false" />`:`<span class="emoji">${f.icon||"🔥"}</span>`;return`
              <button class="md-recent" data-id="${f.id}">
                <span class="md-recent-icon">${u}</span>
                <span class="md-recent-text">
                  <b>${f.name}</b>
                  <small>${Oa(f.mod_loader)} · ${f.mc_version}</small>
                </span>
                <span class="md-recent-time">${bv(f.last_played)}</span>
                <span class="md-recent-play" role="button" title="Oyna">${H("play")}</span>
              </button>`}).join(""):'<p class="md-empty-p">Henüz oynanmış kurulum yok.</p>'}
          </div>
        </aside>
      </div>

      <footer class="md-status">
        <button class="md-acc" id="md-acc" title="Hesabı yönet">
          ${n?`<img src="${$o(n)}" alt="" draggable="false" ${Ho(n)} />`:`<span class="md-acc-ph">${H("user")}</span>`}
          <span>${n?`${mr(n.id)}${n.name}`:"Giriş yap"}</span>
        </button>
        <span class="md-dot" data-durum="${Ke.activeId?"oyun":"hazir"}"></span>
        <span class="md-hint">${Ke.activeId?"Oyun açık — pencereyi kapatmak launcher'ı küçültür.":"Sağ Shift: oyun içi menü · Sağ Ctrl: HUD"}</span>
        <span class="md-grow"></span>
        <span class="md-meta">${ie.instances.length} kurulum</span>
        <span class="md-meta">RAM <b>${t?`${(t.ram_mb/1024).toFixed(1)} GB`:"—"}</b></span>
        <span class="md-meta" id="md-ver">v?</span>
      </footer>
    </div>
  `;try{const f=window.__TAURI__?.app;f?.getVersion&&f.getVersion().then(u=>{const h=i.querySelector("#md-ver");h&&(h.textContent=`v${u}`)}).catch(()=>{})}catch{}WM(i),Ff(i,n)}function WM(i){i.querySelector("#h-play")?.addEventListener("click",async()=>{if(!Ct){qe("instances");return}if(!ie.accounts.length){dn();return}const e=i.querySelector(".md-play");e&&xc(e);const{launchInstance:t}=await it(async()=>{const{launchInstance:n}=await Promise.resolve().then(()=>vt);return{launchInstance:n}},void 0);t(Ct)}),i.querySelector("#h-stop")?.addEventListener("click",()=>void Ol()),i.querySelector("#h-manage")?.addEventListener("click",()=>{qe("instances",Ct||void 0)}),i.querySelector("#h-new")?.addEventListener("click",()=>qe("instances")),i.querySelector("#h-all")?.addEventListener("click",()=>qe("instances")),i.querySelector("#md-acc")?.addEventListener("click",()=>{ie.accounts.length?qe("settings"):dn()}),i.querySelectorAll(".md-tab").forEach(e=>e.addEventListener("click",()=>{i.querySelectorAll(".md-tab").forEach(t=>{const n=t===e;t.classList.toggle("on",n),t.setAttribute("aria-selected",String(n))}),i.querySelectorAll(".md-pane").forEach(t=>{t.classList.toggle("on",t.dataset.mdpane===e.dataset.mdtab)})})),i.querySelectorAll(".md-recent").forEach(e=>e.addEventListener("click",async t=>{const n=e.dataset.id||"";if(t.target.closest(".md-recent-play")){if(!ie.accounts.length){dn();return}const{launchInstance:a}=await it(async()=>{const{launchInstance:s}=await Promise.resolve().then(()=>vt);return{launchInstance:s}},void 0);a(n);return}qe("instances",n)})),i.querySelector("#md-scene")?.addEventListener("click",async()=>{const e=String(ie.config?.sahne_arka||"nether"),t=Nl.findIndex(r=>r.id===e),n=Nl[(t+1)%Nl.length];ie.config.sahne_arka=n.id;const a=i.querySelector("#sahne-arka");a&&ic(a,n.id);const s=i.querySelector(".md-stage-head p");s&&(s.textContent=`${n.ad} — ${n.etiket}`);try{await te("cmd_save_settings",{config:ie.config})}catch{}K(`Sahne: ${n.ad}`)})}function KM(i){if(Tc(),qp()){GM(i),VM(i);return}if(HM()){qM(i);return}const e=ie.instances[0];(!Ct||!ie.instances.find(f=>f.id===Ct))&&(Ct=e?.id||null);const t=ie.instances.find(f=>f.id===Ct),n=bn(),a=f=>!!f&&(f.includes("/")||f.includes("\\")),s=t?a(t.icon)?`<img class="hero-inst-icon" src="${ht(t.icon)}" draggable="false" />`:`<span class="hero-inst-icon emoji">${t.icon||"🔥"}</span>`:"",r=!!t?.cover&&!qp(),o=r?` style="background-image:url('${ht(t.cover)}')"`:"",l=t?Ke.activeId===t.id?"warn":"ok":"off",c=ie.instances.filter(f=>f.id!==t?.id);i.innerHTML=`
    <div class="page-wrap">
    <!-- HERO HAT: seçili kurulum tek satırda — lamba, ad, ölçümler, OYNA şalteri -->
    <section class="home-hero${r?" has-cover":""}${t?" secili-var":""}"${o}>
      <div class="vitrin" aria-label="Karakter vitrini">
        <canvas id="sahne-arka" class="sahne-arka"></canvas>
        <canvas id="sahne-katman"></canvas>
        <div class="vitrin-isim">${n?`${n.name} — SAHNE`:"SAHNE"}</div>
      </div>
      <div class="hero-content">
        ${t?`
          <div class="hero-badge">${uo(l)} ${s} ${t.mc_version} · ${Oa(t.mod_loader)}</div>
          <h1>${t.name}</h1>
          <div class="hero-meters">
            <div class="meter">
              <div class="meter-cap">BELLEK</div>
              <div class="meter-val">${(t.ram_mb/1024).toFixed(0)} <small>GB / ${(ie.sys?.total_ram_mb||16384)/1024} GB</small></div>
              <div class="meter-bar"><span style="width:${Math.min(100,Math.round(t.ram_mb/(ie.sys?.total_ram_mb||16384)*100))}%"></span></div>
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
            <button class="btn ghost" id="h-manage">${H("gear")} Yönet</button>
            <button class="btn ghost" id="h-new">${H("plus")} Kurulum Oluştur</button>
          </div>
        `:`
          <div class="hero-badge"><img src="/logo.png" draggable="false" /> YIKIMLient</div>
          <h1>Panoya hoş geldin</h1>
          <p style="color:var(--text-dim); max-width:460px; line-height:1.6; margin-bottom:16px">
            Panoda henüz devre yok. İlk kurulumunu oluştur — sürümü seç, gerisini pano halleder.
          </p>
          <div class="hero-actions">
            <button class="btn primary lg" id="h-new">${H("plus")} İlk Kurulumu Oluştur</button>
          </div>
        `}
      </div>
      ${t?`
      <div class="play-ring-wrap">
        <button class="play-ring ${Ke.activeId?"disabled":""}" id="h-play"
          title="${Ke.activeId?"Oyun zaten açık":`${t.name} — OYNA`}"
          ${Ke.activeId?"disabled":""}>
          <span class="pr-icon">${Ke.activeId?H("clock"):H("play")}</span>
          <span class="pr-label">${Ke.activeId?"AÇIK":"OYNA"}</span>
          <span class="pr-sub">${Ke.activeId?"çalışıyor":t.name}</span>
        </button>
        ${Ke.activeId===t.id?`
        <button class="stop-ring" id="h-stop" title="Oyunu kapat">
          ${H("stop")}
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
          <button class="btn ghost sm" id="h-all">${H("grid")} Tümü</button>
        </div>
        <div id="ledger-rows"></div>
      </div>
    </section>`:""}

    <!-- HESAP HATASI: hesap yoksa pano uyarır -->
    ${n?"":`
    <section class="home-section">
      <div class="ledger">
        <div class="ledger-row" id="h-account-row" role="button" tabindex="0">
          ${uo("err")}
          <span class="lr-name">Hesap bağlı değil</span>
          <span class="lr-grow"></span>
          <span class="lr-meta">Oynamak için hesap gerekli <span class="sep">→</span></span>
        </div>
      </div>
    </section>`}

    <!-- Duyurular (yalnızca geliştiricinin imzalı feed'i) -->
    <section class="home-section" ${ie.config?.show_news===!1?"hidden":""}>
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
          <div class="cs-val">${H("globe")}</div>
          <div class="cs-label">GitHub'da Aç</div>
        </div>
      </div>
    </section>
    </div>
  `;const d=i.querySelector("#ledger-rows");if(d){for(const f of c){a(f.icon);const u=gi(`
        <button class="ledger-row" data-id="${f.id}">
          ${uo(Ke.activeId===f.id?"warn":"ok")}
          <span class="lr-name">${f.name}</span>
          <span class="lr-grow"></span>
          <span class="lr-meta">
            ${Oa(f.mod_loader)} ${f.mc_version}
            <span class="sep">·</span>
            Son: ${f.last_played?new Date(f.last_played).toLocaleDateString("tr-TR"):"hiç"}
          </span>
          <span class="lr-play" title="Oyna">${H("play")}</span>
        </button>
      `);u.querySelector(".lr-play").innerHTML=H("play"),u.addEventListener("click",async h=>{if(h.target.closest(".lr-play")){if(!ie.accounts.length)return dn();xc(u);const{launchInstance:v}=await it(async()=>{const{launchInstance:m}=await Promise.resolve().then(()=>vt);return{launchInstance:m}},void 0);v(f.id);return}qe("instances",f.id)}),d.appendChild(u)}kf(Array.from(d.children))}YM(i),ZM(),XM(i),Ff(i,n)}async function xv(){if(document.getElementById("sahne-katman"))try{const i=await te("cmd_kozmetik_oku"),e=Fn();i?.pelerin_dosya&&i.pelerin_aktif!==!1?await e.pelerin({url:ht(String(i.pelerin_dosya))}):await e.pelerin(null)}catch{}}window.addEventListener("yikim:yetki",()=>{xv()});async function Ff(i,e){const t=i.querySelector("#sahne-katman");if(!t)return;const n=document.documentElement.getAttribute("data-world"),a=i.querySelector("#sahne-arka");if(a&&(n==="sahne"||n==="modern")){const l=String(ie.config?.sahne_arka||(n==="modern"?"nether":"kiraz"));l==="ozel"&&ie.config?.sahne_arka_ozel?(ic(a,"ozel"),a.style.backgroundImage=`url("${ht(String(ie.config.sahne_arka_ozel))}")`,a.style.backgroundSize="cover",a.style.backgroundPosition="center"):(ic(a,l),a.style.backgroundImage=""),a.classList.add("on")}const s=Fn();s.kur(t),t.classList.add("on");try{const l=await te("cmd_get_account_skin",{id:e?.id||""});l?.dosya?await s.skin({url:ht(String(l.dosya)),slim:!!l.slim}):await s.skin(null)}catch{await s.skin(null)}if(await xv(),ie.config?.menu_animasyon===!1){s.emoteleriKur([]);return}if(ie.config?.menu_animasyon_sadece_bizim!==!1){const l=ie.instances.find(c=>c.id===Ct);if(l&&l.source_pack){s.emoteleriKur([]);return}}const o={sakin:.6,normal:1,canli:1.8}[String(ie.config?.menu_animasyon_hiz||"normal")]||1;try{const l=await te("cmd_list_emotes"),c=[];for(const d of l)try{c.push(Np(d.icerik))}catch{}if(s.emoteleriKur(c,o,n==="modern"?3.2:0),n==="modern"){let d=c.find(f=>/wave|sall|el ?salla/i.test(`${f.adi} ${f.aciklama}`))||null;if(!d)try{d=Np($M)}catch{d=null}d&&window.setTimeout(()=>{t.isConnected&&s.emoteOynat(d)},380)}}catch{s.emoteleriKur([])}}async function XM(i){try{const e=await te("cmd_get_community_stats"),t=i.querySelector("#cs-downloads"),n=i.querySelector("#cs-stars");t&&(t.textContent=(e.downloads||0).toLocaleString("tr-TR")),n&&(n.textContent=(e.stars||0).toLocaleString("tr-TR"))}catch{const e=i.querySelector("#cs-downloads"),t=i.querySelector("#cs-stars");e&&(e.textContent="—"),t&&(t.textContent="—")}i.querySelector("#cs-github-link")?.addEventListener("click",()=>{it(()=>Promise.resolve().then(()=>vt),void 0).then(e=>e.openExternal("https://github.com/YKSAMI1/yikimlient").catch(()=>{}))})}function Oa(i){return{vanilla:"Vanilla",fabric:"Fabric",forge:"Forge"}[i]||i}function YM(i){i.querySelector("#h-play")?.addEventListener("click",async()=>{if(!Ct){qe("instances");return}if(!ie.accounts.length){dn();return}xc(i.querySelector(".play-ring"));const{launchInstance:e}=await it(async()=>{const{launchInstance:t}=await Promise.resolve().then(()=>vt);return{launchInstance:t}},void 0);e(Ct)}),i.querySelector("#h-stop")?.addEventListener("click",async()=>{try{await te("cmd_kill_game")}catch{}const{refreshState:e}=await it(async()=>{const{refreshState:t}=await Promise.resolve().then(()=>vt);return{refreshState:t}},void 0);await e(!0)}),i.querySelector("#h-manage")?.addEventListener("click",()=>{qe("instances",Ct||void 0)}),i.querySelector("#h-new")?.addEventListener("click",()=>qe("instances")),i.querySelector("#h-all")?.addEventListener("click",()=>qe("instances")),i.querySelector("#news-all")?.addEventListener("click",()=>qe("news")),i.querySelector("#h-account-row")?.addEventListener("click",()=>dn())}async function ZM(){const i=xi("#home-news");if(i)try{const e=await te("cmd_list_yikim_news");if(i.innerHTML="",!e.length){i.innerHTML='<div class="card"><p>Duyuru yok — yenilikler burada belirecek.</p></div>';return}e.sort((t,n)=>(n.pinned?1:0)-(t.pinned?1:0)||n.date.localeCompare(t.date));for(const t of e.slice(0,4)){const n=gi(`
        <div class="news-card card hover">
          ${t.image?`<div class="news-img" style="background-image:url('${t.image}')"></div>`:`<div class="news-img noimg">${H("news")}</div>`}
          <div class="news-body">
            <div class="chip orange">${t.pinned?"DUYURU":"YIKIM"} · ${t.date}</div>
            <h3>${t.title}</h3>
          </div>
        </div>
      `);n.addEventListener("click",()=>qe("news")),i.appendChild(n)}}catch{i.innerHTML='<div class="card"><p>Duyurular şimdilik yüklenemedi — çevrimdışı olabilirsin.</p></div>'}}const Sv="yikim-bildirimler",JM=60;function Ac(){try{const i=localStorage.getItem(Sv);if(!i)return[];const e=JSON.parse(i);return Array.isArray(e)?e:[]}catch{return[]}}function Bf(i){try{localStorage.setItem(Sv,JSON.stringify(i.slice(0,JM)))}catch{}}function Ja(i,e,t){const n=Ac(),a=Date.now();n.length&&n[0].baslik===e&&n[0].mesaj===t&&a-n[0].at<3e3||(n.unshift({id:`b${a.toString(36)}${Math.random().toString(36).slice(2,6)}`,tur:i,baslik:e,mesaj:t,at:a,okundu:!1}),Bf(n),document.querySelector("#bildirim-panel.bildirim-acik")&&Tr(),Rc(!0))}function kv(){const i=Ac();i.some(e=>!e.okundu)&&(i.forEach(e=>{e.okundu=!0}),Bf(i),Rc(!1))}function Mv(){Bf([]),Tr(),Rc(!1)}function Ev(){let i=document.querySelector("#bildirim-panel");return i||(i=document.createElement("div"),i.id="bildirim-panel",i.className="bildirim-panel",document.body.appendChild(i)),i}function $f(){const i=Ev();Tr(),kv(),i.classList.toggle("bildirim-acik")}function Hf(){document.querySelector("#bildirim-panel")?.classList.remove("bildirim-acik")}const jM={kurulum:"📦",sistem:"⚙️",mod:"🧩",genel:"🔔"};function QM(i){const e=new Date(i.at).toLocaleTimeString("tr-TR",{hour:"2-digit",minute:"2-digit"});return`
    <div class="bild-satir" data-tur="${i.tur}">
      <span class="bild-ikon">${jM[i.tur]}</span>
      <div class="bild-govde">
        <div class="bild-baslik">${i.baslik}</div>
        <div class="bild-mesaj">${i.mesaj}</div>
      </div>
      <span class="bild-saat">${e}</span>
    </div>`}function Tr(){const i=Ev(),e=Ac();i.innerHTML=`
    <div class="bild-kafa">
      <span class="bild-kafa-ad">Bildirimler</span>
      <div class="bild-kafa-islem">
        <button class="bild-temizle" title="Tümünü temizle">Temizle</button>
        <button class="bild-kapat" title="Kapat">✕</button>
      </div>
    </div>
    <div class="bild-liste">
      ${e.length?e.map(QM).join(""):""}
    </div>
    ${e.length?"":`
      <div class="bild-bos">
        <div class="bild-bos-ikon">🔔</div>
        <div>Şu an bir şey olmuyor.</div>
        <div class="bild-bos-alt">Mod paketi kurulumu, güncellemeler ve diğer haberler burada gözükür.</div>
      </div>`}
  `,i.querySelector(".bild-temizle")?.addEventListener("click",t=>{t.stopPropagation(),Mv()}),i.querySelector(".bild-kapat")?.addEventListener("click",t=>{t.stopPropagation(),Hf()})}function Rc(i){const e=document.querySelector("#tb-pack");e&&(e.classList.toggle("bild-var",i),e.title=i?"Yeni bildirgin var — kutuyu aç":"Bildirimler — kurulum durumu ve diğer haberler")}function wv(){const i=Ac().filter(e=>!e.okundu).length;Rc(i>0)}window.__BILDIRIM__={ekle:Ja,acKapa:$f,baslat:Tr,kapat:Hf};const eE=Object.freeze(Object.defineProperty({__proto__:null,bildirimAcKapa:$f,bildirimEkle:Ja,bildirimKapat:Hf,bildirimKutuBaslat:Tr,bildirimOkundu:kv,bildirimTemizle:Mv,bildirimZilIlkDurum:wv},Symbol.toStringTag,{value:"Module"})),Tv=[{adim:1,ad:"Paket indiriliyor",aciklama:"sunucudan paket dosyası alınıyor"},{adim:2,ad:"Paket açılıyor",aciklama:"sürüm / yükleyici bilgisi okunuyor"},{adim:3,ad:"Yapılandırma dosyaları",aciklama:"paketin kendi ayarları yazılıyor"},{adim:4,ad:"Modlar indiriliyor",aciklama:"her mod ayrı indirilip mods/ bırakılıyor"},{adim:5,ad:"Yükleyici kuruluyor",aciklama:"Fabric/Forge/NeoForge profili hazırlanıyor"},{adim:6,ad:"Oyun dosyaları",aciklama:"sürüm kurulumu: kütüphaneler + assetler + java"},{adim:7,ad:"YIKIM modu",aciklama:"launcher çekirdeği kuruluma bağlanıyor"},{adim:8,ad:"Hazır",aciklama:"kurulum oynanabilir"}],mn=new Map;let Wp=null,ac=null;const tE=4;function nE(i,e,t){const n=e>0?`${i}/${e}`:"";return t&&n?`${n} · ${t}`:t||n}function Uo(i,e=""){let t=mn.get(e);if(t){t.kapandi=!1,t.bitti=!1;for(const a of t.satirlar.values())a.classList.remove("pk-bitti","pk-aktif","pk-hata","pk-atlandi"),a.classList.add("pk-bekliyor");t.root.classList.remove("pk-gizli","pk-acik","pk-bitti"),t.root.style.order="0"}else for(t=aE(e),mn.set(e,t),t.root.classList.remove("pk-gizli"),t.root.style.order="0";mn.size>tE;){const a=[...mn.entries()].find(([,s])=>s!==t&&s.bitti);if(!a)break;a[1].kapandi=!0,a[1].root.classList.add("pk-gizli"),mn.delete(a[0])}const n=t.root.querySelector(".pk-baslik");n.textContent=i,t.root.querySelector(".pk-ozet").textContent="Kurulum başlıyor…",t.root.style.removeProperty("color"),t.bar.style.transform="scaleX(0.01)",t.yuzde.textContent="%0",Wp||yn("pack-step",a=>{const s=a?.payload;if(!s)return;const r=typeof s.kimlik=="string"?s.kimlik:"",o=r?[mn.get(r)]:[...mn.values()];for(const l of o)l&&Lv(l,s.adim,s.durum,s.done||0,s.total||0,s.ayrinti||"",s.percent||0)}).then(a=>{Wp=a}),Gf("kurulum"),Ja("kurulum",i,"Kurulum başladı — adım adım sağ altta gösterilecek")}function Av(i=""){const e=mn.get(i);e&&e.root.classList.toggle("pk-acik")}function Ar(i=""){const e=mn.get(i);if(!e)return;for(const[a,s]of e.satirlar)s.classList.contains("pk-bekliyor")&&a<8&&(s.classList.remove("pk-bekliyor"),s.classList.add("pk-atlandi"));const t=e.satirlar.get(8);t&&(t.classList.remove("pk-bekliyor","pk-aktif"),t.classList.add("pk-bitti")),e.bar.style.transform="scaleX(1)",e.yuzde.textContent="%100";const n=e.root.querySelector(".pk-ozet");n.textContent="Kurulum tamam — Kurulumlar'dan oynayabilirsin",e.bitti=!0,e.root.classList.add("pk-bitti"),e.kapatZamani=Date.now()+6e3,Gf("bitti"),Ja("kurulum","Kurulum tamamlandı","Paket oynanmaya hazır — Kurulumlar sayfasından başlatabilirsin"),ac===null&&Cv()}function iE(i){for(const[e,t]of mn)i&&!e.includes(i)||t.bitti||(t.bitti=!0,t.kapatZamani=Date.now()+4e3,t.root.classList.add("pk-bitti"),ac===null&&Cv())}function Rr(i,e=""){const t=mn.get(e);if(!t)return;const n=t.root.querySelector(".pk-ozet");n.textContent=`Kurulum durdu: ${i}`,n.style.color="var(--danger)";const a=[...t.satirlar.values()].find(s=>s.classList.contains("pk-aktif"));a&&(a.classList.remove("pk-aktif"),a.classList.add("pk-hata")),t.root.classList.add("pk-acik"),Gf("kurulum"),Ja("sistem","Kurulum durdu",i.length>120?`${i.slice(0,120)}…`:i)}function Rv(i,e,t,n,a,s=""){const r=mn.get(s);r&&Lv(r,i,e,t,n,a,0)}function Gf(i){const e=document.querySelector("#tb-pack");e&&(e.classList.toggle("bild-var",i!=="yok"),e.title=i==="bitti"?"Kurulum tamamlandı — durumu göster":i==="kurulum"?"Mod paketi kuruluyor — durumu göster":"Bildirimler — kurulum durumu ve diğer haberler")}function Lv(i,e,t,n,a,s,r){if(!i.satirlar.has(e))return;const o=i.satirlar.get(e);o.classList.remove("pk-bekliyor","pk-aktif","pk-bitti","pk-hata","pk-atlandi"),o.classList.add(`pk-${t}`);const l=i.detaylar.get(e);l.textContent=nE(n,a,s);const c=r||(e-1)/8*100;i.bar.style.transform=`scaleX(${Math.min(1,Math.max(.01,c/100))})`,i.yuzde.textContent=`%${Math.min(100,Math.round(c))}`;const d=i.root.querySelector(".pk-ozet");d.style.removeProperty("color"),d.textContent=s?`${Kp(e)} · ${s}`:Kp(e),e===8&&(t==="bitti"||t==="hata")&&(t==="bitti"?Ar(i.kimlik):Rr(d.textContent,i.kimlik))}function Kp(i){return Tv.find(e=>e.adim===i)?.ad||`Adım ${i}`}function aE(i){const e=document.createElement("div");e.className="pk-kart pk-gizli",e.dataset.kimlik=i,e.setAttribute("role","status"),e.setAttribute("aria-live","polite"),e.innerHTML=`
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
  `;const t=new Map,n=new Map,a=e.querySelector(".pk-adimlar");for(const r of Tv){const o=document.createElement("div");o.className="pk-adim pk-bekliyor",o.dataset.adim=String(r.adim),o.innerHTML=`
      <span class="pk-isaret"></span>
      <span class="pk-ad">${r.ad}</span>
      <span class="pk-detay">${r.aciklama}</span>
    `,a.appendChild(o),t.set(r.adim,o),n.set(r.adim,o.querySelector(".pk-detay"))}const s={root:e,kimlik:i,satirlar:t,detaylar:n,bar:e.querySelector(".pk-bar > div"),yuzde:e.querySelector(".pk-yuzde"),ozet:e.querySelector(".pk-ozet"),kapandi:!1,kapatZamani:0,bitti:!1};return e.querySelector(".pk-kafa").addEventListener("click",()=>Av(i)),e.querySelector(".pk-kapat")?.addEventListener("click",r=>{r.stopPropagation(),s.kapandi=!0,s.root.classList.add("pk-gizli"),K("Kurulum arkada sürüyor","ok")}),document.body.appendChild(e),s}function Cv(){const i=setInterval(()=>{const e=[...mn.values()].filter(t=>!t.kapandi);if(e.length===0){clearInterval(i),ac=null;return}for(const t of e)t.bitti&&Date.now()>t.kapatZamani&&(t.kapandi=!0,t.root.classList.add("pk-gizli"),mn.delete(t.kimlik))},1200);ac=i}function Pv(){for(const[,i]of mn)i.kapandi=!0,i.root.classList.add("pk-gizli");mn.clear()}window.__PACK_KART_TEST__=Rv;window.__PACK_KART_KAPAT__=Pv;const Dv=Object.freeze(Object.defineProperty({__proto__:null,packKartBaslat:Uo,packKartBitti:iE,packKartDegistir:Av,packKartHata:Rr,packKartTamam:Ar,packKartTest:Rv,packKartlariKapat:Pv},Symbol.toStringTag,{value:"Module"})),sE=60;function Iv(i){return!Number.isFinite(i)||i<sE?0:i>=200?8192:i>=120?7168:5120}function Vf(i,e,t){const n=Iv(i);if(!n)return 0;const a=Math.max(1024,Math.floor((t>0?t:16384)/2)),s=Math.max(1024,Math.floor(a/512)*512),r=Math.min(n,s);return e>=r?0:r}async function qf(i){try{const{invoke:e,state:t}=await it(async()=>{const{invoke:o,state:l}=await Promise.resolve().then(()=>vt);return{invoke:o,state:l}},void 0),n=await e("cmd_list_mods",{instanceId:i.id});if(!Array.isArray(n))return;const a=Number(i.ram_mb)||4096,s=Vf(n.length,a,t.sys?.total_ram_mb||0);if(!s)return;const{bildirimEkle:r}=await it(async()=>{const{bildirimEkle:o}=await Promise.resolve().then(()=>eE);return{bildirimEkle:o}},void 0);r("kurulum","Bellek düşük kalabilir",`${i.name||"Paket"}: ${n.length} mod • önerilen ${s} MB, şu an ${a} MB. Kurulumlar → bu kurulum → Java & Args sekmesinden bellek sürgüsünü artırabilirsin. (Otomatik değiştirilmedi.)`)}catch{}}function sc(i,e,t,n){const a=Vf(i,e,t);return a?`
    <div class="ram-uyari">
      <b>Bu pakette ${i} mod var.</b>
      Önerilen bellek <b>${a} MB</b>, şu an <b>${e} MB</b>.
      ${n==="ayar"?"Bellek sürgüsünü yukarı çekmek takılmayı azaltır; sistem RAM'inin en fazla yarısını ayır.":"Kurulumlar → bu kurulum → Java & Args sekmesindeki bellek sürgüsünden artırabilirsin."}
    </div>`:""}const rE=Object.freeze(Object.defineProperty({__proto__:null,hamOneriRamMb:Iv,onerilenRamMb:Vf,paketSonrasiRamUyarisi:qf,ramUyarisiHtml:sc},Symbol.toStringTag,{value:"Module"})),Xp={fabric:'<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" clip-rule="evenodd" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path fill="none" stroke="currentColor" stroke-width="23" d="m820 761-85.6-87.6c-4.6-4.7-10.4-9.6-25.9 1-19.9 13.6-8.4 21.9-5.2 25.4 8.2 9 84.1 89 97.2 104 2.5 2.8-20.3-22.5-6.5-39.7 5.4-7 18-12 26-3 6.5 7.3 10.7 18-3.4 29.7-24.7 20.4-102 82.4-127 103-12.5 10.3-28.5 2.3-35.8-6-7.5-8.9-30.6-34.6-51.3-58.2-5.5-6.3-4.1-19.6 2.3-25 35-30.3 91.9-73.8 111.9-90.8" transform="matrix(.08671 0 0 .0867 -49.8 -56)"/></svg>',vanilla:'<svg viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z" clip-rule="evenodd"/></svg>',forge:'<svg xml:space="preserve" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5" clip-rule="evenodd" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path fill="none" stroke="currentColor" stroke-width="2" d="M2 7.5h8v-2h12v2s-7 3.4-7 6 3.1 3.1 3.1 3.1l.9 3.9H5l1-4.1s3.8.1 4-2.9c.2-2.7-6.5-.7-8-6Z"></path></svg>',neoforge:'<svg enable-background="new 0 0 24 24" version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m12 19.2v2m0-2v2"/><path d="m8.4 1.3c0.5 1.5 0.7 3 0.1 4.6-0.2 0.5-0.9 1.5-1.6 1.5m8.7-6.1c-0.5 1.5-0.7 3-0.1 4.6 0.2 0.6 0.9 1.5 1.6 1.5"/><path d="m3.6 15.8h-1.7m18.5 0h1.7"/><path d="m3.2 12.1h-1.7m19.3 0h1.8"/><path d="m8.1 12.7v1.6m7.8-1.6v1.6"/><path d="m10.8 18h1.2m0 1.2-1.2-1.2m2.4 0h-1.2m0 1.2 1.2-1.2"/><path d="m4 9.7c-0.5 1.2-0.8 2.4-0.8 3.7 0 3.1 2.9 6.3 5.3 8.2 0.9 0.7 2.2 1.1 3.4 1.1m0.1-17.8c-1.1 0-2.1 0.2-3.2 0.7m11.2 4.1c0.5 1.2 0.8 2.4 0.8 3.7 0 3.1-2.9 6.3-5.3 8.2-0.9 0.7-2.2 1.1-3.4 1.1m-0.1-17.8c1.1 0 2.1 0.2 3.2 0.7"/><path d="m4 9.7c-0.2-1.8-0.3-3.7 0.5-5.5s2.2-2.6 3.9-3m11.6 8.5c0.2-1.9 0.3-3.7-0.5-5.5s-2.2-2.6-3.9-3"/><path d="m12 21.2-2.4 0.4m2.4-0.4 2.4 0.4"/></g></svg>',quilt:'<svg xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" clip-rule="evenodd" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><defs><path id="qlt" fill="none" stroke="currentColor" stroke-width="65.6" d="M442.5 233.9c0-6.4-5.2-11.6-11.6-11.6h-197c-6.4 0-11.6 5.2-11.6 11.6v197c0 6.4 5.2 11.6 11.6 11.6h197c6.4 0 11.6-5.2 11.6-11.7v-197Z"></path></defs><path fill="none" d="M0 0h24v24H0z"></path><use xlink:href="#qlt" stroke-width="65.6" transform="matrix(.03053 0 0 .03046 -3.2 -3.2)"></use><use xlink:href="#qlt" stroke-width="65.6" transform="matrix(.03053 0 0 .03046 -3.2 7)"></use><use xlink:href="#qlt" stroke-width="65.6" transform="matrix(.03053 0 0 .03046 6.9 -3.2)"></use><path fill="none" stroke="currentColor" stroke-width="70.4" d="M442.5 234.8c0-7-5.6-12.5-12.5-12.5H234.7c-6.8 0-12.4 5.6-12.4 12.5V430c0 6.9 5.6 12.5 12.4 12.5H430c6.9 0 12.5-5.6 12.5-12.5V234.8Z" transform="rotate(45 3.5 24) scale(.02843 .02835)"></path></svg>'};function Cd(i){return Xp[i]||Xp.vanilla}let Zn=null;function oE(i){const e=ht(i),t=i.toLowerCase();return t.endsWith(".mp4")||t.endsWith(".webm")?`<div class="inst-cover video-cover"><video src="${e}" autoplay loop muted playsinline disablepictureinpicture preload="metadata"></video></div>`:t.endsWith(".gif")?`<div class="inst-cover gif-cover"><img src="${e}" draggable="false" alt="" /></div>`:`<div class="inst-cover" style="background-image:url('${e}')"></div>`}function lE(i){const e=i.querySelectorAll(".video-cover video");if(!e.length)return;const t=new IntersectionObserver(n=>{for(const a of n){const s=a.target;a.isIntersecting?s.play().catch(()=>{}):s.pause()}},{threshold:.05});e.forEach(n=>t.observe(n))}function Yp(i,e){return Promise.race([i.catch(()=>null),new Promise(t=>setTimeout(()=>t(null),e))])}function cE(i){let e;if(Gn.param&&Gn.param.includes("|")){const[t,n]=Gn.param.split("|");Gn.param=t,e=n}if(Gn.param&&ie.instances.find(t=>t.id===Gn.param)){Zn=Gn.param,Gn.param=void 0,To(i,Zn,e);return}if(Zn&&ie.instances.find(t=>t.id===Zn)){To(i,Zn,e);return}rc(i)}function rc(i){i.innerHTML=`
    <div class="page-wrap">
    <div class="page-header anim-fade-up row-between">
      <div>
        <h1>Paketler</h1>
        <p>Kurulumlarını yönet, yeni profiller oluştur.</p>
      </div>
      <div style="display:flex; gap:8px">
        <button class="btn ghost" id="btn-import" title=".yikimpack / .mrpack / .zip paket dosyası içe aktar">${H("box")} Paket İçe Aktar</button>
        <button class="btn ghost" id="btn-export" title="Bu kurulumu .yikimpack olarak paylaş">${H("share")} Paketi Paylaş</button>
        <button class="btn primary" id="btn-new">${H("plus")} Yeni Kurulum</button>
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
  `;const e=i.querySelector("#inst-grid");if(!ie.instances.length)e.innerHTML=`
      <div class="empty-state">
        ${H("play")}
        <h3 style="margin-top:14px">İlk kurulumunu oluştur</h3>
        <p style="margin:8px 0 16px">Sürüm ve modloader'ı seç — Java dahil gerisini biz hallederiz.</p>
        <button class="btn primary lg" id="empty-new">Kurulum Oluştur</button>
      </div>`,e.querySelector("#empty-new")?.addEventListener("click",()=>jp());else{for(const t of ie.instances){const a=t.icon&&(t.icon.includes("/")||t.icon.includes("\\"))?`<img src="${ht(t.icon)}" draggable="false" onerror="window.__iconFallback && window.__iconFallback(this,'mod-fallback','play')" />`:t.icon||"🔥",s=Ke.activeId===t.id,r=gi(`
        <div class="inst-card card hover ${t.cover?"has-cover":""}" data-id="${t.id}" title="${t.name} — yönet">
          ${t.cover?oE(t.cover):""}
          <div class="inst-top">
            <div class="inst-icon">${a}</div>
            <div class="inst-info">
              <h3>${t.name}</h3>
              <div class="inst-meta">
                <span class="chip gray">${Uv(t.mod_loader)} ${t.mc_version}</span>
                ${s?'<span class="chip green">oynuyor</span>':""}
              </div>
            </div>
            ${uo(s?"warn":"ok","card-lamp")}
          </div>
          <div class="inst-stats tnum">
            <span title="Bellek">${t.ram_mb} MB</span>
            <span title="Son oynanış">Son: ${t.last_played?new Date(t.last_played).toLocaleDateString("tr-TR"):"hiç"}</span>
            <span title="Toplam süre">${pr(t.playtime_ms)}</span>
          </div>
          <div class="inst-actions">
            <button class="btn primary card-play" ${Ke.activeId?"disabled":""}>
              ${Ke.activeId?`${H("clock")} Açık`:`${H("play")} Oyna`}
            </button>
            ${s?`<button class="btn danger card-stop" title="Oyunu kapat">${H("stop")} Durdur</button>`:""}
            <button class="btn ghost card-manage">Yönet</button>
          </div>
        </div>
      `);r.addEventListener("click",async o=>{if(o.target.closest(".card-play")){if(!ie.accounts.length)return dn();const{launchInstance:l}=await it(async()=>{const{launchInstance:c}=await Promise.resolve().then(()=>vt);return{launchInstance:c}},void 0);l(t.id);return}if(o.target.closest(".card-stop")){try{await te("cmd_kill_game")}catch{}const{refreshState:l}=await it(async()=>{const{refreshState:c}=await Promise.resolve().then(()=>vt);return{refreshState:c}},void 0);await l(!0);return}Zn=t.id,To(i,t.id)}),e.appendChild(r)}kf(Array.from(e.querySelectorAll(".inst-card"))),lE(e)}i.querySelector("#btn-new")?.addEventListener("click",()=>jp()),i.querySelector("#btn-import")?.addEventListener("click",()=>dE().catch(()=>{})),i.querySelector("#btn-export")?.addEventListener("click",()=>uE()),fE()}async function dE(){const i=await te("cmd_pick_pack_file");if(i){Uo("Yerel paket kurulumu");try{const e=await te("cmd_import_pack_file",{path:i}),{refreshState:t}=await it(async()=>{const{refreshState:n}=await Promise.resolve().then(()=>vt);return{refreshState:n}},void 0);await t(),Ar(),K(`${e.name||"Paket"} kuruldu!`,"ok"),qe("instances"),qf(e)}catch(e){Rr(String(e)),K(`Paket içe aktarılamadı: ${e}`,"err")}}}async function uE(){const{openModal:i,toast:e}=await it(async()=>{const{openModal:s,toast:r}=await Promise.resolve().then(()=>vt);return{openModal:s,toast:r}},void 0),{root:t,close:n}=i(`
    <h2>Paketi Paylaş</h2>
    <div class="sub">Hangi kurulumu paylaşmak istiyorsun?</div>
    <div class="share-picker">
      ${ie.instances.map(s=>`
        <button class="share-pick ${s.id===(Zn||ie.instances[0]?.id)?"sel":""}" data-id="${s.id}">
          <span class="sp-ik">${s.mod_loader==="fabric"?"🧵":s.mod_loader==="neoforge"?"⚙️":"📦"}</span>
          <span class="sp-ad">${s.name}</span>
          <span class="sp-meta">${s.mod_loader} ${s.mc_version}</span>
        </button>`).join("")}
    </div>
    <div style="display:flex; gap:8px; margin-top:16px">
      <button class="btn primary" id="sh-devam">Devam</button>
      <button class="btn ghost" id="sh-no">İptal</button>
    </div>
  `);t.querySelector("#sh-no")?.addEventListener("click",n);let a=Zn||ie.instances[0]?.id||"";t.querySelectorAll(".share-pick").forEach(s=>{s.addEventListener("click",()=>{t.querySelectorAll(".share-pick").forEach(r=>r.classList.remove("sel")),s.classList.add("sel"),a=s.dataset.id})}),t.querySelector("#sh-devam")?.addEventListener("click",()=>{const s=ie.instances.find(r=>r.id===a);if(!s){e("Bir kurulum seç","err");return}n(),zv(s.id,s.name)})}async function zv(i,e){const t=ie.instances.find(l=>l.id===i);if(!t)return;const{openModal:n,toast:a}=await it(async()=>{const{openModal:l,toast:c}=await Promise.resolve().then(()=>vt);return{openModal:l,toast:c}},void 0),{root:s,close:r}=n(`
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
  `);let o=!0;s.querySelectorAll(".share-mod").forEach(l=>{l.addEventListener("click",()=>{s.querySelectorAll(".share-mod").forEach(c=>c.classList.remove("sel")),l.classList.add("sel"),o=l.dataset.ultra==="1"})}),s.querySelector("#sh-no")?.addEventListener("click",r),s.querySelector("#sh-go")?.addEventListener("click",async()=>{const l={config:s.querySelector("#sh-config").checked,saves:s.querySelector("#sh-saves").checked,resourcepacks:s.querySelector("#sh-rp").checked,shaderpacks:s.querySelector("#sh-sp").checked,options:s.querySelector("#sh-opts").checked,ultraHafif:o};r(),Uo(`${e||t.name} paketleniyor`,`aktar:${i}`);try{const c=await te("cmd_export_yikimpack",{instanceId:i,secenek:l});Ar(`aktar:${i}`),Ja("kurulum","Paylaşım paketi hazır",`${e||t.name}.yikimpack — ${c}`),a(`Paket hazır: ${c}`,"ok")}catch(c){Rr(String(c),`aktar:${i}`),Ja("sistem","Paket oluşturulamadı",String(c))}})}async function fE(){const i=document.querySelector("#popular-strip");if(i)try{const e=await te("cmd_repos_popular",{kind:"modpack",loader:""});i.innerHTML="";for(const t of e){const n=gi(`
        <div class="card hover popular-card">
          ${t.icon_url?`<img class="pc-icon" src="${t.icon_url}" loading="lazy" draggable="false" onerror="window.__iconFallback && window.__iconFallback(this,'pc-icon ph','box')" />`:`<div class="pc-icon ph">${H("box")}</div>`}
          <div class="pc-body">
            <div class="pc-title">${t.title}</div>
            <div class="pc-meta">${H("dl")} ${hE(t.downloads)}</div>
          </div>
        </div>
      `);n.addEventListener("click",()=>qe("explore","kind:modpack")),i.appendChild(n)}}catch{i.innerHTML='<p class="pc-fail">Popüler paketler yüklenemedi.</p>'}}function hE(i){return i>=1e6?`${(i/1e6).toFixed(1)}M`:i>=1e3?`${(i/1e3).toFixed(0)}K`:String(i)}function Uv(i){return{vanilla:"Vanilla",fabric:"Fabric",forge:"Forge"}[i]||i}function To(i,e,t){const n=ie.instances.find(c=>c.id===e);if(!n){Zn=null,rc(i);return}const s=n.icon&&(n.icon.includes("/")||n.icon.includes("\\"))?`<img src="${ht(n.icon)}" draggable="false" onerror="window.__iconFallback && window.__iconFallback(this,'mod-fallback','play')" />`:n.icon||"🔥";i.innerHTML=`
    <div class="detail-header anim-fade-up">
      <button class="btn ghost back-btn" title="Geri">${H("back")}</button>
      <div class="inst-icon xl">${s}</div>
      <div>
        <h1>${n.name}</h1>
        <div class="inst-meta">
          <span class="chip gray">${Uv(n.mod_loader)} ${n.mc_version}</span>
          <span class="chip gray">${n.ram_mb} MB RAM</span>
          <span class="chip gray">${pr(n.playtime_ms)} oynanış</span>
        </div>
      </div>
      <div style="flex:1"></div>
      <button class="btn primary lg" id="detail-play" ${Ke.activeId?"disabled":""}>${Ke.activeId?`${H("clock")} Oyun Açık`:`${H("play")} Oyna`}</button>
      ${Ke.activeId===n.id?`<button class="btn danger lg" id="detail-stop" title="Oyunu kapat">${H("stop")} Durdur</button>`:""}
    </div>
    <div class="tabs anim-fade-up">
      <button class="tab active" data-tab="mods">${H("puzzle")} Modlar</button>
      <button class="tab" data-tab="content">${H("box")} Doku & Dünya</button>
      <button class="tab" data-tab="java">${H("mug")} Java</button>
      <button class="tab" data-tab="log">${H("term")} Log</button>
      <button class="tab" data-tab="analytics">${H("chart")} Analiz</button>
      <button class="tab" data-tab="settings">${H("gear")} Ayarlar</button>
    </div>
    <div class="tab-content" id="tab-content"></div>
  `,i.querySelector(".back-btn")?.addEventListener("click",()=>{Zn=null,rc(i)}),i.querySelector("#detail-play")?.addEventListener("click",async()=>{if(!ie.accounts.length)return dn();const{launchInstance:c}=await it(async()=>{const{launchInstance:d}=await Promise.resolve().then(()=>vt);return{launchInstance:d}},void 0);c(n.id)}),i.querySelector("#detail-stop")?.addEventListener("click",async()=>{try{await te("cmd_kill_game")}catch{}const{refreshState:c}=await it(async()=>{const{refreshState:d}=await Promise.resolve().then(()=>vt);return{refreshState:d}},void 0);await c(!0)});const r=["mods","content","java","log","analytics","settings"];i.querySelectorAll(".tab").forEach(c=>{c.addEventListener("click",()=>{i.querySelectorAll(".tab").forEach(u=>u.classList.remove("active")),c.classList.add("active");const d=c.dataset.tab,f=i.querySelector("#tab-content");({mods:Wf,content:pE,java:Nv,log:gE,analytics:vE,settings:_E})[d](f,n)})});const o=t&&r.includes(t)?t:"mods";([...i.querySelectorAll(".tab")].find(c=>c.dataset.tab===o)??i.querySelectorAll(".tab")[0]).click()}let ea="resourcepacks";const Zp=[{id:"resourcepacks",label:"Texturepackler",hint:"Kaynak paketleri (.zip)"},{id:"shaderpacks",label:"Shaderlar",hint:"Iris/OptiFine shader'ları (.zip)"},{id:"saves",label:"Dünyalar",hint:"Tek oyunculu dünyalar (klasör)"}];async function pE(i,e){const t=()=>Zp.find(a=>a.id===ea);i.innerHTML='<div class="spinner" style="margin:40px auto"></div>';const n=async()=>{let a=[];try{a=await te("cmd_list_content_files",{instanceId:e.id,kind:ea})}catch{}const s=t();i.innerHTML=`
      <div class="mods-toolbar" style="flex-wrap:wrap">
        <div class="kind-toggle" id="content-kinds">
          ${Zp.map(o=>`<button class="kt ${o.id===ea?"sel":""}" data-k="${o.id}">${o.label}</button>`).join("")}
        </div>
        <span style="flex:1"></span>
        <button class="btn ghost sm" id="content-open">${H("folder")} Klasörü Aç</button>
        <button class="btn ghost sm" id="content-search" title="Modrinth'te ara ve indir">${H("search")} Keşfet'te Ara</button>
        <button class="btn primary sm" id="content-add">${H("plus")} ${s.id==="saves"?"Dünya Ekle":"Paket Ekle"}</button>
      </div>
      <div class="mod-list" id="content-list"></div>
    `,i.querySelectorAll("#content-kinds .kt").forEach(o=>{o.addEventListener("click",()=>{ea=o.dataset.k,n()})}),i.querySelector("#content-open")?.addEventListener("click",()=>te("cmd_open_content_folder",{instanceId:e.id,kind:ea}).catch(()=>{})),i.querySelector("#content-search")?.addEventListener("click",()=>{const o=ea==="resourcepacks"?"resourcepack":ea==="shaderpacks"?"shader":"world";Gn.param=`kind:${o}`,qe("explore")}),i.querySelector("#content-add")?.addEventListener("click",async()=>{try{await te("cmd_add_content_file",{instanceId:e.id,kind:ea}),await n()}catch(o){K(`Eklenemedi: ${o}`,"err")}});const r=i.querySelector("#content-list");if(!a.length){r.innerHTML=`<div class="card" style="text-align:center; padding:34px">
        <p>${s.hint}<br /><span style="color:var(--text-faint); font-size:12px">Henüz içerik yok — yukarıdan ekleyebilir ya da dosyayı bu sayfaya sürükleyip bırakabilirsin.</span></p></div>`;return}r.innerHTML="";for(const o of a){const l=o.icon?`<img alt="" draggable="false" class="row-face" width="40" height="40" src="${ht(o.icon)}" />`:`<div style="font-size:22px">${o.is_dir?"🌍":"📦"}</div>`,c=gi(`
        <div class="card mod-row" style="display:flex; align-items:center; gap:12px; padding:12px 14px">
          ${l}
          <div style="flex:1; min-width:0">
            <div style="font-weight:600; font-size:13px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap">${o.name}</div>
            <div style="color:var(--text-faint); font-size:11.5px">${o.is_dir?"dünya":Go(o.size)}</div>
          </div>
          <button class="btn ghost sm" data-del="${o.name}" title="Sil">${H("trash")}</button>
        </div>
      `);c.querySelector("[data-del]")?.addEventListener("click",async d=>{const f=d.currentTarget.dataset.del;if(confirm(`"${f}" silinsin mi?`))try{await te("cmd_delete_content_file",{instanceId:e.id,kind:ea,name:f}),await n()}catch(u){K(`Silinemedi: ${u}`,"err")}}),r.appendChild(c)}};await n()}async function Wf(i,e){i.innerHTML='<div class="spinner" style="margin:40px auto"></div>';let t=[];try{t=await te("cmd_list_mods",{instanceId:e.id})}catch{}let n={},a={};i.innerHTML=`
    <div class="mods-toolbar">
      <input class="input search-in" id="mod-search" placeholder="Mod ara…" />
      <button class="btn primary" id="mod-add">${H("plus")} Mod Ekle</button>
      <button class="btn upd-all" id="mod-upd-all" hidden>${H("refresh")} Tümünü Güncelle</button>
    </div>
    <div class="mod-list" id="mod-list"></div>
  `;const s=o=>{const l=t.filter(d=>d.filename.toLowerCase().includes(o.toLowerCase())),c=i.querySelector("#mod-list");c.innerHTML="",l.length||(c.innerHTML=`<div class="card" style="text-align:center; padding:34px">
        <p>${o?"Eşleşen mod yok.":"Bu kurulumda henüz mod yok."}</p></div>`);for(const d of l){const f=n[d.filename],u=f?`<img class="mod-logo" src="${f}" loading="lazy" draggable="false" onerror="window.__iconFallback && window.__iconFallback(this,'mod-logo ph','puzzle')" />`:`<span class="mod-logo ph">${H("puzzle")}</span>`,h=gi(`
        <div class="mod-row card">
          <span class="dot ${d.enabled?"on":"off"}"></span>
          ${u}
          <div class="mod-name">
            <div class="mn">${d.filename.replace(".jar","")}</div>
            <div class="ms">${Go(d.size)}</div>
          </div>
          <div style="flex:1"></div>
          ${a[d.filename]?`<button class="btn primary sm upd-mod" data-fn="${d.filename}" data-url="${a[d.filename].url}" data-ad="${a[d.filename].yeni_ad}" title="Yeni sürüm: ${a[d.filename].surum}">Güncelle</button>`:""}
          <div class="switch ${d.enabled?"on":""}" data-fn="${d.filename}" data-en="${d.enabled}"></div>
          <button class="btn danger sm del-mod" data-fn="${d.filename}">Sil</button>
        </div>
      `);h.querySelector(".switch")?.addEventListener("click",async v=>{const m=v.currentTarget,p=m.dataset.fn,g=m.dataset.en!=="true";await te("cmd_toggle_mod",{instanceId:e.id,filename:p,enabled:g}),d.enabled=g,s(i.querySelector("#mod-search").value)}),h.querySelector(".upd-mod")?.addEventListener("click",async v=>{const m=v.currentTarget;m.disabled=!0,m.textContent="Güncelleniyor…";try{await te("cmd_update_mod",{instanceId:e.id,filename:m.dataset.fn,url:m.dataset.url,yeniAd:m.dataset.ad}),K("Mod güncellendi"),await Wf(i,e)}catch(p){m.disabled=!1,m.textContent="Güncelle",K(`Güncellenemedi: ${p}`,"err")}}),h.querySelector(".del-mod")?.addEventListener("click",async()=>{await te("cmd_delete_mod",{instanceId:e.id,filename:d.filename}),t=t.filter(v=>v.filename!==d.filename),s(i.querySelector("#mod-search").value),K("Mod silindi")}),c.appendChild(h)}};if(i.querySelector("#mod-search")?.addEventListener("input",o=>{s(o.target.value)}),i.querySelector("#mod-add")?.addEventListener("click",()=>{qe("explore",e.id)}),s(""),!t.length)return;const r=()=>i.querySelector("#mod-search")?.value??"";(async()=>{const o=await Yp(te("cmd_resolve_mod_icons",{filenames:t.map(c=>c.filename)}),8e3);o&&Object.keys(o).length&&(n=o,s(r()));const l=await Yp(te("cmd_check_mod_updates",{instanceId:e.id}),15e3);l&&(a=Object.fromEntries(l.map(c=>[c.filename,c])),s(r()),mE(a,e))})()}function mE(i,e){const t=()=>Object.keys(i).length,n=document.querySelector("#mod-upd-all");if(!n)return;const a=s=>`${H("refresh")} Tümünü Güncelle (${s})`;n.hidden=t()===0,!n.hidden&&(n.innerHTML=a(t()),n.onclick=async()=>{if(n.disabled)return;n.disabled=!0;const s=n.innerHTML;document.querySelectorAll(".upd-mod, #mod-add").forEach(o=>o.disabled=!0);let r=null;try{r=await yn("mod-updates-progress",o=>{const l=o?.payload??{};l.total&&(n.innerHTML=l.done>=l.total?`${H("refresh")} Bitiyor…`:`${H("refresh")} ${l.done+1}/${l.total} güncelleniyor…`)})??null}catch{}try{const o=await te("cmd_update_all_mods",{instanceId:e.id});o?.bos?K("Güncellenecek mod yok"):o?.hata>0?K(`${o.basarili} mod güncellendi, ${o.hata} mod başarısız`,"err"):K(`${o?.basarili??"?"} mod güncellendi ✓`);const l=document.querySelector("#inst-content");l&&await Wf(l,e)}catch(o){K(`Güncellenemedi: ${o}`,"err")}finally{try{r?.()}catch{}n.disabled=!1,n.innerHTML=s,document.querySelectorAll(".upd-mod, #mod-add").forEach(o=>o.disabled=!1)}})}async function Nv(i,e){i.innerHTML='<div class="spinner" style="margin:40px auto"></div>';const t=await te("cmd_list_java_arg_presets");let n=0;try{const u=await te("cmd_list_mods",{instanceId:e.id});Array.isArray(u)&&(n=u.length)}catch{}const a=e.java_preset_id==="ozel",s=u=>u.replace(/&/g,"&amp;").replace(/</g,"&lt;"),r=e.custom_vm_args??(t.find(u=>u.id==="balanced")?.args??[]).join("\\n");i.innerHTML=`
    <div class="java-grid">
      <div class="card">
        <h3>${H("cpu")} Bellek</h3>
        <div class="ram-row">
          <input type="range" min="1024" max="16384" step="512" value="${e.ram_mb}" id="ram-range" style="flex:1" />
          <span class="chip" id="ram-val">${e.ram_mb} MB</span>
        </div>
        <p style="margin-top:8px; font-size:12px; color:var(--text-dim)">Sistem RAM'inin en fazla yarısını ayır. 4 GB çoğu modlu paket için yeterli.</p>
        <div id="ram-uyari-kutu">${sc(n,e.ram_mb,ie.sys?.total_ram_mb||0,"ayar")}</div>
      </div>
      <div class="card">
        <h3>${H("args")} Java Argüman Presetleri</h3>
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
        <h3>${H("args")} Özel${a?' <span class="chip" style="margin-left:8px">aktif — launcher karışmaz</span>':' <span class="chip gray" style="margin-left:8px">"Özel" preset seçince aktif</span>'}</h3>
        <div class="ozel-grid">
          <label class="ozel-alan">
            <span style="font-size:12px; color:var(--text-dim); display:block; margin-bottom:6px">Chunk mesafesi (renderDistance)</span>
            <input class="input" type="number" min="2" max="32" value="${e.view_distance??12}" id="ozel-vd" ${a?"":"disabled"} />
          </label>
          <div class="ozel-alan">
            <span style="font-size:12px; color:var(--text-dim); display:block; margin-bottom:6px">JVM argümanları — boşluk veya her satıra bir bayrak; {ram_mb} = RAM sürgüsü</span>
            <textarea class="input" id="ozel-args" rows="7" spellcheck="false" style="width:100%; resize:vertical; font-family:var(--font-mono); font-size:11.5px" ${a?"":"disabled"}>${s(r)}</textarea>
          </div>
        </div>
        <div style="display:flex; gap:10px; justify-content:flex-end; margin-top:10px">
          <button class="btn ghost sm" id="ozel-sifirla" ${a?"":"disabled"}>Varsayılana dön</button>
          <button class="btn primary sm" id="ozel-kaydet" ${a?"":"disabled"}>Özel Ayarları Kaydet</button>
        </div>
      </div>
    </div>
  `;const o=i.querySelector("#ram-range"),l=i.querySelector("#ram-uyari-kutu"),c=ie.sys?.total_ram_mb||0;o.addEventListener("input",()=>{const u=parseInt(o.value);i.querySelector("#ram-val").textContent=`${u} MB`,l&&(l.innerHTML=sc(n,u,c,"ayar"))}),o.addEventListener("change",async()=>{await te("cmd_set_instance_ram",{id:e.id,ramMb:parseInt(o.value)}),e.ram_mb=parseInt(o.value),K("RAM güncellendi")}),i.querySelectorAll(".preset-row").forEach(u=>{const h=u.querySelector("details");h?.addEventListener("click",v=>v.stopPropagation()),h?.querySelector("summary")?.addEventListener("click",v=>v.stopPropagation()),u.addEventListener("click",async v=>{if(v.target.closest("details"))return;const m=u.dataset.id;await te("cmd_set_instance_java_preset",{id:e.id,presetId:m}),e.java_preset_id=m;const p=new Set(Array.from(i.querySelectorAll(".preset-row details[open]")).map(g=>g.closest(".preset-row").dataset.id));Nv(i,e),i.querySelectorAll(".preset-row").forEach(g=>{p.has(g.dataset.id)&&(g.querySelector("details").open=!0)}),K("Preset seçildi")})}),i.querySelector("#ozel-kaydet")?.addEventListener("click",async()=>{const u=i.querySelector("#ozel-vd"),h=i.querySelector("#ozel-args"),v=u.value.trim(),m=v===""?null:Math.max(2,Math.min(32,parseInt(v)||12)),p=h.value.trim();await te("cmd_set_instance_custom",{id:e.id,viewDistance:m,customVmArgs:p||null}),e.view_distance=m,e.custom_vm_args=p||null,K("Özel ayarlar kaydedildi — bir sonraki açılışta geçerli")}),i.querySelector("#ozel-sifirla")?.addEventListener("click",()=>{const u=i.querySelector("#ozel-args");u.value=(t.find(h=>h.id==="balanced")?.args??[]).join(`
`)})}async function gE(i,e){i.innerHTML=`
    <div class="card log-card">
      <div class="log-head">
        <h3>${H("term")} Log — ${e.name}</h3>
        <span class="chip gray" id="log-count">0 satır</span>
      </div>
      <div class="log-toolbar">
        <select class="input" id="log-file"><option value="live">Canlı Akış (oyun açıkken)</option></select>
        <input class="input" id="log-search" placeholder="Loglarda ara…" />
      </div>
      <div class="live-log" id="live-log"><div class="log-hint">Yükleniyor…</div></div>
    </div>
  `;const t=i.querySelector("#live-log"),n=i.querySelector("#log-count"),a=i.querySelector("#log-file"),s=i.querySelector("#log-search");let r="live",o=0;const l=[];let c=[];const d=(y,T)=>{n.textContent=T!==void 0&&T!==y?`${T}/${y} satır`:`${y} satır`},f=y=>{const T=document.createElement("div");return T.textContent=y,y.includes("ERROR")||y.includes("Exception")?T.classList.add("err"):y.includes("WARN")&&T.classList.add("warn"),T},u=()=>{const y=s.value.trim().toLowerCase(),T=y?c.filter(b=>b.toLowerCase().includes(y)):c;if(t.innerHTML="",!T.length)t.innerHTML=`<div class="log-hint">${y?"Eşleşen satır yok.":"Log boş görünüyor."}</div>`;else{const b=document.createDocumentFragment();for(const S of T)b.appendChild(f(S));t.appendChild(b)}d(c.length,T.length)},h=()=>{if(r="live",c=[],t.innerHTML="",!l.length)t.innerHTML='<div class="log-hint">Oyun başlatıldığında loglar buraya canlı akar…</div>';else{const y=document.createDocumentFragment();for(const T of l)y.appendChild(f(T));t.appendChild(y),t.scrollTop=t.scrollHeight}d(o)},v=async y=>{r=y,t.innerHTML='<div class="log-hint">Yükleniyor…</div>';try{c=(await te("cmd_read_log",{instanceId:e.id,fileId:y})).split(`
`),u(),t.scrollTop=0}catch(T){t.innerHTML=`<div class="log-hint">Log yüklenemedi: ${String(T)}</div>`}};let m=[];try{m=await te("cmd_list_logs",{instanceId:e.id});const y=new Map;for(const T of m)y.has(T.date)||y.set(T.date,[]),y.get(T.date).push(T);for(const[T,b]of y){const S=document.createElement("optgroup");S.label=T;for(const k of b){const A=document.createElement("option");A.value=k.id;const x=k.label.startsWith("Oturum ")?"#"+(k.label.split("-").pop()||k.label):k.label;A.textContent=`${k.time!=="-"?k.time+" — ":""}${x} (${Go(k.size)})`,S.appendChild(A)}a.appendChild(S)}}catch{}Ke.activeId!==e.id&&m.length?(a.value=m[0].id,v(m[0].id)):h(),a.addEventListener("change",()=>{a.value==="live"?h():v(a.value)}),s.addEventListener("input",()=>{r!=="live"&&u()});const p=await yn("game-log",y=>{r!=="live"&&(a.value="live",h()),t.querySelector(".log-hint")&&(t.innerHTML=""),l.push(y.payload),o++,l.length>500&&l.shift(),t.appendChild(f(y.payload)),d(o),t.scrollTop=t.scrollHeight,t.children.length>500&&t.firstElementChild?.remove()}),g=new MutationObserver(()=>{document.body.contains(t)||(p(),g.disconnect())});g.observe(document.body,{childList:!0,subtree:!0})}async function vE(i,e){i.innerHTML='<div class="spinner" style="margin:40px auto"></div>';const n=(await te("cmd_get_stats")).snapshot,a=n.per_instance_ms[e.id]||0,s=n.sessions?Math.round(a/n.total_playtime_ms*n.sessions):0;i.innerHTML=`
    <div class="stats-cards stagger">
      <div class="card stat-big"><div class="sv">${pr(a)}</div><div class="sl">Bu Kurulumda</div></div>
      <div class="card stat-big"><div class="sv">~${s}</div><div class="sl">Tahmini Oturum</div></div>
      <div class="card stat-big"><div class="sv">${e.last_played?new Date(e.last_played).toLocaleDateString("tr-TR"):"—"}</div><div class="sl">Son Giriş</div></div>
      <div class="card stat-big"><div class="sv">${e.created_at?new Date(e.created_at).toLocaleDateString("tr-TR"):"—"}</div><div class="sl">Kurulum Tarihi</div></div>
    </div>
    <div class="card" style="margin-top:18px">
      <h3>${H("globe")} Sunucu Geçmişi <span style="font-weight:400; color:var(--text-faint); font-size:11.5px">tüm kurulumlar</span></h3>
      ${n.servers.length?n.servers.slice(0,10).map((r,o)=>`
        <div class="server-row">
          <span class="rank">#${o+1}</span>
          <span class="host">${r.host}</span>
          <span class="chip gray">${r.visits} giriş</span>
          <span class="dur">${pr(r.total_ms)}</span>
        </div>`).join(""):'<p style="color:var(--text-dim)">Henüz sunucu geçmişi yok.</p>'}
    </div>
    <div class="card" style="margin-top:18px">
      <h3>${H("chart")} Günlük Dağılım <span style="font-weight:400; color:var(--text-faint); font-size:11.5px">son 14 gün</span></h3>
      <div class="barchart small">
        ${Jp(n.daily_ms).map(r=>`
          <div class="bar-col tooltip-host">
            <div class="bar" style="height:${Math.max(r.ms/Math.max(...Jp(n.daily_ms).map(o=>o.ms),1)*100,r.ms?5:2)}%"></div>
            <div class="bar-lbl">${r.label}</div>
            <div class="tooltip">${r.full} — ${pr(r.ms)}</div>
          </div>`).join("")}
      </div>
    </div>
  `}function Jp(i){const e=[],t=new Date;for(let n=13;n>=0;n--){const a=new Date(t.getFullYear(),t.getMonth(),t.getDate()-n),s=`${a.getFullYear()}-${String(a.getMonth()+1).padStart(2,"0")}-${String(a.getDate()).padStart(2,"0")}`;e.push({label:a.getDate()%3===0?String(a.getDate()):"",ms:i[s]||0,full:s})}return e}async function _E(i,e){const t=s=>s.includes("/")||s.includes("\\"),n=e.icon&&t(e.icon)?`<img src="${ht(e.icon)}" draggable="false" onerror="window.__iconFallback && window.__iconFallback(this,'mod-fallback','play')" />`:e.icon||"🔥";i.innerHTML=`
    <div class="card">
      <h3>${H("gear")} Kurulum Ayarları</h3>
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
            <button class="btn ghost sm" id="pick-icon">${H("image")} Dosyadan Seç</button>
            <input class="input" id="set-icon" style="width:150px" value="${e.icon&&!t(e.icon)?e.icon:""}" maxlength="4" placeholder="emoji" />
          </div>
        </div>
        <div class="row-between">
          <div class="set-icon-cell">
            <span>Kapak fotoğrafı</span>
            <span class="set-icon-hint">kurulum kartının arka planı</span>
          </div>
          <div style="display:flex; gap:8px; align-items:center">
            ${e.cover?`<img class="cover-thumb" src="${ht(e.cover)}" onerror="this.style.visibility='hidden'" />`:'<span class="cover-thumb empty">—</span>'}
            <button class="btn ghost sm" id="pick-cover">${e.cover?H("image")+" Değiştir":H("image")+" Fotoğraf Seç"}</button>
            ${e.cover?'<button class="btn danger sm" id="clear-cover">Kaldır</button>':""}
          </div>
        </div>
        <div class="row-between">
          <button class="btn ghost" id="open-folder">${H("folder")} Klasörü Aç</button>
          <button class="btn ghost" id="open-mods">${H("puzzle")} mods Klasörü</button>
        </div>
        <div class="row-between">
          <button class="btn ghost" id="dup-inst">${H("copy")} Kopyala</button>
          <button class="btn danger" id="del-inst">${H("trash")} Kurulumu Sil</button>
        </div>
        <div class="row-between">
          <button class="btn primary" id="share-inst">${H("box")} Paketi Paylaş (.yikimpack)</button>
        </div>
        <p class="set-sub">Bu kurulumu başkalarının çift tıklayıp YIKIMLient ile açabileceği tek dosya haline getirir.</p>
      </div>
    </div>
  `;const a=async()=>{const s=i.querySelector("#set-name").value.trim()||e.name,r=i.querySelector("#set-icon").value.trim();await te("cmd_rename_instance",{id:e.id,name:s}),r&&await te("cmd_set_instance_icon",{id:e.id,icon:r}),await it(()=>Promise.resolve().then(()=>vt),void 0).then(o=>o.refreshState())};i.querySelector("#set-name")?.addEventListener("change",a),i.querySelector("#set-icon")?.addEventListener("change",a),i.querySelector("#set-icon")?.addEventListener("input",()=>{const s=i.querySelector("#set-icon").value.trim();s&&(i.querySelector("#icon-preview").textContent=s)}),i.querySelector("#pick-icon")?.addEventListener("click",async()=>{try{await te("cmd_pick_instance_icon",{instanceId:e.id}),await it(()=>Promise.resolve().then(()=>vt),void 0).then(s=>s.refreshState(!0)),K("İkon güncellendi")}catch{}}),i.querySelector("#pick-cover")?.addEventListener("click",async()=>{try{await te("cmd_pick_instance_cover",{instanceId:e.id}),await it(()=>Promise.resolve().then(()=>vt),void 0).then(s=>s.refreshState(!0)),K("Kapak fotoğrafı eklendi")}catch{}}),i.querySelector("#clear-cover")?.addEventListener("click",async()=>{await te("cmd_set_instance_cover",{id:e.id,cover:null}),await it(()=>Promise.resolve().then(()=>vt),void 0).then(s=>s.refreshState(!0)),K("Kapak kaldırıldı")}),i.querySelector("#open-folder")?.addEventListener("click",()=>te("cmd_open_instance_folder",{instanceId:e.id})),i.querySelector("#open-mods")?.addEventListener("click",()=>te("cmd_open_mods_folder",{instanceId:e.id})),i.querySelector("#dup-inst")?.addEventListener("click",async()=>{await te("cmd_duplicate_instance",{id:e.id}),await it(()=>Promise.resolve().then(()=>vt),void 0).then(s=>s.refreshState()),K("Kurulum kopyalandı"),To(i.parentElement,Zn)}),i.querySelector("#del-inst")?.addEventListener("click",async()=>{confirm(`"${e.name}" kurulumu ve TÜM dosyaları silinecek. Emin misin?`)&&(await te("cmd_delete_instance",{id:e.id}),await it(()=>Promise.resolve().then(()=>vt),void 0).then(s=>s.refreshState()),Zn=null,rc(i.parentElement),K("Kurulum silindi"))}),i.querySelector("#share-inst")?.addEventListener("click",()=>{zv(e.id,e.name)})}async function jp(){const e=(await te("cmd_list_versions")).all,t=await te("cmd_list_java_arg_presets"),n=await te("cmd_list_standard_mods"),{root:a,close:s}=(await it(async()=>{const{openModal:c}=await Promise.resolve().then(()=>vt);return{openModal:c}},void 0)).openModal(`
    <h2>Yeni Kurulum</h2>
    <div class="sub">Sürümü ve modloader'ı seç — YIKIM çekirdeği, Java'yı, kütüphaneleri, asset'leri biz indiriyoruz.</div>

    <label class="wiz-label">Kurulum adı</label>
    <input class="input" id="w-name" placeholder="Örn: PVP Paketim" />

    <label class="wiz-label">Minecraft sürümü</label>
    <select class="input" id="w-version">
      ${e.slice(0,100).map(c=>`<option value="${c}">${c}</option>`).join("")}
    </select>

    <label class="wiz-label">Mod Loader</label>
    <div class="loader-cards">
      <button class="loader-card sel" data-l="fabric">
        <div class="lc-icon">${Cd("fabric")}</div><b>Fabric</b><span>Hafif, hızlı, modern — YIKIM çekirdeği dahil</span>
      </button>
      <button class="loader-card" data-l="vanilla">
        <div class="lc-icon">${Cd("vanilla")}</div><b>Vanilla</b><span>Modsuz sade oyun</span>
      </button>
      <button class="loader-card" data-l="forge">
        <div class="lc-icon">${Cd("forge")}</div><b>Forge</b><span>Mod paketleri &amp; klasik modlar — ilk oyun açılışında kurulur</span>
      </button>
    </div>

    <label class="wiz-label">Bellek</label>
    <div class="ram-row">
      <input type="range" min="1024" max="16384" step="512" value="4096" id="w-ram" style="flex:1" />
      <span class="chip" id="w-ram-val">4096 MB</span>
    </div>

    <label class="wiz-label">Java Argüman Preseti</label>
    <select class="input" id="w-preset">
      ${t.map(c=>`<option value="${c.id}">${c.name} — ${c.description}</option>`).join("")}
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
      ${["performans","pvp","gorunum","yardarci"].map(c=>`
        <div class="std-cat">
          <div class="std-cat-label">${c==="performans"?"Performans":c==="pvp"?"PVP":c==="yardarci"?"Yardımcı":"Görünüm"}</div>
          <div class="std-chips">
            ${n.filter(d=>d.category===c).map(d=>`<span class="chip ${d.enabled_by_default?"":"gray"}" title="${d.description}">${d.name}</span>`).join("")}
          </div>
        </div>`).join("")}
    </details>

    <div style="display:flex; gap:10px; margin-top:20px">
      <button class="btn ghost" id="w-cancel" style="flex:1">Vazgeç</button>
      <button class="btn primary lg" id="w-create" style="flex:2">Kurulumu Oluştur</button>
    </div>
  `);let r="fabric",o=!0;a.querySelectorAll(".loader-card").forEach(c=>{c.addEventListener("click",()=>{c.classList.contains("disabled")||(a.querySelectorAll(".loader-card").forEach(d=>d.classList.remove("sel")),c.classList.add("sel"),r=c.dataset.l)})});const l=a.querySelector("#w-ram");l.addEventListener("input",()=>{a.querySelector("#w-ram-val").textContent=`${l.value} MB`}),a.querySelector("#w-std-switch")?.addEventListener("click",c=>{o=!o,c.currentTarget.classList.toggle("on",o)}),a.querySelector("#w-cancel")?.addEventListener("click",s),a.querySelector("#w-create")?.addEventListener("click",async()=>{const c=a.querySelector("#w-create");c.disabled=!0,c.innerHTML='<span class="spinner"></span> Oluşturuluyor…';const d=a.querySelector("#w-name").value.trim()||"Yeni Kurulum",f=a.querySelector("#w-version").value,u=a.querySelector("#w-preset").value;try{const h=await te("cmd_create_instance",{instance:{name:d,mc_version:f,mod_loader:r,ram_mb:parseInt(l.value),java_preset_id:u,standard_mods:o&&r==="fabric"}});await it(()=>Promise.resolve().then(()=>vt),void 0).then(m=>m.refreshState()),s(),K(`"${d}" oluşturuldu`);const v=h.instance.id;if(Zn=v,ie.instances.length){const m=document.querySelector("#content");To(m,v)}}catch(h){K(String(h),"err"),c.disabled=!1,c.textContent="Kurulumu Oluştur"}})}function Xr(i){return i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Qp(i){const e=i.trim();return/^https?:\/\//i.test(e)?e:/^\/\//.test(e)?`https:${e}`:""}function Zs(i){let e=Xr(i);const t=[];return e=e.replace(/`([^`]+)`/g,(n,a)=>(t.push(a),`\0K${t.length-1}\0`)),e=e.replace(/!\[([^\]]*)\]\(([^)\s]+)(?:\s+&quot;[^&]*&quot;)?\)/g,(n,a,s)=>{const r=Qp(s.replace(/&amp;/g,"&"));return r?`<img src="${Xr(r)}" alt="${a}" loading="lazy" referrerpolicy="no-referrer">`:n}),e=e.replace(/\[([^\]]+)\]\(([^)\s]+)(?:\s+&quot;[^&]*&quot;)?\)/g,(n,a,s)=>{const r=Qp(s.replace(/&amp;/g,"&"));return r?`<a href="${Xr(r)}" data-ext="1">${a}</a>`:n}),e=e.replace(/(^|[\s(])(https?:\/\/[^\s<>"]+)/g,(n,a,s)=>`${a}<a href="${Xr(s)}" data-ext="1">${s}</a>`),e=e.replace(/\*\*\*([^*]+)\*\*\*/g,"<b><i>$1</i></b>"),e=e.replace(/\*\*([^*]+)\*\*/g,"<b>$1</b>"),e=e.replace(/(^|[\s(])\*([^*\s][^*]*)\*/g,"$1<i>$2</i>"),e=e.replace(/(^|[\s(])_([^_\s][^_]*)_/g,"$1<i>$2</i>"),e=e.replace(/~~([^~]+)~~/g,"<del>$1</del>"),e=e.replace(/\u0000K(\d+)\u0000/g,(n,a)=>`<code>${t[+a]}</code>`),e}function yE(i){let e=i;return e=e.replace(/<img[^>]*src=["']([^"']+)["'][^>]*>/gi,(t,n)=>`

![resim](${n})

`),e=e.replace(/<a[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi,(t,n,a)=>`[${a.replace(/<[^>]+>/g,"")}](${n})`),e=e.replace(/<br\s*\/?>/gi,`
`),e=e.replace(/<\/(p|div|h[1-6]|li|tr)>/gi,`

`),e=e.replace(/<li[^>]*>/gi,"- "),e=e.replace(/<h([1-4])[^>]*>/gi,(t,n)=>`

${"#".repeat(+n)} `),e=e.replace(/<\/?(details|summary|center|table|tbody|thead|tr|td|th|span|font|u|b|i|strong|em|sup|sub|kbd|p|div|ul|ol|blockquote|figure|figcaption)[^>]*>/gi,`
`),e=e.replace(/<[^>]+>/g,""),e=e.replace(/&nbsp;/g," ").replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">"),e}function bE(i){if(!i)return"";let e=i.replace(/\r\n?/g,`
`);e=yE(e);const t=[];e=e.replace(/```[a-zA-Z0-9+-]*\n([\s\S]*?)```/g,(c,d)=>(t.push(d.replace(/\n$/,"")),`\0B${t.length-1}\0`));const n=e.split(`
`),a=[];let s=null,r=[];const o=()=>{r.length&&(a.push(`<p>${Zs(r.join(" "))}</p>`),r=[])},l=()=>{s&&(a.push(`</${s}>`),s=null)};for(const c of n){const f=c.trimEnd().trim();if(!f){o(),l();continue}const u=f.match(/^\u0000B(\d+)\u0000$/);if(u){o(),l(),a.push(`<pre><code>${Xr(t[+u[1]])}</code></pre>`);continue}const h=f.match(/^(#{1,6})\s+(.*)$/);if(h){o(),l();const p=Math.min(6,h[1].length);a.push(`<h${p}>${Zs(h[2])}</h${p}>`);continue}if(/^([-*_])\1{2,}$/.test(f)){o(),l(),a.push("<hr>");continue}if(f.startsWith(">")){o(),l(),a.push(`<blockquote>${Zs(f.replace(/^>\s?/,""))}</blockquote>`);continue}const v=f.match(/^\d+[.)]\s+(.*)$/);if(v){o(),s!=="ol"&&(l(),a.push("<ol>"),s="ol"),a.push(`<li>${Zs(v[1])}</li>`);continue}const m=f.match(/^[-*+]\s+(.*)$/);if(m){o(),s!=="ul"&&(l(),a.push("<ul>"),s="ul"),a.push(`<li>${Zs(m[1])}</li>`);continue}if(f.includes("|")&&/^\|.*\|$/.test(f)){if(o(),l(),/^[|\-\s:]+$/.test(f))continue;a.push(`<p class="md-tr">${Zs(f.replace(/^\||\|$/g,"").split("|").join(" · "))}</p>`);continue}l(),r.push(f)}return o(),l(),a.join(`
`)}const Kf={mod:"Mod",modpack:"Mod Paketi",resourcepack:"Doku Paketi",shader:"Shader",world:"Dünya",datapack:"Datapack"};let pa="mod",Ra="",Pd="",kr="";const Ov=24;let oc=null,Fl=0,ro=!1,La=!1,yl=null,Yr=0,em=!1,lc=null,Un=null;function xE(i){Un=i;let e=Gn.param;if(e?.startsWith("kind:")){const t=e.slice(5);Object.keys(Kf).includes(t)&&(pa=t),e=void 0}if(Gn.param=void 0,lc){$v(lc);return}Fv(!!e)}function Fv(i=!1){const e=Un;e.innerHTML=`
    <div class="page-wrap xp-wrap">
      <div class="xp-head anim-fade-up">
        <div>
          <h1>Keşfet</h1>
          <p>Modrinth ve CurseForge — bir içeriğe tıkla, sayfası açılsın, sürümünü seç ve kur.</p>
        </div>
        <div class="xp-head-badges">
          <span class="chip green">● Modrinth</span>
          <span class="chip ${ie.curseforge?"green":"gray"}" title="CurseForge (resmî API veya anahtarsız genel ayna)">● CurseForge</span>
        </div>
      </div>

      <div class="xp-search-row anim-fade-up">
        <div class="xp-search">
          ${H("search")}
          <input id="exp-q" placeholder="Ara: sodium, pvp, shaders…" autocomplete="off" spellcheck="false" />
          <button class="btn primary" id="exp-go">Ara</button>
        </div>
      </div>

      <div class="xp-tabs anim-fade-up" role="tablist">
        ${Object.entries(Kf).map(([s,r])=>`<button class="xp-tab ${pa===s?"sel":""}" data-k="${s}">${r}</button>`).join("")}
      </div>

      <div class="xp-filters anim-fade-up">
        <label class="xp-field"><span>Oyun sürümü</span>
          <select class="input" id="exp-ver">
            <option value="">hepsi</option>
            ${ie.featured_versions.map(s=>`<option>${s}</option>`).join("")}
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
  `,e.querySelectorAll(".xp-tab").forEach(s=>s.addEventListener("click",()=>{pa=s.dataset.k,e.querySelectorAll(".xp-tab").forEach(r=>r.classList.remove("sel")),s.classList.add("sel"),Ra?Js(Ra):Jr()}));const t=e.querySelector("#exp-q");let n;t.addEventListener("input",()=>{clearTimeout(n),n=setTimeout(()=>Js(t.value.trim()),400)}),t.addEventListener("keydown",s=>{s.key==="Enter"&&Js(t.value.trim())}),e.querySelector("#exp-go")?.addEventListener("click",()=>Js(t.value.trim())),e.querySelector("#exp-ver")?.addEventListener("change",()=>{Ra?Js(Ra):Jr()}),e.querySelector("#exp-loader")?.addEventListener("change",()=>{Ra?Js(Ra):Jr()}),e.addEventListener("click",s=>{const r=s.target.closest("a[data-ext]");r&&(s.preventDefault(),Wi(r.href))}),yl?.disconnect(),yl=null,em||(document.addEventListener("scroll",tm,!0),window.addEventListener("resize",tm),em=!0);const a=e.querySelector("#exp-son");a&&"IntersectionObserver"in window&&(yl=new IntersectionObserver(s=>{s.some(r=>r.isIntersecting)&&Lc()},{root:null,rootMargin:"600px 0px",threshold:0}),yl.observe(a)),Jr()}function SE(){return Un?.querySelector("#exp-baslik")}function Zr(i){const e=Un?.querySelector("#exp-son");e&&(e.innerHTML=i===null?'<div class="spinner"></div>':`<span>${i}</span>`,e.classList.toggle("bos",i!==null))}function Bv(i,e){Yr++,oc=i,Fl=0,ro=!1,La=!1;const t=Un?.querySelector("#exp-results");t&&(t.innerHTML="");const n=SE();n&&(n.textContent=e),Zr(null),Lc()}function tm(){if(!oc||La||ro)return;const i=Un?.querySelector("#exp-son");if(!i)return;i.getBoundingClientRect().top<window.innerHeight+500&&Lc()}async function Lc(){if(ro||La||!oc)return;const i=Yr;ro=!0;const e=Un?.querySelector("#exp-results");Zr(null);try{const t=await oc(Fl,Ov);if(i!==Yr)return;if(!t.length){La=!0,Zr(Fl===0?"Sonuç yok.":"Hepsi bu kadar.");return}const n=new Set(Array.from(e?.querySelectorAll(".xp-card")||[]).map(s=>s.dataset.id||""));let a=0;for(const s of t)n.has(`${s.source}:${s.id}`)||(e?.appendChild(ME(s)),a++);Fl+=t.length,a===0&&(La=!0),Zr(La?"Hepsi bu kadar.":null),setTimeout(()=>{const s=Un?.querySelector("#exp-son");if(!s||a===0)return;const r=s.getBoundingClientRect();!La&&r.top<window.innerHeight+600&&Lc()},60)}catch(t){if(i!==Yr)return;La=!0,Zr(`Yüklenemedi: ${String(t)}`)}finally{i===Yr&&(ro=!1)}}async function kE(i,e){const t=[[`project_type:${pa}`]];kr&&t.push([`categories:${kr}`]);const n=`https://api.modrinth.com/v2/search?query=&index=downloads&facets=${encodeURIComponent(JSON.stringify(t))}&offset=${i}&limit=${e}`,a=await fetch(n,{headers:{Accept:"application/json"}});if(!a.ok)throw new Error(`Modrinth ${a.status}`);return((await a.json()).hits||[]).map(r=>({source:"modrinth",id:String(r.project_id||""),slug:String(r.slug||""),title:String(r.title||""),description:String(r.description||""),author:String(r.author||"Modrinth"),icon_url:String(r.icon_url||""),downloads:Number(r.downloads||0),kind:pa,categories:Array.isArray(r.display_categories)?r.display_categories:[]}))}function Jr(){Ra="";const i=Un?.querySelector("#exp-loader")?.value||"";kr=["resourcepack","shader","world","datapack"].includes(pa)?"":i,Bv(async(e,t)=>{try{return await kE(e,t)}catch{const n=Math.floor(e/Ov);return(await te("cmd_repos_popular",{kind:pa,loader:kr,page:n})).slice(0,t)}},"En çok indirilenler")}async function Js(i){if(!Un?.querySelector("#exp-results"))return;if(!i){Jr();return}Ra=i;const t=Un.querySelector("#exp-ver"),n=Un.querySelector("#exp-loader");Pd=t?.value||"";const a=n?.value||"";kr=["resourcepack","shader","world","datapack"].includes(pa)?"":a,Bv(async(r,o)=>(await te("cmd_repos_search",{query:i,kind:pa,versions:Pd?[Pd]:[],loader:kr,offset:r,limit:o})).results,`Arama: ${i}`)}function ME(i){const e=gi(`
    <button class="xp-card" data-id="${i.source}:${i.id}">
      <span class="xp-card-icon">${i.icon_url?`<img src="${i.icon_url}" loading="lazy" draggable="false" onerror="window.__iconFallback && window.__iconFallback(this,'xp-card-icon ph','puzzle')" />`:H(i.kind==="modpack"?"box":"puzzle")}</span>
      <span class="xp-card-body">
        <span class="xp-card-t">${i.title}</span>
        <span class="xp-card-a">${i.author||(i.source==="modrinth"?"Modrinth":"CurseForge")}</span>
        <span class="xp-card-d">${i.description}</span>
        <span class="xp-card-foot">
          <span class="xp-card-stat">${H("dl")} ${Bl(i.downloads)}</span>
          ${(i.categories||[]).slice(0,3).map(t=>`<span class="xp-tag">${t}</span>`).join("")}
        </span>
      </span>
    </button>
  `);return e.addEventListener("click",()=>EE(i)),e}function Bl(i){return i>=1e9?`${(i/1e9).toFixed(1)}B`:i>=1e6?`${(i/1e6).toFixed(1)}M`:i>=1e3?`${(i/1e3).toFixed(0)}K`:String(i)}function EE(i){lc=i,$v(i),Un?.scrollTo({top:0})}async function $v(i){const e=Un,t=["resourcepack","shader","world","datapack"].includes(i.kind),n=i.kind==="modpack";if(e.innerHTML=`
    <div class="page-wrap xp-wrap xp-detail">
      <button class="xp-back" id="xp-back">${H("back")} Keşfet'e dön</button>

      <div class="xp-hero anim-fade-up">
        <div class="xp-hero-icon">
          ${i.icon_url?`<img src="${i.icon_url}" draggable="false" onerror="window.__iconFallback && window.__iconFallback(this,'xp-hero-icon ph','puzzle')" />`:H(i.kind==="modpack"?"box":"puzzle")}
        </div>
        <div class="xp-hero-main">
          <div class="xp-hero-kicker">${Kf[i.kind]||i.kind} · ${i.source==="modrinth"?"Modrinth":"CurseForge"}</div>
          <h1 class="xp-hero-title">${i.title}</h1>
          <p class="xp-hero-sub">${i.description}</p>
          <div class="xp-hero-chips" id="xp-hero-chips">
            <span class="xp-tag">${H("dl")} ${Bl(i.downloads)}</span>
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
            `:ie.instances.length?`
              <label class="xp-field"><span>Hedef kurulum</span>
                <select class="input" id="xp-inst">
                  ${ie.instances.map(v=>`<option value="${v.id}">${v.name} · ${v.mod_loader} ${v.mc_version}</option>`).join("")}
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
  `,e.querySelector("#xp-back")?.addEventListener("click",()=>{lc=null,Fv()}),e.querySelector("#xp-new-inst")?.addEventListener("click",()=>qe("instances")),(async()=>{let v=null;try{v=await te("cmd_repos_project",{source:i.source,projectId:i.id,kind:i.kind})}catch{}if(v){const m=e.querySelector("#xp-hero-chips");m&&(m.innerHTML=`
          <span class="xp-tag">${H("dl")} ${Bl(v.downloads||i.downloads)}</span>
          ${v.followers?`<span class="xp-tag">♥ ${Bl(v.followers)}</span>`:""}
          ${v.author?`<span class="xp-tag">${v.author}</span>`:""}
          ${v.license?`<span class="xp-tag">${v.license}</span>`:""}
          ${v.updated?`<span class="xp-tag">${v.updated.slice(0,10)}</span>`:""}
          ${(v.categories||[]).slice(0,5).map(g=>`<span class="xp-tag">${g}</span>`).join("")}
        `);const p=e.querySelector("#xp-body");if(v.body&&v.body.trim()?(p.innerHTML=bE(v.body),p.querySelectorAll("a[data-ext]").forEach(g=>g.addEventListener("click",y=>{y.preventDefault(),Wi(g.href)}))):p.innerHTML='<p class="xp-note">Bu proje için açıklama verisi yok.</p>',v.gallery?.length){const g=e.querySelector("#xp-gallery");e.querySelector("#xp-gallery-panel").hidden=!1,g.innerHTML=v.gallery.map(y=>`<button class="xp-shot" data-u="${y.url}"><img src="${y.url}" loading="lazy" referrerpolicy="no-referrer" alt="${y.title||""}" /></button>`).join(""),g.querySelectorAll(".xp-shot").forEach(y=>y.addEventListener("click",()=>AE(y.dataset.u)))}if(v.links?.length){const g=e.querySelector("#xp-links-panel");g.hidden=!1,e.querySelector("#xp-links").innerHTML=v.links.map(y=>`<button class="xp-link" data-u="${y.url}">${y.label} ${H("globe")}</button>`).join(""),e.querySelectorAll(".xp-link").forEach(y=>y.addEventListener("click",()=>Wi(y.dataset.u)))}}else e.querySelector("#xp-body").innerHTML='<p class="xp-note">Açıklama yüklenemedi — sürüm listesi kullanılabilir.</p>'})(),!n&&!ie.instances.length)return;const a=e.querySelector("#xp-inst"),s=e.querySelector("#xp-mc"),r=e.querySelector("#xp-loader"),o=e.querySelector("#xp-vers");let l=[],c=8;const d=()=>n?null:ie.instances.find(v=>v.id===a?.value)||ie.instances[0],f=()=>{const v=d(),m=v?.mc_version||"",p=v?.mod_loader||"fabric";s&&([...s.options].some(g=>g.value===m)||s.appendChild(new Option(m,m)),s.value=m),r&&([...r.options].some(g=>g.value===p)||r.appendChild(new Option(p,p)),r.value=p),u()};a?.addEventListener("change",f),s?.addEventListener("change",()=>{c=8,u()}),r?.addEventListener("change",()=>{c=8,u()});function u(){const v=d(),m=n?"":s?.value||v?.mc_version||"",p=n||t?"":r?.value||v?.mod_loader||"",g=l.filter(k=>wE(k,m,p,t)),y=l.filter(k=>!g.includes(k)),T=[...g].sort((k,A)=>(A.date||"").localeCompare(k.date||"")),b=T.slice(0,c);if(!l.length){o.innerHTML='<p class="xp-note">Sürüm listesi boş.</p>';return}const S=T.length?[]:[...l].sort((k,A)=>(A.date||"").localeCompare(k.date||"")).slice(0,4);o.innerHTML=`
      ${T.length?b.map(k=>h(k,!0)).join(""):`
        <p class="xp-note">${m}${p?` · ${p}`:""} için uyumlu sürüm yok — en yeni sürümler aşağıda (uyumsuz).</p>
        ${S.map(k=>h(k,!1)).join("")}`}
      ${T.length>b.length?`<button class="btn ghost sm xp-more" id="xp-more">Daha eski sürümler (${T.length-b.length})</button>`:""}
      ${(()=>{const k=y.filter(A=>!S.includes(A));return k.length?`
        <details class="xp-others">
          <summary>Uyumsuz sürümler (${k.length})</summary>
          ${k.slice(0,25).map(A=>h(A,!1)).join("")}
        </details>`:""})()}
      ${v?`<p class="xp-note xp-note-sm">Hedef: <b>${v.name}</b> · ${v.mod_loader} ${v.mc_version}</p>`:""}
    `,o.querySelector("#xp-more")?.addEventListener("click",()=>{c+=12,u()}),o.querySelectorAll(".xp-ver-kur").forEach(k=>{k.addEventListener("click",()=>{const A=l.find(x=>x.id===k.dataset.id);A&&TE(i,A,a?.value||"",k)})})}function h(v,m){const p=v.files[0]?.size||0;return`
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
          ${p?`<span>${Go(p)}</span>`:""}
        </div>
        <button class="btn ${m?"primary":"ghost"} sm xp-ver-kur" data-id="${v.id}">
          ${i.kind==="modpack"?"Kur":t?"İndir":"Kur"}
        </button>
      </div>
    `}try{l=await te("cmd_repos_get_versions",{source:i.source,projectId:i.id,kind:i.kind,loader:"",gameVersion:""})}catch(v){o.innerHTML=`<p class="xp-note">Sürümler alınamadı: ${String(v)}</p>`;return}if(s){const v=new Set;for(const p of l)for(const g of p.game_versions||[])v.add(g);const m=[...v].sort((p,g)=>g.localeCompare(p,void 0,{numeric:!0}));s.innerHTML=m.map(p=>`<option value="${p}">${p}</option>`).join("")||'<option value="">—</option>'}if(r){const v=new Set;for(const p of l)for(const g of p.loaders||[])v.add(g);const m=["fabric","quilt","forge","neoforge","rift"].filter(p=>v.has(p));r.innerHTML=(m.length?m:[...v]).map(p=>`<option value="${p}">${p}</option>`).join("")||'<option value="">—</option>'}n?u():f()}function wE(i,e,t,n){if(!(!e||(i.game_versions||[]).includes(e)))return!1;if(n||!t)return!0;const s=(i.loaders||[]).map(o=>o.toLowerCase());if(!s.length)return!0;const r=t.toLowerCase();return!!(s.includes(r)||r==="quilt"&&s.includes("fabric")||r==="neoforge"&&s.includes("forge"))}async function TE(i,e,t,n){if(i.kind==="modpack"){await RE(i,e);return}if(!t){K("Önce bir kurulum oluştur","err"),qe("instances");return}const a=n.innerHTML;n.disabled=!0,n.innerHTML='<span class="spinner"></span>';try{["resourcepack","shader","world","datapack"].includes(i.kind)?await te("cmd_repos_install_content",{instanceId:t,source:i.source,projectId:i.id,versionId:e.id,kind:i.kind}):await te("cmd_repos_install",{instanceId:t,source:i.source,projectId:i.id,versionId:e.id}),K({resourcepack:"Doku paketleri klasörüne indirildi",shader:"Shader klasörüne indirildi",world:"Dünyalar klasörüne indirildi",datapack:"Datapacks klasörüne indirildi"}[i.kind]||`Kuruldu: ${i.title}`),n.innerHTML=`${H("check")} Kuruldu`,n.classList.remove("primary"),n.classList.add("ghost"),setTimeout(()=>{n.innerHTML=a,n.classList.add("primary"),n.classList.remove("ghost"),n.disabled=!1},2200)}catch(s){K(String(s),"err"),n.disabled=!1,n.innerHTML=a}}function AE(i){if(!/^https?:\/\//i.test(i))return;const{root:e,close:t}=Jt(`
    <div class="xp-light">
      <img src="${i}" alt="" referrerpolicy="no-referrer" />
    </div>
    <div style="display:flex; justify-content:flex-end; margin-top:10px">
      <button class="btn ghost" id="lb-close">Kapat</button>
    </div>
  `);e.querySelector("#lb-close")?.addEventListener("click",t)}async function RE(i,e){Uo(i.title);try{const t=await te("cmd_install_pack_files",{source:i.source,projectId:i.id,versionId:e.id,packName:i.title,icon:null,iconUrl:i.icon_url||null});await it(()=>Promise.resolve().then(()=>vt),void 0).then(a=>a.refreshState()),Ar();let n=0;try{const a=await te("cmd_list_mods",{instanceId:t.id});Array.isArray(a)&&(n=a.length)}catch{}await LE(t,n),qe("instances")}catch(t){Rr(String(t))}}async function LE(i,e=0){const t=await te("cmd_list_java_arg_presets"),{root:n,close:a}=Jt(`
    <h2>Özel Java argümanı eklensin mi?</h2>
    <div class="sub">Bu paket için FPS odaklı hazır ayarlardan birini seç. Sonra her zaman değiştirebilirsin.</div>
    ${sc(e,i.ram_mb,ie.sys?.total_ram_mb||0,"kurulum")}
    <div class="preset-list">
      ${t.map(s=>`
        <div class="preset-row card hover" data-id="${s.id}">
          <div class="preset-head"><b>${s.name}</b><span class="chip gray">${s.recommended_ram_mb} MB öneri</span></div>
          <p>${s.description}</p>
        </div>`).join("")}
      <div class="preset-row card hover" data-id="__skip">
        <div class="preset-head"><b>Atla — varsayılan dengeli kalsın</b></div>
      </div>
    </div>
  `);n.querySelectorAll(".preset-row").forEach(s=>{s.addEventListener("click",async()=>{const r=s.dataset.id;r!=="__skip"&&(await te("cmd_set_instance_java_preset",{id:i.id,presetId:r}),K(`Preset: ${t.find(o=>o.id===r)?.name}`)),a()})})}function CE(i){i.classList.add("news-page"),i.innerHTML=`
    <div class="page-wrap">
    <div class="page-header anim-fade-up">
      <h1>Duyurular</h1>
      <p>YIKIM resmî duyuruları — yalnızca geliştiriciden, imza doğrulamalı.</p>
    </div>
    <div id="yikim-news"><div class="spinner" style="margin:40px auto"></div></div>
    </div>
  `,PE(i)}async function PE(i){const e=i.querySelector("#yikim-news");try{const t=await te("cmd_list_yikim_news");if(!t.length){e.innerHTML=`
        <div class="card anim-fade-up" style="text-align:center;padding:40px 24px">
          <div style="margin-bottom:10px">${H("news")}</div>
          <h3>Şimdilik duyuru yok</h3>
          <p>Yeni duyurular burada belirecek — yalnızca geliştirici yayınlar.</p>
        </div>`;return}t.sort((n,a)=>(a.pinned?1:0)-(n.pinned?1:0)||a.date.localeCompare(n.date)),e.innerHTML=t.map(n=>`
      <div class="card yikim-announce ${n.pinned?"pinned":""} anim-fade-up" data-link="${n.link||""}">
        ${n.image?`<div class="yikim-img" style="background-image:url('${n.image}')"></div>`:""}
        <div class="yikim-body">
          <div class="row-between">
            <div class="chip orange">${n.pinned?`${H("sparkle")} DUYURU`:"YIKIM"} · ${n.date}</div>
            ${n.pinned?'<span class="chip">Sabit</span>':""}
          </div>
          <h3>${n.title}</h3>
          <p class="yikim-preview">${n.text}</p>
          <details class="yikim-more">
            <summary>Devamını oku</summary>
            <div class="yikim-fulltext">${n.body.split(`

`).map(a=>`<p>${a}</p>`).join("")}</div>
          </details>
          ${n.link?`<button class="btn ghost sm yikim-link">${H("globe")} ${n.link_label||"Bağlantıyı aç"}</button>`:""}
        </div>
      </div>`).join(""),e.querySelectorAll(".yikim-announce").forEach(n=>{const a=n.dataset.link;n.querySelector(".yikim-link")?.addEventListener("click",s=>{s.stopPropagation(),a?.startsWith("https://")&&Wi(a).catch(()=>{})})})}catch{e.innerHTML=""}}const Dd=[{id:"modern",name:"Modern",desc:"Üst sekme şeridi, tam sahne, sağ kart, alt durum çubuğu",bg:"#0c0a09",panel:"#17120f",line:"#2c241e",text:"#f4ece2",dim:"#8a7b6c",accent:"#ff5a1f"},{id:"sahne",name:"Sahne",desc:"Imperial uslübü — ortada karakter, piksel yazı, sarı blok butonlar",bg:"#0d0e12",panel:"#17181f",line:"#2a2c3a",text:"#f2edde",dim:"#71695c",accent:"#ffd83d"},{id:"sokum",name:"Söküm Sahası",desc:"Sıcak işlik zemini, kızıl turuncu, keskin köşe",bg:"#14100c",panel:"#201a14",line:"#382c1f",text:"#f2e9dd",dim:"#7d7264",accent:"#ff5a24"},{id:"afis",name:"Afiş Provası",desc:"Baskı kâğıdı, sert mürekkep çizgi, ofset gölge",bg:"#f3ecdd",panel:"#faf6ea",line:"#16130c",text:"#16130c",dim:"#8a7f6b",accent:"#ff4d00"},{id:"sira",name:"Sıra Düzeni",desc:"Navigasyon ÜSTTE — yatay hap şerit, makine yeşili",bg:"#0e1112",panel:"#171b1c",line:"#2a3134",text:"#edf2e6",dim:"#6c7568",accent:"#a3e635"},{id:"rihtim",name:"Rıhtım",desc:"Yüzen cam dock altta ortada — gece lacivert, deniz feneri teal",bg:"#0a0f18",panel:"#111a29",line:"#22304a",text:"#e6effa",dim:"#5e6d85",accent:"#2fd6c3"}],DE={pano:"sahne",standart:"sahne",oda:"sahne",kumas:"afis",perde:"sahne",buz:"rihtim",skala:"sira"};function IE(i){if(i.id==="modern")return`
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
      </span>`;const e=(t,n,a,s=1)=>`
    <div class="wc-row" style="top:${t}px; left:14px; width:${n}%; background:${i.dim}; opacity:${s}"></div>
    <div class="wc-lamp" style="top:${t-1}px; left:6px; background:${a}"></div>`;return`
    <span class="wc-preview" style="background:${i.bg}; border-bottom:1px solid ${i.line}">
      <span class="wc-bar" style="top:0; background:${i.panel}; border-bottom:1px solid ${i.line}"></span>
      <span class="wc-row" style="top:5px; left:8px; width:26px; height:3px; background:${i.accent}"></span>
      ${e(30,55,i.accent)}
      ${e(46,40,"#3ecf8e")}
      ${e(62,47,"#3ecf8e")}
    </span>`}function jr(i){let e=ie.config;const n={dark:"sahne",neon:"sahne",light:"afis",orange:"sahne",anons:"sahne",...DE}[e.theme]??e.theme,a=(e.tema_ozel||{})[n]||{},s=Dd.find(m=>m.id===n)||Dd[0],r=(a.accent||"").trim(),o=a.radius||"";try{const m=window.__TAURI__?.app;m?.getVersion&&m.getVersion().then(p=>{const g=i.querySelector("#app-version");g&&(g.textContent=`v${p} "Kıvılcım"`)}).catch(()=>{const p=i.querySelector("#app-version");p&&(p.textContent="v? — geliştirici sürümü")})}catch{}i.innerHTML=`
    <div class="page-wrap">
    <div class="page-header anim-fade-up">
      <h1>Ayarlar</h1>
      <p>Launcher'ı kendine göre şekillendir.</p>
    </div>

    <div class="card set-card anim-fade-up">
      <h3>${H("user")} Hesaplar</h3>
      <p class="set-sub">Birden çok hesap ekle, aralarında tek tıkla geçiş yap.</p>
      <div class="acc-list" id="acc-list">
        ${ie.accounts.map(m=>{const p=bn()?.id===m.id;return`
          <div class="acc-row ${p?"active":""}" data-id="${m.id}">
            <img class="acc-head" src="${$o(m)}" ${Ho(m)} draggable="false" />
            <div class="acc-info">
              <b>${mr(m.id)}${m.name}</b>
              <span>${m.kind==="microsoft"?"Microsoft · premium":"Offline"}</span>
            </div>
            ${p?'<span class="chip">aktif</span>':'<button class="btn ghost sm acc-use">Seç</button>'}
            <button class="btn danger sm acc-del" title="Kaldır">${H("trash")}</button>
          </div>`}).join("")||'<p class="set-sub">Henüz hesap eklenmemiş.</p>'}
      </div>
      <div style="display:flex; gap:10px; margin-top:12px">
        <button class="btn primary" id="acc-add-ms">${H("globe")} Microsoft ile Giriş</button>
        <button class="btn ghost" id="acc-add-off">${H("user")} Çevrimdışı Ekle</button>
      </div>
    </div>

    <div id="guvenlik-karti" class="anim-fade-up"></div>

    <div class="card set-card anim-fade-up">
      <h3>${H("image")} Görsel Dünya</h3>
      <p class="set-sub">Arayüzün dünyasını seç — hepsi aynı düzen, farklı karakter. Anında uygulanır.</p>
      <div class="world-grid">
        ${Dd.map(m=>`
          <button class="world-card ${n===m.id?"sel":""}" data-t="${m.id}">
            ${IE(m)}
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
        <button class="btn ghost sm" id="skins-alani">${H("shirt")} Aç</button>
      </div>
      <div class="tema-ozel" id="tema-ozel">
        <div class="tema-ozel-bas">
          ${H("picker")}
          <div>
            <b>Bu dünyayı özelleştir — ${s.name}</b>
            <small>Sadece bu tema için geçerli. Renk ve köşe değişir, düzen aynı kalır.</small>
          </div>
          <button class="btn ghost sm" id="tema-sifirla" title="Bu dünyanın tüm özelleştirmelerini sil">${H("undo")} Sıfırla</button>
        </div>
        <div class="tema-ozel-satir">
          <span class="to-etiket">Vurgu rengi</span>
          <div class="to-kontrol">
            <button class="tema-renk${r?"":" aktif"}" data-renk="" style="--sw:${s.accent}" title="Dünya rengi"></button>
            ${["#ff5a24","#ffd83d","#a3e635","#2fd6c3","#5b9dff","#c084fc","#ff4d8d","#f5f5f5"].map(m=>`<button class="tema-renk${r.toLowerCase()===m?" aktif":""}" data-renk="${m}" style="--sw:${m}"></button>`).join("")}
            <label class="tema-renk-ozel" title="Özel renk">
              <input type="color" id="tema-accent-pick" value="${r||s.accent}" />
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
      <h3>${H("sparkles")} Ambiens &amp; İmleç</h3>
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
      <h3>${H("sparkle")} Ana Menü Animasyonları</h3>
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
        <button class="btn ghost" id="anim-ekle">${H("plus")} Dışarıdan ekle</button>
        <button class="btn ghost" id="anim-yenile">${H("undo")} Listeyi yenile</button>
      </div>
    </div>

    <div class="card set-card anim-fade-up">
      <h3>${H("mug")} Java</h3>
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
      <h3>${H("gear")} Genel</h3>
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
      <h3>${H("info")} Hakkında</h3>
      <div class="about-row"><span>YIKIMLient</span><b id="app-version">yükleniyor…</b></div>
      <div class="about-row"><span>Tür</span><b>Ultra-hafif Minecraft launcher</b></div>
      <div class="about-row"><span>Motor</span><b>Tauri 2 + Rust (Electron'suz)</b></div>
      <div style="display:flex; gap:10px; margin-top:14px; flex-wrap:wrap">
        <button class="btn ghost" id="check-upd">Güncellemeleri Kontrol Et</button>
        <button class="btn ghost" id="upd-page">${H("dl")} İndirme Sayfası</button>
        <button class="btn ghost" id="open-dir">${H("folder")} Veri Klasörü</button>
      </div>
      <p style="margin-top:12px; font-size:11.5px; color:var(--text-faint)">
        YIKIMLient, Mojang veya Microsoft ile bağlantılı değildir. Minecraft, Mojang Synergies AB'nin tescilli markasıdır.
      </p>
    </div>
    </div>
  `,i.querySelector("#acc-add-ms")?.addEventListener("click",()=>dn()),i.querySelector("#acc-add-off")?.addEventListener("click",()=>dn());const l=i.querySelector("#guvenlik-karti");l&&ms(l),i.querySelectorAll(".acc-row").forEach(m=>{const p=m.dataset.id;m.querySelector(".acc-use")?.addEventListener("click",async g=>{g.stopPropagation(),await te("cmd_select_account",{accountId:p}),await nn(),jr(i),K("Hesap değiştirildi")}),m.querySelector(".acc-del")?.addEventListener("click",async g=>{g.stopPropagation(),confirm("Bu hesap kaldırılsın mı?")&&(await te("cmd_remove_account",{accountId:p}),await nn(),jr(i),K("Hesap kaldırıldı"))})}),i.querySelectorAll(".world-card").forEach(m=>m.addEventListener("click",async()=>{ie.config.theme=m.dataset.t,Si(),await Mn(),jr(i)})),i.querySelector("#skins-alani")?.addEventListener("click",()=>qe("skins"));const c=()=>ie.config.tema_ozel||={},d=async(m,p)=>{const g=c()[n]||={};g[m]=p,!g.accent&&!g.radius&&delete c()[n],Si(),await Mn()};i.querySelectorAll(".tema-renk").forEach(m=>m.addEventListener("click",async()=>{const p=m.dataset.renk||"";i.querySelectorAll(".tema-renk").forEach(g=>g.classList.toggle("aktif",g===m)),await d("accent",p),K(p?"Vurgu rengi güncellendi":"Dünya rengine dönüldü")}));const f=i.querySelector("#tema-accent-pick");f?.addEventListener("input",()=>{ie.config.tema_ozel||={},(ie.config.tema_ozel[n]||={}).accent=f.value,Si()}),f?.addEventListener("change",async()=>{await Mn(),K("Vurgu rengi kaydedildi")}),i.querySelectorAll("#tema-radius .seg-btn").forEach(m=>m.addEventListener("click",async()=>{i.querySelectorAll("#tema-radius .seg-btn").forEach(p=>p.classList.toggle("aktif",p===m)),await d("radius",m.dataset.r||"")})),i.querySelector("#tema-sifirla")?.addEventListener("click",async()=>{delete c()[n],Si(),await Mn(),jr(i),K("Bu dünyanın özelleştirmesi sıfırlandı")});const u=i.querySelector("#sas-izgara");if(u){const m=String(e.sahne_arka||"kiraz");u.innerHTML=Nl.map(g=>`
      <button class="sas-kart${g.id===m?" sel":""}" data-art="${g.id}">
        <span class="sas-tuval"><canvas data-ciz="${g.id}"></canvas></span>
        <b>${g.ad}</b>
        <small>${g.etiket}</small>
      </button>`).join("");const p=()=>{const g=u.querySelector('.sas-kart[data-art="ozel"] canvas');if(!g)return;const y=g.getContext("2d");if(!y)return;g.width=128,g.height=96,y.fillStyle="#1a1210",y.fillRect(0,0,128,96);const T=ie.config.sahne_arka_ozel||e.sahne_arka_ozel;if(!T){y.fillStyle="#6b5a50",y.fillRect(0,38,128,2),y.fillRect(63,30,2,20);return}const b=new Image;b.onload=()=>{const S=Math.max(128/b.width,96/b.height),k=b.width*S,A=b.height*S;y.drawImage(b,(128-k)/2,(96-A)/2,k,A)},b.src=ht(String(T))};u.querySelectorAll("canvas[data-ciz]").forEach(g=>{g.dataset.ciz!=="ozel"&&ic(g,g.dataset.ciz||"kiraz")}),p(),u.querySelectorAll(".sas-kart").forEach(g=>g.addEventListener("click",async y=>{const T=g.dataset.art;if(T==="ozel"){y.preventDefault();let b=null;try{b=await te("cmd_pick_scene_image")}catch{return}ie.config.sahne_arka="ozel",ie.config.sahne_arka_ozel=b.sahne_arka_ozel||null,e={...e,sahne_arka:"ozel",sahne_arka_ozel:b.sahne_arka_ozel||null},p(),u.querySelectorAll(".sas-kart").forEach(S=>S.classList.toggle("sel",S===g)),await Mn(),K("Sahne fotoğrafı seçildi");return}ie.config.sahne_arka=T,u.querySelectorAll(".sas-kart").forEach(b=>b.classList.toggle("sel",b===g)),await Mn(),K("Sahne arka planı değişti")}))}i.querySelector("#fx-particles")?.addEventListener("change",async m=>{ie.config.fx_particles=m.target.value,Si(),await Mn()}),i.querySelector("#cursor-style")?.addEventListener("change",async m=>{ie.config.cursor_style=m.target.value,Si(),await Mn()}),i.querySelector("#pick-java")?.addEventListener("click",async()=>{const m=await te("cmd_pick_java");m&&(ie.config.java_dir=m,await Mn(),i.querySelector("#java-path").textContent=m,K("Java konumu kaydedildi"))}),i.querySelector("#clear-java")?.addEventListener("click",async()=>{ie.config.java_dir=null,await Mn(),i.querySelector("#java-path").textContent="otomatik"}),Ta(i,"keep-open","keep_launcher_open"),Ta(i,"hide-on-launch","hide_on_launch"),Ta(i,"show-news","show_news"),Ta(i,"stats-enabled","stats_enabled"),Ta(i,"use-java25","use_java25"),Ta(i,"discord-rpc","discord_rpc"),Ta(i,"menu-anim","menu_animasyon"),Ta(i,"menu-anim-bizim","menu_animasyon_sadece_bizim"),i.querySelector("#menu-anim-hiz")?.addEventListener("change",async m=>{ie.config.menu_animasyon_hiz=m.target.value,await Mn()});const h=()=>Hv(i);i.querySelector("#anim-yenile")?.addEventListener("click",h),i.querySelector("#anim-ekle")?.addEventListener("click",async()=>{try{const m=await te("cmd_pick_emote");m?.length&&(K(`${m.length} animasyon eklendi`),h())}catch(m){K(`Animasyon eklenemedi: ${m}`,"err")}}),h();const v=i.querySelector("#dlc-range");v.addEventListener("input",()=>i.querySelector("#dlc-val").textContent=v.value),v.addEventListener("change",async()=>{ie.config.download_concurrency=parseInt(v.value),await Mn()}),i.querySelector("#check-upd")?.addEventListener("click",async()=>{K("Güncelleme kontrol ediliyor…");try{const p=await(await it(()=>import("./index-DSkUPpwd.js"),[])).check();if(p?.available){let g={};try{g=await te("cmd_guncelleme_bilgi")}catch{}if(g.os==="linux"&&(g.bundle==="deb"||g.bundle==="rpm")){const S=g.bundle==="rpm",k=p?.rawJson??{},A=k?.platforms?.[S?"linux-x86_64-rpm":"linux-x86_64-deb"]??k?.platforms?.["linux-x86_64-deb"]??k?.platforms?.["linux-x86_64"],x=String(A?.url||`https://github.com/YKSAMI1/yikimlient/releases/tag/v${p.version}`),{root:w,close:R}=Jt(`
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
          `);w.querySelector("#upd-later")?.addEventListener("click",()=>R()),w.querySelector("#upd-indir")?.addEventListener("click",async()=>{try{await Wi(x),R()}catch(L){K(`Bağlantı açılamadı: ${L}`,"err")}});return}const{root:T,close:b}=Jt(`
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
        `);T.querySelector("#upd-later")?.addEventListener("click",()=>b()),T.querySelector("#upd-go")?.addEventListener("click",async()=>{const S=T.querySelector("#upd-go");S.disabled=!0,S.textContent="İndiriliyor…";try{await p.downloadAndInstall(),K("Güncelleme kuruldu — launcher yeniden başlıyor"),setTimeout(()=>{try{window.__TAURI__.process.exit(0)}catch{location.reload()}},900)}catch(k){S.disabled=!1,S.textContent="İndir ve Kur",K(`Güncelleme başarısız: ${k}`,"err")}})}else K("YIKIMLient güncel ✓")}catch(m){await OE(m)}}),i.querySelector("#upd-page")?.addEventListener("click",()=>{Wi(cc).catch(()=>K(`Tarayıcı açılamadı — adresi elle aç: ${cc}`,"err"))}),i.querySelector("#open-dir")?.addEventListener("click",async()=>{const m=await te("cmd_get_app_dir");m0(m).catch(()=>{})}),UE(i,e)}function zE(i){const e=bn();if(!e||e.kind!=="microsoft")return!1;const t=e.name.toLowerCase(),n=a=>(Array.isArray(a)?a:[]).some(s=>String(s).toLowerCase()===t);return n(i?.atolye_admin)||n(i?.atolye_izinli)}const Id=["#ffffff","#c9ced8","#5b6472","#12151c","#ff5a24","#ffd83d","#a3e635","#2fd6c3","#5b9dff","#c084fc","#ff4d8d","#8b3a1e"];function UE(i,e){const t=i.querySelector("#rozet-alani");if(t){if(zE(e)){nm(i,e);return}t.innerHTML="",te("cmd_rozet_yetki").then(n=>{n?.izinli&&nm(i,e)}).catch(()=>{})}}function nm(i,e){const t=i.querySelector("#rozet-alani");if(!t)return;const n=bn(),a=!!n&&(e?.atolye_admin||[]).some(R=>String(R).toLowerCase()===n.name.toLowerCase());let s=new Array(64).fill("");const r=R=>/^#[0-9a-fA-F]{6}$/.test(String(R||""));let o=r(e.rozet_renk)?String(e.rozet_renk):"#ffd83d",l=(Array.isArray(e.rozet_renkler)?e.rozet_renkler:[]).filter(r).slice(0,24),c=!1;const d=[];let f=[...e.atolye_izinli||[]];t.innerHTML=`
    <div class="card set-card anim-fade-up">
      <h3>${H("brush")} Rozet — İsim Logosu <span class="chip">yalnız sahip</span></h3>
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
              ${H("brush")}
            </button>
            <div class="rozet-renkler" id="rozet-renkler"></div>
            <label class="rozet-renk ozel-renk" title="İstediğin rengi seç (sınırsız)">
              <input type="color" id="rozet-renk-sec" value="${o}" />
              <span class="ozel-arti">+</span>
            </label>
            <button class="rozet-renk${c?" aktif":""}" id="rozet-silgi" title="Silgi">
              ${H("trash")}
            </button>
          </div>
          <div class="rozet-hex-satir">
            <span class="rozet-hex-onizleme" id="rozet-hex-onizleme" style="--c:${o}"></span>
            <input class="input rozet-hex" id="rozet-hex" maxlength="7" placeholder="#rrggbb" value="${o}" />
            <button class="btn ghost sm" id="rozet-renk-kaydet">Rengi kaydet</button>
          </div>
          <div class="rozet-araclar">
            <button class="btn ghost sm" id="rozet-geri">${H("undo")} Geri</button>
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
          <button class="btn ghost sm" id="rozet-ekle">${H("plus")} Ekle</button>
        </div>
        <div class="rozet-cipler" id="rozet-cipler"></div>
      </div>`:""}
    </div>`;const u=t.querySelector("#rozet-izgara"),h=t.querySelector("#rozet-onizleme"),v=t.querySelector("#rozet-cipler"),m=()=>{u.innerHTML=s.map((R,L)=>`<button class="rozet-hucre${R?" dolu":""}" data-i="${L}" style="--c:${R||"transparent"}"></button>`).join(""),h.innerHTML=s.map(R=>`<i style="--c:${R||"transparent"}"></i>`).join("")},p=R=>{const L=c?"":o;s[R]!==L&&(s[R]=L,m())};u.addEventListener("click",R=>{const L=R.target.closest(".rozet-hucre");L&&(d.push([...s]),d.length>40&&d.shift(),p(Number(L.dataset.i)))});const g=t.querySelector("#rozet-renkler"),y=t.querySelector("#rozet-hex"),T=t.querySelector("#rozet-hex-onizleme"),b=t.querySelector("#rozet-renk-sec"),S=()=>{const R=[...Id,...l];g.innerHTML=R.map((L,z)=>`<button class="rozet-renk${L.toLowerCase()===o.toLowerCase()?" secili":""}" data-c="${L}" style="--c:${L}" title="${L}" data-ozel="${z>=Id.length?1:0}"></button>`).join(""),g.querySelectorAll(".rozet-renk").forEach(L=>L.addEventListener("click",()=>{const z=L.dataset.c||"";c=!1,z&&k(z)}))},k=(R,L=!0)=>{o=R.toLowerCase(),c=!1,t.querySelector("#rozet-silgi")?.classList.remove("aktif"),y.value=o,T.style.setProperty("--c",o),b.value=o,S(),L&&(ie.config.rozet_renk=o,Mn())},A=R=>{if(!r(R))return K("Geçersiz renk — #rrggbb biçiminde yaz","err"),!1;const L=R.toLowerCase();return[...Id,...l].some(z=>z.toLowerCase()===L)||(l=[...l,L].slice(-24),ie.config.rozet_renkler=[...l]),k(L),!0};b?.addEventListener("input",()=>{k(b.value,!1)}),b?.addEventListener("change",()=>A(b.value)),t.querySelector("#rozet-renk-kaydet")?.addEventListener("click",()=>{const R=y.value.trim(),L=R.startsWith("#")?R:`#${R}`;A(L)&&K(`Renk paletine eklendi: ${L.toLowerCase()}`)}),y?.addEventListener("keydown",R=>{R.key==="Enter"&&t.querySelector("#rozet-renk-kaydet")?.dispatchEvent(new Event("click"))}),y?.addEventListener("input",()=>{const R=y.value.trim(),L=R.startsWith("#")?R:`#${R}`;T.style.setProperty("--c",r(L)?L:"transparent")}),t.querySelector("#rozet-silgi")?.addEventListener("click",()=>{c=!0,t.querySelectorAll(".rozet-renk").forEach(R=>R.classList.remove("aktif","secili")),t.querySelector("#rozet-silgi")?.classList.add("aktif")}),t.querySelector("#rozet-geri")?.addEventListener("click",()=>{const R=d.pop();R&&(s=R,m())}),t.querySelector("#rozet-temizle")?.addEventListener("click",()=>{d.push([...s]),s=new Array(64).fill(""),m()}),t.querySelector("#rozet-stok")?.addEventListener("click",()=>{d.push([...s]),s=NE(),m()}),t.querySelector("#rozet-kaydet")?.addEventListener("click",async()=>{const R=t.querySelector("#rozet-kaydet");R.disabled=!0,R.textContent="Kaydediliyor…";try{const L=await te("cmd_rozet_ciz",{pikseller:s});K(L?.yuklendi?`Rozet kaydedildi — ${L.kurulum} yere yazıldı ve diğer oyunculara yayınlandı`:`Rozet kaydedildi — ${L.kurulum} yere yazıldı (sunucuya ulaşılamadı: ${L?.hata||"ağ"})`)}catch(L){K(`Rozet kaydedilemedi: ${L}`,"err")}finally{R.disabled=!1,R.textContent="Kaydet ve yayınla"}}),t.querySelector("#rozet-sil")?.addEventListener("click",async()=>{confirm("Rozet kaldırılsın mı? İsimlerin başında standart Y logosu görünür.")&&(await te("cmd_rozet_sil"),s=new Array(64).fill(""),m(),K("Rozet kaldırıldı"))});const x=()=>{v&&(v.innerHTML=f.length?f.map((R,L)=>`<span class="rozet-cip">${R}<button data-i="${L}" title="Kaldır">×</button></span>`).join(""):'<span class="set-sub" style="margin:0; font-size:11.5px">Henüz kimse eklenmedi.</span>',v.querySelectorAll("button").forEach(R=>R.addEventListener("click",()=>{f.splice(Number(R.dataset.i),1),w()})))},w=async()=>{ie.config.atolye_izinli=[...f],await Mn(),x();try{(await te("cmd_rozet_izinler",{isimler:f}))?.yuklendi||K("Liste sunucuya gönderilemedi (yerel kaydedildi)","err")}catch{}};t.querySelector("#rozet-ekle")?.addEventListener("click",()=>{const R=t.querySelector("#rozet-isim"),L=R.value.trim();if(L){if(f.some(z=>z.toLowerCase()===L.toLowerCase())){K("Bu isim zaten listede");return}f.push(L),R.value="",w(),K(`${L} eklendi`)}}),t.querySelector("#rozet-isim")?.addEventListener("keydown",R=>{R.key==="Enter"&&t.querySelector("#rozet-ekle")?.click()}),m(),S(),x(),te("cmd_rozet_oku").then(R=>{const L=R?.pikseller;Array.isArray(L)&&L.length===64&&(s=L,m())}).catch(()=>{})}function NE(){const i="#ffffff",e="#ff5a24";return[[i,"","","","",e,"",""],[i,"","","",e,e,"",""],["",i,"","","",e,"",""],["",i,"","",e,"","",""],["","",i,"",e,"","",""],["","",i,"",e,"","",""],["","",i,"","","","",""],["","",i,"","","","",""]].flat()}const cc="https://github.com/YKSAMI1/yikimlient/releases/latest";function im(i){return String(i??"").trim().replace(/^v/i,"")}async function OE(i){let e="",t="";try{const s=await te("cmd_check_updates"),r=im(s?.current),o=im(s?.latest);o&&o!==r&&(e=o)}catch{}try{const s=await te("cmd_upd_teshis"),r=Array.isArray(s?.platformlar)&&s.platformlar.length?s.platformlar.join(", "):"yok",o=[`HTTP ${s?.durum||"?"}`,`manifest ${s?.surum||"?"}`,`platform: ${r}`];s?.hata&&o.push(String(s.hata)),t=o.join(" · ")}catch{}const{root:n,close:a}=Jt(`
    <h2>Güncelleme kontrolü başarısız</h2>
    <div class="sub">Otomatik güncelleyici bu sefer çalışmadı. Launcher'ı elle de güncelleyebilirsin — kurulum dosyası GitHub'daki sürüm sayfasında.</div>
    ${e?`<div style="margin-top:10px; font-size:13px; color:var(--text)">GitHub'da yeni sürüm duruyor: <b>v${e}</b></div>`:""}
    <div style="margin-top:10px; font-size:11.5px; line-height:1.5; color:var(--text-faint); user-select:text">${t?`Teşhis: ${t}`:`Hata: ${String(i??"bilinmiyor")}`}</div>
    <div style="display:flex; gap:10px; justify-content:flex-end; margin-top:14px">
      <button class="btn ghost" id="upd-kapat">Kapat</button>
      <button class="btn primary" id="upd-sayfa">${H("dl")} İndirme Sayfası</button>
    </div>
  `);n.querySelector("#upd-kapat")?.addEventListener("click",()=>a()),n.querySelector("#upd-sayfa")?.addEventListener("click",()=>{Wi(cc).catch(()=>K(`Tarayıcı açılamadı — adresi elle aç: ${cc}`,"err"))})}async function Hv(i){const e=i.querySelector("#anim-liste");if(e)try{const t=await te("cmd_list_emotes");if(!t.length){e.innerHTML='<p class="set-sub" style="margin:10px 0 0">Henüz animasyon yok.</p>';return}e.innerHTML="";for(const n of t){const a=document.createElement("div");a.className="anim-satir",a.innerHTML=`
        <span class="anim-ad">${n.baslik||n.adi}</span>
        ${n.yerlesik?'<span class="chip gray">paket</span>':'<span class="chip">kendi</span>'}
        ${n.yerlesik?"":`<button class="btn danger sm anim-sil" title="Kaldır">${H("trash")}</button>`}`,a.querySelector(".anim-sil")?.addEventListener("click",async()=>{confirm(`"${n.baslik}" kaldırılsın mı?`)&&(await te("cmd_delete_emote",{adi:n.adi}),K("Animasyon kaldırıldı"),Hv(i))}),e.appendChild(a)}}catch(t){e.innerHTML=`<p class="set-sub" style="margin:10px 0 0">Liste yüklenemedi: ${String(t)}</p>`}}function wa(i,e,t){return`
    <div class="row-between" style="margin-top:8px">
      <span>${e}</span>
      <div class="switch ${t?"on":""}" data-tid="${i}"></div>
    </div>`}function Ta(i,e,t){i.querySelector(`[data-tid="${e}"]`)?.addEventListener("click",async n=>{const a=n.currentTarget;a.classList.toggle("on"),ie.config[t]=a.classList.contains("on"),await Mn()})}async function Mn(){await te("cmd_save_settings",{config:ie.config}),await nn(),Si()}const Tn=64,cs=64,FE=40;class dc{w=Tn;h=cs;veri;gecmis=[];gelecek=[];constructor(e){this.veri=e?new Uint8ClampedArray(e):new Uint8ClampedArray(Tn*cs*4)}static bos(){return new dc}static rgba(e,t=0){return[e[t],e[t+1],e[t+2],e[t+3]]}kopya(){return new dc(this.veri)}piksel(e,t){if(e<0||t<0||e>=Tn||t>=cs)return[0,0,0,0];const n=(t*Tn+e)*4;return[this.veri[n],this.veri[n+1],this.veri[n+2],this.veri[n+3]]}boya(e,t,n,a=1){const s=Math.max(1,Math.min(8,Math.floor(a))),r=e-Math.floor((s-1)/2),o=t-Math.floor((s-1)/2);for(let l=0;l<s;l++)for(let c=0;c<s;c++){const d=r+c,f=o+l;if(d<0||f<0||d>=Tn||f>=cs)continue;const u=(f*Tn+d)*4;this.veri[u]=n[0],this.veri[u+1]=n[1],this.veri[u+2]=n[2],this.veri[u+3]=n[3]}}cizgi(e,t,n,a,s,r=1){let o=Math.round(e),l=Math.round(t);const c=Math.round(n),d=Math.round(a),f=Math.abs(c-o),u=-Math.abs(d-l),h=o<c?1:-1,v=l<d?1:-1;let m=f+u;for(;this.boya(o,l,s,r),!(o===c&&l===d);){const p=2*m;p>=u&&(m+=u,o+=h),p<=f&&(m+=f,l+=v)}}kova(e,t,n){if(e<0||t<0||e>=Tn||t>=cs)return;const a=this.piksel(e,t);if(am(a,n))return;const s=[t*Tn+e],r=new Uint8Array(Tn*cs);for(;s.length;){const o=s.pop();if(r[o])continue;r[o]=1;const l=o%Tn,c=Math.floor(o/Tn);am(this.piksel(l,c),a)&&(this.boya(l,c,n),l>0&&s.push(o-1),l<Tn-1&&s.push(o+1),c>0&&s.push(o-Tn),c<cs-1&&s.push(o+Tn))}}damla(e,t){return this.piksel(e,t)}katmanBasla(){this.gecmis.push(new Uint8ClampedArray(this.veri)),this.gecmis.length>FE&&this.gecmis.shift(),this.gelecek.length=0}geriAl(){const e=this.gecmis.pop();return e?(this.gelecek.push(new Uint8ClampedArray(this.veri)),this.veri=e,!0):!1}ileriAl(){const e=this.gelecek.pop();return e?(this.gecmis.push(new Uint8ClampedArray(this.veri)),this.veri=e,!0):!1}geriVar(){return this.gecmis.length>0}ileriVar(){return this.gelecek.length>0}}function am(i,e){return i[0]===e[0]&&i[1]===e[1]&&i[2]===e[2]&&i[3]===e[3]}function BE(i){const e=new Uint8ClampedArray(16384);for(let t=0;t<32;t++){const n=t*64*4;e.set(i.subarray(n,n+64*4),n)}return e}function oi(i,e,t,n,a){return[{x:i+a,y:e,w:t,h:a},{x:i+a+t,y:e,w:t,h:a},{x:i,y:e+a,w:a,h:n},{x:i+a,y:e+a,w:t,h:n},{x:i+a+t,y:e+a,w:a,h:n},{x:i+a+t+a,y:e+a,w:t,h:n}]}const sm=[{id:"kafa",ad:"Kafa",x:8,y:8,w:8,h:8,katman:"taban",dilimler:oi(0,0,8,8,8)},{id:"govde",ad:"Gövde",x:20,y:20,w:8,h:12,katman:"taban",dilimler:oi(16,16,8,12,4)},{id:"sag-kol",ad:"Sağ Kol",x:44,y:20,w:4,h:12,katman:"taban",dilimler:oi(40,16,4,12,4)},{id:"sol-kol",ad:"Sol Kol",x:36,y:52,w:4,h:12,katman:"taban",dilimler:oi(32,48,4,12,4)},{id:"sag-bacak",ad:"Sağ Bacak",x:4,y:20,w:4,h:12,katman:"taban",dilimler:oi(0,16,4,12,4)},{id:"sol-bacak",ad:"Sol Bacak",x:20,y:52,w:4,h:12,katman:"taban",dilimler:oi(16,48,4,12,4)},{id:"sapka",ad:"Şapka",x:40,y:8,w:8,h:8,katman:"ust",dilimler:oi(32,0,8,8,8)},{id:"ceket",ad:"Ceket",x:20,y:36,w:8,h:12,katman:"ust",dilimler:oi(16,32,8,12,4)},{id:"sag-kolluk",ad:"Sağ Kolluk",x:44,y:36,w:4,h:12,katman:"ust",dilimler:oi(40,32,4,12,4)},{id:"sol-kolluk",ad:"Sol Kolluk",x:52,y:52,w:4,h:12,katman:"ust",dilimler:oi(48,48,4,12,4)},{id:"sag-pantolon",ad:"Sağ Pantolon",x:4,y:36,w:4,h:12,katman:"ust",dilimler:oi(0,32,4,12,4)},{id:"sol-pantolon",ad:"Sol Pantolon",x:4,y:52,w:4,h:12,katman:"ust",dilimler:oi(0,48,4,12,4)}],zd={x:1,y:1,w:10,h:16},$E={x:12,y:1,w:10,h:16},Gv=20,HE=36,GE=2,VE=4,qE=1;function WE(i){const e=i?3:4,t=qE+4,n=i?t-3:t-4,a=t+8;return[{ad:"sag-bacak",x:t,y:20,on:{x:4,y:20,w:4,h:12},yan:{x:8,y:20,w:4,h:12},yanGorunur:!1,ust:{x:4,y:36,w:4,h:12},ustYan:{x:8,y:36,w:4,h:12}},{ad:"sol-bacak",x:t+4,y:20,on:{x:20,y:52,w:4,h:12},yan:{x:24,y:52,w:4,h:12},yanGorunur:!0,ust:{x:4,y:52,w:4,h:12},ustYan:{x:8,y:52,w:4,h:12}},{ad:"govde",x:t,y:8,on:{x:20,y:20,w:8,h:12},yan:{x:28,y:20,w:4,h:12},yanGorunur:!1,ust:{x:20,y:36,w:8,h:12},ustYan:{x:28,y:36,w:4,h:12}},{ad:"sag-kol",x:n,y:8,on:{x:44,y:20,w:e,h:12},yan:{x:44+e,y:20,w:e,h:12},yanGorunur:!1,ust:{x:44,y:36,w:e,h:12},ustYan:{x:44+e,y:36,w:e,h:12}},{ad:"sol-kol",x:a,y:8,on:{x:36,y:52,w:e,h:12},yan:{x:36+e,y:52,w:e,h:12},yanGorunur:!0,ust:{x:52,y:52,w:e,h:12},ustYan:{x:52+e,y:52,w:e,h:12}},{ad:"kafa",x:t,y:0,on:{x:8,y:8,w:8,h:8},yan:{x:16,y:8,w:8,h:8},yanGorunur:!0,ust:{x:40,y:8,w:8,h:8},ustYan:{x:48,y:8,w:8,h:8}}]}function KE(i){const e=i.getContext("2d",{willReadFrequently:!0});return e?(n=>{let a=0;try{const s=e.getImageData(n.x,n.y,n.w,n.h).data;for(let r=3;r<s.length;r+=4)s[r]>8&&a++}catch{return 0}return a})(zd)>0?zd:$E:zd}const Ve=64,Mt=32,Nn=Ve*Mt,Vv={pelerin:{u:0,v:0,w:10,h:16,d:1},kanat:{u:22,v:0,w:10,h:20,d:2}},Cc=[{id:"p-dis",ad:"Dış (görünen)",x:1,y:1,w:10,h:16},{id:"p-ic",ad:"İç (astar)",x:12,y:1,w:10,h:16},{id:"p-sol",ad:"Sol yan",x:11,y:1,w:1,h:16},{id:"p-sag",ad:"Sağ yan",x:0,y:1,w:1,h:16},{id:"p-ust",ad:"Üst",x:1,y:0,w:10,h:1},{id:"p-alt",ad:"Alt",x:11,y:0,w:10,h:1}],Pc=[{id:"e-dis",ad:"Dış (görünen)",x:36,y:2,w:10,h:20},{id:"e-ic",ad:"İç",x:24,y:2,w:10,h:20},{id:"e-sol",ad:"Sol yan",x:34,y:2,w:2,h:20},{id:"e-sag",ad:"Sağ yan",x:22,y:2,w:2,h:20},{id:"e-ust",ad:"Üst",x:24,y:0,w:10,h:2},{id:"e-alt",ad:"Alt",x:34,y:0,w:10,h:2}];function ja(i){return(i==="pelerin"?Cc:Pc)[0]}function qv(i){return(i==="pelerin"?Cc:Pc)[1]}function Cs(){return Array.from({length:Nn},()=>"")}function hi(i){return!i.some(e=>e!=="")}function rm(){const i=document.createElement("canvas");return i.width=Ve,i.height=Mt,i}function uc(i,e,t){const n=i.getContext("2d");if(n){n.imageSmoothingEnabled=!1,n.clearRect(0,0,Ve,Mt),t&&t(n);for(let a=0;a<Mt;a++)for(let s=0;s<Ve;s++){const r=e[a*Ve+s];r&&(n.fillStyle=r,n.fillRect(s,a,1,1))}}}function ju(i){const e=i.getImageData(0,0,Ve,Mt).data,t=new Array(Nn);for(let n=0;n<Nn;n++){const a=e[n*4+3];t[n]=a<24?"":`#${Ud(e[n*4])}${Ud(e[n*4+1])}${Ud(e[n*4+2])}`}return t}const Ud=i=>i.toString(16).padStart(2,"0"),XE=["#46515d","#7f8f9f","#424c58","#4f5c6a","#4a5663","#5f6f80","#586675","#67788a","#77889a","#6d7f92"],YE="31,0,0;32,0,0;33,0,0;34,0,1;35,0,1;36,0,1;37,0,1;38,0,1;39,0,1;32,1,0;33,1,0;34,2,0;35,2,0;36,2,2;37,2,0;38,2,0;39,2,0;40,2,0;41,2,2;34,3,0;35,3,0;36,3,2;37,3,2;38,3,0;39,3,0;40,3,0;41,3,0;42,3,0;35,4,0;36,4,2;37,4,2;38,4,0;39,4,0;40,4,0;41,4,0;42,4,0;43,4,2;35,5,0;36,5,2;37,5,2;38,5,0;39,5,0;40,5,0;41,5,0;42,5,0;43,5,0;35,6,0;36,6,2;37,6,0;38,6,2;39,6,0;40,6,0;41,6,0;42,6,3;43,6,3;35,7,0;36,7,2;37,7,0;38,7,0;39,7,2;40,7,4;41,7,3;42,7,3;43,7,3;44,7,5;35,8,4;36,8,2;37,8,0;38,8,0;39,8,4;40,8,4;41,8,4;42,8,3;43,8,6;44,8,5;35,9,4;36,9,4;37,9,4;38,9,3;39,9,3;40,9,3;41,9,3;42,9,4;43,9,6;44,9,6;35,10,3;36,10,4;37,10,3;38,10,4;39,10,3;40,10,3;41,10,6;42,10,5;43,10,5;44,10,7;22,11,8;36,11,3;37,11,6;38,11,6;39,11,6;40,11,5;41,11,5;42,11,5;43,11,5;44,11,7;45,11,1;22,12,8;36,12,6;37,12,5;38,12,5;39,12,5;40,12,6;41,12,5;42,12,5;43,12,7;44,12,9;45,12,1;22,13,1;36,13,6;37,13,5;38,13,5;39,13,5;40,13,5;41,13,6;42,13,7;43,13,7;44,13,9;45,13,1;22,14,8;36,14,5;37,14,5;38,14,7;39,14,9;40,14,9;41,14,9;42,14,9;43,14,9;44,14,7;45,14,8;22,15,1;36,15,7;37,15,9;38,15,7;39,15,7;40,15,9;41,15,9;42,15,9;43,15,9;44,15,9;45,15,1;22,16,1;37,16,7;38,16,9;39,16,9;40,16,7;41,16,7;42,16,7;43,16,9;44,16,1;45,16,1;22,17,8;37,17,7;38,17,7;39,17,9;40,17,9;41,17,9;42,17,9;43,17,8;44,17,8;45,17,8;22,18,1;37,18,8;38,18,1;39,18,8;40,18,1;41,18,1;42,18,1;43,18,1;44,18,1;45,18,1;22,19,1;38,19,1;39,19,1;40,19,8;41,19,8;42,19,8;43,19,1;44,19,1;45,19,1;22,20,7;38,20,8;39,20,1;40,20,1;41,20,1;42,20,1;43,20,8;44,20,8;45,20,8;22,21,7;39,21,8;40,21,8;41,21,1;42,21,1;43,21,1;44,21,1;45,21,1";function Xf(){const i=Cs();for(const e of YE.split(";")){const[t,n,a]=e.split(",");i[Number(n)*Ve+Number(t)]=XE[Number(a)]}return i}const Yf=VE,Wv=Gv*Yf,Kv=HE*Yf,ZE=.3,Nd=2;let JE=null;function om(i,e,t,n,a,s,r){s<=0||r<=0||i.drawImage(e,t.x,t.y,t.w,t.h,n,a,s,r)}function lm(i,e,t,n,a,s,r){if(s<=0||r<=0)return;const o=JE??=document.createElement("canvas"),l=Math.round(s),c=Math.round(r);o.width=l,o.height=c;const d=o.getContext("2d");d&&(d.imageSmoothingEnabled=!1,d.drawImage(e,t.x,t.y,t.w,t.h,0,0,l,c),d.globalCompositeOperation="source-atop",d.fillStyle=`rgba(0, 0, 0, ${ZE})`,d.fillRect(0,0,l,c),d.globalCompositeOperation="source-over",i.drawImage(o,n,a))}function jE(i,e,t,n=Yf){const a=n;i.imageSmoothingEnabled=!1,i.clearRect(0,0,i.canvas.width,i.canvas.height);const s=WE(t),r=GE*a;i.save(),i.fillStyle="rgba(0, 0, 0, 0.34)",i.beginPath(),i.ellipse(Gv/2*a,(31.3+Nd)*a,6.2*a,1*a,0,0,Math.PI*2),i.fill(),i.restore();for(const o of s){if(!o.yanGorunur)continue;const l=(o.x+o.on.w)*a,c=(o.y+Nd)*a;lm(i,e,o.yan,l,c,r,o.on.h*a),o.ust&&o.ustYan&&lm(i,e,o.ustYan,l,c,r,o.on.h*a)}for(const o of s){const l=o.x*a,c=(o.y+Nd)*a;om(i,e,o.on,l,c,o.on.w*a,o.on.h*a),o.ust&&om(i,e,o.ust,l,c,o.ust.w*a,o.ust.h*a)}}const QE=["#000000","#ffffff","#7f7f7f","#c0c0c0","#ff5555","#ff9f43","#ffe066","#4cd964","#34c3ff","#4b6bff","#a55eea","#ff6bcb","#7a4a2b","#c98b5e","#2b6b3a","#123a5e"],Sn=64;function ew(i,e,t,n){const a=e.pafta;let s=e.slim,r=e.ad,o="kalem",l=1,c=[255,90,40,255],d=null,f=!1,u=8,h=!1,v=-1,m=-1;const p=document.createElement("div");p.className="sk-edit",p.innerHTML=`
    <header class="sk-edit-ust">
      <button class="btn ghost" id="ske-geri">${H("back")} Kapat</button>
      <div class="sk-edit-baslik">
        <b>Skin Düzenle</b>
        <span id="ske-ad-etiket">${Od(r)}</span>
      </div>
      <div class="sk-edit-ust-sag">
        <div class="sk-edit-seg" role="group" aria-label="Model tipi">
          <button class="seg-btn aktif" data-slim="0">Wide</button>
          <button class="seg-btn" data-slim="1">Slim</button>
        </div>
        <button class="btn" id="ske-disa">${H("dl")} Dışa Aktar</button>
        <button class="btn primary" id="ske-kaydet">Kaydet</button>
      </div>
    </header>
    <div class="sk-edit-govde">
      <section class="sk-edit-sol">
        <div class="sk-tuval-sar" id="ske-sar">
          <canvas id="ske-tuval" width="${Sn*u}" height="${Sn*u}"></canvas>
          <canvas id="ske-izgara" width="${Sn*u}" height="${Sn*u}"></canvas>
          <canvas id="ske-3d-tuval" hidden></canvas>
        </div>
        <div class="sk-edit-zum">
          ${[4,8,16].map(B=>`<button class="seg-btn ${B===u?"aktif":""}" data-zum="${B}">${B}×</button>`).join("")}
          <span class="sk-edit-ipucu">Ctrl+Z geri · Ctrl+Shift+Z ileri · Ctrl+S kaydet</span>
        </div>
      </section>
      <aside class="sk-edit-sag">
        <div class="sk-blok">
          <div class="sk-blok-baslik">${H("box")} 3D çizim</div>
          <div class="sk-edit-3dbar">
            <button class="seg-btn" id="ske-3d" title="Doğrudan modelin üstüne çiz">${H("box")} 3D Çiz</button>
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
          <div class="sk-blok-baslik">${H("brush")} Araçlar</div>
          <div class="sk-arac-cubugu">
            <button class="sk-arac aktif" data-arac="kalem" title="Kalem">${H("brush")}</button>
            <button class="sk-arac" data-arac="silgi" title="Silgi">${H("eraser")}</button>
            <button class="sk-arac" data-arac="kova" title="Kova — bitişik aynı renk alanını doldur">${H("bucket")}</button>
            <button class="sk-arac" data-arac="damla" title="Damlalık — tuvalden renk al">${H("picker")}</button>
            <span class="sk-arac-ayrac"></span>
            <button class="sk-arac" id="ske-geri-al" title="Geri Al">${H("undo")}</button>
            <button class="sk-arac" id="ske-ileri-al" title="İleri Al">${H("redo")}</button>
            <div class="sk-kalinlik">
              ${[1,2,4].map(B=>`<button class="seg-btn ${B===1?"aktif":""}" data-kalinlik="${B}" title="${B} piksel kalınlık">${B}</button>`).join("")}
            </div>
          </div>
        </div>

        <div class="sk-blok">
          <div class="sk-blok-baslik">${H("sparkle")} Renk</div>
          <div class="sk-renk-satir">
            <input type="color" id="ske-renk" value="#ff5a28" aria-label="Renk" />
            <input class="input" id="ske-renk-hex" value="#ff5a28" maxlength="7" spellcheck="false" aria-label="Renk kodu (hex)" />
          </div>
          <span class="sk-etiket">Son kullandıkların</span>
          <div class="kz-son-renkler" id="ske-son"></div>
          <span class="sk-etiket">Hazır palet</span>
          <div class="sk-palet" id="ske-palet">
            ${QE.map(B=>`<button class="sk-palet-renk" data-renk="${B}" style="--c:${B}" title="${B}"></button>`).join("")}
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
                  ${sm.filter(E=>E.katman===B).map(E=>`<button class="sk-bolge" data-bolge="${E.id}">${E.ad}</button>`).join("")}
                </div>`).join("")}
            </div>
          </div>
        </div>

        <div class="sk-blok">
          <div class="sk-blok-baslik">${H("check")} Kaydet</div>
          <div class="sk-edit-kayit">
            <label class="sk-edit-etiket">Skin adı</label>
            <input class="input" id="ske-ad" value="${Od(r)}" maxlength="48" />
            <div class="sk-edit-kayit-btn">
              <button class="btn" id="ske-kitaplik">${H("folder")} Sadece Kitaplığa Kaydet</button>
              <button class="btn primary" id="ske-giy">${H("check")} Kaydet ve Giy</button>
            </div>
            <div class="sk-edit-uyari" id="ske-uyari"></div>
          </div>
        </div>
      </aside>
    </div>
  `,document.body.appendChild(p);const g=p.querySelector("#ske-tuval"),y=p.querySelector("#ske-izgara"),T=g.getContext("2d"),b=y.getContext("2d"),S=p.querySelector("#ske-onizleme"),k=document.createElement("canvas");k.width=Sn,k.height=Sn;const A=k.getContext("2d"),x=Fn();x.kur(S),x.tuvalDoku(k,s),(async()=>{try{const B=await te("cmd_kozmetik_oku");B.pelerin_dosya&&B.pelerin_aktif!==!1&&await x.pelerin({url:ht(B.pelerin_dosya)})}catch{}})();function w(){const B=new ImageData(new Uint8ClampedArray(a.veri),Sn,Sn);A.putImageData(B,0,0),T.imageSmoothingEnabled=!1,T.clearRect(0,0,g.width,g.height),T.drawImage(k,0,0,g.width,g.height),R(),x.dokuTazele()}function R(){b.clearRect(0,0,y.width,y.height);const B=y.width/Sn;if(u>=8){b.strokeStyle="rgba(255,255,255,0.09)",b.lineWidth=1;for(let E=1;E<Sn;E++)b.beginPath(),b.moveTo(E*B,0),b.lineTo(E*B,y.height),b.stroke(),b.beginPath(),b.moveTo(0,E*B),b.lineTo(y.width,E*B),b.stroke()}if(d){b.strokeStyle="rgba(255,150,60,0.35)",b.lineWidth=1,b.setLineDash([]);for(const E of d.dilimler)E.x===d.x&&E.y===d.y||b.strokeRect(E.x*B+.5,E.y*B+.5,E.w*B-1,E.h*B-1);if(b.strokeStyle="rgba(255,150,60,0.95)",b.lineWidth=2,b.setLineDash([6,4]),b.strokeRect(d.x*B+1,d.y*B+1,d.w*B-2,d.h*B-2),b.setLineDash([]),f){b.fillStyle="rgba(0,0,0,0.55)",b.beginPath(),b.rect(0,0,y.width,y.height);for(const E of d.dilimler)b.rect(E.x*B,E.y*B,E.w*B,E.h*B);b.fill("evenodd")}}}function L(B){const E=g.getBoundingClientRect(),_=Math.floor((B.clientX-E.left)/E.width*Sn),O=Math.floor((B.clientY-E.top)/E.height*Sn);return[Math.max(0,Math.min(Sn-1,_)),Math.max(0,Math.min(Sn-1,O))]}function z(){return o==="silgi"?[0,0,0,0]:c}g.addEventListener("pointerdown",B=>{if(B.button!==0)return;const[E,_]=L(B);if(h=!0,v=E,m=_,g.setPointerCapture(B.pointerId),o==="damla"){c=a.damla(E,_),Z(c,!0);return}a.katmanBasla(),o==="kova"?a.kova(E,_,z()):a.boya(E,_,z(),l),w()}),g.addEventListener("pointermove",B=>{if(!h)return;const[E,_]=L(B);E===v&&_===m||((o==="kalem"||o==="silgi")&&(a.cizgi(v,m,E,_,z(),l),w()),v=E,m=_)});const F=()=>{h=!1,v=-1,m=-1};g.addEventListener("pointerup",F),g.addEventListener("pointercancel",F);const C="yikim:renk:son";function $(){try{const B=JSON.parse(localStorage.getItem(C)||"[]");return Array.isArray(B)?B.filter(E=>typeof E=="string"&&/^#[0-9a-fA-F]{6}$/.test(E)).slice(0,12):[]}catch{return[]}}function D(B){const E=p.querySelector("#ske-son");E&&(E.innerHTML=$().map(_=>`<button class="kz-renk${_.toLowerCase()===B?.toLowerCase()?" aktif":""}" data-renk="${_}" style="background:${_}" title="${_}" aria-label="${_}"></button>`).join("")||'<span class="sk-ipucu-kucuk">Henüz renk yok — paletten seç.</span>')}function P(B){const E=B.toLowerCase(),_=[E,...$().filter(O=>O.toLowerCase()!==E)].slice(0,12);try{localStorage.setItem(C,JSON.stringify(_))}catch{}D(E)}function Z(B,E=!1){c=B;const _=cm(B);p.querySelector("#ske-renk").value=_,p.querySelector("#ske-renk-hex").value=_,p.querySelectorAll(".sk-palet-renk").forEach(O=>{O.classList.toggle("aktif",O.dataset.renk?.toLowerCase()===_.toLowerCase())}),D(_),E&&P(_)}p.querySelector("#ske-renk").addEventListener("input",B=>{Z(bl(B.target.value))}),p.querySelector("#ske-renk").addEventListener("change",()=>{P(cm(c))}),p.querySelector("#ske-renk-hex").addEventListener("change",B=>{const E=B.target.value.trim();/^#[0-9a-fA-F]{6}$/.test(E)&&Z(bl(E),!0)}),p.querySelector("#ske-palet")?.addEventListener("click",B=>{const E=B.target.closest(".sk-palet-renk");E?.dataset.renk&&Z(bl(E.dataset.renk),!0)}),p.querySelector("#ske-son")?.addEventListener("click",B=>{const E=B.target.closest(".kz-renk");E?.dataset.renk&&Z(bl(E.dataset.renk),!0)}),p.querySelectorAll(".sk-arac[data-arac]").forEach(B=>{B.addEventListener("click",()=>{o=B.dataset.arac,p.querySelectorAll(".sk-arac[data-arac]").forEach(E=>E.classList.remove("aktif")),B.classList.add("aktif")})}),p.querySelectorAll("[data-kalinlik]").forEach(B=>{B.addEventListener("click",()=>{l=Number(B.dataset.kalinlik),p.querySelectorAll("[data-kalinlik]").forEach(E=>E.classList.remove("aktif")),B.classList.add("aktif")})}),p.querySelectorAll("[data-zum]").forEach(B=>{B.addEventListener("click",()=>{u=Number(B.dataset.zum),g.width=g.height=y.width=y.height=Sn*u,p.querySelectorAll("[data-zum]").forEach(E=>E.classList.remove("aktif")),B.classList.add("aktif"),w()})}),p.querySelectorAll("[data-slim]").forEach(B=>{B.addEventListener("click",()=>{s=B.dataset.slim==="1",p.querySelectorAll("[data-slim]").forEach(E=>E.classList.remove("aktif")),B.classList.add("aktif"),x.tuvalDoku(k,s),Ge(s?"Slim modelde kollar 1 px daha ince — kol bölgesi kayabilir.":"")})});let G=!1,ee="ust",ae=!1,ue=!1;const ke=p.querySelector("#ske-3d"),Ne=p.querySelector("#ske-izgara3d"),Ie=p.querySelector("#ske-parca"),$e=p.querySelector("#ske-3d-tuval"),j=p.querySelector(".sk-edit-onizleme"),re=p.querySelector(".sk-edit-zum"),fe={kafa:!0,govde:!0,kollar:!0,bacaklar:!0,kaplama:!0,kozmetik:!0},Ue=()=>{x.parcaGoster("kafa",fe.kafa),x.parcaGoster("govde",fe.govde),x.parcaGoster("kollar",fe.kollar),x.parcaGoster("bacaklar",fe.bacaklar),x.kaplamaGoster(fe.kaplama),x.kozmetikGoster(fe.kozmetik),ee=fe.kaplama?"ust":"taban";const B=p.querySelector("#ske-3d-ipucu");B&&(B.textContent=fe.kaplama?"Overlay açık — boyama overlay katmanına gider.":"Overlay kapalı — boyama skin (taban) yüzeyine gider.")},xe=B=>{G=B,ae=!1,x.etkilesimKapali=B,ue=B,Ne?.classList.toggle("aktif",ue),g.hidden=B,y.hidden=B,$e.hidden=!B,j&&(j.hidden=B),Ie&&(Ie.hidden=!B),re&&(re.style.display=B?"none":""),ke?.classList.toggle("aktif",B),ke&&(ke.innerHTML=`${H("box")} ${B?"2D'ye dön":"3D Çiz"}`),requestAnimationFrame(()=>{B?(x.kur($e),x.bakisaAyarla(.35,.04),x.tuvalDoku(k,s),Ue(),x.izgaraGoster(ue,!0),Ge("3D çizim: sol tık boya · orta/sağ tık döndür · tekerlek yakınlaş · Skin/Overlay katmanı ve parçalar üstteki düğmelerden aç/kapat.")):(x.kur(S),x.tuvalDoku(k,s),Ue(),x.izgaraGoster(!1,!0),Ge(""))})};ke?.addEventListener("click",()=>xe(!G)),Ne?.addEventListener("click",()=>{ue=!ue,Ne.classList.toggle("aktif",ue),x.izgaraGoster(ue,!0),Ge(ue?"Izgara açık — piksel sınırları karakterin üstünde görünür.":"Izgara kapalı.")}),p.querySelectorAll("[data-zum3d]").forEach(B=>{B.addEventListener("click",()=>{const E=Number(B.dataset.zum3d);E===0?x.zoomAyarla(2.75):x.zoomAyarla(x.zoomAl()*(E<0?1.18:.85))})}),p.querySelectorAll("[data-parca]").forEach(B=>{B.addEventListener("click",()=>{const E=B.dataset.parca;fe[E]=!fe[E],B.classList.toggle("aktif",fe[E]),Ue()})});const Fe=(B,E)=>{const _=x.atlasNoktasi(B,ee);_&&(E&&a.katmanBasla(),a.boya(_.x,_.y,z(),l),w())};$e.addEventListener("contextmenu",B=>{G&&B.preventDefault()}),$e.addEventListener("pointerdown",B=>{if(G&&!(B.pointerType==="mouse"&&B.button!==0)){ae=!0;try{$e.setPointerCapture(B.pointerId)}catch{}Fe(B,!0)}}),$e.addEventListener("pointermove",B=>{G&&ae&&Fe(B,!1)});const _t=()=>{ae=!1};$e.addEventListener("pointerup",_t),$e.addEventListener("pointercancel",_t),p.querySelector("#ske-bolgeler")?.addEventListener("click",B=>{const E=B.target.closest("[data-bolge]");E?.dataset.bolge&&(d=sm.find(_=>_.id===E.dataset.bolge)??null,p.querySelectorAll("[data-bolge]").forEach(_=>_.classList.remove("aktif")),E.classList.add("aktif"),R())}),p.querySelector("#ske-sadece").addEventListener("change",B=>{f=B.target.checked,R()});const Be=()=>{a.geriAl()&&w()},Ye=()=>{a.ileriAl()&&w()};p.querySelector("#ske-geri-al")?.addEventListener("click",Be),p.querySelector("#ske-ileri-al")?.addEventListener("click",Ye);const rt=B=>{!document.body.contains(p)||!(B.ctrlKey||B.metaKey)||(B.key.toLowerCase()==="z"?(B.preventDefault(),B.shiftKey?Ye():Be()):B.key.toLowerCase()==="s"&&(B.preventDefault(),zt(!0)))};window.addEventListener("keydown",rt);function Ge(B){const E=p.querySelector("#ske-uyari");E.textContent=B}function pt(){return new Promise(B=>{k.toBlob(async E=>{if(!E)return B([]);const _=new Uint8Array(await E.arrayBuffer());B(Array.from(_))},"image/png")})}async function zt(B){if(r=p.querySelector("#ske-ad").value.trim()||r,r||(r="Skin"),B&&!await tw("Skini giy",`<b>${Od(r)}</b> Mojang hesabına yazılacak ve sunucularda görünecek. Onaylıyor musun?`,"Giy"))return;const _=await pt();if(!_.length){Ge("PNG üretilemedi.");return}const O=p.querySelector(B?"#ske-giy":"#ske-kitaplik");O.disabled=!0,Ge(B?"Mojang hesabına yazılıyor…":"Kitaplığa kaydediliyor…");try{await t({veri:_,slim:s,ad:r},B),Ge(""),Wt()}catch(V){Ge(String(V)),O.disabled=!1}}p.querySelector("#ske-kitaplik")?.addEventListener("click",()=>void zt(!1)),p.querySelector("#ske-giy")?.addEventListener("click",()=>void zt(!0)),p.querySelector("#ske-disa")?.addEventListener("click",async()=>{const B=await pt(),E=p.querySelector("#ske-ad");try{const{invoke:_}=await it(async()=>{const{invoke:V}=await Promise.resolve().then(()=>vt);return{invoke:V}},void 0),O=await _("cmd_skin_disa_aktar",{ad:E.value.trim()||"skin",veri:B});K(`Dışa aktarıldı: ${O}`)}catch(_){K(String(_),"err")}});const qt=document.createElement("button");qt.className="btn ghost sk-dosya-btn",qt.innerHTML=`${H("image")} Dosya`;const dt=document.createElement("input");dt.type="file",dt.accept="image/png",dt.style.display="none",qt.addEventListener("click",()=>dt.click()),dt.addEventListener("change",async()=>{const B=dt.files?.[0];B&&await N(B),dt.value=""}),p.querySelector("#ske-geri").after(qt),p.appendChild(dt);function Ut(){return new Promise(B=>{const{root:E,close:_}=Jt(`
        <h2>Skin türü</h2>
        <div class="sub" style="margin-bottom:14px">Bu skin hangi model için çizildi?</div>
        <div class="skin-model-secim">
          <button class="skin-model-btn" id="se-wide">
            ${H("user")}<b>Wide</b><span>Klasik model — 4px kol</span>
          </button>
          <button class="skin-model-btn" id="se-slim">
            ${H("user")}<b>Slim</b><span>İnce model — 3px kol (Alex)</span>
          </button>
        </div>
        <div style="display:flex; justify-content:flex-end; margin-top:12px">
          <button class="btn ghost" id="se-iptal">Vazgeç</button>
        </div>`);let O=!1;const V=Q=>{O||(O=!0,_(),B(Q))};E.querySelector("#se-wide")?.addEventListener("click",()=>V(!1)),E.querySelector("#se-slim")?.addEventListener("click",()=>V(!0)),E.querySelector("#se-iptal")?.addEventListener("click",()=>V(null))})}async function N(B){try{const E=URL.createObjectURL(B),_=await new Promise((de,ne)=>{const se=new Image;se.onload=()=>de(se),se.onerror=()=>ne(new Error("görsel okunamadı")),se.src=E}),O=document.createElement("canvas");O.width=_.width,O.height=_.height;const V=O.getContext("2d");V.drawImage(_,0,0),URL.revokeObjectURL(E);const Q=V.getImageData(0,0,_.width,_.height);if(!(_.width===64&&(_.height===64||_.height===32))){K(`Skin 64×64 veya 64×32 olmalı (bu dosya ${_.width}×${_.height})`,"err");return}const ce=await Ut();if(ce===null)return;s=ce,p.querySelectorAll("[data-slim]").forEach(de=>{de.classList.toggle("aktif",de.dataset.slim===(s?"1":"0"))}),a.katmanBasla(),_.height===64?a.veri.set(Q.data):a.veri.set(BE(Q.data)),w(),x.tuvalDoku(k,s)}catch(E){K(String(E),"err")}}const Wt=()=>{window.removeEventListener("keydown",rt),p.remove();try{x.kapati()}catch{}n()};p.querySelector("#ske-geri")?.addEventListener("click",Wt),p.querySelector("#ske-kaydet")?.addEventListener("click",()=>{const B=p.querySelector(".sk-edit-kayit");B.scrollIntoView({behavior:"smooth",block:"center"}),B.querySelector("#ske-ad").focus()}),Z(c),w()}function cm(i){const e=t=>t.toString(16).padStart(2,"0");return`#${e(i[0])}${e(i[1])}${e(i[2])}`}function bl(i){const e=i.replace("#","");return[parseInt(e.slice(0,2),16)||0,parseInt(e.slice(2,4),16)||0,parseInt(e.slice(4,6),16)||0,255]}function Od(i){return i.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function tw(i,e,t){return new Promise(n=>{const{root:a,close:s}=Jt(`
      <h2>${i}</h2>
      <div class="sub" style="margin-bottom:16px">${e}</div>
      <div style="display:flex; gap:10px; justify-content:flex-end">
        <button class="btn" id="ed-vazgec">Vazgeç</button>
        <button class="btn primary" id="ed-tamam">${t}</button>
      </div>`);let r=!1;const o=c=>{r||(r=!0,s(),n(c))};a.querySelector("#ed-vazgec")?.addEventListener("click",()=>o(!1)),a.querySelector("#ed-tamam")?.addEventListener("click",()=>o(!0));const l=a.parentElement;l?.addEventListener("click",c=>{c.target===l&&o(!1)})})}let je=null,tn=null,Fa=null,cn=!1,Ao=null,dm=null,um=!1,en=null;const At=i=>i.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function Dc(i){Tc(),je=null,tn=null,Fa=null,Ao=null,en=null;const e=bn();if(!e){nw(i);return}const t=e.kind!=="microsoft";i.innerHTML=aw(e.name,t),sw(i,e.id),dm=i,um||(um=!0,document.addEventListener("visibilitychange",()=>{if(document.visibilityState!=="visible")return;const n=dm;if(!n||!n.isConnected)return;const a=bn();a&&a.kind==="microsoft"&&Ro(n,a.id,!1)})),Ro(i,e.id,!0)}function nw(i,e){i.innerHTML=`
    <div class="page-wrap skin-kapi-sar">
      <div class="skin-kapi">
        <div class="skin-kapi-ikon">${H("lock")}</div>
        <h1>Orijinal hesap ile girmen lazım</h1>
        <p>Skin değiştirmek ve pelerin takmak için Microsoft hesabı gerekir.</p>
        <div class="skin-kapi-aksiyon">
          ${`<button class="btn primary lg" id="sk-ms">${H("globe")} Microsoft ile Giriş</button>`}
          <button class="btn" id="sk-hesap">Hesapları Yönet</button>
        </div>
      </div>
    </div>`,i.querySelector("#sk-ciz")?.addEventListener("click",()=>{const t=bn();t&&iw(t.id)}),i.querySelector("#sk-ms")?.addEventListener("click",()=>{dn(()=>Dc(i))}),i.querySelector("#sk-hesap")?.addEventListener("click",()=>qe("settings"))}function iw(i){K("Yerel skin: çizim kaydedince bu bilgisayarda görünür","ok");const e=document.querySelector("#content");e&&Dc(e)}function aw(i,e){return`
    <div class="page-wrap skin-sayfa">
      <div class="page-header skin-baslik">
        <div>
          <h1>Skin Merkezi</h1>
          <p class="sub">${e?"Skinini çiz, yükle ve giy — YIKIMLient kullanan herkes görür.":"Skinlerini seç, giy; pelerinini tak. Giyilen skin sunucularda görünür."}</p>
        </div>
        <div class="skin-ust-aksiyon">
          ${e?`<span class="skin-premium" style="color:var(--warn)">${H("user")} Yerel skin</span>`:`<span class="skin-premium">${H("check")} Orijinal hesap</span>`}
          <button class="btn primary" id="sk-duzenle">${H("brush")} Skin Düzenle</button>
        </div>
      </div>
      ${e?`
      <p class="skin-cracked-uyari">
        <span class="skin-cracked-ikon">${H("info")}</span>
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
              <button class="btn" id="sk-yedek" style="display:none">${H("undo")} Yedeği Geri Yükle</button>
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
              ${H("plus")}
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
    </div>`}function sw(i,e){i.querySelector("#sk-duzenle")?.addEventListener("click",()=>void gw(i,e)),i.querySelector("#sk-kozmetik")?.addEventListener("click",()=>qe("kozmetik")),i.querySelector("#sk-giy")?.addEventListener("click",()=>void Fd(i,e)),i.querySelector("#sk-yedek")?.addEventListener("click",()=>void fw(i,e));const t=i.querySelector("#sk-ekle"),n=i.querySelector("#sk-dosya");t.addEventListener("click",()=>n.click()),t.addEventListener("keydown",r=>{(r.key==="Enter"||r.key===" ")&&(r.preventDefault(),n.click())}),n.addEventListener("change",()=>{const r=n.files?.[0];r&&hm(i,e,r),n.value=""}),t.addEventListener("dragover",r=>{r.preventDefault(),t.classList.add("uzerinde")}),t.addEventListener("dragleave",()=>t.classList.remove("uzerinde")),t.addEventListener("drop",r=>{r.preventDefault(),t.classList.remove("uzerinde");const o=r.dataTransfer?.files?.[0];o&&hm(i,e,o)});const a=(r,o)=>{const l=i.querySelector(r);l?.addEventListener("click",c=>{const d=c.target.closest(".skin-kart");!d||c.target.closest(".skin-sil")||fm(i,d)}),l?.addEventListener("dblclick",c=>{const d=c.target.closest(".skin-kart");!d||c.target.closest(".skin-sil")||(fm(i,d),o())})};a("#sk-kitaplik",()=>void Fd(i,e)),a("#sk-varsayilan",()=>void Fd(i,e)),i.querySelector("#sk-kitaplik")?.addEventListener("click",r=>{const o=r.target.closest(".skin-sil");if(!o)return;r.stopPropagation();const l=o.closest(".skin-kart");l?.dataset.id&&pw(i,e,l.dataset.id,l.dataset.ad||"Skin")}),i.querySelector("#sk-pelerin")?.addEventListener("click",r=>{const o=r.target.closest(".skin-pelerin");if(!o)return;const l=o.dataset.id||null;hw(i,e,l)});const s=(r,o)=>{i.querySelector(r)?.addEventListener("click",l=>{const c=l.target,d=c.closest(".skin-pelerin");if(d){if(c.closest(".koz-sil")){l.stopPropagation(),uw(i,o,d.dataset.id||"",d.dataset.ad||"Kayıt");return}dw(i,o,d.dataset.id||null)}})};s("#sk-koz-pelerin","pelerin"),s("#sk-koz-kanat","kanat"),i.querySelector("#sk-serit")?.addEventListener("click",r=>{r.target.closest("#sk-yenile")&&Ro(i,e,!1)})}async function Ro(i,e,t){try{je=await te("cmd_skin_hub",{id:e}),tn=tn??rw(),ma(i),t?Xv(i):Zf(i),No(),cw(i).then(()=>Lr(!1)),je.cevrimdisi?K("Çevrimdışısın — son bilinen skin gösteriliyor"):je.hata&&K(je.hata,"err")}catch(n){K(String(n),"err");const a=i.querySelector("#sk-kitaplik");a&&(a.innerHTML='<div class="skin-bos">Yüklenemedi. <button class="btn" id="sk-yenile">Yeniden dene</button></div>')}}function rw(){if(!je)return null;if(je.secili){const t=je.kitaplik.find(n=>n.id===je.secili);if(t)return Qu(t)}if(je.aktif)return{tur:"kayit",id:`aktif:${je.aktif.dosya}`,dosya:je.aktif.dosya,slim:je.aktif.slim,ad:"Aktif skin"};const i=je.kitaplik[0];if(i)return Qu(i);const e=je.varsayilanlar[0];return e?{tur:"varsayilan",id:`varsayilan:${e.ad}`,dosya:e.dosya,slim:e.slim,ad:e.ad}:null}function Qu(i){return{tur:"kayit",id:i.id,dosya:i.dosya,slim:i.slim,ad:i.ad}}function ma(i){if(!je)return;const e=i.querySelector("#sk-serit");e&&(e.innerHTML=je.cevrimdisi?`<div class="skin-serit-cevrimdisi">${H("info")} Çevrimdışısın — son bilinen skin ve pelerinler gösteriliyor.
          <button class="btn ghost" id="sk-yenile">Yeniden dene</button></div>`:"");const t=i.querySelector("#sk-kitaplik");if(t){je.kitaplik.length?(t.innerHTML=je.kitaplik.map(u=>lw(u)).join(""),t.querySelectorAll(".skin-yuz").forEach(u=>{const h=u.dataset.dosya;h&&pm(u,h,u.dataset.slim==="1")})):t.innerHTML='<div class="skin-bos">Henüz kayıtlı skin yok.<br />Sağ üstten <b>Skin Düzenle</b> ile çiz ya da PNG ekle.</div>';const f=i.querySelector("#sk-adet");f&&(f.textContent=je.kitaplik.length?`${je.kitaplik.length}`:"")}const n=i.querySelector("#sk-varsayilan");n&&(n.innerHTML=(je.varsayilanlar||[]).map(f=>`
      <div class="skin-kart" data-tur="varsayilan" data-id="varsayilan:${At(f.ad)}" data-dosya="${At(f.dosya)}"
           data-slim="${f.slim?1:0}" data-ad="${At(f.ad)}">
        <div class="skin-yuz-sar">
          <canvas class="skin-yuz" width="${Wv}" height="${Kv}"
                  data-dosya="${At(f.dosya)}" data-slim="${f.slim?1:0}"></canvas>
          <span class="skin-model">${f.slim?"Slim":"Wide"}</span>
        </div>
        <div class="skin-kart-ad">${At(f.ad)}</div>
      </div>`).join(""),n.querySelectorAll(".skin-yuz").forEach(f=>{const u=f.dataset.dosya;u&&pm(f,u,f.dataset.slim==="1")})),ow(i),Yv(i);const a=bn(),s=!!a&&Am(a.id)&&!Rm(a.id),r=i.querySelector("#sk-koz-pelerin")?.previousElementSibling;let o=i.querySelector("#sk-koz-rol-not");s?(o||(o=document.createElement("p"),o.id="sk-koz-rol-not",o.className="skin-bos",o.textContent='Başka bir pelerin/elitra giymek için Discord sunucusundaki YIKIM etiketi ("Yol Silindiri") gerekir — şimdilik yalnız aç/kapa yapabilirsin.',r?.after(o)),i.querySelectorAll(".skin-pelerin[data-id]:not(.cikar)").forEach(f=>{f.disabled=!0,f.title="Yol Silindiri rolü gerekir"})):o?.remove();const l=i.querySelector("#sk-aktif-ad");if(l){const f=tn;l.textContent=je.cevrimdisi?"çevrimdışı önizleme":f?`${f.ad} · ${f.slim?"Slim":"Wide"}`:"skin seç"}const c=i.querySelector("#sk-giy");c&&(c.disabled=!tn||cn,c.textContent=cn?"Bekle…":"Bu Skini Giy");const d=i.querySelector("#sk-yedek");d&&(d.style.display=je.yedek_var?"":"none"),i.querySelectorAll(".skin-kart").forEach(f=>{const u=tn&&f.dataset.id===tn.id;f.classList.toggle("secili",!!u);const h=f.querySelector(".skin-rozet.secim");if(u&&!h){const v=document.createElement("span");v.className="skin-rozet secim",v.textContent=Fa&&f.dataset.id===Fa?"GİYİLİ":"SEÇİLİ",f.appendChild(v)}else!u&&h?h.remove():u&&h&&(h.textContent=Fa&&f.dataset.id===Fa?"GİYİLİ":"SEÇİLİ")})}function ow(i){if(!je)return;const e=i.querySelector("#sk-pelerin");if(!e)return;if(!je.pelerinler.length){e.innerHTML='<div class="skin-bos">Hesabında pelerin yok — Mojang pelerinleri etkinliklerden kazanılır.</div>';return}const t=je.pelerinler.find(n=>n.aktif);e.innerHTML=je.pelerinler.map(n=>`<button class="skin-pelerin ${n.aktif?"aktif":""}" data-id="${At(n.id)}" title="${At(n.ad)}">
           <canvas class="skin-pelerin-tuval" width="40" height="64" data-dosya="${At(n.dosya||"")}"></canvas>
           <span class="skin-pelerin-ad">${At(n.ad)}</span>
           ${n.aktif?'<span class="skin-rozet aktif">TAKILI</span>':""}
         </button>`).join("")+(t?`<button class="skin-pelerin cikar" data-id="" title="Pelerini çıkar">
           <span class="skin-pelerin-yok">✕</span><span class="skin-pelerin-ad">Pelerini çıkar</span>
         </button>`:""),e.querySelectorAll(".skin-pelerin-tuval").forEach(n=>{const a=n.dataset.dosya;a&&jv(n,a)})}function lw(i){return`
    <div class="skin-kart" data-tur="kayit" data-id="${At(i.id)}" data-dosya="${At(i.dosya)}"
         data-slim="${i.slim?1:0}" data-ad="${At(i.ad)}">
      <div class="skin-yuz-sar">
        <canvas class="skin-yuz" width="${Wv}" height="${Kv}"
                data-dosya="${At(i.dosya)}" data-slim="${i.slim?1:0}"></canvas>
        <span class="skin-model">${i.slim?"Slim":"Wide"}</span>
      </div>
      <div class="skin-kart-ad">${At(i.ad)}</div>
      <button class="skin-sil" title="Sil">${H("trash")}</button>
    </div>`}function fm(i,e){tn={tur:e.dataset.tur||"kayit",id:e.dataset.id||"",dosya:e.dataset.dosya||"",slim:e.dataset.slim==="1",ad:e.dataset.ad||"Skin"},Zf(),ma(i)}function Xv(i){const e=i.querySelector("#skin-canvas");if(!e)return;Fn().kur(e),Zf()}function Zf(i){const e=Fn();tn&&e.skin({url:ht(tn.dosya),slim:tn.slim})}function No(){if(!je)return;const e=je.pelerinler.find(t=>t.aktif&&t.dosya)?.dosya||null;if(e!==Ao){if(Ao=e,!e){Fn().pelerin(null);return}Fn().pelerin({url:ht(e)})}}async function cw(i){try{en=await te("cmd_kozm_katalog")}catch{en={kayitlar:[],aktif:{pelerin:null,kanat:null}}}Yv(i)}function Yv(i){if(!en)return;const e=(a,s)=>{const r=i.querySelector(a);if(!r)return;const o=en.kayitlar.filter(c=>c.tur===s),l=en.aktif[s];if(!o.length){const c=s==="pelerin"?"Pelerin":"Elitra";r.innerHTML=`<div class="skin-bos">${c} kaydı yok — <b>Kozmetik</b> sayfasında fotoğraftan oluştur, burada birikir.</div>`;return}r.innerHTML=o.map(c=>`
        <button class="skin-pelerin ${c.id===l?"aktif":""}" data-id="${At(c.id)}" data-ad="${At(c.ad)}" title="${At(c.ad)}${c.hd?" · HD":""}">
          <canvas class="skin-pelerin-tuval" width="40" height="64" data-dosya="${At(c.dosya)}"></canvas>
          <span class="skin-pelerin-ad">${At(c.ad)}</span>
          <span class="skin-sil koz-sil" title="Kaydı sil">${H("trash")}</span>
          ${c.id===l?'<span class="skin-rozet aktif">TAKILI</span>':""}
        </button>`).join("")+(l?`<button class="skin-pelerin cikar" data-id="" title="YIKIM kozmetiğini kapat">
             <span class="skin-pelerin-yok">✕</span><span class="skin-pelerin-ad">Kapat</span>
           </button>`:""),r.querySelectorAll(".skin-pelerin-tuval").forEach(c=>{const d=c.dataset.dosya;d&&jv(c,d,s)})};e("#sk-koz-pelerin","pelerin"),e("#sk-koz-kanat","kanat");const t=i.querySelector("#sk-koz-adet");if(t){const a=en.kayitlar.filter(s=>s.tur==="pelerin").length;t.textContent=a?`${a} kayıt`:""}const n=i.querySelector("#sk-koz-kanat-adet");if(n){const a=en.kayitlar.filter(s=>s.tur==="kanat").length;n.textContent=a?`${a} kayıt`:""}}async function Lr(i){const e=Fn(),t=en?.kayitlar.find(a=>a.id===en?.aktif.pelerin&&a.dosya)||null,n=en?.kayitlar.find(a=>a.id===en?.aktif.kanat&&a.dosya)||null;try{n?(await e.pelerin(null),await e.kanat({url:ht(n.dosya)})):(await e.kanat(null),t?await e.pelerin({url:ht(t.dosya)}):(Ao=null,No())),i&&(t||n)&&e.bakisaAyarla(2.5,.1)}catch{}}async function dw(i,e,t){if(!(cn||!en)){cn=!0;try{const n=await te("cmd_kozm_sec",{tur:e,id:t});en.aktif=n.aktif;const a=en.kayitlar.find(s=>s.id===t);t?(K(`${a?.ad||"Kozmetik"} takıldı — oyunda görünecek.`),n.hata&&K(`Diğer oyunculara yüklenemedi: ${n.hata}`,"err")):K("YIKIM kozmetiği kapatıldı — vanilla görünüm."),await Lr(!0)}catch(n){K(String(n),"err")}finally{cn=!1,ma(i)}}}async function uw(i,e,t,n){if(!(cn||!t||!await Ic("Kaydı sil",`<b>${At(n)}</b> katalogdan silinsin mi? Bu işlem geri alınamaz.`,"Sil"))){cn=!0;try{const s=await te("cmd_kozm_sil",{tur:e,id:t});en&&(en.kayitlar=s.kayitlar,en.aktif=s.aktif),K("Kayıt silindi."),await Lr(!1)}catch(s){K(String(s),"err")}finally{cn=!1,ma(i)}}}async function Fd(i,e){if(!tn||cn)return;const t=tn;if(await Ic("Skini giy",`<b>${At(t.ad)}</b> Mojang hesabına yazılacak ve sunucularda görünecek. Onaylıyor musun?`,"Giy")){cn=!0,ma(i);try{let a;if(t.tur==="kayit"&&je?.kitaplik.some(s=>s.id===t.id))a=await te("cmd_skin_giy_kitaplik",{id:e,kayitId:t.id});else{const s=await Zv(t.dosya);a=await te("cmd_skin_giy",{id:e,veri:s,slim:t.slim,ad:null})}je=a,Fa=t.tur==="kayit"?t.id:null,K("Skin giyildi — sunucularda görünecek.")}catch(a){K(String(a),"err")}finally{cn=!1,ma(i)}}}async function fw(i,e){if(!(cn||!await Ic("Yedeği geri yükle","Son giymeden önceki skin Mojang hesabına geri yazılacak. Onaylıyor musun?","Geri Yükle"))){cn=!0;try{je=await te("cmd_skin_yedek_geri_yukle",{id:e}),Fa=null,K("Yedek skin geri yüklendi.")}catch(n){K(String(n),"err")}finally{cn=!1,ma(i),No(),Lr(!1)}}}async function hw(i,e,t){if(!(cn||!je)&&!(t===null&&!je.pelerinler.some(n=>n.aktif))){cn=!0;try{je=await te("cmd_skin_pelerin",{id:e,capeId:t}),K(t?"Pelerin takıldı.":"Pelerin çıkarıldı."),No(),Lr(!1)}catch(n){K(String(n),"err")}finally{cn=!1,ma(i)}}}async function pw(i,e,t,n){if(await Ic("Skini sil",`<b>${At(n)}</b> kitaplıktan silinsin mi? (Hesabındaki skin değişmez.)`,"Sil"))try{await te("cmd_skin_sil",{kayitId:t}),tn?.id===t&&(tn=null),K("Skin silindi."),await Ro(i,e,!1)}catch(s){K(String(s),"err")}}async function hm(i,e,t){try{const n=Array.from(new Uint8Array(await t.arrayBuffer())),a=t.name.replace(/\.png$/i,"").slice(0,48)||"Skin",s=await mw(a);if(s===null)return;await te("cmd_skin_kaydet",{ad:a,veri:n,slim:s}),K(`Skin kitaplığa eklendi · ${s?"Slim":"Wide"}`),await Ro(i,e,!1)}catch(n){K(String(n),"err")}}function mw(i){return new Promise(e=>{const{root:t,close:n}=Jt(`
      <h2>Skin türü</h2>
      <div class="sub" style="margin-bottom:14px"><b>${At(i)}</b> hangi model için çizildi?</div>
      <div class="skin-model-secim">
        <button class="skin-model-btn" id="sm-wide">
          ${H("user")}
          <b>Wide</b>
          <span>Klasik model — 4px kol</span>
        </button>
        <button class="skin-model-btn" id="sm-slim">
          ${H("user")}
          <b>Slim</b>
          <span>İnce model — 3px kol (Alex)</span>
        </button>
      </div>
      <div style="display:flex; justify-content:flex-end; margin-top:12px">
        <button class="btn ghost" id="sm-iptal">Vazgeç</button>
      </div>`);let a=!1;const s=l=>{l.key==="Escape"&&r(null)},r=l=>{a||(a=!0,window.removeEventListener("keydown",s),n(),e(l))};t.querySelector("#sm-wide")?.addEventListener("click",()=>r(!1)),t.querySelector("#sm-slim")?.addEventListener("click",()=>r(!0)),t.querySelector("#sm-iptal")?.addEventListener("click",()=>r(null));const o=t.parentElement;o?.addEventListener("click",l=>{l.target===o&&r(null)}),window.addEventListener("keydown",s)})}async function gw(i,e){const t=tn?.dosya||je?.aktif?.dosya||je?.varsayilanlar[0]?.dosya;if(!t){K("Önce bir skin seç.","err");return}let n;try{n=await vw(await Zv(t))}catch(o){K(String(o),"err");return}const a=new Date,s=`Skinim ${String(a.getDate()).padStart(2,"0")}.${String(a.getMonth()+1).padStart(2,"0")}`;let r=!1;ew(i,{pafta:n,slim:tn?.slim??!1,ad:s},async(o,l)=>{const c=await te("cmd_skin_kaydet",{ad:o.ad,veri:o.veri,slim:o.slim});l?(je=await te("cmd_skin_giy_kitaplik",{id:e,kayitId:c.id}),Fa=c.id,K("Skin giyildi — sunucularda görünecek.")):(je=await te("cmd_skin_hub",{id:e}),K("Kitaplığa kaydedildi.")),tn=Qu(c),r=!0},()=>{if(!r){Dc(i);return}ma(i),Tc(),Ao=null,Xv(i),No(),Lr(!1)})}async function vw(i){const e=new Blob([new Uint8Array(i)],{type:"image/png"}),t=URL.createObjectURL(e);try{const n=await new Promise((l,c)=>{const d=new Image;d.onload=()=>l(d),d.onerror=()=>c(new Error("Skin dosyası okunamadı.")),d.src=t}),a=document.createElement("canvas");a.width=64,a.height=64;const s=a.getContext("2d");s.imageSmoothingEnabled=!1;const r=Jv(n),o=n.naturalHeight===32;return s.drawImage(r,0,0,64,o?32:64),new dc(new Uint8ClampedArray(s.getImageData(0,0,64,64).data))}finally{URL.revokeObjectURL(t)}}async function Zv(i){const e=await fetch(ht(i));if(!e.ok)throw new Error("Skin dosyası okunamadı.");return Array.from(new Uint8Array(await e.arrayBuffer()))}function Jv(i){const e=i.naturalWidth||i.width,t=i.naturalHeight||i.height;if(e===64)return i;const n=document.createElement("canvas");n.width=64,n.height=Math.max(1,Math.round(t/e*64));const a=n.getContext("2d");return a?(a.imageSmoothingEnabled=!1,a.drawImage(i,0,0,n.width,n.height),n):i}function pm(i,e,t){const n=new Image;n.onload=()=>{const a=i.getContext("2d");a&&jE(a,Jv(n),t)},n.src=ht(e)}function jv(i,e,t="pelerin"){const n=new Image;n.onload=()=>{const a=i.getContext("2d");if(!a)return;const s=n.naturalWidth||Ve,r=n.naturalHeight||Mt,o=s>Ve||r>Mt;let l=ja(t);if(t==="pelerin"){const v=document.createElement("canvas");v.width=Ve,v.height=Mt;const m=v.getContext("2d",{willReadFrequently:!0});m&&(m.imageSmoothingEnabled=!1,m.drawImage(n,0,0,Ve,Mt),l=KE(v))}i.width=o?160:40,i.height=o?256:64,i.style.imageRendering=o?"auto":"pixelated",a.imageSmoothingEnabled=o,a.imageSmoothingQuality="high",a.clearRect(0,0,i.width,i.height);const c=Math.min(i.width/l.w,i.height/l.h),d=l.w*c,f=l.h*c,u=s/Ve,h=r/Mt;a.drawImage(n,l.x*u,l.y*h,l.w*u,l.h*h,(i.width-d)/2,(i.height-f)/2,d,f)},n.src=ht(e)}function Ic(i,e,t){return new Promise(n=>{const{root:a,close:s}=Jt(`
      <h2>${i}</h2>
      <div class="sub" style="margin-bottom:16px">${e}</div>
      <div style="display:flex; gap:10px; justify-content:flex-end">
        <button class="btn" id="on-vazgec">Vazgeç</button>
        <button class="btn primary" id="on-tamam">${t}</button>
      </div>`);let r=!1;const o=c=>{r||(r=!0,s(),n(c))};a.querySelector("#on-vazgec")?.addEventListener("click",()=>o(!1)),a.querySelector("#on-tamam")?.addEventListener("click",()=>o(!0));const l=a.parentElement;l?.addEventListener("click",c=>{c.target===l&&o(!1)})})}const Oo=["pelerin","kanat"],_w=["#0b0b10","#1d1d24","#3a3a46","#6b6b7a","#a8a8b6","#e8e8ef","#ff8a3d","#ff5a1f","#ffd166","#f6f6f6","#ff4d6d","#b8132f","#7b2ff7","#3d5afe","#22d3ee","#0ea5a3","#22c55e","#166534","#8b5e34","#d9a066","#f5c6a5","#e11d48","#111827","#4b5563"],mm=8;let zc=Cs(),Fo=Cs(),Cr=!1,Pr=!1,Kt="pelerin",Ba="#ff8a3d",Rn=!1,qa=!1,ci=!1,$a=!1,fs=!0,pi="kalem";const yw=[4,8,12,16];let oo=8;const Qv="yikim:renk:son",fc=40,gn={pelerin:[],kanat:[]},Qa={pelerin:[],kanat:[]};let ar=bw();function bw(){try{const i=localStorage.getItem(Qv),e=i?JSON.parse(i):null;return Array.isArray(e)?e.filter(t=>typeof t=="string").slice(0,12):[]}catch{return[]}}function xw(i){const e=i.toLowerCase();if(ar[0]?.toLowerCase()!==e){ar=[i,...ar.filter(t=>t.toLowerCase()!==e)].slice(0,12);try{localStorage.setItem(Qv,JSON.stringify(ar))}catch{}}}function e0(i){const e=`#${i.trim().replace(/^#+/,"")}`;return/^#[0-9a-fA-F]{6}$/.test(e)?e.toLowerCase():null}let fr=!0,Lo=null,Co=null;const _s=new Map,Jf=Xf(),Sw=i=>i.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),It=i=>i==="pelerin"?zc:Fo,hc=i=>i==="pelerin"?Cc:Pc;function kw(i){Tc(),Qr=i,zc=Cs(),Fo=Xf(),Cr=!1,Pr=!1,Kt="pelerin",Ba="#ff8a3d",pi="kalem",gn.pelerin.length=0,gn.kanat.length=0,Qa.pelerin.length=0,Qa.kanat.length=0,Rn=!1,qa=!1,$a=!1,fr=!0,Vt.pelerin=!1,Vt.kanat=!1,Gt.pelerin=null,Gt.kanat=null,ga.pelerin=!1,ga.kanat=!1,Lo=null,Co=null,_s.clear(),i.innerHTML=Mw(),n0(i),i0(i),a0(i)}function t0(){const i=bn();return!i||!Am(i.id)||!C0(i.id)?"dogrulanmamis":Rm(i.id)?"tam":"rol_yok"}function n0(i,e){const t=e??t0(),n=t!=="tam";i.querySelector("#kz-sayfa")?.classList.toggle("kz-kisitli",n);const s=i.querySelector("#kz-sekme-ipucu");if(s&&(n?s.textContent="Bu sayfada yalnız önizleme ve aç/kapa var":s.textContent="Atlasta ya da 3D modelin üstünde çiz"),i.querySelector("#kz-kisitli")?.remove(),t==="tam")return;const r=i.querySelector(".page-header");if(!r)return;const o=document.createElement("div");o.id="kz-kisitli",o.className="kz-kilit"+(t==="rol_yok"?" kz-kilit-rol":""),t==="dogrulanmamis"?o.innerHTML=`<span class="gv-carpi">✕</span>
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
      <button class="btn ghost sm" id="kz-kisitli-eski">Discord'a katıl ↗</button>`,r.after(o),i.querySelector("#kz-kisitli-eski")?.addEventListener("click",()=>{t==="dogrulanmamis"?qe("settings"):Cm()})}async function i0(i){await Ha(!0);const e=await Lm(),t=e?e.dogrulandi?e.cizimSerbest?"tam":"rol_yok":"dogrulanmamis":t0();n0(i,t)}window.addEventListener("yikim:yetki",()=>{const i=document.getElementById("kz-sayfa");i&&(i0(i),a0(i))});function Mw(){return`
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
          ${H("shirt")} <span>Pelerin</span>
          <em class="kz-sekme-durum" id="kz-pelerin-sekme-durum"></em>
        </button>
        <button class="kz-sekme" data-secim="kanat" role="tab">
          ${H("sparkle")} <span>Elitra</span>
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
            <span>${H("user")} Karakterde görünüm</span>
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
                <button class="seg-btn aktif" id="kz-3d-kalem" title="Modelin üstüne boya">${H("brush")} Kalem</button>
                <button class="seg-btn" id="kz-3d-silgi" title="Modelin üstünde sil">${H("eraser")} Silgi</button>
                <button class="seg-btn" id="kz-3d-dondur" title="Sol tıkla karakteri döndür (boyama kapalı)">${H("undo")} Döndür</button>
              </span>
              <span class="kz-etiket">Görünüm</span>
              <span class="seg-grup">
                <button class="seg-btn aktif" id="kz-3d-matris" title="Piksel matrisini (ızgara) aç/kapat">${H("grid")} Matris</button>
                <button class="seg-btn" id="kz-3d-oyuncu" title="Karakter gövdesini göster/gizle">${H("user")} Oyuncuyu gizle</button>
              </span>
              <button class="btn ghost sm kz-2d-don" id="kz-3d-2d" title="2D atlas tuvaline dön">${H("image")} 2D'ye geç</button>
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
          ${gm("pelerin","Pelerin","shirt","Pelerin","Ön, arka, yanlar, üst ve alt — altı yüz de ayrı çizilir.")}
          ${gm("kanat","Elitra","sparkle","Elitra","Sol/sağ kanat oyunda aynadır: aynı atlası aynalı gösterir.")}
        </div>
      </div>

      <p class="kz-dipnot">Kozmetikler oyun açıkken de uygulanır: kaydettikten sonra en geç birkaç saniye
        içinde oyunda görünür. Boş bıraktığın pelerin/elitra oyunda görünmez — elitra boşken normal
        Minecraft elitrası kullanılır.</p>
    </div>`}function gm(i,e,t,n,a){const s=yw.map(r=>`<button class="seg-btn ${r===oo?"aktif":""}" data-kzyum="${r}" title="${r}× yakınlaştır">${r}×</button>`).join("");return`
    <section class="kz-kart" id="kz-${i}-kart" data-tur="${i}">
      <div class="kz-kart-ust">
        <h3>${H(t)} ${e}</h3>
        <span class="kz-rozet" id="kz-${i}-durum"></span>
      </div>

      <div class="kz-calisma">
        <div class="kz-tuval-kolon">
          <div class="kz-tuval-kaydir">
            <div class="kz-tuval-sar" id="kz-${i}-sar">
              <canvas class="kz-tuval" id="kz-${i}-tuval" width="${Ve}" height="${Mt}"
                aria-label="${n} atlası — 64×32 piksel"></canvas>
              <canvas class="kz-rehber" id="kz-${i}-rehber"
                width="${Ve*mm}" height="${Mt*mm}"></canvas>
            </div>
          </div>
          <div class="kz-tuval-alt">
            <span class="kz-etiket">Yakınlaştır</span>
            <span class="seg-grup">${s}</span>
            <span class="kz-ipucu kz-kart-ipucu">${a}</span>
          </div>
          <div class="kz-bolgeler" id="kz-${i}-bolgeler"></div>
        </div>

        <div class="kz-arac-panel">
          <div class="kz-arac-grup" id="kz-${i}-araclar" role="group" aria-label="Araçlar">
            <button class="kz-arac-btn aktif" data-kzarac="kalem" title="Kalem">${H("brush")}</button>
            <button class="kz-arac-btn" data-kzarac="silgi" title="Silgi (çizerek siler)">${H("eraser")}</button>
            <button class="kz-arac-btn" data-kzarac="kova" title="Kova — bitişik aynı renk alanını doldur">${H("bucket")}</button>
            <button class="kz-arac-btn" data-kzarac="damla" title="Damlalık — tuvallin rengini al">${H("picker")}</button>
            <span class="kz-arac-ayrac"></span>
            <button class="kz-arac-btn" id="kz-${i}-geri" title="Geri al">${H("undo")}</button>
            <button class="kz-arac-btn" id="kz-${i}-ileri" title="İleri al">${H("redo")}</button>
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
          title="Doğrudan 3D modelin her yüzüne boya">${H("box")} 3D Çiz</button>
        <label class="btn" for="kz-${i}-dosya" title="Düz fotoğraf ya da hazır 64×32 pafta">${H("image")} Fotoğraf / Pafta</label>
        <input type="file" id="kz-${i}-dosya" accept="image/*" style="display:none" />
        <span class="kz-alt-bos"></span>
        <button class="btn" id="kz-${i}-temizle" title="Atlasın tamamını temizle">${H("trash")} Temizle</button>
        <button class="btn danger" id="kz-${i}-kaldir" title="Kayıtlı kozmetiği kaldır">Kaldır</button>
        <button class="btn primary" id="kz-${i}-kaydet">${H("check")} Kaydet</button>
      </div>
    </section>`}async function a0(i){let e;try{e=await te("cmd_kozmetik_oku")}catch(u){K(String(u),"err"),e={pelerin:null,kanat:null}}const t=u=>{try{const h=localStorage.getItem(`yikim:kozmetik:${u}:yedek`),v=h?JSON.parse(h):null;return Array.isArray(v)&&v.length===Nn?v.slice():null}catch{return null}},n=(u,h)=>u?u.length===Nn?u.slice():u.length===Bw[h]?Hw(u,h):null:null,a=n(e.pelerin,"pelerin"),s=n(e.kanat,"kanat"),r=n(e.pelerin_varsayilan,"pelerin"),o=n(e.kanat_varsayilan,"kanat");zc=!!a&&!hi(a)?a:t("pelerin")??r??a??Cs(),Fo=!!s&&!hi(s)?s:t("kanat")??o??s??Xf(),Cr=!!a&&!hi(a),Pr=!!s&&!hi(s),Lo=rm(),Co=rm(),s0(),Ew(i);for(const u of Oo)Pw(i,u);Bo(i),d0(i),Uw(i);const d=i.querySelector("#kz-pelerin-aktif"),f=i.querySelector("#kz-kanat-aktif");d&&(d.checked=e.pelerin_aktif??ym("pelerin")??!!e.pelerin_dosya),f&&(f.checked=e.kanat_aktif??ym("kanat")??!!e.kanat_dosya),Ww(i,e)}function Ew(i){const e=i.querySelector("#kz-sahne");if(!e)return;const t=Fn();t.kur(e),(async()=>{try{const n=bn();let a=null;if(n){const s=await te("cmd_skin_hub",{id:n.id});a=s?.aktif?.dosya?s.aktif:s?.varsayilanlar?.[0]??null}await t.skin(a?.dosya?{url:ht(a.dosya),slim:!!a.slim}:null)}catch{try{await t.skin(null)}catch{}}})()}function ww(i){i.fillStyle="rgba(150,152,170,0.16)";for(const e of Cc)i.fillRect(e.x,e.y,e.w,e.h)}function Tw(i){if(!hi(Fo)){i.fillStyle="rgba(150,152,170,0.10)";for(const e of Pc)i.fillRect(e.x,e.y,e.w,e.h);return}i.save(),i.globalAlpha=.6;for(let e=0;e<Nn;e++){const t=Jf[e];t&&(i.fillStyle=t,i.fillRect(e%Ve,Math.floor(e/Ve),1,1))}i.restore()}function s0(){Lo&&uc(Lo,zc,ww),Co&&uc(Co,Fo,Tw),Fn().dokuTazele()}function Bo(i){const e=Fn();Kt==="pelerin"?(e.kanatTuval(null),Vt.pelerin&&Gt.pelerin?(e.pelerinTuval(null),e.pelerin({url:ht(Gt.pelerin)})):e.pelerinTuval(Lo)):(e.pelerinTuval(null),Vt.kanat&&Gt.kanat?(e.kanatTuval(null),e.kanat({url:ht(Gt.kanat)})):e.kanatTuval(Co)),i.querySelectorAll("[data-secim]").forEach(t=>{t.classList.toggle("aktif",t.dataset.secim===Kt),t.setAttribute("aria-selected",t.dataset.secim===Kt?"true":"false")});for(const t of Oo){const n=i.querySelector(`#kz-${t}-kart`);n&&(n.hidden=Kt!==t,n.classList.toggle("secili",Kt===t))}i.querySelectorAll("[data-ciz3d]").forEach(t=>{const n=t.dataset.ciz3d===Kt;t.classList.toggle("aktif",Rn&&n),t.innerHTML=Rn&&n?`${H("image")} 2D'ye geç`:`${H("box")} 3D Çiz`})}function Qn(i,e){hi(It(e))||(ga[e]=!1);const t=i.querySelector(`#kz-${e}-tuval`);t&&uc(t,It(e)),lo(i,e),jf(i,e),s0()}function jf(i,e){const t=Vt[e]||!hi(It(e)),n=e==="pelerin"?Cr:Pr,a=i.querySelector(`#kz-${e}-durum`);a&&(a.textContent=n&&t?"KAYITLI":"");const s=i.querySelector(`#kz-${e}-sekme-durum`);s&&(s.textContent=n&&t?"kayıtlı":"")}function Aw(i,e,t){const n=i.getContext("2d");if(!n)return;n.clearRect(0,0,i.width,i.height);const a=i.width/Ve;n.font="600 10px ui-sans-serif, system-ui, sans-serif",n.textAlign="center",n.textBaseline="middle";for(const s of e){const r=t?.id===s.id;if(n.strokeStyle=r?"rgba(255,150,60,0.95)":"rgba(255,255,255,0.26)",n.lineWidth=r?2:1,n.setLineDash(r?[]:[4,3]),n.strokeRect(s.x*a+.5,s.y*a+.5,s.w*a-1,s.h*a-1),n.setLineDash([]),s.h*a<20)continue;const o=s.w*a<46,l=(s.x+s.w/2)*a,c=Math.min(i.height-10,Math.max(10,(s.y+s.h/2)*a));n.save(),n.translate(l,c),o&&n.rotate(-Math.PI/2);const d=n.measureText(s.ad);n.fillStyle="rgba(8,9,13,0.74)",n.fillRect(-d.width/2-4,-7,d.width+8,14),n.fillStyle=r?"#ffb066":"rgba(255,255,255,0.8)",n.fillText(s.ad,0,0),n.restore()}}function lo(i,e){const t=i.querySelector(`#kz-${e}-rehber`);t&&Aw(t,hc(e),_s.get(e)??null)}function vm(i,e){const t=e.getBoundingClientRect();if(t.width<1||t.height<1)return null;const n=Math.floor((i.clientX-t.left)/t.width*Ve),a=Math.floor((i.clientY-t.top)/t.height*Mt);return n<0||a<0||n>=Ve||a>=Mt?null:{x:n,y:a}}function Rw(i,e,t){for(const n of hc(i))if(e>=n.x&&e<n.x+n.w&&t>=n.y&&t<n.y+n.h)return n;return null}function Lw(i,e,t,n,a,s){let r=e,o=t;const l=Math.abs(n-e),c=Math.abs(a-t),d=e<n?1:-1,f=t<a?1:-1;let u=l-c;for(;r>=0&&r<Ve&&o>=0&&o<Mt&&(i[o*Ve+r]=s),!(r===n&&o===a);){const h=2*u;h>-c&&(u-=c,r+=d),h<l&&(u+=l,o+=f)}}function Cw(i,e){const t=i.querySelector(`#kz-${e}-palet`);if(!t)return;_m(t,i);const n=i.querySelector("#kz-3d-palet");n&&!n.childElementCount&&_m(n,i)}function _m(i,e){i.innerHTML=_w.map(t=>`<button class="kz-renk" data-renk="${t}" style="background:${t}" title="${t}" aria-label="${t}"></button>`).join(""),i.querySelectorAll(".kz-renk").forEach(t=>{t.addEventListener("click",()=>ys(e,t.dataset.renk??"#ffffff"))})}function ys(i,e,t=!0){const n=e0(e)??Ba;Ba=n,t&&(pi="kalem",xw(n));const a=o=>(o??"").toLowerCase()===n.toLowerCase();for(const o of Oo){const l=i.querySelector(`#kz-${o}-renk`);l&&(l.value=n);const c=i.querySelector(`#kz-${o}-hex`);c&&(c.value=n.toUpperCase());const d=i.querySelector(`#kz-${o}-renk-kod`);d&&(d.textContent=n.toUpperCase()),i.querySelectorAll(`#kz-${o}-palet .kz-renk`).forEach(f=>{f.classList.toggle("aktif",a(f.dataset.renk))}),i.querySelectorAll(`#kz-${o}-son .kz-renk`).forEach(f=>{f.classList.toggle("aktif",a(f.dataset.renk))})}const s=i.querySelector("#kz-3d-renk");s&&(s.value=n);const r=i.querySelector("#kz-3d-renk-kod");r&&(r.textContent=n.toUpperCase()),i.querySelectorAll("#kz-3d-palet .kz-renk").forEach(o=>{o.classList.toggle("aktif",a(o.dataset.renk))}),t&&Rn&&(qa=!1),Qf(i),c0(i)}function Pw(i,e){const t=i.querySelector(`#kz-${e}-tuval`);if(!t)return;Cw(i,e),uc(t,It(e)),lo(i,e),jf(i,e),zw(i,e),c0(i),l0(i),Qf(i),e==="pelerin"&&ys(i,Ba,!1);let n=!1,a=-1,s=-1;const r=()=>{gn[e].push(It(e).slice()),gn[e].length>fc&&gn[e].shift(),Qa[e].length=0},o=(u,h,v)=>{const m=It(e);if(pi==="damla"){const g=m[h*Ve+u];g&&ys(i,g,!0);return}if(pi==="kova"){if(!v)return;r(),Iw(m,u,h,Ba),Qn(i,e);return}const p=pi==="silgi"?"":Ba;a>=0&&s>=0?Lw(m,a,s,u,h,p):m[h*Ve+u]=p,a=u,s=h,Qn(i,e)};t.addEventListener("contextmenu",u=>u.preventDefault()),t.addEventListener("pointerdown",u=>{Kt!==e&&(Kt=e,Bo(i)),n=!0,a=-1,s=-1;try{t.setPointerCapture(u.pointerId)}catch{}const h=vm(u,t);h&&(pi!=="damla"&&r(),o(h.x,h.y,!0))}),t.addEventListener("pointermove",u=>{const h=vm(u,t),v=h?Rw(e,h.x,h.y):null;(_s.get(e)??null)?.id!==(v?.id??null)&&(_s.set(e,v),lo(i,e)),!(!h||!n)&&o(h.x,h.y,!1)});const l=()=>{n=!1,a=-1,s=-1};t.addEventListener("pointerup",l),t.addEventListener("pointercancel",l),t.addEventListener("pointerleave",()=>{n||_s.get(e)&&(_s.set(e,null),lo(i,e))}),i.querySelectorAll(`#kz-${e}-araclar [data-kzarac]`).forEach(u=>{u.addEventListener("click",()=>Dw(i,u.dataset.kzarac??"kalem"))}),i.querySelector(`#kz-${e}-geri`)?.addEventListener("click",()=>r0(i,e)),i.querySelector(`#kz-${e}-ileri`)?.addEventListener("click",()=>o0(i,e)),i.querySelector(`#kz-${e}-renk`)?.addEventListener("input",u=>{ys(i,u.target.value)});const c=i.querySelector(`#kz-${e}-hex`),d=()=>{if(!c)return;const u=e0(c.value);u?ys(i,u):c.value=Ba.toUpperCase()};c?.addEventListener("change",d),c?.addEventListener("blur",d),c?.addEventListener("keydown",u=>{u.key==="Enter"&&(u.preventDefault(),d())}),i.querySelector(`#kz-${e}-temizle`)?.addEventListener("click",()=>{r();const u=It(e);for(let h=0;h<u.length;h++)u[h]="";ga[e]=!0,Qn(i,e),K(`${e==="pelerin"?"Pelerin":"Elitra"} tuvali temizlendi — kaydetmezsen oyun değişmez.`)}),i.querySelector(`#kz-${e}-3d`)?.addEventListener("click",()=>{if(Rn&&Kt===e){ef(i,!1),requestAnimationFrame(()=>{i.querySelector(`#kz-${e}-kart`)?.scrollIntoView({behavior:"smooth",block:"center"})});return}ef(i,!0,e),i.querySelector("#kz-oniz3d")?.scrollIntoView({behavior:"smooth",block:"center"})}),i.querySelector(`#kz-${e}-kaydet`)?.addEventListener("click",()=>void pc(i,e)),i.querySelector(`#kz-${e}-kaldir`)?.addEventListener("click",()=>{Vt[e]&&(Vt[e]=!1,Gt[e]=null,sa(i,e)),r();const u=It(e);for(let h=0;h<u.length;h++)u[h]="";ga[e]=!0,Qn(i,e),pc(i,e)});const f=i.querySelector(`#kz-${e}-dosya`);f?.addEventListener("change",()=>{const u=f.files?.[0];u&&Zw(i,e,u),f.value=""})}function Dw(i,e){pi=e,Qf(i),e==="damla"?K("Damlalık: tuvallin bir pikseline tıkla, rengi alır."):e==="kova"&&K("Kova: bitişik aynı renk alanını seçili renkle doldurur.")}function Qf(i){i.querySelectorAll("[data-kzarac]").forEach(e=>{e.classList.toggle("aktif",e.dataset.kzarac===pi)}),i.querySelector("#kz-3d-kalem")?.classList.toggle("aktif",Rn&&pi!=="silgi"),i.querySelector("#kz-3d-silgi")?.classList.toggle("aktif",Rn&&pi==="silgi")}function Iw(i,e,t,n){const a=i[t*Ve+e]??"";if(a===n)return;const s=[t*Ve+e];for(;s.length;){const r=s.pop();if((i[r]??"")!==a)continue;i[r]=n;const o=r%Ve,l=Math.floor(r/Ve);o>0&&s.push(r-1),o<Ve-1&&s.push(r+1),l>0&&s.push(r-Ve),l<Mt-1&&s.push(r+Ve)}}function r0(i,e){const t=gn[e].pop();if(!t){K("Geri alınacak adım yok.");return}Qa[e].push(It(e).slice()),It(e).splice(0,It(e).length,...t),Qn(i,e)}function o0(i,e){const t=Qa[e].pop();if(!t){K("İleri alınacak adım yok.");return}gn[e].push(It(e).slice()),It(e).splice(0,It(e).length,...t),Qn(i,e)}function l0(i){for(const e of Oo){const t=i.querySelector(`#kz-${e}-tuval`),n=i.querySelector(`#kz-${e}-rehber`),a=`${Ve*oo}px`,s=`${Mt*oo}px`;t&&(t.style.width=a,t.style.height=s),n&&(n.style.width=a,n.style.height=s)}i.querySelectorAll("[data-kzyum]").forEach(e=>{e.classList.toggle("aktif",Number(e.dataset.kzyum)===oo)})}function c0(i){for(const e of Oo){const t=i.querySelector(`#kz-${e}-son`);t&&(t.innerHTML=ar.length?ar.map(n=>`<button class="kz-renk" data-renk="${n}" style="background:${n}" title="${n}" aria-label="${n}"></button>`).join(""):'<span class="kz-bos-not">Henüz renk kullanmadın — bir renk seç, burada birikir.</span>',t.querySelectorAll(".kz-renk").forEach(n=>{n.addEventListener("click",()=>ys(i,n.dataset.renk??"#ffffff"))}))}}function zw(i,e){const t=i.querySelector(`#kz-${e}-bolgeler`);t&&(t.innerHTML=hc(e).map(n=>`<button class="kz-bolge-rozet" data-bolge="${n.id}" title="Atlasta ${n.ad} yüzü">${n.ad}</button>`).join(""),t.querySelectorAll("[data-bolge]").forEach(n=>{const a=hc(e).find(r=>r.id===n.dataset.bolge)??null,s=r=>{_s.set(e,r?a:null),lo(i,e)};n.addEventListener("pointerenter",()=>s(!0)),n.addEventListener("pointerleave",()=>s(!1))}))}function ef(i,e,t){e&&t&&(Kt=t),Rn=e,qa=!1,e||($a=!1),e||(ci=!1);const n=Fn();n.etkilesimKapali=e&&!ci,n.izgaraGoster(e&&fs),n.kanatAyrik(e),n.oyuncuGoster(!$a),i.querySelector("#kz-3d-matris")?.classList.toggle("aktif",e&&fs),i.querySelector("#kz-sayfa")?.classList.toggle("cizim3d",e),i.querySelector("#kz-oniz3d")?.classList.toggle("cizim",e);const a=i.querySelector("#kz-cizim-arac");a&&(a.hidden=!e);const s=i.querySelector("#kz-3d-oyuncu");s&&(s.innerHTML=`${H("user")} ${$a?"Oyuncuyu göster":"Oyuncuyu gizle"}`),i.querySelector("#kz-3d-kalem")?.classList.toggle("aktif",e&&!qa),i.querySelector("#kz-3d-silgi")?.classList.toggle("aktif",e&&qa),i.querySelector("#kz-3d-dondur")?.classList.toggle("aktif",e&&ci);const r=i.querySelector("#kz-sahne-alt");r&&(r.textContent=e?ci?"Döndür modu: sol tık sürükle döndürür · Tekerlek: yakınlaş":"Sol tık: boya · Orta/sağ tık: döndür · Tekerlek: yakınlaş":"Sürükle: döndür · Tekerlek: yakınlaş"),Bo(i),requestAnimationFrame(()=>n.boyutGuncelle())}function Uw(i){const e=async(l,c,d)=>{const f=It(c),u=`yikim:kozmetik:${c}:yedek`;if(!d&&!hi(f))try{localStorage.setItem(u,JSON.stringify(f))}catch{}try{await te("cmd_kozmetik_aktif",{[c]:d});return}catch{}if(!d){if(Vt[c])throw new Error("Bu launcher sürümü HD fotoğrafı kapatmayı desteklemiyor — launcher'ı güncelle.");await tf(c,Cs());return}let h=[];try{const v=localStorage.getItem(u),m=v?JSON.parse(v):null;Array.isArray(m)&&m.length===Nn&&(h=m)}catch{h=[]}!h.length&&!hi(f)&&(h=f.slice()),h.length&&(await tf(c,h),f.splice(0,f.length,...h),Qn(l,c))},t=i.querySelector("#kz-sahne");if(!t)return;const n=Fn();let a=!1;const s=l=>{const c=n.kozmetikNoktasi(l,Kt);if(!c||c.x<0||c.y<0||c.x>=Ve||c.y>=Mt)return;const d=It(Kt),f=qa?"":Ba,u=c.y*Ve+c.x;d[u]!==f&&(d[u]=f,Qn(i,Kt))};t.addEventListener("contextmenu",l=>{Rn&&l.preventDefault()}),t.addEventListener("pointerdown",l=>{if(!(!Rn||ci)&&!(l.pointerType==="mouse"&&l.button!==0)){a=!0;try{t.setPointerCapture(l.pointerId)}catch{}s(l)}}),t.addEventListener("pointermove",l=>{Rn&&a&&s(l)});const r=()=>{a=!1};t.addEventListener("pointerup",r),t.addEventListener("pointercancel",r),i.querySelectorAll("[data-secim]").forEach(l=>{l.addEventListener("click",()=>{Kt=l.dataset.secim??"pelerin",Bo(i)})}),i.querySelectorAll("[data-kzyum]").forEach(l=>{l.addEventListener("click",()=>{const c=Number(l.dataset.kzyum);c&&(oo=c,l0(i))})}),i.querySelector("#kz-3d-matris")?.addEventListener("click",()=>{fs=!fs,i.querySelector("#kz-3d-matris")?.classList.toggle("aktif",fs),n.izgaraGoster(fs),K(fs?"Matris açık — piksel sınırları görünür.":"Matris kapalı.")}),i.querySelector("#kz-3d-renk")?.addEventListener("input",l=>{ys(i,l.target.value)});const o=[["#kz-pelerin-aktif","pelerin"],["#kz-kanat-aktif","kanat"]];for(const[l,c]of o)i.querySelector(l)?.addEventListener("change",d=>{const f=d.target,u=f.checked;bm(c,u),(async()=>{try{await e(i,c,u),K(c==="pelerin"?u?"Özel pelerin açık — oyunda kendi pelerin görünür.":"Özel pelerin kapalı — oyunda Minecraft pelerini görünür.":u?"Özel elitra açık — oyunda kendi elitran görünür.":"Özel elitra kapalı — oyunda Minecraft elitrası görünür.")}catch(h){f.checked=!u,bm(c,!u),K(String(h),"err")}})()});i.querySelector("#kz-yon")?.addEventListener("click",()=>{fr=!fr,d0(i)}),i.querySelector("#kz-zum-arti")?.addEventListener("click",()=>n.zoomAyarla(n.zoomAl()*.85)),i.querySelector("#kz-zum-eksi")?.addEventListener("click",()=>n.zoomAyarla(n.zoomAl()*1.18)),i.querySelector("#kz-zum-sigdir")?.addEventListener("click",()=>n.zoomAyarla(2.75)),i.querySelector("#kz-3d-kalem")?.addEventListener("click",()=>{qa=!1,ci=!1,pi="kalem",n.etkilesimKapali=Rn,i.querySelector("#kz-3d-kalem")?.classList.add("aktif"),i.querySelector("#kz-3d-silgi")?.classList.remove("aktif"),i.querySelector("#kz-3d-dondur")?.classList.remove("aktif")}),i.querySelector("#kz-3d-silgi")?.addEventListener("click",()=>{qa=!0,ci=!1,pi="silgi",n.etkilesimKapali=Rn,i.querySelector("#kz-3d-silgi")?.classList.add("aktif"),i.querySelector("#kz-3d-kalem")?.classList.remove("aktif"),i.querySelector("#kz-3d-dondur")?.classList.remove("aktif")}),i.querySelector("#kz-3d-dondur")?.addEventListener("click",()=>{ci=!ci,n.etkilesimKapali=Rn&&!ci,i.querySelector("#kz-3d-dondur")?.classList.toggle("aktif",ci);const c=i.querySelector("#kz-sahne-alt");c&&(c.textContent=ci?"Döndür modu: sol tık sürükle döndürür · Tekerlek: yakınlaş":"Sol tık: boya · Orta/sağ tık: döndür · Tekerlek: yakınlaş")}),i.querySelector("#kz-3d-oyuncu")?.addEventListener("click",()=>{const l=i.querySelector("#kz-3d-oyuncu");$a=!$a,n.oyuncuGoster(!$a),l&&(l.innerHTML=`${H("user")} ${$a?"Oyuncuyu göster":"Oyuncuyu gizle"}`)}),i.querySelector("#kz-3d-2d")?.addEventListener("click",()=>{const l=Kt;ef(i,!1),requestAnimationFrame(()=>{i.querySelector(`#kz-${l}-kart`)?.scrollIntoView({behavior:"smooth",block:"center"})})})}function d0(i){Fn().bakisaAyarla(fr?2.5:0,fr?.12:.02);const e=i.querySelector("#kz-yon");e&&(e.textContent=fr?"Önden gör":"Arkadan gör")}const Nw=(i,e,t)=>i[t*Ve+e]??"",sr=(i,e,t,n)=>{e<0||e>=Ve||t<0||t>=Mt||(i[t*Ve+e]=n)};function Ow(i,e,t){for(let n=0;n<e.h;n++)for(let a=0;a<e.w;a++)sr(i,t.x+(e.w-1-a),t.y+n,Nw(i,e.x+a,e.y+n))}function Fw(i,e){const t=ja(e),n=Vv[e],{u:a,v:s,d:r}=n,o=(f,u)=>i[u*Ve+f]??"",l=e==="pelerin"?a:a+r+n.w,c=e==="pelerin"?a+r+n.w:a;for(let f=0;f<t.h;f++){const u=o(t.x,t.y+f),h=o(t.x+t.w-1,t.y+f);for(let v=0;v<r;v++)sr(i,l+v,s+r+f,u),sr(i,c+v,s+r+f,h)}const d=e!=="pelerin";for(let f=0;f<t.w;f++){const u=d?t.w-1-f:f,h=o(t.x+u,t.y),v=o(t.x+u,t.y+t.h-1);for(let m=0;m<r;m++)sr(i,a+r+f,s+m,h),sr(i,a+r+n.w+f,s+m,v)}}const Bw={pelerin:160,kanat:200};function $w(i,e=It(i)){const t=ja(i),n=[];for(let a=0;a<t.h;a++)for(let s=0;s<t.w;s++)n.push(e[(t.y+a)*Ve+t.x+s]??"");return n}function Hw(i,e){const t=Cs(),n=ja(e);for(let a=0;a<n.h;a++)for(let s=0;s<n.w;s++)sr(t,n.x+s,n.y+a,i[a*n.w+s]??"");return Ow(t,n,qv(e)),Fw(t,e),t}async function tf(i,e){try{return await te("cmd_kozmetik_kaydet",{[i]:e})}catch(t){if(!/piksel bekleniyordu/i.test(String(t)))throw t;return await te("cmd_kozmetik_kaydet",{[i]:$w(i,e)})}}function ym(i){try{const e=localStorage.getItem(`yikim:kozmetik:${i}:aktif`);return e===null?null:e==="1"}catch{return null}}function bm(i,e){try{localStorage.setItem(`yikim:kozmetik:${i}:aktif`,e?"1":"0")}catch{}}const Vt={pelerin:!1,kanat:!1},Gt={pelerin:null,kanat:null},ga={pelerin:!1,kanat:!1};function Gw(i){return new Promise(e=>{const t=URL.createObjectURL(i),n=new Image;n.onload=()=>{URL.revokeObjectURL(t),e(n)},n.onerror=()=>{URL.revokeObjectURL(t),K("Görsel okunamadı","err"),e(null)},n.src=t})}function Vw(i,e,t,n,a,s,r,o){const l=document.createElement("canvas");l.width=Math.max(1,Math.round(s)),l.height=Math.max(1,Math.round(r));const c=l.getContext("2d",{willReadFrequently:!0});if(!c)throw new Error("tuval yok");if(c.imageSmoothingEnabled=o,c.imageSmoothingQuality="high",!o)return c.drawImage(i,e,t,n,a,0,0,l.width,l.height),l;let d=i,f=e,u=t,h=n,v=a,m=Math.round(n),p=Math.round(a);for(;m>l.width*2&&p>l.height*2;){m=Math.max(l.width,Math.round(m/2)),p=Math.max(l.height,Math.round(p/2));const g=document.createElement("canvas");g.width=m,g.height=p;const y=g.getContext("2d");if(!y)break;y.imageSmoothingEnabled=!0,y.imageSmoothingQuality="high",y.drawImage(d,f,u,h,v,0,0,m,p),d=g,f=0,u=0,h=m,v=p}return c.drawImage(d,f,u,h,v,0,0,l.width,l.height),l}function u0(i,e,t,n,a,s=!1,r=0){const o=ja(t),l=qv(t),c=Vv[t],d=a?Math.max(1,Math.min(16,Math.round(e.w/o.w))):1,f=document.createElement("canvas");f.width=Ve*d,f.height=Mt*d;const u=f.getContext("2d",{willReadFrequently:!0});if(!u)throw new Error("tuval yok");const h=o.x*d,v=o.y*d,m=o.w*d,p=o.h*d;u.imageSmoothingEnabled=!1;const g=Vw(i,e.x,e.y,e.w,e.h,m,p,a);let y=g;if(s||r!==0){const b=document.createElement("canvas");b.width=m,b.height=p;const S=b.getContext("2d");S&&(S.imageSmoothingEnabled=!a,S.translate(m/2,p/2),S.rotate(r*Math.PI/180),S.scale(s?-1:1,1),S.drawImage(g,-m/2,-p/2),y=b)}if(t==="pelerin"&&(u.fillStyle="#000000",u.fillRect(h,v,m,p)),u.drawImage(y,h,v),n)return f;u.save(),u.translate(l.x*d+m,l.y*d),u.scale(-1,1),u.drawImage(f,h,v,m,p,0,0,m,p),u.restore();const T=d;return u.drawImage(f,h,v,T,p,(c.u+c.d+c.w)*d,(c.v+c.d)*d,c.d*d,p),u.drawImage(f,h+m-T,v,T,p,c.u*d,(c.v+c.d)*d,c.d*d,p),u.drawImage(f,h,v,m,T,(c.u+c.d)*d,c.v*d,m,c.d*d),u.drawImage(f,h,v+p-T,m,T,(c.u+c.d+c.w)*d,c.v*d,m,c.d*d),f}function qw(i){return new Promise((e,t)=>{i.toBlob(n=>{if(!n){t(new Error("PNG üretilemedi"));return}const a=new FileReader;a.onload=()=>e(String(a.result).split(",")[1]??""),a.onerror=()=>t(new Error("PNG okunamadı")),a.readAsDataURL(n)},"image/png")})}function sa(i,e){const t=Vt[e],n=i.querySelector(`#kz-${e}-kart`);if(!n)return;n.classList.toggle("foto",t);const a=n.querySelector(".kz-calisma");a&&(a.hidden=t);const s=i.querySelector(`#kz-${e}-foto`);s&&(s.hidden=!t);const r=i.querySelector(`#kz-${e}-foto-img`),o=Gt[e];if(r&&o){const c=new Image;c.onload=()=>{const d=Math.max(1,Math.round(c.naturalWidth/Ve)),f=ja(e);r.width=f.w*12,r.height=f.h*12;const u=r.getContext("2d");u&&(u.clearRect(0,0,r.width,r.height),u.imageSmoothingEnabled=!0,u.imageSmoothingQuality="high",u.drawImage(c,f.x*d,f.y*d,f.w*d,f.h*d,0,0,r.width,r.height))},c.src=ht(o)}else r&&r.getContext("2d")?.clearRect(0,0,r.width,r.height);for(const c of["#kz-"+e+"-3d","#kz-"+e+"-temizle","#kz-"+e+"-kaydet"]){const d=i.querySelector(c);d&&(d.hidden=t)}const l=i.querySelector(`#kz-${e}-durum`);l&&(l.textContent=t?"fotoğraf (HD)":""),Kt===e&&Bo(i)}function Ww(i,e){const t=(n,a,s)=>{if(Array.isArray(s)&&s.length===Nn){Vt[n]=!1,Gt[n]=null,sa(i,n);return}if(!a){Vt[n]=!1,Gt[n]=null,sa(i,n);return}Vt[n]=!0,Gt[n]=String(a),sa(i,n);const r=String(a),o=new Image;o.onload=()=>{if(Gt[n]!==r)return;const l=o.naturalWidth>Ve||o.naturalHeight>Mt;Vt[n]=l,Gt[n]=l?r:null,sa(i,n)},o.onerror=()=>{Gt[n]===r&&(Vt[n]=!0)},o.src=ht(r)};t("pelerin",e.pelerin_dosya,e.pelerin),t("kanat",e.kanat_dosya,e.kanat)}async function Kw(i,e,t,n,a,s,r=!1,o=0){ga[e]=!1;const l=u0(t,n,e,a,s,r,o),c=await qw(l);let d;try{d=await te("cmd_kozmetik_fotograf",{tur:e,png:c,duz:a})}catch(h){const v=document.createElement("canvas");v.width=Ve,v.height=Mt;const m=v.getContext("2d",{willReadFrequently:!0});if(!m)throw h;m.imageSmoothingEnabled=!0,m.imageSmoothingQuality="high",m.drawImage(l,0,0,Ve,Mt);const p=ju(m),g=It(e);gn[e].push(g.slice()),gn[e].length>fc&&gn[e].shift(),Qa[e].length=0;for(let y=0;y<Nn;y++)g[y]=p[y];Qn(i,e),await pc(i,e),K("Launcher eski sürümde — fotoğraf 64×32 olarak kaydedildi. HD için launcher'ı güncelle.","err");return}const f=It(e);for(let h=0;h<f.length;h++)f[h]="";localStorage.removeItem(`yikim:kozmetik:${e}:yedek`),Vt[e]=!0,Gt[e]=e==="pelerin"?"pelerin.png":"elytra.png";try{const h=await te("cmd_kozmetik_oku"),v=e==="pelerin"?h.pelerin_dosya:h.kanat_dosya;v&&(Gt[e]=String(v))}catch{}if(e==="pelerin"?Cr=!0:Pr=!0,!s){const h=l.getContext("2d",{willReadFrequently:!0});if(h){const v=ju(h),m=It(e);gn[e].push(m.slice()),gn[e].length>fc&&gn[e].shift(),Qa[e].length=0;for(let p=0;p<Nn;p++)m[p]=v[p];if(e==="kanat")for(let p=0;p<Nn;p++)Jf[p]||(m[p]="")}Vt[e]=!1,Gt[e]=null,Qn(i,e),sa(i,e),await pc(i,e);return}Qn(i,e),sa(i,e);const u=d.yuklendi?"":" (sunucuya yüklenemedi; yalnız sende görünür)";K(`Fotoğraf ${d.genislik}×${d.yukseklik} HD doku olarak kaydedildi${u}`)}function Xw(i,e,t){i.querySelector("#kz-kirp")?.remove();const n=ja(e),a=n.w/n.h,s=e==="pelerin"?"Pelerin":"Elitra";let r=!1,o=!0,l=!1,c=0;const d=document.createElement("div");d.className="kz-kirp",d.id="kz-kirp",d.innerHTML=`
    <div class="kz-kirp-kart" role="dialog" aria-modal="true" aria-label="Fotoğrafı yerleştir">
      <div class="kz-kirp-bas">
        <div class="kz-kirp-basla">
          <b>${s} fotoğrafı</b>
          <span>Çerçeveyi sürükle · köşeden boyutlandır · tekerlekle yakınlaştır · üstteki tutamaçla döndür</span>
        </div>
        <button class="btn ghost sm" id="kz-kirp-kapat" title="Kapat (Esc)">${H("close")}</button>
      </div>
      <div class="kz-kirp-govde">
        <canvas id="kz-kirp-c"></canvas>
        <div class="kz-kirp-yan">
          <span class="kz-etiket">Oyunda görünecek</span>
          <canvas id="kz-kirp-on" width="${n.w}" height="${n.h}"></canvas>
          <p class="kz-kirp-not" id="kz-kirp-boyut">—</p>
          <span class="kz-etiket">Şekil</span>
          <div class="kz-kirp-mod" id="kz-kirp-mod">
            <button class="seg-btn aktif" data-mod="normal">${s} şekli</button>
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
        <button class="btn primary" id="kz-kirp-uygula">${H("check")} Uygula</button>
      </div>
    </div>`,i.appendChild(d);const f=d.querySelector("#kz-kirp-c"),u=d.querySelector("#kz-kirp-on"),h=d.querySelector("#kz-kirp-bilgi"),v=d.querySelector("#kz-kirp-boyut"),m=d.querySelector("#kz-kirp-mod-not"),p=Math.min(620/t.width,420/t.height,1);f.width=Math.max(60,Math.round(t.width*p)),f.height=Math.max(60,Math.round(t.height*p));const g=f.width/t.width,y=f.getContext("2d");if(!y)throw new Error("tuval yok");let b=(()=>{let D=t.height,P=D*a;return P>t.width&&(P=t.width,D=P/a),{x:(t.width-P)/2,y:(t.height-D)/2,w:P,h:D}})();const S=D=>{const P=Math.max(4,t.width/60);let Z=Math.min(Math.max(D.w,P),t.width),G=Z/a;return G>t.height&&(G=t.height,Z=G*a),{x:Math.min(Math.max(D.x,0),Math.max(0,t.width-Z)),y:Math.min(Math.max(D.y,0),Math.max(0,t.height-G)),w:Z,h:G}};b=S(b);const k=()=>{const D=b.x*g,P=b.y*g,Z=b.w*g,G=P-26;return{x:D+Z/2,y:G<14?P+24:G}},A=()=>{y.clearRect(0,0,f.width,f.height),y.imageSmoothingEnabled=!0,y.imageSmoothingQuality="high",y.drawImage(t,0,0,f.width,f.height);const D=b.x*g,P=b.y*g,Z=b.w*g,G=b.h*g;y.fillStyle="rgba(6,8,12,0.66)",y.fillRect(0,0,f.width,P),y.fillRect(0,P+G,f.width,Math.max(0,f.height-P-G)),y.fillRect(0,P,D,G),y.fillRect(D+Z,P,Math.max(0,f.width-D-Z),G),y.strokeStyle="rgba(255,255,255,0.30)",y.lineWidth=1;for(let Be=1;Be<3;Be++)y.beginPath(),y.moveTo(D+Z*Be/3,P),y.lineTo(D+Z*Be/3,P+G),y.stroke(),y.beginPath(),y.moveTo(D,P+G*Be/3),y.lineTo(D+Z,P+G*Be/3),y.stroke();y.strokeStyle="#ff8a3d",y.lineWidth=2,y.strokeRect(D+1,P+1,Math.max(1,Z-2),Math.max(1,G-2)),y.fillStyle="#ff8a3d",y.fillRect(D+Z-8,P+G-8,8,8);const ee=k(),ae=ee.x,ue=ee.y;y.strokeStyle="#ff8a3d",y.lineWidth=2,y.beginPath(),y.moveTo(ae,P),y.lineTo(ae,ue+9),y.stroke(),y.beginPath(),y.arc(ae,ue,9,0,Math.PI*2),y.fillStyle="#12161e",y.fill(),y.stroke(),y.fillStyle="#ff8a3d",y.font="bold 11px sans-serif",y.textAlign="center",y.textBaseline="middle",y.fillText("↻",ae,ue+1);const ke=u0(t,b,e,r,o,l,c),Ne=ke.width/Ve,Ie=ja(e),$e=Ie.w*Ne,j=Ie.h*Ne,re=document.createElement("canvas");re.width=$e,re.height=j;const fe=re.getContext("2d",{willReadFrequently:!0}),Ue=o?$e:Ie.w*11,xe=o?j:Ie.h*11;u.width=Ue,u.height=xe;const Fe=u.getContext("2d");if(fe&&Fe){if(fe.imageSmoothingEnabled=!1,fe.drawImage(ke,Ie.x*Ne,Ie.y*Ne,$e,j,0,0,$e,j),e==="kanat"){const Be=fe.getImageData(0,0,$e,j);for(let Ye=0;Ye<j;Ye++)for(let rt=0;rt<$e;rt++){const Ge=Ie.x+Math.floor(rt/Ne),pt=Ie.y+Math.floor(Ye/Ne);Jf[pt*Ve+Ge]||(Be.data[(Ye*$e+rt)*4+3]=0)}fe.putImageData(Be,0,0)}Fe.clearRect(0,0,Ue,xe),Fe.imageSmoothingEnabled=!1,e==="pelerin"&&(Fe.save(),Fe.translate(Ue,0),Fe.scale(-1,1)),Fe.drawImage(re,0,0,Ue,xe),e==="pelerin"&&Fe.restore()}u.style.imageRendering=o?"auto":"pixelated";const _t=Ne;v&&(v.textContent=`Doku: ${Ve*_t}×${Mt*_t} (kumaş ${n.w*_t}×${n.h*_t})`),h&&(h.textContent=`${Math.round(b.w)}×${Math.round(b.h)} px seçim`)},x=D=>{const P=f.getBoundingClientRect();return{x:(D.clientX-P.left)/Math.max(1,P.width)*f.width/g,y:(D.clientY-P.top)/Math.max(1,P.height)*f.height/g}};let w=null;f.addEventListener("pointerdown",D=>{const P=x(D),Z=14/g,G=k(),ee=G.x,ae=G.y,ue=(D.clientX-f.getBoundingClientRect().left)/Math.max(1,f.getBoundingClientRect().width)*f.width,ke=(D.clientY-f.getBoundingClientRect().top)/Math.max(1,f.getBoundingClientRect().height)*f.height,Ne={x:b.x+b.w/2,y:b.y+b.h/2},Ie=Math.atan2(P.y-Ne.y,P.x-Ne.x)*180/Math.PI;Math.hypot(ue-ee,ke-ae)<=14?w={tip:"don",px:P.x,py:P.y,sec:{...b},aci:Ie,don:c}:w={tip:Math.hypot(P.x-(b.x+b.w),P.y-(b.y+b.h))<Z?"boyut":"tasi",px:P.x,py:P.y,sec:{...b}},f.setPointerCapture(D.pointerId),D.preventDefault()}),f.addEventListener("pointermove",D=>{if(!w)return;const P=x(D),Z=P.x-w.px,G=P.y-w.py;if(w.tip==="don"){const ee={x:b.x+b.w/2,y:b.y+b.h/2},ae=Math.atan2(P.y-ee.y,P.x-ee.x)*180/Math.PI;let ue=(w.don??0)+(ae-(w.aci??ae));ue=(ue%360+360)%360,D.shiftKey&&(ue=Math.round(ue/15)*15),c=ue,z()}else if(w.tip==="tasi")b=S({x:w.sec.x+Z,y:w.sec.y+G,w:w.sec.w,h:w.sec.h});else{const ee=Math.max(w.sec.w+Math.max(Z,G*a),4);b=S({x:w.sec.x,y:w.sec.y,w:ee})}A()});const R=()=>{w=null};f.addEventListener("pointerup",R),f.addEventListener("pointercancel",R),f.addEventListener("wheel",D=>{D.preventDefault();const P=D.deltaY<0?1.12:1/1.12,Z=b.x+b.w/2,G=b.y+b.h/2,ee=b.w*P;b=S({x:Z-ee/2,y:G-ee/a/2,w:ee}),A()},{passive:!1});const L=()=>{m&&(m.textContent=r?"Sadece seçtiğin dikdörtgen yazılır. İç astar, yanlar ve alt şerit BOŞ kalır.":"Desen kumaşın tamamına oturur: iç astar aynası ve yan/üst/alt şeritler otomatik tamamlanır.")};L(),d.querySelectorAll("[data-mod]").forEach(D=>{D.addEventListener("click",()=>{r=D.dataset.mod==="duz",d.querySelectorAll("[data-mod]").forEach(P=>P.classList.toggle("aktif",P===D)),L()})});const z=()=>{const D=d.querySelector("#kz-kirp-ayar-not"),P=d.querySelector("#kz-kirp-don"),Z=Math.round(c);P&&(P.textContent=`${Z}°`,P.classList.toggle("aktif",Z!==0)),D&&(Z===0&&!l?D.textContent="Çerçevenin üstündeki yuvarlak tutamacı fareyle çevirerek istediğin açıya getir. Fotoğrafın dışında kalan yerler pelerinde SİYAH, elitrada SAYDAM kalır.":D.textContent=`${Z?Z+"° döndürüldü":""}${Z&&l?" · ":""}${l?"aynalandı":""} — boş kalan yerler pelerinde SİYAH, elitrada SAYDAM.`)};d.querySelector("#kz-kirp-ayna")?.addEventListener("click",D=>{l=!l,D.currentTarget.classList.toggle("aktif",l),z(),A()}),d.querySelector("#kz-kirp-don")?.addEventListener("click",D=>{c=0,D.currentTarget.classList.remove("aktif"),D.currentTarget.textContent="0°",z(),A()}),z(),d.querySelector("#kz-kirp-piksel")?.addEventListener("change",D=>{o=D.target.checked,A()});const F=()=>{document.removeEventListener("keydown",C),d.remove()},C=D=>{D.key==="Escape"&&(D.preventDefault(),F())};document.addEventListener("keydown",C);const $=d.querySelector("#kz-kirp-uygula");$?.addEventListener("click",()=>{$.disabled||($.disabled=!0,$.textContent="Kaydediliyor…",Kw(i,e,t,{...b},r,o,l,c).then(()=>F()).catch(D=>{$.disabled=!1,$.innerHTML=`${H("check")} Uygula`,K(String(D),"err")}))}),d.querySelector("#kz-kirp-kapat")?.addEventListener("click",F),d.querySelector("#kz-kirp-iptal")?.addEventListener("click",F),d.addEventListener("pointerdown",D=>{D.target===d&&F()}),A()}function Yw(i,e,t){const n=document.createElement("canvas");n.width=Ve,n.height=Mt;const a=n.getContext("2d",{willReadFrequently:!0});if(!a)throw new Error("tuval yok");a.imageSmoothingEnabled=!1,a.drawImage(t,0,0,Ve,Mt);const s=ju(a);if(hi(s))throw new Error("pafta boş görünüyor");const r=It(e);gn[e].push(r.slice()),gn[e].length>fc&&gn[e].shift(),Qa[e].length=0;for(let o=0;o<Nn;o++)r[o]=s[o];Vt[e]=!1,Gt[e]=null,ga[e]=!1,Qn(i,e),sa(i,e),K("Pafta okundu — 64×32 atlas yüklendi.")}async function Zw(i,e,t){try{const n=await Gw(t);if(!n)return;const a=n.width/Math.max(1,n.height);if(Math.abs(a-2)<.02&&n.height>=32&&n.height<=128){Yw(i,e,n);return}Xw(i,e,n)}catch(n){K(String(n),"err")}}async function Jw(i,e){let t;try{t=await te("cmd_kozmetik_oku")}catch{return!1}const n=e==="pelerin"?t.pelerin_dosya:t.kanat_dosya;if(!n)return!1;const a=e==="pelerin"?t.pelerin:t.kanat;if(Array.isArray(a)&&a.length===Nn&&!hi(a)){const s=It(e);for(let r=0;r<Nn;r++)s[r]=a[r]??"";Vt[e]=!1,Gt[e]=null}else Vt[e]=!0,Gt[e]=String(n);return e==="pelerin"?Cr=!0:Pr=!0,Qn(i,e),sa(i,e),!0}async function pc(i,e){const t=It(e),n=!hi(t),a=e==="pelerin"?"Pelerin":"Elitra";if(Vt[e]){K(`${a} HD fotoğraf olarak kayıtlı. Değiştirmek için yeni fotoğraf yükle.`);return}if(!n&&!ga[e]){const d=await Jw(i,e);K(d?`${a} diskte kayıtlı — silmek için "Kaldır"ı kullan.`:`Kaydedilecek bir ${a.toLocaleLowerCase("tr")} tasarımı yok.`);return}const s=i.querySelector(`#kz-${e}-kaydet`),r=s?s.innerHTML:"",o=`${Date.now()}-${Math.random()}`,l=(d,f)=>{s&&(s.dataset.jeton=o,s.classList.remove("tamam","hata","bekliyor"),s.classList.add(f),s.textContent=d,s.disabled=!0)},c=d=>{s&&window.setTimeout(()=>{s.dataset.jeton===o&&(s.innerHTML=r,s.disabled=!1,s.classList.remove("tamam","hata","bekliyor"))},d)};l("Kaydediliyor…","bekliyor");try{const d=await tf(e,t.slice());ga[e]=!1;try{n?localStorage.setItem(`yikim:kozmetik:${e}:yedek`,JSON.stringify(t)):localStorage.removeItem(`yikim:kozmetik:${e}:yedek`)}catch{}if(e==="pelerin"?Cr=n:Pr=n,jf(i,e),l("Kaydedildi ✓","tamam"),c(1800),!n){K(`${a} kaldırıldı — oyunda ${e==="kanat"?"normal elitra":"görünmeyecek"}.`);return}d.yuklendi?K(`${a} kaydedildi — oyunda ve diğer oyuncularda görünecek.`):K(`${a} kaydedildi (yerel). Sunucu: ${Sw(d.hata||"ulaşılamadı")}`)}catch(d){l("Kaydedilemedi","hata"),c(2200),K(String(d),"err")}}let Qr=null;function jw(i){if(!Qr||!Qr.isConnected)return;const e=i.target;if(e&&(e.tagName==="INPUT"||e.tagName==="TEXTAREA"||e.isContentEditable)||!(i.ctrlKey||i.metaKey)||i.altKey)return;const t=i.key.toLowerCase();t==="z"&&!i.shiftKey?(i.preventDefault(),r0(Qr,Kt)):(t==="z"&&i.shiftKey||t==="y")&&(i.preventDefault(),o0(Qr,Kt))}window.addEventListener("keydown",jw);function Qw(){na.home=KM,na.instances=cE,na.explore=xE,na.news=CE,na.settings=jr,na.skins=Dc,na.kozmetik=kw}let hs=null;const hr=i=>i.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function eT(){hs||(hs=document.createElement("div"),hs.className="drop-veil",hs.innerHTML=`
    <div class="drop-box">
      <div class="drop-glyph">⇣</div>
      <b>Bırak ve yükle</b>
      <span>Mod (.jar) · Mod paketi (.mrpack / CurseForge .zip) · Dünya · Doku &amp; Shader (.zip) · Emote (.emotecraft)</span>
    </div>`,document.body.appendChild(hs))}function xm(){hs?.remove(),hs=null}async function tT(i){const e=i.split(/[\\/]/).pop()||i;let t="";try{t=await te("cmd_route_dropped",{path:i})}catch(n){K(`Dosya tanınamadı: ${n}`,"err");return}try{if(t==="modpack"){const n=Jt(`
        <h3 style="margin-bottom:6px">Mod paketi kurulacak</h3>
        <p><b>${hr(e)}</b> yeni bir kurulum olarak kurulsun mu?<br />
        <span style="font-size:11px; color:var(--text-faint)">İçindeki sürüm listesi otomatik indirilir.</span></p>
        <div style="display:flex; gap:8px; margin-top:14px; justify-content:flex-end">
          <button class="btn ghost sm" id="dp-no">İptal</button>
          <button class="btn primary sm" id="dp-go">Paketi Kur</button>
        </div>`);let a=!1;if(n.root.querySelector("#dp-no")?.addEventListener("click",()=>n.close()),n.root.querySelector("#dp-go")?.addEventListener("click",()=>{a=!0,n.close()}),await new Promise(r=>{const o=setInterval(()=>{document.body.contains(n.root)||(clearInterval(o),r())},150)}),!a){K("Kurulum iptal edildi");return}K("Paket indiriliyor — süreç panelinden takip edebilirsin"),Uo("Sürüklenen paket kurulumu");let s="Paket";try{const r=await te("cmd_import_pack_file",{path:i,name:null});s=r.name||"Paket",await nn(),Ar(),qe("instances"),qf(r)}catch(r){Rr(String(r))}K(`${s} kuruldu ✓`)}else if(t==="jar"){const n=await nf(`Mod eklenecek kurulum: <b>${hr(e)}</b>`);if(!n)return;await te("cmd_add_content_path",{instanceId:n.id,kind:"mods",path:i});const a=n.mod_loader&&n.mod_loader!=="fabric"?" — DİKKAT: bu kurulum Fabric olmadığı için çalışmayabilir":"";K(`Mod eklendi: ${e}${a}`,a?"err":"ok")}else if(t==="world"){const n=await nf(`Dünya yüklenecek kurulum: <b>${hr(e)}</b>`);if(!n)return;await te("cmd_add_content_path",{instanceId:n.id,kind:"saves",path:i}),K(`Dünya yüklendi: ${e}`)}else if(t==="emote"){const n=await te("cmd_import_emote_dosyasi",{path:i});K(`Emote vitrine eklendi: ${n.adi}`)}else t==="zip"?await nT(i,e):K(`${e} tanınmadı — .jar, .mrpack, dünya zip'i, doku/shader zip'i veya dünya klasörü bırak`,"err")}catch(n){K(`Kurulamadı: ${n}`,"err")}}async function nT(i,e){const t=Jt(`
    <h3 style="margin-bottom:6px">Bu zip nedir?</h3>
    <p><b>${hr(e)}</b> ne tür bir içerik?</p>
    <div style="display:flex; flex-direction:column; gap:8px; margin-top:14px">
      <button class="btn ghost" data-k="resourcepacks">Doku Paketi</button>
      <button class="btn ghost" data-k="shaderpacks">Shader</button>
      <button class="btn ghost" data-k="saves_zip">Dünya (zip açılır → dünyalar)</button>
      <button class="btn ghost" id="dp-cancel">İptal</button>
    </div>`);let n="";if(t.root.querySelectorAll("[data-k]").forEach(s=>s.addEventListener("click",()=>{n=s.dataset.k||"",t.close()})),t.root.querySelector("#dp-cancel")?.addEventListener("click",()=>t.close()),await new Promise(s=>{const r=setInterval(()=>{document.body.contains(t.root)||(clearInterval(r),s())},150)}),!n)return;const a=await nf(n==="saves_zip"?"Dünya yüklenecek kurulum":"İçerik eklenecek kurulum");a&&(await te("cmd_add_content_path",{instanceId:a.id,kind:n,path:i}),K(`Eklendi: ${e}`))}function nf(i){return new Promise(e=>{const t=ie.instances||[];if(!t.length){K("Önce Paketler sekmesinde bir kurulum oluştur","err"),e(null);return}if(t.length===1){e(t[0]);return}const n=Jt(`
      <h3 style="margin-bottom:6px">${i}</h3>
      <p style="font-size:11px; color:var(--text-faint)">Kurulum seç</p>
      <div class="inst-pick">
        ${t.map(s=>`
          <button class="btn ghost" data-id="${s.id}">
            <span style="font-size:18px">${s.icon||"📦"}</span>
            <span style="flex:1; text-align:left; overflow:hidden; text-overflow:ellipsis; white-space:nowrap">${hr(String(s.name))}</span>
            <span style="font-size:11px; color:var(--text-faint)">${hr(String(s.mc_version||""))}</span>
          </button>`).join("")}
      </div>`);n.root.querySelectorAll("[data-id]").forEach(s=>{s.addEventListener("click",()=>{const r=t.find(o=>o.id===s.dataset.id)||null;n.close(),e(r)})});const a=setInterval(()=>{document.body.contains(n.root)||(clearInterval(a),e(null))},150)})}function iT(){try{const i=window.__TAURI__?.window?.getCurrentWindow?.();if(!i?.onDragDropEvent)return;i.onDragDropEvent(async e=>{const t=e?.payload??e??{},n=t.type;if(n==="enter"||n==="over")eT();else if(n==="drop"){xm();const a=t.paths||[];for(const s of a)await tT(s)}else xm()})}catch{}}const $l=[{page:"home",sel:null,title:"YIKIMLient'e hoş geldin",text:"60 saniyede öğrenelim — İleri'ye tıkladıkça her sekme animasyonla gösterilecek."},{page:"home",sel:'.rail-item[data-page="home"]',title:"Ana Sayfa",text:"Kurulumunu seç, Oyna'ya bas — saniyeler içinde oyundasın. Sınırsız FPS ve Agresif ayarlar otomatik hazırdır."},{page:"instances",sel:'.rail-item[data-page="instances"]',title:"Paketler",text:"Kurulumlarını yönettiğin yer: modlar, dünyalar, doku & shader'lar. Bonus: dosyayı bu ekrana sürükleyip bırak — mod, paket, dünya, hepsi otomatik kurulur."},{page:"explore",sel:'.rail-item[data-page="explore"]',title:"Keşfet",text:"Modrinth & CurseForge içinde arama: mod, mod paketi, doku, shader, dünya — tek tıkla seçili kuruluma iner."},{page:"news",sel:'.rail-item[data-page="news"]',title:"Haberler",text:"YIKIMLient duyuruları ve Minecraft haberleri burada."},{page:"settings",sel:'.rail-item[data-page="settings"]',title:"Ayarlar",text:"Görsel dünyalar (5 tema!), Discord Rich Presence, Java profilleri (Agresif FPS dahil), RAM — hepsi burada."},{page:"kozmetik",sel:'.rail-item[data-page="kozmetik"]',title:'Kozmetikler — "Yol Silindiri" kuralı',text:`Hesabını Discord'da doğruladıktan sonra kendi pelerinini ve elıtranı burada çizebilirsin. Çizme izni, sunucudaki YIKIM etiketi/"Yol Silindiri" rolüne bağlıdır: rolü bırakırsan izin anında kapanır, tasarımın bilgisayarında kalır ve görünümün varsayılan YIKIM pelerinine döner; etiketi yeniden alınca aynı tasarım geri gelir.`},{page:"home",sel:null,title:"Hazırsın!",text:"İyi oyunlar — YIKIM hep HIZ. Bu rehber artık gösterilmeyecek."}];let Bd=null;function aT(i,e){const t=window.innerWidth,n=window.innerHeight,a=e.offsetWidth,s=e.offsetHeight,r=l=>Math.max(12,Math.min(l,t-a-12)),o=l=>Math.max(14,Math.min(l,n-s-14));if(i){const l=i.right+16,c=i.left-16-a;let d;l+a<=t-12?d=l:c>=12?d=c:d=(t-a)/2;let f=i.top+i.height/2-s/2;f<14&&(f=i.bottom+16),e.style.left=`${r(d)}px`,e.style.top=`${o(f)}px`,e.style.transform="none"}else e.style.left=`${Math.max(12,(t-a)/2)}px`,e.style.top=`${o((n-s)/2)}px`,e.style.transform="none"}function Sm(i,e){const t=$l[e],n=i.querySelector(".spot"),a=i.querySelector(".tc");qe(t.page);const s=a.querySelector(".tc-step");s.innerHTML=$l.map((l,c)=>`<i class="${c<=e?"done":""}"></i>`).join(""),a.querySelector("h3").textContent=t.title,a.querySelector("p").textContent=t.text;const r=a.querySelector(".tc-next");r.textContent=e===$l.length-1?"Tamam ✓":"İleri →";let o=null;if(t.sel){const l=document.querySelector(t.sel);l&&(o=l.getBoundingClientRect())}o?(n.style.opacity="1",n.style.left=`${o.left-6}px`,n.style.top=`${o.top-6}px`,n.style.width=`${o.width+6*2}px`,n.style.height=`${o.height+6*2}px`):n.style.opacity="0",aT(o,a),ua.fromTo(a,{y:14,autoAlpha:0},{y:0,autoAlpha:1,duration:.38,ease:"power3.out",clearProps:"transform"})}function sT(){if(Bd||ie.config?.guided_tour_done)return;const i=document.createElement("div");i.className="yikim-tour",i.innerHTML=`
    <div class="spot"></div>
    <div class="tc">
      <span class="tc-step"></span>
      <h3></h3>
      <p></p>
      <div class="tc-actions">
        <button class="btn ghost sm tc-skip">Atla</button>
        <button class="btn primary sm tc-next">İleri →</button>
      </div>
    </div>`,document.body.appendChild(i),Bd=i;let e=0;const t=async()=>{i.remove(),Bd=null,document.removeEventListener("keydown",a),qe("home");try{ie.config={...ie.config,guided_tour_done:!0},await te("cmd_save_settings",{config:ie.config}),await nn()}catch{}},n=()=>{if(e+=1,e>=$l.length){t();return}Sm(i,e)},a=s=>{s.key==="Enter"||s.key==="ArrowRight"?(s.preventDefault(),n()):s.key==="Escape"&&(s.preventDefault(),t())};document.addEventListener("keydown",a),i.querySelector(".tc-skip")?.addEventListener("click",()=>void t()),i.querySelector(".tc-next")?.addEventListener("click",n),Sm(i,e)}let rr=null,Hl=null;function us(){Hl!==null&&(clearInterval(Hl),Hl=null)}function km(i){return i.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}async function af(){try{ie.config={...ie.config,onboarding_done:!0},await te("cmd_save_settings",{config:ie.config}),await nn()}catch{}}function $d(i){us(),rr?.remove(),rr=null,af(),qe("home")}function rT(){if(rr)return!0;if(ie.config?.onboarding_done)return!1;if(!(ie.accounts.length===0&&ie.instances.length===0))return af(),!1;const e=document.createElement("div");e.className="yikim-ob",e.innerHTML='<div class="ob-card"></div>',document.body.appendChild(e),rr=e;const t=e.querySelector(".ob-card"),n=u=>`<div class="ob-dots">${[0,1,2,3,4].map(h=>`<i class="${h<=u?"done":""}"></i>`).join("")}</div>`,a=u=>`
    <div class="ob-actions">
      ${u.back?'<button class="btn ghost sm" id="ob-back">← Geri</button>':""}
      <span class="spacer"></span>
      ${u.skip?`<button class="btn ghost sm" id="${u.skipId}">${u.skip}</button>`:""}
      ${u.next?`<button class="btn primary sm" id="${u.nextId}">${u.next}</button>`:""}
    </div>`;function s(){t.innerHTML=`
      <img class="ob-logo" alt="" draggable="false" src="/logo.png" />
      <h2>YIKIMLient'e hoş geldin</h2>
      <p class="ob-sub">Ultra-hızlı Minecraft launcher — 60 saniyede oyundasın.<br />Üç kısa soru, hepsi bu.</p>
      ${n(0)}
      <div class="ob-step-label">1 / 5 — Hoş geldin</div>
      <p style="text-align:center; color:var(--text-dim); font-size:12.5px; line-height:1.6">
        Bu sihirbaz hesabını bağlar ve ilk oyun paketini kurar.<br />Her istediğin zaman Ayarlar'dan değiştirebilirsin.
      </p>
      ${a({next:"Başla →",nextId:"ob-next",skip:"Geç beni",skipId:"ob-skip"})}
    `,t.querySelector("#ob-skip")?.addEventListener("click",()=>$d()),t.querySelector("#ob-next")?.addEventListener("click",r)}function r(){us(),t.innerHTML=`
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
    `,t.querySelector("#ob-back")?.addEventListener("click",()=>{us(),s()}),t.querySelector("#ob-skip")?.addEventListener("click",()=>$d());const u=t.querySelector("#ob-acc-ok"),h=t.querySelector("#ob-next"),v=t.querySelector("#ob-ms-durum"),m=t.querySelector("#ob-off-uyari"),p=t.querySelector("#ob-ms"),g=t.querySelector("#ob-off-go"),y=t.querySelector("#ob-off-ad"),T=S=>{u.style.display="flex",u.textContent=`✓ Hesap hazır: ${S}`,h.disabled=!1,us()};ie.accounts.length?T(ie.accounts[0]?.name??""):h.disabled=!0,p.addEventListener("click",async()=>{if(!p.disabled){p.disabled=!0,v.style.display="block",v.innerHTML='<span class="spinner"></span> Microsoft oturum penceresi açılıyor…';try{const S=await te("cmd_ms_login_begin");await nn(),v.textContent="",v.style.display="none",T(S?.name??ie.accounts[0]?.name??"")}catch(S){v.textContent=String(S),p.disabled=!1}}});const b=async()=>{if(g.disabled)return;const S=y.value.trim();if(S.length<3){m.textContent="İsim en az 3 karakter olmalı.",y.focus();return}m.textContent="",g.disabled=!0,g.textContent="…";try{await te("cmd_add_offline_account",{name:S}),await nn(),T(S),g.textContent="✓"}catch(k){m.textContent=String(k),g.disabled=!1,g.textContent="Giriş"}};g.addEventListener("click",()=>void b()),y.addEventListener("keydown",S=>{S.key==="Enter"&&(S.preventDefault(),b())}),Hl=setInterval(()=>{ie.accounts.length&&T(ie.accounts[0]?.name??"")},600),h.addEventListener("click",()=>{us(),o()})}function o(){us(),ps(),t.innerHTML=`
      ${n(2)}
      <div class="ob-step-label">3 / 5 — Doğrulama</div>
      <h2 style="font-size:16px">Hesabını doğrula</h2>
      <p class="ob-sub" style="margin-bottom:10px">
        Discord ile bağla, şifre oluştur. Doğrulanmayan hesap da oynar;
        yalnız kozmetik/skin değiştiremez (adının başında ✕ görünür).
      </p>
      <div id="ob-gv"></div>
      ${a({back:!0,next:"İleri →",nextId:"ob-next",skip:"Şimdi değil",skipId:"ob-skip"})}
    `;const u=t.querySelector("#ob-gv");u&&ms(u),t.querySelector("#ob-back")?.addEventListener("click",()=>{ps(),r()}),t.querySelector("#ob-skip")?.addEventListener("click",()=>{ps(),l()}),t.querySelector("#ob-next")?.addEventListener("click",()=>{ps(),l()})}async function l(){let u=[];try{u=(await te("cmd_list_versions")).all?.slice(0,80)??[]}catch{}t.innerHTML=`
      ${n(3)}
      <div class="ob-step-label">4 / 5 — İlk paket</div>
      <h2 style="font-size:16px">İlk oyun dünyasını oluştur</h2>
      <p class="ob-sub" style="margin-bottom:8px">Fabric + YIKIM çekirdeği otomatik; standart FPS modları dahil.</p>
      <label class="ob-lab">Paket adı</label>
      <input class="input" id="ob-name" value="Yeni Kurulum" maxlength="40" />
      <label class="ob-lab">Minecraft sürümü</label>
      <select class="input" id="ob-version">
        ${u.map(v=>`<option value="${km(v)}">${km(v)}</option>`).join("")||'<option value="1.21.11">1.21.11</option>'}
      </select>
      <div class="ob-ok" id="ob-inst-ok" style="display:none"></div>
      ${a({back:!0,next:"Kurulum Oluştur",nextId:"ob-create"})}
      <button class="btn ghost sm" id="ob-explore" style="width:100%; margin-top:10px">
        Ya da hazır mod paketi indir (Keşfet)
      </button>
    `,t.querySelector("#ob-back")?.addEventListener("click",o);let h=null;t.querySelector("#ob-create")?.addEventListener("click",async v=>{const m=v.currentTarget;m.disabled=!0,m.innerHTML='<span class="spinner"></span> Oluşturuluyor…';const p=t.querySelector("#ob-name").value.trim()||"Yeni Kurulum",g=t.querySelector("#ob-version").value;try{h=await te("cmd_create_instance",{instance:{name:p,mc_version:g,mod_loader:"fabric",ram_mb:ie.config?.default_ram_mb||4096,java_preset_id:ie.config?.default_java_preset||"balanced",standard_mods:!0}});const y=t.querySelector("#ob-inst-ok");y.style.display="flex",y.textContent=`✓ Kurulum hazır: ${h.name}`,m.textContent="✓ Oluşturuldu",await nn(),setTimeout(()=>c(),700)}catch(y){f(`Kurulum oluşturulamadı: ${y}`),m.disabled=!1,m.textContent="Kurulum Oluştur"}}),t.querySelector("#ob-explore")?.addEventListener("click",()=>{d()})}function c(){t.innerHTML=`
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
    `,t.querySelector("#ob-done")?.addEventListener("click",()=>$d())}return s(),!0;function d(){us(),rr?.remove(),rr=null,af(),qe("explore","kind:modpack")}function f(u){it(()=>Promise.resolve().then(()=>vt),void 0).then(h=>h.toast(u,"err"))}}const As=Math.PI*2;function mc(){return getComputedStyle(document.documentElement).getPropertyValue("--accent").trim()||"#ff7a18"}function oT(i,e){const t=i.match(/^#?([0-9a-f]{6})$/i);if(!t)return i;const n=parseInt(t[1],16);return`rgba(${Math.round((n>>16&255)*e)},${Math.round((n>>8&255)*e)},${Math.round((n&255)*e)},1)`}function Uc(i,e){i.fillStyle=e.hue,i.beginPath(),i.arc(e.x,e.y,e.r,0,As),i.fill()}function Mm(i,e){const t=e?oT(mc(),.88):mc(),n=a=>({x:Math.random()*a[0],y:a[1]+10,vx:(Math.random()-.5)*12,vy:-(28+Math.random()*44)*(e?.75:1),r:e?2.6:1.2+Math.random()*1.6,a:.95,life:0,max:6+Math.random()*5,hue:t,seed:Math.random()*As});return{base:e?24:30,spawn:n,step:(a,s,r)=>{a.x+=(a.vx+Math.sin(a.seed+a.life*2.1)*9)*s*(1+i*s),a.y+=a.vy*s,a.a=Math.max(0,1-a.life/a.max*1.05),(a.y<-12||a.a<=0)&&Object.assign(a,n(r))},draw:Uc}}function Hd(i){const e=t=>({x:Math.random()*t[0],y:Math.random()*t[1],vx:(Math.random()-.5)*7,vy:(Math.random()-.5)*7,r:.9+Math.random()*1.5,a:.3,life:0,max:9+Math.random()*8,hue:i,seed:Math.random()*As});return{base:26,spawn:e,step:(t,n,a)=>{t.x+=t.vx*n,t.y+=t.vy*n,t.x<-8&&(t.x=a[0]+8),t.x>a[0]+8&&(t.x=-8),t.y<-8&&(t.y=a[1]+8),t.y>a[1]+8&&(t.y=-8),t.a=.16+.4*Math.sin(t.life/t.max*Math.PI),t.life>t.max&&Object.assign(t,e(a))},draw:Uc}}function lT(){const i=e=>({x:Math.random()*e[0],y:-8,vx:(Math.random()-.5)*8,vy:13+Math.random()*24,r:1+Math.random()*2.6,a:.8,life:0,max:20,hue:"#ffffff",seed:Math.random()*As});return{base:36,spawn:i,step:(e,t,n)=>{e.x+=(e.vx+Math.sin(e.seed+e.life*1.2)*11)*t,e.y+=e.vy*t,e.y>n[1]+10&&Object.assign(e,i(n))},draw:Uc}}function cT(){const i=mc(),e=t=>({x:Math.random()*t[0],y:t[1]+10,vx:(Math.random()-.5)*9,vy:-(18+Math.random()*26),r:1.4+Math.random()*2.6,a:.5,life:0,max:14,hue:i,seed:Math.random()*As});return{base:16,spawn:e,step:(t,n,a)=>{t.x+=(t.vx+Math.sin(t.seed+t.life*2.2)*7)*n,t.y+=t.vy*n,t.vy-=2.5*n,t.y<-14&&Object.assign(t,e(a))},draw:(t,n)=>{t.strokeStyle=n.hue,t.lineWidth=1,t.beginPath(),t.arc(n.x,n.y,n.r*1.7,0,As),t.stroke()}}}function dT(){const i=mc(),e=t=>({x:Math.random()*t[0],y:Math.random()*-t[1],vx:0,vy:170+Math.random()*260,r:1,a:.4+Math.random()*.4,life:0,max:30,hue:i,seed:0});return{base:20,spawn:e,step:(t,n,a)=>{t.y+=t.vy*n,t.y>a[1]+40&&Object.assign(t,e(a))},draw:(t,n)=>{t.strokeStyle=n.hue,t.lineWidth=n.a*1.3,t.beginPath(),t.moveTo(n.x,n.y),t.lineTo(n.x,n.y-14-n.a*16),t.stroke()}}}function xl(i){return{base:24,spawn:t=>({x:Math.random()*t[0],y:Math.random()*t[1],vx:0,vy:0,r:.8+Math.random()*1.3,a:0,life:Math.random()*4,max:2.6+Math.random()*3.4,hue:i,seed:Math.random()*As}),step:(t,n,a)=>{t.a=Math.max(0,Math.sin(t.life/t.max*Math.PI))*.9,t.life>t.max&&(t.life=0)},draw:Uc}}function uT(i){switch(i){case"pano":return Mm(.5,!1);case"sahne":return xl("rgba(255,171,77,0.75)");case"sokum":return Mm(.9,!0);case"afis":return Hd("rgba(63,50,38,0.5)");case"standart":return xl("rgba(147,168,255,0.5)");case"sira":return xl("rgba(163,230,53,0.85)");case"rihtim":return cT();case"oda":return Hd("rgba(224,48,30,0.6)");case"kumas":return Hd("rgba(138,122,92,0.5)");case"perde":return xl("rgba(212,175,55,0.8)");case"buz":return lT();case"skala":return dT();default:return null}}let Kn=null,Ii=null,Pa=null,er=[],En=0,co=0,f0=1,h0=33,Nc=!1;function eh(){return Math.min(window.devicePixelRatio||1,1.5)}function Gd(){En&&cancelAnimationFrame(En),En=0,Pa=null,er=[],Kn&&(Kn.remove(),Kn=null,Ii=null)}function gc(i){if(En=0,!Ii||!Kn||!Pa||Nc||document.hidden)return;if(i-co<h0){En=requestAnimationFrame(gc);return}const e=Math.min((i-co)/1e3,.06);co=i,En=requestAnimationFrame(gc);const t=eh();Ii.setTransform(t,0,0,t,0,0),Ii.clearRect(0,0,window.innerWidth,window.innerHeight);const n=[window.innerWidth,window.innerHeight],a=Math.max(1,Math.round(Pa.base*f0));for(;er.length<a;){const s=Pa.spawn(n);s.life=Math.random()*s.max,er.push(s)}for(;er.length>a;)er.pop();for(const s of er)s.life+=e,Pa.step(s,e,n),Ii.globalAlpha=s.a,Pa.draw(Ii,s);Ii.globalAlpha=1}function p0(){Pa&&Ii&&!En&&!document.hidden&&!Nc&&(co=performance.now(),En=requestAnimationFrame(gc))}document.addEventListener("visibilitychange",()=>{document.hidden?(En&&cancelAnimationFrame(En),En=0):p0()});window.addEventListener("blur",()=>{Nc=!0,En&&cancelAnimationFrame(En),En=0});window.addEventListener("focus",()=>{Nc=!1,p0()});window.addEventListener("resize",()=>{if(!Kn||!Ii)return;const i=eh();Kn.width=Math.round(innerWidth*i),Kn.height=Math.round(innerHeight*i)});function fT(){const i=String(ie.config?.fx_particles??"mid"),e=document.documentElement.getAttribute("data-world")||"pano",t=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(i==="none"||t){Gd();return}const n=uT(e);if(!n){Gd();return}f0={low:.45,mid:.9,high:1.6}[i]??1,h0=1e3/({low:25,mid:30,high:40}[i]??30),Gd(),Pa=n;const r=eh();Kn=document.createElement("canvas"),Kn.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:3",Kn.width=Math.round(innerWidth*r),Kn.height=Math.round(innerHeight*r),document.body.appendChild(Kn),Ii=Kn.getContext("2d"),co=performance.now(),En=requestAnimationFrame(gc)}function hT(){return getComputedStyle(document.documentElement).getPropertyValue("--accent").trim()||"#ff7a18"}function pT(i){return`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M4 2 L18 13.5 L11.2 14.2 L15.6 21.2 L12.8 22.8 L8.6 15.8 L4 19.4 Z" fill="${i}" stroke="#ffffff" stroke-opacity="0.72" stroke-width="1.6" stroke-linejoin="round"/></svg>`}function mT(i){return`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><circle cx="12" cy="12" r="7.2" fill="none" stroke="${i}" stroke-width="2"/><circle cx="12" cy="12" r="1.7" fill="${i}"/><path d="M12 1.6 V5.2 M12 18.8 V22.4 M1.6 12 H5.2 M18.8 12 H22.4" stroke="${i}" stroke-width="2"/></svg>`}function gT(i){return`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><circle cx="8" cy="8" r="3.2" fill="${i}" stroke="#ffffff" stroke-opacity="0.8" stroke-width="1.2"/></svg>`}const vT={yikim:{build:pT,spot:"3 2"},hedef:{build:mT,spot:"12 12"},nokta:{build:gT,spot:"8 8"}};function _T(){const i=String(ie.config?.cursor_style||"standart"),e=document.documentElement,t=vT[i];if(!t){e.removeAttribute("data-custom-cursor"),e.style.removeProperty("--yikim-cursor");return}const n=t.build(hT());e.style.setProperty("--yikim-cursor",`url("data:image/svg+xml,${encodeURIComponent(n)}") ${t.spot}, auto`),e.setAttribute("data-custom-cursor","1")}const et=`xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
  stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"`,yT=`<svg ${et}><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M10 21v-6h4v6"/></svg>`,bT=`<svg ${et}><rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/></svg>`,xT=`<svg ${et}><circle cx="12" cy="12" r="9"/><path d="m15.2 8.8-1.9 4.5-4.5 1.9 1.9-4.5z"/></svg>`,ST=`<svg ${et}><path d="M4 6.5A1.5 1.5 0 0 1 5.5 5h13A1.5 1.5 0 0 1 20 6.5v11a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5z"/><path d="M8 9h5v5H8z"/><path d="M16 9h1M16 12h1M16 15h1M8 16.5h5"/></svg>`,kT=`<svg ${et}><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>`,MT=`<svg ${et}><path d="M12 5v14M5 12h14"/></svg>`,ET=`<svg ${et}><circle cx="11" cy="11" r="7"/><path d="m20.5 20.5-4.2-4.2"/></svg>`,wT='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8.5 5.9v12.2a.8.8 0 0 0 1.22.68l9.87-6.1a.8.8 0 0 0 0-1.36L9.72 5.22A.8.8 0 0 0 8.5 5.9Z"/></svg>',TT=`<svg ${et}><rect x="3.5" y="4.5" width="17" height="15" rx="2"/><circle cx="9" cy="10" r="1.6"/><path d="m3.5 16 4.4-4.4a1.4 1.4 0 0 1 2 0l4.6 4.4"/><path d="m13.6 15 2.3-2.3a1.4 1.4 0 0 1 2 0l2.6 2.5"/></svg>`,AT=`<svg ${et}><path d="M3.5 7.5v10a1.5 1.5 0 0 0 1.5 1.5h13.6a1.5 1.5 0 0 0 1.4-1l1.6-4.5a1 1 0 0 0-.94-1.35H7.2a2 2 0 0 0-1.9 1.37L3.5 17.5"/><path d="M3.5 7.5v-2A1.5 1.5 0 0 1 5 4h4l1.6 2H19a1.5 1.5 0 0 1 1.5 1.5v2"/></svg>`,RT=`<svg ${et}><path d="M4 7h16M9.5 4h5M6.5 7l.8 12a1.5 1.5 0 0 0 1.5 1.4h6.4a1.5 1.5 0 0 0 1.5-1.4l.8-12"/><path d="M10 11v6M14 11v6"/></svg>`,LT=`<svg ${et}><path d="m7 20.5-3.8-3.8a2 2 0 0 1 0-2.8l9.4-9.4a2 2 0 0 1 2.8 0l4.8 4.8a2 2 0 0 1 0 2.8l-8.4 8.4z"/><path d="M21.5 20.5H8.5"/><path d="m5.5 11.5 8.5 8.5"/></svg>`,CT=`<svg ${et}><rect x="9" y="9" width="11.5" height="11.5" rx="2"/><path d="M5.5 15H4.5A1.5 1.5 0 0 1 3 13.5v-9A1.5 1.5 0 0 1 4.5 3h9A1.5 1.5 0 0 1 15 4.5v1"/></svg>`,PT=`<svg ${et}><path d="M19 12H5M11 18l-6-6 6-6"/></svg>`,DT=`<svg ${et}><path d="m4.5 12.5 5 5 10-11"/></svg>`,IT=`<svg ${et}><circle cx="12" cy="8" r="4"/><path d="M4.5 20.5c.8-3.7 3.9-6 7.5-6s6.7 2.3 7.5 6"/></svg>`,zT=`<svg ${et}><path d="M10 4.5A1.5 1.5 0 0 1 11.5 3h1A1.5 1.5 0 0 1 14 4.5V6h4.5A1.5 1.5 0 0 1 20 7.5V11h-1.5a1.5 1.5 0 0 0 0 3H20v3.5a1.5 1.5 0 0 1-1.5 1.5H14v-1.5a1.5 1.5 0 0 0-3 0V20H6.5A1.5 1.5 0 0 1 5 18.5V15H3.5a1.5 1.5 0 0 1 0-3H5V7.5A1.5 1.5 0 0 1 6.5 6H10z"/></svg>`,UT=`<svg ${et}><path d="m12 3 8.5 4.5v9L12 21l-8.5-4.5v-9z"/><path d="M3.5 7.5 12 12l8.5-4.5M12 12v9"/></svg>`,NT=`<svg ${et}><rect x="6" y="6" width="12" height="12" rx="1.5"/><rect x="9.5" y="9.5" width="5" height="5" rx="1"/><path d="M9 2.5V6M15 2.5V6M9 18v3.5M15 18v3.5M2.5 9H6M2.5 15H6M18 9h3.5M18 15h3.5"/></svg>`,OT=`<svg ${et}><path d="M15 12h-5M15 8h-5M19 17V5a2 2 0 0 0-2-2H4"/><path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"/></svg>`,FT=`<svg ${et}><rect x="3" y="4.5" width="18" height="15" rx="2"/><path d="m7 9.5 3 3-3 3M12.5 15.5H17"/></svg>`,BT=`<svg ${et}><path d="M5 20V10M12 20V4M19 20v-7"/></svg>`,$T=`<svg ${et}><path d="M12 4v11M7.5 11.5 12 16l4.5-4.5"/><path d="M4 20h16"/></svg>`,HT=`<svg ${et}><path d="M10 2v2M14 2v2M6 2v2"/><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"/></svg>`,GT=`<svg ${et}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>`,VT=`<svg ${et}><path d="M10 4.5 11.5 9l4.5 1.5L11.5 12 10 16.5 8.5 12 4 10.5 8.5 9z"/><path d="m18 15.5.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z"/></svg>`,qT=`<svg ${et}><path d="M13.5 3H6.5A1.5 1.5 0 0 0 5 4.5v15A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5V8.5z"/><path d="M13.5 3v5.5H19"/></svg>`,WT=`<svg ${et}><circle cx="12" cy="12" r="9"/><path d="M12 16v-4.5"/><circle cx="12" cy="8" r="1"/></svg>`,KT=`<svg ${et}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.2 2"/></svg>`,XT=`<svg ${et}><rect x="6.5" y="6.5" width="11" height="11" rx="1.5"/></svg>`,YT=`<svg ${et}><path d="M8.5 3 5 4.8 3 10l3.2 1.4.8-1.7V21h10V9.7l.8 1.7L21 10l-2-5.2L15.5 3a3.5 3.5 0 0 1-7 0z"/></svg>`,ZT=`<svg ${et}><path d="m14.5 4.5 5 5L9 20H4v-5z"/><path d="m12.5 6.5 5 5"/></svg>`,JT=`<svg ${et}><path d="M4.5 11.5 11 5l7 7-6.5 6.5z"/><path d="M7 9 5 7"/><path d="M19 14.5s2 2.2 2 3.5a2 2 0 1 1-4 0c0-1.3 2-3.5 2-3.5z"/></svg>`,jT=`<svg ${et}><path d="m14 6 4 4"/><path d="M11.5 8.5 4 16v4h4l7.5-7.5"/><path d="m17 3 4 4-2.5 2.5-4-4z"/></svg>`,QT=`<svg ${et}><path d="M9 14 4 9l5-5"/><path d="M4 9h9a6 6 0 0 1 0 12h-3"/></svg>`,eA=`<svg ${et}><path d="m15 14 5-5-5-5"/><path d="M20 9h-9a6 6 0 0 0 0 12h3"/></svg>`,tA=`<svg ${et}><rect x="4.5" y="10.5" width="15" height="10" rx="2"/><path d="M8 10.5V7a4 4 0 0 1 8 0v3.5"/></svg>`,nA=`<svg ${et}><circle cx="6" cy="12" r="2.5"/><circle cx="17" cy="6" r="2.5"/><circle cx="17" cy="18" r="2.5"/><path d="M8.2 10.8 14.8 7.2M8.2 13.2l6.6 3.6"/></svg>`,vc={home:yT,grid:bT,compass:xT,news:ST,gear:kT,plus:MT,search:ET,play:wT,image:TT,folder:AT,trash:RT,eraser:LT,copy:CT,back:PT,check:DT,user:IT,puzzle:zT,box:UT,cpu:NT,args:OT,term:FT,chart:BT,dl:$T,mug:HT,globe:GT,sparkle:VT,file:qT,info:WT,clock:KT,stop:XT,shirt:YT,brush:ZT,bucket:JT,picker:jT,undo:QT,redo:eA,lock:tA,share:nA};function H(i,e=""){const t=vc[i]||vc.info;return e?`<span class="ic ${e}">${t}</span>`:`<span class="ic">${t}</span>`}const Sl='xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1"',kl=i=>`<g transform="translate(7 7) scale(0.66667)">${i}</g>`,js={min:`<svg ${Sl}>${kl('<path d="M0 5.125h10"/>')}</svg>`,max:`<svg ${Sl}>${kl('<rect x="0.5" y="0.5" width="9" height="9"/>')}</svg>`,restore:`<svg ${Sl}>${kl('<rect x="0.5" y="2.5" width="7" height="7"/><path d="M2.5 2.5V0.5h7v7h-2"/>')}</svg>`,close:`<svg ${Sl}>${kl('<path d="m0.43 0.43 9.14 9.14M9.57 0.43 0.43 9.57"/>')}</svg>`,bell:'<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2.5a5 5 0 0 0-5 5v3.2L4 13.2h12l-1-2.5V7.5a5 5 0 0 0-5-5Z"/><path d="M7.6 15.4a2.6 2.6 0 0 0 1.4 1.4 2.6 2.6 0 0 0 3.2-1.4"/></svg>'},Ms=window.__TAURI__,iA=Ms.core,aA=Ms.event,te=(i,e={})=>iA.invoke(i,e),ht=i=>window.__TAURI_INTERNALS__.convertFileSrc(i),yn=(i,e)=>aA.listen(i,e);window.__iconFallback=(i,e,t)=>{const n=document.createElement("span");n.className=e,n.innerHTML=vc[t]||vc.info,i.replaceWith(n)};const Wi=i=>te("plugin:opener|open_url",{url:i}),m0=i=>te("plugin:opener|open_path",{path:i}),ie={config:null,accounts:[],instances:[],featured_versions:[],curseforge:!1,sys:null};async function nn(i=!1){const e=await te("cmd_get_state");ie.config=e.config,ie.accounts=e.accounts,ie.instances=e.instances,ie.featured_versions=e.featured_versions,ie.curseforge=e.curseforge,ie.sys=e.sys,Si(),await Ha(!0),Vo(),i&&qe(th)}const Em=Vo;function Si(){if(!ie.config)return;const i=ie.config.theme,e=document.documentElement,n=i==="custom"?"pano":({dark:"standart",neon:"pano",light:"pano",orange:"sahne",anons:"pano"}[i]??i)||"sahne",a=(ie.config.tema_ozel||{})[n]||{},s=n==="sahne"?ie.config.custom_accent:"",r=String(a.accent||s||"").trim();e.setAttribute("data-world",n),r&&/^#[0-9a-fA-F]{3,8}$/.test(r)?(e.setAttribute("data-world-custom","1"),e.style.setProperty("--custom-accent",r)):(e.removeAttribute("data-world-custom"),e.style.removeProperty("--custom-accent"));const o=String(a.radius||"");o==="keskin"||o==="yumusak"||o==="hap"?e.setAttribute("data-radius",o):e.removeAttribute("data-radius"),fT(),_T()}const sA=Si;function bn(){return ie.accounts.find(i=>i.id===ie.config?.last_selected_account)||ie.accounts[0]||null}function $o(i){return`https://mc-heads.net/avatar/${encodeURIComponent(i.name)}/64`}function g0(i){const e=encodeURIComponent(i.name);return i.kind==="microsoft"?`https://visage.surgeplay.com/head/64/${e}`:`https://crafatar.com/avatars/${i.uuid}?overlay&size=64`}function Ho(i){const e=g0(i),t=i.kind==="microsoft"?`https://crafatar.com/avatars/${i.uuid}?overlay&size=64`:"";return`onerror="if(!this.dataset.fb){this.dataset.fb=1;this.src='${e}'}${t?`else if(this.dataset.fb==1){this.dataset.fb=2;this.src='${t}'}`:""}else{this.style.visibility='hidden'}"`}function rA(){const i=document.getElementById("pill-ram");if(!i||!ie.sys)return;const t=ie.instances[0]?.ram_mb||ie.config?.default_ram_mb||4096,n=ie.sys.total_ram_mb||16384,a=Math.min(100,Math.round(t/n*100)),s=i.querySelector("#ram-pill-val"),r=`${(t/1024).toFixed(1)} GB`;s?Q_(s,r):i.innerHTML=`RAM <b id="ram-pill-val">${r}</b>&nbsp;/ ${(n/1024).toFixed(0)} GB
    <span class="ram-bar"><span style="transform:scaleX(${a/100})"></span></span>`;const o=i.querySelector(".ram-bar > span");o&&(o.style.transform=`scaleX(${a/100})`)}const xi=i=>document.querySelector(i);function gi(i){const e=document.createElement("template");return e.innerHTML=i.trim(),e.content.firstElementChild}function Go(i){if(!i)return"0 B";const e=["B","KB","MB","GB"],t=Math.min(Math.floor(Math.log(i)/Math.log(1024)),3);return`${(i/1024**t).toFixed(t?1:0)} ${e[t]}`}function pr(i){const e=Math.floor(i/6e4);if(e<60)return`${e} dk`;const t=Math.floor(e/60),n=e%60;return t<24?n?`${t} sa ${n} dk`:`${t} sa`:`${Math.floor(t/24)} gün ${t%24} sa`}function oA(i){return i>0?`${(i/1048576).toFixed(1)} MB/s`:""}function uo(i="ok",e=""){return`<span class="lamp ${i} ${e}" aria-hidden="true"></span>`}const Ke={activeId:null};function K(i,e="ok"){const t=gi(`<div class="toast ${e}" role="status">${i}</div>`);document.body.appendChild(t),setTimeout(()=>t.classList.add("show"),10),setTimeout(()=>{t.classList.remove("show"),setTimeout(()=>t.remove(),300)},3200)}const Gr=[];function Jt(i){const e=gi(`<div class="modal-backdrop"><div class="modal" role="dialog" aria-modal="true">${i}</div></div>`);document.body.appendChild(e),Gr.push(e);let t=!1;const n=()=>{if(t)return;t=!0,window.removeEventListener("keydown",a);const s=Gr.indexOf(e);s>=0&&Gr.splice(s,1),e.remove()},a=s=>{s.key==="Escape"&&Gr[Gr.length-1]===e&&(s.preventDefault(),s.stopPropagation(),n())};return window.addEventListener("keydown",a),e.addEventListener("click",s=>{s.target===e&&n()}),requestAnimationFrame(()=>{e.querySelector("input, button, select, textarea, [tabindex]")?.focus()}),{root:e.firstElementChild,close:n}}const na={},Gn={};let wm="home",th="home";function qe(i,e){const t=xi("#content");t&&(th=i,wm=i,Gn.param=e,document.querySelectorAll(".rail-item").forEach(n=>{n.classList.toggle("active",n.dataset.page===wm)}),ey(t,()=>{t.innerHTML="";const n=na[i];n&&n(t),Ag(t)}))}const lA={home:"Oyna",kozmetik:"Kozmetik",explore:"Modlar",news:"Haberler",settings:"Ayarlar"},cA=[{page:"home",icon:"home",label:"Ana Sayfa"},{page:"instances",icon:"grid",label:"Mod Paketleri"},{page:"explore",icon:"compass",label:"Keşfet"},{page:"news",icon:"news",label:"Haberler"},{page:"skins",icon:"shirt",label:"Skin Merkezi"},{page:"kozmetik",icon:"sparkle",label:"Kozmetikler"},{page:"settings",icon:"gear",label:"Ayarlar"}];function v0(){const i=xi("#app");if(!i)return;i.innerHTML=`
    <div class="titlebar">
      <div class="brand">
        <img class="logo-img" src="/logo.png" draggable="false" />
        <span><span class="brand-word">YIKIM</span><span class="brand-suffix">Lient</span></span>
      </div>
      <div class="tb-center"></div>
      <div class="tb-actions">
        <button class="tb-btn tb-pack" id="tb-pack" title="Kurulum durumu (mod paketi)" aria-label="Kurulum durumu">${js.bell}<span class="tb-pack-dot" id="tb-pack-dot"></span></button>
        <button class="tb-btn" id="tb-min" title="Küçült" aria-label="Küçült">${js.min}</button>
        <button class="tb-btn" id="tb-max" title="Ekranı Kapla" aria-label="Ekranı Kapla">${js.max}</button>
        <button class="tb-btn close" id="tb-close" title="Kapat" aria-label="Kapat">${js.close}</button>
      </div>
    </div>
    <div class="body-row">
      <nav class="rail">
        <div class="rail-logo"><img src="/logo.png" draggable="false" /></div>
        ${cA.map(a=>`
          <button class="rail-item" data-page="${a.page}" data-md="${lA[a.page]||a.label}">
            ${H(a.icon,"ri-icon")}
            <span class="ri-label">${a.label}</span>
          </button>`).join("")}
        <div class="rail-flex"></div>
        <button class="rail-account" id="rail-account" title="Hesap"></button>
      </nav>
      <main id="content" class="content"></main>
    </div>
  `;const t=Ms.window.getCurrentWindow();xi("#tb-min")?.addEventListener("click",()=>t.minimize()),xi("#tb-max")?.addEventListener("click",()=>t.toggleMaximize());const n=()=>{if(Ke.activeId){t.minimize(),K("Launcher küçültüldü — oyun kapanınca hazır; görev çubuğundan geri açabilirsin");return}t.close()};xi("#tb-close")?.addEventListener("click",n),xi("#tb-pack")?.addEventListener("click",()=>{$f()});try{t.onCloseRequested(a=>{Ke.activeId&&(a?.preventDefault?.(),t.minimize(),K("Launcher küçültüldü — oyun kapanınca hazır; görev çubuğundan geri açabilirsin"))})}catch{}try{const a=xi("#tb-max"),s=o=>{a&&(a.innerHTML=o?js.restore:js.max,a.title=o?"Geri Yükle":"Ekranı Kapla",a.setAttribute("aria-label",a.title))},r=()=>{t.isMaximized().then(s).catch(()=>{})};typeof t.onResized=="function"?t.onResized(r):Ms.event?.listen&&Ms.event.listen("tauri://resize",r),r()}catch{}document.querySelectorAll(".rail-item").forEach(a=>{a.addEventListener("click",()=>qe(a.dataset.page))}),Vo(),xi("#rail-account")?.addEventListener("click",()=>{ie.accounts.length?qe("settings"):dn()}),kf(Array.from(document.querySelectorAll(".rail-item")))}function Vo(){const i=xi("#rail-account");if(!i)return;const e=bn();if(!e){i.innerHTML=`<span class="ra-head ph">${H("user")}</span><span class="ra-name">Giriş yap</span>`;return}i.innerHTML=`
    <img class="ra-head" src="${$o(e)}" draggable="false" ${Ho(e)} />
    <span class="ra-name">${mr(e.id)}${e.name}</span>
    <span class="pa-dot on"></span>`}let Ml=null;function dn(i){if(Ml){Ml.root.querySelector("#off-name")?.focus();return}const e=Jt(`
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
      <button class="btn primary lg" id="ms-go">${H("globe")} Microsoft ile Giriş</button>
      <div id="ms-status" style="font-size:12.5px; color:var(--text-dim); display:none; text-align:center;"></div>
      <div style="font-size:11px; color:var(--text-faint); text-align:center">Resmî Microsoft oturum penceresi açılır; şifren launcher'a iletilmez.</div>
    </div>
  `),t=e.root;let n=!0;const a=()=>{n&&(n=!1,Ml=null,e.close())};Ml={root:t,close:a},t.querySelector("#off-go")?.addEventListener("click",async()=>{const s=t.querySelector("#off-name").value.trim();if(s.length<3)return K("İsim en az 3 karakter olmalı","err");try{await te("cmd_add_offline_account",{name:s}),await nn(!0),Em(),K(`Hoş geldin, ${s}!`),a(),i?.()}catch(r){K(String(r),"err")}}),t.querySelector("#ms-go")?.addEventListener("click",async()=>{const s=t.querySelector("#ms-status"),r=t.querySelector("#ms-go");r.disabled=!0,s.style.display="block",s.innerHTML='<span class="spinner"></span> Microsoft oturum penceresi açılıyor…';try{const o=await te("cmd_ms_login_begin");await nn(!0),Em(),K(`Hoş geldin, ${o.name}!`),a(),i?.()}catch(o){s.textContent=String(o),r.disabled=!1}})}let El=0;async function dA(i,e){if(!ie.accounts.length){dn();return}if(Ke.activeId){K("Oyun zaten açık — önce mevcut oyunu kapat","err");return}const t=++El;Ke.activeId=i;const{root:n,close:a}=Jt(`
    <h2>Oyun Başlatılıyor</h2>
    <div class="sub" id="lp-stage">Hazırlanıyor…</div>
    <div class="progressbar"><div id="lp-bar" style="transform:scaleX(0.02)"></div></div>
    <div class="progressbar-label" id="lp-detail" style="margin-top:10px"></div>
    <div id="lp-logs" style="margin-top:14px; max-height:180px; overflow-y:auto; font-family:var(--font-mono); font-size:11px; color:var(--text-faint); display:none; user-select:text;"></div>
  `),s=n.querySelector("#lp-bar"),r=n.querySelector("#lp-stage"),o=n.querySelector("#lp-detail"),l=n.querySelector("#lp-logs"),c=await yn("launch-progress",v=>{if(t!==El)return;const m=v.payload;s.style.transform=`scaleX(${Math.min(1,Math.max(0,m.percent/100))})`,r.textContent=uA(m.stage),o.textContent=m.detail||""}),d=await yn("game-log",v=>{if(t!==El)return;l.style.display="block";const m=document.createElement("div");m.textContent=v.payload,l.appendChild(m),l.scrollTop=l.scrollHeight,l.children.length>200&&l.firstElementChild?.remove()}),f=await yn("game-exit",v=>{if(t!==El)return;Ke.activeId=null;const m=v.payload?.exit_code??v.payload?.code??-1;m===0?(r.textContent="Oyun kapatıldı",setTimeout(a,1200)):(r.textContent=`Oyun hata ile kapandı (kod ${m})`,o.textContent="Canlı logdan detayları görebilirsin.")}),u=()=>{c(),d(),f()},h=new MutationObserver(()=>{document.body.contains(n)||(u(),h.disconnect())});h.observe(document.body,{childList:!0});try{await te("cmd_launch_instance",{instanceId:i,server:e??null}),r.textContent="Oyun çalışıyor",o.textContent="İyi oyunlar!",s.style.transform="scaleX(1)",setTimeout(()=>{u(),a()},1500),await nn(!0)}catch(v){Ke.activeId=null,r.textContent="Başlatılamadı",o.textContent=String(v),o.style.color="var(--danger)"}}function uA(i){return{manifest:"Sürüm bilgisi",download:"Dosyalar indiriliyor",java:"Java hazırlanıyor",mods:"Modlar hazırlanıyor",modpack:"Mod paketi kuruluyor",starting:"Başlatılıyor"}[i]||i}yn("curtain-status",i=>{i.payload?.phase==="started"&&(window.__yikimRestart=!0),i.payload?.phase==="closed"&&(window.__yikimRestart=!1)});yn("game-started",i=>{Ke.activeId=i.payload,nn(!0)});yn("game-exit",async()=>{window.__yikimRestart||(Ke.activeId=null,nn(!0))});yn("mod-install-progress",i=>{const e=i.payload;e.phase==="done"&&K(`Kuruldu: ${e.filename}`),e.phase==="error"&&K(`Hata: ${e.filename}`,"err")});let Hn=null,Tm;yn("standard-mods-progress",i=>{const e=i.payload;if(!e.total)return;(!Hn||!document.body.contains(Hn))&&(Hn=document.createElement("div"),Hn.className="sm-panel",Hn.innerHTML=`
      <div class="sm-head">
        <span class="sm-title">Standart modlar kuruluyor</span>
        <span class="sm-count tnum" id="sm-count"></span>
      </div>
      <div class="progressbar sm-bar"><div id="sm-fill"></div></div>
      <div class="sm-list" id="sm-list"></div>
    `,document.body.appendChild(Hn)),clearTimeout(Tm);const t=Hn.querySelector("#sm-count"),n=Hn.querySelector("#sm-fill"),a=Hn.querySelector("#sm-list");if(t.textContent=`${e.done}/${e.total}`,n.style.transform=`scaleX(${Math.min(1,e.done/e.total)})`,e.current){const s=document.createElement("div");for(s.className="sm-row done",s.textContent=`✓ ${e.current}`,a.appendChild(s);a.children.length>8;)a.firstElementChild?.remove();a.scrollTop=a.scrollHeight}e.done>=e.total&&(Hn.querySelector(".sm-title").textContent="Standart modlar hazır",Tm=setTimeout(()=>{Hn?.remove(),Hn=null},4e3))});yn("mod-install-progress",i=>{i.payload.phase});yn("yikim:yetki",()=>{Ha(!0).finally(()=>{Vo(),window.dispatchEvent(new CustomEvent("yikim:yetki"))})});function fA(){try{if(window.__MOCK_AYAR__||localStorage.getItem("yikim-modern-secim")||!ie.instances.length||ie.config?.onboarding_done===!1)return}catch{return}localStorage.setItem("yikim-modern-secim","1");const{root:i,close:e}=Jt(`
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
  `),t=async n=>{e(),n?ie.config.theme="modern":ie.config?.theme==="modern"&&(ie.config.theme="sahne");try{await te("cmd_save_settings",{config:ie.config}),await nn()}catch{}Si(),qe("home"),K(n?"Modern görünüm açık — Ayarlar'dan geri dönebilirsin":"Klasik görünümde kaldın")};i.querySelector("#md-evet")?.addEventListener("click",()=>void t(!0)),i.querySelector("#md-hayir")?.addEventListener("click",()=>void t(!1))}async function _0(){try{await nn(),Qw(),v0(),qe("home"),fA(),R0(),iT(),rT()||sT(),vA(),Tr(),wv(),pA(),mA()}catch(i){yA(i)}}const hA=nn;async function pA(){const{packKartBaslat:i,packKartHata:e,packKartTamam:t}=await it(async()=>{const{packKartBaslat:n,packKartHata:a,packKartTamam:s}=await Promise.resolve().then(()=>Dv);return{packKartBaslat:n,packKartHata:a,packKartTamam:s}},void 0);await yn("yikimpack-ac",async n=>{const a=n?.payload;if(!a)return;const s=`dosya:${a}`;i("Paket açıldı — kurulum başlıyor",s),qe("instances");try{const r=await te("cmd_import_pack_file",{path:a,name:null});await hA(),t(s),K(`${r.name||"Paket"} kuruldu ✓`,"ok"),(await it(async()=>{const{paketSonrasiRamUyarisi:o}=await Promise.resolve().then(()=>rE);return{paketSonrasiRamUyarisi:o}},void 0)).paketSonrasiRamUyarisi(r)}catch(r){const o=String(r);if(o.includes("paket_zaten_kuruluyor")){K("Bu paket şu anda zaten kuruluyor","err");return}e(o,s)}})}async function mA(){const{packKartBitti:i}=await it(async()=>{const{packKartBitti:e}=await Promise.resolve().then(()=>Dv);return{packKartBitti:e}},void 0);await yn("pack-hazir",async e=>{const t=e?.payload?.instance_id,n=e?.payload?.ad||"paket";gA(),Ja("kurulum",`${n} hazır`,"Kurulum tamamlandı — log sayfası açıldı"),i(t),t&&qe("instances",`${t}|log`),K(`${n} kuruldu — log sayfası açıldı`,"ok")})}function gA(){try{const i=window.AudioContext||window.webkitAudioContext;if(!i)return;const e=new i,t=(a,s)=>{const r=e.createOscillator(),o=e.createGain();r.type="sine",r.frequency.value=s,o.gain.setValueAtTime(1e-4,a),o.gain.exponentialRampToValueAtTime(.14,a+.02),o.gain.exponentialRampToValueAtTime(1e-4,a+.32),r.connect(o).connect(e.destination),r.start(a),r.stop(a+.34)},n=e.currentTime;t(n,660),t(n+.16,990),setTimeout(()=>e.close(),900)}catch{}}async function vA(){try{const e=await(await it(()=>import("./index-DSkUPpwd.js"),[])).check();if(!e?.available)return;let t={};try{t=await te("cmd_guncelleme_bilgi")}catch{}if(t.os==="linux"&&(t.bundle==="deb"||t.bundle==="rpm")){_A();return}const a=String(e?.version??"");K(`Yeni sürüm bulundu${a?` (v${a})`:""} — arka planda indiriliyor…`);let s=0;await e.download(r=>{r.event==="Started"?s=0:r.event==="Progress"&&(s=Math.min(99,s+1)),s%25===0&&K(`Güncelleme indiriliyor… %${s}`)}),K("Güncelleme kuruluyor — launcher yeniden başlıyor…"),await e.install(),setTimeout(()=>{try{Ms.process.exit(0)}catch{window.location.reload()}},900)}catch{}}async function _A(){try{const e=await(await it(()=>import("./index-DSkUPpwd.js"),[])).check();if(!e?.available)return;const t=e?.rawJson??{},n=String(t?.minimum??"").trim(),a=(v,m)=>{const p=T=>T.replace(/^v/i,"").split(".").map(b=>parseInt(b,10)||0),g=p(v),y=p(m);for(let T=0;T<Math.max(g.length,y.length);T++){const b=(g[T]??0)-(y[T]??0);if(b!==0)return b}return 0},s=String(e?.currentVersion??""),r=!!n&&a(s,n)<0;let o={};try{o=await te("cmd_guncelleme_bilgi")}catch{}const l=o.os==="linux"&&(o.bundle==="deb"||o.bundle==="rpm"),c=r&&!l;if(l){const v=o.bundle==="rpm",m=v?"linux-x86_64-rpm":"linux-x86_64-deb",p=t?.platforms?.[m]??t?.platforms?.["linux-x86_64-deb"]??t?.platforms?.["linux-x86_64"],g=String(p?.url||`https://github.com/YKSAMI1/yikimlient/releases/tag/v${e.version}`),{root:y,close:T}=Jt(`
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
      `);y.querySelector("#upd-later")?.addEventListener("click",()=>T()),y.querySelector("#upd-indir")?.addEventListener("click",async()=>{try{await Wi(g),T()}catch(b){K(`Bağlantı açılamadı: ${b}`,"err")}});return}const d=c?"Zorunlu Güncelleme":"Güncelleme Var",f=c?`Eski sürümdesin (v${s}). Bu güncelleme zorunlu — launcher'ı kullanmaya devam etmek için v${e.version} olmalısın.`:`YIKIMLient <b>v${e.version}</b> hazır. Değişiklik notları:`,{root:u,close:h}=Jt(`
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
    `);c&&u.addEventListener("click",v=>v.stopPropagation()),u.querySelector("#upd-later")?.addEventListener("click",()=>h()),u.querySelector("#upd-go")?.addEventListener("click",async()=>{const v=u.querySelector("#upd-go");v.disabled=!0,v.textContent="İndiriliyor…";try{let m=0,p=0;await e.download(g=>{switch(g.event){case"Started":p=g.data.contentLength??0;break;case"Progress":m+=g.data.chunkLength;break;case"Finished":v.textContent="Kuruluyor…";break}p>0&&(v.textContent=`İndiriliyor… %${Math.round(m/p*100)}`)}),await e.install(),K("Güncelleme kuruldu — launcher yeniden başlıyor"),setTimeout(()=>{try{Ms.process.exit(0)}catch{window.location.reload()}},900)}catch(m){v.disabled=!1,v.textContent="İndir ve Kur",K(`Güncelleme başarısız: ${m}`,"err")}})}catch{}}function yA(i){const e=document.getElementById("app"),t=i instanceof Error?i.stack||i.message:String(i);console.error("boot hatası:",i),e&&(e.innerHTML=`
      <div style="height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:12px; padding:40px; text-align:center">
        <div style="font-size:13px; color:var(--text-dim)">Açılışta bir şeyler ters gitti:</div>
        <pre style="user-select:text; font-family:var(--font-mono); font-size:11.5px; color:var(--danger); white-space:pre-wrap; word-break:break-word; max-width:640px; background:var(--bg2); border:1px solid var(--hairline-strong); border-radius:10px; padding:14px 18px; margin:0">${t}</pre>
      </div>`)}function bA(){if(!window.__TAURI__)return;const i=async()=>{try{const e=await fetch(`surum.txt?t=${Date.now()}`,{cache:"no-store"});return e.ok&&(await e.text()).trim()||null}catch{return null}};(async()=>{const e=await i();if(!e)return;const t=async()=>{if(document.querySelector(".modal-backdrop"))return;const n=await i();n&&n!==e&&window.location.reload()};for(const n of[4e3,12e3,3e4,6e4])setTimeout(()=>void t(),n)})()}_0();bA();const vt=Object.freeze(Object.defineProperty({__proto__:null,$:xi,applyTheme:sA,applyWorld:Si,boot:_0,currentAccount:bn,get currentPage(){return th},el:gi,enterStage:Ag,fileSrc:ht,fmtBytes:Go,fmtDuration:pr,fmtSpeed:oA,headAttrs:Ho,headFallbackUrl:g0,headUrl:$o,icon:H,invoke:te,lamp:uo,launch:Ke,launchInstance:dA,listen:yn,nav:Gn,navigate:qe,openExternal:Wi,openLoginModal:dn,openModal:Jt,openPath:m0,pages:na,refreshState:nn,renderAccountPill:Vo,setupShell:v0,state:ie,switchPress:xc,toast:K,updateRamPill:rA},Symbol.toStringTag,{value:"Module"}));
