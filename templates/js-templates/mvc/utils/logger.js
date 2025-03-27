import fs from "fs";
import path from "path";

const logDir = path.join(__dirname, "..", "logs"); // __dirname is the directory of the current file
const logFile = path.join(logDir, "server.log"); // Path to log file

// Create log directory if it doesn't exist
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true });
}

/**
 * Log message to console and file
 * @param {string} level Log level
 * @param {string} message Log message
 * @returns {void}
 */
const log = (level, message) => {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] [${level.toUpperCase()}]: ${message}\n`;

  // Print to console
  console.log(logMessage.trim());

  // Save to log file
  fs.appendFileSync(logFile, logMessage, { encoding: "utf8" });
};

/**
 * Logger object with info, warn, and error methods
 * @type {Object}
 * @property {Function} info - Log info message
 */
module.exports = {
  info: (msg) => log("info", msg),
  warn: (msg) => log("warn", msg),
  error: (msg) => log("error", msg),
};
