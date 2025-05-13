import api from "./api";

export const getRooms = () => {
  return api.get("/rooms");
};

export const getRoomById = (id) => {
  return api.get(`/rooms/${id}`);
};

export const createRoom = (roomData) => {
  return api.post("/rooms", roomData);
};
