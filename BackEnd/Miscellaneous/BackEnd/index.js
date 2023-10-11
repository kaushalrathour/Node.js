const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({extended : true}));
app.use(express.json()); 

app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
})

app.get("/register",(req,res)=>{
    let {user,pass} = req.query;
    console.log(user);
    res.send(`Welcome to the page, ${user}!`)
})

app.post("/register",(req,res)=>{
    let {user,pass} = req.body;
    console.log(user);
    res.send(`Welcome to the page, ${user}!`)
})