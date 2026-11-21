const h=1.7777777777777777;function U(m,r){const c=document.createElement("canvas");c.width=Math.max(1,Math.round(r.w)),c.height=Math.max(1,Math.round(r.h));const o=c.getContext("2d");if(!o)throw new Error("tuval yok");return o.imageSmoothingEnabled=!0,o.imageSmoothingQuality="high",o.drawImage(m,r.x,r.y,r.w,r.h,0,0,c.width,c.height),c.toDataURL("image/png")}function z(m){return new Promise((r,c)=>{const o=new Image;o.onload=()=>r(o),o.onerror=()=>c(new Error("fotoğraf açılamadı")),o.src=m})}async function F(m,r){return r("cmd_save_scene_image",{veri:m})}function O(m,r,c,o){return new Promise(async E=>{let y;try{y=await z(r)}catch{o("Fotoğraf açılamadı","err"),E(null);return}const d=y.naturalWidth,a=y.naturalHeight,W=Math.min(660,window.innerWidth-80),g=Math.min(W/d,420/a),x=Math.round(d*g),M=Math.round(a*g);let e=d*.88,s=e/h;s>a&&(s=a,e=s*h);let k=(d-e)/2,u=(a-s)/2;const D=()=>{e=Math.max(32,Math.min(d,e)),s=e/h,s>a&&(s=a,e=s*h),k=Math.max(0,Math.min(d-e,k)),u=Math.max(0,Math.min(a-s,u))},n=document.createElement("div");n.className="krp-kat",n.innerHTML=`
      <div class="krp-kart" role="dialog" aria-modal="true" aria-label="Arka plan fotoğrafını yerleştir">
        <div class="krp-bas">
          <b>Arka plan fotoğrafı — bölge seç</b>
          <button class="btn ghost sm" id="krp-kapat" title="Kapat (Esc)">✕</button>
        </div>
        <div class="krp-govde">
          <div class="krp-tuval" id="krp-tuval">
            <canvas id="krp-c"></canvas>
            <div class="krp-sec" id="krp-sec">
              <span class="krp-kose" data-k="sol-ust"></span>
              <span class="krp-kose" data-k="sag-ust"></span>
              <span class="krp-kose" data-k="sol-alt"></span>
              <span class="krp-kose" data-k="sag-alt"></span>
            </div>
          </div>
          <div class="krp-yan">
            <p>Ana menü arka planı <b>yatay dikdörtgen</b> olarak kırpılır. Çerçeveyi taşı, köşelerinden boyutlandır.</p>
            <div class="krp-olc">Seçim: <b id="krp-olc">0 × 0</b></div>
            <div class="krp-iptal">
              <button class="btn ghost" id="krp-iptal-btn">İptal</button>
              <button class="btn primary" id="krp-ok">Bu bölge olsun</button>
            </div>
          </div>
        </div>
      </div>`,document.body.appendChild(n);const $=()=>{document.removeEventListener("keydown",R),n.remove()},v=()=>{$(),E(null)},R=t=>{t.key==="Escape"&&v(),t.key==="Enter"&&N()};document.addEventListener("keydown",R);const S=n.querySelector("#krp-c"),w=n.querySelector("#krp-sec"),X=n.querySelector("#krp-olc"),p=n.querySelector("#krp-tuval");S.width=x,S.height=M;const L=S.getContext("2d");L&&(L.imageSmoothingEnabled=!0,L.drawImage(y,0,0,x,M));const Y=()=>{const t=k/d*x,l=u/a*M,b=e/d*x,q=s/a*M;w.style.left=`${t}px`,w.style.top=`${l}px`,w.style.width=`${b}px`,w.style.height=`${q}px`,X.textContent=`${Math.round(e)} × ${Math.round(s)}`};Y();let f=null,C="",B=0,I=0,i={x:0,y:0,w:0,h:0};const _=t=>{B=(t.clientX-p.getBoundingClientRect().left)/g,I=(t.clientY-p.getBoundingClientRect().top)/g};p.addEventListener("pointerdown",t=>{const l=t.target;if(_(t),l.classList.contains("krp-kose"))f="kose",C=String(l.dataset.k);else if(l===w||l===p||l.tagName==="CANVAS")f="tasi";else return;i={x:k,y:u,w:e,h:s};try{p.setPointerCapture(t.pointerId)}catch{}t.preventDefault()}),p.addEventListener("pointermove",t=>{if(!f)return;const l=p.getBoundingClientRect(),b=(t.clientX-l.left)/g,q=(t.clientY-l.top)/g;if(f==="tasi")k=i.x+(b-B),u=i.y+(q-I);else{const P=C.includes("sag"),H=C.includes("alt");let A;P?A=b-i.x:A=i.x+i.w-b,e=Math.max(64,A),u=H?i.y:i.y+i.h-e/h,k=P?i.x:i.x+i.w-e}D(),Y()});const K=()=>{f=null};p.addEventListener("pointerup",K),p.addEventListener("pointercancel",K);const N=()=>{try{const t={x:Math.round(k),y:Math.round(u),w:Math.round(e),h:Math.round(e/h)};t.h>a&&(t.h=a,t.w=Math.round(a*h),t.x=Math.round((d-t.w)/2),t.y=0);const l=U(y,t);$(),E({veri:l,genislik:t.w,yukseklik:t.h})}catch{o("Kırpma başarısız","err"),v()}};n.querySelector("#krp-ok")?.addEventListener("click",N),n.querySelector("#krp-kapat")?.addEventListener("click",v),n.querySelector("#krp-iptal-btn")?.addEventListener("click",v),n.addEventListener("pointerdown",t=>{t.target===n&&v()})})}export{h as ORAN,z as fotografYukle,U as kirpDataUrl,F as kirpKaydet,O as kirpPenceresiAc};
