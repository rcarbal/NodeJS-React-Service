const express = require('express'),
    router = express.Router();

console.log("Inside sending Certs ==============================================");

router.get('/.well-known/acme-challenge/:file', (req, res) =>{
    console.log("printing content ======================================");
    res.send(`Returned url/${req.params.file}`);
//     if(req.params.content === 'FXXfXgptKmnRX9tL5fc8Wv6LI3ttRo2q2W6dVPsHwQg'){
//         res.send('FXXfXgptKmnRX9tL5fc8Wv6LI3ttRo2q2W6dVPsHwQg.fEnpKypu6O07sLyde15azOh7TFJJVk-v9aaA0YjX7YY');
//     }
//     if (req.params.content === 'NBS8evhj85Ai_475NsnkCckPbU2_SmmvhC3eP00sFWk'){
//         res.send('NBS8evhj85Ai_475NsnkCckPbU2_SmmvhC3eP00sFWk.fEnpKypu6O07sLyde15azOh7TFJJVk-v9aaA0YjX7YY');
//     }
});

router.get("/", (req, res)=>{
    res.send("Inside Cert API");
});

module.exports = router;