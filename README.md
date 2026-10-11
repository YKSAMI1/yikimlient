# 🔥 YIKIMLient

**Ultra-hafif, ultra-hızlı Minecraft istemcisi: launcher + oyun içi mod.** Lunar / OneClient deneyimi — Electron'suz.

| | YIKIMLient | Electron tabanlı launcher'lar |
|---|---|---|
| RAM (boşta) | ~100–150 MB | 300–700 MB |
| Kurulum boyutu | ~3.5 MB | 150–250 MB |
| Motor | Tauri 2 + Rust + sistem WebView | Paketli Chromium + Node |

## Özellikler

- 🎮 **Offline + Microsoft girişi** (resmî device-code akışı: XBL → XSTS → Minecraft)
- 📦 **Hazır mod paketi** — tek tıkla kurulum; eklenen modlar mevcut kurulumlara otomatik düşer, çakışanlar emekliye ayrılır. Her bileşen alanının en iyisinden: Sodium, Lithium, FerriteCore, Krypton, ModernFix, EntityCulling, ImmediatelyFast, Noisium, Particle Core, Dynamic FPS, FastQuit…
- ☕ **JVM profilleri**: Dengeli / Yüksek FPS / Ultra FPS (Eski PC) / Düşük RAM / Düşük Gecikme / Agresif
- 🛡️ **Ayar profili + bekçi**: her açılışta Türkçe arayüz, sınırsız FPS, VSync kapalı, tüm sarsıntı efektleri kapalı; oyun içi **performans bekçisi** sürüklenen ayarları geri alır (kullanıcı ayar ekranındayken asla karışmaz)
- 🧩 **Oyun içi YIKIM modu**: Sağ Shift paneli (modlar, katalog, profiller), tam ekran HUD editörü (matris ızgara), widget başına ölçek, FPS/TPS/HUD maliyeti ölçümü, A/B performans testi
- 🔄 **Oyun içi mod aç/kapa → perde**: oyundan çıkınca değişiklikler canlı uygulanır ve oyun kendini yeniden başlatır (mini launcher penceresiyle)
- 🌐 **YIKIMDARA sunucusu** otomatik listede
- 📰 **İmzalı duyurular**: yalnızca geliştiricinin ed25519 imzalı feed'i; Mojang haber akışı yok
- 🔄 **Otomatik güncelleme**: GitHub Releases'ten, minisign imzalı — geçersiz imza kurulamaz

## 🔒 Veri şeffaflığı (mod ve launcher ne yapar?)

**Toplanan/kullanılan veriler:**
- **Hesap adı + UUID** (seçili profil için) — yerel `accounts.json`
- **Oynanış istatistikleri** (süre, sunucu adresi) — *tamamen yerel*, `sessions.jsonl`; hiçbir yere gönderilmez
- **Kurulum ayarları** (RAM, sürüm, JVM profili) — yerel `yikimlient.json`

**Ağ bağlantıları (yalnızca bu üçü):**
1. **Modrinth / CurseForge API** — mod arama + indirme (katalog)
2. **Duyuru feed'i** — `feed.json` + imza (GitHub)
3. **Güncelleme kontrolü** — GitHub Releases

**Modun dosya erişimi:** yalnızca kendi oyun klasörü içinde: `mods/`, `config/yikimlient.cfg`, `.yikim/` köprü dosyaları (launcher ile iletişim). Oyun ayarlarına yalnızca **onaylanan profil değerleri** yazılır; tuş atamalarına ve kullanıcı tercihlerine dokunulmaz.

**Telemetri YOK.** Analitik, izleme, reklam, veri satışı yok. Microsoft token'ları yalnızca yerelde tutulur.

## Kurulum

### Windows
Releases sayfasından `YIKIMLient_x64-setup.exe` indir → kur → oyna. Java dahil indirilir.

### Linux
Releases sayfasından:
- **AppImage**: `yikimlient_x.x.x_amd64.AppImage` indir → çalıştır
- **DEB**: `yikimlient_x.x.x_amd64.deb` → `sudo dpkg -i yikimlient_*.deb`

Gereksinimler (dağıtımdan bağımsız):
```bash
# Ubuntu/Debian
sudo apt install libwebkit2gtk-4.1-0 libgtk-3-0

# Fedora
sudo dnf install webkit2gtk4.1 gtk3

# Arch
sudo pacman -S webkit2gtk-4.1 gtk3
```
Java otomatik indirilir (Mojang'ın Linux runtime'ı).

## Geliştirme

```bash
npm install
npm run app              # tauri dev
npm run dist             # kurulum paketi üret
cargo test               # Rust testleri (src-tauri/)
```

Oyun içi modun kaynak kodu: `yikim-mod/` (tek komutla derlenir):
```powershell
powershell -File yikim-mod\araclar\derle-1.21.11.ps1
```

Mimari ve performans hedefleri: [`PERFORMANS-MIMARISI.md`](./PERFORMANS-MIMARISI.md)

## Duyuru yayınlama (yalnızca geliştirici)

Duyurular ed25519 imzalıdır — yalnızca imza sahibi yayınlayabilir:
1. `news/feed.json` düzenle
2. `node tools/news-sign.mjs sign`
3. `feed.json` + `feed.json.sig` dosyalarını haber reposuna push'la

## Yol haritası

- [ ] `yikim-optimize`: derin render yamaları (mixin) — ölçüm protokolü şartıyla
- [ ] Diğer MC sürümlerine mod port'u
- [ ] Android (Rust çekirdek aynı kalır)
- [ ] Discord RPC

## Lisans

Kod MIT. `PERFORMANS-MIMARISI.md` ve marka adı YIKIMLient'a aittir.
