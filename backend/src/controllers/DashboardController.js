// Esse controller listará todos os spots do usuário logado

const Spot = require('../models/Spot'); // Spots que serão listados

module.exports = {
  async show(req, res){

    // Buscando o ID do usuário logado dos headers
    const { user_id } = req.headers;

    // Buscando no mongodb um spot que tenha no campo user um valor igual user_id
    const spots = await Spot.find({ user: user_id });

    return res.json(spots);
  }
}