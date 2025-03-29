#!/usr/bin/env node

import { program } from "commander";
import chalk from "chalk";
import { createProject } from "../src/generator.js";
import { setupGit, createGitHubRepo } from "../src/utils/gitConfig.js";
import { askProjectDetails } from "../src/prompts.js";
import { banner } from "../src/banner.js";
import { handleArgs } from "../src/utils/help/argsHandler.js";
import { startTime, newSessionId, logAppStart, logAppEnd } from "../src/utils/logger.js";

const args = process.argv.slice(2);
handleArgs(args);
logAppStart(); // Log the start time

console.log(banner);
const runCLI = async () => {
  try {
    console.log(chalk.green("\n                Welcome to Express App CLI!\n"));

    // Questions for user
    const answers = await askProjectDetails();
    const {
      projectName,
      selectedLanguage,
      gitConfig,
      templateAnswer,
      readmeAnswer,
      testingAnswer,
      testingTool,
      testingConfig,
      dockerAnswer,
      packageAnswer,
      dockerConfig,
      databaseAnswer,
    } = answers;

    console.log(answers); // Log the answers for debugging

    // Create project folders and install dependencies
    await createProject(
      projectName,
      selectedLanguage,
      templateAnswer,
      readmeAnswer,
      testingAnswer,
      testingTool,
      testingConfig,
      dockerAnswer,
      dockerConfig,
      databaseAnswer,
      packageAnswer
    );

    // Handle Git-init and GitHub repo
    if (gitConfig.useGit === true) {
      console.log(chalk.blue("🔧 Starting Git configuration...\n"));

      await setupGit(projectName);
    }
    if (gitConfig.createGitHubRepo === true) {
      await createGitHubRepo(projectName);
    }
    console.log(chalk.green("\n---------------------------\n"));

    logAppEnd(newSessionId, answers, true, startTime); // Log the end time with success

    console.log(chalk.green("\n Project is done! Run these commands:\n"));
    console.log(chalk.cyan(`cd ${answers.projectName}`));
    console.log(chalk.cyan("npm run dev\n"));
  } catch (error) {
    console.error(chalk.red("❌ An error occurred:"), error); // Log the error message
    logAppEnd(startTime, answers || {}, false); // Log the end time with failure
    process.exit(1);
  }
};

program
  .version("1.0.0")
  .description("CLI to create a new express project")
  .action(runCLI);
program.parse(process.argv);
