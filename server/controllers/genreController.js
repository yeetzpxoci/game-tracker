const Genre = require("../models/genre");
const asyncHandler = require('express-async-handler')

exports.genreList = asyncHandler(async (req, res, next) => {
    const genreList = await Genre.find({}).exec();
    res.send(genreList);
});

exports.addGenre = asyncHandler(async (req, res, next) => {
    const newGenre = new Genre({
        name: req.body.name,
        imgURL: req.body.imgURL
    });

    try {
        await newGenre.save();
        res.status(201).json({ message: 'Genre created successfully' });
    } catch (error) {
        console.error('Error during save:', error);
        res.status(500).json({ error: error.message });
    }
})

exports.deleteGenre = asyncHandler(async (req, res, next) => {
    try {
        await Genre.findByIdAndDelete(req.body.genreID)
        res.status(201).json({ message: 'Genre deleted successfully' });
    } catch (error) {
        console.error('Error during save:', error);
        res.status(500).json({ error: error.message });
    }
})