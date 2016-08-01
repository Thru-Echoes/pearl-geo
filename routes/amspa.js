var express = require('express');
var routerAmspa = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAmspa.get('/', function(req, res) {
    var renderObj = {
        title: "Amblyomma Sparsum",
        clade: "Ixodida",
        source: "Cumming GBIF",
    };
    res.render('Amspa', renderObj);
});

// Grab data from document
routerAmspa.post('/', function(req, res) {

    res.end();
});

module.exports = routerAmspa;
