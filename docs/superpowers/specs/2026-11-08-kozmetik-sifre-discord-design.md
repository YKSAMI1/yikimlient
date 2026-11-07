# Kozmetik + Şifre + Discord Doğrulama Sistemi — Tasarım

Tarih: 2026-11-08 · Sürüm hedefi: 1.0.0 (ilk açılış sonrası zorunlu)
Durum: TASARIM — onay bekliyor (insan onayı olmadan kod yazılmaz)

## 1. Niyet ve neden

Çatlak (cracked) oyunculara lisanslı oyunculara yakın bir sistemi **ücretsiz ve sınırsız**
sunmak; kozmetikleri (pelerin/elitra/skin) kimlikle bağlamak; hesap çalma ve kimliğe
bulanma riskini kapatmak; Discord topluluğundaki "tag/rol" ile kozmetik yetkisini
eşlemek. Sahip (YKSAMI1) yönetebilir; veriler açık kaynak olsa bile sızdırılamaz
biçimde saklanır.

## 2. Hedefler / Hedef olmayanlar / Anti-hedefler

**Hedefler**
- Her launcher açılışında güncelleme zorunlu (min-version kilidi), kullanıcı onayı istemez.
- Açılışta her mevcut hesap için sırayla şifre sorulur; doğrulanana kadar hesap kullanılabilir
  ama **hiçbir kozmetik/skin değişikliği yapılamaz** (sahibinin son hâli korunur).
- Discord doğrulaması: ilk kez o isimle giriş yapıldığında kozmetik ekranı açılınca istenir.
- 1 Discord hesabı → en çok **3 çatlak hesap** (sahip istisna tanımlayabilir);
  orijinal (Microsoft) hesaplara sınırsız bağlantı.
- "Yol Silindiri" rolü varsa kendi pelerin/elitrasını çizme yetkisi; rol yoksa yalnızca
  varsayılan YIKIMLient pelerin/elitrasını açıp kapatma.
- Orijinal hesap: bir kez Microsoft girişi + şifre oluşturma; olmayan hesaba çatlak giriş yok.
- Her hesabın kozmetiği/skini ayrı; farklı cihazda aynı hesap açıldığında otomatik taşınır.
- Şifremi unuttum: Discord doğrulaması → bot tek seferlik kod (BÜYÜK HARF + rakam) →
  launcher'da girilince yeni şifre; 5 hatalı denemede o cihazda o hesap 24 saat kilitlenir.
- Giriş olayları IP + hesap adıyla loglanır; IP **yalnızca yeni bir yerden ilk açılışta**
  kaydedilir ve **1 hafta sonra gerçekten silinir**.
- Doğrulama/bot kapalıyken kullanılabilecek açıklar engellenir (bkz. §8).
- Sahip paneli: hesapları görme, doğrulama iptali, çatlak limitini artırma, duyuru yayınlama.
- Bot, "yol silindiri" rolündeki kullanıcılara özel mesaj atar (tam yayında, şimdilik
  yalnızca sahip ID'si: 1137682456783376467).
- Haber yayınlama GitHub elle akışından çıkarılıp panele alınır; imzalı besleme korunur.

**Hedef olmayanlar**
- Çatlak hesaba Mojang skin yazma (teknik olarak imkânsız; skin yalnızca istemci tarafı).
- Lisanssız hesap için Mojang profili/API kullanımı.
- Ücretli katman, sunucu kiralama, özel alan adı şartı.

**Anti-hedefler** (teknik olarak çalışsa bile başarısızlık sayılır)
- Şifrenin veritabanı sızdığında kırılabileceği durum.
- Bot kapalıyken giriş/kozmetik değişikliği yapılabmesi.
- IP kaydının 1 hafta sonra diskte kalması.
- Kozmetiklerin tüm hesaplara ortak görünmesi.

## 3. Kısıtlar ve seçimler

- **Depolama (ücretsiz, pratikte sınırsız):** Turso (libSQL) free — 5 GB, ayda 500M okuma /
  10M yazma, 100 veritabanı. Ölçek büyürse Turso Developer 4,99 $/ay. Bu ölçekte
  "pratikte sınırsız"dır; gerçek "sınırsız" ücretsiz servis yoktur (açıkça not).
- **Kozmetik blob'ları:** GitHub Releases'te tutulur (mevcut sıcak kanalımızın gücü:
  bedava, kotasız pratikte, sha256 doğrulamalı). Turso'da yalnızca indeks satırı.
  Böylece veritabanı küçük kalir, büyük dosyalar para/limit korkusu olmadan büyür.
- **Bot:** sahip bilgisayarı Discord botunu çalıştırır; doğrulama ve yönetim API'si aynı
  süreçte (Express, HTTPS + ortak sır ile HMAC imzalı istekler).
- **Yerel tarafta yeni bağımlılık istenir:** Argon2id (Rust) — tedarikçi mevcutsa eklenir,
  yoksa PBKDF2-HMAC-SHA256 (mevcut kutu + std) ile başlanır ve sonra Argon2'e geçilir.
  HMAC-SHA256 ve sha256 zaten bağımlılık listemizde var.
- Zorunlu güncelleme: updater manifestine `minVersion` eklenir; alt sürüm çalışmaz.

## 4. Mimari (4 parça)

1. **Launcher (Tauri/Rust)** — hesaplar, şifre doğrulama (çevrimdışı yetki belgesi ile),
   kozmetik/skin eşitleme, Discord bağlama akışı, güvenlik logu, zorunlu onboarding.
2. **Discord bot + API (Node/discord.js)** — `/bagla`, `/sifirla` komutları; DM kodları;
   doğrulama/rol sorgusu; hesap kaydı; sahip yönetim API'sı; duyuru imzalama; IP cleanup işi.
3. **Turso veritabanı** — hesaplar, bağlantılar, cihazlar/oturumlar, olay kaydı (IP dahil),
   kozmetik indeksi, haber imzası anahtarı (şifreli).
4. **GitHub Releases** — kozmetik/skin görsel verisi (pelerin/elitra/skin) + imzalı haber akışı.

## 5. Veri modeli (Turso)

> **v2 düzeltmesi:** hesap anahtarı kararlı kimliktir (`ms:<uuid>` / `offline:<uuid>`),
> görünen ad ayrı alandadır. Çatlak "Notch" ile lisanslı Notch farklı UUID'lerdir → çakışma yok.

```
hesap        (anahtar TEXT PK, ad TEXT, ad_kucuk TEXT, tur TEXT,  -- "cracked" | "microsoft"
              uuid TEXT, argon_tuz BLOB, argon_veri BLOB, sifre_var INTEGER,
              olusturma INTEGER, son_giris INTEGER, crack_limiti INTEGER DEFAULT 3,
              sahip_istisna INTEGER DEFAULT 0, kosmetik_kilitli INTEGER DEFAULT 0)
baglanti     (hesap_anahtar TEXT PK, hesap_turu TEXT, discord_id TEXT, discord_ad TEXT,
              rol_yol INTEGER DEFAULT 0, durum TEXT,            -- "aktif" | "ayrildi"
              tarih INTEGER)                                    -- ayrılanlar da SAYILIR (sınır aşılmasın)
baglanti_gecmisi (discord_id TEXT, hesap_anahtar TEXT, tarih INTEGER)  -- limit sayaci kaynagi
cihaz        (cihaz_id TEXT PK, hesap_anahtar TEXT, pub_key TEXT, ilk_gorulen INTEGER,
              son_gorulen INTEGER, yetki_bitis INTEGER, iptal INTEGER DEFAULT 0)
ip_kaydi     (id INTEGER PK, cihaz_id TEXT, ip TEXT, silme_zamani INTEGER)  -- 1 hafta, gerçek silinir
olay         (id INTEGER PK, tur TEXT, hesap_anahtar TEXT, cihaz_id TEXT, detay TEXT,
              tarih INTEGER)
kozmetik     (hesap_anahtar TEXT PK, surum TEXT, pelerin_url TEXT, pelerin_sha TEXT,
              elytra_url TEXT, elytra_sha TEXT, skin_url TEXT, skin_sha TEXT,
              saklanan TEXT, tarih INTEGER)
haber        (id INTEGER PK, baslik TEXT, govde TEXT, imza TEXT, yayin INTEGER, tarih INTEGER)
```

## 6. Güvenlik modeli

> **v2 düzeltmesi (denetçi bulguları sonrası):** "Ortak sır + launcher'da doğrulama" modeli
> açık kaynak launcher ile çöker. Aşağıdaki model kullanılır.

**Kimlik doğrulama (asenkron, taklit edilemez):**
- Launcher ilk açılışta kendi **Ed25519 anahtar çiftini** üretir (özel anahtar yalnızca
  cihazda). Sunucu genel anahtarını kaydeder (Discord bağlama kodunun kabulüyle birlikte).
- Her API isteği imzalıdır: `{ts, nonce, imza}`; sunucu nonce önbelleği ile tekrar oynatmayı,
  ±5 dk saat penceresi ile yaşlı isteği reddeder.
- Sunucu **yanıtlarını kendi Ed25519 özel anahtarıyla** imzar; launcher'da gömülü genel
  anahtar (döndürülebilir: iki anahtar dönemi) ile doğrulanır → sahte sunucu/MITM durdu.
- TLS (HTTPS) her zaman; isteğe bağlı sertifika sabitleme sonraki adım.

**Parola:**
- Sunucu `doğrulayıcı = Argon2id(tuz, pepper‖parola)` saklar (pepper yalnız bot sürecinde,
  asla launcher'da ve veritabanında değil). Launcher parolayı TLS üzerinden gönderir;
  türetme sunucuda yapılır (launcher'da pepper tutma hatası böylece kalkar).
- **Çevrimdışı giriş** (bot kapalı): launcher'da yerel `Argon2id(yerel_tuz, parola)` hash'i
  + sunucunun **Ed25519 ile imzaladığı süreli çevrimdışı belgesi** durur. İkisi birden
  tutmalıdır: parola bilinmeden belge kullanılamaz; belge sunucu imzası olmadan üretilemez
  (launcher'daki sır yalnız DOĞRULAMA içindir, İMZALAMA değil).
- Önceki sürümdeki "HMAC(ortak_sır, ...)" belgesi bulgada: launcher aynı sırla imza
  üretebilirdi. Bu nedenle yetki belgesi **asenkron imza** ile değiştirilmiştir.

**Kozmetik/rol zorlaması (istemci tarafına aldanmama):**
- "Yol Silindiri" rolü yalnızca **sunucu tarafında** yetki verir: rolü olanların kozmetikleri
  yayınlanır ve oyuncular bunu başka istemcilerden görür. İstemcide dosya elle değiştirilebilir
  (bu teknik olarağ kaçınılmaz) ama bu yalnızca o kullanıcının kendi ekranını etkiler;
  paylaşım/presence yolu artık cihaz anahtarı ile imzalıdır (presence yükleme kapısı).
- Önceki sürümde `izin_listesi_yaz` gibi açık uçların tamamı aynı imza kapısına alınır.
- Discord'taki rol canlı olarak sorgulanır; `croxydb` yalnızça hız sınırı önbelleği olarak kalır.

**IP kaydı ve "gerçekten silme":**
- `ip_kaydi` ayrı tabloda `silme_zamani` alanıyla tutulur (denetim izini bozmamak için ayrı kolon).
- Silme üç yerde: (a) API her açılışta süresi geçen satırları temizler, (b) panelde "Şimdi sil",
  (c) okumada süzme. Bot 1 haftadan uzun kapalıysa yeni kayıt da yazılamaz (başarısız giriş
  reddedilir); açılış temizliği birikmiş olanları siler.

## 7. Akışlar

**Onboarding (ilk açılış):** updater min-version sağlar → hesap listesi sırayla
şifre sorulur → doğrulanana kadar kozmetik/skin paneli kilitli, hesap kullanılabilir.

**Discord bağlama:** kozmetik paneli → "Discord'u bağla" → launcher 8 haneli kod üretir →
kullanıcı `/bagla <kod>` yazar → bot `baglanti` kaydı açar + DM ile doğrulama bilgisi →
launcher kodla durumu sorar → bağarılıysa panel açılır, rol okunur.

**Şifre sıfırlama:** `/sifirla` → bot DM ile kod → launcher'da gir → yeni şifre (Argon2id).

**Kozmetik eşitleme:** hesap açılışında `kozmetik` satırı okunur (yetki belgesi geçerliyse),
dosyalar GitHub'dan indirilip `.yikim/kosmetik/<hesap>/` altına yazılır; mevcut global
dosyalar ilk açılışta o hesaba taşınır (geriye dönük uyumluluk).

## 8. Bot/API kapalıyken (koruma)

- Yeni bağlama, yeni şifre oluşturma, kozmetik KAYDETME → kapalı (fail-closed).
- Oyun açma, mevcut kozmetikleri kullanma, geçerli yetki belgesiyle giriş → açık (fail-open).
- Yetki belgesi süresi geçmişse ve API'ye ulaşılamıyorsa: hesap kullanılır, kozmetik değişikliği yapılamaz.

## 9. Gating tablosu

| Durum | Hesabı kullan | Varsayılan pelerin/elitra aç-kapa | Kendi pelerin/elitra çiz | Skin değiştir |
|---|---|---|---|---|
| doğrulanmadı (şifre yok) | evet | hayır | hayır | hayır |
| doğrulandı (rol yok) | evet | evet | hayır (kayıtlı varsa seçebilir) | **AÇIK SORU** |
| doğrulandı + "Yol Silindiri" | evet | evet | evet | **AÇIK SORU** |
| orijinal (Microsoft) + şifre oluşturuldu | evet | evet | eğer bağlı hesapta rol varsa | **AÇIK SORU** |

## 10. Sahip paneli (bot içinde web)

- Discord OAuth2 ile giriş, yalnızca `1137682456783376467` (sabit).
- Hesap listesi: ad, tür, doğrulama, bağlı Discord adı+ID, rol, çatlak limiti, son giriş,
  aktif cihazlar, son olaylar (IP dahil, 1 hafta).
- Eylemler: doğrulama iptal, çatlak limitini değiştir, kozmetiği kilitle, cihazı iptal et,
  "Yol Silindiri" rolüne (şimdilik yalnızca sahibine) mesaj yolla.
- Haber yayınlama: panele yazılan haber **bot tarafında** ed25519 ile imzalanır (özel anahtar
  env'de, depoya girmez) → imzalı besleme yayınlanır. GitHub elle akışı kapanır.

## 11. Zorunlu güncelleme (min-version)

- **Bu sürüm ilk zorunlu olanıdır:** eski sürümler `minVersion` alanını görmediğinden
  "ilk açılışta zorunlu" yalnızca yeni exe ile mümkün. Eski sürümler yerel olarak
  çalışmaya devam eder, yeni sunucu özelliklerini kullanamaz.
- Launcher açılışta `latest.json`'ı (veya sıcak kanal `sicak.json`'a eklenen `minSurum`)
  okur; altındaysa **oyunu engeller**, güncelleme ister. GitHub erişilemezse **izin verir**
  (çevrimdışı kullanıcı kilitlenmez) — bu davranış belgede açıkça böyledir.
- Sıcak kanal exe dağıtamaz; "zorunlu güncelleme" yalnızca exe/updater üzerinden gelir.

Mevcut davranış korunur (tag/rol otomasyonu, hoşgeldin/veda mesajı). Üzerine:
- `/bagla <kod>`, `/sifirla` komutları + DM kod gönderimi.
- Express API: `POST /bagla/dogrula`, `GET /bagla/durum`, `POST /hesap/kayit`,
  `POST /giris/dogrula`, `POST /giris/yenile`, `GET /kozmetik/<hesap>`,
  `POST /olay/kaydet`, sahip eylemleri `/yonetim/*`, haber `/haber/*`.
- `croxydb` korunur (rol kaydı `base.<memberId>` "Yol Silindiri" rolü ile aynı anlama gelir).

## 12. Launcher değişiklikleri

- Zorunlu güncelleme (min-version) + sıralı şifre onboarding ekranı.
- Argon2id parola türetme; yetki belgesi doğrulama; API istemcisi (HMAC imzalı).
- Kozmetik/skin verisi hesap bazlı `.yikim/kosmetik/<hesap>/` altına + sunucu eşitleme.
- Oyun içi mod: kozmetik/rozet okuma yolu hesap bazlına çevrilir (rozet zaten ana kopyadan
  doğrulanıyor — korunur).
- Güvenlik logu: yeni yer/cihaz + IP kaydı (1 hafta, sunucu tarafında silme).

## 13. Geriye dönük uyumluluk

- Eski launcher ile kozmetikler (presence) çalışmaya devam eder.
- Mevcut global kozmetik dosyaları, açılışta aktif hesaba taşınır.
- Sıcak UI kanalı aynen çalışır; bu güncelleme exe seviyesinde olduğu için sıcak kanaldan dağıtılabilir.

## 14. Test planı (yalnızca sahip makinesi)

1. Bot'u yerelde çalıştır, API'yi localhost üzerinden doğrula (HMAC imza, hız sınırı).
2. Launcher'da 2 hesap aç: 1 orijinal (Microsoft gerçek), 1 çatlak.
3. Sırayla şifre onboarding'i, çatlak limiti=3, rol açık/kapalı durumlarını dene.
4. Şifre sıfırlama: 5 hatalı kod → 24 saat kilit; doğru kod → yeni şifre.
5. API kapalıyken: oyun açılıyor mu, kozmetik kaydetme kapalı mı, yetki belgesi çalışıyor mu?
6. IP kaydı: ilk açılışta yazılıyor mu, 7 gün sonra siliniyor mu (zamanı ilerleterek).
7. Panel: doğrulama iptal, limit değiştirme, duyuru imzalama.
8. Herkese açılmadan ÖNCE: bot'un yalnızca sahip ID'sine mesaj attığını doğrula.

## 21. Güvenlik mimarisi — nihai kararlar (v4)

**1) İstemci (launcher) hiçbir ortak sır tutmaz.**
Açık kaynak olması bir dezavantaj değil, çünkü güvenlik kodu saklamaya değil sunucu
yetkisine dayanır. İstemci ilk açılışta kendi **Ed25519 anahtar çiftini** üretir; özel
anahtar yalnızca o cihazda kalır. Sunucuya kaydı (enrollment) Discord bağlama kodunun
kabulü olur: kod, o kişinin o an o launcher'ı çalıştırdığını ve Discord'u yönettiğini
kanıtlar. Böylece "herkese açık depoda sır var" sorunu tamamen kalkar.

**2) Yetki sunucudadır (server-authoritative).**
Kozmetik yayınlama, sıfırlama, rol, limit — hepsi sunucu sınırında. Sunucu yanıtlarını
kendi Ed25519 anahtarıyla imzalar; launcher gömülü genel anahtarla doğrular. İmzasız/
sahte sunucu yanıtı reddedilir.

**3) Parola.**
Sunucuda `Argon2id(tuz, pepper‖parola)`; pepper yalnızca Worker env'de (depoda, istemcide
ve veritabanında yok). İstemci parolayı yalnız TLS üzerinden gönderir; türetme sunucuda.
5 hatalı deneme → o hesap+cihaz 24 saat (sunucu sayar; yerel sayaç yalnızca arayüz
bilgisidir, güvenlik sınırı sayılmaz).

**4) Çevrimdışı oynama (fail-open play, fail-closed change).**
Sunucu, her başarılı çevrimiçi girişte 7 günlük **çevrimdışı izin belgesi** (Ed25519 imzalı)
verir; ayrıca istemcide yerel `Argon2id` parola hash'i tutulur. Belge + parola bilgisi
varsa bot kapalıyken de giriş ve oyun çalışır; kozmetik/sunucu verisi **değiştirilemez**.
Dosya çalınsa bile parola (Argon2id) ve sunucu imzası gerektiği için hesap ele geçirilemez.

**5) Kozmetik aktarımı doğrulanmış.**
Diğer oyuncuların gördüğü kozmetik **sunucudan imzalı indeks + sha256** ile gelir; yayınlama
(cihaz imzası + rol kontrolü) sunucu kapısından geçer. Değiştirilmiş bir istemci başkasının
ekranına sahte kozmetik sokamaz — çünkü içerik kaynağı sunucudur.

**6) İptal.** Cihaz anahtarı, bağlantı veya kozmetik indeks satırı iptal edilebilir; hepsi
anında sunucu tarafında etkili.

**7) Yerel-only mod (belgelenen geri dönüş).**
İnternet yoksa: hesap açılabilir, yerel kozmetik/skin korunur, Discord bağlantısı/rol/
şifre oluşturma kapalıdır (bot kapalı uyarısı). Eşitleme sonraki çevrimiçi açılışta kendiliğinden.

**8) Sunucun engelleyemediği tek şey (dürüstlük notu):**
Kullanıcı kendi launcher'ını değiştirip kendi ekranında istediğini çizebilir. Bu yalnızca
kendi ekranını etkiler; diğer oyuncular sunucudan doğrulanmış içeriği gördüğinden topluluk
görünümü korunur. Bu nedenle "güvenlik" = sunucu tarafı yetki + doğrulanmış içerik.

## 22. Açık kaynak politikası (v4)

- Launcher ve bot **açık kaynak kalır**: istemcide saklanacak bir sır yoktur, bu yüzden
  açık kaynak olmak güvenliği düşürmez.
- **Yayınlanmayacak tek şer çalışma anındaki sırlardır** (depoya hiç girmeyen env değerleri):
  Argon2 pepper, sunucu imzalama anahtarı, haber ed25519 anahtarı, bot token'i.
  Kod açık, anahtarlar kapalı — klasik ve doğru model.

## 23. Kullanıcı ekranları — en anlaşılır akış (v4)

Tüm metinler Türkçe, tek ekranda tek iş, her adımda neden sorulduğu bir cümleyle yazılır.

**Ekran 1 — "Hesaplarını güvene al" (ilk açılış, sırayla her hesap):**
- Başlık + alt satır: "Bu launcher artık hesapları koruyor. Kozmetiklerinin ve rozetinin
  başka cihazlarda da görünmesi için her hesabı bir kez doğrulaman yeterli."
- Her hesap için sırayla: Microsoft hesapta "Microsoft ile doğrula"; çatlak hesapta
  "Discord'u bağla" (8 haneli kod gösterilir + `/bagla <kod>` yazması söylenir).
- Sonra "Şifre oluştur" (iki alan, göz ikonu, "en az 8 karakter").
- "Şimdi değil" bağlantısı: "Hesabını kullanmaya devam edebilirsin. Kozmetik ve skin
  değişikliği bu hesapta kapalı kalır; daha sonra Ayarlar > Güvenlik'ten bağlayabilirsin."

**Ekran 2 — Kozmetik sayfası (doğrulanmamış hesap):**
- Kilit simgesi + "Bu hesapta kozmetik değiştiremezsin."
- "Hesabını doğrula" butonu → 1 adımlık akış (Discord bağla → şifre oluştur).

**Ekran 3 — Bot kapalı uyarısı (açık bir rozet/biçiminde):**
- "Discord bağlantısı şu an kapalı (bot çevrimdışı). Oyun ve mevcut kozmetiklerin çalışmaya
  devam eder; bağlantı ve şifre işlemleri bot açılınca yapılabilir."

**Ekran 4 — Giriş ekranı (doğrulanmamış hesap açıldığında):**
- Hesap adının yanında: Y logosu, onun solunda küçük ✕ ve "doğrulanmadı" ipucu.

**Ekran 5 — Şifremi unuttum:** "Discord ile doğrula" → bot DM'den gelen 8 karakterlik
kodu gir → yeni şifre belirle. 5 hatalı denemede ekran kilitlenir ve "24 saat sonra
tekrar dene" yazar.

> v3: sorular sahip tarafından cevaplandı; kararlar §18-20'ye taşındı.
> Yapıcının yerel kararları §17'de.

## 18. Bot bilgisayara erişim yok — outbound bulut modeli (v3)

Kullanıcı botunu çalıştırdığı bilgisayarı internete açamayacak. Eski "botta Express API
sun, launcher oraya bağlanır" fikri kaldırıldı.

- **Worker (Cloudflare) tek API kapısı.** Launcher ve bot ikisi de *outbound* istek atar.
  Bot bilgisayarında dinleyen port yok: yalnızca Discord WebSocket (çıkış) + Worker'a
  HTTPS çıkış istekleri.
- **Bot durumu:** bot 60 saniyede bir kalp atışı atar; launcher 3 dakikadan eski damgayı
  "bot kapalı" sayar ve Discord bağlantısı / şifre oluşturma / şifre sıfırlamayı kapatır.
  Kullanıcı önerisi (/ping komutu) yedek doğrulama yöntemi olarak bırakılır.
- **Akışlar (hepsi outbound):**
  - bağlantı: launcher kod üretir → `POST /api/baglama/kod` (cihaz imzalı) → kullanıcı
    `/bagla <kod>` yazar → bot `POST /api/baglama/dogrula` → launcher
    `GET /api/baglama/durum` ile öğrenir.
  - şifre sıfırlama: `/sifirla` → bot DM'e kod atar → launcher `POST /api/sifirla/dogrula`.
  - rol: bot rolü sorgular → `POST /api/rol/yaz` → launcher okuyup panel kilidini açar.
- **Blob:** kozmetik/pelerin/skin GitHub Releases; launcher buluttaki imzalı indeksten URL alır.

## 19. Kozmetik mahremiyeti + doğrulanmamış işareti (v3)

- **Doğrulanmamış (şifresiz girilmiş) hesapta sunucu kozmetikleri KAPALI:** hesabın kendi
  özel pelerin/elitrası görünmez; görünüm boş temel hâle döner (Mojang profili varsa
  orijinal skin/pelerin, yoksa varsayılan). Hesap kullanılabilir; kozmetik menüsü kapalı.
- **Skin serbest (client-side):** herkes kendi ekranında kendi skinini seçebilir.
- **İşaret:** hesap adının başında Y logosundan önce bir çarpı (X) işareti; anlamı
  "gerçekten bu kişi değil". Launcher'da (hesap kartı/menü) ve oyun içinde (isim
  etiketi/rozet) görünür; veri kaynağı buluttan gelen `dogrulandi: false`.
  Orijinal hesaplarda Mojang'ın kendi pelerinleri serbest.
- **İptal:** sahip iptal işaretlediğinde launcher yerel kozmetik dosyasını da temizler.

## 20. Göç (mevcut kullanıcı verisi)

- `app_dir` altındaki tüm kozmetik dosyaları tek kez hesap bazlına dağıtılır; asılları
  `yedek/` altına alınır.
- Yeni depo: `.yikim/kosmetik/<anahtar>/`; oyun açılışında seçili hesabın dosyaları
  instance'ın `.yikim/pelerin.png` alanına yazılır (mod tarafı değişmez).

1. **Skin çizme yetkisi:** "Yol Silindiri" rolü olan kullanıcı skin çizebilsin mi
   (pelerin gibi), rolü olmayan sadece kayıtlı skinleri seçebilsin mi? Çatlak oyuncu
   skin değiştiremesin mi yoksa yalnızca istemci tarafında mı denensin?
2. **Çatlak limiti varsayılanı 3** — orijinal hesap için sınır yok mu (evet varsayıyorum)?
3. Bot bilgisayarı internetten erişilebilir mi (sabit IP / port yönlendirme) yoksa
   ücretsiz tünel (Cloudflare Tunnel) mi kuralım?

## 16. Yapıcıya bırakılanlar (küçük kararlar)

- Parola KDF başlangıç değerleri (bellek/işlem maliyeti) ve süre uzunlukları.
- API'de hız sınırı değerleri, nonce önbelleği boyutu.
- Kod biçimi ve DM metinleri.
- Turso şema indeksleri ve sorgu planı.

## 17. v2 düzeltmeleri özeti (denetçi bulguları)

| Bulgu | Cozum |
|---|---|
| Açık kaynak + ortak sır → API'de kimlik doğrulaması yok | Cihaz başına Ed25519 anahtar çifti; sunucu genel anahtarı kaydeder; istekler özel anahtarla imzalanır; sunucu yanıtları da imzalı |
| Yetki belgesi yerelde doğrulanınca sır launcher'da olur → sahte belge | Belge artık **sunucu imzalı** (Ed25519). Launcher yalnız doğrular, üretemez |
| Pepper çelişkisi (türetme launcher'da ama pepper env'de) | Türetme sunucuda; launcher parolayı TLS ile gönderir. Çevrimdışı giriş için yerel hash + sunucu imzalı süreli belge |
| Rol zorlaması istemci tarafında imkânsız / presence açık uç | Yetki yalnızca sunucu tarafında; presence ve tüm yazma uçları cihaz anahtarı imzası ister |
| GitHub rastgele ad = mahremiyet yok | Kozmetik mahremiyet gerektirmez; imzalı indeks + indeks satırı silinince erişim durur |
| IP "gerçekten silme" tanımsız, bot kapalıysa aşılır | Ayrı ip_kaydi tablosu, silme_zamani, açılış temizliği + okumada süzme + panelde anında sil |
| Hesap PK = ad (Microsoft ad değişebilir, çatlak çakışır) | PK kararlı kimlik (ms:<uuid>/offline:<uuid>); ad sadece görünen |
| Çatlak sınırı bağlantıyı koparınca atlanır | aglanti_gecmisi sayar; ayrılmış bağlantılar da limite düşer |
| min-version eski launcher'a uygulanamaz | Bu sürüm ilk zorunlu kapı; eski sürüm yerelde çalışmaya devam eder |
| İlk şifre akışı yok / kullanıcı yolda kalıyor | Onboarding: hesap başına sırayla "şifre oluştur" + "şimdi değil" (şimdi değil = kozmetik kilitli, hesap kullanılabilir) |
| Bot tek hata noktası / panel kimliği belirsiz | Panel Discord OAuth (yalnızca sahip ID) + oturum şifresi; bot düşerse oyun ve kozmetik KULLANIMI sürer, DEĞİŞİKLİK durur |
| Yerel kilitler yazılımla kırılabilir | Kabul: yerel kilitler SÜREÇ kontrolüdür, güvenlik sınırı değil; gerçek zorla sunucu tarafında |
| Argon2 bağımlılığı yok | Yeni kutu eklenir (Argon2id); yoksa PBKDF2-HMAC-SHA256 elle başlar, sonra Argon2'e geçilir |
| Cihaz kimliği üretimi, tuz döndürme, olay detay/ip ayrımı, haber anahtarı rotasyonu | Cihaz ID = ilk açılışta rastgele UUID (yeniden kurulumda yenilenir); tuz döndürme sunucuda rehash ile; olay.detay ile ip_kaydi ayrı; haber imzasında iki genel anahtar dönemi |
| Rozet global kalıyor ama "kozmetik hesap bazlı" hedefi yazılı | Rozet kasten global (sahip logusu); kozmetik/skin hesap bazlı. Rozet yayınlama da cihaz imzası ister |
| pp_dir/kozmetik/ zaten katalog için kullanılıyor | Yeni yol: .yikim/kosmetik/<hesap-anahtari>/ (tasarım §7'de adı geçen kozmetik/ yolu bu yüzle değişti) |
