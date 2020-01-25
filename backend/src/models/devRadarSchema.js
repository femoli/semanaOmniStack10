const mongoose = require("mongoose");
const pointSchema = require("./utilities/pointSchema");

//estrutura da entidade no banco de dados
const developerSchema = new mongoose.Schema({

    name: String,
    github_username: String,
    avatar_url: String ,
    techs: [String],
    bio: String,  
    location: {
        type: pointSchema,
        index: "2dsphere"
    } 
});

module.exports = mongoose.model("devRadarSchema", developerSchema);