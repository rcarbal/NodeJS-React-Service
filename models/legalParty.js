/* 
    Child to company schema.
    Properties are imported from /model_props.
*/

const mongoose = require("mongoose"),
      properties = require("./model_props");


const legalPartySchema = new mongoose.Schema(properties.legalParty);

module.exports = mongoose.model("LegalParty", legalPartySchema);