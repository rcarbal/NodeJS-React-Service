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
    let newUser = new User({ username: req.body.username });

    if (req.body.adminCode === adminSecretCode) {
        newUser.isAdmin = true;
    }

    User.register(newUser, req.body.password, (err, user) => {
        if (err) {
            console.log(err);
            return res.redirect("/");
        }
        console.log("User Saved");
        console.log(user);
        passport.authenticate("local")(req, res, () => {
            res.send(`${user.username}: SAVED`);
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
            loginSuccess: req.user.username,
            isAdmin: req.user.isAdmin,
            sendDB
        });
    });
});

router.get("/api/v1/logout", (req, res) => {
    const logOutUser = req.user.username;
    req.logout();
    res.status(200).send({ logoutSucess: logOutUser });
});

module.exports = router;