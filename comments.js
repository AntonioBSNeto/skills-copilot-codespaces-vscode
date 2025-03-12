// Create web server to handle comments
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Use body-parser middleware to parse POST data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Array to store comments
let comments = [];

// POST /comments
app.post('/comments', (req, res) => {
  const comment = req.body.comment;
  comments.push(comment);
  res.json({ message: 'Comment added!' });
});

// GET /comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Start server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});