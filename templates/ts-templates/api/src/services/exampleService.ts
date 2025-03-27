import { WelcomeMessage } from "@models/exampleModel";
import { logger } from "@utils/logger";

export const getAllMessages = () => {
  logger.info("Fetched welcome message from model");
  return WelcomeMessage;
};

// Add more service functions here
