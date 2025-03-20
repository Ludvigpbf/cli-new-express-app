import inquirer from "inquirer";
import chalk from "chalk";
import simpleGit from "simple-git";
import { execSync } from "child_process";
import path from "path";

export const GITHUB_REPO = "https://github.com/ludvigpbf/cli-new-express-app.git";
export const TEMPLATES_DIR = "templates";

/**
 * Checks if the user is logged in to GitHub CLI.
 * @returns {boolean} True if authenticated, otherwise false.
 */
export const isGitHubAuthenticated = () => {
  try {
    execSync("gh auth status", { stdio: "ignore" });
    console.log(chalk.green("Successfully authenticated with GitHub CLI!"));

    return true;
  } catch (error) {
    console.log(chalk.red("Not authenticated with GitHub CLI."));
    return false;
  }
};

/**
 * Prompts the user to log in to GitHub CLI if not already authenticated.
 * @returns {Promise<boolean>} True if login is successful, otherwise false.
 */
export const loginToGitHub = async () => {
  console.log(chalk.yellow("\n🔑 You are not logged into GitHub CLI."));
  const { shouldLogin } = await inquirer.prompt([
    {
      type: "confirm",
      name: "shouldLogin",
      message:
        "You are not logged into GitHub CLI. Would you like to log in now?",
      default: true,
    },
  ]);

  if (shouldLogin) {
    try {
      execSync("gh auth login", { stdio: "inherit" });
      console.log(chalk.green("Successfully logged into GitHub CLI!"));
      return true;
    } catch (error) {
      console.error(
        chalk.red("Failed to log into GitHub CLI. Please try again manually.")
      );
      process.exit(1);
    }
  }

  console.log(
    chalk.red(
      "GitHub authentication is required to create a remote repository."
    )
  );
  process.exit(1);
};

/**
 * Initializes a local Git repository and creates an initial commit.
 * @param {string} projectName - The name of the project directory.
 */
export const setupGit = async (projectName) => {
  console.log(chalk.blue("🔧 Initializing Git repository..."));
  const git = simpleGit({ baseDir: path.join(process.cwd(), projectName) });

  try {
    await git.init();
    await git.add(".");
    await git.commit("Initial commit");
    console.log(chalk.green("\n✅Git repository initialized!\n"));
  } catch (error) {
    console.error(
      chalk.red("Failed to initialize Git repository:", error.message)
    );
  }
};

/**
 * Creates a GitHub repository, links it with the local repository, and pushes the initial commit.
 * @param {string} projectName - The name of the repository to create.
 */
export const createGitHubRepo = async (projectName) => {
  console.log(chalk.blue("\n🌍 Creating GitHub repository..."));

  try {
    // Check if the user is authenticated with GitHub CLI
    if (!isGitHubAuthenticated()) {
      console.log(chalk.yellow("\n🔑 You are not logged into GitHub CLI."));
      await loginToGitHub();
    } else {
      console.log(chalk.green("✅ GitHub CLI is already authenticated!"));
    }

    console.log(chalk.blue("\n🌍 Creating GitHub repository..."));
    execSync(
      `cd ${projectName} && gh repo create ${projectName} --public --source=. --remote=origin`,
      { stdio: "inherit" }
    );

    console.log(chalk.green("✅ GitHub repository created and linked!\n"));

    // Push the initial commit to GitHub
    console.log(chalk.blue("\n🚀 Pushing initial commit to GitHub..."));
    execSync(
      `cd ${projectName} && git branch -M main && git push -u origin main`,
      { stdio: "inherit" }
    );

    console.log(chalk.green("✅ Initial commit pushed to GitHub!\n"));
  } catch (error) {
    console.error(
      chalk.red(
        "❌ Failed to create GitHub repository or push initial commit:",
        error.message
      )
    );
  }
};
