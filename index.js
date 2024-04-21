const TelegramBot = require('node-telegram-bot-api');
const token = '6914028704:AAGQPWD03MX14GdqcZc82hTpqF0actaXvFo';
const bot = new TelegramBot(token, { polling: true });
let balanceMap = {};

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    if (!balanceMap[chatId]) {
        balanceMap[chatId] = 0;
    }
    const opts = {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Mine HFAS', callback_data: 'mine_hfas' }],
                [{ text: 'Balance', callback_data: 'view_balance' }]
            ]
        }
    };
    bot.sendMessage(chatId, 'Choose an option:', opts);
});

bot.on('callback_query', (callbackQuery) => {
    const chatId = callbackQuery.message.chat.id;
    
    if (callbackQuery.data === 'mine_hfas') {
        const numHfas = Math.floor(Math.random() * 5) + 1;
        balanceMap[chatId] += numHfas;
        bot.editMessageText(`HFAS mined: ${numHfas}\nBalance: ${balanceMap[chatId]} HFAS`, { chat_id: chatId, message_id: callbackQuery.message.message_id, reply_markup: {
            inline_keyboard: [
                [{ text: 'Mine HFAS', callback_data: 'mine_hfas' }],
                [{ text: 'Balance', callback_data: 'view_balance' }]
            ]
        }});
    } else if (callbackQuery.data === 'view_balance') {
        bot.editMessageText(`Balance: ${balanceMap[chatId]} HFAS`, { chat_id: chatId, message_id: callbackQuery.message.message_id, reply_markup: {
            inline_keyboard: [
                [{ text: 'Mine HFAS', callback_data: 'mine_hfas' }],
                [{ text: 'Balance', callback_data: 'view_balance' }]
            ]
        }});
    }
});
