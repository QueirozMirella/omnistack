const express = require('express'); //agora eu tenho o expressa na variavel express
const mongoose = require('mongoose'); //conecta com a base de dados do mongodb
const routes = require('./routes');

const app = express(); //crio uma variavel que recebe a função express e agora a aplicação ta criada;

mongoose.connect('mongodb+srv://omnistack:<josimisu1996>@cluster0-iumjh.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json()); //o jason precisa vir primeiro senão nada depois funciona
app.use(routes);

app.listen(3333); //quando eu acessar localhost:3333 eu acesso o servidor
//os principais métodos HTTP que serão usados são o get, post, put e delete.
//o método get busca uma informação (listar usuários, buscar apenas 1 usuário)
//post eu uso para criar alguma informação
//put é para editar um usuário ou recurso da minha aplicação
// delete é para deletar uma informação

//tipo de parametro dentro do express:
//query params: request.query (filtros, ordenação, paginação, etc)
//route params: request.params (identificar um recurso na alteração ou remoção)
//body: request.body (dados para criação ou alteração de um registro)
