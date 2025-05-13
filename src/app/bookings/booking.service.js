const Booking = require('./booking.schema');

class BookingService {
  async getAllBookings() {
    return await Booking.find().populate('room');
  }

  async getBookingById(id) {
    return await Booking.findById(id).populate('room');
  }

  async createBooking(data) {
    const booking = new Booking(data);
    return await booking.save();
  }

  async updateBooking(id, data) {
    return await Booking.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteBooking(id) {
    return await Booking.findByIdAndDelete(id);
  }
}

module.exports = BookingService;
