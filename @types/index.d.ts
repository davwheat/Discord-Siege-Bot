import { Message, Client, RichEmbed } from "discord.js";

interface Command {
  name: string;
  aliases: string[];
  description: RichEmbed;
  function(message: Message, args: string[], client: Client);
}
