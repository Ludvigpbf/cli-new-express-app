import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Resolve __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logDir = path.join(__dirname, "..", "logs"); // __dirname is the directory of the current file
const logFile = path.join(logDir, "server.log"); // Path to log file

// Create log directory if it doesn't exist
try {
  if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
  }
} catch (err) {
  console.error("Failed to create log directory:", err);
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

  console.log(logMessage.trim());

  try {
    fs.appendFileSync(logFile, logMessage, { encoding: "utf8" });
  } catch (err) {
    console.error("Failed to write to log file:", err);
  }
};

/**
 * Logger object with info, warn, and error methods
 * @type {Object}
 * @property {Function} info - Log info message
 * @property {Function} warn - Log warning message
 * @property {Function} error - Log error message
 * 
 * @example
 * import { logger } from "../utils/logger.js";
 */

export const logger = {
  info: (msg) => log("info", msg),
  warn: (msg) => log("warn", msg),
  error: (msg) => log("error", msg),
};
