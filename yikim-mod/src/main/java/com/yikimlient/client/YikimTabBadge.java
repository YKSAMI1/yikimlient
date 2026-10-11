package com.yikimlient.client;

import net.minecraft.class_310;
import net.minecraft.class_327;
import net.minecraft.class_332;
import org.lwjgl.glfw.GLFW;

/**
 * TAB amblemi — Lunar/Dawn tarzı: TAB basılıyken YIKIM markası ekranda görünür.
 * Oyuncu listesi (TAB) overlay'inin SOL ÜST köşesine küçük, şık bir "YIKIM"
 * rozeti çizer. Her karede LWJGL ile TAB tuşu kontrol edilir (GLFW_KEY_TAB);
 * mixin yok, oyun koduna dokunulmaz.
 *
 * İleri seviye (sunucu destekli): YIKIMDARA gibi sunucular bir eklentiyle
 * client brand'i okuyup hangi oyuncuların YIKIM kullandığını listeleyebilir;
 * bizim mod o listeyi alıp her oyuncunun adının yanına amblem koyabilir.
 * Şimdilik: kendi markan görünsün (Lunar'ın "L" rozeti gibi).
 */
public final class YikimTabBadge {
    private static final int BADGE_W = 46;
    private static final int BADGE_H = 12;
    private static final int MARGIN = 6;

    private YikimTabBadge() {
    }

    public static void render(class_332 graphics, class_310 client, YikimConfig config) {
        if (!config.hudEnabled) {
            return;
        }
        if (client.field_1755 != null) {
            return; // bir ekran açıksa TAB listesi zaten görünmez
        }
        try {
            long window = client.method_22683().method_4490();
            if (GLFW.glfwGetKey(window, GLFW.GLFW_KEY_TAB) != GLFW.GLFW_PRESS) {
                return;
            }
        }
        catch (Throwable ignored) {
            return;
        }
        class_327 font = client.field_1772;
        int screenWidth = client.method_22683().method_4486();
        int screenHeight = client.method_22683().method_4502();

        // TAB listesi üst kenardan başlar, ortalanmış. Amblem sol üstte dursun —
        // TAB listesinin çizgi hizasında, solunda.
        int x = screenWidth / 2 - 300; // geniş ekranlarda TAB listesinin solunda kalır
        if (x < MARGIN) {
            x = MARGIN;
        }
        int y = MARGIN;

        // rozet çerçevesi: yarı saydam koyu + vurgu kenarlığı
        int bg = 0xB4101014; // rgba(16,16,20, ~72% opak)
        YikimDraw.roundedFill(graphics, x, y, x + BADGE_W, y + BADGE_H, bg);
        YikimDraw.outline(graphics, x, y, BADGE_W, BADGE_H, YikimTheme.alpha(YikimTheme.accent, 110));
        // vurgu nokta: turuncu "Y"
        int dotSize = 8;
        YikimDraw.roundedFill(graphics, x + 3, y + (BADGE_H - dotSize) / 2, x + 3 + dotSize, y + (BADGE_H - dotSize) / 2 + dotSize, YikimTheme.accent);
        YikimAdapter.text(graphics, font, "Y", x + 3 + (dotSize - font.method_1727("Y")) / 2, y + (BADGE_H - 8) / 2 + 1, -15724524, true);
        // "YIKIM" yazısı
        YikimAdapter.text(graphics, font, "YIKIM", x + 3 + dotSize + 5, y + (BADGE_H - 8) / 2 + 1, YikimTheme.alpha(YikimTheme.accent, 240), true);
    }
}
