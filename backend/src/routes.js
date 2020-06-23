const routes = require('express').Router();

// Multer para lidar com arquivos
const multer = require('multer');
const uploadConfig = require('./config/upload');
const upload = multer(uploadConfig);

// Importação de controllers
const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');

// Fazendo sesão / login
routes.post('/sessions', SessionController.store);

// Usar a configuração de upload como middleware
routes.post('/spots', upload.single('thumbnail'), SpotController.store);
routes.get('/spots', SpotController.index); // Filtrando

// Listando os spots de um usuário
routes.get('/dashboard', DashboardController.show);

// Criando reserva
routes.post('/spots/:spot_id/bookings', BookingController.store);

module.exports = routes;
