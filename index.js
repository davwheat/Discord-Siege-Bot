const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => {
  if (msg.content === "ping") {
    msg.reply("Pong!");
  }
});

client.login("NjYwMjE5Mzk1NDU2NDk5NzEz.XgZrXA.CC1T0jcEylxheqUAAcCOUfGTH0g");
