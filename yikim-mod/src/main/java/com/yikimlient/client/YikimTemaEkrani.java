package com.yikimlient.client;

import net.minecraft.class_2561;
import net.minecraft.class_310;
import net.minecraft.class_327;
import net.minecraft.class_332;
import net.minecraft.class_437;

/**
 * ARAYÜZ GÖRÜNÜMÜ SEÇİMİ — v1.28.0, v1.34.0'da güncellendi.
 *
 * Güncellemeden sonraki İLK açılışta kendiliğinden açılır: iki görünüm yan
 * yana, gerçek panelin küçük ön izlemeleriyle. Seçim yikimlient.cfg'ye yazılır
 * (`arayuz.tema`) ve bir daha sorulmaz; panel → Görünüm sekmesinden her zaman
 * değiştirilebilir.
 *
 *   klasik : bugüne kadarki pano düzeni
 *   alev   : AYNI düzen + seçili öğenin altında kor, açık anahtarlarda sıcak geçiş
 */
public final class YikimTemaEkrani extends class_437 {
    private static final String[] SECENEKLER = new String[]{"klasik", "alev"};
    private static final String[] BASLIKLAR = new String[]{"Klasik", "Alev"};
    private static final String[] ETIKETLER = new String[]{"şu anki düzen", "kor vurgusu"};
    private static final String[][] SATIRLAR = new String[][]{
        {"Sol tuş sütunu + sağ bilgi paneli", "Alt şerit: FPS, sürüm, ipuçları", "Seçimler düz vurgu renginde"},
        {"Aynı düzen, daha sıcak", "Seçili sekmenin altında küçük kor", "Açık anahtarlarda kor geçişi"}
    };
    private static boolean aciliyor;
    private int[] kartX = new int[2];
    private int kartY;
    private int kartG;
    private int kartH;
    private final long acilisZamani = System.currentTimeMillis();

    public YikimTemaEkrani() {
        super(class_2561.method_43470("YIKIM Arayüz Teması"));
        YikimTemaEkrani.aciliyor = true;
    }

    /** Seçim ekranı şu an açık mı? (ana menü çizimini durdurmak için) */
    public static boolean acik() {
        return YikimTemaEkrani.aciliyor;
    }

    /**
     * Güncelleme sonrası ilk açılışta çağrılır (ana menüden). Aynı karede
     * defalarca setScreen yapılmasın diye statik kilit.
     */
    public static void ilkAcilisKontrol() {
        YikimConfig cfg = YikimConfig.get();
        if (cfg.temaSurum >= YikimClient.TEMA_SURUM || YikimTemaEkrani.aciliyor) {
            return;
        }
        class_310.method_1551().method_1507(new YikimTemaEkrani());
    }

    @Override
    public boolean method_25422() {
        return true;
    }

    /**
     * Esc = ekrani kapat (1.21.x ve 26.x'te AYNI davranis).
     *
     * NEDEN BASTAN YAZMIYORUZ: 1.21.x'te Esc'in GLFW kodu 256'dir ama 26.x'te SDL
     * kullanildigi icin KeyEvent.key() baska bir deger dondurur. Elle "== 256"
     * karsilastirmasi 26.x'te HİÇ eşleşmez → kullanici ekranda siki kalirdi.
     * Vanilla Screen keyPressed ise her iki surumde de
     * "event.isEscape() && shouldCloseOnEsc() → onClose()" yolunu kullanir.
     * Bu yuzden sadece shouldCloseOnEsc=true yapip buraya düşüyoruz.
     */
    @Override
    public void method_25419() {
        // Esc: şu anki temada kal ama bir daha sorma
        YikimConfig cfg = YikimConfig.get();
        cfg.temaSurum = YikimClient.TEMA_SURUM;
        cfg.save();
        kapat();
    }

    @Override
    public void method_25394(class_332 graphics, int mouseX, int mouseY, float delta) {
        class_327 font = this.field_22793;
        int sw = this.field_22789;
        int sh = this.field_22790;
        graphics.method_25294(0, 0, sw, sh, 0xFA08080B);
        YikimDraw.roundedFill(graphics, 0, 0, sw, 3, YikimTheme.accent);

        String secili = YikimConfig.get().uiTema;
        YikimAdapter.textCentered(graphics, font, "ARAYÜZ GÖRÜNÜMÜ", sw / 2, 22, YikimTheme.TEXT, true);
        YikimAdapter.textCentered(graphics, font,
            "İki görünüm var — istediğini seç, sonra Görünüm sekmesinden değiştirebilirsin.",
            sw / 2, 38, YikimTheme.TEXT_DIM, false);

        int bosluk = 18;
        this.kartG = Math.max(210, Math.min(320, (sw - 3 * bosluk) / 2));
        this.kartH = Math.max(200, Math.min(330, sh - 150));
        int toplam = this.kartG * 2 + bosluk;
        int basX = (sw - toplam) / 2;
        this.kartY = 58;
        for (int i = 0; i < 2; i++) {
            this.kartX[i] = basX + i * (this.kartG + bosluk);
            boolean uzerinde = icinde(mouseX, mouseY, this.kartX[i], this.kartY, this.kartG, this.kartH);
            boolean bu = SECENEKLER[i].equals(secili);
            YikimDraw.roundedFill(graphics, this.kartX[i], this.kartY, this.kartX[i] + this.kartG, this.kartY + this.kartH,
                uzerinde ? 0xF2151520 : 0xF00F0F14);
            YikimDraw.outline(graphics, this.kartX[i], this.kartY, this.kartG, this.kartH,
                bu ? YikimTheme.accent : (uzerinde ? YikimTheme.alpha(YikimTheme.accent, 130) : 0x33FFFFFF));
            YikimAdapter.text(graphics, font, BASLIKLAR[i], this.kartX[i] + 12, this.kartY + 10,
                bu ? YikimTheme.accent : YikimTheme.TEXT, true);
            String etiket = bu ? "SEÇİLİ" : ETIKETLER[i];
            int etiketGenislik = font.method_1727(etiket) + 10;
            int etiketX = this.kartX[i] + this.kartG - etiketGenislik - 10;
            YikimDraw.roundedFill(graphics, etiketX, this.kartY + 9, etiketX + etiketGenislik, this.kartY + 20,
                YikimTheme.alpha(bu ? YikimTheme.accent : YikimTheme.TEXT_MUTED, 40));
            YikimAdapter.text(graphics, font, etiket, etiketX + 5, this.kartY + 11,
                bu ? YikimTheme.accent : YikimTheme.TEXT_MUTED, false);

            int onizlemeX = this.kartX[i] + 12;
            int onizlemeY = this.kartY + 30;
            int onizlemeG = this.kartG - 24;
            int onizlemeH = Math.max(90, this.kartH - 120);
            this.onizleme(graphics, font, onizlemeX, onizlemeY, onizlemeG, onizlemeH, i == 1);

            int satirY = onizlemeY + onizlemeH + 10;
            for (int s = 0; s < SATIRLAR[i].length && satirY + 9 < this.kartY + this.kartH - 6; s++) {
                graphics.method_25294(this.kartX[i] + 12, satirY + 4, this.kartX[i] + 15, satirY + 7, YikimTheme.accent);
                YikimAdapter.text(graphics, font, SATIRLAR[i][s], this.kartX[i] + 20, satirY,
                    YikimTheme.TEXT_DIM, false);
                satirY += 11;
            }
        }

        String hint = "Tıkla → görünüm değişir ve kaydedilir. Esc: şu anki görünümde kal.";
        YikimAdapter.textCentered(graphics, font, hint, sw / 2, this.kartY + this.kartH + 16, YikimTheme.TEXT_MUTED, false);
    }

    /**
     * İki görünümün küçük canlı ön izlemesi. İskelet ikisinde de AYNI; fark
     * yalnızca seçili sekmenin altındaki kor ve açık anahtarların sıcak geçişi.
     * 3B model çizilmez — ön izleme ekranı kare bütçesini yemesin.
     */
    private void onizleme(class_332 graphics, class_327 font, int x, int y, int w, int h, boolean alev) {
        YikimDraw.roundedFill(graphics, x, y, x + w, y + h, 0xFF0B0B0E);
        YikimDraw.outline(graphics, x, y, w, h, 0x22FFFFFF);
        float olcek = Math.min(w / 320.0f, h / 180.0f);
        int icX = x + (w - (int)(320 * olcek)) / 2;
        int icY = y + (h - (int)(180 * olcek)) / 2;
        YikimAdapter.push(graphics, icX, icY, olcek);
        graphics.method_25294(0, 0, 320, 180, 0xFF0D0D11);
        YikimAdapter.text(graphics, font, "YIKIM", 12, 10, YikimTheme.TEXT, true);
        YikimAdapter.text(graphics, font, "v" + YikimClient.MOD_VERSION, 12, 22, YikimTheme.TEXT_MUTED, false);

        // panel gövdesi
        YikimDraw.roundedFill(graphics, 8, 34, 312, 164, 0xFF121218);

        // üst sekmeler — gerçek panonun ilk dört sekmesi, "Görünüm" seçili
        String[] sekmeler = new String[]{"Performans", "Görünüm", "HUD", "Ekstra"};
        int tw = (312 - 16 - (sekmeler.length - 1) * 4) / sekmeler.length;
        int tx = 16;
        for (int i = 0; i < sekmeler.length; i++) {
            boolean aktif = i == 1;
            YikimDraw.roundedFill(graphics, tx, 40, tx + tw, 58, aktif ? YikimTheme.alpha(YikimTheme.accent, 46) : 0x22FFFFFF);
            YikimAdapter.textCentered(graphics, font, sekmeler[i], tx + tw / 2, 46,
                aktif ? YikimTheme.TEXT : YikimTheme.TEXT_MUTED, false);
            if (aktif) {
                if (alev) {
                    YikimDraw.alevCizgi(graphics, tx, 58, tw);
                } else {
                    graphics.method_25294(tx, 56, tx + tw, 58, YikimTheme.accent);
                }
            }
            tx += tw + 4;
        }

        // ayar satırları + anahtarlar
        String[] satirlar = new String[]{"HUD", "Bildirim", "Ana menü"};
        boolean[] acik = new boolean[]{true, true, false};
        for (int i = 0; i < satirlar.length; i++) {
            int ry = 68 + i * 22;
            YikimDraw.roundedFill(graphics, 16, ry, 304, ry + 18, 0x22FFFFFF);
            YikimAdapter.text(graphics, font, satirlar[i], 24, ry + 5, YikimTheme.TEXT_DIM, false);
            int sx = 274;
            int sy = ry + 4;
            if (acik[i]) {
                if (alev) {
                    YikimDraw.alevAnahtar(graphics, sx, sy, 22, 11, YikimTheme.accent2);
                } else {
                    YikimDraw.roundedFill(graphics, sx, sy, sx + 22, sy + 11, YikimTheme.accent);
                }
            } else {
                YikimDraw.roundedFill(graphics, sx, sy, sx + 22, sy + 11, 0xFF31313A);
            }
            int kx = acik[i] ? sx + 12 : sx + 2;
            YikimDraw.roundedFill(graphics, kx, sy + 2, kx + 8, sy + 9, YikimTheme.TEXT);
        }

        // arayüz segmenti — kartın kendi görünümü seçili
        YikimAdapter.text(graphics, font, "Arayüz", 16, 142, YikimTheme.TEXT_MUTED, false);
        String[] segmentler = new String[]{"Klasik", "Alev"};
        for (int i = 0; i < segmentler.length; i++) {
            int sx = 68 + i * 58;
            boolean secili = alev ? i == 1 : i == 0;
            YikimDraw.roundedFill(graphics, sx, 138, sx + 54, 154, secili ? YikimTheme.accent : 0x33111118);
            YikimAdapter.text(graphics, font, segmentler[i], sx + 11, 142,
                secili ? 0xFF151515 : YikimTheme.TEXT_DIM, false);
            if (secili && alev) {
                YikimDraw.alevCizgi(graphics, sx, 154, 54);
            }
        }

        // alt şerit
        graphics.method_25294(0, 166, 320, 167, YikimTheme.alpha(YikimTheme.accent, 70));
        YikimAdapter.text(graphics, font, "Sağ Shift  •  YIKIM menüsü", 12, 171, YikimTheme.TEXT_MUTED, false);
        YikimAdapter.pop(graphics);
    }

    private static boolean icinde(double mx, double my, int x, int y, int w, int h) {
        return mx >= x && mx < x + w && my >= y && my < y + h;
    }

    @Override
    public boolean method_25402(net.minecraft.class_11909 tik, boolean cift) {
        if (!YikimAdapter.solTik(tik.comp_4800().comp_4801())) {
            return super.method_25402(tik, cift);
        }
        double mx = tik.comp_4798();
        double my = tik.comp_4799();
        for (int i = 0; i < 2; i++) {
            if (icinde(mx, my, this.kartX[i], this.kartY, this.kartG, this.kartH)) {
                YikimTema.sec(SECENEKLER[i]);
                kapat();
                return true;
            }
        }
        return super.method_25402(tik, cift);
    }

    /**
     * GÜVENLİK KEMERİ: girdiler hiçbir sebeple işlenmezse bile 90 saniye
     * sonra ekran kendiliğinden kapanır. (Bir sürümde girdi yolu bozulursa
     * kullanıcı asla ekranda sıkışık kalmaz — tema değişmeden kapanır.)
     */
    @Override
    public void method_25393() {
        if (System.currentTimeMillis() - this.acilisZamani > 90000L) {
            kapat();
        }
    }

    private static void kapat() {
        YikimTemaEkrani.aciliyor = false;
        // YIKIM ana menüsüne DÖN (vanilla başlık ekranına değil — aksi halde
        // YIKIM menüsü tamamen kaybolur ve oyun vanilla görünümde kalırdı).
        class_310.method_1551().method_1507(YikimAdapter.titleScreen());
    }
}
