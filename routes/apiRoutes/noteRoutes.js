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

router.delete('/notes/:id', async (req, res) => {
    const { id } = req.params
    notes = await deleteNote(id, notesArray);
    res.json(notesArray);
  });

module.exports = router;
