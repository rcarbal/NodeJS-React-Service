const mongoose = require('mongoose'),
    Company = require("../models/company")
mongoose.connect("mongodb://localhost/smoothlegal", { useNewUrlParser: true }, () => {
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
                process.exit(0);
            }
        });
}