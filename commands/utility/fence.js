const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('fence')
		.setDescription('This isn\'t the car!'),
	async execute(interaction) {
		const attachment = new AttachmentBuilder('https://drive.google.com/file/d/1EJ_2qCpmQOnY2oIZtjmT2SwujtPq7-Bo/view?usp=sharing');
		await interaction.reply({ files: [attachment] });
	},
};