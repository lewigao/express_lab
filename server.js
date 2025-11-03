const express = require('express');
const app = express(); // calling this sets up a server
const PORT = 3030;

app.set('view engine', 'ejs');

app.get("/", (req, res) =>{
    console.log('BALLS');
    res.render("index", {user:"Lewi!"});
});

app.get("/users", (req, res) => {
    res.send("User List");
});

app.get("/users/new", (req, res) => {
    res.send("New User Form");
});

app.listen(PORT);
