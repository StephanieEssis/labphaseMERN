"use client";
import { useEffect, useState } from "react";
import { getRooms } from "@/services/roomService";

export default function RoomList() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    getRooms()
      .then((res) => setRooms(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2>Nos chambres</h2>
      <ul>
        {rooms.map((room) => (
          <li key={room.id}>{room.name}</li>
        ))}
      </ul>
    </div>
  );
}
