const mineflayer = require("mineflayer");

 for (let i = 0; i < numBots; i++) {
    botConfigs.push({
      host: "localhost"
      port: "53187",
      version: "1.16.5",
      username: ярик лох${i + 1}
    });
  }

  const bots = [];

  botConfigs.forEach((config, index) => {
    setTimeout(() => {
      const bot = mineflayer.createBot(config)};
    
      bot.on("login", () => {
        console.log(Bot${index + 1} logged in)};
      });

 bots.push(bot);
    }, 5000 * index); 
     

let { username } = bot.nearestEntity(({ type }) => type === 'player')

bot.chat('username лох!')
createBots(5);
