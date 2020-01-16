const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
    return response.json({ message: "Semana OmniStack 10.0" });
});

app.listen(3333);
