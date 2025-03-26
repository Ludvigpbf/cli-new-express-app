import inquirer from "inquirer";

export const mochaOptions = ({ selectedLanguage }) => {
  const options = [
    { name: "mocha", value: "mocha", checked: true },  // "mocha" as default
    { name: "chai", value: "chai", checked: true },  // "chai" as default
    { name: "mocha-junit-reporter", value: "mocha-junit-reporter" },
    { name: "mocha-multi-reporters", value: "mocha-multi-reporters" },
    { name: "none", value: "none" },
    new inquirer.Separator("--- End of list ---"),
  ];

  // Add TypeScript options if selected language is TypeScript
  if (selectedLanguage === "typescript") {
    options.splice(-2, 0, { name: "ts-mocha", value: "ts-mocha" }, { name: "@types/mocha", value: "@types/mocha" });
  }

  return options;
};

