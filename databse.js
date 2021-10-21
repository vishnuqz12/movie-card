const mongoose = require("mongoose");

const {Schema} = mongoose;

const url = "mongodb://localhost:27017/ticketDB";

mongoose.connect(url,{useUnifiedTopology: true,useNewUrlParser : true});

const connection = mongoose.connection;

connection.once("open",()=>{
    console.log("database connected successfully");
})


const movieSchema = new Schema({
    name : String,
    rating : Number,
    releaseDate : String
});

const movieModel = mongoose.model("movie",movieSchema);

module.exports = movieModel;


