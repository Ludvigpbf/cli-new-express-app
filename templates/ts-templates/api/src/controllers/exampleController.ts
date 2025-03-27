import { Request, Response } from "express";

import { getAllMessages } from "@services/exampleService";
import { logger } from "@utils/logger";

export const getAll = (req: Request, res: Response) => {
  logger.info("Handling GET request for welcome message");
  const welcomeMessage = getAllMessages();
  res.json(welcomeMessage);
};

// Add more controller functions here