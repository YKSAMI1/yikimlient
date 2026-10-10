/*
 * Decompiled with CFR 0.152.
 * 
 * Could not load the following classes:
 *  net.minecraft.class_310
 */
package com.yikimlient.client;

import com.yikimlient.client.YikimBridge;
import com.yikimlient.client.YikimConfig;
import com.yikimlient.client.YikimMetrics;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import net.minecraft.class_310;

public final class YikimCatalog {
    private static final long POLL_MILLIS = 250L;
    private static final long DEBOUNCE_MILLIS = 420L;
    private static String query = "";
    private static String lastQuery = "\u0000";
    private static String source = "modrinth";
    private static long pendingId = -1L;
    private static long lastRequestAt;
    private static long lastPollAt;
    private static long dirtyAt;
    private static boolean loading;
    private static String error;
    private static int total;
    private static int revision;
    private static final List<YikimBridge.CatalogHit> HITS;
    private static final List<String[]> QUEUE;

    private YikimCatalog() {
    }

    public static String query() {
        return query;
    }

    public static void append(char character) {
        if (query.length() < 48 && !Character.isISOControl(character)) {
            query = query + character;
        }
    }

    public static void backspace() {
        if (!query.isEmpty()) {
            query = query.substring(0, query.length() - 1);
        }
    }

    public static void clear() {
        query = "";
        lastQuery = "\u0000";
        HITS.clear();
        error = "";
        total = 0;
        ++revision;
    }

    public static int revision() {
        return revision;
    }

    public static void markDirty() {
        dirtyAt = System.currentTimeMillis();
    }

    public static String source() {
        return source;
    }

    public static void toggleSource() {
        YikimConfig.get().catalogSource = source = source.equals("modrinth") ? "curseforge" : "modrinth";
        YikimConfig.get().save();
        YikimCatalog.search();
        ++revision;
    }

    public static void setSource(String value) {
        source = value;
    }

    public static boolean loading() {
        return loading;
    }

    public static String error() {
        return error;
    }

    public static int total() {
        return total;
    }

    public static List<YikimBridge.CatalogHit> hits() {
        return HITS;
    }

    public static List<String[]> queue() {
        return QUEUE;
    }

    public static boolean isQueued(String slug) {
        for (String[] item : QUEUE) {
            if (!item[1].equalsIgnoreCase(slug)) continue;
            return true;
        }
        return false;
    }

    public static void ensureResults() {
        if (loading) {
            return;
        }
        if (query.equals(lastQuery) && !HITS.isEmpty()) {
            return;
        }
        YikimCatalog.search();
    }

    public static void search() {
        long now = System.currentTimeMillis();
        if (loading && now - lastRequestAt < 1500L) {
            return;
        }
        dirtyAt = 0L;
        loading = true;
        error = "";
        lastRequestAt = now;
        lastQuery = query;
        pendingId = YikimBridge.writeCatalogRequest(query, source, 40);
        if (pendingId < 0L) {
            loading = false;
            error = "\u0130stek yaz\u0131lamad\u0131 (oyun klas\u00f6r\u00fc salt okunur olabilir).";
        }
    }

    public static void tick(class_310 client) {
        long now = System.currentTimeMillis();
        if (dirtyAt > 0L && now - dirtyAt >= 420L && !loading) {
            YikimCatalog.search();
        }
        if (pendingId < 0L) {
            return;
        }
        if (now - lastPollAt < 250L) {
            return;
        }
        lastPollAt = now;
        YikimBridge.CatalogResponse response = YikimBridge.readCatalogResponse(pendingId);
        if (response == null) {
            if (now - lastRequestAt > 15000L) {
                loading = false;
                pendingId = -1L;
                error = "Ba\u015flat\u0131c\u0131 yan\u0131t vermedi. Launcher'\u0131n a\u00e7\u0131k oldu\u011fundan emin ol.";
            }
            return;
        }
        loading = false;
        pendingId = -1L;
        total = response.total;
        error = response.error == null ? "" : response.error;
        HITS.clear();
        HITS.addAll(response.hits);
        if (HITS.isEmpty() && error.isEmpty()) {
            error = "\"" + query + "\" i\u00e7in sonu\u00e7 yok.";
        }
        ++revision;
    }

    public static void queue(YikimBridge.CatalogHit hit) {
        if (YikimCatalog.isQueued(hit.slug)) {
            return;
        }
        QUEUE.add(new String[]{source, hit.slug, hit.title});
        YikimMetrics.notify(hit.title + " kuyru\u011fa eklendi (" + QUEUE.size() + ")");
        ++revision;
    }

    public static void dequeue(String slug) {
        QUEUE.removeIf(item -> item[1].equalsIgnoreCase(slug));
        ++revision;
    }

    public static List<String[]> queueCopy() {
        return new ArrayList<String[]>(QUEUE);
    }

    public static void clearQueue() {
        QUEUE.clear();
        ++revision;
    }

    public static String prettyDownloads(String raw) {
        try {
            long value = Long.parseLong(raw.trim());
            if (value >= 1000000L) {
                return String.format(Locale.ROOT, "%.1fM", (double)value / 1000000.0);
            }
            if (value >= 1000L) {
                return String.format(Locale.ROOT, "%.1fB", (double)value / 1000.0);
            }
            return Long.toString(value);
        }
        catch (NumberFormatException ignored) {
            return raw == null || raw.isEmpty() ? "-" : raw;
        }
    }

    static {
        error = "";
        HITS = new ArrayList<YikimBridge.CatalogHit>();
        QUEUE = new ArrayList<String[]>();
    }
}

