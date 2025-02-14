const { SlashCommandBuilder, SlashCommandStringOption } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('qr')
		.setDescription('Generates a QR code from a link')
        .addStringOption(option => option
            .setName('link')
            .setDescription('The link you want to generate a QR code for')
            .setRequired(true)),
	async execute(interaction) {
		const link = interaction.options.getString('link');
        
        console.log(link); 

        const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(link)}`;

        await interaction.reply({files: [{ attachment: qrCodeUrl, name: 'qrcode.png' }] });
	},
};