const express = require('express');
const router = express.Router()

router.get("/", (req, res) => {
    res.send("Posts go here");
});

router.get("/new", (req, res) => {
    res.send("New posts");
});

module.exports = router;