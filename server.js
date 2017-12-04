const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const jsonServer = require('json-server')

const port = process.env.PORT || 8080;
const app = express();

//db
app.use('/api', jsonServer.router('api/db.json'));

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/dist'));

// Connect server to Angular index.html
app.get('*', (req, res) => {
    res.sendFile(`dist/index.html`, { root: './' });
});

// Start Server
app.listen(port, () => {
    console.log('Listening on port ' + port + ' in ' + process.env.NODE_ENV + ' mode');
});