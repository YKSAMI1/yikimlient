// 64×64 skin atlasının bölge haritası — editörde "nereyi boyuyorum" vurgusu.
// Taban katman + üst katman (şapka/ceket/kolluk/pantolon) bölgeleri.

export interface SkinBolge {
  id: string;
  ad: string;
  x: number;
  y: number;
  w: number;
  h: number;
  katman: "taban" | "ust";
}

export const BOLGELER: SkinBolge[] = [
  { id: "kafa", ad: "Kafa", x: 0, y: 0, w: 8, h: 8, katman: "taban" },
  { id: "govde", ad: "Gövde", x: 16, y: 16, w: 8, h: 12, katman: "taban" },
  { id: "sag-kol", ad: "Sağ Kol", x: 40, y: 16, w: 4, h: 12, katman: "taban" },
  { id: "sol-kol", ad: "Sol Kol", x: 32, y: 48, w: 4, h: 12, katman: "taban" },
  { id: "sag-bacak", ad: "Sağ Bacak", x: 0, y: 16, w: 4, h: 12, katman: "taban" },
  { id: "sol-bacak", ad: "Sol Bacak", x: 16, y: 48, w: 4, h: 12, katman: "taban" },
  { id: "sapka", ad: "Şapka", x: 32, y: 0, w: 8, h: 8, katman: "ust" },
  { id: "ceket", ad: "Ceket", x: 16, y: 32, w: 8, h: 12, katman: "ust" },
  { id: "sag-kolluk", ad: "Sağ Kolluk", x: 40, y: 32, w: 4, h: 12, katman: "ust" },
  { id: "sol-kolluk", ad: "Sol Kolluk", x: 48, y: 48, w: 4, h: 12, katman: "ust" },
  { id: "sag-pantolon", ad: "Sağ Pantolon", x: 0, y: 32, w: 4, h: 12, katman: "ust" },
  { id: "sol-pantolon", ad: "Sol Pantolon", x: 0, y: 48, w: 4, h: 12, katman: "ust" },
];

export function bolgeBul(x: number, y: number): SkinBolge | null {
  for (const b of BOLGELER) {
    if (x >= b.x && x < b.x + b.w && y >= b.y && y < b.y + b.h) return b;
  }
  return null;
}

/** Katalog kartında yüz kırpması için kullanılan dilim. */
export function yuzDilimi(): { x: number; y: number; w: number; h: number } {
  return { x: 8, y: 8, w: 8, h: 8 };
}
