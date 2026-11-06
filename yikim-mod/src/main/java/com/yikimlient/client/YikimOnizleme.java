package com.yikimlient.client;

import java.awt.image.BufferedImage;
import java.nio.file.Files;
import java.nio.file.LinkOption;
import java.nio.file.Path;
import java.util.concurrent.ConcurrentHashMap;
import javax.imageio.ImageIO;
import net.minecraft.class_332;

/**
 * KOZMETİK ÖNİZLEMELERİ (v1.31.0) — DOSYA DOKUSU BASMADAN.
 *
 * Menüde `class_1043` (dinamik doku) basmak ImmediatelyFast/Sodium'lu
 * kurulumlarda metin partisiyle birleşip ekranın yarısını gri/blok kaplıyordu.
 * Bu yüzden önizlemeler de karakter gibi CPU'da okunur, küçük renk ızgarasına
 * indirilir ve yalnızca DOLGU ile çizilir (doku bağlaması hiç değişmez).
 *
 * Bölgeler vanilya düzenine göre normalize edilir (u/v 0..1), böylece hem
 * 64×64 hem 512×512 (HD) deriler, hem 64×32 hem 1024×512 pelerinler çalışır.
 */
public final class YikimOnizleme {
    /** path|mtime → ARGB pikseller. */
    private static final ConcurrentHashMap<String, int[]> DOKU = new ConcurrentHashMap<>();
    private static final ConcurrentHashMap<String, int[]> IZGARA = new ConcurrentHashMap<>();

    private YikimOnizleme() {
    }

    private static Path kok() {
        return YikimBridge.stateDir();
    }

    /** Göreli adı çöz ve görüntüyü oku (yoksa null). */
    static int[] doku(String goreli) {
        try {
            if (goreli == null || goreli.isEmpty()) {
                return null;
            }
            Path yol = Path.of(goreli);
            if (!yol.isAbsolute()) {
                yol = YikimOnizleme.kok().resolve(goreli);
            }
            if (!Files.isRegularFile(yol, new LinkOption[0])) {
                return null;
            }
            String anahtar = yol + "|" + Files.getLastModifiedTime(yol, new LinkOption[0]).toMillis();
            int[] onbellek = YikimOnizleme.DOKU.get(anahtar);
            if (onbellek != null) {
                return onbellek;
            }
            BufferedImage resim = ImageIO.read(yol.toFile());
            if (resim == null) {
                return null;
            }
            int w = resim.getWidth();
            int h = resim.getHeight();
            // başta genişlik/yükseklik, sonra ARGB pikseller
            int[] tam = new int[w * h + 2];
            tam[0] = w;
            tam[1] = h;
            resim.getRGB(0, 0, w, h, tam, 2, w);
            if (YikimOnizleme.DOKU.size() > 64) {
                YikimOnizleme.DOKU.clear();
            }
            YikimOnizleme.DOKU.put(anahtar, tam);
            return tam;
        }
        catch (Throwable ignored) {
            return null;
        }
    }

    /** Doku bölgesini `gx`×`gy` renk ızgarasına indir (şeffaf = 0). */
    static int[] izgara(String anahtar, int[] doku, double u0, double v0, double u1, double v1, int gx, int gy) {
        if (doku == null || gx <= 0 || gy <= 0) {
            return null;
        }
        String k = anahtar + "|" + gx + "x" + gy + "|" + u0 + "," + v0 + "," + u1 + "," + v1;
        int[] hazir = YikimOnizleme.IZGARA.get(k);
        if (hazir != null) {
            return hazir;
        }
        int w = doku[0];
        int h = doku[1];
        int[] cikti = new int[gx * gy];
        double x0 = u0 * (double)w;
        double y0 = v0 * (double)h;
        double x1 = u1 * (double)w;
        double y1 = v1 * (double)h;
        if (x1 <= x0) {
            x1 = x0 + 1.0;
        }
        if (y1 <= y0) {
            y1 = y0 + 1.0;
        }
        for (int y = 0; y < gy; ++y) {
            int sy = (int)(y0 + (y1 - y0) * ((double)y + 0.5) / (double)gy);
            for (int x = 0; x < gx; ++x) {
                int sx = (int)(x0 + (x1 - x0) * ((double)x + 0.5) / (double)gx);
                if (sx < 0 || sy < 0 || sx >= w || sy >= h) {
                    continue;
                }
                int renk = doku[2 + sy * w + sx];
                // saydam / yarı saydam pikselleri atla
                if ((renk >>> 24) < 40) {
                    continue;
                }
                cikti[y * gx + x] = renk | 0xFF000000;
            }
        }
        if (YikimOnizleme.IZGARA.size() > 512) {
            YikimOnizleme.IZGARA.clear();
        }
        YikimOnizleme.IZGARA.put(k, cikti);
        return cikti;
    }

    /** Deri kafası (ön yüz 8×8) ızgarası. */
    public static int[] kafaIzgara(String goreli) {
        int[] doku = YikimOnizleme.doku(goreli);
        return YikimOnizleme.izgara("kafa:" + goreli, doku, 8.0 / 64.0, 8.0 / 64.0, 16.0 / 64.0, 16.0 / 64.0, 8, 8);
    }

    /** Pelerin gövdesi (10×16) ızgarası. */
    public static int[] pelerinIzgara(String goreli) {
        int[] doku = YikimOnizleme.doku(goreli);
        return YikimOnizleme.izgara("pelerin:" + goreli, doku, 1.0 / 64.0, 1.0 / 32.0, 11.0 / 64.0, 17.0 / 32.0, 10, 16);
    }

    /** Elitra kanadı (tek kanat 5×14, sağ yarıdan) ızgarası. */
    public static int[] kanatIzgara(String goreli) {
        int[] doku = YikimOnizleme.doku(goreli);
        return YikimOnizleme.izgara("kanat:" + goreli, doku, 0.52, 0.02, 0.98, 0.98, 5, 14);
    }

    private static void hucre(class_332 graphics, int x, int y, int w, int h, int renk) {
        if (w <= 0 || h <= 0) {
            return;
        }
        graphics.method_25294(x, y, x + w, y + h, renk);
    }

    /** Kafayı `boyut` px kare olarak çiz (8×8 hücre). */
    public static void kafa(class_332 graphics, int[] izgara, int x, int y, int boyut) {
        if (izgara == null) {
            YikimDraw.roundedFill(graphics, x, y, x + boyut, y + boyut, 0x22FFFFFF);
            return;
        }
        int pi = Math.max(1, boyut / 8);
        int boy = pi * 8;
        for (int gy = 0; gy < 8; ++gy) {
            for (int gx = 0; gx < 8; ++gx) {
                int renk = izgara[gy * 8 + gx];
                if (renk == 0) {
                    continue;
                }
                YikimOnizleme.hucre(graphics, x + gx * pi, y + gy * pi, pi, pi, renk);
            }
        }
    }

    /**
     * Pelerini asılı bez gibi çiz: 10×16 hücre, alt sıralar hafif daralarak
     * ve sağdan sola esintiyle; kenarına ince koyu çizgi.
     */
    public static void pelerin(class_332 graphics, int[] izgara, int x, int y, int genislik, int yukseklik) {
        if (izgara == null) {
            YikimDraw.roundedFill(graphics, x, y, x + genislik, y + yukseklik, 0x22FFFFFF);
            return;
        }
        double pi = (double)genislik / 10.0;
        double py = (double)yukseklik / 16.0;
        for (int gy = 0; gy < 16; ++gy) {
            // alt kısımda bez toplanır: satır başına içeri kayma
            double kirp = 0.0;
            if (gy > 11) {
                kirp = (double)(gy - 11) * pi * 0.35;
            }
            for (int gx = 0; gx < 10; ++gx) {
                int renk = izgara[gy * 10 + gx];
                if (renk == 0) {
                    continue;
                }
                int px = x + (int)Math.round(gx * pi + kirp);
                int pw = (int)Math.round((gx + 1) * pi + kirp) - (int)Math.round(gx * pi + kirp);
                int pyTop = y + (int)Math.round(gy * py);
                int ph = (int)Math.round((gy + 1) * py) - pyTop;
                YikimOnizleme.hucre(graphics, px, pyTop, pw, ph, renk);
            }
        }
    }

    /** Elitrayı iki kanat olarak çiz (kartal kanadı gibi açılmış). */
    public static void elitra(class_332 graphics, int[] izgara, int x, int y, int genislik, int yukseklik) {
        if (izgara == null) {
            YikimDraw.roundedFill(graphics, x, y, x + genislik, y + yukseklik, 0x22FFFFFF);
            return;
        }
        int orta = x + genislik / 2;
        double pi = (double)genislik / 2.0 / 5.0;
        double py = (double)yukseklik / 14.0;
        for (int gy = 0; gy < 14; ++gy) {
            // üstten alta doğru kanat dışa açılır
            double kayma = (double)gy * pi * 0.18;
            for (int gx = 0; gx < 5; ++gx) {
                int renk = izgara[gy * 5 + gx];
                if (renk == 0) {
                    continue;
                }
                int pw = (int)Math.round((gx + 1) * pi) - (int)Math.round(gx * pi);
                int ph = (int)Math.round((gy + 1) * py) - (int)Math.round(gy * py);
                int lx = orta - (int)Math.round((gx + 1) * pi + kayma);
                int rx = orta + (int)Math.round(gx * pi + kayma);
                int pyTop = y + (int)Math.round(gy * py);
                YikimOnizleme.hucre(graphics, lx, pyTop, pw, ph, renk);
                YikimOnizleme.hucre(graphics, rx, pyTop, pw, ph, renk);
            }
        }
    }
}
