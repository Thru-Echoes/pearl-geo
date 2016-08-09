var express = require('express');
var routerAMBLYOMMA_GEMMA = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAMBLYOMMA_GEMMA.get('/', function(req, res) {
    var renderObj = {
        title: "Amblyomma gemma",
        clade: "Ixodida",
        source: "Cumming GBIF",
        currMap: "pdf/web/viewer.html?file=species-pages/AMBLYOMMA_GEMMA/AMBLYOMMA GEMMA current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/AMBLYOMMA_GEMMA/future-maps/future.pdf",
        url: "/AMBLYOMMA_GEMMA",
        urlCSV: "pdf/web/species-pages/AMBLYOMMA_GEMMA/AMBLYOMMA GEMMA pearldata.csv"
    };
    res.render('AMBLYOMMA_GEMMA', renderObj);
});

// Grab data from document
routerAMBLYOMMA_GEMMA.post('/', function(req, res) {

    res.end();
});

module.exports = routerAMBLYOMMA_GEMMA;
