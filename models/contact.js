/* 
    Child to company schema.
    Properties are imported from /model_props.
*/

const mongoose = require("mongoose"),
      properties = require("./model_props");

const constactSchema = new mongoose.Schema(properties.contact);
module.exports = mongoose.model("Contact", constactSchema);