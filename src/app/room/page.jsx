"use client";

import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import RoomCard from "@/components/room/roomCard";

export default function RoomsPage() {
  const rooms = [
    {
      _id: "1",
      name: "Chambre Deluxe",
      description: "Superbe chambre avec vue sur la mer.",
      price: 60000,
    },
    {
      _id: "2",
      name: "Suite Prestige",
      description: "Suite luxueuse avec jacuzzi privé.",
      price: 80000,
    },
    {
      _id: "3",
      name: "chambre standard",
      description: "Confortable et fonctionnelle, avec lit double ou lits jumeaux, salle de bain privative et Wi-Fi gratuit.",
      price: 45000,
    },
  ];

  return (
    <>
      <Navbar />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">Nos chambres</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rooms.map((room) => (
            <RoomCard key={room._id} room={room} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
