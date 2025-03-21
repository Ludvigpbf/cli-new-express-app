const express = require("express");
const { getAll, getById, create, update, remove } = require("../controllers/infoController");

const infoRouter = express.Router();

infoRouter.get("/", getAll);
infoRouter.get("/:id", getById);
infoRouter.post("/", create);
infoRouter.put("/:id", update);
infoRouter.delete("/:id", remove);

module.exports = infoRouter;