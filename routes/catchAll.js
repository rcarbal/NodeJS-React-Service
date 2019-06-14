const express = require('express'),
    router = express.Router();

router.get('*', (req, res) => {
    console.log("Catch-all route reached");
    res.send("Please use proper api endpoint");
});

module.exports = router;