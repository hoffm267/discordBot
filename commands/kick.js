const { Client, Intents, Permissions } = require("discord.js");
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const { token } = require("./config.json");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('kick')
        .setDescription('kicks user'),
    async execute(interaction) {
        // let mention = interaction.guild.users.array()[0];
        let kickPerms = interaction.memberPermissions.has(Permissions.KICK_MEMBERS);
        // console.log(kickPerms);
        

        await interaction.reply(
            console.log(kickPerms)
        );
    },
}