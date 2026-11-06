package com.yikimlient.client;

import net.minecraft.class_2561;
import net.minecraft.class_310;
import net.minecraft.class_327;
import net.minecraft.class_332;
import net.minecraft.class_437;
import net.minecraft.class_442;

/**
 * ARAYÜZ TEMASI SEÇİMİ (v1.28.0).
 *
 * Güncellemeden sonraki İLK açılışta kendiliğinden açılır: iki tema yan yana,
 * gerçek düzenlerinin küçük ön izlemeleriyle. Seçim yikimlient.cfg'ye yazılır
 * (`arayuz.tema`) ve bir daha sorulmaz; panel → Görünüm sekmesinden her zaman
 * değiştirilebilir.
 *
 *   klasik : mevcut pano — sol tuş sütunu + sağ bilgi paneli + alt şerit
 *   sade   : yeni tema — karakter + tek sütun, süssüz
 */
public final class YikimTemaEkrani extends class_437 {
    private static final String[] SECENEKLER = new String[]{"klasik", "sade"};
    private static final String[] BASLIKLAR = new String[]{"Klasik", "Sade"};
    private static final String[] ETIKETLER = new String[]{"şu anki düzen", "yeni tema"};
    private static final String[][] SATIRLAR = new String[][]{
        {"Sol tuş sütunu + sağ bilgi paneli", "Alt şerit: FPS, sürüm, ipuçları", "Mod tuşları sağ altta"},
        {"Karakter önde, tek sütun tuş", "Süssüz, sakin arka plan", "Büyük katalog logoları"}
    };
    private static boolean aciliyor;
    private int[] kartX = new int[2];
    private int kartY;
    private int kartG;
    private int kartH;

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
        return false;
    }

    @Override
    public void method_25394(class_332 graphics, int mouseX, int mouseY, float delta) {
        class_327 font = this.field_22793;
        int sw = this.field_22789;
        int sh = this.field_22790;
        graphics.method_25294(0, 0, sw, sh, 0xFA08080B);
        YikimDraw.roundedFill(graphics, 0, 0, sw, 3, YikimTheme.accent);

        String secili = YikimConfig.get().uiTema;
        YikimAdapter.textCentered(graphics, font, "ARAYÜZ TEMASI", sw / 2, 22, YikimTheme.TEXT, true);
        YikimAdapter.textCentered(graphics, font,
            "Yeni sürümde iki düzen var — istediğini seç, sonra Görünüm sekmesinden değiştirebilirsin.",
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

        String hint = "Tıkla → tema değişir ve kaydedilir. Esc: şu anki temada kal.";
        YikimAdapter.textCentered(graphics, font, hint, sw / 2, this.kartY + this.kartH + 16, YikimTheme.TEXT_MUTED, false);
    }

    /** İki düzenin küçük canlı ön izlemesi (aynı renk/ikon dili, farklı iskelet). */
    private void onizleme(class_332 graphics, class_327 font, int x, int y, int w, int h, boolean sade) {
        YikimDraw.roundedFill(graphics, x, y, x + w, y + h, 0xFF0B0B0E);
        YikimDraw.outline(graphics, x, y, w, h, 0x22FFFFFF);
        // pencere içi tekrar ölçek: 640×360 varsayımıyla çiz
        float olcek = Math.min(w / 320.0f, h / 180.0f);
        int icX = x + (w - (int)(320 * olcek)) / 2;
        int icY = y + (h - (int)(180 * olcek)) / 2;
        YikimAdapter.push(graphics, icX, icY, olcek);
        graphics.method_25294(0, 0, 320, 180, 0xFF0D0D11);
        YikimAdapter.text(graphics, font, "YIKIM", 12, 12, YikimTheme.TEXT, true);
        YikimAdapter.text(graphics, font, "v" + YikimClient.MOD_VERSION, 12, 24, YikimTheme.TEXT_MUTED, false);
        if (sade) {
            // v1.33.0 — 3B model kendi kutusuna çizilir (ertelenen GUI görevi),
            // bu yüzden ekran koordinatına çevrilir.
            YikimKarakter.draw(graphics, icX + Math.round(236.0f * olcek), icY + Math.round(26.0f * olcek),
                Math.max(28, Math.round(108.0f * olcek)), YikimTheme.backdrop);
            String[] tuşlar = new String[]{"Tek Oyunculu", "Çok Oyunculu", "YIKIM Menüsü", "Modlar", "Ayarlar"};
            for (int i = 0; i < tuşlar.length; i++) {
                int ry = 52 + i * 20;
                YikimDraw.roundedFill(graphics, 12, ry, 158, ry + 17, i == 0 ? YikimTheme.alpha(YikimTheme.accent, 210) : 0x33000000);
                YikimMenuIcons.draw(graphics, i + 1, 18, ry + 4, 9, i == 0 ? 0xFFFFFFFF : YikimTheme.accent);
                YikimAdapter.text(graphics, font, tuşlar[i], 32, ry + 5, i == 0 ? 0xFFFFFFFF : YikimTheme.TEXT, true);
            }
            graphics.method_25294(0, 168, 320, 169, YikimTheme.alpha(YikimTheme.accent, 90));
            YikimAdapter.text(graphics, font, "Sağ Shift  •  YIKIM menüsü", 12, 172, YikimTheme.TEXT_MUTED, false);
        } else {
            String[] tuşlar = new String[]{"Tek Oyunculu", "Çok Oyunculu", "YIKIM Menüsü", "Modlar", "Ayarlar", "Çıkış"};
            for (int i = 0; i < tuşlar.length; i++) {
                int ry = 46 + i * 18;
                YikimDraw.roundedFill(graphics, 12, ry, 140, ry + 15, i == 0 ? YikimTheme.alpha(YikimTheme.accent, 220) : 0x44101016);
                YikimMenuIcons.draw(graphics, i + 1, 18, ry + 3, 9, i == 0 ? 0xFFFFFFFF : YikimTheme.accent);
                YikimAdapter.text(graphics, font, tuşlar[i], 32, ry + 4, i == 0 ? 0xFFFFFFFF : YikimTheme.TEXT, true);
            }
            YikimDraw.roundedFill(graphics, 168, 46, 306, 124, 0xFF101016);
            graphics.method_25294(168, 46, 170, 124, YikimTheme.accent);
            YikimAdapter.text(graphics, font, "SEN", 176, 52, YikimTheme.accent, false);
            YikimAdapter.text(graphics, font, "Oyuncu", 176, 64, YikimTheme.TEXT, true);
            YikimAdapter.text(graphics, font, "Yüklü mod   32", 176, 84, YikimTheme.TEXT_DIM, false);
            YikimAdapter.text(graphics, font, "HUD         açık", 176, 95, YikimTheme.TEXT_DIM, false);
            YikimAdapter.text(graphics, font, "İPUCU", 176, 110, YikimTheme.accent, false);
            graphics.method_25294(0, 166, 320, 180, 0xFF08080A);
            YikimAdapter.text(graphics, font, "YIKIMLient  •  60 FPS", 12, 170, YikimTheme.TEXT_MUTED, false);
        }
        YikimAdapter.pop(graphics);
    }

    private static boolean icinde(double mx, double my, int x, int y, int w, int h) {
        return mx >= x && mx < x + w && my >= y && my < y + h;
    }

    @Override
    public boolean method_25402(net.minecraft.class_11909 tik, boolean cift) {
        if (tik.comp_4800().comp_4797() != 0) {
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

    @Override
    public boolean method_25404(net.minecraft.class_11908 tus) {
        if (tus.comp_4795() == 256) {
            // Esc: şu anki temada kal ama bir daha sorma
            YikimConfig cfg = YikimConfig.get();
            cfg.temaSurum = YikimClient.TEMA_SURUM;
            cfg.save();
            kapat();
            return true;
        }
        return super.method_25404(tus);
    }

    private static void kapat() {
        YikimTemaEkrani.aciliyor = false;
        class_310.method_1551().method_1507(new class_442());
    }
}
