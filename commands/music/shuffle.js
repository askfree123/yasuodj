module.exports = {
    name: 'shuffle',
    aliases: ['sh'],
    utilisation: '{prefix}shuffle',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Não estou tocando nada no momento ${message.author}... quer tentar novamente ? ❌`);

        if (!queue.tracks[0]) return message.channel.send(`Acabou as musicas da lista após essa atual ${message.author}... quer tentar novamente ? ❌`);

        await queue.shuffle();

        return message.channel.send(`Embaralhei a lista **${queue.tracks.length}** musicas ! ✅`);
    },
};