var express = require('express');
var routerAMBLYOMMA_COHAERENS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAMBLYOMMA_COHAERENS.get('/', function(req, res) {
    var renderObj = {
        title: "Amblyomma cohaerens",
        clade: "Ixodida",
        source: "Cumming GBIF",
        currMap: "pdf/web/viewer.html?file=species-pages/AMBLYOMMA_COHAERENS/AMBLYOMMA COHAERENS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/AMBLYOMMA_COHAERENS/future-maps/future.pdf",
        url: "/AMBLYOMMA_COHAERENS",
        urlCSV: "pdf/web/species-pages/AMBLYOMMA_COHAERENS/AMBLYOMMA COHAERENS pearldata.csv"
    };
    res.render('AMBLYOMMA_COHAERENS', renderObj);
});

// Grab data from document
routerAMBLYOMMA_COHAERENS.post('/', function(req, res) {

    res.end();
});

module.exports = routerAMBLYOMMA_COHAERENS;
