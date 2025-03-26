import chalk from "chalk";

/**
 * Displays information about the --git option in the CLI tool.
 */
export const showGitHelp = () => {
  console.log(chalk.bold.blue("\nOption: --git"));
  console.log(
    chalk.white(
      "  Initializes a Git repository in the project directory."
    )
  );
  console.log(
    chalk.white(
      "  This option sets up version control for your project using Git."
    )
  );
  console.log(chalk.white("\nEffects:"));
  console.log(
    chalk.white(
      "  - A new Git repository will be initialized in the project folder."
    )
  );
  console.log(
    chalk.white(
      "  - A .gitignore file will be created with default entries for Node.js projects."
    )
  );
  console.log(
    chalk.white(
      "  - If this option is not specified, no Git repository will be initialized."
    )
  );
};