const maxVol = client.config.opt.maxVol;

module.exports = {
    name: 'volume',
    aliases: ['vol'],
    utilisation: `{prefix}volume [1-${maxVol}]`,
    voiceChannel: true,

    execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Não estou tocando nada no momento ${message.author}... quer tentar novamente ? ❌`);

        const vol = parseInt(args[0]);

        if (!vol) return message.channel.send(`O volume atual é ${queue.volume} 🔊\n*Coloque um valor valido para mudar o volume **1** até **${maxVol}**.*`);

        if (queue.volume === vol) return message.channel.send(`Eu ja estou nesse volume atualmente ${message.author}... quer tentar novamente ? ❌`);

        if (vol < 0 || vol > maxVol) return message.channel.send(`O valor colocado não é valido, tente outro! **1** até **${maxVol}** ${message.author}... quer tentar novamente ? ❌`);

        const success = queue.setVolume(vol);

        return message.channel.send(success ? `Alterei o volume para **${vol}**/**${maxVol}**% 🔊` : `Deu problema nos fios ${message.author}... quer tentar novamente ? ❌`);
    },
};