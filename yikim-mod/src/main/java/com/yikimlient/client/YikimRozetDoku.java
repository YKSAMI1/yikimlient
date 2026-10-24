package com.yikimlient.client;

import com.mojang.blaze3d.systems.GpuDevice;
import com.mojang.blaze3d.systems.RenderSystem;
import net.minecraft.class_1011;
import net.minecraft.class_1044;
import net.minecraft.class_2960;
import net.minecraft.class_310;

/**
 * ROZET DOKUSU (v1.11.5) — \uE000 glifinin GPU içeriğini günceller.
 *
 * Ölçüm (v1.11.4 kullanıcı testi): sheet şeffaf kanvas + çizim (0,0)'da.
 * TAB'da SADECE çizimin sağ 2 sütunu göründü → glif penceresi sheet'i
 * x ≡ 6 (mod 8) noktasından okuyor (sprite sheet'te (6,0)'a paketlenmiş).
 *
 * Çözüm: sheet'in bütününe P(x,y) = art[(x-6) mod 8][y mod 8] damgalanır.
 * Glif penceresi (6..13) okuduğunda düz 'art' çıkar; sprite hangi turda
 * dönerse dönsün periyodik doku doğru okur. Sıfırla VARSAYILAN_Y çizer.
 */
public final class YikimRozetDoku {
    private static final class_2960[] ADAYLAR = new class_2960[]{
        class_2960.method_60655("yikimlient", "badge/0"),
        class_2960.method_60655("yikimlient", "badge/1"),
        class_2960.method_60655("yikimlient", "badge/2")
    };
    /** glif penceresinin sheet'teki sütun ofseti (ölçüm: 6) */
    private static final int ROLL_X = 6;
    private static boolean yaziLoglandi;
    private static boolean yokLoglandi;
    private static int[] kanvasArt;
    private static class_1011 kanvas;
    private static int kanvasGenislik;
    private static int kanvasYukseklik;

    /// Standart Y + şimşek — Sıfırla bunu geri getirir.
    public static final int[] VARSAYILAN_Y = {
        0xFFFFFFFF, 0,          0,          0,          0,          0xFFFF7A18, 0,          0,
        0xFFFFFFFF, 0,          0,          0,          0xFFFF7A18, 0xFFFF7A18, 0,          0,
        0,          0xFFFFFFFF, 0,          0,          0,          0xFFFF7A18, 0,          0,
        0,          0xFFFFFFFF, 0,          0,          0xFFFF7A18, 0,          0,          0,
        0,          0,          0xFFFFFFFF, 0,          0xFFFF7A18, 0,          0,          0,
        0,          0,          0xFFFFFFFF, 0,          0xFFFF7A18, 0,          0,          0,
        0,          0,          0xFFFFFFFF, 0,          0,          0,          0,          0,
        0,          0,          0xFFFFFFFF, 0,          0,          0,          0,          0
    };

    private YikimRozetDoku() {
    }

    /// 64 ARGB pikseli glif dokusuna bas (render thread'e taşınır; hata loglanır).
    public static synchronized void uygula(int[] pikseller) {
        try {
            if (pikseller == null || pikseller.length < 64) {
                return;
            }
            if (!RenderSystem.isOnRenderThread()) {
                class_310 mc = class_310.method_1551();
                if (mc == null) {
                    return;
                }
                mc.execute(() -> uygula(pikseller));
                return;
            }
            class_310 mc = class_310.method_1551();
            if (mc == null) {
                return;
            }
            class_1044 doku = null;
            class_2960 bulunanId = null;
            for (class_2960 aday : ADAYLAR) {
                class_1044 adayDoku = mc.method_1531().method_4619(aday);
                if (adayDoku != null) {
                    doku = adayDoku;
                    bulunanId = aday;
                    break;
                }
            }
            if (doku == null) {
                if (!yokLoglandi) {
                    yokLoglandi = true;
                    YikimClient.LOGGER.info("YIKIM rozet atlasi henuz yok — ilk rozet render'indan sonra uygulanacak");
                }
                return;
            }
            int genislik = doku.method_68004().getWidth(0);
            int yukseklik = doku.method_68004().getHeight(0);
            if (genislik <= 0 || yukseklik <= 0 || genislik > 4096 || yukseklik > 4096
                || genislik != kanvasGenislik || yukseklik != kanvasYukseklik) {
                kanvas = null; // boyut değişti → canvas yeniden
            }
            if (kanvas == null) {
                kanvasArt = null;
                kanvas = new class_1011(genislik, yukseklik, true);
                kanvasGenislik = genislik;
                kanvasYukseklik = yukseklik;
            }
            if (kanvasArt == null || !java.util.Arrays.equals(kanvasArt, pikseller)) {
                // canvas'ı roll-düzeltilmiş çizimle doldur (period 8 karo)
                for (int y = 0; y < yukseklik; y++) {
                    int satir = (y % 8) * 8;
                    for (int x = 0; x < genislik; x++) {
                        int sutun = ((x - ROLL_X) % 8 + 8) % 8;
                        kanvas.method_4305(x, y, abgr(pikseller[satir + sutun]));
                    }
                }
                kanvasArt = pikseller.clone();
            }
            GpuDevice aygit = RenderSystem.getDevice();
            aygit.createCommandEncoder().writeToTexture(doku.method_68004(), kanvas);
            if (!yaziLoglandi) {
                yaziLoglandi = true;
                YikimClient.LOGGER.info("YIKIM rozet dokusu yazildi: {} ({}x{}, roll {}) — cizim glifte aktif",
                    bulunanId, genislik, yukseklik, ROLL_X);
            }
        }
        catch (Throwable problem) {
            YikimClient.LOGGER.warn("YIKIM rozet dokusu guncellenemedi: {}", problem.toString());
        }
    }

    public static void varsayilanaDon() {
        uygula(VARSAYILAN_Y);
    }

    private static int abgr(int argb) {
        int a = (argb >>> 24) & 0xFF;
        int k = (argb >>> 16) & 0xFF;
        int y = (argb >>> 8) & 0xFF;
        int m = argb & 0xFF;
        return (a << 24) | (m << 16) | (y << 8) | k;
    }
}
