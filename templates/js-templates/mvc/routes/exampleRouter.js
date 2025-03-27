import express from "express";
import {exampleController} from "@controllers/index";

const exampleRouter = express.Router();

exampleRouter.get("/welcome-message", exampleController.getMessage);


export default exampleRouter;