const express = require('express');
const router = express.Router();
const knex = require("knex")(require("../knexfile"));

router.get('/', async (req, res) => {
  try {
    const paintings = await knex('paintings').select('*');
    res.status(200).json(paintings);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving Inventory items', message: error.message });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  console.log(id)
  try {
    const painting = await knex('paintings').where({ id }).first();
    if (!painting) {
      return res.status(404).json({ error: 'Painting not found' });
    }
    res.json(painting);
  } catch (error) {
    console.error('Error fetching painting data:', error);
    res.status(500).json({ error: 'Error fetching painting data' });
  }
});

module.exports = router;


