package com.yikimlient.client;

import com.mojang.blaze3d.systems.RenderSystem;
import it.unimi.dsi.fastutil.ints.IntOpenHashSet;
import it.unimi.dsi.fastutil.ints.IntSet;
import net.minecraft.class_1011;
import net.minecraft.class_11759;
import net.minecraft.class_11768;
import net.minecraft.class_2960;
import net.minecraft.class_310;
import net.minecraft.class_379;
import net.minecraft.class_382;
import net.minecraft.class_390;
import net.minecraft.class_8538;

/**
 * ÖZEL GLİF FABRİKASI (v1.12.1) — sheet-pack matematiğini TAMAMEN kaldırır.
 *
 * v1.11/v1.12.0'da glif, font atlas sayfasına elle yazılıyordu; sprite hücresinin
 * gerçek konumu ölçülemeyince (roll 6) 16×16 çizim %8 döşemede yarım çıkıyordu
 * ("iki Y" hatası). Artık her slot KENDİ 16×16 dokusuna sahiptir; fonta ÖNE
 * eklenen özel GlyphProvider, \uE000 glifi için HAZIR BakedGlyph döndürür:
 * UV'ler (0..1) doğrudan bizim dokumuzu örnekler — atlasa hiçbir şey yazılmaz.
 *
 * Quad geometrisi: baseline etrafında ±8 simetrik (16px "fotoğraf") — işaret
 * kuralından bağımsız doğru konum verir.
 */
public final class YikimGlifFabrika {
    public static final int GLIF_KODU = 0xE000;
    public static final int BOY = 16;
    private static final float ADVANS = 17.0f;
    private static final float QUAD_SOL = 0.0f;
    private static final float QUAD_SAG = 16.0f;
    private static final float QUAD_UST = -8.0f;
    private static final float QUAD_ALT = 8.0f;

    private static final IcSaglayici[] SAGLAYICILAR = new IcSaglayici[YikimSlotlar.SLOT_SONU + 1];
    private static final YikimGlifDokusu[] DOKULAR = new YikimGlifDokusu[YikimSlotlar.SLOT_SONU + 1];
    private static final class_382[] PISINMIS = new class_382[YikimSlotlar.SLOT_SONU + 1];
    private static final int[] DOKU_OZETI = new int[YikimSlotlar.SLOT_SONU + 1];
    private static boolean loglandi;

    private YikimGlifFabrika() {
    }

    /// FontStorage mixin'i çağırır: slotun fontuna ÖNE eklenecek provider.
    public static synchronized class_390 saglayici(int slot) {
        if (slot < 1 || slot > YikimSlotlar.SLOT_SONU) {
            return null;
        }
        if (SAGLAYICILAR[slot] == null) {
            SAGLAYICILAR[slot] = new IcSaglayici(slot);
        }
        return SAGLAYICILAR[slot];
    }

    /// RENDER THREAD'de: slot dokusunun 16×16 piksellerini bas (ARGB girdi).
    public static synchronized void guncelle(int slot, int[] pikseller) {
        try {
            if (slot < 1 || slot > YikimSlotlar.SLOT_SONU
                || pikseller == null || pikseller.length < YikimAtolye.UZUNLUK) {
                return;
            }
            YikimGlifDokusu doku = dokuyuHazirla(slot);
            if (doku == null || doku.method_68004() == null) {
                return;
            }
            int ozet = java.util.Arrays.hashCode(pikseller);
            if (DOKU_OZETI[slot] == ozet) {
                return; // içerik aynı — GPU'ya gereksiz yükleme yok (heartbeat ~0 maliyet)
            }
            class_1011 kanvas = new class_1011(BOY, BOY, true);
            for (int y = 0; y < BOY; y++) {
                int satir = y * BOY;
                for (int x = 0; x < BOY; x++) {
                    kanvas.method_4305(x, y, abgr(pikseller[satir + x]));
                }
            }
            RenderSystem.getDevice().createCommandEncoder().writeToTexture(doku.method_68004(), kanvas);
            kanvas.close();
            DOKU_OZETI[slot] = ozet;
            if (!loglandi) {
                loglandi = true;
                YikimClient.LOGGER.info("YIKIM foto-glif aktif: slot {} -> kendi 16x16 dokusu (atlas yazimi yok)", slot);
            }
        }
        catch (Throwable problem) {
            YikimClient.LOGGER.warn("YIKIM foto-glif guncellenemedi: {}", problem.toString());
        }
    }

    private static YikimGlifDokusu dokuyuHazirla(int slot) {
        YikimGlifDokusu doku = DOKULAR[slot];
        if (doku != null) {
            return doku;
        }
        class_310 mc = class_310.method_1551();
        if (mc == null) {
            return null;
        }
        doku = new YikimGlifDokusu(BOY, slot);
        mc.method_1531().method_4616(glifId(slot), doku);
        DOKULAR[slot] = doku;
        return doku;
    }

    /// İlk render sırasında (render thread) çağrılır — asla null döndürmemeye çalış.
    private static class_382 pisir(int slot) {
        class_382 glif = PISINMIS[slot];
        if (glif == null) {
            YikimGlifDokusu doku = dokuyuHazirla(slot);
            if (doku == null) {
                return null;
            }
            glif = new class_382(
                class_379.method_73329(ADVANS),
                class_8538.method_51643(glifId(slot)),
                doku.method_71659(),
                0.001f, 0.999f, 0.001f, 0.999f,
                QUAD_SOL, QUAD_SAG, QUAD_UST, QUAD_ALT);
            PISINMIS[slot] = glif;
        }
        return glif;
    }

    private static class_2960 glifId(int slot) {
        return class_2960.method_60655("yikimlient", "rozet_g" + slot);
    }

    private static int abgr(int argb) {
        int a = (argb >>> 24) & 0xFF;
        int k = (argb >>> 16) & 0xFF;
        int y = (argb >>> 8) & 0xFF;
        int m = argb & 0xFF;
        return (a << 24) | (m << 16) | (y << 8) | k;
    }

    // ---------------------------------------------------------------- iç tipler

    private static final class IcSaglayici implements class_390 {
        private final int slot;
        private final IntSet kodlar;

        IcSaglayici(int slot) {
            this.slot = slot;
            this.kodlar = new IntOpenHashSet();
            this.kodlar.add(GLIF_KODU);
        }

        @Override
        public class_11759 method_2040(int kod) {
            return kod == GLIF_KODU ? new GlifBilgi(slot) : null;
        }

        @Override
        public IntSet method_27442() {
            return kodlar;
        }
    }

    private static final class GlifBilgi implements class_11759 {
        private final int slot;

        GlifBilgi(int slot) {
            this.slot = slot;
        }

        @Override
        public class_379 method_73331() {
            return class_379.method_73329(ADVANS);
        }

        @Override
        public class_11768 method_73332(class_11759.class_11760 bake) {
            // bake context (atlas) yok sayılır — kendi dokumuzda hazır glif
            return pisir(slot);
        }
    }
}
