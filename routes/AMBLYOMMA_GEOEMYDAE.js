var express = require('express');
var routerAMBLYOMMA_GEOEMYDAE = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAMBLYOMMA_GEOEMYDAE.get('/', function(req, res) {
    var renderObj = {
        title: "Amblyomma geoemydae",
        clade: "Ixodida",
        source: "GBIF",
        currMap: "pdf/web/viewer.html?file=species-pages/AMBLYOMMA_GEOEMYDAE/AMBLYOMMA GEOEMYDAE current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/AMBLYOMMA_GEOEMYDAE/future-maps/future.pdf",
        url: "/AMBLYOMMA_GEOEMYDAE",
        urlCSV: "pdf/web/species-pages/AMBLYOMMA_GEOEMYDAE/AMBLYOMMA GEOEMYDAE pearldata.csv"
    };
    res.render('AMBLYOMMA_GEOEMYDAE', renderObj);
});

// Grab data from document
routerAMBLYOMMA_GEOEMYDAE.post('/', function(req, res) {

    res.end();
});

module.exports = routerAMBLYOMMA_GEOEMYDAE;
