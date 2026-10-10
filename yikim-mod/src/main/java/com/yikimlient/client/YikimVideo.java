/*
 * Decompiled with CFR 0.152.
 * 
 * Could not load the following classes:
 *  net.fabricmc.loader.api.FabricLoader
 *  net.minecraft.class_310
 */
package com.yikimlient.client;

import java.lang.reflect.Method;
import java.util.Locale;
import net.fabricmc.loader.api.FabricLoader;
import net.minecraft.class_310;

public final class YikimVideo {
    private static String backend;
    private static String deviceName;
    private static boolean probed;

    private YikimVideo() {
    }

    public static String gameVersion() {
        return FabricLoader.getInstance().getModContainer("minecraft").map(container -> container.getMetadata().getVersion().getFriendlyString()).orElse("?");
    }

    public static String backend() {
        YikimVideo.probe();
        return backend == null ? "bilinmiyor" : backend;
    }

    public static String device() {
        YikimVideo.probe();
        return deviceName == null ? "bilinmiyor" : deviceName;
    }

    private static void probe() {
        if (probed) {
            return;
        }
        probed = true;
        try {
            String text;
            class_310 client = class_310.method_1551();
            if (client == null) {
                return;
            }
            Object renderSystem = YikimVideo.invoke(client, "getRenderSystem");
            if (renderSystem == null) {
                return;
            }
            Object info = YikimVideo.invoke(renderSystem, "getDeviceInfo");
            if (info == null) {
                return;
            }
            Object name = YikimVideo.invoke(info, "getName");
            Object backendValue = YikimVideo.invoke(info, "getBackendName");
            if (backendValue == null) {
                backendValue = YikimVideo.invoke(info, "getType");
            }
            if (name instanceof String && !(text = (String)name).isBlank()) {
                deviceName = text;
            }
            if (backendValue != null) {
                String raw = backendValue.toString();
                String lower = raw.toLowerCase(Locale.ROOT);
                backend = lower.contains("vulkan") ? "Vulkan" : (lower.contains("opengl") || lower.contains("gl") ? "OpenGL" : raw);
            }
        }
        catch (Throwable throwable) {
            // empty catch block
        }
    }

    private static Object invoke(Object target, String name) {
        try {
            Method method = target.getClass().getMethod(name, new Class[0]);
            return method.invoke(target, new Object[0]);
        }
        catch (Throwable ignored) {
            return null;
        }
    }

    public static String[] systemLines() {
        Runtime runtime = Runtime.getRuntime();
        long maxMb = runtime.maxMemory() / 0x100000L;
        long usedMb = (runtime.totalMemory() - runtime.freeMemory()) / 0x100000L;
        String java = System.getProperty("java.version", "?");
        String launcherPreset = System.getProperty("yikimlient.presetName", "bilinmiyor");
        String memory = System.getProperty("yikimlient.memoryMb", "");
        return new String[]{"Grafik arka ucu: " + YikimVideo.backend(), "Ekran kart\u0131: " + YikimVideo.device(), "Java: " + java + " (" + System.getProperty("java.vm.name", "?") + ")", "Bellek: " + usedMb + " / " + maxMb + " MB", "JVM profili: " + launcherPreset + (String)(memory.isEmpty() ? "" : " (" + memory + " MB)"), "Oyun klas\u00f6r\u00fc: " + String.valueOf(FabricLoader.getInstance().getGameDir())};
    }
}

