import express from "express";
import  infoRouter  from "../routes/infoRouter";

const mainRouter = express.Router();

mainRouter.use("/info", infoRouter);

export default mainRouter;