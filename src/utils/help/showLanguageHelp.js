import chalk from "chalk";

/**
 * Displays information about the --language option in the CLI tool.
 */
export const showLanguageHelp = () => {
  console.log(chalk.bold.blue("\nOption: --language"));
  console.log(
    chalk.white(
      "  Determines the programming language used in the project setup."
    )
  );
  console.log(
    chalk.white(
      "  When setting up the project, you will be prompted to choose between JavaScript and TypeScript."
    )
  );
  console.log(chalk.white("\nEffects:"));
  console.log(
    chalk.white(
      "  - If TypeScript is selected, dependencies and configurations for TypeScript will be included."
    )
  );
  console.log(
    chalk.white(
      "  - If JavaScript is selected, the setup will use standard JavaScript configurations."
    )
  );
  console.log(
    chalk.white(
      "  - The chosen language affects project templates, dependencies, and build setup."
    )
  );
};
