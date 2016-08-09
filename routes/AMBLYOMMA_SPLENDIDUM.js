var express = require('express');
var routerAMBLYOMMA_SPLENDIDUM = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAMBLYOMMA_SPLENDIDUM.get('/', function(req, res) {
    var renderObj = {
        title: "Amblyomma splendidum",
        clade: "Ixodida",
        source: "Cumming GBIF",
        currMap: "pdf/web/viewer.html?file=species-pages/AMBLYOMMA_SPLENDIDUM/AMBLYOMMA SPLENDIDUM current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/AMBLYOMMA_SPLENDIDUM/future-maps/future.pdf",
        url: "/AMBLYOMMA_SPLENDIDUM",
        urlCSV: "pdf/web/species-pages/AMBLYOMMA_SPLENDIDUM/AMBLYOMMA SPLENDIDUM pearldata.csv"
    };
    res.render('AMBLYOMMA_SPLENDIDUM', renderObj);
});

// Grab data from document
routerAMBLYOMMA_SPLENDIDUM.post('/', function(req, res) {

    res.end();
});

module.exports = routerAMBLYOMMA_SPLENDIDUM;
