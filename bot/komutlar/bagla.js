// /bagla <kod> — launcher'ın gösterdiği kodu Discord hesabına bağlar.
//
// Hem sunucuda hem DM'de çalışır: kod gizli kalabilsin diye DM önerilir.
// Kullanıcı "Yol Silindiri" rolüne sahipse bu bilgi API'ye iletilir.

const { SlashCommandBuilder } = require('discord.js');
const api = require('../utils/api');

const ROL_YOL_ID = process.env.ROLE_YOL_ID || '';

function rolYolVarMi(member) {
  if (!ROL_YOL_ID || !member) return false;
  return member.roles?.cache?.has(ROL_YOL_ID) ?? false;
}

module.exports = {
  // DM'de de kullanılabilir (index.js bu bayrağa bakar)
  dmAllowed: true,

  data: new SlashCommandBuilder()
    .setName('bagla')
    .setDescription('Launcher kodunu Discord hesabına bağlar.')
    .addStringOption((option) =>
      option
        .setName('kod')
        .setDescription('Launcher ekranındaki 8 karakterlik kod')
        .setRequired(true)
        .setMinLength(6)
        .setMaxLength(12)
    ),

  async execute(interaction, client, db, logger, getCache, BaseEmbed, config) {
    const kod = interaction.options.getString('kod', true).trim().toUpperCase();

    if (!api.hazirMi()) {
      await interaction.reply({
        content:
          'Bağlama servisi şu an yapılandırılmamış. Sunucu sahibine haber ver.',
        ephemeral: true,
      });
      return;
    }

    await interaction.deferReply({ ephemeral: true });

    const member = interaction.guildId
      ? await interaction.guild?.members.fetch(interaction.user.id).catch(() => null)
      : null;

    const sonuc = await api.bagla({
      kod,
      discordId: interaction.user.id,
      discordAd: interaction.user.username,
      rolYol: rolYolVarMi(member),
    });

    if (sonuc.ok) {
      await interaction.editReply({
        content:
          '✅ Bağlama başarılı! Artık YIKIMLient hesabın bu Discord hesabına bağlı.\n' +
          'Launcher\'a dönüp "Bağlantıyı kontrol et" butonuna bas.',
      });
      logger.success(`Bağlama: ${interaction.user.tag} (${kod})`);
      return;
    }

    const mesajlar = {
      404: '❌ Kod bulunamadı. Launcher\'daki kodu doğru girdiğinden emin ol.',
      409: '⚠️ Bu kod daha önce kullanılmış. Launcher\'dan yeni kod al.',
      410: '⌛ Kodun süresi doldu (10 dakika). Launcher\'dan yeni kod al.',
      429: '🚫 Bu Discord hesabına bağlı çok fazla cracked hesap var. Limit için sunucu sahibine başvur.',
      403: '🚫 Bu işlem için yetkin yok.',
    };

    await interaction.editReply({
      content:
        mesajlar[sonuc.durum] ||
        `❌ Bağlama başarısız: ${sonuc.hata || 'bilinmeyen hata'}`,
    });
  },
};
