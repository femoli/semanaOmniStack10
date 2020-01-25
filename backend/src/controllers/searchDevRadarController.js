const devRadarSchema = require("../models/devRadarSchema");
const parseStringAsArray = require("../utils/parseStringAsArray");

module.exports = {
    async index(request, response) {
        const { latitude, longitude, techs } = request.query;
        const techsArray = parseStringAsArray(techs);
        console.log(techsArray);

        //buscar todos os devs num raio de 10km
        //filtrar por techs utilizadas
        return response.json({ dev : [] }); 
    }
}
