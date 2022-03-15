player.on('error', (queue, error) => {
    console.log(`**Erro... A lista ta com problema...** ${error.message}`);
});

player.on('connectionError', (queue, error) => {
    console.log(`**Erro... Não consegui conectar** ${error.message}`);
});

player.on('trackStart', (queue, track) => {
    if (!client.config.opt.loopMessage && queue.repeatMode !== 0) return;
    queue.metadata.send(`**Comecei a tocar ${track.title} em **${queue.connection.channel.name}** 🎧`);
});

player.on('trackAdd', (queue, track) => {
    queue.metadata.send(`**Musica ${track.title} ? Ok! adicionei na lista pra voce** ✅`);
});

player.on('botDisconnect', (queue) => {
    queue.metadata.send('**Fui desconectada manualmente do canal de voz... vou limpar a fila, tudo bem?** ❌');
});

player.on('channelEmpty', (queue) => {
    queue.metadata.send('**Me deixaram sozinha? Okay! Si é assim que querem, estou saindo.** ❌');
});

player.on('queueEnd', (queue) => {
    queue.metadata.send('**Terminei de tocar a lista toda... deu trabalho em!** ✅');
});