var express = require('express');
var routerAgag = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAgag.get('/', function(req, res) {
    var renderObj = {
        title: "Aglenchus agricola",
        clade: "Nematoda",
        source: "GBIF",
    };
    res.render('Agag', renderObj);
});

// Grab data from document
routerAgag.post('/', function(req, res) {

    res.end();
});

module.exports = routerAgag;
