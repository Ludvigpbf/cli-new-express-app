import inquirer from "inquirer";
import { isGitHubAuthenticated, loginToGitHub } from "../utils/gitConfig.js";

/**
 * 1. Asks the user if they want to initialize a Git-repo.
 *
 * If Git-repo answer = true:
 *
 * 2. Asks user if they want to create a GitHub-repo
 *
 * If Github-repo answer = true:
 *
 * 3. Prompts the user to log in to GitHub CLI if not already authenticated.
 * @returns {Promise<Record<string, any>>} Answers from the user.
 */
export const askGitConfig = async () => {
  const answers = await inquirer.prompt([
    {
      type: "confirm",
      name: "useGit",
      message: "Do you want to initialize a Git-repo?",
      default: true,
    },

    {
      type: "confirm",
      name: "createGitHubRepo",
      message: "Do you want to create a GitHub-repo?",
      default: false,
      when: (answers) => answers.useGit,
    },
  ]);
  if (answers.createGitHubRepo) {
    if (!isGitHubAuthenticated()) {
      await loginToGitHub(); 
    }
  }

  return answers;
};
