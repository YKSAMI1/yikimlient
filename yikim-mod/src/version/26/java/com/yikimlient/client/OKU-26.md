# MC 26.x (Vulkan nesli) uyarlama klasörü

Bu klasör 1.21.x adaptörlerine (`legacy/legacy2/hybrid/mid/newer/modern`)
benzer şekilde **yalnızca 26.x'te değişen API'lar** için ayrılır.

Derleme sırasında `derle-26.ps1` bu klasörü `src/official` kopyasına
ekler (`sourceSets` yerine doğrudan javac sınıf yoluna).

## Buraya yazılacaklar (26.1 API farkları)

| Konu | 1.21.x (eski) | 26.x (yeni) | Not |
|---|---|---|---|
| GUI çizim | `GuiGraphics` | `GuiGraphicsExtractor` | ekran/gui artık "render state" kaydı yapıyor; `fill`, `drawString`, `blit` imzaları farklı — `YikimAdapter` yeniden yazılacak |
| HUD olayı | `HudRenderCallback` (lifecycle) | `rendering/v1/hud/HudElement` + `HudElementRegistry` | HUD elemanı kayıt şeklinde |
| Glif | `BakedGlyph.bake(UnbagedGlyph)` | yeni `bake(...)` bağlamı | `BeyazGlif` burada tanımlanacak |
| `GlyphProvider` iç sınıfı | `class_9241` | `Conditional` | otomatik eşlelendi |
| `CustomPacketPayload` tipi | `class_9154` | `TypeAndCodec` | otomatik eşlendi |

## Ek notlar

* `YikimDraw`, `YikimKarakter`, `YikimKozmetik` gibi paylaşılan sınıflar
  `GuiGraphics` → `GuiGraphicsExtractor` ad değişimini geçirdi; imza
  farkları bu klasördeki uyarlama + paylaşılan ağaçta küçük düzeltmelerle
  çözülecek.
* Kozmetik dokuları (pelerin/elitra/deri) aynı `Identifier` + texture
  kayıt yoluyla çalışır; 26.1'de `NativeImage` (com.mojang.blaze3d.platform)
  yerinde.