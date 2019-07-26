const express = require('express'),
    User = require('../models/user'),
    passport = require("passport"),
    { adminSecretCode } = require('../config/keys'),
    { queryAllCompanies } = require('../database/database');
router = express.Router();

router.get('/api/v1/register', (req, res) => {
    res.render('register');
})

router.post("/api/v1/register", (req, res) => {
    console.log(req.body);
    const username = req.body.username;
    const password = req.body.password;

    let newUser = new User({ username });

    if (req.body.adminCode === adminSecretCode) {
        newUser.isAdmin = true;
    }

    User.register(newUser, password, (err, user) => {
        if (err) {
            console.log(err);
            return res.redirect("/");
        }
        console.log("User Saved");
        console.log(user);
        passport.authenticate("local")(req, res, () => {
            res.status(200).send({
                user: user.username,
                isAdmin:user.isAdmin
            })
        });
    });
});

router.get("/api/v1/login", (req, res) =>{
    res.render('login');
});

router.post("/api/v1/login", passport.authenticate('local'), (req, res) => {
    queryAllCompanies().then((database) => {

        let sendDB = {};
        if (req.user.isAdmin){
            sendDB = database;
        }

        res.status(200).send({
            loggedIn: true,
            username: req.user.username,
            isAdmin: req.user.isAdmin,
            sendDB
        });
    });
});

router.get("/api/v1/logout", (req, res) => {
    const logOutUser = req.user.username;
    req.logout();
    res.status(200).send({
        loggedIn: false,
        username: logOutUser
     });
});

module.exports = router;