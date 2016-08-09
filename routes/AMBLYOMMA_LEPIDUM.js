var express = require('express');
var routerAMBLYOMMA_LEPIDUM = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAMBLYOMMA_LEPIDUM.get('/', function(req, res) {
    var renderObj = {
        title: "Amblyomma lepidum",
        clade: "Ixodida",
        source: "Cumming GBIF",
        currMap: "pdf/web/viewer.html?file=species-pages/AMBLYOMMA_LEPIDUM/AMBLYOMMA LEPIDUM current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/AMBLYOMMA_LEPIDUM/future-maps/future.pdf",
        url: "/AMBLYOMMA_LEPIDUM",
        urlCSV: "pdf/web/species-pages/AMBLYOMMA_LEPIDUM/AMBLYOMMA LEPIDUM pearldata.csv"
    };
    res.render('AMBLYOMMA_LEPIDUM', renderObj);
});

// Grab data from document
routerAMBLYOMMA_LEPIDUM.post('/', function(req, res) {

    res.end();
});

module.exports = routerAMBLYOMMA_LEPIDUM;
