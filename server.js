// import npm files
const env = require('node-env-file');
const commando = require('discord.js-commando');

// Initiate Discord client
const bot = new commando.Client({
    commandPrefix: '.'
});;

// initiate env file
env('./.env');

const PORT = process.env.PORT;

bot.registry.registerGroup('trivia', 'Trivia');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.login(process.env.TOKEN);

console.log('logged on');