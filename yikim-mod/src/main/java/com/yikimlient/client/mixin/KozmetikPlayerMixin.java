package com.yikimlient.client.mixin;

import com.yikimlient.client.YikimKozmetik;
import net.minecraft.class_742;
import net.minecraft.class_310;
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
            // HIZLI KAPI: hiçbir kozmetik yoksa sıfır iş (her kare çağrılır).
            if (!YikimKozmetik.etkinMi()) {
                return;
            }
            Object mevcut = cir.getReturnValue();
            if (mevcut == null) {
                return;
            }
            class_742 oyuncu = (class_742) (Object) this;
            // Oyuncu listesi girişi yoksa vanilla VARSAYILAN skini (Steve/Alex)
            // döndürür; o gövdeyi kozmetikle birlikte önbelleğe almak gerçek
            // skini eziyordu. Giriş yoksa hiç dokunma.
            // NOT: `method_3123()` (getGameProfile) 1.21.11'de PROTECTED — mixin
            // derlemesi bu yüzden patlıyordu ve jar mixin'siz kalıyordu (oyunda
            // rozet/kozmetik hiç görünmüyordu). Oyuncu listesi girişi üzerinden
            // aynı kontrolü yapıyoruz: giriş yoksa varsayılan skin gelir.
            class_310 mc = class_310.method_1551();
            if (mc == null || mc.method_1562() == null
                || mc.method_1562().method_2871(oyuncu.method_5667()) == null) {
                return;
            }
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
