module.exports = async (client) => {
    console.log(`Consegui logar! ${client.user.username}\n-> estou pronta ${client.guilds.cache.size} usando força total ${client.users.cache.size} membros`);

    client.user.setActivity(client.config.app.playing);
};