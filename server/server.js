require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

// use body parser to get data from POST requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use API routes from the api folder
const apis = require('./api');
app.use('/api', apis);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));

  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}

mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('mongo connected...'))
  .catch((err) => console.log(err));

app.listen(port, () => console.log(`Listening on port ${port}`));
