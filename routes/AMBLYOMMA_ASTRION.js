var express = require('express');
var routerAMBLYOMMA_ASTRION = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAMBLYOMMA_ASTRION.get('/', function(req, res) {
    var renderObj = {
        title: "Amblyomma astrion",
        clade: "Ixodida",
        source: "Cumming GBIF",
        currMap: "pdf/web/viewer.html?file=species-pages/AMBLYOMMA_ASTRION/AMBLYOMMA ASTRION current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/AMBLYOMMA_ASTRION/future-maps/future.pdf",
        url: "/AMBLYOMMA_ASTRION",
        urlCSV: "pdf/web/species-pages/AMBLYOMMA_ASTRION/AMBLYOMMA ASTRION pearldata.csv"
    };
    res.render('AMBLYOMMA_ASTRION', renderObj);
});

// Grab data from document
routerAMBLYOMMA_ASTRION.post('/', function(req, res) {

    res.end();
});

module.exports = routerAMBLYOMMA_ASTRION;
