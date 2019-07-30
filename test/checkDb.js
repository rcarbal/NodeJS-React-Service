/**
 Retrieves any informtion forint in the React-Node Mongo collections.
*/

const mongoose = require('mongoose'),
    Company = require("../models/company"),
    Contact = require("../models/contact"),
    LegalParties = require("../models/legalParty"),
    Services = require('../models/services'),
    Request = require('../models/request');

    
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactnode", { useNewUrlParser: true }, () => {
    console.log("=============================================================================================================================");
    console.log("=============================================================================================================================");
    console.log("=============================================================================================================================");
    console.log("\nConnected to mongoDB");
    retieveDatabaseReference();
});

function retieveDatabaseReference() {
    Company.
        find({}, function (error, aComapny) {
            if (error) {
                console.log(error);
            } else {
                console.log("====================================================================");
                console.log("====================================================================");
                console.log("====================================================================");
                console.log("Retriving Companies with only reference ID.\n\n");
                console.log(aComapny);
                console.log("\n");

                setTimeout(retieveDatabasePopulatedDocs, 2000);
            }
        });
}

function retieveDatabasePopulatedDocs() {
    Company
        .findOne({})
        .populate(["contact", "memberName", "request", "services"])
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