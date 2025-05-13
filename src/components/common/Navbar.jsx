import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between">
      <h1 className="text-xl font-bold">Mylan Lodge</h1>
      <div className="space-x-4">
        <Link href="/">Accueil</Link>
        <Link href="/room">Chambres</Link>
        <Link href="/reservation">Réservations</Link>
      </div>
    </nav>
  );
}
