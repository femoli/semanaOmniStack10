//controller: recebe a requisição -> responde
const axios = require("axios");
const developer = require("../models/devRadarSchema");

module.exports = {
    //async - para aguardar a api do git responder
    async store(request, response) {
        //cadastrar o dev pelos dados do git
        const { github_username, techs, longitude, latitude } = (request.body);
        //para verificar se o usuario ja existe
        let devRegister = await developer.findOne({ github_username });
        if (!devRegister) {
            //await - primeiro ele verifica aqui, antes de mandar a resposta
            const apiGitResponse = await axios.get(`https://api.github.com/users/${github_username}`);
            const { name = login, avatar_url, bio } = apiGitResponse.data;
            const techsArray = techs.split(",").map(tech => tech.trim());
            const location = {
                type: "Point",
                coordinates: [longitude, latitude]
            };
            devRegister = await developer.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location,
            });
        }
        return response.json(devRegister);
    }
};