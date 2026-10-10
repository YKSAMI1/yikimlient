/*
 * Decompiled with CFR 0.152.
 * 
 * Could not load the following classes:
 *  net.minecraft.class_310
 *  net.minecraft.class_327
 */
package com.yikimlient.client;

import com.yikimlient.client.YikimConfig;
import com.yikimlient.client.YikimWidget;
import com.yikimlient.client.YikimWidgets;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.EnumMap;
import java.util.List;
import java.util.Map;
import net.minecraft.class_310;
import net.minecraft.class_327;

public final class YikimLayout {
    private static final int MARGIN = 3;
    private static final int GAP = 2;
    private static final int BOTTOM_RESERVE = 26;
    private static final int EFFECT_ICON_HEIGHT = 26;
    private static List<Slot> cached = List.of();
    private static class_327 cachedFont;
    private static int cachedWidth;
    private static int cachedHeight;
    private static int cachedEffectCount;
    private static float cachedScale;
    private static int cachedRevision;
    private static int revision;

    private YikimLayout() {
    }

    public static void invalidate() {
        ++revision;
    }

    public static List<Slot> arrange(class_327 font, int screenWidth, int screenHeight) {
        YikimConfig config = YikimConfig.get();
        float scale = Math.max(0.5f, Math.min(2.0f, config.hudScale));
        int effects = YikimLayout.activeEffectCount();
        if (revision == cachedRevision && screenWidth == cachedWidth && screenHeight == cachedHeight && scale == cachedScale && font == cachedFont && effects == cachedEffectCount) {
            return cached;
        }
        ArrayList<YikimWidget> enabled = new ArrayList<YikimWidget>();
        for (YikimWidget yikimWidget : YikimWidgets.all()) {
            YikimConfig.WidgetState widgetState = config.widget(yikimWidget.id());
            if (!widgetState.enabled) continue;
            enabled.add(yikimWidget);
        }
        EnumMap<YikimWidget.Region, List<YikimWidget>> byRegion = new EnumMap<YikimWidget.Region, List<YikimWidget>>(YikimWidget.Region.class);
        for (YikimWidget yikimWidget : enabled) {
            YikimWidget.Region region = YikimLayout.regionOf(config, yikimWidget);
            byRegion.computeIfAbsent(region, key -> new ArrayList()).add(yikimWidget);
        }
        ArrayList<Slot> arrayList = new ArrayList<Slot>();
        for (Map.Entry<YikimWidget.Region, List<YikimWidget>> entry : byRegion.entrySet()) {
            List<YikimWidget> group = (List<YikimWidget>)entry.getValue();
            group.sort(Comparator.comparingInt(widget -> config.widget((String)widget.id()).order));
            YikimLayout.place(arrayList, (YikimWidget.Region)((Object)entry.getKey()), group, font, screenWidth, screenHeight, scale, config, effects);
        }
        cached = arrayList;
        cachedFont = font;
        cachedWidth = screenWidth;
        cachedHeight = screenHeight;
        cachedEffectCount = effects;
        cachedScale = scale;
        cachedRevision = revision;
        return arrayList;
    }

    private static void place(List<Slot> slots, YikimWidget.Region region, List<YikimWidget> group, class_327 font, int screenWidth, int screenHeight, float scale, YikimConfig config, int effects) {
        boolean top = region == YikimWidget.Region.TOP_LEFT || region == YikimWidget.Region.TOP_RIGHT;
        boolean left = region == YikimWidget.Region.TOP_LEFT || region == YikimWidget.Region.BOTTOM_LEFT;
        int reserve = YikimLayout.effectReserve(region, screenHeight, effects);
        int cursor = top ? 3 + reserve : screenHeight - 26 - 3;
        for (YikimWidget widget : group) {
            boolean free;
            YikimConfig.WidgetState state = config.widget(widget.id());
            // widget başına ölçek: global HUD ölçeği × öğenin kendi ölçeği (editörden tekerlekle ayarlanır)
            float widgetScale = Math.max(0.4f, Math.min(2.5f, scale * Math.max(0.5f, Math.min(2.0f, state.scale))));
            int width = Math.round((float)widget.width(font) * widgetScale);
            int height = Math.round((float)widget.height(font) * widgetScale);
            int anchorX = YikimLayout.anchorX(left, screenWidth, width);
            boolean bl = free = state.offsetX != 0 || state.offsetY != 0;
            int y = free ? YikimLayout.anchorY(top, screenHeight, height, reserve) + state.offsetY : (top ? cursor : cursor - height) + state.offsetY;
            int x = anchorX + state.offsetX;
            int minY = 3;
            int maxY = screenHeight - 3 - (top ? 0 : 26);
            y = Math.max(minY, Math.min(y, Math.max(minY, maxY - height)));
            x = Math.max(3, Math.min(x, Math.max(3, screenWidth - 3 - width)));
            slots.add(new Slot(widget, x, y, widgetScale, width, height));
            if (free) continue;
            cursor = top ? y + height + 2 : y - 2;
        }
    }

    public static void detach(Slot slot, int screenWidth, int screenHeight) {
        YikimConfig config = YikimConfig.get();
        YikimWidget.Region region = YikimLayout.regionOf(config, slot.widget);
        boolean top = region == YikimWidget.Region.TOP_LEFT || region == YikimWidget.Region.TOP_RIGHT;
        boolean left = region == YikimWidget.Region.TOP_LEFT || region == YikimWidget.Region.BOTTOM_LEFT;
        int reserve = YikimLayout.effectReserve(region, screenHeight, YikimLayout.activeEffectCount());
        YikimConfig.WidgetState state = config.widget(slot.widget.id());
        state.offsetX = slot.x - YikimLayout.anchorX(left, screenWidth, slot.width);
        state.offsetY = slot.y - YikimLayout.anchorY(top, screenHeight, slot.height, reserve);
    }

    private static int anchorX(boolean left, int screenWidth, int width) {
        return left ? 3 : screenWidth - 3 - width;
    }

    private static int anchorY(boolean top, int screenHeight, int height, int reserve) {
        return top ? 3 + reserve : screenHeight - 26 - 3 - height;
    }

    private static int activeEffectCount() {
        try {
            class_310 client = class_310.method_1551();
            return client.field_1724 == null ? 0 : client.field_1724.method_6026().size();
        }
        catch (Throwable ignored) {
            return 0;
        }
    }

    private static int effectReserve(YikimWidget.Region region, int screenHeight, int count) {
        if (region != YikimWidget.Region.TOP_RIGHT || count == 0) {
            return 0;
        }
        int maxRows = Math.max(1, (screenHeight - 50) / 26);
        return Math.min(count, maxRows) * 26;
    }

    private static YikimWidget.Region regionOf(YikimConfig config, YikimWidget widget) {
        String raw = config.widget((String)widget.id()).region;
        try {
            return YikimWidget.Region.valueOf(raw);
        }
        catch (IllegalArgumentException ignored) {
            return widget.region();
        }
    }

    static {
        cachedWidth = -1;
        cachedHeight = -1;
        cachedEffectCount = -1;
        cachedRevision = -1;
    }

    public static final class Slot {
        public final YikimWidget widget;
        public final int x;
        public final int y;
        public final float scale;
        public final int width;
        public final int height;

        Slot(YikimWidget widget, int x, int y, float scale, int width, int height) {
            this.widget = widget;
            this.x = x;
            this.y = y;
            this.scale = scale;
            this.width = width;
            this.height = height;
        }

        public boolean contains(double mouseX, double mouseY) {
            return mouseX >= (double)this.x && mouseX <= (double)(this.x + this.width) && mouseY >= (double)this.y && mouseY <= (double)(this.y + this.height);
        }
    }
}

