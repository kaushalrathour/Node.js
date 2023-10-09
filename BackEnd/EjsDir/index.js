const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
app.listen(port,()=>{
    console.log(`Listening to the port ${port}`);
});
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.get("/",(req,res)=>{
    res.render("home.ejs");
});

app.get("/roledice",(req,res)=>{
    let diceVal = Math.floor(Math.random()*6)+1
    res.render("roledice.ejs",{diceVal: diceVal})
    // res.render("roledice.ejs",{diceVal})          // if we want same key and same value then we can use only value
});

app.get("/ig/:username",(req,res)=>{
    const {username} = req.params;
    const instData = require("./data.json");
    const data = instData[username];
    if (data) {
        res.render("instagram.ejs",{data});
        console.log(data);
    }else {
        res.render("error.ejs");
    }
})