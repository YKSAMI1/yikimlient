package com.yikimlient.client;

import com.mojang.blaze3d.platform.InputConstants;
import com.mojang.blaze3d.platform.Window;
import net.minecraft.client.CloudStatus;
import net.minecraft.client.GraphicsPreset;
import net.minecraft.client.KeyMapping;
import net.minecraft.client.Options;
import net.minecraft.client.gui.Font;
import net.minecraft.client.gui.GuiGraphics;
import net.minecraft.client.gui.screens.Screen;
import net.minecraft.client.gui.screens.TitleScreen;
import net.minecraft.client.gui.screens.multiplayer.JoinMultiplayerScreen;
import net.minecraft.client.gui.screens.options.OptionsScreen;
import net.minecraft.client.gui.screens.worldselection.SelectWorldScreen;
import net.minecraft.client.input.CharacterEvent;
import net.minecraft.client.input.KeyEvent;
import net.minecraft.client.input.MouseButtonEvent;
import net.minecraft.client.multiplayer.ClientLevel;
import net.minecraft.network.chat.Component;
import net.minecraft.server.level.ParticleStatus;

/**
 * Minecraft 1.21.11 (modern nesil) sürüm farkları.
 *
 * Modun tamamı yalnızca bu sınıfın açtığı kapıyı kullanır; oyun API'si değiştiğinde
 * değişen tek dosya budur. Bu nesilde:
 *   • DrawContext joml Matrix3x2fStack kullanıyor (pushMatrix/popMatrix),
 *   • kalite ayarı `graphicsPreset` oldu (eski `graphicsMode` yerine),
 *   • pencere girdisi KeyEvent / MouseButtonEvent / CharacterEvent kayıtlarına geçti,
 *   • `ResourceKey.identifier()` adını aldı (eski adı `location()`).
 */
public final class YikimAdapter {

    private YikimAdapter() {
    }

    // ---------------------------------------------------------------- dönüşüm
    public static void push(GuiGraphics graphics, float x, float y, float scale) {
        graphics.pose().pushMatrix();
        graphics.pose().translate(x, y);
        graphics.pose().scale(scale, scale);
    }

    public static void pop(GuiGraphics graphics) {
        graphics.pose().popMatrix();
    }

    // ------------------------------------------------------------------- yazı
    public static void text(GuiGraphics graphics, Font font, String value, int x, int y, int color,
                            boolean shadow) {
        graphics.drawString(font, value, x, y, color, shadow);
    }

    public static void textCentered(GuiGraphics graphics, Font font, String value, int centerX, int y,
                                    int color, boolean shadow) {
        graphics.drawString(font, value, centerX - font.width(value) / 2, y, color, shadow);
    }

    // ---------------------------------------------------------------- ayarlar
    public static int optionCount(String key) {
        return switch (key) {
            case "particles" -> ParticleStatus.values().length;
            case "graphics" -> GraphicsPreset.values().length;
            default -> CloudStatus.values().length;
        };
    }

    public static int optionValue(Options options, String key) {
        return switch (key) {
            case "particles" -> options.particles().get().ordinal();
            // `graphicsPreset` bu nesilde yalnızca **yazar** tarafta okunur; okuma
            // tarafı -1 döner (bilinmiyor). 595 ölçümünü veren sürümün davranışı bu;
            // panel değeri `optionLabel` ile gösterir, ayar yazılmaz.
            case "graphics" -> -1;
            default -> options.cloudStatus().get().ordinal();
        };
    }

    public static boolean setOption(Options options, String key, int index) {
        switch (key) {
            case "particles" -> {
                ParticleStatus[] values = ParticleStatus.values();
                if (index < 0 || index >= values.length) {
                    return false;
                }
                options.particles().set(values[index]);
                return true;
            }
            case "graphics" -> {
                GraphicsPreset[] values = GraphicsPreset.values();
                if (index < 0 || index >= values.length) {
                    return false;
                }
                options.graphicsPreset().set(values[index]);
                return true;
            }
            default -> {
                CloudStatus[] values = CloudStatus.values();
                if (index < 0 || index >= values.length) {
                    return false;
                }
                options.cloudStatus().set(values[index]);
                return true;
            }
        }
    }

    public static String optionLabel(String key, int index) {
        if (key.equals("particles")) {
            return switch (index) {
                case 1 -> "Azaltılmış";
                case 2 -> "Minimum";
                default -> "Tümü";
            };
        }
        if (key.equals("graphics")) {
            return switch (index) {
                case 0 -> "Hızlı";
                case 2 -> "Muhteşem";
                default -> "Şık";
            };
        }
        return switch (index) {
            case 1 -> "Hızlı";
            case 2 -> "Şık";
            default -> "Kapalı";
        };
    }

    // ---------------------------------------------------------------- pencere
    public static long windowHandle(Window window) {
        return window == null ? 0L : window.handle();
    }

    public static boolean isIconified(Window window) {
        return window != null && window.isIconified();
    }

    public static String dimensionPath(ClientLevel level) {
        try {
            return level.dimension().identifier().getPath();
        } catch (Throwable ignored) {
            return "bilinmiyor";
        }
    }

    public static KeyMapping key(String name, int code) {
        return new KeyMapping(name, InputConstants.Type.KEYSYM, code, KeyMapping.Category.MISC);
    }

    /** Panel ekranını üretir; tek fark girdi imzaları olduğu için gövdesi aynı. */
    public static Screen panelScreen() {
        return new ScreenBase(Component.literal("YIKIM"));
    }

    // ---------------------------------------------------------------- ekranlar
    /**
     * Vanilla ekranların kurucuları sürümden sürüme değişir; menü bu yüzden
     * doğrudan `new` çağırmaz, hepsini buradan ister. Derleme beş sürümü de
     * denediği için imza kayması oyuncuya ulaşmadan yakalanır.
     */
    public static Screen titleScreen() {
        return new TitleScreenBase(Component.literal("YIKIMLient"));
    }

    /** Vanilla başlık ekranı: panel kapanışında dünyada değilsek dönülen ekran. */
    public static Screen vanillaTitleScreen() {
        return new TitleScreen();
    }

    public static Screen worldSelectScreen(Screen parent) {
        return new SelectWorldScreen(parent);
    }

    public static Screen multiplayerScreen(Screen parent) {
        return new JoinMultiplayerScreen(parent);
    }

    public static Screen optionsScreen(Screen parent, Options options) {
        return new OptionsScreen(parent, options);
    }

    /**
     * Ana menünün ekran kabuğu: girdi kayıtları bu nesle özel, çizim ve tıklama
     * matematiği sürümden bağımsız {@link YikimMainMenu}'de.
     */
    public static class TitleScreenBase extends Screen {

        protected final YikimMainMenu menu = new YikimMainMenu(this);

        protected TitleScreenBase(Component title) {
            super(title);
        }

        @Override
        protected void init() {
            menu.onResize(width, height);
        }

        @Override
        public void render(GuiGraphics graphics, int mouseX, int mouseY, float partialTick) {
            menu.draw(graphics, font, mouseX, mouseY, width, height);
        }

        @Override
        public void tick() {
            menu.tick();
        }

        @Override
        public boolean mouseClicked(MouseButtonEvent event, boolean doubled) {
            return menu.click(event.x(), event.y(), event.button());
        }

        @Override
        public boolean keyPressed(KeyEvent event) {
            if (menu.key(event.key())) {
                return true;
            }
            return super.keyPressed(event);
        }

        @Override
        public void onClose() {
            // Esc ana menüyü kapatmaz: oyuncu yanlışlıkla boş bir ekranda kalmasın.
            menu.onClose();
        }

        @Override
        public boolean isPauseScreen() {
            return false;
        }
    }

    /**
     * Panelin oyun ekranı kabuğu: sürüme özel girdileri ortak panele çevirir.
     * Çizim ve mantık {@link YikimPanel}'de.
     */
    public static class ScreenBase extends Screen {

        protected final YikimPanel panel = new YikimPanel(this);

        protected ScreenBase(Component title) {
            super(title);
        }

        @Override
        protected void init() {
            panel.onResize(width, height);
        }

        @Override
        public void render(GuiGraphics graphics, int mouseX, int mouseY, float partialTick) {
            panel.draw(graphics, font, mouseX, mouseY, width, height);
        }

        @Override
        public void tick() {
            panel.tick();
        }

        @Override
        public boolean mouseClicked(MouseButtonEvent event, boolean doubled) {
            if (panel.click(event.x(), event.y(), event.button())) {
                return true;
            }
            return super.mouseClicked(event, doubled);
        }

        @Override
        public boolean mouseReleased(MouseButtonEvent event) {
            panel.release(event.x(), event.y(), event.button());
            return super.mouseReleased(event);
        }

        @Override
        public boolean mouseDragged(MouseButtonEvent event, double dragX, double dragY) {
            panel.drag(event.x(), event.y());
            return super.mouseDragged(event, dragX, dragY);
        }

        @Override
        public boolean mouseScrolled(double mouseX, double mouseY, double scrollX, double scrollY) {
            if (panel.scroll(mouseX, mouseY, scrollY)) {
                return true;
            }
            return super.mouseScrolled(mouseX, mouseY, scrollX, scrollY);
        }

        @Override
        public boolean keyPressed(KeyEvent event) {
            if (event.key() == 344) { // Sağ Shift: paneli kapat (aç/kapa)
                YikimPanel.close();
                return true;
            }
            if (panel.key(event.key())) {
                return true;
            }
            return super.keyPressed(event);
        }

        @Override
        public void onClose() {
            // Esc: boş ekran bırakma — dünyada oyuna dön, değilse menüye dön.
            YikimPanel.close();
        }

        @Override
        public boolean charTyped(CharacterEvent event) {
            if (panel.typed(event.codepointAsString().charAt(0))) {
                return true;
            }
            return super.charTyped(event);
        }

        @Override
        public boolean isPauseScreen() {
            return false;
        }
    }
}
