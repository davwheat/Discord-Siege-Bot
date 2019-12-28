import Discord from "discord.js";
import { token } from "../credentials";

function InitialiseBot(callback: Function) {
  // @ts-ignore - user config option, so evaluation will vary
  if (token === `Replace this with your token!`)
    console.log("You haven't set your token! Read the readme.");

  const client = new Discord.Client();

  client.on("ready", () => {
    callback(client);
  });

  client.login(token);

  return client;
}

function MessageReceivedHandler(
  message: Discord.Message,
  client: Discord.Client
) {
  if ((message.author.id == client.user.id)) return;

  message.delete();
  message.reply("Shush. I'm working here!");
}

export { InitialiseBot, MessageReceivedHandler };
