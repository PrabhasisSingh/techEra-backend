let mongoose = require('mongoose');

// Create a model class
let playerModel = mongoose.Schema(
    {
        Name: String
    },
    {
        collection: "players"
    }
);

module.exports = mongoose.model('Players', playerModel);