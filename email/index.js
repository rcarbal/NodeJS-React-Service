const sgMail = require('@sendgrid/mail'),
    { sendgridKey } = require('../config/keys');

function sendEmail(data) {
    return new Promise((resolve, reject) => {
        const email = {
            to: 'rcarbaleq2@gmail.com',
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