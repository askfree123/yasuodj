const ms = require('ms');

module.exports = {
    name: 'seek',
    aliases: [],
    utilisation: '{prefix}seek [time]',
    voiceChannel: true,

    async execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Não estou tocando nada no momento ${message.author}... quer tentar novamente ? ❌`);

        const timeToMS = ms(args.join(' '));

        if (timeToMS >= queue.current.durationMS) return message.channel.send(`Esse tempo que voce indicou, é maior que o da musica ${message.author}... quer tentar novamente ? ❌\n*Tente algum valor valido como: **5s, 10s, 20 segundos, 1m**...*`);

        await queue.seek(timeToMS);

        message.channel.send(`Defini o tempo da musica atual **${ms(timeToMS, { long: true })}** ✅`);
    },
};