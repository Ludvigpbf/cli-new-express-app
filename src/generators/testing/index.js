import { jestConfig } from "./jest.js";
import { mochaConfig } from "./mocha.js";
import { jasmineConfig } from "./jasmine.js";

const testingConfigs = {
  jest: jestConfig,
  mocha: mochaConfig,
  jasmine: jasmineConfig,
};

export default testingConfigs;
