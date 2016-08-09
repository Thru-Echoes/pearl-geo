var express = require('express');
var routerAMBLYOMMA_MACULATUM = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAMBLYOMMA_MACULATUM.get('/', function(req, res) {
    var renderObj = {
        title: "Amblyomma maculatum",
        clade: "Ixodida",
        source: "GBIF USNPC",
        currMap: "pdf/web/viewer.html?file=species-pages/AMBLYOMMA_MACULATUM/AMBLYOMMA MACULATUM current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/AMBLYOMMA_MACULATUM/future-maps/future.pdf",
        url: "/AMBLYOMMA_MACULATUM",
        urlCSV: "pdf/web/species-pages/AMBLYOMMA_MACULATUM/AMBLYOMMA MACULATUM pearldata.csv"
    };
    res.render('AMBLYOMMA_MACULATUM', renderObj);
});

// Grab data from document
routerAMBLYOMMA_MACULATUM.post('/', function(req, res) {

    res.end();
});

module.exports = routerAMBLYOMMA_MACULATUM;
