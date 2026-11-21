/**
 * SAHNE FOTOĞRAFI — kırpma penceresi.
 *
 * Kullanıcın fotoğrafının yalnızca istediği bölümünü seçmesini sağlar.
 * Seçim YATAY DİKDÖRTGEN (16:9) olarak kilitlidir: ana menü arka planı zaten
 * yatay ekran olduğu için kullanıcıların kaçırdığı en sık şey budur.
 *
 * Kalite KORUNUR: kırpılmış bölge DOSYA ÇÖZÜNÜRLÜĞÜNDE PNG olarak üretilir;
 * hiçbir yerde 128×96 gibi küçük bir tuvale çizilmez.
 */

export interface KirpKarari {
  /** Kırpılmış PNG'nin dataURL'i (tam çözünürlük). */
  veri: string;
  genislik: number;
  yukseklik: number;
}

const ORAN = 16 / 9;

/** dataURL → Blob (base64 gövdesi). */
function dataUrlBlob(dataUrl: string): Blob {
  const [bas, govde] = dataUrl.split(",");
  const ikili = atob(govde);
  const dizi = new Uint8Array(ikili.length);
  for (let i = 0; i < ikili.length; i++) dizi[i] = ikili.charCodeAt(i);
  return new Blob([dizi], { type: (bas.match(/:(.*?);/) || [, "image/png"])[1] });
}

/** Kırpma sonucunu diske yazacak Rust komutuna verilecek dataURL üretir. */
export function kirpDataUrl(kaynak: ImageBitmap | HTMLImageElement, sec: { x: number; y: number; w: number; h: number }): string {
  const c = document.createElement("canvas");
  c.width = Math.max(1, Math.round(sec.w));
  c.height = Math.max(1, Math.round(sec.h));
  const g = c.getContext("2d");
  if (!g) throw new Error("tuval yok");
  g.imageSmoothingEnabled = true;
  g.imageSmoothingQuality = "high";
  g.drawImage(kaynak as CanvasImageSource, sec.x, sec.y, sec.w, sec.h, 0, 0, c.width, c.height);
  return c.toDataURL("image/png");
}

/** DOSYA yolu → Image nesnesi (yükleme hatası olursa throw). */
export function fotografYukle(yol: string): Promise<HTMLImageElement> {
  return new Promise((coz, red) => {
    const im = new Image();
    im.onload = () => coz(im);
    im.onerror = () => red(new Error("fotoğraf açılamadı"));
    im.src = yol;
  });
}

/** Kırpma sonucunu kaydeder (Rust: <app>/sahne/ozel-arka.png). */
export async function kirpKaydet(dataUrl: string, invoke: (c: string, a?: any) => Promise<any>): Promise<any> {
  return invoke("cmd_save_scene_image", { veri: dataUrl });
}

export { dataUrlBlob, ORAN };

/**
 * Kırpma penceresini açar. `kaynak` diske kopyalanmış(tutulan) fotoğraf.
 * Onayda kırpılmış PNG dataURL'i döner; iptalde null.
 */
export function kirpPenceresiAc(
  invoke: (c: string, a?: any) => Promise<any>,
  kaynakYol: string,
  kapat: () => void,
  toast: (m: string, k?: string) => void,
): Promise<KirpKarari | null> {
  return new Promise(async (coz) => {
    let im: HTMLImageElement;
    try {
      im = await fotografYukle(kaynakYol);
    } catch {
      toast("Fotoğraf açılamadı", "err");
      coz(null);
      return;
    }
    const iw = im.naturalWidth;
    const ih = im.naturalHeight;
    // ekrana sığdır
    const maxW = Math.min(660, window.innerWidth - 80);
    const olcek = Math.min(maxW / iw, 420 / ih);
    const gw = Math.round(iw * olcek);
    const gh = Math.round(ih * olcek);

    // başlangıç seçimi: yatay dikdörtgen, genişliğin %88'i, ortada
    let sw = iw * 0.88;
    let sh = sw / ORAN;
    if (sh > ih) {
      sh = ih;
      sw = sh * ORAN;
    }
    let sx = (iw - sw) / 2;
    let sy = (ih - sh) / 2;
    const sinir = () => {
      sw = Math.max(32, Math.min(iw, sw));
      sh = sw / ORAN;
      if (sh > ih) {
        sh = ih;
        sw = sh * ORAN;
      }
      sx = Math.max(0, Math.min(iw - sw, sx));
      sy = Math.max(0, Math.min(ih - sh, sy));
    };

    const kat = document.createElement("div");
    kat.className = "krp-kat";
    kat.innerHTML = `
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
      </div>`;
    document.body.appendChild(kat);
    const kapa = () => {
      document.removeEventListener("keydown", tus);
      kat.remove();
    };
    const iptal = () => {
      kapa();
      coz(null);
    };
    const tus = (e: KeyboardEvent) => {
      if (e.key === "Escape") iptal();
      if (e.key === "Enter") onay();
    };
    document.addEventListener("keydown", tus);

    const c = kat.querySelector("#krp-c") as HTMLCanvasElement;
    const sec = kat.querySelector("#krp-sec") as HTMLElement;
    const olcYazi = kat.querySelector("#krp-olc") as HTMLElement;
    const govde = kat.querySelector("#krp-tuval") as HTMLElement;
    c.width = gw;
    c.height = gh;
    const g = c.getContext("2d");
    if (g) {
      g.imageSmoothingEnabled = true;
      g.drawImage(im, 0, 0, gw, gh);
    }
    const ciz = () => {
      const x = (sx / iw) * gw;
      const y = (sy / ih) * gh;
      const w = (sw / iw) * gw;
      const h = (sh / ih) * gh;
      sec.style.left = `${x}px`;
      sec.style.top = `${y}px`;
      sec.style.width = `${w}px`;
      sec.style.height = `${h}px`;
      olcYazi.textContent = `${Math.round(sw)} × ${Math.round(sh)}`;
    };
    ciz();

    // --- sürükleme: taşı / köşe (en-boy oranı KİLİTLİ) ---
    let mod: "tasi" | "kose" | null = null;
    let koseMod = "";
    let basX = 0;
    let basY = 0;
    let basS = { x: 0, y: 0, w: 0, h: 0 };
    const ekranKay = (e: PointerEvent) => {
      basX = (e.clientX - govde.getBoundingClientRect().left) / olcek;
      basY = (e.clientY - govde.getBoundingClientRect().top) / olcek;
    };
    govde.addEventListener("pointerdown", (e: PointerEvent) => {
      const hedef = (e.target as HTMLElement);
      ekranKay(e);
      if (hedef.classList.contains("krp-kose")) {
        mod = "kose";
        koseMod = String(hedef.dataset.k);
      } else if (hedef === sec || hedef === govde || hedef.tagName === "CANVAS") {
        mod = "tasi";
      } else {
        return;
      }
      basS = { x: sx, y: sy, w: sw, h: sh };
      try {
        govde.setPointerCapture(e.pointerId);
      } catch {
        /* yoksay */
      }
      e.preventDefault();
    });
    govde.addEventListener("pointermove", (e: PointerEvent) => {
      if (!mod) return;
      const k = govde.getBoundingClientRect();
      const mx = (e.clientX - k.left) / olcek;
      const my = (e.clientY - k.top) / olcek;
      if (mod === "tasi") {
        sx = basS.x + (mx - basX);
        sy = basS.y + (my - basY);
      } else {
        // köşe: genişliği köşeye göre değiştir, yükseklik orandan gelir
        const saga = koseMod.includes("sag");
        const asagi = koseMod.includes("alt");
        let yeniW;
        if (saga) {
          yeniW = (mx - basS.x);
        } else {
          yeniW = basS.x + basS.w - mx;
        }
        sw = Math.max(64, yeniW);
        sy = asagi ? basS.y : basS.y + basS.h - (sw / ORAN);
        sx = saga ? basS.x : basS.x + basS.w - sw;
      }
      sinir();
      ciz();
    });
    const birak = () => {
      mod = null;
    };
    govde.addEventListener("pointerup", birak);
    govde.addEventListener("pointercancel", birak);

    const onay = () => {
      try {
        const secim = {
          x: Math.round(sx),
          y: Math.round(sy),
          w: Math.round(sw),
          h: Math.round(sw / ORAN),
        };
        if (secim.h > ih) {
          secim.h = ih;
          secim.w = Math.round(ih * ORAN);
          secim.x = Math.round((iw - secim.w) / 2);
          secim.y = 0;
        }
        const veri = kirpDataUrl(im, secim);
        kapa();
        coz({ veri, genislik: secim.w, yukseklik: secim.h });
      } catch {
        toast("Kırpma başarısız", "err");
        iptal();
      }
    };
    kat.querySelector("#krp-ok")?.addEventListener("click", onay);
    kat.querySelector("#krp-kapat")?.addEventListener("click", iptal);
    kat.querySelector("#krp-iptal-btn")?.addEventListener("click", iptal);
    kat.addEventListener("pointerdown", (e) => {
      if (e.target === kat) iptal();
    });
    void kapat;
  });
}