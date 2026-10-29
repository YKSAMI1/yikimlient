import { test } from "node:test";
import assert from "node:assert/strict";
import { PikselPafta } from "./piksel-pafta.ts";
import { BOLGELER, bolgeBul, yuzDilimi } from "./skin-bolgeler.ts";

const KIRMIZI: [number, number, number, number] = [255, 0, 0, 255];
const MAVI: [number, number, number, number] = [0, 0, 255, 255];

test("boya tek pikseli renklendirir", () => {
  const p = PikselPafta.bos();
  p.boya(3, 4, KIRMIZI);
  assert.deepEqual(p.piksel(3, 4), KIRMIZI);
  assert.deepEqual(p.piksel(2, 4), [0, 0, 0, 0]);
});

test("cizgi aradaki pikselleri doldurur", () => {
  const p = PikselPafta.bos();
  p.cizgi(0, 0, 5, 5, KIRMIZI);
  for (let i = 0; i <= 5; i++) {
    assert.deepEqual(p.piksel(i, i), KIRMIZI, `(${i},${i}) boyanmadı`);
  }
  let sayi = 0;
  for (let y = 0; y < 64; y++)
    for (let x = 0; x < 64; x++) if (p.piksel(x, y)[3] > 0) sayi++;
  assert.equal(sayi, 6);
});

test("kova yalnız bağlantılı saydam bölgeyi boyar", () => {
  const p = PikselPafta.bos();
  // dikey duvar: x=32
  for (let y = 0; y < 64; y++) p.boya(32, y, KIRMIZI);
  p.kova(0, 0, MAVI);
  assert.deepEqual(p.piksel(10, 10), MAVI);
  assert.deepEqual(p.piksel(63, 63), [0, 0, 0, 0], "duvarın ötesi boyanmamalı");
  assert.deepEqual(p.piksel(32, 10), KIRMIZI, "duvar korunmalı");
});

test("geriAl ve ileriAl", () => {
  const p = PikselPafta.bos();
  p.katmanBasla();
  p.boya(1, 1, KIRMIZI);
  p.katmanBasla();
  p.boya(2, 2, MAVI);
  assert.equal(p.geriAl(), true);
  assert.deepEqual(p.piksel(2, 2), [0, 0, 0, 0]);
  assert.equal(p.geriAl(), true);
  assert.deepEqual(p.piksel(1, 1), [0, 0, 0, 0]);
  assert.equal(p.ileriAl(), true);
  assert.deepEqual(p.piksel(1, 1), KIRMIZI);
});

test("kalın fırça birden fazla piksel boyar", () => {
  const p = PikselPafta.bos();
  p.boya(10, 10, KIRMIZI, 4);
  assert.deepEqual(p.piksel(10, 10), KIRMIZI);
  assert.deepEqual(p.piksel(11, 11), KIRMIZI);
});

test("damla piksel rengini döner", () => {
  const p = PikselPafta.bos();
  p.boya(5, 6, MAVI);
  assert.deepEqual(p.damla(5, 6), MAVI);
});

test("bölge haritası ön yüzleri doğru gösterir", () => {
  // Ön yüzler: atlas düzeninde üst yüzün bir sağa/altta kalan kare.
  assert.equal(bolgeBul(8, 8)?.id, "kafa");
  assert.equal(bolgeBul(40, 8)?.id, "sapka");
  assert.equal(bolgeBul(20, 20)?.id, "govde");
  assert.equal(bolgeBul(44, 20)?.id, "sag-kol");
  assert.equal(bolgeBul(4, 52)?.id, "sol-pantolon");
  assert.equal(bolgeBul(63, 63), null);
  assert.ok(BOLGELER.length >= 12);
});

test("her bölge altı yüzünü de bilir ve atlas dışına çıkmaz", () => {
  for (const b of BOLGELER) {
    assert.equal(b.dilimler.length, 6, `${b.ad} altı yüz olmalı`);
    for (const d of b.dilimler) {
      assert.ok(d.x >= 0 && d.y >= 0, `${b.ad} negatif dilim`);
      assert.ok(d.x + d.w <= 64 && d.y + d.h <= 64, `${b.ad} atlas dışına taşıyor`);
    }
    // Seçilen ön yüz, parçanın dilimlerinden biri olmalı.
    assert.ok(
      b.dilimler.some((d) => d.x === b.x && d.y === b.y && d.w === b.w && d.h === b.h),
      `${b.ad} ön yüz dilimlerde yok`,
    );
  }
});

test("yüz dilimi katalog kırpması", () => {
  assert.deepEqual(yuzDilimi(), { x: 8, y: 8, w: 8, h: 8 });
});
