// PELERİN PAFTASI — 64×32 doku, iki panel: tasarım ve iç astar.
//
// Gerçek Mojang dosyalarında desen `(1,1)` panelinde, iç astar `(12,1)`
// panelinde durur. Yanlış paneli çizmek pelerini yakınlaşmış/bozuk bir parça
// gibi gösterir. Bu yüzden panel, dolu piksel sayısına bakılarak seçilir:
// desen hangi panelde varsa o kullanılır (eşitlikte tasarım paneli kazanır).

import { PELERIN_DIS, PELERIN_IC, type Dilim } from "./skin-bolgeler";

/** Pelerin dokusunu 64×32 ızgarasına indirger (HD dosyalar da doğru örneklenir). */
export function pelerinHazirla(resim: CanvasImageSource & { width: number; height: number }): HTMLCanvasElement {
  const tuval = document.createElement("canvas");
  tuval.width = 64;
  tuval.height = 32;
  const g = tuval.getContext("2d", { willReadFrequently: true });
  if (!g) return tuval;
  g.imageSmoothingEnabled = false;
  g.drawImage(resim, 0, 0, 64, 32);
  return tuval;
}

/** Tasarımı taşıyan paneli döner. */
export function pelerinPaneli(pafta: HTMLCanvasElement): Dilim {
  const g = pafta.getContext("2d", { willReadFrequently: true });
  if (!g) return PELERIN_DIS;
  const dolu = (d: Dilim): number => {
    let n = 0;
    try {
      const p = g.getImageData(d.x, d.y, d.w, d.h).data;
      for (let i = 3; i < p.length; i += 4) if (p[i] > 8) n++;
    } catch {
      return 0; // tuval okunamıyorsa varsayılana düş
    }
    return n;
  };
  return dolu(PELERIN_IC) > dolu(PELERIN_DIS) ? PELERIN_IC : PELERIN_DIS;
}
