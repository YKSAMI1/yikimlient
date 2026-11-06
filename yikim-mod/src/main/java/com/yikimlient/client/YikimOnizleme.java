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

    /** 64×32 kozmetik paftasında DIŞ (kartta görünen) yüzler (x, y, w, h).
     *  v1.33.1 — pelerin kartları (12,1) = TERSTEN (aynalı) yüzü gösteriyordu;
     *  kullanıcı düz yüzü görmek istiyor. Dış yüz (1,1), iç yüz (12,1). */
    private static final int[] PELERIN_DIS = new int[]{1, 1, 10, 16};
    private static final int[] PELERIN_IC = new int[]{12, 1, 10, 16};
    private static final int[] KANAT_DIS = new int[]{36, 2, 10, 20};
    private static final int[] KANAT_IC = new int[]{24, 2, 10, 20};
    /** Kart ızgara çözünürlüğü — 10×16 kaba ızgara HD dokuda "nokta nokta"
     *  görünüyordu; artık her hücre kaynak pikselin ORTALAMASIDIR. */
    private static final int PELERIN_GX = 20;
    private static final int PELERIN_GY = 32;
    private static final int KANAT_GX = 20;
    private static final int KANAT_GY = 40;

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
        // Her hücre için kaynak piksellerin alfa ağırlıklı ORTALAMASI:
        // HD pelerinlerde tek pikseli kaçıran noktalı görünüm böyle biter.
        for (int y = 0; y < gy; ++y) {
            int sy0 = (int)Math.floor(y0 + (y1 - y0) * (double)y / (double)gy);
            int sy1 = (int)Math.ceil(y0 + (y1 - y0) * (double)(y + 1) / (double)gy);
            if (sy1 <= sy0) {
                sy1 = sy0 + 1;
            }
            for (int x = 0; x < gx; ++x) {
                int sx0 = (int)Math.floor(x0 + (x1 - x0) * (double)x / (double)gx);
                int sx1 = (int)Math.ceil(x0 + (x1 - x0) * (double)(x + 1) / (double)gx);
                if (sx1 <= sx0) {
                    sx1 = sx0 + 1;
                }
                long ar = 0L;
                long ag = 0L;
                long ab = 0L;
                long aa = 0L;
                for (int sy = sy0; sy < sy1; ++sy) {
                    if (sy < 0 || sy >= h) {
                        continue;
                    }
                    for (int sx = sx0; sx < sx1; ++sx) {
                        if (sx < 0 || sx >= w) {
                            continue;
                        }
                        int renk = doku[2 + sy * w + sx];
                        int a = renk >>> 24;
                        if (a < 16) {
                            continue;
                        }
                        ar += (long)(renk >> 16 & 0xFF) * a;
                        ag += (long)(renk >> 8 & 0xFF) * a;
                        ab += (long)(renk & 0xFF) * a;
                        aa += a;
                    }
                }
                if (aa <= 0L) {
                    continue;
                }
                int r = (int)(ar / aa);
                int g2 = (int)(ag / aa);
                int b = (int)(ab / aa);
                cikti[y * gx + x] = 0xFF000000 | r << 16 | g2 << 8 | b;
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
            YikimOnizleme.PELERIN_DIS, YikimOnizleme.PELERIN_IC,
            YikimOnizleme.PELERIN_GX, YikimOnizleme.PELERIN_GY);
    }

    /** Elitra kanadı (görünen 10×20 panel) ızgarası. */
    public static int[] kanatIzgara(String goreli) {
        return YikimOnizleme.bolge("kanat:" + goreli, YikimOnizleme.doku(goreli),
            YikimOnizleme.KANAT_DIS, YikimOnizleme.KANAT_IC,
            YikimOnizleme.KANAT_GX, YikimOnizleme.KANAT_GY);
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
        int gX = YikimOnizleme.PELERIN_GX;
        int gY = YikimOnizleme.PELERIN_GY;
        if (ızgara.length != gX * gY) {
            gX = 10;
            gY = 16;
        }
        double pi = (double)genislik / (double)gX;
        double py = (double)yukseklik / (double)gY;
        for (int gy = 0; gy < gY; ++gy) {
            int pyTop = y + (int)Math.round(gy * py);
            int ph = (int)Math.round((gy + 1) * py) - pyTop;
            for (int gx = 0; gx < gX; ++gx) {
                int renk = ızgara[gy * gX + gx];
                if (renk == 0) {
                    continue;
                }
                // v1.33.1 — KARTLARDA "NOKTA NOKTALI" GÖRÜNÜMÜN KÖKÜ:
                // `pw` mutlak px'ten çıkartılıyordu (x ofseti genişliğe
                // giriyordu) → her hücre 1 px'e düşüyordu. Genişlik artık
                // iki kenarın farkı.
                int px = x + (int)Math.round(gx * pi);
                int pw = (int)Math.round((gx + 1) * pi) - (int)Math.round(gx * pi);
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
        int gX = YikimOnizleme.KANAT_GX;
        int gY = YikimOnizleme.KANAT_GY;
        if (ızgara.length != gX * gY) {
            gX = 10;
            gY = 20;
        }
        int kanatG = Math.max(6, genislik / 2 - 3);
        double pi = (double)kanatG / (double)gX;
        double py = (double)yukseklik / (double)gY;
        int orta = x + genislik / 2;
        for (int gy = 0; gy < gY; ++gy) {
            // aşağı indikçe kanat dışa açılır
            int kayma = (int)Math.round((double)gy / (double)gY * 3.0);
            int pyTop = y + (int)Math.round(gy * py);
            int ph = Math.max(1, (int)Math.round((gy + 1) * py) - (int)Math.round(gy * py));
            for (int gx = 0; gx < gX; ++gx) {
                int renk = ızgara[gy * gX + gx];
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
