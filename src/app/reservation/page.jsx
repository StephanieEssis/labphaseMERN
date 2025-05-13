"use client";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
// import ReservationForm from "../../components/reservations/ReservationForm";
import ReservationForm from "@/components/reservations/ReservationForm";

export default function ReservationsPage() {
  return (
    <>
      <Navbar />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Réserver une chambre</h1>
        <ReservationForm />
      </div>
      <Footer />
    </>
  );
}
