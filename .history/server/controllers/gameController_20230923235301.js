const Game = require("../models/game");
const asyncHandler = require('express-async-handler')
const { body } = require('express-validator');

exports.game_list = asyncHandler(async (req, res, next) => {
    const gameList = await Game.find({}).exec();
    res.send(gameList);
});

exports.add_game_post = asyncHandler(async (req, res, next) => {
    const newGame = new Game({
        name: req.body.name,
        description: req.body.description,
        developer: req.body.developer,
        platform: req.body.platform,
        genre: req.body.genres,
        status: req.body.status,
        dateOfStart: Date(req.body.dateOfStart),
        dateOfFinish: Date(req.body.dateOfFinish),
        rating: req.body.rating,
        imgUrl: req.body.imgUrl 
    });

    newGame.save();
    
    res.writeHead(302, {
        Location: 'http://localhost:3000/games'
    });
    res.end();
});