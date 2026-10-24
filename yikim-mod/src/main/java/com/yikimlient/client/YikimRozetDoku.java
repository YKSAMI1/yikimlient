package com.yikimlient.client;

import com.mojang.blaze3d.systems.GpuDevice;
import com.mojang.blaze3d.systems.RenderSystem;
import net.minecraft.class_1011;
import net.minecraft.class_1044;
import net.minecraft.class_2960;
import net.minecraft.class_310;

/**
 * ROZET DOKUSU (v1.11.4) — \uE000 glifinin GPU İÇERİĞİNİ günceller.
 *
 * 1.21.11 font atlası sayfa id şeması: <font_id>/<sayfa> → `yikimlient:badge/0`.
 * `yikimlient:badge` fontunun atlasında SADECE rozet glifi var.
 *
 * Ders (v1.11.3 log'u): sayfa dokusu 1024x1024 olabiliyor; 8x8 tam-yazma
 * reddediliyor. Çözüm: bulunan dokunun GERÇEK boyutunu sorgula, aynı boyutta
 * şeffaf kanvas aç, çizimi (0,0)'a damgala, tam yaz. Boyut log'a yazılır —
 * (0,0) hücresi tek-glift atlasında glifin kendisidir.
 */
public final class YikimRozetDoku {
    private static final class_2960[] ADAYLAR = new class_2960[]{
        class_2960.method_60655("yikimlient", "badge/0"),
        class_2960.method_60655("yikimlient", "badge/1"),
        class_2960.method_60655("yikimlient", "badge/2")
    };
    private static boolean yaziLoglandi;
    private static boolean yokLoglandi;

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
    public static void uygula(int[] pikseller) {
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
            // atlas sayfasını bul (yikimlient:badge/0 .. /2)
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
            // GERÇEK boyutu sorgula (atlas sayfası 256 ya da 1024 olabilir)
            int genislik = doku.method_68004().getWidth(0);
            int yukseklik = doku.method_68004().getHeight(0);
            if (genislik <= 0 || yukseklik <= 0 || genislik > 4096 || yukseklik > 4096) {
                YikimClient.LOGGER.warn("YIKIM rozet dokusu boyutu sapis: {}x{}", genislik, yukseklik);
                return;
            }
            // aynı boyutta şeffaf kanvas + sol üst köşeye damga
            class_1011 resim = new class_1011(genislik, yukseklik, true);
            for (int y = 0; y < YikimAtolye.BOY; y++) {
                for (int x = 0; x < YikimAtolye.BOY; x++) {
                    resim.method_4305(x, y, abgr(pikseller[y * YikimAtolye.BOY + x]));
                }
            }
            GpuDevice aygit = RenderSystem.getDevice();
            aygit.createCommandEncoder().writeToTexture(doku.method_68004(), resim);
            if (!yaziLoglandi) {
                yaziLoglandi = true;
                YikimClient.LOGGER.info("YIKIM rozet dokusu yazildi: {} ({}x{}) — cizim glifte aktif",
                    bulunanId, genislik, yukseklik);
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
