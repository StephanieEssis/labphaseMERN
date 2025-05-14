import api from "@/services/api";

export const getRooms = () => {
  return api.get("/room");
};

export const getRoomById = (id) => {
  return api.get(`/room/${id}`);
};

export const createRoom = (roomData) => {
  return api.post("/room", roomData);
};
