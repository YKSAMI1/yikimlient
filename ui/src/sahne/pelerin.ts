// PELERİN PAFTASI — 64×32 doku, iki panel: iç astar ve dış (görünen) yüz.
//
// Vanilla düzen: `(1,1)` paneli gövdeye bakan İÇ yüzdür, `(12,1)` paneli ise
// oyunda arkadan görünen DIŞ yüzdür — tasarım oraya gider. Katalogda da
// oyuncunun gördüğü yüz (12,1) çizilir; (1,1) çizilince kapakların "arkası"
// görünüyordu. Bir ara "dolu panel
// kazanır" kuralı kullanılıyordu; iki panel de boyanmış pelerinlerde yanlış
// panel (iç astar) seçiliyor ve katalogda desen "ters" görünüyordu.

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

/** Pelerinde gösterilecek paneli döner: önce DIŞ yüz, boşsa iç astar. */
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
  // Dış yüz boşsa (eski/yeni tasarımlar iç panele çizmiş olabilir) ona düş.
  return dolu(PELERIN_DIS) > 0 ? PELERIN_DIS : PELERIN_IC;
}
