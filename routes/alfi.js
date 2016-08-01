var express = require('express');
var routerAlfi = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAlfi.get('/', function(req, res) {
    var renderObj = {
        title: "Allocorrigia filiformis",
        clade: "Trematoda",
        source: "USNPC",
    };
    res.render('Alfi', renderObj);
});

// Grab data from document
routerAlfi.post('/', function(req, res) {

    res.end();
});

module.exports = routerAlfi;
