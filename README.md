# 🔥 YIKIMLient

**Ultra-hafif, ultra-hızlı Minecraft launcher + oyun içi mod.** Lunar / OneClient seviyesinde deneyim — Electron'suz.

> **"Minecraft'ı en yüksek kare hızında, en düşük gecikmeyle ve hiçbir ayarla uğraşmadan oynatan istemci."**

## Neden YIKIMLient?

| | YIKIMLient | Electron launcher'lar |
|---|---|---|
| RAM (boşta) | ~100–150 MB | 300–700 MB |
| Kurulum boyutu | ~5 MB | 150–250 MB |
| Açılış süresi | <1 sn | 3–8 sn |
| Motor | Tauri 2 + Rust + sistem WebView | Paketli Chromium + Node |
| Oyun içi mod | ✅ YIKIM çekirdek modu | ❌ yok |

## ✨ Özellikler

### 🎮 Oyun Yönetimi
- **Offline + Microsoft girişi** — resmî device-code akışı (XBL → XSTS → MC), çoklu hesap
- **Hazır optimize mod paketi** — tek tıkla kurulum: Sodium, Lithium, FerriteCore, Krypton, ModernFix, EntityCulling, ImmediatelyFast, Noisium, Particle Core, Dynamic FPS, FastQuit ve 40+ daha fazlası
- **Oyun içi mod yönetimi** — Sağ Shift panelinden mod aç/kapa → oyun otomatik yeniden başlar
- **Modrinth + CurseForge kataloğu** — oyun İÇİNDEN mod ara + kur ( ikonlarla)
- **Otomatik Java** — Mojang resmî runtime'ları her MC sürümü için doğru Java indirir
- **JVM profilleri** — Dengeli / Yüksek FPS / Ultra FPS (Eski PC) / Düşük RAM / Düşük Gecikme / Agresif

### 🛡️ Performans Sistemi
- **Ayar profili** — her açılışta: Türkçe arayüz, sınırsız FPS (260), VSync kapalı, GUI ölçek 2, tüm sarsıntı efektleri kapalı
- **Performans bekçisi** — oyun açıkken profil değerlerini korur; başka bir mod ayarları bozarsa geri alır
- **Düşük FPS danışmanı** — FPS < 60 sürekli 10 sn → otomatik öneri
- **AFK sınırlayıcı kapalı** — oyun içinde dururken bile sınırsız FPS (yalnızca pencere küçültülünce kısıtla)
- **Mod çakışma temizliği** — Zoomify, FastNoise, Ixeris gibi çakışanlar otomatik emekliye ayrılır
- **A/B performans testi** — oyun içinde HUD açık/kapalı FPS ölçümü

### 🎨 Arayüz
- **4 tema dünyası** — Devre Panosu (varsayılan) / Söküm Sahası / Anons Panosu / Kategori Standardı
- **Özel vurgu rengi** — Ayarlar'dan herhangi bir renk seç
- **Tema senkronu** — launcher teması oyuna canlı yansır (mod `.yikim/theme.json` okur)
- **Animasyonlu kapaklar** — MP4, GIF, PNG, JPG kapak fotoğrafları; ekranda değilse video otomatik durur
- **Canlı ikonlar** — her mod için gerçek Modrinth ikonu (WebP→PNG dönüşümü dahil)
- **Tam ekran HUD editörü** — Sağ Shift → HUD sekmesi → matris ızgaralı editör (sürükle, tekerlekle ölçekle)
- **Topluluk kartı** — indirme sayısı + GitHub yıldızları

### 🔄 Otomasyon
- **Otomatik güncelleme** — GitHub Releases'ten minisign imzalı; geçersiz imza kurulamaz
- **Mod paketi tamamlayıcı** — yeni mod eklenirse mevcut kurulumlara otomatik düşer
- **YIKIMDARA sunucusu** — Çok Oyunculu listesinde otomatik hazır
- **Discord Rich Presence** — oyun açıkken Discord'da "YIKIMLient oynuyor" + logo + indirme butonu

### 📰 Duyuru Sistemi
- Ed25519 **imzalı duyurular** — yalnızca geliştirici yayınlayabilir, Mojang haber akışı yok
- Ana sayfa + Duyurular sekmesi = aynı imzalı feed
- İmzasız içerik teknik olarak imkansız

## 🔒 Veri Şeffaflığı

### Toplanan veriler (TAMAMEN YEREL):
| Veri | Nerede | Gönderilir mi? |
|---|---|---|
| Hesap adı + UUID | `accounts.json` | ❌ HAYIR |
| Oynanış istatistikleri | `sessions.jsonl` | ❌ HAYIR |
| Kurulum ayarları | `yikimlient.json` | ❌ HAYIR |
| Oyun içi ayarlar | `config/yikimlient.cfg` | ❌ HAYIR |

### Ağ bağlantıları (yalnızca bu üçü):
1. **Modrinth / CurseForge API** — mod arama + indirme
2. **GitHub** — duyurular + güncelleme kontrolü + istatistik
3. **Discord IPC** — Rich Presence (yerel, internete gitmez)

### Mod'un dosya erişimi:
- `mods/` — kendi jar'ı + kullanıcı modları
- `config/yikimlient.cfg` — oyun içi ayarlar
- `.yikim/` — launcher köprü dosyaları (tema, restart istekleri, katalog yanıtları)
- **Telemetri YOK.** Analitik, izleme, reklam, veri satışı yok.

## 📥 Kurulum

### Windows
1. [Releases](https://github.com/YKSAMI1/yikimlient/releases) sayfasından `YIKIMLient_x64-setup.exe` indir
2. Kur → aç → oyna. Java dahil her şey otomatik.

### Linux
1. [Releases](https://github.com/YKSAMI1/yikimlient/releases) sayfasından:
   - **AppImage**: `yikimlient_amd64.AppImage` → `chmod +x` → çalıştır
   - **DEB**: `yikimlient_amd64.deb` → `sudo dpkg -i`

```bash
# Gerekli kütüphaneler
sudo apt install libwebkit2gtk-4.1-0 libgtk-3-0  # Ubuntu/Debian
sudo dnf install webkit2gtk4.1 gtk3               # Fedora
sudo pacman -S webkit2gtk-4.1 gtk3               # Arch
```

## 🛠️ Geliştirme

```bash
npm install
npm run app              # tauri dev — geliştirme modu
npm run dist             # kurulum paketi üret (Windows NSIS)
npm run check            # TypeScript tip kontrolü
cargo test               # Rust birim testleri (src-tauri/)
```

### Oyun içi mod derleme:
```powershell
powershell -File yikim-mod\araclar\derle-1.21.11.ps1
```

### Mimari:
```
samiclient/
├── src-tauri/           # Rust çekirdeği (launcher mantığı)
│   ├── src/launcher.rs  # oyun indirme + başlatma motoru
│   ├── src/modpacks.rs  # mod paketi + JVM preset tanımları
│   ├── src/curtain.rs   # perde sistemi (mod aç/kapa → otomatik restart)
│   ├── src/discord_rpc.rs # Discord Rich Presence
│   └── src/game_options.rs # oyun ayar profili
├── ui/                   # React/TypeScript arayüz (Vite)
├── yikim-mod/            # Oyun içi Fabric mod (Java 21)
│   └── src/main/java/    # mod kaynak kodu
└── news/                 # imzalı duyuru feed'i
```

### Performans mimarisi:
- **Katman 0** — Launcher: JVM bayrakları + options.txt profili
- **Katman 1** — Ekosistem: her bileşen alanının en iyisi (Sodium, Lithium, vs.)
- **Katman 2** — YIKIM modu: HUD, bekçi, profiller, ölçüm (kare yolu maliyeti ~%0)
- **Katman 3** — (Planlanan) `yikim-optimize`: derin render yamaları

Detaylı performans planı: [`PERFORMANS-MIMARISI.md`](./PERFORMANS-MIMARISI.md)

## 🗺️ Yol Haritası

- [ ] `yikim-optimize`: derin render yamaları (mixin) — ölçüm protokolü şartıyla
- [ ] Diğer MC sürümlerine mod port'u (1.21.1 – 1.21.10)
- [ ] Android (Rust çekirdek aynı kalır)
- [ ] Sunucu eklentisi: YIKIM kullanıcı algılama (TAB rozeti için)

## 🐞 Sorun Bildir

- **GitHub Issues**: https://github.com/YKSAMI1/yikimlient/issues
- **Discord**: yakında!
- **Log dosyası**: `%APPDATA%\.yikimlient\logs\yikimlient.log` (Windows) / `~/.local/share/.yikimlient/logs/` (Linux)

Her hata bildirimi YIKIMLient'ı herkes için daha iyi yapar! 🔥

## 📄 Lisans

Kod MIT. `PERFORMANS-MIMARISI.md` ve "YIKIMLient" markası sahibine aittir.
