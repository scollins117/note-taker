const router = require('express').Router();

const { createNote } = require('../../lib/notes');
let { notes } = require('../../db/db.json');

router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
    
});

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();

    const note = createNote(req.body, notes);
    res.json(note);
});

router.delete('/notes', (req, res) => {
    const userIndex = getUserIndex(req.params.userId)
   
    if (userIndex === -1) return res.status(404).json({})
   
    users.splice(userIndex, 1)
    res.json(users)
})

module.exports = router;
