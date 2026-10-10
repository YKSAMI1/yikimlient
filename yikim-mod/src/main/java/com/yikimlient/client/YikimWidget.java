/*
 * Decompiled with CFR 0.152.
 * 
 * Could not load the following classes:
 *  net.minecraft.class_327
 *  net.minecraft.class_332
 */
package com.yikimlient.client;

import net.minecraft.class_327;
import net.minecraft.class_332;

public interface YikimWidget {
    public String id();

    public String label();

    public Region region();

    public boolean defaultEnabled();

    public int defaultOrder();

    public int width(class_327 var1);

    public int height(class_327 var1);

    public void draw(class_332 var1, class_327 var2, boolean var3);

    public static enum Region {
        TOP_LEFT,
        TOP_RIGHT,
        BOTTOM_LEFT,
        BOTTOM_RIGHT;


        public String label() {
            return switch (this.ordinal()) {
                default -> throw new MatchException(null, null);
                case 0 -> "Sol \u00fcst";
                case 1 -> "Sa\u011f \u00fcst";
                case 2 -> "Sol alt";
                case 3 -> "Sa\u011f alt";
            };
        }
    }
}

