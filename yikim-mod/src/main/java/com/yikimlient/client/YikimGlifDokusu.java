package com.yikimlient.client;

import com.mojang.blaze3d.systems.GpuDevice;
import com.mojang.blaze3d.textures.GpuTexture;
import com.mojang.blaze3d.systems.RenderSystem;
import com.mojang.blaze3d.textures.TextureFormat;

/**
 * SLOTA ÖZEL FOTOĞRAF DOKUSU (v1.12.1) — font atlasına hiç dokunmayan,
 * tamamen bizim kontrolümüzdeki 16×16 RGBA doku.
 *
 * Vanilla class_380 (glif atlas sayfası) da bir class_1044 (AbstractTexture)
 * alt sınıfıdır; biz de aynısını yaparız: GpuTexture + GpuTextureView'i
 * kendimiz yaratırız. BakedGlyph bu dokunun view'ını örnekler → atlas
 * paketleme konumu (meşhur "roll 6" gizemi) tamamen devre dışı kalır.
 */
public final class YikimGlifDokusu extends net.minecraft.class_1044 {
    public YikimGlifDokusu(int boy, int slot) {
        GpuDevice aygit = RenderSystem.getDevice();
        this.field_56974 = aygit.createTexture(
            "yikimlient-rozet-s" + slot,
            GpuTexture.USAGE_TEXTURE_BINDING | GpuTexture.USAGE_COPY_DST,
            TextureFormat.RGBA8,
            boy, boy, 1, 1);
        this.field_60597 = aygit.createTextureView(this.field_56974);
    }
}
