// Bot token'ı ile sunucudaki rolleri listele ("Yol Silindiri" rolünü bul).
// Sırlar yazdırılmaz.
const fs = require("fs");
const path = require("path");
const { Client, GatewayIntentBits } = require(path.join(process.cwd(), "node_modules/discord.js"));

const env = {};
fs.readFileSync(".env", "utf8").split(/\r?\n/).forEach((s) => {
  const i = s.indexOf("=");
  if (i > 0 && !s.trim().startsWith("#")) env[s.slice(0, i).trim()] = s.slice(i + 1).trim();
});

// token çöz (düz veya şifreli)
const { resolveToken } = require("./utils/token");
const token = resolveToken({ token: env.TOKEN, tokenEncrypted: env.TOKEN_ENCRYPTED, tokenKey: env.TOKEN_KEY });
const GUILD = process.argv[2] || env.GUILD_ID;

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.once("clientReady", async () => {
  try {
    const g = await client.guilds.fetch(GUILD);
    const roller = await g.roles.fetch();
    console.log("SUNUCU:", g.name);
    console.log("ROLLER:");
    for (const [, r] of roller) {
      console.log(`  ${r.id}  |  ${r.name}  |  üye: ${r.members?.size ?? "?"}`);
    }
    const yol = [...roller.values()].find((r) => /yol|silindir/i.test(r.name));
    console.log("\n>>> 'Yol Silindiri' rolü:", yol ? `${yol.id} (${yol.name})` : "BULUNAMADI");
    process.exit(0);
  } catch (e) {
    console.log("HATA:", e.message);
    process.exit(1);
  }
});
client.login(token).catch((e) => {
  console.log("GİRİŞ HATASI:", e.message);
  process.exit(1);
});
