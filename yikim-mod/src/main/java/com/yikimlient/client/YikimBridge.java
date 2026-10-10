/*
 * Decompiled with CFR 0.152.
 * 
 * Could not load the following classes:
 *  net.fabricmc.loader.api.FabricLoader
 */
package com.yikimlient.client;

import com.yikimlient.client.YikimJson;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.LinkOption;
import java.nio.file.OpenOption;
import java.nio.file.Path;
import java.nio.file.attribute.FileAttribute;
import java.util.ArrayList;
import java.util.List;
import net.fabricmc.loader.api.FabricLoader;

public final class YikimBridge {
    private YikimBridge() {
    }

    public static Path stateDir() {
        return FabricLoader.getInstance().getGameDir().resolve(".yikim");
    }

    public static Path themeFile() {
        return YikimBridge.stateDir().resolve("theme.json");
    }

    public static Path restartFile() {
        return YikimBridge.stateDir().resolve("restart-request.json");
    }

    public static Path catalogRequestFile() {
        return YikimBridge.stateDir().resolve("catalog-request.json");
    }

    public static Path catalogResponseFile() {
        return YikimBridge.stateDir().resolve("catalog-response.txt");
    }

    public static Path defaultsFile() {
        return YikimBridge.stateDir().resolve("defaults.json");
    }

    public static void markReady(String reason) {
        try {
            Path dir = YikimBridge.stateDir();
            Files.createDirectories(dir, new FileAttribute[0]);
            String instance = System.getProperty("yikimlient.instance", "");
            String json = "{\n  \"at\": " + System.currentTimeMillis() + ",\n  \"reason\": \"" + YikimJson.escape(reason) + "\",\n  \"mod\": \"1.5.0\",\n  \"instance\": \"" + YikimJson.escape(instance) + "\"\n}\n";
            Files.writeString(dir.resolve("ready"), (CharSequence)json, StandardCharsets.UTF_8, new OpenOption[0]);
        }
        catch (Throwable throwable) {
            // empty catch block
        }
    }

    public static boolean requestRestart(String reason, List<String[]> decisions, List<String[]> installs) {
        try {
            Path dir = YikimBridge.stateDir();
            Files.createDirectories(dir, new FileAttribute[0]);
            String instance = System.getProperty("yikimlient.instance", "");
            StringBuilder mods = new StringBuilder();
            for (String[] stringArray : decisions) {
                if (mods.length() > 0) {
                    mods.append(",\n");
                }
                mods.append("    { \"id\": \"").append(YikimJson.escape(stringArray[0])).append("\", \"file\": \"").append(YikimJson.escape(stringArray[1])).append("\", \"on\": ").append(stringArray[2]).append(" }");
            }
            StringBuilder installJson = new StringBuilder();
            for (String[] install : installs) {
                if (installJson.length() > 0) {
                    installJson.append(",\n");
                }
                installJson.append("    { \"source\": \"").append(YikimJson.escape(install[0])).append("\", \"id\": \"").append(YikimJson.escape(install[1])).append("\", \"name\": \"").append(YikimJson.escape(install[2])).append("\" }");
            }
            String string = "{\n  \"at\": " + System.currentTimeMillis() + ",\n  \"reason\": \"" + YikimJson.escape(reason) + "\",\n  \"instance\": \"" + YikimJson.escape(instance) + "\",\n  \"mod\": \"1.5.0\",\n  \"changes\": [],\n  \"mods\": [\n" + String.valueOf(mods) + "\n  ],\n  \"installs\": [\n" + String.valueOf(installJson) + "\n  ]\n}\n";
            Files.writeString(YikimBridge.restartFile(), (CharSequence)string, StandardCharsets.UTF_8, new OpenOption[0]);
            return true;
        }
        catch (Throwable ignored) {
            return false;
        }
    }

    public static long writeCatalogRequest(String query, String source, int limit) {
        long id = System.currentTimeMillis();
        try {
            Path dir = YikimBridge.stateDir();
            Files.createDirectories(dir, new FileAttribute[0]);
            String instance = System.getProperty("yikimlient.instance", "");
            String json = "{\n  \"id\": " + id + ",\n  \"query\": \"" + YikimJson.escape(query) + "\",\n  \"source\": \"" + YikimJson.escape(source) + "\",\n  \"limit\": " + limit + ",\n  \"instance\": \"" + YikimJson.escape(instance) + "\"\n}\n";
            Files.writeString(YikimBridge.catalogRequestFile(), (CharSequence)json, StandardCharsets.UTF_8, new OpenOption[0]);
            return id;
        }
        catch (Throwable ignored) {
            return -1L;
        }
    }

    public static CatalogResponse readCatalogResponse(long requestId) {
        try {
            Path path = YikimBridge.catalogResponseFile();
            if (!Files.exists(path, new LinkOption[0])) {
                return null;
            }
            List<String> lines = Files.readAllLines(path, StandardCharsets.UTF_8);
            if (lines.isEmpty()) {
                return null;
            }
            String header = lines.get(0);
            long id = YikimJson.longNumber(header, "id", -1L);
            if (id != requestId) {
                return null;
            }
            CatalogResponse response = new CatalogResponse();
            response.source = YikimJson.string(header, "source");
            response.error = YikimJson.string(header, "error");
            response.total = YikimJson.number(header, "total", 0);
            for (int i = 1; i < lines.size(); ++i) {
                String[] parts;
                String line = lines.get(i);
                if (line.isBlank() || (parts = line.split("\t", -1)).length < 3) continue;
                CatalogHit hit = new CatalogHit();
                hit.slug = parts[0];
                hit.title = parts[1];
                hit.description = parts.length > 2 ? parts[2] : "";
                hit.downloads = parts.length > 3 ? parts[3] : "";
                hit.author = parts.length > 4 ? parts[4] : "";
                // 7. kolon: ikon URL'si (launcher katalog yanıtında taşır)
                hit.icon = parts.length > 6 ? parts[6] : "";
                response.hits.add(hit);
            }
            return response;
        }
        catch (Throwable ignored) {
            return null;
        }
    }

    public static String readDefaults() {
        try {
            Path path = YikimBridge.defaultsFile();
            if (!Files.exists(path, new LinkOption[0])) {
                return "";
            }
            return Files.readString(path, StandardCharsets.UTF_8);
        }
        catch (Throwable ignored) {
            return "";
        }
    }

    public static void writeProfileChoice(String profileId, List<String> keys) {
        try {
            Path dir = YikimBridge.stateDir();
            Files.createDirectories(dir, new FileAttribute[0]);
            StringBuilder owned = new StringBuilder();
            for (String key : keys) {
                if (owned.length() > 0) {
                    owned.append(", ");
                }
                owned.append("\"").append(YikimJson.escape(key)).append("\"");
            }
            String json = "{\n  \"at\": " + System.currentTimeMillis() + ",\n  \"profile\": \"" + YikimJson.escape(profileId) + "\",\n  \"source\": \"in-game\",\n  \"playerOwned\": [" + String.valueOf(owned) + "]\n}\n";
            Files.writeString(dir.resolve("profile-choice.json"), (CharSequence)json, StandardCharsets.UTF_8, new OpenOption[0]);
        }
        catch (Throwable throwable) {
            // empty catch block
        }
    }

    public static final class CatalogResponse {
        public String source = "";
        public String error = "";
        public int total;
        public final List<CatalogHit> hits = new ArrayList<CatalogHit>();
    }

    public static final class CatalogHit {
        public String slug = "";
        public String title = "";
        public String description = "";
        public String downloads = "";
        public String author = "";
        public String icon = "";
    }
}

