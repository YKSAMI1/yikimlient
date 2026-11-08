<div align="center">

# ⚡ YIKIMLient

**Ultra-hafif, ultra-hızlı Minecraft launcher + oyun içi mod.**
Electron'suz. Cracked oyunculara eşit, ücretsiz ve sınırsız.

> "Minecraft'ı en yüksek kare hızında, en düşük gecikmeyle ve hiçbir ayarla uğraşmadan oynatan istemci."

</div>

---

## Neden YIKIMLient?

| | YIKIMLient | Electron launcher'lar |
|---|---|---|
| RAM (boşta) | ~100–150 MB | 300–700 MB |
| Kurulum boyutu | ~5 MB | 150–250 MB |
| Açılış süresi | <1 sn | 3–8 sn |
| Motor | Tauri 2 + Rust + sistem WebView | Paketli Chromium + Node |
| Oyun içi mod | ✅ YIKIM çekirdek modu | ❌ yok |

**Ve en önemlisi:** hesap şifresi, Discord doğrulaması, hesap bazlı kozmetikler ve
güvenli paylaşım sistemi **herkeste**, çatlak (cracked) hesapta da çalışıyor.
Premium olmayan hesap kimseye kapı gösterilmiyor.

---

## 🚀 Özellikler

### 🎮 Oyun Yönetimi
- **Offline + Microsoft girişi** — resmî device-code akışı (Xbox → XSTS → Minecraft), çoklu hesap
- **Hesap bazlı geçiş** — her hesabın kendi kozmetiği, kendi skini, kendi rozeti
- **Tek tıkla optimize mod paketi** — Sodium, Lithium, FerriteCore, Krypton, ModernFix, EntityCulling, ImmediatelyFast, Noisium, Dynamic FPS, FastQuit ve 40+ mod
- **Oyun içi mod yönetimi** — Sağ Shift panelinden mod aç/kapa, oyun otomatik yeniden başlar
- **Modrinth + CurseForge kataloğu** — oyunu KAPATMADAN mod ara, kur, logoyu gör
- **Otomatik Java** — Mojang resmî runtime'ları her MC sürümü için doğru Java'yı indirir
- **JVM profilleri** — Dengeli / Yüksek FPS / Ultra FPS / Düşük RAM / Düşük Gecikme / Agresif
- **Tümünü Güncelle** — kurulumdaki bütün modları tek tıkla güncelle (adım sayacıyla)

### 📦 Mod Paketleri
- **Canlı kurulum** — paket kurulurken adım adım canlı ilerleme kartı, ekranı kaplamaz
- **Aynı anda birden fazla paket** — her paket kendi ilerleme kartını alır, ilerlemeler birbirine karışmaz
- **Aynı paket iki kez kurulmaz** — ikinci deneme `paket_zaten_kuruluyor` ile reddedilir
- **Kurulum bitince otomatik Log sayfası** + özel bildirim sesi
- **`.yikimpack` paylaşım** — logolu, seçilebilir içerikli (modlar / dünyalar / dokular / ayarlar),
  birkaç MB (ultra-hafif modda modlar Modrinth bağlantısıyla çözülür). Çift tıklayınca kurulur.
- **CurseForge tam desteği** — anahtarsız ayna sayesinde API anahtarı gerekmez

### 🔐 Hesap Güvenliği
- **Şifre** — sunucuda `scrypt` (tuz + biber) ile türetilir, veritabaninde **şifreli** saklanır (AES-256-GCM)
- **Discord doğrulama** — hesabı Discord hesabına bağla; kozmetikler hesaba bağlanır, cihaz değişince kaybolmaz
- **Tüm sırlar ortam değişkeninden** — kodda hiçbir anahtar sabit yazılmaz
- **Cihaz imzalı istekler** — her cihaz kendi Ed25519 anahtarını üretir, istekler imzalı, yanıtlar sunucu imzalı
- **Çevrimdışı çalışma** — bot/API kapalıyken oyun ve mevcut kozmetikler çalışmaya devam eder
- **Giriş kaydı** — IP + hesap adıyla loglanır, IP kaydı 7 gün sonra gerçekten silinir
- **Koruma** — 5 hatalı şifrede o hesap o cihazda 24 saat kilitlenir
- **"Şifremi unuttum"** — bot DM'den tek seferlik kod, 5 hatalı denemede kilit
- **Doğrulanmamış hesap** — oynayabilir, kozmetik/skin değiştiremez; adının başında **✕** görünür
  (launcher'da ve oyun içinde isim etiketinde + TAB listesinde)

### 🎨 Kozmetikler
- **Hesap bazlı** — her hesabın pelerin/elitrası ayrı; hesap değiştirince o hesabın tasarımı gelir
- **Tam 64×32 atlas editörü** — ön/arka/yan/üst/alt bütün yüzler doğrudan çizilir
- **2D ve 3D çizim** — aynı karakter sahnesinde canlı önizleme
- **HD fotoğraf kozmetiği** — yüksek çözünürlüklü görsel, maskeli yerleşim
- **Katalog** — her kayıtlı tasarım ayrı; "YIKIM Pelerin" ve "YIKIM Elitra" hazır gelir
- **Yol Silindiri** rolü olanlar kendi pelerin/elitrasını çizebilir; diğerleri YIKIM varsayılanını açıp kapatabilir
- **Sunucudaki diğer YIKIMLient oyuncuları** da pelerin/elitranı görür (presence)

### 🧍 Skin Merkezi
- **Microsoft hesap** — skin/pelerin Mojang hesabına yüklenir, sunucularda herkes görür
- **Çatlak hesap** — istemci tarafı skin: Mojang'a çıkmaz, bu bilgisayarda görünür, doğrulanmışsa kitaplığa kaydolur
- **Kitaplık** — kayıtlı skinler, silme, yeniden adlandırma, yedek geri yükleme
- **Dışa/içe aktarma** — PNG olarak kaydet, dosyadan yükle

### 🛡️ Performans Sistemi
- **Ayar profili** — her açılışta Türkçe arayüz, sınırsız FPS, VSync kapalı, tüm sarsıntı efektleri kapalı
- **Performans bekçisi** — oyun açıkken profil değerlerini korur, başka bir mod bozarsa geri alır
- **Düşük FPS danışmanı** — FPS < 60 sürekli 10 sn → otomatik öneri
- **AFK sınırlayıcı kapalı** — oyun içinde dururken bile sınırsız FPS
- **Bellek boşaltma** — pencere odakta değilse / sistem boşsa çalışma kümeleri boşaltılır
- **Mod çakışma temizliği** — Zoomify, FastNoise, Ixeris gibi çakışanlar otomatik emekliye ayrılır
- **A/B performans testi** — oyun içinde HUD açık/kapalı FPS ölçümü

### 🎨 Arayüz
- **5 tema dünyası** — Pano / Söküm / Anons / Standart / Özel
- **Özel vurgu rengi** — Ayarlar'dan herhangi bir renk
- **Tema senkronu** — launcher teması oyuna canlı yansır
- **Animasyonlu kapaklar** — MP4, GIF, PNG, JPG; ekranda değilse video otomatik durur
- **Canlı ikonlar** — her mod için gerçek Modrinth ikonu (WebP→PNG dahil)
- **Tam ekran HUD editörü** — Sağ Shift → HUD → matris ızgaralı editör
- **Bildirim kutusu** — sağ üstteki zil; kurulum, mod güncelleme, paket hazır haberleri burada

### 🔄 Otomasyon
- **İmzalı otomatik güncelleme** — minisign imzalı; geçersiz imza kurulamaz
- **Mod paketi tamamlayıcı** — yeni mod eklenirse mevcut kurulumlara otomatik düşer
- **Discord Rich Presence** — "YIKIMLient oynuyor" + logo + indirme butonu
- **Kozmetik duyurusu** — "Yol Silindiri" rolüne DM ile haber

---

## 🔒 Veri Şeffaflığı

### Toplanan ve yerel kalan veriler
| Veri | Nerede | Dışarı çıkar mı? |
|---|---|---|
| Hesap adı + UUID | `accounts.json` | ❌ HAYIR |
| Oynanış istatistikleri | `sessions.jsonl` | ❌ HAYIR |
| Kurulum ayarları | `yikimlient.json` | ❌ HAYIR |
| Kozmetik tasarımları | `kozmetik/` (hesap bazlı) | ❌ HAYIR |

### Sadece doğrulama için giden veriler (kullanıcı onayıyla)
| Ne | Neden | Nasıl korunur |
|---|---|---|
| Hesap anahtarı + görünen ad | Doğrulama eşleştirme | Cihaz imzalı istek |
| Paroladan türetilmiş hash | Şifre doğrulama (düz parola **asla** gitmez) | PBKDF2-SHA256, 210k tur |
| Genel IP | Yeni yerden giriş kaydı | 7 gün sonra otomatik silinir |

**Şifreler, parolalar ve tüm anahtarlar sunucuda şifreli saklanır. Açık kaynak olsa bile
veritabanı sızdırıldığında parolalar kurtarılamaz.**

### Ağ bağlantıları
1. **Modrinth / CurseForge** — mod arama, indirme, ikon, güncelleme
2. **Güvenlik API** — hesap doğrulama, parola, kozmetik yetkisi (kullanıcı onayıyla)
3. **GitHub** — duyurular + güncelleme kontrolü
4. **Discord IPC / bot** — Rich Presence ve `/bagla` doğrulama

**Telemetri YOK.** Analitik, izleme, reklam, veri satışı yok.

---

## 📥 Kurulum

### Windows
1. [Releases](https://github.com/YKSAMI1/yikimlient/releases) sayfasından `YIKIMLient_x64-setup.exe` indir
2. Kur → aç → oyna. Java dahil her şey otomatik.

> **"Windows kişisel bilgisayarınızı korudu" uyarısı:** kurulum dosyası bir kod imzalama
> sertifikasıyla imzalanmadığı için Windows "bilinmeyen yayıncı" der. **Ek bilgi → Yine de
> çalıştır.** Dosyanın bozulmadığını aynı sürümdeki `SHA256SUMS.txt` ile doğrulayabilirsin.

### Linux
```bash
chmod +x yikimlient_amd64.AppImage   # veya: sudo dpkg -i yikimlient_amd64.deb
sudo apt install libwebkit2gtk-4.1-0 libgtk-3-0   # Ubuntu/Debian
```

### İlk açılışta
1. **Hesap** — Microsoft ile giriş yap veya çevrimdışı (çatlak) hesap ekle
2. **Doğrulama** — Ayarlar → Hesap Doğrulama → Discord'da `/bagla KOD`
3. **Şifre** — bağlantı doğrulanınca şifreni oluştur
4. **Paket** — mod paketini kur veya boş kurulum aç
5. **Oyna** — hazırsın

---

## 🤖 Bot kurulumu (sahip için)

```bash
cd bot
npm install
node scripts/encrypt-token.js   # token'ı şifrele (TOKEN_ENCRYPTED + TOKEN_KEY)
# .env dosyasını doldur: GUILD_ID, CHANNEL_ID, ROLE_ID, YIKIM_API, YIKIM_BOT_ANAHTARI
node index.js
```

Güvenlik API'yi çalıştırmak için:
```bash
cd guvenlik-api
# .env dosyasını doldur (YIKIM_DB, YIKIM_PEPPER, YIKIM_ANAHTAR, YIKIM_IMZA_GIZLI, YIKIM_ADMIN_ID)
node src/server.js
node --test test/api.test.js    # 25 test
```

**Tüm sırlar `.env` dosyasından okunur; depoda hiçbiri yoktur.**

---

## 🛠️ Geliştirme

```bash
npm install
npm run app          # tauri dev — geliştirme modu
npm run dist         # kurulum paketi üret
npm run check        # TypeScript tip kontrolü
npm run build        # arayüz üretim derlemesi

cd src-tauri
cargo test --lib     # 52 Rust testi
cargo test --lib -- --ignored --test-threads=1   # 4 canlı API testi (API açıkken)

cd ../yikim-mod
powershell -File araclar\derle-1.21.11.ps1       # oyun içi modu derle

cd ../guvenlik-api
node --test test/api.test.js                     # 25 API testi
```

### Mimari
```
samiclient/
├── src-tauri/            # Rust çekirdeği — launcher mantığı
│   ├── src/guvenlik.rs       # cihaz kimliği, hesap yetkileri, hesap bazlı kozmetik
│   ├── src/guvenlik_api.rs   # imzalı API istemcisi + canlı testler
│   ├── src/guvenlik_komut.rs # Tauri güvenlik komutları
│   ├── src/hesap_yetki.rs    # kozmetik kilidi, çizim izni, ✕ kuralı
│   ├── src/launcher.rs       # oyun indirme + başlatma motoru
│   ├── src/yikimpack.rs      # .yikimpack paylaşım biçimi
│   ├── src/kozmetik_katalog.rs # hesap bazlı kozmetik kataloğu
│   ├── src/skins.rs          # Skin Merkezi (Mojang + istemci tarafı)
│   └── src/bellek.rs         # çalışma kümesi boşaltma
├── ui/                   # TypeScript arayüz (Vite)
│   └── src/guvenlik.ts   # doğrulama kartı, parola KDF, ✕ yardımcıları
├── yikim-mod/            # Oyun içi Fabric mod (Java 21)
│   └── src/main/java/com/yikimlient/client/
│       ├── YikimBadge.java       # rozet + ✕ glifi
│       ├── YikimDogrulama.java   # .yikim/dogrulandi bayrağı
│       ├── YikimKozmetik.java    # görünür kozmetik uygulama
│       └── YikimKarakter.java    # oyuncunun kendi skini (deri.png)
├── guvenlik-api/         # Node güvenlik API'si (Cloudflare Worker'a taşınabilir)
├── bot/                  # Discord bot (/bagla, /sifirla, /ping)
└── news/                 # imzalı duyuru feed'i
```

---

## 🗺️ Yol Haritası

- [x] Hesap şifresi + Discord doğrulama
- [x] Hesap bazlı kozmetikler + oyun içi ✕
- [x] Çatlak hesapta istemci tarafı skin
- [x] Aynı anda birden fazla mod paketi
- [x] YIKIM pelerin + elitra tasarımları
- [ ] Güvenlik API'nin Cloudflare Worker'a taşınması (üretim)
- [ ] Diğer MC sürümlerine mod port'u (1.21.1 – 1.21.10)
- [ ] Sunucu eklentisi: YIKIM kullanıcı algılama

---

## 🐞 Sorun Bildir

- **GitHub Issues**: https://github.com/YKSAMI1/yikimlient/issues
- **Log dosyası**: `%APPDATA%\.yikimlient\logs\yikimlient.log`

Her hata bildirimi YIKIMLient'ı herkes için daha iyi yapar! 🔥

---

## 📄 Lisans

Kod MIT. "YIKIMLient" markası ve dokümanlar sahibine aittir.
