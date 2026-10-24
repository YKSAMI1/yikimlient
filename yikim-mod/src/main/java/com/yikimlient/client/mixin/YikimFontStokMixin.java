package com.yikimlient.client.mixin;

import com.yikimlient.client.YikimClient;
import com.yikimlient.client.YikimGlifFabrika;
import net.minecraft.class_11642;
import net.minecraft.class_2960;
import net.minecraft.class_390;
import org.spongepowered.asm.mixin.Final;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.Shadow;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfo;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

/**
 * FOTO-GLİF BAĞLANTISI (v1.12.1) — FontStorage method_2004 (provider kurulumu)
 * TAIL: yikimlient:badge_s<k> fontuna bizim glif sağlayıcımızı ÖNE ekler.
 *
 * method_40038 (glif arama) listede İLK non-null kazananı alır → bitmap
 * provider'dan (json png'si) ÖNCE bizim 16×16 foto-glifimiz çözülür.
 * Slot 0 (standart Y) bu mixin'den hiç geçmez — orijinal "badge" fontu
 * dokunulmadan kalır.
 */
@Mixin(net.minecraft.class_377.class)
public abstract class YikimFontStokMixin {

    @Shadow
    @Final
    private class_11642 field_61611;

    @Shadow
    private List<class_390> field_49121;

    @Inject(method = "method_2004", at = @At("TAIL"))
    private void yikim$glifSaglayiciEkle(List<net.minecraft.class_390.class_9241> sarmallar,
                                         Set<net.minecraft.class_9243> kaynaklar,
                                         CallbackInfo ci) {
        try {
            if (this.field_61611 == null || this.field_49121 == null) {
                return;
            }
            class_2960 fontId = ((YikimFontCtxSahasi) (Object) this.field_61611).yikim$fontId();
            if (fontId == null) {
                return;
            }
            String tam = fontId.toString(); // ör. "yikimlient:badge_s3"
            if (!tam.startsWith("yikimlient:badge_s")) {
                return;
            }
            int slot;
            try {
                slot = Integer.parseInt(tam.substring("yikimlient:badge_s".length()));
            }
            catch (NumberFormatException bozuk) {
                return;
            }
            class_390 saglayici = YikimGlifFabrika.saglayici(slot);
            if (saglayici == null || this.field_49121.contains(saglayici)) {
                return;
            }
            List<class_390> yeni = new ArrayList<>(this.field_49121.size() + 1);
            yeni.add(saglayici);
            yeni.addAll(this.field_49121);
            this.field_49121 = yeni;
            YikimClient.LOGGER.info("YIKIM foto-glif saglayici baglandi: {} (slot {})", tam, slot);
        }
        catch (Throwable problem) {
            YikimClient.LOGGER.warn("YIKIM glif saglayici eklenemedi: {}", problem.toString());
        }
    }
}
