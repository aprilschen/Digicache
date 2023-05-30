const { model, Schema } = require('mongoose');

const Recipe = new Schema({
    name: String,
    description: String,
    createAt: String,
    thumbsUp: Number,
    thumbsDown: Number
});

module.exports = model('Recipe', Recipe);