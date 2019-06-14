/*
    This file contains the expected properties of each mongoose schema, and the properties
    required to reference the children schemas.
    Base properties and reference properties are exported.
*/


const mongoose = require("mongoose");

// Contact objects setup

const contact = {
    prefix: String,
    firstName: String,
    lastName: String,
    email: String,
    phoneNumber: String,
    streetAdress: String,
    city: String,
    state: String,
    zip: String
}

const contactRef ={
        type: mongoose.Schema.Types.ObjectId,
        ref: "Contact"   
}

// Legal objects setup

const legalParty = {
    name: String,
    date: String
}

const legalPartiesRef = {    
        type: mongoose.Schema.Types.ObjectId,
        ref: "LegalParty"
    
}

// Services objects setup

const services = {
    orgStatement : Boolean,
    einApp : Boolean,
    complianceKitSeal : Boolean,
    certCopy : Number,
    certCopyApost : Number,
    certGoodStand : Number,
    certGoodStandApost: Number 
}

const servicesPropRef =  {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Service"
    }

// Request objetcs setup

const request = {
    request : String
}

const requestPropRef = {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Request"
    }

module.exports ={
    contact,
    contactRef,
    legalParty,
    legalPartiesRef,
    services,
    servicesPropRef,
    request,
    requestPropRef
}