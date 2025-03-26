import chalk from "chalk";

/**
 * Displays information about the --packages option in the CLI tool.
 */
export const showPackagesHelp = () => {
  console.log(chalk.bold.blue("\nOption: --packages"));
  console.log(
    chalk.white(
      "  Specifies additional packages to include in the project setup."
    )
  );
  console.log(
    chalk.white(
      "  This option allows you to customize the project by adding specific dependencies."
    )
  );
  console.log(chalk.white("\nEffects:"));
  console.log(
    chalk.white(
      "  - The specified packages will be installed and added to the project's package.json."
    )
  );
  console.log(
    chalk.white(
      "  - If no packages are specified, only the default dependencies will be installed."
    )
  );
};