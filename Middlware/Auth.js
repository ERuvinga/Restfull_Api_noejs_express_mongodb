// the midllware to verifie if a token 's valid

const jwt = require('jsonwebtoken');
exports.verifyToken = (req, res, next) =>{
    
    try{
        const secreteKey = '_RANDOM/\SECRETEkEY';
        const token = req.headers.authorization.split(' ')[1];
        const decodeToken = jwt.decode(token, secreteKey);
        
        req.auth = {
            userId:decodeToken.userId
        }
        next(); // next middleware if is valid token
    }

    catch(error){
        console.log(error);
        res.status(401);
        res.json({message: 'Unauthorized User'})
    };


}
