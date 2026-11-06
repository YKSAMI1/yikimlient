//! OYUN İÇİ KOZMETİK SEÇİCİSİ — launcher köprüsü (v0.7.10).
//!
//! Oyun içi ana menüde karakterin altında deri / pelerin / elitra seçicisi var.
//! Mod ağa çıkmaz: kataloğu ve küçük dosyaları launcher burada hazırlar.
//!
//! ## Dosyalar (kurulum içi, `.yikim/`)
//!   kozmetik-katalog.txt : sekmeli satırlar (mod bunu okur)
//!       D <id> <ad> <slim 0|1> <göreli dosya>     deri kitaplığı
//!       P <id> <ad> <hd 0|1>   <göreli dosya>     pelerin
//!       K <id> <ad> <hd 0|1>   <göreli dosya>     kanat (elitra)
//!       A <deri-id> <pelerin-id> <kanat-id>       seçili olanlar (boş = yok)
//!   kozmetik/            : katalog dosyalarının kopyaları (mod doku olarak okur)
//!   kozmetik-istek.txt   : mod yazar — `tur<TAB>id` (boş id = kapat). Launcher
//!                          işler, siler ve kataloğu tazeler.
//!
//! ## Seçim akışı
//!   deri   → kitaplıktaki PNG aktif hesabın önbelleğine + tüm kurulumların
//!            `.yikim/deri.png` dosyasına yazılır (mod anında görür).
//!   pelerin/kanat → katalogdaki aktif kayıt değişir ve dosya tüm kurulumlara
//!            dağıtılır (oyun açıkken bile mod mtime'dan anlar).

use crate::instances::Instance;
use std::path::{Path, PathBuf};

fn state_dir(inst: &Instance) -> PathBuf {
    inst.dir().join(".yikim")
}

fn secili_yol() -> PathBuf {
    crate::core::app_dir().join("kozmetik").join("secili-deri.json")
}

/// Oyun içinde seçilmiş deri kimliği ("" = hesabın kendi derisi).
pub fn secili_deri() -> String {
    std::fs::read_to_string(secili_yol())
        .ok()
        .and_then(|s| serde_json::from_str::<serde_json::Value>(&s).ok())
        .and_then(|j| j["id"].as_str().map(str::to_string))
        .unwrap_or_default()
}

/// Oyun içinde seçilmiş Mojang pelerini ("" = yok).
fn mojang_secili_yol() -> PathBuf {
    crate::core::app_dir().join("kozmetik").join("mojang-aktif.json")
}

fn mojang_secili() -> String {
    std::fs::read_to_string(mojang_secili_yol())
        .ok()
        .and_then(|s| serde_json::from_str::<serde_json::Value>(&s).ok())
        .and_then(|j| j["id"].as_str().map(str::to_string))
        .unwrap_or_default()
}

fn mojang_secili_yaz(id: &str) {
    let yol = mojang_secili_yol();
    if let Some(parent) = yol.parent() {
        let _ = std::fs::create_dir_all(parent);
    }
    let _ = std::fs::write(yol, serde_json::json!({ "id": id }).to_string());
}

/// Aktif hesabın Mojang pelerinleri (launcher bunları önbelleğe indirir).
fn mojang_pelerinleri() -> Vec<crate::skins::Pelerin> {
    let Some(acc) = aktif_hesap() else { return Vec::new() };
    let anahtar = crate::skins::hesap_anahtari(&acc);
    let yol = crate::core::app_dir().join("cache").join(format!("capes-{anahtar}.json"));
    std::fs::read(yol)
        .ok()
        .and_then(|v| serde_json::from_slice::<Vec<crate::skins::Pelerin>>(&v).ok())
        .unwrap_or_default()
        .into_iter()
        .filter(|p| p.dosya.as_deref().map(|d| Path::new(d).is_file()).unwrap_or(false))
        .collect()
}

fn secili_deri_yaz(id: &str) {
    let yol = secili_yol();
    if let Some(parent) = yol.parent() {
        let _ = std::fs::create_dir_all(parent);
    }
    let govde = serde_json::json!({ "id": id }).to_string();
    let _ = std::fs::write(yol, govde);
}

/// Aktif hesap (UUID eşlemesi için). Yoksa None.
fn aktif_hesap() -> Option<crate::auth::Account> {
    let cfg = crate::config::YikimConfig::load_or_default();
    let liste = crate::commands::load_accounts();
    if liste.is_empty() {
        return None;
    }
    if cfg.last_selected_account.trim().is_empty() {
        return liste.first().cloned();
    }
    liste
        .iter()
        .find(|a| a.id == cfg.last_selected_account)
        .cloned()
        .or_else(|| liste.first().cloned())
}

fn kopyala_degistiyse(kaynak: &Path, hedef: &Path) {
    let Ok(meta) = std::fs::metadata(kaynak) else { return };
    if let Ok(hedef_meta) = std::fs::metadata(hedef) {
        if hedef_meta.len() == meta.len() {
            return;
        }
    }
    if let Some(parent) = hedef.parent() {
        let _ = std::fs::create_dir_all(parent);
    }
    let _ = std::fs::copy(kaynak, hedef);
}

fn satir_temiz(s: &str) -> String {
    s.replace(['\t', '\n', '\r'], " ").trim().to_string()
}

/// Katalog dosyasını + görsel kopyalarını yaz.
pub fn katalog_yaz(inst: &Instance) {
    let dir = state_dir(inst);
    let kok = dir.join("kozmetik");
    let _ = std::fs::create_dir_all(kok.join("deri"));
    let _ = std::fs::create_dir_all(kok.join("pelerin"));
    let _ = std::fs::create_dir_all(kok.join("kanat"));

    let mut out = String::new();

    // --- deriler (skins kitaplığı) ---
    let mut deri_idler: Vec<String> = Vec::new();
    for kayit in crate::skins::kitaplik_oku(&crate::skins::kitaplik_kok()) {
        let kaynak = Path::new(&kayit.dosya);
        if !kaynak.is_file() {
            continue;
        }
        let goreli = format!("kozmetik/deri/{}.png", kayit.id);
        kopyala_degistiyse(kaynak, &dir.join(&goreli));
        out.push_str(&format!(
            "D\t{}\t{}\t{}\t{}\n",
            satir_temiz(&kayit.id),
            satir_temiz(&kayit.ad),
            if kayit.slim { 1 } else { 0 },
            goreli
        ));
        deri_idler.push(kayit.id.clone());
    }

    // --- pelerin / kanat (kozmetik kataloğu) ---
    for kayit in crate::kozmetik_katalog::liste() {
        let tur = kayit.tur.as_str();
        let (harf, klasor) = match tur {
            crate::kozmetik_katalog::PELERIN => ('P', "pelerin"),
            crate::kozmetik_katalog::KANAT => ('K', "kanat"),
            _ => continue,
        };
        let Some(png) = crate::kozmetik_katalog::icerik(tur, &kayit.id) else { continue };
        let goreli = format!("kozmetik/{klasor}/{}.png", kayit.id);
        let hedef = dir.join(&goreli);
        let yaz = match std::fs::metadata(&hedef) {
            Ok(m) => m.len() != png.len() as u64,
            Err(_) => true,
        };
        if yaz {
            if let Some(parent) = hedef.parent() {
                let _ = std::fs::create_dir_all(parent);
            }
            let _ = std::fs::write(&hedef, &png);
        }
        out.push_str(&format!(
            "{}\t{}\t{}\t{}\t{}\n",
            harf,
            satir_temiz(&kayit.id),
            satir_temiz(&kayit.ad),
            if kayit.hd { 1 } else { 0 },
            goreli
        ));
    }

    // --- Mojang pelerinleri (hesabın kendi pelerinleri) ---
    let mojang = mojang_secili();
    let _ = std::fs::create_dir_all(kok.join("mojang"));
    let mojang_liste = mojang_pelerinleri();
    for kayit in &mojang_liste {
        let Some(dosya) = kayit.dosya.as_deref() else { continue };
        let goreli = format!("kozmetik/mojang/{}.png", kayit.id);
        kopyala_degistiyse(Path::new(dosya), &dir.join(&goreli));
        out.push_str(&format!(
            "M\t{}\t{}\t{}\t{}\n",
            satir_temiz(&kayit.id),
            satir_temiz(&kayit.ad),
            if kayit.id == mojang { 1 } else { 0 },
            goreli
        ));
    }
    // Seçili Mojang pelerini gerçekten duruyor mu? Mod pelerin.png'yi okur.
    if let Some(kayit) = mojang_liste.iter().find(|p| p.id == mojang) {
        if let Some(dosya) = kayit.dosya.as_deref() {
            kopyala_degistiyse(Path::new(dosya), &dir.join("pelerin.png"));
        }
    }

    // --- seçili olanlar ---
    let mut deri = secili_deri();
    if !deri_idler.iter().any(|id| *id == deri) {
        deri.clear();
    }
    let pelerin = crate::kozmetik_katalog::aktif_id(crate::kozmetik_katalog::PELERIN)
        .unwrap_or_default();
    let kanat = crate::kozmetik_katalog::aktif_id(crate::kozmetik_katalog::KANAT)
        .unwrap_or_default();
    out.push_str(&format!("A\t{deri}\t{pelerin}\t{kanat}\n"));
    if !mojang_liste.is_empty() {
        out.push_str(&format!("MA\t{mojang}\n"));
    }

    let _ = std::fs::write(dir.join("kozmetik-katalog.txt"), out);
}

/// Modun seçim isteğini uygula (tek kullanımlık).
pub fn istek_isle(inst: &Instance) {
    let yol = state_dir(inst).join("kozmetik-istek.txt");
    let Ok(metin) = std::fs::read_to_string(&yol) else { return };
    let _ = std::fs::remove_file(&yol);
    let mut parcalar = metin.trim().split('\t');
    let tur = parcalar.next().unwrap_or("").trim().to_string();
    let id = parcalar.next().unwrap_or("").trim().to_string();
    match tur.as_str() {
        "deri" => secim_deri(&id),
        "pelerin" => secim_kozmetik(crate::kozmetik_katalog::PELERIN, &id, "pelerin.png"),
        "mojang" => secim_mojang(&id),
        "kanat" => secim_kozmetik(crate::kozmetik_katalog::KANAT, &id, "elytra.png"),
        _ => return,
    }
    katalog_yaz(inst);
}

fn secim_deri(id: &str) {
    if id.is_empty() {
        secili_deri_yaz("");
        if let Some(acc) = aktif_hesap() {
            // hesabın kendi derisine dön: önbellek yoksa dokunma
            let anahtar = acc.uuid.replace('-', "");
            let cache = crate::core::app_dir().join("cache").join(format!("skin-{anahtar}.png"));
            if let Ok(bayt) = std::fs::read(&cache) {
                deri_yaz_her_kuruluma(&bayt);
            }
        }
        return;
    }
    let kayit = crate::skins::kitaplik_oku(&crate::skins::kitaplik_kok())
        .into_iter()
        .find(|k| k.id == id);
    let Some(kayit) = kayit else { return };
    let Ok(png) = std::fs::read(&kayit.dosya) else { return };

    // Aktif hesabın önbelleği: sonraki açılışlar da bu deriyle başlasın
    if let Some(acc) = aktif_hesap() {
        let anahtar = acc.uuid.replace('-', "");
        let cache = crate::core::app_dir().join("cache");
        let _ = std::fs::create_dir_all(&cache);
        let _ = std::fs::write(cache.join(format!("skin-{anahtar}.png")), &png);
        let _ = std::fs::write(
            cache.join(format!("skin-{anahtar}.json")),
            serde_json::json!({ "slim": kayit.slim }).to_string(),
        );
    }
    deri_yaz_her_kuruluma(&png);
    secili_deri_yaz(&kayit.id);
}

fn deri_yaz_her_kuruluma(png: &[u8]) {
    for inst in crate::instances::list() {
        let dir = inst.dir().join(".yikim");
        if std::fs::create_dir_all(&dir).is_err() {
            continue;
        }
        let _ = std::fs::write(dir.join("deri.png"), png);
    }
}

/// Mojang pelerini seçimi: dosya doğrudan pelerin.png olarak uygulanır, katalog
/// pelerin'i boşaltılır (aynı anda iki pelerin olmasın).
fn secim_mojang(id: &str) {
    crate::kozmetik_katalog::aktif_yaz(crate::kozmetik_katalog::PELERIN, None);
    if id.is_empty() {
        mojang_secili_yaz("");
        crate::kozmetik::tum_kurulumlardan_sil("pelerin.png");
        return;
    }
    let Some(kayit) = mojang_pelerinleri().into_iter().find(|p| p.id == id) else { return };
    let Some(dosya) = kayit.dosya else { return };
    let Ok(png) = std::fs::read(&dosya) else { return };
    mojang_secili_yaz(&kayit.id);
    let _ = crate::kozmetik::aktif_ayarla("pelerin.png", true);
    crate::kozmetik::tum_kurulumlara_yaz("pelerin.png", &png);
}

fn secim_kozmetik(tur: &str, id: &str, ad: &str) {
    // YIKIM pelerini seçilince Mojang seçimi düşer.
    if tur == crate::kozmetik_katalog::PELERIN {
        mojang_secili_yaz("");
    }
    if id.is_empty() {
        crate::kozmetik_katalog::aktif_yaz(tur, None);
        crate::kozmetik::tum_kurulumlardan_sil(ad);
        return;
    }
    crate::kozmetik_katalog::aktif_yaz(tur, Some(id));
    let Some(png) = crate::kozmetik_katalog::icerik(tur, id) else { return };
    let _ = crate::kozmetik::aktif_ayarla(ad, true);
    crate::kozmetik::tum_kurulumlara_yaz(ad, &png);
}
