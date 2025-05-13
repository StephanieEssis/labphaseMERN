const express = require('express');
const dotenv = require('dotenv');
const { connectDatabase } = require('../config/database');

// Import des modules
const RoomModule = require('../Pages/rooms/room.module');
const BookingModule = require('./bookings/booking.module');

// Middlewares globaux
const errorHandler = require('../common/middlewares/errorHandler');
const notFound = require('../common/middlewares/notFound');
const cors = require('cors');

dotenv.config();

function createApp() {
  const app = express();

  // Middlewares globaux
  app.use(express.json());
  app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  }));

  // Connexion à la base de données
  connectDatabase();

  // Modules / routes
  const roomModule = new RoomModule();
  const bookingModule = new BookingModule();

  app.use('/api/rooms', roomModule.router);
  app.use('/api/bookings', bookingModule.router);

  // Healthcheck route
  app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'ok', uptime: process.uptime() });
  });

  // Gestion des routes inconnues
  app.use(notFound);

  // Gestion des erreurs
  app.use(errorHandler);

  return app;
}

module.exports = createApp;
