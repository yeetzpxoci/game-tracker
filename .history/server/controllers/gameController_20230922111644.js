const Game = require("../models/game");
const asyncHandler = require('express-async-handler')

exports.gameList = asyncHandler(async (req, res, next) => {
    const game_list = await Game.find({}).exec();
    res.send(game_list);
});

exports.addGamePost = asyncHandler(async (req, res, next) => {
    const newGame = new Game({
        name: req.body.name,
        description: req.body.description,
        developer: req.body.developer,
        platform: req.body.platform,
        genre: req.body.genre,
        status: req.body.status,
        date_of_start: req.body.date_of_start,
        date_of_finish: req.body.date_of_finish,
        rating: req.body.rating,
        img_url: req.body.img_url 
    });

    newGame.save(function(err, result) {
        if(err) {
            console.log(err);
        } else {
            console.log(result);
        }
    })
});