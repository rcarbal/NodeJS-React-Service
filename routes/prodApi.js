// Production ready API files.  Currently not complete.

const express = require('express'),
    { enforceProperties, checkIfObjectIsEmpty } = require('../utilities/propUtils'),
    { processPayment } = require('../payment'),
    { saveToDatabase, queryDbRefsFilled } = require('../database/database'),
    { sendEmailConfirmtaion, sendEmailOrder } = require('../email'),
    { SMOOTH_LEGAL_PACKAGE_CONSTANTS } = require('../utilities/clientConstants'),
    router = express.Router();

router.get("/api/v1/package/JSON", (req, res) => {
    res.status(200).send(SMOOTH_LEGAL_PACKAGE_CONSTANTS);
});

router.post("/api/v1/", (req, res) => {
    const body = `[${req.body}]`;
    const convertJson = JSON.parse(body);
    let paymentData = convertJson[0];
    let llcData = convertJson[1];

    const payment = {
        amount: llcData.paymentTotal * 100,
        currency: "usd",
        source: paymentData.id
    }

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
            .catch(() => {
                console.log("Payment Failed")
                res.status(409).send({
                    payment: 'Failed'
                });
            });
    }
});

module.exports = router;