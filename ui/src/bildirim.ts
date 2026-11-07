// BİLDİRİM KUTUSU — başlık çubuğundaki zilin altında açılan genel kutu.
//
// Neden genel: bu kutu SADECE mod paketi kurulumu için değil — ilerde
// güncelleme, sistem uyarısı, mod haberi gibi her tür haber buraya düşecek.
// Kaynak türü ayrı alan; ikon ona göre seçilir.
//
// Depolama: localStorage (hızlı açılış, diske yazma yok).
// Zile tıklayınca panel açılır; boşsa "Şu an bir şey olmuyor." yazar.

export type BildirimTur = "kurulum" | "sistem" | "mod" | "genel";

export interface Bildirim {
  id: string;
  tur: BildirimTur;
  baslik: string;
  mesaj: string;
  at: number;
  okundu: boolean;
}

const ANAHTAR = "yikim-bildirimler";
const SINIR = 60;

function hepsi(): Bildirim[] {
  try {
    const ham = localStorage.getItem(ANAHTAR);
    if (!ham) return [];
    const dizi = JSON.parse(ham) as Bildirim[];
    return Array.isArray(dizi) ? dizi : [];
  } catch {
    return [];
  }
}

function kaydet(liste: Bildirim[]): void {
  try {
    localStorage.setItem(ANAHTAR, JSON.stringify(liste.slice(0, SINIR)));
  } catch {
    // kota dolu: yeni bildirimi sessizce atla
  }
}

/// Yeni bildirim ekle (aynı içerik 3 sn içinde tekrar gelirse yutulur).
export function bildirimEkle(tur: BildirimTur, baslik: string, mesaj: string): void {
  const liste = hepsi();
  const simdi = Date.now();
  if (liste.length && liste[0].baslik === baslik && liste[0].mesaj === mesaj
    && simdi - liste[0].at < 3000) {
    return;
  }
  liste.unshift({
    id: `b${simdi.toString(36)}${Math.random().toString(36).slice(2, 6)}`,
    tur, baslik, mesaj, at: simdi, okundu: false,
  });
  kaydet(liste);
  if (document.querySelector("#bildirim-panel.bildirim-acik")) {
    bildirimKutuBaslat();
  }
  rozetGuncelle(true);
}

export function bildirimOkundu(): void {
  const liste = hepsi();
  if (!liste.some((b) => !b.okundu)) return;
  liste.forEach((b) => { b.okundu = true; });
  kaydet(liste);
  rozetGuncelle(false);
}

export function bildirimTemizle(): void {
  kaydet([]);
  bildirimKutuBaslat();
  rozetGuncelle(false);
}

function panelEl(): HTMLElement {
  let panel = document.querySelector("#bildirim-panel") as HTMLElement | null;
  if (!panel) {
    panel = document.createElement("div");
    panel.id = "bildirim-panel";
    panel.className = "bildirim-panel";
    document.body.appendChild(panel);
  }
  return panel;
}

/// Zile basıldığında: paneli çiz + aç/kapa.
export function bildirimAcKapa(): void {
  const panel = panelEl();
  bildirimKutuBaslat();
  bildirimOkundu();
  panel.classList.toggle("bildirim-acik");
}

export function bildirimKapat(): void {
  document.querySelector("#bildirim-panel")?.classList.remove("bildirim-acik");
}

const TUR_IKON: Record<BildirimTur, string> = {
  kurulum: "📦",
  sistem: "⚙️",
  mod: "🧩",
  genel: "🔔",
};

function satirHtml(b: Bildirim): string {
  const saat = new Date(b.at).toLocaleTimeString("tr-TR", {
    hour: "2-digit", minute: "2-digit",
  });
  return `
    <div class="bild-satir" data-tur="${b.tur}">
      <span class="bild-ikon">${TUR_IKON[b.tur]}</span>
      <div class="bild-govde">
        <div class="bild-baslik">${b.baslik}</div>
        <div class="bild-mesaj">${b.mesaj}</div>
      </div>
      <span class="bild-saat">${saat}</span>
    </div>`;
}

/// Paneli (yeniden) çizer. Zilin solukluğu oynatma yetkisi burada değil —
/// zil daima aynı renkte; "yeni var" nokta rozetGuncelle'dedir.
export function bildirimKutuBaslat(): void {
  const panel = panelEl();
  const liste = hepsi();
  panel.innerHTML = `
    <div class="bild-kafa">
      <span class="bild-kafa-ad">Bildirimler</span>
      <div class="bild-kafa-islem">
        <button class="bild-temizle" title="Tümünü temizle">Temizle</button>
        <button class="bild-kapat" title="Kapat">✕</button>
      </div>
    </div>
    <div class="bild-liste">
      ${liste.length ? liste.map(satirHtml).join("") : ""}
    </div>
    ${liste.length ? "" : `
      <div class="bild-bos">
        <div class="bild-bos-ikon">🔔</div>
        <div>Şu an bir şey olmuyor.</div>
        <div class="bild-bos-alt">Mod paketi kurulumu, güncellemeler ve diğer haberler burada gözükür.</div>
      </div>`}
  `;
  panel.querySelector(".bild-temizle")?.addEventListener("click", (e) => {
    e.stopPropagation();
    bildirimTemizle();
  });
  panel.querySelector(".bild-kapat")?.addEventListener("click", (e) => {
    e.stopPropagation();
    bildirimKapat();
  });
}

function rozetGuncelle(yenivar: boolean): void {
  const zil = document.querySelector("#tb-pack") as HTMLElement | null;
  if (!zil) return;
  zil.classList.toggle("bild-var", yenivar);
  zil.title = yenivar
    ? "Yeni bildirgin var — kutuyu aç"
    : "Bildirimler — kurulum durumu ve diğer haberler";
}

/// Zil açılışta da doğru titte/rozkla dursun (bildirim geçmişinden).
export function bildirimZilIlkDurum(): void {
  const okunmamis = hepsi().filter((b) => !b.okundu).length;
  rozetGuncelle(okunmamis > 0);
}

(window as any).__BILDIRIM__ = {
  ekle: bildirimEkle,
  acKapa: bildirimAcKapa,
  baslat: bildirimKutuBaslat,
  kapat: bildirimKapat,
};
