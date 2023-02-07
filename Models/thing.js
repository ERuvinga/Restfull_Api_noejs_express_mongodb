//create a shema for Members collection

const mongoose = require('mongoose');

module.exports = mongoose.model("thing", 
    {
        title: {type: String, require: true},
        description :{type: String, require: true},
        imageUrl: {type: String, require: true},
        price: {type: Number, require: true},
        userId:{type: String, require: true},
        _id:{type: String , require: true}
    });

