import inquirer from "inquirer";

export const askPackages = async () => {
return await inquirer.prompt([
    {
      type: "checkbox",
      name: "packages",
      message: "What packages do you want to install?",
      choices: [
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
      ],
    },
  ]);
  answers.databaseConfig = databaseAnswers;
};