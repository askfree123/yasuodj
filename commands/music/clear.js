module.exports = {
    name: 'clear',
    aliases: ['cq'],
    utilisation: '{prefix}clear',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Não estou tocando nada no momento ${message.author}... quer tentar novamente ? ❌`);

        if (!queue.tracks[0]) return message.channel.send(`Não tem mais musicas a diante depois dessa ${message.author}... quer tentar novamente ? ❌`);

        await queue.clear();

        message.channel.send(`Dia de faxina! acabei de limpar a fila 🗑️`);
    },
};