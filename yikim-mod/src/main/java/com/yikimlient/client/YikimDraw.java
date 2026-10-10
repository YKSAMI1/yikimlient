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
import com.yikimlient.client.YikimTheme;
import net.minecraft.class_327;
import net.minecraft.class_332;

public final class YikimDraw {
    private YikimDraw() {
    }

    public static void card(class_332 graphics, int x, int y, int width, int height) {
        if (YikimConfig.get().hudBackdrop) {
            graphics.method_25294(x, y, x + width, y + height, -1726737383);
        }
        graphics.method_25294(x, y, x + 2, y + height, YikimTheme.accent);
    }

    public static void chip(class_332 graphics, int x, int y, int width, int height) {
        if (YikimConfig.get().hudBackdrop) {
            graphics.method_25294(x, y, x + width, y + height, -435286510);
        }
        graphics.method_25294(x, y + 1, x + 3, y + height - 1, YikimTheme.accent);
    }

    public static void textScaled(class_332 graphics, class_327 font, String value, int x, int y, int color, boolean shadow, float scale) {
        if (scale == 1.0f) {
            YikimAdapter.text(graphics, font, value, x, y, color, shadow);
            return;
        }
        YikimAdapter.push(graphics, x, y, scale);
        YikimAdapter.text(graphics, font, value, 0, 0, color, shadow);
        YikimAdapter.pop(graphics);
    }

    public static void panel(class_332 graphics, int x, int y, int width, int height, String title, class_327 font) {
        graphics.method_25294(x, y, x + width, y + height, -435286510);
        graphics.method_25294(x, y, x + width, y + 1, YikimTheme.accent);
        graphics.method_25294(x, y + height - 1, x + width, y + height, 0x33FFFFFF);
        if (title != null && !title.isEmpty()) {
            YikimAdapter.text(graphics, font, title, x + 5, y + 3, YikimTheme.accent, true);
            graphics.method_25294(x, y + 12, x + width, y + 13, YikimTheme.alpha(YikimTheme.accent, 68));
        }
    }

    public static void tab(class_332 graphics, class_327 font, int x, int y, int width, int height, String label, boolean active, boolean hovered) {
        int background = active ? YikimTheme.alpha(YikimTheme.accent, 85) : (hovered ? -1726737383 : YikimTheme.alpha(YikimTheme.backdrop, 204));
        graphics.method_25294(x, y, x + width, y + height, background);
        if (active) {
            graphics.method_25294(x, y + height - 2, x + width, y + height, YikimTheme.accent);
        } else if (hovered) {
            graphics.method_25294(x, y + height - 1, x + width, y + height, YikimTheme.alpha(YikimTheme.accent, 136));
        }
        int color = active ? -723722 : -6645082;
        YikimAdapter.textCentered(graphics, font, label, x + width / 2, y + (height - 8) / 2 + 1, color, true);
    }

    public static void button(class_332 graphics, class_327 font, int x, int y, int width, int height, String label, boolean active, boolean hovered) {
        int fill = active ? (hovered ? YikimTheme.accent : YikimTheme.alpha(YikimTheme.accent, 170)) : (hovered ? -14277076 : -15066593);
        graphics.method_25294(x, y, x + width, y + height, fill);
        graphics.method_25294(x, y, x + width, y + 1, hovered ? 0x66FFFFFF : 0x33FFFFFF);
        YikimAdapter.textCentered(graphics, font, label, x + width / 2, y + (height - 8) / 2 + 1, active ? -15724524 : -723722, !active);
    }

    public static void toggle(class_332 graphics, class_327 font, int x, int y, int width, int height, String label, boolean value, boolean hovered) {
        graphics.method_25294(x, y, x + width, y + height, hovered ? -14803420 : -1726737383);
        YikimAdapter.text(graphics, font, label, x + 4, y + (height - 8) / 2 + 1, -723722, true);
        int switchWidth = 20;
        int switchX = x + width - switchWidth - 4;
        int switchY = y + (height - 10) / 2;
        graphics.method_25294(switchX, switchY, switchX + switchWidth, switchY + 10, value ? YikimTheme.alpha(YikimTheme.accent, 255) : -13487558);
        int knobX = value ? switchX + switchWidth - 9 : switchX + 1;
        graphics.method_25294(knobX, switchY + 1, knobX + 8, switchY + 9, -723722);
    }

    public static void bar(class_332 graphics, int x, int y, int width, int height, float ratio, int color) {
        graphics.method_25294(x, y, x + width, y + height, -14474454);
        int filled = (int)((float)width * Math.max(0.0f, Math.min(1.0f, ratio)));
        if (filled > 0) {
            graphics.method_25294(x, y, x + filled, y + height, color);
        }
    }

    public static void sparkline(class_332 graphics, int x, int y, int width, int height, int[] samples, int color) {
        graphics.method_25294(x, y, x + width, y + height, YikimTheme.alpha(YikimTheme.backdrop, 153));
        if (samples.length < 2) {
            return;
        }
        int ceiling = 1;
        for (int sample : samples) {
            ceiling = Math.max(ceiling, sample);
        }
        int heightScale = Math.max(1, height - 2);
        int columns = Math.max(1, Math.min(samples.length, width / 4));
        for (int column = 0; column < columns; ++column) {
            int from = column * samples.length / columns;
            int to = Math.max(from + 1, (column + 1) * samples.length / columns);
            int bucketPeak = 0;
            for (int index = from; index < to && index < samples.length; ++index) {
                bucketPeak = Math.max(bucketPeak, samples[index]);
            }
            int barHeight = Math.max(1, Math.round((float)bucketPeak / (float)ceiling * (float)heightScale));
            barHeight = Math.min(heightScale, barHeight);
            int left = x + column * width / columns;
            int right = Math.max(left + 1, x + (column + 1) * width / columns);
            graphics.method_25294(left, y + height - 1 - barHeight, right, y + height - 1, color);
        }
        graphics.method_25294(x, y, x + width, y + 1, YikimTheme.alpha(color, 85));
    }

    public static void separator(class_332 graphics, int x, int y, int width) {
        graphics.method_25294(x, y, x + width, y + 1, 0x33FFFFFF);
    }

    public static void roundedFill(class_332 graphics, int x1, int y1, int x2, int y2, int color) {
        if (x2 - x1 < 6 || y2 - y1 < 6) {
            graphics.method_25294(x1, y1, x2, y2, color);
            return;
        }
        graphics.method_25294(x1 + 2, y1, x2 - 2, y1 + 1, color);
        graphics.method_25294(x1 + 1, y1 + 1, x2 - 1, y2 - 1, color);
        graphics.method_25294(x1 + 2, y2 - 1, x2 - 2, y2, color);
    }

    public static void verticalGradient(class_332 graphics, int x1, int y1, int x2, int y2, int topColor, int bottomColor) {
        YikimDraw.verticalGradient(graphics, x1, y1, x2, y2, topColor, bottomColor, 6);
    }

    public static void verticalGradient(class_332 graphics, int x1, int y1, int x2, int y2, int topColor, int bottomColor, int bands) {
        int height = y2 - y1;
        if (height <= 0 || x2 <= x1) {
            return;
        }
        bands = Math.max(1, Math.min(bands, Math.max(1, height / 2)));
        for (int band = 0; band < bands; ++band) {
            int bandTop = y1 + band * height / bands;
            int bandBottom = y1 + (band + 1) * height / bands;
            graphics.method_25294(x1, bandTop, x2, bandBottom, YikimDraw.blend(topColor, bottomColor, ((float)band + 0.5f) / (float)bands));
        }
    }

    public static void horizontalGradient(class_332 graphics, int x1, int y1, int x2, int y2, int leftColor, int rightColor) {
        YikimDraw.horizontalGradient(graphics, x1, y1, x2, y2, leftColor, rightColor, 6);
    }

    public static void horizontalGradient(class_332 graphics, int x1, int y1, int x2, int y2, int leftColor, int rightColor, int bands) {
        int width = x2 - x1;
        if (width <= 0 || y2 <= y1) {
            return;
        }
        bands = Math.max(1, Math.min(bands, Math.max(1, width / 2)));
        for (int band = 0; band < bands; ++band) {
            int bandLeft = x1 + band * width / bands;
            int bandRight = x1 + (band + 1) * width / bands;
            graphics.method_25294(bandLeft, y1, bandRight, y2, YikimDraw.blend(leftColor, rightColor, ((float)band + 0.5f) / (float)bands));
        }
    }

    public static int blend(int a, int b, float t) {
        float clamped = Math.max(0.0f, Math.min(1.0f, t));
        int out = 0;
        for (int shift = 0; shift <= 24; shift += 8) {
            int channelA = a >> shift & 0xFF;
            int channelB = b >> shift & 0xFF;
            int value = (int)((float)channelA + (float)(channelB - channelA) * clamped);
            out |= (value & 0xFF) << shift;
        }
        return out;
    }

    public static void outline(class_332 graphics, int x, int y, int width, int height, int color) {
        graphics.method_25294(x, y, x + width, y + 1, color);
        graphics.method_25294(x, y + height - 1, x + width, y + height, color);
        graphics.method_25294(x, y, x + 1, y + height, color);
        graphics.method_25294(x + width - 1, y, x + width, y + height, color);
    }

    public static String clip(class_327 font, String value, int maxWidth) {
        if (value == null || value.isEmpty() || font.method_1727(value) <= maxWidth) {
            return value == null ? "" : value;
        }
        String text = value;
        while (text.length() > 1 && font.method_1727(text + "\u2026") > maxWidth) {
            text = text.substring(0, text.length() - 1);
        }
        return text + "\u2026";
    }

    public static void row(class_332 graphics, class_327 font, int x, int y, int width, String label, String value, int valueColor) {
        YikimAdapter.text(graphics, font, label, x, y, -6645082, true);
        YikimAdapter.text(graphics, font, value, x + width - font.method_1727(value), y, valueColor, true);
    }

    public static boolean inside(double mouseX, double mouseY, int x, int y, int width, int height) {
        return mouseX >= (double)x && mouseX <= (double)(x + width) && mouseY >= (double)y && mouseY <= (double)(y + height);
    }
}

