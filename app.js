
// notre Application EPRESS

const express = require('express');
const thing = require('./Models/thing');
const user = require('./Models/users')
const app = express();  // methode express

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET', 'POST', 'PUT', 'DELETE');
    next();
});

app.use(express.json()); // add express method parsing body data

app.get('/api/stuff', (req, res) => { //find any objets
    thing.find()
    .then(stuff => {
        res.status(200);  
        res.json(stuff);
    })

    .catch(error => {
        res.status(404);  
        res.json({error});
    })

});

app.get('/api/stuff/:id', (req, res)=>{
    const _idOfThing = req.params.id;
    console.log(_idOfThing);
    thing.findOne({_id:_idOfThing})
    .then(dataThing => {
        res.status(200);
        res.json(dataThing);
    })
    .catch(error => {
        res.status(400);
        res.json({error});
    })
});

app.post('/api/stuff', (req, res) =>{ // for create new objet

    const Thing = new thing({
        ...req.body 
    })

    console.log(req.body);
    
    
    Thing.save((error)=>{
        if(error){
            res.status(400);
            res.json({Error: "thing don't save"});
        }

        else{
            res.status(200);
            res.json({message : "thing Created"}); 
        }
    })
});



module.exports = app;
