import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Rooms
export const fetchRooms = () => axios.get(`${API_URL}/rooms`);
export const fetchRoomById = (id) => axios.get(`${API_URL}/rooms/${id}`);

// Bookings
export const createBooking = (data) => axios.post(`${API_URL}/bookings`, data);
export const fetchBookings = () => axios.get(`${API_URL}/bookings`);
