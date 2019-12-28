import { Client } from "discord.js";

import { InitialiseBot, MessageReceivedHandler } from "./src/main";

console.log("Signing in...");

InitialiseBot(OnBotInitialised);

function OnBotInitialised(client: Client) {
  console.log("Bot initialised and ready!");

  client.on("message", msg => {
    MessageReceivedHandler(msg, client);
  });
}
