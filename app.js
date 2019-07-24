/*
    Smoothlegal Server main file.
*/


const devApiRoutes = require('./routes/devApi'),
      prodApiRoutes = require('./routes/prodApi'), 
      authRoutes    = require('./routes/authRoutes'),
      bodyParser    = require("body-parser"),
      passport      = require('passport'),
      LocalStrategy = require('passport-local'),
      User          = require('./models/user'),
      express       = require('express'),
      app           = express();


app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.text());

// Passport configurations
app.use(require('express-session')({
    secret: '2Qepxniwwin98fujitsu',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(authRoutes);
app.use(devApiRoutes);
app.use(prodApiRoutes);


if (process.env.NODE_ENV === 'production') {

    // Force https
    app.use((req, res, next) => {
        if (req.header('x-forwarded-proto') !== 'https'){
            console.log("Inside https force ================================================");
            console.log(req.url);
            console.log(`https://www.smooth.legal${req.url}`);
            res.redirect(`https://www.smooth.legal${req.url}`);
        } else {
            next();
        }
    });

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
    
    \nmachine: ${process.env.USERNAME}
    \nListening on port: ${port}`);
});