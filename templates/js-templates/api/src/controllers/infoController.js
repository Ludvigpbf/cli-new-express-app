import { logger } from "../utils/logger";

let infoData = [];
let currentId = 1;

const getAll = (req, res) => {
  logger.info("Fetching all Flyckt Coding info");
  res.json(infoData);
};

const getById = (req, res) => {
  const id = parseInt(req.params.id);
  const info = infoData.find((item) => item.id === id);
  if (!info) {
    logger.warn(`Info with id ${id} not found`);
    return res.status(404).json({ message: "Not found" });
  }
  res.json(info);
};

const create = (req, res) => {
  const newInfo = { id: currentId++, ...req.body };
  infoData.push(newInfo);
  logger.info(`New info created: ${JSON.stringify(newInfo)}`);
  res.status(201).json(newInfo);
};

const update = (req, res) => {
  const id = parseInt(req.params.id);
  const index = infoData.findIndex((item) => item.id === id);
  if (index === -1) {
    logger.warn(`Update failed for id ${id}`);
    return res.status(404).json({ message: "Not found" });
  }
  infoData[index] = { ...infoData[index], ...req.body };
  logger.info(`Updated info with id ${id}: ${JSON.stringify(infoData[index])}`);
  res.json(infoData[index]);
};

const remove = (req, res) => {
  const id = parseInt(req.params.id);
  const index = infoData.findIndex((item) => item.id === id);
  if (index === -1) {
    logger.warn(`Delete failed for id ${id}`);
    return res.status(404).json({ message: "Not found" });
  }
  infoData.splice(index, 1);
  logger.info(`Deleted info with id ${id}`);
  res.status(204).send();
};

module.exports = { getAll, getById, create, update, remove };
