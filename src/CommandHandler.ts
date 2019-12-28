import { Message, Emoji } from "discord.js";
import { Log, LOG_LEVEL } from "./Common";
import { readdirSync } from "fs-extra";
import { join } from "path";

import * as AllCommands from "./Commands";
import { Command } from "../@types";

let DatabaseBuilt = false;

let CommandList = {};
let AliasLookupTable = {};

function BuildCommandDatabase() {
  Log("Building command database", LOG_LEVEL.INFO);

  let commandCount: number = 0;
  let aliasCount: number = 0;

  for (const key in AllCommands) {
    if (AllCommands.hasOwnProperty(key)) {
      commandCount++;

      const command: Command = AllCommands[key];

      CommandList = { ...CommandList, [command.name]: command };

      const aliases = [...command.aliases, command.name];

      aliases.forEach(alias => {
        aliasCount++;
        AliasLookupTable = {
          ...AliasLookupTable,
          [alias]: CommandList[command.name]
        };
      });
    }
  }

  DatabaseBuilt = true;
  Log(
    `Command database built successfully: ${commandCount} command(s) and ${aliasCount} aliases!`,
    LOG_LEVEL.INFO
  );
}

const AllCommandFiles = readdirSync(join(__dirname, `commands`)).filter(file =>
  file.endsWith(".js")
);

function HandleCommand(message: Message, command: string, args: string[]) {
  if (!DatabaseBuilt) {
    Log("Command attempted before database built!", LOG_LEVEL.WARNING);
    message.reply(
      "There was a problem handling your command. Please try again later, or contact the owner of this bot."
    );
    return;
  }

  if (command === "") {
    Log("Saw a command activation but no command folllowed");
    message.reply("Hi! 👋");
    return;
  }

  if (command in AliasLookupTable) {
    Log(`Handling command: ${command}`, LOG_LEVEL.DEBUG);
    AliasLookupTable[command].function(message, args);
  } else {
    message.reply("that command doesn't exist.");
  }
}

export { HandleCommand, BuildCommandDatabase };
