var express = require('express');
var routerAMBLYOMMA_HELVOLUM = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAMBLYOMMA_HELVOLUM.get('/', function(req, res) {
    var renderObj = {
        title: "Amblyomma helvolum",
        clade: "Ixodida",
        source: "GBIF",
        currMap: "pdf/web/viewer.html?file=species-pages/AMBLYOMMA_HELVOLUM/AMBLYOMMA HELVOLUM current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/AMBLYOMMA_HELVOLUM/future-maps/future.pdf",
        url: "/AMBLYOMMA_HELVOLUM",
        urlCSV: "pdf/web/species-pages/AMBLYOMMA_HELVOLUM/AMBLYOMMA HELVOLUM pearldata.csv"
    };
    res.render('AMBLYOMMA_HELVOLUM', renderObj);
});

// Grab data from document
routerAMBLYOMMA_HELVOLUM.post('/', function(req, res) {

    res.end();
});

module.exports = routerAMBLYOMMA_HELVOLUM;
