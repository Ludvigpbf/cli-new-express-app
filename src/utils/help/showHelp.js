import chalk from "chalk";

export const showHelp = () => {
  console.log(
    chalk.bold.blue("\nUsage:"),
    chalk.white("new-express-app [options]\n")
  );

  console.log(chalk.bold.blue("Options:"));
  console.log(
    chalk.green("  --help"),
    chalk.white("          Show this help message and exit")
  );
  console.log(
    chalk.green("  --name"),
    chalk.white("          Specify the project name")
  );
  console.log(
    chalk.green("  --docker"),
    chalk.white("        Include a Docker setup with docker-compose.yml")
  );
  console.log(
    chalk.green("  --github"),
    chalk.white(
      "        Create a GitHub repository and push the initial commit"
    )
  );
  console.log(
    chalk.green("  --install"),
    chalk.white("       Install dependencies automatically after project setup")
  );
  console.log(
    chalk.green("  --git"),
    chalk.white("           Initialize a Git repository locally")
  );
  console.log(
    chalk.green("  --database"),
    chalk.white(
      "      Set up database configuration (MongoDB, PostgreSQL, etc.)"
    )
  );
  console.log(
    chalk.green("  --template"),
    chalk.white("      Use a predefined project template")
  );
  console.log(
    chalk.green("  --readme"),
    chalk.white("        Generate a README file with project details")
  );
  console.log(
    chalk.green("  --language"),
    chalk.white("      Choose the programming language (JavaScript/TypeScript)")
  );
  console.log(
    chalk.green("  --packages"),
    chalk.white("      Install additional npm packages during setup")
  );
  console.log(
    chalk.green("  --testing"),
    chalk.white("       Set up a testing framework (Jest, Mocha, etc.)\n")
  );

  console.log(chalk.bold.blue("Description:"));
  console.log(
    chalk.white(
      "  This CLI tool helps you quickly set up a new Express project with various"
    )
  );
  console.log(
    chalk.white(
      "  options, such as GitHub repository creation, Docker setup, Git initialization,"
    )
  );
  console.log(
    chalk.white(
      "  and database configuration. You can also choose from predefined templates,"
    )
  );
  console.log(
    chalk.white(
      "  specify the programming language, set up a testing framework, and install"
    )
  );
  console.log(chalk.white("  additional dependencies."));
};
