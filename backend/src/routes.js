const {Router} = require('express');

const routes = Router();

//para eu receber uma resposta, tipo hello word, eu faço o seguinte:
routes.post('/users', (request, response) => { //quando eu acessar localhost:3333 eu caio em /users
    //quando eu acesso alguma rota eu to fazendo uma requisição (request). Todas as informações para criar um registro vão estar dentro ddo request
    //o response é como a gente vai devolver uma resposta para o nosso cliente
    //return response.send('Hello World'); //o send envia um texto como resposta
    //nós vamos usar o json, então nao vamos usar o send pra enviar resposta
    console.log(request.body);
    return response.json({ message: 'Hello Omnistack' });
});

module.exports = routes;