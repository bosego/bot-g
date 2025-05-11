const { Telegraf } = require('telegraf');
const TonWeb = require('tonweb');

// Инициализация TON API
const tonweb = new TonWeb(new TonWeb.HttpProvider('https://toncenter.com/api/v2/jsonRPC')); 

// Токен Telegram-бота
const bot = new Telegraf('Y2200993779:AAF-UkIQjh66kFzY3lCAel4PKvW4SXexrVA');

// Адрес твоего смарт-контракта
const contractAddress = '0QBwe6Suus0noEtPvbDe-bJkgtqr9PH2juttqqeg-yaSZTKs';

bot.command('mine', async (ctx) => {
    try {
        // Отправка транзакции для майнинга
        const result = await tonweb.sendTransaction({
            address: contractAddress,
            amount: 0.01 * 1e9, // Транзакция для майнинга (пример)
            payload: 'mine'
        });

        ctx.reply('🛠️ Майнинг запущен! Проверяйте баланс.');
    } catch (error) {
        ctx.reply('⚠️ Ошибка майнинга: ' + error.message);
    }
});

bot.command('balance', async (ctx) => {
    try {
        const balance = await tonweb.getBalance(contractAddress);
        ctx.reply(`💰 Баланс контракта: ${balance / 1e9} TON`);
    } catch (error) {
        ctx.reply('⚠️ Ошибка получения баланса.');
    }
});

bot.launch();
console.log('Бот связан с TON!');
