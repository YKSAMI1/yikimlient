package com.yikimlient.client;

import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Locale;
import java.util.Map;
import java.util.Set;
import net.minecraft.class_1011;
import net.minecraft.class_1043;
import net.minecraft.class_2960;
import net.minecraft.class_310;
import net.minecraft.class_327;
import net.minecraft.class_332;

/**
 * Oyun içi ikon sistemi — TAMAMEN YEREL.
 *
 * Launcher oyun açılmadan ikon PNG'lerini `.yikim/icons/` altına indirir ve
 * `.yikim/mod-icons.txt` manifestini yazar (dosyaAdı<TAB>url). Mod oyun içinde
 * AĞA HİÇ DOKUNMAZ: yalnızca yerel dosyadan NativeImage yükleyip TextureManager'a
 * kaydeder. Dosya yoksa veya herhangi bir adım patlarsa harf rozeti gösterilir —
 * bozuk doku / siyah kare / eksik doku durumu imkansızdır.
 */
public final class YikimIcons {
    private static final Map<String, String> URLS = new HashMap<String, String>();
    private static final Map<String, class_2960> TEXTURES = new HashMap<String, class_2960>();
    private static final Set<String> FAILED = new HashSet<String>();
    private static final long MANIFEST_TTL_MS = 5000L;
    private static long manifestAt;

    private YikimIcons() {
    }

    private static Path stateDir() {
        return net.fabricmc.loader.api.FabricLoader.getInstance().getGameDir().resolve(".yikim");
    }

    /** Mod ile launcher aynı şablonu kullanır: toHexString(url.hashCode()) + "-" + toHexString(len) + ".png" */
    private static Path cacheFile(String url) {
        String name = Integer.toHexString(url.hashCode()) + "-" + Integer.toHexString(url.length()) + ".png";
        return YikimIcons.stateDir().resolve("icons").resolve(name);
    }

    private static synchronized void loadManifest() {
        long now = System.currentTimeMillis();
        if (now - manifestAt < YikimIcons.MANIFEST_TTL_MS && !YikimIcons.URLS.isEmpty()) {
            return;
        }
        manifestAt = now;
        try {
            Path f = YikimIcons.stateDir().resolve("mod-icons.txt");
            if (!Files.isRegularFile(f)) {
                return;
            }
            YikimIcons.URLS.clear();
            for (String line : Files.readAllLines(f)) {
                int tab = line.indexOf('\t');
                if (tab <= 0) continue;
                String url = line.substring(tab + 1).trim();
                if (url.isEmpty() || url.startsWith("data:")) continue;
                YikimIcons.URLS.put(line.substring(0, tab), url);
            }
        }
        catch (Throwable ignored) {
            // manifest yoksa/bozuksa rozetler gösterilir; oyun etkilenmez
        }
    }

    private static String urlFor(String key, String overrideUrl) {
        if (overrideUrl != null && !overrideUrl.isEmpty() && !overrideUrl.startsWith("data:")) {
            return overrideUrl;
        }
        YikimIcons.loadManifest();
        return YikimIcons.URLS.get(key);
    }

    /** Render iş parçacığında: yerel PNG'den doku kur. Her hata rozete düşer, asla istisna fırlatmaz. */
    private static class_2960 register(String key, Path file) {
        try (InputStream in = Files.newInputStream(file)) {
            class_1011 image = class_1011.method_4309(in);
            class_1043 texture = new class_1043(() -> "yikim-icon", image);
            String safe = key.replaceAll("[^a-z0-9_-]", "-");
            if (safe.length() > 48) {
                safe = safe.substring(0, 48);
            }
            class_2960 id = class_2960.method_43902("yikimlient", "icons/" + Integer.toHexString(key.hashCode()) + "-" + safe);
            class_310.method_1551().method_1531().method_4616(id, texture);
            texture.method_4524();
            YikimIcons.TEXTURES.put(key, id);
            return id;
        }
        catch (Throwable ignored) {
            YikimIcons.FAILED.add(key);
            return null;
        }
    }

    /** İkonu çiz; her koşulda güvenli: doku → rozet. */
    public static void draw(class_332 graphics, class_327 font, String key, String url, String label, int x, int y, int size) {
        try {
            class_2960 id = YikimIcons.TEXTURES.get(key);
            if (id == null && !YikimIcons.FAILED.contains(key)) {
                String realUrl = YikimIcons.urlFor(key, url);
                if (realUrl != null) {
                    Path file = YikimIcons.cacheFile(realUrl);
                    if (Files.isRegularFile(file)) {
                        id = YikimIcons.register(key, file);
                    }
                }
            }
            if (id == null) {
                YikimIcons.letterBadge(graphics, font, label, x, y, size);
                return;
            }
            graphics.method_70845(id, x, y, size, size, 0.0f, 0.0f, 1.0f, 1.0f);
        }
        catch (Throwable ignored) {
            // doku çizimi beklenmedik biçimde patlarsa: rozet (asla bozuk kare)
            YikimIcons.letterBadge(graphics, font, label, x, y, size);
        }
    }

    /** YIKIM çekirdeği rozeti: turuncu kutu + beyaz Y (launcher markası). */
    public static void drawBadge(class_332 graphics, class_327 font, int x, int y, int size) {
        YikimDraw.roundedFill(graphics, x, y, x + size, y + size, YikimTheme.alpha(YikimTheme.accent, 255));
        YikimAdapter.textCentered(graphics, font, "Y", x + size / 2, y + (size - 8) / 2, -15724524, true);
    }

    /** İkon yoksa: koyu kutu + adın ilk harfi. */
    private static void letterBadge(class_332 graphics, class_327 font, String label, int x, int y, int size) {
        YikimDraw.roundedFill(graphics, x, y, x + size, y + size, 0xFF1D1D24);
        YikimDraw.outline(graphics, x, y, size, size, YikimTheme.alpha(YikimTheme.accent, 70));
        if (label != null && !label.isEmpty()) {
            String letter = label.substring(0, 1).toUpperCase(Locale.ROOT);
            YikimAdapter.textCentered(graphics, font, letter, x + size / 2, y + (size - 8) / 2, YikimTheme.alpha(YikimTheme.accent, 210), true);
        }
    }
}
