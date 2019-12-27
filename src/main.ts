import Discord from "discord.js";
import { token } from "../credentials";

function InitialiseBot(callback: Function) {
  const client = new Discord.Client();

  client.on("ready", () => {
    callback(client);
  });

  client.login(token);

  return client;
}

function MessageReceivedHandler(message: Discord.Message) {
  console.log(message);
}

export { InitialiseBot, MessageReceivedHandler };
