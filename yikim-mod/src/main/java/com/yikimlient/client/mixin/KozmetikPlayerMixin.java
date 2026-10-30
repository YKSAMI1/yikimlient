package com.yikimlient.client.mixin;

import com.yikimlient.client.YikimKozmetik;
import net.minecraft.class_742;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable;

/**
 * KOZMETİK DOKULARI (2. nokta) — oyuncu varlığı.
 *
 * Bazı sürümlerde/çağrı yollarında pelerin dokusu doğrudan oyuncu varlığının
 * `getSkinTextures()` (method_52814) metodundan okunur. PlayerListEntry
 * noktasına ek olarak burada da aynı doku uygulanır — ikinci çağrı aynı
 * önbellek nesnesine düştüğü için çift iş yapılmaz.
 */
@Mixin(net.minecraft.class_742.class)
public abstract class KozmetikPlayerMixin {
    @Inject(method = "method_52814", at = @At("RETURN"), cancellable = true, require = 0)
    private void yikim$kozmetikOyuncu(CallbackInfoReturnable<Object> cir) {
        try {
            Object mevcut = cir.getReturnValue();
            if (mevcut == null) {
                return;
            }
            class_742 oyuncu = (class_742) (Object) this;
            Object yeni = YikimKozmetik.onbellekli(mevcut, oyuncu.method_5667());
            if (yeni != null) {
                cir.setReturnValue(yeni);
            }
        }
        catch (Throwable ignored) {
            // kozmetiğin oyunu düşürme hakkı yok
        }
    }
}
