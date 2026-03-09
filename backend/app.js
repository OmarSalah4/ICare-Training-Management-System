const express = require('express');
const app = express();

// (Later on, you will add things like CORS and your routes here)

// This is the crucial line missing! 
// It hands the 'app' over so that index.js can grab it.
module.exports = app;
