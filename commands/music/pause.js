module.exports = {
    name: 'pause',
    aliases: [],
    utilisation: '{prefix}pause',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`Não estou tocando nada no momento ${message.author}... quer tentar novamente ? ❌`);

        const success = queue.setPaused(true);

        return message.channel.send(success ? `Musica atual ${queue.current.title} foi pausada ✅` : `Deu errado ${message.author}... quer tentar novamente ? ❌`);
    },
};