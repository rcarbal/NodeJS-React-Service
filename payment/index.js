const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);

module.exports = (callback) =>{
    console.log("CHARGING====================")
    stripe.charges.create({
        amount: 2000,
        currency: "usd",
        source: "tok_visa", // obtained with Stripe.js
        description: "Charge for jenny.rosen@example.com"
    }, (error, payment)=>{
        if (error){
            console.log(error);
        } else{
            console.log("Payment Successful")
            callback(true);
        }
    });
}