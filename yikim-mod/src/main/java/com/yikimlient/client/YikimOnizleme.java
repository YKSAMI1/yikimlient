package com.yikimlient.client;

import java.awt.image.BufferedImage;
import java.nio.file.Files;
import java.nio.file.LinkOption;
import java.nio.file.Path;
import java.util.concurrent.ConcurrentHashMap;
import javax.imageio.ImageIO;
import net.minecraft.class_1011;
import net.minecraft.class_1043;
import net.minecraft.class_1060;
import net.minecraft.class_10799;
import net.minecraft.class_2960;
import net.minecraft.class_310;
import net.minecraft.class_332;

/**
 * KOZMETİK ÖNİZLEMELERİ (v1.33.2) — GERÇEK PNG DOKUSU.
 *
 * Önceden kartlar CPU'da hücre hücre DOLGU ile çiziliyordu; hücre genişliği
 * hatası yüzünden pelerinler "nokta/çizgi" gibi görünüyordu ve HD desenler
 * kayboluyordu. Artık dosya doku olarak kaydedilip `DrawContext`'in GUI doku
 * boru hattıyla BASILIYOR: kartta gördüğün şey dosyanın kendisi (nearest
 * örnekleme, HD dahil).
 *
 * Bölgeler 64×32 kozmetik paftası oranıyla verilir (HD dosyada otomatik
 * ölçeklenir):
 *   pelerin  dış yüz (1,1) 10×16     — kullanıcı DÜZ yüzü görür
 *   elitra   görünen kanat (36,2) 10×20 / boşsa (24,2)
 */
public final class YikimOnizleme {
    /** path|mtime → {Identifier, texW, texH, int[] pikseller} */
    private static final ConcurrentHashMap<String, Object[]> DOKULAR = new ConcurrentHashMap<>();

    private YikimOnizleme() {
    }

    private static Path kok() {
        return YikimBridge.stateDir();
    }

    private static Path yol(String goreli) {
        if (goreli == null || goreli.isEmpty()) {
            return null;
        }
        Path p = Path.of(goreli);
        if (!p.isAbsolute()) {
            p = YikimOnizleme.kok().resolve(goreli);
        }
        return Files.isRegularFile(p, new LinkOption[0]) ? p : null;
    }

    /** Dosyayı doku olarak kaydet (değişmedikçe bir kez). */
    private static Object[] doku(String goreli) {
        try {
            Path p = YikimOnizleme.yol(goreli);
            if (p == null) {
                return null;
            }
            String anahtar = p + "|" + Files.getLastModifiedTime(p, new LinkOption[0]).toMillis()
                + "|" + Files.size(p);
            Object[] hazir = YikimOnizleme.DOKULAR.get(anahtar);
            if (hazir != null) {
                return hazir;
            }
            BufferedImage resim = ImageIO.read(p.toFile());
            if (resim == null) {
                return null;
            }
            int w = resim.getWidth();
            int h = resim.getHeight();
            int[] piksel = new int[w * h];
            resim.getRGB(0, 0, w, h, piksel, 0, w);

            class_1011 gorsel;
            try (java.io.InputStream in = Files.newInputStream(p)) {
                gorsel = class_1011.method_4309(in);
            }
            if (gorsel == null) {
                return null;
            }
            class_1043 doku = new class_1043(() -> "yikim-onizleme", gorsel);
            String ad = "onizleme/" + Integer.toHexString(anahtar.hashCode());
            class_2960 id = class_2960.method_43902("yikimlient", ad);
            class_2960 yolu = class_2960.method_43902("yikimlient", "textures/" + ad + ".png");
            class_1060 tm = class_310.method_1551().method_1531();
            tm.method_4616(id, doku);
            tm.method_4616(yolu, doku);
            if (YikimOnizleme.DOKULAR.size() > 96) {
                YikimOnizleme.DOKULAR.clear();
            }
            Object[] kayit = new Object[] {id, w, h, piksel};
            YikimOnizleme.DOKULAR.put(anahtar, kayit);
            return kayit;
        }
        catch (Throwable ignored) {
            return null;
        }
    }

    /**
     * Dokunun verilen bölgesini (normalize 0..1) kutuya oranlı bas.
     * `olcek` = hedef/kaynak oranı; kart içinde ortalanır.
     */
    public static void blit(class_332 graphics, String goreli,
                            double u0, double v0, double uw, double vh,
                            int x, int y, int genislik, int yukseklik) {
        Object[] d = YikimOnizleme.doku(goreli);
        if (d == null) {
            return;
        }
        class_2960 id = (class_2960)d[0];
        int texW = (Integer)d[1];
        int texH = (Integer)d[2];
        int sx = (int)Math.round(u0 * texW);
        int sy = (int)Math.round(v0 * texH);
        int sw = Math.max(1, (int)Math.round(uw * texW));
        int sh = Math.max(1, (int)Math.round(vh * texH));
        if (sx < 0) { sx = 0; }
        if (sy < 0) { sy = 0; }
        if (sx + sw > texW) { sw = texW - sx; }
        if (sy + sh > texH) { sh = texH - sy; }
        if (sw <= 0 || sh <= 0) {
            return;
        }
        float olcek = Math.min((float)genislik / (float)sw, (float)yukseklik / (float)sh);
        int cizG = Math.max(1, Math.round(sw * olcek));
        int cizY = Math.max(1, Math.round(sh * olcek));
        int dx = x + (genislik - cizG) / 2;
        int dy = y + (yukseklik - cizY) / 2;
        try {
            YikimAdapter.push(graphics, dx, dy, olcek);
            graphics.method_25290(class_10799.field_56883, id, 0, 0,
                (float)sx, (float)sy, sw, sh, texW, texH);
            YikimAdapter.pop(graphics);
        }
        catch (Throwable ignored) {
            // doku basılamazsa kart boş kalır (oyun düşmez)
        }
    }

    /** Pelerin kartı: düz (dış) yüz — 64×32 paftasında (1,1) 10×16. */
    public static void pelerin(class_332 graphics, String goreli, int x, int y, int genislik, int yukseklik) {
        YikimOnizleme.blit(graphics, goreli, 1.0 / 64.0, 1.0 / 32.0, 10.0 / 64.0, 16.0 / 32.0,
            x, y, genislik, yukseklik);
    }

    /**
     * Elitra kartı: kanadın görünen yüzü. Doku dolu değilse iç yüze düşer;
     * ikisi de boşsa dosyanın dolu olduğu alan (otomatik kırpma) basılır.
     */
    public static void elitra(class_332 graphics, String goreli, int x, int y, int genislik, int yukseklik) {
        // Kanat tasarımları 64×32 paftasının kanat alanına çizilir; kartta
        // dosyanın DOLU olduğu alanın tamamı basılır (kırpılmış dilim değil).
        int[] kutu = YikimOnizleme.icerik(goreli);
        if (kutu != null) {
            Object[] d = YikimOnizleme.doku(goreli);
            int texW = (Integer)d[1];
            int texH = (Integer)d[2];
            YikimOnizleme.blit(graphics, goreli,
                (double)kutu[0] / (double)texW, (double)kutu[1] / (double)texH,
                (double)kutu[2] / (double)texW, (double)kutu[3] / (double)texH,
                x, y, genislik, yukseklik);
        }
    }

    /** Bölge opak piksel içeriyor mu? (64×32 kozmetik paftası koordinatı) */
    private static boolean doluMu(String goreli, int bx, int by, int bw, int bh) {
        Object[] d = YikimOnizleme.doku(goreli);
        if (d == null) {
            return false;
        }
        int texW = (Integer)d[1];
        int texH = (Integer)d[2];
        int[] px = (int[])d[3];
        int x0 = bx * texW / 64;
        int y0 = by * texH / 32;
        int x1 = (bx + bw) * texW / 64;
        int y1 = (by + bh) * texH / 32;
        for (int y = Math.max(0, y0); y < Math.min(texH, y1); ++y) {
            for (int x = Math.max(0, x0); x < Math.min(texW, x1); ++x) {
                if ((px[y * texW + x] >>> 24) > 40) {
                    return true;
                }
            }
        }
        return false;
    }

    /** Dokunun opak içeriğinin sınırları {x, y, w, h} (piksel). */
    private static int[] icerik(String goreli) {
        Object[] d = YikimOnizleme.doku(goreli);
        if (d == null) {
            return null;
        }
        int texW = (Integer)d[1];
        int texH = (Integer)d[2];
        int[] px = (int[])d[3];
        int minX = texW;
        int minY = texH;
        int maxX = -1;
        int maxY = -1;
        for (int y = 0; y < texH; ++y) {
            for (int x = 0; x < texW; ++x) {
                if ((px[y * texW + x] >>> 24) > 40) {
                    if (x < minX) { minX = x; }
                    if (y < minY) { minY = y; }
                    if (x > maxX) { maxX = x; }
                    if (y > maxY) { maxY = y; }
                }
            }
        }
        if (maxX < minX || maxY < minY) {
            return null;
        }
        return new int[] {minX, minY, maxX - minX + 1, maxY - minY + 1};
    }

    /** Deri kartı — kafa değil TAM VÜCUT (launcher'daki gibi, düz kâğıt bebek). */
    public static void deri(class_332 graphics, String goreli, int x, int y, int genislik, int yukseklik) {
        // 64×64 deri paftası; model 32 px boy, 16 px genişlik (kollar dahil)
        float olcek = Math.min((float)genislik / 17.0f, (float)yukseklik / 33.0f);
        if (olcek <= 0.0f) {
            return;
        }
        int govdeG = Math.round(16 * olcek);
        int govdeY = Math.round(32 * olcek);
        int sol = x + (genislik - govdeG) / 2;
        int ust = y + (yukseklik - govdeY) / 2;
        // baş (8×8) + şapka katmanı (40,8)
        YikimOnizleme.parca(graphics, goreli, 8, 8, 8, 8, 40, 8, sol + 4 * olcek, ust, 8 * olcek);
        // gövde (8×12) + ceket (20,36)
        YikimOnizleme.parca(graphics, goreli, 20, 20, 8, 12, 20, 36, sol + 4 * olcek, ust + 8 * olcek, 8 * olcek);
        // sağ kol (44,20) + kolluk (44,36)
        YikimOnizleme.parca(graphics, goreli, 44, 20, 4, 12, 44, 36, sol, ust + 8 * olcek, 4 * olcek);
        // sol kol (36,52) + kolluk (52,52)
        YikimOnizleme.parca(graphics, goreli, 36, 52, 4, 12, 52, 52, sol + 12 * olcek, ust + 8 * olcek, 4 * olcek);
        // sağ bacak (4,20) + pantolon (4,36)
        YikimOnizleme.parca(graphics, goreli, 4, 20, 4, 12, 4, 36, sol + 4 * olcek, ust + 20 * olcek, 4 * olcek);
        // sol bacak (20,52) + pantolon (4,52)
        YikimOnizleme.parca(graphics, goreli, 20, 52, 4, 12, 4, 52, sol + 8 * olcek, ust + 20 * olcek, 4 * olcek);
    }

    /** Deri paftasından tek parça: taban + üst katman üst üste. */
    private static void parca(class_332 graphics, String goreli, int u, int v, int w, int h,
                              int ou, int ov, float x, float y, float boyut) {
        Object[] d = YikimOnizleme.doku(goreli);
        if (d == null) {
            return;
        }
        class_2960 id = (class_2960)d[0];
        int texW = (Integer)d[1];
        int texH = (Integer)d[2];
        float olcek = boyut / (float)w;
        int px = Math.round(x);
        int py = Math.round(y);
        // üst katman (şeffafsa kendiliğinden görünmez)
        YikimOnizleme.katman(graphics, id, texW, texH, ou, ov, w, h, px, py, olcek);
        YikimOnizleme.katman(graphics, id, texW, texH, u, v, w, h, px, py, olcek);
    }

    private static void katman(class_332 graphics, class_2960 id, int texW, int texH,
                               int u, int v, int w, int h, int px, int py, float olcek) {
        try {
            YikimAdapter.push(graphics, px, py, olcek);
            graphics.method_25290(class_10799.field_56883, id, 0, 0,
                (float)(u * texW / 64), (float)(v * texH / 64), w * texW / 64, h * texH / 64, texW, texH);
            YikimAdapter.pop(graphics);
        }
        catch (Throwable ignored) {
            // tek parça basılamazsa kartın geri kalanı çizilir
        }
    }
}
