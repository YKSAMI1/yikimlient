package com.yikimlient.client.mixin;

import com.yikimlient.client.YikimAdapter;
import com.yikimlient.client.YikimConfig;
import com.yikimlient.client.YikimDraw;
import net.minecraft.class_11909;
import net.minecraft.class_310;
import net.minecraft.class_332;
import net.minecraft.class_437;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfo;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable;

/**
 * VANILLA BAŞLIK EKRANI — geri dönüş düğmesi.
 *
 * Arayüz kapalıyken (menu.yikim=false) oyunun KENDİ başlık ekranı görünür.
 * Sağ üstte "YIKIMLient" düğmesi durur; basınca tercih yeniden açılır ve
 * YIKIM ana menüsüne dönülür. Tercih config dosyasına yazıldığı için oyun
 * kapatılsa da korunur.
 *
 * Düğme widget olarak EKLENMEZ: doğrudan çizilir ve tıklaması yakalanır.
 * Böylece vanilla ekranın kendi düğme düzenine hiç dokunulmaz (sürüm
 * farklarında widget listesi değişse bile burası sağlam kalır).
 */
@Mixin(net.minecraft.class_442.class)
public abstract class BaslikEkraniMixin {
    private static final int DUGME_G = 104;
    private static final int DUGME_Y = 18;
    private static final int DUGME_UST = 6;

    @Inject(method = "method_25394", at = @At("TAIL"))
    private void yikim$dugmeCiz(class_332 graphics, int mouseX, int mouseY, float delta, CallbackInfo ci) {
        try {
            if (YikimConfig.get().customMainMenu) {
                return;
            }
            class_437 self = (class_437)(Object)this;
            int x = self.field_22789 - DUGME_G - 6;
            boolean uzerinde = YikimDraw.inside(mouseX, mouseY, x, DUGME_UST, DUGME_G, DUGME_Y);
            YikimDraw.button(graphics, class_310.method_1551().field_1772, x, DUGME_UST, DUGME_G, DUGME_Y, "YIKIMLient", false, uzerinde);
        }
        catch (Throwable ignored) {
            // düğme çizilemezse vanilla ekran aynen çalışır
        }
    }

    @Inject(method = "method_25402", at = @At("HEAD"), cancellable = true)
    private void yikim$dugmeTik(class_11909 mouse, boolean doubleClick, CallbackInfoReturnable<Boolean> cir) {
        try {
            if (YikimConfig.get().customMainMenu) {
                return;
            }
            class_437 self = (class_437)(Object)this;
            int x = self.field_22789 - DUGME_G - 6;
            if (!YikimDraw.inside(mouse.comp_4798(), mouse.comp_4799(), x, DUGME_UST, DUGME_G, DUGME_Y)) {
                return;
            }
            YikimConfig config = YikimConfig.get();
            config.customMainMenu = true;
            config.save();
            class_310.method_1551().method_1507(YikimAdapter.titleScreen());
            cir.setReturnValue(Boolean.TRUE);
        }
        catch (Throwable ignored) {
            // tıklama işlenemezse vanilla davranış sürer
        }
    }
}
