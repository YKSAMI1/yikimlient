// Katalog kartı parça tablosu testleri — çizim olmadan geometri doğrulanır.
import { strict as assert } from "node:assert";
import test from "node:test";
import {
  KART_GENISLIK_PX,
  KART_YAN_PX,
  KART_YUKSEKLIK_PX,
  PELERIN_DIS,
  PELERIN_IC,
  kartParcalari,
} from "./skin-bolgeler.ts";

test("pelerin dış paneli sırt görünümüdür (12,1)-(22,17)", () => {
  assert.deepEqual(PELERIN_DIS, { x: 12, y: 1, w: 10, h: 16 });
  assert.deepEqual(PELERIN_IC, { x: 1, y: 1, w: 10, h: 16 });
});

test("kart altı parçadan oluşur ve ayaklar 32. pikselde biter", () => {
  const parcalar = kartParcalari(false);
  assert.equal(parcalar.length, 6);
  for (const p of parcalar) {
    assert.ok(p.y >= 0 && p.y + p.on.h <= KART_YUKSEKLIK_PX, `${p.ad} dikey taşma`);
    const sag = p.x + p.on.w + (p.yanGorunur ? KART_YAN_PX : 0);
    assert.ok(p.x >= 0 && sag <= KART_GENISLIK_PX, `${p.ad} yatay taşma`);
  }
  // 32 piksel karakter + nefes payı
  assert.equal(KART_YUKSEKLIK_PX, 36);
});

test("yan yüz yalnız görünen parçalarda açık, şerit tuvale sığar", () => {
  const parcalar = kartParcalari(false);
  const acik = parcalar.filter((p) => p.yanGorunur).map((p) => p.ad).sort();
  assert.deepEqual(acik, ["kafa", "sol-bacak", "sol-kol"]);
  for (const p of parcalar) {
    assert.equal(p.yan.h, p.on.h, `${p.ad} yan yüksekliği eşleşmeli`);
    assert.ok(p.yan.x >= 0 && p.yan.x + p.yan.w <= 64, `${p.ad} yan dilim atlas dışı`);
    assert.ok(p.yan.y >= 0 && p.yan.y + p.yan.h <= 64, `${p.ad} yan dilim atlas dışı`);
  }
});

test("wide ve slim modellerde kol genişliği doğru bölgeden gelir", () => {
  const wide = kartParcalari(false);
  const slim = kartParcalari(true);
  const k = (p: typeof wide, ad: string) => p.find((x) => x.ad === ad)!;
  assert.equal(k(wide, "sag-kol").on.w, 4);
  assert.equal(k(slim, "sag-kol").on.w, 3);
  // gövde ortada sabit; yalnız kollar değişir ve gövdeye yapışır
  assert.equal(k(wide, "sol-kol").x, 13);
  assert.equal(k(slim, "sol-kol").x, 13);
  assert.equal(k(slim, "sol-kol").x + k(slim, "sol-kol").on.w, 16);
  assert.equal(k(wide, "sol-kol").x + k(wide, "sol-kol").on.w, 17);
});

test("ön yüzler birbirine binmez: gövde kolların arasında", () => {
  const p = kartParcalari(false);
  const govde = p.find((x) => x.ad === "govde")!;
  const sag = p.find((x) => x.ad === "sag-kol")!;
  const sol = p.find((x) => x.ad === "sol-kol")!;
  assert.equal(sag.x + sag.on.w, govde.x);
  assert.equal(govde.x + govde.on.w, sol.x);
});

test("üst katmanlar (şapka/ceket/kolluk/pantolon) doğru dilimlerden gelir", () => {
  const p = kartParcalari(false);
  const k = (ad: string) => p.find((x) => x.ad === ad)!.ust!;
  assert.deepEqual(k("kafa"), { x: 40, y: 8, w: 8, h: 8 });
  assert.deepEqual(k("govde"), { x: 20, y: 36, w: 8, h: 12 });
  assert.deepEqual(k("sag-kol"), { x: 44, y: 36, w: 4, h: 12 });
  assert.deepEqual(k("sol-kol"), { x: 52, y: 52, w: 4, h: 12 });
  assert.deepEqual(k("sag-bacak"), { x: 4, y: 36, w: 4, h: 12 });
  assert.deepEqual(k("sol-bacak"), { x: 4, y: 52, w: 4, h: 12 });
});

test("üst katman yan dilimleri de atlasın içinde", () => {
  for (const slim of [false, true]) {
    for (const p of kartParcalari(slim)) {
      if (!p.ustYan) continue;
      assert.ok(p.ustYan.x >= 0 && p.ustYan.x + p.ustYan.w <= 64, `${p.ad} üst yan`);
      assert.ok(p.ustYan.y >= 0 && p.ustYan.y + p.ustYan.h <= 64, `${p.ad} üst yan`);
      assert.equal(p.ustYan.h, p.on.h, `${p.ad} üst yan yüksekliği eşleşmeli`);
    }
  }
});
