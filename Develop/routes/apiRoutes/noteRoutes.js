const router = require('express').Router();

const { createNote } = require('../../lib/notes');
let { notesArray } = require('../../db/db.json');

router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
    
});

router.post('/notes', (req, res) => {
    if(notesArray){
    req.body.id = notesArray.length.toString();
    } else 
    {req.body.id = 0}
    res.json(createNote(req.body, notesArray));
});

module.exports = router;
