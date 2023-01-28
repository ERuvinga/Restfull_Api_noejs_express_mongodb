
// notre Application EPRESS

const express = require('express');
const thing = require('./Models/thing');
const user = require('./Models/users')
const app = express();  // methode express

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
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
    //console.log(_idOfThing);

    thing.findOne({_id:_idOfThing})
    .then(dataThing => {
        res.status(200);
        res.json(dataThing);
    })
    .catch(error => {
        res.status(404);
        res.json({error});
    })
});

app.put('/api/stuff/:id', (req, res)=>{
    _idOfThing = req.params.id;
    _newsData = {
        title: req.body.title,
        description: req.body.description,
        imageUrl:req.body.imageUrl,
        price:req.body.price,
    };

    console.log(_newsData);

    thing.replaceOne({_id: _idOfThing},{..._newsData})
    .then(() => {
        res.status(200);
        res.json({message: "thing Update"})
    })

    .catch(error =>{
        console.log(`messageError -> ${error}`);
        res.status(404);
        res.json({messageError: `Error : ${error}`})
    })
    
});

app.delete('/api/stuff/:id', (req, res)=>{

    thing.deleteOne({_id: req.params.id })
    .then(()=>{
           res.status(200);
           res.json({mesage: 'thing deleted'}); 
    })

    .catch(error => {
        res.status(404);
        res.json({error});
        console.log(`error -> : ${error}`);
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
