# YIKIM Presence — ÜCRETSİZ BULUT KURULUMU

## ÖNEMLİ — VDS senaryosu (şu an buradasın)
İzin listesi kaydolmamasının sebebi: VDS'teki jar ESKİ. İzin (izinler) desteği
YENİ `PresenceServer.java` ile geldi. Şunu yap:
1. `tools/yikim-api/PresenceServer.java`'yı VDS'e tekrar yükle
2. VDS'te derle: `javac PresenceServer.java` (Java 17+)
3. Eski jarı kapat, yeni sunucuyu aç: `java PresenceServer 8787`
Bundan sonra: izin paneli kaydeder, izin geri alınan kişiye çizim silinir ve
herkeste normal Y görünür.

VDS kesintilerini bitirmek için presence sunucusunu ücretsiz bulutta çalıştır.
**ÖNERİLEN: PythonAnywhere** — ücretsiz, kredi kartı YOK, **uykuya YATMAZ**
(VDS'teki gibi kesinti olmaz). Alternatif: Render.com.

> NOT: Hugging Face Spaces'in Docker SDK'sı artık ÜCRETLİ — bu yüzden HF yolu
> kapatıldı. Java jar'ı VDS'te çalıştırmaya devam edebilirsin ama kalıcı
> çözüm için aşağıdaki PythonAnywhere yolunu kur (aynı protokol, aynı izinler).

## YOL 1: PythonAnywhere (ÖNERİLEN — hep açık, kartsız)

1. https://www.pythonanywhere.com/registration/register/beginner/ → ücretsiz
   hesap aç (kart sorulmaz). Kullanıcı adın neyse adresin o olacak:
   `https://KULLANICI.pythonanywhere.com`
2. Üstte **Files** sekmesi → Upload → **`presence_flask.py`** dosyasını yükle
   (bu klasörde).
3. Üstte **Web** sekmesi → **Add a new web app** → Next →
   **Manual configuration** → **Python 3.10** → Next.
4. Web sekmesinde **WSGI configuration file** linkine tık → dosyanın İÇİNİ
   tamamen sil, şunu yaz (KULLANICI yerine kendi kullanıcı adın):
   ```python
   import sys
   path = '/home/KULLANICI'
   if path not in sys.path:
       sys.path.insert(0, path)
   from presence_flask import application
   ```
5. **Save** → Web sekmesine dön → büyük yeşil **Reload** butonuna bas.
6. Test: tarayıcıda `https://KULLANICI.pythonanywhere.com/presence` aç →
   `{"ok":true,...}` görüyorsan hazır.

### Launcher'a adres yazma
- Oyun içi: Yıkım menüsü → Ayarlar → Presence Adresi:
  `https://KULLANICI.pythonanywhere.com/presence`
  (sonunda `/presence` OLMAK ZORUNDA — client tam bu adrese POST atar)
- Elle: `.minecraft/.yikim/presence-url.txt` içine aynı adres.

### İzin paneli
- Mod otomatik bu sunucuyu kullanır; admin paneldeki "İzin → Kaydet" listesi
  hesabındaki `izinler.json`'a yazılır, kalıcıdır.
- Rozet çizimleri de `rozetler.json`'a yazılır — web yeniden başlasa bile
  çizimler KAYBOLMAZ (VDS'in tersine).

### Dikkat
- Ücretsiz hesapta 3 ayda bir siteye giriş yapman gerekir (yoksa uyur).
- Kesintisiz 7/24 ve tek adres: tek web app yeter, ikinci app açma.

## YOL 2: Render.com (alternatif — Java jar'ı aynen çalıştırır)

1. https://render.com → GitHub ile gir (kart gerekmez)
2. `tools/yikim-api/bulut/` klasörünü bir GitHub reposuna push et
3. New → **Web Service** → repo'yu bağla → Runtime: **Docker** →
   Instance: **Free** → Create
4. Adres: `https://servis-adin.onrender.com/presence` → launcher'a yaz.
- 15 dk trafik gelmezse uyur; oyuncu girince ilk kalp atışı uyandırır
  (~30-50 sn gecikme, sonra normal).
- İzinler container yeniden kurulunca boşalabilir (admin panelden tekrar
  Kaydet).

## Test (her iki yolda)

1. Tarayıcı: `ADRES/presence` → `{"ok":true,...}`
2. Oyunda iki hesapla gir → TAB'da rozetler.
3. Admin panelden oyuncuya izin ver → o oyuncunun O tuşu atölyeyi açmalı.
