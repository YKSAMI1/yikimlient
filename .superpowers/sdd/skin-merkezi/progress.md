# Skin Merkezi — İlerleme Defteri

**Plan:** `docs/superpowers/plans/2026-10-29-skin-merkezi.md`
**Spec:** `docs/superpowers/specs/2026-10-29-skin-merkezi-design.md`
**Dal:** `main` (proje alışkanlığı: doğrudan main; yayın ayrı adım)
**Sürüm hedefi:** 0.4.0

## Kurallar (brief)

- Her görev: test yaz → FAIL gör → uygula → PASS → commit.
- Canlı Mojang hesabına yazma testi yok; yükleme yalnız kullanıcı "Giy" deyince.
- Mojang yazma yollarında 60 sn soğuma, 429'da otomatik tekrar yok.
- Tüm dosya işlemleri `%APPDATA%\.yikimlient` altında; yol taşması reddedilir.
- UI değişikliğinden sonra `npm run ui-dist` (resources/ui izleniyor).
- PowerShell `Set-Content -Encoding UTF8` mojibake üretir → `edit`/`write` kullan.

## Görevler

| # | Görev | Durum |
|---|---|---|
| 1 | Rust: PNG doğrulama + yerel kitaplık | tamam (`a8ad392`) |
| 2 | Rust: Mojang istemcisi, yedek, soğuma | tamam (`f03435b`) |
| 3 | Rust: Tauri komutları + kayıt | tamam (`ccf0b46`) |
| 4 | Sahne: pelerin + tuval dokusu | tamam (`27da111`) |
| 5 | Editör çekirdeği + Node testleri | tamam (`88bf2b4`) |
| 6 | UI: skin merkezi sayfası | tamam (`3a090a7`) |
| 7 | UI: skin editörü | tamam (`bd25e3e`, kayıt düzeltmesi `872d2bb`) |
| 8 | İkonlar ve stiller | tamam (`aabd098`) |
| 9 | Onboarding + modal düzeltmeleri | tamam (`ca38bcd`) |
| 10 | Deneme alanını kaldır | tamam (`c1056ff`) |
| 11 | Mock harness | tamam (`3d0179c`) |
| 12 | Görsel doğrulama + 0.4.0 | tamam (`331d89a` sürüm) |

## Kararlar

- 2026-10-29: `main` üzerinde doğrudan çalışılacak (proje alışkanlığı).
- 2026-10-29: Pelerin tıklanınca anında uygulanır; skin "seç + Giy" akışı.
- 2026-10-29: Varsayılan Steve/Alex kartları `cmd_skin_hub` → `varsayilanlar` alanından.
- 2026-10-29: Editör "Kaydet ve Giy" önce `cmd_skin_kaydet` ile kitaplığa yazar,
  dönen `kayit.id` ile `cmd_skin_giy_kitaplik` çağırır → seçim/rozet korunur.
- 2026-10-29: Katalog kartı tek tık = seç + önizleme ("SEÇİLİ"), çift tık = giy onayı.
- 2026-10-29: Onboarding hesap adımı modal açmaz; MS + offline giriş kart içinde satır içi.
- 2026-10-29: Emote Deneme Alanı tamamen kaldırıldı; yerine Skin Merkezi ray öğesi.

## Günlük

- 2026-10-29: Task 1–10 commit'lendi. `skins.rs` 15 test, editör çekirdeği 8 Node testi geçti.
- 2026-10-29: Mock harness ile canlı doğrulama: katalog (6 kart, 4 pelerin + çıkar),
  premium kapı (hub çağrısı 0), editör açılışı, "Kaydet ve Giy" onay modalı (z 4000 > 3900),
  kaydet+giy → yeni kayıt seçili + "GİYİLİ" + ana sahne geri, pelerin tak/çıkar,
  çift tık onay/iptal, tek-seçim rozetleri, dosya ile skin ekleme, onboarding offline + MS,
  giriş modalı tekilliği + Escape + `aria-modal`. Tüm adımlarda `__BOOT_ERRORS__` boş.
- 2026-10-29: `npm run check`, 8 Node testi, 15 Rust testi geçti.
