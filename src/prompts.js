import chalk from "chalk";
import {
  askProjectName,
  askLanguage,
  askGitConfig,
  askTemplate,
  askReadme,
  askTesting,
  askDocker,
  askDatabase,
  askPackages,
} from "./questions/index.js";

/**
 * Prompts the user to provide project details.
 * @returns {Promise<Record<string, any>>} Answers from the user.
 */

export const askProjectDetails = async () => {
  // Ask for the project name and place the answer in the projectName variable
  const projectNamePrompt = await askProjectName();
  const projectName = projectNamePrompt.projectName;

  // Ask if the user wants to initialize a Git-repo and create a GitHub-repo. Saves the answers in the gitAnswers variable
  const gitAnswers = await askGitConfig();
  const gitConfig = gitAnswers;

  // Ask for the project language and place the answer in the selectedLanguage variable
  const projectLangugagePrompt = await askLanguage();
  const selectedLanguage = projectLangugagePrompt.language;

  // Ask for the template and place the answer in the templateAnswer variable
  const templatePrompt = await askTemplate(selectedLanguage);
  const templateAnswer = templatePrompt.template;

  // Ask if the user wants to include a README.md file. Saves the answer in the readmeAnswer variable
  const readmePrompt = await askReadme();
  const readmeAnswer = readmePrompt.includeReadme;

  // Ask if the user wants to include testing. Saves the answer in the testingAnswer variable
  const testingPrompt = await askTesting();
  const testingAnswer = testingPrompt.testing;

  // Ask if the user wants to use Docker. Saves the answer in the dockerAnswer variable
  const dockerPrompt = await askDocker();
  const dockerAnswer = dockerPrompt.useDocker; // true or false
  const dockerConfig = dockerPrompt.dockerConfig || null; // object or null

  // Ask for the database and place the answer in the databaseAnswer variable
  const databasePrompt = await askDatabase();
  const databaseAnswer = databasePrompt.database;

  // Ask for the packages and place the answer in the packageAnswer variable
  const packagePrompt = await askPackages();
  const packageAnswer = packagePrompt.packages;

  console.log(chalk.blue("\n✅ Project details received!"));
  console.log(chalk.blue("\n Starting project setup..."));

  // Return all the answers
  const answers = {
    projectName,
    gitConfig,
    selectedLanguage,
    templateAnswer,
    readmeAnswer,
    testingAnswer,
    dockerAnswer,
    dockerConfig,
    databaseAnswer,
    packageAnswer,
  };

  return answers;
};
