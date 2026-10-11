package com.yikimlient.client;

import net.minecraft.class_310;
import net.minecraft.class_327;
import net.minecraft.class_332;
import org.lwjgl.glfw.GLFW;

/**
 * TAB amblemi — oyuncu listesi (TAB) açıkken kendi adının SOLUNDA
 * beyaz vektörel YIKIM logosu gösterir.
 *
 * Çalışma: TAB basılıyken overlay çizer. PlayerListHud'un iç verisini
 * REFLECTION ile okumadan, ekran geometrisinden TAB listesinin
 * genel layout'unu hesaplar ve amblemi listenin SOL kenarına,
 * üst satır hizasına yerleştirir.
 *
 * Amblem: 7px beyaz kare + beyaz "Y" — vektörel, doku yok.
 */
public final class YikimTabBadge {
    private static final int LOGO_SIZE = 7;
    private static final int ENTRY_HEIGHT = 9;
    private static final int TOP_MARGIN = 6;
    private static final int BADGE_MARGIN = 4;

    private YikimTabBadge() {
    }

    public static void render(class_332 graphics, class_310 client, YikimConfig config) {
        if (!config.hudEnabled) return;
        if (client.field_1755 != null || client.field_1687 == null || client.field_1724 == null) return;
        try {
            long window = client.method_22683().method_4490();
            if (GLFW.glfwGetKey(window, GLFW.GLFW_KEY_TAB) != GLFW.GLFW_PRESS) return;
        } catch (Throwable ignored) { return; }

        try {
            class_327 font = client.field_1772;
            int screenWidth = client.method_22683().method_4486();

            // TAB listesi vanilla'da ortalanır; genişlik ~ max isim + ikon + ping
            // Kendi ismimizin genişliğini hesaplayıp list genişliğini tahmin ederiz
            String myName = client.field_1724.method_5476().getString();
            int nameWidth = font.method_1727(myName);
            // liste genişliği: isim + 12 (yüz ikonu) + 14 (ping) + 12 (padding)
            int listWidth = nameWidth + 12 + 14 + 12;
            int listLeft = (screenWidth - listWidth) / 2;

            // Amblem: listenin SOL kenarında, ilk satır hizasında
            int badgeX = listLeft - LOGO_SIZE - BADGE_MARGIN;
            int badgeY = TOP_MARGIN + (ENTRY_HEIGHT - LOGO_SIZE) / 2;

            // Eğer liste çok genişse ve amblem ekranın dışına düşerse, listenin içine al
            if (badgeX < 4) {
                badgeX = listLeft + 2;
            }

            // BEYAZ VEKTÖREL YIKIM logosu
            // 1) arka: yarı saylam beyaz
            YikimDraw.roundedFill(graphics, badgeX, badgeY, badgeX + LOGO_SIZE, badgeY + LOGO_SIZE, 0x28FFFFFF);
            // 2) kenar: beyaz ince çizgi
            YikimDraw.outline(graphics, badgeX, badgeY, LOGO_SIZE, LOGO_SIZE, 0x60FFFFFF);
            // 3) "Y" harfi: tam beyaz, gölgesiz (vektörel temizlik)
            YikimAdapter.text(graphics, font, "Y",
                badgeX + (LOGO_SIZE - font.method_1727("Y")) / 2,
                badgeY + (LOGO_SIZE - 8) / 2 + 1,
                0xFFFFFFFF, false);
        } catch (Throwable ignored) {
            // herhangi bir hata oyunu etkilemez
        }
    }
}
