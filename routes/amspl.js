var express = require('express');
var routerAmspl = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAmspl.get('/', function(req, res) {
    var renderObj = {
        title: "Amblyomma Splendidum",
        clade: "Ixodida",
        source: "Cumming GBIF",
    };
    res.render('Amspl', renderObj);
});

// Grab data from document
routerAmspl.post('/', function(req, res) {

    res.end();
});

module.exports = routerAmspl;
