require('dotenv').config();

const bot_name = process.env.BOT_NAME;
const bot_token = process.env.BOT_TOKEN;

module.exports = {
    bot_name,
    bot_token
};