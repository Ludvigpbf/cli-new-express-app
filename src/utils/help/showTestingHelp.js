import chalk from "chalk";

/**
 * Displays information about the --testing option in the CLI tool.
 */
export const showTestingHelp = () => {
  console.log(chalk.bold.blue("\nOption: --testing"));
  console.log(
    chalk.white(
      "  Specifies the testing framework to include in the project setup."
    )
  );
  console.log(
    chalk.white(
      "  This option allows you to choose a testing framework for your Express app."
    )
  );
  console.log(chalk.white("\nEffects:"));
  console.log(
    chalk.white(
      "  - The selected testing framework's dependencies and configurations will be added to the project."
    )
  );
  console.log(
    chalk.white(
      "  - Available options include 'jest', 'jasmine', and 'mocha'."
    )
  );
  console.log(
    chalk.white(
      "  - If no testing framework is specified, no testing setup will be included."
    )
  );
};