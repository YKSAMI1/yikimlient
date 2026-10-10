# FPS düzeltmesi — v0.10.1 dönemi (25 Eyl 2026)

Bu dosya "dönem sürümü geldi ama FPS gelmedi" şikâyetinin **kök nedenini**, yapılan
düzeltmeyi ve ölçülebilir kanıtları yazar. Varsayım yok; her satır ya dosyadan ya
log'dan okunmuştur.

---

## 1. Kök neden: FPS'i kısan şey koddan değil, kurulan paketten ve options.txt'den geliyordu

Dönemin launcher'ı (22 Eyl 21:52) doğru kurulmuştu: launcher dönem derlemesi, mod dönem
jar'ı, oyun NVIDIA RTX 5050'de koşuyordu. Ama `OPTIMIZATION_MODS` listesi **kare hızını
kasten kısan dört modülü** kuruyordu ve launcher'ın açılış şablonu boşta kare sınırını
vanilla değerde bırakıyordu.

Kendi makinesindeki **kurulu örnek** (`%APPDATA%\yikimlient\game\instances\1-21-11-eded12`)
tam olarak şunu gösteriyordu:

| Bulgu | Kanıt (dosya) |
| --- | --- |
| Dynamic FPS kurulu ve açık | `mods/dynamic-fps-3.11.6+minecraft-1.21.11-fabric.jar` → `enabled: true` |
| Exordium kurulu ve açık, arayüzü 30 FPS'te çiziyor | `mods/exordium-fabric-2.1.1-mc1.21.11.jar` + `config/exordium.json` → `"maxFps": 30` |
| Cubes Without Borders tam ekranı çerçevesiz pencereye çeviriyor | `mods/cwb-fabric-3.0.0-build.14+mc1.21.11.jar` + `config/cubes-without-borders.json` → `"fullscreenMode": "BORDERLESS"` |
| ThreadTweak render iş parçacığının önceliğini değiştiriyor | `mods/threadtweak-fabric-0.1.8+mc1.21.11.jar` + `config/threadtweak.json` |
| Boşta kare sınırı vanilla "AFK" | `options.txt` → `inactivityFpsLimit:"afk"` |
| Oyun doğru kartta | oyun log'u → `OpenGL Renderer: NVIDIA GeForce RTX 5050 Laptop GPU` |

Davranışları (arşivdeki ölçüm notlarından, `_arsiv-v0.12.0/`):

- **Dynamic FPS**: pencere ön planda değilken 60 FPS'e, küçültülmüşken 1'e iniyor.
- **Exordium**: arayüzü ayrı tamponda `maxFps: 30` ile çiziyor → gerçek kare hızı yüksek
  olsa da oyun 30 FPS gibi hissettiriyor ve **HUD'daki FPS sayacı donuk görünüyor**.
- **ThreadTweak**: çok çekirdekli sistemlerde render iş parçacığı geri plana düşebiliyor.
- **Cubes Without Borders**: Windows kareleri DWM üzerinden birleştiriyor; hibrit
  dizüstülerde her kare panelin bağlı olduğu entegre karttan ek kopya geçiyor.
- **`inactivityFpsLimit:"afk"`**: oyuncu hiçbir şey yapmadan dururken kare hızı 60'a
  (uzun boşta 30'a) çekiliyor. FPS'i "durup bakarak" ölçerken tam da bu devreye giriyor.

Arşivdeki README bu şikâyeti birebir aynı adla kaydetmişti: *"İlk açılışta 800 FPS, bir
kez açıp kapattıktan sonra 200"*.

---

## 2. Yapılan düzeltme (dönem sürümünün içinde)

Dosya: `out/main/index.js` (dönemin kendi derlemesi; TS kaynağı olmadığı için doğrudan
paket üzerinde, `era-bundle-src/index.js` görünür kopyasından düzenlendi).

1. **Kare düşmanları paketten çıkarıldı** — `OPTIMIZATION_MODS`'tan `dynamic-fps`,
   `exordium`, `threadtweak`, `cubes-without-borders` silindi, gerekçeleriyle
   `RETIRED_MODS`'a taşındı. Launcher açılışta kurulu kopyalarını siler ve neden sildiğini
   log'a yazar.
2. **Takma ad eşleşmesi** — Cubes Without Borders'ın jar adı `cwb-fabric-….jar`, mod
   kimliği `dynamic_fps` (alt çizgi). Ham dize karşılaştırması ikisini de diskte
   bırakıyordu; artık `aliases` listesi (`cwb`, `dynamic_fps`) kullanılıyor.
3. **Maksimum FPS profili** — `defaultsFor()` artık şunları yazıyor: `renderDistance 6`
   (entegre kartta 4), `simulationDistance 5`, `entityDistanceScaling 0.5`,
   `particles 2` (en az), `biomeBlendRadius 0`, `ao false`, `entityShadows false`,
   `renderClouds "false"`, `graphicsPreset "custom"`, `enableVsync false`,
   `inactivityFpsLimit "minimized"`, `fullscreen true`, `pauseOnLostFocus false`.
   - `graphicsMode` 1.21.9+ sürümlerde **ölü** anahtar; doğru ad `graphicsPreset` ve
     değeri **tırnaklı** yazılır.
   - `maxFps: 260` bir sınır değil, oyunun "Sınırsız" değeridir.
4. **Profil her başlatmada yürürlükte** — performans anahtarları `force` işaretli: oyun
   çıkarken `options.txt`'yi geri yazsa bile bir sonraki açılışta (hem launcher açılışı
   hem oyun başlatma) yeniden yazılır. Oyuncunun **daha ucuz** seçimi korunur (`onlyIf`):
   görüş mesafesini 4'e çeken oyuncuya dokunulmaz, 8'e çıkaran profil değerine çekilir.
5. **Harici ekran kartı tercihi varsayılan açık** — `forceHighPerformanceGpu: true`.
   Java çalıştırılabilir dosyası için `GpuPreference=2` yazılır
   (`HKCU\Software\Microsoft\DirectX\UserGpuPreferences`). Yalnızca Intel/tespit
   edilemeyen durumda atlanır; AMD/NVIDIA harici kartlarda uygulanır. Eski ayar
   dosyaları için tek seferlik göç (`perfTuned`) eklendi.

---

## 3. Doğrulama (bu ağaçta koşuldu)

```
YIKIM_LINK_CHECK=1 npx electron .   → SONUÇ: TÜM KONTROLLER GEÇTİ
YIKIM_DEFAULTS_CHECK=1 npx electron . → 1..6 adımları, HATA yok
```

- Link kontrolü artık yeni politikayı sınıyor: 6 kaldırılmış modül silindi
  (Chloride, **Cubes Without Borders**, **Dynamic FPS**, OneConfig, PolyWeather, RRLS),
  istenen modlar (sodium, modmenu) korundu, CWB takma adla temizlendi.
- Gerçek örnek üzerinde canlı koşu (launcher açıldı, 25 sn):

```
[mods] 1.21.11: 4 kaldırılmış modül temizlendi (Cubes Without Borders, Dynamic FPS, Exordium, ThreadTweak)
[gpu]  Harici ekran kartı tercihi varsayılan olarak açıldı (Ayarlar → Java ve performans)
[defaults] 1.21.11 için 19 oyun ayarı yazıldı
```

- Sonuç `options.txt`: `renderDistance:6`, `simulationDistance:5`,
  `entityDistanceScaling:0.5`, `particles:2`, `inactivityFpsLimit:"minimized"`,
  `pauseOnLostFocus:false`, `graphicsPreset:"custom"`, `renderClouds:"false"`.

---

## 4. Yeni derleme

- `dist/YIKIMLient-0.10.1-perf-x64.exe` (kurulum) · `dist/YIKIMLient-0.10.1-perf-portable.exe`
- Paket içeriği doğrulandı: `app.asar` yeni kodu içeriyor, `resources/mods` içindeki
  5 dönem jar'ı kaynakla **birebir aynı** (sha256).
- Bozulmamış dönem paketi karşılaştırma için duruyor: `dist/_era-orijinal/`.

## 5. Nasıl test edilir

1. Yeni exe'yi kur/aç (taşınabilir sürüm kurulum istemez).
2. 1.21.11 örneğini başlat. Launcher açık kalıyorsa sorun değil; kare hızını **F3** ile oku
   (dönem modunun HUD sayacı eskiydi — bu yüzden sonraki sürümde oyunun kendi sayacına
   bağlandı).
3. Ölçerken **hareket et** ya da F3 sayacına bakarken boşta bekleme: "AFK" sınırı artık
   `minimized` olduğu için boşta düşme olmamalı, ama en güvenilir ölçüm hareket hâlinde
   alınan 30 sn'lik ortalamadır.
4. Karşılaştırma için: aynı sahne, aynı ayar, aynı süre; pencere boyutu ve sunucu sabit.

## 6. Açık kalan, ölçülmemiş kalemler

- **Güç planı**: makinede "Dengeli" etkin ("Nihai Performans" kurulu ama seçili değil).
  Kare hızını etkileyip etkilemediği bu makinede ölçülmedi; launcher bunu değiştirmiyor.
- **Ölçüm gürültüsü**: önceki koşularda aynı sahnenin 30 sn'lik pencereleri ±%30
  salınıyordu; yani 2-3 örneğe bakarak "kazanç/kayıp" demek yanlış olur.
- Açılıştan sonraki ilk 30-60 saniye her koşuda düşük (kaynak/chunk yükleme), ölçüme
  katılmamalı.
