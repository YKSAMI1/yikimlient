// GÜVENLİK KOMUTLARI — launcher arayüzünün çağırdığı Tauri komutları.
//
// Tüm çağrılar `guvenlik_api` üzerinden imzalı gider. API kapalıysa komutlar
// hata döndürür; arayüz bunu "bot kapalı" olarak gösterir. Oyun açma ve
// mevcut kozmetikler çalışmaya devam eder (fail-open play).

use serde::Serialize;
use serde_json::json;

use crate::{commands, guvenlik, guvenlik_api, hesap_yetki};

#[derive(Serialize)]
pub struct HesapKimlik {
    pub anahtar: String,
    pub ad: String,
    pub tur: String,
    pub uuid: String,
}

/// Seçili hesabı güvenlik modeli biçimine çevir.
pub fn secili_hesap() -> Option<HesapKimlik> {
    let acc = commands::selected_account().ok()?;
    let tur = if acc.kind == "microsoft" { "microsoft" } else { "cracked" };
    Some(HesapKimlik {
        anahtar: hesap_yetki::hesap_anahtari(&acc.name, tur, &acc.uuid),
        ad: acc.name,
        tur: tur.to_string(),
        uuid: acc.uuid,
    })
}

/// Yerel yetki kaydını API yanıtından güncelle.
fn yerel_kaydet(h: &HesapKimlik, dogrulandi: bool, rol_yol: bool, bitis: i64) {
    guvenlik::hesap_kaydet(&guvenlik::HesapYetkiKayit {
        anahtar: h.anahtar.clone(),
        ad: h.ad.clone(),
        tur: h.tur.clone(),
        dogrulandi,
        rol_yol,
        kozmetik_serbest: dogrulandi,
        sahip_kilidi: false,
        offline_izin_bitis: bitis,
        guncellendi: crate::core::now_millis(),
    });
}

/// Genel durum: cihaz, API, bot, bağlantı ve kozmetik izinleri.
#[tauri::command]
pub async fn cmd_guvenlik_durum() -> Result<serde_json::Value, String> {
    let cihaz = guvenlik::cihaz_kimligi_al(true);
    let hesap = secili_hesap();

    let mut api_acik = false;
    let mut bot_acik = false;
    let mut sunucu_anahtar = String::new();
    if let Ok(saglik) = guvenlik_api::api_saglik_ayrinti().await {
        api_acik = saglik.get("durum").and_then(|v| v.as_str()) == Some("ok");
        bot_acik = saglik.get("bot_acik").and_then(|v| v.as_bool()).unwrap_or(false);
        sunucu_anahtar = saglik
            .get("sunucu_genel_anahtar")
            .and_then(|v| v.as_str())
            .unwrap_or_default()
            .to_string();
    }

    let mut baglandi = false;
    let mut discord_ad = String::new();
    let mut rol_yol = false;
    let mut neden = String::new();

    // Bağlantı durumunu API'den tazele (ulaşılamazsa yerel kayıt kullanılır)
    if api_acik {
        if let Some(h) = hesap.as_ref() {
            if let Ok(v) = guvenlik_api::api_cagir::<serde_json::Value>(
                "/api/baglama/durum",
                json!({ "hesap_anahtar": h.anahtar }),
            )
            .await
            {
                baglandi = v.get("baglandi").and_then(|x| x.as_bool()).unwrap_or(false);
                rol_yol = v.get("rol_yol").and_then(|x| x.as_bool()).unwrap_or(false);
                discord_ad = v
                    .get("discord_ad")
                    .and_then(|x| x.as_str())
                    .unwrap_or_default()
                    .to_string();
            }
        }
    }

    let yerel = hesap
        .as_ref()
        .map(|h| hesap_yetki::yerel_yetki(&h.anahtar))
        .unwrap_or_default();

    // Bağlantı varsa ama şifre yoksa kozmetik kapalı kalır: giriş yapılmadıysa
    // `dogrulandi` yalnızca yerel kayıttan gelir.
    let dogrulandi = yerel.dogrulandi && baglandi;
    if !baglandi {
        neden = "baglanti_yok".into();
    } else if !yerel.dogrulandi {
        neden = "parola_yok".into();
    }

    let yetki = hesap_yetki::HesapYetki {
        anahtar: yerel.anahtar.clone(),
        ad: yerel.ad.clone(),
        tur: yerel.tur.clone(),
        dogrulandi,
        rol_yol: rol_yol || yerel.rol_yol,
        kozmetik_serbest: dogrulandi,
        offline_izin_bitis: yerel.offline_izin_bitis,
        sahip_kilidi: yerel.sahip_kilidi,
    };

    // Aktif hesabı kurulumlara köprüle
    if let Some(h) = hesap.as_ref() {
        guvenlik::aktif_hesap_yaz(&h.anahtar);
    }

    Ok(json!({
        "cihaz_hazir": cihaz.is_some(),
        "cihaz_id": cihaz.as_ref().map(|c| c.cihaz_id.clone()).unwrap_or_default(),
        "api_acik": api_acik,
        "bot_acik": bot_acik,
        "sunucu_anahtar": sunucu_anahtar,
        "hesap": hesap.as_ref().map(|h| json!({
            "anahtar": h.anahtar,
            "ad": h.ad,
            "tur": h.tur,
            "uuid": h.uuid,
        })),
        "baglandi": baglandi,
        "dogrulandi": dogrulandi,
        "discord_ad": discord_ad,
        "neden": neden,
        "yetki": yetki,
        "kozmetik_serbest": hesap_yetki::kozmetik_izinli(&yetki),
        "cizim_serbest": hesap_yetki::cizim_izinli(&yetki),
        "carpi": hesap_yetki::carpi_goster(&yetki),
    }))
}

/// Launcher'ın gösterdiği bağlama kodunu üret (ya da mevcut kodu döndür).
#[tauri::command]
pub async fn cmd_guvenlik_baglama_kod() -> Result<serde_json::Value, String> {
    let h = secili_hesap().ok_or("hesap yok")?;
    guvenlik_api::api_cagir(
        "/api/baglama/kod",
        json!({
            "hesap_anahtar": h.anahtar,
            "hesap_ad": h.ad,
            "tur": h.tur,
            "uuid": h.uuid,
        }),
    )
    .await
}

/// Bağlantı durumunu sor (arayüz yoklama yapar).
#[tauri::command]
pub async fn cmd_guvenlik_baglama_durum() -> Result<serde_json::Value, String> {
    let h = secili_hesap().ok_or("hesap yok")?;
    guvenlik_api::api_cagir(
        "/api/baglama/durum",
        json!({ "hesap_anahtar": h.anahtar }),
    )
    .await
}

/// Şifre ile giriş doğrula; başarılıysa yerel yetki 7 gün için yazılır.
#[tauri::command]
pub async fn cmd_guvenlik_giris(parola_hash: String) -> Result<serde_json::Value, String> {
    let h = secili_hesap().ok_or("hesap yok")?;
    // IP yalnız ilk girişte sunucuya yazılır; 7 gün sonra sunucu kendisi siler.
    let ip = guvenlik_api::genel_ip().await;
    let v = guvenlik_api::api_cagir::<serde_json::Value>(
        "/api/giris/dogrula",
        json!({
            "hesap_anahtar": h.anahtar,
            "hesap_ad": h.ad,
            "tur": h.tur,
            "parola_hash": parola_hash,
            "ip": ip,
        }),
    )
    .await?;

    let dogrulandi = v.get("dogrulandi").and_then(|x| x.as_bool()).unwrap_or(false);
    let rol_yol = v.get("rol_yol").and_then(|x| x.as_bool()).unwrap_or(false);
    let bitis = v.get("yetki_bitis").and_then(|x| x.as_i64()).unwrap_or(0);
    if dogrulandi {
        yerel_kaydet(&h, true, rol_yol, bitis);
        guvenlik::aktif_hesap_yaz(&h.anahtar);
    }
    Ok(v)
}

/// "Şifremi unuttum" kodunu doğrula ve yeni şifre kur.
#[tauri::command]
pub async fn cmd_guvenlik_sifirla(kod: String, parola_hash: String) -> Result<serde_json::Value, String> {
    guvenlik_api::api_cagir(
        "/api/sifirla/dogrula",
        json!({ "kod": kod, "parola_hash": parola_hash }),
    )
    .await
}

/// İlk şifreyi oluştur (yalnız Discord bağı doğrulandıktan sonra).
#[tauri::command]
pub async fn cmd_guvenlik_parola_kur(parola_hash: String) -> Result<serde_json::Value, String> {
    let h = secili_hesap().ok_or("hesap yok")?;
    guvenlik_api::api_cagir(
        "/api/parola/kur",
        json!({ "hesap_anahtar": h.anahtar, "parola_hash": parola_hash }),
    )
    .await
}

/// Tüm hesapların doğrulama özeti — arayüz ad başındaki ✕ işaretini
/// çevrimdışıyken bile gösterebilsin (yerel kayıttan okunur).
#[tauri::command]
pub fn cmd_guvenlik_ozet() -> serde_json::Value {
    let hesaplar: Vec<serde_json::Value> = commands::load_accounts()
        .iter()
        .map(|a| {
            let tur = if a.kind == "microsoft" { "microsoft" } else { "cracked" };
            let anahtar = hesap_yetki::hesap_anahtari(&a.name, tur, &a.uuid);
            let y = hesap_yetki::yerel_yetki(&anahtar);
            json!({
                "id": a.id,
                "anahtar": anahtar,
                "ad": a.name,
                "dogrulandi": y.dogrulandi,
                "rol_yol": y.rol_yol,
                "carpi": hesap_yetki::carpi_goster(&y),
                "kozmetik_serbest": hesap_yetki::kozmetik_izinli(&y),
                "cizim_serbest": hesap_yetki::cizim_izinli(&y),
            })
        })
        .collect();
    json!({ "hesaplar": hesaplar })
}

/// Kozmetik/skin değiştirme izni var mı? (arayüz düğmelerini kilitlemek için)
#[tauri::command]
pub async fn cmd_hesap_yetki() -> Result<serde_json::Value, String> {
    let h = secili_hesap().ok_or("hesap yok")?;
    let y = hesap_yetki::yerel_yetki(&h.anahtar);
    Ok(json!({
        "anahtar": h.anahtar,
        "ad": h.ad,
        "dogrulandi": y.dogrulandi,
        "rol_yol": y.rol_yol,
        "kozmetik_serbest": hesap_yetki::kozmetik_izinli(&y),
        "cizim_serbest": hesap_yetki::cizim_izinli(&y),
        "carpi": hesap_yetki::carpi_goster(&y),
        "offline_izin_bitis": y.offline_izin_bitis,
    }))
}

/// Bir hesabın kozmetiğini kurulumlara uygula (hesap değişince çağrılır).
#[tauri::command]
pub fn cmd_hesap_kozmetik_uygula(anahtar: String) -> Result<serde_json::Value, String> {
    let mut yazilan = 0usize;
    for ad in ["pelerin.png", "elytra.png"] {
        if let Some(png) = guvenlik::hesap_kozmetik_oku(&anahtar, ad) {
            yazilan += crate::kozmetik::kurulumlara_yaz(ad, &png);
        }
    }
    guvenlik::aktif_hesap_yaz(&anahtar);
    Ok(json!({ "tamam": true, "yazilan": yazilan }))
}
