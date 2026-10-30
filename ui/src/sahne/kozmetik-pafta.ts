// KOZMETİK PAFTASI — 10×16 / 10×20 ızgarayı vanilla 64×32 dokusuna yerleştirir.
//
// Aynı yerleşim `src-tauri/src/kozmetik.rs` içinde de var (oyun dosyası oradan
// yazılır). Buradaki kopya yalnız launcher'daki 3D önizlemeyi besler; ikisi
// ayrışırsa önizleme oyundan farklı görünür, bu yüzden panel konumları birebir
// aynı tutulmalı.

import { PELERIN_DIS, PELERIN_IC } from "./skin-bolgeler";

type Piksel = string;

const DOKU_G = 64;
const DOKU_Y = 32;

function tuval(): HTMLCanvasElement {
  const t = document.createElement("canvas");
  t.width = DOKU_G;
  t.height = DOKU_Y;
  return t;
}

function doldur(
  g: CanvasRenderingContext2D,
  pikseller: Piksel[],
  genislik: number,
  yukseklik: number,
  x0: number,
  y0: number,
  ayna: boolean,
  kaydir = 0,
): void {
  for (let y = 0; y < yukseklik; y++) {
    for (let x = 0; x < genislik; x++) {
      const kaynak = ayna ? genislik - 1 - x : x;
      const renk = pikseller[(y + kaydir) * genislik + kaynak];
      if (!renk) continue;
      g.fillStyle = renk;
      g.fillRect(x0 + x, y0 + y, 1, 1);
    }
  }
}

/** Pelerin tasarımı → 64×32 pafta (ön + arka ayna + yanlar + üst/alt). */
export function pelerinPaftasi(pikseller: Piksel[]): HTMLCanvasElement {
  const t = tuval();
  const g = t.getContext("2d");
  if (!g) return t;
  g.imageSmoothingEnabled = false;
  const g0 = PELERIN_DIS.w; // 10
  const y0 = PELERIN_DIS.h; // 16
  doldur(g, pikseller, g0, y0, PELERIN_DIS.x, PELERIN_DIS.y, false);
  doldur(g, pikseller, g0, y0, PELERIN_IC.x, PELERIN_IC.y, true);
  // yan paneller: sol kenar sütunu (0,1), sağ kenar sütunu (11,1)
  for (let y = 0; y < y0; y++) {
    const sol = pikseller[y * g0];
    const sag = pikseller[y * g0 + g0 - 1];
    if (sol) {
      g.fillStyle = sol;
      g.fillRect(0, 1 + y, 1, 1);
    }
    if (sag) {
      g.fillStyle = sag;
      g.fillRect(11, 1 + y, 1, 1);
    }
  }
  // üst ve alt kenar
  for (let x = 0; x < g0; x++) {
    const ust = pikseller[x];
    const alt = pikseller[(y0 - 1) * g0 + x];
    if (ust) {
      g.fillStyle = ust;
      g.fillRect(1 + x, 0, 1, 1);
    }
    if (alt) {
      g.fillStyle = alt;
      g.fillRect(1 + x, 17, 1, 1);
    }
  }
  return t;
}

/** Elitra kanadı tasarımı → 64×32 pafta (dış yüz + iç ayna + üst + yanlar). */
export function kanatPaftasi(pikseller: Piksel[]): HTMLCanvasElement {
  const t = tuval();
  const g = t.getContext("2d");
  if (!g) return t;
  g.imageSmoothingEnabled = false;
  const g0 = 10;
  const y0 = 20;
  doldur(g, pikseller, g0, y0, 24, 2, false);
  doldur(g, pikseller, g0, y0, 36, 2, true);
  doldur(g, pikseller, g0, 2, 24, 0, false);
  doldur(g, pikseller, g0, 2, 36, 0, true);
  for (let y = 0; y < y0; y++) {
    const sol = pikseller[y * g0];
    const sag = pikseller[y * g0 + g0 - 1];
    if (sol) {
      g.fillStyle = sol;
      g.fillRect(22, 2 + y, 2, 1);
    }
    if (sag) {
      g.fillStyle = sag;
      g.fillRect(34, 2 + y, 2, 1);
    }
  }
  return t;
}

/** Dolu piksel var mı — sağ üst rozet ve kaydet düğmesi bunu kullanır. */
export function bosMu(pikseller: Piksel[]): boolean {
  return !pikseller.some((p) => p !== "");
}
