import inquirer from "inquirer";
import { databaseOptions, templateFiles } from "./options/index.js";
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

  const templatePrompt = await askTemplate(selectedLanguage);
  const templateAnswer = templatePrompt.template;

  const readmePrompt = await askReadme();
  const readmeAnswer = readmePrompt.includeReadme;

  const testingPrompt = await askTesting();
  const testingAnswer = testingPrompt.testing;

  const dockerPrompt = await askDocker();
  const dockerAnswer = dockerPrompt.useDocker;
  const dockerConfig = dockerPrompt.dockerConfig || null;

  const databasePrompt = await askDatabase();
  const databaseAnswer = databasePrompt.database;

  const packagePrompt = await askPackages();
  const packageAnswer = packagePrompt.packages;

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
