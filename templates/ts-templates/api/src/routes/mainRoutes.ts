import express from "express";
import exampleRouter from "@routes/exampleRoutes";

const mainRouter = express.Router();

mainRouter.get("/example", exampleRouter);
// Add more routes here

export default mainRouter;
