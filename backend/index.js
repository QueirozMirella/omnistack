const express = require('express'); //agora eu tenho o expressa na variavel express

const app = express(); //crio uma variavel que recebe a função express e agora a aplicação ta criada;
app.use(express.json());
//para eu receber uma resposta, tipo hello word, eu faço o seguinte:
app.post('/users', (request, response) => { //quando eu acessar localhost:3333 eu caio em /users
    //quando eu acesso alguma rota eu to fazendo uma requisição (request). Todas as informações para criar um registro vão estar dentro ddo request
    //o response é como a gente vai devolver uma resposta para o nosso cliente
    //return response.send('Hello World'); //o send envia um texto como resposta
    //nós vamos usar o json, então nao vamos usar o send pra enviar resposta
    console.log(request.body);
    return response.json({
        message: 'Hello Omnistack'
    });
});

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
