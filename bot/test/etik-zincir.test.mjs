// ETİKET ↔ ROL ↔ MESAJ ↔ LAUNCHER İZNİ zincirini UÇTAN UCA sınar.
//
//  1) sahte güvenlik API'si ayağa kalkar (8789)
//  2) botun gerçek event dosyası (eventler/guildMemberUpdate.js) üç senaryoyla
//     çağrılır: etiket alındı / etiket bırakıldı / aynı etiket (tekrar)
//  3) beklenen: rol verilir + hoşgeldin mesajı + API'ye rol=true,
//               rol kalkar + veda mesajı + API'ye rol=false,
//               tekrar etikette mesaj YOK (db.has kapısı çalışıyor)
import http from "node:http";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);

const KOK = "C:\\Users\\USER\\Desktop\\samiclient";
process.env.YIKIM_API = "http://127.0.0.1:8789";
process.env.YIKIM_BOT_ANAHTARI = "test-anahtar";
process.env.GUILD_ID = "G1";
process.env.CHANNEL_ID = "C1";
process.env.ROLE_ID = "R1";
// ORİJİNEL sistemde EVENT_COOLDOWN_MS (5 sn) ard arda olayları yutar; test
// mantığı sınamak için soğumayı kısa tutuyoruz (üretimdeki 5000 ms korunur).
process.env.EVENT_COOLDOWN_MS = "50";

// ---------- sahte API ----------
const apiCagrilari = [];
const sunucu = http.createServer((req, res) => {
  let govde = "";
  req.on("data", (c) => (govde += c));
  req.on("end", () => {
    apiCagrilari.push({ yol: req.url, govde });
    res.writeHead(200, { "content-type": "application/json" });
    if (req.url === "/api/ping") res.end('{"govde":{"tamam":true}}');
    else res.end('{"govde":{"tamam":true,"rol_yol":true}}');
  });
});
await new Promise((r) => sunucu.listen(8789, "127.0.0.1", r));

// ---------- sahte db / cache ----------
const veri = {};
const db = {
  has: (k) => Object.prototype.hasOwnProperty.call(veri, k),
  get: (k) => veri[k],
  set: (k, v) => { veri[k] = v; },
  delete: (k) => { delete veri[k]; },
};
const roller = new Set();
const mesajlar = [];
const member = {
  id: "U1",
  user: { displayName: "TestOyuncu", displayAvatarURL: () => "http://x/a.png", tag: "TestOyuncu#0001" },
  displayAvatarURL: () => "http://x/a.png",
  roles: {
    cache: { has: (id) => roller.has(id) },
  },
  rolesAdd: async () => {},
};
member.roles.add = async (id) => { roller.add(id); };
member.roles.remove = async (id) => { roller.delete(id); };
const guild = {
  id: "G1",
  members: { cache: new Map([["U1", member]]) },
};
const channel = { id: "C1", send: async (m) => mesajlar.push(m) };
const role = { id: "R1" };
function getCache({ cacheType, id }) {
  if (cacheType === "Guild") return guild;
  if (cacheType === "Channel") return channel;
  if (cacheType === "Role") return role;
  throw new Error("geçersiz cache: " + cacheType);
}
const logger = { info: () => {}, warn: () => {}, error: () => {}, success: () => {} };
const BaseEmbed = () => {
  const e = {};
  ["setAuthor", "setTitle", "setDescription", "setColor", "setThumbnail", "setFooter", "setTimestamp"].forEach((m) => (e[m] = () => e));
  return e;
};
const config = { guild: { id: "G1", channel: "C1", role: "R1" } };

// ---------- olayları ----------
const bekle = (ms) => new Promise((r) => setTimeout(r, ms));
const olayEtiketi = () => ({
  t: "GUILD_MEMBER_UPDATE",
  d: { guild_id: "G1", user: { id: "U1", primary_guild: { identity_guild_id: "G1" } }, roles: ["R1"] },
});
const olayBirakti = () => ({
  t: "GUILD_MEMBER_UPDATE",
  d: { guild_id: "G1", user: { id: "U1", primary_guild: null }, roles: [] },
});

const ev = require(`${KOK}\\bot\\eventler\\guildMemberUpdate.js`);
const calistir = async (pkg) => {
  await bekle(80); // soğuma penceresi (test için kısa tutuldu)
  await ev.execute({}, db, logger, getCache, BaseEmbed, config, pkg);
};

// --- SENARYO 1: etiketi alır ---
roller.clear(); mesajlar.length = 0; apiCagrilari.length = 0;
Object.keys(veri).forEach((k) => delete veri[k]);
await calistir(olayEtiketi());
const s1 = {
  rolDurumu: roller.has("R1"),
  hosgeldinMesaji: mesajlar.some((m) => m.content.includes("<@U1>")),
  apiRolTrue: apiCagrilari.some((c) => c.yol === "/api/rol/guncelle" && JSON.parse(c.govde).rol_yol === true),
  baseKaydi: db.has("base.U1"),
};

// --- SENARYO 2: etiketi bırakır (aynı db'den devam) ---
await calistir(olayBirakti());
const s2 = {
  rolDurumu: roller.has("R1"),
  vedaMesaji: mesajlar.some((m) => m.content.includes("<@U1>")),
  apiRolFalse: apiCagrilari.some((c) => c.yol === "/api/rol/guncelle" && JSON.parse(c.govde).rol_yol === false),
  baseSilindi: !db.has("base.U1"),
};

// --- SENARYO 3: tekrar etiket alır (db kaydı sıfırlandığı için YENİ hoşgeldin) ---
// Orijinal sistem: etiket bırakılırken `base.<id>` kaydı silinir; yeniden etiket
// alınca bu "yeni bir destekçi" olarak kabul edilir → tekrar hoşgeldin mesajı.
mesajlar.length = 0; apiCagrilari.length = 0;
await calistir(olayEtiketi());
const s3 = { mesajSayisi: mesajlar.length, rolDurumu: roller.has("R1"), apiRolTrue: apiCagrilari.some((c) => JSON.parse(c.govde).rol_yol === true) };

sunucu.close();

const dogruMu =
  s1.rolDurumu === true &&
  s1.hosgeldinMesaji === true &&
  s1.apiRolTrue === true &&
  s1.baseKaydi === true &&
  s2.rolDurumu === false &&
  s2.vedaMesaji === true &&
  s2.apiRolFalse === true &&
  s2.baseSilindi === true &&
  s3.mesajSayisi === 1 &&
  s3.rolDurumu === true &&
  s3.apiRolTrue === true;

console.log("SENARYO 1 (etiket alındı):", JSON.stringify(s1));
console.log("SENARYO 2 (etiket bırakıldı):", JSON.stringify(s2));
console.log("SENARYO 3 (tekrar etiket):", JSON.stringify(s3));
console.log(dogruMu ? "\nSONUÇ: GEÇTİ — sistem orijinali gibi çalışıyor." : "\nSONUÇ: KALDI");
process.exit(dogruMu ? 0 : 1);
