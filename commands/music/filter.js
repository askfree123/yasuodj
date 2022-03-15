module.exports = {
    name: 'filter',
    aliases: [],
    utilisation: '{prefix}filter [filter name]',
    voiceChannel: true,

    async execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Não esta tocando nada... ${message.author}... quer tentar novamente ? ❌`);

        const actualFilter = queue.getFiltersEnabled()[0];

        if (!args[0]) return message.channel.send(`Coloca um filtro válido! se não fica dificil... ${message.author}... quer tentar novamente ? ❌\n${actualFilter ? `Filter currently active ${actualFilter} (${client.config.app.px}filter ${actualFilter} to disable it).\n` : ''}`);

        const filters = [];

        queue.getFiltersEnabled().map(x => filters.push(x));
        queue.getFiltersDisabled().map(x => filters.push(x));

        const filter = filters.find((x) => x.toLowerCase() === args[0].toLowerCase());

        if (!filter) return message.channel.send(`Esse filtro não existe ${message.author}... quer tentar novamente ? ❌\n${actualFilter ? `Ja ativei esse filtro ${actualFilter}.\n` : ''}Olha essa lista de filtros disponiveis ${filters.map(x => `**${x}**`).join(', ')}.`);

        const filtersUpdated = {};

        filtersUpdated[filter] = queue.getFiltersEnabled().includes(filter) ? false : true;

        await queue.setFilters(filtersUpdated);

        message.channel.send(`O filtro ${filter} é agora **${queue.getFiltersEnabled().includes(filter) ? 'enabled' : 'disabled'}** ✅\n*Vale lembrar que quanto mais longa a musica, mais tempo eu ficarei lhe fazendo companhia.*`);
    },
};