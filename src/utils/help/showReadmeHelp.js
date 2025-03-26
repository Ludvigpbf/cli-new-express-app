import chalk from "chalk";

/**
 * Displays information about the --name option in the CLI tool.
 */
export const showReadmeHelp = () => {
  console.log(chalk.bold.blue("\nOption: --readme"));
    console.log(chalk.white("  Generates a README file with project details."));
    console.log(chalk.white("  The README file includes information about the project setup, dependencies, and scripts."));
    console.log(chalk.white("\nEffects:"));
    console.log(chalk.white("  - A README file will be created in the project directory."));
    console.log(chalk.white("  - The README file will contain project details and setup instructions."));
};
