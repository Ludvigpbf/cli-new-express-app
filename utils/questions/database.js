import inquirer from "inquirer";
import { databaseOptions } from "../options/index.js";

export const askDatabase = async ()  => {
return await inquirer.prompt([
    {
      type: "list",
      name: "database",
      message: "What database do you want to use?",
      choices: databaseOptions
        .map((option) => option.name)
        .filter((name) => name),
    },
]);
}