//! .emotecraft İKİLİ (binary) ÇÖZÜCÜ.
//!
//! Emotecraft dosyaları iki biçimde gelir:
//!   1) ZIP arşivi (içinde emote.json)   → commands::cmd_import_emote_dosyasi zip dalı
//!   2) İKİLİ paket (bu modül)           → emotes.kosmx.dev / oyun içi kayıtlar
//!
//! İkili biçim (KosmX wiki + Palette/LegacyAnimationBinary kaynağı):
//!   int  format sürümü (8)
//!   u8   amaç kimliği (0x10 = FILE)
//!   u8   modül sayısı
//!   modül*: u8 kimlik · u8 sürüm · int boyut · bayt[boyut]
//!     0x00 = animasyon (int tick + LegacyAnimationBinary)
//!     0x11 = başlık (name, description, author [, folderpath, bages])
//!     0x12 = simge (png)
//!
//! Çıktı: Emotecraft JSON biçimi
//! ({name, author, description, emote:{...,palUzay:true,moves:[...]}}).
//!
//! Eksen uzayı: değerler PAL'ın (PlayerAnimationLibrary) ANİMASYON uzayında
//! bırakılır — `emote.palUzay = true` bunu bildirir:
//!   - dönüş değerleri radyandır; JSON derece bekler → ×180/π
//!   - konum değerleri kemiğin VARSAYILAN pivotuna göre DELTA'dır (px);
//!     +y YUKARIDIR (model uzayında y aşağı olduğu için mod `part.y = -y` uygular)
//!   - `body` kemiği tek bir kutuyu değil TÜM karakteri taşır/kaydırır;
//!     pivotu kalçadır: (0,12,0)
//! Arayüz (`sahne/emote.ts`) bu uzayı three.js sahnesine eşler.

use serde_json::{json, Map, Value};

// ---------------------------------------------------------------------------
// bayt okuyucu (big endian — Java ByteBuffer sırası)
// ---------------------------------------------------------------------------

struct Oku<'a> {
    d: &'a [u8],
    p: usize,
}

impl<'a> Oku<'a> {
    fn yeni(d: &'a [u8]) -> Self {
        Oku { d, p: 0 }
    }

    fn kalan(&self) -> usize {
        self.d.len().saturating_sub(self.p)
    }

    fn ihtiyac(&self, n: usize) -> Result<(), String> {
        if self.p + n > self.d.len() {
            Err("emote dosyası beklenenden kısa (bozuk/yarım indirme)".into())
        } else {
            Ok(())
        }
    }

    fn u8(&mut self) -> Result<u8, String> {
        self.ihtiyac(1)?;
        let v = self.d[self.p];
        self.p += 1;
        Ok(v)
    }

    fn i8(&mut self) -> Result<i8, String> {
        Ok(self.u8()? as i8)
    }

    fn i32(&mut self) -> Result<i32, String> {
        self.ihtiyac(4)?;
        let b = &self.d[self.p..self.p + 4];
        self.p += 4;
        Ok(i32::from_be_bytes([b[0], b[1], b[2], b[3]]))
    }

    fn f32(&mut self) -> Result<f32, String> {
        self.ihtiyac(4)?;
        let b = &self.d[self.p..self.p + 4];
        self.p += 4;
        Ok(f32::from_be_bytes([b[0], b[1], b[2], b[3]]))
    }

    fn atla(&mut self, n: usize) -> Result<(), String> {
        self.ihtiyac(n)?;
        self.p += n;
        Ok(())
    }

    fn metin(&mut self) -> Result<String, String> {
        let n = self.i32()?;
        if n < 0 || n as usize > 1_000_000 {
            return Err("geçersiz metin uzunluğu".into());
        }
        let n = n as usize;
        self.ihtiyac(n)?;
        let s = String::from_utf8_lossy(&self.d[self.p..self.p + n]).to_string();
        self.p += n;
        Ok(s)
    }
}

// ---------------------------------------------------------------------------
// anahtar kare / kemik
// ---------------------------------------------------------------------------

#[derive(Clone)]
struct Kf {
    /// mutlak tick
    t: f32,
    v: f32,
    /// EasingType kimliği
    e: u8,
}

struct Kemik {
    ad: &'static str,
    pos: [Vec<Kf>; 3],
    rot: [Vec<Kf>; 3],
    bend: Vec<Kf>,
}

struct Animasyon {
    bas: i32,
    bitis: i32,
    stop: i32,
    dongu: bool,
    /// isLoop true iken animasyonun geri döndüğü tick (mod: returnTick)
    geri: i32,
    /// ham returnTick (JSON'a yazılır)
    geri_ham: i32,
    kemikler: Vec<Kemik>,
    uuid: String,
}

/// İkili dosyada kemik adları PAL'ın camelCase biçimiyle gelir ("leftArm");
/// varsayılan pivotlar snake_case anahtarlarla tanımlı. İkisini de tek biçime
/// indir, yoksa `varsayilan` 0 döner ve konum kanalları dinlenme payını
/// (kol ±5/-2, bacak ±1.9/-12) taşır — parçalar gövdeden kopar.
fn anahtar_ad(ad: &str) -> String {
    let mut s = String::with_capacity(ad.len() + 2);
    for (i, c) in ad.chars().enumerate() {
        if c.is_ascii_uppercase() {
            if i > 0 {
                s.push('_');
            }
            s.push(c.to_ascii_lowercase());
        } else {
            s.push(c);
        }
    }
    s
}

fn varsayilan(ad: &str) -> (f32, f32, f32) {
    match anahtar_ad(ad).as_str() {
        "right_arm" => (-5.0, 2.0, 0.0),
        "left_arm" => (5.0, 2.0, 0.0),
        "left_leg" => (1.9, 12.0, 0.1),
        "right_leg" => (-1.9, 12.0, 0.1),
        _ => (0.0, 0.0, 0.0),
    }
}

fn bend_var(ad: &str) -> bool {
    let a = anahtar_ad(ad);
    a != "head" && a != "left_item" && a != "right_item"
}

/// İkili kemik adını launcher kanal adına çevirir (görülemeyen kemikler None).
fn kemik_adi(ad: &str) -> Option<&'static str> {
    Some(match ad {
        "head" => "head",
        "body" => "body",
        "torso" => "torso",
        "right_arm" | "rightArm" => "rightArm",
        "left_arm" | "leftArm" => "leftArm",
        "right_leg" | "rightLeg" => "rightLeg",
        "left_leg" | "leftLeg" => "leftLeg",
        _ => return None,
    })
}

/// Tek ekseni (kanalı) okur; tick'leri mutlaklaştırır.
fn eksen_oku(
    o: &mut Oku,
    surum: u8,
    kf_boy: usize,
    def: f32,
    carpan16: bool,
    negatif: bool,
) -> Result<Vec<Kf>, String> {
    let (etkin, adet) = if surum >= 2 {
        let e = o.u8()? != 0;
        (e, o.i32()?)
    } else {
        let n = o.i32()?;
        (n >= 0, n)
    };
    if !etkin {
        if adet > 0 {
            o.atla(adet as usize * kf_boy)?;
        }
        return Ok(Vec::new());
    }
    if adet < 0 || adet > 100_000 {
        return Err("anahtar kare sayısı geçersiz".into());
    }

    let mut out: Vec<Kf> = Vec::with_capacity(adet as usize);
    let mut onceki_tick = 0i32;
    for _ in 0..adet {
        let bas = o.p;
        let tick = o.i32()?;
        let delta = (tick - onceki_tick) as f32;
        onceki_tick = tick;
        let ham = o.f32()?;
        let mut v = ham - def;
        if carpan16 {
            v *= 16.0;
        }
        if negatif {
            v = -v;
        }
        let e = o.u8()?;
        if surum >= 4 {
            let _ = o.f32()?; // easing arg (kullanılmıyor)
        }
        out.push(Kf { t: delta, v, e });
        // biçim ileride büyürse (kf_boy > tükettiğimiz bayt) doğru yere atla
        let hedef = bas + kf_boy;
        o.p = hedef.min(o.d.len());
    }

    let mut t = 0.0f32;
    for k in out.iter_mut() {
        t += k.t;
        k.t = t;
    }
    Ok(out)
}

/// Modun `PlayerAnimatorLoader.correctEasings` eşleniği:
/// easeBefore=false iken easing'ler bir sağa kaydırılmış gelir.
fn easing_duzelt(liste: &mut Vec<Kf>) {
    let mut onceki = 8u8; // EASE_IN_OUT_SINE
    for k in liste.iter_mut() {
        let e = k.e;
        k.e = onceki;
        onceki = e;
    }
    if let Some(son) = liste.last().cloned() {
        liste.push(Kf {
            t: son.t + 0.001,
            v: son.v,
            e: onceki,
        });
    }
}

fn kemik_oku(
    o: &mut Oku,
    ad: &'static str,
    ham_ad: &str,
    surum: u8,
    kf_boy: usize,
    ease_before: bool,
) -> Result<Kemik, String> {
    let anahtar = anahtar_ad(ham_ad);
    let (dx, dy, dz) = varsayilan(&anahtar);
    let govde = anahtar == "body";
    let esya = anahtar == "left_item" || anahtar == "right_item";
    let pelerin = anahtar == "cape";

    let px = eksen_oku(o, surum, kf_boy, dx, govde, esya || pelerin || govde)?;
    let py = eksen_oku(o, surum, kf_boy, dy, govde, !govde)?;
    let pz = eksen_oku(o, surum, kf_boy, dz, govde, pelerin)?;
    let rx = eksen_oku(o, surum, kf_boy, 0.0, false, esya || pelerin || govde)?;
    let ry = eksen_oku(o, surum, kf_boy, 0.0, false, esya || govde)?;
    let rz = eksen_oku(o, surum, kf_boy, 0.0, false, esya || pelerin)?;

    let mut bend = Vec::new();
    if bend_var(&anahtar) {
        // kullanılmayan "Y ekseni bend" kanalı (v2+)
        let _ = eksen_oku(o, surum, kf_boy, 0.0, false, false)?;
        bend = eksen_oku(o, surum, kf_boy, 0.0, false, false)?;
    }
    if surum >= 3 {
        // ölçek kanalları (launcher göstermiyor, ama akışı kaydırmamak için okunur)
        let _ = eksen_oku(o, surum, kf_boy, 0.0, false, false)?;
        let _ = eksen_oku(o, surum, kf_boy, 0.0, false, false)?;
        let _ = eksen_oku(o, surum, kf_boy, 0.0, false, false)?;
    }

    let mut pos = [px, py, pz];
    let mut rot = [rx, ry, rz];
    if !ease_before {
        for a in pos.iter_mut() {
            easing_duzelt(a);
        }
        for a in rot.iter_mut() {
            easing_duzelt(a);
        }
        easing_duzelt(&mut bend);
    }

    Ok(Kemik { ad, pos, rot, bend })
}

fn animasyon_oku(o: &mut Oku, surum: u8) -> Result<Animasyon, String> {
    let _tick = o.i32()?;
    let bas = o.i32()?;
    let bitis_ham = o.i32()?;
    let mut bitis = bitis_ham.max(bas + 1);
    let stop = o.i32()?;
    let dongu = o.u8()? != 0;
    let geri_ham = o.i32()?;
    let geri = (geri_ham - 1).max(0);
    if !dongu {
        // mod: tek seferlik animasyon stopTick'e kadar sürer
        bitis = if stop <= bitis { bitis + 3 } else { stop };
    }
    let ease_before = o.u8()? != 0;
    let _nsfw = o.u8()?;
    let kf_i = o.i8()?;
    if kf_i <= 0 {
        return Err("anahtar kare boyutu geçersiz".into());
    }
    let kf_boy = kf_i as usize;

    let mut kemikler: Vec<Kemik> = Vec::new();
    if surum >= 2 {
        let adet = o.i32()?;
        if adet < 0 || adet > 256 {
            return Err("kemik sayısı geçersiz".into());
        }
        for _ in 0..adet {
            let ham = o.metin()?;
            match kemik_adi(&ham) {
                Some(ad) => kemikler.push(kemik_oku(o, ad, &ham, surum, kf_boy, ease_before)?),
                None => {
                    // tanımadığımız kemik (elytra, şapka...): oku ve at
                    let _ = kemik_oku(o, "head", &ham, surum, kf_boy, ease_before)?;
                }
            }
        }
    } else {
        // v1: sabit altı kemik, bu sırayla
        for (ad, ham) in [
            ("head", "head"),
            ("body", "body"),
            ("rightArm", "right_arm"),
            ("leftArm", "left_arm"),
            ("rightLeg", "right_leg"),
            ("leftLeg", "left_leg"),
        ] {
            kemikler.push(kemik_oku(o, ad, ham, surum, kf_boy, ease_before)?);
        }
    }

    let mut uuid = String::new();
    if o.kalan() >= 16 {
        let b = &o.d[o.p..o.p + 16];
        uuid = format!(
            "{:02x}{:02x}{:02x}{:02x}-{:02x}{:02x}-{:02x}{:02x}-{:02x}{:02x}-{:02x}{:02x}{:02x}{:02x}{:02x}{:02x}",
            b[0], b[1], b[2], b[3], b[4], b[5], b[6], b[7],
            b[8], b[9], b[10], b[11], b[12], b[13], b[14], b[15]
        );
    }

    Ok(Animasyon {
        bas,
        bitis,
        stop,
        dongu,
        geri,
        geri_ham,
        kemikler,
        uuid,
    })
}

// ---------------------------------------------------------------------------
// launcher uzayına dönüşüm
// ---------------------------------------------------------------------------

/// EasingType kimliği → launcher'ın tanıdığı ad (bilinmeyenler en yakın sine).
fn easing_adi(id: u8) -> &'static str {
    match id {
        0 | 38 | 36 => "LINEAR",
        1 | 37 => "STEP",
        6 | 9 | 12 | 15 | 18 | 21 | 24 | 27 | 30 | 33 => "EASEINSINE",
        7 | 10 | 13 | 16 | 19 | 22 | 25 | 28 | 31 | 34 => "EASEOUTSINE",
        11 => "EASEINOUTCUBIC",
        14 => "EASEINOUTQUAD",
        8 | 17 | 20 | 23 | 26 | 29 | 32 | 35 => "EASEINOUTSINE",
        _ => "LINEAR",
    }
}

fn yuvarla(v: f32, basamak: i32) -> f64 {
    let k = 10f32.powi(basamak);
    ((v * k).round() / k) as f64
}

/// Başlık alanları bazen {"translate": "...", "fallback": "..."} JSON'u olarak
/// gömülü gelir (SPEmotes gibi paketler) — okunabilir metne indirger.
fn metin_coz(s: &str) -> String {
    let t = s.trim();
    if t.starts_with('{') {
        if let Ok(v) = serde_json::from_str::<serde_json::Value>(t) {
            for anahtar in ["fallback", "text", "translate"] {
                if let Some(x) = v.get(anahtar).and_then(|x| x.as_str()) {
                    if !x.trim().is_empty() {
                        return x.trim().to_string();
                    }
                }
            }
        }
    }
    t.to_string()
}

/// Dosyanın Emotecraft ikili paketi olup olmadığını hızlıca sez.
pub fn ikili_mi(bayt: &[u8]) -> bool {
    if bayt.len() < 8 || bayt[0] == b'{' {
        return false;
    }
    // ilk int makul bir biçim sürümü, 5. bayt FILE (0x10), 6. bayt modül sayısı
    let surum = i32::from_be_bytes([bayt[0], bayt[1], bayt[2], bayt[3]]);
    bayt[4] == 0x10 && (1..=64).contains(&bayt[5]) && (0..=64).contains(&surum)
}

/// İkili .emotecraft → launcher'ın anladığı JSON metni.
pub fn coz_json(bayt: &[u8]) -> Result<String, String> {
    if bayt.len() < 8 {
        return Err("dosya çok kısa".into());
    }
    let mut o = Oku::yeni(bayt);
    let _fmt = o.i32()?;
    let amac = o.u8()?;
    if amac != 0x10 {
        return Err(format!("bu bir emote dosyası değil (amaç {amac:#x})"));
    }
    let modul_sayisi = o.u8()?;

    let mut anim: Option<(u8, Vec<u8>)> = None;
    let mut baslik: Option<Vec<u8>> = None;
    for _ in 0..modul_sayisi {
        let kimlik = o.u8()?;
        let surum = o.u8()?;
        let boy = o.i32()?;
        if boy < 0 {
            return Err("modül boyutu geçersiz".into());
        }
        let boy = boy as usize;
        if o.kalan() < boy {
            return Err("modül dosya sonunu aşıyor".into());
        }
        let dilim = &bayt[o.p..o.p + boy];
        match kimlik {
            0x00 => anim = Some((surum, dilim.to_vec())),
            0x11 => baslik = Some(dilim.to_vec()),
            _ => {}
        }
        o.p += boy;
    }

    let (asurum, averi) = anim.ok_or("dosyada emote animasyonu yok")?;
    let mut ao = Oku::yeni(&averi);
    let animasyon = animasyon_oku(&mut ao, asurum)?;

    let (mut ad, mut yazar, mut aciklama) = (String::new(), String::new(), String::new());
    if let Some(b) = baslik {
        let mut bo = Oku::yeni(&b);
        // sıra: name, description, author
        ad = metin_coz(&bo.metin().unwrap_or_default());
        aciklama = metin_coz(&bo.metin().unwrap_or_default());
        yazar = metin_coz(&bo.metin().unwrap_or_default());
    }

    // (tick, kemik, kanal, değer, easing) kayıtları — Animation uzayı (delta px / rad→derece)
    let mut kayitlar: Vec<(f32, &'static str, &'static str, f32, u8)> = Vec::new();
    for k in &animasyon.kemikler {
        for (eksen, kanal) in ["x", "y", "z"].iter().enumerate() {
            for kf in &k.pos[eksen] {
                kayitlar.push((kf.t, k.ad, kanal, kf.v, kf.e));
            }
        }
        for (eksen, kanal) in ["pitch", "yaw", "roll"].iter().enumerate() {
            for kf in &k.rot[eksen] {
                kayitlar.push((kf.t, k.ad, kanal, kf.v.to_degrees(), kf.e));
            }
        }
        for kf in &k.bend {
            kayitlar.push((kf.t, k.ad, "bend", kf.v.to_degrees(), kf.e));
        }
    }
    kayitlar.sort_by(|a, b| a.0.partial_cmp(&b.0).unwrap_or(std::cmp::Ordering::Equal));

    let mut moves: Vec<Value> = Vec::with_capacity(kayitlar.len());
    for (t, kemik, kanal, v, e) in kayitlar {
        let mut m = Map::new();
        m.insert("tick".to_string(), json!(yuvarla(t, 2)));
        m.insert("easing".to_string(), json!(easing_adi(e)));
        let mut b = Map::new();
        b.insert(kanal.to_string(), json!(yuvarla(v, 3)));
        m.insert(kemik.to_string(), Value::Object(b));
        moves.push(Value::Object(m));
    }

    let mut emote = Map::new();
    emote.insert("beginTick".to_string(), json!(animasyon.bas));
    emote.insert("endTick".to_string(), json!(animasyon.bitis));
    emote.insert("stopTick".to_string(), json!(animasyon.stop));
    emote.insert("isLoop".to_string(), json!(animasyon.dongu));
    emote.insert("returnTick".to_string(), json!(animasyon.geri_ham));
    emote.insert("degrees".to_string(), json!(true));
    emote.insert("palUzay".to_string(), json!(true));
    // konum kanalları kemiğin varsayılan pivotundan çıkarıldı (delta px).
    // Bu işaret olmayan eski PAL dosyalarında dinlenme payı hâlâ üstünde olabilir;
    // ui/src/sahne/emote.ts bunları yüklerken bir kez düzeltir.
    emote.insert("palDef".to_string(), json!(true));
    if animasyon.dongu {
        // launcher döngüyü returnTick'ten endTick'e sarar
        emote.insert("loopBas".to_string(), json!(animasyon.geri));
    }
    emote.insert("moves".to_string(), Value::Array(moves));

    let mut kok = Map::new();
    kok.insert("name".to_string(), json!(if ad.trim().is_empty() { "İsimsiz" } else { ad.trim() }));
    kok.insert("author".to_string(), json!(yazar.trim()));
    kok.insert("description".to_string(), json!(aciklama.trim()));
    if !animasyon.uuid.is_empty() {
        kok.insert("uuid".to_string(), json!(animasyon.uuid));
    }
    kok.insert("emote".to_string(), Value::Object(emote));

    serde_json::to_string(&Value::Object(kok)).map_err(|z| z.to_string())
}
