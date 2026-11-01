// KOZMETİK ATLASI — pelerin ve elitra doğrudan vanilla 64×32 dokusu üzerinde.
//
// Eski sürüm küçük bir tasarımı (pelerin 10×16, kanat 10×20) paftaya oturtup
// yan/üst/alt yüzleri otomatik dolduruyordu. Artık kullanıcı TÜM yüzleri kendi
// çizer: editör 64×32 atlasın tamamıdır ve mod bu PNG'yi olduğu gibi kullanır.
//
// Bölge yerleşimi oyunun kendi modellerinden çıkarıldı (ModelPart cuboid UV):
//
//   PELERİN  texOffs(0,0) 10×16×1        ELİTRA  texOffs(22,0) 10×20×2
//   dış   (1,1) 10×16                    dış yüz (24,2) 10×20
//   iç    (12,1) 10×16                   iç yüz  (36,2) 10×20
//
//   "Dış" = oyunda ARKADAN GÖRÜNEN yüz; tasarım oraya çizilir. "İç" gövdeye
//   bakar. Doğrulama: eski launcher exe'si tasarımı (1,1)'e yazıp (12,1)'e
//   AYNALI kopyalıyor ve oyunda düzgün görünüyordu → görünen yüz (1,1).
//   yanlar (0,1) / (11,1) 1×16           yanlar  (22,2) / (34,2) 2×20
//   üst   (1,0) 10×1                     üst     (24,0) 10×2
//   alt   (11,0) 10×1                    alt     (34,0) 10×2
//
// `ui/src/sahne/karakter.ts` içindeki `kozUV` aynı formülü kullanır; ikisi
// ayrışırsa önizleme oyundan farklı görünür.

export type Piksel = string;

export const KOZ_G = 64;
export const KOZ_Y = 32;
export const ATLAS_PIKSEL = KOZ_G * KOZ_Y;

/** Atlas üzerindeki bir yüz — etiket ve vurgu için. */
export interface KozBolge {
  id: string;
  ad: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

/** Pelerin yüzleri (vanilla `class_9950` cuboid uv(0,0)).
 *
 *  DİKKAT: `(1,1)` paneli pelerinin GÖVDEYE BAKAN yüzüdür (iç astar),
 *  `(12,1)` paneli ise oyunda ARKADAN GÖRÜNEN yüzdür — tasarım oraya gider.
 *  (Ters bağlanınca desen pelerinin önünde/ters tarafında kalıyordu.) */
export const PELERIN_BOLGELERI: KozBolge[] = [
  { id: "p-dis", ad: "Dış (görünen)", x: 1, y: 1, w: 10, h: 16 },
  { id: "p-ic", ad: "İç (astar)", x: 12, y: 1, w: 10, h: 16 },
  { id: "p-sol", ad: "Sol yan", x: 0, y: 1, w: 1, h: 16 },
  { id: "p-sag", ad: "Sağ yan", x: 11, y: 1, w: 1, h: 16 },
  { id: "p-ust", ad: "Üst", x: 1, y: 0, w: 10, h: 1 },
  { id: "p-alt", ad: "Alt", x: 11, y: 0, w: 10, h: 1 },
];

/** Elitra yüzleri (vanilla `class_563.method_31994` cuboid uv(22,0)).
 *  Sağ kanat oyunda aynalanır → iki kanat da AYNI atlas bölgelerini gösterir. */
export const ELITRA_BOLGELERI: KozBolge[] = [
  { id: "e-dis", ad: "Dış (görünen)", x: 24, y: 2, w: 10, h: 20 },
  { id: "e-ic", ad: "İç", x: 36, y: 2, w: 10, h: 20 },
  { id: "e-sol", ad: "Sol yan", x: 22, y: 2, w: 2, h: 20 },
  { id: "e-sag", ad: "Sağ yan", x: 34, y: 2, w: 2, h: 20 },
  { id: "e-ust", ad: "Üst", x: 24, y: 0, w: 10, h: 2 },
  { id: "e-alt", ad: "Alt", x: 34, y: 0, w: 10, h: 2 },
];

/** Pelerinin/elitranın oyunda GÖRÜNEN (dış) yüzü — tasarım buraya gider. */
export function disBolge(tur: "pelerin" | "kanat"): KozBolge {
  const liste = tur === "pelerin" ? PELERIN_BOLGELERI : ELITRA_BOLGELERI;
  return liste[0];
}

/** Karşı yüz (iç astar). */
export function icBolge(tur: "pelerin" | "kanat"): KozBolge {
  const liste = tur === "pelerin" ? PELERIN_BOLGELERI : ELITRA_BOLGELERI;
  return liste[1];
}

/** Tamamen saydam atlas. */
export function bosAtlas(): Piksel[] {
  return Array.from({ length: ATLAS_PIKSEL }, () => "");
}

/** Atlas tamamen boş mu (kaydet/kaldır kararı bunu kullanır). */
export function atlasBosMu(pikseller: Piksel[]): boolean {
  return !pikseller.some((p) => p !== "");
}

export function atlasKopyala(pikseller: Piksel[]): Piksel[] {
  return pikseller.slice(0, ATLAS_PIKSEL);
}

/** 64×32 tuval — 3D sahneye doğrudan doku olarak verilir (boyut 64×32 kalmalı). */
export function atlasTuval(): HTMLCanvasElement {
  const t = document.createElement("canvas");
  t.width = KOZ_G;
  t.height = KOZ_Y;
  return t;
}

/** Aynı tuvali yeniden boya (kimlik korunur → sahne dokuyu yeniden kurmaz).
 *
 *  `zemin`: piksellerin ALTINA çizilecek isteğe bağlı katman. Hayalet siluet
 *  buradan verilir; kaydedilen veriye karışmaz. */
export function atlasTuvalGuncelle(
  t: HTMLCanvasElement,
  pikseller: Piksel[],
  zemin?: (g: CanvasRenderingContext2D) => void,
): void {
  const g = t.getContext("2d");
  if (!g) return;
  g.imageSmoothingEnabled = false;
  g.clearRect(0, 0, KOZ_G, KOZ_Y);
  if (zemin) zemin(g);
  for (let y = 0; y < KOZ_Y; y++) {
    for (let x = 0; x < KOZ_G; x++) {
      const renk = pikseller[y * KOZ_G + x];
      if (!renk) continue;
      g.fillStyle = renk;
      g.fillRect(x, y, 1, 1);
    }
  }
}

/** Bir tuvali/keyfiyatlı bağlamı 64×32 renk listesine çevir. */
export function atlasOku(kaynak: CanvasRenderingContext2D): Piksel[] {
  const veri = kaynak.getImageData(0, 0, KOZ_G, KOZ_Y).data;
  const cikti: Piksel[] = new Array(ATLAS_PIKSEL);
  for (let i = 0; i < ATLAS_PIKSEL; i++) {
    const a = veri[i * 4 + 3];
    cikti[i] = a < 24 ? "" : `#${hex(veri[i * 4])}${hex(veri[i * 4 + 1])}${hex(veri[i * 4 + 2])}`;
  }
  return cikti;
}

/** Renk listesini 64×32 tuvale yaz (yeni tuval). */
export function atlasCiz(pikseller: Piksel[]): HTMLCanvasElement {
  const t = atlasTuval();
  atlasTuvalGuncelle(t, pikseller);
  return t;
}

/** Dolu bir pikselin rengini `rgba(...)` biçimine çevir (hayalet katman). */
export function saydam(renk: string, alfa: number): string {
  const m = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(renk.trim());
  if (!m) return `rgba(0,0,0,${alfa})`;
  return `rgba(${parseInt(m[1], 16)},${parseInt(m[2], 16)},${parseInt(m[3], 16)},${alfa})`;
}

const hex = (n: number): string => n.toString(16).padStart(2, "0");

// ---------------------------------------------------------------------------
// VANILLA ELİTRA — Mojang'ın `entity/elytra.png` dokusu (64×32), birebir.
// 206 opak piksel, 10 renk; kayıpsız ve senkron kalsın diye düz piksel listesi
// olarak gömüldü ("x,y,renkİndeksi" → ';' ile ayrılmış).
// ---------------------------------------------------------------------------

const ELITRA_RENK = [
  "#46515d", "#7f8f9f", "#424c58", "#4f5c6a", "#4a5663",
  "#5f6f80", "#586675", "#67788a", "#77889a", "#6d7f92",
];

const ELITRA_VERI =
  "31,0,0;32,0,0;33,0,0;34,0,1;35,0,1;36,0,1;37,0,1;38,0,1;39,0,1;32,1,0;33,1,0;34,2,0;35,2,0;36,2,2;37,2,0;38,2,0;39,2,0;40,2,0;41,2,2;34,3,0;35,3,0;36,3,2;37,3,2;38,3,0;39,3,0;40,3,0;41,3,0;42,3,0;35,4,0;36,4,2;37,4,2;38,4,0;39,4,0;40,4,0;41,4,0;42,4,0;43,4,2;35,5,0;36,5,2;37,5,2;38,5,0;39,5,0;40,5,0;41,5,0;42,5,0;43,5,0;35,6,0;36,6,2;37,6,0;38,6,2;39,6,0;40,6,0;41,6,0;42,6,3;43,6,3;35,7,0;36,7,2;37,7,0;38,7,0;39,7,2;40,7,4;41,7,3;42,7,3;43,7,3;44,7,5;35,8,4;36,8,2;37,8,0;38,8,0;39,8,4;40,8,4;41,8,4;42,8,3;43,8,6;44,8,5;35,9,4;36,9,4;37,9,4;38,9,3;39,9,3;40,9,3;41,9,3;42,9,4;43,9,6;44,9,6;35,10,3;36,10,4;37,10,3;38,10,4;39,10,3;40,10,3;41,10,6;42,10,5;43,10,5;44,10,7;22,11,8;36,11,3;37,11,6;38,11,6;39,11,6;40,11,5;41,11,5;42,11,5;43,11,5;44,11,7;45,11,1;22,12,8;36,12,6;37,12,5;38,12,5;39,12,5;40,12,6;41,12,5;42,12,5;43,12,7;44,12,9;45,12,1;22,13,1;36,13,6;37,13,5;38,13,5;39,13,5;40,13,5;41,13,6;42,13,7;43,13,7;44,13,9;45,13,1;22,14,8;36,14,5;37,14,5;38,14,7;39,14,9;40,14,9;41,14,9;42,14,9;43,14,9;44,14,7;45,14,8;22,15,1;36,15,7;37,15,9;38,15,7;39,15,7;40,15,9;41,15,9;42,15,9;43,15,9;44,15,9;45,15,1;22,16,1;37,16,7;38,16,9;39,16,9;40,16,7;41,16,7;42,16,7;43,16,9;44,16,1;45,16,1;22,17,8;37,17,7;38,17,7;39,17,9;40,17,9;41,17,9;42,17,9;43,17,8;44,17,8;45,17,8;22,18,1;37,18,8;38,18,1;39,18,8;40,18,1;41,18,1;42,18,1;43,18,1;44,18,1;45,18,1;22,19,1;38,19,1;39,19,1;40,19,8;41,19,8;42,19,8;43,19,1;44,19,1;45,19,1;22,20,7;38,20,8;39,20,1;40,20,1;41,20,1;42,20,1;43,20,8;44,20,8;45,20,8;22,21,7;39,21,8;40,21,8;41,21,1;42,21,1;43,21,1;44,21,1;45,21,1";

/** Vanilla Minecraft elitra dokusu (Mojang `entity/elytra.png`, 64×32).
 *
 *  Elitra kayıtlı değilken editör bununla açılır; kullanıcı gerçek oyun
 *  dokusunu düzenler. "Temizle" ile boşaltılırsa dosya silinir ve oyunda
 *  yine normal Minecraft elitrası görünür. */
export function elitraSablonu(): Piksel[] {
  const p = bosAtlas();
  for (const parca of ELITRA_VERI.split(";")) {
    const [x, y, i] = parca.split(",");
    p[Number(y) * KOZ_G + Number(x)] = ELITRA_RENK[Number(i)];
  }
  return p;
}
