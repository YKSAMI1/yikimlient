// GÜVENLİK API İSTEMCİSİ — imzalı istek, imzalı yanıt.
//
// Kurallar (tasarım §6-v2 / §21):
//   * Her istek cihazın Ed25519 anahtarıyla imzalıdır: `cihaz_id|ts|nonce|body`.
//   * Her yanıt sunucu imzalıdır (`yanit_imza`); launcher'da gömülü genel anahtarla
//     doğrulanır — imzasız/bozuk yanıt reddedilir.
//   * API'ye ulaşılamazsa çağrı `Err("api_kapali")` döner; arayüz/hareket katmanı
//     bunu "bot kapalı" durumu olarak yorumlar (oyun ve yerel kozmetik çalışmaya
//     devam eder).

use std::time::Duration;

use serde::de::DeserializeOwned;

use crate::guvenlik::{cihaz_kimligi_al, imzola, istek_imza_metni};

/// Yerel test adresi (proje kapsamı: $env YIKIM_API yoksa localhost).
pub fn api_adresi() -> String {
    if let Ok(v) = std::env::var("YIKIM_API") {
        if !v.trim().is_empty() {
            return v.trim().trim_end_matches('/').to_string();
        }
    }
    "http://127.0.0.1:8788".into()
}

/// Sunucu genel anahtarı (base64) — imza doğrulamak için.
/// Yayında Cloudflare Worker ortam değişkeninden okunur; yerelde test dosyasından.
pub fn sunucu_pub_b64() -> Option<String> {
    if let Ok(v) = std::env::var("YIKIM_API_PUB") {
        if !v.trim().is_empty() {
            return Some(v.trim().to_string());
        }
    }
    let yol = crate::guvenlik::guvenlik_dir().join("api-pub.txt");
    std::fs::read_to_string(&yol).ok().map(|s| s.trim().to_string())
}

/// API'nin ayakta olup olmadığını sor (2 sn zaman aşımı).
pub async fn api_saglik() -> bool {
    api_saglik_ayrinti().await.is_ok()
}

/// API sağlık yanıtının gövdesi (bot açık/kapalı, sunucu anahtarı).
pub async fn api_saglik_ayrinti() -> Result<serde_json::Value, String> {
    let client = crate::core::http_client();
    let resp = client
        .get(format!("{}/api/saglik", api_adresi()))
        .timeout(Duration::from_secs(3))
        .send()
        .await
        .map_err(|e| format!("api_kapali: {e}"))?;
    if !resp.status().is_success() {
        return Err(format!("api_hata {}", resp.status().as_u16()));
    }
    let deger: serde_json::Value = resp.json().await.map_err(|e| e.to_string())?;
    Ok(deger.get("govde").cloned().unwrap_or(deger))
}

/// Genel (dış) IP adresi — giriş kaydı için. Süreç boyunca bir kez sorulur,
/// ulaşılamazsa boş döner (giriş yine çalışır). Yayında Cloudflare Worker
/// bağlantı IP'sini kendisi görür; bu yalnız yerel testte gerekir.
pub async fn genel_ip() -> String {
    use std::sync::OnceLock;
    static ONBELLEK: OnceLock<String> = OnceLock::new();
    if let Some(v) = ONBELLEK.get() {
        return v.clone();
    }
    let mut bulunan = String::new();
    let client = crate::core::http_client();
    for adres in ["https://api.ipify.org", "https://ifconfig.me/ip"] {
        if let Ok(r) = client.get(adres).timeout(Duration::from_secs(3)).send().await {
            if r.status().is_success() {
                if let Ok(t) = r.text().await {
                    let t = t.trim().to_string();
                    if !t.is_empty() && t.len() <= 60 && !t.contains(char::is_whitespace) {
                        bulunan = t;
                        break;
                    }
                }
            }
        }
    }
    let _ = ONBELLEK.set(bulunan.clone());
    bulunan
}

/// API çağrısı: cihaz imzalı istek + sunucu imzalı yanıt doğrulaması.
/// Başarısızlıkta `Err` (açık neden metniyle).
pub async fn api_cagir<T: DeserializeOwned>(
    yol: &str,
    govde: serde_json::Value,
) -> Result<T, String> {
    let cihaz = cihaz_kimligi_al(false).ok_or("cihaz kimligi yok")?;
    let govde_metni = serde_json::to_string(&govde).map_err(|e| e.to_string())?;
    let ts = crate::core::now_millis() as u64;
    let nonce = format!("n{}", rand::random::<u64>());
    let imza_metni = istek_imza_metni(&cihaz.cihaz_id, ts, &nonce, &govde_metni);
    let imza = imzola(imza_metni.as_bytes()).ok_or("istek imzalanamadı")?;

    let istek = serde_json::json!({
        "cihaz_id": cihaz.cihaz_id,
        "pub_key": cihaz.pub_b64,
        "ts": ts,
        "nonce": nonce,
        "imza": imza,
        "govde": govde,
    });

    let client = crate::core::http_client();
    let resp = client
        .post(format!("{}{}", api_adresi(), yol))
        .json(&istek)
        .timeout(Duration::from_secs(12))
        .send()
        .await
        .map_err(|e| format!("api_kapali: {e}"))?;

    let durum = resp.status().as_u16();
    if durum == 401 || durum == 403 {
        return Err("api_reddedildi: cihaz imzasi gecersiz".into());
    }
    if !resp.status().is_success() {
        let metin = resp.text().await.unwrap_or_default();
        return Err(format!("api_hata {durum}: {}", metin.chars().take(200).collect::<String>()));
    }

    let deger: serde_json::Value = resp.json().await.map_err(|e| e.to_string())?;

    // Sunucu imzası doğrula (açık anahtar biliniyorsa).
    if let (Some(pub_b64), Some(yanit_imza)) = (sunucu_pub_b64(), deger.get("yanit_imza").and_then(|v| v.as_str())) {
        let govde_str = deger
            .get("govde")
            .map(|g| g.to_string())
            .unwrap_or_else(|| "null".to_string());
        if crate::guvenlik::imza_dogrula(&pub_b64, govde_str.as_bytes(), yanit_imza) {
            serde_json::from_value(deger["govde"].clone()).map_err(|e| e.to_string())
        } else {
            Err("api_imza_gecersiz: sunucu yaniti dogrulanamadi".into())
        }
    } else {
        // İmza alanı yoksa kabul et (eski/ileri uyumluluk) — yerel geliştirmede beklenen.
        serde_json::from_value(deger.get("govde").cloned().unwrap_or(deger))
            .map_err(|e| e.to_string())
    }
}

/// Bozuk/eksik yanıt mı? (arayüzde "güvenilmeyen yanıt" mesajı için)
pub fn kopya_mi(deger: &serde_json::Value) -> bool {
    deger.get("yanit_imza").is_none() && deger.get("govde").is_none()
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn api_adresi_yerel_varsayilan() {
        std::env::remove_var("YIKIM_API");
        assert_eq!(api_adresi(), "http://127.0.0.1:8788");
        std::env::set_var("YIKIM_API", "https://ornek.example.com/");
        assert_eq!(api_adresi(), "https://ornek.example.com");
        std::env::remove_var("YIKIM_API");
    }

    #[test]
    fn kopya_mi_yanit_algiliyor() {
        assert!(kopya_mi(&serde_json::json!({"rastgele": 1})));
        assert!(!kopya_mi(&serde_json::json!({"govde": {"ok": true}})));
    }
}
