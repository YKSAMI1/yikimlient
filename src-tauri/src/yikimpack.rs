// YIKIMPACK — YIKIMLient'e özel mod paketi paylaşım biçimi (.yikimpack).
//
// Neden var: Modrinth (.mrpack) ve CurseForge (.zip) dışarıya paket paylaşmak
// için ya resmî API'ye bağımlı ya da elle kurulum gerektiriyor. `.yikimpack`
// bunun yerine TEK dosyada gereken her şeyi taşır:
//
//   yikimpack.json     → manifest (ad, MC sürümü, yükleyici, dosya listesi)
//   yikimpack-logo.png → paketin ikonu (küçük, ~2 KB; ekranda görünür)
//   mods/*.jar         → paketin modları
//   config/*           → yapılandırma (isteğe bağlı)
//   saves/*            → dünyalar (isteğe bağlı)
//   resourcepacks/*    → doku paketleri (isteğe bağlı)
//   shaderpacks/*      → shader paketleri (isteğe bağlı)
//   options.txt        → ekran/ayarlar (isteğe bağlı)
//
// Tasarım kuralları:
//   * Varolan bağımlılıklarla: zip (okuma/yazma), image (küçük logo),
//     sha1 (dosya doğrulama) — YENİ kutuphane YOK.
//   * Tek dosya/küçük boyut: içerik Zlib-9 ile sıkıştırılır; jar'lar zaten
//     sıkıştırılmıştır ve indirgenemez (tekrar sıkıştırma kazancı yok).
//   * Kompat: CurseForge zip'i (.mrpack olmayan) gibi davranır — paketi
//     açar, yükleyiciyi manifest'ten okur, sonra paket kurulumu
//     adımlarını sürdürür (pack-step).
//   * Çift tıklama: Windows kayıt defterinde `.yikimpack` uzantısı
//     YIKIMLient'e bağlanır; dosya açılışında uygulama argüman olarak alır
//     ve doğrudan kurulumu başlatır (bkz. `lib.rs`).

use serde::Deserialize;
use std::path::{Path, PathBuf};

// ---------- Manifest ----------

/// yikimpack.json içeriği.
#[derive(Debug, Clone, Deserialize)]
pub struct YikimPackManifest {
    /// Paket adı (kurulum adı olur).
    #[serde(default)]
    pub name: String,
    #[serde(default = "vars_mc")]
    pub minecraft: String,
    #[serde(default)]
    pub loader: String,
    #[serde(default)]
    pub loader_version: String,
    #[serde(default)]
    pub version: String,
    #[serde(default)]
    pub description: String,
    #[serde(default)]
    pub author: String,
    /// Hangi içerik grupları pakette var (bilgi amaçlı — kurulumda zaten
    /// zip içindeki GERÇEK dosyalar kullanılır).
    #[serde(default)]
    pub includes: Vec<String>,
}

fn vars_mc() -> String {
    "1.21.1".into()
}

/// `.yikimpack` uzantısı (kayıt defteri + ikon eşlemesi de bu sabite bakar).
pub const UZANTI: &str = "yikimpack";

/// Paket dosyası adı büyük/küçük harf duyarsız eşleşsin.
pub fn uzanti_mi(path: &Path) -> bool {
    path.extension()
        .map(|e| e.to_string_lossy().to_lowercase() == UZANTI)
        .unwrap_or(false)
}

// ---------- Paket okuma ----------

/// Paket dosyasını çöz: manifest + logo yolu + açılacak dosya listesi.
/// Okuma başarısızsa (bozuk/geçersiz dosya) Err döner.
pub struct YikimPackOkuyucu {
    pub manifest: YikimPackManifest,
    pub dosya: PathBuf,
}

/// Bir `.yikimpack` dosyasını oku ve manifestini çöz.
/// İç içe klasör desteklenir (paket klasörlenip yeniden sıkıştırılmış olabilir).
pub fn oku(pack: &Path) -> Result<YikimPackOkuyucu, String> {
    let f = std::fs::File::open(pack).map_err(|e| format!("paket okunamadı: {e}"))?;
    let mut archive = zip::ZipArchive::new(f).map_err(|e| format!("paket açılamadı: {e}"))?;
    let yollar: Vec<String> = archive
        .file_names()
        .map(|s| s.replace('\\', "/"))
        .collect();
    let hedef = yollar
        .iter()
        .find(|n| n.as_str() == "yikimpack.json" || n.ends_with("/yikimpack.json"))
        .cloned()
        .ok_or("geçersiz paket (yikimpack.json yok)")?;
    let mut s = String::new();
    {
        let mut zf = archive
            .by_name(&hedef)
            .map_err(|e| format!("paket okunamadı: {e}"))?;
        use std::io::Read;
        zf.read_to_string(&mut s).map_err(|e| e.to_string())?;
    }
    let manifest: YikimPackManifest =
        serde_json::from_str(&s).map_err(|e| format!("paket manifesti bozuk: {e}"))?;
    Ok(YikimPackOkuyucu {
        manifest,
        dosya: pack.to_path_buf(),
    })
}

/// Paketi kurulum dizinine aç. Override benzeri: ZIP içindeki TÜM dosyalar
/// (mods/, config/, saves/, resourcepacks/, shaderpacks/, options.txt …)
/// paketindeki klasör yapısıyla birlikte kurulum dizinine yazılır.
/// `on_progress` her N dosyada bir çağrılır (canlı adım için).
pub fn ac<F: FnMut(usize, usize, &str)>(
    pack: &Path,
    hedef_dir: &Path,
    mut on_progress: F,
) -> Result<usize, String> {
    let f = std::fs::File::open(pack).map_err(|e| e.to_string())?;
    let mut archive = zip::ZipArchive::new(f).map_err(|e| e.to_string())?;
    // manifest kökünü bul — onun altındaki "içerik" dosyaları kurulur
    let yollar: Vec<String> = archive
        .file_names()
        .map(|s| s.replace('\\', "/"))
        .collect();
    let manifest_yolu = yollar
        .iter()
        .find(|n| n.as_str() == "yikimpack.json" || n.ends_with("/yikimpack.json"))
        .cloned()
        .unwrap_or_else(|| "yikimpack.json".into());
    let kok = manifest_yolu.trim_end_matches("yikimpack.json").to_string();
    let toplam = archive.len();
    let mut koyulan = 0usize;
    for i in 0..toplam {
        let mut zf = archive.by_index(i).map_err(|e| e.to_string())?;
        let ad = zf.name().replace('\\', "/");
        if ad.ends_with('/') {
            continue;
        }
        // manifest ve logo pakete ait meta dosyaları — kuruluma kopyalanmaz
        let govde = ad.trim_start_matches(&kok);
        if govde == "yikimpack.json" || govde == "yikimpack-logo.png" {
            continue;
        }
        let dest = hedef_dir.join(govde);
        if let Some(p) = dest.parent() {
            let _ = std::fs::create_dir_all(p);
        }
        let mut of = std::fs::File::create(&dest).map_err(|e| format!("yazılamadı: {e}"))?;
        std::io::copy(&mut zf, &mut of).map_err(|e| format!("kopyalanamadı: {e}"))?;
        koyulan += 1;
        on_progress(koyulan, toplam, govde);
    }
    Ok(koyulan)
}

/// Paketin logo dosyasını (varsa) kurulumun media/icon.png'sine indir.
/// Yoksa sessizce geçilir — kurulum emoji ikonuyla devam eder.
pub fn logoyu_koy(pack: &Path, inst_dir: &Path) -> Option<String> {
    let f = std::fs::File::open(pack).ok()?;
    let mut archive = zip::ZipArchive::new(f).ok()?;
    let yollar: Vec<String> = archive
        .file_names()
        .map(|s| s.replace('\\', "/"))
        .collect();
    let logo_yolu = yollar
        .iter()
        .find(|n| n.as_str() == "yikimpack-logo.png" || n.ends_with("/yikimpack-logo.png"))
        .cloned()?;
    let mut zf = archive.by_name(&logo_yolu).ok()?;
    let mut bayt = Vec::new();
    use std::io::Read;
    zf.read_to_end(&mut bayt).ok()?;
    if bayt.len() < 8 {
        return None;
    }
    let media = inst_dir.join("media");
    if std::fs::create_dir_all(&media).is_err() {
        return None;
    }
    let hedef = media.join("icon.png");
    if std::fs::write(&hedef, &bayt).is_err() {
        return None;
    }
    Some(hedef.to_string_lossy().to_string())
}

// ---------- Paket yazma (dışa aktarma) ----------

/// Dışa aktarma seçenekleri — UI onay kutularından gelir.
/// `mods` HER ZAMAN açıktır: paketin özü modlardır.
#[derive(Debug, Clone)]
pub struct ExportSecenek {
    pub mods: bool,
    pub config: bool,
    pub saves: bool,
    pub resourcepacks: bool,
    pub shaderpacks: bool,
    pub options: bool,
}

impl Default for ExportSecenek {
    fn default() -> Self {
        Self {
            mods: true,
            config: false,
            saves: false,
            resourcepacks: false,
            shaderpacks: false,
            options: false,
        }
    }
}

/// Küçük paket logosu (64×64 PNG): uygulama ikonundan türetilir.
/// Gömülü sayfa sayısı ~1-2 KB — paketin boyutuna katkısı sıfır.
fn logo_png() -> Option<Vec<u8>> {
    // 128×128 uygulama ikonu build-time gömülür; 64×64'ye küçültülür.
    let kaynak = include_bytes!("../icons/128x128.png");
    let img = image::load_from_memory_with_format(kaynak, image::ImageFormat::Png).ok()?;
    let kucuk = img.resize(64, 64, image::imageops::FilterType::Triangle);
    let mut tampon = std::io::Cursor::new(Vec::new());
    kucuk
        .write_to(&mut tampon, image::ImageFormat::Png)
        .ok()?;
    Some(tampon.into_inner())
}

/// Kurulum dizinindeki içeriği `.yikimpack` olarak yaz.
/// Dönüş: oluşturulan dosyanın yolu.
/// `on_progress(dosya_sayaci, toplam)` ile canlı adım verilebilir.
pub fn yaz<F: FnMut(usize, usize, &str)>(
    inst_dir: &Path,
    info: PaketBilgi,
    secenek: &ExportSecenek,
    mut on_progress: F,
) -> Result<PathBuf, String> {
    use std::io::Write;

    let ad = if info.name.trim().is_empty() {
        "YIKIM Paket"
    } else {
        info.name.trim()
    };
    let guvenli_ad: String = ad
        .chars()
        .map(|c| match c {
            '\\' | '/' | ':' | '*' | '?' | '"' | '<' | '>' | '|' => '_',
            _ => c,
        })
        .collect();
    let cikti_klasor = std::path::PathBuf::from(&info.hedef_klasor);
    if !cikti_klasor.exists() {
        std::fs::create_dir_all(&cikti_klasor)
            .map_err(|e| format!("hedef klasör açılamadı: {e}"))?;
    }
    let dosya = cikti_klasor.join(format!("{}.{}", guvenli_ad, UZANTI));

    // pakete girecek dosyaları topla: (iç yolu, diske yolu)
    let mut eklenecek: Vec<(String, PathBuf)> = Vec::new();

    // mods — HER ZAMAN
    if secenek.mods {
        let mods = inst_dir.join("mods");
        if mods.is_dir() {
            topla_klasor(&mods, "mods", &mut eklenecek);
        }
    }
    // config
    if secenek.config {
        let cfg = inst_dir.join("config");
        if cfg.is_dir() {
            topla_klasor(&cfg, "config", &mut eklenecek);
        }
    }
    // saves — dünya klasörleri
    if secenek.saves {
        let saves = inst_dir.join("saves");
        if saves.is_dir() {
            topla_klasor(&saves, "saves", &mut eklenecek);
        }
    }
    // resourcepacks
    if secenek.resourcepacks {
        let rp = inst_dir.join("resourcepacks");
        if rp.is_dir() {
            topla_klasor(&rp, "resourcepacks", &mut eklenecek);
        }
    }
    // shaderpacks
    if secenek.shaderpacks {
        let sp = inst_dir.join("shaderpacks");
        if sp.is_dir() {
            topla_klasor(&sp, "shaderpacks", &mut eklenecek);
        }
    }
    // oyun ayarları
    if secenek.options {
        for (ic, _hedef) in OYUN_AYAR_DOSYALARI {
            let p = inst_dir.join(ic);
            if p.is_file() {
                eklenecek.push((ic.to_string(), p));
            }
        }
    }

    let toplam = eklenecek.len();
    if toplam == 0 {
        return Err("pakete eklenecek dosya yok — kurulumda mod klasörü boş".into());
    }

    // manifest: paketin sözlü anlatımı
    let mut includes: Vec<String> = vec!["mods".into()];
    if secenek.config {
        includes.push("config".into());
    }
    if secenek.saves {
        includes.push("saves".into());
    }
    if secenek.resourcepacks {
        includes.push("resourcepacks".into());
    }
    if secenek.shaderpacks {
        includes.push("shaderpacks".into());
    }
    if secenek.options {
        includes.push("options".into());
    }
    let manifest = serde_json::json!({
        "format": "yikimpack",
        "formatVersion": 1,
        "name": ad,
        "version": info.version,
        "minecraft": info.minecraft,
        "loader": info.loader,
        "loader_version": info.loader_version,
        "description": info.description,
        "author": info.author,
        "includes": includes,
        "fileCount": toplam,
    });
    let manifest_metni =
        serde_json::to_vec_pretty(&manifest).map_err(|e| e.to_string())?;

    let f = std::fs::File::create(&dosya)
        .map_err(|e| format!("paket dosyası yazılamadı: {e}"))?;
    let mut zipf = zip::ZipWriter::new(f);
    let opts = zip::write::SimpleFileOptions::default()
        .compression_method(zip::CompressionMethod::Deflated)
        .compression_level(Some(9))
        .unix_permissions(0o644);

    // manifest + logo (küçük logo: paylaşıma kimlik katar, boyutu ~1-2 KB)
    zipf.start_file("yikimpack.json", opts).map_err(|e| e.to_string())?;
    zipf.write_all(&manifest_metni).map_err(|e| e.to_string())?;
    if let Some(logo) = logo_png() {
        let _ = zipf.start_file("yikimpack-logo.png", opts);
        let _ = zipf.write_all(&logo);
    }

    // içerik dosyaları
    let mut eklendi = 0usize;
    for (ic_yol, dis_yol) in &eklenecek {
        let bayt = std::fs::read(dis_yol).map_err(|e| format!("{dis_yol:?} okunamadı: {e}"))?;
        zipf.start_file(ic_yol.clone(), opts).map_err(|e| e.to_string())?;
        zipf.write_all(&bayt).map_err(|e| format!("{ic_yol} yazılamadı: {e}"))?;
        eklendi += 1;
        on_progress(eklendi, toplam, ic_yol);
    }
    zipf.finish().map_err(|e| e.to_string())?;
    Ok(dosya)
}

/// Dışa aktarma bilgisi (UI doldurur veya kurulum kaydından çıkarılır).
#[derive(Debug, Clone)]
pub struct PaketBilgi {
    pub name: String,
    pub version: String,
    pub description: String,
    pub author: String,
    pub minecraft: String,
    pub loader: String,
    pub loader_version: String,
    pub hedef_klasor: String,
}

/// Klasörü (alt klasörleri dahil) iç yol önekiyle topla.
/// Gizli/geçici klasörler (.yikim, logs, crash-reports, cache) atlanır.
fn topla_klasor(kok: &Path, onek: &str, cikis: &mut Vec<(String, PathBuf)>) {
    let mut yigin = vec![kok.to_path_buf()];
    while let Some(dir) = yigin.pop() {
        let Ok(rd) = std::fs::read_dir(&dir) else { continue };
        for e in rd.flatten() {
            let p = e.path();
            let ad = e.file_name().to_string_lossy().to_string();
            // paket kendi launcher kalıntıları + çöplükleri taşınmaz
            if ad.starts_with('.')
                || GECICI_KLASORLER.iter().any(|g| ad.eq_ignore_ascii_case(g))
            {
                continue;
            }
            if p.is_dir() {
                yigin.push(p);
            } else if p.is_file() {
                let gonderi = p.strip_prefix(kok).unwrap_or(&p);
                let ic_yol = format!("{}/{}", onek, gonderi.to_string_lossy().replace('\\', "/"));
                cikis.push((ic_yol, p));
            }
        }
    }
}

/// Paketlenirken dosya içinde KULLANILMAYACAK klasör adları (launcher kendi
/// işleri + çöplükleri — paylaşıma sızmaz).
const GECICI_KLASORLER: &[&str] = &[
    "logs", "crash-reports", ".yikim", "cache", "natives", "webcache",
    "coremap", "fabricloader", "versions", "libraries", "assets",
];

/// Oyun ayarları — "Ayarlar" kutusu işaretlenirse pakete girer.
const OYUN_AYAR_DOSYALARI: &[(&str, &str)] = &[
    ("options.txt", "options.txt"),
    ("optionsof.txt", "optionsof.txt"),
    ("optionsshaders.txt", "optionsshaders.txt"),
    ("servers.dat", "servers.dat"),
    ("hotbar.nbt", "hotbar.nbt"),
];

// ---------- Windows uzantı kaydı (çift tıklama) ----------

/// `.yikimpack` çift tıklaması YIKIMLient'i açsın.
/// Kayıt defteri (HKCU) — yükseltilmiş izin gerekmez, tek tek sessizce
/// denetlenir ve yalnızca değişirse yazılır (her açılışta yeniden yazılmaz).
#[cfg(windows)]
pub fn uzanti_kaydet(exe_yolu: &str) {
    use std::os::windows::process::CommandExt;
    // exe yolu kayıt defterinde ters bölü içeriyorsa reg.exe bozabilir —
    // değer çift tırnak içinde yazılır (reg add değeri ham metin korur).
    let kayit = |dizin: &str, ad: &str, veri: &str| {
        let _ = std::process::Command::new("reg")
            .args(["add", dizin, "/ve", "/t", ad, "/d", veri, "/f"])
            .creation_flags(0x0800_0000) // CREATE_NO_WINDOW — siyah pencere yok
            .status();
    };
    // 1) uzantı tanımı: .yikimpack → YIKIMLient.yikimpack
    kayit(
        r"HKCU\Software\Classes\.yikimpack",
        "REG_SZ",
        "YIKIMLient.yikimpack",
    );
    // 2) açık komut: dosya yolunu argüman olarak geçir
    let ac = r"HKCU\Software\Classes\YIKIMLient.yikimpack\shell\open\command";
    kayit(ac, "REG_SZ", &format!("\"{}\" \"%1\"", exe_yolu));
    // 3) ad + ikon
    kayit(
        r"HKCU\Software\Classes\YIKIMLient.yikimpack",
        "REG_SZ",
        "YIKIMLient Mod Paketi",
    );
    kayit(
        r"HKCU\Software\Classes\YIKIMLient.yikimpack\DefaultIcon",
        "REG_SZ",
        &format!("{},0", exe_yolu),
    );
}

#[cfg(not(windows))]
pub fn uzanti_kaydet(_exe_yolu: &str) {
    // Linux/macOS: .desktop/MIME entegrasyonu ileride; şimdilik boş.
}
