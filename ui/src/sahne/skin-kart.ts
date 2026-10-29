// KATALOG KARTI ÇİZİMİ — kayıtlı/varsayılan skinler için tam gövde önizleme.
//
// Düz yüz kırpması yerine karakterin tamamı çizilir: ön yüzler + üst katmanlar
// (şapka/ceket/kolluk/pantolon) ve yalnız kameradan görünen yan yüzler. Yan yüz
// GERÇEK atlas diliminden gelir, karartılarak çizilir — kopya/gölge bant yok.
// Böylece siluet hafif 3B okunur ama gövde kirli bir gri şeritle kaplanmaz.
// WebGL kullanmaz: her kart için ek bağlam açmadan, tek seferde çizilir.

import {
  KART_GENISLIK_PX,
  KART_OLCEK_PX,
  KART_YAN_PX,
  KART_YUKSEKLIK_PX,
  kartParcalari,
  type Dilim,
} from "./skin-bolgeler";

/** Mantıksal skin pikseli → tuval pikseli. */
export const KART_OLCEK = KART_OLCEK_PX;

export const KART_TUVAL_GENISLIK = KART_GENISLIK_PX * KART_OLCEK;
export const KART_TUVAL_YUKSEKLIK = KART_YUKSEKLIK_PX * KART_OLCEK;

/** Yan yüz karartma oranı — ön yüzden ayrışsın, doku okunur kalsın. */
const YAN_KARARTMA = 0.3;
/** Karakterin tuval içindeki dikey kaydırması (skin pikseli) — üstte nefes payı. */
const D_Y = 2;

/** Karartma için tek, yeniden kullanılan ara tuval. */
let pul: HTMLCanvasElement | null = null;

function dilimCiz(
  g: CanvasRenderingContext2D,
  resim: CanvasImageSource,
  d: Dilim,
  x: number,
  y: number,
  w: number,
  h: number,
): void {
  if (w <= 0 || h <= 0) return;
  g.drawImage(resim, d.x, d.y, d.w, d.h, x, y, w, h);
}

/** Yan yüzü, ölçekle sıkıştırıp karartarak çizer. */
function yanCiz(
  g: CanvasRenderingContext2D,
  resim: CanvasImageSource,
  d: Dilim,
  x: number,
  y: number,
  w: number,
  h: number,
): void {
  if (w <= 0 || h <= 0) return;
  const gecici = (pul ??= document.createElement("canvas"));
  const gw = Math.round(w);
  const gh = Math.round(h);
  gecici.width = gw; // genişlik atamak tuvali de temizler
  gecici.height = gh;
  const p = gecici.getContext("2d");
  if (!p) return;
  p.imageSmoothingEnabled = false;
  p.drawImage(resim, d.x, d.y, d.w, d.h, 0, 0, gw, gh);
  p.globalCompositeOperation = "source-atop";
  p.fillStyle = `rgba(0, 0, 0, ${YAN_KARARTMA})`;
  p.fillRect(0, 0, gw, gh);
  p.globalCompositeOperation = "source-over";
  g.drawImage(gecici, x, y);
}

/** Kart tuvaline tam gövde karakter çizer (tuval boyutu KART_TUVAL_* olmalı). */
export function kartCiz(
  g: CanvasRenderingContext2D,
  resim: CanvasImageSource,
  slim: boolean,
  olcek = KART_OLCEK,
): void {
  const o = olcek;
  g.imageSmoothingEnabled = false;
  g.clearRect(0, 0, g.canvas.width, g.canvas.height);

  const parcalar = kartParcalari(slim);
  const yanW = KART_YAN_PX * o;

  // Zemin gölgesi — karakteri zemine oturtur.
  g.save();
  g.fillStyle = "rgba(0, 0, 0, 0.34)";
  g.beginPath();
  g.ellipse((KART_GENISLIK_PX / 2) * o, (31.3 + D_Y) * o, 6.2 * o, 1.0 * o, 0, 0, Math.PI * 2);
  g.fill();
  g.restore();

  // 1) Yan yüzler — yalnız görünenler; ön yüzler sonra gelir ki kenar temiz otursun.
  for (const p of parcalar) {
    if (!p.yanGorunur) continue;
    const x = (p.x + p.on.w) * o;
    const y = (p.y + D_Y) * o;
    yanCiz(g, resim, p.yan, x, y, yanW, p.on.h * o);
    if (p.ust && p.ustYan) yanCiz(g, resim, p.ustYan, x, y, yanW, p.on.h * o);
  }

  // 2) Ön yüzler ve üst katmanlar.
  for (const p of parcalar) {
    const x = p.x * o;
    const y = (p.y + D_Y) * o;
    dilimCiz(g, resim, p.on, x, y, p.on.w * o, p.on.h * o);
    if (p.ust) dilimCiz(g, resim, p.ust, x, y, p.ust.w * o, p.ust.h * o);
  }
}
