const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);

const processPayment= (data) =>{
    return new Promise((resolve, reject)=>{
        stripe.charges.create(data, (error, payment)=>{
            if(error){
                console.log(error);
                reject(false)
            }else{
                console.log("Payment Successful");
                resolve(payment);
            }
        });
    });
}

module.exports ={
    processPayment
}