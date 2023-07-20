const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 1111;

// Sample list of approved usernames (you can replace this with your own list)
const approvedNames = ['user1', 'user2', 'user3'];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve the HTML page with the form
app.get('/', (req, res) => {
  res.send(`
    <html>
      <body>
        <form action="/checkUsername" method="post">
          <label for="username">Username:</label>
          <input type="text" id="username" name="username">
          <button type="submit">Check</button>
        </form>
      </body>
    </html>
  `);
});

// Check if the submitted username is in the list of approved names
app.post('/checkUsername', (req, res) => {
  const { username } = req.body;
  if (approvedNames.includes(username)) {
    res.send(`${username} is an approved username.`);
  } else {
    res.send(`${username} is not an approved username.`);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});