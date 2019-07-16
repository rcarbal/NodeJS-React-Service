/*
    Smoothlegal Server main file.
*/


const devApiRoutes = require('./routes/devApi'),
      prodApiRoutes = require('./routes/prodApi'), 
      bodyParser    = require("body-parser"),
      express       = require('express'),
      app           = express();


app.set("view engine", "ejs");
app.use(bodyParser.text());
app.use(devApiRoutes);
app.use(prodApiRoutes);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    const path = require('path');
    app.get('/', (req, res) => {
        console.log("Inside Static file SEnD=====================================");
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    });
}

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Started Smoothlegal server... 
    \nListening on port: ${port}`);
});