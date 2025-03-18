import chalk from "chalk";

/**
 * Displays information about the --name option in the CLI tool.
 */
export const showNameHelp = () => {
  console.log(chalk.bold.blue("\nOption: --name"));
  console.log(chalk.white("  Defines the project name that will be used in various configurations."));
  console.log(chalk.white("  The name is used for the project directory, package.json, and GitHub repository if applicable."));
  console.log(chalk.white("\nUsage:"));
  console.log(chalk.green("  new-express-app myProject"));
  console.log(chalk.white("\nEffects:"));
  console.log(chalk.white("  - The project directory will be named 'myProject'."));
  console.log(chalk.white("  - 'myProject' will be set as the package name in package.json."));
  console.log(chalk.white("  - If a GitHub repository is created, it will use 'myProject' as the repo name."));
  console.log(chalk.white("\nExample:"));
  console.log(chalk.green("  new-express-app awesome-api"));
  console.log(chalk.white("  The project name 'awesome-api' will be applied throughout the setup process."));
};
