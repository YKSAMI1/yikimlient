// İMZA DÜZELTMESİNİN KANITI — Rust istemcinin yaptığı tam kontrolü yapar.
// Amaç: eski launcher'ın "api_imza_gecersiz" hatasının kök nedenini görmek.
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const kok = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
fs.readFileSync(path.join(kok, "guvenlik-api/.env"), "utf8").split(/\r?\n/).forEach((s) => {
  const i = s.indexOf("=");
  if (i > 0 && !s.trimStart().startsWith("#")) process.env[s.slice(0, i).trim()] = s.slice(i + 1).trim();
});

const API = (process.env.YIKIM_API || "http://127.0.0.1:8788").replace(/\/+$/, "");
const { privateKey, publicKey } = crypto.generateKeyPairSync("ed25519");
const pub_b64 = publicKey.export({ format: "der", type: "spki" }).subarray(-32).toString("base64");
const cihaz_id = "imza-test-" + Date.now();

async function cagir(yol, govde) {
  const govdeMetni = JSON.stringify(govde);
  const ts = Date.now();
  const nonce = crypto.randomBytes(8).toString("hex");
  const imza = crypto.sign(null, Buffer.from(`${cihaz_id}|${ts}|${nonce}|${govdeMetni}`, "utf8"), privateKey).toString("base64");
  const r = await fetch(API + yol, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ cihaz_id, ts, nonce, imza, pub_key: pub_b64, govde }),
  });
  return { durum: r.status, ...(await r.json()) };
}

function imza_dogrula(pubB64, mesaj, imzaB64) {
  const pub = Buffer.concat([Buffer.from("302a300506032b6570032100", "hex"), Buffer.from(pubB64, "base64")]);
  try {
    return crypto.verify(null, Buffer.from(mesaj, "utf8"), crypto.createPublicKey({ key: pub, format: "der", type: "spki" }), Buffer.from(imzaB64, "base64"));
  } catch { return false; }
}

/// serde_json'un davranışı: Map bir BTreeMap → anahtarlar ALFABETİK yazılır.
function serde_json_gibi(v) {
  if (v === null || typeof v !== "object") return JSON.stringify(v);
  if (Array.isArray(v)) return "[" + v.map(serde_json_gibi).join(",") + "]";
  return "{" + Object.keys(v).sort().map((k) => JSON.stringify(k) + ":" + serde_json_gibi(v[k])).join(",") + "}";
}

const pubAnahtar = (await (await fetch(API + "/api/saglik")).json()).govde.sunucu_genel_anahtar;
await cagir("/api/cihaz/kaydet", { cihaz_id, pub_key: pub_b64 });

const sag = await cagir("/api/cihaz/kaydet", { cihaz_id, pub_key: pub_b64 });
console.log("1) tek anahtarli yanit:");
console.log("     ham metin :", imza_dogrula(pubAnahtar, sag.govde_metin, sag.yanit_imza) ? "GECERLI" : "GECERSIZ");
console.log("     serilestir:", imza_dogrula(pubAnahtar, serde_json_gibi(sag.govde), sag.yanit_imza) ? "GECERLI" : "GECERSIZ");

const kodYanit = await cagir("/api/baglama/kod", {
  hesap_anahtar: "offline:imza-test",
  hesap_ad: "ImzaTest",
  tur: "cracked",
});
const alanSayisi = Object.keys(kodYanit.govde || {}).length;
const yeniYol = imza_dogrula(pubAnahtar, kodYanit.govde_metin, kodYanit.yanit_imza);
const eskiYol = imza_dogrula(pubAnahtar, serde_json_gibi(kodYanit.govde), kodYanit.yanit_imza);
console.log(`2) IKI anahtarli yanit (${alanSayisi} alan):`);
console.log("     YENI (ham metin) :", yeniYol ? "GECERLI" : "GECERSIZ");
console.log("     ESKI (serilestir):", eskiYol ? "GECERLI" : "GECERSIZ   <-- eski launcher bunu yapip hata veriyordu");

console.log(yeniYol ? "\nSONUC: duzeltme calisiyor — launcher artik dogrulayacak." : "\nSONUC: HALA BOZUK!");
process.exitCode = yeniYol ? 0 : 1;
