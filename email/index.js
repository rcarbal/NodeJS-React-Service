const sgMail = require('@sendgrid/mail');
const { sendgridKey } = require('../config/keys');
const emailConfirmationTemplate = require('./emailtemplate/confirmationTemplate');
const emailOrderTemplate = require('./emailtemplate/orderTemplate');

// Function to be used to send finished email data, returns a Promise.

function sendEmailOrder(data){
    return new Promise((resolve, reject)=>{

        let SEND_TO_EMAIL_ORDER = '';
        if (process.env.USERNAME === "rcarb"){
            SEND_TO_EMAIL_ORDER = "ricardo.a.carballo@gmail.com";
        } else {
            SEND_TO_EMAIL_ORDER = 'ricardo.a.carballo@gmail.com';
        } 
        let html = emailOrderTemplate(data);        

        let email = {
            to: SEND_TO_EMAIL_ORDER,
            from: 'ricardo.a.carballo@gmail.com',
            subject: `Order for ${data.name} Application`   
        }

        email.html = html
        console.log("Sending ORDER EMAIL **********************");
        send(email,data, resolve, reject);
    });
}

function sendEmailConfirmtaion(data) {
    return new Promise((resolve, reject) => {

        const SEND_TO_EMAIL_CONFIRMATION = data.contact.email;

        const email = {
            to: SEND_TO_EMAIL_CONFIRMATION,
            from: 'ricardo.a.carballo@gmail.com',
            subject: `Purchase Confirmation for ${data.name} Application`,          
        }

        email.html = emailConfirmationTemplate(data)  
        console.log("Sending CONFIRMATION EMAIL **********************")
        send(email,data, resolve, reject);
    });
}

function send(email, data, resolve, reject){
    if (sendgridKey !== undefined) {
        console.log(`Sending email...`);
        sgMail.setApiKey(sendgridKey);
        sgMail.send(email, (error, json) => {
            if (error) {
                console.log(`Error on email send.`);
                console.log(error);
                reject("Error sending email");
            } else {
                console.log("=======================")
                console.log(` Email sent`)
                resolve(data);
            }
        });


    } else {
        console.log(`KEY is undefined`);
        reject(`Key is undefined`);
    }
}

module.exports = {
    sendEmailConfirmtaion,
    sendEmailOrder
}