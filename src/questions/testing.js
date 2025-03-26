import inquirer from "inquirer";
import {
  jestOptions,
  mochaOptions,
  jasmineOptions,
} from "../options/testing/index.js";

/**
 *
 * @returns {Promise<object>} The answers from the user.
 *
 */

export const askTesting = async () => {
  const useTesting = await inquirer.prompt([
    {
      type: "confirm",
      name: "testing",
      message: "Do you want to include testing in your project?",
      default: true,
    },
  ]);

  // Om användaren väljer bort testning, returnera direkt
  if (!useTesting.testing) {
    return { useTesting: false, testingTool: null, testingConfig: null };
  }

  const testingTool = await inquirer.prompt([
    {
      type: "list",
      name: "testingTool",
      message: "Select testing libraries",
      choices: [
        "jest",
        "mocha",
        "jasmine",
        "none",
        new inquirer.Separator("--- End of list ---"),
      ],
    },
  ]);

  if (testingTool.testingTool === "none") {
    return { useTesting: false, testingTool: null, testingConfig: null };
  }

  const testingConfig = await inquirer.prompt([
    {
      type: "checkbox",
      name: "jestPacks",
      message: "Select Jest packages",
      choices: ({ selectedLanguage }) => jestOptions({ selectedLanguage }),
      when: () => testingTool.testingTool === "jest",
    },
    {
      type: "checkbox",
      name: "mochaPacks",
      message: "Select Mocha packages",
      choices: ({ selectedLanguage }) => mochaOptions({ selectedLanguage }),
      when: () => testingTool.testingTool === "mocha",
    },
    {
      type: "checkbox",
      name: "jasminePacks",
      message: "Select Jasmine packages",
      choices: ({ selectedLanguage }) => jasmineOptions({ selectedLanguage }),
      when: () => testingTool.testingTool === "jasmine",
    },
  ]);

  return {
    useTesting: useTesting.testing,
    testingTool: testingTool.testingTool,
    testingConfig,
  };
};
