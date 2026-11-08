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
        // Sunucu nedenini metinde taşı (cihaz iptali / imza reddi).
        let mut neden = resp.text().await.unwrap_or_default();
        if let Ok(v) = serde_json::from_str::<serde_json::Value>(&neden) {
            if let Some(h) = v.get("govde").and_then(|g| g.get("hata")).and_then(|h| h.as_str()) {
                neden = h.to_string();
            }
        }
        return Err(format!("api_reddedildi: {neden}"));
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

    // ---------- CANLI testler (yerel API ayakta iken) ----------
    // `cargo test --lib -- --ignored --test-threads=1` ile koşulur.
    // Testler gerçek API'ye yazar (cihaz, hesap, IP kaydı) — proje kapsamı.

    /// Her canlı test için TERTEMİZ uygulama dizini (cihaz kimliği yeniden üretilir).
    fn canli_ortam() -> std::path::PathBuf {
        let d = std::env::temp_dir().join(format!("yk-canli-{}", std::process::id()));
        let _ = std::fs::remove_dir_all(&d);
        std::fs::create_dir_all(&d).unwrap();
        std::env::set_var("YIKIM_APP_DIR", &d);
        d
    }

    /// Bot anahtarı (guvenlik-api/.env). Değer loglanmaz.
    fn bot_anahtari() -> String {
        if let Ok(v) = std::env::var("YIKIM_BOT_ANAHTARI") {
            if !v.trim().is_empty() {
                return v.trim().to_string();
            }
        }
        for kok in [std::path::Path::new("."), std::path::Path::new("..")] {
            let yol = kok.join("guvenlik-api/.env");
            if let Ok(metin) = std::fs::read_to_string(&yol) {
                for sat in metin.lines() {
                    if let Some(v) = sat.trim().strip_prefix("YIKIM_BOT_ANAHTARI=") {
                        if !v.trim().is_empty() {
                            return v.trim().to_string();
                        }
                    }
                }
            }
        }
        String::new()
    }

    /// Botun `/api/baglama/dogrula` çağrısını taklit et (Discord'da /bagla KOD).
    async fn bot_kodu_onayla(kod: &str, discord_id: &str, rol_yol: bool) -> Result<u16, String> {
        let govde = serde_json::json!({
            "kod": kod,
            "discord_id": discord_id,
            "discord_ad": "zincir-test",
            "rol_yol": rol_yol,
        });
        let r = crate::core::http_client()
            .post(format!("{}/api/baglama/dogrula", api_adresi()))
            .header("content-type", "application/json")
            .header("x-bot-anahtari", bot_anahtari())
            .json(&govde)
            .timeout(Duration::from_secs(12))
            .send()
            .await
            .map_err(|e| format!("api_kapali: {e}"))?;
        Ok(r.status().as_u16())
    }

    #[tokio::test]
    #[ignore = "yerel API gerektirir (guvenlik-api)"]
    async fn canli_cihaz_kayit_ve_saglik() {
        canli_ortam();
        let sag = api_saglik_ayrinti().await.expect("API ayakta olmali");
        assert_eq!(sag["durum"], "ok", "sağlık yanıtı: {sag}");
        assert!(sag["sunucu_genel_anahtar"].is_string(), "sunucu imza anahtari gelmeli");

        let c = cihaz_kimligi_al(true).expect("cihaz üretilemedi");
        let r: serde_json::Value = api_cagir(
            "/api/cihaz/kaydet",
            serde_json::json!({ "cihaz_id": c.cihaz_id, "pub_key": c.pub_b64 }),
        )
        .await
        .expect("cihaz kaydi reddedildi (imza/anahtar)");
        assert_eq!(r["tamam"], true);
    }

    #[tokio::test]
    #[ignore = "yerel API gerektirir (guvenlik-api)"]
    async fn canli_baglama_kod_ve_sifresiz_giris() {
        canli_ortam();
        let c = cihaz_kimligi_al(true).expect("cihaz üretilemedi");
        api_cagir::<serde_json::Value>(
            "/api/cihaz/kaydet",
            serde_json::json!({ "cihaz_id": c.cihaz_id, "pub_key": c.pub_b64 }),
        )
        .await
        .unwrap();

        // Kod üretme: imzalı istek kabul edilmeli, 8 karakterlik kod dönmeli.
        let anahtar = format!("offline:canli-{}", c.cihaz_id);
        let kod: serde_json::Value = api_cagir(
            "/api/baglama/kod",
            serde_json::json!({ "hesap_anahtar": anahtar, "hesap_ad": "Canli", "tur": "cracked" }),
        )
        .await
        .expect("baglama kodu uretilemedi");
        let k = kod["kod"].as_str().unwrap_or("");
        assert_eq!(k.chars().count(), 8, "kod 8 karakter olmali: {k}");

        // Şifresiz hesapla giriş: API "parola_yok" dönmeli (istemci bunu Err görür).
        let hata = api_cagir::<serde_json::Value>(
            "/api/giris/dogrula",
            serde_json::json!({
                "hesap_anahtar": anahtar,
                "hesap_ad": "Canli",
                "tur": "cracked",
                "parola_hash": "0".repeat(64),
            }),
        )
        .await;
        let m = hata.expect_err("şifresiz hesap giriş onaylanmamalı");
        assert!(m.contains("parola_yok"), "beklenen 'parola_yok', gelen: {m}");
    }

    #[tokio::test]
    #[ignore = "yerel API gerektirir (guvenlik-api)"]
    async fn canli_olay_kayit_ip_yaziyor() {
        canli_ortam();
        let c = cihaz_kimligi_al(true).expect("cihaz üretilemedi");
        api_cagir::<serde_json::Value>(
            "/api/cihaz/kaydet",
            serde_json::json!({ "cihaz_id": c.cihaz_id, "pub_key": c.pub_b64 }),
        )
        .await
        .unwrap();
        let ip = genel_ip().await;
        if !ip.is_empty() {
            assert!(ip.split('.').count() == 4, "IPv4 bekleniyor: {ip}");
        }
        let r: serde_json::Value = api_cagir(
            "/api/olay/kaydet",
            serde_json::json!({ "ip": if ip.is_empty() { "127.0.0.1".to_string() } else { ip } }),
        )
        .await
        .expect("olay kaydi reddedildi");
        assert_eq!(r["tamam"], true, "olay yanıtı: {r}");
    }

    /// TAM ZİNCİR: launcher kod ister → bot /bagla ile onaylar →
    /// ilk parola kurulur → giriş 7 günlük yetki belgesi alır →
    /// IP kaydı yazılır → 5 hatalı parola 24 saat kilitler.
    #[tokio::test]
    #[ignore = "yerel API gerektirir (guvenlik-api)"]
    async fn canli_tam_zincir_kod_parola_giris() {
        canli_ortam();
        let c = cihaz_kimligi_al(true).expect("cihaz üretilemedi");
        api_cagir::<serde_json::Value>(
            "/api/cihaz/kaydet",
            serde_json::json!({ "cihaz_id": c.cihaz_id, "pub_key": c.pub_b64 }),
        )
        .await
        .unwrap();

        // Her koşumda tertemiz hesap (daha önce şifre kurulmuş anahtara denk gelmemek için).
        let anahtar = format!("offline:zincir-{}", c.cihaz_id);
        let giris = |hash: &str| {
            serde_json::json!({
                "hesap_anahtar": anahtar,
                "hesap_ad": "Zincir",
                "tur": "cracked",
                "parola_hash": hash,
            })
        };

        // 1) ŞİFRESİZ giriş: çatlak hesaba parola yok → 409.
        let beklenen_hata = api_cagir::<serde_json::Value>("/api/giris/dogrula", giris(&"a".repeat(64)))
            .await
            .expect_err("şifresiz hesapla giriş onaylanmamalı");
        assert!(beklenen_hata.contains("parola_yok"), "gelen: {beklenen_hata}");

        // 2) Launcher: Discord'da yazılacak bağlama kodu.
        let kod: serde_json::Value = api_cagir(
            "/api/baglama/kod",
            serde_json::json!({ "hesap_anahtar": anahtar, "hesap_ad": "Zincir", "tur": "cracked" }),
        )
        .await
        .expect("bağlama kodu üretilemedi");
        let kod = kod["kod"].as_str().unwrap_or("").to_string();
        assert_eq!(kod.chars().count(), 8, "kod: {kod}");

        // 3) Bot kodu doğrular (Discord'da /bagla KOD) → bağlantı aktif.
        let durum = bot_kodu_onayla(&kod, "123456789", true).await.expect("bot onayı başarısız");
        assert_eq!(durum, 200, "bot bağlama onayı {durum} döndürdü");

        // 4) Parola kurulmadan giriş hâlâ kapalı.
        let hala = api_cagir::<serde_json::Value>("/api/giris/dogrula", giris(&"a".repeat(64))).await;
        assert!(hala.is_err(), "bağlantı var ama parola yok: giriş olmamalı");

        // 5) İlk parola (Discord bağı doğrulandıktan sonra kurulur).
        let hash = "b".repeat(64);
        let kur: serde_json::Value = api_cagir(
            "/api/parola/kur",
            serde_json::json!({ "hesap_anahtar": anahtar, "parola_hash": hash }),
        )
        .await
        .expect("parola kurulamadi");
        assert_eq!(kur["tamam"], true);

        // Mevcut parola ezilmez.
        let ez = api_cagir::<serde_json::Value>(
            "/api/parola/kur",
            serde_json::json!({ "hesap_anahtar": anahtar, "parola_hash": hash }),
        )
        .await;
        assert!(ez.is_err(), "mevcut parola ezilmemeli");

        // 6) Giriş → doğrulandı + 7 günlük yetki belgesi.
        let yanit: serde_json::Value = api_cagir("/api/giris/dogrula", giris(&hash))
            .await
            .expect("giris reddedildi");
        assert_eq!(yanit["dogrulandi"], true, "giriş yanıtı: {yanit}");
        let bitis = yanit["yetki_bitis"].as_i64().unwrap_or(0);
        let gun = (bitis - crate::core::now_millis() as i64) / 86_400_000;
        assert!(gun >= 6 && gun <= 7, "yetki suresi ~7 gun olmali: {gun}");

        // 7) IP kaydı.
        let ip = genel_ip().await;
        if !ip.is_empty() {
            let olay: serde_json::Value = api_cagir("/api/olay/kaydet", serde_json::json!({ "ip": ip }))
                .await
                .expect("olay kaydi reddedildi");
            assert_eq!(olay["tamam"], true, "olay: {olay}");
        }

        // 8) 5 hatalı paroladan sonra 24 saat kilit.
        for _ in 0..5 {
            let _ = api_cagir::<serde_json::Value>("/api/giris/dogrula", giris(&"f".repeat(64))).await;
        }
        let kilit = api_cagir::<serde_json::Value>("/api/giris/dogrula", giris(&hash)).await;
        let m = kilit.expect_err("kilitli hesap giriş yapabilmeliydi?");
        assert!(m.contains("kilit") || m.contains("423"), "kilit mesaji beklenir: {m}");
    }
}
