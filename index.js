const express = require('express');
const format = require('date-format');
const app = express();

const PORT =  process.env.PORT  || 4000;

app.get("/", (req,res) => {
    res.status(200).send("<h1>Hello from Prayas</h1>")
})

app.get("/api/v1/instagram", (req,res) => {
    const instasocial = {
        username: "Prayas Godara insta",
        followers: 508,
        follows:202,
        date: new Date(),

    }
    res.status(200).json(instasocial)
});
app.get("/api/v1/facebook", (req,res) => {
    const fbsocial = {
        username: "Prayas Godara Fb Page",
        followers: 908,
        follows:902,
        date: Date.now(),

    }
    res.status(200).json(fbsocial)
});
app.get("/api/v1/linkedin", (req,res) => {
    const linkedinsocial = {
        username: "Prayas Godara Linkedin",
        followers: 300,
        follows:302,
        date: format.asString("dd-MM-yy - hh:mm:ss", new Date()),

    }
    res.status(200).json(linkedinsocial)
});

app.get("/api/v1/:token", (req,res) =>{
    console.log(req.params.token);
    res.status(200).json({param: req.params.token })
    })
    

app.listen(PORT, () => {
    console.log(`Server is Running at ${PORT}` );
});