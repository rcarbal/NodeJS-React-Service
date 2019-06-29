const sgMail = require('@sendgrid/mail'),
    seed = require('../../../test/seedData');
let {key } = require('../../../config/keys');

/*
    Version 1 of the api to send email.
    The data sent is seed data.
*/

function sendEmail(email, callback) {
    // Check key
    if(key === undefined){
        key = process.env.SENDGRID_KEY;
    }

    // Set the email
    const emailData = {
        to: email.email,
        from: 'ricardo.a.carballo@gmail.com',
        subject: email.subject,
        text: email.data,
        html: `<strong>${email.data}</strong>`
    };

    if (key !== undefined) {
        console.log(`Sending email to ${email.email}`)
        sgMail.setApiKey(key);
        sgMail.send(emailData, (error, json) => {
            if (error) {
                console.log(error);
            } else {
                console.log("=======================");
                console.log(`Sent email to ${email.email}`);
                callback(emailData.to, emailData.subject, emailData.text);
            }
        });
    } else {
        console.log(`KEY is undefined`);
    }
};

module.exports = {
    sendEmail
}