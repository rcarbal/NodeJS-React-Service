/* 
    This file contains seed data used to test /database/seed.js
*/
const LegalParties = require("../models/legalParty");

const COMPANY_DATA = {
    name: "NOT a Generic Company",
    type: "Generic type",
    alternate_name: "Another Generic LLC",
    state: "Delaware"
}


const CONTACT_DATA = {
    prefix: "Mr.",
    firstName: "Ricardo",
    lastName: "Carballo",
    email: "ricardocarballo@gmail.com",
    phoneNumber: "626-626-6626",
    streetAdress: "847 e 88th pl",
    city: "Los Angeles",
    state: "Ca",
    zip: "90001"
}


const legal1 = {
    name: "Lianny Sabillon",
    date: "09/23/1989"
}
const legal2 = {
    name: "Adan Carballo",
    date: "02/18/2014"
}
const legal3 = {
    name: "Adan Carballo",
    date: "02/18/2014"
}

let LEGALPARTIES_ARRAY = [LegalParties(legal1), LegalParties(legal2), LegalParties(legal3)];

// Services data
const SERVICE_DATA = {
    orgStatement: false,
    einApp: false,
    complianceKitSeal: false,
    certCopy: 1,
    certCopyApost: 2,
    certGoodStand: 3,
    certGoodStandApost: 4
}

// Request data
const REQUEST_DATA = { request: "Please send me a Mcdonalds' coffee small 4 and 4." }

const EMAIL_DATA = {
    to: 'rcarbaleq2@gmail.com',
    from: 'ricardo.a.carballo@gmail.com',
    subject: 'Sending with Twilio SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>'
}

module.exports = {
    COMPANY_DATA,
    CONTACT_DATA,
    LEGALPARTIES_ARRAY,
    SERVICE_DATA,
    REQUEST_DATA,
    EMAIL_DATA
}