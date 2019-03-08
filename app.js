require('dotenv').config()
const express = require('express')
var exphbs = require('express-handlebars')
var cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')
const jwt = require('jsonwebtoken');
const app = express()

var checkAuth = (req, res, next) => {
    console.log("Checking authentication");
    if (typeof req.cookies.nToken === "undefined" || req.cookies.nToken === null) {
        req.user = null;
    } else {
        var token = req.cookies.nToken;
        var decodedToken = jwt.decode(token, {
            complete: true
        }) || {};
        req.user = decodedToken.payload;
    }

    next();
};


app.use(cookieParser());

app.use(checkAuth);




require('./data/betsys-custom-api')

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')

/* Mongoose Connection */
assert = require("assert");

const url = "mongodb://localhost/betsys-custom-api";
const mongoose = require("mongoose");
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/betsys-custom-api", {
        useNewUrlParser: true
    },
    () => {
        console.log("Connected to Betsy's Api DB");
    }
);

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())
app.use(expressValidator())

require('./controllers/favoriteThings.js')(app)
require('./controllers/auth.js')(app);


// require('./controllers/auth.js')(app)

app.listen(9000, () => {
    console.log('this thing is on!! port 3000')
})

module.exports = app;
