// SKIN EDİTÖRÜ — 64×64 piksel tuvali + canlı 3D önizleme.
// Tam ekran panel olarak açılır; kaydetme kararı çağırana (skins.ts) bırakılır.

import { icon, openModal, toast } from "../main";
import { sahneGetir } from "../sahne/karakter";
import { PikselPafta, RGBA, eskiPaftayiGenislet } from "../sahne/piksel-pafta";
import { BOLGELER, SkinBolge } from "../sahne/skin-bolgeler";

export interface EditorGirdi {
  pafta: PikselPafta;
  slim: boolean;
  ad: string;
}

export interface EditorCikti {
  veri: number[];
  slim: boolean;
  ad: string;
}

type Arac = "kalem" | "silgi" | "kova" | "damla";

const PALET = [
  "#000000", "#ffffff", "#7f7f7f", "#c0c0c0",
  "#ff5555", "#ff9f43", "#ffe066", "#4cd964",
  "#34c3ff", "#4b6bff", "#a55eea", "#ff6bcb",
  "#7a4a2b", "#c98b5e", "#2b6b3a", "#123a5e",
];

const BOYUT = 64;

export function openSkinEditor(
  root: HTMLElement,
  girdi: EditorGirdi,
  kaydet: (cikti: EditorCikti, giy: boolean) => Promise<void>,
  kapat: () => void,
): void {
  const pafta = girdi.pafta;
  let slim = girdi.slim;
  let ad = girdi.ad;
  let arac: Arac = "kalem";
  let kalinlik = 1;
  let renk: RGBA = [255, 90, 40, 255];
  let bolge: SkinBolge | null = null;
  let sadeceBolge = false;
  let yakin = 8;
  let ciziyor = false;
  let sonX = -1;
  let sonY = -1;

  const sarmal = document.createElement("div");
  sarmal.className = "sk-edit";
  sarmal.innerHTML = `
    <header class="sk-edit-ust">
      <button class="btn ghost" id="ske-geri">${icon("back")} Kapat</button>
      <div class="sk-edit-baslik">
        <b>Skin Düzenle</b>
        <span id="ske-ad-etiket">${kacis(ad)}</span>
      </div>
      <div class="sk-edit-ust-sag">
        <div class="sk-edit-seg" role="group" aria-label="Model tipi">
          <button class="seg-btn aktif" data-slim="0">Wide</button>
          <button class="seg-btn" data-slim="1">Slim</button>
        </div>
        <button class="btn" id="ske-disa">${icon("dl")} Dışa Aktar</button>
        <button class="btn primary" id="ske-kaydet">Kaydet</button>
      </div>
    </header>
    <div class="sk-edit-govde">
      <section class="sk-edit-sol">
        <div class="sk-tuval-sar" id="ske-sar">
          <canvas id="ske-tuval" width="${BOYUT * yakin}" height="${BOYUT * yakin}"></canvas>
          <canvas id="ske-izgara" width="${BOYUT * yakin}" height="${BOYUT * yakin}"></canvas>
        </div>
        <div class="sk-edit-zum">
          ${[4, 8, 16].map((z) => `<button class="seg-btn ${z === yakin ? "aktif" : ""}" data-zum="${z}">${z}×</button>`).join("")}
          <span class="sk-edit-ipucu">Ctrl+Z geri · Ctrl+Shift+Z ileri · Ctrl+S kaydet</span>
        </div>
      </section>
      <aside class="sk-edit-sag">
        <div class="sk-edit-onizleme">
          <canvas id="ske-onizleme"></canvas>
        </div>
        <div class="sk-arac-cubugu">
          <button class="sk-arac aktif" data-arac="kalem" title="Kalem">${icon("brush")}</button>
          <button class="sk-arac" data-arac="silgi" title="Silgi">${icon("trash")}</button>
          <button class="sk-arac" data-arac="kova" title="Kova">${icon("bucket")}</button>
          <button class="sk-arac" data-arac="damla" title="Damlacık">${icon("picker")}</button>
          <span class="sk-arac-ayrac"></span>
          <button class="sk-arac" id="ske-geri-al" title="Geri Al">${icon("undo")}</button>
          <button class="sk-arac" id="ske-ileri-al" title="İleri Al">${icon("redo")}</button>
        </div>
        <div class="sk-renk-satir">
          <input type="color" id="ske-renk" value="#ff5a28" aria-label="Renk" />
          <input class="input" id="ske-renk-hex" value="#ff5a28" maxlength="7" spellcheck="false" />
          <div class="sk-kalinlik">
            ${[1, 2, 4].map((k) => `<button class="seg-btn ${k === 1 ? "aktif" : ""}" data-kalinlik="${k}">${k}</button>`).join("")}
          </div>
        </div>
        <div class="sk-palet" id="ske-palet">
          ${PALET.map((c) => `<button class="sk-palet-renk" data-renk="${c}" style="--c:${c}" title="${c}"></button>`).join("")}
        </div>
        <div class="sk-bolgeler">
          <div class="sk-bolgeler-ust">
            <b>Bölgeler</b>
            <label class="sk-onay"><input type="checkbox" id="ske-sadece" /> sadece bu parça</label>
          </div>
          <div class="sk-bolge-liste" id="ske-bolgeler">
            ${["taban", "ust"].map((kat) => `
              <div class="sk-bolge-grup">
                <span>${kat === "taban" ? "Taban katman" : "Üst katman"}</span>
                ${BOLGELER.filter((b) => b.katman === kat)
                  .map((b) => `<button class="sk-bolge" data-bolge="${b.id}">${b.ad}</button>`)
                  .join("")}
              </div>`).join("")}
          </div>
        </div>
        <div class="sk-edit-kayit">
          <label class="sk-edit-etiket">Skin adı</label>
          <input class="input" id="ske-ad" value="${kacis(ad)}" maxlength="48" />
          <div class="sk-edit-kayit-btn">
            <button class="btn" id="ske-kitaplik">${icon("folder")} Sadece Kitaplığa Kaydet</button>
            <button class="btn primary" id="ske-giy">${icon("check")} Kaydet ve Giy</button>
          </div>
          <div class="sk-edit-uyari" id="ske-uyari"></div>
        </div>
      </aside>
    </div>
  `;
  document.body.appendChild(sarmal);

  const tuval = sarmal.querySelector("#ske-tuval") as HTMLCanvasElement;
  const izgara = sarmal.querySelector("#ske-izgara") as HTMLCanvasElement;
  const ctx = tuval.getContext("2d") as CanvasRenderingContext2D;
  const ictx = izgara.getContext("2d") as CanvasRenderingContext2D;
  const onizleme = sarmal.querySelector("#ske-onizleme") as HTMLCanvasElement;
  const kaynak = document.createElement("canvas");
  kaynak.width = BOYUT;
  kaynak.height = BOYUT;
  const kctx = kaynak.getContext("2d") as CanvasRenderingContext2D;

  const sahne = sahneGetir();
  sahne.kur(onizleme);
  sahne.tuvalDoku(kaynak, slim);

  function yansit(): void {
    const img = new ImageData(new Uint8ClampedArray(pafta.veri), BOYUT, BOYUT);
    kctx.putImageData(img, 0, 0);
    ctx.imageSmoothingEnabled = false;
    ctx.clearRect(0, 0, tuval.width, tuval.height);
    ctx.drawImage(kaynak, 0, 0, tuval.width, tuval.height);
    izgaraCiz();
    sahne.dokuTazele();
  }

  function izgaraCiz(): void {
    ictx.clearRect(0, 0, izgara.width, izgara.height);
    const px = izgara.width / BOYUT;
    if (yakin >= 8) {
      ictx.strokeStyle = "rgba(255,255,255,0.09)";
      ictx.lineWidth = 1;
      for (let i = 1; i < BOYUT; i++) {
        ictx.beginPath();
        ictx.moveTo(i * px, 0);
        ictx.lineTo(i * px, izgara.height);
        ictx.stroke();
        ictx.beginPath();
        ictx.moveTo(0, i * px);
        ictx.lineTo(izgara.width, i * px);
        ictx.stroke();
      }
    }
    if (bolge) {
      ictx.strokeStyle = "rgba(255,150,60,0.95)";
      ictx.lineWidth = 2;
      ictx.setLineDash([6, 4]);
      ictx.strokeRect(bolge.x * px + 1, bolge.y * px + 1, bolge.w * px - 2, bolge.h * px - 2);
      ictx.setLineDash([]);
      if (sadeceBolge) {
        ictx.fillStyle = "rgba(0,0,0,0.55)";
        ictx.beginPath();
        ictx.rect(0, 0, izgara.width, izgara.height);
        ictx.rect(bolge.x * px, bolge.y * px, bolge.w * px, bolge.h * px);
        ictx.fill("evenodd");
      }
    }
  }

  function nokta(e: PointerEvent): [number, number] {
    const r = tuval.getBoundingClientRect();
    const x = Math.floor(((e.clientX - r.left) / r.width) * BOYUT);
    const y = Math.floor(((e.clientY - r.top) / r.height) * BOYUT);
    return [
      Math.max(0, Math.min(BOYUT - 1, x)),
      Math.max(0, Math.min(BOYUT - 1, y)),
    ];
  }

  function boyaRengi(): RGBA {
    return arac === "silgi" ? [0, 0, 0, 0] : renk;
  }

  tuval.addEventListener("pointerdown", (e) => {
    if (e.button !== 0) return;
    const [x, y] = nokta(e);
    ciziyor = true;
    sonX = x;
    sonY = y;
    tuval.setPointerCapture(e.pointerId);
    if (arac === "damla") {
      renk = pafta.damla(x, y);
      renkAyarla(renk);
      return;
    }
    pafta.katmanBasla();
    if (arac === "kova") {
      pafta.kova(x, y, boyaRengi());
    } else {
      pafta.boya(x, y, boyaRengi(), kalinlik);
    }
    yansit();
  });

  tuval.addEventListener("pointermove", (e) => {
    if (!ciziyor) return;
    const [x, y] = nokta(e);
    if (x === sonX && y === sonY) return;
    if (arac === "kalem" || arac === "silgi") {
      pafta.cizgi(sonX, sonY, x, y, boyaRengi(), kalinlik);
      yansit();
    }
    sonX = x;
    sonY = y;
  });

  const bitir = () => {
    ciziyor = false;
    sonX = -1;
    sonY = -1;
  };
  tuval.addEventListener("pointerup", bitir);
  tuval.addEventListener("pointercancel", bitir);

  function renkAyarla(c: RGBA): void {
    renk = c;
    const hex = rgbaHex(c);
    (sarmal.querySelector("#ske-renk") as HTMLInputElement).value = hex;
    (sarmal.querySelector("#ske-renk-hex") as HTMLInputElement).value = hex;
    sarmal.querySelectorAll<HTMLElement>(".sk-palet-renk").forEach((b) => {
      b.classList.toggle("aktif", b.dataset.renk?.toLowerCase() === hex.toLowerCase());
    });
  }

  (sarmal.querySelector("#ske-renk") as HTMLInputElement).addEventListener("input", (e) => {
    renkAyarla(hexRgba((e.target as HTMLInputElement).value));
  });
  (sarmal.querySelector("#ske-renk-hex") as HTMLInputElement).addEventListener("change", (e) => {
    const v = (e.target as HTMLInputElement).value.trim();
    if (/^#[0-9a-fA-F]{6}$/.test(v)) renkAyarla(hexRgba(v));
  });
  sarmal.querySelector("#ske-palet")?.addEventListener("click", (e) => {
    const b = (e.target as HTMLElement).closest<HTMLElement>(".sk-palet-renk");
    if (!b?.dataset.renk) return;
    renkAyarla(hexRgba(b.dataset.renk));
  });

  sarmal.querySelectorAll<HTMLElement>(".sk-arac[data-arac]").forEach((b) => {
    b.addEventListener("click", () => {
      arac = b.dataset.arac as Arac;
      sarmal.querySelectorAll(".sk-arac[data-arac]").forEach((x) => x.classList.remove("aktif"));
      b.classList.add("aktif");
    });
  });

  sarmal.querySelectorAll<HTMLElement>("[data-kalinlik]").forEach((b) => {
    b.addEventListener("click", () => {
      kalinlik = Number(b.dataset.kalinlik);
      sarmal.querySelectorAll("[data-kalinlik]").forEach((x) => x.classList.remove("aktif"));
      b.classList.add("aktif");
    });
  });

  sarmal.querySelectorAll<HTMLElement>("[data-zum]").forEach((b) => {
    b.addEventListener("click", () => {
      yakin = Number(b.dataset.zum);
      tuval.width = tuval.height = izgara.width = izgara.height = BOYUT * yakin;
      sarmal.querySelectorAll("[data-zum]").forEach((x) => x.classList.remove("aktif"));
      b.classList.add("aktif");
      yansit();
    });
  });

  sarmal.querySelectorAll<HTMLElement>("[data-slim]").forEach((b) => {
    b.addEventListener("click", () => {
      slim = b.dataset.slim === "1";
      sarmal.querySelectorAll("[data-slim]").forEach((x) => x.classList.remove("aktif"));
      b.classList.add("aktif");
      sahne.tuvalDoku(kaynak, slim);
      if (slim) uyari("Slim modelde kollar 1 px daha ince — kol bölgesi kayabilir.");
      else uyari("");
    });
  });

  sarmal.querySelector("#ske-bolgeler")?.addEventListener("click", (e) => {
    const b = (e.target as HTMLElement).closest<HTMLElement>("[data-bolge]");
    if (!b?.dataset.bolge) return;
    bolge = BOLGELER.find((x) => x.id === b.dataset.bolge) ?? null;
    sarmal.querySelectorAll("[data-bolge]").forEach((x) => x.classList.remove("aktif"));
    b.classList.add("aktif");
    izgaraCiz();
  });

  (sarmal.querySelector("#ske-sadece") as HTMLInputElement).addEventListener("change", (e) => {
    sadeceBolge = (e.target as HTMLInputElement).checked;
    izgaraCiz();
  });

  const geriAl = () => {
    if (pafta.geriAl()) yansit();
  };
  const ileriAl = () => {
    if (pafta.ileriAl()) yansit();
  };
  sarmal.querySelector("#ske-geri-al")?.addEventListener("click", geriAl);
  sarmal.querySelector("#ske-ileri-al")?.addEventListener("click", ileriAl);

  const tus = (e: KeyboardEvent) => {
    if (!document.body.contains(sarmal)) return;
    const ctrl = e.ctrlKey || e.metaKey;
    if (!ctrl) return;
    if (e.key.toLowerCase() === "z") {
      e.preventDefault();
      if (e.shiftKey) ileriAl();
      else geriAl();
    } else if (e.key.toLowerCase() === "s") {
      e.preventDefault();
      void kaydetTikla(true);
    }
  };
  window.addEventListener("keydown", tus);

  function uyari(mesaj: string): void {
    const u = sarmal.querySelector("#ske-uyari") as HTMLElement;
    u.textContent = mesaj;
  }

  function pngBaytlari(): Promise<number[]> {
    return new Promise((res) => {
      kaynak.toBlob(async (b) => {
        if (!b) return res([]);
        const buf = new Uint8Array(await b.arrayBuffer());
        res(Array.from(buf));
      }, "image/png");
    });
  }

  async function kaydetTikla(giy: boolean): Promise<void> {
    const adEl = sarmal.querySelector("#ske-ad") as HTMLInputElement;
    ad = adEl.value.trim() || ad;
    if (!ad) ad = "Skin";
    if (giy) {
      const onay = await onaySor(
        "Skini giy",
        `<b>${kacis(ad)}</b> Mojang hesabına yazılacak ve sunucularda görünecek. Onaylıyor musun?`,
        "Giy",
      );
      if (!onay) return;
    }
    const veri = await pngBaytlari();
    if (!veri.length) {
      uyari("PNG üretilemedi.");
      return;
    }
    const btn = sarmal.querySelector(giy ? "#ske-giy" : "#ske-kitaplik") as HTMLButtonElement;
    btn.disabled = true;
    uyari(giy ? "Mojang hesabına yazılıyor…" : "Kitaplığa kaydediliyor…");
    try {
      await kaydet({ veri, slim, ad }, giy);
      uyari("");
      kapatFn();
    } catch (e) {
      uyari(String(e));
      btn.disabled = false;
    }
  }

  sarmal.querySelector("#ske-kitaplik")?.addEventListener("click", () => void kaydetTikla(false));
  sarmal.querySelector("#ske-giy")?.addEventListener("click", () => void kaydetTikla(true));

  sarmal.querySelector("#ske-disa")?.addEventListener("click", async () => {
    const veri = await pngBaytlari();
    const adEl = sarmal.querySelector("#ske-ad") as HTMLInputElement;
    try {
      const { invoke } = await import("../main");
      const yol = await invoke("cmd_skin_disa_aktar", { ad: adEl.value.trim() || "skin", veri });
      toast(`Dışa aktarıldı: ${yol}`);
    } catch (e) {
      toast(String(e), "err");
    }
  });

  // "Dosya ile değiştir": tuvalin üstüne çift tıklama yerine başlıktaki küçük düğme.
  const dosyaBtn = document.createElement("button");
  dosyaBtn.className = "btn ghost sk-dosya-btn";
  dosyaBtn.innerHTML = `${icon("image")} Dosya`;
  const dosyaGiris = document.createElement("input");
  dosyaGiris.type = "file";
  dosyaGiris.accept = "image/png";
  dosyaGiris.style.display = "none";
  dosyaBtn.addEventListener("click", () => dosyaGiris.click());
  dosyaGiris.addEventListener("change", async () => {
    const f = dosyaGiris.files?.[0];
    if (f) await dosyaYukle(f);
    dosyaGiris.value = "";
  });
  (sarmal.querySelector("#ske-geri") as HTMLElement).after(dosyaBtn);
  sarmal.appendChild(dosyaGiris);

  async function dosyaYukle(f: File): Promise<void> {
    try {
      const url = URL.createObjectURL(f);
      const img = await new Promise<HTMLImageElement>((res, rej) => {
        const i = new Image();
        i.onload = () => res(i);
        i.onerror = () => rej(new Error("görsel okunamadı"));
        i.src = url;
      });
      const gecici = document.createElement("canvas");
      gecici.width = img.width;
      gecici.height = img.height;
      const g = gecici.getContext("2d") as CanvasRenderingContext2D;
      g.drawImage(img, 0, 0);
      URL.revokeObjectURL(url);
      const imgData = g.getImageData(0, 0, img.width, img.height);
      pafta.katmanBasla();
      if (img.width === 64 && img.height === 64) {
        pafta.veri.set(imgData.data);
      } else if (img.width === 64 && img.height === 32) {
        pafta.veri.set(eskiPaftayiGenislet(imgData.data));
      } else {
        toast(`Skin 64×64 veya 64×32 olmalı (bu dosya ${img.width}×${img.height})`, "err");
        return;
      }
      yansit();
    } catch (e) {
      toast(String(e), "err");
    }
  }

  const kapatFn = () => {
    window.removeEventListener("keydown", tus);
    sarmal.remove();
    try {
      sahne.kapati();
    } catch { /* zaten kapalı */ }
    kapat();
  };
  sarmal.querySelector("#ske-geri")?.addEventListener("click", kapatFn);
  sarmal.querySelector("#ske-kaydet")?.addEventListener("click", () => {
    const k = sarmal.querySelector(".sk-edit-kayit") as HTMLElement;
    k.scrollIntoView({ behavior: "smooth", block: "center" });
    (k.querySelector("#ske-ad") as HTMLInputElement).focus();
  });

  // Boyut: önizleme canvas'ı CSS ile ölçeklenir; sahne kendi resize'ını yönetir.
  renkAyarla(renk);
  yansit();
  void root;
}

function rgbaHex(c: RGBA): string {
  const h = (n: number): string => n.toString(16).padStart(2, "0");
  return `#${h(c[0])}${h(c[1])}${h(c[2])}`;
}

function hexRgba(hex: string): RGBA {
  const s = hex.replace("#", "");
  return [
    parseInt(s.slice(0, 2), 16) || 0,
    parseInt(s.slice(2, 4), 16) || 0,
    parseInt(s.slice(4, 6), 16) || 0,
    255,
  ];
}

function kacis(s: string): string {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c] as string));
}

/** Editör üstünde onay penceresi (modal katmanı 4000'de, editörün üstünde). */
function onaySor(baslik: string, govde: string, onayMetni: string): Promise<boolean> {
  return new Promise((coz) => {
    const { root, close } = openModal(`
      <h2>${baslik}</h2>
      <div class="sub" style="margin-bottom:16px">${govde}</div>
      <div style="display:flex; gap:10px; justify-content:flex-end">
        <button class="btn" id="ed-vazgec">Vazgeç</button>
        <button class="btn primary" id="ed-tamam">${onayMetni}</button>
      </div>`);
    let bitti = false;
    const bitir = (v: boolean) => {
      if (bitti) return;
      bitti = true;
      close();
      coz(v);
    };
    root.querySelector("#ed-vazgec")?.addEventListener("click", () => bitir(false));
    root.querySelector("#ed-tamam")?.addEventListener("click", () => bitir(true));
    const arka = root.parentElement as HTMLElement | null;
    arka?.addEventListener("click", (e) => {
      if (e.target === arka) bitir(false);
    });
  });
}
