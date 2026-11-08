// /sifirla <hesap> — hesabın bağlı olduğu Discord kullanıcısına DM ile
// tek seferlik kod gönderir. Kod launcher'daki "Şifremi unuttum" ekranına girilir.
//
// Güvenlik: kod yalnızca hesaba bağlı Discord kullanıcısına gider. Başka biri
// komutu çalıştırsa bile API "bu hesap başka bir Discord hesabına bağlı" der.

const { SlashCommandBuilder } = require('discord.js');
const api = require('../utils/api');

module.exports = {
  dmAllowed: true,

  data: new SlashCommandBuilder()
    .setName('sifirla')
    .setDescription('Şifreni unuttuysan DM ile tek seferlik kod al.')
    .addStringOption((option) =>
      option
        .setName('hesap')
        .setDescription('Minecraft kullanıcı adın')
        .setRequired(true)
        .setMinLength(2)
        .setMaxLength(32)
    ),

  async execute(interaction, client, db, logger, getCache, BaseEmbed, config) {
    const hesapAd = interaction.options.getString('hesap', true).trim();

    if (!api.hazirMi()) {
      await interaction.reply({
        content: 'Şifre servisi şu an yapılandırılmamış.',
        ephemeral: true,
      });
      return;
    }

    await interaction.deferReply({ ephemeral: true });

    const sonuc = await api.sifirlaKodIste({
      hesapAd,
      discordId: interaction.user.id,
    });

    if (!sonuc.ok || !sonuc.kod) {
      const mesajlar = {
        403: '🚫 Bu hesap başka bir Discord hesabına bağlı. Kendi hesabınsa sunucu sahibine başvur.',
        404: '❌ Bu isimde kayıtlı bir hesap bulunamadı.',
        409: '⚠️ Bu hesap bir Discord hesabına bağlı değil. Önce launcher\'dan bağla.',
      };
      await interaction.editReply({
        content:
          mesajlar[sonuc.durum] ||
          `❌ Kod istenemedi: ${sonuc.hata || 'bilinmeyen hata'}`,
      });
      return;
    }

    const dmMetni =
      `🔐 **YIKIMLient şifre kodu: \`${sonuc.kod}\`**\n\n` +
      'Bu kod 10 dakika geçerlidir ve **tek kullanımlıktır**.\n' +
      'Launcher → "Şifremi unuttum" ekranına gir.\n\n' +
      'Kodu kimseyle paylaşma. Bu kodu sen istemediysen görmezden gel.';

    try {
      await interaction.user.send(dmMetni);
    } catch (error) {
      // DM kapalıysa kodu genel kanala yazmayız (güvenlik).
      logger.warn(`DM gönderilemedi (${interaction.user.tag}): ${error.message}`);
      await interaction.editReply({
        content:
          '❌ Sana DM gönderemedim. Discord gizlilik ayarlarından "Sunucu üyelerinden DM" seçeneğini açıp tekrar dene.',
      });
      return;
    }

    await interaction.editReply({
      content: '📬 Kodu DM olarak gönderdim. Launcher\'a gir ve kullan.',
    });
    logger.info(`Şifre kodu gönderildi: ${interaction.user.tag} (${hesapAd})`);
  },
};
