# Taban 595 — modun ilk hâline kanıtlı geri dönüş

**Tarih:** 25 Eylül 2026 · **Kapsam:** modu (ve bağlı olduğu parçaları) 21:34'te **ort 595 / en düşük 526 FPS**
ölçülen ilk sürüme geri döndürmek; üst üste binen mekanizmaları çıkarmak; ölçümü tek bakışta okunur kılmak.
**Kapsam dışı (bu tur):** internette yeni optimizasyon araştırması, yeni ayar denemeleri.

---

## 1) Tek cümlelik sonuç

Geri yüklenen **paket** (launcher asar'ı + 5 mod jar'ı + manifest) 595 ölçümünü veren 21:24 derlemesiyle
**bayt bayt aynı**; mod **kaynak ağacı** da o sürüme çekildi ve 5 Minecraft sürümünün **tamamında 40/40 sınıf
komut komut aynı** çıktı. Geriye yalnızca "oyunu aç, satırı oku" kaldı.

| | |
|---|---|
| Yeni paketler | `dist/YIKIMLient-0.10.1-x64.exe` · `dist/YIKIMLient-0.10.1-portable.exe` |
| Paket içeriği | `dist/win-unpacked/resources/app.asar` sha `ed429dfc…` = **tabanla aynı** |
| Paketteki mod | 5 jar + `manifest.json` = **tabanla aynı sha** |
| Kaynak ↔ taban denkliği | `node .perf-lab/verify-baseline.mjs` → **TÜM SINIFLAR TABANLA AYNI** (5/5 sürüm) |
| Kapılar | `YIKIM_LINK_CHECK=1` → TÜM KONTROLLER GEÇTİ · `YIKIM_DEFAULTS_CHECK=1` → 0 HATA |

---

## 2) Taban nedir ve nasıl kanıtlandı

595 sayısı `%APPDATA%\yikimlient\logs\873265ab-…-18-33-52-710Z.log` içinde duruyor:

```
Performans: 610 FPS (30 sn: en düşük 526 • ort 595 • en yüksek 648) • sınır sınırsız • V-Sync kapalı •
görüş 8 chunk • 1920x1080 tam ekran • odak dışı 0 sn • küçültülmüş 0 sn • HUD 0.05 ms •
YIKIM tik 0.119 ms • Java 21.0.12.1 • YIKIM 1.0.0 • arka uç: bilinmiyor
```

Aynı oturumdan diğer satırlar: 176 (görüş 6, ısınma) → 339 → **661** → **610** → 624 → 139
(görüş 32, sınır 140, V-Sync açık — oyuncunun elle denemesi) → 332.

**Bu oturumda hangi yapı çalıştı** (üç bağımsız kanıt):

1. `launcher.log`: `18:31:01Z YIKIMLient v0.10.1 başlatılıyor`, `18:32:11Z YIKIM Client modu kuruldu:
   yikimlient-1.0.0+1.21.11.jar`, `18:33:52Z 1.21.11 başlatılıyor`. Oturumda **tek bir `[perf]`/`[jvm]`
   satırı yok** — yani kare muhafızı, Sodium ayarı, süreç önceliği ve GPU örnekleyicisi henüz yoktu.
2. Paket artefaktları: `dist/win-unpacked/resources/app.asar` ve `…/resources/mods/*` (mtime 21:24) =
   o oturumda çalışan launcher + kurulan jar.
3. Log satırının **alan kümesi** taban modun alan kümesidir (CPU/GC/heap/varlık yok) ve `arka uç: bilinmiyor`
   yazar; sonraki sürümlerde aynı alanlar eklenmiş ve arka uç `OpenGL` olmuştur (bkz. §6).

Kurtarılan tabanın parmak izleri (`_arsiv-baseline-595/`):

| Dosya | Boyut | sha256 (kısa) |
|---|---|---|
| `asar/out/main/index.js` | 203 267 | `89b3e253e21215b5…` |
| `asar/out/main/chunks/smoke-DL6EQmE2.js` | 26 838 | `7297bcfa13b1a5c0…` |
| `asar/out/renderer/assets/index-eGkvtIab.js` | 852 167 | `70173dabc5351ce3…` |
| `asar/out/renderer/assets/index-CdmPvCm5.css` | 44 121 | `997216994d30aa91…` |
| `asar/out/preload/index.js` | 4 380 | `8e67d99c0fa9ec70…` |
| `asar/package.json` (sürüm) | 363 | `0.10.1` |
| `mods/yikimlient-1.0.0+1.21.11.jar` | 82 373 | `98ff0550e51932b8…` |
| `mods/yikimlient-1.0.0+1.21.1.jar` | 82 200 | `3281afdf4060e733…` |
| `mods/yikimlient-1.0.0+1.21.4.jar` | 82 236 | `238686978b3746ca…` |
| `mods/yikimlient-1.0.0+1.21.8.jar` | 82 250 | `67f1b9d36d116abd…` |
| `mods/yikimlient-1.0.0+1.21.10.jar` | 82 382 | `de745613f906e734…` |
| `mods/manifest.json` | 540 | `1a4e1a946dbd3559…` |

> **Jar boyu merdiveni (aynı gerçeğin ikinci kanıtı):** 82 200–82 382 (21:24, 595) → 84 061–84 245 (21:43)
> → 89 352–89 536 (21:52) → 97 320–97 504 (22:31). Mod, 595 ölçümünden sonra dört kez büyüdü.

---

## 3) Ne çıkarıldı ve neden

Kural: **tabanda karşılığı olmayan mekanizma geri getirilmez, çıkarılır**; bir ayarın **tek sahibi** olur.

### 3.1 Mod tarafı

| Çıkarılan | Neden | Kanıt |
|---|---|---|
| `YikimAutoTune.java` (239 satır, hedefe kilitli otomatik görüş) | Tabanda yok; görüş mesafesini ikinci bir sahip yönetiyordu | jar diff: `+ com/yikimlient/client/YikimAutoTune.class` yalnız bugünkünde |
| `YikimPerfRun.java` (137 satır, 3×30 sn ölçüm turu → `.yikim/perf-log.txt`) | Tabanda yok; tanı aracı, ürün mekanizması değil | yalnız bugünkünde; kullanıcının örneğinde `perf-log.txt` **boş** |
| `YikimMetrics` telemetri katmanı: `Snapshot`, `snapshot()`, `systemSummary()`, `resetWindow()`, `countEntities()` | Tabanda yok; teşhis satırının **biçimini** değiştirdi, yani ölçüm tabanını kaydırdı | taban jar'da `build(Minecraft)` var, `Snapshot` yok |
| `YikimPresets`: `expected`, `maxDistance`, `auto` alanları, `DEFAULT_ID`, `performance()`, `throttleWarning()`, `releaseThrottles()`, profil kümesi `performance/ultra/quality/auto` | Tabanda 4 profil var ama farklı küme: `performance/balanced/quality/pvp`; ayrıca taban `vsync` + `maxFps` alanlarını **profille birlikte yazıyordu** — silinince bu iki anahtarın sahibi kaybolmuştu | taban `Preset` alanları: `… entityShadows, vsync, maxFps, blurriness` |
| `YikimPanel`: kırmızı "kare hızını kısan ayar" şeridi + "Düzelt" düğmesi, otomatik görüş bölümü, "Sistem" satırı, "Ölçüm turu" düğmesi ve "Ölçüm" satırı, dikey profil listesi | Tabanda yok; hem uyarı şeridi hem launcher'ın kare muhafızı **aynı işi** yapıyordu | taban javap'ta `lambda$draw$1` ve `lambda$drawPerformance$1` hiç yok |
| `YikimConfig`: `autoTune`, `autoTargetFps`, `autoMinDistance`, `autoMaxDistance` + `oto.*` anahtarları | Yalnız otomatik görüş için vardı | taban alan listesinde yok |
| `YikimClient`: `YikimAutoTune.tick(client)` çağrısı | Aynı sebep | taban `tick` gövdesi: Metrics → Keys → Catalog → ready |
| `YikimVideo`: `normalize()`, `firstOf()`, `invokeStatic()` ve `RenderSystem.getDevice()` yolu | Tabanda tek okuma yolu var: `getRenderSystem()` | **595 log'u `arka uç: bilinmiyor` yazar; sonraki sürümler `OpenGL`** — yani bu fark oyun logunda görünür bir iz bıraktı |
| modern `YikimAdapter.optionValue("graphics")` → `graphicsPreset().ordinal()` | Tabanda bu okuma `-1` döner (bilinmiyor); ayar **yazma** tarafı zaten `setOption` | taban bytecode: `104: iconst_m1` |

Silinen iki dosya kaybolmadı: `_arsiv-baseline-595/post595-kaldirilan-YikimAutoTune.java`,
`…-YikimPerfRun.java`.

### 3.2 Launcher tarafı

| Çıkarılan | Neden | Kanıt |
|---|---|---|
| `enforceFrameGuard()` (V-Sync/kare sınırı/Fabulous/boşta sınırı/bulut düzeltmesi) + iki çağrı yeri | **Çakışan sahiplik:** taban `defaultsFor` bu anahtarların hepsini zaten `force: true` ile yazıyor | taban bundle: `maxFps "260" force`, `enableVsync "false" force`, `inactivityFpsLimit '"minimized"' force`, `graphicsPreset '"custom"' force`, `renderClouds '"false"' force`; `enforceFrameGuard` **taban bundle'da yok** (grep: 0) |
| `applySodiumTuning()` + `SODIUM_RENDER_AHEAD` (cpu_render_ahead_limit) | Tabanda karşılığı yok | taban bundle'da yok |
| `raiseProcessPriority()` (PowerShell ile "Üstü Normal") | Tabanda karşılığı yok; oyun sürecine launcher müdahalesi | taban bundle'da yok |
| `startGpuSampler()`/`stopGpuSampler()` (oyun sırasında 2 sn'de bir nvidia-smi + `.yikim/gpu-log.csv`) | Tabanda karşılığı yok; oyun sırasında dış süreç çalıştırıyordu | taban bundle'da yok; `launcher.log`'da 595 oturumunda `[perf] Ekran kartı örnekleyicisi başladı` satırı **yalnız 22:35 oturumunda** var |
| `yikim-istemci-g1`, `yikim-istemci-shenandoah` JVM profilleri, `filterArgsForJava` ek satırları, ZGC adı/açıklaması | Ölçülmemiş yeni profiller; taban profil listesi `yikim-balanced` + 5 eski profil | renderer diff'i tam olarak bu 79 satırdı |
| `yikim-maxfps` → `yikim-balanced` geri alma bloğu ve `fpsPresetReverted` bayrağı | Bir kereye mahsus göç kodu; tabanda yok | `fpsPresetReverted`: taban bundle'da **0**, post-595 bundle'da 2 kez. (`forceHighPerformanceGpu`/`perfTuned` ise tabanda **var** — onlar korundu.) |
| `.perf-lab/patch-renderer.cjs` (derlenmiş renderer'ın JVM profil listesini yaman aracı) | Bir daha çalıştırılırsa çıkarılan profilleri geri getirirdi | **silindi** |

**Ayrıca metne dökülenler (taban değerleri geri geldi):** `defaultsFor` artık `renderDistance 4/6`,
`simulationDistance 5`, `entityDistanceScaling 0.5`, `biomeBlendRadius 0`, `particles 2` yazıyor ve
bu anahtarlar `force: true`. Yani oyuncunun elle seçtiği görüş mesafesi **her başlatmada** taban değerine
çekilir — 595 oturumunda olan buydu (launcher 6 yazdı, oyuncu oyun içinde 8'e çıkardı).

---

## 4) Tek sahiplik tablosu (çakışma bitti)

| Ayar | Sahibi | Nasıl |
|---|---|---|
| `renderDistance`, `simulationDistance`, `entityDistanceScaling`, `biomeBlendRadius`, `particles` | **Launcher** (başlangıç) | `defaultsFor`, `force: true` |
| `graphicsPreset`/`graphicsMode`, `ao`, `entityShadows`, `renderClouds`/`clouds` | **Launcher** | `defaultsFor`, `force: true` |
| `enableVsync`, `maxFps`, `inactivityFpsLimit` | **Launcher** | `defaultsFor`, `force: true` (mod bu iki anahtarı **kendiliğinden** yazmaz) |
| Aynı anahtarların oyun içi profille değiştirilmesi | **Mod** (yalnız oyuncu düğmeye basınca) | `YikimPresets.apply` + `YikimBridge.writeProfileChoice` |
| Arayüz rengi / dil / tuşlar | **Dokunulmadı** | — |
| Kare muhafızı, Sodium ayarı, süreç önceliği, GPU örnekleyici, otomatik görüş | **Yok** (çıkarıldı; tabanda karşılığı yok) | — |

Launcher ve mod birbirinin ayarını ezmez: launcher **açılışta**, mod **oyuncu bastığında** yazar ve seçimi
`profile-choice.json` ile bildirir (taban davranışı).

---

## 5) Doğrulama (yeniden üretilebilir)

```bash
# 1) kaynak ağacı ↔ taban jar: sınıf sınıf komut denkliği (5 sürüm)
bash scripts/build-mod.sh
node .perf-lab/verify-baseline.mjs dist/win-unpacked/resources/mods/yikimlient-1.0.0+1.21.11.jar \
     _arsiv-baseline-595/rebuilt-from-source/yikimlient-1.0.0+1.21.11.jar   # örnek
# 2) kapılar
YIKIM_LINK_CHECK=1 npx electron . --user-data-dir="$PWD/.check-ud-baseline"
YIKIM_DEFAULTS_CHECK=1 npx electron . --user-data-dir="$PWD/.check-ud-baseline"
# 3) paket içeriği ↔ taban
sha256sum dist/win-unpacked/resources/app.asar _arsiv-baseline-595/app.asar
```

Sonuçlar:

* `verify-baseline.mjs`: **1.21.1 / 1.21.4 / 1.21.8 / 1.21.10 / 1.21.11 → 40/40 sınıf AYNI.**
  (Karşılaştırma `javap -p -c -constants` üzerinden; sabit havuz dizinleri ve bayt ofsetleri ayıklanır,
  yani "aynı" demek **aynı komutlar + aynı sabitler + aynı üye listesi** demek.)
* `YIKIM_LINK_CHECK=1` → `SONUÇ: TÜM KONTROLLER GEÇTİ` (hem repo `out/` ile hem **paketlenmiş exe** ile).
* `YIKIM_DEFAULTS_CHECK=1` → 6 senaryo, **0 HATA**; `[YIKIMLient] sürüm 0.10.1`.
* `app.asar` sha `ed429dfc…` ve 5 jar + manifest sha'ları tabanla **aynı**.
* Gate koşuları izole `--user-data-dir` ile yapıldı; kullanıcının `%APPDATA%\yikimlient` klasörüne
  **hiç yazılmadı** (`launcher.log`'un son satırı hâlâ `19:37:47Z`).
* Kaynaktan derlenen jar taban jar'ından **12 bayt** farklı (82 385 vs 82 373). Fark yalnız hata ayıklama
  tablolarıdır (satır numaraları); komutlar aynıdır. Bu yüzden **pakete taban jar'ının baytları konuldu**,
  kaynaktan derlenen kopyalar `_arsiv-baseline-595/rebuilt-from-source/` altında kanıt olarak duruyor.

---

## 6) Ölçüm reçetesi — tek bakışta

> Bu turdan sonra güncellenen sürüm (makine fotoğrafı adımlarıyla birlikte): **§15**. sayı

1. **Paketi aç:** `dist/YIKIMLient-0.10.1-portable.exe` (ya da kurulu 0.10.1). İlk satır
   `[YIKIMLient] sürüm 0.10.1` olmalı.
2. **Doğru sürüm mü?** `%APPDATA%\yikimlient\logs\launcher.log` ilk satırı
   `YIKIMLient v0.10.1 başlatılıyor`; **`[perf]` satırı olmamalı** (muhafız/örnekleyici yok).
3. **Oyunu aç, dünyaya gir, 60–90 saniye kıpırdamadan bekle.** 595 yapılandırması: görüş 8,
   parçacıklar minimum, bulut kapalı, V-Sync kapalı, kare sınırı sınırsız (oyun içi profilden de
   seçilebilir: Sağ Alt = profil değiştir).
4. **Tek satır oku:**
   `%APPDATA%\yikimlient\game\instances\<ad>-<id6>\logs\latest.log` içindeki **en son `Performans:` satırı**
   (mod 30 saniyede bir yazar; başka hiçbir araç gerekmez):

   ```
   Performans: 610 FPS (30 sn: en düşük 526 • ort 595 • en yüksek 648) • sınır sınırsız • V-Sync kapalı •
   görüş 8 chunk • 1920x1080 tam ekran • odak dışı 0 sn • küçültülmüş 0 sn • HUD 0.05 ms •
   YIKIM tik 0.119 ms • Java 21.0.12.1 • YIKIM 1.0.0 • arka uç: bilinmiyor
   ```
5. **Karşılaştırma hedefi:** aynı koşulda `ort ≈ 595`, `en düşük ≈ 526` (örn. `en yüksek 648`).
   Satırda `sınır sınırsız` ve `V-Sync kapalı` yazmıyorsa ölçüm geçersizdir — önce o iki anahtarı düzelt.

**Hangi sürümün koştuğunu tek satırdan anlama:** taban satırı `CPU %`, `RAM boşta`, `GC`, `heap`, `varlık`
alanlarını **içermez** ve `arka uç: bilinmiyor` yazar; 595'ten sonraki sürümler bu alanları eklemiş ve
`arka uç: OpenGL` yazmıştır. Satırda bu alanlardan biri varsa paket yanlış derlemedir.

---

## 7) Bu turda kanıtlanan ve çürütülen hipotezler

| Hipotez | Durum | Kanıt (hepsi diskte) |
|---|---|---|
| Mod, 595'ten sonra değişti | **Kanıtlandı** | 4 bağımsız iz: jar boyu merdiveni · log satırının alan kümesi · `arka uç` değeri (`bilinmiyor` → `OpenGL`) · sınıf diff'i (`+YikimAutoTune`, `+YikimPerfRun`, `+Snapshot`) |
| Sorun JVM profilinde | **Çürütüldü** | `launcher.log` 19:23:27Z: `[jvm] 1 örnek "Dengeli" JVM profiline geri alındı`; **ondan sonraki** oturum (fd479a) yine 66 / 118 FPS (görüş 8). Ayrıca GC ölçümü: GC payı ~%1,5 ("balanced") / ~%1,0 ("maxfps") → 600→150 açıklanamaz |
| Sorun kare sınırı / V-Sync / boşta sınırı | **Çürütüldü** | 595 log'u: `sınır sınırsız • V-Sync kapalı`. Yavaş oturumun `defaults.json`'u da aynı: `enableVsync false`, `maxFps 260`, `inactivityFpsLimit "minimized"`, `renderClouds "false"`, `graphicsPreset "custom"`, `ao/entityShadows false` |
| Kare muhafızı bu yüzden gerekiyordu | **Çürütüldü + çakışma** | Yazdığı anahtarların tamamı taban `defaultsFor`'da `force: true`; muhafız taban bundle'da yok |
| GC | **Çürütüldü** | `.perf-lab/GcBench.java`: 6 GB yığın, 1200 MB canlı küme, 3 iş parçacığı → GC payı %1–1,5 |
| Sorun GPU'nun düşük saatte kalması | **Açık (ölçüldü, kanıtlanmadı)** | 22:35 oturumunun örnekleyicisi: `SM 180 / ort 1178 / en yüksek 2295 MHz • kullanım %13` → GPU doygun değil. 595 oturumunda örnekleyici yoktu, karşılaştırma yok. Sürücü güç modu ("Maksimum performansı tercih et") hiç kontrol edilmedi. Örnekleyici bu turda **çıkarıldı** (tabanda yok) |

---

## 8) Açıkça doğrulanmayanlar

* **Oyun içi FPS buradan ölçülemez.** Bu ortamda Minecraft başlatılamıyor; 595 hiçbir şekilde yeniden
  üretilemedi. Elimdeki her sayı, kullanıcının kendi oturum loglarından geldi.
* **Taban bugünkü makine durumunda 595 verir mi, bilinmiyor.** Sürücü (616.56), GPU güç durumu, termik
  durum, Windows güç planı ve arka plan yükü o günden beri değişmiş olabilir. Bu tur yalnızca **tek
  değişkeni ortadan kaldırdı**: artık koşan kod, 595 ölçümünü veren kodun aynısı.
* **Düşüşün sebebi kanıtlanmadı.** İki oturum hem mod hem launcher tarafında farklıydı; bu belirsizlik
  ancak §6'daki koşuyla kapanır (o koşu "taban" ya da "taban değil" der, sebebi söylemez). JVM profili ve
  kare sınırı hipotezleri **elden çıkarıldı**; kalan şüpheliler (modun post-595 eklemeleri +
  launcher'ın performans katmanı) bu turda tamamen **kaldırıldı**.
* **Ölçülmemiş bir iddia da benim:** "495 FPS farkı şu satırdan geliyor" diyemem. Uydurmuyorum.
* Kaynak ağacı, taban jar'ıyla **komut düzeyinde** aynı; **bayt düzeyinde** değil (12 bayt hata ayıklama
  farkı). Paketteki jar'lar taban baytlarıdır.
* Arayüz/dil/tuş tercihleri ve eski arşivlere (`_arsiv-*`, `dist/_yedek-*`, `dist/_era-orijinal`,
  `dist/_build*`) **dokunulmadı**.

---

## 9) Dosya haritası

| Yol | İçerik |
|---|---|
| `_arsiv-baseline-595/asar/` | 21:24 paketinden açılan launcher (`out/**`, `package.json`) — `out/` ve `era-bundle-src/` buradan geri yüklendi |
| `_arsiv-baseline-595/app.asar` | taban asar'ın kendisi (sha `ed429dfc…`) |
| `_arsiv-baseline-595/baseline-mod-jars/` | taban 5 jar + manifest → `resources/mods/`'a konuldu |
| `_arsiv-baseline-595/rebuilt-from-source/` | geri alınan kaynaktan derlenen 5 jar (komut denkliği kanıtı) |
| `_arsiv-baseline-595/baseline-classes/`, `current-classes/`, `javap/` | sınıf sınıf diff çıktıları |
| `_arsiv-baseline-595/mod-jar-diff.txt`, `main-index.diff`, `renderer.diff` | taban ↔ 22:31 durumu diff'leri |
| `_arsiv-baseline-595/cfr/` | taban sınıflarının okunabilir kaynağı (CFR) |
| `_arsiv-baseline-595/kanit/` | `launcher.log` + 4 oturum logu (873265 = 595, a5746e = 150, fd479a, 95afe6) |
| `_arsiv-baseline-595/post595-laucher/`, `post595-kaldirilan-*.java` | çıkarılan post-595 artefaktları/kaynakları |
| `_arsiv-baseline-595/gate-*.log`, `pack*.log` | kapı ve paketleme çıktıları |
| `.perf-lab/verify-baseline.mjs` | sınıf sınıf denklik doğrulayıcısı |
| `.perf-lab/jar-diff.mjs`, `class-strings.mjs`, `log-diff.mjs`, `GcBench.java` | inceleme araçları |
| `.perf-lab/tools/cfr.jar` | taban jar'ı okumak için indirilen decompiler (yalnız analiz, ürüne girmez) |

---

## 10) Bilinçli olarak yapılmayanlar

* Yeni Java/JVM bayrağı denemesi (araştırma bu turun kapsamı dışı; zaten Brucethemoose kaynağı "bayraklar
  istemci ortalamasını yükseltmez" diyor ve §7 JVM hipotezini oyun verisiyle çürüttü).
* Yeni optimizasyon mekanizması ekleme; profil sayısı/preset kümesi tabandaki hâline döndü.
* Sürücü ayarı, güç planı, NVIDIA Denetim Masası'na müdahale (makine ayarı, kullanıcının kararı).
* `dist/_build*`, `_arsiv-*`, `dist/_yedek-*` arşivlerinin silinmesi/düzenlenmesi.

---

# Platosu: ~150 neden takılı kalıyordu?

Bu bölüm *tabana dokunmadan* yapılan ölçüm turunun raporudur. Kod değişmedi; kanıt dosyaları
`_arsiv-baseline-595/kanit/` altında.

## 11) Oturum tablosu (kanıt: launcher.log + 4 oturum logu)

Dört oturumun tamamı aynı makinede, aynı **RTX 5050 Laptop** üzerinde, aynı sürücüyle koştu:

| Oturum (yerel) | launcher / mod | GPU · GL | mod satırındaki ayar | ölçülen FPS (30 sn ort.) |
|---|---|---|---|---|
| `873265` 21:33–21:38 | **0.10.1** · jar 82 373 B | RTX 5050 · 616.56 | görüş 6 → 8 | 176 → 339 → 661 → **610 (min 526)** → 624; 32 chunk'ta 139 |
| `a5746e` 22:07– | 0.10.2 · jar 89 352 B | RTX 5050 · 616.56 | görüş 8 / 16 | 95 → 123 → 194 → 198 → 151 (en yüksek 226) |
| `fd479a` 22:23– | 0.10.3 | RTX 5050 · 616.56 | görüş 8/6, bulut kapalı | 66 → 118 (en yüksek 152) |
| `95afe6` 22:35–22:37 | 0.10.4 | RTX 5050 · 616.56 | görüş 8/6 → 16/12 | 44 → **123 (80–153)** → 85 |

Her dört logda da: `OpenGL Renderer: NVIDIA GeForce RTX 5050 Laptop GPU/PCIe/SSE2`,
`OpenGL Version: 3.3.0 NVIDIA 616.56`, `Backend library: LWJGL 3.3.3-snapshot`,
`Sodium-NvidiaWorkarounds` satırları **birebir aynı**; 0 WARN / 0 ERROR.
Satır satır yapısal fark (`node .perf-lab/session-diff.mjs`, sayılar normalize): **fark yok**.

## 12) Test edilip çürütülenler

| Hipotez | Test | Sonuç |
|---|---|---|
| Yanlış kartta koşuyor | 4 logdaki `OpenGL Vendor/Renderer` + `Found graphics adapter` | **Çürüdü**: hepsinde NVIDIA RTX 5050, Intel UHD yalnız panel sürücüsü |
| Sürücü/Java değişti | 4 logdaki `OpenGL Version` / `Java` | **Çürüdü**: 616.56 ve 21.0.12.1 sabit |
| Mod seti değişti | 107 mod listesi + yapısal log diff | **Çürüdü**: aynı |
| Dış kare sınırlayıcı / katman | Kurulu programlar, süreçler, oturum türü | **Bulunamadı**: RTSS/MSI Afterburner/GeForce Experience/OBS kurulu değil; oturum `Console` (uzak masaüstü değil); NVIDIA App 11.0.9.251 var |
| Sert tavan (V-Sync 144 vb.) | Logdaki en yüksek değerler | **Çürüdü**: 226 (a5746e), 168·153 (95afe6) — panel 144 Hz'in üstünde; mod satırı "sınır sınırsız • V-Sync kapalı" |
| GPU güç/termal kısıtı | nvidia-smi + 2 sn örnekleyici kaydı | **Çürüdü**: 55–62 °C, kısıt bayrağı yok, SM 2295 MHz'e çıkıyor |
| GPU yetmiyor | 22:35 oturumunun `gpu-log.csv`'si (64 örnek) | **Çürüdü**: kullanım ort. **%13**, güç 16–19 W — GPU boşta bekliyordu |
| CPU OS'ten kısılmış | `powercfg` (AC/DC) | **Çürüdü**: en yüksek işlemci durumu 100/100 (Dengeli) |
| CPU güç/termal throttle | 6 ve 12 izlekli yük testi + olay günlüğü | **Çürüdü (bugün)**: `% Processor Performance` 167–184 (≈4,0–4,4 GHz) sürdürüyor; `Kernel-Processor-Power` 37/38 (üretici yazılımı kısıtı) olayı yok |
| AC/batarya değişimi | `Kernel-Power` olayları + pil durumu | **Çürüdü**: 5 saatlik pencerede güç kaynağı değişimi (105) olayı yok; pil %97 ve AC'de |
| JVM/GC | §7 (GC payı %1–1,5) | **Çürüdü** |
| **Ayar farkı** | 22:36–22:37 ölçüm pencereleri | **Çürüdü (aşağıya bak)**: o pencere launcher'ın *kendi* ucuz değerleriyle koşuyordu |

## 13) Bulunan gerçek mekanizma: sahiplik devri (ve nasıl düzeltildi)

**Kanıt zinciri:**

1. Mod, oyuncu menüden profil seçtiğinde `.yikim/profile-choice.json` yazar; içinde `playerOwned`
   listesi vardır (bu dosya: profil `quality`, 14 anahtar).
2. Launcher (bu **tabanda da** var — taban asar'ında 9 `playerOwned`, 2 `profile-choice`, 39 `force: true`)
   o anahtarları **yazmaz**: `[defaults] 1.21.11: oyuncunun oyun içi profili korundu (12 ayar yazılmadı).`
   (launcher.log 19:23:27 · 19:34:44)
3. Bu yüzden in-game seçimden sonra launcher'ın ucuz değerleri bir daha uygulanmaz: `ao:false`,
   `entityShadows:false`, `renderClouds:"false"`, `entityDistanceScaling:0.5`, `biomeBlendRadius:0`,
   `particles:2`, `renderDistance:6`, `simulationDistance:5` **yerine** oyunun varsayılanları kalır.
   Bugünkü dosya birebir bu: `options-95afe6.txt` → `ao:true`, `entityShadows:true`,
   `renderClouds:"fast"`, `entityDistanceScaling:1.0`, `biomeBlendRadius:2`, `particles:0`,
   `renderDistance:16`, `simulationDistance:12`, `menuBackgroundBlurriness:5`.
4. Bu küme, taban modun `quality` profilinin değerleriyle alan alan aynıdır
   (`YikimPresets.PRESETS`: 16/12, parçacık 0, AO açık, gölge açık, bulut 2, EDS 1.0, biomeBlend 2,
   bulanıklık 5, vsync açık + 144 sınır).
5. **Profil duyarsızlığının açıklaması burada:** launcher'ın `defaultsFor`'u hangi profil seçilirse
   seçilsin *aynı* oyun ayarlarını yazar; oyun ayarlarının sahibi in-game seçimdir. Yani launcher
   profilini değiştirmek kare hızını değiştirmez — değiştirmesi gereken anahtarlar o anda
   `playerOwned` olduğu için hiç yazılmaz.

**Uygulanan düzeltme (kod değil, sahiplik):** `profile-choice.json` proje arşivine kopyalandı (`_arsiv-baseline-595/kanit/profile-choice-95afe6.json`)
ve canlı dosya `profile-choice.json.yedek-20260925` olarak yeniden adlandırıldı. Böylece bir sonraki
açılışta 23 anahtarın tamamı yine **launcher** tarafından yazılır (tek sahip, geri alınabilir: yedeği
geri kopyalamak yeterli). `options.txt` elle düzenlenmedi — o dosyanın tek sahibi launcher'ın kendisi.

> Not: `defaults.json`'daki `playerOwned: []` kaydı ve 19:35:38'deki `23 oyun ayarı yazıldı` satırı,
> 22:35 örneğinin **ucuz** değerlerle başladığını kanıtlıyor (`applied`: renderDistance 8,
> simulationDistance 6, ao false, entityShadows false, clouds "false", EDS 0.5, particles 2).

## 14) Çözülemeyen: platonun *büyüklüğü*

22:37:06 penceresi (ort **123** FPS, 80–153) **launcher'ın kendi ucuz değerleriyle** ölçüldü —
595 oturumuyla aynı yapılandırmada. Aynı yapılandırma 21:34'te 610 veriyordu. Yani **ayarlar ve
sahiplik, 610 → 123 düşüşünü açıklamıyor**; onlar yalnızca (a) platonun profile duyarsızlığını ve
(b) in-game seçimden sonra pahalı değerlerin kalıcı olmasını açıklıyor.

Elde kalan ve dosyalardan **kanıtlanamayan** değişkenler:

* **Ölçüm anındaki makine durumu.** O oturumlarda (özellikle a5746e/fd479a'da) GPU/CPU örnekleyicisi
  yoktu; elimizdeki tek makine kaydı 22:35 koşusunun (0.10.4) `gpu-log.csv`'si. Bugünkü makine
  sağlıklı (yukarıdaki testler) ama o 30 dakikalık pencerelerin canlı hâli kayıtlı değil.
* **Oyun içi sahne.** Dört oturum da `mcpvp.club` / `eu.mcpvp.club` sunucusuna bağlandı ama hangi
  bölgede, kaç oyuncuyla, ne kadar dolu bir alanda ölçüldüğü **loglarda yok** (tek ipucu: yavaş
  oturumlarda "varlık 90–96"). Sunucu tarafı içerik farkı çürütülemedi.
* **NVIDIA sürücü profili.** "Maksimum kare hızı", "Dikey eşitleme", "İş parçacıklı iyileştirme",
  "Güç yönetimi modu" gibi ayarlar komut satırından **okunamaz** (kurulu: NVIDIA App 11.0.9.251).
  Sert bir tavan bulunamadı ama sürücü tarafı bir kısıt dışlanamaz.
* **FPS sayacının kaynağı** taban modda `MinecraftClient.getCurrentFps()` (vanilya) — yani 595 ile
  123 aynı ölçekte; sayaç hatası hipotezi bu yüzden elendi.

## 15) Ölçüm reçetesi — tek bakışta

1. **Oyun içi:** dünyaya girdikten sonra 60–90 sn bekle (ilk pencere chunk yüklemesini ölçer).
   Sonra tek satır oku:
   `<APPDATA>\yikimlient\game\instances\<ad>-<id6>\logs\latest.log` içindeki **son `Performans:` satırı**.
2. **Referans (taban, aynı makine):**

   | Görüş | Beklenen |
   |---|---|
   | 6 chunk | 176–339 (geçiş) |
   | **8 chunk** | **ort 595 · en düşük 526 · en yüksek 648** |
   | 32 chunk | ~139 (o ölçümde sınır 140 + V-Sync açıktı) |

3. **Aynı dakikada makine fotoğrafı (oyun açıkken):**

   ```bash
   nvidia-smi --query-gpu=clocks.current.sm,clocks.current.memory,utilization.gpu,power.draw,temperature.gpu,clocks_throttle_reasons.active --format=csv
   powershell -NoProfile -ExecutionPolicy Bypass -File .perf-lab/makine-tani.ps1
   ```

   Beklenen: SM saati 1500–2300 MHz, kullanım %60+, güç 40 W üstü, sıcaklık < 80 °C, güç planı
   Dengeli + en yüksek işlemci durumu %100. Kullanım %10–25 ve güç ~17 W ise **kare hattı CPU
   tarafında bekliyor** demektir; o koşunun `Performans:` satırındaki `CPU %` ve `süreç X çekirdek`
   alanlarını not et.
4. **Ayarların sahibi kim?** `options.txt` içinde `ao:false`, `entityShadows:false`,
   `renderClouds:"false"`, `entityDistanceScaling:0.5`, `biomeBlendRadius:0`, `renderDistance:6`
   görünüyorsa launcher sahibi; `ao:true` / `entityShadows:true` / `clouds:"fast"` / `EDS 1.0` /
   `renderDistance:16` görünüyorsa **in-game profil seçimi sahibi** (o zaman launcher profili etkisizdir
   — panelde "başlatıcı profilini geçerli kıl" ile geri verilebilir).
5. **Yalnız kullanıcının yapabileceği kontroller** (buradan okunamaz): NVIDIA App / Denetim Masası →
   *Maksimum kare hızı* kapalı, *Dikey eşitleme* = uygulama kontrollü, *Güç yönetimi modu* =
   "Maksimum performansı tercih et"; Windows güç modu = "En iyi performans"; Lenovo Vantage termal
   modu = Performans; panelin 144 Hz'de olduğu (doğrulandı: 1920×1080@144).

## 16) Bu turda doğrulanmayanlar (açıkça)

* **Oyun içi FPS buradan ölçülemez**: bu ortam Minecraft'ı çalıştıramaz; 150 FPS yeniden üretilemedi,
  tabanın bugün 595 verip vermediği bilinmiyor.
* **Platonun büyüklüğü kanıtlanmadı** (§14): 610 → 123 düşüşünün nedeni bulunamadı; "şu ayar, şu
  bayrak" diye bir sonuç **uydurulmadı**, hiçbir yeni mekanizma da eklenmedi.
* **Makine durumu o pencerelerde ölçülmedi** (örnekleyici yoktu); bugünkü ölçümler yalnız "makine
  şu anda sağlıklı" der.
* **Sürücü seviyesi kısıtlar** (NVIDIA kare sınırı/V-Sync/threaded optimizasyon) okunamadı.
* `powercfg /batteryreport` sayısal AC/pil geçmişi tablosu bu durumda ayrıştırılamadı; AC durumu
  olay günlüğü + pil durumu üzerinden dolaylı kanıtlandı.

## 17) Yeni kanıt dosyaları

| Yol | İçerik |
|---|---|
| `_arsiv-baseline-595/kanit/makine-tani.txt` | güç planı (AC/DC), 6 ve 12 izlek yük testleri, olay günlüğü, kare sınırlayıcı adayları, GPU tercihleri, ekran modu |
| `_arsiv-baseline-595/kanit/powercfg-subprocessor.txt` | işlemci alt grubu ham çıktısı |
| `_arsiv-baseline-595/kanit/profile-choice-95afe6.json` | in-game profil seçiminin yedeği (geri almak için geri kopyala) |
| `_arsiv-baseline-595/kanit/options-95afe6.txt`, `defaults-95afe6.json` | platonun ölçüldüğü andaki ayar kaydı |
| `_arsiv-baseline-595/kanit/pil-raporu.html` | `powercfg /batteryreport` çıktısı |
| `.perf-lab/session-diff.mjs` | iyi/kötü oturum loglarının yapısal diff aracı |
| `.perf-lab/makine-tani.ps1` | tek komutla makine fotoğrafı (salt okuma; raporu `kanit/` içine yazar) |

## 18) "F3'te 5050 yazsa da entegre mi çalışıyor?" sorusu (26 Eylül, yeni kanıt)

**Soru:** Oyun görünürde RTX 5050'de olsa da gerçekte Intel UHD (entegre) üzerinde koşuyor
olamaz mı; 150 platosu entegre grafik performansı olabilir mi?

**Cevap: hayır — render NVIDIA'da.** Kanıtlar:

* Dört oturumun dördünde de `OpenGL Renderer: NVIDIA GeForce RTX 5050 Laptop GPU/PCIe/SSE2` ve
  `OpenGL Vendor: NVIDIA Corporation` var; bu satır canlı GL bağlamından okunur (kozmetik değil).
  Entegre olsaydı `Intel(R) RaptorLake-S Mobile Graphics Controller` yazardı.
* `Found graphics adapter: AdapterInfo{vendor=INTEL ...}` satırı yalnızca GLFW'nin **bulduğu**
  adaptör listesidir; seçilen bağlam NVIDIA'dır (ImmediatelyFast de NVIDIA üzerinde başlatıldı).
* Orta nokta: panel çıkışı Intel'e bağlı görünüyor (makine tanısı §8: Intel adaptörü
  1920x1080@144Hz raporluyor, NVIDIA'nın ekran alanı boş). Yani kare NVIDIA'da çizilir, sunum için
  Intel'e kopyalanır; Görev Yöneticisi'nde Intel hareketliliği görmek normaldir.
* Windows GPU tercihi: oyunun kullandığı tam yoldaki javaw
  (`C:\Program Files\Eclipse Adoptium\jdk-21.0.12.101-hotspot\bin\javaw.exe`) → `GpuPreference=2`
  (yüksek performans). Launcher'ın "[gpu] Harici ekran kartı tercihi" özelliği devrede.
* **Ayrım noktası:** 595 alınan oturumda da (`873265`) aynı NVIDIA satırları ve aynı Sodium NVIDIA
  workaround'u (`NVIDIA_THREADED_OPTIMIZATIONS_BROKEN`, threaded optimizasyonlar kapalı) vardı —
  yani GPU seçimi 610→123 farkını açıklamıyor; §14'teki boşluk sürüyor.
* Geriye dönük doğrulanamayan: 21:33 ile 22:37 arasında panel/MUX modunun (Lenovo Vantage
  "Hibrit / yalnız dGPU") değişip değişmediği bilinmiyor; iki oturumda da sunum yolu aynıydı.

**Yeni araç:** `.perf-lab/gpu-kim.ps1` (salt okunur) — oyun açıkken javaw'ın `nvidia-smi` süreç
listesinde görünüp görünmediğini, Windows GPU tercihini ve son oturumun `OpenGL Renderer` satırını
tek çıktıda verir, sonunda tek cümlelik hüküm yazar. Oyun kapalıyken de son oturum kanıtını gösterir.

**Doğrulanan exe kimliği:** `dist\win-unpacked\YIKIMLient.exe` → FileVersion **0.10.1**,
`resources/app.asar` sha `ed429dfc9f80b876bc7f3cc62c2ae1ede680c2a021f46351eb67e298eea988af`
= `_arsiv-baseline-595/app.asar` ile bayt bayt aynı (taban paketi). Not: masaüstünde benzer adlı
iki klasör var; doğru olan boşluksuz `YIKIMLient` (depo kökü); `YIKIM Client` klasörü eski
(25 Eylül) taslaktır, çalıştırılabilir uygulama içermez.

> **Not (26 Eylül, §19 sonrası):** Yukarıdaki asar sha'sı (`ed429dfc…`) *taban* paketin kimliğidir.
> Varsayılan sunucu özelliği bilinçli olarak launcher'a eklendiği için çalışan paketin asar'ı artık
> `2411d8b7…`; mod jar'ları değişmedi (aşağıya bakınız).

---

## §19 — Varsayılan sunucu: her mod paketinde "YIKIM SMP"

**İstek:** her mod paketi ilk açıldığında Sunucular listesinde adı **YIKIM SMP**, IP'si
**yikimdara.com.tr** olan sunucu hep bulunsun.

**Nerede yapıldı:** launcher (`out/main/index.js`) — mod jar'ına **dokunulmadı**, böylece taban
parmak izi korunuyor (5 jar sha'sı ve `verify-baseline.mjs` sonucu aynı; jar 1.21.11 = `98ff0550…`).
Uygulama `applyDefaultServer(instanceDir)`; iki yerden çağrılıyor:

1. `launchInstance()` — mod paketi başlatılırken (asıl "ilk açılış" yolu),
2. uygulama açılışındaki instance taraması — paket hiç açılmasa bile kayıt yerleşir.

**Davranış (kanıtlanmış sınırlar):**

* `servers.dat` (NBT) okunur; `servers` listesinde **adı veya IP'si eşleşen** kayıt varsa dosyaya
  hiç yazılmaz. Eşleşme büyük/küçük harf ve baştaki/sondaki boşluktan bağımsızdır.
* Kayıt yoksa eklenir; ilk yazmadan önce `.yikim/servers.dat.yedek` alınır (varsa üzerine yazılmaz).
* Oyuncunun mevcut kayıtları — ikon (base64), emoji, Türkçe ad, `hidden` baytı — **ham bayt olarak**
  korunur: NBT okuyucu/yazıcı ilkel değerleri yeniden kodlamaz, dosyadan ne geldiyse onu yazar.
* Biçim korunur: 1.21.11 oyunu dosyayı **sıkıştırmasız** NBT yazıyor (ilk bayt `0a`, gzip değil);
  eski gzip'li dosya gelirse gzip'li kalır. İkisi de okunur.
* Okunamayan/bozuk dosya **asla** üzerine yazılmaz (bozuk liste kaybetmek, sunucu eklemekten kötüdür);
  `"servers"` beklenen türde değilse de dokunulmaz.
* Kayıt oyuncu tarafından silinirse bir sonraki açılışta geri gelir — "hep ekli olsun" isteği böyle.

**Kapı:** `YIKIM_SERVER_CHECK=1` → 7 senaryo, **26 kontrol**, hepsi yeşil. Senaryolar: yeni paket,
mevcut liste korunuyor mu (emoji + ikon + gizli bayt), ikinci açılış çoğaltmıyor mu, gzip'li dosya,
bozuk dosya, aynı IP farklı ad, ve **gerçek oyuncu dosyası** (kopyada çalışır, aslı değişmez).
Kontrolün NBT okuyucusu bilerek launcher'ınkinden **bağımsız** yazıldı; bu sayede liste öğesi /
sarmalanmış etiket karışıklığı ilk koşuda yakalandı.

**Doğrulama (26 Eylül, hepsi yeşil):**

| Ne | Komut | Sonuç |
| --- | --- | --- |
| Repo kodu | `YIKIM_SERVER_CHECK=1 npx electron .` | 7 senaryo • 26/26 ok |
| Paketlenmiş exe | `YIKIM_SERVER_CHECK=1 dist/win-unpacked/YIKIMLient.exe` | 7 senaryo • 26/26 ok |
| Diğer kapılar | `YIKIM_LINK_CHECK=1` • `YIKIM_DEFAULTS_CHECK=1` | TÜM KONTROLLER GEÇTİ • 0 HATA |
| Paket içeriği | `asar extract` + `diff -r out/` | birebir aynı • dosya listesi 134 giriş, değişmedi |

**Uçtan uca kanıt:** gerçek açılış akışı, sahte bir store ile provalandı; hem açılış taraması hem
başlatma yolu kaydı ekledi (`_arsiv-baseline-595/kanit/launcher-e2e-sunucu.log`):

```
[servers] servers.dat: "YIKIM SMP" eklendi (yikimdara.com.tr).
[servers] Sunucu Testi: "YIKIM SMP" sunucu listesine eklendi.      <- açılış taraması
[servers] servers.dat: "YIKIM SMP" eklendi (yikimdara.com.tr).
[servers] 1.21.11: "YIKIM SMP" sunucu listesine eklendi.            <- launchInstance
```

Dikkat: `--user-data-dir` yalnızca store/log yolunu değiştirir; **oyun klasörü**
`%APPDATA%\yikimlient\game` sabittir. Bu yüzden prova sırasında launcher gerçek oyun klasörüne geçici
bir instance kurdu (`1-21-11-68a90c`, 61 MB); test bitince silindi, oyuncunun kendi instance'ı
(`1-21-11-9b2319`) ve store dosyası değişmedi (68 mod, `servers.dat` mtime 11:21, sha aynı).

**Paket:** `dist/win-unpacked/resources/app.asar` yalnızca `out/main/index.js` ve
`out/main/chunks/smoke-DL6EQmE2.js` değiştirilerek yeniden paketlendi → sha
`2411d8b7f9f47eddf4014922b3a8be34e479e2c92f93a8e5f3f097ed4361666d`. Kıyas: taban asar
`_arsiv-baseline-595/app.asar` (`ed429dfc…`). `resources/mods/*` (asar dışı) dosyalarına
dokunulmadı. Değişen iki dosyanın sha'sı: `out/main/index.js` = `e3c84d6b…` (taban `89b3e253…`),
`out/main/chunks/smoke-DL6EQmE2.js` = `1a312bb4…`.

**Geri alma:** (a) tabanla birebir aynı kodu geri almak için `_arsiv-baseline-595/asar/out/...`
dosyalarını `out/` üzerine kopyalayıp asar'ı yeniden paketlemek; (b) yalnızca özelliği kapatmak için
`applyDefaultServer` çağrılarını (2 yer) ve `YIKIM_SERVER_CHECK` bloğunu silmek yeterli — fonksiyon
kullanılmadan kalır. Oyuncu tarafında yan etki yok: dosya zaten varsa hiç yazılmaz.

---

## §20 — ThreatenGL araştırması (varsayılan pakete **eklenmedi**)

**Kimlik (doğrulandı):** Modrinth `threatengl` (`RSFrpoou`), sürüm **2.0.4-release.10** (2 Kasım 2025),
Fabric, `game_versions` 1.17 → **1.21.11**, 51.960 B, sha256
`6b86c83ea88cc0b64bb201526d1347b392ad0006227befebdc511e5bd1ef562e`. Jar `.perf-lab/threatengl/`
altında duruyor (inceleme kanıtı).

**Gerçekte ne yapıyor (jar'dan okundu, iddia değil):** tek mixin `ThreatenGLMixin`, hedef
`Window.<init>` (Yarn `class_1041`). Mixin `GLFW.glfwWindowHint` çağrılarını yakalayıp
`GLFW_CONTEXT_VERSION_MAJOR` → **4**, `GLFW_CONTEXT_VERSION_MINOR` → **6** (macOS'ta 4.1) yapıyor.
Başka hiçbir şey yok: yeni çizim yolu, yeni ayar, yeni iş parçacığı yok; Minecraft yine OpenGL 3.2
dönemi özellikleriyle çiziyor (F3'te yazan sürüm değişir).

**Bu makinede neden kazanç beklenmiyor:**

* Kare hattı CPU tarafında sınırlıydı (22:35 `gpu-log.csv`: GPU ort. %13, 16-19 W) — GL sürüm bayrağı
  GPU'yu çalıştırmıyor.
* NVIDIA aynı sürücü yolunu kullanır; sürüm bayrağı bir "sürücü profili" değiştirdiğine dair kanıt yok
  (modun kendi README'si bunu *varsayım* olarak yazıyor: "some GPU manufacturers like to use
  different profiles... I'm guessing").
* Yazarın kendi ifadesi: "this mod is very simple, it only changes the OpenGL version and absolutely
  nothing else"; topluluk raporları F3 yazısı dışında etki görmediğini söylüyor.
* Aynı paket zaten 11:21 oturumunda 32 chunk'ta **en yüksek 932 / 30 sn ortalaması 488 FPS** gördü
  (kullanıcı raporu +600 FPS ile uyumlu) — yani 595 tabanının üstüne çıkmak GL sürümüne bağlı değil.

**Riskler:** erken pencere/GL bağlamı kuran modlarla çakışır (ör. Early Loading Screen — pakette yok);
GL 4.6 desteklemeyen sürücüde açılışta hata verir (RTX 5050 destekliyor); Sodium'un NVIDIA workaround'u
(`NVIDIA_THREADED_OPTIMIZATIONS_BROKEN`) ortam değişkeni katmanıdır, doğrudan çakışma beklenmez ama
aynı pencere kurulum adımına dokunur.

**Karar:** varsayılan pakete eklenmedi — burada ölçülebilir bir kazanç mekanizması yok, buna karşılık
başlatma anında riski var. İstenirse katalogda **kapalı gelen** opsiyonel bir deneme olarak durur
(tek jar, kaldırması kolay); o zaman aynı bölgede oturum karşılaştırması yapılabilir.

### §19 ek — özelliğin gerçek dünyada kanıtı

26 Eylül 11:50'de kullanıcı yeni bir mod paketi oluşturdu (`1-21-11-1c7ec7`); launcher.log:

```
[08:51:29] [info] [servers] servers.dat: "YIKIM SMP" eklendi (yikimdara.com.tr).
[08:51:29] [info] [servers] 1.21.11: "YIKIM SMP" sunucu listesine eklendi.
```

Yeni instance'ın `servers.dat` dosyası 11:53'te oluştu ve içinde kayıt var — yani özellik
oyuncunun kendi akışında çalışıyor, yalnızca kapı provasında değil.

---

## §21 — Mod paketi incelemesi: dinamik sahnelerdeki kare düşüşü

**Şikâyet:** normalde sorun yok; ama elytra/mace gibi hareketli sahnelerde FPS yarıya düşüyor
(700 → 350). Oturum logları bunu doğruluyor: 16 chunk'ta 30 sn ortalaması 349–617 arasında
giderken **en düşük** değerler 151–392; 8 chunk'ta bile minimum 250–392 (yani düşüş render
mesafesine bağlı değil — CPU tarafında bir tepe yükü var).

**Modrinth paketleri incelendi** (`.perf-lab/paket-incele.mjs`, mrpack indirilip `modrinth.index.json`
okundu): `fabulously-optimized` 12.3.0 (48 mod), `simply-optimized-continued` 1.0.1 (27 mod),
`the-best-optimized` 1.0.1 (49 mod); `remarkably-optimized` 1.21.11 yayınlamıyor.

**Bizde olmayan, 1.21.11'de yayında olan adaylar** (`.perf-lab/mod-uygunluk.mjs`):

| Mod | Paketler | Neden |
| --- | --- | --- |
| **Particle Core** | Simply Optimized + TBO | Partikül çizimini optimize eder; mace/vuruş sahnelerinin ana kalemi. Bizde kuruluydu ama **kapalıydı** |
| **Better Block Entities** | Fabulously Optimized | Sandık/tabela/yatak/afiş çizimini toplar (EBE 1.21.11'de yok) |
| **ModernFix (mVUS)** | Fabulously Optimized | Bellek + kaynak yükleme; resmî proje Fabric derlemesi yayınlamıyor, FO çatalı kullanıyor |
| **Entity View Distance** | Simply Optimized | Varlık görünürlük mesafesini tür bazında kısar (kalabalık sunucu) |
| **Chunky** | The Best Optimized | Dünya ön-üretimi: elytra sırasındaki chunk üretim takılmalarını kaldırır (tek oyunculu) |
| Fzzy Config | Simply Optimized | Particle Core'un **zorunlu** bağımlılığı |

**Bulunan iki sessiz kayıp:**

1. **Particle Core hiç çalışmıyordu.** Jar'ı kapalıydı; katalogda "pvp, varsayılan kapalı" olarak
duruyordu — üstelik açılsa bile `fzzy_config >= 0.7.5` bağımlılığı pakette olmadığı için uyumluluk
denetleyicisi modu devre dışı bırakacaktı.
2. **C2ME ve Iris parkta kalmış.** İkisi de `enabled=false`, sebep kaydı yok (eski bir uyumluluk
kararı). Bugünkü denetim `YIKIM_REPAIR_INSTANCE` ile **0 sorun** veriyor; yani kayıt güncel değil.

**MoreCulling notu (gerçek ama küçük):** kurulu `MoreCulling 1.6.2`, Sodium'un kaldırılmış
`BlockOcclusionCache` sınıfına referans veriyor; `latest.log`'da `Error loading class` uyarısı çıkıyor
ve o özel kanca uygulanmıyor. 1.21.11 için daha yeni MoreCulling yok (son sürüm 1.6.2, Şubat 2026);
modun diğer kırpma özellikleri çalışmaya devam ediyor, bu yüzden paketten çıkarılmadı.

**Yapılan değişiklikler (yalnızca launcher kataloğu + bir geri açma adımı):**

* `OPTIMIZATION_MODS`: `particle-core` (artık varsayılan **açık**), `better-block-entities`,
  `modernfix-mvus`, `fzzy-config` eklendi; `modernfix` (resmî) kaydı kaldırıldı.
* `EXTRA_MODS` (varsayılan kapalı, YIKIM menüsü → Modlar'dan açılır): `entity-view-distance`, `chunky`.
* `ensureOptimizationPack()` artık **park edilmiş performans modlarını geri açıyor**: kategori `perf-*`,
  `disabledByDefault` değil, oyuncu kapatmamış (`modDecisions`) ve jar `.disabled` ise `.jar`'a
döndürülüyor. Görsel modlar (Iris), katalog kararıyla kapalı olanlar ve oyuncunun kapattıkları
etkilenmiyor.

**Kullanıcının bir sonraki açılışında ne olacak:** ModernFix (mVUS), Better Block Entities, Fzzy Config
kurulacak; Particle Core ve C2ME geri açılacak; Entity View Distance ve Chunky **kapalı** kurulacak
(panelden açılabilir).

**Kapı:** yeni `YIKIM_PACK_CHECK=1` → 16 kontrol, hepsi yeşil (çevrimdışı: hiç indirme yapmadan
park/geri açma davranışını ve katalog girişlerini doğrular). `YIKIM_LINK_CHECK`, `YIKIM_DEFAULTS_CHECK`,
`YIKIM_SERVER_CHECK`, `YIKIM_REPAIR_INSTANCE` de temiz (0 HATA). Paket yeniden üretildi:
`app.asar` sha `1f8332dc8d21e2b4b6d7dcac90b686a322e918b3e5573e0d18f6619348dd6c90`,
`out/main/index.js` sha `01c24e96578831686e3f2c2c26d7a808034d3afd45a15bec3202b0b5860292f0`.
Jar'lar (mod + `resources/mods/*`) değişmedi.

**Geri alma:** yeni katalog satırlarını ve `ensureOptimizationPack` içindeki geri açma bloğunu silmek
yeterli; tek tek istemezsen mod pencere panelinden kapatılabilir (o zaman `modDecisions` kaydı
geri açılmasını da engeller). Yeni araçlar: `.perf-lab/paket-incele.mjs`, `mod-uygunluk.mjs`,
`mod-bilgi.mjs`, `mod-bagimlilik.mjs`.

---

## §22 — YIKIM ana menüsü geri geldi (mod 1.0.0 → 1.1.0)

**İstek:** "ana menüyü o bizim ilk moddaki gibi yap, ama aynı sorunlar çıkmasın, GUI'yi daha güzelleştir."
Ölçüt: v0.12.0'ın ana menü fikri (kod çizimli panorama + hesap kartı + profil paneli + büyük düğmeler)
geri gelsin; o sürümün ve 1.0.0'ın bilinen hataları tekrarlanmasın; 595 ölçümünün dayandığı oyun içi
kod yolu **değişmesin**.

### Ne yapıldı

| Dosya | Ne yapıyor |
|---|---|
| `YikimMainMenu.java` (463) | Menünün tamamı: yerleşim, çizim, tıklama listesi, 7 düğme + 3 kısayol, hesap/profil kartı, alt şerit |
| `YikimBackdrop.java` (454) | Kod çizimli panorama: Gün Batımı, Yıldızlı Gece, Kutup Işıkları, Neon Izgara, Okyanus Derinliği, Kiraz Baharı + **Rastgele** |
| `YikimMenuIcons.java` (182) | 12 piksel ikon (8×8 bitlem, yatay diziler tek dolumda) — **doku dosyası yok** |
| `YikimDraw.java` | Ortak ilkeller: `roundedFill`, `verticalGradient`, `horizontalGradient`, `outline`, `clip`, `blend` |
| `YikimAdapter` ×5 | Sürüm fabrikaları: `titleScreen()`, `vanillaTitleScreen()`, `worldSelectScreen()`, `multiplayerScreen()`, `optionsScreen()` + `TitleScreenBase` (girdi imzaları sürüme özel) |
| `YikimClient.java` | Mixin'siz ekran takası: tik içinde `screen instanceof TitleScreen` → YIKIM menüsü |
| `YikimConfig.java` | İki yeni ayar: `menu.yikim` (varsayılan **açık**), `menu.arka` (varsayılan `random`) |
| `YikimPanel.java` | `open(client, sekme)`; Sistem sekmesinde "YIKIM ana menüsü" anahtarı + "Arka plan: …" düğmesi |
| `YikimKeys.java` | Ana menüden açılan panel kapanırken dünyada değilsek **boş ekran yerine** başlık ekranına dönüyor |

**Neden mixin yok:** ekran takası Fabric'in olay/tik yolundan yapılıyor; `ScreenEvents` bile
gerekmedi (tik içi `instanceof` yeterli ve ilk kareden önce koşuyor). Menü kurulamazsa `try/catch`
vanilla menüyü korur — oyun hiçbir durumda "açılmaz" hâle gelmez.

**Daha güzel olan taraf (v0.12.0'a göre):** 6 tasarımlı kod çizimli panorama (her açılışta rastgele),
yumuşatılmış köşeli kartlar, vurgu→ikincil renk geçişli başlık çizgisi, hover'da vurgu dolgusu +
ikon plakası + sol şerit, monogram avatar kutusu, sağ kartta başlatıcı profili/JVM/bellek/görüş/
**ölçülen FPS**/mod sayısı ve dönen ipucu, altta kısayol çipleri (Vanilla menü • Arka plan • HUD),
alt şeritte sürüm/Minecraft/Fabric/FPS. Menü başlatıcı temasına canlı bağlı (tema değişince renk döner).

### Eski sorunlar tekrarlanmasın diye

| Eski sorun | Bu sürümde karşılığı |
|---|---|
| Mod ↔ başlatıcı ayar çakışması | Menü **hiçbir oyun ayarını** yazmaz; yalnızca kendi `config/yikimlient.cfg` dosyasını. Profil yazma işi hâlâ panelde ve yalnızca oyuncu isterse |
| Tıklama alanının çizimden kayması | Anında mod: çizilirken kaydedilen tek bir `hits` listesi geriye doğru taranır |
| Esc / boş ekranda kalma | Esc menüyü kapatmaz, yol gösterir; panel ana menüden kapanırsa başlık ekranına dönülür |
| Dar pencerede taşma/kesilme | Tüm ölçüler ekrandan hesaplanır; sığmayan satır/ipucu/kısayol düşer. 12 pencere boyutunda taşma yok (aşağıda) |
| HUD ile üst üste binme | HUD yalnızca `player != null && level != null` iken çizilir; ana menüde HUD yok |
| Doku/atlas yükü ve sürüm kırılması | Doku yok, mixin yok, ağ yok; her sürüm farkı yalnızca adaptörde |

### Kanıtlar

* **Derleme:** 5 sürüm de derlendi (`scripts/build-mod.sh`), manifest doğrulandı.
  `yikimlient-1.1.0+1.21.1.jar` 108.493 B `557ef54a…` • `+1.21.4` 108.536 B `51bd7c4b…` •
  `+1.21.8` 108.547 B `594b0dd7…` • `+1.21.10` 108.746 B `292e6737…` •
  **`+1.21.11` 108.738 B `7b3db82bc13cef20462594dee1b354e515991c6720dab2bd9c6a72d0676352f3`**.
* **Taban kıyası (`.perf-lab/verify-baseline.mjs`, 595 jar'ına karşı):** 6 beklenen yeni sınıf
  (`YikimMainMenu`, `$Button`, `$Hit`, `YikimBackdrop`, `YikimMenuIcons`, `YikimAdapter$TitleScreenBase`)
  ve 6 beklenen değişiklik (`YikimAdapter`, `YikimClient`, `YikimConfig`, `YikimDraw`, `YikimPanel`,
  `YikimKeys`). **`YikimHud`, `YikimLayout`, `YikimMetrics`, `YikimWidgets`, `YikimWidget`,
  `YikimPresets` tabanla birebir aynı** — 595 ölçümünün dayandığı kare hızı yolu değişmedi.
* **Yerleşim taraması (yeni `.perf-lab/menu-yerlesim.mjs`):** 320×180'den 1920×1080'e 12 boyut,
  hepsi "temiz" (düğme bloğu/kısayol/yan panel/uyarı şeridi hiçbirinde alt şeride taşmıyor).
  Örnek satırlar: 426×240 → tek kolon 18 px düğme; 480×270 → yan panel 3 satır + ipucu;
  640×360 → düğme 28 px + kısayollar; 1280×720 → 30 px düğme, 5 satır + ipucu.
* **Paket (yeni `.perf-lab/paket-mod-kontrol.mjs`):** 26 kontrol yeşil — hem
  `dist/win-unpacked/resources/mods` hem `app.asar` içi kopya repo jar'ıyla **birebir aynı**, bayat
  (1.0.0) jar kalmadı, asar başlığındaki bütünlük kayıtları tek tek doğrulandı.
* **Kapılar:** `YIKIM_DEFAULTS_CHECK`, `YIKIM_SERVER_CHECK`, `YIKIM_PACK_CHECK`, `YIKIM_LINK_CHECK`
  → hepsi yeşil; raporlar `_arsiv-baseline-595/kanit/gate-*-20260926.txt`.
* **Paket künyesi:** `app.asar` sha `c7e38e2b458d52df387c6c4dc2962450a897fdd845cddf20d782694376ef459e`
  (10.207.733 B); `out/main/index.js` değişmedi (`01c24e96…`); asar giriş sayısı 134 (aynı).
  Çalıştırılacak dosya aynı: `dist/win-unpacked/YIKIMLient.exe`.

### Oyuncunun bir sonraki açılışında

Başlatıcı, instance'ın `mods/` klasöründeki eski `yikimlient-1.0.0+1.21.11.jar`'ı silip yenisini
kopyalar (eski jar `_arsiv-mod-jars/` altında duruyor). Oyun açıldığında vanilla başlık ekranı
*yerine* YIKIM menüsü gelir; ilk karede bile vanilla görünmez. Menüden: Tek Oyunculu, Çok Oyunculu,
YIKIM Menüsü (panel), HUD'u düzenle, Katalog, Ayarlar (vanilla ayar ekranı), Çıkış; altta
"Vanilla menü" / "Arka plan: …" / "HUD açık-kapalı" kısayolları. Sağ Shift her yerden YIKIM panelini
açar (ana menüden de).

**Hâlâ oyuncunun gözü gereken tek şey:** oyunu bu ortamdan açamadığım için *görsel* sonucu ben
göremiyorum. Yerleşim matematiği 12 boyutta denetlendi, ama zevk kısmı senin: arka plan tasarımını
kısayoldan/panelden değiştirebilirsin, beğenmezsen tek anahtarla vanilla menüye dönebilirsin.

### Geri alma (üç kademe)

1. **Menüden:** alttaki "Vanilla menü" çipi bu oturum için vanilla'ya döner.
2. **Kalıcı:** YIKIM paneli → Sistem → "YIKIM ana menüsü" kapatılır (sonraki açılış vanilla).
3. **Tümüyle 1.0.0:** `_arsiv-mod-jars/yikimlient-1.0.0+*.jar` dosyalarını `resources/mods/` ve
   `dist/win-unpacked/resources/mods/` altına geri koyup manifest'i eski hâline döndürmek, sonra
   `_arsiv-baseline-595/asar-ana-menu-oncesi/app.asar` dosyasını
   `dist/win-unpacked/resources/app.asar` üzerine kopyalamak yeterli (eski paket sha `1f8332dc…`).
   Kaynak ağacında yeni üç dosyayı silmek + `YikimClient/Config/Panel/Keys/Draw` ve 5 adaptördeki
   eklemeleri geri almak da mümkün; jar'lar arşivde olduğu için derleme şart değil.

**Yeni araçlar:** `.perf-lab/menu-yerlesim.mjs`, `.perf-lab/paket-mod-kontrol.mjs`;
`verify-baseline.mjs` artık "beklenen/beklenmeyen fark" ayrımı yapıyor ve taban jar'ını
`_arsiv-baseline-595/baseline-mod-jars/` altından okuyor.

---

## §23 — "GUI kare hızını düşürüyor": iddianın ölçümü ve arayüz maliyetinin sıfıra indirilmesi

**Şikâyet (26 Eylül, 13:1x):** yeni ana menü ve Sağ Shift paneli kare hızını düşürüyor, oyun 200 FPS'i
geçmiyor, ikisi de görsel olarak kötü. İstenen üç şey: (1) iddiayı kanıta bağla, (2) GUI'nin kare
hızına etkisini pratikte sıfıra indir — davranış aynı kalsın, (3) iki menüyü belirgin biçimde daha iyi yap.

### 1) Kanıt: iki oturumun ölçüm satırları

| Oturum | Zaman · kanıt | Görüş | FPS satırı | HUD | YIKIM tik | Mod |
|---|---|---|---|---|---|---|
| Önceki (menüsüz) | 11:52–11:58 · `logs/2026-09-26-1.log.gz` | 6–16 chunk | 471–627 FPS (ort 349–617) | 0.05–0.07 ms | 0.127–0.175 ms | 107 |
| Yeni (menülü) | 13:09–13:10 · `logs/latest.log` | 8 chunk | 186 FPS **(57/143/200)**; önceki pencere 5 FPS | 0.18 ms | 0.440 ms | 114 |

**Kritik ayrıntı: o pencere oyun *ölçüm* penceresi değil, sunucuya katılma penceresi.**

```
[13:09:40] Connecting to yikimdara.com.tr, 25565
[13:09:42] Stopping worker threads
[13:10:00] Stopping worker threads
[13:10:01] Reloading ResourceManager: … server/00000000/a1b2c3d4-…    ← sunucu kaynak paketi
[13:10:14] Performans: 186 FPS (30 sn: en düşük 57 • ort 143 • en yüksek 200) • HUD 0.18 ms • YIKIM tik 0.440 ms
[13:10:24] Reloading ResourceManager: … (ikinci kez)
[13:10:33] Stopping!
```

143'lük ortalamanın içinde dünya yükleme, sunucu kaynak paketinin iki kez baştan yüklenmesi ve chunk
akışı var; oyuncu 13:10:33'te oyunu kapattığı için **değişiklikten sonra tek bir sakin (oturmuş)
pencere yok**. Bu satır bu yüzden ne GUI lehine ne aleyhine kanıttır. "200'ü geçmiyor" gözlemi de tam
olarak yeniden yükleme penceresinin üstüne düşer: iki `Reloading ResourceManager` arasında kare
üretimi doku yüklemeleriyle ~200'de tutulur.

Ayrıca o oturumda mod sayısı 107 → 114 oldu; fark tam olarak §21'de eklenen dört mod:
`betterblockentities`, `fzzy_config`, `modernfix`, `particle_core`. **Ölçülen iki sayı GUI'yi işaret
etmiyor** (HUD 0.18 ms, tik 0.44 ms). Kare hızı farkının duran adayı o dört moddur; ayrımı ancak yeni
bir **sakin** oturum gösterebilir.

**"Sürekli tekrar eden bir şey var mı?" araması:** `latest.log` 316 satır — YIKIM'a ait tekrar eden
satır **yok** (en çok tekrar eden satırlar vanilla atlas/worker satırları). Modda zamanlayıcı, iş
parçacığı ya da kare dışı döngü de yok. Buna karşılık `launcher.log`'ta aynı milisaniyede **çift**
satırlar var (`oyun hazır işareti geldi` 10:09:00.053 **ve** .057; katalog aramaları hep çift yazılmış)
ve `auth me` araması dört kez (10:09:20/30/32/53). Bu, başlatıcı tarafında (asar içindeki
`out/main/index.js`) çift kayıt/çift istek şüphesi — **bu değişikliğin kapsamı dışında** ve kök nedeni
bulunmadı; ayrı iş olarak duruyor.

### 2) Satır satır denetim: bulunan maliyet kalemleri

| # | Kalem | Nerede | Kanıt | Bu turda |
|---|---|---|---|---|
| 1 | Kare başına tam ekran arka plan: vinyet 12 bant, ≤160 yıldız, 2–3 katman tepe (kolon başına `roundedFill` = 3 dolum + rim), güneş/ay halkaları (yarıçap = yükseklik/22 → 1080 px'te 49 satır), `grid`'de çizgi başına ≤120 dolum | `YikimBackdrop` (+`YikimDraw`) | **ölçüldü**: 579–5690 dolum/kare (aşağıda) | kare başına 51–145 dolum, kare içi hesap sıfır |
| 2 | **Kare başına disk okuma**: `profile-choice.json` → `Files.exists` + `Files.readString` + JSON | `YikimPresets.currentId()`, çağıranlar: panel "Aktif profil" satırı, ana menü yan kartı | kod yolu: her karede `currentId()` | 2 saniyelik önbellek + seçim anında geçersiz kılma |
| 3 | **Her tik'te 2 dosya sistemi çağrısı** (`exists` + `getLastModifiedTime`) = saniyede ~40 | `YikimTheme.sync()` (her istemci tik'i) | kod yolu: tik başına 2 çağrı | saniyede bir denetim (`forceSync` anında çalışır) |
| 4 | Kare başına ayırma: `String.format`, `String` birleştirme, `wrap()` (ArrayList+StringBuilder+split), ~10 `Hit` kaydı, 4 kez büyük yazı (parıltı 3 fazla geçiş) | `YikimMainMenu.draw` | kod okuması (kare başına ~15 nesne) | hepsi önbellekte; `Hit` nesneleri yeniden kullanılıyor; parıltı tek geçiş |
| 5 | Kare başına ayırma: her tıklama alanı için `new Hit`, 13 satırda `Region.valueOf` (her çağrı `values()` kopyası), 2 `String.format`, `systemLines()` (6 satır + `Runtime`) | `YikimPanel.draw*` | kod okuması (kare başına ~20 nesne + 13 dizi kopyası) | int ile eylem dağıtımı, etiket anahtarı, 500 ms önbellek |
| 6 | HUD yerleşimi her karede: liste + `EnumMap` + sıralama | `YikimLayout.arrange` (HUD her karede çizilir) | kod okuması; 600 FPS'te saniyede 600 kez | 250 ms önbellek + ayar değişince geçersiz kılma (saniyede ≤4) |
| 7 | Sürekli çalışan animasyon/zamanlayıcı/tekrar eden log | tüm arayüz | log taraması + kod okuması: yok | (bulunmadı; arka plan animasyonu en fazla 26 öğe) |
| 8 | Ekran kancalarında fazladan iş | 5 adaptörün `TitleScreenBase`/`ScreenBase` sınıfları | `grep`: 5 adaptör × 4 çağrı = 20 — her kancada **tek** delege çağrısı (`render` → `menu.draw`/`panel.draw`, `tick` → `menu.tick`/`panel.tick`, `init` → `onResize`) | kanca başına iş yok, değişiklik gerekmedi |
| 9 | Kare başına doku/font oluşturma | tüm mod | kaynak taraması: `new Font`, `NativeImage`, `loadTexture`, `TextureManager`, `ImageIO` ve `RenderSystem` çağrısı **yok** (tek eşleşme `YikimVideo`'daki bir yorum satırı) | (bulunmadı) |

### 3) Düzeltmenin ölçüsü: önce / sonra (yeni tezgâh)

Yeni araç: `.perf-lab/arka-plan-bench/` — gerçek jar'ı **değiştirmeden** yükler, `method_25294`
(dolum) çağrılarını sayan sahte bir çizim yüzeyi verir. Ölçülen şey modun oyunda çalışan kodu;
kopyalanmış bir formül değil.

```
node .perf-lab/arka-plan-bench/calistir.sh [jar]      # 12 pencere boyutu × 6 tasarım
.perf-lab/arka-plan-bench/png-uret.sh <jar> <klasör>  # tasarımları PNG'ye çizer
```

| Tasarım | Önce (paketteki jar) | Sonra | Kat |
|---|---|---|---|
| Gün Batımı | 710–1161 | **131–145** | ~8× |
| Yıldızlı Gece | 698–1035 | **118–123** | ~8× |
| Kutup Işıkları | 579–751 | **92–104** | ~7× |
| Neon Izgara | 1604–**5690** | **69–82** | ~70× |
| Okyanus Derinliği | 1181–1905 | **51–51** | ~37× |
| Kiraz Baharı | 643–933 | **106–112** | ~8× |

* Ölçülen en kötü tasarım **5690 → 145 dolum/kare** (39×).
* Önce ekran dışına taşan dolum: 1999–13141 (12 boyut toplamı). Şimdi **0** (dolum ekrana kırpılıyor).
* Önce `sunset` tasarımında kare başına 4 görünmez (alfa 0) dolum vardı; şimdi **0**.
* Önbellek denetimi: ilk kare ile ısınmış kare sayıları aynı (geometri gerçekten bir kez hesaplanıyor).
* Bütçe `YikimBackdrop.FRAME_BUDGET = 160`; en kötü tasarım 145 → bütçe içinde.
* Kanıt dosyaları: `_arsiv-baseline-595/kanit/arayuz-dolum-once.txt`, `arayuz-dolum-sonra.txt`.

### 4) Yeni teşhis satırı (kanıt oyuncunun kendi oturumunda da yazılacak)

Yalnızca bir YIKIM ekranı çizilen kareler sayılır; dünyada oynarken log kirlenmez. 30 saniyede bir,
menü/panel açıkken tek satır:

```
YIKIM arayüz: ana menü 612 kare • ort 0.09 ms • en yüksek 0.34 ms • 96 dolum/kare
YIKIM arayüz: YIKIM paneli 480 kare • ort 0.06 ms • en yüksek 0.21 ms
YIKIM arayüz UYARI: tek kare 3.20 ms (ana menü) — çizim bütçesi aşıldı      (yalnızca aşılırsa)
```

(Bu satırlar örnektir; sayılar oyuncunun oturumunda ölçülür. Ben oyunu bu ortamdan açamıyorum —
aşağıdaki "ölçülmeyenler" bölümüne bakın.)

### 5) Görsel iş — iki menü de yeniden tasarlandı

**Ana menü:** arka plan altı tasarımın hepsi baştan yazıldı (gökyüzü 10–14 bantlı geçiş, ufuk
parlaması, kırpılmış güneş/ay, 2 katman bloklu tepeler + aydınlık üst çizgi, sınırlı hareket katmanı:
yıldız/kar/taç yaprağı/baloncuk/bulut/parıltı). Menü gövdesi: kelime markası **tek** parıltı geçişi +
vurgu karesi, markanın altında tam genişlikte vurgu→ikincil renk geçişi, sağ üstte hesap çipi
(monogram + ad), düğmelerde koyu degrade zemin + ince çerçeve + ikon çipi + sol vurgu şeridi (vurgu
rengi artık koca bir renk bloğu değil, kenar ve şerit), altta pill biçimli üç kısayol, yan kartta
ayraçlı satırlar ve kare hızına göre renklenen durum noktası, alt şeritte tuş çipi ("Sağ Shift").

**Panel:** başlık şeridi (başlık + "Sağ Shift: kapat" + vurgu alt çizgisi), sekme şeridi (etkin
sekmede 2 px vurgu çizgisi, üzerine gelince 1 px), içerik alanı çerçeveli ve hafif koyu zemin
(yazılar arka planda kaybolmuyor), her bölümde vurgu renkli bölüm başlığı + ayraç, HUD listesinde
satır üzerine gelme vurgusu, alt şeritte bağlama göre ipucu.

**Bu işin görsel kanıtı:** `.perf-lab/arka-plan-bench/png-uret.sh` ile arka planın altı tasarımı
modun **gerçek çizim koduyla** PNG'ye çizildi — önce/sonra yan yana
`.perf-lab/arka-plan-bench/onizleme.html` (Preview sekmesinde açık). Örnek: eski `grid` tasarımı
ufkun altını hiç doldurmuyordu (960×540'ta tamamen siyah, kare başına 1604–5690 dolum); yenisi
zemin + ızgara + kaçış noktası çiziyor ve 69–82 dolum ediyor.

> **Dürüst sınır:** bu ortamda Minecraft açılamıyor, bu yüzden metin/düğme katmanının son hâlini
gözle görmedim; PNG kanıtı yalnızca arka plan katmanını içerir (o katman tamamen dolumdan oluşur,
bu yüzden birebir). Beğeni kararı oyuncunun: tasarım menüden ve panelden değiştirilebilir.

### 6) Kapılar, paket, geri alma

* **Beş sürüm yeniden derlendi** (1.21.1/1.21.4/1.21.8/1.21.10/1.21.11) — 5/5 `BUILD SUCCESSFUL`,
  manifest doğrulandı. Jar boyutları 116.922–117.175 B (önce 108.493–108.746 B).
  `+1.21.11` sha `c8c6665d631d415c…` (önce `7b3db82bc13cef20…`).
* **Paket yeniden üretildi:** `dist/win-unpacked/resources/mods` (gevşek) + `app.asar` içindeki
  kopya aynı jar'larla güncellendi; asar sha `7aa9cf191a76e26a…` (10.249.878 B, 134 giriş).
  Asar'ın içeriği bozulmasın diye önce **çıkarıldı**, yalnızca `resources/mods` değiştirildi ve
  yeniden paketlendi (launcher JS'e dokunulmadı).
* **Yerleşim taraması** (`menu-yerlesim.mjs`): formül özeti `ea5f99f76f45a139` (beklenen, yani
  yerleşim bloğu bilinçli olarak değişmedi) ve 12 pencere boyutunun tamamı "temiz".
* **Taban kıyası** (`verify-baseline.mjs`): 19 beklenen fark, **0 beklenmeyen**, 0 eksik sınıf.
  Yeni: `YikimUiMetrics`, `YikimBackdrop$IntList`. Değişen: `YikimBackdrop`, `YikimMainMenu`,
  `YikimPanel`(+`$Hit`), `YikimMenuIcons`, `YikimDraw`, `YikimLayout`, `YikimPresets`,
  `YikimTheme`, `YikimClient`, `YikimMetrics` (yalnızca gömülü sürüm sabiti 1.0.0 → 1.1.0).
* **Paket denetimi** (`paket-mod-kontrol.mjs`): 29/29 — gevşek klasör ve asar içi kopya repo ile
  birebir, bayat jar yok, asar bütünlük kayıtları doğrulandı.
* **Kapılar** (kanıt: `_arsiv-baseline-595/kanit/gate-*-20260926-v0121.txt`):
  `YIKIM_PACK_CHECK` 16 kontrol geçti · `YIKIM_LINK_CHECK` TÜM KONTROLLER GEÇTİ (hem repo `out/`
  hem **paketlenmiş exe**) · `YIKIM_SERVER_CHECK` TÜM KONTROLLER GEÇTİ · `YIKIM_DEFAULTS_CHECK`
  6 senaryo, çıktısı önceki kanıtla **birebir aynı** (diff: yalnızca sürüm satırı).

**Geri alma (dört kademe, en hafiften en ağıra):**

1. **Yalnızca ana menü:** panel → Sistem → "YIKIM ana menüsü" kapatılır (sonraki açılışta vanilla);
   ya da menüdeki "Vanilla menü" çipi (bu oturumda).
2. **Yalnızca arka plan:** menü çipinden/panelden başka tasarıma geçilir (`menu.arka`); görsel bir
tasarım bozuksa diğer beşi etkilenmez.
3. **Menü + panel kodu eski hâline:** `_arsiv-baseline-595/menu-perf-oncesi-jars/*.jar` ve
   `manifest.json` dosyalarını `resources/mods/` **ve** `dist/win-unpacked/resources/mods/` altına
   kopyalayıp `_arsiv-baseline-595/asar-menu-perf-oncesi/app.asar` dosyasını
   `dist/win-unpacked/resources/app.asar` üzerine yazmak yeterli (eski menülü sürüm: sha
   `7b3db82b…`, asar `c7e38e2b…`). Oyuncunun instance'ındaki jar'ı da değiştirmek gerekirse
   `%APPDATA%\yikimlient\game\instances\1-21-11-1c7ec7\mods\` altına aynı dosya kopyalanır.
4. **Kaynak ağacı:** bu turda değişen dosyalar `YikimBackdrop`, `YikimMainMenu`, `YikimPanel`,
   `YikimMenuIcons`, `YikimDraw`, `YikimLayout`, `YikimPresets`, `YikimTheme`, `YikimClient`
   (+ yeni `YikimUiMetrics`); `_arsiv-baseline-595/baseline-mod-jars/` tabanından geri alınabilir.
   Tek başına kare maliyeti geri alınmak istenirse: `YikimBackdrop.FRAME_BUDGET` bütçesi ve
   önbellek kodu, `YikimLayout`'un 250 ms önbelleği, `YikimPresets`/`YikimTheme` önbellekleri —
   üçü de davranışı değiştirmeyen, birbirinden bağımsız parçalar.

### 7) Ölçülmeyenler (ölçülmüş gibi sunulmayanlar)

* **Değişiklikten sonra oyun içi FPS ölçülmedi.** Oyun bu ortamdan açılamıyor; elimde yalnızca
  kullanıcının eklediği 13:09–13:10 oturumu var ve o pencere bir katılma penceresi (yukarıda).
  "GUI'nin etkisi pratikte sıfır" iddiası iki ölçüye dayanır: kare başına **dolum sayısı** (ölçüldü,
  51–145) ve bir sonraki oturumda yazılacak **`YIKIM arayüz` ms satırı** (henüz yok).
* **Ölçülen 143 FPS'in nedeni bulunmadı.** Duran aday: 107 → 114 mod farkı (4 mod). Ayrım için
  sakin bir oturum ya da o dört mod kapalı bir karşılaştırma gerekir.
* **Metin/düğme katmanının görsel sonucu** gözle doğrulanmadı (PNG tezgâhı yalnızca dolum tabanlı
  arka planı çizer).
* **`launcher.log` çift satır / yinelenen `auth me`** kök nedeni bulunmadı; başlatıcı tarafı, ayrı iş.
* **C2ME'nin neden geri açılmadığı** hâlâ bilinmiyor (instance'ta `.disabled` olarak duruyor);
  başlatıcı logu 10:08:27'de "geri açıldı" diyor, 10:08:28'de uyumluluk denetimi tekrar kapatıyor.
  Bu turda dokunulmadı.

---

## §24 — Çökme analizi · arayüz v0.12.0 diline döndü · katalog araması düzeltildi (26 Eylül akşamı)

**İstek (üç iş + bir koşul):**

1. "OBS açtım, biraz bekledim ve çöktü — logu oku."
2. "Modun arayüzünü 0'dan başlamadan önceki hâle getir; Sağ Shift kötü/sıradan/boş, arayüz çok geniş,
   arka plan görünmüyor, ana menüden Sağ Shift'e erişemiyorum."
3. "Mod aratma kısmı çalışmıyor düzgün."
4. Koşul: "performansı bozmadan."

### 1) Çökme: log ne diyor

Kaynak: `%APPDATA%\yikimlient\game\instances\1-21-11-961e86\hs_err_pid28608.log` (644 KB, 14:53:20).

| Alan | Değer |
|---|---|
| Hata | `EXCEPTION_ACCESS_VIOLATION (0xc0000005)` — okunamayan adres `0x00007ff841a6d550` |
| Kusurlu çerçeve | `C [nvapi64_impl.dll+0x2eb399]` |
| Modül yolu | `…\DriverStore\FileRepository\nvlti.inf_amd64_75965d6cb5bad038\nvapi64_impl.dll` (NVIDIA sürücü bileşeni) |
| İş parçacığı | `Render thread` (id 14484, pc `0x00007ff8309fb399`) |
| Java yığını | `org.lwjgl.system.JNI.invokePV` ← `Window.updateDisplay` ← ana döngü (`class_310.method_1523/1514`) |
| Ömrü | 248,2 saniye (4 dk 8 sn) · Temurin 21.0.12.1 · Windows 11 26100 |

* Çökme **JVM'in dışında, NVIDIA'nın NVAPI kitaplığında**; pencereyi ekranda güncelleme çağrısı yapılırken.
* **YIKIM modu yığının hiçbir yerinde yok:** `hs_err` içinde "yikim" araması yalnızca başlatıcı bayraklarını
  (`-Dyikimlient.launcher…`, natives yolları) buluyor; Java ve native çerçeve listelerinde tek bir YIKIM
  sınıfı yok. Yani bu, "mod çöktü" değil, "sürücü çöktü".
* **Zaman çizelgesi OBS'i işaret ediyor:** 14:52:30 performans satırı en yüksek **619 FPS**; 14:53:01'deki
  satır 30 saniyenin en düşüğünü **118 FPS** gösteriyor (bir şey ağır yük bindirdi — OBS'in açılışı/çengeli);
  14:53:11 son normal log (`Flushed changes`); 14:53:20 çökme. OBS'in oyun yakalama/NVENC yolları NVAPI'yi
  kullanır; çökme tam o sırada NVAPI içinde.
* **Yapılabilecek (makine ayarı, senin kararın):** sürücüyü temiz kurulumla güncellemek; OBS'te oyun yakalama
  yerine pencere/ekran yakalamayı denemek; çökmeden sonra oyunu kendiliğinden yeniden başlatmak (bu turda
  **yapılmadı**).

### 2) Arayüz v0.12.0 diline döndü

§23'ün "geniş, süslü" menüsü yerine **v0.12.0'ın dar/tek kolonlu dili** (`_arsiv-v0.12.0/mod-src` referansı)
modun kendi koduna yeniden yazıldı — doku ve mixin yine yok.

| Parça | Şimdi |
|---|---|
| Ana menü | Dar kolon: genişlik `min(360, max(200, ekran/3))`; kenar boşluğu 12/24; alt şerit 20 px; logo dikey konumu `max(kenar boşluğu, yükseklik×0.10)` |
| Ana menü düğmeleri | 7 düğme (Tek Oyunculu, Çok Oyunculu, **YIKIM Menüsü**, **HUD'u düzenle**, **Modlar**, Ayarlar, Çıkış) + 3 kısayol çipi; ≥640 px'te sağda "SEN" kartı |
| Sağ Shift | **Düzeltildi:** `GLFW_KEY_RIGHT_SHIFT` (344) → `YikimPanel.open(…, TAB_PERFORMANCE)`. Kullanıcının bildirdiği "ana menüden erişemiyorum" durumu buydu; ayrıca menüdeki "Modlar" düğmesi yanlış sekme indeksini (3 = Sistem) açıyordu. 345 Sağ Ctrl → HUD, 346 Sağ Alt → profil |
| Panel | Baştan yazıldı: 6 sekme (`Performans/Görünüm/HUD/Ekstra/Modlar/Sistem`), **tek sütun satır listesi** (`Row` + `SectionRow/PresetRow/SegmentRow/ValueRow/TextRow/ToggleRow/SliderRow/ButtonRow/GraphRow/WidgetRow/CatalogRow`), sürüklenebilir kaydırma çubuğu, dar pencerede sekme etiketleri gizlenir |
| Panel zemini | Arkası `0x8C000000` ile karartılıyor; ana menü artık dar olduğu için arka plan tasarımı görünüyor |
| Panelden çıkış | Sağ Shift'e ikinci kez basmak paneli kapatır (`Panel.close()`); Esc de boş ekran bırakmaz — dünyadaysa oyuna, değilse menüye döner |
| Kare maliyeti | Kare içi ayırma ve kare içi **disk okuma yok**; `rebuild()` yalnızca durum değişince (sekme, kaydırma, katalog sürümü, tıklama) çalışır |

### 3) Katalog araması

* Yazan kişi **her tuşta** launcher'a istek yazıyordu; `launcher.log` onlarca aynı satırla doluydu
  (`"auth me" → 1/1` tekrarları) ve panel açılışında da boş arama tetikleniyordu.
* Şimdi: `YikimCatalog` **420 ms debounce** (`markDirty/revision/ensureResults`) — yazma durunca **tek** istek;
  aynı sorgu + sonuç duruyorsa istek hiç yazılmaz.
* Boru hattının kendisi zaten sağlamdı (kanıt: instance `.yikim/catalog-request.json` → `catalog-response.txt`
  `total: 1` + `auth-me` satırı). Görünen "çalışmıyor" hâlinin iki nedeni vardı: **yanlış sekme indeksi** ve
  **tuş başına istek**; ikisi de düzeldi.
* `launcher.log`'daki çift satır / onlarca kez yinelenen arama kökü hâlâ bulunmadı (başlatıcı tarafı, açık iş);
  debounce mod tarafındaki tekrarı keser.

### 4) "Illegal option value 4 for Simülasyon Mesafesi" düzeltmesi

PvP profili simülasyon mesafesini 4 yazıyordu; vanilla alt sınırı 5. `YikimPresets` artık profili 5 yapıyor ve
`apply()` içinde vanilla alt sınırlarına kırpıyor (görüş ≥2, simülasyon ≥5). Böylece profil uygulanırken
komut hatası doğmuyor.

### 5) §23'te açıklanamayan üç tek-kare WARN'i

Kullanıcının 14:49–14:53 oturumunda üç tek-kare uyarısı var ve zaman damgaları olaylarla birebir örtüşüyor:

| Saat | Satır | Örtüştüğü olay |
|---|---|---|
| 14:50:22 | ana menü 401 kare · ort **0.53 ms** · en yüksek **24.48 ms** | Oyun açılışının ilk kareleri (14:49:57 "Game took 44.8 s") — atlas/JIT ısınması |
| 14:50:52 | panel 304 kare · ort **0.14 ms** · en yüksek **4.96 ms** | Panelin ilk açılışı (satır listesinin ilk kurulumu) |
| 14:51:22 | panel 1906 kare · ort **0.09 ms** · en yüksek **24.30 ms** | Kaynak yeniden yükleme döngüsü (14:51:13 worker threads yeniden başladı) |

Yani uyarılar tek karelik ısınma/yeniden yükleme çerçeveleri; ortalamalar 0.09–0.53 ms ve eşik 2 ms.
(Kesin kanıt değil: zaman damgası örtüşmesi + ortalama/en yüksek dağılımı.)

### 6) Kanıtlar

* **Derleme:** 5 sürüm `BUILD SUCCESSFUL` (log: `_arsiv-baseline-595/build-v0122.log`); jar boyutları
  **142.237–142.485 B** (önce 116.922–117.175 B). `+1.21.1` `16daa5bf…` • `+1.21.4` `f07acf19…` •
  `+1.21.8` `84976d77…` • `+1.21.10` `589c1b58…` • **`+1.21.11` `7dd8a934353e64c6…`**; `manifest.json` `77fad821…`.
* **Paket yeniden üretildi:** `dist/win-unpacked/resources/mods` (gevşek) ve `app.asar` içi kopya yeni jar'larla
  güncellendi. asar **`9f3c5a965aa6c6c3…`** (10.376.449 B). asar bir kez çıkarıldı, yalnızca `resources/mods`
  altındaki **6 dosya** değiştirildi ve yeniden paketlendi; `diff -rq` iki çıkarmada **yalnızca** o 6 dosyayı
  gösteriyor (launcher JS'e dokunulmadı), dosya sayısı 115 → 115.
* **Paket denetimi** (`paket-mod-kontrol.mjs`): **29/29** — iki kopya repo ile birebir, bayat jar yok, asar
  bütünlük kayıtları doğrulandı, jar'larda `YikimMainMenu`/`YikimBackdrop`/`YikimMenuIcons` var, mixin yok.
* **Taban kıyası** (`verify-baseline.mjs`): **32 beklenen fark, 0 beklenmeyen, 0 eksik sınıf** — "YALNIZCA
  BEKLENEN FARKLAR — kare hızı yolu (HUD/ölçüm/profil) tabanla aynı". Yeni 12 satır sınıfı (`YikimPanel$Row`,
  `…$CatalogRow`, `…$GraphRow`, `…`), kalkan `$Hit`, değişen `YikimPanel`/`YikimMainMenu`/`YikimCatalog`/
  `YikimUiMetrics`/`YikimPresets`/`YikimAdapter$ScreenBase` (panel aç/kapa yolu).
* **Yerleşim taraması** (`menu-yerlesim.mjs`): imza `076830eab7015f7f` (beklenen), 12 pencere boyutu "temiz".
* **Kapılar** (kanıt: `_arsiv-baseline-595/kanit/gate-*-20260926-v0122.txt`): `YIKIM_PACK_CHECK` 16 kontrol
  (v0121 çıktısıyla **birebir aynı**), `YIKIM_LINK_CHECK` TÜM KONTROLLER GEÇTİ (hem repo `out/` hem
  **paketlenmiş exe** — bu koşu yeni asar'ı da doğruladı), `YIKIM_DEFAULTS_CHECK` birebir aynı (0 HATA),
  `YIKIM_SERVER_CHECK` TÜM KONTROLLER GEÇTİ.
* **Diğer kanıt dosyaları:** `kanit/paket-mod-kontrol-20260926-v0122.txt`, `kanit/taban-kiyas-20260926-v0122.txt`,
  `kanit/arayuz-yerlesim-20260926-v0122.txt`.

### 7) Oyuncunun bir sonraki açılışında

* Başlatıcı, instance'taki jar'ı boyut farkından dolayı değiştirir: eski `yikimlient-1.1.0+1.21.11.jar`
  **117.167 B** → yeni **142.478 B**. (Eski §23 jar'ı `_arsiv-baseline-595/menu-perf-sonrasi-jars/` altına
  kurtarıldı; başka hiçbir yerde kopyası yoktu.)
* Sağ Shift artık **ana menüden de** paneli açar; panel 6 sekmeli dar düzen; Modlar sekmesinde yazı yazıp
  bırakınca ~0.4 sn sonra tek arama gider.
* Test dosyası değişmedi: `dist\win-unpacked\YIKIMLient.exe` (launcher 0.10.1).

### 8) Geri alma (kademeler)

1. **Menüden/panelden:** "Vanilla menü" çipi, başka arka plan tasarımı, Sistem sekmesindeki anahtarlar.
2. **Bu turdan §23 arayüzüne:** `_arsiv-baseline-595/menu-perf-sonrasi-jars/yikimlient-1.1.0+1.21.11.jar`
   (yalnız 1.21.11 kurtarıldı; diğer dört sürüm arşivlenmemişti — gerekirse kaynaktan derlenir). §23 asar'ının
   kendisi (`7aa9cf19…`) değiştirilmeden önce arşivlenmedi; eşdeğeri, §23 jar'ları bugünkü asar'a konup yeniden
   paketlenerek üretilir (launcher JS aynı).
3. **§22 (geniş/süslü menü) paketine:** `menu-perf-oncesi-jars/` (108.493–108.746 B, `+1.21.11` `7b3db82b…`)
   + `asar-menu-perf-oncesi/app.asar` (`c7e38e2b…`).
4. **Tabana (mod 1.0.0):** `baseline-mod-jars/` + `app.asar` (`ed429dfc…`).
5. **Bu turun kendi yedeği:** `menu-v0120-dili-jars/` (142 KB'lık 5 jar + manifest) +
   `asar-menu-v0120-dili/app.asar` (`9f3c5a96…`).

### 9) Ölçülmeyenler

* Oyun bu ortamdan açılamıyor: yeni menü/panel metin katmanının **görsel** sonucu gözle doğrulanmadı.
  "Performans bozulmadı" iddiası taban kıyası + yerleşim taramasına dayanıyor; **bu yeni jar'la oyun içi FPS
  henüz ölçülmedi** (14:49–14:53 oturumunun 909/619 FPS satırları §23 jar'ına aittir).
* OBS'li çökme **yeniden üretilmedi**; "sürücü kaynaklı" yargısı `hs_err` kanıtına dayanıyor (kesin kök neden
  raporu için NVIDIA/OBS tarafı logu gerekir).
* Panel rebuild'inin kare içi maliyeti ölçülmedi (kod okumasıyla: kare içinde ayırma/disk yok).
* `launcher.log` çift satır / yinelenen arama kökü hâlâ bulunmadı.

---

## §25 — HUD "çip" dili (ilk mod gibi) + öğe başına önbellek · ana menüden "Vanilla menü" kalktı · Discord Rich Presence

**İstek (dört parça):** (1) "hud gene fps düşürdü", (2) ana menüde vanilla ekranı seçeneği olmasın,
(3) HUD ilk moddaki gibi olsun ("bu hali çok düz ve sıkıcı"), (4) YIKIMLient açıkken Discord'da
"YIKIMLient ile oynuyor" rich presence görünsün, logosu da olsun.

### 1) HUD: kare başına hesap → öğe başına önbellek

Kare hızını düşüren şey çizim değil, her karede yeniden yapılan işti. Ölçülen eski yolda her öğe için
kare başına **üç kez** `String.format` + `font.width` çalışıyordu (`draw()` iki kez `width(font)` çağırıyor,
`width()` de `value()`i yeniden hesaplıyordu; ping ayrıca `color()` içinde `value()`yı dördüncü kez üretiyordu).

Yeni sözleşme: içerik öğe başına kendi tazeleme süresinde **bir kez** kurulur ve ölçülür; kare içinde
ne biçimlendirme, ne ölçüm, ne ayırma vardır.

| Tazeleme | Öğeler |
|---|---|
| 100 ms (6 öğe) | fps, cps, koordinat, yön, ping, hedef |
| 500 ms (4 öğe) | fps grafiği, boyut, bellek, **sistem durumu** (yeni, kapalı gelir) |
| 1000 ms (3 öğe) | oturum, gerçek saat, sürüm |
| canlı (1 öğe) | tuş göstergesi (tuşa basıldığı kare görünmeli; etiket genişlikleri bir kez ölçülür) |

Ek olarak FPS grafiği çizimi sütunlara toplandı: eskiden **her örnek bir dolumdu** (120 örnek = 120 dolum/kare),
artık kare başına dolum sayısı en fazla iki piksel başına bir sütun (panel grafiği de aynı ilkeyi kullanıyor).

### 2) HUD görünümü: v0.12.0 çip dili geri geldi

Yeni `YikimChip`: köşeleri kırpılmış cam kart, üstte ince ışık çizgisi, solda turuncu vurgu şeridi,
**küçük BÜYÜK harf başlık + 1.25 ölçekli büyük değer**, altında en fazla iki ayrıntı satırı ve isteğe bağlı
ince çubuk/grafik. Örnekler: `FPS 130 / ort 111 • min 31`, `PING 42 ms / [bar] iyi`, `BELLEK 4096 MB / [bar] 8192 MB ayrıldı`,
`YÖN Kuzey (-Z) / 84° / [bar]`. Değer ve başlık tek satıra alındığı için dört öğe ekranı doldurmuyor.

* Öğe kimlikleri **değişmedi** (fps, grafik, cps, koordinat, yon, boyut, oturum, saat, ping, bellek, hedef,
  surum, tuslar): oyuncunun `config/yikimlient.cfg` dosyası olduğu gibi geçerli, taşıma gerekmiyor.
* Yeni ve **varsayılan kapalı** tek öğe: `Sistem durumu` (sağ alt) — 30 saniyenin en yüksek FPS'i ve ölçülen
  HUD maliyeti. "HUD FPS düşürdü" tartışması artık oyuncunun kendi ekranında okunabilir.
* `YikimWidget.height()` → `height(Font)`: çipin yüksekliği içeriğinden türer (kaç ayrıntı satırı, çubuk var mı).

### 3) Ana menüden "Vanilla menü" çipi kaldırıldı

* Üç kısayol çipi ikiye indi: **Arka plan** ve **HUD açık/kapalı**. Çip sayısına bağlı genişlik matematiği
  güncellendi (`(width - 4) / 2`).
* `YikimMainMenu.vanillaThisSession` bayrağı ve `YikimClient`teki kullanımı kalktı; artık takas kararı
  yalnızca kalıcı `menu.yikim` ayarına bakıyor. Takas ayarı panelin **Sistem** sekmesinde duruyor,
  yani isteyen oyuncu vanilla menüye dönüş yolunu kaybetmiyor.
* Yerleşim **bloğuna** dokunulmadı: `menu-yerlesim.mjs` imzası `076830eab7015f7f` (beklenen) ve 12 pencere
  boyutu "temiz" kaldı.

### 4) Discord Rich Presence (launcher tarafı, bağımlılıksız)

Oyunu başlatan, sürecini izleyen ve kapanışını bilen taraf başlatıcıdır; RPC oraya kondu. Yeni paket
bağımlılığı **yok**: Discord'un yerel boru protokolü doğrudan konuşulur (Windows'ta `\\.\pipe\discord-ipc-0…9`,
Linux/macOS'ta `$XDG_RUNTIME_DIR/discord-ipc-N`; el sıkışma `{v:1, client_id}` + `SET_ACTIVITY`).

| Durum | `details` | `state` |
|---|---|---|
| Oyun çalışıyor | `YIKIMLient ile oynuyor` | `Minecraft 1.21.11 • <profil adı>` + oyun süresi sayacı |
| Başlatıcı açık | `YIKIMLient` | `Başlatıcı açık` |

* Logo: `assets.large_image` = `settings.discord.largeImageKey` (varsayılan `yikimlient`), `large_text` = `YIKIMLient`.
* Ayarlar `yikimlient.json` → `settings.discord` (`enabled`, `appId`, `largeImageKey`, `showWhenIdle`). **`appId`
  boşsa RPC kapalıdır** ve `launcher.log`'a tek satır uyarı yazılır: Discord uygulama kimliği olmadan hiçbir
  şey göstermez, uydurma kimlik de çalışmaz. Kurulum adımları ve logo yükleme: **`DISCORD-RPC.md`**
  (`resources/icon.png` 512×512 — Discord'un istediği en küçük ölçü).
* Bağlantı koparsa 15 saniyede bir yeniden denenir (oyuncu Discord'u sonradan açabilir), en fazla 40 deneme.
* Ölçüm kapılarında (`YIKIM_*_CHECK=1`, `YIKIM_SMOKE=1`) RPC **hiç açılmaz**: kapı çıktısı dış dünyaya bağlı kalmaz.
* Kod artefakta `.perf-lab/discord-rpc-yamala.mjs` ile yazıldı (6 çapa, idempotent; çapa bulunamazsa araç hata verir).

### 5) Kanıtlar

* **Derleme:** 5 sürüm `BUILD SUCCESSFUL` (log: `_arsiv-baseline-595/build-v0123.log`); jar boyutları
  **151.113–151.361 B** (önce 142.237–142.485 B). `+1.21.1` `dea22df2654e29d0` • `+1.21.4` `e1fe7bf890363e4a` •
  `+1.21.8` `cf9767a327307548` • `+1.21.10` `974f969026b961c2` • **`+1.21.11` `fd9655ed9f68310f`**;
  `manifest.json` `d45886b3a86deb6c`.
* **Paket yeniden üretildi:** gevşek `dist/win-unpacked/resources/mods` ve `app.asar` içi kopya yeni jar'larla
  güncellendi. asar **`f6301f4447c0604d…`** (10.427.525 B; önceki `9f3c5a965aa6c6c3…`). asar iki kez çıkarıldı,
  `diff -rq` yalnızca `out/main/index.js` + `resources/mods` altındaki 6 dosyayı gösteriyor; başka hiçbir dosya
  değişmedi (renderer, preload, chunks aynı).
* **Paket denetimi** (`paket-mod-kontrol.mjs`): **30/30** (önce 29) — jar'larda artık `YikimChip.class` de aranıyor;
  iki kopya repo ile birebir, bayat jar yok, asar bütünlük kayıtları doğrulandı, mixin yok.
* **Taban kıyası** (`verify-baseline.mjs`): **50 beklenen fark, 0 beklenmeyen, 0 eksik** — "YALNIZCA BEKLENEN
  FARKLAR". Yeni: `YikimChip`, `YikimWidgets$Keys`. Değişen: `YikimWidget` (imza), `YikimWidgets` + `$Text` +
  `$1…$13` (çip gövdeleri), `YikimMainMenu`/`YikimClient` (vanilla kısayolu kalktı), `YikimAdapters` (yalnızca
  yorum), `YikimDraw` (çip ilkelleri + grafik toplama), `YikimMetrics` (grafik geçmişini hazır diziye kopyalama),
  `YikimLayout` (`height(Font)`).
* **HUD kare denetimi** (`hud-kare-denetimi.mjs`, yeni; baytkod üzerinden): `YikimHud.render`, `YikimWidgets$Text.draw`,
  `YikimChip.paint` ve `YikimWidgets$Keys.draw` gövdelerinde **hiç** `font.width`/`String.format` çağrısı yok;
  ölçüm yalnızca `Text.refresh` (aralık denetiminden sonra) ve `YikimChip.measure` içinde. Kanıt:
  `kanit/hud-kare-denetimi-20260927-v0123.txt`.
* **Discord RPC** (iki ayrı kanıt):
  * protokol testi `discord-rpc-testi.mjs`: paketten çıkarılan **gerçek** modül sahte bir Discord borusuyla
    konuşturuldu; 9/9 ok (el sıkışma op 0 + `client_id`, READY sonrası `SET_ACTIVITY`, `details`/`state`/
    `timestamps.start`/`assets.large_image`, oyun kapanınca `YIKIMLient` durumu).
  * canlı test: bu makinede Discord açık. Geliştirme launcher'ı ve **paketlenmiş exe** boruya bağlandı ve
    15 s sonra yeniden bağlandı (örnek kimlik Discord tarafından reddedildiği için bağlantı kapanıyor —
    yeniden bağlanma döngüsünün çalıştığının kanıtı). `settings.discord.appId` boşken **tek** uyarı satırı
    yazılıyor, bağlantı hiç kurulmuyor. Kapı çıktılarında `discord` izi **0**.
    Kanıt: `kanit/discord-rpc-canli-20260927-v0123.txt`, `kanit/discord-rpc-paketli-20260927-v0123.txt`.
* **Kapılar** (`kanit/gate-*-20260927-v0123.txt`): `YIKIM_PACK_CHECK` TÜM KONTROLLER GEÇTİ;
  `YIKIM_LINK_CHECK` hem repo hem **paketlenmiş exe** ile TÜM KONTROLLER GEÇTİ; `YIKIM_DEFAULTS_CHECK`
  önceki tura **birebir aynı** (diff 0 satır) ve electron çıkışı 0; `YIKIM_SERVER_CHECK` TÜM KONTROLLER GEÇTİ.
* **Diğer kanıt dosyaları:** `kanit/paket-mod-kontrol-20260927-v0123.txt`, `kanit/taban-kiyas-20260927-v0123.txt`,
  `kanit/menu-yerlesim-20260927-v0123.txt`.

### 6) Oyuncunun bir sonraki açılışında

* Başlatıcı instance'taki jar'ı boyut farkından dolayı değiştirir: **142.478 B → 151.354 B** (1.21.11).
* HUD ilk moddaki görünüme döner (cam kart + başlık + büyük değer + ayrıntı satırı); aynı öğeler açık kalır
  (`fps, cps, koordinat, yon, boyut, ping`), konumları ve ölçek aynı ayardan gelir.
* Ana menüde artık `Vanilla menü` çipi yok; alt şeritte iki çip var (Arka plan, HUD).
* Discord: presence **ayar yapılmadıkça kapalı**; `DISCORD-RPC.md`'deki 4 adım yapılınca oyun açılırken
  "YIKIMLient ile oynuyor" görünür.
* Test dosyası değişmedi: `dist\win-unpacked\YIKIMLient.exe` (launcher 0.10.1).

### 7) Geri alma (kademeler)

1. **Oyun içinden:** panel → HUD sekmesinden öğe aç/kapa; `hud.backdrop` kapatılırsa çipler yalnızca vurgu
   şeridine iner (düz görünüm). Discord: `settings.discord.enabled = false` ya da `appId` boşalt.
2. **§24 hâline:** `_arsiv-baseline-595/hud-cip-dili-jars/` (bu turun 5 jar'ı + manifest) +
   `asar-menu-v0120-dili/app.asar` (`9f3c5a96…`, §24 paketi).
3. **§22/§23 hâllerine:** `menu-perf-sonrasi-jars/`, `menu-perf-oncesi-jars/` + `asar-menu-perf-oncesi/`.
4. **Tabana (mod 1.0.0):** `baseline-mod-jars/` + `app.asar` (`ed429dfc…`).
5. **Bu turun kendi yedeği:** `_arsiv-baseline-595/asar-hud-cip-dili/app.asar` (`f6301f4447c0604d…`).

### 8) Ölçülmeyenler ve açık işler

* Oyun bu ortamdan açılamıyor: yeni HUD'un **görsel** sonucu ve oyun içi FPS'i gözle/ölçümle doğrulanmadı.
  İddia "kare yolunda biçimlendirme/ölçüm yok" (baytkod kanıtı) ile ve çipin **daha çok yazı** çizdiği
  gerçeğiyle birlikte okunmalı: oyuncunun log satırındaki `HUD x ms` bu turun asıl ölçümüdür.
* Discord presence'ı gerçek bir uygulama kimliği + yüklenmiş logo ile **görsel** olarak doğrulanmadı;
  bu makinede geçerli bir kimlik yok. Doğrulanan: çerçeveler, durum metinleri, yeniden bağlanma, kapalı senaryo.
* `out/main/index.js` ile `era-bundle-src/index.js` hâlâ senkron değil (bilinen açık iş).
* `launcher.log` çift satır / yinelenen `auth me` kökü ve C2ME `.disabled` sebebi hâlâ bulunmadı.

---

## §26 — "Aktif modları göremiyorum / mod aratıp indiremiyorum" düzeldi · HUD'u fareyle taşıma düzeldi · "HUD gene FPS düşürdü" iddiasının ölçümü

Oyuncunun aynı mesajdaki dört şikâyeti (27 Eylül sabahı, oturum `1-21-11-214e0c`, §25 jar'ı `151.354 B`):

1. "gene performansı düşürdü HUD"
2. "HUD'da sorunlar var"
3. "mod indirme / aktif olan modları görme yeri çalışmıyor düzgün; aktif modları göremiyorum, mod aratıp indiremiyorum"
4. "HUD'u oyun içinde düzenleme yok; fareyle hareket ettirme biraz bozuk, kayıyor"

### 1) Kök nedenler (kanıtla)

**Modlar sekmesi yalnızca katalog aramasını gösteriyordu.** Modun "hangi modlar açık" sorusunu cevaplayan hiçbir yolu yoktu: panelde kurulu mod listesi, `.jar.disabled` olarak duran kapatılmış modlar ve aç/kapat kararı diye bir şey yoktu. Liste artık var
(`YikimModBridge`: FabricLoader'dan yüklü modlar + `mods/` içindeki `.jar.disabled` jar'ların `fabric.mod.json`'undan okunan kimlik/ad/sürüm).

**Oyun içi arama boş dönüyordu — taşan kimlik.** `catalog-response.txt` başlığındaki `id` bir milisaniye damgasıdır (13 hane, `int`'e sığmaz), ama `YikimJson.number(...)` ile `int` olarak okunuyordu. Taşan değer istenen kimliğe eşit olmadığı için mod, **başlatıcının gerçek yanıtını "başka isteğe ait" sanıp atıyordu**; oyuncunun gördüğü şey boş sonuç listesiydi. `YikimJson.longNumber(...)` eklendi, `YikimBridge.readCatalogResponse` kimliği `long` okuyor. (§24 notunda "katalog araması düzeltildi" yazıyordu; o düzeltme launcher→dosya yolundaydı, bu ayrıştırma hatası ayrı bir kusurdu.)

**Kurulum ve aç/kapa iki ayrı dosyaya yazılıyordu.** Katalog kurulumları ile mod aç/kapa kararları `restart-request.json`'ın `installs` ve `mods` listelerine **birlikte** yazılır; tek yazma noktası panelin `applyModChanges()`'idir (iki yazma üst üste gelseydi ikincisi birincinin listesini silerdi). Alt şeritteki düğme `Uygula ve oyunu yeniden başlat (n)` olarak `katalog kuyruğu + mod kararları` toplamını gösterir; istek yazılınca oyun kapanır, launcher indirir/yeniden adlandırır ve oyunu geri açar.

**HUD'u fareyle taşımanın "kayması" iki hataydı.**

* *Tek tıklama öğeyi akıştan çıkarıyordu.* Eski kod fare **basılır basılmaz** `YikimLayout.detach(...)` çağırıyordu. Öğe serbest kalınca köşedeki diğer öğeler boşluğu doldurup yukarı kayıyordu — "kayıyo" denen şey buydu. Artık basış hiçbir şeyi değiştirmez; taşıma yalnızca **2 piksel eşik** geçilince başlar (`dragMoved`), eşik geçilmezse tıklama olarak biter ve hiçbir kayıt yapılmaz.
* *Konum kare kare yuvarlanıyordu.* Eski kod `offset += round(mouse - lastMouse)` biriktiriyordu; her karede yuvarlama yapıldığı için yavaş/yumuşak hareketler takılıyor ya da kayıyordu. Yeni kod sürükleme başında ofseti ve fareyi sabitler, konumu **mutlak** farkla hesaplar: `offset = origin + round(mouse - dragStart)` — birikim yok.

Ek olarak düzenleme geri bildirimi eklendi: HUD sekmesinde öğeler **kendi çipleriyle** canlı çizilir (eskiden yalnızca boş çerçeve vardı), alt şerit sürükleme sırasında `öğe • köşe • x y • sağ tık köşe, orta tık sıfırla` yazar, listedeki taşınmış öğeler `taşındı` etiketi alır, `Konumları sıfırla` düğmesi yalnızca ofsetleri sıfırlar (köşe/sıra tercihleri korunur).

### 2) Değişen dosyalar

| Dosya | Ne yaptı |
|---|---|
| `YikimModBridge.java` (yeni) | Yüklü + devre dışı mod listesi, aç/kapat kuyruğu, `yikimlient` ve `fabric-api` koruması |
| `YikimJson.java` | `longNumber` (uzun sayı okuyucusu) |
| `YikimBridge.java` | Yanıt kimliğini `long` okuyor; `restart-request.json`'a `mods` + `installs` birlikte yazılıyor |
| `YikimCatalog.java` | `ensureResults/queueCopy/clearQueue`, kurulum kuyruğu |
| `YikimPanel.java` | Modlar sekmesi iki görünüme ayrıldı (`Kurulu modlar` (yeni `ModRow`) · `Katalog`), süzgeç, `Uygula` düğmesi, HUD sürüklemesi (eşik + mutlak konum + orta tık + `Konumları sıfırla`) |
| `YikimLayout.java` | `detach(...)` (öğe yerini koruyarak akıştan çıkar), serbest öğe komşularını kaydırmaz |
| `YikimWidgets.java` / `YikimChip.java` / `YikimDraw.java` / `YikimMetrics.java` | §25'ten: çip dili + öğe başına önbellek (bu turda yalnızca küçük düzeltmeler) |
| `out/main/index.js` | Launcher: `mods` kararlarını uygular (`.jar` ↔ `.jar.disabled`), `installs` indirir, `catalog-request.json` aramasını yapar, Discord RPC |

Launcher tarafı bu turda yeniden paketlendi (asar girdisi `resources/mods` içeriyor; `diff -rq` yalnızca 6 mod dosyasını değişmiş gösteriyor).

### 3) "HUD gene FPS düşürdü" — oyuncunun kendi log satırı

Aynı oturumun `logs/latest.log` satırları (`1-21-11-214e0c`, 27 Eylül 09:27–09:29):

```
[09:27:29] Performans:  59 FPS (30 sn: en düşük  59 • ort  59 • en yüksek  59) • HUD 0.00 ms • YIKIM tik 0.012 ms
[09:28:00] Performans: 173 FPS (30 sn: en düşük   1 • ort 147 • en yüksek 187) • HUD 0.05 ms • YIKIM tik 0.014 ms
[09:28:31] Performans: 236 FPS (30 sn: en düşük 104 • ort 191 • en yüksek 236) • HUD 0.05 ms • YIKIM tik 0.016 ms
[09:29:02] Performans: 161 FPS (30 sn: en düşük 135 • ort 200 • en yüksek 262) • HUD 0.06 ms • YIKIM tik 0.028 ms
[09:29:32] Performans: 168 FPS (30 sn: en düşük 132 • ort 156 • en yüksek 225) • HUD 0.15 ms • YIKIM tik 0.116 ms
```

Okunuşu: ölçülen HUD maliyeti **0.00–0.15 ms**; 236 FPS'te bir kare 4.2 ms olduğu için HUD'un payı **%0–3**. Aynı oturumda panel açıkken ölçülen "YIKIM paneli" de **0.20–0.31 ms**. FPS'in dalgalı olması (en düşük 1 / 104 / 135) pencere içindeki chunk yükleme ve pencere odak değişimleriyle aynı saniyelere düşüyor.

Bu yüzden **bu turda HUD'un çizim yoluna dokunulmadı**: §25'te yapılan iş (kare başına biçimlendirme/ölçüm/ayırma sıfır, öğe başına tazeleme) ölçümle zaten maliyetsiz görünüyor. Oyuncunun kendi karşılaştırması için reçete şu: panel → **HUD** → `HUD açık` kapat, 30 saniye bekle, aynı `Performans:` satırını oku. Log satırının biçimi bilinçli olarak 595 ölçümüyle birebir aynı tutuluyor, bu yüzden satıra yeni alan eklenmedi.

### 4) Doğrulama ve kanıtlar (v0124)

* **Derleme:** 5 sürüm (1.21.1 / 1.21.4 / 1.21.8 / 1.21.10 / 1.21.11). Boyutlar `164.673 / 164.717 / 164.727 / 164.921 / 164.914 B`; 1.21.11 sha `9c9624ec491235bf…`, manifest `ce0319f7f35d1ff3…`.
* **Paket:** gevşek `dist/win-unpacked/resources/mods` + asar içindeki kopya yenilendi. asar `d155ce0a002ea559…` (`10.495.325 B`, 134 giriş); `diff -rq` yalnızca `resources/mods` altındaki 6 dosyayı gösteriyor.
* **`paket-mod-kontrol.mjs`:** **34/34 ok** (artık `YikimModBridge` ve `YikimModBridge$ModEntry` de aranıyor) — "bayat jar yok, iki kopya repo ile aynı".
* **`verify-baseline.mjs`:** taban 40 sınıf → yeni 65 sınıf; **56 beklenen fark / 0 beklenmeyen / 0 eksik**. Yeni sınıflar (`YikimModBridge`, `$ModEntry`, `$JsonFields`, `YikimPanel$ModRow`) ve değişen `YikimJson`/`YikimBridge` bilinçli listeye yazıldı.
* **`menu-yerlesim.mjs`:** 12 pencere boyutunda taşma yok.
* **`hud-kare-denetimi.mjs`:** "HUD kare yolu ölçümsüz" — baytkod düzeyinde `YikimHud.render`, `Text.draw`, `YikimChip.paint` ve tuş göstergesi gövdelerinde `font.width`/`String.format` yok.
* **Beş kapı yeşil:** `gate-pack-check-20260927-v0124.txt`, `gate-link-20260927-v0124.txt`,
  `gate-defaults-20260927-v0124.txt` (§25 çıktısıyla **birebir aynı**), `gate-server-20260927-v0124.txt`,
  `gate-link-packaged-20260927-v0124.txt` (paketlenmiş `dist/win-unpacked/YIKIMLient.exe`).

### 5) Oyuncunun bir sonraki açılışında

* Oyunu **başlatıcıdan** aç (`dist\win-unpacked\YIKIMLient.exe`); başlatıcı jar'ı boyut farkından değiştirir: **151.354 B → 164.914 B**.
* Modlar sekmesi: üst şeritte `Kurulu modlar | Katalog`. Kurulu listede **satıra tıklamak** modu aç/kapatır (kapatılamayanlar: YIKIM, Fabric API). Bir şeyi değiştirince alt şeritte `Uygula ve oyunu yeniden başlat (n)` çıkar; basınca oyun kapanır, launcher jar'ları yeniden adlandırır ve oyunu geri açar.
* Katalog: mod adı yaz (yazma durunca ~0,4 sn sonra tek arama gider), sonuçlar listelenir, satıra tıklayınca kuyruğa girer; indirme+yeniden başlatma aynı `Uygula` düğmesindedir.
* HUD: panel → HUD → öğeyi **sürükle** (tıklamak taşımaz; sağ tık köşe; orta tık o öğenin konumunu sıfırlar). Alt şerit sürüklerken canlı konum yazar.

### 6) Geri alma (kademeler)

1. **§25 hâline:** `_arsiv-baseline-595/hud-cip-dili-jars/` (5 jar + manifest) + `asar-hud-cip-dili/app.asar` (`f6301f4447c0604d…`).
2. **Bu turun (v0124) kendi yedeği:** `mod-katalog-hud-duzenleme-jars/` + `asar-mod-katalog-hud-duzenleme/app.asar` (`d155ce0a…`).
3. **§24 hâline:** `menu-v0120-dili-jars/` + `asar-menu-v0120-dili/app.asar` (`9f3c5a96…`).
4. **§22/§23 hâllerine:** `menu-perf-sonrasi-jars/`, `menu-perf-oncesi-jars/` + `asar-menu-perf-oncesi/`.
5. **Tabana (mod 1.0.0):** `baseline-mod-jars/` + `app.asar` (`ed429dfc…`).

Geri dönüş yalnızca jar'ları yazmakla biter: paketli kopya için `resources/mods/*` + `dist/win-unpacked/resources/{mods,app.asar}` aynı anda değiştirilmelidir.

### 7) Ölçülmeyenler ve açık işler

* **Oyun bu ortamdan açılamıyor.** Görsel olarak doğrulanmayanlar: yeni mod listesinin okunurluğu, sürükleme hissi, `taşındı` etiketi, katalog sonuçlarının oyun içi görünümü.
* **Oyun içi katalog araması uçtan uca çalıştırılmadı.** Doğrulanan: launcher'ın `catalog-request.json → catalog-response.txt` yolu ve dosya protokolü (kod okuması + araç), mod tarafında kimliğin `long` okunduğu. İlk gerçek deneme oyuncunun oturumunda olacak.
* **Aç/kapa kararının jar karşılığı** (`applyInGameModDecisions`) oyuncunun makinesinde sınanacak: jar bulunamazsa launcher `kapalı olarak kaydedildi (jar bulunamadı)` diye log'lar; `.disabled` adlandırmasının oyun içi karşılığı bu turda yalnızca kod düzeyinde doğru.
* **"HUD FPS düşürdü" iddiası kapanmadı:** ölçüm HUD'u işaret etmiyor, ama oyuncunun algısı farklı bir oturum/kurulum kombinasyonundan geliyor olabilir. Tek değişkenli karşılaştırma oyuncunun yapacağı HUD aç/kapa penceresidir.
* `out/main/index.js` ile `era-bundle-src/index.js` hâlâ senkron değil (bilinen açık iş); `launcher.log` çift satır kökü ve C2ME `.disabled` sebebi hâlâ bulunmadı.

---

## §27 — "Bu mod FPS yiyor" iddiası: duruma göre ölçüm · panel/HUD maliyetinin kesilmesi · "Sade" HUD görünümü

Oyuncu (§26 sonrası): *"tek başına HUD değil, pluginin bu menüsü falan filan nedense düşüyor FPS… bu Sağ Shift menüsü HUD falan FPS yememeli… bi mod 500-600 FPS düşüremez, bizim modun menüsünde bir sorun var."*

### 1) Kanıt toplama: yeni oturum + jar farkı + vanilla denetimi

**Yeni oturum (oyuncunun makinesi, 10:19–10:21, örnek `1-21-11-a092a4`, §25 jar'ı 151.354 B):**

```
[10:19:40] Performans:  10 FPS (30 sn: en düşük  1 • ort  36 • en yüksek 127) • odak dışı 11 sn • küçültülmüş 11 sn • HUD 0.00 ms
[10:20:11] Performans:  57 FPS (30 sn: en düşük 10 • ort 117 • en yüksek 202) • görüş 16 chunk • HUD 0.00 ms • YIKIM tik 0.047 ms
[10:20:42] Performans: 103 FPS (30 sn: en düşük 38 • ort 101 • en yüksek 134) • görüş  8 chunk • HUD 0.18 ms • YIKIM tik 0.245 ms
[10:20:09] YIKIM arayüz: YIKIM paneli  119 kare • ort 0.54 ms • en yüksek 5.53 ms   ← UYARI: tek kare 5,53 ms
[10:20:39] YIKIM arayüz: YIKIM paneli  502 kare • ort 0.48 ms • en yüksek 2.99 ms   ← UYARI: tek kare 2,99 ms
[10:21:09] YIKIM arayüz: YIKIM paneli 1404 kare • ort 0.37 ms • en yüksek 2.06 ms   ← UYARI: tek kare 2,06 ms
```

**§25 jar'ı ile bu turun jar'ı sınıf sınıf karşılaştırıldı** (`.tmp-jar-diff.mjs`): değişen/eklenen sınıfların hepsi panel-katalog-köprü tarafı
(`YikimPanel`, `YikimPanel$ModRow`, `YikimModBridge*`, `YikimJson`, `YikimBridge`, `YikimCatalog`, `YikimLayout`, `YikimDraw`).
**Dünyada kare başına çalışan hiçbir sınıf değişmedi** (`YikimHud`, `YikimWidgets`, `YikimChip`, `YikimMetrics`).
Yani "yeni sürüm dünyada FPS düşürdü" iddiası kod düzeyinde mümkün değil; oturumlar arasındaki fark ayarlardan
(görüş 16 ↔ 8, 11 sn küçültülmüş pencere) ve dünya yükünden geliyor.

**Vanilla bulanıklığı elendi:** `javap` ile bakıldı: bulanıklık `Screen.renderBackground → renderBlurredBackground`
yolundan geliyor ve `GameRenderer.processBlurEffect` yalnızca GUI kuyruğundan çalışıyor. YIKIM ekranları `render`ı
doğrudan yazıp `super.renderBackground`'u hiç çağırmıyor → oyuncunun `menuBackgroundBlurriness: 2` ayarı
bizim menülerde **hiç** uygulanmıyor. (Yani "bizim menü bulanıklaştırıyor" ihtimali yok.)

**Ama iki gerçek kusur vardı:**

1. **Panelde yarım saniyelik sıçramalar.** 500 ms'lik tazeleme yolunda dosya okuma (`YikimPresets.currentId` →
   `.yikim/profile-choice.json`), yansıma (`YikimVideo.systemLines`), 120 örnekli liste kopyası ve tanılama satırı
   sarma vardı. Log'da tam bu yüzden `UYARI: tek kare 2,06–5,53 ms (YIKIM paneli)` satırları var: ortalama
   0,37 ms ama her yarım saniyede bir 2–5 ms'lik takılma. Oyuncu bunu "menü kasıyor" diye hisseder.
2. **HUD çift çiziliyordu.** HUD sekmesi açıkken çipler hem dünya HUD'unda hem panelin düzenleme görünümünde
   çiziliyordu (aynı karede iki kez).

### 2) Ne değişti

| Değişiklik | Neden |
|---|---|
| `YikimMetrics.frame(durum)` + her 30 sn `YIKIM FPS durumu:` satırı | Ortalama FPS tek başına yetmiyor: **hangi yüzey** kaç FPS'te dönüyor (dünya / dünya-HUD kapalı / panel açık / menü), kare sayısı, ortalama ms ve p95 ayrı ayrı yazılıyor |
| Panel → HUD sekmesinde `FPS ölçümü — son 30 saniye` satırı | Aynı sayı oyunun içinden okunabilsin; oyuncu log dosyası aramasın |
| `refresh` (500 ms) ↔ `refreshSlow` (2 s) ayrımı | Pahalı iş (dosya/yansıma/kopya) kare yolundan çıktı; yarım saniyelik takılmalar bitti |
| HUD sekmesi açıkken dünya HUD'u atlanır | Aynı çipler kare başına iki kez çizilmiyor |
| `hud.gorunum = cip \| sade` | "İlk sürümün maliyeti" bir ayar oldu: **sade** görünümde öğe başına sıfır dolum, en fazla üç yazı (çip görünümü ~4 dolum + 3 yazı + ölçekli değer) |
| Alt şeritte önbellek | Kısaltma (`clip`) karakter karakter ölçüm yapıyor ve alt şerit her karede çiziliyor; kısaltılmış yazı, sağ etiket ve `Uygula` genişliği artık yalnızca değiştiğinde ölçülüyor |

Ayrıca **`.perf-lab/panel-kare-denetimi.mjs`** yazıldı: baytkod düzeyinde (1) 500 ms'lik yolda dosya/yansıma/kopya
çağrısı olmadığını, (2) `refreshSlow`'da olduğunu, (3) `YikimHud.render`ın kare sayacını yazdığını ve HUD sekmesinde
çift çizmediğini, (4) `paintPlain` içinde ölçüm/biçimlendirme/**dolum** olmadığını, (5) ayarın ve arayüz kolunun
yerinde olduğunu denetliyor.

### 3) Kanıtlar (v0125)

* **Derleme:** 5 sürüm. 1.21.11 jar'ı **169.195 B**, sha `11715f57ac813873…`, manifest `7f0109c84da3f977…`.
* **Paket:** gevşek `dist/win-unpacked/resources/mods` + asar içindeki kopya yenilendi; asar **`f5ee649b8c9b723388…`**
  (`10.516.730 B`); `diff -rq` yalnızca `resources/mods` altındaki 6 dosyayı gösteriyor.
* **Araçlar:** `paket-mod-kontrol` **34/34 ok**; `verify-baseline` **57 beklenen fark / 0 beklenmeyen / 0 eksik**
  (`YikimHud` bu turun bilinçli farkı olarak listeye eklendi); `menu-yerlesim` 12 boyutta temiz;
  `hud-kare-denetimi` ve yeni `panel-kare-denetimi` yeşil.
* **Beş kapı yeşil:** `gate-pack-check-20260927-v0125.txt`, `gate-link-20260927-v0125.txt`,
  `gate-defaults-20260927-v0125.txt` (v0124 ile **birebir aynı**), `gate-server-20260927-v0125.txt`,
  `gate-link-packaged-20260927-v0125.txt`. Kanıt dosyaları: `_arsiv-baseline-595/kanit/*-v0125.txt`.
* **Yan bulgu (iyi haber):** oyuncunun oturumunda **oyun içi katalog araması çalıştı**:
  `.yikim/catalog-request.json` → `"query": "auth me"`, yanıt `auth-me → Auth Me` (§26'daki uzun-kimlik düzeltmesi tuttu).

### 4) Oyuncunun bir sonraki açılışında ne görecek

1. Oyunu başlatıcıdan aç (jar **151.354 B → 169.195 B** olarak değişir).
2. Dünyada 30 saniye bekle; log'a şu satır düşer:
   ```
   YIKIM FPS durumu: dünya 168.2 FPS (5400 kare • 5.95 ms • p95 9.10) • panel açık 61.4 FPS (940 kare • 16.29 ms • p95 21.00)
   ```
   Aynı satır panel → **HUD** sekmesinde `FPS ölçümü — son 30 saniye` olarak da görünür.
3. `HUD açık` anahtarını kapatıp 30 saniye bekle: satır bu kez `dünya/HUD kapalı` ile `dünya`yı yan yana yazar;
   "HUD FPS yiyor mu" sorusu tahmine kalmadan kapanır.
4. HUD ağır geliyorsa panel → HUD → **Görünüm: Sade** (dolum yok, öğe başına iki satır yazı) ile ilk sürümün
   maliyetine dönülebilir; Çip görünümü istendiğinde geri alınır.

### 5) Geri alma (kademeler)

1. **§26 hâline:** `_arsiv-baseline-595/mod-katalog-hud-duzenleme-jars/` + `asar-mod-katalog-hud-duzenleme/app.asar` (`d155ce0a…`).
2. **§25 hâline:** `hud-cip-dili-jars/` + `asar-hud-cip-dili/app.asar` (`f6301f4447c0604d…`).
3. **§24 hâline:** `menu-v0120-dili-jars/` + `asar-menu-v0120-dili/app.asar` (`9f3c5a96…`).
4. **Bu turun (v0125) kendi yedeği:** `hud-maliyet-olcumu-jars/` + `asar-hud-maliyet-olcumu/app.asar` (`f5ee649b…`).
5. **Tabana (mod 1.0.0):** `baseline-mod-jars/` + `app.asar` (`ed429dfc…`).

### 6) Ölçülmeyenler ve açık işler

* **Oyun bu ortamdan açılamıyor:** yeni durum satırının ve "Sade" görünümün oyun içi sonucu gözle doğrulanmadı;
  sayılar oyuncunun bir sonraki oturumundan gelecek.
* Panel açıkken dünya FPS'i hâlâ **ölçülmedi**: `YIKIM paneli ort 0,37 ms` yalnızca panelin kendi çizim süresi.
  Yeni `panel açık` satırı bu boşluğu kapatıyor. Eğer o satır dünya FPS'ini belirgin şekilde düşük gösteriyorsa
  sıradaki adım net: panelin kare başına dolum sayısı (satır zeminleri/anahtarlar) ve dünya çizimine etkisi
  ölçülüp kısılacak; "kazanç" iddiası o ölçümle birlikte yazılacak.
* HUD'un "Sade" görünümünde satır başına iki yazı vardır (etiket + değer); gölge açıkken her yazı iki kez
  çizilir. Oyuncu en uç ayarı isterse `hud.shadow = false` ile yarıya iner.
* Katalog kurulumunun oyun kapanınca uygulanması (§26) oyuncunun makinesinde hâlâ sınanmadı.

---

## §28 — "Menü FPS yiyor" iddiasının kökü: vanilla'nın 60 FPS tavanı + launcher'da tekrarlanan iş

Oyuncu: *"kesinlikle eklediğin bu görsellikte bir sorun var… bu menüleri ekleyince FPS düştü… belki arkada sürekli bir
process yapıyor bir şeyler yapıyor… sohbeti kontrol et, nerede çok iyiydi sonra ne yaptın da düştü."*

### 1) Sohbetin ölçüm geçmişi (nerede iyiydi?)

| Ölçüm | Sürüm | FPS | Ayarlar |
|---|---|---|---|
| 25 Eyl 21:24 (595 ölçümü) | mod 1.0.0 + taban launcher | **610 (ort 595 • min 526 • maks 648)** | görüş 8, sınırsız FPS, V-Sync kapalı |
| Aynı oturum, ilk pencereler | mod 1.0.0 | 176 (ort 95 • min 12) → 339 (ort 281) → 661 | görüş 6 → 8 → 8 |
| §16-20 oturumu | 1.1.0 çekirdeği | 186 (min 57 • ort 143 • maks 200) | HUD 0.18 ms • YIKIM tik 0.440 ms |
| 27 Eyl 09:27 | §25 jar | 59 (sabit) → 173 → 236 → 161 → 168 | görüş 6 → 8 |
| 27 Eyl 10:43 (yeni ölçüm) | §27 jar | **dünya 80.2** • panel açık 61.6 • menü 59.0 | **görüş 16 chunk**, oturum 44 sn |

Yani "çok iyiydi" ölçümü **dünya içinde, görüş 8** ile alınmıştı; şimdi ölçülen düşük sayı **görüş 16 chunk**
(same build, görüş 8'de 156-236 FPS). Aynı jar'ın kendi içinde bile 176 → 661 arası oynuyor: FPS yükün nerede
olduğuna ve anına bağlı.

### 2) Asıl bulgu: **vanilla menüde kendini 60 FPS'e sınırlıyor** (bytecode kanıtlı)

`javap` ile `com.mojang.blaze3d.platform.FramerateLimitTracker` okundu (1.21.11 eşlenmiş jar):

* `getThrottleReason()`ın `OUT_OF_LEVEL_MENU` döndürdüğü koşul tam olarak:
  `minecraft.level == null && (minecraft.screen != null || minecraft.getOverlay() != null)`
  — yani **dünya yüklü değilken açılan her ekran**: vanilla ana menü, YIKIM ana menüsü, başlık ekranından açılan panel.
* `getFramerateLimit()` bu durumda **sabit 60** döndürüyor (`OUT_OF_LEVEL_MENU → bipush 60`).
  Diğer durumlar: simge durumuna küçültülmüş pencere 10, uzun AFK 10, kısa AFK `min(ayar, 30)`, aksi hâlde oyuncunun ayarı (bizde 260 = sınırsız).
* **Dünya içinde** `level != null` olduğu için durum `NONE` → panel açıkken FPS tavani yok; yani Sağ Shift menüsü oyunda
  FPS'i 60'a çekmiyor (oyuncunun 10:20 oturumunda panel açıkken görülen 131 FPS bununla uyumlu).

→ Oyuncunun "menü açınca 60'a düşüyor" gözlemi **vanilla davranışı**; aynı şey vanilla ana menüde de olur,
  bizim ana menümüz de o tavana tabidir. YIKIM ekranları bulanıklık (`renderBackground`) bile çağırmadığı için
  bu tavanın dışında bir ek maliyet üretmiyor.

### 3) Gerçek tekrar eden iş: launcher'da tek dosya olayı 2-4 kez işleniyordu

`launcher.log` kanıtı (tek dosya yazımı, çok olay):

```
[07:43:13.546] [launch] 15ec080d…: oyun hazır işareti geldi.
[07:43:13.547] [launch] 15ec080d…: oyun hazır işareti geldi.
[07:43:13.549] [launch] 15ec080d…: oyun hazır işareti geldi.
[07:20:56.302] [catalog] 1.21.11: oyun içi arama "auth me" → 1/1 sonuç (modrinth)
[07:20:56.303] [catalog] 1.21.11: oyun içi arama "auth me" → 1/1 sonuç (modrinth)
[07:20:56.304] [catalog] 1.21.11: oyun içi arama "auth me" → 1/1 sonuç (modrinth)
```

Sebep: Windows'ta `fs.watch` tek yazım için 2-4 olay üretir; launcher her olayda **tam işi** yapıyordu
(üç `game:ready` yayını, üç ağ araması + üç yanıt yazımı, aynı onay isteğinin tekrar okunması).
Oyuncunun "arkada sürekli bir şey çalışıyor" hissi bu.

Düzeltme (`out/main/index.js`, yama aracı `.perf-lab/launcher-tekrar-onleme-yamala.mjs`, 5 nokta):

* `readyHandledAt` — aynı oturumda hazır işareti 3 saniye içinde ikinci kez işlenmez,
* `catalogHandledId` — aynı katalog kimliği için tek ağ araması (damga aramadan **önce** yazılıyor),
* `restartHandledStamp` — aynı sürüm damgalı onay isteği ikinci kez açılmaz,
* yeni izleme kurulurken damgalar sıfırlanır (yeni oturum yeni olay sayılır).

### 4) Mod tarafında tekrar eden iş taraması (bu turda yapıldı)

Tüm mod kaynağı tarandı: **thread yok, `Executor` yok, `while (true)` yok, `ProcessBuilder` yok, artalan süreci yok.**
Zamanlayıcılar: `YikimTheme.sync` saniyede **1** dosya denetimi (§23'te 20/s'den indirilmiş), `YikimCatalog` 250 ms'de bir
bekleyen yanıtı yoklar (yalnızca arama açıkken), `YikimMetrics`/`YikimUiMetrics` sayaçları yalnızca aritmetik.
Kare başına ölçülen mod maliyeti: `HUD 0.19 ms` + `YIKIM tik 0.187 ms` → 12,47 ms'lik karede **~%3**.

### 5) Doğrulama (v0126)

* Launcher yaması: 5/5 çapa bulundu, `node --check` temiz, yeni `asar` `1fe1e67d0eedbe7b4a…` (`10.518.005 B`);
  `diff -rq` yalnızca `out/main/index.js`i değişmiş gösteriyor; asar içinden çıkan kopya repo dosyasıyla **birebir aynı**.
* Yeni araç `.perf-lab/launcher-tekrar-denetimi.mjs`: koruma haritaları yerinde, erken çıkışlar işten önce
  ("damga ağ aramasından önce yazılıyor" dahil) → **paket içindeki** `index.js` üzerinde de yeşil.
* `paket-mod-kontrol` 34/34; `verify-baseline` 57 beklenen / 0 beklenmeyen; `menu-yerlesim` 12 boyut temiz;
  `hud-kare-denetimi` + `panel-kare-denetimi` yeşil.
* Beş kapı yeşil: `gate-*-20260927-v0126.txt` (defaults v0125 ile birebir aynı, paketlenmiş exe dahil).

### 6) Oyuncunun yapacağı üç karşılaştırma (tahmin kalmasın)

1. **Görüş 8**'e çek ve dünyada 30 sn bekle. 595 ölçümünün ayarı buydu (görüş 8). `YIKIM FPS durumu: dünya …` satırını oku.
2. **Menü 60 FPS mi?** Panel → Sistem → `menu.yikim` kapat (vanilla ana menü) ve ana menüde 30 sn bekle: vanilla menü de
   ~60 FPS yazacak — tavanın oyuna ait olduğunun kanıtı. Aynı şey başlık ekranından açılan panel için geçerli.
3. **HUD payı:** panel → HUD → `HUD açık` kapat, 30 sn bekle. Satır `dünya` ile `dünya/HUD kapalı`yı yan yana yazar.

En kesin sınama: aynı dünyada **taban pakete** dön (`_arsiv-baseline-595/baseline-mod-jars` + `app.asar`) ve
aynı görüş/ayarla ölç; fark çıkmıyorsa mod UI'ının payı yoktur.

### 7) Ölçülmeyenler

* Panel açık FPS'inin **temiz** örneği: 10:43 oturumu 44 saniyeydi ve dünya hâlâ yükleniyordu (p95 29,02 ms, `en düşük 0`),
  bu yüzden `panel açık 61,6` sayısı "tavan" değil "o anın yükü" olabilir. Uzun bir oturumun durum satırı bunu kesinleştirecek.
* 595 ↔ bugünkü farkın tek değişkenli ölçümü yapılmadı (oyun bu ortamdan açılamıyor); yukarıdaki taban-paket ölçümü
  oyuncunun yapacağı iştir.

## §29 — "Modumuz düşürüyor" iddiasına karşı tek oturumluk kanıt: tekrar eden iş envanteri · dakika eğrisi · A/B ölçümü

Oyuncu: *"fps nispeten arttı ama o modu sıfırdan yapıp açtığımızda 800 FPS almıştım, şimdi dakikalar içinde 300'e ancak geldi;
chunklar kısık, sorun ayar değil — bizim modumuz düşürüyor."*

Bu iddia **zaman eksenli**: kare başına sabit bir maliyet değil, oturum uzadıkça artan/tekrarlayan bir iş işaret ediyor.
Bu yüzden §29'un çıktısı iki parçalı: (a) oyun açıkken sürdürülen **her tekrar eden işin adı ve sıklığı**, (b) oyuncunun
**tek oturumda** okuyacağı A/B kanıtı.

### 1) Oyuncunun son oturumunun sayıları (11:03–11:05, §27 jar)

| saat | FPS (30 sn: min/ort/maks) | görüş | HUD | YIKIM tik |
|---|---|---|---|---|
| 11:03:37 | 171 (3 / 133 / 204) | 6 | 0.09 ms | 0.048 ms |
| 11:04:08 | 264 (119 / 183 / 264) | 8 | 0.07 ms | 0.020 ms |
| 11:04:39 | 219 (203 / 247 / 321) | 8 | 0.07 ms | 0.024 ms |

`YIKIM FPS durumu` satırları aynı oturumda yüzey yüzey: `dünya 153.6 → 184.7 → 258.4 FPS`. Yani **bu** oturumda 90 saniyede
düşüş yok, artış var (ilk pencere dünya yüklenirken: min 3). Oyuncunun "dakikalar içinde 800 → 300" gözlemi bu oturumda
görünmüyor; o yüzden bu turda tartışma yerine **ölçüm** getirildi: eğri + A/B.

### 2) Oyun açıkken tekrar eden iş envanteri (kaynaktan, sert kurallı denetim)

Yeni araç `.perf-lab/tikrar-envanteri.mjs` bu listeyi kaynaktan çıkarıp sert kuralları denetler
(`_arsiv-baseline-595/kanit/tikrar-envanteri-20260927-v0129.txt`).

| sıklık | iş | maliyet |
|---|---|---|
| **kare başına** | `YikimHud.render` → `YikimMetrics.frame` (sayaç yazımı) | ayırma yok; ölçülen HUD 0.07-0.22 ms |
| kare başına | `YikimLayout.arrange` (250 ms önbellek; isabette liste üretilmez) | önbellek isabeti kare başına ~0 |
| kare başına | öğe çizimi (içerik 100-1000 ms çip önbelleğinden) | tazelenmede biçimlendirme, çizimde yok |
| kare başına (A/B koşarken) | `YikimAbTest.onFrame` (sayaç + histogram) | ayırma yok, `new` yok |
| **tik başına (20/s)** | `YikimTheme.sync` — 1 sn'de bir dosya damgası | damga aynıysa dosya okuma **yok** |
| tik başına | `YikimKeys.poll`, `YikimUiMetrics.flush`, `YikimAbTest.tick` | aritmetik/tuş okuma; A/B yalnızca koşarken |
| **saniye başına** | `YikimMetrics.tick` → FPS örneği + CPS (GLFW fare sorgusu) | birkaç yüz ns |
| **30 saniye başına** | teşhis satırı + arayüz ölçüm satırı (log yazımı) | 2 satır/30 sn |
| **dakika başına (yeni)** | dakika eğrisi + yığın/GC satırı (log yazımı) | 2 satır/60 sn, ölçüm: histogram taraması |
| olay güdümlü | `YikimCatalog.tick` (yalnızca ekran yokken + bekleyen istek varsa 250 ms) | arama kapanınca sıfır |
| yazma | ayar dosyası yalnızca oyuncu değiştirince; `ready` işareti oturumda bir kez | — |
| **launcher (oyun açıkken)** | `fs.watch(örnek klasörü)` olayı başına tek iş (damga koruması, §28) | yinelenen olay elenir |
| launcher | Discord RPC: yalnızca durum değişince çerçeve yazar | periyodik kalp atışı **yok** |
| launcher | konsol tamponu 600 satır, günlük tamponu 4000 satır | sınırlı |

**Sert kurallar (hepsi geçti):** kare yolunda `Files.`/`String.format`/`new ArrayList`/`HashMap`/`StringBuilder` yok · `new Thread(`,
`Executors.`, `new Timer(`, `ScheduledExecutor`, `TimerTask`, `while (true)` yok · sınırlı tamponlar: `FPS_WINDOW`=30,
`FPS_SAMPLES_FOR_GRAPH`=120, `CLICKS`=1 sn, `STATE_SAMPLES`=4×64, `CURVE_BUCKETS`=20, `CURVE_BIN_COUNT`=200, `BIN_COUNT`=200.

### 3) Eklenen ölçüm: dakika eğrisi + yığın/GC (oyuncunun kendi log'unda)

Her dakika kapanışında **iki satır** log'a düşer (panel → HUD sekmesinde de görünür):

```
YIKIM FPS eğrisi: 1. dk 612 FPS (min 540 • maks 700 • kare 1.63 ms • p95 2.10 ms • en kötü 41.0 ms • 36000 kare • yüzey dünya %96 panel %4) • eğilim: ilk dk 612 → son dk 305 (-50%)
YIKIM kaynak: yığın 512/2048 MB (kullanılan %25) • GC 41 toplama • 0.9 s • iş parçacığı 61
```

* **Dakika eğrisi** "ilk dakika 800 → sonraki dakikalarda 300" iddiasını doğrudan okunur yapıyor: ilk dakika ve
  son dakika aynı satırda, yüzde değişimiyle. Dakika başına p95 ve en kötü kare de var (ortalama iyi görünüp oyunun
  kasması buradan görülür).
* **Yığın/GC satırı** "biriken bir şey" iddiasının sayısı: kullanılan yığın yüzdesi, GC toplama sayısı/süresi ve iş
  parçacığı sayısı. Sızıntı varsa bu üçü dakika dakika tırmanır; sabitse ortada biriken iş yoktur.
* Ölçüm kare yolunda **değil**: kapanış saniyelik yoldan çağrılır, histogram taraması dakikada bir kez yapılır
  (baytkod denetimi: `panel-kare-denetimi.mjs` §6 — kare yolunda `new` ve `String.format` yok).

### 4) Eklenen kanıt: tek oturumda A/B ölçümü (panel → HUD → "A/B ölçümü başlat")

Dört faz, art arda, **aynı dünya aynı ayar**, 30 sn + 5 sn ısınma:

| faz | ne kapanır | ne ölçülür |
|---|---|---|
| 1 | — | her şey açık (temel) |
| 2 | HUD çizimi + tik işi (tema/katalog/menü) | "mod neredeyse kapalı" |
| 3 | HUD çizimi (tik işi açık) | HUD'un payı |
| 4 | — | kontrol (ısınma/gerileme ayrımı) |

* Faz başına satır: `YIKIM A/B faz 2/4 bitti — mod duraklatıldı: 612.7 FPS (18060 kare • kare 1.63 ms • p95 2.4 ms •
  en kötü 41.0 ms • saniye 540-700)`.
* Kapanış satırı: `YIKIM A/B sonuç: temel (mod açık) 483.2 FPS • HUD kapalı 604.2 FPS (+25.0%) • mod duraklatıldı 612.7 FPS (+26.8%)
  → fark HUD'dan geliyor` — ya da "fark yok — düşüşün kaynağı modun kare/tik yolu değil".
* Ölçüm **dürüst**: faz sırasında ekran açılırsa (panel/Esc) ya da pencere odak dışı kalırsa o faz "bozuldu" işaretlenir ve
  ortalamaya katılmaz; ısınma penceresi atılır. Kare aralıkları ölçüm katmanından geldiği için ölçümün kendisi ek yük değil.
* Aynı özellik manuel: panel → HUD → **"Mod duraklat (tanı)"** — istediğin kadar uzun süre modun kare/tik yolunu kapatıp
  `Performans:` satırını kendi başına karşılaştırabilirsin.

### 5) Taban jar ile karşılaştırma (launcher kapısı + iki araç)

Başlatıcı her açılışta yerleşik jar'ı örnek klasörüne kopyaladığı için elle konan **taban jar (mod 1.0.0)** bir sonraki
 açılışta siliniyordu; "aynı dünya, taban mod" ölçümü bu yüzden imkânsızdı.

* `out/main/index.js` → `installBuiltinMods` başına kapı: örnek klasöründe `.yikim/ab-baseline.json` varsa yerleşik mod
  kurulmaz ve günlüğe `A/B: taban mod korunuyor, yerleşik YIKIM modu kurulmadı.` yazılır
  (yama aracı `.perf-lab/launcher-ab-tabani-yamala.mjs`, 3 çapa, idempotent).
* `.perf-lab/ab-taban-jar.mjs kur | geri-al | durum` — taban jar'ı yerleştirir, mevcut jar'ları `.yikim/ab-yedek/`e taşır,
  geri alırken aynen yerine koyar; oyun açıkken (log 90 sn içinde yazılmışsa) `--zorla` olmadan çalışmaz.
* `.perf-lab/ab-oturum-raporu.mjs --kaydet <etiket>` / `--rapor` — iki oturumun log'unu **yan yana** koyar: 30 sn pencereleri,
  dakika ortalamaları, eğilim (ilk → son dakika), HUD/tik maliyeti, dakika eğrisi ve yığın/GC farkı. Taban jar'da dakika
  satırı yok ama `Performans:` satırı var; araç ondan dakika kovalarını kendisi kurar, yani iki sürüm aynı ölçekte
  karşılaştırılır.

### 6) Oyuncunun 5 adımda yapacağı ölçüm (tahmin kalmasın)

```
1) dist\win-unpacked\YIKIMLient.exe ile oyunu aç, dünyaya gir.
2) Panel → HUD → "A/B ölçümü başlat (4 × 30 sn)" → panel kapanır; 2 dakika panel açmadan oyna.
   Sonuç hem ekranda bildirim olarak hem log'da "YIKIM A/B sonuç:" satırında.
3) Dakika eğrisi için aynı oturumda 3-4 dakika daha kal; log'da her dakika "YIKIM FPS eğrisi:"
   ve "YIKIM kaynak:" satırları düşer.
4) Taban jar karşılaştırması (isteğe bağlı ama en kesin):
     node .perf-lab/ab-taban-jar.mjs kur
     (oyunu aç, aynı dünyada aynı süre oyna, çık)
     node .perf-lab/ab-oturum-raporu.mjs --kaydet taban
     node .perf-lab/ab-taban-jar.mjs geri-al
     (yeni jar ile aynısını yap) node .perf-lab/ab-oturum-raporu.mjs --kaydet yeni
     node .perf-lab/ab-oturum-raporu.mjs --rapor
5) Rapor iki sütunlu tablo basar: pencere pencere FPS, dakika ortalamaları, eğilim, HUD/tik maliyeti,
   dakika eğrisi ve yığın/GC farkı (ilk dakika ↔ son dakika).
```

Not: 2. adımdaki A/B, "modun kare/tik yolu"yu ölçer; 3. adım "zamanla bozulma"yı, 4. adım "modun varlığı"nı
(taban jar ile karşılaştırma) ölçer. Üçü birlikte iddianın her biçimini kapsıyor.

### 7) Doğrulama (v0129)

* Beş sürüm derlendi: `1.21.1` `82da1819…` (178.452 B) • `1.21.4` `19b4c590…` (178.496 B) • `1.21.8` `12c30d05…` (178.506 B)
  • `1.21.10` `a9bf9fd2…` (178.700 B) • **`1.21.11` `0d75d790…` (178.693 B)**; `manifest.json` `34d5d9f5…`.
* asar `716bf7a548e6b159beede6524bba1e946d242f1a0791c81da749212653d31add` (10.565.957 B) — hem gevşek `resources/mods`
  hem asar içindeki kopya yenilendi; `diff -rq` yalnızca 7 dosyayı (index.js + 5 jar + manifest) değişmiş gösteriyor;
  asar içinden çıkan `out/main/index.js` repo dosyasıyla birebir aynı.
* `verify-baseline`: **58 beklenen / 0 beklenmeyen / 0 eksik** (yeni sınıf: `YikimAbTest`).
* `paket-mod-kontrol` **34/34**; `launcher-tekrar-denetimi` yeşil ve artık **A/B kapısı pakette mi** diye de denetliyor;
  `menu-yerlesim` 12 boyut temiz (ana menüye dokunulmadı); `hud-kare-denetimi` yeşil; `panel-kare-denetimi` §6-§7 dahil yeşil;
  `tikrar-envanteri` yeşil.
* Beş kapı yeşil: `kanit/gate-{pack,link,defaults,server,link-exe}-20260927-v0129.txt` (paketlenmiş exe dahil).
* Yedekler: `_arsiv-baseline-595/ab-olcum-jars/` (5 jar + manifest) ve `_arsiv-baseline-595/asar-ab-olcum/app.asar`
  (`716bf7a5…`); yama öncesi launcher dosyası `_arsiv-baseline-595/index.js.ab-yamasi-oncesi`.

### 8) Geri alma

* Mod tarafı: `YikimAbTest.java` silinir, `YikimMetrics`/`YikimHud`/`YikimClient`/`YikimConfig`/`YikimPanel` içindeki
  ekler (dakika eğrisi, `paused`, A/B satırları) çıkarılır; araçlar `.perf-lab/{tikrar-envanteri,ab-taban-jar,ab-oturum-raporu}.mjs`
  kaldırılır. Çip/HUD çizimi ve ölçüm satırının biçimi **değişmedi**.
* Launcher tarafı: `out/main/index.js` içindeki 7 satırlık kapı bloğu silinir (yoruma bakınız), asar yeniden paketlenir.
  İstenirse `_arsiv-baseline-595/index.js.ab-yamasi-oncesi` dosyası birebir geri konur.

### 9) Ölçülmeyenler

* A/B ölçümünün oyun içi ilk koşusu ve taban jar takasının gerçek oturumu: oyun bu ortamdan açılamıyor; sayılar
  oyuncunun kendi oturumundan gelecek.
* "800 FPS" ölçümünün hangi paket/sürüm/görüş ile alındığı hâlâ bilinmiyor: sohbet kaydında **595** (görüş 8, 25 Eyl 21:24)
  var, 800 yok. Oyuncu "sıfırdan yaptığımız sürüm" derken taban paketi (mod 1.0.0) kastediyorsa bu ölçüm 4. adımda
  doğrudan karşılaştırılabilir olacak.
* Mod jar'ının varlığının *kendisi* (sınıf yüklemesi, olay kaydı) ölçülemez: A/B'nin "mod duraklatıldı" fazı tüm kare/tik
  işini kapatır ama olay geri çağrılarının kendisi (~ns) kalır; bu pay taban jar 4. adımda karşılaştırıldığında görünür.

## §30 — Launcher oyun testi: gerçek arayüzü sürme · üç kusur bulundu ve düzeltildi

Ürünün gerçek yüzeyi launcher'ın Electron arayüzü. Önceki turlarda bütün doğrulamalar **dize/baytkod** düzeyindeydi;
bu turda arayüz **gerçekten sürüldü**: `--user-data-dir` ile kopya bir profil (oyuncunun profili ve örnekleri ellenmedi),
Chromium DevTools Protokolü üzerinden gerçek fare/tuş olayları, her adımda ekran metni ve konsol hataları okundu.
Yeni araç: `.perf-lab/launcher-ui-testi.mjs` (bağımlılık yok; Node 24 `WebSocket`i + `fetch`). Ham kayıtlar:
`kanit/oyun-testi-akislari-20260927-v0129b.txt`.

### 1) Bulunan ve düzeltilen kusurlar

| # | kusur | kanıt | düzeltme |
|---|---|---|---|
| 1 | **Her katalog kartında `Invalid Date`** | arama sonuçlarının 20 kartının tamamında tarih yerine bu metin | `mapHit`: `updated: hit.date_modified ?? hit.updated` |
| 2 | **"İçerik indiriliyor %10" takılı kalıyor** | zaten kurulu modda 15 sn boyunca aynı yüzde; indirme yok, satır sonra da kaybolmuyor | `instances:installContent`: `existing` dalında terminal olay |
| 3 | **Sürüm silme onaysız (veri kaybı)** | `Sil`'e tek tıklama: klasör anında gitti + "1.21.11 silindi" bildirimi | `instances:remove`: silmeden önce yerel onay penceresi |

Kusur 1'in kökü: Modrinth `/v2/search` yanıtında `updated` alanı **yok** (canlı doğrulandı:
`date_modified: 2026-09-20T21:27:06…`, `updated: undefined`); arayüz `formatRelative(undefined)` → son satır
`new Date(undefined).toLocaleDateString("tr-TR")` → `Invalid Date`. CurseForge yolu (`mod.dateModified`) doğruydu.

Kusur 2'nin kökü: işleyici başta %10'luk ilerleme yayınlıyor, `status === "existing"` durumunda (arayüz "Bu mod pakette
zaten var" penceresini açar) **hiç terminal olay göndermiyordu**; arayüz satırı yalnızca terminal olayda kapatıyor.
Düzeltmeden sonra: `İçerik indiriliyor 100% Zaten kurulu • Lithium` ve satır kayboluyor.

Kusur 3'ün kökü: arayüzdeki `removeInstance` yardımcı fonksiyonu `bridge.instances.remove(id, true)` çağırıyor;
ne arayüzde ne ana süreçte onay adımı vardı (detay sayfasındaki "Tehlikeli alan" da doğrudan siler, yalnızca altında
"kalıcı olarak silinir" yazar). Arayüz kaynağı bu depoda yok (`out/renderer` minified), bu yüzden güvenlik katmanı
ana süreçte kuruldu: `confirmInstanceRemoval` → yerel `dialog.showMessageBox` (varsayılan düğme **Vazgeç**);
oyuncu vazgeçerse hiçbir şey silinmez ve arayüz "Silinemedi / Silme iptal edildi — hiçbir şey silinmedi." der.

### 2) Düzeltmelerin kanıtı (aynı akışlar yeniden koşuldu)

| akış | öncesi | sonrası |
|---|---|---|
| Keşfet → arama | 20 kartta `Invalid Date` | `10 gün önce`, `4 gün önce`, `1 saat önce` (0 kez `Invalid Date`) |
| Kur → sürüm seç (kurulu mod) | `İçerik indiriliyor 10% İndirme • lithium` 15 sn sabit | `100% Zaten kurulu • Lithium`, satır kapanıyor |
| Kur → sürüm seç (kurulu olmayan mod) | — | `journeymap-fabric-1.21.11-6.0.0.jar` (4.193.594 bayt) 3 sn'de indi |
| Sürümler → Sil | klasör anında silindi, iptal yok | klasör **yerinde**, onay bekleniyor |
| tam akış (6 sekme + kaba girdiler + F5) | — | 0 bulgu; yükleme 0,4 sn; F5 sonrası arayüz ayakta |

Paket denetimi bu üç düzeltmeyi de doğruluyor: `.perf-lab/launcher-tekrar-denetimi.mjs` §6 (paket içindeki
`index.js` üzerinde). Yeni asar: `e71a61a7b72c92b1f3f84de27e691a53bb0b2536b9a6870787972f49ca7fac4c` (10.566.753 B).
Beş kapı yeniden yeşil (`kanit/gate-*-20260927-v0129b.txt`; `defaults` çıktısı önceki turla bayt bayt aynı),
`paket-mod-kontrol` temiz, yama kontrolleri 5/5 "uygulanmış".

### 3) Hâlâ tökezletenler (bilinçli düzeltilmedi)

* **Sponsor/duyuru kartları yer tutucu**: `out/main/index.js` içindeki `DEFAULT_ADS` `targetUrl: "https://example.com"`,
  `serverAddress: "play.example.com"` taşıyor. Ana sayfada "Sunucu bilgisi alınamadı (play.example.com:25565)" yazıyor ve
  kart tıklanınca `example.com` açılır. Bu **ürün içeriği**; gerçek sponsor adresi/logosu girilince düzelir, kod tarafında
  tek satırlık veri (kanıt: kart metni oyun testi kaydında).
* **Tek örnek varken bile hedef sürüm seçtirme**: `Kur` her zaman "hangi sürüme kurulsun?" penceresini açıyor.
* **`[defaults]` günlük çifti kafa karıştırıcı**: "oyuncunun oyun içi profili korundu (11 ayar yazılmadı)" + "11 oyun ayarı
  yazıldı". Anlamı doğru (ilk satır oyuncunun oyun içi profil seçimiyle korunan anahtarlar, ikincisi profilin kendi
  anahtarları; `playerOwned` mekanizması çalışıyor — kopya profilde `cutoutLeaves` korundu), ama ardarda okununca
  çelişki gibi görünüyor.
* **Tıklanabilir satırlar düz `div`** (imleç `pointer`, `role`/klavye yok): erişilebilirlik ve otomasyon açısından kırılgan.

### 4) Ölçülmeyenler

* **Oyunu başlatma akışı** hiç denenmedi: oyuncunun makinesinde gerçek bir Minecraft istemcisi açılacağı için
  (tam ekran, GPU, hesap) bilinçli olarak duruldu. Yani uygulama sürüm/kütüphane doğrulaması, oturum açma ve oyun
  süreci yönetimi bu turda **test edilmedi**.
* **Mod paketi kurma, hesap ekleme/çıkarma, Java indirme, "Yeni sürüm" oluşturma** akışları koşulmadı (her biri
  yüzlerce MB indirme ya da hesap gerektirir).
* Yerel onay penceresi (kusur 3'ün düzeltmesi) otomasyonla **tıklanamaz**: doğrulama "klasör silinmedi + bildirim yok"
  üzerinden yapıldı; "Sil" düğmesinin gerçekten sildiği yol insan eliyle denenmeli.

### 5) Yapısal sağlık (bu turda dokunulan dosyalar ve sahiplik)

* **`out/main/index.js` (5.708 satır) her şeyi sahipleniyor**: ayar deposu, örnek yönetimi, mod taraması, indirme,
  başlatma, IPC işleyicileri, kapılar, Discord RPC, reklam/haber varsayılanları. Depoda launcher **kaynağı yok**
  (`src/` mevcut değil); "kaynak" olarak derlenmiş paket (`out/`) düzenleniyor. Bu yüzden her düzeltme
  `.perf-lab/launcher-*-yamala.mjs` biçiminde **dize çapalı yama** olarak iniyor ve paket elle yeniden paketleniyor (şu an 5 yama aracı).
* **`out/renderer/assets/index-eGkvtIab.js` (850 KB, minified)** tüm arayüz metnini/davranışını sahipleniyor ve
  pratikte düzenlenemiyor. Bu yüzden üç bulgunun ikisi **yanlış katmanda** düzeltildi (silme onayı ve "zaten kurulu"
  ilerleme metni ana süreçte); doğru sahibi arayüz paketi. Arayüz kaynağı depoya alınmadan bu tür kusurlar
  yalnızca yamayla kapatılabilir.
* **Mod tarafı temiz ayrılmış**: `YikimChip/YikimDraw/YikimHud/YikimWidgets/YikimLayout` (çizim),
  `YikimMetrics/YikimAbTest/YikimUiMetrics` (ölçüm), `YikimPanel` (arayüz), `YikimBridge/YikimCatalog/YikimModBridge`
  (launcher köprüsü), `YikimConfig` (ayar), `version/*/YikimAdapter` (sürüm kanalları). En büyük ve en çok değişen
  dosya `YikimPanel.java` (2.113 satır: satırlar + önbellek + sürükleme + katalog) — bir sonraki bölünme adayı.
* **Ölçüm/kanıt kültürü güçlü ama dize düzeyindeydi**: `.perf-lab` altındaki 25+ araç dize/baytkod denetliyordu;
  oyun testi aracı davranış düzeyinde ilk kez sürdü ve üç kusuru **yalnızca bu yüzden** buldu. Bu araç kalıcı
  bırakıldı: `node .perf-lab/launcher-ui-testi.mjs [--akis kur|indir|sil|sil-onay --yanit vazgec|sil]`.

## §31 — §30 düzeltmelerinin **davranış** doğrulaması: silme onayının iki dalı kanıtlandı · rig'de iki kusur

§30 üç düzeltmeyi üretti ama doğrulaması kısmen "klasör gitmedi" gözlemine dayanıyordu. Bu tur tek soruyu koştu:
**kod gerçekten doğru davranıyor mu?** Cevap: evet — ve doğrulama sırasında test aracının iki kusuru ortaya çıktı
(yani §30'daki "Vazgeç dalı doğrulandı" iddiası o koşumda aslında kanıtsızdı).

### 1) Ne koşuldu (hepsi tekrar, bu turda)

| komut | sonuç |
|---|---|
| `node .perf-lab/launcher-yama-davranis-testi.mjs` | 14/14 `ok`; yama öncesi kopyalarda karşıt sonuçlar (test ısırıyor) |
| `node .perf-lab/launcher-tekrar-denetimi.mjs` | §1–§6 ok (yinelenen olay koruması, A/B kapısı, paketteki üç düzeltme) |
| `node .perf-lab/paket-mod-kontrol.mjs` | 34/34 ok (jar iki kopya repo ile aynı) |
| 5 × `launcher-*-yamala.mjs --kontrol` | 5/5 "uygulanmış" |
| `node .perf-lab/verify-baseline.mjs` | yalnızca beklenen farklar |
| `asar` denetimi | `e71a61a7b72c92b1f3f84de27e691a53bb0b2536b9a6870787972f49ca7fac4c`, 10.567.998 B; asar içi `out\main\index.js` ile `out/main/index.js` **birebir** (sha256 `960bcb67…`, 225.863 B) |
| `node .perf-lab/launcher-ui-testi.mjs --akis sil-onay --yanit vazgec` | 0 bulgu (kayıt: `kanit/onay-vazgec-20260927-v0129c.txt`) |
| `node .perf-lab/launcher-ui-testi.mjs --akis sil-onay --yanit sil` | 0 bulgu (kayıt: `kanit/onay-sil-20260927-v0129c.txt`) |

Launcher kodu bu turda **değişmedi** (yalnızca test aracı), bu yüzden yeniden paketleme gerekmedi; asar sha'sı §30'daki
ile aynı. (§30'da yazılan "10.566.753 B" yanlış ölçümdü; doğru boyut 10.567.998 B — sha aynı olduğu için içerik değişmedi.)

### 2) Ne gözlendi (yerel onay penceresi artık gerçekten sürülüyor)

Pencere kimliği ve düğmeler Win32 üzerinden okundu; hiçbir adım tahmine dayanmıyor:

* `Sil`'den **önce** pencereler: yalnız `YIKIMLient`.
* `Sil`'e tıklandıktan sonra **aynı süreçte** yeni görünür pencere: `Sürümü sil` (alt düğmeler: `Vazgeç` • `Sil`).
* **Vazgeç** (BM_CLICK → `Vazgeç`): pencere kapandı; klasör **yerinde**; günlükte
  `[error] [ipc] instances:remove: Silme iptal edildi — hiçbir şey silinmedi.`; ekranda
  `Silinemedi / Error invoking remote method 'instances:remove': Error: Silme iptal edildi — hiçbir şey silinmedi.`
* **Sil** (BM_CLICK → `Sil`): pencere kapandı; klasör **silindi**; günlükte `[info] [instance] Sürüm silindi: 1.21.11`;
  liste `1 sürüm → 0 sürüm` (yayın çalışıyor); ekranda `1.21.11 silindi`.
* Her iki koşumda konsolda hata yok, arayüz ayakta (F5 öncesi/sonrası kontrol sayısı korunuyor).

### 3) Test aracında bulunan iki kusur (ürün değil — ama kanıtı geçersiz kılan kusurlar)

1. **Yanlış pencere başlığı**: rig `"Sürüm sil"` arıyordu, gerçek başlık `"Sürümü sil"` — filtre eşleşmedi ve
   "yerel onay penceresi açılmadı" diye **yanlış** yüksek bulgu üretti. Doğrulama yöntemi: aynı `showMessageBox`
   seçenekleriyle küçük bir Electron deneyi koşuldu ve pencere listesi okundu (`Sürümü sil` + `Electron`).
   Rig `"Sürüm"` ile esnek arıyor; başlığı kanıt olarak yazıyor.
2. **Odak bağımlı tuş gönderimi**: `AppActivate`/`SetForegroundWindow` + `SendKeys` ön plandaki pencereye gider;
   koşumlarda tuşlar bazen hiç ulaşmadı (pencere açık kaldı, "klasör silinmedi" **yanılsaması**). Yeni yol:
   pencere HWND'i bulunur → alt düğüm listesi okunur → ilgili düğmeye **doğrudan** `BM_CLICK` gönderilir →
   pencerenin **kapandığı** ayrıca beklenir. Artık iki dal da deterministik.

Sonuç olarak §30/4'teki "yerel onay penceresi otomasyonla tıklanamaz, insan eliyle denenmeli" notu **geçersiz**:
kliklenebiliyor ve iki dalın ikisi de kanıtlandı. Buna karşılık §30'da yazılan "Vazgeç sonrası görünür geri bildirim
yok" bulgusu **ürün kusuru değildi** — önceki koşumda pencere hiç yanıtlanmamıştı; arayüz iptalde doğru bildirimi gösteriyor.

### 4) Kalan iş (küçük, bilinçli dokunulmadı)

* İptal bildiriminin gövdesi ham Electron sarmalayıcısını taşıyor: `Error invoking remote method 'instances:remove':
  Error: …`. Mesaj oyuncuya teknik önekle görünüyor. Arayüz kaynağı depoda olmadığı için bu **ana süreçte**
  sadeleştirilmeli (ör. hatayı `message` alanı temiz bir nesneyle taşımak).
* §30/3'teki diğerleri aynı: `DEFAULT_ADS` yer tutucu, tek örnekte bile hedef sürüm sorma, `[defaults]` çift log satırı.

## §32 — Mod tarafı: günlük kuyruğu ve kare yolu (oyuncunun "mod FPS yiyor" iddiası)

Oyuncunun yönlendirmesi: "launcher'da sorun yok, **mod** FPS düşürüyor; günlük kaydeden kod
hatalı kodlandığı için FPS'ten daha çok yiyor olabilir." Bu bölüm o iddianın ölçümüdür.

### 1) Ne değişti (mod kaynağı)

* **`YikimLog.java` (yeni)**: rapor satırları render/tik iş parçacığında **yazılmaz**; sınırlı
  kuyruğa (128) bırakılır, tek bir daemon iş parçacığı (`YIKIM-gunluk`) yazar. Kuyruk dolunca
  **en eski** satır düşer (oyun akışı günlük yüzünden asla durmaz). Satır öneki ve biçim aynı
  (`YIKIM`).
* `YikimMetrics`, `YikimUiMetrics`, `YikimAbTest`: tüm rapor çağrıları `YikimLog.info/warn`'a çevrildi.
* **`flushNow()` + oyun kapanış olayı**: `YikimClient` artık
  `ClientLifecycleEvents.CLIENT_STOPPING.register(client -> YikimLog.flushNow())` ile kuyruğu
  **log4j hâlâ ayaktayken** boşaltıyor. Gerekçe ölçüldü (aşağıda): JVM kapanış kancası tek başına
  yetmiyor, log4j'nin kendi kapanışıyla yarışta satırlar düşüyor.
* Derleme: `bash scripts/build-mod.sh 1.21.1 1.21.4 1.21.8 1.21.10 1.21.11` → 5/5 başarılı;
  1.21.11 jar'ı 178.693 → **181.421 B**.

### 2) Ne koşuldu

| Koşum | Sonuç |
|---|---|
| `bash .perf-lab/mod-olcum/davranis-kos.sh` (yeni rig) | **kalan denetim = 0** (22 denetim) |
| `node .perf-lab/panel-kare-denetimi.mjs` | temiz (2 denetim §32'ye göre güncellendi) |
| `node .perf-lab/tikrar-envanteri.mjs` | temiz (§1b'ye flushNow + kapanış olayı denetimleri eklendi) |
| `node .perf-lab/verify-baseline.mjs` | yalnızca beklenen farklar |
| `node .perf-lab/hud-kare-denetimi.mjs` | temiz |
| `node .perf-lab/menu-yerlesim.mjs` | 12 pencere boyutunda taşma yok |
| `node .perf-lab/paket-mod-kontrol.mjs` | **3 kırmızı**: asar içindeki `resources/mods` kopyası bayat |

### 3) Ne gözlendi (sayılar)

* `YikimLog.info` **çağrı başına 3,5 µs**, en yavaş 225 µs; ilk çağrı 5,2 ms (sınıf + arka iş
  parçacığı kurulumu; rig'de taze JVM, oyunda bu maliyet açılışta bir kez).
* 2000 satırın **2000'i** `YIKIM-gunluk` iş parçacığından yazıldı; çağıran iş parçacığından
  yazılan **0** (hem kayıt havuzu hem **gerçek log4j** koşumunda).
* İş parçacığı kapıda tutulurken 500 satır: kuyruk **128'de kaldı** (toplam 129 satır), en eski
  düştü, en yeni + sonradan eklenen `SON` yazıldı.
* İş parçacığı kapıda + `System.exit`: kapanış kancası **30/30** satırı yazdı.
* 5000 satırlık patlama + `flushNow` + `System.exit` (log4j): kuyruktaki **128 satır + SON**
  çıkıştan **önce** dosyada. Aynı patlama yalnız JVM kancasına bırakıldığında log4j koşumunda
  kayıp yaşandı (ölçüm 2/5000 satır) → `flushNow` bu yüzden eklendi.
* **Kare yolu**: 400.000 kare → **0 günlük satırı, 0 bayt ayırma** (0,049 µs/çağrı). 30 sn
  raporu tam **1** satır, dakika kapanışı tam **2** satır (eğri + yığın/GC); hepsi arka iş
  parçacığından, hiçbiri `main`'den değil.
* `.perf-lab/mod-olcum/Olcum` (önceki tur): kare yolunun kendisi 0,028 µs/çağrı; 30 sn patlaması
  55 µs, 60 sn patlaması 115 µs; katmanın amortize maliyeti 3,77 µs/kare = 260 FPS kare
  bütçesinin **%0,098**'i.

**Yorum (dürüst):** "günlük kodu FPS yiyor" iddiası sayı olarak doğrulanmadı — kare başına
maliyet on binde bir mertebesinde. Gerçek kusur **senkron yazımdı**: satır başına ~88 µs (ilk
satırda log4j kurulumuyla 2,2 ms) doğrudan kareyi çizen iş parçacığında harcanıyordu; artık
kuyruğa bırakılıyor. Kalan gerçek maliyet adayları arayüz tarafında: panel açıkken kare ~5 ms
daha ağır (`panel açık 87 FPS` / `dünya 153 FPS`, oyuncunun log'u) ve ana menüde tek karede
22,5 ms'lik çizim sıçraması; bu turda ele alınmadı.

### 4) Kalan iş

* `dist/win-unpacked/resources/mods/` **güncellendi** (5 jar + manifest repo ile birebir).
  `app.asar` içindeki ikinci kopya bayat kaldı: launcher önce gevşek dizini arıyor
  (`process.resourcesPath/mods`), yani yeni mod oyuncuya gider; asar'ı yeniden paketlemek
  launcher paketleme adımıdır (bilinçli dokunulmadı).
* Oyuncunun örneğindeki jar hâlâ eski derleme (178.693 B); launcher boyut farkı nedeniyle bir
  sonraki başlatmada değiştirir (launcher kodu değişmedi).
* Arayüz kare maliyeti (panel/menü) bir sonraki aday — ölçüm var, düzeltme yok.

---

## §33 — Arka plan sıfırdan yazıldı: "tasarım FPS'i yiyor" iddiası ölçüyle kapatıldı (v1.3.0)

Oyuncu (§32 sonrası): *"bu gui hani eski tip şeklinde yap dediğimde FPS'min amına koyuyor… şu modu
0'dan yaz ama o tasarım FPS'i düşürmeyecek, etki bile etmeyecek şekilde kodla."*

### 1) Önce ölçüm: doğru sayı hangisi

"Kaç dolum" yanlış sayıdır. Minecraft bir ekranın bütün düz çizimlerini **tek bir çizim çağrısında**
birleştirir; yani kare maliyeti çizim çağrısı sayısıyla değil, **boyanan piksel** sayısıyla ölçülür:

```
aşırı çizim = (karede boyanan toplam piksel) / (ekran pikseli)
```

Bu yüzden yeni bir tezgâh yazıldı: `.perf-lab/arka-plan-bench/overdraw-kos.sh`. Modun **derlenmiş
jar'ı** hiç değiştirilmeden, sahte bir `GuiGraphics` (`class_332`) ile koşar; dolum sayısını, boyanan
pikseli, görünmez dolumu, ekran dışı dolumu ve kare başına nanosaniyeyi sayar. Sınırı jar'ın kendisinden
okur (`OVERDRAW_LIMIT_PER_MILLE`); sınır aşılırsa tezgâh kırmızı döner.

**Eski sürüm (1.2.0, 1920×1080):**

| Tasarım | Dolum | Aşırı çizim | ns/kare |
|---|---|---|---|
| Gün Batımı | 145 | **2,10×** | 1208 |
| Yıldızlı Gece | 123 | **2,06×** | 1958 |
| Kutup Işıkları | 104 | **2,12×** | 670 |
| Neon Izgara | 82 | **2,18×** | 554 |
| Okyanus | 51 | **2,03×** | 468 |
| Kiraz Baharı | 108 | **2,04×** | 1089 |

Yani GPU **her karede ekranın tamamını iki kez** boyuyordu. Fazlası üç yerden geliyordu:
(1) gökyüzü bantları ile tepe katmanlarının çakışması, (2) üç tepe katmanının birbirini boyaması,
(3) tam ekran vinyet (dört kenardan 12 dolum) + kare başına **26 hareketli öğe** ve her öğe için
trigonometri.

### 2) Arka plan sıfırdan

`YikimBackdrop` baştan yazıldı; sözleşme üç kurala indi:

1. **Her piksel bir kez boyanır.** Sanat ayrık bölgeler hâlinde kurulur: gökyüzü yalnızca gökyüzü
   şeridini, uzak sıradağ tek şeridi, tepeler yalnızca kendi kolonlarını boyar. Vinyet kaldırıldı.
   Ölçülen: **1,01× – 1,05×** (sınır 1,10×).
2. **Kare içinde tek hesap yok.** Ne çarpma, ne sinüs, ne karekök, ne rastgele, ne ayırma. Geometri
   yalnızca boyut/tasarım/tema değişince bir kez kurulur (`Canvas` = ayrık boyamayı zorlayan tuval).
3. **Hareket katmanı yok.** Kare başına 26 dolum + 26 trigonometri ediyordu; yıldızlar artık sabit.

**Yeni sürüm (1.3.0, 1920×1080):**

| Tasarım | Dolum | Aşırı çizim | ns/kare |
|---|---|---|---|
| Gün Batımı | 53 | **1,05×** | ~200 |
| Yıldızlı Gece | 61 | **1,05×** | ~250 |
| Kutup Işıkları | 43 | **1,05×** | ~199 |
| Neon Izgara | 44 | **1,04×** | ~196 |
| Okyanus | 17 | **1,01×** | ~158 |
| Kiraz Baharı | 50 | **1,05×** | ~214 |

Yani GPU'nun kare işi **yarıdan fazla azaldı** (2,10× → 1,05×; Okyanus 2,03× → 1,01×) ve kare
başına hesap ~6 kat düştü. "Etki bile etmemeli" cümlesinin ölçülebilir karşılığı bu: 1080p'de
kare başına ekranın en fazla ~%5'i kadar fazladan piksel.

### 3) Arayüzün geri kalanı

* `YikimDraw.chip` 4 → **2 dolum** (kırpılmış köşe zeminle üst üste biniyordu; HUD kare boyunca
  ekranda kaldığı için aşırı çizim burada en pahalı yerde birikiyordu).
* `YikimDraw.panel` 5 → **3 dolum** (çerçevenin üç kenarı zeminin üstüne biniyordu).
* Gradyan varsayılanı 24 → **6 bant**; FPS grafiği sütunları dörtte bire indi.
* Ana menü başlığındaki yinelenen "parlama" yazısı kaldırıldı (her karede bir tam yazı geçişi fazlaydı).
* Panel → Görünüm sekmesindeki arka plan satırına **ölçülen maliyet** yazılıyor
  (`Arka plan: … • 53 dolum/kare • aşırı çizim sınırı 1,10×`), yani kanıt oyuncunun gözünde.

### 4) Panel/HUD neden baştan yazılmadı (dürüst not)

Bunların kare maliyeti zaten ölçülü ve küçük: oyuncunun kendi log'unda `HUD 0,07-0,18 ms`,
`YIKIM paneli ort 0,09-0,37 ms` (§27 ölçümü), `YIKIM tik 0,020 ms`. Panelin 2175 satırını baştan
yazmak ölçümün işaret etmediği bir yeri kurcalamak olurdu; panelin bilinen tek gerçek kusuru
(500 ms'lik yolda dosya okuma → 2-5 ms sıçrama) §27'de kapatıldı.

Yine de **kalan gerçek belirsizlik** şu: oyuncunun gördüğü `panel açık 87 FPS / dünya 154 FPS`
farkını hiçbir ölçüm açıklamıyor (panel kendi çiziminde 0,37 ms). O fark bir sonraki saha
oturumunda tek değişkenli ölçülmeli; bunun için `showDiagnostics` açık olmalı (Codex 1.2.0'da
varsayılanı `false` yaptı, yani şu an sahada satır düşmüyor).

### 5) Kanıtlar

* **Derleme:** 11 sürüm `BUILD SUCCESSFUL` (log: `.perf-lab/build-mod-1.3.0.log`); jar boyutları
  **178.475–178.721 B** (1.2.0'da 181.756–182.003 B); `manifest.json` `modVersion 1.3.0`, 11 girdi
  (legacy 1.21.1 · legacy2 1.21.2-1.21.3 · hybrid 1.21.4-1.21.5 · mid 1.21.6-1.21.8 ·
  newer 1.21.9-1.21.10 · modern 1.21.11).
* **Dağıtım:** `resources/mods` + `dist/win-unpacked/resources/mods` 11 jar + manifest, iki kopya
  birebir (`diff` temiz).
* **Tezgâhlar:** `arka-plan-bench/calistir.sh` → bütçe içinde, boşa iş yok (en kötü 64 dolum);
  `overdraw-kos.sh` → **sözleşme içinde** (en kötü 1,05×).
* **Kapılar:** `panel-kare-denetimi` temiz, `hud-kare-denetimi` temiz, `menu-yerlesim` 12 boyutta
  taşmasız, `paket-mod-kontrol` doğru, `tikrar-envanteri` temiz, `verify-baseline` **yalnızca
  beklenen farklar**, davranış rig'i **kalan denetim = 0**.
* **Eski dosyalar:** `dist/YIKIMLient-0.10.1-*.exe` (1.2.0 modunu taşıyan sürüm)
  `_arsiv-launcher-0.10.1-1.2.0/` altına yedeklendi.

---

## §34 — Saha kanıtı: "performans gene iyi değil" cümlesinin kökü ölçüldü (1.3.0 oturumu)

Oyuncu 1.3.0'ı kurdu ve oynadı (launcher log'u 18:47Z = 21:47 yerel:
`YIKIM Client modu kuruldu: yikimlient-1.3.0+1.21.11.jar`), sonra *"gene performans iyi değil"* dedi.
Örnek klasörü: `%APPDATA%\yikimlient\game\instances\1-21-11-b9893d\logs\latest.log`.

### 1) Oyuncunun gördüğü üç satır

```
[21:48:53] YIKIM FPS durumu: menü 59.5 FPS (241 kare • 16.82 ms • p95 18.14)
[21:48:53] YIKIM arayüz: ana menü 242 kare • ort 0.45 ms • en yüksek 18.71 ms • 61 dolum/kare
[21:48:53] YIKIM arayüz UYARI: tek kare 18.71 ms (ana menü) — çizim bütçesi aşıldı
```

Bu üç satır yan yana okununca *"mod menüde 18,7 ms yiyor, 59 FPS'e düşürüyor"* çıkıyor. Oysa:

| Sayı | Gerçekte ne |
|---|---|
| `59.5 FPS / 16.82 ms` | **Oyunun** kare aralığı (modun değil). Ana menünün kare hızı oyunda 60'a sabittir — Mojang hatası **MC-251353**, donanım/ayar sorunu değil |
| `ort 0.45 ms` | Modun menüdeki **kendi** çizimi: kare aralığının **%2,7'si** |
| `18.71 ms` | Pencere içindeki **tek** kare — ilk kare/atlas ısınması; ortalama 0,45 ms |
| `UYARI: çizim bütçesi aşıldı` | Eski kod tek kareyi uyarı sayıyordu → oyuncuya "mod suçlu" dedirten satır buydu |

Yani modun menüdeki payı 0,45 ms; oyuncunun gördüğü 16,82 ms oyunun kendi menü sınırı.

### 2) Bu yüzden değişenler

* `YikimUiMetrics` yeniden yazıldı: satır artık **modun çizimini** kare aralığından ayırıyor ve
  payı yüzde olarak yazıyor:
  `… • mod çizimi ort 0.45 ms • en yüksek 1.10 ms • 61 dolum/kare • kare aralığı 16.82 ms • modun payı %2.7`
* **Isınma kuralı:** pencerenin ilk 30 karesi ortalamaya ve "en yüksek" değerine katılmıyor.
* **Uyarı ortalamaya bağlandı:** tek kare sıçraması artık "bütçe aşıldı" demiyor; uyarı yalnızca
  ortalama 2 ms'yi aşarsa yazılıyor ve yanında pay yüzdesi duruyor.
* `YikimMetrics` durum satırına `• YIKIM arayüz payı: menüde %2.7` eklendi; kodda MC-251353 notu var.
* `.perf-lab/panel-kare-denetimi.mjs` §8: bu ayrımı (ısınma kuralı + ortalamaya bağlı uyarı + pay
  yüzdesi) denetleyen 6 yeni kontrol — satır bir daha yanlış okunacak hâle gelemez.

### 3) Launcher: geri alınan yama

Oyuncu: *"sürüm sil diyince ayrı kötü düz bir panel açılıyor, o yoktu."* Bu,
`.perf-lab/launcher-silme-onayi-yamala.mjs`'in eklediği `electron.dialog.showMessageBox` onayıydı —
launcher'ın kendi arayüzünden kopuk, işletim sisteminin düz gri penceresi. Arayüz paketi bu depoda
kaynak olarak bulunmadığı (minified) için onay launcher'ın kendi diliyle yazılamıyor; silme eski
davranışına döndürüldü: `.perf-lab/launcher-silme-onayi-geri-al.mjs` (uygulandı, `--kontrol` temiz).

### 4) Kalan gerçek belirsizlik

Dünyada oynarken 1.3.0'ın kare maliyeti **ölçülmedi**: bugünkü oturum menü + 12 saniyelik sunucu
girişinden ibaret (`YIKIM SMP`, 21:50). Bir sonraki oturumda `dünya` ve `panel açık` satırları
okunmalı; asıl karşılaştırma da tek değişkenli olmalı (aynı dünya, aynı yerde, HUD açık/kapalı).

---

## §35 — OYUN ÇÖKTÜ: benim yazdığım biçim dizesi (v1.3.1'de düzeltildi)

22:15:53'te oyun çöktü. Çökme raporu (`1-21-11-40d4d9/crash-reports/crash-2026-09-28_22.15.53-client.txt`):

```
java.util.MissingFormatWidthException: %0.1f
  at java.util.Formatter$FormatSpecifier.checkNumeric(Formatter.java:3302)
  at java.util.Formatter.format(Formatter.java:2728)
  at com.yikimlient.client.YikimUiMetrics.flush(YikimUiMetrics.java:198)
  at com.yikimlient.client.YikimClient.tick(YikimClient.java:71)
```

**Sebep:** §34'te eklediğim yeni arayüz satırında yüzde işareti yanlış yazılmıştı. Java'da düz
`%` yazmak için `%` iki kez yazılır, yani doğrusu `%%%.1f`; ben `%0.1f` yazdım. `0` bayrağı
genli` olmadan kullanılınca `String.format` **istisna atar** ve bu satır her 30 saniyede bir kare
(tik) yolundan çalıştığı için oyun tamamen çöktü.

**Düzeltme (v1.3.1):**

* Biçimler tek yerde toplandı (`FORMAT_LINE`, `FORMAT_INTERVAL`, `FORMAT_WARN`) ve doğru yazıldı.
* Yeni denetim aracı: **`.perf-lab/bicim-denetimi.mjs`**. Bütün mod kaynağındaki `String.format`
  argümanlarını gerçek bir biçim ayrıştırıcısıyla doğrular: geçersiz dönüşüm, dize sonunda yarım
  `%` ve **genişliksiz `0` bayrağı** hata sayılır (38 biçim dizesi tarandı, temiz).
* Aracın kendini testi var (`--kendini-test`): çöken dizeyi yakaladığını ve düzeltilmiş dizeyi
  temiz saydığını her koşuda kanıtlar (yanlış pozitif üreten bir denetim değil).

**Dağıtım:** 11 sürüm 1.3.1 olarak derlendi; `resources/mods`, `dist/win-unpacked/resources/mods`
ve paket (22:23) güncellendi. Oyuncunun örneğindeki çöken jar
(`instances/1-21-11-40d4d9/mods/yikimlient-1.3.0+1.21.11.jar`) elle değiştirildi.
