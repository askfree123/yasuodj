module.exports = (client, int) => {
    if (!int.isButton()) return;

    const queue = player.getQueue(int.guildId);

    switch (int.customId) {
        case 'saveTrack': {
            if (!queue || !queue.playing) return int.reply({ content: `Não estou tocando nada no momento... quer tentar novamente ? ❌`, ephemeral: true, components: [] });

            int.member.send(`Voce salvou a musica ${queue.current.title} | ${queue.current.author} no servidor ${int.member.guild.name} ✅`).then(() => {
                return int.reply({ content: `Eu enviei o nome da musica no seu privado ✅`, ephemeral: true, components: [] });
            }).catch(error => {
                return int.reply({ content: `Não consegui lhe enviar no privado... quer tentar novamente ? ❌`, ephemeral: true, components: [] });
            });
        }
    }
};