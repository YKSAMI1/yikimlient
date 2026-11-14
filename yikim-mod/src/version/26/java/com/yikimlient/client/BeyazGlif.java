package com.yikimlient.client;

import com.mojang.blaze3d.font.GlyphInfo;
import com.mojang.blaze3d.textures.GpuTextureView;
import net.minecraft.client.gui.font.GlyphRenderTypes;
import net.minecraft.client.gui.font.TextRenderable;
import net.minecraft.client.gui.font.glyphs.BakedSheetGlyph;
import net.minecraft.network.chat.Style;

/**
 * BEYAZ GLİF — 26.x (Vulkan nesli).
 *
 * 1.21.11 sürümünden farkı: 26.1'de {@code BakedGlyph} bir ARAYÜZ oldu ve
 * glif üretimi {@code createGlyph(float, float, int, int, Style, float, float)}
 * → {@code TextRenderable.Styled} biçimine taşındı. {@code BakedSheetGlyph}
 * hâlâ somut sınıf olduğu için ondan türeyip yalnız renk/gölge zorlamasını
 * değiştiriyoruz; fabrika kodu (YikimGlifFabrika) birebir aynı kalır.
 *
 * NEDEN: bazı sunucular isimlere renk kodu ekliyor; rozet o rengin tonuyla
 * çarpılıyor ve koyu isimlerde görünmez oluyordu. Bu alt sınıf rengi beyaza,
 * gölgeyi tam saydamlığa zorlar → her takım renginde tek, keskin rozet.
 */
final class BeyazGlif extends BakedSheetGlyph {

    BeyazGlif(GlyphInfo olculer, GlyphRenderTypes tipler, GpuTextureView doku,
              float u1, float u2, float v1, float v2,
              float sol, float sag, float ust, float alt) {
        super(olculer, tipler, doku, u1, u2, v1, v2, sol, sag, ust, alt);
    }

    @Override
    public TextRenderable.Styled createGlyph(float x, float y, int renk, int golgeRenk,
                                             Style stil, float f1, float f2) {
        // Gölge tam saydam: 1px kaymış BEYAZ kopya "üst üste binmiş" görünüyordu.
        return super.createGlyph(x, y, 0xFFFFFFFF, 0x00000000, stil, f1, f2);
    }
}
