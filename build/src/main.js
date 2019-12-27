"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importDefault(require("discord.js"));
const credentials_1 = require("../credentials");
function InitialiseBot(callback) {
    const client = new discord_js_1.default.Client();
    client.on("ready", () => {
        callback(client);
    });
    client.login(credentials_1.token);
    return client;
}
exports.InitialiseBot = InitialiseBot;
function MessageReceivedHandler(message) {
    console.log(message);
}
exports.MessageReceivedHandler = MessageReceivedHandler;
