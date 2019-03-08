const FavoriteThing = require('../models/favoriteThing')
const express = require('express')
const app = express()

module.exports = (app) => {

// const favoriteThing = new FavoriteThing(req.body)

    // app.get('/', (req, res) => {
    //     FavoriteThing.find({})
    //         .then(favoriteThings => {
    //             res.json({
    //                 favoriteThing: favoriteThing,
    //                 description: description
    //             })
    //         })
    //         .catch(err => {
    //             console.log(err.message)
    //         })
    // })

    app.get('/favoriteThing/new', (req, res) => {
        res.render('favoriteThing-new', {})
    })
// res.json({ username: })

    // CREATE
    app.post('/favoriteThings/new', (req, res) => {
        // INSTANTIATE INSTANCE OF favoriteThing MODEL
        console.log(req.body)
        const favoriteThing = new FavoriteThing({ ...req.body
        });

        // SAVE INSTANCE OF favoriteThing MODEL TO DB
        favoriteThing.save((err, favoriteThing) => {
            // REDIRECT TO THE ROOT
            return res.redirect(`/`);
        })
    })

    app.get("/favoriteThings/:id", function(req, res) {
        // LOOK UP THE favoriteThing
        FavoriteThing.findById(req.params.id)
            .then(favoriteThing => {
                res.render("favoriteThings-show", {
                    favoriteThing
                });
            })
            .catch(err => {
                console.log(err.message);
            });
    })
    // app.get("/n/:subreddit", function(req, res) {
    //     Post.find({
    //             subreddit: req.params.subreddit
    //         })
    //         .then(posts => {
    //             res.render("posts-index", {
    //                 posts
    //             });
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         });
    // });


};
