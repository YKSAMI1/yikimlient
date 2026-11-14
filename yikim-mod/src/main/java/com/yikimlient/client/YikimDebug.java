package com.yikimlient.client;

/**
 * GEÇİCİ TEŞHİS ANAHTARI.
 *
 * Yayınlanan sürümde KAPALIDIR. Launcher'dan `-Dyikimlient.debug=1` yazılırsa
 * menünün buton kutuları ve tıklama koordinatları loglanır — geliştirici
 * makinesinde tıklama hedeflerini doğrulamak için kullanılır.
 */
public final class YikimDebug {
    public static final boolean aktif =
        System.getProperty("yikimlient.debug", "").trim().equals("1");

    private YikimDebug() {
    }
}