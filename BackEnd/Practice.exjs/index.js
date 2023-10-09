const express = require("express");
let app = express();

let port = 3000;

app.listen(port,()=>{
    console.log("Server Started");
})

app.use("/",(req,res)=>{
    console.log("Request Recieved");
    res.send("Request Recieved On Root Directory");
})