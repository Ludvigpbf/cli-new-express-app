import inquirer from "inquirer";

/**
 *
 * @returns {Promise<Record<string, any>>} Answers from the user.
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
