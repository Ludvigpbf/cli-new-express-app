import inquirer from "inquirer";

/**
 * Ask if the user wants to include a README file
 * @returns {Promise<Record<string, any>>} - The README file
 */
export const askReadme = async () => {
  return await inquirer.prompt([
    {
      type: "confirm",
      name: "includeReadme",
      message: "Do you want to include a README file?",
      default: true,
    },
  ]);
};
