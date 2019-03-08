const FavoriteThing = require('../models/favoriteThing')

module.exports = (app) => {
    // index of all favorite things
    app.get('/', (req, res) => {
        FavoriteThing.find({})
            .then(favoriteThing => {
                res.render("index", {
                    favoriteThing: favoriteThing
                })
            })
            .catch(err => {
                console.log(err.message)
            })
    })
    //getting form for new fav thing
    app.get('/favoriteThing/new', (req, res) => {
        res.render('favoriteThing-new', {})
    })

    // create a new fav thing
    app.post('/favoriteThing/new', (req, res) => {
        console.log(req.body)
        const favoriteThing = new FavoriteThing({ ...req.body
        });

        // SAVE INSTANCE OF favoriteThing MODEL TO DB
        favoriteThing.save((err, favoriteThing) => {
            return res.redirect(`/favoriteThing/:id`);
        })
    })
    // get fav thing individually
    app.get("/favoriteThing/:id", function(req, res) {
        // LOOK UP THE favoriteThing
        FavoriteThing.findById(req.params.id)
            .then(favoriteThing => {
                res.render("favoriteThing-show", {
                    favoriteThing
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
        FavoriteThing.findById(req.params.id, function(err, favoriteThing) {
            res.render('favoriteThing-edit', {favoriteThing: favoriteThing});
        })
    })


};
