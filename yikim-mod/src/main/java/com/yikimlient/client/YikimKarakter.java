package com.yikimlient.client;

import net.minecraft.class_1011;
import net.minecraft.class_1043;
import net.minecraft.class_2960;
import net.minecraft.class_310;
import net.minecraft.class_332;

import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.LinkOption;
import java.nio.file.Path;

/**
 * MENÜ KARAKTERİ (v1.29.0) — dönen 3B oyuncu.
 *
 * Launcher oyun açılmadan aktif hesabın derisini `.yikim/deri.png`,
 * pelerini `.yikim/pelerin.png` olarak yazar (ağ yok, internet yokken de doğru).
 * Bu sınıf deriyi dokuya çevirir ve oyuncuyu KUTULARDAN (voxel) kurar: her
 * gövde parçası ön + yan + (kafa için) üst yüzeyle çizilir; açı yavaşça
 * salınır, böylece gerçek bir 3B model gibi döner.
 *
 * v1.28.0 hatası: UV hesabında ekran pikseli ile deri pikseli karışıyordu
 * (`w / 64f`), bu yüzden tüm doku ekrana yayılıyordu. Artık doku
 * dikdörtgeni ile ekran dikdörtgeni AYRI veriliyor.
 *
 * Her adım korumalı: doku yoksa/bozuksa sadece gölge çizilir, menü çalışır.
 */
public final class YikimKarakter {
    private static final int DERI = 0;
    private static final int PELERIN = 1;
    private static final class_2960[] DOKU = new class_2960[2];
    private static final long[] ZAMAN = new long[]{Long.MIN_VALUE, Long.MIN_VALUE};
    private static final long[] DENEME = new long[]{0L, 0L};
    private static final long TEKRAR_MS = 5000L;
    /** Deride slim (Alex) kollar 3 px. Launcher kataloğu söyler. */
    private static volatile boolean slim;

    private YikimKarakter() {
    }

    public static void slimAyarla(boolean deger) {
        if (deger != YikimKarakter.slim) {
            YikimKarakter.slim = deger;
        }
    }

    /** Seçili deri dokusu (SkinTextures'ı ezerken kullanılır). */
    public static class_2960 deriDoku() {
        return YikimKarakter.doku(YikimKarakter.DERI, "deri.png");
    }

    public static boolean hasPelerin() {
        return YikimKarakter.doku(YikimKarakter.PELERIN, "pelerin.png") != null;
    }

    private static Path dosya(String ad) {
        return YikimBridge.stateDir().resolve(ad);
    }

    private static class_2960 doku(int tur, String ad) {
        try {
            Path yol = YikimKarakter.dosya(ad);
            if (!Files.isRegularFile(yol, new LinkOption[0])) {
                return null;
            }
            long zaman = Files.getLastModifiedTime(yol, new LinkOption[0]).toMillis();
            if (YikimKarakter.DOKU[tur] != null && zaman == YikimKarakter.ZAMAN[tur]) {
                return YikimKarakter.DOKU[tur];
            }
            long simdi = System.currentTimeMillis();
            if (simdi - YikimKarakter.DENEME[tur] < YikimKarakter.TEKRAR_MS && YikimKarakter.DOKU[tur] != null) {
                return YikimKarakter.DOKU[tur];
            }
            YikimKarakter.DENEME[tur] = simdi;
            try (InputStream in = Files.newInputStream(yol)) {
                class_1011 gorsel = class_1011.method_4309(in);
                class_1043 dokuNesnesi = new class_1043(() -> "yikim-karakter-" + tur, gorsel);
                class_2960 kimlik = class_2960.method_43902("yikimlient",
                    tur == YikimKarakter.DERI ? "oyuncu/karakter" : "oyuncu/pelerin");
                class_310.method_1551().method_1531().method_4616(kimlik, dokuNesnesi);
                dokuNesnesi.method_4524();
                YikimKarakter.DOKU[tur] = kimlik;
                YikimKarakter.ZAMAN[tur] = zaman;
                return kimlik;
            }
        }
        catch (Throwable ignored) {
            return YikimKarakter.DOKU[tur];
        }
    }

    /**
     * Karakteri çiz: `cx` yatay merkez, `tepe` başın üstü, `boy` toplam boy (px).
     * Toplam 32 birim (8 baş + 12 gövde + 12 bacak) kabul edilir.
     */
    public static void draw(class_332 graphics, int cx, int tepe, int boy, int arkaRenk) {
        int birim = Math.max(2, boy / 32);
        class_2960 kimlik = YikimKarakter.doku(YikimKarakter.DERI, "deri.png");
        // zemin gölgesi her durumda çizilsin (kompozisyon dursun)
        YikimDraw.roundedFill(graphics, cx - 10 * birim, tepe + boy - 2, cx + 10 * birim, tepe + boy + birim,
            YikimTheme.alpha(arkaRenk, 80));
        if (kimlik == null) {
            return;
        }
        try {
            // yavaş salınan açı: -26°..+26°, 6 saniyede tam tur
            double faz = (double)(System.currentTimeMillis() % 6000L) / 6000.0 * Math.PI * 2.0;
            double aci = Math.sin(faz) * 0.45;
            float c = (float)Math.cos(aci);
            float s = (float)Math.sin(aci);
            if (c < 0.55f) {
                c = 0.55f;
            }
            YikimKarakter.pelerin(graphics, kimlik, cx, tepe, birim, s, faz);
            int kol = YikimKarakter.slim ? 3 : 4;
            float kolOrta = 4.0f + kol / 2.0f;
            // arka sıra: bacaklar
            YikimKarakter.parca(graphics, kimlik, cx, tepe, birim, c, s, -2.0f, 20, 4, 12, 4, 4, 20, 0, 20);
            YikimKarakter.parca(graphics, kimlik, cx, tepe, birim, c, s, 2.0f, 20, 4, 12, 4, 20, 52, 16, 52);
            // gövde
            YikimKarakter.parca(graphics, kimlik, cx, tepe, birim, c, s, 0.0f, 8, 8, 12, 4, 20, 20, 16, 20);
            // kollar (slim ise 3 px)
            YikimKarakter.parca(graphics, kimlik, cx, tepe, birim, c, s, -kolOrta, 8, kol, 12, kol, 44, 20, 40, 20);
            YikimKarakter.parca(graphics, kimlik, cx, tepe, birim, c, s, kolOrta, 8, kol, 12, kol, 36, 52, 32, 52);
            // kafa en son (önde)
            YikimKarakter.parca(graphics, kimlik, cx, tepe, birim, c, s, 0.0f, 0, 8, 8, 8, 8, 8, 0, 8);
            YikimKarakter.ust(graphics, kimlik, cx, tepe, birim, c, s, 0.0f, 0, 8, 8, 8, 8, 0);
        }
        catch (Throwable ignored) {
            // çizim patlarsa menü yine çalışsın
        }
    }

    /** Tek gövde parçası: ön yüz + yan yüz (+ üst şerit). */
    private static void parca(class_332 graphics, class_2960 kimlik, int cx, int tepe, int birim,
                              float c, float s, float ofsetX, int ofsetY, int genislik, int yukseklik,
                              int derinlik, int onU, int onV, int yanU, int yanV) {
        float onG = genislik * birim * c;
        int x0 = Math.round(cx + ofsetX * birim * c - onG / 2.0f);
        int x1 = Math.round(x0 + onG);
        int y0 = tepe + ofsetY * birim;
        int y1 = y0 + yukseklik * birim;
        float yanG = Math.abs(derinlik * birim * s);
        YikimKarakter.dokuPar(graphics, kimlik, x0, y0, genislik * birim, yukseklik * birim,
            onU, onV, genislik, yukseklik);
        if (yanG < 1.0f) {
            return;
        }
        int yanX = s > 0.0f ? x1 : Math.round(x0 - yanG);
        YikimKarakter.dokuPar(graphics, kimlik, yanX, y0, Math.round(yanG), yukseklik * birim,
            yanU, yanV, derinlik, yukseklik);
        graphics.method_25294(yanX, y0, Math.round(yanX + yanG), y1, 0x4A000000);
    }

    /** Kafanın üst yüzeyi: dönerken görünen ince şerit. */
    private static void ust(class_332 graphics, class_2960 kimlik, int cx, int tepe, int birim,
                            float c, float s, float ofsetX, int ofsetY, int genislik, int yukseklik,
                            int derinlik, int ustU, int ustV) {
        float onG = genislik * birim * c;
        float ustY = Math.abs(derinlik * birim * s) * 0.45f;
        if (ustY < 1.0f) {
            return;
        }
        int x0 = Math.round(cx + ofsetX * birim * c - onG / 2.0f);
        int y = Math.round(tepe + ofsetY * birim - ustY);
        YikimKarakter.dokuPar(graphics, kimlik, x0, y, Math.round(onG + Math.abs(derinlik * birim * s)),
            Math.round(ustY), ustU, ustV, genislik, derinlik);
        graphics.method_25294(x0, y, Math.round(x0 + onG + Math.abs(derinlik * birim * s)),
            Math.round(y + ustY), 0x33000000);
    }

    /** Pelerin: gövdenin arkasında, hafifçe salınan panel. */
    private static void pelerin(class_332 graphics, class_2960 kimlik, int cx, int tepe, int birim,
                                float s, double faz) {
        class_2960 pelerin = YikimKarakter.doku(YikimKarakter.PELERIN, "pelerin.png");
        if (pelerin == null) {
            return;
        }
        try {
            int salinim = (int)Math.round(Math.sin(faz * 2.0) * birim * 0.8);
            float gen = 10.0f * birim * 0.9f;
            int x0 = Math.round(cx - gen / 2.0f + s * birim * 3.0f + salinim * 0.4f);
            int y0 = tepe + 8 * birim;
            int y1 = y0 + 16 * birim;
            YikimKarakter.dokuPar(graphics, pelerin, x0, y0, Math.round(gen), y1 - y0, 1, 1, 10, 16);
            // hafif gölge + iç kıvrım (düz panel hissi kalksın)
            graphics.method_25294(x0, y0, x0 + Math.round(gen * 0.35f), y1 + salinim, 0x22000000);
            graphics.method_25294(x0 + Math.round(gen * 0.6f), y0 + birim,
                x0 + Math.round(gen * 0.66f), y1 + salinim, 0x1E000000);
        }
        catch (Throwable ignored) {
            // pelerin çizilemezse karakter yine görünür
        }
    }

    /** Ekranda (w,h) dikdörtgene, deride (uw,uh) dikdörtgenini çiz. */
    private static void dokuPar(class_332 graphics, class_2960 kimlik, int x, int y, int w, int h,
                                int u, int v, int uw, int uh) {
        if (w <= 0 || h <= 0 || uw <= 0 || uh <= 0) {
            return;
        }
        float u0 = u / 64.0f;
        float v0 = v / 64.0f;
        float u1 = (u + uw) / 64.0f;
        float v1 = (v + uh) / 64.0f;
        graphics.method_70845(kimlik, x, y, w, h, u0, v0, u1, v1);
    }
}
