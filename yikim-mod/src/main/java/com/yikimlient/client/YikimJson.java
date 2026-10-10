/*
 * Decompiled with CFR 0.152.
 */
package com.yikimlient.client;

import java.util.Locale;

public final class YikimJson {
    private YikimJson() {
    }

    public static String string(String json, String key) {
        int start;
        if (json == null || json.isEmpty()) {
            return "";
        }
        String needle = "\"" + key.toLowerCase(Locale.ROOT) + "\"";
        String lower = json.toLowerCase(Locale.ROOT);
        int index = lower.indexOf(needle);
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
            char character = json.charAt(end);
            if (character == '\\' && end + 1 < json.length()) {
                out.append(json.charAt(end + 1));
                end += 2;
                continue;
            }
            if (character == '\"') break;
            out.append(character);
            ++end;
        }
        return out.toString();
    }

    public static boolean bool(String json, String key, boolean fallback) {
        String raw = YikimJson.rawValue(json, key);
        if (raw.isEmpty()) {
            return fallback;
        }
        return raw.equalsIgnoreCase("true");
    }

    public static int number(String json, String key, int fallback) {
        String raw = YikimJson.rawValue(json, key);
        if (raw.isEmpty()) {
            return fallback;
        }
        try {
            return (int)Double.parseDouble(raw.trim());
        }
        catch (NumberFormatException ignored) {
            return fallback;
        }
    }

    public static long longNumber(String json, String key, long fallback) {
        String raw = YikimJson.rawValue(json, key);
        if (raw.isEmpty()) {
            return fallback;
        }
        String value = raw.trim();
        try {
            return Long.parseLong(value);
        }
        catch (NumberFormatException ignored) {
            try {
                return (long)Double.parseDouble(value);
            }
            catch (NumberFormatException ignoredToo) {
                return fallback;
            }
        }
    }

    public static int color(String json, String key) {
        String raw = YikimJson.string(json, key);
        if (raw.isEmpty()) {
            return 0;
        }
        String hex = raw.startsWith("#") ? raw.substring(1) : raw;
        try {
            long value = Long.parseLong(hex.trim(), 16);
            return hex.length() <= 6 ? (int)(0xFF000000L | value & 0xFFFFFFL) : (int)value;
        }
        catch (NumberFormatException ignored) {
            return 0;
        }
    }

    public static String escape(String value) {
        if (value == null) {
            return "";
        }
        StringBuilder out = new StringBuilder(value.length() + 8);
        block7: for (int i = 0; i < value.length(); ++i) {
            char character = value.charAt(i);
            switch (character) {
                case '\"': {
                    out.append("\\\"");
                    continue block7;
                }
                case '\\': {
                    out.append("\\\\");
                    continue block7;
                }
                case '\n': {
                    out.append("\\n");
                    continue block7;
                }
                case '\r': {
                    out.append("\\r");
                    continue block7;
                }
                case '\t': {
                    out.append("\\t");
                    continue block7;
                }
                default: {
                    out.append(character);
                }
            }
        }
        return out.toString();
    }

    private static String rawValue(String json, String key) {
        int end;
        int start;
        if (json == null || json.isEmpty()) {
            return "";
        }
        String needle = "\"" + key.toLowerCase(Locale.ROOT) + "\"";
        String lower = json.toLowerCase(Locale.ROOT);
        int index = lower.indexOf(needle);
        if (index < 0) {
            return "";
        }
        int colon = json.indexOf(58, index + needle.length());
        if (colon < 0) {
            return "";
        }
        for (start = colon + 1; start < json.length() && Character.isWhitespace(json.charAt(start)); ++start) {
        }
        for (end = start; end < json.length() && ",}\n\r".indexOf(json.charAt(end)) < 0; ++end) {
        }
        return json.substring(start, end).trim();
    }
}

