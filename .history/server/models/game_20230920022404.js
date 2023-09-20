const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const GameSchema = new Schema({
    name: {type: String, required: true, maxLength: 100},
    description: {type: String, maxLength: 100},
    developer: {type: String},
    platform: {[type: [String]},
    genre: {type: Schema.Types.ObjectId, ref: "Genre"},
    status: {type: String, required: true, enum: ['Finished', 'Still playing', 'Dropped']},
    date_of_start: {type: Date},
    date_of_finish: {type: Date},
    rating: {type: Number, min: 0, max:10}
});

GameSchema.virtual('url').get(function(){
    return '/games/${this._id}';
})

module.exports = mongoose.model("Game", GameSchema);