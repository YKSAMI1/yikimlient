/// Mock harness için test kanalı: birden çok paket kurulumunu aynı anda
/// başlatıp kartların ayrı ayrı ilerlediğini görmek için.
/// Kullanım (tarayıcı konsolunda):
///   __MOCK_PAKET__(3)        → 3 farklı paketi aynı anda başlat
///   __MOCK_PAKET_ADIM__(kimlik, adim, durum, done, total, ayrinti)
///   __MOCK_PAKET_TAMAM__(kimlik)
///   __MOCK_PAKET_HAZIR__(instanceId)  → "pack-hazir" olayını tetikle
(async () => {
  const mod = await import("/src/pack-kur.ts");
  window.__PACK_KUR__ = mod;
  // Mock event kanalını gerçek `listen` çağrılarına köprüle
  const dinleyiciler = (window.__MOCK_DINLEYICI__ = window.__MOCK_DINLEYICI__ || {});
  window.__TAURI_OLAY__ = function (olay, veri) {
    (dinleyiciler[olay] || []).forEach(function (f) { f({ payload: veri }); });
  };
  const eskiListen = window.__TAURI__.event.listen;
  window.__TAURI__.event.listen = function (olay, f) {
    (dinleyiciler[olay] = dinleyiciler[olay] || []).push(f);
    return Promise.resolve(function () {
      dinleyiciler[olay] = (dinleyiciler[olay] || []).filter(function (x) { return x !== f; });
    });
  };
  void eskiListen;

  window.__MOCK_PAKET__ = (n = 2) => {
    for (let i = 1; i <= n; i++) mod.packKartBaslat(`Paket ${i} — kurulum başlıyor`, `paket-${i}`);
    return document.querySelectorAll(".pk-kart").length;
  };
  window.__MOCK_PAKET_ADIM__ = (kimlik, adim, durum, done, total, ayrinti) => {
    mod.packKartTest(adim, durum, done, total, ayrinti, kimlik);
  };
  window.__MOCK_PAKET_TAMAM__ = (kimlik) => mod.packKartTamam(kimlik);
  window.__MOCK_PAKET_HAZIR__ = (instanceId, ad = "Paket") =>
    window.__MOCK_YAYIN__("pack-hazir", { instance_id: instanceId, ad });
})();
