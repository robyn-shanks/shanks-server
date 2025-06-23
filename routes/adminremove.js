const express = require('express');
const router = express.Router();

router.get('/remove', (req, res) => {
    res.send('Admin Remove Page');
});

module.exports = router;
