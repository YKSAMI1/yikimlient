/*
 * Decompiled with CFR 0.152.
 * 
 * Could not load the following classes:
 *  net.minecraft.class_332
 */
package com.yikimlient.client;

import java.util.ArrayList;
import net.minecraft.class_332;

public final class YikimMenuIcons {
    public static final int BOLT = 0;
    public static final int PLAY = 1;
    public static final int GLOBE = 2;
    public static final int BARS = 3;
    public static final int BLOCKS = 4;
    public static final int GEAR = 5;
    public static final int ARROW = 6;
    public static final int SEARCH = 7;
    public static final int POWER = 8;
    public static final int IMAGE = 9;
    public static final int EYE = 10;
    public static final int HEART = 11;
    private static final String[][] ICONS = new String[][]{{"....####", "...###..", "..###...", ".#######", "....###.", "...###..", "..###...", ".##....."}, {"........", ".##.....", ".####...", ".######.", ".########", ".######.", ".####...", ".##....."}, {"..####..", ".#.##.#.", "##.##.##", "########", "########", "##.##.##", ".#.##.#.", "..####.."}, {"........", "......##", "......##", "...##.##", "...##.##", "##.##.##", "##.##.##", "##.##.##"}, {"........", ".##..##.", ".##..##.", "........", "..##..##", "..##..##", "........", "........"}, {"..##.##.", ".#######", "###..###", "##....##", "##....##", "###..###", ".#######", "..##.##."}, {"........", "...#....", "...##...", "#####.#.", "#####.##", "...##...", "...#....", "........"}, {".####...", "#....#..", "#....#..", ".####...", "..##....", "..###...", "...###..", "....###."}, {"..####..", ".#....#.", "#..##..#", "#..##..#", "#..##..#", "#......#", ".#....#.", "..####.."}, {"########", "#......#", "#....#.#", "#...###.", "#..####.", "#.#####.", "#......#", "########"}, {"........", "..####..", ".#....#.", "##.##.##", "##.##.##", ".#....#.", "..####..", "........"}, {"........", ".##..##.", "########", "########", ".######.", "..####..", "...##...", "........"}};
    private static final int[][][] RUNS = new int[ICONS.length][][];

    private YikimMenuIcons() {
    }

    public static void draw(class_332 graphics, int icon, int x, int y, int size, int color) {
        if (size <= 0) {
            return;
        }
        int[][] runs = RUNS[Math.max(0, Math.min(RUNS.length - 1, icon))];
        float pixel = (float)size / 8.0f;
        for (int[] run : runs) {
            graphics.method_25294(x + Math.round((float)run[0] * pixel), y + Math.round((float)run[1] * pixel), x + Math.round((float)run[2] * pixel), y + Math.round((float)run[3] * pixel), color);
        }
    }

    private static int[][] minimalRuns(String[] bitmap) {
        int run;
        ArrayList<int[]> horizontal = new ArrayList<int[]>();
        for (int row = 0; row < 8; ++row) {
            String line = bitmap[row];
            int column = 0;
            while (column < 8) {
                if (line.charAt(column) != '#') {
                    ++column;
                    continue;
                }
                run = 1;
                while (column + run < 8 && line.charAt(column + run) == '#') {
                    ++run;
                }
                horizontal.add(new int[]{column, row, column + run, row + 1});
                column += run;
            }
        }
        ArrayList<int[]> vertical = new ArrayList<int[]>();
        for (int column = 0; column < 8; ++column) {
            int row = 0;
            while (row < 8) {
                if (bitmap[row].charAt(column) != '#') {
                    ++row;
                    continue;
                }
                run = 1;
                while (row + run < 8 && bitmap[row + run].charAt(column) == '#') {
                    ++run;
                }
                vertical.add(new int[]{column, row, column + 1, row + run});
                row += run;
            }
        }
        ArrayList<int[]> best = horizontal.size() <= vertical.size() ? horizontal : vertical;
        return best.toArray(new int[0][]);
    }

    static {
        for (int index = 0; index < ICONS.length; ++index) {
            YikimMenuIcons.RUNS[index] = YikimMenuIcons.minimalRuns(ICONS[index]);
        }
    }
}

