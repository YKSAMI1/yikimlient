use crate::core::{now_millis, yikim_log};
use serde::{Deserialize, Serialize};
use tauri::{Manager, WebviewUrl, WebviewWindowBuilder};

/// Microsoft girişi — login.live.com OAuth (MSA) akışı.
/// Gömülü pencere açılır, kullanıcı girişi yapar, redirect'teki kod → token
/// → XBL → XSTS → Minecraft zinciri işlenir.
/// Bu, Minecraft'ın resmî public client id'siyle çalışan tek yöntemdir;
/// AAD device-code akışı bu uygulama için geçersizdir (AADSTS700016).

pub const MS_CLIENT_ID: &str = "00000000402b5328";
const REDIRECT_URI: &str = "https://login.live.com/oauth20_desktop.srf";
const SCOPE: &str = "XboxLive.signin offline_access";

#[derive(Debug, Clone, Serialize, Deserialize, Default)]
pub struct Account {
    pub id: String,
    pub name: String,
    #[serde(rename = "type")]
    pub kind: String, // "microsoft" | "offline"
    pub uuid: String,
    pub access_token: String,
    pub refresh_token: String,
    pub expires_at: i64,
}

fn http() -> reqwest::Client {
    reqwest::Client::new()
}

/// Gömülü giriş penceresi açar, kullanıcı girişini bekler, code→token→hesap üretir.
pub async fn ms_login_interactive(app: tauri::AppHandle) -> Result<Account, String> {
    // Varsa eski pencereyi kapat
    if let Some(w) = app.get_webview_window("ms-login") {
        let _ = w.close();
    }

    let auth_url = format!(
        "https://login.live.com/oauth20_authorize.srf?client_id={}&response_type=code&redirect_uri={}&scope={}&prompt=select_account&cobrandid=8058f65d-ce06-4c30-9559-473c9275a65d",
        urlencoding::encode(MS_CLIENT_ID),
        urlencoding::encode(REDIRECT_URI),
        urlencoding::encode(SCOPE),
    );

    let (tx, rx) = tokio::sync::oneshot::channel::<Result<String, String>>();
    let tx = std::sync::Arc::new(tokio::sync::Mutex::new(Some(tx)));
    let handle_for_nav = app.clone();

    let window = WebviewWindowBuilder::new(
        &app,
        "ms-login",
        WebviewUrl::External(auth_url.parse().map_err(|e| format!("url: {e}"))?),
    )
    .title("YIKIMLient — Microsoft Girişi")
    .inner_size(900.0, 720.0)
    .resizable(true)
    .center()
    .on_navigation(move |url| {
        // oauth20_desktop.srf?code=... → yakala, sayfayı yükleme
        if url.host_str() == Some("login.live.com") && url.path() == "/oauth20_desktop.srf" {
            let maybe_code = url
                .query_pairs()
                .find(|(k, _)| k == "code")
                .map(|(_, v)| v.to_string());
            if let Some(tx) = tx.try_lock().ok().and_then(|mut t| t.take()) {
                let _ = tx.send(match maybe_code {
                    Some(c) => Ok(c),
                    None => Err("Yönlendirmede kod yok (giriş reddedildi?)".into()),
                });
            }
            let _ = handle_for_nav.get_webview_window("ms-login").map(|w| w.close());
            return false; // boş sayfanın yüklenmesini engelle
        }
        true
    })
    .build()
    .map_err(|e| format!("giriş penceresi açılamadı: {e}"))?;

    // 5 dakika zaman aşımı
    let code = match tokio::time::timeout(std::time::Duration::from_secs(300), rx).await {
        Ok(Ok(Ok(c))) => c,
        Ok(Ok(Err(e))) => return Err(e),
        Ok(Err(_)) => return Err("giriş kanalı kapandı".into()),
        Err(_) => {
            let _ = window.close();
            return Err("zaman aşımı — 5 dakika içinde giriş yapılmadı".into());
        }
    };

    // code → token
    let client = http();
    let resp = client
        .post("https://login.live.com/oauth20_token.srf")
        .form(&[
            ("client_id", MS_CLIENT_ID),
            ("code", code.as_str()),
            ("grant_type", "authorization_code"),
            ("redirect_uri", REDIRECT_URI),
        ])
        .send()
        .await
        .map_err(|e| format!("token: {e}"))?;
    let js: serde_json::Value = resp.json().await.map_err(|e| e.to_string())?;
    let ms_token = js["access_token"].as_str().ok_or("access token alınamadı")?.to_string();
    let refresh = js["refresh_token"].as_str().unwrap_or_default().to_string();

    full_chain(&ms_token, refresh).await
}

/// XBL → XSTS → Minecraft (login + profile).
async fn full_chain(ms_token: &str, refresh: String) -> Result<Account, String> {
    let client = http();

    let xbl: serde_json::Value = client
        .post("https://user.auth.xboxlive.com/user/authenticate")
        .json(&serde_json::json!({
            "Properties": {
                "AuthMethod": "RPS",
                "SiteName": "user.auth.xboxlive.com",
                "RpsTicket": format!("d={ms_token}")
            },
            "RelyingParty": "http://auth.xboxlive.com",
            "TokenType": "JWT"
        }))
        .send().await.map_err(|e| format!("XBL: {e}"))?
        .json().await.map_err(|e| format!("XBL json: {e}"))?;
    let xbl_token = xbl["Token"].as_str().ok_or("XBL token yok")?.to_string();
    let uhs = xbl["DisplayClaims"]["xui"][0]["uhs"]
        .as_str().ok_or("UHS yok")?.to_string();

    let xsts: serde_json::Value = client
        .post("https://xsts.auth.xboxlive.com/xsts/authorize")
        .json(&serde_json::json!({
            "Properties": {
                "SandboxId": "RETAIL",
                "UserTokens": [xbl_token]
            },
            "RelyingParty": "rp://api.minecraftservices.com/",
            "TokenType": "JWT"
        }))
        .send().await.map_err(|e| format!("XSTS: {e}"))?
        .json().await.map_err(|e| format!("XSTS json: {e}"))?;
    let xsts_token = xsts["Token"].as_str().ok_or("XSTS token yok")?.to_string();

    let mc: serde_json::Value = client
        .post("https://api.minecraftservices.com/authentication/login_with_xbox")
        .json(&serde_json::json!({
            "identityToken": format!("XBL3.0 x={uhs};{xsts_token}")
        }))
        .send().await.map_err(|e| format!("MC login: {e}"))?
        .json().await.map_err(|e| format!("MC json: {e}"))?;
    let mc_token = mc["access_token"].as_str().ok_or("MC token yok")?.to_string();
    let expires_in = mc["expires_in"].as_i64().unwrap_or(86400);

    let prof: serde_json::Value = client
        .get("https://api.minecraftservices.com/minecraft/profile")
        .bearer_auth(&mc_token)
        .send().await.map_err(|e| format!("profil: {e}"))?
        .json().await.map_err(|e| format!("profil json: {e}"))?;
    let name = prof["name"].as_str()
        .ok_or("Hesapta Minecraft profili yok (oyun satın alınmamış?)")?
        .to_string();
    let id = prof["id"].as_str().unwrap_or_default().to_string();

    yikim_log(format!("MS girişi tamam: {name}"));
    Ok(Account {
        id: format!("ms:{id}"),
        name,
        kind: "microsoft".into(),
        uuid: dashed_uuid(&id),
        access_token: mc_token,
        refresh_token: refresh,
        expires_at: now_millis() + expires_in * 1000,
    })
}

/// Refresh token ile oturum yenile.
pub async fn refresh_account(acc: &Account) -> Result<Account, String> {
    if acc.kind != "microsoft" || acc.refresh_token.is_empty() {
        return Ok(acc.clone());
    }
    let client = http();
    let resp = client
        .post("https://login.live.com/oauth20_token.srf")
        .form(&[
            ("client_id", MS_CLIENT_ID),
            ("grant_type", "refresh_token"),
            ("refresh_token", acc.refresh_token.as_str()),
        ])
        .send().await.map_err(|e| format!("refresh: {e}"))?;
    let js: serde_json::Value = resp.json().await.map_err(|e| e.to_string())?;
    let ms_token = js["access_token"].as_str().ok_or("refresh token reddedildi")?.to_string();
    let refresh = js["refresh_token"].as_str().unwrap_or(acc.refresh_token.as_str()).to_string();
    full_chain(&ms_token, refresh).await
}

/// Offline hesap: isimden UUID üret (offline-mode algoritması: MD5 v3 "OfflinePlayer:"+name).
pub fn offline_account(name: &str) -> Account {
    // Java'nın UUID.nameUUIDFromBytes'i MD5 tabanlıdır
    use md5::{Digest, Md5};
    let mut h = Md5::new();
    h.update(format!("OfflinePlayer:{name}"));
    let digest = h.finalize();
    let mut b = [0u8; 16];
    b.copy_from_slice(&digest);
    b[6] = (b[6] & 0x0f) | 0x30; // v3
    b[8] = (b[8] & 0x3f) | 0x80; // variant
    let hexs: String = b.iter().map(|x| format!("{x:02x}")).collect();
    let uuid = format!(
        "{}-{}-{}-{}-{}",
        &hexs[0..8], &hexs[8..12], &hexs[12..16], &hexs[16..20], &hexs[20..32]
    );
    Account {
        id: format!("offline:{uuid}"),
        name: name.to_string(),
        kind: "offline".into(),
        uuid,
        access_token: String::new(),
        refresh_token: String::new(),
        expires_at: 0,
    }
}

/// Trimmed Mojang uuid → dashed.
pub fn dashed_uuid(trimmed: &str) -> String {
    if trimmed.len() == 32 && !trimmed.contains('-') {
        format!(
            "{}-{}-{}-{}-{}",
            &trimmed[0..8], &trimmed[8..12], &trimmed[12..16], &trimmed[16..20], &trimmed[20..32]
        )
    } else {
        trimmed.to_string()
    }
}

/// Giriş penceresini dışarıdan kapat (iptal).
pub fn close_login_window(app: &tauri::AppHandle) {
    if let Some(w) = app.get_webview_window("ms-login") {
        let _ = w.close();
    }
}
