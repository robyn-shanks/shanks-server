const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8080;
require('dotenv').config();
const bodyParser = require('body-parser'); 
const axios = require('axios');
const knex = require('knex'); 
const dbConfig = require('./knexfile');
const knexInstance = knex(dbConfig);


app.use(express.json());
app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json());


const homeRouter = require('./routes/home');
const galleryRouter = require('./routes/gallery');
const productsRouter = require('./routes/products');
const contactRouter = require('./routes/contact');
const adminRouter = require('./routes/admin');
const adminAddRouter = require('./routes/adminadd');
const adminRemoveRouter = require('./routes/adminremove');


app.use('/', homeRouter);
app.use('/gallery', galleryRouter);
app.use('/products', productsRouter);
app.use('/contact', contactRouter);
app.use('/admin', adminRouter);
app.use('/admin/add', adminAddRouter);
app.use('/admin/remove', adminRemoveRouter);
app.use('/healthCheck', contactRouter);

app.get('/api/data', async (req, res) => {
  try {
    const paintings = await knexInstance('paintings').select('*');
    res.json(paintings);
  } catch(error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Error fetching data' });
  }
});


app.use((req, res) => {
    res.status(404).send("Page not found");
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
