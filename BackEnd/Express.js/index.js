const express = require("express");
const app = express();

let port = 3000;

app.listen(port,()=>{
    console.log(`App is listening on port ${port}`);
});


// app.use ((req , res) => {                                   // for all request on the server
//     console.log("request recieved");
//     res.send("This is basic respoonse");
// });

app.get ('/',(req , res) => {                                   // for request on root path of server
    console.log("request recieved on root path");
    res.send("Hello,I Am Root");
});

// app.get ('/home',(req , res) => {                                   // for request on home path of server
//     console.log("request recieved on home path");
//     res.send("You contacted Home Path");
// });

// app.get ('*',(req , res) => {                                   // for request on home path of server
//     console.log("Request Recieved on unexist path");
//     res.send("Page Not Exist");
// });

// app.get('/:username',(req,res)=>{
//     let {username} = req.params;
//     console.log(req.params);
//     res.send(`Welcome to page of @${username}`);

// });

app.get('/:username/:id',(req,res)=>{
    let {username,id} = req.params;
    console.log(req.params);
    res.send(`Welcome to page of @${username}, Id = ${id}`);

});

app.get('/search', (req,res)=>{
    let {q} = req.query;
    console.log(q);
    res.send(`Search Results for ${q}`);
})

