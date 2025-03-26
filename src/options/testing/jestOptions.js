import inquirer from "inquirer";

export const jestOptions = ({ selectedLanguage }) => {
  const options = [
    { name: "jest", value: "jest", checked: true },
    { name: "supertest", value: "supertest", checked: true },
    { name: "jest-cli", value: "jest-cli" },
    { name: "jest-environment-jsdom", value: "jest-environment-jsdom" },
    { name: "jest-environment-node", value: "jest-environment-node" },
    { name: "jest-extended", value: "jest-extended" },
    { name: "jest-watch-typeahead", value: "jest-watch-typeahead" },
    { name: "jest-worker", value: "jest-worker" },
    { name: "none", value: "none" },
    new inquirer.Separator("--- End of list ---"),
  ];

  // Add TypeScript options if selected language is TypeScript
  if (selectedLanguage === "typescript") {
    options.splice(-2, 0, { name: "ts-jest", value: "ts-jest" }, { name: "@types/jest", value: "@types/jest" });
  }

  return options;
};
