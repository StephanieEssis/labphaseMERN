import { fetchRoomById } from '@/services/api';

export default async function RoomDetailPage({ params }) {
  const room = await fetchRoomById(params.id);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow">
      <h1 className="text-3xl font-bold mb-4">{room.name}</h1>
      <p className="text-gray-700 mb-2">{room.description}</p>
      <p className="text-gray-600">Prix : {room.price} FCFA / nuit</p>
    </div>
  );
}
