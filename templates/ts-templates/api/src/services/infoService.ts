import { FcInfo } from "../interfaces/infoInterface";
import { fcInfo } from "../models/infoModel";

export const getAllInfo = (): FcInfo[] => fcInfo;

export const getInfoById = (id: number): FcInfo | undefined =>
  fcInfo.find((info) => info.id === id);

export const createInfo = (newInfo: Omit<FcInfo, "id">): FcInfo => {
  const newId = fcInfo.length > 0 ? Math.max(...fcInfo.map(i => i.id)) + 1 : 1;
  const newEntry: FcInfo = { id: newId, ...newInfo };
  fcInfo.push(newEntry);
  return newEntry;
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
