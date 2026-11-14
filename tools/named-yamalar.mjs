// RESMÎ KAYNAK YAMALARI — 26.x API farkları
//
// named-src.mjs çevirisinden SONRA çalışır. Eşleme tablolarının çözemediği
// (iç sınıf, yeni API, adı değişen üye) yerleri düzeltir. Kaynak ağacı
// (src/main/java) DEĞİŞMEZ; yalnızca üretilen src/official düzeltilir.
//
// Her yama jar'dan doğrulanmıştır (mc-26.1-official.jar / fabric-api 26.1).
//
// KULLANIM: node tools/named-yamalar.mjs

import { readdirSync, readFileSync, writeFileSync, statSync } from "node:fs";
import { join } from "node:path";

const KOK = process.cwd();
const HEDEF = join(KOK, "yikim-mod", "src", "official");

// 26.2+ sürümlerinde API ikinci kez taşındı (ekran yönetimi `client.gui`'ye,
// EntityType sabitleri `EntityTypes`'a, TextureFormat -> GpuFormat).
const SURUM = (() => {
  const i = process.argv.indexOf("--surum");
  return i >= 0 ? process.argv[i + 1] : "26.1";
})();
const YENI_GUI = !SURUM.startsWith("26.1");
// 26.3: grafik katmanı "RenderPearl"e taşındı (blaze3d.textures -> renderpearl.api),
// pencere sistemi GLFW'den SDL'ye geçti.
const YENI_GPU = SURUM === "26.3" || SURUM.startsWith("26.3.");

// ---------------------------------------------------------------------------
// 1) DÜZ YAMA: [ara, değiştir] — sıra ÖNEMLİ (özel → genel)
// ---------------------------------------------------------------------------
const YAMALAR = [
  // ---- iç sınıflar (1.21.11 resmî adı eşlemede yok, 26.1 jar'ında doğrulandı)
  ["CustomPacketPayload.class_9154", "CustomPacketPayload.Type"],
  ["ClientAsset.class_10726", "ClientAsset.ResourceTexture"],
  ["FontDescription.class_11721", "FontDescription.Resource"],
  ["UnbakedGlyph.class_11760", "UnbakedGlyph.Stitcher"],
  ["GlyphProvider.class_9241", "GlyphProvider.Conditional"],
  ["UnbakedGlyph.Static", "UnbakedGlyph.Stitcher"],
  ["KeyMapping.class_11900", "KeyMapping.Category"],
  ["class_11900", "Category"],

  // ---- çeviricinin yanlış birleştirdiği paket yolları
  ["net.minecraft.com.mojang.blaze3d", "com.mojang.blaze3d"],
  ["net.minecraft.net.minecraft.network", "net.minecraft.network"],

  // ---- GUI: GuiGraphics 26.1'de GuiGraphicsExtractor oldu (Vulkan "render
  // state" kaydı). Metot adları değişti; alıcıya duyarlı kısım 2. adımda.
  ["GuiGraphics", "GuiGraphicsExtractor"],

  // ---- 26.1'de YENİ/DEĞİŞEN API'lar
  ["Identifier.method_43902(", "Identifier.fromNamespaceAndPath("],
  ["Identifier.method_60655(", "Identifier.fromNamespaceAndPath("],
  ["Identifier.getServerData(", "Identifier.fromNamespaceAndPath("],
  ["StreamCodec.method_56431(", "StreamCodec.unit("],
  ["StreamCodec.join(", "StreamCodec.unit("],
  ["GlyphInfo.empty(", "GlyphInfo.simple("],
  ["KeyMapping.Category.create(", "KeyMapping.Category.register("],
  ["GlyphRenderTypes.of(", "GlyphRenderTypes.createForColorTexture("],
  ["PayloadTypeRegistry.playC2S()", "PayloadTypeRegistry.serverboundPlay()"],
  ["PayloadTypeRegistry.playS2C()", "PayloadTypeRegistry.clientboundPlay()"],

  // ---- tuş olayı kayıtları: Fabric modülü adı değişti (keybinding -> keymapping)
  ["net.fabricmc.fabric.api.client.keybinding.v1", "net.fabricmc.fabric.api.client.keymapping.v1"],
  ["KeyBindingHelper", "KeyMappingHelper"],
  ["registerKeyBinding(", "registerKeyMapping("],

  // ---- kayıt (record) erişimcileri: intermediary `comp_XXXX` adları
  ["public int getKeycode()", "public int input()"],
  ["public int comp_4797()", "public int modifiers()"],
  ["comp_4798()", "x()"],
  ["comp_4799()", "y()"],
  ["comp_4800()", "buttonInfo()"],
  ["comp_4797()", "button()"],
  ["comp_4795()", "key()"],
  ["comp_4793()", "codepoint()"],
  ["comp_4801()", "modifiers()"],

  // ---- bileşen/metin (26.1 adları)
  ["method_10862", "withStyle"],
  ["method_10852", "append"],
  ["method_43470", "literal"],
  ["method_27704", "withFont"],
  ["method_25396", "children"],
  ["method_10788", "writeUtf"],
  ["CustomPacketPayload> getId()", "CustomPacketPayload> type()"],

  // ---- oyuncu listesi / doku kaydı / ekran geçişi
  ["getPlayerListEntry(", "getPlayerInfo("],
  ["registerAndLoad(", "register("],
  ["onResourceLoadFinished(", "setScreen("],
  ["getUuid()", "getUUID()"],
  ["renderDefaultLabel(", "onPress("],

  // ---- tuş olayı: karakter girişi ayrı olay oldu (CharacterEvent -> charTyped)
  ["public boolean keyPressed(net.minecraft.client.input.CharacterEvent",
   "public boolean charTyped(net.minecraft.client.input.CharacterEvent"],
  ["super.keyPressed(input)", "super.charTyped(input)"],
  ["InputConstants.class_307", "InputConstants.Type"],

  // ---- glif hattı: 26.x adları
  ["public IntSet getProvidedGlyphs()", "public IntSet getSupportedGlyphs()"],
  ["public IntSet getGlyph()", "public IntSet getSupportedGlyphs()"],
  ["public com.mojang.blaze3d.font.GlyphInfo getMetrics()",
   "public com.mojang.blaze3d.font.GlyphInfo info()"],

  // ---- 26.1 imza değişiklikleri (jar'dan doğrulandı)
  // OptionsScreen artık (parent, options, boolean) istiyor
  ["new net.minecraft.client.gui.screens.options.OptionsScreen(parent, options)",
   "new net.minecraft.client.gui.screens.options.OptionsScreen(parent, options, false)"],
  // GUI varlık çizimi: addEntity -> entity (resim hattı adı değişti)
  [".blit(s, olcek,", ".entity(s, olcek,"],
  // blitSprite 26.1'de tümüyle int: (u,v) float değil
  ["(float)sx, (float)sy, sw, sh, texW, texH", "sx, sy, sw, sh, texW, texH"],
  ["(float)(u * texW / 64), (float)(v * texH / 64)", "(u * texW / 64), (v * texH / 64)"],
  // Font.width yanlış eşlendi -> write; düzelt
  ["font.write(", "font.width("],

  // ---- HUD: HudRenderCallback (lifecycle) 26.x'te kaldırıldı; yerini
  // rendering/v1/hud/HudElement + HudElementRegistry aldı.
  ["import net.fabricmc.fabric.api.client.rendering.v1.HudRenderCallback;",
   "import net.fabricmc.fabric.api.client.rendering.v1.hud.HudElementRegistry;"],
  ["HudRenderCallback.EVENT.register(YikimHud::render);",
   'HudElementRegistry.addLast(net.minecraft.resources.Identifier.fromNamespaceAndPath("yikimlient", "hud"), YikimHud::render);'],
];

// ---------------------------------------------------------------------------
// 1b) 26.2+ EK YAMALAR — 26.1'de çalışan kodun 26.2/26.3 karşılıkları.
// ---------------------------------------------------------------------------
const YAMALAR_262 = [
  // ekran yönetimi Minecraft'tan Gui'ye taşındı
  ["Minecraft.getInstance().setScreen(", "Minecraft.getInstance().gui.setScreen("],
  ["client.setScreen(", "client.gui.setScreen("],
  ["istemci.setScreen(", "istemci.gui.setScreen("],
  ["client.screen", "client.gui.screen()"],
  ["istemci.screen", "istemci.gui.screen()"],
  ["mc.screen", "mc.gui.screen()"],
  // F1 (HUD gizle) bayrağı: Options.hideGui -> Gui.hud.isHidden()
  ["client.options.hideGui", "client.gui.hud.isHidden()"],
  ["istemci.options.hideGui", "istemci.gui.hud.isHidden()"],
  // doku biçimi: com.mojang.blaze3d.textures.TextureFormat -> GpuFormat
  ["import com.mojang.blaze3d.textures.TextureFormat;", "import com.mojang.blaze3d.GpuFormat;"],
  ["TextureFormat.RGBA8", "GpuFormat.RGBA8_UNORM"],
  // varlık türü sabitleri EntityTypes'a taşındı
  ["net.minecraft.world.entity.EntityType.BLAZE", "net.minecraft.world.entity.EntityTypes.BLAZE"],
  ["EntityType.BLAZE", "EntityTypes.BLAZE"],
];

// ---------------------------------------------------------------------------
// 1c) 26.3 EK YAMALAR — RenderPearl grafik katmanı + SDL pencere sistemi.
// ---------------------------------------------------------------------------
const YAMALAR_263 = [
  // GPU soyutlaması blaze3d'den çıktı (paket adları değişti, sınıf adları aynı)
  ["com.mojang.blaze3d.textures.GpuTextureView", "com.mojang.renderpearl.api.textures.GpuTextureView"],
  ["com.mojang.blaze3d.textures.GpuTexture", "com.mojang.renderpearl.api.textures.GpuTexture"],
  ["com.mojang.blaze3d.systems.GpuDevice", "com.mojang.renderpearl.api.device.GpuDevice"],
  ["com.mojang.blaze3d.GpuFormat", "com.mojang.renderpearl.api.GpuFormat"],
  // InputConstants.Type: KEYSYM -> KEYBOARD (26.3'te yeniden adlandırıldı)
  ["InputConstants.Type.KEYSYM", "InputConstants.Type.KEYBOARD"],
  // OptionsScreen 26.3'te yeniden 2 argümanlı
  ["new net.minecraft.client.gui.screens.options.OptionsScreen(parent, options, false)",
   "new net.minecraft.client.gui.screens.options.OptionsScreen(parent, options)"],
  // GLFW yok (lwjgl-sdl): sol tuş durumu Minecraft'ın fare işleyicisinden okunur
  ["boolean bl = left = handle != 0L && GLFW.glfwGetMouseButton((long)handle, (int)0) == 1;",
   "boolean bl = left = net.minecraft.client.Minecraft.getInstance().mouseHandler.isLeftPressed();"],
  ["import org.lwjgl.glfw.GLFW;", ""],
];

// ---------------------------------------------------------------------------
// 2) ALICIYA DUYARLI YAMA: GuiGraphicsExtractor değişkenleri üzerinde çağrılan
//    metotların 26.1 adları. (Global arama yapılmaz: aynı ad başka sınıflarda
//    da geçebilir.)
// ---------------------------------------------------------------------------
const GRAFIK_METOT = {
  fill: "fill",
  drawString: "text",            // metin çizimi
  drawText: "text",              // (yanlış eşlenmiş ara ad)
  drawCenteredString: "centeredText",
  drawTexture: "blit",           // doku çizimi
  drawTexturedQuad: "blit",      // UV'li quad
  addEntity: "entity",           // GUI varlık (oyuncu önizlemesi)
  enableScissor: "enableScissor",
  disableScissor: "disableScissor",
};

/** `graphics.fill(font, …)` = metin çizimi (fill hiçbir zaman Font almaz). */
const IMZA_YAMALARI = [
  [/\.fill\(\s*font\s*,/g, ".text(font,"],
  [/\.fill\(\s*this\.font\s*,/g, ".text(this.font,"],
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

/** GuiGraphicsExtractor tipindeki değişken/alan adlarını bulur. */
function grafikAlicilar(metin) {
  const adlar = new Set();
  for (const m of metin.matchAll(/GuiGraphicsExtractor\s+([a-zA-Z_$][\w$]*)\s*[,)=;]/g)) adlar.add(m[1]);
  return adlar;
}

let degisenDosya = 0;
let grafikYama = 0;
for (const dosya of javaDosyalar(HEDEF)) {
  const bas = readFileSync(dosya, "utf8");
  let metin = bas;

  for (const [ara, yeni] of YAMALAR) {
    if (metin.includes(ara)) metin = metin.split(ara).join(yeni);
  }
  if (YENI_GUI) {
    for (const [ara, yeni] of YAMALAR_262) {
      if (metin.includes(ara)) metin = metin.split(ara).join(yeni);
    }
  }
  if (YENI_GPU) {
    for (const [ara, yeni] of YAMALAR_263) {
      if (metin.includes(ara)) metin = metin.split(ara).join(yeni);
    }
  }

  for (const [re, yeni] of IMZA_YAMALARI) metin = metin.replace(re, yeni);

  // Ekran çizimi: 26.1'de Renderable.render -> Renderable.extractRenderState.
  // Yalnızca Screen alt sınıflarında geçerli (widget'lar extractWidgetRenderState).
  if (/extends\s+net\.minecraft\.client\.gui\.screens\.Screen\b/.test(metin)) {
    metin = metin.replace(
      /public void render\(net\.minecraft\.client\.gui\.GuiGraphicsExtractor/g,
      "public void extractRenderState(net.minecraft.client.gui.GuiGraphicsExtractor"
    );
  }

  const alicilar = grafikAlicilar(metin);
  if (alicilar.size) {
    for (const ad of alicilar) {
      const kacis = ad.replace(/\$/g, "\\$");
      for (const [eski, yeni] of Object.entries(GRAFIK_METOT)) {
        if (eski === yeni) continue;
        const re = new RegExp(`\\b${kacis}\\s*\\.\\s*${eski}\\s*\\(`, "g");
        metin = metin.replace(re, `${ad}.${yeni}(`);
      }
    }
  }

  if (metin !== bas) {
    writeFileSync(dosya, metin, "utf8");
    degisenDosya++;
    grafikYama += alicilar.size;
  }
}
console.log(`yama uygulandi: ${degisenDosya} dosya (grafik alicisi: ${grafikYama}, surum: ${SURUM})`);
