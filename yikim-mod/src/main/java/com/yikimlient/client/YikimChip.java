/*
 * Decompiled with CFR 0.152.
 * 
 * Could not load the following classes:
 *  net.minecraft.class_327
 *  net.minecraft.class_332
 */
package com.yikimlient.client;

import com.yikimlient.client.YikimAdapter;
import com.yikimlient.client.YikimConfig;
import com.yikimlient.client.YikimDraw;
import com.yikimlient.client.YikimTheme;
import java.util.ArrayList;
import java.util.List;
import net.minecraft.class_327;
import net.minecraft.class_332;

public final class YikimChip {
    static final float VALUE_SCALE = 1.25f;
    static final int PAD = 5;
    private static final int LINE_HEIGHT = 8;
    private static final int GRAPH_HEIGHT = 14;
    private static final int MIN_BAR_WIDTH = 56;
    private static final int MIN_GRAPH_WIDTH = 72;
    private static final int MAX_LINES = 2;
    public String caption = "";
    public String value = "";
    public String unit = "";
    public int valueColor = -723722;
    public final List<String> lines = new ArrayList<String>(2);
    public float bar = -1.0f;
    public int barColor = YikimTheme.accent;
    public int[] graph;
    public int graphColor = YikimTheme.accent;
    public boolean plain;
    private String plainCaption = "";
    private String plainValue = "";
    private String plainDetail = "";
    private int plainOffset;
    private int plainValueWidth;
    public int width;
    public int height;
    public int contentWidth;
    public int captionWidth;
    public int valueTextWidth;
    public int unitWidth;
    public int valueWidth;

    public void add(String line) {
        if (line != null && !line.isEmpty() && this.lines.size() < 2) {
            this.lines.add(line);
        }
    }

    public void reset() {
        this.caption = "";
        this.value = "";
        this.unit = "";
        this.valueColor = -723722;
        this.lines.clear();
        this.bar = -1.0f;
        this.barColor = YikimTheme.accent;
        this.graph = null;
        this.graphColor = YikimTheme.accent;
    }

    static int rowHeight() {
        return Math.max(11, Math.round(11.25f) + 2);
    }

    public void measure(class_327 font) {
        this.plain = "sade".equalsIgnoreCase(YikimConfig.get().hudStyle);
        if (this.plain) {
            this.measurePlain(font);
            return;
        }
        int left = 8;
        this.captionWidth = this.caption.isEmpty() ? 0 : font.method_1727(this.caption);
        this.valueTextWidth = 0;
        this.unitWidth = 0;
        if (!this.value.isEmpty()) {
            this.valueTextWidth = Math.round((float)font.method_1727(this.value) * 1.25f);
            if (!this.unit.isEmpty()) {
                this.unitWidth = font.method_1727(this.unit);
            }
        }
        this.valueWidth = this.valueTextWidth + (this.unitWidth > 0 ? 4 + this.unitWidth : 0);
        int content = this.captionWidth + (this.captionWidth > 0 && this.valueWidth > 0 ? 8 : 0) + this.valueWidth;
        int shown = Math.min(2, this.lines.size());
        for (int index = 0; index < shown; ++index) {
            content = Math.max(content, font.method_1727(this.lines.get(index)));
        }
        if (this.bar >= 0.0f) {
            content = Math.max(content, 56);
        }
        if (this.graph != null) {
            content = Math.max(content, 72);
        }
        int box = 9;
        if (this.captionWidth > 0 || this.valueWidth > 0) {
            box += YikimChip.rowHeight();
        }
        box += shown * 8;
        if (this.bar >= 0.0f) {
            box += 5;
        }
        if (this.graph != null) {
            box += 14;
        }
        this.contentWidth = content;
        this.width = content + left + 5;
        this.height = box;
    }

    private void measurePlain(class_327 font) {
        this.plainCaption = this.caption;
        this.plainValue = this.value + (String)(this.unit.isEmpty() ? "" : " " + this.unit);
        String string = this.plainDetail = this.lines.isEmpty() ? "" : this.lines.get(0);
        if (this.bar >= 0.0f) {
            String percent = Math.round(this.bar * 100.0f) + "%";
            this.plainDetail = this.plainDetail.isEmpty() ? percent : this.plainDetail + "  " + percent;
        }
        this.plainOffset = this.plainCaption.isEmpty() ? 0 : font.method_1727(this.plainCaption) + 5;
        this.plainValueWidth = this.plainValue.isEmpty() ? 0 : font.method_1727(this.plainValue);
        int detailWidth = this.plainDetail.isEmpty() ? 0 : font.method_1727(this.plainDetail);
        this.contentWidth = Math.max(this.plainOffset + this.plainValueWidth, detailWidth);
        this.width = this.contentWidth + 5;
        this.height = this.plainDetail.isEmpty() ? 11 : 20;
    }

    private void paintPlain(class_332 graphics, class_327 font, boolean shadow) {
        if (!this.plainCaption.isEmpty()) {
            YikimAdapter.text(graphics, font, this.plainCaption, 0, 1, -6645082, shadow);
        }
        if (this.plainValueWidth > 0) {
            YikimAdapter.text(graphics, font, this.plainValue, this.plainOffset, 1, this.valueColor, shadow);
        }
        if (!this.plainDetail.isEmpty()) {
            YikimAdapter.text(graphics, font, this.plainDetail, 0, 11, -6645082, shadow);
        }
    }

    public void paint(class_332 graphics, class_327 font, boolean shadow) {
        if (this.plain) {
            this.paintPlain(graphics, font, shadow);
            return;
        }
        int left = 8;
        YikimDraw.chip(graphics, 0, 0, this.width, this.height);
        int y = 4;
        int row = YikimChip.rowHeight();
        if (this.captionWidth > 0 || this.valueTextWidth > 0) {
            if (this.captionWidth > 0) {
                YikimAdapter.text(graphics, font, this.caption, left, y + 3, YikimTheme.accent, shadow);
            }
            if (this.valueTextWidth > 0) {
                int valueX = left + this.contentWidth - this.valueWidth;
                YikimDraw.textScaled(graphics, font, this.value, valueX, y + (row - Math.round(11.25f)) / 2, this.valueColor, shadow, 1.25f);
                if (this.unitWidth > 0) {
                    YikimAdapter.text(graphics, font, this.unit, valueX + this.valueTextWidth + 4, y + row - 10, -6645082, shadow);
                }
            }
            y += row;
        }
        int shown = Math.min(2, this.lines.size());
        for (int index = 0; index < shown; ++index) {
            YikimAdapter.text(graphics, font, this.lines.get(index), left, y + 1, -6645082, shadow);
            y += 8;
        }
        if (this.bar >= 0.0f) {
            YikimDraw.bar(graphics, left, y + 1, Math.max(56, this.contentWidth), 3, this.bar, this.barColor);
            y += 5;
        }
        if (this.graph != null) {
            YikimDraw.sparkline(graphics, left, y + 1, Math.max(72, this.contentWidth), 14, this.graph, this.graphColor);
        }
    }
}

