import inquirer from "inquirer";

export const mochaOptions = ({ selectedLanguage }) => {
  const options = [
    "mocha",
    "mocha-junit-reporter",
    "mocha-multi-reporters",
    "none",
    new inquirer.Separator("--- End of list ---"),
  ];

  // Lägg till TypeScript-specifika Mocha-paket om TypeScript används
  if (selectedLanguage === "typescript") {
    options.splice(-2, 0, "ts-mocha", "@types/mocha");
  }

  return options;
};
