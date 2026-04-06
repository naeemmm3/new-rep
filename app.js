const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Naeem 🚀 Node app is running!');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

