import { logger } from "@utils/logger";
import { WelcomeMessage } from "@models/index";

export const getMessage = (req, res) => {
  logger.info("Fetching all info");
  res.json(WelcomeMessage);
};

const exampleController = {
  getMessage,
};

export default exampleController;
