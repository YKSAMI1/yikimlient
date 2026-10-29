# Skin Merkezi — Tasarım

**Tarih:** 2026-10-29
**Sürüm hedefi:** 0.4.0
**Durum:** Onay bekliyor

---

## 1. Amaç

Premium (Microsoft) hesaplar için launcher içinde tam bir **skin merkezi**:

- Kayıtlı + varsayılan skin kataloğu, canlı 3D önizleme, "seç ve giy".
- Oyuncunun **Mojang'daki orijinal pelerinleri**, seçilebilir ve kalıcı.
- Aseprite benzeri **piksel skin editörü** (64×64 atlas, fırça/silgi/kova/damlacık, undo/redo, katman bölgeleri, Wide/Slim).
- Seçilen skin **gerçekten Mojang hesabına yazılır** → sunucularda görünür.
- Premium olmayan hesap sayfayı açınca yalnızca "Orijinal hesap ile girmen lazım" kapısını görür.

Ayrıca:

- "Emote Deneme Alanı" tamamen kaldırılır (emote'lar ileride geliştirici tarafından paketlenir; sürükle-bırak import yolu kalır).
- İlk kurulum sihirbazının hesap adımı düzeltilir (offline giriş doğrudan görünür, Microsoft ayrı ve çalışır, modal yığılması yok).

### Kapsam dışı

- Özel/Yıkım pelerinleri (ileride; altyapı `kaynak` alanıyla hazır olacak).
- Bedrock, Realms, isim değiştirme.
- Emote düzenleme/import ekranı (deneme alanıyla birlikte kalkıyor; global sürükle-bırak import kalıyor).

---

## 2. Kullanıcı deneyimi

### 2.1 Yerleşim

Sol raydaki **"Deneme Alanı"** öğesi → **"Skin Merkezi"** olur (`icon: shirt`, `page: skins`). Sayfa tam ekran içerik alanını kullanır:

```
┌──────────────────────────────────────────────────────────────┐
│ Skin Merkezi                        [Premium]  [✎ Skin Düzenle]│
│ Kayıtlı skinlerini seç, giy; pelerinini tak.                 │
├───────────────────────────────┬──────────────────────────────┤
│                               │  KAYITLI SKİNLER             │
│      3D ÖNİZLEME (canvas)     │  [kart][kart][kart][kart]    │
│      idle animasyon + pelerin │                              │
│                               │  SKİN EKLE                   │
│  OyuncuAdı — AKTİF            │  ┌ sürükle-bırak / tıkla ┐   │
│  [ Bu Skini Giy ] [↺ Yedek]   │  └───────────────────────┘   │
│                               │                              │
│  PELERİNLERİN                 │  VARSAYILAN                  │
│  [pelerin][pelerin][yok]      │  [Steve][Alex]               │
└───────────────────────────────┴──────────────────────────────┘
```

- Sol büyük sahne: sürükleyerek döndürme (mevcut `Sahne` davranışı), idle nefes/salınım, pelerin salınımı.
- Skin seçimi: karta tek tık → sahne anında o skine döner + kartta **"SEÇİLİ"** rozeti + sol altta **"Bu Skini Giy"** birincil butonu. Çift tık → doğrudan giy (onay modalı ile).
- "Giy" başarılıysa kartta **"GİYİLİ"** rozeti, üstte yeşil onay, toast.
- Pelerin: kart tıklandığında anında uygulanır (hız sınırı yok, geri alınabilir) + model güncellenir. Aktif pelerin "TAKILI" rozetli. "Pelerini çıkar" seçeneği (DELETE `/capes/active`).
- Pelerin yoksa: "Hesabında pelerin yok — Mojang pelerinleri etkinliklerden kazanılır." bilgisi.
- Kayıtlı skinler: yüz kırpması (base + şapka katmanı) CSS ile, ad, boy (Wide/Slim), silme.
- Üst sağ: **"Skin Düzenle"** → editör görünümü (aynı sayfa içinde tam ekran panel; ayrı pencere değil).

### 2.2 Premium kapısı

`currentAccount()?.kind !== "microsoft"` ise sayfa **hiçbir veri çağırmadan** kapıyı çizer:

```
        🔒
Orijinal hesap ile girmen lazım
Skin değiştirmek ve pelerin takmak için Microsoft hesabı gerekir.
[ Microsoft ile Giriş ]   [ Hesapları Yönet ]
```

- Giriş başarılı olursa sayfa otomatik yeniden çizilir (`openLoginModal(onSuccess)` geri çağrısı).
- Offline hesap hiçbir zaman Mojang API'sine istek atmaz.

### 2.3 Skin düzenleme ekranı

Tam ekran, iki sütun:

```
┌──────────────────────────────────────────────────────────────┐
│ ← Skin Düzenle        [Wide|Slim]   [İptal]  [Kaydet]        │
├──────────────────────────────┬───────────────────────────────┤
│  64×64 piksel tuvali         │   canlı 3D önizleme           │
│  (8× zoom, ızgara, bölge     │   (çizerken ~20 fps güncellenir)│
│   vurguları)                 │                               │
│                              │   ARAÇLAR                     │
│                              │   ✎ ▭ ▣ ◉  |  ↩ ↪              │
│                              │   Renk: [■] #RRGGBB [palet]   │
│                              │   Boya kalınlığı: 1 / 2 / 4    │
│                              │   BÖLGELER (tıkla → vurgula)  │
│                              │   Kafa · Şapka · Gövde · ...  │
│                              │   [Dosya ile değiştir]        │
└──────────────────────────────┴───────────────────────────────┘
```

- **Tuval:** `ImageData(64,64)` üzerinde çalışan canvas; görüntü 8× ölçekli, `image-rendering: pixelated`. Zoom 4×/8×/16× ve boşluk+drag ile kaydırma.
- **Araçlar:** kalem, silgi (alpha 0), kova (flood fill), damlacık (renk seç), 1/2/4 px kalınlık. Ctrl+Z / Ctrl+Shift+Z / Ctrl+S.
- **Bölgeler:** standart 64×64 atlas dikdörtgenleri (kafa/şapka/gövde/gövde alt/kol×2/bacak×2 + üst katman karşılıkları). Bölge seçilince kesikli çerçeve; "sadece bu parça" modunda diğerleri %35 karartılır. Amaç: 2D atlasta nereyi boyadığını bilmek.
- **Wide/Slim:** yalnız model kol genişliğini değiştirir; önizleme anında güncellenir, kayıtla birlikte `variant` olarak gönderilir. Slim'e geçerken kol bölgesinde 1 px kayma uyarısı gösterilir.
- **Dosya ile değiştir:** PNG seç veya tuvale sürükle → 64×64 ise doğrudan, 64×32 ise sol üst köşeye yerleştirilip alt yüzler boş bırakılır (undo'lanabilir).
- **Kaydet:** ad alanı (varsayılan `Skinim GG.AA`) + iki buton:
  - **Sadece Kitaplığa Kaydet**
  - **Kaydet ve Giy** (onay: "Bu skin Mojang hesabına yazılacak — onaylıyor musun?")
- **Dışa aktar:** PNG'yi `%APPDATA%\.yikimlient\skins\disa\<ad>.png` olarak yazar, "Klasörü Aç" aksiyonu sunar.

### 2.4 İlk kurulum (onboarding) düzeltmesi

Adım 2 yeniden yazılır — modal yok, her şey kartın içinde:

```
2 / 4 — Hesap
Hesabını bağla
[ 🌐 Microsoft ile Giriş ]         ← satır 1 (tek başına)
──────────── veya ────────────
[ OyuncuAdı ......... ] [ Çevrimdışı Gir ]   ← satır 2, doğrudan görünür
( satır içi durum: spinner / ✓ / hata )
```

- `openLoginModal()` çağrıları kaldırılır; MS girişi `cmd_ms_login_begin` ile doğrudan çağrılır (zaten ayrı native pencere açıyor).
- Offline giriş `cmd_add_offline_account` ile satır içi.
- Çift tıklama koruması, adım değişince interval temizliği, hata durumunda buton yeniden etkin.
- Başarıda `refreshState()` → ✓ + "İleri" etkin.
- Genel modal katmanı yine de düzeltilir: `.modal-backdrop` z-index'i onboarding'in (3100) üstüne çıkar; `openModal` Escape ile kapanır; `openLoginModal` tekildir (varsa öne alır, ikinci kopya açmaz).

---

## 3. Teknik tasarım

### 3.1 Yeni Rust modülü: `src-tauri/src/skins.rs`

Sorumluluklar: Mojang profil/skin/pelerin API'si, token yenileme, yerel kitaplık, yedek, doğrulama, hız sınırı.

**Bağımlılık:** `reqwest`e `multipart` feature'ı eklenir (Cargo.toml). PNG doğrulama/yeniden kodlama için mevcut `image` crate kullanılır.

#### Komutlar

| Komut | Girdi | Dönüş | Not |
|---|---|---|---|
| `cmd_skin_hub` | `id` | `SkinHub` | Premium değilse `{premium:false}`; ağ hatasında cache + `cevrimdisi:true` |
| `cmd_skin_giy` | `id`, `veri: Vec<u8>`, `slim` | `SkinHub` | Doğrula → yerel kütüğe yaz → Mojang'a yükle → cache tazele |
| `cmd_skin_giy_kitaplik` | `id`, `kayit_id` | `SkinHub` | Kitaplıktaki baytları yükler |
| `cmd_skin_pelerin` | `id`, `cape_id: Option<String>` | `SkinHub` | `Some` → PUT, `None` → DELETE (pelerini çıkar) |
| `cmd_skin_kaydet` | `ad`, `veri`, `slim` | `SkinKayit` | Yalnız yerel kitaplık (import/sadece kaydet) |
| `cmd_skin_sil` | `kayit_id` | `bool` | Kitaplıktan sil |
| `cmd_skin_yeniden_adlandir` | `kayit_id`, `ad` | `SkinKayit` | |
| `cmd_skin_yedek` | `id` | `Option<Vec<u8>>` | Son giyilen önceki skin (geri yükleme için) |
| `cmd_skin_yedek_geri_yukle` | `id` | `SkinHub` | Yedeği giyer |
| `cmd_skin_disa_aktar` | `ad`, `veri` | `String` | `skins/disa/` yolunu döner |

`Bool`/`String` yerine tek `SkinHub` dönmek, UI'da tek yeniden çizim noktası sağlar.

#### `SkinHub` modeli

```jsonc
{
  "premium": true,
  "cevrimdisi": false,
  "aktif": { "url": "...", "slim": false, "kaynak": "mojang" },
  "kitaplik": [
    { "id": "uuid", "ad": "Skinim", "dosya": "…\\skins\\x.png",
      "slim": false, "kaynak": "editor", "tarih": 1761… }
  ],
  "pelerinler": [
    { "id": "cape-uuid", "ad": "Minecon 2016", "dosya": "…\\cache\\cape-….png",
      "aktif": false }
  ],
  "pelerin_aktif": "cape-uuid" | null,
  "yedek_var": true,
  "hata": null
}
```

- `aktif.url`: `cache/skin-<uuid>.png` (asset protokolü kapsamında).
- Pelerin görselleri ilk çekimde `cache/cape-<capeid>.png` olarak indirilir (paralel, en fazla 4); sonraki açılışta ağa çıkılmaz.
- `cevrimdisi: true` iken pelerinler son cache'ten, `aktif` mevcut skin cache'inden gelir.

#### Mojang akışı

```
hesap kind == "microsoft" değil  → Hata "premium_gerekli"
token boş / expires_at geçmiş    → auth::refresh_account → accounts.json'a yaz
GET /minecraft/profile           → skins[] + capes[] (alias dahil)
POST /minecraft/profile/skins    → multipart: variant=classic|slim, file=skin.png
PUT  /minecraft/profile/capes/active   {"capeId": "..."}
DELETE /minecraft/profile/capes/active
```

- 401 → token yenile, **bir kez** tekrar dene. Yine 401 → "oturum düştü, tekrar giriş yap".
- 403 `ACCOUNT_SUSPENDED` / `Forbidden` → anlaşılır mesaj, otomatik tekrar yok.
- 429 → `Retry-After` varsa onu, yoksa 60 sn bekleme mesajı; **asla otomatik tekrar yok** (Mojang 429 birikimini hesap askıya almaya kadar götürebiliyor).
- Başarılı yüklemede yanıt gövdesindeki profil (`skins`/`capes`) ile cache yenilenir; gövde yoksa yüklenen baytlar yazılır.
- **Yerel soğuma:** hesap başına son başarılı yükleme zamanı bellekte tutulur; 60 sn içinde yeni yükleme → "Çok sık değiştiriyorsun, biraz bekle" (429'a hiç düşmeden).
- **Yedek:** her başarılı yüklemeden önce mevcut aktif skin indirilip `skins/yedek/<hesapAnahtarı>.png` + `.json` (slim) olarak saklanır (hesap başına tek dosya). "Yedeği geri yükle" bunu yükler.

#### Doğrulama

- PNG decode (yalnız PNG), boyut **64×64** veya **64×32**; diğerleri reddedilir.
- Base layer'da tamamen saydam kareler için yumuşak uyarı (Mojang 400 dönebilir).
- 64×32 yüklemeler olduğu gibi gönderilir (Java eski formatı kabul ediyor); editör açarken 64×64 tuvale genişletilir (üst yarı kopyalanır, alt yüzler saydam).
- Yeniden kodlama: dosya > 64 KB ise `image` ile yeniden PNG'lenir (kalite kaybı yok, boyut düşer).

#### Yerleşim

```
%APPDATA%\.yikimlient\
  skins\
    index.json              → [{id, ad, dosya, slim, kaynak, tarih}]
    <id>.png
    disa\<ad>.png
    yedek\<hesapAnahtarı>.png + .json
  cache\
    skin-<uuid>.png / .json (mevcut cmd_get_account_skin ile aynı)
    cape-<capeId>.png
```

- `index.json` atomik yazılır (`.yari` → rename), bozuksa boş liste ile açılır.
- Yol güvenliği: tüm dosya işlemleri `app_dir/skins` altında, `..` ve ayraç reddedilir; `kayit_id` yalnız UUID biçimi.

### 3.2 Sahne: pelerin + doku güncelleme

`ui/src/sahne/karakter.ts`:

- `pelerin({ url } | null)` metodu: 10×16×1 kutu, doku bölgesi `{u:0,v:0,w:10,h:16,d:1}` (görünen yüz `(1,1)-(11,17)`), gövdenin arkasına (`x=0`, üst pivot `y=24`, `z=-2.5 px`) bağlanır; 180° Y döndürülür ki desen arkadan görünsün.
- Idle salınım: `rotation.x = -0.06 + sin(t*1.3)*0.035`, hafif `rotation.z`; emote sırasında genlik artar.
- `dokuGuncelle(canvas: HTMLCanvasElement)` / `skinTuval(canvas, slim)`:
  - `THREE.CanvasTexture`, `NearestFilter`, `SRGBColorSpace`.
  - Editör çizerken `needsUpdate = true` (20 fps throttle).
  - Model yeniden kurulmadan yalnız materyal dokusu değişir (slim değişince model yeniden kurulur).
- 64×32 genişletme mevcut mantıkla aynı.

`Sahne` tek örnek olduğu için editör ekranına geçerken `kur(editCanvas)` çağrılır (önceki renderer temizlenir), çıkışta sayfa yeniden çizilip ana canvas'a `kur()` yapılır.

### 3.3 UI dosyaları

- **`ui/src/pages/skins.ts`** (yeni): katalog + premium kapısı + editör görünümü.
  - `renderSkins(root)`: hesap kontrolü → kapı ya da katalog.
  - `renderEditor(root, veri, slim)`: tuval, araçlar, bölgeler, 3D önizleme, kaydet.
  - Durum: `hub`, `secili`, `taslak` (editor ImageData), `undo/redo` yığını.
- **`ui/src/sahne/skin-duzenleyici.ts`** (yeni): tuval çizim motoru (piksel haritalama, çizgi interpolasyonu, flood fill, bölge tablosu, undo yığını, PNG import/export). DOM'dan bağımsız, test edilebilir.
- **`ui/src/pages/index.ts`**: `deneme` çıkar, `skins` ekle.
- **`ui/src/main.ts`**: ray öğesi, `openModal` iyileştirmeleri (Escape, tekillik, z-index), `openLoginModal(onSuccess?)`.
- **`ui/src/pages/settings.ts`**: "Emote Deneme Alanı" kartı kaldırılır.
- **`ui/src/drop.ts`**: emote import sonrası `navigate("home")`.
- **`ui/src/icons.ts`**: `shirt`, `brush`, `bucket`, `picker`, `undo`, `redo`, `lock` ikonları.
- **`ui/src/pages.css`**: `.deneme-*` kaldırılır; `.skin-*` (katalog, kart, kapı, pelerin şeridi) ve `.sk-edit-*` (editör) eklenir. `.dropzone` korunur.
- **`ui/src/onboarding.ts`**: adım 2 yeniden yazılır.
- **`ui/src/sahne/karakter.ts`**: pelerin + tuval dokusu.

### 3.4 Emote Deneme Alanı'nın kaldırılması

Silinen: `ui/src/pages/deneme.ts`, `pages/index.ts` kaydı, ray öğesi, `drop.ts` yönlendirmesi, `settings.ts` kartı, `.deneme-*` stilleri.

Korunan: `cmd_add_emote`, `cmd_list_emotes`, `cmd_import_emote_dosyasi`, `cmd_emote_bayt_coz` (global `.emotecraft` sürükle-bırak hâlâ vitrine ekliyor), home vitrini ve rastgele oynatma.

### 3.5 Hız sınırı ve güvenlik notları

- Skin yükleme dışında hiçbir işlem otomatik tekrar edilmez.
- Token dosyada düz metin (mevcut `accounts.json` düzeni) — değişiklik yok.
- Mojang API'sine yalnız `kind == "microsoft"` hesaplarda gidilir.
- Kullanıcı onayı olmadan hiçbir yükleme yapılmaz (testlerde de).

---

## 4. Dosya değişiklik özeti

| Dosya | Değişiklik |
|---|---|
| `src-tauri/Cargo.toml` | `reqwest` → `multipart` |
| `src-tauri/src/lib.rs` | `pub mod skins;` + 10 komut kaydı |
| `src-tauri/src/skins.rs` | **yeni** — API, kitaplık, yedek, doğrulama, testler |
| `src-tauri/src/commands.rs` | `cmd_get_account_skin` cache yazımı için ortak yardımcıya bağlanır (isteğe bağlı, davranış aynı) |
| `ui/src/pages/skins.ts` | **yeni** — katalog, kapı, editör |
| `ui/src/sahne/skin-duzenleyici.ts` | **yeni** — piksel editörü çekirdeği |
| `ui/src/sahne/karakter.ts` | pelerin mesh'i + tuval dokusu |
| `ui/src/pages/deneme.ts` | **silinir** |
| `ui/src/pages/index.ts`, `main.ts`, `drop.ts`, `settings.ts`, `onboarding.ts`, `icons.ts`, `pages.css` | yukarıdaki gibi |

---

## 5. Test planı

**Rust**
- `image` doğrulama birim testleri: 64×64 OK, 64×32 OK, 32×32 red, bozuk PNG red.
- `index.json` yaz/oku, bozuk index kurtarma, `kayit_id` yol taşması reddi.
- `Retry-After`/429 hata eşlemesi (saf fonksiyon).
- `cargo check` (bilinen `commands.rs:1614 app` uyarısı dışında temiz).

**UI**
- `npx tsc --noEmit`.
- Dev sunucuda görsel doğrulama (tarayıcı ekran görüntüsü):
  1. Offline hesap → kapı ekranı.
  2. Premium hesap → katalog (boş kitaplık, pelerinsiz).
  3. Kitaplık dolu + seçili + GİYİLİ rozetleri.
  4. Pelerin şeridi (aktif/takılı).
  5. Editör: çizim, undo, kova, bölge vurgusu, Wide/Slim, kaydet modalı.
  6. Onboarding adım 2: offline alanı görünür, MS butonu tek akış, çift tıklama koruması.
- **Canlı hesap testi yapılmaz**; Mojang'a yazma yalnız kullanıcı "Giy"e bastığında gerçekleşir. (Test sırasında `Giy`e basılmayacak.)

**Kabul kriterleri**
- Offline hesap sayfayı açınca yalnız "Orijinal hesap ile girmen lazım" görür, hiçbir ağ isteği yok.
- Kayıtlı skine tık → 3D önizleme anında değişir, kart "SEÇİLİ".
- "Bu Skini Giy" → Mojang'a yüklenir, sunucuda görünür, kart "GİYİLİ", cache güncellenir.
- Pelerin tık → Mojang'da aktif olur, modelde görünür, sonraki açılışta korunur.
- Editörde çizilen skin kaydedilip giyilebilir; undo/redo ve kova çalışır.
- İlk kurulumda offline giriş tek tıkla çalışır; Microsoft girişi ayrı pencerede açılır, arkada modal yığılmaz.
- Deneme alanı hiçbir yerde görünmez; `.emotecraft` sürükle-bırak hâlâ vitrine ekler.

---

## 6. Sürüm ve yayın

- Sürüm `0.4.0` (yeni özellik).
- `npm run ui-dist` + commit + `yayin.ps1 -V 0.4.0` — yayın adımı en sonda, kullanıcı onayıyla.
