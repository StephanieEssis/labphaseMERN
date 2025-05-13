import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';

export default function ReservationsPage() {
  return (
    <>
      <Navbar />
      <div className="p-8">
        <h1 className="text-2xl font-bold">Liste des Réservations</h1>
        {/* Affichage futur des réservations */}
      </div>
      <Footer />
    </>
  );
}
