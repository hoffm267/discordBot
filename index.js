const { Client, Intents } = require("discord.js");
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const { token } = require("./config.json");

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  if (commandName === "ping") {
    await interaction.reply("Pong!");
  } else if (commandName === "server") {
    await interaction.reply(
      `This server's name is ${interaction.guild.name}\nNumber of members: ${interaction.guild.memberCount}`
    );
  } else if (commandName === "user") {
    await interaction.reply(`User info: ${interaction.user.tag}`);
  }
});

client.login(token);
