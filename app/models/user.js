var mongoose = require('mongoose');

var User = mongoose.Schema({
    facebook         : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    }
});

//expose the user model to the app
module.exports = mongoose.model('User', User);