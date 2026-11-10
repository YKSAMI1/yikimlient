// /duyuru <metin> — "Yol Silindiri" rolü olan HERKESE DM + sohbet duyurusu.
//
// NEDEN: kozmetik/kullanıcı duyurularını sunucudaki herkese ulaştırmak için.
// Bu komut YALNIZ sunucu sahibinde (YIKIM_ADMIN_ID) çalışır — herkes yanlışlıkla
// toplu DM atamasın. Kasma: Discord'un DM sınırına (yaklaşık 50 mesaj/sn) takılmayalım
// diye gönderimler 4'erli gruplar hâlinde, aralarında bekleme ile yapılır; kapanmış
// DM'li kullanıcılar sessizce sayılır (hata akışı durmaz).

const { SlashCommandBuilder } = require('discord.js');

/** Kullanıcıya DM at (açmamışsa hata döner — sayılması yeterli). */
async function dmGonder(user, metin, embed) {
  try {
    await user.send({ content: metin, embeds: embed ? [embed] : [] });
    return true;
  } catch {
    return false;
  }
}

module.exports = {
  data: new SlashCommandBuilder()
    .setName('duyuru')
    .setDescription('Sunucudaki herkese (DM + sohbet) duyuru gönderir — yalnız sahip.')
    .addStringOption((option) =>
      option
        .setName('metin')
        .setDescription('Gönderilecek mesaj (YouTube/Bağlantı kullanabilirsin)')
        .setRequired(true)
        .setMaxLength(1800)
    )
    .addStringOption((option) =>
      option
        .setName('baslik')
        .setDescription('Embed başlığı (isteğe bağlı)')
        .setRequired(false)
        .setMaxLength(200)
    )
    .addIntegerOption((option) =>
      option
        .setName('kanal')
        .setDescription('Ayrıca bir kanalda paylaşılsın mı? 1 = evet')
        .setRequired(false)
        .addChoices(
          { name: 'Evet — duyuru kanalına da yaz', value: 1 },
          { name: 'Hayır — sadece DM', value: 0 }
        )
    ),

  async execute(interaction, client, db, logger, getCache, BaseEmbed, config) {
    const sahipId = (process.env.YIKIM_ADMIN_ID || '').trim();
    // DM'den de çalışsın (sahip bot'a DM'den yazabilsin)
    const sahipMi = !!sahipId && interaction.user.id === sahipId;
    if (!sahipMi) {
      await interaction.reply({
        content: '🚫 Bu komut yalnız sunucu sahibinde çalışır.',
        ephemeral: true,
      });
      return;
    }

    const metin = interaction.options.getString('metin', true).trim();
    const baslik = interaction.options.getString('baslik')?.trim();
    const kanalDahi = interaction.options.getInteger('kanal') === 1;

    if (!metin) {
      await interaction.reply({ content: '❌ Metin boş olamaz.', ephemeral: true });
      return;
    }

    await interaction.deferReply({ ephemeral: true });

    // 1) hedef liste: sunucudaki tüm insan üyeler (botlar hariç)
    let uyeler;
    try {
      uyeler = await interaction.guild?.members.fetch();
    } catch (error) {
      await interaction.editReply({
        content: `❌ Üye listesi okunamadı: ${error.message}`,
      });
      return;
    }
    if (!uyeler) {
      await interaction.editReply({ content: '❌ Sunucu bulunamadı (sunucuda çalıştır).' });
      return;
    }

    const hedefler = [...uyeler.values()].filter((u) => !u.user?.bot);
    if (hedefler.length === 0) {
      await interaction.editReply({ content: '❌ Gönderilecek üye yok.' });
      return;
    }

    await interaction.editReply(
      `📨 Gönderim başlıyor — ${hedefler.length} kişiye DM atılacak.` +
        ' Bu işlem biraz sürer, bitince tekrar yazacağım.'
    );

    // 2) embed: başlık + metin + YIKIM imzası
    const embed = BaseEmbed()
      .setColor('#ff7a18')
      .setAuthor({
        name: 'YIKIM Duyuru',
        iconURL: client.user?.displayAvatarURL() || undefined,
      })
      .setDescription(metin);
    if (baslik) embed.setTitle(baslik);
    embed.setFooter({ text: 'YIKIM SMP · YIKIMLient' });

    // 3) gönderim: 4'erli + 400 ms bekleme (Discord DM sınırına takılmamak için)
    let tamam = 0;
    let kapanmis = 0;
    const siralar = [];
    for (const uye of hedefler) {
      siralar.push(uye.user);
      if (siralar.length >= 4) {
        const sonuc = await Promise.all(siralar.map((u) => dmGonder(u, '', embed)));
        tamam += sonuc.filter(Boolean).length;
        kapanmis += sonuc.filter((r) => !r).length;
        siralar.length = 0;
        await new Promise((r) => setTimeout(r, 400));
      }
    }
    if (siralar.length > 0) {
      const sonuc = await Promise.all(siralar.map((u) => dmGonder(u, '', embed)));
      tamam += sonuc.filter(Boolean).length;
      kapanmis += sonuc.filter((r) => !r).length;
    }

    // 4) isteğe bağlı: duyuru kanalına da paylaş
    let kanalYazildi = false;
    if (kanalDahi && config.guild?.channel) {
      try {
        const guild = getCache({ cacheType: 'Guild', id: config.guild.id });
        const kanal = getCache({ cacheType: 'Channel', id: config.guild.channel, guild });
        await kanal.send({ content: baslik || '📢 YIKIM duyuru', embeds: [embed] });
        kanalYazildi = true;
      } catch (error) {
        logger.warn(`Duyuru kanalına yazılamadı: ${error.message}`);
      }
    }

    logger.success(
      `Duyuru: ${tamam} kişiye DM gitti, ${kapanmis} kapalı DM.` +
        (kanalYazildi ? ' Kanalda paylaşıldı.' : '')
    );

    await interaction.editReply(
      `✅ Duyuru tamamlandı.\n` +
        `• DM giden: **${tamam}**\n` +
        `• Kapalı DM (atlanan): ${kapanmis}\n` +
        `• Toplam hedef: ${hedefler.length}\n` +
        (kanalYazildi ? '• Duyuru kanalına da paylaşıldı ✅' : '')
    );
  },
};
