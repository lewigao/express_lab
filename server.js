const express = require('express');

const app = express(); // calling this sets up a server
const PORT = 3030;

app.listen(PORT);

app.get("/", (req, res) =>{
    console.log('BALLS');
    res.send("Hello World!");
});