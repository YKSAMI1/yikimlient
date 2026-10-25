# YIKIM Presence — ÜCRETSİZ BULUT KURULUMU

VDS kesintilerini bitirmek için presence sunucusunu **Hugging Face Spaces**
(ücretsiz, kredi kartı YOK) üzerinden 7/24 çalıştır. Aynı klasördeki
`PresenceServer.java` + `Dockerfile` + bu `README.md` yeterli.

## Hugging Face Spaces (ÖNERİLEN — kartsız ücretsiz)

1. https://huggingface.co/join → ücretsiz hesap aç
2. https://huggingface.co/new-space → isim: `yikim-presence` → **SDK: Docker** → Blank → Create
3. Space sayfasında **Files** sekmesi → **Add file → Upload files**:
   bu klasördeki 3 dosyayı yükle: `PresenceServer.java`, `Dockerfile`, `README.md`
4. Yükleme bitince Space otomatik derler (~1 dk). Durum **Running** olunca hazır.
5. Adresin: `https://KULLANICI_ADIN-yikim-presence.hf.space`
   (Space'in sağ üstündeki ⋮ → Embed this Space → "Direct URL" kısmında yazar)

Launcher'a adres yazma (2 yol):
- **Oyun içi**: Yıkım menüsü → Ayarlar → Presence Adresi → `https://KULLANICI_ADIN-yikim-presence.hf.space`
- **Elle**: `.minecraft/.yikim/presence-url.txt` dosyasına aynı adresi yaz.

Notlar:
- HF ücretsiz Space'i ~48 saat trafik gelmezse uyar; sen oyuna girince ilk
  kalp atışı onu uyandırır (ilk bağlanış ~1 dk gecikebilir, sonra normal).
- İzin listesi (`izinler.json`) Space dosya alanında saklanır; Space'i
  yeniden başlatsan da kaybolmaz (Container yeniden kurulursa boşalabilir —
  admin panelden bir kez yeniden Kaydetmen yeterli).
- Kesintisiz 7/24 + JSON kaybı sıfır istersen: Space → Settings → **Persistent
  storage** yok (ücretsizde yok), bu yüzden kritik durumda aşağıdaki Render
  alternatifine bak.

## Alternatif: Render.com (ücretsiz web service)

1. https://render.com → GitHub ile gir (kart gerekmez)
2. New → **Web Service** → "Deploy an existing image" yerine **Docker**:
   bu klasörü bir GitHub repo'suna push et, Render'da repo'yu bağla
3. Free instance seç (512 MB yeter) → Create
4. Adres: `https://servis-adin.onrender.com` — launcher'a aynı şekilde yaz.
   Not: 15 dk trafik gelmezse uyar; oyuncu girince ilk istek onu uyandırır.

## Test

Tarayıcıda aç: `https://ADRES/presence` → `{"ok":true,...}` görürsen çalışıyor.
Oyunda iki hesapla gir: TAB'da rozetler görünmeli.
