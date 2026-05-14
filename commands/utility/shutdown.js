const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('shutdown')
		.setDescription('Terminates the bot'),
	async execute(interaction) {
		if(interaction.user.id != '638968986746224640') return;
		else{
			const attachment = new AttachmentBuilder('media/image/knife.gif');
			const attachment2 = new AttachmentBuilder('media/image/dead.png');
			await interaction.reply('The secret of his Stand, The World, is time! It\'s a Stand that stops ti-');
			setTimeout(async () => {
				await interaction.editReply({ files: [attachment] });
				setTimeout(async () => {
					await interaction.editReply({ files: [attachment2] });
					process.exit();
				}, 4000)
			}, 1000)
		}
	},
};