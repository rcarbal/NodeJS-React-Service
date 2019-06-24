const sgMail = require('@sendgrid/mail'),
    { sendgridKey } = require('../config/keys');

function sendEmail(data, callback) {
    console.log(sendgridKey);

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
                console.log(json)
                console.log(`Email sent`)
                callback(true);
            }
        });


    } else {
        console.log(`KEY is undefined`);
    }
}

module.exports ={
    sendEmail
}