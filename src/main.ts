import Discord from "discord.js";
import { token, command_prefix } from "../config";
import { LOG_LEVEL, Log } from "./Common";
import HandleCommand from "./CommandHandler";

function InitialiseBot(callback: Function) {
  // @ts-ignore - user config option, so evaluation will vary
  if (token === `Replace this with your token!`)
    Log("You haven't set your token! Read the readme.", LOG_LEVEL.ERROR);

  Log("Creating instance of client", LOG_LEVEL.DEBUG);
  const client = new Discord.Client();

  Log("Setting on ready callback", LOG_LEVEL.DEBUG);
  client.on("ready", () => {
    Log("On ready callback triggered", LOG_LEVEL.DEBUG);
    callback(client);
  });

  Log("Client logging in with token", LOG_LEVEL.DEBUG);
  client.login(token);

  return client;
}

function MessageReceivedHandler(
  message: Discord.Message,
  client: Discord.Client
) {
  Log("Message received!", LOG_LEVEL.DEBUG);
  if (message.author.bot) {
    Log("Ignoring message from bot", LOG_LEVEL.DEBUG);
    return;
  }

  // If mention prefix selected and message starts with mention of bot
  if (command_prefix === null && message.content.startsWith(`<@`)) {
    let mention = message.content.slice(2, message.content.indexOf(">"));

    // Remove ! from mention if there
    if (mention.startsWith("!")) mention = mention.substr(1);

    if (mention === client.user.id) HandleCommand(message);
  }

  if (message.content.startsWith(command_prefix)) {
    HandleCommand(message);
  }
}

export { InitialiseBot, MessageReceivedHandler };
