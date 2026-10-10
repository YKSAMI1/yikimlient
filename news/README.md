# YIKIM Haber / Duyuru Sistemi

Launcher'ın "Haberler" sayfasında **sadece senin** duyurularının görünmesini sağlar.
Güvenlik modeli: **Ed25519 imza**. Duyuru dosyası (`feed.json`) herkese açık bir
GitHub repo'sunda durur, ama sadece senin bilgisayarındaki özel anahtarla
imzalanabilir. Launcher içinde gömülü public key imzayı doğrular; imzasız veya
bozuk imzalı hiçbir duyuru gösterilmez. Repo'yu biri ele geçirse bile sahte
duyuru yayınlayamaz.

## Dosyalar

| Dosya | Ne işe yarar |
|---|---|
| `news/feed.json` | Duyuruların (görsel, link, metin dahil) bulunduğu dosya |
| `news/feed.json.sig` | feed.json'ın ed25519 imzası (base64) |
| `tools/news-sign.mjs` | İmzalama aracı (Node.js 18+, ek kurulum yok) |
| `tools/news-private.key` | **GİZLİ** özel anahtar — asla repo'ya push edilmez |

## İlk kurulum (bir kere)

```bash
node tools/news-sign.mjs keygen
```

Bu komut:
1. `tools/news-private.key` dosyasını oluşturur (sadece senin bilgisayarında).
2. Ekrana bir public key HEX'i yazar → onu `src-tauri/src/stats.rs` içindeki
   `NEWS_PUBKEY_HEX` sabitinin yerine koy ve launcher'ı yeniden derle.
   (Public key gömülmeden duyuru sistemi kapalı kalır — bilinçli tasarım.)

## Duyuru yayınlama

1. `news/feed.json` dosyasını düzenle (örnek biçim aşağıda).
2. İmzala:
   ```bash
   node tools/news-sign.mjs sign
   ```
3. `feed.json` + `feed.json.sig` dosyalarının İKİSİNİ de haber repo'na push'la.
   (`stats.rs` içindeki `NEWS_FEED_URL` sabiti bu repo'nun raw adresini göstermeli.)

Yayından sonra launcher'lar en fazla 30 dk içinde yeni duyuruyu çeker (disk cache
süresi). "Yenile" istenirse cache `~/.yikimlient/news/` klasöründen silinebilir.

## feed.json biçimi

```json
{
  "version": 1,
  "updated_at": 1760000000,
  "announcements": [
    {
      "id": "benzersiz-kimlik",
      "title": "Başlık",
      "text": "Kartta görünen kısa özet",
      "body": "Devamını oku metni.\n\nParagraflar boş satırla ayrılır.",
      "image": "https://... (opsiyonel, https zorunlu)",
      "link": "https://... (opsiyonel, tıklanabilir buton)",
      "link_label": "Buton yazısı",
      "date": "2026-10-10",
      "pinned": true
    }
  ]
}
```

Kurallar:
- `link` ve `image` yalnızca `https://` ile başlayabilir; değilse launcher açmaz.
- `body` düz metindir — HTML etiketi girilse bile metin olarak görünür.
- `pinned: true` olan duyuru listenin en üstünde sabitlenir.

## Önemli notlar

- **`tools/news-private.key` dosyasını sakla.** Kaybedersen mevcut anahtarla imza
  yayınlayamazsın; yeni anahtar = yeni launcher sürümü (yeni public key gömülür).
- Bilgisayarını değiştirirsen anahtar dosyasını güvenli yolla (USB, şifreli arşiv)
  taşı — asla Discord/WhatsApp üzerinden gönderme.
- Anahtar sızarsa: yeni keygen yap, yeni public key'le yeni launcher sürümü çıkar.
  Eski sürümleri kullananlar eski duyuruları görür, yeni sahte duyuru göremez çünkü
  yeni duyurular yeni anahtarla imzalanır ve eski launcher reddeder.
