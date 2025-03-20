import inquirer from "inquirer";
import {
  jestOptions,
  mochaOptions,
  chaiOptions,
  jasmineOptions,
} from "../options/testing/index.js";

/**
 *
 */

export const askTesting = async () => {
  return await inquirer.prompt([
    {
      type: "confirm",
      name: "testing",
      message: "Do you want to include testing in your project?",
      default: true,
    },
    {
      type: "list",
      name: "testingOptions",
      message: "Select testing libraries",
      choices: [
        "jest",
        "mocha",
        "chai",
        "jasmine",
        "none",
        new inquirer.Separator("--- End of list ---"),
      ],
      when: ({ testing }) => testing,
    },
    {
      type: "checkbox",
      name: "jestOptions",
      message: "Select Jest options",
      choices: ({ selectedLanguage }) => jestOptions({ selectedLanguage }),
      when: ({ testingOptions }) =>
        testingOptions && testingOptions.includes("jest"),
    },
    {
      type: "checkbox",
      name: "mochaOptions",
      message: "Select Mocha options",
      choices: ({ selectedLanguage }) => mochaOptions({ selectedLanguage }),
      when: ({ testingOptions }) =>
        testingOptions && testingOptions.includes("mocha"),
    },
    {
      type: "checkbox",
      name: "chaiOptions",
      message: "Select Chai options",
      choices: ({ selectedLanguage }) => chaiOptions({ selectedLanguage }),
      when: ({ testingOptions }) =>
        testingOptions && testingOptions.includes("chai"),
    },
    {
      type: "checkbox",
      name: "jasmineOptions",
      message: "Select Jasmine options",
      choices: ({ selectedLanguage }) => jasmineOptions({ selectedLanguage }),
      when: ({ testingOptions }) =>
        testingOptions && testingOptions.includes("jasmine"),
    },
  ]);
};
