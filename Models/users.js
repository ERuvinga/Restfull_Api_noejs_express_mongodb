
const mongoose = require('mongoose');

const userModel = mongoose.model("user", 
    {
        email:{type: String, require: true},
        password: {type: Number, require: true}
    });

module.exports = userModel;