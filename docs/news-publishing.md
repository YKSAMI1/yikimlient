# YIKIM Duyuru Yayın Kılavuzu (yalnızca siz)

Launcher'daki Haberler sayfası iki kaynaktan beslenir: Mojang yama notları (otomatik)
ve **kendi duyurularınız** — imzalı bir JSON feed'i üzerinden.

## Nasıl çalışır (güvenlik modeli)

- Duyurular `feed.json` olarak bir URL'de durur (GitHub raw önerilir — ücretsiz, değişiklik geçmişi log'lu).
- Aynı dosyanın yanında `feed.json.sig` — dosyanın **ed25519 dijital imzası** durur.
- Launcher'a yalnızca **public key** gömülüdür; ö**zel** anahtarınız yalnızca sizde kalır.
- Launcher feed'i çeker, imzayı public key ile doğrular. İmza yoksa/uyuşmazsa
  duyurular sessizce YÜKLENMEZ — biri feed'i değiştirse bile içerik gösterilmez.
- Launcher'ın kendisi hiçbir hesap/token tutmaz; açık kaynak yayınlandığında
  kimse launcher'ı manipüle edip haber enjekte edemez. Güven kökü göndericidedir:
  yalnızca sizin anahtarınızın ürettiği imza geçerlidir.
- İpucu: `raw.githubusercontent.com` cache'i ~5 dk; acil düzeltmeler için
  github.io (GitHub Pages) kullanmak daha hızlı cache yenileme sağlar.

## İlk kurulum (bir kez)

1. Anahtar çifti üret:

   ```bash
   # Rust yüklü tüm platformlarda çalışır
   cargo install ed25519-cli
   ed25519-cli generate > keypair.txt
   # ya da:
   python -c "import nacl.signing, secrets; k=nacl.signing.SigningKey.generate();print('PRIV:',k.encode().hex());print('PUB:',k.verify_key.encode().hex())"
   ```

2. launcher kaynak kodunda [stats.rs](../src-tauri/src/stats.rs) dosyasında:
   - `NEWS_PUBKEY_HEX` → **PUB** anahtarınızın hex'i.

3. Anahtarınızı güvenli bir yerde saklayın (parola yöneticisi). Launcher repo'suna
   **asla** girmesin.

## Duyuru yayınlama (her duyuru)

1. `feed.json` hazırla:

   ```json
   {
     "version": 1,
     "updated_at": 1728500000,
     "announcements": [
       {
         "id": "2025-10-item",          // benzersiz
         "title": "YIKIM 0.2 çıktı!",
         "text": "Yeni sürüm notları ve indirmeler...",
         "body": "İlk paragraf.\n\nİkinci paragraf. (HTML değil, düz metin)",
         "image": "https://github.com/yikimlient/news/raw/main/banner.png",
         "link": "https://github.com/yikimlient/yikimlient/releases",
         "link_label": "İndir",
         "date": "2025-10-09",
         "pinned": true                  // istersen sabit duyuru
       }
     ]
   }
   ```

   - `image`: yalnızca `https://` (https olmayan kaynak yüklenmez)
   - `link`: yalnızca `https://` (launcher yalnızca bunu tıklanır yapar)
   - `body`: düz metin; paragraf araları `\n\n`

2. İmza üret:

   ```bash
   python - <<'PY'
   import nacl.signing, base64
   priv = "SENIN_PRIV_HEX"
   data = open("feed.json","rb").read()
   sig = nacl.signing.SigningKey(bytes.fromhex(priv)).sign(data).signature
   open("feed.json.sig","wb").write(base64.b64encode(sig))
   PY
   ```

   (Ya da `ed25519-cli sign --key keypair.txt --input feed.json --output feed.json.sig`)

3. Hepsini repo'ya push edin. Tamam!

## Launcher tarafı

- Launcher açılışta feed çeker, imzayı doğrular, 30 dk cache'te tutar.
- Doğrulanamayan duyurular **sessizce atlanır**; kullanıcı normal Mojang haberlerini
  görmeye devam eder.
- Hata durumunda launcher log'una düşer: `duyuru feed: …`

## Anahtar rotasyonu (yeni anahtar gerekirse)

1. Yeni çift üret → `NEWS_PUBKEY_HEX` değiştir → launcher sürümü yayınla →
   feed'i yeni imzayla güncelle. Eski launcher sürümleri feed'i doğrulayamaz;
   geçişte duyurular kısa bir süre görünmez — sorun değil.
