var express = require('express');
var routerAMBLYOMMA_FIMBRIATUM = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAMBLYOMMA_FIMBRIATUM.get('/', function(req, res) {
    var renderObj = {
        title: "Amblyomma fimbriatum",
        clade: "Ixodida",
        source: "GBIF",
        currMap: "pdf/web/viewer.html?file=species-pages/AMBLYOMMA_FIMBRIATUM/AMBLYOMMA FIMBRIATUM current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/AMBLYOMMA_FIMBRIATUM/future-maps/future.pdf",
        url: "/AMBLYOMMA_FIMBRIATUM",
        urlCSV: "pdf/web/species-pages/AMBLYOMMA_FIMBRIATUM/AMBLYOMMA FIMBRIATUM pearldata.csv"
    };
    res.render('AMBLYOMMA_FIMBRIATUM', renderObj);
});

// Grab data from document
routerAMBLYOMMA_FIMBRIATUM.post('/', function(req, res) {

    res.end();
});

module.exports = routerAMBLYOMMA_FIMBRIATUM;
