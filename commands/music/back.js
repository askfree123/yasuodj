module.exports = {
    name: 'back',
    aliases: ['previous'],
    utilisation: '{prefix}back',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Não estou tocando nada no momento ${message.author}... quer tentar novamente ? ❌`);

        if (!queue.previousTracks[1]) return message.channel.send(`Eu não estava tocando musica antes ${message.author}... quer tentar novamente ? ❌`);

        await queue.back();

        message.channel.send(`Pronto! estou tocando a musica **anterior** novamente ✅`);
    },
};