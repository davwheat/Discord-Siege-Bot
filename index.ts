import { Client } from "discord.js";
import { InitialiseBot, MessageReceivedHandler } from "./src/main";
import { Log, LOG_LEVEL } from "./src/Common";
import { log_to_file } from "./config";
import { ensureDirSync } from "fs-extra";

const StartTimestamp = new Date();

if (log_to_file) {
  ensureDirSync(`./logs`);
  Log(`Welcome to R6Siege Bot!`, LOG_LEVEL.INFO);
  Log(`Log to file enabled.`, LOG_LEVEL.INFO);
}

Log("Initialising bot", LOG_LEVEL.INFO);

InitialiseBot(OnBotInitialised);

function OnBotInitialised(client: Client) {
  Log("Bot initialised and ready!", LOG_LEVEL.INFO);

  client.on("message", msg => {
    MessageReceivedHandler(msg, client);
  });
}

export { StartTimestamp };
