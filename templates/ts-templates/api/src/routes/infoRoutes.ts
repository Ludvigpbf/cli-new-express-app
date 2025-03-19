import express from "express";
import { getAll, getById, create, update, remove } from "../controllers/infoController";

const infoRouter = express.Router();

infoRouter.get("/", getAll);
infoRouter.get("/:id", getById);
infoRouter.post("/", create);
infoRouter.put("/:id", update);
infoRouter.delete("/:id", remove);

export default infoRouter;
