import { FcInfo } from "../interfaces/infoInterface";
import { fcInfo } from "../models/infoModel";

export const getAllInfo = (): FcInfo[] => fcInfo;

export const getInfoById = (id: number): FcInfo | undefined =>
  fcInfo.find((info) => info.id === id);

export const createInfo = (newInfo: FcInfo): FcInfo => {
  fcInfo.push(newInfo);
  return newInfo;
};

export const updateInfo = (id: number, updatedData: Partial<FcInfo>): FcInfo | null => {
  const index = fcInfo.findIndex((info) => info.id === id);
  if (index === -1) return null;
  fcInfo[index] = { ...fcInfo[index], ...updatedData };
  return fcInfo[index];
};

export const deleteInfo = (id: number): boolean => {
  const index = fcInfo.findIndex((info) => info.id === id);
  if (index === -1) return false;
  fcInfo.splice(index, 1);
  return true;
};