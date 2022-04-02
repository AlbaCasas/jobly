require('dotenv').config();
const api = require('./api');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', api);

module.exports = app;
