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
import { bildirimEkle } from "./bildirim";

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
  kimlik: string;
  satirlar: Map<number, HTMLElement>;
  detaylar: Map<number, HTMLElement>;
  bar: HTMLElement;
  yuzde: HTMLElement;
  ozet: HTMLElement;
  kapandi: boolean;
  kapatZamani: number;
  bitti: boolean;
}

/// Açık kartlar — kimlikle eşlenir. AYNI ANDA birden fazla farklı paket
/// kurulabilir: her biri kendi kartını alır. Aynı kimlik iki kez çağrılırsa
/// yeni kart ÜRETİLMEZ, var olan kart devam eder.
const kartlar = new Map<string, KartDurum>();
let dinleyiciOff: (() => void) | null = null;
let sonKapatlayici: number | null = null;
/// Aynı anda en fazla bu kadar açık kart tutulur (eskisi gizlenir).
const MAKS_KART = 4;

function detayMetni(done: number, total: number, ayrinti: string): string {
  const sayac = total > 0 ? `${done}/${total}` : "";
  if (ayrinti && sayac) return `${sayac} · ${ayrinti}`;
  return ayrinti || sayac;
}

/// Kartı (yoksa oluştur) gösterir ve durumu sıfırlar.
/// `kimlik` aynı anda birden fazla paket kurulabilsin diye kartı belirler;
/// boş bırakılırsa "varsayılan" kart kullanılır (eski akış).
export function packKartBaslat(ad: string, kimlik = ""): void {
  let kart = kartlar.get(kimlik);
  if (kart) {
    kart.kapandi = false;
    kart.bitti = false;
    for (const s of kart.satirlar.values()) {
      s.classList.remove("pk-bitti", "pk-aktif", "pk-hata", "pk-atlandi");
      s.classList.add("pk-bekliyor");
    }
    kart.root.classList.remove("pk-gizli", "pk-acik", "pk-bitti");
    kart.root.style.order = "0";
  } else {
    kart = yeniKart(kimlik);
    kartlar.set(kimlik, kart);
    kart.root.classList.remove("pk-gizli");
    kart.root.style.order = "0";
    // Çok kart açılırsa eskilerini gizle (en yeni en üstte).
    while (kartlar.size > MAKS_KART) {
      const enEski = [...kartlar.entries()].find(([, k]) => k !== kart && k.bitti);
      if (!enEski) break;
      enEski[1].kapandi = true;
      enEski[1].root.classList.add("pk-gizli");
      kartlar.delete(enEski[0]);
    }
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
      if (!p) return;
      // Olay kimlikli gelirse YALNIZ o karta düşer; kimliksiz (eski akış)
      // ise tüm açık kartlara yansıtılır.
      const kimlik = typeof p.kimlik === "string" ? p.kimlik : "";
      const hedefler = kimlik
        ? [kartlar.get(kimlik)]
        : [...kartlar.values()];
      for (const k of hedefler) {
        if (!k) continue;
        adimUygula(k, p.adim, p.durum, p.done || 0, p.total || 0, p.ayrinti || "", p.percent || 0);
      }
    }).then((off: () => void) => { dinleyiciOff = off; });
  }
  zilGuncelle("kurulum");
  bildirimEkle("kurulum", ad, "Kurulum başladı — adım adım sağ altta gösterilecek");
}

/// Tam listeyi aç/kapa (kart kafası + başlık çubuğu zili aynı işi yapar).
export function packKartDegistir(kimlik = ""): void {
  const kart = kartlar.get(kimlik);
  if (!kart) return;
  kart.root.classList.toggle("pk-acik");
}

/// Kurulum tamam: kalan adımları kapat, hazır işaretle, X sn sonra gizle.
export function packKartTamam(kimlik = ""): void {
  const kart = kartlar.get(kimlik);
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
  zilGuncelle("bitti");
  bildirimEkle("kurulum", "Kurulum tamamlandı", "Paket oynanmaya hazır — Kurulumlar sayfasından başlatabilirsin");
  if (sonKapatlayici === null) kapatZamanlayiciBaslat();
}

/// Paket hazır (sunucu `pack-hazir` yayınladı): kartı kapat + özel ses.
export function packKartBitti(instanceId?: string): void {
  for (const [kimlik, k] of kartlar) {
    if (instanceId && !kimlik.includes(instanceId)) continue;
    if (k.bitti) continue;
    k.bitti = true;
    k.kapatZamani = Date.now() + 4000;
    k.root.classList.add("pk-bitti");
    if (sonKapatlayici === null) kapatZamanlayiciBaslat();
  }
}

/// Hata: kart açık kalır ve hata adımı kırmızıya döner.
export function packKartHata(mesaj: string, kimlik = ""): void {
  const kart = kartlar.get(kimlik);
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
  zilGuncelle("kurulum");
  bildirimEkle("sistem", "Kurulum durdu", mesaj.length > 120 ? `${mesaj.slice(0, 120)}…` : mesaj);
}

/// Dışarıdan (mock / test) elle adım basmak için.
export function packKartTest(
  adim: number,
  durum: Durum,
  done: number,
  total: number,
  ayrinti: string,
  kimlik = "",
): void {
  const kart = kartlar.get(kimlik);
  if (!kart) return;
  adimUygula(kart, adim, durum, done, total, ayrinti, 0);
}

/// Zil durumu: kurulum sürüyorsa nokta canlı, bittiyse gri, yoksa soluk.
function zilGuncelle(durum: "yok" | "kurulum" | "bitti"): void {
  const btn = document.querySelector("#tb-pack") as HTMLElement | null;
  if (!btn) return;
  btn.classList.toggle("bild-var", durum !== "yok");
  btn.title = durum === "bitti"
    ? "Kurulum tamamlandı — durumu göster"
    : durum === "kurulum"
      ? "Mod paketi kuruluyor — durumu göster"
      : "Bildirimler — kurulum durumu ve diğer haberler";
}

function adimUygula(
  kart: KartDurum,
  adim: number,
  durum: Durum,
  done: number,
  total: number,
  ayrinti: string,
  percent: number,
): void {
  if (!kart.satirlar.has(adim)) return;
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
    if (durum === "bitti") packKartTamam(kart.kimlik);
    else packKartHata(ozet.textContent, kart.kimlik);
  }
}

function adAdi(adim: number): string {
  return ADIMLAR.find((a) => a.adim === adim)?.ad || `Adım ${adim}`;
}

function yeniKart(kimlik: string): KartDurum {
  const root = document.createElement("div");
  root.className = "pk-kart pk-gizli";
  root.dataset.kimlik = kimlik;
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
    kimlik,
    satirlar,
    detaylar,
    bar: root.querySelector(".pk-bar > div") as HTMLElement,
    yuzde: root.querySelector(".pk-yuzde") as HTMLElement,
    ozet: root.querySelector(".pk-ozet") as HTMLElement,
    kapandi: false,
    kapatZamani: 0,
    bitti: false,
  };
  (root.querySelector(".pk-kafa") as HTMLElement).addEventListener("click", () => packKartDegistir(kimlik));
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
    const aciklar = [...kartlar.values()].filter((k) => !k.kapandi);
    if (aciklar.length === 0) {
      clearInterval(iv);
      sonKapatlayici = null;
      return;
    }
    for (const kart of aciklar) {
      if (kart.bitti && Date.now() > kart.kapatZamani) {
        kart.kapandi = true;
        kart.root.classList.add("pk-gizli");
        kartlar.delete(kart.kimlik);
      }
    }
  }, 1200);
  sonKapatlayici = iv as unknown as number;
}

/// Tüm açık kartları zorla kapat (test/mock sıfırlama).
export function packKartlariKapat(): void {
  for (const [, k] of kartlar) {
    k.kapandi = true;
    k.root.classList.add("pk-gizli");
  }
  kartlar.clear();
}

/// Debug/test kanalı: mock harness dış yollar buradan adım sayabilir.
(window as any).__PACK_KART_TEST__ = packKartTest;
(window as any).__PACK_KART_KAPAT__ = packKartlariKapat;
