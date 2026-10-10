/*
 * Decompiled with CFR 0.152.
 */
package com.yikimlient.client;

import com.yikimlient.client.YikimBackdrop;
import com.yikimlient.client.YikimLog;
import java.util.Locale;

public final class YikimUiMetrics {
    private static final double WARN_MILLIS = 2.0;
    private static final long WINDOW_MILLIS = 30000L;
    private static final int WARMUP_FRAMES = 30;
    private static final int MENU = 0;
    private static final int PANEL = 1;
    private static final long[] FRAMES = new long[2];
    private static final long[] STEADY_FRAMES = new long[2];
    private static final double[] STEADY_TOTAL_MILLIS = new double[2];
    private static final double[] STEADY_WORST_MILLIS = new double[2];
    private static final double[] STEADY_TOTAL_INTERVAL = new double[2];
    private static final long[] STEADY_INTERVALS = new long[2];
    private static final long[] LAST_FRAME_AT = new long[2];
    private static final int[] PEAK_FILLS = new int[2];
    private static final String[] LABELS = new String[]{"ana men\u00fc", "YIKIM paneli"};
    private static long windowStartedAt = System.currentTimeMillis();
    private static double pendingAverage;
    private static int pendingAverageKind;
    private static final String FORMAT_LINE = "YIKIM aray\u00fcz: %s %d kare \u2022 mod \u00e7izimi ort %.2f ms \u2022 en y\u00fcksek %.2f ms%s%s";
    private static final String FORMAT_INTERVAL = " \u2022 kare aral\u0131\u011f\u0131 %.2f ms \u2022 modun pay\u0131 %%%.1f";
    private static final String FORMAT_WARN = "YIKIM aray\u00fcz UYARI: %s ortalama \u00e7izim %.2f ms (kare aral\u0131\u011f\u0131n\u0131n %%%.1f'i) \u2014 mod bu y\u00fczeyde kare b\u00fct\u00e7esini yiyor";

    private YikimUiMetrics() {
    }

    public static long menuStart() {
        return System.nanoTime();
    }

    public static void menuEnd(long startedAt) {
        YikimUiMetrics.record(0, startedAt, YikimBackdrop.lastFrameFills());
    }

    public static long panelStart() {
        return System.nanoTime();
    }

    public static void panelEnd(long startedAt) {
        YikimUiMetrics.record(1, startedAt, 0);
    }

    private static void record(int kind, long startedAt, int fills) {
        double interval;
        long now = System.nanoTime();
        double millis = (double)(now - startedAt) / 1000000.0;
        int n = kind;
        FRAMES[n] = FRAMES[n] + 1L;
        if (fills > PEAK_FILLS[kind]) {
            YikimUiMetrics.PEAK_FILLS[kind] = fills;
        }
        long previous = LAST_FRAME_AT[kind];
        YikimUiMetrics.LAST_FRAME_AT[kind] = now;
        if (FRAMES[kind] <= 30L) {
            return;
        }
        int n2 = kind;
        STEADY_FRAMES[n2] = STEADY_FRAMES[n2] + 1L;
        int n3 = kind;
        STEADY_TOTAL_MILLIS[n3] = STEADY_TOTAL_MILLIS[n3] + millis;
        if (millis > STEADY_WORST_MILLIS[kind]) {
            YikimUiMetrics.STEADY_WORST_MILLIS[kind] = millis;
        }
        if (previous != 0L && (interval = (double)(now - previous) / 1000000.0) > 0.0 && interval < 5000.0) {
            int n4 = kind;
            STEADY_TOTAL_INTERVAL[n4] = STEADY_TOTAL_INTERVAL[n4] + interval;
            int n5 = kind;
            STEADY_INTERVALS[n5] = STEADY_INTERVALS[n5] + 1L;
        }
    }

    public static String summary() {
        StringBuilder builder = new StringBuilder();
        for (int kind = 0; kind < FRAMES.length; ++kind) {
            if (FRAMES[kind] == 0L) continue;
            if (builder.length() > 0) {
                builder.append("   \u2022   ");
            }
            builder.append(LABELS[kind]).append(' ').append(FRAMES[kind]).append(" kare \u2022 mod \u00e7izimi ort ").append(String.format(Locale.ROOT, "%.2f", YikimUiMetrics.steadyAverage(kind))).append(" ms \u2022 pay %").append(String.format(Locale.ROOT, "%.1f", YikimUiMetrics.steadyShare(kind)));
        }
        return builder.length() == 0 ? "hen\u00fcz \u00f6rnek yok" : builder.toString();
    }

    private static double steadyAverage(int kind) {
        if (STEADY_FRAMES[kind] > 0L) {
            return STEADY_TOTAL_MILLIS[kind] / (double)STEADY_FRAMES[kind];
        }
        return 0.0;
    }

    public static double steadyShare(int kind) {
        if (STEADY_INTERVALS[kind] == 0L) {
            return 0.0;
        }
        double interval = STEADY_TOTAL_INTERVAL[kind] / (double)STEADY_INTERVALS[kind];
        if (interval <= 0.0) {
            return 0.0;
        }
        return Math.min(100.0, YikimUiMetrics.steadyAverage(kind) / interval * 100.0);
    }

    public static double menuAverageMillis() {
        return YikimUiMetrics.steadyAverage(0);
    }

    public static double menuSharePercent() {
        return YikimUiMetrics.steadyShare(0);
    }

    public static void reset() {
        for (int kind = 0; kind < FRAMES.length; ++kind) {
            YikimUiMetrics.FRAMES[kind] = 0L;
            YikimUiMetrics.STEADY_FRAMES[kind] = 0L;
            YikimUiMetrics.STEADY_TOTAL_MILLIS[kind] = 0.0;
            YikimUiMetrics.STEADY_WORST_MILLIS[kind] = 0.0;
            YikimUiMetrics.STEADY_TOTAL_INTERVAL[kind] = 0.0;
            YikimUiMetrics.STEADY_INTERVALS[kind] = 0L;
            YikimUiMetrics.LAST_FRAME_AT[kind] = 0L;
            YikimUiMetrics.PEAK_FILLS[kind] = 0;
        }
        pendingAverage = 0.0;
        pendingAverageKind = -1;
        windowStartedAt = System.currentTimeMillis();
    }

    public static void flush() {
        int kind;
        long now = System.currentTimeMillis();
        if (now - windowStartedAt < 30000L) {
            return;
        }
        windowStartedAt = now;
        for (kind = 0; kind < FRAMES.length; ++kind) {
            if (FRAMES[kind] == 0L) continue;
            String fills = PEAK_FILLS[kind] > 0 ? " \u2022 " + PEAK_FILLS[kind] + " dolum/kare" : "";
            String interval = STEADY_INTERVALS[kind] > 0L ? String.format(Locale.ROOT, FORMAT_INTERVAL, STEADY_TOTAL_INTERVAL[kind] / (double)STEADY_INTERVALS[kind], YikimUiMetrics.steadyShare(kind)) : "";
            double average = YikimUiMetrics.steadyAverage(kind);
            YikimLog.info(String.format(Locale.ROOT, FORMAT_LINE, LABELS[kind], FRAMES[kind], average, STEADY_WORST_MILLIS[kind], fills, interval));
            if (STEADY_FRAMES[kind] <= 0L || !(average > 2.0) || !(average > pendingAverage)) continue;
            pendingAverage = average;
            pendingAverageKind = kind;
        }
        if (pendingAverageKind >= 0) {
            YikimLog.warn(String.format(Locale.ROOT, FORMAT_WARN, LABELS[pendingAverageKind], pendingAverage, YikimUiMetrics.steadyShare(pendingAverageKind)));
        }
        for (kind = 0; kind < FRAMES.length; ++kind) {
            YikimUiMetrics.FRAMES[kind] = 0L;
            YikimUiMetrics.STEADY_FRAMES[kind] = 0L;
            YikimUiMetrics.STEADY_TOTAL_MILLIS[kind] = 0.0;
            YikimUiMetrics.STEADY_WORST_MILLIS[kind] = 0.0;
            YikimUiMetrics.STEADY_TOTAL_INTERVAL[kind] = 0.0;
            YikimUiMetrics.STEADY_INTERVALS[kind] = 0L;
            YikimUiMetrics.LAST_FRAME_AT[kind] = 0L;
            YikimUiMetrics.PEAK_FILLS[kind] = 0;
        }
        pendingAverage = 0.0;
        pendingAverageKind = -1;
    }

    static {
        pendingAverageKind = -1;
    }
}

