const express = require('express');
const entriesRouter = require('./entriesRouter');

const router = express.Router();

router.use('/entries', entriesRouter);

module.exports = router;
