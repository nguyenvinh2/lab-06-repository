'use strict';

require('dotenv').config();
const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const PORT = process.env.PORT || 3000;

app.use(express.static('./'));
app.get('/',(request,response) => {
  response.status(200).send('Connected!');
});

app.get('/location',(request,response) => {
  const location = require('./data/geo.json');
  const res = parserExplorer(location,request,response);
  res === null ? response.send({'status':500, 'responseText': 'Sorry. Please enter "Lynnwood"!!'}) : response.send(res);
});

app.use('*', (request, response) => response.send('Route doesn\'t exist!'));
app.listen(PORT, () => {
  console.log(`Listen on port: ${PORT}`);
});

const parserExplorer = (location, req, res) => {
  //console.log(location);
  if(req.query.data.toLowerCase() === location.results[0]['address_components'][0]['long_name'].toLowerCase()){
    const loc = {'search_query': req.query.data, 'formatted_query': location.results[0].formatted_address,'latitude': location.results[0].geometry.location.lat,'longitude': location.results[0].geometry.location.lng};
    return loc;
  }
  else{
    return null;

  }
};
