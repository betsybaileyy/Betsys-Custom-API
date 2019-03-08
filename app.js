require('dotenv').config()
var cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const express = require('express')
const app = express()
var exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')

app.use(cookieParser());


require('./data/betsys-custom-api')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

/* Mongoose Connection */
assert = require("assert");

const url = "mongodb://localhost/betsys-custom-api";
const mongoose = require("mongoose");
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/betsys-custom-api",
  { useNewUrlParser: true },
  () => {
    console.log("Connected to Betsy's Api DB");
  }
);

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(expressValidator())

require('./controllers/favoriteThings.js')(app)
require('./controllers/auth.js')(app);


// require('./controllers/auth.js')(app)

app.listen(9000, () => {
    console.log('this thing is on!! port 3000')
})

module.exports = app;
