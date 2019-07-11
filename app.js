/*
    Smoothlegal Server main file.
*/

// const testApiRoutes = require('./routes/devApi'),
    //   paidApiRoutes = require('./routes/prodApi'), 
  const certRoutes = require('./routes/serverCertsApi'),
      bodyParser    = require("body-parser"),
      express       = require('express'),
      app           = express();


app.set("view engine", "ejs");
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));

//app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.text());
//app.use(bodyParser.json());

app.use(certRoutes);
// app.use(testApiRoutes);

// app.use(paidApiRoutes);

// if (process.env.NODE_ENV === 'production') {
    // app.use(express.static('client/build'));
//     const path = require('path');
//     app.get('/', (req, res) => {
//         console.log("Inside Static file SEnD=====================================");
//         res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
//     });
// }

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Started Smoothlegal server... 
    \nListening on port: ${port}`);
});
