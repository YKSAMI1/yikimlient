const k=1.7777777777777777;function V(q){return new Promise((M,m)=>{const y=new Image;y.onload=()=>M(y),y.onerror=()=>m(new Error("fotoğraf açılamadı")),y.src=q})}function _(q,M){return new Promise(m=>{(async()=>{let y;try{y=await V(q)}catch{M("Fotoğraf açılamadı","err"),m(null);return}const d=y.naturalWidth,i=y.naturalHeight;if(!d||!i){M("Fotoğraf okunamadı","err"),m(null);return}const U=window.innerWidth>=760?256:0,I=Math.min(700,Math.max(200,window.innerWidth-66-U)),B=Math.min(460,Math.max(180,window.innerHeight-240)),F=Math.min(I/d,B/i,1),f=Math.max(1,Math.round(d*F)),b=Math.max(1,Math.round(i*F)),K=f/d,T=b/i;let a=d*.7,s=a/k;s>i*.92&&(s=i*.92,a=s*k);let l=(d-a)/2,c=(i-s)/2;const g=()=>{a=Math.max(24,Math.min(d,a)),s=a/k,s>i&&(s=i,a=s*k),l=Math.max(0,Math.min(d-a,l)),c=Math.max(0,Math.min(i-s,c))};g();const r=document.createElement("div");r.className="krp-kat",r.innerHTML=`
        <div class="krp-kart" role="dialog" aria-modal="true" aria-label="Arka plan fotoğrafını kırp">
          <div class="krp-bas">
            <div class="krp-basla">
              <b>Fotoğrafta bölge seç</b>
              <span>Ana menü arka planı yatay (16:9) olacak.</span>
            </div>
            <button class="btn ghost sm" id="krp-kapat" title="Kapat (Esc)" aria-label="Kapat">✕</button>
          </div>
          <div class="krp-govde">
            <div class="krp-sahne" id="krp-sahne" style="width:${f}px;height:${b}px">
              <canvas id="krp-c" width="${f}" height="${b}"></canvas>
              <div class="krp-karart" id="krp-k-ust"></div>
              <div class="krp-karart" id="krp-k-alt"></div>
              <div class="krp-karart" id="krp-k-sol"></div>
              <div class="krp-karart" id="krp-k-sag"></div>
              <div class="krp-sec" id="krp-sec">
                <span class="krp-tut" data-yon="nw"></span>
                <span class="krp-tut" data-yon="n"></span>
                <span class="krp-tut" data-yon="ne"></span>
                <span class="krp-tut" data-yon="e"></span>
                <span class="krp-tut" data-yon="se"></span>
                <span class="krp-tut" data-yon="s"></span>
                <span class="krp-tut" data-yon="sw"></span>
                <span class="krp-tut" data-yon="w"></span>
              </div>
            </div>
            <aside class="krp-yan">
              <div class="krp-yan-bas">SEÇİM</div>
              <div class="krp-olc"><b id="krp-olc">0 × 0</b><span>16:9</span></div>
              <ul class="krp-ipucu">
                <li>Fotoğrafın üzerinde <b>sürükle</b> → çerçeveyi taşı</li>
                <li><b>Köşe ve kenar tutamakları</b> → boyutlandır</li>
                <li><b>Çift tık</b> → fotoğrafın tamamını seç</li>
                <li><b>Ok tuşları</b> → ince taşı (Shift = hızlı)</li>
              </ul>
              <div class="krp-kalite">
                <b>Kalite korunur</b>
                Seçtiğin bölge, dosyanın kendi çözünürlüğünde kesilir.
              </div>
              <div class="krp-butonlar">
                <button class="btn ghost" id="krp-sifirla" type="button">Sıfırla</button>
                <button class="btn ghost" id="krp-iptal-btn" type="button">İptal</button>
                <button class="btn primary" id="krp-ok" type="button">Bu bölge olsun</button>
              </div>
            </aside>
          </div>
        </div>`,document.body.appendChild(r);const x=r.querySelector("#krp-sahne"),v=r.querySelector("#krp-sec"),N=r.querySelector("#krp-olc"),O=r.querySelector("#krp-k-ust"),G=r.querySelector("#krp-k-alt"),Q=r.querySelector("#krp-k-sol"),X=r.querySelector("#krp-k-sag"),$=r.querySelector("#krp-c").getContext("2d");$&&($.imageSmoothingEnabled=!0,$.imageSmoothingQuality="high",$.drawImage(y,0,0,f,b));let D=!1;const C=()=>{D||(D=!0,document.removeEventListener("keydown",z),r.remove())},S=()=>{C(),m(null)},R=()=>{if(D)return;const t={x:Math.round(l),y:Math.round(c),w:Math.max(1,Math.round(a)),h:Math.max(1,Math.round(s))};C(),m(t)},w=()=>{const t=l*K,n=c*T,o=a*K,p=s*T;v.style.left=`${t}px`,v.style.top=`${n}px`,v.style.width=`${o}px`,v.style.height=`${p}px`,O.style.cssText=`left:0;top:0;width:${f}px;height:${n}px`,G.style.cssText=`left:0;top:${n+p}px;width:${f}px;height:${Math.max(0,b-n-p)}px`,Q.style.cssText=`left:0;top:${n}px;width:${t}px;height:${p}px`,X.style.cssText=`left:${t+o}px;top:${n}px;width:${Math.max(0,f-t-o)}px;height:${p}px`,N.textContent=`${Math.round(a)} × ${Math.round(s)}`};w();const W=t=>{const n=x.getBoundingClientRect();return{x:(t.clientX-n.left)*d/Math.max(1,n.width),y:(t.clientY-n.top)*i/Math.max(1,n.height)}};let u=null,e={sx:0,sy:0,sw:0,sh:0},H={x:0,y:0};x.addEventListener("pointerdown",t=>{const o=t.target.closest?.(".krp-tut"),p=W(t);o?u=o.dataset.yon||"se":(u="tasi",H={x:p.x-l,y:p.y-c}),e={x:p.x,y:p.y,sx:l,sy:c,sw:a,sh:s};try{x.setPointerCapture(t.pointerId)}catch{}u==="tasi"&&v.classList.add("tasiyor"),t.preventDefault()}),x.addEventListener("pointermove",t=>{if(!u)return;const n=W(t);if(u==="tasi"){l=n.x-H.x,c=n.y-H.y,g(),w();return}const o=u.includes("e"),p=u.includes("w"),E=u.includes("s"),L=u.includes("n"),j=(o||p)&&(E||L);let h=e.sw;o?h=n.x-e.sx:p?h=e.sx+e.sw-n.x:(L||E)&&(h=(E?n.y-e.sy:e.sy+e.sh-n.y)*k),h=Math.max(24,Math.min(h,d,i*k));const A=h/k;if(a=h,s=A,j)p?l=e.sx+e.sw-h:l=e.sx,L?c=e.sy+e.sh-A:c=e.sy;else{const P=e.sx+e.sw/2,J=e.sy+e.sh/2;o?l=e.sx:p?l=e.sx+e.sw-h:l=P-h/2,E?c=e.sy:L?c=e.sy+e.sh-A:c=J-A/2}g(),w()});const Y=()=>{u=null,v.classList.remove("tasiyor")};x.addEventListener("pointerup",Y),x.addEventListener("pointercancel",Y),x.addEventListener("dblclick",()=>{a=Math.min(d,i*k),s=a/k,l=(d-a)/2,c=(i-s)/2,w()});const z=t=>{if(t.key==="Escape"){t.preventDefault(),S();return}if(t.key==="Enter"){t.preventDefault(),R();return}if(!["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(t.key))return;t.preventDefault();const o=Math.max(1,Math.round(d*(t.shiftKey?.04:.008)));t.altKey?((t.key==="ArrowRight"||t.key==="ArrowDown")&&(a+=o),(t.key==="ArrowLeft"||t.key==="ArrowUp")&&(a-=o)):(t.key==="ArrowLeft"&&(l-=o),t.key==="ArrowRight"&&(l+=o),t.key==="ArrowUp"&&(c-=o),t.key==="ArrowDown"&&(c+=o)),g(),w()};document.addEventListener("keydown",z),r.querySelector("#krp-ok")?.addEventListener("click",R),r.querySelector("#krp-kapat")?.addEventListener("click",S),r.querySelector("#krp-iptal-btn")?.addEventListener("click",S),r.querySelector("#krp-sifirla")?.addEventListener("click",()=>{a=d*.7,s=a/k,s>i*.92&&(s=i*.92,a=s*k),l=(d-a)/2,c=(i-s)/2,g(),w()}),r.addEventListener("pointerdown",t=>{t.target===r&&S()})})()})}export{V as fotografYukle,_ as kirpPenceresiAc};
