var express = require('express');
var routerTAENIA_SOLIUM = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerTAENIA_SOLIUM.get('/', function(req, res) {

    var renderObj = {
        title: "Taenia solium",
        currMap: "pdf/web/viewer.html?file=species-pages/TAENIA_SOLIUM/TAENIA SOLIUM current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/TAENIA_SOLIUM/future-maps/future.pdf",
        url: "/TAENIA_SOLIUM",
        urlCSV: "pdf/web/species-pages/TAENIA_SOLIUM/TAENIA SOLIUM pearldata.csv"
    };
    res.render('TAENIA_SOLIUM', renderObj);
});

// Grab data from document
routerTAENIA_SOLIUM.post('/', function(req, res) {

    res.end();
});

module.exports = routerTAENIA_SOLIUM;
