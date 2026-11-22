/**
 * SAHNE FOTOĞRAFI — kırpma penceresi.
 *
 * Kullanıcının fotoğrafında YATAY (16:9) bir bölge seçtirir.
 *
 * Önemli tasarım kararları:
 * - Seçim kutusu, EKRANDA GÖRÜNEN resmin koordinatlarıyla çizilir. Eski sürüm
 *   bitmap boyutunu (gw) kullanıyordu; kutu görüntünün dışına taşıyor, sağ/alt
 *   köşelere ulaşmıyordu.
 * - Fotoğrafın ÜZERİNDE sürükleme çerçeveyi taşır; 8 tutamak (4 köşe + 4 kenar)
 *   boyutlandırır. Başlangıç kutusu %70'tir, böylece her yöne rahat taşınır.
 * - Kırpma tarayıcıda YAPILMAZ: yalnızca seçim koordinatları Rust'a gider.
 *   Böylece asset protokolünden gelen görselde canvas "tainted" olsa bile
 *   işlem çalışır ve yeniden sıkıştırma olmadığı için kalite korunur.
 */

export interface KirpSecim {
  x: number;
  y: number;
  w: number;
  h: number;
}

const ORAN = 16 / 9;
type Yon = "nw" | "n" | "ne" | "e" | "se" | "s" | "sw" | "w";

/** URL (asset/data/blob) → Image. Yükleme başarısızsa throw eder. */
export function fotografYukle(url: string): Promise<HTMLImageElement> {
  return new Promise((coz, red) => {
    const im = new Image();
    im.onload = () => coz(im);
    im.onerror = () => red(new Error("fotoğraf açılamadı"));
    im.src = url;
  });
}

/**
 * Kırpma penceresini açar. Onayda seçim (görselin gerçek piksel koordinatları),
 * iptalde null döner.
 */
export function kirpPenceresiAc(
  kaynakUrl: string,
  toast: (m: string, k?: string) => void,
): Promise<KirpSecim | null> {
  return new Promise((coz) => {
    void (async () => {
      let im: HTMLImageElement;
      try {
        im = await fotografYukle(kaynakUrl);
      } catch {
        toast("Fotoğraf açılamadı", "err");
        coz(null);
        return;
      }
      const iw = im.naturalWidth;
      const ih = im.naturalHeight;
      if (!iw || !ih) {
        toast("Fotoğraf okunamadı", "err");
        coz(null);
        return;
      }

      // --- ekranda gösterilecek boyut: kutu TAM olarak bu boyutta olur ---
      // Panel yana sığıyorsa yerini ayır; dar ekranda panel alta iner.
      const yanYer = window.innerWidth >= 760 ? 256 : 0;
      const enFazlaG = Math.min(700, Math.max(200, window.innerWidth - 66 - yanYer));
      const enFazlaY = Math.min(460, Math.max(180, window.innerHeight - 240));
      const k = Math.min(enFazlaG / iw, enFazlaY / ih, 1);
      const gw = Math.max(1, Math.round(iw * k));
      const gh = Math.max(1, Math.round(ih * k));
      const ox = gw / iw; // görsel px → ekran px
      const oy = gh / ih;

      // --- seçim (görsel koordinatları) ---
      let sw = iw * 0.7;
      let sh = sw / ORAN;
      if (sh > ih * 0.92) {
        sh = ih * 0.92;
        sw = sh * ORAN;
      }
      let sx = (iw - sw) / 2;
      let sy = (ih - sh) / 2;

      /** Oranı (16:9) koruyarak seçimi görselin içinde tut. */
      const sinirla = (): void => {
        sw = Math.max(24, Math.min(iw, sw));
        sh = sw / ORAN;
        if (sh > ih) {
          sh = ih;
          sw = sh * ORAN;
        }
        sx = Math.max(0, Math.min(iw - sw, sx));
        sy = Math.max(0, Math.min(ih - sh, sy));
      };
      sinirla();

      const kat = document.createElement("div");
      kat.className = "krp-kat";
      kat.innerHTML = `
        <div class="krp-kart" role="dialog" aria-modal="true" aria-label="Arka plan fotoğrafını kırp">
          <div class="krp-bas">
            <div class="krp-basla">
              <b>Fotoğrafta bölge seç</b>
              <span>Ana menü arka planı yatay (16:9) olacak.</span>
            </div>
            <button class="btn ghost sm" id="krp-kapat" title="Kapat (Esc)" aria-label="Kapat">✕</button>
          </div>
          <div class="krp-govde">
            <div class="krp-sahne" id="krp-sahne" style="width:${gw}px;height:${gh}px">
              <canvas id="krp-c" width="${gw}" height="${gh}"></canvas>
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
        </div>`;
      document.body.appendChild(kat);

      const sahne = kat.querySelector("#krp-sahne") as HTMLElement;
      const sec = kat.querySelector("#krp-sec") as HTMLElement;
      const olcYazi = kat.querySelector("#krp-olc") as HTMLElement;
      const kUst = kat.querySelector("#krp-k-ust") as HTMLElement;
      const kAlt = kat.querySelector("#krp-k-alt") as HTMLElement;
      const kSol = kat.querySelector("#krp-k-sol") as HTMLElement;
      const kSag = kat.querySelector("#krp-k-sag") as HTMLElement;
      const c = kat.querySelector("#krp-c") as HTMLCanvasElement;
      const g = c.getContext("2d");
      if (g) {
        g.imageSmoothingEnabled = true;
        g.imageSmoothingQuality = "high";
        g.drawImage(im, 0, 0, gw, gh);
      }

      let bitti = false;
      const kapa = (): void => {
        if (bitti) return;
        bitti = true;
        document.removeEventListener("keydown", tus);
        kat.remove();
      };
      const iptal = (): void => {
        kapa();
        coz(null);
      };
      const onay = (): void => {
        if (bitti) return;
        const secim: KirpSecim = {
          x: Math.round(sx),
          y: Math.round(sy),
          w: Math.max(1, Math.round(sw)),
          h: Math.max(1, Math.round(sh)),
        };
        kapa();
        coz(secim);
      };

      const ciz = (): void => {
        const L = sx * ox;
        const T = sy * oy;
        const W = sw * ox;
        const H = sh * oy;
        sec.style.left = `${L}px`;
        sec.style.top = `${T}px`;
        sec.style.width = `${W}px`;
        sec.style.height = `${H}px`;
        kUst.style.cssText = `left:0;top:0;width:${gw}px;height:${T}px`;
        kAlt.style.cssText = `left:0;top:${T + H}px;width:${gw}px;height:${Math.max(0, gh - T - H)}px`;
        kSol.style.cssText = `left:0;top:${T}px;width:${L}px;height:${H}px`;
        kSag.style.cssText = `left:${L + W}px;top:${T}px;width:${Math.max(0, gw - L - W)}px;height:${H}px`;
        olcYazi.textContent = `${Math.round(sw)} × ${Math.round(sh)}`;
      };
      ciz();

      // --- pointer: taşı / boyutlandır ---
      const konum = (e: PointerEvent): { x: number; y: number } => {
        const r = sahne.getBoundingClientRect();
        return {
          x: ((e.clientX - r.left) * iw) / Math.max(1, r.width),
          y: ((e.clientY - r.top) * ih) / Math.max(1, r.height),
        };
      };

      let mod: "tasi" | Yon | null = null;
      let bas = { x: 0, y: 0, sx: 0, sy: 0, sw: 0, sh: 0 };
      let kavrama = { x: 0, y: 0 };

      sahne.addEventListener("pointerdown", (e: PointerEvent) => {
        const hedef = e.target as HTMLElement;
        const tut = hedef.closest?.(".krp-tut") as HTMLElement | null;
        const p = konum(e);
        if (tut) {
          mod = (tut.dataset.yon as Yon) || "se";
        } else {
          mod = "tasi";
          kavrama = { x: p.x - sx, y: p.y - sy };
        }
        bas = { x: p.x, y: p.y, sx, sy, sw, sh };
        try {
          sahne.setPointerCapture(e.pointerId);
        } catch {
          /* tarayıcı izin vermezse belge dinleyicileri yine çalışır */
        }
        if (mod === "tasi") sec.classList.add("tasiyor");
        e.preventDefault();
      });

      sahne.addEventListener("pointermove", (e: PointerEvent) => {
        if (!mod) return;
        const p = konum(e);
        if (mod === "tasi") {
          sx = p.x - kavrama.x;
          sy = p.y - kavrama.y;
          sinirla();
          ciz();
          return;
        }
        const saga = mod.includes("e");
        const sola = mod.includes("w");
        const asagi = mod.includes("s");
        const yukari = mod.includes("n");
        const kose = (saga || sola) && (asagi || yukari);
        let yeniW = bas.sw;
        if (saga) yeniW = p.x - bas.sx;
        else if (sola) yeniW = bas.sx + bas.sw - p.x;
        else if (yukari || asagi) {
          const yeniH = asagi ? p.y - bas.sy : bas.sy + bas.sh - p.y;
          yeniW = yeniH * ORAN;
        }
        // sınır: görselin dışına çıkma, oranı (16:9) koru
        yeniW = Math.max(24, Math.min(yeniW, iw, ih * ORAN));
        const yeniH = yeniW / ORAN;
        sw = yeniW;
        sh = yeniH;
        if (kose) {
          // KÖŞE sürükleme: karşıdaki köşe sabit kalır.
          if (sola) sx = bas.sx + bas.sw - yeniW;
          else sx = bas.sx;
          if (yukari) sy = bas.sy + bas.sh - yeniH;
          else sy = bas.sy;
        } else {
          // KENAR sürükleme (üst / alt / sol / sağ): tuttuğun kenar parmağı
          // izler, ÖBÜR KENAR hareket etmez. Orana uymak için gereken ölçü
          // değişimi seçimin merkezi etrafında SIMETRİK olur — yani kutunun
          // ortası kayar, sol/sağ birlikte açılır. Eski kod genişliği sabit
          // sol kenardan büyütüyordu; kullanıcıya "üstteki ve yandaki
          // tutamaklar da köşeymiş gibi" görünüyordu.
          const mx = bas.sx + bas.sw / 2;
          const my = bas.sy + bas.sh / 2;
          if (saga) sx = bas.sx;
          else if (sola) sx = bas.sx + bas.sw - yeniW;
          else sx = mx - yeniW / 2;
          if (asagi) sy = bas.sy;
          else if (yukari) sy = bas.sy + bas.sh - yeniH;
          else sy = my - yeniH / 2;
        }
        sinirla();
        ciz();
      });

      const birak = (): void => {
        mod = null;
        sec.classList.remove("tasiyor");
      };
      sahne.addEventListener("pointerup", birak);
      sahne.addEventListener("pointercancel", birak);

      // fotoğrafın üzerine çift tık: tamamını (16:9) seç
      sahne.addEventListener("dblclick", () => {
        sw = Math.min(iw, ih * ORAN);
        sh = sw / ORAN;
        sx = (iw - sw) / 2;
        sy = (ih - sh) / 2;
        ciz();
      });

      const tus = (e: KeyboardEvent): void => {
        if (e.key === "Escape") {
          e.preventDefault();
          iptal();
          return;
        }
        if (e.key === "Enter") {
          e.preventDefault();
          onay();
          return;
        }
        const ok = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"];
        if (!ok.includes(e.key)) return;
        e.preventDefault();
        const adim = Math.max(1, Math.round(iw * (e.shiftKey ? 0.04 : 0.008)));
        if (e.altKey) {
          // Alt + ok: sağ/alt kenarı boyutlandır
          if (e.key === "ArrowRight" || e.key === "ArrowDown") sw += adim;
          if (e.key === "ArrowLeft" || e.key === "ArrowUp") sw -= adim;
        } else {
          if (e.key === "ArrowLeft") sx -= adim;
          if (e.key === "ArrowRight") sx += adim;
          if (e.key === "ArrowUp") sy -= adim;
          if (e.key === "ArrowDown") sy += adim;
        }
        sinirla();
        ciz();
      };
      document.addEventListener("keydown", tus);

      kat.querySelector("#krp-ok")?.addEventListener("click", onay);
      kat.querySelector("#krp-kapat")?.addEventListener("click", iptal);
      kat.querySelector("#krp-iptal-btn")?.addEventListener("click", iptal);
      kat.querySelector("#krp-sifirla")?.addEventListener("click", () => {
        sw = iw * 0.7;
        sh = sw / ORAN;
        if (sh > ih * 0.92) {
          sh = ih * 0.92;
          sw = sh * ORAN;
        }
        sx = (iw - sw) / 2;
        sy = (ih - sh) / 2;
        sinirla();
        ciz();
      });
      kat.addEventListener("pointerdown", (e) => {
        if (e.target === kat) iptal();
      });
    })();
  });
}
