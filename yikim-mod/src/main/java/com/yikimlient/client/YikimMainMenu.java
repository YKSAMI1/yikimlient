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

    /* ---------------- MODERN DÜZEN (v1.35.0) ----------------
       Launcher'ın "Modern" dünyasının oyun içi karşılığı: üstte yüzen
       sekme şeridi, tam ekran sahne, sağda cam kart, altta durum çubuğu.
       Renkler launcher'ın turuncu-kor paletinden; kare başına yalnızca
       düz dikdörtgen + metin çizilir (blur, gölge dokusu, parçacık yok). */
    private static final String[] MD_SEKME = {"Oyna", "Kozmetik", "Modlar", "Hesap", "Ayarlar"};
    private static final int[] MD_IKON = {
        YikimMenuIcons.PLAY, YikimMenuIcons.EYE, YikimMenuIcons.BLOCKS,
        YikimMenuIcons.KULLANICI, YikimMenuIcons.GEAR};
    private static final String[] MD_BUTON = {
        "DÜNYALARI AÇ", "ÖZELLEŞTİRME", "MODLARI AÇ", "HESAP DEĞİŞTİR", "MİNECRAFT AYARLARI"};
    private static final int MD_TEXT = 0xFFF4ECE2;
    private static final int MD_DIM = 0xFFB3A495;
    private static final int MD_FAINT = 0xFF8A7B6C;
    private static final int MD_CARD = 0xE815110F;
    private static final int MD_LINE = 0x1FFFFFFF;
    private static final int MD_LINE_GUC = 0x33FFFFFF;
    private static final int MD_HOVER = 0x14FFFFFF;
    private static final int MD_SCRIM_TOP = 0xE0070504;
    private static final int MD_SCRIM_BOTTOM = 0xE6070504;
    private static final int MD_SCRIM_LEFT = 0xA6070504;

    /** Seçili üst sekme — ekranlar arasında korunur (menüye dönünce aynı yer). */
    private static int sekme;
    private String cacheBellek = "";
    private float cacheBellekOran;
    private String cacheSkin = "";
    private String cachePelerin = "";
    private String cacheElitra = "";
    private String cacheMojang = "";

    /** Üst sekme tıklamaları — kare başına lambda üretmemek için önceden kurulu. */
    private final Runnable[] modernSekmeSec = new Runnable[MD_SEKME.length];
    /** Kartın altındaki büyük eylem düğmesi (sekmeye göre). */
    private final Runnable[] modernEylemler = new Runnable[MD_SEKME.length];
    /** Kart içindeki küçük bağlantı düğmeleri (sekmeye göre, boş olabilir). */
    private final Button[][] modernLinkler = new Button[MD_SEKME.length][];
    private final Runnable modernCikis;
    private final Runnable surukleBaslat;
    /** Mod tuşu tıklamaları — kare başına lambda üretmemek için bir kez kurulur. */
    private final List<Runnable> modernModTiklama = new ArrayList<Runnable>();

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
        for (class_4185 dugme : this.modButtons) {
            this.modernModTiklama.add(() -> YikimModButtons.press(dugme));
        }
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

        // ---- MODERN DÜZEN: sekmeler, büyük eylemler, kart bağlantıları ----
        for (int i = 0; i < MD_SEKME.length; ++i) {
            final int hedef = i;
            this.modernSekmeSec[i] = () -> YikimMainMenu.sekme = hedef;
        }
        this.modernEylemler[0] = () -> YikimMainMenu.open(YikimAdapter.worldSelectScreen(screen));
        this.modernEylemler[1] = () -> YikimMainMenu.open(new YikimKozmetikEkrani());
        this.modernEylemler[2] = () -> YikimPanel.open(class_310.method_1551(), YikimPanel.TAB_MODS);
        this.modernEylemler[3] = () -> YikimMainMenu.open(new YikimHesapEkrani());
        this.modernEylemler[4] = () -> YikimMainMenu.open(
            YikimAdapter.optionsScreen(screen, class_310.method_1551().field_1690));

        this.modernLinkler[0] = new Button[]{
            new Button("Sunucular", "Sunucu listesi", YikimMenuIcons.GLOBE, -1,
                () -> YikimMainMenu.open(YikimAdapter.multiplayerScreen(screen))),
            new Button("YIKIM", "Performans, g\u00f6r\u00fcn\u00fcm, HUD", YikimMenuIcons.BOLT, -1,
                () -> YikimPanel.open(class_310.method_1551(), YikimPanel.TAB_PERFORMANCE)),
            new Button("At\u00f6lye", "Pelerin ve kanat tasarla", YikimMenuIcons.IMAGE, -1,
                () -> YikimMainMenu.open(new YikimAtolyeEkrani()))};
        this.modernLinkler[1] = new Button[]{
            new Button("Kozmetik", "Deri, pelerin, elitra", YikimMenuIcons.EYE, -1,
                () -> YikimMainMenu.open(new YikimKozmetikEkrani())),
            new Button("At\u00f6lye", "Pelerin ve kanat tasarla", YikimMenuIcons.IMAGE, -1,
                () -> YikimMainMenu.open(new YikimAtolyeEkrani()))};
        this.modernLinkler[2] = new Button[]{
            new Button("YIKIM", "Mod listesi ve ayarlar", YikimMenuIcons.BOLT, -1,
                () -> YikimPanel.open(class_310.method_1551(), YikimPanel.TAB_MODS)),
            new Button("Katalog", "Mod ara ve kur", YikimMenuIcons.SEARCH, -1,
                () -> YikimPanel.open(class_310.method_1551(), YikimPanel.TAB_MODS))};
        this.modernLinkler[3] = new Button[]{
            new Button("Hesap", "Premium / \u00e7evrimd\u0131\u015f\u0131", YikimMenuIcons.KULLANICI, -1,
                () -> YikimMainMenu.open(new YikimHesapEkrani()))};
        this.modernLinkler[4] = new Button[]{
            new Button("Vanilla", "Minecraft ana men\u00fcs\u00fc", YikimMenuIcons.ARROW, -1,
                this.chipVanilla),
            new Button("G\u00f6r\u00fcn\u00fcm", "Klasik / Alev", YikimMenuIcons.EYE, -1,
                () -> YikimPanel.open(class_310.method_1551(), YikimPanel.TAB_LOOK))};

        this.modernCikis = () -> class_310.method_1551().method_1592();
        this.surukleBaslat = () -> this.surukleme = true;
    }

    private static void open(class_437 next) {
        if (next != null) {
            if (YikimDebug.aktif) {
                YikimLog.info("YIKIM ekran-ac: " + next.getClass().getName());
            }
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
        this.drawModern(graphics, font, client, screenWidth, screenHeight, mouseX, mouseY, started);
    }

    /**
     * MODERN ANA MENÜ (v1.35.0) — bu sürümden itibaren varsayılan düzen.
     *
     * Güvenlik ağı: modern çizim beklenmedik bir istisna atarsa oyun kilitlenmez;
     * eski (klasik) düzen bir kez çizilir ve günlüğe yazılır.
     */
    private void drawModern(class_332 graphics, class_327 font, class_310 client,
                            int screenWidth, int screenHeight, int mouseX, int mouseY, long started) {
        try {
            this.drawModernGovde(graphics, font, client, screenWidth, screenHeight, mouseX, mouseY);
        }
        catch (Throwable sorun) {
            YikimLog.info("modern menu cizilemedi, klasik duzene donuldu: " + sorun);
            this.drawKlasik(graphics, font, client, screenWidth, screenHeight, mouseX, mouseY);
        }
        YikimUiMetrics.menuEnd(started);
    }

    /** ESKİ DÜZEN — modern çizim patlarsa kullanılan yedek yol. */
    private void drawKlasik(class_332 graphics, class_327 font, class_310 client,
                            int screenWidth, int screenHeight, int mouseX, int mouseY) {
        long now = System.currentTimeMillis();
        float appear = Math.min(1.0f, (float)(now - this.openedAt) / 420.0f);
        float eased = 1.0f - (1.0f - appear) * (1.0f - appear);
        int slide = (int)((1.0f - eased) * 24.0f);
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
            if (YikimDebug.aktif) {
                YikimLog.info("YIKIM buton #" + index + " '" + button.label() + "' @ " + x + "," + y + " " + buttonWidth + "x" + this.buttonHeight);
            }
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
    }

    /* ============================================================
       MODERN DÜZEN — çizim yardımcıları
       ============================================================ */

    private void drawModernGovde(class_332 graphics, class_327 font, class_310 client,
                                 int screenWidth, int screenHeight, int mouseX, int mouseY) {
        long now = System.currentTimeMillis();
        float appear = Math.min(1.0f, (float)(now - this.openedAt) / 420.0f);
        float eased = 1.0f - (1.0f - appear) * (1.0f - appear);
        int slide = (int)((1.0f - eased) * 18.0f);

        int margin = screenWidth < 640 ? 12 : 26;
        int footerY = screenHeight - 22;
        int navY = margin;
        int navH = 26;

        this.refresh(client, font, 220);

        // Sahne örtüsü: üç gradyan, her biri 6 bant = 18 düz dolgu.
        // Bulanıklık yok; yalnızca yazının okunması için kenarlar koyulaşır.
        YikimDraw.verticalGradient(graphics, 0, 0, screenWidth, Math.min(screenHeight, 132),
            MD_SCRIM_TOP, 0x00070504, 6);
        YikimDraw.verticalGradient(graphics, 0, Math.max(0, screenHeight - 150), screenWidth, screenHeight,
            0x00070504, MD_SCRIM_BOTTOM, 6);
        YikimDraw.horizontalGradient(graphics, 0, 0, (int)((float)screenWidth * 0.55f), screenHeight,
            MD_SCRIM_LEFT, 0x00070504, 6);

        boolean dar = screenWidth < 660;
        int cardW = Math.min(390, Math.max(268, (int)((float)screenWidth * 0.34f)));
        int cardX = screenWidth - margin - cardW + slide / 2;
        int cardTop = navY + navH + 28;
        if (dar) {
            cardW = screenWidth - margin * 2;
            cardX = margin;
            cardTop = navY + navH + 10;
        }
        int cardBottom = footerY - 8;
        int solGenislik = cardX - margin - 28;

        // Karakter: sol metin ile kart arasındaki boşlukta durur, ayakları
        // kartın altına hizalı. Açılışta 24 px aşağıdan yukarı süzülür.
        if (!dar && solGenislik > 190 && cardBottom - cardTop > 180) {
            int alanSol = margin + Math.min(280, solGenislik / 2);
            int cx = alanSol + Math.max(0, (cardX - alanSol) / 2);
            int boy = Math.min(cardBottom - cardTop - 8, (int)((float)screenHeight * 0.52f));
            if (boy >= 110) {
                // karakter kartın üstüne taşmasın
                cx = Math.min(cx, cardX - boy / 3 - 8);
                int ayak = cardBottom + (int)((1.0f - eased) * 24.0f);
                YikimKarakter.draw(graphics, cx, ayak - boy, boy, YikimTheme.backdrop);
                this.addHit(cx - boy / 3, ayak - boy, boy * 2 / 3, boy, this.surukleBaslat);
            }
        }

        this.drawModernBaslik(graphics, font, margin + 2, cardTop + 4, solGenislik, mouseX, mouseY, dar);
        this.drawModernNav(graphics, font, screenWidth, navY, navH, margin, mouseX, mouseY);
        this.drawModernHesap(graphics, font, screenWidth, margin, navY, navH, mouseX, mouseY);
        this.drawModernKart(graphics, font, client, cardX, cardTop, cardW, cardBottom, mouseX, mouseY);
        this.drawModernDurum(graphics, font, screenWidth, screenHeight, margin, mouseX, mouseY);
    }

    private void drawModernBaslik(class_332 graphics, class_327 font, int x, int y, int maxWidth,
                                  int mouseX, int mouseY, boolean dar) {
        if (dar || maxWidth < 170) {
            return;
        }
        // ince kor çizgisi + üst etiket
        YikimDraw.horizontalGradient(graphics, x, y + 5, x + 18, y + 7,
            YikimTheme.accent, YikimTheme.accent2, 4);
        YikimAdapter.text(graphics, font, "YIKIM LIENT  \u2022  MODERN", x + 24, y + 2,
            YikimDraw.blend(YikimTheme.accent, -1, 0.35f), true);

        float olcek = Math.min(2.9f, Math.max(2.0f, (float)maxWidth / 130.0f));
        int markY = y + 16;
        YikimMainMenu.bigText(graphics, font, "YIKIM", x, markY, MD_TEXT, olcek);
        int markW = (int)((float)font.method_1727("YIKIM") * olcek);
        int cizgi = markY + (int)(8.0f * olcek) + 5;
        YikimDraw.horizontalGradient(graphics, x, cizgi, x + Math.min(markW, maxWidth - 6), cizgi + 3,
            YikimTheme.accent, YikimTheme.accent2, 6);
        YikimAdapter.text(graphics, font, this.cacheSubtitle, x + 1, cizgi + 8, MD_DIM, true);

        int isimY = cizgi + 26;
        String isim = this.cacheUser.isEmpty() ? "Ho\u015f geldin" : this.cacheUser;
        YikimAdapter.push(graphics, x, isimY, 1.5f);
        YikimAdapter.text(graphics, font, YikimDraw.clip(font, isim, (int)((float)maxWidth / 1.5f)),
            0, 0, MD_TEXT, true);
        YikimAdapter.pop(graphics);

        // Launcher'daki "Sahneyi değiştir" hapının oyun içi karşılığı.
        int pillY = isimY + 20;
        String etiket = "Sahne: " + YikimBackdrop.sessionLabel();
        int pillW = Math.min(maxWidth, font.method_1727(etiket) + 34);
        boolean uzerinde = YikimDraw.inside(mouseX, mouseY, x, pillY, pillW, 17);
        YikimDraw.roundedFill(graphics, x, pillY, x + pillW, pillY + 17, uzerinde ? 0x40070504 : 0x33070504);
        YikimDraw.outline(graphics, x, pillY, pillW, 17,
            uzerinde ? YikimTheme.alpha(YikimTheme.accent, 140) : MD_LINE);
        YikimMenuIcons.draw(graphics, YikimMenuIcons.IMAGE, x + 8, pillY + 4, 9, YikimTheme.accent);
        YikimAdapter.text(graphics, font, YikimDraw.clip(font, etiket, pillW - 26), x + 22, pillY + 5,
            uzerinde ? MD_TEXT : MD_DIM, true);
        this.addHit(x, pillY, pillW, 17, this.chipBackdrop);
    }

    private void drawModernNav(class_332 graphics, class_327 font, int screenWidth, int navY, int navH,
                               int margin, int mouseX, int mouseY) {
        YikimDraw.verticalGradient(graphics, 0, Math.max(0, navY - 8), screenWidth, navY + navH + 12,
            0x99070504, 0x00070504, 5);
        int toplam = (MD_SEKME.length - 1) * 2;
        for (String ad : MD_SEKME) {
            toplam += font.method_1727(ad) + 24;
        }
        int x = (screenWidth - toplam) / 2;
        if (x < margin) {
            x = margin;
        }
        for (int i = 0; i < MD_SEKME.length; ++i) {
            int tw = font.method_1727(MD_SEKME[i]) + 24;
            boolean aktif = i == YikimMainMenu.sekme;
            boolean uzerinde = YikimDraw.inside(mouseX, mouseY, x, navY, tw, navH);
            if (aktif) {
                YikimDraw.roundedFill(graphics, x, navY, x + tw, navY + navH, 0x1AFFFFFF);
            } else if (uzerinde) {
                YikimDraw.roundedFill(graphics, x, navY, x + tw, navY + navH, 0x0DFFFFFF);
            }
            int renk = aktif ? MD_TEXT : (uzerinde ? MD_DIM : MD_FAINT);
            YikimAdapter.textCentered(graphics, font, MD_SEKME[i], x + tw / 2, navY + (navH - 8) / 2 + 1, renk, true);
            if (aktif) {
                // Seçili sekmenin altında kor: Alev temasında gerçek alev,
                // Klasik'te düz kor çizgisi. İkisi de kare başına birkaç dolgu.
                if (YikimTema.alev()) {
                    YikimDraw.alevCizgi(graphics, x + 10, navY + navH + 3, tw - 20);
                } else {
                    YikimDraw.horizontalGradient(graphics, x + 10, navY + navH + 1,
                        x + tw - 10, navY + navH + 3, YikimTheme.accent, YikimTheme.accent2, 4);
                }
            }
            this.addHit(x, navY, tw, navH, this.modernSekmeSec[i]);
            x += tw + 2;
        }
    }

    private void drawModernHesap(class_332 graphics, class_327 font, int screenWidth, int margin,
                                 int navY, int navH, int mouseX, int mouseY) {
        if (screenWidth < 720) {
            return;
        }
        String ad = this.cacheUser.isEmpty() ? "Hesap" : this.cacheUser;
        int pw = Math.min(170, font.method_1727(ad) + 36);
        int px = screenWidth - margin - pw;
        int py = navY + (navH - 20) / 2;
        boolean uzerinde = YikimDraw.inside(mouseX, mouseY, px, py, pw, 20);
        YikimDraw.roundedFill(graphics, px, py, px + pw, py + 20, uzerinde ? 0x1FFFFFFF : 0x12000000);
        YikimDraw.outline(graphics, px, py, pw, 20, uzerinde ? MD_LINE_GUC : MD_LINE);
        YikimMenuIcons.draw(graphics, YikimMenuIcons.KULLANICI, px + 7, py + 5, 10, YikimTheme.accent);
        YikimAdapter.text(graphics, font, YikimDraw.clip(font, ad, pw - 30), px + 22, py + 6,
            uzerinde ? MD_TEXT : MD_DIM, true);
        this.addHit(px, py, pw, 20, this.modernSekmeSec[3]);
    }

    private void drawModernKart(class_332 graphics, class_327 font, class_310 client,
                                int x, int y, int w, int alt, int mouseX, int mouseY) {
        int pad = 12;
        // cam kart: tek yarı saydam dolgu + 1 px çerçeve + üst iç ışık
        YikimDraw.roundedFill(graphics, x, y, x + w, alt, MD_CARD);
        YikimDraw.outline(graphics, x, y, w, alt - y, MD_LINE);
        graphics.method_25294(x + 3, y + 3, x + w - 3, y + 4, 0x1AFFFFFF);
        graphics.method_25294(x, y + 12, x + 2, y + 46, YikimTheme.accent);

        int ix = x + pad;
        int iw = w - pad * 2;
        YikimMenuIcons.draw(graphics, MD_IKON[YikimMainMenu.sekme], ix, y + pad + 1, 11, YikimTheme.accent);
        YikimAdapter.text(graphics, font, MD_SEKME[YikimMainMenu.sekme].toUpperCase(Locale.ROOT),
            ix + 16, y + pad + 3, MD_TEXT, true);
        String rozet = YikimDraw.clip(font, this.modernRozet(), iw / 2);
        if (!rozet.isEmpty()) {
            int bw = font.method_1727(rozet) + 12;
            int bx = x + w - pad - bw;
            YikimDraw.roundedFill(graphics, bx, y + pad - 1, bx + bw, y + pad + 11,
                YikimTheme.alpha(YikimTheme.accent, 40));
            YikimAdapter.text(graphics, font, rozet, bx + 6, y + pad + 2,
                YikimDraw.blend(YikimTheme.accent2, -1, 0.25f), false);
        }
        int ayrac = y + pad + 20;
        YikimDraw.separator(graphics, ix, ayrac, iw);

        int dugmeH = 34;
        int dugmeY = alt - pad - dugmeH;
        boolean yerVar = alt - y >= 190;
        int linkY = dugmeY - (yerVar ? 24 : 0);
        int icerikUst = ayrac + 8;
        int icerikAlt = (yerVar ? linkY : dugmeY) - 6;

        switch (YikimMainMenu.sekme) {
            case 0 -> this.modernPaneOyna(graphics, font, ix, icerikUst, iw, icerikAlt, mouseX, mouseY);
            case 1 -> this.modernPaneKozmetik(graphics, font, ix, icerikUst, iw, icerikAlt, mouseX, mouseY);
            case 2 -> this.modernPaneModlar(graphics, font, client, ix, icerikUst, iw, icerikAlt, mouseX, mouseY);
            case 3 -> this.modernPaneHesap(graphics, font, ix, icerikUst, iw, icerikAlt);
            default -> this.modernPaneAyarlar(graphics, font, ix, icerikUst, iw, icerikAlt, mouseX, mouseY);
        }

        if (yerVar) {
            this.modernLinkleri(graphics, font, ix, linkY, iw, mouseX, mouseY);
        }

        boolean hovered = YikimDraw.inside(mouseX, mouseY, ix, dugmeY, iw, dugmeH);
        this.modernBuyukDugme(graphics, font, ix, dugmeY, iw, dugmeH,
            MD_BUTON[YikimMainMenu.sekme], MD_IKON[YikimMainMenu.sekme], hovered);
        this.addHit(ix, dugmeY, iw, dugmeH, this.modernEylemler[YikimMainMenu.sekme]);
    }

    private String modernRozet() {
        return switch (YikimMainMenu.sekme) {
            case 0 -> this.cacheFps + " FPS";
            case 1 -> this.cacheSkin;
            case 2 -> this.cacheMods;
            case 3 -> this.cacheAccount;
            default -> YikimTema.ad();
        };
    }

    private void modernPaneOyna(class_332 graphics, class_327 font, int x, int y, int w, int alt,
                                int mouseX, int mouseY) {
        int satir = 18;
        int n = Math.max(0, (alt - y) / satir);
        if (n > 0) {
            this.modernSatir(graphics, font, x, y, w, "S\u00fcr\u00fcm",
                "Minecraft " + YikimVideo.gameVersion(), MD_TEXT, mouseX, mouseY, null);
        }
        if (n > 1) {
            this.modernSatir(graphics, font, x, y + satir, w, "Profil", this.cacheProfile, MD_TEXT, mouseX, mouseY, null);
        }
        if (n > 2) {
            this.modernSatir(graphics, font, x, y + satir * 2, w, "Mod", this.cacheMods, MD_TEXT, mouseX, mouseY, null);
        }
        if (n > 3) {
            this.modernSatir(graphics, font, x, y + satir * 3, w, "Bellek", this.cacheBellek, MD_TEXT, mouseX, mouseY, null);
            YikimDraw.bar(graphics, x, y + satir * 3 + 11, w, 3, this.cacheBellekOran, YikimTheme.accent);
        }
    }

    private void modernPaneKozmetik(class_332 graphics, class_327 font, int x, int y, int w, int alt,
                                    int mouseX, int mouseY) {
        int satir = 18;
        int n = Math.max(0, (alt - y) / satir);
        if (n > 0) {
            this.modernSatir(graphics, font, x, y, w, "Skin", this.cacheSkin, MD_TEXT, mouseX, mouseY, null);
        }
        if (n > 1) {
            this.modernSatir(graphics, font, x, y + satir, w, "Pelerin", this.cachePelerin, MD_TEXT, mouseX, mouseY, null);
        }
        if (n > 2) {
            this.modernSatir(graphics, font, x, y + satir * 2, w, "Elitra", this.cacheElitra, MD_TEXT, mouseX, mouseY, null);
        }
        if (n > 3) {
            this.modernSatir(graphics, font, x, y + satir * 3, w, "Mojang", this.cacheMojang, MD_TEXT, mouseX, mouseY, null);
        }
    }

    private void modernPaneModlar(class_332 graphics, class_327 font, class_310 client,
                                  int x, int y, int w, int alt, int mouseX, int mouseY) {
        int satir = 18;
        int n = Math.max(0, (alt - y) / satir);
        if (n > 0) {
            this.modernSatir(graphics, font, x, y, w, "Y\u00fckl\u00fc", this.cacheMods, MD_TEXT, mouseX, mouseY, null);
        }
        if (n > 1) {
            this.modernSatir(graphics, font, x, y + satir, w, "Katalog",
                YikimConfig.get().catalogSource, MD_TEXT, mouseX, mouseY, null);
        }
        if (n > 2) {
            this.modernSatir(graphics, font, x, y + satir * 2, w, "Di\u011fer tu\u015flar",
                String.valueOf(this.modButtons.size()), MD_TEXT, mouseX, mouseY, null);
        }
        // Diğer modların tuşları: klasik düzendeki sağ alt blok yerine kartın içinde.
        int listeY = y + satir * 3 + 4;
        int goster = Math.min(Math.max(0, (alt - listeY) / 17), this.modButtons.size());
        for (int i = 0; i < goster; ++i) {
            class_4185 dugme = this.modButtons.get(i);
            String etiket = YikimModButtons.label(dugme);
            int ry = listeY + i * 17;
            boolean uzerinde = YikimDraw.inside(mouseX, mouseY, x, ry, w, 16);
            YikimDraw.roundedFill(graphics, x, ry, x + w, ry + 16,
                uzerinde ? YikimTheme.alpha(YikimTheme.accent, 200) : 0x0DFFFFFF);
            YikimDraw.outline(graphics, x, ry, w, 16,
                uzerinde ? YikimTheme.alpha(YikimTheme.accent, 190) : MD_LINE);
            String jar = YikimModButtons.jarIconFor(etiket);
            if (jar != null) {
                YikimIcons.draw(graphics, font, jar, null, etiket, x + 1, ry + 1, 14);
            } else {
                YikimMenuIcons.draw(graphics, YikimMenuIcons.BLOCKS, x + 4, ry + 4, 8,
                    uzerinde ? 0xFFFFFFFF : YikimTheme.accent);
            }
            YikimAdapter.text(graphics, font, YikimDraw.clip(font, etiket, w - 24), x + 20, ry + 4,
                uzerinde ? 0xFFFFFFFF : MD_TEXT, !uzerinde);
            this.addHit(x, ry, w, 16, this.modernModTiklama.get(i));
        }
        if (this.modButtons.size() > goster) {
            YikimAdapter.text(graphics, font, "+" + (this.modButtons.size() - goster) + " tu\u015f panelde",
                x, listeY + goster * 17 + 1, MD_FAINT, false);
        }
    }

    private void modernPaneHesap(class_332 graphics, class_327 font, int x, int y, int w, int alt) {
        int satir = 18;
        int n = Math.max(0, (alt - y) / satir);
        if (n > 0) {
            this.modernSatir(graphics, font, x, y, w, "Oyuncu",
                this.cacheUser.isEmpty() ? "\u2014" : this.cacheUser, MD_TEXT, 0, 0, null);
        }
        if (n > 1) {
            this.modernSatir(graphics, font, x, y + satir, w, "Hesap", this.cacheAccount, MD_TEXT, 0, 0, null);
        }
        if (n > 2) {
            this.modernSatir(graphics, font, x, y + satir * 2, w, "Ba\u015flat\u0131c\u0131", this.cacheLauncher, MD_TEXT, 0, 0, null);
        }
        if (n > 3) {
            this.modernSatir(graphics, font, x, y + satir * 3, w, "Tema", YikimTema.ad(), MD_TEXT, 0, 0, null);
        }
    }

    private void modernPaneAyarlar(class_332 graphics, class_327 font, int x, int y, int w, int alt,
                                   int mouseX, int mouseY) {
        int satir = 20;
        if (alt - y >= satir) {
            this.modernIkonluSatir(graphics, font, x, y, w, YikimMenuIcons.IMAGE,
                "Arka plan", YikimBackdrop.sessionLabel(), mouseX, mouseY, this.chipBackdrop);
        }
        if (alt - y >= satir * 2) {
            boolean uzerinde = YikimDraw.inside(mouseX, mouseY, x, y + satir, w, 16);
            YikimDraw.toggle(graphics, font, x, y + satir, w, 16, "HUD",
                YikimConfig.get().hudEnabled, uzerinde);
            this.addHit(x, y + satir, w, 16, this.chipHud);
        }
        if (alt - y >= satir * 3) {
            this.modernIkonluSatir(graphics, font, x, y + satir * 2, w, YikimMenuIcons.ARROW,
                "Vanilla men\u00fc", "ge\u00e7", mouseX, mouseY, this.chipVanilla);
        }
    }

    private void modernSatir(class_332 graphics, class_327 font, int x, int y, int w,
                             String etiket, String deger, int renk,
                             int mouseX, int mouseY, Runnable action) {
        boolean uzerinde = action != null && YikimDraw.inside(mouseX, mouseY, x, y, w, 16);
        if (uzerinde) {
            YikimDraw.roundedFill(graphics, x - 3, y - 1, x + w + 3, y + 15, MD_HOVER);
        }
        YikimAdapter.text(graphics, font, etiket, x, y + 2, uzerinde ? MD_DIM : MD_FAINT, false);
        String sag = YikimDraw.clip(font, deger == null ? "" : deger, w / 2);
        YikimAdapter.text(graphics, font, sag, x + w - font.method_1727(sag), y + 2, renk, true);
        if (action != null) {
            this.addHit(x, y - 1, w, 16, action);
        }
    }

    private void modernIkonluSatir(class_332 graphics, class_327 font, int x, int y, int w, int ikon,
                                   String etiket, String deger, int mouseX, int mouseY, Runnable action) {
        boolean uzerinde = YikimDraw.inside(mouseX, mouseY, x, y, w, 16);
        if (uzerinde) {
            YikimDraw.roundedFill(graphics, x - 3, y - 1, x + w + 3, y + 15, MD_HOVER);
        }
        YikimMenuIcons.draw(graphics, ikon, x + 1, y + 4, 8, uzerinde ? MD_TEXT : YikimTheme.accent);
        YikimAdapter.text(graphics, font, etiket, x + 14, y + 2, uzerinde ? MD_TEXT : MD_DIM, false);
        String sag = YikimDraw.clip(font, deger, w / 2);
        YikimAdapter.text(graphics, font, sag, x + w - font.method_1727(sag), y + 2, MD_FAINT, false);
        this.addHit(x, y - 1, w, 16, action);
    }

    private void modernLinkleri(class_332 graphics, class_327 font, int x, int y, int w,
                                int mouseX, int mouseY) {
        Button[] liste = this.modernLinkler[YikimMainMenu.sekme];
        if (liste.length == 0) {
            return;
        }
        int bosluk = 5;
        int bw = (w - (liste.length - 1) * bosluk) / liste.length;
        for (int i = 0; i < liste.length; ++i) {
            Button bag = liste[i];
            int bx = x + i * (bw + bosluk);
            boolean uzerinde = YikimDraw.inside(mouseX, mouseY, bx, y, bw, 17);
            YikimDraw.roundedFill(graphics, bx, y, bx + bw, y + 17, uzerinde ? 0x1FFFFFFF : 0x0DFFFFFF);
            YikimDraw.outline(graphics, bx, y, bw, 17, uzerinde ? MD_LINE_GUC : MD_LINE);
            int ikon = 9;
            int tw = font.method_1727(bag.label());
            int ic = Math.max(2, (bw - (ikon + 5 + tw)) / 2);
            YikimMenuIcons.draw(graphics, bag.icon(), bx + ic, y + 4, ikon, uzerinde ? MD_TEXT : MD_FAINT);
            YikimAdapter.text(graphics, font, YikimDraw.clip(font, bag.label(), Math.max(0, bw - ic - ikon - 8)),
                bx + ic + ikon + 5, y + 5, uzerinde ? MD_TEXT : MD_DIM, false);
            this.addHit(bx, y, bw, 17, bag.action());
        }
    }

    private void modernBuyukDugme(class_332 graphics, class_327 font, int x, int y, int w, int h,
                                  String label, int ikon, boolean hovered) {
        int taban = YikimMainMenu.sekme == 4 ? 0xFF3A1610 : YikimTheme.accent;
        int ust = YikimDraw.blend(taban, -1, 0.28f);
        int altRenk = YikimDraw.blend(taban, 0xFF000000, 0.30f);
        YikimDraw.roundedFill(graphics, x, y, x + w, y + h, taban);
        YikimDraw.verticalGradient(graphics, x + 2, y + 1, x + w - 2, y + h - 1, ust, altRenk, 5);
        YikimDraw.outline(graphics, x, y, w, h, hovered ? 0x66FFFFFF : YikimTheme.alpha(YikimTheme.accent2, 120));
        graphics.method_25294(x + 8, y + h - 2, x + w - 8, y + h - 1, 0xB3FFD36B);
        int boy = 11;
        int tw = font.method_1727(label);
        int bas = x + Math.max(4, (w - (boy + 6 + tw)) / 2);
        YikimMenuIcons.draw(graphics, ikon, bas, y + (h - boy) / 2, boy, 0xFFFFFFFF);
        YikimAdapter.text(graphics, font, label, bas + boy + 6, y + (h - 8) / 2 + 1, 0xFFFFFFFF, true);
    }

    private void drawModernDurum(class_332 graphics, class_327 font, int screenWidth, int screenHeight,
                                 int margin, int mouseX, int mouseY) {
        int y = screenHeight - 22;
        YikimDraw.verticalGradient(graphics, 0, y - 8, screenWidth, screenHeight, 0x00070504, 0xE6070504, 4);
        graphics.method_25294(0, y, screenWidth, y + 1, 0x1FFFFFFF);
        YikimAdapter.text(graphics, font, this.cacheFooterLeft, margin, y + 7, MD_FAINT, false);

        boolean ipucu = System.currentTimeMillis() < this.hintUntil && !this.hint.isEmpty();
        String orta = ipucu
            ? this.hint
            : "Sa\u011f Shift: YIKIM men\u00fcs\u00fc  \u2022  Sa\u011f Ctrl: HUD  \u2022  Sa\u011f Alt: profil";
        int ortaW = font.method_1727(orta);
        int ox = (screenWidth - ortaW) / 2;
        int solW = font.method_1727(this.cacheFooterLeft);
        if (ox > margin + solW + 24 && ox + ortaW < screenWidth - margin - 90) {
            YikimAdapter.text(graphics, font, orta, ox, y + 7, ipucu ? 0xFFFFB627 : MD_FAINT, false);
        }

        String cikis = "\u00c7\u0131k\u0131\u015f";
        int cw = font.method_1727(cikis);
        int ex = screenWidth - margin - cw - 15;
        boolean uzerinde = YikimDraw.inside(mouseX, mouseY, ex, y + 3, cw + 15, 16);
        YikimMenuIcons.draw(graphics, YikimMenuIcons.POWER, ex, y + 6, 10, uzerinde ? 0xFFFF6B5E : MD_FAINT);
        YikimAdapter.text(graphics, font, cikis, ex + 13, y + 7, uzerinde ? 0xFFFF6B5E : MD_FAINT, false);
        this.addHit(ex, y + 3, cw + 15, 16, this.modernCikis);
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
        // Modern kart: canlı bellek + kozmetik durumu (saniyede bir tazelenir,
        // böylece her karede Runtime sorgusu ve dosya erişimi olmaz).
        long enCokMb = Runtime.getRuntime().maxMemory() / 1048576L;
        long kullanilanMb = (Runtime.getRuntime().totalMemory() - Runtime.getRuntime().freeMemory()) / 1048576L;
        this.cacheBellek = kullanilanMb + " / " + enCokMb + " MB";
        this.cacheBellekOran = enCokMb > 0L ? Math.min(1.0f, (float)kullanilanMb / (float)enCokMb) : 0.0f;
        this.cacheSkin = YikimKozmetikSecim.deriSlim ? "\u0130nce (Alex)" : "Klasik (Steve)";
        this.cachePelerin = YikimKozmetikSecim.aktifId(YikimKozmetikSecim.PELERIN).isEmpty() ? "yok" : "tak\u0131l\u0131";
        this.cacheElitra = YikimKozmetikSecim.aktifId(YikimKozmetikSecim.ELITRA).isEmpty() ? "yok" : "tak\u0131l\u0131";
        this.cacheMojang = YikimKozmetikSecim.aktifId(YikimKozmetikSecim.MOJANG).isEmpty() ? "yok" : "tak\u0131l\u0131";
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
        // GECICI TESHIS (v1.0.5-debug): buton kutularini logla. Tiklat
        // denemelerinde gercek konumu ogrenmek icin; yayinlanan surumde kaldirilir.
        if (YikimDebug.aktif) {
            YikimLog.info("YIKIM hit: " + x + "," + y + " " + width + "x" + height);
        }
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

    /**
     * Bu konumda tiklanabilir bir sey var mi? (v1.33.14)
     *
     * NEDEN VAR: 26.x'te tıklama koordinatları cizimdeki koordinatlarla aynı
     * olmuyor (ölcek farkı). Tiklama hangi setin "isabet ettigini" gormek icin
     * bu yuzden once deniyoruz — bosa duserse diger set denenir.
     */
    boolean ilkVurus(double mouseX, double mouseY) {
        for (int index = this.hitCount - 1; index >= 0; --index) {
            Hit hit = this.hits.get(index);
            if (hit.inside(mouseX, mouseY)) {
                return true;
            }
        }
        return false;
    }

    boolean click(double mouseX, double mouseY, int button) {
        if (!YikimAdapter.solTik(button)) {
            return true;
        }
        this.surukleme = false;
        for (int index = this.hitCount - 1; index >= 0; --index) {
            Hit hit = this.hits.get(index);
            if (!hit.inside(mouseX, mouseY)) {
                if (YikimDebug.aktif) {
                    YikimLog.info("YIKIM tik-sor: " + mouseX + "," + mouseY + " vs " + hit.x + "," + hit.y + " " + hit.width + "x" + hit.height);
                }
                continue;
            }
            if (YikimDebug.aktif) {
                YikimLog.info("YIKIM tik-ISABET: " + mouseX + "," + mouseY + " -> " + hit.x + "," + hit.y + " " + hit.width + "x" + hit.height);
            }
            hit.action.run();
            return true;
        }
        if (YikimDebug.aktif) {
            YikimLog.info("YIKIM tik-YOK: " + mouseX + "," + mouseY + " hitCount=" + this.hitCount);
        }
        return true;
    }

    boolean key(int keyCode) {
        switch (keyCode) {
            case YikimKeys.ESC_TUS: {
                this.hint("\u00c7\u0131kmak i\u00e7in \"\u00c7\u0131k\u0131\u015f\" d\u00fc\u011fmesi \u2014 Esc burada men\u00fcy\u00fc kapatmaz");
                return true;
            }
            case YikimKeys.MENU_TUS: {
                YikimKeys.menuyuCalistir(class_310.method_1551());
                return true;
            }
            case YikimKeys.HUD_TUS: {
                this.chipHud.run();
                return true;
            }
            case YikimKeys.PROFIL_TUS: {
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

