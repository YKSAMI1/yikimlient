# Windows kod imzası (SmartScreen uyarısı) — araştırma ve kurulum rehberi

> Durum: 23 Kasım 2026 · Bu depo için **ücretsiz yol (SignPath Foundation)**
> ve **ucuz resmî yol (Certum Open Source / OV)** hazır. Ekranı koruyan
> yazılımın tamamı `tools/imza.ps1`, `tools/yayin-genel.ps1` ve
> `.github/workflows/sign-windows.yml` içinde.

---

## 1) Sorun ne?

Kullanıcı ilk kez indirdiği `YIKIMLient_x.y.z_x64-setup.exe` dosyasını
çalıştırınca Windows şunu gösteriyor:

> **Windows protected your PC** — Windows SmartScreen prevented an unrecognized
> app from starting.

İki ayrı sebep vardır:

1. **Dosya imzalı değil** → Windows "yayıncı bilinmiyor" diyor.
2. **İtibar (reputation) yok** → imzalı dosyalarda bile, dosyanın yeterli
   indirilme geçmişi oluşana kadar uyarı çıkabilir.

Microsoft 2024'ten beri **EV sertifikanın "anında güven" avantajını
kaldırdı**; artık EV de OV de aynı şekilde itibar biriktiriyor. Yani pahalı
sertifika almak bu uyarıyı tek başına anında kaldırmıyor — **imza + itibar**
lazım.

## 2) Seçenekler (2026 güncel fiyat/koşullar)

| Yol | Maliyet | Kullanıcı ne görür | Türkiye'de uygun mu? | SmartScreen |
|---|---|---|---|---|
| **SignPath Foundation** | **ÜCRETSİZ** | "SignPath Foundation" (sertifika onların) | ✅ evet | Uyarı büyük ölçüü azalır (onların itibarı) |
| **Certum Open Source** (cloud) | **~€49/yıl** | "Open Source Developer" + kendi adın | ✅ evet (kişiye veriliyor) | İmza var, itibar zamanla |
| **Standart OV sertifika** | ~$99–300/yıl | Kendi adın/şirketin | ✅ evet | Aynı (OV) |
| **Azure Artifact Signing** | $9,99/ay | Doğrulanmış kimliğin | ❌ **hayır** — kişi başvurusu yalnız ABD/Kanada; kuruluş için 12 ülke gerekli | SignPath ile aynı mantık |
| **EV sertifika** | $400+/yıl | Kuruluş adı | ✅ | Artık anında geçiş yok — sadece bunun için pahalı |
| **Microsoft Store (MSIX)** | Ücretsiz (tek seferlik $19) | Microsoft imzalı | ✅ | Uyarı tamamen yok **ama** paketleme ve güncelleme akışı değişir |
| **İmzasız (şimdiki hâli)** | ₺0 | Bilinmeyen uygulama | — | ❌ uyarı devam eder |

**Özetle:** Açık kaynak olduğu için önce **SignPath Foundation** (ücretsiz)
dene. Reddedilirse/istemezsen **Certum Open Source (~€49)** en mantıklı
ikinci seçenek. İki yol da bu depoya hazır.

---

## 3) Bu depoda hazır olanlar (ben yaptım)

| Parça | Ne yapıyor |
|---|---|
| `LICENSE` (MIT) | SignPath şartı: OSI onaylı lisans — **eklendi** |
| `README.md` → "Kod imza politikası" | SignPath şartı: politika sayfası + ekip rolleri + gizlilik cümlesi — **eklendi** |
| `tools/imza.ps1` | `.pfx` veya base64 `.pfx` ile `signtool` imzası + doğrulama (zamanda durdan bağımsız) |
| `tools/yayin-genel.ps1` | Sertifika tanımlıysa kurulum exe'sini **otomatik imzalar**, sonra updater `.sig` dosyasını yeniden üretir |
| `.github/workflows/sign-windows.yml` | GitHub'da Windows paketini derler + SignPath **veya** PFX ile imzalar; imza sonrası `.sig` yenilenir |
| `ui/mock-harness.html` | (ilgili yok) |

> Not: **İmza dosyanın SHA'sini değiştirir**. Bu yüzden imza işleminden SONRA
> Tauri updater `.sig` dosyası mutlaka yeniden üretilmeli — iki yerde de
> (`yayin-genel.ps1` ve CI akışı) yapılıyor. Aksi halde kullanıcının
> güncellemesi "signature verification failed" ile reddedilir.

---

## 4) Yol A — SignPath Foundation (ücretsiz, önerilen)

### Neden bu yol
Sertifika SignPath Foundation'a veriliyor; anahtar onların HSM'inde. Sen
imza atmak için GitHub Actions'tan istek gönderirsin, senin kendi kimlik
doğrulaman gerekmez. Desteği ücretsiz ve şartları depo ile uyumlu:
açık kaynak + tamamı otomatik derleme + yayın sayfası var.

### Şartları (hepsi karşılandı)
- OSI onaylı lisans — ✅ `LICENSE` (MIT)
- Ticari çift lisanslama / kapalı kaynak bileşen yok — ✅ (`resources/`
  altındaki jar'ların tamamı bu depodan derleniyor)
- Aktif bakım + yayınlanmış sürüm — ✅ (GitHub Releases + site)
- İşlevsellik indirme sayfasında yazıyor — ✅ README
- Ekip rollerinin yazılı olması — ✅ README
- **İki faktörlü doğrulama (2FA)** — ⚠️ **senin yapman gerekiyor**:
  https://github.com/settings/security → "Two-factor authentication"
- Derleme otomatik olmalı — ✅ `.github/workflows/sign-windows.yml`

### Adımlar
1. GitHub hesabında 2FA'yı aç.
2. SignPath'a başvur (aşağıdaki hazır metni kopyala-yapıştır).
   - Adres: https://signpath.org/ (Apply for free code signing) ya da
     `oss-support@signpath.org` adresine e-posta.
3. Onaydan sonra SignPath'te bir **Project** oluştur:
   - Repository URL: `https://github.com/YKSAMI1/yikimlient`
   - Trusted Build System: **GitHub.com**
   - İki **signing policy**: `test-signing` (test sertifikası) ve
     `release-signing` (yayın sertifikası)
   - Bir **artifact configuration** (slug örn. `yikimlient-installer`),
     türü "Portable Executable or Windows device driver executable file",
     root türü: **dosya** (ZIP değil) — parametre `version`.
4. SignPath'ta bir **API token** oluştur (submitter yetkisiyle).
5. GitHub'da (Settings → Secrets and variables → Actions):
   - **Secrets:** `SIGNPATH_API_TOKEN`
   - **Variables:** `SIGNPATH_ENABLED=true`, `SIGNPATH_ORGANIZATION_ID`,
     `SIGNPATH_PROJECT_SLUG`, `SIGNPATH_SIGNING_POLICY_SLUG`,
     `SIGNPATH_ARTIFACT_CONFIGURATION_SLUG=yikimlient-installer`
6. İlk deneme: Actions → **Windows Sign** → Run workflow → `release: false`
   (imzalanır, sadece artifact olarak durur).
7. Yayına almak için `release: true` (veya depo değişkeni
   `YIKIM_WINDOWS_CI_UPLOAD=1`) — imzalı exe + `.sig` + SHA256SUMS yüklenir.

### Hazır başvuru metni (İngilizce)

```
Subject: Free OSS code signing application - YIKIMLient (Minecraft launcher)

Hello SignPath team,

I would like to apply for the free OSS code signing subscription
(SignPath Foundation) for my open source project:

  Project:     YIKIMLient
  Repository:  https://github.com/YKSAMI1/yikimlient
  License:     MIT (LICENSE file in repository root)
  Download:    https://github.com/YKSAMI1/yikimlient/releases
  Website:     https://yikimlient.vercel.app

About the software:
YIKIMLient is a lightweight Minecraft launcher written in Rust (Tauri 2)
plus an in-game mod (Java/Fabric). It is free, has no ads, no telemetry
and no proprietary components - every file shipped in the installer
(including the bundled mod) is built from source in this repository.
Releases are built with GitHub Actions and each signing request will be
approved manually.

What is not yet in place:
- Trusted Signing / code signing certificate (this is what I am applying for).

What is already in place:
- OSI-approved MIT license in the repository root.
- Code signing policy and team roles documented in README
  ("Kod imza politikası" section).
- Automated Windows build + signing workflow:
  .github/workflows/sign-windows.yml
- 2FA enabled on the GitHub account.

Sample signed artifact (what we would submit for signing):
  YIKIMLient_0.10.6_x64-setup.exe (NSIS installer, built by the workflow above)

Thank you very much!
YK
```

---

## 5) Yol B — Certum Open Source (~€49/yıl, kendi adın görünsün)

Certum (Polonya, AB içi CA) bireylere özel "Open Source Code Signing"
ürünü satıyor: sertifikada **kendi adın** "Open Source Developer" etiketiyle
görünür. Ürüler:

| Paket | Fiyat | Anahtar nerede |
|---|---|---|
| Cloud (SimplySign) | ~€49/yıl | Certum'un bulutunda (hardware gerekmez, CI uyumlu) |
| Kod (kendi kartın) | ~€25/yıl | cryptoCertum kart + okuyucu gerekir |
| Kart seti | ~€69/yıl | Kart + okuyucu dahil |

### Adımlar
1. https://certum.store/open-source-code-signing.html adresinden "In the
   Cloud" paketini al (~€49).
2. Kimlik doğrulama: otomatik kimlik doğrulama (önerilen) + **adresine**
   düzenlenmiş bir fatura (elektrik/su/telefon) + **projenin herkese açık
   adresi** (GitHub depo linki). 1–5 iş günü sürer.
3. Sertifikayı `.pfx` olarak indir (SimplySign'de "export" / Windows
   sertifika mağazasından anahtarı çıkar).
4. Yerelde imza denemesi:
   ```powershell
   $env:YIKIM_IMZA_PFX      = "$env:USERPROFILE\Downloads\sertifika.pfx"
   $env:YIKIM_IMZA_PFX_PAROLA = "pfx-şifren"
   .\tools\imza.ps1 "src-tauri\target\release\bundle\nsis\YIKIMLient_0.10.6_x64-setup.exe"
   ```
5. Yayınlar otomatik imzalansın: `tools\yayin-genel.ps1` bu iki ortam
   değişkenini görünce imzalar. Kalıcı yapmak için sisteme koy:
   ```powershell
   [Environment]::SetEnvironmentVariable("YIKIM_IMZA_PFX_B64",
     [Convert]::ToBase64String([IO.File]::ReadAllBytes("C:\yol\sertifika.pfx")), "User")
   [Environment]::SetEnvironmentVariable("YIKIM_IMZA_PFX_PAROLA","şifre", "User")
   ```
   (base64 kullanımı şifre dosyada düz metin kalmasın diye tercih edilir.)
6. CI tarafında: Secrets → `YIKIM_IMZA_PFX_B64` + `YIKIM_IMZA_PFX_PAROLA`
   eklersen **Windows Sign** akışı da imzalar.

> ⚠️ Certum'un Open Source sertifikası **yalnız ticari olmayan** yazılım için.
> YIKIMLient ileride satılırsa/para kazandırırsa sertifika iptal edilebilir —
> o zaman standart OV sertifikaya geçmek gerekir.

---

## 6) Yol C — Standart OV sertifika (tüm CA'lar)

Herhangi bir OV code signing sertifikası (§99–300/yıl) çalışır. Türkiye'den
kartla ödeme yapabilen satıcılar: SSL.com, Sectigo (Comodo), DigiCert,
GetSSL/Certum. Akış Yol B ile **aynı**: `.pfx` al → `YIKIM_IMZA_PFX_B64` /
`YIKIM_IMZA_PFX_PAROLA` ver → yayınlar otomatik imzalanır.

Tauri içinde doğrudan da tanımlanabilir (`tauri.conf.json`):
```json
"bundle": { "windows": {
  "certificateThumbprint": "A1B1A2B2...",
  "digestAlgorithm": "sha256",
  "timestampUrl": "http://timestamp.digicert.com"
}}
```
Bu yöntemde imzayı `tauri build` kendi yapar.

---

## 7) Karşılaştırma: hangi yol bana uygun?

| Durumun | Öneri |
|---|---|
| Ücretsiz olsun, "SignPath Foundation" adı görünsün sorun değil | **A (SignPath)** |
| Kendi adım görünsün, ~€49/yıl verme hazırım | **B (Certum Open Source)** |
| İleride ticari olabilir | **C (OV sertifika)** |
| Sadece Windows Store'da yayın yapmak istiyorum | **D (MSIX)** — ayrı konu |

## 8) İmzadan sonra: SmartScreen itibarı

- İlk imzalı dosya da bir süre uyarı gösterebilir (dosya itibarı oluşana kadar).
- **Her sürümü aynı sertifika/aynı yayıncı kimliğiyle** imzala: itibar
  yayıncıya bağlanır, sonraki sürümler uyarı vermeden gelir.
- İstersen Microsoft'a dosyayı **elle gönder** (inceleme, "ben masumum"):
  https://www.microsoft.com/en-us/wdsi/filesubmission/ — uygulama gerçekten
  temizse itibar hızlı yükselir.
- SmartScreen uyarısı yalnız İndirilen dosyalar için geçerli; kullanıcıya
  "hata değil, More info → Run anyway" notunu e-posta/siteye yazmak iyi
  bir ara çözümdür.

## 9) Hızlı komutlar

```powershell
# Yerel, tek dosya imzala
$env:YIKIM_IMZA_PFX_B64 = [Convert]::ToBase64String([IO.File]::ReadAllBytes("C:\yol\sertifika.pfx"))
$env:YIKIM_IMZA_PFX_PAROLA = "sifre"
.\tools\imza.ps1 "src-tauri\target\release\bundle\nsis\YIKIMLient_0.10.6_x64-setup.exe"

# Updater .sig dosyasını elle imzalanmış dosya için yenile
npx tauri signer sign -k (Get-Content tools\updater-private.key -Raw) --app-version 0.10.6 "<exe>"

# İmza kontrolü
(Get-AuthenticodeSignature "<exe>").Status
```