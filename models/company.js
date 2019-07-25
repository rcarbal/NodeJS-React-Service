/* 
    This is parent Schema that contains basic company information, and reference to children schemas.
    Reference properties are imported.
*/

const mongoose = require("mongoose"),
    properties = require("./model_props");


const companySchema = new mongoose.Schema({
    name: String,
    type: String,
    alternate_name: String,
    state: String,
    contact: properties.contactRef,
    legalParty: [properties.legalPartiesRef],
    services: properties.servicesPropRef,
    request: properties.requestPropRef,
    date: String,
    payment: Number
});

module.exports = mongoose.model("Company", companySchema);