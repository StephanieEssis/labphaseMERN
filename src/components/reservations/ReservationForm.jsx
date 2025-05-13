'use client';

import { useState } from 'react';
import axios from 'axios';

export default function ReservationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    roomId: '',
    dateStart: '',
    dateEnd: '',
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/bookings`, formData);
      setSuccessMessage('Réservation effectuée avec succès !');
      setFormData({
        name: '',
        email: '',
        roomId: '',
        dateStart: '',
        dateEnd: '',
      });
    } catch (error) {
      console.error(error);
      alert('Erreur lors de la réservation');
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">Réserver une chambre</h2>

      {successMessage && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
          {successMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Votre nom"
          required
          className="w-full border p-2 rounded"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Votre email"
          required
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          name="roomId"
          value={formData.roomId}
          onChange={handleChange}
          placeholder="ID de la chambre"
          required
          className="w-full border p-2 rounded"
        />
        <input
          type="date"
          name="dateStart"
          value={formData.dateStart}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
        <input
          type="date"
          name="dateEnd"
          value={formData.dateEnd}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
        <button
          type="submit"
          className="w-full bg-gray-600 text-white p-2 rounded hover:bg-gray-900"
        >
          Réserver
        </button>
      </form>
    </div>
  );
}
