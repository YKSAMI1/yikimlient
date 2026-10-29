# Skin Merkezi — Uygulama Planı

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Premium hesaplar için Mojang'a gerçekten yazan skin kataloğu + pelerin seçimi + piksel editörü eklemek; deneme alanını kaldırmak ve ilk kurulum hesap adımını düzeltmek.

**Architecture:** Mojang işleri yeni `src-tauri/src/skins.rs` modülünde (profil/skin/pelerin + yerel kitaplık + yedek + soğuma). UI'da yeni `skins` sayfası katalog/kapı, ayrı `skins-editor.ts` editör; 3D motor pelerin mesh'i ve canvas dokusu kazanır. Editörün piksel çekirdeği DOM'suz (`PikselPafta`) → Node testleriyle doğrulanır.

**Tech Stack:** Rust 1.77+/Tauri 2/reqwest(multipart)/image; vanilla TypeScript + three.js; Node 24 `node --test`; Vite.

**Spec:** `docs/superpowers/specs/2026-10-29-skin-merkezi-design.md`

## Global Constraints

- Arayüz ve kod yorumları Türkçe; mevcut isimlendirme desenine uy.
- Yeni npm paketi yok. Rust'ta yalnız `reqwest`e `multipart` feature'ı eklenir.
- Testlerde **hiçbir Mojang yazma isteği** yapılmaz; yükleme yalnız kullanıcı "Giy"e basınca.
- Tüm yazmalar `%APPDATA%\.yikimlient` altında; `..`, `/`, `\` reddedilir.
- Skin yüklemede hesap başına 60 sn soğuma; 429'da otomatik tekrar **yok**.
- Dosya düzenlemede `edit`/`write` kullan (PowerShell `Set-Content -Encoding UTF8` mojibake üretir).
- Doğrulama komutları: `npm run check`, `node --test ui/src/sahne/*.test.ts`, `cargo check`, `cargo test`.
- Sürüm hedefi `0.4.0`; `resources/ui` repoda izlendiği için son commit'ten önce `npm run ui-dist`.

## Review Focus

1. **İnternetsiz açılış:** `cmd_skin_hub` ağ hatasında donmamalı; cache'teki skin + son pelerin listesi `cevrimdisi:true` ile dönmeli.
2. **Süresi geçmiş token:** "Giy" 401 alırsa token bir kez yenilenmeli; yenileme de başarısızsa kullanıcıya "tekrar giriş yap" denmeli, sessiz başarısızlık olmamalı.
3. **429/403:** Hesabı riske atacak otomatik tekrar olmamalı; kalan süre/`Retry-After` anlaşılır gösterilmeli.
4. **64×32 eski skin:** Katalog, editör ve yükleme yolları çökmemeli; editör üst yarıyı alıp alt yüzleri saydam bırakmalı.
5. **Onboarding:** MS penceresi açıkken tekrar basma ikinci pencere açmamalı; adımdan geri dönünce interval temizlenmeli.

---

### Task 1: Rust — PNG doğrulama ve yerel skin kitaplığı

**Files:**
- Create: `src-tauri/src/skins.rs`
- Modify: `src-tauri/src/lib.rs:1-18` (`pub mod skins;`)
- Test: `src-tauri/src/skins.rs` içinde `#[cfg(test)] mod testler`

**Interfaces:**
- Consumes: `crate::core::app_dir()`, `image` crate.
- Produces:
  - `pub struct SkinKayit { id: String, ad: String, dosya: String, slim: bool, kaynak: String, tarih: i64 }`
  - `pub fn dogrula_png(veri: &[u8]) -> Result<Vec<u8>, String>` (64×64/64×32 kabul, PNG'ye normalize)
  - `pub fn kitaplik_oku(kok: &Path) -> Vec<SkinKayit>`
  - `pub fn kitaplik_yaz(kok: &Path, liste: &[SkinKayit]) -> Result<(), String>`
  - `pub fn kayit_ekle(kok: &Path, ad: &str, veri: &[u8], slim: bool, kaynak: &str) -> Result<SkinKayit, String>`
  - `pub fn kayit_sil(kok: &Path, id: &str) -> bool`
  - `pub fn kayit_dosya(kok: &Path, id: &str) -> Result<PathBuf, String>`
  - `pub fn guvenli_id(id: &str) -> bool` (32/36 karakter hex-uuid)

- [ ] **Step 1: Testleri yaz** — `dogrula_png` 64×64 ve 64×32'yi kabul eder; 32×32 ve PNG olmayan baytları reddeder. `guvenli_id("..")`, `"a/b"`, `"abc"` false; gerçek uuid true. Geçici dizinde `kayit_ekle` → `kitaplik_oku` aynı kaydı döner; `kayit_sil` dosyayı ve indeksi temizler; bozuk `index.json` boş liste döner.
- [ ] **Step 2: Testlerin derlendiğini ve başarısız olduğunu gör** — `cargo test --manifest-path src-tauri/Cargo.toml skins` → FAIL (modül yok).
- [ ] **Step 3: Uygula** — `image::load_from_memory_with_format(.., Png)`; boyut kontrolü; 64×32'yi olduğu gibi bırak (yeniden kodlama yalnız >64 KB ise). Kitaplık yolu `kok/index.json`; atomik yazma `.yari` + rename. `dosya` alanı mutlak yol string'i.
- [ ] **Step 4: Testleri geçir** — `cargo test ... skins` → PASS.
- [ ] **Step 5: Commit** — `feat(skins): yerel skin kitaplığı ve PNG doğrulama`

---

### Task 2: Rust — Mojang istemcisi, yedek ve soğuma

**Files:**
- Modify: `src-tauri/src/skins.rs`, `src-tauri/Cargo.toml:24` (`reqwest` features + `"multipart"`)
- Test: `src-tauri/src/skins.rs` test modülü

**Interfaces:**
- Consumes: `crate::auth::{Account, refresh_account}`, `crate::core::{app_dir, http_client, now_millis}`, `crate::commands::{load_accounts, save_accounts}` (gerekirse `pub(crate)` yap).
- Produces:
  - `pub struct Pelerin { id, ad, dosya: Option<String>, aktif: bool }`
  - `pub struct AktifSkin { dosya: String, slim: bool }`
  - `pub struct SkinHub { premium, cevrimdisi, aktif: Option<AktifSkin>, kitaplik: Vec<SkinKayit>, pelerinler: Vec<Pelerin>, pelerin_aktif: Option<String>, yedek_var: bool, hata: Option<String> }`
  - `pub fn hesap_anahtari(acc: &Account) -> String` (uuid'dan `-` at)
  - `pub fn hata_esle(status: u16, govde: &str, retry_after: Option<u64>) -> String`
  - `pub fn soguma_kontrol_an(son: &HashMap<String,i64>, anahtar: &str, simdi: i64) -> Result<(), i64>` (kalan ms döner)
  - `pub async fn hub_getir(acc: &Account) -> SkinHub` — premium değilse `{premium:false}`; ağ hatasında `cevrimdisi:true` + cache
  - `pub async fn skin_uygula(acc: &Account, veri: &[u8], slim: bool) -> Result<SkinHub, String>`
  - `pub async fn pelerin_uygula(acc: &Account, cape_id: Option<&str>) -> Result<SkinHub, String>`
  - `pub async fn yedek_geri_yukle(acc: &Account) -> Result<SkinHub, String>`
  - `pub fn yedek_var(acc: &Account) -> bool`

- [ ] **Step 1: Saf fonksiyon testleri yaz** — `hata_esle(429, "", Some(30))` "30" içerir; `hata_esle(401,..)` "giriş" içerir; `hata_esle(403, "ACCOUNT_SUSPENDED", None)` "askıya" içerir; `soguma_kontrol_an` boş map'te Ok, 30 sn önceki kayıtta `Err(~30000)`, 61 sn önceki kayıtta Ok.
- [ ] **Step 2: FAIL gör** — `cargo test ... soguma` / `hata_esle`.
- [ ] **Step 3: Uygula**
  - `taze_token`: `expires_at > now+60_000` ise mevcut token; değilse `refresh_account` → `save_accounts` → yeni token. Boş refresh token → hata.
  - `GET /minecraft/profile` (Bearer) → `skins[]` (ACTIVE olanın `variant`ı) + `capes[]` (`id/ad=alias/state/url`).
  - Pelerin PNG'lerini `cache/cape-<id>.png`'e paralel indir (en fazla 4 eşzamanlı); aktif pelerini ayrıca `cache/cape-aktif-<anahtar>.png`'e yaz.
  - `skin_uygula`: `dogrula_png` → mevcut aktif skini yedekle (`skins/yedek/<anahtar>.png` + `.json`) → `POST /minecraft/profile/skins` multipart (`variant`, `file`) → başarıda `cache/skin-<anahtar>.png` + `.json` yaz → `hub_getir`.
  - `pelerin_uygula`: Some → `PUT /minecraft/profile/capes/active` `{capeId}`; None → `DELETE /minecraft/profile/capes/active`.
  - 401 → token zorla yenile + tekrar (yalnız bir kez). 429 → `Retry-After` başlığını kullan, tekrar yok.
  - Soğuma: `static SON: OnceLock<Mutex<HashMap<String,i64>>>`; 60 sn.
- [ ] **Step 4: Testleri geçir** — `cargo test ... skins` PASS.
- [ ] **Step 5: Commit** — `feat(skins): Mojang skin/pelerin istemcisi, yedek ve hız koruması`

---

### Task 3: Rust — Tauri komutları ve kayıt

**Files:**
- Modify: `src-tauri/src/skins.rs`, `src-tauri/src/lib.rs:64-133`, `src-tauri/src/commands.rs:332-390` (cache yardımcısı + `pelerin` alanı)

**Interfaces:**
- Produces (JS tarafı aynen kullanır):
  - `cmd_skin_hub(id) -> SkinHub`
  - `cmd_skin_giy(id, veri: number[], slim, ad?: string) -> SkinHub`
  - `cmd_skin_giy_kitaplik(id, kayitId) -> SkinHub`
  - `cmd_skin_pelerin(id, capeId: string|null) -> SkinHub`
  - `cmd_skin_kaydet(ad, veri, slim) -> SkinKayit`
  - `cmd_skin_sil(kayitId) -> bool`
  - `cmd_skin_yeniden_adlandir(kayitId, ad) -> SkinKayit`
  - `cmd_skin_yedek(id) -> number[]|null`
  - `cmd_skin_yedek_geri_yukle(id) -> SkinHub`
  - `cmd_skin_disa_aktar(ad, veri) -> string`
  - `cmd_get_account_skin` yanıtına `pelerin: string|null` eklenir (cache'ten, ağsız).

- [ ] **Step 1:** `cmd_get_account_skin`'in cache dönüşlerine `pelerin` alanı ekle (dosya varsa yol, yoksa `null`); mevcut alanlar aynı kalır.
- [ ] **Step 2:** Komutları `lib.rs` `generate_handler!` listesine ekle; `cmd_skin_giy`'de `ad` varsa `kayit_ekle` ile kitaplığa da yaz.
- [ ] **Step 3:** `cargo check --manifest-path src-tauri/Cargo.toml` → yalnız bilinen `commands.rs:1614 app` uyarısı.
- [ ] **Step 4: Commit** — `feat(skins): skin merkezi Tauri komutları`

---

### Task 4: Sahne — pelerin mesh'i, canvas dokusu, idle salınım

**Files:**
- Modify: `ui/src/sahne/karakter.ts`
- Verify: `npm run check` + `ui/prova.html` (elle)

**Interfaces:**
- Produces:
  - `pelerin(p: { url: string } | null): Promise<void>` — 10×16×1 kutu, bölge `{u:0,v:0,w:10,h:16,d:1}`, gövde arkası, üst pivot; idle'da hafif salınım.
  - `tuvalDoku(kaynak: HTMLCanvasElement, slim: boolean): void` — `CanvasTexture`, `NearestFilter`, `SRGBColorSpace`; slim değişirse modeli yeniden kurar.
  - `dokuTazele(): void` — `texture.needsUpdate = true`.
  - Pelerin, `kapati()` ve `modelKur()` içinde temizlenir; `_bekleyenPelerin` kur() öncesi gelirse uygulanır.

- [ ] **Step 1:** `pelerin` dokusunu `ImageLoader` ile yükle; 64×32 beklenir, farklı boyutta yükleme başarısızsa sessizce pelerinsiz devam.
- [ ] **Step 2:** Pelerin grubunu `kalca`ya değil `belUst`e bağla (gövdeyle birlikte hareket etsin, kolları izlemesin); `adimla()` içinde `rotation.x` salınımını uygula (emote sırasında genlik ×2).
- [ ] **Step 3:** `tuvalDoku` ile modeli kur; `dokuTazele` yalnız `needsUpdate` yapar.
- [ ] **Step 4:** `npm run check` → temiz.
- [ ] **Step 5: Commit** — `feat(sahne): pelerin mesh'i ve canlı tuval dokusu`

---

### Task 5: Editör piksel çekirdeği (DOM'suz) + Node testleri

**Files:**
- Create: `ui/src/sahne/piksel-pafta.ts`, `ui/src/sahne/skin-bolgeler.ts`, `ui/src/sahne/piksel-pafta.test.ts`, `ui/src/sahne/skin-bolgeler.test.ts`
- Modify: `tsconfig.json` → `"allowImportingTsExtensions": true`

**Interfaces:**
- Produces:
  - `type RGBA = [number, number, number, number]`
  - `class PikselPafta { w=64; h=64; veri: Uint8ClampedArray; static bos(); static rgba(v); kopya(); piksel(x,y): RGBA; boya(x,y,renk,kalinlik=1); cizgi(x0,y0,x1,y1,renk,kalinlik); kova(x,y,renk); damla(x,y): RGBA; katmanBasla(); geriAl(): boolean; ileriAl(): boolean }`
  - `BOLGELER: { id, ad, x, y, w, h, katman: "taban"|"ust" }[]` (kafa, şapka, gövde, ceket, sağ/sol kol + kolluklar, sağ/sol bacak + pantolonlar)
  - `bolgeBul(x,y): typeof BOLGELER[number] | null`
  - `yuzDilimi(): {x:8,y:8,w:8,h:8}` (katalog yüz kırpması)

- [ ] **Step 1: Testleri yaz** — `boya(3,4,[255,0,0,255])` → `piksel(3,4)` aynı; `cizgi(0,0,5,5,...)` ara pikselleri doldurur (boşluk yok); `kova(0,0,renk)` yalnız bağlantılı saydam bölgeyi boyar, sınırı aşmaz; `geriAl` önceki hâle döner, `ileriAl` geri getirir; `damla` doğru rengi döner; `bolgeBul(1,1)?.id === "kafa"`.
- [ ] **Step 2: FAIL** — `node --test ui/src/sahne/piksel-pafta.test.ts` (modül yok).
- [ ] **Step 3: Uygula** — Bresenham çizgi; kova 4-komşu iteratif yığın; undo yığını `Uint8ClampedArray` kopyaları (en fazla 40, en eskisi düşer); boya kalınlığı için `kalinlik` yarıçapı.
- [ ] **Step 4: PASS** — `node --test ui/src/sahne/*.test.ts`.
- [ ] **Step 5: Commit** — `feat(skins): piksel pafta çekirdeği ve bölge haritası`

---

### Task 6: UI — skin merkezi sayfası (kapı + katalog + pelerin)

**Files:**
- Create: `ui/src/pages/skins.ts`, `ui/src/sahne/skin-tipleri.ts`
- Modify: `ui/src/pages/index.ts`, `ui/src/main.ts:256-263`

**Interfaces:**
- Consumes: Task 3 komutları, `sahneGetir/sahneKapat`, `currentAccount`, `fileSrc`, `openLoginModal`.
- Produces:
  - `renderSkins(root: HTMLElement): void`
  - `skin-tipleri.ts`: `SkinKayit`, `Pelerin`, `SkinHub` (Rust alan adlarıyla birebir).

- [ ] **Step 1:** `renderSkins`: `sahneKapat()`; hesap yok veya `kind !== "microsoft"` → kapı HTML'i (kilit ikonu, "Orijinal hesap ile girmen lazım", "Microsoft ile Giriş", "Hesapları Yönet"); giriş sonrası `openLoginModal(() => renderSkins(root))` ile yeniden çiz.
- [ ] **Step 2:** Premium: `cmd_skin_hub` çağır; yükleniyor iskeleti; hata varsa toast + yeniden dene butonu; `cevrimdisi` ise "Çevrimdışı — son bilinen skini gösteriyorum" şeridi.
- [ ] **Step 3:** Sol sahne: `sahneGetir().kur(canvas)`, `skin({url:fileSrc(aktif.dosya), slim})`, `pelerin({url:fileSrc(pelerinDosya)})`, boşsa `null`. Altında "Bu Skini Giy" (seçili varsa), "Yedeği Geri Yükle" (yedek_var).
- [ ] **Step 4:** Sağ panel: kayıtlı kartlar (yüz kırpması + ad + Wide/Slim + "SEÇİLİ"/"GİYİLİ"), tık → seç + sahneyi güncelle; çift tık → `giy()`. Sil butonu (`cmd_skin_sil`). "Skin Ekle" dropzone: PNG seç/sürükle → `cmd_skin_kaydet` → kitaplığı tazele. "Varsayılan": Steve/Alex (gömülü kaynaklar: `resources/skins/*.png` asset yolu yok → `cmd_skin_kaydet`e gönderilecek baytlar UI'da üretilemez; bunun yerine çağrı `cmd_skin_hub` yanıtındaki `varsayilanlar` alanıyla gelir — Task 3'e `varsayilanlar: [{ad, dosya, slim}]` eklenir, `dosya` cache'teki `varsayilan-steve.png`/`varsayilan-alex.png`).
- [ ] **Step 5:** `giy()`: onay modalı ("Bu skin Mojang hesabına yazılacak") → `cmd_skin_giy_kitaplik`; başarıda hub'ı yeniden çiz + toast; hata → toast + modal içinde hata metni.
- [ ] **Step 6:** Pelerin şeridi: kartlar `pelerin.dosya` (64×32, ön bölge `1,1,10,16` CSS kırpma), aktif "TAKILI"; tık → `cmd_skin_pelerin(id, capeId)`; "Pelerini çıkar" → `cmd_skin_pelerin(id, null)`; yoksa bilgi metni.
- [ ] **Step 7:** `npm run check` + mock harness'ta görsel kontrol (Task 12'de tamamlanır).
- [ ] **Step 8: Commit** — `feat(skins): skin kataloğu, premium kapısı ve pelerin şeridi`

---

### Task 7: UI — skin editörü görünümü

**Files:**
- Create: `ui/src/pages/skins-editor.ts`
- Modify: `ui/src/pages/skins.ts` (düzenle butonu + geri dönüş)

**Interfaces:**
- Consumes: `PikselPafta`, `BOLGELER`, `sahneGetir`, Task 3 komutları.
- Produces:
  - `renderSkinEditor(root, girdi: {pafta, slim, ad}, kaydet: (cikti: {veri:number[], slim:boolean, ad:string}, giy:boolean) => Promise<void>, kapat: () => void): void`

- [ ] **Step 1:** Tuvali çiz: 512×512 (8×), `imageSmoothingEnabled=false`; `PikselPafta` → offscreen canvas → `drawImage`; ızgara ve bölge vurgu katmanı ayrı overlay canvas.
- [ ] **Step 2:** Pointer olayları: piksel koordinatı = `floor((clientX - rect.left) / (rect.width/64))`; `pointerdown` → `katmanBasla()` + boya; `pointermove` (basılı) → `cizgi`; `pointerup` bitir → `sahne.dokuTazele()`.
- [ ] **Step 3:** Araçlar: kalem/silgi/kova/damla butonları, 1/2/4 kalınlık, `<input type="color">` + hex, son 8 renk, Ctrl+Z/Ctrl+Shift+Z/Ctrl+S.
- [ ] **Step 4:** Bölge listesi (taban/üst gruplu), tık → vurgu; "sadece bu parça" anahtarı diğer bölgeleri %35 karartır.
- [ ] **Step 5:** Wide/Slim anahtarı → `sahne.tuvalDoku(tuval, slim)` + model yeniden kurulur; slim'e geçişte kol uyarısı.
- [ ] **Step 6:** "Dosya ile değiştir": dosya seçici + tuvale sürükle; 64×64 doğrudan, 64×32 üst yarıya, diğer boyut red + toast.
- [ ] **Step 7:** 3D önizleme: ikinci canvas'ta `sahneGetir().kur(editCanvas)`; çıkışta `kapat()` çağrılır, `skins.ts` ana sahneyi yeniden kurar.
- [ ] **Step 8:** Kaydet: ad input + [Sadece Kitaplığa Kaydet] [Kaydet ve Giy]; ikincisinde onay modalı → `cmd_skin_giy`; birincisinde `cmd_skin_kaydet`. Dışa aktar → `cmd_skin_disa_aktar` + toast + "Klasörü Aç".
- [ ] **Step 9:** `npm run check` + mock görsel kontrol.
- [ ] **Step 10: Commit** — `feat(skins): Aseprite benzeri skin editörü`

---

### Task 8: İkonlar ve stiller

**Files:**
- Modify: `ui/src/icons.ts`, `ui/src/pages.css:623-670`

**Interfaces:**
- Produces: `ICONS.shirt`, `.brush`, `.bucket`, `.picker`, `.undo`, `.redo`, `.lock` (mevcut `icon(name, cls)` ile uyumlu).

- [ ] **Step 1:** `.deneme-*` bloklarını sil; `.dropzone` korunur.
- [ ] **Step 2:** `.skin-sayfa` grid (1fr 380px), `.skin-sahne`, `.skin-kart`, `.skin-kart.secili`, `.skin-rozet`, `.skin-pelerin-serit`, `.skin-pelerin`, `.skin-kapi`, 900 px altında tek sütun.
- [ ] **Step 3:** `.sk-edit` tam ekran panel, iki sütun, `.sk-tuval`, `.sk-arac`, `.sk-bolge`, 1050 px altında alt alta.
- [ ] **Step 4:** `npm run check` + görsel kontrol.
- [ ] **Step 5: Commit** — `feat(skins): skin merkezi stilleri ve ikonları`

---

### Task 9: Onboarding hesap adımı + modal düzeltmeleri

**Files:**
- Modify: `ui/src/onboarding.ts:79-110`, `ui/src/main.ts:221-229, 375-423`

**Interfaces:**
- Produces: `openModal(html, secenek?: { sinif?: string; kapatilabilir?: boolean })`, `openLoginModal(onSuccess?: () => void)`.

- [ ] **Step 1:** `openModal`: Escape ile kapanma; `aria-modal="true"`; aynı `sinif` ile ikinci modal açılmaz (varsa mevcut olanı döndür). `.modal-backdrop` z-index'i onboarding'in üstüne (4000).
- [ ] **Step 2:** `openLoginModal(onSuccess?)`: tek örnek (`#login-modal`); başarılı girişte `onSuccess?.()`; mevcut davranış korunur.
- [ ] **Step 3:** Onboarding adım 2'yi yeniden yaz: MS butonu + ayırıcı + offline input/buton, hepsi kart içinde; satır içi durum alanı; `meşgul` bayrağıyla çift tıklama koruması; başarıda `refreshState()` + ✓ + "İleri" etkin.
- [ ] **Step 4:** Adım değişiminde `tick` interval'ini temizle (`stepTemizle()`); skip/back'te de temizle.
- [ ] **Step 5:** Mock harness'ta adım 2'yi aç, offline girişi dene, MS butonunun ikinci pencere açmadığını doğrula.
- [ ] **Step 6: Commit** — `fix(onboarding): hesap adımı satır içi giriş, modal tekilliği`

---

### Task 10: Emote Deneme Alanı'nı kaldır

**Files:**
- Delete: `ui/src/pages/deneme.ts`
- Modify: `ui/src/pages/index.ts`, `ui/src/main.ts:256-263`, `ui/src/drop.ts:80-85`, `ui/src/pages/settings.ts:135-150, 265-275`

- [ ] **Step 1:** Sayfayı ve tüm referansları kaldır (ray öğesi yerine `skins` zaten Task 6'da eklendi).
- [ ] **Step 2:** `drop.ts` emote dalı: `cmd_import_emote_dosyasi` sonrası `navigate("home")` + "Vitrine eklendi" toast.
- [ ] **Step 3:** `settings.ts` "Emote Deneme Alanı" kartını ve `#deneme-alani` dinleyicisini sil.
- [ ] **Step 4:** `grep -rn "deneme" ui/src` → yalnız yorum/`deneme` kelimesi kalmamalı (kod referansı yok).
- [ ] **Step 5:** `npm run check` + `grep -rn '"deneme"' ui/src` boş.
- [ ] **Step 6: Commit** — `refactor: emote deneme alanı kaldırıldı`

---

### Task 11: Mock harness genişletme (görsel doğrulama altyapısı)

**Files:**
- Modify: `ui/mock-harness.html`

**Interfaces:**
- Produces: `?hesap=ms` ile premium hesap; `?sayfa=skins` ile doğrudan sayfa; `cmd_skin_hub`, `cmd_skin_giy*`, `cmd_skin_pelerin`, `cmd_skin_kaydet`, `cmd_ms_login_begin`, `cmd_add_offline_account` sahte yanıtları; `convertFileSrc` `data:` URL'lerini geçirir.

- [ ] **Step 1:** Hesap seçimini query param'a bağla; MS hesabı `kind:"microsoft"`.
- [ ] **Step 2:** Prosedürel 64×64 skin ve 64×32 pelerin canvas'ta üret → `toDataURL`; kitaplıkta 3 kayıt, 2 pelerin (biri aktif), yedek var.
- [ ] **Step 3:** `cmd_skin_giy*` çağrılarını sahte başarıyla döndür ve `__BOOT_CALLS__`'a yaz (gerçek API'ye asla gidilmez).
- [ ] **Step 4:** `cmd_get_account_skin` yanıtına `pelerin` ekle.
- [ ] **Step 5: Commit** — `test(ui): skin merkezi mock harness`

---

### Task 12: Görsel doğrulama, sürüm 0.4.0 ve paket

**Files:**
- Modify: `src-tauri/tauri.conf.json`, `src-tauri/Cargo.toml`, `src-tauri/Cargo.lock`, `package.json` (sürüm)

- [ ] **Step 1:** `npm run dev` arka planda; tarayıcıda `mock-harness.html?hesap=offline&sayfa=skins` → kapı ekranı görüntüsü.
- [ ] **Step 2:** `?hesap=ms&sayfa=skins` → katalog; karta tıkla → önizleme değişir; "Giy" modalı; pelerin tıkla.
- [ ] **Step 3:** Editörü aç → çiz, undo, kova, bölge vurgusu, Wide/Slim, kaydet modalı görüntüsü.
- [ ] **Step 4:** Onboarding: `onboarding_done=false` + boş hesaplar ile adım 2 görüntüsü; offline giriş çalışır; MS butonu tek çağrı.
- [ ] **Step 5:** Konsol hatası yok (`__BOOT_ERRORS__` boş).
- [ ] **Step 6:** Sürümü üç dosyada `0.4.0` yap (package.json + tauri.conf.json + Cargo.toml; `cargo check` Cargo.lock'u günceller).
- [ ] **Step 7:** `npm run check`, `node --test ui/src/sahne/*.test.ts`, `cargo check`, `cargo test ... skins` → temiz.
- [ ] **Step 8:** `npm run ui-dist` + `git status` (dist dosyaları eklendi mi) + commit `chore: v0.4.0 skin merkezi`.
- [ ] **Step 9:** Kullanıcıya canlı hesap testi teklif et (yayın ayrı onay).

---

## Self-Review

- **Spec kapsamı:** katalog, pelerin, editör, premium kapısı, animasyon, deneme kaldırma, onboarding → Task 4-9. Yedek/soğuma/hata → Task 2. Cache/`pelerin` alanı → Task 3. Dışa aktarma → Task 7.
- **Tip tutarlılığı:** Rust alan adları (`dosya`, `kaynak`, `tarih`, `pelerin_aktif`, `cevrimdisi`) JS tiplerinde birebir; `cmd_skin_giy*` her zaman `SkinHub` döner.
- **Review Focus testleri:** 1→Task 2 (`cevrimdisi`), 2→Task 2 (401 tekrar), 3→Task 2 (`hata_esle`), 4→Task 1/5 (64×32), 5→Task 9 (interval/meşgul).
- **Açık uç:** Varsayılan Steve/Alex kartları için `hub.varsayilanlar` alanı Task 3'e eklendi.
