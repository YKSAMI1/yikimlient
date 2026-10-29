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

export interface Dilim {
  x: number;
  y: number;
  w: number;
  h: number;
}

/** Pelerin paftası (64×32) — DIŞARIDAN görünen sırt paneli. */
export const PELERIN_DIS: Dilim = { x: 12, y: 1, w: 10, h: 16 };
/** Pelerin iç yüzü (gövdeye bakan taraf) — referans için. */
export const PELERIN_IC: Dilim = { x: 1, y: 1, w: 10, h: 16 };

export function bolgeBul(x: number, y: number): SkinBolge | null {
  for (const b of BOLGELER) {
    if (x >= b.x && x < b.x + b.w && y >= b.y && y < b.y + b.h) return b;
  }
  return null;
}

/** Katalog kartında yüz kırpması için kullanılan dilim. */
export function yuzDilimi(): Dilim {
  return { x: 8, y: 8, w: 8, h: 8 };
}

/** Katalog kartındaki tam gövde çizimi için parça tablosu.
 *
 *  Ön yüzler 64×64 atlastan alınır. `yan`, karakterin SOL yan yüzüdür; kartta
 *  parçanın sağ kenarına ince bir şerit olarak çizilir (hafif 3B görünüm).
 *  `yanGorunur` yalnızca o yan yüzün kameradan gerçekten göründüğü parçalarda
 *  açıktır: gövdenin ve sağ kolun sol yanı sol kolun arkasında, sağ bacağınki
 *  sol bacağın arkasında kalır. Böylece siluet gerçek bir önden-sol yan bakış
 *  gibi okunur, üst üste binen koyu bantlar oluşmaz.
 *
 *  `ust` katmanı şapka/ceket/kolluk/pantolon üst katmanıdır; taban parçanın
 *  üstüne bindirilir. */
export interface KartParca {
  ad: string;
  /** Karakter tuvalindeki sol üst köşe (skin pikseli). */
  x: number;
  y: number;
  on: Dilim;
  yan: Dilim;
  yanGorunur: boolean;
  ust?: Dilim;
  ustYan?: Dilim;
}

/** Kart çiziminin mantıksal ölçüleri (skin pikseli). */
export const KART_GENISLIK_PX = 20;
/** Karakter 32 piksel + üstte/altta ikişer piksel nefes payı. */
export const KART_YUKSEKLIK_PX = 36;
/** Yan yüz şeridinin kart üzerindeki genişliği (skin pikseli). */
export const KART_YAN_PX = 2;
/** Kart tuvalinin ölçeği (skin pikseli → tuval pikseli). */
export const KART_OLCEK_PX = 4;
/** Karakterin sol kenarından tuval kenarına kalan boşluk. */
const KART_KENAR = 1;

export function kartParcalari(slim: boolean): KartParca[] {
  const kol = slim ? 3 : 4;
  // Gövde/kafa/bacaklar 8 piksel genişlikte ortada durur; yalnız kollar değişir.
  const govdeX = KART_KENAR + 4;
  const kolX = slim ? govdeX - 3 : govdeX - 4;
  const solKolX = govdeX + 8;
  return [
    {
      ad: "sag-bacak", x: govdeX, y: 20,
      on: { x: 4, y: 20, w: 4, h: 12 }, yan: { x: 8, y: 20, w: 4, h: 12 },
      yanGorunur: false,
      ust: { x: 4, y: 36, w: 4, h: 12 }, ustYan: { x: 8, y: 36, w: 4, h: 12 },
    },
    {
      ad: "sol-bacak", x: govdeX + 4, y: 20,
      on: { x: 20, y: 52, w: 4, h: 12 }, yan: { x: 24, y: 52, w: 4, h: 12 },
      yanGorunur: true,
      ust: { x: 4, y: 52, w: 4, h: 12 }, ustYan: { x: 8, y: 52, w: 4, h: 12 },
    },
    {
      ad: "govde", x: govdeX, y: 8,
      on: { x: 20, y: 20, w: 8, h: 12 }, yan: { x: 28, y: 20, w: 4, h: 12 },
      yanGorunur: false,
      ust: { x: 20, y: 36, w: 8, h: 12 }, ustYan: { x: 28, y: 36, w: 4, h: 12 },
    },
    {
      ad: "sag-kol", x: kolX, y: 8,
      on: { x: 44, y: 20, w: kol, h: 12 }, yan: { x: 44 + kol, y: 20, w: kol, h: 12 },
      yanGorunur: false,
      ust: { x: 44, y: 36, w: kol, h: 12 }, ustYan: { x: 44 + kol, y: 36, w: kol, h: 12 },
    },
    {
      ad: "sol-kol", x: solKolX, y: 8,
      on: { x: 36, y: 52, w: kol, h: 12 }, yan: { x: 36 + kol, y: 52, w: kol, h: 12 },
      yanGorunur: true,
      ust: { x: 52, y: 52, w: kol, h: 12 }, ustYan: { x: 52 + kol, y: 52, w: kol, h: 12 },
    },
    {
      ad: "kafa", x: govdeX, y: 0,
      on: { x: 8, y: 8, w: 8, h: 8 }, yan: { x: 16, y: 8, w: 8, h: 8 },
      yanGorunur: true,
      ust: { x: 40, y: 8, w: 8, h: 8 }, ustYan: { x: 48, y: 8, w: 8, h: 8 },
    },
  ];
}
