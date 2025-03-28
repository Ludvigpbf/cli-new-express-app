import { logger } from "../utils/logger.js";
import { WelcomeMessage } from "../models/index.js";

export const getMessage = (req, res) => {
  logger.info("Fetching all info");
  res.json(WelcomeMessage);
};

export const exampleController = {
  getMessage,
};
