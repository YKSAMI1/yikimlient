// Rust `skins.rs` yanıtlarının UI tipleri (alan adları birebir aynı).

export interface SkinKayit {
  id: string;
  ad: string;
  dosya: string;
  slim: boolean;
  kaynak: string;
  tarih: number;
}

export interface Pelerin {
  id: string;
  ad: string;
  dosya: string | null;
  aktif: boolean;
}

export interface AktifSkin {
  dosya: string;
  slim: boolean;
  kaynak: string;
}

export interface Varsayilan {
  ad: string;
  dosya: string;
  slim: boolean;
}

export interface SkinHub {
  premium: boolean;
  cevrimdisi: boolean;
  aktif: AktifSkin | null;
  kitaplik: SkinKayit[];
  pelerinler: Pelerin[];
  pelerin_aktif: string | null;
  yedek_var: boolean;
  varsayilanlar: Varsayilan[];
  hata: string | null;
}
