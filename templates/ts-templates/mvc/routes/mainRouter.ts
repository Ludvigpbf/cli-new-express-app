import express from "express";
import exampleRouter  from "@routes/exampleRouter";

const mainRouter = express.Router();

mainRouter.use("/example", exampleRouter);

export default mainRouter;