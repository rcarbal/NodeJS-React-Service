const express = require('express'),
    router = express.Router();

console.log("Inside sending Certs ==============================================");

router.get('/.well-known/acme-challenge/:file', (req, res) =>{
    console.log("printing content ======================================");
    res.send('MvFzveRiERf_4LLOxg2My6mPEZ-5Vq6Pz9uH7XnqSfw.nSfKLLq8XbyisgpZJiMBbKnehGULN66Jl-lvTqMUn7Y')
});

// app.get('/.well-known/acme-challenge/:file', (req, res) =>{
//     console.log("printing content ======================================");
//     res.send(`DADr97Nje9iTTgEDw8y8YBJSkznmRryr5e1K0PACG0I.YWtMAGHQezdkbuF3jRq1jCKb5d-H7AY3V5dxcNAJGVk`);
// });


router.get("/", (req, res)=>{
    res.send("Inside Cert API 1021");
});

module.exports = router;