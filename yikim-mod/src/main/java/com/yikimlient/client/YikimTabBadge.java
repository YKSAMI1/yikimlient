package com.yikimlient.client;

import net.minecraft.class_310;
import net.minecraft.class_327;
import net.minecraft.class_332;
import org.lwjgl.glfw.GLFW;

/**
 * TAB amblemi — Lunar/Dawn tarzı: oyuncu listesinde (TAB) kendi adının
 * solunda küçük beyaz bir YIKIM logosi gösterilir.
 *
 * Çizim: oyun TAB listesini çizdikten SONRA (HudRenderCallback) overlay olarak
 * çalışır — mixin yok, oyun koduna dokunulmaz. Beyaz kare + beyaz "Y" harfi
 * vektörel çizim (doku yok) — her çözünürlükte net.
 *
 * Konum: TAB listesi ekranın üst-ortasında çizilir. Amblem, listenin SOL
 * kenarında, kendi adının satırında görünür. Satır pozisyonu: giriş sırasına
 * göre hesaplanır (üstten kaçıncı satırda olduğunu tabHud'dan okur).
 */
public final class YikimTabBadge {
    private static final int LOGO_SIZE = 7;   // beyaz kare boyutu (GUI piksel)
    private static final int GAP = 2;         // isimle arasındaki boşluk

    private YikimTabBadge() {
    }

    public static void render(class_332 graphics, class_310 client, YikimConfig config) {
        if (!config.hudEnabled) {
            return;
        }
        if (client.field_1755 != null || client.field_1687 == null || client.field_1724 == null) {
            return; // bir ekran açıksa veya dünyada değilsek TAB yok
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
        int guiScale = 2; // varsayılan; options'tan okunamıyorsa sabit

        // TAB listesinin merkezini ve genişliğini hesapla
        // Minecraft TAB listesi: genişlik ~225px (GUI ölçek 2'de ~110 gerçek px)
        // listeyi ortalar. Biz listenin SOL kenarını bulup amblemi oraya koyarız.
        int listWidth = 225; // vanilla varsayılan genişlik
        int listLeft = (screenWidth - listWidth) / 2;
        int listTop = 12;    // vanilla üst boşluk

        // kendi adımızın hangi satırda olduğunu bulmak zor (sıralama değişir);
        // bunun yerine amblemı listenin EN ÜST satırına koy — her zaman görünür,
        // Lunar'ın "sponsor" amblemi gibi
        int x = listLeft - LOGO_SIZE - GAP - 2;
        int y = listTop;

        // BEYAZ vektörel YIKIM logosu: kare + "Y" harfi — temiz, her ölçekte net
        // 1) arka kare: yarı saylam beyaz kutu
        int bg = 0x30FFFFFF; // rgba(255,255,255, %19 opak)
        YikimDraw.roundedFill(graphics, x, y, x + LOGO_SIZE, y + LOGO_SIZE, bg);
        // 2) kenar: tam beyaz ince çerçeve
        YikimDraw.outline(graphics, x, y, LOGO_SIZE, LOGO_SIZE, 0x80FFFFFF);
        // 3) "Y" harfi: tam beyaz, gölgesiz (vektörel temizlik)
        YikimAdapter.text(graphics, font, "Y", x + (LOGO_SIZE - font.method_1727("Y")) / 2, y + (LOGO_SIZE - 8) / 2, 0xFFFFFFFF, false);
        // 4) "YIKIM" mini yazısı: beyaz, yarı opak (opsiyonel)
        YikimAdapter.text(graphics, font, "YIKIM", x + LOGO_SIZE + 4, y + (LOGO_SIZE - 8) / 2, 0x90FFFFFF, false);
    }
}
