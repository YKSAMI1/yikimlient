package com.yikimlient.client;

/**
 * ARAYÜZ DÜZENİ (tema) — v1.28.0.
 *
 * "klasik": bugüne kadarki pano düzeni (sol tuş sütunu + sağ bilgi paneli,
 *           mod tuşları bloğu, alt şerit).
 * "sade"  : yeni düzen — karakter önde, tek sütun tuş, süssüz arka plan.
 *
 * Renk teması (YikimTheme) bundan bağımsızdır: iki düzen de launcher'ın vurgu
 * rengini kullanır.
 */
public final class YikimTema {
    public static final String KLASIK = "klasik";
    public static final String SADE = "sade";

    private YikimTema() {
    }

    public static boolean sade() {
        return YikimTema.SADE.equalsIgnoreCase(YikimConfig.get().uiTema);
    }

    public static String ad() {
        return YikimTema.sade() ? "Sade" : "Klasik";
    }

    /** Temayı seç ve kaydet (ilk açılış seçimi + panel segmenti bunu kullanır). */
    public static void sec(String tema) {
        YikimConfig cfg = YikimConfig.get();
        cfg.uiTema = YikimTema.SADE.equalsIgnoreCase(tema) ? YikimTema.SADE : YikimTema.KLASIK;
        cfg.temaSurum = YikimClient.TEMA_SURUM;
        cfg.save();
    }

    public static void degistir() {
        YikimTema.sec(YikimTema.sade() ? YikimTema.KLASIK : YikimTema.SADE);
    }
}
