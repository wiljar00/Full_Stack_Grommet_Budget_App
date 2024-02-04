const express = require('express');
const router = express.Router();

const entries = [
    {
        id: 1,
        amount: 50.25,
        description: "Sample Entry 1",
        date: "2022-02-15T10:30:00.000Z"
    },
    {
        id: 2,
        amount: 30.75,
        description: "Sample Entry 2",
        date: "2022-02-16T12:45:00.000Z"
    },

];

router.get('/entries', (req, res) => {
    res.json(entries);
});

router.get('/entries/:id', (req, res) => {
    const entryId = parseInt(req.params.id);
    const entry = entries.find(entry => entry.id === entryId);
  
    if (entry) {
      res.json(entry);
    } else {
      res.status(404).json({ message: 'Entry not found' });
    }
});

module.exports = router;