var express = require('express');
var routerAngr = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAngr.get('/', function(req, res) {
    var renderObj = {
        title: "Anaplectus Granulosus",
        clade: "Nematoda",
        source: "GBIF",
    };
    res.render('Angr', renderObj);
});

// Grab data from document
routerAngr.post('/', function(req, res) {

    res.end();
});

module.exports = routerAngr;
