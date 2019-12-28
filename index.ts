import { Client } from "discord.js";
import { InitialiseBot, MessageReceivedHandler } from "./src/main";
import { Log, LOG_LEVEL } from "./src/Common";

Log("Initialising bot", LOG_LEVEL.INFO);

InitialiseBot(OnBotInitialised);

function OnBotInitialised(client: Client) {
  Log("Bot initialised and ready!", LOG_LEVEL.INFO);

  client.on("message", msg => {
    MessageReceivedHandler(msg, client);
  });
}
