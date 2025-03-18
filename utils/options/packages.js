import inquirer from "inquirer";

/**
 * A list of packages options
 * @type {Array<string | inquirer.Separator>} The list of packages
 */
export const packagesOptions = [
  "cors",
  "morgan",
  "jsonwebtoken",
  "bcrypt",
  "express-validator",
  "helmet",
  "compression",
  "express-session",
  "cookie-parser",
  "passport",
  "passport-local",
  "passport-jwt",
  "multer",
  "socket.io",
  "nodemailer",
  "axios",
  "node-fetch",
  "winston",
  "jest",
  "supertest",
  "none",
  new inquirer.Separator("--- End of list ---"),
];

export const defaultPackages = ["express", "dotenv"];
export const defaultDevPackages = [
  "nodemon",
  "typescript",
  "ts-node",
  "@types/node",
  "@types/express",
];
