/*
 * Decompiled with CFR 0.152.
 * 
 * Could not load the following classes:
 *  net.fabricmc.loader.api.FabricLoader
 */
package com.yikimlient.client;

import com.yikimlient.client.YikimWidget;
import com.yikimlient.client.YikimWidgets;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.nio.file.Files;
import java.nio.file.LinkOption;
import java.nio.file.OpenOption;
import java.nio.file.Path;
import java.nio.file.StandardCopyOption;
import java.nio.file.attribute.FileAttribute;
import java.util.LinkedHashMap;
import java.util.Locale;
import java.util.Map;
import java.util.Properties;
import net.fabricmc.loader.api.FabricLoader;

public final class YikimConfig {
    private static final String FILE_NAME = "yikimlient.cfg";
    private static final String WIDGET_PREFIX = "widget.";
    private static final String PERFORMANCE_DEFAULTS_KEY = "performans.hafif-varsayilanlar";
    private static final int PERFORMANCE_DEFAULTS_VERSION = 3;
    private static YikimConfig instance;
    public boolean hudEnabled = true;
    public float hudScale = 1.0f;
    public boolean hudShadow = true;
    public boolean hudBackdrop = true;
    public String hudStyle = "sade";
    public boolean openOnFirstJoin = true;
    public boolean paused;
    public boolean showDiagnostics = false;
    public boolean diagnosticsToChat = false;
    public int accent = -34280;
    public int accent2 = -49920;
    public int backdrop = -16119284;
    public boolean customAccent;
    public String catalogSource = "modrinth";
    public boolean customMainMenu = true;
    public String backdropStyle = "random";
    public final Map<String, WidgetState> widgets = new LinkedHashMap<String, WidgetState>();
    private int performanceDefaultsVersion;

    public static YikimConfig get() {
        if (instance == null) {
            instance = YikimConfig.load();
        }
        return instance;
    }

    public static Path file() {
        return FabricLoader.getInstance().getConfigDir().resolve(FILE_NAME);
    }

    private static YikimConfig load() {
        YikimConfig config = new YikimConfig();
        Properties properties = new Properties();
        Path path = YikimConfig.file();
        if (Files.exists(path, new LinkOption[0])) {
            try (InputStream in = Files.newInputStream(path, new OpenOption[0]);){
                properties.load(in);
            }
            catch (IOException ignored) {
                return config;
            }
        }
        config.hudEnabled = YikimConfig.bool(properties, "hud.enabled", config.hudEnabled);
        config.hudScale = (float)YikimConfig.number(properties, "hud.scale", config.hudScale);
        config.hudShadow = YikimConfig.bool(properties, "hud.shadow", config.hudShadow);
        config.hudBackdrop = YikimConfig.bool(properties, "hud.backdrop", config.hudBackdrop);
        config.hudStyle = properties.getProperty("hud.gorunum", config.hudStyle).trim().toLowerCase(Locale.ROOT);
        config.openOnFirstJoin = YikimConfig.bool(properties, "panel.ilk-giriste", config.openOnFirstJoin);
        config.paused = YikimConfig.bool(properties, "tani.duraklat", config.paused);
        config.showDiagnostics = YikimConfig.bool(properties, "teshis.acik", config.showDiagnostics);
        config.diagnosticsToChat = YikimConfig.bool(properties, "teshis.sohbete", config.diagnosticsToChat);
        config.accent = (int)YikimConfig.number(properties, "renk.accent", config.accent);
        config.accent2 = (int)YikimConfig.number(properties, "renk.accent2", config.accent2);
        config.backdrop = (int)YikimConfig.number(properties, "renk.arka", config.backdrop);
        config.customAccent = YikimConfig.bool(properties, "renk.ozel", config.customAccent);
        config.catalogSource = properties.getProperty("katalog.kaynak", config.catalogSource).toLowerCase(Locale.ROOT);
        config.customMainMenu = YikimConfig.bool(properties, "menu.yikim", config.customMainMenu);
        config.backdropStyle = properties.getProperty("menu.arka", config.backdropStyle).trim().toLowerCase(Locale.ROOT);
        for (YikimWidget widget : YikimWidgets.all()) {
            WidgetState state = new WidgetState();
            state.enabled = YikimConfig.bool(properties, WIDGET_PREFIX + widget.id() + ".acik", widget.defaultEnabled());
            state.order = (int)YikimConfig.number(properties, WIDGET_PREFIX + widget.id() + ".sira", widget.defaultOrder());
            state.region = properties.getProperty(WIDGET_PREFIX + widget.id() + ".bolge", widget.region().name());
            state.offsetX = (int)YikimConfig.number(properties, WIDGET_PREFIX + widget.id() + ".x", 0.0);
            state.offsetY = (int)YikimConfig.number(properties, WIDGET_PREFIX + widget.id() + ".y", 0.0);
            state.scale = (float)YikimConfig.number(properties, WIDGET_PREFIX + widget.id() + ".olcek", 1.0);
            config.widgets.put(widget.id(), state);
        }
        int performanceDefaults = (int)YikimConfig.number(properties, PERFORMANCE_DEFAULTS_KEY, 0.0);
        if (performanceDefaults < 2) {
            config.hudStyle = "sade";
            config.showDiagnostics = false;
            for (String id : new String[]{"cps", "koordinat", "yon", "boyut", "ping"}) {
                config.widget((String)id).enabled = false;
            }
        }
        if (performanceDefaults < 3) {
            // v3: ana menü arka planı her açılışta rastgele seçilir — asla "kapalı" kalmaz.
            // Panelin Görünüm sekmesinden yine sabit stil seçilebilir (cycle bunu yazar).
            config.backdropStyle = "random";
        }
        if (performanceDefaults < PERFORMANCE_DEFAULTS_VERSION) {
            config.performanceDefaultsVersion = PERFORMANCE_DEFAULTS_VERSION;
            config.save();
        } else {
            config.performanceDefaultsVersion = performanceDefaults;
        }
        return config;
    }

    public void save() {
        Properties properties = new Properties();
        properties.setProperty("hud.enabled", Boolean.toString(this.hudEnabled));
        properties.setProperty("hud.scale", Float.toString(this.hudScale));
        properties.setProperty("hud.shadow", Boolean.toString(this.hudShadow));
        properties.setProperty("hud.backdrop", Boolean.toString(this.hudBackdrop));
        properties.setProperty("hud.gorunum", this.hudStyle == null ? "cip" : this.hudStyle);
        properties.setProperty("panel.ilk-giriste", Boolean.toString(this.openOnFirstJoin));
        properties.setProperty("tani.duraklat", Boolean.toString(this.paused));
        properties.setProperty("teshis.acik", Boolean.toString(this.showDiagnostics));
        properties.setProperty("teshis.sohbete", Boolean.toString(this.diagnosticsToChat));
        properties.setProperty("renk.accent", Integer.toString(this.accent));
        properties.setProperty("renk.accent2", Integer.toString(this.accent2));
        properties.setProperty("renk.arka", Integer.toString(this.backdrop));
        properties.setProperty("renk.ozel", Boolean.toString(this.customAccent));
        properties.setProperty("katalog.kaynak", this.catalogSource);
        properties.setProperty("menu.yikim", Boolean.toString(this.customMainMenu));
        properties.setProperty("menu.arka", this.backdropStyle == null ? "random" : this.backdropStyle);
        properties.setProperty(PERFORMANCE_DEFAULTS_KEY, Integer.toString(this.performanceDefaultsVersion));
        for (Map.Entry<String, WidgetState> entry : this.widgets.entrySet()) {
            WidgetState state = entry.getValue();
            String prefix = WIDGET_PREFIX + entry.getKey() + ".";
            properties.setProperty(prefix + "acik", Boolean.toString(state.enabled));
            properties.setProperty(prefix + "sira", Integer.toString(state.order));
            properties.setProperty(prefix + "bolge", state.region);
            properties.setProperty(prefix + "x", Integer.toString(state.offsetX));
            properties.setProperty(prefix + "y", Integer.toString(state.offsetY));
            properties.setProperty(prefix + "olcek", Float.toString(state.scale));
        }
        Path path = YikimConfig.file();
        try {
            Files.createDirectories(path.getParent(), new FileAttribute[0]);
            Path temp = path.resolveSibling("yikimlient.cfg.tmp");
            try (OutputStream out = Files.newOutputStream(temp, new OpenOption[0]);){
                properties.store(out, "YIKIM Client " + YikimClient.MOD_VERSION + " \u2014 oyun i\u00e7i ayarlar");
            }
            Files.move(temp, path, StandardCopyOption.REPLACE_EXISTING);
        }
        catch (IOException iOException) {
            // empty catch block
        }
    }

    public WidgetState widget(String id) {
        return this.widgets.computeIfAbsent(id, key -> new WidgetState());
    }

    private static boolean bool(Properties properties, String key, boolean fallback) {
        String raw = properties.getProperty(key);
        return raw == null ? fallback : Boolean.parseBoolean(raw.trim());
    }

    private static double number(Properties properties, String key, double fallback) {
        String raw = properties.getProperty(key);
        if (raw == null) {
            return fallback;
        }
        try {
            return Double.parseDouble(raw.trim());
        }
        catch (NumberFormatException ignored) {
            return fallback;
        }
    }

    public static final class WidgetState {
        public boolean enabled = true;
        public int order;
        public String region = "TOP_LEFT";
        public int offsetX;
        public int offsetY;
        public float scale = 1.0f;
    }
}

