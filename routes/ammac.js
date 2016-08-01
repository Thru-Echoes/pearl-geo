var express = require('express');
var routerAmmac = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAmmac.get('/', function(req, res) {
    var renderObj = {
        title: "Amblyomma Maculatum",
        clade: "Ixodida",
        source: "GBIF USNPC",
    };
    res.render('Ammac', renderObj);
});

// Grab data from document
routerAmmac.post('/', function(req, res) {

    res.end();
});

module.exports = routerAmmac;
