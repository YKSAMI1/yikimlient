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

import com.yikimlient.client.YikimAbTest;
import com.yikimlient.client.YikimAdapter;
import com.yikimlient.client.YikimBackdrop;
import com.yikimlient.client.YikimBridge;
import com.yikimlient.client.YikimCatalog;
import com.yikimlient.client.YikimConfig;
import com.yikimlient.client.YikimDraw;
import com.yikimlient.client.YikimLayout;
import com.yikimlient.client.YikimMenuIcons;
import com.yikimlient.client.YikimMetrics;
import com.yikimlient.client.YikimModBridge;
import com.yikimlient.client.YikimPresets;
import com.yikimlient.client.YikimTheme;
import com.yikimlient.client.YikimUiMetrics;
import com.yikimlient.client.YikimVideo;
import com.yikimlient.client.YikimWidget;
import com.yikimlient.client.YikimWidgets;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import java.util.function.BooleanSupplier;
import java.util.function.Consumer;
import java.util.function.DoubleConsumer;
import java.util.function.DoubleSupplier;
import java.util.function.IntConsumer;
import java.util.function.Supplier;
import net.fabricmc.loader.api.FabricLoader;
import net.minecraft.class_310;
import net.minecraft.class_327;
import net.minecraft.class_332;
import net.minecraft.class_437;

public final class YikimPanel {
    private static final String[] TAB_NAMES = new String[]{"Performans", "G\u00f6r\u00fcn\u00fcm", "HUD", "Ekstra", "Modlar", "Sistem"};
    private static final int[] TAB_ICONS = new int[]{0, 10, 3, 11, 4, 5};
    public static final int TAB_PERFORMANCE = 0;
    public static final int TAB_LOOK = 1;
    public static final int TAB_HUD = 2;
    public static final int TAB_EXTRA = 3;
    public static final int TAB_MODS = 4;
    public static final int TAB_SYSTEM = 5;
    private static final int PANEL_MAX_W = 680;
    private static final int PANEL_MAX_H = 440;
    private static final int HEADER_H = 30;
    private static final int TAB_H = 24;
    private static final int FOOTER_H = 26;
    private static final int PAD = 10;
    private static final int BAR_W = 4;
    private static final int ROW_H = 24;
    private static final int SLIDER_H = 28;
    private static final int SECTION_H = 18;
    private static final int ROW_GAP = 3;
    private static final int SECTION_GAP = 6;
    private static final int LABEL_MIN_PANEL = 520;
    private static final int SEARCH_MIN_ROOM = 96;
    private static final long CACHE_MILLIS = 500L;
    private static final long CACHE_SLOW_MILLIS = 2000L;
    private static final int FILTER_MAX = 32;
    private static final int SCROLL_STEP = 22;
    private static final String[] PALETTE_NAMES = new String[]{"Turuncu", "K\u0131rm\u0131z\u0131", "Alt\u0131n", "Mor", "Neon Ye\u015fil"};
    private static final int[] PALETTE_ACCENT = new int[]{-34280, -45747, -20448, -5745161, -13115286};
    private static final int[] PALETTE_ACCENT2 = new int[]{-49920, -7725281, -8762872, -9817400, -15423397};
    private static final int[] PALETTE_BACKDROP = new int[]{-16119284, -15594998, -15725562, -15988718, -16379637};
    private static final String[] BACKDROP_NAMES = YikimBackdrop.STYLE_LABELS;
    private static int initialTab = -1;
    private static boolean hudEditing;
    private static long hudEditingAt;
    private final class_437 screen;
    private int tab;
    private int scroll;
    private int maxScroll;
    private boolean scrollDragging;
    private boolean searchFocused;
    private String filter = "";
    private String filterLower = "";
    private final List<Row> rows = new ArrayList<Row>();
    private Row dragging;
    private int mouseX;
    private int mouseY;
    private int px1;
    private int py1;
    private int px2;
    private int py2;
    private int listX;
    private int listW;
    private int listTop;
    private int listBottom;
    private int trackX;
    private long openedAt;
    private float appear;
    private List<YikimLayout.Slot> slots = List.of();
    private String draggingWidget;
    private YikimLayout.Slot dragSlot;
    private double dragStartX;
    private double dragStartY;
    private int dragOriginOffsetX;
    private int dragOriginOffsetY;
    private boolean dragMoved;
    private int modView;
    private boolean editorMode;
    private int screenW;
    private int screenH;
    private String selectedPreset = YikimPresets.currentId();
    private long cacheAt;
    private long cacheSlowAt;
    private int cacheFps;
    private String cacheStats = "";
    private String cacheDescription = "";
    private String cacheHudScale = "";
    private String cacheMeasured = "";
    private String cacheRenderRow = "";
    private String cacheSimRow = "";
    private String cacheParticles = "";
    private String cacheClouds = "";
    private String cacheVsync = "";
    private String cacheFrameLimit = "";
    private String cacheBackdrop = "";
    private String cacheCatalogStatus = "";
    private String cacheQueueStatus = "";
    private String cachePalette = "";
    private String cacheModsCount = "";
    private String cacheDragHint = "";
    private String cacheStateSummary = "";
    private String cacheDragKey = "\u0000";
    private String cacheHintSource = "\u0000";
    private String cacheHintText = "";
    private int cacheHintRoom = Integer.MIN_VALUE;
    private String cacheRightLabel;
    private int cacheRightLabelWidth;
    private int cacheCommitCount = -1;
    private int cacheCommitWidthPx;
    private String cacheSession = "";
    private String cacheNotification = "";
    private String[] cacheSystemLines = new String[0];
    private String cacheDiagnosticsSource = "\u0000";
    private final List<String> cacheDiagnosticsLines = new ArrayList<String>();
    private int[] cacheGraph = new int[0];
    private int cacheGraphSize = -1;
    private int cachedCatalogRevision = Integer.MIN_VALUE;
    private int cachedCurveRevision = Integer.MIN_VALUE;
    private boolean cachedAbRunning;

    public YikimPanel(class_437 screen) {
        this.screen = screen;
    }

    public static boolean hudEditing() {
        return hudEditing && System.currentTimeMillis() - hudEditingAt < 500L;
    }

    /** Tam ekran HUD editörü açık mı (panel kalkar, matris ızgarası gelir). */
    public boolean editorActive() {
        return this.editorMode;
    }

    /** Editörden çıkıp panele dön. */
    public void exitEditor() {
        this.editorMode = false;
        YikimConfig.get().save();
        this.cacheAt = 0L;
        this.rebuild();
    }

    public static void open(class_310 client) {
        YikimPanel.open(client, 0);
    }

    public static void open(class_310 client, int wantedTab) {
        initialTab = Math.max(0, Math.min(TAB_NAMES.length - 1, wantedTab));
        YikimCatalog.setSource(YikimConfig.get().catalogSource);
        YikimCatalog.ensureResults();
        client.method_1507(YikimAdapter.panelScreen());
    }

    public static void close() {
        class_310 client = class_310.method_1551();
        client.method_1507((class_437)(client.field_1687 == null ? YikimAdapter.vanillaTitleScreen() : null));
    }

    void onResize(int screenWidth, int screenHeight) {
        this.screenW = screenWidth;
        this.screenH = screenHeight;
        if (initialTab >= 0) {
            this.tab = initialTab;
            this.scroll = 0;
            initialTab = -1;
        }
        int panelW = Math.max(250, Math.min(screenWidth - 20, 680));
        int panelH = Math.max(190, Math.min(screenHeight - 20, 440));
        this.px1 = (screenWidth - panelW) / 2;
        this.py1 = (screenHeight - panelH) / 2;
        this.px2 = this.px1 + panelW;
        this.py2 = this.py1 + panelH;
        this.listX = this.px1 + 10;
        this.listW = this.px2 - 10 - 12 - this.listX;
        this.listTop = this.py1 + 30 + 24 + 4;
        this.listBottom = this.py2 - 26 - 4;
        this.trackX = this.px2 - 9;
        this.openedAt = System.currentTimeMillis();
        this.appear = 0.0f;
        this.scrollDragging = false;
        this.dragging = null;
        this.draggingWidget = null;
        this.searchFocused = false;
        this.cacheAt = 0L;
        this.refresh(class_310.method_1551());
        this.rebuild();
    }

    void tick() {
        YikimCatalog.tick(class_310.method_1551());
    }

    void draw(class_332 graphics, class_327 font, int mouseX, int mouseY, int screenWidth, int screenHeight) {
        class_310 client = class_310.method_1551();
        long started = YikimUiMetrics.panelStart();
        this.mouseX = mouseX;
        this.mouseY = mouseY;
        long now = System.currentTimeMillis();
        this.appear = Math.min(1.0f, (float)(now - this.openedAt) / 260.0f);
        float eased = 1.0f - (1.0f - this.appear) * (1.0f - this.appear);
        hudEditing = this.tab == 2 || this.editorMode;
        hudEditingAt = System.currentTimeMillis();
        if (this.tab != 2) {
            this.editorMode = false;
        }
        if (this.editorMode) {
            this.slots = YikimLayout.arrange(font, screenWidth, screenHeight);
            this.drawEditor(graphics, font, screenWidth, screenHeight, mouseX, mouseY);
            YikimUiMetrics.panelEnd(started);
            return;
        }
        if (client.field_1687 == null) {
            YikimMetrics.frame(3);
        }
        this.refresh(client);
        this.syncCatalog();
        this.syncCurve();
        this.slots = YikimLayout.arrange(font, screenWidth, screenHeight);
        graphics.method_25294(0, 0, screenWidth, screenHeight, -1946157056);
        YikimDraw.roundedFill(graphics, this.px1, this.py1, this.px2, this.py2, -234223089);
        YikimDraw.outline(graphics, this.px1, this.py1, this.px2 - this.px1, this.py2 - this.py1, 0x33FFFFFF);
        graphics.method_25294(this.px1 + 2, this.py1 + 1, this.px1 + 2 + (int)((float)(this.px2 - this.px1 - 4) * eased), this.py1 + 3, YikimTheme.alpha(YikimTheme.accent, 240));
        this.drawHeader(graphics, font);
        this.drawTabs(graphics, font, client);
        this.drawList(graphics, font);
        this.drawScrollbar(graphics);
        this.drawFooter(graphics, font);
        if (this.tab == 2) {
            for (YikimLayout.Slot slot : this.slots) {
                YikimAdapter.push(graphics, slot.x, slot.y, slot.scale);
                slot.widget.draw(graphics, font, true);
                YikimAdapter.pop(graphics);
            }
            for (YikimLayout.Slot slot : this.slots) {
                boolean hovered = slot.contains(mouseX, mouseY);
                int color = hovered ? YikimTheme.accent : YikimTheme.alpha(YikimTheme.accent, 102);
                YikimDraw.outline(graphics, slot.x, slot.y, slot.width, slot.height, color);
            }
        }
        YikimUiMetrics.panelEnd(started);
    }

    private void drawHeader(class_332 graphics, class_327 font) {
        YikimDraw.roundedFill(graphics, this.px1 + 10, this.py1 + 7, this.px1 + 10 + 16, this.py1 + 23, YikimTheme.alpha(YikimTheme.accent, 240));
        YikimMenuIcons.draw(graphics, 0, this.px1 + 10 + 3, this.py1 + 10, 10, -15724524);
        int titleX = this.px1 + 10 + 22;
        YikimAdapter.push(graphics, titleX, this.py1 + 6, 1.25f);
        YikimAdapter.text(graphics, font, "YIKIM", 0, 0, -723722, true);
        YikimAdapter.pop(graphics);
        int titleWidth = (int)((float)font.method_1727("YIKIM") * 1.25f);
        YikimAdapter.text(graphics, font, "v" + YikimClient.MOD_VERSION, titleX + titleWidth + 6, this.py1 + 12, -9539974, false);
        int statsWidth = font.method_1727(this.cacheStats);
        int statsX = (this.searchW(font) > 0 ? this.searchX(font) - 12 : this.px2 - 10) - statsWidth;
        if (statsX > titleX + 140) {
            YikimAdapter.text(graphics, font, this.cacheStats, statsX, this.py1 + 11, -6645082, true);
        }
        YikimDraw.separator(graphics, this.px1 + 1, this.py1 + 30, this.px2 - this.px1 - 2);
    }

    private void drawTabs(class_332 graphics, class_327 font, class_310 client) {
        Object shown;
        boolean labels = this.tabLabels(font);
        int y = this.py1 + 30 + 2;
        int height = 20;
        for (int index = 0; index < TAB_NAMES.length; ++index) {
            int x = this.tabX(font, index);
            int width = this.tabWidth(font, index);
            boolean active = index == this.tab;
            boolean hovered = YikimDraw.inside(this.mouseX, this.mouseY, x, y, width, height);
            if (active || hovered) {
                YikimDraw.roundedFill(graphics, x, y, x + width, y + height, active ? YikimTheme.alpha(YikimTheme.accent, 46) : 0x44FFFFFF);
            }
            int iconX = labels ? x + 7 : x + (width - 12) / 2;
            YikimMenuIcons.draw(graphics, TAB_ICONS[index], iconX, y + (height - 12) / 2, 12, active ? YikimTheme.accent : (hovered ? -6645082 : -9539974));
            if (!labels) continue;
            YikimAdapter.text(graphics, font, TAB_NAMES[index], iconX + 16, y + (height - 8) / 2, active ? -723722 : -9539974, true);
        }
        int searchWidth = this.searchW(font);
        if (searchWidth <= 0) {
            return;
        }
        int sx = this.searchX(font);
        YikimDraw.roundedFill(graphics, sx, y, sx + searchWidth, y + height, this.searchFocused ? -434496990 : -2012147432);
        YikimMenuIcons.draw(graphics, 7, sx + 6, y + (height - 10) / 2, 10, this.searchFocused ? YikimTheme.accent : -9539974);
        String query = this.searchText();
        Object object = shown = query.isEmpty() ? this.placeholder() : query;
        if (this.searchFocused && System.currentTimeMillis() / 500L % 2L == 0L) {
            shown = query + "_";
        }
        YikimAdapter.text(graphics, font, YikimDraw.clip(font, (String)shown, searchWidth - 26), sx + 20, y + (height - 8) / 2, query.isEmpty() ? -9539974 : -723722, false);
    }

    /*
     * WARNING - Removed try catching itself - possible behaviour change.
     */
    private void drawList(class_332 graphics, class_327 font) {
        graphics.method_44379(this.listX - 4, this.listTop, this.listX + this.listW + 8, this.listBottom);
        try {
            if (this.rows.isEmpty()) {
                YikimAdapter.text(graphics, font, "Sonu\u00e7 yok \u2014 aramay\u0131 sil", this.listX + 2, this.listTop + 8, -9539974, true);
            }
            for (Row row : this.rows) {
                if (row.y + row.height() < this.listTop - 2 || row.y > this.listBottom + 2) continue;
                row.render(graphics, font, this.mouseX, this.mouseY);
            }
        }
        finally {
            graphics.method_44380();
        }
    }

    private void drawScrollbar(class_332 graphics) {
        YikimDraw.roundedFill(graphics, this.trackX, this.listTop, this.trackX + 4, this.listBottom, 0x33FFFFFF);
        if (this.maxScroll <= 0) {
            return;
        }
        boolean hovered = this.mouseX >= this.trackX - 6 && this.mouseX <= this.trackX + 4 + 4;
        int top = this.barTop();
        YikimDraw.roundedFill(graphics, this.trackX, top, this.trackX + 4, top + this.barHeight(), YikimTheme.alpha(YikimTheme.accent, this.scrollDragging ? 255 : (hovered ? 208 : 160)));
    }

    private void drawFooter(class_332 graphics, class_327 font) {
        int hintRoom;
        int top = this.py2 - 26;
        YikimDraw.separator(graphics, this.px1 + 1, top, this.px2 - this.px1 - 2);
        int commitWidth = this.commitWidth(font);
        boolean showCommit = commitWidth > 0;
        int rightRoom = this.px2 - 10 - (showCommit ? commitWidth + 12 : 0);
        String hint = this.hoveredHint();
        if (hint == null) {
            hint = this.dragHint();
        }
        if (hint == null) {
            hint = this.defaultHint();
        }
        if ((hintRoom = rightRoom - (this.px1 + 10) - 130) != this.cacheHintRoom || !hint.equals(this.cacheHintSource)) {
            this.cacheHintRoom = hintRoom;
            this.cacheHintSource = hint;
            this.cacheHintText = YikimDraw.clip(font, hint, hintRoom);
        }
        YikimAdapter.text(graphics, font, this.cacheHintText, this.px1 + 10, top + 8, -9539974, false);
        if (this.cacheRightLabel == null) {
            this.cacheRightLabel = "Sa\u011f Shift kapat  \u2022  Tab sekme";
            this.cacheRightLabelWidth = font.method_1727(this.cacheRightLabel);
        }
        if (!showCommit && this.cacheRightLabelWidth + 320 < this.px2 - this.px1 - 20) {
            YikimAdapter.text(graphics, font, this.cacheRightLabel, this.px2 - 10 - this.cacheRightLabelWidth, top + 8, -9539974, false);
        }
        if (showCommit) {
            int y;
            int x;
            boolean hovered = YikimDraw.inside(this.mouseX, this.mouseY, x = this.commitX(font), y = top + 4, commitWidth, 18);
            YikimDraw.roundedFill(graphics, x, y, x + commitWidth, y + 18, YikimTheme.alpha(YikimTheme.accent, hovered ? 245 : 204));
            Object label = "Uygula ve oyunu yeniden ba\u015flat (" + this.pendingModChanges() + ")";
            label = YikimDraw.clip(font, (String)label, commitWidth - 10);
            YikimAdapter.text(graphics, font, (String)label, x + (commitWidth - font.method_1727((String)label)) / 2, y + 5, -15724524, false);
        }
    }

    private String defaultHint() {
        return switch (this.tab) {
            case 2 -> "\u00d6\u011feyi s\u00fcr\u00fckleyerek ta\u015f\u0131 \u2022 sa\u011f t\u0131k k\u00f6\u015fe de\u011fi\u015ftirir \u2022 orta t\u0131k konumu s\u0131f\u0131rlar";
            case 4 -> {
                if (this.modView == 1) {
                    yield "Mod ad\u0131 yaz; arama ba\u015flat\u0131c\u0131da yap\u0131l\u0131r, kurulum oyun kapan\u0131nca";
                }
                yield "Sat\u0131ra t\u0131kla: modu a\u00e7/kapat \u2022 \u00fcstteki kutudan mod ara";
            }
            default -> "Sol t\u0131k se\u00e7 \u2022 tekerlek/\u00e7ubuk kayd\u0131r\u0131r \u2022 Tab sekme de\u011fi\u015ftirir";
        };
    }

    private String dragHint() {
        if (this.draggingWidget == null) {
            return null;
        }
        YikimConfig.WidgetState state = YikimConfig.get().widget(this.draggingWidget);
        String key = this.draggingWidget + "|" + state.region + "|" + state.offsetX + "|" + state.offsetY;
        if (!key.equals(this.cacheDragKey)) {
            this.cacheDragKey = key;
            String name = this.draggingWidget;
            for (YikimWidget widget : YikimWidgets.all()) {
                if (!widget.id().equals(this.draggingWidget)) continue;
                name = widget.label();
                break;
            }
            this.cacheDragHint = name + " \u2022 " + YikimPanel.regionLabel(state.region) + (String)(this.dragMoved ? " \u2022 x " + state.offsetX + " y " + state.offsetY : " \u2022 s\u00fcr\u00fckleyerek ta\u015f\u0131") + " \u2022 sa\u011f t\u0131k k\u00f6\u015fe, orta t\u0131k s\u0131f\u0131rla";
        }
        return this.cacheDragHint;
    }

    private String hoveredHint() {
        for (Row row : this.rows) {
            if (row.hint == null || row.y < this.listTop - 1 || row.y + row.height() > this.listBottom + 24 || !row.hit(this.mouseX, this.mouseY)) continue;
            return row.hint;
        }
        return null;
    }

    private void refresh(class_310 client) {
        long now = System.currentTimeMillis();
        if (now - this.cacheAt < 500L) {
            return;
        }
        this.cacheAt = now;
        YikimConfig config = YikimConfig.get();
        this.cacheFps = YikimMetrics.fps();
        this.cacheStats = "FPS " + this.cacheFps + "   \u2022   " + YikimPresets.byId((String)this.selectedPreset).label + "   \u2022   HUD " + String.format(Locale.ROOT, "%.2f", YikimMetrics.hudCostMillis()) + " ms";
        this.cacheHudScale = "\u00d6l\u00e7ek " + Math.round(config.hudScale * 100.0f) + "%";
        this.cacheMeasured = this.cacheFps + " FPS  \u2022  " + String.format(Locale.ROOT, "%.2f", YikimMetrics.hudCostMillis()) + " ms HUD  \u2022  " + String.format(Locale.ROOT, "%.2f", YikimMetrics.tickCostMillis()) + " ms tik";
        this.cacheRenderRow = String.valueOf(client.field_1690.method_42503().method_41753()) + " chunk";
        this.cacheSimRow = String.valueOf(client.field_1690.method_42510().method_41753()) + " chunk";
        this.cacheParticles = YikimAdapter.optionLabel("particles", YikimAdapter.optionValue(client.field_1690, "particles"));
        this.cacheClouds = YikimAdapter.optionLabel("clouds", YikimAdapter.optionValue(client.field_1690, "clouds"));
        this.cacheVsync = (Boolean)client.field_1690.method_42433().method_41753() != false ? "a\u00e7\u0131k" : "kapal\u0131";
        int limit = (Integer)client.field_1690.method_42524().method_41753();
        this.cacheFrameLimit = limit >= 260 ? "s\u0131n\u0131rs\u0131z" : Integer.toString(limit);
        this.cachePalette = "Ge\u00e7erli vurgu: #" + String.format(Locale.ROOT, "%06X", YikimTheme.accent & 0xFFFFFF);
        this.cacheSession = "Bu oturum: " + YikimMetrics.clock(YikimMetrics.sessionMillis());
        this.cacheNotification = YikimMetrics.shortNotification().isEmpty() ? "\u2014" : YikimMetrics.shortNotification();
        String source = YikimCatalog.source();
        this.cacheCatalogStatus = YikimCatalog.loading() ? "Aran\u0131yor\u2026" : (!YikimCatalog.error().isEmpty() ? YikimCatalog.error() : YikimCatalog.total() + " sonu\u00e7  \u2022  " + YikimCatalog.hits().size() + " g\u00f6steriliyor  \u2022  " + source);
        int queued = YikimCatalog.queue().size();
        this.cacheQueueStatus = queued == 0 ? "Kurulum kuyru\u011fu bo\u015f" : queued + " mod kurulmay\u0131 bekliyor";
        this.refreshSlow(client);
    }

    private void refreshSlow(class_310 client) {
        long now = System.currentTimeMillis();
        if (now - this.cacheSlowAt < 2000L) {
            return;
        }
        this.cacheSlowAt = now;
        this.selectedPreset = YikimPresets.currentId();
        this.cacheStats = "FPS " + this.cacheFps + "   \u2022   " + YikimPresets.byId((String)this.selectedPreset).label + "   \u2022   HUD " + String.format(Locale.ROOT, "%.2f", YikimMetrics.hudCostMillis()) + " ms";
        this.cacheDescription = YikimPresets.byId((String)this.selectedPreset).description;
        this.cacheBackdrop = "Arka plan: " + YikimBackdrop.sessionLabel() + "  \u2022  " + YikimBackdrop.costLine();
        this.cacheModsCount = FabricLoader.getInstance().getAllMods().size() + " mod y\u00fckl\u00fc";
        this.cacheSystemLines = YikimVideo.systemLines();
        this.cacheStateSummary = YikimMetrics.stateSummary();
        this.refreshGraph();
        this.refreshDiagnostics();
    }

    private void refreshGraph() {
        List<Integer> samples = YikimMetrics.graphSamples();
        if (samples.size() != this.cacheGraphSize) {
            this.cacheGraph = new int[samples.size()];
            this.cacheGraphSize = samples.size();
        }
        for (int index = 0; index < this.cacheGraph.length; ++index) {
            this.cacheGraph[index] = samples.get(index);
        }
    }

    private void refreshDiagnostics() {
        String diagnostics = YikimMetrics.lastDiagnostics();
        if (diagnostics.equals(this.cacheDiagnosticsSource)) {
            return;
        }
        this.cacheDiagnosticsSource = diagnostics;
        this.cacheDiagnosticsLines.clear();
        if (!diagnostics.isEmpty()) {
            this.cacheDiagnosticsLines.addAll(YikimPanel.wrap(class_310.method_1551().field_1772, diagnostics, this.listW - 8));
        }
    }

    private void syncCatalog() {
        int revision = YikimCatalog.revision();
        if (revision != this.cachedCatalogRevision) {
            this.cachedCatalogRevision = revision;
            this.rebuild();
        }
    }

    private void syncCurve() {
        int revision = YikimMetrics.curveRevision();
        boolean running = YikimAbTest.running();
        if (revision == this.cachedCurveRevision && running == this.cachedAbRunning) {
            return;
        }
        this.cachedCurveRevision = revision;
        this.cachedAbRunning = running;
        this.rebuild();
    }

    private void rebuild() {
        this.rows.clear();
        switch (this.tab) {
            case 1: {
                this.buildLook();
                break;
            }
            case 2: {
                this.buildHud();
                break;
            }
            case 3: {
                this.buildExtra();
                break;
            }
            case 4: {
                this.buildMods();
                break;
            }
            case 5: {
                this.buildSystem();
                break;
            }
            default: {
                this.buildPerformance();
            }
        }
        this.applyFilter();
        this.layout();
    }

    private void applyFilter() {
        if (this.filterLower.isEmpty() || this.tab == 4) {
            return;
        }
        int write = 0;
        for (int read = 0; read < this.rows.size(); ++read) {
            Row row = this.rows.get(read);
            if (row.label == null || !row.label.toLowerCase(Locale.ROOT).contains(this.filterLower)) continue;
            this.rows.set(write++, row);
        }
        while (this.rows.size() > write) {
            this.rows.remove(this.rows.size() - 1);
        }
        if (write == 0) {
            this.rows.add(new TextRow(this, "Bu sekmede e\u015fle\u015fen ayar yok.", -9539974));
        }
    }

    private void layout() {
        int cursor = this.listTop + 4 - this.scroll;
        for (Row row : this.rows) {
            row.x = this.listX;
            row.width = this.listW;
            row.y = cursor;
            row.sync();
            cursor += row.height() + row.gap();
        }
        int content = cursor - (this.listTop + 4 - this.scroll) + 8;
        this.maxScroll = Math.max(0, content - (this.listBottom - this.listTop));
        if (this.scroll > this.maxScroll) {
            this.scroll = this.maxScroll;
        }
    }

    private void buildPerformance() {
        this.rows.add(new SectionRow(this, "Haz\u0131r profiller"));
        this.rows.add(new PresetRow());
        this.rows.add(new TextRow(this, () -> this.cacheDescription, -6645082));
        this.rows.add(new SectionRow(this, "\u015eu anki de\u011ferler"));
        this.rows.add(new ValueRow(this, "G\u00f6r\u00fc\u015f mesafesi", () -> this.cacheRenderRow, -723722));
        this.rows.add(new ValueRow(this, "Sim\u00fclasyon mesafesi", () -> this.cacheSimRow, -723722));
        this.rows.add(new ValueRow(this, "Par\u00e7ac\u0131klar", () -> this.cacheParticles, -723722));
        this.rows.add(new ValueRow(this, "Bulutlar", () -> this.cacheClouds, -723722));
        this.rows.add(new ValueRow(this, "V-Sync", () -> this.cacheVsync, -723722));
        this.rows.add(new ValueRow(this, "Kare s\u0131n\u0131r\u0131", () -> this.cacheFrameLimit, -723722));
        this.rows.add(new SectionRow(this, "\u00d6l\u00e7\u00fclen"));
        this.rows.add(new ValueRow(this, "Kare h\u0131z\u0131", () -> this.cacheMeasured, -11870592));
        this.rows.add(new GraphRow());
        this.rows.add(new SectionRow(this, "Sahiplik"));
        this.rows.add(new TextRow(this, "Profiller yaln\u0131zca sen bast\u0131\u011f\u0131nda yaz\u0131l\u0131r; se\u00e7im ba\u015flat\u0131c\u0131ya bildirilir,", -9539974));
        this.rows.add(new TextRow(this, "b\u00f6ylece iki taraf birbirinin ayar\u0131n\u0131 ezmez.", -9539974));
        this.rows.add(new ButtonRow(this, "Ba\u015flat\u0131c\u0131 profilini geri al", false, () -> {
            YikimPresets.releaseToLauncher();
            this.selectedPreset = YikimPresets.currentId();
            this.cacheAt = 0L;
            this.rebuild();
        }));
    }

    private void buildLook() {
        this.rows.add(new SectionRow(this, "Renk paleti"));
        this.rows.add(new SegmentRow(PALETTE_NAMES, this.paletteIndex(), index -> {
            YikimTheme.setCustom(PALETTE_ACCENT[index] | 0xFF000000, PALETTE_ACCENT2[index] | 0xFF000000, PALETTE_BACKDROP[index] | 0xFF000000);
            YikimBackdrop.invalidate();
            this.cacheAt = 0L;
            this.rebuild();
        }));
        this.rows.add(new ValueRow(this, "Ge\u00e7erli vurgu", () -> this.cachePalette, YikimTheme.accent));
        this.rows.add(new ButtonRow(this, "Renkleri ba\u015flat\u0131c\u0131dan al", false, () -> {
            YikimTheme.adoptLauncher();
            YikimBackdrop.invalidate();
            this.cacheAt = 0L;
            this.rebuild();
        }));
        this.rows.add(new ButtonRow(this, "Turuncuya d\u00f6n", false, () -> {
            YikimTheme.setCustom(-34280, -49920, -16119284);
            YikimBackdrop.invalidate();
            this.cacheAt = 0L;
            this.rebuild();
        }));
        this.rows.add(new SectionRow(this, "Arka plan"));
        this.rows.add(new SegmentRow(BACKDROP_NAMES, this.backdropIndex(), index -> {
            YikimConfig config = YikimConfig.get();
            config.backdropStyle = YikimBackdrop.STYLES[index];
            config.save();
            YikimBackdrop.invalidate();
            this.cacheAt = 0L;
        }));
        this.rows.add(new ButtonRow(this, "Sonraki tasar\u0131m", false, () -> {
            YikimBackdrop.invalidate();
            YikimMetrics.notify("Arka plan: " + YikimBackdrop.cycle());
            this.cacheAt = 0L;
            this.rebuild();
        }));
        this.rows.add(new SectionRow(this, "Men\u00fc"));
        this.rows.add(new ToggleRow("YIKIM ana men\u00fcs\u00fc", "Kapat\u0131rsan vanilla ba\u015fl\u0131k ekran\u0131 g\u00f6r\u00fcn\u00fcr.", () -> YikimConfig.get().customMainMenu, value -> {
            YikimConfig current = YikimConfig.get();
            current.customMainMenu = value;
            current.save();
            YikimMetrics.notify(value != false ? "Ana men\u00fc: YIKIM (sonraki a\u00e7\u0131l\u0131\u015fta)" : "Ana men\u00fc: vanilla (sonraki a\u00e7\u0131l\u0131\u015fta)");
        }));
        this.rows.add(new TextRow(this, "Men\u00fc takas\u0131 bir sonraki a\u00e7\u0131l\u0131\u015fta ge\u00e7erli olur.", -9539974));
        this.rows.add(new ValueRow(this, "Y\u00fckl\u00fc mod", () -> this.cacheModsCount, -723722));
        this.rows.add(new ValueRow(this, "Oturum", () -> this.cacheSession, -6645082));
    }

    private void buildHud() {
        YikimConfig config = YikimConfig.get();
        this.rows.add(new ToggleRow("HUD a\u00e7\u0131k", "Kapat\u0131nca hi\u00e7bir \u00f6\u011fe \u00e7izilmez.", () -> YikimConfig.get().hudEnabled, value -> {
            YikimConfig current = YikimConfig.get();
            current.hudEnabled = value;
            current.save();
            YikimLayout.invalidate();
        }));
        this.rows.add(new SliderRow("\u00d6l\u00e7ek", 0.5, 2.0, () -> YikimConfig.get().hudScale, value -> {
            YikimConfig current = YikimConfig.get();
            current.hudScale = (float)value;
            current.save();
            YikimLayout.invalidate();
        }, true));
        this.rows.add(new ToggleRow("Arka plan", "\u00d6\u011felerin arkas\u0131na koyu kart \u00e7izer.", () -> YikimConfig.get().hudBackdrop, value -> {
            YikimConfig current = YikimConfig.get();
            current.hudBackdrop = value;
            current.save();
        }));
        this.rows.add(new ToggleRow("Yaz\u0131 g\u00f6lgesi", "Okunurluk i\u00e7in g\u00f6lge.", () -> YikimConfig.get().hudShadow, value -> {
            YikimConfig current = YikimConfig.get();
            current.hudShadow = value;
            current.save();
        }));
        this.rows.add(new SegmentRow(new String[]{"\u00c7ip", "Sade"}, "sade".equalsIgnoreCase(YikimConfig.get().hudStyle) ? 1 : 0, index -> {
            YikimConfig current = YikimConfig.get();
            current.hudStyle = index == 1 ? "sade" : "cip";
            current.save();
            YikimWidgets.invalidate();
            YikimLayout.invalidate();
            this.rebuild();
        }));
        this.rows.add(new TextRow(this, () -> "sade".equalsIgnoreCase(YikimConfig.get().hudStyle) ? "Sade g\u00f6r\u00fcn\u00fcm: dolum yok, \u00f6\u011fe ba\u015f\u0131na iki sat\u0131r yaz\u0131 (ilk s\u00fcr\u00fcm\u00fcn maliyeti)." : "\u00c7ip g\u00f6r\u00fcn\u00fcm\u00fc: cam kart + b\u00fcy\u00fck de\u011fer (ilk modun dili).", -9539974));
        this.rows.add(new SectionRow(this, "FPS \u00f6l\u00e7\u00fcm\u00fc \u2014 son 30 saniye"));
        this.rows.add(new ValueRow(this, "\u00d6l\u00e7\u00fcm", () -> this.cacheStateSummary.isEmpty() ? "hen\u00fcz \u00f6rnek yok" : this.cacheStateSummary, -723722));
        this.rows.add(new TextRow(this, "HUD'u kapat\u0131p 30 saniye bekle: sat\u0131r 'd\u00fcnya' ile 'd\u00fcnya/HUD kapal\u0131'", -9539974));
        this.rows.add(new TextRow(this, "kar\u015f\u0131la\u015ft\u0131rmas\u0131n\u0131 yazar. Ayn\u0131 sat\u0131r log dosyas\u0131na da d\u00fc\u015fer.", -9539974));
        this.rows.add(new SectionRow(this, "Dakika e\u011frisi \u2014 oturum boyunca"));
        List<String> curve = YikimMetrics.curveRows();
        if (curve.isEmpty()) {
            this.rows.add(new TextRow(this, "Hen\u00fcz bir dakika dolmad\u0131: d\u00fcnyada 1 dakika kal\u0131nca burada", -9539974));
            this.rows.add(new TextRow(this, "dakika ba\u015f\u0131na FPS ve y\u0131\u011f\u0131n/GC sat\u0131r\u0131 g\u00f6r\u00fcn\u00fcr (log'a da d\u00fc\u015fer).", -9539974));
        }
        for (String line : curve) {
            this.rows.add(new TextRow(this, line, -723722));
        }
        this.rows.add(new TextRow(this, "Y\u0131\u011f\u0131n/GC sat\u0131r\u0131 dakika dakika art\u0131yorsa mod bir \u015feyleri biriktiriyor", -9539974));
        this.rows.add(new TextRow(this, "demektir; sabit kal\u0131yorsa ortada biriken bir i\u015f yok.", -9539974));
        this.rows.add(new SectionRow(this, "A/B \u00f6l\u00e7\u00fcm\u00fc \u2014 tek oturumda karar"));
        this.rows.add(new TextRow(this, "Fazlar: her \u015fey a\u00e7\u0131k \u2192 mod duraklat\u0131ld\u0131 \u2192 HUD kapal\u0131 \u2192", -9539974));
        this.rows.add(new TextRow(this, "her \u015fey a\u00e7\u0131k (tekrar). Her faz 30 sn, ilk 5 sn \u0131s\u0131nma say\u0131l\u0131r.", -9539974));
        if (YikimAbTest.running()) {
            this.rows.add(new ValueRow(this, "S\u00fcr\u00fcyor", YikimAbTest::statusLine, YikimTheme.accent));
            this.rows.add(new ButtonRow(this, "A/B \u00f6l\u00e7\u00fcm\u00fcn\u00fc iptal et", false, YikimAbTest::cancel));
        } else {
            this.rows.add(new ButtonRow(this, "A/B \u00f6l\u00e7\u00fcm\u00fc ba\u015flat (4 \u00d7 30 sn)", true, () -> {
                YikimAbTest.start();
                YikimPanel.close();
            }));
        }
        for (String line : YikimAbTest.resultRows()) {
            this.rows.add(new TextRow(this, line, -723722));
        }
        this.rows.add(new ToggleRow("Mod duraklat (tan\u0131)", "HUD \u00e7izilmez; tema, katalog ve men\u00fc takas\u0131 durur. \u00d6l\u00e7\u00fcm s\u00fcrmeye devam eder.", () -> YikimConfig.get().paused, value -> {
            YikimConfig current = YikimConfig.get();
            current.paused = value;
            current.save();
            if (value.booleanValue()) {
                YikimMetrics.notify("Mod duraklat\u0131ld\u0131: kare yolunda hi\u00e7bir \u015fey \u00e7izilmiyor");
            }
            this.rebuild();
        }));
        this.rows.add(new SectionRow(this, "\u00d6\u011feler \u2014 sol t\u0131k a\u00e7/kapa, sa\u011f t\u0131k k\u00f6\u015fe, orta t\u0131k s\u0131f\u0131rla"));
        for (YikimWidget widget : YikimWidgets.all()) {
            this.rows.add(new WidgetRow(widget));
        }
        this.rows.add(new SectionRow(this, "D\u00fczen"));
        this.rows.add(new ButtonRow(this, "Tam ekran HUD d\u00fczenle", false, () -> {
            // panel kalkar, matris ızgaralı editöre geçilir (sağ shift / esc ile dönülür)
            this.editorMode = true;
        }));
        this.rows.add(new ButtonRow(this, "Konumlar\u0131 s\u0131f\u0131rla", false, () -> {
            this.resetOffsets();
            this.rebuild();
        }));
        this.rows.add(new ButtonRow(this, "Yerle\u015fimi s\u0131f\u0131rla", false, () -> {
            this.resetLayout();
            this.rebuild();
        }));
        this.rows.add(new ButtonRow(this, "Hepsi a\u00e7\u0131k", false, () -> {
            YikimConfig current = YikimConfig.get();
            for (YikimWidget widget : YikimWidgets.all()) {
                current.widget((String)widget.id()).enabled = true;
            }
            current.save();
            YikimLayout.invalidate();
            this.rebuild();
        }));
        this.rows.add(new TextRow(this, "\u00d6\u011feleri do\u011frudan ekranda s\u00fcr\u00fckleyebilirsin; t\u0131klamak yerlerini", -9539974));
        this.rows.add(new TextRow(this, "de\u011fi\u015ftirmez. Bir k\u00f6\u015fedeki \u00f6\u011feler s\u0131rayla yerle\u015fir, ta\u015f\u0131nan \u00f6\u011fe", -9539974));
        this.rows.add(new TextRow(this, "kom\u015fular\u0131n\u0131 kayd\u0131rmaz; yaz\u0131lar hi\u00e7bir zaman \u00fcst \u00fcste binmez.", -9539974));
    }

    private void resetOffsets() {
        YikimConfig config = YikimConfig.get();
        int count = 0;
        for (YikimWidget widget : YikimWidgets.all()) {
            YikimConfig.WidgetState state = config.widget(widget.id());
            if (state.offsetX == 0 && state.offsetY == 0) continue;
            state.offsetX = 0;
            state.offsetY = 0;
            ++count;
        }
        config.save();
        YikimLayout.invalidate();
        YikimMetrics.notify((String)(count == 0 ? "Ta\u015f\u0131nm\u0131\u015f \u00f6\u011fe yok" : count + " \u00f6\u011fenin konumu s\u0131f\u0131rland\u0131"));
        this.cacheAt = 0L;
    }

    private void buildExtra() {
        this.rows.add(new SectionRow(this, "K\u0131sayollar"));
        this.rows.add(new ValueRow(this, "YIKIM men\u00fcs\u00fc", () -> "Sa\u011f Shift", YikimTheme.accent));
        this.rows.add(new ValueRow(this, "HUD a\u00e7/kapa", () -> "Sa\u011f Ctrl", YikimTheme.accent));
        this.rows.add(new ValueRow(this, "Profil de\u011fi\u015ftir", () -> "Sa\u011f Alt", YikimTheme.accent));
        this.rows.add(new ValueRow(this, "Yak\u0131nla\u015ft\u0131r (bas\u0131l\u0131 tut)", () -> "Sol Alt", YikimTheme.accent));
        this.rows.add(new ValueRow(this, "Sekme de\u011fi\u015ftir", () -> "Tab", YikimTheme.accent));
        this.rows.add(new SectionRow(this, "Ba\u015flang\u0131\u00e7"));
        this.rows.add(new ToggleRow("\u0130lk giri\u015fte paneli hat\u0131rlat", "D\u00fcnyaya ilk giri\u015fte HUD bildirimi.", () -> YikimConfig.get().openOnFirstJoin, value -> {
            YikimConfig current = YikimConfig.get();
            current.openOnFirstJoin = value;
            current.save();
        }));
        this.rows.add(new SectionRow(this, "Bildirim"));
        this.rows.add(new ValueRow(this, "Son bildirim", () -> this.cacheNotification, -723722));
        this.rows.add(new ValueRow(this, "Oturum s\u00fcresi", () -> this.cacheSession, -723722));
        this.rows.add(new SectionRow(this, "K\u00f6pr\u00fc"));
        this.rows.add(new TextRow(this, "Katalog ve kurulum i\u015flerini ba\u015flat\u0131c\u0131 yapar; mod a\u011fa \u00e7\u0131kmaz.", -9539974));
        this.rows.add(new TextRow(this, "Oyun i\u00e7i se\u00e7imler .yikim klas\u00f6r\u00fcndeki dosyalarla bildirilir.", -9539974));
    }

    private void buildMods() {
        this.rows.add(new SegmentRow(new String[]{"Kurulu modlar", "Katalog"}, this.modView, index -> {
            this.modView = index;
            this.filter = "";
            this.filterLower = "";
            this.scroll = 0;
            this.cachedCatalogRevision = Integer.MIN_VALUE;
            if (this.modView == 1) {
                YikimCatalog.ensureResults();
            }
            this.rebuild();
        }));
        if (this.modView == 1) {
            this.buildCatalog();
            return;
        }
        this.buildInstalled();
    }

    private void buildInstalled() {
        this.rows.add(new SectionRow(this, "Y\u00fckl\u00fc " + YikimModBridge.loadedCount() + " \u2022 devre d\u0131\u015f\u0131 " + YikimModBridge.disabledCount()));
        int shown = 0;
        for (YikimModBridge.ModEntry mod : YikimModBridge.mods()) {
            if (!this.filterLower.isEmpty() && !mod.name.toLowerCase(Locale.ROOT).contains(this.filterLower) && !mod.id.toLowerCase(Locale.ROOT).contains(this.filterLower)) continue;
            this.rows.add(new ModRow(mod));
            ++shown;
        }
        if (shown == 0) {
            this.rows.add(new TextRow(this, "E\u015fle\u015fen mod yok.", -9539974));
        }
        int pending = YikimModBridge.pendingCount();
        this.rows.add(new SectionRow(this, "Uygulama"));
        this.rows.add(new TextRow(this, (String)(pending == 0 ? "A\u00e7/kapat i\u00e7in sat\u0131ra t\u0131kla; de\u011fi\u015fiklik oyun kapan\u0131nca uygulan\u0131r." : pending + " de\u011fi\u015fiklik haz\u0131r: oyun kapan\u0131nca jar'lar yeniden adland\u0131r\u0131l\u0131r ve oyun geri a\u00e7\u0131l\u0131r."), pending == 0 ? -9539974 : -723722));
        this.rows.add(new TextRow(this, "YIKIM kendi jar'\u0131n\u0131 ve Fabric API'yi kapatmaz.", -6645082));
    }

    private void buildCatalog() {
        this.rows.add(new SegmentRow(new String[]{"Modrinth", "CurseForge"}, YikimCatalog.source().equals("curseforge") ? 1 : 0, index -> {
            String wanted;
            String string = wanted = index == 1 ? "curseforge" : "modrinth";
            if (!wanted.equals(YikimCatalog.source())) {
                YikimCatalog.toggleSource();
            }
            this.cachedCatalogRevision = Integer.MIN_VALUE;
            this.rebuild();
        }));
        this.rows.add(new TextRow(this, () -> this.cacheCatalogStatus, YikimCatalog.error().isEmpty() ? -6645082 : -340971));
        this.rows.add(new SectionRow(this, "Sonu\u00e7lar"));
        List<YikimBridge.CatalogHit> hits = YikimCatalog.hits();
        if (hits.isEmpty()) {
            this.rows.add(new TextRow(this, () -> YikimCatalog.loading() ? "Aran\u0131yor\u2026" : "Mod ad\u0131 yaz ya da Enter'a bas; ba\u015flat\u0131c\u0131 aramay\u0131 yapar.", -9539974));
        }
        for (int index2 = 0; index2 < hits.size(); ++index2) {
            this.rows.add(new CatalogRow(hits.get(index2), index2));
        }
        this.rows.add(new SectionRow(this, "Kurulum"));
        this.rows.add(new TextRow(this, () -> this.cacheQueueStatus, YikimCatalog.queue().isEmpty() ? -9539974 : -723722));
        this.rows.add(new TextRow(this, "\"Uygula\" deyince oyun kapan\u0131r; ba\u015flat\u0131c\u0131 indirir ve geri a\u00e7ar.", -9539974));
    }

    private void buildSystem() {
        this.rows.add(new SectionRow(this, "Sistem"));
        for (String line : this.cacheSystemLines) {
            this.rows.add(new TextRow(this, line, -6645082));
        }
        this.rows.add(new SectionRow(this, "Te\u015fhis"));
        this.rows.add(new ToggleRow("30 saniyede bir te\u015fhis sat\u0131r\u0131", "\u00d6l\u00e7\u00fcm sat\u0131r\u0131 g\u00fcnl\u00fc\u011fe yaz\u0131l\u0131r.", () -> YikimConfig.get().showDiagnostics, value -> {
            YikimConfig current = YikimConfig.get();
            current.showDiagnostics = value;
            current.save();
        }));
        this.rows.add(new ToggleRow("Te\u015fhisi sohbete de yaz", null, () -> YikimConfig.get().diagnosticsToChat, value -> {
            YikimConfig current = YikimConfig.get();
            current.diagnosticsToChat = value;
            current.save();
        }));
        this.rows.add(new SectionRow(this, "Son te\u015fhis"));
        if (this.cacheDiagnosticsLines.isEmpty()) {
            this.rows.add(new TextRow(this, "Hen\u00fcz \u00f6rnek yok (d\u00fcnyada 30 saniye bekle).", -9539974));
        }
        for (String line : this.cacheDiagnosticsLines) {
            this.rows.add(new TextRow(this, line, -6645082));
        }
        this.rows.add(new SectionRow(this, "Bak\u0131m"));
        this.rows.add(new ValueRow(this, "Aray\u00fcz \u00f6l\u00e7\u00fcm\u00fc", () -> YikimUiMetrics.summary(), -6645082));
        this.rows.add(new ButtonRow(this, "\u00d6l\u00e7\u00fcm\u00fc s\u0131f\u0131rla", false, () -> {
            YikimUiMetrics.reset();
            this.cacheAt = 0L;
            this.rebuild();
        }));
    }

    boolean click(double mouseX, double mouseY, int button) {
        int sy;
        int sx;
        class_327 font = this.currentFont();
        if (font == null) {
            return false;
        }
        if (this.editorMode) {
            // editörde tüm ekran widget alanıdır; panel arayüzü yok
            if (button == 1) {
                return this.cycleRegionAt(mouseX, mouseY);
            }
            if (button == 2) {
                return this.resetOffsetAt(mouseX, mouseY);
            }
            this.startWidgetDrag(mouseX, mouseY);
            return true;
        }
        if (!YikimDraw.inside(mouseX, mouseY, this.px1, this.py1, this.px2 - this.px1, this.py2 - this.py1)) {
            this.searchFocused = false;
            if (this.tab == 2) {
                if (button == 1) {
                    return this.cycleRegionAt(mouseX, mouseY);
                }
                if (button == 2) {
                    return this.resetOffsetAt(mouseX, mouseY);
                }
                return this.startWidgetDrag(mouseX, mouseY);
            }
            return false;
        }
        int searchWidth = this.searchW(font);
        if (searchWidth > 0 && YikimDraw.inside(mouseX, mouseY, sx = this.searchX(font), sy = this.py1 + 30 + 2, searchWidth, 20)) {
            this.searchFocused = true;
            return true;
        }
        int tabY = this.py1 + 30 + 2;
        for (int index = 0; index < TAB_NAMES.length; ++index) {
            if (!YikimDraw.inside(mouseX, mouseY, this.tabX(font, index), tabY, this.tabWidth(font, index), 20)) continue;
            this.tab = index;
            this.scroll = 0;
            this.searchFocused = false;
            this.dragging = null;
            this.rebuild();
            return true;
        }
        int commitWidth = this.commitWidth(font);
        if (commitWidth > 0 && YikimDraw.inside(mouseX, mouseY, this.commitX(font), this.py2 - 26 + 4, commitWidth, 18)) {
            if (button == 0 && this.applyModChanges()) {
                YikimMetrics.notify("De\u011fi\u015fiklikler kaydedildi \u2014 oyun kapan\u0131nca uygulanacak");
                class_310.method_1551().method_1592();
            }
            return true;
        }
        if (button == 0 && mouseX >= (double)(this.trackX - 6) && mouseX <= (double)(this.trackX + 4 + 4) && mouseY >= (double)this.listTop && mouseY <= (double)this.listBottom) {
            this.scrollDragging = true;
            this.scrollTo(mouseY);
            return true;
        }
        if (mouseY >= (double)this.listTop && mouseY <= (double)this.listBottom) {
            for (Row row : this.rows) {
                if (!row.hit(mouseX, mouseY)) continue;
                row.click(mouseX, mouseY, button);
                return true;
            }
        }
        return true;
    }

    void release(double mouseX, double mouseY, int button) {
        this.scrollDragging = false;
        if (this.dragging != null) {
            this.dragging.release();
            this.dragging = null;
            YikimConfig.get().save();
        }
        if (this.draggingWidget != null) {
            if (this.dragMoved) {
                YikimConfig.get().save();
                YikimMetrics.notify("HUD konumu kaydedildi");
            }
            this.draggingWidget = null;
            this.dragSlot = null;
            this.dragMoved = false;
            this.cacheAt = 0L;
            this.rebuild();
        }
    }

    void drag(double mouseX, double mouseY) {
        if (this.scrollDragging) {
            this.scrollTo(mouseY);
            return;
        }
        if (this.dragging != null) {
            this.dragging.drag(mouseX, mouseY);
            return;
        }
        if (this.draggingWidget != null) {
            if (!this.dragMoved) {
                if (Math.abs(mouseX - this.dragStartX) + Math.abs(mouseY - this.dragStartY) < 2.0) {
                    return;
                }
                this.beginWidgetMove(mouseX, mouseY);
                return;
            }
            YikimConfig config = YikimConfig.get();
            YikimConfig.WidgetState state = config.widget(this.draggingWidget);
            state.offsetX = YikimPanel.clampOffset(this.dragOriginOffsetX + (int)Math.round(mouseX - this.dragStartX));
            state.offsetY = YikimPanel.clampOffset(this.dragOriginOffsetY + (int)Math.round(mouseY - this.dragStartY));
            YikimLayout.invalidate();
        }
    }

    private static int clampOffset(int value) {
        return Math.max(-400, Math.min(400, value));
    }

    boolean scroll(double mouseX, double mouseY, double amount) {
        if (this.editorMode) {
            // editörde tekerlek: üzerindeki widgetın ölçeğini %10 kaydır
            return this.scaleWidgetAt(mouseX, mouseY, (int)Math.signum(amount));
        }
        int direction = (int)Math.signum(amount);
        this.scroll = Math.max(0, Math.min(this.maxScroll, this.scroll - direction * 22));
        this.layout();
        return true;
    }

    /** Editör: imlecin altındaki widgetın ölçeğini adım adım büyüt/küçült. */
    private boolean scaleWidgetAt(double mouseX, double mouseY, int direction) {
        if (direction == 0 || this.draggingWidget != null) {
            return true;
        }
        for (YikimLayout.Slot slot : this.slots) {
            if (!slot.contains(mouseX, mouseY)) continue;
            YikimConfig config = YikimConfig.get();
            YikimConfig.WidgetState state = config.widget(slot.widget.id());
            state.scale = Math.max(0.6f, Math.min(2.0f, state.scale + 0.1f * (float)direction));
            config.save();
            YikimLayout.invalidate();
            this.slots = YikimLayout.arrange(this.currentFont(), this.screenW, this.screenH);
            YikimMetrics.notify(slot.widget.label() + " \u00f6l\u00e7ek %" + Math.round(state.scale * 100.0f));
            return true;
        }
        return true;
    }

    boolean key(int keyCode) {
        if (this.editorMode) {
            // editörde tek amaç: çıkmak. ESC panele döner; Sağ Shift ScreenBase'de yakalanır.
            if (keyCode == 256) {
                this.exitEditor();
            }
            return true;
        }
        switch (keyCode) {
            case 258: {
                this.tab = (this.tab + 1) % TAB_NAMES.length;
                this.scroll = 0;
                this.searchFocused = false;
                this.dragging = null;
                this.rebuild();
                return true;
            }
            case 259: {
                return this.backspace();
            }
            case 257: 
            case 335: {
                if (this.tab == 4 && this.modView == 1) {
                    YikimCatalog.search();
                    return true;
                }
                return false;
            }
        }
        return false;
    }

    boolean typed(char character) {
        if (this.tab == 4) {
            this.searchFocused = true;
            if (this.modView == 1) {
                YikimCatalog.append(character);
                YikimCatalog.markDirty();
            } else if (this.filter.length() < 32 && !Character.isISOControl(character)) {
                this.filter = this.filter + character;
                this.filterLower = this.filter.toLowerCase(Locale.ROOT);
                this.rebuild();
            }
            return true;
        }
        if (!this.searchFocused) {
            return false;
        }
        if (this.filter.length() < 32 && !Character.isISOControl(character)) {
            this.filter = this.filter + character;
            this.filterLower = this.filter.toLowerCase(Locale.ROOT);
            this.rebuild();
        }
        return true;
    }

    private boolean backspace() {
        if (this.tab == 4) {
            if (this.modView == 1) {
                YikimCatalog.backspace();
                YikimCatalog.markDirty();
            } else if (!this.filter.isEmpty()) {
                this.filter = this.filter.substring(0, this.filter.length() - 1);
                this.filterLower = this.filter.toLowerCase(Locale.ROOT);
                this.rebuild();
            }
            return true;
        }
        if (this.searchFocused && !this.filter.isEmpty()) {
            this.filter = this.filter.substring(0, this.filter.length() - 1);
            this.filterLower = this.filter.toLowerCase(Locale.ROOT);
            this.rebuild();
            return true;
        }
        return false;
    }

    private class_327 currentFont() {
        class_310 client = class_310.method_1551();
        return client == null ? null : client.field_1772;
    }

    private String searchText() {
        if (this.tab == 4) {
            return this.modView == 1 ? YikimCatalog.query() : this.filter;
        }
        return this.filter;
    }

    private String placeholder() {
        if (this.tab == 4) {
            return this.modView == 1 ? "Mod ara\u2026" : "Kurulu modlarda ara\u2026";
        }
        return "Ayarlarda ara\u2026";
    }

    private boolean tabLabels(class_327 font) {
        if (this.px2 - this.px1 < 520) {
            return false;
        }
        return this.searchRoom(true, font) >= 96;
    }

    private int searchRoom(boolean withLabels, class_327 font) {
        return this.px2 - 10 - this.lastTabEnd(withLabels, font) - 10;
    }

    private int searchW(class_327 font) {
        if (font == null) {
            return 0;
        }
        int room = this.searchRoom(this.tabLabels(font), font);
        if (room < 80) {
            return 0;
        }
        return Math.min(240, room);
    }

    private int searchX(class_327 font) {
        return this.px2 - 10 - this.searchW(font);
    }

    private int lastTabEnd(boolean withLabels, class_327 font) {
        int x = this.px1 + 10;
        for (int index = 0; index < TAB_NAMES.length; ++index) {
            x += this.tabWidthFor(withLabels, font, index) + 3;
        }
        return x - 3;
    }

    private int tabWidthFor(boolean labels, class_327 font, int index) {
        if (!labels || font == null) {
            return 26;
        }
        return font.method_1727(TAB_NAMES[index]) + 32;
    }

    private int tabWidth(class_327 font, int index) {
        return this.tabWidthFor(this.tabLabels(font), font, index);
    }

    private int tabX(class_327 font, int index) {
        int x = this.px1 + 10;
        for (int i = 0; i < index; ++i) {
            x += this.tabWidth(font, i) + 3;
        }
        return x;
    }

    private int barTop() {
        int track = Math.max(1, this.listBottom - this.listTop);
        int height = this.barHeight();
        return this.listTop + (int)((float)this.scroll / (float)Math.max(1, this.maxScroll) * (float)(track - height));
    }

    private int barHeight() {
        int track = Math.max(1, this.listBottom - this.listTop);
        int content = track + this.maxScroll;
        return Math.max(18, track * track / Math.max(1, content));
    }

    private void scrollTo(double mouseY) {
        int track = Math.max(1, this.listBottom - this.listTop);
        int height = this.barHeight();
        int top = (int)(mouseY - (double)height / 2.0);
        int travel = Math.max(1, track - height);
        int offset = Math.max(0, Math.min(travel, top - this.listTop));
        this.scroll = Math.max(0, Math.min(this.maxScroll, (int)((float)offset / (float)travel * (float)this.maxScroll)));
        this.layout();
    }

    private int paletteIndex() {
        for (int index = 0; index < PALETTE_ACCENT.length; ++index) {
            if ((PALETTE_ACCENT[index] | 0xFF000000) != YikimTheme.accent) continue;
            return index;
        }
        return -1;
    }

    private int backdropIndex() {
        String style = YikimConfig.get().backdropStyle;
        for (int index = 0; index < YikimBackdrop.STYLES.length; ++index) {
            if (!YikimBackdrop.STYLES[index].equals(style)) continue;
            return index;
        }
        return YikimBackdrop.STYLES.length - 1;
    }

    private int commitWidth(class_327 font) {
        int pending = this.pendingModChanges();
        if (this.tab != 4 || pending == 0) {
            return 0;
        }
        if (pending != this.cacheCommitCount) {
            this.cacheCommitCount = pending;
            this.cacheCommitWidthPx = Math.min(260, font.method_1727("Uygula ve oyunu yeniden ba\u015flat (00)") + 24);
        }
        return this.cacheCommitWidthPx;
    }

    private int pendingModChanges() {
        return YikimCatalog.queue().size() + YikimModBridge.pendingCount();
    }

    private boolean applyModChanges() {
        List<String[]> decisions = YikimModBridge.decisions();
        List<String[]> installs = YikimCatalog.queueCopy();
        if (decisions.isEmpty() && installs.isEmpty()) {
            return false;
        }
        if (!YikimBridge.requestRestart("oyun-ici-mod-degisikligi", decisions, installs)) {
            YikimMetrics.notify("\u0130stek yaz\u0131lamad\u0131 (oyun klas\u00f6r\u00fc salt okunur olabilir)");
            return false;
        }
        YikimModBridge.clearPending();
        YikimCatalog.clearQueue();
        this.cacheAt = 0L;
        this.rebuild();
        return true;
    }

    private int commitX(class_327 font) {
        return this.px2 - 10 - this.commitWidth(font);
    }

    /**
     * Tam ekran HUD editörü — panel kalkar, yerine matris ızgarası gelir.
     * Sürükle: taşı · Sağ tık: bölge · Orta tık: sıfırla · Tekerlek: ölçek.
     */
    private void drawEditor(class_332 graphics, class_327 font, int screenWidth, int screenHeight, int mouseX, int mouseY) {
        // ince örtü: oyun görünür kalır, editör alanı belli olsun
        graphics.method_25294(0, 0, screenWidth, screenHeight, 0x30000000);
        // matris ızgarası — vurgu renginde ince çizgiler
        int gridColor = YikimTheme.alpha(YikimTheme.accent, 22);
        int step = 32;
        for (int x = 0; x < screenWidth; x += step) {
            graphics.method_25294(x, 0, x + 1, screenHeight, gridColor);
        }
        for (int y = 0; y < screenHeight; y += step) {
            graphics.method_25294(0, y, screenWidth, y + 1, gridColor);
        }
        // orta eksenler — biraz daha görünür
        int axisColor = YikimTheme.alpha(YikimTheme.accent, 42);
        graphics.method_25294(screenWidth / 2, 0, screenWidth / 2 + 1, screenHeight, axisColor);
        graphics.method_25294(0, screenHeight / 2, screenWidth, screenHeight / 2 + 1, axisColor);
        // widgetlar (canlı, edit çizimli)
        for (YikimLayout.Slot slot : this.slots) {
            YikimAdapter.push(graphics, slot.x, slot.y, slot.scale);
            slot.widget.draw(graphics, font, true);
            YikimAdapter.pop(graphics);
        }
        // kutular + taşıma kulpları
        for (YikimLayout.Slot slot : this.slots) {
            boolean active = slot.contains(mouseX, mouseY) || slot.widget.id().equals(this.draggingWidget);
            int color = active ? YikimTheme.accent : YikimTheme.alpha(YikimTheme.accent, 110);
            YikimDraw.outline(graphics, slot.x, slot.y, slot.width, slot.height, color);
            graphics.method_25294(slot.x - 2, slot.y - 2, slot.x + 6, slot.y + 6, color);
            if (active) {
                YikimConfig.WidgetState state = YikimConfig.get().widget(slot.widget.id());
                String tag = slot.widget.label() + "  \u00b7  %" + Math.round(state.scale * 100.0f) + "  \u00b7  " + YikimPanel.regionLabel(state.region);
                YikimAdapter.text(graphics, font, tag, Math.max(4, slot.x), Math.max(14, slot.y - 11), YikimTheme.accent, true);
            }
        }
        // üst ipucu şeridi
        String hint = "S\u00fcr\u00fckle: ta\u015f\u0131  \u00b7  Sa\u011f t\u0131k: k\u00f6\u015fe de\u011fi\u015ftir  \u00b7  Orta t\u0131k: s\u0131f\u0131rla  \u00b7  Tekerlek: \u00f6l\u00e7ek  \u00b7  Sa\u011f Shift / ESC: bitir";
        YikimDraw.roundedFill(graphics, screenWidth / 2 - 240, 4, screenWidth / 2 + 240, 22, -2013265920);
        YikimAdapter.textCentered(graphics, font, hint, screenWidth / 2, 9, YikimTheme.accent, true);
    }

    private boolean startWidgetDrag(double mouseX, double mouseY) {
        for (YikimLayout.Slot slot : this.slots) {
            if (!slot.contains(mouseX, mouseY)) continue;
            YikimConfig.WidgetState state = YikimConfig.get().widget(slot.widget.id());
            this.draggingWidget = slot.widget.id();
            this.dragSlot = slot;
            this.dragStartX = mouseX;
            this.dragStartY = mouseY;
            this.dragOriginOffsetX = state.offsetX;
            this.dragOriginOffsetY = state.offsetY;
            this.dragMoved = false;
            return true;
        }
        return false;
    }

    private void beginWidgetMove(double mouseX, double mouseY) {
        if (this.dragSlot != null) {
            YikimLayout.detach(this.dragSlot, this.screenW, this.screenH);
        }
        YikimConfig.WidgetState state = YikimConfig.get().widget(this.draggingWidget);
        this.dragOriginOffsetX = state.offsetX;
        this.dragOriginOffsetY = state.offsetY;
        this.dragStartX = mouseX;
        this.dragStartY = mouseY;
        this.dragMoved = true;
        YikimLayout.invalidate();
    }

    private boolean resetOffsetAt(double mouseX, double mouseY) {
        for (YikimLayout.Slot slot : this.slots) {
            if (!slot.contains(mouseX, mouseY)) continue;
            YikimConfig config = YikimConfig.get();
            YikimConfig.WidgetState state = config.widget(slot.widget.id());
            state.offsetX = 0;
            state.offsetY = 0;
            config.save();
            YikimLayout.invalidate();
            YikimMetrics.notify(slot.widget.label() + " konumu s\u0131f\u0131rland\u0131");
            this.cacheAt = 0L;
            this.rebuild();
            return true;
        }
        return false;
    }

    private boolean cycleRegionAt(double mouseX, double mouseY) {
        for (YikimLayout.Slot slot : this.slots) {
            if (!slot.contains(mouseX, mouseY)) continue;
            this.cycleRegion(slot.widget);
            return true;
        }
        return false;
    }

    private void cycleRegion(YikimWidget widget) {
        YikimConfig config = YikimConfig.get();
        YikimConfig.WidgetState state = config.widget(widget.id());
        YikimWidget.Region[] regions = YikimWidget.Region.values();
        YikimWidget.Region current = YikimPanel.regionOf(state.region);
        YikimWidget.Region next = regions[(current.ordinal() + 1) % regions.length];
        state.region = next.name();
        state.offsetX = 0;
        state.offsetY = 0;
        config.save();
        YikimLayout.invalidate();
        YikimMetrics.notify(widget.label() + " \u2192 " + next.label());
        this.cacheAt = 0L;
        this.rebuild();
    }

    private void resetLayout() {
        YikimConfig config = YikimConfig.get();
        for (YikimWidget widget : YikimWidgets.all()) {
            YikimConfig.WidgetState state = config.widget(widget.id());
            state.region = widget.region().name();
            state.order = widget.defaultOrder();
            state.offsetX = 0;
            state.offsetY = 0;
            state.scale = 1.0f;
            state.enabled = widget.defaultEnabled();
        }
        config.save();
        YikimLayout.invalidate();
        YikimMetrics.notify("HUD yerle\u015fimi s\u0131f\u0131rland\u0131");
        this.cacheAt = 0L;
    }

    private static String regionLabel(String raw) {
        if ("TOP_RIGHT".equals(raw)) {
            return "Sa\u011f \u00fcst";
        }
        if ("BOTTOM_LEFT".equals(raw)) {
            return "Sol alt";
        }
        if ("BOTTOM_RIGHT".equals(raw)) {
            return "Sa\u011f alt";
        }
        return "Sol \u00fcst";
    }

    private static YikimWidget.Region regionOf(String raw) {
        try {
            return YikimWidget.Region.valueOf(raw);
        }
        catch (IllegalArgumentException ignored) {
            return YikimWidget.Region.TOP_LEFT;
        }
    }

    private static List<String> wrap(class_327 font, String text, int maxWidth) {
        ArrayList<String> lines = new ArrayList<String>();
        StringBuilder current = new StringBuilder();
        for (String word : text.split(" ")) {
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
        return lines;
    }

    private void switchAt(class_332 graphics, int x, int y, boolean on, boolean hovered) {
        int track;
        int n = track = on ? YikimTheme.accent : -13487558;
        if (hovered) {
            track = YikimDraw.blend(track, -1, 0.18f);
        }
        YikimDraw.roundedFill(graphics, x, y, x + 22, y + 11, track);
        int knobX = on ? x + 12 : x + 2;
        YikimDraw.roundedFill(graphics, knobX, y + 2, knobX + 8, y + 9, -723722);
    }

    private abstract class Row {
        final String label;
        final String hint;
        int x;
        int y;
        int width;
        float hover;

        Row(String label, String hint) {
            this.label = label;
            this.hint = hint;
        }

        abstract int height();

        int gap() {
            return 3;
        }

        void sync() {
        }

        boolean hit(double mouseX, double mouseY) {
            return YikimDraw.inside(mouseX, mouseY, this.x, this.y, this.width, this.height());
        }

        boolean click(double mouseX, double mouseY, int button) {
            return true;
        }

        void drag(double mouseX, double mouseY) {
        }

        void release() {
        }

        void base(class_332 graphics, boolean on) {
            boolean hovered = this.hit(YikimPanel.this.mouseX, YikimPanel.this.mouseY);
            this.hover += ((hovered ? 1.0f : 0.0f) - this.hover) * 0.35f;
            if (this.hover > 0.02f) {
                graphics.method_25294(this.x, this.y, this.x + this.width, this.y + this.height(), YikimTheme.alpha(1710628, (int)(192.0f * this.hover)));
            } else if (on) {
                graphics.method_25294(this.x, this.y, this.x + this.width, this.y + this.height(), 0x22000000);
            }
        }

        abstract void render(class_332 var1, class_327 var2, int var3, int var4);
    }

    private final class TextRow
    extends Row {
        private final Supplier<String> text;
        private final int color;
        private final int lines;
        private String shown = "";

        TextRow(YikimPanel yikimPanel, String text, int color) {
            this(yikimPanel, () -> text, color);
        }

        TextRow(YikimPanel yikimPanel, Supplier<String> text, int color) {
            super(null, null);
            this.text = text;
            this.color = color;
            this.lines = 1;
        }

        @Override
        int height() {
            return 12 * this.lines;
        }

        @Override
        int gap() {
            return 2;
        }

        @Override
        void sync() {
            String value = this.text.get();
            this.shown = value == null ? "" : value;
        }

        @Override
        void render(class_332 graphics, class_327 font, int mouseX, int mouseY) {
            YikimAdapter.text(graphics, font, YikimDraw.clip(font, this.shown, this.width), this.x + 8, this.y + 1, this.color, false);
        }
    }

    private final class SectionRow
    extends Row {
        SectionRow(YikimPanel yikimPanel, String title) {
            super(title, null);
        }

        @Override
        int height() {
            return 18;
        }

        @Override
        int gap() {
            return 6;
        }

        @Override
        void render(class_332 graphics, class_327 font, int mouseX, int mouseY) {
            int labelY = this.y + this.height() - 7;
            String text = this.label.toUpperCase(Locale.ROOT);
            YikimAdapter.text(graphics, font, text, this.x + 2, labelY, YikimTheme.accent, true);
            int labelWidth = font.method_1727(text);
            YikimDraw.separator(graphics, this.x + labelWidth + 10, labelY + 4, Math.max(0, this.width - labelWidth - 10));
        }
    }

    private final class PresetRow
    extends Row {
        PresetRow() {
            super("Haz\u0131r profiller", "Profiller g\u00f6r\u00fc\u015f mesafesini, par\u00e7ac\u0131klar\u0131 ve grafik ayarlar\u0131n\u0131 birlikte de\u011fi\u015ftirir.");
        }

        @Override
        int height() {
            return 26;
        }

        private int segmentWidth() {
            int count = YikimPresets.PRESETS.size();
            return Math.max(40, (this.width - (count - 1) * 4) / count);
        }

        private int segmentAt(double mouseX) {
            if (YikimPanel.this.mouseY < this.y || YikimPanel.this.mouseY > this.y + this.height()) {
                return -1;
            }
            int count = YikimPresets.PRESETS.size();
            for (int index = 0; index < count; ++index) {
                int sx = this.x + index * (this.segmentWidth() + 4);
                if (!(mouseX >= (double)sx) || !(mouseX <= (double)(sx + this.segmentWidth()))) continue;
                return index;
            }
            return -1;
        }

        @Override
        boolean click(double mouseX, double mouseY, int button) {
            int index = this.segmentAt(mouseX);
            if (button != 0 || index < 0 || index >= YikimPresets.PRESETS.size()) {
                return true;
            }
            YikimPanel.this.selectedPreset = YikimPresets.apply(class_310.method_1551(), YikimPresets.PRESETS.get((int)index).id);
            YikimPanel.this.cacheAt = 0L;
            YikimPanel.this.rebuild();
            return true;
        }

        @Override
        void render(class_332 graphics, class_327 font, int mouseX, int mouseY) {
            int hovered = this.segmentAt(mouseX);
            int count = YikimPresets.PRESETS.size();
            for (int index = 0; index < count; ++index) {
                YikimPresets.Preset preset = YikimPresets.PRESETS.get(index);
                int sx = this.x + index * (this.segmentWidth() + 4);
                int segW = this.segmentWidth();
                boolean selected = preset.id.equals(YikimPanel.this.selectedPreset);
                int fill = selected ? YikimTheme.alpha(YikimTheme.accent, 216) : (hovered == index ? -1996488705 : 0x66111118);
                YikimDraw.roundedFill(graphics, sx, this.y, sx + segW, this.y + this.height(), fill);
                String text = YikimDraw.clip(font, preset.label, segW - 10);
                YikimAdapter.text(graphics, font, text, sx + Math.max(4, (segW - font.method_1727(text)) / 2), this.y + 9, selected ? -15724524 : -6645082, !selected);
            }
        }
    }

    private final class ValueRow
    extends Row {
        private final Supplier<String> value;
        private final int valueColor;

        ValueRow(YikimPanel yikimPanel, String label, Supplier<String> value, int valueColor) {
            super(label, null);
            this.value = value;
            this.valueColor = valueColor;
        }

        @Override
        int height() {
            return 24;
        }

        @Override
        void render(class_332 graphics, class_327 font, int mouseX, int mouseY) {
            this.base(graphics, false);
            String text = this.value.get();
            if (text == null) {
                text = "";
            }
            int textY = this.y + (this.height() - 8) / 2;
            int available = this.width - 20;
            int valueWidth = font.method_1727(text);
            if (valueWidth > available / 2) {
                text = YikimDraw.clip(font, text, available / 2);
                valueWidth = font.method_1727(text);
            }
            YikimAdapter.text(graphics, font, YikimDraw.clip(font, this.label, available - valueWidth - 12), this.x + 8, textY, -723722, true);
            if (!text.isEmpty()) {
                YikimAdapter.text(graphics, font, text, this.x + this.width - valueWidth - 8, textY, this.valueColor, true);
            }
        }
    }

    private final class GraphRow
    extends Row {
        GraphRow() {
            super("Kare h\u0131z\u0131 grafi\u011fi", null);
        }

        @Override
        int height() {
            return 34;
        }

        @Override
        void render(class_332 graphics, class_327 font, int mouseX, int mouseY) {
            YikimDraw.card(graphics, this.x, this.y, this.width, this.height());
            YikimDraw.sparkline(graphics, this.x + 4, this.y + 4, this.width - 8, this.height() - 8, YikimPanel.this.cacheGraph, YikimTheme.accent);
        }
    }

    private final class ButtonRow
    extends Row {
        private final boolean primary;
        private final Runnable action;

        ButtonRow(YikimPanel yikimPanel, String label, boolean primary, Runnable action) {
            super(label, null);
            this.primary = primary;
            this.action = action;
        }

        @Override
        int height() {
            return 22;
        }

        @Override
        boolean click(double mouseX, double mouseY, int button) {
            if (button == 0) {
                this.action.run();
            }
            return true;
        }

        @Override
        void render(class_332 graphics, class_327 font, int mouseX, int mouseY) {
            boolean hovered = this.hit(mouseX, mouseY);
            int fill = this.primary ? YikimTheme.alpha(YikimTheme.accent, hovered ? 240 : 200) : (hovered ? -1440472018 : 1712591897);
            YikimDraw.roundedFill(graphics, this.x, this.y, this.x + this.width, this.y + this.height(), fill);
            int color = this.primary ? -15724524 : -723722;
            String text = YikimDraw.clip(font, this.label, this.width - 12);
            YikimAdapter.text(graphics, font, text, this.x + Math.max(8, (this.width - font.method_1727(text)) / 2), this.y + (this.height() - 8) / 2, color, !this.primary);
        }
    }

    private final class SegmentRow
    extends Row {
        private final String[] labels;
        private final IntConsumer pick;
        private int selected;

        SegmentRow(String[] labels, int selected, IntConsumer pick) {
            super(labels.length > 0 ? labels[0] : "", null);
            this.labels = labels;
            this.selected = selected;
            this.pick = pick;
        }

        @Override
        int height() {
            return 26;
        }

        private int segmentWidth() {
            return Math.max(34, (this.width - (this.labels.length - 1) * 4) / this.labels.length);
        }

        private int segmentAt(double mouseX) {
            if (YikimPanel.this.mouseY < this.y || YikimPanel.this.mouseY > this.y + this.height()) {
                return -1;
            }
            for (int index = 0; index < this.labels.length; ++index) {
                int sx = this.x + index * (this.segmentWidth() + 4);
                if (!(mouseX >= (double)sx) || !(mouseX <= (double)(sx + this.segmentWidth()))) continue;
                return index;
            }
            return -1;
        }

        @Override
        boolean click(double mouseX, double mouseY, int button) {
            int index = this.segmentAt(mouseX);
            if (button != 0 || index < 0) {
                return true;
            }
            this.selected = index;
            this.pick.accept(index);
            return true;
        }

        @Override
        void render(class_332 graphics, class_327 font, int mouseX, int mouseY) {
            int hovered = this.segmentAt(mouseX);
            for (int index = 0; index < this.labels.length; ++index) {
                boolean selected;
                int sx = this.x + index * (this.segmentWidth() + 4);
                int segW = this.segmentWidth();
                boolean bl = selected = index == this.selected;
                int fill = selected ? YikimTheme.alpha(YikimTheme.accent, 216) : (hovered == index ? -1996488705 : 0x66111118);
                YikimDraw.roundedFill(graphics, sx, this.y, sx + segW, this.y + this.height(), fill);
                String text = YikimDraw.clip(font, this.labels[index], segW - 8);
                YikimAdapter.text(graphics, font, text, sx + Math.max(3, (segW - font.method_1727(text)) / 2), this.y + 9, selected ? -15724524 : -6645082, !selected);
            }
        }
    }

    private final class ToggleRow
    extends Row {
        private final BooleanSupplier getter;
        private final Consumer<Boolean> setter;

        ToggleRow(String label, String hint, BooleanSupplier getter, Consumer<Boolean> setter) {
            super(label, hint);
            this.getter = getter;
            this.setter = setter;
        }

        @Override
        int height() {
            return 24;
        }

        @Override
        boolean click(double mouseX, double mouseY, int button) {
            if (button != 0) {
                return true;
            }
            this.setter.accept(!this.getter.getAsBoolean());
            YikimPanel.this.cacheAt = 0L;
            YikimPanel.this.rebuild();
            return true;
        }

        @Override
        void render(class_332 graphics, class_327 font, int mouseX, int mouseY) {
            boolean on = this.getter.getAsBoolean();
            this.base(graphics, on);
            YikimAdapter.text(graphics, font, YikimDraw.clip(font, this.label, this.width - 60), this.x + 8, this.y + (this.height() - 8) / 2, on ? -723722 : -6645082, true);
            YikimPanel.this.switchAt(graphics, this.x + this.width - 30, this.y + (this.height() - 11) / 2, on, this.hit(mouseX, mouseY));
        }
    }

    private final class SliderRow
    extends Row {
        private final double min;
        private final double max;
        private final DoubleSupplier getter;
        private final DoubleConsumer setter;
        private final boolean percent;
        private String shown;

        SliderRow(String label, double min, double max, DoubleSupplier getter, DoubleConsumer setter, boolean percent) {
            super(label, null);
            this.shown = "";
            this.min = min;
            this.max = max;
            this.getter = getter;
            this.setter = setter;
            this.percent = percent;
        }

        @Override
        int height() {
            return 28;
        }

        @Override
        void sync() {
            double value = this.getter.getAsDouble();
            this.shown = this.percent ? Math.round(value * 100.0) + "%" : String.format(Locale.ROOT, "%.2f", value);
        }

        private int trackY() {
            return this.y + 17;
        }

        private int trackWidth() {
            return Math.max(20, this.width - 24);
        }

        @Override
        boolean click(double mouseX, double mouseY, int button) {
            if (button != 0) {
                return true;
            }
            YikimPanel.this.dragging = this;
            this.drag(mouseX, mouseY);
            YikimConfig.get().save();
            return true;
        }

        @Override
        void drag(double mouseX, double mouseY) {
            double ratio = (mouseX - (double)(this.x + 12)) / (double)this.trackWidth();
            double value = this.min + Math.max(0.0, Math.min(1.0, ratio)) * (this.max - this.min);
            this.setter.accept((double)Math.round(value * 100.0) / 100.0);
            this.sync();
        }

        @Override
        void render(class_332 graphics, class_327 font, int mouseX, int mouseY) {
            this.base(graphics, false);
            YikimAdapter.text(graphics, font, this.label, this.x + 8, this.y + 3, -723722, true);
            YikimAdapter.text(graphics, font, this.shown, this.x + this.width - font.method_1727(this.shown) - 8, this.y + 3, YikimTheme.accent, true);
            int left = this.x + 12;
            YikimDraw.roundedFill(graphics, left, this.trackY(), left + this.trackWidth(), this.trackY() + 5, 0x33FFFFFF);
            double ratio = (this.getter.getAsDouble() - this.min) / Math.max(1.0E-4, this.max - this.min);
            int filled = (int)((double)this.trackWidth() * Math.max(0.0, Math.min(1.0, ratio)));
            YikimDraw.roundedFill(graphics, left, this.trackY(), left + Math.max(4, filled), this.trackY() + 5, YikimTheme.accent);
            int knobX = left + filled;
            YikimDraw.roundedFill(graphics, knobX - 2, this.trackY() - 4, knobX + 3, this.trackY() + 9, -723722);
        }
    }

    private final class WidgetRow
    extends Row {
        private final YikimWidget widget;
        private final String region;

        WidgetRow(YikimWidget widget) {
            super(widget.label(), widget.label() + " \u2014 sol t\u0131k a\u00e7/kapa, sa\u011f t\u0131k k\u00f6\u015fe, orta t\u0131k konumu s\u0131f\u0131rla");
            this.widget = widget;
            this.region = YikimPanel.regionLabel(YikimConfig.get().widget((String)widget.id()).region);
        }

        @Override
        int height() {
            return 20;
        }

        @Override
        boolean click(double mouseX, double mouseY, int button) {
            if (button == 1) {
                YikimPanel.this.cycleRegion(this.widget);
                return true;
            }
            YikimConfig config = YikimConfig.get();
            YikimConfig.WidgetState state = config.widget(this.widget.id());
            state.enabled = !state.enabled;
            config.save();
            YikimLayout.invalidate();
            YikimPanel.this.rebuild();
            return true;
        }

        @Override
        void render(class_332 graphics, class_327 font, int mouseX, int mouseY) {
            YikimConfig.WidgetState state = YikimConfig.get().widget(this.widget.id());
            boolean on = state.enabled;
            this.base(graphics, on);
            YikimPanel.this.switchAt(graphics, this.x + 8, this.y + (this.height() - 11) / 2, on, this.hit(mouseX, mouseY));
            YikimAdapter.text(graphics, font, YikimDraw.clip(font, this.label, this.width - 130), this.x + 38, this.y + (this.height() - 8) / 2, on ? -723722 : -6645082, true);
            boolean moved = state.offsetX != 0 || state.offsetY != 0;
            Object tag = moved ? this.region + " \u2022 ta\u015f\u0131nd\u0131" : this.region;
            int tagWidth = font.method_1727((String)tag);
            YikimAdapter.text(graphics, font, (String)tag, this.x + this.width - tagWidth - 8, this.y + (this.height() - 8) / 2, moved ? YikimTheme.accent : -9539974, false);
        }
    }

    private final class ModRow
    extends Row {
        private final YikimModBridge.ModEntry mod;

        ModRow(YikimModBridge.ModEntry mod) {
            super(mod.name, mod.name + (mod.toggleable() ? " \u2014 sol t\u0131k a\u00e7/kapat" : " \u2014 bu mod kapat\u0131lamaz (YIKIM/Fabric API)"));
            this.mod = mod;
        }

        @Override
        int height() {
            return 23;
        }

        @Override
        boolean click(double mouseX, double mouseY, int button) {
            if (button == 0 && this.mod.toggleable()) {
                YikimModBridge.toggle(this.mod);
                YikimPanel.this.cacheAt = 0L;
                YikimPanel.this.rebuild();
            }
            return true;
        }

        @Override
        void render(class_332 graphics, class_327 font, int mouseX, int mouseY) {
            boolean on = this.mod.enabled();
            this.base(graphics, on);
            if (YikimModBridge.isPending(this.mod.id)) {
                graphics.method_25294(this.x, this.y + 3, this.x + 3, this.y + this.height() - 3, -340971);
            }
            // düzen: [bekleme çubuğu] ikon · isim/meta · [switch sağda]
            int iconX = this.x + 10;
            if (this.mod.builtin) {
                YikimIcons.drawBadge(graphics, font, iconX, this.y + 3, 17);
            } else {
                YikimIcons.draw(graphics, font, this.mod.fileName, null, this.mod.name, iconX, this.y + 3, 17);
            }
            int textX = this.x + 32;
            int switchX = this.x + this.width - 32;
            int textWidth = switchX - textX - 8;
            YikimAdapter.text(graphics, font, YikimDraw.clip(font, this.label, textWidth), textX, this.y + 3, this.mod.toggleable() ? -723722 : -6645082, true);
            YikimAdapter.text(graphics, font, YikimDraw.clip(font, this.mod.meta(), textWidth), textX, this.y + 13, -9539974, false);
            // switch satırın sağında — ikonla asla çakışmaz
            YikimPanel.this.switchAt(graphics, switchX, this.y + (this.height() - 11) / 2, on, this.hit(mouseX, mouseY));
        }
    }

    private final class CatalogRow
    extends Row {
        private final YikimBridge.CatalogHit hit;
        private final int index;
        private final String meta;

        CatalogRow(YikimBridge.CatalogHit hit, int index) {
            super(hit.title, hit.title + " \u2014 " + hit.description);
            this.hit = hit;
            this.index = index;
            this.meta = hit.author + "  \u2022  " + YikimCatalog.prettyDownloads(hit.downloads) + " indirme";
        }

        @Override
        int height() {
            return 30;
        }

        @Override
        boolean click(double mouseX, double mouseY, int button) {
            if (button != 0) {
                return true;
            }
            if (YikimCatalog.isQueued(this.hit.slug)) {
                YikimCatalog.dequeue(this.hit.slug);
            } else {
                YikimCatalog.queue(this.hit);
            }
            YikimPanel.this.cachedCatalogRevision = Integer.MIN_VALUE;
            return true;
        }

        @Override
        void render(class_332 graphics, class_327 font, int mouseX, int mouseY) {
            boolean queued = YikimCatalog.isQueued(this.hit.slug);
            boolean hovered = this.hit(mouseX, mouseY);
            int fill = queued ? YikimTheme.alpha(YikimTheme.accent, 34) : (hovered ? -1441129948 : 0x66111118);
            YikimDraw.roundedFill(graphics, this.x, this.y, this.x + this.width, this.y + this.height(), fill);
            // accent çizgisi yalnızca kuyruğa alınmış veya hover'dayken çizilsin —
            // aksi halde 40 satırın çizgileri birleşip solda "rastgele renkli sütun" görünür
            if (queued || hovered) {
                graphics.method_25294(this.x, this.y + 3, this.x + 3, this.y + this.height() - 3, queued ? YikimTheme.accent : YikimTheme.alpha(YikimTheme.accent, 85));
            }
            int actionWidth = 52;
            // ikon: katalog yanıtının 7. kolonu (Modrinth/CurseForge görseli)
            YikimIcons.draw(graphics, font, "catalog:" + this.hit.slug, this.hit.icon, this.hit.title, this.x + 10, this.y + 4, 22);
            int textX = this.x + 38;
            int textRoom = this.width - actionWidth - 52;
            YikimAdapter.text(graphics, font, YikimDraw.clip(font, this.hit.title, textRoom), textX, this.y + 4, -723722, true);
            YikimAdapter.text(graphics, font, YikimDraw.clip(font, this.meta, textRoom), textX, this.y + 15, -9539974, false);
            int ax = this.x + this.width - actionWidth - 8;
            int ay = this.y + 6;
            boolean actionHovered = YikimDraw.inside(mouseX, mouseY, ax, ay, actionWidth, 18);
            YikimDraw.roundedFill(graphics, ax, ay, ax + actionWidth, ay + 18, queued ? YikimTheme.alpha(YikimTheme.accent, actionHovered ? 240 : 192) : (actionHovered ? -869651914 : -2011950055));
            String action = queued ? "\u00c7\u0131kar" : "Ekle";
            YikimAdapter.text(graphics, font, action, ax + (actionWidth - font.method_1727(action)) / 2, ay + 5, queued ? -15724524 : -723722, !queued);
        }
    }
}

