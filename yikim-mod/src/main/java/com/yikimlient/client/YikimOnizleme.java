package com.yikimlient.client;

import java.awt.image.BufferedImage;
import java.nio.file.Files;
import java.nio.file.LinkOption;
import java.nio.file.Path;
import java.util.concurrent.ConcurrentHashMap;
import javax.imageio.ImageIO;
import net.minecraft.class_332;

/**
 * KOZMETİK ÖNİZLEMELERİ (v1.32.0) — DOSYA DOKUSU BASMADAN.
 *
 * Menüde `class_1043` (dinamik doku) basmak ImmediatelyFast/Sodium'lu
 * kurulumlarda metin partisiyle birleşip ekranın yarısını gri/blok kaplıyordu.
 * Bu yüzden önizlemeler de karakter gibi CPU'da okunur, renk ızgarasına
 * indirilir ve yalnızca DOLGU ile çizilir (doku bağlaması hiç değişmez).
 *
 * v1.32.0 — "pelerin/Mojang pelerinleri önizlemesi görünmüyor, elitra saçma":
 *  Bölgeler vanilla kutu UV düzenine göre düzeltildi. Pelerin paftası 64×32:
 *  ARKADAN GÖRÜNEN yüz (12,1) 10×16'dır ((1,1) gövdeye bakan iç astardır).
 *  Elitra paftası 64×32: görünen yüz (36,2) 10×20 ((24,2) iç yüz).
 *  Eskiden pelerinde (1,1) okunuyordu → HD paftalarda o panel boş olduğu için
 *  kartlar bomboş görünüyordu.
 */
public final class YikimOnizleme {
    /** path|mtime → ARGB pikseller. */
    private static final ConcurrentHashMap<String, int[]> DOKU = new ConcurrentHashMap<>();
    private static final ConcurrentHashMap<String, int[]> IZGARA = new ConcurrentHashMap<>();

    /** 64×32 kozmetik paftasında ARKADAN GÖRÜNEN yüzler (x, y, w, h). */
    private static final int[] PELERIN_DIS = new int[]{12, 1, 10, 16};
    private static final int[] PELERIN_IC = new int[]{1, 1, 10, 16};
    private static final int[] KANAT_DIS = new int[]{36, 2, 10, 20};
    private static final int[] KANAT_IC = new int[]{24, 2, 10, 20};

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
            if (YikimOnizleme.DOKU.size() > 128) {
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
        if (YikimOnizleme.IZGARA.size() > 1024) {
            YikimOnizleme.IZGARA.clear();
        }
        YikimOnizleme.IZGARA.put(k, cikti);
        return cikti;
    }

    /** Bölge ızgarası: önce dış (görünen) panel, boşsa iç panel. */
    private static int[] bolge(String anahtar, int[] doku, int[] dis, int[] ic, int gx, int gy) {
        if (doku == null) {
            return null;
        }
        int[] a = YikimOnizleme.dilim(anahtar + ":dis", doku, dis, gx, gy);
        if (a != null && YikimOnizleme.dolu(a)) {
            return a;
        }
        int[] b = YikimOnizleme.dilim(anahtar + ":ic", doku, ic, gx, gy);
        return b;
    }

    private static int[] dilim(String anahtar, int[] doku, int[] d, int gx, int gy) {
        return YikimOnizleme.izgara(anahtar, doku,
            (double)d[0] / 64.0, (double)d[1] / 32.0,
            (double)(d[0] + d[2]) / 64.0, (double)(d[1] + d[3]) / 32.0, gx, gy);
    }

    private static boolean dolu(int[] izgara) {
        for (int renk : izgara) {
            if (renk != 0) {
                return true;
            }
        }
        return false;
    }

    /** Deri kafası (ön yüz 8×8) ızgarası. */
    public static int[] kafaIzgara(String goreli) {
        int[] doku = YikimOnizleme.doku(goreli);
        return YikimOnizleme.izgara("kafa:" + goreli, doku,
            8.0 / 64.0, 8.0 / 64.0, 16.0 / 64.0, 16.0 / 64.0, 8, 8);
    }

    /** Pelerin gövdesi (arkadan görünen 10×16 panel) ızgarası. */
    public static int[] pelerinIzgara(String goreli) {
        return YikimOnizleme.bolge("pelerin:" + goreli, YikimOnizleme.doku(goreli),
            YikimOnizleme.PELERIN_DIS, YikimOnizleme.PELERIN_IC, 10, 16);
    }

    /** Elitra kanadı (görünen 10×20 panel) ızgarası. */
    public static int[] kanatIzgara(String goreli) {
        return YikimOnizleme.bolge("kanat:" + goreli, YikimOnizleme.doku(goreli),
            YikimOnizleme.KANAT_DIS, YikimOnizleme.KANAT_IC, 10, 20);
    }

    private static void hucre(class_332 graphics, int x, int y, int w, int h, int renk) {
        if (w <= 0 || h <= 0) {
            return;
        }
        graphics.method_25294(x, y, x + w, y + h, renk);
    }

    /** Kafayı `boyut` px kare olarak çiz (8×8 hücre). */
    public static void kafa(class_332 graphics, int[] ızgara, int x, int y, int boyut) {
        if (ızgara == null) {
            YikimDraw.roundedFill(graphics, x, y, x + boyut, y + boyut, 0x22FFFFFF);
            return;
        }
        int pi = Math.max(1, boyut / 8);
        for (int gy = 0; gy < 8; ++gy) {
            for (int gx = 0; gx < 8; ++gx) {
                int renk = ızgara[gy * 8 + gx];
                if (renk == 0) {
                    continue;
                }
                YikimOnizleme.hucre(graphics, x + gx * pi, y + gy * pi, pi, pi, renk);
            }
        }
    }

    /** Pelerini düz panel olarak çiz (10×16, kartı ortalayarak). */
    public static void pelerin(class_332 graphics, int[] ızgara, int x, int y, int genislik, int yukseklik) {
        if (ızgara == null) {
            YikimDraw.roundedFill(graphics, x, y, x + genislik, y + yukseklik, 0x22FFFFFF);
            return;
        }
        double pi = (double)genislik / 10.0;
        double py = (double)yukseklik / 16.0;
        for (int gy = 0; gy < 16; ++gy) {
            for (int gx = 0; gx < 10; ++gx) {
                int renk = ızgara[gy * 10 + gx];
                if (renk == 0) {
                    continue;
                }
                int px = x + (int)Math.round(gx * pi);
                int pw = (int)Math.round((gx + 1) * pi) - px;
                int pyTop = y + (int)Math.round(gy * py);
                int ph = (int)Math.round((gy + 1) * py) - pyTop;
                YikimOnizleme.hucre(graphics, px, pyTop, Math.max(1, pw), Math.max(1, ph), renk);
            }
        }
    }

    /**
     * Elitrayı İKİ KANAT olarak çiz: her kanat 10×20 panel, üstte omuzda
     * birleşip aşağıda hafifçe dışa açılır; kanatlar birbirinin aynasıdır.
     */
    public static void elitra(class_332 graphics, int[] ızgara, int x, int y, int genislik, int yukseklik) {
        if (ızgara == null) {
            YikimDraw.roundedFill(graphics, x, y, x + genislik, y + yukseklik, 0x22FFFFFF);
            return;
        }
        int kanatG = Math.max(6, genislik / 2 - 3);
        double pi = (double)kanatG / 10.0;
        double py = (double)yukseklik / 20.0;
        int orta = x + genislik / 2;
        for (int gy = 0; gy < 20; ++gy) {
            // aşağı indikçe kanat dışa açılır
            int kayma = (int)Math.round((double)gy / 20.0 * 3.0);
            int pyTop = y + (int)Math.round(gy * py);
            int ph = Math.max(1, (int)Math.round((gy + 1) * py) - (int)Math.round(gy * py));
            for (int gx = 0; gx < 10; ++gx) {
                int renk = ızgara[gy * 10 + gx];
                if (renk == 0) {
                    continue;
                }
                int pw = Math.max(1, (int)Math.round((gx + 1) * pi) - (int)Math.round(gx * pi));
                // sol kanat aynalanır
                int sagX = orta + 1 + kayma + (int)Math.round(gx * pi);
                int solX = orta - 1 - kayma - (int)Math.round((gx + 1) * pi);
                YikimOnizleme.hucre(graphics, solX, pyTop, pw, ph, renk);
                YikimOnizleme.hucre(graphics, sagX, pyTop, pw, ph, renk);
            }
        }
    }
}
