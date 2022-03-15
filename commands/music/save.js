module.exports = {
    name: 'save',
    aliases: ['sv'],
    utilisation: '{prefix}save',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Não estou tocando nada no momento ${message.author}... quer tentar novamente ? ❌`);

        message.author.send(`Salvei a musica para voce ${queue.current.title} | ${queue.current.author} no servidor ${message.guild.name} ✅`).then(() => {
            message.channel.send(`Eu acabei de enviar o nome da musica no seu privado ✅`);
        }).catch(error => {
            message.channel.send(`Não consegui te enviar no privado, será que ta bloqueado seu pv? ${message.author}... quer tentar novamente ? ❌`);
        });
    },
};