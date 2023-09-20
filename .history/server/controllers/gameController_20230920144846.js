const Game = require("./models/game");
const asyncHandler = require('express-async-handler')

exports.game_list = asyncHandler(async (req, res, next) => {
    const game_list = await Game.find({}).exec();
    res.send(game_list);
});

// exports.create_game_get = asyncHandler(async(req, res, next) => {

// });

// exports.create_game_post = asyncHandler(async (req, res, next) => {

// });