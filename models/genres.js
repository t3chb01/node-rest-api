const mongoose = require('mongoose');

const Genre = mongoose.model('Genre', new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 55
    }
}));

exports.Genre = Genre;
