require('dotenv').config();
const Account = require('./models/Account');
const express = require('express');
require('./database/connection'); // Initializes database connection
const path = require('path');
const cors = require('cors');
const authenticate = require('./middleware/authenticate');
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const nestsRouter = require('./routes/nests');
app.use('/nests', nestsRouter);

// Place specific routes before the catch-all 404 route
app.get('/api/userinfo', authenticate, async (req, res) => {
  try {
    const user = await Account.findById(req.user.id).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    console.log('User object:', user); // Log the user object before sending the response
    res.json(user);
  } catch (error) {
    
    res.status(500).json({ message: error.message });
  }
});

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  res.status(404).json({ message: 'Resource not found' });
});

// Error handler
app.use((error, req, res, next) => {
  console.error(error);
  res.status(error.status || 500).json({
    message: error.message || 'An internal server error occurred',
  });
});


const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

