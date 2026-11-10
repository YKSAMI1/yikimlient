package com.yikimlient.client;

import com.mojang.blaze3d.textures.GpuTextureView;
import net.minecraft.class_2583;
import net.minecraft.class_379;
import net.minecraft.class_382;
import net.minecraft.class_8538;
import net.minecraft.class_11767;

/**
 * BEYAZ GLİF — 1.21.11 (daralmış dönüş tipi: class_11767$class_12238).
 *
 * v1.12.3 RENK/TONLAMA DÜZELTMESİ: bazı sunucular isimlere takım önekleri +
 * renk kodları ekler — glif quad'ı o rengin tonuyla çarpılıyordu; sonuç
 * "aynı çizim ama renkler farklı" ve koyu isimlerde rozet görünmezdi.
 * Bu alt sınıf rengi VE ışığı zorla beyaz/açık tutar: hangi sunucuda
 * olursa olsun çizim birebir doygun ve görünür çıkar.
 *
 * NEDEN AYRI DOSYA: `method_73399`'un dönüş tipi Minecraft 1.21.11'de
 * `class_11767$class_12238` olarak DARALDI. 1.21.10 ve öncesinde bu iç tip
 * yok (dönüş `class_11767`). Tek kaynaklı modu her sürüme derleyebilmek için
 * bu sınıf sürüm klasörüne taşındı; `src/version/<mc-surumu>/` altından derlenir.
 */
final class BeyazGlif extends class_382 {

    BeyazGlif(class_379 olculer, class_8538 tipler, GpuTextureView doku,
              float u1, float u2, float v1, float v2,
              float sol, float sag, float ust, float alt) {
        super(olculer, tipler, doku, u1, u2, v1, v2, sol, sag, ust, alt);
    }

    @Override
    public net.minecraft.class_11767.class_12238 method_73399(float x, float y, int renk, int golgeRenk,
                                                              class_2583 stil, float f1, float f2) {
        // v1.13.0 ÇİFT GÖRÜNTÜ DÜZELTMESİ: eski kod gölge rengini de beyaza
        // zorluyordu → gölge, 1px kaymış BEYAZ bir kopya olarak çiziliyor ve
        // rozet "üst üste binmiş / iki tane" görünüyordu. Gölge şeffaf:
        // tek, keskin rozet; hangi takım renginde olursa olsun beyaz kalır.
        return super.method_73399(x, y, 0xFFFFFFFF, 0x00000000, stil, f1, f2);
    }
}
