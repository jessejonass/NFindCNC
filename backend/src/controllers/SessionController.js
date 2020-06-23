// Session - o usuário inicia a sessão

// Index, Show, Store, Update, Destroy - MONGODB

const User = require('../models/User');

module.exports = {

  // Assincrona por conta da criação / conexão com o banco de dados
  async store(req, res){
    const { email } = req.body;

    // Buscando um usuário - verificar se já existe
    let user = await User.findOne({ email });

    // Se o usuário não existe, criar um novo
    if(!user){
      user = await User.create({
        email
      });
    }

    return res.json(user);
  }
};