import inquirer from "inquirer";

export const jasmineOptions = ({ selectedLanguage }) => {
  const options = [
    { name: "jasmine", value: "jasmine", checked: true },  // "jasmine" as default
    { name: "supertest", value: "supertest", checked: true }, // "supertest" as default
    { name: "jasmine-expect", value: "jasmine-expect", checked: true },  // "jasmine-expect" as default
    { name: "jasmine-core", value: "jasmine-core" },
    { name: "jasmine-spec-reporter", value: "jasmine-spec-reporter" },
    { name: "none", value: "none" },
    new inquirer.Separator("--- End of list ---"),
  ];

  // Add TypeScript options if selected language is TypeScript
  if (selectedLanguage === "typescript") {
    options.splice(-2, 0, { name: "@types/jasmine", value: "@types/jasmine" }, { name: "@types/jasmine-spec-reporter", value: "@types/jasmine-spec-reporter" });
  }

  return options;
};
