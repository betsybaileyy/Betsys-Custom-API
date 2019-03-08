const FavoriteThing = require('../models/favoriteThing')
// const express = require('express')
// const app = express()

module.exports = (app) => {

// const favoriteThing = new FavoriteThing(req.body)

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



    app.get('/favoriteThing/new', (req, res) => {
        res.render('favoriteThing-new', {})
    })
// res.json({ username: })

    // CREATE
    app.post('/favoriteThing/new', (req, res) => {
        // INSTANTIATE INSTANCE OF favoriteThing MODEL
        console.log(req.body)
        const favoriteThing = new FavoriteThing({ ...req.body
        });

        // SAVE INSTANCE OF favoriteThing MODEL TO DB
        favoriteThing.save((err, favoriteThing) => {
            // REDIRECT TO THE ROOT
            return res.redirect(`/favoriteThing/:id`);
        })
    })

    app.get("/favoriteThing/:id", function(req, res) {
        // LOOK UP THE favoriteThing
        FavoriteThing.findById(req.params.id)
            .then(favoriteThing => {
                res.render("posts-index", {
                    posts: posts
                })
                .catch(err => {
                console.log(err.message)
            })
            })
       //      Profile.findById(req.params.id).then(function (profile) {
       // res.json(profile)
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
