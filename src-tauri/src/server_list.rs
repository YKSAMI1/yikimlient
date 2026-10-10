//! Oyun sunucu listesi (servers.dat) — her kurulumda YIKIMDARA hazır dursun.
//!
//! servers.dat sıkıştırmasız binary NBT'dir (root adı boş). fastnbt ile okunur,
//! "yikimdara.com.tr" listede yoksa eklenir ve geri yazılır. Kullanıcının mevcut
//! sunucuları, ikonları ve doku tercihleri olduğu gibi korunur; dosya zaten
//! sunucumuzu içeriyorsa hiçbir yazma yapılmaz (idempotent, bozulma riski sıfır).

use crate::core::yikim_log;
use serde::{Deserialize, Serialize};
use std::path::Path;

pub const DEFAULT_SERVER_NAME: &str = "YIKIMDARA";
pub const DEFAULT_SERVER_IP: &str = "yikimdara.com.tr";

#[derive(Serialize, Deserialize, Default)]
struct ServersFile {
    #[serde(default)]
    servers: Vec<ServerEntry>,
}

#[derive(Serialize, Deserialize)]
struct ServerEntry {
    name: String,
    ip: String,
    #[serde(default, skip_serializing_if = "Option::is_none")]
    icon: Option<String>,
    #[serde(rename = "acceptTextures", default, skip_serializing_if = "Option::is_none")]
    accept_textures: Option<i8>,
}

/// Kurulum klasöründe YIKIMDARA sunucusu yoksa ekle. Hata oyunu ASLA engellemez.
pub fn ensure_default(game_dir: &Path) {
    let path = game_dir.join("servers.dat");
    let mut file: ServersFile = std::fs::read(&path)
        .ok()
        .and_then(|b| fastnbt::from_bytes(&b).ok())
        .unwrap_or_default();
    if file.servers.iter().any(|s| s.ip == DEFAULT_SERVER_IP) {
        return; // zaten listede — dokunma (kullanıcı sıralamayı değiştirmiş olabilir)
    }
    file.servers.push(ServerEntry {
        name: DEFAULT_SERVER_NAME.into(),
        ip: DEFAULT_SERVER_IP.into(),
        icon: None,
        accept_textures: None,
    });
    match fastnbt::to_bytes(&file) {
        Ok(bytes) => match std::fs::write(&path, bytes) {
            Ok(()) => yikim_log("sunucu listesi hazır: YIKIMDARA (yikimdara.com.tr)".into()),
            Err(e) => yikim_log(format!("servers.dat yazılamadı: {e}")),
        },
        Err(e) => yikim_log(format!("servers.dat üretilemedi: {e}")),
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    /// Gerçek NBT yaz/oku turu: yazdığımız dosyayı tekrar okuyabilmeliyiz.
    #[test]
    fn yaz_ve_geri_oku() {
        let dir = std::env::temp_dir().join(format!("yikim-srv-{}", std::process::id()));
        let _ = std::fs::remove_dir_all(&dir);
        std::fs::create_dir_all(&dir).unwrap();
        ensure_default(&dir);
        let raw = std::fs::read(dir.join("servers.dat")).unwrap();
        let file: ServersFile = fastnbt::from_bytes(&raw).unwrap();
        assert_eq!(file.servers.len(), 1);
        assert_eq!(file.servers[0].name, "YIKIMDARA");
        assert_eq!(file.servers[0].ip, "yikimdara.com.tr");
        // idempotent: ikinci çağrı yazmamalı
        ensure_default(&dir);
        let raw2 = std::fs::read(dir.join("servers.dat")).unwrap();
        assert_eq!(raw, raw2);
        let _ = std::fs::remove_dir_all(&dir);
    }
}
