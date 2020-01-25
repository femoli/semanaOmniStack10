//{ } => chama exclusivamente o método Router dentro do express
const { Router } = require("express");  
const devRadarControllers = require("./controllers/devRadarControllers");
//Router() chama os métodos http / criação das rotas
const routes = Router(); 
  

//get-routes
routes.get("/", (request, response) => {
    return response.json({ message: "Semana OmniStack 10.0" });
});

//post-routes
routes.post("/developers", devRadarControllers.store);

module.exports = routes; 
