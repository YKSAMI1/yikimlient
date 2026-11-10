const { Client, GatewayIntentBits, Collection, EmbedBuilder, REST, Routes } = require('discord.js');
const db = require('croxydb');
const fs = require('fs');
const path = require('path');
const config = require('./config.js');
const { resolveToken } = require('./utils/token');
const api = require('./utils/api');
const { rolDurumlariniSenkron } = require('./utils/rol-senkron');
const {
  rejectUnauthorizedGuild,
  installProcessGuards,
} = require('./utils/security');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
  ],
});

const logger = {
  success: (message) => console.log(`✅ ${message}`),
  error: (message) => console.log(`❌ ${message}`),
  info: (message) => console.log(`ℹ️ ${message}`),
  warn: (message) => console.log(`⚠️ ${message}`),
};

installProcessGuards(logger);

if (!config.guild.id || !config.guild.channel || !config.guild.role) {
  logger.error('GUILD_ID, CHANNEL_ID ve ROLE_ID .env dosyasında tanımlanmalı.');
  process.exit(1);
}

const CacheType = {
  Guild: () => client.guilds.cache,
  Channel: (guild) => guild?.channels?.cache,
  Role: (guild) => guild?.roles?.cache,
  User: () => client.users.cache,
  Member: (guild) => guild?.members.cache,
};

function getCache({ cacheType, id, guild }) {
  if (!id) {
    const message = `Beklenen "${cacheType}" ID değeri sağlanmadı.`;
    logger.error(message);
    throw new Error(message);
  }

  const selector = CacheType[cacheType];
  if (!selector) {
    const message = `Cache tipi hatası: "${cacheType}". Desteklenen tipler: Guild, Channel, Role, User, Member.`;
    logger.error(message);
    throw new Error(message);
  }

  const cache = selector(guild);
  if (!cache) {
    const message = `Cache "${cacheType}" için erişilemedi. ${cacheType !== 'Guild' ? "Muhtemelen 'guild' nesnesi geçersiz veya tanımsız." : ''}`;
    logger.error(message);
    throw new Error(message);
  }

  const item = cache.get(id);
  if (!item) {
    if (cacheType === 'Member') {
      const message = `Member cache'de bulunamadı: ${id}`;
      logger.warn(message);
      throw new Error(message);
    }

    const message = `"${cacheType}" bulunamadı. Sağlanan ID: "${id}". Nesne önbelleğe alınmamış olabilir veya geçersiz bir ID girilmiş olabilir.`;
    logger.error(message);
    throw new Error(message);
  }

  return item;
}

function BaseEmbed() {
  return new EmbedBuilder()
    .setColor('#0099ff')
    .setTimestamp()
    .setFooter({ text: 'YIKIM SMP' });
}

client.commands = new Collection();
const commands = [];

const commandsPath = path.join(__dirname, 'komutlar');
const commandFiles = fs.readdirSync(commandsPath).filter((file) => file.endsWith('.js'));

for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);
  if ('data' in command && 'execute' in command) {
    client.commands.set(command.data.name, command);
    commands.push(command.data.toJSON());
    logger.info(`Komut yüklendi: ${command.data.name}`);
  } else {
    logger.warn(`Komut ${filePath} gerekli "data" veya "execute" özelliğine sahip değil.`);
  }
}

const eventsPath = path.join(__dirname, 'eventler');
const eventFiles = fs.readdirSync(eventsPath).filter((file) => file.endsWith('.js'));

for (const file of eventFiles) {
  const filePath = path.join(eventsPath, file);
  const event = require(filePath);
  if (event.once) {
    client.once(event.name, (...args) => event.execute(client, db, logger, getCache, BaseEmbed, config, ...args));
  } else {
    client.on(event.name, (...args) => event.execute(client, db, logger, getCache, BaseEmbed, config, ...args));
  }
}

async function deployCommands() {
  const botToken = resolveToken(config);
  const rest = new REST({ version: '10' }).setToken(botToken);

  try {
    logger.info(`${commands.length} adet slash komut yükleniyor...`);

    const data = await rest.put(
      Routes.applicationCommands(client.user.id),
      { body: commands },
    );

    logger.success(`${data.length} adet slash komut başarıyla yüklendi!`);
  } catch (error) {
    logger.error(`Slash komutları yüklenirken hata: ${error.message}`);
  }
}

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const command = client.commands.get(interaction.commandName);
  if (!command) return;

  // DM'de yalnızca açıkça izin verilen komutlar çalışır (/bagla, /sifirla).
  const dmIstisnasi = !interaction.guildId && command.dmAllowed === true;
  if (!dmIstisnasi) {
    const guildCheck = rejectUnauthorizedGuild(interaction);
    if (!guildCheck.allowed) {
      try {
        await interaction.reply({ content: guildCheck.message, ephemeral: true });
      } catch (error) {
        logger.error(`Yetkisiz etkileşim yanıtı hatası: ${error.message}`);
      }
      return;
    }
  }

  try {
    await command.execute(interaction, client, db, logger, getCache, BaseEmbed, config);
  } catch (error) {
    logger.error(`Komut hatası: ${error.message}`);
    const reply = { content: 'Komut çalıştırılırken bir hata oluştu!', ephemeral: true };

    try {
      if (interaction.replied || interaction.deferred) {
        await interaction.followUp(reply);
      } else {
        await interaction.reply(reply);
      }
    } catch (replyError) {
      logger.error(`Hata yanıtı gönderilemedi: ${replyError.message}`);
    }
  }
});

// ---- kozmetik duyurusu (Yol Silindiri) ----
// Bot açıldığında bir kez gönderilir. Alıcı yoksa sessizce geçer.
async function duyuruGonder() {
  const sahipId = (process.env.YIKIM_ADMIN_ID || '').trim();
  const rolId = (process.env.ROLE_YOL_ID || '').trim();
  const herkese = process.env.YIKIM_DM_ROLE === '1';
  const metin = [
    '**YIKIMLient kozmetikleri hazır.**',
    'Artık pelerinini ve elitranı kendin çizebilirsin; hepsi ücretsiz ve hesabına bağlı.',
    '',
    'Launcher → **Ayarlar → Hesap Doğrulama**: Discord ile bağlan, şifreni oluştur.',
    'Doğruladıktan sonra **Kozmetikler** sayfası açılır.',
    rolId && herkese ? '' : 'Şimdilik bu mesaj yalnız sunucu sahibine gidiyor.',
  ].filter(Boolean).join('\n');

  const gonder = async (userId) => {
    try {
      const u = await client.users.fetch(userId);
      await u.send(metin);
      logger.info(`Kozmetik duyurusu gönderildi: ${u.tag}`);
    } catch (e) {
      logger.warn(`DM gönderilemedi (${userId}): ${e.message}`);
    }
  };

  if (!herkese) {
    if (sahipId) await gonder(sahipId);
    else logger.warn('YIKIM_ADMIN_ID tanımlı değil - duyuru gönderilmedi.');
    return;
  }

  if (!rolId) {
    logger.warn('ROLE_YOL_ID tanımlı değil - rol duyurusu atlandı.');
    return;
  }
  try {
    const guild = await client.guilds.fetch(config.guild.id);
    const uyeler = await guild.members.fetch({ role: rolId, cache: false });
    logger.info(`Yol Silindiri üyesi: ${uyeler.size}`);
    for (const [, m] of uyeler) {
      if (m.user.bot) continue;
      await gonder(m.id);
      await new Promise((r) => setTimeout(r, 1200)); // DM hız sınırı
    }
  } catch (e) {
    logger.error(`Rol üyeleri alınamadı: ${e.message}`);
  }
}

// Bot "hazır" olayı: Discord.js 14 hem `ready` (eski) hem `clientReady` (yeni)
// yayar; her iki adı da dinleyip TEK kez çalışmasını sağlıyoruz — aksi halde
// komutlar iki kez yüklenir, duyuru iki kez DM gider.
let hazirCalisti = false;
function hazirOl(kaynak, ...args) {
  if (hazirCalisti) return;
  hazirCalisti = true;
  return hazirCalistir(kaynak, ...args);
}

client.once('ready', (...args) => hazirOl('ready', ...args));
client.once('clientReady', (...args) => hazirOl('clientReady', ...args));

async function hazirCalistir(kaynak, client) {
  logger.success(`Bot başarıyla Discord'a giriş yaptı: ${client.user.tag} (${kaynak})`);

  await deployCommands();

  client.user.setActivity('YIKIM SMP', { type: 3 });

  // ---- API kalp atışı ----
  // Panelde "bot açık" göstergesi için dakikada bir ping atılır.
  // API kapalıysa bot çalışmaya devam eder (yalnızca uyarı yazılır).
  if (api.hazirMi()) {
    const pingAt = async () => {
      const sonuc = await api.ping();
      if (!sonuc.ok) logger.warn(`API ping başarısız: ${sonuc.hata || sonuc.durum}`);
    };
    pingAt();
    setInterval(pingAt, 60_000).unref?.();
    logger.info(`Güvenlik API: ${api.adres()}`);
  } else {
    logger.warn('YIKIM_BOT_ANAHTARI tanımlı değil - güvenlik API çağrıları kapalı.');
  }

  // ---- rol senkronu ("Yol Silindiri") ----
  // Rol verilmiş/alınmış ama API'ye hiç bildirilmemiş olabilir. Bot her
  // açılışta sunucudaki gerçek rol durumunu API'ye yazar; launcher çizme
  // izni bu bilgiye bakar (HD fotoğraf/maske yükleme bununla açılır).
  const rolId = (process.env.ROLE_YOL_ID || process.env.ROLE_ID || '').trim();
  if (rolId) {
    await rolDurumlariniSenkron(client, db, logger, config, rolId);

    // ---- PERİYODİK ROLLÜ SENKRON (güvenlik ağı) ----
    // `GUILD_MEMBER_UPDATE` bazen kaçırılabiliyor: bot minik bir restart
    // geçiriyor, Discord olayı göndermiyor ya da kullanıcı endpoint'te
    // "primary guild" alanını göndermiyor. Sonuç: etiket bırakılmış ama rol
    // duruyordu (binlerce kullanıcıda yaşandı). Bunu güvenlik ağı olarak
    // 10 dakikada bir çalıştırır: etiket yok → rol kalkar (eger rolu varsa).
    // Ağır değil: tek seferlik member fetch + sadece farklı olanlara dokunma.
    const PERIYOT_MS = 10 * 60_000;
    const periyodikTara = async () => {
      try {
        await rolDurumlariniSenkron(client, db, logger, config, rolId);
      } catch (error) {
        logger.warn(`Periyodik rol taraması başarısız: ${error.message}`);
      }
    };
    setInterval(periyodikTara, PERIYOT_MS).unref?.();
    logger.info(`Periyodik rol senkronu açık (${PERIYOT_MS / 60000} dakikada bir).`);
  }

  // ---- kozmetik duyurusu ----
  // "Yol Silindiri" rolü olanlara kendi pelerin/elitralarını çizebileceklerini
  // haber ver. Şimdilik yalnız sahibe gider; YIKIM_DM_ROLE=1 olunca rol
  // sahiplerine de gönderilir.
  await duyuruGonder();
}

try {
  const botToken = resolveToken(config);
  client.login(botToken).catch((error) => {
    logger.error(`Bot giriş hatası: ${error.message}`);
    process.exit(1);
  });
} catch (error) {
  logger.error(`Token hatası: ${error.message}`);
  process.exit(1);
}
