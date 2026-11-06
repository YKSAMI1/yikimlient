/*
 * Decompiled with CFR 0.152.
 * 
 * Could not load the following classes:
 *  net.fabricmc.loader.api.FabricLoader
 *  net.minecraft.class_310
 *  net.minecraft.class_327
 *  net.minecraft.class_332
 *  net.minecraft.class_437
 */
package com.yikimlient.client;

import com.yikimlient.client.YikimAdapter;
import com.yikimlient.client.YikimBackdrop;
import com.yikimlient.client.YikimConfig;
import com.yikimlient.client.YikimDraw;
import com.yikimlient.client.YikimIcons;
import com.yikimlient.client.YikimMenuIcons;
import com.yikimlient.client.YikimMetrics;
import com.yikimlient.client.YikimPanel;
import com.yikimlient.client.YikimPresets;
import com.yikimlient.client.YikimTheme;
import com.yikimlient.client.YikimUiMetrics;
import com.yikimlient.client.YikimVideo;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import net.fabricmc.loader.api.FabricLoader;
import net.minecraft.class_310;
import net.minecraft.class_327;
import net.minecraft.class_332;
import net.minecraft.class_4185;
import net.minecraft.class_437;
import net.minecraft.class_442;

public final class YikimMainMenu {
    private static final String[] TIPS = new String[]{"Sa\u011f Shift: YIKIM men\u00fcs\u00fc  \u2022  Sa\u011f Ctrl: HUD a\u00e7/kapa", "HUD \u00f6\u011felerini panelden ya da ekrandan s\u00fcr\u00fckleyip ta\u015f\u0131yabilirsin.", "Sol Alt: yak\u0131nla\u015ft\u0131r (bas\u0131l\u0131 tut)  \u2022  Sa\u011f Alt: profil de\u011fi\u015ftir.", "Modlar sekmesinden mod aray\u0131p kurabilirsin; kurulum oyun kapan\u0131nca yap\u0131l\u0131r.", "Panel a\u00e7\u0131kken Tab sekmeleri, tekerlek listeyi kayd\u0131r\u0131r.", "Profil se\u00e7imin ba\u015flat\u0131c\u0131ya bildirilir; iki taraf birbirinin ayar\u0131n\u0131 ezmez."};
    private static final long CACHE_MILLIS = 1000L;
    private final class_437 screen;
    private final List<Button> buttons = new ArrayList<Button>();
    private final Runnable chipBackdrop;
    private final Runnable chipHud;
    /** Vanilla ba\u015fl\u0131k ekran\u0131na ge\u00e7i\u015f (tercih kal\u0131c\u0131: menu.yikim=false). */
    private final Runnable chipVanilla;
    private final List<Hit> hits = new ArrayList<Hit>();
    private final List<class_4185> modButtons;
    private int hitCount;
    private boolean surukleme;
    private long openedAt;
    private long hintUntil;
    private String hint = "";
    private int hintWidth;
    private int columnX;
    private int columnWidth;
    private int buttonHeight;
    private int buttonGap;
    private int buttonsTop;
    private int columns = 1;
    private int rows;
    private int cardX;
    private int cardWidth;
    private int cardY;
    private long cacheStamp;
    private String cacheSubtitle = "";
    private String cacheFooterLeft = "";
    private String cacheUser = "";
    private String cacheAccount = "";
    private String cacheLauncher = "";
    private String cacheProfile = "";
    private String cacheMods = "";
    private String cacheHud = "";
    private int cacheFps;
    private int cacheTipIndex = -1;
    private int cacheTipWidth = -1;
    private List<String> cacheTipLines = List.of();

    public YikimMainMenu(class_437 screen) {
        this.screen = screen;
        this.buttons.add(new Button("Tek Oyunculu", "D\u00fcnyalar\u0131n\u0131 a\u00e7", 1, -1, () -> YikimMainMenu.open(YikimAdapter.worldSelectScreen(screen))));
        this.buttons.add(new Button("\u00c7ok Oyunculu", "Sunucu listesi", 2, -1, () -> YikimMainMenu.open(YikimAdapter.multiplayerScreen(screen))));
        this.buttons.add(new Button("YIKIM Men\u00fcs\u00fc", "Performans, g\u00f6r\u00fcn\u00fcm, HUD, modlar", 0, 0, () -> YikimPanel.open(class_310.method_1551(), 0)));
        this.buttons.add(new Button("HUD'u d\u00fczenle", "\u00d6\u011feleri yerle\u015ftir", 3, 2, () -> YikimPanel.open(class_310.method_1551(), 2)));
        this.buttons.add(new Button("Modlar", "Mod ara ve kur", 4, 4, () -> YikimPanel.open(class_310.method_1551(), 4)));
        // v1.27.0: oyun içi hesap değiştirme (launcher hesapları)
        String hesapAdi = YikimHesaplar.aktifAd(class_310.method_1551());
        this.buttons.add(new Button("Hesap: " + (hesapAdi.isEmpty() ? "değiştir" : hesapAdi),
            "Premium / çevrimdışı arasında anında geçiş", YikimMenuIcons.KULLANICI, -1,
            () -> YikimMainMenu.open(new YikimHesapEkrani())));
        this.buttons.add(new Button("Ayarlar", "Minecraft ayarlar\u0131", 5, -1, () -> YikimMainMenu.open(YikimAdapter.optionsScreen(screen, class_310.method_1551().field_1690))));
        this.buttons.add(new Button("\u00c7\u0131k\u0131\u015f", "Oyundan ayr\u0131l", 8, -1, () -> class_310.method_1551().method_1592()));
        // DİĞER MODLARIN TUŞLARI (Flashback, Mod Menu vb.): vanilla menüye mixin ile
        // eklenen tuşlar OTURUM BOYUNCA BİR KEZ yakalanır ve sağ panelde listelenir.
        this.modButtons = YikimModButtons.scanOnce(class_310.method_1551());
        this.chipBackdrop = () -> {
            YikimBackdrop.invalidate();
            YikimMetrics.notify("Arka plan: " + YikimBackdrop.cycle());
        };
        this.chipHud = () -> {
            YikimConfig config = YikimConfig.get();
            config.hudEnabled = !config.hudEnabled;
            config.save();
            YikimMetrics.notify("HUD " + (config.hudEnabled ? "a\u00e7\u0131k" : "kapal\u0131"));
        };
        this.chipVanilla = () -> {
            YikimConfig config = YikimConfig.get();
            config.customMainMenu = false;
            config.save();
            YikimMetrics.notify("Ana men\u00fc: Minecraft \u2014 sa\u011f \u00fcstteki YIKIMLient d\u00fc\u011fmesiyle geri d\u00f6nebilirsin");
            class_310.method_1551().method_1507(new class_442());
        };
    }

    private static void open(class_437 next) {
        if (next != null) {
            class_310.method_1551().method_1507(next);
        } else {
            YikimMetrics.notify("Bu ekran bu s\u00fcr\u00fcmde a\u00e7\u0131lam\u0131yor");
        }
    }

    void onResize(int screenWidth, int screenHeight) {
        this.openedAt = System.currentTimeMillis();
        this.hitCount = 0;
    }

    void tick() {
    }

    void draw(class_332 graphics, class_327 font, int mouseX, int mouseY, int screenWidth, int screenHeight) {
        long started = YikimUiMetrics.menuStart();
        YikimMetrics.frame(3);
        this.hitCount = 0;
        long now = System.currentTimeMillis();
        class_310 client = class_310.method_1551();
        float appear = Math.min(1.0f, (float)(now - this.openedAt) / 420.0f);
        float eased = 1.0f - (1.0f - appear) * (1.0f - appear);
        int slide = (int)((1.0f - eased) * 24.0f);
        YikimBackdrop.render(graphics, screenWidth, screenHeight, now);
        // GÜNCELLEME SONRASI İLK AÇILIŞ: arayüz temasını ön izlemeli olarak sor
        YikimTemaEkrani.ilkAcilisKontrol();
        if (YikimTemaEkrani.acik()) {
            YikimUiMetrics.menuEnd(started);
            return;
        }
        if (YikimTema.sade()) {
            this.drawSade(graphics, font, client, screenWidth, screenHeight, mouseX, mouseY, started);
            return;
        }
        int margin = screenWidth < 640 ? 12 : 24;
        int footerHeight = 20;
        float wordScale = screenHeight >= 300 ? 3.0f : 2.0f;
        int logoY = Math.max(margin, (int)((float)screenHeight * 0.1f));
        int logoHeight = (int)(8.0f * wordScale) + 16;
        int contentTop = logoY + logoHeight;
        int available = screenHeight - footerHeight - contentTop - 8;
        int count = this.buttons.size();
        this.columnWidth = Math.min(360, Math.max(200, screenWidth / 3));
        this.columnX = margin - slide;
        this.buttonGap = available / count >= 34 ? 7 : 4;
        this.buttonHeight = Math.max(16, Math.min(32, (available - (count - 1) * this.buttonGap) / count));
        this.columns = 1;
        this.rows = count;
        if (this.buttonHeight < 18) {
            this.columns = 2;
            this.rows = (count + 1) / 2;
            this.buttonGap = 3;
            this.buttonHeight = Math.max(16, Math.min(32, (available - (this.rows - 1) * this.buttonGap) / this.rows));
        }
        int buttonWidth = (this.columnWidth - (this.columns - 1) * 3) / this.columns;
        int blockHeight = this.rows * (this.buttonHeight + this.buttonGap) - this.buttonGap;
        int chipsHeight = this.columns == 1 && available - blockHeight >= 26 ? 18 : 0;
        int slack = available - blockHeight - (chipsHeight > 0 ? chipsHeight + 8 : 0);
        this.buttonsTop = contentTop + Math.min(60, Math.max(0, slack / 2));
        this.cardWidth = screenWidth >= 640 ? Math.min(360, Math.max(240, screenWidth / 3)) : 0;
        this.cardX = screenWidth - margin - this.cardWidth + slide / 2;
        this.cardY = (int)((float)screenHeight * 0.16f);
        this.refresh(client, font, this.cardWidth > 0 ? this.cardWidth - 40 : this.columnWidth - 20);
        this.drawHeader(graphics, font, this.columnX, logoY, wordScale, slide);
        for (int index = 0; index < this.buttons.size(); ++index) {
            Button button = this.buttons.get(index);
            int column = index / this.rows;
            int row = index % this.rows;
            int x = this.columnX + column * (buttonWidth + 3);
            int y = this.buttonsTop + row * (this.buttonHeight + this.buttonGap);
            boolean hovered = YikimDraw.inside(mouseX, mouseY, x, y, buttonWidth, this.buttonHeight);
            this.drawButton(graphics, font, button, x, y, buttonWidth, this.buttonHeight, hovered);
            this.addHit(x, y, buttonWidth, this.buttonHeight, button.action());
        }
        if (chipsHeight > 0) {
            this.drawChips(graphics, font, this.buttonsTop + blockHeight + 8, buttonWidth, mouseX, mouseY);
        }
        if (this.cardWidth > 0 && this.cardX - (this.columnX + this.columnWidth) >= 24) {
            // v1.29.0: sağ üstteki "SEN" bilgi paneli KALDIRILDI — yerine
            // dönen 3B karakter + deri/pelerin/elitra seçicisi geldi.
            int altSinir = screenHeight - footerHeight - margin - this.modDockYukseklik();
            this.drawKarakterPaneli(graphics, font, this.cardX, this.cardY, this.cardWidth, altSinir, mouseX, mouseY);
        }
        // v1.15.0: diğer modlarin tuslari ARTIK yan panelin icinde degil —
        // ekranin SAG ALTINDA kendi piksel bloku olarak duruyorlar.
        this.drawModDock(graphics, font, screenWidth, screenHeight, mouseX, mouseY, footerHeight, margin);
        this.drawFooter(graphics, font, screenWidth, screenHeight, footerHeight);
        if (now < this.hintUntil && !this.hint.isEmpty()) {
            int hintY = Math.min(screenHeight - footerHeight - 18, this.buttonsTop + blockHeight + chipsHeight + 12);
            YikimDraw.roundedFill(graphics, this.columnX, hintY, this.columnX + this.hintWidth + 14, hintY + 14, -435286510);
            YikimDraw.outline(graphics, this.columnX, hintY, this.hintWidth + 14, 14, YikimTheme.alpha(-340971, 136));
            YikimAdapter.text(graphics, font, this.hint, this.columnX + 7, hintY + 4, -340971, true);
        }
        YikimUiMetrics.menuEnd(started);
    }

    private void refresh(class_310 client, class_327 font, int tipWidth) {
        String uuid;
        long now = System.currentTimeMillis();
        if (now - this.cacheStamp < 1000L) {
            return;
        }
        this.cacheStamp = now;
        this.cacheSubtitle = "CLIENT  \u2022  v" + YikimClient.MOD_VERSION;
        this.cacheFps = YikimMetrics.fps();
        this.cacheFooterLeft = "YIKIMLient  \u2022  Minecraft " + YikimVideo.gameVersion() + "  \u2022  " + this.cacheFps + " FPS";
        this.cacheProfile = YikimPresets.currentId();
        this.cacheMods = FabricLoader.getInstance().getAllMods().size() + " mod";
        YikimConfig config = YikimConfig.get();
        this.cacheHud = config.hudEnabled ? "a\u00e7\u0131k" : "kapal\u0131";
        String launcherPreset = System.getProperty("yikimlient.presetName", "");
        String memory = System.getProperty("yikimlient.memoryMb", "");
        this.cacheLauncher = launcherPreset.isEmpty() ? "ba\u015flat\u0131c\u0131 bilgisi yok" : launcherPreset + (String)(memory.isEmpty() ? "" : " \u2022 " + memory + " MB");
        this.cacheUser = client.method_1548() != null ? client.method_1548().method_1676() : "";
        String string = uuid = client.method_1548() != null && client.method_1548().method_44717() != null ? client.method_1548().method_44717().toString() : null;
        this.cacheAccount = uuid == null || uuid.isEmpty() ? "\u00e7evrimd\u0131\u015f\u0131 hesap" : (uuid.length() > 8 ? uuid.substring(0, 8) + "\u2026" : uuid);
        int tipIndex = (int)(now / 6000L % (long)TIPS.length);
        if (tipIndex != this.cacheTipIndex || tipWidth != this.cacheTipWidth) {
            this.cacheTipIndex = tipIndex;
            this.cacheTipWidth = tipWidth;
            this.cacheTipLines = YikimMainMenu.wrap(font, TIPS[tipIndex], tipWidth);
        }
    }

    /**
     * SADE TEMA ANA MENÜ (v1.28.0).
     *
     * Yeni düzen: solda tek sütun sade tuşlar, sağda oyuncunun KARAKTERİ
     * (launcher'ın oyun öncesi yazdığı deri), altta ince şerit. Pano/yan panel
     * yok — "karmaşık" geri bildiriminin hedefi tam olarak buydu.
     */
    private void drawSade(class_332 graphics, class_327 font, class_310 client,
                          int screenWidth, int screenHeight, int mouseX, int mouseY, long started) {
        // GÜVENLİK AĞI: yeni tema çizimi beklenmedik bir şey yüzünden patlarsa
        // oyun kilitlenmesin; tema klasik'e döner ve menü normal çizilir.
        try {
            this.drawSadeGovde(graphics, font, client, screenWidth, screenHeight, mouseX, mouseY, started);
        }
        catch (Throwable sorun) {
            YikimConfig cfg = YikimConfig.get();
            cfg.uiTema = YikimTema.KLASIK;
            cfg.save();
            YikimLog.info("sade tema cizilemedi, klasik temaya donuldu: " + sorun);
            YikimMetrics.notify("Sade tema çizilemedi — Klasik temaya dönüldü");
        }
    }

    private void drawSadeGovde(class_332 graphics, class_327 font, class_310 client,
                               int screenWidth, int screenHeight, int mouseX, int mouseY, long started) {
        YikimMetrics.frame(3);
        this.hitCount = 0;
        int margin = screenWidth < 640 ? 16 : 34;
        // sakin örtü: arka plan görünür ama süssüz
        graphics.method_25294(0, 0, screenWidth, screenHeight, 0x77000000);
        float wordScale = screenHeight >= 320 ? 2.0f : 1.6f;
        int logoY = margin;
        YikimMainMenu.bigText(graphics, font, "YIKIM", margin, logoY, -723722, wordScale);
        int wordWidth = (int)((float)font.method_1727("YIKIM") * wordScale);
        int altCizgi = logoY + (int)(8.0f * wordScale) + 4;
        YikimDraw.horizontalGradient(graphics, margin, altCizgi, margin + wordWidth, altCizgi + 3,
            YikimTheme.accent, YikimTheme.accent2, 6);
        YikimAdapter.text(graphics, font, "CLIENT  •  v" + YikimClient.MOD_VERSION, margin + 1, altCizgi + 8,
            YikimTheme.TEXT_MUTED, true);

        // ---- tuş sütunu ----
        int sutun = Math.min(310, Math.max(180, screenWidth / 3));
        int satirH = 30;
        int bosluk = 6;
        int toplam = this.buttons.size() * satirH + (this.buttons.size() - 1) * bosluk;
        int tepe = Math.max(altCizgi + 30, (screenHeight - toplam) / 2 - 4);
        if (tepe + toplam > screenHeight - 74) {
            satirH = Math.max(22, saldir(screenHeight - 74 - tepe, this.buttons.size(), 4));
            toplam = this.buttons.size() * satirH + (this.buttons.size() - 1) * 4;
            bosluk = 4;
            tepe = Math.max(altCizgi + 24, (screenHeight - toplam) / 2 - 4);
        }
        this.columnX = margin;
        this.columnWidth = sutun;
        for (int index = 0; index < this.buttons.size(); ++index) {
            Button button = this.buttons.get(index);
            int y = tepe + index * (satirH + bosluk);
            boolean hovered = YikimDraw.inside(mouseX, mouseY, margin, y, sutun, satirH);
            if (hovered) {
                YikimDraw.roundedFill(graphics, margin, y, margin + sutun, y + satirH,
                    YikimTheme.alpha(YikimTheme.accent, 30));
                graphics.method_25294(margin, y + 3, margin + 2, y + satirH - 3, YikimTheme.accent);
            }
            int iconSize = Math.max(12, satirH - 12);
            YikimMenuIcons.draw(graphics, button.icon(), margin + 12, y + (satirH - iconSize) / 2, iconSize,
                hovered ? YikimTheme.accent : YikimTheme.TEXT_MUTED);
            YikimAdapter.text(graphics, font, YikimDraw.clip(font, button.label(), sutun - 34),
                margin + 12 + iconSize + 10, y + (satirH - 8) / 2, hovered ? -723722 : -6645082, true);
            this.addHit(margin, y, sutun, satirH, button.action());
        }

        // ---- karakter + kozmetik seçici (sağ sütun) ----
        int panelG = Math.min(320, Math.max(200, screenWidth / 3));
        int panelX = Math.max(margin + sutun + 24, screenWidth - margin - panelG);
        this.drawKarakterPaneli(graphics, font, panelX, tepe, panelG, screenHeight - 66, mouseX, mouseY);

        // ---- alt: küçük anahtarlar + şerit ----
        int anahtarY = screenHeight - 46;
        this.drawChips(graphics, font, anahtarY, sutun, mouseX, mouseY);
        graphics.method_25294(0, screenHeight - 20, screenWidth, screenHeight - 19,
            YikimTheme.alpha(YikimTheme.accent, 60));
        YikimAdapter.text(graphics, font, this.cacheFooterLeft, margin, screenHeight - 14, YikimTheme.TEXT_MUTED, false);
        String sag = "Sağ Shift  •  YIKIM menüsü  •  Tema: Sade";
        if (screenWidth - margin - font.method_1727(sag) > margin + sutun + 8) {
            YikimAdapter.text(graphics, font, sag, screenWidth - margin - font.method_1727(sag),
                screenHeight - 14, YikimTheme.TEXT_MUTED, false);
        }
        YikimUiMetrics.menuEnd(started);
    }

    /** Sağ alt mod bloğunun kapladığı yükseklik (karakter paneli üstüne binmesin). */
    private int modDockYukseklik() {
        int count = this.modButtons.size();
        if (count == 0) {
            return 0;
        }
        int rowH = 18;
        int gap = 3;
        int shown = Math.min(count, Math.max(1, 12));
        return shown * (rowH + gap) + 30;
    }

    /**
     * SAĞ SÜTUN (v1.31.0) — her iki temada da aynı: karakter (kendiliğinden
     * dönmez, fareyle sürükleyerek döndürülür), altında hesap adı ve
     * "Özelleştirme" düğmesi. Deri/pelerin/elitra seçimi ayrı ekranda
     * yapılır; böylece ana menüde doku ve kart kalabalığı yok.
     */
    private void drawKarakterPaneli(class_332 graphics, class_327 font, int x, int ust, int genislik,
                                    int alt, int mouseX, int mouseY) {
        if (genislik < 120 || alt - ust < 90) {
            return;
        }
        int dugmeYukseklik = 26;
        int boy = Math.min((int)((float)genislik * 1.4f), Math.max(80, alt - ust - dugmeYukseklik - 46));
        int cx = x + genislik / 2;
        YikimKarakter.draw(graphics, cx, ust + 2, boy, YikimTheme.backdrop);
        int isimY = ust + boy + 8;
        String isim = this.cacheUser.isEmpty() ? "—" : this.cacheUser;
        float olcek = 1.15f;
        YikimAdapter.push(graphics, cx - (int)((float)font.method_1727(isim) * olcek) / 2.0f, isimY, olcek);
        YikimAdapter.text(graphics, font, isim, 0, 0, -723722, true);
        YikimAdapter.pop(graphics);
        String altSatir = this.cacheMods;
        YikimAdapter.text(graphics, font, altSatir, cx - font.method_1727(altSatir) / 2, isimY + 13,
            YikimTheme.TEXT_MUTED, false);
        int dugmeY = isimY + 28;
        if (dugmeY + dugmeYukseklik > alt + 16) {
            return;
        }
        int dugmeG = Math.min(genislik, 190);
        int dugmeX = cx - dugmeG / 2;
        boolean uzerinde = YikimDraw.inside(mouseX, mouseY, dugmeX, dugmeY, dugmeG, dugmeYukseklik);
        YikimDraw.button(graphics, font, dugmeX, dugmeY, dugmeG, dugmeYukseklik, "ÖZELLEŞTİRME", true, uzerinde);
        // karakter alanı ÖNCE yazılır: düğme üstte kalsın
        this.addHit(x, ust, genislik, Math.max(24, boy), () -> this.surukleme = true);
        this.addHit(dugmeX, dugmeY, dugmeG, dugmeYukseklik, () -> YikimMainMenu.open(new YikimKozmetikEkrani()));
    }

    /** Sürükleme sırasında karakteri döndür (v1.31.0). */
    boolean drag(double x, double y, double farkX) {
        if (!this.surukleme) {
            return false;
        }
        int hedef = (int)Math.round(farkX / 5.0);
        if (hedef == 0) {
            return true;
        }
        YikimKarakter.dondur(hedef);
        return true;
    }

    void birak() {
        this.surukleme = false;
    }

    /** Tuşlar sığsın diye satır yüksekliği (en az 20 px). */
    private static int saldir(int alan, int adet, int bosluk) {
        if (adet <= 0) {
            return 24;
        }
        return Math.max(20, (alan - (adet - 1) * bosluk) / adet);
    }

    private void drawHeader(class_332 graphics, class_327 font, int x, int y, float scale, int slide) {
        String mark = "YIKIM";
        int width = (int)((float)font.method_1727(mark) * scale);
        int markBottom = y + (int)(8.0f * scale);
        YikimMainMenu.bigText(graphics, font, mark, x, y, -723722, scale);
        YikimDraw.horizontalGradient(graphics, x - slide / 2, markBottom + 3, x + width, markBottom + 6, YikimTheme.accent, YikimTheme.accent2, 6);
        YikimAdapter.text(graphics, font, this.cacheSubtitle, x + 2, markBottom + 9, -6645082, true);
    }

    private void drawButton(class_332 graphics, class_327 font, Button button, int x, int y, int width, int height, boolean hovered) {
        int fill = hovered ? YikimTheme.alpha(YikimTheme.accent, 230) : -1073083890;
        int border = hovered ? YikimTheme.alpha(YikimTheme.accent, 128) : 0x33FFFFFF;
        YikimDraw.roundedFill(graphics, x, y, x + width, y + height, fill);
        YikimDraw.outline(graphics, x, y, width, height, border);
        if (hovered) {
            graphics.method_25294(x, y + 2, x + 3, y + height - 2, -15724524);
        }
        int iconSize = Math.max(12, height - 10);
        int iconX = x + 6;
        int iconY = y + (height - iconSize) / 2;
        YikimDraw.roundedFill(graphics, iconX, iconY, iconX + iconSize, iconY + iconSize, hovered ? 0x33FFFFFF : 0x22FFFFFF);
        YikimMenuIcons.draw(graphics, button.icon(), iconX, iconY, iconSize, hovered ? -15724524 : YikimTheme.accent);
        int textX = iconX + iconSize + 10;
        int textWidth = width - (textX - x) - 8;
        boolean roomForHint = height >= 26;
        int textY = roomForHint ? y + 5 : y + (height - 8) / 2;
        YikimAdapter.text(graphics, font, YikimDraw.clip(font, button.label(), textWidth), textX, textY, hovered ? -15724524 : -723722, !hovered);
        if (roomForHint && button.hint() != null) {
            YikimAdapter.text(graphics, font, YikimDraw.clip(font, button.hint(), textWidth), textX, y + 16, hovered ? -1727000556 : -9539974, false);
        }
    }

    private void drawChips(class_332 graphics, class_327 font, int y, int width, int mouseX, int mouseY) {
        int chipWidth = (width - 8) / 3;
        String[] labels = new String[]{"Arka plan: " + YikimBackdrop.sessionLabel(), YikimConfig.get().hudEnabled ? "HUD a\u00e7\u0131k" : "HUD kapal\u0131", "Vanilla men\u00fc"};
        int[] icons = new int[]{9, 3, 8};
        Runnable[] actions = new Runnable[]{this.chipBackdrop, this.chipHud, this.chipVanilla};
        for (int index = 0; index < labels.length; ++index) {
            int x;
            boolean hovered = YikimDraw.inside(mouseX, mouseY, x = this.columnX + index * (chipWidth + 4), y, chipWidth, 16);
            YikimDraw.roundedFill(graphics, x, y, x + chipWidth, y + 16, hovered ? YikimTheme.alpha(YikimTheme.accent, 85) : -1728053248);
            YikimDraw.outline(graphics, x, y, chipWidth, 16, hovered ? YikimTheme.accent : 0x22FFFFFF);
            YikimMenuIcons.draw(graphics, icons[index], x + 4, y + 4, 8, hovered ? -1 : -9539974);
            YikimAdapter.text(graphics, font, YikimDraw.clip(font, labels[index], chipWidth - 18), x + 14, y + 4, hovered ? -723722 : -6645082, false);
            this.addHit(x, y, chipWidth, 16, actions[index]);
        }
    }

    private void drawSidePanel(class_332 graphics, class_310 client, class_327 font, int x, int y, int width, int availableHeight, int mouseX, int mouseY) {
        int shownRows;
        if (availableHeight < 110) {
            return;
        }
        int pad = 14;
        int inner = width - pad * 2;
        String[][] rows = new String[][]{{"Aktif profil", this.cacheProfile}, {"JVM profili", this.cacheLauncher}, {"Y\u00fckl\u00fc mod", this.cacheMods}, {"HUD", this.cacheHud}};
        int headerHeight = 49;
        int rowHeight = 21;
        int tipHeight = 9 + this.cacheTipLines.size() * 11;
        // MOD TUŞLARI sağ alta taşındı (drawModDock) — panelde yer açılmıyor.
        int modSectionHeight = 0;
        int maxRows = Math.max(0, (availableHeight - pad * 2 - headerHeight - 6 - 10 - tipHeight - modSectionHeight) / rowHeight);
        shownRows = Math.min(rows.length, maxRows);
        int height = pad * 2 + headerHeight + 6 + shownRows * rowHeight + (shownRows > 0 ? 10 : 0) + tipHeight + modSectionHeight;
        YikimDraw.roundedFill(graphics, x, y, x + width, y + height, -1073083890);
        YikimDraw.outline(graphics, x, y, width, height, 0x33FFFFFF);
        graphics.method_25294(x, y + 4, x + 3, y + height - 4, YikimTheme.accent);
        int cursor = y + pad;
        YikimAdapter.text(graphics, font, "SEN", x + pad, cursor, YikimTheme.accent, false);
        String name = this.cacheUser.isEmpty() ? "\u2014" : this.cacheUser;
        YikimAdapter.push(graphics, x + pad, cursor + 11, 1.4f);
        YikimAdapter.text(graphics, font, YikimDraw.clip(font, name, (int)((float)inner / 1.4f)), 0, 0, -723722, true);
        YikimAdapter.pop(graphics);
        YikimAdapter.text(graphics, font, this.cacheAccount, x + pad, cursor + 31, -9539974, false);
        cursor += headerHeight + 6;
        for (int index = 0; index < shownRows; ++index) {
            YikimAdapter.text(graphics, font, YikimMainMenu.upper(rows[index][0]), x + pad, cursor, -9539974, false);
            YikimAdapter.text(graphics, font, YikimDraw.clip(font, rows[index][1], inner), x + pad, cursor + 9, -723722, true);
            cursor += rowHeight;
        }
        if (shownRows > 0) {
            graphics.method_25294(x + pad, cursor += 4, x + width - pad, cursor + 1, 0x22FFFFFF);
        }
        YikimAdapter.text(graphics, font, "\u0130PUCU", x + pad, cursor + 5, YikimTheme.accent, false);
        int tipY = cursor + 17;
        for (String line : this.cacheTipLines) {
            YikimAdapter.text(graphics, font, line, x + pad, tipY, -6645082, false);
            tipY += 11;
        }
    }

    /**
     * SAĞ ALT MOD BLOĞU (v1.15.0).
     *
     * Diğer modların ana menüye mixin ile eklediği tuşlar (Flashback Essentials
     * vb.) daha önce YIKIM yan panelinin içinde düz satırlar hâlinde duruyordu;
     * artık ekranın sağ altında, kendi piksel bloklarında: koyu zemin, turuncu
     * köşe çizgisi, modun GERÇEK logosu (launcher'ın indirdiği PNG) ve etiket.
     * Tıklama davranışı aynı: modun gerçek onPress handler'ı çalışır.
     */
    private void drawModDock(class_332 graphics, class_327 font, int screenWidth, int screenHeight,
                             int mouseX, int mouseY, int footerHeight, int margin) {
        int count = this.modButtons.size();
        if (count == 0) {
            return;
        }
        int rowH = 18;
        int gap = 3;
        int bottom = screenHeight - footerHeight - 10;
        // Sığmayanları kırp (küçük pencerede menüyü kaplamasın)
        int maxRows = Math.max(1, (bottom - 40) / (rowH + gap));
        int shown = Math.min(count, maxRows);
        int dockW = Math.min(250, Math.max(150, screenWidth / 3));
        int x = screenWidth - margin - dockW;
        // Sol sütunla çakışmasın
        if (x <= this.columnX + this.columnWidth + 12) {
            return;
        }
        int toplam = shown * (rowH + gap) - gap;
        int y = bottom - toplam;
        // blok zemini + çerçeve (piksel görünüm: 2px köşe aksanları)
        YikimDraw.roundedFill(graphics, x - 7, y - 18, x + dockW + 7, bottom + 7, -1728053248);
        YikimDraw.outline(graphics, x - 7, y - 18, dockW + 14, toplam + 25, YikimTheme.alpha(YikimTheme.accent, 70));
        graphics.method_25294(x - 7, y - 18, x - 4, y - 15, YikimTheme.accent);
        graphics.method_25294(x + dockW + 4, y - 18, x + dockW + 7, y - 15, YikimTheme.accent);
        YikimAdapter.text(graphics, font, "MOD TUSLARI", x, y - 14, YikimTheme.accent, false);
        for (int i = 0; i < shown; ++i) {
            class_4185 modButton = this.modButtons.get(i);
            String label = YikimModButtons.label(modButton);
            int rowY = y + i * (rowH + gap);
            boolean hovered = YikimDraw.inside(mouseX, mouseY, x, rowY, dockW, rowH);
            YikimDraw.roundedFill(graphics, x, rowY, x + dockW, rowY + rowH,
                hovered ? YikimTheme.alpha(YikimTheme.accent, 220) : YikimTheme.alpha(YikimTheme.accent, 26));
            YikimDraw.outline(graphics, x, rowY, dockW, rowH, YikimTheme.alpha(YikimTheme.accent, hovered ? 210 : 70));
            String jarName = YikimModButtons.jarIconFor(label);
            if (jarName != null) {
                YikimIcons.draw(graphics, font, jarName, null, label, x + 1, rowY + 1, 16);
            } else {
                YikimDraw.roundedFill(graphics, x + 2, rowY + 2, x + 16, rowY + 16, YikimTheme.alpha(YikimTheme.accent, 70));
                String letter = label.isEmpty() ? "?" : label.substring(0, 1).toUpperCase(Locale.ROOT);
                YikimAdapter.text(graphics, font, letter, x + 5, rowY + 5,
                    hovered ? -15724524 : YikimTheme.alpha(YikimTheme.accent, 220), true);
            }
            YikimAdapter.text(graphics, font, YikimDraw.clip(font, label, dockW - 24), x + 22, rowY + 5,
                hovered ? -15724524 : -723722, !hovered);
            final class_4185 target = modButton;
            this.addHit(x, rowY, dockW, rowH, () -> YikimModButtons.press(target));
        }
        if (count > shown) {
            YikimAdapter.text(graphics, font, "+" + (count - shown) + " tus  (panelden ac)",
                x, bottom + 9, -9539974, false);
        }
    }

    private void drawFooter(class_332 graphics, class_327 font, int width, int height, int footerHeight) {
        graphics.method_25294(0, height - footerHeight, width, height, -1073741824);
        graphics.method_25294(0, height - footerHeight, width, height - footerHeight + 1, YikimTheme.alpha(YikimTheme.accent, 102));
        YikimAdapter.text(graphics, font, this.cacheFooterLeft, 24, height - footerHeight + 6, -9539974, false);
        String hintText = "Sa\u011f Shift her yerden YIKIM men\u00fcs\u00fcn\u00fc a\u00e7ar";
        if (width - font.method_1727(this.cacheFooterLeft) - font.method_1727(hintText) > 60) {
            YikimAdapter.text(graphics, font, hintText, width - font.method_1727(hintText) - 24, height - footerHeight + 6, -9539974, false);
        }
    }

    private static void bigText(class_332 graphics, class_327 font, String value, int x, int y, int color, float scale) {
        YikimAdapter.push(graphics, x, y, scale);
        YikimAdapter.text(graphics, font, value, 0, 0, color, true);
        YikimAdapter.pop(graphics);
    }

    private static List<String> wrap(class_327 font, String value, int maxWidth) {
        ArrayList<String> lines = new ArrayList<String>();
        StringBuilder current = new StringBuilder();
        for (String word : value.split(" ")) {
            String candidate;
            String string = candidate = current.isEmpty() ? word : String.valueOf(current) + " " + word;
            if (font.method_1727(candidate) > maxWidth && !current.isEmpty()) {
                lines.add(current.toString());
                current = new StringBuilder(word);
                continue;
            }
            current = new StringBuilder(candidate);
        }
        if (!current.isEmpty()) {
            lines.add(current.toString());
        }
        if (lines.isEmpty()) {
            lines.add("");
        }
        return lines.stream().limit(3L).toList();
    }

    private static String upper(String value) {
        return value == null ? "" : value.toUpperCase(Locale.ROOT);
    }

    private void addHit(int x, int y, int width, int height, Runnable action) {
        Hit hit;
        if (this.hitCount < this.hits.size()) {
            hit = this.hits.get(this.hitCount);
        } else {
            hit = new Hit();
            this.hits.add(hit);
        }
        hit.x = x;
        hit.y = y;
        hit.width = width;
        hit.height = height;
        hit.action = action;
        ++this.hitCount;
    }

    boolean click(double mouseX, double mouseY, int button) {
        if (button != 0) {
            return true;
        }
        this.surukleme = false;
        for (int index = this.hitCount - 1; index >= 0; --index) {
            Hit hit = this.hits.get(index);
            if (!hit.inside(mouseX, mouseY)) continue;
            hit.action.run();
            return true;
        }
        return true;
    }

    boolean key(int keyCode) {
        switch (keyCode) {
            case 256: {
                this.hint("\u00c7\u0131kmak i\u00e7in \"\u00c7\u0131k\u0131\u015f\" d\u00fc\u011fmesi \u2014 Esc burada men\u00fcy\u00fc kapatmaz");
                return true;
            }
            case 344: {
                YikimPanel.open(class_310.method_1551(), 0);
                return true;
            }
            case 345: {
                this.chipHud.run();
                return true;
            }
            case 346: {
                YikimPresets.cycle(class_310.method_1551());
                return true;
            }
        }
        return false;
    }

    void onClose() {
        this.hint("\u00c7\u0131kmak i\u00e7in \"\u00c7\u0131k\u0131\u015f\" d\u00fc\u011fmesi \u2014 Esc burada men\u00fcy\u00fc kapatmaz");
    }

    private void hint(String message) {
        class_310 client = class_310.method_1551();
        class_327 font = client == null ? null : client.field_1772;
        this.hint = message;
        this.hintWidth = font == null ? 0 : font.method_1727(message);
        this.hintUntil = System.currentTimeMillis() + 2600L;
    }

    private record Button(String label, String hint, int icon, int tab, Runnable action) {
    }

    private static final class Hit {
        private int x;
        private int y;
        private int width;
        private int height;
        private Runnable action;

        private Hit() {
        }

        boolean inside(double mouseX, double mouseY) {
            return YikimDraw.inside(mouseX, mouseY, this.x, this.y, this.width, this.height);
        }
    }
}

