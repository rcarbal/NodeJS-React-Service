/*
    Smoothlegal Server main file.
*/

const testApiRoutes = require('./routes/testApi'),
      paidApiRoutes = require('./routes/paidApi'), 
      bodyParser    = require("body-parser"),
      express       = require('express'),
      app           = express();


app.set("view engine", "ejs");

//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
//app.use(bodyParser.json());

app.use(testApiRoutes);
app.use(paidApiRoutes);

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Started Smoothlegal server... 
    \nListening on port: ${port}`);
});
