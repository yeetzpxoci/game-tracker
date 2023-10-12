const Genre = require("../models/genre");
const asyncHandler = require('express-async-handler')
const { body, validationResult } = require('express-validator');

exports.genreList = asyncHandler(async (req, res, next) => {
    const genreList = await Genre.find({}).exec();
    res.send(genreList);
});

exports.validateGenreInput = [
    (req, res, next) => {
        next();
    },

    body('name').notEmpty().withMessage('Name must not be empty').escape(),
    body('imgUrl').optional().escape(),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
]

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

exports.updateGenre = asyncHandler(async (req, res, next) => {
    const newGenre = new Genre({
        _id: req.body._id,
        name: req.body.name,
        imgURL: req.body.imgURL
    });

    try {
        await Genre.findByIdAndUpdate(newGenre._id, newGenre);
        res.status(201).json({ message: 'Genre updated successfully' });
    } catch (error) {
        console.error('Error during update:', error);
        res.status(500).json({ error: error.message });
    }
})