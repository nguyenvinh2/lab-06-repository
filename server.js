'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;

app.use(express.static('./data'));
app.use(cors());

app .get('/', getLocation);

app.use('*', (request, response) => response.send('Route doesn\'t exist!'));

app. listen (PORT, () => {
  console.log(`Listen on port: ${PORT}`);
});

function getLocation(req, res) {
  console.log('eyehd');
  const location = require('./data/geo.json');
  res.send(location);
}

function Location() {
  this.search_query = "seattle";
  this.formatted_query = "Seattle, WA, USA";
  this.latitude = 47.606210;
  this.longitude = -122.332071;
}