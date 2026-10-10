/*
 * Decompiled with CFR 0.152.
 * 
 * Could not load the following classes:
 *  net.minecraft.class_1041
 *  net.minecraft.class_310
 *  net.minecraft.class_315
 *  org.lwjgl.glfw.GLFW
 */
package com.yikimlient.client;

import com.yikimlient.client.YikimAbTest;
import com.yikimlient.client.YikimAdapter;
import com.yikimlient.client.YikimConfig;
import com.yikimlient.client.YikimLog;
import com.yikimlient.client.YikimUiMetrics;
import com.yikimlient.client.YikimVideo;
import java.lang.management.GarbageCollectorMXBean;
import java.lang.management.ManagementFactory;
import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Locale;
import net.minecraft.class_1041;
import net.minecraft.class_310;
import net.minecraft.class_315;
import org.lwjgl.glfw.GLFW;

public final class YikimMetrics {
    private static final int WINDOW_SECONDS = 30;
    private static final ArrayDeque<Integer> FPS_WINDOW = new ArrayDeque();
    private static final ArrayDeque<Integer> FPS_SAMPLES_FOR_GRAPH = new ArrayDeque();
    private static final long SESSION_START = System.currentTimeMillis();
    private static long lastSampleAt;
    private static long lastDiagnosticsAt;
    private static long lastClickAt;
    private static final ArrayDeque<Long> CLICKS;
    private static double hudCostMillis;
    private static double tickCostMillis;
    private static int lastFps;
    private static String lastDiagnostics;
    private static String lastStateSummary;
    private static String notification;
    private static long notificationAt;
    private static boolean unfocusedSeen;
    private static boolean minimizedSeen;
    private static boolean leftHeld;
    private static long lastSampleWindow;
    private static long focusedOutSeconds;
    private static long minimizedSeconds;
    public static final int STATE_WORLD = 0;
    public static final int STATE_WORLD_NO_HUD = 1;
    public static final int STATE_PANEL = 2;
    public static final int STATE_MENU = 3;
    private static final String[] STATE_LABELS;
    private static final int STATE_COUNT;
    private static final int SAMPLE_LIMIT = 64;
    private static final long[] STATE_FRAMES;
    private static final double[] STATE_TOTAL_MILLIS;
    private static final double[] STATE_WORST_MILLIS;
    private static final double[][] STATE_SAMPLES;
    private static final int[] STATE_SAMPLE_COUNT;
    private static final int[] STATE_SAMPLE_CURSOR;
    private static long previousFrameAt;
    private static long stateWindowAt;
    private static final long CURVE_WINDOW_MILLIS = 60000L;
    private static final int CURVE_BINS = 200;
    private static final int CURVE_KEEP = 20;
    private static final long CURVE_MIN_FRAMES = 600L;
    private static final int[] CURVE_BIN_COUNT;
    private static final ArrayDeque<String> CURVE_BUCKETS;
    private static final List<String> CURVE_ROWS;
    private static final long[] CURVE_STATE_FRAMES;
    private static long curveStartedAt;
    private static long curveFrames;
    private static double curveTotalMillis;
    private static double curveWorstMillis;
    private static int curveSecondMin;
    private static int curveSecondMax;
    private static double firstMinuteFps;
    private static String curveSummary;
    private static int curveRevision;
    private static List<GarbageCollectorMXBean> gcBeans;
    private static int curveMinuteCount;

    private YikimMetrics() {
    }

    public static void tick(class_310 client) {
        long now = System.currentTimeMillis();
        YikimMetrics.cps(now);
        if (now - lastSampleAt >= 1000L) {
            int fps;
            lastSampleAt = now;
            lastFps = fps = client.method_47599();
            if (client.field_1687 != null) {
                FPS_WINDOW.addLast(fps);
                FPS_SAMPLES_FOR_GRAPH.addLast(fps);
                while (FPS_WINDOW.size() > 30) {
                    FPS_WINDOW.removeFirst();
                }
                while (FPS_SAMPLES_FOR_GRAPH.size() > 120) {
                    FPS_SAMPLES_FOR_GRAPH.removeFirst();
                }
                if (client.method_22683() != null) {
                    if (!client.method_1569()) {
                        unfocusedSeen = true;
                        ++focusedOutSeconds;
                    }
                    if (YikimAdapter.isIconified(client.method_22683())) {
                        minimizedSeen = true;
                        ++minimizedSeconds;
                    }
                }
                curveSecondMin = Math.min(curveSecondMin, fps);
                curveSecondMax = Math.max(curveSecondMax, fps);
                YikimAbTest.onSecondFps(fps);
            } else {
                FPS_WINDOW.clear();
            }
            YikimMetrics.closeMinuteIfDue(now);
            if (YikimConfig.get().showDiagnostics && now - lastDiagnosticsAt >= 30000L && client.field_1687 != null && !FPS_WINDOW.isEmpty()) {
                lastDiagnosticsAt = now;
                lastDiagnostics = YikimMetrics.build(client);
                YikimLog.info(lastDiagnostics);
                if (YikimConfig.get().diagnosticsToChat) {
                    YikimMetrics.notify(lastDiagnostics);
                }
                unfocusedSeen = false;
                minimizedSeen = false;
                focusedOutSeconds = 0L;
                minimizedSeconds = 0L;
                lastSampleWindow = now;
            }
        }
        if (now - notificationAt > 3000L) {
            notification = "";
        }
        YikimMetrics.flushStates();
    }

    private static void cps(long now) {
        boolean left;
        long handle = YikimAdapter.windowHandle(class_310.method_1551().method_22683());
        boolean bl = left = handle != 0L && GLFW.glfwGetMouseButton((long)handle, (int)0) == 1;
        if (left && !leftHeld) {
            CLICKS.addLast(now);
        }
        leftHeld = left;
        while (!CLICKS.isEmpty() && now - CLICKS.peekFirst() > 1000L) {
            CLICKS.removeFirst();
        }
        lastClickAt = now;
    }

    public static void frame(int state) {
        int curveBin;
        long now = System.nanoTime();
        long previous = previousFrameAt;
        previousFrameAt = now;
        if (previous == 0L || state < 0 || state >= STATE_COUNT) {
            return;
        }
        double millis = (double)(now - previous) / 1000000.0;
        if (millis < 0.2 || millis > 2000.0) {
            return;
        }
        int n = state;
        STATE_FRAMES[n] = STATE_FRAMES[n] + 1L;
        int n2 = state;
        STATE_TOTAL_MILLIS[n2] = STATE_TOTAL_MILLIS[n2] + millis;
        if (millis > STATE_WORST_MILLIS[state]) {
            YikimMetrics.STATE_WORST_MILLIS[state] = millis;
        }
        ++curveFrames;
        curveTotalMillis += millis;
        if (millis > curveWorstMillis) {
            curveWorstMillis = millis;
        }
        if ((curveBin = (int)(millis * 2.0)) < 0) {
            curveBin = 0;
        }
        if (curveBin >= 200) {
            curveBin = 199;
        }
        int n3 = curveBin;
        CURVE_BIN_COUNT[n3] = CURVE_BIN_COUNT[n3] + 1;
        int n4 = state;
        CURVE_STATE_FRAMES[n4] = CURVE_STATE_FRAMES[n4] + 1L;
        YikimAbTest.onFrame(millis);
        double[] samples = STATE_SAMPLES[state];
        int count = STATE_SAMPLE_COUNT[state];
        if (count < 64) {
            samples[count] = millis;
            YikimMetrics.STATE_SAMPLE_COUNT[state] = count + 1;
            return;
        }
        int cursor = STATE_SAMPLE_CURSOR[state];
        samples[cursor] = millis;
        YikimMetrics.STATE_SAMPLE_CURSOR[state] = (cursor + 1) % 64;
    }

    private static void flushStates() {
        long now = System.currentTimeMillis();
        if (now - stateWindowAt < 30000L) {
            return;
        }
        stateWindowAt = now;
        StringBuilder builder = new StringBuilder();
        for (int state = 0; state < STATE_COUNT; ++state) {
            double fps;
            long frames = STATE_FRAMES[state];
            if (frames < 60L) {
                YikimMetrics.resetState(state);
                continue;
            }
            double average = STATE_TOTAL_MILLIS[state] / (double)frames;
            double d = fps = average > 0.0 ? 1000.0 / average : 0.0;
            if (builder.length() > 0) {
                builder.append(" \u2022 ");
            }
            builder.append(STATE_LABELS[state]).append(' ').append(String.format(Locale.ROOT, "%.1f", fps)).append(" FPS (").append(frames).append(" kare \u2022 ").append(String.format(Locale.ROOT, "%.2f", average)).append(" ms \u2022 p95 ").append(String.format(Locale.ROOT, "%.2f", YikimMetrics.percentile95(state))).append(')');
            YikimMetrics.resetState(state);
        }
        if (builder.length() > 0) {
            double share = YikimUiMetrics.menuSharePercent();
            if (share > 0.0) {
                builder.append(" \u2022 YIKIM aray\u00fcz pay\u0131: men\u00fcde %").append(String.format(Locale.ROOT, "%.1f", share));
            }
            lastStateSummary = builder.toString();
            YikimLog.info("YIKIM FPS durumu: " + lastStateSummary);
        }
    }

    public static String stateSummary() {
        return lastStateSummary;
    }

    private static double percentile95(int state) {
        int count = STATE_SAMPLE_COUNT[state];
        if (count == 0) {
            return STATE_WORST_MILLIS[state];
        }
        double[] copy = new double[count];
        System.arraycopy(STATE_SAMPLES[state], 0, copy, 0, count);
        Arrays.sort(copy);
        return copy[Math.max(0, (int)Math.ceil((double)count * 0.95) - 1)];
    }

    private static void resetState(int state) {
        YikimMetrics.STATE_FRAMES[state] = 0L;
        YikimMetrics.STATE_TOTAL_MILLIS[state] = 0.0;
        YikimMetrics.STATE_WORST_MILLIS[state] = 0.0;
        YikimMetrics.STATE_SAMPLE_COUNT[state] = 0;
        YikimMetrics.STATE_SAMPLE_CURSOR[state] = 0;
    }

    public static void recordHudCost(long nanos) {
        double millis = (double)nanos / 1000000.0;
        hudCostMillis = hudCostMillis == 0.0 ? millis : hudCostMillis * 0.9 + millis * 0.1;
    }

    public static void recordTickCost(long nanos) {
        double millis = (double)nanos / 1000000.0;
        tickCostMillis = tickCostMillis == 0.0 ? millis : tickCostMillis * 0.9 + millis * 0.1;
    }

    public static void notify(String message) {
        notification = message == null ? "" : message;
        notificationAt = System.currentTimeMillis();
    }

    public static String notification() {
        return notification;
    }

    public static int fps() {
        return lastFps;
    }

    public static int cps() {
        return CLICKS.size();
    }

    public static double hudCostMillis() {
        return hudCostMillis;
    }

    public static double tickCostMillis() {
        return tickCostMillis;
    }

    public static long sessionMillis() {
        return System.currentTimeMillis() - SESSION_START;
    }

    public static String clock(long millis) {
        long total = millis / 1000L;
        return String.format(Locale.ROOT, "%d:%02d:%02d", total / 3600L, total % 3600L / 60L, total % 60L);
    }

    public static String lastDiagnostics() {
        return lastDiagnostics;
    }

    public static List<Integer> graphSamples() {
        return new ArrayList<Integer>(FPS_SAMPLES_FOR_GRAPH);
    }

    public static int history(int[] out) {
        int index = 0;
        for (int value : FPS_SAMPLES_FOR_GRAPH) {
            if (index >= out.length) break;
            out[index++] = value;
        }
        return index;
    }

    public static long secondsFocusedOut() {
        return focusedOutSeconds;
    }

    public static long secondsMinimized() {
        return minimizedSeconds;
    }

    public static int[] window() {
        if (FPS_WINDOW.isEmpty()) {
            return new int[]{lastFps, lastFps, lastFps};
        }
        int min = Integer.MAX_VALUE;
        int max = 0;
        long sum = 0L;
        for (int value : FPS_WINDOW) {
            min = Math.min(min, value);
            max = Math.max(max, value);
            sum += (long)value;
        }
        return new int[]{min, (int)(sum / (long)FPS_WINDOW.size()), max};
    }

    public static String shortNotification() {
        return notification;
    }

    private static void closeMinuteIfDue(long now) {
        if (now - curveStartedAt < 60000L) {
            return;
        }
        curveStartedAt = now;
        if (curveFrames < 600L || curveTotalMillis <= 0.0) {
            YikimMetrics.resetMinute();
            return;
        }
        double average = (double)curveFrames * 1000.0 / curveTotalMillis;
        double p95 = YikimMetrics.percentileFromCurveBins();
        if (firstMinuteFps < 0.0) {
            firstMinuteFps = average;
        }
        int minimum = curveSecondMin == Integer.MAX_VALUE ? 0 : curveSecondMin;
        String detail = String.format(Locale.ROOT, "%d. dk %.0f FPS (min %d \u2022 maks %d \u2022 kare %.2f ms \u2022 p95 %.2f ms \u2022 en k\u00f6t\u00fc %.1f ms \u2022 %d kare \u2022 %s)", ++curveMinuteCount, average, minimum, curveSecondMax, curveTotalMillis / (double)curveFrames, p95, curveWorstMillis, curveFrames, YikimMetrics.surfaceMix());
        String compact = String.format(Locale.ROOT, "%d. dk: %.0f FPS \u2022 p95 %.2f ms \u2022 min %d", curveMinuteCount, average, p95, minimum);
        curveSummary = String.format(Locale.ROOT, "e\u011filim: ilk dk %.0f \u2192 son dk %.0f (%+.0f%%)", firstMinuteFps, average, (average / firstMinuteFps - 1.0) * 100.0);
        CURVE_BUCKETS.addLast(compact);
        while (CURVE_BUCKETS.size() > 20) {
            CURVE_BUCKETS.removeFirst();
        }
        YikimMetrics.rebuildCurveRows();
        YikimLog.info("YIKIM FPS e\u011frisi: " + detail + " \u2022 " + curveSummary);
        YikimLog.info("YIKIM kaynak: " + YikimMetrics.memoryLine());
        ++curveRevision;
        YikimMetrics.resetMinute();
    }

    private static void rebuildCurveRows() {
        CURVE_ROWS.clear();
        CURVE_ROWS.addAll(CURVE_BUCKETS);
        CURVE_ROWS.add(curveSummary);
        CURVE_ROWS.add(YikimMetrics.memoryLine());
    }

    private static double percentileFromCurveBins() {
        long total = 0L;
        for (int count : CURVE_BIN_COUNT) {
            total += (long)count;
        }
        if (total == 0L) {
            return curveWorstMillis;
        }
        long target = (long)Math.ceil((double)total * 0.95);
        long seen = 0L;
        for (int index = 0; index < 200; ++index) {
            if ((seen += (long)CURVE_BIN_COUNT[index]) < target) continue;
            return ((double)index + 0.5) / 2.0;
        }
        return curveWorstMillis;
    }

    private static String surfaceMix() {
        long total = 0L;
        for (long frames : CURVE_STATE_FRAMES) {
            total += frames;
        }
        if (total == 0L) {
            return "y\u00fczey yok";
        }
        String[] labels = new String[]{"d\u00fcnya", "HUD kapal\u0131", "panel", "men\u00fc"};
        StringBuilder builder = new StringBuilder("y\u00fczey");
        for (int index = 0; index < STATE_COUNT; ++index) {
            long frames;
            frames = CURVE_STATE_FRAMES[index];
            if (frames * 100L < total * 2L) continue;
            builder.append(' ').append(labels[index]).append(" %").append(Math.round((double)frames * 100.0 / (double)total));
        }
        return builder.toString();
    }

    private static void resetMinute() {
        curveFrames = 0L;
        curveTotalMillis = 0.0;
        curveWorstMillis = 0.0;
        curveSecondMin = Integer.MAX_VALUE;
        curveSecondMax = 0;
        Arrays.fill(CURVE_BIN_COUNT, 0);
        Arrays.fill(CURVE_STATE_FRAMES, 0L);
    }

    public static String memoryLine() {
        Runtime runtime = Runtime.getRuntime();
        long max = runtime.maxMemory();
        long used = runtime.totalMemory() - runtime.freeMemory();
        long collections = 0L;
        long collectionMillis = 0L;
        for (GarbageCollectorMXBean bean : YikimMetrics.gcBeans()) {
            long count = bean.getCollectionCount();
            long time = bean.getCollectionTime();
            if (count > 0L) {
                collections += count;
            }
            if (time <= 0L) continue;
            collectionMillis += time;
        }
        return String.format(Locale.ROOT, "y\u0131\u011f\u0131n %d/%d MB (kullan\u0131lan %%%d) \u2022 GC %d toplama \u2022 %.1f s \u2022 i\u015f par\u00e7ac\u0131\u011f\u0131 %d", used >> 20, max >> 20, max > 0L ? used * 100L / max : 0L, collections, (double)collectionMillis / 1000.0, Thread.activeCount());
    }

    private static List<GarbageCollectorMXBean> gcBeans() {
        if (gcBeans == null) {
            try {
                gcBeans = ManagementFactory.getGarbageCollectorMXBeans();
            }
            catch (Throwable problem) {
                gcBeans = List.of();
            }
        }
        return gcBeans;
    }

    public static List<String> curveRows() {
        return CURVE_ROWS;
    }

    public static int curveRevision() {
        return curveRevision;
    }

    public static String curveSummary() {
        return curveSummary;
    }

    private static String build(class_310 client) {
        int[] window = YikimMetrics.window();
        class_315 options = client.field_1690;
        class_1041 handle = client.method_22683();
        String backend = YikimVideo.backend();
        String windowMode = (Boolean)options.method_42447().method_41753() != false ? "tam ekran" : "pencereli";
        String limit = (Integer)options.method_42524().method_41753() >= 260 ? "s\u0131n\u0131rs\u0131z" : Integer.toString((Integer)options.method_42524().method_41753());
        return String.format(Locale.ROOT, "Performans: %d FPS (30 sn: en d\u00fc\u015f\u00fck %d \u2022 ort %d \u2022 en y\u00fcksek %d) \u2022 s\u0131n\u0131r %s \u2022 V-Sync %s \u2022 g\u00f6r\u00fc\u015f %d chunk \u2022 %dx%d %s \u2022 odak d\u0131\u015f\u0131 %d sn \u2022 k\u00fc\u00e7\u00fclt\u00fclm\u00fc\u015f %d sn \u2022 HUD %.2f ms \u2022 YIKIM tik %.3f ms \u2022 Java %s \u2022 YIKIM %s \u2022 arka u\u00e7: %s", lastFps, window[0], window[1], window[2], limit, (Boolean)options.method_42433().method_41753() != false ? "a\u00e7\u0131k" : "kapal\u0131", options.method_42503().method_41753(), handle == null ? 0 : handle.method_4489(), handle == null ? 0 : handle.method_4506(), windowMode, focusedOutSeconds, minimizedSeconds, hudCostMillis, tickCostMillis, System.getProperty("java.version", "?"), "1.3.1", backend);
    }

    static {
        lastDiagnosticsAt = System.currentTimeMillis();
        CLICKS = new ArrayDeque();
        lastDiagnostics = "";
        lastStateSummary = "";
        notification = "";
        STATE_LABELS = new String[]{"d\u00fcnya", "d\u00fcnya/HUD kapal\u0131", "panel a\u00e7\u0131k", "men\u00fc"};
        STATE_COUNT = STATE_LABELS.length;
        STATE_FRAMES = new long[STATE_COUNT];
        STATE_TOTAL_MILLIS = new double[STATE_COUNT];
        STATE_WORST_MILLIS = new double[STATE_COUNT];
        STATE_SAMPLES = new double[STATE_COUNT][64];
        STATE_SAMPLE_COUNT = new int[STATE_COUNT];
        STATE_SAMPLE_CURSOR = new int[STATE_COUNT];
        stateWindowAt = System.currentTimeMillis();
        CURVE_BIN_COUNT = new int[200];
        CURVE_BUCKETS = new ArrayDeque();
        CURVE_ROWS = new ArrayList<String>();
        CURVE_STATE_FRAMES = new long[STATE_COUNT];
        curveStartedAt = System.currentTimeMillis();
        curveSecondMin = Integer.MAX_VALUE;
        firstMinuteFps = -1.0;
        curveSummary = "";
    }
}

