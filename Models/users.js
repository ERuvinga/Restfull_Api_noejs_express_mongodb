
const mongoose = require('mongoose');

const userModel = mongoose.model("user", 
    {
        name:{type: String},
        age: {type: Number}
    });

module.exports = userModel;