var express = require('express');
var routerAlpr = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAlpr.get('/', function(req, res) {
    var renderObj = {
        title: "Alaimus primitivus",
        clade: "Nematoda",
        source: "GBIF",
        currMap: "pdf/web/viewer.html?file=species-pages/alpr/ALAIMUS PRIMITIVUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/alpr/future-maps/ALAIMUS PRIMITIVUS future.pdf",
        crStatus: "CR",
        dataQuality: "Fair",
        modelQuality: "Good",
        url: "/alpr",
        urlCSV: "pdf/web/species-pages/alpr/ALAIMUS PRIMITIVUS pearldata.csv"
    };
    res.render('Alpr', renderObj);
});

// Grab data from document
routerAlpr.post('/', function(req, res) {

    res.end();
});

module.exports = routerAlpr;
