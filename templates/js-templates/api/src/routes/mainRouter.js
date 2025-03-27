import express from "express";
import exampleRouter from "./exampleRouter.js";

const mainRouter = express.Router();

mainRouter.use("/example", exampleRouter);

export default mainRouter;
