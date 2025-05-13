"use client";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="p-8">
        <h1 className="text-3xl font-bold text-center">Bienvenue à Mylan Lodge</h1>
        <p className="mt-4 text-center">Découvrez nos chambres et réservez votre séjour.</p>
      </div>
      <Footer />
    </>
  );
}
