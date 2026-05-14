const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user-server')
		.setDescription("Provides information about your server join date"),
	async execute(interaction) {
		// interaction.user is the object representing the User who ran the command
		// interaction.member is the GuildMember object, which represents the user in the specific guild
		await interaction.reply(`Hm? you joined this Discord server on ${interaction.member.joinedAt}.`);
	},
};