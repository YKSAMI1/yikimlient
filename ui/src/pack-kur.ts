// PAKET KURULUM DURUMU — sade bildirim kartı + baslik çubuğu zili.
//
// Varsayilan olarak KÜÇÜK: yalnızca başlık + bar + tek satır ozet. Ekrani
// kaplamaz. Tıklanınca (kartın kafasina ya da baslik çubuğundaki zile) TAM
// adım listesi acilir. Bitis +→ kendini kapatir (bir kac saniye sonra).
//
// Backend: Rust her adımda "pack-step" olayı yayınlar
//   1 paket → 2 açılıyor → 3 yapılandırma → 4 modlar → 5 yükleyici →
//   6 oyun dosyaları (sürüm kurulumu) → 7 YIKIM modu → 8 hazır.

import { listen, toast } from "./main";

export type Durum = "bekliyor" | "aktif" | "bitti" | "hata" | "atlandi";

const ADIMLAR: { adim: number; ad: string; aciklama: string }[] = [
  { adim: 1, ad: "Paket indiriliyor", aciklama: "sunucudan paket dosyası alınıyor" },
  { adim: 2, ad: "Paket açılıyor", aciklama: "sürüm / yükleyici bilgisi okunuyor" },
  { adim: 3, ad: "Yapılandırma dosyaları", aciklama: "paketin kendi ayarları yazılıyor" },
  { adim: 4, ad: "Modlar indiriliyor", aciklama: "her mod ayrı indirilip mods/ bırakılıyor" },
  { adim: 5, ad: "Yükleyici kuruluyor", aciklama: "Fabric/Forge/NeoForge profili hazırlanıyor" },
  { adim: 6, ad: "Oyun dosyaları", aciklama: "sürüm kurulumu: kütüphaneler + assetler + java" },
  { adim: 7, ad: "YIKIM modu", aciklama: "launcher çekirdeği kuruluma bağlanıyor" },
  { adim: 8, ad: "Hazır", aciklama: "kurulum oynanabilir" },
];

interface KartDurum {
  root: HTMLElement;
  satirlar: Map<number, HTMLElement>;
  detaylar: Map<number, HTMLElement>;
  bar: HTMLElement;
  yuzde: HTMLElement;
  ozet: HTMLElement;
  kapandi: boolean;
  kapatZamani: number;
  bitti: boolean;
}

let kart: KartDurum | null = null;
let dinleyiciOff: (() => void) | null = null;
let sonKapatlayici: number | null = null;

function detayMetni(done: number, total: number, ayrinti: string): string {
  const sayac = total > 0 ? `${done}/${total}` : "";
  if (ayrinti && sayac) return `${sayac} · ${ayrinti}`;
  return ayrinti || sayac;
}

/// Kartı (yoksa oluştur) gösterir ve durumu sıfırlar.
export function packKartBaslat(ad: string): void {
  if (kart) {
    kart.kapandi = false;
    kart.bitti = false;
    for (const s of kart.satirlar.values()) {
      s.classList.remove("pk-bitti", "pk-aktif", "pk-hata", "pk-atlandi");
      s.classList.add("pk-bekliyor");
    }
    kart.root.classList.remove("pk-gizli", "pk-acik", "pk-bitti");
  } else {
    kart = yeniKart();
  }
  const baslikEl = kart.root.querySelector(".pk-baslik") as HTMLElement;
  baslikEl.textContent = ad;
  (kart.root.querySelector(".pk-ozet") as HTMLElement).textContent = "Kurulum başlıyor…";
  kart.root.style.removeProperty("color");
  kart.bar.style.transform = "scaleX(0.01)";
  kart.yuzde.textContent = "%0";
  if (!dinleyiciOff) {
    // yalnızca kart yaşarken dinle (üretim olayları @tauri-apps/api/event kanalı)
    void listen("pack-step", (e: any) => {
      const p = e?.payload;
      if (!kart || !p) return;
      adimUygula(p.adim, p.durum, p.done || 0, p.total || 0, p.ayrinti || "", p.percent || 0);
    }).then((off: () => void) => { dinleyiciOff = off; });
  }
  zilGuncelle(true, false);
}

/// Tam listeyi aç/kapa (kart kafası + başlık çubuğu zili aynı işi yapar).
export function packKartDegistir(): void {
  if (!kart) return;
  kart.root.classList.toggle("pk-acik");
}

/// Kurulum tamam: kalan adımları kapat, hazır işaretle, X sn sonra gizle.
export function packKartTamam(): void {
  if (!kart) return;
  for (const [adim, s] of kart.satirlar) {
    if (s.classList.contains("pk-bekliyor") && adim < 8) {
      s.classList.remove("pk-bekliyor");
      s.classList.add("pk-atlandi");
    }
  }
  const s8 = kart.satirlar.get(8);
  if (s8) {
    s8.classList.remove("pk-bekliyor", "pk-aktif");
    s8.classList.add("pk-bitti");
  }
  kart.bar.style.transform = "scaleX(1)";
  kart.yuzde.textContent = "%100";
  const ozet = kart.root.querySelector(".pk-ozet") as HTMLElement;
  ozet.textContent = "Kurulum tamam — Kurulumlar'dan oynayabilirsin";
  kart.bitti = true;
  kart.root.classList.add("pk-bitti");
  kart.kapatZamani = Date.now() + 6000;
  zilGuncelle(false, true);
  if (sonKapatlayici === null) kapatZamanlayiciBaslat();
}

/// Hata: kart açık kalır ve hata adımı kırmızıya döner.
export function packKartHata(mesaj: string): void {
  if (!kart) return;
  const ozet = kart.root.querySelector(".pk-ozet") as HTMLElement;
  ozet.textContent = `Kurulum durdu: ${mesaj}`;
  ozet.style.color = "var(--danger)";
  const aktif = [...kart.satirlar.values()].find((s) => s.classList.contains("pk-aktif"));
  if (aktif) {
    aktif.classList.remove("pk-aktif");
    aktif.classList.add("pk-hata");
  }
  kart.root.classList.add("pk-acik"); // hata detayı görünsün
  zilGuncelle(true, false);
}

/// Dışarıdan (mock / test) elle adım basmak için.
export function packKartTest(
  adim: number,
  durum: Durum,
  done: number,
  total: number,
  ayrinti: string,
): void {
  if (!kart) return;
  adimUygula(adim, durum, done, total, ayrinti, 0);
}

/// Zil durumu: kurulum sürüyorsa nokta canlı, bittiyse gri, yoksa soluk.
function zilGuncelle(kurulum: boolean, bitti: boolean): void {
  const btn = document.querySelector("#tb-pack") as HTMLElement | null;
  if (!btn) return;
  btn.classList.toggle("pk-var", kurulum || bitti);
  btn.classList.toggle("pk-bitti", bitti);
  btn.title = bitti
    ? "Kurulum tamamlandı — durumu göster"
    : kurulum
      ? "Mod paketi kuruluyor — durumu göster"
      : "Kurulum durumu";
}

function adimUygula(
  adim: number,
  durum: Durum,
  done: number,
  total: number,
  ayrinti: string,
  percent: number,
): void {
  if (!kart || !kart.satirlar.has(adim)) return;
  const satir = kart.satirlar.get(adim)!;
  satir.classList.remove("pk-bekliyor", "pk-aktif", "pk-bitti", "pk-hata", "pk-atlandi");
  satir.classList.add(`pk-${durum}`);
  const detay = kart.detaylar.get(adim)!;
  detay.textContent = detayMetni(done, total, ayrinti);
  const p = percent || ((adim - 1) / 8) * 100;
  kart.bar.style.transform = `scaleX(${Math.min(1, Math.max(0.01, p / 100))})`;
  kart.yuzde.textContent = `%${Math.min(100, Math.round(p))}`;
  const ozet = kart.root.querySelector(".pk-ozet") as HTMLElement;
  ozet.style.removeProperty("color");
  ozet.textContent = ayrinti ? `${adAdi(adim)} · ${ayrinti}` : adAdi(adim);
  if (adim === 8 && (durum === "bitti" || durum === "hata")) {
    packKartTamam();
  }
}

function adAdi(adim: number): string {
  return ADIMLAR.find((a) => a.adim === adim)?.ad || `Adım ${adim}`;
}

function yeniKart(): KartDurum {
  const root = document.createElement("div");
  root.className = "pk-kart pk-gizli";
  root.setAttribute("role", "status");
  root.setAttribute("aria-live", "polite");
  root.innerHTML = `
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
  `;
  const satirlar = new Map<number, HTMLElement>();
  const detaylar = new Map<number, HTMLElement>();
  const liste = root.querySelector(".pk-adimlar") as HTMLElement;
  for (const a of ADIMLAR) {
    const satir = document.createElement("div");
    satir.className = "pk-adim pk-bekliyor";
    satir.dataset.adim = String(a.adim);
    satir.innerHTML = `
      <span class="pk-isaret"></span>
      <span class="pk-ad">${a.ad}</span>
      <span class="pk-detay">${a.aciklama}</span>
    `;
    liste.appendChild(satir);
    satirlar.set(a.adim, satir);
    detaylar.set(a.adim, satir.querySelector(".pk-detay") as HTMLElement);
  }
  const kart: KartDurum = {
    root,
    satirlar,
    detaylar,
    bar: root.querySelector(".pk-bar > div") as HTMLElement,
    yuzde: root.querySelector(".pk-yuzde") as HTMLElement,
    ozet: root.querySelector(".pk-ozet") as HTMLElement,
    kapandi: false,
    kapatZamani: 0,
    bitti: false,
  };
  (root.querySelector(".pk-kafa") as HTMLElement).addEventListener("click", () => packKartDegistir());
  root.querySelector(".pk-kapat")?.addEventListener("click", (e) => {
    e.stopPropagation();
    kart.kapandi = true;
    kart.root.classList.add("pk-gizli");
    toast("Kurulum arkada sürüyor", "ok");
  });
  document.body.appendChild(root);
  return kart;
}

/// Bitişten 6 sn sonra gizlenir (kullanıcı tıklayıp listeyi açtıysa bekler).
function kapatZamanlayiciBaslat(): void {
  const iv = setInterval(() => {
    if (!kart) { clearInterval(iv); sonKapatlayici = null; return; }
    if (kart.kapandi) { clearInterval(iv); sonKapatlayici = null; return; }
    if (kart.bitti && Date.now() > kart.kapatZamani) {
      kart.kapandi = true;
      kart.root.classList.add("pk-gizli");
      clearInterval(iv);
      sonKapatlayici = null;
    }
  }, 1200);
  sonKapatlayici = iv as unknown as number;
}

/// Baslik çubuğu zili de başlangıçta dursun (paket gelmeden önce soluk).
(window as any).__PACK_KART_TEST__ = packKartTest;
(window as any).__PACK_ZIL__ = { guncelle: zilGuncelle, degistir: packKartDegistir, baslat: packKartBaslat, tamam: packKartTamam, hata: packKartHata };
