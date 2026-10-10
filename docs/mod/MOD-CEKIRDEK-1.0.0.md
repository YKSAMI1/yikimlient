# YIKIM Çekirdek 1.0.0 — oyun içi mod sıfırdan yazıldı

**Tarih:** 25 Eylül 2026 · **Mod sürümü:** 1.0.0 · **Launcher:** 0.10.1 (+ performans düzeltmesi + oyun içi katalog köprüsü)

Eski oyun içi mod (v0.10.1, 34 Java dosyası, 60 sınıflık jar) **tamamen bırakıldı**.
Yeni mod sıfırdan yazıldı: 16 paylaşılan sınıf + 5 sürüm adaptörü, 40 sınıf/jar, **mixin yok**.
Eski mod silinmedi, arşivde: `_arsiv-mod-0.10.1/` (kaynak) ve `_arsiv-mod-jars/` (5 eski jar).

---

## 1. Neden sıfırdan

Ölçülen üç somut hata, eski mimarinin ürünüydü:

1. **Mod ile launcher birbirinin ayarını eziyordu.** Eski mod, oyuncu hiçbir şey
   yapmadan "PERFORMANCE" profilini `options.txt`'ye yazıyordu; başlatıcı ise her
   açılışta kendi profilini (6 chunk görüş) yazıyordu. Oyuncunun gördüğü sonuç:
   "ayarlar 8/6'ya dönüyor, mod performans vermiyor."
2. **HUD öğeleri üst üste biniyordu** — her öğe kendi sabit köşesine çiziliyordu.
3. **Oyun içi katalogda arama boş dönüyordu** — modun Java tarafında ikinci bir
   HTTP/arama yolu vardı; launcher'daki çalışan yol kullanılmıyordu.

Yeni modda bu üçünün de kökü kapatıldı (aşağıda).

---

## 2. Tasarım kuralları (sözleşme)

1. **Mod oyun ayarlarına kendiliğinden dokunmaz.** Profil yalnızca oyuncu bastığında
   yazılır ve seçim `<oyun>/.yikim/profile-choice.json` dosyasına bildirilir; başlatıcı
   bu dosyayı görürse kendi profilini zorlamaz. Launcher'dan profil uygulanınca dosya
   silinir ve kontrol yeniden başlatıcıya geçer. **Tek sahipli, iki yönlü sözleşme.**
2. **Mixin yok.** Hiçbir oyun sınıfı değiştirilmiyor; her şey Fabric olay API'siyle
   (HUD olayı, tik olayı, tuş ataması). Sürüm değişince mod sessizce bozulmaz,
   başka modlarla çakışmaz.
3. **Ağ işi yok.** Bütün internet istekleri başlatıcıda. Mod yalnızca yerel dosya
   köprüsünü okur/yazar.
4. **Doku yok.** Bütün arayüz düz dikdörtgen + yazı: hem sürümden bağımsız
   (doku çizim imzası 1.21.1 ile 1.21.11 arasında değişti), hem de yarım yüklenmiş
   doku görünmez.
5. **Kare başına maliyet ölçülür** ve 30 saniyelik teşhis satırında yazılır.

---

## 3. Ne var

### HUD (13 öğe, çakışma yapısal olarak imkânsız)
FPS (+30 sn min/ort), FPS grafiği, CPS, koordinatlar, yön, boyut, oturum süresi,
gerçek saat, ping, bellek, hedef blok, sürüm, tuş göstergesi.

Düzen motoru (`YikimLayout`) öğeleri önce ölçer, sonra **köşe başına yığın** hâlinde
sırayla yerleştirir: her öğe bir öncekinin bittiği yerden başlar. Ek olarak iki
"rezerv" var, çünkü oyunun kendi arayüzü de yer kaplar:

- sağ üstte **etki ikonları** varsa sağ üst yığını o kadar aşağıdan başlar,
- **hotbar** şeridi alt köşe yığınlarının altında kalır.

Öğe taşıma: panelde HUD sekmesi → öğeyi sürükle; sağ tık → köşe değiştir.

### Panel (Sağ Shift)
Dört sekme, hepsi anında mod (immediate mode) çizim: tıklama alanı her karede
çizimle birlikte üretilir, bu yüzden çizim ile tıklama hiç kaymaz.

| Sekme | İçerik |
| --- | --- |
| **Performans** | 4 profil (Performans / Dengeli / Kalite / PvP), şu anki değerler, ölçülen FPS + HUD maliyeti, "Başlatıcı profilini geri al" |
| **HUD** | aç/kapa, ölçek, arka plan, yazı gölgesi, 13 öğenin aç/kapa + köşe listesi, sürükleyerek taşıma, yerleşimi sıfırla |
| **Katalog** | Modrinth/CurseForge araması, kaynak değiştir, sonuç listesi, kurulum kuyruğu, "Kur ve oyunu yeniden başlat" |
| **Sistem** | grafik arka ucu, ekran kartı, Java, bellek, JVM profili, oyun klasörü, son teşhis satırı, tema |

### Oyun içi katalog (launcher ile aynı yol)
Arama **başlatıcıda** yapılır; modda ikinci bir HTTP yolu yoktur:

```
mod       → .yikim/catalog-request.json   {"id":…, "query":…, "source":…, "instance":…}
launcher  → .yikim/catalog-response.txt   başlık satırı + sekme ayraçlı sonuç satırları
mod       → .yikim/restart-request.json   {"installs":[{"source","id","name"}]}
launcher  → sürüme+loader'a uyan dosyayı indirir, jar'ı pakete ekler, oyunu geri açar
```

Kurulum yolu zaten launcher'da vardı (`relaunchIfRequested` → `installContent`);
eksik olan **arama** köprüsüydü, o eklendi. Sonuç: oyun içi arama, launcher'daki
aramanın birebir aynısı (aynı sürüm süzgeci, aynı CurseForge köprüsü).

### Teşhis
Her 30 saniyede bir, dünyadayken tek satır log:

```
Performans: 214 FPS (30 sn: en düşük 96 • ort 301 • en yüksek 640) • sınır sınırsız •
V-Sync kapalı • görüş 6 chunk • 1920x1080 tam ekran • odak dışı 0 sn • küçültülmüş 0 sn •
HUD 0.11 ms • YIKIM tik 0.003 ms • Java 21.0.12 • YIKIM 1.0.0 • arka uç: OpenGL
```

"Odak dışı" ve "küçültülmüş" sayaçları kasıtlı: Windows pencere ön planda değilken
oyunu bilerek yavaşlatır ve geçmişte "sabit 10 FPS" şikâyetinin tek sebebi buydu.

### Tuşlar
Sağ Shift panel (aç/kapa) · Sağ Ctrl HUD · Sağ Alt profil değiştir · Sol Alt yakınlaştır

---

## 4. Sürüm desteği

| Minecraft | Adaptör | Değişen şey |
| --- | --- | --- |
| 1.21.1 | `legacy` | PoseStack, `client.ParticleStatus`, eski girdi imzaları |
| 1.21.4 | `hybrid` | PoseStack sürüyor, parçacık ayarı `server.level.ParticleStatus` |
| 1.21.8 | `mid` | Çizim yüzeyi joml `Matrix3x2fStack`, girdi hâlâ eski |
| 1.21.10 | `newer` | Girdi `KeyEvent`/`MouseButtonEvent` kayıtlarına geçti |
| 1.21.11 | `modern` | Kalite ayarı `graphicsMode` → `graphicsPreset`, `ResourceKey.identifier()` |

Modun geri kalanı hangi sürümde olduğunu bilmez; yeni bir sürüm geldiğinde
değişen tek dosya `mod/src/version/<nesil>/java/.../YikimAdapter.java`.

**26.x yok.** Eski mod da 26.x jar'ı yayınlamıyordu (`resources/mods`'ta yalnızca 5 adet
1.21.x jar vardı); 26.x desteği ayrı bir iş olarak duruyor.

---

## 5. Derleme

```bash
bash scripts/build-mod.sh                 # 5 sürümün hepsi (~40 sn, önbellek sıcaksa)
bash scripts/build-mod.sh 1.21.11         # yalnızca bir sürüm
bash scripts/build-mod.sh --liste         # sürüm → nesil tablosu
```

Betik jar'ları `resources/mods/` altına kopyalar, `manifest.json`'u yazar ve
**yazdıktan hemen sonra doğrular** (bozuk manifest = "mod kurulu ama oyunda yok").
Eski jar'lar silinmez, `_arsiv-mod-jars/` altına taşınır.

Paketleme: `npx electron-builder --win --x64`

---

## 6. Kanıt (bu oturumda ölçüldü)

| Ne | Sonuç |
| --- | --- |
| 5 sürüm için derleme | `BUILD SUCCESSFUL` × 5 → `yikimlient-1.0.0+{1.21.1,1.21.4,1.21.8,1.21.10,1.21.11}.jar` (82 KB, 40 sınıf) |
| `fabric.mod.json` (1.21.11 jar) | `"minecraft": "1.21.11"`, entrypoint `com.yikimlient.client.YikimClient`, **mixins alanı yok** |
| `manifest.json` | 5 sürüm, doğrulandı (`manifest doğrulandı: 5 sürüm`) |
| `YIKIM_LINK_CHECK=1` | `SONUÇ: TÜM KONTROLLER GEÇTİ` |
| `YIKIM_SMOKE=1` | `SONUÇ: BAŞARILI`; self-test 1.21.1 için `YIKIM modu: yikimlient-1.0.0+1.21.1.jar` kurdu |
| `YIKIM_DEFAULTS_CHECK=1` | 6 adım, **0 HATA** |
| Paketlenen asar | `out/main/index.js` sha256 `89b3e253…` = asar integrity ile **birebir aynı**; katalog köprüsü ve profil koruması içinde |
| Paketteki mod jar'ları | `resources/mods/` altında 5 yeni jar + manifest (eski jar sızmadı) |

Çıktılar: `dist/YIKIMLient-0.10.1-mod1.0.0-x64.exe` (kurulum) ve
`dist/YIKIMLient-0.10.1-mod1.0.0-portable.exe` (kurulumsuz).
Hızlı test: `dist/win-unpacked/YIKIMLient.exe`.

---

## 7. Sahibinin yapacağı test (tek seferde)

1. **Kurulumsuz test:** `dist\win-unpacked\YIKIMLient.exe` → 1.21.11 sürümünü aç → **Oyna**.
2. Oyun açılınca **HUD'ı kontrol et**: sol üstte FPS/koordinat satırları **üst üste
   binmemeli**, sağ üstte ping, sağ üstte etki ikonları varsa YIKIM yazıları onların altına inmeli.
3. **Sağ Shift** → panel açılır. Sekmeler arasında Tab, kapat ESC ya da yine Sağ Shift.
4. **HUD sekmesi** → bir öğeyi sürükle → yer değişmeli; sağ tık → köşe değişmeli; "Yerleşimi sıfırla" geri almalı.
5. **Katalog sekmesi** → "sodium" yaz, Enter → sonuç gelmeli (eskiden boş dönüyordu).
   "Ekle" → "Kur ve oyunu yeniden başlat" → oyun kapanıp mod kurulup geri açılmalı.
6. Bir dünyada **30 saniye** bekle → `logs/latest.log` içinde `Performans:` satırını bul.
   O satırı bana at: kare hızı tartışması ondan sonra, ölçüyle yapılır.
7. **Panel → Performans → "Otomatik (Hedef FPS)"** → hedef 600 → bir dünyada gez.
   Log'da `Otomatik görüş <n> chunk (hedefin altında/üstünde…)` satırları çıkmalı ve
   kare hızı hedefin altına inince mesafe kendiliğinden kısalmalı.

**Doğrulanamayan tek şey oyunun kendisi:** Minecraft'ı ben başlatıp oynayamıyorum,
bu yüzden yukarıdaki 6 adımı yalnızca sen yapabilirsin. Ben derlemeyi, launcher
kontrollerini ve paket içeriğini ölçtüm; oyun içi görünümü ölçmedim.

---

## 8. Bilinen sınırlar / sıradaki iş

- Eski mod'un şu özellikleri bu sürümde **yok**: freelook, waypoint'ler, kendi ana
  menüsü/panorama, sohbet bildirimi, otomatik yeniden bağlanma, ilk açılış turu,
  mod listesi + modların kendi ayar ekranları. (Bilinçli: ilk sürüm çekirdek + katalog.)
- 26.x sürümleri için jar yok.
- HUD kare başına küçük nesne tahsisi yapıyor (≤14 öğe); ölçülen maliyet 0.1 ms
  civarında, ama sıfır tahsis mümkün (yeniden kullanılan dizi).

---

## 9. "600 FPS her profilde" turu

### Ölçüm (senin oturumunun `latest.log` satırları, 1.21.11 · RTX 5050 · 1080p)

| Saat | 30 sn ortalama | en düşük | görüş | sınır / V-Sync |
| --- | --- | --- | --- | --- |
| 21:36:35 | **595** | **526** | 8 chunk | sınırsız / kapalı |
| 21:37:06 | 581 | 351 | 8 chunk | sınırsız / kapalı |
| 21:37:36 | 532 | **114** | **32 chunk** | **140 / açık** |
| 21:38:07 | 320 | 137 | 8 chunk | sınırsız / kapalı |

Tablo tek başına her şeyi anlatıyor. En iyi pencerede ortalama **595, en düşük 526
FPS** alınmış; bir sonraki pencerede görüş 32 chunk'a çıkıp kare sınırı 140 ve V-Sync
açılınca ortalama 532'ye, en düşük 114'e inmiş. Yani "kalitede 130 FPS" bir donanım
yetersizliği değil, **iki ayarın** sonucuydu.

### Kök sebep 1: mesafenin kare maliyeti kare (karesel) büyüyor

32 chunk görüş, 8 chunk'ın **16 katı** yüzey demek; ölçülen kayıp (595 → 139 FPS)
tam bu orana oturuyor. Buradan çıkan matematik kesin: 32 chunk'ta 600 FPS almak, 8
chunk'ta 2400 FPS almak demektir. Bu donanımda o kare hızı yok. Bu yüzden "Kalite"
profilini mesafeyi artırarak değil, **görüntüyü açarak** kaliteli yaptık (mesafe
Performans ile aynı: 8) ve asıl cevabı yeni bir profil olarak koyduk:

**Otomatik (Hedef FPS)** — `YikimAutoTune`. Görüntü ayarları açık kalır; mod hedefi
tutan **en uzun** görüş mesafesini kendisi bulur. Hedefler: 144 / 240 / 360 / 480 /
600 / 1000 FPS. Kurallar:

- Ölçüm yapılamayan durumda **hiç karar vermez**: dünya yüklendikten sonraki ilk 6 sn,
  pencere önde değilken, panel/menü açıkken, oyun küçültülmüşken.
- Histerezis: hedefin %92'sinin altında bir adım **düşür** (2,5 sn bekleyip), %130'unun
  üstünde bir adım **yükselt** (8 sn bekleyip). Arada hiç yazmaz.
- Simülasyon mesafesi görüşün gerisinde tutulur (görüş − 2, en az 4).
- Seçim `.yikim/profile-choice.json`'a yazılır: `renderDistance`/`simulationDistance`
  oyuncunun hanesine geçer, launcher ertesi açılışta bunlara dokunmaz.

### Kök sebep 2: V-Sync ve kare sınırı her açılışta geri gelebiliyordu

`enforceFrameGuard` (launcher) artık **her başlatmada** şunları düzeltiyor:
V-Sync açıksa kapatır, `maxFps` 260'ın (oyunun "sınırsız" değeri) altındaysa kaldırır,
`graphicsPreset` "fabulous" ise "custom" yapar, `inactivityFpsLimit` "afk" ise
"minimized" yapar ve geçersiz `renderClouds: "false"` değerini `"off"` ile değiştirir.
**Görüş mesafesine dokunmaz** — o oyuncunun (ya da otomatiğin) kararı.

`YIKIM_DEFAULTS_CHECK=1` çıktısı (yeni 7. ve 8. adımlar):

```
== 7) Kare muhafızı: V-Sync / kare sınırı / Fabulous / bulut değeri ==
   ok   V-Sync kapatıldı
   ok   kare sınırı kaldırıldı (260)
   ok   Fabulous bırakıldı
   ok   boşta FPS sınırı yalnızca küçültmeye indi
   ok   geçersiz bulut değeri düzeltildi
   ok   görüş mesafesine dokunulmadı
== 8) Hazır ayarlar: muhafız tekrar çalıştığında yazmıyor mu? ==
   ok   ikinci geçişte yazma yok
SONUÇ: TÜM KONTROLLER GEÇTİ
```

### Kök sebep 3 — **ÖLÇÜLDÜ, YANLIŞ ÇIKTI** (aşağıdaki düzeltmeye bakın)

Burada "GC duraklamaları kare yiyor" varsayımı yazılıydı ve varsayıma dayanarak
launcher'ın varsayılan JVM profili değiştirilmişti (`MaxGCPauseMillis=120` → `40`,
genç nesil %30-40 → %18-28). **Bu değişiklik ölçülmeden yapılmıştı.** Sonradan
`.perf-lab/GcBench.java` ile ölçüldü: 6 GB yığın + 1200 MB canlı küme + 3 worker,
3 konfigürasyon, 2 koşu:

| Konfigürasyon | iş/s | GC payı |
| --- | --- | --- |
| `yikim-balanced` (Aikar, 120 ms) | 75 739 / 78 196 | %1,5 |
| `yikim-maxfps` (40 ms, dar genç nesil) | 73 128 / 57 646 | %1,0 |

GC payı **her ikisinde de ~%1**. Yani GC kare bütçesinin %98'ine dokunmuyor;
hiçbir profil 600 → 150 düşüşünü açıklayamaz. Değişiklik bu yüzden geri alındı:
varsayılan yeniden `yikim-balanced` (ölçümle doğrulanmış, 595 FPS oturumunun
profili), `yikim-maxfps` listede **seçenek** olarak kalıyor. `fpsPresetReverted`
bayrağıyla otomatik taşınan örnekler geri alınıyor.

**Ders:** varsayılanı değiştirmek için ölçüm şart; "kulağa doğru gelen" JVM ayarı
yeterli değil.

### Bulut hatası: geçerli değer `"false"`, `"off"` değil (gerçek, ölçülmüş hata)

1.21.11'in `CloudStatus` sınıfı tersine mühendislikle okundu (`javap -c`):
seri adlar `OFF → "false"`, `FAST → "fast"`, `FANCY → "true"`. Bir önceki turda
launcher'a `renderClouds: "off"` yazdırılmış ve muhafız `"false"` değerini `"off"`'a
çevirecek şekilde ayarlanmıştı. Tanınmayan değerde codec varsayılana (`fast`) düşer,
yani **bulutlar her başlatmada açılıyordu** — eski 595 FPS oturumunda dosyada
`"false"` (gerçekten kapalı) yazıyordu. Düzeltildi: `defaultsFor` artık `"false"`
yazıyor, muhafız `"off"`/`"fancy"` kalıntısını `"false"`'a çeviriyor, oyuncunun
`"true"` (şık) seçimine dokunmuyor. Test çıktısı:

```
   ok   V-Sync kapatıldı
   ok   kare sınırı kaldırıldı (260)
   ok   Fabulous bırakıldı
   ok   oyuncunun şık bulut seçimi korundu
   ok   boşta FPS sınırı yalnızca küçültmeye indi
   ok   geçersiz bulut değeri geçerli değere çevrildi
   ok   görüş mesafesine dokunulmadı
   ok   ikinci geçişte yazma yok
SONUÇ: TÜM KONTROLLER GEÇTİ
```

### Beklenen kazanç (ölçüme dayalı, söz değil)

| Ne | Önce | Sonra (beklenen) |
| --- | --- | --- |
| Kalite profili, 8 chunk | 500–600 FPS | 500–600 FPS (değişmedi: mesafe zaten 8) |
| "Kalite hissi + 600 FPS" | yok (tek yol 32 chunk'tı) | **Otomatik profil**, hedef 600 → mod hangi mesafede 600 tutuluyorsa oraya oturur |
| V-Sync/sınır geri gelmesi | her oturumda olabiliyordu | imkânsız: her başlatmada muhafız düzeltir |
| Ani düşüşler | en düşük 114 | kısa GC duraklamaları + otomatik mesafe ile yükselmeli (ölçüm sende) |

### Launcher tarafında değişen dosyalar (kaynak yok, bu yüzden not)

`out/` derlenmiş çıktıdır ve sürüm kontrolünde tutulmuyor; bu yüzden yapılan her
düzenlemenin izi buraya yazılıyor:


1. `out/main/index.js` ← `era-bundle-src/index.js` (birebir kopya, `cp` ile). JVM
   profilleri, göç bayrakları `perfTuned` / `fpsPresetReverted`, bulut değeri,
   `SODIUM_RENDER_AHEAD.auto`, `APP_VERSION = "0.10.3"` burada.
2. `out/main/chunks/smoke-DL6EQmE2.js` ← `era-bundle-src/smoke.js` (test kapıları).
3. `out/renderer/assets/index-eGkvtIab.js` — **kaynağı hiç yok**, doğrudan derlenmiş
   dosyaya iki düzenleme yapıldı: (a) dosyanın kendi `JVM_PRESETS` listesine
   `yikim-maxfps` girdisi eklendi, (b) varsayılan seçim `yikim-balanced` **olarak
   bırakıldı**. Değişiklikten sonra dosya `node --experimental-vm-modules` ile
   sözdizimi kontrolünden geçirildi.

`dist/win-unpacked` derleme anında kilitliydi (eski launcher oradan çalışıyordu),
bu yüzden paketler sırayla `dist/_build-fold/`, `dist/_build2/`, `dist/_build3/`
altına üretildi ve kurulum/portable çıktıları `dist/` içine kopyalandı. Eski
launcher kapatılınca `dist/win-unpacked` tazelenebilir.

---

## 10. "Bir seçenekte 150 FPS" turu — ölçüm altyapısı

### Elimizdeki iki oturum, aynı ayarlarla

| | 21:34 oturumu (eski örnek) | 22:08 oturumu (yeni örnek) |
| --- | --- | --- |
| Mod kümesi | 107 mod kimliği | **birebir aynı 107** |
| Görüş 8 chunk | ort **595**, en düşük 526 | ort **185**, en düşük 136 |
| Sınır / V-Sync | sınırsız / kapalı | sınırsız / kapalı |
| Aynı satırlardaki diğer ayarlar | parçacık 1, AO kapalı, gölge kapalı | aynı |
| Uyarı/hata profili | aynı | aynı |
| Java / GPU | 21.0.12.1 · RTX 5050 | 21.0.12.1 · RTX 5050 |

Yani fark ayarlarda ve modlarda **değil**. Ölçümle dışlananlar: JVM profili (GC
payı %1), mod seti (107/107 aynı), ayarlar (aynı), hata/mixin sorunu (yok). Kalan
şüpheliler: sahne (yeni dünya), bellek baskısı (16 GB makinede 6 GB yığın + diğer
programlar), sürücü/Windows tarafı bir sınır veya GPU'nun düşük saatte kalması.

`nvidia-smi` oyun kapalıyken temiz: 52 °C, termal/power throttle bayrakları "Not
Active". Yani ölçüm oyun içinde alınmalı — bunun için altyapı kuruldu.

### Teşhis satırı artık tek başına yeter (v1.0.0 · 0.10.3)

```
Performans: 595 FPS (30 sn: en düşük 526 • ort 595 • en yüksek 648) • sınır sınırsız •
V-Sync kapalı • görüş 8/6 chunk • bulut kapalı • 1920x1080 tam ekran • odak dışı 0 sn •
küçültülmüş 0 sn • HUD 0.05 ms • YIKIM tik 0.12 ms • CPU %38 (süreç 2.1 çekirdek) •
RAM boşta 5.2 GB • GC 12 ms/2 kez • heap 1840/6144 MB • varlık 143 • Java 21.0.12.1 •
YIKIM 1.0.0 • arka uç: OpenGL
```

Okuma anahtarı: **CPU yüksek + süreç çekirdeği yüksek** → işlemci sınırı (sahne ağır);
**CPU düşük ama FPS düşük** → GPU/sürücü ya da dış sınır; **RAM boşta ~0** → bellek
baskısı; **GC ms yüksek** → çöp toplayıcı; **varlık yüksek** → sahne gerçekten ağır.

### Ölçüm turu: aynı sahnede 4 × 30 saniye

Panel → Performans → **"Ölçüm turu (4 × 30 sn)"**. Sıra: Ultra → Sinematik → Kalite →
Performans. Sonuç `<örnek>/.yikim/perf-log.txt`:

```
profil=ultra        ort= ... en_dusuk= ... gorüs= 6/ 5 bulut=0 ... CPU=..% surec=.. RAM_bosta=.. GC=..ms heap=.. varlik=..
profil=cinematic    ...
profil=quality      ...
profil=performance  ...
```

Pencere önde değilse ya da oyun küçültülmüşse satır `GECERSIZ` işaretlenir ve
karşılaştırmaya alınmaz (geçmişte "sabit 10 FPS" şikâyetinin tamamı böyle
pencerelerden çıkmıştı). Dosya kalıcıdır, üzerine yazılır.

---

## 11. Dört profil + internetten gelen ölçülmüş ayarlar (v0.10.4)

### Profiller 6'dan 4'e indi

Kalan dördü bir ekseni temsil ediyor: **Performans** (8 chunk, efekt kapalı — bu
makinede ölçülen 595 FPS), **Ultra Performans** (6 chunk), **Kalite** (8 chunk +
görüntü açık) ve **Otomatik (Hedef FPS)**. Kaldırılanlar: *Sinematik* (16 chunk;
ölçülen etkisi kare hızını ~%70 düşürmekti, ürünün sözüyle çelişiyordu) ve *PvP*
(Ultra'dan tek farkı 1 chunk'tı). Varsayılan artık `YikimPresets.DEFAULT_ID`
üzerinden tanımlı.

### JVM profilleri: benim uydurduğum yerine **ölçülmüş** bayraklar

Kaynak: `brucethemoose/Minecraft-Performance-Flags-Benchmarks` — her bayrağı ayrı
a­yrı ölçen, Java varsayılanlarına karşı sınayan bir topluluk çalışması. Oradan
alınan iki yeni profil:

- **YIKIM İstemci (ölçülmüş G1GC bayrakları)** — taban: kod önbelleği bölümleri,
  `NmethodSweepActivity=1`, `-DontCompileHugeMethods` kapalı, `MaxNodeLimit=240000`,
  `UseCriticalJavaThreadPriority`, `UseFastUnorderedTimeStamps`; GC: istemciye göre
  kısaltılmış duraklama (`MaxGCPauseMillis=37`, `G1NewSizePercent=23`).
- **YIKIM İstemci Shenandoah (deneye bağlı)** — aynı kaynak istemci için en iyi
  sonucu Shenandoah'ta ölçmüş.

Alınmayanlar ve nedenleri: `ThreadPriorityPolicy=1` (Linux'ta root ister),
`UseNUMA` (tek soket), `UseLargePages` (Windows'ta yönetici hakkı),
`G1ConcRSHotCardLimit` + `G1ConcRefinementServiceIntervalMillis` (JDK 20-21'de
kaldırıldı — Temurin 21'de denenip görüldü, ikisi de "Ignoring option" uyarısı verdi).

**ZGC profili dürüstçe yeniden adlandırıldı:** aynı ölçüm seti ZGC'nin *istemcide*
belirgin FPS kaybı yarattığını gösteriyor (sunucuda iyi). Artık "oyun için
önerilmez" yazıyor. Aynı kaynak, Java ayarlarının ortalama istemci FPS'ini pek
artırmadığını, asıl farkın sürücü + grafik ayarlarında olduğunu da açıkça söylüyor —
bizim kendi GC ölçümümüz bunu doğruladı.

### Ekran kartı saati örnekleyicisi (launcher)

Oyun başlarken launcher `nvidia-smi`yi 2 saniyede bir örnekleyip örnek klasörüne
`.yikim/gpu-log.csv` yazar, oyun kapanınca özetler: "SM saati en düşük/ortalama/en
yüksek + kullanım ortalaması". Ortalama saat 1200 MHz altında ve kullanım %60'ın
altındaysa log'a uyarı düşer: sebep sürücünün güç yönetimi (NVIDIA Denetim Masası →
Güç yönetimi modu → "Maksimum performansı tercih et"). Bu, "her ayarda ~150 FPS"
tablosunun en olası açıklamasıdır ve artık tahminle değil sayıyla sınanıyor.

### Süreç önceliği

Oyun süreci başlatıldıktan 5 saniye sonra Windows'ta **"Üstü Normal"** önceliğe
alınır (aynı ölçüm rehberinin önerisi: "hiçbir şey Minecraft'ın iş parçacıklarını
kesmemeli"). Yalnızca o PID'e dokunulur.

---

## 12. §9–§11 GEÇERSİZ: taban 595'e geri dönüldü (25 Eylül, son)

Bu belgenin §9, §10 ve §11'i **tarihe karıştı**: o bölümlerde anlatılan her mekanizma
(yeni JVM profilleri, kare muhafızı, Sodium ayarı, süreç önceliği, GPU örnekleyicisi,
otomatik görüş, ölçüm turu, genişletilmiş teşhis satırı) **kaldırıldı**, çünkü
21:34 oturumunda **ort 595 / en düşük 526 FPS** ölçülen sürümde hiçbiri yoktu.

Gerçek taban: launcher `v0.10.1` + mod `1.0.0` (jar 82 373 bayt, sha `98ff0550…`).
Kanıt ve geri dönüş adımları ayrı raporundadır:
**`TABAN-595-GERI-DONUS.md`**.

Özet: paket (asar + 5 jar + manifest) o sürümle **bayt bayt aynı**; kaynak ağacı da
komut düzeyinde 5 sürümün tamamında 40/40 sınıf ile doğrulandı. Çakışan sahiplik
(ör. kare muhafızı ↔ `defaultsFor`) bitti; her ayarın tek sahibi var.

