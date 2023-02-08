
// things routing

const express= require('express');
const authCtrl = require('../Middlware/Auth');
const stuffCtrl = require('../Controllers/stuff');
const router = express.Router();

// MIDDLWARES
// find any thing from data base
router.get('/', authCtrl.verifyToken, stuffCtrl.getAllThings);

// find one thing from database 
router.get('/:id', authCtrl.verifyToken, stuffCtrl.getOneThing);

//create a new thing and save this in database
router.post('/', authCtrl.verifyToken, stuffCtrl.createThing);

//update a data of thing (use a _id: of thing)
router.put('/:id', authCtrl.verifyToken, stuffCtrl.updateThing);

//delete a thing in database
router.delete('/:id', authCtrl.verifyToken, stuffCtrl.deleteThing);

module.exports = router;