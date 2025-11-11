const express = require('express');
const app = express(); // calling this sets up a server
const PORT = 3030;
const userRouter = require('./routes/users');
const postRouter = require('./routes/posts');

app.set('view engine', 'ejs');

app.get("/", (req, res) =>{
    console.log('BALLS');
    res.render("index", {user:"Lewi!"});
});

app.use("/users", userRouter);
app.use("/posts", postRouter);

app.listen(PORT);
