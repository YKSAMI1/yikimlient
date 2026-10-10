# YIKIMLient — Oturum notu (kaydediliyor)

## Background build (PID 14212)
- Komut: `npm run dist` (release tauri build + NSIS bundle)
- stdout log: C:\Users\USER\AppData\Local\Temp\codebuff-process-h7rMCe\stdout.log
- stderr log: C:\Users\USER\AppData\Local\Temp\codebuff-process-h7rMCe\stderr.log
- Beklenen çıktı: src-tauri\target\release\bundle\nsis\YIKIMLient_0.1.0_x64-setup.exe

## Kapanış kontrolleri (yapıldı)
- tsc --noEmit → exit 0
- cargo check → exit 0

## Yeniden başlatınca yapılacak
1. Build bitmiş mi kontrol et (stdout log'unda "Finished 1 bundle" aramak yeter).
2. Bitmişse: news yayıncı kılavuzu + mod listesi + duyuru sistemi özetini kullanıcıya ver.
3. Bitmemişse: log'daki hatayı göster, düzelt, yeniden derle.

## Bu oturumda eklenenler
- modpacks.rs: istek listesindeki eksik modlar eklendi (litematica, gamma-utils, voice-chat, crash-assistant, ESF/ETF/EMF, fast-noise, effect-timer-plus, ukus-armor-hud, auth-me, fastquit, cubes-without-borders, gnetum, ixeris, morechathistory, no-chat-reports, player-kits, modify-player-data, carpet, auto-lectern, minecraftcapes); yeni kategori "yardarci" + instances.ts'te "Yardımcı" başlığı.
- stats.rs: ed25519-imzalı YIKIM duyuru feed'i (NEWS_FEED_URL + NEWS_PUBKEY_HEX placeholder) — imza doğrulanmadan içerik gösterilmez.
- commands.rs/lib.rs: cmd_list_yikim_news komutu.
- news.ts: duyuru kartları (pinned destekli, https link zorunlu, body paragraflı).
- pages.css: .yikim-announce kart stili.
- docs/news-publishing.md: yayıncı kılavuzu (anahtar üretimi, feed.json imzalama, rotasyon).

## Dikkat
- NEWS_PUBKEY_HEX hâlâ placeholder ("q_Replace_..."); başında "q_" olduğu sürece duyuru sistemi sessiz (boş liste). Anahtar gömülmeden hiçbir duyuru görünmez — bu bilinçli güvenlik durumu.
