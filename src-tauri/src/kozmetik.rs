//! KOZMETİK — özel pelerin ve elitra (launcher tarafı).
//!
//! Modun okuduğu tek şey iki dosya: `.yikim/pelerin.png` ve `.yikim/elytra.png`
//! (64×32 doku). Launcher artık kullanıcıdan HAZIR ATLASI alır: editör vanilla
//! `ModelPart` UV düzenini birebir gösterir, kullanıcı bütün yüzleri kendisi
//! boyar. Burada yalnız renk listesi ↔ PNG dönüşümü yapılır; hiçbir yüz
//! otomatik doldurulmaz (eskiden yan/alt yüzler türetiliyordu ve oyunda kötü
//! görünüyordu).
//!
//!   PELERİN  texOffs(0,0) 10×16×1        ELİTRA  texOffs(22,0) 10×20×2
//!   ön    (1,1) 10×16                    dış yüz (24,2) 10×20
//!   arka  (12,1) 10×16                   iç yüz  (36,2) 10×20
//!   yanlar (0,1) / (11,1) 1×16           yanlar  (22,2) / (34,2) 2×20
//!   üst   (1,0) 10×1                     üst     (24,0) 10×2
//!   alt   (11,0) 10×1                    alt     (34,0) 10×2
//!
//! Dosyalar tüm kurulumlara yazılır (rozet ile aynı mekanizma) ve presence
//! sunucusuna `kc` / `ke` alanlarıyla yüklenir → aynı sunucudaki diğer
//! YIKIMLient oyuncuları da görür.

use base64::Engine as _;
use image::ImageEncoder as _;

/// Doku boyutu — vanilla pelerin/elitra atlası.
pub const DOKU_G: u32 = 64;
pub const DOKU_Y: u32 = 32;
/// Bir atlastaki piksel sayısı (64×32).
pub const ATLAS_PIKSEL: usize = (DOKU_G * DOKU_Y) as usize;

/// Sunucu ayarlı değilse kullanılan varsayılan uç (mod aynı adresi kullanır).
pub const VARSAYILAN_UCAK: &str = "https://yikim-presence.onrender.com/presence";

/// Presence uç noktası: config'te geçerli bir http(s) adresi varsa o.
pub fn ucak(cfg: &crate::config::YikimConfig) -> String {
    cfg.presence_url
        .as_deref()
        .map(str::trim)
        .filter(|u| u.starts_with("http://") || u.starts_with("https://"))
        .unwrap_or(VARSAYILAN_UCAK)
        .to_string()
}

/// "#rrggbb" ya da "" (saydam) → RGBA.
fn hex_oku(ham: &str) -> Option<[u8; 4]> {
    let metin = ham.trim().trim_start_matches('#');
    if metin.is_empty() {
        return None; // boş piksel → saydam
    }
    if metin.len() != 6 {
        return None;
    }
    let parca = |s: &str| u8::from_str_radix(s, 16).ok();
    Some([
        parca(&metin[0..2])?,
        parca(&metin[2..4])?,
        parca(&metin[4..6])?,
        255,
    ])
}

fn png_kodla(img: &image::RgbaImage) -> Result<Vec<u8>, String> {
    let mut cikti: Vec<u8> = Vec::new();
    image::codecs::png::PngEncoder::new(&mut cikti)
        .write_image(img.as_raw(), DOKU_G, DOKU_Y, image::ExtendedColorType::Rgba8)
        .map_err(|e| format!("png yazılamadı: {e}"))?;
    Ok(cikti)
}

/// 64×32 renk listesini (satır satır, sol→sağ) PNG'ye çevir.
///
/// Her girdi "#rrggbb" ya da "" (saydam). Yüzler arasında hiçbir dönüşüm
/// yapılmaz — liste oyunun gördüğü atlasın birebir kendisidir.
pub fn atlas_png(pikseller: &[String]) -> Result<Vec<u8>, String> {
    if pikseller.len() != ATLAS_PIKSEL {
        return Err(format!(
            "{ATLAS_PIKSEL} piksel bekleniyordu, {} geldi",
            pikseller.len()
        ));
    }
    let mut pafta = image::RgbaImage::new(DOKU_G, DOKU_Y);
    for (i, ham) in pikseller.iter().enumerate() {
        let Some(renk) = hex_oku(ham) else { continue };
        let x = (i as u32) % DOKU_G;
        let y = (i as u32) / DOKU_G;
        pafta.put_pixel(x, y, image::Rgba(renk));
    }
    png_kodla(&pafta)
}

/// Bir 64×32 PNG dosyasını renk listesine geri oku. Farklı boyut → None.
fn paftadan_atlas(yol: &std::path::Path) -> Option<Vec<String>> {
    bayttan_atlas(&std::fs::read(yol).ok()?)
}

/// Bellekteki PNG → 64×32 renk listesi. Farklı boyut → None.
fn bayttan_atlas(bayt: &[u8]) -> Option<Vec<String>> {
    let img = image::load_from_memory(bayt).ok()?.to_rgba8();
    if img.width() != DOKU_G || img.height() != DOKU_Y {
        return None;
    }
    let mut cikti = Vec::with_capacity(ATLAS_PIKSEL);
    for p in img.pixels() {
        cikti.push(if p[3] < 8 {
            String::new()
        } else {
            format!("#{:02x}{:02x}{:02x}", p[0], p[1], p[2])
        });
    }
    Some(cikti)
}

fn ana_yol(ad: &str) -> std::path::PathBuf {
    crate::core::app_dir().join(ad)
}

fn kurulum_yolu(inst: &crate::instances::Instance, ad: &str) -> std::path::PathBuf {
    inst.dir().join(".yikim").join(ad)
}

/// 64×32 atlası ana kopyadan, yoksa kurulumlardan oku.
pub fn dosyadan_atlas(ad: &str) -> Option<Vec<String>> {
    if let Some(p) = paftadan_atlas(&ana_yol(ad)) {
        return Some(p);
    }
    for inst in crate::instances::list() {
        if let Some(p) = paftadan_atlas(&kurulum_yolu(&inst, ad)) {
            return Some(p);
        }
    }
    None
}

/// Kayıtlı pelerin atlası (2048 renk).
pub fn yerel_pelerin() -> Option<Vec<String>> {
    dosyadan_atlas("pelerin.png")
}

/// Kayıtlı elitra atlası (2048 renk).
pub fn yerel_kanat() -> Option<Vec<String>> {
    dosyadan_atlas("elytra.png")
}

// ---------------------------------------------------------------- varsayılan
//
// Gömülü YIKIM pelerin/elitrası. Hiç tasarım kaydedilmemişse (yeni hesap,
// doğrulanmamış hesap) oyunda bu görünür; kullanıcı aç/kapa ile kapatabilir.
// Aynı PNG'ler modun kaynaklarında da durur (dosya hiç yazılamazsa mod
// gömülü dokuyu kullanır). `tools/varsayilan-kozmetik.mjs` üretir.

pub const VARSAYILAN_PELERIN: &[u8] = include_bytes!("../resources/kozmetik/pelerin.png");
pub const VARSAYILAN_KANAT: &[u8] = include_bytes!("../resources/kozmetik/elytra.png");

/// Gömülü varsayılan PNG (ad → bayt).
pub fn varsayilan_png(ad: &str) -> Option<&'static [u8]> {
    match ad {
        "pelerin.png" => Some(VARSAYILAN_PELERIN),
        "elytra.png" => Some(VARSAYILAN_KANAT),
        _ => None,
    }
}

/// Gömülü varsayılan atlas (UI önizlemesi için renk listesi).
pub fn varsayilan_atlas(kanat: bool) -> Option<Vec<String>> {
    bayttan_atlas(if kanat { VARSAYILAN_KANAT } else { VARSAYILAN_PELERIN })
}

/// Ana kopya yoksa gömülü varsayılanı yaz; kozmetik etkinse kurulumlara da
/// yaz. Zaten var olan tasarıma ASLA dokunmaz.
pub fn varsayilani_kur(ad: &str) -> usize {
    let Some(png) = varsayilan_png(ad) else {
        return 0;
    };
    let yol = ana_yol(ad);
    if !yol.is_file() {
        if let Some(ust) = yol.parent() {
            let _ = std::fs::create_dir_all(ust);
        }
        if std::fs::write(&yol, png).is_err() {
            return 0;
        }
    }
    if aktif(ad) {
        kurulumlara_yaz(ad, png)
    } else {
        0
    }
}

/// Kurulumdaki "kapalı" işareti (mod: dosya yok ama kozmetik de kapalı).
fn kurulum_kapali_yolu(inst: &crate::instances::Instance, ad: &str) -> std::path::PathBuf {
    inst.dir().join(".yikim").join(format!("{ad}.kapali"))
}

/// "Kapalı" işaretini tüm kurulumlara yaz (mod vanilla görünüm kullanır).
pub fn kapali_imleri_yaz(ad: &str) -> usize {
    let mut sayi = 0usize;
    for inst in crate::instances::list() {
        let dir = inst.dir().join(".yikim");
        if std::fs::create_dir_all(&dir).is_err() {
            continue;
        }
        if std::fs::write(kurulum_kapali_yolu(&inst, ad), b"").is_ok() {
            sayi += 1;
        }
    }
    sayi
}

/// Kurulumlardaki "kapalı" işaretlerini sil.
pub fn kapali_imleri_sil(ad: &str) {
    for inst in crate::instances::list() {
        let _ = std::fs::remove_file(kurulum_kapali_yolu(&inst, ad));
    }
}

/// Hesap özel pelerin/elitra ÇİZEBİLİR mi? (doğrulandı + izin + "Yol Silindiri")
///
/// Rol Discord'da düşürüldüğünde bu `false` olur ve hesabın özel tasarımı
/// oyunda/launcher'da gösterilmez; tasarım hesap deposunda korunur, rol geri
/// gelince aynen geri yüklenir.
pub fn ozel_izinli(anahtar: &str) -> bool {
    crate::hesap_yetki::cizim_izinli(&crate::hesap_yetki::yerel_yetki(anahtar))
}

/// Ana kopyanın "kapalı" işaretini yaz/sil (hesap bazlı aç/kapa ana kopyaya da
/// yansısın: `aktif()` ve `varsayilani_kur()` buna bakıyor).
fn ana_kapali_ayarla(ad: &str, kapali: bool) {
    if kapali {
        let _ = std::fs::write(kapali_yol(ad), b"");
    } else {
        let _ = std::fs::remove_file(kapali_yol(ad));
    }
}

/// Ana kopyadaki tasarımı hesap deposuna yedekle (depoda yoksa).
///
/// Rol düşünce ana kopya gömülü varsayılana çevrilir; kullanıcının çizimi
/// kaybolmasın diye önce buraya taşınır. Gömülü varsayılanın kendisi yedeklenmez.
fn ana_kopyayi_yedekle(anahtar: &str, ad: &str) {
    if crate::guvenlik::hesap_kozmetik_oku(anahtar, ad).is_some() {
        return;
    }
    let Ok(png) = std::fs::read(ana_yol(ad)) else {
        return;
    };
    if varsayilan_png(ad).is_some_and(|v| v == png.as_slice()) {
        return;
    }
    let _ = crate::guvenlik::hesap_kozmetik_yaz(anahtar, ad, &png);
}

/// Kurulumlardaki `.yikim/aktif-hesap` işaretinden ÖNCEKİ hesabı oku.
/// Kozmetik ana kopyası hesap değişiminde değiştirilmeden önce sahibini bulmak
/// için kullanılır (eski sürümlerde tasarım yalnız ana kopyada duruyordu).
fn onceki_aktif_anahtar() -> Option<String> {
    for inst in crate::instances::list() {
        let Ok(s) = std::fs::read_to_string(inst.dir().join(".yikim").join("aktif-hesap")) else {
            continue;
        };
        let s = s.trim();
        if !s.is_empty() {
            return Some(s.to_string());
        }
    }
    None
}

/// Hesap deposu hiç kullanılmamış mı? (eski sürümden gelen tek kopya tasarım)
fn hesap_deposu_bos() -> bool {
    let dir = crate::guvenlik::guvenlik_dir().join("kozmetik");
    match std::fs::read_dir(dir) {
        Ok(mut d) => d.next().is_none(),
        Err(_) => true,
    }
}

/// Gömülü varsayılanı ZORLA yaz (ana kopya + etkinse kurulumlar).
///
/// `varsayilani_kur`dan farkı: ana kopya dolu olsa bile üzerine yazar. Rolü
/// düşen hesabın özel tasarımı böylece ana kopyadan (ve dolayısıyla önizleme
/// komutlarından) tamamen kaldırılır.
pub fn varsayilani_zorla(ad: &str) -> usize {
    let Some(png) = varsayilan_png(ad) else {
        return 0;
    };
    let yol = ana_yol(ad);
    if let Some(ust) = yol.parent() {
        let _ = std::fs::create_dir_all(ust);
    }
    let mut sayi = 0usize;
    if std::fs::write(&yol, png).is_ok() {
        sayi += 1;
    }
    kucuk_sil(ad);
    if aktif(ad) {
        sayi += kurulumlara_yaz(ad, png);
    }
    sayi
}

/// Bir hesabın kozmetik durumunu kurulumlara uygula (hesap değişince).
///
/// Sıra: önceki hesabın dosya/işaretleri temizlenir → hesap "kapalı" dediyse
/// yalnız işaret yazılır → tasarım varsa yazılır → hiçbiri yoksa mod gömülü
/// varsayılanı gösterir.
///
/// ROL KİLİDİ: hesap "Yol Silindiri" rolünü taşımıyorsa (ya da doğrulanmadıysa)
/// özel tasarım oyuna YAZILMAZ — ana kopya ve kurulumlar gömülü varsayılana
/// çevrilir. Tasarım hesap deposunda kalır; rol geri gelince yeniden yüklenir.
pub fn hesap_durumunu_uygula(anahtar: &str) -> usize {
    // Aynı anda iki yoklama (arayüz + arka plan) çalışabilir: dosya silme/yazma
    // sırası karışmasın diye tek kilit.
    static KILIT: std::sync::Mutex<()> = std::sync::Mutex::new(());
    let _kilit = KILIT.lock().unwrap_or_else(|e| e.into_inner());
    let mut yazilan = 0usize;
    let izinli = ozel_izinli(anahtar);
    for ad in ["pelerin.png", "elytra.png"] {
        tum_kurulumlardan_sil(ad);
        kapali_imleri_sil(ad);
        let kapali = crate::guvenlik::hesap_kozmetik_kapali(anahtar, ad);
        ana_kapali_ayarla(ad, kapali);
        if !izinli {
            // Özel tasarımı önce hesap deposuna al, sonra her yerde varsayılana
            // dön. Ana kopya da varsayılan olur → önizleme sızdırmaz.
            ana_kopyayi_yedekle(anahtar, ad);
            yazilan += varsayilani_zorla(ad);
            if kapali {
                kapali_imleri_yaz(ad);
            }
            continue;
        }
        if kapali {
            kapali_imleri_yaz(ad);
            continue;
        }
        if let Some(png) = crate::guvenlik::hesap_kozmetik_oku(anahtar, ad) {
            yazilan += tum_kurulumlara_yaz(ad, &png);
            kucuk_yaz(ad, &png);
        } else {
            // Depoda bu hesabın tasarımı yok. Ana kopyada kalan çizim ESKİ
            // sürümden (hesap deposu yokken) gelmiş olabilir → silinmesin:
            // önceki etkin hesaba (yoksa, depo hiç kullanılmamışsa bu hesaba)
            // yedekle, sonra her yerde varsayılana dön. Böylece hem eski çizim
            // korunur hem de başka hesabın tasarımı bu hesaba geçmez.
            if let Some(onceki) = onceki_aktif_anahtar().filter(|o| o != anahtar) {
                ana_kopyayi_yedekle(&onceki, ad);
            } else if hesap_deposu_bos() {
                ana_kopyayi_yedekle(anahtar, ad);
            }
            yazilan += varsayilani_zorla(ad);
        }
    }
    yazilan
}

/// PNG'yi ana kopyaya + tüm kurulumların `.yikim/` klasörüne yaz.
pub fn tum_kurulumlara_yaz(ad: &str, png: &[u8]) -> usize {
    // Elle çizilen 64×32 atlas: eski HD fotoğrafın küçük kopyası silinir,
    // yoksa mod presence'a eski fotoğrafı göndermeye devam ederdi.
    if let Some((g, y)) = png_boyut(png) {
        if g <= DOKU_G && y <= DOKU_Y {
            kucuk_sil(ad);
        }
    }
    let mut sayi = 0usize;
    if std::fs::write(ana_yol(ad), png).is_ok() {
        sayi += 1;
    }
    // Pasife alınmış kozmetik: ana kopya güncellenir ama oyuna yazılmaz.
    if !aktif(ad) {
        kurulumlardan_sil(ad);
        return sayi;
    }
    sayi + kurulumlara_yaz(ad, png)
}

/// PNG'yi yalnız kurulumların `.yikim/` klasörüne yaz (ana kopya dokunulmaz).
pub fn kurulumlara_yaz(ad: &str, png: &[u8]) -> usize {
    let mut sayi = 0usize;
    for inst in crate::instances::list() {
        let dir = inst.dir().join(".yikim");
        if std::fs::create_dir_all(&dir).is_err() {
            continue;
        }
        if std::fs::write(kurulum_yolu(&inst, ad), png).is_ok() {
            sayi += 1;
        }
    }
    sayi
}

/// Yalnız kurulum kopyalarını sil — ana kopya (düzenlenebilir tasarım) kalır.
pub fn kurulumlardan_sil(ad: &str) -> usize {
    kucuk_sil(ad);
    let mut sayi = 0usize;
    for inst in crate::instances::list() {
        if std::fs::remove_file(kurulum_yolu(&inst, ad)).is_ok() {
            sayi += 1;
        }
    }
    sayi
}

/// "Kapalı" işareti: ana kopya dursa da oyunda vanilla görünüm kullanılır.
fn kapali_yol(ad: &str) -> std::path::PathBuf {
    ana_yol(&format!("{ad}.kapali"))
}

/// Kozmetik oyunda etkin mi? (işaret dosyası yoksa etkin)
pub fn aktif(ad: &str) -> bool {
    !kapali_yol(ad).exists()
}

/// Etkin/pasif ayarını yazıp kurulum dosyalarını buna göre güncelle.
pub fn aktif_ayarla(ad: &str, acik: bool) -> Result<(), String> {
    if acik {
        let _ = std::fs::remove_file(kapali_yol(ad));
        kapali_imleri_sil(ad);
        // Tasarım hiç yoksa gömülü varsayılan yazılır: anahtar "açık"
        // görünürken oyunda hiçbir şey görünmemesi hatası buradan geliyordu.
        varsayilani_kur(ad);
        if let Ok(png) = std::fs::read(ana_yol(ad)) {
            kurulumlara_yaz(ad, &png);
            // küçük (sunucu) kopya da geri gelsin — yoksa diğer oyuncular
            // dokuyu kaybederdi
            if let Ok(kucuk) = std::fs::read(ana_yol(&kucuk_ad(ad))) {
                for inst in crate::instances::list() {
                    let _ = std::fs::write(kurulum_yolu(&inst, &kucuk_ad(ad)), &kucuk);
                }
            }
        }
    } else {
        std::fs::write(kapali_yol(ad), b"").map_err(|e| format!("işaret yazılamadı: {e}"))?;
        // Mod, ana klasörü göremez: kurulum klasörüne de işaret yazılır.
        kapali_imleri_yaz(ad);
        kurulumlardan_sil(ad);
    }
    Ok(())
}

/// Ana kopyanın base64 hâli (etkinleştirince sunucuya geri yüklemek için).
pub fn ana_b64(ad: &str) -> Option<String> {
    std::fs::read(ana_yol(ad)).ok().map(|png| b64(&png))
}

// ---------------------------------------------------------------- HD fotoğraf
//
// Fotoğraftan gelen kozmetikler 64×32 ile sınırlı değil: dosya olduğu gibi
// yazılır (64×32'nin tam katı olacak şekilde üretilir). Mod dokuyu kendi
// çözünürlüğünde yükler, UV'ler 64×32 ızgarasına göre normalize olduğu için
// oyunda da aynı şekilde örtünür.

/// Base64 PNG'yi çöz.
pub fn png_coz(metin: &str) -> Result<Vec<u8>, String> {
    base64::engine::general_purpose::STANDARD
        .decode(metin.trim().as_bytes())
        .map_err(|e| format!("görsel çözülemedi: {e}"))
}

/// PNG boyutu (genişlik, yükseklik).
pub fn png_boyut(png: &[u8]) -> Option<(u32, u32)> {
    let img = image::load_from_memory(png).ok()?;
    Some((img.width(), img.height()))
}

/// Sunucuya gönderilecek KÜÇÜK (64×32) sürüm.
///
/// Presence sunucusu istek gövdesini ~32 KB ile sınırlıyor; HD görsel oraya
/// sığmaz. Bu yüzden diğer oyunculara 64×32 kopya gider, HD sürüm yerelde ve
/// aynı makinede çalışan oyunda kullanılır.
pub fn kucuk_png_b64(png: &[u8]) -> Option<String> {
    let img = image::load_from_memory(png).ok()?;
    let kucuk = img
        .resize_exact(DOKU_G, DOKU_Y, image::imageops::FilterType::Lanczos3)
        .to_rgba8();
    let mut cikti: Vec<u8> = Vec::new();
    image::codecs::png::PngEncoder::new(&mut cikti)
        .write_image(kucuk.as_raw(), DOKU_G, DOKU_Y, image::ExtendedColorType::Rgba8)
        .ok()?;
    Some(b64(&cikti))
}

/// Vanilla varsayılan doku (elytra/pelerin) — oyun jar'ından okunur.
///
/// Kullanıcının "düz dikdörtgen" seçiminde fotoğraf varsayılan dokunun
/// ÜZERİNE maske gibi biner: fotoğrafın saydam kaldığı yerlerde varsayılan
/// doku görünür, boş kalan yerler boş kalır.
fn vanilla_doku(kanat: bool) -> Option<image::RgbaImage> {
    let girisler: &[&str] = if kanat {
        &[
            // 1.21.5+ eski "equipment/wings" yoluna tasindi
            "assets/minecraft/textures/entity/equipment/wings/elytra.png",
            "assets/minecraft/textures/entity/elytra.png",
            "assets/minecraft/textures/entity/elytra/elytra.png",
        ]
    } else {
        &[
            "assets/minecraft/textures/entity/cape/cape.png",
            "assets/minecraft/textures/entity/cape.png",
        ]
    };
    let dizin = crate::core::versions_dir();
    let oku = std::fs::read_dir(&dizin).ok()?;
    for kayit in oku.flatten() {
        let yol = kayit.path();
        let ad = yol.file_name()?.to_string_lossy().to_string();
        let jar = yol.join(format!("{ad}.jar"));
        if !jar.is_file() {
            continue;
        }
        let Ok(dosya) = std::fs::File::open(&jar) else {
            continue;
        };
        let Ok(mut arsiv) = zip::ZipArchive::new(dosya) else {
            continue;
        };
        for giris in girisler {
            let Ok(mut parca) = arsiv.by_name(giris) else {
                continue;
            };
            let mut bayt: Vec<u8> = Vec::new();
            if std::io::Read::read_to_end(&mut parca, &mut bayt).is_err() {
                continue;
            }
            if let Ok(gorsel) = image::load_from_memory(&bayt) {
                return Some(gorsel.to_rgba8());
            }
        }
    }
    None
}

/// "Düz dikrörtgen" elitra: fotoğrafı VANILLA kanat silüetine maskele.
///
/// Varsayılan elitra dokusunun (oyun jar'ından okunur) saydam pikselleri
/// saydam kalır — yani köşeler boş, kanat şekli korunur. Fotoğraf, kendi dolu
/// alanından kanadın sınırlayıcı kutusuna gerilerek yerleştirilir.
///
/// Vanilla doku bulunamazsa `None` (fotoğraf olduğu gibi kalır).
pub fn elytra_maskele(png: &[u8]) -> Option<Vec<u8>> {
    let foto = image::load_from_memory(png).ok()?.to_rgba8();
    let taban = vanilla_doku(true)?;
    let (g, y) = (foto.width(), foto.height());
    let (tg, ty) = (taban.width(), taban.height());
    if g < tg || y < ty {
        return None;
    }
    // Fotoğraf atlasın tamamına (64×32 ızgarasına) yerleşmiş durumda; burada
    // YALNIZ saydamlık kırpılır: vanilla elitranın boş bıraktığı her piksel
    // saydam olur, dolu yerlerde fotoğraf kendi kalitesinde kalır. Böylece
    // "şekil" seçimi fotoğrafı esnetmeden gerçek kanat silüetini verir.
    let mut cikti = foto;
    for py in 0..y {
        let vy = (py * ty / y).min(ty - 1);
        for px in 0..g {
            let vx = (px * tg / g).min(tg - 1);
            if taban.get_pixel(vx, vy)[3] == 0 {
                cikti.get_pixel_mut(px, py)[3] = 0;
            }
        }
    }
    let mut veri: Vec<u8> = Vec::new();
    image::codecs::png::PngEncoder::new(&mut veri)
        .write_image(cikti.as_raw(), g, y, image::ExtendedColorType::Rgba8)
        .ok()?;
    Some(veri)
}

/// HD dokunun yanına yazılan 64×32 kopyanın dosya adı.
fn kucuk_ad(ad: &str) -> String {
    match ad {
        "pelerin.png" => "pelerin.kucuk.png".to_string(),
        "elytra.png" => "elytra.kucuk.png".to_string(),
        _ => format!("{ad}.kucuk.png"),
    }
}

/// PNG'yi 64×32'ye indir (PNG olarak).
pub fn kucuk_png(png: &[u8]) -> Option<Vec<u8>> {
    let img = image::load_from_memory(png).ok()?;
    if img.width() <= DOKU_G && img.height() <= DOKU_Y {
        return Some(png.to_vec());
    }
    let kucuk = img
        .resize_exact(DOKU_G, DOKU_Y, image::imageops::FilterType::Lanczos3)
        .to_rgba8();
    let mut cikti: Vec<u8> = Vec::new();
    image::codecs::png::PngEncoder::new(&mut cikti)
        .write_image(kucuk.as_raw(), DOKU_G, DOKU_Y, image::ExtendedColorType::Rgba8)
        .ok()?;
    Some(cikti)
}

/// 64×32 kopyayı ana klasöre + tüm kurulumlara yaz.
///
/// Mod, presence sunucusuna (gövde ~32 KB sınırı) bu küçük dosyayı gönderir;
/// oyunda ise HD dosyayı kullanır. Böylece diğer oyuncular da bir doku görür.
pub fn kucuk_yaz(ad: &str, png: &[u8]) -> usize {
    let Some(kucuk) = kucuk_png(png) else {
        return 0;
    };
    let mut sayi = 0usize;
    if std::fs::write(ana_yol(&kucuk_ad(ad)), &kucuk).is_ok() {
        sayi += 1;
    }
    for inst in crate::instances::list() {
        let dir = inst.dir().join(".yikim");
        if std::fs::create_dir_all(&dir).is_err() {
            continue;
        }
        if std::fs::write(kurulum_yolu(&inst, &kucuk_ad(ad)), &kucuk).is_ok() {
            sayi += 1;
        }
    }
    sayi
}

/// 64×32 kopyayı sil (ana klasör + kurulumlar).
pub fn kucuk_sil(ad: &str) {
    let _ = std::fs::remove_file(ana_yol(&kucuk_ad(ad)));
    for inst in crate::instances::list() {
        let _ = std::fs::remove_file(kurulum_yolu(&inst, &kucuk_ad(ad)));
    }
}

/// Ana kopyayı ve tüm kurulumlardaki dosyayı sil.
pub fn tum_kurulumlardan_sil(ad: &str) -> usize {
    kucuk_sil(ad);
    let mut sayi = 0usize;
    // Kozmetik tamamen kaldırılırken "kapalı" işareti de silinir.
    let _ = std::fs::remove_file(kapali_yol(ad));
    if std::fs::remove_file(ana_yol(ad)).is_ok() {
        sayi += 1;
    }
    for inst in crate::instances::list() {
        if std::fs::remove_file(kurulum_yolu(&inst, ad)).is_ok() {
            sayi += 1;
        }
    }
    sayi
}

/// Kozmetikleri presence sunucusuna yaz.
///
/// `pelerin` / `kanat`: base64 PNG, `Some("")` → sunucudan kaldır, `None` →
/// dokunma. Sunucu yoksa sessiz hata — yerel dosya yine geçerlidir.
pub async fn sunucuya_yukle(
    uuid: &str,
    isim: &str,
    pelerin: Option<String>,
    kanat: Option<String>,
    ucak: &str,
) -> Result<(), String> {
    if uuid.trim().is_empty() {
        return Err("hesap uuid yok".into());
    }
    let mut govde = serde_json::json!({ "u": uuid.trim(), "n": isim.trim() });
    if let Some(p) = pelerin {
        govde["kc"] = serde_json::Value::String(p);
    }
    if let Some(k) = kanat {
        govde["ke"] = serde_json::Value::String(k);
    }
    let yanit = crate::core::http_client()
        .post(ucak)
        .json(&govde)
        .timeout(std::time::Duration::from_secs(8))
        .send()
        .await
        .map_err(|e| format!("sunucuya ulaşılamadı: {e}"))?;
    if !yanit.status().is_success() {
        return Err(format!("sunucu {} döndü", yanit.status()));
    }
    Ok(())
}

/// PNG'yi base64'e çevir (sunucu alanı için).
pub fn b64(png: &[u8]) -> String {
    base64::engine::general_purpose::STANDARD.encode(png)
}

/// Gidiş-dönüş testleri: atlasın bozulmadan yazılıp okunduğunu doğrular.
#[cfg(test)]
mod testler {
    use super::*;

    fn boya(liste: &mut [String], x: u32, y: u32, renk: &str) {
        liste[(y * DOKU_G + x) as usize] = renk.to_string();
    }

    fn piksel(png: &[u8], x: u32, y: u32) -> [u8; 4] {
        let img = image::load_from_memory(png).expect("png").to_rgba8();
        img.get_pixel(x, y).0
    }

    #[test]
    fn atlas_png_birebir() {
        let mut liste = vec![String::new(); ATLAS_PIKSEL];
        boya(&mut liste, 0, 0, "#ff8a3d");
        boya(&mut liste, 1, 1, "#22c55e");
        boya(&mut liste, 45, 21, "#3d5afe");
        let png = atlas_png(&liste).expect("atlas");
        assert_eq!(piksel(&png, 0, 0), [0xff, 0x8a, 0x3d, 0xff]);
        assert_eq!(piksel(&png, 1, 1), [0x22, 0xc5, 0x5e, 0xff]);
        assert_eq!(piksel(&png, 45, 21), [0x3d, 0x5a, 0xfe, 0xff]);
        // dokunulmayan piksel saydam kalmalı
        assert_eq!(piksel(&png, 63, 31)[3], 0);
    }

    #[test]
    fn atlas_boyut_hatasi() {
        let liste = vec![String::new(); 10];
        assert!(atlas_png(&liste).is_err());
    }

    #[test]
    fn gidis_donus_ayni() {
        let mut liste = vec![String::new(); ATLAS_PIKSEL];
        boya(&mut liste, 24, 2, "#46515d");
        boya(&mut liste, 36, 20, "#77889a");
        let png = atlas_png(&liste).expect("atlas");
        let tmp = std::env::temp_dir().join("yikim-kozmetik-atlas-test.png");
        std::fs::write(&tmp, &png).expect("yaz");
        let geri = paftadan_atlas(&tmp).expect("okunamadı");
        let _ = std::fs::remove_file(&tmp);
        assert_eq!(geri.len(), ATLAS_PIKSEL);
        assert_eq!(geri[(2 * DOKU_G + 24) as usize], "#46515d");
        assert_eq!(geri[(20 * DOKU_G + 36) as usize], "#77889a");
        assert_eq!(geri[(0 * DOKU_G + 0) as usize], "");
    }
}

#[cfg(test)]
mod maske_testleri {
    use image::ImageEncoder;
    // "Duz dikdortgen" elitra maskesi: kanat silueti korunur, koseler bos kalir.
    #[test]
    fn elytra_silueti_korunur() {
        let mut foto = image::RgbaImage::new(640, 320);
        for y in 20..210u32 {
            for x in 360..460u32 {
                foto.put_pixel(x, y, image::Rgba([200, 60, 20, 255]));
            }
        }
        let mut ham: Vec<u8> = Vec::new();
        image::codecs::png::PngEncoder::new(&mut ham)
            .write_image(foto.as_raw(), 640, 320, image::ExtendedColorType::Rgba8)
            .unwrap();
        let Some(cikti) = super::elytra_maskele(&ham) else {
            eprintln!("vanilla elytra dokusu bulunamadi - test atlandi");
            return;
        };
        let maske = image::load_from_memory(&cikti).unwrap().to_rgba8();
        assert_eq!(maske.dimensions(), (640, 320));
        assert_eq!(maske.get_pixel(10, 10)[3], 0, "bos alan bos kalmali");
        let dolu = maske.pixels().filter(|p| p[3] > 0).count();
        assert!(dolu > 500, "kanat dokusu olusmali, dolu={dolu}");
    }
}
