/*
    Smoothlegal Server main file.
*/

const testApiRoutes = require('./routes/testApi'),
      paidApiRoutes = require('./routes/paidApi'), 
      bodyParser    = require("body-parser"),

      express       = require('express'),
      stripe        = require('stripe')(process.env.STRIPE_SECRET_KEY);
      app           = express();


app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require("body-parser").text());
app.use(testApiRoutes);
app.use(paidApiRoutes);

const port = process.env.PORT || 4000;

app.post("/charge", async (req, res) => {
    try {
      let {status} = await stripe.charges.create({
        amount: 2000,
        currency: "usd",
        description: "An example charge",
        source: req.body
      });
  
      res.json({status});
    } catch (err) {
      res.status(500).end();
    }
});

app.listen(port, () => {
    console.log(`Started Smoothlegal server... 
    \nListening on port: ${port}`);
});
