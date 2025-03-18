import chalk from "chalk";
import fs from "fs-extra";
import path from "path";
import { execSync } from "child_process";
import { defaultPackages, defaultDevPackages } from "./options/index.js";

export const createProject = async (
  projectName,
  selectedLanguage,
  gitConfig,
  templateAnswer,
  dockerAnswer,
  dockerConfig,
  databaseAnswer,
  packageAnswer
) => {
  console.log("DEBUG - selectedLanguage:", selectedLanguage);
  console.log("DEBUG - templateAnswer:", templateAnswer);

  const templatePath = path.join(
    process.cwd(),
    "new-express-app/templates",
    selectedLanguage === "TypeScript" ? "ts-templates" : "js-templates",
    templateAnswer.toLowerCase()
  );

  const projectPath = path.join(process.cwd(), projectName);

  console.log(chalk.yellow(`\n🔍 Template path: ${templatePath}`));
  console.log(chalk.yellow(`📁 Project path: ${projectPath}`));

  console.log(chalk.blue(`\n📥 Copying ${selectedLanguage} template...`));

  // Kopiera hela mallens innehåll till projektmappen
  await fs.copy(templatePath, projectPath);

  const packageJsonPath = path.join(projectPath, "package.json");

  if (!fs.existsSync(packageJsonPath)) {
    console.log(chalk.blue("\n📦 Initializing package.json..."));
    execSync(`cd ${projectPath} && npm init -y`, { stdio: "ignore" });
  }

  const packageJson = fs.readJsonSync(packageJsonPath);
  packageJson.name = projectName;
  packageJson.scripts = {
    start: "node server.js",
    dev: "nodemon server.js",
    build: "tsc -p tsconfig.json",
  };
  fs.writeJsonSync(packageJsonPath, packageJson, { spaces: 2 });

  // Skapa .dockerignore
  if (dockerAnswer) {
    console.log(chalk.blue("\n🐳 Creating .dockerignore..."));
    const dockerIgnorePath = path.join(projectPath, ".dockerignore");
    const dockerIgnoreContent = `node_modules \nnpm-debug.log`;
    fs.writeFileSync(dockerIgnorePath, dockerIgnoreContent);
  }

  if (dockerAnswer) {
    console.log(chalk.blue("\n🐳 Creating Dockerfile..."));
    const dockerfilePath = path.join(projectPath, "Dockerfile");
    const dockerfileContent = `
    # Use the specified base image
    FROM ${dockerConfig.dockerBaseImage}
  
    # Set the working directory
    WORKDIR /usr/src/app
  
    # Copy package files and install dependencies
    COPY package*.json ./
    RUN npm install
  
    # Copy project files
    COPY . .
  
    # Expose the specified port
    EXPOSE ${dockerConfig.dockerPorts}
  
    # Start the application
    CMD ["npm", "start"]
    `;
    fs.writeFileSync(dockerfilePath, dockerfileContent.trim());
  }

  // Skapa docker-compose.yml om det är aktiverat
  if (dockerConfig.useDockerCompose) {
    console.log(chalk.blue("\n🐳 Creating docker-compose.yml..."));
    const dockerComposePath = path.join(projectPath, "docker-compose.yml");
    const dockerComposeContent = `version: "3"
services:
  app:
    build: .
    ports:
      - "${dockerConfig.dockerPorts}:${dockerConfig.dockerPorts}"
    volumes:
      - .:/usr/src/app
      - /usr/src/app/node_modules
    environment:
      - NODE_ENV=development`;
    fs.writeFileSync(dockerComposePath, dockerComposeContent.trim());
  }

  // Skapa .gitignore
  if (gitConfig.useGit) {
    console.log(chalk.blue("\n🐙 Creating .gitignore..."));
    const gitIgnorePath = path.join(projectPath, ".gitignore");
    const gitIgnoreContent = `node_modules \n.env \nnpm-debug.log`;
    fs.writeFileSync(gitIgnorePath, gitIgnoreContent);
  }

  console.log(chalk.green("✅ Project folder created!\n"));
  console.log(packageAnswer);
  // Installera beroenden
  console.log(chalk.blue("\n📦 Installing dependencies..."));
  execSync(
    `cd ${projectName} && npm install ${defaultPackages.join(
      " "
    )} ${packageAnswer.join(" ")}`,
    { stdio: "inherit" }
  );

  // Installera devDependencies
  console.log(chalk.blue("\n📦 Installing devDependencies..."));
  execSync(
    `cd ${projectName} && npm install --save-dev ${defaultDevPackages.join(
      " "
    )}`,
    { stdio: "inherit" }
  );
};
