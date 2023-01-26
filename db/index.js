// this file content a moogose function connect to database Mongo

const mongoose = require('mongoose');
const URL = 'mongodb://localhost:27017/MyBd'; //Url for connection data base
const dataConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.set('strictQuery', true);
mongoose.connect(URL, dataConfig, error => {
    if(!error){
        console.log("database Connect");
    }

    else
    console.log(error);
})
