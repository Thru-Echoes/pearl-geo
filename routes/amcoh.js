var express = require('express');
var routerAmcoh = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAmcoh.get('/', function(req, res) {
    var renderObj = {
        title: "Amblyomma Cohaerens",
        clade: "Ixodida",
        source: "Cumming GBIF",
    };
    res.render('Amcoh', renderObj);
});

// Grab data from document
routerAmcoh.post('/', function(req, res) {

    res.end();
});

module.exports = routerAmcoh;
