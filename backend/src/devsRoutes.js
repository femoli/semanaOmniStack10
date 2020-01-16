//{ } => chama exclusivamente o método Router dentro do express 
const { Router } = require ("express");

//Router() chama os métodos http / criação das rotas 
const routes = Router();

routes.get("/", (request, response) => {
    return response.json({ message: "Semana OmniStack 10.0" });
});

routes.post("/devs", (request, response) => {
    const { github_username } = (request.body); //cadastrar o dev pelos dados do git
    return response.json({ message: "Dev Cadastrado 10/10" });
});

//exportando as rotas pra geral usar
module.exports = routes ;
