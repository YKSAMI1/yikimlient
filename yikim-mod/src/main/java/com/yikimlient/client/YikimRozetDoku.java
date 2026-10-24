package com.yikimlient.client;

import com.mojang.blaze3d.systems.RenderSystem;
import net.minecraft.class_310;

/**
 * ROZET DOKUSU (v1.12.1) — ince katman: slotun KENDİ 16×16 dokusuna basar
 * (YikimGlifFabrika). Eski atlas-yazım yolu tamamen kaldırıldı.
 */
public final class YikimRozetDoku {
    private YikimRozetDoku() {
    }

    /// ARGB pikselleri slotun foto-glif dokusuna bas (thread güvenli).
    public static void uygula(int slot, int[] pikseller) {
        if (slot < 1 || slot > YikimSlotlar.SLOT_SONU
            || pikseller == null || pikseller.length < YikimAtolye.UZUNLUK) {
            return;
        }
        if (!RenderSystem.isOnRenderThread()) {
            class_310 mc = class_310.method_1551();
            if (mc == null) {
                return;
            }
            mc.execute(() -> YikimGlifFabrika.guncelle(slot, pikseller));
            return;
        }
        YikimGlifFabrika.guncelle(slot, pikseller);
    }

    /// Standart 8×8 Y + şimşek (ölçeksiz orijinal).
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

    /// 16×16 standart Y (2×2 piksel-art büyütme) — Sıfırla düzeltmesi (v1.12.1):
    /// eski kod 64 int'i 256'lık ızgaraya basıyordu → "yarımı olmayan iki Y".
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
}
