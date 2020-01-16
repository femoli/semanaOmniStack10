const express = require("express");
const mongoose = require("mongoose");

const app = express();
mongoose.connect("mongodb+srv://omnistack:<omnistack>@cluster0-xjc9z.mongodb.net/week10?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());

app.get("/", (request, response) => {
    return response.json({ message: "Semana OmniStack 10.0" });
});

app.listen(3333);
