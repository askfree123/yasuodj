const ms = require('ms');

module.exports = {
    name: 'ping',
    aliases: [],
    utilisation: '{prefix}ping',

    execute(client, message) {
        message.channel.send(`**Terminei de calcular... ${ms(Date.now() - client.ws.shards.first().lastPingTimestamp, { long: true })} de tempo de resposta e ${client.ws.ping} de ms** 🛰️`);
    },
};