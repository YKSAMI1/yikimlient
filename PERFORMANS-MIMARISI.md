# YIKIM Performans Mimarisi — "Dünyanın En Optimize Client'ı" Planı

> Sürüm: 1 · Tarih: 2026-10-11 · Bu belge performans çalışmamızın tek sözleşmesidir.
> Altın kural: **ölçmeden iddia yok.** (Şartname §2.3 — bu kural pazarlıksızdır.)

## 0. Hedef (rakamlarla)

| Hedef | Değer | Nasıl kanıtlanır |
|---|---|---|
| Güçlü PC (1080p, rd6) | ortalama **600+ FPS**, 1% low **≥ 300** | PresentMon + YIKIM A/B ölçümü |
| Orta PC | vanilla+Sodium'ın **%110+**'ı | A/B karşılaştırma |
| Eski PC (entegre grafik, 8GB) | oynanabilir **≥ 60 FPS**, hedef 80+ | aynı protokol |
| Launcher boşta RAM | < 120 MB (WebView2 dahil) | Görev yöneticisi |
| Oyun içi YIKIM mod maliyeti | < **%1** kare süresi (HUD dahil) | `YikimUiMetrics` (zaten ölçülüyor) |

"Binlerce FPS" ancak rd2-4, shader'sız, güçlü CPU'da görünür — vaat değil, ölçüm sonucu olarak gelecek.

## 1. Dört katmanlı mimari

```
KATMAN 3  yikim-optimize (AYRI MOD, v2 fazı)   ← mixin: derin render/tick yamaları
KATMAN 2  yikimlient (BİZİM MOD)              ← bekçi, profiller, HUD, A/B ölçüm
KATMAN 1  ekosistem modları (best-of-breed)   ← her bileşen DÜNYADA EN İYİSİNDEN
KATMAN 0  JVM + options.txt (LAUNCHER)        ← doğru Java, doğru bayraklar, doğru ayarlar
```

Prensip: **her katman kendi işini yapar; hiçbir katman diğerinin işini tekrar etmez.**
Ekosistemde en iyi varsa onu alırız (tekerleği yeniden icat etmeyiz — çakışma = FPS kaybı).
Ekosistemde olmayan şeyi BİZ yazarız.

## 2. Katman 1 — Ekosistem: her bileşen dünyada en iyisi

| Bileşen | Mod | Neden en iyi |
|---|---|---|
| Render motoru | **Sodium** | Chunk mesh + batch: 2-5x FPS. Alternatifi yok. |
| Oyun mantığı | **Lithium** | Tick/fizik/AI matematiği — çökmeler minimal. |
| Bellek | **FerriteCore** | Model/chunk RAM sıkıştırma. |
| Ağ | **Krypton** | Paket yolu, sunucu TPS'ye de yarar. |
| Açılış | **ModernFix** | Boot süresi -%40..60. |
| Varlık eleme | **EntityCulling** | Ekran dışı entity render atlar. |
| Anlık çizim | **ImmediatelyFast** | HUD/GUI batch. |
| Dünya üretim | **Noisium + Particle Core** | Chunk/particle üretim hızlanır. |
| Boşta RAM/CPU | **Dynamic FPS** | Odak dışı kare düşürür. |
| Çıkış | **FastQuit** | Dünya kaydını bekletmeden kapanır. |

Not: C2ME bilinçli olarak çıkarıldı (kalite/kararlılık gözetimi). Eksik görürsen ölçümle gerekçelendir, değilse koyma.

## 3. Katman 0 — Launcher: ayarlar asla sürüklenemez

- **options.txt profili** her açılışta zorlanır: TR dil, sınırsız FPS, VSync kapalı, GUI 2, tüm sarsıntı efektleri kapalı.
- **JVM preset'leri**: Dengeli / Yüksek FPS / **Ultra FPS (Eski PC — YENİ)** / Düşük RAM / Düşük Gecikme / Agresif.
- **YIKIMDARA** sunucusu + mod paketi hazır kurulum (bizim liste, tek tık).

## 4. Katman 2 — YIKIM mod v1.5.0 (bu sürümde eklenenler)

### 4.1 Performans Bekçisi (`YikimGuard` — YENİ)
Şartname §3.2.5: "Ayarlar sürüklenir; bekçi şart."
- Her 20 saniyede bir, aktif profilin kritik değerlerini (maxFps, vsync, render/sim mesafesi, entity gölgesi) kontrol eder.
- Değer "sürüklenmişse" (başka bir mod/komut elle değiştirmişse) sessizce geri alır ve bir kez bildirir.
- **Kullanıcı iradesi kutsaldır:** vanilla Ayarlar/Video Ayarları ekranı açıkken VE kapatıldıktan sonra 60 saniye boyunca bekçi hiçbir şeye dokunmaz. Elle değiştirilen ayar bu pencerede serbesttir.
- Her şey try/catch içinde: bekçi asla oyunu düşürmez.

### 4.2 Düşük FPS Danışmanı (YENİ)
- Oyun içinde FPS < 60 sürekli 10 saniye → bir kez (oturum başına) öneri: "Performans profilini dene".
- Ölçüm `YikimMetrics.fps()`'ten (F3'ün kendi sayacı) — kendi sayacımız değil, oyunun gerçeği.

### 4.3 Profiller (mevcut + korunmuş)
Performans (rd6) / Dengeli / Kalite / PvP (rd5, sıfır efekt). Launcher `profile-choice.json`'ı okuyup her açılışta yazar → seçim kalıcı.

### 4.4 Sıfır maliyet disiplini (zaten):
- HUD öğe başına tek metin çizimi; her frame'de yeni nesne yok.
- Oyun sırasında **sıfır dosya I/O** (istatistik kapanışta yazılır).
- `YikimUiMetrics` HUD/panel maliyetini nanosaniye ölçer — iddia değil, log'la kanıt.

## 5. Katman 3 — `yikim-optimize` (AYRI MOD, v2.0 — yol haritası)

Neden ayrı mod? — Risk izolasyonu: her yama tek anahtarla kapatılabilir; yikimlient'in temel akışı (panel/köprü) asla yamalardan etkilenmez; isteyen yalnız temel modu kurar.

| # | Yama (mixin) | Hedef | Ölçüm hedefi |
|---|---|---|---|
| 1 | **Font atlası batch** — her metin çizimi ayrı draw call alır | draw call -%80 (UI ağır sahneler) | UI yoğun sunucuda +%10-20 |
| 2 | **Entity render önişleme** — görünür olmayan model parçalarını listeleme dışı bırak | entity maliyeti -%30 | kalabalık spawn'da +%15 |
| 3 | **Particle instancing** — aynı doku parçacıkları tek batch | particle -%50 | efekt fırtınasında +%10 |
| 4 | **Chunk mesh yğın paylaşımı** — mesh buffer reuse, GC baskısı azaltır | 1% low +20-40 | şehir/uçuş sahnesi |
| 5 | **Fog/ambient occlusion eleme** (profilin "ultra" modunda) | fragment -%5-10 | orman/mağara |

Her yamanın kabul şartı: (a) ölçülmüş kazanç, (b) tek anahtarla geri alma, (c) 11 sürümde derlenme, (d) vanilla sunucu kuralları bozulmamış.

## 6. Ölçüm protokolü (pazarlıksız)

1. PresentMon (kare süreleri) + oyunun F3 sayacı; YIKIM A/B aracı (var) panelde.
2. Aynı sahne, çözünürlük, sunucu; ≥120 sn, ≥2 koşu; ilk 30-60 sn ölçüme girmez.
3. Karar 30 sn pencerelerin ortalamasıyla; salınım bandı ±%30 içindeki fark kazanç sayılmaz.
4. Her değişiklik tek değişken; sonuç tablosu `olcumler/` klasörüne yazılır.

## 7. Telefon (Android) stratejisi

- **Launcher:** Android'de ayrı native kabuk (Kotlin) veya Tauri mobile — karar ölçümle; Rust çekirdeği (indirme/kurulum/profil) **hiç değişmez**, arayüz yeniden çizilir.
- **Mod:** Fabric Android portları (PojavLauncher hattı) x86→ARM; bizim kod JVM olduğu için **aynı jar** hedef GL/GLES farklarına karşı mixin katmanında derleyici bayraklarıyla uyumlanır.
- **Performans:** telefon = enerji/ısınma yönetimi → "Pil dostu" profili (60 FPS sınır, Dynamic FPS agresif) eklenir.
- Önce Android'de ÇALIŞMA, sonra ölçüm; vaat sonda.

## 8. Bugün yapılanlar (v1.5.0)

- [x] `YikimGuard` — bekçi + sürüklenme geri alma (60 sn kullanıcı esnekliği)
- [x] Düşük FPS danışmanı (FPS < 60, 10 sn, oturumda bir kez)
- [x] Launcher: **Ultra FPS (Eski PC)** JVM preset'i
- [x] Bu belge + yedek (git 36ee7f5 + zip)
