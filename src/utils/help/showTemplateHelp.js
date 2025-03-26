import chalk from "chalk";

/**
 * Displays information about the --template option in the CLI tool.
 */
export const showTemplateHelp = () => {
  console.log(chalk.bold.blue("\nOption: --template"));
  console.log(
    chalk.white(
      "  Specifies the project template to use during setup."
    )
  );
  console.log(
    chalk.white(
      "  This option allows you to choose a predefined template for your Express app."
    )
  );
  console.log(chalk.white("\nEffects:"));
  console.log(
    chalk.white(
      "  - The selected template will determine the structure and configuration of the project."
    )
  );
  console.log(
    chalk.white(
      "  - Available templates may include options like 'Basic', 'API', or 'MVC'."
    )
  );
  console.log(
    chalk.white(
      "  - If no template is specified, the default template will be used wich is Basic."
    )
  );
};