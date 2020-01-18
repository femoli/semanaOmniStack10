const mongoose = require("mongoose");

//estrutura da entidade no banco de dados
const devSchema = new mongoose.Schema({

    name: String,
    github_username: String,
    avatar_url: String ,
    techs: [String],
    bio: String,    
});

module.exports = mongoose.model("devRadarSchema", devSchema);