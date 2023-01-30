
const user = require('../Models/users');
const bcrypt = require('bcrypt'); 

exports.login = (req, res) =>{
    console.log("login data");
};

exports.signup = (req, res) =>{
    const password = req.body.password;
    const saltpassword = 10;
    
    bcrypt.hash(password, saltpassword) //hashing a password
    .then(hash => { // if operation is okey, create un new user
        const User = new user({
           ...req.body,
        })

        User.save() // save a new user in database from 'user' model
        .then( ()=> {
            res.status(200); // response a client
            res.json({message: 'new user Created'})
        })
        .catch(error => {  // if have Exception whene you save a data in database
            console.log(`MessageError -> ${error}`);
            res.status(404);
            res.json({ MessageError : error})
        })
    })
    .catch( error => {
        console.log(error);
        res.status(500);
        res.json(error);
    })

};