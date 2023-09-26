const Game = require("../models/game");
const asyncHandler = require('express-async-handler')

exports.game_list = asyncHandler(async (req, res, next) => {
    const gameList = await Game.find({}).exec();
    res.send(gameList);
});

exports.add_game_post = asyncHandler(async (req, res, next) => {
    let genres = [];

    // const newGame = new Game({
    //     name: req.body.name,
    //     description: req.body.description,
    //     developer: req.body.developer,
    //     platform: req.body.platform,
    //     genre: Object.values(req.body.genre),
    //     status: req.body.status,
    //     dateOfStart: req.body.dateOfStart,
    //     dateOfFinish: req.body.dateOfFinish,
    //     rating: req.body.rating,
    //     imgUrl: req.body.imgUrl 
    // });

    // newGame.save();
});