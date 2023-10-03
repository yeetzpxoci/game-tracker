const Game = require("../models/game");
const asyncHandler = require('express-async-handler')
const { body, validationResult } = require('express-validator');

exports.gameList = asyncHandler(async (req, res, next) => {
    const gameList = await Game.find({}).exec();
    res.send(gameList);
});

exports.validateGameInput = [
    (req, res, next) => {
        console.log(req.body);
        next(); // Ensure this middleware is being executed
    },

    body('name').notEmpty().withMessage('Name must not be empty').escape(),
    body('description').optional().isLength({ max: 500 }).escape(),
    body('developer').notEmpty().withMessage('Developer must not be empty').escape(),
    body('platform').notEmpty().withMessage('Platform must not be empty').escape(),
    body('status').isIn(['Finished', 'Ongoing', 'Dropped']).escape(),
    body('dateOfStart').optional().isISO8601().withMessage('Start date not in correct format').toDate(),
    body('dateOfFinish').optional().isISO8601().withMessage('Finish date not in correct format').toDate(),
    body('rating').optional().isFloat({ min: 0, max: 10 }).toFloat(),
    body('imgUrl').optional().escape(),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
]

exports.addGame = asyncHandler(async (req, res, next) => {
    console.log('Received a POST request to /games/add');

    if (!(req.body.genres instanceof Array)) {
        if (typeof req.body.genres === "undefined") req.body.genres = [];
        else req.body.genres = new Array(req.body.genres);
    }

    const newGame = new Game({
        name: req.body.name,
        description: req.body.description,
        developer: req.body.developer,
        platform: req.body.platform,
        genres: req.body.genres,
        status: req.body.status,
        dateOfStart: req.body.dateOfStart,
        dateOfFinish: req.body.dateOfFinish,
        rating: req.body.rating,
        imgURL: req.body.imgURL
    });

    try {
        await newGame.save();
        res.status(201).json({ message: 'Game created successfully' });
    } catch (error) {
        console.error('Error during save:', error);
        res.status(500).json({ error: error.message });
    }
})

exports.deleteGame = asyncHandler(async (req, res, next) => {
    try {
        await Game.findByIdAndDelete(req.body.gameID);
        res.status(201).json({ message: 'Game deleted successfully' });
    } catch (error) {
        console.error('Error during save:', error);
        res.status(500).json({ error: error.message });
    }
})