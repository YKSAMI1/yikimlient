package com.yikimlient.client;

import java.util.ArrayList;
import java.util.List;
import net.minecraft.class_11908;
import net.minecraft.class_11909;
import net.minecraft.class_2561;
import net.minecraft.class_310;
import net.minecraft.class_327;
import net.minecraft.class_332;
import net.minecraft.class_437;

/**
 * ÖZELLEŞTİRME EKRANI (v1.31.0) — launcher'ın deri kataloğu düzeninde.
 *
 * Sol: büyük karakter önizlemesi (kendiliğinden DÖNMEZ; fareyle sürükleyerek
 * döndürürsün), altında hesap adı ve o an seçili olan üç parça.
 *
 * Sağ: dört sekme ve kart ızgarası.
 *   DERİ      — kendi deri kitaplığın + "YOK"
 *   PELERİN   — YIKIM'de atölyede yaptığın pelerinler + "YOK"
 *   MOJANG    — hesabının Mojang pelerinleri (launcher indirir) + "YOK"
 *   ELİTRA    — kanat tasarımların + "YOK"
 *
 * Karta tıklamak seçimi `.yikim/kozmetik-istek.txt` üzerinden launcher'a
 * yazar; launcher ~1 sn içinde uygular ve katalog yenilenir. Hiçbir yerde
 * doku basılmaz (gri kutu sorunu bu yüzden 1.30.0'da kaldırıldı).
 */
public final class YikimKozmetikEkrani extends class_437 {
    private static final int UST = 26;
    private static final int KENAR = 22;
    private static final int KART_G = 74;
    private static final int KART_Y = 92;
    private static final int KART_ARA = 8;
    private static final int SEKME_Y = 20;

    private final List<Hit> hits = new ArrayList<Hit>();
    private String ipucu = "";
    private long ipucuAt;
    private boolean surukleme;
    private int sonFareX;

    public YikimKozmetikEkrani() {
        super(class_2561.method_43470("YIKIM Özelleştirme"));
    }

    private static final class Hit {
        final int x;
        final int y;
        final int g;
        final int h;
        final Runnable eylem;

        Hit(int x, int y, int g, int h, Runnable eylem) {
            this.x = x;
            this.y = y;
            this.g = g;
            this.h = h;
            this.eylem = eylem;
        }
    }

    private void hit(int x, int y, int g, int h, Runnable eylem) {
        this.hits.add(new Hit(x, y, g, h, eylem));
    }

    private void bildir(String metin) {
        this.ipucu = metin;
        this.ipucuAt = System.currentTimeMillis();
    }

    @Override
    protected void method_25426() {
        // yerleşim çizim sırasında hesaplanıyor; karakter pozu sekmeye uyar
        this.sekmeSec(YikimKozmetikSecim.sekme());
    }

    @Override
    public void method_25394(class_332 graphics, int mouseX, int mouseY, float delta) {
        this.hits.clear();
        YikimKozmetikSecim.tazele();
        class_327 font = this.field_22793;
        int genislik = this.field_22789;
        int yukseklik = this.field_22790;

        // arka plan
        YikimDraw.verticalGradient(graphics, 0, 0, genislik, yukseklik,
            YikimTheme.backdrop, YikimDraw.blend(YikimTheme.backdrop, -16777216, 0.45f), 24);
        graphics.method_25294(0, 0, genislik, 3, YikimTheme.accent);

        // başlık
        YikimAdapter.push(graphics, KENAR, 14, 1.35f);
        YikimAdapter.text(graphics, font, "ÖZELLEŞTİRME", 0, 0, YikimTheme.TEXT, true);
        YikimAdapter.pop(graphics);

        // v1.32.0: üst sağda HESAPLAR — hesaplar menüsünü bu ekranın ÜSTÜNE açar.
        int kapatG = 84;
        int kapatX = genislik - KENAR - kapatG;
        int hesapG = 92;
        int hesapX = kapatX - 8 - hesapG;
        boolean hesapUzerinde = YikimDraw.inside(mouseX, mouseY, hesapX, 14, hesapG, 22);
        YikimDraw.button(graphics, font, hesapX, 14, hesapG, 22, "HESAPLAR", false, hesapUzerinde);
        this.hit(hesapX, 14, hesapG, 22, this::hesaplariAc);
        boolean kapatUzerinde = YikimDraw.inside(mouseX, mouseY, kapatX, 14, kapatG, 22);
        YikimDraw.button(graphics, font, kapatX, 14, kapatG, 22, "KAPAT", false, kapatUzerinde);
        this.hit(kapatX, 14, kapatG, 22, this::method_25419);

        // ---- sol: karakter önizlemesi ----
        int onizlemeG = Math.max(180, Math.min(300, genislik / 4));
        int onizlemeX = KENAR;
        int onizlemeY = UST + 26;
        int onizlemeH = Math.max(220, yukseklik - onizlemeY - 74);
        YikimDraw.roundedFill(graphics, onizlemeX, onizlemeY, onizlemeX + onizlemeG, onizlemeY + onizlemeH,
            YikimTheme.PANEL);
        YikimDraw.outline(graphics, onizlemeX, onizlemeY, onizlemeG, onizlemeH, YikimTheme.BORDER);
        // v1.33.0 — karakter PANELİN İÇİNE sığar: eskiden boy panelden büyük
        // çıkıp baş üstten kesiliyor, model panelin dışına taşıyordu.
        int alanH = Math.max(120, onizlemeH - 62);
        int boy = Math.min(alanH, (int)((float)onizlemeG * 1.45f));
        int cx = onizlemeX + onizlemeG / 2;
        int tepe = onizlemeY + Math.max(4, (alanH - boy) / 2);
        YikimKarakter.draw(graphics, cx, tepe, boy, YikimTheme.backdrop);
        String isim = "";
        try {
            class_310 istemci = class_310.method_1551();
            if (istemci != null && istemci.method_1548() != null) {
                isim = istemci.method_1548().method_1676();
            }
        }
        catch (Throwable ignored) {
            isim = "";
        }
        if (isim == null || isim.isEmpty()) {
            isim = "—";
        }
        YikimAdapter.text(graphics, font, isim, cx - font.method_1727(isim) / 2,
            onizlemeY + onizlemeH - 46, YikimTheme.TEXT, true);
        String surukle = "sürükleyerek döndür";
        YikimAdapter.text(graphics, font, surukle, cx - font.method_1727(surukle) / 2,
            onizlemeY + onizlemeH - 32, YikimTheme.TEXT_MUTED, false);
        this.hit(onizlemeX, onizlemeY, onizlemeG, onizlemeH - 24, () -> { });

        // ---- sağ: sekmeler + kartlar ----
        int sagX = onizlemeX + onizlemeG + 18;
        int sagG = genislik - KENAR - sagX;
        int sekmeG = Math.max(74, (sagG - 3 * 8) / 4);
        for (int i = 0; i < YikimKozmetikSecim.SEKME_SAYISI; ++i) {
            int x = sagX + i * (sekmeG + 8);
            boolean secili = YikimKozmetikSecim.sekme() == i;
            boolean uzerinde = YikimDraw.inside(mouseX, mouseY, x, SEKME_Y + 20, sekmeG, 24);
            YikimDraw.tab(graphics, font, x, SEKME_Y + 20, sekmeG, 24, YikimKozmetikSecim.BASLIK[i], secili, uzerinde);
            final int indeks = i;
            this.hit(x, SEKME_Y + 20, sekmeG, 24, () -> this.sekmeSec(indeks));
        }
        int sekme = YikimKozmetikSecim.sekme();

        List<YikimKozmetikSecim.Oge> liste = YikimKozmetikSecim.liste(sekme);
        List<YikimKozmetikSecim.Oge> tumu = new ArrayList<YikimKozmetikSecim.Oge>(liste.size() + 1);
        tumu.add(null); // "YOK" kartı
        tumu.addAll(liste);

        int ızgaraY = SEKME_Y + 68;
        // kartlar çok küçülmesin: en fazla 8 sütun, ızgara ortalanır
        int sutun = Math.min(8, Math.max(2, (sagG + KART_ARA) / (KART_G + KART_ARA)));
        int izgaraG = sutun * (KART_G + KART_ARA) - KART_ARA;
        int ızgaraX = sagX + (sagG - izgaraG) / 2;
        int satir = Math.max(1, (yukseklik - ızgaraY - 42 + KART_ARA) / (KART_Y + KART_ARA));
        int sayfaBoyu = sutun * satir;
        int sayfa = Math.min(YikimKozmetikSecim.sayfa(sekme), Math.max(0, (tumu.size() - 1) / sayfaBoyu));
        YikimKozmetikSecim.sayfaAyarla(sekme, sayfa);
        String seciliId = YikimKozmetikSecim.gorunen(sekme);

        int ilk = sayfa * sayfaBoyu;
        for (int i = 0; i < sayfaBoyu && ilk + i < tumu.size(); ++i) {
            YikimKozmetikSecim.Oge oge = tumu.get(ilk + i);
            int kx = ızgaraX + (i % sutun) * (KART_G + KART_ARA);
            int ky = ızgaraY + (i / sutun) * (KART_Y + KART_ARA);
            boolean seciliKart = oge == null ? seciliId.isEmpty() : oge.id.equals(seciliId);
            boolean uzerinde = YikimDraw.inside(mouseX, mouseY, kx, ky, KART_G, KART_Y);
            this.kart(graphics, font, sekme, oge, kx, ky, seciliKart, uzerinde);
            final YikimKozmetikSecim.Oge secilen = oge;
            final int s = sekme;
            this.hit(kx, ky, KART_G, KART_Y, () -> {
                YikimKozmetikSecim.sec(s, secilen == null ? "" : secilen.id);
                this.bildir(secilen == null ? "Kapatıldı" : "Seçildi: " + secilen.ad);
            });
        }

        // sayfalama
        if (tumu.size() > sayfaBoyu) {
            int toplam = (tumu.size() + sayfaBoyu - 1) / sayfaBoyu;
            int py = yukseklik - 30;
            int oncekiX = sagX;
            int sonrakiX = sagX + 92;
            boolean oncekiVar = sayfa > 0;
            boolean sonrakiVar = (sayfa + 1) * sayfaBoyu < tumu.size();
            boolean oncekiUzerinde = YikimDraw.inside(mouseX, mouseY, oncekiX, py, 40, 20);
            boolean sonrakiUzerinde = YikimDraw.inside(mouseX, mouseY, sonrakiX, py, 40, 20);
            YikimDraw.button(graphics, font, oncekiX, py, 40, 20, "<", false, oncekiUzerinde && oncekiVar);
            YikimDraw.button(graphics, font, sonrakiX, py, 40, 20, ">", false, sonrakiUzerinde && sonrakiVar);
            String sayfaMetni = (sayfa + 1) + " / " + toplam;
            YikimAdapter.text(graphics, font, sayfaMetni, oncekiX + 50, py + 6, YikimTheme.TEXT_MUTED, false);
            this.hit(oncekiX, py, 40, 20, () -> YikimKozmetikSecim.sayfaAyarla(sekme, Math.max(0, sayfa - 1)));
            this.hit(sonrakiX, py, 40, 20,
                () -> YikimKozmetikSecim.sayfaAyarla(sekme, sayfa + 1 < toplam ? sayfa + 1 : sayfa));
        }

        // durum ipucu
        String mesaj = System.currentTimeMillis() - this.ipucuAt < 2600L ? this.ipucu : "";
        int mesajRenk = YikimTheme.accent;
        if (mesaj.isEmpty() && sekme == YikimKozmetikSecim.DERI
            && !YikimKozmetikSecim.deriDurum.isEmpty()) {
            // v1.33.9 — seçim hesaba yazıldı mı? (sunucularda/diğer oyuncularda
            // görünen skin Mojang'daki; yazılamadıysa burada sebebi yazar)
            mesaj = YikimKozmetikSecim.deriDurum;
            mesajRenk = YikimKozmetikSecim.deriDurumHata ? YikimTheme.BAD : YikimTheme.OK;
        }
        if (!mesaj.isEmpty()) {
            String kirp = YikimDraw.clip(font, mesaj, genislik - KENAR * 2 - 8);
            YikimAdapter.text(graphics, font, kirp, genislik - KENAR - font.method_1727(kirp),
                yukseklik - 20, mesajRenk, false);
        }
    }

    /**
     * Sekme seçimi + karakter pozu: pelerin/Mojang/elitra sekmelerinde karakter
     * ARKASINI döner (pelerini/kanadı görürsün), elitra sekmesinde sırtta
     * pelerin değil KANAT çizilir.
     */
    private void sekmeSec(int indeks) {
        YikimKozmetikSecim.sekmeAyarla(indeks);
        YikimKarakter.elitraModu(indeks == YikimKozmetikSecim.ELITRA);
        if (indeks == YikimKozmetikSecim.DERI) {
            YikimKarakter.oneDon();
        } else {
            YikimKarakter.arkayaDon();
        }
    }

    /** Hesaplar menüsünü bu ekranın ÜSTÜNE aç (geri dönünce buraya gelir). */
    private void hesaplariAc() {
        try {
            class_310 istemci = class_310.method_1551();
            if (istemci != null) {
                istemci.method_1507(new YikimHesapEkrani());
            }
        }
        catch (Throwable ignored) {
            // hesap ekranı açılamazsa burada kal
        }
    }

    /** Tek kart: önizleme + ad (+ seçili kenarı). */
    private void kart(class_332 graphics, class_327 font, int sekme, YikimKozmetikSecim.Oge oge,
                      int x, int y, boolean secili, boolean uzerinde) {
        int zemin = secili ? YikimDraw.blend(YikimTheme.PANEL, YikimTheme.accent, 0.18f)
            : (uzerinde ? YikimDraw.blend(YikimTheme.PANEL, -1, 0.08f) : YikimTheme.PANEL);
        YikimDraw.roundedFill(graphics, x, y, x + KART_G, y + KART_Y, zemin);
        if (secili) {
            YikimDraw.outline(graphics, x, y, KART_G, KART_Y, YikimTheme.accent);
        } else if (uzerinde) {
            YikimDraw.outline(graphics, x, y, KART_G, KART_Y, YikimTheme.BORDER);
        }
        int onx = x + 5;
        int ony = y + 5;
        int ong = KART_G - 10;
        int onh = KART_Y - 24;
        YikimDraw.roundedFill(graphics, onx, ony, onx + ong, ony + onh, 0x33000000);
        if (oge == null) {
            YikimAdapter.text(graphics, font, "YOK", onx + ong / 2 - font.method_1727("YOK") / 2,
                ony + onh / 2 - 4, YikimTheme.TEXT_DIM, false);
        } else if (sekme == YikimKozmetikSecim.DERI) {
            // v1.33.2 — kartta yalnız kafa değil TAM VÜCUT (launcher gibi)
            YikimOnizleme.deri(graphics, oge.dosya, onx + 2, ony + 2, ong - 4, onh - 4);
            if (oge.slim) {
                YikimAdapter.text(graphics, font, "slim", x + 4, y + KART_Y - 20, YikimTheme.TEXT_MUTED, false);
            }
        } else if (sekme == YikimKozmetikSecim.ELITRA) {
            YikimOnizleme.elitra(graphics, oge.dosya, onx + 2, ony + 2, ong - 4, onh - 4);
        } else {
            YikimOnizleme.pelerin(graphics, oge.dosya, onx + 2, ony + 2, ong - 4, onh - 4);
        }
        String ad = oge == null ? "Kullanma" : oge.ad;
        YikimAdapter.text(graphics, font, YikimDraw.clip(font, ad, KART_G - 6),
            x + 4, y + KART_Y - 12, secili ? YikimTheme.TEXT : YikimTheme.TEXT_DIM, false);
    }

    @Override
    public boolean method_25402(class_11909 mouse, boolean doubleClick) {
        double mx = mouse.comp_4798();
        double my = mouse.comp_4799();
        for (Hit h : this.hits) {
            if (YikimDraw.inside(mx, my, h.x, h.y, h.g, h.h)) {
                if (mouse.comp_4797() == 0) {
                    this.surukleme = true;
                    this.sonFareX = (int)mx;
                }
                h.eylem.run();
                return true;
            }
        }
        return super.method_25402(mouse, doubleClick);
    }

    @Override
    public boolean method_25403(class_11909 mouse, double dragX, double dragY) {
        if (this.surukleme) {
            int mx = (int)mouse.comp_4798();
            int fark = mx - this.sonFareX;
            if (fark != 0) {
                YikimKarakter.dondur(fark / 6);
                this.sonFareX = mx;
            }
            return true;
        }
        return super.method_25403(mouse, dragX, dragY);
    }

    @Override
    public boolean method_25406(class_11909 mouse) {
        this.surukleme = false;
        return super.method_25406(mouse);
    }

    @Override
    public boolean method_25404(class_11908 key) {
        int kod = key.comp_4795();
        if (kod == 256) {
            this.method_25419();
            return true;
        }
        if (kod == 258) {
            this.sekmeSec((YikimKozmetikSecim.sekme() + 1) % YikimKozmetikSecim.SEKME_SAYISI);
            return true;
        }
        if (kod == 262 || kod == 263) {
            int tur = YikimKozmetikSecim.sekme();
            int arti = kod == 262 ? 1 : -1;
            YikimKozmetikSecim.sayfaAyarla(tur, Math.max(0, YikimKozmetikSecim.sayfa(tur) + arti));
            return true;
        }
        return super.method_25404(key);
    }

    @Override
    public boolean method_25401(double mouseX, double mouseY, double horizontal, double vertical) {
        int tur = YikimKozmetikSecim.sekme();
        YikimKozmetikSecim.sayfaAyarla(tur, Math.max(0, YikimKozmetikSecim.sayfa(tur) + (vertical > 0.0 ? 1 : -1)));
        return true;
    }

    @Override
    public void method_25419() {
        // ana menüye dönerken karakter önden ve pelerinli hâline döner
        YikimKarakter.elitraModu(false);
        YikimKarakter.oneDon();
        class_310 istemci = class_310.method_1551();
        if (istemci != null) {
            istemci.method_1507(YikimAdapter.titleScreen());
        }
    }

    @Override
    public boolean method_25421() {
        return false;
    }
}
