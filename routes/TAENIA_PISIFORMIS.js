var express = require('express');
var routerTAENIA_PISIFORMIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerTAENIA_PISIFORMIS.get('/', function(req, res) {

    var renderObj = {
        title: "TAENIA PISIFORMIS",
        currMap: "pdf/web/viewer.html?file=species-pages/TAENIA_PISIFORMIS/TAENIA PISIFORMIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/TAENIA_PISIFORMIS/future-maps/future.pdf",
        url: "/TAENIA_PISIFORMIS",
        urlCSV: "pdf/web/species-pages/TAENIA_PISIFORMIS/TAENIA PISIFORMIS pearldata.csv"
    };
    res.render('TAENIA_PISIFORMIS', renderObj);
});

// Grab data from document
routerTAENIA_PISIFORMIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerTAENIA_PISIFORMIS;
