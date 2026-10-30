package com.yikimlient.client.mixin;

import com.yikimlient.client.YikimBadge;
import net.minecraft.class_2561;
import net.minecraft.class_640;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable;

/**
 * TAB rozeti (v1.10.0) — PlayerListHud.method_1918 (liste adı) RETURN'ünde
 * YIKIM oyuncularının (ve kendinin) listesine rozet ön eki.
 */
@Mixin(net.minecraft.class_355.class)
public abstract class TabBadgeMixin {
    @Inject(method = "method_1918", at = @At("RETURN"), cancellable = true, require = 0)
    private void yikim$tab(class_640 entry, CallbackInfoReturnable<class_2561> cir) {
        try {
            if (cir.getReturnValue() == null) {
                return;
            }
            com.mojang.authlib.GameProfile profile = entry.method_2966();
            if (profile == null) {
                return;
            }
            // UUID eşleşmezse İSİM eşleşmesi de kabul edilir (proxy/offline
            // modda görünen UUID presence kaydından farklı olabiliyor).
            if (YikimBadge.isKnown(profile.id()) || YikimBadge.isKnownName(profile.name())) {
                cir.setReturnValue(YikimBadge.tag(cir.getReturnValue(), profile.id()));
            }
        }
        catch (Throwable ignored) {
            // rozetin TAB'ı bozma hakkı yok
        }
    }
}
