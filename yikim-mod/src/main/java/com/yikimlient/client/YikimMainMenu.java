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

    /* ============================================================
       ONECLIENT ANA SAYFA DÃœZENÄ° (v1.36.0) â€” turuncu-kor palet

       Ã–lÃ§Ã¼ler OneClient/Polyfrost launcher'Ä±nÄ±n kendi kodundan birebir
       alÄ±ndÄ± (packages/oneclient_app/src: theme, navbar, active_cluster_panel,
       recents_row, layout/app_shell):

         navbar yÃ¼ksekliÄŸi ............ 80 px
         navbar yan boÅŸluÄŸu .......... 40 px  (kelime iÅŸareti < 1100 px gizli)
         kelime iÅŸareti ............... 214 Ã— 44
         baÄŸlantÄ± ...................... 36 px yÃ¼ksek, yarÄ±Ã§ap 10, 16 px yazÄ±,
                                         geniÅŸlik = harf Ã— 10 + 34
         ana sayfa boÅŸluÄŸu ............ 48 px
         baÅŸlÄ±k ....................... 56 px kalÄ±n, satÄ±r yÃ¼ksekliÄŸi 1.1
         alt baÅŸlÄ±k ................... 16 px yarÄ± kalÄ±n
         birincil dÃ¼ÄŸme ................ 16 px / 450, boÅŸluk 8 dikey 24 yatay
         hayalet ayar dÃ¼ÄŸmesi ......... 32 Ã— 32, 20 px ikon
         son oynananlar ÅŸeridi ........ 208 px
         kart .......................... 300â€“480 esnek, aralÄ±k 24, yarÄ±Ã§ap 12,
                                         1 px kenarlÄ±k (hover 1.6), baÅŸlÄ±k 32
         "daha fazla" kutucuÄŸu ........ 96 px
         giriÅŸ: navbar 460 ms (-80 px) Â· baÅŸlÄ±k 440 ms (48 px saÄŸdan) Â·
                 kart 460 ms + 85 ms gecikme (48 px aÅŸaÄŸÄ±dan)

       Minecraft birimi = web_px Ã— (ekran yÃ¼ksekliÄŸi / 900); bÃ¶ylece her
       Ã§Ã¶zÃ¼nÃ¼rlÃ¼kte aynÄ± oranlar korunur.

       Renk: OneClient'Ä±n 8 jetonunun YIKIM karÅŸÄ±lÄ±ÄŸÄ± (is + kor turuncusu).
       Blur/shader/parÃ§acÄ±k YOK: kare baÅŸÄ±na yalnÄ±z dÃ¼z dikdÃ¶rtgen + gradyan.
       ============================================================ */

    private static final String[] MD_SEKME = {"Oyna", "Kozmetik", "Modlar", "Hesap", "Ayarlar"};
    private static final int[] MD_IKON = {
        YikimMenuIcons.PLAY, YikimMenuIcons.EYE, YikimMenuIcons.BLOCKS,
        YikimMenuIcons.KULLANICI, YikimMenuIcons.GEAR};
// NOT: BÜYÜK HARF Türkçe glifler (Ğ/Ş/Ü/Ö/Ç/İ) piksel fontta bozuk çıkıyor —
    // "DÜNYALARI AÃŸ" taşmasının tam kökü budur. Bu yüzden tüm etiketler
    // harf karışık yazılıyor (OneClient 16 px / 450 ağırlık hissi korunuyor).
    private static final String[] MD_BUTON = {
        "Dünyaları aç", "Kozmetik ekranı", "Mod kataloğu", "Hesap değiştir", "Minecraft ayarları"};

    // OneClient paletinin YIKIM karÅŸÄ±lÄ±ÄŸÄ± (page/card/component/border/text/â€¦)
    private static final int MD_PAGE = 0xFF0B0705;
    private static final int MD_ELEV = 0xFF140C08;
    private static final int MD_CARD = 0xE61B0F09;
    private static final int MD_COMP = 0xE622130B;
    private static final int MD_BORDER = 0x2EFFB066;
    private static final int MD_BORDER_GUC = 0x49FFB066;
    private static final int MD_TEXT = 0xFFFFE9D6;
    private static final int MD_TEXT2 = 0xFFB08A72;
    private static final int MD_HAYALET = 0x0C000000;
    private static final int MD_HAYALET_UST = 0x1A000000;
    private static final int MD_HAYALET_BAS = 0x26000000;

    /** SeÃ§ili Ã¼st sekme â€” ekranlar arasÄ±nda korunur (menÃ¼ye dÃ¶nÃ¼nce aynÄ± yer). */
    private static int sekme;
    private String cacheBellek = "";
    private float cacheBellekOran;
    private String cacheSkin = "";
    private String cachePelerin = "";
    private String cacheElitra = "";
    private String cacheMojang = "";
    private String cacheKurulum = "";

    /** Ãœst sekme tÄ±klamalarÄ± â€” kare baÅŸÄ±na lambda Ã¼retmemek iÃ§in Ã¶nceden kurulu. */
    private final Runnable[] modernSekmeSec = new Runnable[MD_SEKME.length];
    /** BaÅŸlÄ±k bloÄŸunun altÄ±ndaki bÃ¼yÃ¼k eylem dÃ¼ÄŸmesi (sekmeye gÃ¶re). */
    private final Runnable[] modernEylemler = new Runnable[MD_SEKME.length];
    private final Runnable modernCikis;
    private final Runnable surukleBaslat;
    /** "TÃ¼mÃ¼" kutucuÄŸu ve baÅŸlÄ±ÄŸÄ±n yanÄ±ndaki hayalet ayar dÃ¼ÄŸmesi. */
    private final Runnable modernPanel;
    private final Runnable modernGorunum;
    /** Mod tuÅŸu tÄ±klamalarÄ± â€” kare baÅŸÄ±na lambda Ã¼retmemek iÃ§in bir kez kurulur. */
    private final List<Runnable> modernModTiklama = new ArrayList<Runnable>();

    /**
     * "Son oynananlar" ÅŸeridindeki bir kart â€” OneClient recents_row kartÄ±.
     * Etiket/durum saniyede bir tazelenir; eylem Ã¶nceden kurulmuÅŸtur.
     */
    private static final class Kart {
        private String etiket = "";
        private String durum = "";
        private int ikon;
        private Runnable eylem;
    }

    private final Kart[][] modernKartlar = new Kart[MD_SEKME.length][6];
    private final int[] modernKartSayi = new int[MD_SEKME.length];

    /** Kare baÅŸÄ±na yeniden hesaplanmayan Ã¶lÃ§Ã¼ kÃ¼mesi (web px â†’ Minecraft birimi). */
    private static final class Olcek {
        private float s;
        private int navH;
        private int pad;
        private int navPad;
        private int navGap;
        private int ikonBtn;
        private int ikon;
        private int butonH;
        private int butonPad;
        private int hayaletBtn;
        private int seritH;
        private int kartAralik;
        private float markaOlcek;
        private float baslikOlcek;
        private float altOlcek;
        private float kartBaslikOlcek;
    }

    public YikimMainMenu(class_437 screen) {
        this.screen = screen;
        this.buttons.add(new Button("Tek Oyunculu", "D\u00fcnyalar\u0131n\u0131 a\u00e7", 1, -1, () -> YikimMainMenu.open(YikimAdapter.worldSelectScreen(screen))));
        this.buttons.add(new Button("\u00c7ok Oyunculu", "Sunucu listesi", 2, -1, () -> YikimMainMenu.open(YikimAdapter.multiplayerScreen(screen))));
        this.buttons.add(new Button("YIKIM Men\u00fcs\u00fc", "Performans, g\u00f6r\u00fcn\u00fcm, HUD, modlar", 0, 0, () -> YikimPanel.open(class_310.method_1551(), 0)));
        this.buttons.add(new Button("HUD'u d\u00fczenle", "\u00d6\u011feleri yerle\u015ftir", 3, 2, () -> YikimPanel.open(class_310.method_1551(), 2)));
        this.buttons.add(new Button("Modlar", "Mod ara ve kur", 4, 4, () -> YikimPanel.open(class_310.method_1551(), 4)));
        // v1.27.0: oyun iÃ§i hesap deÄŸiÅŸtirme (launcher hesaplarÄ±)
        String hesapAdi = YikimHesaplar.aktifAd(class_310.method_1551());
        this.buttons.add(new Button("Hesap: " + (hesapAdi.isEmpty() ? "deÄŸiÅŸtir" : hesapAdi),
            "Premium / Ã§evrimdÄ±ÅŸÄ± arasÄ±nda anÄ±nda geÃ§iÅŸ", YikimMenuIcons.KULLANICI, -1,
            () -> YikimMainMenu.open(new YikimHesapEkrani())));
        this.buttons.add(new Button("Ayarlar", "Minecraft ayarlar\u0131", 5, -1, () -> YikimMainMenu.open(YikimAdapter.optionsScreen(screen, class_310.method_1551().field_1690))));
        this.buttons.add(new Button("\u00c7\u0131k\u0131\u015f", "Oyundan ayr\u0131l", 8, -1, () -> class_310.method_1551().method_1592()));
        // DÄ°ÄER MODLARIN TUÅLARI (Flashback, Mod Menu vb.): vanilla menÃ¼ye mixin ile
        // eklenen tuÅŸlar OTURUM BOYUNCA BÄ°R KEZ yakalanÄ±r ve saÄŸ panelde listelenir.
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

        // ---- ONECLIENT DÃœZEN: sekmeler, bÃ¼yÃ¼k eylemler ----
        // NOT: AtÃ¶lye (piksel rozet tasarÄ±mcÄ±sÄ±) bilerek YOK â€” o sistem
        // launcher Ã¼zerinden Ã§alÄ±ÅŸÄ±r ve oyun iÃ§i menÃ¼de normal kullanÄ±cÄ±ya
        // aÃ§Ä±lmaz. TuÅŸu da kapalÄ± (bkz. YikimKeys.poll).
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

        for (int p = 0; p < MD_SEKME.length; ++p) {
            for (int k = 0; k < 6; ++k) {
                this.modernKartlar[p][k] = new Kart();
            }
        }
        // KartlarÄ±n eylemleri sabit; etiket/durum metni refresh() iÃ§inde
        // saniyede bir yazÄ±lÄ±r (kare baÅŸÄ±na dizi/nesne Ã¼retimi olmaz).
        this.modernKartlar[0][0].eylem = () -> YikimMainMenu.open(YikimAdapter.worldSelectScreen(screen));
        this.modernKartlar[0][0].ikon = YikimMenuIcons.PLAY;
        this.modernKartlar[0][1].eylem = () -> YikimMainMenu.open(YikimAdapter.multiplayerScreen(screen));
        this.modernKartlar[0][1].ikon = YikimMenuIcons.GLOBE;
        this.modernKartlar[0][2].eylem = () -> YikimPanel.open(class_310.method_1551(), YikimPanel.TAB_PERFORMANCE);
        this.modernKartlar[0][2].ikon = YikimMenuIcons.BOLT;
        this.modernKartlar[0][3].eylem = () -> YikimMainMenu.open(new YikimKozmetikEkrani());
        this.modernKartlar[0][3].ikon = YikimMenuIcons.EYE;
        this.modernKartlar[0][4].eylem = () -> YikimPanel.open(class_310.method_1551(), YikimPanel.TAB_MODS);
        this.modernKartlar[0][4].ikon = YikimMenuIcons.BLOCKS;
        this.modernKartlar[0][5].eylem = () -> YikimMainMenu.open(new YikimHesapEkrani());
        this.modernKartlar[0][5].ikon = YikimMenuIcons.KULLANICI;

        Runnable koz = () -> YikimMainMenu.open(new YikimKozmetikEkrani());
        this.modernKartlar[1][0].eylem = koz;
        this.modernKartlar[1][0].ikon = YikimMenuIcons.EYE;
        this.modernKartlar[1][1].eylem = koz;
        this.modernKartlar[1][1].ikon = YikimMenuIcons.HEART;
        this.modernKartlar[1][2].eylem = koz;
        this.modernKartlar[1][2].ikon = YikimMenuIcons.IMAGE;
        this.modernKartlar[1][3].eylem = koz;
        this.modernKartlar[1][3].ikon = YikimMenuIcons.GLOBE;
        this.modernKartlar[1][4].eylem = () -> YikimPanel.open(class_310.method_1551(), YikimPanel.TAB_LOOK);
        this.modernKartlar[1][4].ikon = YikimMenuIcons.BOLT;

        this.modernKartlar[2][0].eylem = () -> YikimPanel.open(class_310.method_1551(), YikimPanel.TAB_MODS);
        this.modernKartlar[2][0].ikon = YikimMenuIcons.SEARCH;
        this.modernKartlar[2][1].eylem = () -> YikimPanel.open(class_310.method_1551(), YikimPanel.TAB_MODS);
        this.modernKartlar[2][1].ikon = YikimMenuIcons.BLOCKS;
        this.modernKartlar[2][4].eylem = () -> YikimPanel.open(class_310.method_1551(), YikimPanel.TAB_SYSTEM);
        this.modernKartlar[2][4].ikon = YikimMenuIcons.BOLT;

        this.modernKartlar[3][0].eylem = () -> YikimMainMenu.open(new YikimHesapEkrani());
        this.modernKartlar[3][0].ikon = YikimMenuIcons.KULLANICI;
        this.modernKartlar[3][1].eylem = this.chipVanilla;
        this.modernKartlar[3][1].ikon = YikimMenuIcons.ARROW;
        this.modernKartlar[3][2].eylem = this.chipHud;
        this.modernKartlar[3][2].ikon = YikimMenuIcons.EYE;
        this.modernKartlar[3][3].eylem = () -> YikimPanel.open(class_310.method_1551(), YikimPanel.TAB_PERFORMANCE);
        this.modernKartlar[3][3].ikon = YikimMenuIcons.BOLT;

        this.modernKartlar[4][0].eylem = () -> YikimMainMenu.open(
            YikimAdapter.optionsScreen(screen, class_310.method_1551().field_1690));
        this.modernKartlar[4][0].ikon = YikimMenuIcons.GEAR;
        this.modernKartlar[4][1].eylem = this.chipBackdrop;
        this.modernKartlar[4][1].ikon = YikimMenuIcons.IMAGE;
        this.modernKartlar[4][2].eylem = this.chipHud;
        this.modernKartlar[4][2].ikon = YikimMenuIcons.EYE;
        this.modernKartlar[4][3].eylem = () -> YikimPanel.open(class_310.method_1551(), YikimPanel.TAB_LOOK);
        this.modernKartlar[4][3].ikon = YikimMenuIcons.BOLT;
        this.modernKartlar[4][4].eylem = this.chipVanilla;
        this.modernKartlar[4][4].ikon = YikimMenuIcons.ARROW;

        this.modernCikis = () -> class_310.method_1551().method_1592();
        this.modernPanel = () -> YikimPanel.open(class_310.method_1551(), YikimPanel.TAB_PERFORMANCE);
        this.modernGorunum = () -> YikimPanel.open(class_310.method_1551(), YikimPanel.TAB_LOOK);
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
        // GÃœNCELLEME SONRASI Ä°LK AÃ‡ILIÅ: arayÃ¼z temasÄ±nÄ± Ã¶n izlemeli olarak sor
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
     * MODERN ANA MENÃœ (v1.35.0) â€” bu sÃ¼rÃ¼mden itibaren varsayÄ±lan dÃ¼zen.
     *
     * GÃ¼venlik aÄŸÄ±: modern Ã§izim beklenmedik bir istisna atarsa oyun kilitlenmez;
     * eski (klasik) dÃ¼zen bir kez Ã§izilir ve gÃ¼nlÃ¼ÄŸe yazÄ±lÄ±r.
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

    /** ESKÄ° DÃœZEN â€” modern Ã§izim patlarsa kullanÄ±lan yedek yol. */
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
            // v1.29.0: saÄŸ Ã¼stteki "SEN" bilgi paneli KALDIRILDI â€” yerine
            // dÃ¶nen 3B karakter + deri/pelerin/elitra seÃ§icisi geldi.
            int altSinir = screenHeight - footerHeight - margin - this.modDockYukseklik();
            this.drawKarakterPaneli(graphics, font, this.cardX, this.cardY, this.cardWidth, altSinir, mouseX, mouseY);
        }
        // v1.15.0: diÄŸer modlarin tuslari ARTIK yan panelin icinde degil â€”
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
ONECLIENT ANA SAYFA — çizim yardımcıları (sade düzen)
       ============================================================

       Tipografi yalnızca ÜÇ kademe: gövde 1.0 (Minecraft'in kendi yazısı),
       kelime işareti 1.5, başlık 2.4. Aralaranki ölçekler kaldırıldı —
       "font uyumsuzluğu" tam olarak buydu.

       Turuncu YALNIZCA şu dört yerde: seçili bağlantının altındaki çizgi,
       birincil düğme, kartların hover kenarlığı, Alev temasındaki küçük kor.
       Kart arka planları nötr koyu; görsel alanda kor gradyan YOK (ekranı
       kırmızımsı yapıyordu).

       Metinler BÜYÜK HARF Türkçe glif (Ğ/Ş/Ü/Ö/Ç/İ) içermiyor — o glifler
       piksel fontta bozuk çıkıp taşmaya yol açıyordu. Her yazı ölçülen
       genişliğe göre kırpılıyor (clip).
       ============================================================ */

    /** OneClient hareket eğrisi: 200 ms, Ease::Out + Cubic (tek geçiş, karmaşa yok). */
    private static float ocEase(float p) {
        float t = Math.max(0.0f, Math.min(1.0f, p));
        return 1.0f - (1.0f - t) * (1.0f - t) * (1.0f - t);
    }

    /** Yazıyı verilen ölçekle çiz (ölçü lenmiş genişlik döner). */
    private static int mdYazi(class_332 g, class_327 font, String text, int x, int y,
                              float olcek, int renk, boolean golge) {
        YikimAdapter.push(g, x, y, olcek);
        YikimAdapter.text(g, font, text, 0, 0, renk, golge);
        YikimAdapter.pop(g);
        return (int)((float)font.method_1727(text) * olcek);
    }

    /** Ölçeğe göre genişlik. */
    private static int mdGen(class_327 font, String text, float olcek) {
        return (int)((float)font.method_1727(text) * olcek);
    }

    private void drawModernGovde(class_332 graphics, class_327 font, class_310 client,
                                 int screenWidth, int screenHeight, int mouseX, int mouseY) {
        this.refresh(client, font, 220);
        long now = System.currentTimeMillis();
        float s = Math.max(0.70f, Math.min(1.35f, (float)screenHeight / 540.0f));
        Olcek o = new Olcek();
        o.s = s;
        o.navH = Math.max(16, Math.round(20.0f * s));
        o.pad = Math.max(10, Math.round(14.0f * s));
        o.navPad = Math.max(5, Math.round(7.0f * s));
        o.navGap = Math.max(8, Math.round(12.0f * s));
        o.ikonBtn = Math.max(14, Math.round(16.0f * s));
        o.ikon = Math.max(8, Math.round(10.0f * s));
        o.butonH = Math.max(18, Math.round(20.0f * s));
        o.butonPad = Math.max(8, Math.round(10.0f * s));
        o.hayaletBtn = o.ikonBtn;
        o.seritH = Math.max(64, Math.round(96.0f * s));
        o.kartAralik = Math.max(6, Math.round(8.0f * s));
        o.markaOlcek = 1.5f;
        o.baslikOlcek = Math.max(1.8f, Math.min(2.6f, 2.4f * s));
        o.altOlcek = 1.0f;
        o.kartBaslikOlcek = 1.5f;

        // ---- vinyet: hafif (önceki sürüm ekranı kırmızımsı yapıyordu)
        YikimDraw.horizontalGradient(graphics, 0, 0, (int)((float)screenWidth * 0.55f), screenHeight,
            YikimTheme.alpha(MD_PAGE, 34), 0x00070505, 6);
        YikimDraw.horizontalGradient(graphics, (int)((float)screenWidth * 0.45f), 0, screenWidth, screenHeight,
            0x00070505, YikimTheme.alpha(MD_PAGE, 110), 6);
        YikimDraw.verticalGradient(graphics, 0, 0, screenWidth, (int)((float)screenHeight * 0.40f),
            YikimTheme.alpha(MD_PAGE, 40), 0x00070505, 4);

        int seritTop = screenHeight - o.pad - o.seritH;
        int heroUst = o.navH + o.pad;
        int heroAlt = seritTop - 4;
        int heroOrta = (heroUst + Math.max(heroUst, heroAlt)) / 2;

        // ---- lobi sahnesi: karakter sağda (yalnızca menü açıkken)
        if (screenWidth >= 660 && heroAlt - heroUst > 110) {
            int boy = Math.min(heroAlt - heroUst - 6, (int)((float)screenHeight * 0.50f));
            if (boy >= 80) {
                float p = ocEase((float)(now - this.openedAt) / 200.0f);
                int ayak = heroAlt + 2 + (int)((1.0f - p) * 16.0f);
                YikimKarakter.draw(graphics, (int)((float)screenWidth * 0.76f), ayak - boy, boy,
                    YikimTheme.backdrop);
                this.addHit((int)((float)screenWidth * 0.76f) - boy / 3, ayak - boy,
                    boy * 2 / 3, boy, this.surukleBaslat);
            }
        }

        this.cizNavbar(graphics, font, client, screenWidth, o, mouseX, mouseY);
        this.cizBaslik(graphics, font, client, screenWidth, o, heroOrta, mouseX, mouseY);
        this.cizSerit(graphics, font, client, screenWidth, o, seritTop, mouseX, mouseY);
        if (now < this.hintUntil && !this.hint.isEmpty()) {
            // ipucu yalnızca gerektiğinde: şeridin üstünde, tek satır
            YikimAdapter.text(graphics, font, YikimDraw.clip(font, this.hint, screenWidth - o.pad * 2),
                o.pad, Math.max(heroAlt, seritTop - 10), MD_TEXT2, false);
        }
    }

    /** Üst şerit: kelime işareti + bağlantılar + sağda hesap/çıkış. */
    private void cizNavbar(class_332 graphics, class_327 font, class_310 client, int screenWidth,
                           Olcek o, int mouseX, int mouseY) {
        int h = o.navH;
        float p = ocEase((float)(System.currentTimeMillis() - this.openedAt) / 200.0f);
        int slide = (int)((1.0f - p) * (float)h);
        YikimDraw.verticalGradient(graphics, 0, 0, screenWidth, h + 4, 0x550B0705, 0x000B0705, 4);

        int orta = slide + (h - o.ikonBtn) / 2;
        boolean kelime = screenWidth >= 620;
        int sol = o.pad;
        if (kelime) {
            // küçük kor kare + YIKIM (kelime işareti 1.5)
            YikimDraw.roundedFill(graphics, sol, orta + 3, sol + 5, orta + o.ikonBtn - 3,
                YikimTheme.accent);
            int tw = mdYazi(graphics, font, "YIKIM", sol + 9, orta, o.markaOlcek, MD_TEXT, false);
            sol += 9 + tw + o.navGap;
        }

        int linkTop = slide + (h - o.ikonBtn) / 2;
        int gap = o.navGap;
        int toplam = -gap;
        for (String ad : MD_SEKME) {
            toplam += font.method_1727(ad) + o.navPad * 2 + gap;
        }
        int x = (screenWidth - toplam) / 2;
        int solSinir = kelime ? sol + 2 : o.pad;
        int sagBlok = o.ikonBtn * 2 + Math.max(4, Math.round(4.0f * o.s)) + 2;
        if (x < solSinir) {
            x = solSinir;
        }
        int sagSinir = screenWidth - o.pad - sagBlok - 4;
        if (x + toplam > sagSinir) {
            x = Math.max(solSinir, sagSinir - toplam);
        }
        for (int i = 0; i < MD_SEKME.length; ++i) {
            int tw = font.method_1727(MD_SEKME[i]) + o.navPad * 2;
            boolean aktif = i == YikimMainMenu.sekme;
            boolean uzerinde = YikimDraw.inside(mouseX, mouseY, x, linkTop, tw, h);
            int renk = aktif ? MD_TEXT : (uzerinde ? MD_TEXT : MD_TEXT2);
            YikimAdapter.textCentered(graphics, font, MD_SEKME[i], x + tw / 2, linkTop + (h - 8) / 2 + 1,
                renk, false);
            if (aktif) {
                // seçili bağlantı: 2 px kor çizgi (Alev temasında gerçek kor)
                if (YikimTema.alev()) {
                    YikimDraw.alevCizgi(graphics, x + o.navPad, linkTop + h - 1, tw - o.navPad * 2);
                } else {
                    YikimDraw.horizontalGradient(graphics, x + o.navPad, linkTop + h - 2,
                        x + tw - o.navPad, linkTop + h, YikimTheme.accent, YikimTheme.accent2, 4);
                }
            } else if (uzerinde) {
                YikimDraw.roundedFill(graphics, x, linkTop, x + tw, linkTop + h, MD_HAYALET);
            }
            this.addHit(x, linkTop, tw, h, this.modernSekmeSec[i]);
            x += tw + gap;
        }

        // sağ blok: hesap + çıkış (düz ikon düğmeleri, fazlası yok)
        int rX = screenWidth - o.pad - o.ikonBtn;
        boolean hHover = YikimDraw.inside(mouseX, mouseY, screenWidth - o.pad - o.ikonBtn * 2
            - Math.max(4, Math.round(4.0f * o.s)), orta, o.ikonBtn, o.ikonBtn);
        int hX = rX - Math.max(4, Math.round(4.0f * o.s)) - o.ikonBtn;
        YikimDraw.roundedFill(graphics, hX, orta, hX + o.ikonBtn, orta + o.ikonBtn,
            hHover ? MD_HAYALET_UST : MD_HAYALET);
        YikimDraw.outline(graphics, hX, orta, o.ikonBtn, o.ikonBtn, MD_BORDER);
        YikimMenuIcons.draw(graphics, YikimMenuIcons.KULLANICI, hX + 3, orta + 3, o.ikonBtn - 6,
            hHover ? MD_TEXT : MD_TEXT2);
        this.addHit(hX, orta, o.ikonBtn, o.ikonBtn, this.modernSekmeSec[3]);

        boolean gHover = YikimDraw.inside(mouseX, mouseY, rX, orta, o.ikonBtn, o.ikonBtn);
        YikimDraw.roundedFill(graphics, rX, orta, rX + o.ikonBtn, orta + o.ikonBtn,
            gHover ? MD_HAYALET_UST : MD_HAYALET);
        YikimDraw.outline(graphics, rX, orta, o.ikonBtn, o.ikonBtn, MD_BORDER);
        YikimMenuIcons.draw(graphics, YikimMenuIcons.POWER, rX + 3, orta + 3, o.ikonBtn - 6,
            gHover ? 0xFFFF9A7A : MD_TEXT2);
        this.addHit(rX, orta, o.ikonBtn, o.ikonBtn, this.modernCikis);
    }

    /** Başlık bloğu: başlık 2.4 + alt başlık 1.0 + birincil/hayalet düğme. */
    private void cizBaslik(class_332 graphics, class_327 font, class_310 client, int screenWidth,
                           Olcek o, int orta, int mouseX, int mouseY) {
        float p = ocEase((float)(System.currentTimeMillis() - this.openedAt) / 200.0f);
        int slide = (int)((1.0f - p) * Math.round(16.0f * o.s));
        int x = o.pad + slide;
        int maxW = (int)((float)screenWidth * 0.55f);
        int baslikH = (int)(9.0f * o.baslikOlcek);
        int altH = 10;
        int blok = baslikH + 4 + altH + Math.max(6, Math.round(8.0f * o.s)) + o.butonH;
        int y = orta - blok / 2;
        if (y < o.navH + 4) {
            y = o.navH + 4;
        }

        // başlık (2.4) + altında kor çizgi
        int bw = mdYazi(graphics, font, YikimDraw.clip(font, this.baslikAdi(), maxW), x, y,
            o.baslikOlcek, MD_TEXT, false);
        int cizgiY = y + baslikH + 1;
        YikimDraw.horizontalGradient(graphics, x, cizgiY, x + Math.min(bw, maxW), cizgiY + 2,
            YikimTheme.accent, YikimTheme.accent2, Math.max(3, Math.min(bw, maxW) / 4 + 1));
        // alt başlık (1.0)
        mdYazi(graphics, font, YikimDraw.clip(font, this.altBaslik(), maxW), x,
            cizgiY + 5, o.altOlcek, MD_TEXT2, false);

        int y3 = cizgiY + 5 + altH + Math.max(4, Math.round(6.0f * o.s));
        // birincil düğme (gövde yazısı, büyük harf yok)
        String etiket = MD_BUTON[YikimMainMenu.sekme];
        int tw = mdGen(font, etiket, 1.0f);
        int bW = tw + o.butonPad * 2;
        int bH = o.butonH;
        boolean hover = YikimDraw.inside(mouseX, mouseY, x, y3, bW, bH);
        int marka = YikimTheme.accent;
        YikimDraw.roundedFill(graphics, x, y3, x + bW, y3 + bH,
            hover ? YikimDraw.blend(marka, 0xFF000000, 0.13f) : marka);
        YikimDraw.outline(graphics, x, y3, bW, bH,
            hover ? 0x55FFFFFF : YikimTheme.alpha(YikimTheme.accent2, 90));
        YikimAdapter.textCentered(graphics, font, etiket, x + bW / 2, y3 + (bH - 8) / 2 + 1,
            0xFFFFFFFF, false);
        this.addHit(x, y3, bW, bH, this.modernEylemler[YikimMainMenu.sekme]);

        // hayalet ayar düğmesi
        int gX = x + bW + Math.max(6, Math.round(6.0f * o.s));
        boolean gh = YikimDraw.inside(mouseX, mouseY, gX, y3 + (bH - o.hayaletBtn) / 2,
            o.hayaletBtn, o.hayaletBtn);
        int gY = y3 + (bH - o.hayaletBtn) / 2;
        if (gh) {
            YikimDraw.roundedFill(graphics, gX, gY, gX + o.hayaletBtn, gY + o.hayaletBtn, MD_HAYALET_UST);
        }
        YikimDraw.outline(graphics, gX, gY, o.hayaletBtn, o.hayaletBtn,
            gh ? MD_BORDER_GUC : MD_BORDER);
        YikimMenuIcons.draw(graphics, YikimMenuIcons.GEAR,
            gX + (o.hayaletBtn - o.ikon) / 2, gY + (o.hayaletBtn - o.ikon) / 2, o.ikon,
            gh ? MD_TEXT : MD_TEXT2);
        this.addHit(gX, gY, o.hayaletBtn, o.hayaletBtn, this.modernGorunum);
    }

    /** Alt şerit: nötr kartlar + "Tümü" kutucuğu (başlık 1.5, durum 1.0). */
    private void cizSerit(class_332 graphics, class_327 font, class_310 client, int screenWidth,
                          Olcek o, int top, int mouseX, int mouseY) {
        int h = o.seritH;
        long now = System.currentTimeMillis();
        float p = ocEase((float)(now - this.openedAt) / 200.0f);
        int rise = (int)((1.0f - p) * Math.round(12.0f * o.s));
        Kart[] liste = this.modernKartlar[YikimMainMenu.sekme];
        int n = Math.max(1, Math.min(liste.length, this.modernKartSayi[YikimMainMenu.sekme]));
        int alan = screenWidth - o.pad * 2;
        int daha = Math.max(44, Math.round(58.0f * o.s));
        int goster = n;
        while (goster > 1 && (alan - daha - o.kartAralik * goster) / goster < Math.round(96.0f * o.s)) {
            --goster;
        }
        int kartW = Math.max(56, (alan - daha - o.kartAralik * goster) / goster);
        for (int i = 0; i < goster; ++i) {
            this.cizKart(graphics, font, client, o, liste[i], o.pad + i * (kartW + o.kartAralik),
                top + rise, kartW, h, mouseX, mouseY);
        }
        int dx = o.pad + goster * (kartW + o.kartAralik);
        int dy = top + rise;
        boolean dh = YikimDraw.inside(mouseX, mouseY, dx, dy, daha, h);
        YikimDraw.roundedFill(graphics, dx, dy, dx + daha, dy + h, dh ? MD_ELEV : MD_COMP);
        YikimDraw.outline(graphics, dx, dy, daha, h, dh ? MD_BORDER_GUC : MD_BORDER);
        int di = Math.max(10, Math.round(14.0f * o.s));
        YikimMenuIcons.draw(graphics, YikimMenuIcons.BARS,
            dx + (daha - di) / 2, dy + (h - di) / 2 - 5, di, dh ? MD_TEXT : MD_TEXT2);
        YikimAdapter.textCentered(graphics, font, "Tümü", dx + daha / 2, dy + h / 2 + 6, MD_TEXT2, false);
        this.addHit(dx, dy, daha, h, this.modernPanel);
    }

    /** Bir kart: nötr zemin, tepede hafif iç ışık, altta başlık + durum. */
    private void cizKart(class_332 graphics, class_327 font, class_310 client, Olcek o, Kart kart,
                         int x, int y, int w, int h, int mouseX, int mouseY) {
        boolean hover = YikimDraw.inside(mouseX, mouseY, x, y, w, h);
        YikimDraw.roundedFill(graphics, x, y, x + w, y + h, hover ? MD_ELEV : MD_CARD);
        // tepede 1 px iç ışık (derinlik hissi, gölge/blur yok)
        graphics.method_25294(x + 3, y + 2, x + w - 3, y + 3, 0x14FFFFFF);
        // görsel alanı: nötr koyu + ortada ikon
        int gorselH = (int)((float)h * 0.56f);
        YikimDraw.verticalGradient(graphics, x + 2, y + 3, x + w - 2, y + gorselH,
            0x0FFFFFFF, 0x00000000, 4);
        int ik = Math.max(10, Math.min(w / 4, Math.round(22.0f * o.s)));
        YikimMenuIcons.draw(graphics, kart.ikon, x + (w - ik) / 2, y + (gorselH - ik) / 2 + 2, ik,
            YikimTheme.alpha(MD_TEXT, 200));
        // alttan karartma: başlık okunsun
        YikimDraw.verticalGradient(graphics, x + 2, y + h - Math.max(14, (int)((float)h * 0.34f)),
            x + w - 2, y + h - 2, 0x00000000, YikimTheme.alpha(MD_PAGE, 200), 4);
        YikimDraw.outline(graphics, x, y, w, h, hover ? MD_BORDER_GUC : MD_BORDER);
        if (hover) {
            graphics.method_25294(x + 2, y + 2, x + w - 2, y + h - 2, 0x14FFFFFF);
        }
        int tx = x + Math.max(8, Math.round(10.0f * o.s));
        int ic = w - Math.max(8, Math.round(10.0f * o.s)) * 2;
        int by = y + h - Math.max(8, Math.round(9.0f * o.s)) - (int)(9.0f * o.kartBaslikOlcek);
        mdYazi(graphics, font, YikimDraw.clip(font, kart.etiket, ic), tx, by, o.kartBaslikOlcek,
            MD_TEXT, false);
        YikimAdapter.text(graphics, font, YikimDraw.clip(font, kart.durum, ic), tx,
            by + (int)(9.0f * o.kartBaslikOlcek) + 2, MD_TEXT2, false);
        this.addHit(x, y, w, h, kart.eylem == null ? this.modernPanel : kart.eylem);
    }

    /** Başlık: aktif "kluster" adı (OneClient = cluster adı). */
    private String baslikAdi() {
        return switch (YikimMainMenu.sekme) {
            case 0 -> this.cacheKurulum;
            case 1 -> "Kozmetik";
            case 2 -> "Modlar";
            case 3 -> this.cacheUser.isEmpty() ? "Hesap" : this.cacheUser;
            default -> "Ayarlar";
        };
    }

    /** Alt başlık: tek satır, gövde boyu. */
    private String altBaslik() {
        return switch (YikimMainMenu.sekme) {
            case 0 -> "Minecraft " + YikimVideo.gameVersion() + "  ·  " + this.cacheMods
                + "  ·  " + this.cacheBellek;
            case 1 -> this.cacheSkin + "  ·  Pelerin " + this.cachePelerin
                + "  ·  Elitra " + this.cacheElitra;
            case 2 -> this.cacheMods + "  ·  " + YikimConfig.get().catalogSource
                + "  ·  " + this.modButtons.size() + " tuş";
            case 3 -> this.cacheAccount + "  ·  " + this.cacheLauncher;
            default -> "Tema " + YikimTema.ad() + "  ·  HUD " + this.cacheHud
                + "  ·  " + YikimBackdrop.sessionLabel();
        };
    }

    /**
     * Kart metinleri — saniyede bir tazelenir; eylemler kurucuda kuruludur.
     * Etiketler BÜYÜK HARF Türkçe glif içermeyen kısa yazılar.
     */
    private void kartlariDoldur() {
        Kart[] oyna = this.modernKartlar[0];
        oyna[0].etiket = "Tek oyunculu";
        oyna[0].durum = "dünyalarını aç";
        oyna[1].etiket = "\u00c7ok oyunculu";
        oyna[1].durum = "sunucu listesi";
        oyna[2].etiket = "YIKIM menüsü";
        oyna[2].durum = "panel";
        oyna[3].etiket = "Kozmetik";
        oyna[3].durum = "deri · pelerin · elitra";
        oyna[4].etiket = "Modlar";
        oyna[4].durum = this.cacheMods;
        oyna[5].etiket = "Hesap";
        oyna[5].durum = this.cacheUser.isEmpty() ? "giriş yap" : this.cacheUser;
        this.modernKartSayi[0] = 6;

        Kart[] koz = this.modernKartlar[1];
        koz[0].etiket = "Deri";
        koz[0].durum = this.cacheSkin;
        koz[1].etiket = "Pelerin";
        koz[1].durum = this.cachePelerin;
        koz[2].etiket = "Elitra";
        koz[2].durum = this.cacheElitra;
        koz[3].etiket = "Mojang";
        koz[3].durum = this.cacheMojang;
        koz[4].etiket = "Kozmetik ekranı";
        koz[4].durum = "tüm seçenekler";
        this.modernKartSayi[1] = 5;

        Kart[] mod = this.modernKartlar[2];
        mod[0].etiket = "Mod kataloğu";
        mod[0].durum = "mod ara ve kur";
        mod[1].etiket = "Yüklenenler";
        mod[1].durum = this.cacheMods;
        int k = 2;
        for (int i = 0; i < this.modButtons.size() && k < 6; ++i) {
            String etiket = YikimModButtons.label(this.modButtons.get(i));
            if (etiket.isEmpty()) {
                continue;
            }
            mod[k].etiket = etiket;
            mod[k].durum = "mod tuşu";
            mod[k].ikon = YikimMenuIcons.BLOCKS;
            mod[k].eylem = this.modernModTiklama.get(i);
            ++k;
        }
        this.modernKartSayi[2] = k;

        Kart[] hes = this.modernKartlar[3];
        hes[0].etiket = "Hesap değiştir";
        hes[0].durum = this.cacheAccount;
        hes[1].etiket = "Vanilla menü";
        hes[1].durum = "minecraft";
        hes[2].etiket = "HUD";
        hes[2].durum = this.cacheHud;
        hes[3].etiket = "YIKIM menüsü";
        hes[3].durum = "panel";
        this.modernKartSayi[3] = 4;

        Kart[] aya = this.modernKartlar[4];
        aya[0].etiket = "Minecraft ayarları";
        aya[0].durum = "vanilla";
        aya[1].etiket = "Arka plan";
        aya[1].durum = YikimBackdrop.sessionLabel();
        aya[2].etiket = "HUD";
        aya[2].durum = this.cacheHud;
        aya[3].etiket = "Görünüm";
        aya[3].durum = YikimTema.ad();
        aya[4].etiket = "Vanilla menü";
        aya[4].durum = "geç";
        this.modernKartSayi[4] = 5;
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
        // Modern kart: canlÄ± bellek + kozmetik durumu (saniyede bir tazelenir,
        // bÃ¶ylece her karede Runtime sorgusu ve dosya eriÅŸimi olmaz).
        long enCokMb = Runtime.getRuntime().maxMemory() / 1048576L;
        long kullanilanMb = (Runtime.getRuntime().totalMemory() - Runtime.getRuntime().freeMemory()) / 1048576L;
        this.cacheBellek = kullanilanMb + " / " + enCokMb + " MB";
        this.cacheBellekOran = enCokMb > 0L ? Math.min(1.0f, (float)kullanilanMb / (float)enCokMb) : 0.0f;
        this.cacheSkin = YikimKozmetikSecim.deriSlim ? "\u0130nce (Alex)" : "Klasik (Steve)";
        this.cachePelerin = YikimKozmetikSecim.aktifId(YikimKozmetikSecim.PELERIN).isEmpty() ? "yok" : "tak\u0131l\u0131";
        this.cacheElitra = YikimKozmetikSecim.aktifId(YikimKozmetikSecim.ELITRA).isEmpty() ? "yok" : "tak\u0131l\u0131";
        this.cacheMojang = YikimKozmetikSecim.aktifId(YikimKozmetikSecim.MOJANG).isEmpty() ? "yok" : "tak\u0131l\u0131";
        this.cacheUser = client.method_1548() != null ? client.method_1548().method_1676() : "";
        // OneClient'daki "kluster" adının karşılığı: başlatıcının verdiği kurulum adı
        this.cacheKurulum = System.getProperty("yikimlient.presetName", "");
        if (this.cacheKurulum.isEmpty()) {
            this.cacheKurulum = "YIKIMLient";
        }
        // kart metinleri (saniyede bir)
        this.kartlariDoldur();
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
     * SADE TEMA ANA MENÃœ (v1.28.0).
     *
     * Yeni dÃ¼zen: solda tek sÃ¼tun sade tuÅŸlar, saÄŸda oyuncunun KARAKTERÄ°
     * (launcher'Ä±n oyun Ã¶ncesi yazdÄ±ÄŸÄ± deri), altta ince ÅŸerit. Pano/yan panel
     * yok â€” "karmaÅŸÄ±k" geri bildiriminin hedefi tam olarak buydu.
     */
    private void drawSade(class_332 graphics, class_327 font, class_310 client,
                          int screenWidth, int screenHeight, int mouseX, int mouseY, long started) {
        // GÃœVENLÄ°K AÄI: yeni tema Ã§izimi beklenmedik bir ÅŸey yÃ¼zÃ¼nden patlarsa
        // oyun kilitlenmesin; tema klasik'e dÃ¶ner ve menÃ¼ normal Ã§izilir.
        try {
            this.drawSadeGovde(graphics, font, client, screenWidth, screenHeight, mouseX, mouseY, started);
        }
        catch (Throwable sorun) {
            YikimConfig cfg = YikimConfig.get();
            cfg.uiTema = YikimTema.KLASIK;
            cfg.save();
            YikimLog.info("sade tema cizilemedi, klasik temaya donuldu: " + sorun);
            YikimMetrics.notify("Sade tema Ã§izilemedi â€” Klasik temaya dÃ¶nÃ¼ldÃ¼");
        }
    }

    private void drawSadeGovde(class_332 graphics, class_327 font, class_310 client,
                               int screenWidth, int screenHeight, int mouseX, int mouseY, long started) {
        YikimMetrics.frame(3);
        this.hitCount = 0;
        int margin = screenWidth < 640 ? 16 : 34;
        // sakin Ã¶rtÃ¼: arka plan gÃ¶rÃ¼nÃ¼r ama sÃ¼ssÃ¼z
        graphics.method_25294(0, 0, screenWidth, screenHeight, 0x77000000);
        float wordScale = screenHeight >= 320 ? 2.0f : 1.6f;
        int logoY = margin;
        YikimMainMenu.bigText(graphics, font, "YIKIM", margin, logoY, -723722, wordScale);
        int wordWidth = (int)((float)font.method_1727("YIKIM") * wordScale);
        int altCizgi = logoY + (int)(8.0f * wordScale) + 4;
        YikimDraw.horizontalGradient(graphics, margin, altCizgi, margin + wordWidth, altCizgi + 3,
            YikimTheme.accent, YikimTheme.accent2, 6);
        YikimAdapter.text(graphics, font, "CLIENT  â€¢  v" + YikimClient.MOD_VERSION, margin + 1, altCizgi + 8,
            YikimTheme.TEXT_MUTED, true);

        // ---- tuÅŸ sÃ¼tunu ----
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

        // ---- karakter + kozmetik seÃ§ici (saÄŸ sÃ¼tun) ----
        int panelG = Math.min(320, Math.max(200, screenWidth / 3));
        int panelX = Math.max(margin + sutun + 24, screenWidth - margin - panelG);
        this.drawKarakterPaneli(graphics, font, panelX, tepe, panelG, screenHeight - 66, mouseX, mouseY);

        // ---- alt: kÃ¼Ã§Ã¼k anahtarlar + ÅŸerit ----
        int anahtarY = screenHeight - 46;
        this.drawChips(graphics, font, anahtarY, sutun, mouseX, mouseY);
        graphics.method_25294(0, screenHeight - 20, screenWidth, screenHeight - 19,
            YikimTheme.alpha(YikimTheme.accent, 60));
        YikimAdapter.text(graphics, font, this.cacheFooterLeft, margin, screenHeight - 14, YikimTheme.TEXT_MUTED, false);
        String sag = "SaÄŸ Shift  â€¢  YIKIM menÃ¼sÃ¼  â€¢  Tema: Sade";
        if (screenWidth - margin - font.method_1727(sag) > margin + sutun + 8) {
            YikimAdapter.text(graphics, font, sag, screenWidth - margin - font.method_1727(sag),
                screenHeight - 14, YikimTheme.TEXT_MUTED, false);
        }
        YikimUiMetrics.menuEnd(started);
    }

    /** SaÄŸ alt mod bloÄŸunun kapladÄ±ÄŸÄ± yÃ¼kseklik (karakter paneli Ã¼stÃ¼ne binmesin). */
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
     * SAÄ SÃœTUN (v1.31.0) â€” her iki temada da aynÄ±: karakter (kendiliÄŸinden
     * dÃ¶nmez, fareyle sÃ¼rÃ¼kleyerek dÃ¶ndÃ¼rÃ¼lÃ¼r), altÄ±nda hesap adÄ± ve
     * "Ã–zelleÅŸtirme" dÃ¼ÄŸmesi. Deri/pelerin/elitra seÃ§imi ayrÄ± ekranda
     * yapÄ±lÄ±r; bÃ¶ylece ana menÃ¼de doku ve kart kalabalÄ±ÄŸÄ± yok.
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
        String isim = this.cacheUser.isEmpty() ? "â€”" : this.cacheUser;
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
        YikimDraw.button(graphics, font, dugmeX, dugmeY, dugmeG, dugmeYukseklik, "Ã–ZELLEÅTÄ°RME", true, uzerinde);
        // karakter alanÄ± Ã–NCE yazÄ±lÄ±r: dÃ¼ÄŸme Ã¼stte kalsÄ±n
        this.addHit(x, ust, genislik, Math.max(24, boy), () -> this.surukleme = true);
        this.addHit(dugmeX, dugmeY, dugmeG, dugmeYukseklik, () -> YikimMainMenu.open(new YikimKozmetikEkrani()));
    }

    /** SÃ¼rÃ¼kleme sÄ±rasÄ±nda karakteri dÃ¶ndÃ¼r (v1.31.0). */
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

    /** TuÅŸlar sÄ±ÄŸsÄ±n diye satÄ±r yÃ¼ksekliÄŸi (en az 20 px). */
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
        // MOD TUÅLARI saÄŸ alta taÅŸÄ±ndÄ± (drawModDock) â€” panelde yer aÃ§Ä±lmÄ±yor.
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
     * SAÄ ALT MOD BLOÄU (v1.15.0).
     *
     * DiÄŸer modlarÄ±n ana menÃ¼ye mixin ile eklediÄŸi tuÅŸlar (Flashback Essentials
     * vb.) daha Ã¶nce YIKIM yan panelinin iÃ§inde dÃ¼z satÄ±rlar hÃ¢linde duruyordu;
     * artÄ±k ekranÄ±n saÄŸ altÄ±nda, kendi piksel bloklarÄ±nda: koyu zemin, turuncu
     * kÃ¶ÅŸe Ã§izgisi, modun GERÃ‡EK logosu (launcher'Ä±n indirdiÄŸi PNG) ve etiket.
     * TÄ±klama davranÄ±ÅŸÄ± aynÄ±: modun gerÃ§ek onPress handler'Ä± Ã§alÄ±ÅŸÄ±r.
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
        // SÄ±ÄŸmayanlarÄ± kÄ±rp (kÃ¼Ã§Ã¼k pencerede menÃ¼yÃ¼ kaplamasÄ±n)
        int maxRows = Math.max(1, (bottom - 40) / (rowH + gap));
        int shown = Math.min(count, maxRows);
        int dockW = Math.min(250, Math.max(150, screenWidth / 3));
        int x = screenWidth - margin - dockW;
        // Sol sÃ¼tunla Ã§akÄ±ÅŸmasÄ±n
        if (x <= this.columnX + this.columnWidth + 12) {
            return;
        }
        int toplam = shown * (rowH + gap) - gap;
        int y = bottom - toplam;
        // blok zemini + Ã§erÃ§eve (piksel gÃ¶rÃ¼nÃ¼m: 2px kÃ¶ÅŸe aksanlarÄ±)
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
     * NEDEN VAR: 26.x'te tÄ±klama koordinatlarÄ± cizimdeki koordinatlarla aynÄ±
     * olmuyor (Ã¶lcek farkÄ±). Tiklama hangi setin "isabet ettigini" gormek icin
     * bu yuzden once deniyoruz â€” bosa duserse diger set denenir.
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

