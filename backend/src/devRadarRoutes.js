//{ } => chama exclusivamente o método Router dentro do express
const { Router } = require("express");  
const devRadarControllers = require("./controllers/devRadarControllers");
const searchDevRadarController = require("./controllers/searchDevRadarController");
//Router() chama os métodos http / criação das rotas
const routes = Router();   

//get-routes
routes.get("/", (request, response) => {
    return response.json({ message: "Semana OmniStack 10.0" });
});
//routes.get("/developers", devRadarControllers.index);
routes.get("/search", searchDevRadarController.index);

//post-routes
routes.post("/developers", devRadarControllers.store);

module.exports = routes; 
