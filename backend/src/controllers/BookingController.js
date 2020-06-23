const { store } = require("./SessionController");

const Booking = require('../models/Booking');

module.exports = {
  async store(req, res) {

    // Usuário logado dos headers
    const { user_id } = req.headers;
    const { spot_id } = req.params;
    const { date } = req.body;

    // Em qual Spot ele tá fazendo a reserva com o PARAMS - id do spot
    const booking = await Booking.create({
      user: user_id,
      spot: spot_id,
      date: date,
    });

    // Trazer informações completas do usuário e do spot com func do MONGODB
    await booking.populate('spot').populate('user').execPopulate();  

    return res.json(booking);
  }
};