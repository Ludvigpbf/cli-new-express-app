import inquirer from "inquirer";

/**
 * Asks the user if they want to use Docker and gathers additional configuration if needed.
 * @returns {Promise<Object>} Docker configuration answers.
 */

export const askDocker = async () => {
  // Fråga om Docker ska användas
  const useDocker = await inquirer.prompt([
    {
      type: "confirm",
      name: "useDocker",
      message: "Do you want to use Docker?",
      default: false,
    },
  ]);

  // Om användaren INTE vill ha Docker, returnera direkt
  if (!useDocker.useDocker) {
    return useDocker;
  }

  // Ställ fler frågor om Docker-konfiguration
  const dockerConfig = await inquirer.prompt([
    {
      type: "list",
      name: "dockerBaseImage",
      message: "Which base image do you want to use for Docker?",
      choices: ["node:latest", "node:lts", "node:alpine", "custom"],
    },
    {
      type: "input",
      name: "dockerPorts",
      message: "Which ports should be exposed (comma-separated)?",
      default: "3000",
    },
    {
      type: "confirm",
      name: "useDockerCompose",
      message: "Do you want to include a docker-compose.yml file?",
      default: false,
    },
  ]);

  // Slå ihop svaren och returnera dem
  return { ...useDocker, dockerConfig: dockerConfig };
};
