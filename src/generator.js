import chalk from "chalk";
import fs from "fs-extra";
import path from "path";
import { execSync } from "child_process";
import dbConfigs from "./generators/database/index.js";
import testingConfigs from "./generators/testing/index.js";
import { GITHUB_REPO, TEMPLATES_DIR } from "./utils/gitConfig.js";

/**
 * Creates a new project folder and installs dependencies.
 * @param {string} projectName - The name of the project.
 * @param {string} selectedLanguage - The selected language for the project.
 * @param {string} templateAnswer - The selected template for the project.
 * @param {boolean} readmeAnswer - Whether to include a README.md file.
 * @param {boolean} testingAnswer - Whether to include testing.
 * @param {boolean} dockerAnswer - Whether to include Docker.
 * @param {object} dockerConfig - Docker configuration options.
 * @param {string} databaseAnswer - The selected database for the project.
 * @param {string[]} packageAnswer - The selected packages for the project.
 * @returns {Promise<void>} A Promise.
 *
 * @example
 * createProject("my-project", "JavaScript", "Basic", true, true, true, { dockerBaseImage: "node:14", dockerPorts: 3000 }, "MongoDB", ["express"]);
 *
 */

export const createProject = async (
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
) => {
  // Create project folder
  console.log(chalk.green("\n---------------------------\n"));

  console.log(chalk.blue(`📂 Creating project folder: ${projectName}...`));
  const tempDir = path.join(process.cwd(), "temp-clone");
  const projectPath = path.join(process.cwd(), projectName);
  const templateFolder =
    selectedLanguage === "TypeScript" ? "ts-templates" : "js-templates";

  console.log(chalk.blue("📥 Fetching templates from GitHub..."));

  // Clone the template repository and sparse-checkout the selected template
  execSync(
    `git clone --depth=1 --filter=blob:none --sparse ${GITHUB_REPO} ${tempDir}`,
    { stdio: "ignore" }
  );
  execSync(
    `cd ${tempDir} && git sparse-checkout set ${TEMPLATES_DIR}/${templateFolder}/${templateAnswer.toLowerCase()}`,
    { stdio: "ignore" }
  );

  const templatePath = path.join(
    tempDir,
    TEMPLATES_DIR,
    templateFolder,
    templateAnswer.toLowerCase()
  );

  console.log(chalk.blue(`📥 Copying ${selectedLanguage} template...`));
  await fs.copy(templatePath, projectPath);

  // Remove the temporary clone directory
  await fs.remove(tempDir);

  // Add projectName to package.json
  const packageJsonPath = path.join(projectPath, "package.json");
  const packageJson = fs.readJsonSync(packageJsonPath);
  packageJson.name = projectName;
  fs.writeJsonSync(packageJsonPath, packageJson, { spaces: 2 });

  console.log(chalk.green("\n✅ Folder setup completed!"));

  console.log(chalk.green("\n---------------------------\n"));
  // Create README.md
  if (readmeAnswer) {
    console.log(chalk.blue("📝 Creating README.md..."));
    const readmePath = path.join(projectPath, "README.md");
    const readmeContent = `# ${projectName}
    
    Welcome to ${projectName}!
    
    ## Description
    A new awesome project created with this generator.
    
    ## Installation
    \`\`\`sh
    npm install
    \`\`\`
  
  ## Usage
  \`\`\`sh
  npm start
  \`\`\`
  
  ## License
  This project is licensed under the MIT License.
  `;

    fs.writeFileSync(readmePath, readmeContent);
  }

  console.log(chalk.green("\n✅ README.md created!"));

  console.log(chalk.green("\n---------------------------\n"));

  console.log(chalk.blue("📄 Updating database configuration..."));

  let dbFilePath = "";

  // Set the path to the database configuration file based on the template
  if (templateAnswer === "Basic") {
    dbFilePath = path.join(
      projectPath,
      "db",
      `db.${selectedLanguage === "TypeScript" ? "ts" : "js"}`
    );
  } else if (templateAnswer === "API") {
    dbFilePath = path.join(
      projectPath,
      "src",
      "configs",
      `db.${selectedLanguage === "TypeScript" ? "ts" : "js"}`
    );
  } else if (templateAnswer === "MVC") {
    dbFilePath = path.join(
      projectPath,
      "db",
      `db.${selectedLanguage === "TypeScript" ? "ts" : "js"}`
    );
  }

  // Check if the database configuration file exists
  if (fs.existsSync(dbFilePath)) {
    const dbContent = dbConfigs[databaseAnswer] || `// No database selected`;

    // Update the database configuration file
    fs.writeFileSync(dbFilePath, dbContent.trim());
    console.log(
      chalk.green(`\n✅ ${path.basename(dbFilePath)} has been updated!`)
    );
  } else {
    console.log(chalk.red(`⚠️ Expected db file not found: ${dbFilePath}`));
  }

  console.log(chalk.green("\n---------------------------\n"));

  // Create testing environment
  if (testingAnswer && testingTool) {
    console.log(chalk.blue("🧪 Setting up testing environment..."));

    const testingPath = path.join(projectPath, "tests");
    fs.mkdirSync(testingPath, { recursive: true });

    // Dynamically create the test configuration file based on the selected testing framework
    const testConfigFileName = `${testingTool.toLowerCase()}.config.js`;
    const testingConfigPath = path.join(testingPath, testConfigFileName);

    // Get the content of the selected testing framework configuration file
    const testingConfigContent =
      testingConfigs[testingTool] || `//  No testing framework selected`;

    // Populate the test configuration file with the content
    fs.writeFileSync(testingConfigPath, testingConfigContent.trim());

    console.log(
      chalk.green(`\n✅ Testing environment created: ${testConfigFileName}!`)
    );
  } else {
    console.log(chalk.red("⚠️ No testing framework selected."));
  }

  console.log(chalk.green("\n---------------------------\n"));

  console.log(chalk.blue("🐳 Setting up Docker environment\n"));

  // Create .dockerignore
  if (dockerAnswer) {
    console.log(chalk.blue("🐳 Creating .dockerignore..."));
    const dockerIgnorePath = path.join(projectPath, ".dockerignore");
    const dockerIgnoreContent = `node_modules \nnpm-debug.log`;
    fs.writeFileSync(dockerIgnorePath, dockerIgnoreContent);
  }

  // Create Dockerfile
  if (dockerAnswer) {
    console.log(chalk.blue("🐳 Creating Dockerfile..."));
    const dockerfilePath = path.join(projectPath, "Dockerfile");
    const dockerfileContent = `
    # Use the specified base image
    FROM ${dockerConfig.dockerBaseImage || "node:latest"}
  
    # Set the working directory
    WORKDIR /usr/src/app
  
    # Copy package files and install dependencies
    COPY package*.json ./
    RUN npm install
  
    # Copy project files
    COPY . .
  
    # Expose the specified port
    EXPOSE ${dockerConfig.dockerPorts || 3000}
  
    # Start the application
    CMD ["npm", "start"]
    `;
    fs.writeFileSync(dockerfilePath, dockerfileContent.trim());
  }

  // Create docker-compose.yml if selected in the options
  if (dockerAnswer && dockerConfig.useDockerCompose) {
    console.log(chalk.blue("🐳 Creating docker-compose.yml..."));
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
  console.log(chalk.green("\n✅ Docker setup completed!"));

  console.log(chalk.green("\n---------------------------\n"));

  // Add database packages
  if (databaseAnswer === "MongoDB") {
    packageAnswer.push("mongoose");
  } else if (databaseAnswer === "PostgreSQL") {
    packageAnswer.push("pg", "pg-hstore");
  } else if (databaseAnswer === "MySQL") {
    packageAnswer.push("mysql2");
  } else if (databaseAnswer === "SQLite") {
    packageAnswer.push("sqlite3");
  }

  if (testingConfig) {
    Object.values(testingConfig).forEach((packages) => {
      if (Array.isArray(packages)) {
        packages.forEach((pkg) => {
          if (pkg !== "none") {
            packageAnswer.push(pkg);
          }
        });
      }
    });
  }

  // Install dependencies
  if (packageAnswer.length > 0) {
    console.log(chalk.blue("📦 Installing selected dependencies..."));
    execSync(`cd ${projectName} && npm install ${packageAnswer.join(" ")}`, {
      stdio: "inherit",
    });
  }
  console.log(chalk.green("\n---------------------------\n"));

  // Next function in new-express-app.js row 49
};
