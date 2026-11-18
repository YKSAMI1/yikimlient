package com.yikimlient.client;

/**
 * ARAYÜZ GÖRÜNÜMÜ (tema) — v1.28.0, v1.34.0'da sadeleşti.
 *
 * "klasik": bugüne kadarki pano düzeni (sol tuş sütunu + sağ bilgi paneli,
 *           mod tuşları bloğu, alt şerit).
 * "alev"  : AYNI düzen; yalnızca seçili sekme/segmentin altında küçük bir kor
 *           alevi ve açık anahtarlarda kor geçişi. Ekranı kırmızıya boğmaz,
 *           sürekli parçacık çalıştırmaz — kare başına birkaç dikdörtgen.
 *
 * Eski "sade" düzeni kaldırıldı. Kayıtlı değeri "sade" olan kullanıcılar
 * okuma sırasında "klasik"e taşınır (bkz. YikimConfig.okuma).
 *
 * Renk teması (YikimTheme) bundan bağımsızdır: iki görünüm de launcher'ın
 * vurgu rengini kullanır.
 */
public final class YikimTema {
    public static final String KLASIK = "klasik";
    public static final String ALEV = "alev";

    /** @deprecated v1.34.0: "sade" düzeni kaldırıldı; yalnızca eski cfg okuması için. */
    @Deprecated
    public static final String SADE = "sade";

    private YikimTema() {
    }

    /** Kor alevi görünümü açık mı? */
    public static boolean alev() {
        return YikimTema.ALEV.equalsIgnoreCase(YikimConfig.get().uiTema);
    }

    /**
     * Eski sade düzeni artık yok. Çağrı yerleri kırılmasın diye korunuyor;
     * her zaman false döner, böylece tüm ekranlar klasik iskeleti çizer.
     */
    @Deprecated
    public static boolean sade() {
        return false;
    }

    public static String ad() {
        return YikimTema.alev() ? "Alev" : "Klasik";
    }

    /** Temayı seç ve kaydet (ilk açılış seçimi + panel segmenti bunu kullanır). */
    public static void sec(String tema) {
        YikimConfig cfg = YikimConfig.get();
        cfg.uiTema = YikimTema.ALEV.equalsIgnoreCase(tema) ? YikimTema.ALEV : YikimTema.KLASIK;
        cfg.temaSurum = YikimClient.TEMA_SURUM;
        cfg.save();
    }

    public static void degistir() {
        YikimTema.sec(YikimTema.alev() ? YikimTema.KLASIK : YikimTema.ALEV);
    }
}
