const {Router} = require('express');
const axios = require('axios');
const Dev = require('./models/Dev');

const routes = Router();

//para eu receber uma resposta, tipo hello word, eu faço o seguinte:
//async siginifica que uma flag pode demorar a responder
routes.post('/devs', async (request, response) => { //quando eu acessar localhost:3333 eu caio em /users
    //quando eu acesso alguma rota eu to fazendo uma requisição (request). Todas as informações para criar um registro vão estar dentro ddo request
    //o response é como a gente vai devolver uma resposta para o nosso cliente
    //return response.send('Hello World'); //o send envia um texto como resposta
    //nós vamos usar o json, então nao vamos usar o send pra enviar resposta
    const { github_username, techs, latitude, longitude } = request.body;
    //o await obriga a esperar a resposta antes de passar para a próxima linha
    const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);//quando eu coloco crase ao inves de aspas simples eu consigo colocar uma variavel no meio

    const {name = login, avatar_url, bio } = apiResponse.data;

    const techsArray = techs.split(',').map(tech => tech.trim());

    const location = {
        type: 'Point',
        coordinates: [longitude, latitude], 
    }

    const dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location
    })

    return response.json(dev);
});

module.exports = routes;