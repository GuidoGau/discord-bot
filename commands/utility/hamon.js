const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hamon')
		.setDescription('Use hamon'),
	async execute(interaction) {
		await interaction.reply('OVERDRIVE!');
	},
};