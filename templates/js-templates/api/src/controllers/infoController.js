import {
  getAllInfo,
  getInfoById,
  createInfo,
  updateInfo,
  deleteInfo,
} from "../services/infoService";
import { logger } from "../utils/logger";

const getAll = (req, res) => {
  logger.info("Fetching all Flyckt Coding info");
  res.json(getAllInfo());
};

const getById = (req, res) => {
  const id = parseInt(req.params.id);
  const info = getInfoById(id);
  if (!info) {
    logger.warn(`Info with id ${id} not found`);
    return res.status(404).json({ message: "Not found" });
  }
  res.json(info);
};

const create = (req, res) => {
  const newInfo = createInfo(req.body);
  logger.info(`New info created: ${JSON.stringify(newInfo)}`);
  res.status(201).json(newInfo);
};

const update = (req, res) => {
  const id = parseInt(req.params.id);
  const updatedInfo = updateInfo(id, req.body);
  if (!updatedInfo) {
    logger.warn(`Update failed for id ${id}`);
    return res.status(404).json({ message: "Not found" });
  }
  logger.info(`Updated info with id ${id}: ${JSON.stringify(updatedInfo)}`);
  res.json(updatedInfo);
};

const remove = (req, res) => {
  const id = parseInt(req.params.id);
  if (!deleteInfo(id)) {
    logger.warn(`Delete failed for id ${id}`);
    return res.status(404).json({ message: "Not found" });
  }
  logger.info(`Deleted info with id ${id}`);
  res.status(204).send();
};

module.exports = { getAll, getById, create, update, remove };
