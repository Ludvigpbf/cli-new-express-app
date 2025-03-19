import { Request, Response, NextFunction } from "express";
import { logger } from "../utils/logger";

/** */
class AppError extends Error {
  statusCode: number;
  constructor(message: string, statusCode: number = 500) {
    super(message);
    this.statusCode = statusCode;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

/**
 * Error handler middleware
 * @param err Error object
 * @param req Request object
 * @param res Response object
 * @param next Next function
 * @returns void
 * @example
 * errorHandler(new AppError("Not found", 404), req, res, next);
 */
const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  let statusCode = 500;
  let message = "Something went wrong";

  if (err instanceof AppError) {
    statusCode = err.statusCode;
    message = err.message;
  }

  logger.error(message, err);
  res.status(statusCode).json({ success: false, message });
};

export { errorHandler, AppError };
