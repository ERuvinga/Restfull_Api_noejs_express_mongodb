
const mongoose = require('mongoose');

const userModel = mongoose.model("user", 
    {
        email:{type: String, require: true, unique: true},
        password: {type: String, require: true}
    });

module.exports = userModel;