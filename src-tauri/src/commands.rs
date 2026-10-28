use crate::{
    auth, config::YikimConfig, core, instances, instances::Instance, launcher, modpacks, repos,
    stats, util::write_json, yikim_mod,
};
use base64::Engine as _;
use serde::Serialize;
use std::path::PathBuf;
use std::sync::Arc;
use tauri::{AppHandle, Emitter, Manager};

// ---------- yardımcılar ----------

fn accounts_path() -> PathBuf {
    core::accounts_path()
}

fn load_accounts() -> Vec<auth::Account> {
    crate::util::read_json(&accounts_path()).unwrap_or_default()
}

fn save_accounts(list: &[auth::Account]) -> Result<(), String> {
    write_json(&accounts_path(), &list)
}

#[derive(Serialize)]
pub struct SanitizedAccount {
    pub id: String,
    pub name: String,
    pub kind: String,
    pub uuid: String,
}

fn sanitize(a: &auth::Account) -> SanitizedAccount {
    SanitizedAccount {
        id: a.id.clone(),
        name: a.name.clone(),
        kind: a.kind.clone(),
        uuid: a.uuid.clone(),
    }
}

fn selected_account() -> Result<auth::Account, String> {
    let cfg = YikimConfig::load_or_default();
    let list = load_accounts();
    list.iter()
        .find(|a| a.id == cfg.last_selected_account)
        .or_else(|| list.first())
        .cloned()
        .ok_or_else(|| "hesap yok".into())
}

// ---------- durum ----------

#[derive(Serialize)]
pub struct StateResponse {
    pub config: YikimConfig,
    pub accounts: Vec<SanitizedAccount>,
    pub instances: Vec<Instance>,
    pub featured_versions: Vec<String>,
    pub curseforge: bool,
    pub sys: SystemInfo,
}

#[tauri::command]
pub async fn cmd_get_state() -> Result<StateResponse, String> {
    let cfg = YikimConfig::load_or_default();
    let sys = system_info_inner().await;
    Ok(StateResponse {
        config: cfg,
        accounts: load_accounts().iter().map(sanitize).collect(),
        instances: instances::list(),
        featured_versions: modpacks::featured_versions(),
        curseforge: repos::curseforge_available(),
        sys,
    })
}

#[tauri::command]
pub async fn cmd_save_settings(
    app: AppHandle,
    config: YikimConfig,
) -> Result<YikimConfig, String> {
    config.save()?;
    // Köprü: tema her kurulumun .yikim/theme.json'ına yazılır — oyun açıkken bile
    // YikimTheme.sync() mtime'ı izlediği için renkler anında oyuna yansır.
    for inst in instances::list() {
        crate::curtain::write_theme_json(&inst, &config);
    }
    // tema değişince UI'ya haber ver
    let _ = app.emit("config-changed", &config);
    Ok(config)
}

// ---------- hesaplar ----------

#[tauri::command]
pub async fn cmd_list_accounts() -> Result<Vec<SanitizedAccount>, String> {
    Ok(load_accounts().iter().map(sanitize).collect())
}

// ---------- sahne emote paketleri ----------

/// Launcher karakter vitrinine eklenmiş emote'ları listeler: [{adi, icerik}]
#[tauri::command]
pub fn cmd_list_emotes() -> Result<Vec<serde_json::Value>, String> {
    let dir = crate::core::app_dir().join("emotes");
    let mut out: Vec<serde_json::Value> = Vec::new();
    if let Ok(rd) = std::fs::read_dir(&dir) {
        let mut dosyalar: Vec<std::path::PathBuf> =
            rd.filter_map(|s| s.ok()).map(|s| s.path()).collect();
        dosyalar.sort();
        for yol in dosyalar {
            if yol.extension().and_then(|e| e.to_str()) != Some("json") {
                continue;
            }
            if let Ok(icerik) = std::fs::read_to_string(&yol) {
                let adi = yol.file_name().and_then(|n| n.to_str()).unwrap_or("").to_string();
                out.push(serde_json::json!({ "adi": adi, "icerik": icerik }));
            }
        }
    }
    Ok(out)
}

/// Deneme alanından emote kaydet (launcher vitrinine kalıcı ekle)
#[tauri::command]
pub fn cmd_add_emote(icerik: String) -> Result<serde_json::Value, String> {
    emote_kaydet(&icerik)
}

/// Kaydetme ortak yolu: isim güvenliği + emotes/ klasörüne yaz.
///
/// Aynı emote'u tekrar yüklemek dosya çoğaltmaz: önce `uuid` eşleşmesine,
/// sonra ada bakılır ve bulunan dosyanın ÜZERİNE yazılır (Blockbench'te
/// güncelleyip yeniden sürükleme akışı). Eşleşme yoksa `ad.json`,
/// `ad-1.json`, … boş olan ilk ad kullanılır.
fn emote_kaydet(icerik: &str) -> Result<serde_json::Value, String> {
    let js: serde_json::Value = serde_json::from_str(icerik).map_err(|z| format!("geçersiz json: {z}"))?;
    let adi = js["name"].as_str().unwrap_or("emote").trim().to_string();
    let uuid = js["uuid"].as_str().unwrap_or("").trim().to_string();
    let guvenli: String = adi
        .chars()
        .map(|c| if c.is_alphanumeric() || c == '-' || c == '_' || c == ' ' { c } else { '_' })
        .collect();
    let guvenli = if guvenli.is_empty() { "emote".into() } else { guvenli };
    let dir = crate::core::app_dir().join("emotes");
    std::fs::create_dir_all(&dir).map_err(|z| z.to_string())?;

    // 1) mevcut dosyalarda aynı emote var mı? (uuid, yoksa ad)
    let mut mevcut: Vec<std::path::PathBuf> = std::fs::read_dir(&dir)
        .map(|rd| rd.filter_map(|s| s.ok()).map(|s| s.path()).collect())
        .unwrap_or_default();
    mevcut.sort();
    for yol in mevcut {
        if yol.extension().and_then(|e| e.to_str()) != Some("json") {
            continue;
        }
        let Ok(eski) = std::fs::read_to_string(&yol) else { continue };
        let Ok(ej) = serde_json::from_str::<serde_json::Value>(&eski) else { continue };
        let ayni_uuid = !uuid.is_empty() && ej["uuid"].as_str().unwrap_or("").trim() == uuid;
        let ayni_ad = uuid.is_empty() && ej["name"].as_str().unwrap_or("").trim() == adi;
        if ayni_uuid || ayni_ad {
            std::fs::write(&yol, icerik).map_err(|z| z.to_string())?;
            let ad = yol.file_name().and_then(|n| n.to_str()).unwrap_or("").to_string();
            return Ok(serde_json::json!({ "adi": ad, "guncellendi": true }));
        }
    }

    // 2) yeni dosya: boş ad bul
    let mut ad = format!("{guvenli}.json");
    let mut i = 1;
    while dir.join(&ad).exists() {
        ad = format!("{guvenli}-{i}.json");
        i += 1;
    }
    std::fs::write(dir.join(&ad), icerik).map_err(|z| z.to_string())?;
    Ok(serde_json::json!({ "adi": ad, "guncellendi": false }))
}

/// Emote dosya baytlarını JSON metnine çevirir.
/// Üç biçim desteklenir:
///   1) ZIP arşiv (PK\x03\x04) — içindeki emote.json çıkarılır
///   2) İkili Emotecraft paketi (0x10 FILE) — emote_binary çözer
///   3) Düz JSON (emote.json) — olduğu gibi döner
fn emote_icerik_coz(bayt: &[u8]) -> Result<String, String> {
    if bayt.len() > 16 * 1024 * 1024 {
        return Err("dosya çok büyük (16 MB üstü)".into());
    }
    if bayt.len() > 4 && bayt[0..4] == [0x50, 0x4B, 0x03, 0x04] {
        let imleç = std::io::Cursor::new(bayt);
        let mut arşiv = zip::ZipArchive::new(imleç)
            .map_err(|z| format!("emotecraft arşivi açılamadı: {z}"))?;
        let mut bulundu: Option<String> = None;
        for i in 0..arşiv.len() {
            let mut e = arşiv.by_index(i).map_err(|z| z.to_string())?;
            if !e.is_file() || !e.name().ends_with(".json") {
                continue;
            }
            let mut s = String::new();
            use std::io::Read;
            e.read_to_string(&mut s).map_err(|z| z.to_string())?;
            if let Ok(js) = serde_json::from_str::<serde_json::Value>(&s) {
                if js.get("emote").is_some() {
                    bulundu = Some(s);
                    break;
                }
            }
        }
        bulundu.ok_or_else(|| "arşivde emote.json bulunamadı".to_string())
    } else if crate::emote_binary::ikili_mi(bayt) {
        // İkili Emotecraft paketi → eski Emotecraft JSON biçimine çevir
        crate::emote_binary::coz_json(bayt)
    } else {
        String::from_utf8(bayt.to_vec())
            .map_err(|_| "dosya ne zip ne emote paketi ne metin".to_string())
    }
}

/// .emotecraft dosyasını içe aktar ve vitrin paketine kaydet.
#[tauri::command]
pub fn cmd_import_emote_dosyasi(path: String) -> Result<serde_json::Value, String> {
    let yol = std::path::PathBuf::from(&path);
    let bayt = std::fs::read(&yol).map_err(|z| format!("dosya okunamadı: {z}"))?;
    let icerik = emote_icerik_coz(&bayt)?;
    let ad = yol.file_name().and_then(|n| n.to_str()).unwrap_or("emote");
    let mut r = emote_kaydet(&icerik)?;
    r["kaynak"] = serde_json::json!(ad);
    Ok(r)
}

/// Deneme alanı (tarayıcı dosya seçici / HTML5 sürükle-bırak) için:
/// baytları çöz ama KAYDETME — oturum listesine eklenip önizlensin.
#[tauri::command]
pub fn cmd_emote_bayt_coz(veri: Vec<u8>) -> Result<String, String> {
    emote_icerik_coz(&veri)
}

/// Emote sil (yalnız dosya adı; yol geçişi kapalı)
#[tauri::command]
pub fn cmd_delete_emote(adi: String) -> Result<bool, String> {
    if adi.is_empty() || adi.contains("..") || adi.contains('/') || adi.contains('\\') {
        return Err("uygunsuz emote adı".into());
    }
    let yol = crate::core::app_dir().join("emotes").join(&adi);
    match std::fs::remove_file(&yol) {
        Ok(()) => Ok(true),
        Err(_) => Ok(false),
    }
}

/// Seçili hesabın skin'ini Mojang'dan çeker, cache'ler; {dosya, slim} döner.
/// Hesap yok/offline ise {varsayilan: true} → UI Steve yedeğine düşer.
#[tauri::command]
pub async fn cmd_get_account_skin(id: String) -> Result<serde_json::Value, String> {
    let list = load_accounts();
    let acc = match list.iter().find(|a| a.id == id) {
        Some(a) => a.clone(),
        None => return Ok(serde_json::json!({ "varsayilan": true })),
    };
    if acc.kind != "microsoft" || acc.uuid.trim().is_empty() {
        return Ok(serde_json::json!({ "varsayilan": true }));
    }
    let cache = crate::core::app_dir().join("cache");
    std::fs::create_dir_all(&cache).map_err(|z| z.to_string())?;
    let png = cache.join(format!("skin-{}.png", acc.uuid));
    let meta = cache.join(format!("skin-{}.json", acc.uuid));

    let oku_slim = || -> bool {
        std::fs::read_to_string(&meta)
            .ok()
            .and_then(|s| serde_json::from_str::<serde_json::Value>(&s).ok())
            .and_then(|j| j["slim"].as_bool())
            .unwrap_or(false)
    };

    if png.exists() {
        return Ok(serde_json::json!({ "dosya": png.to_string_lossy(), "slim": oku_slim() }));
    }

    let uuid = acc.uuid.replace('-', "");
    let url = format!("https://sessionserver.mojang.com/session/minecraft/profile/{uuid}");
    let resp = crate::core::http_client()
        .get(&url)
        .send()
        .await
        .map_err(|z| format!("oyun profili hatası: {z}"))?;
    if !resp.status().is_success() {
        return Err(format!("oyun profili alınamadı: {}", resp.status()));
    }
    let p: serde_json::Value = resp.json().await.map_err(|z| z.to_string())?;
    let tex_prop = p["properties"]
        .as_array()
        .and_then(|a| a.iter().find(|k| k["name"] == "textures"))
        .and_then(|k| k["value"].as_str())
        .ok_or("skin texture özelliği yok")?;
    let decoded = base64::engine::general_purpose::STANDARD
        .decode(tex_prop)
        .map_err(|z| format!("texture base64 hatası: {z}"))?;
    let tex: serde_json::Value =
        serde_json::from_slice(&decoded).map_err(|z| z.to_string())?;
    let skin_url = tex["textures"]["SKIN"]["url"]
        .as_str()
        .ok_or("skin url yok")?;
    let slim = tex["textures"]["SKIN"]["metadata"]["model"].as_str() == Some("slim");
    let bayt = crate::core::http_client()
        .get(skin_url)
        .send()
        .await
        .map_err(|z| z.to_string())?
        .bytes()
        .await
        .map_err(|z| z.to_string())?;
    std::fs::write(&png, &bayt).map_err(|z| z.to_string())?;
    let yari = cache.join(format!("skin-{}.json.yari", acc.uuid));
    std::fs::write(&yari, serde_json::json!({ "slim": slim }).to_string())
        .map_err(|z| z.to_string())?;
    let _ = std::fs::rename(&yari, &meta);

    Ok(serde_json::json!({ "dosya": png.to_string_lossy(), "slim": slim }))
}

#[tauri::command]
pub async fn cmd_add_offline_account(name: String) -> Result<SanitizedAccount, String> {
    let name = name.trim().to_string();
    if name.len() < 3 {
        return Err("isim en az 3 karakter olmalı".into());
    }
    let acc = auth::offline_account(&name);
    let mut list = load_accounts();
    list.retain(|a| a.id != acc.id);
    list.push(acc.clone());
    save_accounts(&list)?;
    let mut cfg = YikimConfig::load_or_default();
    cfg.last_selected_account = acc.id.clone();
    cfg.save()?;
    Ok(sanitize(&acc))
}

#[tauri::command]
pub async fn cmd_ms_login_begin(app: AppHandle) -> Result<SanitizedAccount, String> {
    // Gömülü pencereyle giriş; hesap diske yazılır, temiz hesap döner
    let acc = auth::ms_login_interactive(app).await?;
    let mut list = load_accounts();
    list.retain(|a| a.id != acc.id);
    list.push(acc.clone());
    save_accounts(&list)?;
    let mut cfg = YikimConfig::load_or_default();
    cfg.last_selected_account = acc.id.clone();
    cfg.save()?;
    Ok(sanitize(&acc))
}

#[tauri::command]
pub async fn cmd_ms_login_cancel(app: AppHandle) -> Result<(), String> {
    auth::close_login_window(&app);
    Ok(())
}

#[tauri::command]
pub async fn cmd_select_account(account_id: String) -> Result<(), String> {
    let mut cfg = YikimConfig::load_or_default();
    cfg.last_selected_account = account_id;
    cfg.save()?;
    Ok(())
}

#[tauri::command]
pub async fn cmd_remove_account(account_id: String) -> Result<(), String> {
    let mut list = load_accounts();
    list.retain(|a| a.id != account_id);
    save_accounts(&list)?;
    let mut cfg = YikimConfig::load_or_default();
    if cfg.last_selected_account == account_id {
        cfg.last_selected_account = list.first().map(|a| a.id.clone()).unwrap_or_default();
        cfg.save()?;
    }
    Ok(())
}

// ---------- instance'lar ----------

#[derive(Serialize)]
pub struct CreateInstanceResponse {
    pub instance: Instance,
    pub standard_mods_started: bool,
}

#[tauri::command]
pub async fn cmd_create_instance(
    app: AppHandle,
    mut instance: Instance,
) -> Result<CreateInstanceResponse, String> {
    if instance.name.trim().is_empty() {
        instance.name = "Yeni Kurulum".into();
    }
    if instance.mc_version.trim().is_empty() {
        return Err("Minecraft sürümü seçilmeli".into());
    }
    // fabric loader sürümü boşsa en günceli al
    if instance.mod_loader == "fabric" && instance.loader_version.trim().is_empty() {
        instance.loader_version = launcher::fabric_latest_loader().await.unwrap_or_default();
    }
    // forge build'i boşsa en günceli al (launch'ta da garanti edilir)
    if instance.mod_loader == "forge" && instance.loader_version.trim().is_empty() {
        instance.loader_version = launcher::forge_latest_build(&instance.mc_version).await.unwrap_or_default();
    }
    let created = instances::create(instance)?;

    // YIKIM çekirdeği — her kurulumda otomatik (yalnız Fabric + 1.21.x)
    if let Err(e) = yikim_mod::ensure_installed(&app, &created) {
        core::yikim_log(format!("YIKIM modu kurulamadı (kurulum engellenmedi): {e}"));
    }

    let mut started = false;
    if created.standard_mods && created.mod_loader == "fabric" {
        let handle = app.clone();
        let inst = created.clone();
        started = true;
        tauri::async_runtime::spawn(async move {
            if let Err(e) = install_standard_mods_inner(&handle, &inst).await {
                core::yikim_log(format!("standart modlar: {e}"));
            }
        });
    }
    Ok(CreateInstanceResponse { instance: created, standard_mods_started: started })
}

/// Standart modları kur (enabled → mods/, kapalı → mods/x.jar.disabled).
/// TEK mekanizma: toggle, oyun içi panel, perde — hepsi `.jar.disabled` kullanır.
async fn install_standard_mods_inner(
    handle: &AppHandle,
    inst: &Instance,
) -> Result<(), String> {
    #[derive(Serialize)]
    struct SmProgress {
        instance_id: String,
        done: u32,
        total: u32,
        current: String,
    }
    let mods = modpacks::standard_mods();
    let total = mods.len() as u32;
    let mods_dir = inst.mods_dir();
    let _ = std::fs::create_dir_all(&mods_dir);
    for (i, m) in mods.iter().enumerate() {
        let _ = handle.emit(
            "standard-mods-progress",
            &SmProgress {
                instance_id: inst.id.clone(),
                done: i as u32,
                total,
                current: m.name.clone(),
            },
        );
        // HER MOD mods/'a iner — kapalıysa .disabled son ekiyle (toggle'la birebir aynı)
        match repos::install_mod_into(handle, "modrinth", &m.id, None, inst, &mods_dir).await {
            Ok(file) => {
                if !m.enabled_by_default {
                    let from = mods_dir.join(&file);
                    let to = mods_dir.join(format!("{file}.disabled"));
                    let _ = std::fs::rename(&from, &to);
                }
            }
            Err(e) => {
                core::yikim_log(format!("standart mod atlandı ({}): {e}", m.name));
            }
        }
    }
    let _ = handle.emit(
        "standard-mods-progress",
        &SmProgress { instance_id: inst.id.clone(), done: total, total, current: String::new() },
    );
    Ok(())
}

// ---------- Mod paketi tamamlama (mevcut kurulumlar yeni modları otomatik alır) ----------

/// Dosya adı/slug karşılaştırması için normalize: '-', '_', '.' atılır, küçük harf.
fn mod_key_norm(s: &str) -> String {
    s.chars().filter(|c| *c != '-' && *c != '_' && *c != '.').collect::<String>().to_lowercase()
}

/// Jar'ın fabric.mod.json içindeki "id" alanı (varlık tespitinde ikinci kanıt).
fn jar_mod_id(path: &std::path::Path) -> Option<String> {
    let file = std::fs::File::open(path).ok()?;
    let mut zip = zip::ZipArchive::new(file).ok()?;
    let mut entry = zip.by_name("fabric.mod.json").ok()?;
    let mut text = String::new();
    std::io::Read::read_to_string(&mut entry, &mut text).ok()?;
    let js: serde_json::Value = serde_json::from_str(&text).ok()?;
    js.get("id").and_then(|v| v.as_str()).map(|s| s.to_string())
}

/// Mevcut KURULUMDA standart paketin eksik modlarını tamamla ve emekli modları ayır.
/// Her başlatmada çalışır: paket listesine yeni eklenen mod (ör. ukulib) eski
/// kurulumlara da otomatik düşer; listeden emekliye ayrılan modlar retired_mods/'a taşınır.
/// Dönüş: kurulan mod sayısı.
pub async fn complete_standard_mods(handle: &AppHandle, inst: &Instance) -> u32 {
    let mods_dir = inst.mods_dir();
    // 1) envanter: normalize dosya adları + fabric id'ler
    let mut present: std::collections::HashSet<String> = std::collections::HashSet::new();
    let mut names: Vec<String> = Vec::new();
    if let Ok(rd) = std::fs::read_dir(&mods_dir) {
        for e in rd.flatten() {
            let name = e.file_name().to_string_lossy().to_string();
            if !name.ends_with(".jar") && !name.ends_with(".jar.disabled") {
                continue;
            }
            let base = name
                .trim_end_matches(".disabled")
                .trim_end_matches(".jar")
                .to_string();
            present.insert(mod_key_norm(&base));
            // fabric mod ID — okunamazsa dosya adı eşleşmesi zaten yukarıda eklendi
            if let Some(id) = jar_mod_id(&e.path()) {
                present.insert(mod_key_norm(&id));
            }
            names.push(name);
        }
    }
    // HATA AYIKLAMA: envanterin ne bulduğunu yaz — tekrar kurma sorununu izleriz
    core::yikim_log(format!(
        "paket envanteri: {} dosya, {} benzersiz anahtar",
        names.len(),
        present.len()
    ));
    // 2) eksikleri kur (varsayılan kapalı modlar .jar.disabled olarak kurulur)
    // NOT: slug yerine hem slug hem dosya-adı önekiyle kontrol — çünkü dosya adları
    // "sodium-fabric-0.6.13-mc1.21.11" gibi sürüm ekleri taşır ve birebir slug
    // eşleşmesi yapılamaz. Öneki normalize edip karşılaştır.
    let mut added = 0u32;
    for m in modpacks::standard_mods() {
        let slug_norm = mod_key_norm(&m.slug);
        // yöntem 1: fabric id veya dosya adı normalize birebir eşleşir
        if present.contains(&slug_norm) {
            continue;
        }
        // yöntem 2: dosya adı öneki slug'ı İÇERİR (ör: "sodiumfabric..." starts_with "sodium")
        let found_by_prefix = names.iter().any(|n| {
            let base = n
                .trim_end_matches(".disabled")
                .trim_end_matches(".jar");
            let bn = mod_key_norm(base);
            bn.starts_with(&slug_norm) || slug_norm.starts_with(&bn.split(|c: char| c.is_ascii_digit()).next().unwrap_or(""))
        });
        if found_by_prefix {
            continue; // kurulu — kullanıcı tercihi bozulmaz
        }
        core::yikim_log(format!("paket eksik: {} (slug={}, anahtar={})", m.name, m.slug, slug_norm));
        match repos::install_mod_into(handle, "modrinth", &m.id, None, inst, &mods_dir).await {
            Ok(file) => {
                if !m.enabled_by_default {
                    let from = mods_dir.join(&file);
                    let to = mods_dir.join(format!("{file}.disabled"));
                    let _ = std::fs::rename(&from, &to);
                }
                added += 1;
                core::yikim_log(format!(
                    "paket tamamlandı: {} kuruldu ({})",
                    m.name,
                    if m.enabled_by_default { "açık" } else { "kapalı" }
                ));
                present.insert(slug_norm);
            }
            Err(e) => core::yikim_log(format!("paket tamamlama atlandı ({}): {e}", m.name)),
        }
    }
    // 3) emekli modları ayır (silme yok — retired_mods/ klasörüne taşı)
    let mut retired = 0u32;
    let retired_dir = inst.dir().join("retired_mods");
    for prefix in modpacks::retired_mod_prefixes() {
        let pkey = mod_key_norm(prefix);
        for name in &names {
            let base = name
                .trim_end_matches(".disabled")
                .trim_end_matches(".jar")
                .to_string();
            if !mod_key_norm(&base).starts_with(&pkey) {
                continue;
            }
            let _ = std::fs::create_dir_all(&retired_dir);
            if std::fs::rename(mods_dir.join(name), retired_dir.join(name)).is_ok() {
                retired += 1;
                core::yikim_log(format!("emekli mod ayrıldı ({name}) → retired_mods/"));
            }
        }
    }
    if added > 0 || retired > 0 {
        core::yikim_log(format!(
            "mod paketi güncellendi: {} kuruldu, {} emekliye ayrıldı",
            added, retired
        ));
    }
    added
}

#[tauri::command]
pub async fn cmd_delete_instance(id: String) -> Result<(), String> {
    instances::delete(&id)
}

#[tauri::command]
pub async fn cmd_rename_instance(id: String, name: String) -> Result<Instance, String> {
    instances::update(&id, |i| i.name = name)
}

#[tauri::command]
pub async fn cmd_duplicate_instance(id: String) -> Result<Instance, String> {
    instances::duplicate(&id)
}

#[tauri::command]
pub async fn cmd_get_instance(id: String) -> Result<Instance, String> {
    Instance::load(&id).ok_or_else(|| "kurulum bulunamadı".into())
}

#[tauri::command]
pub async fn cmd_set_instance_icon(id: String, icon: String) -> Result<Instance, String> {
    instances::update(&id, |i| i.icon = icon)
}

/// Kapak fotoğrafını kaldır.
#[tauri::command]
pub async fn cmd_set_instance_cover(id: String, cover: Option<String>) -> Result<Instance, String> {
    instances::update(&id, |i| i.cover = cover)
}

/// Dosya seçici: kurulum ikonu (png/jpg/ico/webp).
#[tauri::command]
pub async fn cmd_pick_instance_icon(app: AppHandle, instance_id: String) -> Result<Instance, String> {
    use tauri_plugin_dialog::DialogExt;
    let (tx, rx) = std::sync::mpsc::channel::<Option<String>>();
    app.dialog()
        .file()
        .set_title("Kurulum ikonu seç")
        .add_filter("Görsel", &["png", "jpg", "jpeg", "webp", "ico"])
        .pick_file(move |path| {
            let _ = tx.send(path.map(|p| p.to_string()));
        });
    let picked = rx.recv().ok().flatten().ok_or("seçim iptal edildi")?;
    let inst = Instance::load(&instance_id).ok_or("kurulum yok")?;
    let dest = core::ensure_subdir(&inst.dir(), "media").join("icon.png");
    copy_image_to(&picked, &dest, 256)?;
    instances::update(&instance_id, |i| i.icon = dest.to_string_lossy().to_string())
}

/// Dosya seçici: kurulum kapak fotoğrafı.
#[tauri::command]
pub async fn cmd_pick_instance_cover(app: AppHandle, instance_id: String) -> Result<Instance, String> {
    use tauri_plugin_dialog::DialogExt;
    let (tx, rx) = std::sync::mpsc::channel::<Option<String>>();
    app.dialog()
        .file()
        .set_title("Kapak seç (PNG/JPG/GIF/MP4)")
        .add_filter("Görsel & Video", &["png", "jpg", "jpeg", "webp", "gif", "mp4", "webm"])
        .pick_file(move |path| {
            let _ = tx.send(path.map(|p| p.to_string()));
        });
    let picked = rx.recv().ok().flatten().ok_or("seçim iptal edildi")?;
    let inst = Instance::load(&instance_id).ok_or("kurulum yok")?;
    let lower = picked.to_lowercase();
    let is_video = lower.ends_with(".mp4") || lower.ends_with(".webm");
    let is_gif = lower.ends_with(".gif");
    if is_video || is_gif {
        // Animasyonlu kapak: dosyayı olduğu gibi kopyala (dönüştürme YOK — animasyon korunur)
        let ext = if is_video { "mp4" } else { "gif" };
        let dest = core::ensure_subdir(&inst.dir(), "media").join(format!("cover.{}", ext));
        std::fs::copy(&picked, &dest).map_err(|e| format!("kapak kopyalanamadı: {e}"))?;
        instances::update(&instance_id, |i| i.cover = Some(dest.to_string_lossy().to_string()))
    } else {
        // Statik görsel: mevcut akış (JPG'ye dönüştür + optimize)
        let dest = core::ensure_subdir(&inst.dir(), "media").join("cover.jpg");
        copy_image_to(&picked, &dest, 1280)?;
        instances::update(&instance_id, |i| i.cover = Some(dest.to_string_lossy().to_string()))
    }
}

/// Paket logosunu (URL) kurulum klasörüne media/icon.png olarak indir (256px).
async fn download_pack_icon(url: &str, inst_dir: &std::path::Path) -> Result<String, String> {
    let resp = crate::core::http_client()
        .get(url)
        .send()
        .await
        .map_err(|e| e.to_string())?
        .error_for_status()
        .map_err(|e| e.to_string())?;
    let bytes = resp.bytes().await.map_err(|e| e.to_string())?;
    let img = image::load_from_memory(&bytes).map_err(|e| e.to_string())?;
    let img = if img.width().max(img.height()) > 256 {
        img.resize(256, 256, image::imageops::FilterType::Lanczos3)
    } else {
        img
    };
    let dest = core::ensure_subdir(inst_dir, "media").join("icon.png");
    img.save_with_format(&dest, image::ImageFormat::Png)
        .map_err(|e| e.to_string())?;
    Ok(dest.to_string_lossy().to_string())
}

/// Görseli hedefe kopyala; jpg/png dışıysa PNG'ye çevir, max_side üstü yeniden boyutlandır.
fn copy_image_to(src: &str, dest: &std::path::Path, max_side: u32) -> Result<(), String> {
    let img = image::open(src).map_err(|e| format!("görsel açılamadı: {e}"))?;
    let img = if img.width().max(img.height()) > max_side {
        img.resize(max_side, max_side, image::imageops::FilterType::Lanczos3)
    } else {
        img
    };
    if let Some(parent) = dest.parent() {
        let _ = std::fs::create_dir_all(parent);
    }
    if dest.extension().map(|x| x == "jpg").unwrap_or(false) {
        img.to_rgb8()
            .save_with_format(dest, image::ImageFormat::Jpeg)
            .map_err(|e| e.to_string())?;
    } else {
        img.save_with_format(dest, image::ImageFormat::Png)
            .map_err(|e| e.to_string())?;
    }
    Ok(())
}

/// Modlar sekmesi için: jar dosya adlarından Modrinth logo URL'leri çöz.
#[tauri::command]
pub async fn cmd_resolve_mod_icons(filenames: Vec<String>) -> Result<std::collections::HashMap<String, String>, String> {
    Ok(repos::resolve_mod_icon_urls(&filenames).await)
}

#[tauri::command]
pub async fn cmd_set_instance_java_preset(id: String, preset_id: String) -> Result<Instance, String> {
    instances::update(&id, |i| i.java_preset_id = preset_id)
}

#[tauri::command]
pub async fn cmd_set_instance_ram(id: String, ram_mb: u32) -> Result<Instance, String> {
    instances::update(&id, |i| {
        i.ram_mb = ram_mb.clamp(1024, 32768);
        // preset arg'ları {ram_mb} kullanıyor; anında yeniden yazmaya gerek yok
    })
}

/// "Özel" preset (v0.3.15): oyuncu chunk mesafesi + JVM argümanlarını kendisi
/// yazar. Launcher clamp yamaz — yazılan geçer (boş değer = alanı kapat).
#[tauri::command]
pub async fn cmd_set_instance_custom(
    id: String,
    view_distance: Option<u32>,
    custom_vm_args: Option<String>,
) -> Result<Instance, String> {
    instances::update(&id, |i| {
        i.view_distance = view_distance;
        i.custom_vm_args = custom_vm_args
            .map(|s| s.trim().to_string())
            .filter(|s| !s.is_empty());
    })
}

// ---------- preset & standart modlar ----------

#[tauri::command]
pub async fn cmd_list_java_arg_presets() -> Result<Vec<modpacks::JavaPreset>, String> {
    Ok(modpacks::java_presets())
}

#[tauri::command]
pub async fn cmd_list_standard_mods() -> Result<Vec<modpacks::StandardMod>, String> {
    Ok(modpacks::standard_mods())
}

#[tauri::command]
pub async fn cmd_list_versions() -> Result<serde_json::Value, String> {
    let all = launcher::list_release_versions().await.unwrap_or_default();
    Ok(serde_json::json!({
        "featured": modpacks::featured_versions(),
        "all": all,
    }))
}

// ---------- mod yönetimi ----------

#[derive(Serialize)]
pub struct UiMod {
    pub filename: String,
    pub enabled: bool,
    pub size: u64,
    pub modified: i64,
}

#[tauri::command]
pub async fn cmd_list_mods(instance_id: String) -> Result<Vec<UiMod>, String> {
    let inst = Instance::load(&instance_id).ok_or("kurulum yok")?;
    let mut out = Vec::new();
    let scan = |dir: &std::path::Path, enabled: bool| -> Vec<UiMod> {
        let mut v = Vec::new();
        if let Ok(entries) = std::fs::read_dir(dir) {
            for e in entries.flatten() {
                let p = e.path();
                if p.extension().map(|x| x == "jar").unwrap_or(false) {
                    let meta = e.metadata().ok();
                    v.push(UiMod {
                        filename: e.file_name().to_string_lossy().to_string(),
                        enabled,
                        size: meta.as_ref().map(|m| m.len()).unwrap_or(0),
                        modified: meta
                            .as_ref()
                            .and_then(|m| m.modified().ok())
                            .and_then(|t| t.duration_since(std::time::UNIX_EPOCH).ok())
                            .map(|d| d.as_millis() as i64)
                            .unwrap_or(0),
                    });
                }
            }
        }
        v
    };
    // aktif modlar + TEK kapalı mekanizması: mods/<ad>.jar.disabled (oyun içi köprüyle birebir)
    out.extend(scan(&inst.mods_dir(), true));
    if let Ok(entries) = std::fs::read_dir(inst.mods_dir()) {
        for e in entries.flatten() {
            let name = e.file_name().to_string_lossy().to_string();
            if !name.ends_with(".jar.disabled") {
                continue;
            }
            let meta = e.metadata().ok();
            out.push(UiMod {
                filename: name,
                enabled: false,
                size: meta.as_ref().map(|m| m.len()).unwrap_or(0),
                modified: meta
                    .as_ref()
                    .and_then(|m| m.modified().ok())
                    .and_then(|t| t.duration_since(std::time::UNIX_EPOCH).ok())
                    .map(|d| d.as_millis() as i64)
                    .unwrap_or(0),
            });
        }
    }
    // eski yerleşim kalıntısı (disabled_mods/) — geçiş süpürmesi taşımadan önce açılırsa
    out.extend(scan(&inst.dir().join("disabled_mods"), false));
    out.sort_by(|a, b| a.filename.cmp(&b.filename));
    Ok(out)
}

/// Eski `disabled_mods/` klasörünü TEK mekanizmaya taşır: `mods/<ad>.jar.disabled`.
/// Böylece oyun içi mod listesi launcher'dan kapatılan modları da gösterir.
pub fn migrate_disabled_mods(inst: &Instance) {
    let legacy = inst.dir().join("disabled_mods");
    let Ok(entries) = std::fs::read_dir(&legacy) else { return };
    let mut moved = 0usize;
    for e in entries.flatten() {
        let name = e.file_name().to_string_lossy().to_string();
        if !name.ends_with(".jar") {
            continue;
        }
        let target = inst.mods_dir().join(format!("{name}.disabled"));
        if target.exists() {
            continue;
        }
        if std::fs::rename(e.path(), &target).is_ok() {
            moved += 1;
        }
    }
    if moved > 0 {
        core::yikim_log(format!(
            "{moved} kapalı mod tek düzene taşındı (mods/*.jar.disabled — oyun içi listede görünür)"
        ));
    }
}

/// Oyun içi mod listesi için ikon manifesti: `.yikim/mod-icons.txt` (dosyaAdı<TAB>url)
/// VE ikon PNG'leri önceden `.yikim/icons/` altına iner. Mod oyun içinde AĞ KULLANMAZ;
/// yalnızca yerel dosyadan doku kurar — bozuk/eksik ikon durumu kökten ortadan kalkar.
/// YIKIM çekirdeğinin ikonu data: URI'dir ve atlanır — mod kendi "Y" rozetini çizer.
pub async fn write_mod_icons(inst: &Instance) {
    let mut filenames: Vec<String> = Vec::new();
    if let Ok(entries) = std::fs::read_dir(inst.mods_dir()) {
        for e in entries.flatten() {
            let n = e.file_name().to_string_lossy().to_string();
            if n.ends_with(".jar") || n.ends_with(".jar.disabled") {
                filenames.push(n);
            }
        }
    }
    if filenames.is_empty() {
        return;
    }
    let icons = repos::resolve_mod_icon_urls(&filenames).await;
    let dir = inst.dir().join(".yikim");
    let icons_dir = dir.join("icons");
    let _ = std::fs::create_dir_all(&icons_dir);
    let mut manifest = String::new();
    let mut jobs = Vec::new();
    for (name, url) in &icons {
        if url.starts_with("data:") {
            continue;
        }
        manifest.push_str(name);
        manifest.push('\t');
        manifest.push_str(url);
        manifest.push('\n');
        // PNG'yi önden indir (mod ile aynı dosya adı şablonu: java-hash-uzunluk.png) — paralel.
        // DİKKAT: Modrinth ikonları sık sık .webp gelir; modun NativeImage'ı yalnız PNG okur.
        // Bu yüzden indirilen her görsel PNG'ye ÇEVRİLİR ve ancak PNG sihirli baytalarıyla
        // cache geçerli sayılır (eski webp-content cache yeniden indirilir).
        let url = url.clone();
        let icons_dir = icons_dir.clone();
        jobs.push(tokio::spawn(async move {
            download_icon_png(&url, &icons_dir).await;
        }));
    }
    for j in jobs {
        let _ = j.await;
    }
    let _ = std::fs::write(dir.join("mod-icons.txt"), manifest);
    core::yikim_log("mod ikonları hazır (.yikim/mod-icons.txt + icons/)".into());
}

/// Tek icon indirir: webp/gif/jpeg → PNG çevirir, modun hash şablonuyla `.yikim/icons/`'a yazar.
/// Catalog arama sonuçlarının ikonları da bununla iner (mod ağa dokunmaz, yerelden okur).
pub async fn download_icon_png(url: &str, icons_dir: &std::path::Path) {
    let file = icons_dir.join(icon_cache_name(url));
    let cached_ok = std::fs::read(&file)
        .ok()
        .and_then(|b| b.first_chunk::<8>().map(|m| m[..] == [0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]))
        .unwrap_or(false);
    if cached_ok {
        return;
    }
    let Ok(resp) = crate::core::http_client().get(url).send().await else { return };
    if !resp.status().is_success() {
        return;
    }
    let Ok(bytes) = resp.bytes().await else { return };
    // WebP/GIF/JPEG → PNG (mod tarafı yalnız PNG decode eder)
    let img = match image::load_from_memory(&bytes) {
        Ok(img) => img,
        Err(_) => return,
    };
    let mut png = Vec::new();
    if img.write_to(&mut std::io::Cursor::new(&mut png), image::ImageFormat::Png).is_err() {
        return;
    }
    let _ = std::fs::write(&file, &png);
}

/// Java `String.hashCode()` — mod aynı karmayı üretir, dosya adları birebir eşleşir.
fn java_hash(s: &str) -> i32 {
    let mut h: i32 = 0;
    for b in s.as_bytes() {
        h = h.wrapping_mul(31).wrapping_add(*b as i32);
    }
    h
}

/// Modun (YikimIcons) cache dosya adı şablonu: toHexString(hash) + "-" + toHexString(len) + ".png"
fn icon_cache_name(url: &str) -> String {
    format!("{:x}-{:x}.png", java_hash(url) as u32, url.len())
}

#[tauri::command]
pub async fn cmd_toggle_mod(instance_id: String, filename: String, enabled: bool) -> Result<(), String> {
    let inst = Instance::load(&instance_id).ok_or("kurulum yok")?;
    // TEK mekanizma: mods/<ad>.jar ↔ mods/<ad>.jar.disabled
    // filename UI'dan gelir: "ad.jar" (açık) veya "ad.jar.disabled" (kapalı)
    // ÖNCE .jar.disabled, SONRA .jar suffix'ini temizle → base = "ad" (uzantısız)
    let base = filename
        .strip_suffix(".jar.disabled")
        .or_else(|| filename.strip_suffix(".jar"))
        .or_else(|| filename.strip_suffix(".disabled"))
        .map(str::to_string)
        .unwrap_or_else(|| filename.clone());
    let mods = inst.mods_dir();
    let active_path = mods.join(format!("{base}.jar"));
    let disabled_path = mods.join(format!("{base}.jar.disabled"));
    let (from, to) = if enabled {
        (disabled_path, active_path)
    } else {
        (active_path, disabled_path)
    };
    if from.exists() {
        std::fs::rename(&from, &to).map_err(|e| e.to_string())?;
        return Ok(());
    }
    // eski yerleşim: disabled_mods klasöründen doğrudan mods/'a taşı
    if enabled {
        let legacy = inst.dir().join("disabled_mods").join(format!("{base}.jar"));
        if legacy.exists() {
            std::fs::rename(&legacy, &to).map_err(|e| e.to_string())?;
        }
    }
    Ok(())
}

#[tauri::command]
pub async fn cmd_delete_mod(instance_id: String, filename: String) -> Result<(), String> {
    let inst = Instance::load(&instance_id).ok_or("kurulum yok")?;
    let base = filename
        .strip_suffix(".disabled")
        .map(str::to_string)
        .unwrap_or_else(|| filename.clone());
    for p in [
        inst.mods_dir().join(&filename),
        inst.mods_dir().join(format!("{base}.jar.disabled")),
        inst.dir().join("disabled_mods").join(&filename),
        inst.dir().join("disabled_mods").join(format!("{base}.jar")),
    ] {
        if p.exists() {
            std::fs::remove_file(&p).map_err(|e| e.to_string())?;
        }
    }
    Ok(())
}

#[tauri::command]
pub async fn cmd_open_mods_folder(instance_id: String) -> Result<(), String> {
    let inst = Instance::load(&instance_id).ok_or("kurulum yok")?;
    open::that(inst.mods_dir()).map_err(|e| e.to_string())
}

#[tauri::command]
pub async fn cmd_open_instance_folder(instance_id: String) -> Result<(), String> {
    let inst = Instance::load(&instance_id).ok_or("kurulum yok")?;
    open::that(inst.dir()).map_err(|e| e.to_string())
}

// ---------- içerik: doku paketi / shader / dünya ----------

/// İçerik türü → kurulum alt klasörü.
fn content_dir(inst: &Instance, kind: &str) -> Result<std::path::PathBuf, String> {
    match kind {
        "resourcepacks" => Ok(inst.dir().join("resourcepacks")),
        "shaderpacks" => Ok(inst.dir().join("shaderpacks")),
        "saves" => Ok(inst.dir().join("saves")),
        _ => Err("geçersiz içerik türü".into()),
    }
}

#[derive(Serialize)]
pub struct UiContentFile {
    pub name: String,
    pub is_dir: bool,
    pub size: u64,
    pub modified: i64,
    /// Dünyalar için kapak: <dünya>/icon.png (Minecraft bu dosyayı kendi kaydeder).
    pub icon: Option<String>,
}

/// Kurulumun içerik dosyalarını listele (doku paketi / shader / dünya).
#[tauri::command]
pub async fn cmd_list_content_files(
    instance_id: String,
    kind: String,
) -> Result<Vec<UiContentFile>, String> {
    let inst = Instance::load(&instance_id).ok_or("kurulum yok")?;
    let dir = content_dir(&inst, &kind)?;
    let mut out = Vec::new();
    if let Ok(entries) = std::fs::read_dir(&dir) {
        for e in entries.flatten() {
            let p = e.path();
            let name = e.file_name().to_string_lossy().to_string();
            if name.starts_with('.') {
                continue;
            }
            let is_dir = p.is_dir();
            // resourcepacks/shaderpacks → zip dosyaları; saves → klasörler (level.dat'lı)
            match kind.as_str() {
                "saves" => {
                    if !is_dir || !p.join("level.dat").exists() {
                        continue;
                    }
                }
                _ => {
                    if is_dir || !p.extension().map(|x| x == "zip").unwrap_or(false) {
                        continue;
                    }
                }
            }
            let meta = e.metadata().ok();
            let icon: Option<String> = match kind.as_str() {
                // dünya kapağı: Minecraft'ın kendi kaydettiği icon.png
                "saves" => {
                    if p.join("icon.png").is_file() {
                        Some(p.join("icon.png").to_string_lossy().to_string())
                    } else {
                        None
                    }
                }
                // doku/shader: zip kökündeki pack.png (yoksa kökteki ilk png) →
                // gizli önbellek dosyasına çıkarılıp gösterilir
                "resourcepacks" | "shaderpacks" => {
                    let raw = dir.join(format!(".yikim-icon-{}.png", name));
                    if !raw.exists() {
                        try_extract_pack_icon(&p, &raw);
                    }
                    raw.exists().then(|| raw.to_string_lossy().to_string())
                }
                _ => None,
            };
            out.push(UiContentFile {
                name,
                is_dir,
                size: meta.as_ref().map(|m| m.len()).unwrap_or(0),
                modified: meta
                    .as_ref()
                    .and_then(|m| m.modified().ok())
                    .and_then(|t| t.duration_since(std::time::UNIX_EPOCH).ok())
                    .map(|d| d.as_millis() as i64)
                    .unwrap_or(0),
                icon,
            });
        }
    }
    Ok(out)
}

/// Doku/shader zip'inin kökü kendi kapak resmini taşıyorsa (pack.png ya da
/// iç kökteki ilk png) söylenen yola çıkarır. Hata — sessizce yutulur.
fn try_extract_pack_icon(zip_path: &std::path::Path, out: &std::path::Path) {
    fn inner(zip_path: &std::path::Path, out: &std::path::Path) -> Result<(), String> {
        use std::io::Read;
        let f = std::fs::File::open(zip_path).map_err(|e| e.to_string())?;
        let mut archive = zip::ZipArchive::new(f).map_err(|e| e.to_string())?;
        let mut found: Option<usize> = None;
        for i in 0..archive.len() {
            let fname = archive
                .by_index(i)
                .map(|z| z.name().to_string())
                .unwrap_or_default();
            if fname.ends_with('/') {
                continue;
            }
            // kökteki pack.png idealdir; yoksa kök seviyedeki ilk png
            if fname == "pack.png" {
                found = Some(i);
                break;
            }
            if found.is_none() && !fname[1..].contains('/') && fname.to_lowercase().ends_with(".png") {
                found = Some(i);
            }
        }
        let Some(i) = found else {
            return Err("kapak resmi yok".into());
        };
        let mut z = archive.by_index(i).map_err(|e| e.to_string())?;
        let mut buf = Vec::new();
        z.read_to_end(&mut buf).map_err(|e| e.to_string())?;
        std::fs::write(out, buf).map_err(|e| e.to_string())?;
        Ok(())
    }
    let _ = inner(zip_path, out);
}

/// İçerik dosyası ekle: zip seç (doku/shader) veya klasör seç (dünya) → kurulum klasörüne kopyala.
#[tauri::command]
pub async fn cmd_add_content_file(
    app: AppHandle,
    instance_id: String,
    kind: String,
) -> Result<(), String> {
    use tauri_plugin_dialog::DialogExt;
    let inst = Instance::load(&instance_id).ok_or("kurulum yok")?;
    let dir = content_dir(&inst, &kind)?;
    let _ = std::fs::create_dir_all(&dir);
    let is_world = kind == "saves";
    let picked = tauri::async_runtime::spawn_blocking(move || {
        let d = app.dialog().file();
        let d = if is_world {
            d.add_filter("Minecraft Dünyası (klasör)", &[])
        } else {
            d.add_filter("Paket (.zip)", &["zip"])
        };
        if is_world {
            d.blocking_pick_folder()
        } else {
            d.blocking_pick_file()
        }
    })
    .await
    .map_err(|e| e.to_string())?;
    let Some(picked) = picked else { return Ok(()) };
    let src = picked.to_string();
    let src_path = std::path::PathBuf::from(&src);
    let file_name = src_path
        .file_name()
        .map(|s| s.to_string_lossy().to_string())
        .unwrap_or_else(|| "paket.zip".into());
    let dest = dir.join(&file_name);
    if src_path.is_dir() {
        crate::launcher::copy_dir_recursive(&src_path, &dest)?;
    } else {
        std::fs::copy(&src_path, &dest).map_err(|e| format!("kopyalanamadı: {e}"))?;
    }
    Ok(())
}

/// Hedef klasörde çakışmayan benzersiz bir ad üret ("deneme.zip" → "deneme (2).zip").
fn unique_target_name(dir: &std::path::Path, file_name: &str) -> String {
    let stem = std::path::Path::new(file_name)
        .file_stem()
        .map(|s| s.to_string_lossy().to_string())
        .unwrap_or_else(|| file_name.to_string());
    let ext = std::path::Path::new(file_name)
        .extension()
        .map(|s| format!(".{}", s.to_string_lossy()))
        .unwrap_or_default();
    let mut name = file_name.to_string();
    let mut n = 2u32;
    while dir.join(&name).exists() {
        name = format!("{} ({}){}", stem, n, ext);
        n += 1;
    }
    name
}

/// Sürükle-bırak: dışarıdan atılan dosyayı kural (mod/doku/shader/dünya/zip-dünya).
/// Sürükleme akışı için cmd_add_content_file'ın (dialoglu) doğrudan bildirim hâli.
#[tauri::command]
pub async fn cmd_add_content_path(
    instance_id: String,
    kind: String,
    path: String,
) -> Result<(), String> {
    let inst = Instance::load(&instance_id).ok_or("kurulum yok")?;
    let src = std::path::PathBuf::from(&path);
    if !src.exists() {
        return Err("dosya bulunamadı".into());
    }
    let dir = match kind.as_str() {
        "mods" => inst.dir().join("mods"),
        "resourcepacks" | "shaderpacks" => content_dir(&inst, &kind)?,
        "saves" => inst.dir().join("saves"),
        "saves_zip" => inst.dir().join("saves"),
        _ => return Err("geçersiz içerik türü".into()),
    };
    let _ = std::fs::create_dir_all(&dir);
    match kind.as_str() {
        "saves" => {
            // klasör dünya → doğrudan kopyala (klasör <name>'i hedef)
            let file_name = src
                .file_name()
                .map(|s| s.to_string_lossy().to_string())
                .unwrap_or_else(|| "Dunya".into());
            let target = dir.join(unique_target_name(&dir, &file_name));
            crate::launcher::copy_dir_recursive(&src, &target)?;
        }
        "saves_zip" => {
            // zip dünya → aç, kök düzleme indir (repos dünya kurulumuyla aynı davranış)
            let file_name = src
                .file_stem()
                .map(|s| s.to_string_lossy().to_string())
                .unwrap_or_else(|| "Dunya".into());
            let target = dir.join(unique_target_name(&dir, &format!("{}.zip", file_name)));
            let dest = target.with_extension(""); // .zip soneksiz klasör adı
            unzip_to_dir(&src, &dest)?;
        }
        _ => {
            // mod / doku / shader → tek dosya kopyası (jar & zip)
            let file_name = src
                .file_name()
                .map(|s| s.to_string_lossy().to_string())
                .unwrap_or_else(|| "paket.zip".into());
            let dest = dir.join(unique_target_name(&dir, &file_name));
            std::fs::copy(&src, &dest).map_err(|e| format!("kopyalanamadı: {e}"))?;
        }
    }
    Ok(())
}

/// Sürüklenen dosyanın ne olduğunu ayırt et (sürükle-bırak yönlendirmesi).
/// Sonuç: "jar" | "modpack" | "world" | "zip" (belirsiz zip → kullanıcıya sorulur) | "unknown"
#[tauri::command]
pub async fn cmd_route_dropped(path: String) -> Result<String, String> {
    let src = std::path::PathBuf::from(&path);
    if !src.exists() {
        return Err("dosya bulunamadı".into());
    }
    if src.is_dir() {
        return Ok(if src.join("level.dat").exists() {
            "world".into()
        } else {
            "unknown".into()
        });
    }
    let ext = src
        .extension()
        .map(|x| x.to_string_lossy().to_lowercase())
        .unwrap_or_default();
    match ext.as_str() {
        "jar" => return Ok("jar".into()),
        "mrpack" => return Ok("modpack".into()),
        "emotecraft" => return Ok("emote".into()),
        "zip" => {
            // içinde ne var? paket indeksleri / dünya verisi
            if let Ok(f) = std::fs::File::open(&src) {
                if let Ok(mut archive) = zip::ZipArchive::new(f) {
                    if archive.by_name("modrinth.index.json").is_ok()
                        || archive.by_name("manifest.json").is_ok()
                    {
                        return Ok("modpack".into());
                    }
                    let mut names: Vec<String> = archive
                        .file_names()
                        .take(50)
                        .map(|s| s.to_string())
                        .collect();
                    names.sort();
                    if names.iter().any(|n| n.trim_end_matches('/').ends_with("level.dat")
                        || n.trim_end_matches('/').ends_with("/level.dat")
                        || n == "level.dat")
                    {
                        return Ok("world".into());
                    }
                }
            }
            return Ok("zip".into());
        }
        _ => return Ok("unknown".into()),
    }
}

/// İçerik dosyasını sil (dosya veya klasör).
#[tauri::command]pub async fn cmd_delete_content_file(
    instance_id: String,
    kind: String,
    name: String,
) -> Result<(), String> {
    let inst = Instance::load(&instance_id).ok_or("kurulum yok")?;
    let dir = content_dir(&inst, &kind)?;
    let p = dir.join(&name);
    // isim kaçışını engelle: sadece doğrudan alt öğe silinebilir
    if p.parent() != Some(dir.as_path()) {
        return Err("geçersiz dosya adı".into());
    }
    if p.is_dir() {
        std::fs::remove_dir_all(&p).map_err(|e| e.to_string())
    } else {
        std::fs::remove_file(&p).map_err(|e| e.to_string())
    }
}

/// İçerik klasörünü dosya yöneticisinde aç.
#[tauri::command]
pub async fn cmd_open_content_folder(instance_id: String, kind: String) -> Result<(), String> {
    let inst = Instance::load(&instance_id).ok_or("kurulum yok")?;
    let dir = content_dir(&inst, &kind)?;
    let _ = std::fs::create_dir_all(&dir);
    open::that(dir).map_err(|e| e.to_string())
}

// ---------- repos (modrinth / curseforge) ----------

#[tauri::command]
pub async fn cmd_repos_search(
    query: String,
    kind: String,
    versions: Vec<String>,
    loader: String,
    offset: usize,
    limit: usize,
) -> Result<serde_json::Value, String> {
    let (results, cf) = repos::search_all(&query, &kind, &versions, &loader, offset, limit).await?;
    Ok(serde_json::json!({ "results": results, "curseforge": cf }))
}

/// Keşfet açılışı: en çok indirilen mod/paketler.
#[tauri::command]
pub async fn cmd_repos_popular(kind: String, loader: String) -> Result<Vec<repos::RepoSearchResult>, String> {
    repos::popular(&kind, &loader, 12).await
}

#[tauri::command]
pub async fn cmd_repos_get_versions(
    source: String,
    project_id: String,
    kind: String,
    loader: String,
    game_version: String,
) -> Result<Vec<repos::RepoVersion>, String> {
    repos::versions_for(&source, &project_id, &kind, &loader, &game_version).await
}

#[tauri::command]
pub async fn cmd_repos_install(
    app: AppHandle,
    instance_id: String,
    source: String,
    project_id: String,
    version_id: Option<String>,
) -> Result<String, String> {
    let inst = Instance::load(&instance_id).ok_or("kurulum yok")?;
    repos::install_mod_into(&app, &source, &project_id, version_id.as_deref(), &inst, &inst.mods_dir()).await
}

/// Mod paketi kur: yeni instance üretir, paketi açar, dosyaları indirir.
/// Kaynağın (Modrinth/CF) logosunu indirip kurulum ikonu yapar — kartlarda foto görünür.
#[tauri::command]
pub async fn cmd_install_pack_files(
    app: AppHandle,
    source: String,
    project_id: String,
    version_id: String,
    pack_name: String,
    icon: Option<String>,
    icon_url: Option<String>,
) -> Result<Instance, String> {
    let mut inst = Instance {
        id: format!("inst-{}", core::now_millis()),
        name: if pack_name.trim().is_empty() { "Mod Paketi".into() } else { pack_name },
        icon: icon.unwrap_or_else(|| "\u{1f4e6}".into()),
        source_pack: Some(format!("{source}:{project_id}")),
        ..Default::default()
    };
    // önce dizinleri oluştur ki installer yazabilsin
    instances::create(inst.clone())?;
    // paket logosunu media/icon.png'ye indir (aranabilirse)
    if let Some(url) = icon_url.as_deref().filter(|s| !s.is_empty()) {
        match download_pack_icon(url, &inst.dir()).await {
            Ok(p) => { inst.icon = p; }
            Err(e) => core::yikim_log(format!("paket ikonu indirilemedi: {e}")),
        }
    }
    match repos::install_modpack(&app, &source, &project_id, &version_id, &mut inst).await {
        Ok(()) => {
            // fabric/forge loader sürümü paketten geldiyse profil json'u önden kur
            if inst.mod_loader == "fabric" && !inst.loader_version.is_empty() {
                if let Err(e) = launcher::install_fabric_profile(&inst.mc_version, &inst.loader_version).await {
                    core::yikim_log(format!("fabric profile önden indirilemedi (launch'ta tekrar denenir): {e}"));
                }
            } else if inst.mod_loader == "forge" && !inst.loader_version.is_empty() {
                if let Err(e) = launcher::install_forge_profile(&inst.mc_version, &inst.loader_version).await {
                    core::yikim_log(format!("forge önden kurulamadı (launch'ta tekrar denenir): {e}"));
                }
            }
            inst.save()?;
            // YIKIM çekirdeği — paket kurulumlarında da otomatik
            if let Err(e) = yikim_mod::ensure_installed(&app, &inst) {
                core::yikim_log(format!("YIKIM modu kurulamadı (kurulum engellenmedi): {e}"));
            }
            Ok(inst)
        }
        Err(e) => {
            let _ = instances::delete(&inst.id);
            Err(e)
        }
    }
}

// ---------- haberler & istatistik & sistem ----------

/// Kullanıcıdan .mrpack / .zip paket dosyası seçmesini iste (yerel import).
#[tauri::command]
pub async fn cmd_pick_pack_file(app: AppHandle) -> Result<Option<String>, String> {
    use tauri_plugin_dialog::DialogExt;
    let picked = tauri::async_runtime::spawn_blocking(move || {
        app.dialog()
            .file()
            .add_filter("Mod Paketi (.mrpack / .zip)", &["mrpack", "zip"])
            .blocking_pick_file()
    })
    .await
    .map_err(|e| e.to_string())?;
    Ok(picked.map(|p| p.to_string()))
}

/// Yerel paket dosyasını (.mrpack veya CurseForge .zip) yeni kurulum olarak içe aktar.
/// Format dosya içeriğinden algılanır: modrinth.index.json → mrpack, manifest.json → cfpack.
#[tauri::command]
pub async fn cmd_import_pack_file(
    app: AppHandle,
    path: String,
    name: Option<String>,
) -> Result<Instance, String> {
    let p = std::path::PathBuf::from(&path);
    if !p.is_file() {
        return Err("dosya bulunamadı".into());
    }
    let zipf = std::fs::File::open(&p).map_err(|e| format!("paket okunamadı: {e}"))?;
    let mut archive = zip::ZipArchive::new(zipf).map_err(|e| format!("paket açılamadı: {e}"))?;
    let (fmt, inner_name): (String, String) = if archive.by_name("modrinth.index.json").is_ok() {
        let mut idx = archive.by_name("modrinth.index.json").map_err(|e| e.to_string())?;
        let mut s = String::new();
        use std::io::Read;
        idx.read_to_string(&mut s).map_err(|e| e.to_string())?;
        let index: serde_json::Value = serde_json::from_str(&s).map_err(|e| e.to_string())?;
        ("modrinth".into(), index["name"].as_str().unwrap_or("").to_string())
    } else if archive.by_name("manifest.json").is_ok() {
        let mut m = archive.by_name("manifest.json").map_err(|e| e.to_string())?;
        let mut s = String::new();
        use std::io::Read;
        m.read_to_string(&mut s).map_err(|e| e.to_string())?;
        let mf: serde_json::Value = serde_json::from_str(&s).map_err(|e| e.to_string())?;
        ("curseforge".into(), mf["name"].as_str().unwrap_or("").to_string())
    } else {
        return Err("geçersiz paket (modrinth.index.json veya manifest.json bulunamadı)".into());
    };
    let inst_name = name
        .filter(|n| !n.trim().is_empty())
        .or_else(|| Some(inner_name).filter(|n| !n.trim().is_empty()))
        .unwrap_or_else(|| {
            p.file_stem()
                .map(|s| s.to_string_lossy().to_string())
                .unwrap_or_else(|| "Mod Paketi".into())
        });
    let mut inst = Instance {
        id: format!("inst-{}", core::now_millis()),
        name: inst_name,
        icon: "📦".into(),
        source_pack: Some(format!("{fmt}:local")),
        ..Default::default()
    };
    instances::create(inst.clone())?;
    let result = match fmt.as_str() {
        "modrinth" => repos::install_mrpack(&app, &p, &mut inst).await,
        _ => repos::install_cfpack(&app, &p, &mut inst).await,
    };
    match result {
        Ok(()) => {
            if inst.mod_loader == "fabric" && !inst.loader_version.is_empty() {
                if let Err(e) =
                    launcher::install_fabric_profile(&inst.mc_version, &inst.loader_version).await
                {
                    core::yikim_log(format!("fabric profile önden indirilemedi: {e}"));
                }
            } else if inst.mod_loader == "forge" && !inst.loader_version.is_empty() {
                if let Err(e) = launcher::install_forge_profile(&inst.mc_version, &inst.loader_version).await {
                    core::yikim_log(format!("forge önden kurulamadı (launch'ta tekrar denenir): {e}"));
                }
            }
            inst.save()?;
            if let Err(e) = yikim_mod::ensure_installed(&app, &inst) {
                core::yikim_log(format!("YIKIM modu kurulamadı (kurulum engellenmedi): {e}"));
            }
            Ok(inst)
        }
        Err(e) => {
            let _ = instances::delete(&inst.id);
            Err(e)
        }
    }
}

/// Keşfet'ten içerik indirme: doku paketi / shader / datapack / dünya.
#[tauri::command]
pub async fn cmd_repos_install_content(
    app: AppHandle,
    instance_id: String,
    source: String,
    project_id: String,
    version_id: String,
    kind: String,
) -> Result<(), String> {
    let inst = Instance::load(&instance_id).ok_or("kurulum yok")?;
    let versions = repos::versions_for(&source, &project_id, &kind, "", &inst.mc_version).await?;
    let version = if version_id.is_empty() {
        versions.first().ok_or("paket sürümü yok")?
    } else {
        versions.iter().find(|v| v.id == version_id).ok_or("paket sürümü yok")?
    };
    let file = version.files.first().ok_or("paket dosyası yok")?;
    let tmp = crate::core::app_dir().join("tmp-content-download");
    let _ = std::fs::remove_dir_all(&tmp);
    std::fs::create_dir_all(&tmp).map_err(|e| e.to_string())?;
    let dest_file = tmp.join(&file.filename);
    repos::download_file(&file.url, &dest_file, "content").await?;
    let inst_dir = inst.dir();
    let result: Result<(), String> = match kind.as_str() {
        "resourcepack" => {
            let d = inst_dir.join("resourcepacks");
            std::fs::create_dir_all(&d).map_err(|e| e.to_string())?;
            std::fs::copy(&dest_file, d.join(&file.filename)).map(|_| ()).map_err(|e| e.to_string())
        }
        "shader" => {
            let d = inst_dir.join("shaderpacks");
            std::fs::create_dir_all(&d).map_err(|e| e.to_string())?;
            std::fs::copy(&dest_file, d.join(&file.filename)).map(|_| ()).map_err(|e| e.to_string())
        }
        "datapack" => {
            let d = inst_dir.join("datapacks");
            std::fs::create_dir_all(&d).map_err(|e| e.to_string())?;
            std::fs::copy(&dest_file, d.join(&file.filename)).map(|_| ()).map_err(|e| e.to_string())
        }
        "world" => {
            // dünya zip'i (level.dat kökte) → saves/<ad>/ altına aç
            let world_name = file.filename.trim_end_matches(".zip").to_string();
            let d = inst_dir.join("saves").join(&world_name);
            std::fs::create_dir_all(&d).map_err(|e| e.to_string())?;
            unzip_to_dir(&dest_file, &d)
        }
        _ => Err("geçersiz içerik türü".into()),
    };
    let _ = std::fs::remove_dir_all(&tmp);
    result
}

#[tauri::command]
pub async fn cmd_get_app_dir() -> Result<String, String> {
    Ok(core::app_dir().to_string_lossy().to_string())
}

#[tauri::command]
pub async fn cmd_list_news() -> Result<Vec<stats::NewsItem>, String> {
    stats::fetch_news().await
}

/// YIKIM özel duyurular (imzalı feed). İmza doğrulanamazsa boş döner — hata UI'ya
/// taşınmaz, kullanıcı haberleri normal görmeye devam eder.
#[tauri::command]
pub async fn cmd_list_yikim_news() -> Result<Vec<stats::YikimAnnouncement>, String> {
    match stats::fetch_yikim_news().await {
        Ok(items) => Ok(items),
        Err(e) => {
            core::yikim_log(format!("duyuru feed: {e}"));
            Ok(vec![])
        }
    }
}

#[derive(Serialize)]
pub struct StatsResponse {
    pub snapshot: stats::StatsSnapshot,
    pub instance_names: Vec<(String, String)>, // id → name
}

#[tauri::command]
pub async fn cmd_get_stats() -> Result<StatsResponse, String> {
    let snap = stats::snapshot();
    let names = instances::list()
        .into_iter()
        .map(|i| (i.id, i.name))
        .collect();
    Ok(StatsResponse { snapshot: snap, instance_names: names })
}

#[derive(Serialize, Clone)]
pub struct SystemInfo {
    pub os: String,
    pub arch: String,
    pub cpu: String,
    pub cores: usize,
    pub total_ram_mb: u64,
    pub java_count: u32,
}

async fn system_info_inner() -> SystemInfo {
    // sysinfo çağrısı bloklayıcı; task havuzuna at
    tokio::task::spawn_blocking(|| {
        use sysinfo::System;
        let mut sys = System::new();
        sys.refresh_cpu_all();
        sys.refresh_memory();
        let cpu = sys
            .cpus()
            .first()
            .map(|c| c.brand().trim().to_string())
            .unwrap_or_default();
        SystemInfo {
            os: format!("{} {}", System::long_os_version().unwrap_or_default(), std::env::consts::OS),
            arch: core::arch_name().into(),
            cpu,
            cores: sys.cpus().len(),
            total_ram_mb: sys.total_memory() / 1024 / 1024,
            java_count: 0,
        }
    })
    .await
    .unwrap_or(SystemInfo {
        os: String::new(),
        arch: core::arch_name().into(),
        cpu: String::new(),
        cores: 0,
        total_ram_mb: 0,
        java_count: 0,
    })
}

#[tauri::command]
pub async fn cmd_get_system_info() -> Result<SystemInfo, String> {
    Ok(system_info_inner().await)
}

// ---------- java ----------

#[tauri::command]
pub async fn cmd_resolve_java(version_id: String) -> Result<String, String> {
    let vj = launcher::load_version_json_merged(&version_id).await?;
    let component = vj["javaVersion"]["component"].as_str().unwrap_or("java-runtime-gamma").to_string();
    let major = vj["javaVersion"]["majorVersion"].as_u64().unwrap_or(17) as u32;
    let cfg = YikimConfig::load_or_default();
    let dir = launcher::resolve_java_dirs(&component, major, cfg.java_dir.clone()).await?;
    Ok(dir.to_string_lossy().to_string())
}

#[tauri::command]
pub async fn cmd_pick_java(app: AppHandle) -> Result<Option<String>, String> {
    use tauri_plugin_dialog::DialogExt;
    let (tx, rx) = std::sync::mpsc::channel::<Option<String>>();
    app.dialog()
        .file()
        .set_title("Java bin klasörünü seç (java.exe içeren)")
        .pick_folder(move |path| {
            let _ = tx.send(path.map(|p| p.to_string()));
        });
    Ok(rx.recv().ok().flatten())
}

// ---------- başlatma ----------

#[derive(Serialize)]
pub struct LaunchResponse {
    pub pid: u32,
}

#[tauri::command]
pub async fn cmd_launch_instance(app: AppHandle, instance_id: String) -> Result<LaunchResponse, String> {
    let mut inst = Instance::load(&instance_id).ok_or("kurulum yok")?;
    let account = selected_account()?;

    // Microsoft token tazele (süresi < 5 dk kaldıysa)
    let account = if account.kind == "microsoft" {
        if account.expires_at - core::now_millis() < 5 * 60 * 1000 {
            let refreshed = auth::refresh_account(&account).await?;
            let mut list = load_accounts();
            list.retain(|a| a.id != refreshed.id);
            list.push(refreshed.clone());
            save_accounts(&list)?;
            refreshed
        } else {
            account
        }
    } else {
        account
    };

    // sürüm kimliği
    let version_id = match inst.mod_loader.as_str() {
        "vanilla" => inst.mc_version.clone(),
        "fabric" => {
            if inst.loader_version.is_empty() {
                inst.loader_version = launcher::fabric_latest_loader().await?;
                inst.save()?;
            } else {
                // eski kayıtlı loader, güncel stable'dan küçükse yükselt (modlar
                // yeni loader istiyor — aksi halde FabricLoader uyumsuzluk hatası
                // atıyor ve oyun açılmıyor)
                if let Ok(latest) = launcher::fabric_latest_loader().await {
                    if launcher::loader_version_lt(&inst.loader_version, &latest) {
                        core::yikim_log(format!(
                            "fabric loader yükseltiliyor: {} -> {latest}",
                            inst.loader_version
                        ));
                        inst.loader_version = latest;
                        inst.save()?;
                    }
                }
            }
            let vid = format!("fabric-loader-{}-{}", inst.loader_version, inst.mc_version);
            if !crate::core::versions_dir().join(&vid).join(format!("{vid}.json")).exists() {
                launcher::install_fabric_profile(&inst.mc_version, &inst.loader_version).await?;
            }
            vid
        }
        "forge" => {
            if inst.loader_version.is_empty() {
                inst.loader_version = launcher::forge_latest_build(&inst.mc_version).await?;
                inst.save()?;
            }
            // mrpack/import bazen tam id ("1.21.1-forge-52.0.24") yazar — ayıkla
            let forge_ver = inst
                .loader_version
                .rsplit_once("-forge-")
                .map(|(_, v)| v.to_string())
                .unwrap_or_else(|| inst.loader_version.clone());
            let vid = format!("{}-forge-{}", inst.mc_version, forge_ver);
            if !crate::core::versions_dir().join(&vid).join(format!("{vid}.json")).exists() {
                launcher::install_forge_profile(&inst.mc_version, &forge_ver).await?;
            }
            vid
        }
        other => return Err(format!("bilinmeyen loader: {other}")),
    };

    let _ = app.emit(
        "launch-progress",
        &launcher::LaunchProgress { stage: "manifest".into(), percent: 2, detail: "Sürüm bilgisi alınıyor".into() },
    );

    let vj = launcher::load_version_json_merged(&version_id).await?;
    launcher::download_all_for_version(&vj, &app, 5, 60).await?;

    // java
    let component = vj["javaVersion"]["component"].as_str().unwrap_or("java-runtime-gamma").to_string();
    let major = vj["javaVersion"]["majorVersion"].as_u64().unwrap_or(17) as u32;
    let cfg = YikimConfig::load_or_default();
    let java_dir = launcher::resolve_java_dirs(&component, major, cfg.java_dir.clone()).await?;

    // Oyun içi ikonlar: YALNIZCA İLK kurulumda (mods boşken) indirilir.
    // Sonraki açılışlarda ASLA — 50+ API çağrısı interneti doyuruyor ve FPS düşürüyor.
    // İkonlar zaten cache'li, mod yerel dosyadan okur.
    if inst.standard_mods && inst.mod_loader == "fabric" {
        let mods_empty = inst
            .mods_dir()
            .read_dir()
            .map(|mut d| d.next().is_none())
            .unwrap_or(true);
        if mods_empty {
            install_standard_mods_inner(&app, &inst).await?;
            // İkonları SADECE ilk kurulumda indir
            write_mod_icons(&inst).await;
        }
    }

    // YIKIM çekirdeği — her başlatmada garanti (eski kurulumlar da bu yolla kavrıyor)
    if let Err(e) = yikim_mod::ensure_installed(&app, &inst) {
        core::yikim_log(format!("YIKIM modu doğrulanamadı (başlatma engellenmedi): {e}"));
    }

    // (İkonlar zaten ilk kurulumda indirildi — her açılışta 50+ API çağrısı YOK)

    // Köprü: tema + kurulum kimliğini modla paylaş (mod .yikim/theme.json'u okur)
    crate::curtain::write_theme_json(&inst, &cfg);
    // Atölye yetkisi: hesap adı + türü launcher'da bilinir → mod güvenle okur
    crate::curtain::write_atolye_yetki(&inst, &cfg, &account.name, &account.kind);

    // Ayar profili: her açılışta yeniden zorlanır (dil TR, sınırsız FPS, VSync kapalı,
    // ölçek 2, erişilebilirlik sarsıntıları kapalı) — başlangıç ekranı atlanır.
    // "Özel" preset: oyuncunun seçtiği chunk mesafesi de burada zorlanır (v0.3.15).
    let mut profil_ekstra: Vec<(&str, String)> = Vec::new();
    if let Some(vd) = inst.view_distance {
        profil_ekstra.push(("renderDistance", vd.to_string()));
    }
    crate::game_options::ensure_profile_with(&inst.dir(), &profil_ekstra);
    // Sunucu listesi: YIKIMDARA (yikimdara.com.tr) her kurulumda hazır dursun.
    crate::server_list::ensure_default(&inst.dir());

    let _ = app.emit(
        "launch-progress",
        &launcher::LaunchProgress { stage: "starting".into(), percent: 92, detail: "Oyun başlatılıyor".into() },
    );

    // canlı oturum (istatistik)
    let session = Arc::new(stats::LiveSession::new(&inst.id, &version_id));
    let pid = launcher::launch_game(app.clone(), inst.clone(), &version_id, account, &java_dir, session).await?;

    // NOT: Normal açılışta perde YOK. Perde yalnızca oyun içi YIKIM modundan gelen
    // mod değişikliği (restart) akışında açılır — bkz. cmd_restart_curtain_open.

    // oyun sürecini takip et
    if let Some(state) = app.try_state::<crate::AppState>() {
        *state.game_pid.write().await = Some(pid);
    }

    // instance'ı "son oynanan" yap
    instances::update(&inst.id, |i| i.last_played = core::now_millis())?;

    // Oyun süreci doğdu: launcher penceresini gizle (RAM tasarrufu + masaüstü
    // temizliği). Oyun kapanınca curtain::handle_game_exit geri gösterir;
    // restart akışında perde altında tekrar hazır olur.
    if cfg.hide_on_launch {
        if let Some(w) = app.get_webview_window("main") {
            let _ = w.hide();
        }
    }

    Ok(LaunchResponse { pid })
}

#[tauri::command]
pub async fn cmd_kill_game(app: AppHandle) -> Result<(), String> {
    let pid = if let Some(state) = app.try_state::<crate::AppState>() {
        state.game_pid.write().await.take()
    } else {
        None
    };
    let Some(pid) = pid else { return Ok(()) };
    use sysinfo::{Pid, ProcessesToUpdate, System};
    let mut sys = System::new();
    sys.refresh_processes(ProcessesToUpdate::Some(&[Pid::from_u32(pid)]), true);
    if let Some(proc) = sys.process(Pid::from_u32(pid)) {
        proc.kill();
    }
    Ok(())
}

#[tauri::command]
pub async fn cmd_cancel_downloads() -> Result<(), String> {
    crate::util::cancel_all_downloads();
    Ok(())
}

#[tauri::command]
pub async fn cmd_check_updates() -> Result<serde_json::Value, String> {
    let current = env!("CARGO_PKG_VERSION");
    let latest = repos::latest_release_tag("YKSAMI1", "yikimlient").await;
    Ok(serde_json::json!({ "current": current, "latest": latest }))
}

#[derive(Serialize)]
pub struct CommunityStats {
    pub downloads: u64,
    pub stars: u64,
}

/// Topluluk istatistikleri: GitHub Releases indirilme sayısı + yıldız.
/// 5 dakika cache'li — her açılışta GitHub API'sini boşuna yormayalım.
#[tauri::command]
pub async fn cmd_get_community_stats() -> Result<CommunityStats, String> {
    let cache_path = crate::core::app_dir().join("community-stats.json");
    // cache: 5 dakika
    if let Ok(text) = std::fs::read_to_string(&cache_path) {
        if let Ok(js) = serde_json::from_str::<serde_json::Value>(&text) {
            let at = js["at"].as_i64().unwrap_or(0);
            if crate::core::now_millis() - at < 300_000 {
                return Ok(CommunityStats {
                    downloads: js["downloads"].as_u64().unwrap_or(0),
                    stars: js["stars"].as_u64().unwrap_or(0),
                });
            }
        }
    }
    let mut downloads: u64 = 0;
    // Releases API: her release'in asset'lerinin download_count toplamı
    if let Ok(js) = crate::core::http_client()
        .get("https://api.github.com/repos/YKSAMI1/yikimlient/releases")
        .header("User-Agent", "YIKIMLient")
        .send()
        .await
    {
        if js.status().is_success() {
            if let Ok(rel) = js.json::<serde_json::Value>().await {
                if let Some(arr) = rel.as_array() {
                    for r in arr {
                        if let Some(assets) = r["assets"].as_array() {
                            for a in assets {
                                downloads += a["download_count"].as_u64().unwrap_or(0);
                            }
                        }
                    }
                }
            }
        }
    }
    let mut stars: u64 = 0;
    if let Ok(js) = crate::core::http_client()
        .get("https://api.github.com/repos/YKSAMI1/yikimlient")
        .header("User-Agent", "YIKIMLient")
        .send()
        .await
    {
        if js.status().is_success() {
            if let Ok(repo) = js.json::<serde_json::Value>().await {
                stars = repo["stargazers_count"].as_u64().unwrap_or(0);
            }
        }
    }
    let _ = crate::util::write_json(
        &cache_path,
        &serde_json::json!({ "at": crate::core::now_millis(), "downloads": downloads, "stars": stars }),
    );
    Ok(CommunityStats { downloads, stars })
}

// ---------- Perde (oyun içi mod değişikliği akışı) ----------
// Akışın tamamı (perde aç → uygula → yeniden başlat → perdeyi kapat) curtain.rs'te
// Rust çekirdeğinde yürür. Aşağıdaki komutlar yalnızca elle teşhis/arayüz içindir.

/// Teşhis komutu: restart isteğini Rapide uygula (akış normalde bunu kendisi yapar).
#[tauri::command]
pub async fn cmd_restart_curtain_open(
    app: AppHandle,
) -> Result<Option<crate::curtain::CurtainPlanView>, String> {
    Ok(crate::curtain::open_restart_curtain(&app).await)
}

/// Teşhis komutu: restart isteğini uygula (perde event'leri yine canlı basılır).
#[tauri::command]
pub async fn cmd_process_restart_request(
    app: AppHandle,
) -> Result<Option<crate::curtain::CurtainPlan>, String> {
    crate::curtain::process_restart(&app).await
}

/// Perde penceresi yüklenince planı çeker (pencere açılış yarışını önler).
#[tauri::command]
pub async fn cmd_get_curtain_plan(
    app: AppHandle,
) -> Result<Option<crate::curtain::CurtainPlanView>, String> {
    if let Some(state) = app.try_state::<crate::AppState>() {
        Ok(state.curtain_plan.read().await.clone())
    } else {
        Ok(None)
    }
}

/// Perdeyi kapat (yeniden başlatma tamamlandığında frontend bu komutu çağırır).
/// Plan state'ini de temizler (bir sonraki akışta eski liste görünmesin).
#[tauri::command]
pub async fn cmd_curtain_ready(app: AppHandle) -> Result<(), String> {
    crate::curtain::close_curtain(&app).await;
    Ok(())
}

/// Oyun içi katalog isteklerini (catalog-request.json) izleyip yanıtla (catalog-response.txt).
/// Ön planda arka plan görevi olarak çalışır; launcher açık kaldığı sürece canlıdır.
// ---------- katalog arama onbellegi (internet doygunluk korumasi) ----------

type CatalogCache = std::sync::Mutex<std::collections::HashMap<String, (std::time::Instant, Vec<String>, String)>>;

fn catalog_cache() -> &'static CatalogCache {
    static CACHE: std::sync::OnceLock<CatalogCache> = std::sync::OnceLock::new();
    CACHE.get_or_init(|| std::sync::Mutex::new(std::collections::HashMap::new()))
}

fn catalog_cache_get(key: &str) -> Option<(std::time::Instant, Vec<String>, String)> {
    catalog_cache().lock().ok()?.get(key).cloned()
}

fn catalog_cache_put(key: &str, rows: Vec<String>, header_err: String) {
    let mut map = match catalog_cache().lock() {
        Ok(m) => m,
        Err(_) => return,
    };
    // onbellegi sinirli tut (32 arama) — eski girdiler zaten TTL ile eskir
    if map.len() > 32 {
        map.clear();
    }
    map.insert(key.to_string(), (std::time::Instant::now(), rows, header_err));
}

/// Katalog yanitini diske yaz (YikimBridge.readCatalogResponse sozlesmesi):
/// 1. satir JSON baslik (mod `"id"` ANAHTARINI TIRNAKLI arar), 2+ satir sekme ayracli satirlar.
fn write_catalog_response(inst_dir: &std::path::Path, id: i64, source: &str, header_err: &str, rows: &[String]) {
    let resp_path = inst_dir.join(".yikim").join("catalog-response.txt");
    if let Some(parent) = resp_path.parent() {
        let _ = std::fs::create_dir_all(parent);
    }
    let err_clean = header_err
        .replace('"', "'")
        .replace(['\n', '\r'], " ");
    let header = format!(
        "{{\"id\": {id}, \"source\": \"{source}\", \"error\": \"{err_clean}\", \"total\": {}}}\n",
        rows.len()
    );
    let mut out = header;
    for row in rows {
        out.push_str(row);
        out.push('\n');
    }
    let _ = std::fs::write(&resp_path, out);
}

pub fn spawn_catalog_watcher(_app: tauri::AppHandle) {
    tauri::async_runtime::spawn(async move {
        loop {
            tokio::time::sleep(std::time::Duration::from_millis(700)).await;
            let dir = crate::core::instances_dir();
            let Ok(entries) = std::fs::read_dir(&dir) else { continue };
            for entry in entries.flatten() {
                let req_path = entry.path().join(".yikim").join("catalog-request.json");
                if !req_path.is_file() {
                    continue;
                }
                let Ok(content) = std::fs::read_to_string(&req_path) else { continue };
                // isteği hemen sil (tek kullanımlık)
                let _ = std::fs::remove_file(&req_path);
                let Ok(req) = serde_json::from_str::<serde_json::Value>(&content) else { continue };
                let id = req["id"].as_i64().unwrap_or(0);
                let query = req["query"].as_str().unwrap_or("").to_string();
                let source = req["source"].as_str().unwrap_or("all").to_string();
                let limit = req["limit"].as_u64().unwrap_or(20).min(40) as usize;
                // mod v1.3.1 catalog isteğine "instance" YAZMAZ → isteğin bulunduğu
                // kurulum klasörünün adı kimliktir (restart isteğindekiyle aynı tolerans)
                let mut instance_id = req["instance"].as_str().unwrap_or("").to_string();
                if instance_id.is_empty() {
                    instance_id = entry.file_name().to_string_lossy().to_string();
                }

                let inst = crate::instances::Instance::load(&instance_id);
                let loader = inst.as_ref().map(|i| i.mod_loader.clone()).unwrap_or_default();
                let mc = inst.as_ref().map(|i| i.mc_version.clone()).unwrap_or_default();
                // sürüm süzgeci: kurulum çözülemediyse süzmesiz ara (sonuç gelmesin diye boş durma)
                let version_filter: Vec<String> = if mc.is_empty() { vec![] } else { vec![mc.clone()] };

                // INTERNET KORUMASI: ayni arama 10 dk icinde tekrar gelirse AG'A CIKMA -
                // onbellekten yanitla. Oyun sirasinda katalog ayni aramayi tekrarlarsa
                // (log'da 2-3 dk arayla tekrar goruldu) internet doyuyordu.
                let cache_key = format!("{query}|{source}|{limit}|{loader}|{mc}");
                if let Some((at, rows, header_err)) = catalog_cache_get(&cache_key) {
                    if at.elapsed() < std::time::Duration::from_secs(600) {
                        write_catalog_response(&entry.path(), id, &source, &header_err, &rows);
                        core::yikim_log(format!("katalog onbellekten yanitlandi: {instance_id} (id:{id}, ag yok)"));
                        continue;
                    }
                }

                let mut header_err = "".to_string();
                let mut rows: Vec<String> = Vec::new();
                // katalog ikonlarını önden indirmek için URL listesi
                let mut icon_urls: Vec<String> = Vec::new();
                let search_sources: Vec<&str> = if source == "all" {
                    vec!["modrinth", "curseforge"]
                } else {
                    vec![match source.as_str() { "curseforge" => "curseforge", _ => "modrinth" }]
                };
                for src in &search_sources {
                    if *src == "curseforge" && !repos::curseforge_available() {
                        continue;
                    }
                    match repos::search_all(&query, "mod", &version_filter, &loader, 0, limit).await {
                        Ok((results, _)) => {
                            for r in results.into_iter().filter(|r| search_sources.contains(&r.source.as_str())) {
                                // açıklamada sekme/newline olursa satır parse'ı bozulur — temizle
                                let desc = r.description.replace(['\t', '\n', '\r'], " ");
                                let title = r.title.replace(['\t', '\n', '\r'], " ");
                                if !r.icon_url.is_empty() && !r.icon_url.starts_with("data:") {
                                    icon_urls.push(r.icon_url.clone());
                                }
                                rows.push(format!(
                                    "{}\t{}\t{}\t{}\t{}\t{}\t{}",
                                    r.id, title, desc, r.downloads, r.author, r.source, r.icon_url
                                ));
                            }
                        }
                        Err(e) => header_err = e,
                    }
                }

                // yanıtı yaz — YikimBridge.readCatalogResponse sözleşmesi:
                //   1. satır: JSON biçimli başlık. Mod `"id"` ANAHTARINI TIRNAKLI arar
                //   (YikimJson needle = "key"), id kendi istek numarasıyla eşleşmezse
                //   yanıtı reddeder. Metin değerler tırnaklı, sayılar düz.
                //   2+ satır: sekme ayraçlı slug, başlık, açıklama, indirme, yazar…
                catalog_cache_put(&cache_key, rows.clone(), header_err.clone());

                let resp_path = entry.path().join(".yikim").join("catalog-response.txt");
                if let Some(parent) = resp_path.parent() {
                    let _ = std::fs::create_dir_all(parent);
                }
                let err_clean = header_err
                    .replace('"', "'")
                    .replace(['\n', '\r'], " ");
                let header = format!(
                    "{{\"id\": {id}, \"source\": \"{source}\", \"error\": \"{err_clean}\", \"total\": {}}}\n",
                    rows.len()
                );
                let mut out = header;
                for row in rows {
                    out.push_str(&row);
                    out.push('\n');
                }
                let _ = std::fs::write(&resp_path, out);
                // KATALOG İKONLARI: arama sonuçlarının ikonlarını da önden indir.
                // Mod ağa dokunmaz; YikimIcons yalnız yerel PNG'den doku kurar.
                // İndirilmezse katalogda yalnız harf rozetleri görünür (kullanıcı hatası).
                {
                    let icons_dir = entry.path().join(".yikim").join("icons");
                    let _ = std::fs::create_dir_all(&icons_dir);
                    // 40 PARALEL DEGIL — 5'lik gruplar halinde indir (internet doygunluk korumasi)
                    for chunk in icon_urls.chunks(5) {
                        let mut jobs = Vec::new();
                        for r in chunk {
                            let url = r.clone();
                            let dir2 = icons_dir.clone();
                            jobs.push(tokio::spawn(async move {
                                crate::commands::download_icon_png(&url, &dir2).await;
                            }));
                        }
                        for j in jobs {
                            let _ = j.await;
                        }
                    }
                }
                core::yikim_log(format!("oyun içi katalog yanıtı yazıldı: {instance_id} (id:{id})"));
            }
        }
    });
}

// ---------- Loglar ----------

#[derive(Serialize)]
pub struct LogFileInfo {
    /// "live" için rezerve değil; dosya kimliği ("yikimlient-latest.log", "latest.log" veya "2026-10-07-1.log.gz")
    pub id: String,
    pub label: String,
    pub date: String,
    pub time: String,
    pub size: u64,
}

fn push_log_file(
    out: &mut Vec<LogFileInfo>,
    p: &std::path::Path,
    id: String,
    label: String,
    date_override: Option<String>,
) {
    let meta = std::fs::metadata(p).ok();
    let size = meta.as_ref().map(|m| m.len()).unwrap_or(0);
    let (date, time) = match (date_override, meta.and_then(|m| m.modified().ok())) {
        (Some(d), Some(t)) => {
            let dt: chrono::DateTime<chrono::Local> = t.into();
            (d, dt.format("%H:%M").to_string())
        }
        (None, Some(t)) => {
            let dt: chrono::DateTime<chrono::Local> = t.into();
            (dt.format("%Y-%m-%d").to_string(), dt.format("%H:%M").to_string())
        }
        _ => ("-".into(), "-".into()),
    };
    out.push(LogFileInfo { id, label, date, time, size });
}

/// Kurulumun geçmiş log dosyalarını listele: launcher logu + Minecraft'ın
/// döndürdüğü (latest.log + *.log.gz) oturumlar. En yeniden eskiye sıralı.
#[tauri::command]
pub async fn cmd_list_logs(instance_id: String) -> Result<Vec<LogFileInfo>, String> {
    let inst = Instance::load(&instance_id).ok_or("kurulum yok")?;
    let dir = inst.dir();
    let mut out: Vec<LogFileInfo> = Vec::new();

    // launcher'ın kendi logu (son oturum)
    let yl = dir.join("yikimlient-latest.log");
    if yl.is_file() {
        push_log_file(&mut out, &yl, "yikimlient-latest.log".into(), "Son oturum (launcher)".into(), None);
    }

    // Minecraft log klasörü
    let mc_logs = dir.join("logs");
    if let Ok(entries) = std::fs::read_dir(&mc_logs) {
        let mut files: Vec<(String, std::path::PathBuf)> = entries
            .flatten()
            .map(|e| (e.file_name().to_string_lossy().to_string(), e.path()))
            .filter(|(name, p)| p.is_file() && (name == "latest.log" || name.ends_with(".log.gz")))
            .collect();
        // dosya adları tarihle başlar → ada göre tersten = en yeni önce
        files.sort_by(|a, b| b.0.cmp(&a.0));
        for (name, p) in files {
            if name == "latest.log" {
                push_log_file(&mut out, &p, name.clone(), "Mevcut oturum (Minecraft)".into(), None);
            } else {
                // "2026-10-07-1.log.gz" → tarih dosya adının ilk 10 karakteri
                let date = name.get(0..10).unwrap_or("-").to_string();
                let label = format!("Oturum {}", name.trim_end_matches(".log.gz"));
                push_log_file(&mut out, &p, name, label, Some(date));
            }
        }
    }
    Ok(out)
}

/// Bir log dosyasının içeriğini oku (.gz olanları açarak).
#[tauri::command]
pub async fn cmd_read_log(instance_id: String, file_id: String) -> Result<String, String> {
    let inst = Instance::load(&instance_id).ok_or("kurulum yok")?;
    // güvenlik: yalnızca bilinen ad yapısındaki dosyalar, yol geçişi yok
    if file_id.contains('/') || file_id.contains('\\') || file_id.contains("..") {
        return Err("geçersiz log dosyası".into());
    }
    let allowed =
        file_id == "yikimlient-latest.log" || file_id == "latest.log" || file_id.ends_with(".log.gz");
    if !allowed {
        return Err("geçersiz log dosyası".into());
    }
    let path = if file_id == "yikimlient-latest.log" {
        inst.dir().join(&file_id)
    } else {
        inst.dir().join("logs").join(&file_id)
    };
    if !path.is_file() {
        return Err("log dosyası bulunamadı".into());
    }
    let content = if file_id.ends_with(".gz") {
        use std::io::Read;
        let f = std::fs::File::open(&path).map_err(|e| e.to_string())?;
        let mut d = flate2::read::GzDecoder::new(f).take(4_000_000);
        let mut buf = Vec::new();
        d.read_to_end(&mut buf).map_err(|e| e.to_string())?;
        String::from_utf8_lossy(&buf).into_owned()
    } else {
        std::fs::read_to_string(&path).map_err(|e| e.to_string())?
    };
    // aşırı büyük loglar: sondan kırpılmış göster (UI'yi kilitlemesin)
    const MAX: usize = 600_000;
    if content.len() > MAX {
        let mut idx = content.len() - MAX;
        while !content.is_char_boundary(idx) {
            idx += 1;
        }
        return Ok(format!(
            "… dosyanın başı kırpıldı (son {} KB gösteriliyor) …\n{}",
            MAX / 1024,
            &content[idx..]
        ));
    }
    Ok(content)
}

/// Zip arşivini hedef klasöre aç (içinde tek kök klasör varsa onu sadeleştirir).
fn unzip_to_dir(zip_path: &std::path::Path, dest: &std::path::Path) -> Result<(), String> {
    let f = std::fs::File::open(zip_path).map_err(|e| e.to_string())?;
    let mut archive = zip::ZipArchive::new(f).map_err(|e| e.to_string())?;
    // kök klasör tespiti: tüm dosya girişleri aynı "X/" ile başlıyorsa bir seviye sadeleştir
    let mut root: Option<String> = None;
    for i in 0..archive.len() {
        let name = archive.by_index(i).map_err(|e| e.to_string())?.name().to_string();
        if name.is_empty() || name.ends_with('/') { continue; }
        match &root {
            None => { root = name.split('/').next().map(|s| s.to_string()); }
            Some(r) => {
                if !name.starts_with(r.as_str()) { root = None; break; }
            }
        }
    }
    for i in 0..archive.len() {
        let mut zf = archive.by_index(i).map_err(|e| e.to_string())?;
        let rel = match zf.enclosed_name() {
            Some(p) => p.to_path_buf(),
            None => continue,
        };
        // kök klasörü kırpmak saves/<ad>/level.dat yapısını garanti eder
        let rel = match &root {
            Some(r) => match rel.strip_prefix(r) {
                Ok(p) if !p.as_os_str().is_empty() => p.to_path_buf(),
                _ => continue,
            },
            None => rel,
        };
        let out = dest.join(&rel);
        if zf.is_dir() {
            let _ = std::fs::create_dir_all(&out);
            continue;
        }
        if let Some(p) = out.parent() {
            let _ = std::fs::create_dir_all(p);
        }
        let mut w = std::fs::File::create(&out).map_err(|e| e.to_string())?;
        std::io::copy(&mut zf, &mut w).map_err(|e| e.to_string())?;
    }
    Ok(())
}
