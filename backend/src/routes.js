//{ } => chama exclusivamente o método Router dentro do express 
const { Router } = require ("express");

//Router() chama os métodos http / criação das rotas 
const routes = Router();

routes.get("/", (request, response) => {
    return response.json({ message: "Semana OmniStack 10.0" });
});

routes.post("/users", (request, response) => {
    console.log (request.body); //só pra ver se tá funcionando
    return response.json({ message: "Dev Cadastrado" });
});


//exportando as rotas pra geral usar
module.exports = routes ;
