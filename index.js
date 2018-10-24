const { CommandoClient } = require('discord.js-commando');
const path = require('path');


const client = new CommandoClient({
    commandPrefix: 'lotus!',
    owner: '407141500556673044',
    disableEveryone: true
});

    client.registry
        .registerDefaultTypes()
        .registerGroups([
            ['core', 'CoreCmds']
        ])
        .registerDefaultGroups()
        .registerDefaultCommands({
            help: false
        })
        .registerCommandsIn(path.join(__dirname, 'commands'));

    client.on('ready', () => {
        console.log('Logged in!');
        client.user.setActivity('game');
    });

client.login('NDk0NTM0ODM3NTI5NjA4MjM0.DrJABQ.bWXW8vC3dkgDVzgpKq-YEJQh-RA');