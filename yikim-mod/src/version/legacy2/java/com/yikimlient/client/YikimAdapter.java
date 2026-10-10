package com.yikimlient.client;

import com.mojang.blaze3d.platform.InputConstants;
import com.mojang.blaze3d.platform.Window;
import net.minecraft.client.CloudStatus;
import net.minecraft.client.GraphicsStatus;
import net.minecraft.client.KeyMapping;
import net.minecraft.client.Options;
import net.minecraft.server.level.ParticleStatus;
import net.minecraft.client.gui.Font;
import net.minecraft.client.gui.GuiGraphics;
import net.minecraft.client.gui.screens.Screen;
import net.minecraft.client.gui.screens.TitleScreen;
import net.minecraft.client.gui.screens.multiplayer.JoinMultiplayerScreen;
import net.minecraft.client.gui.screens.options.OptionsScreen;
import net.minecraft.client.gui.screens.worldselection.SelectWorldScreen;
import net.minecraft.client.multiplayer.ClientLevel;
import net.minecraft.network.chat.Component;

/**
 * Minecraft 1.21.2–1.21.3 (legacy neslinin kardeşi).
 *
 * Gövdesi `legacy` ile birebir aynı; tek fark parçacık ayarının taşınmış olması:
 * 1.21.2'de `net.minecraft.client.ParticleStatus` sınıfı
 * `net.minecraft.server.level.ParticleStatus` oldu (Mojang resmî eşlemesinde
 * intermediary `class_4066` her iki sürümde de aynı). Tek kaynak dosya iki paket
 * adını birlikte tutamadığı için ayrı nesil açıldı — 1.21.2/1.21.3'ün derleme
 * hatası tam olarak "cannot find symbol: ParticleStatus" idi.
 */
public final class YikimAdapter {

    private static final String CATEGORY = "key.categories.yikimlient";

    private YikimAdapter() {
    }

    public static void push(GuiGraphics graphics, float x, float y, float scale) {
        graphics.pose().pushPose();
        graphics.pose().translate(x, y, 0.0D);
        graphics.pose().scale(scale, scale, 1.0F);
    }

    public static void pop(GuiGraphics graphics) {
        graphics.pose().popPose();
    }

    public static void text(GuiGraphics graphics, Font font, String value, int x, int y, int color,
                            boolean shadow) {
        graphics.drawString(font, value, x, y, color, shadow);
    }

    public static void textCentered(GuiGraphics graphics, Font font, String value, int centerX, int y,
                                    int color, boolean shadow) {
        graphics.drawString(font, value, centerX - font.width(value) / 2, y, color, shadow);
    }

    public static int optionCount(String key) {
        return switch (key) {
            case "particles" -> ParticleStatus.values().length;
            case "graphics" -> GraphicsStatus.values().length;
            default -> CloudStatus.values().length;
        };
    }

    public static int optionValue(Options options, String key) {
        return switch (key) {
            case "particles" -> options.particles().get().ordinal();
            case "graphics" -> options.graphicsMode().get().ordinal();
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
                GraphicsStatus[] values = GraphicsStatus.values();
                if (index < 0 || index >= values.length) {
                    return false;
                }
                options.graphicsMode().set(values[index]);
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

    public static long windowHandle(Window window) {
        return window == null ? 0L : window.getWindow();
    }

    public static boolean isIconified(Window window) {
        return false;
    }

    public static String dimensionPath(ClientLevel level) {
        try {
            return level.dimension().location().getPath();
        } catch (Throwable ignored) {
            return "bilinmiyor";
        }
    }

    public static KeyMapping key(String name, int code) {
        return new KeyMapping(name, InputConstants.Type.KEYSYM, code, CATEGORY);
    }

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
     * Ana menünün ekran kabuğu: girdi imzaları bu nesle özel, çizim ve tıklama
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
        public boolean mouseClicked(double mouseX, double mouseY, int button) {
            return menu.click(mouseX, mouseY, button);
        }

        @Override
        public boolean keyPressed(int keyCode, int scanCode, int modifiers) {
            if (menu.key(keyCode)) {
                return true;
            }
            return super.keyPressed(keyCode, scanCode, modifiers);
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
        public boolean mouseClicked(double mouseX, double mouseY, int button) {
            if (panel.click(mouseX, mouseY, button)) {
                return true;
            }
            return super.mouseClicked(mouseX, mouseY, button);
        }

        @Override
        public boolean mouseReleased(double mouseX, double mouseY, int button) {
            panel.release(mouseX, mouseY, button);
            return super.mouseReleased(mouseX, mouseY, button);
        }

        @Override
        public boolean mouseDragged(double mouseX, double mouseY, int button, double dragX, double dragY) {
            panel.drag(mouseX, mouseY);
            return super.mouseDragged(mouseX, mouseY, button, dragX, dragY);
        }

        @Override
        public boolean mouseScrolled(double mouseX, double mouseY, double scrollX, double scrollY) {
            if (panel.scroll(mouseX, mouseY, scrollY)) {
                return true;
            }
            return super.mouseScrolled(mouseX, mouseY, scrollX, scrollY);
        }

        @Override
        public boolean keyPressed(int keyCode, int scanCode, int modifiers) {
            if (keyCode == 344) { // Sağ Shift: paneli kapat (aç/kapa)
                YikimPanel.close();
                return true;
            }
            if (panel.key(keyCode)) {
                return true;
            }
            return super.keyPressed(keyCode, scanCode, modifiers);
        }

        @Override
        public void onClose() {
            // Esc: boş ekran bırakma — dünyada oyuna dön, değilse menüye dön.
            YikimPanel.close();
        }

        @Override
        public boolean charTyped(char character, int modifiers) {
            if (panel.typed(character)) {
                return true;
            }
            return super.charTyped(character, modifiers);
        }

        @Override
        public boolean isPauseScreen() {
            return false;
        }
    }
}
