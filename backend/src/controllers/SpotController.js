const Spot = require('../models/Spot');
const User = require('../models/User'); // Importado para validação

module.exports = {

  // Retornando os Spots separados por tecnologia
  async index(req, res){

    // Query para filtros - req.query.tech
    const { tech } = req.query;

    // Listando spots só da tecnologia com funcionalidade do MongoDB
    const spots = await Spot.find({ techs: tech });

    return res.json(spots);
  },

  async store(req, res){
    
    const { filename } = req.file; // file como campo do body - multpart form;
    const { company, techs, price } = req.body;
    const { user_id } = req.headers; // ID do usuário logado - JWT 

    // Validando existência de usuário
    const user = await User.findById(user_id);
    if(!user){
      return res.status(400).json({ Error: 'User not found' });
    }

    const spot = await Spot.create({
      user: user_id,
      thumbnail: filename,
      company,
      techs: techs.split(',').map(tech => tech.trim()), // Removendo vírgula e espaço
      price
    });

    return res.json(spot);
  }
};