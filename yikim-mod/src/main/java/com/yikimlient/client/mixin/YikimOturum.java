package com.yikimlient.client.mixin;

import net.minecraft.class_310;
import net.minecraft.class_320;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.Mutable;
import org.spongepowered.asm.mixin.gen.Accessor;

/**
 * MinecraftClient.session alanına yazma erişimi (v1.27.0 — oyun içi hesap
 * değiştirme). Alan `private final` olduğu için `@Mutable` şart; okuma tarafı
 * yine `mc.method_1548()` üzerinden yapılır, böylece oyunun geri kalanı
 * değişikliği fark etmez zannetmez — aynı alanı okur.
 */
@Mixin(class_310.class)
public interface YikimOturum {

    @Mutable
    @Accessor("field_1726")
    void yikimOturum(class_320 oturum);
}
