import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';
import ReservationForm from '../../app/reservations/ReservationForm';

export default function NewReservation() {
  return (
    <>
      <Navbar />
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Nouvelle Réservation</h1>
        <ReservationForm />
      </div>
      <Footer />
    </>
  );
}
