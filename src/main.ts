import Discord from "discord.js";
import { token, command_prefix } from "../config";
import { LOG_LEVEL, Log } from "./Common";
import { HandleCommand, BuildCommandDatabase } from "./CommandHandler";

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

  BuildCommandDatabase();

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

    const args = message.content
      .substr(message.content.indexOf(">") + 1)
      .trim() // removes excess whitespace
      .replace(/  +/g, " ") // merges multiple spaces
      .split(" "); // splits the command up into args

    if (mention === client.user.id)
      HandleCommand(message, args[0], args.slice(1));
  }

  if (message.content.startsWith(command_prefix)) {
    const args = message.content
      .substr(command_prefix.length)
      .trim() // removes excess whitespace
      .replace(/  +/g, " ") // merges multiple spaces
      .split(" "); // splits the command up into args

    HandleCommand(message, args[0], args.slice(1));
  }
}

export { InitialiseBot, MessageReceivedHandler };
