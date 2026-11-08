const { SlashCommandBuilder } = require('discord.js');
const { rejectUnauthorizedGuild } = require('../utils/security');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Botun ping değerini gösterir.'),

  async execute(interaction, client, db, logger, getCache, BaseEmbed, config) {
    const guildCheck = rejectUnauthorizedGuild(interaction);
    if (!guildCheck.allowed) {
      await interaction.reply({ content: guildCheck.message, ephemeral: true });
      return;
    }

    const embed = BaseEmbed()
      .setTitle('🏓 Pong!')
      .setDescription(`**Bot Gecikmesi:** ${client.ws.ping}ms`)
      .setColor('#00ff00');

    await interaction.reply({ embeds: [embed] });
  },
};
