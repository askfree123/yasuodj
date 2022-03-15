module.exports = {
    app: {
        px: '&',
        token: 'NzgwODAwMTk2NDM4MTMwNjk4.X70W2Q.4Udo9i_xeKxtVcHdIsJbApwCLHU',
        playing: 'STATUS DO BOT'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
