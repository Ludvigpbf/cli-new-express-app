import express from "express";
import { getAll } from "../controllers/exampleController";

const exampleRouter = express.Router();

exampleRouter.get("/welcome-message", getAll);
// Add more routes here

export default exampleRouter;
