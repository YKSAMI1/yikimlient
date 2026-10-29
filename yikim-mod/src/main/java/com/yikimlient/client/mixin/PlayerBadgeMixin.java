package com.yikimlient.client.mixin;

import com.yikimlient.client.YikimBadge;
import com.yikimlient.client.YikimClient;
import net.minecraft.class_10017;
import net.minecraft.class_1297;
import net.minecraft.class_243;
import net.minecraft.class_2561;
import net.minecraft.class_310;
import net.minecraft.class_742;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable;

import java.util.concurrent.atomic.AtomicBoolean;

/**
 * İsim rozeti (v1.10.7) — ÇİFT NOKTA:
 *
 *  1) method_62426 RETURN: etiketin KAYNAĞI (entity.getDisplayName). Kaynağı
 *     bozmak en sağlamı — state'e nasıl yazılırsa yazılsın rozet içeride.
 *  2) method_62425 TAIL: render state dolduktan sonra emniyet (kendi F5
 *     etiketi vanilla null bırakabilir; biz kurup ofset veriyoruz).
 *
 *  KRİTİK DERS (v1.10.6 ve öncesi): handler parametresi `Object` yazılmıştı;
 *  method_62425'in erasure imzası (class_1297, float) olduğundan tip
 *  uyuşmadı → injection SESSİZCE atlandı (require=0) → TAB'da rozet var,
 *  nametag'te yok. Parametre tipleri ARTIK birebir.
 *
 *  tag() idempotent (kapsar kontrolü) — çift nokta çift ön ek üretmez.
 */
@Mixin(net.minecraft.class_897.class)
public abstract class PlayerBadgeMixin {
    private static final AtomicBoolean LOGLANMADI = new AtomicBoolean(false);

    private static void kanitla() {
        if (LOGLANMADI.compareAndSet(false, true)) {
            YikimClient.LOGGER.info("YIKIM rozet: nametag mixin canli (method_62426/62425)");
        }
    }

    @Inject(method = "method_62426", at = @At("RETURN"), cancellable = true, require = 0)
    private void yikim$kaynak(class_1297 e, CallbackInfoReturnable<class_2561> cir) {
        try {
            if (!(e instanceof class_742)) {
                return;
            }
            if (YikimBadge.kapsar(cir.getReturnValue())) {
                return; // zaten rozetli — çift ön ek yok
            }
            class_310 mc = class_310.method_1551();
            if (mc.field_1724 == e || YikimBadge.isKnown(e.method_5667())) {
                kanitla();
                cir.setReturnValue(YikimBadge.tag(cir.getReturnValue(), e.method_5667()));
            }
        }
        catch (Throwable ignored) {
            // rozetin crash hakkı yok
        }
    }

    @Inject(method = "method_62425", at = @At("TAIL"), require = 0)
    private void yikim$durum(class_1297 e, float delta, CallbackInfoReturnable<class_10017> cir) {
        try {
            Object stateObj = cir.getReturnValue();
            if (!(stateObj instanceof class_10017)) {
                return;
            }
            class_10017 st = (class_10017) stateObj;
            class_310 mc = class_310.method_1551();
            if (mc.field_1724 == e) {
                // KENDIN — vanilla kendi etiketini kapatmış olabilir; biz açarız
                class_2561 base = st.field_53337 != null ? st.field_53337 : e.method_5797();
                if (base != null && !YikimBadge.kapsar(base)) {
                    kanitla();
                    st.field_53337 = YikimBadge.tag(base, e.method_5667());
                    if (st.field_53338 == null) {
                        st.field_53338 = new class_243(0.0, (double) e.method_5751() + 0.5, 0.0);
                    }
                }
            }
            else if (YikimBadge.isKnown(e.method_5667())) {
                // v1.13.4: bazı sunucular/eklentiler görünen adı boş bırakıyor;
                // eskiden burada `field_53337 != null` şartı yüzünden rozet hiç
                // yazılmıyordu ("isim başında görünmüyor"). Artık ad yoksa
                // varlığın kendi adından kurulur ve rozet yine eklenir.
                if (st.field_53337 == null) {
                    st.field_53337 = e.method_5797();
                    if (st.field_53338 == null) {
                        st.field_53338 = new class_243(0.0, (double) e.method_5751() + 0.5, 0.0);
                    }
                }
                if (st.field_53337 != null && !YikimBadge.kapsar(st.field_53337)) {
                    kanitla();
                    st.field_53337 = YikimBadge.tag(st.field_53337, e.method_5667());
                }
            }
        }
        catch (Throwable ignored) {
            // rozetin crash hakkı yok
        }
    }
}
