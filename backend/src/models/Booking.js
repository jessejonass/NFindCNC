const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  date: String,
  approved: Boolean,

  // Que usuário quer fazer reserva
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },

  // Para qual booking ele quer fazer reserva
  spot: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Spot'
  }
});

// Criação do model passando o nome e o schema
module.exports = mongoose.model('Booking', BookingSchema);