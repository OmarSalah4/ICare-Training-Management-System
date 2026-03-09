const express = require('express');
const app = express();

// (Later on, you will add things like CORS and your routes here)

// This is the crucial line missing! 
// It hands the 'app' over so that index.js can grab it.
module.exports = app;
// Note: You don't need to call app.listen() here, because index.js will do that for you.