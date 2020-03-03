const {Router} = require('express');
const DevController = require('./controllers/DevController');

const routes = Router();

//para eu receber uma resposta, tipo hello word, eu faço o seguinte:
//async siginifica que uma flag pode demorar a responder
routes.post('/devs', DevController.store);

module.exports = routes;