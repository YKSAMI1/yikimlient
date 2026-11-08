// commands.rs'e kozmetik_cizim_kapisi ekle (rol kapisi).
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const kok = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const p = path.join(kok, "src-tauri/src/commands.rs");
let t = fs.readFileSync(p, "utf8");

const d1 = ["/// Kozmetik DEGISTIRME yetkisi kapisi.", "/// Kural:", "/// Kural: dogrulanmamis hesap kozmetik degistiremez", "fn kozmetik_yetki_kapisi() -> Result<(String, String), String> {"].join("\n");
// Basit ve sağlam: imzayı ve baş yorumunu hedefle
const eski = `/// Kural: doğrulanmamış hesap kozmetik değiştiremez (tasarım §9). Hesabı
/// kullanmaya devam eder, yalnız pelerin/elitra düzenlemesi kilitlidir.
/// Dönen \`(hesap_anahtari, tur)\` ile kayıt hesap bazlı saklanır.
fn kozmetik_yetki_kapisi() -> Result<(String, String), String> {`;
const yeni = `///kozmetik kullanma kapisi: ac/kapa + katalogdan secim.
fn kozmetik_yetki_kapisi() -> Result<(String, String), String> {`;
const eski2 = "fn kozmetik_yetki_kapisi() -> Result<(String, String), String> {";

// 1) Sadece imzadan sonra rol kapısını ekle
if (!t.includes("fn kozmetik_cizim_kapisi()")) {
  const cizim = `
/// Kozmetik ÇİZME / KATALOGTAN SEÇME kapısı (v0.7.25).
///
/// Kural: "Yol Silindiri" rolü olmayan hesap yalnız varsayılan YIKIM
/// pelerin/elitrasını açıp kapatabilir — kendi tasarımını ÇİKEMEZ ve
/// katalogdaki başka kayıtları seçemez.
fn kozmetik_cizim_kapisi() -> Result<(String, String), String> {
    let (anahtar, tur) = kozmetik_yetki_kapisi()?;
    let yetki = crate::hesap_yetki::yerel_yetki(&anahtar);
    if !crate::hesap_yetki::cizim_izinli(&yetki) {
        return Err("rol_yok: kendi kozmetigini cizmek icin 'Yol Silindiri' rolu gerekir".into());
    }
    Ok((anahtar, tur))
}
`;
  t = t.replace(
    /\n(\/\/ ---------- kozmetik \(özel pelerin \+ elitra kanadı\) ----------\n)/,
    `\n${cizim}\n$1`,
  );
  console.log("1) kozmetik_cizim_kapisi eklendi");
} else {
  console.log("1) zaten var");
}

// 2) katalogdan seçim rolle sınırlansın
const secimOnce = `pub async fn cmd_kozm_sec(tur: String, id: Option<String>) -> Result<serde_json::Value, String> {
    if !crate::kozmetik_katalog::gecerli_tur(&tur) {`;
const secimSonra = `pub async fn cmd_kozm_sec(tur: String, id: Option<String>) -> Result<serde_json::Value, String> {
    // Katalogdan seçim = çizim izni (rol) ister.
    let (hesap_anahtari, _tur) = kozmetik_cizim_kapisi()?;
    if !crate::kozmetik_katalog::gecerli_tur(&tur) {`;
if (t.includes(secimOnce)) {
  t = t.replace(secimOnce, secimSonra);
  // içerdeki eski kapı çağrısı kaldırılsın (çift kapı olmasın)
  t = t.replace(
    `    let (hesap_anahtari, _tur) = kozmetik_yetki_kapisi();
    let (hesap_anahtari, _tur) = kozmetik_cizim_kapisi()?;`,
    `    let (hesap_anahtari, _tur) = kozmetik_cizim_kapisi()?;`,
  );
  console.log("2) cmd_kozm_sec rol kapısına bağlandı");
} else if (t.includes("let (hesap_anahtari, _tur) = kozmetik_cizim_kapisi()?;\n    if !crate::kozmetik_katalog::gecerli_tur")) {
  console.log("2) zaten bağlı");
} else {
  console.log("2) cmd_kozm_sec bulunamadı — elle bak");
}

// 3) fotoğraf yükleme ve kaydet de rol kapısından geçsin
for (const [ad, yeni] of [
  ["cmd_kozmetik_kaydet", "let (hesap_anahtari, _tur) = kozmetik_cizim_kapisi()?;"],
  ["cmd_kozmetik_fotograf", "let (hesap_anahtari, _tur) = kozmetik_cizim_kapisi()?;"],
]) {
  const re = new RegExp(`pub async fn ${ad}\\(([^)]*)\\)[^{]*\\{`);
  const m = t.match(re);
  if (!m) { console.log(`3) ${ad} bulunamadı`); continue; }
  const once = t.slice(m.index, m.index + m[0].length);
  if (t.includes(yeni) && t.slice(m.index).startsWith(once + "\n" + yeni)) { console.log(`3) ${ad} zaten bağlı`); continue; }
  t = t.replace(once, once + "\n" + yeni);
  console.log(`3) ${ad} rol kapısına bağlandı`);
}

fs.writeFileSync(p, t, "utf8");
console.log("kaydedildi");
