const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

const entriesFilePath = path.join(__dirname, 'entries.json');

const readEntries = () => {
  const entriesData = fs.readFileSync(entriesFilePath, 'utf-8');
  return JSON.parse(entriesData);
};

const writeEntries = entries => {
  const entriesData = JSON.stringify(entries, null, 2);
  fs.writeFileSync(entriesFilePath, entriesData, 'utf-8');
};

router.get('/:id', (req, res) => {
  const entryId = parseInt(req.params.id);
  const entries = readEntries();
  const entry = entries.find(entry => entry.id === entryId);

  if (entry) {
    res.json(entry);
  } else {
    res.status(404).json({ message: 'Entry not found' });
  }
});

router.post('/', (req, res) => {
  const { amount, description, date } = req.body;

  if (amount && description && date) {
    const entries = readEntries();
    const newEntry = {
      id: entries.length + 1,
      amount,
      description,
      date,
    };

    entries.push(newEntry);
    writeEntries(entries);

    res.status(201).json(newEntry);
  } else {
    res.status(400).json({ message: 'Invalid entry data' });
  }
});

module.exports = router;
