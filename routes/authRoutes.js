const express = require('express'),
      User = require('../models/user'),
      passport = require("passport");
      router = express.Router();

router.get('/api/v1/register', (req, res)=>{
    res.render('register');
})

router.post("/api/v1/register", (req, res)=>{
    console.log(req.body);
    let newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, (err, user) =>{
        if (err){
            console.log(err);
            return res.redirect("/");
        }
        console.log("User Saved");
        console.log(user);
        passport.authenticate("local")(req, res, ()=>{
        res.send(`${user.username}: SAVED`);
        });
    });
});

router.post("/api/v1/login",passport.authenticate('local'), (req, res)=>{
    res.status(200).send({loginSuccess: req.user.username});
});

module.exports = router;