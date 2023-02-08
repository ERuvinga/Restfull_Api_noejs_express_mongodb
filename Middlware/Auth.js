// the midllware to verifie if a token 's valid

const jwt = require('jsonwebtoken');
exports.verifyToken = (req, res, next) =>{
    console.log('verification token');
    next();
}
