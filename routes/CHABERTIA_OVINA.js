var express = require('express');
var routerCHABERTIA_OVINA = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerCHABERTIA_OVINA.get('/', function(req, res) {

    var renderObj = {
        title: "Chabertia ovina",
        currMap: "pdf/web/viewer.html?file=species-pages/CHABERTIA_OVINA/CHABERTIA OVINA current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/CHABERTIA_OVINA/future-maps/future.pdf",
        url: "/CHABERTIA_OVINA",
        urlCSV: "pdf/web/species-pages/CHABERTIA_OVINA/CHABERTIA OVINA pearldata.csv"
    };
    res.render('CHABERTIA_OVINA', renderObj);
});

// Grab data from document
routerCHABERTIA_OVINA.post('/', function(req, res) {

    res.end();
});

module.exports = routerCHABERTIA_OVINA;
