const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const entryRouter = require('./entryRouter');

const entriesFilePath = path.join(__dirname, 'entries.json');

const readEntries = () => {
  const entriesData = fs.readFileSync(entriesFilePath, 'utf-8');
  return JSON.parse(entriesData);
};

const writeEntries = entries => {
  const entriesData = JSON.stringify(entries, null, 2);
  fs.writeFileSync(entriesFilePath, entriesData, 'utf-8');
};

router.get('/', (req, res) => {
  const entries = readEntries();
  res.json(entries);
});

router.use('/:id', entryRouter);

module.exports = router;
