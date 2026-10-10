# YIKIMLient — Tasarım Sistemi (DESIGN.md)

> 2026-10-05'te "Devre Panosu" dünyasının kurulmuş halinden yazıldı (impeccable documenter akışı).
> Ürün gerçeği: [PRODUCT.md](PRODUCT.md). Yön sözleşmesi: [launcher-shell brief](.impeccable/surface-briefs/launcher-shell.md).

## Dünya: Devre Panosu

Launcher bir **devre panosu** gibi davranır: her kurulum bir hat, her ölçüm canlı bir gösterge,
OYNA ana şalter. Kategorinin varsayılan kart-grid dashboard'u reddedildi; cetvelle bölünmüş
**hat defteri** gelir. Turuncu süs değil, elektrik işaretidir: lamba, şalter, aktif cetvel.

Ürünün kontrast noktası: ~3MB kurulum + gömülü YIKIM çekirdeği. Tasarımın kontrast noktası:
operatör disiplini — panoda her şey bir bakışta okunur, hiçbir şey zıplamaz, her sayı canlıdır.

## Dört dünya (Ayarlar → Görsel Dünya)

Aynı düzen ve bileşen seti; dünya yalnız token'ları ve tipografi karakterini değiştirir.
`data-world` attribute ile kökte yaşar; eski config değerleri eşlenir (orange→pano,
dark→standart, neon→anons, light→pano).

| Dünya | id | Karakter | Radius | Accent |
|---|---|---|---|---|
| Devre Panosu | `pano` | hatlar, lambalar, şalter (varsayılan) | 6px | `#ff7a18` |
| Söküm Sahası | `sokum` | stencil caps, uppercase başlıklar, keskin | 2px | `#ff8a1e`, `--on-accent` koyu mürekkep |
| Anons Panosu | `anons` | flap siyahı, sıcak beyaz, amber | 6px | `#ffb020` |
| Kategori Standardı | `standart` | Arc/Linear cilası, yumuşak köşe | 12px | `#ff7a18` |

Özel vurgu rengi (`custom`) pano dünyasında yaşar; `--custom-accent` + `data-world-custom="1"`.

## Token sistemi ([theme.css](ui/src/theme.css))

- **Yüzey merdiveni**: `--bg0` (içerik zemini) → `--bg1` (titlebar/rail) → `--bg2` (panel) →
  `--bg3` (hover) → `--bg4` (dolgu kenar). Hairline ayrı bir çift: `--hairline` /
  `--hairline-strong` (beyazın ~%9 / %16'sı; gri değil, yüzeyin kırığı).
- **Metin**: `--text` kırık beyaz, `--text-dim`, `--text-faint`. Vurgu metni asla accent rengiyle
  büyük blokta yazılmaz; accent yalnız lamba/şalter/cetvelde.
- **Durum**: `--success` `#3ecf8e`, `--danger` `#ff5c5c`, `--warn` `#ffb020`, `--info`.
- **Yumuşatma**: `--ease` cubic-bezier(0.22,0.8,0.28,1); tüm geçişler 0.15–0.34s, tek eksen.

## İmza parçaları

1. **Pilot lambası** (`.lamp`): durum rengi + konum; `warn` durumunda nabız
   (lampPulse, box-shadow halkası). Kırmızı = hata, amber = meşgul, yeşil = hazır, sönük = boş.
2. **Kaskad sayaç** ([motion.ts](ui/src/motion.ts) `cascadeText`): canlı değerler hücresinde
   iki katmanla yukarı kayar; satır asla zıplamaz. `prefers-reduced-motion`'da anında yazar.
3. **Hairline cetvel**: sayfalar kart yığını değil, `--hairline` ile bölünmüş satırlar
   (`.ledger`). Hover'da yüzey `--bg3`'e kalkar, kenar asla turuncu olmaz.
4. **OYNA şalteri** (`.play-ring`): tek büyük dolgu eylem; basışta GSAP `switchPress` geri
   bildirimi. İkincil eylemler hep ghost.

## Hareket ([motion.ts](ui/src/motion.ts), GSAP)

Tek orkestra, üç sahne: sayfa girişi (`enterStage` — üst düzey 8 çocuk, 0.34s, stagger 0.045),
hat satırı girişi (`enterRows` — soldan 8px, stagger 0.03), şalter basışı (`switchPress`).
CSS transition mikro-etkileşimleri taşır; ilerleme barları `scaleX` (transform-origin left),
layout animasyonu yok. `prefers-reduced-motion: reduce` → GSAP 0 süre, CSS 0.001s.

## Tipografi

Sistem stack ("Segoe UI Variable"): Windows'a aitlik bilinçli tercih. Rakamlar her ölçümde
`tabular-nums`. Başlık ağırlıkları 650–750; dünya başlıkları character'i tracking/text-transform
ile kazanır (sokum: uppercase + geniş tracking). Emoji ikon değildir; ikonlar [icons.ts](ui/src/icons.ts)
setinden 1.5px stroke, yuvarlak uç.

## Erişilebilirlik

`--accent` üstünde `--on-accent` kontrastı dünyaya göre çözülür (sokum: koyu mürekkep).
`:focus-visible` 2px turuncu outline. Lambalar yalnız renk değil, konum + metin etiketiyle
da taşınır (renk-körü okuma). Hareket tamamı reduced-motion'a saygılı.

## Yasaklar (bu projede)

Kart yığını sayfa yapısı olarak; border-left renkli şerit; gradient metin; glass/blur süsü;
sıfır-offset renk halo gölge; emoji ikon; kicker/eyebrow etiketi; sistemi süsleyen boş istatistik
(ekrandaki her sayı state'ten gelir).
