var express = require('express');
var routerAMBLYOMMA_TRIGUTTATUM = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAMBLYOMMA_TRIGUTTATUM.get('/', function(req, res) {
    var renderObj = {
        title: "Amblyomma triguttatum",
        clade: "Ixodida",
        source: "GBIF",
        currMap: "pdf/web/viewer.html?file=species-pages/AMBLYOMMA_TRIGUTTATUM/AMBLYOMMA TRIGUTTATUM current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/AMBLYOMMA_TRIGUTTATUM/future-maps/future.pdf",
        url: "/AMBLYOMMA_TRIGUTTATUM",
        urlCSV: "pdf/web/species-pages/AMBLYOMMA_TRIGUTTATUM/AMBLYOMMA TRIGUTTATUM pearldata.csv"
    };
    res.render('AMBLYOMMA_TRIGUTTATUM', renderObj);
});

// Grab data from document
routerAMBLYOMMA_TRIGUTTATUM.post('/', function(req, res) {

    res.end();
});

module.exports = routerAMBLYOMMA_TRIGUTTATUM;
