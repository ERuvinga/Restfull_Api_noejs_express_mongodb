
const user = require('../Models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

exports.login = (req, res) =>{
    
    const dataOfLogin ={ //objet content a data user
        email : req.body.email,
        password: req.body.password
    }

    let token = Number;

    user.findOne({email: dataOfLogin.email}) // verify  email data if 's available in database
    .then(User => {
        if(!User){
            console.log("login and password incorect");
            return res.status(401).json({message:"login/password incorect"});     
        }

        else{
            bcrypt.compare(dataOfLogin.password, User.password)
            .then(validpwd => {
                    if (validpwd){
                       
                        const dataOfToken = { // create a token
                            playload: {
                                userId : User._id
                            },
                            secreteKey: '_RANDOM/\SECRETEkEY',
                        }

                        token = jwt.sign(dataOfToken.playload, dataOfToken.secreteKey, {expiresIn:'12h'});
                        res.status(200);
                        res.json({
                            userId: User._id,
                            token:token
                    })                        
                    console.log("User corect");
                }

                else{
                    res.status(401);
                    res.json({message:"Unauthorized user"});
                    console.error("login & password incorect");
                }
            })
            .catch(error => {
                res.status(401);
                res.json({message:"Unauthorized User"})
                console.log(error)
            })
        }
    })
    .catch(error =>{
        console.log(error);
        res.status(500);
        res.json({error});
    })
};

exports.signup = (req, res) =>{
    const password = req.body.password;
    const saltpassword = 10;
    
    bcrypt.hash(password, saltpassword) //hashing a password
    .then(hash => { // if operation is okey, create a new user
        const User = new user({
            email : req.body.email,
            password : hash //save the crypt password in database
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