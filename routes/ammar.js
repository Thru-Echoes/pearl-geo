var express = require('express');
var routerAmmar = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAmmar.get('/', function(req, res) {
    var renderObj = {
        title: "Amblyomma Marmoreum",
        clade: "Ixodida",
        source: "Cumming GBIF",
    };
    res.render('Ammar', renderObj);
});

// Grab data from document
routerAmmar.post('/', function(req, res) {

    res.end();
});

module.exports = routerAmmar;
