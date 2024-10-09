const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const Nest = require('../models/Nest'); 
const Account = require('../models/Account');
const jwt = require('jsonwebtoken');
const authenticate = require('../middleware/authenticate')
// GET all nests
router.get('/search', async (req, res) => {
  // Check if a zip code query parameter is provided
  const { zipcode } = req.query;

  // If a zip code is provided, search by zip code
  if (zipcode) {
    try {
      const nests = await Nest.find({ zipcode: zipcode });
      if (nests.length > 0) {
        return res.json(nests);
      } else {
        return res.status(404).json({ message: 'Nest not found' });
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
  // GET details for a single nest by ID
router.get('/listings/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const nest = await Nest.findById(id);
    if (!nest) {
      return res.status(404).json({ message: 'Nest not found' });
    }
    res.json(nest);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// If no zip code is provided, return all nests
try {
  const nests = await Nest.find({});
  res.json(nests);
} catch (error) {
  res.status(500).json({ message: error.message });
}
});

// POST a new nest
router.post('/', async (req, res) => {
  const nest = new Nest({
  });

  try {
    const newNest = await nest.save();
    res.status(201).json(newNest);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// POST login route
router.post('/login', async (req, res) => {
  // Destructure email and password from request body
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await Account.findOne({ email });
    if (user) {
      // Compare submitted password with the hashed password in the database
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        // Create the token payload
        const payload = {
          id: user._id,
          name: user.name,
          email: user.email
        };
        
        // Sign the token
        const token = jwt.sign(
          payload, 
          process.env.JWT_SECRET, 
          { expiresIn: '1h' }
        );
        
        // Send the token to the client
        res.json({ 
          message: 'Login successful', 
          token: token, // Send the token here
          user: { id: user._id, name: user.name, email: user.email }
        });
      } else {
        // If the password does not match, send an error
        res.status(401).json({ message: 'Invalid credentials' });
      }
    } else {
      // If the user is not found, send an error
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    // Handle errors
    res.status(500).json({ message: error.message });
  }
});

router.get('/protected', authenticate, (req, res) => {
  res.json({ message: 'You have accessed a protected route' });
});


module.exports = router;
