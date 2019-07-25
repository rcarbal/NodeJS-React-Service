// API files to test development functions.

const express = require('express'),
    email = require('../api/v1/test/emailTest'),
    { processPayment } = require('../payment'),
    { saveToDatabase, queryDbRefsFilled } = require('../database/database'),
    { sendEmailConfirmtaion, sendEmailOrder } = require('../email'),
    { enforceProperties, checkIfObjectIsEmpty } = require('../utilities/propUtils'),
    { SMOOTH_LEGAL_PACKAGE_CONSTANTS } = require('../utilities/clientConstants'),
    router = express.Router();

console.log("Inside dev API ======================================");


router.get("/api/v1/test/database/JSON", (req, res) => {
    res.render("form");
});

router.get("/api/v1/test/package/JSON", (req, res) => {
    res.status(200).send(SMOOTH_LEGAL_PACKAGE_CONSTANTS);
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

    const body = `[${req.body}]`;
    const convertJson = JSON.parse(body);
    let paymentData = convertJson[0];
    let llcData = convertJson[1];

    const payment = {
        amount: llcData.paymentTotal * 100,
        currency: "usd",
        source: paymentData.id
    }

    let response = {}

    console.log("JSON PAYMENT DATA");
    console.log(paymentData);
    console.log("JSON LLC DATA =-=-=-=-=-=-=-=-=-=-=-=-=-=-=>>");
    console.log(llcData);
    console.log("===========================================================================================");
    console.log("HTTP POST REQUEST");

    const missingProps = enforceProperties(llcData);
    if (!checkIfObjectIsEmpty(missingProps)) {
        res.status(400).send(missingProps);
    } else {
        processPayment(payment).then((data) => {
            if (data) {
                llcData.payment = data.amount;
                return llcData;
            }
        })
            .then(saveToDatabase)
            .then((data) => {
                if (data) {
                    return data;
                }
            })
            .then(queryDbRefsFilled)
            .then(sendEmailOrder)
            .then(sendEmailConfirmtaion)
            .then((data) => {
                if (data) {
                    res.status(200).send(data);
                }
            })
            .catch((message)=>{
                res.status(409).send({
                    error: message
                });
            });
    }
});

module.exports = router;