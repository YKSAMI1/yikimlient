/*
 * Decompiled with CFR 0.152.
 * 
 * Could not load the following classes:
 *  net.minecraft.class_2350
 *  net.minecraft.class_243
 *  net.minecraft.class_310
 *  net.minecraft.class_327
 *  net.minecraft.class_332
 *  net.minecraft.class_640
 *  net.minecraft.class_746
 */
package com.yikimlient.client;

import com.yikimlient.client.YikimAdapter;
import com.yikimlient.client.YikimChip;
import com.yikimlient.client.YikimConfig;
import com.yikimlient.client.YikimDraw;
import com.yikimlient.client.YikimMetrics;
import com.yikimlient.client.YikimTheme;
import com.yikimlient.client.YikimVideo;
import com.yikimlient.client.YikimWidget;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import net.minecraft.class_2350;
import net.minecraft.class_243;
import net.minecraft.class_310;
import net.minecraft.class_327;
import net.minecraft.class_332;
import net.minecraft.class_640;
import net.minecraft.class_746;

public final class YikimWidgets {
    private static final List<YikimWidget> ALL = new ArrayList<YikimWidget>();
    private static final long FAST = 100L;
    private static final long SLOW = 500L;
    private static final long LAZY = 1000L;
    private static final String[] MONTHS = new String[]{"Ocak", "\u015eubat", "Mart", "Nisan", "May\u0131s", "Haziran", "Temmuz", "A\u011fustos", "Eyl\u00fcl", "Ekim", "Kas\u0131m", "Aral\u0131k"};

    private YikimWidgets() {
    }

    public static List<YikimWidget> all() {
        if (ALL.isEmpty()) {
            YikimWidgets.register();
        }
        return ALL;
    }

    public static void invalidate() {
        for (YikimWidget widget : YikimWidgets.all()) {
            if (!(widget instanceof Text)) continue;
            Text text = (Text)widget;
            text.invalidate();
        }
    }

    private static void register() {
        ALL.add(new Text("fps", "FPS", YikimWidget.Region.TOP_LEFT, true, 0, 100L){

            @Override
            protected void compose(YikimChip chip) {
                int fps = YikimMetrics.fps();
                int[] window = YikimMetrics.window();
                chip.caption = "FPS";
                chip.value = String.format(Locale.ROOT, "%3d", fps);
                chip.valueColor = YikimWidgets.frameColor(fps);
                chip.add("ort " + window[1] + " \u2022 min " + window[0]);
            }
        });
        ALL.add(new Text("grafik", "FPS grafi\u011fi", YikimWidget.Region.TOP_LEFT, false, 1, 500L){
            private final int[] history = new int[120];

            @Override
            protected void compose(YikimChip chip) {
                int fps = YikimMetrics.fps();
                int length = YikimMetrics.history(this.history);
                chip.caption = "FPS";
                chip.value = String.format(Locale.ROOT, "%3d", fps);
                chip.valueColor = YikimWidgets.frameColor(fps);
                int[] samples = new int[length];
                System.arraycopy(this.history, 0, samples, 0, length);
                chip.graph = samples;
            }
        });
        ALL.add(new Text("cps", "CPS", YikimWidget.Region.TOP_LEFT, false, 2, 100L){

            @Override
            protected void compose(YikimChip chip) {
                chip.caption = "CPS";
                chip.value = String.format(Locale.ROOT, "%2d", YikimMetrics.cps());
                chip.add("t\u0131k / saniye");
            }
        });
        ALL.add(new Text("koordinat", "Koordinatlar", YikimWidget.Region.TOP_LEFT, false, 3, 100L){

            @Override
            protected void compose(YikimChip chip) {
                class_746 player = class_310.method_1551().field_1724;
                chip.caption = "KONUM";
                if (player == null) {
                    chip.value = "\u2014";
                    return;
                }
                int x = (int)Math.floor(player.method_23317());
                int y = (int)Math.floor(player.method_23318());
                int z = (int)Math.floor(player.method_23321());
                chip.value = x + " " + y + " " + z;
                chip.add("chunk " + (x >> 4) + ", " + (z >> 4));
            }
        });
        ALL.add(new Text("yon", "Y\u00f6n", YikimWidget.Region.TOP_LEFT, false, 4, 100L){

            @Override
            protected void compose(YikimChip chip) {
                class_746 player = class_310.method_1551().field_1724;
                chip.caption = "Y\u00d6N";
                if (player == null) {
                    chip.value = "\u2014";
                    return;
                }
                chip.value = switch (player.method_5735()) {
                    case class_2350.field_11043 -> "Kuzey (-Z)";
                    case class_2350.field_11035 -> "G\u00fcney (+Z)";
                    case class_2350.field_11039 -> "Bat\u0131 (-X)";
                    case class_2350.field_11034 -> "Do\u011fu (+X)";
                    default -> "\u2014";
                };
                float yaw = (player.method_36454() % 360.0f + 360.0f) % 360.0f;
                chip.add(Math.round(yaw) + "\u00b0");
                chip.bar = yaw / 360.0f;
                chip.barColor = YikimTheme.accent;
            }
        });
        ALL.add(new Text("boyut", "Boyut", YikimWidget.Region.TOP_LEFT, false, 5, 500L){

            @Override
            protected void compose(YikimChip chip) {
                class_310 client = class_310.method_1551();
                chip.caption = "BOYUT";
                chip.value = client.field_1687 == null ? "\u2014" : YikimWidgets.prettify(YikimAdapter.dimensionPath(client.field_1687));
            }
        });
        ALL.add(new Text("oturum", "Oturum", YikimWidget.Region.TOP_LEFT, false, 6, 1000L){

            @Override
            protected void compose(YikimChip chip) {
                chip.caption = "OTURUM";
                chip.value = YikimMetrics.clock(YikimMetrics.sessionMillis());
                chip.add("ort " + YikimMetrics.window()[1] + " FPS");
            }
        });
        ALL.add(new Text("saat", "Ger\u00e7ek saat", YikimWidget.Region.TOP_LEFT, false, 7, 1000L){

            @Override
            protected void compose(YikimChip chip) {
                long now = System.currentTimeMillis();
                chip.caption = "SAAT";
                chip.value = String.format(Locale.ROOT, "%tH:%tM", now, now);
                LocalDate date = LocalDate.now();
                chip.add(date.getDayOfMonth() + " " + MONTHS[date.getMonthValue() - 1] + " " + date.getYear());
            }
        });
        ALL.add(new Text("ping", "Ping", YikimWidget.Region.TOP_RIGHT, false, 0, 100L){

            @Override
            protected void compose(YikimChip chip) {
                chip.caption = "PING";
                int ping = YikimWidgets.pingMillis();
                if (ping < 0) {
                    chip.value = "\u2014";
                    chip.add(YikimWidgets.offlineLabel());
                    return;
                }
                chip.value = String.format(Locale.ROOT, "%4d", ping);
                chip.unit = "ms";
                chip.valueColor = YikimWidgets.pingColor(ping);
                chip.bar = Math.min(1.0f, (float)ping / 300.0f);
                chip.barColor = chip.valueColor;
                chip.add(ping < 60 ? "iyi" : (ping < 140 ? "orta" : "k\u00f6t\u00fc"));
            }
        });
        ALL.add(new Text("bellek", "Bellek", YikimWidget.Region.TOP_RIGHT, false, 1, 500L){

            @Override
            protected void compose(YikimChip chip) {
                Runtime runtime = Runtime.getRuntime();
                long used = (runtime.totalMemory() - runtime.freeMemory()) / 0x100000L;
                long max = runtime.maxMemory() / 0x100000L;
                chip.caption = "BELLEK";
                chip.value = String.valueOf(used);
                chip.unit = "MB";
                chip.bar = max > 0L ? (float)used / (float)max : 0.0f;
                chip.barColor = YikimTheme.accent;
                chip.add(max + " MB ayr\u0131ld\u0131");
            }
        });
        ALL.add(new Text("hedef", "Hedef blok", YikimWidget.Region.TOP_RIGHT, false, 2, 100L){

            @Override
            protected void compose(YikimChip chip) {
                class_310 client = class_310.method_1551();
                chip.caption = "HEDEF";
                try {
                    if (client.field_1765 == null || client.field_1765.method_17783() == null) {
                        chip.value = "\u2014";
                        return;
                    }
                    class_243 location = client.field_1765.method_17784();
                    switch (client.field_1765.method_17783()) {
                        case field_1332: {
                            chip.value = "blok";
                            chip.add(Math.round(location.field_1352) + " " + Math.round(location.field_1351) + " " + Math.round(location.field_1350));
                            break;
                        }
                        case field_1331: {
                            chip.value = "varl\u0131k";
                            break;
                        }
                        default: {
                            chip.value = "\u2014";
                            break;
                        }
                    }
                }
                catch (Throwable ignored) {
                    chip.value = "\u2014";
                }
            }
        });
        ALL.add(new Text("surum", "S\u00fcr\u00fcm", YikimWidget.Region.BOTTOM_LEFT, false, 0, 1000L){

            @Override
            protected void compose(YikimChip chip) {
                chip.caption = "YIKIM";
                chip.value = YikimClient.MOD_VERSION;
                chip.add("MC " + YikimVideo.gameVersion() + " \u2022 Fabric");
            }
        });
        ALL.add(new Keys());
        ALL.add(new Text("durum", "Sistem durumu", YikimWidget.Region.BOTTOM_RIGHT, false, 0, 500L){

            @Override
            protected void compose(YikimChip chip) {
                chip.caption = "S\u0130STEM";
                int[] window = YikimMetrics.window();
                chip.value = String.format(Locale.ROOT, "%3d", window[2]);
                chip.valueColor = YikimWidgets.frameColor(window[2]);
                chip.add("en y\u00fcksek \u2022 HUD " + String.format(Locale.ROOT, "%.2f ms", YikimMetrics.hudCostMillis()));
            }
        });
    }

    private static int frameColor(int fps) {
        if (fps >= 120) {
            return -11870592;
        }
        return fps >= 60 ? -340971 : -495247;
    }

    private static int pingColor(int ping) {
        if (ping < 60) {
            return -11870592;
        }
        return ping < 140 ? -340971 : -495247;
    }

    static int pingMillis() {
        class_310 client = class_310.method_1551();
        try {
            if (client.field_1724 == null || client.method_1562() == null) {
                return -1;
            }
            class_640 info = client.method_1562().method_2871(client.field_1724.method_5667());
            return info == null ? -1 : info.method_2959();
        }
        catch (Throwable ignored) {
            return -1;
        }
    }

    private static String offlineLabel() {
        class_310 client = class_310.method_1551();
        return client.field_1724 == null || client.method_1562() == null ? "tek oyunculu" : "veri yok";
    }

    static String prettify(String raw) {
        if (raw == null || raw.isEmpty()) {
            return "\u2014";
        }
        StringBuilder out = new StringBuilder(raw.length() + 4);
        boolean wordStart = true;
        for (int index = 0; index < raw.length(); ++index) {
            char current = raw.charAt(index);
            if (current == '_') {
                out.append(' ');
                wordStart = true;
                continue;
            }
            out.append(wordStart ? Character.toUpperCase(current) : current);
            wordStart = false;
        }
        return out.toString();
    }

    static abstract class Text
    implements YikimWidget {
        private final String id;
        private final String label;
        private final YikimWidget.Region region;
        private final boolean enabled;
        private final int order;
        private final long refreshMillis;
        private final YikimChip chip = new YikimChip();
        private long refreshedAt;

        Text(String id, String label, YikimWidget.Region region, boolean enabled, int order, long refreshMillis) {
            this.id = id;
            this.label = label;
            this.region = region;
            this.enabled = enabled;
            this.order = order;
            this.refreshMillis = refreshMillis;
        }

        @Override
        public String id() {
            return this.id;
        }

        @Override
        public String label() {
            return this.label;
        }

        @Override
        public YikimWidget.Region region() {
            return this.region;
        }

        @Override
        public boolean defaultEnabled() {
            return this.enabled;
        }

        @Override
        public int defaultOrder() {
            return this.order;
        }

        protected abstract void compose(YikimChip var1);

        private void refresh(class_327 font) {
            long now = System.currentTimeMillis();
            if (now - this.refreshedAt < this.refreshMillis) {
                return;
            }
            this.refreshedAt = now;
            this.chip.reset();
            this.compose(this.chip);
            this.chip.measure(font);
        }

        void invalidate() {
            this.refreshedAt = 0L;
        }

        @Override
        public int width(class_327 font) {
            this.refresh(font);
            return this.chip.width;
        }

        @Override
        public int height(class_327 font) {
            this.refresh(font);
            return this.chip.height;
        }

        @Override
        public void draw(class_332 graphics, class_327 font, boolean editing) {
            this.refresh(font);
            this.chip.paint(graphics, font, YikimConfig.get().hudShadow);
        }
    }

    private static final class Keys
    implements YikimWidget {
        private static final int KEY = 16;
        private static final int GAP = 2;
        private static final int WIDTH = 52;
        private static final int KEYS_HEIGHT = 34;
        private static final String[] BADGES = new String[]{"SPACE", "SHIFT", "SPRINT"};
        private static final int[] BADGE_WIDTH = new int[BADGES.length];
        private static boolean measured;

        private Keys() {
        }

        @Override
        public String id() {
            return "tuslar";
        }

        @Override
        public String label() {
            return "Tu\u015f g\u00f6stergesi";
        }

        @Override
        public YikimWidget.Region region() {
            return YikimWidget.Region.BOTTOM_LEFT;
        }

        @Override
        public boolean defaultEnabled() {
            return false;
        }

        @Override
        public int defaultOrder() {
            return 1;
        }

        @Override
        public int width(class_327 font) {
            return Math.max(52, Keys.badgesWidth(font));
        }

        @Override
        public int height(class_327 font) {
            return 9 + YikimChip.rowHeight() + 34 + 10;
        }

        private static int badgesWidth(class_327 font) {
            if (!measured) {
                measured = true;
                for (int index = 0; index < BADGES.length; ++index) {
                    Keys.BADGE_WIDTH[index] = font.method_1727(BADGES[index]);
                }
            }
            int total = 0;
            for (int width : BADGE_WIDTH) {
                total += width + 6;
            }
            return total;
        }

        @Override
        public void draw(class_332 graphics, class_327 font, boolean editing) {
            boolean shadow = YikimConfig.get().hudShadow;
            class_310 client = class_310.method_1551();
            int width = this.width(font);
            int height = this.height(font);
            YikimDraw.chip(graphics, 0, 0, width, height);
            int left = 8;
            int cursor = 4;
            YikimAdapter.text(graphics, font, "TU\u015eLAR", left, cursor + 3, YikimTheme.accent, shadow);
            boolean up = client.field_1690.field_1894.method_1434();
            boolean down = client.field_1690.field_1881.method_1434();
            boolean leftKey = client.field_1690.field_1913.method_1434();
            boolean rightKey = client.field_1690.field_1849.method_1434();
            Keys.key(graphics, font, left + 16 + 2, cursor += YikimChip.rowHeight(), "W", up, shadow);
            Keys.key(graphics, font, left, cursor + 16 + 2, "A", leftKey, shadow);
            Keys.key(graphics, font, left + 16 + 2, cursor + 16 + 2, "S", down, shadow);
            Keys.key(graphics, font, left + 36, cursor + 16 + 2, "D", rightKey, shadow);
            cursor += 36;
            boolean[] pressed = new boolean[]{client.field_1690.field_1903.method_1434(), client.field_1690.field_1832.method_1434(), client.field_1690.field_1867.method_1434()};
            int badgeX = left;
            for (int index = 0; index < BADGES.length; ++index) {
                YikimAdapter.text(graphics, font, BADGES[index], badgeX, cursor, pressed[index] ? YikimTheme.accent : -9539974, shadow);
                badgeX += BADGE_WIDTH[index] + 6;
            }
        }

        private static void key(class_332 graphics, class_327 font, int x, int y, String label, boolean pressed, boolean shadow) {
            int fill = pressed ? YikimTheme.accent : 0x66101016;
            YikimDraw.roundedFill(graphics, x, y, x + 16, y + 16, fill);
            graphics.method_25294(x, y, x + 16, y + 1, pressed ? 0x66FFFFFF : 0x33FFFFFF);
            YikimAdapter.textCentered(graphics, font, label, x + 8, y + 4, pressed ? -15724524 : -6645082, !pressed && shadow);
        }
    }
}

