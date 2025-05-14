"use client";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div
        className="flex flex-col items-center justify-center text-white p-8 min-h-[80vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/photos-gratuite/suite-luxe-dans-hotel-grande-hauteur-table-travail_105762-1783.jpg?ga=GA1.1.1335567724.1747181258&semt=ais_hybrid&w=740')",
        }}
      >
        <h1 className="text-4xl font-bold text-center drop-shadow-lg">Bienvenue à Mylan Lodge</h1>
        <p className="mt-4 text-center text-lg drop-shadow-md">Découvrez nos chambres et réservez votre séjour.</p>
      </div>
      <Footer />
    </>
  );
}
