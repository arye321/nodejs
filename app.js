const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); // Required for serving static files

const app = express();
const approvedNames = ['user1', 'user2', 'user3']; // Replace this with your list of approved names

const PORT = 1111; // You can change the port if needed

app.use(bodyParser.json());

// Serve the frontend files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to check the username
app.post('/checkUsername', (req, res) => {
  const { username } = req.body;

  if (approvedNames.includes(username)) {
    res.json({ status: 'approved' });
  } else {
    res.json({ status: 'rejected' });
  }
});

// Route for serving the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
