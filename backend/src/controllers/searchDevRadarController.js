const devRadarSchema = require("../models/devRadarSchema");

module.exports = {
    async index(request, response) {
        console.log(request.query);
        //buscar todos os devs num raio de 10km
        //filtrar por techs utilizadas
        return response.json({ dev : [] }); 
    }
}