module.exports = {
    name: 'resume',
    aliases: ['rs'],
    utilisation: '{prefix}resume',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`Não estou tocando nada no momento ${message.author}... quer tentar novamente ? ❌`);

        const success = queue.setPaused(false);

        return message.channel.send(success ? `A musica Atual ${queue.current.title} voltou a tocar ✅` : `Deu erro ${message.author}... quer tentar novamente? ❌`);
    },
};