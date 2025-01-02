const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TELEGRAM_TOKEN;
const chatId = process.env.TELEGRAM_ID_USER;
const name = process.env.USER_NAME;

const bot = new TelegramBot(token);

const message = `Workflow executat correctament després de l'últim commit. Salutacions ${name}`;

bot.sendMessage(chatId, message)
   .then(() => console.log("Missatge enviat."))
   .catch((err) => console.error(err));
