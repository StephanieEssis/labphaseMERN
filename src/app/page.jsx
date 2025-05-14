// "use client";
// import Link from "next/link";
// import Navbar from "../components/common/Navbar";
// import Footer from "../components/common/Footer";

// export default function Home() {
//   return (
//     <>
//       <div
//         className="min-h-screen bg-cover bg-center flex flex-col"
//         style={{
//           backgroundImage:
//             "url('https://img.freepik.com/photos-gratuite/suite-luxe-dans-hotel-grande-hauteur-table-travail_105762-1783.jpg?ga=GA1.1.1335567724.1747181258&semt=ais_hybrid&w=740'  )",
//         }}
//       >
//         <Navbar />
//         <div className="flex flex-1 flex-col items-center justify-center text-white p-8 bg-black/45">
//           <h1 className="text-4xl font-bold text-center drop-shadow-lg">Bienvenue à Mylan Lodge</h1>
//           <p className="mt-4 text-center text-lg drop-shadow-md">Découvrez nos chambres et réservez votre séjour.</p>

//           {/* Bouton */}
//           <Link
//             href="/room"
//             className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-blue-950 font-semibold py-3 px-6 rounded-xl shadow-lg transition duration-300"
//           >
//             Voir les chambres
//           </Link>
//         </div>
//         <Footer />
//       </div>
//     </>
//   );
// }
'use client';
import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

export default function Home() {
  const images = [
    'https://img.freepik.com/photos-gratuite/suite-luxe-dans-hotel-grande-hauteur-table-travail_105762-1783.jpg',
    'https://img.freepik.com/photos-premium/lit-confortable-dans-chambre-hotel-style-moderne_1048944-325497.jpg',
    'https://img.freepik.com/photos-gratuite/petit-dejeuner-flottant-dans-incroyable-villa-hotel-dans-piscine-bleue_343596-1144.jpg?ga=GA1.1.1431798972.1746791497&semt=ais_hybrid&w=740'
  ];

  const [backgroundUrl, setBackgroundUrl] = useState(images[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundUrl((currentUrl) => {
        const currentIndex = images.indexOf(currentUrl);
        const nextIndex = (currentIndex + 1) % images.length;
        return images[nextIndex];
      });
    }, 5000); // change toutes les 5 secondes

    return () => clearInterval(interval); // clean up à la destruction du composant
  }, []);

  return (
    <>
      <div
        className="min-h-screen bg-cover bg-center flex flex-col transition-all duration-1000"
        style={{
          backgroundImage: `url('${backgroundUrl}')`,
        }}
      >
        <Navbar />
        <div className="flex flex-1 flex-col items-center justify-center text-white p-8 bg-black/45">
          <h1 className="text-4xl font-bold text-center drop-shadow-lg">Bienvenue à Mylan Lodge</h1>
          <p className="mt-4 text-center text-lg drop-shadow-md">Découvrez nos chambres et réservez votre séjour.</p>

          <Link
            href="/room"
            className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-blue-950 font-semibold py-3 px-6 rounded-xl shadow-lg transition duration-300"
          >
            Voir les chambres
          </Link>
        </div>
        <Footer />
      </div>
    </>
  );
}
