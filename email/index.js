const sgMail = require('@sendgrid/mail'),
    { sendgridKey } = require('../config/keys');

// Function to be used to send finished email data, returns a Promise.

function sendEmail(data) {
    return new Promise((resolve, reject) => {

        const SEND_TO_EMAIL = "rcarbaleq2@gmail.com"

        const email = {
            to: SEND_TO_EMAIL,
            from: 'ricardo.a.carballo@gmail.com',
            subject: `Email for ${data.name}`,
            text:
                `Payment successfull: ${data.name}
        =========================================================================
        ${JSON.stringify(data)}
        `
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
    sendEmail
}