const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const GenreSchema = new Schema({
    name: {type: String, required: true, maxLength: 100},
});

GameSchema.virtual('url').get(function () {
    return '/genres/${this._id}';
})

module.exports = mongoose.model("Genre", Genre);