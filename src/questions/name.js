import inquirer from "inquirer";

/**
 * Asks the user for the project name
 * 
 * if the user doesn't provide a name, the default name is "my-express-app"
 * @returns {Promise<{projectName: string}>} The project name as a string
 */

export const askProjectName = async () => {
  return await inquirer.prompt([
    {
      type: "input",
      name: "projectName",
      message: "Your projects name?",
      default: "my-express-app",
    },
  ]);
};
