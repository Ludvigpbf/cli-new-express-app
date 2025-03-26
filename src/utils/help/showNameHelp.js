import chalk from "chalk";

/**
 * Displays information about the --name option in the CLI tool.
 */
export const showNameHelp = () => {
  console.log(chalk.bold.blue("\nOption: --name"));
  console.log(
    chalk.white(
      "  Specifies the name of your project when setting up a new Express app."
    )
  );
  console.log(
    chalk.white(
      "  This option determines the folder name and other configurations for your project."
    )
  );
  console.log(chalk.white("\nEffects:"));
  console.log(
    chalk.white(
      "  - The provided name will be used as the root directory for your project."
    )
  );
  console.log(
    chalk.white(
      "  - It will also be used in package.json and other configuration files."
    )
  );
  console.log(
    chalk.white(
      "  - You will be prompted to enter one during setup."
    )
  );
};