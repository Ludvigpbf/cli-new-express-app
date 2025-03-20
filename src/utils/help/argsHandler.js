import { showHelp, showNameHelp, showLanguageHelp } from "./index.js";

export const handleArgs = (args) => {
  if (args.includes("--help")) {
    showHelp();
    process.exit(0);
  }
  if (args.includes("--name")) {
    showNameHelp();
    process.exit(0);
  }

  if (args.includes("--language")) {
    showLanguageHelp();
    process.exit(0);
  }

  if (args.includes("--readme")) {
    console.log("📝 README file will be included.");
  }

  if (args.includes("--docker")) {
    console.log("🐳 Docker setup will be included.");
  }

  if (args.includes("--github")) {
    console.log("🌍 GitHub repository will be created.");
  }

  if (args.includes("--database")) {
    console.log("🗄️ Database setup will be included.");
  }

  if (args.includes("--template")) {
    console.log("📂 Using a template for project setup.");
  }
};
