/*
    Smoothlegal Server main file.
*/

const testApiRoutes = require('./routes/testApi'),
      paidApiRoutes = require('./routes/paidApi'), 
      bodyParser    = require("body-parser"),
      express       = require('express'),
      app           = express();


app.set("view engine", "ejs");
<<<<<<< HEAD
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require("body-parser").text());
app.use(bodyParser.json());
=======

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
>>>>>>> 054f8e2708b9c57ae27e676a87066ab3d1b8df59
app.use(testApiRoutes);
app.use(paidApiRoutes);

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Started Smoothlegal server... 
    \nListening on port: ${port}`);
});
