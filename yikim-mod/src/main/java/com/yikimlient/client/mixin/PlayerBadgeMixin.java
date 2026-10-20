package com.yikimlient.client.mixin;

import com.yikimlient.client.YikimBadge;
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

/**
 * İsim rozeti (v1.10.0) — EntityRenderer.method_62425 (updateRenderState) TAIL'i.
 *
 * Vanilla isim etiketini state.field_53337'e yazar; biz TAIL'de:
 *  - KENDI OYUNCU: etiketi rozetli yapar; vanilla kendi ismini kapattığı için
 *    etiket ofseti (field_53338) de bizim tarafımızdan kurulmalı (first person'da
 *    model hiç çizilmez → zararsız; F5'te rozet üstümüzde görünür).
 *  - ROSTER'daki YIKIM oyuncuları: mevcut etikete rozet ön eki.
 * Hertükkende try/catch — asla crash yok. Refmap YOK: hedef zaten intermediary.
 */
@Mixin(net.minecraft.class_897.class)
public abstract class PlayerBadgeMixin {
    @Inject(method = "method_62425", at = @At("TAIL"), require = 0)
    private void yikim$badge(Object entity, float delta, CallbackInfoReturnable<class_10017> cir) {
        try {
            Object stateObj = cir.getReturnValue();
            if (!(entity instanceof class_1297) || !(stateObj instanceof class_10017)) {
                return;
            }
            class_1297 e = (class_1297) entity;
            if (!(e instanceof class_742)) {
                return;
            }
            class_10017 st = (class_10017) stateObj;
            class_310 mc = class_310.method_1551();
            if (mc.field_1724 == e) {
                // KENDIN — vanilla etiketi kapatmış olabilir; biz aç.
                class_2561 base = st.field_53337 != null ? st.field_53337 : e.method_5797();
                if (base != null) {
                    st.field_53337 = YikimBadge.tag(base);
                    if (st.field_53338 == null) {
                        st.field_53338 = new class_243(0.0, (double) e.method_5751() + 0.5, 0.0);
                    }
                }
            }
            else if (st.field_53337 != null && YikimBadge.isKnown(e.method_5667())) {
                st.field_53337 = YikimBadge.tag(st.field_53337);
            }
        }
        catch (Throwable ignored) {
            // rozetin crash hakkı yok
        }
    }
}
