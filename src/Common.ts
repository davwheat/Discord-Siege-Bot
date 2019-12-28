import { minimum_log_level } from "../config";

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
}

export { Log, LOG_LEVEL };
