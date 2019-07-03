const Company = require("../models/company"),
    Contact = require("../models/contact"),
    LegalParties = require("../models/legalParty"),
    Services = require('../models/services'),
    Request = require('../models/request'),
    { extractPopularServices } = require('../utilities/propUtils'),
    { popularServicesRefs } = require('../utilities/propRefs')

// Saves to company LLC information to database asynchronously. Returns a Promise.

function saveToDatabase(data) {
    return new Promise((resolve, reject)=>{
        console.log("Saving to database...")

    const companyData = {
        name: data.companyName,
        type: data.type,
        alternate_name: data.altName,
        state: data.stateOfIncoporation

    };

    const contactData = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phoneNumber: data.phoneNum,
        streetAdress: data.streetAddress,
        city: data.city,
        state: data.usState,
        zip: data.zip,
        country: data.country
    };

    const legalPartiesData = [
        LegalParties({ name: data.memberName }),
        LegalParties({ name: data.addlMemberNames })
    ];



    const servicesData = {

        package: {
            name: data.llcPackage.value,
            price: data.llcPackage.price
        } ,
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
        certGoodStandApost: data.goodStandingCopiesWApostille,
        deliveryOption: {
            price: data.deliveryOption[0].price,
            value: data.deliveryOption[0].value
        }
    }
    const requestData = {
        request: data.requests
    }

    // Setup database documents.
        Company.create(companyData, (err, company) => {
            if (err) {
                console.log(err);
                reject()
            }
            else {
                Contact.create(contactData, (err, contact) => {
                    if (err) {
                        console.log(err);
                        reject()
                    }
                    else {
                        company.contact = contact._id;
                        LegalParties.collection.insertMany(legalPartiesData, (err, legalParties) => {
                            if (err) {
                                console.log(err);
                                reject()
                            }
                            for (var property in legalParties.insertedIds) {
                                if (legalParties.insertedIds.hasOwnProperty(property)) {
                                    company.legalParty.push(legalParties.insertedIds[property]);
                                }
                            }
                            Services.create(servicesData, (err, services) => {
                                if (err) {
                                    console.log(err);
                                    reject()
                                }
                                else {
                                    company.services = services._id;
                                    Request.create(requestData, (err, request) => {
                                        if (err) {
                                            console.log(err);
                                            reject()
                                        }
                                        else {
                                            company.request = request._id;
                                            company.save((err, savedCompany) => {
                                                if (err) console.log(err);
                                                else {
                                                    console.log("Company Saved");
                                                    resolve(savedCompany);
                                                }

                                            });

                                        }

                                    })
                                }
                            })
                        })
                    }
                })
            }
        });
    });
}

module.exports = {
    saveToDatabase
}

