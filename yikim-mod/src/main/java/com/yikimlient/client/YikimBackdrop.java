/*
 * Decompiled with CFR 0.152.
 * 
 * Could not load the following classes:
 *  net.minecraft.class_332
 */
package com.yikimlient.client;

import com.yikimlient.client.YikimConfig;
import com.yikimlient.client.YikimTheme;
import net.minecraft.class_332;

public final class YikimBackdrop {
    public static final String[] STYLES = new String[]{"minimal", "sunset", "night", "aurora", "grid", "ocean", "cherry", "random"};
    public static final String[] STYLE_LABELS = new String[]{"En hafif", "G\u00fcn Bat\u0131m\u0131", "Y\u0131ld\u0131zl\u0131 Gece", "Kutup I\u015f\u0131klar\u0131", "Neon Izgara", "Okyanus Derinli\u011fi", "Kiraz Bahar\u0131", "Rastgele"};
    public static final int FRAME_BUDGET = 72;
    public static final int OVERDRAW_LIMIT_PER_MILLE = 1100;
    private static final long SEED = 1497975625L;
    private static String sessionStyle;
    private static int cachedWidth;
    private static int cachedHeight;
    private static String cachedStyle;
    private static int cachedAccent;
    private static int cachedAccent2;
    private static int cachedBackdrop;
    private static int[] layer;
    private static int lastFrameFills;

    private YikimBackdrop() {
    }

    public static String sessionStyle() {
        if (sessionStyle == null) {
            String configured = YikimConfig.get().backdropStyle;
            if (configured == null || configured.isBlank() || "random".equals(configured)) {
                int pick = (int)(Math.random() * (double)(STYLES.length - 1));
                sessionStyle = STYLES[Math.max(0, Math.min(STYLES.length - 2, pick))];
            } else {
                sessionStyle = configured;
            }
        }
        return sessionStyle;
    }

    public static void invalidate() {
        sessionStyle = null;
    }

    public static String label(String id) {
        for (int index = 0; index < STYLES.length; ++index) {
            if (!STYLES[index].equals(id)) continue;
            return STYLE_LABELS[index];
        }
        return STYLE_LABELS[STYLE_LABELS.length - 1];
    }

    public static String sessionLabel() {
        return YikimBackdrop.label(YikimBackdrop.sessionStyle());
    }

    public static String cycle() {
        String current = YikimBackdrop.sessionStyle();
        int index = 0;
        for (int i = 0; i < STYLES.length; ++i) {
            if (!STYLES[i].equals(current)) continue;
            index = i;
            break;
        }
        String next = STYLES[(index + 1) % STYLES.length];
        YikimConfig config = YikimConfig.get();
        config.backdropStyle = next;
        config.save();
        YikimBackdrop.invalidate();
        return YikimBackdrop.sessionLabel();
    }

    public static int lastFrameFills() {
        return lastFrameFills;
    }

    public static String costLine() {
        return lastFrameFills + " dolum/kare \u2022 a\u015f\u0131r\u0131 \u00e7izim s\u0131n\u0131r\u0131 1,10\u00d7";
    }

    public static void render(class_332 graphics, int width, int height, long timeMs) {
        if (width <= 0 || height <= 0) {
            return;
        }
        YikimBackdrop.ensureCache(width, height);
        int[] fills = layer;
        int count = 0;
        int index = 0;
        while (index + 4 < fills.length) {
            graphics.method_25294(fills[index], fills[index + 1], fills[index + 2], fills[index + 3], fills[index + 4]);
            ++count;
            index += 5;
        }
        lastFrameFills = count;
    }

    private static void ensureCache(int width, int height) {
        String style = YikimBackdrop.sessionStyle();
        if (width == cachedWidth && height == cachedHeight && style.equals(cachedStyle) && YikimTheme.accent == cachedAccent && YikimTheme.accent2 == cachedAccent2 && YikimTheme.backdrop == cachedBackdrop) {
            return;
        }
        cachedWidth = width;
        cachedHeight = height;
        cachedStyle = style;
        cachedAccent = YikimTheme.accent;
        cachedAccent2 = YikimTheme.accent2;
        cachedBackdrop = YikimTheme.backdrop;
        Canvas canvas = new Canvas(width, height);
        switch (style) {
            case "minimal": {
                YikimBackdrop.buildMinimal(canvas);
                break;
            }
            case "night": {
                YikimBackdrop.buildNight(canvas);
                break;
            }
            case "aurora": {
                YikimBackdrop.buildAurora(canvas);
                break;
            }
            case "grid": {
                YikimBackdrop.buildGrid(canvas);
                break;
            }
            case "ocean": {
                YikimBackdrop.buildOcean(canvas);
                break;
            }
            case "cherry": {
                YikimBackdrop.buildCherry(canvas);
                break;
            }
            default: {
                YikimBackdrop.buildSunset(canvas);
            }
        }
        layer = canvas.toArray();
    }

    private static void buildMinimal(Canvas canvas) {
        canvas.fill(0, 0, canvas.width, canvas.height, YikimTheme.backdrop);
        canvas.fill(0, canvas.height - 2, canvas.width, canvas.height, YikimTheme.accent);
    }

    private static void buildSunset(Canvas canvas) {
        int accent = YikimTheme.accent;
        int accent2 = YikimTheme.accent2;
        int backdrop = YikimTheme.backdrop;
        int ridge = YikimBackdrop.ridgeHeight(canvas.height);
        int horizon = (int)((float)canvas.height * 0.68f);
        YikimBackdrop.bands(canvas, 0, horizon - ridge, YikimBackdrop.mix(backdrop, accent2, 0.35f), YikimBackdrop.mix(accent2, accent, 0.55f), 7);
        canvas.fill(0, horizon - ridge, canvas.width, horizon, YikimBackdrop.mix(backdrop, accent2, 0.62f));
        int radius = Math.max(8, Math.min(18, canvas.height / 22));
        YikimBackdrop.steppedDisc(canvas, (int)((float)canvas.width * 0.74f), horizon - ridge - radius / 3, radius, YikimBackdrop.mix(-19366, accent, 0.55f), 5);
        YikimBackdrop.steppedDisc(canvas, (int)((float)canvas.width * 0.74f), horizon - ridge - radius / 3, Math.max(3, radius / 2), YikimBackdrop.mix(-6472, accent, 0.25f), 5);
        YikimBackdrop.stars(canvas, horizon - ridge, 10, YikimBackdrop.mix(-5944, accent, 0.3f));
        YikimBackdrop.ridges(canvas, horizon, ridge, YikimBackdrop.mix(-14019320, accent, 0.35f), YikimBackdrop.mix(-12968180, accent, 0.55f), accent, 8);
        canvas.fill(0, canvas.height - 2, canvas.width, canvas.height, YikimTheme.alpha(accent, 170));
    }

    private static void buildNight(Canvas canvas) {
        int accent = YikimTheme.accent;
        int accent2 = YikimTheme.accent2;
        int backdrop = YikimTheme.backdrop;
        int ridge = YikimBackdrop.ridgeHeight(canvas.height);
        int horizon = (int)((float)canvas.height * 0.7f);
        YikimBackdrop.bands(canvas, 0, horizon - ridge, YikimBackdrop.mix(backdrop, -16514036, 0.6f), YikimBackdrop.mix(backdrop, accent2, 0.45f), 7);
        canvas.fill(0, horizon - ridge, canvas.width, horizon, YikimBackdrop.mix(-16119272, accent2, 0.4f));
        int radius = Math.max(9, Math.min(14, canvas.height / 26));
        int moonX = (int)((float)canvas.width * 0.28f);
        int moonY = Math.max(radius + 4, (int)((float)(horizon - ridge) * 0.32f));
        YikimBackdrop.steppedDisc(canvas, moonX, moonY, radius, -1643265, 5);
        YikimBackdrop.steppedDisc(canvas, moonX - radius / 4, moonY - radius / 6, Math.max(2, radius / 3), -4010264, 3);
        YikimBackdrop.stars(canvas, horizon - ridge, 20, YikimBackdrop.mix(-2232577, accent, 0.25f));
        YikimBackdrop.ridges(canvas, horizon, ridge, YikimBackdrop.mix(-16316658, accent2, 0.25f), YikimBackdrop.mix(-15856102, accent2, 0.4f), accent, 8);
        canvas.fill(0, canvas.height - 2, canvas.width, canvas.height, YikimTheme.alpha(accent, 136));
    }

    private static void buildAurora(Canvas canvas) {
        int accent = YikimTheme.accent;
        int accent2 = YikimTheme.accent2;
        int backdrop = YikimTheme.backdrop;
        int ridge = YikimBackdrop.ridgeHeight(canvas.height);
        int horizon = (int)((float)canvas.height * 0.74f);
        int curtainBottom = horizon - ridge;
        YikimBackdrop.bands(canvas, 0, (int)((float)curtainBottom * 0.45f), YikimBackdrop.mix(-16447986, backdrop, 0.6f), YikimBackdrop.mix(backdrop, accent2, 0.3f), 4);
        int[] tints = new int[]{-11210560, -8734465, -3110145};
        int bandTop = (int)((float)curtainBottom * 0.45f);
        int bandHeight = Math.max(4, (curtainBottom - bandTop) / 3);
        for (int band = 0; band < 3; ++band) {
            int top = bandTop + band * bandHeight;
            int bottom = band == 2 ? curtainBottom : top + bandHeight;
            canvas.fill(0, top, canvas.width, bottom, YikimBackdrop.mix(tints[band], accent, 0.22f));
        }
        canvas.fill(0, curtainBottom, canvas.width, horizon, YikimBackdrop.mix(backdrop, accent2, 0.3f));
        YikimBackdrop.stars(canvas, (int)((float)curtainBottom * 0.45f), 10, -2232065);
        YikimBackdrop.ridges(canvas, horizon, ridge, YikimBackdrop.mix(-16381426, accent2, 0.3f), YikimBackdrop.mix(-15985640, accent2, 0.45f), accent, 7);
        canvas.fill(0, canvas.height - 2, canvas.width, canvas.height, YikimTheme.alpha(accent, 136));
    }

    private static void buildGrid(Canvas canvas) {
        int accent = YikimTheme.accent;
        int accent2 = YikimTheme.accent2;
        int backdrop = YikimTheme.backdrop;
        int horizon = (int)((float)canvas.height * 0.58f);
        YikimBackdrop.bands(canvas, 0, horizon, YikimBackdrop.mix(-16448758, backdrop, 0.5f), YikimBackdrop.mix(-15332830, accent2, 0.5f), 6);
        int radius = Math.max(14, canvas.height / 11);
        int sunX = canvas.width / 2;
        int sunY = horizon - Math.max(6, canvas.height / 40);
        YikimBackdrop.steppedDisc(canvas, sunX, sunY, radius, YikimBackdrop.mix(-45414, accent, 0.45f), 6);
        canvas.fill(0, horizon, canvas.width, canvas.height, YikimBackdrop.mix(-15464930, accent, 0.22f));
        canvas.fill(0, horizon - 1, canvas.width, horizon + 1, -1996488705);
        int lines = 6;
        for (int index = 1; index <= lines; ++index) {
            float t = (float)index / (float)lines;
            int lineY = horizon + (int)(t * t * (float)(canvas.height - horizon) * 0.92f);
            canvas.fill(0, lineY, canvas.width, lineY + 1, YikimTheme.alpha(accent, 170));
        }
        int fans = 2;
        int sliver = Math.max(1, canvas.width / 320);
        for (int index = -fans; index <= fans; ++index) {
            int topX = canvas.width / 2 + index * (canvas.width / (fans * 7 + 12));
            int bottomX = canvas.width / 2 + index * (canvas.width / 5);
            for (int part = 0; part < 3; ++part) {
                float from = (float)part / 3.0f;
                float to = (float)(part + 1) / 3.0f;
                int x = topX + (int)((float)(bottomX - topX) * from);
                int width = sliver * (part + 2) / 2;
                canvas.fill(x - width, horizon + (int)((float)(canvas.height - horizon) * from), x + width, horizon + (int)((float)(canvas.height - horizon) * to), YikimTheme.alpha(accent2, 51));
            }
        }
        YikimBackdrop.stars(canvas, horizon, 8, -1);
        canvas.fill(0, canvas.height - 2, canvas.width, canvas.height, YikimTheme.alpha(accent, 170));
    }

    private static void buildOcean(Canvas canvas) {
        int accent = YikimTheme.accent;
        int accent2 = YikimTheme.accent2;
        int backdrop = YikimTheme.backdrop;
        int floor = (int)((float)canvas.height * 0.84f);
        int surface = YikimBackdrop.mix(-4200193, accent, 0.25f);
        YikimBackdrop.bands(canvas, 0, floor, YikimBackdrop.mix(-16377302, accent2, 0.35f), YikimBackdrop.mix(-16576484, backdrop, 0.65f), 8);
        canvas.fill(0, 0, canvas.width, 2, YikimTheme.alpha(surface, 136));
        int sand = YikimBackdrop.mix(-14009786, accent, 0.18f);
        canvas.fill(0, floor, canvas.width, canvas.height, sand);
        canvas.fill(0, floor, canvas.width, floor + 1, YikimBackdrop.mix(sand, -1, 0.25f));
        for (int index = 0; index < 5; ++index) {
            int x = (int)(YikimBackdrop.random(index, 171) * (float)canvas.width);
            int size = 10 + (int)(YikimBackdrop.random(index, 172) * 16.0f);
            canvas.fill(x, floor - size, x + size, floor, YikimBackdrop.mix(-15648206, accent, 0.3f));
        }
        canvas.fill(0, canvas.height - 2, canvas.width, canvas.height, YikimTheme.alpha(accent, 136));
    }

    private static void buildCherry(Canvas canvas) {
        int accent = YikimTheme.accent;
        int accent2 = YikimTheme.accent2;
        int backdrop = YikimTheme.backdrop;
        int ridge = YikimBackdrop.ridgeHeight(canvas.height);
        int horizon = (int)((float)canvas.height * 0.72f);
        int petals = YikimBackdrop.mix(-14628, accent, 0.3f);
        YikimBackdrop.bands(canvas, 0, horizon - ridge, YikimBackdrop.mix(-14019552, backdrop, 0.5f), YikimBackdrop.mix(-12969434, accent2, 0.6f), 7);
        canvas.fill(0, horizon - ridge, canvas.width, horizon, YikimBackdrop.mix(-12969434, backdrop, 0.5f));
        YikimBackdrop.steppedDisc(canvas, (int)((float)canvas.width * 0.24f), Math.max(14, (int)((float)(horizon - ridge) * 0.34f)), Math.max(8, Math.min(13, canvas.height / 24)), YikimBackdrop.mix(-7184, accent, 0.25f), 5);
        YikimBackdrop.stars(canvas, horizon - ridge, 12, petals);
        YikimBackdrop.ridges(canvas, horizon, ridge, YikimBackdrop.mix(-14020584, accent, 0.3f), YikimBackdrop.mix(-12970464, accent, 0.45f), accent, 8);
        canvas.fill(0, canvas.height - 2, canvas.width, canvas.height, YikimTheme.alpha(accent, 153));
    }

    private static int ridgeHeight(int height) {
        return Math.max(6, (int)((float)height * 0.16f));
    }

    private static void bands(Canvas canvas, int top, int bottom, int topColor, int bottomColor, int count) {
        int height = bottom - top;
        if (height <= 0) {
            return;
        }
        int bands = Math.max(1, Math.min(count, Math.max(1, height / 3)));
        for (int band = 0; band < bands; ++band) {
            int y1 = top + band * height / bands;
            int y2 = band == bands - 1 ? bottom : top + (band + 1) * height / bands;
            canvas.fill(0, y1, canvas.width, y2, YikimBackdrop.mix(topColor, bottomColor, ((float)band + 0.5f) / (float)bands));
        }
    }

    private static void steppedDisc(Canvas canvas, int centerX, int centerY, int radius, int color, int steps) {
        int count = Math.max(1, steps);
        int stepHeight = Math.max(2, radius * 2 / count);
        for (int step = 0; step < count; ++step) {
            int sliceTop = centerY - radius + step * stepHeight;
            int offset = sliceTop + stepHeight / 2 - centerY;
            int half = (int)Math.sqrt(Math.max(0, radius * radius - offset * offset));
            canvas.fill(centerX - half, sliceTop, centerX + half, sliceTop + stepHeight, color);
        }
    }

    private static void ridges(Canvas canvas, int horizon, int ridge, int backColor, int frontColor, int rimColor, int columns) {
        int step = Math.max(10, canvas.width / Math.max(1, columns));
        int midBase = horizon + (int)((float)(canvas.height - horizon) * 0.3f);
        int midRange = Math.max(2, (int)((float)(canvas.height - horizon) * 0.22f));
        int count = 0;
        for (int x1 = 0; x1 < canvas.width; x1 += step) {
            int x2 = Math.min(canvas.width, x1 + step);
            int backTop = horizon - (int)(YikimBackdrop.random(count, 41) * (float)ridge);
            int frontTop = midBase + (int)(YikimBackdrop.random(count, 42) * (float)midRange);
            canvas.fill(x1, backTop, x2, frontTop, YikimBackdrop.mix(backColor, -1, YikimBackdrop.random(count, 43) * 0.1f));
            canvas.fill(x1, frontTop, x2, canvas.height, YikimBackdrop.mix(frontColor, -1, YikimBackdrop.random(count, 44) * 0.08f));
            canvas.fill(x1, backTop, x2, backTop + 2, YikimTheme.alpha(rimColor, 102));
            ++count;
        }
    }

    private static void stars(Canvas canvas, int maxY, int count, int tint) {
        int top = Math.max(2, maxY);
        for (int index = 0; index < count; ++index) {
            int x = (int)(YikimBackdrop.random(index, 61) * (float)canvas.width);
            int y = 2 + (int)(YikimBackdrop.random(index, 62) * (float)Math.max(1, top - 4));
            int size = YikimBackdrop.random(index, 63) > 0.82f ? 2 : 1;
            canvas.fill(x, y, x + size, y + size, tint);
        }
    }

    private static float random(int index, int salt) {
        long value = 1497975625L + (long)index * 7919L + (long)salt * 104729L;
        value ^= value << 13;
        value ^= value >>> 7;
        value ^= value << 17;
        return (float)(value & 0xFFFFFFL) / 1.6777215E7f;
    }

    private static int mix(int a, int b, float t) {
        return YikimTheme.mix(a, b, t);
    }

    static {
        cachedWidth = -1;
        cachedHeight = -1;
        layer = new int[0];
    }

    private static final class Canvas {
        private int[] data = new int[240];
        private int size;
        private final int width;
        private final int height;

        Canvas(int width, int height) {
            this.width = width;
            this.height = height;
        }

        void fill(int x1, int y1, int x2, int y2, int color) {
            int left = Math.max(0, x1);
            int top = Math.max(0, y1);
            int right = Math.min(this.width, x2);
            int bottom = Math.min(this.height, y2);
            if (right <= left || bottom <= top) {
                return;
            }
            if (this.size + 5 > this.data.length) {
                int[] grown = new int[Math.max(this.data.length * 2, this.size + 5)];
                System.arraycopy(this.data, 0, grown, 0, this.size);
                this.data = grown;
            }
            this.data[this.size++] = left;
            this.data[this.size++] = top;
            this.data[this.size++] = right;
            this.data[this.size++] = bottom;
            this.data[this.size++] = color;
        }

        int[] toArray() {
            int[] result = new int[this.size];
            System.arraycopy(this.data, 0, result, 0, this.size);
            return result;
        }
    }
}

