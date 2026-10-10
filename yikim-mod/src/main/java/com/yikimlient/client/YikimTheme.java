/*
 * Decompiled with CFR 0.152.
 */
package com.yikimlient.client;

import com.yikimlient.client.YikimBridge;
import com.yikimlient.client.YikimConfig;
import com.yikimlient.client.YikimJson;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.LinkOption;
import java.nio.file.Path;

public final class YikimTheme {
    public static final int DEFAULT_ACCENT = -34280;
    public static final int DEFAULT_ACCENT2 = -49920;
    public static final int DEFAULT_BACKDROP = -16119284;
    public static final int TEXT = -723722;
    public static final int TEXT_DIM = -6645082;
    public static final int TEXT_MUTED = -9539974;
    public static final int PANEL = -435286510;
    public static final int PANEL_SOFT = -1726737383;
    public static final int BORDER = 0x33FFFFFF;
    public static final int SHADOW = -1291845632;
    public static final int OK = -11870592;
    public static final int WARN = -340971;
    public static final int BAD = -495247;
    public static int accent = -34280;
    public static int accent2 = -49920;
    public static int backdrop = -16119284;
    private static final long SYNC_MILLIS = 1000L;
    private static long themeStamp = Long.MIN_VALUE;
    private static long lastCheckedAt;
    private static boolean appliedOnce;

    private YikimTheme() {
    }

    public static void sync() {
        long now = System.currentTimeMillis();
        if (now - lastCheckedAt < 1000L) {
            return;
        }
        lastCheckedAt = now;
        try {
            Path path = YikimBridge.themeFile();
            if (!Files.exists(path, new LinkOption[0])) {
                return;
            }
            long stamp = Files.getLastModifiedTime(path, new LinkOption[0]).toMillis();
            if (stamp == themeStamp) {
                return;
            }
            themeStamp = stamp;
            String json = Files.readString(path, StandardCharsets.UTF_8);
            YikimTheme.apply(json);
        }
        catch (Throwable throwable) {
            // empty catch block
        }
    }

    public static void forceSync() {
        themeStamp = Long.MIN_VALUE;
        lastCheckedAt = 0L;
        YikimTheme.sync();
    }

    private static void apply(String json) {
        int nextAccent = YikimJson.color(json, "accent");
        int nextAccent2 = YikimJson.color(json, "accent2");
        int nextBackdrop = YikimJson.color(json, "background");
        if (nextAccent == 0 && nextAccent2 == 0 && nextBackdrop == 0) {
            return;
        }
        YikimConfig config = YikimConfig.get();
        if (config.customAccent && appliedOnce) {
            return;
        }
        boolean changed = false;
        if (nextAccent != 0 && nextAccent != accent) {
            accent = nextAccent;
            changed = true;
        }
        if (nextAccent2 != 0 && nextAccent2 != accent2) {
            accent2 = nextAccent2;
            changed = true;
        }
        if (nextBackdrop != 0 && nextBackdrop != backdrop) {
            backdrop = nextBackdrop;
            changed = true;
        }
        if (changed) {
            config.accent = accent;
            config.accent2 = accent2;
            config.backdrop = backdrop;
            config.save();
        }
        appliedOnce = true;
    }

    public static void setCustom(int nextAccent, int nextAccent2, int nextBackdrop) {
        accent = nextAccent;
        accent2 = nextAccent2;
        backdrop = nextBackdrop;
        YikimConfig config = YikimConfig.get();
        config.accent = accent;
        config.accent2 = accent2;
        config.backdrop = backdrop;
        config.customAccent = true;
        config.save();
    }

    public static void adoptLauncher() {
        YikimConfig config = YikimConfig.get();
        config.customAccent = false;
        config.save();
        appliedOnce = false;
        themeStamp = Long.MIN_VALUE;
        YikimTheme.sync();
    }

    public static void loadFromConfig() {
        YikimConfig config = YikimConfig.get();
        accent = config.accent;
        accent2 = config.accent2;
        backdrop = config.backdrop;
    }

    public static int alpha(int color, int alpha) {
        return color & 0xFFFFFF | (alpha & 0xFF) << 24;
    }

    public static int mix(int a, int b, float t) {
        float clamped = Math.max(0.0f, Math.min(1.0f, t));
        int ar = a >> 16 & 0xFF;
        int ag = a >> 8 & 0xFF;
        int ab = a & 0xFF;
        int br = b >> 16 & 0xFF;
        int bg = b >> 8 & 0xFF;
        int bb = b & 0xFF;
        int r = (int)((float)ar + (float)(br - ar) * clamped);
        int g = (int)((float)ag + (float)(bg - ag) * clamped);
        int bl = (int)((float)ab + (float)(bb - ab) * clamped);
        return 0xFF000000 | r << 16 | g << 8 | bl;
    }
}

