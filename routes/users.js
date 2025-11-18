const express = require('express');
const router = express.Router()

router.get("/", (req, res) => {
    res.render('users/list', { users: users })
});

router.get("/new", (req, res) => {
    res.send("New User Form");
});

// router.post('/new', (req, res)=> {
//     res.render('users/new', {firstName: "Please enter name"});
// });

router.post("/", (req, res) => {
    res.send("User Created!");
    const firstName = req.body.firstName;
    const isValid = firstName != "";

    if (isValid) {
        console.log(`Adding user ${firstName}`);
        users.push({ name: firstName });
        console.log("New set of users: " + `${users}`)
    }
    else {
        console.log("Error adding user!");
        res.render("users/new", { firstName: firstName });
    }
});

router.route("/:id").get((req, res) => {
    res.send(`Getting User data: ${req.params.id}`);
}).delete((req, res) => {
    res.send(`Deleting user with ID: ${req.params.id}`);
}).put((req, res) => {
    res.send(`Updating user with ID: ${req.params.id}`);
});

const users = [{ name: "Lewi" }, { name: "George" }]
router.param('id', (req, res, next, id) => {
    console.log(`Accessing user #${id}`);
    next();
});

module.exports = router;