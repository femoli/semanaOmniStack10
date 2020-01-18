const { Router } = require("express"); //{ } => chama exclusivamente o método Router dentro do express 
const axios = require("axios");
const routes = Router(); //Router() chama os métodos http / criação das rotas 

routes.get("/", (request, response) => {
    return response.json({ message: "Semana OmniStack 10.0" });
});

routes.post("/developers", async (request, response) => { //async - para aguardar a api do git responder 
    const { github_username } = (request.body); //cadastrar o dev pelos dados do git
    const apiGitResponse = await axios.get(`https://api.github.com/users/${github_username}`); //await - primeiro ele verifica aqui, antes de mandar a resposta
    console.log(apiGitResponse.data)
    return response.json({ message: "Dev Cadastrado 10/10" });
});

//exportando as rotas pra geral usar
module.exports = routes;
