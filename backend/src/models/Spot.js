const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({
  thumbnail: String,
  company: String,
  price: Number,
  techs: [String],

  // Relacionar user com spot
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

// Criação do model passando o nome e o schema
module.exports = mongoose.model('Spot', SpotSchema);