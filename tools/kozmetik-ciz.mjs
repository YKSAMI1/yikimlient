// YIKIMLient pelerin + elitra piksel sanatı.
// Çıktı: yikim-mod ve launcher varsayılan kozmetikleri (64x32 PNG).
// Tasarım: turuncu (YIKIM vurgusu) zemin + ortada Y harfi + kenarlarda şimşek.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import zlib from "node:zlib";

const kok = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

// ---------------------------------------------------------------- palet
const RENK = {
  bos: [0, 0, 0, 0],
  koyu: [120, 58, 12, 255],      // pelerin gölgesi
  turuncu: [255, 122, 24, 255],  // YIKIM vurgusu
  acikTuruncu: [255, 154, 77, 255],
  krem: [255, 236, 214, 255],    // Y harfinin gövdesi
  beyaz: [255, 255, 255, 255],
  siyah: [26, 13, 2, 255],
  altin: [255, 200, 90, 255],
};

// ---------------------------------------------------------------- PNG yazıcı
const crc32 = (buf) => {
  let c;
  let crc = 0xffffffff;
  for (let n = 0; n < buf.length; n++) {
    c = (crc ^ buf[n]) & 0xff;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    crc = (crc ^ c) >>> 0;
  }
  return (crc ^ 0xffffffff) >>> 0;
};
const parca = (tip, veri) => {
  const l = Buffer.alloc(4);
  l.writeUInt32BE(veri.length, 0);
  const td = Buffer.concat([Buffer.from(tip, "ascii"), veri]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(td), 0);
  return Buffer.concat([l, td, crc]);
};
function pngYaz(hedef, gen, yuk, piksel) {
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(gen, 0);
  ihdr.writeUInt32BE(yuk, 4);
  ihdr[8] = 8;   // bit
  ihdr[9] = 6;   // RGBA
  const satirlar = [];
  for (let y = 0; y < yuk; y++) {
    satirlar.push(0);
    for (let x = 0; x < gen; x++) {
      const i = (y * gen + x) * 4;
      satirlar.push(piksel[i], piksel[i + 1], piksel[i + 2], piksel[i + 3]);
    }
  }
  const png = Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    parca("IHDR", ihdr),
    parca("IDAT", zlib.deflateSync(Buffer.from(satirlar), { level: 9 })),
    parca("IEND", Buffer.alloc(0)),
  ]);
  fs.mkdirSync(path.dirname(hedef), { recursive: true });
  fs.writeFileSync(hedef, png);
  return png.length;
}

// ---------------------------------------------------------------- tuval
function tuval(gen, yuk) {
  const p = new Uint8Array(gen * yuk * 4);
  const px = (x, y, r) => {
    if (x < 0 || y < 0 || x >= gen || y >= yuk) return;
    const i = (y * gen + x) * 4;
    p[i] = r[0]; p[i + 1] = r[1]; p[i + 2] = r[2]; p[i + 3] = r[3];
  };
  return {
    gen, yuk, px,
    kutu: (x0, y0, x1, y1, r) => { for (let y = y0; y <= y1; y++) for (let x = x0; x <= x1; x++) px(x, y, r); },
    ver: p,
  };
}

// "Y" harfi 5x5 (piksel sanatı)
const Y = [
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [0, 1, 0, 1, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
];
// şimşek (3x5)
const SIMSEK = [
  [0, 1],
  [1, 0],
  [0, 1],
  [1, 0],
];

// ---------------------------------------------------------------- PELERİN
// 64x32 atlası: pelerin bölgesi 10x16 civarı (vanilla yerleşimine yakın)
const PELERIN_X = 1;
const PELERIN_Y = 1;
function pelerin() {
  const t = tuval(64, 32);
  // zemin: turuncu gövde + koyu kenar
  for (let y = 0; y < 16; y++) {
    for (let x = 0; x < 10; x++) {
      const kenar = x === 0 || y === 0 || x === 9 || y === 15;
      const golge = y > 11;
      t.px(PELERIN_X + x, PELERIN_Y + y, kenar ? RENK.koyu : golge ? RENK.turuncu : RENK.acikTuruncu);
    }
  }
  // ortada Y (krem) + ince siyah çerçeve
  const ox = PELERIN_X + 2;
  const oy = PELERIN_Y + 5;
  for (let y = 0; y < 5; y++) {
    for (let x = 0; x < 5; x++) {
      if (Y[y][x]) t.px(ox + x, oy + y, RENK.krem);
    }
  }
  // Y'nin etrafına siyah hatt
  for (let y = -1; y <= 5; y++) {
    for (let x = -1; x <= 5; x++) {
      const icerde = x >= 0 && y >= 0 && x < 5 && y < 5 && Y[y][x];
      if (!icerde && t.px) {
        // sadece komşusu dolu olan hücreler
      }
    }
  }
  // şimşekler: iki yan
  for (let i = 0; i < SIMSEK.length; i++) {
    for (let j = 0; j < SIMSEK[i].length; j++) {
      if (SIMSEK[i][j]) {
        t.px(PELERIN_X + 0, PELERIN_Y + 3 + i, RENK.altin);
        t.px(PELERIN_X + 9, PELERIN_Y + 8 + i, RENK.altin);
      }
    }
  }
  // altın kenar şeridi (üst)
  for (let x = 0; x < 10; x++) t.px(PELERIN_X + x, PELERIN_Y, RENK.altin);
  pngYaz(path.join(kok, "yikim-mod/src/main/resources/assets/yikimlient/textures/entity/pelerin.png"), 64, 32, t.ver);
  return "pelerin.png";
}

// ---------------------------------------------------------------- ELİTRA
// 64x32 atlası: kanat bölgesi 12x20 (sol üst köşe)
function elitra() {
  const t = tuval(64, 32);
  const X = 1;
  const Y0 = 1;
  const G = 12;
  const YK = 20;
  // gövde: koyu → turuncu geçiş
  for (let y = 0; y < YK; y++) {
    for (let x = 0; x < G; x++) {
      const kenar = x === 0 || y === 0 || x === G - 1 || y === YK - 1;
      const oran = y / YK;
      t.px(X + x, Y0 + y, kenar ? RENK.koyu : oran > 0.6 ? RENK.turuncu : RENK.acikTuruncu);
    }
  }
  // ortada büyük Y
  const ox = X + 3;
  const oy = Y0 + 7;
  for (let y = 0; y < 5; y++) {
    for (let x = 0; x < 5; x++) {
      if (Y[y][x]) t.px(ox + x, oy + y, RENK.krem);
    }
  }
  // kanat damarları: altın çizgiler
  for (let i = 2; i < YK - 2; i += 4) {
    for (let x = 1; x < G - 1; x++) t.px(X + x, Y0 + i, RENK.altin);
  }
  // altın köşe işareti
  t.kutu(X, Y0, X + 2, Y0 + 2, RENK.altin);
  t.kutu(X + G - 3, Y0 + YK - 3, X + G - 1, Y0 + YK - 1, RENK.altin);
  pngYaz(path.join(kok, "yikim-mod/src/main/resources/assets/yikimlient/textures/entity/elytra.png"), 64, 32, t.ver);
  return "elytra.png";
}

console.log("yazildi:", pelerin(), "+", elitra());
