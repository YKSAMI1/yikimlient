// PAKET KURULUM KARTI — sağ altta canlı adım listesi.
//
// Neden var: mod paketi kurulurken ekranda hiçbir yaşayan belirti olmuyordu
// (indirme/çözümleme dakikalar sürüyor, kullanıcı "yarıda kesildi" sanıyordu).
// Artık backend her adımda "pack-step" olayı yayınlar; bu kart onları
// sırayla gösterir:
//   1 paket indiriliyor → 2 paket açılıyor → 3 yapılandırma dosyaları →
//   4 modlar (n/toplam, MB/s) → 5 yükleyici → 6 oyun dosyaları (sürüm kurulumu)
//   → 7 YIKIM modu → 8 hazır.
//
// Mock harness: listen taklidi olay taşımayı engeller; karta kanıt için
// window.__PACK_TEST__ üzerinden elle adım basılabilir.

import { listen, toast, navigate } from "./main";

export type Durum = "bekliyor" | "aktif" | "bitti" | "hata" | "atlandi";

const ADIMLAR: { adim: number; ad: string; aciklama: string }[] = [
  { adim: 1, ad: "Paket indiriliyor", aciklama: "sunucudan .mrpack/.zip alınıyor" },
  { adim: 2, ad: "Paket açılıyor", aciklama: "içindeki sürüm/yükleyici bilgisi okunuyor" },
  { adim: 3, ad: "Yapılandırma dosyaları", aciklama: "paketin kendi ayarları kuruluma yazılıyor" },
  { adim: 4, ad: "Modlar indiriliyor", aciklama: "her mod ayrı indirilip mods/ bırakılıyor" },
  { adim: 5, ad: "Yükleyici kuruluyor", aciklama: "Fabric/Forge/NeoForge profili hazırlanıyor" },
  { adim: 6, ad: "Oyun dosyaları", aciklama: "sürüm kurulumu: kütüphaneler + assetler + java" },
  { adim: 7, ad: "YIKIM modu", aciklama: "launcher çekirdeği kuruluma bağlanıyor" },
  { adim: 8, ad: "Hazır", aciklama: "kurulum listenizde oynamaya hazır" },
];

interface KartDurum {
  root: HTMLElement;
  baslik: string;
  satirlar: Map<number, HTMLElement>;
  detaylar: Map<number, HTMLElement>;
  bar: HTMLElement;
  yuzde: HTMLElement;
  ozet: HTMLElement;
  kapandi: boolean;
  bitisDamgasi: number;
}

let kart: KartDurum | null = null;
let dinleyiciOff: (() => void) | null = null;

function detayMetni(done: number, total: number, ayrinti: string): string {
  const sayac = total > 0 ? `${done} / ${total}` : "";
  if (ayrinti && sayac) return `${sayac} · ${ayrinti}`;
  return ayrinti || sayac;
}

/** 0: paket adımı — kartı görünür yapar, satırları sıfırlar. */
export function packKartBaslat(ad: string): void {
  if (kart) {
    // kart zaten açık: başlığı tazele, satırları sıfırla
    kart.kapandi = false;
    kart.baslik = ad;
    for (const s of kart.satirlar.values()) {
      s.classList.remove("pk-bitti", "pk-aktif", "pk-hata", "pk-atlandi");
      s.classList.add("pk-bekliyor");
    }
  } else {
    kart = yeniKart();
  }
  const baslikEl = kart.root.querySelector(".pk-baslik") as HTMLElement;
  baslikEl.textContent = ad;
  const ozet = kart.root.querySelector(".pk-ozet") as HTMLElement;
  ozet.textContent = "Kurulum başlıyor…";
  kart.bar.style.transform = "scaleX(0.01)";
  kart.yuzde.textContent = "%0";
  kart.bitisDamgasi = 0;
  kart.root.classList.remove("pk-gizli");
  // olay dinleyicisi ilk açılışta kurulur
  if (!dinleyiciOff) {
    dinleyiciOff = listen("pack-step", (e: any) => {
      const p = e?.payload;
      if (!kart || !p) return;
      adimUygula(p.adim, p.durum, p.done || 0, p.total || 0, p.ayrinti || "", p.percent || 0);
    });
  }
}

/** Kurulum komutu başarıyla döndü: kalan uyuşmazlıkları kapat. */
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
  ozet.textContent = "Kurulum tamam — Kurulumlar sayfasından oynayabilirsin";
  kart.bitisDamgasi = Date.now();
  kapaSayfayla();
}

/** Hata: kart açık kalır, satır kırmızıya döner. */
export function packKartHata(mesaj: string): void {
  if (!kart) return;
  for (const s of kart.satirlar.values()) {
    if (s.classList.contains("pk-bekliyor")) {
      s.classList.remove("pk-bekliyor");
      s.classList.add("pk-aktif");
    }
  }
  const ozet = kart.root.querySelector(".pk-ozet") as HTMLElement;
  ozet.textContent = `Kurulum durdu: ${mesaj}`;
  ozet.style.color = "var(--danger)";
  // hata satırını işaretle — aktif olan (hata verilen) adımı bul
  const aktif = [...kart.satirlar.values()].find((s) => s.classList.contains("pk-aktif"));
  if (aktif) {
    aktif.classList.remove("pk-aktif");
    aktif.classList.add("pk-hata");
  }
}

/// Dışarıdan (mock harness / test) elle adım basmak için.
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
  // yüzde: paket adımı veriyorsa onu kullan, yoksa satır sayısından türet
  const p = percent || ((adim - 1) / 8) * 100;
  kart.bar.style.transform = `scaleX(${Math.min(1, Math.max(0.01, p / 100))})`;
  kart.yuzde.textContent = `%${Math.min(100, Math.round(p))}`;
  const ozet = kart.root.querySelector(".pk-ozet") as HTMLElement;
  ozet.style.color = "";
  ozet.textContent = ayrinti ? `${agirlik(adim)} · ${ayrinti}` : agirlik(adim);
  // 8. adım tamam → otomatik özet
  if (adim === 8 && (durum === "bitti" || durum === "hata")) {
    kart.bitisDamgasi = Date.now();
    packKartTamam();
  }
}

function agirlik(adim: number): string {
  return ADIMLAR.find((a) => a.adim === adim)?.ad || `Adım ${adim}`;
}

function yeniKart(): KartDurum {
  const root = document.createElement("div");
  root.className = "pk-kart pk-gizli";
  root.setAttribute("role", "status");
  root.innerHTML = `
    <div class="pk-kafa">
      <div class="pk-kafa-sol">
        <div class="pk-baslik">Paket kurulumu</div>
        <div class="pk-yuzde-satir">
          <div class="progressbar pk-bar"><div></div></div>
          <span class="pk-yuzde">%0</span>
        </div>
      </div>
      <button class="pk-kapat" title="Kapat (kurulum arkada devam eder)">✕</button>
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
    baslik: "",
    satirlar,
    detaylar,
    bar: root.querySelector(".pk-bar > div") as HTMLElement,
    yuzde: root.querySelector(".pk-yuzde") as HTMLElement,
    ozet: root.querySelector(".pk-ozet") as HTMLElement,
    kapandi: false,
    bitisDamgasi: 0,
  };
  root.querySelector(".pk-kapat")?.addEventListener("click", () => {
    kart.kapandi = true;
    kart.root.classList.add("pk-gizli");
    toast("Kurulum arkada sürüyor", "ok");
  });
  document.body.appendChild(root);
  return kart;
}

/// Bitişten ~6 sn sonra kendini kapatır (kullanıcı kapatırsa sayacı sıfırla).
function kapaSayfayla(): void {
  if (kart?.kapandi) return;
  const simdi = Date.now();
  const iv = setInterval(() => {
    if (!kart || kart.kapandi) { clearInterval(iv); return; }
    if (Date.now() - (kart.bitisDamgasi || simdi) > 6000) {
      kart.kapandi = true;
      kart.root.classList.add("pk-gizli");
      clearInterval(iv);
    }
  }, 1200);
}

/// Debug/test kanalı: mock harness dış yollar buradan adım sayabilir.
(window as any).__PACK_KART_TEST__ = packKartTest;
