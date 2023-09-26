const Genre = require("../models/genre");
const asyncHandler = require('express-async-handler')

exports.genreList = asyncHandler(async (req, res, next) => {
    const genreList = await Genre.find({}).exec();
    res.send(genreList);
});
