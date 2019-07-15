const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("600372724346650633")
setInterval(function() {
channel.send(`Khaled tolu`);
}, 30)
})

client.login(process.env.BOT_TOKEN);