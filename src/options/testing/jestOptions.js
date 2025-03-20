import inquirer from "inquirer";

export const jestOptions = ({ selectedLanguage }) => {
  const options = [
    "jest",
    "jest-cli",
    "jest-environment-jsdom",
    "jest-environment-node",
    "jest-extended",
    "jest-watch-typeahead",
    "jest-worker",
    "none",
    new inquirer.Separator("--- End of list ---"),
  ];

  // Lägg till TypeScript-specifika Jest-paket om TypeScript används
  if (selectedLanguage === "typescript") {
    options.splice(-2, 0, "ts-jest", "@types/jest");
  }

  return options;
};
