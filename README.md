# 🔥 YIKIMLient

**Ultra-hafif, ultra-hızlı, göz alıcı Minecraft launcher.** Lunar / Dawn / OneClient seviyesinde bir deneyim — Electron'suz.

## Neden bu kadar hafif?

| | YIKIMLient | Electron tabanlı launcher'lar |
|---|---|---|
| RAM (boşta) | ~50–90 MB | 300–700 MB |
| Başlatma | <1 sn | 3–8 sn |
| Kurulum boyutu | ~15 MB | 150–250 MB |
| Motor | Tauri 2 + Rust + sistem WebView | Paketli Chromium + Node |

## Özellikler

- 🎮 **Offline + Microsoft girişi** (device-code akışı; XBL → XSTS → MC zinciri)
- 📦 **Mod paketleri**: Fabric/Vanilla kurulumlar, ikonlar, kopyalama, silme
- ☕ **Java argüman presetleri**: Dengeli / Yüksek FPS / Düşük RAM / Düşük Gecikme / Agresif — açıklamalı
- 🧩 **Standart modlar**: kurulum sırasında otomatik (performans + PVP + görünüm), sonra tek tek aç/kapa
- 🧭 **Keşfet**: Modrinth + CurseForge arama; mod ve hazır paket tek tıkla kurulum
- 📥 **Akıllı indirme**: SHA1 doğrulamalı, paralel (32 bağlantı), mevcut dosyaları atlar
- ☕ **Otomatik Java**: Mojang resmî runtime'ları (her MC sürümü için doğru Java)
- 📊 **İstatistik**: oynanış süresi, sunucu geçmişi, gün dağılımı — **tamamen event-driven, oyun içinde sıfır I/O**
- 📰 **Haberler**: Mojang resmî patch note akışı
- 🎨 **Temalar**: turuncu/siyah default + 4 tema + özel renk; her şey Ayarlar'dan
- 📜 **Canlı log**: renkli, filtreli, satır sayan akış

## Geliştirme

```bash
npm install
npm run app      # tauri dev
```

## Dağıtım

```bash
npm run dist     # NSIS + MSI üretir (src-tauri/target/release/bundle/)
```

## CurseForge desteği

CF API anahtarı gerektirir (ücretsiz): [console.curseforge.com](https://console.curseforge.com).
`%APPDATA%/.yikimlient/curseforge_key.txt` içine yaz — Modrinth anahtarsız çalışır.

## Mimari notlar (FPS vaadi)

- Launcher Rust çekirdeği: `launcher.rs` (indirme/başlatma), `repos.rs` (Modrinth/CF), `stats.rs` (event-driven istatistik)
- Oyun içi mod (gelecek aşama): tek render hook, sıfır polling, sıfır disk I/O — feature flag ile ölçülebilir
- Tüm ağırlıklı işler native tarafta; WebView yalnızca UI çizer

## Yol haritası

- [ ] Forge desteği
- [ ] Oyun içi mod: FPS boost katmanı (ilk hedef Fabric 1.21.x)
- [ ] Otomatik güncelleme (tauri-plugin-updater entegre, sunucu bekliyor)
- [ ] Discord RPC
