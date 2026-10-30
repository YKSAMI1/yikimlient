// KOZMETİKLER — özel pelerin ve elitra kanadı (ücretsiz).
//
// Akış: pelerin tasarımı 10×16, kanat tasarımı 10×20 piksel ızgarada çizilir
// (ya da fotoğraftan/paftadan indirgenir) → "Kaydet" tüm kurulumların
// `.yikim/` klasörüne 64×32 vanilla doku olarak yazılır ve presence
// sunucusuna gönderilir. Böylece hem kendi oyununda hem aynı sunucudaki diğer
// YIKIMLient oyuncularında görünür. Kredi/ücret YOKTUR.
//
// Önizleme 2D değil: Skin Merkezi ile aynı 3D karakter sahnesi kullanılır,
// çizilen pelerin/kanat her fırça darbesinde karakterin üstünde güncellenir.

import { currentAccount, fileSrc, icon, invoke, toast } from "../main";
import { sahneGetir, sahneKapat } from "../sahne/karakter";
import { bosMu, kanatPaftasi, pelerinPaftasi } from "../sahne/kozmetik-pafta";
import { PELERIN_DIS } from "../sahne/skin-bolgeler";

interface KozmetikDurum {
  pelerin: string[] | null;
  kanat: string[] | null;
  pelerin_dosya: string | null;
  kanat_dosya: string | null;
}

interface Izgara {
  g: number;
  y: number;
  ad: string;
  pikseller: string[];
  renk: string;
}

const PALET = [
  "#0b0b10", "#1d1d24", "#3a3a46", "#6b6b7a", "#a8a8b6", "#e8e8ef",
  "#ff8a3d", "#ff5a1f", "#ffd166", "#f6f6f6", "#ff4d6d", "#b8132f",
  "#7b2ff7", "#3d5afe", "#22d3ee", "#0ea5a3", "#22c55e", "#166534",
  "#8b5e34", "#d9a066", "#f5c6a5", "#e11d48", "#111827", "#4b5563",
];

/** Izgara ölçeği (ekranda piksel başına CSS pikseli). */
const OLC = 14;

let pelerin: Izgara | null = null;
let kanat: Izgara | null = null;

const kacis = (s: string): string =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c] as string));

export function renderKozmetik(root: HTMLElement): void {
  sahneKapat();
  pelerin = null;
  kanat = null;
  root.innerHTML = iskelet();
  void yukle(root);
}

function iskelet(): string {
  return `
    <div class="page-wrap kozmetik-sayfa">
      <div class="page-header">
        <div>
          <h1>Kozmetikler</h1>
          <p class="sub">Pelerinini ve elitra kanadını çiz ya da hazır paftadan yükle — tamamen ücretsiz.
             YIKIMLient kullanan herkeste görünür (cracked ve premium fark etmez).</p>
        </div>
      </div>

      <div class="kz-yerlesim">
        <aside class="kz-oniz3d">
          <div class="kz-oniz3d-ust">
            <span>${icon("user")} Karakterde görünüm</span>
            <span class="kz-ipucu">Sürükleyerek döndür</span>
          </div>
          <canvas id="kz-sahne"></canvas>
          <p class="kz-ipucu kz-oniz3d-alt">Çizdikçe anında güncellenir. Oyun açıkken kaydetmek yeterli.</p>
        </aside>

        <div class="kz-izgara">
          <section class="kz-kart" id="kz-pelerin-kart">
            <div class="kz-kart-ust">
              <h3>${icon("shirt")} Pelerin</h3>
              <span class="kz-rozet" id="kz-pelerin-durum"></span>
            </div>
            <div class="kz-govde">
              <canvas class="kz-tuval" id="kz-pelerin-tuval" width="${10 * OLC}" height="${16 * OLC}"></canvas>
              <div class="kz-yan">
                <div class="kz-araclar" id="kz-pelerin-palet"></div>
                <div class="kz-renk-satir">
                  <label for="kz-pelerin-renk">Renk</label>
                  <input type="color" id="kz-pelerin-renk" value="#ff8a3d" />
                  <button class="btn" id="kz-pelerin-sil" title="Silgi (çizerek siler)">Silgi</button>
                  <button class="btn" id="kz-pelerin-temizle" title="Tümünü temizle">${icon("trash")} Temizle</button>
                </div>
              </div>
            </div>
            <div class="kz-alt">
              <label class="btn" for="kz-pelerin-dosya" title="Düz fotoğraf ya da hazır 64×32 pelerin paftası">${icon("image")} Fotoğraf / Pafta</label>
              <input type="file" id="kz-pelerin-dosya" accept="image/*" style="display:none" />
              <button class="btn primary" id="kz-pelerin-kaydet">${icon("check")} Kaydet</button>
              <button class="btn" id="kz-pelerin-kaldir">Kaldır</button>
              <span class="kz-ipucu">Sol tık: çiz · Sağ tık: sil</span>
            </div>
          </section>

          <section class="kz-kart" id="kz-kanat-kart">
            <div class="kz-kart-ust">
              <h3>${icon("sparkle")} Elitra Kanadı</h3>
              <span class="kz-rozet" id="kz-kanat-durum"></span>
            </div>
            <div class="kz-govde">
              <canvas class="kz-tuval" id="kz-kanat-tuval" width="${10 * OLC}" height="${20 * OLC}"></canvas>
              <div class="kz-yan">
                <div class="kz-araclar" id="kz-kanat-palet"></div>
                <div class="kz-renk-satir">
                  <label for="kz-kanat-renk">Renk</label>
                  <input type="color" id="kz-kanat-renk" value="#3d5afe" />
                  <button class="btn" id="kz-kanat-sil" title="Silgi (çizerek siler)">Silgi</button>
                  <button class="btn" id="kz-kanat-temizle" title="Tümünü temizle">${icon("trash")} Temizle</button>
                </div>
              </div>
            </div>
            <div class="kz-alt">
              <label class="btn" for="kz-kanat-dosya" title="Düz fotoğraf ya da hazır 64×32 elitra paftası">${icon("image")} Fotoğraf / Pafta</label>
              <input type="file" id="kz-kanat-dosya" accept="image/*" style="display:none" />
              <button class="btn primary" id="kz-kanat-kaydet">${icon("check")} Kaydet</button>
              <button class="btn" id="kz-kanat-kaldir">Kaldır</button>
              <span class="kz-ipucu">Kanatlar oyunda ayna simetriktir</span>
            </div>
          </section>
        </div>
      </div>

      <p class="kz-dipnot">Kozmetikler oyun açıkken de uygulanır: kaydettikten sonra en geç birkaç saniye
        içinde oyunda görünür. Aynı sunucudaki diğer YIKIMLient oyuncuları da senin pelerinini görür.</p>
    </div>`;
}

// ---------------------------------------------------------------- yükleme

async function yukle(root: HTMLElement): Promise<void> {
  let durum: KozmetikDurum;
  try {
    durum = (await invoke("cmd_kozmetik_oku")) as KozmetikDurum;
  } catch (e) {
    toast(String(e), "err");
    durum = { pelerin: null, kanat: null, pelerin_dosya: null, kanat_dosya: null };
  }
  pelerin = {
    g: 10,
    y: 16,
    ad: "Pelerin",
    pikseller: durum.pelerin ?? bos(10 * 16),
    renk: "#ff8a3d",
  };
  kanat = {
    g: 10,
    y: 20,
    ad: "Kanat",
    pikseller: durum.kanat ?? bos(10 * 20),
    renk: "#3d5afe",
  };
  sahnayiKur(root);
  duzenle(root, pelerin);
  duzenle(root, kanat);
}

const bos = (n: number): string[] => Array.from({ length: n }, () => "");

/** 3D karakter sahnesi: oyuncunun kendi skini üstünde kozmetik önizlemesi. */
function sahnayiKur(root: HTMLElement): void {
  const canvas = root.querySelector<HTMLCanvasElement>("#kz-sahne");
  if (!canvas) return;
  const sahne = sahneGetir();
  sahne.kur(canvas);
  void (async () => {
    try {
      const acc = currentAccount();
      if (!acc || acc.kind !== "microsoft") return;
      const hub = (await invoke("cmd_skin_hub", { id: acc.id })) as {
        aktif?: { dosya?: string; slim?: boolean } | null;
      };
      const aktif = hub?.aktif;
      if (aktif?.dosya) {
        await sahne.skin({ url: fileSrc(aktif.dosya), slim: !!aktif.slim });
      }
    } catch {
      // skin alınamazsa varsayılan model kalır — önizleme yine çalışır
    }
  })();
}

/** Izgara değişti → 3D önizlemeyi tazele. */
function onizle(hedef: Izgara): void {
  const sahne = sahneGetir();
  if (hedef.ad === "Pelerin") {
    sahne.pelerinTuval(bosMu(hedef.pikseller) ? null : pelerinPaftasi(hedef.pikseller));
  } else {
    sahne.kanatTuval(bosMu(hedef.pikseller) ? null : kanatPaftasi(hedef.pikseller));
  }
}

function duzenle(root: HTMLElement, hedef: Izgara): void {
  const on = hedef.ad.toLowerCase();
  const tuval = root.querySelector<HTMLCanvasElement>(`#kz-${on}-tuval`);
  if (!tuval) return;
  paletCiz(root, hedef);
  const durum = root.querySelector<HTMLElement>(`#kz-${on}-durum`);
  if (durum) durum.textContent = bosMu(hedef.pikseller) ? "" : "KAYITLI";
  const renkGirdi = root.querySelector<HTMLInputElement>(`#kz-${on}-renk`);
  if (renkGirdi) renkGirdi.value = hedef.renk;
  ciz(hedef, tuval);

  let ciziyor = false;
  let silerek = false;
  const pikselAl = (e: PointerEvent): void => {
    const yer = tuval.getBoundingClientRect();
    const x = Math.floor(((e.clientX - yer.left) / yer.width) * hedef.g);
    const y = Math.floor(((e.clientY - yer.top) / yer.height) * hedef.y);
    if (x < 0 || y < 0 || x >= hedef.g || y >= hedef.y) return;
    const indeks = y * hedef.g + x;
    hedef.pikseller[indeks] = silerek ? "" : hedef.renk;
    ciz(hedef, tuval);
    onizle(hedef);
  };
  tuval.addEventListener("contextmenu", (e) => e.preventDefault());
  tuval.addEventListener("pointerdown", (e) => {
    ciziyor = true;
    silerek = e.button === 2;
    try {
      tuval.setPointerCapture(e.pointerId);
    } catch {
      /* pencere kapanmış olabilir */
    }
    pikselAl(e);
  });
  tuval.addEventListener("pointermove", (e) => {
    if (ciziyor) pikselAl(e);
  });
  const birak = (): void => {
    ciziyor = false;
  };
  tuval.addEventListener("pointerup", birak);
  tuval.addEventListener("pointercancel", birak);

  renkGirdi?.addEventListener("input", () => {
    hedef.renk = renkGirdi.value;
  });

  root.querySelector(`#kz-${on}-sil`)?.addEventListener("click", () => {
    hedef.renk = ""; // çizerek siler; palette bir renk seçince fırçaya döner
  });

  root.querySelector(`#kz-${on}-temizle`)?.addEventListener("click", () => {
    for (let i = 0; i < hedef.pikseller.length; i++) hedef.pikseller[i] = "";
    ciz(hedef, tuval);
    onizle(hedef);
  });

  root.querySelector(`#kz-${on}-kaydet`)?.addEventListener("click", () => void kaydet(root, hedef));
  root.querySelector(`#kz-${on}-kaldir`)?.addEventListener("click", () => {
    for (let i = 0; i < hedef.pikseller.length; i++) hedef.pikseller[i] = "";
    ciz(hedef, tuval);
    onizle(hedef);
    void kaydet(root, hedef);
  });

  const dosya = root.querySelector<HTMLInputElement>(`#kz-${on}-dosya`);
  dosya?.addEventListener("change", () => {
    const f = dosya.files?.[0];
    if (f) void fotograftan(root, hedef, tuval, f);
    dosya.value = "";
  });

  onizle(hedef);
}

function paletCiz(root: HTMLElement, hedef: Izgara): void {
  const kutu = root.querySelector<HTMLElement>(`#kz-${hedef.ad.toLowerCase()}-palet`);
  if (!kutu) return;
  kutu.innerHTML = PALET.map((r) => `<button class="kz-renk" data-renk="${r}" style="background:${r}" title="${r}"></button>`).join("");
  const renkGirdi = root.querySelector<HTMLInputElement>(`#kz-${hedef.ad.toLowerCase()}-renk`);
  kutu.querySelectorAll<HTMLButtonElement>(".kz-renk").forEach((b) => {
    b.addEventListener("click", () => {
      hedef.renk = b.dataset.renk ?? "#ffffff";
      if (renkGirdi) renkGirdi.value = hedef.renk;
      kutu.querySelectorAll(".kz-renk").forEach((x) => x.classList.remove("aktif"));
      b.classList.add("aktif");
    });
  });
}

// ---------------------------------------------------------------- çizim

function ciz(hedef: Izgara, tuval: HTMLCanvasElement): void {
  const g = tuval.getContext("2d");
  if (!g) return;
  g.imageSmoothingEnabled = false;
  g.clearRect(0, 0, tuval.width, tuval.height);
  // dama zemini (saydamlık göstergesi)
  for (let y = 0; y < hedef.y; y++) {
    for (let x = 0; x < hedef.g; x++) {
      g.fillStyle = (x + y) % 2 === 0 ? "#17171d" : "#1f1f27";
      g.fillRect(x * OLC, y * OLC, OLC, OLC);
    }
  }
  for (let y = 0; y < hedef.y; y++) {
    for (let x = 0; x < hedef.g; x++) {
      const renk = hedef.pikseller[y * hedef.g + x];
      if (!renk) continue;
      g.fillStyle = renk;
      g.fillRect(x * OLC, y * OLC, OLC, OLC);
    }
  }
}

// ---------------------------------------------------------------- fotoğraf / pafta

const hex = (n: number): string => n.toString(16).padStart(2, "0");

/** Hazır 64×32 paftadan tasarım ızgarasını oku (pelerin: 1,1 · elitra: 24,2). */
function paftadanOku(g: CanvasRenderingContext2D, hedef: Izgara): string[] {
  const x0 = hedef.ad === "Pelerin" ? PELERIN_DIS.x : 24;
  const y0 = hedef.ad === "Pelerin" ? PELERIN_DIS.y : 2;
  const veri = g.getImageData(x0, y0, hedef.g, hedef.y).data;
  const cikti: string[] = [];
  for (let i = 0; i < hedef.g * hedef.y; i++) {
    const a = veri[i * 4 + 3];
    cikti.push(a < 24 ? "" : `#${hex(veri[i * 4])}${hex(veri[i * 4 + 1])}${hex(veri[i * 4 + 2])}`);
  }
  return cikti;
}

async function fotograftan(root: HTMLElement, hedef: Izgara, tuval: HTMLCanvasElement, f: File): Promise<void> {
  try {
    const url = URL.createObjectURL(f);
    const resim = await new Promise<HTMLImageElement>((cozum, red) => {
      const i = new Image();
      i.onload = () => cozum(i);
      i.onerror = () => red(new Error("görsel okunamadı"));
      i.src = url;
    });
    URL.revokeObjectURL(url);

    // HAZIR PAFTA: 64×32 (ya da 2×/4× büyütülmüş) vanilya düzeni.
    // Minecraft pelerin/elitra şablonları bu boyutta gelir; kullanıcı elindeki
    // dosyayı kırpmak zorunda kalmadan doğrudan kullanabilsin.
    const oran = resim.width / Math.max(1, resim.height);
    const paftaMi = Math.abs(oran - 2) < 0.02 && resim.height >= 32;
    if (paftaMi) {
      const ara = document.createElement("canvas");
      ara.width = 64;
      ara.height = 32;
      const ga = ara.getContext("2d", { willReadFrequently: true });
      if (!ga) throw new Error("tuval yok");
      ga.imageSmoothingEnabled = false;
      ga.drawImage(resim, 0, 0, 64, 32);
      const yeni = paftadanOku(ga, hedef);
      if (bosMu(yeni)) throw new Error("paftada tasarım paneli boş — 64×32 pelerin şablonu bekleniyordu");
      for (let i = 0; i < yeni.length; i++) hedef.pikseller[i] = yeni[i];
      ciz(hedef, tuval);
      onizle(hedef);
      toast("Pafta okundu — tasarım ızgaraya alındı.");
      return;
    }

    // DÜZ FOTOĞRAF: ortadan kırp → ızgara oranına getir → piksellere indirge
    const oranHedef = hedef.g / hedef.y;
    let kw = resim.width;
    let kh = kw / oranHedef;
    if (kh > resim.height) {
      kh = resim.height;
      kw = kh * oranHedef;
    }
    const kx = (resim.width - kw) / 2;
    const ky = (resim.height - kh) / 2;
    const ara = document.createElement("canvas");
    ara.width = hedef.g;
    ara.height = hedef.y;
    const ga = ara.getContext("2d", { willReadFrequently: true });
    if (!ga) throw new Error("tuval yok");
    ga.imageSmoothingEnabled = false;
    ga.drawImage(resim, kx, ky, kw, kh, 0, 0, hedef.g, hedef.y);
    const veri = ga.getImageData(0, 0, hedef.g, hedef.y).data;
    for (let i = 0; i < hedef.g * hedef.y; i++) {
      const a = veri[i * 4 + 3];
      if (a < 24) {
        hedef.pikseller[i] = "";
        continue;
      }
      hedef.pikseller[i] = `#${hex(veri[i * 4])}${hex(veri[i * 4 + 1])}${hex(veri[i * 4 + 2])}`;
    }
    ciz(hedef, tuval);
    onizle(hedef);
    toast("Fotoğraf indirgendi — istersen fırçayla düzeltebilirsin.");
  } catch (e) {
    toast(String(e), "err");
  }
}

// ---------------------------------------------------------------- kayıt

async function kaydet(root: HTMLElement, hedef: Izgara): Promise<void> {
  const dolu = !bosMu(hedef.pikseller);
  try {
    const sonuc = (await invoke("cmd_kozmetik_kaydet", {
      pelerin: hedef.ad === "Pelerin" ? hedef.pikseller : null,
      kanat: hedef.ad === "Kanat" ? hedef.pikseller : null,
    })) as { kurulum: number; yuklendi: boolean; hata: string };
    const durum = root.querySelector<HTMLElement>(`#kz-${hedef.ad.toLowerCase()}-durum`);
    if (durum) durum.textContent = dolu ? "KAYITLI" : "";
    if (!dolu) {
      toast(`${hedef.ad} kaldırıldı.`);
      return;
    }
    if (sonuc.yuklendi) toast(`${hedef.ad} kaydedildi — oyunda ve diğer oyuncularda görünecek.`);
    else toast(`${hedef.ad} kaydedildi (yerel). Sunucu: ${kacis(sonuc.hata || "ulaşılamadı")}`);
  } catch (e) {
    toast(String(e), "err");
  }
}
