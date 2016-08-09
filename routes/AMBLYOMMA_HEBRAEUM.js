var express = require('express');
var routerAMBLYOMMA_HEBRAEUM = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAMBLYOMMA_HEBRAEUM.get('/', function(req, res) {
    var renderObj = {
        title: "Amblyomma hebraeum",
        clade: "Ixodida",
        source: "Cumming GBIF",
        currMap: "pdf/web/viewer.html?file=species-pages/AMBLYOMMA_HEBRAEUM/AMBLYOMMA HEBRAEUM current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/AMBLYOMMA_HEBRAEUM/future-maps/future.pdf",
        url: "/AMBLYOMMA_HEBRAEUM",
        urlCSV: "pdf/web/species-pages/AMBLYOMMA_HEBRAEUM/AMBLYOMMA HEBRAEUM pearldata.csv"
    };
    res.render('AMBLYOMMA_HEBRAEUM', renderObj);
});

// Grab data from document
routerAMBLYOMMA_HEBRAEUM.post('/', function(req, res) {

    res.end();
});

module.exports = routerAMBLYOMMA_HEBRAEUM;
