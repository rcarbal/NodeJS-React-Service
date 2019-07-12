const express = require('express'),
    router = express.Router();

console.log("Inside sending Certs ==============================================");

router.get('/.well-known/acme-challenge/:file', (req, res) =>{
    console.log("printing content ======================================");
    res.send('MvFzveRiERf_4LLOxg2My6mPEZ-5Vq6Pz9uH7XnqSfw.nSfKLLq8XbyisgpZJiMBbKnehGULN66Jl-lvTqMUn7Y')
});

router.get("/", (req, res)=>{
    res.send("Inside Cert API 1021");
});

module.exports = router;