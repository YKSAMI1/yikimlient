const {
  Colors,
  userMention,
} = require('discord.js');
const {
  isUserOnCooldown,
  isAllowedGuild,
  withOperationLimit,
} = require('../utils/security');

module.exports = {
  name: 'raw',
  once: false,
  async execute(client, db, logger, getCache, BaseEmbed, config, pkg) {
    if (pkg.t !== 'GUILD_MEMBER_UPDATE') return;

    const userId = pkg.d.user?.id;
    if (!userId) return;

    if (isUserOnCooldown(userId)) {
      return;
    }

    if (pkg.d.user?.primary_guild?.badge?.identity_enabled === false) {
      return db.set('base', {});
    }

    const result = await withOperationLimit(async () => {
      let guild, channel, role, member;

      try {
        guild = getCache({
          cacheType: 'Guild',
          id: config.guild.id,
        });

        if (!isAllowedGuild(guild.id)) {
          logger.warn(`Yetkisiz sunucu erişimi engellendi: ${guild.id}`);
          return;
        }

        channel = getCache({
          cacheType: 'Channel',
          id: config.guild.channel,
          guild,
        });

        role = getCache({
          cacheType: 'Role',
          id: config.guild.role,
          guild,
        });

        try {
          member = guild.members.cache.get(userId);
          if (!member) {
            member = await guild.members.fetch({
              user: userId,
              cache: true,
              force: false,
            });
          }
        } catch (error) {
          logger.error(`Member bulunamadı: ${userId} - ${error.message}`);
          return;
        }
      } catch (error) {
        logger.error('Cache yüklenemedi: ' + error.message);
        return;
      }

      const guildId = pkg.d.user?.primary_guild?.identity_guild_id;
      const badgeId = pkg.d.user?.primary_guild?.badge;
      const badgeImage = badgeId
        ? `https://cdn.discordapp.com/clan-badges/${guild?.id}/${badgeId}.png?size=256`
        : null;

      if (guildId === config.guild.id) {
        if (db.has(`base.${member?.id}`)) return;

        db.set(`base.${member?.id}`, Date.now());

        try {
          if (role?.id && member && !member.roles.cache.has(role.id)) {
            await member.roles.add(role.id);
          }
        } catch (error) {
          logger.error(`Rol verilirken hata: ${error.message}`);
        }

        try {
          const embed = BaseEmbed()
            .setAuthor({
              name: `Hoşgeldin ${member?.user.displayName}!`,
              iconURL: member?.displayAvatarURL(),
            })
            .setTitle('Bizi Desteklediğin İçin Teşekkürler!')
            .setDescription(
              "> Sunucumuzun etiketini (tag'ini)  aldığın için teşekkürler! Artık topluluğumuzu temsil ediyorsun. Bu etiketi taşıdığın sürece bu özel role sahip olacaksın."
            );

          if (badgeImage) {
            embed.setThumbnail(badgeImage);
          }

          await channel?.send({
            content: userMention(member?.id ?? ''),
            embeds: [embed],
          });
        } catch (error) {
          logger.error(`Hoşgeldin mesajı gönderilirken hata: ${error.message}`);
        }
      } else {
        if (!db.has(`base.${member?.id}`)) return;

        db.delete(`base.${member?.id}`);

        try {
          if (role?.id && member?.roles.cache.has(role.id)) {
            await member.roles.remove(role.id);
          }
        } catch (error) {
          logger.error(`Rol kaldırılırken hata: ${error.message}`);
        }

        try {
          const embed = BaseEmbed()
            .setColor(Colors.Red)
            .setAuthor({
              name: `Görüşürüz ${member?.user.displayName}!`,
              iconURL: member?.displayAvatarURL(),
            })
            .setTitle('Seni Özleyeceğiz.')
            .setDescription(
              '> Sunucu etiketini ismindeki kaldırdığın için temsilci rolün de kaldırıldı. Yeniden topluluğu temsil etmek istersen, etiketi ismine eklemen yeterli!'
            );

          if (badgeImage) {
            embed.setThumbnail(badgeImage);
          }

          await channel?.send({
            content: userMention(member?.id ?? ''),
            embeds: [embed],
          });
        } catch (error) {
          logger.error(`Veda mesajı gönderilirken hata: ${error.message}`);
        }
      }
    });

    if (result === null) {
      logger.warn(`İşlem kuyruğu dolu, ${userId} için event atlandı.`);
    }
  },
};
