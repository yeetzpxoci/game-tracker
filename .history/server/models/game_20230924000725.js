const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const GameSchema = new Schema({
    name: {type: String, required: true, maxLength: 100},
    description: {type: String, maxLength: 500},
    developer: {type: String},
    platform: {type: String},
    genre: [{type: Schema.Types.ObjectId, ref: "Genre"}],
    status: {type: String, required: true, enum: ['Finished', 'Ongoing', 'Dropped']},
    dateOfStart: {type: Date},
    dateOfFinish: {type: Date},
    rating: {type: Number, min: 0, max:10},
    imgUrl: {type: String} 
});

GameSchema.virtual('url').get(function(){
    return '/games/${this._id}';
})

module.exports = mongoose.model("Game", GameSchema);