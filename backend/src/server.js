require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Conexão com o MongoDB
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('---\nOK\n---'))
.catch((err) => console.log(err));
// Verificando conexão

const routes = require('./routes');

app.use(express.json());
app.use(routes); // Após o JSON

app.listen(3333);