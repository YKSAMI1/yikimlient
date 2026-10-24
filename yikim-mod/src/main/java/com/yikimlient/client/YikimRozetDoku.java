package com.yikimlient.client;

import com.mojang.blaze3d.systems.GpuDevice;
import com.mojang.blaze3d.systems.RenderSystem;
import net.minecraft.class_1011;
import net.minecraft.class_1044;
import net.minecraft.class_2960;
import net.minecraft.class_310;

/**
 * ROZET DOKUSU (v1.12.0) — her SLOT'un kendi glif GPU içeriğini günceller.
 *
 * Ölçüm (v1.11.4 kullanıcı testi): sheet'te sprite x≡6 (mod 8) hücresinden
 * başlıyor → canvas P(x,y) = art[(x-6)%8][y%8] ile damgalanır; glif
 * penceresi (6..13) düz 'art' okur. Aynı yerleşim TÜM slot sheet'lerinde
 * geçerlidir (her slot tek bitmap provider, aynı png boyutu).
 */
public final class YikimRozetDoku {
    private static final int ROLL_X = 6;
    private static final class_2960[][] ADAYLAR = adaylar();
    private static final boolean[] loglandi = new boolean[16];
    private static final class_1011[] KANVAS = new class_1011[YikimSlotlar.SLOT_SONU + 1];
    private static final int[] KANVAS_G = new int[YikimSlotlar.SLOT_SONU + 1];
    private static final int[] KANVAS_H = new int[YikimSlotlar.SLOT_SONU + 1];
    private static final int[][] KANVAS_ART = new int[YikimSlotlar.SLOT_SONU + 1][];

    private static class_2960[][] adaylar() {
        class_2960[][] tumu = new class_2960[YikimSlotlar.SLOT_SONU + 1][];
        for (int k = 0; k <= YikimSlotlar.SLOT_SONU; k++) {
            tumu[k] = new class_2960[]{
                class_2960.method_60655("yikimlient", "badge_s" + k + "/0"),
                class_2960.method_60655("yikimlient", "badge_s" + k + "/1"),
                class_2960.method_60655("yikimlient", "badge_s" + k + "/2")
            };
        }
        return tumu;
    }

    private YikimRozetDoku() {
    }

    /// Standart 8x8 Y + şimşek (ölçeklemesiz orijinal).
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

    /// 16x16 (veya BOY) ARGB pikseli slotun glif dokusuna bas.
    public static synchronized void uygula(int slot, int[] pikseller) {
        try {
            if (slot < 0 || slot > YikimSlotlar.SLOT_SONU
                || pikseller == null || pikseller.length < YikimAtolye.UZUNLUK) {
                return;
            }
            if (!RenderSystem.isOnRenderThread()) {
                class_310 mc = class_310.method_1551();
                if (mc == null) {
                    return;
                }
                mc.execute(() -> uygula(slot, pikseller));
                return;
            }
            class_310 mc = class_310.method_1551();
            if (mc == null) {
                return;
            }
            class_1044 doku = null;
            class_2960 bulunanId = null;
            for (class_2960 aday : ADAYLAR[slot]) {
                class_1044 adayDoku = mc.method_1531().method_4619(aday);
                if (adayDoku != null) {
                    doku = adayDoku;
                    bulunanId = aday;
                    break;
                }
            }
            if (doku == null) {
                return; // sheet daha yok — ilk render'da yeniden denenecek (heartbeat)
            }
            int genislik = doku.method_68004().getWidth(0);
            int yukseklik = doku.method_68004().getHeight(0);
            if (genislik <= 0 || yukseklik <= 0 || genislik > 2048 || yukseklik > 2048) {
                return;
            }
            if (KANVAS[slot] == null || KANVAS_G[slot] != genislik || KANVAS_H[slot] != yukseklik) {
                KANVAS[slot] = new class_1011(genislik, yukseklik, true);
                KANVAS_G[slot] = genislik;
                KANVAS_H[slot] = yukseklik;
                KANVAS_ART[slot] = null;
            }
            if (KANVAS_ART[slot] == null
                || !java.util.Arrays.equals(KANVAS_ART[slot], pikseller)) {
                for (int y = 0; y < yukseklik; y++) {
                    int satir = (y % 8) * 8;
                    for (int x = 0; x < genislik; x++) {
                        int sutun = ((x - ROLL_X) % 8 + 8) % 8;
                        KANVAS[slot].method_4305(x, y, abgr(pikseller[satir + sutun]));
                    }
                }
                KANVAS_ART[slot] = pikseller.clone();
            }
            GpuDevice aygit = RenderSystem.getDevice();
            aygit.createCommandEncoder().writeToTexture(doku.method_68004(), KANVAS[slot]);
            if (!loglandi[slot]) {
                loglandi[slot] = true;
                YikimClient.LOGGER.info("YIKIM rozet slot {} yazildi: {} ({}x{}, roll {})",
                    slot, bulunanId, genislik, yukseklik, ROLL_X);
            }
        }
        catch (Throwable problem) {
            YikimClient.LOGGER.warn("YIKIM rozet dokusu guncellenemedi: {}", problem.toString());
        }
    }

    /// 16x16 standart Y (8x8 VARSAYILAN_Y orta ölçekli 2x2 büyütme).
    public static int[] varsayilanBuyuk() {
        int[] buyuk = new int[YikimAtolye.UZUNLUK];
        for (int y = 0; y < YikimAtolye.BOY; y++) {
            for (int x = 0; x < YikimAtolye.BOY; x++) {
                buyuk[y * YikimAtolye.BOY + x] =
                    VARSAYILAN_Y[(y / 2) * 8 + (x / 2)];
            }
        }
        return buyuk;
    }

    private static int abgr(int argb) {
        int a = (argb >>> 24) & 0xFF;
        int k = (argb >>> 16) & 0xFF;
        int y = (argb >>> 8) & 0xFF;
        int m = argb & 0xFF;
        return (a << 24) | (m << 16) | (y << 8) | k;
    }
}
