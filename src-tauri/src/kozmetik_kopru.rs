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

/// Hesaba özel seçim dosyası (v0.7.12): deri / Mojang pelerini her hesapta ayrı.
fn hesap_dosya(ad: &str) -> PathBuf {
    crate::kozmetik_katalog::hesap_dosya(ad)
}

/// Hesaba özel dosya, yoksa eski paylaşılan dosyayı oku.
fn hesap_oku(ad: &str) -> Option<serde_json::Value> {
    let yol = hesap_dosya(ad);
    if let Ok(s) = std::fs::read_to_string(&yol) {
        if let Ok(j) = serde_json::from_str::<serde_json::Value>(&s) {
            return Some(j);
        }
    }
    let eski = crate::core::app_dir().join("kozmetik").join(format!("{ad}.json"));
    std::fs::read_to_string(eski)
        .ok()
        .and_then(|s| serde_json::from_str::<serde_json::Value>(&s).ok())
}

fn hesap_yaz(ad: &str, js: &serde_json::Value) {
    let yol = hesap_dosya(ad);
    if let Some(parent) = yol.parent() {
        let _ = std::fs::create_dir_all(parent);
    }
    let _ = std::fs::write(yol, js.to_string());
}



/// Oyun içinde seçilmiş deri kimliği ("" = hesabın kendi derisi).
pub fn secili_deri() -> String {
    hesap_oku("secili-deri")
        .and_then(|j| j["id"].as_str().map(str::to_string))
        .unwrap_or_default()
}

/// Oyun içinde seçilmiş Mojang pelerini ("" = yok).
fn mojang_secili() -> String {
    hesap_oku("mojang-aktif")
        .and_then(|j| j["id"].as_str().map(str::to_string))
        .unwrap_or_default()
}

fn mojang_secili_yaz(id: &str) {
    hesap_yaz("mojang-aktif", &serde_json::json!({ "id": id }));
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
    hesap_yaz("secili-deri", &serde_json::json!({ "id": id }));
}

/// Skin Merkezi'nden giyilen kitaplık derisini kaydet (v0.7.15).
pub fn secili_deri_yaz_pub(id: &str) {
    secili_deri_yaz(id);
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

    // --- bu HESABIN seçimlerini kuruluma uygula (v0.7.12) ---
    // Hesap değişince oyun içinde de o hesabın pelerini/kanadı görünsün:
    // seçim yoksa kurulumdaki kopya kaldırılır, varsa yazılır.
    let pelerin_hedef = dir.join("pelerin.png");
    if !pelerin.is_empty() {
        if let Some(png) = crate::kozmetik_katalog::icerik(crate::kozmetik_katalog::PELERIN, &pelerin) {
            let yaz = match std::fs::metadata(&pelerin_hedef) {
                Ok(m) => m.len() != png.len() as u64,
                Err(_) => true,
            };
            if yaz {
                let _ = std::fs::write(&pelerin_hedef, &png);
            }
        }
    } else if mojang.is_empty() {
        // Bu hesapta hiç pelerin seçili değil: kurulumdaki eski kopya kalmasın
        // (yoksa hesap değişince önceki hesabın pelerini görünmeye devam eder).
        let _ = std::fs::remove_file(&pelerin_hedef);
    }
    let kanat_hedef = dir.join("elytra.png");
    if kanat.is_empty() {
        let _ = std::fs::remove_file(&kanat_hedef);
    } else if let Some(png) = crate::kozmetik_katalog::icerik(crate::kozmetik_katalog::KANAT, &kanat) {
        let yaz = match std::fs::metadata(&kanat_hedef) {
            Ok(m) => m.len() != png.len() as u64,
            Err(_) => true,
        };
        if yaz {
            let _ = std::fs::write(&kanat_hedef, &png);
        }
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
    let cache_kok = crate::core::app_dir().join("cache");
    let hesap = aktif_hesap().map(|a| a.uuid.replace('-', ""));
    if id.is_empty() {
        secili_deri_yaz("");
        if let Some(anahtar) = hesap {
            // Hesabın KENDİ derisine dön. Seçilen kitaplık derisi önbelleğe
            // yazıldığı için gerçek deri ayrı yedekte tutulur (v0.7.12).
            let gercek = cache_kok.join(format!("hesap-deri-{anahtar}.png"));
            let bayt = std::fs::read(&gercek)
                .ok()
                .or_else(|| std::fs::read(cache_kok.join(format!("skin-{anahtar}.png"))).ok());
            if let Some(bayt) = bayt {
                let _ = std::fs::write(cache_kok.join(format!("skin-{anahtar}.png")), &bayt);
                deri_yaz_her_kuruluma(&bayt);
                // v0.7.13 — "Kullanma" da HESABA yazılır: aksi hâlde sunucular
                // ve diğer oyuncular seçilmiş deriyi görmeye devam ediyordu.
                let slim = std::fs::read_to_string(
                    cache_kok.join(format!("hesap-deri-{anahtar}.json")),
                )
                .ok()
                .and_then(|s| serde_json::from_str::<serde_json::Value>(&s).ok())
                .and_then(|j| j["slim"].as_bool())
                .unwrap_or(false);
                if let Some(acc) = aktif_hesap() {
                    // Soğuma kuyruğu: "Kullanma" da sessizce düşmesin (v0.7.15)
                    deri_hesaba_yaz(acc, bayt, slim, "");
                }
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
    if let Some(anahtar) = hesap {
        let _ = std::fs::create_dir_all(&cache_kok);
        // Hesabın GERÇEK derisini ilk seçimde yedekle ("Kullanma" geri dönsün)
        let gercek = cache_kok.join(format!("hesap-deri-{anahtar}.png"));
        if !gercek.is_file() {
            if let Ok(eski) = std::fs::read(cache_kok.join(format!("skin-{anahtar}.png"))) {
                if !eski.is_empty() {
                    let _ = std::fs::write(&gercek, &eski);
                }
            }
            // Varyantı da yedekle: "Kullanma" geri dönerken slim/classic
            // bilgisi kaybolmasın (yoksa kalın gövdeye dönüyordu).
            let gercek_meta = cache_kok.join(format!("hesap-deri-{anahtar}.json"));
            if !gercek_meta.is_file() {
                if let Ok(eski) = std::fs::read_to_string(cache_kok.join(format!("skin-{anahtar}.json"))) {
                    let _ = std::fs::write(&gercek_meta, eski);
                }
            }
        }
        let _ = std::fs::write(cache_kok.join(format!("skin-{anahtar}.png")), &png);
        let _ = std::fs::write(
            cache_kok.join(format!("skin-{anahtar}.json")),
            serde_json::json!({ "slim": kayit.slim }).to_string(),
        );
    }
    deri_yaz_her_kuruluma(&png);
    secili_deri_yaz(&kayit.id);
    // v0.7.13 — SEÇİM HESABA YAZILIR: eskiden yalnız `.yikim/deri.png`
    // yazılıyordu, yani değişiklik SADECE bu istemcide görünüyordu (sunucular
    // ve diğer oyuncular eski skini görüyordu, slim seçimi de kayboluyordu).
    // Artık launcher'ın Skin Merkezi ile aynı yol: Mojang'a `variant` ile
    // yükleme → skin her yerde (sunucuda, launcher'da) değişir.
    if let Some(acc) = aktif_hesap() {
        deri_hesaba_yaz(acc, png.clone(), kayit.slim, &kayit.id);
    }
}

// ---------------- Hesaba deri yazma kuyruğu (v0.7.15) ----------------

/// Bekleyen son yükleme isteği. Hızlı seçimlerde (60 sn soğuma) eskiden istek
/// sessizce düşüyordu: oyunda yeni skin görünüyor, sunucuda ve diğer
/// oyuncularda ESKİ skin kalıyordu. Artık son istek kuyruğa alınır, soğuma
/// bitince otomatik yüklenir ("en son seçilen kazanır").
struct DeriIstegi {
    acc: crate::auth::Account,
    png: Vec<u8>,
    slim: bool,
    id: String,
}

fn deri_kuyruk() -> &'static std::sync::Mutex<Option<DeriIstegi>> {
    static K: std::sync::OnceLock<std::sync::Mutex<Option<DeriIstegi>>> = std::sync::OnceLock::new();
    K.get_or_init(|| std::sync::Mutex::new(None))
}

fn deri_kuyruk_calisiyor() -> &'static std::sync::atomic::AtomicBool {
    static D: std::sync::OnceLock<std::sync::atomic::AtomicBool> = std::sync::OnceLock::new();
    D.get_or_init(|| std::sync::atomic::AtomicBool::new(false))
}

/// Seçilen deriyi hesaba yaz: soğuma varsa beklet, sonra yükle.
fn deri_hesaba_yaz(acc: crate::auth::Account, png: Vec<u8>, slim: bool, id: &str) {
    if let Ok(mut k) = deri_kuyruk().lock() {
        *k = Some(DeriIstegi { acc, png, slim, id: id.to_string() });
    }
    if deri_kuyruk_calisiyor().swap(true, std::sync::atomic::Ordering::SeqCst) {
        return; // çalışan işçi yeni isteği kendisi alır
    }
    tauri::async_runtime::spawn(async move {
        use std::sync::atomic::Ordering;
        loop {
            let Some(istek) = deri_kuyruk().lock().ok().and_then(|mut k| k.take()) else {
                deri_kuyruk_calisiyor().store(false, Ordering::SeqCst);
                // yarış: bu arada yeni istek geldiyse tekrar başlat
                let var = deri_kuyruk().lock().map(|k| k.is_some()).unwrap_or(false);
                if var && !deri_kuyruk_calisiyor().swap(true, Ordering::SeqCst) {
                    continue;
                }
                return;
            };
            // soğuma bitene kadar bekle; yeni seçim gelirse bekleme kesilir
            loop {
                let kalan = crate::skins::soguma_kalan(&istek.acc);
                if kalan <= 0 {
                    break;
                }
                let yeni = deri_kuyruk().lock().map(|k| k.is_some()).unwrap_or(false);
                if yeni {
                    break; // dıştaki döngü yeni isteği alır
                }
                let bekle = kalan.min(2000).max(200) as u64;
                tokio::time::sleep(std::time::Duration::from_millis(bekle)).await;
            }
            let yeni = deri_kuyruk().lock().map(|k| k.is_some()).unwrap_or(false);
            if yeni {
                continue; // daha yeni bir seçim var, bunu atla
            }
            let mut son_hata = String::new();
            let mut basarili = false;
            for deneme in 0..3 {
                match crate::skins::skin_uygula(&istek.acc, &istek.png, istek.slim).await {
                    Ok(_) => {
                        basarili = true;
                        let ad = if istek.id.is_empty() { "hesabin kendi derisi" } else { istek.id.as_str() };
                        crate::core::yikim_log(format!("deri hesaba uygulandi: {ad}"));
                        break;
                    }
                    Err(e) => {
                        son_hata = e;
                        if deneme < 2 {
                            tokio::time::sleep(std::time::Duration::from_millis(2500)).await;
                        }
                    }
                }
            }
            if basarili {
                // v0.7.17 — KANIT: "yüklendi" demek yetmez, diğer oyuncular
                // hesabın PROFİLİNDEKİ deriyi görür. Mojang profiline bakıp
                // gerçekten bu deri mi duruyor diye kontrol et.
                match crate::skins::hesaptaki_deri_ayni_mi(&istek.acc, &istek.png).await {
                    Ok(true) => deri_durum_yaz("ok", &istek.id, ""),
                    Ok(false) => {
                        crate::core::yikim_log(
                            "deri yuklendi AMA hesaptaki doku farkli — surum/hesap kontrol et"
                                .to_string(),
                        );
                        deri_durum_yaz(
                            "hata",
                            &istek.id,
                            "Mojang hesabi eski deride kaldi (yukleme kabul edilmedi)",
                        );
                    }
                    Err(e) => {
                        crate::core::yikim_log(format!("deri dogrulama atlandi: {e}"));
                        deri_durum_yaz("ok", &istek.id, "");
                    }
                }
            } else {
                crate::core::yikim_log(format!("deri hesaba uygulanamadi: {son_hata}"));
                deri_durum_yaz("hata", &istek.id, &son_hata);
            }
        }
    });
}

/// Oyun içi panele sonucu göster: `.yikim/deri-durum.txt` (ok|hata<TAB>id<TAB>mesaj).
fn deri_durum_yaz(durum: &str, id: &str, mesaj: &str) {
    let satir = format!(
        "{durum}\t{}\t{}\n",
        id.replace(['\t', '\n'], " "),
        mesaj.replace(['\t', '\n'], " ")
    );
    for inst in crate::instances::list() {
        let dir = inst.dir().join(".yikim");
        if std::fs::create_dir_all(&dir).is_ok() {
            let _ = std::fs::write(dir.join("deri-durum.txt"), &satir);
        }
    }
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
