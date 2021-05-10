const express = require('express');

const app = express();
const port = process.env.PORT || 1993;

app.set('view engine', 'ejs');

app.get('/script.js', (req, res) => {
  res.type('text/javascript');

  res.render('temp.ejs', {
    aqicnToken: req.query.token,
  });
})

app.get('/surge.sgmodule', (req, res) => {
  res.type('text/plain');

  res.render('surge.ejs', {
    baseUrl: `${req.protocol}://${req.get('host')}`,
    aqicnToken: req.query.token,
  });
})

app.listen(port, () => {
  console.log(`Express server listening at http://localhost:${port}`);
});

module.exports = app;