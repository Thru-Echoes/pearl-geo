var express = require('express');
var routerABBREVIATA_HASTASPICULA = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerABBREVIATA_HASTASPICULA.get('/', function(req, res) {

    var renderObj = {
        title: "Abbreviata hastaspicula",
        clade: "Nematoda",
        source: "GBIF",
        currMap: "pdf/web/viewer.html?file=species-pages/ABBREVIATA_HASTASPICULA/ABBREVIATA HASTASPICULA current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/ABBREVIATA_HASTASPICULA/future-maps/future.pdf",
        url: "/ABBREVIATA_HASTASPICULA",
        urlCSV: "pdf/web/species-pages/ABBREVIATA_HASTASPICULA/ABBREVIATA HASTASPICULA pearldata.csv"
    };
    res.render('ABBREVIATA_HASTASPICULA', renderObj);
});

// Grab data from document
routerABBREVIATA_HASTASPICULA.post('/', function(req, res) {

    res.end();
});

module.exports = routerABBREVIATA_HASTASPICULA;
