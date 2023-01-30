const thing = require('../Models/thing'); // import a model (shema) of database

exports.getAllThings = (req, res) => { // get all things
    thing.find()
    .then(stuff => {
        res.status(200);  
        res.json(stuff);
    })

    .catch(error => {
        res.status(404);  
        res.json({error});
    })

};

exports.getOneThing = (req, res)=>{ //get one thing
    const _idOfThing = req.params.id;

    thing.findOne({_id:_idOfThing})
    .then(dataThing => {
        res.status(200);
        res.json(dataThing);
    })
    .catch(error => {
        res.status(404);
        res.json({error});
    })
}

exports.createThing = (req, res) =>{  // create a new thing

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
};

exports.updateThing = (req, res)=>{  //update a datas of thing
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
};

exports.deleteThing = (req, res)=>{ //delete one thing from data base

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
}