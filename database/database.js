const Company = require("../models/company"),
    Contact = require("../models/contact"),
    LegalParties = require("../models/legalParty"),
    Services = require('../models/services'),
    Request = require('../models/request'),
    { extractPopularServices, checkProp } = require('../utilities/propUtils'),
    { popularServicesRefs } = require('../utilities/propRefs'),
    mongoose = require('mongoose');

// Saves to company LLC information to database asynchronously. Returns a Promise.

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/smoothlegal", { useNewUrlParser: true }, () => {
    console.log("Connected to mongoDB!!!!");
});


function saveToDatabase(data) {
    return new Promise((resolve, reject) => {
        console.log("Saving to database...")

        const companyData = {
            name: data.companyName,
            type: data.type,
            alternate_name: data.altName,
            state: data.stateOfIncoporation,
            date: new Date().toString(),
            payment: data.payment
        };

        const contactData = {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phoneNumber: data.phoneNum,
            streetAdress: data.streetAddress,
            streetAddressTwo: data.streetAddressTwo,
            city: data.city,
            state: data.usState,
            zip: data.zip,
            country: data.country
        };

        const legalPartiesData = [
            LegalParties({ name: data.memberName }),
            LegalParties({ name: data.addlMemberNames })
        ];



        let servicesData = {

            package: {
                name: data.llcPackage.value,
                price: data.llcPackage.price
            },
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

        servicesData.deliveryOption =  checkProp(data.deliveryOption[0], 'price', 'value')

        const requestData = {
            request: data.requests
        }

        // Setup database documents.
        Company.create(companyData, (err, company) => {
            if (err) {
                console.log('Error on Company create.');
                console.log(err);
                reject()
            }
            else {
                Contact.create(contactData, (err, contact) => {
                    if (err) {
                        console.log('Error on Contact create.');
                        console.log(err);
                        reject()
                    }
                    else {
                        company.contact = contact._id;
                        LegalParties.collection.insertMany(legalPartiesData, (err, legalParties) => {
                            if (err) {
                                console.log('Error on Legal Parties array.');
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
                                    console.log('Error on Services create.');
                                    console.log(err);
                                    reject()
                                }
                                else {
                                    company.services = services._id;
                                    Request.create(requestData, (err, request) => {
                                        if (err) {
                                            console.log('Error on Request create.');
                                            console.log(err);
                                            reject()
                                        }
                                        else {
                                            company.request = request._id;
                                            company.save((err, savedCompany) => {
                                                if (err) {
                                                    console.log('Error on Company save.');
                                                    console.log(err);
                                                }
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

function queryDbRefsFilled(data) {
    return new Promise((resolve, reject) => {
        Company.findById(data.id)
            .populate(["contact", "legalParty", "request", "services"])
            .exec((error, company) => {
                if (error) {
                    console.log('Error on Populate execute.');
                    console.log(error);
                    reject(error);
                } else {
                    console.log("========================================================");
                    console.log("RETRIEVED FILLED REFERENCE");
                    console.log(company);
                    resolve(company);
                }
            });
    });
}

module.exports = {
    saveToDatabase,
    queryDbRefsFilled
}

