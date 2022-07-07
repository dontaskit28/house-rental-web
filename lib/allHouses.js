import HouseData from "../data/houses.json";

export const getAllHouses = async () => {
  return HouseData;
};

export const getHouseById = async (houseId) => {
  return HouseData.find((house) => house._id == houseId);
};
