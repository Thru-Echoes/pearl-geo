var express = require('express');
var routerAMBLYOMMA_MARMOREUM = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAMBLYOMMA_MARMOREUM.get('/', function(req, res) {
    var renderObj = {
        title: "Amblyomma marmoreum",
        clade: "Ixodida",
        source: "Cumming GBIF",
        currMap: "pdf/web/viewer.html?file=species-pages/AMBLYOMMA_MARMOREUM/AMBLYOMMA MARMOREUM current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/AMBLYOMMA_MARMOREUM/future-maps/future.pdf",
        url: "/AMBLYOMMA_MARMOREUM",
        urlCSV: "pdf/web/species-pages/AMBLYOMMA_MARMOREUM/AMBLYOMMA MARMOREUM pearldata.csv"
    };
    res.render('AMBLYOMMA_MARMOREUM', renderObj);
});

// Grab data from document
routerAMBLYOMMA_MARMOREUM.post('/', function(req, res) {

    res.end();
});

module.exports = routerAMBLYOMMA_MARMOREUM;
