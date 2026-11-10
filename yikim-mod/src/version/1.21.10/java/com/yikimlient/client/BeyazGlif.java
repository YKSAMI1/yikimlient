package com.yikimlient.client;

import com.mojang.blaze3d.textures.GpuTextureView;
import net.minecraft.class_2583;
import net.minecraft.class_379;
import net.minecraft.class_382;
import net.minecraft.class_8538;

/**
 * BEYAZ GLİF — 1.21.10 ve öncesi (daralmamış dönüş tipi: class_11767).
 *
 * 1.21.11'de `method_73399` dönüşü `class_11767$class_12238` olarak daraldı;
 * bu sürümlerde hâlâ `class_11767`. Aynı sınıfın iki küçük farkı var —
 * derleme sürüm klasöründen beslenir (bkz. src/version/1.21.11/BeyazGlif.java).
 */
final class BeyazGlif extends class_382 {

    BeyazGlif(class_379 olculer, class_8538 tipler, GpuTextureView doku,
              float u1, float u2, float v1, float v2,
              float sol, float sag, float ust, float alt) {
        super(olculer, tipler, doku, u1, u2, v1, v2, sol, sag, ust, alt);
    }

    @Override
    public net.minecraft.class_11767 method_73399(float x, float y, int renk, int golgeRenk,
                                                  class_2583 stil, float f1, float f2) {
        // Gölge şeffaf + zorla beyaz: rozet hangi takım renginde olursa olsun
        // birebir aynı ve keskin çıkıyor (üst üste iki rozet sorunu bitti).
        return super.method_73399(x, y, 0xFFFFFFFF, 0x00000000, stil, f1, f2);
    }
}
