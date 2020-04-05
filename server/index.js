const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config({
  path: path.join(__dirname, '..', '.env.server'),
});
const mongoose = require('mongoose');
const mongoDbPort = process.env.NODE_ENV === 'test' ? 27018 : 27017;

mongoose
  .connect(`mongodb://localhost:${mongoDbPort}/printbay`, {
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then((result) => {
    console.log('connected');
  })
  .catch((err) => {
    console.log('RHC Connection error', err.message);
  });

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use('/items', require('./routes/items'));
app.use('/users', require('./routes/users'));

if (process.env.NODE_ENV !== 'test') {
  app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
  });
}

module.exports = app;
