const Company = require("../models/company"),
    Contact = require("../models/contact"),
    LegalParties = require("../models/legalParty"),
    Services = require('../models/services'),
    Request = require('../models/request'),
    Seed = require('./seedData'),
    mongoose = require('mongoose'),
    { extractPopularServices } = require('../utilities/propUtils'),
    { popularServicesRefs } = require('../utilities/propRefs')

// mongoose.connect("mongodb://localhost/smoothlegal", { useNewUrlParser: true }, () => {
//     console.log("=============================================================================================================================");
//     console.log("\nConnected to mongoDB");
// });

function saveToDatabase(data) {

    const companyData = {
        name: data.companyName,
        type: data.type,
        alternate_name: data.altNames,
        state: data.stateOfIncoporation

    };

    const constactData = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phoneNumber: data.phoneNum,
        streetAdress: data.streetAddress,
        city: data.city,
        state: data.usState,
        zip: data.zip
    };

    const legalPartiesData = {
        name: date.memberName,
        date: data.memberDate
    };



    const servicesData = {
        orgStatement: extractPopularServices(
            data.servicesList,
            popularServicesRefs.ORG_STATEMENT
        ),
        einApp: extractPopularServices(
            data.servicesList,
            popularServicesRefs.EIN_APPLICATION
        ),
        complianceKitSeal: extractPopularServices(
            data.servicesList,
            popularServicesRefs.COMPLIANCE_KIT_SEAl
        ),
        certCopy: data.certifiedCopies,
        certCopyApost: data.certifiedCopiesWApostille,
        certGoodStand: data.goodStandingCopies,
        certGoodStandApost: data.goodStandingCopiesWApostille
    }
    const requestData = {
        request: data.requests
    }

    // Check if database LLC is already in Database
    
    // Save to Database
    const company = new Company(companyData),
          contract = new Contact(constactData),
          legalparties = new LegalParties(legalPartiesData),
          services = new Services(servicesData),
          request = new Request(requestData);
    // Send sucessful response

    company.save().then(()=>{
        console.log("Company Saved")
    });

};

function checkLLCName() {

}

