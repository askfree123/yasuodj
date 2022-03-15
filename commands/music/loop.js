const { QueueRepeatMode } = require('discord-player');

module.exports = {
    name: 'loop',
    aliases: ['lp', 'repeat'],
    utilisation: '{prefix}loop <queue>',
    voiceChannel: true,

    execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Não estou tocando nada no momento ${message.author}... quer tentar novamente ? ❌`);

        if (args.join('').toLowerCase() === 'queue') {
            if (queue.repeatMode === 1) return message.channel.send(`Você precisa primeiro me tirar de loop (${client.config.app.px}loop) ${message.author}... quer tentar novamente ? ❌`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.QUEUE : QueueRepeatMode.OFF);

            return message.channel.send(success ? `Modo de repetição **${queue.repeatMode === 0 ? 'Desabilitado' : 'Habilitado'}** Vou repetir a fila toda, okay? 🔁` : `Deu errado ${message.author}... quer tentar novamente ? ❌`);
        } else {
            if (queue.repeatMode === 2) return message.channel.send(`Precisa primeiro tirar a fila atual do loop (${client.config.app.px}loop queue) ${message.author}... quer tentar novamente? ? ❌`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.TRACK : QueueRepeatMode.OFF);

            return message.channel.send(success ? `Modo de repetição **${queue.repeatMode === 0 ? 'Desabilitado' : 'Habilitado'}** Eu irei repetir a musica atual pra você (Voce tambem pode repetir filas se preferir ) 🔂` : `Deu errado ${message.author}... quer tentar novamente ? ❌`);
        };
    },
};