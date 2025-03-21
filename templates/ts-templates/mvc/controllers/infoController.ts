import { Request, Response } from "express";
import { logger } from "../utils/logger";
import { InfoModel } from "../models/infoModel";
import { FcInfo } from "../interfaces/infoInterface";

export const getInfo = (req: Request, res: Response): void => {
    logger.info("Fetching all info");
    const data = InfoModel.getInfo();
    res.json(data);
};

export const getInfoById = (req: Request, res: Response): void => {
    const id = parseInt(req.params.id, 10);
    logger.info(`Fetching info with id: ${id}`);
    const data = InfoModel.getInfoById(id);
    if (data) {
        res.json(data);
    } else {
        res.status(404).json({ message: "Info not found" });
    }
};

export const createInfo = (req: Request, res: Response): void => {
    const newInfo: FcInfo = req.body;
    logger.info("Creating new info entry");
    const createdInfo = InfoModel.createInfo(newInfo);
    res.status(201).json(createdInfo);
};

export const updateInfo = (req: Request, res: Response): void => {
    const id = parseInt(req.params.id, 10);
    const updatedData: Partial<FcInfo> = req.body;
    logger.info(`Updating info with id: ${id}`);
    const updatedInfo = InfoModel.updateInfo(id, updatedData);
    if (updatedInfo) {
        res.json(updatedInfo);
    } else {
        res.status(404).json({ message: "Info not found" });
    }
};

export const deleteInfo = (req: Request, res: Response): void => {
    const id = parseInt(req.params.id, 10);
    logger.info(`Deleting info with id: ${id}`);
    const success = InfoModel.deleteInfo(id);
    if (success) {
        res.json({ message: "Info deleted" });
    } else {
        res.status(404).json({ message: "Info not found" });
    }
};