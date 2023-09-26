const Genre = require("../models/genre");
const asyncHandler = require('express-async-handler')

exports.genre_list = asyncHandler(async (req, res, next) => {
    const genreList = await Genre.find({}).exec();
    res.send(genreList);
});
