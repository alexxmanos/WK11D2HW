const express = require('express');
const app = express();
const port = 3000;

let bottlesOfBeer = 99;

app.get('/', (req, res) => {
  res.send(`<h1>${bottlesOfBeer} Bottles of beer on the wall</h1>
            <a href="/take-one-down">Take one down, pass it around</a>`);
});

app.get('/take-one-down', (req, res) => {
  bottlesOfBeer--;

  if (bottlesOfBeer === 0) {
    res.send(`<h1>No more bottles of beer on the wall</h1>
              <a href="/">Start over</a>`);
  } else {
    res.send(`<h1>${bottlesOfBeer} Bottles of beer on the wall</h1>
              <a href="/take-one-down">Take one down, pass it around</a>
              <a href="/">Start over</a>`);
  }
});

app.get('/reset', (req, res) => {
  bottlesOfBeer = 99;
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
