const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: String,
});

// Criação do model passando o nome e o schema
module.exports = mongoose.model('User', UserSchema);