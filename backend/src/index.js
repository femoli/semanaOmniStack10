//importando
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./devsRoutes");
const app = express();

mongoose.connect("mongodb+srv://omnistack:omnistack@cluster0-xjc9z.mongodb.net/week10?retryWrites=true&w=majority", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const connection = mongoose.connection
connection.on('error',() => console.error('erro ao conectar ao database'))
connection.once('open', () => console.log('conectado ao database'))

app.use(express.json()); //para usar formato json
app.use(routes); //para usar as rotas
app.listen(3333); //para conectar a porta 

module.exports = {
    connection
}
