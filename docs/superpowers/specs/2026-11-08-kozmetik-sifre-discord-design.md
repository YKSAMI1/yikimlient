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

```
hesap        (ad TEXT PK, tur TEXT, uuid TEXT, argon_bayt BLOB, tuz BLOB,
              sifre_var INTEGER, olusturma INTEGER, son_giris INTEGER,
              crack_limiti INTEGER DEFAULT 3, kosmetik_kilitli INTEGER DEFAULT 0)
baglanti     (hesap_ad TEXT PK, discord_id TEXT, discord_ad TEXT,
              rol_yol INTEGER DEFAULT 0, dogrulama INTEGER DEFAULT 0, tarih INTEGER)
cihaz        (cihaz_id TEXT PK, hesap_ad TEXT, ilk_gorulen INTEGER, son_gorulen INTEGER,
              yetki_bitis INTEGER, iptal INTEGER DEFAULT 0)
olay         (id INTEGER PK, tur TEXT, hesap_ad TEXT, cihaz_id TEXT,
              ip TEXT, detay TEXT, tarih INTEGER)     -- IP 1 hafta silinir
kozmetik     (hesap_ad TEXT PK, surum TEXT, pelerin_url TEXT, pelerin_sha TEXT,
              elytra_url TEXT, elytra_sha TEXT, skin_url TEXT, skin_sha TEXT,
              saklanan TEXT, tarih INTEGER)
haber        (id INTEGER PK, baslik TEXT, govde TEXT, imza TEXT, yayin INTEGER, tarih INTEGER)
```

## 6. Güvenlik modeli

- **Şifre:** plaintext hiçbir yerde tutulmaz. `doğrulayıcı = Argon2id(tuz, pepper‖şifre)`,
  pepper yalnızca bot sürecinde (env) — veritabanı sızdırılsa bile kırma maliyeti yüksek.
  Launcher parolayı Argon2id ile türetip doğrulayıcıyı gönderir; sunucu sabit zamanda karşılaştırır.
- **Yetki belgesi (cihaz→hesap):** HMAC-SHA256(server_sır, "hesap|cihaz|bitiş"). Launcher
  yerelde doğrular → API kapalıyken de giriş çalışır. Süre 7 gün; süresi geçen ve API'ye
  ulaşılamayan hesapta **kozmetik değişikliği kapalı**, oyun açılabilir (bkz. §8).
- **İstek imzası:** her API çağrısı `ts + nonce + HMAC(secret, method|yol|gövde|ts|nonce)`
  ile imzalı; nonce önbelleği ile tekrar koruması; IP başına hız sınırı.
- **Bağlama kodları:** 8 karakter (BÜYÜK HARF + rakam), tek kullanım, 10 dk, hesap+cihaz bağlı.
  5 hatalı girişte o cihazda o hesap 24 saat kilitlenir (sunucu tarafında sayılır).
- **IP:** yeni yerden (yeni cihaz/şehir) ilk başarılı açılışta bir kez yazılır; temizleme işi
  1 haftadan eski `olay.ip` satırlarını gerçekten siler (iş kaydı loglanır).
- **Blob şifreleme:** kozmetik dosyaları GitHub'da açık değil, sürüm adı rastgele+
  imzalı indeksle erişilir; kozmetik "mahremiyet gerektiren" bir şey değildir ama
  yine de indeks IMZALIDır (haber akışı gibi) — erkenden tanımlanmayan bir yerden
  dosya enjekte edilemez.

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

## 11. Bot değişiklikleri (zip olarak teslim)

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

## 15. Açık sorular (sahibin kararı)

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
