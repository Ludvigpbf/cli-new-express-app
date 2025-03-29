import fs from "fs";
import path from "path";

const logFilePath = path.join(__dirname, "../activity-log.json");
const packageJsonPath = path.join(__dirname, "../package.json");
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
 * Logs when the application starts.
 */
export const logAppStart = () => {
  const startTime = new Date();

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
      action: "App started",
      timestamp: startTime.toISOString(),
      version: version,
      environment: process.env.NODE_ENV || "development",
      message: `App started at ${startTime}`,
    };

    logs.push(appStart);

    fs.writeFile(logFilePath, JSON.stringify(logs, null, 2), (writeErr) => {
      if (writeErr) console.error("Error writing to log file:", writeErr);
      else console.log("App start logged.");
    });
  });

  return startTime; // Returns the start time for further use
};

/**
 * Logs when the application finishes.
 * @param {Array} options - User-selected options.
 * @param {boolean} completedSuccessfully - Whether the app finished successfully.
 * @param {number} executionTimeMs - Execution time in milliseconds.
 */
export const logAppEnd = (startTime, options = [], completedSuccessfully = true) => {
  const endTime = new Date();
  const executionTimeMs = endTime - startTime; // Calculating execution time in milliseconds

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
      else console.log("App end logged.");
    });
  });
};
