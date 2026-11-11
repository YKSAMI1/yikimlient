# YIKIM güvenlik API'si — Cloudflare Workers + D1

Bu klasör, güvenlik API'sinin **kimsenin bilgisayarında çalışmayan** sürümüdür.
Cloudflare'in ücretsiz planında çalışır (istek/gün 100.000, istek başına 10 ms CPU).

```
launcher / bot  →  https://yikimlient.vercel.app/api/...   (sabit adres)
                     │  Vercel rewrite (site/vercel.json)
                     ▼
                   https://yikim-guvenlik.<hesap>.workers.dev/api/...
                     │
                     ▼
                   D1 veritabanı (yikim-guvenlik)
```

## Neden scrypt yok?

Eski yerel sunucu parolayı sunucuda `scrypt` ile türetiyordu (~30–100 ms CPU).
Workers ücretsiz planı istek başına **10 ms** CPU verir; scrypt isteği öldürürdü.

İstemci parolayı zaten `PBKDF2-SHA256, 210.000 tur` ile özetliyor
(`ui/src/guvenlik.ts`). Sunucu artık yalnız:

- `HMAC-SHA256(tuz, pepper | istemci_özeti)` → doğrulayıcı
- `AES-256-GCM` zarf (DB sızsa bile doğrulayıcı okunamaz)
- `Ed25519` istek/yanıt imzaları

saklar. Eski (scrypt) parolalar burada doğrulanamaz; o hesaplar launcher'da
**bir kez** yeni parola oluşturur (Discord bağlantısı korunur).

## Kurulum (tek seferlik)

```powershell
cd guvenlik-worker
npx wrangler login
npx wrangler d1 create yikim-guvenlik          # çıkan database_id → wrangler.toml
npx wrangler d1 execute yikim-guvenlik --remote --file=migrations/0001_init.sql
npx wrangler d1 execute yikim-guvenlik --remote --file=migrate-veri.sql   # isteğe bağlı taşıma
npx wrangler secret put YIKIM_PEPPER
npx wrangler secret put YIKIM_ANAHTAR
npx wrangler secret put YIKIM_IMZA_GIZLI
npx wrangler secret put YIKIM_BOT_ANAHTARI
npx wrangler deploy
```

`YIKIM_IMZA_GIZLI` **aynı** kalmalı: launcher'daki gömülü genel anahtar
(`7KQAP+vcD6GLgnAm7xxfcW+azF+QVSH49Gye8h8cQUk=`) bu anahtardan türetilir.
Değişirse tüm eski launcher'lar yanıt imzasını doğrulayamaz.

## Yerel test

```powershell
npx wrangler dev --local --port 8788
# başka terminal:
$env:YIKIM_API="http://127.0.0.1:8788"; cd ..\src-tauri; cargo test --lib -- --ignored --test-threads=1
```

`cargo test` 5 canlı testi geçmelidir (cihaz kaydı, sağlık, imza, olay/IP,
kod→şifre→giriş zinciri).

## Veri taşıma

`node tools/d1-tasima.mjs` yerel `guvenlik.db`'den `migrate-veri.sql` üretir.
Parolalar taşınmaz (yukarıdaki neden); cihaz kimlikleri, Discord bağlantıları
ve kozmetik kayıtları korunur.
