const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("server")
    .setDescription("Replies with server info!"),
  async execute(interaction) {
    await interaction.reply(
      `This server's name is ${interaction.guild.name}\nNumber of members: ${interaction.guild.memberCount}`
    );
  },
};
