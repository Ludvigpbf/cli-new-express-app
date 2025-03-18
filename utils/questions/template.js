import inquirer from "inquirer";
import { templateFiles } from "../options/index.js";

/**
 * Asks the user what template they want to use
 * @returns {Promise<{template: string}>} The choosen template as a string
 */

export const askTemplate = async (language) => {
  const availableTemplates = Object.keys(templateFiles[language]);
  return await inquirer.prompt([
    {
      type: "list",
      name: "template",
      message: "What template do you want to use?",
      choices: availableTemplates,
    },
]);
};
