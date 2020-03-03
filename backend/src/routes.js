const {Router} = require('express');

const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController')

const routes = Router();

routes.get('/devs', DevController.index);
//para eu receber uma resposta, tipo hello word, eu faço o seguinte:
//async siginifica que uma flag pode demorar a responder
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);

module.exports = routes;