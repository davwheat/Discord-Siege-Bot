import { Client } from "discord.js";

import { InitialiseBot, MessageReceivedHandler } from "./src/main";

InitialiseBot(OnBotInitialised);

function OnBotInitialised(client: Client) {
  client.on("message", MessageReceivedHandler);
}
