/*
 * Decompiled with CFR 0.152.
 * 
 * Could not load the following classes:
 *  net.minecraft.class_310
 */
package com.yikimlient.client;

import com.yikimlient.client.YikimLog;
import com.yikimlient.client.YikimMetrics;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Locale;
import net.minecraft.class_310;

public final class YikimAbTest {
    private static final long PHASE_MILLIS = 30000L;
    private static final long WARMUP_MILLIS = 5000L;
    private static final int BINS = 200;
    private static final long MIN_FRAMES = 300L;
    private static final double NOISE_PERCENT = 5.0;
    private static final String[] PHASE_LABELS = new String[]{"her \u015fey a\u00e7\u0131k", "mod duraklat\u0131ld\u0131", "HUD kapal\u0131", "her \u015fey a\u00e7\u0131k (tekrar)"};
    private static final boolean[] PHASE_PAUSE = new boolean[]{false, true, false, false};
    private static final boolean[] PHASE_HUD_OFF = new boolean[]{false, true, true, false};
    private static final int[] BIN_COUNT = new int[200];
    private static int phase = -1;
    private static long phaseStartedAt;
    private static boolean measuring;
    private static boolean contaminated;
    private static long frames;
    private static double totalMillis;
    private static double worstMillis;
    private static int secondMin;
    private static int secondMax;
    private static final double[] PHASE_FPS;
    private static final String[] PHASE_SUMMARY;
    private static String summary;
    private static List<String> resultRows;

    private YikimAbTest() {
    }

    public static boolean running() {
        return phase >= 0;
    }

    public static boolean modPaused() {
        return phase >= 0 && PHASE_PAUSE[phase];
    }

    public static boolean hudOff() {
        return phase >= 0 && PHASE_HUD_OFF[phase];
    }

    public static void start() {
        for (int index = 0; index < PHASE_FPS.length; ++index) {
            YikimAbTest.PHASE_FPS[index] = -1.0;
            YikimAbTest.PHASE_SUMMARY[index] = "";
        }
        summary = "";
        resultRows = List.of();
        YikimAbTest.begin(0);
        YikimMetrics.notify("A/B \u00f6l\u00e7\u00fcm\u00fc ba\u015flad\u0131: 4 faz \u00d7 30 sn \u2014 oyunu oyna, panel a\u00e7ma");
        YikimLog.info("YIKIM A/B ba\u015flad\u0131: " + PHASE_LABELS.length + " faz \u00d7 30 sn (ilk 5 sn \u0131s\u0131nma) \u2022 fazlar: " + String.join((CharSequence)" \u2192 ", PHASE_LABELS));
    }

    public static void cancel() {
        if (!YikimAbTest.running()) {
            return;
        }
        YikimLog.info("YIKIM A/B iptal edildi (faz " + (phase + 1) + "/" + PHASE_LABELS.length + ").");
        YikimMetrics.notify("A/B \u00f6l\u00e7\u00fcm\u00fc iptal edildi");
        YikimAbTest.reset();
    }

    private static void reset() {
        phase = -1;
        measuring = false;
        contaminated = false;
        frames = 0L;
        totalMillis = 0.0;
        worstMillis = 0.0;
        secondMin = Integer.MAX_VALUE;
        secondMax = 0;
        Arrays.fill(BIN_COUNT, 0);
    }

    private static void begin(int index) {
        phase = index;
        phaseStartedAt = System.currentTimeMillis();
        measuring = false;
        contaminated = false;
        frames = 0L;
        totalMillis = 0.0;
        worstMillis = 0.0;
        secondMin = Integer.MAX_VALUE;
        secondMax = 0;
        Arrays.fill(BIN_COUNT, 0);
        YikimLog.info("YIKIM A/B faz " + (index + 1) + "/" + PHASE_LABELS.length + " ba\u015flad\u0131 \u2014 " + PHASE_LABELS[index] + " (30 sn; ilk 5 sn \u0131s\u0131nma)");
    }

    public static void tick(class_310 client) {
        if (!YikimAbTest.running()) {
            return;
        }
        long now = System.currentTimeMillis();
        long elapsed = now - phaseStartedAt;
        if (!measuring && elapsed >= 5000L) {
            measuring = true;
        }
        if (client != null && client.field_1755 != null) {
            contaminated = true;
        }
        if (elapsed < 30000L) {
            return;
        }
        YikimAbTest.closePhase(client);
    }

    private static void closePhase(class_310 client) {
        String line;
        boolean usable;
        double fps = totalMillis > 0.0 ? (double)frames * 1000.0 / totalMillis : 0.0;
        boolean focused = client == null || client.method_22683() == null || client.method_1569();
        boolean bl = usable = frames >= 300L && !contaminated && focused;
        String note = usable ? "" : (contaminated ? " [bozuldu: ekran a\u00e7\u0131ld\u0131]" : (!focused ? " [bozuldu: pencere odak d\u0131\u015f\u0131]" : " [bozuldu: yetersiz kare]"));
        YikimAbTest.PHASE_SUMMARY[YikimAbTest.phase] = line = String.format(Locale.ROOT, "%s: %.1f FPS (%d kare \u2022 kare %.2f ms \u2022 p95 %.2f ms \u2022 en k\u00f6t\u00fc %.1f ms \u2022 saniye %d-%d)%s", PHASE_LABELS[phase], fps, frames != 0L ? frames : 0L, frames != 0L ? totalMillis / (double)frames : 0.0, YikimAbTest.percentile95(), worstMillis, secondMin == Integer.MAX_VALUE ? 0 : secondMin, secondMax, note);
        YikimAbTest.PHASE_FPS[YikimAbTest.phase] = usable ? fps : -1.0;
        YikimLog.info("YIKIM A/B faz " + (phase + 1) + "/" + PHASE_LABELS.length + " bitti \u2014 " + line);
        int next = phase + 1;
        if (next >= PHASE_LABELS.length) {
            YikimAbTest.finish();
            return;
        }
        YikimAbTest.begin(next);
    }

    public static void onFrame(double millis) {
        int bin;
        if (phase < 0 || !measuring || contaminated) {
            return;
        }
        ++frames;
        totalMillis += millis;
        if (millis > worstMillis) {
            worstMillis = millis;
        }
        if ((bin = (int)(millis * 2.0)) < 0) {
            bin = 0;
        }
        if (bin >= 200) {
            bin = 199;
        }
        int n = bin;
        BIN_COUNT[n] = BIN_COUNT[n] + 1;
    }

    public static void onSecondFps(int fps) {
        if (phase < 0 || !measuring || contaminated) {
            return;
        }
        if (fps < secondMin) {
            secondMin = fps;
        }
        if (fps > secondMax) {
            secondMax = fps;
        }
    }

    private static double percentile95() {
        long total = 0L;
        for (int count : BIN_COUNT) {
            total += (long)count;
        }
        if (total == 0L) {
            return worstMillis;
        }
        long target = (long)Math.ceil((double)total * 0.95);
        long seen = 0L;
        for (int index = 0; index < 200; ++index) {
            if ((seen += (long)BIN_COUNT[index]) < target) continue;
            return ((double)index + 0.5) / 2.0;
        }
        return worstMillis;
    }

    private static void finish() {
        double base = YikimAbTest.baseFps();
        ArrayList<String> rows = new ArrayList<String>();
        StringBuilder builder = new StringBuilder();
        builder.append(String.format(Locale.ROOT, "temel (mod a\u00e7\u0131k) %.1f FPS", base));
        double hudDelta = YikimAbTest.percent(base, PHASE_FPS[2]);
        double pauseDelta = YikimAbTest.percent(base, PHASE_FPS[1]);
        rows.add(String.format(Locale.ROOT, "Temel (mod a\u00e7\u0131k): %.1f FPS", base));
        if (PHASE_FPS[2] > 0.0) {
            builder.append(String.format(Locale.ROOT, " \u2022 HUD kapal\u0131 %.1f FPS (%+.1f%%)", PHASE_FPS[2], hudDelta));
            rows.add(String.format(Locale.ROOT, "HUD kapal\u0131: %.1f FPS (%+.1f%%)", PHASE_FPS[2], hudDelta));
        }
        if (PHASE_FPS[1] > 0.0) {
            builder.append(String.format(Locale.ROOT, " \u2022 mod duraklat\u0131ld\u0131 %.1f FPS (%+.1f%%)", PHASE_FPS[1], pauseDelta));
            rows.add(String.format(Locale.ROOT, "Mod duraklat\u0131ld\u0131: %.1f FPS (%+.1f%%)", PHASE_FPS[1], pauseDelta));
        }
        if (PHASE_FPS[3] > 0.0) {
            rows.add(String.format(Locale.ROOT, "Kontrol (tekrar): %.1f FPS", PHASE_FPS[3]));
        }
        builder.append(" \u2192 ").append(YikimAbTest.verdict(hudDelta, pauseDelta));
        summary = builder.toString();
        rows.add("Sonu\u00e7: " + YikimAbTest.verdict(hudDelta, pauseDelta));
        resultRows = List.copyOf(rows);
        YikimLog.info("YIKIM A/B sonu\u00e7: " + summary);
        YikimMetrics.notify("A/B bitti: " + YikimAbTest.verdict(hudDelta, pauseDelta));
        YikimAbTest.reset();
    }

    private static double baseFps() {
        double first = PHASE_FPS[0];
        double last = PHASE_FPS[3];
        if (first > 0.0 && last > 0.0) {
            return (first + last) / 2.0;
        }
        return first > 0.0 ? first : last;
    }

    private static double percent(double base, double value) {
        if (base <= 0.0 || value <= 0.0) {
            return 0.0;
        }
        return (value / base - 1.0) * 100.0;
    }

    private static String verdict(double hudDelta, double pauseDelta) {
        if (hudDelta == 0.0 && pauseDelta == 0.0) {
            return "\u00f6l\u00e7\u00fcm ge\u00e7ersiz (fazlar bozuldu), tekrar dene";
        }
        if (pauseDelta >= 5.0 && pauseDelta >= hudDelta) {
            return String.format(Locale.ROOT, "mod \u00f6l\u00e7\u00fclebilir FPS yiyor (duraklat\u0131nca +%%%.1f)", pauseDelta);
        }
        if (hudDelta >= 5.0) {
            return String.format(Locale.ROOT, "fark HUD'dan geliyor (kapat\u0131nca +%%%.1f)", hudDelta);
        }
        return "fark yok \u2014 d\u00fc\u015f\u00fc\u015f\u00fcn kayna\u011f\u0131 modun kare/tik yolu de\u011fil";
    }

    public static String summary() {
        return summary;
    }

    public static List<String> resultRows() {
        return resultRows;
    }

    public static List<String> phaseRows() {
        ArrayList<String> rows = new ArrayList<String>();
        for (int index = 0; index < PHASE_LABELS.length; ++index) {
            if (PHASE_SUMMARY[index].isEmpty()) continue;
            rows.add(PHASE_SUMMARY[index]);
        }
        return rows;
    }

    public static String statusLine() {
        if (!YikimAbTest.running()) {
            return "";
        }
        long elapsed = System.currentTimeMillis() - phaseStartedAt;
        long left = Math.max(0L, (30000L - elapsed) / 1000L);
        return String.format(Locale.ROOT, "faz %d/%d \u2014 %s \u2022 %s \u2022 %d sn kald\u0131", phase + 1, PHASE_LABELS.length, PHASE_LABELS[phase], measuring ? "\u00f6l\u00e7\u00fcl\u00fcyor" : "\u0131s\u0131nma", left);
    }

    static {
        secondMin = Integer.MAX_VALUE;
        PHASE_FPS = new double[PHASE_LABELS.length];
        PHASE_SUMMARY = new String[PHASE_LABELS.length];
        summary = "";
        resultRows = List.of();
    }
}

