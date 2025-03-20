import inquirer from "inquirer";
/**
 * Chai options with TypeScript options if selected language is TypeScript
 * @param {string} selectedLanguage - The selected language
 * @returns {string[]} - The Chai options
 */
export const chaiOptions = ({ selectedLanguage }) => {
  const options = [
    "chai",
    "chai-as-promised",
    "chai-http",
    "chai-subset",
    "chai-spies",
    "none",
    new inquirer.Separator("--- End of list ---"),
  ];

  // Add TypeScript options if selected language is TypeScript
  if (selectedLanguage === "typescript") {
    options.splice(-2, 0, "@types/chai", "@types/chai-as-promised");
  }

  return options;
};
