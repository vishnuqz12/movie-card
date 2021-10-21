const express = require("express");
const bp = require("body-parser");
const db = require("./databse");


const app = express();

app.use(bp.urlencoded({ extended: true }));

app.use(bp.json);

app.post("/movies",(req,res)=>{
const movie = new db({
    name : req.body.name,
    rating : req.body.rating,
    data : req.body.date
});
movie.save((err)=>{
    if(!err){
        res.send("successfully addedd");
    }else{
        res.send("error of adding" + err);
    }
});
});

app.get("/movies",(req,res)=>{
db.find({},(err,founded)=>{
    if(!err){
        res.send(founded);
    }else{
        res.send("error of getting" + err);
    }
});
});


app.listen(3000,(err)=>{
    if(err){
        console.log("error of connection");
    }else{
        console.log("connected to port 3000");
    }
});

