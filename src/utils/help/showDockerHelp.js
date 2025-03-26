import chalk from "chalk";

/**
 * Displays information about the --docker option in the CLI tool.
 */
export const showDockerHelp = () => {
  console.log(chalk.bold.blue("\nOption: --docker"));
  console.log(
    chalk.white(
      "  Adds Docker support to the project setup."
    )
  );
  console.log(
    chalk.white(
      "  This option generates Docker-related configuration files for containerizing your application."
    )
  );
  console.log(chalk.white("\nEffects:"));
  console.log(
    chalk.white(
      "  - A Dockerfile will be created to define the container environment for your application."
    )
  );
  console.log(
    chalk.white(
      "  - A docker-compose.yml file will be generated if wanted for managing multi-container setups."
    )
  );
  console.log(
    chalk.white(
      "  - If this option is not specified, no Docker configuration files will be included."
    )
  );
};