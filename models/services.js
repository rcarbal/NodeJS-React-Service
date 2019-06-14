/* 
    Child to company schema.
    Properties are imported from /model_props.
*/

const mongoose = require("mongoose"),
      properties = require("./model_props");


const serviceShema = new mongoose.Schema(properties.services);

module.exports = mongoose.model("Service", serviceShema);