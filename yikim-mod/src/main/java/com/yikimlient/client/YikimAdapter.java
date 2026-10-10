/*
 * YIKIMLient oyun bağdaştırıcısı — 1.21.9+ giriş sistemi (KeyInput/MouseInput kayıtları).
 * Sürümler arası farklar yalnızca bu dosyada toplanır; panel/menü mantığı sürüm bilmez.
 */
package com.yikimlient.client;

import com.yikimlient.client.YikimMainMenu;
import com.yikimlient.client.YikimPanel;
import net.minecraft.class_1041;
import net.minecraft.class_2561;
import net.minecraft.class_2960;
import net.minecraft.class_304;
import net.minecraft.class_315;
import net.minecraft.class_327;
import net.minecraft.class_332;
import net.minecraft.class_3675;
import net.minecraft.class_4063;
import net.minecraft.class_4066;
import net.minecraft.class_429;
import net.minecraft.class_437;
import net.minecraft.class_442;
import net.minecraft.class_500;
import net.minecraft.class_526;
import net.minecraft.class_5365;
import net.minecraft.class_638;
import net.minecraft.class_11905;
import net.minecraft.class_11908;
import net.minecraft.class_11909;

public final class YikimAdapter {
    /** Tuş kategorisi — 1.21.9+ kayıt tipi (eski String kategori değil). */
    private static final class_304.class_11900 KEY_CATEGORY = class_304.class_11900.method_74698(class_2960.method_43902("yikimlient", "yikimlient"));

    private YikimAdapter() {
    }

    public static void push(class_332 graphics, float x, float y, float scale) {
        // 1.21.6+: matris yığını doğrudan JOML Matrix3x2fStack (pushMatrix/popMatrix, 2B translate/scale)
        graphics.method_51448().pushMatrix();
        graphics.method_51448().translate(x, y);
        graphics.method_51448().scale(scale, scale);
    }

    public static void pop(class_332 graphics) {
        graphics.method_51448().popMatrix();
    }

    public static void text(class_332 graphics, class_327 font, String value, int x, int y, int color, boolean shadow) {
        graphics.method_51433(font, value, x, y, color, shadow);
    }

    public static void textCentered(class_332 graphics, class_327 font, String value, int centerX, int y, int color, boolean shadow) {
        graphics.method_51433(font, value, centerX - font.method_1727(value) / 2, y, color, shadow);
    }

    public static int optionCount(String key) {
        return switch (key) {
            case "particles" -> class_4066.values().length;
            case "graphics" -> class_5365.values().length;
            default -> class_4063.values().length;
        };
    }

    public static int optionValue(class_315 options, String key) {
        return switch (key) {
            case "particles" -> ((class_4066)options.method_42475().method_41753()).ordinal();
            case "graphics" -> ((class_5365)options.method_75329().method_41753()).ordinal();
            default -> ((class_4063)options.method_42528().method_41753()).ordinal();
        };
    }

    public static boolean setOption(class_315 options, String key, int index) {
        switch (key) {
            case "particles": {
                class_4066[] values = class_4066.values();
                if (index < 0 || index >= values.length) {
                    return false;
                }
                options.method_42475().method_41748(values[index]);
                return true;
            }
            case "graphics": {
                class_5365[] values = class_5365.values();
                if (index < 0 || index >= values.length) {
                    return false;
                }
                options.method_75329().method_41748(values[index]);
                return true;
            }
        }
        class_4063[] values = class_4063.values();
        if (index < 0 || index >= values.length) {
            return false;
        }
        options.method_42528().method_41748(values[index]);
        return true;
    }

    public static String optionLabel(String key, int index) {
        if (key.equals("particles")) {
            return switch (index) {
                case 1 -> "Azalt\u0131lm\u0131\u015f";
                case 2 -> "Minimum";
                default -> "T\u00fcm\u00fc";
            };
        }
        if (key.equals("graphics")) {
            return switch (index) {
                case 0 -> "H\u0131zl\u0131";
                case 2 -> "Muhte\u015fem";
                case 3 -> "Basit";
                default -> "\u015e\u0131k";
            };
        }
        return switch (index) {
            case 1 -> "H\u0131zl\u0131";
            case 2 -> "\u015e\u0131k";
            default -> "Kapal\u0131";
        };
    }

    public static long windowHandle(class_1041 window) {
        return window == null ? 0L : window.method_4490();
    }

    public static boolean isIconified(class_1041 window) {
        return false;
    }

    public static String dimensionPath(class_638 level) {
        try {
            return level.method_27983().method_29177().method_12832();
        }
        catch (Throwable ignored) {
            return "bilinmiyor";
        }
    }

    public static class_304 key(String name, int code) {
        return new class_304(name, class_3675.class_307.field_1668, code, KEY_CATEGORY);
    }

    public static class_437 panelScreen() {
        return new ScreenBase((class_2561)class_2561.method_43470((String)"YIKIM"));
    }

    public static class_437 titleScreen() {
        return new TitleScreenBase((class_2561)class_2561.method_43470((String)"YIKIMLient"));
    }

    public static class_437 vanillaTitleScreen() {
        return new class_442();
    }

    public static class_437 worldSelectScreen(class_437 parent) {
        return new class_526(parent);
    }

    public static class_437 multiplayerScreen(class_437 parent) {
        return new class_500(parent);
    }

    public static class_437 optionsScreen(class_437 parent, class_315 options) {
        return new class_429(parent, options);
    }

    private static double mouseX(class_11909 mouse) {
        return mouse.comp_4798();
    }

    private static double mouseY(class_11909 mouse) {
        return mouse.comp_4799();
    }

    private static int mouseButton(class_11909 mouse) {
        return mouse.comp_4800().comp_4801();
    }

    public static class ScreenBase
    extends class_437 {
        protected final YikimPanel panel = new YikimPanel(this);

        protected ScreenBase(class_2561 title) {
            super(title);
        }

        protected void method_25426() {
            this.panel.onResize(this.field_22789, this.field_22790);
        }

        public void method_25394(class_332 graphics, int mouseX, int mouseY, float partialTick) {
            this.panel.draw(graphics, this.field_22793, mouseX, mouseY, this.field_22789, this.field_22790);
        }

        public void method_25393() {
            this.panel.tick();
        }

        public boolean method_25402(class_11909 mouse, boolean doubleClick) {
            if (this.panel.click(YikimAdapter.mouseX(mouse), YikimAdapter.mouseY(mouse), YikimAdapter.mouseButton(mouse))) {
                return true;
            }
            return super.method_25402(mouse, doubleClick);
        }

        public boolean method_25406(class_11909 mouse) {
            this.panel.release(YikimAdapter.mouseX(mouse), YikimAdapter.mouseY(mouse), YikimAdapter.mouseButton(mouse));
            return super.method_25406(mouse);
        }

        public boolean method_25403(class_11909 mouse, double dragX, double dragY) {
            this.panel.drag(YikimAdapter.mouseX(mouse), YikimAdapter.mouseY(mouse));
            return super.method_25403(mouse, dragX, dragY);
        }

        public boolean method_25401(double mouseX, double mouseY, double scrollX, double scrollY) {
            if (this.panel.scroll(mouseX, mouseY, scrollY)) {
                return true;
            }
            return super.method_25401(mouseX, mouseY, scrollX, scrollY);
        }

        public boolean method_25404(class_11908 key) {
            if (key.comp_4795() == 344) {
                if (this.panel.editorActive()) {
                    this.panel.exitEditor();
                    return true;
                }
                YikimPanel.close();
                return true;
            }
            if (this.panel.key(key.comp_4795())) {
                return true;
            }
            return super.method_25404(key);
        }

        public void method_25419() {
            YikimPanel.close();
        }

        public boolean method_25400(class_11905 input) {
            if (this.panel.typed((char)input.comp_4793())) {
                return true;
            }
            return super.method_25400(input);
        }

        public boolean method_25421() {
            return false;
        }
    }

    public static class TitleScreenBase
    extends class_437 {
        protected final YikimMainMenu menu = new YikimMainMenu(this);

        protected TitleScreenBase(class_2561 title) {
            super(title);
        }

        protected void method_25426() {
            this.menu.onResize(this.field_22789, this.field_22790);
        }

        public void method_25394(class_332 graphics, int mouseX, int mouseY, float partialTick) {
            this.menu.draw(graphics, this.field_22793, mouseX, mouseY, this.field_22789, this.field_22790);
        }

        public void method_25393() {
            this.menu.tick();
        }

        public boolean method_25402(class_11909 mouse, boolean doubleClick) {
            return this.menu.click(YikimAdapter.mouseX(mouse), YikimAdapter.mouseY(mouse), YikimAdapter.mouseButton(mouse));
        }

        public boolean method_25404(class_11908 key) {
            if (this.menu.key(key.comp_4795())) {
                return true;
            }
            return super.method_25404(key);
        }

        public void method_25419() {
            this.menu.onClose();
        }

        public boolean method_25421() {
            return false;
        }
    }
}
