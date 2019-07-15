const sgMail = require('@sendgrid/mail');
const { sendgridKey } = require('../config/keys');
const emailConfirmationTemplate = require('./emailtemplate/confirmationTemplate');
const emailOrderTemplate = require('./emailtemplate/orderTemplate');

// Function to be used to send finished email data, returns a Promise.

function sendEmailOrder(data){
    return new Promise((resolve, reject)=>{

        const SEND_TO_EMAIL_ORDER = 'ricardo.a.carballo@gmail.com';

        const email = {
            to: SEND_TO_EMAIL_ORDER,
            from: 'ricardo.a.carballo@gmail.com',
            subject: `Order for ${data.name} LLC Application`,
            html: emailOrderTemplate(data)            
        }
        console.log("Sending ORDER EMAIL **********************");
        send(email,data, resolve, reject, 'ORDER');
    });
}

function sendEmailConfirmtaion(data) {
    return new Promise((resolve, reject) => {

        const SEND_TO_EMAIL_CONFIRMATION = data.contact.email;

        const email = {
            to: SEND_TO_EMAIL_CONFIRMATION,
            from: 'ricardo.a.carballo@gmail.com',
            subject: `Purchase Confirmataion for ${data.name} LLC Application`,
            html: emailConfirmationTemplate(data)            
        }
        console.log("Sending CONFIRMATION EMAIL **********************")
        send(email,data, resolve, reject, 'CONFIRMATION');
    });
}

function send(email, data, resolve, reject, type){
    if (sendgridKey !== undefined) {
        console.log(`Sending email...`);
        sgMail.setApiKey(sendgridKey);
        sgMail.send(email, (error, json) => {
            if (error) {
                console.log(`Error on ${type} email send.`);
                console.log(error);
                reject();
            } else {
                console.log("=======================")
                console.log(`${type} Email sent`)
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