import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { fetchRoomById } from '../../services/api';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';

export default function RoomDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [room, setRoom] = useState(null);

  useEffect(() => {
    if (id) {
      fetchRoomById(id).then(res => setRoom(res.data)).catch(err => {
        console.error('Erreur lors de la récupération de la chambre:', err);
      });
    }
  }, [id]);

  if (!room) return <p>Chargement...</p>;

  return (
    <>
      <Navbar />
      <div className="p-8">
        <h1 className="text-2xl font-bold">{room.name}</h1>
        <p className="mt-2">{room.description}</p>
        <p className="mt-2 font-semibold">{room.price} FCFA / nuit</p>
      </div>
      <Footer />
    </>
  );
}
