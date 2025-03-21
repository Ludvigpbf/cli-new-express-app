import express from "express";
import { getInfo, getInfoById, updateInfo, createInfo, deleteInfo } from "../controllers/infoController";

const infoRouter = express.Router();

infoRouter.get("/", getInfo);
infoRouter.get("/:id", getInfoById);
infoRouter.post("/", createInfo);
infoRouter.put("/:id", updateInfo);
infoRouter.delete("/:id", deleteInfo);

export default infoRouter;