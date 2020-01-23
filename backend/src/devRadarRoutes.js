const { Router } = require("express"); //{ } => chama exclusivamente o método Router dentro do express 
const axios = require("axios");
const routes = Router(); //Router() chama os métodos http / criação das rotas 
const developer = require("./models/devRadarSchema");

//get-routes
routes.get("/", (request, response) => {
    return response.json({ message: "Semana OmniStack 10.0" });
});

//post-routes
routes.post("/developers", async (request, response) => { //async - para aguardar a api do git responder 
    const { github_username, techs } = (request.body); //cadastrar o dev pelos dados do git
    const apiGitResponse = await axios.get(`https://api.github.com/users/${github_username}`); //await - primeiro ele verifica aqui, antes de mandar a resposta
    const { name = login, avatar_url, bio } = apiGitResponse.data;
    const techsArray = techs.split(",").map(tech => tech.trim());
    const devRegister = await developer.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
    });
    //console.log(devRegister);
    //console.log(name, avatar_url, bio, github_username, techs);
    return response.json(devRegister);
});

module.exports = routes;
