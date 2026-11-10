// VARSAYILAN KOZMETİK SANATI — 64×32 pelerin + elitra (YIKIM logosu).
//
// Neden ayrı bir üretici? Varsayılan pelerin/elitra daha önce yalnız modun
// içinde duruyordu ama HİÇBİR kod onu kullanmıyordu ("varsayılan tasarım
// görünmüyor" hatası). Artık aynı PNG hem modun kaynaklarına hem launcher'ın
// gömülü kaynaklarına yazılır; launcher onu hesaba bağlı varsayılan tasarım
// olarak yükler, mod da dosya yoksa gömülü dokuyu kullanır.
//
// Bağımlılık yok: PNG kendi elimizle (zlib + CRC32) yazılır. Böylece CI'da
// `npm install` beklemeden tek komutla yeniden üretilebilir:
//
//   node tools/varsayilan-kozmetik.mjs
//
// Çıktı yolları:
//   yikim-mod/src/main/resources/assets/yikimlient/textures/entity/{pelerin,elytra}.png
//   src-tauri/resources/kozmetik/{pelerin,elytra}.png
//
// Atlas yerleşimi (kozmetik.rs başlığıyla aynı):
//   PELERİN  ön (1,1)10×16 · arka (12,1)10×16 · yanlar (0,1)/(11,1)1×16
//            üst (1,0)10×1 · alt (11,0)10×1
//   ELİTRA   dış (24,2)10×20 · iç (36,2)10×20 · yanlar (22,2)/(34,2)2×20
//            üst (24,0)10×2 · alt (34,0)10×2

import { deflateSync } from "node:zlib";
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const G = 64;
const Y = 32;

// ---------------------------------------------------------------- tuval

/** RGBA piksel dizisi: [r,g,b,a, ...] */
const tuval = new Uint8Array(G * Y * 4);

function piksel(x, y, renk) {
  if (x < 0 || y < 0 || x >= G || y >= Y || !renk) return;
  const i = (y * G + x) * 4;
  tuval[i] = renk[0];
  tuval[i + 1] = renk[1];
  tuval[i + 2] = renk[2];
  tuval[i + 3] = renk[3] ?? 255;
}

function dikdortgen(x, y, g, h, renk) {
  for (let j = 0; j < h; j++) {
    for (let i = 0; i < g; i++) piksel(x + i, y + j, renk);
  }
}

function cerceve(x, y, g, h, renk) {
  for (let i = 0; i < g; i++) {
    piksel(x + i, y, renk);
    piksel(x + i, y + h - 1, renk);
  }
  for (let j = 0; j < h; j++) {
    piksel(x, y + j, renk);
    piksel(x + g - 1, y + j, renk);
  }
}

/** Dikey degrade: üstten alta renk karışımı. */
function degradeDoldur(x, y, g, h, ust, alt) {
  for (let j = 0; j < h; j++) {
    const t = h <= 1 ? 0 : j / (h - 1);
    const renk = [
      Math.round(ust[0] + (alt[0] - ust[0]) * t),
      Math.round(ust[1] + (alt[1] - ust[1]) * t),
      Math.round(ust[2] + (alt[2] - ust[2]) * t),
      255,
    ];
    for (let i = 0; i < g; i++) piksel(x + i, y + j, renk);
  }
}

// ---------------------------------------------------------------- palet

const RENK = {
  gece: [18, 19, 26, 255],
  geceUst: [38, 39, 52, 255],
  geceAlt: [9, 10, 14, 255],
  kenar: [52, 54, 70, 255],
  turuncu: [255, 122, 26, 255],
  turuncuKoyu: [179, 74, 0, 255],
  turuncuAcik: [255, 154, 61, 255],
  sari: [255, 209, 102, 255],
  beyaz: [255, 248, 236, 255],
};

// "Y" simgesi — 8×12, karakter haritası. Kalın çizilir ki 10×16 yüzde bile
// uzaktan okunsun; "w" = beyaz gövde, "y" = sarı gövde.
const Y_SIMGE = [
  "yy....yy",
  "yy....yy",
  ".yy..yy.",
  "..yyyy..",
  "...yy...",
  "...yy...",
  "...yy...",
  "...yy...",
  "...yy...",
  "...yy...",
  "...yy...",
  "...yy...",
];

/** Y logosu: önce turuncu gölge (1 px aşağı), sonra gövde. */
function yCiz(x0, y0, govde) {
  for (let j = 0; j < Y_SIMGE.length; j++) {
    for (let i = 0; i < Y_SIMGE[j].length; i++) {
      if (Y_SIMGE[j][i] === ".") continue;
      piksel(x0 + i, y0 + j + 1, RENK.turuncuKoyu);
    }
  }
  for (let j = 0; j < Y_SIMGE.length; j++) {
    const satir = Y_SIMGE[j];
    for (let i = 0; i < satir.length; i++) {
      if (satir[i] === ".") continue;
      piksel(x0 + i, y0 + j, satir[i] === "w" ? RENK.beyaz : govde);
    }
  }
}

// ---------------------------------------------------------------- pelerin

function pelerinYuz(x, y, g, h, koyu) {
  degradeDoldur(x, y, g, h, koyu ? RENK.geceUst : RENK.geceUst, RENK.geceAlt);
  // Üstte ince turuncu enerji bandı: uzaktan da tanınsın.
  for (let i = 1; i < g - 1; i++) {
    piksel(x + i, y + 1, RENK.turuncuKoyu);
    piksel(x + i, y + 2, RENK.turuncu);
  }
  // Alt kenarda logo rengiyle ince çizgi.
  for (let i = 1; i < g - 1; i++) piksel(x + i, y + h - 2, RENK.turuncuKoyu);
  cerceve(x, y, g, h, RENK.kenar);
  // Y logosu: 8×12 → 10×16 yüze 1 piksel içeriden.
  yCiz(x + 1, y + 2, RENK.beyaz);
}

function pelerinUret() {
  tuval.fill(0);
  // Ön yüz (vücuda bakan): daha koyu.
  pelerinYuz(1, 1, 10, 16, true);
  // Arka yüz (asıl görünen).
  pelerinYuz(12, 1, 10, 16, false);
  // Yanlar.
  dikdortgen(0, 1, 1, 16, RENK.gece);
  dikdortgen(11, 1, 1, 16, RENK.gece);
  for (let j = 2; j < 15; j++) {
    piksel(0, j, RENK.kenar);
    piksel(11, j, RENK.kenar);
  }
  // Üst / alt şeritler.
  dikdortgen(1, 0, 10, 1, RENK.turuncu);
  dikdortgen(11, 0, 10, 1, RENK.turuncuKoyu);
}

// ---------------------------------------------------------------- elitra

function elitraYuz(x, y, g, h, ic) {
  degradeDoldur(
    x,
    y,
    g,
    h,
    ic ? RENK.gece : RENK.geceUst,
    ic ? RENK.geceAlt : RENK.geceAlt,
  );
  cerceve(x, y, g, h, RENK.kenar);
  // Kanat damarları: ortadan dışa açılan ince koyu çizgiler.
  for (let j = 4; j < h - 3; j += 5) {
    for (let i = 2; i < g - 2; i++) {
      piksel(x + i, y + j, ic ? RENK.kenar : RENK.turuncuKoyu);
    }
  }
  // Kenar parlaması.
  for (let i = 1; i < g - 1; i++) {
    piksel(x + i, y + 1, ic ? RENK.turuncuKoyu : RENK.turuncu);
  }
  // Y logosu ortada.
  yCiz(x + 1, y + 4, ic ? RENK.turuncuAcik : RENK.beyaz);
}

function elitraUret() {
  tuval.fill(0);
  elitraYuz(24, 2, 10, 20, false); // dış yüz
  elitraYuz(36, 2, 10, 20, true); // iç yüz
  // Yanlar (2×20).
  for (const x of [22, 34]) {
    degradeDoldur(x, 2, 2, 20, RENK.geceUst, RENK.geceAlt);
    for (let j = 2; j < 22; j++) {
      piksel(x, j, RENK.kenar);
      piksel(x + 1, j, RENK.turuncuKoyu);
    }
  }
  // Üst / alt (10×2).
  dikdortgen(24, 0, 10, 2, RENK.turuncu);
  dikdortgen(34, 0, 10, 2, RENK.turuncuKoyu);
  // Arka yüzün iç kısmında hafif parlama (güneş ışığı hissi).
  for (let j = 2; j < 6; j++) {
    for (let i = 25; i < 33; i++) {
      if ((i + j) % 3 === 0) piksel(i, j, RENK.turuncuAcik);
    }
  }
}

// ---------------------------------------------------------------- PNG yazıcı

const CRC_TABLO = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c >>> 0;
  }
  return t;
})();

function crc32(bayt) {
  let c = 0xffffffff;
  for (let i = 0; i < bayt.length; i++) c = CRC_TABLO[(c ^ bayt[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function parca(tur, veri) {
  const uzunluk = Buffer.alloc(4);
  uzunluk.writeUInt32BE(veri.length, 0);
  const govde = Buffer.concat([Buffer.from(tur, "ascii"), veri]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(govde), 0);
  return Buffer.concat([uzunluk, govde, crc]);
}

function pngUret(rgba, genislik, yukseklik) {
  const imza = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(genislik, 0);
  ihdr.writeUInt32BE(yukseklik, 4);
  ihdr[8] = 8; // bit derinliği
  ihdr[9] = 6; // RGBA
  ihdr[10] = 0; // deflate
  ihdr[11] = 0; // adaptif filtre
  ihdr[12] = 0; // interlace yok
  const satirlar = Buffer.alloc((genislik * 4 + 1) * yukseklik);
  for (let y = 0; y < yukseklik; y++) {
    const hedef = y * (genislik * 4 + 1);
    satirlar[hedef] = 0; // filtre: yok
    Buffer.from(rgba.buffer, rgba.byteOffset + y * genislik * 4, genislik * 4).copy(
      satirlar,
      hedef + 1,
    );
  }
  return Buffer.concat([
    imza,
    parca("IHDR", ihdr),
    parca("IDAT", deflateSync(satirlar, { level: 9 })),
    parca("IEND", Buffer.alloc(0)),
  ]);
}

// ---------------------------------------------------------------- yaz

const MOD_DIZIN = join("yikim-mod", "src", "main", "resources", "assets", "yikimlient", "textures", "entity");
const LAUNCHER_DIZIN = join("src-tauri", "resources", "kozmetik");

function yaz(dizin, ad, veri) {
  mkdirSync(dizin, { recursive: true });
  const yol = join(dizin, ad);
  writeFileSync(yol, veri);
  return `${yol} (${veri.length} bayt)`;
}

pelerinUret();
const pelerinPng = pngUret(tuval, G, Y);

elitraUret();
const elitraPng = pngUret(tuval, G, Y);

for (const dizin of [MOD_DIZIN, LAUNCHER_DIZIN]) {
  console.log(yaz(dizin, "pelerin.png", pelerinPng));
  console.log(yaz(dizin, "elytra.png", elitraPng));
}
