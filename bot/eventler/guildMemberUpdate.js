const {
  Colors,
  userMention,
} = require('discord.js');
const { rolDurumuBildir } = require('../utils/rol-senkron');
const { etiketKarari } = require('../utils/etiket-karar');
const {
  isUserOnCooldown,
  isAllowedGuild,
  withOperationLimit,
} = require('../utils/security');

/**
 * Etiket (tag) → "Yol Silindiri" rolü senkronu.
 *
 * KURAL: Etiket varsa rol verilir, etiket bırakıldığı AN rol kaldırılır.
 * Rol kaldırma hiçbir yerel kayda ("base") bağlı DEĞİLDİR: bot yeniden
 * kurulsa, veritabanı silinse veya rol elle verilmiş olsa bile etiket yoksa
 * rol gider. (Eski kod `base` kaydı yoksa erken çıkıyordu — sahibin yaşadığı
 * "etiketi bıraktım ama rolüm kaldı" hatasının kök nedeni.)
 */
module.exports = {
  name: 'raw',
  once: false,
  async execute(client, db, logger, getCache, BaseEmbed, config, pkg) {
    const karar = etiketKarari(pkg, config.guild.id, config.guild.role);
    if (!karar) return;
    // Yalnız kendi sunucumuzdaki güncellemeler. Başka sunucuda etiket
    // bırakılması bizim rolümüzü etkilememeli.
    if (!karar.bizimSunucu) return;

    const { userId, etiketVar, rolVar } = karar;

    let guild;
    let channel = null;
    let role = null;
    let member = null;
    try {
      guild = getCache({ cacheType: 'Guild', id: config.guild.id });
      if (!isAllowedGuild(guild.id)) {
        logger.warn(`Yetkisiz sunucu erişimi engellendi: ${guild.id}`);
        return;
      }
      role = getCache({ cacheType: 'Role', id: config.guild.role, guild });
    } catch (error) {
      logger.error('Rol/sunucu okunamadı: ' + error.message);
      return;
    }

    // ---- 1) ROL SENKRONU (mesajdan bağımsız, bekleme kuyruğuna takılmaz) ----
    if (etiketVar !== rolVar) {
      try {
        member = guild.members.cache.get(userId)
          || (await guild.members.fetch({ user: userId, cache: true }));
      } catch (error) {
        logger.error(`Üye alınamadı: ${userId} - ${error.message}`);
        member = null;
      }

      if (member) {
        try {
          if (etiketVar) {
            await member.roles.add(role.id, 'YIKIM etiketi alındı');
            logger.info(`Rol verildi: ${member.user.tag}`);
          } else {
            await member.roles.remove(role.id, 'YIKIM etiketi bırakıldı');
            logger.info(`Rol kaldırıldı: ${member.user.tag}`);
          }
        } catch (error) {
          logger.error(`Rol ${etiketVar ? 'verilirken' : 'kaldırılırken'} hata: ${error.message}`);
        }
      }
    }

    // ---- 2) API'ye GERÇEK durumu bildir ----
    // Sunucu yetkisi etiketin kendisidir; rol ekleme izin hatasıyla
    // başarısız olsa bile çizim kapısı etikete göre kapanır/açılır.
    await rolDurumuBildir(userId, etiketVar, db, logger);

    // ---- 3) Duyuru mesajları (hız sınırına tabi) ----
    if (isUserOnCooldown(userId)) return;

    const sonuc = await withOperationLimit(async () => {
      try {
        channel = getCache({ cacheType: 'Channel', id: config.guild.channel, guild });
      } catch (error) {
        logger.error('Duyuru kanalı okunamadı: ' + error.message);
        return;
      }

      if (!member) {
        try {
          member = guild.members.cache.get(userId)
            || (await guild.members.fetch({ user: userId, cache: true }));
        } catch (error) {
          logger.error(`Üye bulunamadı: ${userId} - ${error.message}`);
          return;
        }
      }

      const badge = pkg.d.user?.primary_guild?.badge;
      const badgeId = badge && typeof badge === 'object' ? badge.id : badge;
      const badgeImage = badgeId
        ? `https://cdn.discordapp.com/clan-badges/${guild.id}/${badgeId}.png?size=256`
        : null;

      if (etiketVar) {
        // Aynı etiket için ikinci kez hoş geldin mesajı atma.
        if (db.has(`base.${userId}`)) return;
        db.set(`base.${userId}`, Date.now());

        const embed = BaseEmbed()
          .setAuthor({
            name: `Hoşgeldin ${member.user.displayName}!`,
            iconURL: member.displayAvatarURL(),
          })
          .setTitle('Bizi Desteklediğin İçin Teşekkürler!')
          .setDescription(
            "> Sunucumuzun etiketini (tag'ini) aldığın için teşekkürler! Artık topluluğumuzu temsil ediyorsun. Bu etiketi taşıdığın sürece bu özel role sahip olacaksın."
          );
        if (badgeImage) embed.setThumbnail(badgeImage);

        await channel?.send({ content: userMention(userId), embeds: [embed] });
      } else {
        // Etiket yok: rol zaten yukarıda kaldırıldı. Veda mesajı yalnız
        // gerçekten etiketliyken ayrılanlara gider (rol sahibi olması yeter).
        const etiketliydi = db.has(`base.${userId}`) || rolVar;
        db.delete(`base.${userId}`);
        if (!etiketliydi) return;

        const embed = BaseEmbed()
          .setColor(Colors.Red)
          .setAuthor({
            name: `Görüşürüz ${member.user.displayName}!`,
            iconURL: member.displayAvatarURL(),
          })
          .setTitle('Seni Özleyeceğiz.')
          .setDescription(
            "> Sunucu etiketini ismindeki kaldırdığın için temsilci rolün de kaldırıldı. Yeniden topluluğu temsil etmek istersen, etiketi ismine eklemen yeterli!"
          );
        if (badgeImage) embed.setThumbnail(badgeImage);

        await channel?.send({ content: userMention(userId), embeds: [embed] });
      }
    });

    if (sonuc === null) {
      logger.warn(`İşlem kuyruğu dolu, ${userId} için duyuru atlandı (rol senkronu yapıldı).`);
    }
  },
};
