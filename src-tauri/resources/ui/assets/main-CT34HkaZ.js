import"./theme-QTap-Mp3.js";const u0="modulepreload",f0=function(i){return"/"+i},th={},pt=function(e,t,n){let a=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),o=r?.nonce||r?.getAttribute("nonce");a=Promise.allSettled(t.map(c=>{if(c=f0(c),c in th)return;th[c]=!0;const l=c.endsWith(".css"),d=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const f=document.createElement("link");if(f.rel=l?"stylesheet":u0,l||(f.as="script"),f.crossOrigin="",f.href=c,o&&f.setAttribute("nonce",o),document.head.appendChild(f),l)return new Promise((u,h)=>{f.addEventListener("load",u),f.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(r){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r}return a.then(r=>{for(const o of r||[])o.status==="rejected"&&s(o.reason);return e().catch(s)})},h0="https://discord.gg/3zTCpMzeNq";let Fa={},Ud=0,Jr=null;function cs(){Jr!==null&&(clearInterval(Jr),Jr=null)}async function sr(i=!1){if(!(!i&&Date.now()-Ud<15e3))try{const e=await ie("cmd_guvenlik_ozet");Fa={};for(const t of e.hesaplar||[])Fa[t.id]=t;Ud=Date.now()}catch{}}function _m(i){return Fa[i]?.dogrulandi??!1}function ym(i){return Fa[i]?.rol_yol??!1}function p0(i){return Fa[i]?.kozmetik_serbest??!1}async function m0(){let i=null;try{i=await ie("cmd_guvenlik_durum")}catch{return null}const e=i?.hesap?.anahtar??"",t=le.accounts?.find(s=>g0(s)===e)?.id,n=t?{cizimSerbest:!!i?.cizim_serbest,dogrulandi:!!i?.dogrulandi,rolYol:!!i?.yetki?.rol_yol}:null;if(!t)return n;const a=Fa[t];return Fa[t]={id:t,anahtar:e,ad:String(i?.hesap?.ad??a?.ad??""),dogrulandi:!!i?.dogrulandi,rol_yol:!!i?.yetki?.rol_yol,carpi:!!i?.carpi,kozmetik_serbest:!!i?.kozmetik_serbest,cizim_serbest:!!i?.cizim_serbest},Ud=Date.now(),n}function g0(i){const e=i.kind==="microsoft"?"ms":"offline",t=i.uuid||"";return t?`${e}:${t}`:`${e}:${(i.name||i.id).toLowerCase()}`}function cc(i){const e=Fa[i];return!e||e.dogrulandi?"":'<span class="gv-carpi" title="Hesap doğrulanmadı — kozmetik değiştirmek için Ayarlar → Güvenlik">✕</span>'}async function Nd(i){const e=new TextEncoder,t=await crypto.subtle.importKey("raw",e.encode(i),"PBKDF2",!1,["deriveBits"]),n=await crypto.subtle.deriveBits({name:"PBKDF2",salt:e.encode("yikimlient-parola-v1"),iterations:21e4,hash:"SHA-256"},t,256);return Array.from(new Uint8Array(n)).map(a=>a.toString(16).padStart(2,"0")).join("")}function nh(i){return i.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function Cs(i,e,t){return`<div class="gv-durum ${i}">
    <span class="gv-nokta"></span>
    <div><b>${nh(e)}</b><small>${nh(t)}</small></div>
  </div>`}const jr=(i,e)=>`
  <label class="gv-etiket" for="${i}">${e}</label>
  <input class="input gv-girdi" id="${i}" type="password" autocomplete="new-password" minlength="8" placeholder="en az 8 karakter" />`;async function ds(i){cs(),i.innerHTML=`<div class="card set-card gv-kart"><h3>🛡️ Hesap Doğrulama</h3>
    <p class="set-sub">Durum okunuyor…</p></div>`,await sr(!0);let e=null;try{e=await ie("cmd_guvenlik_durum")}catch{e=null}if(!e){i.innerHTML=`<div class="card set-card gv-kart">
      <h3>🛡️ Hesap Doğrulama</h3>
      ${Cs("hata","Güvenlik servisi bu sürümde yok","Launcher'ı güncelle. Oyun ve mevcut kozmetikler çalışmaya devam eder.")}
    </div>`;return}const t=bn();e.yetki;const n=!!e.hesap,a=e.carpi?cc(t?.id||""):"";let s="";e.api_acik?n?e.baglandi&&e.dogrulandi?s=Cs("ok",`Doğrulandı${e.discord_ad?` · ${e.discord_ad}`:""}`,e.yetki?.rol_yol?"Kendi pelerin/elitranı çizebilir, fotoğraf (HD) ve maske yükleyebilirsin (Yol Silindiri).":'Kozmetik ve skin değiştirme açık. Kendi tasarımını çizmek için Discord sunucusundaki YIKIM etiketi ("Yol Silindiri" rolü) gerekir — etiketi bırakırsan çizme izni kendiliğinden kapanır.'):e.baglandi?s=Cs("uyari","Discord bağlı — bu cihazda giriş yapmadın","Şifreni gir; kozmetiklerin ve çizme iznin bu cihaza açılsın."):s=Cs("uyari","Hesap doğrulanmadı","Oynayabilirsin; kozmetik değiştirmek için Discord'da doğrula."):s=Cs("uyari","Önce hesap ekle","Ayarlar → Hesaplar bölümünden bir hesap ekle."):s=Cs("hata","Sunucuya ulaşılamıyor","Bağlantı, şifre oluşturma ve sıfırlama şu an kapalı. Oyun ve mevcut kozmetikler çalışmaya devam eder.");let r="";e.api_acik&&n&&!e.baglandi&&(r+=`
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
          ${jr("gv-giris-sifre","Şifre")}
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
          ${jr("gv-p1","Yeni şifre")}
          ${jr("gv-p2","Yeni şifre (tekrar)")}
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
  </div>`;const o=()=>i.querySelector("#gv-kod"),c=()=>i.querySelector("#gv-kod-alt");i.querySelector("#gv-kod-al")?.addEventListener("click",async()=>{try{const f=await ie("cmd_guvenlik_baglama_kod");o()&&(o().textContent=f.kod||"?"),c()&&(c().textContent=`Discord'da bota yaz: /bagla ${f.kod||""} · ${Math.ceil((f.kalan_sn||600)/60)} dk`);const u=i.querySelector("#gv-kopyala");u&&(u.hidden=!f.kod,u.onclick=async()=>{const h=f.kod||"";if(h)try{await navigator.clipboard.writeText(h);const v=u.textContent;u.textContent="Kopyalandı ✓",setTimeout(()=>{u.textContent=v},1600)}catch{const v=window.getSelection(),m=document.createRange();m.selectNodeContents(i.querySelector("#gv-kod")),v?.removeAllRanges(),v?.addRange(m),Y("Pano kapalı — kodu elle seçip kopyala","err")}}),Jr||(Jr=setInterval(()=>{if(!i.isConnected||!document.body.contains(i)){cs();return}l(!0)},3e3))}catch(f){Y(`Kod alınamadı: ${String(f).replace(/^Error:\s*/,"")}`,"err")}});const l=async(f=!1)=>{try{if((await ie("cmd_guvenlik_baglama_durum")).baglandi)return cs(),Y("Discord bağlandı ✓"),await ds(i),!0;f||Y("Henüz bağlanmadı — Discord'da kodu yazdın mı?","err")}catch(u){f||Y(`Kontrol edilemedi: ${String(u).replace(/^Error:\s*/,"")}`,"err")}return!1};i.querySelector("#gv-kontrol")?.addEventListener("click",()=>void l(!1)),i.querySelector("#gv-discord")?.addEventListener("click",()=>xm());const d=async()=>{const f=i.querySelector("#gv-giris-sifre")?.value||"";if(f.length<8)return Y("Şifreni gir (en az 8 karakter)","err");const u=i.querySelector("#gv-giris");u&&(u.disabled=!0);try{const h=await Nd(f);(await ie("cmd_guvenlik_giris",{parolaHash:h}))?.dogrulandi&&(await sr(!0),Y("Giriş yapıldı ✓ kozmetikler açıldı"),await ds(i))}catch(h){const v=String(h).replace(/^Error:\s*/,"");if(v.includes("parola_yok")){const m=i.querySelector("#gv-olustur-blok");m&&(m.hidden=!1),Y("Bu hesabın şifresi yok — aşağıdan oluşturabilirsin.","err")}else Y(v.includes("baglanti_yok")?"Önce Discord'da /bagla ile bağla":`Giriş olmadı: ${v}`,"err");u&&(u.disabled=!1)}};i.querySelector("#gv-giris")?.addEventListener("click",()=>void d()),i.querySelector("#gv-giris-sifre")?.addEventListener("keydown",f=>{f.key==="Enter"&&d()}),i.querySelector("#gv-olustur-ac")?.addEventListener("click",()=>{const f=i.querySelector("#gv-olustur-blok");f&&(f.hidden=!1)}),i.querySelector("#gv-parola-kur")?.addEventListener("click",async()=>{const f=i.querySelector("#gv-p1")?.value||"",u=i.querySelector("#gv-p2")?.value||"";if(f.length<8)return Y("Şifre en az 8 karakter olmalı","err");if(f!==u)return Y("Şifreler eşleşmiyor","err");const h=i.querySelector("#gv-parola-kur");h&&(h.disabled=!0);try{const v=await Nd(f);await ie("cmd_guvenlik_parola_kur",{parolaHash:v}),await ie("cmd_guvenlik_giris",{parolaHash:v}),Y("Şifre oluşturuldu ✓ kozmetikler açıldı"),await sr(!0),await ds(i)}catch(v){const m=String(v).replace(/^Error:\s*/,"");if(m.includes("parola_var")){const p=i.querySelector("#gv-olustur-blok");p&&(p.hidden=!0),Y("Bu hesabın şifresi zaten var — yukarıdan giriş yap.","err")}else Y(`Olmadı: ${m}`,"err");h&&(h.disabled=!1)}}),i.querySelector("#gv-unuttum")?.addEventListener("click",()=>v0(i)),i.querySelector("#gv-yenile")?.addEventListener("click",()=>void ds(i))}function v0(i){const e=mn(`
    <h2>Şifremi unuttum</h2>
    <div class="sub">Sunucudaki <b>bot komut kanalında</b> <code>/sifirla</code> yaz; bot sana tek seferlik kod gönderir.</div>
    <div style="display:flex; flex-direction:column; gap:12px; margin-top:14px">
      <div>
        <label class="gv-etiket" for="gv-sif-kod">Kod</label>
        <input class="input gv-girdi" id="gv-sif-kod" placeholder="8 karakter" maxlength="12" style="text-transform:uppercase" />
      </div>
      ${jr("gv-sif-p1","Yeni şifre")}
      ${jr("gv-sif-p2","Yeni şifre (tekrar)")}
      <div class="gv-alt-satir">
        <button class="btn ghost" id="gv-sif-iptal">Vazgeç</button>
        <button class="btn primary" id="gv-sif-tamam">Şifreyi değiştir</button>
      </div>
      <p class="gv-mini">5 hatalı denemede bu cihazda hesap 24 saat kilitlenir.</p>
    </div>
  `);e.root.querySelector("#gv-sif-iptal")?.addEventListener("click",()=>e.close()),e.root.querySelector("#gv-sif-tamam")?.addEventListener("click",async()=>{const t=(e.root.querySelector("#gv-sif-kod")?.value||"").trim().toUpperCase(),n=e.root.querySelector("#gv-sif-p1")?.value||"",a=e.root.querySelector("#gv-sif-p2")?.value||"";if(!t)return Y("Kodu gir","err");if(n.length<8)return Y("Şifre en az 8 karakter olmalı","err");if(n!==a)return Y("Şifreler eşleşmiyor","err");try{const s=await Nd(n);await ie("cmd_guvenlik_sifirla",{kod:t,parolaHash:s}),await ie("cmd_guvenlik_giris",{parolaHash:s}),Y("Şifre değiştirildi ✓"),e.close(),await sr(!0),await ds(i)}catch(s){Y(`Olmadı: ${String(s).replace(/^Error:\s*/,"")}`,"err")}})}function xm(){Wa(h0).catch(()=>Y("Discord açılamadı","err"))}function Ji(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function bm(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var jn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},co={duration:.5,overwrite:!1,delay:0},Ju,nn,Tt,li=1e8,yt=1/li,Od=Math.PI*2,_0=Od/4,y0=0,Sm=Math.sqrt,x0=Math.cos,b0=Math.sin,en=function(e){return typeof e=="string"},Ut=function(e){return typeof e=="function"},sa=function(e){return typeof e=="number"},ju=function(e){return typeof e>"u"},Hi=function(e){return typeof e=="object"},An=function(e){return e!==!1},Qu=function(){return typeof window<"u"},$o=function(e){return Ut(e)||en(e)},km=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},pn=Array.isArray,S0=/random\([^)]+\)/g,k0=/,\s*/g,ih=/(?:-?\.?\d|\.)+/gi,Mm=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Qs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ic=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Em=/[+-]=-?[.\d]+/,M0=/[^,'"\[\]\s]+/gi,E0=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Lt,Li,Fd,ef,Qn={},Ul={},wm,Tm=function(e){return(Ul=mr(e,Qn))&&Nn},tf=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},uo=function(e,t){return!t&&console.warn(e)},Am=function(e,t){return e&&(Qn[e]=t)&&Ul&&(Ul[e]=t)||Qn},fo=function(){return 0},w0={suppressEvents:!0,isStart:!0,kill:!1},bl={suppressEvents:!0,kill:!1},T0={suppressEvents:!0},nf={},Ua=[],Bd={},Rm,$n={},zc={},ah=30,Sl=[],af="",sf=function(e){var t=e[0],n,a;if(Hi(t)||Ut(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(a=Sl.length;a--&&!Sl[a].targetTest(t););n=Sl[a]}for(a=e.length;a--;)e[a]&&(e[a]._gsap||(e[a]._gsap=new Jm(e[a],n)))||e.splice(a,1);return e},vs=function(e){return e._gsap||sf(ci(e))[0]._gsap},Lm=function(e,t,n){return(n=e[t])&&Ut(n)?e[t]():ju(n)&&e.getAttribute&&e.getAttribute(t)||n},Rn=function(e,t){return(e=e.split(",")).forEach(t)||e},Ot=function(e){return Math.round(e*1e5)/1e5||0},Rt=function(e){return Math.round(e*1e7)/1e7||0},rr=function(e,t){var n=t.charAt(0),a=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+a:n==="-"?e-a:n==="*"?e*a:e/a},A0=function(e,t){for(var n=t.length,a=0;e.indexOf(t[a])<0&&++a<n;);return a<n},Nl=function(){var e=Ua.length,t=Ua.slice(0),n,a;for(Bd={},Ua.length=0,n=0;n<e;n++)a=t[n],a&&a._lazy&&(a.render(a._lazy[0],a._lazy[1],!0)._lazy=0)},rf=function(e){return!!(e._initted||e._startAt||e.add)},Cm=function(e,t,n,a){Ua.length&&!nn&&Nl(),e.render(t,n,!!(nn&&t<0&&rf(e))),Ua.length&&!nn&&Nl()},Pm=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(M0).length<2?t:en(e)?e.trim():e},Dm=function(e){return e},ei=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},R0=function(e){return function(t,n){for(var a in n)a in t||a==="duration"&&e||a==="ease"||(t[a]=n[a])}},mr=function(e,t){for(var n in t)e[n]=t[n];return e},sh=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Hi(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},Ol=function(e,t){var n={},a;for(a in e)a in t||(n[a]=e[a]);return n},Qr=function(e){var t=e.parent||Lt,n=e.keyframes?R0(pn(e.keyframes)):ei;if(An(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},L0=function(e,t){for(var n=e.length,a=n===t.length;a&&n--&&e[n]===t[n];);return n<0},Im=function(e,t,n,a,s){var r=e[a],o;if(s)for(o=t[s];r&&r[s]>o;)r=r._prev;return r?(t._next=r._next,r._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[a]=t,t._prev=r,t.parent=t._dp=e,t},dc=function(e,t,n,a){n===void 0&&(n="_first"),a===void 0&&(a="_last");var s=t._prev,r=t._next;s?s._next=r:e[n]===t&&(e[n]=r),r?r._prev=s:e[a]===t&&(e[a]=s),t._next=t._prev=t.parent=null},Ba=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},_s=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},C0=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Hd=function(e,t,n,a){return e._startAt&&(nn?e._startAt.revert(bl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,a))},P0=function i(e){return!e||e._ts&&i(e.parent)},rh=function(e){return e._repeat?gr(e._tTime,e=e.duration()+e._rDelay)*e:0},gr=function(e,t){var n=Math.floor(e=Rt(e/t));return e&&n===e?n-1:n},Fl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},uc=function(e){return e._end=Rt(e._start+(e._tDur/Math.abs(e._ts||e._rts||yt)||0))},fc=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Rt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),uc(e),n._dirty||_s(n,e)),e},zm=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Fl(e.rawTime(),t),(!t._dur||Ro(0,t.totalDuration(),n)-t._tTime>yt)&&t.render(n,!0)),_s(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-yt}},Ii=function(e,t,n,a){return t.parent&&Ba(t),t._start=Rt((sa(n)?n:n||e!==Lt?si(e,n,t):e._time)+t._delay),t._end=Rt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Im(e,t,"_first","_last",e._sort?"_start":0),$d(t)||(e._recent=t),a||zm(e,t),e._ts<0&&fc(e,e._tTime),e},Um=function(e,t){return(Qn.ScrollTrigger||tf("scrollTrigger",t))&&Qn.ScrollTrigger.create(t,e)},Nm=function(e,t,n,a,s){if(lf(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!nn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Rm!==Wn.frame)return Ua.push(e),e._lazy=[s,a],1},D0=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},$d=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},I0=function(e,t,n,a){var s=e.ratio,r=t<0||!t&&(!e._start&&D0(e)&&!(!e._initted&&$d(e))||(e._ts<0||e._dp._ts<0)&&!$d(e))?0:1,o=e._rDelay,c=0,l,d,f;if(o&&e._repeat&&(c=Ro(0,e._tDur,t),d=gr(c,o),e._yoyo&&d&1&&(r=1-r),d!==gr(e._tTime,o)&&(s=1-r,e.vars.repeatRefresh&&e._initted&&e.invalidate())),r!==s||nn||a||e._zTime===yt||!t&&e._zTime){if(!e._initted&&Nm(e,t,a,n,c))return;for(f=e._zTime,e._zTime=t||(n?yt:0),n||(n=t&&!f),e.ratio=r,e._from&&(r=1-r),e._time=0,e._tTime=c,l=e._pt;l;)l.r(r,l.d),l=l._next;t<0&&Hd(e,t,n,!0),e._onUpdate&&!n&&Yn(e,"onUpdate"),c&&e._repeat&&!n&&e.parent&&Yn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===r&&(r&&Ba(e,1),!n&&!nn&&(Yn(e,r?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},z0=function(e,t,n){var a;if(n>t)for(a=e._first;a&&a._start<=n;){if(a.data==="isPause"&&a._start>t)return a;a=a._next}else for(a=e._last;a&&a._start>=n;){if(a.data==="isPause"&&a._start<t)return a;a=a._prev}},vr=function(e,t,n,a){var s=e._repeat,r=Rt(t)||0,o=e._tTime/e._tDur;return o&&!a&&(e._time*=r/e._dur),e._dur=r,e._tDur=s?s<0?1e10:Rt(r*(s+1)+e._rDelay*s):r,o>0&&!a&&fc(e,e._tTime=e._tDur*o),e.parent&&uc(e),n||_s(e.parent,e),e},oh=function(e){return e instanceof Tn?_s(e):vr(e,e._dur)},U0={_start:0,endTime:fo,totalDuration:fo},si=function i(e,t,n){var a=e.labels,s=e._recent||U0,r=e.duration()>=li?s.endTime(!1):e._dur,o,c,l;return en(t)&&(isNaN(t)||t in a)?(c=t.charAt(0),l=t.substr(-1)==="%",o=t.indexOf("="),c==="<"||c===">"?(o>=0&&(t=t.replace(/=/,"")),(c==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(l?(o<0?s:n).totalDuration()/100:1)):o<0?(t in a||(a[t]=r),a[t]):(c=parseFloat(t.charAt(o-1)+t.substr(o+1)),l&&n&&(c=c/100*(pn(n)?n[0]:n).totalDuration()),o>1?i(e,t.substr(0,o-1),n)+c:r+c)):t==null?r:+t},eo=function(e,t,n){var a=sa(t[1]),s=(a?2:1)+(e<2?0:1),r=t[s],o,c;if(a&&(r.duration=t[1]),r.parent=n,e){for(o=r,c=n;c&&!("immediateRender"in o);)o=c.vars.defaults||{},c=An(c.vars.inherit)&&c.parent;r.immediateRender=An(o.immediateRender),e<2?r.runBackwards=1:r.startAt=t[s-1]}return new Ht(t[0],r,t[s+1])},Xa=function(e,t){return e||e===0?t(e):t},Ro=function(e,t,n){return n<e?e:n>t?t:n},hn=function(e,t){return!en(e)||!(t=E0.exec(e))?"":t[1]},N0=function(e,t,n){return Xa(n,function(a){return Ro(e,t,a)})},Gd=[].slice,Om=function(e,t){return e&&Hi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Hi(e[0]))&&!e.nodeType&&e!==Li},O0=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(a){var s;return en(a)&&!t||Om(a,1)?(s=n).push.apply(s,ci(a)):n.push(a)})||n},ci=function(e,t,n){return Tt&&!t&&Tt.selector?Tt.selector(e):en(e)&&!n&&(Fd||!_r())?Gd.call((t||ef).querySelectorAll(e),0):pn(e)?O0(e,n):Om(e)?Gd.call(e,0):e?[e]:[]},Vd=function(e){return e=ci(e)[0]||uo("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return ci(t,n.querySelectorAll?n:n===e?uo("Invalid scope")||ef.createElement("div"):e)}},Fm=function(e){return e.sort(function(){return .5-Math.random()})},Bm=function(e){if(Ut(e))return e;var t=Hi(e)?e:{each:e},n=ys(t.ease),a=t.from||0,s=parseFloat(t.base)||0,r={},o=a>0&&a<1,c=isNaN(a)||o,l=t.axis,d=a,f=a;return en(a)?d=f={center:.5,edges:.5,end:1}[a]||0:!o&&c&&(d=a[0],f=a[1]),function(u,h,v){var m=(v||t).length,p=r[m],g,y,T,b,S,E,A,x,w;if(!p){if(w=t.grid==="auto"?0:(t.grid||[1,li])[1],!w){for(A=-li;A<(A=v[w++].getBoundingClientRect().left)&&w<m;);w<m&&w--}for(p=r[m]=[],g=c?Math.min(w,m)*d-.5:a%w,y=w===li?0:c?m*f/w-.5:a/w|0,A=0,x=li,E=0;E<m;E++)T=E%w-g,b=y-(E/w|0),p[E]=S=l?Math.abs(l==="y"?b:T):Sm(T*T+b*b),S>A&&(A=S),S<x&&(x=S);a==="random"&&Fm(p),p.max=A-x,p.min=x,p.v=m=(parseFloat(t.amount)||parseFloat(t.each)*(w>m?m-1:l?l==="y"?m/w:w:Math.max(w,m/w))||0)*(a==="edges"?-1:1),p.b=m<0?s-m:s,p.u=hn(t.amount||t.each)||0,n=n&&m<0?J0(n):n}return m=(p[u]-p.min)/p.max||0,Rt(p.b+(n?n(m):m)*p.v)+p.u}},qd=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var a=Rt(Math.round(parseFloat(n)/e)*e*t);return(a-a%1)/t+(sa(n)?0:hn(n))}},Hm=function(e,t){var n=pn(e),a,s;return!n&&Hi(e)&&(a=n=e.radius||li,e.values?(e=ci(e.values),(s=!sa(e[0]))&&(a*=a)):e=qd(e.increment)),Xa(t,n?Ut(e)?function(r){return s=e(r),Math.abs(s-r)<=a?s:r}:function(r){for(var o=parseFloat(s?r.x:r),c=parseFloat(s?r.y:0),l=li,d=0,f=e.length,u,h;f--;)s?(u=e[f].x-o,h=e[f].y-c,u=u*u+h*h):u=Math.abs(e[f]-o),u<l&&(l=u,d=f);return d=!a||l<=a?e[d]:r,s||d===r||sa(r)?d:d+hn(r)}:qd(e))},$m=function(e,t,n,a){return Xa(pn(e)?!t:n===!0?!!(n=0):!a,function(){return pn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(a=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*a)/a})},F0=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(a){return t.reduce(function(s,r){return r(s)},a)}},B0=function(e,t){return function(n){return e(parseFloat(n))+(t||hn(n))}},H0=function(e,t,n){return Vm(e,t,0,1,n)},Gm=function(e,t,n){return Xa(n,function(a){return e[~~t(a)]})},$0=function i(e,t,n){var a=t-e;return pn(e)?Gm(e,i(0,e.length),t):Xa(n,function(s){return(a+(s-e)%a)%a+e})},G0=function i(e,t,n){var a=t-e,s=a*2;return pn(e)?Gm(e,i(0,e.length-1),t):Xa(n,function(r){return r=(s+(r-e)%s)%s||0,e+(r>a?s-r:r)})},ho=function(e){return e.replace(S0,function(t){var n=t.indexOf("[")+1,a=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(k0);return $m(n?a:+a[0],n?0:+a[1],+a[2]||1e-5)})},Vm=function(e,t,n,a,s){var r=t-e,o=a-n;return Xa(s,function(c){return n+((c-e)/r*o||0)})},V0=function i(e,t,n,a){var s=isNaN(e+t)?0:function(h){return(1-h)*e+h*t};if(!s){var r=en(e),o={},c,l,d,f,u;if(n===!0&&(a=1)&&(n=null),r)e={p:e},t={p:t};else if(pn(e)&&!pn(t)){for(d=[],f=e.length,u=f-2,l=1;l<f;l++)d.push(i(e[l-1],e[l]));f--,s=function(v){v*=f;var m=Math.min(u,~~v);return d[m](v-m)},n=t}else a||(e=mr(pn(e)?[]:{},e));if(!d){for(c in t)of.call(o,e,c,"get",t[c]);s=function(v){return uf(v,o)||(r?e.p:e)}}}return Xa(n,s)},lh=function(e,t,n){var a=e.labels,s=li,r,o,c;for(r in a)o=a[r]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(c=r,s=o);return c},Yn=function(e,t,n){var a=e.vars,s=a[t],r=Tt,o=e._ctx,c,l,d;if(s)return c=a[t+"Params"],l=a.callbackScope||e,n&&Ua.length&&Nl(),o&&(Tt=o),d=c?s.apply(l,c):s.call(l),Tt=r,d},Hr=function(e){return Ba(e),e.scrollTrigger&&e.scrollTrigger.kill(!!nn),e.progress()<1&&Yn(e,"onInterrupt"),e},er,qm=[],Wm=function(e){if(e)if(e=!e.name&&e.default||e,Qu()||e.headless){var t=e.name,n=Ut(e),a=t&&!n&&e.init?function(){this._props=[]}:e,s={init:fo,render:uf,add:of,kill:o_,modifier:r_,rawVars:0},r={targetTest:0,get:0,getSetter:df,aliases:{},register:0};if(_r(),e!==a){if($n[t])return;ei(a,ei(Ol(e,s),r)),mr(a.prototype,mr(s,Ol(e,r))),$n[a.prop=t]=a,e.targetTest&&(Sl.push(a),nf[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Am(t,a),e.register&&e.register(Nn,a,Ln)}else qm.push(e)},_t=255,$r={aqua:[0,_t,_t],lime:[0,_t,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,_t],navy:[0,0,128],white:[_t,_t,_t],olive:[128,128,0],yellow:[_t,_t,0],orange:[_t,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[_t,0,0],pink:[_t,192,203],cyan:[0,_t,_t],transparent:[_t,_t,_t,0]},Uc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*_t+.5|0},Xm=function(e,t,n){var a=e?sa(e)?[e>>16,e>>8&_t,e&_t]:0:$r.black,s,r,o,c,l,d,f,u,h,v;if(!a){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),$r[e])a=$r[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),r=e.charAt(2),o=e.charAt(3),e="#"+s+s+r+r+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return a=parseInt(e.substr(1,6),16),[a>>16,a>>8&_t,a&_t,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),a=[e>>16,e>>8&_t,e&_t]}else if(e.substr(0,3)==="hsl"){if(a=v=e.match(ih),!t)c=+a[0]%360/360,l=+a[1]/100,d=+a[2]/100,r=d<=.5?d*(l+1):d+l-d*l,s=d*2-r,a.length>3&&(a[3]*=1),a[0]=Uc(c+1/3,s,r),a[1]=Uc(c,s,r),a[2]=Uc(c-1/3,s,r);else if(~e.indexOf("="))return a=e.match(Mm),n&&a.length<4&&(a[3]=1),a}else a=e.match(ih)||$r.transparent;a=a.map(Number)}return t&&!v&&(s=a[0]/_t,r=a[1]/_t,o=a[2]/_t,f=Math.max(s,r,o),u=Math.min(s,r,o),d=(f+u)/2,f===u?c=l=0:(h=f-u,l=d>.5?h/(2-f-u):h/(f+u),c=f===s?(r-o)/h+(r<o?6:0):f===r?(o-s)/h+2:(s-r)/h+4,c*=60),a[0]=~~(c+.5),a[1]=~~(l*100+.5),a[2]=~~(d*100+.5)),n&&a.length<4&&(a[3]=1),a},Km=function(e){var t=[],n=[],a=-1;return e.split(Na).forEach(function(s){var r=s.match(Qs)||[];t.push.apply(t,r),n.push(a+=r.length+1)}),t.c=n,t},ch=function(e,t,n){var a="",s=(e+a).match(Na),r=t?"hsla(":"rgba(",o=0,c,l,d,f;if(!s)return e;if(s=s.map(function(u){return(u=Xm(u,t,1))&&r+(t?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(d=Km(e),c=n.c,c.join(a)!==d.c.join(a)))for(l=e.replace(Na,"1").split(Qs),f=l.length-1;o<f;o++)a+=l[o]+(~c.indexOf(o)?s.shift()||r+"0,0,0,0)":(d.length?d:s.length?s:n).shift());if(!l)for(l=e.split(Na),f=l.length-1;o<f;o++)a+=l[o]+s[o];return a+l[f]},Na=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in $r)i+="|"+e+"\\b";return new RegExp(i+")","gi")}(),q0=/hsl[a]?\(/,Ym=function(e){var t=e.join(" "),n;if(Na.lastIndex=0,Na.test(t))return n=q0.test(t),e[1]=ch(e[1],n),e[0]=ch(e[0],n,Km(e[1])),!0},po,Wn=function(){var i=Date.now,e=500,t=33,n=i(),a=n,s=1e3/240,r=s,o=[],c,l,d,f,u,h,v=function m(p){var g=i()-a,y=p===!0,T,b,S,E;if((g>e||g<0)&&(n+=g-t),a+=g,S=a-n,T=S-r,(T>0||y)&&(E=++f.frame,u=S-f.time*1e3,f.time=S=S/1e3,r+=T+(T>=s?4:s-T),b=1),y||(c=l(m)),b)for(h=0;h<o.length;h++)o[h](S,u,E,p)};return f={time:0,frame:0,tick:function(){v(!0)},deltaRatio:function(p){return u/(1e3/(p||60))},wake:function(){wm&&(!Fd&&Qu()&&(Li=Fd=window,ef=Li.document||{},Qn.gsap=Nn,(Li.gsapVersions||(Li.gsapVersions=[])).push(Nn.version),Tm(Ul||Li.GreenSockGlobals||!Li.gsap&&Li||{}),qm.forEach(Wm)),d=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&f.sleep(),l=d||function(p){return setTimeout(p,r-f.time*1e3+1|0)},po=1,v(2))},sleep:function(){(d?cancelAnimationFrame:clearTimeout)(c),po=0,l=fo},lagSmoothing:function(p,g){e=p||1/0,t=Math.min(g||33,e)},fps:function(p){s=1e3/(p||240),r=f.time*1e3+s},add:function(p,g,y){var T=g?function(b,S,E,A){p(b,S,E,A),f.remove(T)}:p;return f.remove(p),o[y?"unshift":"push"](T),_r(),T},remove:function(p,g){~(g=o.indexOf(p))&&o.splice(g,1)&&h>=g&&h--},_listeners:o},f}(),_r=function(){return!po&&Wn.wake()},it={},W0=/^[\d.\-M][\d.\-,\s]/,X0=/["']/g,K0=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),a=n[0],s=1,r=n.length,o,c,l;s<r;s++)c=n[s],o=s!==r-1?c.lastIndexOf(","):c.length,l=c.substr(0,o),t[a]=isNaN(l)?l.replace(X0,"").trim():+l,a=c.substr(o+1).trim();return t},Y0=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),a=e.indexOf("(",t);return e.substring(t,~a&&a<n?e.indexOf(")",n+1):n)},Z0=function(e){var t=(e+"").split("("),n=it[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[K0(t[1])]:Y0(e).split(",").map(Pm)):it._CE&&W0.test(e)?it._CE("",e):n},J0=function(e){return function(t){return 1-e(1-t)}},ys=function(e,t){return e&&(Ut(e)?e:it[e]||Z0(e))||t},ws=function(e,t,n,a){n===void 0&&(n=function(c){return 1-t(1-c)}),a===void 0&&(a=function(c){return c<.5?t(c*2)/2:1-t((1-c)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:a},r;return Rn(e,function(o){it[o]=Qn[o]=s,it[r=o.toLowerCase()]=n;for(var c in s)it[r+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=it[o+"."+c]=s[c]}),s},Zm=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Nc=function i(e,t,n){var a=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),r=s/Od*(Math.asin(1/a)||0),o=function(d){return d===1?1:a*Math.pow(2,-10*d)*b0((d-r)*s)+1},c=e==="out"?o:e==="in"?function(l){return 1-o(1-l)}:Zm(o);return s=Od/s,c.config=function(l,d){return i(e,l,d)},c},Oc=function i(e,t){t===void 0&&(t=1.70158);var n=function(r){return r?--r*r*((t+1)*r+t)+1:0},a=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Zm(n);return a.config=function(s){return i(e,s)},a};Rn("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;ws(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});it.Linear.easeNone=it.none=it.Linear.easeIn;ws("Elastic",Nc("in"),Nc("out"),Nc());(function(i,e){var t=1/e,n=2*t,a=2.5*t,s=function(o){return o<t?i*o*o:o<n?i*Math.pow(o-1.5/e,2)+.75:o<a?i*(o-=2.25/e)*o+.9375:i*Math.pow(o-2.625/e,2)+.984375};ws("Bounce",function(r){return 1-s(1-r)},s)})(7.5625,2.75);ws("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});ws("Circ",function(i){return-(Sm(1-i*i)-1)});ws("Sine",function(i){return i===1?1:-x0(i*_0)+1});ws("Back",Oc("in"),Oc("out"),Oc());it.SteppedEase=it.steps=Qn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,a=e+(t?0:1),s=t?1:0,r=1-yt;return function(o){return((a*Ro(0,r,o)|0)+s)*n}}};co.ease=it["quad.out"];Rn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return af+=i+","+i+"Params,"});var Jm=function(e,t){this.id=y0++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Lm,this.set=t?t.getSetter:df},mo=function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,vr(this,+t.duration,1,1),this.data=t.data,Tt&&(this._ctx=Tt,Tt.data.push(this)),po||Wn.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,vr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,a){if(_r(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(fc(this,n),!s._dp||s.parent||zm(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ii(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!a||this._initted&&Math.abs(this._zTime)===yt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Cm(this,n,a)),this},e.time=function(n,a){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+rh(this))%(this._dur+this._rDelay)||(n?this._dur:0),a):this._time},e.totalProgress=function(n,a){return arguments.length?this.totalTime(this.totalDuration()*n,a):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,a){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+rh(this),a):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,a){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,a):this._repeat?gr(this._tTime,s)+1:1},e.timeScale=function(n,a){if(!arguments.length)return this._rts===-yt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Fl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-yt?0:this._rts,this.totalTime(Ro(-Math.abs(this._delay),this.totalDuration(),s),a!==!1),uc(this),C0(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(_r(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==yt&&(this._tTime-=yt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Rt(n);var a=this.parent||this._dp;return a&&(a._sort||!this.parent)&&Ii(a,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(An(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var a=this.parent||this._dp;return a?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Fl(a.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=T0);var a=nn;return nn=n,rf(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),nn=a,this},e.globalTime=function(n){for(var a=this,s=arguments.length?n:a.rawTime();a;)s=a._start+s/(Math.abs(a._ts)||1),a=a._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,oh(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var a=this._time;return this._rDelay=n,oh(this),a?this.time(a):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,a){return this.totalTime(si(this,n),An(a))},e.restart=function(n,a){return this.play().totalTime(n?-this._delay:0,An(a)),this._dur||(this._zTime=-yt),this},e.play=function(n,a){return n!=null&&this.seek(n,a),this.reversed(!1).paused(!1)},e.reverse=function(n,a){return n!=null&&this.seek(n||this.totalDuration(),a),this.reversed(!0).paused(!1)},e.pause=function(n,a){return n!=null&&this.seek(n,a),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-yt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-yt,this},e.isActive=function(){var n=this.parent||this._dp,a=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=a&&s<this.endTime(!0)-yt)},e.eventCallback=function(n,a,s){var r=this.vars;return arguments.length>1?(a?(r[n]=a,s&&(r[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=a)):delete r[n],this):r[n]},e.then=function(n){var a=this,s=a._prom;return new Promise(function(r){var o=Ut(n)?n:Dm,c=function(){var d=a.then;a.then=null,s&&s(),Ut(o)&&(o=o(a))&&(o.then||o===a)&&(a.then=d),r(o),a.then=d};a._initted&&a.totalProgress()===1&&a._ts>=0||!a._tTime&&a._ts<0?c():a._prom=c})},e.kill=function(){Hr(this)},i}();ei(mo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-yt,_prom:0,_ps:!1,_rts:1});var Tn=function(i){bm(e,i);function e(n,a){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=An(n.sortChildren),Lt&&Ii(n.parent||Lt,Ji(s),a),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Um(Ji(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(a,s,r){return eo(0,arguments,this),this},t.from=function(a,s,r){return eo(1,arguments,this),this},t.fromTo=function(a,s,r,o){return eo(2,arguments,this),this},t.set=function(a,s,r){return s.duration=0,s.parent=this,Qr(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ht(a,s,si(this,r),1),this},t.call=function(a,s,r){return Ii(this,Ht.delayedCall(0,a,s),r)},t.staggerTo=function(a,s,r,o,c,l,d){return r.duration=s,r.stagger=r.stagger||o,r.onComplete=l,r.onCompleteParams=d,r.parent=this,new Ht(a,r,si(this,c)),this},t.staggerFrom=function(a,s,r,o,c,l,d){return r.runBackwards=1,Qr(r).immediateRender=An(r.immediateRender),this.staggerTo(a,s,r,o,c,l,d)},t.staggerFromTo=function(a,s,r,o,c,l,d,f){return o.startAt=r,Qr(o).immediateRender=An(o.immediateRender),this.staggerTo(a,s,o,c,l,d,f)},t.render=function(a,s,r){var o=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,d=a<=0?0:Rt(a),f=this._zTime<0!=a<0&&(this._initted||!l),u,h,v,m,p,g,y,T,b,S,E,A;if(this!==Lt&&d>c&&a>=0&&(d=c),d!==this._tTime||r||f){if(o!==this._time&&l&&(d+=this._time-o,a+=this._time-o),u=d,b=this._start,T=this._ts,g=!T,f&&(l||(o=this._zTime),(a||!s)&&(this._zTime=a)),this._repeat){if(E=this._yoyo,p=l+this._rDelay,this._repeat<-1&&a<0)return this.totalTime(p*100+a,s,r);if(u=Rt(d%p),d===c?(m=this._repeat,u=l):(S=Rt(d/p),m=~~S,m&&m===S&&(u=l,m--),u>l&&(u=l)),S=gr(this._tTime,p),!o&&this._tTime&&S!==m&&this._tTime-S*p-this._dur<=0&&(S=m),E&&m&1&&(u=l-u,A=1),m!==S&&!this._lock){var x=E&&S&1,w=x===(E&&m&1);if(m<S&&(x=!x),o=x?0:d%l?l:d,this._lock=1,this.render(o||(A?0:Rt(m*p)),s,!l)._lock=0,this._tTime=d,!s&&this.parent&&Yn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,S=m),o&&o!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,w&&(this._lock=2,o=x?l:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!g)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=z0(this,Rt(o),Rt(u)),y&&(d-=u-(u=y._start))),this._tTime=d,this._time=u,this._act=!!T,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=a,o=0),!o&&d&&l&&!s&&!S&&(Yn(this,"onStart"),this._tTime!==d))return this;if(u>=o&&a>=0)for(h=this._first;h;){if(v=h._next,(h._act||u>=h._start)&&h._ts&&y!==h){if(h.parent!==this)return this.render(a,s,r);if(h.render(h._ts>0?(u-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(u-h._start)*h._ts,s,r),u!==this._time||!this._ts&&!g){y=0,v&&(d+=this._zTime=-yt);break}}h=v}else{h=this._last;for(var R=a<0?a:u;h;){if(v=h._prev,(h._act||R<=h._end)&&h._ts&&y!==h){if(h.parent!==this)return this.render(a,s,r);if(h.render(h._ts>0?(R-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(R-h._start)*h._ts,s,r||nn&&rf(h)),u!==this._time||!this._ts&&!g){y=0,v&&(d+=this._zTime=R?-yt:yt);break}}h=v}}if(y&&!s&&(this.pause(),y.render(u>=o?0:-yt)._zTime=u>=o?1:-1,this._ts))return this._start=b,uc(this),this.render(a,s,r);this._onUpdate&&!s&&Yn(this,"onUpdate",!0),(d===c&&this._tTime>=this.totalDuration()||!d&&o)&&(b===this._start||Math.abs(T)!==Math.abs(this._ts))&&(this._lock||((a||!l)&&(d===c&&this._ts>0||!d&&this._ts<0)&&Ba(this,1),!s&&!(a<0&&!o)&&(d||o||!c)&&(Yn(this,d===c&&a>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(d<c&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(a,s){var r=this;if(sa(s)||(s=si(this,s,a)),!(a instanceof mo)){if(pn(a))return a.forEach(function(o){return r.add(o,s)}),this;if(en(a))return this.addLabel(a,s);if(Ut(a))a=Ht.delayedCall(0,a);else return this}return this!==a?Ii(this,a,s):this},t.getChildren=function(a,s,r,o){a===void 0&&(a=!0),s===void 0&&(s=!0),r===void 0&&(r=!0),o===void 0&&(o=-li);for(var c=[],l=this._first;l;)l._start>=o&&(l instanceof Ht?s&&c.push(l):(r&&c.push(l),a&&c.push.apply(c,l.getChildren(!0,s,r)))),l=l._next;return c},t.getById=function(a){for(var s=this.getChildren(1,1,1),r=s.length;r--;)if(s[r].vars.id===a)return s[r]},t.remove=function(a){return en(a)?this.removeLabel(a):Ut(a)?this.killTweensOf(a):(a.parent===this&&dc(this,a),a===this._recent&&(this._recent=this._last),_s(this))},t.totalTime=function(a,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Rt(Wn.time-(this._ts>0?a/this._ts:(this.totalDuration()-a)/-this._ts))),i.prototype.totalTime.call(this,a,s),this._forcing=0,this):this._tTime},t.addLabel=function(a,s){return this.labels[a]=si(this,s),this},t.removeLabel=function(a){return delete this.labels[a],this},t.addPause=function(a,s,r){var o=Ht.delayedCall(0,s||fo,r);return o.data="isPause",this._hasPause=1,Ii(this,o,si(this,a))},t.removePause=function(a){var s=this._first;for(a=si(this,a);s;)s._start===a&&s.data==="isPause"&&Ba(s),s=s._next},t.killTweensOf=function(a,s,r){for(var o=this.getTweensOf(a,r),c=o.length;c--;)Aa!==o[c]&&o[c].kill(a,s);return this},t.getTweensOf=function(a,s){for(var r=[],o=ci(a),c=this._first,l=sa(s),d;c;)c instanceof Ht?A0(c._targets,o)&&(l?(!Aa||c._initted&&c._ts)&&c.globalTime(0)<=s&&c.globalTime(c.totalDuration())>s:!s||c.isActive())&&r.push(c):(d=c.getTweensOf(o,s)).length&&r.push.apply(r,d),c=c._next;return r},t.tweenTo=function(a,s){s=s||{};var r=this,o=si(r,a),c=s,l=c.startAt,d=c.onStart,f=c.onStartParams,u=c.immediateRender,h,v=Ht.to(r,ei({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(l&&"time"in l?l.time:r._time))/r.timeScale())||yt,onStart:function(){if(r.pause(),!h){var p=s.duration||Math.abs((o-(l&&"time"in l?l.time:r._time))/r.timeScale());v._dur!==p&&vr(v,p,0,1).render(v._time,!0,!0),h=1}d&&d.apply(v,f||[])}},s));return u?v.render(0):v},t.tweenFromTo=function(a,s,r){return this.tweenTo(s,ei({startAt:{time:si(this,a)}},r))},t.recent=function(){return this._recent},t.nextLabel=function(a){return a===void 0&&(a=this._time),lh(this,si(this,a))},t.previousLabel=function(a){return a===void 0&&(a=this._time),lh(this,si(this,a),1)},t.currentLabel=function(a){return arguments.length?this.seek(a,!0):this.previousLabel(this._time+yt)},t.shiftChildren=function(a,s,r){r===void 0&&(r=0);var o=this._first,c=this.labels,l;for(a=Rt(a);o;)o._start>=r&&(o._start+=a,o._end+=a),o=o._next;if(s)for(l in c)c[l]>=r&&(c[l]+=a);return _s(this)},t.invalidate=function(a){var s=this._first;for(this._lock=0;s;)s.invalidate(a),s=s._next;return i.prototype.invalidate.call(this,a)},t.clear=function(a){a===void 0&&(a=!0);for(var s=this._first,r;s;)r=s._next,this.remove(s),s=r;return this._dp&&(this._time=this._tTime=this._pTime=0),a&&(this.labels={}),_s(this)},t.totalDuration=function(a){var s=0,r=this,o=r._last,c=li,l,d,f;if(arguments.length)return r.timeScale((r._repeat<0?r.duration():r.totalDuration())/(r.reversed()?-a:a));if(r._dirty){for(f=r.parent;o;)l=o._prev,o._dirty&&o.totalDuration(),d=o._start,d>c&&r._sort&&o._ts&&!r._lock?(r._lock=1,Ii(r,o,d-o._delay,1)._lock=0):c=d,d<0&&o._ts&&(s-=d,(!f&&!r._dp||f&&f.smoothChildTiming)&&(r._start+=Rt(d/r._ts),r._time-=d,r._tTime-=d),r.shiftChildren(-d,!1,-1/0),c=0),o._end>s&&o._ts&&(s=o._end),o=l;vr(r,r===Lt&&r._time>s?r._time:s,1,1),r._dirty=0}return r._tDur},e.updateRoot=function(a){if(Lt._ts&&(Cm(Lt,Fl(a,Lt)),Rm=Wn.frame),Wn.frame>=ah){ah+=jn.autoSleep||120;var s=Lt._first;if((!s||!s._ts)&&jn.autoSleep&&Wn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Wn.sleep()}}},e}(mo);ei(Tn.prototype,{_lock:0,_hasPause:0,_forcing:0});var j0=function(e,t,n,a,s,r,o){var c=new Ln(this._pt,e,t,0,1,ig,null,s),l=0,d=0,f,u,h,v,m,p,g,y;for(c.b=n,c.e=a,n+="",a+="",(g=~a.indexOf("random("))&&(a=ho(a)),r&&(y=[n,a],r(y,e,t),n=y[0],a=y[1]),u=n.match(Ic)||[];f=Ic.exec(a);)v=f[0],m=a.substring(l,f.index),h?h=(h+1)%5:m.substr(-5)==="rgba("&&(h=1),v!==u[d++]&&(p=parseFloat(u[d-1])||0,c._pt={_next:c._pt,p:m||d===1?m:",",s:p,c:v.charAt(1)==="="?rr(p,v)-p:parseFloat(v)-p,m:h&&h<4?Math.round:0},l=Ic.lastIndex);return c.c=l<a.length?a.substring(l,a.length):"",c.fp=o,(Em.test(a)||g)&&(c.e=0),this._pt=c,c},of=function(e,t,n,a,s,r,o,c,l,d){Ut(a)&&(a=a(s||0,e,r));var f=e[t],u=n!=="get"?n:Ut(f)?l?e[t.indexOf("set")||!Ut(e["get"+t.substr(3)])?t:"get"+t.substr(3)](l):e[t]():f,h=Ut(f)?l?i_:tg:cf,v;if(en(a)&&(~a.indexOf("random(")&&(a=ho(a)),a.charAt(1)==="="&&(v=rr(u,a)+(hn(u)||0),(v||v===0)&&(a=v))),!d||u!==a||Wd)return!isNaN(u*a)&&a!==""?(v=new Ln(this._pt,e,t,+u||0,a-(u||0),typeof f=="boolean"?s_:ng,0,h),l&&(v.fp=l),o&&v.modifier(o,this,e),this._pt=v):(!f&&!(t in e)&&tf(t,a),j0.call(this,e,t,u,a,h,c||jn.stringFilter,l))},Q0=function(e,t,n,a,s){if(Ut(e)&&(e=to(e,s,t,n,a)),!Hi(e)||e.style&&e.nodeType||pn(e)||km(e))return en(e)?to(e,s,t,n,a):e;var r={},o;for(o in e)r[o]=to(e[o],s,t,n,a);return r},jm=function(e,t,n,a,s,r){var o,c,l,d;if($n[e]&&(o=new $n[e]).init(s,o.rawVars?t[e]:Q0(t[e],a,s,r,n),n,a,r)!==!1&&(n._pt=c=new Ln(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==er))for(l=n._ptLookup[n._targets.indexOf(s)],d=o._props.length;d--;)l[o._props[d]]=c;return o},Aa,Wd,lf=function i(e,t,n){var a=e.vars,s=a.ease,r=a.startAt,o=a.immediateRender,c=a.lazy,l=a.onUpdate,d=a.runBackwards,f=a.yoyoEase,u=a.keyframes,h=a.autoRevert,v=e._dur,m=e._startAt,p=e._targets,g=e.parent,y=g&&g.data==="nested"?g.vars.targets:p,T=e._overwrite==="auto"&&!Ju,b=e.timeline,S=a.easeReverse||f,E,A,x,w,R,L,z,F,C,H,D,P,K;if(b&&(!u||!s)&&(s="none"),e._ease=ys(s,co.ease),e._rEase=S&&(ys(S)||e._ease),e._from=!b&&!!a.runBackwards,e._from&&(e.ratio=1),!b||u&&!a.stagger){if(F=p[0]?vs(p[0]).harness:0,P=F&&a[F.prop],E=Ol(a,nf),m&&(m._zTime<0&&m.progress(1),t<0&&d&&o&&!h?m.render(-1,!0):m.revert(d&&v?bl:w0),m._lazy=0),r){if(Ba(e._startAt=Ht.set(p,ei({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!m&&An(c),startAt:null,delay:0,onUpdate:l&&function(){return Yn(e,"onUpdate")},stagger:0},r))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(nn||!o&&!h)&&e._startAt.revert(bl),o&&v&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(d&&v&&!m){if(t&&(o=!1),x=ei({overwrite:!1,data:"isFromStart",lazy:o&&!m&&An(c),immediateRender:o,stagger:0,parent:g},E),P&&(x[F.prop]=P),Ba(e._startAt=Ht.set(p,x)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(nn?e._startAt.revert(bl):e._startAt.render(-1,!0)),e._zTime=t,!o)i(e._startAt,yt,yt);else if(!t)return}for(e._pt=e._ptCache=0,c=v&&An(c)||c&&!v,A=0;A<p.length;A++){if(R=p[A],z=R._gsap||sf(p)[A]._gsap,e._ptLookup[A]=H={},Bd[z.id]&&Ua.length&&Nl(),D=y===p?A:y.indexOf(R),F&&(C=new F).init(R,P||E,e,D,y)!==!1&&(e._pt=w=new Ln(e._pt,R,C.name,0,1,C.render,C,0,C.priority),C._props.forEach(function($){H[$]=w}),C.priority&&(L=1)),!F||P)for(x in E)$n[x]&&(C=jm(x,E,e,D,R,y))?C.priority&&(L=1):H[x]=w=of.call(e,R,x,"get",E[x],D,y,0,a.stringFilter);e._op&&e._op[A]&&e.kill(R,e._op[A]),T&&e._pt&&(Aa=e,Lt.killTweensOf(R,H,e.globalTime(t)),K=!e.parent,Aa=0),e._pt&&c&&(Bd[z.id]=1)}L&&ag(e),e._onInit&&e._onInit(e)}e._onUpdate=l,e._initted=(!e._op||e._pt)&&!K,u&&t<=0&&b.render(li,!0,!0)},e_=function(e,t,n,a,s,r,o,c){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],d,f,u,h;if(!l)for(l=e._ptCache[t]=[],u=e._ptLookup,h=e._targets.length;h--;){if(d=u[h][t],d&&d.d&&d.d._pt)for(d=d.d._pt;d&&d.p!==t&&d.fp!==t;)d=d._next;if(!d)return Wd=1,e.vars[t]="+=0",lf(e,o),Wd=0,c?uo(t+" not eligible for reset. Try splitting into individual properties"):1;l.push(d)}for(h=l.length;h--;)f=l[h],d=f._pt||f,d.s=(a||a===0)&&!s?a:d.s+(a||0)+r*d.c,d.c=n-d.s,f.e&&(f.e=Ot(n)+hn(f.e)),f.b&&(f.b=d.s+hn(f.b))},t_=function(e,t){var n=e[0]?vs(e[0]).harness:0,a=n&&n.aliases,s,r,o,c;if(!a)return t;s=mr({},t);for(r in a)if(r in s)for(c=a[r].split(","),o=c.length;o--;)s[c[o]]=s[r];return s},n_=function(e,t,n,a){var s=t.ease||a||"power1.inOut",r,o;if(pn(t))o=n[e]||(n[e]=[]),t.forEach(function(c,l){return o.push({t:l/(t.length-1)*100,v:c,e:s})});else for(r in t)o=n[r]||(n[r]=[]),r==="ease"||o.push({t:parseFloat(e),v:t[r],e:s})},to=function(e,t,n,a,s){return Ut(e)?e.call(t,n,a,s):en(e)&&~e.indexOf("random(")?ho(e):e},Qm=af+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",eg={};Rn(Qm+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return eg[i]=1});var Ht=function(i){bm(e,i);function e(n,a,s,r){var o;typeof a=="number"&&(s.duration=a,a=s,s=null),o=i.call(this,r?a:Qr(a))||this;var c=o.vars,l=c.duration,d=c.delay,f=c.immediateRender,u=c.stagger,h=c.overwrite,v=c.keyframes,m=c.defaults,p=c.scrollTrigger,g=a.parent||Lt,y=(pn(n)||km(n)?sa(n[0]):"length"in a)?[n]:ci(n),T,b,S,E,A,x,w,R;if(o._targets=y.length?sf(y):uo("GSAP target "+n+" not found. https://gsap.com",!jn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=h,v||u||$o(l)||$o(d)){a=o.vars;var L=a.easeReverse||a.yoyoEase;if(T=o.timeline=new Tn({data:"nested",defaults:m||{},targets:g&&g.data==="nested"?g.vars.targets:y}),T.kill(),T.parent=T._dp=Ji(o),T._start=0,u||$o(l)||$o(d)){if(E=y.length,w=u&&Bm(u),Hi(u))for(A in u)~Qm.indexOf(A)&&(R||(R={}),R[A]=u[A]);for(b=0;b<E;b++)S=Ol(a,eg),S.stagger=0,L&&(S.easeReverse=L),R&&mr(S,R),x=y[b],S.duration=+to(l,Ji(o),b,x,y),S.delay=(+to(d,Ji(o),b,x,y)||0)-o._delay,!u&&E===1&&S.delay&&(o._delay=d=S.delay,o._start+=d,S.delay=0),T.to(x,S,w?w(b,x,y):0),T._ease=it.none;T.duration()?l=d=0:o.timeline=0}else if(v){Qr(ei(T.vars.defaults,{ease:"none"})),T._ease=ys(v.ease||a.ease||"none");var z=0,F,C,H;if(pn(v))v.forEach(function(D){return T.to(y,D,">")}),T.duration();else{S={};for(A in v)A==="ease"||A==="easeEach"||n_(A,v[A],S,v.easeEach);for(A in S)for(F=S[A].sort(function(D,P){return D.t-P.t}),z=0,b=0;b<F.length;b++)C=F[b],H={ease:C.e,duration:(C.t-(b?F[b-1].t:0))/100*l},H[A]=C.v,T.to(y,H,z),z+=H.duration;T.duration()<l&&T.to({},{duration:l-T.duration()})}}l||o.duration(l=T.duration())}else o.timeline=0;return h===!0&&!Ju&&(Aa=Ji(o),Lt.killTweensOf(y),Aa=0),Ii(g,Ji(o),s),a.reversed&&o.reverse(),a.paused&&o.paused(!0),(f||!l&&!v&&o._start===Rt(g._time)&&An(f)&&P0(Ji(o))&&g.data!=="nested")&&(o._tTime=-yt,o.render(Math.max(0,-d)||0)),p&&Um(Ji(o),p),o}var t=e.prototype;return t.render=function(a,s,r){var o=this._time,c=this._tDur,l=this._dur,d=a<0,f=a>c-yt&&!d?c:a<yt?0:a,u,h,v,m,p,g,y,T;if(!l)I0(this,a,s,r);else if(f!==this._tTime||!a||r||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==d||this._lazy){if(u=f,T=this.timeline,this._repeat){if(m=l+this._rDelay,this._repeat<-1&&d)return this.totalTime(m*100+a,s,r);if(u=Rt(f%m),f===c?(v=this._repeat,u=l):(p=Rt(f/m),v=~~p,v&&v===p?(u=l,v--):u>l&&(u=l)),g=this._yoyo&&v&1,g&&(u=l-u),p=gr(this._tTime,m),u===o&&!r&&this._initted&&v===p)return this._tTime=f,this;v!==p&&this.vars.repeatRefresh&&!g&&!this._lock&&u!==m&&this._initted&&(this._lock=r=1,this.render(Rt(m*v),!0).invalidate()._lock=0)}if(!this._initted){if(Nm(this,d?a:u,r,s,f))return this._tTime=0,this;if(o!==this._time&&!(r&&this.vars.repeatRefresh&&v!==p))return this;if(l!==this._dur)return this.render(a,s,r)}if(this._rEase){var b=u<o;if(b!==this._inv){var S=b?o:l-o;this._inv=b,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=S?(b?-1:1)/S:0,this._invScale=b?-this.ratio:1-this.ratio,this._invEase=b?this._rEase:this._ease}this.ratio=y=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=y=this._ease(u/l);if(this._from&&(this.ratio=y=1-y),this._tTime=f,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&f&&!s&&!p&&(Yn(this,"onStart"),this._tTime!==f))return this;for(h=this._pt;h;)h.r(y,h.d),h=h._next;T&&T.render(a<0?a:T._dur*T._ease(u/this._dur),s,r)||this._startAt&&(this._zTime=a),this._onUpdate&&!s&&(d&&Hd(this,a,s,r),Yn(this,"onUpdate")),this._repeat&&v!==p&&this.vars.onRepeat&&!s&&this.parent&&Yn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(d&&!this._onUpdate&&Hd(this,a,!0,!0),(a||!l)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Ba(this,1),!s&&!(d&&!o)&&(f||o||g)&&(Yn(this,f===c?"onComplete":"onReverseComplete",!0),this._prom&&!(f<c&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(a){return(!a||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(a),i.prototype.invalidate.call(this,a)},t.resetTo=function(a,s,r,o,c){po||Wn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),d;return this._initted||lf(this,l),d=this._ease(l/this._dur),e_(this,a,s,r,o,d,l,c)?this.resetTo(a,s,r,o,1):(fc(this,0),this.parent||Im(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(a,s){if(s===void 0&&(s="all"),!a&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Hr(this):this.scrollTrigger&&this.scrollTrigger.kill(!!nn),this;if(this.timeline){var r=this.timeline.totalDuration();return this.timeline.killTweensOf(a,s,Aa&&Aa.vars.overwrite!==!0)._first||Hr(this),this.parent&&r!==this.timeline.totalDuration()&&vr(this,this._dur*this.timeline._tDur/r,0,1),this}var o=this._targets,c=a?ci(a):o,l=this._ptLookup,d=this._pt,f,u,h,v,m,p,g;if((!s||s==="all")&&L0(o,c))return s==="all"&&(this._pt=0),Hr(this);for(f=this._op=this._op||[],s!=="all"&&(en(s)&&(m={},Rn(s,function(y){return m[y]=1}),s=m),s=t_(o,s)),g=o.length;g--;)if(~c.indexOf(o[g])){u=l[g],s==="all"?(f[g]=s,v=u,h={}):(h=f[g]=f[g]||{},v=s);for(m in v)p=u&&u[m],p&&((!("kill"in p.d)||p.d.kill(m)===!0)&&dc(this,p,"_pt"),delete u[m]),h!=="all"&&(h[m]=1)}return this._initted&&!this._pt&&d&&Hr(this),this},e.to=function(a,s){return new e(a,s,arguments[2])},e.from=function(a,s){return eo(1,arguments)},e.delayedCall=function(a,s,r,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:a,onComplete:s,onReverseComplete:s,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:o})},e.fromTo=function(a,s,r){return eo(2,arguments)},e.set=function(a,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(a,s)},e.killTweensOf=function(a,s,r){return Lt.killTweensOf(a,s,r)},e}(mo);ei(Ht.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Rn("staggerTo,staggerFrom,staggerFromTo",function(i){Ht[i]=function(){var e=new Tn,t=Gd.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var cf=function(e,t,n){return e[t]=n},tg=function(e,t,n){return e[t](n)},i_=function(e,t,n,a){return e[t](a.fp,n)},a_=function(e,t,n){return e.setAttribute(t,n)},df=function(e,t){return Ut(e[t])?tg:ju(e[t])&&e.setAttribute?a_:cf},ng=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},s_=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},ig=function(e,t){var n=t._pt,a="";if(!e&&t.b)a=t.b;else if(e===1&&t.e)a=t.e;else{for(;n;)a=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+a,n=n._next;a+=t.c}t.set(t.t,t.p,a,t)},uf=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},r_=function(e,t,n,a){for(var s=this._pt,r;s;)r=s._next,s.p===a&&s.modifier(e,t,n),s=r},o_=function(e){for(var t=this._pt,n,a;t;)a=t._next,t.p===e&&!t.op||t.op===e?dc(this,t,"_pt"):t.dep||(n=1),t=a;return!n},l_=function(e,t,n,a){a.mSet(e,t,a.m.call(a.tween,n,a.mt),a)},ag=function(e){for(var t=e._pt,n,a,s,r;t;){for(n=t._next,a=s;a&&a.pr>t.pr;)a=a._next;(t._prev=a?a._prev:r)?t._prev._next=t:s=t,(t._next=a)?a._prev=t:r=t,t=n}e._pt=s},Ln=function(){function i(t,n,a,s,r,o,c,l,d){this.t=n,this.s=s,this.c=r,this.p=a,this.r=o||ng,this.d=c||this,this.set=l||cf,this.pr=d||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,a,s){this.mSet=this.mSet||this.set,this.set=l_,this.m=n,this.mt=s,this.tween=a},i}();Rn(af+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(i){return nf[i]=1});Qn.TweenMax=Qn.TweenLite=Ht;Qn.TimelineLite=Qn.TimelineMax=Tn;Lt=new Tn({sortChildren:!1,defaults:co,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});jn.stringFilter=Ym;var xs=[],kl={},c_=[],dh=0,d_=0,Fc=function(e){return(kl[e]||c_).map(function(t){return t()})},Xd=function(){var e=Date.now(),t=[];e-dh>2&&(Fc("matchMediaInit"),xs.forEach(function(n){var a=n.queries,s=n.conditions,r,o,c,l;for(o in a)r=Li.matchMedia(a[o]).matches,r&&(c=1),r!==s[o]&&(s[o]=r,l=1);l&&(n.revert(),c&&t.push(n))}),Fc("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(a){return n.add(null,a)})}),dh=e,Fc("matchMedia"))},sg=function(){function i(t,n){this.selector=n&&Vd(n),this.data=[],this._r=[],this.isReverted=!1,this.id=d_++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,a,s){Ut(n)&&(s=a,a=n,n=Ut);var r=this,o=function(){var l=Tt,d=r.selector,f;return l&&l!==r&&l.data.push(r),s&&(r.selector=Vd(s)),Tt=r,f=a.apply(r,arguments),Ut(f)&&r._r.push(f),Tt=l,r.selector=d,r.isReverted=!1,f};return r.last=o,n===Ut?o(r,function(c){return r.add(null,c)}):n?r[n]=o:o},e.ignore=function(n){var a=Tt;Tt=null,n(this),Tt=a},e.getTweens=function(){var n=[];return this.data.forEach(function(a){return a instanceof i?n.push.apply(n,a.getTweens()):a instanceof Ht&&!(a.parent&&a.parent.data==="nested")&&n.push(a)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,a){var s=this;if(n?function(){for(var o=s.getTweens(),c=s.data.length,l;c--;)l=s.data[c],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(d){return o.splice(o.indexOf(d),1)}));for(o.map(function(d){return{g:d._dur||d._delay||d._sat&&!d._sat.vars.immediateRender?d.globalTime(0):-1/0,t:d}}).sort(function(d,f){return f.g-d.g||-1/0}).forEach(function(d){return d.t.revert(n)}),c=s.data.length;c--;)l=s.data[c],l instanceof Tn?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof Ht)&&l.revert&&l.revert(n);s._r.forEach(function(d){return d(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),a)for(var r=xs.length;r--;)xs[r].id===this.id&&xs.splice(r,1)},e.revert=function(n){this.kill(n||{})},i}(),u_=function(){function i(t){this.contexts=[],this.scope=t,Tt&&Tt.data.push(this)}var e=i.prototype;return e.add=function(n,a,s){Hi(n)||(n={matches:n});var r=new sg(0,s||this.scope),o=r.conditions={},c,l,d;Tt&&!r.selector&&(r.selector=Tt.selector),this.contexts.push(r),a=r.add("onMatch",a),r.queries=n;for(l in n)l==="all"?d=1:(c=Li.matchMedia(n[l]),c&&(xs.indexOf(r)<0&&xs.push(r),(o[l]=c.matches)&&(d=1),c.addListener?c.addListener(Xd):c.addEventListener("change",Xd)));return d&&a(r,function(f){return r.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(a){return a.kill(n,!0)})},i}(),Bl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(a){return Wm(a)})},timeline:function(e){return new Tn(e)},getTweensOf:function(e,t){return Lt.getTweensOf(e,t)},getProperty:function(e,t,n,a){en(e)&&(e=ci(e)[0]);var s=vs(e||{}).get,r=n?Dm:Pm;return n==="native"&&(n=""),e&&(t?r(($n[t]&&$n[t].get||s)(e,t,n,a)):function(o,c,l){return r(($n[o]&&$n[o].get||s)(e,o,c,l))})},quickSetter:function(e,t,n){if(e=ci(e),e.length>1){var a=e.map(function(d){return Nn.quickSetter(d,t,n)}),s=a.length;return function(d){for(var f=s;f--;)a[f](d)}}e=e[0]||{};var r=$n[t],o=vs(e),c=o.harness&&(o.harness.aliases||{})[t]||t,l=r?function(d){var f=new r;er._pt=0,f.init(e,n?d+n:d,er,0,[e]),f.render(1,f),er._pt&&uf(1,er)}:o.set(e,c);return r?l:function(d){return l(e,c,n?d+n:d,o,1)}},quickTo:function(e,t,n){var a,s=Nn.to(e,ei((a={},a[t]="+=0.1",a.paused=!0,a.stagger=0,a),n||{})),r=function(c,l,d){return s.resetTo(t,c,l,d)};return r.tween=s,r},isTweening:function(e){return Lt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ys(e.ease,co.ease)),sh(co,e||{})},config:function(e){return sh(jn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,a=e.plugins,s=e.defaults,r=e.extendTimeline;(a||"").split(",").forEach(function(o){return o&&!$n[o]&&!Qn[o]&&uo(t+" effect requires "+o+" plugin.")}),zc[t]=function(o,c,l){return n(ci(o),ei(c||{},s),l)},r&&(Tn.prototype[t]=function(o,c,l){return this.add(zc[t](o,Hi(c)?c:(l=c)&&{},this),l)})},registerEase:function(e,t){it[e]=ys(t)},parseEase:function(e,t){return arguments.length?ys(e,t):it},getById:function(e){return Lt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Tn(e),a,s;for(n.smoothChildTiming=An(e.smoothChildTiming),Lt.remove(n),n._dp=0,n._time=n._tTime=Lt._time,a=Lt._first;a;)s=a._next,(t||!(!a._dur&&a instanceof Ht&&a.vars.onComplete===a._targets[0]))&&Ii(n,a,a._start-a._delay),a=s;return Ii(Lt,n,0),n},context:function(e,t){return e?new sg(e,t):Tt},matchMedia:function(e){return new u_(e)},matchMediaRefresh:function(){return xs.forEach(function(e){var t=e.conditions,n,a;for(a in t)t[a]&&(t[a]=!1,n=1);n&&e.revert()})||Xd()},addEventListener:function(e,t){var n=kl[e]||(kl[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=kl[e],a=n&&n.indexOf(t);a>=0&&n.splice(a,1)},utils:{wrap:$0,wrapYoyo:G0,distribute:Bm,random:$m,snap:Hm,normalize:H0,getUnit:hn,clamp:N0,splitColor:Xm,toArray:ci,selector:Vd,mapRange:Vm,pipe:F0,unitize:B0,interpolate:V0,shuffle:Fm},install:Tm,effects:zc,ticker:Wn,updateRoot:Tn.updateRoot,plugins:$n,globalTimeline:Lt,core:{PropTween:Ln,globals:Am,Tween:Ht,Timeline:Tn,Animation:mo,getCache:vs,_removeLinkedListItem:dc,reverting:function(){return nn},context:function(e){return e&&Tt&&(Tt.data.push(e),e._ctx=Tt),Tt},suppressOverwrites:function(e){return Ju=e}}};Rn("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return Bl[i]=Ht[i]});Wn.add(Tn.updateRoot);er=Bl.to({},{duration:0});var f_=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},h_=function(e,t){var n=e._targets,a,s,r;for(a in t)for(s=n.length;s--;)r=e._ptLookup[s][a],r&&(r=r.d)&&(r._pt&&(r=f_(r,a)),r&&r.modifier&&r.modifier(t[a],e,n[s],a))},Bc=function(e,t){return{name:e,headless:1,rawVars:1,init:function(a,s,r){r._onInit=function(o){var c,l;if(en(s)&&(c={},Rn(s,function(d){return c[d]=1}),s=c),t){c={};for(l in s)c[l]=t(s[l]);s=c}h_(o,s)}}}},Nn=Bl.registerPlugin({name:"attr",init:function(e,t,n,a,s){var r,o,c;this.tween=n;for(r in t)c=e.getAttribute(r)||"",o=this.add(e,"setAttribute",(c||0)+"",t[r],a,s,0,0,r),o.op=r,o.b=c,this._props.push(r)},render:function(e,t){for(var n=t._pt;n;)nn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Bc("roundProps",qd),Bc("modifiers"),Bc("snap",Hm))||Bl;Ht.version=Tn.version=Nn.version="3.15.0";wm=1;Qu()&&_r();it.Power0;it.Power1;it.Power2;it.Power3;it.Power4;it.Linear;it.Quad;it.Cubic;it.Quart;it.Quint;it.Strong;it.Elastic;it.Back;it.SteppedEase;it.Bounce;it.Sine;it.Expo;it.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var uh,Ra,or,ff,us,fh,hf,p_=function(){return typeof window<"u"},ra={},ss=180/Math.PI,lr=Math.PI/180,Ps=Math.atan2,hh=1e8,pf=/([A-Z])/g,m_=/(left|right|width|margin|padding|x)/i,g_=/[\s,\(]\S/,zi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Kd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},v_=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},__=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},y_=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},x_=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},rg=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},og=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},b_=function(e,t,n){return e.style[t]=n},S_=function(e,t,n){return e.style.setProperty(t,n)},k_=function(e,t,n){return e._gsap[t]=n},M_=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},E_=function(e,t,n,a,s){var r=e._gsap;r.scaleX=r.scaleY=n,r.renderTransform(s,r)},w_=function(e,t,n,a,s){var r=e._gsap;r[t]=n,r.renderTransform(s,r)},Ct="transform",Cn=Ct+"Origin",T_=function i(e,t){var n=this,a=this.target,s=a.style,r=a._gsap;if(e in ra&&s){if(this.tfm=this.tfm||{},e!=="transform")e=zi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Qi(a,o)}):this.tfm[e]=r.x?r[e]:Qi(a,e),e===Cn&&(this.tfm.zOrigin=r.zOrigin);else return zi.transform.split(",").forEach(function(o){return i.call(n,o,t)});if(this.props.indexOf(Ct)>=0)return;r.svg&&(this.svgo=a.getAttribute("data-svg-origin"),this.props.push(Cn,t,"")),e=Ct}(s||t)&&this.props.push(e,t,s[e])},lg=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},A_=function(){var e=this.props,t=this.target,n=t.style,a=t._gsap,s,r;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(pf,"-$1").toLowerCase());if(this.tfm){for(r in this.tfm)a[r]=this.tfm[r];a.svg&&(a.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=hf(),(!s||!s.isStart)&&!n[Ct]&&(lg(n),a.zOrigin&&n[Cn]&&(n[Cn]+=" "+a.zOrigin+"px",a.zOrigin=0,a.renderTransform()),a.uncache=1)}},cg=function(e,t){var n={target:e,props:[],revert:A_,save:T_};return e._gsap||Nn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(a){return n.save(a)}),n},dg,Yd=function(e,t){var n=Ra.createElementNS?Ra.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ra.createElement(e);return n&&n.style?n:Ra.createElement(e)},Zn=function i(e,t,n){var a=getComputedStyle(e);return a[t]||a.getPropertyValue(t.replace(pf,"-$1").toLowerCase())||a.getPropertyValue(t)||!n&&i(e,yr(t)||t,1)||""},ph="O,Moz,ms,Ms,Webkit".split(","),yr=function(e,t,n){var a=t||us,s=a.style,r=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);r--&&!(ph[r]+e in s););return r<0?null:(r===3?"ms":r>=0?ph[r]:"")+e},Zd=function(){p_()&&window.document&&(uh=window,Ra=uh.document,or=Ra.documentElement,us=Yd("div")||{style:{}},Yd("div"),Ct=yr(Ct),Cn=Ct+"Origin",us.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",dg=!!yr("perspective"),hf=Nn.core.reverting,ff=1)},mh=function(e){var t=e.ownerSVGElement,n=Yd("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),a=e.cloneNode(!0),s;a.style.display="block",n.appendChild(a),or.appendChild(n);try{s=a.getBBox()}catch{}return n.removeChild(a),or.removeChild(n),s},gh=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},ug=function(e){var t,n;try{t=e.getBBox()}catch{t=mh(e),n=1}return t&&(t.width||t.height)||n||(t=mh(e)),t&&!t.width&&!t.x&&!t.y?{x:+gh(e,["x","cx","x1"])||0,y:+gh(e,["y","cy","y1"])||0,width:0,height:0}:t},fg=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&ug(e))},Ha=function(e,t){if(t){var n=e.style,a;t in ra&&t!==Cn&&(t=Ct),n.removeProperty?(a=t.substr(0,2),(a==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(a==="--"?t:t.replace(pf,"-$1").toLowerCase())):n.removeAttribute(t)}},La=function(e,t,n,a,s,r){var o=new Ln(e._pt,t,n,0,1,r?og:rg);return e._pt=o,o.b=a,o.e=s,e._props.push(n),o},vh={deg:1,rad:1,turn:1},R_={grid:1,flex:1},$a=function i(e,t,n,a){var s=parseFloat(n)||0,r=(n+"").trim().substr((s+"").length)||"px",o=us.style,c=m_.test(t),l=e.tagName.toLowerCase()==="svg",d=(l?"client":"offset")+(c?"Width":"Height"),f=100,u=a==="px",h=a==="%",v,m,p,g;if(a===r||!s||vh[a]||vh[r])return s;if(r!=="px"&&!u&&(s=i(e,t,n,"px")),g=e.getCTM&&fg(e),(h||r==="%")&&(ra[t]||~t.indexOf("adius")))return v=g?e.getBBox()[c?"width":"height"]:e[d],Ot(h?s/v*f:s/100*v);if(o[c?"width":"height"]=f+(u?r:a),m=a!=="rem"&&~t.indexOf("adius")||a==="em"&&e.appendChild&&!l?e:e.parentNode,g&&(m=(e.ownerSVGElement||{}).parentNode),(!m||m===Ra||!m.appendChild)&&(m=Ra.body),p=m._gsap,p&&h&&p.width&&c&&p.time===Wn.time&&!p.uncache)return Ot(s/p.width*f);if(h&&(t==="height"||t==="width")){var y=e.style[t];e.style[t]=f+a,v=e[d],y?e.style[t]=y:Ha(e,t)}else(h||r==="%")&&!R_[Zn(m,"display")]&&(o.position=Zn(e,"position")),m===e&&(o.position="static"),m.appendChild(us),v=us[d],m.removeChild(us),o.position="absolute";return c&&h&&(p=vs(m),p.time=Wn.time,p.width=m[d]),Ot(u?v*s/f:v&&s?f/v*s:0)},Qi=function(e,t,n,a){var s;return ff||Zd(),t in zi&&t!=="transform"&&(t=zi[t],~t.indexOf(",")&&(t=t.split(",")[0])),ra[t]&&t!=="transform"?(s=vo(e,a),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:$l(Zn(e,Cn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||a||~(s+"").indexOf("calc("))&&(s=Hl[t]&&Hl[t](e,t,n)||Zn(e,t)||Lm(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?$a(e,t,s,n)+n:s},L_=function(e,t,n,a){if(!n||n==="none"){var s=yr(t,e,1),r=s&&Zn(e,s,1);r&&r!==n?(t=s,n=r):t==="borderColor"&&(n=Zn(e,"borderTopColor"))}var o=new Ln(this._pt,e.style,t,0,1,ig),c=0,l=0,d,f,u,h,v,m,p,g,y,T,b,S;if(o.b=n,o.e=a,n+="",a+="",a.substring(0,6)==="var(--"&&(a=Zn(e,a.substring(4,a.indexOf(")")))),a==="auto"&&(m=e.style[t],e.style[t]=a,a=Zn(e,t)||a,m?e.style[t]=m:Ha(e,t)),d=[n,a],Ym(d),n=d[0],a=d[1],u=n.match(Qs)||[],S=a.match(Qs)||[],S.length){for(;f=Qs.exec(a);)p=f[0],y=a.substring(c,f.index),v?v=(v+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(v=1),p!==(m=u[l++]||"")&&(h=parseFloat(m)||0,b=m.substr((h+"").length),p.charAt(1)==="="&&(p=rr(h,p)+b),g=parseFloat(p),T=p.substr((g+"").length),c=Qs.lastIndex-T.length,T||(T=T||jn.units[t]||b,c===a.length&&(a+=T,o.e+=T)),b!==T&&(h=$a(e,t,m,T)||0),o._pt={_next:o._pt,p:y||l===1?y:",",s:h,c:g-h,m:v&&v<4||t==="zIndex"?Math.round:0});o.c=c<a.length?a.substring(c,a.length):""}else o.r=t==="display"&&a==="none"?og:rg;return Em.test(a)&&(o.e=0),this._pt=o,o},_h={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},C_=function(e){var t=e.split(" "),n=t[0],a=t[1]||"50%";return(n==="top"||n==="bottom"||a==="left"||a==="right")&&(e=n,n=a,a=e),t[0]=_h[n]||n,t[1]=_h[a]||a,t.join(" ")},P_=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,a=n.style,s=t.u,r=n._gsap,o,c,l;if(s==="all"||s===!0)a.cssText="",c=1;else for(s=s.split(","),l=s.length;--l>-1;)o=s[l],ra[o]&&(c=1,o=o==="transformOrigin"?Cn:Ct),Ha(n,o);c&&(Ha(n,Ct),r&&(r.svg&&n.removeAttribute("transform"),a.scale=a.rotate=a.translate="none",vo(n,1),r.uncache=1,lg(a)))}},Hl={clearProps:function(e,t,n,a,s){if(s.data!=="isFromStart"){var r=e._pt=new Ln(e._pt,t,n,0,0,P_);return r.u=a,r.pr=-10,r.tween=s,e._props.push(n),1}}},go=[1,0,0,1,0,0],hg={},pg=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},yh=function(e){var t=Zn(e,Ct);return pg(t)?go:t.substr(7).match(Mm).map(Ot)},mf=function(e,t){var n=e._gsap||vs(e),a=e.style,s=yh(e),r,o,c,l;return n.svg&&e.getAttribute("transform")?(c=e.transform.baseVal.consolidate().matrix,s=[c.a,c.b,c.c,c.d,c.e,c.f],s.join(",")==="1,0,0,1,0,0"?go:s):(s===go&&!e.offsetParent&&e!==or&&!n.svg&&(c=a.display,a.display="block",r=e.parentNode,(!r||!e.offsetParent&&!e.getBoundingClientRect().width)&&(l=1,o=e.nextElementSibling,or.appendChild(e)),s=yh(e),c?a.display=c:Ha(e,"display"),l&&(o?r.insertBefore(e,o):r?r.appendChild(e):or.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Jd=function(e,t,n,a,s,r){var o=e._gsap,c=s||mf(e,!0),l=o.xOrigin||0,d=o.yOrigin||0,f=o.xOffset||0,u=o.yOffset||0,h=c[0],v=c[1],m=c[2],p=c[3],g=c[4],y=c[5],T=t.split(" "),b=parseFloat(T[0])||0,S=parseFloat(T[1])||0,E,A,x,w;n?c!==go&&(A=h*p-v*m)&&(x=b*(p/A)+S*(-m/A)+(m*y-p*g)/A,w=b*(-v/A)+S*(h/A)-(h*y-v*g)/A,b=x,S=w):(E=ug(e),b=E.x+(~T[0].indexOf("%")?b/100*E.width:b),S=E.y+(~(T[1]||T[0]).indexOf("%")?S/100*E.height:S)),a||a!==!1&&o.smooth?(g=b-l,y=S-d,o.xOffset=f+(g*h+y*m)-g,o.yOffset=u+(g*v+y*p)-y):o.xOffset=o.yOffset=0,o.xOrigin=b,o.yOrigin=S,o.smooth=!!a,o.origin=t,o.originIsAbsolute=!!n,e.style[Cn]="0px 0px",r&&(La(r,o,"xOrigin",l,b),La(r,o,"yOrigin",d,S),La(r,o,"xOffset",f,o.xOffset),La(r,o,"yOffset",u,o.yOffset)),e.setAttribute("data-svg-origin",b+" "+S)},vo=function(e,t){var n=e._gsap||new Jm(e);if("x"in n&&!t&&!n.uncache)return n;var a=e.style,s=n.scaleX<0,r="px",o="deg",c=getComputedStyle(e),l=Zn(e,Cn)||"0",d,f,u,h,v,m,p,g,y,T,b,S,E,A,x,w,R,L,z,F,C,H,D,P,K,$,Q,te,ue,ke,Ne,De;return d=f=u=m=p=g=y=T=b=0,h=v=1,n.svg=!!(e.getCTM&&fg(e)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(a[Ct]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[Ct]!=="none"?c[Ct]:"")),a.scale=a.rotate=a.translate="none"),A=mf(e,n.svg),n.svg&&(n.uncache?(K=e.getBBox(),l=n.xOrigin-K.x+"px "+(n.yOrigin-K.y)+"px",P=""):P=!t&&e.getAttribute("data-svg-origin"),Jd(e,P||l,!!P||n.originIsAbsolute,n.smooth!==!1,A)),S=n.xOrigin||0,E=n.yOrigin||0,A!==go&&(L=A[0],z=A[1],F=A[2],C=A[3],d=H=A[4],f=D=A[5],A.length===6?(h=Math.sqrt(L*L+z*z),v=Math.sqrt(C*C+F*F),m=L||z?Ps(z,L)*ss:0,y=F||C?Ps(F,C)*ss+m:0,y&&(v*=Math.abs(Math.cos(y*lr))),n.svg&&(d-=S-(S*L+E*F),f-=E-(S*z+E*C))):(De=A[6],ke=A[7],Q=A[8],te=A[9],ue=A[10],Ne=A[11],d=A[12],f=A[13],u=A[14],x=Ps(De,ue),p=x*ss,x&&(w=Math.cos(-x),R=Math.sin(-x),P=H*w+Q*R,K=D*w+te*R,$=De*w+ue*R,Q=H*-R+Q*w,te=D*-R+te*w,ue=De*-R+ue*w,Ne=ke*-R+Ne*w,H=P,D=K,De=$),x=Ps(-F,ue),g=x*ss,x&&(w=Math.cos(-x),R=Math.sin(-x),P=L*w-Q*R,K=z*w-te*R,$=F*w-ue*R,Ne=C*R+Ne*w,L=P,z=K,F=$),x=Ps(z,L),m=x*ss,x&&(w=Math.cos(x),R=Math.sin(x),P=L*w+z*R,K=H*w+D*R,z=z*w-L*R,D=D*w-H*R,L=P,H=K),p&&Math.abs(p)+Math.abs(m)>359.9&&(p=m=0,g=180-g),h=Ot(Math.sqrt(L*L+z*z+F*F)),v=Ot(Math.sqrt(D*D+De*De)),x=Ps(H,D),y=Math.abs(x)>2e-4?x*ss:0,b=Ne?1/(Ne<0?-Ne:Ne):0),n.svg&&(P=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!pg(Zn(e,Ct)),P&&e.setAttribute("transform",P))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(h*=-1,y+=m<=0?180:-180,m+=m<=0?180:-180):(v*=-1,y+=y<=0?180:-180)),t=t||n.uncache,n.x=d-((n.xPercent=d&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-d)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+r,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+r,n.z=u+r,n.scaleX=Ot(h),n.scaleY=Ot(v),n.rotation=Ot(m)+o,n.rotationX=Ot(p)+o,n.rotationY=Ot(g)+o,n.skewX=y+o,n.skewY=T+o,n.transformPerspective=b+r,(n.zOrigin=parseFloat(l.split(" ")[2])||!t&&n.zOrigin||0)&&(a[Cn]=$l(l)),n.xOffset=n.yOffset=0,n.force3D=jn.force3D,n.renderTransform=n.svg?I_:dg?mg:D_,n.uncache=0,n},$l=function(e){return(e=e.split(" "))[0]+" "+e[1]},Hc=function(e,t,n){var a=hn(t);return Ot(parseFloat(t)+parseFloat($a(e,"x",n+"px",a)))+a},D_=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,mg(e,t)},Ya="0deg",Cr="0px",Za=") ",mg=function(e,t){var n=t||this,a=n.xPercent,s=n.yPercent,r=n.x,o=n.y,c=n.z,l=n.rotation,d=n.rotationY,f=n.rotationX,u=n.skewX,h=n.skewY,v=n.scaleX,m=n.scaleY,p=n.transformPerspective,g=n.force3D,y=n.target,T=n.zOrigin,b="",S=g==="auto"&&e&&e!==1||g===!0;if(T&&(f!==Ya||d!==Ya)){var E=parseFloat(d)*lr,A=Math.sin(E),x=Math.cos(E),w;E=parseFloat(f)*lr,w=Math.cos(E),r=Hc(y,r,A*w*-T),o=Hc(y,o,-Math.sin(E)*-T),c=Hc(y,c,x*w*-T+T)}p!==Cr&&(b+="perspective("+p+Za),(a||s)&&(b+="translate("+a+"%, "+s+"%) "),(S||r!==Cr||o!==Cr||c!==Cr)&&(b+=c!==Cr||S?"translate3d("+r+", "+o+", "+c+") ":"translate("+r+", "+o+Za),l!==Ya&&(b+="rotate("+l+Za),d!==Ya&&(b+="rotateY("+d+Za),f!==Ya&&(b+="rotateX("+f+Za),(u!==Ya||h!==Ya)&&(b+="skew("+u+", "+h+Za),(v!==1||m!==1)&&(b+="scale("+v+", "+m+Za),y.style[Ct]=b||"translate(0, 0)"},I_=function(e,t){var n=t||this,a=n.xPercent,s=n.yPercent,r=n.x,o=n.y,c=n.rotation,l=n.skewX,d=n.skewY,f=n.scaleX,u=n.scaleY,h=n.target,v=n.xOrigin,m=n.yOrigin,p=n.xOffset,g=n.yOffset,y=n.forceCSS,T=parseFloat(r),b=parseFloat(o),S,E,A,x,w;c=parseFloat(c),l=parseFloat(l),d=parseFloat(d),d&&(d=parseFloat(d),l+=d,c+=d),c||l?(c*=lr,l*=lr,S=Math.cos(c)*f,E=Math.sin(c)*f,A=Math.sin(c-l)*-u,x=Math.cos(c-l)*u,l&&(d*=lr,w=Math.tan(l-d),w=Math.sqrt(1+w*w),A*=w,x*=w,d&&(w=Math.tan(d),w=Math.sqrt(1+w*w),S*=w,E*=w)),S=Ot(S),E=Ot(E),A=Ot(A),x=Ot(x)):(S=f,x=u,E=A=0),(T&&!~(r+"").indexOf("px")||b&&!~(o+"").indexOf("px"))&&(T=$a(h,"x",r,"px"),b=$a(h,"y",o,"px")),(v||m||p||g)&&(T=Ot(T+v-(v*S+m*A)+p),b=Ot(b+m-(v*E+m*x)+g)),(a||s)&&(w=h.getBBox(),T=Ot(T+a/100*w.width),b=Ot(b+s/100*w.height)),w="matrix("+S+","+E+","+A+","+x+","+T+","+b+")",h.setAttribute("transform",w),y&&(h.style[Ct]=w)},z_=function(e,t,n,a,s){var r=360,o=en(s),c=parseFloat(s)*(o&&~s.indexOf("rad")?ss:1),l=c-a,d=a+l+"deg",f,u;return o&&(f=s.split("_")[1],f==="short"&&(l%=r,l!==l%(r/2)&&(l+=l<0?r:-r)),f==="cw"&&l<0?l=(l+r*hh)%r-~~(l/r)*r:f==="ccw"&&l>0&&(l=(l-r*hh)%r-~~(l/r)*r)),e._pt=u=new Ln(e._pt,t,n,a,l,v_),u.e=d,u.u="deg",e._props.push(n),u},xh=function(e,t){for(var n in t)e[n]=t[n];return e},U_=function(e,t,n){var a=xh({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",r=n.style,o,c,l,d,f,u,h,v;a.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),r[Ct]=t,o=vo(n,1),Ha(n,Ct),n.setAttribute("transform",l)):(l=getComputedStyle(n)[Ct],r[Ct]=t,o=vo(n,1),r[Ct]=l);for(c in ra)l=a[c],d=o[c],l!==d&&s.indexOf(c)<0&&(h=hn(l),v=hn(d),f=h!==v?$a(n,c,l,v):parseFloat(l),u=parseFloat(d),e._pt=new Ln(e._pt,o,c,f,u-f,Kd),e._pt.u=v||0,e._props.push(c));xh(o,a)};Rn("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",a="Bottom",s="Left",r=(e<3?[t,n,a,s]:[t+s,t+n,a+n,a+s]).map(function(o){return e<2?i+o:"border"+o+i});Hl[e>1?"border"+i:i]=function(o,c,l,d,f){var u,h;if(arguments.length<4)return u=r.map(function(v){return Qi(o,v,l)}),h=u.join(" "),h.split(u[0]).length===5?u[0]:h;u=(d+"").split(" "),h={},r.forEach(function(v,m){return h[v]=u[m]=u[m]||u[(m-1)/2|0]}),o.init(c,h,f)}});var gg={name:"css",register:Zd,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,a,s){var r=this._props,o=e.style,c=n.vars.startAt,l,d,f,u,h,v,m,p,g,y,T,b,S,E,A,x,w;ff||Zd(),this.styles=this.styles||cg(e),x=this.styles.props,this.tween=n;for(m in t)if(m!=="autoRound"&&(d=t[m],!($n[m]&&jm(m,t,n,a,e,s)))){if(h=typeof d,v=Hl[m],h==="function"&&(d=d.call(n,a,e,s),h=typeof d),h==="string"&&~d.indexOf("random(")&&(d=ho(d)),v)v(this,e,m,d,n)&&(A=1);else if(m.substr(0,2)==="--")l=(getComputedStyle(e).getPropertyValue(m)+"").trim(),d+="",Na.lastIndex=0,Na.test(l)||(p=hn(l),g=hn(d),g?p!==g&&(l=$a(e,m,l,g)+g):p&&(d+=p)),this.add(o,"setProperty",l,d,a,s,0,0,m),r.push(m),x.push(m,0,o[m]);else if(h!=="undefined"){if(c&&m in c?(l=typeof c[m]=="function"?c[m].call(n,a,e,s):c[m],en(l)&&~l.indexOf("random(")&&(l=ho(l)),hn(l+"")||l==="auto"||(l+=jn.units[m]||hn(Qi(e,m))||""),(l+"").charAt(1)==="="&&(l=Qi(e,m))):l=Qi(e,m),u=parseFloat(l),y=h==="string"&&d.charAt(1)==="="&&d.substr(0,2),y&&(d=d.substr(2)),f=parseFloat(d),m in zi&&(m==="autoAlpha"&&(u===1&&Qi(e,"visibility")==="hidden"&&f&&(u=0),x.push("visibility",0,o.visibility),La(this,o,"visibility",u?"inherit":"hidden",f?"inherit":"hidden",!f)),m!=="scale"&&m!=="transform"&&(m=zi[m],~m.indexOf(",")&&(m=m.split(",")[0]))),T=m in ra,T){if(this.styles.save(m),w=d,h==="string"&&d.substring(0,6)==="var(--"){if(d=Zn(e,d.substring(4,d.indexOf(")"))),d.substring(0,5)==="calc("){var R=e.style.perspective;e.style.perspective=d,d=Zn(e,"perspective"),R?e.style.perspective=R:Ha(e,"perspective")}f=parseFloat(d)}if(b||(S=e._gsap,S.renderTransform&&!t.parseTransform||vo(e,t.parseTransform),E=t.smoothOrigin!==!1&&S.smooth,b=this._pt=new Ln(this._pt,o,Ct,0,1,S.renderTransform,S,0,-1),b.dep=1),m==="scale")this._pt=new Ln(this._pt,S,"scaleY",S.scaleY,(y?rr(S.scaleY,y+f):f)-S.scaleY||0,Kd),this._pt.u=0,r.push("scaleY",m),m+="X";else if(m==="transformOrigin"){x.push(Cn,0,o[Cn]),d=C_(d),S.svg?Jd(e,d,0,E,0,this):(g=parseFloat(d.split(" ")[2])||0,g!==S.zOrigin&&La(this,S,"zOrigin",S.zOrigin,g),La(this,o,m,$l(l),$l(d)));continue}else if(m==="svgOrigin"){Jd(e,d,1,E,0,this);continue}else if(m in hg){z_(this,S,m,u,y?rr(u,y+d):d);continue}else if(m==="smoothOrigin"){La(this,S,"smooth",S.smooth,d);continue}else if(m==="force3D"){S[m]=d;continue}else if(m==="transform"){U_(this,d,e);continue}}else m in o||(m=yr(m)||m);if(T||(f||f===0)&&(u||u===0)&&!g_.test(d)&&m in o)p=(l+"").substr((u+"").length),f||(f=0),g=hn(d)||(m in jn.units?jn.units[m]:p),p!==g&&(u=$a(e,m,l,g)),this._pt=new Ln(this._pt,T?S:o,m,u,(y?rr(u,y+f):f)-u,!T&&(g==="px"||m==="zIndex")&&t.autoRound!==!1?x_:Kd),this._pt.u=g||0,T&&w!==d?(this._pt.b=l,this._pt.e=w,this._pt.r=y_):p!==g&&g!=="%"&&(this._pt.b=l,this._pt.r=__);else if(m in o)L_.call(this,e,m,l,y?y+d:d);else if(m in e)this.add(e,m,l||e[m],y?y+d:d,a,s);else if(m!=="parseTransform"){tf(m,d);continue}T||(m in o?x.push(m,0,o[m]):typeof e[m]=="function"?x.push(m,2,e[m]()):x.push(m,1,l||e[m])),r.push(m)}}A&&ag(this)},render:function(e,t){if(t.tween._time||!hf())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Qi,aliases:zi,getSetter:function(e,t,n){var a=zi[t];return a&&a.indexOf(",")<0&&(t=a),t in ra&&t!==Cn&&(e._gsap.x||Qi(e,"x"))?n&&fh===n?t==="scale"?M_:k_:(fh=n||{})&&(t==="scale"?E_:w_):e.style&&!ju(e.style[t])?b_:~t.indexOf("-")?S_:df(e,t)},core:{_removeProperty:Ha,_getMatrix:mf}};Nn.utils.checkPrefix=yr;Nn.core.getStyleSaver=cg;(function(i,e,t,n){var a=Rn(i+","+e+","+t,function(s){ra[s]=1});Rn(e,function(s){jn.units[s]="deg",hg[s]=1}),zi[a[13]]=i+","+e,Rn(n,function(s){var r=s.split(":");zi[r[1]]=a[r[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Rn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){jn.units[i]="px"});Nn.registerPlugin(gg);var oa=Nn.registerPlugin(gg)||Nn;oa.core.Tween;oa.matchMedia();function Lo(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}const bh=new WeakMap;function N_(i,e){const t=bh.get(i)??{current:i.textContent??"",tween:null};if(t.current===e)return;if(t.current=e,bh.set(i,t),Lo()){i.textContent=e;return}t.tween?.kill();const n=i.textContent??"";i.innerHTML="";const a=document.createElement("span");a.style.cssText="display:inline-block; position:relative; overflow:hidden; vertical-align:bottom;";const s=document.createElement("span");s.textContent=n,s.style.cssText="display:block;";const r=document.createElement("span");r.textContent=e,r.style.cssText="display:block; position:absolute; left:0; top:100%;",a.append(s,r),i.appendChild(a),t.tween=oa.to([s,r],{yPercent:-100,duration:.32,ease:"power2.out",onComplete:()=>{i.textContent=e,t.tween=null}})}function vg(i){if(Lo())return;const e=Array.from(i.children).slice(0,8);e.length&&oa.fromTo(e,{autoAlpha:0,y:10},{autoAlpha:1,y:0,duration:.34,ease:"power2.out",stagger:.045,overwrite:!0,clearProps:"transform"})}function gf(i){Lo()||!i.length||oa.fromTo(i,{autoAlpha:0,x:-8},{autoAlpha:1,x:0,duration:.28,ease:"power2.out",stagger:.03,overwrite:!0,clearProps:"transform"})}function vf(i){Lo()||oa.fromTo(i,{scale:1},{scale:.97,duration:.07,yoyo:!0,repeat:1,ease:"power1.inOut",overwrite:!0,clearProps:"scale"})}function O_(i,e){if(Lo()){e();return}oa.to(i,{autoAlpha:0,duration:.12,ease:"power1.in",onComplete:()=>{oa.set(i,{clearProps:"all"}),e()}})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _f="186",F_=0,Sh=1,B_=2,Ml=1,H_=2,Gr=3,bs=0,Pn=1,bi=2,na=0,no=1,kh=2,Mh=3,Eh=4,$_=5,Js=100,G_=101,V_=102,q_=103,W_=104,X_=200,K_=201,Y_=202,Z_=203,_g=204,yg=205,J_=206,j_=207,Q_=208,ey=209,ty=210,ny=211,iy=212,ay=213,sy=214,jd=0,Qd=1,eu=2,_o=3,tu=4,nu=5,iu=6,au=7,yf=0,ry=1,oy=2,Bi=0,xg=1,bg=2,Sg=3,kg=4,Mg=5,Eg=6,wg=7,Tg=300,Ss=301,xr=302,$c=303,Gc=304,hc=306,su=1e3,ea=1001,ru=1002,Xt=1003,ly=1004,Go=1005,tn=1006,Vc=1007,Ca=1008,Xn=1009,Ag=1010,Rg=1011,yo=1012,xf=1013,$i=1014,Ui=1015,Gi=1016,bf=1017,Sf=1018,xo=1020,Lg=35902,Cg=35899,Pg=1021,Dg=1022,ki=1023,la=1026,fs=1027,Ig=1028,kf=1029,ks=1030,Mf=1031,Ef=1033,El=33776,wl=33777,Tl=33778,Al=33779,ou=35840,lu=35841,cu=35842,du=35843,uu=36196,fu=37492,hu=37496,pu=37488,mu=37489,Gl=37490,gu=37491,vu=37808,_u=37809,yu=37810,xu=37811,bu=37812,Su=37813,ku=37814,Mu=37815,Eu=37816,wu=37817,Tu=37818,Au=37819,Ru=37820,Lu=37821,Cu=36492,Pu=36494,Du=36495,Iu=36283,zu=36284,Vl=36285,Uu=36286,cy=3200,Nu=0,dy=1,wa="",Gn="srgb",ql="srgb-linear",Wl="linear",ht="srgb",qc=7680,uy=519,fy=512,hy=513,py=514,wf=515,my=516,gy=517,Tf=518,vy=519,_y=35044,wh="300 es",Ni=2e3,bo=2001;function yy(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function So(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function xy(){const i=So("canvas");return i.style.display="block",i}const Th={};function Ah(...i){const e="THREE."+i.shift();console.log(e,...i)}function zg(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function $e(...i){i=zg(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function lt(...i){i=zg(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function cr(...i){const e=i.join(" ");e in Th||(Th[e]=!0,$e(...i))}function by(i,e,t){return new Promise(function(n,a){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:a();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Sy={[jd]:Qd,[eu]:iu,[tu]:au,[_o]:nu,[Qd]:jd,[iu]:eu,[au]:tu,[nu]:_o};class Ts{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const a=n[e];if(a!==void 0){const s=a.indexOf(t);s!==-1&&a.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const a=n.slice(0);for(let s=0,r=a.length;s<r;s++)a[s].call(this,e);e.target=null}}}const cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Rl=Math.PI/180,Ou=180/Math.PI;function Co(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[t&63|128]+cn[t>>8&255]+"-"+cn[t>>16&255]+cn[t>>24&255]+cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]).toLowerCase()}function nt(i,e,t){return Math.max(e,Math.min(t,i))}function ky(i,e){return(i%e+e)%e}function Wc(i,e,t){return(1-t)*i+t*e}function My(i){return i*Rl}function Pr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Sn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Ey={degToRad:My};class at{static{at.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6],this.y=a[1]*t+a[4]*n+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),a=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*n-r*a+e.x,this.y=s*a+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class kr{constructor(e=0,t=0,n=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=a}static slerpFlat(e,t,n,a,s,r,o){let c=n[a+0],l=n[a+1],d=n[a+2],f=n[a+3],u=s[r+0],h=s[r+1],v=s[r+2],m=s[r+3];if(f!==m||c!==u||l!==h||d!==v){let p=c*u+l*h+d*v+f*m;p<0&&(u=-u,h=-h,v=-v,m=-m,p=-p);let g=1-o;if(p<.9995){const y=Math.acos(p),T=Math.sin(y);g=Math.sin(g*y)/T,o=Math.sin(o*y)/T,c=c*g+u*o,l=l*g+h*o,d=d*g+v*o,f=f*g+m*o}else{c=c*g+u*o,l=l*g+h*o,d=d*g+v*o,f=f*g+m*o;const y=1/Math.sqrt(c*c+l*l+d*d+f*f);c*=y,l*=y,d*=y,f*=y}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,a,s,r){const o=n[a],c=n[a+1],l=n[a+2],d=n[a+3],f=s[r],u=s[r+1],h=s[r+2],v=s[r+3];return e[t]=o*v+d*f+c*h-l*u,e[t+1]=c*v+d*u+l*f-o*h,e[t+2]=l*v+d*h+o*u-c*f,e[t+3]=d*v-o*f-c*u-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,a){return this._x=e,this._y=t,this._z=n,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,a=e._y,s=e._z,r=e._order,o=Math.cos,c=Math.sin,l=o(n/2),d=o(a/2),f=o(s/2),u=c(n/2),h=c(a/2),v=c(s/2);switch(r){case"XYZ":this._x=u*d*f+l*h*v,this._y=l*h*f-u*d*v,this._z=l*d*v+u*h*f,this._w=l*d*f-u*h*v;break;case"YXZ":this._x=u*d*f+l*h*v,this._y=l*h*f-u*d*v,this._z=l*d*v-u*h*f,this._w=l*d*f+u*h*v;break;case"ZXY":this._x=u*d*f-l*h*v,this._y=l*h*f+u*d*v,this._z=l*d*v+u*h*f,this._w=l*d*f-u*h*v;break;case"ZYX":this._x=u*d*f-l*h*v,this._y=l*h*f+u*d*v,this._z=l*d*v-u*h*f,this._w=l*d*f+u*h*v;break;case"YZX":this._x=u*d*f+l*h*v,this._y=l*h*f+u*d*v,this._z=l*d*v-u*h*f,this._w=l*d*f-u*h*v;break;case"XZY":this._x=u*d*f-l*h*v,this._y=l*h*f-u*d*v,this._z=l*d*v+u*h*f,this._w=l*d*f+u*h*v;break;default:$e("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,a=Math.sin(n);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],a=t[4],s=t[8],r=t[1],o=t[5],c=t[9],l=t[2],d=t[6],f=t[10],u=n+o+f;if(u>0){const h=.5/Math.sqrt(u+1);this._w=.25/h,this._x=(d-c)*h,this._y=(s-l)*h,this._z=(r-a)*h}else if(n>o&&n>f){const h=2*Math.sqrt(1+n-o-f);this._w=(d-c)/h,this._x=.25*h,this._y=(a+r)/h,this._z=(s+l)/h}else if(o>f){const h=2*Math.sqrt(1+o-n-f);this._w=(s-l)/h,this._x=(a+r)/h,this._y=.25*h,this._z=(c+d)/h}else{const h=2*Math.sqrt(1+f-n-o);this._w=(r-a)/h,this._x=(s+l)/h,this._y=(c+d)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const a=Math.min(1,t/n);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,a=e._y,s=e._z,r=e._w,o=t._x,c=t._y,l=t._z,d=t._w;return this._x=n*d+r*o+a*l-s*c,this._y=a*d+r*c+s*o-n*l,this._z=s*d+r*l+n*c-a*o,this._w=r*d-n*o-a*c-s*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,a=e._y,s=e._z,r=e._w,o=this.dot(e);o<0&&(n=-n,a=-a,s=-s,r=-r,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),d=Math.sin(l);c=Math.sin(c*l)/d,t=Math.sin(t*l)/d,this._x=this._x*c+n*t,this._y=this._y*c+a*t,this._z=this._z*c+s*t,this._w=this._w*c+r*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+a*t,this._z=this._z*c+s*t,this._w=this._w*c+r*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),a=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(a*Math.sin(e),a*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{static{X.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*a,this.y=s[1]*t+s[4]*n+s[7]*a,this.z=s[2]*t+s[5]*n+s[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,a=this.z,s=e.elements,r=1/(s[3]*t+s[7]*n+s[11]*a+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*a+s[12])*r,this.y=(s[1]*t+s[5]*n+s[9]*a+s[13])*r,this.z=(s[2]*t+s[6]*n+s[10]*a+s[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,a=this.z,s=e.x,r=e.y,o=e.z,c=e.w,l=2*(r*a-o*n),d=2*(o*t-s*a),f=2*(s*n-r*t);return this.x=t+c*l+r*f-o*d,this.y=n+c*d+o*l-s*f,this.z=a+c*f+s*d-r*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*a,this.y=s[1]*t+s[5]*n+s[9]*a,this.z=s[2]*t+s[6]*n+s[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,a=e.y,s=e.z,r=t.x,o=t.y,c=t.z;return this.x=a*c-s*o,this.y=s*r-n*c,this.z=n*o-a*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Xc.copy(this).projectOnVector(e),this.sub(Xc)}reflect(e){return this.sub(Xc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,a=this.z-e.z;return t*t+n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const a=Math.sin(t)*e;return this.x=a*Math.sin(n),this.y=Math.cos(t)*e,this.z=a*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xc=new X,Rh=new kr;class qe{static{qe.prototype.isMatrix3=!0}constructor(e,t,n,a,s,r,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,a,s,r,o,c,l)}set(e,t,n,a,s,r,o,c,l){const d=this.elements;return d[0]=e,d[1]=a,d[2]=o,d[3]=t,d[4]=s,d[5]=c,d[6]=n,d[7]=r,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,a=t.elements,s=this.elements,r=n[0],o=n[3],c=n[6],l=n[1],d=n[4],f=n[7],u=n[2],h=n[5],v=n[8],m=a[0],p=a[3],g=a[6],y=a[1],T=a[4],b=a[7],S=a[2],E=a[5],A=a[8];return s[0]=r*m+o*y+c*S,s[3]=r*p+o*T+c*E,s[6]=r*g+o*b+c*A,s[1]=l*m+d*y+f*S,s[4]=l*p+d*T+f*E,s[7]=l*g+d*b+f*A,s[2]=u*m+h*y+v*S,s[5]=u*p+h*T+v*E,s[8]=u*g+h*b+v*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],a=e[2],s=e[3],r=e[4],o=e[5],c=e[6],l=e[7],d=e[8];return t*r*d-t*o*l-n*s*d+n*o*c+a*s*l-a*r*c}invert(){const e=this.elements,t=e[0],n=e[1],a=e[2],s=e[3],r=e[4],o=e[5],c=e[6],l=e[7],d=e[8],f=d*r-o*l,u=o*c-d*s,h=l*s-r*c,v=t*f+n*u+a*h;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/v;return e[0]=f*m,e[1]=(a*l-d*n)*m,e[2]=(o*n-a*r)*m,e[3]=u*m,e[4]=(d*t-a*c)*m,e[5]=(a*s-o*t)*m,e[6]=h*m,e[7]=(n*c-l*t)*m,e[8]=(r*t-n*s)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,a,s,r,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*r+l*o)+r+e,-a*l,a*c,-a*(-l*r+c*o)+o+t,0,0,1),this}scale(e,t){return cr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Kc.makeScale(e,t)),this}rotate(e){return cr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Kc.makeRotation(-e)),this}translate(e,t){return cr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Kc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let a=0;a<9;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Kc=new qe,Lh=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ch=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wy(){const i={enabled:!0,workingColorSpace:ql,spaces:{},convert:function(a,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===ht&&(a.r=ia(a.r),a.g=ia(a.g),a.b=ia(a.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(a.applyMatrix3(this.spaces[s].toXYZ),a.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===ht&&(a.r=dr(a.r),a.g=dr(a.g),a.b=dr(a.b))),a},workingToColorSpace:function(a,s){return this.convert(a,this.workingColorSpace,s)},colorSpaceToWorking:function(a,s){return this.convert(a,s,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===wa?Wl:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,s=this.workingColorSpace){return a.fromArray(this.spaces[s].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,s,r){return a.copy(this.spaces[s].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,s){return cr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(a,s)},toWorkingColorSpace:function(a,s){return cr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(a,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ql]:{primaries:e,whitePoint:n,transfer:Wl,toXYZ:Lh,fromXYZ:Ch,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Gn},outputColorSpaceConfig:{drawingBufferColorSpace:Gn}},[Gn]:{primaries:e,whitePoint:n,transfer:ht,toXYZ:Lh,fromXYZ:Ch,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Gn}}}),i}const tt=wy();function ia(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function dr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ds;class Ty{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ds===void 0&&(Ds=So("canvas")),Ds.width=e.width,Ds.height=e.height;const a=Ds.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),n=Ds}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=So("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const a=n.getImageData(0,0,e.width,e.height),s=a.data;for(let r=0;r<s.length;r++)s[r]=ia(s[r]/255)*255;return n.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ia(t[n]/255)*255):t[n]=ia(t[n]);return{data:t,width:e.width,height:e.height}}else return $e("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ay=0;class Af{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ay++}),this.uuid=Co(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let r=0,o=a.length;r<o;r++)a[r].isDataTexture?s.push(Yc(a[r].image)):s.push(Yc(a[r]))}else s=Yc(a);n.url=s}return t||(e.images[this.uuid]=n),n}}function Yc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ty.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:($e("Texture: Unable to serialize Texture."),{})}let Ry=0;const Zc=new X;class an extends Ts{constructor(e=an.DEFAULT_IMAGE,t=an.DEFAULT_MAPPING,n=ea,a=ea,s=tn,r=Ca,o=ki,c=Xn,l=an.DEFAULT_ANISOTROPY,d=wa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ry++}),this.uuid=Co(),this.name="",this.source=new Af(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=a,this.magFilter=s,this.minFilter=r,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Zc).x}get height(){return this.source.getSize(Zc).y}get depth(){return this.source.getSize(Zc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){$e(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){$e(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&n&&a.isVector2&&n.isVector2||a&&n&&a.isVector3&&n.isVector3||a&&n&&a.isMatrix3&&n.isMatrix3?a.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Tg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case su:e.x=e.x-Math.floor(e.x);break;case ea:e.x=e.x<0?0:1;break;case ru:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case su:e.y=e.y-Math.floor(e.y);break;case ea:e.y=e.y<0?0:1;break;case ru:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=Tg;an.DEFAULT_ANISOTROPY=1;class Pt{static{Pt.prototype.isVector4=!0}constructor(e=0,t=0,n=0,a=1){this.x=e,this.y=t,this.z=n,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,a){return this.x=e,this.y=t,this.z=n,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,a=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*a+r[12]*s,this.y=r[1]*t+r[5]*n+r[9]*a+r[13]*s,this.z=r[2]*t+r[6]*n+r[10]*a+r[14]*s,this.w=r[3]*t+r[7]*n+r[11]*a+r[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,a,s;const c=e.elements,l=c[0],d=c[4],f=c[8],u=c[1],h=c[5],v=c[9],m=c[2],p=c[6],g=c[10];if(Math.abs(d-u)<.01&&Math.abs(f-m)<.01&&Math.abs(v-p)<.01){if(Math.abs(d+u)<.1&&Math.abs(f+m)<.1&&Math.abs(v+p)<.1&&Math.abs(l+h+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(l+1)/2,b=(h+1)/2,S=(g+1)/2,E=(d+u)/4,A=(f+m)/4,x=(v+p)/4;return T>b&&T>S?T<.01?(n=0,a=.707106781,s=.707106781):(n=Math.sqrt(T),a=E/n,s=A/n):b>S?b<.01?(n=.707106781,a=0,s=.707106781):(a=Math.sqrt(b),n=E/a,s=x/a):S<.01?(n=.707106781,a=.707106781,s=0):(s=Math.sqrt(S),n=A/s,a=x/s),this.set(n,a,s,t),this}let y=Math.sqrt((p-v)*(p-v)+(f-m)*(f-m)+(u-d)*(u-d));return Math.abs(y)<.001&&(y=1),this.x=(p-v)/y,this.y=(f-m)/y,this.z=(u-d)/y,this.w=Math.acos((l+h+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this.w=nt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this.w=nt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ly extends Ts{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t),this.textures=[];const a={width:e,height:t,depth:n.depth},s=new an(a),r=n.count;for(let o=0;o<r;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:tn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let a=0,s=this.textures.length;a<s;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=n,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new Af(a)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mi extends Ly{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ug extends an{constructor(e=null,t=1,n=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=ea,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Cy extends an{constructor(e=null,t=1,n=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=ea,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class wt{static{wt.prototype.isMatrix4=!0}constructor(e,t,n,a,s,r,o,c,l,d,f,u,h,v,m,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,a,s,r,o,c,l,d,f,u,h,v,m,p)}set(e,t,n,a,s,r,o,c,l,d,f,u,h,v,m,p){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=a,g[1]=s,g[5]=r,g[9]=o,g[13]=c,g[2]=l,g[6]=d,g[10]=f,g[14]=u,g[3]=h,g[7]=v,g[11]=m,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,a=1/Is.setFromMatrixColumn(e,0).length(),s=1/Is.setFromMatrixColumn(e,1).length(),r=1/Is.setFromMatrixColumn(e,2).length();return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,a=e.y,s=e.z,r=Math.cos(n),o=Math.sin(n),c=Math.cos(a),l=Math.sin(a),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const u=r*d,h=r*f,v=o*d,m=o*f;t[0]=c*d,t[4]=-c*f,t[8]=l,t[1]=h+v*l,t[5]=u-m*l,t[9]=-o*c,t[2]=m-u*l,t[6]=v+h*l,t[10]=r*c}else if(e.order==="YXZ"){const u=c*d,h=c*f,v=l*d,m=l*f;t[0]=u+m*o,t[4]=v*o-h,t[8]=r*l,t[1]=r*f,t[5]=r*d,t[9]=-o,t[2]=h*o-v,t[6]=m+u*o,t[10]=r*c}else if(e.order==="ZXY"){const u=c*d,h=c*f,v=l*d,m=l*f;t[0]=u-m*o,t[4]=-r*f,t[8]=v+h*o,t[1]=h+v*o,t[5]=r*d,t[9]=m-u*o,t[2]=-r*l,t[6]=o,t[10]=r*c}else if(e.order==="ZYX"){const u=r*d,h=r*f,v=o*d,m=o*f;t[0]=c*d,t[4]=v*l-h,t[8]=u*l+m,t[1]=c*f,t[5]=m*l+u,t[9]=h*l-v,t[2]=-l,t[6]=o*c,t[10]=r*c}else if(e.order==="YZX"){const u=r*c,h=r*l,v=o*c,m=o*l;t[0]=c*d,t[4]=m-u*f,t[8]=v*f+h,t[1]=f,t[5]=r*d,t[9]=-o*d,t[2]=-l*d,t[6]=h*f+v,t[10]=u-m*f}else if(e.order==="XZY"){const u=r*c,h=r*l,v=o*c,m=o*l;t[0]=c*d,t[4]=-f,t[8]=l*d,t[1]=u*f+m,t[5]=r*d,t[9]=h*f-v,t[2]=v*f-h,t[6]=o*d,t[10]=m*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Py,e,Dy)}lookAt(e,t,n){const a=this.elements;return On.subVectors(e,t),On.lengthSq()===0&&(On.z=1),On.normalize(),ga.crossVectors(n,On),ga.lengthSq()===0&&(Math.abs(n.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),ga.crossVectors(n,On)),ga.normalize(),Vo.crossVectors(On,ga),a[0]=ga.x,a[4]=Vo.x,a[8]=On.x,a[1]=ga.y,a[5]=Vo.y,a[9]=On.y,a[2]=ga.z,a[6]=Vo.z,a[10]=On.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,a=t.elements,s=this.elements,r=n[0],o=n[4],c=n[8],l=n[12],d=n[1],f=n[5],u=n[9],h=n[13],v=n[2],m=n[6],p=n[10],g=n[14],y=n[3],T=n[7],b=n[11],S=n[15],E=a[0],A=a[4],x=a[8],w=a[12],R=a[1],L=a[5],z=a[9],F=a[13],C=a[2],H=a[6],D=a[10],P=a[14],K=a[3],$=a[7],Q=a[11],te=a[15];return s[0]=r*E+o*R+c*C+l*K,s[4]=r*A+o*L+c*H+l*$,s[8]=r*x+o*z+c*D+l*Q,s[12]=r*w+o*F+c*P+l*te,s[1]=d*E+f*R+u*C+h*K,s[5]=d*A+f*L+u*H+h*$,s[9]=d*x+f*z+u*D+h*Q,s[13]=d*w+f*F+u*P+h*te,s[2]=v*E+m*R+p*C+g*K,s[6]=v*A+m*L+p*H+g*$,s[10]=v*x+m*z+p*D+g*Q,s[14]=v*w+m*F+p*P+g*te,s[3]=y*E+T*R+b*C+S*K,s[7]=y*A+T*L+b*H+S*$,s[11]=y*x+T*z+b*D+S*Q,s[15]=y*w+T*F+b*P+S*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],a=e[8],s=e[12],r=e[1],o=e[5],c=e[9],l=e[13],d=e[2],f=e[6],u=e[10],h=e[14],v=e[3],m=e[7],p=e[11],g=e[15],y=c*h-l*u,T=o*h-l*f,b=o*u-c*f,S=r*h-l*d,E=r*u-c*d,A=r*f-o*d;return t*(m*y-p*T+g*b)-n*(v*y-p*S+g*E)+a*(v*T-m*S+g*A)-s*(v*b-m*E+p*A)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],a=e[8],s=e[1],r=e[5],o=e[9],c=e[2],l=e[6],d=e[10];return t*(r*d-o*l)-n*(s*d-o*c)+a*(s*l-r*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],a=e[2],s=e[3],r=e[4],o=e[5],c=e[6],l=e[7],d=e[8],f=e[9],u=e[10],h=e[11],v=e[12],m=e[13],p=e[14],g=e[15],y=t*o-n*r,T=t*c-a*r,b=t*l-s*r,S=n*c-a*o,E=n*l-s*o,A=a*l-s*c,x=d*m-f*v,w=d*p-u*v,R=d*g-h*v,L=f*p-u*m,z=f*g-h*m,F=u*g-h*p,C=y*F-T*z+b*L+S*R-E*w+A*x;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/C;return e[0]=(o*F-c*z+l*L)*H,e[1]=(a*z-n*F-s*L)*H,e[2]=(m*A-p*E+g*S)*H,e[3]=(u*E-f*A-h*S)*H,e[4]=(c*R-r*F-l*w)*H,e[5]=(t*F-a*R+s*w)*H,e[6]=(p*b-v*A-g*T)*H,e[7]=(d*A-u*b+h*T)*H,e[8]=(r*z-o*R+l*x)*H,e[9]=(n*R-t*z-s*x)*H,e[10]=(v*E-m*b+g*y)*H,e[11]=(f*b-d*E-h*y)*H,e[12]=(o*w-r*L-c*x)*H,e[13]=(t*L-n*w+a*x)*H,e[14]=(m*T-v*S-p*y)*H,e[15]=(d*S-f*T+u*y)*H,this}scale(e){const t=this.elements,n=e.x,a=e.y,s=e.z;return t[0]*=n,t[4]*=a,t[8]*=s,t[1]*=n,t[5]*=a,t[9]*=s,t[2]*=n,t[6]*=a,t[10]*=s,t[3]*=n,t[7]*=a,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,a))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),a=Math.sin(t),s=1-n,r=e.x,o=e.y,c=e.z,l=s*r,d=s*o;return this.set(l*r+n,l*o-a*c,l*c+a*o,0,l*o+a*c,d*o+n,d*c-a*r,0,l*c-a*o,d*c+a*r,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,a,s,r){return this.set(1,n,s,0,e,1,r,0,t,a,1,0,0,0,0,1),this}compose(e,t,n){const a=this.elements,s=t._x,r=t._y,o=t._z,c=t._w,l=s+s,d=r+r,f=o+o,u=s*l,h=s*d,v=s*f,m=r*d,p=r*f,g=o*f,y=c*l,T=c*d,b=c*f,S=n.x,E=n.y,A=n.z;return a[0]=(1-(m+g))*S,a[1]=(h+b)*S,a[2]=(v-T)*S,a[3]=0,a[4]=(h-b)*E,a[5]=(1-(u+g))*E,a[6]=(p+y)*E,a[7]=0,a[8]=(v+T)*A,a[9]=(p-y)*A,a[10]=(1-(u+m))*A,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,n){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let r=Is.set(a[0],a[1],a[2]).length();const o=Is.set(a[4],a[5],a[6]).length(),c=Is.set(a[8],a[9],a[10]).length();s<0&&(r=-r),mi.copy(this);const l=1/r,d=1/o,f=1/c;return mi.elements[0]*=l,mi.elements[1]*=l,mi.elements[2]*=l,mi.elements[4]*=d,mi.elements[5]*=d,mi.elements[6]*=d,mi.elements[8]*=f,mi.elements[9]*=f,mi.elements[10]*=f,t.setFromRotationMatrix(mi),n.x=r,n.y=o,n.z=c,this}makePerspective(e,t,n,a,s,r,o=Ni,c=!1){const l=this.elements,d=2*s/(t-e),f=2*s/(n-a),u=(t+e)/(t-e),h=(n+a)/(n-a);let v,m;if(c)v=s/(r-s),m=r*s/(r-s);else if(o===Ni)v=-(r+s)/(r-s),m=-2*r*s/(r-s);else if(o===bo)v=-r/(r-s),m=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=v,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,a,s,r,o=Ni,c=!1){const l=this.elements,d=2/(t-e),f=2/(n-a),u=-(t+e)/(t-e),h=-(n+a)/(n-a);let v,m;if(c)v=1/(r-s),m=r/(r-s);else if(o===Ni)v=-2/(r-s),m=-(r+s)/(r-s);else if(o===bo)v=-1/(r-s),m=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=f,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=v,l[14]=m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let a=0;a<16;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Is=new X,mi=new wt,Py=new X(0,0,0),Dy=new X(1,1,1),ga=new X,Vo=new X,On=new X,Ph=new wt,Dh=new kr;class Ga{constructor(e=0,t=0,n=0,a=Ga.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,a=this._order){return this._x=e,this._y=t,this._z=n,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const a=e.elements,s=a[0],r=a[4],o=a[8],c=a[1],l=a[5],d=a[9],f=a[2],u=a[6],h=a[10];switch(t){case"XYZ":this._y=Math.asin(nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,h),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(nt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-nt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,h),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(nt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-nt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,h),this._y=0);break;default:$e("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ph.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ph,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Dh.setFromEuler(this),this.setFromQuaternion(Dh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ga.DEFAULT_ORDER="XYZ";class Rf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Iy=0;const Ih=new X,zs=new kr,qi=new wt,qo=new X,Dr=new X,zy=new X,Uy=new kr,zh=new X(1,0,0),Uh=new X(0,1,0),Nh=new X(0,0,1),Oh={type:"added"},Ny={type:"removed"},Us={type:"childadded",child:null},Jc={type:"childremoved",child:null};class sn extends Ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Iy++}),this.uuid=Co(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=sn.DEFAULT_UP.clone();const e=new X,t=new Ga,n=new kr,a=new X(1,1,1);function s(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new wt},normalMatrix:{value:new qe}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zs.setFromAxisAngle(e,t),this.quaternion.multiply(zs),this}rotateOnWorldAxis(e,t){return zs.setFromAxisAngle(e,t),this.quaternion.premultiply(zs),this}rotateX(e){return this.rotateOnAxis(zh,e)}rotateY(e){return this.rotateOnAxis(Uh,e)}rotateZ(e){return this.rotateOnAxis(Nh,e)}translateOnAxis(e,t){return Ih.copy(e).applyQuaternion(this.quaternion),this.position.add(Ih.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zh,e)}translateY(e){return this.translateOnAxis(Uh,e)}translateZ(e){return this.translateOnAxis(Nh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?qo.copy(e):qo.set(e,t,n);const a=this.parent;this.updateWorldMatrix(!0,!1),Dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qi.lookAt(Dr,qo,this.up):qi.lookAt(qo,Dr,this.up),this.quaternion.setFromRotationMatrix(qi),a&&(qi.extractRotation(a.matrixWorld),zs.setFromRotationMatrix(qi),this.quaternion.premultiply(zs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(lt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Oh),Us.child=e,this.dispatchEvent(Us),Us.child=null):lt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ny),Jc.child=e,this.dispatchEvent(Jc),Jc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(qi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Oh),Us.child=e,this.dispatchEvent(Us),Us.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,a=this.children.length;n<a;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dr,e,zy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dr,Uy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,a=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*a,s[13]+=n-s[1]*t-s[5]*n-s[9]*a,s[14]+=a-s[2]*t-s[6]*n-s[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));a.material=o}else a.material=s(e.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];a.animations.push(s(e.animations,c))}}if(t){const o=r(e.geometries),c=r(e.materials),l=r(e.textures),d=r(e.images),f=r(e.shapes),u=r(e.skeletons),h=r(e.animations),v=r(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),h.length>0&&(n.animations=h),v.length>0&&(n.nodes=v)}return n.object=a,n;function r(o){const c=[];for(const l in o){const d=o[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const a=e.children[n];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}sn.DEFAULT_UP=new X(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Jt extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Oy={type:"move"};class jc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let a=null,s=null,r=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){r=!0;for(const m of e.hand.values()){const p=t.getJointPose(m,n),g=this._getHandJoint(l,m);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const d=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=d.position.distanceTo(f.position),h=.02,v=.005;l.inputState.pinching&&u>h+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=h-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(a=t.getPose(e.targetRaySpace,n),a===null&&s!==null&&(a=s),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Oy)))}return o!==null&&(o.visible=a!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Jt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Ng={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},va={h:0,s:0,l:0},Wo={h:0,s:0,l:0};function Qc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class rt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,a=tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,tt.colorSpaceToWorking(this,a),this}setHSL(e,t,n,a=tt.workingColorSpace){if(e=ky(e,1),t=nt(t,0,1),n=nt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,r=2*n-s;this.r=Qc(r,s,e+1/3),this.g=Qc(r,s,e),this.b=Qc(r,s,e-1/3)}return tt.colorSpaceToWorking(this,a),this}setStyle(e,t=Gn){function n(s){s!==void 0&&parseFloat(s)<1&&$e("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const r=a[1],o=a[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:$e("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=a[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(s,16),t);$e("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gn){const n=Ng[e.toLowerCase()];return n!==void 0?this.setHex(n,t):$e("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ia(e.r),this.g=ia(e.g),this.b=ia(e.b),this}copyLinearToSRGB(e){return this.r=dr(e.r),this.g=dr(e.g),this.b=dr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gn){return tt.workingToColorSpace(dn.copy(this),e),Math.round(nt(dn.r*255,0,255))*65536+Math.round(nt(dn.g*255,0,255))*256+Math.round(nt(dn.b*255,0,255))}getHexString(e=Gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.workingToColorSpace(dn.copy(this),t);const n=dn.r,a=dn.g,s=dn.b,r=Math.max(n,a,s),o=Math.min(n,a,s);let c,l;const d=(o+r)/2;if(o===r)c=0,l=0;else{const f=r-o;switch(l=d<=.5?f/(r+o):f/(2-r-o),r){case n:c=(a-s)/f+(a<s?6:0);break;case a:c=(s-n)/f+2;break;case s:c=(n-a)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=tt.workingColorSpace){return tt.workingToColorSpace(dn.copy(this),t),e.r=dn.r,e.g=dn.g,e.b=dn.b,e}getStyle(e=Gn){tt.workingToColorSpace(dn.copy(this),e);const t=dn.r,n=dn.g,a=dn.b;return e!==Gn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(a*255)})`}offsetHSL(e,t,n){return this.getHSL(va),this.setHSL(va.h+e,va.s+t,va.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(va),e.getHSL(Wo);const n=Wc(va.h,Wo.h,t),a=Wc(va.s,Wo.s,t),s=Wc(va.l,Wo.l,t);return this.setHSL(n,a,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,a=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*a,this.g=s[1]*t+s[4]*n+s[7]*a,this.b=s[2]*t+s[5]*n+s[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const dn=new rt;rt.NAMES=Ng;class Fy extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ga,this.environmentIntensity=1,this.environmentRotation=new Ga,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const gi=new X,Wi=new X,ed=new X,Xi=new X,Ns=new X,Os=new X,Fh=new X,td=new X,nd=new X,id=new X,ad=new Pt,sd=new Pt,rd=new Pt;class Si{constructor(e=new X,t=new X,n=new X){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,a){a.subVectors(n,t),gi.subVectors(e,t),a.cross(gi);const s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(e,t,n,a,s){gi.subVectors(a,t),Wi.subVectors(n,t),ed.subVectors(e,t);const r=gi.dot(gi),o=gi.dot(Wi),c=gi.dot(ed),l=Wi.dot(Wi),d=Wi.dot(ed),f=r*l-o*o;if(f===0)return s.set(0,0,0),null;const u=1/f,h=(l*c-o*d)*u,v=(r*d-o*c)*u;return s.set(1-h-v,v,h)}static containsPoint(e,t,n,a){return this.getBarycoord(e,t,n,a,Xi)===null?!1:Xi.x>=0&&Xi.y>=0&&Xi.x+Xi.y<=1}static getInterpolation(e,t,n,a,s,r,o,c){return this.getBarycoord(e,t,n,a,Xi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Xi.x),c.addScaledVector(r,Xi.y),c.addScaledVector(o,Xi.z),c)}static getInterpolatedAttribute(e,t,n,a,s,r){return ad.setScalar(0),sd.setScalar(0),rd.setScalar(0),ad.fromBufferAttribute(e,t),sd.fromBufferAttribute(e,n),rd.fromBufferAttribute(e,a),r.setScalar(0),r.addScaledVector(ad,s.x),r.addScaledVector(sd,s.y),r.addScaledVector(rd,s.z),r}static isFrontFacing(e,t,n,a){return gi.subVectors(n,t),Wi.subVectors(e,t),gi.cross(Wi).dot(a)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,a){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,n,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gi.subVectors(this.c,this.b),Wi.subVectors(this.a,this.b),gi.cross(Wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Si.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,a,s){return Si.getInterpolation(e,this.a,this.b,this.c,t,n,a,s)}containsPoint(e){return Si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,a=this.b,s=this.c;let r,o;Ns.subVectors(a,n),Os.subVectors(s,n),td.subVectors(e,n);const c=Ns.dot(td),l=Os.dot(td);if(c<=0&&l<=0)return t.copy(n);nd.subVectors(e,a);const d=Ns.dot(nd),f=Os.dot(nd);if(d>=0&&f<=d)return t.copy(a);const u=c*f-d*l;if(u<=0&&c>=0&&d<=0)return r=c/(c-d),t.copy(n).addScaledVector(Ns,r);id.subVectors(e,s);const h=Ns.dot(id),v=Os.dot(id);if(v>=0&&h<=v)return t.copy(s);const m=h*l-c*v;if(m<=0&&l>=0&&v<=0)return o=l/(l-v),t.copy(n).addScaledVector(Os,o);const p=d*v-h*f;if(p<=0&&f-d>=0&&h-v>=0)return Fh.subVectors(s,a),o=(f-d)/(f-d+(h-v)),t.copy(a).addScaledVector(Fh,o);const g=1/(p+m+u);return r=m*g,o=u*g,t.copy(n).addScaledVector(Ns,r).addScaledVector(Os,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Po{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(vi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(vi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=vi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,vi):vi.fromBufferAttribute(s,r),vi.applyMatrix4(e.matrixWorld),this.expandByPoint(vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xo.copy(n.boundingBox)),Xo.applyMatrix4(e.matrixWorld),this.union(Xo)}const a=e.children;for(let s=0,r=a.length;s<r;s++)this.expandByObject(a[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ir),Ko.subVectors(this.max,Ir),Fs.subVectors(e.a,Ir),Bs.subVectors(e.b,Ir),Hs.subVectors(e.c,Ir),_a.subVectors(Bs,Fs),ya.subVectors(Hs,Bs),Ja.subVectors(Fs,Hs);let t=[0,-_a.z,_a.y,0,-ya.z,ya.y,0,-Ja.z,Ja.y,_a.z,0,-_a.x,ya.z,0,-ya.x,Ja.z,0,-Ja.x,-_a.y,_a.x,0,-ya.y,ya.x,0,-Ja.y,Ja.x,0];return!od(t,Fs,Bs,Hs,Ko)||(t=[1,0,0,0,1,0,0,0,1],!od(t,Fs,Bs,Hs,Ko))?!1:(Yo.crossVectors(_a,ya),t=[Yo.x,Yo.y,Yo.z],od(t,Fs,Bs,Hs,Ko))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ki=[new X,new X,new X,new X,new X,new X,new X,new X],vi=new X,Xo=new Po,Fs=new X,Bs=new X,Hs=new X,_a=new X,ya=new X,Ja=new X,Ir=new X,Ko=new X,Yo=new X,ja=new X;function od(i,e,t,n,a){for(let s=0,r=i.length-3;s<=r;s+=3){ja.fromArray(i,s);const o=a.x*Math.abs(ja.x)+a.y*Math.abs(ja.y)+a.z*Math.abs(ja.z),c=e.dot(ja),l=t.dot(ja),d=n.dot(ja);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>o)return!1}return!0}const Bt=new X,Zo=new at;let By=0;class aa extends Ts{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:By++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=_y,this.updateRanges=[],this.gpuType=Ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[e+a]=t.array[n+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Zo.fromBufferAttribute(this,t),Zo.applyMatrix3(e),this.setXY(t,Zo.x,Zo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Pr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Pr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Pr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Pr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Pr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Sn(t,this.array),n=Sn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,a){return e*=this.itemSize,this.normalized&&(t=Sn(t,this.array),n=Sn(n,this.array),a=Sn(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this}setXYZW(e,t,n,a,s){return e*=this.itemSize,this.normalized&&(t=Sn(t,this.array),n=Sn(n,this.array),a=Sn(a,this.array),s=Sn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Og extends aa{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Fg extends aa{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class fi extends aa{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Hy=new Po,zr=new X,ld=new X;class pc{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Hy.setFromPoints(e).getCenter(n);let a=0;for(let s=0,r=e.length;s<r;s++)a=Math.max(a,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zr.subVectors(e,this.center);const t=zr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),a=(n-this.radius)*.5;this.center.addScaledVector(zr,a/n),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ld.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zr.copy(e.center).add(ld)),this.expandByPoint(zr.copy(e.center).sub(ld))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let $y=0;const ii=new wt,cd=new sn,$s=new X,Fn=new Po,Ur=new Po,Zt=new X;class Ei extends Ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$y++}),this.uuid=Co(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yy(e)?Fg:Og)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new qe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ii.makeRotationFromQuaternion(e),this.applyMatrix4(ii),this}rotateX(e){return ii.makeRotationX(e),this.applyMatrix4(ii),this}rotateY(e){return ii.makeRotationY(e),this.applyMatrix4(ii),this}rotateZ(e){return ii.makeRotationZ(e),this.applyMatrix4(ii),this}translate(e,t,n){return ii.makeTranslation(e,t,n),this.applyMatrix4(ii),this}scale(e,t,n){return ii.makeScale(e,t,n),this.applyMatrix4(ii),this}lookAt(e){return cd.lookAt(e),cd.updateMatrix(),this.applyMatrix4(cd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($s).negate(),this.translate($s.x,$s.y,$s.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let a=0,s=e.length;a<s;a++){const r=e[a];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new fi(n,3))}else{const n=Math.min(e.length,t.count);for(let a=0;a<n;a++){const s=e[a];t.setXYZ(a,s.x,s.y,s.z||0)}e.length>t.count&&$e("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Po);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,a=t.length;n<a;n++){const s=t[n];Fn.setFromBufferAttribute(s),this.morphTargetsRelative?(Zt.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(Zt)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const n=this.boundingSphere.center;if(Fn.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){const o=t[s];Ur.setFromBufferAttribute(o),this.morphTargetsRelative?(Zt.addVectors(Fn.min,Ur.min),Fn.expandByPoint(Zt),Zt.addVectors(Fn.max,Ur.max),Fn.expandByPoint(Zt)):(Fn.expandByPoint(Ur.min),Fn.expandByPoint(Ur.max))}Fn.getCenter(n);let a=0;for(let s=0,r=e.count;s<r;s++)Zt.fromBufferAttribute(e,s),a=Math.max(a,n.distanceToSquared(Zt));if(t)for(let s=0,r=t.length;s<r;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,d=o.count;l<d;l++)Zt.fromBufferAttribute(o,l),c&&($s.fromBufferAttribute(e,l),Zt.add($s)),a=Math.max(a,n.distanceToSquared(Zt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,a=t.normal,s=t.uv;let r=this.getAttribute("tangent");(r===void 0||r.count!==n.count)&&(r=new aa(new Float32Array(4*n.count),4),this.setAttribute("tangent",r));const o=[],c=[];for(let x=0;x<n.count;x++)o[x]=new X,c[x]=new X;const l=new X,d=new X,f=new X,u=new at,h=new at,v=new at,m=new X,p=new X;function g(x,w,R){l.fromBufferAttribute(n,x),d.fromBufferAttribute(n,w),f.fromBufferAttribute(n,R),u.fromBufferAttribute(s,x),h.fromBufferAttribute(s,w),v.fromBufferAttribute(s,R),d.sub(l),f.sub(l),h.sub(u),v.sub(u);const L=1/(h.x*v.y-v.x*h.y);isFinite(L)&&(m.copy(d).multiplyScalar(v.y).addScaledVector(f,-h.y).multiplyScalar(L),p.copy(f).multiplyScalar(h.x).addScaledVector(d,-v.x).multiplyScalar(L),o[x].add(m),o[w].add(m),o[R].add(m),c[x].add(p),c[w].add(p),c[R].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let x=0,w=y.length;x<w;++x){const R=y[x],L=R.start,z=R.count;for(let F=L,C=L+z;F<C;F+=3)g(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const T=new X,b=new X,S=new X,E=new X;function A(x){S.fromBufferAttribute(a,x),E.copy(S);const w=o[x];T.copy(w),T.sub(S.multiplyScalar(S.dot(w))).normalize(),b.crossVectors(E,w);const L=b.dot(c[x])<0?-1:1;r.setXYZW(x,T.x,T.y,T.z,L)}for(let x=0,w=y.length;x<w;++x){const R=y[x],L=R.start,z=R.count;for(let F=L,C=L+z;F<C;F+=3)A(e.getX(F+0)),A(e.getX(F+1)),A(e.getX(F+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new aa(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,h=n.count;u<h;u++)n.setXYZ(u,0,0,0);const a=new X,s=new X,r=new X,o=new X,c=new X,l=new X,d=new X,f=new X;if(e)for(let u=0,h=e.count;u<h;u+=3){const v=e.getX(u+0),m=e.getX(u+1),p=e.getX(u+2);a.fromBufferAttribute(t,v),s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,p),d.subVectors(r,s),f.subVectors(a,s),d.cross(f),o.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),l.fromBufferAttribute(n,p),o.add(d),c.add(d),l.add(d),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(m,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let u=0,h=t.count;u<h;u+=3)a.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),r.fromBufferAttribute(t,u+2),d.subVectors(r,s),f.subVectors(a,s),d.cross(f),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Zt.fromBufferAttribute(e,t),Zt.normalize(),e.setXYZ(t,Zt.x,Zt.y,Zt.z)}toNonIndexed(){function e(o,c){const l=o.array,d=o.itemSize,f=o.normalized,u=new l.constructor(c.length*d);let h=0,v=0;for(let m=0,p=c.length;m<p;m++){o.isInterleavedBufferAttribute?h=c[m]*o.data.stride+o.offset:h=c[m]*d;for(let g=0;g<d;g++)u[v++]=l[h++]}return new aa(u,d,f)}if(this.index===null)return $e("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ei,n=this.index.array,a=this.attributes;for(const o in a){const c=a[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let d=0,f=l.length;d<f;d++){const u=l[d],h=e(u,n);c.push(h)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,c=r.length;o<c;o++){const l=r[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const a={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let f=0,u=l.length;f<u;f++){const h=l[f];d.push(h.toJSON(e.data))}d.length>0&&(a[c]=d,s=!0)}s&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const a=e.attributes;for(const l in a){const d=a[l];this.setAttribute(l,d.clone(t))}const s=e.morphAttributes;for(const l in s){const d=[],f=s[l];for(let u=0,h=f.length;u<h;u++)d.push(f[u].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let l=0,d=r.length;l<d;l++){const f=r[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const dd=new X,Gy=new X,Vy=new qe;class ka{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,a){return this.normal.set(e,t,n),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const a=dd.subVectors(n,t).cross(Gy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const a=e.delta(dd),s=this.normal.dot(a);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(r<0||r>1)?null:t.copy(e.start).addScaledVector(a,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Vy.getNormalMatrix(e),a=this.coplanarPoint(dd).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-a.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let qy=0;class Mr extends Ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qy++}),this.uuid=Co(),this.name="",this.type="Material",this.blending=no,this.side=bs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_g,this.blendDst=yg,this.blendEquation=Js,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=_o,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=uy,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qc,this.stencilZFail=qc,this.stencilZPass=qc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){$e(`Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){$e(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(n):a&&a.isVector2&&n&&n.isVector2||a&&a.isEuler&&n&&n.isEuler||a&&a.isVector3&&n&&n.isVector3?a.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function a(s){const r=[];for(const o in s){const c=s[o];delete c.metadata,r.push(c)}return r}if(t){const s=a(e.textures),r=a(e.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new rt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new ka().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new at().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new at().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const a=t.length;n=new Array(a);for(let s=0;s!==a;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Yi=new X,ud=new X,Jo=new X,jo=new X;class Lf{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yi.copy(this.origin).addScaledVector(this.direction,t),Yi.distanceToSquared(e))}distanceSqToSegment(e,t,n,a){ud.copy(e).add(t).multiplyScalar(.5),Jo.copy(t).sub(e).normalize(),jo.copy(this.origin).sub(ud);const s=e.distanceTo(t)*.5,r=-this.direction.dot(Jo),o=jo.dot(this.direction),c=-jo.dot(Jo),l=jo.lengthSq(),d=Math.abs(1-r*r);let f,u,h,v;if(d>0)if(f=r*c-o,u=r*o-c,v=s*d,f>=0)if(u>=-v)if(u<=v){const m=1/d;f*=m,u*=m,h=f*(f+r*u+2*o)+u*(r*f+u+2*c)+l}else u=s,f=Math.max(0,-(r*u+o)),h=-f*f+u*(u+2*c)+l;else u=-s,f=Math.max(0,-(r*u+o)),h=-f*f+u*(u+2*c)+l;else u<=-v?(f=Math.max(0,-(-r*s+o)),u=f>0?-s:Math.min(Math.max(-s,-c),s),h=-f*f+u*(u+2*c)+l):u<=v?(f=0,u=Math.min(Math.max(-s,-c),s),h=u*(u+2*c)+l):(f=Math.max(0,-(r*s+o)),u=f>0?s:Math.min(Math.max(-s,-c),s),h=-f*f+u*(u+2*c)+l);else u=r>0?-s:s,f=Math.max(0,-(r*u+o)),h=-f*f+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),a&&a.copy(ud).addScaledVector(Jo,u),h}intersectSphere(e,t){if(e.radius<0)return null;Yi.subVectors(e.center,this.origin);const n=Yi.dot(this.direction),a=Yi.dot(Yi)-n*n,s=e.radius*e.radius;if(a>s)return null;const r=Math.sqrt(s-a),o=n-r,c=n+r;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,a,s,r,o,c;const l=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,a=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,a=(e.min.x-u.x)*l),d>=0?(s=(e.min.y-u.y)*d,r=(e.max.y-u.y)*d):(s=(e.max.y-u.y)*d,r=(e.min.y-u.y)*d),n>r||s>a||((s>n||isNaN(n))&&(n=s),(r<a||isNaN(a))&&(a=r),f>=0?(o=(e.min.z-u.z)*f,c=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,c=(e.min.z-u.z)*f),n>c||o>a)||((o>n||n!==n)&&(n=o),(c<a||a!==a)&&(a=c),a<0)?null:this.at(n>=0?n:a,t)}intersectsBox(e){return this.intersectBox(e,Yi)!==null}intersectTriangle(e,t,n,a,s){const r=this.origin,o=this.direction,c=o.x,l=o.y,d=o.z,f=e.x-r.x,u=e.y-r.y,h=e.z-r.z,v=t.x-r.x,m=t.y-r.y,p=t.z-r.z,g=n.x-r.x,y=n.y-r.y,T=n.z-r.z,b=Math.abs(c),S=Math.abs(l),E=Math.abs(d);let A,x,w,R,L,z,F,C,H,D,P,K;if(b>=S&&b>=E?(w=c,z=f,H=v,K=g,c>=0?(A=l,x=d,R=u,L=h,F=m,C=p,D=y,P=T):(A=d,x=l,R=h,L=u,F=p,C=m,D=T,P=y)):S>=E?(w=l,z=u,H=m,K=y,l>=0?(A=d,x=c,R=h,L=f,F=p,C=v,D=T,P=g):(A=c,x=d,R=f,L=h,F=v,C=p,D=g,P=T)):(w=d,z=h,H=p,K=T,d>=0?(A=c,x=l,R=f,L=u,F=v,C=m,D=g,P=y):(A=l,x=c,R=u,L=f,F=m,C=v,D=y,P=g)),w===0)return null;const $=A/w,Q=x/w,te=1/w,ue=R-$*z,ke=L-Q*z,Ne=F-$*H,De=C-Q*H,He=D-$*K,J=P-Q*K,ae=He*De-J*Ne,fe=ue*J-ke*He,ze=Ne*ke-De*ue;if(a){if(ae<0||fe<0||ze<0)return null}else if((ae<0||fe<0||ze<0)&&(ae>0||fe>0||ze>0))return null;const be=ae+fe+ze;if(be===0)return null;const Fe=te*(ae*z+fe*H+ze*K);return(be>0?Fe<0:Fe>0)?null:this.at(Fe/be,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bg extends Mr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ga,this.combine=yf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Bh=new wt,Qa=new Lf,Qo=new pc,Hh=new X,el=new X,tl=new X,nl=new X,fd=new X,il=new X,$h=new X,al=new X;class ti extends sn{constructor(e=new Ei,t=new Bg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,a=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(a,e);const o=this.morphTargetInfluences;if(s&&o){il.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const d=o[c],f=s[c];d!==0&&(fd.fromBufferAttribute(f,e),r?il.addScaledVector(fd,d):il.addScaledVector(fd.sub(t),d))}t.add(il)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qo.copy(n.boundingSphere),Qo.applyMatrix4(s),Qa.copy(e.ray).recast(e.near),!(Qo.containsPoint(Qa.origin)===!1&&(Qa.intersectSphere(Qo,Hh)===null||Qa.origin.distanceToSquared(Hh)>(e.far-e.near)**2))&&(Bh.copy(s).invert(),Qa.copy(e.ray).applyMatrix4(Bh),!(n.boundingBox!==null&&Qa.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Qa)))}_computeIntersections(e,t,n){let a;const s=this.geometry,r=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,u=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(r))for(let v=0,m=u.length;v<m;v++){const p=u[v],g=r[p.materialIndex],y=Math.max(p.start,h.start),T=Math.min(o.count,Math.min(p.start+p.count,h.start+h.count));for(let b=y,S=T;b<S;b+=3){const E=o.getX(b),A=o.getX(b+1),x=o.getX(b+2);a=sl(this,g,e,n,l,d,f,E,A,x),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const v=Math.max(0,h.start),m=Math.min(o.count,h.start+h.count);for(let p=v,g=m;p<g;p+=3){const y=o.getX(p),T=o.getX(p+1),b=o.getX(p+2);a=sl(this,r,e,n,l,d,f,y,T,b),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}else if(c!==void 0)if(Array.isArray(r))for(let v=0,m=u.length;v<m;v++){const p=u[v],g=r[p.materialIndex],y=Math.max(p.start,h.start),T=Math.min(c.count,Math.min(p.start+p.count,h.start+h.count));for(let b=y,S=T;b<S;b+=3){const E=b,A=b+1,x=b+2;a=sl(this,g,e,n,l,d,f,E,A,x),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const v=Math.max(0,h.start),m=Math.min(c.count,h.start+h.count);for(let p=v,g=m;p<g;p+=3){const y=p,T=p+1,b=p+2;a=sl(this,r,e,n,l,d,f,y,T,b),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}}}function Wy(i,e,t,n,a,s,r,o){let c;if(e.side===Pn?c=n.intersectTriangle(r,s,a,!0,o):c=n.intersectTriangle(a,s,r,e.side===bs,o),c===null)return null;al.copy(o),al.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(al);return l<t.near||l>t.far?null:{distance:l,point:al.clone(),object:i}}function sl(i,e,t,n,a,s,r,o,c,l){i.getVertexPosition(o,el),i.getVertexPosition(c,tl),i.getVertexPosition(l,nl);const d=Wy(i,e,t,n,el,tl,nl,$h);if(d){const f=new X;Si.getBarycoord($h,el,tl,nl,f),a&&(d.uv=Si.getInterpolatedAttribute(a,o,c,l,f,new at)),s&&(d.uv1=Si.getInterpolatedAttribute(s,o,c,l,f,new at)),r&&(d.normal=Si.getInterpolatedAttribute(r,o,c,l,f,new X),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new X,materialIndex:0};Si.getNormal(el,tl,nl,u.normal),d.face=u,d.barycoord=f}return d}class Xy extends an{constructor(e=null,t=1,n=1,a,s,r,o,c,l=Xt,d=Xt,f,u){super(null,r,o,c,l,d,a,s,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const es=new pc,Ky=new at(.5,.5),rl=new X;class Cf{constructor(e=new ka,t=new ka,n=new ka,a=new ka,s=new ka,r=new ka){this.planes=[e,t,n,a,s,r]}set(e,t,n,a,s,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(a),o[4].copy(s),o[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ni,n=!1){const a=this.planes,s=e.elements,r=s[0],o=s[1],c=s[2],l=s[3],d=s[4],f=s[5],u=s[6],h=s[7],v=s[8],m=s[9],p=s[10],g=s[11],y=s[12],T=s[13],b=s[14],S=s[15];if(a[0].setComponents(l-r,h-d,g-v,S-y).normalize(),a[1].setComponents(l+r,h+d,g+v,S+y).normalize(),a[2].setComponents(l+o,h+f,g+m,S+T).normalize(),a[3].setComponents(l-o,h-f,g-m,S-T).normalize(),n)a[4].setComponents(c,u,p,b).normalize(),a[5].setComponents(l-c,h-u,g-p,S-b).normalize();else if(a[4].setComponents(l-c,h-u,g-p,S-b).normalize(),t===Ni)a[5].setComponents(l+c,h+u,g+p,S+b).normalize();else if(t===bo)a[5].setComponents(c,u,p,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),es.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(es)}intersectsSprite(e){es.center.set(0,0,0);const t=Ky.distanceTo(e.center);return es.radius=.7071067811865476+t,es.applyMatrix4(e.matrixWorld),this.intersectsSphere(es)}intersectsSphere(e){const t=this.planes,n=e.center,a=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const a=t[n];if(rl.x=a.normal.x>0?e.max.x:e.min.x,rl.y=a.normal.y>0?e.max.y:e.min.y,rl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(rl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Hg extends Mr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Xl=new X,Kl=new X,Gh=new wt,Nr=new Lf,ol=new pc,hd=new X,Vh=new X;class Yy extends sn{constructor(e=new Ei,t=new Hg){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let a=1,s=t.count;a<s;a++)Xl.fromBufferAttribute(t,a-1),Kl.fromBufferAttribute(t,a),n[a]=n[a-1],n[a]+=Xl.distanceTo(Kl);e.setAttribute("lineDistance",new fi(n,1))}else $e("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,a=this.matrixWorld,s=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ol.copy(n.boundingSphere),ol.applyMatrix4(a),ol.radius+=s,e.ray.intersectsSphere(ol)===!1)return;Gh.copy(a).invert(),Nr.copy(e.ray).applyMatrix4(Gh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,d=n.index,u=n.attributes.position;if(d!==null){const h=Math.max(0,r.start),v=Math.min(d.count,r.start+r.count);for(let m=h,p=v-1;m<p;m+=l){const g=d.getX(m),y=d.getX(m+1),T=ll(this,e,Nr,c,g,y,m);T&&t.push(T)}if(this.isLineLoop){const m=d.getX(v-1),p=d.getX(h),g=ll(this,e,Nr,c,m,p,v-1);g&&t.push(g)}}else{const h=Math.max(0,r.start),v=Math.min(u.count,r.start+r.count);for(let m=h,p=v-1;m<p;m+=l){const g=ll(this,e,Nr,c,m,m+1,m);g&&t.push(g)}if(this.isLineLoop){const m=ll(this,e,Nr,c,v-1,h,v-1);m&&t.push(m)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ll(i,e,t,n,a,s,r){const o=i.geometry.attributes.position;if(Xl.fromBufferAttribute(o,a),Kl.fromBufferAttribute(o,s),t.distanceSqToSegment(Xl,Kl,hd,Vh)>n)return;hd.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(hd);if(!(l<e.near||l>e.far))return{distance:l,point:Vh.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}const qh=new X,Wh=new X;class Zy extends Yy{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let a=0,s=t.count;a<s;a+=2)qh.fromBufferAttribute(t,a),Wh.fromBufferAttribute(t,a+1),n[a]=a===0?0:n[a-1],n[a+1]=n[a]+qh.distanceTo(Wh);e.setAttribute("lineDistance",new fi(n,1))}else $e("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class $g extends an{constructor(e=[],t=Ss,n,a,s,r,o,c,l,d){super(e,t,n,a,s,r,o,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Gg extends an{constructor(e,t,n,a,s,r,o,c,l){super(e,t,n,a,s,r,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ko extends an{constructor(e,t,n=$i,a,s,r,o=Xt,c=Xt,l,d=la,f=1){if(d!==la&&d!==fs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:f};super(u,a,s,r,o,c,d,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Af(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Jy extends ko{constructor(e,t=$i,n=Ss,a,s,r=Xt,o=Xt,c,l=la){const d={width:e,height:e,depth:1},f=[d,d,d,d,d,d];super(e,e,t,n,a,s,r,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Vg extends an{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ca extends Ei{constructor(e=1,t=1,n=1,a=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:a,heightSegments:s,depthSegments:r};const o=this;a=Math.floor(a),s=Math.floor(s),r=Math.floor(r);const c=[],l=[],d=[],f=[];let u=0,h=0;v("z","y","x",-1,-1,n,t,e,r,s,0),v("z","y","x",1,-1,n,t,-e,r,s,1),v("x","z","y",1,1,e,n,t,a,r,2),v("x","z","y",1,-1,e,n,-t,a,r,3),v("x","y","z",1,-1,e,t,n,a,s,4),v("x","y","z",-1,-1,e,t,-n,a,s,5),this.setIndex(c),this.setAttribute("position",new fi(l,3)),this.setAttribute("normal",new fi(d,3)),this.setAttribute("uv",new fi(f,2));function v(m,p,g,y,T,b,S,E,A,x,w){const R=b/A,L=S/x,z=b/2,F=S/2,C=E/2,H=A+1,D=x+1;let P=0,K=0;const $=new X;for(let Q=0;Q<D;Q++){const te=Q*L-F;for(let ue=0;ue<H;ue++){const ke=ue*R-z;$[m]=ke*y,$[p]=te*T,$[g]=C,l.push($.x,$.y,$.z),$[m]=0,$[p]=0,$[g]=E>0?1:-1,d.push($.x,$.y,$.z),f.push(ue/A),f.push(1-Q/x),P+=1}}for(let Q=0;Q<x;Q++)for(let te=0;te<A;te++){const ue=u+te+H*Q,ke=u+te+H*(Q+1),Ne=u+(te+1)+H*(Q+1),De=u+(te+1)+H*Q;c.push(ue,ke,De),c.push(ke,Ne,De),K+=6}o.addGroup(h,K,w),h+=K,u+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ca(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class mc extends Ei{constructor(e=1,t=1,n=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:a};const s=e/2,r=t/2,o=Math.floor(n),c=Math.floor(a),l=o+1,d=c+1,f=e/o,u=t/c,h=[],v=[],m=[],p=[];for(let g=0;g<d;g++){const y=g*u-r;for(let T=0;T<l;T++){const b=T*f-s;v.push(b,-y,0),m.push(0,0,1),p.push(T/o),p.push(1-g/c)}}for(let g=0;g<c;g++)for(let y=0;y<o;y++){const T=y+l*g,b=y+l*(g+1),S=y+1+l*(g+1),E=y+1+l*g;h.push(T,b,E),h.push(b,S,E)}this.setIndex(h),this.setAttribute("position",new fi(v,3)),this.setAttribute("normal",new fi(m,3)),this.setAttribute("uv",new fi(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mc(e.width,e.height,e.widthSegments,e.heightSegments)}}function br(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const a=i[t][n];if(Xh(a))a.isRenderTargetTexture?($e("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=a.clone();else if(Array.isArray(a))if(Xh(a[0])){const s=[];for(let r=0,o=a.length;r<o;r++)s[r]=a[r].clone();e[t][n]=s}else e[t][n]=a.slice();else e[t][n]=a}}return e}function _n(i){const e={};for(let t=0;t<i.length;t++){const n=br(i[t]);for(const a in n)e[a]=n[a]}return e}function Xh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function jy(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function qg(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const Qy={clone:br,merge:_n};var ex=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vi extends Mr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ex,this.fragmentShader=tx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=br(e.uniforms),this.uniformsGroups=jy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const r=this.uniforms[a].value;r&&r.isTexture?t.uniforms[a]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[a]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[a]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[a]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[a]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[a]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[a]={type:"m4",value:r.toArray()}:t.uniforms[a]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const a in this.extensions)this.extensions[a]===!0&&(n[a]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const a=e.uniforms[n];switch(this.uniforms[n]={},a.type){case"t":this.uniforms[n].value=t[a.value]||null;break;case"c":this.uniforms[n].value=new rt().setHex(a.value);break;case"v2":this.uniforms[n].value=new at().fromArray(a.value);break;case"v3":this.uniforms[n].value=new X().fromArray(a.value);break;case"v4":this.uniforms[n].value=new Pt().fromArray(a.value);break;case"m3":this.uniforms[n].value=new qe().fromArray(a.value);break;case"m4":this.uniforms[n].value=new wt().fromArray(a.value);break;default:this.uniforms[n].value=a.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class nx extends Vi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Yl extends Mr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nu,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ga,this.combine=yf,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ix extends Mr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ax extends Mr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const pd={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Kh(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Kh(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Kh(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class sx{constructor(e,t,n){const a=this;let s=!1,r=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(d){o++,s===!1&&a.onStart!==void 0&&a.onStart(d,r,o),s=!0},this.itemEnd=function(d){r++,a.onProgress!==void 0&&a.onProgress(d,r,o),r===o&&(s=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(d){a.onError!==void 0&&a.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,f){return l.push(d,f),this},this.removeHandler=function(d){const f=l.indexOf(d);return f!==-1&&l.splice(f,2),this},this.getHandler=function(d){for(let f=0,u=l.length;f<u;f+=2){const h=l[f],v=l[f+1];if(h.global&&(h.lastIndex=0),h.test(d))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const rx=new sx;class Wg{constructor(e){this.manager=e!==void 0?e:rx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(a,s){n.load(e,a,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Wg.DEFAULT_MATERIAL_NAME="__DEFAULT";const Gs=new WeakMap;class ox extends Wg{constructor(e){super(e)}load(e,t,n,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=pd.get(`image:${e}`);if(r!==void 0){if(r.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0);else{let f=Gs.get(r);f===void 0&&(f=[],Gs.set(r,f)),f.push({onLoad:t,onError:a})}return r}const o=So("img");function c(){d(),t&&t(this);const f=Gs.get(this)||[];for(let u=0;u<f.length;u++){const h=f[u];h.onLoad&&h.onLoad(this)}Gs.delete(this),s.manager.itemEnd(e)}function l(f){d(),a&&a(f),pd.remove(`image:${e}`);const u=Gs.get(this)||[];for(let h=0;h<u.length;h++){const v=u[h];v.onError&&v.onError(f)}Gs.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function d(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),pd.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class Xg extends sn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new rt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const md=new wt,Yh=new X,Zh=new X;class lx{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.mapType=Xn,this.map=null,this.mapPass=null,this.matrix=new wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cf,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Yh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Yh),Zh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Zh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,a){md.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(md,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,r=a?a.z/s.x:1,o=a?a.w/s.y:1,c=a?a.x/s.x:0,l=a?a.y/s.y:0;e.coordinateSystem===bo||e.reversedDepth?t.set(.5*r,0,0,.5*r+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*r,0,0,.5*r+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(md)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const cl=new X,dl=new kr,Ai=new X;class Kg extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=Ni,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(cl,dl,Ai),Ai.x===1&&Ai.y===1&&Ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(cl,dl,Ai.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(cl,dl,Ai),Ai.x===1&&Ai.y===1&&Ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(cl,dl,Ai.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const xa=new X,Jh=new at,jh=new at;class oi extends Kg{constructor(e=50,t=1,n=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ou*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Rl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ou*2*Math.atan(Math.tan(Rl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){xa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xa.x,xa.y).multiplyScalar(-e/xa.z),xa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xa.x,xa.y).multiplyScalar(-e/xa.z)}getViewSize(e,t){return this.getViewBounds(e,Jh,jh),t.subVectors(jh,Jh)}setViewOffset(e,t,n,a,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Rl*.5*this.fov)/this.zoom,n=2*t,a=this.aspect*n,s=-.5*a;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;s+=r.offsetX*a/c,t-=r.offsetY*n/l,a*=r.width/c,n*=r.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Pf extends Kg{constructor(e=-1,t=1,n=1,a=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=a,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,a,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let s=n-e,r=n+e,o=a+t,c=a-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,r=s+l*this.view.width,o-=d*this.view.offsetY,c=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class cx extends lx{constructor(){super(new Pf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Qh extends Xg{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.target=new sn,this.shadow=new cx}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class dx extends Xg{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Vs=-90,qs=1;class ux extends sn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new oi(Vs,qs,e,t);a.layers=this.layers,this.add(a);const s=new oi(Vs,qs,e,t);s.layers=this.layers,this.add(s);const r=new oi(Vs,qs,e,t);r.layers=this.layers,this.add(r);const o=new oi(Vs,qs,e,t);o.layers=this.layers,this.add(o);const c=new oi(Vs,qs,e,t);c.layers=this.layers,this.add(c);const l=new oi(Vs,qs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,a,s,r,o,c]=t;for(const l of t)this.remove(l);if(e===Ni)n.up.set(0,1,0),n.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===bo)n.up.set(0,-1,0),n.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,r,o,c,l,d]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,a),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,a),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,2,a),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,a),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,a),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,a),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(f,u,h),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class fx extends oi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const ep=new wt;class hx{constructor(e,t,n=0,a=1/0){this.ray=new Lf(e,t),this.near=n,this.far=a,this.camera=null,this.layers=new Rf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):lt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ep.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ep),this}intersectObject(e,t=!0,n=[]){return Fu(e,this,n,t),n.sort(tp),n}intersectObjects(e,t=!0,n=[]){for(let a=0,s=e.length;a<s;a++)Fu(e[a],this,n,t);return n.sort(tp),n}}function tp(i,e){return i.distance-e.distance}function Fu(i,e,t,n){let a=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(a=!1),a===!0&&n===!0){const s=i.children;for(let r=0,o=s.length;r<o;r++)Fu(s[r],e,t,!0)}}class px{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,$e("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class Yg{static{Yg.prototype.isMatrix2=!0}constructor(e,t,n,a){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,a)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,a){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=a,this}}function np(i,e,t,n){const a=mx(n);switch(t){case Pg:return i*e;case Ig:return i*e/a.components*a.byteLength;case kf:return i*e/a.components*a.byteLength;case ks:return i*e*2/a.components*a.byteLength;case Mf:return i*e*2/a.components*a.byteLength;case Dg:return i*e*3/a.components*a.byteLength;case ki:return i*e*4/a.components*a.byteLength;case Ef:return i*e*4/a.components*a.byteLength;case El:case wl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Tl:case Al:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case lu:case du:return Math.max(i,16)*Math.max(e,8)/4;case ou:case cu:return Math.max(i,8)*Math.max(e,8)/2;case uu:case fu:case pu:case mu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case hu:case Gl:case gu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case vu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case _u:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case yu:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case xu:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case bu:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Su:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ku:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Mu:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Eu:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case wu:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Tu:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Au:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ru:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Lu:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Cu:case Pu:case Du:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Iu:case zu:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Vl:case Uu:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function mx(i){switch(i){case Xn:case Ag:return{byteLength:1,components:1};case yo:case Rg:case Gi:return{byteLength:2,components:1};case bf:case Sf:return{byteLength:2,components:4};case $i:case xf:case Ui:return{byteLength:4,components:1};case Lg:case Cg:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_f}}));typeof window<"u"&&(window.__THREE__?$e("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_f);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Zg(){let i=null,e=!1,t=null,n=null;function a(s,r){n=i.requestAnimationFrame(a),t(s,r)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(a),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function gx(i){const e=new WeakMap;function t(o,c){const l=o.array,d=o.usage,f=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,d),o.onUploadCallback();let h;if(l instanceof Float32Array)h=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)h=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?h=i.HALF_FLOAT:h=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=i.SHORT;else if(l instanceof Uint32Array)h=i.UNSIGNED_INT;else if(l instanceof Int32Array)h=i.INT;else if(l instanceof Int8Array)h=i.BYTE;else if(l instanceof Uint8Array)h=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){const d=c.array,f=c.updateRanges;if(i.bindBuffer(l,o),f.length===0)i.bufferSubData(l,0,d);else{f.sort((h,v)=>h.start-v.start);let u=0;for(let h=1;h<f.length;h++){const v=f[u],m=f[h];m.start<=v.start+v.count+1?v.count=Math.max(v.count,m.start+m.count-v.start):(++u,f[u]=m)}f.length=u+1;for(let h=0,v=f.length;h<v;h++){const m=f[h];i.bufferSubData(l,m.start*d.BYTES_PER_ELEMENT,d,m.start,m.count)}c.clearUpdateRanges()}c.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function r(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:a,remove:s,update:r}}var vx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_x=`#ifdef USE_ALPHAHASH
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
#endif`,yx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kx=`#ifdef USE_AOMAP
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
#endif`,Mx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ex=`#ifdef USE_BATCHING
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
#endif`,wx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Tx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ax=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Lx=`#ifdef USE_IRIDESCENCE
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
#endif`,Cx=`#ifdef USE_BUMPMAP
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
#endif`,Px=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Dx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ix=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ux=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Nx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ox=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Fx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Bx=`#define PI 3.141592653589793
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
} // validated`,Hx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$x=`vec3 transformedNormal = objectNormal;
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
#endif`,Gx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yx=`#ifdef USE_ENVMAP
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
#endif`,Zx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Jx=`#ifdef USE_ENVMAP
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
#endif`,jx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qx=`#ifdef USE_ENVMAP
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
#endif`,eb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ib=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ab=`#ifdef USE_GRADIENTMAP
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
}`,sb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ob=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lb=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,cb=`#ifdef USE_ENVMAP
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
#endif`,db=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ub=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pb=`PhysicalMaterial material;
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
#endif`,mb=`uniform sampler2D dfgLUT;
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
}`,gb=`
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
#endif`,vb=`#if defined( RE_IndirectDiffuse )
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
#endif`,_b=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yb=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,xb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Mb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Eb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Tb=`#if defined( USE_POINTS_UV )
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
#endif`,Ab=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Db=`#ifdef USE_MORPHTARGETS
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
#endif`,Ib=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ub=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Nb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ob=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Bb=`#ifdef USE_NORMALMAP
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
#endif`,Hb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$b=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Xb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Kb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,eS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,nS=`float getShadowMask() {
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
}`,iS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,aS=`#ifdef USE_SKINNING
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
#endif`,sS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rS=`#ifdef USE_SKINNING
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
#endif`,oS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,uS=`#ifdef USE_TRANSMISSION
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
#endif`,fS=`#ifdef USE_TRANSMISSION
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
#endif`,hS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_S=`uniform sampler2D t2D;
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
}`,yS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,bS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kS=`#include <common>
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
}`,MS=`#if DEPTH_PACKING == 3200
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
}`,ES=`#define DISTANCE
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
}`,wS=`#define DISTANCE
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
}`,TS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,AS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RS=`uniform float scale;
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
}`,LS=`uniform vec3 diffuse;
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
}`,CS=`#include <common>
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
}`,PS=`uniform vec3 diffuse;
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
}`,DS=`#define LAMBERT
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
}`,IS=`#define LAMBERT
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
}`,zS=`#define MATCAP
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
}`,US=`#define MATCAP
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
}`,NS=`#define NORMAL
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
}`,OS=`#define NORMAL
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
}`,FS=`#define PHONG
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
}`,BS=`#define PHONG
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
}`,HS=`#define STANDARD
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
}`,$S=`#define STANDARD
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
}`,GS=`#define TOON
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
}`,VS=`#define TOON
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
}`,qS=`uniform float size;
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
}`,WS=`uniform vec3 diffuse;
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
}`,XS=`#include <common>
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
}`,KS=`uniform vec3 color;
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
}`,YS=`uniform float rotation;
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
}`,ZS=`uniform vec3 diffuse;
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
}`,Ye={alphahash_fragment:vx,alphahash_pars_fragment:_x,alphamap_fragment:yx,alphamap_pars_fragment:xx,alphatest_fragment:bx,alphatest_pars_fragment:Sx,aomap_fragment:kx,aomap_pars_fragment:Mx,batching_pars_vertex:Ex,batching_vertex:wx,begin_vertex:Tx,beginnormal_vertex:Ax,bsdfs:Rx,iridescence_fragment:Lx,bumpmap_pars_fragment:Cx,clipping_planes_fragment:Px,clipping_planes_pars_fragment:Dx,clipping_planes_pars_vertex:Ix,clipping_planes_vertex:zx,color_fragment:Ux,color_pars_fragment:Nx,color_pars_vertex:Ox,color_vertex:Fx,common:Bx,cube_uv_reflection_fragment:Hx,defaultnormal_vertex:$x,displacementmap_pars_vertex:Gx,displacementmap_vertex:Vx,emissivemap_fragment:qx,emissivemap_pars_fragment:Wx,colorspace_fragment:Xx,colorspace_pars_fragment:Kx,envmap_fragment:Yx,envmap_common_pars_fragment:Zx,envmap_pars_fragment:Jx,envmap_pars_vertex:jx,envmap_physical_pars_fragment:cb,envmap_vertex:Qx,fog_vertex:eb,fog_pars_vertex:tb,fog_fragment:nb,fog_pars_fragment:ib,gradientmap_pars_fragment:ab,lightmap_pars_fragment:sb,lights_lambert_fragment:rb,lights_lambert_pars_fragment:ob,lights_pars_begin:lb,lights_toon_fragment:db,lights_toon_pars_fragment:ub,lights_phong_fragment:fb,lights_phong_pars_fragment:hb,lights_physical_fragment:pb,lights_physical_pars_fragment:mb,lights_fragment_begin:gb,lights_fragment_maps:vb,lights_fragment_end:_b,lightprobes_pars_fragment:yb,logdepthbuf_fragment:xb,logdepthbuf_pars_fragment:bb,logdepthbuf_pars_vertex:Sb,logdepthbuf_vertex:kb,map_fragment:Mb,map_pars_fragment:Eb,map_particle_fragment:wb,map_particle_pars_fragment:Tb,metalnessmap_fragment:Ab,metalnessmap_pars_fragment:Rb,morphinstance_vertex:Lb,morphcolor_vertex:Cb,morphnormal_vertex:Pb,morphtarget_pars_vertex:Db,morphtarget_vertex:Ib,normal_fragment_begin:zb,normal_fragment_maps:Ub,normal_pars_fragment:Nb,normal_pars_vertex:Ob,normal_vertex:Fb,normalmap_pars_fragment:Bb,clearcoat_normal_fragment_begin:Hb,clearcoat_normal_fragment_maps:$b,clearcoat_pars_fragment:Gb,iridescence_pars_fragment:Vb,opaque_fragment:qb,packing:Wb,premultiplied_alpha_fragment:Xb,project_vertex:Kb,dithering_fragment:Yb,dithering_pars_fragment:Zb,roughnessmap_fragment:Jb,roughnessmap_pars_fragment:jb,shadowmap_pars_fragment:Qb,shadowmap_pars_vertex:eS,shadowmap_vertex:tS,shadowmask_pars_fragment:nS,skinbase_vertex:iS,skinning_pars_vertex:aS,skinning_vertex:sS,skinnormal_vertex:rS,specularmap_fragment:oS,specularmap_pars_fragment:lS,tonemapping_fragment:cS,tonemapping_pars_fragment:dS,transmission_fragment:uS,transmission_pars_fragment:fS,uv_pars_fragment:hS,uv_pars_vertex:pS,uv_vertex:mS,worldpos_vertex:gS,background_vert:vS,background_frag:_S,backgroundCube_vert:yS,backgroundCube_frag:xS,cube_vert:bS,cube_frag:SS,depth_vert:kS,depth_frag:MS,distance_vert:ES,distance_frag:wS,equirect_vert:TS,equirect_frag:AS,linedashed_vert:RS,linedashed_frag:LS,meshbasic_vert:CS,meshbasic_frag:PS,meshlambert_vert:DS,meshlambert_frag:IS,meshmatcap_vert:zS,meshmatcap_frag:US,meshnormal_vert:NS,meshnormal_frag:OS,meshphong_vert:FS,meshphong_frag:BS,meshphysical_vert:HS,meshphysical_frag:$S,meshtoon_vert:GS,meshtoon_frag:VS,points_vert:qS,points_frag:WS,shadow_vert:XS,shadow_frag:KS,sprite_vert:YS,sprite_frag:ZS},_e={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new X},probesMax:{value:new X},probesResolution:{value:new X}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},Ci={basic:{uniforms:_n([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:_n([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new rt(0)},envMapIntensity:{value:1}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:_n([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:_n([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:_n([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new rt(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:_n([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:_n([_e.points,_e.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:_n([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:_n([_e.common,_e.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:_n([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:_n([_e.sprite,_e.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distance:{uniforms:_n([_e.common,_e.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distance_vert,fragmentShader:Ye.distance_frag},shadow:{uniforms:_n([_e.lights,_e.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};Ci.physical={uniforms:_n([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const ul={r:0,b:0,g:0},JS=new wt,Jg=new qe;Jg.set(-1,0,0,0,1,0,0,0,1);function jS(i,e,t,n,a,s){const r=new rt(0);let o=a===!0?0:1,c,l,d=null,f=0,u=null;function h(y){let T=y.isScene===!0?y.background:null;if(T&&T.isTexture){const b=y.backgroundBlurriness>0;T=e.get(T,b)}return T}function v(y){let T=!1;const b=h(y);b===null?p(r,o):b&&b.isColor&&(p(b,1),T=!0);const S=i.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,s):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,T){const b=h(T);b&&(b.isCubeTexture||b.mapping===hc)?(l===void 0&&(l=new ti(new ca(1,1,1),new Vi({name:"BackgroundCubeMaterial",uniforms:br(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=b,l.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(JS.makeRotationFromEuler(T.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Jg),l.material.toneMapped=tt.getTransfer(b.colorSpace)!==ht,(d!==b||f!==b.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,d=b,f=b.version,u=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new ti(new mc(2,2),new Vi({name:"BackgroundMaterial",uniforms:br(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:bs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=tt.getTransfer(b.colorSpace)!==ht,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(d!==b||f!==b.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,d=b,f=b.version,u=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,T){y.getRGB(ul,qg(i)),t.buffers.color.setClear(ul.r,ul.g,ul.b,T,s)}function g(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return r},setClearColor:function(y,T=1){r.set(y),o=T,p(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,p(r,o)},render:v,addToRenderList:m,dispose:g}}function QS(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},a=u(null);let s=a,r=!1;function o(L,z,F,C,H){let D=!1;const P=f(L,C,F,z);s!==P&&(s=P,l(s.object)),D=h(L,C,F,H),D&&v(L,C,F,H),H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),(D||r)&&(r=!1,b(L,z,F,C),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function c(){return i.createVertexArray()}function l(L){return i.bindVertexArray(L)}function d(L){return i.deleteVertexArray(L)}function f(L,z,F,C){const H=C.wireframe===!0;let D=n[z.id];D===void 0&&(D={},n[z.id]=D);const P=L.isInstancedMesh===!0?L.id:0;let K=D[P];K===void 0&&(K={},D[P]=K);let $=K[F.id];$===void 0&&($={},K[F.id]=$);let Q=$[H];return Q===void 0&&(Q=u(c()),$[H]=Q),Q}function u(L){const z=[],F=[],C=[];for(let H=0;H<t;H++)z[H]=0,F[H]=0,C[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:F,attributeDivisors:C,object:L,attributes:{},index:null}}function h(L,z,F,C){const H=s.attributes,D=z.attributes;let P=0;const K=F.getAttributes();for(const $ in K)if(K[$].location>=0){const te=H[$];let ue=D[$];if(ue===void 0&&($==="instanceMatrix"&&L.instanceMatrix&&(ue=L.instanceMatrix),$==="instanceColor"&&L.instanceColor&&(ue=L.instanceColor)),te===void 0||te.attribute!==ue||ue&&te.data!==ue.data)return!0;P++}return s.attributesNum!==P||s.index!==C}function v(L,z,F,C){const H={},D=z.attributes;let P=0;const K=F.getAttributes();for(const $ in K)if(K[$].location>=0){let te=D[$];te===void 0&&($==="instanceMatrix"&&L.instanceMatrix&&(te=L.instanceMatrix),$==="instanceColor"&&L.instanceColor&&(te=L.instanceColor));const ue={};ue.attribute=te,te&&te.data&&(ue.data=te.data),H[$]=ue,P++}s.attributes=H,s.attributesNum=P,s.index=C}function m(){const L=s.newAttributes;for(let z=0,F=L.length;z<F;z++)L[z]=0}function p(L){g(L,0)}function g(L,z){const F=s.newAttributes,C=s.enabledAttributes,H=s.attributeDivisors;F[L]=1,C[L]===0&&(i.enableVertexAttribArray(L),C[L]=1),H[L]!==z&&(i.vertexAttribDivisor(L,z),H[L]=z)}function y(){const L=s.newAttributes,z=s.enabledAttributes;for(let F=0,C=z.length;F<C;F++)z[F]!==L[F]&&(i.disableVertexAttribArray(F),z[F]=0)}function T(L,z,F,C,H,D,P){P===!0?i.vertexAttribIPointer(L,z,F,H,D):i.vertexAttribPointer(L,z,F,C,H,D)}function b(L,z,F,C){m();const H=C.attributes,D=F.getAttributes(),P=z.defaultAttributeValues;for(const K in D){const $=D[K];if($.location>=0){let Q=H[K];if(Q===void 0&&(K==="instanceMatrix"&&L.instanceMatrix&&(Q=L.instanceMatrix),K==="instanceColor"&&L.instanceColor&&(Q=L.instanceColor)),Q!==void 0){const te=Q.normalized,ue=Q.itemSize,ke=e.get(Q);if(ke===void 0)continue;const Ne=ke.buffer,De=ke.type,He=ke.bytesPerElement,J=De===i.INT||De===i.UNSIGNED_INT||Q.gpuType===xf;if(Q.isInterleavedBufferAttribute){const ae=Q.data,fe=ae.stride,ze=Q.offset;if(ae.isInstancedInterleavedBuffer){for(let be=0;be<$.locationSize;be++)g($.location+be,ae.meshPerAttribute);L.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let be=0;be<$.locationSize;be++)p($.location+be);i.bindBuffer(i.ARRAY_BUFFER,Ne);for(let be=0;be<$.locationSize;be++)T($.location+be,ue/$.locationSize,De,te,fe*He,(ze+ue/$.locationSize*be)*He,J)}else{if(Q.isInstancedBufferAttribute){for(let ae=0;ae<$.locationSize;ae++)g($.location+ae,Q.meshPerAttribute);L.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ae=0;ae<$.locationSize;ae++)p($.location+ae);i.bindBuffer(i.ARRAY_BUFFER,Ne);for(let ae=0;ae<$.locationSize;ae++)T($.location+ae,ue/$.locationSize,De,te,ue*He,ue/$.locationSize*ae*He,J)}}else if(P!==void 0){const te=P[K];if(te!==void 0)switch(te.length){case 2:i.vertexAttrib2fv($.location,te);break;case 3:i.vertexAttrib3fv($.location,te);break;case 4:i.vertexAttrib4fv($.location,te);break;default:i.vertexAttrib1fv($.location,te)}}}}y()}function S(){w();for(const L in n){const z=n[L];for(const F in z){const C=z[F];for(const H in C){const D=C[H];for(const P in D)d(D[P].object),delete D[P];delete C[H]}}delete n[L]}}function E(L){if(n[L.id]===void 0)return;const z=n[L.id];for(const F in z){const C=z[F];for(const H in C){const D=C[H];for(const P in D)d(D[P].object),delete D[P];delete C[H]}}delete n[L.id]}function A(L){for(const z in n){const F=n[z];for(const C in F){const H=F[C];if(H[L.id]===void 0)continue;const D=H[L.id];for(const P in D)d(D[P].object),delete D[P];delete H[L.id]}}}function x(L){for(const z in n){const F=n[z],C=L.isInstancedMesh===!0?L.id:0,H=F[C];if(H!==void 0){for(const D in H){const P=H[D];for(const K in P)d(P[K].object),delete P[K];delete H[D]}delete F[C],Object.keys(F).length===0&&delete n[z]}}}function w(){R(),r=!0,s!==a&&(s=a,l(s.object))}function R(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:w,resetDefaultState:R,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfObject:x,releaseStatesOfProgram:A,initAttributes:m,enableAttribute:p,disableUnusedAttributes:y}}function ek(i,e,t){let n;function a(c){n=c}function s(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function r(c,l,d){d!==0&&(i.drawArraysInstanced(n,c,l,d),t.update(l,n,d))}function o(c,l,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,d);let u=0;for(let h=0;h<d;h++)u+=l[h];t.update(u,n,1)}this.setMode=a,this.render=s,this.renderInstances=r,this.renderMultiDraw=o}function tk(i,e,t,n){let a;function s(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");a=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function r(A){return!(A!==ki&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const x=A===Gi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Xn&&A!==Ui&&!x&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const d=c(l);d!==l&&($e("WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const f=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&$e("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:h,maxVertexTextures:v,maxTextureSize:m,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:y,maxVaryings:T,maxFragmentUniforms:b,maxSamples:S,samples:E}}function nk(i){const e=this;let t=null,n=0,a=!1,s=!1;const r=new ka,o=new qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const h=f.length!==0||u||n!==0||a;return a=u,n=f.length,h},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){t=d(f,u,0)},this.setState=function(f,u,h){const v=f.clippingPlanes,m=f.clipIntersection,p=f.clipShadows,g=i.get(f);if(!a||v===null||v.length===0||s&&!p)s?d(null):l();else{const y=s?0:n,T=y*4;let b=g.clippingState||null;c.value=b,b=d(v,u,T,h);for(let S=0;S!==T;++S)b[S]=t[S];g.clippingState=b,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(f,u,h,v){const m=f!==null?f.length:0;let p=null;if(m!==0){if(p=c.value,v!==!0||p===null){const g=h+m*4,y=u.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<g)&&(p=new Float32Array(g));for(let T=0,b=h;T!==m;++T,b+=4)r.copy(f[T]).applyMatrix4(y,o),r.normal.toArray(p,b),p[b+3]=r.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,p}}const tr=4,ik=6,ak=20,sk=256,Or=new Pf,ip=new rt;let gd=null,vd=0,_d=0,yd=!1;const rk=new X,ts=new X;class ap{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,a=100,s={}){const{size:r=256,position:o=rk}=s;gd=this._renderer.getRenderTarget(),vd=this._renderer.getActiveCubeFace(),_d=this._renderer.getActiveMipmapLevel(),yd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,a,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=op(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(gd,vd,_d),this._renderer.xr.enabled=yd,e.scissorTest=!1,Ws(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ss||e.mapping===xr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gd=this._renderer.getRenderTarget(),vd=this._renderer.getActiveCubeFace(),_d=this._renderer.getActiveMipmapLevel(),yd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:Gi,format:ki,colorSpace:ql,depthBuffer:!1},a=sp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sp(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=ok(s)),this._blurMaterial=ck(s,e,t),this._ggxMaterial=lk(s,e,t)}return a}_compileMaterial(e){const t=new ti(new Ei,e);this._renderer.compile(t,Or)}_sceneToCubeUV(e,t,n,a,s){const c=new oi(90,1,t,n),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,h=f.toneMapping;f.getClearColor(ip),f.toneMapping=Bi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(a),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ti(new ca,new Bg({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1})));const m=this._backgroundBox,p=m.material;let g=!1;const y=e.background;y?y.isColor&&(p.color.copy(y),e.background=null,g=!0):(p.color.copy(ip),g=!0);for(let T=0;T<6;T++){const b=T%3;b===0?(c.up.set(0,l[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+d[T],s.y,s.z)):b===1?(c.up.set(0,0,l[T]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+d[T],s.z)):(c.up.set(0,l[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+d[T]));const S=this._cubeSize;Ws(a,b*S,T>2?S:0,S,S),f.setRenderTarget(a),g&&f.render(m,c),f.render(e,c)}f.toneMapping=h,f.autoClear=u,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,a=e.mapping===Ss||e.mapping===xr;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=op()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rp());const s=a?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=s;const o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Ws(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(r,Or)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const a=this._lodMeshes.length;for(let s=1;s<a;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const a=this._renderer,s=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[n];o.material=r;const c=r.uniforms,l=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),f=Math.sqrt(l*l-d*d),u=l*1.25,h=f*u,{_lodMax:v}=this,m=this._sizeLods[n],p=3*m*(n>v-tr?n-v+tr:0),g=4*(this._cubeSize-m);c.envMap.value=e.texture,c.roughness.value=h,c.mipInt.value=v-t,Ws(s,p,g,3*m,2*m),a.setRenderTarget(s),a.render(o,Or),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=v-n,Ws(e,p,g,3*m,2*m),a.setRenderTarget(e),a.render(o,Or)}_blur(e,t,n,a){const s=this._pingPongRenderTarget,r=Math.min(a,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,n,r),this._blurPass(s,e,n,n,r)}_blurPass(e,t,n,a,s){const r=this._renderer,o=this._blurMaterial,c=this._lodMeshes[a];c.material=o;const l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=s,l.mipInt.value=this._lodMax-n;const d=this._sizeLods[a],f=3*d*(a>this._lodMax-tr?a-this._lodMax+tr:0),u=4*(this._cubeSize-d);Ws(t,f,u,3*d,2*d),r.setRenderTarget(t),r.render(c,Or)}}function ok(i){const e=[],t=[];let n=i;const a=i-tr+1+ik;for(let s=0;s<a;s++){const r=Math.pow(2,n);e.push(r);const o=1/(r-2),c=-o,l=1+o,d=[c,c,l,c,l,l,c,c,l,l,c,l],f=6,u=6,h=3,v=new Float32Array(h*u*f),m=new Float32Array(h*u*f);for(let g=0;g<f;g++){const y=g%3*2/3-1,T=g>2?0:-1,b=[y,T,0,y+2/3,T,0,y+2/3,T+1,0,y,T,0,y+2/3,T+1,0,y,T+1,0];v.set(b,h*u*g);for(let S=0;S<u;S++){const E=d[S*2]*2-1,A=d[S*2+1]*2-1;g===0?ts.set(1,A,E):g===1?ts.set(-E,1,-A):g===2?ts.set(-E,A,1):g===3?ts.set(-1,A,-E):g===4?ts.set(-E,-1,A):ts.set(E,A,-1),ts.toArray(m,(g*u+S)*h)}}const p=new Ei;p.setAttribute("position",new aa(v,h)),p.setAttribute("outputDirection",new aa(m,h)),t.push(new ti(p,null)),n>tr&&n--}return{lodMeshes:t,sizeLods:e}}function sp(i,e,t){const n=new Mi(i,e,t);return n.texture.mapping=hc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ws(i,e,t,n,a){i.viewport.set(e,t,n,a),i.scissor.set(e,t,n,a)}function lk(i,e,t){return new Vi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:sk,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:gc(),fragmentShader:`

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
		`,blending:na,depthTest:!1,depthWrite:!1})}function ck(i,e,t){return new Vi({name:"SphericalGaussianBlur",defines:{SAMPLES:ak,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:gc(),fragmentShader:`

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
		`,blending:na,depthTest:!1,depthWrite:!1})}function rp(){return new Vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gc(),fragmentShader:`

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
		`,blending:na,depthTest:!1,depthWrite:!1})}function op(){return new Vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:na,depthTest:!1,depthWrite:!1})}function gc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class jg extends Mi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},a=[n,n,n,n,n,n];this.texture=new $g(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new ca(5,5,5),s=new Vi({name:"CubemapFromEquirect",uniforms:br(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pn,blending:na});s.uniforms.tEquirect.value=t;const r=new ti(a,s),o=t.minFilter;return t.minFilter===Ca&&(t.minFilter=tn),new ux(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t=!0,n=!0,a=!0){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,a);e.setRenderTarget(s)}}function dk(i){let e=new WeakMap,t=new WeakMap,n=null;function a(u,h=!1){return u==null?null:h?r(u):s(u)}function s(u){if(u&&u.isTexture){const h=u.mapping;if(h===$c||h===Gc)if(e.has(u)){const v=e.get(u).texture;return o(v,u.mapping)}else{const v=u.image;if(v&&v.height>0){const m=new jg(v.height);return m.fromEquirectangularTexture(i,u),e.set(u,m),u.addEventListener("dispose",l),o(m.texture,u.mapping)}else return null}}return u}function r(u){if(u&&u.isTexture){const h=u.mapping,v=h===$c||h===Gc,m=h===Ss||h===xr;if(v||m){let p=t.get(u);const g=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new ap(i)),p=v?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),p.texture;if(p!==void 0)return p.texture;{const y=u.image;return v&&y&&y.height>0||m&&y&&c(y)?(n===null&&(n=new ap(i)),p=v?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),u.addEventListener("dispose",d),p.texture):null}}}return u}function o(u,h){return h===$c?u.mapping=Ss:h===Gc&&(u.mapping=xr),u}function c(u){let h=0;const v=6;for(let m=0;m<v;m++)u[m]!==void 0&&h++;return h===v}function l(u){const h=u.target;h.removeEventListener("dispose",l);const v=e.get(h);v!==void 0&&(e.delete(h),v.dispose())}function d(u){const h=u.target;h.removeEventListener("dispose",d);const v=t.get(h);v!==void 0&&(t.delete(h),v.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:f}}function uk(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const a=i.getExtension(n);return e[n]=a,a}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const a=t(n);return a===null&&cr("WebGLRenderer: "+n+" extension not supported."),a}}}function fk(i,e,t,n){const a={},s=new WeakMap;function r(f){const u=f.target;u.index!==null&&e.remove(u.index);for(const v in u.attributes)e.remove(u.attributes[v]);u.removeEventListener("dispose",r),delete a[u.id];const h=s.get(u);h&&(e.remove(h),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(f,u){return a[u.id]===!0||(u.addEventListener("dispose",r),a[u.id]=!0,t.memory.geometries++),u}function c(f){const u=f.attributes;for(const h in u)e.update(u[h],i.ARRAY_BUFFER)}function l(f){const u=[],h=f.index,v=f.attributes.position;let m=0;if(v===void 0)return;if(h!==null){const y=h.array;m=h.version;for(let T=0,b=y.length;T<b;T+=3){const S=y[T+0],E=y[T+1],A=y[T+2];u.push(S,E,E,A,A,S)}}else{const y=v.array;m=v.version;for(let T=0,b=y.length/3-1;T<b;T+=3){const S=T+0,E=T+1,A=T+2;u.push(S,E,E,A,A,S)}}const p=new(v.count>=65535?Fg:Og)(u,1);p.version=m;const g=s.get(f);g&&e.remove(g),s.set(f,p)}function d(f){const u=s.get(f);if(u){const h=f.index;h!==null&&u.version<h.version&&l(f)}else l(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:d}}function hk(i,e,t){let n;function a(f){n=f}let s,r;function o(f){s=f.type,r=f.bytesPerElement}function c(f,u){i.drawElements(n,u,s,f*r),t.update(u,n,1)}function l(f,u,h){h!==0&&(i.drawElementsInstanced(n,u,s,f*r,h),t.update(u,n,h))}function d(f,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,f,0,h);let m=0;for(let p=0;p<h;p++)m+=u[p];t.update(m,n,1)}this.setMode=a,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=d}function pk(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,o){switch(t.calls++,r){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:lt("WebGLInfo: Unknown draw mode:",r);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:n}}function mk(i,e,t){const n=new WeakMap,a=new Pt;function s(r,o,c){const l=r.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=d!==void 0?d.length:0;let u=n.get(o);if(u===void 0||u.count!==f){let w=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();const h=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let T=0;h===!0&&(T=1),v===!0&&(T=2),m===!0&&(T=3);let b=o.attributes.position.count*T,S=1;b>e.maxTextureSize&&(S=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const E=new Float32Array(b*S*4*f),A=new Ug(E,b,S,f);A.type=Ui,A.needsUpdate=!0;const x=T*4;for(let R=0;R<f;R++){const L=p[R],z=g[R],F=y[R],C=b*S*4*R;for(let H=0;H<L.count;H++){const D=H*x;h===!0&&(a.fromBufferAttribute(L,H),E[C+D+0]=a.x,E[C+D+1]=a.y,E[C+D+2]=a.z,E[C+D+3]=0),v===!0&&(a.fromBufferAttribute(z,H),E[C+D+4]=a.x,E[C+D+5]=a.y,E[C+D+6]=a.z,E[C+D+7]=0),m===!0&&(a.fromBufferAttribute(F,H),E[C+D+8]=a.x,E[C+D+9]=a.y,E[C+D+10]=a.z,E[C+D+11]=F.itemSize===4?a.w:1)}}u={count:f,texture:A,size:new at(b,S)},n.set(o,u),o.addEventListener("dispose",w)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",r.morphTexture,t);else{let h=0;for(let m=0;m<l.length;m++)h+=l[m];const v=o.morphTargetsRelative?1:1-h;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:s}}function gk(i,e,t,n,a){let s=new WeakMap;function r(l){const d=a.render.frame,f=l.geometry,u=e.get(l,f);if(s.get(u)!==d&&(e.update(u),s.set(u,d)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==d&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,d))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==d&&(h.update(),s.set(h,d))}return u}function o(){s=new WeakMap}function c(l){const d=l.target;d.removeEventListener("dispose",c),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:r,dispose:o}}const vk={[xg]:"LINEAR_TONE_MAPPING",[bg]:"REINHARD_TONE_MAPPING",[Sg]:"CINEON_TONE_MAPPING",[kg]:"ACES_FILMIC_TONE_MAPPING",[Eg]:"AGX_TONE_MAPPING",[wg]:"NEUTRAL_TONE_MAPPING",[Mg]:"CUSTOM_TONE_MAPPING"};function _k(i,e,t,n,a,s){const r=new Mi(e,t,{type:i,depthBuffer:a,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null;const l=new Ei;l.setAttribute("position",new fi([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new fi([0,2,0,0,2,0],2));const d=new nx({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new ti(l,d),u=new Pf(-1,1,1,-1,0,1);let h=null,v=null,m=!1,p,g=null,y=[],T=!1;this.setSize=function(b,S){r.setSize(b,S),o!==null&&o.setSize(b,S),c!==null&&c.setSize(b,S);for(let E=0;E<y.length;E++){const A=y[E];A.setSize&&A.setSize(b,S)}},this.setEffects=function(b){y=b,T=y.length>0&&y[0].isRenderPass===!0;const S=r.width,E=r.height;y.length>0&&o===null&&(o=new Mi(S,E,{type:Gi,depthBuffer:!1,stencilBuffer:!1}),c=new Mi(S,E,{type:Gi,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<y.length;A++){const x=y[A];x.setSize&&x.setSize(S,E)}},this.begin=function(b,S){if(m||b.toneMapping===Bi&&y.length===0)return!1;if(g=S,S!==null){const E=S.width,A=S.height;(r.width!==E||r.height!==A)&&this.setSize(E,A)}return T===!1&&b.setRenderTarget(r),p=b.toneMapping,b.toneMapping=Bi,!0},this.hasRenderPass=function(){return T},this.end=function(b,S){b.toneMapping=p,m=!0;let E=r,A=o;for(let x=0;x<y.length;x++){const w=y[x];w.enabled!==!1&&(w.render(b,A,E,S),w.needsSwap!==!1&&(E=A,A=A===o?c:o))}if(h!==b.outputColorSpace||v!==b.toneMapping){h=b.outputColorSpace,v=b.toneMapping,d.defines={},tt.getTransfer(h)===ht&&(d.defines.SRGB_TRANSFER="");const x=vk[v];x&&(d.defines[x]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=E.texture,b.setRenderTarget(g),b.render(f,u),g=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),d.dispose()}}const Qg=new an,Bu=new ko(1,1),ev=new Ug,tv=new Cy,nv=new $g,lp=[],cp=[],dp=new Float32Array(16),up=new Float32Array(9),fp=new Float32Array(4);function Er(i,e,t){const n=i[0];if(n<=0||n>0)return i;const a=e*t;let s=lp[a];if(s===void 0&&(s=new Float32Array(a),lp[a]=s),e!==0){n.toArray(s,0);for(let r=1,o=0;r!==e;++r)o+=t,i[r].toArray(s,o)}return s}function Kt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Yt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function vc(i,e){let t=cp[e];t===void 0&&(t=new Int32Array(e),cp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function yk(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function xk(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;i.uniform2fv(this.addr,e),Yt(t,e)}}function bk(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Kt(t,e))return;i.uniform3fv(this.addr,e),Yt(t,e)}}function Sk(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;i.uniform4fv(this.addr,e),Yt(t,e)}}function kk(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Yt(t,e)}else{if(Kt(t,n))return;fp.set(n),i.uniformMatrix2fv(this.addr,!1,fp),Yt(t,n)}}function Mk(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Yt(t,e)}else{if(Kt(t,n))return;up.set(n),i.uniformMatrix3fv(this.addr,!1,up),Yt(t,n)}}function Ek(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Yt(t,e)}else{if(Kt(t,n))return;dp.set(n),i.uniformMatrix4fv(this.addr,!1,dp),Yt(t,n)}}function wk(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Tk(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;i.uniform2iv(this.addr,e),Yt(t,e)}}function Ak(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;i.uniform3iv(this.addr,e),Yt(t,e)}}function Rk(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;i.uniform4iv(this.addr,e),Yt(t,e)}}function Lk(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Ck(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;i.uniform2uiv(this.addr,e),Yt(t,e)}}function Pk(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;i.uniform3uiv(this.addr,e),Yt(t,e)}}function Dk(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;i.uniform4uiv(this.addr,e),Yt(t,e)}}function Ik(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a);let s;this.type===i.SAMPLER_2D_SHADOW?(Bu.compareFunction=t.isReversedDepthBuffer()?Tf:wf,s=Bu):s=Qg,t.setTexture2D(e||s,a)}function zk(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTexture3D(e||tv,a)}function Uk(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTextureCube(e||nv,a)}function Nk(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTexture2DArray(e||ev,a)}function Ok(i){switch(i){case 5126:return yk;case 35664:return xk;case 35665:return bk;case 35666:return Sk;case 35674:return kk;case 35675:return Mk;case 35676:return Ek;case 5124:case 35670:return wk;case 35667:case 35671:return Tk;case 35668:case 35672:return Ak;case 35669:case 35673:return Rk;case 5125:return Lk;case 36294:return Ck;case 36295:return Pk;case 36296:return Dk;case 35678:case 36198:case 36298:case 36306:case 35682:return Ik;case 35679:case 36299:case 36307:return zk;case 35680:case 36300:case 36308:case 36293:return Uk;case 36289:case 36303:case 36311:case 36292:return Nk}}function Fk(i,e){i.uniform1fv(this.addr,e)}function Bk(i,e){const t=Er(e,this.size,2);i.uniform2fv(this.addr,t)}function Hk(i,e){const t=Er(e,this.size,3);i.uniform3fv(this.addr,t)}function $k(i,e){const t=Er(e,this.size,4);i.uniform4fv(this.addr,t)}function Gk(i,e){const t=Er(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Vk(i,e){const t=Er(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function qk(i,e){const t=Er(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Wk(i,e){i.uniform1iv(this.addr,e)}function Xk(i,e){i.uniform2iv(this.addr,e)}function Kk(i,e){i.uniform3iv(this.addr,e)}function Yk(i,e){i.uniform4iv(this.addr,e)}function Zk(i,e){i.uniform1uiv(this.addr,e)}function Jk(i,e){i.uniform2uiv(this.addr,e)}function jk(i,e){i.uniform3uiv(this.addr,e)}function Qk(i,e){i.uniform4uiv(this.addr,e)}function e1(i,e,t){const n=this.cache,a=e.length,s=vc(t,a);Kt(n,s)||(i.uniform1iv(this.addr,s),Yt(n,s));let r;this.type===i.SAMPLER_2D_SHADOW?r=Bu:r=Qg;for(let o=0;o!==a;++o)t.setTexture2D(e[o]||r,s[o])}function t1(i,e,t){const n=this.cache,a=e.length,s=vc(t,a);Kt(n,s)||(i.uniform1iv(this.addr,s),Yt(n,s));for(let r=0;r!==a;++r)t.setTexture3D(e[r]||tv,s[r])}function n1(i,e,t){const n=this.cache,a=e.length,s=vc(t,a);Kt(n,s)||(i.uniform1iv(this.addr,s),Yt(n,s));for(let r=0;r!==a;++r)t.setTextureCube(e[r]||nv,s[r])}function i1(i,e,t){const n=this.cache,a=e.length,s=vc(t,a);Kt(n,s)||(i.uniform1iv(this.addr,s),Yt(n,s));for(let r=0;r!==a;++r)t.setTexture2DArray(e[r]||ev,s[r])}function a1(i){switch(i){case 5126:return Fk;case 35664:return Bk;case 35665:return Hk;case 35666:return $k;case 35674:return Gk;case 35675:return Vk;case 35676:return qk;case 5124:case 35670:return Wk;case 35667:case 35671:return Xk;case 35668:case 35672:return Kk;case 35669:case 35673:return Yk;case 5125:return Zk;case 36294:return Jk;case 36295:return jk;case 36296:return Qk;case 35678:case 36198:case 36298:case 36306:case 35682:return e1;case 35679:case 36299:case 36307:return t1;case 35680:case 36300:case 36308:case 36293:return n1;case 36289:case 36303:case 36311:case 36292:return i1}}class s1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ok(t.type)}}class r1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=a1(t.type)}}class o1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const a=this.seq;for(let s=0,r=a.length;s!==r;++s){const o=a[s];o.setValue(e,t[o.id],n)}}}const xd=/(\w+)(\])?(\[|\.)?/g;function hp(i,e){i.seq.push(e),i.map[e.id]=e}function l1(i,e,t){const n=i.name,a=n.length;for(xd.lastIndex=0;;){const s=xd.exec(n),r=xd.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&r+2===a){hp(t,l===void 0?new s1(o,i,e):new r1(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new o1(o),hp(t,f)),t=f}}}class Ll{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const o=e.getActiveUniform(t,r),c=e.getUniformLocation(t,o.name);l1(o,c,this)}const a=[],s=[];for(const r of this.seq)r.type===e.SAMPLER_2D_SHADOW||r.type===e.SAMPLER_CUBE_SHADOW||r.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(r):s.push(r);a.length>0&&(this.seq=a.concat(s))}setValue(e,t,n,a){const s=this.map[t];s!==void 0&&s.setValue(e,n,a)}setOptional(e,t,n){const a=t[n];a!==void 0&&this.setValue(e,n,a)}static upload(e,t,n,a){for(let s=0,r=t.length;s!==r;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,a)}}static seqWithValue(e,t){const n=[];for(let a=0,s=e.length;a!==s;++a){const r=e[a];r.id in t&&n.push(r)}return n}}function pp(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const c1=37297;let d1=0;function u1(i,e){const t=i.split(`
`),n=[],a=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=a;r<s;r++){const o=r+1;n.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return n.join(`
`)}const mp=new qe;function f1(i){tt._getMatrix(mp,tt.workingColorSpace,i);const e=`mat3( ${mp.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(i)){case Wl:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return $e("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function gp(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+u1(i.getShaderSource(e),o)}else return s}function h1(i,e){const t=f1(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const p1={[xg]:"Linear",[bg]:"Reinhard",[Sg]:"Cineon",[kg]:"ACESFilmic",[Eg]:"AgX",[wg]:"Neutral",[Mg]:"Custom"};function m1(i,e){const t=p1[e];return t===void 0?($e("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const fl=new X;function g1(){tt.getLuminanceCoefficients(fl);const i=fl.x.toFixed(4),e=fl.y.toFixed(4),t=fl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function v1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vr).join(`
`)}function _1(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function y1(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let a=0;a<n;a++){const s=i.getActiveAttrib(e,a),r=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[r]={type:s.type,location:i.getAttribLocation(e,r),locationSize:o}}return t}function Vr(i){return i!==""}function vp(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _p(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const x1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hu(i){return i.replace(x1,S1)}const b1=new Map;function S1(i,e){let t=Ye[e];if(t===void 0){const n=b1.get(e);if(n!==void 0)t=Ye[n],$e('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Hu(t)}const k1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yp(i){return i.replace(k1,M1)}function M1(i,e,t,n){let a="";for(let s=parseInt(e);s<parseInt(t);s++)a+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function xp(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const E1={[Ml]:"SHADOWMAP_TYPE_PCF",[Gr]:"SHADOWMAP_TYPE_VSM"};function w1(i){return E1[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const T1={[Ss]:"ENVMAP_TYPE_CUBE",[xr]:"ENVMAP_TYPE_CUBE",[hc]:"ENVMAP_TYPE_CUBE_UV"};function A1(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":T1[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const R1={[xr]:"ENVMAP_MODE_REFRACTION"};function L1(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":R1[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const C1={[yf]:"ENVMAP_BLENDING_MULTIPLY",[ry]:"ENVMAP_BLENDING_MIX",[oy]:"ENVMAP_BLENDING_ADD"};function P1(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":C1[i.combine]||"ENVMAP_BLENDING_NONE"}function D1(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function I1(i,e,t,n){const a=i.getContext(),s=t.defines;let r=t.vertexShader,o=t.fragmentShader;const c=w1(t),l=A1(t),d=L1(t),f=P1(t),u=D1(t),h=v1(t),v=_1(s),m=a.createProgram();let p,g,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Vr).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Vr).join(`
`),g.length>0&&(g+=`
`)):(p=[xp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vr).join(`
`),g=[xp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bi?"#define TONE_MAPPING":"",t.toneMapping!==Bi?Ye.tonemapping_pars_fragment:"",t.toneMapping!==Bi?m1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,h1("linearToOutputTexel",t.outputColorSpace),g1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vr).join(`
`)),r=Hu(r),r=vp(r,t),r=_p(r,t),o=Hu(o),o=vp(o,t),o=_p(o,t),r=yp(r),o=yp(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",t.glslVersion===wh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const T=y+p+r,b=y+g+o,S=pp(a,a.VERTEX_SHADER,T),E=pp(a,a.FRAGMENT_SHADER,b);a.attachShader(m,S),a.attachShader(m,E),t.index0AttributeName!==void 0?a.bindAttribLocation(m,0,t.index0AttributeName):t.hasPositionAttribute===!0&&a.bindAttribLocation(m,0,"position"),a.linkProgram(m);function A(L){if(i.debug.checkShaderErrors){const z=a.getProgramInfoLog(m)||"",F=a.getShaderInfoLog(S)||"",C=a.getShaderInfoLog(E)||"",H=z.trim(),D=F.trim(),P=C.trim();let K=!0,$=!0;if(a.getProgramParameter(m,a.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(a,m,S,E);else{const Q=gp(a,S,"vertex"),te=gp(a,E,"fragment");lt("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(m,a.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+H+`
`+Q+`
`+te)}else H!==""?$e("WebGLProgram: Program Info Log:",H):(D===""||P==="")&&($=!1);$&&(L.diagnostics={runnable:K,programLog:H,vertexShader:{log:D,prefix:p},fragmentShader:{log:P,prefix:g}})}a.deleteShader(S),a.deleteShader(E),x=new Ll(a,m),w=y1(a,m)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=a.getProgramParameter(m,c1)),R},this.destroy=function(){n.releaseStatesOfProgram(this),a.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=d1++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=S,this.fragmentShader=E,this}let z1=0;class U1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const a=this._getShaderCacheForMaterial(e);return a.has(t)===!1&&(a.add(t),t.usedTimes++),a.has(n)===!1&&(a.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new N1(e),t.set(e,n)),n}}class N1{constructor(e){this.id=z1++,this.code=e,this.usedTimes=0}}function O1(i){return i===ks||i===Gl||i===Vl}function F1(i,e,t,n,a,s){const r=new Rf,o=new U1,c=new Set,l=[],d=new Map,f=n.logarithmicDepthBuffer;let u=n.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,w,R,L,z,F){const C=L.fog,H=z.geometry,D=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?L.environment:null,P=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,K=e.get(x.envMap||D,P),$=K&&K.mapping===hc?K.image.height:null,Q=h[x.type];x.precision!==null&&(u=n.getMaxPrecision(x.precision),u!==x.precision&&$e("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));const te=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ue=te!==void 0?te.length:0;let ke=0;H.morphAttributes.position!==void 0&&(ke=1),H.morphAttributes.normal!==void 0&&(ke=2),H.morphAttributes.color!==void 0&&(ke=3);let Ne,De,He,J;if(Q){const bt=Ci[Q];Ne=bt.vertexShader,De=bt.fragmentShader}else{Ne=x.vertexShader,De=x.fragmentShader;const bt=o.getVertexShaderStage(x),dt=o.getFragmentShaderStage(x);o.update(x,bt,dt),He=bt.id,J=dt.id}const ae=i.getRenderTarget(),fe=i.state.buffers.depth.getReversed(),ze=z.isInstancedMesh===!0,be=z.isBatchedMesh===!0,Fe=!!x.map,gt=!!x.matcap,Be=!!K,Xe=!!x.aoMap,st=!!x.lightMap,Ge=!!x.bumpMap&&x.wireframe===!1,ft=!!x.normalMap,It=!!x.displacementMap,Vt=!!x.emissiveMap,ct=!!x.metalnessMap,zt=!!x.roughnessMap,N=x.anisotropy>0,qt=x.clearcoat>0,B=x.dispersion>0,M=x.retroreflectivity>0,_=x.iridescence>0,O=x.sheen>0,G=x.transmission>0,j=N&&!!x.anisotropyMap,ce=qt&&!!x.clearcoatMap,de=qt&&!!x.clearcoatNormalMap,ee=qt&&!!x.clearcoatRoughnessMap,ne=_&&!!x.iridescenceMap,he=_&&!!x.iridescenceThicknessMap,Ce=O&&!!x.sheenColorMap,ve=O&&!!x.sheenRoughnessMap,pe=!!x.specularMap,Pe=!!x.specularColorMap,Oe=!!x.specularIntensityMap,We=G&&!!x.transmissionMap,U=G&&!!x.thicknessMap,me=!!x.gradientMap,se=!!x.alphaMap,ge=x.alphaTest>0,Se=!!x.alphaHash,oe=!!x.extensions;let Ie=Bi;x.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(Ie=i.toneMapping);const Re={shaderID:Q,shaderType:x.type,shaderName:x.name,vertexShader:Ne,fragmentShader:De,defines:x.defines,customVertexShaderID:He,customFragmentShaderID:J,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:be,batchingColor:be&&z._colorsTexture!==null,instancing:ze,instancingColor:ze&&z.instanceColor!==null,instancingMorph:ze&&z.morphTexture!==null,outputColorSpace:ae===null?i.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:tt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Fe,matcap:gt,envMap:Be,envMapMode:Be&&K.mapping,envMapCubeUVHeight:$,aoMap:Xe,lightMap:st,bumpMap:Ge,normalMap:ft,displacementMap:It,emissiveMap:Vt,normalMapObjectSpace:ft&&x.normalMapType===dy,normalMapTangentSpace:ft&&x.normalMapType===Nu,packedNormalMap:ft&&x.normalMapType===Nu&&O1(x.normalMap.format),metalnessMap:ct,roughnessMap:zt,anisotropy:N,anisotropyMap:j,clearcoat:qt,clearcoatMap:ce,clearcoatNormalMap:de,clearcoatRoughnessMap:ee,dispersion:B,retroreflection:M,iridescence:_,iridescenceMap:ne,iridescenceThicknessMap:he,sheen:O,sheenColorMap:Ce,sheenRoughnessMap:ve,specularMap:pe,specularColorMap:Pe,specularIntensityMap:Oe,transmission:G,transmissionMap:We,thicknessMap:U,gradientMap:me,opaque:x.transparent===!1&&x.blending===no&&x.alphaToCoverage===!1,alphaMap:se,alphaTest:ge,alphaHash:Se,combine:x.combine,mapUv:Fe&&v(x.map.channel),aoMapUv:Xe&&v(x.aoMap.channel),lightMapUv:st&&v(x.lightMap.channel),bumpMapUv:Ge&&v(x.bumpMap.channel),normalMapUv:ft&&v(x.normalMap.channel),displacementMapUv:It&&v(x.displacementMap.channel),emissiveMapUv:Vt&&v(x.emissiveMap.channel),metalnessMapUv:ct&&v(x.metalnessMap.channel),roughnessMapUv:zt&&v(x.roughnessMap.channel),anisotropyMapUv:j&&v(x.anisotropyMap.channel),clearcoatMapUv:ce&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:de&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:he&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:ve&&v(x.sheenRoughnessMap.channel),specularMapUv:pe&&v(x.specularMap.channel),specularColorMapUv:Pe&&v(x.specularColorMap.channel),specularIntensityMapUv:Oe&&v(x.specularIntensityMap.channel),transmissionMapUv:We&&v(x.transmissionMap.channel),thicknessMapUv:U&&v(x.thicknessMap.channel),alphaMapUv:se&&v(x.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(ft||N),vertexNormals:!!H.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!H.attributes.uv&&(Fe||se),fog:!!C,useFog:x.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||H.attributes.normal===void 0&&ft===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:fe,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:ke,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:F.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ie,decodeVideoTexture:Fe&&x.map.isVideoTexture===!0&&tt.getTransfer(x.map.colorSpace)===ht,decodeVideoTextureEmissive:Vt&&x.emissiveMap.isVideoTexture===!0&&tt.getTransfer(x.emissiveMap.colorSpace)===ht,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===bi,flipSided:x.side===Pn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:oe&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(oe&&x.extensions.multiDraw===!0||be)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Re.vertexUv1s=c.has(1),Re.vertexUv2s=c.has(2),Re.vertexUv3s=c.has(3),c.clear(),Re}function p(x){const w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(const R in x.defines)w.push(R),w.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(g(w,x),y(w,x),w.push(i.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function g(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numSunLights),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numSunLightShadows),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function y(x,w){r.disableAll(),w.instancing&&r.enable(0),w.instancingColor&&r.enable(1),w.instancingMorph&&r.enable(2),w.matcap&&r.enable(3),w.envMap&&r.enable(4),w.normalMapObjectSpace&&r.enable(5),w.normalMapTangentSpace&&r.enable(6),w.clearcoat&&r.enable(7),w.iridescence&&r.enable(8),w.alphaTest&&r.enable(9),w.vertexColors&&r.enable(10),w.vertexAlphas&&r.enable(11),w.vertexUv1s&&r.enable(12),w.vertexUv2s&&r.enable(13),w.vertexUv3s&&r.enable(14),w.vertexTangents&&r.enable(15),w.anisotropy&&r.enable(16),w.alphaHash&&r.enable(17),w.batching&&r.enable(18),w.dispersion&&r.enable(19),w.retroreflection&&r.enable(24),w.batchingColor&&r.enable(20),w.gradientMap&&r.enable(21),w.packedNormalMap&&r.enable(22),w.vertexNormals&&r.enable(23),x.push(r.mask),r.disableAll(),w.fog&&r.enable(0),w.useFog&&r.enable(1),w.flatShading&&r.enable(2),w.logarithmicDepthBuffer&&r.enable(3),w.reversedDepthBuffer&&r.enable(4),w.skinning&&r.enable(5),w.morphTargets&&r.enable(6),w.morphNormals&&r.enable(7),w.morphColors&&r.enable(8),w.premultipliedAlpha&&r.enable(9),w.shadowMapEnabled&&r.enable(10),w.doubleSided&&r.enable(11),w.flipSided&&r.enable(12),w.useDepthPacking&&r.enable(13),w.dithering&&r.enable(14),w.transmission&&r.enable(15),w.sheen&&r.enable(16),w.opaque&&r.enable(17),w.pointsUvs&&r.enable(18),w.decodeVideoTexture&&r.enable(19),w.decodeVideoTextureEmissive&&r.enable(20),w.alphaToCoverage&&r.enable(21),w.numLightProbeGrids>0&&r.enable(22),w.hasPositionAttribute&&r.enable(23),x.push(r.mask)}function T(x){const w=h[x.type];let R;if(w){const L=Ci[w];R=Qy.clone(L.uniforms)}else R=x.uniforms;return R}function b(x,w){let R=d.get(w);return R!==void 0?++R.usedTimes:(R=new I1(i,w,x,a),l.push(R),d.set(w,R)),R}function S(x){if(--x.usedTimes===0){const w=l.indexOf(x);l[w]=l[l.length-1],l.pop(),d.delete(x.cacheKey),x.destroy()}}function E(x){o.remove(x)}function A(){o.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:T,acquireProgram:b,releaseProgram:S,releaseShaderCache:E,programs:l,dispose:A}}function B1(){let i=new WeakMap;function e(r){return i.has(r)}function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function n(r){i.delete(r)}function a(r,o,c){i.get(r)[o]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:a,dispose:s}}function H1(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function bp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Sp(){const i=[];let e=0;const t=[],n=[],a=[];function s(){e=0,t.length=0,n.length=0,a.length=0}function r(u){let h=0;return u.isInstancedMesh&&(h+=2),u.isSkinnedMesh&&(h+=1),h}function o(u,h,v,m,p,g){let y=i[e];return y===void 0?(y={id:u.id,object:u,geometry:h,material:v,materialVariant:r(u),groupOrder:m,renderOrder:u.renderOrder,z:p,group:g},i[e]=y):(y.id=u.id,y.object=u,y.geometry=h,y.material=v,y.materialVariant=r(u),y.groupOrder=m,y.renderOrder=u.renderOrder,y.z=p,y.group=g),e++,y}function c(u,h,v,m,p,g,y){y.reversedDepth===!0&&(p=-p);const T=o(u,h,v,m,p,g);v.transmission>0?n.push(T):v.transparent===!0?a.push(T):t.push(T)}function l(u,h,v,m,p,g){const y=o(u,h,v,m,p,g);v.transmission>0?n.unshift(y):v.transparent===!0?a.unshift(y):t.unshift(y)}function d(u,h){t.length>1&&t.sort(u||H1),n.length>1&&n.sort(h||bp),a.length>1&&a.sort(h||bp)}function f(){for(let u=e,h=i.length;u<h;u++){const v=i[u];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:a,init:s,push:c,unshift:l,finish:f,sort:d}}function $1(){let i=new WeakMap;function e(n,a){const s=i.get(n);let r;return s===void 0?(r=new Sp,i.set(n,[r])):a>=s.length?(r=new Sp,s.push(r)):r=s[a],r}function t(){i=new WeakMap}return{get:e,dispose:t}}function G1(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new X,color:new rt};break;case"SpotLight":t={position:new X,direction:new X,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":t={color:new rt,position:new X,halfWidth:new X,halfHeight:new X};break}return i[e.id]=t,t}}}function V1(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let q1=0;function W1(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function X1(i){const e=new G1,t=V1(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new X);const a=new X,s=new wt,r=new wt;function o(l){let d=0,f=0,u=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let h=0,v=0,m=0,p=0,g=0,y=0,T=0,b=0,S=0,E=0,A=0,x=0,w=0,R=0;l.sort(W1);for(let z=0,F=l.length;z<F;z++){const C=l[z],H=C.color,D=C.intensity,P=C.distance;let K=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===ks?K=C.shadow.map.texture:K=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)d+=H.r*D,f+=H.g*D,u+=H.b*D;else if(C.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(C.sh.coefficients[$],D);R++}else if(C.isSunLight){const $=e.get(C);if($.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const Q=C.shadow,te=t.get(C);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[v]=te,n.sunShadowMap[v]=K;const ue=Q.getViewportCount();for(let ke=0;ke<ue;ke++)n.sunShadowMatrix[m+ke]=Q.getMatrix(ke),n.sunShadowCascade[m+ke]=Q._cascadeData[ke];m+=ue,v++}n.sun[h]=$,h++}else if(C.isDirectionalLight){const $=e.get(C);if($.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const Q=C.shadow,te=t.get(C);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,n.directionalShadow[p]=te,n.directionalShadowMap[p]=K,n.directionalShadowMatrix[p]=C.shadow.matrix,S++}n.directional[p]=$,p++}else if(C.isSpotLight){const $=e.get(C);$.position.setFromMatrixPosition(C.matrixWorld),$.color.copy(H).multiplyScalar(D),$.distance=P,$.coneCos=Math.cos(C.angle),$.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),$.decay=C.decay,n.spot[y]=$;const Q=C.shadow;if(C.map&&(n.spotLightMap[x]=C.map,x++,Q.updateMatrices(C),C.castShadow&&w++),n.spotLightMatrix[y]=Q.matrix,C.castShadow){const te=t.get(C);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,n.spotShadow[y]=te,n.spotShadowMap[y]=K,A++}y++}else if(C.isRectAreaLight){const $=e.get(C);$.color.copy(H).multiplyScalar(D),$.halfWidth.set(C.width*.5,0,0),$.halfHeight.set(0,C.height*.5,0),n.rectArea[T]=$,T++}else if(C.isPointLight){const $=e.get(C);if($.color.copy(C.color).multiplyScalar(C.intensity),$.distance=C.distance,$.decay=C.decay,C.castShadow){const Q=C.shadow,te=t.get(C);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,te.shadowCameraNear=Q.camera.near,te.shadowCameraFar=Q.camera.far,n.pointShadow[g]=te,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=C.shadow.matrix,E++}n.point[g]=$,g++}else if(C.isHemisphereLight){const $=e.get(C);$.skyColor.copy(C.color).multiplyScalar(D),$.groundColor.copy(C.groundColor).multiplyScalar(D),n.hemi[b]=$,b++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_e.LTC_FLOAT_1,n.rectAreaLTC2=_e.LTC_FLOAT_2):(n.rectAreaLTC1=_e.LTC_HALF_1,n.rectAreaLTC2=_e.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=f,n.ambient[2]=u;const L=n.hash;(L.sunLength!==h||L.directionalLength!==p||L.pointLength!==g||L.spotLength!==y||L.rectAreaLength!==T||L.hemiLength!==b||L.numSunShadows!==v||L.numDirectionalShadows!==S||L.numPointShadows!==E||L.numSpotShadows!==A||L.numSpotMaps!==x||L.numLightProbes!==R)&&(n.sun.length=h,n.directional.length=p,n.spot.length=y,n.rectArea.length=T,n.point.length=g,n.hemi.length=b,n.sunShadow.length=v,n.sunShadowMap.length=v,n.sunShadowMatrix.length=m,n.sunShadowCascade.length=m,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+x-w,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,L.sunLength=h,L.directionalLength=p,L.pointLength=g,L.spotLength=y,L.rectAreaLength=T,L.hemiLength=b,L.numSunShadows=v,L.numDirectionalShadows=S,L.numPointShadows=E,L.numSpotShadows=A,L.numSpotMaps=x,L.numLightProbes=R,n.version=q1++)}function c(l,d){let f=0,u=0,h=0,v=0,m=0,p=0;const g=d.matrixWorldInverse;for(let y=0,T=l.length;y<T;y++){const b=l[y];if(b.isSunLight){const S=n.sun[f];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(g),f++}else if(b.isDirectionalLight){const S=n.directional[u];S.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(a),S.direction.transformDirection(g),u++}else if(b.isSpotLight){const S=n.spot[v];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(a),S.direction.transformDirection(g),v++}else if(b.isRectAreaLight){const S=n.rectArea[m];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(g),r.identity(),s.copy(b.matrixWorld),s.premultiply(g),r.extractRotation(s),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(r),S.halfHeight.applyMatrix4(r),m++}else if(b.isPointLight){const S=n.point[h];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(g),h++}else if(b.isHemisphereLight){const S=n.hemi[p];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(g),p++}}}return{setup:o,setupView:c,state:n}}function kp(i){const e=new X1(i),t=[],n=[],a=[];function s(u){f.camera=u,t.length=0,n.length=0,a.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function c(u){a.push(u)}function l(){e.setup(t)}function d(u){e.setupView(t,u)}const f={lightsArray:t,shadowsArray:n,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:l,setupLightsView:d,pushLight:r,pushShadow:o,pushLightProbeGrid:c}}function K1(i){let e=new WeakMap;function t(a,s=0){const r=e.get(a);let o;return r===void 0?(o=new kp(i),e.set(a,[o])):s>=r.length?(o=new kp(i),r.push(o)):o=r[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Y1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Z1=`uniform sampler2D shadow_pass;
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
}`,J1=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],j1=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],Mp=new wt,Fr=new X,bd=new X;function Q1(i,e,t){let n=new Cf;const a=new at,s=new at,r=new Pt,o=new ix,c=new ax,l={},d=t.maxTextureSize,f={[bs]:Pn,[Pn]:bs,[bi]:bi},u=new Vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:Y1,fragmentShader:Z1}),h=u.clone();h.defines.HORIZONTAL_PASS=1;const v=new Ei;v.setAttribute("position",new aa(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new ti(v,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ml;let g=this.type;this.render=function(E,A,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===H_&&($e("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ml);const w=i.getRenderTarget(),R=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),z=i.state;z.setBlending(na),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const F=g!==this.type;F&&A.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(H=>H.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,H=E.length;C<H;C++){const D=E[C],P=D.shadow;if(P===void 0){$e("WebGLShadowMap:",D,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;a.copy(P.mapSize);const K=P.getFrameExtents();a.multiply(K),s.copy(P.mapSize),(a.x>d||a.y>d)&&(a.x>d&&(s.x=Math.floor(d/K.x),a.x=s.x*K.x,P.mapSize.x=s.x),a.y>d&&(s.y=Math.floor(d/K.y),a.y=s.y*K.y,P.mapSize.y=s.y));const $=i.state.buffers.depth.getReversed();if(P.camera._reversedDepth=$,P.map===null||F===!0){if(P.map!==null&&(P.map.depthTexture!==null&&(P.map.depthTexture.dispose(),P.map.depthTexture=null),P.map.dispose()),this.type===Gr){if(D.isPointLight){$e("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}P.map=new Mi(a.x,a.y,{format:ks,type:Gi,minFilter:tn,magFilter:tn,generateMipmaps:!1}),P.map.texture.name=D.name+".shadowMap",P.map.depthTexture=new ko(a.x,a.y,Ui),P.map.depthTexture.name=D.name+".shadowMapDepth",P.map.depthTexture.format=la,P.map.depthTexture.compareFunction=null,P.map.depthTexture.minFilter=Xt,P.map.depthTexture.magFilter=Xt}else D.isPointLight?(P.map=new jg(a.x),P.map.depthTexture=new Jy(a.x,$i)):(P.map=new Mi(a.x,a.y),P.map.depthTexture=new ko(a.x,a.y,$i)),P.map.depthTexture.name=D.name+".shadowMap",P.map.depthTexture.format=la,this.type===Ml?(P.map.depthTexture.compareFunction=$?Tf:wf,P.map.depthTexture.minFilter=tn,P.map.depthTexture.magFilter=tn):(P.map.depthTexture.compareFunction=null,P.map.depthTexture.minFilter=Xt,P.map.depthTexture.magFilter=Xt);P.camera.updateProjectionMatrix()}P.map.isWebGLCubeRenderTarget!==!0&&(P.map.width!==a.x||P.map.height!==a.y)&&P.map.setSize(a.x,a.y);const Q=P.map.isWebGLCubeRenderTarget?6:P.getViewportCount();D.isPointLight!==!0&&P.updateMatrices(D,x);for(let te=0;te<Q;te++){const ue=P.getCamera(te);if(D.isPointLight){const ke=P.camera,Ne=P.matrix,De=D.distance||ke.far;De!==ke.far&&(ke.far=De,ke.updateProjectionMatrix()),Fr.setFromMatrixPosition(D.matrixWorld),ke.position.copy(Fr),bd.copy(ke.position),bd.add(J1[te]),ke.up.copy(j1[te]),ke.lookAt(bd),ke.updateMatrixWorld(),Ne.makeTranslation(-Fr.x,-Fr.y,-Fr.z),Mp.multiplyMatrices(ke.projectionMatrix,ke.matrixWorldInverse),P._frustum.setFromProjectionMatrix(Mp,ke.coordinateSystem,ke.reversedDepth)}if(P.map.isWebGLCubeRenderTarget)i.setRenderTarget(P.map,te),i.clear();else{te===0&&(i.setRenderTarget(P.map),i.clear());const ke=P.getViewport(te);r.set(s.x*ke.x,s.y*ke.y,s.x*ke.z,s.y*ke.w),z.viewport(r)}n=P.getFrustum(te),b(A,x,ue,D,this.type)}P.isPointLightShadow!==!0&&this.type===Gr&&y(P,x),P.needsUpdate=!1}g=this.type,p.needsUpdate=!1,i.setRenderTarget(w,R,L)};function y(E,A){const x=e.update(m);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,h.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,h.needsUpdate=!0),E.mapPass===null?E.mapPass=new Mi(a.x,a.y,{format:ks,type:Gi}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(A,null,x,u,m,null),h.uniforms.shadow_pass.value=E.mapPass.texture,h.uniforms.resolution.value.set(E.map.width,E.map.height),h.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(A,null,x,h,m,null)}function T(E,A,x,w){let R=null;const L=x.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)R=L;else if(R=x.isPointLight===!0?c:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const z=R.uuid,F=A.uuid;let C=l[z];C===void 0&&(C={},l[z]=C);let H=C[F];H===void 0&&(H=R.clone(),C[F]=H,A.addEventListener("dispose",S)),R=H}if(R.visible=A.visible,R.wireframe=A.wireframe,w===Gr?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:f[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const z=i.properties.get(R);z.light=x}return R}function b(E,A,x,w,R){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&R===Gr)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,E.matrixWorld);const F=e.update(E),C=E.material;if(Array.isArray(C)){const H=F.groups;for(let D=0,P=H.length;D<P;D++){const K=H[D],$=C[K.materialIndex];if($&&$.visible){const Q=T(E,$,w,R);E.onBeforeShadow(i,E,A,x,F,Q,K),i.renderBufferDirect(x,null,F,Q,E,K),E.onAfterShadow(i,E,A,x,F,Q,K)}}}else if(C.visible){const H=T(E,C,w,R);E.onBeforeShadow(i,E,A,x,F,H,null),i.renderBufferDirect(x,null,F,H,E,null),E.onAfterShadow(i,E,A,x,F,H,null)}}const z=E.children;for(let F=0,C=z.length;F<C;F++)b(z[F],A,x,w,R)}function S(E){E.target.removeEventListener("dispose",S);for(const x in l){const w=l[x],R=E.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}function eM(i,e){function t(){let U=!1;const me=new Pt;let se=null;const ge=new Pt(0,0,0,0);return{setMask:function(Se){se!==Se&&!U&&(i.colorMask(Se,Se,Se,Se),se=Se)},setLocked:function(Se){U=Se},setClear:function(Se,oe,Ie,Re,bt){bt===!0&&(Se*=Re,oe*=Re,Ie*=Re),me.set(Se,oe,Ie,Re),ge.equals(me)===!1&&(i.clearColor(Se,oe,Ie,Re),ge.copy(me))},reset:function(){U=!1,se=null,ge.set(-1,0,0,0)}}}function n(){let U=!1,me=!1,se=null,ge=null,Se=null;return{setReversed:function(oe){if(me!==oe){const Ie=e.get("EXT_clip_control");oe?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),me=oe;const Re=Se;Se=null,this.setClear(Re)}},getReversed:function(){return me},setTest:function(oe){oe?ae(i.DEPTH_TEST):fe(i.DEPTH_TEST)},setMask:function(oe){se!==oe&&!U&&(i.depthMask(oe),se=oe)},setFunc:function(oe){if(me&&(oe=Sy[oe]),ge!==oe){switch(oe){case jd:i.depthFunc(i.NEVER);break;case Qd:i.depthFunc(i.ALWAYS);break;case eu:i.depthFunc(i.LESS);break;case _o:i.depthFunc(i.LEQUAL);break;case tu:i.depthFunc(i.EQUAL);break;case nu:i.depthFunc(i.GEQUAL);break;case iu:i.depthFunc(i.GREATER);break;case au:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ge=oe}},setLocked:function(oe){U=oe},setClear:function(oe){Se!==oe&&(Se=oe,me&&(oe=1-oe),i.clearDepth(oe))},reset:function(){U=!1,se=null,ge=null,Se=null,me=!1}}}function a(){let U=!1,me=null,se=null,ge=null,Se=null,oe=null,Ie=null,Re=null,bt=null;return{setTest:function(dt){U||(dt?ae(i.STENCIL_TEST):fe(i.STENCIL_TEST))},setMask:function(dt){me!==dt&&!U&&(i.stencilMask(dt),me=dt)},setFunc:function(dt,pi,wi){(se!==dt||ge!==pi||Se!==wi)&&(i.stencilFunc(dt,pi,wi),se=dt,ge=pi,Se=wi)},setOp:function(dt,pi,wi){(oe!==dt||Ie!==pi||Re!==wi)&&(i.stencilOp(dt,pi,wi),oe=dt,Ie=pi,Re=wi)},setLocked:function(dt){U=dt},setClear:function(dt){bt!==dt&&(i.clearStencil(dt),bt=dt)},reset:function(){U=!1,me=null,se=null,ge=null,Se=null,oe=null,Ie=null,Re=null,bt=null}}}const s=new t,r=new n,o=new a,c=new WeakMap,l=new WeakMap;let d={},f={},u={},h=new WeakMap,v=[],m=null,p=!1,g=null,y=null,T=null,b=null,S=null,E=null,A=null,x=new rt(0,0,0),w=0,R=!1,L=null,z=null,F=null,C=null,H=null;const D=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,K=0;const $=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec($)[1]),P=K>=1):$.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),P=K>=2);let Q=null,te={};const ue=i.getParameter(i.SCISSOR_BOX),ke=i.getParameter(i.VIEWPORT),Ne=new Pt().fromArray(ue),De=new Pt().fromArray(ke);function He(U,me,se,ge){const Se=new Uint8Array(4),oe=i.createTexture();i.bindTexture(U,oe),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ie=0;Ie<se;Ie++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(me,0,i.RGBA,1,1,ge,0,i.RGBA,i.UNSIGNED_BYTE,Se):i.texImage2D(me+Ie,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Se);return oe}const J={};J[i.TEXTURE_2D]=He(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=He(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=He(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=He(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ae(i.DEPTH_TEST),r.setFunc(_o),Ge(!1),ft(Sh),ae(i.CULL_FACE),Xe(na);function ae(U){d[U]!==!0&&(i.enable(U),d[U]=!0)}function fe(U){d[U]!==!1&&(i.disable(U),d[U]=!1)}function ze(U,me){return u[U]!==me?(i.bindFramebuffer(U,me),u[U]=me,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=me),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=me),!0):!1}function be(U,me){let se=v,ge=!1;if(U){se=h.get(me),se===void 0&&(se=[],h.set(me,se));const Se=U.textures;if(se.length!==Se.length||se[0]!==i.COLOR_ATTACHMENT0){for(let oe=0,Ie=Se.length;oe<Ie;oe++)se[oe]=i.COLOR_ATTACHMENT0+oe;se.length=Se.length,ge=!0}}else se[0]!==i.BACK&&(se[0]=i.BACK,ge=!0);ge&&i.drawBuffers(se)}function Fe(U){return m!==U?(i.useProgram(U),m=U,!0):!1}const gt={[Js]:i.FUNC_ADD,[G_]:i.FUNC_SUBTRACT,[V_]:i.FUNC_REVERSE_SUBTRACT};gt[q_]=i.MIN,gt[W_]=i.MAX;const Be={[X_]:i.ZERO,[K_]:i.ONE,[Y_]:i.SRC_COLOR,[_g]:i.SRC_ALPHA,[ty]:i.SRC_ALPHA_SATURATE,[Q_]:i.DST_COLOR,[J_]:i.DST_ALPHA,[Z_]:i.ONE_MINUS_SRC_COLOR,[yg]:i.ONE_MINUS_SRC_ALPHA,[ey]:i.ONE_MINUS_DST_COLOR,[j_]:i.ONE_MINUS_DST_ALPHA,[ny]:i.CONSTANT_COLOR,[iy]:i.ONE_MINUS_CONSTANT_COLOR,[ay]:i.CONSTANT_ALPHA,[sy]:i.ONE_MINUS_CONSTANT_ALPHA};function Xe(U,me,se,ge,Se,oe,Ie,Re,bt,dt){if(U===na){p===!0&&(fe(i.BLEND),p=!1);return}if(p===!1&&(ae(i.BLEND),p=!0),U!==$_){if(U!==g||dt!==R){if((y!==Js||S!==Js)&&(i.blendEquation(i.FUNC_ADD),y=Js,S=Js),dt)switch(U){case no:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case kh:i.blendFunc(i.ONE,i.ONE);break;case Mh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Eh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:lt("WebGLState: Invalid blending: ",U);break}else switch(U){case no:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case kh:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Mh:lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Eh:lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:lt("WebGLState: Invalid blending: ",U);break}T=null,b=null,E=null,A=null,x.set(0,0,0),w=0,g=U,R=dt}return}Se=Se||me,oe=oe||se,Ie=Ie||ge,(me!==y||Se!==S)&&(i.blendEquationSeparate(gt[me],gt[Se]),y=me,S=Se),(se!==T||ge!==b||oe!==E||Ie!==A)&&(i.blendFuncSeparate(Be[se],Be[ge],Be[oe],Be[Ie]),T=se,b=ge,E=oe,A=Ie),(Re.equals(x)===!1||bt!==w)&&(i.blendColor(Re.r,Re.g,Re.b,bt),x.copy(Re),w=bt),g=U,R=!1}function st(U,me){U.side===bi?fe(i.CULL_FACE):ae(i.CULL_FACE);let se=U.side===Pn;me&&(se=!se),Ge(se),U.blending===no&&U.transparent===!1?Xe(na):Xe(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),r.setFunc(U.depthFunc),r.setTest(U.depthTest),r.setMask(U.depthWrite),s.setMask(U.colorWrite);const ge=U.stencilWrite;o.setTest(ge),ge&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Vt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ae(i.SAMPLE_ALPHA_TO_COVERAGE):fe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(U){L!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),L=U)}function ft(U){U!==F_?(ae(i.CULL_FACE),U!==z&&(U===Sh?i.cullFace(i.BACK):U===B_?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):fe(i.CULL_FACE),z=U}function It(U){U!==F&&(P&&i.lineWidth(U),F=U)}function Vt(U,me,se){U?(ae(i.POLYGON_OFFSET_FILL),(C!==me||H!==se)&&(C=me,H=se,r.getReversed()&&(me=-me),i.polygonOffset(me,se))):fe(i.POLYGON_OFFSET_FILL)}function ct(U){U?ae(i.SCISSOR_TEST):fe(i.SCISSOR_TEST)}function zt(U){U===void 0&&(U=i.TEXTURE0+D-1),Q!==U&&(i.activeTexture(U),Q=U)}function N(U,me,se){se===void 0&&(Q===null?se=i.TEXTURE0+D-1:se=Q);let ge=te[se];ge===void 0&&(ge={type:void 0,texture:void 0},te[se]=ge),(ge.type!==U||ge.texture!==me)&&(Q!==se&&(i.activeTexture(se),Q=se),i.bindTexture(U,me||J[U]),ge.type=U,ge.texture=me)}function qt(){const U=te[Q];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function B(){try{i.compressedTexImage2D(...arguments)}catch(U){lt("WebGLState:",U)}}function M(){try{i.compressedTexImage3D(...arguments)}catch(U){lt("WebGLState:",U)}}function _(){try{i.texSubImage2D(...arguments)}catch(U){lt("WebGLState:",U)}}function O(){try{i.texSubImage3D(...arguments)}catch(U){lt("WebGLState:",U)}}function G(){try{i.compressedTexSubImage2D(...arguments)}catch(U){lt("WebGLState:",U)}}function j(){try{i.compressedTexSubImage3D(...arguments)}catch(U){lt("WebGLState:",U)}}function ce(){try{i.texStorage2D(...arguments)}catch(U){lt("WebGLState:",U)}}function de(){try{i.texStorage3D(...arguments)}catch(U){lt("WebGLState:",U)}}function ee(){try{i.texImage2D(...arguments)}catch(U){lt("WebGLState:",U)}}function ne(){try{i.texImage3D(...arguments)}catch(U){lt("WebGLState:",U)}}function he(U){return f[U]!==void 0?f[U]:i.getParameter(U)}function Ce(U,me){f[U]!==me&&(i.pixelStorei(U,me),f[U]=me)}function ve(U){Ne.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),Ne.copy(U))}function pe(U){De.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),De.copy(U))}function Pe(U,me){let se=l.get(me);se===void 0&&(se=new WeakMap,l.set(me,se));let ge=se.get(U);ge===void 0&&(ge=i.getUniformBlockIndex(me,U.name),se.set(U,ge))}function Oe(U,me){const ge=l.get(me).get(U);c.get(me)!==ge&&(i.uniformBlockBinding(me,ge,U.__bindingPointIndex),c.set(me,ge))}function We(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},f={},Q=null,te={},u={},h=new WeakMap,v=[],m=null,p=!1,g=null,y=null,T=null,b=null,S=null,E=null,A=null,x=new rt(0,0,0),w=0,R=!1,L=null,z=null,F=null,C=null,H=null,Ne.set(0,0,i.canvas.width,i.canvas.height),De.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:ae,disable:fe,bindFramebuffer:ze,drawBuffers:be,useProgram:Fe,setBlending:Xe,setMaterial:st,setFlipSided:Ge,setCullFace:ft,setLineWidth:It,setPolygonOffset:Vt,setScissorTest:ct,activeTexture:zt,bindTexture:N,unbindTexture:qt,compressedTexImage2D:B,compressedTexImage3D:M,texImage2D:ee,texImage3D:ne,pixelStorei:Ce,getParameter:he,updateUBOMapping:Pe,uniformBlockBinding:Oe,texStorage2D:ce,texStorage3D:de,texSubImage2D:_,texSubImage3D:O,compressedTexSubImage2D:G,compressedTexSubImage3D:j,scissor:ve,viewport:pe,reset:We}}function tM(i,e,t,n,a,s,r){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new at,d=new WeakMap,f=new Set;let u;const h=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(M,_){return v?new OffscreenCanvas(M,_):So("canvas")}function p(M,_,O){let G=1;const j=B(M);if((j.width>O||j.height>O)&&(G=O/Math.max(j.width,j.height)),G<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const ce=Math.floor(G*j.width),de=Math.floor(G*j.height);u===void 0&&(u=m(ce,de));const ee=_?m(ce,de):u;return ee.width=ce,ee.height=de,ee.getContext("2d").drawImage(M,0,0,ce,de),$e("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+ce+"x"+de+")."),ee}else return"data"in M&&$e("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),M;return M}function g(M){return M.generateMipmaps}function y(M){i.generateMipmap(M)}function T(M){return M.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?i.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(M,_,O,G,j,ce=!1){if(M!==null){if(i[M]!==void 0)return i[M];$e("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let de;G&&(de=e.get("EXT_texture_norm16"),de||$e("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=_;if(_===i.RED&&(O===i.FLOAT&&(ee=i.R32F),O===i.HALF_FLOAT&&(ee=i.R16F),O===i.UNSIGNED_BYTE&&(ee=i.R8),O===i.UNSIGNED_SHORT&&de&&(ee=de.R16_EXT),O===i.SHORT&&de&&(ee=de.R16_SNORM_EXT)),_===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(ee=i.R8UI),O===i.UNSIGNED_SHORT&&(ee=i.R16UI),O===i.UNSIGNED_INT&&(ee=i.R32UI),O===i.BYTE&&(ee=i.R8I),O===i.SHORT&&(ee=i.R16I),O===i.INT&&(ee=i.R32I)),_===i.RG&&(O===i.FLOAT&&(ee=i.RG32F),O===i.HALF_FLOAT&&(ee=i.RG16F),O===i.UNSIGNED_BYTE&&(ee=i.RG8),O===i.UNSIGNED_SHORT&&de&&(ee=de.RG16_EXT),O===i.SHORT&&de&&(ee=de.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(ee=i.RG8UI),O===i.UNSIGNED_SHORT&&(ee=i.RG16UI),O===i.UNSIGNED_INT&&(ee=i.RG32UI),O===i.BYTE&&(ee=i.RG8I),O===i.SHORT&&(ee=i.RG16I),O===i.INT&&(ee=i.RG32I)),_===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(ee=i.RGB8UI),O===i.UNSIGNED_SHORT&&(ee=i.RGB16UI),O===i.UNSIGNED_INT&&(ee=i.RGB32UI),O===i.BYTE&&(ee=i.RGB8I),O===i.SHORT&&(ee=i.RGB16I),O===i.INT&&(ee=i.RGB32I)),_===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(ee=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(ee=i.RGBA16UI),O===i.UNSIGNED_INT&&(ee=i.RGBA32UI),O===i.BYTE&&(ee=i.RGBA8I),O===i.SHORT&&(ee=i.RGBA16I),O===i.INT&&(ee=i.RGBA32I)),_===i.RGB&&(O===i.UNSIGNED_SHORT&&de&&(ee=de.RGB16_EXT),O===i.SHORT&&de&&(ee=de.RGB16_SNORM_EXT),O===i.UNSIGNED_INT_5_9_9_9_REV&&(ee=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(ee=i.R11F_G11F_B10F)),_===i.RGBA){const ne=ce?Wl:tt.getTransfer(j);O===i.FLOAT&&(ee=i.RGBA32F),O===i.HALF_FLOAT&&(ee=i.RGBA16F),O===i.UNSIGNED_BYTE&&(ee=ne===ht?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT&&de&&(ee=de.RGBA16_EXT),O===i.SHORT&&de&&(ee=de.RGBA16_SNORM_EXT),O===i.UNSIGNED_SHORT_4_4_4_4&&(ee=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(ee=i.RGB5_A1)}return(ee===i.R16F||ee===i.R32F||ee===i.RG16F||ee===i.RG32F||ee===i.RGBA16F||ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function S(M,_){let O;return M?_===null||_===$i||_===xo?O=i.DEPTH24_STENCIL8:_===Ui?O=i.DEPTH32F_STENCIL8:_===yo&&(O=i.DEPTH24_STENCIL8,$e("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===$i||_===xo?O=i.DEPTH_COMPONENT24:_===Ui?O=i.DEPTH_COMPONENT32F:_===yo&&(O=i.DEPTH_COMPONENT16),O}function E(M,_){return g(M)===!0||M.isFramebufferTexture&&M.minFilter!==Xt&&M.minFilter!==tn?Math.log2(Math.max(_.width,_.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?_.mipmaps.length:1}function A(M){const _=M.target;_.removeEventListener("dispose",A),w(_),_.isVideoTexture&&d.delete(_),_.isHTMLTexture&&f.delete(_)}function x(M){const _=M.target;_.removeEventListener("dispose",x),L(_)}function w(M){const _=n.get(M);if(_.__webglInit===void 0)return;const O=M.source,G=h.get(O);if(G){const j=G[_.__cacheKey];j.usedTimes--,j.usedTimes===0&&R(M),Object.keys(G).length===0&&h.delete(O)}n.remove(M)}function R(M){const _=n.get(M);i.deleteTexture(_.__webglTexture);const O=M.source,G=h.get(O);delete G[_.__cacheKey],r.memory.textures--}function L(M){const _=n.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),n.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(_.__webglFramebuffer[G]))for(let j=0;j<_.__webglFramebuffer[G].length;j++)i.deleteFramebuffer(_.__webglFramebuffer[G][j]);else i.deleteFramebuffer(_.__webglFramebuffer[G]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[G])}else{if(Array.isArray(_.__webglFramebuffer))for(let G=0;G<_.__webglFramebuffer.length;G++)i.deleteFramebuffer(_.__webglFramebuffer[G]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let G=0;G<_.__webglColorRenderbuffer.length;G++)_.__webglColorRenderbuffer[G]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[G]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const O=M.textures;for(let G=0,j=O.length;G<j;G++){const ce=n.get(O[G]);ce.__webglTexture&&(i.deleteTexture(ce.__webglTexture),r.memory.textures--),n.remove(O[G])}n.remove(M)}let z=0;function F(){z=0}function C(){return z}function H(M){z=M}function D(){const M=z;return M>=a.maxTextures&&$e("WebGLTextures: Trying to use "+(M+1)+" texture units while this GPU supports only "+a.maxTextures),z+=1,M}function P(M){const _=[];return _.push(M.wrapS),_.push(M.wrapT),_.push(M.wrapR||0),_.push(M.magFilter),_.push(M.minFilter),_.push(M.anisotropy),_.push(M.internalFormat),_.push(M.format),_.push(M.type),_.push(M.generateMipmaps),_.push(M.premultiplyAlpha),_.push(M.flipY),_.push(M.unpackAlignment),_.push(M.colorSpace),_.join()}function K(M,_){const O=n.get(M);if(M.isVideoTexture&&N(M),M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&O.__version!==M.version){const G=M.image;if(G===null)$e("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)$e("WebGLRenderer: Texture marked for update but image is incomplete");else{fe(O,M,_);return}}else M.isExternalTexture&&(O.__webglTexture=M.sourceTexture?M.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+_)}function $(M,_){const O=n.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&O.__version!==M.version){fe(O,M,_);return}else M.isExternalTexture&&(O.__webglTexture=M.sourceTexture?M.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+_)}function Q(M,_){const O=n.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&O.__version!==M.version){fe(O,M,_);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+_)}function te(M,_){const O=n.get(M);if(M.isCubeDepthTexture!==!0&&M.version>0&&O.__version!==M.version){ze(O,M,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+_)}const ue={[su]:i.REPEAT,[ea]:i.CLAMP_TO_EDGE,[ru]:i.MIRRORED_REPEAT},ke={[Xt]:i.NEAREST,[ly]:i.NEAREST_MIPMAP_NEAREST,[Go]:i.NEAREST_MIPMAP_LINEAR,[tn]:i.LINEAR,[Vc]:i.LINEAR_MIPMAP_NEAREST,[Ca]:i.LINEAR_MIPMAP_LINEAR},Ne={[fy]:i.NEVER,[vy]:i.ALWAYS,[hy]:i.LESS,[wf]:i.LEQUAL,[py]:i.EQUAL,[Tf]:i.GEQUAL,[my]:i.GREATER,[gy]:i.NOTEQUAL};function De(M,_){if(_.type===Ui&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===tn||_.magFilter===Vc||_.magFilter===Go||_.magFilter===Ca||_.minFilter===tn||_.minFilter===Vc||_.minFilter===Go||_.minFilter===Ca)&&$e("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(M,i.TEXTURE_WRAP_S,ue[_.wrapS]),i.texParameteri(M,i.TEXTURE_WRAP_T,ue[_.wrapT]),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,ue[_.wrapR]),i.texParameteri(M,i.TEXTURE_MAG_FILTER,ke[_.magFilter]),i.texParameteri(M,i.TEXTURE_MIN_FILTER,ke[_.minFilter]),_.compareFunction&&(i.texParameteri(M,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(M,i.TEXTURE_COMPARE_FUNC,Ne[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Xt||_.minFilter!==Go&&_.minFilter!==Ca||_.type===Ui&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(M,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,a.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function He(M,_){let O=!1;M.__webglInit===void 0&&(M.__webglInit=!0,_.addEventListener("dispose",A));const G=_.source;let j=h.get(G);j===void 0&&(j={},h.set(G,j));const ce=P(_);if(ce!==M.__cacheKey){j[ce]===void 0&&(j[ce]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,O=!0),j[ce].usedTimes++;const de=j[M.__cacheKey];de!==void 0&&(j[M.__cacheKey].usedTimes--,de.usedTimes===0&&R(_)),M.__cacheKey=ce,M.__webglTexture=j[ce].texture}return O}function J(M,_,O){return Math.floor(Math.floor(M/O)/_)}function ae(M,_,O,G){const ce=M.updateRanges;if(ce.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,O,G,_.data);else{ce.sort((Ce,ve)=>Ce.start-ve.start);let de=0;for(let Ce=1;Ce<ce.length;Ce++){const ve=ce[de],pe=ce[Ce],Pe=ve.start+ve.count,Oe=J(pe.start,_.width,4),We=J(ve.start,_.width,4);pe.start<=Pe+1&&Oe===We&&J(pe.start+pe.count-1,_.width,4)===Oe?ve.count=Math.max(ve.count,pe.start+pe.count-ve.start):(++de,ce[de]=pe)}ce.length=de+1;const ee=t.getParameter(i.UNPACK_ROW_LENGTH),ne=t.getParameter(i.UNPACK_SKIP_PIXELS),he=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let Ce=0,ve=ce.length;Ce<ve;Ce++){const pe=ce[Ce],Pe=Math.floor(pe.start/4),Oe=Math.ceil(pe.count/4),We=Pe%_.width,U=Math.floor(Pe/_.width),me=Oe,se=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,We),t.pixelStorei(i.UNPACK_SKIP_ROWS,U),t.texSubImage2D(i.TEXTURE_2D,0,We,U,me,se,O,G,_.data)}M.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ee),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ne),t.pixelStorei(i.UNPACK_SKIP_ROWS,he)}}function fe(M,_,O){let G=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(G=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(G=i.TEXTURE_3D);const j=He(M,_),ce=_.source;t.bindTexture(G,M.__webglTexture,i.TEXTURE0+O);const de=n.get(ce);if(ce.version!==de.__version||j===!0){if(t.activeTexture(i.TEXTURE0+O),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const se=tt.getPrimaries(tt.workingColorSpace),ge=_.colorSpace===wa?null:tt.getPrimaries(_.colorSpace),Se=_.colorSpace===wa||se===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se)}t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let ne=p(_.image,!1,a.maxTextureSize);ne=qt(_,ne);const he=s.convert(_.format,_.colorSpace),Ce=s.convert(_.type);let ve=b(_.internalFormat,he,Ce,_.normalized,_.colorSpace,_.isVideoTexture);De(G,_);let pe;const Pe=_.mipmaps,Oe=_.isVideoTexture!==!0,We=de.__version===void 0||j===!0,U=ce.dataReady,me=E(_,ne);if(_.isDepthTexture)ve=S(_.format===fs,_.type),We&&(Oe?t.texStorage2D(i.TEXTURE_2D,1,ve,ne.width,ne.height):t.texImage2D(i.TEXTURE_2D,0,ve,ne.width,ne.height,0,he,Ce,null));else if(_.isDataTexture)if(Pe.length>0){Oe&&We&&t.texStorage2D(i.TEXTURE_2D,me,ve,Pe[0].width,Pe[0].height);for(let se=0,ge=Pe.length;se<ge;se++)pe=Pe[se],Oe?U&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,pe.width,pe.height,he,Ce,pe.data):t.texImage2D(i.TEXTURE_2D,se,ve,pe.width,pe.height,0,he,Ce,pe.data);_.generateMipmaps=!1}else Oe?(We&&t.texStorage2D(i.TEXTURE_2D,me,ve,ne.width,ne.height),U&&ae(_,ne,he,Ce)):t.texImage2D(i.TEXTURE_2D,0,ve,ne.width,ne.height,0,he,Ce,ne.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Oe&&We&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,ve,Pe[0].width,Pe[0].height,ne.depth);for(let se=0,ge=Pe.length;se<ge;se++)if(pe=Pe[se],_.format!==ki)if(he!==null)if(Oe){if(U)if(_.layerUpdates.size>0){const Se=np(pe.width,pe.height,_.format,_.type);for(const oe of _.layerUpdates){const Ie=pe.data.subarray(oe*Se/pe.data.BYTES_PER_ELEMENT,(oe+1)*Se/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,oe,pe.width,pe.height,1,he,Ie)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,pe.width,pe.height,ne.depth,he,pe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,se,ve,pe.width,pe.height,ne.depth,0,pe.data,0,0);else $e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?U&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,pe.width,pe.height,ne.depth,he,Ce,pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,se,ve,pe.width,pe.height,ne.depth,0,he,Ce,pe.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Oe&&We&&t.texStorage2D(i.TEXTURE_2D,me,ve,Pe[0].width,Pe[0].height);for(let se=0,ge=Pe.length;se<ge;se++)pe=Pe[se],_.format!==ki?he!==null?Oe?U&&t.compressedTexSubImage2D(i.TEXTURE_2D,se,0,0,pe.width,pe.height,he,pe.data):t.compressedTexImage2D(i.TEXTURE_2D,se,ve,pe.width,pe.height,0,pe.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?U&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,pe.width,pe.height,he,Ce,pe.data):t.texImage2D(i.TEXTURE_2D,se,ve,pe.width,pe.height,0,he,Ce,pe.data)}else if(_.isDataArrayTexture)if(Oe){if(We&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,ve,ne.width,ne.height,ne.depth),U)if(_.layerUpdates.size>0){const se=np(ne.width,ne.height,_.format,_.type);for(const ge of _.layerUpdates){const Se=ne.data.subarray(ge*se/ne.data.BYTES_PER_ELEMENT,(ge+1)*se/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ge,ne.width,ne.height,1,he,Ce,Se)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,he,Ce,ne.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ve,ne.width,ne.height,ne.depth,0,he,Ce,ne.data);else if(_.isData3DTexture)Oe?(We&&t.texStorage3D(i.TEXTURE_3D,me,ve,ne.width,ne.height,ne.depth),U&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,he,Ce,ne.data)):t.texImage3D(i.TEXTURE_3D,0,ve,ne.width,ne.height,ne.depth,0,he,Ce,ne.data);else if(_.isFramebufferTexture){if(We)if(Oe)t.texStorage2D(i.TEXTURE_2D,me,ve,ne.width,ne.height);else{let se=ne.width,ge=ne.height;for(let Se=0;Se<me;Se++)t.texImage2D(i.TEXTURE_2D,Se,ve,se,ge,0,he,Ce,null),se>>=1,ge>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){const se=i.canvas;if(se.hasAttribute("layoutsubtree")||se.setAttribute("layoutsubtree","true"),ne.parentNode!==se){se.appendChild(ne),f.add(_),se.onpaint=ge=>{const Se=ge.changedElements;for(const oe of f)Se.includes(oe.image)&&(oe.needsUpdate=!0)},se.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ne);else{const Se=i.RGBA,oe=i.RGBA,Ie=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Se,oe,Ie,ne)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Pe.length>0){if(Oe&&We){const se=B(Pe[0]);t.texStorage2D(i.TEXTURE_2D,me,ve,se.width,se.height)}for(let se=0,ge=Pe.length;se<ge;se++)pe=Pe[se],Oe?U&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,he,Ce,pe):t.texImage2D(i.TEXTURE_2D,se,ve,he,Ce,pe);_.generateMipmaps=!1}else if(Oe){if(We){const se=B(ne);t.texStorage2D(i.TEXTURE_2D,me,ve,se.width,se.height)}U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,he,Ce,ne)}else t.texImage2D(i.TEXTURE_2D,0,ve,he,Ce,ne);g(_)&&y(G),de.__version=ce.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function ze(M,_,O){if(_.image.length!==6)return;const G=He(M,_),j=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,M.__webglTexture,i.TEXTURE0+O);const ce=n.get(j);if(j.version!==ce.__version||G===!0){t.activeTexture(i.TEXTURE0+O);const de=tt.getPrimaries(tt.workingColorSpace),ee=_.colorSpace===wa?null:tt.getPrimaries(_.colorSpace),ne=_.colorSpace===wa||de===ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);const he=_.isCompressedTexture||_.image[0].isCompressedTexture,Ce=_.image[0]&&_.image[0].isDataTexture,ve=[];for(let oe=0;oe<6;oe++)!he&&!Ce?ve[oe]=p(_.image[oe],!0,a.maxCubemapSize):ve[oe]=Ce?_.image[oe].image:_.image[oe],ve[oe]=qt(_,ve[oe]);const pe=ve[0],Pe=s.convert(_.format,_.colorSpace),Oe=s.convert(_.type),We=b(_.internalFormat,Pe,Oe,_.normalized,_.colorSpace),U=_.isVideoTexture!==!0,me=ce.__version===void 0||G===!0,se=j.dataReady;let ge=E(_,pe);De(i.TEXTURE_CUBE_MAP,_);let Se;if(he){U&&me&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,We,pe.width,pe.height);for(let oe=0;oe<6;oe++){Se=ve[oe].mipmaps;for(let Ie=0;Ie<Se.length;Ie++){const Re=Se[Ie];_.format!==ki?Pe!==null?U?se&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ie,0,0,Re.width,Re.height,Pe,Re.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ie,We,Re.width,Re.height,0,Re.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ie,0,0,Re.width,Re.height,Pe,Oe,Re.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ie,We,Re.width,Re.height,0,Pe,Oe,Re.data)}}}else{if(Se=_.mipmaps,U&&me){Se.length>0&&ge++;const oe=B(ve[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,We,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(Ce){U?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,ve[oe].width,ve[oe].height,Pe,Oe,ve[oe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,We,ve[oe].width,ve[oe].height,0,Pe,Oe,ve[oe].data);for(let Ie=0;Ie<Se.length;Ie++){const bt=Se[Ie].image[oe].image;U?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ie+1,0,0,bt.width,bt.height,Pe,Oe,bt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ie+1,We,bt.width,bt.height,0,Pe,Oe,bt.data)}}else{U?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Pe,Oe,ve[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,We,Pe,Oe,ve[oe]);for(let Ie=0;Ie<Se.length;Ie++){const Re=Se[Ie];U?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ie+1,0,0,Pe,Oe,Re.image[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ie+1,We,Pe,Oe,Re.image[oe])}}}g(_)&&y(i.TEXTURE_CUBE_MAP),ce.__version=j.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function be(M,_,O,G,j,ce){const de=s.convert(O.format,O.colorSpace),ee=s.convert(O.type),ne=b(O.internalFormat,de,ee,O.normalized,O.colorSpace),he=n.get(_),Ce=n.get(O);if(Ce.__renderTarget=_,!he.__hasExternalTextures){const ve=Math.max(1,_.width>>ce),pe=Math.max(1,_.height>>ce);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?t.texImage3D(j,ce,ne,ve,pe,_.depth,0,de,ee,null):t.texImage2D(j,ce,ne,ve,pe,0,de,ee,null)}t.bindFramebuffer(i.FRAMEBUFFER,M),zt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,G,j,Ce.__webglTexture,0,ct(_)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,G,j,Ce.__webglTexture,ce),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Fe(M,_,O){if(i.bindRenderbuffer(i.RENDERBUFFER,M),_.depthBuffer){const G=_.depthTexture,j=G&&G.isDepthTexture?G.type:null,ce=S(_.stencilBuffer,j),de=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;zt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct(_),ce,_.width,_.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct(_),ce,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ce,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,de,i.RENDERBUFFER,M)}else{const G=_.textures;for(let j=0;j<G.length;j++){const ce=G[j],de=s.convert(ce.format,ce.colorSpace),ee=s.convert(ce.type),ne=b(ce.internalFormat,de,ee,ce.normalized,ce.colorSpace);zt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct(_),ne,_.width,_.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct(_),ne,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ne,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function gt(M,_,O){const G=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,M),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const j=n.get(_.depthTexture);if(j.__renderTarget=_,(!j.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),G){if(j.__webglInit===void 0&&(j.__webglInit=!0,_.depthTexture.addEventListener("dispose",A)),j.__webglTexture===void 0){j.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),De(i.TEXTURE_CUBE_MAP,_.depthTexture);const he=s.convert(_.depthTexture.format),Ce=s.convert(_.depthTexture.type);let ve;_.depthTexture.format===la?ve=i.DEPTH_COMPONENT24:_.depthTexture.format===fs&&(ve=i.DEPTH24_STENCIL8);for(let pe=0;pe<6;pe++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ve,_.width,_.height,0,he,Ce,null)}}else K(_.depthTexture,0);const ce=j.__webglTexture,de=ct(_),ee=G?i.TEXTURE_CUBE_MAP_POSITIVE_X+O:i.TEXTURE_2D,ne=_.depthTexture.format===fs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===la)zt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,ee,ce,0,de):i.framebufferTexture2D(i.FRAMEBUFFER,ne,ee,ce,0);else if(_.depthTexture.format===fs)zt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,ee,ce,0,de):i.framebufferTexture2D(i.FRAMEBUFFER,ne,ee,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Be(M){const _=n.get(M),O=M.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==M.depthTexture){const G=M.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),G){const j=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,G.removeEventListener("dispose",j)};G.addEventListener("dispose",j),_.__depthDisposeCallback=j}_.__boundDepthTexture=G}if(M.depthTexture&&!_.__autoAllocateDepthBuffer)if(O)for(let G=0;G<6;G++)gt(_.__webglFramebuffer[G],M,G);else{const G=M.texture.mipmaps;G&&G.length>0?gt(_.__webglFramebuffer[0],M,0):gt(_.__webglFramebuffer,M,0)}else if(O){_.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[G]),_.__webglDepthbuffer[G]===void 0)_.__webglDepthbuffer[G]=i.createRenderbuffer(),Fe(_.__webglDepthbuffer[G],M,!1);else{const j=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=_.__webglDepthbuffer[G];i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,ce)}}else{const G=M.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Fe(_.__webglDepthbuffer,M,!1);else{const j=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,ce)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Xe(M,_,O){const G=n.get(M);_!==void 0&&be(G.__webglFramebuffer,M,M.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Be(M)}function st(M){const _=M.texture,O=n.get(M),G=n.get(_);M.addEventListener("dispose",x);const j=M.textures,ce=M.isWebGLCubeRenderTarget===!0,de=j.length>1;if(de||(G.__webglTexture===void 0&&(G.__webglTexture=i.createTexture()),G.__version=_.version,r.memory.textures++),ce){O.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[ee]=[];for(let ne=0;ne<_.mipmaps.length;ne++)O.__webglFramebuffer[ee][ne]=i.createFramebuffer()}else O.__webglFramebuffer[ee]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let ee=0;ee<_.mipmaps.length;ee++)O.__webglFramebuffer[ee]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(de)for(let ee=0,ne=j.length;ee<ne;ee++){const he=n.get(j[ee]);he.__webglTexture===void 0&&(he.__webglTexture=i.createTexture(),r.memory.textures++)}if(M.samples>0&&zt(M)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ee=0;ee<j.length;ee++){const ne=j[ee];O.__webglColorRenderbuffer[ee]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[ee]);const he=s.convert(ne.format,ne.colorSpace),Ce=s.convert(ne.type),ve=b(ne.internalFormat,he,Ce,ne.normalized,ne.colorSpace,M.isXRRenderTarget===!0),pe=ct(M);i.renderbufferStorageMultisample(i.RENDERBUFFER,pe,ve,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ee,i.RENDERBUFFER,O.__webglColorRenderbuffer[ee])}i.bindRenderbuffer(i.RENDERBUFFER,null),M.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),Fe(O.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ce){t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture),De(i.TEXTURE_CUBE_MAP,_);for(let ee=0;ee<6;ee++)if(_.mipmaps&&_.mipmaps.length>0)for(let ne=0;ne<_.mipmaps.length;ne++)be(O.__webglFramebuffer[ee][ne],M,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ne);else be(O.__webglFramebuffer[ee],M,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);g(_)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){for(let ee=0,ne=j.length;ee<ne;ee++){const he=j[ee],Ce=n.get(he);let ve=i.TEXTURE_2D;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(ve=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ve,Ce.__webglTexture),De(ve,he),be(O.__webglFramebuffer,M,he,i.COLOR_ATTACHMENT0+ee,ve,0),g(he)&&y(ve)}t.unbindTexture()}else{let ee=i.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(ee=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ee,G.__webglTexture),De(ee,_),_.mipmaps&&_.mipmaps.length>0)for(let ne=0;ne<_.mipmaps.length;ne++)be(O.__webglFramebuffer[ne],M,_,i.COLOR_ATTACHMENT0,ee,ne);else be(O.__webglFramebuffer,M,_,i.COLOR_ATTACHMENT0,ee,0);g(_)&&y(ee),t.unbindTexture()}M.depthBuffer&&Be(M)}function Ge(M){const _=M.textures;for(let O=0,G=_.length;O<G;O++){const j=_[O];if(g(j)){const ce=T(M),de=n.get(j).__webglTexture;t.bindTexture(ce,de),y(ce),t.unbindTexture()}}}const ft=[],It=[];function Vt(M){if(M.samples>0){if(zt(M)===!1){const _=M.textures,O=M.width,G=M.height;let j=i.COLOR_BUFFER_BIT;const ce=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=n.get(M),ee=_.length>1;if(ee)for(let he=0;he<_.length;he++)t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer);const ne=M.texture.mipmaps;ne&&ne.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let he=0;he<_.length;he++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),ee){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,de.__webglColorRenderbuffer[he]);const Ce=n.get(_[he]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ce,0)}i.blitFramebuffer(0,0,O,G,0,0,O,G,j,i.NEAREST),c===!0&&(ft.length=0,It.length=0,ft.push(i.COLOR_ATTACHMENT0+he),M.depthBuffer&&M.storeMultisampledDepthBuffer===!1&&(ft.push(ce),It.push(ce),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,It)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ft))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ee)for(let he=0;he<_.length;he++){t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,de.__webglColorRenderbuffer[he]);const Ce=n.get(_[he]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,Ce,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.storeMultisampledDepthBuffer===!1&&c){const _=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function ct(M){return Math.min(a.maxSamples,M.samples)}function zt(M){const _=n.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function N(M){const _=r.render.frame;d.get(M)!==_&&(d.set(M,_),M.update())}function qt(M,_){const O=M.colorSpace,G=M.format,j=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||O!==ql&&O!==wa&&(tt.getTransfer(O)===ht?(G!==ki||j!==Xn)&&$e("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):lt("WebGLTextures: Unsupported texture color space:",O)),_}function B(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(l.width=M.naturalWidth||M.width,l.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(l.width=M.displayWidth,l.height=M.displayHeight):(l.width=M.width,l.height=M.height),l}this.allocateTextureUnit=D,this.resetTextureUnits=F,this.getTextureUnits=C,this.setTextureUnits=H,this.setTexture2D=K,this.setTexture2DArray=$,this.setTexture3D=Q,this.setTextureCube=te,this.rebindTextures=Xe,this.setupRenderTarget=st,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=Vt,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=be,this.useMultisampledRTT=zt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function nM(i,e){function t(n,a=wa){let s;const r=tt.getTransfer(a);if(n===Xn)return i.UNSIGNED_BYTE;if(n===bf)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Sf)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Lg)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Cg)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ag)return i.BYTE;if(n===Rg)return i.SHORT;if(n===yo)return i.UNSIGNED_SHORT;if(n===xf)return i.INT;if(n===$i)return i.UNSIGNED_INT;if(n===Ui)return i.FLOAT;if(n===Gi)return i.HALF_FLOAT;if(n===Pg)return i.ALPHA;if(n===Dg)return i.RGB;if(n===ki)return i.RGBA;if(n===la)return i.DEPTH_COMPONENT;if(n===fs)return i.DEPTH_STENCIL;if(n===Ig)return i.RED;if(n===kf)return i.RED_INTEGER;if(n===ks)return i.RG;if(n===Mf)return i.RG_INTEGER;if(n===Ef)return i.RGBA_INTEGER;if(n===El||n===wl||n===Tl||n===Al)if(r===ht)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===El)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===wl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Tl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Al)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===El)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===wl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Tl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Al)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ou||n===lu||n===cu||n===du)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ou)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===lu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===cu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===du)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===uu||n===fu||n===hu||n===pu||n===mu||n===Gl||n===gu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===uu||n===fu)return r===ht?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===hu)return r===ht?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===pu)return s.COMPRESSED_R11_EAC;if(n===mu)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Gl)return s.COMPRESSED_RG11_EAC;if(n===gu)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===vu||n===_u||n===yu||n===xu||n===bu||n===Su||n===ku||n===Mu||n===Eu||n===wu||n===Tu||n===Au||n===Ru||n===Lu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===vu)return r===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===_u)return r===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===yu)return r===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===xu)return r===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===bu)return r===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Su)return r===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ku)return r===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Mu)return r===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Eu)return r===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===wu)return r===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Tu)return r===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Au)return r===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ru)return r===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Lu)return r===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Cu||n===Pu||n===Du)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Cu)return r===ht?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Pu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Du)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Iu||n===zu||n===Vl||n===Uu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Iu)return s.COMPRESSED_RED_RGTC1_EXT;if(n===zu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Vl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Uu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===xo?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const iM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,aM=`
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

}`;class sM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Vg(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Vi({vertexShader:iM,fragmentShader:aM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ti(new mc(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class rM extends Ts{constructor(e,t){super();const n=this;let a=null,s=1,r=null,o="local-floor",c=1,l=null,d=null,f=null,u=null,h=null,v=null;const m=typeof XRWebGLBinding<"u",p=new sM,g={},y=t.getContextAttributes();let T=null,b=null;const S=[],E=[],A=new at;let x=null,w=null;const R=new oi;R.viewport=new Pt;const L=new oi;L.viewport=new Pt;const z=[R,L],F=new fx;let C=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ae=S[J];return ae===void 0&&(ae=new jc,S[J]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(J){let ae=S[J];return ae===void 0&&(ae=new jc,S[J]=ae),ae.getGripSpace()},this.getHand=function(J){let ae=S[J];return ae===void 0&&(ae=new jc,S[J]=ae),ae.getHandSpace()};function D(J){const ae=E.indexOf(J.inputSource);if(ae===-1)return;const fe=S[ae];fe!==void 0&&(fe.update(J.inputSource,J.frame,l||r),fe.dispatchEvent({type:J.type,data:J.inputSource}))}function P(){a.removeEventListener("select",D),a.removeEventListener("selectstart",D),a.removeEventListener("selectend",D),a.removeEventListener("squeeze",D),a.removeEventListener("squeezestart",D),a.removeEventListener("squeezeend",D),a.removeEventListener("end",P),a.removeEventListener("inputsourceschange",K);for(let J=0;J<S.length;J++){const ae=E[J];ae!==null&&(E[J]=null,S[J].disconnect(ae))}C=null,H=null,p.reset();for(const J in g)delete g[J];if(e.setRenderTarget(T),h=null,u=null,f=null,a=null,b=null,He.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(A.width,A.height,!1),w!==null){const J=w.camera;J.fov=w.fov,J.zoom=w.zoom,J.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&$e("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&$e("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return u!==null?u:h},this.getBinding=function(){return f===null&&m&&(f=new XRWebGLBinding(a,t)),f},this.getFrame=function(){return v},this.getSession=function(){return a},this.setSession=async function(J){if(a=J,a!==null){if(T=e.getRenderTarget(),a.addEventListener("select",D),a.addEventListener("selectstart",D),a.addEventListener("selectend",D),a.addEventListener("squeeze",D),a.addEventListener("squeezestart",D),a.addEventListener("squeezeend",D),a.addEventListener("end",P),a.addEventListener("inputsourceschange",K),y.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(A),m&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,ze=null,be=null;y.depth&&(be=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=y.stencil?fs:la,ze=y.stencil?xo:$i);const Fe={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:s};f=this.getBinding(),u=f.createProjectionLayer(Fe),a.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),b=new Mi(u.textureWidth,u.textureHeight,{format:ki,type:Xn,depthTexture:new ko(u.textureWidth,u.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const fe={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(a,t,fe),a.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),b=new Mi(h.framebufferWidth,h.framebufferHeight,{format:ki,type:Xn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await a.requestReferenceSpace(o),He.setContext(a),He.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function K(J){for(let ae=0;ae<J.removed.length;ae++){const fe=J.removed[ae],ze=E.indexOf(fe);ze>=0&&(E[ze]=null,S[ze].disconnect(fe))}for(let ae=0;ae<J.added.length;ae++){const fe=J.added[ae];let ze=E.indexOf(fe);if(ze===-1){for(let Fe=0;Fe<S.length;Fe++)if(Fe>=E.length){E.push(fe),ze=Fe;break}else if(E[Fe]===null){E[Fe]=fe,ze=Fe;break}if(ze===-1)break}const be=S[ze];be&&be.connect(fe)}}const $=new X,Q=new X;function te(J,ae,fe){$.setFromMatrixPosition(ae.matrixWorld),Q.setFromMatrixPosition(fe.matrixWorld);const ze=$.distanceTo(Q),be=ae.projectionMatrix.elements,Fe=fe.projectionMatrix.elements,gt=be[14]/(be[10]-1),Be=be[14]/(be[10]+1),Xe=(be[9]+1)/be[5],st=(be[9]-1)/be[5],Ge=(be[8]-1)/be[0],ft=(Fe[8]+1)/Fe[0],It=gt*Ge,Vt=gt*ft,ct=ze/(-Ge+ft),zt=ct*-Ge;if(ae.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(zt),J.translateZ(ct),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),be[10]===-1)J.projectionMatrix.copy(ae.projectionMatrix),J.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const N=gt+ct,qt=Be+ct,B=It-zt,M=Vt+(ze-zt),_=Xe*Be/qt*N,O=st*Be/qt*N;J.projectionMatrix.makePerspective(B,M,_,O,N,qt),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ue(J,ae){ae===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ae.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(a===null)return;let ae=J.near,fe=J.far;p.texture!==null&&(p.depthNear>0&&(ae=p.depthNear),p.depthFar>0&&(fe=p.depthFar)),F.near=L.near=R.near=ae,F.far=L.far=R.far=fe,(C!==F.near||H!==F.far)&&(a.updateRenderState({depthNear:F.near,depthFar:F.far}),C=F.near,H=F.far),F.layers.mask=J.layers.mask|6,R.layers.mask=F.layers.mask&-5,L.layers.mask=F.layers.mask&-3;const ze=J.parent,be=F.cameras;ue(F,ze);for(let Fe=0;Fe<be.length;Fe++)ue(be[Fe],ze);be.length===2?te(F,R,L):F.projectionMatrix.copy(R.projectionMatrix),w===null&&J.isPerspectiveCamera&&(w={camera:J,fov:J.fov,zoom:J.zoom}),ke(J,F,ze)};function ke(J,ae,fe){fe===null?J.matrix.copy(ae.matrixWorld):(J.matrix.copy(fe.matrixWorld),J.matrix.invert(),J.matrix.multiply(ae.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ae.projectionMatrix),J.projectionMatrixInverse.copy(ae.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Ou*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(u===null&&h===null))return c},this.setFoveation=function(J){c=J,u!==null&&(u.fixedFoveation=J),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=J)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(F)},this.getCameraTexture=function(J){return g[J]};let Ne=null;function De(J,ae){if(d=ae.getViewerPose(l||r),v=ae,d!==null){const fe=d.views;h!==null&&(e.setRenderTargetFramebuffer(b,h.framebuffer),e.setRenderTarget(b));let ze=!1;fe.length!==F.cameras.length&&(F.cameras.length=0,ze=!0);for(let Be=0;Be<fe.length;Be++){const Xe=fe[Be];let st=null;if(h!==null)st=h.getViewport(Xe);else{const ft=f.getViewSubImage(u,Xe);st=ft.viewport,Be===0&&(e.setRenderTargetTextures(b,ft.colorTexture,ft.depthStencilTexture),e.setRenderTarget(b))}let Ge=z[Be];Ge===void 0&&(Ge=new oi,Ge.layers.enable(Be),Ge.viewport=new Pt,z[Be]=Ge),Ge.matrix.fromArray(Xe.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(Xe.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(st.x,st.y,st.width,st.height),Be===0&&(F.matrix.copy(Ge.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),ze===!0&&F.cameras.push(Ge)}const be=a.enabledFeatures;if(be&&be.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&m){f=n.getBinding();const Be=f.getDepthInformation(fe[0]);Be&&Be.isValid&&Be.texture&&p.init(Be,a.renderState)}if(be&&be.includes("camera-access")&&m){e.state.unbindTexture(),f=n.getBinding();for(let Be=0;Be<fe.length;Be++){const Xe=fe[Be].camera;if(Xe){let st=g[Xe];st||(st=new Vg,g[Xe]=st);const Ge=f.getCameraImage(Xe);st.sourceTexture=Ge}}}}for(let fe=0;fe<S.length;fe++){const ze=E[fe],be=S[fe];ze!==null&&be!==void 0&&be.update(ze,ae,l||r)}Ne&&Ne(J,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),v=null}const He=new Zg;He.setAnimationLoop(De),this.setAnimationLoop=function(J){Ne=J},this.dispose=function(){}}}const oM=new wt,iv=new qe;iv.set(-1,0,0,0,1,0,0,0,1);function lM(i,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,qg(i)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function a(p,g,y,T,b){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?s(p,g):g.isMeshLambertMaterial?(s(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(p,g),f(p,g)):g.isMeshPhongMaterial?(s(p,g),d(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(p,g),u(p,g),g.isMeshPhysicalMaterial&&h(p,g,b)):g.isMeshMatcapMaterial?(s(p,g),v(p,g)):g.isMeshDepthMaterial?s(p,g):g.isMeshDistanceMaterial?(s(p,g),m(p,g)):g.isMeshNormalMaterial?s(p,g):g.isLineBasicMaterial?(r(p,g),g.isLineDashedMaterial&&o(p,g)):g.isPointsMaterial?c(p,g,y,T):g.isSpriteMaterial?l(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===Pn&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===Pn&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const y=e.get(g),T=y.envMap,b=y.envMapRotation;T&&(p.envMap.value=T,p.envMapRotation.value.setFromMatrix4(oM.makeRotationFromEuler(b)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(iv),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function r(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function o(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function c(p,g,y,T){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*y,p.scale.value=T*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function l(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function d(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function f(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function u(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function h(p,g,y){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Pn&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,g){g.matcap&&(p.matcap.value=g.matcap)}function m(p,g){const y=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:a}}function cM(i,e,t,n){let a={},s={},r=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,S){const E=S.program;n.uniformBlockBinding(b,E)}function l(b,S){let E=a[b.id];E===void 0&&(p(b),E=d(b),a[b.id]=E,b.addEventListener("dispose",y));const A=S.program;n.updateUBOMapping(b,A);const x=e.render.frame;s[b.id]!==x&&(u(b),s[b.id]=x)}function d(b){const S=f();b.__bindingPointIndex=S;const E=i.createBuffer(),A=b.__size,x=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,A,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,E),E}function f(){for(let b=0;b<o;b++)if(r.indexOf(b)===-1)return r.push(b),b;return lt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(b){const S=a[b.id],E=b.uniforms,A=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let x=0,w=E.length;x<w;x++){const R=E[x];if(Array.isArray(R))for(let L=0,z=R.length;L<z;L++)h(R[L],x,L,A);else h(R,x,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(b,S,E,A){if(m(b,S,E,A)===!0){const x=b.__offset,w=b.value;if(Array.isArray(w)){let R=0;for(let L=0;L<w.length;L++){const z=w[L],F=g(z);v(z,b.__data,R),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(R+=F.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(w,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,b.__data)}}function v(b,S,E){typeof b=="number"||typeof b=="boolean"?S[0]=b:b.isMatrix3?(S[0]=b.elements[0],S[1]=b.elements[1],S[2]=b.elements[2],S[3]=0,S[4]=b.elements[3],S[5]=b.elements[4],S[6]=b.elements[5],S[7]=0,S[8]=b.elements[6],S[9]=b.elements[7],S[10]=b.elements[8],S[11]=0):ArrayBuffer.isView(b)?S.set(new b.constructor(b.buffer,b.byteOffset,S.length)):b.toArray(S,E)}function m(b,S,E,A){const x=b.value,w=S+"_"+E;if(A[w]===void 0)return typeof x=="number"||typeof x=="boolean"?A[w]=x:ArrayBuffer.isView(x)?A[w]=x.slice():A[w]=x.clone(),!0;{const R=A[w];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return A[w]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function p(b){const S=b.uniforms;let E=0;const A=16;for(let w=0,R=S.length;w<R;w++){const L=Array.isArray(S[w])?S[w]:[S[w]];for(let z=0,F=L.length;z<F;z++){const C=L[z],H=Array.isArray(C.value)?C.value:[C.value];for(let D=0,P=H.length;D<P;D++){const K=H[D],$=g(K),Q=E%A,te=Q%$.boundary,ue=Q+te;E+=te,ue!==0&&A-ue<$.storage&&(E+=A-ue),C.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=E,E+=$.storage}}}const x=E%A;return x>0&&(E+=A-x),b.__size=E,b.__cache={},this}function g(b){const S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?$e("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(S.boundary=16,S.storage=b.byteLength):$e("WebGLRenderer: Unsupported uniform value type.",b),S}function y(b){const S=b.target;S.removeEventListener("dispose",y);const E=r.indexOf(S.__bindingPointIndex);r.splice(E,1),i.deleteBuffer(a[S.id]),delete a[S.id],delete s[S.id]}function T(){for(const b in a)i.deleteBuffer(a[b]);r=[],a={},s={}}return{bind:c,update:l,dispose:T}}const dM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ri=null;function uM(){return Ri===null&&(Ri=new Xy(dM,16,16,ks,Gi),Ri.name="DFG_LUT",Ri.minFilter=tn,Ri.magFilter=tn,Ri.wrapS=ea,Ri.wrapT=ea,Ri.generateMipmaps=!1,Ri.needsUpdate=!0),Ri}class fM{constructor(e={}){const{canvas:t=xy(),context:n=null,depth:a=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:h=Xn}=e;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=r;const m=h,p=new Set([Ef,Mf,kf]),g=new Set([Xn,$i,yo,xo,bf,Sf]),y=new Uint32Array(4),T=new Int32Array(4),b=new X;let S=null,E=null;const A=[],x=[];let w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let L=!1,z=null,F=null,C=null,H=null;this._outputColorSpace=Gn;let D=0,P=0,K=null,$=-1,Q=null;const te=new Pt,ue=new Pt;let ke=null;const Ne=new rt(0);let De=0,He=t.width,J=t.height,ae=1,fe=null,ze=null;const be=new Pt(0,0,He,J),Fe=new Pt(0,0,He,J);let gt=!1;const Be=new Cf;let Xe=!1,st=!1;const Ge=new wt,ft=new X,It=new Pt,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ct=!1;function zt(){return K===null?ae:1}let N=n;function qt(k,I){return t.getContext(k,I)}let B,M,_,O,G,j,ce,de,ee,ne,he,Ce,ve,pe,Pe,Oe,We,U,me,se,ge,Se,oe;try{const k={alpha:!0,depth:a,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${_f}`),t.addEventListener("webglcontextlost",bt,!1),t.addEventListener("webglcontextrestored",dt,!1),t.addEventListener("webglcontextcreationerror",pi,!1),N===null){const I="webgl2";if(N=qt(I,k),N===null)throw qt(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ie()}catch(k){throw t.removeEventListener("webglcontextlost",bt,!1),t.removeEventListener("webglcontextrestored",dt,!1),t.removeEventListener("webglcontextcreationerror",pi,!1),lt("WebGLRenderer: "+k.message),k}function Ie(){B=new uk(N),B.init(),ge=new nM(N,B),M=new tk(N,B,e,ge),_=new eM(N,B),M.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),F=N.createFramebuffer(),C=N.createFramebuffer(),H=N.createFramebuffer(),O=new pk(N),G=new B1,j=new tM(N,B,_,G,M,ge,O),ce=new dk(R),de=new gx(N),Se=new QS(N,de),ee=new fk(N,de,O,Se),ne=new gk(N,ee,de,Se,O),U=new mk(N,M,j),Pe=new nk(G),he=new F1(R,ce,B,M,Se,Pe),Ce=new lM(R,G),ve=new $1,pe=new K1(B),We=new jS(R,ce,_,ne,v,c),Oe=new Q1(R,ne,M),oe=new cM(N,O,M,_),me=new ek(N,B,O),se=new hk(N,B,O),O.programs=he.programs,R.capabilities=M,R.extensions=B,R.properties=G,R.renderLists=ve,R.shadowMap=Oe,R.state=_,R.info=O}m!==Xn&&(w=new _k(m,t.width,t.height,o,a,s));const Re=new rM(R,N);this.xr=Re,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const k=B.get("WEBGL_lose_context");k&&k.loseContext()},this.forceContextRestore=function(){const k=B.get("WEBGL_lose_context");k&&k.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(k){k!==void 0&&(ae=k,this.setSize(He,J,!1))},this.getSize=function(k){return k.set(He,J)},this.setSize=function(k,I,Z=!0){if(Re.isPresenting){$e("WebGLRenderer: Can't change size while VR device is presenting.");return}He=k,J=I,t.width=Math.floor(k*ae),t.height=Math.floor(I*ae),Z===!0&&(t.style.width=k+"px",t.style.height=I+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,k,I)},this.getDrawingBufferSize=function(k){return k.set(He*ae,J*ae).floor()},this.setDrawingBufferSize=function(k,I,Z){He=k,J=I,ae=Z,t.width=Math.floor(k*Z),t.height=Math.floor(I*Z),this.setViewport(0,0,k,I)},this.setEffects=function(k){if(m===Xn){lt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(k){for(let I=0;I<k.length;I++)if(k[I].isOutputPass===!0){$e("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(k||[])},this.getCurrentViewport=function(k){return k.copy(te)},this.getViewport=function(k){return k.copy(be)},this.setViewport=function(k,I,Z,q){k.isVector4?be.set(k.x,k.y,k.z,k.w):be.set(k,I,Z,q),_.viewport(te.copy(be).multiplyScalar(ae).round())},this.getScissor=function(k){return k.copy(Fe)},this.setScissor=function(k,I,Z,q){k.isVector4?Fe.set(k.x,k.y,k.z,k.w):Fe.set(k,I,Z,q),_.scissor(ue.copy(Fe).multiplyScalar(ae).round())},this.getScissorTest=function(){return gt},this.setScissorTest=function(k){_.setScissorTest(gt=k)},this.setOpaqueSort=function(k){fe=k},this.setTransparentSort=function(k){ze=k},this.getClearColor=function(k){return k.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor(...arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha(...arguments)},this.clear=function(k=!0,I=!0,Z=!0){let q=0;if(k){let W=!1;if(K!==null){const xe=K.texture.format;W=p.has(xe)}if(W){const xe=K.texture.type,we=g.has(xe),ye=We.getClearColor(),Te=We.getClearAlpha(),Le=ye.r,Ke=ye.g,Qe=ye.b;we?(y[0]=Le,y[1]=Ke,y[2]=Qe,y[3]=Te,N.clearBufferuiv(N.COLOR,0,y)):(T[0]=Le,T[1]=Ke,T[2]=Qe,T[3]=Te,N.clearBufferiv(N.COLOR,0,T))}else q|=N.COLOR_BUFFER_BIT}I&&(q|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(q|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&N.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(k){k.setRenderer(this),z=k},this.dispose=function(){t.removeEventListener("webglcontextlost",bt,!1),t.removeEventListener("webglcontextrestored",dt,!1),t.removeEventListener("webglcontextcreationerror",pi,!1),We.dispose(),ve.dispose(),pe.dispose(),G.dispose(),ce.dispose(),ne.dispose(),Se.dispose(),oe.dispose(),he.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",Wf),Re.removeEventListener("sessionend",Xf),Ka.stop()};function bt(k){k.preventDefault(),Ah("WebGLRenderer: Context Lost."),L=!0}function dt(){Ah("WebGLRenderer: Context Restored."),L=!1;const k=O.autoReset,I=Oe.enabled,Z=Oe.autoUpdate,q=Oe.needsUpdate,W=Oe.type;Ie(),O.autoReset=k,Oe.enabled=I,Oe.autoUpdate=Z,Oe.needsUpdate=q,Oe.type=W}function pi(k){lt("WebGLRenderer: A WebGL context could not be created. Reason: ",k.statusMessage)}function wi(k){const I=k.target;I.removeEventListener("dispose",wi),a0(I)}function a0(k){s0(k),G.remove(k)}function s0(k){const I=G.get(k).programs;I!==void 0&&(I.forEach(function(Z){he.releaseProgram(Z)}),k.isShaderMaterial&&he.releaseShaderCache(k))}this.renderBufferDirect=function(k,I,Z,q,W,xe){I===null&&(I=Vt);const we=W.isMesh&&W.matrixWorld.determinantAffine()<0,ye=l0(k,I,Z,q,W);_.setMaterial(q,we);let Te=Z.index,Le=1;if(q.wireframe===!0){if(Te=ee.getWireframeAttribute(Z),Te===void 0)return;Le=2}const Ke=Z.drawRange,Qe=Z.attributes.position;let Ae=Ke.start*Le,ut=(Ke.start+Ke.count)*Le;xe!==null&&(Ae=Math.max(Ae,xe.start*Le),ut=Math.min(ut,(xe.start+xe.count)*Le)),Te!==null?(Ae=Math.max(Ae,0),ut=Math.min(ut,Te.count)):Qe!=null&&(Ae=Math.max(Ae,0),ut=Math.min(ut,Qe.count));const Ft=ut-Ae;if(Ft<0||Ft===1/0)return;Se.setup(W,q,ye,Z,Te);let Mt,vt=me;if(Te!==null&&(Mt=de.get(Te),vt=se,vt.setIndex(Mt)),W.isMesh)q.wireframe===!0?(_.setLineWidth(q.wireframeLinewidth*zt()),vt.setMode(N.LINES)):vt.setMode(N.TRIANGLES);else if(W.isLine){let ln=q.linewidth;ln===void 0&&(ln=1),_.setLineWidth(ln*zt()),W.isLineSegments?vt.setMode(N.LINES):W.isLineLoop?vt.setMode(N.LINE_LOOP):vt.setMode(N.LINE_STRIP)}else W.isPoints?vt.setMode(N.POINTS):W.isSprite&&vt.setMode(N.TRIANGLES);if(W.isBatchedMesh)if(B.get("WEBGL_multi_draw"))vt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const ln=W._multiDrawStarts,Ee=W._multiDrawCounts,gn=W._multiDrawCount,ot=Te?de.get(Te).bytesPerElement:1,ni=G.get(q).currentProgram.getUniforms();for(let Ti=0;Ti<gn;Ti++)ni.setValue(N,"_gl_DrawID",Ti),vt.render(ln[Ti]/ot,Ee[Ti])}else if(W.isInstancedMesh)vt.renderInstances(Ae,Ft,W.count);else if(Z.isInstancedBufferGeometry){const ln=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Ee=Math.min(Z.instanceCount,ln);vt.renderInstances(Ae,Ft,Ee)}else vt.render(Ae,Ft)};function qf(k,I,Z,q){z!==null&&k.isNodeMaterial&&z.setObject(q,k),Xe===!0&&Pe.setState(k,Z,!1),k.transparent===!0&&k.side===bi&&k.forceSinglePass===!1?(k.side=Pn,k.needsUpdate=!0,Ho(k,I,q),k.side=bs,k.needsUpdate=!0,Ho(k,I,q),k.side=bi):Ho(k,I,q)}this.compile=function(k,I,Z=null){Z===null&&(Z=k),z!==null&&z.renderStart(k,I,Z),E=pe.get(Z),E.init(I),x.push(E),Z.traverseVisible(function(W){W.isLight&&W.layers.test(I.layers)&&(E.pushLight(W),W.castShadow&&E.pushShadow(W))}),k!==Z&&k.traverseVisible(function(W){W.isLight&&W.layers.test(I.layers)&&(E.pushLight(W),W.castShadow&&E.pushShadow(W))}),E.setupLights(),z!==null&&z.updateLights(E.state.lightsArray),st=this.localClippingEnabled,Xe=Pe.init(this.clippingPlanes,st),Xe===!0&&Pe.setGlobalState(this.clippingPlanes,I),z!==null&&Oe.render(E.state.shadowsArray,Z,I);const q=new Set;return k.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const xe=W.material;if(xe)if(Array.isArray(xe))for(let we=0;we<xe.length;we++){const ye=xe[we];qf(ye,Z,I,W),q.add(ye)}else qf(xe,Z,I,W),q.add(xe)}),E=x.pop(),z!==null&&z.renderEnd(),q},this.compileAsync=function(k,I,Z=null){const q=this.compile(k,I,Z);return new Promise(W=>{function xe(){if(q.forEach(function(we){const Te=G.get(we).currentProgram;(Te===void 0||Te.isReady())&&q.delete(we)}),q.size===0){W(k);return}setTimeout(xe,10)}B.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let Pc=null;function r0(k){Pc&&Pc(k)}function Wf(){Ka.stop()}function Xf(){Ka.start()}const Ka=new Zg;Ka.setAnimationLoop(r0),typeof self<"u"&&Ka.setContext(self),this.setAnimationLoop=function(k){Pc=k,Re.setAnimationLoop(k),k===null?Ka.stop():Ka.start()},Re.addEventListener("sessionstart",Wf),Re.addEventListener("sessionend",Xf),this.render=function(k,I){if(I!==void 0&&I.isCamera!==!0){lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;z!==null&&z.renderStart(k,I);const Z=Re.enabled===!0&&Re.isPresenting===!0,q=w!==null&&(K===null||Z)&&w.begin(R,K);if(k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(I),I=Re.getCamera()),k.isScene===!0&&k.onBeforeRender(R,k,I,K),E=pe.get(k,x.length),E.init(I),E.state.textureUnits=j.getTextureUnits(),x.push(E),Ge.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Be.setFromProjectionMatrix(Ge,Ni,I.reversedDepth),st=this.localClippingEnabled,Xe=Pe.init(this.clippingPlanes,st),S=ve.get(k,A.length),S.init(),A.push(S),Re.enabled===!0&&Re.isPresenting===!0){const we=R.xr.getDepthSensingMesh();we!==null&&Dc(we,I,-1/0,R.sortObjects)}Dc(k,I,0,R.sortObjects),S.finish(),z!==null&&z.updateLights(E.state.lightsArray),R.sortObjects===!0&&S.sort(fe,ze),ct=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,ct&&We.addToRenderList(S,k),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Xe===!0&&Pe.beginShadows();const W=E.state.shadowsArray;if(Oe.render(W,k,I),Xe===!0&&Pe.endShadows(),(q&&w.hasRenderPass())===!1){const we=S.opaque,ye=S.transmissive;if(E.setupLights(),I.isArrayCamera){const Te=I.cameras;if(ye.length>0)for(let Le=0,Ke=Te.length;Le<Ke;Le++){const Qe=Te[Le];Yf(we,ye,k,Qe)}ct&&We.render(k);for(let Le=0,Ke=Te.length;Le<Ke;Le++){const Qe=Te[Le];Kf(S,k,Qe,Qe.viewport)}}else ye.length>0&&Yf(we,ye,k,I),ct&&We.render(k),Kf(S,k,I)}K!==null&&P===0&&(j.updateMultisampleRenderTarget(K),j.updateRenderTargetMipmap(K)),q&&w.end(R),k.isScene===!0&&k.onAfterRender(R,k,I),Se.resetDefaultState(),$=-1,Q=null,x.pop(),x.length>0?(E=x[x.length-1],j.setTextureUnits(E.state.textureUnits),Xe===!0&&Pe.setGlobalState(R.clippingPlanes,E.state.camera)):E=null,A.pop(),A.length>0?S=A[A.length-1]:S=null,z!==null&&z.renderEnd()};function Dc(k,I,Z,q){if(k.visible===!1)return;if(k.layers.test(I.layers)){if(k.isGroup)Z=k.renderOrder;else if(k.isLOD)k.autoUpdate===!0&&k.update(I);else if(k.isLightProbeGrid)E.pushLightProbeGrid(k);else if(k.isLight)E.pushLight(k),k.castShadow&&E.pushShadow(k);else if(k.isSprite){if(!k.frustumCulled||k.intersectsFrustum(Be)){q&&It.setFromMatrixPosition(k.matrixWorld).applyMatrix4(Ge);const we=ne.update(k),ye=k.material;ye.visible&&S.push(k,we,ye,Z,It.z,null,I)}}else if((k.isMesh||k.isLine||k.isPoints)&&(!k.frustumCulled||k.intersectsFrustum(Be))){const we=ne.update(k),ye=k.material;if(q&&(k.boundingSphere!==void 0?(k.boundingSphere===null&&k.computeBoundingSphere(),It.copy(k.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),It.copy(we.boundingSphere.center)),It.applyMatrix4(k.matrixWorld).applyMatrix4(Ge)),Array.isArray(ye)){const Te=we.groups;for(let Le=0,Ke=Te.length;Le<Ke;Le++){const Qe=Te[Le],Ae=ye[Qe.materialIndex];Ae&&Ae.visible&&S.push(k,we,Ae,Z,It.z,Qe,I)}}else ye.visible&&S.push(k,we,ye,Z,It.z,null,I)}}const xe=k.children;for(let we=0,ye=xe.length;we<ye;we++)Dc(xe[we],I,Z,q)}function Kf(k,I,Z,q){const{opaque:W,transmissive:xe,transparent:we}=k;E.setupLightsView(Z),Xe===!0&&Pe.setGlobalState(R.clippingPlanes,Z),q&&_.viewport(te.copy(q)),W.length>0&&Bo(W,I,Z),xe.length>0&&Bo(xe,I,Z),we.length>0&&Bo(we,I,Z),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function Yf(k,I,Z,q){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[q.id]===void 0){const Ae=B.has("EXT_color_buffer_half_float")||B.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[q.id]=new Mi(1,1,{generateMipmaps:!0,type:Ae?Gi:Xn,minFilter:Ca,samples:Math.max(4,M.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:tt.workingColorSpace})}const xe=E.state.transmissionRenderTarget[q.id],we=q.viewport||te;xe.setSize(we.z*R.transmissionResolutionScale,we.w*R.transmissionResolutionScale);const ye=R.getRenderTarget(),Te=R.getActiveCubeFace(),Le=R.getActiveMipmapLevel();R.setRenderTarget(xe),R.getClearColor(Ne),De=R.getClearAlpha(),De<1&&R.setClearColor(16777215,.5),R.clear(),ct&&We.render(Z);const Ke=R.toneMapping;R.toneMapping=Bi;const Qe=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),E.setupLightsView(q),Xe===!0&&Pe.setGlobalState(R.clippingPlanes,q),Bo(k,Z,q),j.updateMultisampleRenderTarget(xe),j.updateRenderTargetMipmap(xe),B.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let ut=0,Ft=I.length;ut<Ft;ut++){const Mt=I[ut],{object:vt,geometry:ln,material:Ee,group:gn}=Mt;if(Ee.side===bi&&vt.layers.test(q.layers)){const ot=Ee.side;Ee.side=Pn,Ee.needsUpdate=!0,Zf(vt,Z,q,ln,Ee,gn),Ee.side=ot,Ee.needsUpdate=!0,Ae=!0}}Ae===!0&&(j.updateMultisampleRenderTarget(xe),j.updateRenderTargetMipmap(xe))}R.setRenderTarget(ye,Te,Le),R.setClearColor(Ne,De),Qe!==void 0&&(q.viewport=Qe),R.toneMapping=Ke}function Bo(k,I,Z){const q=I.isScene===!0?I.overrideMaterial:null;for(let W=0,xe=k.length;W<xe;W++){const we=k[W],{object:ye,geometry:Te,group:Le}=we;let Ke=we.material;Ke.allowOverride===!0&&q!==null&&(Ke=q),ye.layers.test(Z.layers)&&Zf(ye,I,Z,Te,Ke,Le)}}function Zf(k,I,Z,q,W,xe){z!==null&&W.isNodeMaterial&&z.setObject(k,W),k.onBeforeRender(R,I,Z,q,W,xe),k.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,k.matrixWorld),k.normalMatrix.getNormalMatrix(k.modelViewMatrix),W.onBeforeRender(R,I,Z,q,k,xe),W.transparent===!0&&W.side===bi&&W.forceSinglePass===!1?(W.side=Pn,W.needsUpdate=!0,R.renderBufferDirect(Z,I,q,W,k,xe),W.side=bs,W.needsUpdate=!0,R.renderBufferDirect(Z,I,q,W,k,xe),W.side=bi):R.renderBufferDirect(Z,I,q,W,k,xe),k.onAfterRender(R,I,Z,q,W,xe)}function Ho(k,I,Z){I.isScene!==!0&&(I=Vt);const q=G.get(k),W=E.state.lights,xe=E.state.shadowsArray,we=W.state.version,ye=he.getParameters(k,W.state,xe,I,Z,E.state.lightProbeGridArray),Te=he.getProgramCacheKey(ye);let Le=q.programs;q.environment=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?I.environment:null,q.fog=I.fog;const Ke=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap;q.envMap=ce.get(k.envMap||q.environment,Ke),q.envMapRotation=q.environment!==null&&k.envMap===null?I.environmentRotation:k.envMapRotation,Le===void 0&&(k.addEventListener("dispose",wi),Le=new Map,q.programs=Le);let Qe=Le.get(Te);if(Qe!==void 0){if(q.currentProgram===Qe&&q.lightsStateVersion===we)return jf(k,ye),Qe}else ye.uniforms=he.getUniforms(k),z!==null&&k.isNodeMaterial&&z.build(k,Z,ye),k.onBeforeCompile(ye,R),Qe=he.acquireProgram(ye,Te),Le.set(Te,Qe),q.uniforms=ye.uniforms;const Ae=q.uniforms;return(!k.isShaderMaterial&&!k.isRawShaderMaterial||k.clipping===!0)&&(Ae.clippingPlanes=Pe.uniform),jf(k,ye),q.needsLights=d0(k),q.lightsStateVersion=we,q.needsLights&&(Ae.ambientLightColor.value=W.state.ambient,Ae.lightProbe.value=W.state.probe,Ae.sunLights.value=W.state.sun,Ae.sunLightShadows.value=W.state.sunShadow,Ae.directionalLights.value=W.state.directional,Ae.directionalLightShadows.value=W.state.directionalShadow,Ae.spotLights.value=W.state.spot,Ae.spotLightShadows.value=W.state.spotShadow,Ae.rectAreaLights.value=W.state.rectArea,Ae.ltc_1.value=W.state.rectAreaLTC1,Ae.ltc_2.value=W.state.rectAreaLTC2,Ae.pointLights.value=W.state.point,Ae.pointLightShadows.value=W.state.pointShadow,Ae.hemisphereLights.value=W.state.hemi,Ae.sunShadowMatrix.value=W.state.sunShadowMatrix,Ae.sunShadowCascade.value=W.state.sunShadowCascade,Ae.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ae.spotLightMatrix.value=W.state.spotLightMatrix,Ae.spotLightMap.value=W.state.spotLightMap,Ae.pointShadowMatrix.value=W.state.pointShadowMatrix),q.lightProbeGrid=E.state.lightProbeGridArray.length>0,q.currentProgram=Qe,q.uniformsList=null,Qe}function Jf(k){if(k.uniformsList===null){const I=k.currentProgram.getUniforms();k.uniformsList=Ll.seqWithValue(I.seq,k.uniforms)}return k.uniformsList}function jf(k,I){const Z=G.get(k);Z.outputColorSpace=I.outputColorSpace,Z.batching=I.batching,Z.batchingColor=I.batchingColor,Z.instancing=I.instancing,Z.instancingColor=I.instancingColor,Z.instancingMorph=I.instancingMorph,Z.skinning=I.skinning,Z.morphTargets=I.morphTargets,Z.morphNormals=I.morphNormals,Z.morphColors=I.morphColors,Z.morphTargetsCount=I.morphTargetsCount,Z.numClippingPlanes=I.numClippingPlanes,Z.numIntersection=I.numClipIntersection,Z.vertexAlphas=I.vertexAlphas,Z.vertexTangents=I.vertexTangents,Z.toneMapping=I.toneMapping}function o0(k,I){if(k.length===0)return null;if(k.length===1)return k[0].texture!==null?k[0]:null;b.setFromMatrixPosition(I.matrixWorld);for(let Z=0,q=k.length;Z<q;Z++){const W=k[Z];if(W.texture!==null&&W.boundingBox.containsPoint(b))return W}return null}function l0(k,I,Z,q,W){I.isScene!==!0&&(I=Vt),j.resetTextureUnits();const xe=I.fog,we=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?I.environment:null,ye=K===null?R.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:tt.workingColorSpace,Te=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Le=ce.get(q.envMap||we,Te),Ke=q.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Qe=!!Z.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ae=!!Z.morphAttributes.position,ut=!!Z.morphAttributes.normal,Ft=!!Z.morphAttributes.color;let Mt=Bi;q.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Mt=R.toneMapping);const vt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ln=vt!==void 0?vt.length:0,Ee=G.get(q),gn=E.state.lights;if(Xe===!0&&(st===!0||k!==Q)){const St=k===Q&&q.id===$;Pe.setState(q,k,St)}let ot=!1;q.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==gn.state.version||Ee.outputColorSpace!==ye||W.isBatchedMesh&&Ee.batching===!1||!W.isBatchedMesh&&Ee.batching===!0||W.isBatchedMesh&&Ee.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Ee.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Ee.instancing===!1||!W.isInstancedMesh&&Ee.instancing===!0||W.isSkinnedMesh&&Ee.skinning===!1||!W.isSkinnedMesh&&Ee.skinning===!0||W.isInstancedMesh&&Ee.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ee.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ee.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ee.instancingMorph===!1&&W.morphTexture!==null||Ee.envMap!==Le||q.fog===!0&&Ee.fog!==xe||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==Pe.numPlanes||Ee.numIntersection!==Pe.numIntersection)||Ee.vertexAlphas!==Ke||Ee.vertexTangents!==Qe||Ee.morphTargets!==Ae||Ee.morphNormals!==ut||Ee.morphColors!==Ft||Ee.toneMapping!==Mt||Ee.morphTargetsCount!==ln||!!Ee.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(ot=!0):(ot=!0,Ee.__version=q.version);let ni=Ee.currentProgram;ot===!0&&(ni=Ho(q,I,W),z&&q.isNodeMaterial&&z.onUpdateProgram(q,ni,Ee));let Ti=!1,ha=!1,Rs=!1;const mt=ni.getUniforms(),Nt=Ee.uniforms;if(_.useProgram(ni.program)&&(Ti=!0,ha=!0,Rs=!0),q.id!==$&&($=q.id,ha=!0),Ee.needsLights){const St=o0(E.state.lightProbeGridArray,W);Ee.lightProbeGrid!==St&&(Ee.lightProbeGrid=St,ha=!0)}if(Ti||Q!==k){_.buffers.depth.getReversed()&&k.reversedDepth!==!0&&(k._reversedDepth=!0,k.updateProjectionMatrix()),mt.setValue(N,"projectionMatrix",k.projectionMatrix),mt.setValue(N,"viewMatrix",k.matrixWorldInverse);const ma=mt.map.cameraPosition;ma!==void 0&&ma.setValue(N,ft.setFromMatrixPosition(k.matrixWorld)),M.logarithmicDepthBuffer&&mt.setValue(N,"logDepthBufFC",2/(Math.log(k.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&mt.setValue(N,"isOrthographic",k.isOrthographicCamera===!0),Q!==k&&(Q=k,ha=!0,Rs=!0)}if(Ee.needsLights&&(gn.state.sunShadowMap.length>0&&mt.setValue(N,"sunShadowMap",gn.state.sunShadowMap,j),gn.state.directionalShadowMap.length>0&&mt.setValue(N,"directionalShadowMap",gn.state.directionalShadowMap,j),gn.state.spotShadowMap.length>0&&mt.setValue(N,"spotShadowMap",gn.state.spotShadowMap,j),gn.state.pointShadowMap.length>0&&mt.setValue(N,"pointShadowMap",gn.state.pointShadowMap,j)),W.isSkinnedMesh){mt.setOptional(N,W,"bindMatrix"),mt.setOptional(N,W,"bindMatrixInverse");const St=W.skeleton;St&&(St.boneTexture===null&&St.computeBoneTexture(),mt.setValue(N,"boneTexture",St.boneTexture,j))}W.isBatchedMesh&&(mt.setOptional(N,W,"batchingTexture"),mt.setValue(N,"batchingTexture",W._matricesTexture,j),mt.setOptional(N,W,"batchingIdTexture"),mt.setValue(N,"batchingIdTexture",W._indirectTexture,j),mt.setOptional(N,W,"batchingColorTexture"),W._colorsTexture!==null&&mt.setValue(N,"batchingColorTexture",W._colorsTexture,j));const pa=Z.morphAttributes;if((pa.position!==void 0||pa.normal!==void 0||pa.color!==void 0)&&U.update(W,Z,ni),(ha||Ee.receiveShadow!==W.receiveShadow)&&(Ee.receiveShadow=W.receiveShadow,mt.setValue(N,"receiveShadow",W.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&I.environment!==null&&(Nt.envMapIntensity.value=I.environmentIntensity),Nt.dfgLUT!==void 0&&(Nt.dfgLUT.value=uM()),ha){if(mt.setValue(N,"toneMappingExposure",R.toneMappingExposure),Ee.needsLights&&c0(Nt,Rs),xe&&q.fog===!0&&Ce.refreshFogUniforms(Nt,xe),Ce.refreshMaterialUniforms(Nt,q,ae,J,E.state.transmissionRenderTarget[k.id]),Ee.needsLights&&Ee.lightProbeGrid){const St=Ee.lightProbeGrid;Nt.probesSH.value=St.texture,Nt.probesMin.value.copy(St.boundingBox.min),Nt.probesMax.value.copy(St.boundingBox.max),Nt.probesResolution.value.copy(St.resolution)}Ll.upload(N,Jf(Ee),Nt,j)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Ll.upload(N,Jf(Ee),Nt,j),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&mt.setValue(N,"center",W.center),mt.setValue(N,"modelViewMatrix",W.modelViewMatrix),mt.setValue(N,"normalMatrix",W.normalMatrix),mt.setValue(N,"modelMatrix",W.matrixWorld),q.uniformsGroups!==void 0){const St=q.uniformsGroups;for(let ma=0,Ls=St.length;ma<Ls;ma++){const eh=St[ma];oe.update(eh,ni),oe.bind(eh,ni)}}return ni}function c0(k,I){k.ambientLightColor.needsUpdate=I,k.lightProbe.needsUpdate=I,k.sunLights.needsUpdate=I,k.sunLightShadows.needsUpdate=I,k.directionalLights.needsUpdate=I,k.directionalLightShadows.needsUpdate=I,k.pointLights.needsUpdate=I,k.pointLightShadows.needsUpdate=I,k.spotLights.needsUpdate=I,k.spotLightShadows.needsUpdate=I,k.rectAreaLights.needsUpdate=I,k.hemisphereLights.needsUpdate=I}function d0(k){return k.isMeshLambertMaterial||k.isMeshToonMaterial||k.isMeshPhongMaterial||k.isMeshStandardMaterial||k.isShadowMaterial||k.isShaderMaterial&&k.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(k,I,Z){const q=G.get(k);q.__autoAllocateDepthBuffer=k.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),G.get(k.texture).__webglTexture=I,G.get(k.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:Z,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(k,I){const Z=G.get(k);Z.__webglFramebuffer=I,Z.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(k,I=0,Z=0){K=k,D=I,P=Z;let q=null,W=!1,xe=!1;if(k){const ye=G.get(k);if(ye.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(N.FRAMEBUFFER,ye.__webglFramebuffer),te.copy(k.viewport),ue.copy(k.scissor),ke=k.scissorTest,_.viewport(te),_.scissor(ue),_.setScissorTest(ke),$=-1;return}else if(ye.__webglFramebuffer===void 0)j.setupRenderTarget(k);else if(ye.__hasExternalTextures)j.rebindTextures(k,G.get(k.texture).__webglTexture,G.get(k.depthTexture).__webglTexture);else if(k.depthBuffer){const Ke=k.depthTexture;if(ye.__boundDepthTexture!==Ke){if(Ke!==null&&G.has(Ke)&&(k.width!==Ke.image.width||k.height!==Ke.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(k)}}const Te=k.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(xe=!0);const Le=G.get(k).__webglFramebuffer;k.isWebGLCubeRenderTarget?(Array.isArray(Le[I])?q=Le[I][Z]:q=Le[I],W=!0):k.samples>0&&j.useMultisampledRTT(k)===!1?q=G.get(k).__webglMultisampledFramebuffer:Array.isArray(Le)?q=Le[Z]:q=Le,te.copy(k.viewport),ue.copy(k.scissor),ke=k.scissorTest}else te.copy(be).multiplyScalar(ae).floor(),ue.copy(Fe).multiplyScalar(ae).floor(),ke=gt;if(Z!==0&&(q=F),_.bindFramebuffer(N.FRAMEBUFFER,q)&&_.drawBuffers(k,q),_.viewport(te),_.scissor(ue),_.setScissorTest(ke),W){const ye=G.get(k.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+I,ye.__webglTexture,Z)}else if(xe){const ye=I;for(let Te=0;Te<k.textures.length;Te++){const Le=G.get(k.textures[Te]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Te,Le.__webglTexture,Z,ye)}}else if(k!==null&&Z!==0){const ye=G.get(k.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ye.__webglTexture,Z)}$=-1};function Qf(k){const I=G.get(k);return(I.__readFormat!==k.format||I.__readType!==k.type)&&(I.__readFormat=k.format,I.__readType=k.type,I.__formatReadable=M.textureFormatReadable(k.format),I.__typeReadable=M.textureTypeReadable(k.type)),I}this.readRenderTargetPixels=function(k,I,Z,q,W,xe,we,ye=0){if(!(k&&k.isWebGLRenderTarget)){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=G.get(k).__webglFramebuffer;if(k.isWebGLCubeRenderTarget&&we!==void 0&&(Te=Te[we]),Te){_.bindFramebuffer(N.FRAMEBUFFER,Te);try{const Le=k.textures[ye],Ke=Le.format,Qe=Le.type;k.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ye);const Ae=Qf(Le);if(Ae.__formatReadable===!1){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ae.__typeReadable===!1){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=k.width-q&&Z>=0&&Z<=k.height-W&&N.readPixels(I,Z,q,W,ge.convert(Ke),ge.convert(Qe),xe)}finally{const Le=K!==null?G.get(K).__webglFramebuffer:null;_.bindFramebuffer(N.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(k,I,Z,q,W,xe,we,ye=0){if(!(k&&k.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=G.get(k).__webglFramebuffer;if(k.isWebGLCubeRenderTarget&&we!==void 0&&(Te=Te[we]),Te)if(I>=0&&I<=k.width-q&&Z>=0&&Z<=k.height-W){_.bindFramebuffer(N.FRAMEBUFFER,Te);const Le=k.textures[ye],Ke=Le.format,Qe=Le.type;k.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ye);const Ae=Qf(Le);if(Ae.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ae.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ut=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,ut),N.bufferData(N.PIXEL_PACK_BUFFER,xe.byteLength,N.STREAM_READ),N.readPixels(I,Z,q,W,ge.convert(Ke),ge.convert(Qe),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);const Ft=K!==null?G.get(K).__webglFramebuffer:null;_.bindFramebuffer(N.FRAMEBUFFER,Ft);const Mt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await by(N,Mt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,ut),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,xe),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(ut),N.deleteSync(Mt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(k,I=null,Z=0){const q=Math.pow(2,-Z),W=Math.floor(k.image.width*q),xe=Math.floor(k.image.height*q),we=I!==null?I.x:0,ye=I!==null?I.y:0;j.setTexture2D(k,0),N.copyTexSubImage2D(N.TEXTURE_2D,Z,0,0,we,ye,W,xe),_.unbindTexture()},this.copyTextureToTexture=function(k,I,Z=null,q=null,W=0,xe=0){let we,ye,Te,Le,Ke,Qe,Ae,ut,Ft;const Mt=k.isCompressedTexture?k.mipmaps[xe]:k.image;if(Z!==null)we=Z.max.x-Z.min.x,ye=Z.max.y-Z.min.y,Te=Z.isBox3?Z.max.z-Z.min.z:1,Le=Z.min.x,Ke=Z.min.y,Qe=Z.isBox3?Z.min.z:0;else{const Nt=Math.pow(2,-W);we=Math.floor(Mt.width*Nt),ye=Math.floor(Mt.height*Nt),k.isDataArrayTexture?Te=Mt.depth:k.isData3DTexture?Te=Math.floor(Mt.depth*Nt):Te=1,Le=0,Ke=0,Qe=0}q!==null?(Ae=q.x,ut=q.y,Ft=q.z):(Ae=0,ut=0,Ft=0);const vt=ge.convert(I.format),ln=ge.convert(I.type);let Ee;I.isData3DTexture?(j.setTexture3D(I,0),Ee=N.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(j.setTexture2DArray(I,0),Ee=N.TEXTURE_2D_ARRAY):(j.setTexture2D(I,0),Ee=N.TEXTURE_2D),_.activeTexture(N.TEXTURE0),_.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,I.flipY),_.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),_.pixelStorei(N.UNPACK_ALIGNMENT,I.unpackAlignment);const gn=_.getParameter(N.UNPACK_ROW_LENGTH),ot=_.getParameter(N.UNPACK_IMAGE_HEIGHT),ni=_.getParameter(N.UNPACK_SKIP_PIXELS),Ti=_.getParameter(N.UNPACK_SKIP_ROWS),ha=_.getParameter(N.UNPACK_SKIP_IMAGES);_.pixelStorei(N.UNPACK_ROW_LENGTH,Mt.width),_.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Mt.height),_.pixelStorei(N.UNPACK_SKIP_PIXELS,Le),_.pixelStorei(N.UNPACK_SKIP_ROWS,Ke),_.pixelStorei(N.UNPACK_SKIP_IMAGES,Qe);const Rs=k.isDataArrayTexture||k.isData3DTexture,mt=I.isDataArrayTexture||I.isData3DTexture;if(k.isDepthTexture){const Nt=G.get(k),pa=G.get(I),St=G.get(Nt.__renderTarget),ma=G.get(pa.__renderTarget);_.bindFramebuffer(N.READ_FRAMEBUFFER,St.__webglFramebuffer),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,ma.__webglFramebuffer);for(let Ls=0;Ls<Te;Ls++)Rs&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,G.get(k).__webglTexture,W,Qe+Ls),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,G.get(I).__webglTexture,xe,Ft+Ls)),N.blitFramebuffer(Le,Ke,we,ye,Ae,ut,we,ye,N.DEPTH_BUFFER_BIT,N.NEAREST);_.bindFramebuffer(N.READ_FRAMEBUFFER,null),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(W!==0||k.isRenderTargetTexture||G.has(k)){const Nt=G.get(k),pa=G.get(I);_.bindFramebuffer(N.READ_FRAMEBUFFER,C),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,H);for(let St=0;St<Te;St++)Rs?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Nt.__webglTexture,W,Qe+St):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Nt.__webglTexture,W),mt?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,pa.__webglTexture,xe,Ft+St):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,pa.__webglTexture,xe),W!==0?N.blitFramebuffer(Le,Ke,we,ye,Ae,ut,we,ye,N.COLOR_BUFFER_BIT,N.NEAREST):mt?N.copyTexSubImage3D(Ee,xe,Ae,ut,Ft+St,Le,Ke,we,ye):N.copyTexSubImage2D(Ee,xe,Ae,ut,Le,Ke,we,ye);_.bindFramebuffer(N.READ_FRAMEBUFFER,null),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else mt?k.isDataTexture||k.isData3DTexture?N.texSubImage3D(Ee,xe,Ae,ut,Ft,we,ye,Te,vt,ln,Mt.data):I.isCompressedArrayTexture?N.compressedTexSubImage3D(Ee,xe,Ae,ut,Ft,we,ye,Te,vt,Mt.data):N.texSubImage3D(Ee,xe,Ae,ut,Ft,we,ye,Te,vt,ln,Mt):k.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,xe,Ae,ut,we,ye,vt,ln,Mt.data):k.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,xe,Ae,ut,Mt.width,Mt.height,vt,Mt.data):N.texSubImage2D(N.TEXTURE_2D,xe,Ae,ut,we,ye,vt,ln,Mt);_.pixelStorei(N.UNPACK_ROW_LENGTH,gn),_.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ot),_.pixelStorei(N.UNPACK_SKIP_PIXELS,ni),_.pixelStorei(N.UNPACK_SKIP_ROWS,Ti),_.pixelStorei(N.UNPACK_SKIP_IMAGES,ha),xe===0&&I.generateMipmaps&&N.generateMipmap(Ee),_.unbindTexture()},this.initRenderTarget=function(k){G.get(k).__webglFramebuffer===void 0&&j.setupRenderTarget(k)},this.initTexture=function(k){k.isCubeTexture?j.setTextureCube(k,0):k.isData3DTexture?j.setTexture3D(k,0):k.isDataArrayTexture||k.isCompressedArrayTexture?j.setTexture2DArray(k,0):j.setTexture2D(k,0),_.unbindTexture()},this.resetState=function(){D=0,P=0,K=null,_.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}}const hM=["head","body","torso","leftArm","rightArm","leftLeg","rightLeg"],$u=["pitch","yaw","roll","bend","x","y","z"];function Cl(i){return typeof i=="number"&&Number.isFinite(i)?i:null}function av(i){if(typeof i=="string")return i.trim();if(i&&typeof i=="object"){const e=i.translate;if(typeof e=="string")return e.trim()}return""}function pM(i){const e=i.emote||{},t=Number(e.returnTick)>0?Number(e.returnTick):60,n=Number(e.endTick)>0?Number(e.endTick):t,a={adi:av(i.name)||"İsimsiz",yazar:String(i.author||""),aciklama:String(i.description||""),baslangicTick:Number(e.beginTick)>0?Number(e.beginTick):0,bitisTick:n,stopTick:Number(e.stopTick)>0?Number(e.stopTick):n,donusTick:t,dongu:e.isLoop===!0||e.isLoop==="true",kemikler:new Map};e.palUzay===!0&&(a.palUzay=!0),e.palDef===!0&&(a.palDef=!0);const s=Cl(e.loopBas);s!==null&&s>=0&&(a.loopBas=s);const r=Array.isArray(e.moves)?e.moves:[];let o={};for(const c of r){if(typeof c?.tick!="number")continue;const l=c.tick;for(const d of hM){const f=c[d];if(!f||typeof f!="object")continue;let u=a.kemikler.get(d);u||(u={},a.kemikler.set(d,u));for(const v of $u){const m=Cl(f[v]);m!==null&&(u[v]||(u[v]=[]),u[v].push({t:l,v:m,easing:String(c.easing||"LINEAR").toUpperCase()}))}const h=Cl(f.turn);h!==null&&h!==0&&(o[d]=(o[d]||0)+h*360,u.turn||(u.turn=[]),u.turn.push({t:l,v:o[d],easing:"LINEAR"}))}}return a.palUzay===!0&&a.palDef!==!0&&vM(a),a}const mM={leftArm:[5,-2,0],rightArm:[-5,-2,0],leftLeg:[1.9,-12,.1],rightLeg:[-1.9,-12,.1]};function gM(i){if(i.length===0)return 0;const e=[...i].sort((n,a)=>n-a),t=Math.floor(e.length/2);return e.length%2?e[t]:(e[t-1]+e[t])/2}function vM(i){for(const[e,t]of Object.entries(mM)){const n=i.kemikler.get(e);if(!n)continue;let a=0,s=0;for(const r of["x","y"]){const o=n[r];if(!o||o.length===0)continue;a++;const c=t[r==="x"?0:1];Math.abs(gM(o.map(l=>l.v))-c)<=2&&s++}a===0||s!==a||["x","y","z"].forEach((r,o)=>{const c=n[r];if(c)for(const l of c)l.v-=t[o]})}i.palDef=!0}function _M(i){const e=i.animations||{},t=Object.values(e)[0];if(!t||typeof t!="object")throw new Error("PAL animasyonu boş");const n=Number(t.animation_length)>0?Number(t.animation_length)*20:60,a={adi:av(t.player_animation_library?.name??i.name)||"İsimsiz",yazar:String(t.player_animation_library?.author||i.author||""),aciklama:String(t.player_animation_library?.description||i.description||""),baslangicTick:0,bitisTick:n,stopTick:n,donusTick:n,dongu:!0,kemikler:new Map,palDelta:!0},s=t.bones||{};for(const r of Object.keys(s)){const o=s[r];if(!o||typeof o!="object")continue;const c={},l=(d,f,u)=>{if(!d)return;const h=[],v=(m,p)=>{const g=Cl(p);g!==null&&h.push({t:m,v:g,easing:"LINEAR"})};if(Array.isArray(d))for(const m of d){const p=typeof m?.time=="number"?m.time*20:0;v(p,Array.isArray(m?.vector)?m.vector[f]:void 0)}else Array.isArray(d.vector)?v(0,d.vector[f]):typeof d=="number"&&v(0,d);h.length&&(c[u]=h)};l(o.rotation,0,"pitch"),l(o.rotation,1,"yaw"),l(o.rotation,2,"roll"),l(o.position,0,"x"),l(o.position,1,"y"),l(o.position,2,"z"),Object.keys(c).length&&a.kemikler.set(r,c)}return a}function yM(i){const e=JSON.parse(i);if(e?.emote&&typeof e.emote=="object")return pM(e);if(e?.animations)return _M(e);throw new Error("bilinmeyen emote formatı")}function xM(i){switch(i){case"EASEINSINE":case"INSINE":case"EASEIN":return e=>1-Math.cos(e*Math.PI/2);case"EASEOUTSINE":case"OUTSINE":return e=>Math.sin(e*Math.PI/2);case"EASEINOUTSINE":case"INOUTSINE":case"SINE":return e=>-(Math.cos(Math.PI*e)-1)/2;case"EASEINOUTQUAD":case"INOUTQUAD":return e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2;case"EASEINOUTCUBIC":return e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2;case"STEP":return e=>e>=1?1:0;default:return e=>e}}function Ep(i,e){if(!i||!i.length)return null;if(i.length===1)return i[0].v;let t=0;for(;t<i.length&&i[t].t<=e;)t++;if(t<=0)return i[0].v;if(t>=i.length)return i[i.length-1].v;const n=i[t-1],a=i[t],s=a.t-n.t,r=s<=0?1:(e-n.t)/s;return n.v+(a.v-n.v)*xM(a.easing)(r)}function sv(){return[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]]}const wp={head:[0,0,0],body:[0,0,0],armL:[0,0,0],armR:[0,0,0],legL:[0,0,0],legR:[0,0,0],bend:[0,0,0,0,0],konum:sv(),kokDon:[0,0,0],kokKonum:[0,0,0]},rv={head:0,body:1,torso:1,leftArm:2,rightArm:3,leftLeg:4,rightLeg:5},bM=rv,SM={leftArm:0,rightArm:1,leftLeg:2,rightLeg:3,torso:4,body:4};function Tp(i,e){let t=e;if(i.dongu&&i.loopBas!==void 0&&i.bitisTick>i.loopBas){if(e>i.bitisTick){const h=i.bitisTick-i.loopBas;t=i.loopBas+(e-i.loopBas)%h}}else i.dongu&&i.donusTick>0&&(t=(e-i.baslangicTick)%i.donusTick+i.baslangicTick);const n=Math.max(t,i.baslangicTick),a=i.palUzay===!0,s={head:[0,0,0],body:[0,0,0],armL:[0,0,0],armR:[0,0,0],legL:[0,0,0],legR:[0,0,0],bend:[0,0,0,0,0],bendTasi:a,konum:sv(),kokDon:[0,0,0],kokKonum:[0,0,0]},r=["head","body","armL","armR","legL","legR"],o=()=>[void 0,void 0,void 0],c=Array.from({length:6},o),l=o(),d=(h,v,m)=>{h[v==="x"?0:v==="y"?1:2]=m};for(const[h,v]of i.kemikler){if(a&&h==="body"){for(const g of $u){const y=Ep(v[g],n);y!==null&&(g==="pitch"?s.kokDon[0]=y:g==="yaw"?s.kokDon[1]=y:g==="roll"?s.kokDon[2]=-y:g==="bend"?s.bend[4]=y:(g==="x"||g==="y"||g==="z")&&d(l,g,y))}continue}const m=rv[h],p=m!==void 0?s[r[m]]:null;for(const g of $u){const y=Ep(v[g],n);if(y!==null){if(p){if(g==="pitch")p[0]=y;else if(g==="yaw")p[1]=y;else if(g==="roll")p[2]=a?-y:y;else if(g==="x"||g==="y"||g==="z"){const T=bM[h];T!==void 0&&d(c[T],g,y)}}if(g==="bend"){const T=SM[h];T!==void 0&&(s.bend[T]+=y)}}}}const f=[[0,24,0],[0,24,0],[5,22,0],[-5,22,0],[1.9,12,0],[-1.9,12,0]];if(a){for(let h=0;h<6;h++){const v=c[h];s.konum[h]=[v[0]??0,v[1]??0,-(v[2]??0)]}return s.kokKonum=[l[0]??0,l[1]??0,-(l[2]??0)],s}const u=[1,0,1,1,0,0];for(let h=0;h<6;h++){const v=c[h],m=s.konum[h];for(let p=0;p<3;p++){if(v[p]===void 0){m[p]=0;continue}let g=v[p];p===1&&u[h]&&(g+=24),m[p]=g-f[h][p]}}return s}const Me=1/24,Oi=64,Fi=32,kM=.2617994,Ap=.2617994,MM=9;function Vn(i,e,t,n,a,s,r=!1){const o=i.attributes.uv,c=e*4,l=r?s:n,d=r?n:s;o.setXY(c+0,t/64,1-l/64),o.setXY(c+1,a/64,1-l/64),o.setXY(c+2,t/64,1-d/64),o.setXY(c+3,a/64,1-d/64)}function Mo(i){i.magFilter=Xt,i.minFilter=Xt,i.colorSpace=Gn}function ov(i,e=!1){return i?new Yl({map:i,transparent:e,alphaTest:e?.01:0}):new Yl({color:5924466})}function Rp(i,e,t=!1){const n=new ca(i.w*Me,i.h*Me,i.d*Me),{u:a,v:s,w:r,h:o,d:c}=i;return e&&(Vn(n,0,a+c+r,s+c,a+c+r+c,s+c+o),Vn(n,1,a,s+c,a+c,s+c+o),Vn(n,2,a+c,s,a+c+r,s+c),Vn(n,3,a+c+r,s,a+c+r+r,s+c,!0),Vn(n,4,a+c,s+c,a+c+r,s+c+o),Vn(n,5,a+c+r+c,s+c,a+c+r+c+r,s+c+o),Mo(e)),new ti(n,ov(e,t))}function Lp(i,e,t,n,a,s){const r=i.attributes.uv,o=(c,l,d,f,u,h=!1)=>{const v=c*4,m=h?u:d,p=h?d:u;r.setXY(v+0,l/Oi,1-m/Fi),r.setXY(v+1,f/Oi,1-m/Fi),r.setXY(v+2,l/Oi,1-p/Fi),r.setXY(v+3,f/Oi,1-p/Fi)};o(0,e+s+n,t+s,e+s+n+s,t+s+a),o(1,e,t+s,e+s,t+s+a),o(2,e+s,t,e+s+n,t+s),o(3,e+s+n,t,e+s+n+n,t+s,!0),o(4,e+s,t+s,e+s+n,t+s+a),o(5,e+s+n+s,t+s,e+s+n+s+n,t+s+a),r.needsUpdate=!0}function Cp(i){const e=Math.max(Oi,Math.round(i.width)),t=Math.max(Fi,Math.round(i.height)),n=document.createElement("canvas");n.width=e,n.height=t;const a=n.getContext("2d");return a&&(a.imageSmoothingEnabled=e!==Oi||t!==Fi,a.imageSmoothingQuality="high",a.drawImage(i,0,0,e,t)),n}function hl(i,e=!1){const t=new Gg(i);return Mo(t),e&&(t.magFilter=tn,t.minFilter=Ca,t.generateMipmaps=!0),t.needsUpdate=!0,t}function Sd(i,e,t,n){const a=e*Me/2,s=t*Me/2,r=n*Me/2,o=.0015,c=new Hg({color:16777215,transparent:!0,opacity:.42,depthWrite:!1}),l=d=>{const f=new Ei;f.setAttribute("position",new fi(d,3));const u=new Zy(f,c);u.renderOrder=4,i.add(u)};for(const d of[-r-o,r+o]){const f=[];for(let u=0;u<=e;u++){const h=-a+u*Me;f.push(h,-s,d,h,s,d)}for(let u=0;u<=t;u++){const h=-s+u*Me;f.push(-a,h,d,a,h,d)}l(f)}for(const d of[-a-o,a+o]){const f=[];for(let u=0;u<=n;u++){const h=-r+u*Me;f.push(d,-s,h,d,s,h)}for(let u=0;u<=t;u++){const h=-s+u*Me;f.push(d,h,-r,d,h,r)}l(f)}for(const d of[-s-o,s+o]){const f=[];for(let u=0;u<=e;u++){const h=-a+u*Me;f.push(h,d,-r,h,d,r)}for(let u=0;u<=n;u++){const h=-r+u*Me;f.push(-a,d,h,a,d,h)}l(f)}}function ba(i,e,t,n=!1){const a=i.h/2,{u:s,v:r,w:o,d:c}=i,l=new ca(i.w*Me,a*Me,i.d*Me);if(t){const d=r+c+(e?a:0),f=d+a;Vn(l,0,s+c+o,d,s+c+o+c,f),Vn(l,1,s,d,s+c,f),Vn(l,2,s+c,r,s+c+o,r+c),e?Vn(l,3,s+c+o,r,s+c+o+o,r+c,!0):Vn(l,3,s+c,r,s+c+o,r+c),Vn(l,4,s+c,d,s+c+o,f),Vn(l,5,s+c+o+c,d,s+c+o+c+o,f),Mo(t)}return new ti(l,ov(t,n))}class EM{renderer=null;scene=new Fy;camera=new oi(38,1,.1,100);kok=null;kalca=null;kemikler=null;bukulenler=null;saat=new px;rafId=0;canvas=null;boyutla=null;zaman=0;kameraAci=0;kameraAciHedef=0;kameraYariCap=2.75;kameraYariCapHedef=2.75;kameraY=.34;surukleX=null;isaretciBas=null;isaretciTasi=null;isaretciBirak=null;tekerlek=null;fareEngel=null;baglamEngel=null;durum="idle";sonOynananAd="";durumBitis=0;emoteListe=[];hiz=1;aktif=null;tEmote=0;pelerinGrup=null;pelerinSarkac=null;pelerinDoku=null;pelerinJeton=0;kanatJeton=0;_bekleyenPelerin=null;canliDoku=null;sonCizimAt=0;canliMod=!1;_pelerinTuval=null;kanatGrup=null;kanatDoku=null;kanatAyrikAcik=!1;_bekleyenKanat=null;tabanMeshler=[];ustMeshler=[];oyuncuMeshler=[];oyuncuGorunur=!0;etkilesimKapali=!1;kameraEgim=0;kameraEgimHedef=0;surukleY=null;kaplamaGorunur=!0;kozmetikGorunur=!0;izgaraAcik=!1;modelIzgaraAcik=!1;sahneTemizle(){this.kok&&((this.kok.parent??this.scene).remove(this.kok),this.kok.traverse(e=>{const t=e;t.geometry&&t.geometry.dispose()})),this.scene.clear(),this.kok=null,this.pelerinGrup=null,this.pelerinSarkac=null,this.kanatGrup=null,this.tabanMeshler=[],this.ustMeshler=[],this.oyuncuMeshler=[],this.aktif=null}kur(e){this.renderer&&this.kapati(),this.sahneTemizle(),this.izgaraAcik=!1,this.modelIzgaraAcik=!1,this.canvas=e;try{this.renderer=new fM({canvas:e,alpha:!0,antialias:!0,preserveDrawingBuffer:!0})}catch{return}this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.scene.add(new dx(16777215,.9));const t=new Qh(16777215,1.7);t.position.set(2,4,5),this.scene.add(t);const n=new Qh(16755533,.55);if(n.position.set(-3,2,-4),this.scene.add(n),this.camera.position.set(0,.34,2.75),this.camera.lookAt(0,.02,0),this.kameraYariCap=2.75,this.kameraYariCapHedef=2.75,this.yorungeKur(e),this.boyutla=()=>{if(!this.renderer)return;const a=e.clientWidth||e.parentElement?.clientWidth||320,s=e.clientHeight||300;this.renderer.setSize(a,s,!1),this.camera.aspect=a/Math.max(1,s),this.camera.updateProjectionMatrix()},this.boyutla(),window.addEventListener("resize",this.boyutla),this.baslatDongu(),this._bekleyenSkin){const a=this._bekleyenSkin;this._bekleyenSkin=null,this.skin(a)}}yorungeKur(e){this.yorungeKapat(),e.style.cursor="grab",e.style.touchAction="pan-y",this.isaretciBas=t=>{if(t.pointerType==="mouse"){const n=t.button===0;if(n&&this.etkilesimKapali||!n&&t.button!==1&&t.button!==2)return}this.surukleX=t.clientX,this.surukleY=t.clientY,e.style.cursor="grabbing";try{e.setPointerCapture(t.pointerId)}catch{}},this.isaretciTasi=t=>{if(this.surukleX===null)return;const n=t.clientX-this.surukleX,a=t.clientY-(this.surukleY??t.clientY);this.surukleX=t.clientX,this.surukleY=t.clientY,this.kameraAciHedef-=n*.008,this.kameraEgimHedef=Math.max(-.55,Math.min(.95,this.kameraEgimHedef+a*.006))},this.isaretciBirak=t=>{if(this.surukleX!==null){this.surukleX=null,this.surukleY=null,e.style.cursor="grab";try{e.releasePointerCapture(t.pointerId)}catch{}}},e.addEventListener("pointerdown",this.isaretciBas),e.addEventListener("pointermove",this.isaretciTasi),e.addEventListener("pointerup",this.isaretciBirak),e.addEventListener("pointercancel",this.isaretciBirak),this.fareEngel=t=>{t.button===1&&t.preventDefault()},this.baglamEngel=t=>t.preventDefault(),e.addEventListener("mousedown",this.fareEngel),e.addEventListener("auxclick",this.fareEngel),e.addEventListener("contextmenu",this.baglamEngel),this.fareEngel=t=>{t.button===1&&t.preventDefault()},this.tekerlek=t=>{t.preventDefault(),this.zoomAyarla(this.kameraYariCapHedef*(t.deltaY>0?1.12:.89))},e.addEventListener("wheel",this.tekerlek,{passive:!1})}yorungeKapat(){const e=this.canvas;e&&(this.isaretciBas&&e.removeEventListener("pointerdown",this.isaretciBas),this.isaretciTasi&&e.removeEventListener("pointermove",this.isaretciTasi),this.isaretciBirak&&(e.removeEventListener("pointerup",this.isaretciBirak),e.removeEventListener("pointercancel",this.isaretciBirak))),this.isaretciBas=null,this.isaretciTasi=null,this.isaretciBirak=null,this.surukleX=null,e&&this.tekerlek&&e.removeEventListener("wheel",this.tekerlek),this.tekerlek=null,e&&this.fareEngel&&(e.removeEventListener("mousedown",this.fareEngel),e.removeEventListener("auxclick",this.fareEngel)),this.fareEngel=null,e&&this.baglamEngel&&e.removeEventListener("contextmenu",this.baglamEngel),this.baglamEngel=null}boyutGuncelle(){this.boyutla?.()}zoomAyarla(e){this.kameraYariCapHedef=Math.max(1.05,Math.min(5.5,e))}zoomAl(){return this.kameraYariCapHedef}kameraGuncelle(e){const t=Math.min(1,e*14);this.kameraAci+=(this.kameraAciHedef-this.kameraAci)*t,this.kameraEgim+=(this.kameraEgimHedef-this.kameraEgim)*t,this.kameraYariCap+=(this.kameraYariCapHedef-this.kameraYariCap)*Math.min(1,e*10);const n=this.kameraYariCap,a=Math.cos(this.kameraEgim)*n;this.camera.position.set(Math.sin(this.kameraAci)*a,this.kameraY+Math.sin(this.kameraEgim)*n,Math.cos(this.kameraAci)*a),this.camera.lookAt(0,.02,0)}bakisaAyarla(e,t=0){this.kameraAciHedef=e,this.kameraEgimHedef=Math.max(-.55,Math.min(.95,t))}parcaGoster(e,t){const n=this.kemikler;n&&(e==="kafa"?n.head.visible=t:e==="govde"?n.body.visible=t:e==="kollar"?(n.armL.visible=t,n.armR.visible=t):(n.legL.visible=t,n.legR.visible=t))}kaplamaGoster(e){this.kaplamaGorunur=e;for(const t of this.ustMeshler)t.visible=e&&this.oyuncuGorunur}kozmetikGoster(e){this.kozmetikGorunur=e,this.pelerinGrup&&(this.pelerinGrup.visible=e),this.kanatGrup&&(this.kanatGrup.visible=e)}_bekleyenSkin=null;async dokuResmi(e){try{const t=await fetch(e);if(t.ok){const n=await t.blob();return await new Promise((a,s)=>{const r=URL.createObjectURL(n),o=new Image;o.onload=()=>{URL.revokeObjectURL(r),a(o)},o.onerror=()=>{URL.revokeObjectURL(r),s(new Error("görsel açılamadı"))},o.src=r})}}catch{}return await new ox().loadAsync(e)}async skin(e){this.canliMod=!1;let t=null;if(e?.url)try{const n=await this.dokuResmi(e.url),a=document.createElement("canvas");a.width=64,a.height=64;const s=a.getContext("2d");s&&(s.imageSmoothingEnabled=!1,n.height===32?s.drawImage(n,0,0):s.drawImage(n,0,0,64,64),t=new an(a),Mo(t),t.needsUpdate=!0)}catch{t=null}this.canliMod||(this._bekleyenSkin=e,this.modelKur(t,e?.slim||!1))}async pelerin(e){if(this._bekleyenPelerin=e,this.pelerinTemizle(),this._pelerinTuval=null,!e?.url)return;const t=++this.pelerinJeton;try{const n=await this.dokuResmi(e.url);if(t!==this.pelerinJeton)return;const a=Cp(n);this.pelerinDoku=hl(a,a.width>Oi||a.height>Fi),this.pelerinMeshKur()}catch{}}pelerinTuval(e){if(this._bekleyenPelerin=null,this._pelerinTuval=e,!e){this.pelerinTemizle();return}if(this.pelerinDoku&&this.pelerinDoku.image===e){this.pelerinDoku.needsUpdate=!0;return}this.pelerinTemizle(),this.pelerinDoku=hl(e),this.pelerinMeshKur()}async kanat(e){if(this._bekleyenKanat=null,this.kanatTemizle(),!e?.url)return;const t=++this.kanatJeton;try{const n=await this.dokuResmi(e.url);if(t!==this.kanatJeton)return;const a=Cp(n);this.kanatDoku=hl(a,a.width>Oi||a.height>Fi),this.kanatMeshKur()}catch{}}kanatTuval(e){if(this._bekleyenKanat=e,!e){this.kanatTemizle();return}if(this.kanatDoku&&this.kanatDoku.image===e){this.kanatDoku.needsUpdate=!0;return}this.kanatTemizle(),this.kanatDoku=hl(e),this.kanatMeshKur()}kanatMeshSil(){this.kanatGrup?.parent&&this.kanatGrup.parent.remove(this.kanatGrup),this.kanatGrup?.traverse(e=>{const t=e;t.geometry?.dispose(),t.material?.dispose()}),this.kanatGrup=null}kanatTemizle(){this.kanatMeshSil(),this.kanatDoku?.dispose(),this.kanatDoku=null}kanatMeshKur(){const e=this.bukulenler?.belUst;if(!e||!this.kanatDoku)return;this.kanatGrup&&this.kanatMeshSil();const t=new Yl({map:this.kanatDoku,transparent:!0,alphaTest:.01,side:bi}),n=new Jt;n.position.set(0,6*Me,-2*Me);for(const a of[1,-1]){const s=new Jt;s.position.set(a*5*Me,0,0),s.rotation.order="ZYX";const r=new ca(10*Me,20*Me,2*Me);Lp(r,22,0,10,20,2);const o=new ti(r,t);o.position.set(-a*5*Me,-10*Me,-Me),a<0&&(o.scale.x=-1),Sd(o,10,20,2),s.add(o),s.rotation.x=kM,s.rotation.y=0,s.rotation.z=a*Ap,s.userData.yon=a,n.add(s)}n.visible=this.kozmetikGorunur,e.add(n),this.kanatGrup=n,this.kanatAyrikUygula(),this.izgaraYenile()}kanatAyrik(e){this.kanatAyrikAcik!==e&&(this.kanatAyrikAcik=e,this.kanatAyrikUygula())}kanatAyrikUygula(){if(this.kanatGrup)for(const e of this.kanatGrup.children){const t=e.userData.yon||1;e.position.x=t*(5+(this.kanatAyrikAcik?MM:0))*Me}}izgaraGoster(e,t=!1){this.izgaraAcik=e,this.modelIzgaraAcik=e&&t,this.modelIzgaraAcik&&this.modelIzgaralari(),this.izgaraYenile()}izgaraYenile(){for(const e of[this.pelerinGrup,this.kanatGrup])e?.traverse(t=>{t.isLineSegments&&(t.visible=this.izgaraAcik)});for(const e of[...this.tabanMeshler,...this.ustMeshler])for(const t of e.children)t.isLineSegments&&(t.visible=this.modelIzgaraAcik)}modelIzgaralari(){for(const e of[...this.tabanMeshler,...this.ustMeshler]){if(e.children.some(r=>r.isLineSegments))continue;const t=e.geometry.parameters;if(!t)continue;const n=Math.max(1,Math.round(t.width/Me)),a=Math.max(1,Math.round(t.height/Me)),s=Math.max(1,Math.round(t.depth/Me));Sd(e,n,a,s)}}pelerinMeshSil(){this.pelerinGrup?.parent&&this.pelerinGrup.parent.remove(this.pelerinGrup),this.pelerinGrup?.traverse(e=>{const t=e;t.geometry?.dispose(),t.material?.dispose()}),this.pelerinGrup=null,this.pelerinSarkac=null}pelerinTemizle(){this.pelerinMeshSil(),this.pelerinDoku?.dispose(),this.pelerinDoku=null}pelerinMeshKur(){const e=this.bukulenler?.belUst;if(!e||!this.pelerinDoku)return;this.pelerinGrup&&this.pelerinMeshSil();const t=new ca(10*Me,16*Me,1*Me);Lp(t,0,0,10,16,1);const n=t.attributes.uv;for(const o of[20,22]){const c=n.getX(o),l=n.getX(o+1);n.setX(o,l),n.setX(o+1,c)}n.needsUpdate=!0;const a=new Yl({map:this.pelerinDoku,transparent:!0,alphaTest:.01,side:bi}),s=new ti(t,a);s.position.set(0,-8*Me,0),Sd(s,10,16,1);const r=new Jt;r.position.set(0,6*Me,-2.5*Me),r.rotation.x=.06,r.visible=this.kozmetikGorunur,r.add(s),e.add(r),this.pelerinGrup=r,this.pelerinSarkac=r,this.izgaraYenile()}tuvalDoku(e,t){const n=new Gg(e);Mo(n),n.needsUpdate=!0,this.canliMod=!0,this._bekleyenSkin=null,this.canliDoku=n,this.modelKur(n,t)}dokuTazele(){this.canliDoku&&(this.canliDoku.needsUpdate=!0),this.pelerinDoku&&(this.pelerinDoku.needsUpdate=!0),this.kanatDoku&&(this.kanatDoku.needsUpdate=!0)}oyuncuGoster(e){this.oyuncuGorunur=e;for(const t of this.oyuncuMeshler){const n=this.ustMeshler.includes(t);t.visible=e&&(!n||this.kaplamaGorunur)}}atlasNoktasi(e,t="taban"){if(t==="oto")return this.isin(e,[...this.tabanMeshler,...this.ustMeshler],64,64);const n=t==="ust"?this.ustMeshler:this.tabanMeshler;return this.isin(e,n,64,64)}kozmetikNoktasi(e,t){return t==="pelerin"?this.pelerinGrup?this.isin(e,[this.pelerinGrup],Oi,Fi):null:this.kanatGrup?this.isin(e,[this.kanatGrup],Oi,Fi):null}isin(e,t,n,a){const s=this.canvas;if(!s||!this.renderer||t.length===0)return null;const r=s.getBoundingClientRect();if(r.width<1||r.height<1)return null;const o=new at((e.clientX-r.left)/r.width*2-1,-((e.clientY-r.top)/r.height)*2+1),c=new hx;c.setFromCamera(o,this.camera);const l=c.intersectObjects(t,!0).find(u=>!!u.uv);if(!l?.uv)return null;const d=Math.min(n-1,Math.max(0,Math.floor(l.uv.x*n))),f=Math.min(a-1,Math.max(0,Math.floor((1-l.uv.y)*a)));return{x:d,y:f}}modelKur(e,t){this.kok&&((this.kok.parent??this.scene).remove(this.kok),this.kok.traverse(A=>{const x=A;x.geometry&&x.geometry.dispose()})),this.pelerinGrup=null,this.pelerinSarkac=null,this.tabanMeshler=[],this.ustMeshler=[],this.oyuncuMeshler=[],this.kok=new Jt,this.kok.position.y=-.66,this.kalca=new Jt,this.kalca.position.set(0,12*Me,0),this.kalca.rotation.order="ZYX",this.kok.add(this.kalca),this.kemikler={head:new Jt,body:new Jt,armL:new Jt,armR:new Jt,legL:new Jt,legR:new Jt};const[n,a,s,r,o,c]=[this.kemikler.head,this.kemikler.body,this.kemikler.armL,this.kemikler.armR,this.kemikler.legL,this.kemikler.legR];for(const A of[n,a,s,r,o,c])A.rotation.order="ZYX";const l=Rp({u:0,v:0,w:8,h:8,d:8},e);l.position.set(0,4*Me,0),n.add(l);const d=Rp({u:32,v:0,w:8,h:8,d:8},e,!0);d.scale.setScalar(1.125),d.position.set(0,4*Me,0),n.add(d),this.tabanMeshler.push(l),this.ustMeshler.push(d),this.oyuncuMeshler.push(l,d),a.position.set(0,12*Me,0),a.userData.pivotPx=[0,12,0];const f=(A,x,w,R,L)=>{const z=ba(x,!1,e);z.position.set(R,w+x.h/4*Me,0),A.add(z);const F=new Jt;F.position.set(0,w,0);const C=ba(x,!0,e);if(C.position.set(R,-(x.h/4)*Me,0),F.add(C),A.add(F),this.tabanMeshler.push(z,C),this.oyuncuMeshler.push(z,C),L){const H=K=>{K.scale.set((L.w+.5)/L.w,(L.h+.25)/L.h,(L.d+.5)/L.d)},D=ba(L,!1,e,!0);D.position.set(R,w+L.h/4*Me,0),H(D),A.add(D);const P=ba(L,!0,e,!0);P.position.set(R,-(L.h/4)*Me,0),H(P),F.add(P),this.ustMeshler.push(D,P),this.oyuncuMeshler.push(D,P)}return F},u=new Jt;u.position.set(0,-6*Me,0),u.rotation.order="ZYX";const h=ba({u:16,v:16,w:8,h:12,d:4},!1,e);h.position.set(0,3*Me,0),u.add(h),a.add(u);const v=ba({u:16,v:16,w:8,h:12,d:4},!0,e);v.position.set(0,-9*Me,0),a.add(v);const m=ba({u:16,v:32,w:8,h:12,d:4},!1,e,!0);m.position.set(0,3*Me,0),m.scale.set(1.0625,1.0208,1.125),u.add(m);const p=ba({u:16,v:32,w:8,h:12,d:4},!0,e,!0);p.position.set(0,-9*Me,0),p.scale.set(1.0625,1.0208,1.125),a.add(p),this.tabanMeshler.push(h,v),this.ustMeshler.push(m,p),this.oyuncuMeshler.push(h,v,m,p);const g=new Jt;g.position.set(0,6*Me,0),g.rotation.order="ZYX";const y=t?3:4;n.position.set(0,6*Me,0),n.userData.pivotPx=[0,6,0],s.position.set(5*Me,4*Me,0),s.userData.pivotPx=[5,4,0];const T=f(s,{u:32,v:48,w:y,h:12,d:4},-4*Me,Me,{u:48,v:48,w:y,h:12,d:4});r.position.set(-5*Me,4*Me,0),r.userData.pivotPx=[-5,4,0];const b=f(r,{u:40,v:16,w:y,h:12,d:4},-4*Me,-Me,{u:40,v:32,w:y,h:12,d:4});o.position.set(1.9*Me,0,0),o.userData.pivotPx=[1.9,0,0];const S=f(o,{u:16,v:48,w:4,h:12,d:4},-6*Me,0,{u:0,v:48,w:4,h:12,d:4});c.position.set(-1.9*Me,0,0),c.userData.pivotPx=[-1.9,0,0];const E=f(c,{u:0,v:16,w:4,h:12,d:4},-6*Me,0,{u:0,v:32,w:4,h:12,d:4});if(this.bukulenler={body:u,belUst:g,armL:T,armR:b,legL:S,legR:E},g.add(n,s,r),this.kalca.add(a,g,o,c),this.scene.add(this.kok),this.oyuncuGorunur){if(!this.kaplamaGorunur)for(const A of this.ustMeshler)A.visible=!1}else for(const A of this.oyuncuMeshler)A.visible=!1;this.modelIzgaraAcik&&this.modelIzgaralari(),this._pelerinTuval&&this.pelerinDoku?this.pelerinMeshKur():this._bekleyenPelerin&&(this.pelerinDoku?this.pelerinMeshKur():this.pelerin(this._bekleyenPelerin)),this._bekleyenKanat&&(this.kanatDoku?this.kanatMeshKur():this.kanatTuval(this._bekleyenKanat))}emoteleriKur(e,t=1){this.emoteListe=e,this.hiz=t>0?t:1,this.durum="idle",this.durumBitis=this.zaman+.6}baslatDongu(){const e=()=>{if(this.canvas&&!this.canvas.isConnected){this.kapati(),Pa===this&&(Pa=null);return}if(this.rafId=requestAnimationFrame(e),document.hidden)return;const t=performance.now(),n=document.hasFocus()?1e3/45:1e3/4;if(t-this.sonCizimAt<n)return;this.sonCizimAt=t;const a=Math.min(.05,this.saat.getDelta());this.zaman+=a,this.adimla(a),this.kameraGuncelle(a),this.renderer&&this.renderer.render(this.scene,this.camera)};e()}adimla(e){if(!this.kemikler)return;let t;this.durum==="idle"?(t=this.idlePozu(this.zaman),this.emoteListe.length&&this.zaman>=this.durumBitis&&(this.aktif=this.emoteListe[Math.floor(Math.random()*this.emoteListe.length)],this.sonOynananAd=this.aktif.adi,this.durum="emote",this.tEmote=this.aktif.baslangicTick,this.aktif.dongu&&(this.durumBitis=this.zaman+10+Math.random()*6),t=Tp(this.aktif,this.tEmote))):this.durum==="emote"&&this.aktif?(this.tEmote+=e*20,(this.aktif.dongu?this.zaman>=this.durumBitis:this.tEmote>=this.aktif.stopTick)?(this.durum="soft",this.durumBitis=this.zaman+.55,t=wp):t=Tp(this.aktif,this.tEmote)):(t=wp,this.zaman>=this.durumBitis&&(this.durum="idle",this.durumBitis=this.zaman+(.9+Math.random()*1.8)/this.hiz));const n=this.durum==="soft"?Math.min(1,e*7):1;this.uygula(t,n),this.pelerinSalin(),this.kanatSalin()}kanatSalin(){const e=this.kanatGrup;if(!e)return;const t=Math.sin(this.zaman*2.1);e.rotation.x=t*.045,e.position.y=6*Me+t*.3*Me;for(const n of e.children){const a=n.userData.yon??1;n.rotation.z=a*(Ap+Math.max(0,t)*.035)}}pelerinSalin(){const e=this.pelerinSarkac;if(!e)return;const t=.06,n=this.durum==="emote"?.075:.03,a=t+Math.sin(this.zaman*1.3)*n;e.rotation.x+=(a-e.rotation.x)*.12,e.rotation.z=Math.sin(this.zaman*.9)*.02}idlePozu(e){const t=Math.sin(e*1.7),n=Math.sin(e*1.13);return{head:[n*2.4,t*4.5,t*1.5],body:[n*.5,0,0],armL:[t*3.6,0,2.6+n*1.4],armR:[-t*3.6,0,-2.6-n*1.4],legL:[-t*1.2,0,0],legR:[t*1.2,0,0],bend:[0,0,0,0,0],konum:[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],kokDon:[0,0,0],kokKonum:[0,0,0]}}uygula(e,t){const n=this.kemikler;if(!n)return;const a=Ey.degToRad,s=(o,c,l)=>{const d=a(c[0]),f=-a(c[1]),u=a(c[2]);o.rotation.x+=(d-o.rotation.x)*t,o.rotation.y+=(f-o.rotation.y)*t,o.rotation.z+=(u-o.rotation.z)*t;const h=o.userData.pivotPx||[0,0,0],v=e.konum[l],m=(h[0]+v[0])*Me,p=(h[1]+v[1])*Me,g=(h[2]+v[2])*Me;o.position.x+=(m-o.position.x)*t,o.position.y+=(p-o.position.y)*t,o.position.z+=(g-o.position.z)*t};s(n.head,e.head,0),s(n.body,e.body,1),s(n.armL,e.armL,2),s(n.armR,e.armR,3),s(n.legL,e.legL,4),s(n.legR,e.legR,5);const r=this.bukulenler;if(r){const o=(c,l)=>{const d=a(l);c.rotation.x+=(d-c.rotation.x)*t};o(r.armL,e.bend[0]),o(r.armR,e.bend[1]),o(r.legL,e.bend[2]),o(r.legR,e.bend[3]),o(r.body,e.bend[4]),o(r.belUst,e.bendTasi===!0?e.bend[4]:0)}if(this.kalca){const o=e.kokDon;this.kalca.rotation.x+=(a(o[0])-this.kalca.rotation.x)*t,this.kalca.rotation.y+=(-a(o[1])-this.kalca.rotation.y)*t,this.kalca.rotation.z+=(a(o[2])-this.kalca.rotation.z)*t;const c=e.kokKonum,l=c[0]*Me,d=(12+c[1])*Me,f=c[2]*Me;this.kalca.position.x+=(l-this.kalca.position.x)*t,this.kalca.position.y+=(d-this.kalca.position.y)*t,this.kalca.position.z+=(f-this.kalca.position.z)*t}this.kok&&(this.kok.position.y+=(-.66-this.kok.position.y)*t)}kapati(){this.sahneTemizle(),cancelAnimationFrame(this.rafId),this.rafId=0,this.boyutla&&window.removeEventListener("resize",this.boyutla),this.boyutla=null,this.yorungeKapat(),this.pelerinTemizle(),this.kanatTemizle(),this._bekleyenPelerin=null,this._bekleyenKanat=null,this._pelerinTuval=null,this.canliDoku?.dispose(),this.canliDoku=null,this.renderer?.dispose(),this.renderer=null,this.kemikler=null,this.bukulenler=null,this.kok=null,this.kalca=null,this.aktif=null,this.canvas=null,this.durum="idle"}}let Pa=null;function Dn(){return Pa||(Pa=new EM),window.__sahne=Pa,Pa}function _c(){Pa?.kapati(),Pa=null,window.__sahne=null}const Ue=128,xi=96;function _i(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function re(i,e,t,n=1,a=1,s="#fff"){i.fillStyle=s,i.fillRect(Math.round(e),Math.round(t),Math.round(n),Math.round(a))}function Sa(i,e,t=xi){const n=Math.ceil(t/e.length);e.forEach((a,s)=>re(i,0,s*n,Ue,n+1,a));for(let a=1;a<e.length;a++){const s=a*n,r=_i(a*977);for(let o=0;o<Ue;o+=2)r()>.45&&(re(i,o,s-1,1,1,e[a-1]),r()>.6&&re(i,o+1,s-1,1,1,e[a]))}}function Pp(i,e,t,n,a,s){re(i,e+3,t+3,n,3,a),re(i,e,t+5,n+6,3,a),re(i,e+2,t+8,n-2,2,s),re(i,e+6,t+2,n-8,2,a),re(i,e+4,t+10,n-6,1,s)}function Dp(i,e,t,n,a){const s=_i(a);for(let r=0;r<6;r++){const o=Math.floor(s()*Ue),c=18+Math.floor(s()*26);for(let l=0;l<c;l++){const d=Math.max(1,Math.round(l/c*(16+r%3*6)));re(i,o-d,e-l,d*2,1,t)}re(i,o-1,e-c+1,2,2,n)}}function Xs(i,e,t,n,a=30){const s=_i(n);for(let r=0;r<e;r++){const o=Math.floor(s()*Ue),c=a+Math.floor(s()*(xi-a));re(i,o,c,1,1,t[Math.floor(s()*t.length)])}}const Gu=[{id:"kiraz",ad:"Kiraz Korusu",etiket:"Pembe taç, düşen yapraklar",ciz(i){Sa(i,["#f6d8e4","#f1c6d8","#e8b0ca","#cf8fb4"],70),re(i,0,62,Ue,8,"#b98aa6"),re(i,0,68,Ue,8,"#8f6377"),Dp(i,64,"#a97a95","#d9aec6",41);const e=(n,a,s)=>{const r=_i(s),o=78;re(i,n,o-a,3,a,"#5d3b46"),re(i,n+1,o-a,1,a,"#7a5260");const c=12+Math.floor(r()*5);for(let l=0;l<3;l++){const d=n+1+Math.round((r()-.5)*14),f=o-a-Math.round(r()*14)-l*4;for(let u=-c;u<=c;u++){const h=Math.round(Math.sqrt(Math.max(0,c*c-u*u))*1.15);h<=0||re(i,d-h,f+u,h*2,1,u<0?"#f7b8d2":"#e795b6")}for(let u=0;u<10;u++){const h=Math.round((r()-.5)*c*1.6),v=Math.round((r()-.5)*c*1.6);re(i,d+h,f+v,1,1,r()>.5?"#ffd3e4":"#d47fa1")}}};e(18,26,7),e(96,30,19),e(58,22,31),re(i,0,78,Ue,xi-78,"#7fa86a"),re(i,0,78,Ue,2,"#9dc484"),re(i,0,90,Ue,6,"#5d7f4f");const t=_i(53);for(let n=0;n<70;n++)re(i,t()*Ue,12+t()*62,1,1,t()>.5?"#ffd3e4":"#f2a7c4")}},{id:"nether",ad:"Nether Kalesi",etiket:"Obsidyen kule, lav parıltısı",ciz(i){Sa(i,["#2a0d13","#4a1119","#6d1a1e","#8f2a20"],56),re(i,0,52,Ue,6,"#ff6a1a"),re(i,0,52,Ue,2,"#ffa347"),re(i,0,56,Ue,2,"#c93d0c"),re(i,0,40,Ue,14,"#2b1218"),re(i,12,26,16,30,"#1c0a10"),re(i,12,22,16,5,"#2f121a"),re(i,96,18,20,42,"#1c0a10"),re(i,96,14,20,5,"#2f121a"),re(i,44,34,34,26,"#22101a"),re(i,44,30,34,4,"#331522");const e=_i(17);for(let t=0;t<16;t++){const n=46+Math.floor(e()*30),a=36+Math.floor(e()*20);re(i,n,a,2,3,"#ff9b3d")}re(i,18,32,2,3,"#ffb04d"),re(i,102,26,2,3,"#ffb04d"),re(i,0,70,Ue,26,"#120810");for(let t=0;t<Ue;t+=16)re(i,t,70,15,8,"#1b0d17"),re(i,t+1,71,13,2,"#241322");re(i,0,84,Ue,4,"#ff5a14"),re(i,0,84,Ue,1,"#ffb44d"),re(i,0,88,Ue,8,"#120810"),Xs(i,40,["#ff8a2a","#ffc061","#ff5a14"],91,24)}},{id:"end",ad:"End Şehri",etiket:"Mor boşluk, koros kuleler",ciz(i){Sa(i,["#150c22","#1d1030","#26143d","#2f1a49"],62),Xs(i,55,["#e7d6ff","#b795f0","#8e6bd0"],13,4),re(i,0,58,Ue,10,"#241436"),re(i,0,58,Ue,2,"#3a2152");const e=(n,a,s)=>{re(i,n,a,9,s,"#3d2a56"),re(i,n+1,a,2,s,"#55406f"),re(i,n+7,a,2,s,"#2a1c3d"),re(i,n-2,a-3,13,3,"#63498a"),re(i,n-1,a-6,11,3,"#4a3568"),re(i,n+2,a-9,5,3,"#63498a")};e(16,30,30),e(74,22,38),e(104,36,24);const t=(n,a)=>{re(i,n,a,2,6,"#efe4ff"),re(i,n-2,a+1,6,3,"rgba(200,170,255,0.35)"),re(i,n,a+6,2,2,"#b795f0")};t(20,24),t(78,16),t(108,30),re(i,30,46,14,4,"#2c1a41"),re(i,34,50,6,3,"#1e1130"),re(i,96,50,10,3,"#2c1a41"),re(i,0,68,Ue,xi-68,"#1b1029"),re(i,0,68,Ue,3,"#34204a");for(let n=4;n<Ue;n+=14)re(i,n,76,9,2,"#2a1a3d");Xs(i,22,["#c9b3f5","#8e6bd0"],71,70)}},{id:"bastion",ad:"Bastion",etiket:"Karataş surlar, altın damar",ciz(i){Sa(i,["#2b0b0b","#451014","#5d1717","#74201b"],50),re(i,0,46,Ue,8,"#8a2a1c");const e=(t,n,a,s)=>{re(i,t,n,a,s,"#221a1f"),re(i,t,n,a,2,"#33272e");for(let r=4;r<s;r+=8)re(i,t+2,n+r,a-4,1,"#1a1318")};e(0,24,30,46),e(98,18,30,52),e(34,34,60,36);for(let t=36;t<92;t+=12)re(i,t,38,6,6,"#120d10");re(i,4,28,8,8,"#120d10"),re(i,104,24,8,8,"#120d10"),re(i,8,50,4,4,"#ffcf4d"),re(i,14,54,2,2,"#e0a81f"),re(i,106,44,5,5,"#ffcf4d"),re(i,60,52,4,4,"#ffcf4d"),re(i,66,56,2,2,"#e0a81f"),re(i,0,70,Ue,26,"#150f12"),re(i,0,74,Ue,6,"#ff6418"),re(i,0,74,Ue,1,"#ffb44d"),re(i,0,80,Ue,16,"#150f12"),Xs(i,26,["#ffb44d","#ff7a20"],33,60)}},{id:"mantar",ad:"Mantar Adası",etiket:"Dev şapkalar, turkuaz gök",ciz(i){Sa(i,["#0d2b33","#123a44","#17505a","#1d6b70"],74),Pp(i,22,18,22,"#2d6f74","#1d5259"),Pp(i,76,12,30,"#2d6f74","#1d5259"),re(i,0,66,Ue,10,"#2f6b52"),re(i,0,66,Ue,2,"#4b8b68");const e=(n,a,s)=>{const r=_i(s),o=4+Math.floor(r()*2);re(i,n,74-a,o,a,"#e6d7bd"),re(i,n,74-a,1,a,"#f3e9d6"),re(i,n+o-1,74-a,1,a,"#c9b797");const c=74-a-10;for(let l=0;l<10;l++){const d=Math.round(14-l*1.1);re(i,n+o/2-d,c+l,d*2,1,l<4?"#e14a3a":"#c33a2e")}for(let l=0;l<9;l++)re(i,n+o/2-12+r()*24,c+2+r()*7,2,1,"#fff3e2")};e(22,30,3),e(72,40,9),e(104,24,15),re(i,0,74,Ue,xi-74,"#3f7c5c"),re(i,0,74,Ue,2,"#5b9d77"),re(i,0,86,Ue,10,"#2c5a44");const t=_i(61);for(let n=0;n<48;n++)re(i,t()*Ue,10+t()*60,1,1,t()>.5?"#a9f0d8":"#7fd6be")}},{id:"buz",ad:"Buz Diyarı",etiket:"Aurora, buzdağı",ciz(i){Sa(i,["#071226","#0c1d3a","#122b52","#19396b"],60);for(let n=0;n<4;n++){const a=12+n*7;for(let s=0;s<Ue;s++){const r=Math.round(Math.sin(s/Ue*Math.PI*2+n)*3);re(i,s,a+r,1,2,n%2?"rgba(94,255,206,0.30)":"rgba(122,182,255,0.28)")}}Xs(i,40,["#ffffff","#cfe6ff","#9fc4ff"],29,2),Dp(i,60,"#2a4a74","#7fa8d6",77);const e=(n,a,s,r)=>{for(let o=0;o<r;o++){const c=Math.round(s*(1-o/r)*.9);re(i,n-c/2+o*.4,a+o,c,1,o<r*.4?"#d6ecff":"#a6cbe8")}re(i,n,a+2,2,r-4,"#ffffff")};e(22,46,26,26),e(96,52,30,20),e(60,58,18,14),re(i,0,72,Ue,xi-72,"#0f2a4a"),re(i,0,72,Ue,2,"#2b5f8c");for(let n=0;n<24;n++){const a=_i(n*13);re(i,a()*Ue,76+a()*18,6+a()*10,1,"#1f4b72")}const t=_i(83);for(let n=0;n<26;n++)re(i,t()*Ue,28+t()*44,1,1,"#ffffff")}},{id:"col",ad:"Çöl Tapınağı",etiket:"Kum piramit, sıcak pus",ciz(i){Sa(i,["#f7dfa8","#f3cf86","#e8b969","#d9a052"],62),re(i,96,12,12,12,"#fff3cf"),re(i,94,10,16,16,"rgba(255,235,180,0.25)");for(let t=0;t<4;t++){const n=54+t*6;re(i,0,n,Ue,6,t<2?"#d8ab68":"#c1924f"),re(i,0,n,Ue,1,"#e8c584")}const e=22;for(let t=0;t<34;t++){const n=Math.round(8+t*1.7);re(i,46-n/2,e+t,n,1,t%7===0?"#c79a55":"#dcb271"),re(i,46-n/2,e+t,2,1,"#f0d29a")}re(i,42,40,8,16,"#6b4d28"),re(i,43,42,6,14,"#3d2b14"),re(i,18,52,3,22,"#7b5a34");for(let t=0;t<5;t++){const n=t<2?-1:1;for(let a=0;a<8;a++)re(i,19+n*a,52-a+Math.abs(a-3),2,1,t%2?"#5f8f4a":"#7aa85c")}re(i,0,78,Ue,xi-78,"#e0b877"),re(i,0,78,Ue,2,"#f2d49b");for(let t=6;t<Ue;t+=18)re(i,t,86,5,2,"#c69a5c")}},{id:"okyanus",ad:"Okyanus Anıtı",etiket:"PriZmarin, ışık huzmeleri",ciz(i){Sa(i,["#0a2a3a","#0c3446","#0e3f52","#104a5e"],40);for(let n=0;n<6;n++){const a=8+n*21;for(let s=0;s<66;s++){const r=2+s*.18;re(i,a+s*.12,s,r,1,"rgba(150,240,255,0.06)")}}const e=(n,a,s,r)=>{re(i,n,a,s,r,"#2f7d76"),re(i,n,a,s,2,"#48a89a"),re(i,n,a+r-2,s,2,"#1f5b57")};e(28,30,72,34),e(40,22,48,10),e(52,14,24,10),re(i,60,18,8,4,"#a8f0e2"),re(i,62,16,4,2,"#e0fff8"),re(i,34,40,4,4,"#d9b34a"),re(i,90,46,4,4,"#d9b34a");for(let n=32;n<96;n+=12)re(i,n,52,6,2,"#1d4a48");re(i,0,64,Ue,xi-64,"#0b2c33"),re(i,0,64,Ue,3,"#164a4a");const t=_i(47);for(let n=0;n<16;n++){const a=t()*Ue,s=6+t()*12;re(i,a,78-s,2,s,t()>.5?"#1f6b55":"#2b8a63")}Xs(i,30,["#8fe8dd","#c8fff6"],11,8)}}],wM=Gu;function TM(i){return Gu.find(e=>e.id===i)||Gu[0]}function lv(i,e){const t=i.getContext("2d");t&&((i.width!==Ue||i.height!==xi)&&(i.width=Ue,i.height=xi),t.imageSmoothingEnabled=!1,t.clearRect(0,0,Ue,xi),TM(e).ciz(t))}let En=null;const Ip=()=>document.documentElement.getAttribute("data-world")==="sahne",AM=i=>{if(!i)return"hiç";const e=Math.round((Date.now()-i)/6e4);if(e<1)return"şimdi";if(e<60)return`${e} dk önce`;const t=Math.round(e/60);return t<24?`${t} saat önce`:`${Math.round(t/24)} gün önce`};function RM(i){const e=le.instances[0];(!En||!le.instances.find(l=>l.id===En))&&(En=e?.id||null);const t=le.instances.find(l=>l.id===En),n=bn(),a=l=>!!l&&(l.includes("/")||l.includes("\\")),s=[...le.instances].sort((l,d)=>(d.last_played||0)-(l.last_played||0)),r=s[0]||null,o=s.slice(0,5);i.innerHTML=`
    <div class="imp-root">
      <div class="imp-main">
        <div class="imp-brand">
          <div class="imp-brand-orta">
            <span class="imp-chip imp-sari">YIKIM</span>
            <span class="imp-chip imp-gri">LIENT</span>
          </div>
          <span class="imp-counter">${le.instances.length} kurulum</span>
        </div>

        <div class="imp-banner${t?.cover?" kapakli":""}"${t?.cover?` style="background-image:url('${xt(t.cover)}')"`:""}>
          <div class="vitrin"><canvas id="sahne-arka" class="sahne-arka"></canvas><canvas id="sahne-katman"></canvas></div>
          <button class="imp-ad-chip" id="i-ad" title="Hesap yönetimi">
            ${n?.name?`<img src="${Rc(n)}" alt="" draggable="false" ${Lc(n)}><b>${cc(n.id)}${n.name}</b><small>hesabı yönet</small>`:"<b>hesap yok</b><small>giriş yap</small>"}
          </button>
          ${t?`<button class="imp-buyut" id="i-menu" title="${t.name}">${V("gear")}</button>`:""}
        </div>

        <div class="imp-profil-baslik">
          <span>${V("grid")} SON OYNANAN PROFİLLER</span>
          <span class="imp-pill">
            <span class="pill sel">${t?.mod_loader?io(t.mod_loader):"Java"}</span>
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
          ${r?`
          <button class="imp-hizli-satir${Je.activeId===r.id?" durdur":""}" id="i-hizli-oyla" ${Je.activeId&&Je.activeId!==r.id?'disabled data-kilitli="1"':""}>
            <b>${r.name}${Je.activeId===r.id?" — AÇIK":""}</b>
            <small>${io(r.mod_loader)} · ${r.mc_version}</small>
          </button>
          <button class="imp-hizli-satir pas" id="i-hizli-liste">Tümünü gör →</button>`:`
          <button class="imp-hizli-satir pas" id="i-hizli-liste">İlk kurulumu oluştur</button>`}
        </div>
      </div>
    </div>
  `;const c=i.querySelector("#i-profil-satirlar");for(const l of o){const d=hi(`
      <div class="imp-satir${Je.activeId===l.id?" oyunda":""}" role="button" tabindex="0" data-id="${l.id}">
        <span class="imp-satir-ikon">${a(l.icon)?`<img src="${xt(l.icon)}" draggable="false" />`:`<span class="emoji">${l.icon||"🔥"}</span>`}</span>
        <span class="imp-satir-yazi">
          <b class="imp-satir-ad">${l.name}</b>
          <small>${io(l.mod_loader)} · ${l.mc_version} — ${AM(l.last_played)}</small>
        </span>
        <button class="imp-oyla${Je.activeId===l.id?" durdur":""}" ${Je.activeId&&Je.activeId!==l.id?'disabled data-kilitli="1"':""}
          title="${Je.activeId===l.id?"Oyunu kapat":`${l.name} — OYNA`}">${V(Je.activeId===l.id?"stop":"play")} ${Je.activeId===l.id?"DURDUR":"OYNA"}</button>
        <button class="imp-diyis" title="Düzenle">${V("gear")}</button>
      </div>
    `);d.addEventListener("click",f=>{const u=l.id;if(f.target.closest(".imp-diyis")){je("instances",u);return}if(f.target.closest(".imp-oyla")){Je.activeId===l.id&&kd();return}En=u,je("instances",u)}),d.querySelector(".imp-oyla")?.addEventListener("click",f=>f.stopPropagation()),c.appendChild(d)}c.querySelectorAll(".imp-satir").forEach(l=>{const d=l.dataset.id||"";l.querySelector(".imp-oyla")?.addEventListener("click",async f=>{if(f.stopPropagation(),Je.activeId===d)return kd();if(!le.accounts.length)return Un();const{launchInstance:u}=await pt(async()=>{const{launchInstance:h}=await Promise.resolve().then(()=>Et);return{launchInstance:h}},void 0);u(d)})}),i.querySelector("#i-yonet")?.addEventListener("click",()=>je("instances")),i.querySelector("#i-mod")?.addEventListener("click",()=>je("explore")),i.querySelector("#i-menu")?.addEventListener("click",()=>{En&&je("instances",En)}),i.querySelector("#i-ad")?.addEventListener("click",()=>Un()),i.querySelector("#i-haber-tumu")?.addEventListener("click",()=>je("news")),i.querySelector("#i-hizli-liste")?.addEventListener("click",()=>je("instances")),i.querySelector("#i-hizli-oyla")?.addEventListener("click",async()=>{if(!r)return;if(Je.activeId===r.id)return kd();if(!le.accounts.length)return Un();const{launchInstance:l}=await pt(async()=>{const{launchInstance:d}=await Promise.resolve().then(()=>Et);return{launchInstance:d}},void 0);l(r.id)}),cv(i,n)}async function kd(){try{await ie("cmd_kill_game")}catch{}const{refreshState:i}=await pt(async()=>{const{refreshState:e}=await Promise.resolve().then(()=>Et);return{refreshState:e}},void 0);await i(!0)}async function LM(i){const e=i.querySelector("#i-news");if(e)try{const t=await ie("cmd_list_yikim_news");t.sort((n,a)=>(a.pinned?1:0)-(n.pinned?1:0)||a.date.localeCompare(n.date)),e.innerHTML="";for(const n of t.slice(0,2)){const a=hi(`
        <div class="imp-news-kart" role="button" tabindex="0">
          <div class="imp-news-img"${n.image?` style="background-image:url('${n.image}')"`:""}></div>
          <div class="imp-news-govde">
            <span class="imp-news-chip${n.pinned?" sar":""}">${n.pinned?"DUYURU":"YIKIM"}</span>
            <b>${n.title}</b>
            <small>${n.date}</small>
          </div>
        </div>
      `);a.addEventListener("click",()=>je("news")),e.appendChild(a)}}catch{}}function CM(i){if(_c(),Ip()){RM(i),LM(i);return}const e=le.instances[0];(!En||!le.instances.find(f=>f.id===En))&&(En=e?.id||null);const t=le.instances.find(f=>f.id===En),n=bn(),a=f=>!!f&&(f.includes("/")||f.includes("\\")),s=t?a(t.icon)?`<img class="hero-inst-icon" src="${xt(t.icon)}" draggable="false" />`:`<span class="hero-inst-icon emoji">${t.icon||"🔥"}</span>`:"",r=!!t?.cover&&!Ip(),o=r?` style="background-image:url('${xt(t.cover)}')"`:"",c=t?Je.activeId===t.id?"warn":"ok":"off",l=le.instances.filter(f=>f.id!==t?.id);i.innerHTML=`
    <div class="page-wrap">
    <!-- HERO HAT: seçili kurulum tek satırda — lamba, ad, ölçümler, OYNA şalteri -->
    <section class="home-hero${r?" has-cover":""}"${o}>
      <div class="vitrin" aria-label="Karakter vitrini">
        <canvas id="sahne-arka" class="sahne-arka"></canvas>
        <canvas id="sahne-katman"></canvas>
        <div class="vitrin-isim">${n?`${n.name} — SAHNE`:"SAHNE"}</div>
      </div>
      <div class="hero-content">
        ${t?`
          <div class="hero-badge">${lo(c)} ${s} ${t.mc_version} · ${io(t.mod_loader)}</div>
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
          ${lo("err")}
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
          ${lo(Je.activeId===f.id?"warn":"ok")}
          <span class="lr-name">${f.name}</span>
          <span class="lr-grow"></span>
          <span class="lr-meta">
            ${io(f.mod_loader)} ${f.mc_version}
            <span class="sep">·</span>
            Son: ${f.last_played?new Date(f.last_played).toLocaleDateString("tr-TR"):"hiç"}
          </span>
          <span class="lr-play" title="Oyna">${V("play")}</span>
        </button>
      `);u.querySelector(".lr-play").innerHTML=V("play"),u.addEventListener("click",async h=>{if(h.target.closest(".lr-play")){if(!le.accounts.length)return Un();vf(u);const{launchInstance:v}=await pt(async()=>{const{launchInstance:m}=await Promise.resolve().then(()=>Et);return{launchInstance:m}},void 0);v(f.id);return}je("instances",f.id)}),d.appendChild(u)}gf(Array.from(d.children))}DM(i),IM(),PM(i),cv(i,n)}async function cv(i,e){const t=i.querySelector("#sahne-katman");if(!t)return;const n=i.querySelector("#sahne-arka");n&&document.documentElement.getAttribute("data-world")==="sahne"&&(lv(n,String(le.config?.sahne_arka||"kiraz")),n.classList.add("on"));const a=Dn();a.kur(t),t.classList.add("on");try{const o=await ie("cmd_get_account_skin",{id:e?.id||""});o?.dosya?await a.skin({url:xt(String(o.dosya)),slim:!!o.slim}):await a.skin(null)}catch{await a.skin(null)}try{const o=await ie("cmd_kozmetik_oku");o?.pelerin_dosya&&o.pelerin_aktif!==!1&&await a.pelerin({url:xt(String(o.pelerin_dosya))})}catch{}if(le.config?.menu_animasyon===!1){a.emoteleriKur([]);return}const r={sakin:.6,normal:1,canli:1.8}[String(le.config?.menu_animasyon_hiz||"normal")]||1;try{const o=await ie("cmd_list_emotes"),c=[];for(const l of o)try{c.push(yM(l.icerik))}catch{}a.emoteleriKur(c,r)}catch{a.emoteleriKur([])}}async function PM(i){try{const e=await ie("cmd_get_community_stats"),t=i.querySelector("#cs-downloads"),n=i.querySelector("#cs-stars");t&&(t.textContent=(e.downloads||0).toLocaleString("tr-TR")),n&&(n.textContent=(e.stars||0).toLocaleString("tr-TR"))}catch{const e=i.querySelector("#cs-downloads"),t=i.querySelector("#cs-stars");e&&(e.textContent="—"),t&&(t.textContent="—")}i.querySelector("#cs-github-link")?.addEventListener("click",()=>{pt(()=>Promise.resolve().then(()=>Et),void 0).then(e=>e.openExternal("https://github.com/YKSAMI1/yikimlient").catch(()=>{}))})}function io(i){return{vanilla:"Vanilla",fabric:"Fabric",forge:"Forge"}[i]||i}function DM(i){i.querySelector("#h-play")?.addEventListener("click",async()=>{if(!En){je("instances");return}if(!le.accounts.length){Un();return}vf(i.querySelector(".play-ring"));const{launchInstance:e}=await pt(async()=>{const{launchInstance:t}=await Promise.resolve().then(()=>Et);return{launchInstance:t}},void 0);e(En)}),i.querySelector("#h-stop")?.addEventListener("click",async()=>{try{await ie("cmd_kill_game")}catch{}const{refreshState:e}=await pt(async()=>{const{refreshState:t}=await Promise.resolve().then(()=>Et);return{refreshState:t}},void 0);await e(!0)}),i.querySelector("#h-manage")?.addEventListener("click",()=>{je("instances",En||void 0)}),i.querySelector("#h-new")?.addEventListener("click",()=>je("instances")),i.querySelector("#h-all")?.addEventListener("click",()=>je("instances")),i.querySelector("#news-all")?.addEventListener("click",()=>je("news")),i.querySelector("#h-account-row")?.addEventListener("click",()=>Un())}async function IM(){const i=yi("#home-news");if(i)try{const e=await ie("cmd_list_yikim_news");if(i.innerHTML="",!e.length){i.innerHTML='<div class="card"><p>Duyuru yok — yenilikler burada belirecek.</p></div>';return}e.sort((t,n)=>(n.pinned?1:0)-(t.pinned?1:0)||n.date.localeCompare(t.date));for(const t of e.slice(0,4)){const n=hi(`
        <div class="news-card card hover">
          ${t.image?`<div class="news-img" style="background-image:url('${t.image}')"></div>`:`<div class="news-img noimg">${V("news")}</div>`}
          <div class="news-body">
            <div class="chip orange">${t.pinned?"DUYURU":"YIKIM"} · ${t.date}</div>
            <h3>${t.title}</h3>
          </div>
        </div>
      `);n.addEventListener("click",()=>je("news")),i.appendChild(n)}}catch{i.innerHTML='<div class="card"><p>Duyurular şimdilik yüklenemedi — çevrimdışı olabilirsin.</p></div>'}}const dv="yikim-bildirimler",zM=60;function yc(){try{const i=localStorage.getItem(dv);if(!i)return[];const e=JSON.parse(i);return Array.isArray(e)?e:[]}catch{return[]}}function Df(i){try{localStorage.setItem(dv,JSON.stringify(i.slice(0,zM)))}catch{}}function Ms(i,e,t){const n=yc(),a=Date.now();n.length&&n[0].baslik===e&&n[0].mesaj===t&&a-n[0].at<3e3||(n.unshift({id:`b${a.toString(36)}${Math.random().toString(36).slice(2,6)}`,tur:i,baslik:e,mesaj:t,at:a,okundu:!1}),Df(n),document.querySelector("#bildirim-panel.bildirim-acik")&&Do(),xc(!0))}function UM(){const i=yc();i.some(e=>!e.okundu)&&(i.forEach(e=>{e.okundu=!0}),Df(i),xc(!1))}function NM(){Df([]),Do(),xc(!1)}function uv(){let i=document.querySelector("#bildirim-panel");return i||(i=document.createElement("div"),i.id="bildirim-panel",i.className="bildirim-panel",document.body.appendChild(i)),i}function fv(){const i=uv();Do(),UM(),i.classList.toggle("bildirim-acik")}function hv(){document.querySelector("#bildirim-panel")?.classList.remove("bildirim-acik")}const OM={kurulum:"📦",sistem:"⚙️",mod:"🧩",genel:"🔔"};function FM(i){const e=new Date(i.at).toLocaleTimeString("tr-TR",{hour:"2-digit",minute:"2-digit"});return`
    <div class="bild-satir" data-tur="${i.tur}">
      <span class="bild-ikon">${OM[i.tur]}</span>
      <div class="bild-govde">
        <div class="bild-baslik">${i.baslik}</div>
        <div class="bild-mesaj">${i.mesaj}</div>
      </div>
      <span class="bild-saat">${e}</span>
    </div>`}function Do(){const i=uv(),e=yc();i.innerHTML=`
    <div class="bild-kafa">
      <span class="bild-kafa-ad">Bildirimler</span>
      <div class="bild-kafa-islem">
        <button class="bild-temizle" title="Tümünü temizle">Temizle</button>
        <button class="bild-kapat" title="Kapat">✕</button>
      </div>
    </div>
    <div class="bild-liste">
      ${e.length?e.map(FM).join(""):""}
    </div>
    ${e.length?"":`
      <div class="bild-bos">
        <div class="bild-bos-ikon">🔔</div>
        <div>Şu an bir şey olmuyor.</div>
        <div class="bild-bos-alt">Mod paketi kurulumu, güncellemeler ve diğer haberler burada gözükür.</div>
      </div>`}
  `,i.querySelector(".bild-temizle")?.addEventListener("click",t=>{t.stopPropagation(),NM()}),i.querySelector(".bild-kapat")?.addEventListener("click",t=>{t.stopPropagation(),hv()})}function xc(i){const e=document.querySelector("#tb-pack");e&&(e.classList.toggle("bild-var",i),e.title=i?"Yeni bildirgin var — kutuyu aç":"Bildirimler — kurulum durumu ve diğer haberler")}function BM(){const i=yc().filter(e=>!e.okundu).length;xc(i>0)}window.__BILDIRIM__={ekle:Ms,acKapa:fv,baslat:Do,kapat:hv};const pv=[{adim:1,ad:"Paket indiriliyor",aciklama:"sunucudan paket dosyası alınıyor"},{adim:2,ad:"Paket açılıyor",aciklama:"sürüm / yükleyici bilgisi okunuyor"},{adim:3,ad:"Yapılandırma dosyaları",aciklama:"paketin kendi ayarları yazılıyor"},{adim:4,ad:"Modlar indiriliyor",aciklama:"her mod ayrı indirilip mods/ bırakılıyor"},{adim:5,ad:"Yükleyici kuruluyor",aciklama:"Fabric/Forge/NeoForge profili hazırlanıyor"},{adim:6,ad:"Oyun dosyaları",aciklama:"sürüm kurulumu: kütüphaneler + assetler + java"},{adim:7,ad:"YIKIM modu",aciklama:"launcher çekirdeği kuruluma bağlanıyor"},{adim:8,ad:"Hazır",aciklama:"kurulum oynanabilir"}],un=new Map;let zp=null,Zl=null;const HM=4;function $M(i,e,t){const n=e>0?`${i}/${e}`:"";return t&&n?`${n} · ${t}`:t||n}function Io(i,e=""){let t=un.get(e);if(t){t.kapandi=!1,t.bitti=!1;for(const a of t.satirlar.values())a.classList.remove("pk-bitti","pk-aktif","pk-hata","pk-atlandi"),a.classList.add("pk-bekliyor");t.root.classList.remove("pk-gizli","pk-acik","pk-bitti"),t.root.style.order="0"}else for(t=VM(e),un.set(e,t),t.root.classList.remove("pk-gizli"),t.root.style.order="0";un.size>HM;){const a=[...un.entries()].find(([,s])=>s!==t&&s.bitti);if(!a)break;a[1].kapandi=!0,a[1].root.classList.add("pk-gizli"),un.delete(a[0])}const n=t.root.querySelector(".pk-baslik");n.textContent=i,t.root.querySelector(".pk-ozet").textContent="Kurulum başlıyor…",t.root.style.removeProperty("color"),t.bar.style.transform="scaleX(0.01)",t.yuzde.textContent="%0",zp||xn("pack-step",a=>{const s=a?.payload;if(!s)return;const r=typeof s.kimlik=="string"?s.kimlik:"",o=r?[un.get(r)]:[...un.values()];for(const c of o)c&&vv(c,s.adim,s.durum,s.done||0,s.total||0,s.ayrinti||"",s.percent||0)}).then(a=>{zp=a}),If("kurulum"),Ms("kurulum",i,"Kurulum başladı — adım adım sağ altta gösterilecek")}function mv(i=""){const e=un.get(i);e&&e.root.classList.toggle("pk-acik")}function wr(i=""){const e=un.get(i);if(!e)return;for(const[a,s]of e.satirlar)s.classList.contains("pk-bekliyor")&&a<8&&(s.classList.remove("pk-bekliyor"),s.classList.add("pk-atlandi"));const t=e.satirlar.get(8);t&&(t.classList.remove("pk-bekliyor","pk-aktif"),t.classList.add("pk-bitti")),e.bar.style.transform="scaleX(1)",e.yuzde.textContent="%100";const n=e.root.querySelector(".pk-ozet");n.textContent="Kurulum tamam — Kurulumlar'dan oynayabilirsin",e.bitti=!0,e.root.classList.add("pk-bitti"),e.kapatZamani=Date.now()+6e3,If("bitti"),Ms("kurulum","Kurulum tamamlandı","Paket oynanmaya hazır — Kurulumlar sayfasından başlatabilirsin"),Zl===null&&_v()}function GM(i){for(const[e,t]of un)i&&!e.includes(i)||t.bitti||(t.bitti=!0,t.kapatZamani=Date.now()+4e3,t.root.classList.add("pk-bitti"),Zl===null&&_v())}function Tr(i,e=""){const t=un.get(e);if(!t)return;const n=t.root.querySelector(".pk-ozet");n.textContent=`Kurulum durdu: ${i}`,n.style.color="var(--danger)";const a=[...t.satirlar.values()].find(s=>s.classList.contains("pk-aktif"));a&&(a.classList.remove("pk-aktif"),a.classList.add("pk-hata")),t.root.classList.add("pk-acik"),If("kurulum"),Ms("sistem","Kurulum durdu",i.length>120?`${i.slice(0,120)}…`:i)}function gv(i,e,t,n,a,s=""){const r=un.get(s);r&&vv(r,i,e,t,n,a,0)}function If(i){const e=document.querySelector("#tb-pack");e&&(e.classList.toggle("bild-var",i!=="yok"),e.title=i==="bitti"?"Kurulum tamamlandı — durumu göster":i==="kurulum"?"Mod paketi kuruluyor — durumu göster":"Bildirimler — kurulum durumu ve diğer haberler")}function vv(i,e,t,n,a,s,r){if(!i.satirlar.has(e))return;const o=i.satirlar.get(e);o.classList.remove("pk-bekliyor","pk-aktif","pk-bitti","pk-hata","pk-atlandi"),o.classList.add(`pk-${t}`);const c=i.detaylar.get(e);c.textContent=$M(n,a,s);const l=r||(e-1)/8*100;i.bar.style.transform=`scaleX(${Math.min(1,Math.max(.01,l/100))})`,i.yuzde.textContent=`%${Math.min(100,Math.round(l))}`;const d=i.root.querySelector(".pk-ozet");d.style.removeProperty("color"),d.textContent=s?`${Up(e)} · ${s}`:Up(e),e===8&&(t==="bitti"||t==="hata")&&(t==="bitti"?wr(i.kimlik):Tr(d.textContent,i.kimlik))}function Up(i){return pv.find(e=>e.adim===i)?.ad||`Adım ${i}`}function VM(i){const e=document.createElement("div");e.className="pk-kart pk-gizli",e.dataset.kimlik=i,e.setAttribute("role","status"),e.setAttribute("aria-live","polite"),e.innerHTML=`
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
  `;const t=new Map,n=new Map,a=e.querySelector(".pk-adimlar");for(const r of pv){const o=document.createElement("div");o.className="pk-adim pk-bekliyor",o.dataset.adim=String(r.adim),o.innerHTML=`
      <span class="pk-isaret"></span>
      <span class="pk-ad">${r.ad}</span>
      <span class="pk-detay">${r.aciklama}</span>
    `,a.appendChild(o),t.set(r.adim,o),n.set(r.adim,o.querySelector(".pk-detay"))}const s={root:e,kimlik:i,satirlar:t,detaylar:n,bar:e.querySelector(".pk-bar > div"),yuzde:e.querySelector(".pk-yuzde"),ozet:e.querySelector(".pk-ozet"),kapandi:!1,kapatZamani:0,bitti:!1};return e.querySelector(".pk-kafa").addEventListener("click",()=>mv(i)),e.querySelector(".pk-kapat")?.addEventListener("click",r=>{r.stopPropagation(),s.kapandi=!0,s.root.classList.add("pk-gizli"),Y("Kurulum arkada sürüyor","ok")}),document.body.appendChild(e),s}function _v(){const i=setInterval(()=>{const e=[...un.values()].filter(t=>!t.kapandi);if(e.length===0){clearInterval(i),Zl=null;return}for(const t of e)t.bitti&&Date.now()>t.kapatZamani&&(t.kapandi=!0,t.root.classList.add("pk-gizli"),un.delete(t.kimlik))},1200);Zl=i}function yv(){for(const[,i]of un)i.kapandi=!0,i.root.classList.add("pk-gizli");un.clear()}window.__PACK_KART_TEST__=gv;window.__PACK_KART_KAPAT__=yv;const xv=Object.freeze(Object.defineProperty({__proto__:null,packKartBaslat:Io,packKartBitti:GM,packKartDegistir:mv,packKartHata:Tr,packKartTamam:wr,packKartTest:gv,packKartlariKapat:yv},Symbol.toStringTag,{value:"Module"})),Np={fabric:'<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" clip-rule="evenodd" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path fill="none" stroke="currentColor" stroke-width="23" d="m820 761-85.6-87.6c-4.6-4.7-10.4-9.6-25.9 1-19.9 13.6-8.4 21.9-5.2 25.4 8.2 9 84.1 89 97.2 104 2.5 2.8-20.3-22.5-6.5-39.7 5.4-7 18-12 26-3 6.5 7.3 10.7 18-3.4 29.7-24.7 20.4-102 82.4-127 103-12.5 10.3-28.5 2.3-35.8-6-7.5-8.9-30.6-34.6-51.3-58.2-5.5-6.3-4.1-19.6 2.3-25 35-30.3 91.9-73.8 111.9-90.8" transform="matrix(.08671 0 0 .0867 -49.8 -56)"/></svg>',vanilla:'<svg viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z" clip-rule="evenodd"/></svg>',forge:'<svg xml:space="preserve" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5" clip-rule="evenodd" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path fill="none" stroke="currentColor" stroke-width="2" d="M2 7.5h8v-2h12v2s-7 3.4-7 6 3.1 3.1 3.1 3.1l.9 3.9H5l1-4.1s3.8.1 4-2.9c.2-2.7-6.5-.7-8-6Z"></path></svg>',neoforge:'<svg enable-background="new 0 0 24 24" version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m12 19.2v2m0-2v2"/><path d="m8.4 1.3c0.5 1.5 0.7 3 0.1 4.6-0.2 0.5-0.9 1.5-1.6 1.5m8.7-6.1c-0.5 1.5-0.7 3-0.1 4.6 0.2 0.6 0.9 1.5 1.6 1.5"/><path d="m3.6 15.8h-1.7m18.5 0h1.7"/><path d="m3.2 12.1h-1.7m19.3 0h1.8"/><path d="m8.1 12.7v1.6m7.8-1.6v1.6"/><path d="m10.8 18h1.2m0 1.2-1.2-1.2m2.4 0h-1.2m0 1.2 1.2-1.2"/><path d="m4 9.7c-0.5 1.2-0.8 2.4-0.8 3.7 0 3.1 2.9 6.3 5.3 8.2 0.9 0.7 2.2 1.1 3.4 1.1m0.1-17.8c-1.1 0-2.1 0.2-3.2 0.7m11.2 4.1c0.5 1.2 0.8 2.4 0.8 3.7 0 3.1-2.9 6.3-5.3 8.2-0.9 0.7-2.2 1.1-3.4 1.1m-0.1-17.8c1.1 0 2.1 0.2 3.2 0.7"/><path d="m4 9.7c-0.2-1.8-0.3-3.7 0.5-5.5s2.2-2.6 3.9-3m11.6 8.5c0.2-1.9 0.3-3.7-0.5-5.5s-2.2-2.6-3.9-3"/><path d="m12 21.2-2.4 0.4m2.4-0.4 2.4 0.4"/></g></svg>',quilt:'<svg xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" clip-rule="evenodd" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><defs><path id="qlt" fill="none" stroke="currentColor" stroke-width="65.6" d="M442.5 233.9c0-6.4-5.2-11.6-11.6-11.6h-197c-6.4 0-11.6 5.2-11.6 11.6v197c0 6.4 5.2 11.6 11.6 11.6h197c6.4 0 11.6-5.2 11.6-11.7v-197Z"></path></defs><path fill="none" d="M0 0h24v24H0z"></path><use xlink:href="#qlt" stroke-width="65.6" transform="matrix(.03053 0 0 .03046 -3.2 -3.2)"></use><use xlink:href="#qlt" stroke-width="65.6" transform="matrix(.03053 0 0 .03046 -3.2 7)"></use><use xlink:href="#qlt" stroke-width="65.6" transform="matrix(.03053 0 0 .03046 6.9 -3.2)"></use><path fill="none" stroke="currentColor" stroke-width="70.4" d="M442.5 234.8c0-7-5.6-12.5-12.5-12.5H234.7c-6.8 0-12.4 5.6-12.4 12.5V430c0 6.9 5.6 12.5 12.4 12.5H430c6.9 0 12.5-5.6 12.5-12.5V234.8Z" transform="rotate(45 3.5 24) scale(.02843 .02835)"></path></svg>'};function Md(i){return Np[i]||Np.vanilla}let Kn=null;function qM(i){const e=xt(i),t=i.toLowerCase();return t.endsWith(".mp4")||t.endsWith(".webm")?`<div class="inst-cover video-cover"><video src="${e}" autoplay loop muted playsinline disablepictureinpicture preload="metadata"></video></div>`:t.endsWith(".gif")?`<div class="inst-cover gif-cover"><img src="${e}" draggable="false" alt="" /></div>`:`<div class="inst-cover" style="background-image:url('${e}')"></div>`}function WM(i){const e=i.querySelectorAll(".video-cover video");if(!e.length)return;const t=new IntersectionObserver(n=>{for(const a of n){const s=a.target;a.isIntersecting?s.play().catch(()=>{}):s.pause()}},{threshold:.05});e.forEach(n=>t.observe(n))}function Op(i,e){return Promise.race([i.catch(()=>null),new Promise(t=>setTimeout(()=>t(null),e))])}function XM(i){let e;if(Hn.param&&Hn.param.includes("|")){const[t,n]=Hn.param.split("|");Hn.param=t,e=n}if(Hn.param&&le.instances.find(t=>t.id===Hn.param)){Kn=Hn.param,Hn.param=void 0,Eo(i,Kn,e);return}if(Kn&&le.instances.find(t=>t.id===Kn)){Eo(i,Kn,e);return}Jl(i)}function Jl(i){i.innerHTML=`
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
      </div>`,e.querySelector("#empty-new")?.addEventListener("click",()=>Hp());else{for(const t of le.instances){const a=t.icon&&(t.icon.includes("/")||t.icon.includes("\\"))?`<img src="${xt(t.icon)}" draggable="false" onerror="window.__iconFallback && window.__iconFallback(this,'mod-fallback','play')" />`:t.icon||"🔥",s=Je.activeId===t.id,r=hi(`
        <div class="inst-card card hover ${t.cover?"has-cover":""}" data-id="${t.id}" title="${t.name} — yönet">
          ${t.cover?qM(t.cover):""}
          <div class="inst-top">
            <div class="inst-icon">${a}</div>
            <div class="inst-info">
              <h3>${t.name}</h3>
              <div class="inst-meta">
                <span class="chip gray">${Sv(t.mod_loader)} ${t.mc_version}</span>
                ${s?'<span class="chip green">oynuyor</span>':""}
              </div>
            </div>
            ${lo(s?"warn":"ok","card-lamp")}
          </div>
          <div class="inst-stats tnum">
            <span title="Bellek">${t.ram_mb} MB</span>
            <span title="Son oynanış">Son: ${t.last_played?new Date(t.last_played).toLocaleDateString("tr-TR"):"hiç"}</span>
            <span title="Toplam süre">${pr(t.playtime_ms)}</span>
          </div>
          <div class="inst-actions">
            <button class="btn primary card-play" ${Je.activeId?"disabled":""}>
              ${Je.activeId?`${V("clock")} Açık`:`${V("play")} Oyna`}
            </button>
            ${s?`<button class="btn danger card-stop" title="Oyunu kapat">${V("stop")} Durdur</button>`:""}
            <button class="btn ghost card-manage">Yönet</button>
          </div>
        </div>
      `);r.addEventListener("click",async o=>{if(o.target.closest(".card-play")){if(!le.accounts.length)return Un();const{launchInstance:c}=await pt(async()=>{const{launchInstance:l}=await Promise.resolve().then(()=>Et);return{launchInstance:l}},void 0);c(t.id);return}if(o.target.closest(".card-stop")){try{await ie("cmd_kill_game")}catch{}const{refreshState:c}=await pt(async()=>{const{refreshState:l}=await Promise.resolve().then(()=>Et);return{refreshState:l}},void 0);await c(!0);return}Kn=t.id,Eo(i,t.id)}),e.appendChild(r)}gf(Array.from(e.querySelectorAll(".inst-card"))),WM(e)}i.querySelector("#btn-new")?.addEventListener("click",()=>Hp()),i.querySelector("#btn-import")?.addEventListener("click",()=>KM().catch(()=>{})),i.querySelector("#btn-export")?.addEventListener("click",()=>YM()),ZM()}async function KM(){const i=await ie("cmd_pick_pack_file");if(i){Io("Yerel paket kurulumu");try{const e=await ie("cmd_import_pack_file",{path:i}),{refreshState:t}=await pt(async()=>{const{refreshState:n}=await Promise.resolve().then(()=>Et);return{refreshState:n}},void 0);await t(),wr(),Y(`${e.name||"Paket"} kuruldu!`,"ok"),je("instances")}catch(e){Tr(String(e)),Y(`Paket içe aktarılamadı: ${e}`,"err")}}}async function YM(){const{openModal:i,toast:e}=await pt(async()=>{const{openModal:s,toast:r}=await Promise.resolve().then(()=>Et);return{openModal:s,toast:r}},void 0),{root:t,close:n}=i(`
    <h2>Paketi Paylaş</h2>
    <div class="sub">Hangi kurulumu paylaşmak istiyorsun?</div>
    <div class="share-picker">
      ${le.instances.map(s=>`
        <button class="share-pick ${s.id===(Kn||le.instances[0]?.id)?"sel":""}" data-id="${s.id}">
          <span class="sp-ik">${s.mod_loader==="fabric"?"🧵":s.mod_loader==="neoforge"?"⚙️":"📦"}</span>
          <span class="sp-ad">${s.name}</span>
          <span class="sp-meta">${s.mod_loader} ${s.mc_version}</span>
        </button>`).join("")}
    </div>
    <div style="display:flex; gap:8px; margin-top:16px">
      <button class="btn primary" id="sh-devam">Devam</button>
      <button class="btn ghost" id="sh-no">İptal</button>
    </div>
  `);t.querySelector("#sh-no")?.addEventListener("click",n);let a=Kn||le.instances[0]?.id||"";t.querySelectorAll(".share-pick").forEach(s=>{s.addEventListener("click",()=>{t.querySelectorAll(".share-pick").forEach(r=>r.classList.remove("sel")),s.classList.add("sel"),a=s.dataset.id})}),t.querySelector("#sh-devam")?.addEventListener("click",()=>{const s=le.instances.find(r=>r.id===a);if(!s){e("Bir kurulum seç","err");return}n(),bv(s.id,s.name)})}async function bv(i,e){const t=le.instances.find(c=>c.id===i);if(!t)return;const{openModal:n,toast:a}=await pt(async()=>{const{openModal:c,toast:l}=await Promise.resolve().then(()=>Et);return{openModal:c,toast:l}},void 0),{root:s,close:r}=n(`
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
  `);let o=!0;s.querySelectorAll(".share-mod").forEach(c=>{c.addEventListener("click",()=>{s.querySelectorAll(".share-mod").forEach(l=>l.classList.remove("sel")),c.classList.add("sel"),o=c.dataset.ultra==="1"})}),s.querySelector("#sh-no")?.addEventListener("click",r),s.querySelector("#sh-go")?.addEventListener("click",async()=>{const c={config:s.querySelector("#sh-config").checked,saves:s.querySelector("#sh-saves").checked,resourcepacks:s.querySelector("#sh-rp").checked,shaderpacks:s.querySelector("#sh-sp").checked,options:s.querySelector("#sh-opts").checked,ultraHafif:o};r(),Io(`${e||t.name} paketleniyor`,`aktar:${i}`);try{const l=await ie("cmd_export_yikimpack",{instanceId:i,secenek:c});wr(`aktar:${i}`),Ms("kurulum","Paylaşım paketi hazır",`${e||t.name}.yikimpack — ${l}`),a(`Paket hazır: ${l}`,"ok")}catch(l){Tr(String(l),`aktar:${i}`),Ms("sistem","Paket oluşturulamadı",String(l))}})}async function ZM(){const i=document.querySelector("#popular-strip");if(i)try{const e=await ie("cmd_repos_popular",{kind:"modpack",loader:""});i.innerHTML="";for(const t of e){const n=hi(`
        <div class="card hover popular-card">
          ${t.icon_url?`<img class="pc-icon" src="${t.icon_url}" loading="lazy" draggable="false" onerror="window.__iconFallback && window.__iconFallback(this,'pc-icon ph','box')" />`:`<div class="pc-icon ph">${V("box")}</div>`}
          <div class="pc-body">
            <div class="pc-title">${t.title}</div>
            <div class="pc-meta">${V("dl")} ${JM(t.downloads)}</div>
          </div>
        </div>
      `);n.addEventListener("click",()=>je("explore","kind:modpack")),i.appendChild(n)}}catch{i.innerHTML='<p class="pc-fail">Popüler paketler yüklenemedi.</p>'}}function JM(i){return i>=1e6?`${(i/1e6).toFixed(1)}M`:i>=1e3?`${(i/1e3).toFixed(0)}K`:String(i)}function Sv(i){return{vanilla:"Vanilla",fabric:"Fabric",forge:"Forge"}[i]||i}function Eo(i,e,t){const n=le.instances.find(l=>l.id===e);if(!n){Kn=null,Jl(i);return}const s=n.icon&&(n.icon.includes("/")||n.icon.includes("\\"))?`<img src="${xt(n.icon)}" draggable="false" onerror="window.__iconFallback && window.__iconFallback(this,'mod-fallback','play')" />`:n.icon||"🔥";i.innerHTML=`
    <div class="detail-header anim-fade-up">
      <button class="btn ghost back-btn" title="Geri">${V("back")}</button>
      <div class="inst-icon xl">${s}</div>
      <div>
        <h1>${n.name}</h1>
        <div class="inst-meta">
          <span class="chip gray">${Sv(n.mod_loader)} ${n.mc_version}</span>
          <span class="chip gray">${n.ram_mb} MB RAM</span>
          <span class="chip gray">${pr(n.playtime_ms)} oynanış</span>
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
  `,i.querySelector(".back-btn")?.addEventListener("click",()=>{Kn=null,Jl(i)}),i.querySelector("#detail-play")?.addEventListener("click",async()=>{if(!le.accounts.length)return Un();const{launchInstance:l}=await pt(async()=>{const{launchInstance:d}=await Promise.resolve().then(()=>Et);return{launchInstance:d}},void 0);l(n.id)}),i.querySelector("#detail-stop")?.addEventListener("click",async()=>{try{await ie("cmd_kill_game")}catch{}const{refreshState:l}=await pt(async()=>{const{refreshState:d}=await Promise.resolve().then(()=>Et);return{refreshState:d}},void 0);await l(!0)});const r=["mods","content","java","log","analytics","settings"];i.querySelectorAll(".tab").forEach(l=>{l.addEventListener("click",()=>{i.querySelectorAll(".tab").forEach(u=>u.classList.remove("active")),l.classList.add("active");const d=l.dataset.tab,f=i.querySelector("#tab-content");({mods:zf,content:jM,java:kv,log:eE,analytics:tE,settings:nE})[d](f,n)})});const o=t&&r.includes(t)?t:"mods";([...i.querySelectorAll(".tab")].find(l=>l.dataset.tab===o)??i.querySelectorAll(".tab")[0]).click()}let Zi="resourcepacks";const Fp=[{id:"resourcepacks",label:"Texturepackler",hint:"Kaynak paketleri (.zip)"},{id:"shaderpacks",label:"Shaderlar",hint:"Iris/OptiFine shader'ları (.zip)"},{id:"saves",label:"Dünyalar",hint:"Tek oyunculu dünyalar (klasör)"}];async function jM(i,e){const t=()=>Fp.find(a=>a.id===Zi);i.innerHTML='<div class="spinner" style="margin:40px auto"></div>';const n=async()=>{let a=[];try{a=await ie("cmd_list_content_files",{instanceId:e.id,kind:Zi})}catch{}const s=t();i.innerHTML=`
      <div class="mods-toolbar" style="flex-wrap:wrap">
        <div class="kind-toggle" id="content-kinds">
          ${Fp.map(o=>`<button class="kt ${o.id===Zi?"sel":""}" data-k="${o.id}">${o.label}</button>`).join("")}
        </div>
        <span style="flex:1"></span>
        <button class="btn ghost sm" id="content-open">${V("folder")} Klasörü Aç</button>
        <button class="btn ghost sm" id="content-search" title="Modrinth'te ara ve indir">${V("search")} Keşfet'te Ara</button>
        <button class="btn primary sm" id="content-add">${V("plus")} ${s.id==="saves"?"Dünya Ekle":"Paket Ekle"}</button>
      </div>
      <div class="mod-list" id="content-list"></div>
    `,i.querySelectorAll("#content-kinds .kt").forEach(o=>{o.addEventListener("click",()=>{Zi=o.dataset.k,n()})}),i.querySelector("#content-open")?.addEventListener("click",()=>ie("cmd_open_content_folder",{instanceId:e.id,kind:Zi}).catch(()=>{})),i.querySelector("#content-search")?.addEventListener("click",()=>{const o=Zi==="resourcepacks"?"resourcepack":Zi==="shaderpacks"?"shader":"world";Hn.param=`kind:${o}`,je("explore")}),i.querySelector("#content-add")?.addEventListener("click",async()=>{try{await ie("cmd_add_content_file",{instanceId:e.id,kind:Zi}),await n()}catch(o){Y(`Eklenemedi: ${o}`,"err")}});const r=i.querySelector("#content-list");if(!a.length){r.innerHTML=`<div class="card" style="text-align:center; padding:34px">
        <p>${s.hint}<br /><span style="color:var(--text-faint); font-size:12px">Henüz içerik yok — yukarıdan ekleyebilir ya da dosyayı bu sayfaya sürükleyip bırakabilirsin.</span></p></div>`;return}r.innerHTML="";for(const o of a){const c=o.icon?`<img alt="" draggable="false" class="row-face" width="40" height="40" src="${xt(o.icon)}" />`:`<div style="font-size:22px">${o.is_dir?"🌍":"📦"}</div>`,l=hi(`
        <div class="card mod-row" style="display:flex; align-items:center; gap:12px; padding:12px 14px">
          ${c}
          <div style="flex:1; min-width:0">
            <div style="font-weight:600; font-size:13px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap">${o.name}</div>
            <div style="color:var(--text-faint); font-size:11.5px">${o.is_dir?"dünya":Fo(o.size)}</div>
          </div>
          <button class="btn ghost sm" data-del="${o.name}" title="Sil">${V("trash")}</button>
        </div>
      `);l.querySelector("[data-del]")?.addEventListener("click",async d=>{const f=d.currentTarget.dataset.del;if(confirm(`"${f}" silinsin mi?`))try{await ie("cmd_delete_content_file",{instanceId:e.id,kind:Zi,name:f}),await n()}catch(u){Y(`Silinemedi: ${u}`,"err")}}),r.appendChild(l)}};await n()}async function zf(i,e){i.innerHTML='<div class="spinner" style="margin:40px auto"></div>';let t=[];try{t=await ie("cmd_list_mods",{instanceId:e.id})}catch{}let n={},a={};i.innerHTML=`
    <div class="mods-toolbar">
      <input class="input search-in" id="mod-search" placeholder="Mod ara…" />
      <button class="btn primary" id="mod-add">${V("plus")} Mod Ekle</button>
      <button class="btn upd-all" id="mod-upd-all" hidden>${V("refresh")} Tümünü Güncelle</button>
    </div>
    <div class="mod-list" id="mod-list"></div>
  `;const s=o=>{const c=t.filter(d=>d.filename.toLowerCase().includes(o.toLowerCase())),l=i.querySelector("#mod-list");l.innerHTML="",c.length||(l.innerHTML=`<div class="card" style="text-align:center; padding:34px">
        <p>${o?"Eşleşen mod yok.":"Bu kurulumda henüz mod yok."}</p></div>`);for(const d of c){const f=n[d.filename],u=f?`<img class="mod-logo" src="${f}" loading="lazy" draggable="false" onerror="window.__iconFallback && window.__iconFallback(this,'mod-logo ph','puzzle')" />`:`<span class="mod-logo ph">${V("puzzle")}</span>`,h=hi(`
        <div class="mod-row card">
          <span class="dot ${d.enabled?"on":"off"}"></span>
          ${u}
          <div class="mod-name">
            <div class="mn">${d.filename.replace(".jar","")}</div>
            <div class="ms">${Fo(d.size)}</div>
          </div>
          <div style="flex:1"></div>
          ${a[d.filename]?`<button class="btn primary sm upd-mod" data-fn="${d.filename}" data-url="${a[d.filename].url}" data-ad="${a[d.filename].yeni_ad}" title="Yeni sürüm: ${a[d.filename].surum}">Güncelle</button>`:""}
          <div class="switch ${d.enabled?"on":""}" data-fn="${d.filename}" data-en="${d.enabled}"></div>
          <button class="btn danger sm del-mod" data-fn="${d.filename}">Sil</button>
        </div>
      `);h.querySelector(".switch")?.addEventListener("click",async v=>{const m=v.currentTarget,p=m.dataset.fn,g=m.dataset.en!=="true";await ie("cmd_toggle_mod",{instanceId:e.id,filename:p,enabled:g}),d.enabled=g,s(i.querySelector("#mod-search").value)}),h.querySelector(".upd-mod")?.addEventListener("click",async v=>{const m=v.currentTarget;m.disabled=!0,m.textContent="Güncelleniyor…";try{await ie("cmd_update_mod",{instanceId:e.id,filename:m.dataset.fn,url:m.dataset.url,yeniAd:m.dataset.ad}),Y("Mod güncellendi"),await zf(i,e)}catch(p){m.disabled=!1,m.textContent="Güncelle",Y(`Güncellenemedi: ${p}`,"err")}}),h.querySelector(".del-mod")?.addEventListener("click",async()=>{await ie("cmd_delete_mod",{instanceId:e.id,filename:d.filename}),t=t.filter(v=>v.filename!==d.filename),s(i.querySelector("#mod-search").value),Y("Mod silindi")}),l.appendChild(h)}};if(i.querySelector("#mod-search")?.addEventListener("input",o=>{s(o.target.value)}),i.querySelector("#mod-add")?.addEventListener("click",()=>{je("explore",e.id)}),s(""),!t.length)return;const r=()=>i.querySelector("#mod-search")?.value??"";(async()=>{const o=await Op(ie("cmd_resolve_mod_icons",{filenames:t.map(l=>l.filename)}),8e3);o&&Object.keys(o).length&&(n=o,s(r()));const c=await Op(ie("cmd_check_mod_updates",{instanceId:e.id}),15e3);c&&(a=Object.fromEntries(c.map(l=>[l.filename,l])),s(r()),QM(a,e))})()}function QM(i,e){const t=()=>Object.keys(i).length,n=document.querySelector("#mod-upd-all");if(!n)return;const a=s=>`${V("refresh")} Tümünü Güncelle (${s})`;n.hidden=t()===0,!n.hidden&&(n.innerHTML=a(t()),n.onclick=async()=>{if(n.disabled)return;n.disabled=!0;const s=n.innerHTML;document.querySelectorAll(".upd-mod, #mod-add").forEach(o=>o.disabled=!0);let r=null;try{r=await xn("mod-updates-progress",o=>{const c=o?.payload??{};c.total&&(n.innerHTML=c.done>=c.total?`${V("refresh")} Bitiyor…`:`${V("refresh")} ${c.done+1}/${c.total} güncelleniyor…`)})??null}catch{}try{const o=await ie("cmd_update_all_mods",{instanceId:e.id});o?.bos?Y("Güncellenecek mod yok"):o?.hata>0?Y(`${o.basarili} mod güncellendi, ${o.hata} mod başarısız`,"err"):Y(`${o?.basarili??"?"} mod güncellendi ✓`);const c=document.querySelector("#inst-content");c&&await zf(c,e)}catch(o){Y(`Güncellenemedi: ${o}`,"err")}finally{try{r?.()}catch{}n.disabled=!1,n.innerHTML=s,document.querySelectorAll(".upd-mod, #mod-add").forEach(o=>o.disabled=!1)}})}async function kv(i,e){i.innerHTML='<div class="spinner" style="margin:40px auto"></div>';const t=await ie("cmd_list_java_arg_presets"),n=e.java_preset_id==="ozel",a=l=>l.replace(/&/g,"&amp;").replace(/</g,"&lt;"),s=e.custom_vm_args??(t.find(l=>l.id==="balanced")?.args??[]).join("\\n");i.innerHTML=`
    <div class="java-grid">
      <div class="card">
        <h3>${V("cpu")} Bellek</h3>
        <div class="ram-row">
          <input type="range" min="1024" max="16384" step="512" value="${e.ram_mb}" id="ram-range" style="flex:1" />
          <span class="chip" id="ram-val">${e.ram_mb} MB</span>
        </div>
        <p style="margin-top:8px; font-size:12px; color:var(--text-dim)">Sistem RAM'inin en fazla yarısını ayır. 4 GB çoğu modlu paket için yeterli.</p>
      </div>
      <div class="card">
        <h3>${V("args")} Java Argüman Presetleri</h3>
        <p style="margin-bottom:12px">FPS'e doğrudan etki eden JVM ayarları. Açıklamalarını okuyarak seç.</p>
        <div class="preset-list">
          ${t.map(l=>`
            <div class="preset-row card hover ${e.java_preset_id===l.id?"sel":""}" data-id="${l.id}">
              <div class="preset-head">
                <b>${l.name}</b>
                ${e.java_preset_id===l.id?'<span class="chip">aktif</span>':""}
                <span class="chip gray">${l.recommended_ram_mb} MB öneri</span>
              </div>
              <p>${l.description}</p>
              <details><summary>JVM bayraklarını göster</summary><pre>${l.args.join(`
`).replace(/\{ram_mb\}/g,String(e.ram_mb))}</pre></details>
            </div>`).join("")}
        </div>
      </div>
      <div class="card" id="ozel-card" ${n?"":'style="opacity:0.55"'}>
        <h3>${V("args")} Özel${n?' <span class="chip" style="margin-left:8px">aktif — launcher karışmaz</span>':' <span class="chip gray" style="margin-left:8px">"Özel" preset seçince aktif</span>'}</h3>
        <div class="ozel-grid">
          <label class="ozel-alan">
            <span style="font-size:12px; color:var(--text-dim); display:block; margin-bottom:6px">Chunk mesafesi (renderDistance)</span>
            <input class="input" type="number" min="2" max="32" value="${e.view_distance??12}" id="ozel-vd" ${n?"":"disabled"} />
          </label>
          <div class="ozel-alan">
            <span style="font-size:12px; color:var(--text-dim); display:block; margin-bottom:6px">JVM argümanları — boşluk veya her satıra bir bayrak; {ram_mb} = RAM sürgüsü</span>
            <textarea class="input" id="ozel-args" rows="7" spellcheck="false" style="width:100%; resize:vertical; font-family:var(--font-mono); font-size:11.5px" ${n?"":"disabled"}>${a(s)}</textarea>
          </div>
        </div>
        <div style="display:flex; gap:10px; justify-content:flex-end; margin-top:10px">
          <button class="btn ghost sm" id="ozel-sifirla" ${n?"":"disabled"}>Varsayılana dön</button>
          <button class="btn primary sm" id="ozel-kaydet" ${n?"":"disabled"}>Özel Ayarları Kaydet</button>
        </div>
      </div>
    </div>
  `;const r=i.querySelector("#ram-range");r.addEventListener("input",()=>{i.querySelector("#ram-val").textContent=`${r.value} MB`}),r.addEventListener("change",async()=>{await ie("cmd_set_instance_ram",{id:e.id,ramMb:parseInt(r.value)}),e.ram_mb=parseInt(r.value),Y("RAM güncellendi")}),i.querySelectorAll(".preset-row").forEach(l=>{const d=l.querySelector("details");d?.addEventListener("click",f=>f.stopPropagation()),d?.querySelector("summary")?.addEventListener("click",f=>f.stopPropagation()),l.addEventListener("click",async f=>{if(f.target.closest("details"))return;const u=l.dataset.id;await ie("cmd_set_instance_java_preset",{id:e.id,presetId:u}),e.java_preset_id=u;const h=new Set(Array.from(i.querySelectorAll(".preset-row details[open]")).map(v=>v.closest(".preset-row").dataset.id));kv(i,e),i.querySelectorAll(".preset-row").forEach(v=>{h.has(v.dataset.id)&&(v.querySelector("details").open=!0)}),Y("Preset seçildi")})}),i.querySelector("#ozel-kaydet")?.addEventListener("click",async()=>{const l=i.querySelector("#ozel-vd"),d=i.querySelector("#ozel-args"),f=l.value.trim(),u=f===""?null:Math.max(2,Math.min(32,parseInt(f)||12)),h=d.value.trim();await ie("cmd_set_instance_custom",{id:e.id,viewDistance:u,customVmArgs:h||null}),e.view_distance=u,e.custom_vm_args=h||null,Y("Özel ayarlar kaydedildi — bir sonraki açılışta geçerli")}),i.querySelector("#ozel-sifirla")?.addEventListener("click",()=>{const l=i.querySelector("#ozel-args");l.value=(t.find(d=>d.id==="balanced")?.args??[]).join(`
`)})}async function eE(i,e){i.innerHTML=`
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
  `;const t=i.querySelector("#live-log"),n=i.querySelector("#log-count"),a=i.querySelector("#log-file"),s=i.querySelector("#log-search");let r="live",o=0;const c=[];let l=[];const d=(y,T)=>{n.textContent=T!==void 0&&T!==y?`${T}/${y} satır`:`${y} satır`},f=y=>{const T=document.createElement("div");return T.textContent=y,y.includes("ERROR")||y.includes("Exception")?T.classList.add("err"):y.includes("WARN")&&T.classList.add("warn"),T},u=()=>{const y=s.value.trim().toLowerCase(),T=y?l.filter(b=>b.toLowerCase().includes(y)):l;if(t.innerHTML="",!T.length)t.innerHTML=`<div class="log-hint">${y?"Eşleşen satır yok.":"Log boş görünüyor."}</div>`;else{const b=document.createDocumentFragment();for(const S of T)b.appendChild(f(S));t.appendChild(b)}d(l.length,T.length)},h=()=>{if(r="live",l=[],t.innerHTML="",!c.length)t.innerHTML='<div class="log-hint">Oyun başlatıldığında loglar buraya canlı akar…</div>';else{const y=document.createDocumentFragment();for(const T of c)y.appendChild(f(T));t.appendChild(y),t.scrollTop=t.scrollHeight}d(o)},v=async y=>{r=y,t.innerHTML='<div class="log-hint">Yükleniyor…</div>';try{l=(await ie("cmd_read_log",{instanceId:e.id,fileId:y})).split(`
`),u(),t.scrollTop=0}catch(T){t.innerHTML=`<div class="log-hint">Log yüklenemedi: ${String(T)}</div>`}};let m=[];try{m=await ie("cmd_list_logs",{instanceId:e.id});const y=new Map;for(const T of m)y.has(T.date)||y.set(T.date,[]),y.get(T.date).push(T);for(const[T,b]of y){const S=document.createElement("optgroup");S.label=T;for(const E of b){const A=document.createElement("option");A.value=E.id;const x=E.label.startsWith("Oturum ")?"#"+(E.label.split("-").pop()||E.label):E.label;A.textContent=`${E.time!=="-"?E.time+" — ":""}${x} (${Fo(E.size)})`,S.appendChild(A)}a.appendChild(S)}}catch{}Je.activeId!==e.id&&m.length?(a.value=m[0].id,v(m[0].id)):h(),a.addEventListener("change",()=>{a.value==="live"?h():v(a.value)}),s.addEventListener("input",()=>{r!=="live"&&u()});const p=await xn("game-log",y=>{r!=="live"&&(a.value="live",h()),t.querySelector(".log-hint")&&(t.innerHTML=""),c.push(y.payload),o++,c.length>500&&c.shift(),t.appendChild(f(y.payload)),d(o),t.scrollTop=t.scrollHeight,t.children.length>500&&t.firstElementChild?.remove()}),g=new MutationObserver(()=>{document.body.contains(t)||(p(),g.disconnect())});g.observe(document.body,{childList:!0,subtree:!0})}async function tE(i,e){i.innerHTML='<div class="spinner" style="margin:40px auto"></div>';const n=(await ie("cmd_get_stats")).snapshot,a=n.per_instance_ms[e.id]||0,s=n.sessions?Math.round(a/n.total_playtime_ms*n.sessions):0;i.innerHTML=`
    <div class="stats-cards stagger">
      <div class="card stat-big"><div class="sv">${pr(a)}</div><div class="sl">Bu Kurulumda</div></div>
      <div class="card stat-big"><div class="sv">~${s}</div><div class="sl">Tahmini Oturum</div></div>
      <div class="card stat-big"><div class="sv">${e.last_played?new Date(e.last_played).toLocaleDateString("tr-TR"):"—"}</div><div class="sl">Son Giriş</div></div>
      <div class="card stat-big"><div class="sv">${e.created_at?new Date(e.created_at).toLocaleDateString("tr-TR"):"—"}</div><div class="sl">Kurulum Tarihi</div></div>
    </div>
    <div class="card" style="margin-top:18px">
      <h3>${V("globe")} Sunucu Geçmişi <span style="font-weight:400; color:var(--text-faint); font-size:11.5px">tüm kurulumlar</span></h3>
      ${n.servers.length?n.servers.slice(0,10).map((r,o)=>`
        <div class="server-row">
          <span class="rank">#${o+1}</span>
          <span class="host">${r.host}</span>
          <span class="chip gray">${r.visits} giriş</span>
          <span class="dur">${pr(r.total_ms)}</span>
        </div>`).join(""):'<p style="color:var(--text-dim)">Henüz sunucu geçmişi yok.</p>'}
    </div>
    <div class="card" style="margin-top:18px">
      <h3>${V("chart")} Günlük Dağılım <span style="font-weight:400; color:var(--text-faint); font-size:11.5px">son 14 gün</span></h3>
      <div class="barchart small">
        ${Bp(n.daily_ms).map(r=>`
          <div class="bar-col tooltip-host">
            <div class="bar" style="height:${Math.max(r.ms/Math.max(...Bp(n.daily_ms).map(o=>o.ms),1)*100,r.ms?5:2)}%"></div>
            <div class="bar-lbl">${r.label}</div>
            <div class="tooltip">${r.full} — ${pr(r.ms)}</div>
          </div>`).join("")}
      </div>
    </div>
  `}function Bp(i){const e=[],t=new Date;for(let n=13;n>=0;n--){const a=new Date(t.getFullYear(),t.getMonth(),t.getDate()-n),s=`${a.getFullYear()}-${String(a.getMonth()+1).padStart(2,"0")}-${String(a.getDate()).padStart(2,"0")}`;e.push({label:a.getDate()%3===0?String(a.getDate()):"",ms:i[s]||0,full:s})}return e}async function nE(i,e){const t=s=>s.includes("/")||s.includes("\\"),n=e.icon&&t(e.icon)?`<img src="${xt(e.icon)}" draggable="false" onerror="window.__iconFallback && window.__iconFallback(this,'mod-fallback','play')" />`:e.icon||"🔥";i.innerHTML=`
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
            ${e.cover?`<img class="cover-thumb" src="${xt(e.cover)}" onerror="this.style.visibility='hidden'" />`:'<span class="cover-thumb empty">—</span>'}
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
  `;const a=async()=>{const s=i.querySelector("#set-name").value.trim()||e.name,r=i.querySelector("#set-icon").value.trim();await ie("cmd_rename_instance",{id:e.id,name:s}),r&&await ie("cmd_set_instance_icon",{id:e.id,icon:r}),await pt(()=>Promise.resolve().then(()=>Et),void 0).then(o=>o.refreshState())};i.querySelector("#set-name")?.addEventListener("change",a),i.querySelector("#set-icon")?.addEventListener("change",a),i.querySelector("#set-icon")?.addEventListener("input",()=>{const s=i.querySelector("#set-icon").value.trim();s&&(i.querySelector("#icon-preview").textContent=s)}),i.querySelector("#pick-icon")?.addEventListener("click",async()=>{try{await ie("cmd_pick_instance_icon",{instanceId:e.id}),await pt(()=>Promise.resolve().then(()=>Et),void 0).then(s=>s.refreshState(!0)),Y("İkon güncellendi")}catch{}}),i.querySelector("#pick-cover")?.addEventListener("click",async()=>{try{await ie("cmd_pick_instance_cover",{instanceId:e.id}),await pt(()=>Promise.resolve().then(()=>Et),void 0).then(s=>s.refreshState(!0)),Y("Kapak fotoğrafı eklendi")}catch{}}),i.querySelector("#clear-cover")?.addEventListener("click",async()=>{await ie("cmd_set_instance_cover",{id:e.id,cover:null}),await pt(()=>Promise.resolve().then(()=>Et),void 0).then(s=>s.refreshState(!0)),Y("Kapak kaldırıldı")}),i.querySelector("#open-folder")?.addEventListener("click",()=>ie("cmd_open_instance_folder",{instanceId:e.id})),i.querySelector("#open-mods")?.addEventListener("click",()=>ie("cmd_open_mods_folder",{instanceId:e.id})),i.querySelector("#dup-inst")?.addEventListener("click",async()=>{await ie("cmd_duplicate_instance",{id:e.id}),await pt(()=>Promise.resolve().then(()=>Et),void 0).then(s=>s.refreshState()),Y("Kurulum kopyalandı"),Eo(i.parentElement,Kn)}),i.querySelector("#del-inst")?.addEventListener("click",async()=>{confirm(`"${e.name}" kurulumu ve TÜM dosyaları silinecek. Emin misin?`)&&(await ie("cmd_delete_instance",{id:e.id}),await pt(()=>Promise.resolve().then(()=>Et),void 0).then(s=>s.refreshState()),Kn=null,Jl(i.parentElement),Y("Kurulum silindi"))}),i.querySelector("#share-inst")?.addEventListener("click",()=>{bv(e.id,e.name)})}async function Hp(){const e=(await ie("cmd_list_versions")).all,t=await ie("cmd_list_java_arg_presets"),n=await ie("cmd_list_standard_mods"),{root:a,close:s}=(await pt(async()=>{const{openModal:l}=await Promise.resolve().then(()=>Et);return{openModal:l}},void 0)).openModal(`
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
        <div class="lc-icon">${Md("fabric")}</div><b>Fabric</b><span>Hafif, hızlı, modern — YIKIM çekirdeği dahil</span>
      </button>
      <button class="loader-card" data-l="vanilla">
        <div class="lc-icon">${Md("vanilla")}</div><b>Vanilla</b><span>Modsuz sade oyun</span>
      </button>
      <button class="loader-card" data-l="forge">
        <div class="lc-icon">${Md("forge")}</div><b>Forge</b><span>Mod paketleri &amp; klasik modlar — ilk oyun açılışında kurulur</span>
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
  `);let r="fabric",o=!0;a.querySelectorAll(".loader-card").forEach(l=>{l.addEventListener("click",()=>{l.classList.contains("disabled")||(a.querySelectorAll(".loader-card").forEach(d=>d.classList.remove("sel")),l.classList.add("sel"),r=l.dataset.l)})});const c=a.querySelector("#w-ram");c.addEventListener("input",()=>{a.querySelector("#w-ram-val").textContent=`${c.value} MB`}),a.querySelector("#w-std-switch")?.addEventListener("click",l=>{o=!o,l.currentTarget.classList.toggle("on",o)}),a.querySelector("#w-cancel")?.addEventListener("click",s),a.querySelector("#w-create")?.addEventListener("click",async()=>{const l=a.querySelector("#w-create");l.disabled=!0,l.innerHTML='<span class="spinner"></span> Oluşturuluyor…';const d=a.querySelector("#w-name").value.trim()||"Yeni Kurulum",f=a.querySelector("#w-version").value,u=a.querySelector("#w-preset").value;try{const h=await ie("cmd_create_instance",{instance:{name:d,mc_version:f,mod_loader:r,ram_mb:parseInt(c.value),java_preset_id:u,standard_mods:o&&r==="fabric"}});await pt(()=>Promise.resolve().then(()=>Et),void 0).then(m=>m.refreshState()),s(),Y(`"${d}" oluşturuldu`);const v=h.instance.id;if(Kn=v,le.instances.length){const m=document.querySelector("#content");Eo(m,v)}}catch(h){Y(String(h),"err"),l.disabled=!1,l.textContent="Kurulumu Oluştur"}})}function qr(i){return i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function $p(i){const e=i.trim();return/^https?:\/\//i.test(e)?e:/^\/\//.test(e)?`https:${e}`:""}function Ks(i){let e=qr(i);const t=[];return e=e.replace(/`([^`]+)`/g,(n,a)=>(t.push(a),`\0K${t.length-1}\0`)),e=e.replace(/!\[([^\]]*)\]\(([^)\s]+)(?:\s+&quot;[^&]*&quot;)?\)/g,(n,a,s)=>{const r=$p(s.replace(/&amp;/g,"&"));return r?`<img src="${qr(r)}" alt="${a}" loading="lazy" referrerpolicy="no-referrer">`:n}),e=e.replace(/\[([^\]]+)\]\(([^)\s]+)(?:\s+&quot;[^&]*&quot;)?\)/g,(n,a,s)=>{const r=$p(s.replace(/&amp;/g,"&"));return r?`<a href="${qr(r)}" data-ext="1">${a}</a>`:n}),e=e.replace(/(^|[\s(])(https?:\/\/[^\s<>"]+)/g,(n,a,s)=>`${a}<a href="${qr(s)}" data-ext="1">${s}</a>`),e=e.replace(/\*\*\*([^*]+)\*\*\*/g,"<b><i>$1</i></b>"),e=e.replace(/\*\*([^*]+)\*\*/g,"<b>$1</b>"),e=e.replace(/(^|[\s(])\*([^*\s][^*]*)\*/g,"$1<i>$2</i>"),e=e.replace(/(^|[\s(])_([^_\s][^_]*)_/g,"$1<i>$2</i>"),e=e.replace(/~~([^~]+)~~/g,"<del>$1</del>"),e=e.replace(/\u0000K(\d+)\u0000/g,(n,a)=>`<code>${t[+a]}</code>`),e}function iE(i){let e=i;return e=e.replace(/<img[^>]*src=["']([^"']+)["'][^>]*>/gi,(t,n)=>`

![resim](${n})

`),e=e.replace(/<a[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi,(t,n,a)=>`[${a.replace(/<[^>]+>/g,"")}](${n})`),e=e.replace(/<br\s*\/?>/gi,`
`),e=e.replace(/<\/(p|div|h[1-6]|li|tr)>/gi,`

`),e=e.replace(/<li[^>]*>/gi,"- "),e=e.replace(/<h([1-4])[^>]*>/gi,(t,n)=>`

${"#".repeat(+n)} `),e=e.replace(/<\/?(details|summary|center|table|tbody|thead|tr|td|th|span|font|u|b|i|strong|em|sup|sub|kbd|p|div|ul|ol|blockquote|figure|figcaption)[^>]*>/gi,`
`),e=e.replace(/<[^>]+>/g,""),e=e.replace(/&nbsp;/g," ").replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">"),e}function aE(i){if(!i)return"";let e=i.replace(/\r\n?/g,`
`);e=iE(e);const t=[];e=e.replace(/```[a-zA-Z0-9+-]*\n([\s\S]*?)```/g,(l,d)=>(t.push(d.replace(/\n$/,"")),`\0B${t.length-1}\0`));const n=e.split(`
`),a=[];let s=null,r=[];const o=()=>{r.length&&(a.push(`<p>${Ks(r.join(" "))}</p>`),r=[])},c=()=>{s&&(a.push(`</${s}>`),s=null)};for(const l of n){const f=l.trimEnd().trim();if(!f){o(),c();continue}const u=f.match(/^\u0000B(\d+)\u0000$/);if(u){o(),c(),a.push(`<pre><code>${qr(t[+u[1]])}</code></pre>`);continue}const h=f.match(/^(#{1,6})\s+(.*)$/);if(h){o(),c();const p=Math.min(6,h[1].length);a.push(`<h${p}>${Ks(h[2])}</h${p}>`);continue}if(/^([-*_])\1{2,}$/.test(f)){o(),c(),a.push("<hr>");continue}if(f.startsWith(">")){o(),c(),a.push(`<blockquote>${Ks(f.replace(/^>\s?/,""))}</blockquote>`);continue}const v=f.match(/^\d+[.)]\s+(.*)$/);if(v){o(),s!=="ol"&&(c(),a.push("<ol>"),s="ol"),a.push(`<li>${Ks(v[1])}</li>`);continue}const m=f.match(/^[-*+]\s+(.*)$/);if(m){o(),s!=="ul"&&(c(),a.push("<ul>"),s="ul"),a.push(`<li>${Ks(m[1])}</li>`);continue}if(f.includes("|")&&/^\|.*\|$/.test(f)){if(o(),c(),/^[|\-\s:]+$/.test(f))continue;a.push(`<p class="md-tr">${Ks(f.replace(/^\||\|$/g,"").split("|").join(" · "))}</p>`);continue}c(),r.push(f)}return o(),c(),a.join(`
`)}const Uf={mod:"Mod",modpack:"Mod Paketi",resourcepack:"Doku Paketi",shader:"Shader",world:"Dünya",datapack:"Datapack"};let da="mod",Ma="",Ed="",Sr="";const Mv=24;let jl=null,Pl=0,ao=!1,Ea=!1,pl=null,Wr=0,Gp=!1,Ql=null,In=null;function sE(i){In=i;let e=Hn.param;if(e?.startsWith("kind:")){const t=e.slice(5);Object.keys(Uf).includes(t)&&(da=t),e=void 0}if(Hn.param=void 0,Ql){Tv(Ql);return}Ev(!!e)}function Ev(i=!1){const e=In;e.innerHTML=`
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
        ${Object.entries(Uf).map(([s,r])=>`<button class="xp-tab ${da===s?"sel":""}" data-k="${s}">${r}</button>`).join("")}
      </div>

      <div class="xp-filters anim-fade-up">
        <label class="xp-field"><span>Oyun sürümü</span>
          <select class="input" id="exp-ver">
            <option value="">hepsi</option>
            ${le.featured_versions.map(s=>`<option>${s}</option>`).join("")}
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
  `,e.querySelectorAll(".xp-tab").forEach(s=>s.addEventListener("click",()=>{da=s.dataset.k,e.querySelectorAll(".xp-tab").forEach(r=>r.classList.remove("sel")),s.classList.add("sel"),Ma?Ys(Ma):Kr()}));const t=e.querySelector("#exp-q");let n;t.addEventListener("input",()=>{clearTimeout(n),n=setTimeout(()=>Ys(t.value.trim()),400)}),t.addEventListener("keydown",s=>{s.key==="Enter"&&Ys(t.value.trim())}),e.querySelector("#exp-go")?.addEventListener("click",()=>Ys(t.value.trim())),e.querySelector("#exp-ver")?.addEventListener("change",()=>{Ma?Ys(Ma):Kr()}),e.querySelector("#exp-loader")?.addEventListener("change",()=>{Ma?Ys(Ma):Kr()}),e.addEventListener("click",s=>{const r=s.target.closest("a[data-ext]");r&&(s.preventDefault(),Wa(r.href))}),pl?.disconnect(),pl=null,Gp||(document.addEventListener("scroll",Vp,!0),window.addEventListener("resize",Vp),Gp=!0);const a=e.querySelector("#exp-son");a&&"IntersectionObserver"in window&&(pl=new IntersectionObserver(s=>{s.some(r=>r.isIntersecting)&&bc()},{root:null,rootMargin:"600px 0px",threshold:0}),pl.observe(a)),Kr()}function rE(){return In?.querySelector("#exp-baslik")}function Xr(i){const e=In?.querySelector("#exp-son");e&&(e.innerHTML=i===null?'<div class="spinner"></div>':`<span>${i}</span>`,e.classList.toggle("bos",i!==null))}function wv(i,e){Wr++,jl=i,Pl=0,ao=!1,Ea=!1;const t=In?.querySelector("#exp-results");t&&(t.innerHTML="");const n=rE();n&&(n.textContent=e),Xr(null),bc()}function Vp(){if(!jl||Ea||ao)return;const i=In?.querySelector("#exp-son");if(!i)return;i.getBoundingClientRect().top<window.innerHeight+500&&bc()}async function bc(){if(ao||Ea||!jl)return;const i=Wr;ao=!0;const e=In?.querySelector("#exp-results");Xr(null);try{const t=await jl(Pl,Mv);if(i!==Wr)return;if(!t.length){Ea=!0,Xr(Pl===0?"Sonuç yok.":"Hepsi bu kadar.");return}const n=new Set(Array.from(e?.querySelectorAll(".xp-card")||[]).map(s=>s.dataset.id||""));let a=0;for(const s of t)n.has(`${s.source}:${s.id}`)||(e?.appendChild(lE(s)),a++);Pl+=t.length,a===0&&(Ea=!0),Xr(Ea?"Hepsi bu kadar.":null),setTimeout(()=>{const s=In?.querySelector("#exp-son");if(!s||a===0)return;const r=s.getBoundingClientRect();!Ea&&r.top<window.innerHeight+600&&bc()},60)}catch(t){if(i!==Wr)return;Ea=!0,Xr(`Yüklenemedi: ${String(t)}`)}finally{i===Wr&&(ao=!1)}}async function oE(i,e){const t=[[`project_type:${da}`]];Sr&&t.push([`categories:${Sr}`]);const n=`https://api.modrinth.com/v2/search?query=&index=downloads&facets=${encodeURIComponent(JSON.stringify(t))}&offset=${i}&limit=${e}`,a=await fetch(n,{headers:{Accept:"application/json"}});if(!a.ok)throw new Error(`Modrinth ${a.status}`);return((await a.json()).hits||[]).map(r=>({source:"modrinth",id:String(r.project_id||""),slug:String(r.slug||""),title:String(r.title||""),description:String(r.description||""),author:String(r.author||"Modrinth"),icon_url:String(r.icon_url||""),downloads:Number(r.downloads||0),kind:da,categories:Array.isArray(r.display_categories)?r.display_categories:[]}))}function Kr(){Ma="";const i=In?.querySelector("#exp-loader")?.value||"";Sr=["resourcepack","shader","world","datapack"].includes(da)?"":i,wv(async(e,t)=>{try{return await oE(e,t)}catch{const n=Math.floor(e/Mv);return(await ie("cmd_repos_popular",{kind:da,loader:Sr,page:n})).slice(0,t)}},"En çok indirilenler")}async function Ys(i){if(!In?.querySelector("#exp-results"))return;if(!i){Kr();return}Ma=i;const t=In.querySelector("#exp-ver"),n=In.querySelector("#exp-loader");Ed=t?.value||"";const a=n?.value||"";Sr=["resourcepack","shader","world","datapack"].includes(da)?"":a,wv(async(r,o)=>(await ie("cmd_repos_search",{query:i,kind:da,versions:Ed?[Ed]:[],loader:Sr,offset:r,limit:o})).results,`Arama: ${i}`)}function lE(i){const e=hi(`
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
  `);return e.addEventListener("click",()=>cE(i)),e}function Dl(i){return i>=1e9?`${(i/1e9).toFixed(1)}B`:i>=1e6?`${(i/1e6).toFixed(1)}M`:i>=1e3?`${(i/1e3).toFixed(0)}K`:String(i)}function cE(i){Ql=i,Tv(i),In?.scrollTo({top:0})}async function Tv(i){const e=In,t=["resourcepack","shader","world","datapack"].includes(i.kind),n=i.kind==="modpack";if(e.innerHTML=`
    <div class="page-wrap xp-wrap xp-detail">
      <button class="xp-back" id="xp-back">${V("back")} Keşfet'e dön</button>

      <div class="xp-hero anim-fade-up">
        <div class="xp-hero-icon">
          ${i.icon_url?`<img src="${i.icon_url}" draggable="false" onerror="window.__iconFallback && window.__iconFallback(this,'xp-hero-icon ph','puzzle')" />`:V(i.kind==="modpack"?"box":"puzzle")}
        </div>
        <div class="xp-hero-main">
          <div class="xp-hero-kicker">${Uf[i.kind]||i.kind} · ${i.source==="modrinth"?"Modrinth":"CurseForge"}</div>
          <h1 class="xp-hero-title">${i.title}</h1>
          <p class="xp-hero-sub">${i.description}</p>
          <div class="xp-hero-chips" id="xp-hero-chips">
            <span class="xp-tag">${V("dl")} ${Dl(i.downloads)}</span>
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
            `:le.instances.length?`
              <label class="xp-field"><span>Hedef kurulum</span>
                <select class="input" id="xp-inst">
                  ${le.instances.map(v=>`<option value="${v.id}">${v.name} · ${v.mod_loader} ${v.mc_version}</option>`).join("")}
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
  `,e.querySelector("#xp-back")?.addEventListener("click",()=>{Ql=null,Ev()}),e.querySelector("#xp-new-inst")?.addEventListener("click",()=>je("instances")),(async()=>{let v=null;try{v=await ie("cmd_repos_project",{source:i.source,projectId:i.id,kind:i.kind})}catch{}if(v){const m=e.querySelector("#xp-hero-chips");m&&(m.innerHTML=`
          <span class="xp-tag">${V("dl")} ${Dl(v.downloads||i.downloads)}</span>
          ${v.followers?`<span class="xp-tag">♥ ${Dl(v.followers)}</span>`:""}
          ${v.author?`<span class="xp-tag">${v.author}</span>`:""}
          ${v.license?`<span class="xp-tag">${v.license}</span>`:""}
          ${v.updated?`<span class="xp-tag">${v.updated.slice(0,10)}</span>`:""}
          ${(v.categories||[]).slice(0,5).map(g=>`<span class="xp-tag">${g}</span>`).join("")}
        `);const p=e.querySelector("#xp-body");if(v.body&&v.body.trim()?(p.innerHTML=aE(v.body),p.querySelectorAll("a[data-ext]").forEach(g=>g.addEventListener("click",y=>{y.preventDefault(),Wa(g.href)}))):p.innerHTML='<p class="xp-note">Bu proje için açıklama verisi yok.</p>',v.gallery?.length){const g=e.querySelector("#xp-gallery");e.querySelector("#xp-gallery-panel").hidden=!1,g.innerHTML=v.gallery.map(y=>`<button class="xp-shot" data-u="${y.url}"><img src="${y.url}" loading="lazy" referrerpolicy="no-referrer" alt="${y.title||""}" /></button>`).join(""),g.querySelectorAll(".xp-shot").forEach(y=>y.addEventListener("click",()=>fE(y.dataset.u)))}if(v.links?.length){const g=e.querySelector("#xp-links-panel");g.hidden=!1,e.querySelector("#xp-links").innerHTML=v.links.map(y=>`<button class="xp-link" data-u="${y.url}">${y.label} ${V("globe")}</button>`).join(""),e.querySelectorAll(".xp-link").forEach(y=>y.addEventListener("click",()=>Wa(y.dataset.u)))}}else e.querySelector("#xp-body").innerHTML='<p class="xp-note">Açıklama yüklenemedi — sürüm listesi kullanılabilir.</p>'})(),!n&&!le.instances.length)return;const a=e.querySelector("#xp-inst"),s=e.querySelector("#xp-mc"),r=e.querySelector("#xp-loader"),o=e.querySelector("#xp-vers");let c=[],l=8;const d=()=>n?null:le.instances.find(v=>v.id===a?.value)||le.instances[0],f=()=>{const v=d(),m=v?.mc_version||"",p=v?.mod_loader||"fabric";s&&([...s.options].some(g=>g.value===m)||s.appendChild(new Option(m,m)),s.value=m),r&&([...r.options].some(g=>g.value===p)||r.appendChild(new Option(p,p)),r.value=p),u()};a?.addEventListener("change",f),s?.addEventListener("change",()=>{l=8,u()}),r?.addEventListener("change",()=>{l=8,u()});function u(){const v=d(),m=n?"":s?.value||v?.mc_version||"",p=n||t?"":r?.value||v?.mod_loader||"",g=c.filter(E=>dE(E,m,p,t)),y=c.filter(E=>!g.includes(E)),T=[...g].sort((E,A)=>(A.date||"").localeCompare(E.date||"")),b=T.slice(0,l);if(!c.length){o.innerHTML='<p class="xp-note">Sürüm listesi boş.</p>';return}const S=T.length?[]:[...c].sort((E,A)=>(A.date||"").localeCompare(E.date||"")).slice(0,4);o.innerHTML=`
      ${T.length?b.map(E=>h(E,!0)).join(""):`
        <p class="xp-note">${m}${p?` · ${p}`:""} için uyumlu sürüm yok — en yeni sürümler aşağıda (uyumsuz).</p>
        ${S.map(E=>h(E,!1)).join("")}`}
      ${T.length>b.length?`<button class="btn ghost sm xp-more" id="xp-more">Daha eski sürümler (${T.length-b.length})</button>`:""}
      ${(()=>{const E=y.filter(A=>!S.includes(A));return E.length?`
        <details class="xp-others">
          <summary>Uyumsuz sürümler (${E.length})</summary>
          ${E.slice(0,25).map(A=>h(A,!1)).join("")}
        </details>`:""})()}
      ${v?`<p class="xp-note xp-note-sm">Hedef: <b>${v.name}</b> · ${v.mod_loader} ${v.mc_version}</p>`:""}
    `,o.querySelector("#xp-more")?.addEventListener("click",()=>{l+=12,u()}),o.querySelectorAll(".xp-ver-kur").forEach(E=>{E.addEventListener("click",()=>{const A=c.find(x=>x.id===E.dataset.id);A&&uE(i,A,a?.value||"",E)})})}function h(v,m){const p=v.files[0]?.size||0;return`
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
          ${p?`<span>${Fo(p)}</span>`:""}
        </div>
        <button class="btn ${m?"primary":"ghost"} sm xp-ver-kur" data-id="${v.id}">
          ${i.kind==="modpack"?"Kur":t?"İndir":"Kur"}
        </button>
      </div>
    `}try{c=await ie("cmd_repos_get_versions",{source:i.source,projectId:i.id,kind:i.kind,loader:"",gameVersion:""})}catch(v){o.innerHTML=`<p class="xp-note">Sürümler alınamadı: ${String(v)}</p>`;return}if(s){const v=new Set;for(const p of c)for(const g of p.game_versions||[])v.add(g);const m=[...v].sort((p,g)=>g.localeCompare(p,void 0,{numeric:!0}));s.innerHTML=m.map(p=>`<option value="${p}">${p}</option>`).join("")||'<option value="">—</option>'}if(r){const v=new Set;for(const p of c)for(const g of p.loaders||[])v.add(g);const m=["fabric","quilt","forge","neoforge","rift"].filter(p=>v.has(p));r.innerHTML=(m.length?m:[...v]).map(p=>`<option value="${p}">${p}</option>`).join("")||'<option value="">—</option>'}n?u():f()}function dE(i,e,t,n){if(!(!e||(i.game_versions||[]).includes(e)))return!1;if(n||!t)return!0;const s=(i.loaders||[]).map(o=>o.toLowerCase());if(!s.length)return!0;const r=t.toLowerCase();return!!(s.includes(r)||r==="quilt"&&s.includes("fabric")||r==="neoforge"&&s.includes("forge"))}async function uE(i,e,t,n){if(i.kind==="modpack"){await hE(i,e);return}if(!t){Y("Önce bir kurulum oluştur","err"),je("instances");return}const a=n.innerHTML;n.disabled=!0,n.innerHTML='<span class="spinner"></span>';try{["resourcepack","shader","world","datapack"].includes(i.kind)?await ie("cmd_repos_install_content",{instanceId:t,source:i.source,projectId:i.id,versionId:e.id,kind:i.kind}):await ie("cmd_repos_install",{instanceId:t,source:i.source,projectId:i.id,versionId:e.id}),Y({resourcepack:"Doku paketleri klasörüne indirildi",shader:"Shader klasörüne indirildi",world:"Dünyalar klasörüne indirildi",datapack:"Datapacks klasörüne indirildi"}[i.kind]||`Kuruldu: ${i.title}`),n.innerHTML=`${V("check")} Kuruldu`,n.classList.remove("primary"),n.classList.add("ghost"),setTimeout(()=>{n.innerHTML=a,n.classList.add("primary"),n.classList.remove("ghost"),n.disabled=!1},2200)}catch(s){Y(String(s),"err"),n.disabled=!1,n.innerHTML=a}}function fE(i){if(!/^https?:\/\//i.test(i))return;const{root:e,close:t}=mn(`
    <div class="xp-light">
      <img src="${i}" alt="" referrerpolicy="no-referrer" />
    </div>
    <div style="display:flex; justify-content:flex-end; margin-top:10px">
      <button class="btn ghost" id="lb-close">Kapat</button>
    </div>
  `);e.querySelector("#lb-close")?.addEventListener("click",t)}async function hE(i,e){Io(i.title);try{const t=await ie("cmd_install_pack_files",{source:i.source,projectId:i.id,versionId:e.id,packName:i.title,icon:null,iconUrl:i.icon_url||null});await pt(()=>Promise.resolve().then(()=>Et),void 0).then(n=>n.refreshState()),wr(),await pE(t),je("instances")}catch(t){Tr(String(t))}}async function pE(i){const e=await ie("cmd_list_java_arg_presets"),{root:t,close:n}=mn(`
    <h2>Özel Java argümanı eklensin mi?</h2>
    <div class="sub">Bu paket için FPS odaklı hazır ayarlardan birini seç. Sonra her zaman değiştirebilirsin.</div>
    <div class="preset-list">
      ${e.map(a=>`
        <div class="preset-row card hover" data-id="${a.id}">
          <div class="preset-head"><b>${a.name}</b><span class="chip gray">${a.recommended_ram_mb} MB öneri</span></div>
          <p>${a.description}</p>
        </div>`).join("")}
      <div class="preset-row card hover" data-id="__skip">
        <div class="preset-head"><b>Atla — varsayılan dengeli kalsın</b></div>
      </div>
    </div>
  `);t.querySelectorAll(".preset-row").forEach(a=>{a.addEventListener("click",async()=>{const s=a.dataset.id;s!=="__skip"&&(await ie("cmd_set_instance_java_preset",{id:i.id,presetId:s}),Y(`Preset: ${e.find(r=>r.id===s)?.name}`)),n()})})}function mE(i){i.classList.add("news-page"),i.innerHTML=`
    <div class="page-wrap">
    <div class="page-header anim-fade-up">
      <h1>Duyurular</h1>
      <p>YIKIM resmî duyuruları — yalnızca geliştiriciden, imza doğrulamalı.</p>
    </div>
    <div id="yikim-news"><div class="spinner" style="margin:40px auto"></div></div>
    </div>
  `,gE(i)}async function gE(i){const e=i.querySelector("#yikim-news");try{const t=await ie("cmd_list_yikim_news");if(!t.length){e.innerHTML=`
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
      </div>`).join(""),e.querySelectorAll(".yikim-announce").forEach(n=>{const a=n.dataset.link;n.querySelector(".yikim-link")?.addEventListener("click",s=>{s.stopPropagation(),a?.startsWith("https://")&&Wa(a).catch(()=>{})})})}catch{e.innerHTML=""}}const wd=[{id:"sahne",name:"Sahne",desc:"Imperial uslübü — ortada karakter, piksel yazı, sarı blok butonlar",bg:"#0d0e12",panel:"#17181f",line:"#2a2c3a",text:"#f2edde",dim:"#71695c",accent:"#ffd83d"},{id:"sokum",name:"Söküm Sahası",desc:"Sıcak işlik zemini, kızıl turuncu, keskin köşe",bg:"#14100c",panel:"#201a14",line:"#382c1f",text:"#f2e9dd",dim:"#7d7264",accent:"#ff5a24"},{id:"afis",name:"Afiş Provası",desc:"Baskı kâğıdı, sert mürekkep çizgi, ofset gölge",bg:"#f3ecdd",panel:"#faf6ea",line:"#16130c",text:"#16130c",dim:"#8a7f6b",accent:"#ff4d00"},{id:"sira",name:"Sıra Düzeni",desc:"Navigasyon ÜSTTE — yatay hap şerit, makine yeşili",bg:"#0e1112",panel:"#171b1c",line:"#2a3134",text:"#edf2e6",dim:"#6c7568",accent:"#a3e635"},{id:"rihtim",name:"Rıhtım",desc:"Yüzen cam dock altta ortada — gece lacivert, deniz feneri teal",bg:"#0a0f18",panel:"#111a29",line:"#22304a",text:"#e6effa",dim:"#5e6d85",accent:"#2fd6c3"}],vE={pano:"sahne",standart:"sahne",oda:"sahne",kumas:"afis",perde:"sahne",buz:"rihtim",skala:"sira"};function _E(i){const e=(t,n,a,s=1)=>`
    <div class="wc-row" style="top:${t}px; left:14px; width:${n}%; background:${i.dim}; opacity:${s}"></div>
    <div class="wc-lamp" style="top:${t-1}px; left:6px; background:${a}"></div>`;return`
    <span class="wc-preview" style="background:${i.bg}; border-bottom:1px solid ${i.line}">
      <span class="wc-bar" style="top:0; background:${i.panel}; border-bottom:1px solid ${i.line}"></span>
      <span class="wc-row" style="top:5px; left:8px; width:26px; height:3px; background:${i.accent}"></span>
      ${e(30,55,i.accent)}
      ${e(46,40,"#3ecf8e")}
      ${e(62,47,"#3ecf8e")}
    </span>`}function Yr(i){let e=le.config;const n={dark:"sahne",neon:"sahne",light:"afis",orange:"sahne",anons:"sahne",...vE}[e.theme]??e.theme,a=(e.tema_ozel||{})[n]||{},s=wd.find(m=>m.id===n)||wd[0],r=(a.accent||"").trim(),o=a.radius||"";try{const m=window.__TAURI__?.app;m?.getVersion&&m.getVersion().then(p=>{const g=i.querySelector("#app-version");g&&(g.textContent=`v${p} "Kıvılcım"`)}).catch(()=>{const p=i.querySelector("#app-version");p&&(p.textContent="v? — geliştirici sürümü")})}catch{}i.innerHTML=`
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
            <img class="acc-head" src="${Rc(m)}" ${Lc(m)} draggable="false" />
            <div class="acc-info">
              <b>${cc(m.id)}${m.name}</b>
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
        ${wd.map(m=>`
          <button class="world-card ${n===m.id?"sel":""}" data-t="${m.id}">
            ${_E(m)}
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
            <b>Bu dünyayı özelleştir — ${s.name}</b>
            <small>Sadece bu tema için geçerli. Renk ve köşe değişir, düzen aynı kalır.</small>
          </div>
          <button class="btn ghost sm" id="tema-sifirla" title="Bu dünyanın tüm özelleştirmelerini sil">${V("undo")} Sıfırla</button>
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
      ${ns("menu-anim","Animasyonlar oynasın",e.menu_animasyon!==!1)}
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
      ${ns("keep-open","Oyun açılınca launcher açık kalsın",e.keep_launcher_open)}
      ${ns("hide-on-launch","Oyun sırasında launcher'ı gizle (RAM tasarrufu)",e.hide_on_launch)}
      ${ns("show-news","Ana sayfada haberleri göster",e.show_news)}
      ${ns("stats-enabled","İstatistik toplansın (tamamen yerel)",e.stats_enabled)}
      ${ns("use-java25","Microsoft OpenJDK 25 kullan (mod paketleri için optimize)",e.use_java25!==!1)}
      ${ns("discord-rpc","Discord'da 'YIKIMLient ile oynuyor' göster (internet kullanmaz)",e.discord_rpc!==!1)}
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
  `,i.querySelector("#acc-add-ms")?.addEventListener("click",()=>Un()),i.querySelector("#acc-add-off")?.addEventListener("click",()=>Un());const c=i.querySelector("#guvenlik-karti");c&&ds(c),i.querySelectorAll(".acc-row").forEach(m=>{const p=m.dataset.id;m.querySelector(".acc-use")?.addEventListener("click",async g=>{g.stopPropagation(),await ie("cmd_select_account",{accountId:p}),await on(),Yr(i),Y("Hesap değiştirildi")}),m.querySelector(".acc-del")?.addEventListener("click",async g=>{g.stopPropagation(),confirm("Bu hesap kaldırılsın mı?")&&(await ie("cmd_remove_account",{accountId:p}),await on(),Yr(i),Y("Hesap kaldırıldı"))})}),i.querySelectorAll(".world-card").forEach(m=>m.addEventListener("click",async()=>{le.config.theme=m.dataset.t,Di(),await Mn(),Yr(i)})),i.querySelector("#skins-alani")?.addEventListener("click",()=>je("skins"));const l=()=>le.config.tema_ozel||={},d=async(m,p)=>{const g=l()[n]||={};g[m]=p,!g.accent&&!g.radius&&delete l()[n],Di(),await Mn()};i.querySelectorAll(".tema-renk").forEach(m=>m.addEventListener("click",async()=>{const p=m.dataset.renk||"";i.querySelectorAll(".tema-renk").forEach(g=>g.classList.toggle("aktif",g===m)),await d("accent",p),Y(p?"Vurgu rengi güncellendi":"Dünya rengine dönüldü")}));const f=i.querySelector("#tema-accent-pick");f?.addEventListener("input",()=>{le.config.tema_ozel||={},(le.config.tema_ozel[n]||={}).accent=f.value,Di()}),f?.addEventListener("change",async()=>{await Mn(),Y("Vurgu rengi kaydedildi")}),i.querySelectorAll("#tema-radius .seg-btn").forEach(m=>m.addEventListener("click",async()=>{i.querySelectorAll("#tema-radius .seg-btn").forEach(p=>p.classList.toggle("aktif",p===m)),await d("radius",m.dataset.r||"")})),i.querySelector("#tema-sifirla")?.addEventListener("click",async()=>{delete l()[n],Di(),await Mn(),Yr(i),Y("Bu dünyanın özelleştirmesi sıfırlandı")});const u=i.querySelector("#sas-izgara");if(u){const m=String(e.sahne_arka||"kiraz");u.innerHTML=wM.map(p=>`
      <button class="sas-kart${p.id===m?" sel":""}" data-art="${p.id}">
        <span class="sas-tuval"><canvas data-ciz="${p.id}"></canvas></span>
        <b>${p.ad}</b>
        <small>${p.etiket}</small>
      </button>`).join(""),u.querySelectorAll("canvas[data-ciz]").forEach(p=>{lv(p,p.dataset.ciz||"kiraz")}),u.querySelectorAll(".sas-kart").forEach(p=>p.addEventListener("click",async()=>{le.config.sahne_arka=p.dataset.art,u.querySelectorAll(".sas-kart").forEach(g=>g.classList.toggle("sel",g===p)),await Mn(),Y("Sahne arka planı değişti")}))}i.querySelector("#fx-particles")?.addEventListener("change",async m=>{le.config.fx_particles=m.target.value,Di(),await Mn()}),i.querySelector("#cursor-style")?.addEventListener("change",async m=>{le.config.cursor_style=m.target.value,Di(),await Mn()}),i.querySelector("#pick-java")?.addEventListener("click",async()=>{const m=await ie("cmd_pick_java");m&&(le.config.java_dir=m,await Mn(),i.querySelector("#java-path").textContent=m,Y("Java konumu kaydedildi"))}),i.querySelector("#clear-java")?.addEventListener("click",async()=>{le.config.java_dir=null,await Mn(),i.querySelector("#java-path").textContent="otomatik"}),is(i,"keep-open","keep_launcher_open"),is(i,"hide-on-launch","hide_on_launch"),is(i,"show-news","show_news"),is(i,"stats-enabled","stats_enabled"),is(i,"use-java25","use_java25"),is(i,"discord-rpc","discord_rpc"),is(i,"menu-anim","menu_animasyon"),i.querySelector("#menu-anim-hiz")?.addEventListener("change",async m=>{le.config.menu_animasyon_hiz=m.target.value,await Mn()});const h=()=>Av(i);i.querySelector("#anim-yenile")?.addEventListener("click",h),i.querySelector("#anim-ekle")?.addEventListener("click",async()=>{try{const m=await ie("cmd_pick_emote");m?.length&&(Y(`${m.length} animasyon eklendi`),h())}catch(m){Y(`Animasyon eklenemedi: ${m}`,"err")}}),h();const v=i.querySelector("#dlc-range");v.addEventListener("input",()=>i.querySelector("#dlc-val").textContent=v.value),v.addEventListener("change",async()=>{le.config.download_concurrency=parseInt(v.value),await Mn()}),i.querySelector("#check-upd")?.addEventListener("click",async()=>{Y("Güncelleme kontrol ediliyor…");try{const p=await(await pt(()=>import("./index-DSkUPpwd.js"),[])).check();if(p?.available){const{root:g,close:y}=mn(`
          <h2>Güncelleme Var</h2>
          <div class="sub">YIKIMLient <b>v${p.version}</b> hazır. Değişiklik notları:</div>
          <div style="margin:12px 0; max-height:160px; overflow-y:auto; user-select:text; color:var(--text-dim); font-size:12.5px; line-height:1.55">
            ${(p.body||"Değişiklik notu yok.").split(`
`).map(T=>`<div>${T}</div>`).join("")}
          </div>
          <div style="display:flex; gap:10px; justify-content:flex-end; margin-top:6px">
            <button class="btn ghost" id="upd-later">Sonra</button>
            <button class="btn primary" id="upd-go">İndir ve Kur</button>
          </div>
        `);g.querySelector("#upd-later")?.addEventListener("click",()=>y()),g.querySelector("#upd-go")?.addEventListener("click",async()=>{const T=g.querySelector("#upd-go");T.disabled=!0,T.textContent="İndiriliyor…";try{await p.downloadAndInstall(),Y("Güncelleme kuruldu — launcher yeniden başlıyor"),setTimeout(()=>{try{window.__TAURI__.process.exit(0)}catch{location.reload()}},900)}catch(b){T.disabled=!1,T.textContent="İndir ve Kur",Y(`Güncelleme başarısız: ${b}`,"err")}})}else Y("YIKIMLient güncel ✓")}catch(m){await SE(m)}}),i.querySelector("#upd-page")?.addEventListener("click",()=>{Wa(ec).catch(()=>Y(`Tarayıcı açılamadı — adresi elle aç: ${ec}`,"err"))}),i.querySelector("#open-dir")?.addEventListener("click",async()=>{const m=await ie("cmd_get_app_dir");e0(m).catch(()=>{})}),xE(i,e)}function yE(i){const e=bn();if(!e||e.kind!=="microsoft")return!1;const t=e.name.toLowerCase(),n=a=>(Array.isArray(a)?a:[]).some(s=>String(s).toLowerCase()===t);return n(i?.atolye_admin)||n(i?.atolye_izinli)}const Td=["#ffffff","#c9ced8","#5b6472","#12151c","#ff5a24","#ffd83d","#a3e635","#2fd6c3","#5b9dff","#c084fc","#ff4d8d","#8b3a1e"];function xE(i,e){const t=i.querySelector("#rozet-alani");if(t){if(yE(e)){qp(i,e);return}t.innerHTML="",ie("cmd_rozet_yetki").then(n=>{n?.izinli&&qp(i,e)}).catch(()=>{})}}function qp(i,e){const t=i.querySelector("#rozet-alani");if(!t)return;const n=bn(),a=!!n&&(e?.atolye_admin||[]).some(R=>String(R).toLowerCase()===n.name.toLowerCase());let s=new Array(64).fill("");const r=R=>/^#[0-9a-fA-F]{6}$/.test(String(R||""));let o=r(e.rozet_renk)?String(e.rozet_renk):"#ffd83d",c=(Array.isArray(e.rozet_renkler)?e.rozet_renkler:[]).filter(r).slice(0,24),l=!1;const d=[];let f=[...e.atolye_izinli||[]];t.innerHTML=`
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
    </div>`;const u=t.querySelector("#rozet-izgara"),h=t.querySelector("#rozet-onizleme"),v=t.querySelector("#rozet-cipler"),m=()=>{u.innerHTML=s.map((R,L)=>`<button class="rozet-hucre${R?" dolu":""}" data-i="${L}" style="--c:${R||"transparent"}"></button>`).join(""),h.innerHTML=s.map(R=>`<i style="--c:${R||"transparent"}"></i>`).join("")},p=R=>{const L=l?"":o;s[R]!==L&&(s[R]=L,m())};u.addEventListener("click",R=>{const L=R.target.closest(".rozet-hucre");L&&(d.push([...s]),d.length>40&&d.shift(),p(Number(L.dataset.i)))});const g=t.querySelector("#rozet-renkler"),y=t.querySelector("#rozet-hex"),T=t.querySelector("#rozet-hex-onizleme"),b=t.querySelector("#rozet-renk-sec"),S=()=>{const R=[...Td,...c];g.innerHTML=R.map((L,z)=>`<button class="rozet-renk${L.toLowerCase()===o.toLowerCase()?" secili":""}" data-c="${L}" style="--c:${L}" title="${L}" data-ozel="${z>=Td.length?1:0}"></button>`).join(""),g.querySelectorAll(".rozet-renk").forEach(L=>L.addEventListener("click",()=>{const z=L.dataset.c||"";l=!1,z&&E(z)}))},E=(R,L=!0)=>{o=R.toLowerCase(),l=!1,t.querySelector("#rozet-silgi")?.classList.remove("aktif"),y.value=o,T.style.setProperty("--c",o),b.value=o,S(),L&&(le.config.rozet_renk=o,Mn())},A=R=>{if(!r(R))return Y("Geçersiz renk — #rrggbb biçiminde yaz","err"),!1;const L=R.toLowerCase();return[...Td,...c].some(z=>z.toLowerCase()===L)||(c=[...c,L].slice(-24),le.config.rozet_renkler=[...c]),E(L),!0};b?.addEventListener("input",()=>{E(b.value,!1)}),b?.addEventListener("change",()=>A(b.value)),t.querySelector("#rozet-renk-kaydet")?.addEventListener("click",()=>{const R=y.value.trim(),L=R.startsWith("#")?R:`#${R}`;A(L)&&Y(`Renk paletine eklendi: ${L.toLowerCase()}`)}),y?.addEventListener("keydown",R=>{R.key==="Enter"&&t.querySelector("#rozet-renk-kaydet")?.dispatchEvent(new Event("click"))}),y?.addEventListener("input",()=>{const R=y.value.trim(),L=R.startsWith("#")?R:`#${R}`;T.style.setProperty("--c",r(L)?L:"transparent")}),t.querySelector("#rozet-silgi")?.addEventListener("click",()=>{l=!0,t.querySelectorAll(".rozet-renk").forEach(R=>R.classList.remove("aktif","secili")),t.querySelector("#rozet-silgi")?.classList.add("aktif")}),t.querySelector("#rozet-geri")?.addEventListener("click",()=>{const R=d.pop();R&&(s=R,m())}),t.querySelector("#rozet-temizle")?.addEventListener("click",()=>{d.push([...s]),s=new Array(64).fill(""),m()}),t.querySelector("#rozet-stok")?.addEventListener("click",()=>{d.push([...s]),s=bE(),m()}),t.querySelector("#rozet-kaydet")?.addEventListener("click",async()=>{const R=t.querySelector("#rozet-kaydet");R.disabled=!0,R.textContent="Kaydediliyor…";try{const L=await ie("cmd_rozet_ciz",{pikseller:s});Y(L?.yuklendi?`Rozet kaydedildi — ${L.kurulum} yere yazıldı ve diğer oyunculara yayınlandı`:`Rozet kaydedildi — ${L.kurulum} yere yazıldı (sunucuya ulaşılamadı: ${L?.hata||"ağ"})`)}catch(L){Y(`Rozet kaydedilemedi: ${L}`,"err")}finally{R.disabled=!1,R.textContent="Kaydet ve yayınla"}}),t.querySelector("#rozet-sil")?.addEventListener("click",async()=>{confirm("Rozet kaldırılsın mı? İsimlerin başında standart Y logosu görünür.")&&(await ie("cmd_rozet_sil"),s=new Array(64).fill(""),m(),Y("Rozet kaldırıldı"))});const x=()=>{v&&(v.innerHTML=f.length?f.map((R,L)=>`<span class="rozet-cip">${R}<button data-i="${L}" title="Kaldır">×</button></span>`).join(""):'<span class="set-sub" style="margin:0; font-size:11.5px">Henüz kimse eklenmedi.</span>',v.querySelectorAll("button").forEach(R=>R.addEventListener("click",()=>{f.splice(Number(R.dataset.i),1),w()})))},w=async()=>{le.config.atolye_izinli=[...f],await Mn(),x();try{(await ie("cmd_rozet_izinler",{isimler:f}))?.yuklendi||Y("Liste sunucuya gönderilemedi (yerel kaydedildi)","err")}catch{}};t.querySelector("#rozet-ekle")?.addEventListener("click",()=>{const R=t.querySelector("#rozet-isim"),L=R.value.trim();if(L){if(f.some(z=>z.toLowerCase()===L.toLowerCase())){Y("Bu isim zaten listede");return}f.push(L),R.value="",w(),Y(`${L} eklendi`)}}),t.querySelector("#rozet-isim")?.addEventListener("keydown",R=>{R.key==="Enter"&&t.querySelector("#rozet-ekle")?.click()}),m(),S(),x(),ie("cmd_rozet_oku").then(R=>{const L=R?.pikseller;Array.isArray(L)&&L.length===64&&(s=L,m())}).catch(()=>{})}function bE(){const i="#ffffff",e="#ff5a24";return[[i,"","","","",e,"",""],[i,"","","",e,e,"",""],["",i,"","","",e,"",""],["",i,"","",e,"","",""],["","",i,"",e,"","",""],["","",i,"",e,"","",""],["","",i,"","","","",""],["","",i,"","","","",""]].flat()}const ec="https://github.com/YKSAMI1/yikimlient/releases/latest";function Wp(i){return String(i??"").trim().replace(/^v/i,"")}async function SE(i){let e="",t="";try{const s=await ie("cmd_check_updates"),r=Wp(s?.current),o=Wp(s?.latest);o&&o!==r&&(e=o)}catch{}try{const s=await ie("cmd_upd_teshis"),r=Array.isArray(s?.platformlar)&&s.platformlar.length?s.platformlar.join(", "):"yok",o=[`HTTP ${s?.durum||"?"}`,`manifest ${s?.surum||"?"}`,`platform: ${r}`];s?.hata&&o.push(String(s.hata)),t=o.join(" · ")}catch{}const{root:n,close:a}=mn(`
    <h2>Güncelleme kontrolü başarısız</h2>
    <div class="sub">Otomatik güncelleyici bu sefer çalışmadı. Launcher'ı elle de güncelleyebilirsin — kurulum dosyası GitHub'daki sürüm sayfasında.</div>
    ${e?`<div style="margin-top:10px; font-size:13px; color:var(--text)">GitHub'da yeni sürüm duruyor: <b>v${e}</b></div>`:""}
    <div style="margin-top:10px; font-size:11.5px; line-height:1.5; color:var(--text-faint); user-select:text">${t?`Teşhis: ${t}`:`Hata: ${String(i??"bilinmiyor")}`}</div>
    <div style="display:flex; gap:10px; justify-content:flex-end; margin-top:14px">
      <button class="btn ghost" id="upd-kapat">Kapat</button>
      <button class="btn primary" id="upd-sayfa">${V("dl")} İndirme Sayfası</button>
    </div>
  `);n.querySelector("#upd-kapat")?.addEventListener("click",()=>a()),n.querySelector("#upd-sayfa")?.addEventListener("click",()=>{Wa(ec).catch(()=>Y(`Tarayıcı açılamadı — adresi elle aç: ${ec}`,"err"))})}async function Av(i){const e=i.querySelector("#anim-liste");if(e)try{const t=await ie("cmd_list_emotes");if(!t.length){e.innerHTML='<p class="set-sub" style="margin:10px 0 0">Henüz animasyon yok.</p>';return}e.innerHTML="";for(const n of t){const a=document.createElement("div");a.className="anim-satir",a.innerHTML=`
        <span class="anim-ad">${n.baslik||n.adi}</span>
        ${n.yerlesik?'<span class="chip gray">paket</span>':'<span class="chip">kendi</span>'}
        ${n.yerlesik?"":`<button class="btn danger sm anim-sil" title="Kaldır">${V("trash")}</button>`}`,a.querySelector(".anim-sil")?.addEventListener("click",async()=>{confirm(`"${n.baslik}" kaldırılsın mı?`)&&(await ie("cmd_delete_emote",{adi:n.adi}),Y("Animasyon kaldırıldı"),Av(i))}),e.appendChild(a)}}catch(t){e.innerHTML=`<p class="set-sub" style="margin:10px 0 0">Liste yüklenemedi: ${String(t)}</p>`}}function ns(i,e,t){return`
    <div class="row-between" style="margin-top:8px">
      <span>${e}</span>
      <div class="switch ${t?"on":""}" data-tid="${i}"></div>
    </div>`}function is(i,e,t){i.querySelector(`[data-tid="${e}"]`)?.addEventListener("click",async n=>{const a=n.currentTarget;a.classList.toggle("on"),le.config[t]=a.classList.contains("on"),await Mn()})}async function Mn(){await ie("cmd_save_settings",{config:le.config}),await on(),Di()}const kn=64,as=64,kE=40;class tc{w=kn;h=as;veri;gecmis=[];gelecek=[];constructor(e){this.veri=e?new Uint8ClampedArray(e):new Uint8ClampedArray(kn*as*4)}static bos(){return new tc}static rgba(e,t=0){return[e[t],e[t+1],e[t+2],e[t+3]]}kopya(){return new tc(this.veri)}piksel(e,t){if(e<0||t<0||e>=kn||t>=as)return[0,0,0,0];const n=(t*kn+e)*4;return[this.veri[n],this.veri[n+1],this.veri[n+2],this.veri[n+3]]}boya(e,t,n,a=1){const s=Math.max(1,Math.min(8,Math.floor(a))),r=e-Math.floor((s-1)/2),o=t-Math.floor((s-1)/2);for(let c=0;c<s;c++)for(let l=0;l<s;l++){const d=r+l,f=o+c;if(d<0||f<0||d>=kn||f>=as)continue;const u=(f*kn+d)*4;this.veri[u]=n[0],this.veri[u+1]=n[1],this.veri[u+2]=n[2],this.veri[u+3]=n[3]}}cizgi(e,t,n,a,s,r=1){let o=Math.round(e),c=Math.round(t);const l=Math.round(n),d=Math.round(a),f=Math.abs(l-o),u=-Math.abs(d-c),h=o<l?1:-1,v=c<d?1:-1;let m=f+u;for(;this.boya(o,c,s,r),!(o===l&&c===d);){const p=2*m;p>=u&&(m+=u,o+=h),p<=f&&(m+=f,c+=v)}}kova(e,t,n){if(e<0||t<0||e>=kn||t>=as)return;const a=this.piksel(e,t);if(Xp(a,n))return;const s=[t*kn+e],r=new Uint8Array(kn*as);for(;s.length;){const o=s.pop();if(r[o])continue;r[o]=1;const c=o%kn,l=Math.floor(o/kn);Xp(this.piksel(c,l),a)&&(this.boya(c,l,n),c>0&&s.push(o-1),c<kn-1&&s.push(o+1),l>0&&s.push(o-kn),l<as-1&&s.push(o+kn))}}damla(e,t){return this.piksel(e,t)}katmanBasla(){this.gecmis.push(new Uint8ClampedArray(this.veri)),this.gecmis.length>kE&&this.gecmis.shift(),this.gelecek.length=0}geriAl(){const e=this.gecmis.pop();return e?(this.gelecek.push(new Uint8ClampedArray(this.veri)),this.veri=e,!0):!1}ileriAl(){const e=this.gelecek.pop();return e?(this.gecmis.push(new Uint8ClampedArray(this.veri)),this.veri=e,!0):!1}geriVar(){return this.gecmis.length>0}ileriVar(){return this.gelecek.length>0}}function Xp(i,e){return i[0]===e[0]&&i[1]===e[1]&&i[2]===e[2]&&i[3]===e[3]}function ME(i){const e=new Uint8ClampedArray(16384);for(let t=0;t<32;t++){const n=t*64*4;e.set(i.subarray(n,n+64*4),n)}return e}function ai(i,e,t,n,a){return[{x:i+a,y:e,w:t,h:a},{x:i+a+t,y:e,w:t,h:a},{x:i,y:e+a,w:a,h:n},{x:i+a,y:e+a,w:t,h:n},{x:i+a+t,y:e+a,w:a,h:n},{x:i+a+t+a,y:e+a,w:t,h:n}]}const Kp=[{id:"kafa",ad:"Kafa",x:8,y:8,w:8,h:8,katman:"taban",dilimler:ai(0,0,8,8,8)},{id:"govde",ad:"Gövde",x:20,y:20,w:8,h:12,katman:"taban",dilimler:ai(16,16,8,12,4)},{id:"sag-kol",ad:"Sağ Kol",x:44,y:20,w:4,h:12,katman:"taban",dilimler:ai(40,16,4,12,4)},{id:"sol-kol",ad:"Sol Kol",x:36,y:52,w:4,h:12,katman:"taban",dilimler:ai(32,48,4,12,4)},{id:"sag-bacak",ad:"Sağ Bacak",x:4,y:20,w:4,h:12,katman:"taban",dilimler:ai(0,16,4,12,4)},{id:"sol-bacak",ad:"Sol Bacak",x:20,y:52,w:4,h:12,katman:"taban",dilimler:ai(16,48,4,12,4)},{id:"sapka",ad:"Şapka",x:40,y:8,w:8,h:8,katman:"ust",dilimler:ai(32,0,8,8,8)},{id:"ceket",ad:"Ceket",x:20,y:36,w:8,h:12,katman:"ust",dilimler:ai(16,32,8,12,4)},{id:"sag-kolluk",ad:"Sağ Kolluk",x:44,y:36,w:4,h:12,katman:"ust",dilimler:ai(40,32,4,12,4)},{id:"sol-kolluk",ad:"Sol Kolluk",x:52,y:52,w:4,h:12,katman:"ust",dilimler:ai(48,48,4,12,4)},{id:"sag-pantolon",ad:"Sağ Pantolon",x:4,y:36,w:4,h:12,katman:"ust",dilimler:ai(0,32,4,12,4)},{id:"sol-pantolon",ad:"Sol Pantolon",x:4,y:52,w:4,h:12,katman:"ust",dilimler:ai(0,48,4,12,4)}],hs={x:12,y:1,w:10,h:16},Vu={x:1,y:1,w:10,h:16},Rv=20,EE=36,wE=2,TE=4,AE=1;function RE(i){const e=i?3:4,t=AE+4,n=i?t-3:t-4,a=t+8;return[{ad:"sag-bacak",x:t,y:20,on:{x:4,y:20,w:4,h:12},yan:{x:8,y:20,w:4,h:12},yanGorunur:!1,ust:{x:4,y:36,w:4,h:12},ustYan:{x:8,y:36,w:4,h:12}},{ad:"sol-bacak",x:t+4,y:20,on:{x:20,y:52,w:4,h:12},yan:{x:24,y:52,w:4,h:12},yanGorunur:!0,ust:{x:4,y:52,w:4,h:12},ustYan:{x:8,y:52,w:4,h:12}},{ad:"govde",x:t,y:8,on:{x:20,y:20,w:8,h:12},yan:{x:28,y:20,w:4,h:12},yanGorunur:!1,ust:{x:20,y:36,w:8,h:12},ustYan:{x:28,y:36,w:4,h:12}},{ad:"sag-kol",x:n,y:8,on:{x:44,y:20,w:e,h:12},yan:{x:44+e,y:20,w:e,h:12},yanGorunur:!1,ust:{x:44,y:36,w:e,h:12},ustYan:{x:44+e,y:36,w:e,h:12}},{ad:"sol-kol",x:a,y:8,on:{x:36,y:52,w:e,h:12},yan:{x:36+e,y:52,w:e,h:12},yanGorunur:!0,ust:{x:52,y:52,w:e,h:12},ustYan:{x:52+e,y:52,w:e,h:12}},{ad:"kafa",x:t,y:0,on:{x:8,y:8,w:8,h:8},yan:{x:16,y:8,w:8,h:8},yanGorunur:!0,ust:{x:40,y:8,w:8,h:8},ustYan:{x:48,y:8,w:8,h:8}}]}function LE(i){const e=document.createElement("canvas");e.width=64,e.height=32;const t=e.getContext("2d",{willReadFrequently:!0});return t&&(t.imageSmoothingEnabled=!1,t.drawImage(i,0,0,64,32)),e}function CE(i){const e=i.getContext("2d",{willReadFrequently:!0});return e?(n=>{let a=0;try{const s=e.getImageData(n.x,n.y,n.w,n.h).data;for(let r=3;r<s.length;r+=4)s[r]>8&&a++}catch{return 0}return a})(hs)>0?hs:Vu:hs}const Ve=64,kt=32,zn=Ve*kt,Lv={pelerin:{u:0,v:0,w:10,h:16,d:1},kanat:{u:22,v:0,w:10,h:20,d:2}},Sc=[{id:"p-dis",ad:"Dış (görünen)",x:12,y:1,w:10,h:16},{id:"p-ic",ad:"İç (astar)",x:1,y:1,w:10,h:16},{id:"p-sol",ad:"Sol yan",x:11,y:1,w:1,h:16},{id:"p-sag",ad:"Sağ yan",x:0,y:1,w:1,h:16},{id:"p-ust",ad:"Üst",x:1,y:0,w:10,h:1},{id:"p-alt",ad:"Alt",x:11,y:0,w:10,h:1}],kc=[{id:"e-dis",ad:"Dış (görünen)",x:36,y:2,w:10,h:20},{id:"e-ic",ad:"İç",x:24,y:2,w:10,h:20},{id:"e-sol",ad:"Sol yan",x:34,y:2,w:2,h:20},{id:"e-sag",ad:"Sağ yan",x:22,y:2,w:2,h:20},{id:"e-ust",ad:"Üst",x:24,y:0,w:10,h:2},{id:"e-alt",ad:"Alt",x:34,y:0,w:10,h:2}];function Va(i){return(i==="pelerin"?Sc:kc)[0]}function Cv(i){return(i==="pelerin"?Sc:kc)[1]}function As(){return Array.from({length:zn},()=>"")}function di(i){return!i.some(e=>e!=="")}function Yp(){const i=document.createElement("canvas");return i.width=Ve,i.height=kt,i}function nc(i,e,t){const n=i.getContext("2d");if(n){n.imageSmoothingEnabled=!1,n.clearRect(0,0,Ve,kt),t&&t(n);for(let a=0;a<kt;a++)for(let s=0;s<Ve;s++){const r=e[a*Ve+s];r&&(n.fillStyle=r,n.fillRect(s,a,1,1))}}}function qu(i){const e=i.getImageData(0,0,Ve,kt).data,t=new Array(zn);for(let n=0;n<zn;n++){const a=e[n*4+3];t[n]=a<24?"":`#${Ad(e[n*4])}${Ad(e[n*4+1])}${Ad(e[n*4+2])}`}return t}const Ad=i=>i.toString(16).padStart(2,"0"),PE=["#46515d","#7f8f9f","#424c58","#4f5c6a","#4a5663","#5f6f80","#586675","#67788a","#77889a","#6d7f92"],DE="31,0,0;32,0,0;33,0,0;34,0,1;35,0,1;36,0,1;37,0,1;38,0,1;39,0,1;32,1,0;33,1,0;34,2,0;35,2,0;36,2,2;37,2,0;38,2,0;39,2,0;40,2,0;41,2,2;34,3,0;35,3,0;36,3,2;37,3,2;38,3,0;39,3,0;40,3,0;41,3,0;42,3,0;35,4,0;36,4,2;37,4,2;38,4,0;39,4,0;40,4,0;41,4,0;42,4,0;43,4,2;35,5,0;36,5,2;37,5,2;38,5,0;39,5,0;40,5,0;41,5,0;42,5,0;43,5,0;35,6,0;36,6,2;37,6,0;38,6,2;39,6,0;40,6,0;41,6,0;42,6,3;43,6,3;35,7,0;36,7,2;37,7,0;38,7,0;39,7,2;40,7,4;41,7,3;42,7,3;43,7,3;44,7,5;35,8,4;36,8,2;37,8,0;38,8,0;39,8,4;40,8,4;41,8,4;42,8,3;43,8,6;44,8,5;35,9,4;36,9,4;37,9,4;38,9,3;39,9,3;40,9,3;41,9,3;42,9,4;43,9,6;44,9,6;35,10,3;36,10,4;37,10,3;38,10,4;39,10,3;40,10,3;41,10,6;42,10,5;43,10,5;44,10,7;22,11,8;36,11,3;37,11,6;38,11,6;39,11,6;40,11,5;41,11,5;42,11,5;43,11,5;44,11,7;45,11,1;22,12,8;36,12,6;37,12,5;38,12,5;39,12,5;40,12,6;41,12,5;42,12,5;43,12,7;44,12,9;45,12,1;22,13,1;36,13,6;37,13,5;38,13,5;39,13,5;40,13,5;41,13,6;42,13,7;43,13,7;44,13,9;45,13,1;22,14,8;36,14,5;37,14,5;38,14,7;39,14,9;40,14,9;41,14,9;42,14,9;43,14,9;44,14,7;45,14,8;22,15,1;36,15,7;37,15,9;38,15,7;39,15,7;40,15,9;41,15,9;42,15,9;43,15,9;44,15,9;45,15,1;22,16,1;37,16,7;38,16,9;39,16,9;40,16,7;41,16,7;42,16,7;43,16,9;44,16,1;45,16,1;22,17,8;37,17,7;38,17,7;39,17,9;40,17,9;41,17,9;42,17,9;43,17,8;44,17,8;45,17,8;22,18,1;37,18,8;38,18,1;39,18,8;40,18,1;41,18,1;42,18,1;43,18,1;44,18,1;45,18,1;22,19,1;38,19,1;39,19,1;40,19,8;41,19,8;42,19,8;43,19,1;44,19,1;45,19,1;22,20,7;38,20,8;39,20,1;40,20,1;41,20,1;42,20,1;43,20,8;44,20,8;45,20,8;22,21,7;39,21,8;40,21,8;41,21,1;42,21,1;43,21,1;44,21,1;45,21,1";function Nf(){const i=As();for(const e of DE.split(";")){const[t,n,a]=e.split(",");i[Number(n)*Ve+Number(t)]=PE[Number(a)]}return i}const Of=TE,Pv=Rv*Of,Dv=EE*Of,IE=.3,Rd=2;let zE=null;function Zp(i,e,t,n,a,s,r){s<=0||r<=0||i.drawImage(e,t.x,t.y,t.w,t.h,n,a,s,r)}function Jp(i,e,t,n,a,s,r){if(s<=0||r<=0)return;const o=zE??=document.createElement("canvas"),c=Math.round(s),l=Math.round(r);o.width=c,o.height=l;const d=o.getContext("2d");d&&(d.imageSmoothingEnabled=!1,d.drawImage(e,t.x,t.y,t.w,t.h,0,0,c,l),d.globalCompositeOperation="source-atop",d.fillStyle=`rgba(0, 0, 0, ${IE})`,d.fillRect(0,0,c,l),d.globalCompositeOperation="source-over",i.drawImage(o,n,a))}function UE(i,e,t,n=Of){const a=n;i.imageSmoothingEnabled=!1,i.clearRect(0,0,i.canvas.width,i.canvas.height);const s=RE(t),r=wE*a;i.save(),i.fillStyle="rgba(0, 0, 0, 0.34)",i.beginPath(),i.ellipse(Rv/2*a,(31.3+Rd)*a,6.2*a,1*a,0,0,Math.PI*2),i.fill(),i.restore();for(const o of s){if(!o.yanGorunur)continue;const c=(o.x+o.on.w)*a,l=(o.y+Rd)*a;Jp(i,e,o.yan,c,l,r,o.on.h*a),o.ust&&o.ustYan&&Jp(i,e,o.ustYan,c,l,r,o.on.h*a)}for(const o of s){const c=o.x*a,l=(o.y+Rd)*a;Zp(i,e,o.on,c,l,o.on.w*a,o.on.h*a),o.ust&&Zp(i,e,o.ust,c,l,o.ust.w*a,o.ust.h*a)}}const NE=["#000000","#ffffff","#7f7f7f","#c0c0c0","#ff5555","#ff9f43","#ffe066","#4cd964","#34c3ff","#4b6bff","#a55eea","#ff6bcb","#7a4a2b","#c98b5e","#2b6b3a","#123a5e"],vn=64;function OE(i,e,t,n){const a=e.pafta;let s=e.slim,r=e.ad,o="kalem",c=1,l=[255,90,40,255],d=null,f=!1,u=8,h=!1,v=-1,m=-1;const p=document.createElement("div");p.className="sk-edit",p.innerHTML=`
    <header class="sk-edit-ust">
      <button class="btn ghost" id="ske-geri">${V("back")} Kapat</button>
      <div class="sk-edit-baslik">
        <b>Skin Düzenle</b>
        <span id="ske-ad-etiket">${Ld(r)}</span>
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
          <canvas id="ske-tuval" width="${vn*u}" height="${vn*u}"></canvas>
          <canvas id="ske-izgara" width="${vn*u}" height="${vn*u}"></canvas>
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
            ${NE.map(B=>`<button class="sk-palet-renk" data-renk="${B}" style="--c:${B}" title="${B}"></button>`).join("")}
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
                  ${Kp.filter(M=>M.katman===B).map(M=>`<button class="sk-bolge" data-bolge="${M.id}">${M.ad}</button>`).join("")}
                </div>`).join("")}
            </div>
          </div>
        </div>

        <div class="sk-blok">
          <div class="sk-blok-baslik">${V("check")} Kaydet</div>
          <div class="sk-edit-kayit">
            <label class="sk-edit-etiket">Skin adı</label>
            <input class="input" id="ske-ad" value="${Ld(r)}" maxlength="48" />
            <div class="sk-edit-kayit-btn">
              <button class="btn" id="ske-kitaplik">${V("folder")} Sadece Kitaplığa Kaydet</button>
              <button class="btn primary" id="ske-giy">${V("check")} Kaydet ve Giy</button>
            </div>
            <div class="sk-edit-uyari" id="ske-uyari"></div>
          </div>
        </div>
      </aside>
    </div>
  `,document.body.appendChild(p);const g=p.querySelector("#ske-tuval"),y=p.querySelector("#ske-izgara"),T=g.getContext("2d"),b=y.getContext("2d"),S=p.querySelector("#ske-onizleme"),E=document.createElement("canvas");E.width=vn,E.height=vn;const A=E.getContext("2d"),x=Dn();x.kur(S),x.tuvalDoku(E,s),(async()=>{try{const B=await ie("cmd_kozmetik_oku");B.pelerin_dosya&&B.pelerin_aktif!==!1&&await x.pelerin({url:xt(B.pelerin_dosya)})}catch{}})();function w(){const B=new ImageData(new Uint8ClampedArray(a.veri),vn,vn);A.putImageData(B,0,0),T.imageSmoothingEnabled=!1,T.clearRect(0,0,g.width,g.height),T.drawImage(E,0,0,g.width,g.height),R(),x.dokuTazele()}function R(){b.clearRect(0,0,y.width,y.height);const B=y.width/vn;if(u>=8){b.strokeStyle="rgba(255,255,255,0.09)",b.lineWidth=1;for(let M=1;M<vn;M++)b.beginPath(),b.moveTo(M*B,0),b.lineTo(M*B,y.height),b.stroke(),b.beginPath(),b.moveTo(0,M*B),b.lineTo(y.width,M*B),b.stroke()}if(d){b.strokeStyle="rgba(255,150,60,0.35)",b.lineWidth=1,b.setLineDash([]);for(const M of d.dilimler)M.x===d.x&&M.y===d.y||b.strokeRect(M.x*B+.5,M.y*B+.5,M.w*B-1,M.h*B-1);if(b.strokeStyle="rgba(255,150,60,0.95)",b.lineWidth=2,b.setLineDash([6,4]),b.strokeRect(d.x*B+1,d.y*B+1,d.w*B-2,d.h*B-2),b.setLineDash([]),f){b.fillStyle="rgba(0,0,0,0.55)",b.beginPath(),b.rect(0,0,y.width,y.height);for(const M of d.dilimler)b.rect(M.x*B,M.y*B,M.w*B,M.h*B);b.fill("evenodd")}}}function L(B){const M=g.getBoundingClientRect(),_=Math.floor((B.clientX-M.left)/M.width*vn),O=Math.floor((B.clientY-M.top)/M.height*vn);return[Math.max(0,Math.min(vn-1,_)),Math.max(0,Math.min(vn-1,O))]}function z(){return o==="silgi"?[0,0,0,0]:l}g.addEventListener("pointerdown",B=>{if(B.button!==0)return;const[M,_]=L(B);if(h=!0,v=M,m=_,g.setPointerCapture(B.pointerId),o==="damla"){l=a.damla(M,_),K(l,!0);return}a.katmanBasla(),o==="kova"?a.kova(M,_,z()):a.boya(M,_,z(),c),w()}),g.addEventListener("pointermove",B=>{if(!h)return;const[M,_]=L(B);M===v&&_===m||((o==="kalem"||o==="silgi")&&(a.cizgi(v,m,M,_,z(),c),w()),v=M,m=_)});const F=()=>{h=!1,v=-1,m=-1};g.addEventListener("pointerup",F),g.addEventListener("pointercancel",F);const C="yikim:renk:son";function H(){try{const B=JSON.parse(localStorage.getItem(C)||"[]");return Array.isArray(B)?B.filter(M=>typeof M=="string"&&/^#[0-9a-fA-F]{6}$/.test(M)).slice(0,12):[]}catch{return[]}}function D(B){const M=p.querySelector("#ske-son");M&&(M.innerHTML=H().map(_=>`<button class="kz-renk${_.toLowerCase()===B?.toLowerCase()?" aktif":""}" data-renk="${_}" style="background:${_}" title="${_}" aria-label="${_}"></button>`).join("")||'<span class="sk-ipucu-kucuk">Henüz renk yok — paletten seç.</span>')}function P(B){const M=B.toLowerCase(),_=[M,...H().filter(O=>O.toLowerCase()!==M)].slice(0,12);try{localStorage.setItem(C,JSON.stringify(_))}catch{}D(M)}function K(B,M=!1){l=B;const _=jp(B);p.querySelector("#ske-renk").value=_,p.querySelector("#ske-renk-hex").value=_,p.querySelectorAll(".sk-palet-renk").forEach(O=>{O.classList.toggle("aktif",O.dataset.renk?.toLowerCase()===_.toLowerCase())}),D(_),M&&P(_)}p.querySelector("#ske-renk").addEventListener("input",B=>{K(ml(B.target.value))}),p.querySelector("#ske-renk").addEventListener("change",()=>{P(jp(l))}),p.querySelector("#ske-renk-hex").addEventListener("change",B=>{const M=B.target.value.trim();/^#[0-9a-fA-F]{6}$/.test(M)&&K(ml(M),!0)}),p.querySelector("#ske-palet")?.addEventListener("click",B=>{const M=B.target.closest(".sk-palet-renk");M?.dataset.renk&&K(ml(M.dataset.renk),!0)}),p.querySelector("#ske-son")?.addEventListener("click",B=>{const M=B.target.closest(".kz-renk");M?.dataset.renk&&K(ml(M.dataset.renk),!0)}),p.querySelectorAll(".sk-arac[data-arac]").forEach(B=>{B.addEventListener("click",()=>{o=B.dataset.arac,p.querySelectorAll(".sk-arac[data-arac]").forEach(M=>M.classList.remove("aktif")),B.classList.add("aktif")})}),p.querySelectorAll("[data-kalinlik]").forEach(B=>{B.addEventListener("click",()=>{c=Number(B.dataset.kalinlik),p.querySelectorAll("[data-kalinlik]").forEach(M=>M.classList.remove("aktif")),B.classList.add("aktif")})}),p.querySelectorAll("[data-zum]").forEach(B=>{B.addEventListener("click",()=>{u=Number(B.dataset.zum),g.width=g.height=y.width=y.height=vn*u,p.querySelectorAll("[data-zum]").forEach(M=>M.classList.remove("aktif")),B.classList.add("aktif"),w()})}),p.querySelectorAll("[data-slim]").forEach(B=>{B.addEventListener("click",()=>{s=B.dataset.slim==="1",p.querySelectorAll("[data-slim]").forEach(M=>M.classList.remove("aktif")),B.classList.add("aktif"),x.tuvalDoku(E,s),Ge(s?"Slim modelde kollar 1 px daha ince — kol bölgesi kayabilir.":"")})});let $=!1,Q="ust",te=!1,ue=!1;const ke=p.querySelector("#ske-3d"),Ne=p.querySelector("#ske-izgara3d"),De=p.querySelector("#ske-parca"),He=p.querySelector("#ske-3d-tuval"),J=p.querySelector(".sk-edit-onizleme"),ae=p.querySelector(".sk-edit-zum"),fe={kafa:!0,govde:!0,kollar:!0,bacaklar:!0,kaplama:!0,kozmetik:!0},ze=()=>{x.parcaGoster("kafa",fe.kafa),x.parcaGoster("govde",fe.govde),x.parcaGoster("kollar",fe.kollar),x.parcaGoster("bacaklar",fe.bacaklar),x.kaplamaGoster(fe.kaplama),x.kozmetikGoster(fe.kozmetik),Q=fe.kaplama?"ust":"taban";const B=p.querySelector("#ske-3d-ipucu");B&&(B.textContent=fe.kaplama?"Overlay açık — boyama overlay katmanına gider.":"Overlay kapalı — boyama skin (taban) yüzeyine gider.")},be=B=>{$=B,te=!1,x.etkilesimKapali=B,ue=B,Ne?.classList.toggle("aktif",ue),g.hidden=B,y.hidden=B,He.hidden=!B,J&&(J.hidden=B),De&&(De.hidden=!B),ae&&(ae.style.display=B?"none":""),ke?.classList.toggle("aktif",B),ke&&(ke.innerHTML=`${V("box")} ${B?"2D'ye dön":"3D Çiz"}`),requestAnimationFrame(()=>{B?(x.kur(He),x.bakisaAyarla(.35,.04),x.tuvalDoku(E,s),ze(),x.izgaraGoster(ue,!0),Ge("3D çizim: sol tık boya · orta/sağ tık döndür · tekerlek yakınlaş · Skin/Overlay katmanı ve parçalar üstteki düğmelerden aç/kapat.")):(x.kur(S),x.tuvalDoku(E,s),ze(),x.izgaraGoster(!1,!0),Ge(""))})};ke?.addEventListener("click",()=>be(!$)),Ne?.addEventListener("click",()=>{ue=!ue,Ne.classList.toggle("aktif",ue),x.izgaraGoster(ue,!0),Ge(ue?"Izgara açık — piksel sınırları karakterin üstünde görünür.":"Izgara kapalı.")}),p.querySelectorAll("[data-zum3d]").forEach(B=>{B.addEventListener("click",()=>{const M=Number(B.dataset.zum3d);M===0?x.zoomAyarla(2.75):x.zoomAyarla(x.zoomAl()*(M<0?1.18:.85))})}),p.querySelectorAll("[data-parca]").forEach(B=>{B.addEventListener("click",()=>{const M=B.dataset.parca;fe[M]=!fe[M],B.classList.toggle("aktif",fe[M]),ze()})});const Fe=(B,M)=>{const _=x.atlasNoktasi(B,Q);_&&(M&&a.katmanBasla(),a.boya(_.x,_.y,z(),c),w())};He.addEventListener("contextmenu",B=>{$&&B.preventDefault()}),He.addEventListener("pointerdown",B=>{if($&&!(B.pointerType==="mouse"&&B.button!==0)){te=!0;try{He.setPointerCapture(B.pointerId)}catch{}Fe(B,!0)}}),He.addEventListener("pointermove",B=>{$&&te&&Fe(B,!1)});const gt=()=>{te=!1};He.addEventListener("pointerup",gt),He.addEventListener("pointercancel",gt),p.querySelector("#ske-bolgeler")?.addEventListener("click",B=>{const M=B.target.closest("[data-bolge]");M?.dataset.bolge&&(d=Kp.find(_=>_.id===M.dataset.bolge)??null,p.querySelectorAll("[data-bolge]").forEach(_=>_.classList.remove("aktif")),M.classList.add("aktif"),R())}),p.querySelector("#ske-sadece").addEventListener("change",B=>{f=B.target.checked,R()});const Be=()=>{a.geriAl()&&w()},Xe=()=>{a.ileriAl()&&w()};p.querySelector("#ske-geri-al")?.addEventListener("click",Be),p.querySelector("#ske-ileri-al")?.addEventListener("click",Xe);const st=B=>{!document.body.contains(p)||!(B.ctrlKey||B.metaKey)||(B.key.toLowerCase()==="z"?(B.preventDefault(),B.shiftKey?Xe():Be()):B.key.toLowerCase()==="s"&&(B.preventDefault(),It(!0)))};window.addEventListener("keydown",st);function Ge(B){const M=p.querySelector("#ske-uyari");M.textContent=B}function ft(){return new Promise(B=>{E.toBlob(async M=>{if(!M)return B([]);const _=new Uint8Array(await M.arrayBuffer());B(Array.from(_))},"image/png")})}async function It(B){if(r=p.querySelector("#ske-ad").value.trim()||r,r||(r="Skin"),B&&!await FE("Skini giy",`<b>${Ld(r)}</b> Mojang hesabına yazılacak ve sunucularda görünecek. Onaylıyor musun?`,"Giy"))return;const _=await ft();if(!_.length){Ge("PNG üretilemedi.");return}const O=p.querySelector(B?"#ske-giy":"#ske-kitaplik");O.disabled=!0,Ge(B?"Mojang hesabına yazılıyor…":"Kitaplığa kaydediliyor…");try{await t({veri:_,slim:s,ad:r},B),Ge(""),qt()}catch(G){Ge(String(G)),O.disabled=!1}}p.querySelector("#ske-kitaplik")?.addEventListener("click",()=>void It(!1)),p.querySelector("#ske-giy")?.addEventListener("click",()=>void It(!0)),p.querySelector("#ske-disa")?.addEventListener("click",async()=>{const B=await ft(),M=p.querySelector("#ske-ad");try{const{invoke:_}=await pt(async()=>{const{invoke:G}=await Promise.resolve().then(()=>Et);return{invoke:G}},void 0),O=await _("cmd_skin_disa_aktar",{ad:M.value.trim()||"skin",veri:B});Y(`Dışa aktarıldı: ${O}`)}catch(_){Y(String(_),"err")}});const Vt=document.createElement("button");Vt.className="btn ghost sk-dosya-btn",Vt.innerHTML=`${V("image")} Dosya`;const ct=document.createElement("input");ct.type="file",ct.accept="image/png",ct.style.display="none",Vt.addEventListener("click",()=>ct.click()),ct.addEventListener("change",async()=>{const B=ct.files?.[0];B&&await N(B),ct.value=""}),p.querySelector("#ske-geri").after(Vt),p.appendChild(ct);function zt(){return new Promise(B=>{const{root:M,close:_}=mn(`
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
        </div>`);let O=!1;const G=j=>{O||(O=!0,_(),B(j))};M.querySelector("#se-wide")?.addEventListener("click",()=>G(!1)),M.querySelector("#se-slim")?.addEventListener("click",()=>G(!0)),M.querySelector("#se-iptal")?.addEventListener("click",()=>G(null))})}async function N(B){try{const M=URL.createObjectURL(B),_=await new Promise((de,ee)=>{const ne=new Image;ne.onload=()=>de(ne),ne.onerror=()=>ee(new Error("görsel okunamadı")),ne.src=M}),O=document.createElement("canvas");O.width=_.width,O.height=_.height;const G=O.getContext("2d");G.drawImage(_,0,0),URL.revokeObjectURL(M);const j=G.getImageData(0,0,_.width,_.height);if(!(_.width===64&&(_.height===64||_.height===32))){Y(`Skin 64×64 veya 64×32 olmalı (bu dosya ${_.width}×${_.height})`,"err");return}const ce=await zt();if(ce===null)return;s=ce,p.querySelectorAll("[data-slim]").forEach(de=>{de.classList.toggle("aktif",de.dataset.slim===(s?"1":"0"))}),a.katmanBasla(),_.height===64?a.veri.set(j.data):a.veri.set(ME(j.data)),w(),x.tuvalDoku(E,s)}catch(M){Y(String(M),"err")}}const qt=()=>{window.removeEventListener("keydown",st),p.remove();try{x.kapati()}catch{}n()};p.querySelector("#ske-geri")?.addEventListener("click",qt),p.querySelector("#ske-kaydet")?.addEventListener("click",()=>{const B=p.querySelector(".sk-edit-kayit");B.scrollIntoView({behavior:"smooth",block:"center"}),B.querySelector("#ske-ad").focus()}),K(l),w()}function jp(i){const e=t=>t.toString(16).padStart(2,"0");return`#${e(i[0])}${e(i[1])}${e(i[2])}`}function ml(i){const e=i.replace("#","");return[parseInt(e.slice(0,2),16)||0,parseInt(e.slice(2,4),16)||0,parseInt(e.slice(4,6),16)||0,255]}function Ld(i){return i.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function FE(i,e,t){return new Promise(n=>{const{root:a,close:s}=mn(`
      <h2>${i}</h2>
      <div class="sub" style="margin-bottom:16px">${e}</div>
      <div style="display:flex; gap:10px; justify-content:flex-end">
        <button class="btn" id="ed-vazgec">Vazgeç</button>
        <button class="btn primary" id="ed-tamam">${t}</button>
      </div>`);let r=!1;const o=l=>{r||(r=!0,s(),n(l))};a.querySelector("#ed-vazgec")?.addEventListener("click",()=>o(!1)),a.querySelector("#ed-tamam")?.addEventListener("click",()=>o(!0));const c=a.parentElement;c?.addEventListener("click",l=>{l.target===c&&o(!1)})})}let Ze=null,Qt=null,Da=null,rn=!1,ps=null,Qp=null,em=!1,jt=null;const At=i=>i.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function Mc(i){_c(),Ze=null,Qt=null,Da=null,ps=null,jt=null;const e=bn();if(!e){tm(i,!1);return}const t=e.kind!=="microsoft";if(t&&!Iv){tm(i,!0);return}i.innerHTML=HE(e.name,t),$E(i,e.id),Qp=i,em||(em=!0,document.addEventListener("visibilitychange",()=>{if(document.visibilityState!=="visible")return;const n=Qp;if(!n||!n.isConnected)return;const a=bn();a&&a.kind==="microsoft"&&wo(n,a.id,!1)})),wo(i,e.id,!0)}function tm(i,e){i.innerHTML=`
    <div class="page-wrap skin-kapi-sar">
      <div class="skin-kapi">
        <div class="skin-kapi-ikon">${V("lock")}</div>
        <h1>${e?"Offline (cracked) hesap · yerel skin":"Orijinal hesap ile girmen lazım"}</h1>
        <p>${e?"Skinini çizebilir ve bu bilgisayarda giyebilirsin. Sunucularda başkalarına görünmesi için Microsoft hesabı gerekir.":"Skin değiştirmek ve pelerin takmak için Microsoft hesabı gerekir."}</p>
        <div class="skin-kapi-aksiyon">
          ${e?`<button class="btn primary lg" id="sk-ciz">${V("brush")} Skin Çiz</button>`:`<button class="btn primary lg" id="sk-ms">${V("globe")} Microsoft ile Giriş</button>`}
          <button class="btn" id="sk-hesap">Hesapları Yönet</button>
        </div>
      </div>
    </div>`,i.querySelector("#sk-ciz")?.addEventListener("click",()=>{const t=bn();t&&BE(t.id)}),i.querySelector("#sk-ms")?.addEventListener("click",()=>{Un(()=>Mc(i))}),i.querySelector("#sk-hesap")?.addEventListener("click",()=>je("settings"))}let Iv=!1;function BE(i){Y("Yerel skin: çizim kaydedince bu bilgisayarda görünür","ok"),Iv=!0;const e=document.querySelector("#content");e&&Mc(e)}function HE(i,e){return`
    <div class="page-wrap skin-sayfa">
      <div class="page-header skin-baslik">
        <div>
          <h1>Skin Merkezi</h1>
          <p class="sub">${e?"Offline (cracked) hesap — skin yalnız bu bilgisayarda görünür.":"Skinlerini seç, giy; pelerinini tak. Giyilen skin sunucularda görünür."}</p>
        </div>
        <div class="skin-ust-aksiyon">
          ${e?`<span class="skin-premium" style="color:var(--warn)">${V("user")} Yerel skin</span>`:`<span class="skin-premium">${V("check")} Orijinal hesap</span>`}
          <button class="btn primary" id="sk-duzenle">${V("brush")} Skin Düzenle</button>
        </div>
      </div>
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
    </div>`}function $E(i,e){i.querySelector("#sk-duzenle")?.addEventListener("click",()=>void ew(i,e)),i.querySelector("#sk-kozmetik")?.addEventListener("click",()=>je("kozmetik")),i.querySelector("#sk-giy")?.addEventListener("click",()=>void Cd(i,e)),i.querySelector("#sk-yedek")?.addEventListener("click",()=>void ZE(i,e));const t=i.querySelector("#sk-ekle"),n=i.querySelector("#sk-dosya");t.addEventListener("click",()=>n.click()),t.addEventListener("keydown",r=>{(r.key==="Enter"||r.key===" ")&&(r.preventDefault(),n.click())}),n.addEventListener("change",()=>{const r=n.files?.[0];r&&im(i,e,r),n.value=""}),t.addEventListener("dragover",r=>{r.preventDefault(),t.classList.add("uzerinde")}),t.addEventListener("dragleave",()=>t.classList.remove("uzerinde")),t.addEventListener("drop",r=>{r.preventDefault(),t.classList.remove("uzerinde");const o=r.dataTransfer?.files?.[0];o&&im(i,e,o)});const a=(r,o)=>{const c=i.querySelector(r);c?.addEventListener("click",l=>{const d=l.target.closest(".skin-kart");!d||l.target.closest(".skin-sil")||nm(i,d)}),c?.addEventListener("dblclick",l=>{const d=l.target.closest(".skin-kart");!d||l.target.closest(".skin-sil")||(nm(i,d),o())})};a("#sk-kitaplik",()=>void Cd(i,e)),a("#sk-varsayilan",()=>void Cd(i,e)),i.querySelector("#sk-kitaplik")?.addEventListener("click",r=>{const o=r.target.closest(".skin-sil");if(!o)return;r.stopPropagation();const c=o.closest(".skin-kart");c?.dataset.id&&jE(i,e,c.dataset.id,c.dataset.ad||"Skin")}),i.querySelector("#sk-pelerin")?.addEventListener("click",r=>{const o=r.target.closest(".skin-pelerin");if(!o)return;const c=o.dataset.id||null;JE(i,e,c)});const s=(r,o)=>{i.querySelector(r)?.addEventListener("click",c=>{const l=c.target,d=l.closest(".skin-pelerin");if(d){if(l.closest(".koz-sil")){c.stopPropagation(),YE(i,o,d.dataset.id||"",d.dataset.ad||"Kayıt");return}KE(i,o,d.dataset.id||null)}})};s("#sk-koz-pelerin","pelerin"),s("#sk-koz-kanat","kanat"),i.querySelector("#sk-serit")?.addEventListener("click",r=>{r.target.closest("#sk-yenile")&&wo(i,e,!1)})}async function wo(i,e,t){try{Ze=await ie("cmd_skin_hub",{id:e}),Qt=Qt??GE(),ua(i),t?zv(i):Ff(i),zo(),XE(i).then(()=>Ar(!1)),Ze.cevrimdisi?Y("Çevrimdışısın — son bilinen skin gösteriliyor"):Ze.hata&&Y(Ze.hata,"err")}catch(n){Y(String(n),"err");const a=i.querySelector("#sk-kitaplik");a&&(a.innerHTML='<div class="skin-bos">Yüklenemedi. <button class="btn" id="sk-yenile">Yeniden dene</button></div>')}}function GE(){if(!Ze)return null;if(Ze.secili){const t=Ze.kitaplik.find(n=>n.id===Ze.secili);if(t)return Wu(t)}if(Ze.aktif)return{tur:"kayit",id:`aktif:${Ze.aktif.dosya}`,dosya:Ze.aktif.dosya,slim:Ze.aktif.slim,ad:"Aktif skin"};const i=Ze.kitaplik[0];if(i)return Wu(i);const e=Ze.varsayilanlar[0];return e?{tur:"varsayilan",id:`varsayilan:${e.ad}`,dosya:e.dosya,slim:e.slim,ad:e.ad}:null}function Wu(i){return{tur:"kayit",id:i.id,dosya:i.dosya,slim:i.slim,ad:i.ad}}function ua(i){if(!Ze)return;const e=i.querySelector("#sk-serit");e&&(e.innerHTML=Ze.cevrimdisi?`<div class="skin-serit-cevrimdisi">${V("info")} Çevrimdışısın — son bilinen skin ve pelerinler gösteriliyor.
          <button class="btn ghost" id="sk-yenile">Yeniden dene</button></div>`:"");const t=i.querySelector("#sk-kitaplik");if(t){Ze.kitaplik.length?(t.innerHTML=Ze.kitaplik.map(u=>qE(u)).join(""),t.querySelectorAll(".skin-yuz").forEach(u=>{const h=u.dataset.dosya;h&&am(u,h,u.dataset.slim==="1")})):t.innerHTML='<div class="skin-bos">Henüz kayıtlı skin yok.<br />Sağ üstten <b>Skin Düzenle</b> ile çiz ya da PNG ekle.</div>';const f=i.querySelector("#sk-adet");f&&(f.textContent=Ze.kitaplik.length?`${Ze.kitaplik.length}`:"")}const n=i.querySelector("#sk-varsayilan");n&&(n.innerHTML=(Ze.varsayilanlar||[]).map(f=>`
      <div class="skin-kart" data-tur="varsayilan" data-id="varsayilan:${At(f.ad)}" data-dosya="${At(f.dosya)}"
           data-slim="${f.slim?1:0}" data-ad="${At(f.ad)}">
        <div class="skin-yuz-sar">
          <canvas class="skin-yuz" width="${Pv}" height="${Dv}"
                  data-dosya="${At(f.dosya)}" data-slim="${f.slim?1:0}"></canvas>
          <span class="skin-model">${f.slim?"Slim":"Wide"}</span>
        </div>
        <div class="skin-kart-ad">${At(f.ad)}</div>
      </div>`).join(""),n.querySelectorAll(".skin-yuz").forEach(f=>{const u=f.dataset.dosya;u&&am(f,u,f.dataset.slim==="1")})),VE(i),Uv(i);const a=bn(),s=!!a&&_m(a.id)&&!ym(a.id),r=i.querySelector("#sk-koz-pelerin")?.previousElementSibling;let o=i.querySelector("#sk-koz-rol-not");s?(o||(o=document.createElement("p"),o.id="sk-koz-rol-not",o.className="skin-bos",o.textContent='Başka bir pelerin/elitra giymek için Discord sunucusundaki YIKIM etiketi ("Yol Silindiri") gerekir — şimdilik yalnız aç/kapa yapabilirsin.',r?.after(o)),i.querySelectorAll(".skin-pelerin[data-id]:not(.cikar)").forEach(f=>{f.disabled=!0,f.title="Yol Silindiri rolü gerekir"})):o?.remove();const c=i.querySelector("#sk-aktif-ad");if(c){const f=Qt;c.textContent=Ze.cevrimdisi?"çevrimdışı önizleme":f?`${f.ad} · ${f.slim?"Slim":"Wide"}`:"skin seç"}const l=i.querySelector("#sk-giy");l&&(l.disabled=!Qt||rn,l.textContent=rn?"Bekle…":"Bu Skini Giy");const d=i.querySelector("#sk-yedek");d&&(d.style.display=Ze.yedek_var?"":"none"),i.querySelectorAll(".skin-kart").forEach(f=>{const u=Qt&&f.dataset.id===Qt.id;f.classList.toggle("secili",!!u);const h=f.querySelector(".skin-rozet.secim");if(u&&!h){const v=document.createElement("span");v.className="skin-rozet secim",v.textContent=Da&&f.dataset.id===Da?"GİYİLİ":"SEÇİLİ",f.appendChild(v)}else!u&&h?h.remove():u&&h&&(h.textContent=Da&&f.dataset.id===Da?"GİYİLİ":"SEÇİLİ")})}function VE(i){if(!Ze)return;const e=i.querySelector("#sk-pelerin");if(!e)return;if(!Ze.pelerinler.length){e.innerHTML='<div class="skin-bos">Hesabında pelerin yok — Mojang pelerinleri etkinliklerden kazanılır.</div>';return}const t=Ze.pelerinler.find(n=>n.aktif);e.innerHTML=Ze.pelerinler.map(n=>`<button class="skin-pelerin ${n.aktif?"aktif":""}" data-id="${At(n.id)}" title="${At(n.ad)}">
           <canvas class="skin-pelerin-tuval" width="40" height="64" data-dosya="${At(n.dosya||"")}"></canvas>
           <span class="skin-pelerin-ad">${At(n.ad)}</span>
           ${n.aktif?'<span class="skin-rozet aktif">TAKILI</span>':""}
         </button>`).join("")+(t?`<button class="skin-pelerin cikar" data-id="" title="Pelerini çıkar">
           <span class="skin-pelerin-yok">✕</span><span class="skin-pelerin-ad">Pelerini çıkar</span>
         </button>`:""),e.querySelectorAll(".skin-pelerin-tuval").forEach(n=>{const a=n.dataset.dosya;a&&Fv(n,a)})}function qE(i){return`
    <div class="skin-kart" data-tur="kayit" data-id="${At(i.id)}" data-dosya="${At(i.dosya)}"
         data-slim="${i.slim?1:0}" data-ad="${At(i.ad)}">
      <div class="skin-yuz-sar">
        <canvas class="skin-yuz" width="${Pv}" height="${Dv}"
                data-dosya="${At(i.dosya)}" data-slim="${i.slim?1:0}"></canvas>
        <span class="skin-model">${i.slim?"Slim":"Wide"}</span>
      </div>
      <div class="skin-kart-ad">${At(i.ad)}</div>
      <button class="skin-sil" title="Sil">${V("trash")}</button>
    </div>`}function nm(i,e){Qt={tur:e.dataset.tur||"kayit",id:e.dataset.id||"",dosya:e.dataset.dosya||"",slim:e.dataset.slim==="1",ad:e.dataset.ad||"Skin"},Ff(),ua(i)}function zv(i){const e=i.querySelector("#skin-canvas");if(!e)return;Dn().kur(e),Ff()}function Ff(i){const e=Dn();Qt&&e.skin({url:xt(Qt.dosya),slim:Qt.slim})}async function WE(i){const e=await new Promise((s,r)=>{const o=new Image;o.onload=()=>s(o),o.onerror=r,o.src=xt(i)}),t=LE(e),n=t.getContext("2d");if(!n)return xt(i);const a=n.getImageData(hs.x,hs.y,hs.w,hs.h);return n.putImageData(a,Vu.x,Vu.y),t.toDataURL("image/png")}function zo(){if(!Ze)return;const e=Ze.pelerinler.find(n=>n.aktif&&n.dosya)?.dosya||null;if(e===ps)return;if(ps=e,!e){Dn().pelerin(null);return}const t=e;WE(e).then(n=>{ps===t&&Dn().pelerin({url:n})}).catch(()=>{ps===t&&Dn().pelerin(null)})}async function XE(i){try{jt=await ie("cmd_kozm_katalog")}catch{jt={kayitlar:[],aktif:{pelerin:null,kanat:null}}}Uv(i)}function Uv(i){if(!jt)return;const e=(a,s)=>{const r=i.querySelector(a);if(!r)return;const o=jt.kayitlar.filter(l=>l.tur===s),c=jt.aktif[s];if(!o.length){const l=s==="pelerin"?"Pelerin":"Elitra";r.innerHTML=`<div class="skin-bos">${l} kaydı yok — <b>Kozmetik</b> sayfasında fotoğraftan oluştur, burada birikir.</div>`;return}r.innerHTML=o.map(l=>`
        <button class="skin-pelerin ${l.id===c?"aktif":""}" data-id="${At(l.id)}" data-ad="${At(l.ad)}" title="${At(l.ad)}${l.hd?" · HD":""}">
          <canvas class="skin-pelerin-tuval" width="40" height="64" data-dosya="${At(l.dosya)}"></canvas>
          <span class="skin-pelerin-ad">${At(l.ad)}</span>
          <span class="skin-sil koz-sil" title="Kaydı sil">${V("trash")}</span>
          ${l.id===c?'<span class="skin-rozet aktif">TAKILI</span>':""}
        </button>`).join("")+(c?`<button class="skin-pelerin cikar" data-id="" title="YIKIM kozmetiğini kapat">
             <span class="skin-pelerin-yok">✕</span><span class="skin-pelerin-ad">Kapat</span>
           </button>`:""),r.querySelectorAll(".skin-pelerin-tuval").forEach(l=>{const d=l.dataset.dosya;d&&Fv(l,d,s)})};e("#sk-koz-pelerin","pelerin"),e("#sk-koz-kanat","kanat");const t=i.querySelector("#sk-koz-adet");if(t){const a=jt.kayitlar.filter(s=>s.tur==="pelerin").length;t.textContent=a?`${a} kayıt`:""}const n=i.querySelector("#sk-koz-kanat-adet");if(n){const a=jt.kayitlar.filter(s=>s.tur==="kanat").length;n.textContent=a?`${a} kayıt`:""}}async function Ar(i){const e=Dn(),t=jt?.kayitlar.find(a=>a.id===jt?.aktif.pelerin&&a.dosya)||null,n=jt?.kayitlar.find(a=>a.id===jt?.aktif.kanat&&a.dosya)||null;try{n?(await e.pelerin(null),await e.kanat({url:xt(n.dosya)})):(await e.kanat(null),t?await e.pelerin({url:xt(t.dosya)}):(ps=null,zo())),i&&(t||n)&&e.bakisaAyarla(2.5,.1)}catch{}}async function KE(i,e,t){if(!(rn||!jt)){rn=!0;try{const n=await ie("cmd_kozm_sec",{tur:e,id:t});jt.aktif=n.aktif;const a=jt.kayitlar.find(s=>s.id===t);t?(Y(`${a?.ad||"Kozmetik"} takıldı — oyunda görünecek.`),n.hata&&Y(`Diğer oyunculara yüklenemedi: ${n.hata}`,"err")):Y("YIKIM kozmetiği kapatıldı — vanilla görünüm."),await Ar(!0)}catch(n){Y(String(n),"err")}finally{rn=!1,ua(i)}}}async function YE(i,e,t,n){if(!(rn||!t||!await Ec("Kaydı sil",`<b>${At(n)}</b> katalogdan silinsin mi? Bu işlem geri alınamaz.`,"Sil"))){rn=!0;try{const s=await ie("cmd_kozm_sil",{tur:e,id:t});jt&&(jt.kayitlar=s.kayitlar,jt.aktif=s.aktif),Y("Kayıt silindi."),await Ar(!1)}catch(s){Y(String(s),"err")}finally{rn=!1,ua(i)}}}async function Cd(i,e){if(!Qt||rn)return;const t=Qt;if(await Ec("Skini giy",`<b>${At(t.ad)}</b> Mojang hesabına yazılacak ve sunucularda görünecek. Onaylıyor musun?`,"Giy")){rn=!0,ua(i);try{let a;if(t.tur==="kayit"&&Ze?.kitaplik.some(s=>s.id===t.id))a=await ie("cmd_skin_giy_kitaplik",{id:e,kayitId:t.id});else{const s=await Nv(t.dosya);a=await ie("cmd_skin_giy",{id:e,veri:s,slim:t.slim,ad:null})}Ze=a,Da=t.tur==="kayit"?t.id:null,Y("Skin giyildi — sunucularda görünecek.")}catch(a){Y(String(a),"err")}finally{rn=!1,ua(i)}}}async function ZE(i,e){if(!(rn||!await Ec("Yedeği geri yükle","Son giymeden önceki skin Mojang hesabına geri yazılacak. Onaylıyor musun?","Geri Yükle"))){rn=!0;try{Ze=await ie("cmd_skin_yedek_geri_yukle",{id:e}),Da=null,Y("Yedek skin geri yüklendi.")}catch(n){Y(String(n),"err")}finally{rn=!1,ua(i),zo(),Ar(!1)}}}async function JE(i,e,t){if(!(rn||!Ze)&&!(t===null&&!Ze.pelerinler.some(n=>n.aktif))){rn=!0;try{Ze=await ie("cmd_skin_pelerin",{id:e,capeId:t}),Y(t?"Pelerin takıldı.":"Pelerin çıkarıldı."),zo(),Ar(!1)}catch(n){Y(String(n),"err")}finally{rn=!1,ua(i)}}}async function jE(i,e,t,n){if(await Ec("Skini sil",`<b>${At(n)}</b> kitaplıktan silinsin mi? (Hesabındaki skin değişmez.)`,"Sil"))try{await ie("cmd_skin_sil",{kayitId:t}),Qt?.id===t&&(Qt=null),Y("Skin silindi."),await wo(i,e,!1)}catch(s){Y(String(s),"err")}}async function im(i,e,t){try{const n=Array.from(new Uint8Array(await t.arrayBuffer())),a=t.name.replace(/\.png$/i,"").slice(0,48)||"Skin",s=await QE(a);if(s===null)return;await ie("cmd_skin_kaydet",{ad:a,veri:n,slim:s}),Y(`Skin kitaplığa eklendi · ${s?"Slim":"Wide"}`),await wo(i,e,!1)}catch(n){Y(String(n),"err")}}function QE(i){return new Promise(e=>{const{root:t,close:n}=mn(`
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
      </div>`);let a=!1;const s=c=>{c.key==="Escape"&&r(null)},r=c=>{a||(a=!0,window.removeEventListener("keydown",s),n(),e(c))};t.querySelector("#sm-wide")?.addEventListener("click",()=>r(!1)),t.querySelector("#sm-slim")?.addEventListener("click",()=>r(!0)),t.querySelector("#sm-iptal")?.addEventListener("click",()=>r(null));const o=t.parentElement;o?.addEventListener("click",c=>{c.target===o&&r(null)}),window.addEventListener("keydown",s)})}async function ew(i,e){const t=Qt?.dosya||Ze?.aktif?.dosya||Ze?.varsayilanlar[0]?.dosya;if(!t){Y("Önce bir skin seç.","err");return}let n;try{n=await tw(await Nv(t))}catch(o){Y(String(o),"err");return}const a=new Date,s=`Skinim ${String(a.getDate()).padStart(2,"0")}.${String(a.getMonth()+1).padStart(2,"0")}`;let r=!1;OE(i,{pafta:n,slim:Qt?.slim??!1,ad:s},async(o,c)=>{const l=await ie("cmd_skin_kaydet",{ad:o.ad,veri:o.veri,slim:o.slim});c?(Ze=await ie("cmd_skin_giy_kitaplik",{id:e,kayitId:l.id}),Da=l.id,Y("Skin giyildi — sunucularda görünecek.")):(Ze=await ie("cmd_skin_hub",{id:e}),Y("Kitaplığa kaydedildi.")),Qt=Wu(l),r=!0},()=>{if(!r){Mc(i);return}ua(i),_c(),ps=null,zv(i),zo(),Ar(!1)})}async function tw(i){const e=new Blob([new Uint8Array(i)],{type:"image/png"}),t=URL.createObjectURL(e);try{const n=await new Promise((c,l)=>{const d=new Image;d.onload=()=>c(d),d.onerror=()=>l(new Error("Skin dosyası okunamadı.")),d.src=t}),a=document.createElement("canvas");a.width=64,a.height=64;const s=a.getContext("2d");s.imageSmoothingEnabled=!1;const r=Ov(n),o=n.naturalHeight===32;return s.drawImage(r,0,0,64,o?32:64),new tc(new Uint8ClampedArray(s.getImageData(0,0,64,64).data))}finally{URL.revokeObjectURL(t)}}async function Nv(i){const e=await fetch(xt(i));if(!e.ok)throw new Error("Skin dosyası okunamadı.");return Array.from(new Uint8Array(await e.arrayBuffer()))}function Ov(i){const e=i.naturalWidth||i.width,t=i.naturalHeight||i.height;if(e===64)return i;const n=document.createElement("canvas");n.width=64,n.height=Math.max(1,Math.round(t/e*64));const a=n.getContext("2d");return a?(a.imageSmoothingEnabled=!1,a.drawImage(i,0,0,n.width,n.height),n):i}function am(i,e,t){const n=new Image;n.onload=()=>{const a=i.getContext("2d");a&&UE(a,Ov(n),t)},n.src=xt(e)}function Fv(i,e,t="pelerin"){const n=new Image;n.onload=()=>{const a=i.getContext("2d");if(!a)return;const s=n.naturalWidth||Ve,r=n.naturalHeight||kt,o=s>Ve||r>kt;let c=Va(t);if(t==="pelerin"){const v=document.createElement("canvas");v.width=Ve,v.height=kt;const m=v.getContext("2d",{willReadFrequently:!0});m&&(m.imageSmoothingEnabled=!1,m.drawImage(n,0,0,Ve,kt),c=CE(v))}i.width=o?160:40,i.height=o?256:64,i.style.imageRendering=o?"auto":"pixelated",a.imageSmoothingEnabled=o,a.imageSmoothingQuality="high",a.clearRect(0,0,i.width,i.height);const l=Math.min(i.width/c.w,i.height/c.h),d=c.w*l,f=c.h*l,u=s/Ve,h=r/kt;a.drawImage(n,c.x*u,c.y*h,c.w*u,c.h*h,(i.width-d)/2,(i.height-f)/2,d,f)},n.src=xt(e)}function Ec(i,e,t){return new Promise(n=>{const{root:a,close:s}=mn(`
      <h2>${i}</h2>
      <div class="sub" style="margin-bottom:16px">${e}</div>
      <div style="display:flex; gap:10px; justify-content:flex-end">
        <button class="btn" id="on-vazgec">Vazgeç</button>
        <button class="btn primary" id="on-tamam">${t}</button>
      </div>`);let r=!1;const o=l=>{r||(r=!0,s(),n(l))};a.querySelector("#on-vazgec")?.addEventListener("click",()=>o(!1)),a.querySelector("#on-tamam")?.addEventListener("click",()=>o(!0));const c=a.parentElement;c?.addEventListener("click",l=>{l.target===c&&o(!1)})})}const Uo=["pelerin","kanat"],nw=["#0b0b10","#1d1d24","#3a3a46","#6b6b7a","#a8a8b6","#e8e8ef","#ff8a3d","#ff5a1f","#ffd166","#f6f6f6","#ff4d6d","#b8132f","#7b2ff7","#3d5afe","#22d3ee","#0ea5a3","#22c55e","#166534","#8b5e34","#d9a066","#f5c6a5","#e11d48","#111827","#4b5563"],sm=8;let wc=As(),No=As(),Rr=!1,Lr=!1,Wt="pelerin",Ia="#ff8a3d",wn=!1,Oa=!1,ri=!1,za=!1,os=!0,ui="kalem";const iw=[4,8,12,16];let so=8;const Bv="yikim:renk:son",ic=40,fn={pelerin:[],kanat:[]},qa={pelerin:[],kanat:[]};let nr=aw();function aw(){try{const i=localStorage.getItem(Bv),e=i?JSON.parse(i):null;return Array.isArray(e)?e.filter(t=>typeof t=="string").slice(0,12):[]}catch{return[]}}function sw(i){const e=i.toLowerCase();if(nr[0]?.toLowerCase()!==e){nr=[i,...nr.filter(t=>t.toLowerCase()!==e)].slice(0,12);try{localStorage.setItem(Bv,JSON.stringify(nr))}catch{}}}function Hv(i){const e=`#${i.trim().replace(/^#+/,"")}`;return/^#[0-9a-fA-F]{6}$/.test(e)?e.toLowerCase():null}let ur=!0,To=null,Ao=null;const ms=new Map,Bf=Nf(),rw=i=>i.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Dt=i=>i==="pelerin"?wc:No,ac=i=>i==="pelerin"?Sc:kc;function ow(i){_c(),Zr=i,wc=As(),No=Nf(),Rr=!1,Lr=!1,Wt="pelerin",Ia="#ff8a3d",ui="kalem",fn.pelerin.length=0,fn.kanat.length=0,qa.pelerin.length=0,qa.kanat.length=0,wn=!1,Oa=!1,za=!1,ur=!0,Gt.pelerin=!1,Gt.kanat=!1,$t.pelerin=null,$t.kanat=null,fa.pelerin=!1,fa.kanat=!1,To=null,Ao=null,ms.clear(),i.innerHTML=cw(),Gv(i),lw(i),dw(i)}function $v(){const i=bn();return!i||!_m(i.id)||!p0(i.id)?"dogrulanmamis":ym(i.id)?"tam":"rol_yok"}function Gv(i,e){const t=e??$v(),n=t!=="tam";i.querySelector("#kz-sayfa")?.classList.toggle("kz-kisitli",n);const s=i.querySelector("#kz-sekme-ipucu");if(s&&(n?s.textContent="Bu sayfada yalnız önizleme ve aç/kapa var":s.textContent="Atlasta ya da 3D modelin üstünde çiz"),i.querySelector("#kz-kisitli")?.remove(),t==="tam")return;const r=i.querySelector(".page-header");if(!r)return;const o=document.createElement("div");o.id="kz-kisitli",o.className="kz-kilit"+(t==="rol_yok"?" kz-kilit-rol":""),t==="dogrulanmamis"?o.innerHTML=`<span class="gv-carpi">✕</span>
      <div><b>Kozmetikler kilitli</b>
      <small>Pelerinini/elitranı çizebilmen ve fotoğraf yükleyebilmen için hesabını doğrula.
         Bu sayfada yalnız önizleme, pelerin/elitra seçimi ve aç/kapa anahtarları var.</small></div>
      <button class="btn primary sm" id="kz-kisitli-eski">Doğrula</button>`:o.innerHTML=`<span aria-hidden="true">🔒</span>
      <div><b>Kendi tasarımını çizmek için "Yol Silindiri" rolü gerekir</b>
      <small>Discord sunucusundaki YIKIM etiketini/rolünü al; rolü taşıdığın sürece kendi pelerin ve
         elitranı çizebilir, fotoğraf (HD) ve maske yükleyebilirsin. Etiketi bırakırsan çizme izni
         otomatik geri alınır — bu sayfada yalnız aç/kapa kalır.</small></div>
      <button class="btn ghost sm" id="kz-kisitli-eski">Discord'a katıl ↗</button>`,r.after(o),i.querySelector("#kz-kisitli-eski")?.addEventListener("click",()=>{t==="dogrulanmamis"?je("settings"):xm()})}async function lw(i){await sr(!0);const e=await m0(),t=e?e.dogrulandi?e.cizimSerbest?"tam":"rol_yok":"dogrulanmamis":$v();Gv(i,t)}function cw(){return`
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
          ${rm("pelerin","Pelerin","shirt","Pelerin","Ön, arka, yanlar, üst ve alt — altı yüz de ayrı çizilir.")}
          ${rm("kanat","Elitra","sparkle","Elitra","Sol/sağ kanat oyunda aynadır: aynı atlası aynalı gösterir.")}
        </div>
      </div>

      <p class="kz-dipnot">Kozmetikler oyun açıkken de uygulanır: kaydettikten sonra en geç birkaç saniye
        içinde oyunda görünür. Boş bıraktığın pelerin/elitra oyunda görünmez — elitra boşken normal
        Minecraft elitrası kullanılır.</p>
    </div>`}function rm(i,e,t,n,a){const s=iw.map(r=>`<button class="seg-btn ${r===so?"aktif":""}" data-kzyum="${r}" title="${r}× yakınlaştır">${r}×</button>`).join("");return`
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
                width="${Ve*sm}" height="${kt*sm}"></canvas>
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
    </section>`}async function dw(i){let e;try{e=await ie("cmd_kozmetik_oku")}catch(d){Y(String(d),"err"),e={pelerin:null,kanat:null}}const t=d=>{try{const f=localStorage.getItem(`yikim:kozmetik:${d}:yedek`),u=f?JSON.parse(f):null;return Array.isArray(u)&&u.length===zn?u.slice():null}catch{return null}},n=(d,f)=>d?d.length===zn?d.slice():d.length===ww[f]?Aw(d,f):null:null,a=n(e.pelerin,"pelerin"),s=n(e.kanat,"kanat");wc=!!a&&!di(a)?a:t("pelerin")??a??As(),No=!!s&&!di(s)?s:t("kanat")??s??Nf(),Rr=!!a&&!di(a),Lr=!!s&&!di(s),To=Yp(),Ao=Yp(),Vv(),uw(i);for(const d of Uo)_w(i,d);Oo(i),Yv(i),Sw(i);const c=i.querySelector("#kz-pelerin-aktif"),l=i.querySelector("#kz-kanat-aktif");c&&(c.checked=e.pelerin_aktif??cm("pelerin")??!!e.pelerin_dosya),l&&(l.checked=e.kanat_aktif??cm("kanat")??!!e.kanat_dosya),Pw(i,e)}function uw(i){const e=i.querySelector("#kz-sahne");if(!e)return;const t=Dn();t.kur(e),(async()=>{try{const n=bn();let a=null;if(n){const s=await ie("cmd_skin_hub",{id:n.id});a=s?.aktif?.dosya?s.aktif:s?.varsayilanlar?.[0]??null}await t.skin(a?.dosya?{url:xt(a.dosya),slim:!!a.slim}:null)}catch{try{await t.skin(null)}catch{}}})()}function fw(i){i.fillStyle="rgba(150,152,170,0.16)";for(const e of Sc)i.fillRect(e.x,e.y,e.w,e.h)}function hw(i){if(!di(No)){i.fillStyle="rgba(150,152,170,0.10)";for(const e of kc)i.fillRect(e.x,e.y,e.w,e.h);return}i.save(),i.globalAlpha=.6;for(let e=0;e<zn;e++){const t=Bf[e];t&&(i.fillStyle=t,i.fillRect(e%Ve,Math.floor(e/Ve),1,1))}i.restore()}function Vv(){To&&nc(To,wc,fw),Ao&&nc(Ao,No,hw),Dn().dokuTazele()}function Oo(i){const e=Dn();Wt==="pelerin"?(e.kanatTuval(null),Gt.pelerin&&$t.pelerin?(e.pelerinTuval(null),e.pelerin({url:xt($t.pelerin)})):e.pelerinTuval(To)):(e.pelerinTuval(null),Gt.kanat&&$t.kanat?(e.kanatTuval(null),e.kanat({url:xt($t.kanat)})):e.kanatTuval(Ao)),i.querySelectorAll("[data-secim]").forEach(t=>{t.classList.toggle("aktif",t.dataset.secim===Wt),t.setAttribute("aria-selected",t.dataset.secim===Wt?"true":"false")});for(const t of Uo){const n=i.querySelector(`#kz-${t}-kart`);n&&(n.hidden=Wt!==t,n.classList.toggle("secili",Wt===t))}i.querySelectorAll("[data-ciz3d]").forEach(t=>{const n=t.dataset.ciz3d===Wt;t.classList.toggle("aktif",wn&&n),t.innerHTML=wn&&n?`${V("image")} 2D'ye geç`:`${V("box")} 3D Çiz`})}function Jn(i,e){di(Dt(e))||(fa[e]=!1);const t=i.querySelector(`#kz-${e}-tuval`);t&&nc(t,Dt(e)),ro(i,e),Hf(i,e),Vv()}function Hf(i,e){const t=Gt[e]||!di(Dt(e)),n=e==="pelerin"?Rr:Lr,a=i.querySelector(`#kz-${e}-durum`);a&&(a.textContent=n&&t?"KAYITLI":"");const s=i.querySelector(`#kz-${e}-sekme-durum`);s&&(s.textContent=n&&t?"kayıtlı":"")}function pw(i,e,t){const n=i.getContext("2d");if(!n)return;n.clearRect(0,0,i.width,i.height);const a=i.width/Ve;n.font="600 10px ui-sans-serif, system-ui, sans-serif",n.textAlign="center",n.textBaseline="middle";for(const s of e){const r=t?.id===s.id;if(n.strokeStyle=r?"rgba(255,150,60,0.95)":"rgba(255,255,255,0.26)",n.lineWidth=r?2:1,n.setLineDash(r?[]:[4,3]),n.strokeRect(s.x*a+.5,s.y*a+.5,s.w*a-1,s.h*a-1),n.setLineDash([]),s.h*a<20)continue;const o=s.w*a<46,c=(s.x+s.w/2)*a,l=Math.min(i.height-10,Math.max(10,(s.y+s.h/2)*a));n.save(),n.translate(c,l),o&&n.rotate(-Math.PI/2);const d=n.measureText(s.ad);n.fillStyle="rgba(8,9,13,0.74)",n.fillRect(-d.width/2-4,-7,d.width+8,14),n.fillStyle=r?"#ffb066":"rgba(255,255,255,0.8)",n.fillText(s.ad,0,0),n.restore()}}function ro(i,e){const t=i.querySelector(`#kz-${e}-rehber`);t&&pw(t,ac(e),ms.get(e)??null)}function om(i,e){const t=e.getBoundingClientRect();if(t.width<1||t.height<1)return null;const n=Math.floor((i.clientX-t.left)/t.width*Ve),a=Math.floor((i.clientY-t.top)/t.height*kt);return n<0||a<0||n>=Ve||a>=kt?null:{x:n,y:a}}function mw(i,e,t){for(const n of ac(i))if(e>=n.x&&e<n.x+n.w&&t>=n.y&&t<n.y+n.h)return n;return null}function gw(i,e,t,n,a,s){let r=e,o=t;const c=Math.abs(n-e),l=Math.abs(a-t),d=e<n?1:-1,f=t<a?1:-1;let u=c-l;for(;r>=0&&r<Ve&&o>=0&&o<kt&&(i[o*Ve+r]=s),!(r===n&&o===a);){const h=2*u;h>-l&&(u-=l,r+=d),h<c&&(u+=c,o+=f)}}function vw(i,e){const t=i.querySelector(`#kz-${e}-palet`);if(!t)return;lm(t,i);const n=i.querySelector("#kz-3d-palet");n&&!n.childElementCount&&lm(n,i)}function lm(i,e){i.innerHTML=nw.map(t=>`<button class="kz-renk" data-renk="${t}" style="background:${t}" title="${t}" aria-label="${t}"></button>`).join(""),i.querySelectorAll(".kz-renk").forEach(t=>{t.addEventListener("click",()=>gs(e,t.dataset.renk??"#ffffff"))})}function gs(i,e,t=!0){const n=Hv(e)??Ia;Ia=n,t&&(ui="kalem",sw(n));const a=o=>(o??"").toLowerCase()===n.toLowerCase();for(const o of Uo){const c=i.querySelector(`#kz-${o}-renk`);c&&(c.value=n);const l=i.querySelector(`#kz-${o}-hex`);l&&(l.value=n.toUpperCase());const d=i.querySelector(`#kz-${o}-renk-kod`);d&&(d.textContent=n.toUpperCase()),i.querySelectorAll(`#kz-${o}-palet .kz-renk`).forEach(f=>{f.classList.toggle("aktif",a(f.dataset.renk))}),i.querySelectorAll(`#kz-${o}-son .kz-renk`).forEach(f=>{f.classList.toggle("aktif",a(f.dataset.renk))})}const s=i.querySelector("#kz-3d-renk");s&&(s.value=n);const r=i.querySelector("#kz-3d-renk-kod");r&&(r.textContent=n.toUpperCase()),i.querySelectorAll("#kz-3d-palet .kz-renk").forEach(o=>{o.classList.toggle("aktif",a(o.dataset.renk))}),t&&wn&&(Oa=!1),$f(i),Kv(i)}function _w(i,e){const t=i.querySelector(`#kz-${e}-tuval`);if(!t)return;vw(i,e),nc(t,Dt(e)),ro(i,e),Hf(i,e),bw(i,e),Kv(i),Xv(i),$f(i),e==="pelerin"&&gs(i,Ia,!1);let n=!1,a=-1,s=-1;const r=()=>{fn[e].push(Dt(e).slice()),fn[e].length>ic&&fn[e].shift(),qa[e].length=0},o=(u,h,v)=>{const m=Dt(e);if(ui==="damla"){const g=m[h*Ve+u];g&&gs(i,g,!0);return}if(ui==="kova"){if(!v)return;r(),xw(m,u,h,Ia),Jn(i,e);return}const p=ui==="silgi"?"":Ia;a>=0&&s>=0?gw(m,a,s,u,h,p):m[h*Ve+u]=p,a=u,s=h,Jn(i,e)};t.addEventListener("contextmenu",u=>u.preventDefault()),t.addEventListener("pointerdown",u=>{Wt!==e&&(Wt=e,Oo(i)),n=!0,a=-1,s=-1;try{t.setPointerCapture(u.pointerId)}catch{}const h=om(u,t);h&&(ui!=="damla"&&r(),o(h.x,h.y,!0))}),t.addEventListener("pointermove",u=>{const h=om(u,t),v=h?mw(e,h.x,h.y):null;(ms.get(e)??null)?.id!==(v?.id??null)&&(ms.set(e,v),ro(i,e)),!(!h||!n)&&o(h.x,h.y,!1)});const c=()=>{n=!1,a=-1,s=-1};t.addEventListener("pointerup",c),t.addEventListener("pointercancel",c),t.addEventListener("pointerleave",()=>{n||ms.get(e)&&(ms.set(e,null),ro(i,e))}),i.querySelectorAll(`#kz-${e}-araclar [data-kzarac]`).forEach(u=>{u.addEventListener("click",()=>yw(i,u.dataset.kzarac??"kalem"))}),i.querySelector(`#kz-${e}-geri`)?.addEventListener("click",()=>qv(i,e)),i.querySelector(`#kz-${e}-ileri`)?.addEventListener("click",()=>Wv(i,e)),i.querySelector(`#kz-${e}-renk`)?.addEventListener("input",u=>{gs(i,u.target.value)});const l=i.querySelector(`#kz-${e}-hex`),d=()=>{if(!l)return;const u=Hv(l.value);u?gs(i,u):l.value=Ia.toUpperCase()};l?.addEventListener("change",d),l?.addEventListener("blur",d),l?.addEventListener("keydown",u=>{u.key==="Enter"&&(u.preventDefault(),d())}),i.querySelector(`#kz-${e}-temizle`)?.addEventListener("click",()=>{r();const u=Dt(e);for(let h=0;h<u.length;h++)u[h]="";fa[e]=!0,Jn(i,e),Y(`${e==="pelerin"?"Pelerin":"Elitra"} tuvali temizlendi — kaydetmezsen oyun değişmez.`)}),i.querySelector(`#kz-${e}-3d`)?.addEventListener("click",()=>{if(wn&&Wt===e){Xu(i,!1),requestAnimationFrame(()=>{i.querySelector(`#kz-${e}-kart`)?.scrollIntoView({behavior:"smooth",block:"center"})});return}Xu(i,!0,e),i.querySelector("#kz-oniz3d")?.scrollIntoView({behavior:"smooth",block:"center"})}),i.querySelector(`#kz-${e}-kaydet`)?.addEventListener("click",()=>void sc(i,e)),i.querySelector(`#kz-${e}-kaldir`)?.addEventListener("click",()=>{Gt[e]&&(Gt[e]=!1,$t[e]=null,ta(i,e)),r();const u=Dt(e);for(let h=0;h<u.length;h++)u[h]="";fa[e]=!0,Jn(i,e),sc(i,e)});const f=i.querySelector(`#kz-${e}-dosya`);f?.addEventListener("change",()=>{const u=f.files?.[0];u&&Uw(i,e,u),f.value=""})}function yw(i,e){ui=e,$f(i),e==="damla"?Y("Damlalık: tuvallin bir pikseline tıkla, rengi alır."):e==="kova"&&Y("Kova: bitişik aynı renk alanını seçili renkle doldurur.")}function $f(i){i.querySelectorAll("[data-kzarac]").forEach(e=>{e.classList.toggle("aktif",e.dataset.kzarac===ui)}),i.querySelector("#kz-3d-kalem")?.classList.toggle("aktif",wn&&ui!=="silgi"),i.querySelector("#kz-3d-silgi")?.classList.toggle("aktif",wn&&ui==="silgi")}function xw(i,e,t,n){const a=i[t*Ve+e]??"";if(a===n)return;const s=[t*Ve+e];for(;s.length;){const r=s.pop();if((i[r]??"")!==a)continue;i[r]=n;const o=r%Ve,c=Math.floor(r/Ve);o>0&&s.push(r-1),o<Ve-1&&s.push(r+1),c>0&&s.push(r-Ve),c<kt-1&&s.push(r+Ve)}}function qv(i,e){const t=fn[e].pop();if(!t){Y("Geri alınacak adım yok.");return}qa[e].push(Dt(e).slice()),Dt(e).splice(0,Dt(e).length,...t),Jn(i,e)}function Wv(i,e){const t=qa[e].pop();if(!t){Y("İleri alınacak adım yok.");return}fn[e].push(Dt(e).slice()),Dt(e).splice(0,Dt(e).length,...t),Jn(i,e)}function Xv(i){for(const e of Uo){const t=i.querySelector(`#kz-${e}-tuval`),n=i.querySelector(`#kz-${e}-rehber`),a=`${Ve*so}px`,s=`${kt*so}px`;t&&(t.style.width=a,t.style.height=s),n&&(n.style.width=a,n.style.height=s)}i.querySelectorAll("[data-kzyum]").forEach(e=>{e.classList.toggle("aktif",Number(e.dataset.kzyum)===so)})}function Kv(i){for(const e of Uo){const t=i.querySelector(`#kz-${e}-son`);t&&(t.innerHTML=nr.length?nr.map(n=>`<button class="kz-renk" data-renk="${n}" style="background:${n}" title="${n}" aria-label="${n}"></button>`).join(""):'<span class="kz-bos-not">Henüz renk kullanmadın — bir renk seç, burada birikir.</span>',t.querySelectorAll(".kz-renk").forEach(n=>{n.addEventListener("click",()=>gs(i,n.dataset.renk??"#ffffff"))}))}}function bw(i,e){const t=i.querySelector(`#kz-${e}-bolgeler`);t&&(t.innerHTML=ac(e).map(n=>`<button class="kz-bolge-rozet" data-bolge="${n.id}" title="Atlasta ${n.ad} yüzü">${n.ad}</button>`).join(""),t.querySelectorAll("[data-bolge]").forEach(n=>{const a=ac(e).find(r=>r.id===n.dataset.bolge)??null,s=r=>{ms.set(e,r?a:null),ro(i,e)};n.addEventListener("pointerenter",()=>s(!0)),n.addEventListener("pointerleave",()=>s(!1))}))}function Xu(i,e,t){e&&t&&(Wt=t),wn=e,Oa=!1,e||(za=!1),e||(ri=!1);const n=Dn();n.etkilesimKapali=e&&!ri,n.izgaraGoster(e&&os),n.kanatAyrik(e),n.oyuncuGoster(!za),i.querySelector("#kz-3d-matris")?.classList.toggle("aktif",e&&os),i.querySelector("#kz-sayfa")?.classList.toggle("cizim3d",e),i.querySelector("#kz-oniz3d")?.classList.toggle("cizim",e);const a=i.querySelector("#kz-cizim-arac");a&&(a.hidden=!e);const s=i.querySelector("#kz-3d-oyuncu");s&&(s.innerHTML=`${V("user")} ${za?"Oyuncuyu göster":"Oyuncuyu gizle"}`),i.querySelector("#kz-3d-kalem")?.classList.toggle("aktif",e&&!Oa),i.querySelector("#kz-3d-silgi")?.classList.toggle("aktif",e&&Oa),i.querySelector("#kz-3d-dondur")?.classList.toggle("aktif",e&&ri);const r=i.querySelector("#kz-sahne-alt");r&&(r.textContent=e?ri?"Döndür modu: sol tık sürükle döndürür · Tekerlek: yakınlaş":"Sol tık: boya · Orta/sağ tık: döndür · Tekerlek: yakınlaş":"Sürükle: döndür · Tekerlek: yakınlaş"),Oo(i),requestAnimationFrame(()=>n.boyutGuncelle())}function Sw(i){const e=async(c,l,d)=>{const f=Dt(l),u=`yikim:kozmetik:${l}:yedek`;if(!d&&!di(f))try{localStorage.setItem(u,JSON.stringify(f))}catch{}try{await ie("cmd_kozmetik_aktif",{[l]:d});return}catch{}if(!d){if(Gt[l])throw new Error("Bu launcher sürümü HD fotoğrafı kapatmayı desteklemiyor — launcher'ı güncelle.");await Ku(l,As());return}let h=[];try{const v=localStorage.getItem(u),m=v?JSON.parse(v):null;Array.isArray(m)&&m.length===zn&&(h=m)}catch{h=[]}!h.length&&!di(f)&&(h=f.slice()),h.length&&(await Ku(l,h),f.splice(0,f.length,...h),Jn(c,l))},t=i.querySelector("#kz-sahne");if(!t)return;const n=Dn();let a=!1;const s=c=>{const l=n.kozmetikNoktasi(c,Wt);if(!l||l.x<0||l.y<0||l.x>=Ve||l.y>=kt)return;const d=Dt(Wt),f=Oa?"":Ia,u=l.y*Ve+l.x;d[u]!==f&&(d[u]=f,Jn(i,Wt))};t.addEventListener("contextmenu",c=>{wn&&c.preventDefault()}),t.addEventListener("pointerdown",c=>{if(!(!wn||ri)&&!(c.pointerType==="mouse"&&c.button!==0)){a=!0;try{t.setPointerCapture(c.pointerId)}catch{}s(c)}}),t.addEventListener("pointermove",c=>{wn&&a&&s(c)});const r=()=>{a=!1};t.addEventListener("pointerup",r),t.addEventListener("pointercancel",r),i.querySelectorAll("[data-secim]").forEach(c=>{c.addEventListener("click",()=>{Wt=c.dataset.secim??"pelerin",Oo(i)})}),i.querySelectorAll("[data-kzyum]").forEach(c=>{c.addEventListener("click",()=>{const l=Number(c.dataset.kzyum);l&&(so=l,Xv(i))})}),i.querySelector("#kz-3d-matris")?.addEventListener("click",()=>{os=!os,i.querySelector("#kz-3d-matris")?.classList.toggle("aktif",os),n.izgaraGoster(os),Y(os?"Matris açık — piksel sınırları görünür.":"Matris kapalı.")}),i.querySelector("#kz-3d-renk")?.addEventListener("input",c=>{gs(i,c.target.value)});const o=[["#kz-pelerin-aktif","pelerin"],["#kz-kanat-aktif","kanat"]];for(const[c,l]of o)i.querySelector(c)?.addEventListener("change",d=>{const f=d.target,u=f.checked;dm(l,u),(async()=>{try{await e(i,l,u),Y(l==="pelerin"?u?"Özel pelerin açık — oyunda kendi pelerin görünür.":"Özel pelerin kapalı — oyunda Minecraft pelerini görünür.":u?"Özel elitra açık — oyunda kendi elitran görünür.":"Özel elitra kapalı — oyunda Minecraft elitrası görünür.")}catch(h){f.checked=!u,dm(l,!u),Y(String(h),"err")}})()});i.querySelector("#kz-yon")?.addEventListener("click",()=>{ur=!ur,Yv(i)}),i.querySelector("#kz-zum-arti")?.addEventListener("click",()=>n.zoomAyarla(n.zoomAl()*.85)),i.querySelector("#kz-zum-eksi")?.addEventListener("click",()=>n.zoomAyarla(n.zoomAl()*1.18)),i.querySelector("#kz-zum-sigdir")?.addEventListener("click",()=>n.zoomAyarla(2.75)),i.querySelector("#kz-3d-kalem")?.addEventListener("click",()=>{Oa=!1,ri=!1,ui="kalem",n.etkilesimKapali=wn,i.querySelector("#kz-3d-kalem")?.classList.add("aktif"),i.querySelector("#kz-3d-silgi")?.classList.remove("aktif"),i.querySelector("#kz-3d-dondur")?.classList.remove("aktif")}),i.querySelector("#kz-3d-silgi")?.addEventListener("click",()=>{Oa=!0,ri=!1,ui="silgi",n.etkilesimKapali=wn,i.querySelector("#kz-3d-silgi")?.classList.add("aktif"),i.querySelector("#kz-3d-kalem")?.classList.remove("aktif"),i.querySelector("#kz-3d-dondur")?.classList.remove("aktif")}),i.querySelector("#kz-3d-dondur")?.addEventListener("click",()=>{ri=!ri,n.etkilesimKapali=wn&&!ri,i.querySelector("#kz-3d-dondur")?.classList.toggle("aktif",ri);const l=i.querySelector("#kz-sahne-alt");l&&(l.textContent=ri?"Döndür modu: sol tık sürükle döndürür · Tekerlek: yakınlaş":"Sol tık: boya · Orta/sağ tık: döndür · Tekerlek: yakınlaş")}),i.querySelector("#kz-3d-oyuncu")?.addEventListener("click",()=>{const c=i.querySelector("#kz-3d-oyuncu");za=!za,n.oyuncuGoster(!za),c&&(c.innerHTML=`${V("user")} ${za?"Oyuncuyu göster":"Oyuncuyu gizle"}`)}),i.querySelector("#kz-3d-2d")?.addEventListener("click",()=>{const c=Wt;Xu(i,!1),requestAnimationFrame(()=>{i.querySelector(`#kz-${c}-kart`)?.scrollIntoView({behavior:"smooth",block:"center"})})})}function Yv(i){Dn().bakisaAyarla(ur?2.5:0,ur?.12:.02);const e=i.querySelector("#kz-yon");e&&(e.textContent=ur?"Önden gör":"Arkadan gör")}const kw=(i,e,t)=>i[t*Ve+e]??"",ir=(i,e,t,n)=>{e<0||e>=Ve||t<0||t>=kt||(i[t*Ve+e]=n)};function Mw(i,e,t){for(let n=0;n<e.h;n++)for(let a=0;a<e.w;a++)ir(i,t.x+(e.w-1-a),t.y+n,kw(i,e.x+a,e.y+n))}function Ew(i,e){const t=Va(e),n=Lv[e],{u:a,v:s,d:r}=n,o=(c,l)=>i[l*Ve+c]??"";for(let c=0;c<t.h;c++){const l=o(t.x,t.y+c),d=o(t.x+t.w-1,t.y+c);for(let f=0;f<r;f++)ir(i,a+r+n.w+f,s+r+c,l),ir(i,a+f,s+r+c,d)}for(let c=0;c<t.w;c++){const l=o(t.x+c,t.y),d=o(t.x+c,t.y+t.h-1);for(let f=0;f<r;f++)ir(i,a+r+c,s+f,l),ir(i,a+r+n.w+c,s+f,d)}}const ww={pelerin:160,kanat:200};function Tw(i,e=Dt(i)){const t=Va(i),n=[];for(let a=0;a<t.h;a++)for(let s=0;s<t.w;s++)n.push(e[(t.y+a)*Ve+t.x+s]??"");return n}function Aw(i,e){const t=As(),n=Va(e);for(let a=0;a<n.h;a++)for(let s=0;s<n.w;s++)ir(t,n.x+s,n.y+a,i[a*n.w+s]??"");return Mw(t,n,Cv(e)),Ew(t,e),t}async function Ku(i,e){try{return await ie("cmd_kozmetik_kaydet",{[i]:e})}catch(t){if(!/piksel bekleniyordu/i.test(String(t)))throw t;return await ie("cmd_kozmetik_kaydet",{[i]:Tw(i,e)})}}function cm(i){try{const e=localStorage.getItem(`yikim:kozmetik:${i}:aktif`);return e===null?null:e==="1"}catch{return null}}function dm(i,e){try{localStorage.setItem(`yikim:kozmetik:${i}:aktif`,e?"1":"0")}catch{}}const Gt={pelerin:!1,kanat:!1},$t={pelerin:null,kanat:null},fa={pelerin:!1,kanat:!1};function Rw(i){return new Promise(e=>{const t=URL.createObjectURL(i),n=new Image;n.onload=()=>{URL.revokeObjectURL(t),e(n)},n.onerror=()=>{URL.revokeObjectURL(t),Y("Görsel okunamadı","err"),e(null)},n.src=t})}function Lw(i,e,t,n,a,s,r,o){const c=document.createElement("canvas");c.width=Math.max(1,Math.round(s)),c.height=Math.max(1,Math.round(r));const l=c.getContext("2d",{willReadFrequently:!0});if(!l)throw new Error("tuval yok");if(l.imageSmoothingEnabled=o,l.imageSmoothingQuality="high",!o)return l.drawImage(i,e,t,n,a,0,0,c.width,c.height),c;let d=i,f=e,u=t,h=n,v=a,m=Math.round(n),p=Math.round(a);for(;m>c.width*2&&p>c.height*2;){m=Math.max(c.width,Math.round(m/2)),p=Math.max(c.height,Math.round(p/2));const g=document.createElement("canvas");g.width=m,g.height=p;const y=g.getContext("2d");if(!y)break;y.imageSmoothingEnabled=!0,y.imageSmoothingQuality="high",y.drawImage(d,f,u,h,v,0,0,m,p),d=g,f=0,u=0,h=m,v=p}return l.drawImage(d,f,u,h,v,0,0,c.width,c.height),c}function Zv(i,e,t,n,a,s=!1,r=0){const o=Va(t),c=Cv(t),l=Lv[t],d=a?Math.max(1,Math.min(16,Math.round(e.w/o.w))):1,f=document.createElement("canvas");f.width=Ve*d,f.height=kt*d;const u=f.getContext("2d",{willReadFrequently:!0});if(!u)throw new Error("tuval yok");const h=o.x*d,v=o.y*d,m=o.w*d,p=o.h*d;u.imageSmoothingEnabled=!1;const g=Lw(i,e.x,e.y,e.w,e.h,m,p,a);let y=g;if(s||r!==0){const b=document.createElement("canvas");b.width=m,b.height=p;const S=b.getContext("2d");S&&(S.imageSmoothingEnabled=!a,S.translate(m/2,p/2),S.rotate(r*Math.PI/180),S.scale(s?-1:1,1),S.drawImage(g,-m/2,-p/2),y=b)}if(t==="pelerin"&&(u.fillStyle="#000000",u.fillRect(h,v,m,p)),t==="pelerin"?(u.save(),u.translate(h+m,v),u.scale(-1,1),u.drawImage(y,0,0),u.restore()):u.drawImage(y,h,v),n)return f;u.save(),u.translate(c.x*d+m,c.y*d),u.scale(-1,1),u.drawImage(f,h,v,m,p,0,0,m,p),u.restore();const T=d;return u.drawImage(f,h,v,T,p,(l.u+l.d+l.w)*d,(l.v+l.d)*d,l.d*d,p),u.drawImage(f,h+m-T,v,T,p,l.u*d,(l.v+l.d)*d,l.d*d,p),u.drawImage(f,h,v,m,T,(l.u+l.d)*d,l.v*d,m,l.d*d),u.drawImage(f,h,v+p-T,m,T,(l.u+l.d+l.w)*d,l.v*d,m,l.d*d),f}function Cw(i){return new Promise((e,t)=>{i.toBlob(n=>{if(!n){t(new Error("PNG üretilemedi"));return}const a=new FileReader;a.onload=()=>e(String(a.result).split(",")[1]??""),a.onerror=()=>t(new Error("PNG okunamadı")),a.readAsDataURL(n)},"image/png")})}function ta(i,e){const t=Gt[e],n=i.querySelector(`#kz-${e}-kart`);if(!n)return;n.classList.toggle("foto",t);const a=n.querySelector(".kz-calisma");a&&(a.hidden=t);const s=i.querySelector(`#kz-${e}-foto`);s&&(s.hidden=!t);const r=i.querySelector(`#kz-${e}-foto-img`),o=$t[e];if(r&&o){const l=new Image;l.onload=()=>{const d=Math.max(1,Math.round(l.naturalWidth/Ve)),f=Va(e);r.width=f.w*12,r.height=f.h*12;const u=r.getContext("2d");u&&(u.clearRect(0,0,r.width,r.height),u.imageSmoothingEnabled=!0,u.imageSmoothingQuality="high",e==="pelerin"&&(u.save(),u.translate(r.width,0),u.scale(-1,1)),u.drawImage(l,f.x*d,f.y*d,f.w*d,f.h*d,0,0,r.width,r.height),e==="pelerin"&&u.restore())},l.src=xt(o)}else r&&r.getContext("2d")?.clearRect(0,0,r.width,r.height);for(const l of["#kz-"+e+"-3d","#kz-"+e+"-temizle","#kz-"+e+"-kaydet"]){const d=i.querySelector(l);d&&(d.hidden=t)}const c=i.querySelector(`#kz-${e}-durum`);c&&(c.textContent=t?"fotoğraf (HD)":""),Wt===e&&Oo(i)}function Pw(i,e){const t=(n,a,s)=>{if(Array.isArray(s)&&s.length===zn){Gt[n]=!1,$t[n]=null,ta(i,n);return}if(!a){Gt[n]=!1,$t[n]=null,ta(i,n);return}Gt[n]=!0,$t[n]=String(a),ta(i,n);const r=String(a),o=new Image;o.onload=()=>{if($t[n]!==r)return;const c=o.naturalWidth>Ve||o.naturalHeight>kt;Gt[n]=c,$t[n]=c?r:null,ta(i,n)},o.onerror=()=>{$t[n]===r&&(Gt[n]=!0)},o.src=xt(r)};t("pelerin",e.pelerin_dosya,e.pelerin),t("kanat",e.kanat_dosya,e.kanat)}async function Dw(i,e,t,n,a,s,r=!1,o=0){fa[e]=!1;const c=Zv(t,n,e,a,s,r,o),l=await Cw(c);let d;try{d=await ie("cmd_kozmetik_fotograf",{tur:e,png:l,duz:a})}catch(h){const v=document.createElement("canvas");v.width=Ve,v.height=kt;const m=v.getContext("2d",{willReadFrequently:!0});if(!m)throw h;m.imageSmoothingEnabled=!0,m.imageSmoothingQuality="high",m.drawImage(c,0,0,Ve,kt);const p=qu(m),g=Dt(e);fn[e].push(g.slice()),fn[e].length>ic&&fn[e].shift(),qa[e].length=0;for(let y=0;y<zn;y++)g[y]=p[y];Jn(i,e),await sc(i,e),Y("Launcher eski sürümde — fotoğraf 64×32 olarak kaydedildi. HD için launcher'ı güncelle.","err");return}const f=Dt(e);for(let h=0;h<f.length;h++)f[h]="";localStorage.removeItem(`yikim:kozmetik:${e}:yedek`),Gt[e]=!0,$t[e]=e==="pelerin"?"pelerin.png":"elytra.png";try{const h=await ie("cmd_kozmetik_oku"),v=e==="pelerin"?h.pelerin_dosya:h.kanat_dosya;v&&($t[e]=String(v))}catch{}if(e==="pelerin"?Rr=!0:Lr=!0,!s){const h=c.getContext("2d",{willReadFrequently:!0});if(h){const v=qu(h),m=Dt(e);fn[e].push(m.slice()),fn[e].length>ic&&fn[e].shift(),qa[e].length=0;for(let p=0;p<zn;p++)m[p]=v[p];if(e==="kanat")for(let p=0;p<zn;p++)Bf[p]||(m[p]="")}Gt[e]=!1,$t[e]=null,Jn(i,e),ta(i,e),await sc(i,e);return}Jn(i,e),ta(i,e);const u=d.yuklendi?"":" (sunucuya yüklenemedi; yalnız sende görünür)";Y(`Fotoğraf ${d.genislik}×${d.yukseklik} HD doku olarak kaydedildi${u}`)}function Iw(i,e,t){i.querySelector("#kz-kirp")?.remove();const n=Va(e),a=n.w/n.h,s=e==="pelerin"?"Pelerin":"Elitra";let r=!1,o=!0,c=!1,l=0;const d=document.createElement("div");d.className="kz-kirp",d.id="kz-kirp",d.innerHTML=`
    <div class="kz-kirp-kart" role="dialog" aria-modal="true" aria-label="Fotoğrafı yerleştir">
      <div class="kz-kirp-bas">
        <div class="kz-kirp-basla">
          <b>${s} fotoğrafı</b>
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
        <button class="btn primary" id="kz-kirp-uygula">${V("check")} Uygula</button>
      </div>
    </div>`,i.appendChild(d);const f=d.querySelector("#kz-kirp-c"),u=d.querySelector("#kz-kirp-on"),h=d.querySelector("#kz-kirp-bilgi"),v=d.querySelector("#kz-kirp-boyut"),m=d.querySelector("#kz-kirp-mod-not"),p=Math.min(620/t.width,420/t.height,1);f.width=Math.max(60,Math.round(t.width*p)),f.height=Math.max(60,Math.round(t.height*p));const g=f.width/t.width,y=f.getContext("2d");if(!y)throw new Error("tuval yok");let b=(()=>{let D=t.height,P=D*a;return P>t.width&&(P=t.width,D=P/a),{x:(t.width-P)/2,y:(t.height-D)/2,w:P,h:D}})();const S=D=>{const P=Math.max(4,t.width/60);let K=Math.min(Math.max(D.w,P),t.width),$=K/a;return $>t.height&&($=t.height,K=$*a),{x:Math.min(Math.max(D.x,0),Math.max(0,t.width-K)),y:Math.min(Math.max(D.y,0),Math.max(0,t.height-$)),w:K,h:$}};b=S(b);const E=()=>{const D=b.x*g,P=b.y*g,K=b.w*g,$=P-26;return{x:D+K/2,y:$<14?P+24:$}},A=()=>{y.clearRect(0,0,f.width,f.height),y.imageSmoothingEnabled=!0,y.imageSmoothingQuality="high",y.drawImage(t,0,0,f.width,f.height);const D=b.x*g,P=b.y*g,K=b.w*g,$=b.h*g;y.fillStyle="rgba(6,8,12,0.66)",y.fillRect(0,0,f.width,P),y.fillRect(0,P+$,f.width,Math.max(0,f.height-P-$)),y.fillRect(0,P,D,$),y.fillRect(D+K,P,Math.max(0,f.width-D-K),$),y.strokeStyle="rgba(255,255,255,0.30)",y.lineWidth=1;for(let Be=1;Be<3;Be++)y.beginPath(),y.moveTo(D+K*Be/3,P),y.lineTo(D+K*Be/3,P+$),y.stroke(),y.beginPath(),y.moveTo(D,P+$*Be/3),y.lineTo(D+K,P+$*Be/3),y.stroke();y.strokeStyle="#ff8a3d",y.lineWidth=2,y.strokeRect(D+1,P+1,Math.max(1,K-2),Math.max(1,$-2)),y.fillStyle="#ff8a3d",y.fillRect(D+K-8,P+$-8,8,8);const Q=E(),te=Q.x,ue=Q.y;y.strokeStyle="#ff8a3d",y.lineWidth=2,y.beginPath(),y.moveTo(te,P),y.lineTo(te,ue+9),y.stroke(),y.beginPath(),y.arc(te,ue,9,0,Math.PI*2),y.fillStyle="#12161e",y.fill(),y.stroke(),y.fillStyle="#ff8a3d",y.font="bold 11px sans-serif",y.textAlign="center",y.textBaseline="middle",y.fillText("↻",te,ue+1);const ke=Zv(t,b,e,r,o,c,l),Ne=ke.width/Ve,De=Va(e),He=De.w*Ne,J=De.h*Ne,ae=document.createElement("canvas");ae.width=He,ae.height=J;const fe=ae.getContext("2d",{willReadFrequently:!0}),ze=o?He:De.w*11,be=o?J:De.h*11;u.width=ze,u.height=be;const Fe=u.getContext("2d");if(fe&&Fe){if(fe.imageSmoothingEnabled=!1,fe.drawImage(ke,De.x*Ne,De.y*Ne,He,J,0,0,He,J),e==="kanat"){const Be=fe.getImageData(0,0,He,J);for(let Xe=0;Xe<J;Xe++)for(let st=0;st<He;st++){const Ge=De.x+Math.floor(st/Ne),ft=De.y+Math.floor(Xe/Ne);Bf[ft*Ve+Ge]||(Be.data[(Xe*He+st)*4+3]=0)}fe.putImageData(Be,0,0)}Fe.clearRect(0,0,ze,be),Fe.imageSmoothingEnabled=!1,e==="pelerin"&&(Fe.save(),Fe.translate(ze,0),Fe.scale(-1,1)),Fe.drawImage(ae,0,0,ze,be),e==="pelerin"&&Fe.restore()}u.style.imageRendering=o?"auto":"pixelated";const gt=Ne;v&&(v.textContent=`Doku: ${Ve*gt}×${kt*gt} (kumaş ${n.w*gt}×${n.h*gt})`),h&&(h.textContent=`${Math.round(b.w)}×${Math.round(b.h)} px seçim`)},x=D=>{const P=f.getBoundingClientRect();return{x:(D.clientX-P.left)/Math.max(1,P.width)*f.width/g,y:(D.clientY-P.top)/Math.max(1,P.height)*f.height/g}};let w=null;f.addEventListener("pointerdown",D=>{const P=x(D),K=14/g,$=E(),Q=$.x,te=$.y,ue=(D.clientX-f.getBoundingClientRect().left)/Math.max(1,f.getBoundingClientRect().width)*f.width,ke=(D.clientY-f.getBoundingClientRect().top)/Math.max(1,f.getBoundingClientRect().height)*f.height,Ne={x:b.x+b.w/2,y:b.y+b.h/2},De=Math.atan2(P.y-Ne.y,P.x-Ne.x)*180/Math.PI;Math.hypot(ue-Q,ke-te)<=14?w={tip:"don",px:P.x,py:P.y,sec:{...b},aci:De,don:l}:w={tip:Math.hypot(P.x-(b.x+b.w),P.y-(b.y+b.h))<K?"boyut":"tasi",px:P.x,py:P.y,sec:{...b}},f.setPointerCapture(D.pointerId),D.preventDefault()}),f.addEventListener("pointermove",D=>{if(!w)return;const P=x(D),K=P.x-w.px,$=P.y-w.py;if(w.tip==="don"){const Q={x:b.x+b.w/2,y:b.y+b.h/2},te=Math.atan2(P.y-Q.y,P.x-Q.x)*180/Math.PI;let ue=(w.don??0)+(te-(w.aci??te));ue=(ue%360+360)%360,D.shiftKey&&(ue=Math.round(ue/15)*15),l=ue,z()}else if(w.tip==="tasi")b=S({x:w.sec.x+K,y:w.sec.y+$,w:w.sec.w,h:w.sec.h});else{const Q=Math.max(w.sec.w+Math.max(K,$*a),4);b=S({x:w.sec.x,y:w.sec.y,w:Q})}A()});const R=()=>{w=null};f.addEventListener("pointerup",R),f.addEventListener("pointercancel",R),f.addEventListener("wheel",D=>{D.preventDefault();const P=D.deltaY<0?1.12:1/1.12,K=b.x+b.w/2,$=b.y+b.h/2,Q=b.w*P;b=S({x:K-Q/2,y:$-Q/a/2,w:Q}),A()},{passive:!1});const L=()=>{m&&(m.textContent=r?"Sadece seçtiğin dikdörtgen yazılır. İç astar, yanlar ve alt şerit BOŞ kalır.":"Desen kumaşın tamamına oturur: iç astar aynası ve yan/üst/alt şeritler otomatik tamamlanır.")};L(),d.querySelectorAll("[data-mod]").forEach(D=>{D.addEventListener("click",()=>{r=D.dataset.mod==="duz",d.querySelectorAll("[data-mod]").forEach(P=>P.classList.toggle("aktif",P===D)),L()})});const z=()=>{const D=d.querySelector("#kz-kirp-ayar-not"),P=d.querySelector("#kz-kirp-don"),K=Math.round(l);P&&(P.textContent=`${K}°`,P.classList.toggle("aktif",K!==0)),D&&(K===0&&!c?D.textContent="Çerçevenin üstündeki yuvarlak tutamacı fareyle çevirerek istediğin açıya getir. Fotoğrafın dışında kalan yerler pelerinde SİYAH, elitrada SAYDAM kalır.":D.textContent=`${K?K+"° döndürüldü":""}${K&&c?" · ":""}${c?"aynalandı":""} — boş kalan yerler pelerinde SİYAH, elitrada SAYDAM.`)};d.querySelector("#kz-kirp-ayna")?.addEventListener("click",D=>{c=!c,D.currentTarget.classList.toggle("aktif",c),z(),A()}),d.querySelector("#kz-kirp-don")?.addEventListener("click",D=>{l=0,D.currentTarget.classList.remove("aktif"),D.currentTarget.textContent="0°",z(),A()}),z(),d.querySelector("#kz-kirp-piksel")?.addEventListener("change",D=>{o=D.target.checked,A()});const F=()=>{document.removeEventListener("keydown",C),d.remove()},C=D=>{D.key==="Escape"&&(D.preventDefault(),F())};document.addEventListener("keydown",C);const H=d.querySelector("#kz-kirp-uygula");H?.addEventListener("click",()=>{H.disabled||(H.disabled=!0,H.textContent="Kaydediliyor…",Dw(i,e,t,{...b},r,o,c,l).then(()=>F()).catch(D=>{H.disabled=!1,H.innerHTML=`${V("check")} Uygula`,Y(String(D),"err")}))}),d.querySelector("#kz-kirp-kapat")?.addEventListener("click",F),d.querySelector("#kz-kirp-iptal")?.addEventListener("click",F),d.addEventListener("pointerdown",D=>{D.target===d&&F()}),A()}function zw(i,e,t){const n=document.createElement("canvas");n.width=Ve,n.height=kt;const a=n.getContext("2d",{willReadFrequently:!0});if(!a)throw new Error("tuval yok");a.imageSmoothingEnabled=!1,a.drawImage(t,0,0,Ve,kt);const s=qu(a);if(di(s))throw new Error("pafta boş görünüyor");const r=Dt(e);fn[e].push(r.slice()),fn[e].length>ic&&fn[e].shift(),qa[e].length=0;for(let o=0;o<zn;o++)r[o]=s[o];Gt[e]=!1,$t[e]=null,fa[e]=!1,Jn(i,e),ta(i,e),Y("Pafta okundu — 64×32 atlas yüklendi.")}async function Uw(i,e,t){try{const n=await Rw(t);if(!n)return;const a=n.width/Math.max(1,n.height);if(Math.abs(a-2)<.02&&n.height>=32&&n.height<=128){zw(i,e,n);return}Iw(i,e,n)}catch(n){Y(String(n),"err")}}async function Nw(i,e){let t;try{t=await ie("cmd_kozmetik_oku")}catch{return!1}const n=e==="pelerin"?t.pelerin_dosya:t.kanat_dosya;if(!n)return!1;const a=e==="pelerin"?t.pelerin:t.kanat;if(Array.isArray(a)&&a.length===zn&&!di(a)){const s=Dt(e);for(let r=0;r<zn;r++)s[r]=a[r]??"";Gt[e]=!1,$t[e]=null}else Gt[e]=!0,$t[e]=String(n);return e==="pelerin"?Rr=!0:Lr=!0,Jn(i,e),ta(i,e),!0}async function sc(i,e){const t=Dt(e),n=!di(t),a=e==="pelerin"?"Pelerin":"Elitra";if(Gt[e]){Y(`${a} HD fotoğraf olarak kayıtlı. Değiştirmek için yeni fotoğraf yükle.`);return}if(!n&&!fa[e]){const d=await Nw(i,e);Y(d?`${a} diskte kayıtlı — silmek için "Kaldır"ı kullan.`:`Kaydedilecek bir ${a.toLocaleLowerCase("tr")} tasarımı yok.`);return}const s=i.querySelector(`#kz-${e}-kaydet`),r=s?s.innerHTML:"",o=`${Date.now()}-${Math.random()}`,c=(d,f)=>{s&&(s.dataset.jeton=o,s.classList.remove("tamam","hata","bekliyor"),s.classList.add(f),s.textContent=d,s.disabled=!0)},l=d=>{s&&window.setTimeout(()=>{s.dataset.jeton===o&&(s.innerHTML=r,s.disabled=!1,s.classList.remove("tamam","hata","bekliyor"))},d)};c("Kaydediliyor…","bekliyor");try{const d=await Ku(e,t.slice());fa[e]=!1;try{n?localStorage.setItem(`yikim:kozmetik:${e}:yedek`,JSON.stringify(t)):localStorage.removeItem(`yikim:kozmetik:${e}:yedek`)}catch{}if(e==="pelerin"?Rr=n:Lr=n,Hf(i,e),c("Kaydedildi ✓","tamam"),l(1800),!n){Y(`${a} kaldırıldı — oyunda ${e==="kanat"?"normal elitra":"görünmeyecek"}.`);return}d.yuklendi?Y(`${a} kaydedildi — oyunda ve diğer oyuncularda görünecek.`):Y(`${a} kaydedildi (yerel). Sunucu: ${rw(d.hata||"ulaşılamadı")}`)}catch(d){c("Kaydedilemedi","hata"),l(2200),Y(String(d),"err")}}let Zr=null;function Ow(i){if(!Zr||!Zr.isConnected)return;const e=i.target;if(e&&(e.tagName==="INPUT"||e.tagName==="TEXTAREA"||e.isContentEditable)||!(i.ctrlKey||i.metaKey)||i.altKey)return;const t=i.key.toLowerCase();t==="z"&&!i.shiftKey?(i.preventDefault(),qv(Zr,Wt)):(t==="z"&&i.shiftKey||t==="y")&&(i.preventDefault(),Wv(Zr,Wt))}window.addEventListener("keydown",Ow);function Fw(){ji.home=CM,ji.instances=XM,ji.explore=sE,ji.news=mE,ji.settings=Yr,ji.skins=Mc,ji.kozmetik=ow}let ls=null;const fr=i=>i.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function Bw(){ls||(ls=document.createElement("div"),ls.className="drop-veil",ls.innerHTML=`
    <div class="drop-box">
      <div class="drop-glyph">⇣</div>
      <b>Bırak ve yükle</b>
      <span>Mod (.jar) · Mod paketi (.mrpack / CurseForge .zip) · Dünya · Doku &amp; Shader (.zip) · Emote (.emotecraft)</span>
    </div>`,document.body.appendChild(ls))}function um(){ls?.remove(),ls=null}async function Hw(i){const e=i.split(/[\\/]/).pop()||i;let t="";try{t=await ie("cmd_route_dropped",{path:i})}catch(n){Y(`Dosya tanınamadı: ${n}`,"err");return}try{if(t==="modpack"){const n=mn(`
        <h3 style="margin-bottom:6px">Mod paketi kurulacak</h3>
        <p><b>${fr(e)}</b> yeni bir kurulum olarak kurulsun mu?<br />
        <span style="font-size:11px; color:var(--text-faint)">İçindeki sürüm listesi otomatik indirilir.</span></p>
        <div style="display:flex; gap:8px; margin-top:14px; justify-content:flex-end">
          <button class="btn ghost sm" id="dp-no">İptal</button>
          <button class="btn primary sm" id="dp-go">Paketi Kur</button>
        </div>`);let a=!1;if(n.root.querySelector("#dp-no")?.addEventListener("click",()=>n.close()),n.root.querySelector("#dp-go")?.addEventListener("click",()=>{a=!0,n.close()}),await new Promise(r=>{const o=setInterval(()=>{document.body.contains(n.root)||(clearInterval(o),r())},150)}),!a){Y("Kurulum iptal edildi");return}Y("Paket indiriliyor — süreç panelinden takip edebilirsin"),Io("Sürüklenen paket kurulumu");let s="Paket";try{s=(await ie("cmd_import_pack_file",{path:i,name:null})).name||"Paket",await on(),wr(),je("instances")}catch(r){Tr(String(r))}Y(`${s} kuruldu ✓`)}else if(t==="jar"){const n=await Yu(`Mod eklenecek kurulum: <b>${fr(e)}</b>`);if(!n)return;await ie("cmd_add_content_path",{instanceId:n.id,kind:"mods",path:i});const a=n.mod_loader&&n.mod_loader!=="fabric"?" — DİKKAT: bu kurulum Fabric olmadığı için çalışmayabilir":"";Y(`Mod eklendi: ${e}${a}`,a?"err":"ok")}else if(t==="world"){const n=await Yu(`Dünya yüklenecek kurulum: <b>${fr(e)}</b>`);if(!n)return;await ie("cmd_add_content_path",{instanceId:n.id,kind:"saves",path:i}),Y(`Dünya yüklendi: ${e}`)}else if(t==="emote"){const n=await ie("cmd_import_emote_dosyasi",{path:i});Y(`Emote vitrine eklendi: ${n.adi}`)}else t==="zip"?await $w(i,e):Y(`${e} tanınmadı — .jar, .mrpack, dünya zip'i, doku/shader zip'i veya dünya klasörü bırak`,"err")}catch(n){Y(`Kurulamadı: ${n}`,"err")}}async function $w(i,e){const t=mn(`
    <h3 style="margin-bottom:6px">Bu zip nedir?</h3>
    <p><b>${fr(e)}</b> ne tür bir içerik?</p>
    <div style="display:flex; flex-direction:column; gap:8px; margin-top:14px">
      <button class="btn ghost" data-k="resourcepacks">Doku Paketi</button>
      <button class="btn ghost" data-k="shaderpacks">Shader</button>
      <button class="btn ghost" data-k="saves_zip">Dünya (zip açılır → dünyalar)</button>
      <button class="btn ghost" id="dp-cancel">İptal</button>
    </div>`);let n="";if(t.root.querySelectorAll("[data-k]").forEach(s=>s.addEventListener("click",()=>{n=s.dataset.k||"",t.close()})),t.root.querySelector("#dp-cancel")?.addEventListener("click",()=>t.close()),await new Promise(s=>{const r=setInterval(()=>{document.body.contains(t.root)||(clearInterval(r),s())},150)}),!n)return;const a=await Yu(n==="saves_zip"?"Dünya yüklenecek kurulum":"İçerik eklenecek kurulum");a&&(await ie("cmd_add_content_path",{instanceId:a.id,kind:n,path:i}),Y(`Eklendi: ${e}`))}function Yu(i){return new Promise(e=>{const t=le.instances||[];if(!t.length){Y("Önce Paketler sekmesinde bir kurulum oluştur","err"),e(null);return}if(t.length===1){e(t[0]);return}const n=mn(`
      <h3 style="margin-bottom:6px">${i}</h3>
      <p style="font-size:11px; color:var(--text-faint)">Kurulum seç</p>
      <div class="inst-pick">
        ${t.map(s=>`
          <button class="btn ghost" data-id="${s.id}">
            <span style="font-size:18px">${s.icon||"📦"}</span>
            <span style="flex:1; text-align:left; overflow:hidden; text-overflow:ellipsis; white-space:nowrap">${fr(String(s.name))}</span>
            <span style="font-size:11px; color:var(--text-faint)">${fr(String(s.mc_version||""))}</span>
          </button>`).join("")}
      </div>`);n.root.querySelectorAll("[data-id]").forEach(s=>{s.addEventListener("click",()=>{const r=t.find(o=>o.id===s.dataset.id)||null;n.close(),e(r)})});const a=setInterval(()=>{document.body.contains(n.root)||(clearInterval(a),e(null))},150)})}function Gw(){try{const i=window.__TAURI__?.window?.getCurrentWindow?.();if(!i?.onDragDropEvent)return;i.onDragDropEvent(async e=>{const t=e?.payload??e??{},n=t.type;if(n==="enter"||n==="over")Bw();else if(n==="drop"){um();const a=t.paths||[];for(const s of a)await Hw(s)}else um()})}catch{}}const Il=[{page:"home",sel:null,title:"YIKIMLient'e hoş geldin",text:"60 saniyede öğrenelim — İleri'ye tıkladıkça her sekme animasyonla gösterilecek."},{page:"home",sel:'.rail-item[data-page="home"]',title:"Ana Sayfa",text:"Kurulumunu seç, Oyna'ya bas — saniyeler içinde oyundasın. Sınırsız FPS ve Agresif ayarlar otomatik hazırdır."},{page:"instances",sel:'.rail-item[data-page="instances"]',title:"Paketler",text:"Kurulumlarını yönettiğin yer: modlar, dünyalar, doku & shader'lar. Bonus: dosyayı bu ekrana sürükleyip bırak — mod, paket, dünya, hepsi otomatik kurulur."},{page:"explore",sel:'.rail-item[data-page="explore"]',title:"Keşfet",text:"Modrinth & CurseForge içinde arama: mod, mod paketi, doku, shader, dünya — tek tıkla seçili kuruluma iner."},{page:"news",sel:'.rail-item[data-page="news"]',title:"Haberler",text:"YIKIMLient duyuruları ve Minecraft haberleri burada."},{page:"settings",sel:'.rail-item[data-page="settings"]',title:"Ayarlar",text:"Görsel dünyalar (5 tema!), Discord Rich Presence, Java profilleri (Agresif FPS dahil), RAM — hepsi burada."},{page:"home",sel:null,title:"Hazırsın!",text:"İyi oyunlar — YIKIM hep HIZ. Bu rehber artık gösterilmeyecek."}];let Pd=null;function Vw(i,e){const t=window.innerWidth,n=window.innerHeight,a=e.offsetWidth,s=e.offsetHeight,r=c=>Math.max(12,Math.min(c,t-a-12)),o=c=>Math.max(14,Math.min(c,n-s-14));if(i){const c=i.right+16,l=i.left-16-a;let d;c+a<=t-12?d=c:l>=12?d=l:d=(t-a)/2;let f=i.top+i.height/2-s/2;f<14&&(f=i.bottom+16),e.style.left=`${r(d)}px`,e.style.top=`${o(f)}px`,e.style.transform="none"}else e.style.left=`${Math.max(12,(t-a)/2)}px`,e.style.top=`${o((n-s)/2)}px`,e.style.transform="none"}function fm(i,e){const t=Il[e],n=i.querySelector(".spot"),a=i.querySelector(".tc");je(t.page);const s=a.querySelector(".tc-step");s.innerHTML=Il.map((c,l)=>`<i class="${l<=e?"done":""}"></i>`).join(""),a.querySelector("h3").textContent=t.title,a.querySelector("p").textContent=t.text;const r=a.querySelector(".tc-next");r.textContent=e===Il.length-1?"Tamam ✓":"İleri →";let o=null;if(t.sel){const c=document.querySelector(t.sel);c&&(o=c.getBoundingClientRect())}o?(n.style.opacity="1",n.style.left=`${o.left-6}px`,n.style.top=`${o.top-6}px`,n.style.width=`${o.width+6*2}px`,n.style.height=`${o.height+6*2}px`):n.style.opacity="0",Vw(o,a),oa.fromTo(a,{y:14,autoAlpha:0},{y:0,autoAlpha:1,duration:.38,ease:"power3.out",clearProps:"transform"})}function qw(){if(Pd||le.config?.guided_tour_done)return;const i=document.createElement("div");i.className="yikim-tour",i.innerHTML=`
    <div class="spot"></div>
    <div class="tc">
      <span class="tc-step"></span>
      <h3></h3>
      <p></p>
      <div class="tc-actions">
        <button class="btn ghost sm tc-skip">Atla</button>
        <button class="btn primary sm tc-next">İleri →</button>
      </div>
    </div>`,document.body.appendChild(i),Pd=i;let e=0;const t=async()=>{i.remove(),Pd=null,document.removeEventListener("keydown",a),je("home");try{le.config={...le.config,guided_tour_done:!0},await ie("cmd_save_settings",{config:le.config}),await on()}catch{}},n=()=>{if(e+=1,e>=Il.length){t();return}fm(i,e)},a=s=>{s.key==="Enter"||s.key==="ArrowRight"?(s.preventDefault(),n()):s.key==="Escape"&&(s.preventDefault(),t())};document.addEventListener("keydown",a),i.querySelector(".tc-skip")?.addEventListener("click",()=>void t()),i.querySelector(".tc-next")?.addEventListener("click",n),fm(i,e)}let ar=null,zl=null;function rs(){zl!==null&&(clearInterval(zl),zl=null)}function hm(i){return i.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}async function Zu(){try{le.config={...le.config,onboarding_done:!0},await ie("cmd_save_settings",{config:le.config}),await on()}catch{}}function Dd(i){rs(),ar?.remove(),ar=null,Zu(),je("home")}function Ww(){if(ar)return!0;if(le.config?.onboarding_done)return!1;if(!(le.accounts.length===0&&le.instances.length===0))return Zu(),!1;const e=document.createElement("div");e.className="yikim-ob",e.innerHTML='<div class="ob-card"></div>',document.body.appendChild(e),ar=e;const t=e.querySelector(".ob-card"),n=u=>`<div class="ob-dots">${[0,1,2,3,4].map(h=>`<i class="${h<=u?"done":""}"></i>`).join("")}</div>`,a=u=>`
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
    `,t.querySelector("#ob-skip")?.addEventListener("click",()=>Dd()),t.querySelector("#ob-next")?.addEventListener("click",r)}function r(){rs(),t.innerHTML=`
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
    `,t.querySelector("#ob-back")?.addEventListener("click",()=>{rs(),s()}),t.querySelector("#ob-skip")?.addEventListener("click",()=>Dd());const u=t.querySelector("#ob-acc-ok"),h=t.querySelector("#ob-next"),v=t.querySelector("#ob-ms-durum"),m=t.querySelector("#ob-off-uyari"),p=t.querySelector("#ob-ms"),g=t.querySelector("#ob-off-go"),y=t.querySelector("#ob-off-ad"),T=S=>{u.style.display="flex",u.textContent=`✓ Hesap hazır: ${S}`,h.disabled=!1,rs()};le.accounts.length?T(le.accounts[0]?.name??""):h.disabled=!0,p.addEventListener("click",async()=>{if(!p.disabled){p.disabled=!0,v.style.display="block",v.innerHTML='<span class="spinner"></span> Microsoft oturum penceresi açılıyor…';try{const S=await ie("cmd_ms_login_begin");await on(),v.textContent="",v.style.display="none",T(S?.name??le.accounts[0]?.name??"")}catch(S){v.textContent=String(S),p.disabled=!1}}});const b=async()=>{if(g.disabled)return;const S=y.value.trim();if(S.length<3){m.textContent="İsim en az 3 karakter olmalı.",y.focus();return}m.textContent="",g.disabled=!0,g.textContent="…";try{await ie("cmd_add_offline_account",{name:S}),await on(),T(S),g.textContent="✓"}catch(E){m.textContent=String(E),g.disabled=!1,g.textContent="Giriş"}};g.addEventListener("click",()=>void b()),y.addEventListener("keydown",S=>{S.key==="Enter"&&(S.preventDefault(),b())}),zl=setInterval(()=>{le.accounts.length&&T(le.accounts[0]?.name??"")},600),h.addEventListener("click",()=>{rs(),o()})}function o(){rs(),cs(),t.innerHTML=`
      ${n(2)}
      <div class="ob-step-label">3 / 5 — Doğrulama</div>
      <h2 style="font-size:16px">Hesabını doğrula</h2>
      <p class="ob-sub" style="margin-bottom:10px">
        Discord ile bağla, şifre oluştur. Doğrulanmayan hesap da oynar;
        yalnız kozmetik/skin değiştiremez (adının başında ✕ görünür).
      </p>
      <div id="ob-gv"></div>
      ${a({back:!0,next:"İleri →",nextId:"ob-next",skip:"Şimdi değil",skipId:"ob-skip"})}
    `;const u=t.querySelector("#ob-gv");u&&ds(u),t.querySelector("#ob-back")?.addEventListener("click",()=>{cs(),r()}),t.querySelector("#ob-skip")?.addEventListener("click",()=>{cs(),c()}),t.querySelector("#ob-next")?.addEventListener("click",()=>{cs(),c()})}async function c(){let u=[];try{u=(await ie("cmd_list_versions")).all?.slice(0,80)??[]}catch{}t.innerHTML=`
      ${n(3)}
      <div class="ob-step-label">4 / 5 — İlk paket</div>
      <h2 style="font-size:16px">İlk oyun dünyasını oluştur</h2>
      <p class="ob-sub" style="margin-bottom:8px">Fabric + YIKIM çekirdeği otomatik; standart FPS modları dahil.</p>
      <label class="ob-lab">Paket adı</label>
      <input class="input" id="ob-name" value="Yeni Kurulum" maxlength="40" />
      <label class="ob-lab">Minecraft sürümü</label>
      <select class="input" id="ob-version">
        ${u.map(v=>`<option value="${hm(v)}">${hm(v)}</option>`).join("")||'<option value="1.21.11">1.21.11</option>'}
      </select>
      <div class="ob-ok" id="ob-inst-ok" style="display:none"></div>
      ${a({back:!0,next:"Kurulum Oluştur",nextId:"ob-create"})}
      <button class="btn ghost sm" id="ob-explore" style="width:100%; margin-top:10px">
        Ya da hazır mod paketi indir (Keşfet)
      </button>
    `,t.querySelector("#ob-back")?.addEventListener("click",o);let h=null;t.querySelector("#ob-create")?.addEventListener("click",async v=>{const m=v.currentTarget;m.disabled=!0,m.innerHTML='<span class="spinner"></span> Oluşturuluyor…';const p=t.querySelector("#ob-name").value.trim()||"Yeni Kurulum",g=t.querySelector("#ob-version").value;try{h=await ie("cmd_create_instance",{instance:{name:p,mc_version:g,mod_loader:"fabric",ram_mb:le.config?.default_ram_mb||4096,java_preset_id:le.config?.default_java_preset||"balanced",standard_mods:!0}});const y=t.querySelector("#ob-inst-ok");y.style.display="flex",y.textContent=`✓ Kurulum hazır: ${h.name}`,m.textContent="✓ Oluşturuldu",await on(),setTimeout(()=>l(),700)}catch(y){f(`Kurulum oluşturulamadı: ${y}`),m.disabled=!1,m.textContent="Kurulum Oluştur"}}),t.querySelector("#ob-explore")?.addEventListener("click",()=>{d()})}function l(){t.innerHTML=`
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
    `,t.querySelector("#ob-done")?.addEventListener("click",()=>Dd())}return s(),!0;function d(){rs(),ar?.remove(),ar=null,Zu(),je("explore","kind:modpack")}function f(u){pt(()=>Promise.resolve().then(()=>Et),void 0).then(h=>h.toast(u,"err"))}}const Es=Math.PI*2;function rc(){return getComputedStyle(document.documentElement).getPropertyValue("--accent").trim()||"#ff7a18"}function Xw(i,e){const t=i.match(/^#?([0-9a-f]{6})$/i);if(!t)return i;const n=parseInt(t[1],16);return`rgba(${Math.round((n>>16&255)*e)},${Math.round((n>>8&255)*e)},${Math.round((n&255)*e)},1)`}function Tc(i,e){i.fillStyle=e.hue,i.beginPath(),i.arc(e.x,e.y,e.r,0,Es),i.fill()}function pm(i,e){const t=e?Xw(rc(),.88):rc(),n=a=>({x:Math.random()*a[0],y:a[1]+10,vx:(Math.random()-.5)*12,vy:-(28+Math.random()*44)*(e?.75:1),r:e?2.6:1.2+Math.random()*1.6,a:.95,life:0,max:6+Math.random()*5,hue:t,seed:Math.random()*Es});return{base:e?24:30,spawn:n,step:(a,s,r)=>{a.x+=(a.vx+Math.sin(a.seed+a.life*2.1)*9)*s*(1+i*s),a.y+=a.vy*s,a.a=Math.max(0,1-a.life/a.max*1.05),(a.y<-12||a.a<=0)&&Object.assign(a,n(r))},draw:Tc}}function Id(i){const e=t=>({x:Math.random()*t[0],y:Math.random()*t[1],vx:(Math.random()-.5)*7,vy:(Math.random()-.5)*7,r:.9+Math.random()*1.5,a:.3,life:0,max:9+Math.random()*8,hue:i,seed:Math.random()*Es});return{base:26,spawn:e,step:(t,n,a)=>{t.x+=t.vx*n,t.y+=t.vy*n,t.x<-8&&(t.x=a[0]+8),t.x>a[0]+8&&(t.x=-8),t.y<-8&&(t.y=a[1]+8),t.y>a[1]+8&&(t.y=-8),t.a=.16+.4*Math.sin(t.life/t.max*Math.PI),t.life>t.max&&Object.assign(t,e(a))},draw:Tc}}function Kw(){const i=e=>({x:Math.random()*e[0],y:-8,vx:(Math.random()-.5)*8,vy:13+Math.random()*24,r:1+Math.random()*2.6,a:.8,life:0,max:20,hue:"#ffffff",seed:Math.random()*Es});return{base:36,spawn:i,step:(e,t,n)=>{e.x+=(e.vx+Math.sin(e.seed+e.life*1.2)*11)*t,e.y+=e.vy*t,e.y>n[1]+10&&Object.assign(e,i(n))},draw:Tc}}function Yw(){const i=rc(),e=t=>({x:Math.random()*t[0],y:t[1]+10,vx:(Math.random()-.5)*9,vy:-(18+Math.random()*26),r:1.4+Math.random()*2.6,a:.5,life:0,max:14,hue:i,seed:Math.random()*Es});return{base:16,spawn:e,step:(t,n,a)=>{t.x+=(t.vx+Math.sin(t.seed+t.life*2.2)*7)*n,t.y+=t.vy*n,t.vy-=2.5*n,t.y<-14&&Object.assign(t,e(a))},draw:(t,n)=>{t.strokeStyle=n.hue,t.lineWidth=1,t.beginPath(),t.arc(n.x,n.y,n.r*1.7,0,Es),t.stroke()}}}function Zw(){const i=rc(),e=t=>({x:Math.random()*t[0],y:Math.random()*-t[1],vx:0,vy:170+Math.random()*260,r:1,a:.4+Math.random()*.4,life:0,max:30,hue:i,seed:0});return{base:20,spawn:e,step:(t,n,a)=>{t.y+=t.vy*n,t.y>a[1]+40&&Object.assign(t,e(a))},draw:(t,n)=>{t.strokeStyle=n.hue,t.lineWidth=n.a*1.3,t.beginPath(),t.moveTo(n.x,n.y),t.lineTo(n.x,n.y-14-n.a*16),t.stroke()}}}function gl(i){return{base:24,spawn:t=>({x:Math.random()*t[0],y:Math.random()*t[1],vx:0,vy:0,r:.8+Math.random()*1.3,a:0,life:Math.random()*4,max:2.6+Math.random()*3.4,hue:i,seed:Math.random()*Es}),step:(t,n,a)=>{t.a=Math.max(0,Math.sin(t.life/t.max*Math.PI))*.9,t.life>t.max&&(t.life=0)},draw:Tc}}function Jw(i){switch(i){case"pano":return pm(.5,!1);case"sahne":return gl("rgba(255,171,77,0.75)");case"sokum":return pm(.9,!0);case"afis":return Id("rgba(63,50,38,0.5)");case"standart":return gl("rgba(147,168,255,0.5)");case"sira":return gl("rgba(163,230,53,0.85)");case"rihtim":return Yw();case"oda":return Id("rgba(224,48,30,0.6)");case"kumas":return Id("rgba(138,122,92,0.5)");case"perde":return gl("rgba(212,175,55,0.8)");case"buz":return Kw();case"skala":return Zw();default:return null}}let qn=null,Pi=null,Ta=null,js=[],yn=0,oo=0,Jv=1,jv=33,Ac=!1;function Gf(){return Math.min(window.devicePixelRatio||1,1.5)}function zd(){yn&&cancelAnimationFrame(yn),yn=0,Ta=null,js=[],qn&&(qn.remove(),qn=null,Pi=null)}function oc(i){if(yn=0,!Pi||!qn||!Ta||Ac||document.hidden)return;if(i-oo<jv){yn=requestAnimationFrame(oc);return}const e=Math.min((i-oo)/1e3,.06);oo=i,yn=requestAnimationFrame(oc);const t=Gf();Pi.setTransform(t,0,0,t,0,0),Pi.clearRect(0,0,window.innerWidth,window.innerHeight);const n=[window.innerWidth,window.innerHeight],a=Math.max(1,Math.round(Ta.base*Jv));for(;js.length<a;){const s=Ta.spawn(n);s.life=Math.random()*s.max,js.push(s)}for(;js.length>a;)js.pop();for(const s of js)s.life+=e,Ta.step(s,e,n),Pi.globalAlpha=s.a,Ta.draw(Pi,s);Pi.globalAlpha=1}function Qv(){Ta&&Pi&&!yn&&!document.hidden&&!Ac&&(oo=performance.now(),yn=requestAnimationFrame(oc))}document.addEventListener("visibilitychange",()=>{document.hidden?(yn&&cancelAnimationFrame(yn),yn=0):Qv()});window.addEventListener("blur",()=>{Ac=!0,yn&&cancelAnimationFrame(yn),yn=0});window.addEventListener("focus",()=>{Ac=!1,Qv()});window.addEventListener("resize",()=>{if(!qn||!Pi)return;const i=Gf();qn.width=Math.round(innerWidth*i),qn.height=Math.round(innerHeight*i)});function jw(){const i=String(le.config?.fx_particles??"mid"),e=document.documentElement.getAttribute("data-world")||"pano",t=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(i==="none"||t){zd();return}const n=Jw(e);if(!n){zd();return}Jv={low:.45,mid:.9,high:1.6}[i]??1,jv=1e3/({low:25,mid:30,high:40}[i]??30),zd(),Ta=n;const r=Gf();qn=document.createElement("canvas"),qn.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:3",qn.width=Math.round(innerWidth*r),qn.height=Math.round(innerHeight*r),document.body.appendChild(qn),Pi=qn.getContext("2d"),oo=performance.now(),yn=requestAnimationFrame(oc)}function Qw(){return getComputedStyle(document.documentElement).getPropertyValue("--accent").trim()||"#ff7a18"}function eT(i){return`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M4 2 L18 13.5 L11.2 14.2 L15.6 21.2 L12.8 22.8 L8.6 15.8 L4 19.4 Z" fill="${i}" stroke="#ffffff" stroke-opacity="0.72" stroke-width="1.6" stroke-linejoin="round"/></svg>`}function tT(i){return`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><circle cx="12" cy="12" r="7.2" fill="none" stroke="${i}" stroke-width="2"/><circle cx="12" cy="12" r="1.7" fill="${i}"/><path d="M12 1.6 V5.2 M12 18.8 V22.4 M1.6 12 H5.2 M18.8 12 H22.4" stroke="${i}" stroke-width="2"/></svg>`}function nT(i){return`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><circle cx="8" cy="8" r="3.2" fill="${i}" stroke="#ffffff" stroke-opacity="0.8" stroke-width="1.2"/></svg>`}const iT={yikim:{build:eT,spot:"3 2"},hedef:{build:tT,spot:"12 12"},nokta:{build:nT,spot:"8 8"}};function aT(){const i=String(le.config?.cursor_style||"standart"),e=document.documentElement,t=iT[i];if(!t){e.removeAttribute("data-custom-cursor"),e.style.removeProperty("--yikim-cursor");return}const n=t.build(Qw());e.style.setProperty("--yikim-cursor",`url("data:image/svg+xml,${encodeURIComponent(n)}") ${t.spot}, auto`),e.setAttribute("data-custom-cursor","1")}const et=`xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
  stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"`,sT=`<svg ${et}><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M10 21v-6h4v6"/></svg>`,rT=`<svg ${et}><rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/></svg>`,oT=`<svg ${et}><circle cx="12" cy="12" r="9"/><path d="m15.2 8.8-1.9 4.5-4.5 1.9 1.9-4.5z"/></svg>`,lT=`<svg ${et}><path d="M4 6.5A1.5 1.5 0 0 1 5.5 5h13A1.5 1.5 0 0 1 20 6.5v11a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5z"/><path d="M8 9h5v5H8z"/><path d="M16 9h1M16 12h1M16 15h1M8 16.5h5"/></svg>`,cT=`<svg ${et}><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>`,dT=`<svg ${et}><path d="M12 5v14M5 12h14"/></svg>`,uT=`<svg ${et}><circle cx="11" cy="11" r="7"/><path d="m20.5 20.5-4.2-4.2"/></svg>`,fT='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8.5 5.9v12.2a.8.8 0 0 0 1.22.68l9.87-6.1a.8.8 0 0 0 0-1.36L9.72 5.22A.8.8 0 0 0 8.5 5.9Z"/></svg>',hT=`<svg ${et}><rect x="3.5" y="4.5" width="17" height="15" rx="2"/><circle cx="9" cy="10" r="1.6"/><path d="m3.5 16 4.4-4.4a1.4 1.4 0 0 1 2 0l4.6 4.4"/><path d="m13.6 15 2.3-2.3a1.4 1.4 0 0 1 2 0l2.6 2.5"/></svg>`,pT=`<svg ${et}><path d="M3.5 7.5v10a1.5 1.5 0 0 0 1.5 1.5h13.6a1.5 1.5 0 0 0 1.4-1l1.6-4.5a1 1 0 0 0-.94-1.35H7.2a2 2 0 0 0-1.9 1.37L3.5 17.5"/><path d="M3.5 7.5v-2A1.5 1.5 0 0 1 5 4h4l1.6 2H19a1.5 1.5 0 0 1 1.5 1.5v2"/></svg>`,mT=`<svg ${et}><path d="M4 7h16M9.5 4h5M6.5 7l.8 12a1.5 1.5 0 0 0 1.5 1.4h6.4a1.5 1.5 0 0 0 1.5-1.4l.8-12"/><path d="M10 11v6M14 11v6"/></svg>`,gT=`<svg ${et}><path d="m7 20.5-3.8-3.8a2 2 0 0 1 0-2.8l9.4-9.4a2 2 0 0 1 2.8 0l4.8 4.8a2 2 0 0 1 0 2.8l-8.4 8.4z"/><path d="M21.5 20.5H8.5"/><path d="m5.5 11.5 8.5 8.5"/></svg>`,vT=`<svg ${et}><rect x="9" y="9" width="11.5" height="11.5" rx="2"/><path d="M5.5 15H4.5A1.5 1.5 0 0 1 3 13.5v-9A1.5 1.5 0 0 1 4.5 3h9A1.5 1.5 0 0 1 15 4.5v1"/></svg>`,_T=`<svg ${et}><path d="M19 12H5M11 18l-6-6 6-6"/></svg>`,yT=`<svg ${et}><path d="m4.5 12.5 5 5 10-11"/></svg>`,xT=`<svg ${et}><circle cx="12" cy="8" r="4"/><path d="M4.5 20.5c.8-3.7 3.9-6 7.5-6s6.7 2.3 7.5 6"/></svg>`,bT=`<svg ${et}><path d="M10 4.5A1.5 1.5 0 0 1 11.5 3h1A1.5 1.5 0 0 1 14 4.5V6h4.5A1.5 1.5 0 0 1 20 7.5V11h-1.5a1.5 1.5 0 0 0 0 3H20v3.5a1.5 1.5 0 0 1-1.5 1.5H14v-1.5a1.5 1.5 0 0 0-3 0V20H6.5A1.5 1.5 0 0 1 5 18.5V15H3.5a1.5 1.5 0 0 1 0-3H5V7.5A1.5 1.5 0 0 1 6.5 6H10z"/></svg>`,ST=`<svg ${et}><path d="m12 3 8.5 4.5v9L12 21l-8.5-4.5v-9z"/><path d="M3.5 7.5 12 12l8.5-4.5M12 12v9"/></svg>`,kT=`<svg ${et}><rect x="6" y="6" width="12" height="12" rx="1.5"/><rect x="9.5" y="9.5" width="5" height="5" rx="1"/><path d="M9 2.5V6M15 2.5V6M9 18v3.5M15 18v3.5M2.5 9H6M2.5 15H6M18 9h3.5M18 15h3.5"/></svg>`,MT=`<svg ${et}><path d="M15 12h-5M15 8h-5M19 17V5a2 2 0 0 0-2-2H4"/><path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"/></svg>`,ET=`<svg ${et}><rect x="3" y="4.5" width="18" height="15" rx="2"/><path d="m7 9.5 3 3-3 3M12.5 15.5H17"/></svg>`,wT=`<svg ${et}><path d="M5 20V10M12 20V4M19 20v-7"/></svg>`,TT=`<svg ${et}><path d="M12 4v11M7.5 11.5 12 16l4.5-4.5"/><path d="M4 20h16"/></svg>`,AT=`<svg ${et}><path d="M10 2v2M14 2v2M6 2v2"/><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"/></svg>`,RT=`<svg ${et}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>`,LT=`<svg ${et}><path d="M10 4.5 11.5 9l4.5 1.5L11.5 12 10 16.5 8.5 12 4 10.5 8.5 9z"/><path d="m18 15.5.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z"/></svg>`,CT=`<svg ${et}><path d="M13.5 3H6.5A1.5 1.5 0 0 0 5 4.5v15A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5V8.5z"/><path d="M13.5 3v5.5H19"/></svg>`,PT=`<svg ${et}><circle cx="12" cy="12" r="9"/><path d="M12 16v-4.5"/><circle cx="12" cy="8" r="1"/></svg>`,DT=`<svg ${et}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.2 2"/></svg>`,IT=`<svg ${et}><rect x="6.5" y="6.5" width="11" height="11" rx="1.5"/></svg>`,zT=`<svg ${et}><path d="M8.5 3 5 4.8 3 10l3.2 1.4.8-1.7V21h10V9.7l.8 1.7L21 10l-2-5.2L15.5 3a3.5 3.5 0 0 1-7 0z"/></svg>`,UT=`<svg ${et}><path d="m14.5 4.5 5 5L9 20H4v-5z"/><path d="m12.5 6.5 5 5"/></svg>`,NT=`<svg ${et}><path d="M4.5 11.5 11 5l7 7-6.5 6.5z"/><path d="M7 9 5 7"/><path d="M19 14.5s2 2.2 2 3.5a2 2 0 1 1-4 0c0-1.3 2-3.5 2-3.5z"/></svg>`,OT=`<svg ${et}><path d="m14 6 4 4"/><path d="M11.5 8.5 4 16v4h4l7.5-7.5"/><path d="m17 3 4 4-2.5 2.5-4-4z"/></svg>`,FT=`<svg ${et}><path d="M9 14 4 9l5-5"/><path d="M4 9h9a6 6 0 0 1 0 12h-3"/></svg>`,BT=`<svg ${et}><path d="m15 14 5-5-5-5"/><path d="M20 9h-9a6 6 0 0 0 0 12h3"/></svg>`,HT=`<svg ${et}><rect x="4.5" y="10.5" width="15" height="10" rx="2"/><path d="M8 10.5V7a4 4 0 0 1 8 0v3.5"/></svg>`,$T=`<svg ${et}><circle cx="6" cy="12" r="2.5"/><circle cx="17" cy="6" r="2.5"/><circle cx="17" cy="18" r="2.5"/><path d="M8.2 10.8 14.8 7.2M8.2 13.2l6.6 3.6"/></svg>`,lc={home:sT,grid:rT,compass:oT,news:lT,gear:cT,plus:dT,search:uT,play:fT,image:hT,folder:pT,trash:mT,eraser:gT,copy:vT,back:_T,check:yT,user:xT,puzzle:bT,box:ST,cpu:kT,args:MT,term:ET,chart:wT,dl:TT,mug:AT,globe:RT,sparkle:LT,file:CT,info:PT,clock:DT,stop:IT,shirt:zT,brush:UT,bucket:NT,picker:OT,undo:FT,redo:BT,lock:HT,share:$T};function V(i,e=""){const t=lc[i]||lc.info;return e?`<span class="ic ${e}">${t}</span>`:`<span class="ic">${t}</span>`}const vl='xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1"',_l=i=>`<g transform="translate(7 7) scale(0.66667)">${i}</g>`,Zs={min:`<svg ${vl}>${_l('<path d="M0 5.125h10"/>')}</svg>`,max:`<svg ${vl}>${_l('<rect x="0.5" y="0.5" width="9" height="9"/>')}</svg>`,restore:`<svg ${vl}>${_l('<rect x="0.5" y="2.5" width="7" height="7"/><path d="M2.5 2.5V0.5h7v7h-2"/>')}</svg>`,close:`<svg ${vl}>${_l('<path d="m0.43 0.43 9.14 9.14M9.57 0.43 0.43 9.57"/>')}</svg>`,bell:'<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2.5a5 5 0 0 0-5 5v3.2L4 13.2h12l-1-2.5V7.5a5 5 0 0 0-5-5Z"/><path d="M7.6 15.4a2.6 2.6 0 0 0 1.4 1.4 2.6 2.6 0 0 0 3.2-1.4"/></svg>'},hr=window.__TAURI__,GT=hr.core,VT=hr.event,ie=(i,e={})=>GT.invoke(i,e),xt=i=>window.__TAURI_INTERNALS__.convertFileSrc(i),xn=(i,e)=>VT.listen(i,e);window.__iconFallback=(i,e,t)=>{const n=document.createElement("span");n.className=e,n.innerHTML=lc[t]||lc.info,i.replaceWith(n)};const Wa=i=>ie("plugin:opener|open_url",{url:i}),e0=i=>ie("plugin:opener|open_path",{path:i}),le={config:null,accounts:[],instances:[],featured_versions:[],curseforge:!1,sys:null};async function on(i=!1){const e=await ie("cmd_get_state");le.config=e.config,le.accounts=e.accounts,le.instances=e.instances,le.featured_versions=e.featured_versions,le.curseforge=e.curseforge,le.sys=e.sys,Di(),await sr(!0),Cc(),i&&je(Vf)}const mm=Cc;function Di(){if(!le.config)return;const i=le.config.theme,e=document.documentElement,n=i==="custom"?"pano":({dark:"standart",neon:"pano",light:"pano",orange:"sahne",anons:"pano"}[i]??i)||"sahne",a=(le.config.tema_ozel||{})[n]||{},s=n==="sahne"?le.config.custom_accent:"",r=String(a.accent||s||"").trim();e.setAttribute("data-world",n),r&&/^#[0-9a-fA-F]{3,8}$/.test(r)?(e.setAttribute("data-world-custom","1"),e.style.setProperty("--custom-accent",r)):(e.removeAttribute("data-world-custom"),e.style.removeProperty("--custom-accent"));const o=String(a.radius||"");o==="keskin"||o==="yumusak"||o==="hap"?e.setAttribute("data-radius",o):e.removeAttribute("data-radius"),jw(),aT()}const qT=Di;function bn(){return le.accounts.find(i=>i.id===le.config?.last_selected_account)||le.accounts[0]||null}function Rc(i){return`https://mc-heads.net/avatar/${encodeURIComponent(i.name)}/64`}function t0(i){const e=encodeURIComponent(i.name);return i.kind==="microsoft"?`https://visage.surgeplay.com/head/64/${e}`:`https://crafatar.com/avatars/${i.uuid}?overlay&size=64`}function Lc(i){const e=t0(i),t=i.kind==="microsoft"?`https://crafatar.com/avatars/${i.uuid}?overlay&size=64`:"";return`onerror="if(!this.dataset.fb){this.dataset.fb=1;this.src='${e}'}${t?`else if(this.dataset.fb==1){this.dataset.fb=2;this.src='${t}'}`:""}else{this.style.visibility='hidden'}"`}function WT(){const i=document.getElementById("pill-ram");if(!i||!le.sys)return;const t=le.instances[0]?.ram_mb||le.config?.default_ram_mb||4096,n=le.sys.total_ram_mb||16384,a=Math.min(100,Math.round(t/n*100)),s=i.querySelector("#ram-pill-val"),r=`${(t/1024).toFixed(1)} GB`;s?N_(s,r):i.innerHTML=`RAM <b id="ram-pill-val">${r}</b>&nbsp;/ ${(n/1024).toFixed(0)} GB
    <span class="ram-bar"><span style="transform:scaleX(${a/100})"></span></span>`;const o=i.querySelector(".ram-bar > span");o&&(o.style.transform=`scaleX(${a/100})`)}const yi=i=>document.querySelector(i);function hi(i){const e=document.createElement("template");return e.innerHTML=i.trim(),e.content.firstElementChild}function Fo(i){if(!i)return"0 B";const e=["B","KB","MB","GB"],t=Math.min(Math.floor(Math.log(i)/Math.log(1024)),3);return`${(i/1024**t).toFixed(t?1:0)} ${e[t]}`}function pr(i){const e=Math.floor(i/6e4);if(e<60)return`${e} dk`;const t=Math.floor(e/60),n=e%60;return t<24?n?`${t} sa ${n} dk`:`${t} sa`:`${Math.floor(t/24)} gün ${t%24} sa`}function XT(i){return i>0?`${(i/1048576).toFixed(1)} MB/s`:""}function lo(i="ok",e=""){return`<span class="lamp ${i} ${e}" aria-hidden="true"></span>`}const Je={activeId:null};function Y(i,e="ok"){const t=hi(`<div class="toast ${e}" role="status">${i}</div>`);document.body.appendChild(t),setTimeout(()=>t.classList.add("show"),10),setTimeout(()=>{t.classList.remove("show"),setTimeout(()=>t.remove(),300)},3200)}const Br=[];function mn(i){const e=hi(`<div class="modal-backdrop"><div class="modal" role="dialog" aria-modal="true">${i}</div></div>`);document.body.appendChild(e),Br.push(e);let t=!1;const n=()=>{if(t)return;t=!0,window.removeEventListener("keydown",a);const s=Br.indexOf(e);s>=0&&Br.splice(s,1),e.remove()},a=s=>{s.key==="Escape"&&Br[Br.length-1]===e&&(s.preventDefault(),s.stopPropagation(),n())};return window.addEventListener("keydown",a),e.addEventListener("click",s=>{s.target===e&&n()}),requestAnimationFrame(()=>{e.querySelector("input, button, select, textarea, [tabindex]")?.focus()}),{root:e.firstElementChild,close:n}}const ji={},Hn={};let gm="home",Vf="home";function je(i,e){const t=yi("#content");t&&(Vf=i,gm=i,Hn.param=e,document.querySelectorAll(".rail-item").forEach(n=>{n.classList.toggle("active",n.dataset.page===gm)}),O_(t,()=>{t.innerHTML="";const n=ji[i];n&&n(t),vg(t)}))}const KT=[{page:"home",icon:"home",label:"Ana Sayfa"},{page:"instances",icon:"grid",label:"Mod Paketleri"},{page:"explore",icon:"compass",label:"Keşfet"},{page:"news",icon:"news",label:"Haberler"},{page:"skins",icon:"shirt",label:"Skin Merkezi"},{page:"kozmetik",icon:"sparkle",label:"Kozmetikler"},{page:"settings",icon:"gear",label:"Ayarlar"}];function n0(){const i=yi("#app");if(!i)return;i.innerHTML=`
    <div class="titlebar">
      <div class="brand">
        <img class="logo-img" src="/logo.png" draggable="false" />
        <span><span class="brand-word">YIKIM</span><span class="brand-suffix">Lient</span></span>
      </div>
      <div class="tb-center"></div>
      <div class="tb-actions">
        <button class="tb-btn tb-pack" id="tb-pack" title="Kurulum durumu (mod paketi)" aria-label="Kurulum durumu">${Zs.bell}<span class="tb-pack-dot" id="tb-pack-dot"></span></button>
        <button class="tb-btn" id="tb-min" title="Küçült" aria-label="Küçült">${Zs.min}</button>
        <button class="tb-btn" id="tb-max" title="Ekranı Kapla" aria-label="Ekranı Kapla">${Zs.max}</button>
        <button class="tb-btn close" id="tb-close" title="Kapat" aria-label="Kapat">${Zs.close}</button>
      </div>
    </div>
    <div class="body-row">
      <nav class="rail">
        <div class="rail-logo"><img src="/logo.png" draggable="false" /></div>
        ${KT.map(a=>`
          <button class="rail-item" data-page="${a.page}">
            ${V(a.icon,"ri-icon")}
            <span class="ri-label">${a.label}</span>
          </button>`).join("")}
        <div class="rail-flex"></div>
        <button class="rail-account" id="rail-account" title="Hesap"></button>
      </nav>
      <main id="content" class="content"></main>
    </div>
  `;const t=hr.window.getCurrentWindow();yi("#tb-min")?.addEventListener("click",()=>t.minimize()),yi("#tb-max")?.addEventListener("click",()=>t.toggleMaximize());const n=()=>{if(Je.activeId){t.minimize(),Y("Launcher küçültüldü — oyun kapanınca hazır; görev çubuğundan geri açabilirsin");return}t.close()};yi("#tb-close")?.addEventListener("click",n),yi("#tb-pack")?.addEventListener("click",()=>{fv()});try{t.onCloseRequested(a=>{Je.activeId&&(a?.preventDefault?.(),t.minimize(),Y("Launcher küçültüldü — oyun kapanınca hazır; görev çubuğundan geri açabilirsin"))})}catch{}try{const a=yi("#tb-max"),s=o=>{a&&(a.innerHTML=o?Zs.restore:Zs.max,a.title=o?"Geri Yükle":"Ekranı Kapla",a.setAttribute("aria-label",a.title))},r=()=>{t.isMaximized().then(s).catch(()=>{})};typeof t.onResized=="function"?t.onResized(r):hr.event?.listen&&hr.event.listen("tauri://resize",r),r()}catch{}document.querySelectorAll(".rail-item").forEach(a=>{a.addEventListener("click",()=>je(a.dataset.page))}),Cc(),yi("#rail-account")?.addEventListener("click",()=>{le.accounts.length?je("settings"):Un()}),gf(Array.from(document.querySelectorAll(".rail-item")))}function Cc(){const i=yi("#rail-account");if(!i)return;const e=bn();if(!e){i.innerHTML=`<span class="ra-head ph">${V("user")}</span><span class="ra-name">Giriş yap</span>`;return}i.innerHTML=`
    <img class="ra-head" src="${Rc(e)}" draggable="false" ${Lc(e)} />
    <span class="ra-name">${cc(e.id)}${e.name}</span>
    <span class="pa-dot on"></span>`}let yl=null;function Un(i){if(yl){yl.root.querySelector("#off-name")?.focus();return}const e=mn(`
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
  `),t=e.root;let n=!0;const a=()=>{n&&(n=!1,yl=null,e.close())};yl={root:t,close:a},t.querySelector("#off-go")?.addEventListener("click",async()=>{const s=t.querySelector("#off-name").value.trim();if(s.length<3)return Y("İsim en az 3 karakter olmalı","err");try{await ie("cmd_add_offline_account",{name:s}),await on(!0),mm(),Y(`Hoş geldin, ${s}!`),a(),i?.()}catch(r){Y(String(r),"err")}}),t.querySelector("#ms-go")?.addEventListener("click",async()=>{const s=t.querySelector("#ms-status"),r=t.querySelector("#ms-go");r.disabled=!0,s.style.display="block",s.innerHTML='<span class="spinner"></span> Microsoft oturum penceresi açılıyor…';try{const o=await ie("cmd_ms_login_begin");await on(!0),mm(),Y(`Hoş geldin, ${o.name}!`),a(),i?.()}catch(o){s.textContent=String(o),r.disabled=!1}})}let xl=0;async function YT(i){if(!le.accounts.length){Un();return}if(Je.activeId){Y("Oyun zaten açık — önce mevcut oyunu kapat","err");return}const e=++xl;Je.activeId=i;const{root:t,close:n}=mn(`
    <h2>Oyun Başlatılıyor</h2>
    <div class="sub" id="lp-stage">Hazırlanıyor…</div>
    <div class="progressbar"><div id="lp-bar" style="transform:scaleX(0.02)"></div></div>
    <div class="progressbar-label" id="lp-detail" style="margin-top:10px"></div>
    <div id="lp-logs" style="margin-top:14px; max-height:180px; overflow-y:auto; font-family:var(--font-mono); font-size:11px; color:var(--text-faint); display:none; user-select:text;"></div>
  `),a=t.querySelector("#lp-bar"),s=t.querySelector("#lp-stage"),r=t.querySelector("#lp-detail"),o=t.querySelector("#lp-logs"),c=await xn("launch-progress",h=>{if(e!==xl)return;const v=h.payload;a.style.transform=`scaleX(${Math.min(1,Math.max(0,v.percent/100))})`,s.textContent=ZT(v.stage),r.textContent=v.detail||""}),l=await xn("game-log",h=>{if(e!==xl)return;o.style.display="block";const v=document.createElement("div");v.textContent=h.payload,o.appendChild(v),o.scrollTop=o.scrollHeight,o.children.length>200&&o.firstElementChild?.remove()}),d=await xn("game-exit",h=>{if(e!==xl)return;Je.activeId=null;const v=h.payload?.exit_code??h.payload?.code??-1;v===0?(s.textContent="Oyun kapatıldı",setTimeout(n,1200)):(s.textContent=`Oyun hata ile kapandı (kod ${v})`,r.textContent="Canlı logdan detayları görebilirsin.")}),f=()=>{c(),l(),d()},u=new MutationObserver(()=>{document.body.contains(t)||(f(),u.disconnect())});u.observe(document.body,{childList:!0});try{await ie("cmd_launch_instance",{instanceId:i}),s.textContent="Oyun çalışıyor",r.textContent="İyi oyunlar!",a.style.transform="scaleX(1)",setTimeout(()=>{f(),n()},1500),await on(!0)}catch(h){Je.activeId=null,s.textContent="Başlatılamadı",r.textContent=String(h),r.style.color="var(--danger)"}}function ZT(i){return{manifest:"Sürüm bilgisi",download:"Dosyalar indiriliyor",java:"Java hazırlanıyor",mods:"Modlar hazırlanıyor",modpack:"Mod paketi kuruluyor",starting:"Başlatılıyor"}[i]||i}xn("curtain-status",i=>{i.payload?.phase==="started"&&(window.__yikimRestart=!0),i.payload?.phase==="closed"&&(window.__yikimRestart=!1)});xn("game-started",i=>{Je.activeId=i.payload,on(!0)});xn("game-exit",async()=>{window.__yikimRestart||(Je.activeId=null,on(!0))});xn("mod-install-progress",i=>{const e=i.payload;e.phase==="done"&&Y(`Kuruldu: ${e.filename}`),e.phase==="error"&&Y(`Hata: ${e.filename}`,"err")});let Bn=null,vm;xn("standard-mods-progress",i=>{const e=i.payload;if(!e.total)return;(!Bn||!document.body.contains(Bn))&&(Bn=document.createElement("div"),Bn.className="sm-panel",Bn.innerHTML=`
      <div class="sm-head">
        <span class="sm-title">Standart modlar kuruluyor</span>
        <span class="sm-count tnum" id="sm-count"></span>
      </div>
      <div class="progressbar sm-bar"><div id="sm-fill"></div></div>
      <div class="sm-list" id="sm-list"></div>
    `,document.body.appendChild(Bn)),clearTimeout(vm);const t=Bn.querySelector("#sm-count"),n=Bn.querySelector("#sm-fill"),a=Bn.querySelector("#sm-list");if(t.textContent=`${e.done}/${e.total}`,n.style.transform=`scaleX(${Math.min(1,e.done/e.total)})`,e.current){const s=document.createElement("div");for(s.className="sm-row done",s.textContent=`✓ ${e.current}`,a.appendChild(s);a.children.length>8;)a.firstElementChild?.remove();a.scrollTop=a.scrollHeight}e.done>=e.total&&(Bn.querySelector(".sm-title").textContent="Standart modlar hazır",vm=setTimeout(()=>{Bn?.remove(),Bn=null},4e3))});xn("mod-install-progress",i=>{i.payload.phase});async function i0(){try{await on(),Fw(),n0(),je("home"),Gw(),Ww()||qw(),tA(),Do(),BM(),jT(),QT()}catch(i){nA(i)}}const JT=on;async function jT(){const{packKartBaslat:i,packKartHata:e,packKartTamam:t}=await pt(async()=>{const{packKartBaslat:n,packKartHata:a,packKartTamam:s}=await Promise.resolve().then(()=>xv);return{packKartBaslat:n,packKartHata:a,packKartTamam:s}},void 0);await xn("yikimpack-ac",async n=>{const a=n?.payload;if(!a)return;const s=`dosya:${a}`;i("Paket açıldı — kurulum başlıyor",s),je("instances");try{const r=await ie("cmd_import_pack_file",{path:a,name:null});await JT(),t(s),Y(`${r.name||"Paket"} kuruldu ✓`,"ok")}catch(r){const o=String(r);if(o.includes("paket_zaten_kuruluyor")){Y("Bu paket şu anda zaten kuruluyor","err");return}e(o,s)}})}async function QT(){const{packKartBitti:i}=await pt(async()=>{const{packKartBitti:e}=await Promise.resolve().then(()=>xv);return{packKartBitti:e}},void 0);await xn("pack-hazir",async e=>{const t=e?.payload?.instance_id,n=e?.payload?.ad||"paket";eA(),Ms("kurulum",`${n} hazır`,"Kurulum tamamlandı — log sayfası açıldı"),i(t),t&&je("instances",`${t}|log`),Y(`${n} kuruldu — log sayfası açıldı`,"ok")})}function eA(){try{const i=window.AudioContext||window.webkitAudioContext;if(!i)return;const e=new i,t=(a,s)=>{const r=e.createOscillator(),o=e.createGain();r.type="sine",r.frequency.value=s,o.gain.setValueAtTime(1e-4,a),o.gain.exponentialRampToValueAtTime(.14,a+.02),o.gain.exponentialRampToValueAtTime(1e-4,a+.32),r.connect(o).connect(e.destination),r.start(a),r.stop(a+.34)},n=e.currentTime;t(n,660),t(n+.16,990),setTimeout(()=>e.close(),900)}catch{}}async function tA(){try{const e=await(await pt(()=>import("./index-DSkUPpwd.js"),[])).check();if(!e?.available)return;const{root:t,close:n}=mn(`
      <h2>Güncelleme Var</h2>
      <div class="sub">YIKIMLient <b>v${e.version}</b> hazır. Değişiklik notları:</div>
      <div style="margin:12px 0; max-height:180px; overflow-y:auto; user-select:text; color:var(--text-dim); font-size:12.5px; line-height:1.55">
        ${(e.body||"Değişiklik notu yok.").split(`
`).map(a=>`<div>${a}</div>`).join("")}
      </div>
      <div style="display:flex; gap:10px; justify-content:flex-end; margin-top:6px">
        <button class="btn ghost" id="upd-later">Sonra</button>
        <button class="btn primary" id="upd-go">İndir ve Kur</button>
      </div>
    `);t.querySelector("#upd-later")?.addEventListener("click",()=>n()),t.querySelector("#upd-go")?.addEventListener("click",async()=>{const a=t.querySelector("#upd-go");a.disabled=!0,a.textContent="İndiriliyor…";try{let s=0,r=0;await e.download(o=>{switch(o.event){case"Started":r=o.data.contentLength??0;break;case"Progress":s+=o.data.chunkLength;break;case"Finished":a.textContent="Kuruluyor…";break}r>0&&(a.textContent=`İndiriliyor… %${Math.round(s/r*100)}`)}),await e.install(),Y("Güncelleme kuruldu — launcher yeniden başlıyor"),setTimeout(()=>{try{hr.process.exit(0)}catch{window.location.reload()}},900)}catch(s){a.disabled=!1,a.textContent="İndir ve Kur",Y(`Güncelleme başarısız: ${s}`,"err")}})}catch{}}function nA(i){const e=document.getElementById("app"),t=i instanceof Error?i.stack||i.message:String(i);console.error("boot hatası:",i),e&&(e.innerHTML=`
      <div style="height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:12px; padding:40px; text-align:center">
        <div style="font-size:13px; color:var(--text-dim)">Açılışta bir şeyler ters gitti:</div>
        <pre style="user-select:text; font-family:var(--font-mono); font-size:11.5px; color:var(--danger); white-space:pre-wrap; word-break:break-word; max-width:640px; background:var(--bg2); border:1px solid var(--hairline-strong); border-radius:10px; padding:14px 18px; margin:0">${t}</pre>
      </div>`)}function iA(){if(!window.__TAURI__)return;const i=async()=>{try{const e=await fetch(`surum.txt?t=${Date.now()}`,{cache:"no-store"});return e.ok&&(await e.text()).trim()||null}catch{return null}};(async()=>{const e=await i();if(!e)return;const t=async()=>{if(document.querySelector(".modal-backdrop"))return;const n=await i();n&&n!==e&&window.location.reload()};for(const n of[4e3,12e3,3e4,6e4])setTimeout(()=>void t(),n)})()}i0();iA();const Et=Object.freeze(Object.defineProperty({__proto__:null,$:yi,applyTheme:qT,applyWorld:Di,boot:i0,currentAccount:bn,get currentPage(){return Vf},el:hi,enterStage:vg,fileSrc:xt,fmtBytes:Fo,fmtDuration:pr,fmtSpeed:XT,headAttrs:Lc,headFallbackUrl:t0,headUrl:Rc,icon:V,invoke:ie,lamp:lo,launch:Je,launchInstance:YT,listen:xn,nav:Hn,navigate:je,openExternal:Wa,openLoginModal:Un,openModal:mn,openPath:e0,pages:ji,refreshState:on,renderAccountPill:Cc,setupShell:n0,state:le,switchPress:vf,toast:Y,updateRamPill:WT},Symbol.toStringTag,{value:"Module"}));
