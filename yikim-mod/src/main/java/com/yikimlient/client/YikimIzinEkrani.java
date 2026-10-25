package com.yikimlient.client;

import net.minecraft.class_2561;
import net.minecraft.class_310;
import net.minecraft.class_327;
import net.minecraft.class_332;
import net.minecraft.class_437;
import net.minecraft.class_640;

import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;

/**
 * ÇİZİM İZİNLERİ EKRANI (v1.12.2) — admin buradan oyuncu seçer, seçilenler
 * Piksel Atölyesi'ni açıp kendi rozetini çizebilir.
 *
 * Liste = o an ONLINE oyuncular (TAB listesi) + sunucudaki mevcut izinliler
 * (offline olanlar da geri alınabilsin diye). Tıkla → ✓ işaretle/işareti kaldır;
 * "Kaydet" → izin listesi presence sunucusuna yazılır ve HERKESIN modu bir
 * kalp atışı içinde yeni listeyi çekerek atölye kapısını açar/kapatır.
 */
public final class YikimIzinEkrani extends class_437 {
    private final List<String> isimler = new ArrayList<>();
    private final Set<String> secili = new LinkedHashSet<>();
    private int listeX;
    private int listeY;
    private final int satirH = 18;
    private int kaydetX;
    private int kaydetY;
    private int gorunenSatir;

    public YikimIzinEkrani() {
        super(class_2561.method_43470("YIKIM Çizim İzinleri"));
        // sunucudaki mevcut izinliler (baştan seçili)
        secili.addAll(YikimPresence.izinler());
        // online oyuncular (TAB listesi: isimler GameProfile'dan)
        try {
            class_310 mc = class_310.method_1551();
            if (mc != null && mc.method_1562() != null) {
                for (class_640 girdi : mc.method_1562().method_2880()) {
                    if (girdi.method_2966() != null && girdi.method_2966().name() != null) {
                        String ad = girdi.method_2966().name();
                        if (!ad.isEmpty() && !isimler.contains(ad)) {
                            isimler.add(ad);
                        }
                    }
                }
            }
        }
        catch (Throwable ignored) {
            // tek oyunculu / bağlantı yok — sadece sunucu listesi gösterilir
        }
        // offline izinliler de listede kalsın (geri alma için)
        for (String ad : YikimPresence.izinler()) {
            if (!isimler.contains(ad)) {
                isimler.add(ad);
            }
        }
        isimler.sort(String.CASE_INSENSITIVE_ORDER);
    }

    @Override
    public boolean method_25422() {
        return false;
    }

    @Override
    public void method_25394(class_332 graphics, int mouseX, int mouseY, float delta) {
        class_327 font = this.field_22793;
        this.listeX = Math.max(30, (this.field_22789 - 220) / 2);
        this.listeY = 44;
        graphics.method_25294(0, 0, this.field_22789, this.field_22790, 0xA0101014);
        YikimAdapter.text(graphics, font, "Çizim İzinleri — tıkla: ver/al, Kaydet: herkese uygulanır",
            this.listeX, 18, YikimTheme.TEXT, true);

        this.gorunenSatir = Math.min(isimler.size(), 10);
        for (int i = 0; i < this.gorunenSatir; i++) {
            String ad = isimler.get(i);
            int y = this.listeY + i * satirH;
            boolean verildi = secili.contains(ad);
            boolean hover = mouseX >= listeX && mouseX < listeX + 220 && mouseY >= y && mouseY < y + satirH - 2;
            graphics.method_25294(listeX, y, listeX + 220, y + satirH - 2, hover ? 0x30FFFFFF : 0x20101418);
            // ✓ / boş kutu
            graphics.method_25294(listeX + 4, y + 3, listeX + 16, y + 15, verildi ? 0xFF34C759 : 0xFF17171C);
            kareCerceve(graphics, listeX + 4, y + 3, 12, verildi ? 0xFFFFFFFF : 0xFF3A3A44);
            if (verildi) {
                YikimAdapter.textCentered(graphics, font, "✓", listeX + 10, y + 4, -1, true);
            }
            YikimAdapter.text(graphics, font, ad, listeX + 24, y + 5, YikimTheme.TEXT, false);
        }
        if (isimler.isEmpty()) {
            YikimAdapter.text(graphics, font, "Kimse online değil — yine de isim listesi sunucudan gelir",
                listeX, listeY + 8, YikimTheme.TEXT_DIM, false);
        }

        this.kaydetX = listeX;
        this.kaydetY = listeY + 10 * satirH + 8;
        butonCiz(graphics, font, kaydetX, kaydetY, 100, "Kaydet",
            icinde(mouseX, mouseY, kaydetX, kaydetY, 100, 20), YikimTheme.accent);
        YikimAdapter.text(graphics, font, "İzin verilenler Piksel Atölyesi'ni açabilir \u2022 Esc: kapat",
            kaydetX + 110, kaydetY + 6, YikimTheme.TEXT_DIM, false);
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

    @Override
    public boolean method_25402(net.minecraft.class_11909 tik, boolean cift) {
        double mx = tik.comp_4798();
        double my = tik.comp_4799();
        int tus = tik.comp_4800().comp_4797();
        if (tus == 0) {
            // satır tıkları
            if (mx >= listeX && mx < listeX + 220) {
                for (int i = 0; i < this.gorunenSatir; i++) {
                    int y = listeY + i * satirH;
                    if (my >= y && my < y + satirH - 2) {
                        String ad = isimler.get(i);
                        if (!secili.remove(ad)) {
                            secili.add(ad);
                        }
                        return true;
                    }
                }
            }
            if (icinde(mx, my, kaydetX, kaydetY, 100, 20)) {
                YikimPresence.izinKaydet(new ArrayList<>(secili));
                YikimMetrics.notify("İzinler sunucuya yaz\u0131ld\u0131 (" + secili.size() + " ki\u015fi)");
                class_310.method_1551().method_1507(null);
                return true;
            }
        }
        return super.method_25402(tik, cift);
    }

    @Override
    public boolean method_25404(net.minecraft.class_11908 tus) {
        if (tus.comp_4795() == 256) {
            class_310.method_1551().method_1507(null);
            return true;
        }
        return super.method_25404(tus);
    }
}
