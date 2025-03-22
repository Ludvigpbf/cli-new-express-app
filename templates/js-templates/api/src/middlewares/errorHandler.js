import { logger } from "../utils/logger";

class AppError extends Error {
  constructor(message, statusCode = 500) {
    super(message);
    this.statusCode = statusCode;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

const errorHandler = (err, req, res, next) => {
  let statusCode = 500;
  let message = "Something went wrong";

  if (err instanceof AppError) {
    statusCode = err.statusCode;
    message = err.message;
  }

  logger.error(message, err);
  res.status(statusCode).json({ success: false, message });
};

module.exports = { errorHandler, AppError };
