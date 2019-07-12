/*
    Smoothlegal Server main file.
*/

// const testApiRoutes = require('./routes/devApi'),
    //   paidApiRoutes = require('./routes/prodApi'), 
  const express = require('express'),
      app           = express();


// app.set("view engine", "ejs");
// app.use(bodyParser.json()); 
// app.use(bodyParser.urlencoded({extended: true}));

//app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.text());
//app.use(bodyParser.json());

// app.use(certRoutes);
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

app.get('/', (req, res)=>{
    res.send({hi: '1212'})
});

app.get('/.well-known/acme-challenge/:file', (req, res) =>{
    console.log("printing content ======================================");
    res.send(`DADr97Nje9iTTgEDw8y8YBJSkznmRryr5e1K0PACG0I.YWtMAGHQezdkbuF3jRq1jCKb5d-H7AY3V5dxcNAJGVk`);
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Started Smoothlegal server... 
    \nListening on port: ${port}`);
});
