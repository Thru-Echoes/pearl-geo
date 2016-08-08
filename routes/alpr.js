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
        futMap: "pdf/web/viewer.html?file=species-pages/alpr/future-maps/future.pdf",
        url: "/alpr",
        urlCSV: "pdf/web/species-pages/alpr/ALAIMUS PRIMITIVUS pearldata.csv"
    };
    res.render('alpr', renderObj);
});

// Grab data from document
routerAlpr.post('/', function(req, res) {

    res.end();
});

module.exports = routerAlpr;
