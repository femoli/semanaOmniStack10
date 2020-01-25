const devRadarSchema = require("../models/devRadarSchema");
const parseStringAsArray = require("../utils/parseStringAsArray");

module.exports = {
    async index(request, response) {
        const { latitude, longitude, techs } = request.query;
        const techsArray = parseStringAsArray(techs);
        const developersList = await devRadarSchema.find({
            //filtrar por techs utilizadas
            techs: {
                $in: techsArray,
            },
            location: {
                $near: {
                    $geometry: {
                        type: "Point",
                        coordinates: [longitude, latitude],
                    },
                    //buscar todos os devs num raio de 10km
                    $maxDistance: 10000,
                },
            },
        });
        return response.json(developersList);
    }
}
