# Kozmetik + Şifre + Discord Doğrulama Sistemi — Uygulama Planı

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development
> (recommended) or superpowers:executing-plans to implement this plan task-by-task.
> Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** YIKIMLient'e hesap şifresi + Discord doğrulama + hesap bazlı kozmetik sistemi
eklemek; çatlak oyunculara eşit kozmetik deneyimi sunmak; botu yeni komutlarla
genişletmek; her şey sahip makinesinde *yerelde* test edilebilir olsun.

**Architecture:** Üç parça: (1) Cloudflare Worker biçiminde yazılan API ancak *yerelde
Node* sunucu olarak da çalışır (depo: `guvenlik-api/`); (2) Discord bot mevcut davranışı
korur + `/bagla`, `/sifirla`, kalp atışı, API poll (depo: `yikim-tagbot/`); (3) launcher
(Rust) `src-tauri/src/guvenlik.rs` modülü + arayüz ekranları. Test boyunca API adresi
`http://127.0.0.1:8788` (yerel), yayında Cloudflare Worker'a taşınır.

**Tech Stack:** Rust (tauri, ed25519-dalek, argon2, sha2 — eklenecek), Node 18+ (Express,
node:sqlite veya better-sqlite3 yoksa `node:sqlite` gömülü), TypeScript, mevcut UI altyapısı.

**Spec:** `docs/superpowers/specs/2026-11-08-kozmetik-sifre-discord-design.md`
(özellikle §3, §4, §5, §6-v2, §9, §18-20, §21-23).

## Global Constraints

- Bot bilgisayara dışarıdan erişim YOK: bot ve launcher her ikisi de API'ye *outbound*
  istek atar. Bot makinesinde dinleyen port açılmaz.
- İstemcide (launcher) paylaşılan sır tutulmaz: cihaz Ed25519 anahtarını kendisi üretir.
  Kaba kuvvet/kopyalama koruması sunucu tarafındadır.
- Parola sunucuda Argon2id(tuz, pepper‖parola) ile türetilir; pepper yalnızca API
  sürecinde (env). Launcher parolayı TLS ile gönderir (yerelde http kabul edilir).
- Hesap anahtarı kararlı kimliktir (`ms:<uuid>` / `offline:<uuid>`); ad yalnızca görünen.
- IP kaydı ayrı tabloda `silme_zamani` ile tutulur; 7 gün sonra AÇILIŞTA ve okumada silinir.
- Çatlak hesap sınırı 3 (sahip istisna tanımlayabilir); ayrılmış bağlantılar da limite düşer.
- Yayın yok: yalnızca sahip makinesinde test; sürüm yayınları bu planın kapsamı dışında.

## Review Focus

1. **API kapalıyken launcher kilitlenmemeli** (oyun + yerel kozmetik çalışmalı): test
   `guvenlik::api_kapali_kullanim` — sağlanan durumda oyun açılabilir, kozmetik kaydetme kapalı.
2. **Şifresiz (doğrulanmamış) hesapta kozmetik menüsü kilitli**: test `hesap::kozmetik_izinli`
   doğrulanmamış → false; doğrulandı → true.
3. **Sahte/bozuk API yanıtı reddedilmeli**: test `guvenlik::imza_gecersiz` — imzasız ya da
   yanlış imzalı yanıt kabul edilmez.
4. **Aynı cihaz anahtarı olmadan istek reddedilmeli**: test `guvenlik::cihaz_imzasi_zorunlu`.
5. **IP 7 gün sonra gerçekten silinmeli**: test `guvenlik::ip_temizlik` — süresi geçen satır
   okunurken ve açılışta silinir.

---

### Görev 1: Güvenlik modülü iskeleti (cihaz anahtarı + depolama)

**Files:**
- Create: `src-tauri/src/guvenlik.rs`
- Modify: `src-tauri/src/lib.rs:25` (modül kaydı)
- Test: `src-tauri/src/guvenlik.rs` içinde `#[cfg(test)]`

**Interfaces:**
- Consumes: `crate::core::{app_dir, yikim_log}` (mevcut)
- Produces:
  - `pub struct CihazKimlik { pub cihaz_id: String, pub pub_key_hex: String }`
  - `pub fn cihaz_kimligi_al(olustur: bool) -> Option<CihazKimlik>` — app_dir/guvenlik/cihaz.json
  - `pub fn imzola(mesaj: &[u8]) -> Option<String>` — base64 imza
  - `pub fn guvenlik_dir() -> PathBuf`

- [ ] **Adım 1: Testi yaz** — yeni geçici app_dir'de `cihaz_kimligi_al(true)` → `Some`, aynı
  kimlik ikinci çağrıda korunur; `imzola(b"merhaba")` base64 ve 88 karakter; farklı mesinada
  doğrulama `imza_dogrula` ile geçer.
- [ ] **Adım 2: Testi çalıştır, başarısız olduğunu gör** — `cargo test --lib guvenlik::`
- [ ] **Adım 3: Uygula** — ed25519-dalek ile anahtar çifti; JSON `{cihaz_id, gizli_b64, pub_b64}`,
  dosya izni 0600; `imza_dogrula(pub_hex, mesaj, imza_b64)`.
- [ ] **Adım 4: Testleri çalıştır, geçtiğini gör**
- [ ] **Adım 5: Commit** — `feat(guvenlik): cihaz kimligi (ed25519) + imza yardimcilari`

### Görev 2: API istemcisi (istemci imzalı istek + sunucu imzası doğrulama)

**Files:**
- Create: `src-tauri/src/guvenlik_api.rs`
- Modify: `src-tauri/Cargo.toml` (ed25519-dalek, argon2, tokio feat'leri mevcut)
- Test: `src-tauri/src/guvenlik_api.rs` içinde birim testleri

**Interfaces:**
- Consumes: `guvenlik::cihaz_kimligi_al`, `guvenlik::imzola`
- Produces:
  - `pub struct ApiYanit <T> { pub veri: T, pub imza: String }`
  - `pub async fn api_cagir<T: DeserializeOwned>(yol: &str, govde: serde_json::Value) -> Result<T, String>`
    — `{ts, nonce, imza}` başlığı; yanıt `imza` alanı sunucu genel anahtarıyla doğrulanır
  - `pub fn api_adresi() -> String` — `YIKIM_API` env, yoksa `http://127.0.0.1:8788`
  - `pub fn imza_gecersiz_reddi(yanit: &serde_json::Value) -> bool`

- [ ] **Adım 1: Testi yaz** — geçerli imzalı yanıt kabul; imzasız → Err; bozuk base64 imza → Err.
- [ ] **Adım 2: Testi çalıştır, başarısız olduğunu gör**
- [ ] **Adım 3: Uygula** — reqwest (mevcut) + 10 sn zaman aşımı; gövde imzası `cihaz_id|ts|nonce|body`
  hex; yanıt imzası `sha256(body)` üzerinden; reddetme durumları.
- [ ] **Adım 4: Testleri çalıştır, geçtiğini gör**
- [ ] **Adım 5: Commit** — `feat(guvenlik): imzali API istemcisi + sunucu imzasi dogrulama`

### Görev 3: Hesap modeli + kozmetik kilidi (smoke davranışı)

**Files:**
- Create: `src-tauri/src/hesap_yetki.rs`
- Modify: `src-tauri/src/commands.rs` (kozmetik çağrı noktaları — mevcut komutlar)
- Test: `src-tauri/src/hesap_yetki.rs` içinde birim testleri

**Interfaces:**
- Consumes: `crate::instances::Instance` (seçili hesap), `guvenlik::*`
- Produces:
  - `pub struct HesapYetki { pub anahtar: String, pub ad: String, pub tur: String,
    pub dogrulandi: bool, pub rol_yol: bool, pub kozmetik_serbest: bool, pub offline_izin_bitis: i64 }`
  - `pub fn hesap_anahtari(hesap: &Account) -> String` (`ms:<uuid>` / `offline:<uuid>`)
  - `pub async fn yetki_durumu(hesap: &Account) -> HesapYetki` — API yoksa yerel kayıttan
  - `pub fn kozmetik_izinli(y: &HesapYetki) -> bool` — `dogrulandi && !kapali`
  - `pub fn carpi_goster(y: &HesapYetki) -> bool` — `!dogrulandi`

- [ ] **Adım 1: Testi yaz** — `kozmetik_izinli`: doğrulanmadı → false, doğrulandı → true,
  kilitli → false; `carpi_goster`: yalnızca doğrulanmamış → true.
- [ ] **Adım 2: Testi çalıştır, başarısız olduğunu gör**
- [ ] **Adım 3: Uygula** — `app_dir/guvenlik/hesaplar.json` yerel kayıt (son bilinen durum);
  API yoksa son kayıt döner (fail-open play).
- [ ] **Adım 4: Testleri çalıştır, geçtiğini gör**
- [ ] **Adım 5: Commit** — `feat(hesap): hesap yetki modeli + kozmetik kilit kurali`

### Görev 4: Yerel API sunucusu (Node) — şema + kimlik doğrulama

**Files:**
- Create: `guvenlik-api/package.json`, `guvenlik-api/src/server.js`, `guvenlik-api/src/db.js`,
  `guvenlik-api/src/imza.js`, `guvenlik-api/src/guvenlik-kapisi.js`, `guvenlik-api/test/api.test.js`
- Test: `guvenlik-api/test/api.test.js`

**Interfaces:**
- Consumes: §5 şema, §21 kurallar
- Produces:
  - `POST /api/ping` (bot kalp atışı) — gövdesiz
  - `POST /api/baglama/kod` {cihaz_id, pub_key, imza, ts, nonce, hesap_anahtar, hesap_ad, tur}
    → {kod}
  - `GET /api/baglama/durum?cihaz_id=...` → {baglandi, rol_yol, dogrulandi}
  - `POST /api/baglama/dogrula` (bot) {kod, discord_id, discord_ad} → {tamam}
  - `POST /api/giris/dogrula` {hesap_anahtar, hesap_ad, tur, parola_hash} → {yetki_belgesi, bitis}
  - `POST /api/olay/kaydet` {cihaz_id, ip, tur} → {tamam}
  - `GET /api/saglik` → {durum:"ok"}

- [ ] **Adım 1: Testi yaz** — imzasız istek 401; imzalı + yeni cihaz → kayıt + kod;
  aynı cihaz tekrar → aynı anahtar kabul; GET baglama/durum bağlanmamış → false.
- [ ] **Adım 2: Testi çalıştır, başarısız olduğunu gör** — `node --test`
- [ ] **Adım 3: Uygula** — `node:sqlite` ile şema; Ed25519 doğrulama (`tweetnacl` yerine
  `crypto.verify` ile node'un kendi ed25519'u — bağımlılık yok); hız sınırı; ts ±5 dk.
- [ ] **Adım 4: Testleri çalıştır, geçtiğini gör**
- [ ] **Adım 5: Commit** — `feat(api): yerel guvenlik API sunucusu (sema + cihaz imzasi)`

### Görev 5: Bot yeni komutları (/bagla, /sifirla, kalp atışı)

**Files:**
- Create: `yikim-tagbot/komutlar/bagla.js`, `yikim-tagbot/komutlar/sifirla.js`
- Modify: `yikim-tagbot/index.js` (kalp atışı zamanlayıcı + API tabanı), `yikim-tagbot/config.js`
- Test: `yikim-tagbot/test/bot.test.js`

**Interfaces:**
- Consumes: `guvenlik-api` ucuzları, mevcut `config.guild`, `db`
- Produces:
  - `botApi.cagir(yol, govde)` — bot imzasıyla API çağrısı
  - `/bagla <kod>` → DM + kanal yanıtı
  - `/sifirla` → DM kod + `POST /api/sifirla/kod`
  - 60 sn'de bir `POST /api/ping` (bot durumu)

- [ ] **Adım 1: Testi yaz** — `botApi.cagir` imza oluşturur; `/bagla` bulunamayan kod için hata
  verir; geçerli kod için `POST /api/baglama/dogrula` çağrılır.
- [ ] **Adım 2: Testi çalıştır, başarısız olduğunu gör**
- [ ] **Adım 3: Uygula** — mevcut `komutlar/` + `eventler/` düzenine uy; `croxydb` korunur.
- [ ] **Adım 4: Testleri çalıştır, geçtiğini gör**
- [ ] **Adım 5: Commit** — `feat(bot): /bagla ve /sifirla komutlari + kalp atisi`

### Görev 6: Onboarding ekranı (sıralı şifre + bağlama + "şimdi değil")

**Files:**
- Create: `ui/src/hesap-onizleme.ts` (onboarding kartı + akış)
- Modify: `ui/src/main.ts:660` (ilk açılışta çağır), `ui/src/pages.css`
- Test: `ui/mock-harness.html` (manuel akış doğrulaması)

**Interfaces:**
- Consumes: `hesap_yetki::*` komutları (`cmd_hesap_yetki_listesi`, `cmd_hesap_sifre_kur`,
  `cmd_hesap_baglama_kod`), `bildirim.ts` mevcut
- Produces:
  - `hesapOnizlemeBaslat()` → sıraylı ekranlar
  - Ekran metinleri §23 birebir

- [ ] **Adım 1: Testi yaz** — mock invoke ile akış: 2 hesap → sırayla kartlar; "Şimdi değil"
  tıklanınca hesap kullanılabilir + kozmetik kilitli rozeti; kod isteği komutu çağırır.
- [ ] **Adım 2: Testi çalıştır, başarısız olduğunu gör**
- [ ] **Adım 3: Uygula** — `bildirim.ts` desenini izleyen tipli TypeScript; Türkçe metinler.
- [ ] **Adım 4: Mock harness ile doğrula**
- [ ] **Adım 5: Commit** — `feat(ui): hesap dogrulama onboarding ekranlari`

### Görev 7: Kozmetik kapısı + ✕ işareti (launcher + oyun içi köprü)

**Files:**
- Modify: `ui/src/pages/skins.ts` (kilit durumu), `ui/src/pages/kozmetik.ts` veya `instances.ts`
  (hesap adı yanında ✕), `src-tauri/src/commands.rs` (kozmetik komutları yetki kontrolü)
- Modify: `src-tauri/src/kozmetik_kopru.rs` (aktif hesap + doğrulama durumu dosyası)
- Test: mevcut Rust birim testleri + mock harness

**Interfaces:**
- Consumes: `hesap_yetki::yetki_durumu`
- Produces:
  - `cmd_kozmetik_izin()` → `{izinli, neden}` — izin yoksa komut hata döner
  - `.yikim/aktif-hesap` dosyası: `{anahtar, ad, dogrulandi, carpi}` (mod okur)

- [ ] **Adım 1: Testi yaz** — doğrulanmamış hesapla `cmd_kozmetik_izin` → `izinli:false`;
  kaydetme denemesi hata; `.yikim/aktif-hesap` içeriği doğru.
- [ ] **Adım 2: Testi çalıştır, başarısız olduğunu gör**
- [ ] **Adım 3: Uygula** — `kozmetik` çağrılarının önüne yetki kontrolü; `carpi` alanı.
- [ ] **Adım 4: Testleri çalıştır, geçtiğini gör**
- [ ] **Adım 5: Commit** — `feat(kozmetik): yetki kapisi + aktif hesap k8prusu`

### Görev 8: IP kaydı + 7 gün silme (gerçek silme)

**Files:**
- Modify: `guvenlik-api/src/db.js`, `guvenlik-api/src/server.js`, `src-tauri/src/guvenlik_api.rs`
- Test: `guvenlik-api/test/api.test.js`

**Interfaces:**
- Consumes: Görev 4 şema
- Produces:
  - `ip_kaydi` tablo + `POST /api/olay/kaydet`
  - `temizle_ip()` — süresi geçen satırları siler, kaç satır silindi döner

- [ ] **Adım 1: Testi yaz** — 8 gün önce yazılmış satır silinir; 1 gün önceki kalır;
  her çağrıda süzme yapılır (okuma sırasında da temizlik).
- [ ] **Adım 2: Testi çalıştır, başarısız olduğunu gör**
- [ ] **Adım 3: Uygula** — `Date.now()` + 7 gün; açılışta ve her okumada `temizle_ip()`.
- [ ] **Adım 4: Testleri çalıştır, geçtiğini gör**
- [ ] **Adım 5: Commit** — `feat(api): IP kaydi 7 gun saklama + gerçek silme`

### Görev 9: Bot kapalı durumu + çevrimdışı izin belgesi

**Files:**
- Modify: `src-tauri/src/guvenlik.rs`, `src-tauri/src/guvenlik_api.rs`, `guvenlik-api/src/server.js`
- Test: birim testler + manuel

**Interfaces:**
- Produces:
  - `bot_kapali_mi(son_ping: i64) -> bool` (3 dk)
  - `offline_izin_dogrula(belge_b64) -> bool` — Ed25519 sunucu imzası + süre
  - Launcher açılışta: son başarılı çevrimiçi girişten belgeyi yeniler

- [ ] **Adım 1: Testi yaz** — süresi geçmiş belge reddedilir; imzasız reddedilir; 7 günlük
  geçerli belge kabul edilir; bot_kapali_mi 4 dakika önceki ping → true.
- [ ] **Adım 2: Testi çalıştır, başarısız olduğunu gör**
- [ ] **Adım 3: Uygula**
- [ ] **Adım 4: Testleri çalıştır, geçtiğini gör**
- [ ] **Adım 5: Commit** — `feat(guvenlik): çevrimdişi izin belgesi + bot kapali durumu`

### Görev 10: Yerel uçtan uca test + sahip zip'i

**Files:**
- Create: `docs/superpowers/specs/2026-11-08-kozmetik-sifre-discord-design.md` (test sonuçları bölümü)
- Create: `yikim-tagbot-test.zip` (çalışan bot + API), `YIKIMLient-Test.exe` (launcher)

**Interfaces:**
- Consumes: tüm görevler

- [ ] **Adım 1: API'yi yerelde başlat** (`node guvenlik-api/src/server.js`) — `/api/saglik` ok.
- [ ] **Adım 2: Botu başlat** — 2 hesap, Discord bağlama kodu, DM doğrulama.
- [ ] **Adım 3: Launcher'ı çalıştır** — onboarding ekranını doldur; kozmetik kilidi açılsın;
  botu kapatınca uyarıyı gör; çevrimdışı izin ile oyun açılabilirliğini doğrula.
- [ ] **Adım 4: Ekran görüntüleri** — launcher'a ek menü (test için) ile her ekranın SS'i.
- [ ] **Adım 5: Zip'leri üret** — `bot-yikimpack-test.zip` + `YIKIMLient-Test.zip`
- [ ] **Adım 6: Commit** — `test: yerel uçtan uca doğrulama + sahip paketleri`

## Notlar (yapıcıya)

- §18'deki API adresi yerelde `127.0.0.1:8788`; yayın kapısı (Görev 11, ayrı plan)
  Cloudflare Worker + Turso'ya taşınır — bu plan yalnızca yerel testleri hedefler.
- Kozmetik blob'ları (GitHub Releases) bu planda YOKTUR: Görev 7 yalnız izin kapısını
  ve `.yikim/kosmetik/<anahtar>/` yerel deposunu kurar; eşitleme ayrı plan.
