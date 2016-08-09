var express = require('express');
var routerAMBLYOMMA_COMPRESSUM = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAMBLYOMMA_COMPRESSUM.get('/', function(req, res) {
    var renderObj = {
        title: "Amblyomma compressum",
        clade: "Ixodida",
        source: "Cumming GBIF",
        currMap: "pdf/web/viewer.html?file=species-pages/AMBLYOMMA_COMPRESSUM/AMBLYOMMA COMPRESSUM current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/AMBLYOMMA_COMPRESSUM/future-maps/future.pdf",
        url: "/AMBLYOMMA_COMPRESSUM",
        urlCSV: "pdf/web/species-pages/AMBLYOMMA_COMPRESSUM/AMBLYOMMA COMPRESSUM pearldata.csv"
    };
    res.render('AMBLYOMMA_COMPRESSUM', renderObj);
});

// Grab data from document
routerAMBLYOMMA_COMPRESSUM.post('/', function(req, res) {

    res.end();
});

module.exports = routerAMBLYOMMA_COMPRESSUM;
