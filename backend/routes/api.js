const express = require('express');
const router = express.Router();

// TODO: Define API routes here

router.get('/hello', (req, res) => {
    res.json(
        { 
            message: 'Hello, world!' 
        }
    );
});

module.exports = router;