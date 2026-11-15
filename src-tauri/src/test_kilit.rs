//! Test izolasyonu için süreç-genel kilit.
//!
//! Testler `YIKIM_APP_DIR` gibi ORTAM DEĞİŞKENLERİNİ paylaşır; bunlar süreç
//! genelindedir, test iş parçacıkları ise paralel koşar. Kilit olmadan:
//!
//!   * `guvenlik_api::tests::api_adresi_env_ve_yayin_varsayilani` değişkeni
//!     SİLİYOR,
//!   * `guvenlik::tests::rol_yol_yaz_yerel_kaydi_gunceller` aynı anda dizinine
//!     yazıyor,
//!
//! ve test tek başına geçerken tam pakette rastgele düşüyordu (bu yüzden
//! güvenilir bir "hepsi geçti" iddiası kurulamıyordu). Ortam değişkenine dokunan
//! her test `kilitle()` çağırmalıdır.
//!
//! Kilit zehirlenirse panik yayılmaz: `into_inner()` ile devam edilir. Testin
//! kendi hatası zaten o testin sonucunda görünür.

use std::sync::{Mutex, MutexGuard, OnceLock};

static KILIT: OnceLock<Mutex<()>> = OnceLock::new();

/// Ortam değişkenlerine dokunan testler için kilit. Dönüş değeri test sonuna
/// kadar yaşatılmalıdır: `let _kilit = crate::test_kilit::kilitle();`
pub fn kilitle() -> MutexGuard<'static, ()> {
    KILIT
        .get_or_init(|| Mutex::new(()))
        .lock()
        .unwrap_or_else(|zehirlenmis| zehirlenmis.into_inner())
}
