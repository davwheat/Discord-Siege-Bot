import { LOG_LEVEL } from "./src/Common";

const token = `Replace this with your token!`;
const minimum_log_level = LOG_LEVEL.INFO; // Choose between DEBUG, INFO, WARNING, and ERROR. Default: LOG_LEVEL.INFO
const command_prefix = null; // Any string, or null to only activate on mention. Default: null

export { token, minimum_log_level, command_prefix };
