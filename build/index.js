"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./src/main");
main_1.InitialiseBot(OnBotInitialised);
function OnBotInitialised(client) {
    client.on("message", main_1.MessageReceivedHandler);
}
