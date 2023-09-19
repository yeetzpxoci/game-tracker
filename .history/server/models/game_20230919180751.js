const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const GameSchema = new Schema({
    name: { type: String, required: true, maxLength: 100 },
    description: { type: String, maxLength: 100 },
    developer: { type: String },
    platform: { type: String },
    genre: {type: Genre}, 
    date_of_start: {type: Date},
    date_of_finish: {type: Date},
    rating: {type: Float32Array, min: 0, max:10}
});