/*
 * Decompiled with CFR 0.152.
 */
package com.yikimlient.client;

import java.util.LinkedHashMap;
import java.util.Locale;
import java.util.Map;
import java.util.UUID;

public final class YikimJson {
    private YikimJson() {
    }

    /**
     * `"alan":{"<uuid>":"<deger>", ...}` eşlemesini kütüphanesiz, GÜVENLİ çıkar.
     *
     * v1.22.1 KÖK NEDEN DÜZELTMESİ: eski ayrıştırıcı (YikimAtolye.anahtarDegerler)
     * bir alanın son girdisinden sonra gövdedeki SONRAKİ `{` karakterini arıyordu.
     * Presence yanıtı `{"p":…,"b":{…},"x":{…},"kc":{…},"ke":{…},"pn":{…}}` sırasında
     * geldiğinde "x"/"b" haritaları okumayı bırakmıyor, `kc`/`ke`/`pn` haritalarına
     * atlıyor ve rozet verisini kozmetik PNG'si ya da isim metniyle DEĞİŞTİRİYORDU.
     * Sonuç: `pxdenOku`/`pngdenOku` veriyi reddediyor → slot atanmıyor → karşı
     * taraf standart Y görüyordu ("eskiden çalışıyordu").
     *
     * Artık yalnızca alanın KENDİ nesnesi sınırları içinde gezilir; metin
     * (string) içindeki kaçışlar ve süslü parantezler yok sayılır.
     */
    public static Map<UUID, String> stringMap(String json, String key) {
        Map<UUID, String> hedef = new LinkedHashMap<UUID, String>();
        if (json == null || json.isEmpty() || key == null || key.isEmpty()) {
            return hedef;
        }
        int alan = json.indexOf("\"" + key + "\"");
        if (alan < 0) {
            return hedef;
        }
        int ikiNokta = json.indexOf(':', alan + key.length() + 2);
        if (ikiNokta < 0) {
            return hedef;
        }
        int acilis = ikiNokta + 1;
        while (acilis < json.length() && Character.isWhitespace(json.charAt(acilis))) {
            acilis++;
        }
        if (acilis >= json.length() || json.charAt(acilis) != '{') {
            return hedef; // null / dizi / sayı — bu alan harita değil
        }
        int kapanis = nesneSonu(json, acilis);
        if (kapanis < 0) {
            return hedef;
        }
        String ic = json.substring(acilis + 1, kapanis);
        int i = 0;
        while (i < ic.length()) {
            int k1 = ic.indexOf('"', i);
            if (k1 < 0) {
                break;
            }
            int k2 = metinSonu(ic, k1 + 1);
            if (k2 < 0) {
                break;
            }
            String anahtar = ic.substring(k1 + 1, k2);
            int virgul = ic.indexOf(':', k2 + 1);
            if (virgul < 0) {
                break;
            }
            int v1 = virgul + 1;
            while (v1 < ic.length() && Character.isWhitespace(ic.charAt(v1))) {
                v1++;
            }
            if (v1 >= ic.length() || ic.charAt(v1) != '"') {
                i = k2 + 1; // metin değil (sayı/boolean) — atla
                continue;
            }
            int v2 = metinSonu(ic, v1 + 1);
            if (v2 < 0) {
                break;
            }
            String deger = ic.substring(v1 + 1, v2);
            if (anahtar.length() == 36) {
                try {
                    hedef.put(UUID.fromString(anahtar), deger);
                }
                catch (IllegalArgumentException bozuk) {
                    // uuid değil — atla
                }
            }
            i = v2 + 1;
        }
        return hedef;
    }

    /// `'"'` ile başlayan metnin kapanış tırnağı (kaçışları sayar); yoksa -1.
    private static int metinSonu(String metin, int basla) {
        boolean kacis = false;
        for (int i = basla; i < metin.length(); i++) {
            char c = metin.charAt(i);
            if (kacis) {
                kacis = false;
            }
            else if (c == '\\') {
                kacis = true;
            }
            else if (c == '"') {
                return i;
            }
        }
        return -1;
    }

    /// `{` ile başlayan nesnenin eşleşen `}` konumu; metin içindekileri yok sayar.
    private static int nesneSonu(String json, int acilis) {
        int derinlik = 0;
        boolean metin = false;
        boolean kacis = false;
        for (int i = acilis; i < json.length(); i++) {
            char c = json.charAt(i);
            if (metin) {
                if (kacis) {
                    kacis = false;
                }
                else if (c == '\\') {
                    kacis = true;
                }
                else if (c == '"') {
                    metin = false;
                }
                continue;
            }
            if (c == '"') {
                metin = true;
            }
            else if (c == '{') {
                derinlik++;
            }
            else if (c == '}') {
                derinlik--;
                if (derinlik == 0) {
                    return i;
                }
            }
        }
        return -1;
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

