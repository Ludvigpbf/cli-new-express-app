import inquirer from "inquirer";

/**
 * Asks the user to choose between JavaScript and TypeScript
 * @returns {Promise<{language: string}>} The choosen language as a string
 */
export const askLanguage = async () => {
  return await inquirer.prompt([
    {
      type: "list",
      name: "language",
      message: "What language do you want to use?",
      choices: ["JavaScript", "TypeScript"],
    },
  ]);
};
