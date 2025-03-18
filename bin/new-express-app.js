#!/usr/bin/env node

import { program } from "commander";
import chalk from "chalk";
import { createProject } from "../utils/files.js";
import { setupGit, createGitHubRepo } from "../utils/gitConfig.js";
import { askProjectDetails } from "../utils/prompts.js";
import { banner } from "../utils/banner.js";
import { handleArgs } from "../utils/help/argsHandler.js";

const args = process.argv.slice(2);
handleArgs(args);

console.log(banner);

const runCLI = async () => {
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
    dockerAnswer,
    packageAnswer,
    dockerConfig,
    databaseAnswer,
  } = answers;

  console.log(answers);
  // Create project folders and install dependencies
  await createProject(
    projectName,
    selectedLanguage,
    gitConfig,
    templateAnswer,
    readmeAnswer,
    testingAnswer,
    dockerAnswer,
    packageAnswer,
    dockerConfig,
    databaseAnswer
  );

  // Handle Git-init and GitHub repo
  if (gitConfig.useGit === true) {
    await setupGit(projectName);
  }
  if (gitConfig.createGitHubRepo === true) {
    await createGitHubRepo(projectName);
  }

  console.log(chalk.green("\n Project is done! Run these commands:\n"));
  console.log(chalk.cyan(`cd ${projectName}`));
  console.log(chalk.cyan("npm start\n"));
};

program
  .version("1.0.0")
  .description("CLI to create a new express project")
  .action(runCLI);
program.parse(process.argv);
