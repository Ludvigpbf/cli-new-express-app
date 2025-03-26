import chalk from "chalk";

/**
 * Displays information about the --database option in the CLI tool.
 */
export const showDatabaseHelp = () => {
  console.log(chalk.bold.blue("\nOption: --database"));
  console.log(
    chalk.white(
      "  Specifies the database to be used in the project setup."
    )
  );
  console.log(
    chalk.white(
      "  This option allows you to choose a database integration for your project."
    )
  );
  console.log(chalk.white("\nEffects:"));
  console.log(
    chalk.white(
      "  - The selected database's dependencies and configurations will be added to the project."
    )
  );
  console.log(
    chalk.white(
      "  - Supported databases include options like MongoDB, PostgreSQL and MySQL."
    )
  );
  console.log(
    chalk.white(
      "  - If no database is specified, the project will be set up without database integration."
    )
  );
};