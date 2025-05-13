class BookingController {
  constructor(bookingService) {
    this.bookingService = bookingService;

    this.getAllBookings = this.getAllBookings.bind(this);
    this.getBookingById = this.getBookingById.bind(this);
    this.createBooking = this.createBooking.bind(this);
    this.updateBooking = this.updateBooking.bind(this);
    this.deleteBooking = this.deleteBooking.bind(this);
  }

  async getAllBookings(req, res) {
    try {
      const bookings = await this.bookingService.getAllBookings();
      res.status(200).json(bookings);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getBookingById(req, res) {
    try {
      const booking = await this.bookingService.getBookingById(req.params.id);
      if (!booking) return res.status(404).json({ message: 'Booking not found' });
      res.status(200).json(booking);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async createBooking(req, res) {
    try {
      const newBooking = await this.bookingService.createBooking(req.body);
      res.status(201).json(newBooking);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async updateBooking(req, res) {
    try {
      const updatedBooking = await this.bookingService.updateBooking(req.params.id, req.body);
      if (!updatedBooking) return res.status(404).json({ message: 'Booking not found' });
      res.status(200).json(updatedBooking);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async deleteBooking(req, res) {
    try {
      const deletedBooking = await this.bookingService.deleteBooking(req.params.id);
      if (!deletedBooking) return res.status(404).json({ message: 'Booking not found' });
      res.status(200).json({ message: 'Booking deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = BookingController;
