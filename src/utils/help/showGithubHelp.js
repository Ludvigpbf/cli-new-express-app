import chalk from "chalk";

/**
 * Displays information about the --github option in the CLI tool.
 */
export const showGithubHelp = () => {
  console.log(chalk.bold.blue("\nOption: --github"));
  console.log(
    chalk.white(
      "  Sets up GitHub integration for the project."
    )
  );
  console.log(
    chalk.white(
      "  This option automates the creation of a GitHub repository and links it to your project."
    )
  );
  console.log(chalk.white("\nEffects:"));
  console.log(
    chalk.white(
      "  - A new GitHub repository will be created using your GitHub account."
    )
  );
  console.log(
    chalk.white(
      "  - The local Git repository will be linked to the remote GitHub repository."
    )
  );
  console.log(
    chalk.white(
      "  - If this option is not specified, no GitHub repository will be created."
    )
  );
};