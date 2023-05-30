const { model, Schema } = require('mongoose');

const Cache = new Schema({
    title: String,
    description: String,
    latitude: Number,
    longitude: Number,
    createdAt: String,
    tags: String,
    image: String,
    thumbsUp: Number,
    thumbsDown: Number
});

module.exports = model('Cache', Cache);