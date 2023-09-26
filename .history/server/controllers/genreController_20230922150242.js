const Genre = require("../models/genre");
const asyncHandler = require('express-async-handler')

exports.genre_list = asyncHandler(async (req, res, next) => {
    const genreList = await Genre.find({}).exec();
    res.send(genreList);
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

    newGame.save();
});