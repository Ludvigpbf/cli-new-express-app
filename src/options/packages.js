import inquirer from "inquirer";

/**
 * A list of packages options
 * @type {Array<string | inquirer.Separator>} The list of packages
 */
export const packagesOptions = [
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
  "supertest",
  "none",
  new inquirer.Separator("--- End of list ---"),
];
