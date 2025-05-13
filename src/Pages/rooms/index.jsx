import { useEffect, useState } from 'react';
import { fetchRooms } from '../../services/api';
import RoomCard from '../../components/room/roomCard';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';

export default function RoomsPage() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetchRooms().then(res => setRooms(res.data));
  }, []);

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-8">
        {rooms.map(room => <RoomCard key={room._id} room={room} />)}
      </div>
      <Footer />
    </>
  );
}
