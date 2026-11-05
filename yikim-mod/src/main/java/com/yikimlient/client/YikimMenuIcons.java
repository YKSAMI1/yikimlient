package com.yikimlient.client;

import net.minecraft.class_332;

/**
 * MENÜ İKONLARI (v1.29.0) — yeni stil: piksel blokları yerine ince, geometrik
 * ÇİZGİ ikonları (12×12 ızgara). Aynı ikon kimlikleri korunur; çizim artık
 * yay/çember/çizgi ilkelleriyle yapılır, böylece her boyutta eşit görünür.
 */
public final class YikimMenuIcons {
    public static final int BOLT = 0;
    public static final int PLAY = 1;
    public static final int GLOBE = 2;
    public static final int BARS = 3;
    public static final int BLOCKS = 4;
    public static final int GEAR = 5;
    public static final int ARROW = 6;
    public static final int SEARCH = 7;
    public static final int POWER = 8;
    public static final int IMAGE = 9;
    public static final int EYE = 10;
    public static final int HEART = 11;
    /** Hesap ekranı (v1.27.0) */
    public static final int KULLANICI = 12;

    private YikimMenuIcons() {
    }

    public static void draw(class_332 g, int icon, int x, int y, int size, int color) {
        if (size <= 0) {
            return;
        }
        float u = (float)size / 12.0f;
        switch (icon) {
            case BOLT -> {
                cizgi(g, x, y, u, 7.2f, 1.4f, 4.4f, 6.1f, color);
                cizgi(g, x, y, u, 4.4f, 6.1f, 6.1f, 6.1f, color);
                cizgi(g, x, y, u, 6.1f, 6.1f, 4.9f, 10.6f, color);
                cizgi(g, x, y, u, 4.9f, 10.6f, 8.2f, 5.2f, color);
                cizgi(g, x, y, u, 8.2f, 5.2f, 6.2f, 5.2f, color);
                cizgi(g, x, y, u, 6.2f, 5.2f, 7.2f, 1.4f, color);
            }
            case PLAY -> {
                cizgi(g, x, y, u, 4.2f, 2.2f, 9.2f, 6.0f, color);
                cizgi(g, x, y, u, 9.2f, 6.0f, 4.2f, 9.8f, color);
                cizgi(g, x, y, u, 4.2f, 9.8f, 4.2f, 2.2f, color);
            }
            case GLOBE -> {
                halka(g, x, y, u, 6.0f, 6.0f, 4.3f, 1.2f, color);
                cizgi(g, x, y, u, 1.7f, 6.0f, 10.3f, 6.0f, color);
                yay(g, x, y, u, 6.0f, 6.0f, 4.3f, 2.6f, 1.5f, color, false);
                yay(g, x, y, u, 6.0f, 6.0f, 4.3f, -1.5f, -2.6f, color, true);
            }
            case BARS -> {
                cizgi(g, x, y, u, 3.0f, 9.5f, 3.0f, 6.0f, color);
                cizgi(g, x, y, u, 6.0f, 9.5f, 6.0f, 2.5f, color);
                cizgi(g, x, y, u, 9.0f, 9.5f, 9.0f, 4.8f, color);
            }
            case BLOCKS -> {
                kutu(g, x, y, u, 2.0f, 2.0f, 3.4f, 3.4f, color);
                kutu(g, x, y, u, 6.6f, 2.0f, 3.4f, 3.4f, color);
                kutu(g, x, y, u, 2.0f, 6.6f, 3.4f, 3.4f, color);
                kutu(g, x, y, u, 6.6f, 6.6f, 3.4f, 3.4f, color);
            }
            case GEAR -> {
                halka(g, x, y, u, 6.0f, 6.0f, 2.9f, 1.3f, color);
                for (int i = 0; i < 8; ++i) {
                    double a = Math.PI * 2.0 * (double)i / 8.0;
                    float x0 = 6.0f + (float)Math.cos(a) * 3.4f;
                    float y0 = 6.0f + (float)Math.sin(a) * 3.4f;
                    cizgi(g, x, y, u, x0, y0, 6.0f + (float)Math.cos(a) * 5.0f,
                        6.0f + (float)Math.sin(a) * 5.0f, color);
                }
            }
            case ARROW -> {
                cizgi(g, x, y, u, 2.2f, 6.0f, 9.4f, 6.0f, color);
                cizgi(g, x, y, u, 6.4f, 3.0f, 9.4f, 6.0f, color);
                cizgi(g, x, y, u, 9.4f, 6.0f, 6.4f, 9.0f, color);
            }
            case SEARCH -> {
                halka(g, x, y, u, 5.0f, 5.0f, 3.2f, 1.2f, color);
                cizgi(g, x, y, u, 7.4f, 7.4f, 10.0f, 10.0f, color);
            }
            case POWER -> {
                yay(g, x, y, u, 6.0f, 6.4f, 4.2f, -1.2f, -3.6f, color, true);
                cizgi(g, x, y, u, 6.0f, 2.0f, 6.0f, 6.2f, color);
            }
            case IMAGE -> {
                kutu(g, x, y, u, 1.8f, 3.0f, 8.4f, 6.4f, color);
                nokta(g, x, y, u, 4.0f, 5.2f, 1.2f, color);
                cizgi(g, x, y, u, 2.4f, 8.6f, 5.6f, 5.8f, color);
                cizgi(g, x, y, u, 5.6f, 5.8f, 8.0f, 8.6f, color);
            }
            case EYE -> {
                cizgi(g, x, y, u, 1.8f, 6.0f, 4.0f, 3.4f, color);
                cizgi(g, x, y, u, 4.0f, 3.4f, 8.0f, 3.4f, color);
                cizgi(g, x, y, u, 8.0f, 3.4f, 10.2f, 6.0f, color);
                cizgi(g, x, y, u, 10.2f, 6.0f, 8.0f, 8.6f, color);
                cizgi(g, x, y, u, 8.0f, 8.6f, 4.0f, 8.6f, color);
                cizgi(g, x, y, u, 4.0f, 8.6f, 1.8f, 6.0f, color);
                halka(g, x, y, u, 6.0f, 6.0f, 1.2f, 1.0f, color);
            }
            case HEART -> {
                cizgi(g, x, y, u, 6.0f, 10.2f, 2.4f, 6.6f, color);
                cizgi(g, x, y, u, 2.4f, 6.6f, 2.4f, 4.4f, color);
                cizgi(g, x, y, u, 2.4f, 4.4f, 4.0f, 3.0f, color);
                cizgi(g, x, y, u, 4.0f, 3.0f, 5.4f, 3.6f, color);
                cizgi(g, x, y, u, 5.4f, 3.6f, 6.0f, 4.8f, color);
                cizgi(g, x, y, u, 6.0f, 4.8f, 6.6f, 3.6f, color);
                cizgi(g, x, y, u, 6.6f, 3.6f, 8.0f, 3.0f, color);
                cizgi(g, x, y, u, 8.0f, 3.0f, 9.6f, 4.4f, color);
                cizgi(g, x, y, u, 9.6f, 4.4f, 9.6f, 6.6f, color);
                cizgi(g, x, y, u, 9.6f, 6.6f, 6.0f, 10.2f, color);
            }
            case KULLANICI -> {
                halka(g, x, y, u, 6.0f, 4.4f, 2.2f, 1.2f, color);
                cizgi(g, x, y, u, 2.6f, 10.4f, 2.6f, 8.8f, color);
                cizgi(g, x, y, u, 2.6f, 8.8f, 4.4f, 7.6f, color);
                cizgi(g, x, y, u, 4.4f, 7.6f, 7.6f, 7.6f, color);
                cizgi(g, x, y, u, 7.6f, 7.6f, 9.4f, 8.8f, color);
                cizgi(g, x, y, u, 9.4f, 8.8f, 9.4f, 10.4f, color);
            }
            default -> {
            }
        }
    }

    /** Izgara koordinatında kalın çizgi (küçük kareler dizisi). */
    private static void cizgi(class_332 g, int x, int y, float u,
                              float x0, float y0, float x1, float y1, int color) {
        float dx = x1 - x0;
        float dy = y1 - y0;
        int adim = Math.max(1, Math.round(Math.max(Math.abs(dx), Math.abs(dy)) * 3.0f));
        float kalinlik = Math.max(1.0f, u * 1.15f);
        for (int i = 0; i <= adim; ++i) {
            float t = (float)i / (float)adim;
            float px = x + (x0 + dx * t) * u;
            float py = y + (y0 + dy * t) * u;
            g.method_25294(Math.round(px - kalinlik / 2.0f), Math.round(py - kalinlik / 2.0f),
                Math.round(px + kalinlik / 2.0f), Math.round(py + kalinlik / 2.0f), color);
        }
    }

    /** Dolu kare (grid koordinatı + kenar uzunluğu). */
    private static void nokta(class_332 g, int x, int y, float u, float gx, float gy, float kenar, int color) {
        g.method_25294(Math.round(x + gx * u), Math.round(y + gy * u),
            Math.round(x + (gx + kenar) * u), Math.round(y + (gy + kenar) * u), color);
    }

    /** Çerçeve (kenar çizgileri). */
    private static void kutu(class_332 g, int x, int y, float u,
                             float gx, float gy, float genislik, float yukseklik, int color) {
        cizgi(g, x, y, u, gx, gy, gx + genislik, gy, color);
        cizgi(g, x, y, u, gx, gy + yukseklik, gx + genislik, gy + yukseklik, color);
        cizgi(g, x, y, u, gx, gy, gx, gy + yukseklik, color);
        cizgi(g, x, y, u, gx + genislik, gy, gx + genislik, gy + yukseklik, color);
    }

    /** Çember (halka). */
    private static void halka(class_332 g, int x, int y, float u,
                              float merkezX, float merkezY, float yariCap, float kalinlik, int color) {
        yay(g, x, y, u, merkezX, merkezY, yariCap, 0.0f, (float)(Math.PI * 2.0), color, false);
    }

    /**
     * Yay: `bas`..`son` radyan arası. `duz` true ise son açıya baştan sayılır
     * (negatif değerlerle üst/alt yay çizmek için).
     */
    private static void yay(class_332 g, int x, int y, float u, float mx, float my, float r,
                            float bas, float son, int color, boolean duz) {
        float bitis = duz ? bas + son : son;
        float yay = Math.abs(bitis - bas);
        int adim = Math.max(6, Math.round(yay * r * 4.0f));
        float kalinlik = Math.max(1.0f, u * 1.15f);
        for (int i = 0; i <= adim; ++i) {
            float a = bas + (bitis - bas) * ((float)i / (float)adim);
            float px = x + (mx + (float)Math.cos(a) * r) * u;
            float py = y + (my + (float)Math.sin(a) * r) * u;
            g.method_25294(Math.round(px - kalinlik / 2.0f), Math.round(py - kalinlik / 2.0f),
                Math.round(px + kalinlik / 2.0f), Math.round(py + kalinlik / 2.0f), color);
        }
    }
}
