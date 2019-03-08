const express = require('express')
const app = express()
var exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')

// require('./data/reddit-db')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

/* Mongoose Connection */
assert = require("assert");

// const url = "mongodb://localhost/reddit-db";
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

require('./controllers/posts.js')(app)
require('./controllers/comments.js')(app)
require('./controllers/auth.js')(app)

app.listen(3000, () => {
    console.log('this thing is on!! port 3000')
})

module.exports = app;
























// const express = require('express')
// const app = express()
// var exphbs = require('express-handlebars');
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/betsys-custom-api', { useNewUrlParser: true });
//
// // const Review = mongoose.model('Review', {
// //   title: String,
// //   movieTitle: String
// // });
//
//
// app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
// app.set('view engine', 'handlebars');
//
// app.get('/', (req, res) => {
//   res.render('views/home', { msg: 'Handlebars are Cool!' });
// })
//
// app.get('/', (req, res) => {
//   Review.find()
//     .then(reviews => {
//       res.render('reviews-index', { reviews: reviews });
//     })
//     .catch(err => {
//       console.log(err);
//     })
// })
//
// app.listen(3000, () => {
//   console.log('App listening on port 3000!')
// })
