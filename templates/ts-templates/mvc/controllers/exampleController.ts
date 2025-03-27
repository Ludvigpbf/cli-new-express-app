import { Request, Response } from "express";
import { logger } from "@utils/logger";
import { WelcomeMessage } from "@models/index";

export const getMessage = (req: Request, res: Response): void => {
  logger.info("Fetching all info");
  res.json(WelcomeMessage);
};

const exampleController = {
  getMessage,
};

export default exampleController;