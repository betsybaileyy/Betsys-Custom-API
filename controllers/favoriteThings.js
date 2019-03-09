const FavoriteThing = require('../models/favoriteThing')
const User = require('../models/user')

module.exports = (app) => {
    // index of all favorite things
    app.get('/', (req, res) => {
        var currentUser = req.user;

        FavoriteThing.find({})
            .then(favoriteThing => {
                res.render("index", {
                    favoriteThing,
                    currentUser
                })
            })
            .catch(err => {
                console.log(err.message)
            })
    })
    //getting form for new fav thing
    app.get('/favoriteThing/new', (req, res) => {
        // var currentUser = req.user;
        res.render('favoriteThing-new', {})
    })

    // create a new fav thing
    app.post("/favoriteThing/new", (req, res) => {
        if (req.user) {
            var favoriteThing = new FavoriteThing(req.body);

            favoriteThing.save(function(err, favoriteThing) {
                return res.redirect(`/`);
            });
        } else {
            return res.status(401); // UNAUTHORIZED
        }
    });
    // get fav thing individually
    app.get("/favoriteThing/:id", function(req, res) {
        var currentUser = req.user;

        // LOOK UP THE favoriteThing
        FavoriteThing.findById(req.params.id)
            .then(favoriteThing => {
                res.render("favoriteThing-show", {
                        favoriteThing,
                        currentUser
                    })
                    .catch(err => {
                        console.log(err.message)
                    })
            })
            .catch(err => {
                console.log(err.message);
            });
    })

    app.get('/favoriteThing/:id/edit', (req, res) => {
        var currentUser = req.user;

        FavoriteThing.findById(req.params.id, function(err, favoriteThing) {
            res.render('favoriteThing-edit', {
                favoriteThing: favoriteThing,
                currentUser
            });
        })
    })


};
