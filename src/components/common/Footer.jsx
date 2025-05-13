"use client";
import { useState, useEffect } from "react";

export default function Footer() {
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-gray-900 text-white text-center p-4 mt-8">
      © {year} Mylan Lodge. Tous droits réservés.
    </footer>
  );
}
