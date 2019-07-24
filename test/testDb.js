/* 
    The purpose of the file is to save multiple MongoDB documents into one parent document.
    The parent document will only contain reference id's of the child document.
    This process uses seed data and will print out the end result of the parent/child documents.
*/

const Company = require("../models/company"),
    Contact = require("../models/contact"),
    LegalParties = require("../models/legalParty"),
    Services = require('../models/services'),
    Request = require('../models/request'),
    Seed = require('./seedData'),
    mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/smoothlegal", { useNewUrlParser: true }, () => {
    console.log("=============================================================================================================================");
    console.log("=============================================================================================================================");
    console.log("=============================================================================================================================");
    console.log("\nConnected to mongoDB");
    mongoose.connection.db.dropDatabase();
    console.log("Deleted database.")

    seedDB();
});

// Saves parent and child documents to Mongo database.
const seedDB = () => {
    console.log("Runing Seed...\n\n");

    Company(Seed.COMPANY_DATA).save((error, company) => {
        if (error) {
            console.log(error);
        } else {

            // Save Contact Reference
            Contact.create(Seed.CONTACT_DATA, (err, contact) => {
                if (err) {
                    console.log(err);
                } else {

                    company.contact = contact._id;
                    console.log("====================================================================");
                    console.log("Saved Contact\n");
                    console.log(contact);
                    console.log("\n\n\n");

                    // Save Legal Parties
                    LegalParties.collection.insertMany(Seed.LEGALPARTIES_ARRAY, (err, saves) => {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log("====================================================================");
                            console.log("Saved Legal Paties\n");
                            console.log(saves);
                            console.log("\n\n\n");

                            for (var property in saves.insertedIds) {
                                if (saves.insertedIds.hasOwnProperty(property)) {
                                    company.memberName.push(saves.insertedIds[property]);
                                }
                            }

                            // Save Services
                            Services.create(Seed.SERVICE_DATA, (error, service) => {
                                if (error) {
                                    console.log(error);
                                } else {
                                    console.log("====================================================================");
                                    console.log("Saved Services\n");
                                    console.log(service);
                                    console.log("\n\n\n");
                                    company.services = service._id;


                                    // Save Request
                                    Request.create(Seed.REQUEST_DATA, (error, request) => {
                                        if (error) {
                                            console.log(error);
                                        } else {
                                            console.log("====================================================================");
                                            console.log("Saved Request");
                                            console.log(request);
                                            console.log("\n\n\n");

                                            // Save Company
                                            company.request = request._id;
                                            company.save(() => {
                                                console.log("====================================================================");
                                                console.log("Saved Company");
                                                console.log(company);
                                                console.log("\n\n\n");

                                                // get database reference only.
                                                setTimeout(retieveDatabaseReference, 3000);
                                            });

                                        }
                                    });
                                }
                            });

                        }
                    });
                }
            });
        }
    });
}

// Retrieves and logs the Comapny ducument with only child references.
function retieveDatabaseReference() {
    Company.
        findOne({}, function (error, aComapny) {
            if (error) {
                console.log(error);
            } else {
                console.log("====================================================================");
                console.log("====================================================================");
                console.log("====================================================================");
                console.log("Retriving Companies with only reference ID.\n\n");
                console.log(aComapny);
                console.log("\n\n\n");

                //Retrieve populated datababase.
                setTimeout(retieveDatabasePopulatedDocs, 3000);
                ;
            }
        });
}
/*
Story.
  findOne({ title: 'Casino Royale' }).
  populate('author').
  exec(function (err, story) {
    if (err) return handleError(err);
    console.log('The author is %s', story.author.name);
    // prints "The author is Ian Fleming"
  });
*/
function retieveDatabasePopulatedDocs() {
    Company
        .findOne({})
        .populate(["contact","legalParty", "request","services"])
        .exec((error, company) => {
            if (error) {
                console.log(error);
            } else {
                console.log("====================================================================");
                console.log("Retrieving Companies with Populated references.");
                console.log(company);
                process.exit(0)
            }
        });
}