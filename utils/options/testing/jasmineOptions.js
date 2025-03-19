import inquirer from "inquirer";

export const jasmineOptions = ({ selectedLanguage }) => {
  const options = [
    "jasmine",
    "jasmine-core",
    "jasmine-spec-reporter",
    "none",
    new inquirer.Separator("--- End of list ---"),
  ];

  // Lägg till TypeScript-specifika Jasmine-paket om TypeScript används
  if (selectedLanguage === "typescript") {
    options.splice(-2, 0, "@types/jasmine", "@types/jasmine-spec-reporter");
  }

  return options;
};
