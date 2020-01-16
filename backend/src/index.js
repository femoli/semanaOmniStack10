//importando
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes"); 

const app = express();

//conectando ao atlas/mongodb
mongoose.connect("mongodb+srv://omnistack:<omnistack>@cluster0-xjc9z.mongodb.net/week10?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//para usar formato json
app.use(express.json());

//para usar as rotas
app.use(routes);

//para conectar a porta 
app.listen(3333);
