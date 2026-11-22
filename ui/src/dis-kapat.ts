// BOŞLUĞA TIKLAYINCA KAPANMA — zil kutusu, paket kurulum kartı gibi uçuğan
// katmanlar için ortak davranış.
//
// Kural (kullanıcı isteği): açık bir katmanda DEĞİLSE tıklamalar onu kapatır;
// Esc de aynı işi yapar. Tetkleyici düğme (örn. başlık çubuğundaki zil)
// hariç tutulur — zaten kendi aç/kapa işini click olayında yapıyor.
//
// Tek bir "document" dinleyicisi tüm katmanları süzer: yeni katman eklendikçe
// dinleyici çoğalmaz, yalnızca bir kere kurulur.

export interface KapananKatman {
  /** Katman şu anda açık mı? Kapalıysa dokunulmaz. */
  acikMi(): boolean;
  /** Kapatma eylemi (sınıf kaldırma / gizleme). */
  kapat(): void;
  /** Tıklanan element bu katmanın İÇİNDE mi? (içine tıklamak kapatmaz) */
  icindeMi(hedef: HTMLElement): boolean;
  /** Katmanı açan düğme (boşluğa tıklamanın dışında sayılır). */
  tetikleyici?: string;
}

const katmanlar: KapananKatman[] = [];
let kuruldu = false;

function kur(): void {
  // 1) Boşluğa tıklama — capture fazda: katman kendi içinde duruma göre
  //    stopPropagation yapmış olsa bile kapatma kararı verilir.
  document.addEventListener(
    "pointerdown",
    (e: PointerEvent) => {
      const hedef = e.target as HTMLElement | null;
      if (!hedef || !(hedef instanceof Element)) return;
      for (const k of katmanlar) {
        if (!k.acikMi()) continue;
        if (k.icindeMi(hedef)) continue;
        if (k.tetikleyici && hedef.closest(k.tetikleyici)) continue;
        k.kapat();
      }
    },
    true,
  );

  // 2) Esc — yalnızca açık olan katmanların EN ÜSTEKİNİ kapat.
  document.addEventListener("keydown", (e: KeyboardEvent) => {
    if (e.key !== "Escape") return;
    for (let i = katmanlar.length - 1; i >= 0; i--) {
      const k = katmanlar[i];
      if (!k.acikMi()) continue;
      e.preventDefault();
      e.stopPropagation();
      k.kapat();
      return;
    }
  });
}

/** Yeni bir katmanı kaydet. Geri dönen fonksiyon kaydı kaldırır. */
export function katmanEkle(k: KapananKatman): () => void {
  katmanlar.push(k);
  if (!kuruldu) {
    kur();
    kuruldu = true;
  }
  return () => {
    const i = katmanlar.indexOf(k);
    if (i >= 0) katmanlar.splice(i, 1);
  };
}

/** Test/mock sıfırlama: tüm katman kayıtlarını düşür. */
export function katmanlariSifirla(): void {
  katmanlar.length = 0;
}