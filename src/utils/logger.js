import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getLogFilePath = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  
  const logFileName = `log-${year}-${month}-${day}.json`; // Example: log-2025-03-29.json
  return path.join(__dirname, "../logs", logFileName);
};

const packageJsonPath = path.join(__dirname, "../../package.json");
const { version } = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));

/**
 * Function to create a unique incrementing ID for log entries.
 * @param {Array} logs - Array of existing log entries.
 * @return {number} - The next log ID.
 */
const getNextLogId = (logs) => {
  if (logs.length === 0) return 1;
  return logs[logs.length - 1].id + 1;
};

/** 
 * Function to generate a unique session ID for app start/stop pairing.
 * @returns {string} - A unique session ID.
 */
const generateSessionId = () => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

export let newSessionId = ""; // Initialize session ID
export let startTime = null; // Initialize start time

/**
 * Logs when the application starts.
 * @returns {Date} - The start time of the application.
 * @description
 * This function logs the start time of the application to a JSON file.
 * 
 */
export const logAppStart = () => {
  startTime = new Date();
  newSessionId = generateSessionId();
  const logFilePath = getLogFilePath();

  fs.readFile(logFilePath, "utf8", (err, data) => {
    let logs = [];
    if (!err && data) {
      try {
        logs = JSON.parse(data);
      } catch (parseError) {
        console.error("Error parsing log file:", parseError);
      }
    }

    const nextId = getNextLogId(logs);

    const appStart = {
      id: nextId,
      sessionId: newSessionId,
      action: "App started",
      timestamp: startTime.toISOString(),
      version: version,
      environment: process.env.NODE_ENV || "development",
      message: `App started at ${startTime}`,
    };

    logs.push(appStart);

    fs.writeFile(logFilePath, JSON.stringify(logs, null, 2), (writeErr) => {
      if (writeErr) console.error("Error writing to log file:", writeErr);
    });
  });

  return {startTime, newSessionId}; // Returns the start time for further use
};

/**
 * Logs when the application finishes.
 * @param {Array} options - User-selected options.
 * @param {boolean} completedSuccessfully - Whether the app finished successfully.
 * @param {number} executionTimeMs - Execution time in milliseconds.
 */
export const logAppEnd = ( newSessionId, options = [], completedSuccessfully = true, startTime) => {
  const endTime = new Date();
  const executionTimeMs = endTime - startTime; // Calculating execution time in milliseconds
  const logFilePath = getLogFilePath();

  fs.readFile(logFilePath, "utf8", (err, data) => {
    let logs = [];
    if (!err && data) {
      try {
        logs = JSON.parse(data);
      } catch (parseError) {
        console.error("Error parsing log file:", parseError);
      }
    }

    const nextId = getNextLogId(logs);

    const appEnd = {
      id: nextId,
      sessionId: newSessionId,
      action: "App finished",
      timestamp: endTime.toISOString(),
      environment: process.env.NODE_ENV || "development",
      options: options,
      completedSuccessfully: completedSuccessfully,
      executionTimeMs: executionTimeMs,
      message: `App finished at ${endTime}. Execution time: ${executionTimeMs}ms.`,
    };

    logs.push(appEnd);

    fs.writeFile(logFilePath, JSON.stringify(logs, null, 2), (writeErr) => {
      if (writeErr) console.error("Error writing to log file:", writeErr);
    });
  });
};
