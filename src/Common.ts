import { minimum_log_level, log_to_file } from "../config";
import { appendFile } from "fs-extra";
import { StartTimestamp } from "..";

enum LOG_LEVEL {
  ERROR,
  WARNING,
  INFO,
  DEBUG
}

function Log(message: string, logLevel: LOG_LEVEL = LOG_LEVEL.DEBUG) {
  if (logLevel > minimum_log_level) return;

  let prefix = "";

  switch (logLevel) {
    case LOG_LEVEL.ERROR:
      prefix = "ERROR";
      break;
    case LOG_LEVEL.WARNING:
      prefix = "WARNING";
      break;
    case LOG_LEVEL.INFO:
      prefix = "INFO";
      break;
    case LOG_LEVEL.DEBUG:
      prefix = "DEBUG";
      break;
  }

  prefix = prefix.padEnd(10, " ");

  let timestamp = new Date();

  let timestampString = `${timestamp
    .getHours()
    .toString()
    .padStart(2, "0")}:${timestamp
    .getMinutes()
    .toString()
    .padStart(2, "0")}:${timestamp
    .getSeconds()
    .toString()
    .padStart(2, "0")}.${timestamp
    .getMilliseconds()
    .toString()
    .padStart(4, "0")}`.padEnd(15, " ");

  console.log(`${prefix}${timestampString}${message}`);

  if (log_to_file) {
    appendFile(
      `./logs/${StartTimestamp.toISOString().replace(/:/g, "-")}.log`,
      `${prefix}${timestampString}${message}\n`
    );
  }
}

export { Log, LOG_LEVEL };
