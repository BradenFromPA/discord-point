const Discord = require('discord.js');
const discordConfig = require('./config/discord')
const dbConnect = require('./db/db');

const client = new Discord.Client();
client.login(discordConfig.bot_token);

dbConnect();