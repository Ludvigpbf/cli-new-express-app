import { Request, Response } from "express";
import {
  getAllInfo,
  getInfoById,
  createInfo,
  updateInfo,
  deleteInfo,
} from "../services/infoService";
import { logger } from "../utils/logger";

export const getAll = (req: Request, res: Response) => {
  logger.info("Fetching all Flyckt Coding info");
  res.json(getAllInfo());
};

export const getById = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const info = getInfoById(id);
  if (!info) {
    logger.warn(`Info with id ${id} not found`);
    return res.status(404).json({ message: "Not found" });
  }
  return res.json(info);
};

export const create = (req: Request, res: Response) => {
  const newInfo = createInfo(req.body);
  logger.info(`New info created: ${JSON.stringify(newInfo)}`);
  res.status(201).json(newInfo);
};

export const update = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const updatedInfo = updateInfo(id, req.body);
  if (!updatedInfo) {
    logger.warn(`Update failed for id ${id}`);
    return res.status(404).json({ message: "Not found" });
  }
  logger.info(`Updated info with id ${id}: ${JSON.stringify(updatedInfo)}`);
  return res.json(updatedInfo);
};

export const remove = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  if (!deleteInfo(id)) {
    logger.warn(`Delete failed for id ${id}`);
    return res.status(404).json({ message: "Not found" });
  }
  logger.info(`Deleted info with id ${id}`);
  return res.status(204).send();
};
