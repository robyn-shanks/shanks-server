const express = require('express');
const router = express.Router();

router.get('/page', (req, res) => {
  res.send('Home Rage');
});

module.exports = router;
