/*
 * Decompiled with CFR 0.152.
 * 
 * Could not load the following classes:
 *  net.minecraft.class_310
 *  net.minecraft.class_315
 */
package com.yikimlient.client;

import com.yikimlient.client.YikimAdapter;
import com.yikimlient.client.YikimBridge;
import com.yikimlient.client.YikimJson;
import com.yikimlient.client.YikimMetrics;
import java.nio.file.Files;
import java.nio.file.LinkOption;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.List;
import net.minecraft.class_310;
import net.minecraft.class_315;

public final class YikimPresets {
    public static final List<Preset> PRESETS = List.of(new Preset("performance", "Performans", "En y\u00fcksek kare h\u0131z\u0131: k\u0131sa g\u00f6r\u00fc\u015f, minimum par\u00e7ac\u0131k.", 6, 5, 2, 0, 0, 0.5f, 0, false, false, false, 260, 0), new Preset("motor", "Motor", "G\u00f6r\u00fcnt\u00fc motoru: g\u00f6lge yok, biyom harman\u0131 1, entity mesafesi 0,6 \u2014 g\u00f6r\u00fcnt\u00fc normal kal\u0131r, FPS tavan.", 12, 8, 1, 1, 0, 0.6f, 1, true, false, false, 260, 2), new Preset("balanced", "Dengeli", "G\u00f6r\u00fcnt\u00fc ile h\u0131z aras\u0131nda orta yol.", 10, 8, 1, 1, 1, 0.75f, 1, true, false, false, 260, 2), new Preset("quality", "Kalite", "G\u00f6r\u00fcnt\u00fc \u00f6nce: uzun g\u00f6r\u00fc\u015f, t\u00fcm par\u00e7ac\u0131klar.", 16, 12, 0, 2, 2, 1.0f, 2, true, true, true, 144, 5), new Preset("pvp", "PvP", "Rekabet\u00e7i: en k\u0131sa g\u00f6r\u00fc\u015f, s\u0131f\u0131r efekt, s\u0131n\u0131rs\u0131z FPS.", 5, 5, 2, 0, 0, 0.5f, 0, false, false, false, 260, 0));
    private static final long CACHE_MILLIS = 2000L;
    private static String cachedId;
    private static long cachedAt;

    private YikimPresets() {
    }

    public static Preset byId(String id) {
        for (Preset preset : PRESETS) {
            if (!preset.id.equalsIgnoreCase(id)) continue;
            return preset;
        }
        return PRESETS.get(0);
    }

    public static String apply(class_310 client, String id) {
        Preset preset = YikimPresets.byId(id);
        class_315 options = client.field_1690;
        options.method_42503().method_41748(Integer.valueOf(Math.max(2, preset.renderDistance)));
        options.method_42510().method_41748(Integer.valueOf(Math.max(5, preset.simulationDistance)));
        options.method_42517().method_41748(Double.valueOf(preset.entityDistance));
        options.method_41805().method_41748(Integer.valueOf(preset.biomeBlend));
        options.method_41792().method_41748(Boolean.valueOf(preset.ambientOcclusion));
        options.method_42435().method_41748(Boolean.valueOf(preset.entityShadows));
        options.method_42433().method_41748(Boolean.valueOf(preset.vsync));
        options.method_42524().method_41748(Integer.valueOf(preset.maxFps));
        options.method_57702().method_41748(Integer.valueOf(preset.blurriness));
        YikimAdapter.setOption(options, "particles", preset.particles);
        YikimAdapter.setOption(options, "graphics", preset.graphics);
        YikimAdapter.setOption(options, "clouds", preset.clouds);
        options.method_1640();
        YikimBridge.writeProfileChoice(preset.id, preset.keys());
        cachedId = preset.id;
        cachedAt = System.currentTimeMillis();
        YikimMetrics.notify("Profil: " + preset.label + " (ba\u015flat\u0131c\u0131 bu se\u00e7imi koruyacak)");
        return preset.id;
    }

    public static void cycle(class_310 client) {
        String current = YikimPresets.currentId();
        int index = 0;
        for (int i = 0; i < PRESETS.size(); ++i) {
            if (!YikimPresets.PRESETS.get((int)i).id.equals(current)) continue;
            index = i;
            break;
        }
        YikimPresets.apply(client, YikimPresets.PRESETS.get((int)((index + 1) % YikimPresets.PRESETS.size())).id);
    }

    public static String currentId() {
        long now = System.currentTimeMillis();
        if (cachedId != null && now - cachedAt < 2000L) {
            return cachedId;
        }
        cachedAt = now;
        String json = "";
        try {
            Path path = YikimBridge.stateDir().resolve("profile-choice.json");
            if (Files.exists(path, new LinkOption[0])) {
                json = Files.readString(path);
            }
        }
        catch (Throwable path) {
            // empty catch block
        }
        String id = YikimJson.string(json, "profile");
        cachedId = id.isEmpty() ? "performance" : id;
        return cachedId;
    }

    public static void releaseToLauncher() {
        try {
            Files.deleteIfExists(YikimBridge.stateDir().resolve("profile-choice.json"));
        }
        catch (Throwable throwable) {
            // empty catch block
        }
        cachedId = null;
        YikimMetrics.notify("Ba\u015flat\u0131c\u0131 profili ge\u00e7erli");
    }

    public static final class Preset {
        public final String id;
        public final String label;
        public final String description;
        public final int renderDistance;
        public final int simulationDistance;
        public final int particles;
        public final int graphics;
        public final int clouds;
        public final float entityDistance;
        public final int biomeBlend;
        public final boolean ambientOcclusion;
        public final boolean entityShadows;
        public final boolean vsync;
        public final int maxFps;
        public final int blurriness;

        Preset(String id, String label, String description, int renderDistance, int simulationDistance, int particles, int graphics, int clouds, float entityDistance, int biomeBlend, boolean ambientOcclusion, boolean entityShadows, boolean vsync, int maxFps, int blurriness) {
            this.id = id;
            this.label = label;
            this.description = description;
            this.renderDistance = renderDistance;
            this.simulationDistance = simulationDistance;
            this.particles = particles;
            this.graphics = graphics;
            this.clouds = clouds;
            this.entityDistance = entityDistance;
            this.biomeBlend = biomeBlend;
            this.ambientOcclusion = ambientOcclusion;
            this.entityShadows = entityShadows;
            this.vsync = vsync;
            this.maxFps = maxFps;
            this.blurriness = blurriness;
        }

        public List<String> keys() {
            ArrayList<String> keys = new ArrayList<String>();
            keys.add("renderDistance");
            keys.add("simulationDistance");
            keys.add("particles");
            keys.add("graphicsPreset");
            keys.add("graphicsMode");
            keys.add("clouds");
            keys.add("entityDistanceScaling");
            keys.add("biomeBlendRadius");
            keys.add("ao");
            keys.add("entityShadows");
            keys.add("enableVsync");
            keys.add("maxFps");
            keys.add("menuBackgroundBlurriness");
            return keys;
        }
    }
}

