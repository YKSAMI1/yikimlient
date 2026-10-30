//! KOZMETİK — özel pelerin ve elitra kanadı (launcher tarafı).
//!
//! Modun okuduğu tek şey iki dosya: `.yikim/pelerin.png` ve `.yikim/elytra.png`
//! (64×32 doku). Launcher kullanıcıdan aldığı küçük tasarımı (pelerin 10×16,
//! kanat 10×20) VANILLA UV düzenine yerleştirir:
//!
//!   PELERİN (64×32)          ELİTRA (64×32)
//!   ön  : (1,1) 10×16        dış yüz : (24,2) 10×20
//!   arka: (12,1) 10×16 ayna  iç yüz  : (36,2) 10×20 ayna
//!   yanlar (0,1)/(11,1)      yanlar (22,2)/(34,2)
//!   üst/alt (1,0)/(1,17)     üst (24,0)/(36,0) 2 piksel
//!
//! UV'ler oyunun kendi modellerinden çıkarıldı (CapeFeatureRenderer cuboid
//! 10×16×1, ElytraEntityModel iki kanat da uv(22,0) — kanatlar AYNA olduğu
//! için elitra tasarımı simetriktir).
//!
//! Dosyalar tüm kurulumlara yazılır (rozet ile aynı mekanizma) ve presence
//! sunucusuna `kc` / `ke` alanlarıyla yüklenir → aynı sunucudaki diğer
//! YIKIMLient oyuncuları da görür.

use base64::Engine as _;
use image::ImageEncoder as _;

/// Pelerin tasarım ızgarası (vanilla ön panel boyutu).
pub const PELERIN_G: u32 = 10;
pub const PELERIN_Y: u32 = 16;
/// Elitra kanat tasarım ızgarası (kanat dış yüzü).
pub const KANAT_G: u32 = 10;
pub const KANAT_Y: u32 = 20;

/// Doku boyutu — vanilla pelerin/elitra paftası.
const DOKU_G: u32 = 64;
const DOKU_Y: u32 = 32;

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

/// Izgarayı 64×32 RGBA paftaya yerleştir (verilen dikdörtgene, istenirse aynalı).
fn oturt(
    pafta: &mut image::RgbaImage,
    pikseller: &[String],
    genislik: u32,
    yukseklik: u32,
    konum: (u32, u32),
    ayna: bool,
) {
    for y in 0..yukseklik {
        for x in 0..genislik {
            let kaynak_x = if ayna { genislik - 1 - x } else { x };
            let indeks = (y * genislik + kaynak_x) as usize;
            let renk = pikseller
                .get(indeks)
                .and_then(|h| hex_oku(h))
                .unwrap_or([0, 0, 0, 0]);
            let hedef_x = konum.0 + x;
            let hedef_y = konum.1 + y;
            if hedef_x < DOKU_G && hedef_y < DOKU_Y {
                pafta.put_pixel(hedef_x, hedef_y, image::Rgba(renk));
            }
        }
    }
}

/// Tasarımın tek piksel sütununu (yan yüz) 1 piksel genişliğinde kopyala.
fn sutun(
    pafta: &mut image::RgbaImage,
    pikseller: &[String],
    genislik: u32,
    sutun_x: u32,
    konum: (u32, u32),
    yukseklik: u32,
) {
    for y in 0..yukseklik {
        let renk = pikseller
            .get((y * genislik + sutun_x) as usize)
            .and_then(|h| hex_oku(h))
            .unwrap_or([0, 0, 0, 0]);
        if konum.0 < DOKU_G && konum.1 + y < DOKU_Y {
            pafta.put_pixel(konum.0, konum.1 + y, image::Rgba(renk));
        }
    }
}

/// Tasarımın tek piksel satırını (üst/alt yüz) kopyala.
fn satir(
    pafta: &mut image::RgbaImage,
    pikseller: &[String],
    genislik: u32,
    satir_y: u32,
    konum: (u32, u32),
    genislik_px: u32,
) {
    for x in 0..genislik_px {
        let renk = pikseller
            .get((satir_y * genislik + x) as usize)
            .and_then(|h| hex_oku(h))
            .unwrap_or([0, 0, 0, 0]);
        if konum.0 + x < DOKU_G && konum.1 < DOKU_Y {
            pafta.put_pixel(konum.0 + x, konum.1, image::Rgba(renk));
        }
    }
}

fn png_kodla(img: &image::RgbaImage) -> Result<Vec<u8>, String> {
    let mut cikti: Vec<u8> = Vec::new();
    image::codecs::png::PngEncoder::new(&mut cikti)
        .write_image(img.as_raw(), DOKU_G, DOKU_Y, image::ExtendedColorType::Rgba8)
        .map_err(|e| format!("png yazılamadı: {e}"))?;
    Ok(cikti)
}

/// Pelerin tasarımını 64×32 pelerin dokusuna çevir.
pub fn pelerin_png(pikseller: &[String]) -> Result<Vec<u8>, String> {
    if pikseller.len() != (PELERIN_G * PELERIN_Y) as usize {
        return Err(format!(
            "{} piksel bekleniyordu, {} geldi",
            PELERIN_G * PELERIN_Y,
            pikseller.len()
        ));
    }
    let mut pafta = image::RgbaImage::new(DOKU_G, DOKU_Y);
    // ön yüz + arka yüz (aynalı) + yanlar + üst/alt
    oturt(&mut pafta, pikseller, PELERIN_G, PELERIN_Y, (1, 1), false);
    oturt(&mut pafta, pikseller, PELERIN_G, PELERIN_Y, (12, 1), true);
    sutun(&mut pafta, pikseller, PELERIN_G, 0, (0, 1), PELERIN_Y);
    sutun(&mut pafta, pikseller, PELERIN_G, PELERIN_G - 1, (11, 1), PELERIN_Y);
    satir(&mut pafta, pikseller, PELERIN_G, 0, (1, 0), PELERIN_G);
    satir(&mut pafta, pikseller, PELERIN_G, PELERIN_Y - 1, (1, 17), PELERIN_G);
    png_kodla(&pafta)
}

/// Kanat tasarımını 64×32 elitra dokusuna çevir.
///
/// Kanatlar oyunda AYNI UV adasını ayna olarak kullandığı için sol/sağ ayrı
/// tasarım dokuyla mümkün değil: iki kanat da aynı deseni gösterir.
pub fn kanat_png(pikseller: &[String]) -> Result<Vec<u8>, String> {
    if pikseller.len() != (KANAT_G * KANAT_Y) as usize {
        return Err(format!(
            "{} piksel bekleniyordu, {} geldi",
            KANAT_G * KANAT_Y,
            pikseller.len()
        ));
    }
    let mut pafta = image::RgbaImage::new(DOKU_G, DOKU_Y);
    oturt(&mut pafta, pikseller, KANAT_G, KANAT_Y, (24, 2), false); // dış yüz
    oturt(&mut pafta, pikseller, KANAT_G, KANAT_Y, (36, 2), true); // iç yüz (ayna)
    oturt(&mut pafta, pikseller, KANAT_G, 2, (24, 0), false); // üst
    oturt(&mut pafta, pikseller, KANAT_G, 2, (36, 0), true);
    for y in 0..KANAT_Y {
        let sol = pikseller
            .get((y * KANAT_G) as usize)
            .and_then(|h| hex_oku(h))
            .unwrap_or([0, 0, 0, 0]);
        let sag = pikseller
            .get((y * KANAT_G + KANAT_G - 1) as usize)
            .and_then(|h| hex_oku(h))
            .unwrap_or([0, 0, 0, 0]);
        for x in 0..2 {
            if y + 2 < DOKU_Y {
                pafta.put_pixel(22 + x, y + 2, image::Rgba(sol));
                pafta.put_pixel(34 + x, y + 2, image::Rgba(sag));
            }
        }
    }
    png_kodla(&pafta)
}

fn ana_yol(ad: &str) -> std::path::PathBuf {
    crate::core::app_dir().join(ad)
}

fn kurulum_yolu(inst: &crate::instances::Instance, ad: &str) -> std::path::PathBuf {
    inst.dir().join(".yikim").join(ad)
}

/// PNG'yi ana kopyaya + tüm kurulumların `.yikim/` klasörüne yaz.
pub fn tum_kurulumlara_yaz(ad: &str, png: &[u8]) -> usize {
    let mut sayi = 0usize;
    if std::fs::write(ana_yol(ad), png).is_ok() {
        sayi += 1;
    }
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

/// Ana kopyayı ve tüm kurulumlardaki dosyayı sil.
pub fn tum_kurulumlardan_sil(ad: &str) -> usize {
    let mut sayi = 0usize;
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

/// 64×32 paftadan tasarım ızgarasını geri oku.
fn paftadan_oku(
    yol: &std::path::Path,
    konum: (u32, u32),
    genislik: u32,
    yukseklik: u32,
) -> Option<Vec<String>> {
    let img = image::open(yol).ok()?.to_rgba8();
    if img.width() != DOKU_G || img.height() != DOKU_Y {
        return None;
    }
    let mut out = Vec::with_capacity((genislik * yukseklik) as usize);
    for y in 0..yukseklik {
        for x in 0..genislik {
            let p = img.get_pixel(konum.0 + x, konum.1 + y);
            out.push(if p[3] < 8 {
                String::new()
            } else {
                format!("#{:02x}{:02x}{:02x}", p[0], p[1], p[2])
            });
        }
    }
    Some(out)
}

fn dosyadan_oku(ad: &str, konum: (u32, u32), g: u32, y: u32) -> Option<Vec<String>> {
    if let Some(p) = paftadan_oku(&ana_yol(ad), konum, g, y) {
        return Some(p);
    }
    for inst in crate::instances::list() {
        if let Some(p) = paftadan_oku(&kurulum_yolu(&inst, ad), konum, g, y) {
            return Some(p);
        }
    }
    None
}

/// Kayıtlı pelerin tasarımı (10×16 renk listesi).
pub fn yerel_pelerin() -> Option<Vec<String>> {
    dosyadan_oku("pelerin.png", (1, 1), PELERIN_G, PELERIN_Y)
}

/// Kayıtlı kanat tasarımı (10×20 renk listesi).
pub fn yerel_kanat() -> Option<Vec<String>> {
    dosyadan_oku("elytra.png", (24, 2), KANAT_G, KANAT_Y)
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

/// UV yerleşimi testleri: dokuların doğru panele düştüğünü doğrular.
#[cfg(test)]
mod testler {
    use super::*;

    fn tek_piksel(genislik: u32, yukseklik: u32, x: u32, y: u32, renk: &str) -> Vec<String> {
        let mut liste = vec![String::new(); (genislik * yukseklik) as usize];
        liste[(y * genislik + x) as usize] = renk.to_string();
        liste
    }

    fn piksel(png: &[u8], x: u32, y: u32) -> [u8; 4] {
        let img = image::load_from_memory(png).expect("png").to_rgba8();
        img.get_pixel(x, y).0
    }

    #[test]
    fn pelerin_panelleri_dogru() {
        let liste = tek_piksel(PELERIN_G, PELERIN_Y, 3, 4, "#ff8a3d");
        let png = pelerin_png(&liste).expect("pelerin");
        // ön panel (1,1) + (3,4)
        assert_eq!(piksel(&png, 4, 5), [0xff, 0x8a, 0x3d, 0xff]);
        // arka panel (12,1) aynalı: x = 12 + (9-3)
        assert_eq!(piksel(&png, 18, 5), [0xff, 0x8a, 0x3d, 0xff]);
        // yan sütun dokunulmamış
        assert_eq!(piksel(&png, 0, 5)[3], 0);
    }

    #[test]
    fn kanat_uv_dogru() {
        let liste = tek_piksel(KANAT_G, KANAT_Y, 0, 2, "#3d5afe");
        let png = kanat_png(&liste).expect("kanat");
        // dış yüz (24,2) + (0,2)
        assert_eq!(piksel(&png, 24, 4), [0x3d, 0x5a, 0xfe, 0xff]);
        // iç yüz aynalı (36,2) + (9,2)
        assert_eq!(piksel(&png, 45, 4), [0x3d, 0x5a, 0xfe, 0xff]);
    }

    #[test]
    fn gidis_donus_tasarim_ayni() {
        let liste = tek_piksel(PELERIN_G, PELERIN_Y, 7, 9, "#22c55e");
        let png = pelerin_png(&liste).expect("pelerin");
        let img = image::load_from_memory(&png).expect("png").to_rgba8();
        let p = img.get_pixel(1 + 7, 1 + 9);
        assert_eq!((p[0], p[1], p[2], p[3]), (0x22, 0xc5, 0x5e, 0xff));
    }
}
