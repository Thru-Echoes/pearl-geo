var express = require('express');
var routerTAENIA_SERIALIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerTAENIA_SERIALIS.get('/', function(req, res) {

    var renderObj = {
        title: "Taenia serialis",
        currMap: "pdf/web/viewer.html?file=species-pages/TAENIA_SERIALIS/TAENIA SERIALIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/TAENIA_SERIALIS/future-maps/future.pdf",
        url: "/TAENIA_SERIALIS",
        urlCSV: "pdf/web/species-pages/TAENIA_SERIALIS/TAENIA SERIALIS pearldata.csv"
    };
    res.render('TAENIA_SERIALIS', renderObj);
});

// Grab data from document
routerTAENIA_SERIALIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerTAENIA_SERIALIS;
