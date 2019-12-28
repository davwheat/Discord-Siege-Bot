# SiegeBot

This is a Discord bot for performing R6 Siege related things!

## Installation

1. Download Node.js 12 (or higher)
2. Download the source code
3. Rename `config.example.ts` to `config.ts`, add your token to it, and [change any options](#config-options)
4. Open up a command prompt and run `npm i` to install all dependencies
5. Then run `npm start` to compile and run the bot
6. You're done!

## Config Options

|      Variable       |                                                                   Description                                                                   |                                 Type                                  |              Default              |
| :-----------------: | :---------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------: | :-------------------------------: |
|       `token`       | Set this to the value of your Discord bot token, generated on the [Discord developer console](https://discordapp.com/developers/applications/). |                               `string`                                | `"Replace this with your token!"` |
| `minimum_log_level` |                                                     The minimum log level to be outputted.                                                      | `LOG_LEVEL.DEBUG\|LOG_LEVEL.INFO\|LOG_LEVEL.WARNING\|LOG_LEVEL.ERROR` |         `LOG_LEVEL.INFO`          |
|    `log_to_file`    |                         Whether the bot should save log files to timestamped files. Abides by the `minimum_log_level`.                          |                                `bool`                                 |              `true`               |
|  `command_prefix`   |                           The prefix for the bot to look for to interpret a command. `null` is a mention of the bot.                            |                             `string|null`                             |              `null`               |
