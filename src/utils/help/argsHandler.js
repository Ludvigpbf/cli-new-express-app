import {
  showHelp,
  showNameHelp,
  showLanguageHelp,
  showDatabaseHelp,
  showDockerHelp,
  showGitHelp,
  showTemplateHelp,
  showGithubHelp,
  showPackagesHelp,
  showTestingHelp,
  showReadmeHelp,
} from "./index.js";

export const handleArgs = (args) => {
  const helpMap = {
    "--help": showHelp,
    "--name": showNameHelp,
    "--language": showLanguageHelp,
    "--readme": showReadmeHelp,
    "--docker": showDockerHelp,
    "--github": showGithubHelp,
    "--database": showDatabaseHelp,
    "--template": showTemplateHelp,
    "--git": showGitHelp,
    "--packages": showPackagesHelp,
    "--testing": showTestingHelp,
  };

  for (const arg of args) {
    if (helpMap[arg]) {
      helpMap[arg]();
      process.exit(0);
    }
  }
};
