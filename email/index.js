const sgMail = require('@sendgrid/mail');
const { sendgridKey } = require('../config/keys');
const emailTemplate = require('./emailtemplate/confirmationTemplate');

// Function to be used to send finished email data, returns a Promise.

function sendEmailConfirmtaion(data) {
    return new Promise((resolve, reject) => {

        const SEND_TO_EMAIL_CONFIRMATION = data.contact.email;

        const email = {
            to: SEND_TO_EMAIL_CONFIRMATION,
            from: 'ricardo.a.carballo@gmail.com',
            subject: `Confirmtaion Email for ${data.name} LLC Application`,
            html: emailTemplate(data)            
        }

        if (sendgridKey !== undefined) {
            console.log(`Sending email...`);
            sgMail.setApiKey(sendgridKey);
            sgMail.send(email, (error, json) => {
                if (error) {
                    console.log(error);
                    callback(false);
                } else {
                    console.log("=======================")
                    console.log(`Email sent`)
                    resolve(true);
                }
            });


        } else {
            console.log(`KEY is undefined`);
            reject();
        }
    });
}

module.exports = {
    sendEmailConfirmtaion
}