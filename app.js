const express = require('express');
const app = express();
const port = 3000;
const test = process.env.TEST
app.get('/', (req, res) => {
  res.send('Hello, World!', test);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});