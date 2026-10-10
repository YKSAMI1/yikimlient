/* ============================================================
   YIKIMLient ikon seti — 16px ızgara, 1.5px çizgi, yuvarlak uçlar.
   Hepsinin dili aynı: stroke="currentColor", fill yok.
   Emoji yok; burada olmayan bir şey için aynı kurallarla ikon çiz.
   ============================================================ */

const A = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
  stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"`;

/** lucide "home" — kapı çizgili ev */
const home = `<svg ${A}><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M10 21v-6h4v6"/></svg>`;

/** lucide "layout-grid" — 2x2 yumuşak kare */
const grid = `<svg ${A}><rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/></svg>`;

/** lucide "compass" — keşfet iğnesi */
const compass = `<svg ${A}><circle cx="12" cy="12" r="9"/><path d="m15.2 8.8-1.9 4.5-4.5 1.9 1.9-4.5z"/></svg>`;

/** gazete — çerçeve, öne çıkan blok ve satırlar */
const news = `<svg ${A}><path d="M4 6.5A1.5 1.5 0 0 1 5.5 5h13A1.5 1.5 0 0 1 20 6.5v11a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5z"/><path d="M8 9h5v5H8z"/><path d="M16 9h1M16 12h1M16 15h1M8 16.5h5"/></svg>`;

/** lucide "settings" — dişli */
const gear = `<svg ${A}><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>`;

/** lucide "plus" */
const plus = `<svg ${A}><path d="M12 5v14M5 12h14"/></svg>`;

/** lucide "search" */
const search = `<svg ${A}><circle cx="11" cy="11" r="7"/><path d="m20.5 20.5-4.2-4.2"/></svg>`;

/** lucide "play" — dolgulu üçgen (çizgiyle üçgen çirkin kalıyor) */
const play = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8.5 5.9v12.2a.8.8 0 0 0 1.22.68l9.87-6.1a.8.8 0 0 0 0-1.36L9.72 5.22A.8.8 0 0 0 8.5 5.9Z"/></svg>`;

/** lucide "image" — manzaralı fotoğraf çerçevesi */
const image = `<svg ${A}><rect x="3.5" y="4.5" width="17" height="15" rx="2"/><circle cx="9" cy="10" r="1.6"/><path d="m3.5 16 4.4-4.4a1.4 1.4 0 0 1 2 0l4.6 4.4"/><path d="m13.6 15 2.3-2.3a1.4 1.4 0 0 1 2 0l2.6 2.5"/></svg>`;

/** lucide "folder" — açık klasör */
const folder = `<svg ${A}><path d="M3.5 7.5v10a1.5 1.5 0 0 0 1.5 1.5h13.6a1.5 1.5 0 0 0 1.4-1l1.6-4.5a1 1 0 0 0-.94-1.35H7.2a2 2 0 0 0-1.9 1.37L3.5 17.5"/><path d="M3.5 7.5v-2A1.5 1.5 0 0 1 5 4h4l1.6 2H19a1.5 1.5 0 0 1 1.5 1.5v2"/></svg>`;

/** lucide "trash" — çöp kutusu */
const trash = `<svg ${A}><path d="M4 7h16M9.5 4h5M6.5 7l.8 12a1.5 1.5 0 0 0 1.5 1.4h6.4a1.5 1.5 0 0 0 1.5-1.4l.8-12"/><path d="M10 11v6M14 11v6"/></svg>`;

/** lucide "copy" — çift kare */
const copy = `<svg ${A}><rect x="9" y="9" width="11.5" height="11.5" rx="2"/><path d="M5.5 15H4.5A1.5 1.5 0 0 1 3 13.5v-9A1.5 1.5 0 0 1 4.5 3h9A1.5 1.5 0 0 1 15 4.5v1"/></svg>`;

/** lucide "arrow-left" — geri */
const back = `<svg ${A}><path d="M19 12H5M11 18l-6-6 6-6"/></svg>`;

/** lucide "check" */
const check = `<svg ${A}><path d="m4.5 12.5 5 5 10-11"/></svg>`;

/** lucide "user" — baş + omuz */
const user = `<svg ${A}><circle cx="12" cy="8" r="4"/><path d="M4.5 20.5c.8-3.7 3.9-6 7.5-6s6.7 2.3 7.5 6"/></svg>`;

/** lucide "puzzle" — yapboz parçası */
const puzzle = `<svg ${A}><path d="M10 4.5A1.5 1.5 0 0 1 11.5 3h1A1.5 1.5 0 0 1 14 4.5V6h4.5A1.5 1.5 0 0 1 20 7.5V11h-1.5a1.5 1.5 0 0 0 0 3H20v3.5a1.5 1.5 0 0 1-1.5 1.5H14v-1.5a1.5 1.5 0 0 0-3 0V20H6.5A1.5 1.5 0 0 1 5 18.5V15H3.5a1.5 1.5 0 0 1 0-3H5V7.5A1.5 1.5 0 0 1 6.5 6H10z"/></svg>`;

/** lucide "package" — bantlı kutu */
const box = `<svg ${A}><path d="m12 3 8.5 4.5v9L12 21l-8.5-4.5v-9z"/><path d="M3.5 7.5 12 12l8.5-4.5M12 12v9"/></svg>`;

/** lucide "cpu" — bellek çipi */
const cpu = `<svg ${A}><rect x="6" y="6" width="12" height="12" rx="1.5"/><rect x="9.5" y="9.5" width="5" height="5" rx="1"/><path d="M9 2.5V6M15 2.5V6M9 18v3.5M15 18v3.5M2.5 9H6M2.5 15H6M18 9h3.5M18 15h3.5"/></svg>`;

/** lucide "scroll-text" — JVM argüman kağıdı */
const args = `<svg ${A}><path d="M15 12h-5M15 8h-5M19 17V5a2 2 0 0 0-2-2H4"/><path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"/></svg>`;

/** lucide "terminal" — canlı log */
const term = `<svg ${A}><rect x="3" y="4.5" width="18" height="15" rx="2"/><path d="m7 9.5 3 3-3 3M12.5 15.5H17"/></svg>`;

/** lucide "bar-chart" — analiz */
const chart = `<svg ${A}><path d="M5 20V10M12 20V4M19 20v-7"/></svg>`;

/** lucide "download" — indirme oku */
const dl = `<svg ${A}><path d="M12 4v11M7.5 11.5 12 16l4.5-4.5"/><path d="M4 20h16"/></svg>`;

/** lucide "coffee" — java */
const mug = `<svg ${A}><path d="M10 2v2M14 2v2M6 2v2"/><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"/></svg>`;

/** lucide "globe" — microsoft/web */
const globe = `<svg ${A}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>`;

/** lucide "sparkles" — optimizasyon */
const sparkle = `<svg ${A}><path d="M10 4.5 11.5 9l4.5 1.5L11.5 12 10 16.5 8.5 12 4 10.5 8.5 9z"/><path d="m18 15.5.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z"/></svg>`;

/** lucide "file" — boş dosya */
const file = `<svg ${A}><path d="M13.5 3H6.5A1.5 1.5 0 0 0 5 4.5v15A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5V8.5z"/><path d="M13.5 3v5.5H19"/></svg>`;

/** lucide "info" — hakkında */
const info = `<svg ${A}><circle cx="12" cy="12" r="9"/><path d="M12 16v-4.5"/><circle cx="12" cy="8" r="1"/></svg>`;

/** lucide "clock" — oynanış süresi */
const clock = `<svg ${A}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.2 2"/></svg>`;

/** lucide "square" — durdur (oyun sürecini kapat) */
const stop = `<svg ${A}><rect x="6.5" y="6.5" width="11" height="11" rx="1.5"/></svg>`;

export const ICONS: Record<string, string> = {
  home, grid, compass, news, gear, plus, search, play, image, folder,
  trash, copy, back, check, user, puzzle, box, cpu, args, term, chart,
  dl, mug, globe, sparkle, file, info, clock, stop,
};

/** içine gömülü SVG üretir; span'a sarılırsa .ic ile hizalanır */
export function icon(name: string, cls = ""): string {
  const svg = ICONS[name] || ICONS.info;
  return cls ? `<span class="ic ${cls}">${svg}</span>` : `<span class="ic">${svg}</span>`;
}

/* ============================================================
   Windows başlık çubuğu glifleri — WinUI ölçülerinin birebir kopyası:
   10x10 birimlik çizim alanı, 1 birim çizgi, keskin köşeler,
   24px kutuya ortalanır (12 - 10×2/3 = 5 → translate(7,7) scale 2/3).
   ============================================================ */

const W = `xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1"`;
const g = (inner: string) =>
  `<g transform="translate(7 7) scale(0.66667)">${inner}</g>`;

export const WINDOW_CONTROLS = {
  /** — */
  min: `<svg ${W}>${g(`<path d="M0 5.125h10"/>`)}</svg>`,
  /** □ */
  max: `<svg ${W}>${g(`<rect x="0.5" y="0.5" width="9" height="9"/>`)}</svg>`,
  /** geri yükleme: küçük ön kare + büyük arka kare kıvrımı */
  restore: `<svg ${W}>${g(`<rect x="0.5" y="2.5" width="7" height="7"/><path d="M2.5 2.5V0.5h7v7h-2"/>`)}</svg>`,
  /** ✕ */
  close: `<svg ${W}>${g(`<path d="m0.43 0.43 9.14 9.14M9.57 0.43 0.43 9.57"/>`)}</svg>`,
};
