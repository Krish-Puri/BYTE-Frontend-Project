const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

// Authentication endpoint
app.post('/login', (req, res) => {
  // Assuming you have a database where user credentials are stored
  const { username, password } = req.body;

  // Authenticate user (check username/password against database)
  // If authentication succeeds, generate an access token
  const accessToken = jwt.sign({ username }, 'secret_key', { expiresIn: '1h' });

  // Send the access token back to the client
  res.json({ accessToken });
});

app.listen(8000, () => {
  console.log('Server is running on port 8000');
});
