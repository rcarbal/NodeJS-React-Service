const express = require('express'),
    email = require('../api/v1/test/emailTest'),
    router = express.Router();


router.get("/api/v1/test", (req, res) => {
    res.render("form");
});

router.post("/api/v1/test", (req, res) => {
    console.log(req);
    const callback = (email, subject, data)=>{
        res.send(`Email sent to ${email} \nSubject: ${subject}\n Data: ${data}`)
    }
    email.sendEmail(req.body.email, callback);
});

router.get("/api/v01/test", (req, res) => {
    console.log("===========================================================================================");
    console.log("HTTP GET REQUEST");
    console.log(req.body);
    console.log("===========================================================================================");
    res.send("YOU SEND HTTP GET REQUEST");
});

router.post("/api/v01/test", (req, res) => {
    console.log("===========================================================================================");
    console.log("HTTP POST REQUEST")
    console.log(req.body);
    console.log("===========================================================================================");
    res.send("YOU SEND HTTP POST REQUEST");
});

module.exports = router;
