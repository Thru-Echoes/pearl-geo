var express = require('express');
var routerAMBLYOMMA_SPARSUM = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAMBLYOMMA_SPARSUM.get('/', function(req, res) {
    var renderObj = {
        title: "Amblyomma sparsum",
        clade: "Ixodida",
        source: "Cumming GBIF",
        currMap: "pdf/web/viewer.html?file=species-pages/AMBLYOMMA_SPARSUM/AMBLYOMMA SPARSUM current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/AMBLYOMMA_SPARSUM/future-maps/future.pdf",
        url: "/AMBLYOMMA_SPARSUM",
        urlCSV: "pdf/web/species-pages/AMBLYOMMA_SPARSUM/AMBLYOMMA SPARSUM pearldata.csv"
    };
    res.render('AMBLYOMMA_SPARSUM', renderObj);
});

// Grab data from document
routerAMBLYOMMA_SPARSUM.post('/', function(req, res) {

    res.end();
});

module.exports = routerAMBLYOMMA_SPARSUM;
