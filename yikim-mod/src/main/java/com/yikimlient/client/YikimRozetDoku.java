package com.yikimlient.client;

import com.mojang.blaze3d.systems.GpuDevice;
import com.mojang.blaze3d.systems.RenderSystem;
import net.minecraft.class_1011;
import net.minecraft.class_1044;
import net.minecraft.class_2960;
import net.minecraft.class_310;

/**
 * ROZET DOKUSU (v1.11.2) — \uE000 glifinin GPU İÇERİĞİNİ günceller.
 *
 * Yöntem: font sağlayıcısının doku kaydı `yikimlient:font/badge.png` id'siyle
 * TextureManager'da durur. Yeni kayıt eklemek yerine (glyph'ler GpuTextureView
 * önbelleği tutabildiği için) MEVCUT dokunun GPU görüntüsünü
 * CommandEncoder.writeToTexture ile değiştiriyoruz → TAB + nametag dahil
 * glifin her kullanımı anında yeni pikselleri basar, resource reload gerekmez.
 *
 * Render thread şartı: başka thread'den çağrılırsa client.execute ile taşınır.
 */
public final class YikimRozetDoku {
    /// 1.21.11 font atlası sayfa id şeması: <font_id>/<sayfa> (recipe: "/§").
    /// `yikimlient:badge` fontunun atlasında SADECE rozet glifi var → sayfanın
    /// tamamını güvenle yazabiliriz. Sayfa, glif ilk render'da talep edilince
    /// oluşur; o ana kadar doku kayıtlı olmayabilir → bulunamazsa sessiz geç,
    /// presence tick'i 30 sn'de bir yeniden dener.
    private static final class_2960[] ADAYLAR = new class_2960[]{
        class_2960.method_60655("yikimlient", "badge/0"),
        class_2960.method_60655("yikimlient", "badge/1"),
        class_2960.method_60655("yikimlient", "badge/2")
    };
    private static boolean bulunduLoglandi;

    /// Standart Y + şimşek (badge.png'nin piksel haritası) — Sıfırla bunu geri getirir.
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

    /// 64 ARGB pikseli glif dokusuna bas. Başarısızlıkta sessiz (standart Y kalır).
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
            for (class_2960 aday : ADAYLAR) {
                class_1044 adayDoku = mc.method_1531().method_4619(aday);
                if (adayDoku != null) {
                    doku = adayDoku;
                    if (!bulunduLoglandi) {
                        bulunduLoglandi = true;
                        YikimClient.LOGGER.info("YIKIM rozet dokusu atlasta bulundu: {}", aday);
                    }
                    break;
                }
            }
            if (doku == null) {
                if (!bulunduLoglandi) {
                    bulunduLoglandi = true;
                    YikimClient.LOGGER.info("YIKIM rozet atlasi henuz yok — ilk rozet render'indan sonra uygulanacak");
                }
                return;
            }
            class_1011 resim = new class_1011(YikimAtolye.BOY, YikimAtolye.BOY, false);
            for (int y = 0; y < YikimAtolye.BOY; y++) {
                for (int x = 0; x < YikimAtolye.BOY; x++) {
                    resim.method_4305(x, y, abgr(pikseller[y * YikimAtolye.BOY + x]));
                }
            }
            GpuDevice aygit = RenderSystem.getDevice();
            aygit.createCommandEncoder().writeToTexture(doku.method_68004(), resim);
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
