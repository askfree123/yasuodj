const { MessageEmbed } = require('discord.js');
const { QueryType } = require('discord-player');

module.exports = {
    name: 'search',
    aliases: ['sh'],
    utilisation: '{prefix}search [song name]',
    voiceChannel: true,

    async execute(client, message, args) {
        if (!args[0]) return message.channel.send(`Coloca uma busca válida, se nao fica dificil ${message.author}... quer tentar novamente ? ❌`);

        const res = await player.search(args.join(' '), {
            requestedBy: message.member,
            searchEngine: QueryType.AUTO
        });

        if (!res || !res.tracks.length) return message.channel.send(`Não consegui achar nada ${message.author}... quer tentar novamente ? ❌`);

        const queue = await player.createQueue(message.guild, {
            metadata: message.channel
        });

        const embed = new MessageEmbed();

        embed.setColor('RED');
        embed.setAuthor(`Resultados para ${args.join(' ')}`, client.user.displayAvatarURL({ size: 1024, dynamic: true }));

        const maxTracks = res.tracks.slice(0, 10);

        embed.setDescription(`${maxTracks.map((track, i) => `**${i + 1}**. ${track.title} | ${track.author}`).join('\n')}\n\nSelecione sua escolha **1** e **${maxTracks.length}** ou **cancele** ⬇️`);

        embed.setTimestamp();
        embed.setFooter('Musica em primeiro lugar - Developer SyonDev ❤️', message.author.avatarURL({ dynamic: true }));

        message.channel.send({ embeds: [embed] });

        const collector = message.channel.createMessageCollector({
            time: 15000,
            errors: ['time'],
            filter: m => m.author.id === message.author.id
        });

        collector.on('collect', async (query) => {
            if (query.content.toLowerCase() === 'cancel') return message.channel.send(`Busca cancelada ✅`) && collector.stop();

            const value = parseInt(query.content);

            if (!value || value <= 0 || value > maxTracks.length) return message.channel.send(`É invalido, tente um valor diferente **1** e **${maxTracks.length}** ou **cancele**... quer tentar novamente ? ❌`);

            collector.stop();

            try {
                if (!queue.connection) await queue.connect(message.member.voice.channel);
            } catch {
                await player.deleteQueue(message.guild.id);
                return message.channel.send(`Não consigo entrar nesse canal de voz ${message.author}... quer tentar novamente ? ❌`);
            }

            await message.channel.send(`Estou pesquisando para voce.. 🎧`);

            queue.addTrack(res.tracks[query.content - 1]);

            if (!queue.playing) await queue.play();
        });

        collector.on('end', (msg, reason) => {
            if (reason === 'time') return message.channel.send(`Deu o tempo de pesquisa ${message.author}... quer tentar novamente ? ❌`);
        });
    },
};