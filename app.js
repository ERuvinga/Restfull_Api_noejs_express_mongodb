
// notre Application EPRESS

const express = require('express');
const stuffRouter = require('./Routes/stuff');
const app = express();  // methode express

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    next();
});

app.use(express.json()); // add express method parsing body data
app.use('/api/stuff', stuffRouter); // a route of data thing

module.exports = app;
