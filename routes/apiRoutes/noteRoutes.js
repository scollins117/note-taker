const router = require('express').Router();

const { createNote, deleteNote } = require('../../lib/notes');
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

// Route parameters :👌 
router.delete('/notes/:id', async (req, res) => {
    const { id } = req.params
    notes = await deleteNote(id, notes);
    res.json(notes);
});

module.exports = router;
