var express = require('express');
var routerAMBLYOMMA_LIMBATUM = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAMBLYOMMA_LIMBATUM.get('/', function(req, res) {
    var renderObj = {
        title: "Amblyomma limbatum",
        clade: "Ixodida",
        source: "GBIF",
        currMap: "pdf/web/viewer.html?file=species-pages/AMBLYOMMA_LIMBATUM/AMBLYOMMA LIMBATUM current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/AMBLYOMMA_LIMBATUM/future-maps/future.pdf",
        url: "/AMBLYOMMA_LIMBATUM",
        urlCSV: "pdf/web/species-pages/AMBLYOMMA_LIMBATUM/AMBLYOMMA LIMBATUM pearldata.csv"
    };
    res.render('AMBLYOMMA_LIMBATUM', renderObj);
});

// Grab data from document
routerAMBLYOMMA_LIMBATUM.post('/', function(req, res) {

    res.end();
});

module.exports = routerAMBLYOMMA_LIMBATUM;
