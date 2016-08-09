var express = require('express');
var routerABBREVIATA_BANCROFTI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerABBREVIATA_BANCROFTI.get('/', function(req, res) {

    var renderObj = {
        title: "Abbreviata bancrofti",
        clade: "Nematoda",
        source: "GBIF",
        currMap: "pdf/web/viewer.html?file=species-pages/ABBREVIATA_BANCROFTI/ABBREVIATA BANCROFTI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/ABBREVIATA_BANCROFTI/future-maps/future.pdf",
        url: "/abba",
        urlCSV: "pdf/web/species-pages/ABBREVIATA_BANCROFTI/ABBREVIATA BANCROFTI pearldata.csv"
    };
    res.render('ABBREVIATA_BANCROFTI', renderObj);
});

// Grab data from document
routerABBREVIATA_BANCROFTI.post('/', function(req, res) {

    res.end();
});

module.exports = routerABBREVIATA_BANCROFTI;
