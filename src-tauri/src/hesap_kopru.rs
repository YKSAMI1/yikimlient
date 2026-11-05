//! OYUN İÇİ HESAP DEĞİŞTİRME KÖPRÜSÜ (launcher ↔ mod).
//!
//! Mod oyunun ana menüsünden hesap listesini gösterir; seçim launcher'a
//! dosya köprüsüyle iletilir çünkü **taze oturum jetonu** yalnızca launcher'da
//! üretilebilir (Microsoft refresh token orada durur):
//!
//!   .yikim/hesaplar.json       launcher → mod : kayıtlı hesaplar (jeton YOK)
//!   .yikim/hesap-istek.json    mod → launcher : {"id": "<hesap id>", "at": <ms>}
//!   .yikim/hesap-oturum.json   launcher → mod : {"istek": <ms>, "id", "ad",
//!                                               "uuid", "token", "tip", "hata"}
//!
//! `hesaplar.json` içinde access token BULUNMAZ: liste yalnızca isim/uuid/tür
//! taşır. Jeton, mod açıkça hesap değiştirmek istediğinde `hesap-oturum.json`
//! ile bir kez verilir (oyun süreci zaten kendi jetonunu komut satırından alır).
//!
//! Değişim tamamlanınca launcher'ın kendi seçimi de güncellenir
//! (`cfg.last_selected_account`) → bir sonraki açılış aynı hesapla başlar;
//! ayrıca `.yikim/yetki.json` yeni hesap için yeniden yazılır (atölye yetkisi
//! anında doğru hesabı yansıtsın).

use std::path::PathBuf;
use std::time::Duration;

use serde_json::{json, Value};

use crate::auth::Account;
use crate::config::YikimConfig;
use crate::core;
use crate::instances::Instance;

fn state_dir(inst: &Instance) -> PathBuf {
    inst.dir().join(".yikim")
}

pub fn hesaplar_path(inst: &Instance) -> PathBuf {
    state_dir(inst).join("hesaplar.json")
}

pub fn istek_path(inst: &Instance) -> PathBuf {
    state_dir(inst).join("hesap-istek.json")
}

pub fn oturum_path(inst: &Instance) -> PathBuf {
    state_dir(inst).join("hesap-oturum.json")
}

/// `hesaplar.json` gövdesi — jeton içermez.
pub fn hesaplar_json() -> Value {
    let cfg = YikimConfig::load_or_default();
    let list = crate::commands::load_accounts();
    let aktif = if cfg.last_selected_account.trim().is_empty() {
        list.first().map(|a| a.id.clone()).unwrap_or_default()
    } else {
        cfg.last_selected_account.clone()
    };
    let hesaplar: Vec<Value> = list
        .iter()
        .map(|a| {
            json!({
                "id": a.id,
                "ad": a.name,
                "tip": a.kind,
                "uuid": a.uuid,
            })
        })
        .collect();
    json!({
        "at": core::now_millis(),
        "aktif": aktif,
        "hesaplar": hesaplar,
    })
}

/// Tek kurulumun `.yikim/hesaplar.json` dosyasını tazele.
pub fn write_hesaplar(inst: &Instance) {
    let dir = state_dir(inst);
    if std::fs::create_dir_all(&dir).is_err() {
        return;
    }
    let govde = serde_json::to_string_pretty(&hesaplar_json()).unwrap_or_default();
    if let Err(e) = std::fs::write(dir.join("hesaplar.json"), format!("{govde}\n")) {
        core::yikim_log(format!("hesaplar.json yazılamadı: {e}"));
    }
}

/// Launcher'da hesap listesi değiştiyse tüm kurulumlara yansıt (oyun açıkken
/// mod bir sonraki okuyuşunda görür).
pub fn tum_kurulumlara_yaz() {
    for inst in crate::instances::list() {
        write_hesaplar(&inst);
    }
}

/// Bekleyen hesap isteğini işle ve modun beklediği cevabı yaz.
///
/// Ağ (jeton yenileme) gerektirebildiği için async; çağıran watcher.
async fn degistir(inst_id: &str, id: &str, istek_no: i64) -> Value {
    let mut list = crate::commands::load_accounts();
    let Some(slot) = list.iter().position(|a| a.id == id) else {
        return json!({ "istek": istek_no, "hata": "hesap bulunamadı" });
    };
    let mut acc: Account = list[slot].clone();

    // Microsoft hesabında jeton süresi dolmak üzereyse tazele. Yenileme
    // başarısız olursa eski jetonla devam (oyun içi oturum yine değişir).
    if acc.kind == "microsoft" && acc.expires_at - core::now_millis() < 300_000 {
        match crate::auth::refresh_account(&acc).await {
            Ok(yeni) => {
                acc = yeni.clone();
                if let Some(hedef) = list.iter_mut().find(|a| a.id == id) {
                    *hedef = yeni;
                }
                if let Err(e) = crate::commands::save_accounts(&list) {
                    core::yikim_log(format!("hesap jetonu tazelendi ama diske yazılamadı: {e}"));
                }
            }
            Err(e) => {
                core::yikim_log(format!("hesap jetonu tazelenemedi (eski jeton kullanılacak): {e}"));
            }
        }
    }

    // Launcher'ın kendi seçimi de bu hesap olsun → sonraki açılış tutarlı.
    let mut cfg = YikimConfig::load_or_default();
    cfg.last_selected_account = acc.id.clone();
    if let Err(e) = cfg.save() {
        core::yikim_log(format!("seçili hesap yazılamadı: {e}"));
    }

    if let Some(inst) = Instance::load(inst_id) {
        // Atölye yetkisi hesap adına/türüne bağlı → anında yeniden yaz.
        crate::curtain::write_atolye_yetki(&inst, &cfg, &acc.name, &acc.kind);
        write_hesaplar(&inst);
    } else {
        tum_kurulumlara_yaz();
    }

    json!({
        "istek": istek_no,
        "id": acc.id,
        "ad": acc.name,
        "uuid": acc.uuid,
        "token": acc.access_token,
        "tip": acc.kind,
        "hata": "",
    })
}

fn yaz_oturum(yol: &std::path::Path, cevap: &Value) {
    if let Some(parent) = yol.parent() {
        if std::fs::create_dir_all(parent).is_err() {
            return;
        }
    }
    let govde = serde_json::to_string(cevap).unwrap_or_default();
    if let Err(e) = std::fs::write(yol, format!("{govde}\n")) {
        core::yikim_log(format!("hesap-oturum.json yazılamadı: {e}"));
    }
}

/// Oyun içi hesap isteği watcher'ı — launcher açık kaldığı sürece canlıdır.
/// Gecikme 500 ms: ana menüde hesap değişimi "anlık" hissi verir.
pub fn spawn_hesap_watcher(app: tauri::AppHandle) {
    tauri::async_runtime::spawn(async move {
        loop {
            tokio::time::sleep(Duration::from_millis(500)).await;
            let dir = core::instances_dir();
            let Ok(entries) = std::fs::read_dir(&dir) else { continue };
            for entry in entries.flatten() {
                let istek = entry.path().join(".yikim").join("hesap-istek.json");
                if !istek.is_file() {
                    continue;
                }
                let Ok(icerik) = std::fs::read_to_string(&istek) else { continue };
                // Mod dosyayı yazarken yakalanmış olabiliriz: ayrıştırılamayan
                // istek SİLİNMEZ (sonraki turda yeniden denenir); yalnızca 5
                // saniyeden eski bozuk dosya temizlenir (sonsuz döngü olmasın).
                let Ok(Value::Object(req)) = serde_json::from_str::<Value>(&icerik) else {
                    let eski = std::fs::metadata(&istek)
                        .and_then(|m| m.modified())
                        .ok()
                        .and_then(|t| t.elapsed().ok())
                        .map(|e| e.as_secs() > 5)
                        .unwrap_or(false);
                    if eski {
                        let _ = std::fs::remove_file(&istek);
                    }
                    continue;
                };
                let req = Value::Object(req);
                // tek kullanımlık: işlemeden önce sil
                let _ = std::fs::remove_file(&istek);
                let id = req["id"].as_str().unwrap_or("").trim().to_string();
                let istek_no = req["at"].as_i64().unwrap_or(0);
                let inst_id = req["instance"]
                    .as_str()
                    .filter(|s| !s.trim().is_empty())
                    .map(|s| s.to_string())
                    .unwrap_or_else(|| entry.file_name().to_string_lossy().to_string());

                let cevap = if id.is_empty() {
                    json!({ "istek": istek_no, "hata": "hesap kimliği boş" })
                } else {
                    degistir(&inst_id, &id, istek_no).await
                };
                yaz_oturum(&entry.path().join(".yikim").join("hesap-oturum.json"), &cevap);

                let hata = cevap["hata"].as_str().unwrap_or("");
                if hata.is_empty() {
                    core::yikim_log(format!(
                        "oyun içi hesap değişti: {} ({} / {})",
                        cevap["ad"].as_str().unwrap_or("?"),
                        cevap["tip"].as_str().unwrap_or("?"),
                        inst_id
                    ));
                } else {
                    core::yikim_log(format!("oyun içi hesap değiştirilemedi: {hata}"));
                }
                // Launcher arayüzü açıksa listeyi tazelesin.
                let _ = tauri::Emitter::emit(&app, "hesap-degisti", &cevap);
            }
        }
    });
}
