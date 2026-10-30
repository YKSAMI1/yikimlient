package com.yikimlient.client.mixin;

import com.yikimlient.client.YikimKozmetik;
import java.util.UUID;
import net.minecraft.class_640;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable;

/**
 * KOZMETİK DOKULARI (1. nokta) — oyuncu listesi girişi.
 *
 * 1.21.9+ sürümlerinde oyuncunun pelerin/elitra dokusu
 * `PlayerListEntry.getSkinTextures()` (method_52810) üzerinden gelir.
 * Burada dönen SkinTextures'ın pelerin ve elitra dokuları, oyuncunun
 * kendi kozmetiği varsa bizim Identifier'ımızla değiştirilir → vanilla
 * pelerin/elitra geometrisi korunur, sadece doku değişir.
 *
 * Kare başına yeni nesne/reflection yok: sonuç YikimKozmetik içinde
 * (oyuncu + doku) anahtarıyla önbelleğe alınır.
 */
@Mixin(net.minecraft.class_640.class)
public abstract class KozmetikMixin {
    @Inject(method = "method_52810", at = @At("RETURN"), cancellable = true, require = 0)
    private void yikim$kozmetik(CallbackInfoReturnable<Object> cir) {
        try {
            Object mevcut = cir.getReturnValue();
            if (mevcut == null) {
                return;
            }
            class_640 giris = (class_640) (Object) this;
            // 1.21.11'de GameProfile bir record: kimlik `id()` ile okunur.
            UUID id = giris.method_2966().id();
            Object yeni = YikimKozmetik.onbellekli(mevcut, id);
            if (yeni != null) {
                cir.setReturnValue(yeni);
            }
        }
        catch (Throwable ignored) {
            // kozmetiğin oyunu düşürme hakkı yok
        }
    }
}
