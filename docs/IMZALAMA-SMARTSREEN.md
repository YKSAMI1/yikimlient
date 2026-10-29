# SmartScreen "Windows kişisel bilgisayarınızı korudu" — neden çıkıyor, nasıl biter?

## Kısa cevap

Bu uyarı **virüs değil**. Windows, indirilen bir kurulum dosyasını iki şeye göre
yargılar:

1. **Yayıncı imzası** — dosyada güvenilir bir sertifikayla atılmış imza var mı?
2. **İtibar (reputation)** — bu dosya/hesap daha önce kaç kez indirildi, kaç kişi
   "yine de çalıştır" dedi?

Yeni sürümlerin hiçbiri imzasız olduğu için "bilinmeyen yayıncı" olarak çıkıyor ve
itibar sıfırdan başlıyor. Her yeni sürümde hash değiştiği için itibar da sıfırlanır.
**Bu yüzden kod değişikliğiyle çözülemez; sertifika gerekir.** Aşağıdaki üç yol
dışında bir "hile" yok — internette anlatılan "manifest/license/upx" numaraları
SmartScreen'i etkilemez.

## Yol 1 — SignPath Foundation (ücretsiz, açık kaynak projeler için)

Proje GitHub'da açık kaynak olduğu için en mantıklı ücretsiz yol budur.
SignPath, açık kaynak projelere **ücretsiz kod imzalama sertifikası** verir.

1. https://signpath.org/apply → "SignPath Foundation" başvurusu
2. Repo: `https://github.com/YKSAMI1/yikimlient`, lisans dosyası (`LICENSE`) şart
3. Onay gelince SignPath panelinden proje + "signing policy" oluşturulur
4. GitHub Actions'a SignPath adımı eklenir (`.github/workflows/build.yml`)

Onay süresi genelde birkaç haftadır ve projenin gerçekten açık kaynak/aktif
olması beklenir. Sertifika geldiğinde CI'ya `SIGNPATH_*` secret'ları eklenir;
`tools/imzala.ps1` yerel derlemede aynı işi `YIKIM_CERT_PFX` ile yapar.

## Yol 2 — Azure Trusted Signing (ucuz abonelik)

Microsoft'un bulut imzalama servisi. Sertifika diske inmez, CI'da imzalanır.
Aylık ~9 USD. Şart: en az 3 yıllık ticari geçmiş **veya** bireysel doğrulama
(bazı ülkelerde bireysel hesap kabul edilmiyor). Repo zaten Microsoft hesabıyla
ilişkili olduğundan başvuru kolaydır.

## Yol 3 — OV/EV sertifika satın alma

- **OV** (Organization Validation): ~100–200 USD/yıl. SmartScreen itibarı
  yine sıfırdan başlar ama "bilinmeyen yayıncı" yerine firma adı görünür ve
  itibar hızla oluşur.
- **EV** (Extended Validation): ~300–600 USD/yıl, donanım token. **SmartScreen'i
  ilk indirmeden itibaren atlar** — uyarı hiç çıkmaz.

Türkiye'de yaygın sağlayıcılar: SSL.com, Certum, Sectigo (bayi üzerinden),
GlobalSign. Şirket/şahıs vergi bilgisi + telefon doğrulaması istenir.

## Sertifika alındığında yapılacaklar (kod hazır)

1. `.pfx` dosyasını `tools/codesign.pfx` yap **veya** sertifikayı
   `certmgr.msc` → Kişisel → Sertifikalar altına kur ve SHA1 parmak izini
   `tools/codesign-thumbprint.txt` dosyasına yaz.
2. `tools/yayimla.ps1` çalıştır — `tools/imzala.ps1` otomatik çağrılır,
   kurulum dosyasını imzalar ve doğrular.
3. CI imzası için GitHub secrets: `YIKIM_CERT_PFX` (base64 .pfx),
   `YIKIM_CERT_PASS`.

Bu iki dosya **asla** repoya eklenmez (`.gitignore` kapsamında).

## Sertifika yokken yapılabilecekler (kısmi iyileştirme)

Bunlar uyarıyı silmez ama kullanıcı deneyimini ve AV yanlış pozitiflerini iyileştirir:

- **SHA-256 sağlama toplamı yayınla** — `SHA256SUMS.txt` sürümle birlikte
  yükleniyor; kullanıcı dosyayı doğrulayabilir, AV satıcıları da itiraz
  incelemesinde bu kaydı görür.
- **Microsoft'a yanlış pozitif bildirimi** — Defender/Avast bir dosyayı
  engelliyorsa: https://www.microsoft.com/en-us/wdsi/filesubmission
  (imzasız da başvurulabilir; genelde 24–72 saatte düzelir).
- **Avast/AVG'ye bildirim** — https://www.avast.com/false-positive-file-form.php
- **Kurulum notu** — indirme sayfasında "Ek bilgi → Yine de çalıştır" adımını
  gösteren tek paragraf, kullanıcı kaybını ciddi azaltır.

## Neden her yeni sürümde tekrar çıkıyor?

SmartScreen itibarı **dosya hash'ine** bağlıdır. `latest.json` + yeni setup.exe
her sürümde yeni hash üretir; imza yoksa itibar da yoktur. İmza varsa yayıncı
adı sabit kalır ve uyarı çıkmaz — bu yüzden sertifika tek kalıcı çözümdür.
