import express from "express";
import mainRouter from "./routes/mainRouter";
import { logger } from "./utils/logger";

const app = express(); // Create Express app

const PORT = process.env.PORT || 3000; // Set default port or use environment port

app.use(express.json()); // Middleware for parsing request bodies

app.use("/api/v1", mainRouter); // Use main router

// Global Error Handler
app.use((err, req, res, next) => {
  logger.error(err.message);
  res.status(500).json({ message: "Internal Server Error" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
