// PELERİN PAFTASI — 64×32 doku, iki panel: dış (görünen) yüz ve iç astar.
//
// Vanilla düzeni: pelerin modeli 180° Y döndürülerek kurulur, bu yüzden oyunda
// arkadan görünen DIŞ yüz `(1,1)` panelidir — tasarım oraya gider; `(12,1)`
// gövdeye bakan İÇ astardır. (Mojang pelerinlerinde de desen (1,1)'dedir;
// elitra tersidir, dış (36,2).) Katalogda oyuncunun gördüğü yüz (1,1) çizilir.

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
