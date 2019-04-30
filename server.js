'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('./'));
app.get('/',function(request,response){
  response.status(200).send('Connected!');
});

app.use('*', (request, response) => response.send('Route doesn\'t exist!'));
app.listen(PORT, () => {
  console.log(`Listen on port: ${PORT}`);
});
