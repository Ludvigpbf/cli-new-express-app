import { fcInfo } from "../models/infoModel";

const getAllInfo = () => fcInfo;

const getInfoById = (id) => fcInfo.find((info) => info.id === id);

const createInfo = (newInfo) => {
  fcInfo.push(newInfo);
  return newInfo;
};

const updateInfo = (id, updatedData) => {
  const index = fcInfo.findIndex((info) => info.id === id);
  if (index === -1) return null;
  fcInfo[index] = { ...fcInfo[index], ...updatedData };
  return fcInfo[index];
};

const deleteInfo = (id) => {
  const index = fcInfo.findIndex((info) => info.id === id);
  if (index === -1) return false;
  fcInfo.splice(index, 1);
  return true;
};

module.exports = {
  getAllInfo,
  getInfoById,
  createInfo,
  updateInfo,
  deleteInfo,
};
