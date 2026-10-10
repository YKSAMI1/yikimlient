/*
 * Decompiled with CFR 0.152.
 * 
 * Could not load the following classes:
 *  net.fabricmc.loader.api.FabricLoader
 *  net.fabricmc.loader.api.ModContainer
 *  net.fabricmc.loader.api.metadata.ModMetadata
 */
package com.yikimlient.client;

import com.yikimlient.client.YikimMetrics;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.LinkOption;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Set;
import java.util.zip.ZipEntry;
import java.util.zip.ZipFile;
import net.fabricmc.loader.api.FabricLoader;
import net.fabricmc.loader.api.ModContainer;
import net.fabricmc.loader.api.metadata.ModMetadata;

public final class YikimModBridge {
    private static final Set<String> BUNDLED = Set.of("sodium", "lithium", "ferrite-core", "immediatelyfast", "entityculling", "moreculling", "krypton", "badoptimizations", "c2me-fabric", "noisium", "scalablelux", "threadtweak", "dynamic-fps", "memoryleakfix", "clumps", "modernfix", "sodium-extra", "iris", "cull-less-leaves", "ebe", "exordium", "very-many-players", "debugify", "zoomify", "betterf3", "modmenu", "cloth-config", "yacl", "fabric-language-kotlin");
    private static List<ModEntry> cached;
    private static int cachedStamp;
    private static final Map<String, String[]> PENDING;

    private YikimModBridge() {
    }

    public static List<ModEntry> mods() {
        int stamp = YikimModBridge.stamp();
        if (cached != null && cachedStamp == stamp) {
            return cached;
        }
        ArrayList<ModEntry> entries = new ArrayList<ModEntry>();
        for (ModContainer container : FabricLoader.getInstance().getAllMods()) {
            ModMetadata metadata = container.getMetadata();
            String id = metadata.getId();
            entries.add(new ModEntry(id, metadata.getName(), metadata.getVersion().getFriendlyString(), YikimModBridge.fileNameOf(container), "yikimlient".equals(id), BUNDLED.contains(id), false));
        }
        entries.addAll(YikimModBridge.disabledEntries(entries));
        entries.sort(Comparator.<ModEntry, Boolean>comparing(entry -> entry.disabled).thenComparing(entry -> !entry.builtin).thenComparing(entry -> entry.name.toLowerCase(Locale.ROOT)));
        cached = entries;
        cachedStamp = stamp;
        return entries;
    }

    private static int stamp() {
        int count = FabricLoader.getInstance().getAllMods().size();
        int files = 0;
        try {
            Path dir = YikimModBridge.modsDir();
            if (Files.isDirectory(dir, new LinkOption[0])) {
                files = Files.list(dir).toList().size();
            }
        }
        catch (Throwable ignored) {
            files = 0;
        }
        return count * 1000 + files;
    }

    private static Path modsDir() {
        return FabricLoader.getInstance().getGameDir().resolve("mods");
    }

    private static String fileNameOf(ModContainer container) {
        try {
            return container.getRootPaths().stream().findFirst().map(Path::getFileName).map(Path::toString).orElse("");
        }
        catch (Throwable ignored) {
            return "";
        }
    }

    private static List<ModEntry> disabledEntries(List<ModEntry> loaded) {
        ArrayList<ModEntry> result = new ArrayList<ModEntry>();
        try {
            Path dir = YikimModBridge.modsDir();
            if (!Files.isDirectory(dir, new LinkOption[0])) {
                return result;
            }
            List<Path> files = Files.list(dir).toList();
            for (Path path : files) {
                String id;
                String file = path.getFileName().toString();
                if (!file.endsWith(".jar.disabled")) continue;
                String[] meta = YikimModBridge.readJarMeta(path);
                String string = id = meta[0].isEmpty() ? file.replace(".jar.disabled", "") : meta[0];
                boolean duplicate = loaded.stream().anyMatch(entry -> entry.id.equals(id));
                if (duplicate) continue;
                result.add(new ModEntry(id, meta[1].isEmpty() ? id : meta[1], meta[2].isEmpty() ? "devre d\u0131\u015f\u0131" : meta[2], file, false, BUNDLED.contains(id), true));
            }
        }
        catch (Throwable throwable) {
            // empty catch block
        }
        try {
            // eski yerleşim: launcher'ın disabled_mods/ klasörü (sürüp mods/'a taşınsa da
            // burada yakalanır — iki taraf da kapatılan modu asla gizlemez)
            Path legacy = YikimModBridge.modsDir().getParent().resolve("disabled_mods");
            if (Files.isDirectory(legacy, new LinkOption[0])) {
                for (Path path : Files.list(legacy).toList()) {
                    String file = path.getFileName().toString();
                    if (!file.endsWith(".jar")) continue;
                    String[] meta = YikimModBridge.readJarMeta(path);
                    String id = meta[0].isEmpty() ? file.replace(".jar", "") : meta[0];
                    boolean duplicate = loaded.stream().anyMatch(entry -> entry.id.equals(id))
                        || result.stream().anyMatch(entry -> entry.id.equals(id));
                    if (duplicate) continue;
                    result.add(new ModEntry(id, meta[1].isEmpty() ? id : meta[1], meta[2].isEmpty() ? "devre d\u0131\u015f\u0131" : meta[2], file, false, BUNDLED.contains(id), true));
                }
            }
        }
        catch (Throwable throwable) {
            // empty catch block
        }
        return result;
    }

    /*
     * Enabled aggressive block sorting
     * Enabled unnecessary exception pruning
     * Enabled aggressive exception aggregation
     */
    private static String[] readJarMeta(Path jar) {
        String[] meta = new String[]{"", "", ""};
        try (ZipFile zip = new ZipFile(jar.toFile());){
            ZipEntry entry = zip.getEntry("fabric.mod.json");
            if (entry == null) {
                String[] stringArray = meta;
                return stringArray;
            }
            try (InputStream stream = zip.getInputStream(entry);){
                String json = new String(stream.readAllBytes(), StandardCharsets.UTF_8);
                meta[0] = JsonFields.value(json, "id");
                meta[1] = JsonFields.value(json, "name");
                meta[2] = JsonFields.value(json, "version");
                return meta;
            }
        }
        catch (Throwable throwable) {
            // empty catch block
        }
        return meta;
    }

    public static boolean isPending(String id) {
        return PENDING.containsKey(id);
    }

    public static int pendingCount() {
        return PENDING.size();
    }

    public static void toggle(ModEntry entry) {
        if (!entry.toggleable()) {
            YikimMetrics.notify(entry.name + " kapat\u0131lamaz");
            return;
        }
        boolean wanted = !entry.enabled();
        if (wanted == !entry.disabled) {
            PENDING.remove(entry.id);
            YikimMetrics.notify(entry.name + " de\u011fi\u015fiklik listesinden \u00e7\u0131kar\u0131ld\u0131");
            return;
        }
        PENDING.put(entry.id, new String[]{entry.id, entry.fileName, Boolean.toString(wanted)});
        YikimMetrics.notify(entry.name + (wanted ? " a\u00e7\u0131lacak" : " kapat\u0131lacak") + " (" + PENDING.size() + " de\u011fi\u015fiklik)");
    }

    public static List<String[]> decisions() {
        return new ArrayList<String[]>(PENDING.values());
    }

    public static void clearPending() {
        PENDING.clear();
    }

    public static int loadedCount() {
        int count = 0;
        for (ModEntry entry : YikimModBridge.mods()) {
            if (entry.disabled) continue;
            ++count;
        }
        return count;
    }

    public static int disabledCount() {
        int count = 0;
        for (ModEntry entry : YikimModBridge.mods()) {
            if (!entry.disabled) continue;
            ++count;
        }
        return count;
    }

    static {
        cachedStamp = -1;
        PENDING = new LinkedHashMap<String, String[]>();
    }

    public static final class ModEntry {
        public final String id;
        public final String name;
        public final String version;
        public final String fileName;
        public final boolean builtin;
        public final boolean bundled;
        public final boolean disabled;

        ModEntry(String id, String name, String version, String fileName, boolean builtin, boolean bundled, boolean disabled) {
            this.id = id;
            this.name = name;
            this.version = version;
            this.fileName = fileName;
            this.builtin = builtin;
            this.bundled = bundled;
            this.disabled = disabled;
        }

        public boolean toggleable() {
            return !this.builtin && !"fabric-api".equals(this.id);
        }

        public boolean enabled() {
            String[] pending = PENDING.get(this.id);
            return pending == null ? !this.disabled : Boolean.parseBoolean(pending[2]);
        }

        public String meta() {
            StringBuilder out = new StringBuilder();
            out.append(this.id).append("  \u2022  ").append(this.version);
            if (this.bundled) {
                out.append("  \u2022  optimize paketi");
            }
            if (this.disabled) {
                out.append("  \u2022  devre d\u0131\u015f\u0131");
            }
            return out.toString();
        }
    }

    private static final class JsonFields {
        private JsonFields() {
        }

        static String value(String json, String key) {
            int start;
            String needle = "\"" + key + "\"";
            int index = json.indexOf(needle);
            if (index < 0) {
                return "";
            }
            int colon = json.indexOf(58, index + needle.length());
            if (colon < 0) {
                return "";
            }
            for (start = colon + 1; start < json.length() && Character.isWhitespace(json.charAt(start)); ++start) {
            }
            if (start >= json.length() || json.charAt(start) != '\"') {
                return "";
            }
            int end = start + 1;
            StringBuilder out = new StringBuilder();
            while (end < json.length()) {
                char current = json.charAt(end);
                if (current == '\\' && end + 1 < json.length()) {
                    end += 2;
                    continue;
                }
                if (current == '\"') break;
                out.append(current);
                ++end;
            }
            return out.toString();
        }
    }
}

