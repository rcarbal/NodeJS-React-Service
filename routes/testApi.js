const express = require('express'),
    email = require('../api/v1/test/emailTest'),
    payment = require('../payment'),
    { saveToDatabase } = require('../database/database')
router = express.Router();


router.get("/api/v1/test", (req, res) => {
    res.render("form");
});

router.post("/api/v1/test", (req, res) => {
    console.log(req);
    const callback = (email, subject, data) => {
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
    let jsondata = `[${req.body}]`;
    const body = JSON.parse(jsondata);

    const paymentData = {
        amount: 500,
        currency: "usd",
        source: body[0].id
    }

    let response = {}

    console.log("JSON DATA");
    console.log(paymentData);
    console.log("===========================================================================================");
    console.log("HTTP POST REQUEST");

    new Promise((resolve, reject) => {
        payment(resolve, reject, paymentData);
    }).then((payment) => {
        if (payment.paid) {
            response.payment = `Payment Successful of amount: $${payment.amount} `;

            let savedCallback = (savedCompany) => {
                if (savedCompany) {
                    console.log(savedCompany);
                    response.dbSaved = `${savedCompany.name} successfully saved to database`;
                    console.log("===========================================================================================");
                    res.send(response);
                }
            }
            saveToDatabase(body[1], savedCallback);

        }


    });
});

module.exports = router;