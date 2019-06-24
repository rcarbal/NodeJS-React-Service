const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);

module.exports = async (resolve, reject, data) =>{
    console.log("CHARGING=========================================================================")
    console.log(keys.stripeSecretKey);
    await stripe.charges.create(data, (error, payment)=>{
        if (error){
            console.log(error);
            reject(false)
        } else{
            console.log("Payment Successful")
            resolve(payment)
            // callback(true);
        }
    });
}