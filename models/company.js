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
    contacts: properties.contactRef,
    legalParty: [properties.legalPartiesRef],
    services: properties.servicesPropRef,
    request: properties.requestPropRef
});

module.exports = mongoose.model("Company", companySchema);