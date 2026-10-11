package com.yikimlient.client.mixin;

import net.minecraft.class_2561;
import net.minecraft.class_303;
import net.minecraft.class_310;
import net.minecraft.class_5250;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable;

/**
 * YIKIM TAB listesi mixin'i — oyuncu listesinde kendi adının önüne
 * turuncu "Y" rozeti ekler (Lunar/Dawn tarzı).
 *
 * Çalışma: PlayerListEntry'ın display name accessor'ını (comp_893) yakalar,
 * bu girişin YEREL OYUNCU olduğunu isim karşılaştırmasıyla doğrular,
 * ve önüne stilize "Y" harfi + boşluk ekler.
 *
 * Yalnızca YIKIM modu kullanan oyuncuda görünür (diğer oyuncuların
 * client bilgisi paylaşılmadığı için — ileride YIKIMDARA sunucu
 * eklentisiyle genişletilebilir).
 */
@Mixin(class_303.class)
public class YikimTabListMixin {

    @Inject(method = "comp_893", at = @At("RETURN"), cancellable = true)
    private void yikim$prependBadge(CallbackInfoReturnable<class_2561> cir) {
        try {
            class_2561 original = cir.getReturnValue();
            if (original == null) {
                return;
            }
            class_310 client = class_310.method_1551();
            if (client == null || client.field_1724 == null || client.field_1687 == null) {
                return;
            }
            // YALNIZCA yerel oyuncu — isim karşılaştırması
            String localName = client.field_1724.method_5476().getString();
            if (localName == null || !localName.equals(original.getString())) {
                return;
            }
            // YIKIM rozeti: turuncu "Y" + boşluk + orijinal isim
            class_5250 badge = (class_5250) class_2561.method_30163("Y");
            badge = badge.method_54663(0xFFFF7A18); // YIKIM turuncu (#FF7A18)
            class_5250 result = badge.method_10852((class_5250) class_2561.method_30163(" "));
            result = result.method_10852(original);
            cir.setReturnValue(result);
        } catch (Throwable ignored) {
            // mixin hatası oyunu asla etkilemesin
        }
    }
}
