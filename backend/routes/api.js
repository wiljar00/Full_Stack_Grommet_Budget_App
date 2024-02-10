const express = require('express');
const entriesRouter = require('./entries/entriesRouter');

const router = express.Router();

router.use('/entries', entriesRouter);

module.exports = router;
