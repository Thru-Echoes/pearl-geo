var express = require('express');
var routerAMBLYOMMA_AMERICANUM = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAMBLYOMMA_AMERICANUM.get('/', function(req, res) {

    var renderObj = {
        title: "Amblyomma americanum",
        clade: "Ixodida",
        source: "GBIF USNPC",
        currMap: "pdf/web/viewer.html?file=species-pages/AMBLYOMMA_AMERICANUM/AMBLYOMMA AMERICANUM current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/AMBLYOMMA_AMERICANUM/future-maps/future.pdf",
        url: "/AMBLYOMMA_AMERICANUM",
        urlCSV: "pdf/web/species-pages/AMBLYOMMA_AMERICANUM/AMBLYOMMA AMERICANUM pearldata.csv"
    };
    res.render('AMBLYOMMA_AMERICANUM', renderObj);
});

// Grab data from document
routerAMBLYOMMA_AMERICANUM.post('/', function(req, res) {

    res.end();
});

module.exports = routerAMBLYOMMA_AMERICANUM;
