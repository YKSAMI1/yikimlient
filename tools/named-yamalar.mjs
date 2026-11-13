// RESMÎ KAYNAK YAMALARI — otomatik eşlemenin yapamadığı elli yer
//
// named-src.mjs çevirisinden SONRA çalışır (derle-26.ps1 içinden). Eşleme
// tablolarında olmayan (iç sınıf / lambdas / yeni API) adları elle düzeltir.
//
// NEDEN: 26.1 client jar'ında aynı sınıflar var ama bazı üyelerin resmî adı
// 1.21.11 eşlemelerinde adı geçmiyordu (FontDescription$Resource gibi İÇ
// sınıflar). Bu yamalar tek yerde toplanır; kaynak ağacı (src/main/java)
// değişmez.
//
// KULLANIM: node tools/named-yamalar.mjs   (src/official üzerinde çalışır)

import { readdirSync, readFileSync, writeFileSync, statSync } from "node:fs";
import { join } from "node:path";

const KOK = process.cwd();
const HEDEF = join(KOK, "yikim-mod", "src", "official");

// [dosya (boş = hepsi), ara, değiştir]
const YAMALAR = [
  // ---- iç sınıflar (1.21.11 resmî adı bilinmeyen, 26.1 jar'ında doğrulanmış) ----
  ["", "CustomPacketPayload.class_9154", "CustomPacketPayload.TypeAndCodec"],
  ["", "ClientAsset.class_10726", "ClientAsset.ResourceTexture"],
  ["", "FontDescription.class_11721", "FontDescription.Resource"],
  ["", "UnbakedGlyph.class_11760", "UnbakedGlyph.Static"],
  // ---- metotlar ----
  // Identifier.method_60655(ns, yol) = resmî "iki argümanlı kısa yapıcı"
  ["", "Identifier.method_60655", "Identifier.fromNamespaceAndPath"],
  ["", "method_2966", "id"],
  ["", "method_52814", "skin"],
  ["", "method_52810", "getSkin"],
  ["", "method_1507", "send"],
  ["", "method_1918", "read"],
  ["", "method_1727", "write"],
  ["", "method_43902", "getServerData"],
  ["", "method_41753", "remove"],
  ["", "method_42534", "build"],
  ["", "method_29177", "drawString"],
  ["", "method_12832", "render"],
  ["", "method_43470", "accept"],
  ["", "method_25402", "getServerData"],
  ["", "method_25400", "getStatus"],
  ["", "method_25401", "getStatus"],
  ["", "method_25403", "getStatus"],
  ["", "method_25404", "getStatus"],
  ["", "method_25406", "getStatus"],
  ["", "method_25396", "getStatus"],
  ["", "method_10862", "disconnect"],
  ["", "method_10852", "disconnect"],
  ["", "method_27704", "close"],
  ["", "method_56431", "join"],
  ["", "method_10800", "getConnection"],
  ["", "method_10788", "getConnection"],
  ["", "method_10755", "getConnection"],
  ["", "method_41748", "clear"],
  ["", "method_25306", "getStatus"],
  // ---- alanlar ----
  ["", "field_3761", "LOG4J_MARKER"],
  ["", "field_24360", "facing"],
  ["", "field_11043", "VALUE"],
  ["", "field_11035", "KEY"],
  ["", "field_11039", "TYPE"],
  ["", "field_11034", "TYPE"],
  // ---- çeviricinin yanlış birleştirdiği paket yolları ----
  ["", "net.minecraft.com.mojang.blaze3d", "com.mojang.blaze3d"],
  ["", "net.minecraft.net.minecraft.network", "net.minecraft.network"],
  // ---- 26.1'de doğrulanmış sınıf dinamikleri ----
  // GuiGraphics 26.1'de GUI'den AYRILDI: yeni Vulkan çizim hattı "render
  // state" kaydı yapar → GuiGraphicsExtractor. İmzalar da değişti
  // (fill/drawString …), bu yüzden sadece ad değişmez, YikimAdapter da
  // 26 uyarlaması gerekir (bkz. src/version/26).
  ["", "GuiGraphics", "GuiGraphicsExtractor"],
  ["", "GlyphProvider.class_9241", "GlyphProvider.Conditional"],
  // HudRenderCallback (lifecycle olayı) 26.x'te kalktı; yerini
  // rendering/v1/hud/HudElement + HudElementRegistry aldı.
  ["", "net.fabricmc.fabric.api.client.event.lifecycle.v1.HudRenderCallback",
      "net.fabricmc.fabric.api.client.rendering.v1.hud.HudElement"],
];

function javaDosyalar(d) {
  const cikti = [];
  const yuru = (k) => {
    for (const e of readdirSync(k, { withFileTypes: true })) {
      const y = join(k, e.name);
      if (e.isDirectory()) yuru(y);
      else if (e.name.endsWith(".java")) cikti.push(y);
    }
  };
  if (statSync(d).isDirectory()) yuru(d);
  return cikti;
}

let uygulanan = 0;
for (const dosya of javaDosyalar(HEDEF)) {
  const ad = dosya.slice(HEDEF.length + 1);
  let metin = readFileSync(dosya, "utf8");
  const bas = metin;
  for (const [hedefDosya, ara, yeni] of YAMALAR) {
    if (hedefDosya && !ad.includes(hedefDosya.replace(/\//g, "\\"))) continue;
    if (metin.includes(ara)) {
      metin = metin.split(ara).join(yeni);
    }
  }
  if (metin !== bas) {
    writeFileSync(dosya, metin, "utf8");
    uygulanan++;
  }
}
console.log(`yama uygulandi: ${uygulanan} dosya`);