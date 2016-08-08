var express = require('express');
var routerAmcom = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAmcom.get('/', function(req, res) {
    var renderObj = {
        title: "Amblyomma Compressum",
        clade: "Ixodida",
        source: "Cumming GBIF",
    };
    res.render('amcom', renderObj);
});

// Grab data from document
routerAmcom.post('/', function(req, res) {

    res.end();
});

module.exports = routerAmcom;
