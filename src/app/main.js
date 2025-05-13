const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { connectDatabase } = require('../config/database');

// Middlewares
const errorHandler = require('../common/middlewares/errorHandler');
const notFound = require('../common/middlewares/notFound');

// Modules
const RoomModule = require('../Pages/rooms/room.module');
const BookingModule = require('./bookings/booking.module');

dotenv.config();

// Création de l'application
const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares globaux
app.use(express.json());
app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true,
}));

// Connexion MongoDB
connectDatabase();

// Modules / routes
const roomModule = new RoomModule();
const bookingModule = new BookingModule();

app.use('/api/rooms', roomModule.router);
app.use('/api/bookings', bookingModule.router);

// Route de test
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', uptime: process.uptime() });
});

// Middleware pour gérer les routes inexistantes
app.use(notFound);

// Middleware pour gérer les erreurs
app.use(errorHandler);

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
