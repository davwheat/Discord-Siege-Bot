import { Message } from "discord.js";

interface Command {
  name: string;
  aliases: string[];
  description: string;
  function(message: Message, args: string[]);
}
