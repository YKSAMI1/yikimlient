# OneClient / OneLauncher İncelemesi ve YIKIM "Alev" Teması Planı

Bu dosya, OneClient 2.11.0'ın tasarım dilini ve performans yaklaşımını kendi kodundan
okuyup YIKIM'a uyarlamak için tutulan iç nottur. Amaç kopyalamak değil; aynı "sakin,
katmanlı, akıcı" hissi YIKIM'ın kendi kimliğiyle (kor, ateş, duman) yeniden kurmak.

İncelenen kaynaklar:

- `C:\Users\USER\Desktop\OneLauncher-inceleme` (OneLauncher monorepo, v2.11.0, Rust)
- `%LOCALAPPDATA%\OneClient\oneclient_app.exe` (kurulu istemci)
- `%APPDATA%\Polyfrost\OneClient` (kullanıcı verisi, ayarlar, cluster'lar)
- Kurulu `polyplus-2.0.11+26.3.jar`, `OneConfig-26.3-fabric-1.7.1.jar` (oyun içi arayüz
  varlıkları; Java tarafı kapalı kaynak, sadece asset'ler okunabildi)

---

## 1. Kısa özet

OneClient'ın launcher arayüzü web/Electron değil. Tamamı Rust + **Freya** (Skia tabanlı
immediate-mode UI) ile çiziliyor. 3B karakter önizlemesi `plusrenderer` ile aynı pencereye
gömülüyor. Bu yüzden tarayıcıda "aynı görünen" bir kopya yapmak yerine tasarım kurallarını
(katman, boşluk, hareket, kontrast, arka plan) alıp YIKIM'ın Tauri + web arayüzünde
uygulamak doğru yol.

Oyun içi arayüz ise ayrı bir dünya: `polyplus` jar'ının içinde `mainmenu` SVG ikon seti,
Outfit fontu ve lobi sahneleri var. Yani gördüğün menü/overlay Java tarafında, Freya ile
ilgisi yok. YIKIM modu zaten Java immediate-mode çiziyor; aynı yapıyı koruyup görsel dili
değiştirmek en verimlisi.

Ana karar (uygulandı): **tema değiştirilebilir ve iki seçenekli**. Eski `sade` düzeni
kaldırıldı; kalan iki görünüm `klasik` ve yeni `alev`. `alev`, düzeni değiştirmez —
aynı klasik iskeletin üstüne kor vurgusu ekler (seçili sekme/segmentin altında küçük
alev, açık anahtarlarda sıcak geçiş). Seçim `arayuz.tema` ayarına yazılır; `alev`
dışındaki her değer okurken `klasik`e taşınır. Launcher tarafında aynı mantık ana
sayfa + mod panelinde geçerli; ayarlar/keşfet sayfaları klasik kalır.

---

## 2. OneClient tasarım sistemi (koddan çıkarıldı)

### 2.1 Tema modeli

`packages/oneclient_app/src/theme/mod.rs`

| Kavram | Değer |
|---|---|
| Navbar yüksekliği | `80 px` |
| Ana sayfa padding | `48 px` |
| Varsayılan font | `Poppins` |
| Monospace font | `JetBrains Mono` |
| Piksel font | `Minecraft` (piksel temalarda ek olarak `pixel_font_size`) |
| Yerleşik tema sayısı | 4: `dark`, `light`, `minecraft-dark`, `minecraft-light` |
| Yarıçap ölçeği | Tema başına `radius_scale` (varsayılan `1.0`) |
| Tema değişimi | `colors::apply()` + revision state; yeniden başlatma yok |
| Özel tema | Kullanıcı JSON'u `themes/` klasörüne yazılır, canlı yenilenir |

`theme/colors.rs` içindeki `Palette` yalnızca 8 renk tutuyor:

```json
{
  "light": false,
  "page": "#11171C",
  "page_elevated": "#151C22",
  "card": "#1A2229",
  "component": "#1A2229",
  "border": "#FFFFFF1A",
  "text": "#D5DBFF",
  "text_secondary": "#757883",
  "accent": "#2B4BFF"
}
```

Geri kalan tüm tonlar bu 8 renkten türetiliyor. Bu, YIKIM için çok değerli bir ders:
**renk sayısını az tut, türetme kurallarını netleştir.**

Türetme kuralları (birebir uygulanabilir):

- `fg_primary_hover` = metin + %12 beyaz
- `fg_primary_pressed` = metin + %25 beyaz
- `fg_secondary_hover/pressed` = ikincil metin + %20 / %40 siyah
- `component_bg_hover` = bileşen + %4 beyaz
- `component_bg_pressed` = bileşen + %9 beyaz
- `component_bg_disabled` = bileşen ile sayfa arası %50 karışım
- `component_border_hover` = kenarlık alfası × 1.6
- `component_border_pressed` = kenarlık alfası × 2.2
- `brand_hover` = accent + %13 siyah
- `brand_pressed` = accent + %6 beyaz
- `ghost_overlay` alfa: `12 / 26 / 38` (normal / hover / pressed)
- Devre dışı opaklık: koyu temada `0.5`, açık temada `0.75`
- Metin kontrastı: `on_color()` ve `on_brand()` arka planın parlaklığına bakıp koyu/açık
  metin seçiyor; eşik `3.0` kontrast. Bu yüzden accent değişse de yazı okunur kalıyor.

### 2.2 Bileşen ölçüleri

`components/button.rs`

| Boyut | Padding | Yarıçap | Font |
|---|---|---|---|
| Small | 4 / 8 | 6 | 12 |
| Medium | 6 / 12 | 8 | 14 |
| Large | 8 / 32 | 10 | 18 |
| Icon | 6 (tümü) | 8 | 32×32 kutu |

Varyantlar: Primary (accent dolgu), Secondary (bileşen dolgusu + 1px kenarlık), Danger,
Ghost (şeffaf, hover'da çok hafif beyaz). Odak halkası her zaman accent.

### 2.3 Ana sayfa düzeni

`view/app/home/index.rs` + `components/active_cluster_panel.rs`

- Dikey akış, `padding: 48`, üst bölüm `flex: 1` ve dikey ortalı.
- Aktif cluster başlığı: **56 px bold**, satır yüksekliği `1.1`.
- Alt başlık: **16 px semibold**, ikincil renk.
- Başlat butonu: `16 px`, ağırlık `450`, padding `8 / 24`; yanında 32×32 ghost ayar butonu.
- Başlık bloğu cluster değişince `440 ms` cubic-out ile `48 px` sağdan kayarak geliyor,
  opaklık 0 → 1.
- Alt kısımda "son oynananlar" şeridi: yükseklik `208 px`.

`components/recents_row.rs`

- Kart aralığı `24 px`, kart genişliği `300–480 px` arası esnek.
- Kart yarıçapı `12 px`; normalde 1px, hover'da 1.6px, aktif/odakta 2px accent kenarlık.
- Kart başlığı **32 px semibold**, görselin altına doğru koyulaşan gradyanın üstünde.
- Giriş animasyonu: `460 ms`, kart başına `85 ms` gecikme, `48 px` aşağıdan yukarı,
  ease-out-cubic. Toplam süre kart sayısıyla sınırlanıyor (en fazla 6 slot).
- Hover'da görselin üstüne %20 siyah katman; ayrıca blur(24) spread(12) siyah gölge.
- Modpack kartlarında görsel `4 px` blur + %16 koyu tint ile arka plana çekiliyor, önde
  modpack ikonu duruyor.
- Uzun başlıklar hover'da marquee: 200 ms bekle, 60 px/s kaydır, 700 ms tut, geri dön.
  `animations_enabled` kapalıysa hiç çalışmıyor.

### 2.4 Navbar

`components/navbar/app_navbar.rs`

- Yükseklik `80 px`, yan padding `40 px`, absolute overlay katmanı.
- Logo 214×44 wordmark; pencere `< 1100 px` ise yazı kısım gizleniyor, sadece 32 px
  ikon kalıyor.
- Nav linkleri: yükseklik `36 px`, yarıçap `10 px`, aralık `36 px` (dar modda 12).
  Aktif link: ghost dolgu + 1px kenarlık + medium ağırlık. Diğerleri ikincil renk,
  hover'da birincil renk.
- Navbar girişi: `460 ms` cubic-out, `-80 px` yukarıdan aşağı.
- Ana sayfada navbar görselin üstünde olduğu için metin `on_art` / `on_art_secondary`
  kullanıyor; başka sayfalarda normal `fg_primary` / `fg_secondary`.

### 2.5 Arka plan, derinlik ve "premium" his

`layout/app_shell.rs`

- Ana sayfa arka planı: seçili cluster'ın kapağı veya paketlenmiş `CavesAndCliffs.jpg`
  (390 KB). Görsel `2560 px` kenara kadar indirilip önbellekleniyor.
- Görsel ekranı kaplayacak şekilde kırpılıyor, `1.10×` yakınlaştırılıyor ve fareyle
  **parallax** yapıyor: hedef koordinat, her `33 ms`'de %12 yaklaşarak yumuşuyor
  (`settle 0.002`), güç `0.01`. Yani tam 60 fps değil, 30 fps yumuşatma.
- Üstte vinyet: tek bir Skia shader. Merkez `(0.80, 0.45)`, sol ölçek `1.8`, sağ `4.5`,
  dikey `2.2`, `pow 1.3`, maksimum karartma `0.8`. Shader bir kez derleniyor.
- Sayfa geçişinde arka plan `520 ms` cubic-out ile 0 → 1 opaklık.
- İçerik ile arka plan arasında `appshell_overlay`: üstte 200 px yüksekliğinde
  şeffaftan sayfa rengine giden gradyan, altta tam opak sayfa katmanı. Bu, metnin
  görselin üstünde okunmasını sağlıyor.

Bu üçlü (kırpılmış görsel + vinyet + alttan karartma) "pahalı" görünen kısmın tamamı.
Blur yok, gerçek zamanlı ışık yok, sadece 1 shader + 2 gradyan.

### 2.6 Hareket dili

`motion.rs`, `components/overlay_popup.rs`, `splash_curtain.rs`, `recents_row.rs`

| Durum | Süre | Eğri | Not |
|---|---|---|---|
| Hover / basılı | Anlık (renk) | - | Konum animasyonu yok |
| Popup scrim | 180 ms | Out | Siyah, alfa 90/255 |
| Popup panel | 200 ms | Out | 8 px aşağıdan, opaklık 0 → 1 |
| Navbar girişi | 460 ms | Cubic out | -80 px |
| Sayfa içeriği | 440 ms | Cubic out | 48 px sağdan |
| Kart sırası | 460 + 85×n ms | Ease-out cubic | 48 px yukarıdan |
| Arka plan değişimi | 520 ms | Cubic out | Opaklık |
| Splash perdesi | 460 ms | Cubic out | 8 s güvenlik ağı |
| Skeleton nabzı | 800 ms | Sine in-out | 0.4 ↔ 0.9 opaklık |
| 3B karakter | 33 ms kare | - | Sadece görünürken |

Genel kural: **mikro etkileşimler renkle, geçişler opaklık + küçük kaydırmayla.** Sürekli
çalışan animasyon sadece arka plan parallax'ı, skeleton ve 3B model. Kullanıcı
`animations_enabled` kapatınca saat tamamen duruyor (`AnimationClockDriver`).

### 2.7 Erişilebilirlik ve durum yönetimi

- Her buton `a11y_role`, `a11y_alt`, `a11y_focusable` taşıyor; ikon butonlarda tooltip
  aynı zamanda erişilebilir ad oluyor.
- Escape davranışı: metin alanındaysa önce odaktan çık, sidebar/cluster içindeyse ana
  sayfaya dön, değilse geri git. Kısayollar overlay katmanına göre sıraya konuyor.
- Odak halkası her zaman accent; klavye ile gezilebilir.
- Tema önizlemesi (`preview`) canlı; kaydetmeden denemek mümkün.

### 2.8 Performans teknikleri (asıl ilham burada)

1. **Statik katmanı pişirme.** Arka plan parallax'ta görsel bir kez çözülüyor, `SkImage`
   olarak tutuluyor; her karede sadece kırpma dikdörtgeni değişiyor.
2. **Kare önbelleği.** 3B model, kamera/görünüm değişmediyse önceki `SkImage`'ı yeniden
   kullanıyor. `Frame` struct'ı eşitse çizim yok.
3. **Düşük frekanslı ortam animasyonu.** Parallax `33 ms`, model `33 ms`. UI 60 fps
   çizse bile sürekli iş 30 fps'e sınırlı.
4. **Çözünürlük merdiveni.** Kapak önizleme `512 px`, normal görsel `1200 px`, arka plan
   `2560 px`. Önce küçük varyant gösterilir, büyük gelince değişir.
5. **Ön ısıtma.** Ana sayfa görseli splash arkasında önceden çözülüyor; kullanıcı
   gecikme görmüyor.
6. **Layout'u yeniden hesaplamamak.** Pencere genişliği ölçülüp sadece değiştiğinde
   state güncelleniyor (`abs > 0.5`).
7. **Tema revizyonu.** Tema değişince tek bir `revision` state'i artıyor; tüm renkler
   yeniden çekiliyor, ağaç yeniden kurulmuyor.
8. **Shader bir kez.** Vinyet `RuntimeEffect` bir kez derleniyor, her karede yeniden
   yaratılmıyor.
9. **Görsel önbelleği anahtar bazlı.** `key = çözünürlük|url`; aynı görsel tekrar
   çözülmüyor.
10. **Animasyon ana saati.** Tek bir global saat var; kapalıyken hiçbir bileşen
    `request_redraw` çağırmıyor.

---

## 3. Oyun içi OneClient arayüzü (jar içinden)

Kurulu `polyplus` jar'ında:

- `assets/polyplus/mainmenu/` altında ~40 SVG ikon: `play-circle`, `settings-02`,
  `users-01`, `server.png`, `avatar.png`, `logo.svg`, `hypixel.png`, `minecraft-block.svg`,
  `microphone-01`, `headphones-02`, `bell-01`, `search-lg`, `chevron-*`, `x-close` vb.
- `assets/polyplus/mainmenu/font/Outfit-Bold.ttf` (oyun içi başlık fontu).
- `assets/polyplus/mainmenu/minecraft/` altında aynı ikonların piksel/Minecraft varyantı.
- `assets/polyplus/lobby/scenes/*.nbt.gz`: `cherry_grove`, `desert_village`, `lush_cave`,
  `snowy_village`. Lobi arka planı gerçek 3B sahne olarak yükleniyor.
- `assets/polyplus/lobby/entrance.animation.json`: 1.78 saniyelik el sallama animasyonu;
  `catmullrom` interpolasyon, gövde + iki kol + bacak kemikleri.
- `assets/polyplus/brand/oneclient.svg`, `font/badge.json`, emoji kısayolları.

`OneConfig` jar'ında `ui_blur` ve `fade_in_blur` post-effect shader'ları var. Yani oyun
içi panelde cam/blur hissi gerçek shader ile yapılıyor; Java'da panel başına blur
denemek YIKIM için doğru değil (performans).

Çıkarım: OneClient'ın oyun içi estetiği şu dört şeyden geliyor:

1. Outfit gibi geometrik, yuvarlak hatlı bir font.
2. Tek çizgi (stroke) ikon seti, 16-20 px.
3. Koyu, yarı saydam panel + ince açık kenarlık.
4. Gerçek 3B lobi sahnesi + yumuşak giriş animasyonu.

YIKIM modunda 3B sahne yerine mevcut önizleme/arka plan sistemi kalacak; font ve ikon
dili ise Pixelify Sans + mevcut glif üreticisi ile korunacak. Bu, YIKIM'ın kimliğini
kaybetmeden aynı "temiz panel" hissini verir.

---

## 4. Nelere dokunmayacağız / kopyalamayacağız

- OneClient'ın mavi accent'i (`#2B4BFF`), PolyGlass adı, logosu, ikon seti birebir
  alınmayacak.
- Freya'ya özgü `backdrop_blur(12)` gibi efektler Java modda taklit edilmeyecek;
  yarı saydam katman + kenarlık ile aynı derinlik hissi verilecek.
- Sürekli çalışan parçacık/alev simülasyonu varsayılan olarak kapalı olmayacak ama
  bütçesi sert olacak (aşağıda).
- Kozmetik mağazası, sepet, fiyat, arkadaş/sosyal sekmeleri YIKIM'a taşınmayacak.

---

## 5. YIKIM "Alev" teması

### 5.1 Renk tokenları

Amaç: siyah değil **isli/kömür** zemin, üstünde **kor turuncusu** ve **alev sarısı**.
Mavi-violet metin yerine sıcak krem metin.

| Token | Değer | Kullanım |
|---|---|---|
| `page` | `#0B0705` | Ana zemin (is) |
| `page_elevated` | `#140C08` | Yükseltilmiş yüzey |
| `card` | `#1B0F09` | Kart |
| `component` | `#22130B` | Buton/alan dolgusu |
| `border` | `#FFB0662E` | 1px sıcak kenarlık (alfa 46) |
| `text` | `#FFE9D6` | Krem metin |
| `text_secondary` | `#B08A72` | Kül/kahve ikincil |
| `accent` | `#FF5A1F` | Kor turuncusu |
| `accent2` | `#FFB627` | Alev sarısı |
| `ember` | `#FF3D00` | Vurgu/parçacık |
| `ash` | `#6B5A50` | Pasif |
| `ok` | `#4CC38A` | Başarı |
| `warn` | `#FFB627` | Uyarı |
| `bad` | `#FF4D4D` | Hata |

Türetmeler OneClient mantığıyla aynı: hover'da beyazla %8-12, pressed'te %18-25,
kenarlık alfası hover'da ×1.6, pressed'te ×2.2. Accent değişirse `on_accent` kontrast
eşiği (3.0) ile koyu/açık metin seçilecek.

Alev rengi (uygulandı): sabit turuncu yerine dünyanın `--accent` / `--accent-deep`
tokenlarından `color-mix` ile türetiliyor; kor ucu her zaman sıcak sarıya (`#ffd36b`)
doğru kayıyor. Böylece "standart" (mavi) ve özel vurgulu dünyalarda da alev uyumlu
kalıyor. Yerleşim: yalnız seçili öğenin altında küçük kor — başlık, aktif sekme,
seçili segment ve açık anahtar. Her yere sürülmüyor.

### 5.2 Launcher (web/Tauri) uygulama planı

- `:root[data-theme="alev"]` altında yukarıdaki CSS değişkenleri. Mevcut tema
  değişkenleri korunacak; varsayılan `klasik` kalacak.
- Ayarlar > Görünüm'de iki kart: `Klasik`, `Alev`. (Planlanan üçüncü seçenek
  `Sade` iptal edildi; düzeni zaten kaldırıldı.) Seçim anında uygulanır,
  `localStorage` + Tauri store'a yazılır.
- Ana sayfa: OneClient'ın katman sırası birebir alınacak (navbar → arka plan →
  vinyet/karartma → içerik → son oynananlar). Fark: arka plan görseli yerine
  **pişirilmiş kor/duman katmanı** + çok hafif hareket.
- Hareket: GSAP ile giriş `460 ms` cubic-out, kart staggers `60-85 ms`. Hover'da
  sadece renk/kenarlık. Sürekli çalışan tek şey arka plan kor parçacıkları; sekme
  gizlenince `document.hidden` ile durur.
- `prefers-reduced-motion` ve mevcut "animasyonları azalt" ayarı: kor parçacıkları
  tamamen kapanır, geçişler 120 ms'e iner.

Önerilen katman bütçesi (launcher):

1. Tam ekran statik gradyan (CSS, 0 maliyet).
2. Tek `<canvas>` kor parçacıkları: 24-40 parçacık, 30 fps, `requestAnimationFrame`
   içinde delta zamanlı, sekme gizliyken durur.
3. İçerik kartları: `backdrop-filter` yok; yarı saydam dolgu + 1px kenarlık + çok hafif
   iç gradyan.
4. Vinyet: tek CSS `radial-gradient`, shader yok.

### 5.3 Mod (Java) uygulama planı

Mevcut altyapı hazır: `YikimTheme`, `YikimBackdrop`, `YikimDraw`, `YikimWidgets`.
Yeni tema, bu API'lerin içinden seçilecek; çağrı yerleri değişmeyecek.

- `YikimConfig`'te `arayuz.tema = klasik | alev` (uygulandı). `YikimTemaEkrani`
  iki kart gösterir; seçim anında uygulanır, yeniden başlatma yok. Okuma sırasında
  `alev` dışındaki her değer (eski `sade` dahil) `klasik`e taşınır.
- `YikimTheme` renk paleti değişmedi: `alev` yalnızca çizim katmanında fark yaratır,
  böylece kullanıcının özel vurgu rengi bozulmaz.
- `YikimBackdrop`: değişmedi. Sürekli kor parçacığı **eklenmedi** — kare bütçesi
  korunuyor, alev yalnızca panel/menü açıkken çizilen birkaç dikdörtgen.
- Panel/buton/sekme (uygulandı): `YikimDraw.alevCizgi()` seçili sekme/segmentin
  altına ~10 düz dikdörtgenlik kor koyar, `YikimDraw.alevAnahtar()` açık anahtarı
  4 dilimlik sıcak geçişle doldurur. Gölge/blur/doku yok.
- Panel/buton/sekme: mevcut `YikimDraw.card/chip/button/tab` fonksiyonlarına
  `alev` dalları eklenecek. Gölge yerine 1px üst iç highlight + 1px sıcak kenarlık.
  Yuvarlak köşe aynı kalacak (mevcut `roundedFill`).
- Ana menü: OneClient'ın düzeninden ilhamla üç bölge: üstte ince marka şeridi,
  ortada büyük başlık + tek birincil buton, altta durum şeridi (FPS, sürüm, ipucu).
  Mevcut `YikimMainMenu` yapısı bozulmadan renk/kompozisyon değişecek.
- Performans sınırı: kare başına dolum sayısı mevcut `FRAME_BUDGET = 72` ve
  `OVERDRAW_LIMIT_PER_MILLE = 1100` değerlerinin altında kalacak. `YikimBackdrop`
  zaten `lastFrameFills()` ve `costLine()` ile ölçüm veriyor; alev teması sonrası
  bu değerler kontrol edilecek.

### 5.4 Kozmetik ve sosyal kapsam

- Kozmetik: yalnızca **pelerin** ve **elitra**. Mağaza, sepet, fiyat, paket,
  emote, outfit, pet, şapka, gözlük, kanat, aura vb. yok.
- Mevcut `YikimKozmetik` ekranındaki fazla kategoriler görünmeyecek; kalan iki
  kategori için mevcut 3B önizleme korunacak.
- Arkadaş/sosyal: kodda kalabilir ama arayüzde gizli/varsayılan kapalı. Presence
  ve sohbet altyapısı silinmeyecek; sadece giriş noktaları kaldırılacak.

### 5.5 Animasyon bütçesi (özet)

| Öğe | Varsayılan | Düşük donanım | Azaltılmış hareket |
|---|---|---|---|
| Kor parçacıkları | 24 @ 30 fps | 12 @ 20 fps | kapalı |
| Arka plan kayması | 30 fps, %12 yumuşatma | statik | statik |
| Kart girişi | 460 + 85×n ms | 300 + 60×n | 120 ms fade |
| Panel açılışı | 260 ms | 200 ms | 100 ms |
| Hover | renk, 120 ms | renk, 90 ms | renk, 0 ms |
| 3B önizleme | sadece görünürken 30 fps | 20 fps | 12 fps veya durur |

Hiçbir durumda tam ekran blur, sürekli `box-shadow` animasyonu veya kare başına
yeni nesne üretimi olmayacak.

---

## 6. Uygulama sırası (öneri)

1. **Launcher tema altyapısı**: `data-theme` değişkenleri + Ayarlar > Görünüm geçişi.
   Önce sadece renkler; animasyon sonra.
2. **Launcher ana sayfa**: katman sırası, tipografi, kart ölçüleri, kor canvas.
3. **Mod tema seçimi**: `arayuz.tema` üçüncü seçenek, `YikimTemaEkrani` üç kart.
4. **Mod renk geçişi**: `YikimTheme` + `YikimDraw` + `YikimWidgets` alev dalları.
5. **Mod arka plan**: `buildEmber()` + parçacık bütçesi + `lastFrameFills` kontrolü.
6. **Ana menü ve panel kompozisyonu**: OneClient düzeninden ilham, YIKIM kimliği.
7. **Kozmetik sadeleştirme**: yalnız pelerin + elitra; mağaza/sosyal gizleme.
8. **Ölçüm**: launcher'da FPS/uzun görev, modda kare dolum sayısı ve bellek.

Her adımda mevcut `klasik` tema çalışmaya devam edecek; geri dönüş tek ayarla olacak.

---

## 7. Riskler

- **Launcher'da iki tema bakım yükü.** Renk tokenları tek yerde tutulmazsa iki tema
  birbirinden kopar. Çözüm: tüm renkler `:root` değişkeni; bileşenlerde sabit renk yok.
- **Modda çizim maliyeti.** Java'da blur/gölge pahalı. Çözüm: düz katman + kenarlık;
  parçacık sayısı sert sınır.
- **Font kimliği.** OneClient'ın Outfit fontunu almak YIKIM'ı taklit gibi gösterir.
  Çözüm: Pixelify Sans + mevcut glif üreticisi; sadece harf aralığı/ağırlık ayarları
  OneClient ritmine yaklaştırılır.
- **Site/launcher bağlantısı.** Tema tamamen yerel olmalı; hiçbir renk/animasyon
  uzak sunucudan gelmemeli. Aksi halde ISS engellemelerinde arayüz bozulur.
- **Animasyon bağımlılığı.** `prefers-reduced-motion` ve modun kendi ayarı olmadan
  parçacık çalıştırmak düşük donanımda rahatsız edici olur.

---

## 8. Kararlar (kapatıldı)

1. Alev yoğunluğu: `kor` seçildi — yalnız seçili öğe altında küçük parlama; `yangın`
   seviyesi reddedildi (düşük donanımda ve okunabilirlikte zarar).
2. Palet: turuncu-kor (`#FF5A1F` → `#FFB627` yönü), dünyanın vurgusundan türetilmiş.
3. Eski `sade` teması kaldırıldı; yerini `alev` aldı.
4. Launcher'da alev yalnızca ana sayfada; ayarlar/keşfet/kurulum sayfaları klasik.
5. Varsayılan görünüm `klasik`; `alev` kullanıcı seçimiyle açılır.
6. Kozmetik: yalnız pelerin + elitra, mağaza yok. Arkadaşlık/sosyal: kod kalır,
   giriş noktaları gizli.
