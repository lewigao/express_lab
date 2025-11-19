const express = require('express');
const router = express.Router()

router.get("/", (req, res) => {
    res.render('users/list', { users: users })
});

router.get('/new', (req, res) => {
    res.render('users/new', {firstName: "Please enter a username"});
});

// router.post('/new', (req, res)=> {
//     res.render('users/new', {firstName: "Please enter name"});
// });

router.post("/", (req, res) => {
    res.send("User Created!");
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const gender = req.body.gender;
    const age = req.body.age;
    const isValid = firstName != "" && lastName != "" && age != 0;

    if (isValid) {
        console.log(`Adding user ${firstName}`);
        users.push({ 
            firstName: firstName, 
            lastName: lastName,
            gender: gender,
            age: age,
        });
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

const users = [{ firstName: "Lewi", lastName: "Gao", gender: "Male", age: 21, }, { firstName: "George", lastName: "Salayka", gender: "Male", age: 99, }]
router.param('id', (req, res, next, id) => {
    console.log(`Accessing user #${id}`);
    next();
});

module.exports = router;