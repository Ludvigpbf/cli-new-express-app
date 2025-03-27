import express from "express";
import mainRouter from "./routes/mainRouter";
import { errorHandler } from "./middlewares/errorHandler";
import { logger } from "./utils/logger";

const app = express(); // Create Express app

const PORT = process.env.PORT || 3000; // Set default port or use environment port

app.use(express.json()); // Middleware for parsing request bodies

// Middleware for logging requests
app.use((req, res, next) => {
    logger.info(`${req.method} ${req.url}`);
    next();
});

app.use("/api/v1", mainRouter); // Use main router

// Global Error Handler
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
