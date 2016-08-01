var express = require('express');
var routerAmas = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAmas.get('/', function(req, res) {
    var renderObj = {
        title: "Amblyomma Astrion",
        clade: "Ixodida",
        source: "Cumming GBIF",
    };
    res.render('Amas', renderObj);
});

// Grab data from document
routerAmas.post('/', function(req, res) {

    res.end();
});

module.exports = routerAmas;
