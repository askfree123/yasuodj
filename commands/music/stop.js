module.exports = {
    name: 'stop',
    aliases: ['dc'],
    utilisation: '{prefix}stop',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Não estou tocando nada no momento ${message.author}... quer tentar novamente ? ❌`);

        queue.destroy();

        message.channel.send(`Pausei a musica para voce, okay? ✅`);
    },
};