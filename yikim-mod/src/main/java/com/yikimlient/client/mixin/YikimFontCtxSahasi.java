package com.yikimlient.client.mixin;

import net.minecraft.class_2960;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.gen.Accessor;

/**
 * FontStorage'ın bake context'indeki (class_11642) font kimliğine erişim —
 * hangi badge_s<k> stokuna olduğumuzu anlamak için (v1.12.1).
 */
@Mixin(net.minecraft.class_11642.class)
public interface YikimFontCtxSahasi {

    @Accessor("field_61622")
    class_2960 yikim$fontId();
}
