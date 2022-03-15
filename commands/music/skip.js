module.exports = {
    name: 'skip',
    aliases: ['sk'],
    utilisation: '{prefix}skip',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Não estou tocando nada no momento ${message.author}... quer tentar novamente ? ❌`);

        const success = queue.skip();

        return message.channel.send(success ? `A musica que estava tocando ${queue.current.title} foi pulada ✅` : `Problemas roboticos encontrados ${message.author}... quer tentar novamente ? ❌`);
    },
};