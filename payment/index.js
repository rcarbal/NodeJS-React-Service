const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);

// Processes charge to Stride asynchronously. Returns a Promise.

const processPayment= (data) =>{
    return new Promise((resolve, reject)=>{
        stripe.charges.create(data, (error, payment)=>{
            if(error){
                console.log('Payment Unsuccessful')
                console.log(error);
                reject("Proccessing Payment Failed")
            }else{
                console.log("Payment Successful");
                console.log(payment);
                resolve(payment);
            }
        });
    });
}

module.exports ={
    processPayment
}