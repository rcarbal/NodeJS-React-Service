const express = require('express'),
    email = require('../api/v1/test/emailTest'),
    { processPayment } = require('../payment'),
    { saveToDatabase } = require('../database/database'),
    { sendEmail } = require('../email'),
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

    console.log(body[0]);

    const paymentData = {
        amount: body[0].paymentTotal,
        currency: "usd",
        source: body[0].id
    }

    let response = {}

    console.log("JSON DATA");
    console.log(body);
    console.log(paymentData);
    console.log("===========================================================================================");
    console.log("HTTP POST REQUEST");

    processPayment(paymentData).then((data) => {
        if (data) {
            response.payment = {
                payment_amount: data.amount,
                payment_successful: true
            };
            return body[1];
        }
    })
        .then(saveToDatabase)
        .then((data)=>{
            if(data){
                response.dbSaved ={
                    saved: true
                };
                return data;                
            }
        })
        .then(sendEmail)
        .then((data)=>{
            if(data){
                response.emailSent = {
                    emailSendSucess: true
                };
            }
            res.send(response)

        });


});



module.exports = router;