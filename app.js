const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`<h1>99 Bottles of beer on the wall</h1>
            <a href="/98">Take one down, pass it around</a>`);
});

app.get('/:number_of_bottles', (req, res) => {
  const numberOfBottles = parseInt(req.params.number_of_bottles, 10);

  if (numberOfBottles === 0) {
    res.send(`<h1>No more bottles of beer on the wall</h1>
              <a href="/">Start over</a>`);
  } else {
    res.send(`<h1>${numberOfBottles} Bottles of beer on the wall</h1>
              <a href="/${numberOfBottles - 1}">Take one down, pass it around</a>
              <a href="/">Start over</a>`);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
