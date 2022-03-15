const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    aliases: ['h'],
    showHelp: false,
    utilisation: '{prefix}help',

    execute(client, message, args) {
        const embed = new MessageEmbed();

        embed.setColor('RED');
        embed.setAuthor(client.user.username, client.user.displayAvatarURL({ size: 1024, dynamic: true }));

        const commands = client.commands.filter(x => x.showHelp !== false);

        embed.setDescription('Algumas informaçoes para te ajudar! Caso necessário, entre em contato com o desenvolvedor. Gosta do BOT? Ajude-o a manter-lo funcional. Aceitamos quaisquer valores em Donate. [Servidor de SyonDev/Server](https://discord.io/youkais).\nBoa musica a todos.');
        embed.addField(`Enabled - ${commands.size}`, commands.map(x => `\`${x.name}${x.aliases[0] ? ` (${x.aliases.map(y => y).join(', ')})\`` : '\`'}`).join(' | '));

        embed.setTimestamp();
        embed.setFooter('Musica em primeiro lugar - Developer SyonDev ❤️', message.author.avatarURL({ dynamic: true }));

        message.channel.send({ embeds: [embed] });
    },
};