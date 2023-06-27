const express = require('express');
const app = express();

app.get("", (req, resp) => {
    console.log(req.query.name)
    console.log(req.query)

    resp.send("Welcome,"+req.query.name);
});

app.get("/about", (req, resp) => {
    resp.send("Welcome, This is a About Page");
});

app.get("/help", (req, resp) => {
    resp.send("Welcome, This is a Help Page");
});

app.get("/contact", (req,resp)=>{
    resp.send("Welcome, This is a Contact Page");

});


app.listen(5000);

