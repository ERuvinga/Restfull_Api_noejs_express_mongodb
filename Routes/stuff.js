
// things routing

const express= require('express');
const router = express.Router();
const stuffCtrl = require('../Controllers/stuff');

// MIDDLWARES
// find any thing from data base
router.get('/', stuffCtrl.getAllThings);

// find one thing from database 
router.get('/:id', stuffCtrl.getOneThing);

//create a new thing and save this in database
router.post('/', stuffCtrl.createThing);

//update a data of thing (use a _id: of thing)
router.put('/:id', stuffCtrl.updateThing);

//delete a thing in database
router.delete('/:id', stuffCtrl.deleteThing);

module.exports = router;