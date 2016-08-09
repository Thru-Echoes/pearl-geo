var express = require('express');
var routerAMBLYOMMA_THOLLONI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAMBLYOMMA_THOLLONI.get('/', function(req, res) {
    var renderObj = {
        title: "Amblyomma tholloni",
        clade: "Ixodida",
        source: "Cumming GBIF",
        currMap: "pdf/web/viewer.html?file=species-pages/AMBLYOMMA_THOLLONI/AMBLYOMMA THOLLONI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/AMBLYOMMA_THOLLONI/future-maps/future.pdf",
        url: "/AMBLYOMMA_THOLLONI",
        urlCSV: "pdf/web/species-pages/AMBLYOMMA_THOLLONI/AMBLYOMMA THOLLONI pearldata.csv"
    };
    res.render('AMBLYOMMA_THOLLONI', renderObj);
});

// Grab data from document
routerAMBLYOMMA_THOLLONI.post('/', function(req, res) {

    res.end();
});

module.exports = routerAMBLYOMMA_THOLLONI;
