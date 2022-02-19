const express = require('express');
const cors = require('cors');
const app = express();

// Set the request body using json data type
app.use(express.json());
app.use(cors());

module.exports = app;