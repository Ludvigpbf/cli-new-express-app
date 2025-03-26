import express from "express";
import exampleRouter from "./exampleRoutes";

const mainRouter = express.Router();

mainRouter.get("/example", exampleRouter);
// Add more routes here

export default mainRouter;
