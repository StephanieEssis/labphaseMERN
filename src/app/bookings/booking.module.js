const express = require('express');
const BookingController = require('./booking.controller');
const BookingService = require('./booking.service');

class BookingModule {
  constructor() {
    this.router = express.Router();
    const bookingService = new BookingService();
    this.bookingController = new BookingController(bookingService);
    this.registerRoutes();
  }

  registerRoutes() {
    this.router.get('/', this.bookingController.getAllBookings);
    this.router.post('/', this.bookingController.createBooking);
    this.router.get('/:id', this.bookingController.getBookingById);
    this.router.put('/:id', this.bookingController.updateBooking);
    this.router.delete('/:id', this.bookingController.deleteBooking);
  }
}

module.exports = BookingModule;
