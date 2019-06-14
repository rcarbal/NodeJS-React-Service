/* 
    Child to company schema.
    Properties are imported from /model_props.
*/

const mongoose = require("mongoose"),
      properties = require("./model_props");


const requestSchema = new mongoose.Schema(properties.request);

module.exports = mongoose.model("Request", requestSchema);