const { model, Schema } = require('mongoose');

const User = new Schema({
    firstName: String,
    lastName: String,
    username: String,
    password: String,
    biography: String,
    image: String
});

module.exports = model('User', User);