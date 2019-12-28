import { Message } from "discord.js";
import { Log, LOG_LEVEL } from "../Common";

export default {
  name: "getmap",
  aliases: ["map", "findmap"],
  description: `Provides the floorplan of a siege map via its name.

Usage:
getmap <mapname>`,
  function: (message: Message, args) => {
    Log(args, LOG_LEVEL.DEBUG);
  }
};
