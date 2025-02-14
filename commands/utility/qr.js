const { SlashCommandBuilder, SlashCommandStringOption } = require('discord.js');
const {isValidUrl} = require('../../util/UrlValidator');

module.exports = {
    
	data: new SlashCommandBuilder()
		.setName('qr')
		.setDescription('Generates a QR code from a link')
        .addStringOption(option => option
            .setName('link')
            .setDescription('The link you want to generate a QR code for')
            .setRequired(true))
            .addNumberOption(option => option
                .setName('size')
                .setDescription('The size of the QR code (in pixels)')
                .setMinValue(100)
                .setMaxValue(500)),
	async execute(interaction) {
		const link = interaction.options.getString('link');
        const size = interaction.options.getNumber('size');

        let url;
        let qrCodeUrl;

        if(!isValidUrl(link)){
            return interaction.reply('Invalid link provided. Please provide a valid URL.');
        }

        if(size){
            qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(link)}`;
        } else {
            qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(link)}`;
        }


        await interaction.reply({files: [{ attachment: qrCodeUrl, name: 'qrcode.png' }] });
	},
};