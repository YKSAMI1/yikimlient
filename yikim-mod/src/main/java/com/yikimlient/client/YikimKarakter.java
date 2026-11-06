package com.yikimlient.client;

import net.minecraft.class_1011;
import net.minecraft.class_1043;
import net.minecraft.class_2960;
import net.minecraft.class_310;
import net.minecraft.class_332;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.LinkOption;
import java.nio.file.Path;

/**
 * MENÜ KARAKTERİ (v1.30.0) — dokusuz, saf DOLGU tabanlı 3B oyuncu.
 *
 * NEDEN DOKU YOK: menüde özel {@code class_1043} dokusu çizildiğinde (özellikle
 * ImmediatelyFast/Sodium'lu kurulumlarda) metin partisi o dokunun UV'si ile
 * birleşiyor ve ekranın yarısı tek renk gri/beyaz bloklarla kaplanıyordu.
 * Artık menüde TEK BİR doku çizimi yok: karakter, deri piksellerinden CPU'da
 * 24 kare olarak hesaplanır ve her kare renkli HÜCRELER (dolgular) olarak
 * basılır. Aynı satırdaki komşu aynı renkli hücreler tek dolguda birleşir.
 *
 * - Ön + yan + üst yüzler, gölgeli; 24 kare hafif salınımlı dönüş.
 * - Seçili pelerin (`.yikim/pelerin.png`) arkada ayrı katman.
 * - Deri/pelerin değişince (oyun içi seçim) kareler kendiliğinden yenilenir.
 * - Üretim/çizim tamamen korumalı: hata olursa yalnız gölge kalır.
 */
public final class YikimKarakter {
    private static final int KARE_SAYISI = 24;
    /** Dahili çizim çözünürlüğü: bir deri pikseli = 6 piksel (96 × 192). */
    private static final int ALT = 6;
    private static final int IC_G = 16 * ALT;
    private static final int IC_Y = 32 * ALT;

    private static int[][] kareler;
    private static long kareImza = Long.MIN_VALUE;
    private static long sonDeneme;
    private static long sonKontrol;
    /** 0 = önden; kullanıcı sürükledikçe değişir (kendiliğinden dönmez). */
    private static volatile int kareIndeksi = 3;
    private static volatile boolean slim;
    private static volatile boolean pelerinVar;

    private static class_2960 deri;
    private static long deriImza = Long.MIN_VALUE;

    private YikimKarakter() {
    }

    public static void slimAyarla(boolean deger) {
        if (YikimKarakter.slim != deger) {
            YikimKarakter.kareImza = Long.MIN_VALUE;
        }
        YikimKarakter.slim = deger;
    }

    public static boolean hasPelerin() {
        return YikimKarakter.pelerinVar;
    }

    private static Path yol(String ad) {
        return YikimBridge.stateDir().resolve(ad);
    }

    /** Oyuncunun GERÇEK derisi — yalnız oyun içi gövde dokusu için. */
    public static class_2960 deriDoku() {
        try {
            Path dosya = YikimKarakter.yol("deri.png");
            if (!Files.isRegularFile(dosya, new LinkOption[0])) {
                return null;
            }
            long zaman = Files.getLastModifiedTime(dosya, new LinkOption[0]).toMillis();
            if (YikimKarakter.deri != null && zaman == YikimKarakter.deriImza) {
                return YikimKarakter.deri;
            }
            try (InputStream in = Files.newInputStream(dosya)) {
                class_1011 gorsel = class_1011.method_4309(in);
                class_1043 nesne = new class_1043(() -> "yikim-deri", gorsel);
                class_2960 kimlik = class_2960.method_43902("yikimlient", "oyuncu/deri");
                class_310.method_1551().method_1531().method_4616(kimlik, nesne);
                nesne.method_4524();
                YikimKarakter.deri = kimlik;
                YikimKarakter.deriImza = zaman;
                return kimlik;
            }
        }
        catch (Throwable ignored) {
            return YikimKarakter.deri;
        }
    }

    /** Karakteri çiz: `cx` yatay merkez, `tepe` başın üstü, `boy` toplam boy (px). */
    public static void draw(class_332 graphics, int cx, int tepe, int boy, int arkaRenk) {
        int istenen = Math.max(32, boy);
        int adim = 1;
        for (int deneme : new int[]{1, 2, 3, 4, 6, 8}) {
            adim = deneme;
            if (IC_Y / deneme <= istenen) {
                break;
            }
        }
        int izgaraG = IC_G / adim;
        int izgaraY = IC_Y / adim;
        int pi = Math.max(1, istenen / izgaraY);
        int genislik = izgaraG * pi;
        int boyPx = izgaraY * pi;
        YikimDraw.roundedFill(graphics, cx - genislik / 3, tepe + boyPx - 2, cx + genislik / 3,
            tepe + boyPx + Math.max(2, pi), YikimTheme.alpha(arkaRenk, 90));
        int[] kare = YikimKarakter.kare();
        if (kare == null) {
            return;
        }
        int sol = cx - genislik / 2;
        int orta = adim / 2;
        // DİKEY birleştirme: üst üste aynı renk/aynı genişlikteki hücreler tek
        // dolguda toplanir. Böylece kare başına dolum sayısı ~5 kat düşer
        // (menü FPS'i doku çağırmadan ve dolgu yağmurundan kurtulur).
        java.util.ArrayList<int[]> acik = new java.util.ArrayList<int[]>();
        for (int gy = 0; gy <= izgaraY; ++gy) {
            int satir = gy < izgaraY ? (gy * adim + orta) * IC_G : -1;
            java.util.ArrayList<int[]> simdi = new java.util.ArrayList<int[]>();
            int gx = 0;
            while (gy < izgaraY && gx < izgaraG) {
                int renk = kare[satir + gx * adim + orta];
                if (renk == 0) {
                    ++gx;
                    continue;
                }
                int bitis = gx + 1;
                while (bitis < izgaraG && kare[satir + bitis * adim + orta] == renk) {
                    ++bitis;
                }
                simdi.add(new int[]{gx, bitis, renk, gy});
                gx = bitis;
            }
            java.util.ArrayList<int[]> kalan = new java.util.ArrayList<int[]>();
            for (int[] r : acik) {
                boolean devam = false;
                if (gy < izgaraY) {
                    for (int[] n : simdi) {
                        if (n[0] == r[0] && n[1] == r[1] && n[2] == r[2]) {
                            n[3] = r[3];
                            devam = true;
                            break;
                        }
                    }
                }
                if (devam) {
                    continue;
                }
                kalan.add(r);
            }
            for (int[] r : kalan) {
                int px = sol + r[0] * pi;
                int py = tepe + r[3] * pi;
                graphics.method_25294(px, py, sol + r[1] * pi, py + (gy - r[3]) * pi, r[2]);
            }
            acik = simdi;
        }
    }

    /** Kullanıcı sürükleyerek döndürür (24 kare arasında). */
    public static void dondur(int kareFarki) {
        int yeni = (YikimKarakter.kareIndeksi + kareFarki) % KARE_SAYISI;
        if (yeni < 0) {
            yeni += KARE_SAYISI;
        }
        YikimKarakter.kareIndeksi = yeni;
    }

    /** Geçerli kare (renk ızgarası) — gerekirse yeniden üretir. */
    private static int[] kare() {
        try {
            int[][] hepsi = YikimKarakter.kareler();
            if (hepsi == null) {
                return null;
            }
            return hepsi[YikimKarakter.kareIndeksi % KARE_SAYISI];
        }
        catch (Throwable ignored) {
            return null;
        }
    }

    private static int[][] kareler() {
        try {
            long kontrol = System.currentTimeMillis();
            // Dosya denetimi saniyede bir: her karede 2 disk çağrısı menüyü yoruyordu.
            if (YikimKarakter.kareler != null && kontrol - YikimKarakter.sonKontrol < 900L) {
                return YikimKarakter.kareler;
            }
            YikimKarakter.sonKontrol = kontrol;
            Path deriYol = YikimKarakter.yol("deri.png");
            Path pelerinYol = YikimKarakter.yol("pelerin.png");
            boolean pelerinVarMi = Files.isRegularFile(pelerinYol, new LinkOption[0]);
            YikimKarakter.pelerinVar = pelerinVarMi;
            if (!Files.isRegularFile(deriYol, new LinkOption[0])) {
                return null;
            }
            long zaman = Files.getLastModifiedTime(deriYol, new LinkOption[0]).toMillis();
            if (pelerinVarMi) {
                zaman ^= Files.getLastModifiedTime(pelerinYol, new LinkOption[0]).toMillis() << 1;
            }
            if (YikimKarakter.kareler != null && zaman == YikimKarakter.kareImza) {
                return YikimKarakter.kareler;
            }
            long simdi = System.currentTimeMillis();
            if (YikimKarakter.kareler != null && simdi - YikimKarakter.sonDeneme < 5000L) {
                return YikimKarakter.kareler;
            }
            YikimKarakter.sonDeneme = simdi;
            BufferedImage deri = ImageIO.read(deriYol.toFile());
            if (deri == null) {
                return YikimKarakter.kareler;
            }
            BufferedImage pelerin = null;
            if (pelerinVarMi) {
                try {
                    pelerin = ImageIO.read(pelerinYol.toFile());
                }
                catch (Throwable ignored) {
                    pelerin = null;
                }
            }
            YikimKarakter.pelerinVar = pelerin != null;
            int[][] hepsi = new int[KARE_SAYISI][];
            for (int f = 0; f < KARE_SAYISI; ++f) {
                double faz = (double)f / (double)KARE_SAYISI * Math.PI * 2.0;
                float aci = (float)(Math.sin(faz) * 0.62);
                hepsi[f] = YikimKarakter.kareUret(deri, pelerin, aci, YikimKarakter.slim);
            }
            YikimKarakter.kareler = hepsi;
            YikimKarakter.kareImza = zaman;
            return hepsi;
        }
        catch (Throwable ignored) {
            return YikimKarakter.kareler;
        }
    }

    // ------------------------------------------------------------------ üretim

    private static final class Parca {
        final float ofsetX;
        final int y;
        final int w;
        final int h;
        final int derinlik;
        final int onU;
        final int onV;
        final int yanU;
        final int yanV;

        Parca(float ofsetX, int y, int w, int h, int derinlik, int onU, int onV, int yanU, int yanV) {
            this.ofsetX = ofsetX;
            this.y = y;
            this.w = w;
            this.h = h;
            this.derinlik = derinlik;
            this.onU = onU;
            this.onV = onV;
            this.yanU = yanU;
            this.yanV = yanV;
        }
    }

    /** Tek kareyi hücre ızgarası (int[16*32], 0 = boş) olarak üret. */
    private static int[] kareUret(BufferedImage deri, BufferedImage pelerin, float aci, boolean slim) {
        int[] tuval = new int[IC_G * IC_Y];
        float c = (float)Math.cos(aci);
        float s = (float)Math.sin(aci);
        if (c < 0.55f) {
            c = 0.55f;
        }
        int cx = IC_G / 2;
        int kol = slim ? 3 : 4;
        float kolOrta = 4.0f + kol / 2.0f;
        YikimKarakter.pelerinCiz(tuval, pelerin, cx, c, s);
        YikimKarakter.parcaCiz(tuval, deri, new Parca(-2.0f, 20, 4, 12, 4, 4, 20, 0, 20), cx, c, s);
        YikimKarakter.parcaCiz(tuval, deri, new Parca(2.0f, 20, 4, 12, 4, 20, 52, 16, 52), cx, c, s);
        YikimKarakter.parcaCiz(tuval, deri, new Parca(0.0f, 8, 8, 12, 4, 20, 20, 16, 20), cx, c, s);
        YikimKarakter.parcaCiz(tuval, deri, new Parca(-kolOrta, 8, kol, 12, kol, 44, 20, 40, 20), cx, c, s);
        YikimKarakter.parcaCiz(tuval, deri, new Parca(kolOrta, 8, kol, 12, kol, 36, 52, 32, 52), cx, c, s);
        Parca kafa = new Parca(0.0f, 0, 8, 8, 8, 8, 8, 0, 8);
        YikimKarakter.parcaCiz(tuval, deri, kafa, cx, c, s);
        YikimKarakter.kafaUstu(tuval, deri, kafa, cx, c, s);
        return tuval;
    }

    private static void parcaCiz(int[] tuval, BufferedImage deri, Parca p, int cx, float c, float s) {
        float onG = p.w * ALT * c;
        int x0 = Math.round((float)cx + p.ofsetX * ALT * c - onG / 2.0f);
        int tw = Math.max(1, Math.round(onG));
        int th = p.h * ALT;
        int y0 = p.y * ALT;
        YikimKarakter.yuz(tuval, deri, p.onU, p.onV, p.w, p.h, x0, y0, tw, th, 1.0f);
        float yanG = Math.abs((float)p.derinlik * ALT * s);
        if (yanG < 1.0f) {
            return;
        }
        int yanX = s > 0.0f ? x0 + tw : Math.round((float)x0 - yanG);
        YikimKarakter.yuz(tuval, deri, p.yanU, p.yanV, p.derinlik, p.h, yanX, y0,
            Math.round(yanG), th, 0.70f);
    }

    private static void kafaUstu(int[] tuval, BufferedImage deri, Parca kafa, int cx, float c, float s) {
        float onG = kafa.w * ALT * c;
        float yanG = Math.abs((float)kafa.derinlik * ALT * s);
        float ustY = yanG * 0.5f;
        if (ustY < 1.0f) {
            return;
        }
        int x0 = Math.round((float)cx - onG / 2.0f);
        YikimKarakter.yuz(tuval, deri, 8, 0, 8, 8, x0, Math.round(-ustY),
            Math.round(onG + yanG), Math.round(ustY), 0.88f);
    }

    /** Pelerin: gövdenin arkasında, dönüşle birlikte hafif kayan panel. */
    private static void pelerinCiz(int[] tuval, BufferedImage pelerin, int cx, float c, float s) {
        if (pelerin == null) {
            return;
        }
        int gen = Math.round(9.0f * ALT * 0.9f * c);
        int x0 = Math.round((float)cx - gen / 2.0f - s * ALT * 2.0f);
        YikimKarakter.yuz(tuval, pelerin, 1, 1, 10, 16, x0, 8 * ALT, gen, 15 * ALT, 0.82f);
    }

    /**
     * Derinin (u,v,w,h) dikdörtgenini hedefte (x,y,tw,th) alanına kopyala.
     * HD deriler için kaynak koordinatları ölçeklenir.
     */
    private static void yuz(int[] hedef, BufferedImage kaynak, int u, int v, int uw, int uh,
                            int x, int y, int tw, int th, float shade) {
        if (kaynak == null || tw <= 0 || th <= 0) {
            return;
        }
        int olcek = kaynak.getWidth() >= 64 ? Math.max(1, kaynak.getWidth() / 64) : 1;
        int sx0 = u * olcek;
        int sy0 = v * olcek;
        int sw = uw * olcek;
        int sh = uh * olcek;
        int kaynakG = kaynak.getWidth();
        int kaynakY = kaynak.getHeight();
        for (int j = 0; j < th; ++j) {
            int py = y + j;
            if (py < 0 || py >= IC_Y) {
                continue;
            }
            int sy = sy0 + j * sh / th;
            if (sy < 0 || sy >= kaynakY) {
                continue;
            }
            int satir = py * IC_G;
            for (int i = 0; i < tw; ++i) {
                int px = x + i;
                if (px < 0 || px >= IC_G) {
                    continue;
                }
                int sx = sx0 + i * sw / tw;
                if (sx < 0 || sx >= kaynakG) {
                    continue;
                }
                int argb = kaynak.getRGB(sx, sy);
                if (argb >>> 24 <= 32) {
                    continue;
                }
                if (shade < 0.999f) {
                    int r = Math.round((float)(argb >> 16 & 0xFF) * shade);
                    int g = Math.round((float)(argb >> 8 & 0xFF) * shade);
                    int b = Math.round((float)(argb & 0xFF) * shade);
                    argb = 0xFF000000 | r << 16 | g << 8 | b;
                }
                hedef[satir + px] = argb | 0xFF000000;
            }
        }
    }
}
