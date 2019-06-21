const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);

module.exports = async (resolve, reject) =>{
    console.log("CHARGING=========================================================================")
    await stripe.charges.create({
        amount: 2000,
        currency: "usd",
        source: "tok_visa", // obtained with Stripe.js
        description: "Charge for jenny.rosen@example.com"
    }, (error, payment)=>{
        if (error){
            console.log(error);
            reject(false)
        } else{
            console.log("Payment Successful")
            resolve(true)
            // callback(true);
        }
    });
}