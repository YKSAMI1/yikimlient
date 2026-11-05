package com.yikimlient.client;

import net.minecraft.class_1011;
import net.minecraft.class_1043;
import net.minecraft.class_2960;
import net.minecraft.class_310;
import net.minecraft.class_332;

import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.LinkOption;
import java.nio.file.Path;

/**
 * SADE TEMA KARAKTERİ (v1.28.0).
 *
 * Launcher oyun açılmadan aktif hesabın derisini `.yikim/deri.png`'ye kopyalar
 * (ağ yok, internet yokken de doğru). Bu sınıf o PNG'yi dokuya çevirip menüde
 * kağıt bebek olarak çizer: baş, gövde, iki kol, iki bacak — 64×64 deri
 * düzeninin ön yüzleri. Doku yoksa/bozuksa hiçbir şey çizilmez (menü yine
 * çalışır), istisna dışarı sızmaz.
 */
public final class YikimKarakter {
    private static class_2960 doku;
    private static long dosyaZamani = Long.MIN_VALUE;
    private static long sonDeneme;
    private static final long TEKRAR_MS = 5000L;

    private YikimKarakter() {
    }

    private static Path dosya() {
        return YikimBridge.stateDir().resolve("deri.png");
    }

    private static class_2960 doku() {
        try {
            Path yol = YikimKarakter.dosya();
            if (!Files.isRegularFile(yol, new LinkOption[0])) {
                return null;
            }
            long zaman = Files.getLastModifiedTime(yol, new LinkOption[0]).toMillis();
            if (YikimKarakter.doku != null && zaman == YikimKarakter.dosyaZamani) {
                return YikimKarakter.doku;
            }
            long simdi = System.currentTimeMillis();
            if (simdi - YikimKarakter.sonDeneme < YikimKarakter.TEKRAR_MS && YikimKarakter.doku != null) {
                return YikimKarakter.doku;
            }
            YikimKarakter.sonDeneme = simdi;
            try (InputStream in = Files.newInputStream(yol)) {
                class_1011 gorsel = class_1011.method_4309(in);
                class_1043 dokuNesnesi = new class_1043(() -> "yikim-karakter", gorsel);
                class_2960 kimlik = class_2960.method_43902("yikimlient", "oyuncu/karakter");
                class_310.method_1551().method_1531().method_4616(kimlik, dokuNesnesi);
                dokuNesnesi.method_4524();
                YikimKarakter.doku = kimlik;
                YikimKarakter.dosyaZamani = zaman;
                return kimlik;
            }
        }
        catch (Throwable ignored) {
            return YikimKarakter.doku;
        }
    }

    /**
     * Karakteri çiz: `cx` yatay merkez, `tepe` başın üstü, `boy` toplam boy (px).
     * Toplam 32 birim (8 baş + 12 gövde + 12 bacak) kabul edilir.
     */
    public static void draw(class_332 graphics, int cx, int tepe, int boy, int arkaRenk) {
        class_2960 kimlik = YikimKarakter.doku();
        int birim = Math.max(2, boy / 32);
        int govdeX = cx - 4 * birim;
        // zemin gölgesi + hafif vurgu halkası (doku olmasa da kompozisyon dursun)
        YikimDraw.roundedFill(graphics, cx - 9 * birim, tepe + boy, cx + 9 * birim, tepe + boy + 3 * birim / 2,
            YikimTheme.alpha(arkaRenk, 70));
        if (kimlik == null) {
            return;
        }
        // bacaklar
        YikimKarakter.parca(graphics, kimlik, govdeX, tepe + 20 * birim, 4 * birim, 12 * birim, 4, 20);
        YikimKarakter.parca(graphics, kimlik, govdeX + 4 * birim, tepe + 20 * birim, 4 * birim, 12 * birim, 20, 52);
        // kollar
        YikimKarakter.parca(graphics, kimlik, cx - 8 * birim, tepe + 8 * birim, 4 * birim, 12 * birim, 44, 20);
        YikimKarakter.parca(graphics, kimlik, cx + 4 * birim, tepe + 8 * birim, 4 * birim, 12 * birim, 36, 52);
        // gövde
        YikimKarakter.parca(graphics, kimlik, govdeX, tepe + 8 * birim, 8 * birim, 12 * birim, 20, 20);
        // baş
        YikimKarakter.parca(graphics, kimlik, cx - 4 * birim, tepe, 8 * birim, 8 * birim, 8, 8);
        // baş sağ kenarına ince gölge (düz kağıt bebeğe hacim hissi)
        graphics.method_25294(cx + 3 * birim, tepe, cx + 4 * birim, tepe + 8 * birim, 0x33000000);
        graphics.method_25294(cx - 4 * birim, tepe + 8 * birim, cx - 3 * birim, tepe + 20 * birim, 0x1A000000);
    }

    /** 64×64 deri tuvalinden bir dikdörtgen (piksel koordinatları verilir). */
    private static void parca(class_332 graphics, class_2960 kimlik, int x, int y, int w, int h, int u, int v) {
        float u0 = u / 64.0f;
        float v0 = v / 64.0f;
        graphics.method_70845(kimlik, x, y, w, h, u0, v0, u0 + w / 64.0f, v0 + h / 64.0f);
    }
}
