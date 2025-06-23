const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'public/images/' });
const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken'); 
const knex = require("knex")(require("../knexfile"));
const userEmail = 'test@test.com';
const userPassword = 'password'; 

router.post('/adminlogin', async (req, res) => {
  const { email, password } = req.body;

  try {
    const userPasswordHash = await bcrypt.hash(userPassword, 10);
    
    if (email !== userEmail) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isValidPassword = await bcrypt.compare(password, userPasswordHash);
    if (!isValidPassword) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign({ email: userEmail }, 'your-secret-key', { expiresIn: '1h' });

    res.json({ token });
  } catch (error) {
    console.error('Login failed:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


router.post("/add", 
  upload.fields([{ name: 'imageFile', maxCount: 1},
    { name: 'title' },
    { name: 'size' },
    { name: 'price' },
    { name: 'available' }
  ]),
  async (req, res) => {
    console.log(req.files);
    const imageFile = req.files['imageFile'][0];
    const body = req.body;
    console.log('image name: ', req.body.image)
    req.body.image = 'http://localhost:8080/images/' + imageFile.filename;
    console.log('new image name: ', req.body.image)
    const requiredFields = [
      "title",
      "size",
      "price",
      "image",
      "available"
    ];
    console.log("1")


    
    if (
      !requiredFields.every((field) => {
        const exists = body[field];
        return exists;
      })
    ) {
      console.log("Missing fields")
      return res.status(400).json("Missing properties in the request body");
    }
    console.log("2")

    
    const [id] = await knex("paintings").insert(body);
    const [painting] = await knex("paintings").where({ id });

    return res.status(200).json(painting);
});

 router.delete(`/remove/:id`, async (req, res) => {
  const { id } = req.params;
  try {
    const painting = await knex("paintings").where("id", id);
    if (painting.length === 0) {
      return res.status(404).json("Painting not found");
    }
    await knex("paintings").where("id", id).del();
    res.status(204).send();
  } catch (error) {
    res.status(500).json(`Error deleting painting item: ${error}`);
  }
});

module.exports = router;
