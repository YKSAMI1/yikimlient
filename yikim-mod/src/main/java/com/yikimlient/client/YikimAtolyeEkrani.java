package com.yikimlient.client;

import net.minecraft.class_11909;
import net.minecraft.class_2561;
import net.minecraft.class_310;
import net.minecraft.class_327;
import net.minecraft.class_332;
import net.minecraft.class_437;

/**
 * PİKSEL ATÖLYESİ EKRANI (v1.11.0) — O tuşundan / panelinden açılır.
 *
 * 8x8 ızgara + fırça (sürükleyerek boya) + renk paleti + silgi + Kaydet +
 * Sıfırla. Kaydet: kalıcı `.yikim/rozet.png` + presence sunucusuna yükleme →
 * aynı sunucudaki herkes görebilir. Vanilla Screen; özel render pipeline YOK.
 *
 * 1.21.2+ fare API'si kayıt tabanlıdır: method_25402(class_11909, boolean) vb.
 */
public final class YikimAtolyeEkrani extends class_437 {
    private static final int HUCRE = 18; // 8x8 ızgara (v1.12.2 — 16x16 TAB'da çakışıyordu)
    private static final int[] PALET = {
        0xFFFFFFFF, 0xFF212121, 0xFFFF7A18, 0xFFFFB020, 0xFFFFE066,
        0xFF9BE564, 0xFF34C759, 0xFF35D0C5, 0xFF2E9BFF, 0xFF3A50C8,
        0xFF9B59F0, 0xFFFF5FA2, 0xFFFF3B3B, 0xFF8B5A2B
    };

    private int seciliRenk = 0xFFFF7A18;
    private boolean silgi;
    private boolean boyaBasili;
    private boolean ozelAcik;          // özel renk paneli (v1.12.2)
    private int ozelR = 255, ozelG = 128, ozelB = 40;
    private int izgaraX;
    private int izgaraY;
    private int kaydetX;
    private int kaydetY;
    private int sifirlaX;
    private int sifirlaY;
    private int izinX;
    private int izinY;
    private boolean admin;

    public YikimAtolyeEkrani() {
        super(class_2561.method_43470("YIKIM Piksel At\u00f6lyesi"));
    }

    @Override
    public boolean method_25422() {
        return false; // oyun durmasın
    }

    @Override
    public void method_25394(class_332 graphics, int mouseX, int mouseY, float delta) {
        class_327 font = this.field_22793;
        // düzen HER karede hesaplanır — init zamanlamasına bağımlı değil
        // (1.21.2+'da init'te genişlik henüz 0 olabiliyordu → butonlar üst üste
        // biniyordu; v1.11.1 düzeltmesi)
        this.izgaraX = (this.field_22789 - YikimAtolye.BOY * HUCRE) / 2;
        this.izgaraY = 44;
        this.kaydetX = this.izgaraX;
        this.sifirlaX = this.izgaraX + 92;
        // perde
        graphics.method_25294(0, 0, this.field_22789, this.field_22790, 0xA0101014);
        YikimAdapter.text(graphics, font, "Piksel At\u00f6lyesi — rozetin nametag'te herkeste g\u00f6r\u00fcn\u00fcr",
            this.izgaraX, 16, YikimTheme.TEXT, true);

        // ızgara
        for (int y = 0; y < YikimAtolye.BOY; y++) {
            for (int x = 0; x < YikimAtolye.BOY; x++) {
                int px = this.izgaraX + x * HUCRE;
                int py = this.izgaraY + y * HUCRE;
                int renk = YikimAtolye.hucre(x, y);
                int dolu = (renk & 0xFF000000) != 0 ? renk : 0xFF17171C;
                graphics.method_25294(px, py, px + HUCRE, py + HUCRE, dolu);
                graphics.method_25294(px, py, px + HUCRE, py + 1, 0xFF3A3A44);
                graphics.method_25294(px, py + HUCRE - 1, px + HUCRE, py + HUCRE, 0xFF3A3A44);
                graphics.method_25294(px, py, px + 1, py + HUCRE, 0xFF3A3A44);
                graphics.method_25294(px + HUCRE - 1, py, px + HUCRE, py + HUCRE, 0xFF3A3A44);
                if (mouseX >= px && mouseX < px + HUCRE && mouseY >= py && mouseY < py + HUCRE) {
                    graphics.method_25294(px, py, px + HUCRE, py + 1, 0xFFFFFFFF);
                    graphics.method_25294(px, py + HUCRE - 1, px + HUCRE, py + HUCRE, 0xFFFFFFFF);
                    graphics.method_25294(px, py, px + 1, py + HUCRE, 0xFFFFFFFF);
                    graphics.method_25294(px + HUCRE - 1, py, px + HUCRE, py + HUCRE, 0xFFFFFFFF);
                }
            }
        }

        // palet
        int paletY = this.izgaraY + YikimAtolye.BOY * HUCRE + 12;
        YikimAdapter.text(graphics, font, this.silgi ? "Silgi" : "Renk:", this.izgaraX, paletY - 10,
            this.silgi ? YikimTheme.WARN : YikimTheme.TEXT_DIM, false);
        for (int i = 0; i < PALET.length; i++) {
            int px = this.izgaraX + i * 20;
            graphics.method_25294(px, paletY, px + 18, paletY + 18, PALET[i]);
            kareCerceve(graphics, px, paletY, 18, (!this.silgi && PALET[i] == this.seciliRenk) ? 0xFFFFFFFF : 0xFF3A3A44);
        }
        // silgi
        int silgiX = this.izgaraX + PALET.length * 20 + 8;
        graphics.method_25294(silgiX, paletY, silgiX + 18, paletY + 18, this.silgi ? 0xFF4A2A2A : 0xFF17171C);
        kareCerceve(graphics, silgiX, paletY, 18, this.silgi ? 0xFFFFFFFF : 0xFF3A3A44);
        YikimAdapter.textCentered(graphics, font, "S", silgiX + 9, paletY + 5, -15724524, false);
        // ÖZEL renk swatch'ı (v1.12.2) — R/G/B şeritli kare, tıkla → panel aç/kapa
        int ozelX = silgiX + 26;
        graphics.method_25294(ozelX, paletY, ozelX + 18, paletY + 6, 0xFFFF3B3B);
        graphics.method_25294(ozelX, paletY + 6, ozelX + 18, paletY + 12, 0xFF34C759);
        graphics.method_25294(ozelX, paletY + 12, ozelX + 18, paletY + 18, 0xFF2E9BFF);
        kareCerceve(graphics, ozelX, paletY, 18, this.ozelAcik ? 0xFFFFFFFF : 0xFF3A3A44);
        this.admin = YikimAtolye.yetkiDuzeyi() >= 2;

        // ÖZEL RENK PANELİ — ızgaranın sağındaki boşlukta (v1.12.2)
        if (this.ozelAcik) {
            int panelX = this.izgaraX + YikimAtolye.BOY * HUCRE + 16;
            int barGenislik = 96;
            int[] kanallar = {this.ozelR, this.ozelG, this.ozelB};
            int[] kutu = {0xFFFF3B3B, 0xFF34C759, 0xFF2E9BFF};
            String[] adlar = {"R", "G", "B"};
            for (int k = 0; k < 3; k++) {
                int by = 60 + k * 26;
                YikimAdapter.text(graphics, font, adlar[k], panelX, by - 2, kutu[k], false);
                int bx = panelX + 14;
                graphics.method_25294(bx, by, bx + barGenislik, by + 8, 0xFF17171C);
                int dolu = (int) (barGenislik * (kanallar[k] / 255.0));
                graphics.method_25294(bx, by, bx + dolu, by + 8, kutu[k]);
                graphics.method_25294(bx, by, bx + barGenislik, by + 1, 0xFF3A3A44);
                graphics.method_25294(bx, by + 7, bx + barGenislik, by + 8, 0xFF3A3A44);
                YikimAdapter.text(graphics, font, String.valueOf(kanallar[k]), bx + barGenislik + 6, by - 2, YikimTheme.TEXT_DIM, false);
            }
            // önizleme + uygulanmış seçim
            int onizleme = (0xFF << 24) | (this.ozelR << 16) | (this.ozelG << 8) | this.ozelB;
            graphics.method_25294(panelX, 140, panelX + 18, 158, onizleme);
            kareCerceve(graphics, panelX, 140, 18, this.seciliRenk == onizleme ? 0xFFFFFFFF : 0xFF3A3A44);
            YikimAdapter.text(graphics, font, "Seç", panelX + 24, 146, YikimTheme.TEXT, false);
        }

        // butonlar
        int butonY = paletY + 34;
        this.kaydetY = butonY;
        this.sifirlaY = butonY;
        butonCiz(graphics, font, this.kaydetX, butonY, 84, "Kaydet",
            icinde(mouseX, mouseY, this.kaydetX, butonY, 84, 20), YikimTheme.accent);
        butonCiz(graphics, font, this.sifirlaX, butonY, 84, "S\u0131f\u0131rla",
            icinde(mouseX, mouseY, this.sifirlaX, butonY, 84, 20), YikimTheme.WARN);
        if (this.admin) {
            this.izinX = this.sifirlaX + 92;
            this.izinY = butonY;
            butonCiz(graphics, font, this.izinX, butonY, 84, "İzin",
                icinde(mouseX, mouseY, this.izinX, butonY, 84, 20), 0xFF3AA0FF);
        }
        YikimAdapter.text(graphics, font, "\u00c7iz \u2192 Kaydet — kaydedince herkeste kal\u0131c\u0131 \u2022 Esc: kapat",
            this.izgaraX, butonY + 30, YikimTheme.TEXT_DIM, false);
    }

    private static void kareCerceve(class_332 graphics, int x, int y, int boy, int renk) {
        graphics.method_25294(x, y, x + boy, y + 1, renk);
        graphics.method_25294(x, y + boy - 1, x + boy, y + boy, renk);
        graphics.method_25294(x, y, x + 1, y + boy, renk);
        graphics.method_25294(x + boy - 1, y, x + boy, y + boy, renk);
    }

    private void butonCiz(class_332 graphics, class_327 font, int x, int y, int w, String etiket, boolean hover, int renk) {
        int dolu = hover ? YikimTheme.alpha(renk, 120) : 0x66101016;
        YikimDraw.roundedFill(graphics, x, y, x + w, y + 20, dolu);
        graphics.method_25294(x, y + 19, x + w, y + 20, YikimTheme.alpha(renk, 180));
        YikimAdapter.textCentered(graphics, font, etiket, x + w / 2, y + 6, -1, true);
    }

    private static boolean icinde(double mx, double my, int x, int y, int w, int h) {
        return mx >= x && mx < x + w && my >= y && my < y + h;
    }

    private boolean izgaraIci(double mx, double my) {
        return mx >= this.izgaraX && my >= this.izgaraY
            && mx < this.izgaraX + YikimAtolye.BOY * HUCRE
            && my < this.izgaraY + YikimAtolye.BOY * HUCRE;
    }

    private void boya(double mx, double my) {
        int x = (int) ((mx - this.izgaraX) / HUCRE);
        int y = (int) ((my - this.izgaraY) / HUCRE);
        YikimAtolye.boya(x, y, this.silgi ? 0 : this.seciliRenk);
    }

    @Override
    public boolean method_25402(class_11909 tik, boolean cift) {
        double mx = tik.comp_4798();
        double my = tik.comp_4799();
        int tus = tik.comp_4800().comp_4797();
        if (tus == 0) {
            if (izgaraIci(mx, my)) {
                this.boyaBasili = true;
                boya(mx, my);
                return true;
            }
            int paletY = this.izgaraY + YikimAtolye.BOY * HUCRE + 12;
            for (int i = 0; i < PALET.length; i++) {
                int px = this.izgaraX + i * 20;
                if (icinde(mx, my, px, paletY, 18, 18)) {
                    this.seciliRenk = PALET[i];
                    this.silgi = false;
                    return true;
                }
            }
            int silgiX = this.izgaraX + PALET.length * 20 + 8;
            if (icinde(mx, my, silgiX, paletY, 18, 18)) {
                this.silgi = true;
                return true;
            }
            // ÖZEL renk swatch'ı (silgiX + 26) — panel aç/kapa
            if (icinde(mx, my, silgiX + 26, paletY, 18, 18)) {
                this.ozelAcik = !this.ozelAcik;
                if (this.ozelAcik) {
                    this.silgi = false;
                    this.seciliRenk = (0xFF << 24) | (this.ozelR << 16) | (this.ozelG << 8) | this.ozelB;
                }
                return true;
            }
            // ÖZEL panel bar tıkları (ızgaranın sağı)
            if (this.ozelAcik) {
                int panelX = this.izgaraX + YikimAtolye.BOY * HUCRE + 16;
                int barGenislik = 96;
                if (icinde(mx, my, panelX, 140, 18, 18)) {
                    // önizlemeye tıkla → fırça rengi yap
                    this.seciliRenk = (0xFF << 24) | (this.ozelR << 16) | (this.ozelG << 8) | this.ozelB;
                    this.silgi = false;
                    return true;
                }
                if (mx >= panelX + 14 && mx < panelX + 14 + barGenislik) {
                    int deger = (int) Math.max(0, Math.min(255,
                        ((mx - (panelX + 14)) / (double) barGenislik) * 255.0));
                    if (my >= 58 && my < 70) {
                        this.ozelR = deger;
                    }
                    else if (my >= 84 && my < 96) {
                        this.ozelG = deger;
                    }
                    else if (my >= 110 && my < 122) {
                        this.ozelB = deger;
                    }
                    else {
                        return super.method_25402(tik, cift);
                    }
                    this.seciliRenk = (0xFF << 24) | (this.ozelR << 16) | (this.ozelG << 8) | this.ozelB;
                    this.silgi = false;
                    return true;
                }
            }
            if (this.admin && icinde(mx, my, this.izinX, this.izinY, 84, 20)) {
                class_310.method_1551().method_1507(new YikimIzinEkrani());
                return true;
            }
            if (icinde(mx, my, this.kaydetX, this.kaydetY, 84, 20)) {
                YikimAtolye.kaydet();
                YikimMetrics.notify("Rozet kaydedildi — herkeste g\u00f6r\u00fcnecek");
                // kaydet → ekranı kapat (oyuna dön), rozet anında glifte
                class_310.method_1551().method_1507(null);
                return true;
            }
            if (icinde(mx, my, this.sifirlaX, this.sifirlaY, 84, 20)) {
                YikimAtolye.sifirla();
                YikimMetrics.notify("Rozet s\u0131f\u0131rland\u0131");
                return true;
            }
        }
        return super.method_25402(tik, cift);
    }

    @Override
    public boolean method_25404(net.minecraft.class_11908 tus) {
        // Esc: daima oyuna dön (Kaydet'e basmadan çıkış artık ÇALIŞIYOR)
        if (tus.comp_4795() == 256) {
            class_310.method_1551().method_1507(null);
            return true;
        }
        return super.method_25404(tus);
    }

    @Override
    public boolean method_25403(class_11909 tik, double dx, double dy) {
        double mx = tik.comp_4798();
        double my = tik.comp_4799();
        int tus = tik.comp_4800().comp_4797();
        if (this.boyaBasili && tus == 0 && izgaraIci(mx, my)) {
            boya(mx, my);
            return true;
        }
        return super.method_25403(tik, dx, dy);
    }

    @Override
    public boolean method_25406(class_11909 tik) {
        this.boyaBasili = false;
        return super.method_25406(tik);
    }
}
