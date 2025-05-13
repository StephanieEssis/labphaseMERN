import Link from 'next/link';

export default function RoomCard({ room }) {
  return (
    <div className="border rounded p-4 shadow">
      <h2 className="text-lg font-semibold">{room.name}</h2>
      <p>{room.description}</p>
      <p className="font-bold mt-2">{room.price} FCFA / nuit</p>
   <Link href={`/rooms/${room._id}`} className="text-emerald-600 mt-2 block">
  Voir
</Link>
 </div>
  );
}
