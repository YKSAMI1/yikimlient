<div align="center">

# ⚡ YIKIMLient

**Ultra-hafif, ultra-hızlı Minecraft launcher + oyun içi mod.**
Electron'suz. Çatlak (offline) oyunculara eşit — ücretsiz ve sınırsız.

[![Sürüm](https://img.shields.io/github/v/release/YKSAMI1/yikimlient?style=flat-square)](https://github.com/YKSAMI1/yikimlient/releases/latest)
[![İndir](https://img.shields.io/github/downloads/YKSAMI1/yikimlient/total?style=flat-square)](https://github.com/YKSAMI1/yikimlient/releases)
[![Site](https://img.shields.io/badge/site-yikimlient.vercel.app-orange?style=flat-square)](https://yikimlient.vercel.app)
[![Discord](https://img.shields.io/badge/Discord-kat%C4%B1l-5865F2?style=flat-square)](https://discord.gg/3zTCpMzeNq)

[🌐 Site](https://yikimlient.vercel.app) · [⬇️ İndir](https://github.com/YKSAMI1/yikimlient/releases/latest) · [💬 Discord](https://discord.gg/3zTCpMzeNq) · [🐞 Sorun bildir](https://github.com/YKSAMI1/yikimlient/issues)

</div>

---

## Neden YIKIMLient?

| | YIKIMLient | Electron tabanlı launcher |
|---|---|---|
| RAM (boşta) | ~100–150 MB | 300–700 MB |
| Kurulum boyutu | ~7 MB | 150–250 MB |
| Açılış | <1 sn | 3–8 sn |
| Motor | Tauri 2 + Rust + sistem WebView | Paketli Chromium + Node |
| Oyun içi mod | ✅ YIKIM çekirdek modu | ❌ yok |

**Hesap sistemi çatlak hesaplarda da çalışır.** Şifre, Discord doğrulama, hesap bazlı
kozmetik ve güvenli paylaşım premium olmayan hesapta da tam çalışır. Hiçbir kapı yok.

---

## İçerik

Bu depo dört ayrı parçadan oluşur:

| Klasör | Ne işe yarar |
|---|---|
| `ui/` | Arayüz (TypeScript + Vite + Three.js 3B önizleme) |
| `src-tauri/` | Launcher çekirdeği (Rust) + Tauri komutları |
| `yikim-mod/` | Oyun içi Fabric modu (Java) |
| `bot/` | Discord botu (Node) — doğrulama, şifre sıfırlama, rol yönetimi |
| `guvenlik-api/` | Güvenlik sunucusu (Node) — hesap, şifre, cihaz imzası |
| `site/` | Tanıtım sitesi (statik) — `yikimlient.vercel.app` |

---

## Özellikler

### 🎮 Oyun
- **Offline + Microsoft girişi** — resmî device-code akışı (Xbox → XSTS → Minecraft), çoklu hesap
- **Otomatik Java** — Mojang resmî runtime'ları, her MC sürümü için doğru Java
- **Fabric / Quilt / Forge / NeoForge** — sürüm algılama otomatik
- **JVM profilleri** — Dengeli / Yüksek FPS / Ultra FPS / Düşük RAM / Düşük Gecikme / Agresif
- **Kesfet** — Modrinth + CurseForge kataloğu, oyunu kapatmadan mod ara–kur
- **Tümünü Güncelle** — kurulumdaki bütün modları tek tıkla (adım sayacıyla)
- **Ayarlar bekçisi** — her açılışta Türkçe arayüz, sınırsız FPS, VSync kapalı

### 📦 Mod paketleri
- **Canlı kurulum** — adım adım ilerleme kartı, ekranı kaplamaz
- **Aynı anda birden fazla paket** — her paket kendi kartını alır
- **Aynı paket iki kez kurulmaz** — ikinci deneme reddedilir
- **`.yikimpack` paylaşım** — modlar, dünyalar, dokular, ayarlar; çift tıklayınca kurulur

### 🎨 Kozmetikler (pelerin + elitra)
- **64×32 piksel editörü** + **3B modelin üzerine doğrudan boyama**
- **Fotoğraf / Pafta yükleme** — HD dokusu ve maske (eliptik silüet) desteğiyle
- **Katalog** — her kayıt ayrı saklanır, listeden giyilir
- **Hesap bazlı** — aynı bilgisayarda iki hesabın tasarımı karışmaz
- **Sunucudaki herkeste görünür** — YIKIMLient kullanan oyuncular tasarımınızı görür

### 🔐 Hesap güvenliği
- **Şifre** — sunucuda `scrypt` (tuz + biber) ile türetilir, veritabaninde **şifreli** saklanır (AES-256-GCM)
- **Discord doğrulama** — hesabı Discord hesabına bağla; kozmetikler hesaba bağlanır
- **Cihaz imzalı istekler** — her cihaz kendi Ed25519 anahtarını üretir; istekler imzalı, yanıtlar sunucu imzalı
- **Doğrulanmamış hesap** — oynayabilir, kozmetik değiştiremez; adının başında **✕**
- **Koruma** — 5 hatalı şifrede o hesap o cihazda 24 saat kilitlenir
- **"Şifremi unuttum"** — bot DM'den tek seferlik kod
- **Çevrimdışı çalışma** — bot/API kapalıyken oyun ve mevcut kozmetikler çalışmaya devam eder

### 🏷️ Çizme izni ("Yol Silindiri")
Kendi pelerin/elitranı çizebilmek için Discord sunucusundaki **YIKIM etiketini**
("Yol Silindiri" rolü) taşıman gerekir. Doğrulama tek başına kozmetikleri hesaba bağlar;
etiketi taşımayan hesaplarda yalnız aç/kapa anahtarları çalışır. Etiketi bırakırsan
bot bunu fark eder ve **çizme iznini otomatik geri alır**.

### 🔄 Güncelleme
- **Otomatik güncelleme** — GitHub Releases'ten, imzalı (geçersiz imza kurulamaz)
- **Zorunlu güncelleme** — sunucu `minimum` sürümü belirlerse eski sürüm güncellemeden kullanılamaz
- **Sıcak arayüz** — site teması/sayfaları exe yeniden derlemeden güncellenir

---

## Kurulum

### Windows
`YIKIMLient_<sürüm>_x64-setup.exe` indir → kur → oyna.
(Windows Defender "bilinmeyen yayıncı" uyarabilir: *Daha fazla bilgi → Yine de çalıştır*.
Kod imzalı sertifika alınmadı; dosya kaynağı bu repo'dur.)

### Linux
```bash
chmod +x YIKIMLient_<sürüm>_amd64.AppImage
./YIKIMLient_<sürüm>_amd64.AppImage
```
Debian / Ubuntu:
```bash
sudo dpkg -i YIKIMLient_<sürüm>_amd64.deb
```

### Kaynaktan derleme
```bash
npm install
npm run dist          # src-tauri/target/release/bundle/ altına çıkar
```

---

## 💾 Veri şeffaflığı

**Sunucuya giden veriler** (hesap doğrulama + kozmetik senkronizasyonu için):

| Veri | Neden | Ne kadar |
|---|---|---|
| Hesap adı + UUID | Kozmetiklerin hesaba bağlanması | Hesap kaydı |
| hesap_anahtar (`ms:` / `offline:` + UUID) | Kimlik | Hesap kaydı |
| Discord kimliği + adın | Doğrulama | Bağlantı kaydı |
| Şifre türevi (hash) | Giriş | Şifreli (AES-256-GCM) |
| Cihaz genel anahtarı (Ed25519) | İstek imzası | Kayıt |
| IP | Yeni cihazdan giriş bildirimi | 7 gün sonra **silinir** |

**Hiç toplanmayanlar:**
- Düz (okunabilir) şifre — sadece türevi gider
- Ekran görüntüsü, kamera, mikrofon, dosya erişimi
- Oyun alışkanlıkları / istatistik — **tamamen yerel** (`sessions.jsonl`), hiçbir yere gönderilmez
- Reklam, analitik, çerez tanımlama, üçüncü taraf izleme

**İstemcide paylaşılan sır yok.** Her cihaz kendi anahtar çiftini üretir, sunucu yalnız
genel anahtarı bilir._Kaynak kodaçık — bu tabloyu `src-tauri/src/guvenlik.rs` ve
`guvenlik-api/src/db.js` içinde teyit edebilirsin.

---

## Sürüm çıkarma (geliştirici)

```bash
# 1) Sürümü yükselt: package.json + src-tauri/tauri.conf.json + src-tauri/Cargo.toml
# 2) İmzalı derleme + latest.json + zorunlu güncelleme eşiği:
powershell -ExecutionPolicy Bypass -File tools\yayimla.ps1

# 3) Çıkan klasörü (yayin/v<sürüm>) GitHub Release'ine yükle
#    Etiket: v<sürüm>
```
`latest.json` içindeki `minimum` alanı **zorunlu güncelleme eşiğini** belirler:
bu sürümün altındaki bütün launcher'lar güncellemeden çalışmaz.

> `tools/updater-private.key` **ASLA** repoya veya Release'e girmez.
> Bu anahtar olmadan imzalı yeni sürüm yayınlanamaz — yedeğini sakla.

### Güncelleme zinciri
```
v0.8.0 yayınlanır → eski launcher açılışta latest.json'ı okur
→ "Zorunlu Güncelleme" penceresi (Sonra düğmesi YOK) → indir → kur → yeniden aç
```

---

## Duyuru yayınlama

Haberler sadece geliştiricinin imzalı feed'inden gelir (Ed25519). İmzasız içerik
reddedilir; repo ele geçirilse bile sahte duyuru yayınlanamaz.

```bash
1. news/feed.json dosyasını düzenle
2. node tools/news-sign.mjs sign
3. news/feed.json + news/feed.json.sig → https://github.com/YKSAMI1/news reposuna push
```

---

## Güvenlik API + Bot

Yerel test için:
```powershell
cd guvenlik-api; $env:YIKIM_PEPPER = "<16+ karakter>"; $env:YIKIM_ANAHTAR = "<base64 32 bayt>"; npm start
cd bot;          npm start
```
Bot, rol verilme/alınma olaylarını `/api/rol/guncelle` ile API'ye bildirir; böylece
etiket bırakıldığında çizme izni anında kapanır. Testler:
```bash
node --test guvenlik-api/test/api.test.js    # 27 test
```

---

## Komutlar

| Komut | Anlamı |
|---|---|
| `npm run dev` | Geliştirme (Vite + Tauri) |
| `npm run check` | TypeScript kontrolü |
| `npm run dist` | İmzasız derleme |
| `node tools/ui-dist.mjs` | Arayüzü `resources/ui`'ye kopyala |
| `node tools/bot-zip.mjs` | Bot dağıtım zippi (token hariç) |
| `node tools/test-paketi.mjs` | Test paketi (bot + API + launcher + mod) |
| `cargo test --lib --manifest-path src-tauri/Cargo.toml` | Rust testleri |

---

## Sık sorulanlar

**Çatlak hesapla oynayabilir miyim?**
Evet. Offline (cracked) ve Microsoft hesaplar aynı launcher'da çalışır. Doğrulanmamış
hesabın adının başında ✕ görünür ve kozmetiklerini değiştiremezsin.

**Hesabımı nasıl doğrularım?**
[Discord sunucusuna katıl](https://discord.gg/3zTCpMzeNq) → **bot komut kanalına** git →
launcher'ın verdiği kodu yaz: `/bagla KOD`. Sonra şifreni gir.

**Doğruladım ama kendi pelerinimi çizemiyorum?**
Discord sunucusundaki YIKIM etiketini ("Yol Silindiri" rolü) taşıman gerekir. Etiketi
bırakırsan çizme izni otomatik geri alınır.

**Verilerim nerede?**
Oyun dosyaları ve ayarlar kendi bilgisayarında (`%APPDATA%\.yikimlient`). Sunucuya
yalnızca doğrulama ve kozmetik senkronizasyonu için gereken veri gider (tablo yukarıda).

**Otomatik güncelleme neden çalışmıyor?**
Açılışta GitHub Releases'teki `latest.json` okunur. Sunucuya ulaşılamazsa sessizce
atlanır; elle kurulum daima mümkündür.

---

## Lisans

[LICENSE](LICENSE)

*YIKIMLient bir Minecraft istemcisidir. Mojang ile bağlantısı yoktur; Minecraft Java
Edition'ın resmî kurallarına uyun.*
