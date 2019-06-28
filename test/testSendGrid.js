/**
 * Tests Sengrid's current implementation in the applition. All the necessary properties are 
 * seeded into the script.
 */

const sgMail = require('@sendgrid/mail'),
      { key } = require('../module/config'),
      seed = require('./seedData');


console.log("\n\nSending email via SendGrid");
console.log("===============================================================================================================");
console.log("Testing Sendgrid KEY:");
console.log(key);

if (key !== undefined) {
    console.log(`Sending email to ${seed.EMAIL_DATA.to}`)
    sgMail.setApiKey(key);
    const msg = seed.EMAIL_DATA;
    sgMail.send(msg, (error, json)=>{
        if(error){
            console.log(error);
        }else{
            console.log("=======================")
            console.log(json)
            console.log(`Sent email to ${seed.EMAIL_DATA.to}`)
        }
    });
    
    
}else{
    console.log(`KEY is undefined`);
}

