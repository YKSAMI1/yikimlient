/*
 * Decompiled with CFR 0.152.
 * 
 * Could not load the following classes:
 *  net.fabricmc.loader.api.FabricLoader
 *  net.minecraft.class_310
 *  net.minecraft.class_327
 *  net.minecraft.class_332
 *  net.minecraft.class_437
 */
package com.yikimlient.client;

import com.yikimlient.client.YikimAdapter;
import com.yikimlient.client.YikimBackdrop;
import com.yikimlient.client.YikimConfig;
import com.yikimlient.client.YikimDraw;
import com.yikimlient.client.YikimIcons;
import com.yikimlient.client.YikimMenuIcons;
import com.yikimlient.client.YikimMetrics;
import com.yikimlient.client.YikimPanel;
import com.yikimlient.client.YikimPresets;
import com.yikimlient.client.YikimTheme;
import com.yikimlient.client.YikimUiMetrics;
import com.yikimlient.client.YikimVideo;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import net.fabricmc.loader.api.FabricLoader;
import net.minecraft.class_310;
import net.minecraft.class_327;
import net.minecraft.class_332;
import net.minecraft.class_4185;
import net.minecraft.class_437;

public final class YikimMainMenu {
    private static final String[] TIPS = new String[]{"Sa\u011f Shift: YIKIM men\u00fcs\u00fc  \u2022  Sa\u011f Ctrl: HUD a\u00e7/kapa", "HUD \u00f6\u011felerini panelden ya da ekrandan s\u00fcr\u00fckleyip ta\u015f\u0131yabilirsin.", "Sol Alt: yak\u0131nla\u015ft\u0131r (bas\u0131l\u0131 tut)  \u2022  Sa\u011f Alt: profil de\u011fi\u015ftir.", "Modlar sekmesinden mod aray\u0131p kurabilirsin; kurulum oyun kapan\u0131nca yap\u0131l\u0131r.", "Panel a\u00e7\u0131kken Tab sekmeleri, tekerlek listeyi kayd\u0131r\u0131r.", "Profil se\u00e7imin ba\u015flat\u0131c\u0131ya bildirilir; iki taraf birbirinin ayar\u0131n\u0131 ezmez."};
    private static final long CACHE_MILLIS = 1000L;
    private final class_437 screen;
    private final List<Button> buttons = new ArrayList<Button>();
    private final Runnable chipBackdrop;
    private final Runnable chipHud;
    private final List<Hit> hits = new ArrayList<Hit>();
    private final List<class_4185> modButtons;
    private int hitCount;
    private long openedAt;
    private long hintUntil;
    private String hint = "";
    private int hintWidth;
    private int columnX;
    private int columnWidth;
    private int buttonHeight;
    private int buttonGap;
    private int buttonsTop;
    private int columns = 1;
    private int rows;
    private int cardX;
    private int cardWidth;
    private int cardY;
    private long cacheStamp;
    private String cacheSubtitle = "";
    private String cacheFooterLeft = "";
    private String cacheUser = "";
    private String cacheAccount = "";
    private String cacheLauncher = "";
    private String cacheProfile = "";
    private String cacheMods = "";
    private String cacheHud = "";
    private int cacheFps;
    private int cacheTipIndex = -1;
    private int cacheTipWidth = -1;
    private List<String> cacheTipLines = List.of();

    public YikimMainMenu(class_437 screen) {
        this.screen = screen;
        this.buttons.add(new Button("Tek Oyunculu", "D\u00fcnyalar\u0131n\u0131 a\u00e7", 1, -1, () -> YikimMainMenu.open(YikimAdapter.worldSelectScreen(screen))));
        this.buttons.add(new Button("\u00c7ok Oyunculu", "Sunucu listesi", 2, -1, () -> YikimMainMenu.open(YikimAdapter.multiplayerScreen(screen))));
        this.buttons.add(new Button("YIKIM Men\u00fcs\u00fc", "Performans, g\u00f6r\u00fcn\u00fcm, HUD, modlar", 0, 0, () -> YikimPanel.open(class_310.method_1551(), 0)));
        this.buttons.add(new Button("HUD'u d\u00fczenle", "\u00d6\u011feleri yerle\u015ftir", 3, 2, () -> YikimPanel.open(class_310.method_1551(), 2)));
        this.buttons.add(new Button("Modlar", "Mod ara ve kur", 4, 4, () -> YikimPanel.open(class_310.method_1551(), 4)));
        this.buttons.add(new Button("Ayarlar", "Minecraft ayarlar\u0131", 5, -1, () -> YikimMainMenu.open(YikimAdapter.optionsScreen(screen, class_310.method_1551().field_1690))));
        this.buttons.add(new Button("\u00c7\u0131k\u0131\u015f", "Oyundan ayr\u0131l", 8, -1, () -> class_310.method_1551().method_1592()));
        // DİĞER MODLARIN TUŞLARI (Flashback, Mod Menu vb.): vanilla menüye mixin ile
        // eklenen tuşlar OTURUM BOYUNCA BİR KEZ yakalanır ve sağ panelde listelenir.
        this.modButtons = YikimModButtons.scanOnce(class_310.method_1551());
        this.chipBackdrop = () -> {
            YikimBackdrop.invalidate();
            YikimMetrics.notify("Arka plan: " + YikimBackdrop.cycle());
        };
        this.chipHud = () -> {
            YikimConfig config = YikimConfig.get();
            config.hudEnabled = !config.hudEnabled;
            config.save();
            YikimMetrics.notify("HUD " + (config.hudEnabled ? "a\u00e7\u0131k" : "kapal\u0131"));
        };
    }

    private static void open(class_437 next) {
        if (next != null) {
            class_310.method_1551().method_1507(next);
        } else {
            YikimMetrics.notify("Bu ekran bu s\u00fcr\u00fcmde a\u00e7\u0131lam\u0131yor");
        }
    }

    void onResize(int screenWidth, int screenHeight) {
        this.openedAt = System.currentTimeMillis();
        this.hitCount = 0;
    }

    void tick() {
    }

    void draw(class_332 graphics, class_327 font, int mouseX, int mouseY, int screenWidth, int screenHeight) {
        long started = YikimUiMetrics.menuStart();
        YikimMetrics.frame(3);
        this.hitCount = 0;
        long now = System.currentTimeMillis();
        class_310 client = class_310.method_1551();
        float appear = Math.min(1.0f, (float)(now - this.openedAt) / 420.0f);
        float eased = 1.0f - (1.0f - appear) * (1.0f - appear);
        int slide = (int)((1.0f - eased) * 24.0f);
        YikimBackdrop.render(graphics, screenWidth, screenHeight, now);
        int margin = screenWidth < 640 ? 12 : 24;
        int footerHeight = 20;
        float wordScale = screenHeight >= 300 ? 3.0f : 2.0f;
        int logoY = Math.max(margin, (int)((float)screenHeight * 0.1f));
        int logoHeight = (int)(8.0f * wordScale) + 16;
        int contentTop = logoY + logoHeight;
        int available = screenHeight - footerHeight - contentTop - 8;
        int count = this.buttons.size();
        this.columnWidth = Math.min(360, Math.max(200, screenWidth / 3));
        this.columnX = margin - slide;
        this.buttonGap = available / count >= 34 ? 7 : 4;
        this.buttonHeight = Math.max(16, Math.min(32, (available - (count - 1) * this.buttonGap) / count));
        this.columns = 1;
        this.rows = count;
        if (this.buttonHeight < 18) {
            this.columns = 2;
            this.rows = (count + 1) / 2;
            this.buttonGap = 3;
            this.buttonHeight = Math.max(16, Math.min(32, (available - (this.rows - 1) * this.buttonGap) / this.rows));
        }
        int buttonWidth = (this.columnWidth - (this.columns - 1) * 3) / this.columns;
        int blockHeight = this.rows * (this.buttonHeight + this.buttonGap) - this.buttonGap;
        int chipsHeight = this.columns == 1 && available - blockHeight >= 26 ? 18 : 0;
        int slack = available - blockHeight - (chipsHeight > 0 ? chipsHeight + 8 : 0);
        this.buttonsTop = contentTop + Math.min(60, Math.max(0, slack / 2));
        this.cardWidth = screenWidth >= 640 ? Math.min(360, Math.max(240, screenWidth / 3)) : 0;
        this.cardX = screenWidth - margin - this.cardWidth + slide / 2;
        this.cardY = (int)((float)screenHeight * 0.16f);
        this.refresh(client, font, this.cardWidth > 0 ? this.cardWidth - 40 : this.columnWidth - 20);
        this.drawHeader(graphics, font, this.columnX, logoY, wordScale, slide);
        for (int index = 0; index < this.buttons.size(); ++index) {
            Button button = this.buttons.get(index);
            int column = index / this.rows;
            int row = index % this.rows;
            int x = this.columnX + column * (buttonWidth + 3);
            int y = this.buttonsTop + row * (this.buttonHeight + this.buttonGap);
            boolean hovered = YikimDraw.inside(mouseX, mouseY, x, y, buttonWidth, this.buttonHeight);
            this.drawButton(graphics, font, button, x, y, buttonWidth, this.buttonHeight, hovered);
            this.addHit(x, y, buttonWidth, this.buttonHeight, button.action());
        }
        if (chipsHeight > 0) {
            this.drawChips(graphics, font, this.buttonsTop + blockHeight + 8, buttonWidth, mouseX, mouseY);
        }
        if (this.cardWidth > 0 && this.cardX - (this.columnX + this.columnWidth) >= 24) {
            this.drawSidePanel(graphics, client, font, this.cardX, this.cardY, this.cardWidth, screenHeight - this.cardY - footerHeight - margin, mouseX, mouseY);
        }
        this.drawFooter(graphics, font, screenWidth, screenHeight, footerHeight);
        if (now < this.hintUntil && !this.hint.isEmpty()) {
            int hintY = Math.min(screenHeight - footerHeight - 18, this.buttonsTop + blockHeight + chipsHeight + 12);
            YikimDraw.roundedFill(graphics, this.columnX, hintY, this.columnX + this.hintWidth + 14, hintY + 14, -435286510);
            YikimDraw.outline(graphics, this.columnX, hintY, this.hintWidth + 14, 14, YikimTheme.alpha(-340971, 136));
            YikimAdapter.text(graphics, font, this.hint, this.columnX + 7, hintY + 4, -340971, true);
        }
        YikimUiMetrics.menuEnd(started);
    }

    private void refresh(class_310 client, class_327 font, int tipWidth) {
        String uuid;
        long now = System.currentTimeMillis();
        if (now - this.cacheStamp < 1000L) {
            return;
        }
        this.cacheStamp = now;
        this.cacheSubtitle = "CLIENT  \u2022  v" + YikimClient.MOD_VERSION;
        this.cacheFps = YikimMetrics.fps();
        this.cacheFooterLeft = "YIKIMLient  \u2022  Minecraft " + YikimVideo.gameVersion() + "  \u2022  " + this.cacheFps + " FPS";
        this.cacheProfile = YikimPresets.currentId();
        this.cacheMods = FabricLoader.getInstance().getAllMods().size() + " mod";
        YikimConfig config = YikimConfig.get();
        this.cacheHud = config.hudEnabled ? "a\u00e7\u0131k" : "kapal\u0131";
        String launcherPreset = System.getProperty("yikimlient.presetName", "");
        String memory = System.getProperty("yikimlient.memoryMb", "");
        this.cacheLauncher = launcherPreset.isEmpty() ? "ba\u015flat\u0131c\u0131 bilgisi yok" : launcherPreset + (String)(memory.isEmpty() ? "" : " \u2022 " + memory + " MB");
        this.cacheUser = client.method_1548() != null ? client.method_1548().method_1676() : "";
        String string = uuid = client.method_1548() != null && client.method_1548().method_44717() != null ? client.method_1548().method_44717().toString() : null;
        this.cacheAccount = uuid == null || uuid.isEmpty() ? "\u00e7evrimd\u0131\u015f\u0131 hesap" : (uuid.length() > 8 ? uuid.substring(0, 8) + "\u2026" : uuid);
        int tipIndex = (int)(now / 6000L % (long)TIPS.length);
        if (tipIndex != this.cacheTipIndex || tipWidth != this.cacheTipWidth) {
            this.cacheTipIndex = tipIndex;
            this.cacheTipWidth = tipWidth;
            this.cacheTipLines = YikimMainMenu.wrap(font, TIPS[tipIndex], tipWidth);
        }
    }

    private void drawHeader(class_332 graphics, class_327 font, int x, int y, float scale, int slide) {
        String mark = "YIKIM";
        int width = (int)((float)font.method_1727(mark) * scale);
        int markBottom = y + (int)(8.0f * scale);
        YikimMainMenu.bigText(graphics, font, mark, x, y, -723722, scale);
        YikimDraw.horizontalGradient(graphics, x - slide / 2, markBottom + 3, x + width, markBottom + 6, YikimTheme.accent, YikimTheme.accent2, 6);
        YikimAdapter.text(graphics, font, this.cacheSubtitle, x + 2, markBottom + 9, -6645082, true);
    }

    private void drawButton(class_332 graphics, class_327 font, Button button, int x, int y, int width, int height, boolean hovered) {
        int fill = hovered ? YikimTheme.alpha(YikimTheme.accent, 230) : -1073083890;
        int border = hovered ? YikimTheme.alpha(YikimTheme.accent, 128) : 0x33FFFFFF;
        YikimDraw.roundedFill(graphics, x, y, x + width, y + height, fill);
        YikimDraw.outline(graphics, x, y, width, height, border);
        if (hovered) {
            graphics.method_25294(x, y + 2, x + 3, y + height - 2, -15724524);
        }
        int iconSize = Math.max(12, height - 10);
        int iconX = x + 6;
        int iconY = y + (height - iconSize) / 2;
        YikimDraw.roundedFill(graphics, iconX, iconY, iconX + iconSize, iconY + iconSize, hovered ? 0x33FFFFFF : 0x22FFFFFF);
        YikimMenuIcons.draw(graphics, button.icon(), iconX, iconY, iconSize, hovered ? -15724524 : YikimTheme.accent);
        int textX = iconX + iconSize + 10;
        int textWidth = width - (textX - x) - 8;
        boolean roomForHint = height >= 26;
        int textY = roomForHint ? y + 5 : y + (height - 8) / 2;
        YikimAdapter.text(graphics, font, YikimDraw.clip(font, button.label(), textWidth), textX, textY, hovered ? -15724524 : -723722, !hovered);
        if (roomForHint && button.hint() != null) {
            YikimAdapter.text(graphics, font, YikimDraw.clip(font, button.hint(), textWidth), textX, y + 16, hovered ? -1727000556 : -9539974, false);
        }
    }

    private void drawChips(class_332 graphics, class_327 font, int y, int width, int mouseX, int mouseY) {
        int chipWidth = (width - 4) / 2;
        String[] labels = new String[]{"Arka plan: " + YikimBackdrop.sessionLabel(), YikimConfig.get().hudEnabled ? "HUD a\u00e7\u0131k" : "HUD kapal\u0131"};
        int[] icons = new int[]{9, 3};
        Runnable[] actions = new Runnable[]{this.chipBackdrop, this.chipHud};
        for (int index = 0; index < labels.length; ++index) {
            int x;
            boolean hovered = YikimDraw.inside(mouseX, mouseY, x = this.columnX + index * (chipWidth + 4), y, chipWidth, 16);
            YikimDraw.roundedFill(graphics, x, y, x + chipWidth, y + 16, hovered ? YikimTheme.alpha(YikimTheme.accent, 85) : -1728053248);
            YikimDraw.outline(graphics, x, y, chipWidth, 16, hovered ? YikimTheme.accent : 0x22FFFFFF);
            YikimMenuIcons.draw(graphics, icons[index], x + 4, y + 4, 8, hovered ? -1 : -9539974);
            YikimAdapter.text(graphics, font, YikimDraw.clip(font, labels[index], chipWidth - 18), x + 14, y + 4, hovered ? -723722 : -6645082, false);
            this.addHit(x, y, chipWidth, 16, actions[index]);
        }
    }

    private void drawSidePanel(class_332 graphics, class_310 client, class_327 font, int x, int y, int width, int availableHeight, int mouseX, int mouseY) {
        int shownRows;
        if (availableHeight < 110) {
            return;
        }
        int pad = 14;
        int inner = width - pad * 2;
        String[][] rows = new String[][]{{"Aktif profil", this.cacheProfile}, {"JVM profili", this.cacheLauncher}, {"Y\u00fckl\u00fc mod", this.cacheMods}, {"HUD", this.cacheHud}};
        int headerHeight = 49;
        int rowHeight = 21;
        int tipHeight = 9 + this.cacheTipLines.size() * 11;
        int modCount = this.modButtons.size();
        // MOD TUŞLARI bölümü: başlık + her mod tuşu 20px (sağ panelde, ipucunun altında)
        int modSectionHeight = modCount > 0 ? 10 + modCount * 20 : 0;
        int maxRows = Math.max(0, (availableHeight - pad * 2 - headerHeight - 6 - 10 - tipHeight - modSectionHeight) / rowHeight);
        shownRows = Math.min(rows.length, maxRows);
        int height = pad * 2 + headerHeight + 6 + shownRows * rowHeight + (shownRows > 0 ? 10 : 0) + tipHeight + modSectionHeight;
        YikimDraw.roundedFill(graphics, x, y, x + width, y + height, -1073083890);
        YikimDraw.outline(graphics, x, y, width, height, 0x33FFFFFF);
        graphics.method_25294(x, y + 4, x + 3, y + height - 4, YikimTheme.accent);
        int cursor = y + pad;
        YikimAdapter.text(graphics, font, "SEN", x + pad, cursor, YikimTheme.accent, false);
        String name = this.cacheUser.isEmpty() ? "\u2014" : this.cacheUser;
        YikimAdapter.push(graphics, x + pad, cursor + 11, 1.4f);
        YikimAdapter.text(graphics, font, YikimDraw.clip(font, name, (int)((float)inner / 1.4f)), 0, 0, -723722, true);
        YikimAdapter.pop(graphics);
        YikimAdapter.text(graphics, font, this.cacheAccount, x + pad, cursor + 31, -9539974, false);
        cursor += headerHeight + 6;
        for (int index = 0; index < shownRows; ++index) {
            YikimAdapter.text(graphics, font, YikimMainMenu.upper(rows[index][0]), x + pad, cursor, -9539974, false);
            YikimAdapter.text(graphics, font, YikimDraw.clip(font, rows[index][1], inner), x + pad, cursor + 9, -723722, true);
            cursor += rowHeight;
        }
        if (shownRows > 0) {
            graphics.method_25294(x + pad, cursor += 4, x + width - pad, cursor + 1, 0x22FFFFFF);
        }
        YikimAdapter.text(graphics, font, "\u0130PUCU", x + pad, cursor + 5, YikimTheme.accent, false);
        int tipY = cursor + 17;
        for (String line : this.cacheTipLines) {
            YikimAdapter.text(graphics, font, line, x + pad, tipY, -6645082, false);
            tipY += 11;
        }
        // ---- MOD TUŞLARI: diğer modların (Flashback vb.) menü tuşları, ipucunun altında ----
        if (modCount > 0) {
            int modY = tipY + 6;
            YikimAdapter.text(graphics, font, "MOD TUSLARI", x + pad, modY, YikimTheme.accent, false);
            modY += 10;
            for (class_4185 modButton : this.modButtons) {
                String label = YikimModButtons.label(modButton);
                boolean hovered = YikimDraw.inside(mouseX, mouseY, x + pad - 2, modY, inner + 4, 18);
                int chipFill = hovered ? YikimTheme.alpha(YikimTheme.accent, 200) : YikimTheme.alpha(YikimTheme.accent, 26);
                YikimDraw.roundedFill(graphics, x + pad - 2, modY, x + width - pad + 2, modY + 18, chipFill);
                YikimDraw.outline(graphics, x + pad - 2, modY, inner + 4, 18, YikimTheme.alpha(YikimTheme.accent, hovered ? 200 : 80));
                // MODUN GERÇEK LOGOSU: etiket kurulu modla eşleşirse launcher'ın indirdiği
                // PNG çizilir; eşleşmezse mod adının ilk harfi rozet olarak kalır.
                String jarName = YikimModButtons.jarIconFor(label);
                if (jarName != null) {
                    YikimIcons.draw(graphics, font, jarName, null, label, x + pad + 1, modY + 1, 16);
                } else {
                    YikimDraw.roundedFill(graphics, x + pad + 2, modY + 2, x + pad + 16, modY + 16, YikimTheme.alpha(YikimTheme.accent, 70));
                    String letter = label.isEmpty() ? "?" : label.substring(0, 1).toUpperCase(Locale.ROOT);
                    YikimAdapter.text(graphics, font, letter, x + pad + 5, modY + 5, hovered ? -15724524 : YikimTheme.alpha(YikimTheme.accent, 220), true);
                }
                YikimAdapter.text(graphics, font, YikimDraw.clip(font, label, inner - 24), x + pad + 22, modY + 5, hovered ? -15724524 : -723722, !hovered);
                class_4185 target = modButton;
                this.addHit(x + pad - 2, modY, inner + 4, 18, () -> YikimModButtons.press(target));
                modY += 20;
            }
        }
    }

    private void drawFooter(class_332 graphics, class_327 font, int width, int height, int footerHeight) {
        graphics.method_25294(0, height - footerHeight, width, height, -1073741824);
        graphics.method_25294(0, height - footerHeight, width, height - footerHeight + 1, YikimTheme.alpha(YikimTheme.accent, 102));
        YikimAdapter.text(graphics, font, this.cacheFooterLeft, 24, height - footerHeight + 6, -9539974, false);
        String hintText = "Sa\u011f Shift her yerden YIKIM men\u00fcs\u00fcn\u00fc a\u00e7ar";
        if (width - font.method_1727(this.cacheFooterLeft) - font.method_1727(hintText) > 60) {
            YikimAdapter.text(graphics, font, hintText, width - font.method_1727(hintText) - 24, height - footerHeight + 6, -9539974, false);
        }
    }

    private static void bigText(class_332 graphics, class_327 font, String value, int x, int y, int color, float scale) {
        YikimAdapter.push(graphics, x, y, scale);
        YikimAdapter.text(graphics, font, value, 0, 0, color, true);
        YikimAdapter.pop(graphics);
    }

    private static List<String> wrap(class_327 font, String value, int maxWidth) {
        ArrayList<String> lines = new ArrayList<String>();
        StringBuilder current = new StringBuilder();
        for (String word : value.split(" ")) {
            String candidate;
            String string = candidate = current.isEmpty() ? word : String.valueOf(current) + " " + word;
            if (font.method_1727(candidate) > maxWidth && !current.isEmpty()) {
                lines.add(current.toString());
                current = new StringBuilder(word);
                continue;
            }
            current = new StringBuilder(candidate);
        }
        if (!current.isEmpty()) {
            lines.add(current.toString());
        }
        if (lines.isEmpty()) {
            lines.add("");
        }
        return lines.stream().limit(3L).toList();
    }

    private static String upper(String value) {
        return value == null ? "" : value.toUpperCase(Locale.ROOT);
    }

    private void addHit(int x, int y, int width, int height, Runnable action) {
        Hit hit;
        if (this.hitCount < this.hits.size()) {
            hit = this.hits.get(this.hitCount);
        } else {
            hit = new Hit();
            this.hits.add(hit);
        }
        hit.x = x;
        hit.y = y;
        hit.width = width;
        hit.height = height;
        hit.action = action;
        ++this.hitCount;
    }

    boolean click(double mouseX, double mouseY, int button) {
        if (button != 0) {
            return true;
        }
        for (int index = this.hitCount - 1; index >= 0; --index) {
            Hit hit = this.hits.get(index);
            if (!hit.inside(mouseX, mouseY)) continue;
            hit.action.run();
            return true;
        }
        return true;
    }

    boolean key(int keyCode) {
        switch (keyCode) {
            case 256: {
                this.hint("\u00c7\u0131kmak i\u00e7in \"\u00c7\u0131k\u0131\u015f\" d\u00fc\u011fmesi \u2014 Esc burada men\u00fcy\u00fc kapatmaz");
                return true;
            }
            case 344: {
                YikimPanel.open(class_310.method_1551(), 0);
                return true;
            }
            case 345: {
                this.chipHud.run();
                return true;
            }
            case 346: {
                YikimPresets.cycle(class_310.method_1551());
                return true;
            }
        }
        return false;
    }

    void onClose() {
        this.hint("\u00c7\u0131kmak i\u00e7in \"\u00c7\u0131k\u0131\u015f\" d\u00fc\u011fmesi \u2014 Esc burada men\u00fcy\u00fc kapatmaz");
    }

    private void hint(String message) {
        class_310 client = class_310.method_1551();
        class_327 font = client == null ? null : client.field_1772;
        this.hint = message;
        this.hintWidth = font == null ? 0 : font.method_1727(message);
        this.hintUntil = System.currentTimeMillis() + 2600L;
    }

    private record Button(String label, String hint, int icon, int tab, Runnable action) {
    }

    private static final class Hit {
        private int x;
        private int y;
        private int width;
        private int height;
        private Runnable action;

        private Hit() {
        }

        boolean inside(double mouseX, double mouseY) {
            return YikimDraw.inside(mouseX, mouseY, this.x, this.y, this.width, this.height);
        }
    }
}

